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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/loading.js":
/*!*******************************!*\
  !*** ./components/loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Loading; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/richardoh/Documents/repos/magic-nextjs/components/loading.js\";\nfunction Loading() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvYWRpbmcuanM/M2NiNiJdLCJuYW1lcyI6WyJMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZSxTQUFTQSxPQUFULEdBQW1CO0FBQ2hDLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSwyQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sb2FkaW5nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/loading.js\n");

/***/ }),

/***/ "./magic.js":
/*!******************!*\
  !*** ./magic.js ***!
  \******************/
/*! exports provided: magic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"magic\", function() { return magic; });\n/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! magic-sdk */ \"magic-sdk\");\n/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(magic_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst createMagic = key =>  false && false;\n\nconst magic = createMagic(\"pk_live_64B60FAEC908661B\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWdpYy5qcz8yYTBmIl0sIm5hbWVzIjpbImNyZWF0ZU1hZ2ljIiwia2V5IiwibWFnaWMiLCJwcm9jZXNzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1BLFdBQVcsR0FBSUMsR0FBRCxJQUFTLFVBQWdDLEtBQTdEOztBQUVPLE1BQU1DLEtBQUssR0FBR0YsV0FBVyxDQUFDRywwQkFBRCxDQUF6QiIsImZpbGUiOiIuL21hZ2ljLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFnaWMgfSBmcm9tICdtYWdpYy1zZGsnO1xuXG5jb25zdCBjcmVhdGVNYWdpYyA9IChrZXkpID0+IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgbmV3IE1hZ2ljKGtleSk7XG5cbmV4cG9ydCBjb25zdCBtYWdpYyA9IGNyZWF0ZU1hZ2ljKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BR0lDX1BVQkxJU0hBQkxFX0tFWSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./magic.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _magic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../magic */ \"./magic.js\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/loading */ \"./components/loading.js\");\n\nvar _jsxFileName = \"/Users/richardoh/Documents/repos/magic-nextjs/pages/index.js\";\n\n\n\n\nfunction Index() {\n  const {\n    0: userMetadata,\n    1: setUserMetadata\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    // On mount, we check if a user is logged in.\n    // If so, we'll retrieve the authenticated user's profile.\n    _magic__WEBPACK_IMPORTED_MODULE_3__[\"magic\"].user.isLoggedIn().then(magicIsLoggedIn => {\n      if (magicIsLoggedIn) {\n        _magic__WEBPACK_IMPORTED_MODULE_3__[\"magic\"].user.getMetadata().then(setUserMetadata);\n      } else {\n        // If no user is logged in, redirect to `/login`\n        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');\n      }\n    });\n  }, []);\n  /**\n   * Perform logout action via Magic.\n   */\n\n  const logout = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(() => {\n    _magic__WEBPACK_IMPORTED_MODULE_3__[\"magic\"].user.logout().then(() => {\n      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');\n    });\n  }, [next_router__WEBPACK_IMPORTED_MODULE_2___default.a]);\n  return userMetadata ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: [\"Current user: \", userMetadata.email]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: logout,\n      children: \"Logout\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwidXNlck1ldGFkYXRhIiwic2V0VXNlck1ldGFkYXRhIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtYWdpYyIsInVzZXIiLCJpc0xvZ2dlZEluIiwidGhlbiIsIm1hZ2ljSXNMb2dnZWRJbiIsImdldE1ldGFkYXRhIiwiUm91dGVyIiwicHVzaCIsImxvZ291dCIsInVzZUNhbGxiYWNrIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUM5QixRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLHNEQUFRLEVBQWhEO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkO0FBQ0E7QUFDQUMsZ0RBQUssQ0FBQ0MsSUFBTixDQUFXQyxVQUFYLEdBQXdCQyxJQUF4QixDQUE4QkMsZUFBRCxJQUFxQjtBQUNoRCxVQUFJQSxlQUFKLEVBQXFCO0FBQ25CSixvREFBSyxDQUFDQyxJQUFOLENBQVdJLFdBQVgsR0FBeUJGLElBQXpCLENBQThCTixlQUE5QjtBQUNELE9BRkQsTUFFTztBQUNMO0FBQ0FTLDBEQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaO0FBQ0Q7QUFDRixLQVBEO0FBUUQsR0FYUSxFQVdOLEVBWE0sQ0FBVDtBQWFBO0FBQ0Y7QUFDQTs7QUFDRSxRQUFNQyxNQUFNLEdBQUdDLHlEQUFXLENBQUMsTUFBTTtBQUMvQlQsZ0RBQUssQ0FBQ0MsSUFBTixDQUFXTyxNQUFYLEdBQW9CTCxJQUFwQixDQUF5QixNQUFNO0FBQzdCRyx3REFBTSxDQUFDQyxJQUFQLENBQVksUUFBWjtBQUNELEtBRkQ7QUFHRCxHQUp5QixFQUl2QixDQUFDRCxrREFBRCxDQUp1QixDQUExQjtBQU1BLFNBQU9WLFlBQVksZ0JBQ2pCO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFDRTtBQUFBLG1DQUFtQkEsWUFBWSxDQUFDYyxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQVEsYUFBTyxFQUFFRixNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURpQixnQkFNakIscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU5GO0FBUUQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgbWFnaWMgfSBmcm9tICcuLi9tYWdpYyc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW3VzZXJNZXRhZGF0YSwgc2V0VXNlck1ldGFkYXRhXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBPbiBtb3VudCwgd2UgY2hlY2sgaWYgYSB1c2VyIGlzIGxvZ2dlZCBpbi5cbiAgICAvLyBJZiBzbywgd2UnbGwgcmV0cmlldmUgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlcidzIHByb2ZpbGUuXG4gICAgbWFnaWMudXNlci5pc0xvZ2dlZEluKCkudGhlbigobWFnaWNJc0xvZ2dlZEluKSA9PiB7XG4gICAgICBpZiAobWFnaWNJc0xvZ2dlZEluKSB7XG4gICAgICAgIG1hZ2ljLnVzZXIuZ2V0TWV0YWRhdGEoKS50aGVuKHNldFVzZXJNZXRhZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiBubyB1c2VyIGlzIGxvZ2dlZCBpbiwgcmVkaXJlY3QgdG8gYC9sb2dpbmBcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gbG9nb3V0IGFjdGlvbiB2aWEgTWFnaWMuXG4gICAqL1xuICBjb25zdCBsb2dvdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgbWFnaWMudXNlci5sb2dvdXQoKS50aGVuKCgpID0+IHtcbiAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICB9KTtcbiAgfSwgW1JvdXRlcl0pO1xuXG4gIHJldHVybiB1c2VyTWV0YWRhdGEgPyAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICA8aDE+Q3VycmVudCB1c2VyOiB7dXNlck1ldGFkYXRhLmVtYWlsfTwvaDE+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ291dH0+TG9nb3V0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICkgOiAoXG4gICAgPExvYWRpbmcgLz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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