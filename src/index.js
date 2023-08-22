import './main.css';
import { fetchData } from './fetchData';
import { fetchForecast } from './fetchForecast';
import { displayWeather } from './displayWeather';
import { displayForecast } from './displayForecast';
import { fetchGif } from './fetchGif';
import CaveImg from './img/cave.png';
import EyeImg from './img/eye.png';
import { animation } from './animationController';

require('./search.js');

(async function app() {
  const cave = document.querySelector('#cave');
  cave.style.width = '600px';
  cave.src = CaveImg;
  const eye = document.querySelector('#eye');
  eye.src = EyeImg;

  const initCity = 'london';

  await fetchData('forecast', initCity).then(async (responce) => {
    displayWeather(responce);
    if (responce.current.condition.text) {
      if (responce.current.is_day === 0) {
        await fetchGif(responce.current.condition.text, 1);
      } else {
        await fetchGif(responce.current.condition.text);
      }
    }
  });

  const forecastData = await fetchForecast('london').then(async (responce) => {
    displayForecast(responce);
  });

  animation.openEye();
  animation.moveEye();
})();
