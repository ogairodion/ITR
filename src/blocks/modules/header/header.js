import { gsap } from "gsap";

const header = document.querySelector('.header');
const headerContacts = header.querySelector('.contacts-header');
const headerContactsButton = header.querySelector('.menu__btn--contact');
const headerMenuButton = header.querySelector('.menu__btn--services');
const menuServices = header.querySelector('.menu-services');

let scrollTop = window.scrollY;

window.addEventListener('scroll', () => {
    scrollTop = window.scrollY;

    if (scrollTop > header.offsetHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});

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

headerContactsButton.addEventListener('click', toggleContacts)
headerMenuButton.addEventListener('click', toggleMenu)

function toggleContacts() {
    header.classList.toggle('open');
    headerContacts.classList.toggle('open');

    tl_contacts.reversed() ? tl_contacts.play() : tl_contacts.reverse();
}

function toggleMenu() {
    menuServices.classList.toggle('open');

    tl_menu.reversed() ? tl_menu.play() : tl_menu.reverse();
}

addEventListener("DOMContentLoaded", () => {
    header.classList.add('show');
});