var mySwiper = new Swiper('.mySwiper', {
  direction: 'horizontal',
  loop: true,
  simulateTouch: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
      simulateTouch: false,
    }
  },
  initialSlide: 2,
});
