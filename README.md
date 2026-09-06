# Iskolai Tudástár

Teljesen statikus, Markdown-alapú személyes tanulási tudástár. Az oldal Eleventyvel épül, Bootstrap 5-öt és saját CSS-t használ; a keresést a Pagefind adja. A kész `_site/` könyvtár kizárólag statikus HTML-, CSS-, JavaScript- és keresőindex-fájlokat tartalmaz, ezért alkalmazásszerver, backend és adatbázis nélkül futtatható GitHub Pages-en vagy Netlify-on.

## Előfeltételek

- Node.js 22 vagy újabb LTS-verzió;
- npm;
- Git csak akkor szükséges, ha távoli tárhelyre vagy GitHub Pages-re publikálsz.

Első használat előtt telepítsd a rögzített függőségeket:

```bash
npm ci
```

Windows PowerShellben, ha az execution policy blokkolja az `npm` parancsot, használd az `npm.cmd` változatot, például `npm.cmd run build`.

## Helyi használat és ellenőrzés

Fejlesztői szerver indítása:

```bash
npm run start
```

Az Eleventy kiírja a megnyitható helyi címet. A tartalmi vagy sablonmódosításokkor újraépíti az oldalt.

Az elérhető ellenőrző parancsok:

```bash
# Csak a Markdown-tartalom és a front matter ellenőrzése
npm run validate

# Teljes publikálható statikus build
npm run build

# Build után külön is futtatható hivatkozás- és minőségellenőrzés
npm run validate:site
npm run validate:quality
```

Az `npm run build` sorrendben lefuttatja a tartalomvalidációt, kiüríti a korábbi `_site/` kimenetet, legenerálja az Eleventy-oldalt, elkészíti a Pagefind-indexet, majd ellenőrzi a belső linkeket, asseteket és alapvető minőségi követelményeket. A deployolható eredmény mindig az `_site/` könyvtár.

## Új lecke hozzáadása

Új lecke felvételéhez nem kell JavaScript-, Nunjucks- vagy CSS-fájlt módosítani: hozz létre egy új `.md` fájlt a `content/` könyvtár valamelyik alkönyvtárában. Az alkönyvtár csak a fájlok saját rendszerezését szolgálja; a megjelenő tantárgyat a `subject` mező határozza meg.

### Fájlnév-konvenció

```
YYYY-MM-DD-url-baratsagos-lecke-slug.md
```

Példa:

```
content/elektrotan/2026-09-04-ellenallas-merese.md
```

Szabályok:

- a fájlnév dátumelőtagja pontosan egyezzen a `date` mezővel;
- a slug csak kisbetűt, számot és kötőjelet tartalmazzon;
- a slugnak a teljes tudástáron belül egyedinek kell lennie;
- az ebből képzett stabil publikus cím: `/lessons/ellenallas-merese/`.

### Kötelező front matter

Minden lecke elején legyen YAML front matter. A `date` értékét idézőjelek között add meg, hogy szövegként és egységesen `YYYY-MM-DD` formátumban legyen feldolgozva.

```md
---
title: "Ellenállás mérése"
subject: "Elektrotan"
date: "2026-09-04"
topics:
  - "Ellenállás"
  - "Mérés"
---

## Cél

Ide kerül a lecke Markdown-tartalma.
```

Kötelező mezők:

| Mező | Típus | Szerepe |
| --- | --- | --- |
| `title` | nem üres szöveg | A lecke címe és SEO-címe. |
| `subject` | nem üres szöveg | A tantárgy neve. |
| `date` | `YYYY-MM-DD` formátumú szöveg | Rendezés, dátumkijelzés és fájlnév-ellenőrzés. |
| `topics` | legalább egy nem üres szöveges elemet tartalmazó lista | Témaoldalak és kapcsolatok. |

Az opcionális `source_abbreviation` mező megőrizhető, ha szükséged van rá a saját forrásjelölésedhez, de a lecke publikálásához nem szükséges.

### Markdown-szabályok

A szabványos Markdown-elemek használhatók: címsorok, felsorolások, kiemelések, linkek, táblázatok és kódblokkok. LaTeX-képletek MathJaxszal működnek, például `\(U = R \cdot I\)` vagy külön sorban `\[U = R \cdot I\]` formában.

- A lecke címe a `title` mezőből érkezik, ezért a törzsben ne használj H1 (`#`) címet.
- A címsorszintek ne ugorjanak át szintet: H2 után ne közvetlenül H4 következzen.
- Nyers HTML nem használható a tartalmi Markdown-fájlokban.
- Relatív kép- és dokumentumhivatkozásoknak létező fájlra kell mutatniuk.

### Mi frissül automatikusan?

Egy érvényes új Markdown-lecke a build során automatikusan megjelenik:

- saját, stabil leckeoldalként;
- a főoldal legutóbbi leckéi és statisztikái között;
- a teljes leckelistában;
- a megadott tantárgy időrendi leckeoldalán;
- minden megadott téma listáján, illetve új témánál új témalapként;
- az adott tantárgy előző/következő lecke-navigációjában;
- a Pagefind keresőindexben;
- a sitemapben.

## Új tantárgy létrehozása

Nincs külön tantárgy-konfiguráció. Hozz létre egy új leckét új, egységes `subject` értékkel, például:

```md
subject: "Anyagismeret"
```

Az új tantárgy a következő buildben automatikusan bekerül a főoldalra, a Tantárgyak listaoldalra és saját `/subjects/anyagismeret/` oldalra. A tartalmi fájlt célszerű a saját rendszerezéshez például a `content/anyagismeret/` alkönyvtárba tenni, de ezt nem a rendszer használja a tantárgy azonosítására.

