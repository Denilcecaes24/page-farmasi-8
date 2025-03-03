var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
      },

      breakpoints: {
        // Configuración cuando el ancho de la ventana es igual o menor a 400px
        200: {
          slidesPerView: 1,
          centeredSlides: false,
          spaceBetween: 20, // Espacio entre los slides
      },
      700: {
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 20, // Espacio entre los slides
    },
    800: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 20, // Espacio entre los slides
  },
  1000: {
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 20, // Espacio entre los slides
},
  }
  });

  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
      },
  });