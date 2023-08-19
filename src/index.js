import './main.css';
import { fetchData } from './fetchData';

(function app() {
  fetchData('search', 'saint petersburg').then((responce) => {
    const data = responce;
    console.log('Got search data:');
    console.log(data);
  });
  fetchData('forecast', 'moscow').then((responce) => {
    const data = responce;
    console.log('Got forecast data:');
    console.log(data);
  });
})();
