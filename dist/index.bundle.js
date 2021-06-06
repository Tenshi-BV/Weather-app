/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* HEADER */\n\nh1 {\n    text-align: center;\n}\n\n#header {\n    background-image: linear-gradient(to top, rgb(135, 206, 235), #00445f);\n    padding: 20px;\n}\n\n#inst {\n    text-align: center;\n}\n\n/* FORM */\n\nform {\n    background-color: rgb(135, 206, 235);\n}\n\nform, input, button {\n    font-size: 20px;\n}\n\ninput {\n    margin: 5px;\n}\n\n/* WEATHER DISPLAY */\n\n#weatherContainer {\n    display:flex;\n    flex-wrap: wrap;\n}\n\n#main {\n    width: 100%;\n    flex-shrink: 0;\n    text-align: center;\n}\n\n.widget {\n    border: 4px solid black;\n    border-radius: 3px;\n}\n\n/* TEMPERATURE */\n\n.ice {\n    background-color: #6fccf1;\n}\n.moderate {\n    background-color: #b6ff41;\n}\n.red {\n    background-color: rgb(248, 109, 45);\n}\n\n/* HUMIDITY */\n\n#humi {\n    background-image: linear-gradient(rgba(0, 0, 255, 0) var(--per), rgba(0, 0, 255, 1) var(--per));\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,WAAW;;AAEX;IACI,kBAAkB;AACtB;;AAEA;IACI,sEAAsE;IACtE,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA,SAAS;;AAET;IACI,oCAAoC;AACxC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA,oBAAoB;;AAEpB;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA,gBAAgB;;AAEhB;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,mCAAmC;AACvC;;AAEA,aAAa;;AAEb;IACI,+FAA+F;AACnG","sourcesContent":["/* HEADER */\n\nh1 {\n    text-align: center;\n}\n\n#header {\n    background-image: linear-gradient(to top, rgb(135, 206, 235), #00445f);\n    padding: 20px;\n}\n\n#inst {\n    text-align: center;\n}\n\n/* FORM */\n\nform {\n    background-color: rgb(135, 206, 235);\n}\n\nform, input, button {\n    font-size: 20px;\n}\n\ninput {\n    margin: 5px;\n}\n\n/* WEATHER DISPLAY */\n\n#weatherContainer {\n    display:flex;\n    flex-wrap: wrap;\n}\n\n#main {\n    width: 100%;\n    flex-shrink: 0;\n    text-align: center;\n}\n\n.widget {\n    border: 4px solid black;\n    border-radius: 3px;\n}\n\n/* TEMPERATURE */\n\n.ice {\n    background-color: #6fccf1;\n}\n.moderate {\n    background-color: #b6ff41;\n}\n.red {\n    background-color: rgb(248, 109, 45);\n}\n\n/* HUMIDITY */\n\n#humi {\n    background-image: linear-gradient(rgba(0, 0, 255, 0) var(--per), rgba(0, 0, 255, 1) var(--per));\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/fetch-weather.js":
/*!******************************!*\
  !*** ./src/fetch-weather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
const getWeather = (location) => {
  class Weather {
    constructor(data) {
      this.main = data.weather[0].main; // Clouds, Clear
      this.icon = data.weather[0].icon;
      this.temp = data.main.temp.toFixed(1);
      this.feels_like = data.main.feels_like.toFixed(1);
      this.humidity = data.main.humidity;
      this.speed = data.wind.speed;
      this.deg = data.wind.deg;
      this.gust = data.wind.gust;
      this.clouds = data.clouds.all; // %
      this.sunrise = new Date(data.sys.sunrise * 1000);
      this.sunset = new Date(data.sys.sunset * 1000);
      this.name = data.name;
    }
  }

  async function getWeather(name) {
    let response;
    try {
      response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=33eaa4fb488a76dcd98c62d852f4131f`,
        {
          mode: "cors",
        }
      );
      const weatherData = await response.json();
      const weather = new Weather(weatherData);
      return weather;
    } catch (error) {
      const failiure = [response.status, response.statusText];
      return failiure;
    }
  }

  return getWeather(location);
};




/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
const header = () => {
  const body = document.querySelector("body");
  const container = document.createElement("div");
  container.setAttribute("id", "header");
  container.innerHTML =
    '<h1>Weather app</h1><p id="inst">Enter a location to see its current weather.';
  body.appendChild(container);
};




/***/ }),

