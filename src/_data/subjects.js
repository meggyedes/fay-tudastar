import { loadLessons, slugify } from "../lib/content.js";

export default async function () {
  const lessons = await loadLessons();
  const subjects = new Map();

  for (const lesson of lessons) {
    if (!subjects.has(lesson.subject)) {
      subjects.set(lesson.subject, {
        name: lesson.subject,
        slug: slugify(lesson.subject),
        sourceAbbreviation: lesson.source_abbreviation,
        lessons: [],
      });
    }
    subjects.get(lesson.subject).lessons.push(lesson);
  }

  return [...subjects.values()]
    .map((subject) => {
      const lessons = subject.lessons.sort(
        (left, right) =>
          left.date.localeCompare(right.date) || left.title.localeCompare(right.title, "hu"),
      );
      const topicNames = new Set(lessons.flatMap((lesson) => lesson.topics));

      return {
        ...subject,
        lessons,
        topicCount: topicNames.size,
        firstLesson: lessons[0],
        latestLesson: lessons.at(-1),
      };
    })
    .sort((left, right) => left.name.localeCompare(right.name, "hu"));
}
