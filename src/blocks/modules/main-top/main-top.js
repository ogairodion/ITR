import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import $ from 'jquery';

const parent = document.querySelector('.main-top');
const slides = parent.querySelectorAll('.swiper-slide');
const numberSlides = document.querySelector('.main-top .slider-navigation__numbers-all');
const currentSlide = document.querySelector('.main-top .slider-navigation__numbers-current');
const buttonDown = document.querySelector('.main-top__bottom-arrow');
const sections = document.querySelectorAll('section');
const lines = parent.querySelectorAll('.lines__item');
const header = document.querySelector('.header');

const animationItems = parent.querySelectorAll('.js-animation-main-item')
const mobilePagination = parent.querySelector('.pagination-bordered');

numberSlides.innerText = slides.length;

const mainTopSlider = new Swiper('.main-top__slider', {
    modules: [Navigation, Pagination, EffectFade, Autoplay],
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 1500,
    navigation: {
        nextEl: '.main-top .slider-navigation__arrow-next',
        prevEl: '.main-top .slider-navigation__arrow-prev',
    },
    pagination: {
        el: '.main-top__pagination',
        type: 'progressbar',
    },
    breakpoints: {
        767: {
            autoplay: false,
        },
    },
});

if (mainTopSlider) {
    slides.forEach(() => {
        const bullet = document.createElement('div');
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const circleProgress = document.createElementNS('http://www.w3.org/2000/svg', "circle");

        svg.setAttributeNS(null, 'width', '100%');
        svg.setAttributeNS(null, 'height', '100%');
        svg.setAttributeNS(null, 'viewbox', '50 50 100 100');

        circleProgress.classList.add('pagination-bordered-circle--progress');

        circleProgress.setAttribute('fill', 'transparent');
        circleProgress.setAttribute('stroke-width', '2px');
        circleProgress.setAttribute('stroke-offset', '2px');
        circleProgress.setAttribute('cx', '50%');
        circleProgress.setAttribute('cy', '50%');
        circleProgress.setAttribute('r', '8');

        bullet.appendChild(svg);
        svg.appendChild(circleProgress);

        bullet.classList.add('pagination-bordered-bullet');
        mobilePagination.append(bullet);
    });

    mainTopSlider.on('slideChange', () => {
        const circles = parent.querySelectorAll('.pagination-bordered-circle--progress');

        currentSlide.innerText = mainTopSlider.activeIndex + 1;
        
        circles[mainTopSlider.activeIndex].classList.add('active');
        circles[mainTopSlider.previousIndex].classList.remove('active');
    });
}

window.onload = () => {
    const paginations = document.querySelectorAll('.pagination-bordered-bullet');

    if (animationItems.length) {
        let animationCounter = 500;
    
        animationItems.forEach((animationItem) => {
            setTimeout(() => {
                animationItem.classList.add('js-animation-main-item-active');
            }, animationCounter);
    
            animationCounter += 300;
        })
        
        lines.forEach((line) => {
            line.classList.add('lines__item-active');
        });
    }

    if (paginations.length) {
        paginations.forEach((pagination, index) => {
            pagination.addEventListener('click', () => {
                mainTopSlider.slideTo(index);
            });
        });
    }
    
    header.classList.add('show');
};


buttonDown.addEventListener('click', () => {
    $('html, body').animate({
        scrollTop: $(sections[1]).offset().top
    },'slow');
});