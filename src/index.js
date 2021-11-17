import './style.css';
import Icon from './thunder.svg';
import Icon2 from './like.svg';

const popup = document.querySelector('.popup');
const navigation = document.querySelector('.navigation');
const img = document.createElement('img');
img.setAttribute('src', Icon);
navigation.appendChild(img);
const likeApiURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GRWzq7F1QiyQiW4Miwtn/likes/';
const sendLikes = async (id) => {
  let response;
  if (id) {
    response = await fetch(likeApiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
      }),
    })
      .then((response) => response.text())
      .then((result) => {
        if (result === 'Created') {
          return { error: false, data: result };
        }
        return { error: true, data: result };
      })
      .catch((error) => ({ error: true, data: error }));
  } else {
    response = { error: true, data: 'missing id' };
  }
  return response;
};
const displayLike = async (id) => {
  await fetch(likeApiURL).then((res) => res.text())
    .then((info) => {
      if (info && info.length > 1) {
        let likes = JSON.parse(info);
        likes = likes.filter((data) => data.item_id === id);
        if (likes.length > 0) {
          document.querySelector(`.like-count[data='${id}']`).innerText = `${likes[0].likes} likes`;
        }
      }
    });
};
const displayLikes = () => {
  const likeCounters = document.querySelectorAll('.like-count');
  likeCounters.forEach((el) => {
    const id = el.getAttribute('data');
    displayLike(id);
  });
};
const populateUI = async () => {
  await fetch('https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,30&appid=623e557fbf15d070be5435e1d2494617')
    .then((response) => response.json())
    .then((result) => {
      const cityCount = document.querySelector('.city-counter');
      cityCount.innerText = `${result.list.length}`;
      result.list.forEach((city) => {
        const mainContainer = document.querySelector('.main-container');
        const cardTemp = `
          <div class="card d-flex">
          <p class="temp">${Math.floor(city.main.temp)}&#8451;</p>
          <img class="forecast" src="https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png" alt="${city.weather[0].main}">
            <div class="txt-content">
              <p>${city.name}</p>
              <span class="txt d-flex"><img class="like" src="${Icon2}" data="${city.id}"><p class="like-count" data=${city.id}>0 likes</p></span>
            </div>
          <button id="${city.id}" class="popupbtn" type="button">Comments</button>
          </div>
        `;
        mainContainer.innerHTML += cardTemp;
      });
      displayLikes();
      // like item
      const likeIcons = document.querySelectorAll('.like');
      likeIcons.forEach((el) => {
        const id = el.getAttribute('data');
        el.addEventListener('click', () => {
          sendLikes(id).then((res) => {
            if (res.error === false) {
              displayLikes();
            }
          });
        });
      });
      const popupComments = async (id) => {
        await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=623e557fbf15d070be5435e1d2494617`)
          .then((response) => response.json())
          .then((data) => {
            const popupContainer = document.querySelector('.popup');
            const popupTemplate = `
            <button class="close-btn">
              <span></span>
              <span></span>
            </button>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="${data.weather[0].main}">
            <h1>${data.name}</h1>
            <ul>
              <li><p>Temp: ${Math.floor(data.main.temp)};</p></li>
              <li><p>Weather description: ${data.weather[0].description}</p></li>
              <li><p>feels like: ${Math.floor(data.main.feels_like)};</p></li>
              <li><p>Main: ${data.weather[0].main}</p></li>
            </ul>
            `;
            popupContainer.innerHTML = popupTemplate;
            const closebtn = document.querySelector('.close-btn');
            closebtn.addEventListener('click', () => {
              popup.classList.toggle('show');
            });
          });
      };
      const popupbtns = document.querySelectorAll('.popupbtn');
      popupbtns.forEach((popupbtn) => {
        popupbtn.addEventListener('click', (e) => {
          popup.classList.toggle('show');
          popupComments(e.target.getAttribute('id'));
        });
      });
    });
};
populateUI();
