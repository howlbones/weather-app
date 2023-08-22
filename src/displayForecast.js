import { format } from 'date-fns';

export function displayForecast(data) {
  const days = document.querySelectorAll('.day');
  for (let i = 0; i < days.length; i++) {
    const date = days[i].querySelector('.forecast-date');
    const sunset = days[i].querySelector('.sunset');
    const moonRise = days[i].querySelector('.moon-rise');
    const rainChance = days[i].querySelector('.rain-chance');
    const forecastArr = data[i].forecast.forecastday;
    const object = forecastArr[0];
    date.textContent = format(new Date(object.date), 'MMMM dd');
    sunset.textContent = `${object.astro.sunset}`;
    moonRise.textContent = `${object.astro.moonrise}`;
    rainChance.textContent = `${object.day.daily_chance_of_rain}%`;
  }
}
