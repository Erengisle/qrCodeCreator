const form = document.getElementById('qr-form');
const textInput = document.getElementById('qr-text');
const colorInput = document.getElementById('qr-color');
const bgInput = document.getElementById('qr-bg');
const sizeSelect = document.getElementById('qr-size');
const errorMessage = document.getElementById('error-message');
const result = document.getElementById('result');
const canvas = document.getElementById('qr-canvas');
const downloadPng = document.getElementById('download-png');
const downloadSvg = document.getElementById('download-svg');

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.hidden = false;
  result.hidden = true;
}

function clearError() {
  errorMessage.hidden = true;
}

async function generateQrCode(text, options) {
  await QRCode.toCanvas(canvas, text, options);
  downloadPng.href = canvas.toDataURL('image/png');

  const svgString = await QRCode.toString(text, { ...options, type: 'svg' });
  const svgBlob = new Blob([svgString], { type: 'image/svg+xml' });
  downloadSvg.href = URL.createObjectURL(svgBlob);
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  clearError();

  const text = textInput.value.trim();
  if (!text) {
    showError('Skriv in en text eller URL.');
    return;
  }

  const options = {
    width: Number(sizeSelect.value),
    margin: 2,
    color: {
      dark: colorInput.value,
      light: bgInput.value,
    },
  };

  try {
    await generateQrCode(text, options);
    result.hidden = false;
  } catch (err) {
    showError('Kunde inte skapa QR-kod: ' + err.message);
  }
});
