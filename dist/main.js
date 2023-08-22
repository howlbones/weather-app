/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displayWeather.js":
/*!*******************************!*\
  !*** ./src/displayWeather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayWeather: () => (/* binding */ displayWeather)\n/* harmony export */ });\nfunction displayWeather(data) {\n  console.log(data);\n  const place = document.querySelector('#place');\n  const condition = document.querySelector('#condition');\n  const conditionIcon = document.querySelector('#condition-icon');\n  const temperatureC = document.querySelector('#temperature-celcius');\n  const temperatureF = document.querySelector('#temperature-f');\n  const feelslike = document.querySelector('#feels-like');\n  const winds = document.querySelector('#winds');\n  const windDirection = document.querySelector('#wind-direction');\n  const humidity = document.querySelector('#humidity');\n  const pressure = document.querySelector('#pressure-mb');\n  place.textContent = `${data.location.name}`;\n  condition.textContent = `${data.current.condition.text}`;\n  conditionIcon.src = `${data.current.condition.icon}`;\n  temperatureC.textContent = `${data.current.temp_c}° C`;\n  temperatureF.textContent = `${data.current.temp_f}° F`;\n  feelslike.textContent = `${data.current.feelslike_c}° C`;\n  winds.textContent = `${data.current.wind_kph}kph`;\n  windDirection.textContent = `${data.current.wind_dir}`;\n  humidity.textContent = `${data.current.humidity}`;\n  pressure.textContent = `${data.current.pressure_mb}`;\n}\n\n//# sourceURL=webpack://weather-app/./src/displayWeather.js?");

/***/ }),

/***/ "./src/fetchData.js":
/*!**************************!*\
  !*** ./src/fetchData.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchData: () => (/* binding */ fetchData)\n/* harmony export */ });\nasync function fetchData(mode, city) {\n  if (mode && city) {\n    const KEY = '9201fe35f724480e8e7115934231508';\n    const baseUrl = 'http://api.weatherapi.com/v1';\n    const modeUrl = mode === 'forecast' ? '/forecast.json' : '/search.json';\n    const data = await getData(KEY, baseUrl, modeUrl);\n    return data;\n  }\n  async function getData(KEY, baseUrl, modeUrl) {\n    try {\n      const url = `${baseUrl + modeUrl}?key=${KEY}&q=${city}`;\n      console.log(`Fetching: ${url}`);\n      const response = await fetch(url, {\n        mode: 'cors'\n      });\n      const object = await response.json();\n      return object;\n    } catch (error) {\n      console.error(error);\n    }\n  }\n}\n\n//# sourceURL=webpack://weather-app/./src/fetchData.js?");

/***/ }),

