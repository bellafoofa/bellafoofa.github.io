const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const themeToggle = document.getElementById('themeToggle');
const themeColorMeta = document.getElementById('themeColorMeta');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', event => {
    if (
      window.innerWidth <= 860 &&
      siteNav.classList.contains('open') &&
      !siteNav.contains(event.target) &&
      !navToggle.contains(event.target)
    ) {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const systemDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');

function getPreferredTheme() {
  const saved = localStorage.getItem('portfolio-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return systemDarkQuery.matches ? 'dark' : 'light';
}

function applyTheme(theme, save = false) {
  document.documentElement.dataset.theme = theme;

  if (themeColorMeta) {
    themeColorMeta.setAttribute(
      'content',
      theme === 'dark' ? '#111814' : '#f4f7f1'
    );
  }

  if (themeToggle) {
    const isDark = theme === 'dark';
    themeToggle.setAttribute('aria-pressed', String(isDark));
    const icon = themeToggle.querySelector('.theme-icon');
    const label = themeToggle.querySelector('.theme-label');
    if (icon) icon.textContent = isDark ? '☀' : '☾';
    if (label) label.textContent = isDark ? 'Light' : 'Dark';
  }

  if (save) localStorage.setItem('portfolio-theme', theme);
}

applyTheme(getPreferredTheme());

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme || getPreferredTheme();
    applyTheme(current === 'dark' ? 'light' : 'dark', true);
  });
}

systemDarkQuery.addEventListener?.('change', event => {
  if (!localStorage.getItem('portfolio-theme')) {
    applyTheme(event.matches ? 'dark' : 'light');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 860 && siteNav) {
    siteNav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }
});
