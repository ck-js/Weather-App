import section1Image2 from './section1image2.png'

import { headerComponent, section1Component, section2Component, section3Component, section4Component, section5Component, section6Component, section7Component, wrapWordInSpan } from "./page-load";
import './style.css'

const body = document.body;


const content = document.getElementById('content');

content.appendChild(headerComponent())

content.appendChild(section1Component())
content.appendChild(section2Component())
content.appendChild(section3Component())
content.appendChild(section4Component())
content.appendChild(section5Component())
content.appendChild(section6Component())
body.appendChild(section7Component())




// const navItems = document.querySelector('.nav-items');
// const navItemsOpen = document.querySelector('.nav-items-open');

// if (navItemsOpen) {
//     navItemsOpen.addEventListener('click', () => {
//         navItems.classList.remove('nav-items-open');
//       });

// }

const section1Container = document.getElementById('section-1-parent-container')
// set background if desktop window width
if (window.innerWidth <= 767) {
    section1Container.style.backgroundImage = 'none'
    } else {
    section1Container.style.backgroundImage = `url(${section1Image2})`
    }

window.addEventListener('resize', () => {

if (window.innerWidth <= 767) {
    section1Container.style.backgroundImage = 'none'
    } else {
    section1Container.style.backgroundImage = `url(${section1Image2})`
    }


})




