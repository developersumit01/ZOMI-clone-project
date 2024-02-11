let navicon=document.querySelector(".nav-icon");
let menuMobile=document.querySelector(".menu-mobile");
let upperDiv=document.querySelector(".upper-div");
let body=document.querySelector("body");
// console.log(navicon);
navicon.addEventListener("click",()=>{
    menuMobile.classList.toggle("display-unset")
    upperDiv.classList.toggle("display-unset")
    body.classList.toggle("body")
});