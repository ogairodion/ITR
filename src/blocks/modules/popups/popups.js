const popupCookie = document.querySelector('.popup-cookies');
const button = popupCookie.querySelector('button');

button.addEventListener('click', () => {
    popupCookie.classList.add('hidden');
})