
import { setupArrowUp } from "./arrowUp.js";
import { displayMemberCards } from "./funderCard.js";
import { setupHeader } from "./header.js";
import { modalConfidentiality } from "./modalconfidentiality.js";
import { displayTeammateCards } from "./teammatesCard.js";


setupHeader();
setupArrowUp();
modalConfidentiality();

// on vérifie si la page actuelle est le-studio.html avant d'afficher les cartes membres (éviter les erreurs console)
if (window.location.pathname === '/le-studio.html') {
  displayMemberCards();
  displayTeammateCards();
}
