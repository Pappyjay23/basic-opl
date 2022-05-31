let menuBar = document.querySelector(".menu__bar")
let navLinks = document.querySelector(".nav__links")

menuBar.addEventListener("click", ()=>{
    menuBar.classList.toggle("change")
    navLinks.classList.toggle("active")
})