let applyNowButton = document.createElement('div');
let addButtonClass = applyNowButton.classList.add('applyButton');
let body = document.querySelector('body');

body.prepend(applyNowButton);

applyNowButton.innerHTML = "Apply Now";