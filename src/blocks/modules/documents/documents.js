import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

const documentsSlider = new Swiper('.documents__slider', {
    modules: [Autoplay],
    slidesPerView: 'auto',
    loop: true,
    speed: 2000,
});

const documentsSliderReverse = new Swiper('.documents__slider--reverse', {
    modules: [Autoplay],
    slidesPerView: 'auto',
    loop: true,
    speed: 2000,
});