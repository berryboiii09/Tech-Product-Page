const themeToggle = document.getElementById("themeToggle");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");
const html = document.documentElement;
const images = document.getElementById("heroImage");
const sidebar = document.getElementById("mobileSidebar");
const menuButton = document.getElementById("sidebarBtn");
const currentTheme = localStorage.getItem("theme") || "light";

html.setAttribute("data-theme", currentTheme);
updateIcon(currentTheme);

/*Toggle theme*/
themeToggle.addEventListener("click", () => {
  const theme = html.getAttribute("data-theme");
  const newTheme = theme === "light" ? "dark" : "light";
  const newImage =
    theme === "light"
      ? (images.src = "img/Screen2.png")
      : (images.src = "img/Screen1.png");
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateIcon(newTheme);
});

/*Update icon*/
function updateIcon(theme) {
  if (theme === "dark") {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  } else {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  }
}

/*Mobile sidebar*/
function openSidebar() {
  sidebar.classList.add("open");
}

function closeSidebar() {
  sidebar.classList.remove("open");
}

function toggleSidebar() {
  if (sidebar.classList.contains("open")) {
    closeSidebar();
    menuButton.classList.remove("active");
  } else {
    openSidebar();
    menuButton.classList.add("active");
  }
}
menuButton.addEventListener("click", toggleSidebar);
