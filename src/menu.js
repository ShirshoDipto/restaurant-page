
function insertImage(menuCard1, menuCard2, menuCard3, menuCard4, menuCard5, menuCard6 ) {
    const pic1 = document.createElement('img');
    pic1.setAttribute('src', 'images/mario-raj.jpg');
    const pic2 = document.createElement('img');
    pic2.setAttribute('src', 'images/biryani-platter.jpg');
    const pic3 = document.createElement('img');
    pic3.setAttribute('src', 'images/biriyani.jpg');
    const pic4 = document.createElement('img');
    pic4.setAttribute('src', 'images/kebab-biryani.jpg');
    const pic5 = document.createElement('img');
    pic5.setAttribute('src', 'images/indian-biryani.jpg');
    const pic6 = document.createElement('img');
    pic6.setAttribute('src', 'images/chicken-biryani.jpg');

    menuCard1.appendChild(pic1);
    menuCard2.appendChild(pic2);
    menuCard3.appendChild(pic3);
    menuCard4.appendChild(pic4);
    menuCard5.appendChild(pic5);
    menuCard6.appendChild(pic6);
}


function loadMenu(mainContainer) {
    if (mainContainer.firstElementChild.classList.value !== 'all-menus') {

        mainContainer.removeChild(mainContainer.firstElementChild);

        const allMenus = document.createElement('div');
        allMenus.classList.toggle('all-menus');
        mainContainer.appendChild(allMenus);
    
    
        const menuCard1 = document.createElement('div');
        menuCard1.classList.toggle('menu-card');
        const menuCard2 = document.createElement('div');
        menuCard2.classList.toggle('menu-card');
        const menuCard3 = document.createElement('div');
        menuCard3.classList.toggle('menu-card');
        const menuCard4 = document.createElement('div');
        menuCard4.classList.toggle('menu-card');
        const menuCard5 = document.createElement('div');
        menuCard5.classList.toggle('menu-card');
        const menuCard6 = document.createElement('div');
        menuCard6.classList.toggle('menu-card');
    
        allMenus.appendChild(menuCard1);
        allMenus.appendChild(menuCard2);
        allMenus.appendChild(menuCard3);
        allMenus.appendChild(menuCard4);
        allMenus.appendChild(menuCard5);
        allMenus.appendChild(menuCard6);
    
        // create img's
        insertImage(menuCard1, menuCard2, menuCard3, menuCard4, menuCard5, menuCard6)
    


        
        // descriptions
    
        const description1 = document.createElement('div');
        const description2 = document.createElement('div');
        const description3 = document.createElement('div');
        const description4 = document.createElement('div');
        const description5 = document.createElement('div');
        const description6 = document.createElement('div');
    
        description1.classList.toggle('description');
        description2.classList.toggle('description');
        description3.classList.toggle('description');
        description4.classList.toggle('description');
        description5.classList.toggle('description');
        description6.classList.toggle('description');
    
        menuCard1.appendChild(description1);
        menuCard2.appendChild(description2);
        menuCard3.appendChild(description3);
        menuCard4.appendChild(description4);
        menuCard5.appendChild(description5);
        menuCard6.appendChild(description6);
    
        const title1 = document.createElement('h3');
        const title2 = document.createElement('h3');
        const title3 = document.createElement('h3');
        const title4 = document.createElement('h3');
        const title5 = document.createElement('h3');
        const title6 = document.createElement('h3');
    
        title1.textContent = 'Kacchi Biryani';
        title2.textContent = 'biryani Platter';
        title3.textContent = 'Vegetable Biryani';
        title4.textContent = 'Kebab Biryani';
        title5.textContent = 'Indian Thai';
        title6.textContent = 'Chicken Biryani';  
    
        description1.appendChild(title1);
        description2.appendChild(title2);
        description3.appendChild(title3);
        description4.appendChild(title4);
        description5.appendChild(title5);
        description6.appendChild(title6);
    
    


        // description of the biryani
    
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const p4 = document.createElement('p');
        const p5 = document.createElement('p');
        const p6 = document.createElement('p');
    
        p1.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eos error qui assumenda, necessitatibus perferendis minus provident explicabo eligendi sint neque omnis labore! Cum earum velit molestiae magnam consequuntur eius.';
        p2.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eos error qui assumenda, necessitatibus perferendis minus provident explicabo eligendi sint neque omnis labore! Cum earum velit molestiae magnam consequuntur eius.';
        p3.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eos error qui assumenda, necessitatibus perferendis minus provident explicabo eligendi sint neque omnis labore! Cum earum velit molestiae magnam consequuntur eius.';
        p4.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eos error qui assumenda, necessitatibus perferendis minus provident explicabo eligendi sint neque omnis labore! Cum earum velit molestiae magnam consequuntur eius.';
        p5.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eos error qui assumenda, necessitatibus perferendis minus provident explicabo eligendi sint neque omnis labore! Cum earum velit molestiae magnam consequuntur eius.';
        p6.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eos error qui assumenda, necessitatibus perferendis minus provident explicabo eligendi sint neque omnis labore! Cum earum velit molestiae magnam consequuntur eius.';
    
    
        description1.appendChild(p1);
        description2.appendChild(p2);
        description3.appendChild(p3);
        description4.appendChild(p4);
        description5.appendChild(p5);
        description6.appendChild(p6);
    


        // buttons for order
    
        const button1 = document.createElement('button');
        const button2 = document.createElement('button');
        const button3 = document.createElement('button');
        const button4 = document.createElement('button');
        const button5 = document.createElement('button');
        const button6 = document.createElement('button');
    
        button1.textContent = 'Order Now';
        button2.textContent = 'Order Now';
        button3.textContent = 'Order Now';
        button4.textContent = 'Order Now';
        button5.textContent = 'Order Now';
        button6.textContent = 'Order Now';
    
        description1.appendChild(button1);
        description2.appendChild(button2);
        description3.appendChild(button3);
        description4.appendChild(button4);
        description5.appendChild(button5);
        description6.appendChild(button6);
    }
}

export { loadMenu };