
function insertResName(mainContainer) {

    const bigTitle = document.createElement('div');
    bigTitle.classList.add('big-title');
    mainContainer.appendChild(bigTitle);

    const banner = document.createElement('div');
    banner.classList.add('banner');
    banner.textContent = 'Shusme Biryani House';
    bigTitle.appendChild(banner);

    const subtitle = document.createElement('div');
    subtitle.classList.add('subtitle');
    subtitle.textContent = 'You Will Surely Come Back Again';
    bigTitle.appendChild(subtitle);

}


function pageLoad(content) {


    const header = document.createElement('div');
    header.classList.toggle('header');
    const mainContainer = document.createElement('div');
    mainContainer.classList.toggle('main-container');
    const footer = document.createElement('div');
    footer.classList.toggle('footer');

    const h2 = document.createElement('h2');
    h2.textContent = 'Order Now!';
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    p1.textContent = 'Mob: +88017xxxxxxxx';
    p2.textContent = '127/1, Shusme Road';
    p3.textContent = 'Kushtia, Khulna, Bangladesh';

    const name = document.createElement('div');
    name.classList.toggle('name');
    name.appendChild(h2);
    name.appendChild(p1);
    name.appendChild(p2);
    name.appendChild(p3);
    header.appendChild(name);

    const menus = document.createElement('div');
    menus.classList.toggle('res-menus');
    header.appendChild(menus);

    const tab1 = document.createElement('div');
    const tab2 = document.createElement('div');
    const tab3 = document.createElement('div');

    // text contents
    tab1.textContent = 'Home';
    tab2.textContent = 'Menu';
    tab3.textContent = 'About';

    menus.appendChild(tab1);
    menus.appendChild(tab2);
    menus.appendChild(tab3);

    const pFooter = document.createElement('p');
    pFooter.textContent = `Copyright © Shirsho Dipto`;

    footer.appendChild(pFooter);

    content.appendChild(header);
    content.appendChild(mainContainer);
    content.appendChild(footer);

    insertResName(mainContainer);
}


export { pageLoad, insertResName };