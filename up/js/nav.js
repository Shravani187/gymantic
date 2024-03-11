const header = document.querySelector(".header");
const menu = document.querySelector(".header_menu");
const overlay = document.querySelector(".header_overlay");
menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  header.classList.toggle("open");
  overlay.classList.toggle("open");
});
