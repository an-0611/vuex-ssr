module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"server": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({}[chunkId]||chunkId) + ".bundle.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/dist/sg/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry-server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);


//
//
//
//
//
//
//
//
// import { mapActions, mapState } from 'vuex';
// import { loadLocale } from './i18n';
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  data: function data() {
    return {
      isInitialized: false
    };
  },
  // computed: {
  //   ...mapState('Game', ['profile']),
  // },
  // methods: {
  //   ...mapActions('Game', ['getProfile']),
  // },
  created: function created() {
    var _this = this;

    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // await loadLocale(process.env.LOCALE);
              _this.isInitialized = true; // await this.getProfile();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/global.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/styles/global.scss ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* default font */\n/* media query */\n/* region query */\n/* media query */\n/* ellipsis */\n/* fullscreen background */\n/* full size */\n/* full cover */\n/* clear float */\n/* CDN settings */\n/* align center */\n/* setup fullscreen */\n/* Disable selection/copy in UIWebView */\n/* reset style */\nbody, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form,\nfieldset, input, select, textarea, p, blockquote, th, td, figure {\n  padding: 0;\n  margin: 0; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\nfieldset,\nimg {\n  border: 0; }\naddress, caption, cite, code, dfn, em, strong, th, var, b {\n  font-weight: normal;\n  font-style: normal; }\nol, ul, li {\n  list-style: none; }\ncaption, th {\n  text-align: left; }\nh1, h2, h3, h4, h5, h6 {\n  font-weight: normal;\n  font-size: 100%; }\nq:before, q:after {\n  content: ''; }\nabbr, acronym {\n  border: 0; }\na {\n  text-decoration: none;\n  color: inherit; }\na, button {\n  cursor: pointer; }\ninput, button, textarea, select, option {\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit; }\ntextarea:focus, input:focus, button:focus {\n  outline: none; }\nhtml {\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n  font-size: 16px; }\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n/*\n * TW default font family: Noto Sans TC\n * http://www.google.com/fonts/earlyaccess\n * https://fonts.googleapis.com/earlyaccess/notosanstc.css\n */\n@font-face {\n  font-family: 'Noto Sans TC';\n  font-style: normal;\n  font-weight: 100;\n  src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.woff2) format(\"woff2\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.woff) format(\"woff\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.otf) format(\"opentype\"); }\n@font-face {\n  font-family: 'Noto Sans TC';\n  font-style: normal;\n  font-weight: 300;\n  src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.woff2) format(\"woff2\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.woff) format(\"woff\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.otf) format(\"opentype\"); }\n@font-face {\n  font-family: 'Noto Sans TC';\n  font-style: normal;\n  font-weight: 400;\n  src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff2) format(\"woff2\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff) format(\"woff\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.otf) format(\"opentype\"); }\n@font-face {\n  font-family: 'Noto Sans TC';\n  font-style: normal;\n  font-weight: 500;\n  src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff2) format(\"woff2\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff) format(\"woff\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.otf) format(\"opentype\"); }\n@font-face {\n  font-family: 'Noto Sans TC';\n  font-style: normal;\n  font-weight: 700;\n  src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff2) format(\"woff2\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff) format(\"woff\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.otf) format(\"opentype\"); }\n@font-face {\n  font-family: 'Noto Sans TC';\n  font-style: normal;\n  font-weight: 900;\n  src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.woff2) format(\"woff2\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.woff) format(\"woff\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.otf) format(\"opentype\"); }\n/*\n * VN default font family: Roboto\n * https://fonts.google.com/specimen/Roboto\n * https://fonts.googleapis.com/css?family=Roboto\n */\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Roboto Light Italic\"), local(\"Roboto-LightItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc1CsTYl4BOQ3o.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Roboto Light Italic\"), local(\"Roboto-LightItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc0CsTYl4BOQ3o.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Roboto Light Italic\"), local(\"Roboto-LightItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc6CsTYl4BO.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Roboto Italic\"), local(\"Roboto-Italic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xHIzIXKMnyrYk.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Roboto Italic\"), local(\"Roboto-Italic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xGIzIXKMnyrYk.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Roboto Italic\"), local(\"Roboto-Italic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xIIzIXKMny.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 500;\n  src: local(\"Roboto Medium Italic\"), local(\"Roboto-MediumItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc1CsTYl4BOQ3o.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 500;\n  src: local(\"Roboto Medium Italic\"), local(\"Roboto-MediumItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc0CsTYl4BOQ3o.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 500;\n  src: local(\"Roboto Medium Italic\"), local(\"Roboto-MediumItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc6CsTYl4BO.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Roboto Bold Italic\"), local(\"Roboto-BoldItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic1CsTYl4BOQ3o.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Roboto Bold Italic\"), local(\"Roboto-BoldItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic0CsTYl4BOQ3o.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Roboto Bold Italic\"), local(\"Roboto-BoldItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic6CsTYl4BO.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 900;\n  src: local(\"Roboto Black Italic\"), local(\"Roboto-BlackItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc1CsTYl4BOQ3o.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 900;\n  src: local(\"Roboto Black Italic\"), local(\"Roboto-BlackItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc0CsTYl4BOQ3o.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 900;\n  src: local(\"Roboto Black Italic\"), local(\"Roboto-BlackItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc6CsTYl4BO.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Roboto Light\"), local(\"Roboto-Light\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fCxc4AMP6lbBP.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Roboto Light\"), local(\"Roboto-Light\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fChc4AMP6lbBP.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Roboto Light\"), local(\"Roboto-Light\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fCxc4AMP6lbBP.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fChc4AMP6lbBP.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfCxc4AMP6lbBP.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfChc4AMP6lbBP.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"Roboto Black\"), local(\"Roboto-Black\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfCxc4AMP6lbBP.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"Roboto Black\"), local(\"Roboto-Black\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfChc4AMP6lbBP.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"Roboto Black\"), local(\"Roboto-Black\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfBBc4AMP6lQ.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* setup viewport */\nhtml {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background: #000;\n  overflow: hidden; }\n", "", {"version":3,"sources":["/Users/hean/vuex-ssr/src/styles/global.scss"],"names":[],"mappings":"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","file":"global.scss","sourcesContent":["/* default font */\n/* media query */\n/* region query */\n/* media query */\n/* ellipsis */\n/* fullscreen background */\n/* full size */\n/* full cover */\n/* clear float */\n/* CDN settings */\n/* align center */\n/* setup fullscreen */\n/* Disable selection/copy in UIWebView */\n/* reset style */\nbody, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form,\nfieldset, input, select, textarea, p, blockquote, th, td, figure {\n  padding: 0;\n  margin: 0; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\nfieldset,\nimg {\n  border: 0; }\naddress, caption, cite, code, dfn, em, strong, th, var, b {\n  font-weight: normal;\n  font-style: normal; }\nol, ul, li {\n  list-style: none; }\ncaption, th {\n  text-align: left; }\nh1, h2, h3, h4, h5, h6 {\n  font-weight: normal;\n  font-size: 100%; }\nq:before, q:after {\n  content: ''; }\nabbr, acronym {\n  border: 0; }\na {\n  text-decoration: none;\n  color: inherit; }\na, button {\n  cursor: pointer; }\ninput, button, textarea, select, option {\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit; }\ntextarea:focus, input:focus, button:focus {\n  outline: none; }\nhtml {\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n  font-size: 16px; }\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n/*\n * TW default font family: Noto Sans TC\n * http://www.google.com/fonts/earlyaccess\n * https://fonts.googleapis.com/earlyaccess/notosanstc.css\n */\n@font-face {\n  font-family: 'Noto Sans TC';\n  font-style: normal;\n  font-weight: 100;\n  src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.woff2) format(\"woff2\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.woff) format(\"woff\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.otf) format(\"opentype\"); }\n@font-face {\n  font-family: 'Noto Sans TC';\n  font-style: normal;\n  font-weight: 300;\n  src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.woff2) format(\"woff2\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.woff) format(\"woff\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.otf) format(\"opentype\"); }\n@font-face {\n  font-family: 'Noto Sans TC';\n  font-style: normal;\n  font-weight: 400;\n  src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff2) format(\"woff2\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff) format(\"woff\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.otf) format(\"opentype\"); }\n@font-face {\n  font-family: 'Noto Sans TC';\n  font-style: normal;\n  font-weight: 500;\n  src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff2) format(\"woff2\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff) format(\"woff\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.otf) format(\"opentype\"); }\n@font-face {\n  font-family: 'Noto Sans TC';\n  font-style: normal;\n  font-weight: 700;\n  src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff2) format(\"woff2\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff) format(\"woff\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.otf) format(\"opentype\"); }\n@font-face {\n  font-family: 'Noto Sans TC';\n  font-style: normal;\n  font-weight: 900;\n  src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.woff2) format(\"woff2\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.woff) format(\"woff\"), url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.otf) format(\"opentype\"); }\n/*\n * VN default font family: Roboto\n * https://fonts.google.com/specimen/Roboto\n * https://fonts.googleapis.com/css?family=Roboto\n */\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Roboto Light Italic\"), local(\"Roboto-LightItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc1CsTYl4BOQ3o.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Roboto Light Italic\"), local(\"Roboto-LightItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc0CsTYl4BOQ3o.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Roboto Light Italic\"), local(\"Roboto-LightItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc6CsTYl4BO.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Roboto Italic\"), local(\"Roboto-Italic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xHIzIXKMnyrYk.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Roboto Italic\"), local(\"Roboto-Italic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xGIzIXKMnyrYk.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Roboto Italic\"), local(\"Roboto-Italic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xIIzIXKMny.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 500;\n  src: local(\"Roboto Medium Italic\"), local(\"Roboto-MediumItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc1CsTYl4BOQ3o.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 500;\n  src: local(\"Roboto Medium Italic\"), local(\"Roboto-MediumItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc0CsTYl4BOQ3o.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 500;\n  src: local(\"Roboto Medium Italic\"), local(\"Roboto-MediumItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc6CsTYl4BO.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Roboto Bold Italic\"), local(\"Roboto-BoldItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic1CsTYl4BOQ3o.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Roboto Bold Italic\"), local(\"Roboto-BoldItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic0CsTYl4BOQ3o.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Roboto Bold Italic\"), local(\"Roboto-BoldItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic6CsTYl4BO.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 900;\n  src: local(\"Roboto Black Italic\"), local(\"Roboto-BlackItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc1CsTYl4BOQ3o.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 900;\n  src: local(\"Roboto Black Italic\"), local(\"Roboto-BlackItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc0CsTYl4BOQ3o.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 900;\n  src: local(\"Roboto Black Italic\"), local(\"Roboto-BlackItalic\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc6CsTYl4BO.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Roboto Light\"), local(\"Roboto-Light\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fCxc4AMP6lbBP.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Roboto Light\"), local(\"Roboto-Light\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fChc4AMP6lbBP.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Roboto Light\"), local(\"Roboto-Light\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fCxc4AMP6lbBP.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fChc4AMP6lbBP.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfCxc4AMP6lbBP.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfChc4AMP6lbBP.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"Roboto Black\"), local(\"Roboto-Black\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfCxc4AMP6lbBP.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"Roboto Black\"), local(\"Roboto-Black\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfChc4AMP6lbBP.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"Roboto Black\"), local(\"Roboto-Black\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfBBc4AMP6lQ.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* setup viewport */\nhtml {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background: #000;\n  overflow: hidden; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* default font */\n/* media query */\n/* region query */\n/* media query */\n/* ellipsis */\n/* fullscreen background */\n/* full size */\n/* full cover */\n/* clear float */\n/* CDN settings */\n/* align center */\n/* setup fullscreen */\n/* Disable selection/copy in UIWebView */\n#app {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  font-family: Roboto, Arial, Helvetica, 'Droid Sans';\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #2c3e50;\n  text-align: center;\n  /* setup default font */\n}\nhtml[data-region='tw'] #app {\n    font-family: 'Noto Sans TC', Arial, Helvetica, 'Droid Sans', sans-serif;\n}\n.main {\n  position: relative;\n  margin: auto;\n  left: 0;\n  right: 0;\n  /* setup layout size */\n  width: 100%;\n  height: 100%;\n  background: white;\n}\n", "", {"version":3,"sources":["/Users/hean/vuex-ssr/src/App.vue?vue&type=style&index=0&lang=scss&"],"names":[],"mappings":"AAAA,kBAAkB;AAClB,iBAAiB;AACjB,kBAAkB;AAClB,iBAAiB;AACjB,cAAc;AACd,2BAA2B;AAC3B,eAAe;AACf,gBAAgB;AAChB,iBAAiB;AACjB,kBAAkB;AAClB,kBAAkB;AAClB,sBAAsB;AACtB,yCAAyC;AACzC;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,oDAAoD;EACpD,oCAAoC;EACpC,mCAAmC;EACnC,eAAe;EACf,mBAAmB;EACnB,wBAAwB;CACzB;AACD;IACI,wEAAwE;CAC3E;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,QAAQ;EACR,SAAS;EACT,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,kBAAkB;CACnB","file":"App.vue?vue&type=style&index=0&lang=scss&","sourcesContent":["/* default font */\n/* media query */\n/* region query */\n/* media query */\n/* ellipsis */\n/* fullscreen background */\n/* full size */\n/* full cover */\n/* clear float */\n/* CDN settings */\n/* align center */\n/* setup fullscreen */\n/* Disable selection/copy in UIWebView */\n#app {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  font-family: Roboto, Arial, Helvetica, 'Droid Sans';\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #2c3e50;\n  text-align: center;\n  /* setup default font */\n}\nhtml[data-region='tw'] #app {\n    font-family: 'Noto Sans TC', Arial, Helvetica, 'Droid Sans', sans-serif;\n}\n.main {\n  position: relative;\n  margin: auto;\n  left: 0;\n  right: 0;\n  /* setup layout size */\n  width: 100%;\n  height: 100%;\n  background: white;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "app" } }, [
    _vm.isInitialized
      ? _vm._ssrNode('<div class="main">', "</div>", [_c("router-view")], 1)
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader??ref--5-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/dist/cjs.js??ref--5-3!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesServer.js */ "./node_modules/vue-style-loader/lib/addStylesServer.js").default
module.exports.__inject__ = function (context) {
  add("7fc931d7", content, false, context)
};

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesServer.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesServer.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesServer; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ "./src/App.vue?vue&type=template&id=7ba5bd90&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ "./src/App.vue?vue&type=style&index=0&lang=scss&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "0d4948a4"
  
)

