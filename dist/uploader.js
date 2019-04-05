(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ImageTool"] = factory();
	else
		root["ImageTool"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/uploader.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@codexteam/ajax/dist/main.js":
/*!***************************************************!*\
  !*** ./node_modules/@codexteam/ajax/dist/main.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var r=n(2),o=setTimeout;function i(){}function a(e){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function u(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,a._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void s(t.promise,e)}c(t.promise,r)}else(1===e._state?c:s)(t.promise,e._value)})):e._deferreds.push(t)}function c(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof a)return e._state=3,e._value=t,void f(e);if("function"==typeof n)return void d((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,f(e)}catch(t){s(e,t)}var r,o}function s(e,t){e._state=2,e._value=t,f(e)}function f(e){2===e._state&&0===e._deferreds.length&&a._immediateFn(function(){e._handled||a._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)u(e,e._deferreds[t]);e._deferreds=null}function l(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function d(e,t){var n=!1;try{e(function(e){n||(n=!0,c(t,e))},function(e){n||(n=!0,s(t,e))})}catch(e){if(n)return;n=!0,s(t,e)}}a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var n=new this.constructor(i);return u(this,new l(e,t,n)),n},a.prototype.finally=r.a,a.all=function(e){return new a(function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var u=a.then;if("function"==typeof u)return void u.call(a,function(t){i(e,t)},n)}r[e]=a,0==--o&&t(r)}catch(e){n(e)}}for(var a=0;a<r.length;a++)i(a,r[a])})},a.resolve=function(e){return e&&"object"==typeof e&&e.constructor===a?e:new a(function(t){t(e)})},a.reject=function(e){return new a(function(t,n){n(e)})},a.race=function(e){return new a(function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)})},a._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){o(e,0)},a._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=a}).call(this,n(5).setImmediate)},function(e,t,n){"use strict";t.a=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n(4);var o,i,a,u,c,s,f=n(8),l=(i=function(e){return new Promise(function(t,n){e=u(e),e=c(e);var r=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");r.open(e.method,e.url),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(e.headers).forEach(function(t){var n=e.headers[t];r.setRequestHeader(t,n)});var o=e.ratio;r.upload.addEventListener("progress",function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*o/100);e.progress(r)},!1),r.addEventListener("progress",function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*(100-o)/100)+o;e.progress(r)},!1),r.onreadystatechange=function(){if(4===r.readyState){var e=r.response;try{e=JSON.parse(e)}catch(e){}var o=f.parseHeaders(r.getAllResponseHeaders()),i={body:e,code:r.status,headers:o};200===r.status?t(i):n(i)}},r.send(e.data)})},a=function(e){return e.method="POST",i(e)},u=function(e){if(!e.url||"string"!=typeof e.url)throw new Error("Url must be a non-empty string");if(e.method&&"string"!=typeof e.method)throw new Error("`method` must be a string or null");if(e.method=e.method?e.method.toUpperCase():"GET",e.headers&&"object"!==r(e.headers))throw new Error("`headers` must be an object or null");if(e.headers=e.headers||{},e.type&&("string"!=typeof e.type||!Object.values(o).includes(e.type)))throw new Error("`type` must be taken from module's «contentType» library");if(e.progress&&"function"!=typeof e.progress)throw new Error("`progress` must be a function or null");if(e.progress=e.progress||function(e){},e.beforeSend=e.beforeSend||function(e){},e.ratio&&"number"!=typeof e.ratio)throw new Error("`ratio` must be a number");if(e.ratio<0||e.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(e.ratio=e.ratio||90,e.accept&&"string"!=typeof e.accept)throw new Error("`accept` must be a string with a list of allowed mime-types");if(e.accept=e.accept||"*/*",e.multiple&&"boolean"!=typeof e.multiple)throw new Error("`multiple` must be a true or false");if(e.multiple=e.multiple||!1,e.fieldName&&"string"!=typeof e.fieldName)throw new Error("`fieldName` must be a string");return e.fieldName=e.fieldName||"files",e},c=function(e){switch(e.method){case"GET":var t=s(e.data,o.URLENCODED);delete e.data,e.url=/\?/.test(e.url)?e.url+"&"+t:e.url+"?"+t;break;case"POST":case"PUT":case"DELETE":case"UPDATE":var n=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||o.JSON}(e);(f.isFormData(e.data)||f.isFormElement(e.data))&&(n=o.FORM),e.data=s(e.data,n),n!==l.contentType.FORM&&(e.headers["content-type"]=n)}return e},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case o.URLENCODED:return f.urlEncode(e);case o.JSON:return f.jsonEncode(e);case o.FORM:return f.formEncode(e);default:return e}},{contentType:o={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},request:i,get:function(e){return e.method="GET",i(e)},post:a,transport:function(e){return e=u(e),f.transport(e).then(function(t){return f.isObject(e.data)&&Object.keys(e.data).forEach(function(n){var r=e.data[n];t.append(n,r)}),e.data=t,a(e)})}});e.exports=l},function(e,t,n){"use strict";n.r(t);var r=n(1);window.Promise=window.Promise||r.a},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(6),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,i,a,u,c=1,s={},f=!1,l=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){m(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){m(e.data)},r=function(e){i.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(o=l.documentElement,r=function(e){var t=l.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(m,0,e)}:(a="setImmediate$"+Math.random()+"$",u=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&m(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",u,!1):e.attachEvent("onmessage",u),r=function(t){e.postMessage(a+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return s[c]=o,r(c),c++},d.clearImmediate=p}function p(e){delete s[e]}function m(e){if(f)setTimeout(m,0,e);else{var t=s[e];if(t){f=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{p(e),f=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(7))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,s=[],f=!1,l=-1;function d(){f&&c&&(f=!1,c.length?s=c.concat(s):l=-1,s.length&&p())}function p(){if(!f){var e=u(d);f=!0;for(var t=s.length;t;){for(c=s,s=[];++l<t;)c&&c[l].run();l=-1,t=s.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||f||u(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(9);e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,i=[{key:"urlEncode",value:function(e){return o(e)}},{key:"jsonEncode",value:function(e){return JSON.stringify(e)}},{key:"formEncode",value:function(e){if(this.isFormData(e))return e;if(this.isFormElement(e))return new FormData(e);if(this.isObject(e)){var t=new FormData;return Object.keys(e).forEach(function(n){var r=e[n];t.append(n,r)}),t}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(e){return"[object Object]"===Object.prototype.toString.call(e)}},{key:"isFormData",value:function(e){return e instanceof FormData}},{key:"isFormElement",value:function(e){return e instanceof HTMLFormElement}},{key:"transport",value:function(e){return new Promise(function(t,n){var r=document.createElement("INPUT");r.type="file",e.multiple&&r.setAttribute("multiple","multiple"),e.accept&&r.setAttribute("accept",e.accept),r.style.display="none",document.body.appendChild(r),r.addEventListener("change",function(n){for(var r=n.target.files,o=new FormData,i=0;i<r.length;i++)o.append(e.fieldName,r[i],r[i].name);e.beforeSend(r),t(o)},!1),r.click()})}},{key:"parseHeaders",value:function(e){var t=e.trim().split(/[\r\n]+/),n={};return t.forEach(function(e){var t=e.split(": "),r=t.shift(),o=t.join(": ");r&&(n[r]=o)}),n}}],(n=null)&&r(t.prototype,n),i&&r(t,i),e}()},function(e,t){var n=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},r=function(e,t,o,i){return t=t||null,o=o||"&",i=i||null,e?function(e){for(var t=new Array,n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}(Object.keys(e).map(function(a){var u,c,s=a;if(i&&(s=i+"["+s+"]"),"object"==typeof e[a]&&null!==e[a])u=r(e[a],null,o,s);else{t&&(c=s,s=!isNaN(parseFloat(c))&&isFinite(c)?t+Number(s):s);var f=e[a];f=(f=0===(f=!1===(f=!0===f?"1":f)?"0":f)?"0":f)||"",u=n(s)+"="+n(f)}return u})).join(o).replace(/[!'()*]/g,""):""};e.exports=r}])});

/***/ }),

/***/ "./src/uploader.js":
/*!*************************!*\
  !*** ./src/uploader.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Uploader; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _codexteam_ajax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @codexteam/ajax */ "./node_modules/@codexteam/ajax/dist/main.js");
/* harmony import */ var _codexteam_ajax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_codexteam_ajax__WEBPACK_IMPORTED_MODULE_3__);





var mergeConfig = function mergeConfig(_ref) {
  var _ref$endpoints = _ref.endpoints,
      endpoints = _ref$endpoints === void 0 ? {} : _ref$endpoints,
      _ref$additionalReques = _ref.additionalRequestData,
      additionalRequestData = _ref$additionalReques === void 0 ? {} : _ref$additionalReques,
      _ref$additionalReques2 = _ref.additionalRequestHeaders,
      additionalRequestHeaders = _ref$additionalReques2 === void 0 ? {} : _ref$additionalReques2,
      _ref$field = _ref.field,
      field = _ref$field === void 0 ? 'image' : _ref$field;
  return {
    endpoints: endpoints,
    additionalRequestData: additionalRequestData,
    additionalRequestHeaders: additionalRequestHeaders,
    field: field
  };
};
/**
 * @typedef {object} UploaderConfig
 * @description Config supported by Uploader
 * @property {object} endpoints - upload endpoints
 * @property {string} endpoints.byFile - upload by file
 * @property {string} endpoints.byUrl - upload by URL
 * @property {string} field - field name for uploaded image
 * @property {object} additionalRequestData - any data to send with requests
 * @property {object} additionalRequestHeaders - allows to pass custom headers with Request
 */

/**
 * Module for file uploading. Handle 3 scenarios:
 *  1. Select file from device and upload
 *  2. Upload by pasting URL
 *  3. Upload by pasting file from Clipboard or by Drag'n'Drop
 */


var Uploader =
/*#__PURE__*/
function () {
  /**
   * @param {UploaderConfig} config
   */
  function Uploader(config) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Uploader);

    this.config = mergeConfig(config);
  }
  /**
   * Handle clicks on the upload file button
   * @fires ajax.post()
   * @param {string} url - image source url
   * @param {function(string)} setPreview - callback for set preview image
   * @returns {Promise<UploadResponseFormat>}
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Uploader, [{
    key: "uploadByUrl",
    value: function uploadByUrl(url, _ref2) {
      var setPreview = _ref2.setPreview;
      setPreview(url);
      return _codexteam_ajax__WEBPACK_IMPORTED_MODULE_3___default.a.post({
        url: this.config.endpoints.byUrl,
        data: Object.assign({
          url: url
        }, this.config.additionalRequestData),
        type: _codexteam_ajax__WEBPACK_IMPORTED_MODULE_3___default.a.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      });
    }
    /**
     * Handle clicks on the upload file button or by paste and drag and drop
     * @fires ajax.post()
     * @param {File} file - file pasted by drag-n-drop
     * @param {function(string)} setPreview - callback for set preview image
     * @returns {Promise<UploadResponseFormat>}
     */

  }, {
    key: "uploadByFile",
    value: function uploadByFile(file, _ref3) {
      var setPreview = _ref3.setPreview;

      /**
       * Load file for preview
       * @type {FileReader}
       */
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (e) {
        setPreview(e.target.result);
      };
      /**
       * Compose Form Data for sending
       */


      var formData = new FormData();
      formData.append(this.config.field, file);

      if (Object.keys(this.config.additionalRequestData).length) {
        Object.entries(this.config.additionalRequestData).forEach(function (_ref4) {
          var _ref5 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref4, 2),
              name = _ref5[0],
              value = _ref5[1];

          formData.append(name, value);
        });
      }

      return _codexteam_ajax__WEBPACK_IMPORTED_MODULE_3___default.a.post({
        url: this.config.endpoints.byFile,
        data: formData,
        type: _codexteam_ajax__WEBPACK_IMPORTED_MODULE_3___default.a.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      });
    }
  }]);

  return Uploader;
}();



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JbWFnZVRvb2wvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0ltYWdlVG9vbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9JbWFnZVRvb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9JbWFnZVRvb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9JbWFnZVRvb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9JbWFnZVRvb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly9JbWFnZVRvb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vSW1hZ2VUb29sLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9JbWFnZVRvb2wvLi9ub2RlX21vZHVsZXMvQGNvZGV4dGVhbS9hamF4L2Rpc3QvbWFpbi5qcyIsIndlYnBhY2s6Ly9JbWFnZVRvb2wvLi9zcmMvdXBsb2FkZXIuanMiXSwibmFtZXMiOlsibWVyZ2VDb25maWciLCJlbmRwb2ludHMiLCJhZGRpdGlvbmFsUmVxdWVzdERhdGEiLCJhZGRpdGlvbmFsUmVxdWVzdEhlYWRlcnMiLCJmaWVsZCIsIlVwbG9hZGVyIiwiY29uZmlnIiwidXJsIiwic2V0UHJldmlldyIsImFqYXgiLCJwb3N0IiwiYnlVcmwiLCJkYXRhIiwiT2JqZWN0IiwiYXNzaWduIiwidHlwZSIsImNvbnRlbnRUeXBlIiwiSlNPTiIsImhlYWRlcnMiLCJmaWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJlIiwidGFyZ2V0IiwicmVzdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImtleXMiLCJsZW5ndGgiLCJlbnRyaWVzIiwiZm9yRWFjaCIsIm5hbWUiLCJ2YWx1ZSIsImJ5RmlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QU0sQ0FBQ0UsYUFBUCxDQUFxQkgsSUFBckI7O0FBQ0FDLFlBQU0sQ0FBQ0csTUFBUCxHQUFnQixVQUFDQyxDQUFELEVBQU87QUFDckJoQixrQkFBVSxDQUFDZ0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLE1BQVYsQ0FBVjtBQUNELE9BRkQ7QUFJQTs7Ozs7QUFHQSxVQUFJQyxRQUFRLEdBQUcsSUFBSUMsUUFBSixFQUFmO0FBRUFELGNBQVEsQ0FBQ0UsTUFBVCxDQUFnQixLQUFLdkIsTUFBTCxDQUFZRixLQUE1QixFQUFtQ2UsSUFBbkM7O0FBRUEsVUFBSU4sTUFBTSxDQUFDaUIsSUFBUCxDQUFZLEtBQUt4QixNQUFMLENBQVlKLHFCQUF4QixFQUErQzZCLE1BQW5ELEVBQTJEO0FBQ3pEbEIsY0FBTSxDQUFDbUIsT0FBUCxDQUFlLEtBQUsxQixNQUFMLENBQVlKLHFCQUEzQixFQUFrRCtCLE9BQWxELENBQTBELGlCQUFtQjtBQUFBO0FBQUEsY0FBakJDLElBQWlCO0FBQUEsY0FBWEMsS0FBVzs7QUFDM0VSLGtCQUFRLENBQUNFLE1BQVQsQ0FBZ0JLLElBQWhCLEVBQXNCQyxLQUF0QjtBQUNELFNBRkQ7QUFHRDs7QUFFRCxhQUFPMUIsc0RBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ2ZILFdBQUcsRUFBRSxLQUFLRCxNQUFMLENBQVlMLFNBQVosQ0FBc0JtQyxNQURaO0FBRWZ4QixZQUFJLEVBQUVlLFFBRlM7QUFHZlosWUFBSSxFQUFFTixzREFBSSxDQUFDTyxXQUFMLENBQWlCQyxJQUhSO0FBSWZDLGVBQU8sRUFBRSxLQUFLWixNQUFMLENBQVlIO0FBSk4sT0FBVixDQUFQO0FBTUQiLCJmaWxlIjoidXBsb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJJbWFnZVRvb2xcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSW1hZ2VUb29sXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdXBsb2FkZXIuanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLmFqYXg9dCgpOmUuYWpheD10KCl9KHdpbmRvdyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiBuKHIpe2lmKHRbcl0pcmV0dXJuIHRbcl0uZXhwb3J0czt2YXIgbz10W3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09ZSxuLmM9dCxuLmQ9ZnVuY3Rpb24oZSx0LHIpe24ubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPW4oZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBvIGluIGUpbi5kKHIsbyxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sbi5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBuLmQodCxcImFcIix0KSx0fSxuLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LG4ucD1cIlwiLG4obi5zPTMpfShbZnVuY3Rpb24oZSx0KXt2YXIgbjtuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCk7dHJ5e249bnx8bmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKX1jYXRjaChlKXtcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiYobj13aW5kb3cpfWUuZXhwb3J0cz1ufSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKGUpe3ZhciByPW4oMiksbz1zZXRUaW1lb3V0O2Z1bmN0aW9uIGkoKXt9ZnVuY3Rpb24gYShlKXtpZighKHRoaXMgaW5zdGFuY2VvZiBhKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3XCIpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIm5vdCBhIGZ1bmN0aW9uXCIpO3RoaXMuX3N0YXRlPTAsdGhpcy5faGFuZGxlZD0hMSx0aGlzLl92YWx1ZT12b2lkIDAsdGhpcy5fZGVmZXJyZWRzPVtdLGQoZSx0aGlzKX1mdW5jdGlvbiB1KGUsdCl7Zm9yKDszPT09ZS5fc3RhdGU7KWU9ZS5fdmFsdWU7MCE9PWUuX3N0YXRlPyhlLl9oYW5kbGVkPSEwLGEuX2ltbWVkaWF0ZUZuKGZ1bmN0aW9uKCl7dmFyIG49MT09PWUuX3N0YXRlP3Qub25GdWxmaWxsZWQ6dC5vblJlamVjdGVkO2lmKG51bGwhPT1uKXt2YXIgcjt0cnl7cj1uKGUuX3ZhbHVlKX1jYXRjaChlKXtyZXR1cm4gdm9pZCBzKHQucHJvbWlzZSxlKX1jKHQucHJvbWlzZSxyKX1lbHNlKDE9PT1lLl9zdGF0ZT9jOnMpKHQucHJvbWlzZSxlLl92YWx1ZSl9KSk6ZS5fZGVmZXJyZWRzLnB1c2godCl9ZnVuY3Rpb24gYyhlLHQpe3RyeXtpZih0PT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi5cIik7aWYodCYmKFwib2JqZWN0XCI9PXR5cGVvZiB0fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KSl7dmFyIG49dC50aGVuO2lmKHQgaW5zdGFuY2VvZiBhKXJldHVybiBlLl9zdGF0ZT0zLGUuX3ZhbHVlPXQsdm9pZCBmKGUpO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pcmV0dXJuIHZvaWQgZCgocj1uLG89dCxmdW5jdGlvbigpe3IuYXBwbHkobyxhcmd1bWVudHMpfSksZSl9ZS5fc3RhdGU9MSxlLl92YWx1ZT10LGYoZSl9Y2F0Y2godCl7cyhlLHQpfXZhciByLG99ZnVuY3Rpb24gcyhlLHQpe2UuX3N0YXRlPTIsZS5fdmFsdWU9dCxmKGUpfWZ1bmN0aW9uIGYoZSl7Mj09PWUuX3N0YXRlJiYwPT09ZS5fZGVmZXJyZWRzLmxlbmd0aCYmYS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKXtlLl9oYW5kbGVkfHxhLl91bmhhbmRsZWRSZWplY3Rpb25GbihlLl92YWx1ZSl9KTtmb3IodmFyIHQ9MCxuPWUuX2RlZmVycmVkcy5sZW5ndGg7dDxuO3QrKyl1KGUsZS5fZGVmZXJyZWRzW3RdKTtlLl9kZWZlcnJlZHM9bnVsbH1mdW5jdGlvbiBsKGUsdCxuKXt0aGlzLm9uRnVsZmlsbGVkPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZTpudWxsLHRoaXMub25SZWplY3RlZD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6bnVsbCx0aGlzLnByb21pc2U9bn1mdW5jdGlvbiBkKGUsdCl7dmFyIG49ITE7dHJ5e2UoZnVuY3Rpb24oZSl7bnx8KG49ITAsYyh0LGUpKX0sZnVuY3Rpb24oZSl7bnx8KG49ITAscyh0LGUpKX0pfWNhdGNoKGUpe2lmKG4pcmV0dXJuO249ITAscyh0LGUpfX1hLnByb3RvdHlwZS5jYXRjaD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy50aGVuKG51bGwsZSl9LGEucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24oZSx0KXt2YXIgbj1uZXcgdGhpcy5jb25zdHJ1Y3RvcihpKTtyZXR1cm4gdSh0aGlzLG5ldyBsKGUsdCxuKSksbn0sYS5wcm90b3R5cGUuZmluYWxseT1yLmEsYS5hbGw9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBhKGZ1bmN0aW9uKHQsbil7aWYoIWV8fHZvaWQgMD09PWUubGVuZ3RoKXRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlLmFsbCBhY2NlcHRzIGFuIGFycmF5XCIpO3ZhciByPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUpO2lmKDA9PT1yLmxlbmd0aClyZXR1cm4gdChbXSk7dmFyIG89ci5sZW5ndGg7ZnVuY3Rpb24gaShlLGEpe3RyeXtpZihhJiYoXCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGEpKXt2YXIgdT1hLnRoZW47aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdSlyZXR1cm4gdm9pZCB1LmNhbGwoYSxmdW5jdGlvbih0KXtpKGUsdCl9LG4pfXJbZV09YSwwPT0tLW8mJnQocil9Y2F0Y2goZSl7bihlKX19Zm9yKHZhciBhPTA7YTxyLmxlbmd0aDthKyspaShhLHJbYV0pfSl9LGEucmVzb2x2ZT1mdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUuY29uc3RydWN0b3I9PT1hP2U6bmV3IGEoZnVuY3Rpb24odCl7dChlKX0pfSxhLnJlamVjdD1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IGEoZnVuY3Rpb24odCxuKXtuKGUpfSl9LGEucmFjZT1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IGEoZnVuY3Rpb24odCxuKXtmb3IodmFyIHI9MCxvPWUubGVuZ3RoO3I8bztyKyspZVtyXS50aGVuKHQsbil9KX0sYS5faW1tZWRpYXRlRm49XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZnVuY3Rpb24odCl7ZSh0KX18fGZ1bmN0aW9uKGUpe28oZSwwKX0sYS5fdW5oYW5kbGVkUmVqZWN0aW9uRm49ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNvbnNvbGUmJmNvbnNvbGUmJmNvbnNvbGUud2FybihcIlBvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjpcIixlKX0sdC5hPWF9KS5jYWxsKHRoaXMsbig1KS5zZXRJbW1lZGlhdGUpfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dC5hPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuY29uc3RydWN0b3I7cmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbihuKXtyZXR1cm4gdC5yZXNvbHZlKGUoKSkudGhlbihmdW5jdGlvbigpe3JldHVybiBufSl9LGZ1bmN0aW9uKG4pe3JldHVybiB0LnJlc29sdmUoZSgpKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHQucmVqZWN0KG4pfSl9KX19LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybihyPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9KShlKX1uKDQpO3ZhciBvLGksYSx1LGMscyxmPW4oOCksbD0oaT1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24odCxuKXtlPXUoZSksZT1jKGUpO3ZhciByPXdpbmRvdy5YTUxIdHRwUmVxdWVzdD9uZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0Om5ldyB3aW5kb3cuQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpO3Iub3BlbihlLm1ldGhvZCxlLnVybCksci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLFwiWE1MSHR0cFJlcXVlc3RcIiksT2JqZWN0LmtleXMoZS5oZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBuPWUuaGVhZGVyc1t0XTtyLnNldFJlcXVlc3RIZWFkZXIodCxuKX0pO3ZhciBvPWUucmF0aW87ci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsZnVuY3Rpb24odCl7dmFyIG49TWF0aC5yb3VuZCh0LmxvYWRlZC90LnRvdGFsKjEwMCkscj1NYXRoLmNlaWwobipvLzEwMCk7ZS5wcm9ncmVzcyhyKX0sITEpLHIuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsZnVuY3Rpb24odCl7dmFyIG49TWF0aC5yb3VuZCh0LmxvYWRlZC90LnRvdGFsKjEwMCkscj1NYXRoLmNlaWwobiooMTAwLW8pLzEwMCkrbztlLnByb2dyZXNzKHIpfSwhMSksci5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtpZig0PT09ci5yZWFkeVN0YXRlKXt2YXIgZT1yLnJlc3BvbnNlO3RyeXtlPUpTT04ucGFyc2UoZSl9Y2F0Y2goZSl7fXZhciBvPWYucGFyc2VIZWFkZXJzKHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpLGk9e2JvZHk6ZSxjb2RlOnIuc3RhdHVzLGhlYWRlcnM6b307MjAwPT09ci5zdGF0dXM/dChpKTpuKGkpfX0sci5zZW5kKGUuZGF0YSl9KX0sYT1mdW5jdGlvbihlKXtyZXR1cm4gZS5tZXRob2Q9XCJQT1NUXCIsaShlKX0sdT1mdW5jdGlvbihlKXtpZighZS51cmx8fFwic3RyaW5nXCIhPXR5cGVvZiBlLnVybCl0aHJvdyBuZXcgRXJyb3IoXCJVcmwgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmdcIik7aWYoZS5tZXRob2QmJlwic3RyaW5nXCIhPXR5cGVvZiBlLm1ldGhvZCl0aHJvdyBuZXcgRXJyb3IoXCJgbWV0aG9kYCBtdXN0IGJlIGEgc3RyaW5nIG9yIG51bGxcIik7aWYoZS5tZXRob2Q9ZS5tZXRob2Q/ZS5tZXRob2QudG9VcHBlckNhc2UoKTpcIkdFVFwiLGUuaGVhZGVycyYmXCJvYmplY3RcIiE9PXIoZS5oZWFkZXJzKSl0aHJvdyBuZXcgRXJyb3IoXCJgaGVhZGVyc2AgbXVzdCBiZSBhbiBvYmplY3Qgb3IgbnVsbFwiKTtpZihlLmhlYWRlcnM9ZS5oZWFkZXJzfHx7fSxlLnR5cGUmJihcInN0cmluZ1wiIT10eXBlb2YgZS50eXBlfHwhT2JqZWN0LnZhbHVlcyhvKS5pbmNsdWRlcyhlLnR5cGUpKSl0aHJvdyBuZXcgRXJyb3IoXCJgdHlwZWAgbXVzdCBiZSB0YWtlbiBmcm9tIG1vZHVsZSdzIMKrY29udGVudFR5cGXCuyBsaWJyYXJ5XCIpO2lmKGUucHJvZ3Jlc3MmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGUucHJvZ3Jlc3MpdGhyb3cgbmV3IEVycm9yKFwiYHByb2dyZXNzYCBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgbnVsbFwiKTtpZihlLnByb2dyZXNzPWUucHJvZ3Jlc3N8fGZ1bmN0aW9uKGUpe30sZS5iZWZvcmVTZW5kPWUuYmVmb3JlU2VuZHx8ZnVuY3Rpb24oZSl7fSxlLnJhdGlvJiZcIm51bWJlclwiIT10eXBlb2YgZS5yYXRpbyl0aHJvdyBuZXcgRXJyb3IoXCJgcmF0aW9gIG11c3QgYmUgYSBudW1iZXJcIik7aWYoZS5yYXRpbzwwfHxlLnJhdGlvPjEwMCl0aHJvdyBuZXcgRXJyb3IoXCJgcmF0aW9gIG11c3QgYmUgaW4gYSAwLTEwMCBpbnRlcnZhbFwiKTtpZihlLnJhdGlvPWUucmF0aW98fDkwLGUuYWNjZXB0JiZcInN0cmluZ1wiIT10eXBlb2YgZS5hY2NlcHQpdGhyb3cgbmV3IEVycm9yKFwiYGFjY2VwdGAgbXVzdCBiZSBhIHN0cmluZyB3aXRoIGEgbGlzdCBvZiBhbGxvd2VkIG1pbWUtdHlwZXNcIik7aWYoZS5hY2NlcHQ9ZS5hY2NlcHR8fFwiKi8qXCIsZS5tdWx0aXBsZSYmXCJib29sZWFuXCIhPXR5cGVvZiBlLm11bHRpcGxlKXRocm93IG5ldyBFcnJvcihcImBtdWx0aXBsZWAgbXVzdCBiZSBhIHRydWUgb3IgZmFsc2VcIik7aWYoZS5tdWx0aXBsZT1lLm11bHRpcGxlfHwhMSxlLmZpZWxkTmFtZSYmXCJzdHJpbmdcIiE9dHlwZW9mIGUuZmllbGROYW1lKXRocm93IG5ldyBFcnJvcihcImBmaWVsZE5hbWVgIG11c3QgYmUgYSBzdHJpbmdcIik7cmV0dXJuIGUuZmllbGROYW1lPWUuZmllbGROYW1lfHxcImZpbGVzXCIsZX0sYz1mdW5jdGlvbihlKXtzd2l0Y2goZS5tZXRob2Qpe2Nhc2VcIkdFVFwiOnZhciB0PXMoZS5kYXRhLG8uVVJMRU5DT0RFRCk7ZGVsZXRlIGUuZGF0YSxlLnVybD0vXFw/Ly50ZXN0KGUudXJsKT9lLnVybCtcIiZcIit0OmUudXJsK1wiP1wiK3Q7YnJlYWs7Y2FzZVwiUE9TVFwiOmNhc2VcIlBVVFwiOmNhc2VcIkRFTEVURVwiOmNhc2VcIlVQREFURVwiOnZhciBuPWZ1bmN0aW9uKCl7cmV0dXJuKGFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSkudHlwZXx8by5KU09OfShlKTsoZi5pc0Zvcm1EYXRhKGUuZGF0YSl8fGYuaXNGb3JtRWxlbWVudChlLmRhdGEpKSYmKG49by5GT1JNKSxlLmRhdGE9cyhlLmRhdGEsbiksbiE9PWwuY29udGVudFR5cGUuRk9STSYmKGUuaGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXT1uKX1yZXR1cm4gZX0scz1mdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fTtzd2l0Y2goYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDApe2Nhc2Ugby5VUkxFTkNPREVEOnJldHVybiBmLnVybEVuY29kZShlKTtjYXNlIG8uSlNPTjpyZXR1cm4gZi5qc29uRW5jb2RlKGUpO2Nhc2Ugby5GT1JNOnJldHVybiBmLmZvcm1FbmNvZGUoZSk7ZGVmYXVsdDpyZXR1cm4gZX19LHtjb250ZW50VHlwZTpvPXtVUkxFTkNPREVEOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04XCIsRk9STTpcIm11bHRpcGFydC9mb3JtLWRhdGFcIixKU09OOlwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwifSxyZXF1ZXN0OmksZ2V0OmZ1bmN0aW9uKGUpe3JldHVybiBlLm1ldGhvZD1cIkdFVFwiLGkoZSl9LHBvc3Q6YSx0cmFuc3BvcnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9dShlKSxmLnRyYW5zcG9ydChlKS50aGVuKGZ1bmN0aW9uKHQpe3JldHVybiBmLmlzT2JqZWN0KGUuZGF0YSkmJk9iamVjdC5rZXlzKGUuZGF0YSkuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgcj1lLmRhdGFbbl07dC5hcHBlbmQobixyKX0pLGUuZGF0YT10LGEoZSl9KX19KTtlLmV4cG9ydHM9bH0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO24ucih0KTt2YXIgcj1uKDEpO3dpbmRvdy5Qcm9taXNlPXdpbmRvdy5Qcm9taXNlfHxyLmF9LGZ1bmN0aW9uKGUsdCxuKXsoZnVuY3Rpb24oZSl7dmFyIHI9dm9pZCAwIT09ZSYmZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGZ8fHdpbmRvdyxvPUZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtmdW5jdGlvbiBpKGUsdCl7dGhpcy5faWQ9ZSx0aGlzLl9jbGVhckZuPXR9dC5zZXRUaW1lb3V0PWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBpKG8uY2FsbChzZXRUaW1lb3V0LHIsYXJndW1lbnRzKSxjbGVhclRpbWVvdXQpfSx0LnNldEludGVydmFsPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBpKG8uY2FsbChzZXRJbnRlcnZhbCxyLGFyZ3VtZW50cyksY2xlYXJJbnRlcnZhbCl9LHQuY2xlYXJUaW1lb3V0PXQuY2xlYXJJbnRlcnZhbD1mdW5jdGlvbihlKXtlJiZlLmNsb3NlKCl9LGkucHJvdG90eXBlLnVucmVmPWkucHJvdG90eXBlLnJlZj1mdW5jdGlvbigpe30saS5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLl9jbGVhckZuLmNhbGwocix0aGlzLl9pZCl9LHQuZW5yb2xsPWZ1bmN0aW9uKGUsdCl7Y2xlYXJUaW1lb3V0KGUuX2lkbGVUaW1lb3V0SWQpLGUuX2lkbGVUaW1lb3V0PXR9LHQudW5lbnJvbGw9ZnVuY3Rpb24oZSl7Y2xlYXJUaW1lb3V0KGUuX2lkbGVUaW1lb3V0SWQpLGUuX2lkbGVUaW1lb3V0PS0xfSx0Ll91bnJlZkFjdGl2ZT10LmFjdGl2ZT1mdW5jdGlvbihlKXtjbGVhclRpbWVvdXQoZS5faWRsZVRpbWVvdXRJZCk7dmFyIHQ9ZS5faWRsZVRpbWVvdXQ7dD49MCYmKGUuX2lkbGVUaW1lb3V0SWQ9c2V0VGltZW91dChmdW5jdGlvbigpe2UuX29uVGltZW91dCYmZS5fb25UaW1lb3V0KCl9LHQpKX0sbig2KSx0LnNldEltbWVkaWF0ZT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZi5zZXRJbW1lZGlhdGV8fHZvaWQgMCE9PWUmJmUuc2V0SW1tZWRpYXRlfHx0aGlzJiZ0aGlzLnNldEltbWVkaWF0ZSx0LmNsZWFySW1tZWRpYXRlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmLmNsZWFySW1tZWRpYXRlfHx2b2lkIDAhPT1lJiZlLmNsZWFySW1tZWRpYXRlfHx0aGlzJiZ0aGlzLmNsZWFySW1tZWRpYXRlfSkuY2FsbCh0aGlzLG4oMCkpfSxmdW5jdGlvbihlLHQsbil7KGZ1bmN0aW9uKGUsdCl7IWZ1bmN0aW9uKGUsbil7XCJ1c2Ugc3RyaWN0XCI7aWYoIWUuc2V0SW1tZWRpYXRlKXt2YXIgcixvLGksYSx1LGM9MSxzPXt9LGY9ITEsbD1lLmRvY3VtZW50LGQ9T2JqZWN0LmdldFByb3RvdHlwZU9mJiZPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSk7ZD1kJiZkLnNldFRpbWVvdXQ/ZDplLFwiW29iamVjdCBwcm9jZXNzXVwiPT09e30udG9TdHJpbmcuY2FsbChlLnByb2Nlc3MpP3I9ZnVuY3Rpb24oZSl7dC5uZXh0VGljayhmdW5jdGlvbigpe20oZSl9KX06IWZ1bmN0aW9uKCl7aWYoZS5wb3N0TWVzc2FnZSYmIWUuaW1wb3J0U2NyaXB0cyl7dmFyIHQ9ITAsbj1lLm9ubWVzc2FnZTtyZXR1cm4gZS5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXt0PSExfSxlLnBvc3RNZXNzYWdlKFwiXCIsXCIqXCIpLGUub25tZXNzYWdlPW4sdH19KCk/ZS5NZXNzYWdlQ2hhbm5lbD8oKGk9bmV3IE1lc3NhZ2VDaGFubmVsKS5wb3J0MS5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7bShlLmRhdGEpfSxyPWZ1bmN0aW9uKGUpe2kucG9ydDIucG9zdE1lc3NhZ2UoZSl9KTpsJiZcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiaW4gbC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpPyhvPWwuZG9jdW1lbnRFbGVtZW50LHI9ZnVuY3Rpb24oZSl7dmFyIHQ9bC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Qub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7bShlKSx0Lm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLG8ucmVtb3ZlQ2hpbGQodCksdD1udWxsfSxvLmFwcGVuZENoaWxkKHQpfSk6cj1mdW5jdGlvbihlKXtzZXRUaW1lb3V0KG0sMCxlKX06KGE9XCJzZXRJbW1lZGlhdGUkXCIrTWF0aC5yYW5kb20oKStcIiRcIix1PWZ1bmN0aW9uKHQpe3Quc291cmNlPT09ZSYmXCJzdHJpbmdcIj09dHlwZW9mIHQuZGF0YSYmMD09PXQuZGF0YS5pbmRleE9mKGEpJiZtKCt0LmRhdGEuc2xpY2UoYS5sZW5ndGgpKX0sZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIix1LCExKTplLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsdSkscj1mdW5jdGlvbih0KXtlLnBvc3RNZXNzYWdlKGErdCxcIipcIil9KSxkLnNldEltbWVkaWF0ZT1mdW5jdGlvbihlKXtcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiYoZT1uZXcgRnVuY3Rpb24oXCJcIitlKSk7Zm9yKHZhciB0PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpLG49MDtuPHQubGVuZ3RoO24rKyl0W25dPWFyZ3VtZW50c1tuKzFdO3ZhciBvPXtjYWxsYmFjazplLGFyZ3M6dH07cmV0dXJuIHNbY109byxyKGMpLGMrK30sZC5jbGVhckltbWVkaWF0ZT1wfWZ1bmN0aW9uIHAoZSl7ZGVsZXRlIHNbZV19ZnVuY3Rpb24gbShlKXtpZihmKXNldFRpbWVvdXQobSwwLGUpO2Vsc2V7dmFyIHQ9c1tlXTtpZih0KXtmPSEwO3RyeXshZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jYWxsYmFjayxyPWUuYXJncztzd2l0Y2goci5sZW5ndGgpe2Nhc2UgMDp0KCk7YnJlYWs7Y2FzZSAxOnQoclswXSk7YnJlYWs7Y2FzZSAyOnQoclswXSxyWzFdKTticmVhaztjYXNlIDM6dChyWzBdLHJbMV0sclsyXSk7YnJlYWs7ZGVmYXVsdDp0LmFwcGx5KG4scil9fSh0KX1maW5hbGx5e3AoZSksZj0hMX19fX19KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmP3ZvaWQgMD09PWU/dGhpczplOnNlbGYpfSkuY2FsbCh0aGlzLG4oMCksbig3KSl9LGZ1bmN0aW9uKGUsdCl7dmFyIG4scixvPWUuZXhwb3J0cz17fTtmdW5jdGlvbiBpKCl7dGhyb3cgbmV3IEVycm9yKFwic2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiBhKCl7dGhyb3cgbmV3IEVycm9yKFwiY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIHUoZSl7aWYobj09PXNldFRpbWVvdXQpcmV0dXJuIHNldFRpbWVvdXQoZSwwKTtpZigobj09PWl8fCFuKSYmc2V0VGltZW91dClyZXR1cm4gbj1zZXRUaW1lb3V0LHNldFRpbWVvdXQoZSwwKTt0cnl7cmV0dXJuIG4oZSwwKX1jYXRjaCh0KXt0cnl7cmV0dXJuIG4uY2FsbChudWxsLGUsMCl9Y2F0Y2godCl7cmV0dXJuIG4uY2FsbCh0aGlzLGUsMCl9fX0hZnVuY3Rpb24oKXt0cnl7bj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6aX1jYXRjaChlKXtuPWl9dHJ5e3I9XCJmdW5jdGlvblwiPT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDphfWNhdGNoKGUpe3I9YX19KCk7dmFyIGMscz1bXSxmPSExLGw9LTE7ZnVuY3Rpb24gZCgpe2YmJmMmJihmPSExLGMubGVuZ3RoP3M9Yy5jb25jYXQocyk6bD0tMSxzLmxlbmd0aCYmcCgpKX1mdW5jdGlvbiBwKCl7aWYoIWYpe3ZhciBlPXUoZCk7Zj0hMDtmb3IodmFyIHQ9cy5sZW5ndGg7dDspe2ZvcihjPXMscz1bXTsrK2w8dDspYyYmY1tsXS5ydW4oKTtsPS0xLHQ9cy5sZW5ndGh9Yz1udWxsLGY9ITEsZnVuY3Rpb24oZSl7aWYocj09PWNsZWFyVGltZW91dClyZXR1cm4gY2xlYXJUaW1lb3V0KGUpO2lmKChyPT09YXx8IXIpJiZjbGVhclRpbWVvdXQpcmV0dXJuIHI9Y2xlYXJUaW1lb3V0LGNsZWFyVGltZW91dChlKTt0cnl7cihlKX1jYXRjaCh0KXt0cnl7cmV0dXJuIHIuY2FsbChudWxsLGUpfWNhdGNoKHQpe3JldHVybiByLmNhbGwodGhpcyxlKX19fShlKX19ZnVuY3Rpb24gbShlLHQpe3RoaXMuZnVuPWUsdGhpcy5hcnJheT10fWZ1bmN0aW9uIGgoKXt9by5uZXh0VGljaz1mdW5jdGlvbihlKXt2YXIgdD1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKTtpZihhcmd1bWVudHMubGVuZ3RoPjEpZm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl0W24tMV09YXJndW1lbnRzW25dO3MucHVzaChuZXcgbShlLHQpKSwxIT09cy5sZW5ndGh8fGZ8fHUocCl9LG0ucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe3RoaXMuZnVuLmFwcGx5KG51bGwsdGhpcy5hcnJheSl9LG8udGl0bGU9XCJicm93c2VyXCIsby5icm93c2VyPSEwLG8uZW52PXt9LG8uYXJndj1bXSxvLnZlcnNpb249XCJcIixvLnZlcnNpb25zPXt9LG8ub249aCxvLmFkZExpc3RlbmVyPWgsby5vbmNlPWgsby5vZmY9aCxvLnJlbW92ZUxpc3RlbmVyPWgsby5yZW1vdmVBbGxMaXN0ZW5lcnM9aCxvLmVtaXQ9aCxvLnByZXBlbmRMaXN0ZW5lcj1oLG8ucHJlcGVuZE9uY2VMaXN0ZW5lcj1oLG8ubGlzdGVuZXJzPWZ1bmN0aW9uKGUpe3JldHVybltdfSxvLmJpbmRpbmc9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIil9LG8uY3dkPWZ1bmN0aW9uKCl7cmV0dXJuXCIvXCJ9LG8uY2hkaXI9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpfSxvLnVtYXNrPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fSxmdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gcihlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19dmFyIG89big5KTtlLmV4cG9ydHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7IWZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxlKX12YXIgdCxuLGk7cmV0dXJuIHQ9ZSxpPVt7a2V5OlwidXJsRW5jb2RlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIG8oZSl9fSx7a2V5OlwianNvbkVuY29kZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBKU09OLnN0cmluZ2lmeShlKX19LHtrZXk6XCJmb3JtRW5jb2RlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYodGhpcy5pc0Zvcm1EYXRhKGUpKXJldHVybiBlO2lmKHRoaXMuaXNGb3JtRWxlbWVudChlKSlyZXR1cm4gbmV3IEZvcm1EYXRhKGUpO2lmKHRoaXMuaXNPYmplY3QoZSkpe3ZhciB0PW5ldyBGb3JtRGF0YTtyZXR1cm4gT2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgcj1lW25dO3QuYXBwZW5kKG4scil9KSx0fXRocm93IG5ldyBFcnJvcihcImBkYXRhYCBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIE9iamVjdCwgRm9ybURhdGEgb3IgPEZPUk0+IEhUTUxFbGVtZW50XCIpfX0se2tleTpcImlzT2JqZWN0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuXCJbb2JqZWN0IE9iamVjdF1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKX19LHtrZXk6XCJpc0Zvcm1EYXRhXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBGb3JtRGF0YX19LHtrZXk6XCJpc0Zvcm1FbGVtZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnR9fSx7a2V5OlwidHJhbnNwb3J0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQsbil7dmFyIHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpO3IudHlwZT1cImZpbGVcIixlLm11bHRpcGxlJiZyLnNldEF0dHJpYnV0ZShcIm11bHRpcGxlXCIsXCJtdWx0aXBsZVwiKSxlLmFjY2VwdCYmci5zZXRBdHRyaWJ1dGUoXCJhY2NlcHRcIixlLmFjY2VwdCksci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQociksci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsZnVuY3Rpb24obil7Zm9yKHZhciByPW4udGFyZ2V0LmZpbGVzLG89bmV3IEZvcm1EYXRhLGk9MDtpPHIubGVuZ3RoO2krKylvLmFwcGVuZChlLmZpZWxkTmFtZSxyW2ldLHJbaV0ubmFtZSk7ZS5iZWZvcmVTZW5kKHIpLHQobyl9LCExKSxyLmNsaWNrKCl9KX19LHtrZXk6XCJwYXJzZUhlYWRlcnNcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lLnRyaW0oKS5zcGxpdCgvW1xcclxcbl0rLyksbj17fTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PWUuc3BsaXQoXCI6IFwiKSxyPXQuc2hpZnQoKSxvPXQuam9pbihcIjogXCIpO3ImJihuW3JdPW8pfSksbn19XSwobj1udWxsKSYmcih0LnByb3RvdHlwZSxuKSxpJiZyKHQsaSksZX0oKX0sZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbihlKXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGUpLnJlcGxhY2UoL1shJygpKl0vZyxlc2NhcGUpLnJlcGxhY2UoLyUyMC9nLFwiK1wiKX0scj1mdW5jdGlvbihlLHQsbyxpKXtyZXR1cm4gdD10fHxudWxsLG89b3x8XCImXCIsaT1pfHxudWxsLGU/ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PW5ldyBBcnJheSxuPTA7bjxlLmxlbmd0aDtuKyspZVtuXSYmdC5wdXNoKGVbbl0pO3JldHVybiB0fShPYmplY3Qua2V5cyhlKS5tYXAoZnVuY3Rpb24oYSl7dmFyIHUsYyxzPWE7aWYoaSYmKHM9aStcIltcIitzK1wiXVwiKSxcIm9iamVjdFwiPT10eXBlb2YgZVthXSYmbnVsbCE9PWVbYV0pdT1yKGVbYV0sbnVsbCxvLHMpO2Vsc2V7dCYmKGM9cyxzPSFpc05hTihwYXJzZUZsb2F0KGMpKSYmaXNGaW5pdGUoYyk/dCtOdW1iZXIocyk6cyk7dmFyIGY9ZVthXTtmPShmPTA9PT0oZj0hMT09PShmPSEwPT09Zj9cIjFcIjpmKT9cIjBcIjpmKT9cIjBcIjpmKXx8XCJcIix1PW4ocykrXCI9XCIrbihmKX1yZXR1cm4gdX0pKS5qb2luKG8pLnJlcGxhY2UoL1shJygpKl0vZyxcIlwiKTpcIlwifTtlLmV4cG9ydHM9cn1dKX0pOyIsImltcG9ydCBhamF4IGZyb20gJ0Bjb2RleHRlYW0vYWpheCc7XG5cbmNvbnN0IG1lcmdlQ29uZmlnID0gKHtcbiAgZW5kcG9pbnRzID0ge30sXG4gIGFkZGl0aW9uYWxSZXF1ZXN0RGF0YSA9IHt9LFxuICBhZGRpdGlvbmFsUmVxdWVzdEhlYWRlcnMgPSB7fSxcbiAgZmllbGQgPSAnaW1hZ2UnXG59KSA9PiAoe1xuICBlbmRwb2ludHMsXG4gIGFkZGl0aW9uYWxSZXF1ZXN0RGF0YSxcbiAgYWRkaXRpb25hbFJlcXVlc3RIZWFkZXJzLFxuICBmaWVsZFxufSk7XG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gVXBsb2FkZXJDb25maWdcbiAqIEBkZXNjcmlwdGlvbiBDb25maWcgc3VwcG9ydGVkIGJ5IFVwbG9hZGVyXG4gKiBAcHJvcGVydHkge29iamVjdH0gZW5kcG9pbnRzIC0gdXBsb2FkIGVuZHBvaW50c1xuICogQHByb3BlcnR5IHtzdHJpbmd9IGVuZHBvaW50cy5ieUZpbGUgLSB1cGxvYWQgYnkgZmlsZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVuZHBvaW50cy5ieVVybCAtIHVwbG9hZCBieSBVUkxcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBmaWVsZCAtIGZpZWxkIG5hbWUgZm9yIHVwbG9hZGVkIGltYWdlXG4gKiBAcHJvcGVydHkge29iamVjdH0gYWRkaXRpb25hbFJlcXVlc3REYXRhIC0gYW55IGRhdGEgdG8gc2VuZCB3aXRoIHJlcXVlc3RzXG4gKiBAcHJvcGVydHkge29iamVjdH0gYWRkaXRpb25hbFJlcXVlc3RIZWFkZXJzIC0gYWxsb3dzIHRvIHBhc3MgY3VzdG9tIGhlYWRlcnMgd2l0aCBSZXF1ZXN0XG4gKi9cblxuLyoqXG4gKiBNb2R1bGUgZm9yIGZpbGUgdXBsb2FkaW5nLiBIYW5kbGUgMyBzY2VuYXJpb3M6XG4gKiAgMS4gU2VsZWN0IGZpbGUgZnJvbSBkZXZpY2UgYW5kIHVwbG9hZFxuICogIDIuIFVwbG9hZCBieSBwYXN0aW5nIFVSTFxuICogIDMuIFVwbG9hZCBieSBwYXN0aW5nIGZpbGUgZnJvbSBDbGlwYm9hcmQgb3IgYnkgRHJhZyduJ0Ryb3BcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBsb2FkZXIge1xuICAvKipcbiAgICogQHBhcmFtIHtVcGxvYWRlckNvbmZpZ30gY29uZmlnXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IG1lcmdlQ29uZmlnKGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGNsaWNrcyBvbiB0aGUgdXBsb2FkIGZpbGUgYnV0dG9uXG4gICAqIEBmaXJlcyBhamF4LnBvc3QoKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gaW1hZ2Ugc291cmNlIHVybFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyl9IHNldFByZXZpZXcgLSBjYWxsYmFjayBmb3Igc2V0IHByZXZpZXcgaW1hZ2VcbiAgICogQHJldHVybnMge1Byb21pc2U8VXBsb2FkUmVzcG9uc2VGb3JtYXQ+fVxuICAgKi9cbiAgdXBsb2FkQnlVcmwodXJsLCB7IHNldFByZXZpZXcgfSkge1xuICAgIHNldFByZXZpZXcodXJsKTtcbiAgICByZXR1cm4gYWpheC5wb3N0KHtcbiAgICAgIHVybDogdGhpcy5jb25maWcuZW5kcG9pbnRzLmJ5VXJsLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHVybDogdXJsXG4gICAgICB9LCB0aGlzLmNvbmZpZy5hZGRpdGlvbmFsUmVxdWVzdERhdGEpLFxuICAgICAgdHlwZTogYWpheC5jb250ZW50VHlwZS5KU09OLFxuICAgICAgaGVhZGVyczogdGhpcy5jb25maWcuYWRkaXRpb25hbFJlcXVlc3RIZWFkZXJzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGNsaWNrcyBvbiB0aGUgdXBsb2FkIGZpbGUgYnV0dG9uIG9yIGJ5IHBhc3RlIGFuZCBkcmFnIGFuZCBkcm9wXG4gICAqIEBmaXJlcyBhamF4LnBvc3QoKVxuICAgKiBAcGFyYW0ge0ZpbGV9IGZpbGUgLSBmaWxlIHBhc3RlZCBieSBkcmFnLW4tZHJvcFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyl9IHNldFByZXZpZXcgLSBjYWxsYmFjayBmb3Igc2V0IHByZXZpZXcgaW1hZ2VcbiAgICogQHJldHVybnMge1Byb21pc2U8VXBsb2FkUmVzcG9uc2VGb3JtYXQ+fVxuICAgKi9cbiAgdXBsb2FkQnlGaWxlKGZpbGUsIHsgc2V0UHJldmlldyB9KSB7XG4gICAgLyoqXG4gICAgICogTG9hZCBmaWxlIGZvciBwcmV2aWV3XG4gICAgICogQHR5cGUge0ZpbGVSZWFkZXJ9XG4gICAgICovXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgc2V0UHJldmlldyhlLnRhcmdldC5yZXN1bHQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlIEZvcm0gRGF0YSBmb3Igc2VuZGluZ1xuICAgICAqL1xuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgZm9ybURhdGEuYXBwZW5kKHRoaXMuY29uZmlnLmZpZWxkLCBmaWxlKTtcblxuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmNvbmZpZy5hZGRpdGlvbmFsUmVxdWVzdERhdGEpLmxlbmd0aCkge1xuICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5jb25maWcuYWRkaXRpb25hbFJlcXVlc3REYXRhKS5mb3JFYWNoKChbbmFtZSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChuYW1lLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWpheC5wb3N0KHtcbiAgICAgIHVybDogdGhpcy5jb25maWcuZW5kcG9pbnRzLmJ5RmlsZSxcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgdHlwZTogYWpheC5jb250ZW50VHlwZS5KU09OLFxuICAgICAgaGVhZGVyczogdGhpcy5jb25maWcuYWRkaXRpb25hbFJlcXVlc3RIZWFkZXJzXG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=