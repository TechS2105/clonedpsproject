let swipercard = new Swiper('.myswiper', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 2000,
    autoplay: {

        delay: 2500

    },

    breakpoints: {

        300: {

            slidesPerView: 1,
            spaceBetween: 30

        },

        700: {

            slidesPerView: 2,
            spaceBetween: 30,

        },

        1200: {

            slidesPerView: 2,
            spaceBetween: 30

        }

    }

});

document.querySelector('.swipper-event-card').addEventListener("mouseover", () => {

    swipercard.autoplay.stop();

});

document.querySelector('.swipper-event-card').addEventListener("mouseout", () => {

    swipercard.autoplay.start();

});

let happingsLink = document.querySelector(".boxcontent a");
let happingsLinkIcon = document.querySelector(".boxcontent a i");

happingsLink.addEventListener('mouseover', () => {

    happingsLinkIcon.style.transform = "translateX(20%)";
    happingsLinkIcon.style.transition = "all 0.8s ease";

});

happingsLink.addEventListener('mouseout', () => {

    happingsLinkIcon.style.transform = "translateX(0px)";
    happingsLinkIcon.style.transition = "all 0.8s ease";

});

let eventCardBoxes = document.querySelectorAll(".swipper-event-card .event-card-box");

for (let i = 0; i < eventCardBoxes.length; i++){

    eventCardBoxes[i].addEventListener('mouseover', () => {

        eventCardBoxes[i].style.transform = "scale(1.05)";
        eventCardBoxes[i].style.transition = "all 0.8s ease";


    });

    eventCardBoxes[i].addEventListener('mouseout', () => {

        eventCardBoxes[i].style.transform = "scale(1)";
        eventCardBoxes[i].style.transition = "all 0.8s ease";

    })

}