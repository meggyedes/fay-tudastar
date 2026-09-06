# Iskolai tanulmányok

> **Tanulói tudástár – forrásanyag**
>
> Ez a Markdown-fájl a jelenlegi digitális jegyzetek rendezett, egységesített változata.
> A tartalmi állításokat alapvetően változatlanul tartja; az egyértelmű elírásokat és formázási hibákat javítottam.

## Tantárgyak és rövidítések

| Rövidítés | Tantárgy |
|---|---|
| `Vag` | — |
| `Saig` | — |
| `Gmig` | — |
| `Ga` | Gépészeti alapismeretek |
| `Gve` | — |
| `Mg` | Mechanika, Gépelemek |
| `Va` | Villamos alapismeretek |
| `Gsz` | — |
| `Of` | Osztályfőnöki |
| `E` | Elektrotan |
| `Mis` | — |
| `Gag` | — |

> **Megjegyzés:** A `—` jelölésű rövidítésekhez a forrásdokumentum nem tartalmazott tantárgynevet, ezért ezeket nem egészítettem ki találgatással.

---

# Mechanika, Gépelemek

## 2026. szeptember 2. — Bevezetés

**Tantárgy:** Mechanika, Gépelemek (`Mg`)

### Bevezetés

- Mechanikai alapfogalmak
- Gépészeti alapegységek, részegységek leíró ismertetése és egyszerű méretezése

### Óraszám

- Heti 2 alkalom
- Évi 72 tanóra

### Számonkérés

- Írásban, leíró kérdez–felelek formában
- Röpdolgozat nem nagyon van

### Tanórai szaktanár

- Dorozsmai Károly

### Felszerelés

- Sima, nagyalapú füzet
- Tűzött, nem spirál
- 80-32 jelű

### Író- és rajzeszközök

- Golyóstoll
- Ceruza
- Radír
- Körző
- Vonalzók
  - 30°–60°
  - 45°–45°
- Számológép

### Mit kell leírni?

> Mindent, ami fekete, semmit, ami kék.

## A mechanika tárgya és felosztása

A mechanika a testek mozgásával és egyensúlyával foglalkozik.

### Fő részei

- **Statika:** az egyensúlyban lévő testeket vizsgálja.
- **Kinematika:** a mozgást írja le, az erők okai nélkül.
- **Dinamika:** a mozgást és az erők kapcsolatát vizsgálja.

## Mértékegységek

| Mennyiség | Mértékegység | Példák / alkalmazás |
|---|---|---|
| Hosszúság | m, mm | alkatrészméretek, furatok, tengelyek |
| Tömeg | kg | jármű tömege, alkatrészek tömege, terhelés |
| Idő | s | érzékelők reakcióideje, vezérlők kapcsolási ideje, gyorsulási idő |
| Erő | N | húzás, nyomás, terhelés, fékerő |
| Nyomaték | N·m | csavarok, tengelyek, hajtások, motor forgatónyomatéka |
| Feszültség és nyomás | MPa, N/mm², bar | anyagok és kötések ellenőrzése, fékrendszer- és gumiabroncsnyomás |
| Teljesítmény | W, kW | motorok, hajtások, villanymotorok |
| Fordulatszám | 1/min | tengelyek, csapágyak, hajtóművek |

## Nem metrikus mértékegységek

| Mennyiség | Mértékegység | Példák / alkalmazás |
|---|---|---|
| Hosszméret | inch | felniátmérő, gumiabroncs méretei, csavarok és menetek, csövek, szerszámok |
| Nyomás | psi | gumiabroncsnyomás, turbónyomás, üzemanyagnyomás, pneumatikus és hidraulikus rendszerek |
| Teljesítmény | HP / LE | motorok, gépek és villanymotorok teljesítménye |
| Nyomaték | lbf·ft, lbf·in | motor forgatónyomatéka, csavarok meghúzási nyomatéka, főleg amerikai gyártmányú járműveknél |
| Fordulatszám | rpm | motor fordulatszáma, kerék- és tengelyfordulatszám, turbófeltöltő fordulatszáma |

