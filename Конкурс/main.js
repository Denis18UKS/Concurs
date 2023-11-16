// script.js

const modal = document.getElementById("modal");
const showModalButton = document.getElementById("showModalButton");
const close = document.getElementsByClassName("close")[0];

showModalButton.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}