import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';

const parent = document.querySelector('.team');
const teamSlides = document.querySelectorAll('.team__slide');
const slidesCountCurrent = parent.querySelector('.slider-navigation__numbers-current');
const sliderNavigation = parent.querySelector('.slider-navigation');
const slidesCount = parent.querySelector('.slider-navigation__numbers-all');
const buttonMore = parent.querySelector('.button-show-more');
const sliderWrapper = parent.querySelector('.team__slider');

let visibleCount = 4;
let perGroup = 2;
let windowWidth = 0;

windowWidth = window.innerWidth;
adaptiveTeam(windowWidth);

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth
    adaptiveTeam(windowWidth);
});


slidesCount.innerText = Math.ceil(teamSlides.length / visibleCount);

const teamSlider = new Swiper('.team__slider', {
    modules: [Navigation, Pagination, Grid],
    slidesPerView: 2,
    slidesPerGroup: perGroup,
    resistance: 0,
    allowTouchMove: false,
    resistanceRation: false,
    speed: 1200,
    navigation: {
        nextEl: '.team .slider-navigation__arrow-next',
        prevEl: '.team .slider-navigation__arrow-prev',
    },
    breakpoints: {
        1200: {
            allowTouchMove: true,
            slidesPerView: 4,
            grid: {
                rows: 2,
            },
        }
    },
});

if (teamSlides.length) {
    teamSlider.on('slideChange', () => {
        slidesCountCurrent.innerText = Math.ceil((teamSlider.activeIndex / perGroup) + 1);

        if (!buttonMore.classList.contains('hidden')) {
            buttonMore.classList.add('hidden');
        }
    });

    buttonMore.addEventListener('click', () => {
        let swiperWrapper = parent.querySelector('.swiper-wrapper');
        showMore(swiperWrapper);
    });
}

function adaptiveTeam(width) {
    if (width < 1200) {
        teamSlides.forEach((teamSlide, index) => {
            if (index >= visibleCount) {
                teamSlide.classList.add('hidden');
            }
        });
    } else {
        teamSlides.forEach((teamSlide) => {
            teamSlide.classList.remove('hidden');
        });
    }
}

function showMore(swiperWrapper) {
    visibleCount += 4;

    teamSlides.forEach((teamSlide, index) => {
        if (swiperWrapper) {
            sliderNavigation.classList.add('hidden');
            sliderWrapper.classList.remove('swiper', 'swiper-initialized', 'swiper-horizontal', 'swiper-grid', 'swiper-grid-column');
            
            teamSlide.classList.remove('swiper-slide', 'swiper-slide-active', 'swiper-slide-next', 'swiper-slide-prev');
            teamSlide.removeAttribute('style');
            sliderWrapper.classList.add('not-slider');
            
            sliderWrapper.append(teamSlide);
            swiperWrapper.remove();
        }

        if (visibleCount <= teamSlides.length) {
            if (index >= visibleCount) {
                teamSlide.classList.add('hidden');
            } else {
                teamSlide.classList.remove('hidden');
            }
        }

        hideButton();
    });
}

function hideButton() {
    if (visibleCount >= teamSlides.length) {
        buttonMore.classList.add('hidden');
    }
}