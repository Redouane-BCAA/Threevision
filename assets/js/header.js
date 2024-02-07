export function setupHeader() {
  const burgerMenu = document.querySelector(".burger-menu");
  const navbar = document.querySelector(".menu ul");

  burgerMenu.addEventListener("click", () => {
    navbar.classList.toggle("show");
    burgerMenu.classList.toggle("cross");
  });

  document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("show");
      burgerMenu.classList.remove("cross");
    });
  });

  const menuLinks = document.querySelectorAll(".menu ul li a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuLinks.forEach((otherLink) => otherLink.classList.remove("active"));
      link.classList.add("active");
    });
  });
}