let html = document.querySelector(".title1");
let css = document.querySelector(".title2");
let javaScript = document.querySelector(".title3");
let htmlParagraph = document.querySelector(".html_container");
let cssParagraph = document.querySelector(".css_container");
let jsParagraph = document.querySelector(".js_container");

html.addEventListener("click",() =>{
    htmlParagraph.style.display = "inline";
    cssParagraph.style.display = "none";
    jsParagraph.style.display = "none";
    
})

css.addEventListener("click",() =>{
    console.log(htmlParagraph)
    htmlParagraph.style.display = "none";
    cssParagraph.style.display = "inline";
    jsParagraph.style.display = "none";
    
})

javaScript.addEventListener("click",() =>{
    htmlParagraph.style.display = "none";
    cssParagraph.style.display = "none";
    jsParagraph.style.display = "inline";
    
})