/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/homepageController.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/components/ui.js":
/*!************************************!*\
  !*** ./public/js/components/ui.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * User interface class\n */\nclass Ui {\n\n    /**\n     * aside\n     */\n    static aside() {\n        window.onscroll = function () {\n\n            let thisHeader = document.getElementsByClassName('header')[0];\n            let thisBody = document.getElementsByTagName('body')[0];\n\n            if (window.scrollY > thisHeader.getBoundingClientRect().height) {\n                thisBody.classList.add('fixed');\n            } else {\n                thisBody.classList.remove('fixed');\n            }\n        };\n    }\n\n    /**\n     * Hamburger menu\n     */\n    static hamburgerMenu() {\n\n        let thisEl = document.querySelectorAll('[data-click=\"hamburger\"]');\n        let thisMenu = document.getElementsByClassName('nav');\n\n        if (!thisEl) {\n            throw 'not thisEl';\n        } else if (!thisMenu) {\n            throw 'not thisMenu';\n        }\n\n        /**\n         * Click on hamburger trigger\n         */\n        thisEl.forEach(item => {\n            item.addEventListener('click', event => {\n\n                let thisEl = event.target;\n\n                if (thisMenu[0].classList.contains('open')) {\n                    thisMenu[0].classList.remove('open');\n                    thisEl.classList.remove('active');\n                } else {\n                    thisMenu[0].classList.add('open');\n                    thisEl.classList.add('active');\n                }\n            });\n        });\n\n        /**\n         * Scroll nav fixed toolbar\n         */\n        thisMenu[0].addEventListener('scroll', event => {\n            let thisEl = event.target;\n            thisEl.classList.add('in-scroll');\n        });\n    }\n\n    /**\n     * Toggle box\n     */\n    static toggleBox() {\n\n        let thisEl = document.querySelectorAll('[data-click=\"toggle\"]');\n\n        if (!thisEl) {\n            throw 'not thisEl';\n        }\n\n        thisEl.forEach(item => {\n            item.addEventListener('click', () => {\n                let thisBox = item.parentNode;\n\n                if (!thisBox) {\n                    throw 'not thisBox';\n                }\n\n                if (thisBox.classList.contains('open')) {\n                    thisBox.classList.remove('open');\n                } else {\n                    thisBox.classList.add('open');\n                }\n            });\n        });\n    }\n\n    /**\n     * pageReload\n     */\n    static pageReload() {\n        let thisLinks = document.querySelectorAll('[data-click=\"reload\"]');\n\n        if (!thisLinks) {\n            return;\n        }\n\n        thisLinks.forEach(item => {\n            item.addEventListener('click', () => {\n\n                if (window.outerWidth > 767) {\n                    return;\n                }\n\n                location.reload();\n            });\n        });\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ui);\n\n//# sourceURL=webpack:///./public/js/components/ui.js?");

/***/ }),

/***/ "./public/js/homepageController.js":
/*!*****************************************!*\
  !*** ./public/js/homepageController.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ui */ \"./public/js/components/ui.js\");\n\n\n/**\n * HomepageController\n */\nclass HomepageController {\n    constructor(options) {\n\n        this.options = options;\n\n        try {\n            _components_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aside();\n            _components_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hamburgerMenu();\n            _components_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleBox();\n            _components_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pageReload();\n        } catch (e) {\n            console.log(e);\n        }\n    }\n}\n\nnew HomepageController('index');\n\n//# sourceURL=webpack:///./public/js/homepageController.js?");

/***/ })

/******/ });