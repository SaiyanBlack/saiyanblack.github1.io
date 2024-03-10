const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const iconBars = document.querySelector('.icon-bars');
const iconClose = document.querySelector('.icon-close');

function displayMenu () {
    if (menu.classList.contains('tampil')) {
        menu.classList.remove('tampil');
    } else {
        menu.classList.add('tampil');
    }
}