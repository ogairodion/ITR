import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';

const parent = document.querySelector('.cases');
const casesSliders = document.querySelectorAll('.cases__item');
const slidesCountCurrent = parent.querySelector('.slider-navigation__numbers-current');
const slidesCount = parent.querySelector('.slider-navigation__numbers-all');

let visibleCount = 4;
let perGroup = 2;

const casesSlider = new Swiper('.cases__items', {
    modules: [Navigation, Pagination, Grid],
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 16,
    resistance: 0,
    resistanceRation: false,
    grid: {
        rows: 2,
    },
    navigation: {
        nextEl: '.cases .slider-navigation__arrow-next',
        prevEl: '.cases .slider-navigation__arrow-prev',
    },
});

slidesCount.innerText = casesSliders.length / visibleCount;

casesSlider.on('slideChange', () => {
    slidesCountCurrent.innerText = (casesSlider.activeIndex / perGroup) + 1;
});
