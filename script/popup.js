// Get the elements
const videoLink = document.getElementById("video-link");
const popupContainer = document.getElementById("popup-container");
const closeBtn = document.getElementById("close-btn");

// Function to open the popup
function openPopup(event) {
  event.preventDefault();
  popupContainer.style.display = "block";
}

// Function to close the popup
function closePopup() {
  popupContainer.style.display = "none";
}

// Event listeners
videoLink.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
