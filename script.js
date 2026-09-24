
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('bella-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', initial);
  const updateIcon = () => {
    if (!toggle) return;
    const dark = root.getAttribute('data-theme') === 'dark';
    toggle.textContent = dark ? '☀︎' : '☾';
  };
  updateIcon();
  if (toggle) {
    toggle.addEventListener('click', function () {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('bella-theme', next);
      updateIcon();
    });
  }
})();
