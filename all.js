// banner 輪播
let swiperBanner = new Swiper(".mySwiper", {
  direction: "horizontal",
  speed: 3000,
  loop: true,
  pagination: {
    // el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 1000,
  },
});

// about cards 輪播
let swiperList = new Swiper(".movieList", {
  direction: "horizontal",
  speed: 1000,
  spaceBetween: 30,
  pagination: {
    el: ".movieList-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 3000,
  // },
});

// 電影頁面輪播
let swiperIntegrate = new Swiper(".movieIntegrate", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    // el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let sns__icon = document.querySelector(".footer__icon");

sns__icon.addEventListener("click", function (e) {
  e.preventDefault();
});
