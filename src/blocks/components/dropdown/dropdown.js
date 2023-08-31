import { gsap } from "gsap";

const dropdowns = document.querySelectorAll('.dropdown');

if (dropdowns.length) {
    dropdowns.forEach((dropdown) => {
        const dropdownArrow = dropdown.querySelector('.dropdown-top__arrow');

        dropdownArrow.addEventListener('click', () => {
            dropdown.classList.toggle('open');
        });
    });
}