const toggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");
const openIcon = document.getElementById("menu-open");
const closeIcon = document.getElementById("menu-close");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});
