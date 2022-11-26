

function pageLoad(content) {


    const header = document.createElement('div');
    header.classList.toggle('header');
    const mainContainer = document.createElement('div');
    mainContainer.classList.toggle('main-container');
    const footer = document.createElement('div');
    footer.classList.toggle('footer');

    const h2 = document.createElement('h2');
    h2.textContent = 'My Restaurant';
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    p1.textContent = '127/1, Shusme Road';
    p2.textContent = 'Kushtia, Khulna, Bangladesh';
    p3.textContent = 'Mob: +88017xxxxxxxx';

    const name = document.createElement('div');
    name.classList.toggle('name');
    name.appendChild(h2);
    name.appendChild(p1);
    name.appendChild(p2);
    name.appendChild(p3);
    header.appendChild(name);

    const menus = document.createElement('div');
    menus.classList.toggle('menus');
    header.appendChild(menus);

    const tab1 = document.createElement('div');
    const tab2 = document.createElement('div');
    const tab3 = document.createElement('div');
    tab1.textContent = 'Home';
    tab2.textContent = 'Menu';
    tab3.textContent = 'Contact';

    menus.appendChild(tab1);
    menus.appendChild(tab2);
    menus.appendChild(tab3);

    const pFooter = document.createElement('p');
    pFooter.textContent = 'Copyright &copy; Shirsho Dipto';

    footer.appendChild(pFooter);

    content.appendChild(header);
    content.appendChild(mainContainer);
    content.appendChild(footer);
}


export { pageLoad };
{/* <div class="header">
    <div class="name">
        <h2>My Restaurant</h2>
        <p>127/1, Shusme Road</p>
        <p>Kushtia, Khulna, Bangladesh</p>
        <p>Mob: +88017xxxxxxxx</p>
    </div>
    <div class="menus">
        <div class="tabs">Home</div>
        <div class="tabs">Menu</div>
        <div class="tabs">Contact</div>
    </div>
</div>
<div class="main-container"></div>
<div class="footer"><p>Copyright &copy; Shirsho Dipto</p></div> */}