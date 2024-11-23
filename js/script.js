function openModal(projectName) {
  const modal = document.getElementById(`${projectName}-modal`);
  if (modal) {
    modal.style.display = "block";
  }
}

function closeModal(projectName) {
  const modal = document.getElementById(`${projectName}-modal`);
  if (modal) {
    modal.style.display = "none";
  }
}

// Close the modal when clicking outside of it
window.addEventListener("click", function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
