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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

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

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

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

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--5-2!./src/index.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-tool {\n  --bg-color: #CDD1E0;\n  --front-color: #388AE5;\n  --border-color: #E8E8EB;\n}\n\n  .image-tool__image {\n    border-radius: 3px;\n    overflow: hidden;\n    margin-bottom: 10px;\n  }\n\n  .image-tool__image-picture {\n      max-width: 100%;\n      vertical-align: bottom;\n      display: block;\n    }\n\n  .image-tool__image-preloader {\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      background-size: cover;\n      margin: auto;\n      position: relative;\n      background-color: var(--bg-color);\n      background-position: center center;\n    }\n\n  .image-tool__image-preloader::after {\n        content: '';\n        position: absolute;\n        z-index: 3;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        border: 2px solid var(--bg-color);\n        border-top-color: var(--front-color);\n        left: 50%;\n        top: 50%;\n        margin-top: -30px;\n        margin-left: -30px;\n        animation: image-preloader-spin 2s infinite linear;\n        box-sizing: border-box;\n      }\n\n  .image-tool--empty .image-tool__image {\n      display: none;\n    }\n\n  .image-tool--empty .image-tool__caption, .image-tool--loading .image-tool__caption {\n      display: none;\n    }\n\n  .image-tool--filled .cdx-button {\n      display: none;\n    }\n\n  .image-tool--filled .image-tool__image-preloader {\n        display: none;\n      }\n\n  .image-tool--loading .image-tool__image {\n      min-height: 200px;\n      display: flex;\n      border: 1px solid var(--border-color);\n      background-color: #fff;\n    }\n\n  .image-tool--loading .image-tool__image-picture {\n        display: none;\n      }\n\n  .image-tool--loading .cdx-button {\n      display: none;\n    }\n\n  /**\n   * Tunes\n   * ----------------\n   */\n\n  .image-tool--withBorder .image-tool__image {\n      border: 1px solid var(--border-color);\n    }\n\n  .image-tool--withBackground .image-tool__image {\n      padding: 15px;\n      background: var(--bg-color);\n    }\n\n  .image-tool--withBackground .image-tool__image-picture {\n        max-width: 60%;\n        margin: 0 auto;\n      }\n\n  .image-tool--stretched .image-tool__image-picture {\n        width: 100%;\n      }\n\n@keyframes image-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}", ""]);

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

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/postcss-loader/src??ref--5-2!./index.css */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Uploader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uploader", function() { return Uploader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageTool; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _tunes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tunes */ "./src/tunes.js");
/* harmony import */ var _svg_toolbox_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./svg/toolbox.svg */ "./src/svg/toolbox.svg");
/* harmony import */ var _svg_toolbox_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_svg_toolbox_svg__WEBPACK_IMPORTED_MODULE_7__);





/**
 * Image Tool for the Editor.js
 * @author CodeX <team@ifmo.su>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */

/**
 * @typedef {object} ImageToolData
 * @description Image Tool's input and output data format
 * @property {string} caption — image caption
 * @property {boolean} withBorder - should image be rendered with border
 * @property {boolean} withBackground - should image be rendered with background
 * @property {boolean} stretched - should image be stretched to full width of container
 * @property {object} file — Image file data returned from backend
 * @property {string} file.url — image URL
 */




/**
 * Interface for classes that represent a uploader
 * @interface Uploader
 */

var Uploader =
/*#__PURE__*/
function () {
  function Uploader() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Uploader);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Uploader, [{
    key: "uploadByUrl",

    /**
     * Handle clicks on the upload file button
     * @param {string} url - image source url
     * @param {Object} context - context object with helpers and other properties
     * @param {function(string)} context.setPreview - callback for set preview image
     * @returns {Promise<UploadResponseFormat>}
     */
    value: function uploadByUrl(url, _ref) {
      var setPreview = _ref.setPreview;
    }
    /**
     * Handle clicks on the upload file button
     * @param {File} file - file pasted by drag-n-drop
     * @param {Object} context - context object with helpers and other properties
     * @param {function(string)} context.setPreview - callback for set preview image
     * @returns {Promise<UploadResponseFormat>}
     */

  }, {
    key: "uploadByFile",
    value: function uploadByFile(file, _ref2) {
      var setPreview = _ref2.setPreview;
    }
  }]);

  return Uploader;
}();
/**
 * @typedef {object} ImageConfig
 * @description Config supported by Tool
 * @property {string} captionPlaceholder - placeholder for Caption field
 * @property {string} buttonContent - overrides for Select File button
 * @property {Uploader} uploader - api transport for upload images
 */

/**
 * @typedef {object} UploadResponseFormat
 * @description This format expected from backend on file uploading
 * @property {number} success - 1 for successful uploading, 0 for failure
 * @property {object} file - Object with file data.
 *                           'url' is required,
 *                           also can contain any additional data that will be saved and passed back
 * @property {string} file.url - [Required] image source URL
 */

var ImageTool =
/*#__PURE__*/
function () {
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ImageTool, null, [{
    key: "toolbox",

    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @return {{icon: string, title: string}}
     */
    get: function get() {
      return {
        icon: _svg_toolbox_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
        title: 'Image'
      };
    }
    /**
     * @param {ImageToolData} data - previously saved data
     * @param {ImageConfig} config - user config for Tool
     * @param {object} api - Editor.js API
     */

  }]);

  function ImageTool(_ref3) {
    var _this = this;

    var data = _ref3.data,
        config = _ref3.config,
        api = _ref3.api;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ImageTool);

    /**
     * @param {string} src - url on preview image while uploading file
     */
    this.setPreview = function (src) {
      _this.ui.showPreloader(src);
    };

    this.api = api;
    /**
     * Tool's initial config
     */

    this.config = {
      types: config.types || 'image/*',
      captionPlaceholder: config.captionPlaceholder || 'Caption',
      buttonContent: config.buttonContent || ''
    };
    /**
     * Module for file uploading
     * @type {Uploader}
     */

    this.uploader = config.uploader;
    /**
     * Module for working with UI
     */

    this.ui = new _ui__WEBPACK_IMPORTED_MODULE_5__["default"]({
      api: api,
      config: this.config,
      onSelectFile: function onSelectFile(file) {
        _this.handleUpload(_this.uploader.uploadByFile(file, {
          setPreview: _this.setPreview
        }));
      }
    });
    /**
     * Module for working with tunes
     */

    this.tunes = new _tunes__WEBPACK_IMPORTED_MODULE_6__["default"]({
      api: api,
      onChange: function onChange(tuneName) {
        return _this.tuneToggled(tuneName);
      }
    });
    /**
     * Set saved state
     */

    this._data = {};
    this.data = data;
  }
  /**
   * Renders Block content
   * @public
   *
   * @return {HTMLDivElement}
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ImageTool, [{
    key: "render",
    value: function render() {
      return this.ui.render(this.data);
    }
    /**
     * Return Block data
     * @public
     *
     * @return {ImageToolData}
     */

  }, {
    key: "save",
    value: function save() {
      var caption = this.ui.nodes.caption;
      this._data.caption = caption.innerHTML;
      return this.data;
    }
    /**
     * cleanup after ui
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.ui.destroy();
    }
    /**
     * Makes buttons with tunes: add background, add border, stretch image
     * @public
     *
     * @return {Element}
     */

  }, {
    key: "renderSettings",
    value: function renderSettings() {
      return this.tunes.render(this.data);
    }
    /**
     * Fires after clicks on the Toolbox Image Icon
     * Initiates click on the Select File button
     * @public
     */

  }, {
    key: "appendCallback",
    value: function appendCallback() {
      this.ui.nodes.fileButton.click();
    }
    /**
     * Specify paste substitutes
     *
     * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
     */

  }, {
    key: "onPaste",

    /**
     * Specify paste handlers
     * @public
     *
     * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
     */
    value: function () {
      var _onPaste = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var image, response, _file, url, file;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = event.type;
                _context.next = _context.t0 === 'tag' ? 3 : _context.t0 === 'pattern' ? 15 : _context.t0 === 'file' ? 18 : 21;
                break;

              case 3:
                image = event.detail.data;
                /** Images from PDF */

                if (!/^blob:/.test(image.src)) {
                  _context.next = 13;
                  break;
                }

                _context.next = 7;
                return fetch(image.src);

              case 7:
                response = _context.sent;
                _context.next = 10;
                return response.blob();

              case 10:
                _file = _context.sent;
                this.uploadFile(_file);
                return _context.abrupt("break", 21);

              case 13:
                this.uploadUrl(image.src);
                return _context.abrupt("break", 21);

              case 15:
                url = event.detail.data;
                this.uploadUrl(url);
                return _context.abrupt("break", 21);

              case 18:
                file = event.detail.file;
                this.uploadFile(file);
                return _context.abrupt("break", 21);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onPaste(_x) {
        return _onPaste.apply(this, arguments);
      }

      return onPaste;
    }()
    /**
     * Private methods
     * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
     */

    /**
     * Stores all Tool's data
     * @private
     *
     * @param {ImageToolData} data
     */

  }, {
    key: "onUpload",

    /**
     * File uploading callback
     * @private
     *
     * @param {UploadResponseFormat} response
     */
    value: function onUpload(response) {
      var body = response.body;

      if (body.success && body.file) {
        this.image = body.file;
      } else {
        this.uploadingFailed('incorrect response: ' + JSON.stringify(body));
      }
    }
    /**
     * Handle uploader errors
     * @private
     *
     * @param {string} errorText
     */

  }, {
    key: "uploadingFailed",
    value: function uploadingFailed(errorText) {
      console.log('Image Tool: uploading failed because of', errorText);
      this.api.notifier.show({
        message: 'Can not upload an image, try another',
        style: 'error'
      });
      this.ui.hidePreloader();
    }
    /**
     * Callback fired when Block Tune is activated
     * @private
     *
     * @param {string} tuneName - tune that has been clicked
     */

  }, {
    key: "tuneToggled",
    value: function tuneToggled(tuneName) {
      // inverse tune state
      this.setTune(tuneName, !this._data[tuneName]);
    }
    /**
     * Set one tune
     * @param {string} tuneName - {@link Tunes.tunes}
     * @param {boolean} value - tune state
     */

  }, {
    key: "setTune",
    value: function setTune(tuneName, value) {
      var _this2 = this;

      this._data[tuneName] = value;
      this.ui.applyTune(tuneName, value);

      if (tuneName === 'stretched') {
        var blockId = this.api.blocks.getCurrentBlockIndex();
        setTimeout(function () {
          /** Wait until api is ready */
          _this2.api.blocks.stretchBlock(blockId, value);
        }, 0);
      }
    }
    /**
     * Show preloader and upload image file
     *
     * @param {File} file
     */

  }, {
    key: "uploadFile",
    value: function uploadFile(file) {
      this.handleUpload(this.uploader.uploadByFile(file, {
        setPreview: this.setPreview
      }));
    }
    /**
     * Show preloader and upload image by target url
     *
     * @param {string} url
     */

  }, {
    key: "uploadUrl",
    value: function uploadUrl(url) {
      this.handleUpload(this.uploader.uploadByUrl(url, {
        setPreview: this.setPreview
      }));
    }
    /**
     * Helper for handle promise
     * @param {Promise} promise
     */

  }, {
    key: "handleUpload",
    value: function handleUpload(promise) {
      var _this3 = this;

      promise.then(function (response) {
        _this3.onUpload(response);
      }).catch(function (error) {
        _this3.uploadingFailed(error);
      });
    }
  }, {
    key: "data",
    set: function set(data) {
      var _this4 = this;

      this.image = data.file;
      this._data.caption = data.caption || '';
      this.ui.fillCaption(this._data.caption);
      _tunes__WEBPACK_IMPORTED_MODULE_6__["default"].tunes.forEach(function (_ref4) {
        var tune = _ref4.name;
        var value = data[tune] !== undefined ? data[tune] : false;

        _this4.setTune(tune, value);
      });
    }
    /**
     * Return Tool data
     * @private
     *
     * @return {ImageToolData} data
     */
    ,
    get: function get() {
      return this._data;
    }
    /**
     * Set new image file
     * @private
     *
     * @param {object} file - uploaded file data
     */

  }, {
    key: "image",
    set: function set(file) {
      this._data.file = file || {};

      if (file && file.url) {
        this.ui.fillImage(file.url);
      }
    }
  }], [{
    key: "pasteConfig",
    get: function get() {
      return {
        /**
         * Paste HTML into Editor
         */
        tags: ['img'],

        /**
         * Paste URL of image into the Editor
         */
        patterns: {
          image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i
        },

        /**
         * Drag n drop file from into the Editor
         */
        files: {
          mimeTypes: ['image/*']
        }
      };
    }
  }]);

  return ImageTool;
}();



