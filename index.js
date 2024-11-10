//MENU MODAL
const openMenu = document.querySelector(".burger-menu");
const closeMenu = document.querySelector(".modal-burger-close-button");
const modalMenu = document.querySelector(".modal-burger-menu");
const modalMenuOverlay = document.querySelector(".overlay-burger");

openMenu.addEventListener("click", () => {
  modalMenu.style.display = "flex";
  document.body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
  modalMenu.style.display = "none";
  document.body.style.overflow = "";
});

window.addEventListener("click", (event) => {
  if (event.target === modalMenuOverlay) {
    modalMenu.style.display = "none";
    document.body.style.overflow = "";
  }
});

//BUY NOW MODAL
const openBuyNow = document.querySelector(".header-buynow");
const openBuyNowBurgerMenu = document.querySelector(
  ".modal-burger-buynow-button"
);
const closeBuyNow = document.querySelector(".modal-buynow-close-button");
const modalBuyNow = document.querySelector(".modal-buynow-menu");
const modalBuyNowOverlay = document.querySelector(".overlay-buynow");

openBuyNow.addEventListener("click", () => {
  modalBuyNow.style.display = "flex";
  document.body.style.overflow = "hidden";
});

openBuyNowBurgerMenu.addEventListener("click", () => {
  modalBuyNow.style.display = "flex";
  document.body.style.overflow = "hidden";
});

closeBuyNow.addEventListener("click", () => {
  modalBuyNow.style.display = "none";
  document.body.style.overflow = "";
});

window.addEventListener("click", (event) => {
  if (event.target === modalBuyNowOverlay) {
    modalBuyNow.style.display = "none";
    document.body.style.overflow = "";
  }
});

//LOCATION MODAL

const openLocation = document.querySelector(".locations-button");
const closeLocation = document.querySelector(".modal-location-close-button");
const modalLocation = document.querySelector(".modal-location");
const modalLocationOverlay = document.querySelector(".overlay-location");

openLocation.addEventListener("click", () => {
  let scrollY = document.documentElement.scrollTop;
  modalLocation.style.top = scrollY + "px";
  modalLocation.style.display = "flex";
  document.body.style.overflow = "hidden";
});

closeLocation.addEventListener("click", () => {
  modalLocation.style.display = "none";
  document.body.style.overflow = "";
});

window.addEventListener("click", (event) => {
  if (event.target === modalLocationOverlay) {
    modalLocation.style.display = "none";
    document.body.style.overflow = "";
  }
});