import './style.css';
import firstPotraitTall from './assets/images/firstCatTall.png';
import firstPotraitWide from './assets/images/firstCatWide.png';

const firstPotraitHolder = document.querySelector('.potrait-holder');
const pictureElement = document.createElement('picture');
const tallSource = document.createElement('source');
tallSource.srcset = firstPotraitTall;
tallSource.media = '(max-width: 640px)';
pictureElement.appendChild(tallSource);
const wideSource = document.createElement('source');
wideSource.srcset = firstPotraitWide;
wideSource.media = '(min-width: 641px)';
pictureElement.appendChild(wideSource);
const firstPotraitImg = new Image();
firstPotraitImg.src = firstPotraitTall;
firstPotraitImg.classList.add('first-potrait-img');
pictureElement.appendChild(firstPotraitImg);
firstPotraitHolder.appendChild(pictureElement);
