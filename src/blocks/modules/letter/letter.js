import Swiper from 'swiper';
import { Navigation, Thumbs, EffectFade } from 'swiper/modules';

const parent = document.querySelector('.letter');
const lettertSlides = document.querySelectorAll('.letter__thumb');
const slidesCountCurrent = parent.querySelector('.slider-navigation__numbers-current');
const slidesCount = parent.querySelector('.slider-navigation__numbers-all');

slidesCount.innerHTML = lettertSlides.length;

const letterSlider = new Swiper('.letter__slider', {
    modules: [EffectFade],
    effect: 'fade',
    slidesPerView: 1,
    resistance: 0,
    resistanceRation: false,
    allowTouchMove: false,
    speed: 800,
});

const letterThumbs = new Swiper('.letter__thumbs', {
    modules: [Navigation, Thumbs],
    slidesPerView: 'auto',
    spaceBetween: 9,
    loop: true,
    resistance: 0,
    resistanceRation: false,
    speed: 800,
    thumbs: {
        swiper: letterSlider,
    },
    navigation: {
        nextEl: '.letter .slider-navigation__arrow-next',
        prevEl: '.letter .slider-navigation__arrow-prev',
    },
});

if (letterThumbs) {
    letterThumbs.on('slideChange', () => {
        slidesCountCurrent.innerText = letterThumbs.realIndex + 1;
    });
}