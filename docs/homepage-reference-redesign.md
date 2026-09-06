# Főoldal – referencia szerinti redesign

Branch: `design/homepage-reference-redesign`.

Kizárólag a főoldal presentation layere változott. Nincs új framework,
függőség vagy módosított Markdown tananyag. A közös layout a főoldalon
tölti be az új CSS-t, keresőmezőt, logót és footert; az aloldalakon az
eredeti megjelenés marad.

## A referencia lefordítása HTML/CSS-re

A megadott kép 1536 × 2304 px-es kompozíciója alapján becsült méretek;
ezek vizuális mérések, nem a referencia eredeti CSS-értékei.

| Elem | Referencia és implementáció |
| --- | --- |
| Oldalkeret | Teljes szélességű hero/footer; legfeljebb 1472 px tartalom, 32 px oldalmargó 1536 px-en. |
| Navbar | Kb. 75 px magas; fogaskerék-logó, kétsoros márkanév, középső navigáció, jobb oldali kereső és témakapcsoló. A Bootstrap collapse működése megmarad. |
| Aktív menüpont | Halványkék, 8 px-es lekerekítésű felület és 3 px-es kék alsó jelölés. |
| Hero | 540 px; sötét műhely, perspektivikus padlórács, jobbra helyezett jármű, balról sötétítő és alul árnyaló overlay. |
| Hero tipográfia | 16 px-es ritkított nagybetűs felvezető; 57 px-es, 1,02 sormagasságú H1; az utolsó sor világoskék; 20 px-es bevezető. A valódi mobilnézetben a H1 33–47 px között skálázódik. |
| Hero gombok | 56 px magas, 10 px-es lekerekítés, kék színátmenet; a másodlagos gomb áttetsző sötét felület és világos keret. |
| Hero dekoráció | Négy keretezett rendszerikon, négy tanulási előny ikonokkal, két kézírásos felirat. A műhelyfények és a padlórács helyi SVG-ben készültek. |
| Statisztikasáv | 28 px-re a herótól; 154 px magas közös panel négy oszloppal, finom elválasztókkal, színezett ikonfelületekkel. Jobbra külön idézet nagy idézőjellel és kék aláhúzással. |
| Kategóriák | Öt egyforma, kb. 281 × 346 px-es álló kártya, 17 px-es közökkel, 9 px-es lekerekítéssel. Felül alkatrészgrafika, alul sötétítő gradient, ikon, cím, leírás és kerek nyíl. |
| Kártyaszínek | Kék, zöld, narancs, lila, tengerészkék. A színek a grafika mögött világosabbak, a szöveg alatt mély sötét árnyalatba futnak. |
| Alsó hasábok | Kb. 41:57 arányú CSS Grid, 34 px-es térköz. Balra öt valódi lecke, jobbra tanulási felhívás és kereső. |
| Leckesorok | Legalább 92 px magasság, 96 × 64 px bélyegkép, cím, két témacímke/tantárgyjelölés, dátum és kerek nyíl. A hosszú valódi címek és címkék tördelhetők. |
| Tanulási felhívás | 352 px magas, rétegzett műszaki háttér, 36 px-es kétsoros cím, CTA és három ikonos előny az alsó áttetsző sávon. |
| Keresőblokk | Kb. 274 px-es világos/sötét panel; halvány motorrajz, cím, 55 px magas keresőmező és gomb, hét keresőkifejezés. GET űrlap a meglévő Pagefind keresőoldalra. |
| Telefonmakett | 280 px széles CSS-keret, fémes perem, árnyék, kamerasziget, miniatűr főoldal és statisztikák. A jobb hasábot és a footer felső szélét átfedi. Dekoratív: `aria-hidden` és `inert`, nincsenek benne működés nélküli interaktív elemek. |
| Footer | Sötétkék gradient, négyrészes felső sor, logó/leírás, két linkcsoport, idézet és önálló autó-kontúrrajz. Alsó elválasztó, copyright, technológiák és működő vissza-a-tetejére gomb. |
| Whitespace | Hero után 28 px, statisztikák után 42 px, szekciócím alatt 20 px, kártyák és alsó hasábok között 38 px, footer előtt 40 px. |
| Felületek | `#f3f8fd` háttér, `#fafdff` panelek, `#071b3d` szöveg, `#425f87` másodlagos szöveg, `#dbe7f4` keret; enyhe `0 5px 22px` árnyék. |
| Sötét mód | `#081728` oldal, `#0d2036` panelek, `#edf5ff` szöveg és `#afc5df` másodlagos szöveg; az eredeti témaváltó és localStorage-kezelés megmarad. |
| Ikonok | Helyi inline SVG-k, egységes vonalvastagsággal; a dekoratív ikonok nem kerülnek a képernyőolvasó fókuszába. |

