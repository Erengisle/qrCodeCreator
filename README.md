# qrCodeCreator

Ett litet Node.js-verktyg som skapar QR-koder från text eller URL:er.

## Installation

```bash
npm install
```

## Användning

Skriv ut QR-koden direkt i terminalen:

```bash
node generate.js "https://example.com"
```

Spara QR-koden som en PNG-bild:

```bash
node generate.js "https://example.com" out/min-qrkod.png
```

Om ingen filsökväg anges skrivs QR-koden ut som ASCII-grafik i terminalen.
Om en filsökväg anges (t.ex. `out/min-qrkod.png`) sparas QR-koden som en
512x512 PNG-bild, och mappen skapas automatiskt om den inte redan finns.

## Hur det fungerar

Verktyget använder npm-paketet [`qrcode`](https://www.npmjs.com/package/qrcode)
för att koda text till en QR-kod, antingen som ASCII-tecken för terminalen
eller som en PNG-bild.
