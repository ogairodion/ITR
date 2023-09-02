const instrumentsItems = document.querySelectorAll('.instruments__item');

if (instrumentsItems.length) {
    let countTop = 60;

    instrumentsItems.forEach((instrumentsItem, index) => {
        const count = instrumentsItem.querySelector('.instruments__item-count');

        instrumentsItem.style.top = `${countTop += 20}px`;
        count.innerText = `${index + 1} — ${instrumentsItems.length}`;
    });
}