component.options.__file = "src/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader!../node_modules/css-loader??ref--5-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/dist/cjs.js??ref--5-3!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/entry-server.js":
/*!*****************************!*\
  !*** ./src/entry-server.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./src/main.js");
// feature: 將渲染的vue實例導出，將渲染好的vue實例轉換成HTML返回給client
// eslint-disable-next-line import/extensions

/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  return new Promise(function (resolve, reject) {
    var _createApp = Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["createApp"])(),
        app = _createApp.app,
        router = _createApp.router;

    router.push(context.url); // wait until router has resolved possible async components and hooks
    // eslint-disable-next-line consistent-return

    router.onReady(function () {
      var matchedComponents = router.getMatchedComponents();

      if (!matchedComponents.length) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return reject({
          code: 404
        });
      }

      resolve(app);
    }, reject);
  });
});

/***/ }),

/***/ "./src/filters.js":
/*!************************!*\
  !*** ./src/filters.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* Vue filters */



/* dateFormat */
// usage: {{ new Date() | dateFormat('yyyy-MM-dd hh:mm:ss')}}
// usage: {{ Date.now() | dateFormat('yyyy-MM-dd hh:mm:ss')}}
// output: 2018-03-15 03:23:10
// see the date-fns module: https://date-fns.org/docs/format

vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('dateFormat', function (date, format) {
  if (!date) return '';
  if (!format) return date;
  return Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(date, format);
});
/* chineseNumber */
// usage: {{ 8 | chineseNumber }}
// output: 八

vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('chineseNumber', function (number) {
  if (!number || typeof number !== 'number') return number;
  var zhChars = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  return zhChars[number - 1];
});
/* prependZero */
// usage: {{ '9' | prefixZero }}, {{ '10' | prefixZero(4) }}
// output: '09', '0010'

vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('prependZero', function (number) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var str = '0'.repeat(length);
  if (!number) return str;

  if (typeof number !== 'string') {
    str = number.toString();
  }

  return str.padStart(length, '0');
});
/* capitalize */
// usage: {{ 'helloworld' | capitalize }}
// output: 'Helloworld'

vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('capitalize', function (value) {
  if (!value) return '';
  return value.toString().charAt(0).toUpperCase() + value.slice(1);
});
/* camelizeStr */
// usage: {{ 'hello_world' | camelizeStr }}
// output: 'helloWorld'

vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('camelizeStr', _utils__WEBPACK_IMPORTED_MODULE_2__["default"].camelizeStr);
/* snakifyStr */
// usage: {{ 'helloWorld' | snakifyStr }}
// output: 'hello_world'

vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('snakifyStr', _utils__WEBPACK_IMPORTED_MODULE_2__["default"].snakifyStr);
/* camelizeKeys */
// usage: {{ {hello_world:1} | camelizeKeys }}
// output: {helloWorld:1}

vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('camelizeKeys', _utils__WEBPACK_IMPORTED_MODULE_2__["default"].camelizeKeys);
/* snakifyKeys */
// usage: {{ {helloWorld:1} | snakifyKeys }}
// output: {hello_world:1}

vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('snakifyKeys', _utils__WEBPACK_IMPORTED_MODULE_2__["default"].snakifyKeys);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: createApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return createApp; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./src/router.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters */ "./src/filters.js");
/* harmony import */ var _preloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preloader */ "./src/preloader.js");
/* harmony import */ var _preloader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_preloader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/global.scss */ "./src/styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_5__);

 // import store from './store';
// import router from './router';

 // import { i18n } from './i18n';




vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.productionTip = false; // eslint-disable-next-line import/prefer-default-export

function createApp() {
  // create router instance
  var router = Object(_router__WEBPACK_IMPORTED_MODULE_2__["createRouter"])();
  var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
    // store,
    router: router,
    // i18n,
    render: function render(h) {
      return h(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }
  });
  return {
    app: app,
    router: router
  }; // 輸出給 server.js 使用
}

