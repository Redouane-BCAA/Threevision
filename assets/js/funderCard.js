/******************* SHOW FUNDER CARD ************************/
// Utilisation de Fetch pour récupérer les données
export async function fetchDataFunder() {
  try {
    const response = await fetch("../assets/data/data.json"); 
    const data = await response.json();
    return data.funder 
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return [];
  }
}
// Fonction pour créer une carte membre
export function createMemberCard(member) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("funder_card");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("funder_card_img");
  const img = document.createElement("img");
  img.src = member.img;
  img.alt = "photo de l'un des fondateurs du studio Threevision";
  imgDiv.appendChild(img);

  const txtDiv = document.createElement("div");
  txtDiv.classList.add("funder_card_txt");
  const nameHeader = document.createElement("h4");
  nameHeader.textContent = member.name;
  const roleParagraph = document.createElement("p");
  roleParagraph.textContent = member.role;
  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.textContent = member.description;
  txtDiv.appendChild(nameHeader);
  txtDiv.appendChild(roleParagraph);
  txtDiv.appendChild(descriptionParagraph);

  cardDiv.appendChild(imgDiv);
  cardDiv.appendChild(txtDiv);

  return cardDiv;
}

// Fonction pour afficher les cartes membres
export async function displayMemberCards() {
  const funderCardsContainer = document.querySelector(
    ".funder_cards_container"
  );
  const data = await fetchDataFunder();
  funderCardsContainer.innerHTML = ""; 
  data.forEach((member) => {
    const card = createMemberCard(member);
    funderCardsContainer.appendChild(card);
  });
}