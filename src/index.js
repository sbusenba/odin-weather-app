import './style.css'



/* I am aware storing api keys on github is BAD.
I have chosen to do it because this is a free key
and obscuring it is beyond the scope of this assignment*/
const apiKey = 'ce678a1ab136ef46871798383c6d8d08';
const input = document.querySelector('#search-text');
const button = document.querySelector('#search-button');
const icon = document.querySelector('#icon-display');
const forcastBar = document.querySelector('#forcast-holder');
const switcher = document.querySelector('.units');
const selector = document.querySelector('.selector');
const display = document.querySelector('#display');
const todayWeather = document.querySelector('.weather-info');
const windicator = document.querySelector('#wind-indicator');
const windSpeed = document.querySelector('#wind-speed');
let units = 'imperial';

function downloadImage(response) {
  const iconCode = response.weather[0].icon;
  icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconCode}@4x.png`);
}

function setForcast(weatherData) {
  for (let i = 0; i < 8; i += 1) {
    if (units === 'imperial') {
      document.querySelector(`#day${i}maxtemp`).textContent = `High: ${Math.round(weatherData.daily[i].temp.max)}°F `;
      document.querySelector(`#day${i}mintemp`).textContent = `Low: ${Math.round(weatherData.daily[i].temp.min)}°F `;
    } else {
      document.querySelector(`#day${i}maxtemp`).textContent = `High: ${Math.round(weatherData.daily[i].temp.max)}°C `;
      document.querySelector(`#day${i}mintemp`).textContent = `Low: ${Math.round(weatherData.daily[i].temp.min)}°C `;
    }
    const date = new Date(weatherData.daily[i].dt * 1000);
    if (i >= 1) {
      document.querySelector(`#day${i}day`).textContent = date.toLocaleString('en-US', { weekday: 'long' });
      const iconCode = weatherData.daily[i].weather[0].icon;
      document.querySelector(`#forcast-day${i}`).style['background-image'] = `url(http://openweathermap.org/img/wn/${iconCode}@2x.png)`;
    }
    forcastBar.style.opacity = 1;
    icon.style.opacity = 1;
    display.style.opacity = 1;
  }
}

function getForecast(lon, lat) {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=${units}&appid=${apiKey}`,
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
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&exclude=hourly,minutely&units=${units}&APPID=${apiKey}`,
    { mode: 'cors' },
  )
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return 'error';
    })
    .then((weatherData) => {
      downloadImage(weatherData);
      const { description } = weatherData.weather[0];
      todayWeather.textContent = `Today, expect ${description}.`;
      console.log((weatherData.weather[0].wind_deg));
      if (units === 'imperial') {
        windSpeed.textContent = `Wind speed: ${weatherData.wind.speed} mph`;
      } else {
        windSpeed.textContent = `Wind speed: ${weatherData.wind.speed} kph`;
      }
      windicator.style.transform = `rotate(${(weatherData.wind.deg - 90)}deg)`;
      getForecast(weatherData.coord.lon, weatherData.coord.lat);
    });
}
function changeUnits() {
  if (selector.textContent === 'F') {
    selector.textContent = 'C';
    switcher.style['justify-content'] = 'flex-end';
    units = 'metric';
  } else {
    selector.textContent = 'F';
    switcher.style['justify-content'] = 'flex-start';
    units = 'imperial';
  }
  if (input.value != null) {
    getWeather();
  }
}
const keyPressed = (e)=>{
if (e.key === 'Enter'){
  getWeather()
}
}
button.addEventListener('click', getWeather);
input.addEventListener('keydown',keyPressed)
switcher.addEventListener('click', changeUnits);
