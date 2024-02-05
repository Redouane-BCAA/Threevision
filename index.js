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
const currentPathUrl = window.location.href;
const menuLinks = document.querySelectorAll('.menu ul li a');

menuLinks.forEach(link => {
  if (link.href === currentPathUrl) {
    link.classList.add('active');
  }
});



// ************** SECTION MISSION ANIMATION *******************

document.addEventListener("DOMContentLoaded", function() {
  const missionSection = document.querySelector('.mission_section');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  observer.observe(missionSection);
});