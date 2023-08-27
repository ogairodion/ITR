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

document.addEventListener('mouseover', (e) => {
    const menuClosest = e.target.closest('.menu__btn-wrapper');
    const menuServicesClosest = e.target.closest('.menu-services');

    if (menuServicesClosest || menuClosest) {
        menuServices.classList.add('open');
    } else {
        menuServices.classList.remove('open');
    }
});

headerContactsButton.addEventListener('click', () => {
    headerContacts.classList.toggle('open');
})