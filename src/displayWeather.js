export function displayWeather(data) {
  console.log(data);
  const temperatureC = document.querySelector('#temperature-celcius');
  temperatureC.textContent = `${data.current.temp_c}° C`;
}
