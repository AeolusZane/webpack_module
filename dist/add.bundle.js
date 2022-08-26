"use strict";
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["add"],{

/***/ "./src/add.js":
/*!********************!*\
  !*** ./src/add.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obj.js */ "./src/obj.js");

_obj_js__WEBPACK_IMPORTED_MODULE_0__.obj.count++;
console.log('component-1', _obj_js__WEBPACK_IMPORTED_MODULE_0__.obj.count);

/***/ }),

/***/ "./src/obj.js":
/*!********************!*\
  !*** ./src/obj.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "obj": () => (/* binding */ obj)
/* harmony export */ });

let obj = {count:1};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/add.js"));
/******/ }
]);
//# sourceMappingURL=add.bundle.js.map