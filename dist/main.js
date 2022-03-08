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

eval("const apiKey = \"ce678a1ab136ef46871798383c6d8d08\"\nlet input = document.querySelector('#search-text')\nlet button = document.querySelector('#search-button')\nlet icon = document.querySelector(\"#icon-display\")\nfunction downloadImage(response){\n    let iconCode = response.weather[0].icon\n    icon.setAttribute(\"src\", `http://openweathermap.org/img/wn/${iconCode}@4x.png`)\n}\n\n\n\n\n\nfunction getWeather(){\n    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&APPID=${apiKey}`,\n    {mode:'cors'})\n     .then((response) => {\n        console.log (response)\n        console.log (`Response Code: ${response.status}`)\n        if (response.status == 200){\n            return response.json();\n        }\n        \n    })\n    .then((response)=>{\n        console.log (response)\n        downloadImage(response)\n\n    })\n}\n\nbutton.addEventListener(\"click\",getWeather)\n\n//# sourceURL=webpack://odin-weather-app/./src/index.js?");

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