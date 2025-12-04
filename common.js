document.addEventListener("DOMContentLoaded", () => {

  const root = document.documentElement;
  const toggleBtn = document.getElementById("dark-toggle");

  /* ---------------------------------------------
     Load saved theme OR fall back to system theme
  --------------------------------------------- */
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    root.classList.add("dark-mode");
  } else if (saved === "light") {
    root.classList.remove("dark-mode");
  } else {
    // No manual preference → follow OS
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.classList.toggle("dark-mode", systemDark);
  }

  /* ---------------------------------------------
     Respond to OS dark mode changes
     (only if user hasn't manually selected a mode)
  --------------------------------------------- */
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      root.classList.toggle("dark-mode", e.matches);
    }
  });

  /* ---------------------------------------------
     Manual Theme Toggle
  --------------------------------------------- */
  toggleBtn?.addEventListener("click", () => {
    const dark = root.classList.toggle("dark-mode");
    localStorage.setItem("theme", dark ? "dark" : "light");
  });

  /* ---------------------------------------------------------
     MOBILE MENU
  --------------------------------------------------------- */
/* ---------------------------------------------------------
   MOBILE MENU — iPhone Safe Version
--------------------------------------------------------- */
const burger = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

/* Open menu (supports Safari's touch issues) */
function toggleMenu(e) {
  e.stopImmediatePropagation();   // Safari: fully stop bubbling
  mobileMenu.classList.toggle("open");
}

burger?.addEventListener("click", toggleMenu);
burger?.addEventListener("touchstart", toggleMenu);

/* Close menu when tapping outside */
function closeMenu(e) {
  if (!mobileMenu.contains(e.target) && !burger.contains(e.target)) {
    mobileMenu.classList.remove("open");
  }
}

document.addEventListener("click", closeMenu);
document.addEventListener("touchstart", closeMenu);

/* Close menu when resizing to desktop */
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    mobileMenu.classList.remove("open");
  }
});
