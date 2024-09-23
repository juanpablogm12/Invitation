// ------Animacion------ //

const animation = lottie.loadAnimation({
  container: document.getElementById("lottie-background"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://lottie.host/7eb867eb-8c57-430f-8fbe-0c7a3f3ee0c2/KtAAJHaYDR.json",
});

const modal = document.getElementById("modal");
const openModal = document.getElementById("location");
const closeModal = document.getElementById("close");

// ------Ventana Modal------ //

openModal.onclick = () => {
  modal.classList.add("show");
};

closeModal.onclick = () => {
  modal.classList.remove("show");
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// ------Mensaje Asistencia------ //

const attendence = document.getElementById("attendence");
const message = encodeURIComponent("¡Hola! Te confirmo mi asistencia.");
const number = "573003730767";
const url = `https://api.whatsapp.com/send?phone=${number}&text=${message}`;

attendence.addEventListener("click", () => {

  console.log(url)
  window.open(url, "_blank");
});
