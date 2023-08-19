export async function fetchGif(query) {
  const img = document.querySelector('#tv-image');
  const KEY = 'a3oREUyuVY4pTTyJItVmhbTxxo3cMURr';
  console.log('fetching a gif');
  try {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${KEY}&s=${query}`, {
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        img.src = response.data.images.original.url;
      });
  } catch (error) {
    console.log(error);
  }
}
