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

slidesCount.innerText = teamSlides.length / visibleCount;

const teamSlider = new Swiper('.team__slider', {
    modules: [Navigation, Pagination, Grid],
    slidesPerView: 4,
    slidesPerGroup: 2,
    resistance: 0,
    resistanceRation: false,
    grid: {
        rows: 2,
    },
    navigation: {
        nextEl: '.team .slider-navigation__arrow-next',
        prevEl: '.team .slider-navigation__arrow-prev',
    },
});

if (teamSlides.length) {
    teamSlider.on('slideChange', () => {
        slidesCountCurrent.innerText = teamSlider.realIndex + 1;

        if (!buttonMore.classList.contains('hidden')) {
            buttonMore.classList.add('hidden');
        }
    });

    buttonMore.addEventListener('click', () => {
        let swiperWrapper = parent.querySelector('.swiper-wrapper');
        showMore(swiperWrapper);
    });
}


function showMore(swiperWrapper) {
    visibleCount += 4;

    teamSlides.forEach((teamlide, index) => {
        if (swiperWrapper) {
            sliderNavigation.classList.add('hidden');
            sliderWrapper.classList.remove('swiper', 'swiper-initialized', 'swiper-horizontal', 'swiper-grid', 'swiper-grid-column');
            
            teamlide.classList.remove('swiper-slide', 'swiper-slide-active', 'swiper-slide-next', 'swiper-slide-prev');
            teamlide.removeAttribute('style');
            sliderWrapper.classList.add('not-slider');
            
            sliderWrapper.append(teamlide);
            swiperWrapper.remove();
        }

        if (visibleCount <= teamSlides.length) {
            if (index >= visibleCount) {
                teamlide.classList.add('hidden');
            } else {
                teamlide.classList.remove('hidden');
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