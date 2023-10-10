const parent = document.querySelector('.about');
const slides = document.querySelectorAll('.about__slide');
const positionSlides = document.querySelectorAll('.about__position-slide');
const titleSlides = document.querySelectorAll('.about__title');
const circles = parent.querySelectorAll('.progress');
const max = slides.length;

let count = 0;

slides[0].classList.add('active');
positionSlides[0].classList.add('active');
titleSlides[0].classList.add('active');
circles[0].classList.add('active');

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

setInterval(() => {
    if (count >= max - 1) {
        count = 0;
    } else {
        count++;
    }
    acitveSlide(count); 
}, 3000);

function acitveSlide(count) {
    slides.forEach((slide, index) => {
        if (index !== count) {
            slide.classList.remove('active');
        } else {
            slide.classList.add('active');
        }
    });

    positionSlides.forEach((slide, index) => {
        if (index !== count) {
            slide.classList.remove('active');
        } else {
            slide.classList.add('active');
        }
    });

    titleSlides.forEach((slide, index) => {
        if (index !== count) {
            slide.classList.remove('active');
        } else {
            slide.classList.add('active');
        }
    });

    circles.forEach((slide, index) => {
        if (index !== count) {
            slide.classList.remove('active');
        } else {
            slide.classList.add('active');
        }
    });
}