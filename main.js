const btn = document.getElementById('hamburgerBtn');
const dropdown = document.getElementById('dropdown');
let dropCloseTimeout = null;

btn.addEventListener('mouseenter', () => {
  clearTimeout(dropCloseTimeout);
  dropdown.classList.add('open');
});

dropdown.addEventListener('mouseenter', () => {
  clearTimeout(dropCloseTimeout);
});

btn.addEventListener('mouseleave', () => {
  dropCloseTimeout = setTimeout(() => {
    dropdown.classList.remove('open');
  }, 400);
});

dropdown.addEventListener('mouseleave', () => {
  dropCloseTimeout = setTimeout(() => {
    dropdown.classList.remove('open');
  }, 400);
});

dropdown.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => dropdown.classList.remove('open'));
});


const portfolioTitle = document.querySelector('.portfolio-title');
const portfolioContent = document.getElementById('portfolioContent');

portfolioTitle.addEventListener('click', () => {
  portfolioTitle.classList.toggle('collapsed');
  portfolioContent.classList.toggle('collapsed');
});

window.addEventListener('load', () => {
  document.body.classList.add('page-loaded');
});

document.querySelectorAll('a[href]').forEach(link => {
  link.addEventListener('click', e => {
    const url = link.getAttribute('href');

    if (!url || url.startsWith('#') || link.target === '_blank') return;

    e.preventDefault();

    document.body.classList.add('fade-out');

    setTimeout(() => {
      window.location.href = url;
    }, 300);
  });
});