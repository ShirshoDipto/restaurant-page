

function loadMenu(mainContainer) {

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
}

export { loadMenu };

{/* <div class="all-menus">
    <div class="menu-card">
        <img src="mario-raj-n1z3gc9gJ8I-unsplash.jpg" alt="Kacchi Biriyani">
        <div class="description">
            <h3>Kacchi Biriyani</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eos error qui assumenda, necessitatibus perferendis minus provident explicabo eligendi sint neque omnis labore! Cum earum velit molestiae magnam consequuntur eius.</p>
            <button>Order</button>
        </div>
    </div>
    <div class="menu-card">
        <img src="mario-raj-n1z3gc9gJ8I-unsplash.jpg" alt="Kacchi Biriyani">
        <div class="description">
            <h3>Kacchi Biriyani</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eos error qui assumenda, necessitatibus perferendis minus provident explicabo eligendi sint neque omnis labore! Cum earum velit molestiae magnam consequuntur eius.</p>
            <button>Order</button>
        </div>
    </div>
    <div class="menu-card">
        <img src="mario-raj-n1z3gc9gJ8I-unsplash.jpg" alt="Kacchi Biriyani">
        <div class="description">
            <h3>Kacchi Biriyani</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eos error qui assumenda, necessitatibus perferendis minus provident explicabo eligendi sint neque omnis labore! Cum earum velit molestiae magnam consequuntur eius.</p>
            <button>Order</button>
        </div>
    </div>
    <div class="menu-card">
        <img src="mario-raj-n1z3gc9gJ8I-unsplash.jpg" alt="Kacchi Biriyani">
        <div class="description">
            <h3>Kacchi Biriyani</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eos error qui assumenda, necessitatibus perferendis minus provident explicabo eligendi sint neque omnis labore! Cum earum velit molestiae magnam consequuntur eius.</p>
            <button>Order</button>
        </div>
    </div>
    <div class="menu-card">
        <img src="mario-raj-n1z3gc9gJ8I-unsplash.jpg" alt="Kacchi Biriyani">
        <div class="description">
            <h3>Kacchi Biriyani</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eos error qui assumenda, necessitatibus perferendis minus provident explicabo eligendi sint neque omnis labore! Cum earum velit molestiae magnam consequuntur eius.</p>
            <button>Order</button>
        </div>
    </div>
    <div class="menu-card">
        <img src="mario-raj-n1z3gc9gJ8I-unsplash.jpg" alt="Kacchi Biriyani">
        <div class="description">
            <h3>Kacchi Biriyani</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eos error qui assumenda, necessitatibus perferendis minus provident explicabo eligendi sint neque omnis labore! Cum earum velit molestiae magnam consequuntur eius.</p>
            <button>Order</button>
        </div>
    </div>
    <div class="menu-card">
        <img src="mario-raj-n1z3gc9gJ8I-unsplash.jpg" alt="Kacchi Biriyani">
        <div class="description">
            <h3>Kacchi Biriyani</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eos error qui assumenda, necessitatibus perferendis minus provident explicabo eligendi sint neque omnis labore! Cum earum velit molestiae magnam consequuntur eius.</p>
            <button>Order</button>
        </div>
    </div>
    <div class="menu-card">
        <img src="mario-raj-n1z3gc9gJ8I-unsplash.jpg" alt="Kacchi Biriyani">
        <div class="description">
            <h3>Kacchi Biriyani</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eos error qui assumenda, necessitatibus perferendis minus provident explicabo eligendi sint neque omnis labore! Cum earum velit molestiae magnam consequuntur eius.</p>
            <button>Order</button>
        </div>
    </div>
    <div class="menu-card">
        <img src="mario-raj-n1z3gc9gJ8I-unsplash.jpg" alt="Kacchi Biriyani">
        <div class="description">
            <h3>Kacchi Biriyani</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eos error qui assumenda, necessitatibus perferendis minus provident explicabo eligendi sint neque omnis labore! Cum earum velit molestiae magnam consequuntur eius.</p>
            <button>Order</button>
        </div>
    </div>
    <div class="menu-card">
        <img src="mario-raj-n1z3gc9gJ8I-unsplash.jpg" alt="Kacchi Biriyani">
        <div class="description">
            <h3>Kacchi Biriyani</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eos error qui assumenda, necessitatibus perferendis minus provident explicabo eligendi sint neque omnis labore! Cum earum velit molestiae magnam consequuntur eius.</p>
            <button>Order</button>
        </div>
    </div>
    <div class="menu-card">
        <img src="mario-raj-n1z3gc9gJ8I-unsplash.jpg" alt="Kacchi Biriyani">
        <div class="description">
            <h3>Kacchi Biriyani</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eos error qui assumenda, necessitatibus perferendis minus provident explicabo eligendi sint neque omnis labore! Cum earum velit molestiae magnam consequuntur eius.</p>
            <button>Order</button>
        </div>
    </div>
</div> */}