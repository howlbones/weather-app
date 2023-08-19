export async function fetchData(mode, city) {
  if (mode && city) {
    const KEY = '9201fe35f724480e8e7115934231508';
    const baseUrl = 'http://api.weatherapi.com/v1';
    const modeUrl = mode === 'forecast' ? '/forecast.json' : '/search.json';
    const data = await getData(KEY, baseUrl, modeUrl);
    return data;
  }

  async function getData(KEY, baseUrl, modeUrl) {
    try {
      const url = `${baseUrl + modeUrl}?key=${KEY}&q=${city}`;
      console.log(`Fetching: ${url}`);
      const response = await fetch(url, { mode: 'cors' });
      const object = await response.json();
      return object;
    } catch (error) {
      console.error(error);
    }
  }
}