/***/ "./src/location-form.js":
/*!******************************!*\
  !*** ./src/location-form.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locationForm": () => (/* binding */ locationForm)
/* harmony export */ });
const locationForm = () => {
  const body = document.querySelector("body");
  const container = document.createElement("div");
  container.setAttribute("id", "formContainer");
  container.innerHTML =
    '<form onsubmit="return false"><label for="location">Location:</label><input type="text" id="location" name="name" required/><button>Look up</button></form>';
  body.appendChild(container);
};




/***/ }),

/***/ "./src/show-weather.js":
/*!*****************************!*\
  !*** ./src/show-weather.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showWeather": () => (/* binding */ showWeather)
/* harmony export */ });
const showWeather = (weather) => {
  function calcSunrise() {
    let timeH = weather.sunrise.getHours();
    if (timeH < 9) {
      timeH = "0" + timeH;
    }
    let timeM = weather.sunrise.getMinutes();
    if (timeM < 9) {
      timeM = "0" + timeM;
    }
    const time = `${timeH}:${timeM}`;
    return time;
  }

  function calcSunset() {
    let timeH = weather.sunset.getHours();
    if (timeH < 9) {
      timeH = "0" + timeH;
    }
    let timeM = weather.sunset.getMinutes();
    if (timeM < 9) {
      timeM = "0" + timeM;
    }
    const time = `${timeH}:${timeM}`;
    return time;
  }

  function temperatureColor() {
    const temp = weather.temp;
    if (temp < 0) {
      tempColor = "ice";
    } else if (temp < 30) {
      tempColor = "moderate";
    } else {
      tempColor = "red";
    }
  }

  const humi1 = (100 - weather.humidity) + "%";
  console.log(humi1);
  

  const sunrise = calcSunrise();
  const sunset = calcSunset();

  let tempColor;
  temperatureColor();


  const body = document.querySelector("body");

  const oldContainer = document.querySelector("#weatherContainer");
  if (oldContainer !== null) {
    oldContainer.remove();
  }

  const container = document.createElement("div");
  container.setAttribute("id", "weatherContainer");
  body.appendChild(container);

  const main = document.createElement("div");
  main.setAttribute("id", "main");
  main.innerHTML = `<h2>${weather.name}</h2><img src="http://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="icon for ${weather.main}"><p>${weather.main}</p>`;
  container.appendChild(main);

  const temp = document.createElement("div");
  temp.setAttribute("id", "temp");
  temp.classList.add("widget", tempColor);
  temp.innerHTML = `<p>Temperature: ${weather.temp}°C</p><p>Feels like: ${weather.feels_like}°C</p>`;
  container.appendChild(temp);

  const humi = document.createElement("div");
  humi.setAttribute("id", "humi");
  humi.classList.add("widget");
  humi.innerHTML = `<p>Humidity: ${weather.humidity}%</p>`;
  container.appendChild(humi);
  humi.style.setProperty('--per', humi1);

  const wind = document.createElement("div");
  wind.setAttribute("id", "wind");
  wind.classList.add("widget");
  wind.innerHTML = `<p>Wind speed: ${weather.speed.toFixed(1)} m/s (${(
    weather.speed / 3.6
  ).toFixed(1)} km/h) ${weather.deg}°</p><p>Gust speed: ${weather.gust.toFixed(
    1
  )} m/s (${(weather.gust / 3.6).toFixed(1)} km/h)</p>`;
  container.appendChild(wind);

  const cloud = document.createElement("div");
  cloud.setAttribute("id", "cloud");
  cloud.classList.add("widget");
  cloud.innerHTML = `<p>Cloudiness: ${weather.clouds}%</p>`;
  container.appendChild(cloud);

  const sun = document.createElement("div");
  sun.setAttribute("id", "sun");
  sun.classList.add("widget");
  sun.innerHTML = `<p>Sunrise: ${sunrise}</p><p>Sunset: ${sunset}</p>`;
  container.appendChild(sun);
};




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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _fetch_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-weather */ "./src/fetch-weather.js");
/* harmony import */ var _location_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location-form */ "./src/location-form.js");
/* harmony import */ var _show_weather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-weather */ "./src/show-weather.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.js */ "./src/header.js");