Ügyelj a név pontos, következetes írására: a `subject` szövege alapján képződik az URL-slug. Ugyanez igaz a témanevekre is; két különböző témanév nem képezhet azonos ékezetmentes URL-slugot.

## Környezeti változók és útvonalak

| Változó | Mikor kell? | Példa |
| --- | --- | --- |
| `SITE_URL` | Éles publikáláskor ajánlott; canonical, Open Graph URL, sitemap és robots hivatkozásokhoz. | `https://pelda.hu` |
| `ELEVENTY_PATH_PREFIX` | GitHub Pages projektoldalnál szükséges, ha a webhely nem domain-gyökérben fut. | `/iskolai-tudastar/` |

A `SITE_URL` végére ne írj záró perjelet. Az `ELEVENTY_PATH_PREFIX` gyökér esetén `/`, projektoldal esetén pedig kezdő és záró perjeles érték, például `/iskolai-tudastar/`. Netlify-on és saját domainen az `ELEVENTY_PATH_PREFIX` maradjon üresen vagy `/`. GitHub Pages projektoldalnál a `SITE_URL` a domain gyökere, a prefix pedig a repository neve:

```bash
SITE_URL=https://felhasznalonev.github.io
ELEVENTY_PATH_PREFIX=/repository-neve/
npm run build
```

PowerShell példa:

```powershell
$env:SITE_URL = 'https://felhasznalonev.github.io'
$env:ELEVENTY_PATH_PREFIX = '/repository-neve/'
npm.cmd run build
```

## Netlify deploy

Ha ez az első publikálás, előbb vedd verziókezelés alá és töltsd fel egy távoli Git repositoryba. A generált `_site/` és a `node_modules/` könyvtárat a meglévő `.gitignore` eleve kizárja:

```bash
git add .
git commit -m "Az Iskolai Tudástár első változata"
git branch -M main
git remote add origin <a-sajat-repository-cimed>
git push -u origin main
```

Ezután Netlify-on:

1. Válaszd az **Add new site → Import an existing project** lehetőséget.
2. Válaszd ki a repositoryt.
3. A projektben található `netlify.toml` automatikusan beállítja a build parancsot (`npm run build`), a publikálási könyvtárat (`_site`) és a Node 22-t.
4. A Netlify környezeti változói között állítsd be a `SITE_URL` értékét a végleges Netlify- vagy saját domainre, például `https://sajat-tudastar.netlify.app`.
5. Az `ELEVENTY_PATH_PREFIX` változót Netlify-on ne állítsd be, hacsak nem szándékosan alkönyvtárba publikálsz.
6. Deploy után nyisd meg a keresést, egy leckeoldalt és a `sitemap.xml`-t.

Kézi Netlify CLI publikálásnál előbb futtasd a buildet, majd az `_site/` könyvtárat add át a Netlify CLI-nek.

## GitHub Pages deploy

1. Ha még nincs távoli repository, végezd el a fenti első Git-feltöltést GitHubra.
2. A projekt tartalmazza a [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) workflow-t. Ez minden `main` ágra küldött változásnál telepíti a függőségeket, lefuttatja a teljes validált buildet, majd az `_site/` artifactot publikálja.
3. GitHubban a **Settings → Pages → Build and deployment → Source** résznél válaszd a **GitHub Actions** lehetőséget.
4. Projektoldal esetén a workflow automatikusan ezt állítja be:

   ```text
   SITE_URL=https://felhasznalonev.github.io
   ELEVENTY_PATH_PREFIX=/repository-neve/
   ```

   Egyéni domain esetén hozz létre repository-szintű Actions variable-t `SITE_URL` néven. Ha az alapértelmezett útvonaltól eltérő prefix kell, adj hozzá `ELEVENTY_PATH_PREFIX` nevű Actions variable-t is.
5. A publikált oldalon ellenőrizd külön a navigációt, a keresést, a MathJax-képleteket és a `https://felhasznalonev.github.io/repository-neve/sitemap.xml` címet.

Felhasználói vagy szervezeti gyökéroldalnál (például `felhasznalonev.github.io`) nincs repository-prefix: az `ELEVENTY_PATH_PREFIX` értékét hagyd üresen vagy `/` értéken.

## Karbantartási ellenőrzőlista

Új lecke felvétele után futtasd:

```bash
npm run build
```

Ha a parancs sikeres, a tartalom, a belső linkek, a generált assetek, a Pagefind-index és az alapvető minőségi követelmények is ellenőrzésen átmentek. Sikertelen validáció esetén a hibaüzenet megnevezi az érintett Markdown-fájlt és a javítandó szabályt.

## Projektstruktúra

```text
content/                 # Leckék: ez a szerkesztendő tananyagforrás
src/_data/               # Automatikusan képzett lecke-, tantárgy- és témaadatmodellek
src/_includes/           # Közös layout
src/lessons/             # Leckeoldal-sablonok
src/subjects/            # Tantárgylista és tantárgyoldal-sablonok
src/topics/              # Témalista és témaoldal-sablonok
src/search/              # Pagefind keresőoldal
src/assets/              # Saját CSS és böngészőoldali JavaScript
scripts/                 # Build előtti és utáni validátorok
public/                  # Változatlanul átmásolandó statikus fájlok, ha lesznek
_site/                   # Generált, nem verziózott publikálási kimenet
```

Az `node_modules/` és `_site/` generált, ezért a Git figyelmen kívül hagyja őket. A projektben nincs elavult alternatív buildrendszer, frontend framework vagy szerveroldali komponens.
