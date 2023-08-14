const menuBtn = document.querySelector(".nav__toggler");
const navCollaps = document.querySelector(".collapsible");

menuBtn.addEventListener("click", function () {
  navCollaps.classList.toggle("collapsible--expanded");
});
