let personalTourSection = document.querySelector(".personaltoursection");
let scheduleArrow = document.querySelector(".smallcontent a i");

personalTourSection.addEventListener('mouseover', () => {

    scheduleArrow.style.transform = "translateX(50px)";
    scheduleArrow.style.transition = "all 0.8s ease";

});

personalTourSection.addEventListener('mouseout', () => {

    scheduleArrow.style.transform = "translateX(0px)";
    scheduleArrow.style.transition = "all 0.8s ease";

});