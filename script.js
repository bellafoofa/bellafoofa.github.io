const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

// Theme is automatic: CSS follows the visitor's browser/device preference.
// There is intentionally no manual light/dark toggle.

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
