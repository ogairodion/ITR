import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';

const parent = document.querySelector('.projects');
const projectSlides = document.querySelectorAll('.projects__slide');
const slidesCountCurrent = parent.querySelector('.slider-navigation__numbers-current');
const sliderNavigation = parent.querySelector('.slider-navigation');
const slidesCount = parent.querySelector('.slider-navigation__numbers-all');
const buttonMore = parent.querySelector('.button-show-more');
const sliderWrapper = parent.querySelector('.projects__slider');

let visibleCount = 4;
let perGroup = 2;

slidesCount.innerText = projectSlides.length / visibleCount;

const projectsSlider = new Swiper('.projects__slider', {
    modules: [Navigation, Pagination, Grid],
    slidesPerView: 2,
    slidesPerGroup: perGroup,
    resistance: 0,
    resistanceRation: false,
    grid: {
        rows: 2,
    },
    navigation: {
        nextEl: '.projects .slider-navigation__arrow-next',
        prevEl: '.projects .slider-navigation__arrow-prev',
    },
});

if (projectSlides.length) {
    projectsSlider.on('slideChange', () => {
        slidesCountCurrent.innerText = (projectsSlider.activeIndex / perGroup) + 1;

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