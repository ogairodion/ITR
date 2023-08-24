import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

const parent = document.querySelector('.documents');
const sliders = parent.querySelectorAll('.swiper');

const documentsSlider = new Swiper('.documents__slider', {
    modules: [Autoplay],
    slidesPerView: 'auto',
    resistance: 0,
    resistanceRation: false,
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
        reverseDirection: true,
        pauseOnMouseEnter: true,
    },
});

const documentsSliderReverse = new Swiper('.documents__slider--reverse', {
    modules: [Autoplay],
    slidesPerView: 'auto',
    resistance: 0,
    resistanceRation: false,
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
});


if (documentsSlider) {
    sliders.forEach((slider) => {
        slider.addEventListener('mouseenter', () => {
            if (slider.classList.contains('documents__slider')) {
                documentsSlider.autoplay.stop();
            } else {
                documentsSliderReverse.autoplay.stop();
            }
        });
    });
}