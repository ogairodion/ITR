import { Swiper } from 'swiper';
import { EffectFade, Autoplay } from 'swiper/modules';

const parent = document.querySelector('.about');

const aboutSliderHeader = new Swiper('.about__slider-header', {
    modules: [EffectFade, Autoplay],
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    allowTouchMove : false,
    speed: 1500,
});

const aboutSliderPosition = new Swiper('.about__slider-position', {
    modules: [EffectFade, Autoplay],
    slidesPerView: 1,
    spaceBetween: 16,
    observeSlideChildren: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    allowTouchMove : false,
});

const aboutSliderMain = new Swiper('.about__slider-main', {
    modules: [EffectFade, Autoplay],
    slidesPerView: 3,
    spaceBetween: 16,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    allowTouchMove : false,
    watchSlidesProgress: true,
});

if (aboutSliderHeader) {
    aboutSliderHeader.on('slideChange', () => {
        const circles = parent.querySelectorAll('.progress');

        aboutSliderPosition.slideTo(aboutSliderHeader.activeIndex);

        circles[aboutSliderHeader.activeIndex].classList.add('active');
        circles[aboutSliderHeader.previousIndex].classList.remove('active');
    })
}