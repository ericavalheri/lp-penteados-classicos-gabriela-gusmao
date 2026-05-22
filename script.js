document.getElementById('year').textContent = new Date().getFullYear();

for (const link of document.querySelectorAll('a[href^="https://chk.eduzz.com"]')) {
  link.addEventListener('click', () => {
    // Espaço reservado para evento de conversão/pixel, se Erica fornecer os scripts.
  });
}
