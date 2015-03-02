/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// default css
	__webpack_require__(7);
	__webpack_require__(4);
	__webpack_require__(5);

	// syntax highlighting
	__webpack_require__(6);
	__webpack_require__(2);

	// custom css
	__webpack_require__(8);

	/*==========  APP  ==========*/

	var React = __webpack_require__(1),
	    InputPassword = __webpack_require__(3);

	React.render(React.createElement(
	  "form",
	  null,
	  React.createElement(
	    "fieldset",
	    null,
	    React.createElement(
	      "label",
	      { htmlFor: "password1" },
	      "Passwordssss"
	    ),
	    React.createElement(InputPassword, {
	      id: "password1",
	      name: "password1",
	      placeholder: "Try me out!  Enter a random password.",
	      minScore: 2,
	      minLength: 5
	    })
	  )
	), document.getElementById("content"));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/* Rainbow v1.2 rainbowco.de | included languages: generic, shell, javascript, html */
	window.Rainbow = (function () {
	  function q(a) {
	    var b,
	        c = a.getAttribute && a.getAttribute("data-language") || 0;if (!c) {
	      a = a.attributes;for (b = 0; b < a.length; ++b) if ("data-language" === a[b].nodeName) {
	        return a[b].nodeValue;
	      }
	    }return c;
	  }function B(a) {
	    var b = q(a) || q(a.parentNode);if (!b) {
	      var c = /\blang(?:uage)?-(\w+)/;(a = a.className.match(c) || a.parentNode.className.match(c)) && (b = a[1]);
	    }return b;
	  }function C(a, b) {
	    for (var c in f[d]) {
	      c = parseInt(c, 10);if (a == c && b == f[d][c] ? 0 : a <= c && b >= f[d][c]) delete f[d][c], delete j[d][c];if (a >= c && a < f[d][c] || b > c && b < f[d][c]) {
	        return !0;
	      }
	    }return !1;
	  }function r(a, b) {
	    return "<span class=\"" + a.replace(/\./g, " ") + (l ? " " + l : "") + "\">" + b + "</span>";
	  }function s(a, b, c, i) {
	    if ("undefined" === typeof a || null === a) i();else {
	      var e = a.exec(c);if (e) {
	        ++t;!b.name && "string" == typeof b.matches[0] && (b.name = b.matches[0], delete b.matches[0]);var k = e[0],
	            g = e.index,
	            u = e[0].length + g,
	            h = function h() {
	          function e() {
	            s(a, b, c, i);
	          }t % 100 > 0 ? e() : setTimeout(e, 0);
	        };if (C(g, u)) h();else {
	          var m = v(b.matches),
	              l = (function (_l) {
	            var _lWrapper = function l(_x, _x2, _x3) {
	              return _l.apply(this, arguments);
	            };

	            _lWrapper.toString = function () {
	              return _l.toString();
	            };

	            return _lWrapper;
	          })(function (a, c, i) {
	            if (a >= c.length) i(k);else {
	              var d = e[c[a]];if (d) {
	                var g = b.matches[c[a]],
	                    f = g.language,
	                    h = g.name && g.matches ? g.matches : g,
	                    j = function j(b, d, g) {
	                  var f;f = 0;var h;for (h = 1; h < c[a]; ++h) e[h] && (f = f + e[h].length);d = g ? r(g, d) : d;k = k.substr(0, f) + k.substr(f).replace(b, d);l(++a, c, i);
	                };f ? n(d, f, function (a) {
	                  j(d, a);
	                }) : typeof g === "string" ? j(d, d, g) : w(d, h.length ? h : [h], function (a) {
	                  j(d, a, g.matches ? g.name : 0);
	                });
	              } else l(++a, c, i);
	            }
	          });l(0, m, function (a) {
	            b.name && (a = r(b.name, a));if (!j[d]) {
	              j[d] = {};f[d] = {};
	            }j[d][g] = { replace: e[0], "with": a };f[d][g] = u;h();
	          });
	        }
	      } else i();
	    }
	  }function v(a) {
	    var b = [],
	        c;for (c in a) a.hasOwnProperty(c) && b.push(c);return b.sort(function (a, b) {
	      return b - a;
	    });
	  }function w(a, b, c) {
	    function i(b, k) {
	      k < b.length ? s(b[k].pattern, b[k], a, function () {
	        i(b, ++k);
	      }) : D(a, function (a) {
	        delete j[d];delete f[d];--d;c(a);
	      });
	    }++d;i(b, 0);
	  }function D(a, b) {
	    function c(a, b, i, f) {
	      if (i < b.length) {
	        ++x;var h = b[i],
	            l = j[d][h],
	            a = a.substr(0, h) + a.substr(h).replace(l.replace, l["with"]),
	            h = function h() {
	          c(a, b, ++i, f);
	        };0 < x % 250 ? h() : setTimeout(h, 0);
	      } else f(a);
	    }var i = v(j[d]);c(a, i, 0, b);
	  }function n(a, b, c) {
	    var d = m[b] || [],
	        e = m[y] || [],
	        b = z[b] ? d : d.concat(e);w(a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&(?![\w\#]+;)/g, "&amp;"), b, c);
	  }function o(_x, _x2, _x3) {
	    var _again = true;

	    _function: while (_again) {
	      _again = false;
	      var a = _x,
	          b = _x2,
	          c = _x3;
	      d = e = undefined;
	      if (b < a.length) {
	        var d = a[b],
	            e = B(d);if (!(-1 < (" " + d.className + " ").indexOf(" rainbow ")) && e) {
	          return (e = e.toLowerCase(), d.className += d.className ? " rainbow" : "rainbow", n(d.innerHTML, e, function (k) {
	            d.innerHTML = k;j = {};f = {};p && p(d, e);setTimeout(function () {
	              o(a, ++b, c);
	            }, 0);
	          }));
	        } else {
	          _x = a;
	          _x2 = ++b;
	          _x3 = c;
	          _again = true;
	          continue _function;
	        }
	      }c && c();
	    }
	  }function A(a, b) {
	    var a = a && "function" == typeof a.getElementsByTagName ? a : document,
	        c = a.getElementsByTagName("pre"),
	        d = a.getElementsByTagName("code"),
	        e,
	        f = [],
	        g = [];for (e = 0; e < c.length; ++e) c[e].getElementsByTagName("code").length ? c[e].innerHTML = c[e].innerHTML.replace(/^\s+/, "").replace(/\s+$/, "") : f.push(c[e]);for (e = 0; e < d.length; ++e) g.push(d[e]);o(g.concat(f), 0, b);
	  }var j = {},
	      f = {},
	      m = {},
	      z = {},
	      d = 0,
	      y = 0,
	      t = 0,
	      x = 0,
	      l,
	      p;return { extend: function extend(a, b, c) {
	      1 == arguments.length && (b = a, a = y);z[a] = c;m[a] = b.concat(m[a] || []);
	    }, b: function b(a) {
	      p = a;
	    }, a: (function (_a) {
	      var _aWrapper = function a(_x) {
	        return _a.apply(this, arguments);
	      };

	      _aWrapper.toString = function () {
	        return _a.toString();
	      };

	      return _aWrapper;
	    })(function (a) {
	      l = a;
	    }), color: function color(a, b, c) {
	      if ("string" == typeof a) {
	        return n(a, b, c);
	      }if ("function" == typeof a) {
	        return A(0, a);
	      }A(a, b);
	    } };
	})();
	document.addEventListener ? document.addEventListener("DOMContentLoaded", Rainbow.color, !1) : window.attachEvent("onload", Rainbow.color);Rainbow.onHighlight = Rainbow.b;Rainbow.addClass = Rainbow.a;Rainbow.extend([{ matches: { 1: [{ name: "keyword.operator", pattern: /\=|\+/g }, { name: "keyword.dot", pattern: /\./g }], 2: { name: "string", matches: { name: "constant.character.escape", pattern: /\\('|"){1}/g } } }, pattern: /(\(|\s|\[|\=|:|\+|\.)(('|")([^\\\1]|\\.)*?(\3))/gm }, { name: "comment", pattern: /\/\*[\s\S]*?\*\/|(\/\/|\#)[\s\S]*?$/gm }, { name: "constant.numeric", pattern: /\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi }, { matches: { 1: "keyword" }, pattern: /\b(and|array|as|b(ool(ean)?|reak)|c(ase|atch|har|lass|on(st|tinue))|d(ef|elete|o(uble)?)|e(cho|lse(if)?|xit|xtends|xcept)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\(|\b)/gi }, { name: "constant.language", pattern: /true|false|null/g }, { name: "keyword.operator", pattern: /\+|\!|\-|&(gt|lt|amp);|\||\*|\=/g }, { matches: { 1: "function.call" }, pattern: /(\w+?)(?=\()/g }, { matches: { 1: "storage.function", 2: "entity.name.function" }, pattern: /(function)\s(.*?)(?=\()/g }]);Rainbow.extend("shell", [{ name: "shell", matches: { 1: { language: "shell" } }, pattern: /\$\(([\s\S]*?)\)/gm }, { matches: { 2: "string" }, pattern: /(\(|\s|\[|\=)(('|")[\s\S]*?(\3))/gm }, { name: "keyword.operator", pattern: /&lt;|&gt;|&amp;/g }, { name: "comment", pattern: /\#[\s\S]*?$/gm }, { name: "storage.function", pattern: /(.+?)(?=\(\)\s{0,}\{)/g }, { name: "support.command", pattern: /\b(echo|rm|ls|(mk|rm)dir|cd|find|cp|exit|pwd|exec|trap|source|shift|unset)/g }, { matches: { 1: "keyword" }, pattern: /\b(break|case|continue|do|done|elif|else|esac|eval|export|fi|for|function|if|in|local|return|set|then|unset|until|while)(?=\(|\b)/g }], !0);Rainbow.extend("javascript", [{ name: "selector", pattern: /(\s|^)\$(?=\.|\()/g }, { name: "support", pattern: /\b(window|document)\b/g }, { matches: { 1: "support.property" }, pattern: /\.(length|node(Name|Value))\b/g }, { matches: { 1: "support.function" }, pattern: /(setTimeout|setInterval)(?=\()/g }, { matches: { 1: "support.method" }, pattern: /\.(getAttribute|push|getElementById|getElementsByClassName|log|setTimeout|setInterval)(?=\()/g }, { name: "string.regexp", matches: { 1: "string.regexp.open", 2: { name: "constant.regexp.escape", pattern: /\\(.){1}/g },
	    3: "string.regexp.close", 4: "string.regexp.modifier" }, pattern: /(\/)(?!\*)(.+)(\/)([igm]{0,3})/g }, { matches: { 1: "storage", 3: "entity.function" }, pattern: /(var)?(\s|^)(\S*)(?=\s?=\s?function\()/g }, { matches: { 1: "keyword", 2: "entity.function" }, pattern: /(new)\s+(.*)(?=\()/g }, { name: "entity.function", pattern: /(\w+)(?=:\s{0,}function)/g }]);Rainbow.extend("html", [{ name: "source.php.embedded", matches: { 2: { language: "php" } }, pattern: /&lt;\?=?(?!xml)(php)?([\s\S]*?)(\?&gt;)/gm }, { name: "source.css.embedded", matches: { 1: { matches: { 1: "support.tag.style", 2: [{ name: "entity.tag.style", pattern: /^style/g }, { name: "string", pattern: /('|")(.*?)(\1)/g }, { name: "entity.tag.style.attribute", pattern: /(\w+)/g }], 3: "support.tag.style" }, pattern: /(&lt;\/?)(style.*?)(&gt;)/g }, 2: { language: "css" }, 3: "support.tag.style", 4: "entity.tag.style", 5: "support.tag.style" }, pattern: /(&lt;style.*?&gt;)([\s\S]*?)(&lt;\/)(style)(&gt;)/gm }, { name: "source.js.embedded", matches: { 1: { matches: { 1: "support.tag.script", 2: [{ name: "entity.tag.script", pattern: /^script/g }, { name: "string", pattern: /('|")(.*?)(\1)/g }, { name: "entity.tag.script.attribute", pattern: /(\w+)/g }], 3: "support.tag.script" }, pattern: /(&lt;\/?)(script.*?)(&gt;)/g }, 2: { language: "javascript" }, 3: "support.tag.script", 4: "entity.tag.script", 5: "support.tag.script" }, pattern: /(&lt;script(?! src).*?&gt;)([\s\S]*?)(&lt;\/)(script)(&gt;)/gm }, { name: "comment.html", pattern: /&lt;\!--[\S\s]*?--&gt;/g }, { matches: { 1: "support.tag.open", 2: "support.tag.close" }, pattern: /(&lt;)|(\/?\??&gt;)/g }, { name: "support.tag", matches: { 1: "support.tag", 2: "support.tag.special", 3: "support.tag-name" }, pattern: /(&lt;\??)(\/|\!?)(\w+)/g }, { matches: { 1: "support.attribute" }, pattern: /([a-z-]+)(?=\=)/gi }, { matches: { 1: "support.operator", 2: "string.quote", 3: "string.value", 4: "string.quote" }, pattern: /(=)('|")(.*?)(\2)/g }, { matches: { 1: "support.operator", 2: "support.value" }, pattern: /(=)([a-zA-Z\-0-9]*)\b/g }, { matches: { 1: "support.attribute" },
	  pattern: /\s(\w+)(?=\s|&gt;)(?![\s\S]*&lt;)/g }], !0);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	(function webpackUniversalModuleDefinition(root, factory) {
		if (true) module.exports = factory(__webpack_require__(1));else if (typeof define === "function" && define.amd) define(["react"], factory);else if (typeof exports === "object") exports["react-ux-password-field"] = factory(require("react"));else root["react-ux-password-field"] = factory(root.React);
	})(undefined, function (__WEBPACK_EXTERNAL_MODULE_1__) {
		return ( /******/(function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
				/******/
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
					/******/
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId]) {
						/******/return installedModules[moduleId].exports;
					} /******/
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };
					/******/
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
					/******/
					/******/ // Flag the module as loaded
					/******/module.loaded = true;
					/******/
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
				/******/
				/******/
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
				/******/
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
				/******/
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";
				/******/
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			})([
			/* 0 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};

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
						minLength: RP.number
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
							unMaskTime: config.unMaskTime
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
						overflow: "hidden"
					},

					iconStyle: {
						display: "inline-block",
						opacity: 0.25,
						position: "relative",
						top: 2,
						width: "4%"
					},

					entropyStyle: {
						fontSize: 12,
						position: "relative",
						top: 2,
						width: "2%"
					},

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
							infoBar = React.createElement("div", { className: "passwordField__info", style: this.infoStyle }, React.createElement("span", { style: this.iconStyle, className: "passwordField__icon" }, React.createElement("img", { src: __webpack_require__(4), height: "10", width: "10" })), React.createElement("span", { style: this.getMeterStyle(this.state.score), className: "passwordField__meter" }), React.createElement("span", { style: this.entropyStyle, className: "passwordField__score" }, Math.floor(this.state.entropy) * 2));
						}

						return React.createElement("div", {
							style: { position: "relative", display: "inline-block" },
							className: "passwordField",
							"data-valid": this.state.isValid,
							"data-score": this.state.score,
							"data-entropy": this.state.entropy
						}, React.createElement("input", _extends({
							ref: this.props.id,
							className: "passwordField__input",
							type: this.state.isPassword ? "password" : "text",
							value: this.state.value,
							style: this.state.isPassword ? null : this.unMaskStyle,
							onChange: this.handleChange
						}, this.props)), infoBar);
					}
				});

				module.exports = InputPassword;

				/***/
			},
			/* 1 */
			/***/function (module, exports, __webpack_require__) {

				module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

				/***/
			},
			/* 2 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				module.exports = {
					statusColor: "#5CE592",
					statusInactiveColor: "#FC6F6F",
					unMaskColor: "#c7c7c7",
					unMaskTime: 1400,
					zxcvbnSrc: "https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/1.0/zxcvbn.min.js"
				};

				/***/
			},
			/* 3 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				/**
	    * lodash 3.0.2 (Custom Build) <https://lodash.com/>
	    * Build: `lodash modern modularize exports="npm" -o ./`
	    * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	    * Based on Underscore.js 1.8.2 <http://underscorejs.org/LICENSE>
	    * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	    * Available under MIT license <https://lodash.com/license>
	    */
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

				/***/
			},
			/* 4 */
			/***/function (module, exports, __webpack_require__) {

				module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRkNDMzg4M0FFN0IxMUU0OTE2RkY5MzYyMkI3QTVDMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRkNDMzg4NEFFN0IxMUU0OTE2RkY5MzYyMkI3QTVDMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJGQ0MzODgxQUU3QjExRTQ5MTZGRjkzNjIyQjdBNUMyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJGQ0MzODgyQUU3QjExRTQ5MTZGRjkzNjIyQjdBNUMyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+NkztvAAAAc9JREFUeNq8lk8oBFEcx2fG5k+0HJRQ/iVy2U1tUsjBzYnI2cUWJyl3XJRSkgOtxEU4keLgQP6kuColoeQgEkXWand8X/3UNM28Z56Z961PO2/fb9535r3f/N7TTdPUnBSLxTSBcsEA6AW1IAw+wD3YAtPg0+1mXdK4DJyAKk7MM+gE506dhuZdleBSYMpUDM5Ah1NnyKOpDnZpWn91C/ZBksZrBhFL/zaopyWQNh4HDZZ2AsQd4kbBFF3ngRnQ8581vgHVdH0M2jgPeWjpz1BePMqscdRiyrQhiF+25VK7bHI12toXgvg9+yTKGpc6TDtPD+DJ0i6RNS6ytZOC+IwtpkA2q1epKLyDb/D2h3uGQQXIBqcyWd1FBeEOZNFM1YEckHYpTGzgKyqbpmWp1kEq9IeCcQRaNP80CZoMQclb8NmUqRys8IxZpenTglHUEOxAhQEZ5/OM01qAMnwah+3Ng2BTpTGr2a1gHnSDCVXGs7Z2QpVxjUNSKjGeo29T+RuHqaRqtOdGVGZ1in6/VH9OYZet01Uhnx5qBLyAIT+MvVQulslLflWuazq+BKFXnvEaWAzI+IA31ezUMEaJE6dDQYb+9yrdMrs7oP9HgAEAXmVa5ulD/g0AAAAASUVORK5CYII="

				/***/;
			},
			/* 5 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				/**
	    * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	    * Build: `lodash modern modularize exports="npm" -o ./`
	    * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	    * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	    * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	    * Available under MIT license <https://lodash.com/license>
	    */

				/** `Object#toString` result references. */
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

				/***/
			}
			/******/])
		);
	});

	/************************************************************************/
	/******/

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])