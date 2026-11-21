function initNav() {
  const nav = document.querySelector('[data-nav]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-nav-menu]');
  const links = document.querySelectorAll('[data-nav-link]');

  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 24);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  toggle?.addEventListener('click', () => {
    const open = menu?.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.classList.toggle('overflow-hidden', Boolean(open));
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      menu?.classList.remove('is-open');
      toggle?.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('overflow-hidden');
    });
  });
}

function initReveals() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );

  items.forEach((el) => observer.observe(el));
}

function initCarousels() {
  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('[data-carousel-track]');
    const prev = carousel.querySelector('[data-carousel-prev]');
    const next = carousel.querySelector('[data-carousel-next]');
    if (!track) return;

    const scrollBy = (dir) => {
      const amount = track.clientWidth * 0.85;
      track.scrollBy({ left: dir * amount, behavior: 'smooth' });
    };

    prev?.addEventListener('click', () => scrollBy(-1));
    next?.addEventListener('click', () => scrollBy(1));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveals();
  initCarousels();
});
