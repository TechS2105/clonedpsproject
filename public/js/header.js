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

            secondMenuLi[i].style.fontSize = "18px";
            secondMenuLi[i].style.width = "18%";
            secondMenuLi[i].style.marginRight = "20px";

        }

        for (let i = 0; i < firstMenuLi.length; i++){

            firstMenuLi[i].style.fontSize = "18px";
            firstMenuLi[i].style.width = "18%";
            firstMenuLi[i].style.marginRight = "20px";

        }

        firstMenuLi[3].style.borderRight = "2px dotted green";
        firstMenuLi[3].style.transition = "all 0.8s ease";

        for (let i = 0; i < firstMenuLi.length; i++){

            let submenuboxes = firstMenuLi[i].querySelector('.submenu');

            firstMenuLi[i].addEventListener("mouseover", () => {

                if (submenuboxes) {
                    
                    submenuboxes.style.left = "-23%";
                    submenuboxes.style.top = "133%"

                }

            });

        }

        for (let i = 0; i < secondMenuLi.length; i++){

            let secondMenuSubMenuSectionBox = secondMenuLi[i].querySelector(".secondsubmenu");
            
            secondMenuLi[i].addEventListener("mouseover", () => {

                secondMenuSubMenuSectionBox.style.top = "133%";

            })

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

        for (let i = 0; i < firstMenuLi.length; i++){

            firstMenuLi[i].style.fontSize = "18px";
            firstMenuLi[i].style.transition = "all 1s ease";
            firstMenuLi[i].style.width = "20%";
            firstMenuLi[i].style.marginRight = "20px";
            firstMenuLi[i].style.transition = "all 0.8s ease";

        }

        firstMenuLi[3].style.borderRight = "none";
        firstMenuLi[3].style.transition = "all 0.8s ease";

        for (let i = 0; i < secondMenuLi.length; i++){

            secondMenuLi[i].style.fontSize = "18px";
            secondMenuLi[i].style.transition = "all 1s ease";
            secondMenuLi[i].style.width = "18%";
            secondMenuLi[i].style.marginRight = "20px";
            secondMenuLi[i].style.transition = "all 0.8s ease";

        }

        for (let i = 0; i < firstMenuLi.length; i++){

            let prevsubmenuboxes = firstMenuLi[i].querySelector('.submenu');

            firstMenuLi[i].addEventListener("mouseover", () => {

                if (prevsubmenuboxes) {
                    
                    prevsubmenuboxes.style.left = "7%";
                    prevsubmenuboxes.style.top = "100%";

                }

            })

        }

        for (let i = 0; i < secondMenuLi.length; i++){

            let secondMenuSubMenuSectionBoxScroll = secondMenuLi[i].querySelector(".secondsubmenu");

            secondMenuLi[i].addEventListener("mouseover", () => {

                if (secondMenuSubMenuSectionBoxScroll) {
                    
                    secondMenuSubMenuSectionBoxScroll.style.top = "100%";

                }

            })

        }

    }

});

let tableContent = document.querySelectorAll(".menucontenttable table tbody tr td a");
let tableContentIcon = document.querySelectorAll(".menucontenttable table tbody tr td a i");

for (let i = 0; i < tableContentIcon.length; i++){

    tableContentIcon[i].style.transform = "translateX(-10px) rotate(-90deg)";
    tableContentIcon[i].style.opacity = "0";

}

for (let i = 0; i < tableContent.length; i++){

    tableContent[i].addEventListener("mouseover", () => {

        tableContentIcon[i].style.transform = "translateX(-10px) rotate(45deg)";
        tableContentIcon[i].style.opacity = "1";
        tableContentIcon[i].style.transition = "all 0.8s ease";
        tableContent[i].style.color = "green";

    })

    tableContent[i].addEventListener("mouseout", () => {

        tableContentIcon[i].style.transform = "tanslateX(-10px) rotate(-90deg)";
        tableContentIcon[i].style.opacity = "0";
        tableContentIcon[i].style.marginRight = "0px";
        tableContentIcon[i].style.transition = "all 0.8s ease";
        tableContent[i].style.color = "#292929"

    })

}

let firstMenuItems = document.querySelectorAll(".firstmenu ul li");

