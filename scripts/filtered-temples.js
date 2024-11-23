const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Bahia Blanca",
    location: "Bahia Blanca city,Argentina",
    dedicated: "2025",
    area: 190000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bahia-blanca-argentina-temple/bahia-blanca-argentina-temple-24944-main.jpg"
  },
  {
    templeName: "Buenos Aires",
    location: "Buenos Aires city,Argentina",
    dedicated: "1994, March , 5",
    area: 30659,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
  },
  {
    templeName: "Salta,Argentina",
    location: "Salta,Argentina",
    dedicated: "2024, june, 16",
    area: 116642,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salta-argentina-temple/salta-argentina-temple-48241-main.jpg"
  },
];
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});


function displayImages(filteredTemples) {
  const templesGrid = document.querySelector(".templesGrid");
  templesGrid.textContent = ""; // Limpia el contenido previo
  const fragment = document.createDocumentFragment();

  filteredTemples.forEach((temple) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Size: ${temple.area} sq ft</p>
      <img class="card-image" src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy"/>
    `;
    fragment.appendChild(card);
  });

  templesGrid.appendChild(fragment);
}

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click",()=>{
  displayImages(temples)
})
oldLink.addEventListener("click",()=>{
  let oldTemples = temples.filter(temple => temple.dedicated.split(",")[0] < 1900)
  displayImages(oldTemples)
})

newLink.addEventListener("click",()=>{
  let newTemples = temples.filter(temple => temple.dedicated.split(",")[0] > 2000);
  displayImages(newTemples)
})

largeLink.addEventListener('click',()=>{
  let largeTemples = temples.filter(temple => temple.area > 90000);
  displayImages(largeTemples)
})

smallLink.addEventListener("click",()=>{
  let smallTemples = temples.filter(temple => temple.area < 10000 );
  displayImages(smallTemples)
})


displayImages(temples);