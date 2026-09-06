import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export const contentDirectory = path.resolve("content");

let lessonCache;

export function slugify(value) {
  return value
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function lessonSlugFromFilename(filename) {
  return filename.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/i, "");
}

export async function contentFiles(directory = contentDirectory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return contentFiles(fullPath);
      return entry.isFile() && entry.name.endsWith(".md") ? [fullPath] : [];
    }),
  );

  return nested.flat().sort((left, right) => left.localeCompare(right, "hu"));
}

export async function loadLessons() {
  if (lessonCache) return lessonCache;

  lessonCache = (async () => {
    const files = await contentFiles();
    const lessons = await Promise.all(
      files.map(async (filePath) => {
        const source = await readFile(filePath, "utf8");
        const parsed = matter(source);
        const filename = path.basename(filePath);
        const slug = lessonSlugFromFilename(filename);

        return {
          ...parsed.data,
          slug,
          subjectSlug: slugify(parsed.data.subject),
          filePath: path.relative(process.cwd(), filePath).replaceAll("\\", "/"),
          content: parsed.content.trim(),
        };
      }),
    );

    const lessonsBySubject = new Map();
    for (const lesson of lessons) {
      if (!lessonsBySubject.has(lesson.subject)) lessonsBySubject.set(lesson.subject, []);
      lessonsBySubject.get(lesson.subject).push(lesson);
    }

    for (const subjectLessons of lessonsBySubject.values()) {
      subjectLessons.sort(
        (left, right) =>
          left.date.localeCompare(right.date) || left.title.localeCompare(right.title, "hu"),
      );
      subjectLessons.forEach((lesson, index) => {
        lesson.previous = subjectLessons[index - 1]
          ? {
              title: subjectLessons[index - 1].title,
              slug: subjectLessons[index - 1].slug,
            }
          : null;
        lesson.next = subjectLessons[index + 1]
          ? {
              title: subjectLessons[index + 1].title,
              slug: subjectLessons[index + 1].slug,
            }
          : null;
      });
    }

    return lessons.sort(
      (left, right) =>
        right.date.localeCompare(left.date) ||
        left.title.localeCompare(right.title, "hu"),
    );
  })();

  return lessonCache;
}
