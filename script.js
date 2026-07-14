const popup = document.getElementById("popup");

const openPopup = document.getElementById("openPopup");

const closePopup = document.getElementById("closePopup");

openPopup.addEventListener("click", function(){

    popup.style.display = "flex";

});

closePopup.addEventListener("click", function(){

    popup.style.display = "none";

});