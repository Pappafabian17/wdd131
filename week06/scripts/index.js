const places = [
  {
    title: "La Boca",
    description: "Famous for Caminito, a place full of color and tango.",
    image: "./images/la-Boca.webp",
    numbOfTourists: 500000,
  },
  {
    title: "Recoleta",
    description: "Home to the Recoleta Cemetery and elegant streets.",
    image: "./images/recoleta.webp",
    numbOfTourists: 700000,
  },
  {
    title: "Palermo",
    description: "Known for its cafes, boutiques, and green parks.",
    image: "./images/palermo.webp",
    numbOfTourists: 800000,
  },
  {
    title: "San Telmo",
    description: "The oldest neighborhood in Buenos Aires, full of history.",
    image: "./images/san-telmo.webp",
    numbOfTourists: 600000,
  },
  {
    title: "Puerto Madero",
    description: "A modern district with skyscrapers and a riverside walk.",
    image: "./images/puerto-madero.webp",
    numbOfTourists: 400000,
  },
  {
    title: "Casa Rosada",
    description: "The seat of the Argentine government in Plaza de Mayo.",
    image: "./images/casa-rosada.webp",
    numbOfTourists: 900000,
  },
  {
    title: "Teatro Colón",
    description: "One of the most famous opera houses in the world.",
    image: "./images/teatro-colon.webp",
    numbOfTourists: 300000,
  },
  {
    title: "Obelisco",
    description: "The city's most iconic monument.",
    image: "./images/obelisco.webp",
    numbOfTourists: 1000000,
  },
  {
    title: "Chinatown",
    description: "A small neighborhood full of Asian culture and cuisine.",
    image: "./images/barrio-chino.webp",
    numbOfTourists: 200000,
  },
  {
    title: "Ecological Reserve",
    description: "A green space ideal for disconnecting from the city.",
    image: "./images/ecoparque.webp",
    numbOfTourists: 250000,
  },
  {
    title: "Caminito",
    description: "A street museum full of life and culture.",
    image: "./images/caminito.webp",
    numbOfTourists: 300000,
  },
  {
    title: "Plaza de Mayo",
    description: "The historical heart of Buenos Aires.",
    image: "./images/plaza-mayo.webp",
    numbOfTourists: 800000,
  },
  {
    title: "Galerías Pacífico",
    description: "A shopping center with exceptional architecture and art.",
    image: "./images/shopping.webp",
    numbOfTourists: 500000,
  },
  {
    title: "MALBA Museum",
    description: "The most prominent museum of Latin American art.",
    image: "./images/malba-museum.webp",
    numbOfTourists: 150000,
  },
  {
    title: "El Tigre",
    description: "A destination for boat trips through the delta.",
    image: "./images/el-tigre.webp",
    numbOfTourists: 400000,
  },
  {
    title: "Tortoni Cafe",
    description: "The oldest and most famous cafe in Buenos Aires.",
    image: "./images/cafe-tortoni.webp",
    numbOfTourists: 350000,
  },
  {
    title: "Corrientes Avenue",
    description: "Buenos Aires' Broadway with theaters and bookstores.",
    image: "./images/corrientes.webp",
    numbOfTourists: 450000,
  },
  {
    title: "February 3 Park",
    description: "A huge park with lakes and gardens.",
    image: "./images/3-febrero.webp",
    numbOfTourists: 700000,
  },
  {
    title: "El Ateneo",
    description: "A spectacular bookstore in a former theater.",
    image: "./images/el-ateneo.webp",
    numbOfTourists: 300000,
  },
  {
    title: "Florida Street",
    description: "A pedestrian street filled with shops and activities.",
    image: "./images/florida.webp",
    numbOfTourists: 600000,
  },
];

const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");
const cardContainer = document.querySelector("#places");
const favoritesContainer = document.querySelector("#favorites");

document.addEventListener("DOMContentLoaded", () => {
  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    nav.classList.toggle("open");
  });

  if (cardContainer) {
    const cards = places.map(
      ({ title, description, image, numbOfTourists }) => `
      <div class="card">
        <img src="${image}" alt="${title}" loading="lazy">
        <div class="card-body">
          <h3 class="card-title">${title}</h3>
          <p class="card-description">${description}</p>
          <p class="card-tourists">Visitors: ${numbOfTourists.toLocaleString()}</p>
          <button class="save-button action-button" data-title="${title}">Add to Favorites</button>
        </div>
      </div>
      `
    );
    cardContainer.innerHTML = cards.join("");

    const saveButtons = document.querySelectorAll(".save-button");
    saveButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const title = button.getAttribute("data-title");
        addToLocalStorage(title);
      });
    });
  }

  if (favoritesContainer) {
    renderFavorites();
  }
});

function renderFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.length === 0) {
    favoritesContainer.innerHTML = "<p>You have no favorites yet!</p>";
    return;
  }

  const favoriteCards = favorites.map((title) => {
    const place = places.find((p) => p.title === title);
    if (!place) return "";
    return `
      <div class="card">
        <img src="${place.image}" alt="${place.title}" loading="lazy">
        <div class="card-body">
          <h3 class="card-title">${place.title}</h3>
          <p class="card-description">${place.description}</p>
          <p class="card-tourists">Visitors: ${place.numbOfTourists.toLocaleString()}</p>
          <button class="remove-button action-button" data-title="${
            place.title
          }">Remove</button>
        </div>
      </div>
    `;
  });

  favoritesContainer.innerHTML = favoriteCards.join("");

  const removeButtons = document.querySelectorAll(".remove-button");
  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const title = button.getAttribute("data-title");
      removeFromLocalStorage(title);
      renderFavorites();
    });
  });
}

function addToLocalStorage(title) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.includes(title)) {
    favorites.push(title);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert(`${title} has been added to favorites!`);
  } else {
    alert(`${title} is already in your favorites!`);
  }
}

function removeFromLocalStorage(title) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const updatedFavorites = favorites.filter((favorite) => favorite !== title);
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  alert(`${title} has been removed from favorites!`);
}
