var swiperv = new Swiper(".mySwiperv", {
  
  navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
  });

  var swiperv2 = new Swiper(".mySwiperv2", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-nexti",
      prevEl: ".swiper-button-previ",
    },

    breakpoints: {
      // Configuración cuando el ancho de la ventana es igual o menor a 400px
      300: {
          slidesPerView: 1,
          centeredSlides: false,
          spaceBetween: 20, // Espacio entre los slides
      },
      500: {
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 20, // Espacio entre los slides
    },
    700: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 20, // Espacio entre los slides
  },

  900: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 20, // Espacio entre los slides
  },
}

  });