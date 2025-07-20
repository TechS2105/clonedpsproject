let campusVideo = document.querySelector(".campusvideosection img");
let campousVideoPopUp = document.querySelector('.campusvideopopup');
let videoPopupHeader = document.querySelector(".videoheader");
let videoBox = document.querySelector(".videobox");
let videoBoxIframe = document.querySelector(".videobox iframe");
let videoBoxClose = document.querySelector(".videobox i");
let newsEventImageBox = document.querySelector(".newseventimage");
let newsEventImage = document.querySelector(".newseventimage img");
let newsEventImageClose = document.querySelector(".newseventimage i");
let firstNewseventBox = document.querySelectorAll(".newsandeventbox img");

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
newsEventImageBox.style.transform = "translateY(-1000px)";
newsEventImageBox.style.opacity = "0";
newsEventImageBox.style.filter = "blur(0px)";
newsEventImage.style.transform = "translateY(5000px)";
newsEventImage.style.opacity = "0";
newsEventImage.style.filter = "blur(0px)";


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

firstNewseventBox[0].addEventListener('click', () => {

    newsEventImageBox.style.transform = "translateY(0px)";
    newsEventImageBox.style.transition = "all 1s ease";
    newsEventImageBox.style.filter = "blur(0px)";
    newsEventImageBox.style.opacity = "1";
    newsEventImage.style.transform = "translateY(0px)";
    newsEventImage.style.transition = "all 1s ease";
    newsEventImage.style.filter = "blur(0px)";
    newsEventImage.style.opacity = "1";

});

newsEventImageClose.addEventListener('click', () => {

    newsEventImageBox.style.transform = "translateY(-1000px)";
    newsEventImageBox.style.transition = "all 2s ease";
    newsEventImageBox.style.opacity = "0";
    newsEventImageBox.style.filter = "blur(50px)";
    newsEventImage.style.transform = "translateY(5000px)";
    newsEventImage.style.transition = "all 2s ease";
    newsEventImage.style.filter = "blur(50px)";
    newsEventImage.style.opacity = "0";

});