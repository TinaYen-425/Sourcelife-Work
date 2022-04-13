// let appendNumber = 3;
// let prependNumber = 1;
const swiper = new Swiper('.swiper', {

    breakpoints: {
        1: {
            slidesPerView: 2, 
            centeredSlides: false,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3, //3.2
            centeredSlides: false,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 4, //3.2
            centeredSlides: false,
            spaceBetween: 10,
        }
    },


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,

    // virtual: {
    //   slides: (function () {
    //     const slides = [];
    //     for (var i = 0; i < 4; i += 1) {
    //       slides.push('Slide ' + (i + 1));
    //     }
    //     return slides;
    //   })(),
    // },
});