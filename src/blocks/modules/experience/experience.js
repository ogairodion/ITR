const parent = document.querySelector('.experience');
const numbers = document.querySelectorAll('.experience__item-number');

let windowWidth = 0;
windowWidth = window.innerWidth

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
});

window.addEventListener('scroll', () => {
    if (window.scrollY == parent.offsetTop) {
        animationNumbers();
    }
});

function animationNumbers() {
    numbers.forEach((number) => {
        const numberText = number.querySelector('.number');
        const numberChars = numberText.innerHTML.split('');
        const setOfNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', 'х'];
        const numbersArray = [];

        let htmlElement = ``;

        numberText.dataset.number = numberText.innerText;

        numberText.innerHTML = '';

        setOfNumbers.forEach((value) => {
            htmlElement += `<span>${value}</span><br />`;
        });

        for (let i = 0; i < numberChars.length; i++) {
            const numbersWrapper = document.createElement('span');
            numbersWrapper.classList.add('numbers-wrapper');
    
            if (numberChars[i] !== ' ') {
                numbersWrapper.innerHTML = htmlElement;

                numbersWrapper.style.transform = `translateY(${-Math.floor(100 + Math.random() * (1200 + 1 - 100))}px)`;
                numbersWrapper.style.transition = `transform 4s ease-in-out`;
            } else {
                numbersWrapper.innerHTML = `<span>&nbsp;</span>`;
            }
            
            numbersArray.push(numberChars[i]);
            numberText.append(numbersWrapper);
        }

        const wrappers = number.querySelectorAll('.numbers-wrapper');
        const wrapperHeight = wrappers[0].offsetHeight;

        for (let i = 0; i < wrappers.length; i++) {
            const spans = wrappers[i].querySelectorAll('span');

            for (let j = 0; j < spans.length; j++) {
                if (spans[j].innerText === numberChars[i]) {
                    wrappers[i].style.transform = `translateY(${-(wrapperHeight * j)}px)`;
                }
            }
        }

        setTimeout(() => {
            clearAnimations();
        }, 5000);
    });
}

function clearAnimations() {
    const numbers = document.querySelectorAll('.number');

    if (numbers.length) {
        numbers.forEach((number) => {
        const wrappers = number.querySelectorAll('.numbers-wrapper');
        const numberChars = number.dataset.number.split('');

        for (let i = 0; i < wrappers.length; i++) {
            const spans = wrappers[i].querySelectorAll('span');
            const brs = wrappers[i].querySelectorAll('br');

            brs.forEach((br) => {
                br.remove();
            });

            spans.forEach((span) => {
                const spanText = span.innerText;
                
                if (spanText !== numberChars[i] && numberChars[i] !== ' ') {
                    span.remove();
                }
            });

            wrappers[i].style.transition = '';
            wrappers[i].style.transform = '';
        }
    });
    }
}