/***/ }),

/***/ "./src/svg/background.svg":
/*!********************************!*\
  !*** ./src/svg/background.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z\"></path></svg>"

/***/ }),

/***/ "./src/svg/border.svg":
/*!****************************!*\
  !*** ./src/svg/border.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z\"></path></svg>"

/***/ }),

/***/ "./src/svg/button-icon.svg":
/*!*********************************!*\
  !*** ./src/svg/button-icon.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z\"></path></svg>"

/***/ }),

/***/ "./src/svg/stretched.svg":
/*!*******************************!*\
  !*** ./src/svg/stretched.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg width=\"17\" height=\"10\" viewBox=\"0 0 17 10\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z\"></path></svg>"

/***/ }),

/***/ "./src/svg/toolbox.svg":
/*!*****************************!*\
  !*** ./src/svg/toolbox.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg width=\"17\" height=\"15\" viewBox=\"0 0 336 276\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M291 150.242V79c0-18.778-15.222-34-34-34H79c-18.778 0-34 15.222-34 34v42.264l67.179-44.192 80.398 71.614 56.686-29.14L291 150.242zm-.345 51.622l-42.3-30.246-56.3 29.884-80.773-66.925L45 174.187V197c0 18.778 15.222 34 34 34h178c17.126 0 31.295-12.663 33.655-29.136zM79 0h178c43.63 0 79 35.37 79 79v118c0 43.63-35.37 79-79 79H79c-43.63 0-79-35.37-79-79V79C0 35.37 35.37 0 79 0z\"></path></svg>"

/***/ }),

/***/ "./src/tunes.js":
/*!**********************!*\
  !*** ./src/tunes.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tunes; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _svg_background_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg/background.svg */ "./src/svg/background.svg");
/* harmony import */ var _svg_background_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_svg_background_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _svg_border_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svg/border.svg */ "./src/svg/border.svg");
/* harmony import */ var _svg_border_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_svg_border_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _svg_stretched_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svg/stretched.svg */ "./src/svg/stretched.svg");
/* harmony import */ var _svg_stretched_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_svg_stretched_svg__WEBPACK_IMPORTED_MODULE_5__);






/**
 * Working with Block Tunes
 */

var Tunes =
/*#__PURE__*/
function () {
  /**
   * @param {object} api - Editor API
   * @param {function} onChange - tune toggling callback
   */
  function Tunes(_ref) {
    var api = _ref.api,
        onChange = _ref.onChange;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Tunes);

    this.api = api;
    this.onChange = onChange;
    this.buttons = [];
  }
  /**
   * Available Image tunes
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Tunes, [{
    key: "render",

    /**
     * Makes buttons with tunes: add background, add border, stretch image
     * @param {ImageToolData} toolData
     * @return {Element}
     */
    value: function render(toolData) {
      var _this = this;

      var wrapper = Object(_ui__WEBPACK_IMPORTED_MODULE_2__["make"])('div', this.CSS.wrapper);
      this.buttons = [];
      Tunes.tunes.forEach(function (tune) {
        var el = Object(_ui__WEBPACK_IMPORTED_MODULE_2__["make"])('div', [_this.CSS.buttonBase, _this.CSS.button], {
          innerHTML: tune.icon,
          title: tune.title
        });
        el.addEventListener('click', function () {
          _this.tuneClicked(tune.name);
        });
        el.dataset.tune = tune.name;
        el.classList.toggle(_this.CSS.buttonActive, toolData[tune.name]);

        _this.buttons.push(el);

        wrapper.appendChild(el);
      });
      return wrapper;
    }
    /**
     * Clicks to one of the tunes
     * @param {string} tuneName - clicked tune name
     */

  }, {
    key: "tuneClicked",
    value: function tuneClicked(tuneName) {
      var button = this.buttons.find(function (el) {
        return el.dataset.tune === tuneName;
      });
      button.classList.toggle(this.CSS.buttonActive, !button.classList.contains(this.CSS.buttonActive));
      this.onChange(tuneName);
    }
  }, {
    key: "CSS",

    /**
     * Styles
     * @return {{wrapper: string, buttonBase: *, button: string, buttonActive: *}}
     */
    get: function get() {
      return {
        wrapper: '',
        buttonBase: this.api.styles.settingsButton,
        button: 'image-tool__tune',
        buttonActive: this.api.styles.settingsButtonActive
      };
    }
  }], [{
    key: "tunes",
    get: function get() {
      return [{
        name: 'withBorder',
        icon: _svg_border_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
        title: 'With border'
      }, {
        name: 'stretched',
        icon: _svg_stretched_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
        title: 'Stretch image'
      }, {
        name: 'withBackground',
        icon: _svg_background_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
        title: 'With background'
      }];
    }
  }]);

  return Tunes;
}();



/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: default, make */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ui; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "make", function() { return make; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _svg_button_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svg/button-icon.svg */ "./src/svg/button-icon.svg");
/* harmony import */ var _svg_button_icon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_svg_button_icon_svg__WEBPACK_IMPORTED_MODULE_4__);





/**
 * @type {HTMLInputElement}
 */

var fileInput = null;
/**
 * Class for working with UI:
 *  - rendering base structure
 *  - show/hide preview
 *  - apply tune view
 */

var Ui =
/*#__PURE__*/
function () {
  /**
   * @param {object} api - Editor.js API
   * @param {ImageConfig} config - user config
   * @param {function} onSelectFile - callback for clicks on Select file buttor
   */
  function Ui(_ref) {
    var api = _ref.api,
        config = _ref.config,
        onSelectFile = _ref.onSelectFile;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Ui);

    this.api = api;
    this.config = config;
    this.onSelectFile = onSelectFile;
    this.nodes = {
      wrapper: make('div', [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: make('div', [this.CSS.imageContainer]),
      fileButton: this.createFileButton(),
      imageEl: undefined,
      imagePreloader: make('div', this.CSS.imagePreloader),
      caption: make('div', [this.CSS.input, this.CSS.caption], {
        contentEditable: true
      })
    };
    /**
     * Create base structure
     *  <wrapper>
     *    <image-container>
     *      <image-preloader />
     *    </image-container>
     *    <caption />
     *    <select-file-button />
     *  </wrapper>
     */

    this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder;
    this.nodes.imageContainer.appendChild(this.nodes.imagePreloader);
    this.nodes.wrapper.appendChild(this.nodes.imageContainer);
    this.nodes.wrapper.appendChild(this.nodes.caption);
    this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }
  /**
   * CSS classes
   * @constructor
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Ui, [{
    key: "render",

    /**
     * @param {ImageToolData} toolData
     * @return {HTMLDivElement}
     */
    value: function render(toolData) {
      if (!toolData.file || Object.keys(toolData.file).length === 0) {
        this.toggleStatus(Ui.status.EMPTY);
      } else {
        this.toggleStatus(Ui.status.UPLOADING);
      }

      return this.nodes.wrapper;
    }
    /**
     * Creates upload-file button
     * @return {Element}
     */

  }, {
    key: "createFileButton",
    value: function createFileButton() {
      var _this = this;

      var button = make('div', [this.CSS.button]);
      button.innerHTML = this.config.buttonContent || "".concat(_svg_button_icon_svg__WEBPACK_IMPORTED_MODULE_4___default.a, " Select an Image");
      button.addEventListener('click', function () {
        _this.openFileDialog().then(_this.onSelectFile);
      });
      return button;
    }
    /**
     * open file dialog
     * @returns {Promise<File}
     */

  }, {
    key: "openFileDialog",
    value: function openFileDialog() {
      var _this2 = this;

      return new Promise(function (resolve) {
        /**
         * Create a new INPUT element or reuse old INPUT
         */
        fileInput = fileInput || document.createElement('INPUT');
        /**
         * collect all inputs for better clean up
         */

        /**
         * Set a 'FILE' type for this input element
         * @type {string}
         */

        fileInput.type = 'file';

        if (_this2.config.types) {
          fileInput.setAttribute('accept', _this2.config.types);
        }
        /**
         * Do not show element
         */


        fileInput.style.display = 'none';
        /**
         * Append element to the body
         * Fix using module on mobile devices
         */

        document.body.appendChild(fileInput);
        /**
         * Add onchange listener for «choose file» pop-up
         */

        fileInput.addEventListener('change', function (event) {
          /**
           * Get files from input field
           */
          var _event$target$files = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(event.target.files, 1),
              file = _event$target$files[0];
          /**
           * Return ready to be uploaded FormData object
           */


          resolve(file);
          fileInput.parentElement.removeChild(fileInput);
          fileInput = null;
        }, false);
        /**
         * Fire click event on «input file» field
         */

        fileInput.click();
      });
    }
    /**
     * Shows uploading preloader
     * @param {string} src - preview source
     */

  }, {
    key: "showPreloader",
    value: function showPreloader(src) {
      this.nodes.imagePreloader.style.backgroundImage = "url(".concat(src, ")");
      this.toggleStatus(Ui.status.UPLOADING);
    }
    /**
     * Hide uploading preloader
     */

  }, {
    key: "hidePreloader",
    value: function hidePreloader() {
      this.nodes.imagePreloader.style.backgroundImage = '';
      this.toggleStatus(Ui.status.EMPTY);
    }
    /**
     * Shows an image
     * @param {string} url
     */

  }, {
    key: "fillImage",
    value: function fillImage(url) {
      var _this3 = this;

      /**
       * Check for a source extension to compose element correctly: video tag for mp4, img — for others
       */
      var tag = /\.mp4$/.test(url) ? 'VIDEO' : 'IMG';
      var attributes = {
        src: url
      };
      /**
       * We use eventName variable because IMG and VIDEO tags have different event to be called on source load
       * - IMG: load
       * - VIDEO: loadeddata
       * @type {string}
       */

      var eventName = 'load';
      /**
       * Update attributes and eventName if source is a mp4 video
       */

      if (tag === 'VIDEO') {
        /**
         * Add attributes for playing muted mp4 as a gif
         * @type {boolean}
         */
        attributes.autoplay = true;
        attributes.loop = true;
        attributes.muted = true;
        attributes.playsinline = true;
        /**
         * Change event to be listened
         * @type {string}
         */

        eventName = 'loadeddata';
      }
      /**
       * Compose tag with defined attributes
       * @type {Element}
       */


      this.nodes.imageEl = make(tag, this.CSS.imageEl, attributes);
      /**
       * Add load event listener
       */

      this.nodes.imageEl.addEventListener(eventName, function () {
        _this3.toggleStatus(Ui.status.FILLED);
        /**
         * Preloader does not exists on first rendering with presaved data
         */


        if (_this3.nodes.imagePreloader) {
          _this3.nodes.imagePreloader.style.backgroundImage = '';
        }
      });
      this.nodes.imageContainer.appendChild(this.nodes.imageEl);
    }
    /**
     * Shows caption input
     * @param {string} text - caption text
     */

  }, {
    key: "fillCaption",
    value: function fillCaption(text) {
      if (this.nodes.caption) {
        this.nodes.caption.innerHTML = text;
      }
    }
    /**
     * Changes UI status
     * @param {string} status - see {@link Ui.status} constants
     */

  }, {
    key: "toggleStatus",
    value: function toggleStatus(status) {
      for (var statusType in Ui.status) {
        if (Ui.status.hasOwnProperty(statusType)) {
          this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper, "--").concat(Ui.status[statusType]), status === Ui.status[statusType]);
        }
      }
    }
    /**
     * Apply visual representation of activated tune
     * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
     * @param {boolean} status - true for enable, false for disable
     */

  }, {
    key: "applyTune",
    value: function applyTune(tuneName, status) {
      this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper, "--").concat(tuneName), status);
    }
    /**
     * cleanup input
     */

  }, {
    key: "destroy",
    value: function destroy() {
      if (fileInput) {
        fileInput.parentElement.removeChild(fileInput);
        fileInput = null;
      }
    }
  }, {
    key: "CSS",
    get: function get() {
      return {
        baseClass: this.api.styles.block,
        loading: this.api.styles.loader,
        input: this.api.styles.input,
        button: this.api.styles.button,

        /**
         * Tool's classes
         */
        wrapper: 'image-tool',
        imageContainer: 'image-tool__image',
        imagePreloader: 'image-tool__image-preloader',
        imageEl: 'image-tool__image-picture',
        caption: 'image-tool__caption'
      };
    }
  }], [{
    key: "status",

    /**
     * Ui statuses:
     * - empty
     * - uploading
     * - filled
     * @return {{EMPTY: string, UPLOADING: string, FILLED: string}}
     */
    get: function get() {
      return {
        EMPTY: 'empty',
        UPLOADING: 'loading',
        FILLED: 'filled'
      };
    }
  }]);

  return Ui;
}();
/**
 * Helper for making Elements with attributes
 *
 * @param  {string} tagName           - new Element tag name
 * @param  {array|string} classNames  - list or name of CSS class
 * @param  {Object} attributes        - any attributes
 * @return {Element}
 */



