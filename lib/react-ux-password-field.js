/*!
 * React UX Password Field
 * version: 0.9.2
 * 
 * MIT Licensed
 * github: https://github.com/seethroughtrees/react-ux-password-field/
 * demo: https://seethroughtrees.github.io/react-ux-password-field/
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-ux-password-field"] = factory(require("react"));
	else
		root["react-ux-password-field"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1),
	    RP = React.PropTypes,
	    config = __webpack_require__(2),
	    debounce = __webpack_require__(3);

	var InputPassword = React.createClass({
	  displayName: "InputPassword",

	  /*==========  VALIDATE  ==========*/

	  propTypes: {
	    infoBar: RP.bool,
	    statusColor: RP.string,
	    statusInactiveColor: RP.string,
	    minScore: RP.number,
	    changeCb: RP.func,
	    toggleMask: RP.bool,
	    unMaskTime: RP.number,
	    minLength: RP.number,
	    strengthLang: RP.array
	  },

	  /*==========  DEFAULTS  ==========*/

	  getDefaultProps: function getDefaultProps() {
	    return {
	      infoBar: true,
	      statusColor: config.statusColor,
	      statusInactiveColor: config.statusInactiveColor,
	      zxcvbn: config.zxcvbnSrc,
	      minScore: 0,
	      toggleMask: true,
	      unMaskTime: config.unMaskTime,
	      strengthLang: config.strengthLang
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      value: "",
	      score: 0,
	      entropy: 0,
	      isPassword: true
	    };
	  },

	  /*==========  STYLES  ==========*/

	  getMeterStyle: function getMeterStyle(score) {
	    var width = 24 * score + 4;
	    return {
	      width: this.props.zxcvbn ? width + "%" : "100%",
	      maxWidth: "85%",
	      opacity: this.props.zxcvbn ? width * 0.01 + 0.5 : "1",
	      background: this.state.isValid ? this.props.statusColor : this.props.statusInactiveColor,
	      height: 5,
	      transition: "all 400ms linear",
	      display: "inline-block",
	      marginRight: "1%"
	    };
	  },

	  unMaskStyle: {
	    color: config.unMaskColor,
	    fontStyle: "italic",
	    fontWeight: 200
	  },

	  infoStyle: {
	    position: "absolute",
	    bottom: -10,
	    width: "100%",
	    overflow: "hidden",
	    height: 24
	  },

	  iconStyle: {
	    display: "inline-block",
	    opacity: 0.25,
	    position: "relative",
	    top: 2,
	    width: "3%"
	  },

	  strengthLangStyle: {
	    fontSize: 12,
	    position: "relative",
	    top: 2 },

	  /*==========  METHODS  ==========*/

	  addPasswordType: function addPasswordType() {
	    this.setState({
	      isPassword: true
	    });
	  },

	  /*==========  HANDLERS  ==========*/

	  handleInputType: function handleInputType() {
	    this.setState({
	      isPassword: !this.state.isPassword
	    });
	  },

	  handleChange: function handleChange(e) {
	    e.preventDefault();
	    var val = e.target.value;

	    this.setState({
	      value: val,
	      isValid: e.target.validity.valid
	    });

	    this.props.onChange(val, e.target.validity.valid);

	    if (this.props.toggleMask) {
	      this.handleToggleMask();
	    }

	    if (this.props.zxcvbn) {
	      this.handleZxcvbn(val);
	    }

	    if (this.props.minLength) {
	      this.handleMinLength(e.target.value.length);
	    }
	  },

	  handleToggleMask: function handleToggleMask() {

	    // display password, then
	    this.setState({
	      isPassword: false
	    });

	    // debounce remasking password
	    this.maskPassword();
	  },

	  handleZxcvbn: function handleZxcvbn(val) {
	    var stats = zxcvbn(val),
	        currentScore = stats.score;

	    this.setState({
	      score: currentScore,
	      entropy: stats.entropy
	    });

	    if (currentScore < this.props.minScore) {
	      this.setState({
	        isValid: false
	      });
	    }

	    // if score changed and callback provided
	    if (this.props.changeCb && this.state.score !== currentScore) {
	      this.props.changeCb(this.state.score, currentScore);
	    }

	    if (this.props.zxcvbn === "debug") {
	      console.debug(stats);
	    }
	  },

	  handleMinLength: function handleMinLength(len) {
	    if (len <= this.props.minLength) {
	      this.setState({
	        isValid: false
	      });
	    }
	  },

	  componentWillMount: function componentWillMount() {
	    var zxcvbnSrc;

	    // Load zxcvbn async if its enabled and doesn't already exist
	    if (this.props.zxcvbn && typeof zxcvbn === "undefined") {

	      zxcvbnSrc = this.props.zxcvbn !== "debug" ? this.props.zxcvbn : config.zxcvbnSrc;

	      // snippet to async load zxcvbn if enabled
	      (function () {
	        var a;a = function () {
	          var a, b;b = document.createElement("script");b.src = zxcvbnSrc;b.type = "text/javascript";b.async = !0;a = document.getElementsByTagName("head")[0];return a.parentNode.insertBefore(b, a);
	        };null != window.attachEvent ? window.attachEvent("onload", a) : window.addEventListener("load", a, !1);
	      }).call(this);
	    }

	    // set debouncer for password
	    if (this.props.toggleMask) {
	      this.maskPassword = debounce(this.addPasswordType, this.props.unMaskTime);
	    }
	  },

	  render: function render() {
	    var infoBar;

	    if (this.props.infoBar) {
	      infoBar = React.createElement(
	        "div",
	        { className: "passwordField__info", style: this.infoStyle },
	        React.createElement(
	          "span",
	          { style: this.iconStyle, className: "passwordField__icon" },
	          React.createElement("img", { src: __webpack_require__(4), height: "10", width: "10" })
	        ),
	        React.createElement("span", { style: this.getMeterStyle(this.state.score), className: "passwordField__meter" }),
	        React.createElement(
	          "span",
	          { style: this.strengthLangStyle, className: "passwordField__strength" },
	          this.props.zxcvbn && this.state.value.length > 0 && this.props.strengthLang.length > 0 ? this.props.strengthLang[this.state.score] : null
	        )
	      );
	    }

	    var _props = this.props;
	    var onChange = _props.onChange;

	    var props = _objectWithoutProperties(_props, ["onChange"]);

	    return React.createElement(
	      "div",
	      {
	        style: { position: "relative", display: "inline-block" },
	        className: "passwordField",
	        "data-valid": this.state.isValid,
	        "data-score": this.state.score,
	        "data-entropy": this.state.entropy
	      },
	      React.createElement("input", _extends({
	        ref: this.props.id,
	        className: "passwordField__input",
	        type: this.state.isPassword ? "password" : "text",
	        value: this.state.value,
	        style: this.state.isPassword ? null : this.unMaskStyle,
	        onChange: this.handleChange
	      }, props)),
	      infoBar
	    );
	  }
	});

	module.exports = InputPassword;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = {
	  statusColor: "#5CE592",
	  statusInactiveColor: "#FC6F6F",
	  unMaskColor: "#c7c7c7",
	  unMaskTime: 1400,
	  zxcvbnSrc: "https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/1.0/zxcvbn.min.js",
	  strengthLang: ["Weak", "Okay", "Good", "Strong", "Great"]
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	"use strict";

	var isNative = __webpack_require__(5);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = "Expected a function";

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeNow = isNative(nativeNow = Date.now) && nativeNow;

	/**
	 * Gets the number of milliseconds that have elapsed since the Unix epoch
	 * (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @category Date
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => logs the number of milliseconds it took for the deferred function to be invoked
	 */
	var now = nativeNow || function () {
	  return new Date().getTime();
	};

	/**
	 * Creates a function that delays invoking `func` until after `wait` milliseconds
	 * have elapsed since the last time it was invoked. The created function comes
	 * with a `cancel` method to cancel delayed invocations. Provide an options
	 * object to indicate that `func` should be invoked on the leading and/or
	 * trailing edge of the `wait` timeout. Subsequent calls to the debounced
	 * function return the result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=false] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	 *  delayed before it is invoked.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // avoid costly calculations while the window size is in flux
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // ensure `batchLog` is invoked once after 1 second of debounced calls
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', _.debounce(batchLog, 250, {
	 *   'maxWait': 1000
	 * }));
	 *
	 * // cancel a debounced call
	 * var todoChanges = _.debounce(batchLog, 1000);
	 * Object.observe(models.todo, todoChanges);
	 *
	 * Object.observe(models, function(changes) {
	 *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	 *     todoChanges.cancel();
	 *   }
	 * }, ['delete']);
	 *
	 * // ...at some point `models.todo` is changed
	 * models.todo.completed = true;
	 *
	 * // ...before 1 second has passed `models.todo` is deleted
	 * // which cancels the debounced `todoChanges` call
	 * delete models.todo;
	 */
	function debounce(func, wait, options) {
	  var args,
	      maxTimeoutId,
	      result,
	      stamp,
	      thisArg,
	      timeoutId,
	      trailingCall,
	      lastCalled = 0,
	      maxWait = false,
	      trailing = true;

	  if (typeof func != "function") {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = wait < 0 ? 0 : +wait || 0;
	  if (options === true) {
	    var leading = true;
	    trailing = false;
	  } else if (isObject(options)) {
	    leading = options.leading;
	    maxWait = "maxWait" in options && nativeMax(+options.maxWait || 0, wait);
	    trailing = "trailing" in options ? options.trailing : trailing;
	  }

	  function cancel() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    if (maxTimeoutId) {
	      clearTimeout(maxTimeoutId);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	  }

	  function delayed() {
	    var remaining = wait - (now() - stamp);
	    if (remaining <= 0 || remaining > wait) {
	      if (maxTimeoutId) {
	        clearTimeout(maxTimeoutId);
	      }
	      var isCalled = trailingCall;
	      maxTimeoutId = timeoutId = trailingCall = undefined;
	      if (isCalled) {
	        lastCalled = now();
	        result = func.apply(thisArg, args);
	        if (!timeoutId && !maxTimeoutId) {
	          args = thisArg = null;
	        }
	      }
	    } else {
	      timeoutId = setTimeout(delayed, remaining);
	    }
	  }

	  function maxDelayed() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	    if (trailing || maxWait !== wait) {
	      lastCalled = now();
	      result = func.apply(thisArg, args);
	      if (!timeoutId && !maxTimeoutId) {
	        args = thisArg = null;
	      }
	    }
	  }

	  function debounced() {
	    args = arguments;
	    stamp = now();
	    thisArg = this;
	    trailingCall = trailing && (timeoutId || !leading);

	    if (maxWait === false) {
	      var leadingCall = leading && !timeoutId;
	    } else {
	      if (!maxTimeoutId && !leading) {
	        lastCalled = stamp;
	      }
	      var remaining = maxWait - (stamp - lastCalled),
	          isCalled = remaining <= 0 || remaining > maxWait;

	      if (isCalled) {
	        if (maxTimeoutId) {
	          maxTimeoutId = clearTimeout(maxTimeoutId);
	        }
	        lastCalled = stamp;
	        result = func.apply(thisArg, args);
	      } else if (!maxTimeoutId) {
	        maxTimeoutId = setTimeout(maxDelayed, remaining);
	      }
	    }
	    if (isCalled && timeoutId) {
	      timeoutId = clearTimeout(timeoutId);
	    } else if (!timeoutId && wait !== maxWait) {
	      timeoutId = setTimeout(delayed, wait);
	    }
	    if (leadingCall) {
	      isCalled = true;
	      result = func.apply(thisArg, args);
	    }
	    if (isCalled && !timeoutId && !maxTimeoutId) {
	      args = thisArg = null;
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  return debounced;
	}

	/**
	 * Checks if `value` is the language type of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * **Note:** See the [ES5 spec](https://es5.github.io/#x8) for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return type == "function" || value && type == "object" || false;
	}

	module.exports = debounce;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRkNDMzg4M0FFN0IxMUU0OTE2RkY5MzYyMkI3QTVDMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRkNDMzg4NEFFN0IxMUU0OTE2RkY5MzYyMkI3QTVDMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJGQ0MzODgxQUU3QjExRTQ5MTZGRjkzNjIyQjdBNUMyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJGQ0MzODgyQUU3QjExRTQ5MTZGRjkzNjIyQjdBNUMyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+NkztvAAAAc9JREFUeNq8lk8oBFEcx2fG5k+0HJRQ/iVy2U1tUsjBzYnI2cUWJyl3XJRSkgOtxEU4keLgQP6kuColoeQgEkXWand8X/3UNM28Z56Z961PO2/fb9535r3f/N7TTdPUnBSLxTSBcsEA6AW1IAw+wD3YAtPg0+1mXdK4DJyAKk7MM+gE506dhuZdleBSYMpUDM5Ah1NnyKOpDnZpWn91C/ZBksZrBhFL/zaopyWQNh4HDZZ2AsQd4kbBFF3ngRnQ8581vgHVdH0M2jgPeWjpz1BePMqscdRiyrQhiF+25VK7bHI12toXgvg9+yTKGpc6TDtPD+DJ0i6RNS6ytZOC+IwtpkA2q1epKLyDb/D2h3uGQQXIBqcyWd1FBeEOZNFM1YEckHYpTGzgKyqbpmWp1kEq9IeCcQRaNP80CZoMQclb8NmUqRys8IxZpenTglHUEOxAhQEZ5/OM01qAMnwah+3Ng2BTpTGr2a1gHnSDCVXGs7Z2QpVxjUNSKjGeo29T+RuHqaRqtOdGVGZ1in6/VH9OYZet01Uhnx5qBLyAIT+MvVQulslLflWuazq+BKFXnvEaWAzI+IA31ezUMEaJE6dDQYb+9yrdMrs7oP9HgAEAXmVa5ulD/g0AAAAASUVORK5CYII="

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	"use strict";

	var funcTag = "[object Function]";

	/** Used to detect host constructors (Safari > 5). */
	var reHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Used to match `RegExp` special characters.
	 * See this [article on `RegExp` characters](http://www.regular-expressions.info/characters.html#special)
	 * for more details.
	 */
	var reRegExpChars = /[.*+?^${}()|[\]\/\\]/g,
	    reHasRegExpChars = RegExp(reRegExpChars.source);

	/**
	 * Converts `value` to a string if it is not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  if (typeof value == "string") {
	    return value;
	  }
	  return value == null ? "" : value + "";
	}

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return value && typeof value == "object" || false;
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/**
	 * Used to resolve the `toStringTag` of values.
	 * See the [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
	 * for more details.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reNative = RegExp("^" + escapeRegExp(objToString).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (objToString.call(value) == funcTag) {
	    return reNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reHostCtor.test(value) || false;
	}

	/**
	 * Escapes the `RegExp` special characters "\", "^", "$", ".", "|", "?", "*",
	 * "+", "(", ")", "[", "]", "{" and "}" in `string`.
	 *
	 * @static
	 * @memberOf _
	 * @category String
	 * @param {string} [string=''] The string to escape.
	 * @returns {string} Returns the escaped string.
	 * @example
	 *
	 * _.escapeRegExp('[lodash](https://lodash.com/)');
	 * // => '\[lodash\]\(https://lodash\.com/\)'
	 */
	function escapeRegExp(string) {
	  string = baseToString(string);
	  return string && reHasRegExpChars.test(string) ? string.replace(reRegExpChars, "\\$&") : string;
	}

	module.exports = isNative;

/***/ }
/******/ ])
});
;