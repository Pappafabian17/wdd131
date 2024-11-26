document.addEventListener("DOMContentLoaded", () => {
const reviewCount = localStorage.getItem("reviewCount");
  const reviewCountElement = document.getElementById("reviewCount");
  if (reviewCountElement) {
    reviewCountElement.textContent = reviewCount;
  }
})