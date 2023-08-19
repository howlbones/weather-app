import './main.css';
import { fetchData } from './fetchData';

(async function app() {
  const searchRequest = 'saint-petersburg';
  const searchResult = await fetchData('search', searchRequest).then(
    (result) => {
      console.log('Got search data:');
      console.log(result[0].url);
      console.log(result);
      console.log('\n');
      return result;
    }
  );

  const weatherData = await fetchData(
    'forecast',
    await searchResult[0].url
  ).then((responce) => {
    console.log('Got forecast data:');
    console.log(responce);
    console.log('\n');
    return responce;
  });
})();