---

## 2026. szeptember 3. — Prefixumok, normálalak és kerekítés

**Tantárgy:** Mechanika, Gépelemek (`Mg`)

### Prefixumok

A prefixumok az SI-mértékegységek elé írt előtagok.

Segítségükkel nagyon nagy vagy nagyon kicsi mennyiségeket áttekinthetően és egyszerűen írhatunk fel.

### Fontosabb prefixumok

| Prefixum | Jel | Jelentés | Példa |
|---|---:|---:|---|
| kilo | k | ezerszeres | 1 km → 1 000 m |
| mega | M | milliószoros | 1 MPa → 1 000 000 Pa |
| milli | m | ezredrész | 1 mm → 0,001 m |
| mikro | µ | milliomodrész | 1 µm → 0,000001 m |

> **Megjegyzés:** Informatikában a 1024 = 2¹⁰ alapú váltás is elterjedt, például az adatmennyiségeknél.

### Normálalak

A normálalak nagyon nagy vagy nagyon kicsi számok rövidebb, áttekinthetőbb írásmódja.

**Alakja:**

\[
a \cdot 10^n
\]

ahol `n` egész szám.

**Feltétele:**

\[
1 \le |a| < 10
\]

### Példák

- 12 500 = 1,25 · 10⁴
- 0,0032 = 3,2 · 10⁻³

### Számológépen

Az `E` jelölést használjuk.

- 3,2 E-3 = 3,2 · 10⁻³
- Az `E-3` jelentése: · 10⁻³, vagyis 0,001-gyel való szorzás.

## Kerekítés

A kerekítés célja egyszerűbb, áttekinthetőbb számok használata úgy, hogy az eredeti számhoz közeli értéket kapjunk.

### Alapszabály

A kerekítendő helyi érték utáni számjegyet nézzük:

- **0–4:** nem változtatjuk meg a megtartott számjegyet.
- **5–9:** a megtartott számjegyet eggyel növeljük.

A kerekítés eredményét közelítő egyenlőségjellel (`≈`) jelöljük.

### Példák

**Egész számra:**

- 23,7 ≈ 24
- 23,3 ≈ 23

**Egy tizedesjegyre:**

- 4,86 ≈ 4,9
- 4,83 ≈ 4,8

**Két tizedesjegyre:**

- 7,236 ≈ 7,24
- 7,231 ≈ 7,23

---

# Elektrotechnika, elektronika, villamosságtan

## 2026. szeptember 2. — Bevezetés és gyakorló feladatok

**Tantárgyi rövidítés a forrásban:** `VA`

### Tantárgy

**Elektrotechnika, elektronika, villamosságtan**

- Szakmai alapozó tantárgy
- Matematika- és fizikaismereteket igényel
- A témák egymásra épülnek, egyik sem hagyható ki.
- Csak óráról órára készülve teljesíthető.

### Elvárások

- Órai jelenlét, minimális hiányzás
- Rövidebb vagy hosszabb hiányzás után nincs jelentkezés, jelentés nem fogadható el.
- 100 lapos, négyzethálós, spirálfüzet
- Elektrotechnikai könyv: Gergely István
- Sűrű röpdolgozatok, gyakori témazáró dolgozatok

## Gyakorló feladatok

### 1. feladat — Ohm-törvény

#### Adatok

- `U = 12 V` — feszültség
- `R = 10 Ω` — ellenállás
- `I = ?` — áramerősség

#### Ohm-törvény

\[
U = I \cdot R
\]

ahol:

- `U` = feszültség [V]
- `I` = áramerősség [A]
- `R` = ellenállás [Ω]

### Az egyes mennyiségek kiszámítására használható képletek

**Feszültség:**

\[
U = I \cdot R
\]

**Áramerősség:**

\[
I = \frac{U}{R}
\]

**Ellenállás:**

\[
R = \frac{U}{I}
\]

### Feladat megoldása

Mivel az áramerősséget (`I`) kell meghatározni, az alábbi képletet használjuk:

\[
I = \frac{U}{R}
\]

