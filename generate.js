#!/usr/bin/env node

const QRCode = require('qrcode');
const path = require('path');
const fs = require('fs');

function printUsage() {
  console.log('Användning:');
  console.log('  node generate.js "<text eller URL>" [utfil.png]');
  console.log('');
  console.log('Exempel:');
  console.log('  node generate.js "https://example.com"');
  console.log('  node generate.js "Hej världen" qrkoder/hej.png');
  console.log('');
  console.log('Om ingen utfil anges skrivs QR-koden ut direkt i terminalen.');
}

async function main() {
  const [, , text, outFile] = process.argv;

  if (!text) {
    printUsage();
    process.exit(1);
  }

  if (outFile) {
    const outPath = path.resolve(outFile);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    await QRCode.toFile(outPath, text, { width: 512, margin: 2 });
    console.log(`QR-kod sparad: ${outPath}`);
  } else {
    const ascii = await QRCode.toString(text, { type: 'terminal', small: true });
    console.log(ascii);
  }
}

main().catch((err) => {
  console.error('Kunde inte skapa QR-kod:', err.message);
  process.exit(1);
});
