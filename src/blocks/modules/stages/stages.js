import Swiper from 'swiper';
import { Navigation, Pagination, Grid, Autoplay } from 'swiper/modules';

const parent = document.querySelector('.stages');
const stagesSlides = document.querySelectorAll('.stages__slide');
const sliderNavigation = parent.querySelector('.slider-navigation');
const slidesCountCurrent = parent.querySelector('.slider-navigation__numbers-current');
const slidesCount = parent.querySelector('.slider-navigation__numbers-all');
const buttonMore = parent.querySelector('.button-show-more');
const sliderWrapper = parent.querySelector('.stages__slider');
const stagesSteps = parent.querySelectorAll('.stages__step');

let visibleCount = 5;
let progressBarWidth = 301.44;
let windowWidth = 0;

windowWidth = window.innerWidth;

adaptiveStages(windowWidth);

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth

    adaptiveStages(windowWidth);
    
    slidesCount.innerText = windowWidth < 992 ? stagesSlides.length : stagesSlides.length / visibleCount;
});

const stagesSlider = new Swiper('.stages__slider', {
    modules: [Navigation, Pagination, Grid, Autoplay],
    slidesPerView: 1,
    spaceBetween: 16,
    resistance: 0,
    resistanceRation: false,
    speed: 1500,
    breakpoints: {
        992: {
            grid: {
                rows: 3,
            },
        },
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

slidesCount.innerText = windowWidth < 992 ? stagesSlides.length : stagesSlides.length / visibleCount;

if (stagesSlides.length) {
    let firstStep = 1;

    stagesSlider.slides[0].querySelector('.progress-bar').style.strokeDashoffset = `${progressBarWidth * ((100 - (1 / stagesSlides.length) * 100) / 100)}px`;

    stagesSlider.on('slideChange', () => {
        const page = stagesSlider.realIndex + 1;
        const currentSlide = stagesSlides[stagesSlider.realIndex];
        const progressBar = currentSlide.querySelector('.progress-bar');
        const progressBarStep = progressBarWidth * ((100 - ((stagesSlider.realIndex + 1) / stagesSlides.length) * 100) / 100);

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
        
        progressBar.style.strokeDashoffset = `${progressBarStep}px`;

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
        step.style.transform = `translateX(-${(count / (stagesSlides.length)) * 100}%)`;

        if (index === 1) {
            step.style.top = `${slideFirstHeight - ((step.offsetHeight / 2) - 24)}px`;
        }
    
        if (index === 2) {
            step.style.top = `${slideLastHeight - ((step.offsetHeight / 2) - 24)}px`;
        }

        count++;
    });
}


function showMore(swiperWrapper) {
    visibleCount += 5;
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

        if (index >= visibleCount) {
            stagesSlide.classList.add('hidden');
        } else {
            stagesSlide.classList.remove('hidden');
        }

        hideButton();
    });

    stagesSteps.forEach((step) => {
        step.remove();
    });

    for(let i = 0; i < visibleCount; i++) {
        const count = i + 1 === 1 ? 1 : i + 1;
        const current = steps[i].querySelector('.stages__slide-step--current');
        
        steps[i].classList.remove('hidden');

        if (windowWidth >= 992) {
            current.innerText = `${count >= 10 ? `Шаг ${count}` : `Шаг 0${count}`}`;
        } else {
            current.innerText = `${count >= 10 ? `Шаг ${count} из ${stagesSlides.length}` : `Шаг 0${count} из ${stagesSlides.length}`}`;
        }
        

        steps[i].style.left = `${(count / stagesSlides.length) * 100}%`;
        steps[i].style.transform = `translateX(-${(count / stagesSlides.length) * 100}%)`;
    }
}

function hideButton() {
    if (visibleCount >= stagesSlides.length) {
        buttonMore.classList.add('hidden');
    }
}

function adaptiveStages(width) {
    stagesSlides.forEach((stageSlide) => {
        const step = stageSlide.querySelector('.stages__slide-step');
    
        if (width >= 992) {
            step.classList.add('hidden');
        } else {
            step.classList.remove('hidden');
        }
    });
}


