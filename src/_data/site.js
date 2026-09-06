const configuredUrl = process.env.SITE_URL || "";

export default {
  name: "Iskolai Tudástár",
  description: "Személyes digitális tudástár iskolai jegyzetekhez.",
  language: "hu",
  url: configuredUrl.replace(/\/$/, ""),
};
