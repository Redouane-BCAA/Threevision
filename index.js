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

// listener pour mettre à jour la classe "active" lors du clic sur un lien
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // on supprime la classe "active" de tous les liens
    menuLinks.forEach(otherLink => otherLink.classList.remove('active'));
    
    // on ajoute la classe "active" au lien cliqué
    link.classList.add('active');
  });
});


  /******************* SHOW SCROLL UP ************************/ 
  const arrowUp = () =>{
      // on récupère l'élément arrowUp
      const showScrollUpBtn = document.getElementById("arrowUp");
      // si le déilement est sup ou = à 350 on affiche arrowUp 
      if(window.scrollY >= 350){
      showScrollUpBtn.classList.add('showArrowUp');
      }else{
          showScrollUpBtn.classList.remove('showArrowUp');
          }
  }
  window.addEventListener('scroll', arrowUp);

