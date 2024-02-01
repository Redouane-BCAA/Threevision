// ************** HEADER *******************
const burgerMenu = document.querySelector(".burger-menu");
const navbar = document.querySelector(".menu ul");


burgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("show");
  burgerMenu.classList.toggle("cross");
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show");
    burgerMenu.classList.remove("cross");
  });
});
