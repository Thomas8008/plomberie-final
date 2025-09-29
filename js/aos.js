// js/aos.js
window.addEventListener('load', () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  AOS.init({
    once: true,
    duration: 600,   // 600 au lieu de 800 (un peu moins de coût)
    offset: 80
  });
});