for (let i = 0; i < firstMenuItems.length; i++){

    let defaultSubMenus = firstMenuItems[i].querySelector('.submenu');
    let defaultSubMenusImages = firstMenuItems[i].querySelector(".submenu .menuimg img");
    let prevSubMenuContactBox = firstMenuItems[i].querySelector(".submenu .menucontact .contactbox");
    let prevSubMenuContentHeading = firstMenuItems[i].querySelector(".submenu .menucontent .menucontentheading");
    let prevSubMenuTableSection = firstMenuItems[i].querySelector(".submenu .menucontent .menucontenttable");

    if (defaultSubMenus) {
        
        defaultSubMenus.style.opacity = "0";
        defaultSubMenus.style.transform = "scale(0)";
        defaultSubMenus.style.transition = "all 0.8s ease";

    }

    if(defaultSubMenusImages){

        defaultSubMenusImages.style.transform = "translateX(-1000px)";
        defaultSubMenusImages.style.opacity = "0";
        defaultSubMenusImages.style.filter = "blur(20px)"

    }

    if (prevSubMenuContactBox) {
        
        prevSubMenuContactBox.style.transform = "translateX(1000px)";
        prevSubMenuContactBox.style.opacity = "0";
        prevSubMenuContactBox.style.filter = "blur(20px)";

    }

    if(prevSubMenuContentHeading) {

        prevSubMenuContentHeading.style.transform = "translateY(-500px)";
        prevSubMenuContentHeading.style.opacity = "0";
        prevSubMenuContentHeading.style.filter = "blur(20px)";

    }

    if (prevSubMenuTableSection) {
        
        prevSubMenuTableSection.style.transform = "translateY(1000px)";
        prevSubMenuTableSection.style.opacity = "0";
        prevSubMenuTableSection.style.filter = "blur(20px)";

    }

}

for (let i = 0; i < firstMenuItems.length; i++){

    let subMenus = firstMenuItems[i].querySelector('.submenu');
    let subMenuImages = firstMenuItems[i].querySelector(".submenu .menuimg img");
    let subMenuContactBox = firstMenuItems[i].querySelector(".submenu .menucontact .contactbox")
    let subMenuContentHeading = firstMenuItems[i].querySelector(".submenu .menucontent .menucontentheading")
    let subMenuTableSection = firstMenuItems[i].querySelector('.submenu .menucontent .menucontenttable');
 
    firstMenuItems[i].addEventListener("mouseover", () => {

        if (subMenus) {
            
            subMenus.style.transform = "scale(1)";
            subMenus.style.opacity = "1";
            subMenus.style.transition = "all 0.8s ease";

        }

        if (subMenuImages) {
            
            subMenuImages.style.transform = "translateX(0px)";
            subMenuImages.style.opacity = "1";
            subMenuImages.style.transition = "all 1s ease";
            subMenuImages.style.filter = "blur(0px)";

        }

        if (subMenuContactBox) {
            
            subMenuContactBox.style.transform = "translateX(0px)";
            subMenuContactBox.style.transition = "all 1s ease";
            subMenuContactBox.style.filter = "blur(0px)";
            subMenuContactBox.style.opacity = "1";

        }

        if(subMenuContentHeading){

            subMenuContentHeading.style.transform = "translateY(0px)";
            subMenuContentHeading.style.transition = "all 1s ease 0.2s";
            subMenuContentHeading.style.opacity = "1";
            subMenuContentHeading.style.filter = "blur(0px)";

        }

        if (subMenuTableSection) {
            
            subMenuTableSection.style.transform = "translateY(0px)";
            subMenuTableSection.style.filter = "blur(0px)";
            subMenuTableSection.style.opacity = "1";
            subMenuTableSection.style.transition = "all 1s ease 0.4s";

        }


    });

    firstMenuItems[i].addEventListener('mouseout', () => {

        if (subMenus) {
            
            subMenus.style.transform = "scale(0)";
            subMenus.style.opacity = "0";
            subMenus.style.transition = "all 0.8s ease";

        }

        if (subMenuImages) {
            
            subMenuImages.style.transform = "translateX(-1000px)";
            subMenuImages.style.opacity = "0";
            subMenuImages.style.transition = "all 1s ease";
            subMenuImages.style.filter = "blur(20px)";

        }

        if (subMenuContactBox) {
            
            subMenuContactBox.style.transform = "translateX(1000px)";
            subMenuContactBox.style.transition = "all 1s ease";
            subMenuContactBox.style.filter = "blur(20px)";
            subMenuContactBox.style.opacity = "0";

        }

        if (subMenuContentHeading) {
            
            subMenuContentHeading.style.transform = "translateY(-500px)";
            subMenuContentHeading.style.opacity = "0";
            subMenuContentHeading.style.filter = "blur(20px)";
            subMenuContentHeading.style.transition = "all 1s ease 0.2s";

        }

        if(subMenuTableSection){

            subMenuTableSection.style.transform = "translateY(1000px)";
            subMenuTableSection.style.opacity = "0";
            subMenuTableSection.style.filter = "blur(20px)";
            subMenuTableSection.style.transition = "all 1s ease 0.4s";

        }

    })

}

