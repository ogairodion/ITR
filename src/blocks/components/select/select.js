const selects = document.querySelectorAll('.select');

if (selects.length) {
    selects.forEach((select) => {
        const selectTop = select.querySelector('.select__top');
        const selectChosen = select.querySelector('.select__chosen');
        const radioBtns = select.querySelectorAll('input[type="radio"]');

        selectTop.addEventListener('click', () => {
            select.classList.toggle('open');
        });

        radioBtns.forEach((radio) => {
            radio.addEventListener('change', (e) => {
                selectChosen.innerText = e.target.value;
                select.classList.remove('open');
            });
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.select')) {
                select.classList.remove('open');
            }
        });
    });
}