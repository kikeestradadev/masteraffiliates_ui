/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var coreModule = function coreModule() {
  console.log('Hola Core Module');
};
/* harmony default export */ __webpack_exports__["default"] = (coreModule);

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var topNav = function topNav() {
  document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.top-nav__mobile-hamburguer');
    var menuContainer = document.querySelector('.top-nav__menu-container');
    if (hamburger && menuContainer) {
      hamburger.addEventListener('click', function () {
        menuContainer.classList.toggle('active');
        console.log('Hamburger menu toggled');
      });
    } else {
      console.error('Hamburger or menu container not found');
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (topNav);

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var z = function z() {
  console.log('Hola internal Module');
};
/* harmony default export */ __webpack_exports__["default"] = (internalModule);

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
/* harmony import */ var _core_modules_coreModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _core_modules_topNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _internal_modules_internalModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/*here start core layout ui scripts imports*/


/*here finish core layout ui scripts imports*/

/*here start internal layout ui components scripts imports*/

/*here finish internal layout ui components scripts imports*/

(function () {
  /*here start core layout ui scripts functions*/
  (0,_core_modules_coreModule__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_core_modules_topNav__WEBPACK_IMPORTED_MODULE_1__.topNav)();
  /*here finish core layout ui scripts functions*/
})();
(function () {
  (0,_internal_modules_internalModule__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();
}();
/******/ })()
;
//# sourceMappingURL=index-dist.js.map