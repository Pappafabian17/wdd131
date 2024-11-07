const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

function addChapter() {
  const chapter = input.value.trim();
  if (chapter !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = chapter;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    deleteButton.addEventListener("click", function () {
      list.removeChild(listItem);
      input.focus();
    });

    listItem.append(deleteButton);
    list.append(listItem);

    input.value = "";
    input.focus();
  }
}

button.addEventListener("click", () => addChapter());
