const parent = document.querySelector('.form-block');
const img = document.querySelector('.col-img img');
const imgMobile = document.querySelector('.col-img-mobile');
const imgDesktop = document.querySelector('.col-img');

let windowWidth = 0;
windowWidth = window.innerWidth

adaptiveForm(windowWidth)

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth

    adaptiveForm(windowWidth)
});

function adaptiveForm(windowWidth) {
    switch(true) {
        case windowWidth > 768 && !imgDesktop.contains(img):
            imgDesktop.append(img);
        break;

        case windowWidth < 768 && imgDesktop.contains(img):
            imgMobile.append(img);
        break;
    }
}