/***/ }),

/***/ "./src/preloader.js":
/*!**************************!*\
  !*** ./src/preloader.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * image preloader
 */

/* eslint-disable global-require */
var images = [// `${process.env.CDN}/background.jpg`,
];
images.forEach(function (image) {
  new Image().src = image;
});

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: createRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRouter", function() { return createRouter; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "vue-router");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_router__WEBPACK_IMPORTED_MODULE_1__);



var Home = function Home() {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./views/Home.vue */ "./src/views/Home.vue"));
};

var Home1 = function Home1() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./views/Home1.vue */ "./src/views/Home1.vue"));
};

vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1___default.a); // eslint-disable-next-line import/prefer-default-export

function createRouter() {
  return new vue_router__WEBPACK_IMPORTED_MODULE_1___default.a({
    mode: 'history',
    routes: [{
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/1',
      name: 'Home1',
      component: Home1
    }]
  });
}

/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./global.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/global.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesServer.js */ "./node_modules/vue-style-loader/lib/addStylesServer.js").default("463237f0", content, false)

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getParam(paramName, url) {
  var href = url || window.location.href;
  var name = paramName.replace(/[[]]/g, '\\$&');
  var regex = new RegExp("[?&]".concat(name, "(=([^&#]*)|&|#|$)"));
  var results = regex.exec(href);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function camelizeStr(str) {
  return str.replace(/[_.-](\w|$)/g, function (_, x) {
    return x.toUpperCase();
  });
}

function snakifyStr(str) {
  return str.replace(/(?:^|\.?)([A-Z])/g, function (_, x) {
    return "_".concat(x.toLowerCase());
  });
}

function convertCase(convertFunc) {
  function converter(thing) {
    if (thing instanceof Array) {
      return thing.map(function (i) {
        return converter(i);
      });
    }

    if (thing instanceof Object) {
      var newObj = {};
      Object.keys(thing).forEach(function (k) {
        newObj[convertFunc(k)] = converter(thing[k]);
      });
      return newObj;
    }

    return thing;
  }

  return converter;
}

function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getParam: getParam,
  camelizeStr: camelizeStr,
  snakifyStr: snakifyStr,
  delay: delay,
  camelizeKeys: convertCase(camelizeStr),
  snakifyKeys: convertCase(snakifyStr)
});

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "vue-router":
/*!*****************************!*\
  !*** external "vue-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ })

/******/ });