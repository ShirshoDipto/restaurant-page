
function loadAbout( mainContainer ) {
    if (mainContainer.firstElementChild.classList.value !== 'all-menus2') {
        
        mainContainer.removeChild(mainContainer.firstElementChild);

        const allMenus = document.createElement('div');
        allMenus.classList.add('all-menus2');
        mainContainer.appendChild(allMenus);
    
    
        const ourStory = document.createElement('div');
        ourStory.classList.add('our-story');
        allMenus.appendChild(ourStory);
    
        const headline = document.createElement('div');
        headline.classList.add('headline');
        headline.textContent = 'Our Story';
        ourStory.appendChild(headline);
    
    
        const underHeadline = document.createElement('div');
        underHeadline.classList.add('underneath-headline');
        underHeadline.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut';
        ourStory.appendChild(underHeadline);
    
        const storyElement = document.createElement('div');
        storyElement.classList.add('story-element');
        allMenus.appendChild(storyElement);
    
    
        const div1 = document.createElement('div');
        div1.classList.add('three-div');
        storyElement.appendChild(div1);
    
        const div2 = document.createElement('div');
        div2.classList.add('three-div');
        storyElement.appendChild(div2);
    
        const div3 = document.createElement('div');
        div3.classList.add('three-div');
        storyElement.appendChild(div3);
    
    
        const icon1 = document.createElement('div');
        icon1.classList.add('icon1');
        const icon2 = document.createElement('div');
        icon2.classList.add('icon2');
        const icon3 = document.createElement('div');
        icon3.classList.add('icon3');
    
    
        div1.appendChild(icon1);
        div2.appendChild(icon2);
        div3.appendChild(icon3);
    
    
        const est1 = document.createElement('div');
        est1.classList.add('est');
        const est2 = document.createElement('div');
        est1.classList.add('est');
        const est3 = document.createElement('div');
        est1.classList.add('est');
    
        div1.appendChild(est1);
        div2.appendChild(est2);
        div3.appendChild(est3);
    
        const estDetail1 = document.createElement('div');
        const estDetail2 = document.createElement('div');
        const estDetail3 = document.createElement('div');
    
        estDetail1.classList.add('est-detail');
        estDetail2.classList.add('est-detail');
        estDetail3.classList.add('est-detail');
    
        div1.appendChild(estDetail1);
        div2.appendChild(estDetail2);
        div3.appendChild(estDetail3);
    
        const h2_1 = document.createElement('h2');
        const h2_2 = document.createElement('h2');
        const h2_3 = document.createElement('h2');
    
        h2_1.textContent = 'EST';
        h2_2.textContent = 'Cooking Tradition';
        h2_3.textContent = 'Food Quality';
    
        est1.appendChild(h2_1);
        est2.appendChild(h2_2);
        est3.appendChild(h2_3);
    
        const ap1 = document.createElement('p');
        const ap2 = document.createElement('p');
        const ap3 = document.createElement('p');
    
        ap1.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt laborum deserunt obcaecati praesentium illum blanditiis voluptatem neque, impedit inventore aliquid ea, sint dolorum culpa reprehenderit nulla labore ratione ab harum.';
        ap2.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt laborum deserunt obcaecati praesentium illum blanditiis voluptatem neque, impedit inventore aliquid ea, sint dolorum culpa reprehenderit nulla labore ratione ab harum.';
        ap3.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt laborum deserunt obcaecati praesentium illum blanditiis voluptatem neque, impedit inventore aliquid ea, sint dolorum culpa reprehenderit nulla labore ratione ab harum.';
    
    
        estDetail1.appendChild(ap1);
        estDetail2.appendChild(ap2);
        estDetail3.appendChild(ap3);
    }
}



export {loadAbout};




{/* <div class="all-menus">
                <div class="our-story">
                    <div class="headline">Our Story</div>
                    <div class="underneath-headline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut</div>
                </div>
                <div class="story-element">
                    <div class="three-div">
                        <div class="icon">
                            <img src="anchor.png" alt="anchor icon">
                        </div>
                        <div class="est">
                            <h2>EST</h2>
                        </div>
                        <div class="est-detail">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt laborum deserunt obcaecati praesentium illum blanditiis voluptatem neque, impedit inventore aliquid ea, sint dolorum culpa reprehenderit nulla labore ratione ab harum.</p>
                        </div>
                    </div>
                    <div class="three-div">
                        <div class="icon">
                            <img src="food-turkey.png" alt="food turkey icon">
                        </div>
                        <div class="est">
                            <h2>Cooking Tradition</h2>
                        </div>
                        <div class="est-detail">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt laborum deserunt obcaecati praesentium illum blanditiis voluptatem neque, impedit inventore aliquid ea, sint dolorum culpa reprehenderit nulla labore ratione ab harum.</p>
                        </div>
                    </div>
                    <div class="three-div">
                        <div class="icon">
                            <img src="coffee.png" alt="coffee icon">
                        </div>
                        <div class="est">
                            <h2>Food Quality</h2>
                        </div>
                        <div class="est-detail">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt laborum deserunt obcaecati praesentium illum blanditiis voluptatem neque, impedit inventore aliquid ea, sint dolorum culpa reprehenderit nulla labore ratione ab harum.</p>
                        </div>
                    </div>
                </div>
            </div> */}