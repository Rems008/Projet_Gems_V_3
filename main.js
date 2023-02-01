// FUNCTION BANDEAU TEXTE

const bandeauText = document.querySelector(".bandeau-text");

function bandeauChange() {
  bandeauText.innerHTML = "RÈGLEMENT 3 FOIS SANS FRAIS DÉS 200 €";
}
setInterval("bandeauChange()", 5000);

function bandeauChangeDeux() {
  bandeauText.innerHTML =
    "LIVRAISON OFFERTE À PARTIR DE 300 € EN FRANCE MÉTROPOLITAINE";
}
setInterval("bandeauChangeDeux()", 10000);

// FUNCTION DU MENU

const menuBurger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

menuBurger.addEventListener("click", () => {
  navMenu.classList.toggle("mobile-menu");
});

navMenu.addEventListener("mouseleave", () => {
  navMenu.classList.remove("mobile-menu");
});
