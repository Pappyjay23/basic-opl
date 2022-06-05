let menuBar = document.querySelector(".menu__bar")
let navLinks = document.querySelector(".nav__links")
let navbar = document.querySelector(".navbar")
let navMenuLinks = document.querySelectorAll(".nav__link")

menuBar.addEventListener("click", ()=>{
    menuBar.classList.toggle("change")
    navLinks.classList.toggle("active")
})

navMenuLinks.forEach((link) =>{
    link.addEventListener("click", ()=>{
        navLinks.classList.remove("active")
        menuBar.classList.toggle("change")
    })
})

window.addEventListener("scroll", ()=>{
    const pageHeight = window.scrollY
    if(pageHeight > 150){
        navbar.classList.add("fixed")
    }else if(pageHeight < 150){
        navbar.classList.remove("fixed")
    }
})