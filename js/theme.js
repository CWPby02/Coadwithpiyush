const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

const savedTheme = localStorage.getItem("cwp-theme");

if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
}

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("cwp-theme", newTheme);
});

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
