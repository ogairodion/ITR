import Swiper from 'swiper';
import { Navigation, Pagination, Grid, Autoplay } from 'swiper/modules';

const parent = document.querySelector('.projects');
const projectSlides = document.querySelectorAll('.projects__slide');
const slidesCountCurrent = parent.querySelector('.slider-navigation__numbers-current');
const sliderNavigation = parent.querySelector('.slider-navigation');
const slidesCount = parent.querySelector('.slider-navigation__numbers-all');
const buttonMore = parent.querySelector('.button-show-more');
const sliderWrapper = parent.querySelector('.projects__slider');

const mobilePagination = parent.querySelector('.pagination-bordered');

let visibleCount = 4;
let perGroup = 2;

slidesCount.innerText = Math.ceil(projectSlides.length / visibleCount);

const projectsSlider = new Swiper('.projects__slider', {
    modules: [Navigation, Pagination, Grid, Autoplay],
    slidesPerView: 1,
    resistance: 0,
    resistanceRation: false,
    speed: 1200,
    autoplay: 1000,
    navigation: {
        nextEl: '.projects .slider-navigation__arrow-next',
        prevEl: '.projects .slider-navigation__arrow-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            slidesPerGroup: perGroup,
            autoplay: false,
            grid: {
                rows: 2,
            },
        },
    },
});

if (projectSlides.length) {
    projectsSlider.on('slideChange', () => {
        slidesCountCurrent.innerText = Math.ceil((projectsSlider.activeIndex / perGroup) + 1);

        if (!buttonMore.classList.contains('hidden')) {
            buttonMore.classList.add('hidden');
        }
    });

    buttonMore.addEventListener('click', () => {
        let swiperWrapper = parent.querySelector('.swiper-wrapper');
        showMore(swiperWrapper);
    });

    projectSlides.forEach(() => {
        const bullet = document.createElement('div');
        bullet.classList.add('pagination-bordered-bullet');

        mobilePagination.append(bullet);
    });
}


function showMore(swiperWrapper) {
    visibleCount += 4;

    projectSlides.forEach((projectSlide, index) => {
        if (swiperWrapper) {
            sliderNavigation.classList.add('hidden');
            sliderWrapper.classList.remove('swiper', 'swiper-initialized', 'swiper-horizontal', 'swiper-grid', 'swiper-grid-column');
            
            projectSlide.classList.remove('swiper-slide', 'swiper-slide-active', 'swiper-slide-next', 'swiper-slide-prev');
            projectSlide.removeAttribute('style');
            sliderWrapper.classList.add('not-slider');
            
            sliderWrapper.append(projectSlide);
            swiperWrapper.remove();
        }

        if (visibleCount <= projectSlides.length) {
            if (index >= visibleCount) {
                projectSlide.classList.add('hidden');
            } else {
                projectSlide.classList.remove('hidden');
            }
        }

        hideButton();
    });
}

function hideButton() {
    if (visibleCount >= projectSlides.length) {
        buttonMore.classList.add('hidden');
    }
}

addEventListener("DOMContentLoaded", () => {
    const paginations = document.querySelectorAll('.pagination-bordered-bullet');

    if (paginations.length) {
        paginations.forEach((pagination, index) => {
            pagination.addEventListener('click', () => {
                projectsSlider.slideTo(index);
            });
        });
    }
});