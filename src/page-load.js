import logoImage1 from './logoimage1.png'
import mobileMenuIcon from './mobile-menu-icon.jpg'
import logoImage2 from './logoimage2.png'

import section1Image from './section1image.jpg'
import section1Image2 from './section1image2.png'
import card1Image from './card1image.png'
import card2Image from './card2image.png'
import card3Image from './card3image.png'
import section4Image from './section4image.png'
import section5Image from './section5image.png'

function headerComponent() {
    const headerContainer = document.createElement('header');
const nav = document.createElement('nav');

const wrapper = document.createElement('div');
wrapper.id = 'wrapper'
const logoContainer = document.createElement('div');
logoContainer.id = 'nav-logo-container'
const image = new Image();
image.src = logoImage1;
image.alt = 'turquoise and black bold Nutra Nation logo in capital letters'
logoContainer.appendChild(image)

const menuButton = document.createElement('button');
menuButton.classList.add('menu-icon')
menuButton.ariaLabel = 'click to open navigation menu'
const image2 = new Image();
image2.src = mobileMenuIcon;
menuButton.appendChild(image2)

wrapper.appendChild(logoContainer)
wrapper.appendChild(menuButton)

const ul = document.createElement('ul');
ul.classList.add('nav-items')
const li1 = document.createElement('li');
const a1 = document.createElement('a');
a1.href = '#section-2-parent-container';
a1.textContent = 'process';
li1.appendChild(a1)
const li2 = document.createElement('li');
const a2 = document.createElement('a')
a2.href = '#section-3-parent-container';
a2.textContent = 'about';
li2.appendChild(a2)
const li3 = document.createElement('li');
const a3 = document.createElement('a');
a3.href = '#section-4-parent-container';
a3.textContent = 'team';
li3.appendChild(a3)
const li4 = document.createElement('li');
const a4 = document.createElement('a');
a4.href = '#section-6-parent-container';
a4.textContent = 'contact';
li4.appendChild(a4)

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)

menuButton.addEventListener('click',(event) => {
const navItems = document.querySelector('.nav-items');


navItems.classList.toggle('nav-items-open');

const navItemsOpen = document.querySelector('.nav-items-open');

if (navItemsOpen) {
    navItemsOpen.addEventListener('click', () => {
        navItems.classList.remove('nav-items-open');
      });

}



})

const anchorButton = document.createElement('a');
anchorButton.id = 'nav-anchor-button'
anchorButton.classList.add('anchor-buttons')
anchorButton.textContent = 'lets connect'


wrapper.appendChild(logoContainer)
wrapper.appendChild(menuButton)
nav.appendChild(wrapper)
nav.appendChild(ul)
nav.appendChild(anchorButton)



headerContainer.appendChild(nav)

    return headerContainer;
}



function section1Component() {
    const parentContainer = document.createElement('div');
parentContainer.id = 'section-1-parent-container'
parentContainer.classList.add('sections-parent')

const imageWrapper = document.createElement('div');
imageWrapper.id = 'section-1-mobile-image-wrapper';
imageWrapper.classList.add('mobile-image-wrapper')

const image = new Image();
image.src = section1Image;
image.alt = 'caucasion portrait of a healthy women with blue eyes and blond brunette hair with a big smile'

// const imageWrapper2 = document.createElement('div');
// imageWrapper2.id = 'section-1-desktop-image-wrapper';
// imageWrapper2.classList.add('mobile-image-wrapper')

const image2 = new Image();
image2.id = 'section-1-image-2'
image2.src = section1Image2;

imageWrapper.appendChild(image)
// imageWrapper2.appendChild(image2)


const title = document.createElement('h1')
title.classList.add('titles')
title.textContent = "we are igniting innovative brands"

wrapWordInSpan('innovative', title)

const p1 = document.createElement('p');
p1.classList.add('paragraph-text')
p1.textContent = "We are shaping the global nutrition market with pioneering solutions.";
const paragraph = document.createElement('p');
paragraph.id = 'section-1-paragraph-2'
paragraph.classList.add('paragraph-text')
paragraph.textContent = "At Nutranation we're redefining the standard for high-quality direct-to-customers nutrition brands worldwide.";

wrapWordInSpan('Nutranation', paragraph)
const anchorButton = document.createElement('a');
anchorButton.classList.add('anchor-buttons')
anchorButton.textContent = 'contact us';


parentContainer.appendChild(imageWrapper)
// parentContainer.appendChild(imageWrapper2)
parentContainer.appendChild(title)
parentContainer.appendChild(p1)
parentContainer.appendChild(paragraph)
parentContainer.appendChild(anchorButton)


return parentContainer;
}

