const menuBtn = document.querySelector(".nav__toggler");
const navCollaps = document.querySelector(".collapsible");
const searchBtn = document.querySelector(".btn--search");
const searchBox = document.querySelector(".search-box");

menuBtn.addEventListener("click", function () {
  navCollaps.classList.toggle("collapsible--expanded");
});

searchBtn.addEventListener("click", function () {
  document.body.classList.add("opened");
  searchBox.style.display = "block";
});

document.querySelector(".btnClose").addEventListener("click", function (e) {
  searchBox.style.display = "none";
});
