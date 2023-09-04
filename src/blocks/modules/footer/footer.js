import { gsap } from "gsap";

const footer = document.querySelector('.footer');
const menuItems = footer.querySelectorAll('.footer__menu-item');
const footerMenu = footer.querySelector('.footer__menu');
const footerTop = footer.querySelector('.footer__top-wrapper');
const footerLogo = footer.querySelector('.footer__logo');
const footerBottom = footer.querySelector('.footer__bottom');
const footerBottomContainer = footerBottom.querySelector('.l-default');

const menuFooter = footer.querySelector('.footer__menu');
const footerMenuBtn = footer.querySelector('.footer__menu-btn');

let windowWidth = 0;

windowWidth = window.innerWidth;

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth
    adaptiveLogo(windowWidth);
});

adaptiveLogo(windowWidth);

footerMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    footerMenuBtn.classList.toggle('open');
    menuFooter.classList.toggle('open');
}

if (menuItems.length) {
    const columnLength = 2;
    const count = menuItems.length / 2;
    const columns = [];

    for (let i = 0; i < columnLength; i++) {
        const column = document.createElement('div');
        
        column.classList.add('footer__menu-column');
        footerMenu.appendChild(column);
        columns.push(column);
    }

    menuItems.forEach((menuItem, index) => {
        if (index < count) {
            columns[0].appendChild(menuItem);
        } else {
            columns[1].appendChild(menuItem);
        }
    });
}  

function adaptiveLogo(width) {
    switch (true) {
        case width <= 992 && footerBottomContainer.contains(footerLogo):
            footerTop.append(footerLogo)
            break;
        case width > 992 && footerTop.contains(footerLogo):
            footerBottomContainer.append(footerLogo)
            break;
    }
}