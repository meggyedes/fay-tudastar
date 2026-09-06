import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("_site");
const requiresCanonical = Boolean(process.env.SITE_URL);
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

function fail(filePath, message) {
  errors.push(`${path.relative(outputDirectory, filePath)}: ${message}`);
}

const files = await htmlFiles(outputDirectory);
for (const filePath of files) {
  const html = await readFile(filePath, "utf8");
  if (!/<html\s+lang="hu"/i.test(html)) fail(filePath, "Hiányzó vagy hibás html[lang].");
  if (!/<title>\S[\s\S]*?<\/title>/i.test(html)) fail(filePath, "Hiányzó title.");
  if (!/<meta\s+name="description"\s+content="[^"]+"/i.test(html)) fail(filePath, "Hiányzó meta description.");
  if (!/<meta\s+property="og:title"\s+content="[^"]+"/i.test(html)) fail(filePath, "Hiányzó Open Graph cím.");
  if (!/<main\s+id="main-content"/i.test(html)) fail(filePath, "Hiányzó main landmark.");
  if (!/href="#main-content"/i.test(html)) fail(filePath, "Hiányzó átugró hivatkozás.");
  if (requiresCanonical && !/<link\s+rel="canonical"\s+href="https?:\/\//i.test(html)) {
    fail(filePath, "Hiányzó canonical URL SITE_URL mellett.");
  }
  if (requiresCanonical && !/<meta\s+property="og:url"\s+content="https?:\/\//i.test(html)) {
    fail(filePath, "Hiányzó Open Graph URL SITE_URL mellett.");
  }

  const headings = [...html.matchAll(/<h([1-6])(?:\s[^>]*)?>/gi)].map((match) => Number(match[1]));
  if (headings.filter((level) => level === 1).length !== 1) {
    fail(filePath, "Pontosan egy H1 címsor szükséges.");
  }
  for (let index = 1; index < headings.length; index += 1) {
    if (headings[index] > headings[index - 1] + 1) {
      fail(filePath, `Ugró címsorszint: H${headings[index - 1]} után H${headings[index]}.`);
    }
  }

  for (const image of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt="[^"]*"/i.test(image[0])) fail(filePath, "Alt szöveg nélküli kép.");
  }
}

if (errors.length > 0) {
  console.error("Minőségi validáció sikertelen:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Minőségi validáció sikeres: ${files.length} HTML-oldal ellenőrizve.`);
