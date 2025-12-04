document.addEventListener("DOMContentLoaded", function () {

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
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.classList.toggle("dark-mode", systemDark);
  }

  /* ---------------------------------------------
     Respond to OS dark mode changes
  --------------------------------------------- */
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
    if (!localStorage.getItem("theme")) {
      root.classList.toggle("dark-mode", e.matches);
    }
  });

  /* ---------------------------------------------
     Manual Theme Toggle
  --------------------------------------------- */
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      const dark = root.classList.toggle("dark-mode");
      localStorage.setItem("theme", dark ? "dark" : "light");
    });
  }

  /* ---------------------------------------------------------
     MOBILE MENU (iPhone Safe)
  --------------------------------------------------------- */
  const burger = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  function toggleMenu(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    mobileMenu.classList.toggle("open");
  }

  if (burger) {
    burger.addEventListener("click", toggleMenu);
    burger.addEventListener("touchstart", toggleMenu);
  }

  function closeMenu(e) {
    if (
      mobileMenu &&
      !mobileMenu.contains(e.target) &&
      !burger.contains(e.target)
    ) {
      mobileMenu.classList.remove("open");
    }
  }

  document.addEventListener("click", closeMenu);
  document.addEventListener("touchstart", closeMenu);

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && mobileMenu) {
      mobileMenu.classList.remove("open");
    }
  });

}); // ← THIS WAS MISSING
