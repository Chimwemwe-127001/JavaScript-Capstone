import './style.css';
import Icon from './thunder.svg';

const fetchApi = () => {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Lusaka&appid=623e557fbf15d070be5435e1d2494617')
    .then((response) => response.json())
    .then((result) => console.log(result));
};
fetchApi();

const navigation = document.querySelector('.navigation');
const img = document.createElement('img');
img.setAttribute('src', Icon);
navigation.appendChild(img);