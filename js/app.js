  (() => {
    const nav  = document.getElementById('navClean');
    const hero = document.querySelector('.hero-clean');
    if (!nav || !hero) return;

    const setStates = () => {
      const over = hero.getBoundingClientRect().bottom > 60;
      nav.classList.toggle('over-image', over);
      if (window.scrollY > 20) nav.classList.add('is-scrolled');
      else nav.classList.remove('is-scrolled');
    };
    window.addEventListener('scroll', setStates);
    window.addEventListener('load', setStates);
    window.addEventListener('resize', setStates);
  })();