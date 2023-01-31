// const burgerToggler = document.querySelector(".icon-burger");
// const imgBurger = document.querySelector(".burger");
// const navContainer = document.querySelector(".nav-container");

// const toggleNav = (e) => {
//   burgerToggler.classList.toggle("open");
//   navContainer.classList.toggle("open");
// };
// burgerToggler.addEventListener("click", toggleNav);
// navContainer.addEventListener("mouseleave", function () {
//   navContainer.classList.remove("open");
// });
// imgBurger.addEventListener("click", noMenu);
const menuBurger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

menuBurger.addEventListener("click", () => {
  navMenu.classList.toggle("mobile-menu");
});
