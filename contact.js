const hbg = document.getElementById('hbg');
const drop = document.getElementById('drop');
const navLeft = document.getElementById('navLeft');

let timeout;

navLeft.addEventListener('mouseenter', () => {
  clearTimeout(timeout);
  drop.classList.add('open');
});

navLeft.addEventListener('mouseleave', () => {
  timeout = setTimeout(() => {
    drop.classList.remove('open');
  }, 200);
});

hbg.addEventListener('click', (e) => {
  e.stopPropagation();
  drop.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!navLeft.contains(e.target)) {
    drop.classList.remove('open');
  }
});

window.addEventListener('load', () => {
  document.body.classList.add('page-loaded');

  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) {
      el.scrollIntoView();
    }
  }
});

document.querySelectorAll('a').forEach(link => {
  const href = link.getAttribute('href');

  if (
    href &&
    !href.startsWith('#') &&
    !href.startsWith('http') &&
    !href.includes('#') //
  ) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      document.body.classList.remove('page-loaded');
      document.body.classList.add('fade-out');

      setTimeout(() => {
        window.location.href = href;
      }, 250);
    });
  }
});

