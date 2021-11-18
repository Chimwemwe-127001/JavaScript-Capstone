import './style.css';
import Icon from './thunder.svg';
import populateUI from './populateUI.js';

const navigation = document.querySelector('.navigation');
const img = document.createElement('img');
img.setAttribute('src', Icon);
navigation.appendChild(img);

populateUI();