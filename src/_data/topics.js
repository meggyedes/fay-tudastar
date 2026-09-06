import { loadLessons, slugify } from "../lib/content.js";

export default async function () {
  const lessons = await loadLessons();
  const topics = new Map();

  for (const lesson of lessons) {
    for (const name of lesson.topics) {
      if (!topics.has(name)) {
        topics.set(name, { name, slug: slugify(name), lessons: [] });
      }
      topics.get(name).lessons.push(lesson);
    }
  }

  return [...topics.values()]
    .map((topic) => ({
      ...topic,
      lessonCount: topic.lessons.length,
      subjectCount: new Set(topic.lessons.map((lesson) => lesson.subject)).size,
    }))
    .sort((left, right) => left.name.localeCompare(right.name, "hu"));
}
