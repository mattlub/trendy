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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(1);

var reposUrl = 'https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc';

var MAX_RESULTS = 20;

new Vue({

  el: '#app',

  data: {
    isLoading: true,
    hasErrored: false,
    // viewOption can be "all" or "starred"
    viewOption: 'all',
    repos: [],
    starred: []
  },

  created: function created() {
    this.fetchRepos();
    this.fetchStarred();
  },

  methods: {
    fetchRepos: function fetchRepos() {
      var _this = this;

      fetch(reposUrl).then(function (response) {
        return response.json();
      }).then(function (result) {
        _this.repos = result.items;
        _this.isLoading = false;
      }).catch(function (fetchErr) {
        console.log({ fetchErr: fetchErr });
        _this.isLoading = false;
        _this.hasErrored = true;
      });
    },

    fetchStarred: function fetchStarred() {
      // local storage array comes back as string
      var starred = window.localStorage.getItem('starredRepos');
      var starredArray = starred ? starred.split(',').map(Number) : [];
      this.starred = starredArray;
    },

    filteredRepos: function filteredRepos() {
      var _this2 = this;

      if (this.viewOption === 'starred') {
        return this.repos.filter(function (repo) {
          return _this2.starred.includes(repo.id);
        }).slice(0, MAX_RESULTS);
      } else {
        return this.repos.slice(0, MAX_RESULTS);
      }
    },

    toggleStarred: function toggleStarred(idToToggle) {
      var updatedStarred = (0, _utils.updateStarredRepos)(this.starred, idToToggle);
      // set the starred repos here and in local storage
      this.starred = updatedStarred;
      window.localStorage.setItem('starredRepos', updatedStarred);
    },

    // conditional formatting
    getStarClass: function getStarClass(repoId) {
      return this.starred.includes(repoId) ? 'repo__star-button--starred' : '';
    },

    getViewOptionClass: function getViewOptionClass(option) {
      return this.viewOption === option ? 'button-inputs__label--selected' : '';
    },

    // adds one to star count if it is starred in local storage
    getStarCount: function getStarCount(repoId, count) {
      return this.starred.includes(repoId) ? count + 1 : count;
    }
  }
});

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

/***/ })
/******/ ]);