/** Second Menu Box Sections */

let secondMenuItems = document.querySelectorAll(".secondmenu ul li");
let secondMenuSubMenuSectionBox = document.querySelectorAll(".secondsubmenu");

for (let i = 0; i < secondMenuItems.length; i++){

    let secondMenuSubMenuSectionBox = secondMenuItems[i].querySelector('.secondsubmenu');
    let secondSubMenuImageBox = secondMenuItems[i].querySelector('.secondsubmenu .secondsubmenuimgbox img');
    let secondSubMenuContactSection = secondMenuItems[i].querySelector('.secondsubmenuapplysection .contactbox');
    let secondSubMenuContactSectionHeading = secondMenuItems[i].querySelector('.secondsubmenucontent .secondsubmenucontentheading');
    let secondSubMenuTableSection = secondMenuItems[i].querySelector('.secondsubmenucontentlist .innermenuitem')

    if(secondMenuSubMenuSectionBox){

        secondMenuSubMenuSectionBox.style.transform = "scale(0)";
        secondMenuSubMenuSectionBox.style.opacity = "0";

    }

    if(secondSubMenuImageBox){

        secondSubMenuImageBox.style.transform = "translateX(-1000px)";
        secondSubMenuImageBox.style.opacity = "0";
        secondSubMenuImageBox.style.filter = "blur(20px)";

    }

    if (secondSubMenuContactSection) {
        
        secondSubMenuContactSection.style.transform = "translateX(1000px)";
        secondSubMenuContactSection.style.opacity = "0";
        secondSubMenuContactSection.style.filter = "blur(20px)";

    }

    if(secondSubMenuContactSectionHeading){

        secondSubMenuContactSectionHeading.style.transform = "translateY(-500px)";
        secondSubMenuContactSectionHeading.style.filter = "blur(20px)";
        secondSubMenuContactSectionHeading.style.opacity = "0";

    }

    if(secondSubMenuTableSection){

        secondSubMenuTableSection.style.transform = "translateY(1000px)";
        secondSubMenuTableSection.style.filter = "blur(20px)";
        secondSubMenuTableSection.style.opacity = "0";

    }

}

