const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

function applyTheme(theme) {
  const dark = theme === "dark";
  root.dataset.theme = dark ? "dark" : "light";

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(dark));
    themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    const icon = themeToggle.querySelector(".theme-icon");
    const label = themeToggle.querySelector(".theme-label");
    if (icon) icon.textContent = dark ? "☀" : "☾";
    if (label) label.textContent = dark ? "Light" : "Dark";
  }
}

// User choice is remembered. On a first visit, always open in light mode.
const savedTheme = localStorage.getItem("isabella-theme");
applyTheme(savedTheme === "dark" ? "dark" : "light");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("isabella-theme", next);
    applyTheme(next);
  });
}

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
