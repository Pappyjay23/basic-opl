let menuBar = document.querySelector(".menu__bar")
let navLinks = document.querySelector(".nav__links")
let navbar = document.querySelector(".navbar")

menuBar.addEventListener("click", ()=>{
    menuBar.classList.toggle("change")
    navLinks.classList.toggle("active")
})
window.addEventListener("scroll", ()=>{
    const pageHeight = window.scrollY
    if(pageHeight > 150){
        navbar.classList.add("fixed")
    }else if(pageHeight < 150){
        navbar.classList.remove("fixed")
    }
})