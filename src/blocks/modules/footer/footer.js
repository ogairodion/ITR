const menuItems = document.querySelectorAll('.footer__menu-item');
const footerMenu = document.querySelector('.footer__menu');

if (menuItems.length) {
    const columnLength = 2;
    const count = menuItems.length / 2;
    const columns = [];

    for (let i = 0; i < columnLength; i++) {
        const column = document.createElement('div');
        
        column.classList.add('footer__menu-column');
        footerMenu.appendChild(column);
        columns.push(column);
    }

    menuItems.forEach((menuItem, index) => {
        if (index < count) {
            columns[0].appendChild(menuItem);
        } else {
            columns[1].appendChild(menuItem);
        }
    });
}  