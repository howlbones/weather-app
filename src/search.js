import { fetchData } from './fetchData';

(() => {
  const form = document.querySelector('form');
  const input = form.querySelector('input');
  const datalist = document.querySelector('#places');
  input.addEventListener('input', refreshSuggestions);

  async function refreshSuggestions() {
    const searchRequest = input.value;
    console.log(`searching: ${searchRequest}`);
    while (datalist.firstChild) {
      datalist.removeChild(datalist.lastChild);
    }

    if (searchRequest && searchRequest.length > 1) {
      const searchResult = await fetchData('search', searchRequest).then(
        (result) => {
          if (result && result.length !== 0) {
            console.log('Got search data:');
            console.log(result[0].url);
            console.log(result);
            console.log('\n');
            for (let i = 0; i < result.length; i++) {
              const newOption = document.createElement('button');
              newOption.textContent = `${result[i].name} (${result[i].country})`;
              newOption.id = result[i].url;
              newOption.setAttribute('country', result[i].country);
              datalist.appendChild(newOption);
            }

            return result;
          }
        }
      );

      // const updateDatalist = await searchResult;
      // updateDatalist.then((data) => {
      //   console.log('updated');
      // });
    }
  }
})();
