import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const parent = document.querySelector('.cost');
const costSlides = document.querySelectorAll('.cost__slide');
const sliderNavigation = parent.querySelector('.slider-navigation');
const slidesCountCurrent = parent.querySelector('.slider-navigation__numbers-current');
const slidesCount = parent.querySelector('.slider-navigation__numbers-all');
const buttonMore = parent.querySelector('.button-show-more');
const sliderWrapper = parent.querySelector('.cost__slider');

let visibleCount = 4;
let perGroup = 4;
let windowWidth = 0;

windowWidth = window.innerWidth
adaptiveCost(windowWidth);

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth

    adaptiveCost(windowWidth);
});

const costSlider = new Swiper('.cost__slider', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    resistance: 0,
    allowTouchMove: false,
    resistanceRation: false,
    speed: 1500,
    breakpoints: {
        768: {
            slidesPerView: 3,
            slidesPerGroup: perGroup,
            allowTouchMove: true,
        },
        992: {
            slidesPerView: 4,
            slidesPerGroup: perGroup,
        }
    },
    navigation: {
        nextEl: '.cost .slider-navigation__arrow-next',
        prevEl: '.cost .slider-navigation__arrow-prev',
    },
});

slidesCount.innerText = costSlides.length / visibleCount;

if (costSlides.length) {
    costSlider.on('slideChange', () => {
        slidesCountCurrent.innerText = (costSlider.activeIndex / perGroup) + 1;

        if (!buttonMore.classList.contains('hidden')) {
            buttonMore.classList.add('hidden');
        }
    });

    buttonMore.addEventListener('click', () => {
        let swiperWrapper = parent.querySelector('.swiper-wrapper');
        showMore(swiperWrapper);
    });
}


costSlides.forEach((costSlide) => {
    const button = costSlide.querySelector('.cost__slide-button');
    const video = costSlide.querySelector('video');

    button.addEventListener('click', () => {
        costSlide.classList.toggle('show');
    });

    costSlide.addEventListener('mouseenter', () => {
        if (video) {
            video.play();
        }
    });

    costSlide.addEventListener('mouseleave', () => {
        if (video) {
            video.pause();
        }
    });
});

function showMore(swiperWrapper) {
    visibleCount += 4;

    costSlides.forEach((costSlide, index) => {
        if (swiperWrapper) {
            sliderNavigation.classList.add('hidden');
            sliderWrapper.classList.remove('swiper', 'swiper-initialized', 'swiper-horizontal', 'swiper-grid', 'swiper-grid-column');
            
            costSlide.classList.remove('swiper-slide', 'swiper-slide-active', 'swiper-slide-next', 'swiper-slide-prev');
            costSlide.removeAttribute('style');
            sliderWrapper.classList.add('not-slider');
            
            sliderWrapper.append(costSlide);
            swiperWrapper.remove();
        }

        if (visibleCount <= costSlides.length) {
            if (index >= visibleCount) {
                costSlide.classList.add('hidden');
            } else {
                costSlide.classList.remove('hidden');
            }
        }

        hideButton();
    });
}

function hideButton() {
    if (visibleCount >= costSlides.length) {
        buttonMore.classList.add('hidden');
    }
}

function adaptiveCost(width) {
    switch(true) {
        case width > 768 && width < 992:
            perGroup = 3;
            break;
        case width > 768 && width > 992:
            perGroup = 4;
            break;
        default: 
            perGroup = 1;
            break;
    }
}