**Behelyettesítés:**

\[
I = \frac{12\ V}{10\ \Omega}
\]

\[
I = 1,2\ A
\]

**Válasz:** Az áramkörben folyó áramerősség 1,2 A.

### Mértékegységek

- Feszültség: V — volt
- Áramerősség: A — amper
- Ellenállás: Ω — ohm

---

### 2. feladat — Vezeték keresztmetszetének meghatározása

#### Adatok

- `R = 10 Ω` — a vezeték ellenállása
- `l = 200 m` — a vezeték hossza
- `ρ = 0,018 Ω · mm²/m` — a vezeték anyagának fajlagos ellenállása
- `A = ?` — a vezeték keresztmetszete

#### A vezeték ellenállásának képlete

\[
R = \rho \cdot \frac{l}{A}
\]

ahol:

- `R` = ellenállás [Ω]
- `ρ` = fajlagos ellenállás [Ω · mm²/m]
- `l` = vezeték hossza [m]
- `A` = vezeték keresztmetszete [mm²]

### A keresztmetszet kiszámítására átrendezett képlet

\[
A = \frac{\rho \cdot l}{R}
\]

**Behelyettesítés:**

\[
A = \frac{0,018\ \Omega \cdot mm^2/m \cdot 200\ m}{10\ \Omega}
\]

\[
A = 0,36\ mm^2
\]

**Válasz:** A vezeték keresztmetszete 0,36 mm².

### A vezeték ellenállásának képletéből az egyes mennyiségek kiszámíthatók

**Ellenállás:**

\[
R = \rho \cdot \frac{l}{A}
\]

**Fajlagos ellenállás:**

\[
\rho = \frac{R \cdot A}{l}
\]

**Vezeték hossza:**

\[
l = \frac{R \cdot A}{\rho}
\]

**Vezeték keresztmetszete:**

\[
A = \frac{\rho \cdot l}{R}
\]

ahol:

- `R` = ellenállás [Ω]
- `ρ` = fajlagos ellenállás [Ω · mm²/m]
- `l` = vezeték hossza [m]
- `A` = vezeték keresztmetszete [mm²]

### Mértékegységek

- Feszültség: V — volt
- Áramerősség: A — amper
- Ellenállás: Ω — ohm
- Vezeték hossza: m — méter
- Keresztmetszet: mm² — négyzetmilliméter
- Fajlagos ellenállás: Ω · mm²/m

---

# Gépjármű-szerkezettan

## 2026. szeptember 2. — A belső égésű motor fejlődésének fontosabb állomásai

**Tantárgyi rövidítés a forrásban:** `Gsz`

### Jean-Joseph Étienne Lenoir (1822–1900)

Jean-Joseph Étienne Lenoir belga származású feltaláló és mérnök volt. 1859-ben megépítette működőképes széngázmotorját, amelyet 1860-ban szabadalmaztatott.

Motorja kétütemű, kompresszió nélküli, szikragyújtású belső égésű motor volt. A motor széngáz és levegő keverékét használta üzemanyagként.

Lenoir motorja fontos mérföldkőnek számított, mivel az első gyakorlatban is használható és kereskedelmileg sikeres gázmotorok közé tartozott.

### Alphonse Beau de Rochas (1815–1893)

Alphonse Beau de Rochas francia mérnök volt, aki 1862-ben leírta és szabadalmaztatta a négyütemű belső égésű motor működési elvét.

Az általa leírt működési ciklus négy ütemből áll:

1. szívás
2. sűrítés
3. munkaütem
4. kipufogás

Jelentősége abban állt, hogy felismerte a levegő–üzemanyag-keverék előzetes sűrítésének és a négyütemű működésnek az előnyeit.

Beau de Rochas azonban nem épített meg ilyen motort; az ő munkája elsősorban a működési elv leírására vonatkozott.

### Nikolaus August Otto (1832–1891)

Nikolaus August Otto német feltaláló és mérnök volt, aki a korábbi fejlesztésekre építve 1876-ban megépítette a négyütemű, szikragyújtású, sűrített keverékű gázmotorját.

