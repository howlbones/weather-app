import { fetchData } from './fetchData';
import { displayWeather } from './displayWeather';
import { fetchGif } from './fetchGif';
import { fetchForecast } from './fetchForecast';
import { displayForecast } from './displayForecast';
import { animation } from './animationController';

(() => {
  const form = document.querySelector('form');
  const input = form.querySelector('input');
  const datalist = document.querySelector('#places');
  input.addEventListener('input', refreshSuggestions);

  async function refreshSuggestions() {
    const searchRequest = input.value;
    while (datalist.firstChild) {
      datalist.removeChild(datalist.lastChild);
    }

    if (searchRequest && searchRequest.length > 1) {
      const searchResult = await fetchData('search', searchRequest).then(
        (result) => {
          if (result && result.length !== 0) {
            for (let i = 0; i < result.length; i++) {
              const newOption = document.createElement('button');
              newOption.textContent = `${result[i].name} (${result[i].country})`;
              newOption.id = result[i].url;
              newOption.setAttribute('country', result[i].country);
              newOption.addEventListener('click', initWeatherRequest);
              datalist.appendChild(newOption);
            }

            return result;
          }
        }
      );
    }

    function initWeatherRequest(e) {
      animation.closeEye();
      setTimeout(() => {
        requestWeather(e);
      }, 800);
    }
    async function requestWeather(e) {
      while (datalist.firstChild) {
        datalist.removeChild(datalist.lastChild);
      }
      input.value = '';
      const url = e.target.id;
      const weatherData = await fetchData('forecast', await url).then(
        async (responce) => {
          displayWeather(responce);
          if (responce.current.condition.text) {
            if (responce.current.is_day === 0) {
              await fetchGif(responce.current.condition.text, 1);
            } else {
              await fetchGif(responce.current.condition.text);
            }
          }
        }
      );
      const forecastData = await fetchForecast(url).then(async (responce) => {
        displayForecast(responce);
      });

      setTimeout(() => {
        animation.openEye();
        animation.moveEye();
      }, await Promise.all([forecastData, requestWeather]));
    }
  }
})();