function section2Component() {
    const parentContainer = document.createElement('div');
parentContainer.id = 'section-2-parent-container'
parentContainer.classList.add('sections-parent')

const title = document.createElement('h1')
title.id = 'section-2-title'
title.classList.add('titles')
title.textContent = "we always reach out for the top";

const paragraphContainer = document.createElement('div');
paragraphContainer.id = 'section-2-paragraph-container';
const p1Wrapper = document.createElement('div');
p1Wrapper.classList.add('section-2-p-wrapper');
const p1 = document.createElement('p');
p1.id = 'section-2-p1';
p1.classList.add('paragraph-titles')
p1.textContent = "> 50 brands";
const p2 = document.createElement('p');
p2.id = 'section-2-p2';
p2.classList.add('paragraph-texts')
p2.textContent = "launched";
p1Wrapper.appendChild(p1)
p1Wrapper.appendChild(p2)

const p3Wrapper = document.createElement('div');
p3Wrapper.classList.add('section-2-p-wrapper')
const p3 = document.createElement('p');
p3.id = 'section-2-p3';
p3.classList.add('paragraph-titles')
p3.textContent = "+ 5.000.000";
const p4 = document.createElement('p');
p4.id = 'section-2-p4';
p4.classList.add('paragraph-texts')
p4.textContent = "customers";
p3Wrapper.appendChild(p3)
p3Wrapper.appendChild(p4)

const p5Wrapper = document.createElement('div');
p5Wrapper.classList.add('section-2-p-wrapper');
const p5 = document.createElement('p');
p5.id = 'section-2-p5';
p5.classList.add('paragraph-titles')
p5.textContent = "more than 15";
const p6 = document.createElement('p');
p6.id = 'section-2-p6';
p6.classList.add('paragraph-texts')
p6.textContent = "countries";
p5Wrapper.appendChild(p5)
p5Wrapper.appendChild(p6)


paragraphContainer.appendChild(p1Wrapper)
paragraphContainer.appendChild(p3Wrapper)
paragraphContainer.appendChild(p5Wrapper)
// paragraphContainer.appendChild(p3)
// paragraphContainer.appendChild(p4)
// paragraphContainer.appendChild(p5)
// paragraphContainer.appendChild(p6)

parentContainer.appendChild(title)
parentContainer.appendChild(paragraphContainer)





return parentContainer;
}

function section3Component() {
    const parentContainer = document.createElement('div');
parentContainer.id = 'section-3-parent-container'
parentContainer.classList.add('sections-parent')

const title = document.createElement('h1')
title.id = 'section-3-title'
title.classList.add('titles')
title.textContent = "holistic product development approach";

const cardsContainer = document.createElement('div');
cardsContainer.id = 'section-3-cards-container';

const card1Item = document.createElement('div');
card1Item.classList.add('card-items');
const image1 = new Image();
image1.src = card1Image;
image1.alt = 'blueish green screen icon with settings icon on top right'
const card1Title = document.createElement('h2');
card1Title.classList.add('card-titles');
card1Title.textContent = 'product web development'
const card1Paragraph = document.createElement('p');
card1Paragraph.classList.add('card-paragraphs');
card1Paragraph.textContent ="Revolutionizing lifestyles, Nutranation crafts brands from the essence of women's everyday realities. Our real-time development process fosters dynamism, creativity, and personalized solutions."; 

const card2Item = document.createElement('div');
card2Item.classList.add('card-items');
const image2 = new Image();
image2.src = card2Image;
image2.alt = 'blueish green screen icon with settings icon on top right'
const card2Title = document.createElement('h2');
card2Title.classList.add('card-titles');
card2Title.textContent = 'branding & design'
const card2Paragraph = document.createElement('p');
card2Paragraph.classList.add('card-paragraphs');
card2Paragraph.textContent ="As our brand evolves, our creative team springs into action, unlocking the latent potential of our products to sculpt captivating brands. From conception to completion, it's all made from us."; 

const card3Item = document.createElement('div');
card3Item.classList.add('card-items');
const image3 = new Image();
image3.src = card3Image;
image3.alt = 'blueish green screen icon with settings icon on top right'
const card3Title = document.createElement('h2');
card3Title.classList.add('card-titles');
card3Title.textContent = 'performance marketing'
const card3Paragraph = document.createElement('p');
card3Paragraph.classList.add('card-paragraphs');
card3Paragraph.textContent ="In anticipation of the product and brand launch, we meticulously craft our marketing strategy. Our continuous process of performance marketing optimisation fuels the creation of impactful advertising campaigns."; 


card1Item.appendChild(image1)
card1Item.appendChild(card1Title)
card1Item.appendChild(card1Paragraph)

card2Item.appendChild(image2)
card2Item.appendChild(card2Title)
card2Item.appendChild(card2Paragraph)

card3Item.appendChild(image3)
card3Item.appendChild(card3Title)
card3Item.appendChild(card3Paragraph)



cardsContainer.appendChild(card1Item)
cardsContainer.appendChild(card2Item)
cardsContainer.appendChild(card3Item)

parentContainer.appendChild(title)
parentContainer.appendChild(cardsContainer)





return parentContainer;
}

