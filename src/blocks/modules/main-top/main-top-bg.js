const parent = document.querySelector('.main-top-bg');
const animationItems = parent.querySelectorAll('.js-animation-main-item')

addEventListener("DOMContentLoaded", () => {
    if (animationItems.length) {
        let animationCounter = 500;
    
        animationItems.forEach((animationItem) => {
            setTimeout(() => {
                animationItem.classList.add('js-animation-main-item-active');
            }, animationCounter);
    
            animationCounter += 300;
        })
    }
});