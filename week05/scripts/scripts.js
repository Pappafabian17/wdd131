const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => displayList(chapter));

button.addEventListener("click", () => {
  const chapter = input.value.trim();
  if (chapter !== "") {
    displayList(chapter); 
    chaptersArray.push(chapter); 
    setChapterList(); 
    input.value = ""; 
    input.focus(); 
  }
});

function displayList(item) {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";

  deleteButton.addEventListener("click", () => {
    deleteChapter(item); 
  });

  listItem.append(deleteButton);
  list.append(listItem);
}

function setChapterList() {
  localStorage.setItem("chapters", JSON.stringify(chaptersArray));
}

function getChapterList() {
  const storedChapters = localStorage.getItem("chapters");
  return storedChapters ? JSON.parse(storedChapters) : null;
}

function deleteChapter(chapter) {
  chaptersArray = chaptersArray.filter((item) => item !== chapter);

  setChapterList();

  list.innerHTML = ""; 
  chaptersArray.forEach((chapter) => displayList(chapter)); 
}


