import './homepage.css'
import { pageLoad } from './homepage';
import { loadMenu } from './menu';

const content = document.querySelector('#content');


pageLoad(content);


const menus = document.querySelectorAll('.res-menus div');

menus.forEach((menu) => {
    menu.addEventListener('click', (e) => {
        if (e.target.textContent === 'Home') {
            pageLoad(content);
        }
        else if (e.target.textContent === 'Menu') {
            const mainContainer = document.querySelector('.main-container');
            loadMenu(mainContainer);
            // run the other function from the other module.
        }
        else if (e.target.textContent === 'About') {
            // run the other function from the other module.
        }
    })    
});