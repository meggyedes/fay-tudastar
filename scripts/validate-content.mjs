import { access, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import {
  contentDirectory,
  contentFiles,
  lessonSlugFromFilename,
  slugify,
} from "../src/lib/content.js";

const errors = [];
const slugs = new Map();
const topicSlugs = new Map();

function fail(filePath, message) {
  errors.push(`${filePath.replaceAll("\\", "/")}: ${message}`);
}

function validDate(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

async function validateAsset(filePath, destination, kind) {
  if (/^(https?:|mailto:|tel:|#)/i.test(destination)) return;
  const target = destination.split(/\s+/)[0].replace(/^<|>$/g, "");
  const resolved = target.startsWith("/")
    ? path.resolve("public", `.${target}`)
    : path.resolve(path.dirname(filePath), target);

  try {
    await access(resolved);
  } catch {
    fail(filePath, `Nem létező ${kind}: ${destination}`);
  }
}

function validateHeadings(filePath, body) {
  let previousLevel = 1;
  for (const line of body.split(/\r?\n/)) {
    const heading = /^(#{1,6})\s+\S/.exec(line);
    if (!heading) continue;

    const level = heading[1].length;
    if (level === 1) {
      fail(filePath, "A lecke címe a front matterből jön; a tartalomban ne használj H1 címet.");
    }
    if (level > previousLevel + 1) {
      fail(filePath, `Ugró címsorszint: H${previousLevel} után H${level}.`);
    }
    previousLevel = level;
  }
}

const files = await contentFiles(contentDirectory);
if (files.length === 0) errors.push("content/: Nem található lecke-Marketdown fájl.");

for (const filePath of files) {
  const source = await readFile(filePath, "utf8");
  const { data, content } = matter(source);
  const relativePath = path.relative(process.cwd(), filePath);
  const filename = path.basename(filePath);
  const slug = lessonSlugFromFilename(filename);

  for (const key of ["title", "subject", "date", "topics"]) {
    if (!(key in data)) fail(relativePath, `Hiányzó kötelező metadata: ${key}`);
  }
  for (const key of ["title", "subject"]) {
    if (key in data && (typeof data[key] !== "string" || !data[key].trim())) {
      fail(relativePath, `A(z) ${key} mező nem lehet üres szöveg.`);
    }
  }
  if ("date" in data && !validDate(data.date)) {
    fail(relativePath, "A date mező formátuma érvényes YYYY-MM-DD legyen.");
  }
  if ("date" in data && filename.slice(0, 10) !== data.date) {
    fail(relativePath, "A fájlnév dátum-előtagja egyezzen a date mezővel.");
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    fail(relativePath, "A fájlnévből képzett slug csak kisbetűket, számokat és kötőjeleket tartalmazhat.");
  }
  if (slugs.has(slug)) {
    fail(relativePath, `Duplikált lecke-slug: ${slug} (már használja: ${slugs.get(slug)}).`);
  } else {
    slugs.set(slug, relativePath);
  }
  if (!Array.isArray(data.topics) || data.topics.length === 0) {
    fail(relativePath, "A topics mező legalább egy témát tartalmazó lista legyen.");
  } else {
    const topicNames = new Set();
    for (const topic of data.topics) {
      if (typeof topic !== "string" || !topic.trim()) {
        fail(relativePath, "A topics lista minden eleme nem üres szöveg legyen.");
        continue;
      }
      const normalized = slugify(topic);
      if (topicNames.has(normalized)) fail(relativePath, `Duplikált téma: ${topic}.`);
      topicNames.add(normalized);
      if (topicSlugs.has(normalized) && topicSlugs.get(normalized) !== topic) {
        fail(relativePath, `Ütköző téma-slug: ${topic} és ${topicSlugs.get(normalized)}.`);
      } else {
        topicSlugs.set(normalized, topic);
      }
    }
  }
  if (!content.trim()) fail(relativePath, "A lecke tartalma nem lehet üres.");
  if (/<\/?[a-z][^>]*>/i.test(content)) {
    fail(relativePath, "Nyers HTML nem használható a tartalmi Markdown-fájlokban.");
  }

  validateHeadings(relativePath, content);
  for (const match of content.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)) {
    await validateAsset(filePath, match[1], "képhivatkozás");
  }
  for (const match of content.matchAll(/(?<!!)\[[^\]]+\]\(([^)]+)\)/g)) {
    await validateAsset(filePath, match[1], "belső hivatkozás");
  }
}

if (errors.length > 0) {
  console.error("Tartalomvalidáció sikertelen:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Tartalomvalidáció sikeres: ${files.length} lecke ellenőrizve.`);
