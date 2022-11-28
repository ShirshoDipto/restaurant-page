import './homepage.css'
import { pageLoad } from './homepage';
import { loadMenu } from './menu';
import menuPic1 from './images/biryani-platter.jpg' 
import menuPic2 from './images/mario-raj.jpg' 
import menuPic3 from './images/mutton-biryani.jpg' 
import menuPic4 from './images/kebab-biryani.jpg' 
import menuPic5 from './images/indian-biryani.jpg' 
import menuPic6 from './images/chicken-biryani.jpg' 

const content = document.querySelector('#content');
const pic1 = new Image();
pic1.src = menuPic2;
const pic2 = new Image();
pic2.src = menuPic1;
const pic3 = new Image();
pic3.src = menuPic3;
const pic4 = new Image();
pic4.src = menuPic4;
const pic5 = new Image();
pic5.src = menuPic5;
const pic6 = new Image();
pic6.src = menuPic6;

console.log(pic1);

pageLoad(content);


const menus = document.querySelectorAll('.res-menus div');

menus.forEach((menu) => {
    menu.addEventListener('click', (e) => {
        if (e.target.textContent === 'Home') {
            pageLoad(content);
        }
        else if (e.target.textContent === 'Menu') {
            const mainContainer = document.querySelector('.main-container');
            console.log(mainContainer.firstElementChild);
            loadMenu(mainContainer, pic1, pic2, pic3, pic4, pic5, pic6);
            // run the other function from the other module.
        }
        else if (e.target.textContent === 'About') {
            // run the other function from the other module.
        }
    })    
});