const BUTTON = document.querySelector("button");
const TSUIKA = document.querySelector(".tsuika");

BUTTON.addEventListener("click" , ()=>{
    TSUIKA.classList.toggle("active")
    if(TSUIKA.classList.contains("active")){
        BUTTON.textContent = "折りたたむ";
    }else{
        BUTTON.textContent = "もっと読む";
    }
})