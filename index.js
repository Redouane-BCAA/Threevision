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

// *** Lien actif ******
const menuLinks = document.querySelectorAll('.menu ul li a');

// classe "active" au lien "Accueil" par défaut
const homeLink = document.querySelector('.menu ul li a[href="index.html"]');
homeLink.classList.add('active');

// listener pour mettre à jour la classe "active" lors du clic sur un lien
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // on supprime la classe "active" de tous les liens
    menuLinks.forEach(otherLink => otherLink.classList.remove('active'));
    
    // on ajoute la classe "active" au lien cliqué
    link.classList.add('active');
  });
});
