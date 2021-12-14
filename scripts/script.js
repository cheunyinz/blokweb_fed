// JavaScript Document

const openMenuBtn = document.querySelector("header nav>button")
const closeMenuBtn= document.querySelector ("header>nav>section:last-of-type>button")
const navMenu = document.querySelector('header nav>section:last-of-type')

function toggleMenu() {
    navMenu.classList.toggle('openMenu');
    if (navMenu.classList.contains('openMenu')) {
        navMenu.classList.remove('closed ') 
    } else {
        navMenu.classList.add('closed')
    }
}

openMenuBtn.addEventListener ('click', toggleMenu)
closeMenuBtn.addEventListener ('click', toggleMenu)