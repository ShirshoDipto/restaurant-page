import { pageLoad, insertResName } from './homepage';
import { loadMenu } from './menu';
import { loadAbout } from './about';



pageLoad(content);


const menus = document.querySelectorAll('.res-menus div');
const mainContainer = document.querySelector('.main-container');

menus.forEach((menu) => {
    menu.addEventListener('click', (e) => {
        if (e.target.textContent === 'Home') {
            if (mainContainer.firstElementChild.classList.value !== 'big-title') {
                mainContainer.removeChild(mainContainer.firstElementChild);
                insertResName(mainContainer);
            }
        }
        else if (e.target.textContent === 'Menu') {
            loadMenu(mainContainer);
        }
        else if (e.target.textContent === 'About') {
            loadAbout(mainContainer);
        }
    })    
});