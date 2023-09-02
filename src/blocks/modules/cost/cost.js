import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';

const parent = document.querySelector('.cost');
const costSlides = document.querySelectorAll('.cost__slide');
const sliderNavigation = parent.querySelector('.slider-navigation');
const slidesCountCurrent = parent.querySelector('.slider-navigation__numbers-current');
const slidesCount = parent.querySelector('.slider-navigation__numbers-all');
const buttonMore = parent.querySelector('.button-show-more');
const sliderWrapper = parent.querySelector('.cost__slider');

let visibleCount = 4;
let perGroup = 4;

const costSlider = new Swiper('.cost__slider', {
    modules: [Navigation, Pagination],
    slidesPerView: 4,
    slidesPerGroup: perGroup,
    resistance: 0,
    resistanceRation: false,
    speed: 1200,
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