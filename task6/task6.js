let bttns = document.querySelectorAll(".bttn");
let buttonContainer = document.querySelector(".button_container");
for(let i=0; i<bttns.length;i++){
    console.log(bttns[i])
    bttns[i].addEventListener("click", ()=>{
    buttonContainer.style.backgroundColor = bttns[i].innerHTML;
    })
}