import { format } from 'date-fns';

export function displayWeather(data) {
  console.log(data);
  const place = document.querySelector('.title-container .location');
  const date = document.querySelector('.title-container .todays-date');
  const condition = document.querySelector('#condition');
  const conditionIcon = document.querySelector('#condition-icon');
  const temperatureC = document.querySelector('#temperature-celcius');
  const temperatureF = document.querySelector('#temperature-f');
  const feelslike = document.querySelector('#feels-like');
  const winds = document.querySelector('#winds');
  const windDirection = document.querySelector('#wind-direction');
  const humidity = document.querySelector('#humidity');
  const pressure = document.querySelector('#pressure-mb');
  date.textContent = format(new Date(Date.now()), 'MMMM dd');
  place.textContent = `${data.location.name}`;
  condition.textContent = `${data.current.condition.text}`;
  conditionIcon.src = `${data.current.condition.icon}`;
  temperatureC.textContent = `${data.current.temp_c}° C`;
  temperatureF.textContent = `${data.current.temp_f}° F`;
  feelslike.textContent = `${data.current.feelslike_c}° C`;
  winds.textContent = `${data.current.wind_kph}kph`;
  windDirection.textContent = `${data.current.wind_dir}`;
  humidity.textContent = `${data.current.humidity}`;
  pressure.textContent = `${data.current.pressure_mb}`;
}