// CALL BY CITY NAME
// api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid={API key}
// API KEY
// 33eaa4fb488a76dcd98c62d852f4131f
// TRY THIS: http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=33eaa4fb488a76dcd98c62d852f4131f
// npm run build

(function () {
  let location;
  let currentWeather;

  async function getCurrentWeather(location) {
    currentWeather = await (0,_fetch_weather__WEBPACK_IMPORTED_MODULE_1__.getWeather)(location);
    if (Array.isArray(currentWeather)) {
      if (currentWeather[0] === 404) {
        console.log(currentWeather);
        alert("404, location not found");
      } else {
        console.log(currentWeather);
        alert("unknown error");
      }
    } else {
      (0,_show_weather__WEBPACK_IMPORTED_MODULE_3__.showWeather)(currentWeather);
    }
  }

  function buttonClick() {
    location = document.getElementById("location").value;
    if (location.length === 0) {
      return;
    }
    getCurrentWeather(location);
  }

  (0,_header_js__WEBPACK_IMPORTED_MODULE_4__.header)();
  (0,_location_form__WEBPACK_IMPORTED_MODULE_2__.locationForm)();

  const btn = document.querySelector("button");
  btn.addEventListener("click", () => {
    buttonClick();
  });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2gtd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbG9jYXRpb24tZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zaG93LXdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdz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REFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUN3QjtBQUNFO0FBQ0Y7QUFDUjs7QUFFckM7QUFDQSw4Q0FBOEMsVUFBVSxxQkFBcUI7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDBEQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxNQUFNLDBEQUFXO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxrREFBTTtBQUNSLEVBQUUsNERBQVk7O0FBRWQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBIRUFERVIgKi9cXG5cXG5oMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYigxMzUsIDIwNiwgMjM1KSwgIzAwNDQ1Zik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbiNpbnN0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBGT1JNICovXFxuXFxuZm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsIDIwNiwgMjM1KTtcXG59XFxuXFxuZm9ybSwgaW5wdXQsIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLyogV0VBVEhFUiBESVNQTEFZICovXFxuXFxuI3dlYXRoZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuI21haW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndpZGdldCB7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi8qIFRFTVBFUkFUVVJFICovXFxuXFxuLmljZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZmNjZjE7XFxufVxcbi5tb2RlcmF0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNmZmNDE7XFxufVxcbi5yZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxMDksIDQ1KTtcXG59XFxuXFxuLyogSFVNSURJVFkgKi9cXG5cXG4jaHVtaSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDI1NSwgMCkgdmFyKC0tcGVyKSwgcmdiYSgwLCAwLCAyNTUsIDEpIHZhcigtLXBlcikpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQVc7O0FBRVg7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzRUFBc0U7SUFDdEUsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSxTQUFTOztBQUVUO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUEsZ0JBQWdCOztBQUVoQjtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUEsYUFBYTs7QUFFYjtJQUNJLCtGQUErRjtBQUNuR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBIRUFERVIgKi9cXG5cXG5oMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYigxMzUsIDIwNiwgMjM1KSwgIzAwNDQ1Zik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbiNpbnN0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBGT1JNICovXFxuXFxuZm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsIDIwNiwgMjM1KTtcXG59XFxuXFxuZm9ybSwgaW5wdXQsIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLyogV0VBVEhFUiBESVNQTEFZICovXFxuXFxuI3dlYXRoZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuI21haW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndpZGdldCB7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi8qIFRFTVBFUkFUVVJFICovXFxuXFxuLmljZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZmNjZjE7XFxufVxcbi5tb2RlcmF0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNmZmNDE7XFxufVxcbi5yZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxMDksIDQ1KTtcXG59XFxuXFxuLyogSFVNSURJVFkgKi9cXG5cXG4jaHVtaSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDI1NSwgMCkgdmFyKC0tcGVyKSwgcmdiYSgwLCAwLCAyNTUsIDEpIHZhcigtLXBlcikpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNvbnN0IGdldFdlYXRoZXIgPSAobG9jYXRpb24pID0+IHtcbiAgY2xhc3MgV2VhdGhlciB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgdGhpcy5tYWluID0gZGF0YS53ZWF0aGVyWzBdLm1haW47IC8vIENsb3VkcywgQ2xlYXJcbiAgICAgIHRoaXMuaWNvbiA9IGRhdGEud2VhdGhlclswXS5pY29uO1xuICAgICAgdGhpcy50ZW1wID0gZGF0YS5tYWluLnRlbXAudG9GaXhlZCgxKTtcbiAgICAgIHRoaXMuZmVlbHNfbGlrZSA9IGRhdGEubWFpbi5mZWVsc19saWtlLnRvRml4ZWQoMSk7XG4gICAgICB0aGlzLmh1bWlkaXR5ID0gZGF0YS5tYWluLmh1bWlkaXR5O1xuICAgICAgdGhpcy5zcGVlZCA9IGRhdGEud2luZC5zcGVlZDtcbiAgICAgIHRoaXMuZGVnID0gZGF0YS53aW5kLmRlZztcbiAgICAgIHRoaXMuZ3VzdCA9IGRhdGEud2luZC5ndXN0O1xuICAgICAgdGhpcy5jbG91ZHMgPSBkYXRhLmNsb3Vkcy5hbGw7IC8vICVcbiAgICAgIHRoaXMuc3VucmlzZSA9IG5ldyBEYXRlKGRhdGEuc3lzLnN1bnJpc2UgKiAxMDAwKTtcbiAgICAgIHRoaXMuc3Vuc2V0ID0gbmV3IERhdGUoZGF0YS5zeXMuc3Vuc2V0ICogMTAwMCk7XG4gICAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihuYW1lKSB7XG4gICAgbGV0IHJlc3BvbnNlO1xuICAgIHRyeSB7XG4gICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bmFtZX0mdW5pdHM9bWV0cmljJmFwcGlkPTMzZWFhNGZiNDg4YTc2ZGNkOThjNjJkODUyZjQxMzFmYCxcbiAgICAgICAge1xuICAgICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zdCB3ZWF0aGVyID0gbmV3IFdlYXRoZXIod2VhdGhlckRhdGEpO1xuICAgICAgcmV0dXJuIHdlYXRoZXI7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IGZhaWxpdXJlID0gW3Jlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2Uuc3RhdHVzVGV4dF07XG4gICAgICByZXR1cm4gZmFpbGl1cmU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFdlYXRoZXIobG9jYXRpb24pO1xufTtcblxuZXhwb3J0IHsgZ2V0V2VhdGhlciB9O1xuIiwiY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlclwiKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9XG4gICAgJzxoMT5XZWF0aGVyIGFwcDwvaDE+PHAgaWQ9XCJpbnN0XCI+RW50ZXIgYSBsb2NhdGlvbiB0byBzZWUgaXRzIGN1cnJlbnQgd2VhdGhlci4nO1xuICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59O1xuXG5leHBvcnQgeyBoZWFkZXIgfTtcbiIsImNvbnN0IGxvY2F0aW9uRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtQ29udGFpbmVyXCIpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID1cbiAgICAnPGZvcm0gb25zdWJtaXQ9XCJyZXR1cm4gZmFsc2VcIj48bGFiZWwgZm9yPVwibG9jYXRpb25cIj5Mb2NhdGlvbjo8L2xhYmVsPjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibG9jYXRpb25cIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkLz48YnV0dG9uPkxvb2sgdXA8L2J1dHRvbj48L2Zvcm0+JztcbiAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufTtcblxuZXhwb3J0IHsgbG9jYXRpb25Gb3JtIH07XG4iLCJjb25zdCBzaG93V2VhdGhlciA9ICh3ZWF0aGVyKSA9PiB7XG4gIGZ1bmN0aW9uIGNhbGNTdW5yaXNlKCkge1xuICAgIGxldCB0aW1lSCA9IHdlYXRoZXIuc3VucmlzZS5nZXRIb3VycygpO1xuICAgIGlmICh0aW1lSCA8IDkpIHtcbiAgICAgIHRpbWVIID0gXCIwXCIgKyB0aW1lSDtcbiAgICB9XG4gICAgbGV0IHRpbWVNID0gd2VhdGhlci5zdW5yaXNlLmdldE1pbnV0ZXMoKTtcbiAgICBpZiAodGltZU0gPCA5KSB7XG4gICAgICB0aW1lTSA9IFwiMFwiICsgdGltZU07XG4gICAgfVxuICAgIGNvbnN0IHRpbWUgPSBgJHt0aW1lSH06JHt0aW1lTX1gO1xuICAgIHJldHVybiB0aW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FsY1N1bnNldCgpIHtcbiAgICBsZXQgdGltZUggPSB3ZWF0aGVyLnN1bnNldC5nZXRIb3VycygpO1xuICAgIGlmICh0aW1lSCA8IDkpIHtcbiAgICAgIHRpbWVIID0gXCIwXCIgKyB0aW1lSDtcbiAgICB9XG4gICAgbGV0IHRpbWVNID0gd2VhdGhlci5zdW5zZXQuZ2V0TWludXRlcygpO1xuICAgIGlmICh0aW1lTSA8IDkpIHtcbiAgICAgIHRpbWVNID0gXCIwXCIgKyB0aW1lTTtcbiAgICB9XG4gICAgY29uc3QgdGltZSA9IGAke3RpbWVIfToke3RpbWVNfWA7XG4gICAgcmV0dXJuIHRpbWU7XG4gIH1cblxuICBmdW5jdGlvbiB0ZW1wZXJhdHVyZUNvbG9yKCkge1xuICAgIGNvbnN0IHRlbXAgPSB3ZWF0aGVyLnRlbXA7XG4gICAgaWYgKHRlbXAgPCAwKSB7XG4gICAgICB0ZW1wQ29sb3IgPSBcImljZVwiO1xuICAgIH0gZWxzZSBpZiAodGVtcCA8IDMwKSB7XG4gICAgICB0ZW1wQ29sb3IgPSBcIm1vZGVyYXRlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlbXBDb2xvciA9IFwicmVkXCI7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaHVtaTEgPSAoMTAwIC0gd2VhdGhlci5odW1pZGl0eSkgKyBcIiVcIjtcbiAgY29uc29sZS5sb2coaHVtaTEpO1xuICBcblxuICBjb25zdCBzdW5yaXNlID0gY2FsY1N1bnJpc2UoKTtcbiAgY29uc3Qgc3Vuc2V0ID0gY2FsY1N1bnNldCgpO1xuXG4gIGxldCB0ZW1wQ29sb3I7XG4gIHRlbXBlcmF0dXJlQ29sb3IoKTtcblxuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICBjb25zdCBvbGRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYXRoZXJDb250YWluZXJcIik7XG4gIGlmIChvbGRDb250YWluZXIgIT09IG51bGwpIHtcbiAgICBvbGRDb250YWluZXIucmVtb3ZlKCk7XG4gIH1cblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWF0aGVyQ29udGFpbmVyXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluXCIpO1xuICBtYWluLmlubmVySFRNTCA9IGA8aDI+JHt3ZWF0aGVyLm5hbWV9PC9oMj48aW1nIHNyYz1cImh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlci5pY29ufUAyeC5wbmdcIiBhbHQ9XCJpY29uIGZvciAke3dlYXRoZXIubWFpbn1cIj48cD4ke3dlYXRoZXIubWFpbn08L3A+YDtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuXG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGVtcFwiKTtcbiAgdGVtcC5jbGFzc0xpc3QuYWRkKFwid2lkZ2V0XCIsIHRlbXBDb2xvcik7XG4gIHRlbXAuaW5uZXJIVE1MID0gYDxwPlRlbXBlcmF0dXJlOiAke3dlYXRoZXIudGVtcH3CsEM8L3A+PHA+RmVlbHMgbGlrZTogJHt3ZWF0aGVyLmZlZWxzX2xpa2V9wrBDPC9wPmA7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wKTtcblxuICBjb25zdCBodW1pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaHVtaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImh1bWlcIik7XG4gIGh1bWkuY2xhc3NMaXN0LmFkZChcIndpZGdldFwiKTtcbiAgaHVtaS5pbm5lckhUTUwgPSBgPHA+SHVtaWRpdHk6ICR7d2VhdGhlci5odW1pZGl0eX0lPC9wPmA7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChodW1pKTtcbiAgaHVtaS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wZXInLCBodW1pMSk7XG5cbiAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdpbmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3aW5kXCIpO1xuICB3aW5kLmNsYXNzTGlzdC5hZGQoXCJ3aWRnZXRcIik7XG4gIHdpbmQuaW5uZXJIVE1MID0gYDxwPldpbmQgc3BlZWQ6ICR7d2VhdGhlci5zcGVlZC50b0ZpeGVkKDEpfSBtL3MgKCR7KFxuICAgIHdlYXRoZXIuc3BlZWQgLyAzLjZcbiAgKS50b0ZpeGVkKDEpfSBrbS9oKSAke3dlYXRoZXIuZGVnfcKwPC9wPjxwPkd1c3Qgc3BlZWQ6ICR7d2VhdGhlci5ndXN0LnRvRml4ZWQoXG4gICAgMVxuICApfSBtL3MgKCR7KHdlYXRoZXIuZ3VzdCAvIDMuNikudG9GaXhlZCgxKX0ga20vaCk8L3A+YDtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmQpO1xuXG4gIGNvbnN0IGNsb3VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2xvdWQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjbG91ZFwiKTtcbiAgY2xvdWQuY2xhc3NMaXN0LmFkZChcIndpZGdldFwiKTtcbiAgY2xvdWQuaW5uZXJIVE1MID0gYDxwPkNsb3VkaW5lc3M6ICR7d2VhdGhlci5jbG91ZHN9JTwvcD5gO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvdWQpO1xuXG4gIGNvbnN0IHN1biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1blwiKTtcbiAgc3VuLmNsYXNzTGlzdC5hZGQoXCJ3aWRnZXRcIik7XG4gIHN1bi5pbm5lckhUTUwgPSBgPHA+U3VucmlzZTogJHtzdW5yaXNlfTwvcD48cD5TdW5zZXQ6ICR7c3Vuc2V0fTwvcD5gO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3VuKTtcbn07XG5cbmV4cG9ydCB7IHNob3dXZWF0aGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi9mZXRjaC13ZWF0aGVyXCI7XG5pbXBvcnQgeyBsb2NhdGlvbkZvcm0gfSBmcm9tIFwiLi9sb2NhdGlvbi1mb3JtXCI7XG5pbXBvcnQgeyBzaG93V2VhdGhlciB9IGZyb20gXCIuL3Nob3ctd2VhdGhlclwiO1xuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyLmpzXCI7XG5cbi8vIENBTEwgQlkgQ0lUWSBOQU1FXG4vLyBhcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT17Y2l0eSBuYW1lfSZ1bml0cz1tZXRyaWMmYXBwaWQ9e0FQSSBrZXl9XG4vLyBBUEkgS0VZXG4vLyAzM2VhYTRmYjQ4OGE3NmRjZDk4YzYyZDg1MmY0MTMxZlxuLy8gVFJZIFRISVM6IGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1Mb25kb24sdWsmdW5pdHM9bWV0cmljJmFwcGlkPTMzZWFhNGZiNDg4YTc2ZGNkOThjNjJkODUyZjQxMzFmXG4vLyBucG0gcnVuIGJ1aWxkXG5cbihmdW5jdGlvbiAoKSB7XG4gIGxldCBsb2NhdGlvbjtcbiAgbGV0IGN1cnJlbnRXZWF0aGVyO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKGxvY2F0aW9uKSB7XG4gICAgY3VycmVudFdlYXRoZXIgPSBhd2FpdCBnZXRXZWF0aGVyKGxvY2F0aW9uKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjdXJyZW50V2VhdGhlcikpIHtcbiAgICAgIGlmIChjdXJyZW50V2VhdGhlclswXSA9PT0gNDA0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyKTtcbiAgICAgICAgYWxlcnQoXCI0MDQsIGxvY2F0aW9uIG5vdCBmb3VuZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyKTtcbiAgICAgICAgYWxlcnQoXCJ1bmtub3duIGVycm9yXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzaG93V2VhdGhlcihjdXJyZW50V2VhdGhlcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYnV0dG9uQ2xpY2soKSB7XG4gICAgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uXCIpLnZhbHVlO1xuICAgIGlmIChsb2NhdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ2V0Q3VycmVudFdlYXRoZXIobG9jYXRpb24pO1xuICB9XG5cbiAgaGVhZGVyKCk7XG4gIGxvY2F0aW9uRm9ybSgpO1xuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ1dHRvbkNsaWNrKCk7XG4gIH0pO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=