var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-nextt",
        prevEl: ".swiper-button-prevv",
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