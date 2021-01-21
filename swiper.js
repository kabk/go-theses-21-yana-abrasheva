import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";

document.addEventListener("DOMContentLoaded", function () {
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
    autoplay: {
      delay: 1000,
    },

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

// function changeImageTitle() {
//   const slide = document.getElementsByClassName("swiper-slide-active");
//   const title = slide[0].children[0].src.split("/").pop().replace(".png", "");
//   const titleEl = document.getElementById("image-title");
//   titleEl.innerText = title;
// }
