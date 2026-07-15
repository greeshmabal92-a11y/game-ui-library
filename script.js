const popup = document.getElementById("popup");

const openPopup = document.getElementById("openPopup");

const closePopup = document.getElementById("closePopup");
const yesBtn = document.getElementById("yesBtn");

openPopup.addEventListener("click", function(){

    popup.style.display = "flex";

});

closePopup.addEventListener("click", function(){

    popup.style.display = "none";

});
yesBtn.addEventListener("click", () => {
    popup.style.display = "none";
    alert("Action Confirmed");
});