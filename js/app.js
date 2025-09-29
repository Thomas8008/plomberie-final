// js/app.js
(() => {
  const nav  = document.getElementById('navClean');
  const hero = document.querySelector('.hero-clean');
  if (!nav || !hero) return;

  let heroBottom = 0;
  let ticking = false;

  const computeHeroBottom = () => {
    // position basse du hero par rapport au haut du document
    heroBottom = hero.offsetTop + hero.offsetHeight - 60;
  };

  const update = () => {
    const over = window.scrollY < heroBottom;
    nav.classList.toggle('over-image', over);
    if (window.scrollY > 20) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener('load', () => {
    computeHeroBottom();
    update();
  }, { once: true });

  window.addEventListener('resize', () => {
    computeHeroBottom();
    update();
  });

  window.addEventListener('scroll', onScroll, { passive: true });
})();
