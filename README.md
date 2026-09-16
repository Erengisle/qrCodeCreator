# qrCodeCreator

En enkel hemsida som skapar QR-koder från text eller URL:er, direkt i webbläsaren.

## Använda hemsidan

Ingen installation eller server krävs — öppna bara `index.html` i en webbläsare
(dubbelklicka på filen, eller kör en enkel lokal server, t.ex.):

```bash
python3 -m http.server 8000
```

och gå sedan till `http://localhost:8000` i webbläsaren.

Skriv in en text eller URL, välj färg, bakgrund och storlek, klicka på
**Skapa QR-kod** och ladda ner resultatet som PNG eller SVG.

QR-koden skapas helt lokalt i webbläsaren (inget skickas till någon server).
JavaScript-biblioteket som gör själva kodningen finns paketerat i
`vendor/qrcode.min.js`, så sidan fungerar även utan internetuppkoppling.

## Filer

- `index.html` – sidans struktur och formulär
- `style.css` – utseende
- `app.js` – logik som genererar QR-koden och nedladdningslänkarna
- `vendor/qrcode.min.js` – buntat JS-bibliotek ([`qrcode`](https://www.npmjs.com/package/qrcode)) för QR-kodning

## Kommandoradsverktyg (alternativ)

Repot innehåller även ett litet Node.js-skript om du hellre vill skapa
QR-koder från terminalen:

```bash
npm install
node generate.js "https://example.com"                # skriver ut i terminalen
node generate.js "https://example.com" out/kod.png     # sparar som PNG
```
