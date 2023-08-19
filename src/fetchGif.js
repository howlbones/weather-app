import ClearImg from './img/clear.gif';
import RainImg from './img/lightrain.gif';
import MistImg from './img/mist.gif';
import NightImg from './img/night.gif';
import OvercastImg from './img/overcast.gif';
import CloudyImg from './img/partlycloudy.gif';
import SunnyImg from './img/sunny.gif';

export async function fetchGif(query, night) {
  const giphyQuery = `${query} weather tv show`;
  const tvImg = document.querySelector('#tv-image');
  const windowImg = document.querySelector('#window-image');

  if (night) {
    windowImg.src = NightImg;
  } else if (query === 'Clear') {
    windowImg.src = ClearImg;
  } else if (query === 'Mist') {
    windowImg.src = MistImg;
  } else if (query === 'Overcast') {
    windowImg.src = OvercastImg;
  } else if (query === 'Partly cloudy') {
    windowImg.src = CloudyImg;
  } else {
    const words = query.split(' ');
    let found = false;
    for (let i = 0; i < words.length; i++) {
      if (words[i] === 'rain' || words[i] === 'Rain') {
        windowImg.src = RainImg;
        found = true;
      }
    }
    if (!found) {
      windowImg.src = SunnyImg;
    }
  }

  const KEY = 'a3oREUyuVY4pTTyJItVmhbTxxo3cMURr';
  console.log(giphyQuery);
  try {
    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${KEY}&s=${giphyQuery}`,
      {
        mode: 'cors',
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        tvImg.src = response.data.images.original.url;
      });
  } catch (error) {
    console.log(error);
  }
}