Tablet: a kategóriák 3+2 elrendezésűek, az alsó két hasáb egymás alá kerül.
Mobil: 2×2 statisztika, 2+2+1 kategória, egyhasábos további tartalom,
teljes szélességű hero CTA-k. A nagyméretű telefonmakett és az oldalsó
dekoráció kisebb képernyőn nem szűkíti a tartalmat.

## Megmaradó funkciók és tudatos eltérések

- Eleventy, Bootstrap 5, Markdown, Pagefind, helyi MathJax és dark mode változatlan.
- A valódi öt lecke, azok címei, dátumai és hivatkozásai szerepelnek, nem a referencia mintaleckéi.
- A három tartalmi statisztika a meglévő gyűjteményekből származik.
- A **662 keresőindex-szó** a mostani sikeres Pagefind builddel ellenőrzött
  megjelenítési adat az `src/index.11tydata.js` fájlban. Tananyagváltozáskor
  a build `Indexed … words` sorának megfelelően frissítendő; nem automatikus számláló.
- Diagnosztika és karbantartás tantárgy még nincs. E két kategória a meglévő
  keresőhöz vezet előre kitöltött kifejezéssel; a jelenlegi tartalomra ez
  üres találatlistát is adhat. Új, üres tantárgyoldal nem készült.
- A referencia nem létező projekt/adatvédelmi/social URL-jei helyett
  a footer valódi tananyag- és navigációs hivatkozásokat használ.
- Nincs külső kép, hotlink vagy referencia-kivágás. A fotók helyén
  saját, helyi műszaki SVG fallbackek vannak, ezért a képi egyezés még nem teljes.
- A betűcsalád helyi Segoe UI/Arial, a kézírás Segoe Print/Bradley Hand/cursive.
  Az eredeti fontfájlok hiányában más operációs rendszeren eltérhetnek a betűformák.

## Még elkészítendő képi assetek

Minden kép **felirat, UI, ikon, logó és vízjel nélkül** készüljön. A gombok,
szövegek, gradientek és rendszerikonok HTML/CSS-elemek maradnak.
Helyben tárolt WebP/AVIF ajánlott, átlátszó alkatrészeknél alfa-csatornával.

| Javasolt fájl | Méret | Pontos kompozíció / hely |
| --- | --- | --- |
| `hero-cutaway.webp` | 3072 × 1080 px | Fotórealisztikus sötétkék SUV elölről, háromnegyedes nézetben, az orr balra. Áttetsző karosszéria, kék elektronikai és narancs kábelezési elemek. Sötét modern műhely, kék mennyezeti fények, perspektivikus padló. Az autó a jobb 55%-on, a bal 45% sötét és nyugodt a címhez. A `.hp-hero__art` jármű/műhely rétegeit váltja. A mobil hero és a telefon ezt is használhatja. |
| `category-engine.webp` | 840 × 640 px | Részletes motor és hajtáslánc háromnegyedes nézetben, hűvös kék fények. Középre komponált teljes objektum, lehetőleg áttetsző háttér; alul legyen hely a CSS overlaynek. Jelenleg `engine.svg`. |
| `category-electronics.webp` | 840 × 640 px | Autóipari ECU/vezérlőpanel, csatlakozókkal és részletes áramköri elemekkel, enyhén felülnézetből, zöld fények, áttetsző háttér. Jelenleg `electronics.svg`. |
| `category-mechanics.webp` | 840 × 640 px | Féktárcsa, féknyereg és rugóstag/futómű együtt, háromnegyedes nézetben; fémes részletek, meleg narancs fények, áttetsző háttér. Jelenleg `mechanics.svg`. |
| `category-diagnostics.webp` | 840 × 640 px | Robusztus autódiagnosztikai tablet, képernyővel, kábellel és OBD-csatlakozóval, enyhe perspektívában; lila fények. Olvasható gyártói felirat nélkül. Jelenleg `diagnostics.svg`. |
| `category-tools.webp` | 840 × 640 px | Dugókulcs/racsni és három villáskulcs átlós elrendezésben, valódi fémfelületekkel, hideg kék fényekkel, áttetsző háttér. Jelenleg `tools.svg`. |
| `practice-workshop.webp` | 1660 × 704 px | Autó első kereke és oldala közelről a jobb oldalon, sötét kék műhely, bal oldalon szabad szövegterület. Jobb alsó részét takarni fogja a telefon. A `.hp-practice::before` jármű/műhely rétegeit váltja. |
| `engine-blueprint.webp` | 1000 × 650 px | Részletes motor műszaki vonalrajza világoskék vonalakkal, áttetsző háttérrel. A keresőblokk jobb felső halvány dekorációjához; jelenleg az `engine.svg` csökkentett opacitással. |

