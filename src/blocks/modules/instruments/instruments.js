const instrumentsItems = document.querySelectorAll('.instruments__item');

if (instrumentsItems.length) {
    instrumentsItems.forEach((instrumentsItem, index) => {
        const count = instrumentsItem.querySelector('.instruments__item-count');

        count.innerText = `${index + 1} — ${instrumentsItems.length}`;
    });
}