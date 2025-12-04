document.addEventListener("DOMContentLoaded", function () {

  // ==============================
  // THEME TOGGLE (simple version)
  // ==============================
  var root = document.documentElement;
  var toggleBtn = document.getElementById("dark-toggle");

  var saved = null;
  try {
    saved = localStorage.getItem("theme");
  } catch (e) {
    saved = null;
  }

  if (saved === "dark") {
    root.classList.add("dark-mode");
  } else if (saved === "light") {
    root.classList.remove("dark-mode");
  } else {
    // Fallback: leave as-is (CSS prefers-color-scheme handles auto)
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      var isDark = root.classList.toggle("dark-mode");
      try {
        localStorage.setItem("theme", isDark ? "dark" : "light");
      } catch (e) {}
    });
  }

  // ==============================
  // MOBILE MENU (minimal, iPhone-safe)
  // ==============================
  var burger = document.getElementById("menuToggle");
  var mobileMenu = document.getElementById("mobileMenu");

  if (burger && mobileMenu) {

    function toggleMenu(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }

      if (mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open");
      } else {
        mobileMenu.classList.add("open");
      }
    }

    // Click for most browsers
    burger.addEventListener("click", toggleMenu, false);
    // touchstart for iPhone Safari
    burger.addEventListener("touchstart", toggleMenu, false);
  }

});
