// --- DARK MODE ---
document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const btn = document.querySelector(".dark-toggle");

  // Load saved mode
  if (localStorage.getItem("darkMode") === "true") {
    html.classList.add("dark-mode");
  }

  updateToggleButton();

  // Click button ➝ toggle
  btn.addEventListener("click", () => {
    html.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", html.classList.contains("dark-mode"));
    updateToggleButton();
  });

  function updateToggleButton() {
    if (html.classList.contains("dark-mode")) {
      btn.textContent = "Light Mode";
    } else {
      btn.textContent = "Dark Mode";
    }
  }

  // --- ACTIVE NAV ---
  const path = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (
      link.getAttribute("href") === path ||
      (path === "" && link.getAttribute("href") === "index.html")
    ) {
      link.classList.add("active");
    }
  });

  // --- FADE-IN DELAY ---
  document.querySelectorAll(".fade-in").forEach((el, i) => {
    el.style.animationDelay = `${i * 0.1}s`;
  });
});

