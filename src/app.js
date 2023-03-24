const menu = document.getElementById("menu");
const menuLink = document.querySelectorAll(".menu-link");
const open = document.getElementById("open");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  menu.style.right = "0%";
});

close.addEventListener("click", () => {
  menu.style.right = "-100%";
});
menuLink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.style.right = "-100%";
  });
});
