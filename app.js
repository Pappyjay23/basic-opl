let menuBar = document.querySelector(".menu__bar")
let navLinks = document.querySelector(".nav__links")
let navbar = document.querySelector(".navbar")
let navMenuLinks = document.querySelectorAll(".nav__link")

// Mobile Menu Bar
menuBar.addEventListener("click", ()=>{
    menuBar.classList.toggle("change")
    navLinks.classList.toggle("active")
})

// Close Menu Bar on Nav Link Click
navMenuLinks.forEach((link) =>{
    link.addEventListener("click", ()=>{
        navLinks.classList.remove("active")
        menuBar.classList.toggle("change")
    })
})

// Smooth scroll to pages
window.addEventListener("scroll", ()=>{
    const pageHeight = window.scrollY
    if(pageHeight > 150){
        navbar.classList.add("fixed")
    }else if(pageHeight < 150){
        navbar.classList.remove("fixed")
    }
})