// Homepage presentation data; canonical subject names and lessons are unchanged.
export default {
  // Verified against Pagefind: 5 pages, 662 words. Refresh when content changes.
  searchIndexWords: 662,
  areas: [
    { title: "Motor és hajtáslánc", description: "Szerkezet, működés, rendszerek", icon: "engine", image: "Elektronika.png", tone: "blue", href: "/subjects/gepjarmu-szerkezettan/" },
    { title: "Elektromos rendszerek", description: "Áramkörök, vezérlőegységek, szenzorok", icon: "chip", image: "Villamosságtan.png", tone: "green", href: "/subjects/elektrotechnika-elektronika-villamossagtan/" },
    { title: "Mechanika", description: "Szerkezeti egységek, erőátvitel, futómű", icon: "cog", image: "Fék és futómű.png", tone: "orange", href: "/subjects/mechanika-gepelemek/" },
    { title: "Diagnosztika", description: "Hibakeresés, mérés, szervizelés", icon: "diagnostic", image: "Diagnosztika.png", tone: "purple", href: "/search/?q=diagnosztika" },
    { title: "Járműrendszerek", description: "A teljes jármű összefüggései egyben", icon: "vehicle", image: "Kocsi.png", tone: "navy", href: "/search/?q=járműrendszerek" },
  ],
  subjectPresentation: {
    "gepjarmu-szerkezettan": { label: "Motor és hajtáslánc", image: "Elektronika.png", tone: "blue" },
    "elektrotechnika-elektronika-villamossagtan": { label: "Elektrotechnika", image: "Villamosságtan.png", tone: "green" },
    "elektrotan": { label: "Elektrotan", image: "Villamosságtan.png", tone: "green" },
    "mechanika-gepelemek": { label: "Mechanika", image: "Fék és futómű.png", tone: "orange" },
  },
  suggestedSearches: ["motor", "diagnosztika", "szenzor", "feszültség", "akkumulátor", "fék", "OBD"],
};
