import './style.css';
import firstPotrait from './assets/images/alexander-london-mJaD10XeD7w-unsplash.jpg';

const firstPotraitHolder = document.querySelector('.potrait-holder');
const firstPotraitImg = new Image();
firstPotraitImg.src = firstPotrait;
firstPotraitImg.classList.add('.first-potrait-img');
firstPotraitHolder.appendChild(firstPotraitImg);