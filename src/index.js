import './style.css';
import Icon from './thunder.svg';
import Icon2 from './like.svg';
const fetchApi = async () => {
  await fetch('https://api.openweathermap.org/data/2.5/box/city?bbox=12,30,14,39,10&units=metric&appid=623e557fbf15d070be5435e1d2494617')
    .then((response) => response.json())
    .then((result) => {
      result.list.forEach((city) => {
        const mainContainer = document.querySelector('.main-container');
        const cardTemp = `
          <div class="card d-flex">
          <p class="temp">${Math.floor(city.main.temp)}&#8451;</p>
          <img class="forecast" src="https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png" alt="${city.weather[0].main}">
            <div class="txt-content">
              <p>${city.name}</p>
              <span class="txt d-flex"><img class="like" src="${Icon2}"><p>5 likes</p></span>
            </div>
          <button type="button">Comments</button>
          </div>
        `;
        mainContainer.innerHTML += cardTemp;
      });
    });
};
fetchApi();
const navigation = document.querySelector('.navigation');
const img = document.createElement('img');
img.setAttribute('src', Icon);
navigation.appendChild(img);