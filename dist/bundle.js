/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  font-family: 'Comfortaa', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nheader {\r\n  border: 1px solid black;\r\n  height: 90px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  color: #fff;\r\n  background: rgba(13, 211, 130, 255);\r\n  border-radius: 15px;\r\n  padding: 0.5rem 0.7rem;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n}\r\n\r\n.navigation {\r\n  margin: 0 auto;\r\n  width: 60%;\r\n  flex-direction: row-reverse;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.navigation img {\r\n  height: 60px;\r\n}\r\n\r\nul > * {\r\n  list-style: none;\r\n  margin-left: 35px;\r\n}\r\n\r\nul > li > a {\r\n  margin: 1rem 0;\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\nul > li:nth-child(1) a {\r\n  text-decoration: underline;\r\n  font-weight: 700;\r\n}\r\n\r\nfooter {\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 48px;\r\n  background: #fff;\r\n  border-top: 1px solid black;\r\n}\r\n\r\nfooter p {\r\n  text-align: center;\r\n}\r\n\r\n.main-container {\r\n  margin: 20px auto 60px auto;\r\n  flex-wrap: wrap;\r\n  width: 60%;\r\n  gap: 30px;\r\n}\r\n\r\n.temp {\r\n  color: #0194a2;\r\n  font-size: 60px;\r\n  font-weight: 500;\r\n  margin: 0;\r\n  padding-block: 60px 10px;\r\n}\r\n\r\n.card {\r\n  position: relative;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  flex-basis: 150px;\r\n  flex-grow: 1;\r\n  padding: 20px;\r\n  border-radius: 15px;\r\n  border: 1px solid rgba(13, 211, 130, 255);\r\n}\r\n\r\n.card .forecast {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n.txt {\r\n  align-items: center;\r\n}\r\n\r\n.close-btn {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  left: 44.5%;\r\n  width: fit-content;\r\n  padding: 20px;\r\n  border-radius: 50%;\r\n  background: rgba(13, 211, 130, 255);\r\n}\r\n\r\n.close-btn > span {\r\n  position: absolute;\r\n  height: 2px;\r\n  width: 20px;\r\n  border-radius: 10px;\r\n  background: #fff;\r\n}\r\n\r\n.close-btn > span:nth-child(1) {\r\n  transform: rotate(45deg);\r\n  bottom: 50%;\r\n}\r\n\r\n.close-btn > span:nth-child(2) {\r\n  transform: rotate(-45deg);\r\n  bottom: 50%;\r\n}\r\n\r\n.popup {\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background: #fff;\r\n  position: fixed;\r\n  padding: 30px;\r\n  width: 65%;\r\n  margin: 0 auto;\r\n  top: 7%;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 5%;\r\n  border: 2px solid rgba(13, 211, 130, 255);\r\n  border-radius: 15px;\r\n  z-index: 1;\r\n  overflow: auto;\r\n}\r\n\r\n.popup::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.popup.show {\r\n  display: flex;\r\n}\r\n\r\n.popup > ul {\r\n  padding: 0;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 5px;\r\n}\r\n\r\n.popup > ul > li {\r\n  list-style: none;\r\n  flex-basis: 35%;\r\n  flex-grow: 1;\r\n}\r\n\r\n.comments {\r\n  display: flex;\r\n  width: 50%;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n\r\n.comments h1 {\r\n  align-self: center;\r\n}\r\n\r\n.comments > ul {\r\n  margin: 0 auto !important;\r\n}\r\n\r\n.comments > ul > li {\r\n  padding: 3px !important;\r\n}\r\n\r\n.comments > ul > li,\r\n.comments > ul {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.comment-form > button {\r\n  align-self: flex-start;\r\n}\r\n\r\n::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  padding: 6px 10px;\r\n  border-radius: 15px;\r\n  border-bottom-right-radius: 0;\r\n  border: 1px solid rgba(13, 211, 130, 255);\r\n}\r\n\r\n:is(input, textarea):focus {\r\n  outline: none;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a27195ad504a77c275a.svg";

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d60aaea715a4d564778.svg";

/***/ })
/******/ 	]);
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _thunder_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _like_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);




const popup = document.querySelector('.popup');
const navigation = document.querySelector('.navigation');
const img = document.createElement('img');
img.setAttribute('src', _thunder_svg__WEBPACK_IMPORTED_MODULE_1__);
navigation.appendChild(img);

const likeApiURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GRWzq7F1QiyQiW4Miwtn/likes/';
const commentsApiURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GRWzq7F1QiyQiW4Miwtn/comments/';
const sendLikes = async (id) => {
  let response;
  if (id) {
    response = await fetch(likeApiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
      }),
    })
      .then((response) => response.text())
      .then((result) => {
        if (result === 'Created') {
          return { error: false, data: result };
        }
        return { error: true, data: result };
      })
      .catch((error) => ({ error: true, data: error }));
  } else {
    response = { error: true, data: 'missing id' };
  }
  return response;
};

