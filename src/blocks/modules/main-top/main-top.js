import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import $ from 'jquery';

const parent = document.querySelector('.main-top');
const slides = parent.querySelectorAll('.swiper-slide');
const numberSlides = document.querySelector('.main-top .slider-navigation__numbers-all');
const currentSlide = document.querySelector('.main-top .slider-navigation__numbers-current');
const buttonDown = document.querySelector('.main-top__bottom-arrow');
const sections = document.querySelectorAll('section');

numberSlides.innerText = slides.length;

const mainTopSlider = new Swiper('.main-top__slider', {
    modules: [Navigation, Pagination, EffectFade],
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

buttonDown.addEventListener('click', () => {
    $('html, body').animate({
        scrollTop: $(sections[1]).offset().top
    },'slow');
});