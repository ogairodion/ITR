const parent = document.querySelector('.instruments');
const instrumentsItems = parent.querySelectorAll('.instruments__item');
const instrumentsInfo = parent.querySelector('.instruments__info');
const instrumentsButton = parent.querySelector('.button--more');

let windowWidth = 0;
let visibleCount = 1;

windowWidth = window.innerWidth

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;

    adaptiveInstruments(windowWidth);
});

adaptiveInstruments(windowWidth);

instrumentsButton.addEventListener('click', () => {
    showMore();
});

if (instrumentsItems.length) {
    let countTop = 60;

    instrumentsItems.forEach((instrumentsItem, index) => {
        const count = instrumentsItem.querySelector('.instruments__item-count');

        instrumentsItem.style.top = `${countTop += 20}px`;
        count.innerText = `${index + 1} — ${instrumentsItems.length}`;
    });
}

function adaptiveInstruments(width) {
    if (width < 992) {
        instrumentsItems.forEach((instrumentsItem, index) => {
            instrumentsItem.classList.remove('js-instruments-sticky-card');

            if (index > 1 && !instrumentsButton.classList.contains('hidden')) {
                instrumentsItem.classList.add('hidden');
            }
        });

        instrumentsInfo.classList.remove('js-instruments-sticky-item');
    } else {
        instrumentsItems.forEach((instrumentsItem) => {
            instrumentsItem.classList.add('js-instruments-sticky-card');
            instrumentsItem.classList.remove('hidden');
        });

        instrumentsInfo.classList.add('js-instruments-sticky-item');
    }
}

function showMore() {
    instrumentsItems.forEach((instrumentsItem, index) => {
        if (index >= visibleCount) {
            instrumentsItem.classList.remove('hidden');
        }
    });

    visibleCount+= 4;

    if (visibleCount >= instrumentsItems.length - 1) {
        instrumentsButton.classList.add('hidden');
    }
}