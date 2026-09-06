---
title: "Prefixumok, normálalak és kerekítés"
subject: "Mechanika, Gépelemek"
date: "2026-09-03"
topics:
  - "Prefixumok"
  - "Normálalak"
  - "Kerekítés"
---

## Prefixumok

A prefixumok az SI-mértékegységek elé írt előtagok.

Segítségükkel nagyon nagy vagy nagyon kicsi mennyiségeket áttekinthetően és egyszerűen írhatunk fel.

### Fontosabb prefixumok

| Prefixum | Jel | Jelentés | Példa |
|---|---:|---|---|
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