/***/ "./src/fetchGif.js":
/*!*************************!*\
  !*** ./src/fetchGif.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchGif: () => (/* binding */ fetchGif)\n/* harmony export */ });\n/* harmony import */ var _img_clear_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/clear.gif */ \"./src/img/clear.gif\");\n/* harmony import */ var _img_lightrain_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/lightrain.gif */ \"./src/img/lightrain.gif\");\n/* harmony import */ var _img_mist_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/mist.gif */ \"./src/img/mist.gif\");\n/* harmony import */ var _img_night_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/night.gif */ \"./src/img/night.gif\");\n/* harmony import */ var _img_overcast_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/overcast.gif */ \"./src/img/overcast.gif\");\n/* harmony import */ var _img_partlycloudy_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/partlycloudy.gif */ \"./src/img/partlycloudy.gif\");\n/* harmony import */ var _img_sunny_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/sunny.gif */ \"./src/img/sunny.gif\");\n\n\n\n\n\n\n\nasync function fetchGif(query, night) {\n  const giphyQuery = `${query} weather tv show`;\n  const tvImg = document.querySelector('#tv-image');\n  const windowImg = document.querySelector('#window-image');\n  if (night) {\n    windowImg.src = _img_night_gif__WEBPACK_IMPORTED_MODULE_3__;\n  } else if (query === 'Clear') {\n    windowImg.src = _img_clear_gif__WEBPACK_IMPORTED_MODULE_0__;\n  } else if (query === 'Mist') {\n    windowImg.src = _img_mist_gif__WEBPACK_IMPORTED_MODULE_2__;\n  } else if (query === 'Overcast') {\n    windowImg.src = _img_overcast_gif__WEBPACK_IMPORTED_MODULE_4__;\n  } else if (query === 'Partly cloudy') {\n    windowImg.src = _img_partlycloudy_gif__WEBPACK_IMPORTED_MODULE_5__;\n  } else {\n    const words = query.split(' ');\n    let found = false;\n    for (let i = 0; i < words.length; i++) {\n      if (words[i] === 'rain' || words[i] === 'Rain') {\n        windowImg.src = _img_lightrain_gif__WEBPACK_IMPORTED_MODULE_1__;\n        found = true;\n      }\n    }\n    if (!found) {\n      windowImg.src = _img_sunny_gif__WEBPACK_IMPORTED_MODULE_6__;\n    }\n  }\n  const KEY = 'a3oREUyuVY4pTTyJItVmhbTxxo3cMURr';\n  console.log(giphyQuery);\n  try {\n    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${KEY}&s=${giphyQuery}`, {\n      mode: 'cors'\n    }).then(response => response.json()).then(response => {\n      console.log(response);\n      tvImg.src = response.data.images.original.url;\n    });\n  } catch (error) {\n    console.log(error);\n  }\n}\n\n//# sourceURL=webpack://weather-app/./src/fetchGif.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchData */ \"./src/fetchData.js\");\n/* harmony import */ var _displayWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayWeather */ \"./src/displayWeather.js\");\n/* harmony import */ var _fetchGif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchGif */ \"./src/fetchGif.js\");\n/* harmony import */ var _img_cave_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/cave.png */ \"./src/img/cave.png\");\n/* harmony import */ var _img_eye_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/eye.png */ \"./src/img/eye.png\");\n\n\n\n\n\n\n__webpack_require__(/*! ./search.js */ \"./src/search.js\");\n(async function app() {\n  const cave = document.querySelector('#cave');\n  cave.style.width = '600px';\n  cave.src = _img_cave_png__WEBPACK_IMPORTED_MODULE_4__;\n  const eye = document.querySelector('#eye');\n  eye.src = _img_eye_png__WEBPACK_IMPORTED_MODULE_5__;\n  const initCity = 'london';\n  await (0,_fetchData__WEBPACK_IMPORTED_MODULE_1__.fetchData)('forecast', initCity).then(async responce => {\n    (0,_displayWeather__WEBPACK_IMPORTED_MODULE_2__.displayWeather)(responce);\n    if (responce.current.condition.text) {\n      if (responce.current.is_day === 0) {\n        await (0,_fetchGif__WEBPACK_IMPORTED_MODULE_3__.fetchGif)(responce.current.condition.text, 1);\n      } else {\n        await (0,_fetchGif__WEBPACK_IMPORTED_MODULE_3__.fetchGif)(responce.current.condition.text);\n      }\n    }\n  });\n  // const searchRequest = 'saint-petersburg';\n  // const searchResult = await fetchData('search', searchRequest).then(\n  //   (result) => {\n  //     console.log('Got search data:');\n  //     console.log(result[0].url);\n  //     console.log(result);\n  //     console.log('\\n');\n  //     return result;\n  //   }\n  // );\n  // const weatherData = await fetchData(\n  //   'forecast',\n  //   await searchResult[0].url\n  // ).then((responce) => {\n  //   console.log('Got forecast data:');\n  //   console.log(responce);\n  //   console.log('\\n');\n  //   return responce;\n  // });\n})();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ \"./src/fetchData.js\");\n/* harmony import */ var _displayWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayWeather */ \"./src/displayWeather.js\");\n/* harmony import */ var _fetchGif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchGif */ \"./src/fetchGif.js\");\n\n\n\n(() => {\n  const form = document.querySelector('form');\n  const input = form.querySelector('input');\n  const datalist = document.querySelector('#places');\n  input.addEventListener('input', refreshSuggestions);\n  async function refreshSuggestions() {\n    const searchRequest = input.value;\n    console.log(`searching: ${searchRequest}`);\n    while (datalist.firstChild) {\n      datalist.removeChild(datalist.lastChild);\n    }\n    if (searchRequest && searchRequest.length > 1) {\n      const searchResult = await (0,_fetchData__WEBPACK_IMPORTED_MODULE_0__.fetchData)('search', searchRequest).then(result => {\n        if (result && result.length !== 0) {\n          console.log('Got search data:');\n          console.log(result[0].url);\n          console.log(result);\n          console.log('\\n');\n          for (let i = 0; i < result.length; i++) {\n            const newOption = document.createElement('button');\n            newOption.textContent = `${result[i].name} (${result[i].country})`;\n            newOption.id = result[i].url;\n            newOption.setAttribute('country', result[i].country);\n            newOption.addEventListener('click', requestWeather);\n            datalist.appendChild(newOption);\n          }\n          return result;\n        }\n      });\n    }\n    async function requestWeather(e) {\n      const url = e.target.id;\n      console.log(url);\n      const weatherData = await (0,_fetchData__WEBPACK_IMPORTED_MODULE_0__.fetchData)('forecast', await url).then(async responce => {\n        (0,_displayWeather__WEBPACK_IMPORTED_MODULE_1__.displayWeather)(responce);\n        if (responce.current.condition.text) {\n          if (responce.current.is_day === 0) {\n            await (0,_fetchGif__WEBPACK_IMPORTED_MODULE_2__.fetchGif)(responce.current.condition.text, 1);\n          } else {\n            await (0,_fetchGif__WEBPACK_IMPORTED_MODULE_2__.fetchGif)(responce.current.condition.text);\n          }\n        }\n      });\n    }\n  }\n})();\n\n//# sourceURL=webpack://weather-app/./src/search.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n}\n\nbody {\n  height: 100vh;\n  background-color: black;\n  font-family: 'Montserrat', sans-serif;\n}\n\n.search-container {\n  position: absolute;\n  margin-top: 40px;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 3;\n}\n\nform input {\n  height: 30px;\n  font-size: 18px;\n  background-color: rgb(62, 62, 62);\n  border: none;\n  padding-left: 5px;\n  color: rgb(202, 202, 202);\n}\n\nform input:focus {\n  outline: none;\n}\n\n#places {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n}\n\n#places button {\n  border: none;\n  width: auto;\n  color: rgb(208, 208, 208);\n  background-color: rgb(37, 37, 37);\n  cursor: pointer;\n  font-size: 16px;\n  padding: 4px 10px;\n}\n\n#places button:hover {\n  background-color: rgb(29, 29, 29);\n}\n\n.display-container {\n  color: white;\n  display: flex;\n  justify-content: center;\n}\n\n.middle {\n  display: flex;\n  justify-content: center;\n}\n\n.cave-container {\n  border: solid 1px white;\n  height: 100vh;\n  width: 600px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  z-index: 2;\n}\n\n#cave {\n  border: solid 1px white;\n  z-index: 2;\n}\n\n#tv-image {\n  z-index: 1;\n  width: 200px;\n  left: 30px;\n  top: 355px;\n  position: absolute;\n}\n\n#window-image {\n  z-index: 1;\n  left: 180px;\n  top: 310px;\n  width: 250px;\n  position: absolute;\n}\n\n#eye {\n  z-index: 3;\n  width: 20px;\n  position: absolute;\n  right: 110px;\n  top: 357px;\n}\n\n.right-side,\n.left-side {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/img/cave.png":
