import { format } from 'date-fns';

export async function fetchForecast(city) {
  if (city) {
    const KEY = '9201fe35f724480e8e7115934231508';
    const baseUrl = 'http://api.weatherapi.com/v1';
    const data = await getData(KEY, baseUrl, '/forecast.json');
    return data;
  }

  async function getData(KEY, baseUrl, modeUrl) {
    try {
      const date = new Date(Date.now());
      const forecastArray = [];
      for (let i = 1; i < 4; i++) {
        date.setDate(date.getDate() + 1);
        const dateUrl = format(date, 'yyyy-MM-dd');
        const url = `${baseUrl + modeUrl}?key=${KEY}&q=${city}&dt=${dateUrl}`;
        console.log(`fetching url: ${url}`);
        const response = await fetch(url, { mode: 'cors' });
        const object = await response.json();
        forecastArray.push(object);
      }
      return forecastArray;
    } catch (error) {
      console.error(error);
    }
  }
}
