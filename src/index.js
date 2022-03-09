const apiKey = 'ce678a1ab136ef46871798383c6d8d08';
const input = document.querySelector('#search-text');
const button = document.querySelector('#search-button');
const icon = document.querySelector('#icon-display');
const forcastBar = document.querySelector('#forcast-holder');
const todayDisplay = document.querySelector('#today-display');
const display = document.querySelector('#display');
function downloadImage(response) {
  const iconCode = response.weather[0].icon;
  icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconCode}@4x.png`);
}

function setForcast(weatherData) {
  for (let i = 0; i < 8; i += 1) {
    document.querySelector(`#day${i}maxtemp`).textContent = weatherData.daily[i].temp.max;
    document.querySelector(`#day${i}mintemp`).textContent = weatherData.daily[i].temp.min;

    const date = new Date(weatherData.daily[i].dt * 1000);
    document.querySelector(`#day${i}day`).textContent = date.toLocaleString('en-US', { weekday: 'long' });
    forcastBar.style.opacity = 1;
    icon.style.opacity = 1;
    display.style.opacity = 1;
  }
}

function getForecast(lon, lat) {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`,
    { mode: 'cors' },
  ).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    return 'error';
  })
    .then((response) => {
      console.log(response);
      setForcast(response);
    });
}
function getWeather() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&APPID=${apiKey}`,
    { mode: 'cors' },
  )
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return 'error';
    })
    .then((response) => {
      downloadImage(response);
      getForecast(response.coord.lon, response.coord.lat);
    });
}

button.addEventListener('click', getWeather);
