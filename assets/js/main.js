/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector(".nav__menu"),
  navToggle = document.querySelector(".nav__toggle"),
  navLinks = document.querySelectorAll(".nav__list a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER PROJECTS ===============*/
const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});

/*=============== SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
ScrollReveal().reveal(".section__title", {
  origin: "top",
  distance: "50px",
  duration: 1000,
  delay: 200,
});
ScrollReveal().reveal(".section__subtitle", {
  origin: "top",
  distance: "50px",
  duration: 1000,
  delay: 400,
});
ScrollReveal().reveal(".service, .swiper-slide, .contact .button", {
  interval: 200,
  distance: "50px",
  duration: 1000,
  origin: "bottom",
});
