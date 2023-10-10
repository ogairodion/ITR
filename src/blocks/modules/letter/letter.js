import Swiper from 'swiper';
import { Navigation, Thumbs, EffectFade } from 'swiper/modules';

const parent = document.querySelector('.letter');
const lettertSlides = document.querySelectorAll('.letter__thumb');
const slidesCountCurrent = parent.querySelector('.slider-navigation__numbers-current');
const slidesCount = parent.querySelector('.slider-navigation__numbers-all');
const slidesCountCurrentMain = parent.querySelector('.slider-navigation__numbers-current--main');
const slidesCountMain = parent.querySelector('.slider-navigation__numbers-all--main');

slidesCount.innerHTML = lettertSlides.length;
slidesCountMain.innerHTML = lettertSlides.length;

const letterSlider = new Swiper('.letter__slider', {
    modules: [EffectFade, Navigation],
    effect: 'fade',
    slidesPerView: 1,
    resistance: 0,
    resistanceRation: false,
    allowTouchMove: false,
    speed: 800,
    navigation: {
        nextEl: '.letter .slider-navigation__arrow-next--main',
        prevEl: '.letter .slider-navigation__arrow-prev--main',
    },
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

if (letterSlider) {
    letterSlider.on('slideChange', () => {
        slidesCountCurrentMain.innerText = letterSlider.realIndex + 1;
    });
}