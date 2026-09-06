const configuredUrl = process.env.SITE_URL || "";

export default {
  name: "Fáy Tudástár",
  description: "Gépjármű-mechatronikai tananyagok és rendezett műszaki jegyzetek.",
  language: "hu",
  url: configuredUrl.replace(/\/$/, ""),
};
