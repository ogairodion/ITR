import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const servicesSlider = new Swiper('.services__slider', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 15,
    speed: 1500,
    navigation: {
        nextEl: '.services .slider-navigation__arrow-next',
        prevEl: '.services .slider-navigation__arrow-prev',
    },
    pagination: {
        el: '.services__pagination',
        type: 'progressbar',
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    resistance: true,
    resistanceRatio: 0,
    breakpoints: {
        992: {
            slidesPerView: 'auto',
            slidesPerGroup: 3,
            spaceBetween: 0,
        },
    },
});

const parent = document.querySelector('.services');
const slides = parent.querySelectorAll('.swiper-slide');
const currentSlide = parent.querySelector('.slider-navigation__numbers-current');
const numberSlides = parent.querySelector('.slider-navigation__numbers-all');
const progress = parent.querySelector('.services__slider-progress');

progress.innerText = `1 / ${slides.length}`;

numberSlides.innerText = slides.length;

if (slides.length) {
    slides.forEach((slide, index) => {
        const slideIndex = slide.querySelector('.services__slide-number');
        const slidesCount = slide.querySelector('.services__slide-count');

        slideIndex.innerText = index + 1 < 10 ? `0${index + 1}` : index + 1;
        slidesCount.innerText = slides.length < 10 ? `0${slidesCount.length}` : slides.length;
    });
}

if (servicesSlider) {
    servicesSlider.on('slideChange', () => {
        currentSlide.innerText = `${servicesSlider.activeIndex + 1}-${servicesSlider.activeIndex + 3}`;

        progress.innerText = `${servicesSlider.activeIndex + 1} / ${slides.length}`;
    });
}