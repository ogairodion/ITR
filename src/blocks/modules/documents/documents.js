import { Swiper } from 'swiper';
import { Autoplay } from 'swiper/modules';

const documentsSlides = document.querySelectorAll('.documents__slide');

const documentSlider = new Swiper('.documents__slider', {
    modules: [Autoplay],
    slidesPerView: 2,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    speed: 1000,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 6,
        },
    },
});

const documentSliderReverse = new Swiper('.documents__slider--reverse', {
    modules: [Autoplay],
    slidesPerView: 2,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    speed: 1000,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 6,
        },
    },
});

if (documentsSlides.length) {
    documentsSlides.forEach((slide) => {
        slide.addEventListener('mouseenter', () => {
            documentSliderReverse.autoplay.stop();
            documentSlider.autoplay.stop();
        })

        slide.addEventListener('mouseleave', () => {
            documentSliderReverse.autoplay.start();
            documentSlider.autoplay.start();
        })
    });
}