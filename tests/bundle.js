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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fixtures__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fixtures___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__fixtures__);



QUnit.test('test updateStarredRepos function when adding a repo', assert => {
  const id = 999999
  const originalLength = __WEBPACK_IMPORTED_MODULE_1__fixtures__["starred"].length
  const result = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils__["updateStarredRepos"])(__WEBPACK_IMPORTED_MODULE_1__fixtures__["starred"], id)
  
  assert.notOk(
    __WEBPACK_IMPORTED_MODULE_1__fixtures__["starred"].includes(id),
    'original starred repos should not contain test id')
  assert.ok(
    result.length === originalLength + 1,
    'updated starred repos should have correct length')
  assert.ok(
    result.includes(id),
    'updated starred repos should include new id')
  assert.ok(
    __WEBPACK_IMPORTED_MODULE_1__fixtures__["starred"].length === originalLength,
    'function should not mutate original array')
})

QUnit.test('test updateStarredRepos function when removing a repo', assert => {
  const id = 123456
  const originalLength = __WEBPACK_IMPORTED_MODULE_1__fixtures__["starred"].length
  const result = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils__["updateStarredRepos"])(__WEBPACK_IMPORTED_MODULE_1__fixtures__["starred"], id)
  
  assert.ok(
    __WEBPACK_IMPORTED_MODULE_1__fixtures__["starred"].includes(id),
    'original starred repos should contain test id')
  assert.ok(
    result.length === originalLength - 1,
    'updated starred repos should have correct length')
  assert.notOk(
    result.includes(id),
    'updated starred repos should not include new id')
  assert.ok(
    __WEBPACK_IMPORTED_MODULE_1__fixtures__["starred"].length === originalLength,
    'function should not mutate original array')
})


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// takes an array of (integer) repo id's and an (integer) id of the repo to toggle
// return a new array of repo id's
var updateStarredRepos = exports.updateStarredRepos = function updateStarredRepos(currentStarred, idToToggle) {
  return currentStarred.includes(idToToggle) ? currentStarred.filter(function (id) {
    return id !== idToToggle;
  }) : currentStarred.concat([idToToggle]);
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

const repos = [
  {
    id: 123456,
    name: 'test',
    description: 'cool new library',
    html_url: 'https://www.github.com',
    stargazers_count: 103,
    language: 'JavaScript'
  },
  {
    id: 333444,
    name: 'another one',
    description: 'cool newer library',
    html_url: 'https://www.github.com',
    stargazers_count: 300,
    language: 'Elm'
  }
]

const starred = [
  123456,
  111111,
  222222,
  333333,
  444444
]

module.exports = { repos, starred }


/***/ })
/******/ ]);