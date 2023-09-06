const popupCookie = document.querySelector('.popup-cookies');

if (popupCookie) {
    const button = popupCookie.querySelector('button');

    button.addEventListener('click', () => {
        popupCookie.classList.add('hidden');
    })
}
