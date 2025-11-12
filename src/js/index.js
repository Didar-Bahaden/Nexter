// this is for the footer and its copy right age only
const age = document.querySelector(".thedate");
age.textContent = new Date().getFullYear();

// drop menu button arrangement

const target = document.querySelector(".main-container");
const button = document.querySelector(".menu");
const all = document.querySelectorAll(".x12");

button.addEventListener("click", function () {
  target.classList.toggle("open");
});

// to hide the list of drop menu while you click one of the iteam in tghe list
all.forEach(function (link) {
  link.addEventListener("click", function () {
    console.log(link);
    target.classList.toggle("open");
  });
});