/*!**************************!*\
  !*** ./src/img/cave.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2c4a384c0d3989ce6e36.png\";\n\n//# sourceURL=webpack://weather-app/./src/img/cave.png?");

/***/ }),

/***/ "./src/img/clear.gif":
/*!***************************!*\
  !*** ./src/img/clear.gif ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f259b9e7c0851c7aec92.gif\";\n\n//# sourceURL=webpack://weather-app/./src/img/clear.gif?");

/***/ }),

/***/ "./src/img/eye.png":
/*!*************************!*\
  !*** ./src/img/eye.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7ec489bd58a2f4cf6e84.png\";\n\n//# sourceURL=webpack://weather-app/./src/img/eye.png?");

/***/ }),

/***/ "./src/img/lightrain.gif":
/*!*******************************!*\
  !*** ./src/img/lightrain.gif ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7ac8593623eb3ee0873e.gif\";\n\n//# sourceURL=webpack://weather-app/./src/img/lightrain.gif?");

/***/ }),

/***/ "./src/img/mist.gif":
/*!**************************!*\
  !*** ./src/img/mist.gif ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"48c3ed91cbbe823d7f84.gif\";\n\n//# sourceURL=webpack://weather-app/./src/img/mist.gif?");

/***/ }),

/***/ "./src/img/night.gif":
/*!***************************!*\
  !*** ./src/img/night.gif ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"97876af47d876a25c5e4.gif\";\n\n//# sourceURL=webpack://weather-app/./src/img/night.gif?");

/***/ }),

/***/ "./src/img/overcast.gif":
/*!******************************!*\
  !*** ./src/img/overcast.gif ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"119f35ebcb9741c23d5a.gif\";\n\n//# sourceURL=webpack://weather-app/./src/img/overcast.gif?");

/***/ }),

/***/ "./src/img/partlycloudy.gif":
/*!**********************************!*\
  !*** ./src/img/partlycloudy.gif ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e41ef475bbee74f0acf0.gif\";\n\n//# sourceURL=webpack://weather-app/./src/img/partlycloudy.gif?");

/***/ }),

/***/ "./src/img/sunny.gif":
/*!***************************!*\
  !*** ./src/img/sunny.gif ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e2e1f2e8f8bea2b76cc.gif\";\n\n//# sourceURL=webpack://weather-app/./src/img/sunny.gif?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;