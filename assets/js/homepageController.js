!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s="./public/js/homepageController.js")}({"./public/js/components/ui.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/**\n * User interface class\n */\nclass Ui {\n\n    /**\n     * aside\n     */\n    static aside() {\n        window.onscroll = function () {\n\n            let thisHeader = document.getElementsByClassName('header')[0];\n            let thisBody = document.getElementsByTagName('body')[0];\n\n            if (window.scrollY > thisHeader.getBoundingClientRect().height) {\n                thisBody.classList.add('fixed');\n            } else {\n                thisBody.classList.remove('fixed');\n            }\n        };\n    }\n\n    /**\n     * Hamburger menu\n     */\n    static hamburgerMenu() {\n\n        let thisEl = document.querySelectorAll('[data-click=\"hamburger\"]');\n        let thisMenu = document.getElementsByClassName('nav');\n\n        if (!thisEl) {\n            throw 'not thisEl';\n        } else if (!thisMenu) {\n            throw 'not thisMenu';\n        }\n\n        /**\n         * Click on hamburger trigger\n         */\n        thisEl.forEach(item => {\n            item.addEventListener('click', event => {\n\n                let thisEl = event.target;\n\n                if (thisMenu[0].classList.contains('open')) {\n                    thisMenu[0].classList.remove('open');\n                    thisEl.classList.remove('active');\n                } else {\n                    thisMenu[0].classList.add('open');\n                    thisEl.classList.add('active');\n                }\n            });\n        });\n\n        /**\n         * Scroll nav fixed toolbar\n         */\n        thisMenu[0].addEventListener('scroll', event => {\n            let thisEl = event.target;\n            thisEl.classList.add('in-scroll');\n        });\n    }\n\n    /**\n     * Toggle box\n     */\n    static toggleBox() {\n\n        let thisEl = document.querySelectorAll('[data-click=\"toggle\"]');\n\n        if (!thisEl) {\n            throw 'not thisEl';\n        }\n\n        thisEl.forEach(item => {\n            item.addEventListener('click', () => {\n                let thisBox = item.parentNode;\n\n                if (!thisBox) {\n                    throw 'not thisBox';\n                }\n\n                if (thisBox.classList.contains('open')) {\n                    thisBox.classList.remove('open');\n                } else {\n                    thisBox.classList.add('open');\n                }\n            });\n        });\n    }\n\n    /**\n     * Close Menu if devices is smaller then 768 to see section of page\n     */\n    static closeMenu() {\n\n        let thisLinks = document.querySelectorAll('[data-click=\"reload\"]');\n        let thisTrigger = document.querySelectorAll('[data-click=\"hamburger\"]');\n\n        if (!thisLinks) {\n            return;\n        } else if (!thisTrigger) {\n            throw 'not thisTrigger';\n        }\n\n        thisLinks.forEach(item => {\n            item.addEventListener('click', event => {\n\n                if (window.innerWidth > 767) {\n                    return;\n                }\n\n                thisTrigger[0].click();\n            });\n        });\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ui);\n\n//# sourceURL=webpack:///./public/js/components/ui.js?")},"./public/js/homepageController.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ui */ "./public/js/components/ui.js");\n\n\n/**\n * HomepageController\n */\nclass HomepageController {\n    constructor(options) {\n\n        this.options = options;\n\n        try {\n            _components_ui__WEBPACK_IMPORTED_MODULE_0__["default"].aside();\n            _components_ui__WEBPACK_IMPORTED_MODULE_0__["default"].hamburgerMenu();\n            _components_ui__WEBPACK_IMPORTED_MODULE_0__["default"].toggleBox();\n            _components_ui__WEBPACK_IMPORTED_MODULE_0__["default"].closeMenu();\n        } catch (e) {\n            console.log(e);\n        }\n    }\n}\n\nnew HomepageController(\'index\');\n\n//# sourceURL=webpack:///./public/js/homepageController.js?')}});