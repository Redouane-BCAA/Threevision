export function modalConfidentiality() {
  let privacyModal = document.getElementById("modal-privacy");
  let cguModal = document.getElementById("modal-cgu");
  let legalModal = document.getElementById("modal-legal-notice");
  let backdrop = document.getElementById("backdrop");

  let privacyLink = document.querySelector(".privacy-link");

  let cguLink = document.querySelector(".cgu-link");
  let legalLink = document.querySelector(".legal-notice-link");

  let closeBtns = document.querySelectorAll(".close");

  privacyLink.addEventListener("click", function (event) {
    event.preventDefault();
    // Affiche le modal Privacy Policy et le backdrop
    privacyModal.style.display = "block";
    backdrop.style.display = "block";
  });

  cguLink.addEventListener("click", function (event) {
    event.preventDefault();
    // Affiche le modal CGV et le backdrop
    cguModal.style.display = "block";
    backdrop.style.display = "block";
  });

  legalLink.addEventListener("click", function (event) {
    event.preventDefault();
    // Affiche le modal legal notice et le backdrop
    legalModal.style.display = "block";
    backdrop.style.display = "block";
  });

  // Boucle à travers tous les boutons de fermeture
  closeBtns.forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
      // Cache tous les modals et le backdrop
      privacyModal.style.display = "none";
      cguModal.style.display = "none";
      legalModal.style.display = "none";
      backdrop.style.display = "none";
    });
  });

  backdrop.addEventListener("click", function () {
    // Cache tous les modals et le backdrop en cas de clic sur le backdrop
    privacyModal.style.display = "none";
    cguModal.style.display = "none";
    legalModal.style.display = "none";
    backdrop.style.display = "none";
  });
}
