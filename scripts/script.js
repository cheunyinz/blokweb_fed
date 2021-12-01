// JavaScript Document

const openMenuBtn = document.querySelector("header nav>button")
const closeMenuBtn= document.querySelector ("header>nav>section:last-of-type>button")
const navMenu = document.querySelector('header nav>section:last-of-type')

function toggleMenu() {
    navMenu.classList.toggle('openMenu')
    console.log ("test")
}

openMenuBtn.addEventListener ('click', toggleMenu)
closeMenuBtn.addEventListener ('click', toggleMenu)