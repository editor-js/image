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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.make = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _buttonIcon = __webpack_require__(8);

var _buttonIcon2 = _interopRequireDefault(_buttonIcon);

var _ajax = __webpack_require__(7);

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ui = function () {
  function Ui(_ref) {
    var api = _ref.api,
        config = _ref.config;

    _classCallCheck(this, Ui);

    this.api = api;
    this.config = config;
    this.nodes = {
      wrapper: undefined,
      fileButton: undefined
    };
  }

  _createClass(Ui, [{
    key: 'render',


    /**
     * @param {ImageToolData} toolData
     * @return {HTMLDivElement}
     */
    value: function render(toolData) {
      this.nodes.wrapper = make('div', [this.CSS.baseClass, this.CSS.wrapper]);
      this.nodes.fileButton = this.createFileButton();

      this.nodes.wrapper.appendChild(this.nodes.fileButton);

      return this.nodes.wrapper;
    }
  }, {
    key: 'createFileButton',
    value: function createFileButton() {
      var _this = this;

      var button = make('div', [this.CSS.button]);

      button.innerHTML = _buttonIcon2.default + ' Select an Image';

      button.addEventListener('click', function () {
        _this.selectFile();
      });

      return button;
    }
  }, {
    key: 'selectFile',
    value: function selectFile() {
      var _this2 = this;

      _ajax2.default.transport({
        url: this.config.url,
        accept: this.config.types,
        progress: function progress(percentage) {
          return _this2.uploadingProgress(percentage);
        },
        fieldName: this.config.field
      }).then(function (response) {
        _this2.fileUploaded(response);
      }).catch(function (error) {
        console.log('uploading error', error);
      });
    }
  }, {
    key: 'uploadingProgress',
    value: function uploadingProgress(percentage) {
      console.log('percentage', percentage);
    }
  }, {
    key: 'fileUploaded',
    value: function fileUploaded(response) {
      console.log('response', response);
      // this.nodes.button.remove();

      /**
       * TEMP loader
       */
      // this._createLoader();

      // this._createImage(response.data.url);
    }
  }, {
    key: 'CSS',
    get: function get() {
      return {
        baseClass: this.api.styles.block,
        loading: this.api.styles.loader,
        input: this.api.styles.input,
        button: this.api.styles.button,

        /**
         * Tool's classes
         */
        wrapper: 'image-tool'
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


exports.default = Ui;
var make = exports.make = function make(tagName) {
  var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var el = document.createElement(tagName);

  if (Array.isArray(classNames)) {
    var _el$classList;

    (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classNames));
  } else if (classNames) {
    el.classList.add(classNames);
  }

  for (var attrName in attributes) {
    el[attrName] = attributes[attrName];
  }

  return el;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Image Tool for the CodeX Editor
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @typedef {object} ImageToolData
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @description Tool's input and output data format
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @property {string} url — image URL
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @property {string} caption — image caption
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @property {boolean} withBorder - should image be rendered with border
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @property {boolean} withBackground - should image be rendered with background
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @property {boolean} stretched - should image be stretched to full width of container
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _ui = __webpack_require__(0);

var _ui2 = _interopRequireDefault(_ui);

var _tunes = __webpack_require__(9);

var _tunes2 = _interopRequireDefault(_tunes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @typedef {object} ImageConfig
 * @description
 * @property {string} url - upload endpoint
 * @property {string} field - field name for uploaded image
 * @property {string} types - available mime-types
 */

var ImageTool = function () {
  _createClass(ImageTool, null, [{
    key: 'displayInToolbox',

    /**
     * Should this tools be displayed at the Editor's Toolbox
     * @return {boolean}
     */
    get: function get() {
      return true;
    }

    /**
     * Get Tool icon's SVG
     * @return {string}
     */

  }, {
    key: 'toolboxIcon',
    get: function get() {
      return '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150.242V79c0-18.778-15.222-34-34-34H79c-18.778 0-34 15.222-34 34v42.264l67.179-44.192 80.398 71.614 56.686-29.14L291 150.242zm-.345 51.622l-42.3-30.246-56.3 29.884-80.773-66.925L45 174.187V197c0 18.778 15.222 34 34 34h178c17.126 0 31.295-12.663 33.655-29.136zM79 0h178c43.63 0 79 35.37 79 79v118c0 43.63-35.37 79-79 79H79c-43.63 0-79-35.37-79-79V79C0 35.37 35.37 0 79 0z"/></svg>';
    }

    /**
     * @param {ImageToolData} data - previously saved data
     * @param {ImageConfig} config - user config for Tool
     * @param {object} api - CodeX Editor API
     */

  }]);

  function ImageTool(_ref) {
    var data = _ref.data,
        config = _ref.config,
        api = _ref.api;

    _classCallCheck(this, ImageTool);

    /**
     * Initial data
     */
    this._data = {};
    this.data = data;

    /**
     * Tool's initial config
     */
    this.config = {
      url: config.url || '',
      field: config.field || 'image',
      types: config.types || 'image/*'
    };

    this.nodes = {
      wrapper: null,
      button: null,
      loader: null,
      imageHolder: null
    };

    this.ui = new _ui2.default({ api: api, config: this.config });
    this.tunes = new _tunes2.default({ api: api });
  }

  /**
   * @param {ImageToolData} data
   */


  _createClass(ImageTool, [{
    key: 'render',


    /**
     * @return {HTMLDivElement}
     */
    value: function render() {
      return this.ui.render(this.data);
    }
  }, {
    key: 'save',
    value: function save() {
      // let image = this.nodes.wrapper.querySelector('img'),
      //   caption = this.nodes.wrapper.querySelector('.' + this.CSS.input);
      //
      // if (!image) {
      //   return this.data;
      // }

      return Object.assign(this.data, {
        // url: image.src,
        // caption: caption.innerHTML
      });
    }

    /**
     * Makes buttons with tunes: add background, add border, stretch image
     * @return {Element}
     */

  }, {
    key: 'renderSettings',
    value: function renderSettings() {
      return this.tunes.render();
    }

    /**
     * Read pasted image and convert it to base64
     *
     * @static
     * @param {File} file
     * @returns {Promise<SimpleImageData>}
     */

  }, {
    key: '_createLoader',
    value: function _createLoader() {
      var loader = this._make('div', this.CSS.loading);

      this.nodes.wrapper.appendChild(loader);

      this.nodes.loader = loader;
    }
  }, {
    key: '_createImage',
    value: function _createImage(url) {
      var _this = this;

      // let loader = this._make('div', this.CSS.loading),
      var imageHolder = this._make('div', this.CSS.imageHolder),
          image = this._make('img'),
          caption = this._make('div', this.CSS.input, {
        contentEditable: 'true',
        innerHTML: this.data.caption || ''
      });

      caption.dataset.placeholder = 'Enter a caption';

      image.src = url;
      // this.nodes.wrapper.appendChild(loader);

      image.onload = function () {
        _this.nodes.wrapper.classList.remove(_this.CSS.loading);

        imageHolder.appendChild(image);

        _this.nodes.wrapper.appendChild(imageHolder);
        _this.nodes.wrapper.appendChild(caption);

        _this.nodes.loader.remove();

        _this._acceptTuneView();
      };

      this.nodes.imageHolder = imageHolder;

      image.onerror = function () {
        // @todo use api.Notifies.show() to show error notification
        console.error('Failed to load an image');

        _this.nodes.loader.remove();
        _this.nodes.imageHolder.remove();
        _this._createButton();
      };
    }
  }, {
    key: '_progressCallback',
    value: function _progressCallback(percentage) {}

    /**
     * Click on the Settings Button
     * @private
     */

  }, {
    key: '_toggleTune',
    value: function _toggleTune(tune) {
      this.data[tune] = !this.data[tune];
      this._acceptTuneView();
    }

    /**
     * Add specified class corresponds with activated tunes
     * @private
     */

  }, {
    key: '_acceptTuneView',
    value: function _acceptTuneView() {
      var _this2 = this;

      this.settings.forEach(function (tune) {
        _this2.nodes.imageHolder.classList.toggle(_this2.CSS.imageHolder + '--' + tune.name.replace(/([A-Z])/g, function (g) {
          return '-' + g[0].toLowerCase();
        }), !!_this2.data[tune.name]);

        if (tune.name === 'stretched') {
          _this2.api.blocks.stretchBlock(_this2.api.blocks.getCurrentBlockIndex(), !!_this2.data.stretched);
        }
      });
    }
  }, {
    key: 'data',
    set: function set(data) {
      this._data.url = data.url || '';
      this._data.caption = data.caption || '';
      this._data.withBorder = data.withBorder !== undefined ? data.withBorder : false;
      this._data.withBackground = data.withBackground !== undefined ? data.withBackground : false;
      this._data.stretched = data.stretched !== undefined ? data.stretched : false;
    }

    /**
     * @return {ImageToolData} data
     */
    ,
    get: function get() {
      return this._data;
    }
  }], [{
    key: 'onDropHandler',
    value: function onDropHandler(file) {
      var reader = new FileReader();

      reader.readAsDataURL(file);

      return new Promise(function (resolve) {
        reader.onload = function (event) {
          resolve({
            url: event.target.result,
            caption: file.name
          });
        };
      });
    }

    /**
     * Specify paste substitutes
     * @see {@link ../../../docs/tools.md#paste-handling}
     * @public
     */

  }, {
    key: 'onPaste',
    get: function get() {
      return {
        patterns: {
          image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i
        },
        tags: ['img'],
        files: {
          mimeTypes: ['image/*']
        },
        fileHandler: Image.onDropHandler,
        handler: function handler(img) {
          return {
            url: img.src
          };
        },
        patternHandler: function patternHandler(text) {
          return {
            url: text
          };
        }
      };
    }
  }]);

  return ImageTool;
}();

exports.default = ImageTool;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(3);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".image-tool {\n  &__tune {\n    svg {\n\n    }\n  }\n\n}\n\n.cdx-image .cdx-loader {\n  min-height: 200px;\n}\n\n.cdx-image .cdx-input {\n  margin-top: 10px;\n}\n\n.cdx-image img {\n  max-width: 100%;\n  vertical-align: bottom;\n}\n\n.cdx-image__picture--with-background {\n  background: #eff2f5;\n  padding: 10px;\n}\n\n.cdx-image__picture--with-background img {\n  display: block;\n  max-width: 60%;\n  margin: 0 auto;\n}\n\n.cdx-image__picture--with-border {\n  border: 1px solid #e8e8eb;\n  padding: 1px;\n}\n\n.cdx-image__picture--stretched img {\n  max-width: none;\n  width: 100%;\n}\n\n.cdx-image__upload-button {\n  height: 100px;\n  background-color: lightblue;\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),
/* 4 */
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
/* 5 */
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

var	fixUrls = __webpack_require__(6);

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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var r=n(2),o=setTimeout;function i(){}function a(e){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function u(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,a._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void s(t.promise,e)}c(t.promise,r)}else(1===e._state?c:s)(t.promise,e._value)})):e._deferreds.push(t)}function c(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof a)return e._state=3,e._value=t,void f(e);if("function"==typeof n)return void l(function(e,t){return function(){e.apply(t,arguments)}}(n,t),e)}e._state=1,e._value=t,f(e)}catch(t){s(e,t)}}function s(e,t){e._state=2,e._value=t,f(e)}function f(e){2===e._state&&0===e._deferreds.length&&a._immediateFn(function(){e._handled||a._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)u(e,e._deferreds[t]);e._deferreds=null}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,c(t,e))},function(e){n||(n=!0,s(t,e))})}catch(e){if(n)return;n=!0,s(t,e)}}a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var n=new this.constructor(i);return u(this,new function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(e,t,n)),n},a.prototype.finally=r.a,a.all=function(e){return new a(function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var u=a.then;if("function"==typeof u)return void u.call(a,function(t){i(e,t)},n)}r[e]=a,0==--o&&t(r)}catch(e){n(e)}}for(var a=0;a<r.length;a++)i(a,r[a])})},a.resolve=function(e){return e&&"object"==typeof e&&e.constructor===a?e:new a(function(t){t(e)})},a.reject=function(e){return new a(function(t,n){n(e)})},a.race=function(e){return new a(function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)})},a._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){o(e,0)},a._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=a}).call(this,n(5).setImmediate)},function(e,t,n){"use strict";t.a=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n(4);var o=n(8),i=function(){var e={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},t=function(e){return new Promise(function(t,n){e=a(e),e=u(e);var r=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");r.open(e.method,e.url),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(e.headers).forEach(function(t){var n=e.headers[t];r.setRequestHeader(t,n)});var o=e.ratio;r.upload.addEventListener("progress",function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*o/100);e.progress(r)},!1),r.addEventListener("progress",function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*(100-o)/100)+o;e.progress(r)},!1),r.onreadystatechange=function(){if(4===r.readyState){var e=r.response;try{e=JSON.parse(e)}catch(e){}200===r.status?t(e):n(e)}},r.send(e.data)})},n=function(e){return e.method="POST",t(e)},a=function(t){if(!t.url||"string"!=typeof t.url)throw new Error("Url must be a non-empty string");if(t.method&&"string"!=typeof t.method)throw new Error("`method` must be a string or null");if(t.method=t.method?t.method.toUpperCase():"GET",t.headers&&"object"!==r(t.headers))throw new Error("`headers` must be an object or null");if(t.headers=t.headers||{},t.type&&("string"!=typeof t.type||!Object.values(e).includes(t.type)))throw new Error("`type` must be taken from module's «contentType» library");if(t.progress&&"function"!=typeof t.progress)throw new Error("`progress` must be a function or null");if(t.progress=t.progress||function(e){},t.ratio&&"number"!=typeof t.ratio)throw new Error("`ratio` must be a number");if(t.ratio<0||t.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(t.ratio=t.ratio||90,t.accept&&"string"!=typeof t.accept)throw new Error("`accept` must be a string with a list of allowed mime-types");if(t.accept=t.accept||"*/*",t.multiple&&"boolean"!=typeof t.multiple)throw new Error("`multiple` must be a true or false");if(t.multiple=t.multiple||!1,t.fieldName&&"string"!=typeof t.fieldName)throw new Error("`fieldName` must be a string");return t.fieldName=t.fieldName||"files",t},u=function(t){switch(t.method){case"GET":var n=c(t.data,e.URLENCODED);delete t.data,t.url=/\?/.test(t.url)?t.url+"&"+n:t.url+"?"+n;break;case"POST":case"PUT":case"DELETE":case"UPDATE":var r=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||e.JSON}(t);(o.isFormData(t.data)||o.isFormElement(t.data))&&(r=e.FORM),t.data=c(t.data,r),r!==i.contentType.FORM&&(t.headers["content-type"]=r)}return t},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case e.URLENCODED:return o.urlEncode(t);case e.JSON:return o.jsonEncode(t);case e.FORM:return o.formEncode(t);default:return t}};return{contentType:e,request:t,get:function(e){return e.method="GET",t(e)},post:n,transport:function(e){return e=a(e),o.transport(e).then(function(t){return o.isObject(e.data)&&Object.keys(e.data).forEach(function(n){var r=e.data[n];t.append(n,r)}),e.data=t,n(e)})}}}();e.exports=i},function(e,t,n){"use strict";n.r(t);var r=n(1);window.Promise=window.Promise||r.a},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(6),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o=1,i={},a=!1,u=e.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(e);c=c&&c.setTimeout?c:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){f(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&f(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),r=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){f(e.data)},r=function(t){e.port2.postMessage(t)}}():u&&"onreadystatechange"in u.createElement("script")?function(){var e=u.documentElement;r=function(t){var n=u.createElement("script");n.onreadystatechange=function(){f(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():r=function(e){setTimeout(f,0,e)},c.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return i[o]=a,r(o),o++},c.clearImmediate=s}function s(e){delete i[e]}function f(e){if(a)setTimeout(f,0,e);else{var t=i[e];if(t){a=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{s(e),a=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(7))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,s=[],f=!1,l=-1;function d(){f&&c&&(f=!1,c.length?s=c.concat(s):l=-1,s.length&&p())}function p(){if(!f){var e=u(d);f=!0;for(var t=s.length;t;){for(c=s,s=[];++l<t;)c&&c[l].run();l=-1,t=s.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||f||u(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(9);e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(e,null,[{key:"urlEncode",value:function(e){return o(e)}},{key:"jsonEncode",value:function(e){return JSON.stringify(e)}},{key:"formEncode",value:function(e){if(this.isFormData(e))return e;if(this.isFormElement(e))return new FormData(e);if(this.isObject(e)){var t=new FormData;return Object.keys(e).forEach(function(n){var r=e[n];t.append(n,r)}),t}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(e){return"[object Object]"===Object.prototype.toString.call(e)}},{key:"isFormData",value:function(e){return e instanceof FormData}},{key:"isFormElement",value:function(e){return e instanceof HTMLFormElement}},{key:"transport",value:function(e){return new Promise(function(t,n){var r=document.createElement("INPUT");r.type="file",e.multiple&&r.setAttribute("multiple","multiple"),e.accept&&r.setAttribute("accept",e.accept),r.addEventListener("change",function(n){for(var r=n.target.files,o=new FormData,i=0;i<r.length;i++)o.append(e.fieldName,r[i],r[i].name);t(o)},!1),r.click()})}}]),e}()},function(e,t){var n=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},r=function(e,t,o,i){return t=t||null,o=o||"&",i=i||null,e?function(e){for(var t=new Array,n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}(Object.keys(e).map(function(a){var u,c=a;if(i&&(c=i+"["+c+"]"),"object"==typeof e[a]&&null!==e[a])u=r(e[a],null,o,c);else{t&&(c=function(e){return!isNaN(parseFloat(e))&&isFinite(e)}(c)?t+Number(c):c);var s=e[a];s=(s=0===(s=!1===(s=!0===s?"1":s)?"0":s)?"0":s)||"",u=n(c)+"="+n(s)}return u})).join(o).replace(/[!'()*]/g,""):""};e.exports=r}])});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path fill-rule=\"evenodd\" d=\"M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z\" id=\"a\"></path></svg>"

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ui = __webpack_require__(0);

