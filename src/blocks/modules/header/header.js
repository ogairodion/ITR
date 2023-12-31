import { gsap } from "gsap";
// eslint-disable-next-line no-unused-vars
import fancybox from "@fancyapps/fancybox"

const header = document.querySelector('.header');
const headerContacts = header.querySelector('.contacts-header');
const headerContactsButton = header.querySelector('.menu__btn--contact');
const headerMenuButton = header.querySelector('.menu__btn--services');
const menuServices = header.querySelector('.menu-services');
const burger = header.querySelector('.header__burger');
const menu = header.querySelector('.menu');
const mobile = header.querySelector('.header__mobile');
const mobileMenu = header.querySelector('.header__mobile-menu');
const mobileWrapper = header.querySelector('.header__mobile-wrapper');
const contacts = header.querySelector('.header__contacts');
const headerWrapper = header.querySelector('.header__wrapper');

let windowWidth = 0;
let scrollTop = window.scrollY;
let animations = document.querySelectorAll('.js-animation-up');

windowWidth = window.innerWidth;

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth
    adaptiveMenu(windowWidth);
});

window.onload = () => {
    header.classList.add('show');
}

if (animations.length > 0) {
    animOfScroll();

    function animOfScroll() {
        for (let index = 0; index < animations.length; index++) {
            const animItem = animations[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('js-animation-up-show');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    window.onscroll = () => {
        animOfScroll();
    };

    animOfScroll();
}

burger.addEventListener('click', () => {
    if (windowWidth < 992) {
        adaptiveMenu(windowWidth);
        header.classList.toggle('open');
    }
});

window.addEventListener('scroll', () => {
    scrollTop = window.scrollY;

    if (scrollTop > header.offsetHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});

adaptiveMenu(windowWidth);

const tl_contacts = gsap
    .timeline({ reversed: true, paused: true })
    .from('.js-header-contacts', {
        height: 0,
        duration: 0.4,
        opacity: 0,
    })
    .to('.js-header-contacts', {
        height: 'auto',
        duration: 0.4,
        opacity: 1,
    })

const tl_menu = gsap
    .timeline({ reversed: true, paused: true })
    .from(menuServices, {
        height: 0,
        duration: 0.4,
        ease: "sine.out",
    })
    .to(menuServices, {
        height: 'auto',
        duration: 0.4,
        ease: "sine.out",
    })

headerContactsButton.addEventListener('click', toggleContacts);
headerMenuButton.addEventListener('click', toggleMenu);

function toggleContacts() {
    header.classList.toggle('open');
    headerContacts.classList.toggle('open');
    headerMenuButton.classList.toggle('open');

    tl_contacts.reversed() ? tl_contacts.play() : tl_contacts.reverse();
}

function toggleMenu() {
    menuServices.classList.toggle('open');
    headerMenuButton.classList.toggle('open');

    tl_menu.reversed() ? tl_menu.play() : tl_menu.reverse();
}

function adaptiveMenu(width) {
    switch (true) {
        case width <= 991 && headerWrapper.contains(contacts):
            mobileMenu.append(menu)
            mobileWrapper.append(contacts)        
            break;
        case width > 991 && mobile.contains(contacts):
            headerWrapper.append(menu)
            headerWrapper.append(contacts)
            header.classList.remove('open');
            break;
    }
}