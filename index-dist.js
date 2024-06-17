/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var topNav = function topNav() {
  document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.top-nav__mobile-hamburguer');
    var menuContainer = document.querySelector('.top-nav__menu-container');
    var body = document.body;
    if (hamburger && menuContainer) {
      hamburger.addEventListener('click', function () {
        menuContainer.classList.toggle('active');
        body.classList.toggle('active');
        console.log('Hamburger menu toggled');
      });
    } else {
      console.error('Hamburger or menu container not found');
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (topNav);

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
/*here start core layout ui scripts imports*/
// import coreModule from './core-modules/coreModule';

/*here finish core layout ui scripts imports*/

/*here start internal layout ui components scripts imports*/
// import internalModule from './internal-modules/internalModule';
/*here finish internal layout ui components scripts imports*/

(function () {
  /*here start core layout ui scripts functions*/
  // coreModule();
  (0,_core_modules_topNav__WEBPACK_IMPORTED_MODULE_0__["default"])();
  /*here finish core layout ui scripts functions*/
})();
(function () {
  // internalModule();
  console.log('Hola kike');
})();
}();
/******/ })()
;
//# sourceMappingURL=index-dist.js.map