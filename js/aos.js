// js/aos.js
window.addEventListener('load', () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  AOS.init({
    once: true,
    duration: 600,
    offset: 80
  });
});