Ezzel a korábban Beau de Rochas által leírt négyütemű működési elvet gyakorlati formában is megvalósította.

A motor működése a következő négy ütemre épült:

1. szívás
2. sűrítés
3. munkaütem
4. kipufogás

Az általa továbbfejlesztett működési elvet később Otto-ciklusnak nevezték el, amely a mai szikragyújtású benzinmotorok működésének alapját is képezi.

### Röviden a fejlődés lényege

**Lenoir** → működőképes, kompresszió nélküli belső égésű gázmotor

**Beau de Rochas** → a négyütemű működési elv leírása és szabadalmaztatása

**Otto** → a négyütemű, sűrített keverékű motor gyakorlati megvalósítása és továbbfejlesztése

---

# Elektrotan

## 2026. szeptember 3. — Villamos alapmennyiségek

**Tantárgy:** Elektrotan (`E`)

## 1. Villamos töltés, töltésmennyiség

A villamos töltés az anyag egyik alapvető fizikai tulajdonsága. Kétféle villamos töltést különböztetünk meg: pozitív és negatív töltést.

### Elemi töltés

Az elemi töltés a villamos töltés legkisebb, önállóan előforduló mennyisége. Jele: `e`.

Az elektron és a proton töltésének nagysága megegyezik, de előjelük ellentétes.

- Elektron: negatív töltésű részecske → `e⁻`
- Proton: pozitív töltésű részecske → `p⁺`
- Neutron: elektromosan semleges részecske → `n⁰`

### Az elemi töltés értéke

\[
e = 1,602 \cdot 10^{-19}\ C
\]

**Az elektron töltése:**

\[
Q_{e^-} = -1,602 \cdot 10^{-19}\ C
\]

**A proton töltése:**

\[
Q_{p^+} = +1,602 \cdot 10^{-19}\ C
\]

## Ion

Az ion olyan atom vagy molekula, amely elektromos töltéssel rendelkezik, mert az elektronok és a protonok száma nem egyezik meg.

- **Pozitív ion (kation):** elektront adott le, ezért több protonja van, mint elektronja.
- **Negatív ion (anion):** elektront vett fel, ezért több elektronja van, mint protonja.

### Egyszerűen

- elektronhiány → pozitív töltés
- elektrontöbblet → negatív töltés

---

## 2. Töltésmennyiség

**Jele:** `Q`

**Mértékegysége:** `C` — coulomb

\[
1\ C = 1\ A \cdot s
\]

### Fogalma

A töltésmennyiség megadja a villamos töltés nagyságát.

### Az elemi töltés és a töltésmennyiség kapcsolata

\[
Q = n \cdot e
\]

ahol:

- `Q` = töltésmennyiség [C]
- `n` = az elemi töltések száma [db]
- `e` = elemi töltés [C]

---

## 3. Test töltése

Egy kiterjedt test akkor válik villamosan töltötté, ha a benne található protonok és elektronok száma nem egyezik meg.

- Ha több elektron van a testben, mint proton → a test negatív töltésű.
- Ha kevesebb elektron van a testben, mint proton → a test pozitív töltésű.

A protonok és elektronok számának különbsége határozza meg a test eredő töltését.

A test töltése az elemi töltés egész számú többszöröse:

\[
Q = n \cdot e
\]

ahol:

- `Q` = a test töltése [C]
- `n` = a protonok és elektronok számának különbsége [db]
- `e` = elemi töltés [C]

---

## 4. Villamos tér

A villamos tér a villamos töltések körül van jelen, és a villamos kölcsönhatásokat közvetíti.

A villamos tér nagyságát a villamos térerősséggel jellemezzük.

- **Jele:** `E`
- **Mértékegysége:** `N/C` vagy `V/m`

A villamos tér vektormennyiség, ezért van nagysága és iránya.

A villamos térerősség iránya a pozitív töltéstől a negatív töltés felé mutat.

---

## 5. Villamos feszültség

A villamos feszültség két pont közötti potenciálkülönbség.