for (let i = 0; i < secondMenuItems.length; i++){

    let secondMenuBox = secondMenuItems[i].querySelector(".secondsubmenu");
    let secondSubMenuImgBox = secondMenuItems[i].querySelector(".secondsubmenu .secondsubmenuimgbox img");
    let secondSubMenuContactBox = secondMenuItems[i].querySelector(
      ".secondsubmenuapplysection .contactbox"
    );
    let secondSubMenuHeadingSection = secondMenuItems[i].querySelector('.secondsubmenucontent .secondsubmenucontentheading');
    let secondSubMenuTableSection = secondMenuItems[i].querySelector('.secondsubmenucontentlist .innermenuitem');

    secondMenuItems[i].addEventListener("mouseover", () => {

        if(secondMenuBox){

            secondMenuBox.style.transform = "scale(1)";
            secondMenuBox.style.opacity = "1";
            secondMenuBox.style.transition = "all 0.8s ease";

        }

        if(secondSubMenuImgBox){

            secondSubMenuImgBox.style.transform = "translateX(0px)";
            secondSubMenuImgBox.style.transition = "all 1s ease";
            secondSubMenuImgBox.style.opacity = "1";
            secondSubMenuImgBox.style.filter = "blur(0px)";

        }

        if (secondSubMenuContactBox) {
            
            secondSubMenuContactBox.style.transform = "translateX(0px)";
            secondSubMenuContactBox.style.transition = "all 1s ease";
            secondSubMenuContactBox.style.opacity = "1";
            secondSubMenuContactBox.style.filter = "blur(0px)";

        }

        if (secondSubMenuHeadingSection) {
            
            secondSubMenuHeadingSection.style.transform = "translateY(0px)";
            secondSubMenuHeadingSection.style.transition = "all 1s ease 0.2s";
            secondSubMenuHeadingSection.style.opacity = "1";
            secondSubMenuHeadingSection.style.filter = "blur(0px)";

        }

        if(secondSubMenuTableSection){

            secondSubMenuTableSection.style.transform = "translateY(0px)";
            secondSubMenuTableSection.style.transition = "all 1s ease 0.4s";
            secondSubMenuTableSection.style.opacity = "1";
            secondSubMenuTableSection.style.filter = "blur(0px)";

        }

    });

    secondMenuItems[i].addEventListener("mouseout", () => {

        if (secondMenuBox) {
            
            secondMenuBox.style.transform = "scale(0)";
            secondMenuBox.style.opacity = "0";
            secondMenuBox.style.transition = "all 0.8s ease";

        }

        if (secondSubMenuImgBox) {
            
            secondSubMenuImgBox.style.transform = "translateX(-1000px)";
            secondSubMenuImgBox.style.opacity = "0";
            secondSubMenuImgBox.style.filter = "blur(20px)";
            secondSubMenuImgBox.style.transition = "all 1s ease";

        }

        if (secondSubMenuContactBox) {
            
            secondSubMenuContactBox.style.transform = "translateX(1000px)";
            secondSubMenuContactBox.style.opacity = "0";
            secondSubMenuContactBox.style.filter = "blur(20px)";
            secondSubMenuContactBox.style.transition = "all 1s ease";

        }

        if (secondSubMenuHeadingSection) {
            
            secondSubMenuHeadingSection.style.transform = "translateY(-500px)";
            secondSubMenuHeadingSection.style.transition = "all 1s ease 0.4s";
            secondSubMenuHeadingSection.style.opacity = "0";
            secondSubMenuHeadingSection.style.filter = "blur(20px)"

        }

        if (secondSubMenuTableSection) {
            
            secondSubMenuTableSection.style.transform = "translateY(1000px)";
            secondSubMenuTableSection.style.transition = "all 1s ease";
            secondSubMenuTableSection.style.filter = "blur(20px)";
            secondSubMenuTableSection.style.opacity = "0";

        }

    });

}

let seachIcon = document.querySelector(".socialicons ul li #p04");
let searchBoxBack = document.querySelector(".searchboxback");
let searchMainBox = document.querySelector(".searchboxback .searchbox");
let searchNavigation = document.querySelector(".seachnvigation i");

searchBoxBack.style.transform = "translateX(100%)";
searchBoxBack.style.opacity = "0";
searchMainBox.style.transform = "translateX(100%)";
searchMainBox.style.opacity = "0";

seachIcon.addEventListener("click", () => {

    searchBoxBack.style.transform = "translateX(0%)";
    searchBoxBack.style.transition = "all 0.8s ease";
    searchBoxBack.style.opacity = "1";
    searchMainBox.style.transform = "translateX(0%)";
    searchMainBox.style.transition = "all 0.8s ease 0.2s";
    searchMainBox.style.opacity = "1";

});

searchNavigation.addEventListener("click", () => {

    searchBoxBack.style.transform = "translateX(100%)";
    searchBoxBack.style.transition = "all 0.8s ease 0.2s";
    searchBoxBack.style.opacity = "0";
    searchMainBox.style.transform = "translateX(100%)";
    searchMainBox.style.transition = "all 0.8s ease";
    searchMainBox.style.opacity = "0";

})