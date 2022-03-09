/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const apiKey = 'ce678a1ab136ef46871798383c6d8d08';\nconst input = document.querySelector('#search-text');\nconst button = document.querySelector('#search-button');\nconst icon = document.querySelector('#icon-display');\nconst forcastBar = document.querySelector('#forcast-holder');\nconst todayDisplay = document.querySelector('#today-display');\nconst display = document.querySelector('#display');\nfunction downloadImage(response) {\n  const iconCode = response.weather[0].icon;\n  icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconCode}@4x.png`);\n}\n\nfunction setForcast(weatherData) {\n  for (let i = 0; i < 8; i += 1) {\n    document.querySelector(`#day${i}maxtemp`).textContent = weatherData.daily[i].temp.max;\n    document.querySelector(`#day${i}mintemp`).textContent = weatherData.daily[i].temp.min;\n\n    const date = new Date(weatherData.daily[i].dt * 1000);\n    document.querySelector(`#day${i}day`).textContent = date.toLocaleString('en-US', { weekday: 'long' });\n    forcastBar.style.opacity = 1;\n    icon.style.opacity = 1;\n    display.style.opacity = 1;\n  }\n}\n\nfunction getForecast(lon, lat) {\n  fetch(\n    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`,\n    { mode: 'cors' },\n  ).then((response) => {\n    if (response.status === 200) {\n      return response.json();\n    }\n    return 'error';\n  })\n    .then((response) => {\n      console.log(response);\n      setForcast(response);\n    });\n}\nfunction getWeather() {\n  fetch(\n    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&APPID=${apiKey}`,\n    { mode: 'cors' },\n  )\n    .then((response) => {\n      if (response.status === 200) {\n        return response.json();\n      }\n      return 'error';\n    })\n    .then((response) => {\n      downloadImage(response);\n      getForecast(response.coord.lon, response.coord.lat);\n    });\n}\n\nbutton.addEventListener('click', getWeather);\n\n\n//# sourceURL=webpack://odin-weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;