// this is for the footer and its copy right age only
const age = document.querySelector(".thedate");
age.textContent = new Date().getFullYear();

// drop menu button arrangement

const target = document.querySelector(".main-container");
const button = document.querySelector(".menu");

button.addEventListener("click", function () {
  target.classList.toggle("open");
});
