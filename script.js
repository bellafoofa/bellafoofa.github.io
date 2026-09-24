const themeToggle = document.getElementById("themeToggle");
const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (themeToggle) themeToggle.textContent = theme === "dark" ? "☀︎" : "☾";
}

const savedTheme = localStorage.getItem("isabella-theme");
applyTheme(savedTheme || (themeMedia.matches ? "dark" : "light"));

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    localStorage.setItem("isabella-theme", next);
    applyTheme(next);
  });
}

if (!savedTheme) {
  themeMedia.addEventListener?.("change", (event) => applyTheme(event.matches ? "dark" : "light"));
}

const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (
      window.innerWidth <= 900 &&
      siteNav.classList.contains("open") &&
      !siteNav.contains(event.target) &&
      !navToggle.contains(event.target)
    ) {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Internal case-study tabs
document.querySelectorAll(".case-tabs").forEach((tabList) => {
  const section = tabList.closest(".study-tabs-section");
  if (!section) return;

  const buttons = [...tabList.querySelectorAll(".case-tab")];
  const panels = [...section.querySelectorAll(".case-tab-panel")];

  const activate = (name) => {
    buttons.forEach((button) => {
      const active = button.dataset.tab === name;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", String(active));
    });
    panels.forEach((panel) => {
      const active = panel.dataset.panel === name;
      panel.classList.toggle("active", active);
      panel.hidden = !active;
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => activate(button.dataset.tab));
  });
});
