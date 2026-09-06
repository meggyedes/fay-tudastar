import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("_site");
const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || "/";
const errors = [];

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return htmlFiles(fullPath);
      return entry.isFile() && entry.name.endsWith(".html") ? [fullPath] : [];
    }),
  );
  return nested.flat();
}

function localReference(value) {
  return value && !/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(value);
}

function outputTarget(sourceFile, reference) {
  if (reference.startsWith("/")) {
    if (pathPrefix !== "/" && !reference.startsWith(pathPrefix)) {
      throw new Error(`Az útvonal nem használja a beállított előtagot (${pathPrefix}): ${reference}`);
    }
    const route = pathPrefix === "/"
      ? reference
      : reference.slice(pathPrefix.length - 1);
    return path.resolve(outputDirectory, `.${route}`);
  }
  return path.resolve(path.dirname(sourceFile), reference);
}

async function existingTarget(target) {
  const candidates = path.extname(target)
    ? [target]
    : [path.join(target, "index.html"), target];

  for (const candidate of candidates) {
    try {
      await access(candidate);
      return candidate;
    } catch {
      // A következő, lehetséges útvonalat ellenőrizzük.
    }
  }
  return null;
}

const files = await htmlFiles(outputDirectory);
for (const filePath of files) {
  const html = await readFile(filePath, "utf8");
  const references = html.matchAll(/(?:href|src)="([^"]+)"/g);

  for (const match of references) {
    const reference = match[1];
    if (!localReference(reference)) continue;

    try {
      const [routeAndQuery, fragment] = reference.split("#", 2);
      const route = routeAndQuery.split("?", 1)[0];
      const target = route ? outputTarget(filePath, route) : filePath;
      const resolvedTarget = await existingTarget(target);

      if (!target.startsWith(outputDirectory) || !resolvedTarget) {
        errors.push(`${path.relative(outputDirectory, filePath)} → ${reference}`);
        continue;
      }
      if (fragment) {
        const targetHtml = resolvedTarget === filePath ? html : await readFile(resolvedTarget, "utf8");
        const escapedFragment = fragment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        if (!new RegExp(`(?:id|name)="${escapedFragment}"`).test(targetHtml)) {
          errors.push(`${path.relative(outputDirectory, filePath)} → Hiányzó horgony: ${reference}`);
        }
      }
    } catch (error) {
      errors.push(`${path.relative(outputDirectory, filePath)} → ${error.message}`);
    }
  }
}

if (errors.length > 0) {
  console.error("Statikus hivatkozásvalidáció sikertelen:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Statikus hivatkozásvalidáció sikeres: ${files.length} HTML-oldal ellenőrizve.`);
