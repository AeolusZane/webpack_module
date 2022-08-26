(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obj.js */ "./src/obj.js");

_obj_js__WEBPACK_IMPORTED_MODULE_0__.obj.count++;
console.log('component-21', _obj_js__WEBPACK_IMPORTED_MODULE_0__.obj.count);

/***/ }),

/***/ "./src/index1.js":
/*!***********************!*\
  !*** ./src/index1.js ***!
  \***********************/
/***/ (() => {

console.log('index1')

/***/ }),

/***/ "./src/obj.js":
/*!********************!*\
  !*** ./src/obj.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "obj": () => (/* binding */ obj)
/* harmony export */ });

let obj = {count:1};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"), __webpack_exec__("./src/index1.js"));
/******/ }
]);
//# sourceMappingURL=main.bundle.js.map