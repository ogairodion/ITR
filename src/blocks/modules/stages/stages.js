import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';

const parent = document.querySelector('.stages');
const stagesSlides = document.querySelectorAll('.stages__slide');
const sliderNavigation = parent.querySelector('.slider-navigation');
const slidesCountCurrent = parent.querySelector('.slider-navigation__numbers-current');
const slidesCount = parent.querySelector('.slider-navigation__numbers-all');
const buttonMore = parent.querySelector('.button-show-more');
const sliderWrapper = parent.querySelector('.stages__slider');
const stagesSteps = parent.querySelectorAll('.stages__step');

let visibleCount = 3;

const stagesSlider = new Swiper('.stages__slider', {
    modules: [Navigation, Pagination, Grid],
    slidesPerView: 1,
    spaceBetween: 16,
    resistance: 0,
    resistanceRation: false,
    speed: 1200,
    grid: {
        rows: 3,
    },
    navigation: {
        nextEl: '.stages .slider-navigation__arrow-next',
        prevEl: '.stages .slider-navigation__arrow-prev',
    },
});

const slideFirstHeight = stagesSlider.slides[0].clientHeight;
const slideLastHeight = stagesSlider.slides[stagesSlider.slides.length - 1].clientHeight + slideFirstHeight;

if (stagesSteps.length && stagesSlides.length) {
    getStepPosition(0);
}

slidesCount.innerText = stagesSlides.length / visibleCount;

if (stagesSlides.length) {
    let firstStep = 1;

    stagesSlider.on('slideChange', () => {
        const page = stagesSlider.realIndex + 1;

        if (stagesSlider.previousIndex < stagesSlider.realIndex) {
            firstStep += 3;
        } else {
            firstStep -= 3;
        }

        slidesCountCurrent.innerText = page;

        if (!buttonMore.classList.contains('hidden')) {
            buttonMore.classList.add('hidden');
        }

        stagesSteps[0].innerText = `Шаг ${firstStep >= 10 ? firstStep : `0${firstStep}`}`;
        stagesSteps[1].innerText = `Шаг ${firstStep + 1 >= 10 ? firstStep + 1 : `0${firstStep + 1}`}`;
        stagesSteps[2].innerText = `Шаг ${firstStep + 2 >= 10 ? firstStep + 2 : `0${firstStep + 2}`}`;

        getStepPosition(firstStep);
    });

    buttonMore.addEventListener('click', () => {
        let swiperWrapper = parent.querySelector('.swiper-wrapper');
        showMore(swiperWrapper);
    });
}


function getStepPosition(number) {
    let count = number === 1 ? 0 : number;

    stagesSteps.forEach((step, index) => {
        step.style.left = `${(count / stagesSlides.length) * 100}%`;
        step.style.transform = `translateX(-${(count / stagesSlides.length) * 100}%)`;

        if (index === 1) {
            step.style.top = `${slideFirstHeight - (step.clientHeight / 2)}px`;
        }
    
        if (index === 2) {
            step.style.top = `${slideLastHeight - (step.clientHeight / 2)}px`;
        }

        count++;
    });
}


function showMore(swiperWrapper) {
    visibleCount += 4;
    const steps = document.querySelectorAll('.stages__slide-step');

    stagesSlides.forEach((stagesSlide, index) => {
        if (swiperWrapper) {
            sliderNavigation.classList.add('hidden');
            sliderWrapper.classList.remove('swiper', 'swiper-initialized', 'swiper-horizontal', 'swiper-grid', 'swiper-grid-column');
            
            stagesSlide.classList.remove('swiper-slide', 'swiper-slide-active', 'swiper-slide-next', 'swiper-slide-prev');
            stagesSlide.removeAttribute('style');
            sliderWrapper.classList.add('not-slider');
            
            sliderWrapper.append(stagesSlide);
            swiperWrapper.remove();
        }

        if (visibleCount <= stagesSlides.length) {
            if (index >= visibleCount) {
                stagesSlide.classList.add('hidden');
            } else {
                stagesSlide.classList.remove('hidden');
            }
        }

        hideButton();
    });

    stagesSteps.forEach((step) => {
        step.remove();
    });

    for(let i = 0; i < visibleCount; i++) {
        const count = i + 1 === 1 ? 0 : i + 1;
        
        steps[i].classList.remove('hidden');

        steps[i].style.left = `${(count / stagesSlides.length) * 100}%`;
        steps[i].style.transform = `translateX(-${(count / stagesSlides.length) * 100}%)`;
    }
}

function hideButton() {
    if (visibleCount >= stagesSlides.length) {
        buttonMore.classList.add('hidden');
    }
}