function section4Component() {
    const parentContainer = document.createElement('div');
parentContainer.id = 'section-4-parent-container'
parentContainer.classList.add('sections-parent')

const imageWrapper = document.createElement('div');
imageWrapper.id = 'section-4-image-wrapper';
imageWrapper.classList.add('mobile-image-wrapper')

const image = new Image();
image.src = section4Image;
image.alt = 'athletic women working on a laptop'

imageWrapper.appendChild(image)
const textContainer = document.createElement('div');
textContainer.id = 'section-4-text-container';

const title = document.createElement('h1')
title.id = 'section-4-title'
title.classList.add('titles')
title.textContent = "holistic product development approach"

const p1 = document.createElement('p');
p1.classList.add('paragraph-text')
p1.textContent = "Our triumph stems from enhancing the lives of our customers, a mission driving every facet of our operation.";
const p2 = document.createElement('p');
p2.classList.add('paragraph-text')
p2.textContent = "We relentlessly refine our processes, scrutinizing every detail to deliver unparalleled quality.";

textContainer.appendChild(title)
textContainer.appendChild(p1)
textContainer.appendChild(p2)

parentContainer.appendChild(imageWrapper)
parentContainer.appendChild(textContainer)

// parentContainer.appendChild(title)
// parentContainer.appendChild(p1)
// parentContainer.appendChild(p2)

return parentContainer;
}
function section5Component() {
    const parentContainer = document.createElement('div');
parentContainer.id = 'section-5-parent-container'
parentContainer.classList.add('sections-parent')

const imageWrapper = document.createElement('div');
imageWrapper.id = 'section-5-image-wrapper';
imageWrapper.classList.add('mobile-image-wrapper')

const image = new Image();
image.src = section5Image;
image.alt = 'athletic women working on a laptop'

imageWrapper.appendChild(image)

const textContainer = document.createElement('div');
textContainer.id = 'section-5-text-container';

const title = document.createElement('h1')
title.id = 'section-5-title'
title.classList.add('titles')
title.textContent = "we stand as a worldwide force spanning continents"

const p1 = document.createElement('p');
p1.classList.add('paragraph-text')
p1.textContent = "Our international company embodies modernity, fostering a diverse and collaborative team environment.";
const p2 = document.createElement('p');
p2.classList.add('paragraph-text')
p2.textContent = "With offices worldwide, we offer unmatched opportunities for professional growth and cross-cultural engagement.";

textContainer.appendChild(title)
textContainer.appendChild(p1)
textContainer.appendChild(p2)

parentContainer.appendChild(imageWrapper)
parentContainer.appendChild(textContainer)


// parentContainer.appendChild(title)
// parentContainer.appendChild(p1)
// parentContainer.appendChild(p2)

return parentContainer;
}
function section6Component() {
    const parentContainer = document.createElement('div');
parentContainer.id = 'section-6-parent-container'
parentContainer.classList.add('sections-parent')

const textContainer = document.createElement('div');
textContainer.id = 'section-6-text-container'
const title = document.createElement('h1')
title.id = 'section-6-title'
title.classList.add('titles')
title.textContent = "we're on the hunt for exceptional talent"

const p1 = document.createElement('p');
p1.classList.add('paragraph-text')
p1.textContent = "Are you ready to shine? Are you passionate about solving challenges, driving brand creation from inception to fruition? Join our team of trailblazers. Get in touch today.";
textContainer.appendChild(title)
textContainer.appendChild(p1)


const anchorButton = document.createElement('a');
anchorButton.classList.add('anchor-buttons')
anchorButton.textContent = 'apply now';


parentContainer.appendChild(textContainer)
parentContainer.appendChild(anchorButton)

return parentContainer;
}
function section7Component() {
    const parentContainer = document.createElement('footer')
const navContainer = document.createElement('nav');
navContainer.id = 'nav-2';

const navItemContainer1 = document.createElement('div');
navItemContainer1.classList.add('nav-2-item-containers');
const h4 = document.createElement('h4');
h4.textContent = 'Website';

const ul = document.createElement('ul');
ul.id = 'nav-items-2'
const li1 = document.createElement('li');
const a1 = document.createElement('a');
a1.href = '#section-2-parent-container';
a1.textContent = 'process';
li1.appendChild(a1)
const li2 = document.createElement('li');
const a2 = document.createElement('a')
a2.href = '#section-3-parent-container';
a2.textContent = 'about';
li2.appendChild(a2)
const li3 = document.createElement('li');
const a3 = document.createElement('a');
a3.href = '#section-4-parent-container';
a3.textContent = 'team';
li3.appendChild(a3)

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)

