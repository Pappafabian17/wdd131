const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

document.addEventListener("DOMContentLoaded", () => {
  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    nav.classList.toggle("open");
  });
});
