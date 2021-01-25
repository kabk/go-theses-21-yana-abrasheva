import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";

document.addEventListener("DOMContentLoaded", function () {
  change();
  loadSlides();
  const mySwiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "fade",
    on: {
      click: () => {
        nextSlide();
      },
    },
    // autoplay: {
    //   delay: 1000,
    // },
  });
  const nextSlide = () => mySwiper.slideNext();
});

const images = [
  "2.png",
  "3.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png",
  "21.png",
  "22.png",
  "23png.png",
  "24.png",
  "25.png",
  "26.png",
  "27.png",
  "28.png",
  "29.png",
  "30png.png",
  "31.png",
  "32.png",
];

function loadSlides() {
  const swiperWrapper = document.getElementById("swiper");
  images.forEach((image) => {
    swiperWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide"><img  class="fit" src="./assets/images/${image}"></div>`
    );
  });
}

const text = [
  "Three species",
  "On a Journey",
  "Curration and Dialogues",
  "Learning to Unlearn",
];
let counter = 0;
const elem = document.getElementById("titles");
const inst = setInterval(change, 1000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
