let swiper = new Swiper(".swiper", {

    loop: true,
    effect: 'fade',
    speed: 2000,
    autoplay: {

        delay: 3000,

    },

    navigation: {

        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-arrow-prev',

    }

});