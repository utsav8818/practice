let onBttn = document.getElementById("on_bttn");
let offBttn = document.getElementById("off_bttn");
let mainContainer = document.querySelector(".main_container");

onBttn.addEventListener("click", ()=>{
    onBttn.style.display="none";
    offBttn.style.display="inline";
    mainContainer.style.backgroundColor="red";

})
offBttn.addEventListener("click", ()=>{
    offBttn.style.display="none";
    onBttn.style.display="inline";
    mainContainer.style.backgroundColor="white";
})