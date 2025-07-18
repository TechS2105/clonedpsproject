let campusBox = document.querySelectorAll(".campusimagebox");

for (let i = 0; i < campusBox.length; i++) {
  // Hide the icon initially
  let icon = campusBox[i].querySelector("i");
  let text = campusBox[i].querySelector("p");
  if (icon) icon.style.transform = "scale(0)";

  campusBox[i].addEventListener("mouseover", () => {
    if (icon) {
      icon.style.transform = "scale(1) translate(-50%, 40%)";
      icon.style.transition = "all 0.8s ease 0.2s";
    }
    if (text) {
      text.style.transform = "translateY(-10px) translate(-50%)";
      text.style.transition = "all 0.8s ease";
      text.style.textShadow = "-5px 10px 10px #292929";
    }
  });

  campusBox[i].addEventListener("mouseout", () => {
    if (icon) {
      icon.style.transform = "scale(0) translate(-50%, 40%)";
      icon.style.transition = "all 0.8s ease 0s";
    }
    if (text) {
      text.style.transform = "translateY(0px) translate(-50%)";
      text.style.transition = "all 0.8s ease";
      text.style.textShadow = "2px 2px 2px #292929";
    }
  });
}
