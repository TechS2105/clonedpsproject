let socialContainer = document.querySelector(".socialiconsection");
let collegeLogo = document.querySelector(".collegelogo a img");
let collegeSubLogo = document.querySelector(".collegesublogo");
let headerSection = document.querySelector("header");
let menuSection = document.querySelector(".menusection");
let firstMenu = document.querySelector(".menusection .firstmenu");
let firstMenuLi = document.querySelectorAll(".menusection .firstmenu ul li");
let firstMenuUl = document.querySelector('.menusection .firstmenu ul');
let secondMenu = document.querySelector(".menusection .secondmenu");
let secondMenuUl = document.querySelector(".menusection .secondmenu ul");
let secondMenuLi = document.querySelectorAll(".menusection .secondmenu ul li");

collegeSubLogo.style.transform = "translateX(-2000px)";
collegeSubLogo.style.opacity = "0";

window.addEventListener('scroll', () => {

    if (window.scrollY > 400) {
        
        socialContainer.style.transform = "translateY(-1000px)";
        socialContainer.style.transition = "all 2s ease";

        collegeLogo.style.transform = "translateY(-1000px) translate(-50%)";
        collegeLogo.style.transition = 'all 2s ease 0.1s';
        collegeLogo.style.position = "fixed";

        collegeSubLogo.style.transform = "translateX(0px)";
        collegeSubLogo.style.transition = "all 1.8s ease";
        collegeSubLogo.style.opacity = "0.8";

        headerSection.style.height = '6rem';
        headerSection.style.transition = "all 0.8s ease";

        menuSection.style.marginTop = "-20px";
        firstMenu.style.position = "absolute";
        firstMenu.style.left = "15%";
        firstMenu.style.transition = "all 1.8s ease 0.2s";

        secondMenuUl.style.paddingRight = "20px";
        secondMenuUl.style.transition = "all 1s ease";
        
        for (let i = 0; i < secondMenuLi.length; i++){

            secondMenuLi[i].style.fontSize = "15px";

        }

        for (let i = 0; i < firstMenuLi.length; i++){

            firstMenuLi[i].style.fontSize = "15px";

        }


    } else {
        
        socialContainer.style.transform = "translateY(0px)";
        socialContainer.style.transition = "all 1s ease 0.1s";

        collegeLogo.style.transform = "translateY(0px) translate(-50%)";
        collegeLogo.style.transition = 'all 1s ease';
        collegeLogo.style.position = "fixed";

        collegeSubLogo.style.transform = "translateX(-2000px)";
        collegeSubLogo.style.transition = "all 0.8s ease";
        collegeSubLogo.style.opacity = "0";

        headerSection.style.height = "10rem";
        headerSection.style.transition = "all 0.8s ease";

        menuSection.style.marginTop = "0px";
        menuSection.style.transition = "all 1s ease";

        firstMenu.style.position = 'absolute';
        firstMenu.style.left = "0";
        firstMenu.style.transition = "all 1s ease";

        secondMenuUl.style.paddingRight = "50px";
        secondMenuUl.style.transition = "all 1s ease";

        for (let i = 0; i < firstMenuLi.length; i++){

            firstMenuLi[i].style.fontSize = "15px";
            firstMenuLi[i].style.transition = "all 1s ease";

        }

        for (let i = 0; i < secondMenuLi.length; i++){

            secondMenuLi[i].style.fontSize = "15px";
            secondMenuLi[i].style.transition = "all 1s ease";

        }

    }

});