A kategóriaképekből a leckebélyegképek automatikusan újrahasznosíthatók;
nem kell öt külön thumbnailt generálni. A telefonkeret, fogaskerék-logó,
footer autórajza és ikonok már megfelelő minőségű vektor/CSS elemek.

## Ellenőrzés és vizuális korrekció

2026-09-06, helyi Chrome, Playwright és axe-core; a böngészős segédeszközök
csak a figyelmen kívül hagyott `.cache/` könyvtárban vannak, nem projektfüggőségek.

- Első render: 83 px navbar és 693 px alsó hasábrész; teljes magasság 2383 px.
- Vizuális korrekció: navbar padding, dátumok/címkék rácsa, javított logó,
  önálló footer-autórajz; tablet ARIA-címkézés javítása.
- Korrigált desktop: **75 px navbar, 540 px hero, 154 px statisztikapanel,
  632 px alsó hasábrész, 2313 px teljes oldal**. A referencia kb. 2304 px magas.
- Desktop 1536×1024, tablet 768×1024, mobil 390×844: világos és sötét módban
  tényleges render és screenshot; 0 axe WCAG 2 A/AA, 2.1 AA találat a hat futásban.
  Ez automatizált ellenőrzési eredmény, nem teljes akadálymentességi tanúsítás.
- 0 JavaScript-hiba, HTTP-hiba és hiányzó kép a hat végső vizuális futásban.
- Nincs oldalszintű vízszintes túlcsordulás 320, 360, 390, 576, 768, 1024,
  1280, 1536 és 1920 px-en. Az alkatrészképek tudatosan túlfutnak saját,
  `overflow: hidden` kártyájuk belsejében.
- Navbar- és főoldali keresés → tényleges Pagefind találatok → lecke megnyitása.
- Bootstrap mobilmenü, témaváltás és újratöltés utáni megőrzés, billentyűzetes
  átugró link, vissza-a-tetejére link, helyi MathJax megjelenítés ellenőrizve.
- `npm run build` sikeres a gyökérútvonalon, `SITE_URL` nélkül és megadott
  `SITE_URL=https://fay-tudastar.example` értékkel is (csak tesztérték).
- `SITE_URL=https://example.github.io` + `ELEVENTY_PATH_PREFIX=/fay-tudastar/`:
  build és mindhárom validáció sikeres. Prefixet kiszolgáló helyi szerveren
  ugyanezek a működési próbák sikeresek. A publikus konfiguráció nem változott.
- Tartalomvalidáció: 5 lecke. Statikus hivatkozás- és minőségi validáció:
  37 HTML-oldal. Pagefind: 5 oldal, 662 szó.
- A `main` archívumából külön könyvtárba buildelt kiinduló verzióval
  összehasonlítva **mind a 36 aloldal HTML-je azonos**, a CRLF/LF és a tagek
  közötti whitespace normalizálása után. A közös `site.css` változatlan.

Helyi képernyőképek és ellenőrzési JSON-ok: `.cache/homepage-review/`.

## Érintett fájlok

- `src/index.njk` – teljes főoldali markup.
- `src/index.11tydata.js` – csak a főoldalra vonatkozó kategória- és megjelenítési adatok.
- `src/_includes/layouts/base.njk` – feltételes főoldali CSS, logó, kereső és footer.
- `src/_includes/components/home-icons.njk` – főoldali SVG ikonok.
- `src/_includes/components/home-phone.njk` – dekoratív telefonmakett.
- `src/_includes/components/home-footer.njk` – főoldali footer.
- `src/assets/css/home.css` – főoldali stílusok és reszponzív/dark változatok.
- `src/assets/images/home/vehicle.svg` – átvilágított jármű fallback.
- `src/assets/images/home/workshop.svg` – műhelyfények és padlórács.
- `src/assets/images/home/engine.svg` – motor fallback.
- `src/assets/images/home/electronics.svg` – ECU fallback.
- `src/assets/images/home/mechanics.svg` – fék/futómű fallback.
- `src/assets/images/home/diagnostics.svg` – diagnosztikai tablet fallback.
- `src/assets/images/home/tools.svg` – szerszám fallback.
- `src/assets/images/home/footer-car.svg` – footer autó-kontúrrajza.
- `docs/homepage-reference-redesign.md` – ez az elemzés, assetlista és ellenőrzési jegyzőkönyv.
