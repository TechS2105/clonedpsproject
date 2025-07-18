let missionBox = document.querySelectorAll(".missionsection .missionbox");

for (let i = 0; i < missionBox.length; i++){

    let missionIcon = missionBox[i].querySelector('i');
    let missionText = missionBox[i].querySelector('p');
        
    missionBox[i].addEventListener("mouseover", () => {

        if (missionIcon) {
            
            missionIcon.style.transform = "scale(1.3)";
            missionIcon.style.transition = "all 0.8s ease";
            missionIcon.style.color = "#fff";

        }

        if(missionText){

            missionText.style.transition = "all 0.8s ease";
            missionText.style.color = "#fff";

        }

    });

    missionBox[i].addEventListener("mouseout", () => {

        if (missionIcon) {
            
            missionIcon.style.transform = "scale(1)";
            missionIcon.style.transition = "all 0.8s ease";
            missionIcon.style.color = "green";

        }

        if(missionText){

            missionText.style.transition = "all 0.8s ease";
            missionText.style.color = "#292929";

        }

    })

}