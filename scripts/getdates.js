const year = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

const today = new Date();

year.textContent = today.getFullYear();
lastModified.textContent = `Last modification : ${document.lastModified}`;
