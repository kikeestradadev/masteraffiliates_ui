/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var topNav = function topNav() {
  document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.top-nav__hamburguer');
    var menuContainer = document.querySelector('.top-nav__menu-container');
    var openMenu = document.querySelector('.top-nav__hamburguer-open');
    var closeMenu = document.querySelector('.top-nav__hamburguer-close');
    var body = document.body;
    if (hamburger && menuContainer) {
      hamburger.addEventListener('click', function () {
        menuContainer.classList.toggle('active');
        body.classList.toggle('active');
        openMenu.classList.toggle('active');
        closeMenu.classList.toggle('active');
        console.log('Hamburger menu toggled');
      });
    } else {
      console.error('Hamburger or menu container not found');
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (topNav);

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var commissionSlider = function commissionSlider() {
  document.addEventListener("DOMContentLoaded", function () {
    var commissionSliderItem = document.querySelector('.commission-slider');
    if (commissionSliderItem) {
      var _commissionSlider = new Swiper('.commission-slider', _defineProperty(_defineProperty({
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        allowThresholdMove: true,
        slidesPerView: 'auto',
        spaceBetween: 0
      }, "spaceBetween", 10), "a11y", {
        enabled: true,
        slideLabelMessage: "Slide {{index}} of {{slidesLength}}",
        slideRole: null // Custom role for slide
      }));
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (commissionSlider);

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var benefitsSlider = function benefitsSlider() {
  document.addEventListener("DOMContentLoaded", function () {
    var benefitsSliderItem = document.querySelector('.benefits-slider');
    if (benefitsSliderItem) {
      var _benefitsSlider = new Swiper('.benefits-slider', _defineProperty(_defineProperty({
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        allowThresholdMove: true,
        slidesPerView: 'auto',
        spaceBetween: 0
      }, "spaceBetween", 10), "a11y", {
        enabled: true,
        slideLabelMessage: "Slide {{index}} of {{slidesLength}}",
        slideRole: null // Custom role for slide
      }));
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (benefitsSlider);

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var newsSlider = function newsSlider() {
  document.addEventListener("DOMContentLoaded", function () {
    var newsSliderItem = document.querySelector('.news-slider');
    if (newsSliderItem) {
      var _newsSlider = new Swiper('.news-slider', _defineProperty(_defineProperty({
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        allowThresholdMove: true,
        slidesPerView: 'auto',
        spaceBetween: 0
      }, "spaceBetween", 20), "a11y", {
        enabled: true,
        slideLabelMessage: "Slide {{index}} of {{slidesLength}}",
        slideRole: null // Custom role for slide
      }));
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (newsSlider);

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var testimonialSlider = function testimonialSlider() {
  document.addEventListener("DOMContentLoaded", function () {
    var testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
      var _testimonialSlider = new Swiper('.testimonial-slider', {
        // Optional parameters
        effect: "fade",
        speed: 800,
        autoHeight: true,
        fadeEffect: {
          crossFade: true
        },
        watchOverflow: true,
        pagination: {
          el: ".swiper-pagination",
          // type: "progressbar"
          clickable: true
          // dynamicBullets: true
        },
        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
        // Add init event	
      });
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (testimonialSlider);

/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var casinoSlider = function casinoSlider() {
  document.addEventListener("DOMContentLoaded", function () {
    var casinoSliderItem = document.querySelector('.casino-slider');
    if (casinoSliderItem) {
      var _casinoSlider = new Swiper('.casino-slider', _defineProperty(_defineProperty({
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        allowThresholdMove: true,
        slidesPerView: 'auto',
        spaceBetween: 0
      }, "spaceBetween", 10), "a11y", {
        enabled: true,
        slideLabelMessage: "Slide {{index}} of {{slidesLength}}",
        slideRole: null // Custom role for slide
      }));
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (casinoSlider);

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_modules_topNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _internal_modules_commissionSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _internal_modules_benefitsSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _internal_modules_newsSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _internal_modules_testimonialSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _internal_modules_casinoSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);






(function () {
  (0,_core_modules_topNav__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_internal_modules_commissionSlider__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_internal_modules_benefitsSlider__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_internal_modules_newsSlider__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_internal_modules_testimonialSlider__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_internal_modules_casinoSlider__WEBPACK_IMPORTED_MODULE_5__["default"])();
})();
}();
/******/ })()
;
//# sourceMappingURL=index-dist.js.map