var _background = __webpack_require__(10);

var _background2 = _interopRequireDefault(_background);

var _border = __webpack_require__(11);

var _border2 = _interopRequireDefault(_border);

var _stretched = __webpack_require__(12);

var _stretched2 = _interopRequireDefault(_stretched);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tunes = function () {
  function Tunes(_ref) {
    var api = _ref.api;

    _classCallCheck(this, Tunes);

    this.api = api;
  }
  /**
   * Available Image tunes
   */


  _createClass(Tunes, [{
    key: 'render',


    /**
     * Makes buttons with tunes: add background, add border, stretch image
     * @return {Element}
     */
    value: function render() {
      var _this = this;

      var wrapper = (0, _ui.make)('div', this.CSS.wrapper);

      this.tunes.forEach(function (tune) {
        var el = (0, _ui.make)('div', [_this.CSS.buttonBase, _this.CSS.button], {
          innerHTML: tune.icon
        });

        el.addEventListener('click', function () {
          _this.tuneClicked(tune.name);
        });

        // el.classList.toggle(this.CSS.buttonActive, this.data[tune.name]);

        wrapper.appendChild(el);
      });

      return wrapper;
    }

    /**
     * Clicks to one of the tunes
     * @param {string} tuneName - clicked tune name
     */

  }, {
    key: 'tuneClicked',
    value: function tuneClicked(tuneName) {
      console.log('clicked', tuneName);
    }
  }, {
    key: 'tunes',
    get: function get() {
      return [{
        name: 'withBorder',
        icon: _border2.default
      }, {
        name: 'stretched',
        icon: _stretched2.default
      }, {
        name: 'withBackground',
        icon: _background2.default
      }];
    }
  }, {
    key: 'CSS',
    get: function get() {
      return {
        wrapper: '',
        buttonBase: this.api.styles.settingsButton,
        button: 'image-tool__tune',
        buttonActive: this.api.styles.settingsButtonActive
      };
    }
  }]);

  return Tunes;
}();

exports.default = Tunes;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z\"></path></svg>"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z\"></path></svg>"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"17\" height=\"10\" viewBox=\"0 0 17 10\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z\"></path></svg>"

/***/ })
/******/ ])["default"];
});