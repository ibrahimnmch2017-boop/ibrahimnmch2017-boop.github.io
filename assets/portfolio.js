(() => {
  const controls = document.querySelectorAll('[data-set-lang]');
  function setLanguage(language) {
    const lang = language === 'id' ? 'id' : 'en';
    document.documentElement.lang = lang;
    controls.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.setLang === lang)));
    try { localStorage.setItem('portfolio-language', lang); } catch (_) { /* Language switching also works without storage. */ }
  }
  let preferred = 'en';
  try { preferred = localStorage.getItem('portfolio-language') || preferred; } catch (_) { /* Default to English. */ }
  setLanguage(preferred);
  controls.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.setLang)));
})();
