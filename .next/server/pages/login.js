module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./magic.js":
/*!******************!*\
  !*** ./magic.js ***!
  \******************/
/*! exports provided: magic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"magic\", function() { return magic; });\n/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! magic-sdk */ \"magic-sdk\");\n/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(magic_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst createMagic = key =>  false && false;\n\nconst magic = createMagic(\"pk_live_64B60FAEC908661B\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWdpYy5qcz8yYTBmIl0sIm5hbWVzIjpbImNyZWF0ZU1hZ2ljIiwia2V5IiwibWFnaWMiLCJwcm9jZXNzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1BLFdBQVcsR0FBSUMsR0FBRCxJQUFTLFVBQWdDLEtBQTdEOztBQUVPLE1BQU1DLEtBQUssR0FBR0YsV0FBVyxDQUFDRywwQkFBRCxDQUF6QiIsImZpbGUiOiIuL21hZ2ljLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFnaWMgfSBmcm9tICdtYWdpYy1zZGsnO1xuXG5jb25zdCBjcmVhdGVNYWdpYyA9IChrZXkpID0+IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgbmV3IE1hZ2ljKGtleSk7XG5cbmV4cG9ydCBjb25zdCBtYWdpYyA9IGNyZWF0ZU1hZ2ljKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BR0lDX1BVQkxJU0hBQkxFX0tFWSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./magic.js\n");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _magic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../magic */ \"./magic.js\");\n\nvar _jsxFileName = \"/Users/richardoh/Documents/repos/magic-nextjs/pages/login.js\";\n\n\n\nfunction Login() {\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: isLoggingIn,\n    1: setIsLoggingIn\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  /**\n   * Perform login action via Magic's passwordless flow. Upon successuful\n   * completion of the login flow, a user is redirected to the homepage.\n   */\n\n  const login = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(async () => {\n    setIsLoggingIn(true);\n\n    try {\n      // Grab auth token from loginWithMagicLink\n      const didToken = await _magic__WEBPACK_IMPORTED_MODULE_3__[\"magic\"].auth.loginWithMagicLink({\n        email,\n        redirectURI: new URL('/callback', window.location.origin).href\n      }); // Validate auth token with server\n\n      const res = await fetch('/api/login', {\n        headers: {\n          'Content-Type': 'application/json',\n          Authorization: 'Bearer ' + didToken\n        }\n      });\n      res.status === 200 && next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');\n    } catch {\n      setIsLoggingIn(false);\n    }\n  }, [email]);\n  /**\n   * Saves the value of our email input into component state.\n   */\n\n  const handleInputOnChange = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(event => {\n    setEmail(event.target.value);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Please sign up or login\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"email\",\n      name: \"email\",\n      required: \"required\",\n      placeholder: \"Enter your email\",\n      onChange: handleInputOnChange,\n      disabled: isLoggingIn\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: login,\n      disabled: isLoggingIn,\n      children: \"Send\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcz8zYjY5Il0sIm5hbWVzIjpbIkxvZ2luIiwiZW1haWwiLCJzZXRFbWFpbCIsInVzZVN0YXRlIiwiaXNMb2dnaW5nSW4iLCJzZXRJc0xvZ2dpbmdJbiIsImxvZ2luIiwidXNlQ2FsbGJhY2siLCJkaWRUb2tlbiIsIm1hZ2ljIiwiYXV0aCIsImxvZ2luV2l0aE1hZ2ljTGluayIsInJlZGlyZWN0VVJJIiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJocmVmIiwicmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInN0YXR1cyIsIlJvdXRlciIsInB1c2giLCJoYW5kbGVJbnB1dE9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQzlCLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDRixzREFBUSxDQUFDLEtBQUQsQ0FBOUM7QUFFQTtBQUNGO0FBQ0E7QUFDQTs7QUFDRSxRQUFNRyxLQUFLLEdBQUdDLHlEQUFXLENBQUMsWUFBWTtBQUNwQ0Ysa0JBQWMsQ0FBQyxJQUFELENBQWQ7O0FBRUEsUUFBSTtBQUNGO0FBQ0EsWUFBTUcsUUFBUSxHQUFHLE1BQU1DLDRDQUFLLENBQUNDLElBQU4sQ0FBV0Msa0JBQVgsQ0FBOEI7QUFDbkRWLGFBRG1EO0FBRW5EVyxtQkFBVyxFQUFFLElBQUlDLEdBQUosQ0FBUSxXQUFSLEVBQXFCQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQXJDLEVBQTZDQztBQUZQLE9BQTlCLENBQXZCLENBRkUsQ0FPRjs7QUFDQSxZQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLFlBQUQsRUFBZTtBQUNwQ0MsZUFBTyxFQUFFO0FBQ1AsMEJBQWdCLGtCQURUO0FBRVBDLHVCQUFhLEVBQUUsWUFBWWI7QUFGcEI7QUFEMkIsT0FBZixDQUF2QjtBQU1BVSxTQUFHLENBQUNJLE1BQUosS0FBZSxHQUFmLElBQXNCQyxrREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWixDQUF0QjtBQUNELEtBZkQsQ0FlRSxNQUFNO0FBQ05uQixvQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNEO0FBQ0YsR0FyQndCLEVBcUJ0QixDQUFDSixLQUFELENBckJzQixDQUF6QjtBQXVCQTtBQUNGO0FBQ0E7O0FBQ0UsUUFBTXdCLG1CQUFtQixHQUFHbEIseURBQVcsQ0FBRW1CLEtBQUQsSUFBVztBQUNqRHhCLFlBQVEsQ0FBQ3dCLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVI7QUFDRCxHQUZzQyxFQUVwQyxFQUZvQyxDQUF2QztBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFVBQUksRUFBQyxPQUZQO0FBR0UsY0FBUSxFQUFDLFVBSFg7QUFJRSxpQkFBVyxFQUFDLGtCQUpkO0FBS0UsY0FBUSxFQUFFSCxtQkFMWjtBQU1FLGNBQVEsRUFBRXJCO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBVUU7QUFBUSxhQUFPLEVBQUVFLEtBQWpCO0FBQXdCLGNBQVEsRUFBRUYsV0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRCIsImZpbGUiOiIuL3BhZ2VzL2xvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBtYWdpYyB9IGZyb20gJy4uL21hZ2ljJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNMb2dnaW5nSW4sIHNldElzTG9nZ2luZ0luXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvKipcbiAgICogUGVyZm9ybSBsb2dpbiBhY3Rpb24gdmlhIE1hZ2ljJ3MgcGFzc3dvcmRsZXNzIGZsb3cuIFVwb24gc3VjY2Vzc3VmdWxcbiAgICogY29tcGxldGlvbiBvZiB0aGUgbG9naW4gZmxvdywgYSB1c2VyIGlzIHJlZGlyZWN0ZWQgdG8gdGhlIGhvbWVwYWdlLlxuICAgKi9cbiAgY29uc3QgbG9naW4gPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgc2V0SXNMb2dnaW5nSW4odHJ1ZSk7XG5cbiAgICB0cnkge1xuICAgICAgLy8gR3JhYiBhdXRoIHRva2VuIGZyb20gbG9naW5XaXRoTWFnaWNMaW5rXG4gICAgICBjb25zdCBkaWRUb2tlbiA9IGF3YWl0IG1hZ2ljLmF1dGgubG9naW5XaXRoTWFnaWNMaW5rKHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHJlZGlyZWN0VVJJOiBuZXcgVVJMKCcvY2FsbGJhY2snLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKS5ocmVmLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIFZhbGlkYXRlIGF1dGggdG9rZW4gd2l0aCBzZXJ2ZXJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2xvZ2luJywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBkaWRUb2tlbixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgcmVzLnN0YXR1cyA9PT0gMjAwICYmIFJvdXRlci5wdXNoKCcvJyk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBzZXRJc0xvZ2dpbmdJbihmYWxzZSk7XG4gICAgfVxuICB9LCBbZW1haWxdKTtcblxuICAvKipcbiAgICogU2F2ZXMgdGhlIHZhbHVlIG9mIG91ciBlbWFpbCBpbnB1dCBpbnRvIGNvbXBvbmVudCBzdGF0ZS5cbiAgICovXG4gIGNvbnN0IGhhbmRsZUlucHV0T25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBzZXRFbWFpbChldmVudC50YXJnZXQudmFsdWUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgIDxoMT5QbGVhc2Ugc2lnbiB1cCBvciBsb2dpbjwvaDE+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT0nZW1haWwnXG4gICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICByZXF1aXJlZD0ncmVxdWlyZWQnXG4gICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIGVtYWlsJ1xuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRPbkNoYW5nZX1cbiAgICAgICAgZGlzYWJsZWQ9e2lzTG9nZ2luZ0lufVxuICAgICAgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17bG9naW59IGRpc2FibGVkPXtpc0xvZ2dpbmdJbn0+XG4gICAgICAgIFNlbmRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "magic-sdk":
/*!****************************!*\
  !*** external "magic-sdk" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"magic-sdk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYWdpYy1zZGtcIj9iYWI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1hZ2ljLXNkay5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hZ2ljLXNka1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///magic-sdk\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });