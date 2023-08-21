import { Swiper, Navigation, Pagination, EffectFade } from 'swiper';

Swiper.use([EffectFade, Navigation, Pagination]);

const parent = document.querySelector('.main-top');
const slides = parent.querySelectorAll('.swiper-slide');
const numberSlides = document.querySelector('.main-top .slider-navigation__numbers-all');
const currentSlide = document.querySelector('.main-top .slider-navigation__numbers-current');

numberSlides.innerText = slides.length;

const mainTopSlider = new Swiper('.main-top__slider', {
    slidesPerView: 1,
    effect: 'fade',
    navigation: {
        nextEl: '.main-top .slider-navigation__arrow-next',
        prevEl: '.main-top .slider-navigation__arrow-prev',
    },
    pagination: {
        el: '.main-top__pagination',
        type: 'progressbar',
    },
});

if (mainTopSlider) {
    mainTopSlider.on('slideChange', () => {
        currentSlide.innerText = mainTopSlider.activeIndex + 1;
    });
}