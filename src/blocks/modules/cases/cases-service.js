import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';

const parent = document.querySelector('.cases');
const casesSliders = document.querySelectorAll('.cases__item');
const slidesCountCurrent = parent.querySelector('.slider-navigation__numbers-current');
const slidesCount = parent.querySelector('.slider-navigation__numbers-all');

let windowWidth = 0;
let visibleCount = 4;
let perGroup = 2;

windowWidth = window.innerWidth

slidesCount.innerText = windowWidth < 992 ? casesSliders.length: Math.ceil(casesSliders.length / visibleCount);

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;

    slidesCount.innerText = windowWidth < 992 ? casesSliders.length: Math.ceil(casesSliders.length / visibleCount);
    slidesCountCurrent.innerText = windowWidth < 992 ? casesSlider.activeIndex + 1 : Math.ceil((casesSlider.activeIndex / perGroup) + 1);
});

const casesSlider = new Swiper('.cases__items', {
    modules: [Navigation, Pagination, Grid],
    slidesPerView: 1,
    spaceBetween: 16,
    resistance: 0,
    resistanceRation: false,
    speed: 1200,
    navigation: {
        nextEl: '.cases .slider-navigation__arrow-next',
        prevEl: '.cases .slider-navigation__arrow-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: {
                rows: 2,
            },
        }
    },
});

casesSlider.on('slideChange', () => {
    slidesCountCurrent.innerText = windowWidth < 992 ? casesSlider.activeIndex + 1 : Math.ceil((casesSlider.activeIndex / perGroup) + 1);
});