const displayLike = async (id) => {
  await fetch(likeApiURL).then((res) => res.text())
    .then((info) => {
      if (info && info.length > 1) {
        let likes = JSON.parse(info);
        likes = likes.filter((data) => data.item_id === id);
        if (likes.length > 0) {
          document.querySelector(`.like-count[data='${id}']`).innerText = `${likes[0].likes} likes`;
        }
      }
    });
};
const displayLikes = () => {
  const likeCounters = document.querySelectorAll('.like-count');
  likeCounters.forEach((el) => {
    const id = el.getAttribute('data');
    displayLike(id);
  });
};

const displayComments = (id) => {
  if (id) {
    const commentsSection = document.querySelector('.comments-list');
    const commentcounter = document.querySelector('.comments-title')
    if (commentsSection) {
      fetch(`${commentsApiURL}?item_id=${id}`)
        .then((res) => res.json())
        .then((result) => {
          if (result.error) {
            commentcounter.innerHTML = `Comments(0)`
            if (result.error.status === 400) {
              commentsSection.innerHTML = 'No comments have been posted yet.';
            } else {
              commentsSection.innerHTML = 'Comments cannot be displayed:';
            }
          } else {
            result.forEach((commentData) => {
              console.log(commentData)
              const { creation_date: date, username: user, comment: message } = commentData;
              commentsSection.innerHTML += `<li>${date} ${user}: ${message}</li>`;
              commentcounter.innerHTML = `Comments(${result.length})`
            });
          }
        }).catch(() => {
          commentsSection.innerHTML = 'Comments could not be fetched.';
        });
    }
  }
};

const populateUI = async () => {
  await fetch('https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,30&appid=623e557fbf15d070be5435e1d2494617')
    .then((response) => response.json())
    .then((result) => {
      const cityCount = document.querySelector('.city-counter');
      cityCount.innerText = `${result.list.length}`;
      result.list.forEach((city) => {
        const mainContainer = document.querySelector('.main-container');
        const cardTemp = `
          <div class="card d-flex">
          <p class="temp">${Math.floor(city.main.temp)}&#8451;</p>
          <img class="forecast" src="https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png" alt="${city.weather[0].main}">
            <div class="txt-content">
              <p>${city.name}</p>
              <span class="txt d-flex"><img class="like" src="${_like_svg__WEBPACK_IMPORTED_MODULE_2__}" data="${city.id}"><p class="like-count" data=${city.id}>0 likes</p></span>
            </div>
          <button id="${city.id}" class="popupbtn" type="button">Comments</button>
          </div>
        `;
        mainContainer.innerHTML += cardTemp;
      });
      displayLikes();
      // like item
      const likeIcons = document.querySelectorAll('.like');
      likeIcons.forEach((el) => {
        const id = el.getAttribute('data');
        el.addEventListener('click', () => {
          sendLikes(id).then((res) => {
            if (res.error === false) {
              displayLikes();
            }
          });
        });
      });
      const popupComments = async (id) => {
        await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=623e557fbf15d070be5435e1d2494617`)
          .then((response) => response.json())
          .then((data) => {
            const popupContainer = document.querySelector('.popup');
            const popupTemplate = `
            <button class="close-btn">
              <span></span>
              <span></span>
            </button>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="${data.weather[0].main}">
            <h1>${data.name}</h1>
            <ul>
              <li><p>Temp: ${Math.floor(data.main.temp)};</p></li>
              <li><p>Weather description: ${data.weather[0].description}</p></li>
              <li><p>feels like: ${Math.floor(data.main.feels_like)};</p></li>
              <li><p>Main: ${data.weather[0].main}</p></li>
            </ul>
            <div class="comments">
              <h1 class="comments-title">Comments()</h1>
              <ul class="comments-list" id="count">
              </ul>
            </div>
            <form class="comment-form" index=${data.id}>
              <h1>Add a comment</h1>
              <input id="name" type="text" placeholder="Your name">
              <textarea id="comment" type="text" placeholder="Your insights" rows="6"></textarea>
              <button type="submit">Comment</button>
            </form>
            `;
            popupContainer.innerHTML = popupTemplate;
            displayComments(data.id);
            const closebtn = document.querySelector('.close-btn');
            closebtn.addEventListener('click', () => {
              popup.classList.toggle('show');
            });
          });
      };
      const popupbtns = document.querySelectorAll('.popupbtn');
      popupbtns.forEach((popupbtn) => {
        popupbtn.addEventListener('click', (e) => {
          popup.classList.toggle('show');
          popupComments(e.target.getAttribute('id'));
        });
      });
    });
};
populateUI();

})();

/******/ })()
;