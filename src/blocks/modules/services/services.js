import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const servicesSlider = new Swiper('.services__slider', {
    modules: [Navigation, Pagination],
    slidesPerView: 3,
    slidesPerGroup: 3,
    navigation: {
        nextEl: '.services .slider-navigation__arrow-next',
        prevEl: '.services .slider-navigation__arrow-prev',
    },
    pagination: {
        el: '.services__pagination',
        type: 'progressbar',
    },
    resistance: true,
    resistanceRatio: 0,
});

const parent = document.querySelector('.services');
const slides = parent.querySelectorAll('.swiper-slide');
const currentSlide = parent.querySelector('.slider-navigation__numbers-current');
const numberSlides = parent.querySelector('.slider-navigation__numbers-all');

numberSlides.innerText = slides.length;

if (slides.length) {
    slides.forEach((slide, index) => {
        const slideIndex = slide.querySelector('.services__slide-number');
        const slidesCount = slide.querySelector('.services__slide-count');

        slideIndex.innerText = index + 1;
        slidesCount.innerText = slides.length;
    });
}

if (servicesSlider) {
    servicesSlider.on('slideChange', () => {
        currentSlide.innerText = `${servicesSlider.activeIndex + 1}-${servicesSlider.activeIndex + 3}`;
    });
}