let pgnwiSectionBoxes = document.querySelectorAll(".pgnwisection .pgnwibox");

for (let i = 0; i < pgnwiSectionBoxes.length; i++){
    
    let pgnwiBox = pgnwiSectionBoxes[i].querySelector("img");

    pgnwiSectionBoxes[i].addEventListener("mouseover", () => {

        if (pgnwiBox) {
            
            pgnwiBox.style.transform = "scale(1.5) rotateY(360deg)";
            pgnwiBox.style.transition = "all 1s ease";

        }

    });

    pgnwiSectionBoxes[i].addEventListener("mouseout", () => {

        if (pgnwiBox) {
            
            pgnwiBox.style.transform = "scale(1)";
            pgnwiBox.style.transition = "all 1s ease";

        }

    })

}