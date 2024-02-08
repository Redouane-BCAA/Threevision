// Utilisation de Fetch pour récupérer les données des coéquipiers
export async function fetchDataTeammates() {
  try {
    const response = await fetch("../assets/data/data.json");
    const data = await response.json();
    return data.teammates;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données des coéquipiers :",
      error
    );
    return [];
  }
}

// Fonction pour créer les card teammates
export function createTeammateCard(teammate) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("teammate_card");

  const img = document.createElement("img");
  img.src = teammate.img;
  img.alt = "photo de notre équipier " + teammate.name;
  img.width = 131;
  img.height = 222;

  const txtDiv = document.createElement("div");
  txtDiv.classList.add("teammate_card_txt");

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.textContent = teammate.description;

  const nameHeader = document.createElement("h4");
  nameHeader.classList.add("team-orange");
  nameHeader.textContent = teammate.name;

  const roleParagraph = document.createElement("p");
  roleParagraph.textContent = teammate.role;

  // Création du span pour "Jeu Favori"
const gameLabel = "Jeu Favori : ";

// Création du paragraphe contenant le jeu favori
const gameParagraph = document.createElement("p");
gameParagraph.classList.add("game-info");
gameParagraph.innerHTML = `<span class="span-bold">${gameLabel}</span> ${teammate.game}`;

const teammateInfos = document.createElement("div");
teammateInfos.classList.add("teammate_infos");

  txtDiv.appendChild(descriptionParagraph);
  txtDiv.appendChild(teammateInfos);

  teammateInfos.appendChild(nameHeader);
  teammateInfos.appendChild(roleParagraph);
  teammateInfos.appendChild(gameParagraph);

  cardDiv.appendChild(img);
  cardDiv.appendChild(txtDiv);

  return cardDiv;
}

// Fonction pour afficher les card teammates
export async function displayTeammateCards() {
  const teammateCardsContainer = document.querySelector(".teammate_container");
  const data = await fetchDataTeammates();
  teammateCardsContainer.innerHTML = "";
  data.forEach((teammate) => {
    const card = createTeammateCard(teammate);
    teammateCardsContainer.appendChild(card);
  });
}
