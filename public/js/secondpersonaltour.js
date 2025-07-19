let secondPerosnalTourBox = document.querySelector(".secondpersonaltour");;
let tourScheduleArrow = document.querySelector(".secondmaincontent a i");

secondPerosnalTourBox.addEventListener("mouseover", () => {

    tourScheduleArrow.style.transform = "translateX(50px)";
    tourScheduleArrow.style.transition = "all 0.8s ease";

});

secondPerosnalTourBox.addEventListener("mouseout", () => {

    tourScheduleArrow.style.transform = "translateX(0px)";
    tourScheduleArrow.style.transition = "all 0.8s ease";

})