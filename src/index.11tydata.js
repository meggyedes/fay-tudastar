// Homepage presentation data; canonical subject names and lessons are unchanged.
export default {
  // Verified against Pagefind: 5 pages, 662 words. Refresh when content changes.
  searchIndexWords: 662,
  areas: [
    { title: "Motor és hajtáslánc", description: "Szerkezet, működés, rendszerek", icon: "engine", art: "engine", tone: "blue", href: "/subjects/gepjarmu-szerkezettan/" },
    { title: "Elektromos rendszerek", description: "Áramkörök, vezérlőegységek, szenzorok", icon: "chip", art: "electronics", tone: "green", href: "/subjects/elektrotechnika-elektronika-villamossagtan/" },
    { title: "Mechanika", description: "Szerkezeti egységek, erőátvitel, futómű", icon: "cog", art: "mechanics", tone: "orange", href: "/subjects/mechanika-gepelemek/" },
    { title: "Diagnosztika", description: "Hibakeresés, mérés, szervizelés", icon: "diagnostic", art: "diagnostics", tone: "purple", href: "/search/?q=diagnosztika" },
    { title: "Karbantartás", description: "Szervizelés, javítási műveletek", icon: "wrench", art: "tools", tone: "navy", href: "/search/?q=karbantartás" },
  ],
  subjectPresentation: {
    "gepjarmu-szerkezettan": { label: "Motor és hajtáslánc", art: "engine", tone: "blue" },
    "elektrotechnika-elektronika-villamossagtan": { label: "Elektrotechnika", art: "electronics", tone: "green" },
    "elektrotan": { label: "Elektrotan", art: "electronics", tone: "green" },
    "mechanika-gepelemek": { label: "Mechanika", art: "mechanics", tone: "orange" },
  },
  suggestedSearches: ["motor", "diagnosztika", "szenzor", "feszültség", "akkumulátor", "fék", "OBD"],
};