A villamos feszültség töltések szétválasztásakor jön létre. A villamos tér arra törekszik, hogy a töltések közötti potenciálkülönbséget kiegyenlítse.

- **Jele:** `U`
- **Mértékegysége:** `V` — volt

A villamos feszültség:

\[
U = \frac{W}{Q}
\]

ahol:

- `U` = villamos feszültség [V]
- `W` = villamos munka [J]
- `Q` = töltésmennyiség [C]

---

## 6. Villamos potenciál

A villamos potenciál egy adott pont villamos állapotát jellemző mennyiség.

- **Jele:** `φ`
- **Mértékegysége:** `V` — volt

A potenciál:

\[
\varphi = \frac{W}{Q}
\]

ahol:

- `φ` = villamos potenciál [V]
- `W` = villamos munka [J]
- `Q` = töltésmennyiség [C]

Két pont közötti feszültség a pontok potenciáljának különbsége:

\[
U_{AB} = \varphi_A - \varphi_B
\]

### Potenciálkülönbség — példa

**Adatok:**

- `φₐ = 12 V`
- `φᵦ = 8 V`
- `φ꜀ = −2 V`

**A és B pont közötti feszültség:**

\[
U_{AB} = \varphi_A - \varphi_B
\]

\[
U_{AB} = 12\ V - 8\ V = 4\ V
\]

**A és C pont közötti feszültség:**

\[
U_{AC} = \varphi_A - \varphi_C
\]

\[
U_{AC} = 12\ V - (-2\ V) = 14\ V
\]

**C és A pont közötti feszültség:**

\[
U_{CA} = \varphi_C - \varphi_A
\]

\[
U_{CA} = -2\ V - 12\ V = -14\ V
\]

**B és C pont közötti feszültség:**

\[
U_{BC} = \varphi_B - \varphi_C
\]

\[
U_{BC} = 8\ V - (-2\ V) = 10\ V
\]

### Eredmények

- `Uₐᵦ = 4 V`
- `Uₐ꜀ = 14 V`
- `U꜀ₐ = −14 V`
- `Uᵦ꜀ = 10 V`

### Megjegyzés

A pontok sorrendje számít. Az ellenkező irányú feszültség előjele megfordul:

\[
U_{AB} = -U_{BA}
\]

---

## 7. Villamos áram és áramerősség

A villamos töltések rendezett, irányított mozgását villamos áramnak nevezzük.

A villamos áram irányát és nagyságát az áram erősségével jellemezzük.

### A villamos áram iránya

A hagyományos áramirány a pozitív pólustól a negatív pólus felé mutat:

**+ → −**

Fémes vezetőkben az elektronok mozgásának iránya ezzel ellentétes:

**− → +**

### A villamos áram nagysága — áramerősség

A villamos áram nagyságát áramerősségnek nevezzük.

- **Jele:** `I`
- **Mértékegysége:** `A` — amper

Az áramerősség megmutatja, hogy egy vezető keresztmetszetén egységnyi idő alatt mekkora töltésmennyiség halad át.

\[
I = \frac{Q}{t}
\]

ahol:

- `I` = áramerősség [A]
- `Q` = töltésmennyiség [C]
- `t` = idő [s]

\[
1\ A = 1\ C/s
\]

---

# Megjegyzések a szerkesztéshez

Az eredeti Word-dokumentumból néhány egyértelmű formai/elírási hibát javítottam, például:

- `teszteket` → `testeket`
- `Mpa` → `MPa`
- `Elektotechnika` → `Elektrotechnika`
- `Nm` → `N·m`
- egységesítettem a címsorokat, felsorolásokat és képleteket
- az `A`, `R`, `U`, `I`, `ρ`, `φ` jelöléseket egységes Markdown/LaTeX formára hoztam

**Tartalmi/szakmai ellenőrzést ebben a körben nem végeztem külső források alapján.** Ahol a forrásból nem volt egyértelmű információ, ott nem egészítettem ki találgatással.

A következő lépésben ezt a dokumentumot érdemes a weboldal végleges tartalmi sémájának alapjául használni.
