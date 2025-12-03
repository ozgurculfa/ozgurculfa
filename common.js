// Sayfa yüklenmeden önce dark mode'u uygula
if(localStorage.getItem("darkMode") === "true"){
  document.documentElement.classList.add("dark-mode");
}

function toggleDarkMode() {
  const html = document.documentElement;
  html.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', html.classList.contains('dark-mode'));
  updateToggleButton();
}

function updateToggleButton() {
  const btn = document.querySelector('.dark-toggle');
  if(!btn) return;
  if(document.documentElement.classList.contains('dark-mode')){
    btn.textContent = 'Light Mode';
    btn.style.backgroundColor = '#1c3a6d';
  } else {
    btn.textContent = 'Dark Mode';
    btn.style.backgroundColor = '#153a6d';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateToggleButton();

  // Nav link active class
  const path = window.location.pathname.split("/").pop();
  document.querySelectorAll('.nav-link').forEach(link => {
    if(link.getAttribute('href') === path ||
      (path === '' && link.getAttribute('href') === 'index.html')){
      link.classList.add('active');
    }
  });

  // fade-in animations
  document.querySelectorAll('.fade-in').forEach((el, i) => {
    el.style.animationDelay = `${i*0.1}s`;
  });
});