var make = function make(tagName) {
  var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var el = document.createElement(tagName);

  if (Array.isArray(classNames)) {
    var _el$classList;

    (_el$classList = el.classList).add.apply(_el$classList, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(classNames));
  } else if (classNames) {
    el.classList.add(classNames);
  }

  for (var attrName in attributes) {
    el[attrName] = attributes[attrName];
  }

  return el;
};

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JbWFnZVRvb2wvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0ltYWdlVG9vbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9JbWFnZVRvb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9JbWFnZVRvb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9JbWFnZVRvb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL0ltYWdlVG9vbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL0ltYWdlVG9vbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0ltYWdlVG9vbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9JbWFnZVRvb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly9JbWFnZVRvb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vSW1hZ2VUb29sLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vSW1hZ2VUb29sLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9JbWFnZVRvb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9JbWFnZVRvb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSW1hZ2VUb29sLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9JbWFnZVRvb2wvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vSW1hZ2VUb29sLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vSW1hZ2VUb29sLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9JbWFnZVRvb2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vSW1hZ2VUb29sLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly9JbWFnZVRvb2wvLi9zcmMvaW5kZXguY3NzPzkxMmUiLCJ3ZWJwYWNrOi8vSW1hZ2VUb29sLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0ltYWdlVG9vbC8uL3NyYy9zdmcvYmFja2dyb3VuZC5zdmciLCJ3ZWJwYWNrOi8vSW1hZ2VUb29sLy4vc3JjL3N2Zy9ib3JkZXIuc3ZnIiwid2VicGFjazovL0ltYWdlVG9vbC8uL3NyYy9zdmcvYnV0dG9uLWljb24uc3ZnIiwid2VicGFjazovL0ltYWdlVG9vbC8uL3NyYy9zdmcvc3RyZXRjaGVkLnN2ZyIsIndlYnBhY2s6Ly9JbWFnZVRvb2wvLi9zcmMvc3ZnL3Rvb2xib3guc3ZnIiwid2VicGFjazovL0ltYWdlVG9vbC8uL3NyYy90dW5lcy5qcyIsIndlYnBhY2s6Ly9JbWFnZVRvb2wvLi9zcmMvdWkuanMiXSwibmFtZXMiOlsiVXBsb2FkZXIiLCJ1cmwiLCJzZXRQcmV2aWV3IiwiZmlsZSIsIkltYWdlVG9vbCIsImljb24iLCJUb29sYm94SWNvbiIsInRpdGxlIiwiZGF0YSIsImNvbmZpZyIsImFwaSIsInNyYyIsInVpIiwic2hvd1ByZWxvYWRlciIsInR5cGVzIiwiY2FwdGlvblBsYWNlaG9sZGVyIiwiYnV0dG9uQ29udGVudCIsInVwbG9hZGVyIiwiVWkiLCJvblNlbGVjdEZpbGUiLCJoYW5kbGVVcGxvYWQiLCJ1cGxvYWRCeUZpbGUiLCJ0dW5lcyIsIlR1bmVzIiwib25DaGFuZ2UiLCJ0dW5lTmFtZSIsInR1bmVUb2dnbGVkIiwiX2RhdGEiLCJyZW5kZXIiLCJjYXB0aW9uIiwibm9kZXMiLCJpbm5lckhUTUwiLCJkZXN0cm95IiwiZmlsZUJ1dHRvbiIsImNsaWNrIiwiZXZlbnQiLCJ0eXBlIiwiaW1hZ2UiLCJkZXRhaWwiLCJ0ZXN0IiwiZmV0Y2giLCJyZXNwb25zZSIsImJsb2IiLCJ1cGxvYWRGaWxlIiwidXBsb2FkVXJsIiwiYm9keSIsInN1Y2Nlc3MiLCJ1cGxvYWRpbmdGYWlsZWQiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3JUZXh0IiwiY29uc29sZSIsImxvZyIsIm5vdGlmaWVyIiwic2hvdyIsIm1lc3NhZ2UiLCJzdHlsZSIsImhpZGVQcmVsb2FkZXIiLCJzZXRUdW5lIiwidmFsdWUiLCJhcHBseVR1bmUiLCJibG9ja0lkIiwiYmxvY2tzIiwiZ2V0Q3VycmVudEJsb2NrSW5kZXgiLCJzZXRUaW1lb3V0Iiwic3RyZXRjaEJsb2NrIiwidXBsb2FkQnlVcmwiLCJwcm9taXNlIiwidGhlbiIsIm9uVXBsb2FkIiwiY2F0Y2giLCJlcnJvciIsImZpbGxDYXB0aW9uIiwiZm9yRWFjaCIsInR1bmUiLCJuYW1lIiwidW5kZWZpbmVkIiwiZmlsbEltYWdlIiwidGFncyIsInBhdHRlcm5zIiwiZmlsZXMiLCJtaW1lVHlwZXMiLCJidXR0b25zIiwidG9vbERhdGEiLCJ3cmFwcGVyIiwibWFrZSIsIkNTUyIsImVsIiwiYnV0dG9uQmFzZSIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0dW5lQ2xpY2tlZCIsImRhdGFzZXQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJidXR0b25BY3RpdmUiLCJwdXNoIiwiYXBwZW5kQ2hpbGQiLCJmaW5kIiwiY29udGFpbnMiLCJzdHlsZXMiLCJzZXR0aW5nc0J1dHRvbiIsInNldHRpbmdzQnV0dG9uQWN0aXZlIiwiYm9yZGVySWNvbiIsInN0cmV0Y2hlZEljb24iLCJiZ0ljb24iLCJmaWxlSW5wdXQiLCJiYXNlQ2xhc3MiLCJpbWFnZUNvbnRhaW5lciIsImNyZWF0ZUZpbGVCdXR0b24iLCJpbWFnZUVsIiwiaW1hZ2VQcmVsb2FkZXIiLCJpbnB1dCIsImNvbnRlbnRFZGl0YWJsZSIsInBsYWNlaG9sZGVyIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInRvZ2dsZVN0YXR1cyIsInN0YXR1cyIsIkVNUFRZIiwiVVBMT0FESU5HIiwiYnV0dG9uSWNvbiIsIm9wZW5GaWxlRGlhbG9nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJkaXNwbGF5IiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwiYmFja2dyb3VuZEltYWdlIiwidGFnIiwiYXR0cmlidXRlcyIsImV2ZW50TmFtZSIsImF1dG9wbGF5IiwibG9vcCIsIm11dGVkIiwicGxheXNpbmxpbmUiLCJGSUxMRUQiLCJ0ZXh0Iiwic3RhdHVzVHlwZSIsImhhc093blByb3BlcnR5IiwiYmxvY2siLCJsb2FkaW5nIiwibG9hZGVyIiwidGFnTmFtZSIsImNsYXNzTmFtZXMiLCJBcnJheSIsImlzQXJyYXkiLCJhZGQiLCJhdHRyTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FB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OztBQUVwQztBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2h0QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsdURBQVE7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztB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LE1BRU8sSUFBSUEsVUFBSixFQUFnQjtBQUNyQjlELE1BQUUsQ0FBQ00sU0FBSCxDQUFhMkQsR0FBYixDQUFpQkgsVUFBakI7QUFDRDs7QUFFRCxPQUFLLElBQUlJLFFBQVQsSUFBcUJsQixVQUFyQixFQUFpQztBQUMvQmhELE1BQUUsQ0FBQ2tFLFFBQUQsQ0FBRixHQUFlbEIsVUFBVSxDQUFDa0IsUUFBRCxDQUF6QjtBQUNEOztBQUVELFNBQU9sRSxFQUFQO0FBQ0QsQ0FkTSxDIiwiZmlsZSI6ImltYWdldG9vbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkltYWdlVG9vbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJJbWFnZVRvb2xcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwiZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW1hZ2UtdG9vbCB7XFxuICAtLWJnLWNvbG9yOiAjQ0REMUUwO1xcbiAgLS1mcm9udC1jb2xvcjogIzM4OEFFNTtcXG4gIC0tYm9yZGVyLWNvbG9yOiAjRThFOEVCO1xcbn1cXG5cXG4gIC5pbWFnZS10b29sX19pbWFnZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG5cXG4gIC5pbWFnZS10b29sX19pbWFnZS1waWN0dXJlIHtcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbiAgLmltYWdlLXRvb2xfX2ltYWdlLXByZWxvYWRlciB7XFxuICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICAgIH1cXG5cXG4gIC5pbWFnZS10b29sX19pbWFnZS1wcmVsb2FkZXI6OmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMztcXG4gICAgICAgIHdpZHRoOiA2MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmctY29sb3IpO1xcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tZnJvbnQtY29sb3IpO1xcbiAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcXG4gICAgICAgIGFuaW1hdGlvbjogaW1hZ2UtcHJlbG9hZGVyLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICB9XFxuXFxuICAuaW1hZ2UtdG9vbC0tZW1wdHkgLmltYWdlLXRvb2xfX2ltYWdlIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAuaW1hZ2UtdG9vbC0tZW1wdHkgLmltYWdlLXRvb2xfX2NhcHRpb24sIC5pbWFnZS10b29sLS1sb2FkaW5nIC5pbWFnZS10b29sX19jYXB0aW9uIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAuaW1hZ2UtdG9vbC0tZmlsbGVkIC5jZHgtYnV0dG9uIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAuaW1hZ2UtdG9vbC0tZmlsbGVkIC5pbWFnZS10b29sX19pbWFnZS1wcmVsb2FkZXIge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB9XFxuXFxuICAuaW1hZ2UtdG9vbC0tbG9hZGluZyAuaW1hZ2UtdG9vbF9faW1hZ2Uge1xcbiAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB9XFxuXFxuICAuaW1hZ2UtdG9vbC0tbG9hZGluZyAuaW1hZ2UtdG9vbF9faW1hZ2UtcGljdHVyZSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIH1cXG5cXG4gIC5pbWFnZS10b29sLS1sb2FkaW5nIC5jZHgtYnV0dG9uIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAvKipcXG4gICAqIFR1bmVzXFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tXFxuICAgKi9cXG5cXG4gIC5pbWFnZS10b29sLS13aXRoQm9yZGVyIC5pbWFnZS10b29sX19pbWFnZSB7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgfVxcblxcbiAgLmltYWdlLXRvb2wtLXdpdGhCYWNrZ3JvdW5kIC5pbWFnZS10b29sX19pbWFnZSB7XFxuICAgICAgcGFkZGluZzogMTVweDtcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XFxuICAgIH1cXG5cXG4gIC5pbWFnZS10b29sLS13aXRoQmFja2dyb3VuZCAuaW1hZ2UtdG9vbF9faW1hZ2UtcGljdHVyZSB7XFxuICAgICAgICBtYXgtd2lkdGg6IDYwJTtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgIH1cXG5cXG4gIC5pbWFnZS10b29sLS1zdHJldGNoZWQgLmltYWdlLXRvb2xfX2ltYWdlLXBpY3R1cmUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgfVxcblxcbkBrZXlmcmFtZXMgaW1hZ2UtcHJlbG9hZGVyLXNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xufSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgc2VsZik7XG4gIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtMiEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTIhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtMiEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qKlxuICogSW1hZ2UgVG9vbCBmb3IgdGhlIEVkaXRvci5qc1xuICogQGF1dGhvciBDb2RlWCA8dGVhbUBpZm1vLnN1PlxuICogQGxpY2Vuc2UgTUlUXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vZWRpdG9yLWpzL2ltYWdlfVxuICpcbiAqIFRvIGRldmVsb3BlcnMuXG4gKiBUbyBzaW1wbGlmeSBUb29sIHN0cnVjdHVyZSwgd2Ugc3BsaXQgaXQgdG8gNCBwYXJ0czpcbiAqICAxKSBpbmRleC5qcyDigJQgbWFpbiBUb29sJ3MgaW50ZXJmYWNlLCBwdWJsaWMgQVBJIGFuZCBtZXRob2RzIGZvciB3b3JraW5nIHdpdGggZGF0YVxuICogIDIpIHVwbG9hZGVyLmpzIOKAlCBtb2R1bGUgdGhhdCBoYXMgbWV0aG9kcyBmb3Igc2VuZGluZyBmaWxlcyB2aWEgQUpBWDogZnJvbSBkZXZpY2UsIGJ5IFVSTCBvciBGaWxlIHBhc3RpbmdcbiAqICAzKSB1aS5qcyDigJQgbW9kdWxlIGZvciBVSSBtYW5pcHVsYXRpb25zOiByZW5kZXIsIHNob3dpbmcgcHJlbG9hZGVyLCBldGNcbiAqICA0KSB0dW5lcy5qcyDigJQgd29ya2luZyB3aXRoIEJsb2NrIFR1bmVzOiByZW5kZXIgYnV0dG9ucywgaGFuZGxlIGNsaWNrc1xuICpcbiAqIEZvciBkZWJ1ZyBwdXJwb3NlcyB0aGVyZSBpcyBhIHRlc3Rpbmcgc2VydmVyXG4gKiB0aGF0IGNhbiBzYXZlIHVwbG9hZGVkIGZpbGVzIGFuZCByZXR1cm4gYSBSZXNwb25zZSB7QGxpbmsgVXBsb2FkUmVzcG9uc2VGb3JtYXR9XG4gKlxuICogICAgICAgJCBub2RlIGRldi9zZXJ2ZXIuanNcbiAqXG4gKiBJdCB3aWxsIGV4cG9zZSA4MDA4IHBvcnQsIHNvIHlvdSBjYW4gcGFzcyBodHRwOi8vbG9jYWxob3N0OjgwMDggd2l0aCB0aGUgVG9vbHMgY29uZmlnOlxuICpcbiAqIGltYWdlOiB7XG4gKiAgIGNsYXNzOiBJbWFnZVRvb2wsXG4gKiAgIGNvbmZpZzoge1xuICogICAgIGVuZHBvaW50czoge1xuICogICAgICAgYnlGaWxlOiAnaHR0cDovL2xvY2FsaG9zdDo4MDA4L3VwbG9hZEZpbGUnLFxuICogICAgICAgYnlVcmw6ICdodHRwOi8vbG9jYWxob3N0OjgwMDgvZmV0Y2hVcmwnLFxuICogICAgIH1cbiAqICAgfSxcbiAqIH0sXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBJbWFnZVRvb2xEYXRhXG4gKiBAZGVzY3JpcHRpb24gSW1hZ2UgVG9vbCdzIGlucHV0IGFuZCBvdXRwdXQgZGF0YSBmb3JtYXRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjYXB0aW9uIOKAlCBpbWFnZSBjYXB0aW9uXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHdpdGhCb3JkZXIgLSBzaG91bGQgaW1hZ2UgYmUgcmVuZGVyZWQgd2l0aCBib3JkZXJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2l0aEJhY2tncm91bmQgLSBzaG91bGQgaW1hZ2UgYmUgcmVuZGVyZWQgd2l0aCBiYWNrZ3JvdW5kXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHN0cmV0Y2hlZCAtIHNob3VsZCBpbWFnZSBiZSBzdHJldGNoZWQgdG8gZnVsbCB3aWR0aCBvZiBjb250YWluZXJcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBmaWxlIOKAlCBJbWFnZSBmaWxlIGRhdGEgcmV0dXJuZWQgZnJvbSBiYWNrZW5kXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZmlsZS51cmwg4oCUIGltYWdlIFVSTFxuICovXG5cbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IFVpIGZyb20gJy4vdWknO1xuaW1wb3J0IFR1bmVzIGZyb20gJy4vdHVuZXMnO1xuaW1wb3J0IFRvb2xib3hJY29uIGZyb20gJy4vc3ZnL3Rvb2xib3guc3ZnJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGNsYXNzZXMgdGhhdCByZXByZXNlbnQgYSB1cGxvYWRlclxuICogQGludGVyZmFjZSBVcGxvYWRlclxuICovXG5leHBvcnQgY2xhc3MgVXBsb2FkZXIge1xuICAvKipcbiAgICogSGFuZGxlIGNsaWNrcyBvbiB0aGUgdXBsb2FkIGZpbGUgYnV0dG9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBpbWFnZSBzb3VyY2UgdXJsXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0IC0gY29udGV4dCBvYmplY3Qgd2l0aCBoZWxwZXJzIGFuZCBvdGhlciBwcm9wZXJ0aWVzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKX0gY29udGV4dC5zZXRQcmV2aWV3IC0gY2FsbGJhY2sgZm9yIHNldCBwcmV2aWV3IGltYWdlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFVwbG9hZFJlc3BvbnNlRm9ybWF0Pn1cbiAgICovXG4gIHVwbG9hZEJ5VXJsKHVybCwgeyBzZXRQcmV2aWV3IH0pIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgY2xpY2tzIG9uIHRoZSB1cGxvYWQgZmlsZSBidXR0b25cbiAgICogQHBhcmFtIHtGaWxlfSBmaWxlIC0gZmlsZSBwYXN0ZWQgYnkgZHJhZy1uLWRyb3BcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgLSBjb250ZXh0IG9iamVjdCB3aXRoIGhlbHBlcnMgYW5kIG90aGVyIHByb3BlcnRpZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpfSBjb250ZXh0LnNldFByZXZpZXcgLSBjYWxsYmFjayBmb3Igc2V0IHByZXZpZXcgaW1hZ2VcbiAgICogQHJldHVybnMge1Byb21pc2U8VXBsb2FkUmVzcG9uc2VGb3JtYXQ+fVxuICAgKi9cbiAgdXBsb2FkQnlGaWxlKGZpbGUsIHsgc2V0UHJldmlldyB9KSB7XG4gIH1cbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBJbWFnZUNvbmZpZ1xuICogQGRlc2NyaXB0aW9uIENvbmZpZyBzdXBwb3J0ZWQgYnkgVG9vbFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGNhcHRpb25QbGFjZWhvbGRlciAtIHBsYWNlaG9sZGVyIGZvciBDYXB0aW9uIGZpZWxkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gYnV0dG9uQ29udGVudCAtIG92ZXJyaWRlcyBmb3IgU2VsZWN0IEZpbGUgYnV0dG9uXG4gKiBAcHJvcGVydHkge1VwbG9hZGVyfSB1cGxvYWRlciAtIGFwaSB0cmFuc3BvcnQgZm9yIHVwbG9hZCBpbWFnZXNcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFVwbG9hZFJlc3BvbnNlRm9ybWF0XG4gKiBAZGVzY3JpcHRpb24gVGhpcyBmb3JtYXQgZXhwZWN0ZWQgZnJvbSBiYWNrZW5kIG9uIGZpbGUgdXBsb2FkaW5nXG4gKiBAcHJvcGVydHkge251bWJlcn0gc3VjY2VzcyAtIDEgZm9yIHN1Y2Nlc3NmdWwgdXBsb2FkaW5nLCAwIGZvciBmYWlsdXJlXG4gKiBAcHJvcGVydHkge29iamVjdH0gZmlsZSAtIE9iamVjdCB3aXRoIGZpbGUgZGF0YS5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VybCcgaXMgcmVxdWlyZWQsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsc28gY2FuIGNvbnRhaW4gYW55IGFkZGl0aW9uYWwgZGF0YSB0aGF0IHdpbGwgYmUgc2F2ZWQgYW5kIHBhc3NlZCBiYWNrXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZmlsZS51cmwgLSBbUmVxdWlyZWRdIGltYWdlIHNvdXJjZSBVUkxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VUb29sIHtcbiAgLyoqXG4gICAqIEdldCBUb29sIHRvb2xib3ggc2V0dGluZ3NcbiAgICogaWNvbiAtIFRvb2wgaWNvbidzIFNWR1xuICAgKiB0aXRsZSAtIHRpdGxlIHRvIHNob3cgaW4gdG9vbGJveFxuICAgKlxuICAgKiBAcmV0dXJuIHt7aWNvbjogc3RyaW5nLCB0aXRsZTogc3RyaW5nfX1cbiAgICovXG4gIHN0YXRpYyBnZXQgdG9vbGJveCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWNvbjogVG9vbGJveEljb24sXG4gICAgICB0aXRsZTogJ0ltYWdlJ1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtJbWFnZVRvb2xEYXRhfSBkYXRhIC0gcHJldmlvdXNseSBzYXZlZCBkYXRhXG4gICAqIEBwYXJhbSB7SW1hZ2VDb25maWd9IGNvbmZpZyAtIHVzZXIgY29uZmlnIGZvciBUb29sXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBhcGkgLSBFZGl0b3IuanMgQVBJXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IGRhdGEsIGNvbmZpZywgYXBpIH0pIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIC0gdXJsIG9uIHByZXZpZXcgaW1hZ2Ugd2hpbGUgdXBsb2FkaW5nIGZpbGVcbiAgICAgKi9cbiAgICB0aGlzLnNldFByZXZpZXcgPSAoc3JjKSA9PiB7XG4gICAgICB0aGlzLnVpLnNob3dQcmVsb2FkZXIoc3JjKTtcbiAgICB9O1xuXG4gICAgdGhpcy5hcGkgPSBhcGk7XG5cbiAgICAvKipcbiAgICAgKiBUb29sJ3MgaW5pdGlhbCBjb25maWdcbiAgICAgKi9cbiAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgIHR5cGVzOiBjb25maWcudHlwZXMgfHwgJ2ltYWdlLyonLFxuICAgICAgY2FwdGlvblBsYWNlaG9sZGVyOiBjb25maWcuY2FwdGlvblBsYWNlaG9sZGVyIHx8ICdDYXB0aW9uJyxcbiAgICAgIGJ1dHRvbkNvbnRlbnQ6IGNvbmZpZy5idXR0b25Db250ZW50IHx8ICcnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE1vZHVsZSBmb3IgZmlsZSB1cGxvYWRpbmdcbiAgICAgKiBAdHlwZSB7VXBsb2FkZXJ9XG4gICAgICovXG4gICAgdGhpcy51cGxvYWRlciA9IGNvbmZpZy51cGxvYWRlcjtcblxuICAgIC8qKlxuICAgICAqIE1vZHVsZSBmb3Igd29ya2luZyB3aXRoIFVJXG4gICAgICovXG4gICAgdGhpcy51aSA9IG5ldyBVaSh7XG4gICAgICBhcGksXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgb25TZWxlY3RGaWxlOiAoZmlsZSkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVVwbG9hZChcbiAgICAgICAgICB0aGlzLnVwbG9hZGVyLnVwbG9hZEJ5RmlsZShmaWxlLCB7XG4gICAgICAgICAgICBzZXRQcmV2aWV3OiB0aGlzLnNldFByZXZpZXdcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogTW9kdWxlIGZvciB3b3JraW5nIHdpdGggdHVuZXNcbiAgICAgKi9cbiAgICB0aGlzLnR1bmVzID0gbmV3IFR1bmVzKHtcbiAgICAgIGFwaSxcbiAgICAgIG9uQ2hhbmdlOiAodHVuZU5hbWUpID0+IHRoaXMudHVuZVRvZ2dsZWQodHVuZU5hbWUpXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZXQgc2F2ZWQgc3RhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9kYXRhID0ge307XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIEJsb2NrIGNvbnRlbnRcbiAgICogQHB1YmxpY1xuICAgKlxuICAgKiBAcmV0dXJuIHtIVE1MRGl2RWxlbWVudH1cbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy51aS5yZW5kZXIodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gQmxvY2sgZGF0YVxuICAgKiBAcHVibGljXG4gICAqXG4gICAqIEByZXR1cm4ge0ltYWdlVG9vbERhdGF9XG4gICAqL1xuICBzYXZlKCkge1xuICAgIGNvbnN0IGNhcHRpb24gPSB0aGlzLnVpLm5vZGVzLmNhcHRpb247XG5cbiAgICB0aGlzLl9kYXRhLmNhcHRpb24gPSBjYXB0aW9uLmlubmVySFRNTDtcblxuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICAvKipcbiAgICogY2xlYW51cCBhZnRlciB1aVxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnVpLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlcyBidXR0b25zIHdpdGggdHVuZXM6IGFkZCBiYWNrZ3JvdW5kLCBhZGQgYm9yZGVyLCBzdHJldGNoIGltYWdlXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICovXG4gIHJlbmRlclNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLnR1bmVzLnJlbmRlcih0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGFmdGVyIGNsaWNrcyBvbiB0aGUgVG9vbGJveCBJbWFnZSBJY29uXG4gICAqIEluaXRpYXRlcyBjbGljayBvbiB0aGUgU2VsZWN0IEZpbGUgYnV0dG9uXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGFwcGVuZENhbGxiYWNrKCkge1xuICAgIHRoaXMudWkubm9kZXMuZmlsZUJ1dHRvbi5jbGljaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgcGFzdGUgc3Vic3RpdHV0ZXNcbiAgICpcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2NvZGV4LXRlYW0vZWRpdG9yLmpzL2Jsb2IvbWFzdGVyL2RvY3MvdG9vbHMubWQjcGFzdGUtaGFuZGxpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0IHBhc3RlQ29uZmlnKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvKipcbiAgICAgICAqIFBhc3RlIEhUTUwgaW50byBFZGl0b3JcbiAgICAgICAqL1xuICAgICAgdGFnczogWyAnaW1nJyBdLFxuXG4gICAgICAvKipcbiAgICAgICAqIFBhc3RlIFVSTCBvZiBpbWFnZSBpbnRvIHRoZSBFZGl0b3JcbiAgICAgICAqL1xuICAgICAgcGF0dGVybnM6IHtcbiAgICAgICAgaW1hZ2U6IC9odHRwcz86XFwvXFwvXFxTK1xcLihnaWZ8anBlP2d8dGlmZnxwbmcpJC9pXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIERyYWcgbiBkcm9wIGZpbGUgZnJvbSBpbnRvIHRoZSBFZGl0b3JcbiAgICAgICAqL1xuICAgICAgZmlsZXM6IHtcbiAgICAgICAgbWltZVR5cGVzOiBbICdpbWFnZS8qJyBdXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHBhc3RlIGhhbmRsZXJzXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2NvZGV4LXRlYW0vZWRpdG9yLmpzL2Jsb2IvbWFzdGVyL2RvY3MvdG9vbHMubWQjcGFzdGUtaGFuZGxpbmd9XG4gICAqL1xuICBhc3luYyBvblBhc3RlKGV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlICd0YWcnOlxuICAgICAgICBjb25zdCBpbWFnZSA9IGV2ZW50LmRldGFpbC5kYXRhO1xuXG4gICAgICAgIC8qKiBJbWFnZXMgZnJvbSBQREYgKi9cbiAgICAgICAgaWYgKC9eYmxvYjovLnRlc3QoaW1hZ2Uuc3JjKSkge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW1hZ2Uuc3JjKTtcbiAgICAgICAgICBjb25zdCBmaWxlID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuXG4gICAgICAgICAgdGhpcy51cGxvYWRGaWxlKGZpbGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGxvYWRVcmwoaW1hZ2Uuc3JjKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3BhdHRlcm4nOlxuICAgICAgICBjb25zdCB1cmwgPSBldmVudC5kZXRhaWwuZGF0YTtcblxuICAgICAgICB0aGlzLnVwbG9hZFVybCh1cmwpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC5kZXRhaWwuZmlsZTtcblxuICAgICAgICB0aGlzLnVwbG9hZEZpbGUoZmlsZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcml2YXRlIG1ldGhvZHNcbiAgICogzL/MvyDMv8y/IMy/zL8gzL8nzL8nXFzMtc2HzL/Mv1xc0Lc9ICgg4paAIM2czZ7KluKWgCkgPc61L8y1zYfMv8y/L+KAmcy/4oCZzL8gzL8gzL/MvyDMv8y/IMy/zL9cbiAgICovXG5cbiAgLyoqXG4gICAqIFN0b3JlcyBhbGwgVG9vbCdzIGRhdGFcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogQHBhcmFtIHtJbWFnZVRvb2xEYXRhfSBkYXRhXG4gICAqL1xuICBzZXQgZGF0YShkYXRhKSB7XG4gICAgdGhpcy5pbWFnZSA9IGRhdGEuZmlsZTtcblxuICAgIHRoaXMuX2RhdGEuY2FwdGlvbiA9IGRhdGEuY2FwdGlvbiB8fCAnJztcbiAgICB0aGlzLnVpLmZpbGxDYXB0aW9uKHRoaXMuX2RhdGEuY2FwdGlvbik7XG5cbiAgICBUdW5lcy50dW5lcy5mb3JFYWNoKCh7IG5hbWU6IHR1bmUgfSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBkYXRhW3R1bmVdICE9PSB1bmRlZmluZWQgPyBkYXRhW3R1bmVdIDogZmFsc2U7XG5cbiAgICAgIHRoaXMuc2V0VHVuZSh0dW5lLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIFRvb2wgZGF0YVxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBAcmV0dXJuIHtJbWFnZVRvb2xEYXRhfSBkYXRhXG4gICAqL1xuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgbmV3IGltYWdlIGZpbGVcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGZpbGUgLSB1cGxvYWRlZCBmaWxlIGRhdGFcbiAgICovXG4gIHNldCBpbWFnZShmaWxlKSB7XG4gICAgdGhpcy5fZGF0YS5maWxlID0gZmlsZSB8fCB7fTtcblxuICAgIGlmIChmaWxlICYmIGZpbGUudXJsKSB7XG4gICAgICB0aGlzLnVpLmZpbGxJbWFnZShmaWxlLnVybCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbGUgdXBsb2FkaW5nIGNhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIEBwYXJhbSB7VXBsb2FkUmVzcG9uc2VGb3JtYXR9IHJlc3BvbnNlXG4gICAqL1xuICBvblVwbG9hZChyZXNwb25zZSkge1xuICAgIGNvbnN0IGJvZHkgPSByZXNwb25zZS5ib2R5O1xuXG4gICAgaWYgKGJvZHkuc3VjY2VzcyAmJiBib2R5LmZpbGUpIHtcbiAgICAgIHRoaXMuaW1hZ2UgPSBib2R5LmZpbGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBsb2FkaW5nRmFpbGVkKCdpbmNvcnJlY3QgcmVzcG9uc2U6ICcgKyBKU09OLnN0cmluZ2lmeShib2R5KSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSB1cGxvYWRlciBlcnJvcnNcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVycm9yVGV4dFxuICAgKi9cbiAgdXBsb2FkaW5nRmFpbGVkKGVycm9yVGV4dCkge1xuICAgIGNvbnNvbGUubG9nKCdJbWFnZSBUb29sOiB1cGxvYWRpbmcgZmFpbGVkIGJlY2F1c2Ugb2YnLCBlcnJvclRleHQpO1xuXG4gICAgdGhpcy5hcGkubm90aWZpZXIuc2hvdyh7XG4gICAgICBtZXNzYWdlOiAnQ2FuIG5vdCB1cGxvYWQgYW4gaW1hZ2UsIHRyeSBhbm90aGVyJyxcbiAgICAgIHN0eWxlOiAnZXJyb3InXG4gICAgfSk7XG4gICAgdGhpcy51aS5oaWRlUHJlbG9hZGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiBCbG9jayBUdW5lIGlzIGFjdGl2YXRlZFxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHVuZU5hbWUgLSB0dW5lIHRoYXQgaGFzIGJlZW4gY2xpY2tlZFxuICAgKi9cbiAgdHVuZVRvZ2dsZWQodHVuZU5hbWUpIHtcbiAgICAvLyBpbnZlcnNlIHR1bmUgc3RhdGVcbiAgICB0aGlzLnNldFR1bmUodHVuZU5hbWUsICF0aGlzLl9kYXRhW3R1bmVOYW1lXSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IG9uZSB0dW5lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0dW5lTmFtZSAtIHtAbGluayBUdW5lcy50dW5lc31cbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZSAtIHR1bmUgc3RhdGVcbiAgICovXG4gIHNldFR1bmUodHVuZU5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5fZGF0YVt0dW5lTmFtZV0gPSB2YWx1ZTtcblxuICAgIHRoaXMudWkuYXBwbHlUdW5lKHR1bmVOYW1lLCB2YWx1ZSk7XG5cbiAgICBpZiAodHVuZU5hbWUgPT09ICdzdHJldGNoZWQnKSB7XG4gICAgICBjb25zdCBibG9ja0lkID0gdGhpcy5hcGkuYmxvY2tzLmdldEN1cnJlbnRCbG9ja0luZGV4KCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvKiogV2FpdCB1bnRpbCBhcGkgaXMgcmVhZHkgKi9cbiAgICAgICAgdGhpcy5hcGkuYmxvY2tzLnN0cmV0Y2hCbG9jayhibG9ja0lkLCB2YWx1ZSk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBwcmVsb2FkZXIgYW5kIHVwbG9hZCBpbWFnZSBmaWxlXG4gICAqXG4gICAqIEBwYXJhbSB7RmlsZX0gZmlsZVxuICAgKi9cbiAgdXBsb2FkRmlsZShmaWxlKSB7XG4gICAgdGhpcy5oYW5kbGVVcGxvYWQoXG4gICAgICB0aGlzLnVwbG9hZGVyLnVwbG9hZEJ5RmlsZShmaWxlLCB7XG4gICAgICAgIHNldFByZXZpZXc6IHRoaXMuc2V0UHJldmlld1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgcHJlbG9hZGVyIGFuZCB1cGxvYWQgaW1hZ2UgYnkgdGFyZ2V0IHVybFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICB1cGxvYWRVcmwodXJsKSB7XG4gICAgdGhpcy5oYW5kbGVVcGxvYWQoXG4gICAgICB0aGlzLnVwbG9hZGVyLnVwbG9hZEJ5VXJsKHVybCwge1xuICAgICAgICBzZXRQcmV2aWV3OiB0aGlzLnNldFByZXZpZXdcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgZm9yIGhhbmRsZSBwcm9taXNlXG4gICAqIEBwYXJhbSB7UHJvbWlzZX0gcHJvbWlzZVxuICAgKi9cbiAgaGFuZGxlVXBsb2FkKHByb21pc2UpIHtcbiAgICBwcm9taXNlXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5vblVwbG9hZChyZXNwb25zZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnVwbG9hZGluZ0ZhaWxlZChlcnJvcik7XG4gICAgICB9KTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgd2lkdGg9XFxcIjIwXFxcIiBoZWlnaHQ9XFxcIjIwXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjAgMjBcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTEwLjA0MyA4LjI2NWwzLjE4My0zLjE4M2gtMi45MjRMNC43NSAxMC42MzZ2Mi45MjNsNC4xNS00LjE1djIuMzUxbC0yLjE1OCAyLjE1OUg4Ljl2Mi4xMzdINC43Yy0xLjIxNSAwLTIuMi0uOTM2LTIuMi0yLjA5di04LjkzYzAtMS4xNTQuOTg1LTIuMDkgMi4yLTIuMDloMTAuNjYzbC4wMzMtLjAzMy4wMzQuMDM0YzEuMTc4LjA0IDIuMTIuOTYgMi4xMiAyLjA4OXYzLjIzSDE1LjNWNS4zNTlsLTIuOTA2IDIuOTA2aC0yLjM1ek03Ljk1MSA1LjA4Mkg0Ljc1djMuMjAxbDMuMjAxLTMuMnptNS4wOTkgNy4wNzh2My4wNGg0LjE1di0zLjA0aC00LjE1em0tMS4xLTIuMTM3aDYuMzVjLjYzNSAwIDEuMTUuNDg5IDEuMTUgMS4wOTJ2NS4xM2MwIC42MDMtLjUxNSAxLjA5Mi0xLjE1IDEuMDkyaC02LjM1Yy0uNjM1IDAtMS4xNS0uNDg5LTEuMTUtMS4wOTJ2LTUuMTNjMC0uNjAzLjUxNS0xLjA5MiAxLjE1LTEuMDkyelxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgd2lkdGg9XFxcIjIwXFxcIiBoZWlnaHQ9XFxcIjIwXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjAgMjBcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTE1LjggMTAuNTkydjIuMDQzaDIuMzV2Mi4xMzhIMTUuOHYyLjIzMmgtMi4yNXYtMi4yMzJoLTIuNHYtMi4xMzhoMi40di0yLjI4aDIuMjV2LjIzN2gxLjE1LTEuMTV6TTEuOSA4LjQ1NXYtMy40MmMwLTEuMTU0Ljk4NS0yLjA5IDIuMi0yLjA5aDQuMnYyLjEzN0g0LjE1djMuMzczSDEuOXptMCAyLjEzN2gyLjI1djMuMzI1SDguM3YyLjEzOEg0LjFjLTEuMjE1IDAtMi4yLS45MzYtMi4yLTIuMDl2LTMuMzczem0xNS4wNS0yLjEzN0gxNC43VjUuMDgyaC00LjE1VjIuOTQ1aDQuMmMxLjIxNSAwIDIuMi45MzYgMi4yIDIuMDl2My40MnpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHdpZHRoPVxcXCIyMFxcXCIgaGVpZ2h0PVxcXCIyMFxcXCIgdmlld0JveD1cXFwiMCAwIDIwIDIwXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0zLjE1IDEzLjYyOEE3Ljc0OSA3Ljc0OSAwIDAgMCAxMCAxNy43NWE3Ljc0IDcuNzQgMCAwIDAgNi4zMDUtMy4yNDJsLTIuMzg3LTIuMTI3LTIuNzY1IDIuMjQ0LTQuMzg5LTQuNDk2LTMuNjE0IDMuNXptLS43ODctMi4zMDNsNC40NDYtNC4zNzEgNC41MiA0LjYzIDIuNTM0LTIuMDU3IDMuNTMzIDIuNzk3Yy4yMy0uNzM0LjM1NC0xLjUxNC4zNTQtMi4zMjRhNy43NSA3Ljc1IDAgMSAwLTE1LjM4NyAxLjMyNXpNMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTAtNC40NzcgMTAtMTAgMTB6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB3aWR0aD1cXFwiMTdcXFwiIGhlaWdodD1cXFwiMTBcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNyAxMFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMTMuNTY4IDUuOTI1SDQuMDU2bDEuNzAzIDEuNzAzYTEuMTI1IDEuMTI1IDAgMCAxLTEuNTkgMS41OTFMLjk2MiA2LjAxNEExLjA2OSAxLjA2OSAwIDAgMSAuNTg4IDQuMjZMNC4zOC40NjlhMS4wNjkgMS4wNjkgMCAwIDEgMS41MTIgMS41MTFMNC4wODQgMy43ODdoOS42MDZsLTEuODUtMS44NWExLjA2OSAxLjA2OSAwIDEgMSAxLjUxMi0xLjUxbDMuNzkyIDMuNzkxYTEuMDY5IDEuMDY5IDAgMCAxLS40NzUgMS43ODhMMTMuNTE0IDkuMTZhMS4xMjUgMS4xMjUgMCAwIDEtMS41OS0xLjU5MWwxLjY0NC0xLjY0NHpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHdpZHRoPVxcXCIxN1xcXCIgaGVpZ2h0PVxcXCIxNVxcXCIgdmlld0JveD1cXFwiMCAwIDMzNiAyNzZcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTI5MSAxNTAuMjQyVjc5YzAtMTguNzc4LTE1LjIyMi0zNC0zNC0zNEg3OWMtMTguNzc4IDAtMzQgMTUuMjIyLTM0IDM0djQyLjI2NGw2Ny4xNzktNDQuMTkyIDgwLjM5OCA3MS42MTQgNTYuNjg2LTI5LjE0TDI5MSAxNTAuMjQyem0tLjM0NSA1MS42MjJsLTQyLjMtMzAuMjQ2LTU2LjMgMjkuODg0LTgwLjc3My02Ni45MjVMNDUgMTc0LjE4N1YxOTdjMCAxOC43NzggMTUuMjIyIDM0IDM0IDM0aDE3OGMxNy4xMjYgMCAzMS4yOTUtMTIuNjYzIDMzLjY1NS0yOS4xMzZ6TTc5IDBoMTc4YzQzLjYzIDAgNzkgMzUuMzcgNzkgNzl2MTE4YzAgNDMuNjMtMzUuMzcgNzktNzkgNzlINzljLTQzLjYzIDAtNzktMzUuMzctNzktNzlWNzlDMCAzNS4zNyAzNS4zNyAwIDc5IDB6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJpbXBvcnQgeyBtYWtlIH0gZnJvbSAnLi91aSc7XG5pbXBvcnQgYmdJY29uIGZyb20gJy4vc3ZnL2JhY2tncm91bmQuc3ZnJztcbmltcG9ydCBib3JkZXJJY29uIGZyb20gJy4vc3ZnL2JvcmRlci5zdmcnO1xuaW1wb3J0IHN0cmV0Y2hlZEljb24gZnJvbSAnLi9zdmcvc3RyZXRjaGVkLnN2Zyc7XG5cbi8qKlxuICogV29ya2luZyB3aXRoIEJsb2NrIFR1bmVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR1bmVzIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBhcGkgLSBFZGl0b3IgQVBJXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uQ2hhbmdlIC0gdHVuZSB0b2dnbGluZyBjYWxsYmFja1xuICAgKi9cbiAgY29uc3RydWN0b3IoeyBhcGksIG9uQ2hhbmdlIH0pIHtcbiAgICB0aGlzLmFwaSA9IGFwaTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2U7XG4gICAgdGhpcy5idXR0b25zID0gW107XG4gIH1cblxuICAvKipcbiAgICogQXZhaWxhYmxlIEltYWdlIHR1bmVzXG4gICAqL1xuICBzdGF0aWMgZ2V0IHR1bmVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd3aXRoQm9yZGVyJyxcbiAgICAgICAgaWNvbjogYm9yZGVySWNvbixcbiAgICAgICAgdGl0bGU6ICdXaXRoIGJvcmRlcidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzdHJldGNoZWQnLFxuICAgICAgICBpY29uOiBzdHJldGNoZWRJY29uLFxuICAgICAgICB0aXRsZTogJ1N0cmV0Y2ggaW1hZ2UnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnd2l0aEJhY2tncm91bmQnLFxuICAgICAgICBpY29uOiBiZ0ljb24sXG4gICAgICAgIHRpdGxlOiAnV2l0aCBiYWNrZ3JvdW5kJ1xuICAgICAgfVxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogU3R5bGVzXG4gICAqIEByZXR1cm4ge3t3cmFwcGVyOiBzdHJpbmcsIGJ1dHRvbkJhc2U6ICosIGJ1dHRvbjogc3RyaW5nLCBidXR0b25BY3RpdmU6ICp9fVxuICAgKi9cbiAgZ2V0IENTUygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JhcHBlcjogJycsXG4gICAgICBidXR0b25CYXNlOiB0aGlzLmFwaS5zdHlsZXMuc2V0dGluZ3NCdXR0b24sXG4gICAgICBidXR0b246ICdpbWFnZS10b29sX190dW5lJyxcbiAgICAgIGJ1dHRvbkFjdGl2ZTogdGhpcy5hcGkuc3R5bGVzLnNldHRpbmdzQnV0dG9uQWN0aXZlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlcyBidXR0b25zIHdpdGggdHVuZXM6IGFkZCBiYWNrZ3JvdW5kLCBhZGQgYm9yZGVyLCBzdHJldGNoIGltYWdlXG4gICAqIEBwYXJhbSB7SW1hZ2VUb29sRGF0YX0gdG9vbERhdGFcbiAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICovXG4gIHJlbmRlcih0b29sRGF0YSkge1xuICAgIGxldCB3cmFwcGVyID0gbWFrZSgnZGl2JywgdGhpcy5DU1Mud3JhcHBlcik7XG5cbiAgICB0aGlzLmJ1dHRvbnMgPSBbXTtcblxuICAgIFR1bmVzLnR1bmVzLmZvckVhY2godHVuZSA9PiB7XG4gICAgICBsZXQgZWwgPSBtYWtlKCdkaXYnLCBbdGhpcy5DU1MuYnV0dG9uQmFzZSwgdGhpcy5DU1MuYnV0dG9uXSwge1xuICAgICAgICBpbm5lckhUTUw6IHR1bmUuaWNvbixcbiAgICAgICAgdGl0bGU6IHR1bmUudGl0bGVcbiAgICAgIH0pO1xuXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy50dW5lQ2xpY2tlZCh0dW5lLm5hbWUpO1xuICAgICAgfSk7XG5cbiAgICAgIGVsLmRhdGFzZXQudHVuZSA9IHR1bmUubmFtZTtcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUodGhpcy5DU1MuYnV0dG9uQWN0aXZlLCB0b29sRGF0YVt0dW5lLm5hbWVdKTtcblxuICAgICAgdGhpcy5idXR0b25zLnB1c2goZWwpO1xuXG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB3cmFwcGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENsaWNrcyB0byBvbmUgb2YgdGhlIHR1bmVzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0dW5lTmFtZSAtIGNsaWNrZWQgdHVuZSBuYW1lXG4gICAqL1xuICB0dW5lQ2xpY2tlZCh0dW5lTmFtZSkge1xuICAgIGxldCBidXR0b24gPSB0aGlzLmJ1dHRvbnMuZmluZChlbCA9PiBlbC5kYXRhc2V0LnR1bmUgPT09IHR1bmVOYW1lKTtcblxuICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuQ1NTLmJ1dHRvbkFjdGl2ZSwgIWJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnModGhpcy5DU1MuYnV0dG9uQWN0aXZlKSk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlKHR1bmVOYW1lKTtcbiAgfVxufVxuIiwiaW1wb3J0IGJ1dHRvbkljb24gZnJvbSAnLi9zdmcvYnV0dG9uLWljb24uc3ZnJztcblxuLyoqXG4gKiBAdHlwZSB7SFRNTElucHV0RWxlbWVudH1cbiAqL1xubGV0IGZpbGVJbnB1dCA9IG51bGw7XG5cbi8qKlxuICogQ2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBVSTpcbiAqICAtIHJlbmRlcmluZyBiYXNlIHN0cnVjdHVyZVxuICogIC0gc2hvdy9oaWRlIHByZXZpZXdcbiAqICAtIGFwcGx5IHR1bmUgdmlld1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVaSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge29iamVjdH0gYXBpIC0gRWRpdG9yLmpzIEFQSVxuICAgKiBAcGFyYW0ge0ltYWdlQ29uZmlnfSBjb25maWcgLSB1c2VyIGNvbmZpZ1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblNlbGVjdEZpbGUgLSBjYWxsYmFjayBmb3IgY2xpY2tzIG9uIFNlbGVjdCBmaWxlIGJ1dHRvclxuICAgKi9cbiAgY29uc3RydWN0b3IoeyBhcGksIGNvbmZpZywgb25TZWxlY3RGaWxlIH0pIHtcbiAgICB0aGlzLmFwaSA9IGFwaTtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLm9uU2VsZWN0RmlsZSA9IG9uU2VsZWN0RmlsZTtcbiAgICB0aGlzLm5vZGVzID0ge1xuICAgICAgd3JhcHBlcjogbWFrZSgnZGl2JywgW3RoaXMuQ1NTLmJhc2VDbGFzcywgdGhpcy5DU1Mud3JhcHBlcl0pLFxuICAgICAgaW1hZ2VDb250YWluZXI6IG1ha2UoJ2RpdicsIFsgdGhpcy5DU1MuaW1hZ2VDb250YWluZXIgXSksXG4gICAgICBmaWxlQnV0dG9uOiB0aGlzLmNyZWF0ZUZpbGVCdXR0b24oKSxcbiAgICAgIGltYWdlRWw6IHVuZGVmaW5lZCxcbiAgICAgIGltYWdlUHJlbG9hZGVyOiBtYWtlKCdkaXYnLCB0aGlzLkNTUy5pbWFnZVByZWxvYWRlciksXG4gICAgICBjYXB0aW9uOiBtYWtlKCdkaXYnLCBbdGhpcy5DU1MuaW5wdXQsIHRoaXMuQ1NTLmNhcHRpb25dLCB7XG4gICAgICAgIGNvbnRlbnRFZGl0YWJsZTogdHJ1ZVxuICAgICAgfSlcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGJhc2Ugc3RydWN0dXJlXG4gICAgICogIDx3cmFwcGVyPlxuICAgICAqICAgIDxpbWFnZS1jb250YWluZXI+XG4gICAgICogICAgICA8aW1hZ2UtcHJlbG9hZGVyIC8+XG4gICAgICogICAgPC9pbWFnZS1jb250YWluZXI+XG4gICAgICogICAgPGNhcHRpb24gLz5cbiAgICAgKiAgICA8c2VsZWN0LWZpbGUtYnV0dG9uIC8+XG4gICAgICogIDwvd3JhcHBlcj5cbiAgICAgKi9cbiAgICB0aGlzLm5vZGVzLmNhcHRpb24uZGF0YXNldC5wbGFjZWhvbGRlciA9IHRoaXMuY29uZmlnLmNhcHRpb25QbGFjZWhvbGRlcjtcbiAgICB0aGlzLm5vZGVzLmltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubm9kZXMuaW1hZ2VQcmVsb2FkZXIpO1xuICAgIHRoaXMubm9kZXMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLm5vZGVzLmltYWdlQ29udGFpbmVyKTtcbiAgICB0aGlzLm5vZGVzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5ub2Rlcy5jYXB0aW9uKTtcbiAgICB0aGlzLm5vZGVzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5ub2Rlcy5maWxlQnV0dG9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDU1MgY2xhc3Nlc1xuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGdldCBDU1MoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhc2VDbGFzczogdGhpcy5hcGkuc3R5bGVzLmJsb2NrLFxuICAgICAgbG9hZGluZzogdGhpcy5hcGkuc3R5bGVzLmxvYWRlcixcbiAgICAgIGlucHV0OiB0aGlzLmFwaS5zdHlsZXMuaW5wdXQsXG4gICAgICBidXR0b246IHRoaXMuYXBpLnN0eWxlcy5idXR0b24sXG5cbiAgICAgIC8qKlxuICAgICAgICogVG9vbCdzIGNsYXNzZXNcbiAgICAgICAqL1xuICAgICAgd3JhcHBlcjogJ2ltYWdlLXRvb2wnLFxuICAgICAgaW1hZ2VDb250YWluZXI6ICdpbWFnZS10b29sX19pbWFnZScsXG4gICAgICBpbWFnZVByZWxvYWRlcjogJ2ltYWdlLXRvb2xfX2ltYWdlLXByZWxvYWRlcicsXG4gICAgICBpbWFnZUVsOiAnaW1hZ2UtdG9vbF9faW1hZ2UtcGljdHVyZScsXG4gICAgICBjYXB0aW9uOiAnaW1hZ2UtdG9vbF9fY2FwdGlvbidcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBVaSBzdGF0dXNlczpcbiAgICogLSBlbXB0eVxuICAgKiAtIHVwbG9hZGluZ1xuICAgKiAtIGZpbGxlZFxuICAgKiBAcmV0dXJuIHt7RU1QVFk6IHN0cmluZywgVVBMT0FESU5HOiBzdHJpbmcsIEZJTExFRDogc3RyaW5nfX1cbiAgICovXG4gIHN0YXRpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBFTVBUWTogJ2VtcHR5JyxcbiAgICAgIFVQTE9BRElORzogJ2xvYWRpbmcnLFxuICAgICAgRklMTEVEOiAnZmlsbGVkJ1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtJbWFnZVRvb2xEYXRhfSB0b29sRGF0YVxuICAgKiBAcmV0dXJuIHtIVE1MRGl2RWxlbWVudH1cbiAgICovXG4gIHJlbmRlcih0b29sRGF0YSkge1xuICAgIGlmICghdG9vbERhdGEuZmlsZSB8fCBPYmplY3Qua2V5cyh0b29sRGF0YS5maWxlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudG9nZ2xlU3RhdHVzKFVpLnN0YXR1cy5FTVBUWSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlU3RhdHVzKFVpLnN0YXR1cy5VUExPQURJTkcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm5vZGVzLndyYXBwZXI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB1cGxvYWQtZmlsZSBidXR0b25cbiAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICovXG4gIGNyZWF0ZUZpbGVCdXR0b24oKSB7XG4gICAgbGV0IGJ1dHRvbiA9IG1ha2UoJ2RpdicsIFsgdGhpcy5DU1MuYnV0dG9uIF0pO1xuXG4gICAgYnV0dG9uLmlubmVySFRNTCA9IHRoaXMuY29uZmlnLmJ1dHRvbkNvbnRlbnQgfHwgYCR7YnV0dG9uSWNvbn0gU2VsZWN0IGFuIEltYWdlYDtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMub3BlbkZpbGVEaWFsb2coKVxuICAgICAgICAudGhlbih0aGlzLm9uU2VsZWN0RmlsZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG5cbiAgLyoqXG4gICAqIG9wZW4gZmlsZSBkaWFsb2dcbiAgICogQHJldHVybnMge1Byb21pc2U8RmlsZX1cbiAgICovXG4gIG9wZW5GaWxlRGlhbG9nKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGUgYSBuZXcgSU5QVVQgZWxlbWVudCBvciByZXVzZSBvbGQgSU5QVVRcbiAgICAgICAqL1xuICAgICAgZmlsZUlucHV0ID0gZmlsZUlucHV0IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lOUFVUJyk7XG5cbiAgICAgIC8qKlxuICAgICAgICogY29sbGVjdCBhbGwgaW5wdXRzIGZvciBiZXR0ZXIgY2xlYW4gdXBcbiAgICAgICAqL1xuICAgICAgLyoqXG4gICAgICAgKiBTZXQgYSAnRklMRScgdHlwZSBmb3IgdGhpcyBpbnB1dCBlbGVtZW50XG4gICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICovXG4gICAgICBmaWxlSW5wdXQudHlwZSA9ICdmaWxlJztcblxuICAgICAgaWYgKHRoaXMuY29uZmlnLnR5cGVzKSB7XG4gICAgICAgIGZpbGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2FjY2VwdCcsIHRoaXMuY29uZmlnLnR5cGVzKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBEbyBub3Qgc2hvdyBlbGVtZW50XG4gICAgICAgKi9cbiAgICAgIGZpbGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAvKipcbiAgICAgICAqIEFwcGVuZCBlbGVtZW50IHRvIHRoZSBib2R5XG4gICAgICAgKiBGaXggdXNpbmcgbW9kdWxlIG9uIG1vYmlsZSBkZXZpY2VzXG4gICAgICAgKi9cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZmlsZUlucHV0KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBBZGQgb25jaGFuZ2UgbGlzdGVuZXIgZm9yIMKrY2hvb3NlIGZpbGXCuyBwb3AtdXBcbiAgICAgICAqL1xuICAgICAgZmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBmaWxlcyBmcm9tIGlucHV0IGZpZWxkXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBbIGZpbGUgXSA9IGV2ZW50LnRhcmdldC5maWxlcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybiByZWFkeSB0byBiZSB1cGxvYWRlZCBGb3JtRGF0YSBvYmplY3RcbiAgICAgICAgICovXG5cbiAgICAgICAgcmVzb2x2ZShmaWxlKTtcblxuICAgICAgICBmaWxlSW5wdXQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChmaWxlSW5wdXQpO1xuICAgICAgICBmaWxlSW5wdXQgPSBudWxsO1xuICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmUgY2xpY2sgZXZlbnQgb24gwqtpbnB1dCBmaWxlwrsgZmllbGRcbiAgICAgICAqL1xuICAgICAgZmlsZUlucHV0LmNsaWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgdXBsb2FkaW5nIHByZWxvYWRlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIC0gcHJldmlldyBzb3VyY2VcbiAgICovXG4gIHNob3dQcmVsb2FkZXIoc3JjKSB7XG4gICAgdGhpcy5ub2Rlcy5pbWFnZVByZWxvYWRlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7c3JjfSlgO1xuXG4gICAgdGhpcy50b2dnbGVTdGF0dXMoVWkuc3RhdHVzLlVQTE9BRElORyk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZSB1cGxvYWRpbmcgcHJlbG9hZGVyXG4gICAqL1xuICBoaWRlUHJlbG9hZGVyKCkge1xuICAgIHRoaXMubm9kZXMuaW1hZ2VQcmVsb2FkZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG4gICAgdGhpcy50b2dnbGVTdGF0dXMoVWkuc3RhdHVzLkVNUFRZKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBhbiBpbWFnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBmaWxsSW1hZ2UodXJsKSB7XG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGEgc291cmNlIGV4dGVuc2lvbiB0byBjb21wb3NlIGVsZW1lbnQgY29ycmVjdGx5OiB2aWRlbyB0YWcgZm9yIG1wNCwgaW1nIOKAlCBmb3Igb3RoZXJzXG4gICAgICovXG4gICAgY29uc3QgdGFnID0gL1xcLm1wNCQvLnRlc3QodXJsKSA/ICdWSURFTycgOiAnSU1HJztcblxuICAgIGxldCBhdHRyaWJ1dGVzID0ge1xuICAgICAgc3JjOiB1cmxcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogV2UgdXNlIGV2ZW50TmFtZSB2YXJpYWJsZSBiZWNhdXNlIElNRyBhbmQgVklERU8gdGFncyBoYXZlIGRpZmZlcmVudCBldmVudCB0byBiZSBjYWxsZWQgb24gc291cmNlIGxvYWRcbiAgICAgKiAtIElNRzogbG9hZFxuICAgICAqIC0gVklERU86IGxvYWRlZGRhdGFcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGxldCBldmVudE5hbWUgPSAnbG9hZCc7XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgYXR0cmlidXRlcyBhbmQgZXZlbnROYW1lIGlmIHNvdXJjZSBpcyBhIG1wNCB2aWRlb1xuICAgICAqL1xuICAgIGlmICh0YWcgPT09ICdWSURFTycpIHtcbiAgICAgIC8qKlxuICAgICAgICogQWRkIGF0dHJpYnV0ZXMgZm9yIHBsYXlpbmcgbXV0ZWQgbXA0IGFzIGEgZ2lmXG4gICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAqL1xuICAgICAgYXR0cmlidXRlcy5hdXRvcGxheSA9IHRydWU7XG4gICAgICBhdHRyaWJ1dGVzLmxvb3AgPSB0cnVlO1xuICAgICAgYXR0cmlidXRlcy5tdXRlZCA9IHRydWU7XG4gICAgICBhdHRyaWJ1dGVzLnBsYXlzaW5saW5lID0gdHJ1ZTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDaGFuZ2UgZXZlbnQgdG8gYmUgbGlzdGVuZWRcbiAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgKi9cbiAgICAgIGV2ZW50TmFtZSA9ICdsb2FkZWRkYXRhJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlIHRhZyB3aXRoIGRlZmluZWQgYXR0cmlidXRlc1xuICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAqL1xuICAgIHRoaXMubm9kZXMuaW1hZ2VFbCA9IG1ha2UodGFnLCB0aGlzLkNTUy5pbWFnZUVsLCBhdHRyaWJ1dGVzKTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBsb2FkIGV2ZW50IGxpc3RlbmVyXG4gICAgICovXG4gICAgdGhpcy5ub2Rlcy5pbWFnZUVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoKSA9PiB7XG4gICAgICB0aGlzLnRvZ2dsZVN0YXR1cyhVaS5zdGF0dXMuRklMTEVEKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBQcmVsb2FkZXIgZG9lcyBub3QgZXhpc3RzIG9uIGZpcnN0IHJlbmRlcmluZyB3aXRoIHByZXNhdmVkIGRhdGFcbiAgICAgICAqL1xuICAgICAgaWYgKHRoaXMubm9kZXMuaW1hZ2VQcmVsb2FkZXIpIHtcbiAgICAgICAgdGhpcy5ub2Rlcy5pbWFnZVByZWxvYWRlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMubm9kZXMuaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ub2Rlcy5pbWFnZUVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBjYXB0aW9uIGlucHV0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gY2FwdGlvbiB0ZXh0XG4gICAqL1xuICBmaWxsQ2FwdGlvbih0ZXh0KSB7XG4gICAgaWYgKHRoaXMubm9kZXMuY2FwdGlvbikge1xuICAgICAgdGhpcy5ub2Rlcy5jYXB0aW9uLmlubmVySFRNTCA9IHRleHQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgVUkgc3RhdHVzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBzZWUge0BsaW5rIFVpLnN0YXR1c30gY29uc3RhbnRzXG4gICAqL1xuICB0b2dnbGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgZm9yIChjb25zdCBzdGF0dXNUeXBlIGluIFVpLnN0YXR1cykge1xuICAgICAgaWYgKFVpLnN0YXR1cy5oYXNPd25Qcm9wZXJ0eShzdGF0dXNUeXBlKSkge1xuICAgICAgICB0aGlzLm5vZGVzLndyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShgJHt0aGlzLkNTUy53cmFwcGVyfS0tJHtVaS5zdGF0dXNbc3RhdHVzVHlwZV19YCwgc3RhdHVzID09PSBVaS5zdGF0dXNbc3RhdHVzVHlwZV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSB2aXN1YWwgcmVwcmVzZW50YXRpb24gb2YgYWN0aXZhdGVkIHR1bmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR1bmVOYW1lIC0gb25lIG9mIGF2YWlsYWJsZSB0dW5lcyB7QGxpbmsgVHVuZXMudHVuZXN9XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdHVzIC0gdHJ1ZSBmb3IgZW5hYmxlLCBmYWxzZSBmb3IgZGlzYWJsZVxuICAgKi9cbiAgYXBwbHlUdW5lKHR1bmVOYW1lLCBzdGF0dXMpIHtcbiAgICB0aGlzLm5vZGVzLndyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShgJHt0aGlzLkNTUy53cmFwcGVyfS0tJHt0dW5lTmFtZX1gLCBzdGF0dXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsZWFudXAgaW5wdXRcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKGZpbGVJbnB1dCkge1xuICAgICAgZmlsZUlucHV0LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZmlsZUlucHV0KTtcbiAgICAgIGZpbGVJbnB1dCA9IG51bGw7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogSGVscGVyIGZvciBtYWtpbmcgRWxlbWVudHMgd2l0aCBhdHRyaWJ1dGVzXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSB0YWdOYW1lICAgICAgICAgICAtIG5ldyBFbGVtZW50IHRhZyBuYW1lXG4gKiBAcGFyYW0gIHthcnJheXxzdHJpbmd9IGNsYXNzTmFtZXMgIC0gbGlzdCBvciBuYW1lIG9mIENTUyBjbGFzc1xuICogQHBhcmFtICB7T2JqZWN0fSBhdHRyaWJ1dGVzICAgICAgICAtIGFueSBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG5leHBvcnQgY29uc3QgbWFrZSA9IGZ1bmN0aW9uIG1ha2UodGFnTmFtZSwgY2xhc3NOYW1lcyA9IG51bGwsIGF0dHJpYnV0ZXMgPSB7fSkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTmFtZXMpKSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWVzKTtcbiAgfSBlbHNlIGlmIChjbGFzc05hbWVzKSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzKTtcbiAgfVxuXG4gIGZvciAobGV0IGF0dHJOYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICBlbFthdHRyTmFtZV0gPSBhdHRyaWJ1dGVzW2F0dHJOYW1lXTtcbiAgfVxuXG4gIHJldHVybiBlbDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9