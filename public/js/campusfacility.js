let facilityBox = document.querySelectorAll(".facilitybox");
let facilityBoxImageHeading = document.querySelectorAll(".facilitybox .imagescontent");

for (let i = 0; i < facilityBox.length; i++){

    let hideContentBox = facilityBox[i].querySelector(".hideimagecontent"); // hide content box
    let facilityImage = facilityBox[i].querySelector("img"); // facility box image
    let imageContent = facilityBox[i].querySelector(".imagescontent");

    if (hideContentBox) hideContentBox.style.transform = 'translateY(200px)';

    facilityBox[i].addEventListener("mouseover", () => {

        if(hideContentBox){

            hideContentBox.style.transform = "translateY(0px)";
            hideContentBox.style.transition = "all 0.8s ease";

        }

        if (facilityImage) {
            
            facilityImage.style.transform = "scale(1.1)";
            facilityImage.style.opacity = "0.5";
            facilityImage.style.transition = "all 0.5s ease";

        }

        if (imageContent) {
            
            imageContent.style.transform = "translateY(100px)";
            imageContent.style.transition = "all 0.5s ease";
            imageContent.style.filter = "blur(20px)";

        }

    });

    facilityBox[i].addEventListener("mouseout", () => {

        if (hideContentBox) {
            
            hideContentBox.style.transform = "translateY(200px)";
            hideContentBox.style.transition = "all 0.8s ease";

        }

        if (facilityImage) {
            
            facilityImage.style.transform = "scale(1)";
            facilityImage.style.opacity = "1";
            facilityImage.style.transition = "all 0.5s ease";

        }

        if (imageContent) {
            
            imageContent.style.transform = "translateY(0px)";
            imageContent.style.transition = "all 0.5s ease 0.2s";
            imageContent.style.filter = "blur(0px)";

        }


    });

}
