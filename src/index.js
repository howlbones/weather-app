import './main.css';
import { fetchData } from './fetchData';
import { fetchForecast } from './fetchForecast';
import { displayWeather } from './displayWeather';
import { displayForecast } from './displayForecast';
import { fetchGif } from './fetchGif';
import CaveImg from './img/cave.png';
import EyeImg from './img/eye.png';

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

  // const searchRequest = 'saint-petersburg';
  // const searchResult = await fetchData('search', searchRequest).then(
  //   (result) => {
  //     console.log('Got search data:');
  //     console.log(result[0].url);
  //     console.log(result);
  //     console.log('\n');
  //     return result;
  //   }
  // );
  // const weatherData = await fetchData(
  //   'forecast',
  //   await searchResult[0].url
  // ).then((responce) => {
  //   console.log('Got forecast data:');
  //   console.log(responce);
  //   console.log('\n');
  //   return responce;
  // });
})();
