import { Swiper } from 'swiper';
import { EffectFade, Autoplay } from 'swiper/modules';

const parent = document.querySelector('.about');
const slides = document.querySelectorAll('.about__slide');
const circles = parent.querySelectorAll('.progress');

let windowWidth = 0;
windowWidth = window.innerWidth

circlesRadius(windowWidth)

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth

    circlesRadius(windowWidth)
});

function circlesRadius(windowWidth) {
    circles.forEach((circle) => {
        const r = circle.getAttribute('r');
        switch(true) {
            case windowWidth > 992 && r !== '62': 
                circle.setAttribute('r', '62');
            break;
            case windowWidth < 992 && r !== '38.5': 
                circle.setAttribute('r', '38.5');
            break;
        }
    });
}

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
    observer: true,
    observeParents: true,
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

        slides[aboutSliderHeader.activeIndex].classList.add('swiper-slide-active');
        
        circles[aboutSliderHeader.activeIndex].classList.add('active');
        circles[aboutSliderHeader.previousIndex].classList.remove('active');

        slides.forEach((slide, index) => {
            if (index !== aboutSliderHeader.activeIndex) {
                slide.classList.remove('swiper-slide-active');
            }
        });

    })
}