navItemContainer1.appendChild(h4);
navItemContainer1.appendChild(ul);

const navItemContainer2 = document.createElement('div');
navItemContainer2.classList.add('nav-2-item-containers')
const h4Two = document.createElement('h4');
h4Two.textContent = 'Information';

const ul2 = document.createElement('ul');
ul2.id = 'nav-items-2'
const li4 = document.createElement('li');
const a4= document.createElement('a');
a4.href = '#section-1-parent-container';
a4.textContent = 'Contact';
li4.appendChild(a4)
const li5 = document.createElement('li');
const a5 = document.createElement('a')
a5.href = '#section-3-parent-container';
a5.textContent = 'Imprint';
li5.appendChild(a5)
const li6 = document.createElement('li');
const a6 = document.createElement('a');
a6.href = '#section-5-parent-container';
a6.textContent = 'Privacy Policy';
li6.appendChild(a6)

ul2.appendChild(li4)
ul2.appendChild(li5)
ul2.appendChild(li6)

navItemContainer2.appendChild(h4Two)
navItemContainer2.appendChild(ul2)

navContainer.appendChild(navItemContainer1)
navContainer.appendChild(navItemContainer2)

const nav2TextContainer2 = document.createElement('div');
nav2TextContainer2.id ='nav-2-text-container-2'
const navLogoContainer = document.createElement('div');
navLogoContainer.id = 'nav-logo-container';

const logoImage = new Image();
logoImage.src = logoImage2;

navLogoContainer.appendChild(logoImage)

const hr = document.createElement('hr');

const p = document.createElement('p');
p.textContent = 'Copyright © 2024 Nutranation LLC';
const p2 = document.createElement('p');
p2.textContent = 'All rights reserved';

nav2TextContainer2.appendChild(navLogoContainer)
nav2TextContainer2.appendChild(hr)
nav2TextContainer2.appendChild(p)
nav2TextContainer2.appendChild(p2)


parentContainer.appendChild(navContainer)
parentContainer.appendChild(nav2TextContainer2)
// parentContainer.appendChild(navLogoContainer)
// parentContainer.appendChild(hr)
// parentContainer.appendChild(p)



    return parentContainer;
}






function wrapWordInSpan(word, h1Element) {
    const words = h1Element.textContent.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      if (words[i] === word) {
        const span = document.createElement('span');
        span.textContent = words[i];
        span.id = 'span-' + i
        // span.style.color = '#7315cb';
        // span.style.fontWeight = 'bold';
  
        words[i] = span.outerHTML;
      }
    }
  
    h1Element.innerHTML = words.join(' ');
  }


export {
    section1Image,
    headerComponent,
section1Component,
section2Component,
section3Component,
section4Component,
section5Component,
section6Component,
section7Component,
wrapWordInSpan,


}; 