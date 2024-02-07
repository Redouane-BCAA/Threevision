
import { setupArrowUp } from "./arrowUp.js";
import { displayMemberCards } from "./funderCard.js";
import { setupHeader } from "./header.js";


setupHeader();
setupArrowUp();

// on vérifie si la page actuelle est le-studio.html avant d'afficher les cartes membres (éviter les erreurs console)
if (window.location.pathname === '/le-studio.html') {
  displayMemberCards();
}
