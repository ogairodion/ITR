import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';

const parent = document.querySelector('.stages');
const stagesSlides = document.querySelectorAll('.stages__slide');
const sliderNavigation = parent.querySelector('.slider-navigation');
const slidesCountCurrent = parent.querySelector('.slider-navigation__numbers-current');
const slidesCount = parent.querySelector('.slider-navigation__numbers-all');
const buttonMore = parent.querySelector('.button-show-more');
const sliderWrapper = parent.querySelector('.stages__slider');

let visibleCount = 3;

const stagesSlider = new Swiper('.stages__slider', {
    modules: [Navigation, Pagination, Grid],
    slidesPerView: 1,
    spaceBetween: 16,
    resistance: 0,
    resistanceRation: false,
    speed: 1200,
    grid: {
        rows: 3,
    },
    navigation: {
        nextEl: '.stages .slider-navigation__arrow-next',
        prevEl: '.stages .slider-navigation__arrow-prev',
    },
});

slidesCount.innerText = stagesSlides.length / visibleCount;

if (stagesSlides.length) {
    stagesSlider.on('slideChange', () => {
        slidesCountCurrent.innerText = stagesSlider.realIndex + 1;

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

    stagesSlides.forEach((stagesSlide, index) => {
        if (swiperWrapper) {
            sliderNavigation.classList.add('hidden');
            sliderWrapper.classList.remove('swiper', 'swiper-initialized', 'swiper-horizontal', 'swiper-grid', 'swiper-grid-column');
            
            stagesSlide.classList.remove('swiper-slide', 'swiper-slide-active', 'swiper-slide-next', 'swiper-slide-prev');
            stagesSlide.removeAttribute('style');
            sliderWrapper.classList.add('not-slider');
            
            sliderWrapper.append(stagesSlide);
            swiperWrapper.remove();
        }

        if (visibleCount <= stagesSlides.length) {
            if (index >= visibleCount) {
                stagesSlide.classList.add('hidden');
            } else {
                stagesSlide.classList.remove('hidden');
            }
        }

        hideButton();
    });
}

function hideButton() {
    if (visibleCount >= stagesSlides.length) {
        buttonMore.classList.add('hidden');
    }
}


