let campusVideo = document.querySelector(".campusvideosection img");
let campousVideoPopUp = document.querySelector('.campusvideopopup');
let videoPopupHeader = document.querySelector(".videoheader");
let videoBox = document.querySelector(".videobox");
let videoBoxIframe = document.querySelector(".videobox iframe");
let videoBoxClose = document.querySelector(".videobox i");

campousVideoPopUp.style.transform = "scale(0)";
campousVideoPopUp.style.opacity = "0";
campousVideoPopUp.style.filter = "blur(20px)";
videoPopupHeader.style.transform = "translateY(-300px)";
videoPopupHeader.style.filter = "blur(50px)";
videoBoxIframe.style.opacity = "0";
videoBoxIframe.style.filter = "blur(20px)";
videoBox.style.boxShadow = "0px 0px 0px";
videoBoxClose.style.transform = "scale(0)";
videoBoxClose.style.filter = "blur(0)";
videoBoxClose.style.opacity = "0";


campusVideo.addEventListener('click', () => {

    campousVideoPopUp.style.transform = "scale(1)";
    campousVideoPopUp.style.transition = "all 0.8s ease";
    campousVideoPopUp.style.opacity = "1";
    campousVideoPopUp.style.filter = "blur(0px)";
    videoPopupHeader.style.transform = "translateY(0px)";
    videoPopupHeader.style.transition = "all 0.8s ease 0.3s";
    videoPopupHeader.style.filter = "blur(0px)";
    videoBoxIframe.style.opacity = "1";
    videoBoxIframe.style.filter = "blur(0px)";
    videoBoxIframe.style.transition = "all 0.8s ease 1.5s";
    videoBox.style.boxShadow = "5px 5px 10px #29292962";
    videoBox.style.transition = "all 0.8s ease 1s";
    videoBoxClose.style.transform = "scale(1)";
    videoBoxClose.style.filter = "blur(0px)";
    videoBoxClose.style.opacity = "1";
    videoBoxClose.style.transition = "all 0.8s ease 2s";

});

videoBoxClose.addEventListener('click', () => {

    videoBoxIframe.style.opacity = "0";
    videoBoxIframe.style.filter = "blur(20px)";
    videoBoxIframe.style.transition = "all 0.8s ease";
    videoBox.style.boxShadow = "0px 0px 0px";
    videoBox.style.transition = "all 0.8s ease 0.2s";
    videoBoxClose.style.transform = "scale(0)";
    videoBoxClose.style.transition = "all 0.8s ease";
    videoBoxClose.style.filter = "blur(20px)";
    videoBoxClose.style.opacity = "0";
    videoPopupHeader.style.transform = "translateY(-300px)";
    videoPopupHeader.style.filter = "blur(50px)";
    videoPopupHeader.style.transition = "all 0.8s ease 0.8s";
    campousVideoPopUp.style.transform = "scale(0)";
    campousVideoPopUp.style.opacity = "0";
    campousVideoPopUp.style.filter = "blur(20px)";
    campousVideoPopUp.style.transition = "all 0.8s ease 1s";

});
