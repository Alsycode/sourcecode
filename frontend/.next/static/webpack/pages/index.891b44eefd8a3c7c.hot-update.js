"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/productSlider.js":
/*!************************************!*\
  !*** ./component/productSlider.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\Lenovo\\\\Downloads\\\\teme1latest\\\\frontend\\\\component\\\\productSlider.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nfunction BlogSlider() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      newsData = _useState[0],\n      setNewsData = _useState[1];\n\n  var settings = {\n    dots: false,\n    arrows: false,\n    centerMode: false,\n    slidesToShow: 3,\n    draggable: true,\n    infinite: true,\n    slidesToScroll: 1,\n    autoplay: true,\n    speed: 5000,\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        slidesToShow: 2,\n        slidesToScroll: 1,\n        infinite: true,\n        dots: false,\n        centerMode: false\n      }\n    }, {\n      breakpoint: 767,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        infinite: true\n      }\n    }]\n  };\n\n  var fetchNewsData = /*#__PURE__*/function () {\n    var _ref = (0,C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var apiUrl, bearerToken, response, data;\n      return C_Users_Lenovo_Downloads_teme1latest_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              apiUrl = \"http://localhost:1337/api/latestnewsblogs?populate=*\";\n              bearerToken = \"Bearer 92626c31f4d061643edfefba3644eb53d25efb908d6bee8a7b550c02000927ae12ab289469ca3bfbeb799606115ebc3556e202071767cde15c03b14a835f7ff729f2ddc897bba3bf4cc8825079144e1f5e8980fc0f3a20e8f481508e832353cd8ecf87a111fdb19b94767074bc111ca44e794492dc72af30525c39aa3614497b\"; // Replace with your actual access token\n\n              _context.prev = 2;\n              _context.next = 5;\n              return fetch(apiUrl, {\n                headers: {\n                  Authorization: bearerToken\n                }\n              });\n\n            case 5:\n              response = _context.sent;\n\n              if (response.ok) {\n                _context.next = 8;\n                break;\n              }\n\n              throw new Error(\"Failed to fetch data.\");\n\n            case 8:\n              _context.next = 10;\n              return response.json();\n\n            case 10:\n              data = _context.sent;\n              setNewsData(data.data); // Update state with fetched data\n\n              _context.next = 17;\n              break;\n\n            case 14:\n              _context.prev = 14;\n              _context.t0 = _context[\"catch\"](2);\n              console.error(\"Error fetching data:\", _context.t0);\n\n            case 17:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[2, 14]]);\n    }));\n\n    return function fetchNewsData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    fetchNewsData();\n  }, []); // Fetch data on component mount\n\n  var renderArrows = function renderArrows() {// Your arrow rendering logic...\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"blog-carousel1 owl-btn-1 owl-btn-center-lr  owl-btn-primary\",\n      style: {\n        \"position\": \"relative\"\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _objectSpread(_objectSpread({}, settings), {}, {\n        children: newsData.map(function (news) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"item wow fadeInUp\",\n            \"data-wow-duration\": \"2s\",\n            \"data-wow-delay\": \"0.2s\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n              className: \"dlab-blog style-1 bg-white text-center\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n                className: \"dlab-media\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                  src: news.attributes.newsimage.data.attributes.formats.medium.url,\n                  alt: \"\",\n                  width: 300,\n                  height: 300\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 80,\n                  columnNumber: 38\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n                className: \"dlab-info\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h5\", {\n                  className: \"dlab-title\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/blog-details/\".concat(news.id),\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"a\", {\n                      children: news.attributes.heading\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 90,\n                      columnNumber: 45\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 89,\n                    columnNumber: 41\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 88,\n                  columnNumber: 37\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n                  className: \"m-b0\",\n                  children: news.attributes.explaination\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 93,\n                  columnNumber: 37\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n                  className: \"dlab-meta meta-bottom\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"ul\", {\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"li\", {\n                      className: \"post-date\",\n                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"i\", {\n                        className: \"flaticon-clock m-r10\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 100,\n                        columnNumber: 49\n                      }, _this), news.attributes.publishedAt]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 99,\n                      columnNumber: 45\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"li\", {\n                      className: \"post-comment\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"i\", {\n                          className: \"flaticon-speech-bubble\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 105,\n                          columnNumber: 53\n                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"span\", {\n                          children: news.attributes.comments\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 106,\n                          columnNumber: 53\n                        }, _this)]\n                      }, void 0, true, {\n                        fileName: _jsxFileName,\n                        lineNumber: 104,\n                        columnNumber: 49\n                      }, _this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 103,\n                      columnNumber: 45\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"li\", {\n                      className: \"post-share\",\n                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"i\", {\n                        className: \"flaticon-share\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 110,\n                        columnNumber: 49\n                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"ul\", {}, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 111,\n                        columnNumber: 49\n                      }, _this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 109,\n                      columnNumber: 45\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 98,\n                    columnNumber: 41\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 97,\n                  columnNumber: 37\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 87,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 29\n            }, _this)\n          }, news.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 25\n          }, _this);\n        })\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 17\n      }, this), renderArrows()]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }, this)\n  }, void 0, false);\n}\n\n_s(BlogSlider, \"6YrLogOIIv2MkCPvnuOWZYhRk1I=\");\n\n_c = BlogSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogSlider);\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogSlider\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REosZUFLSTtBQUFJLCtCQUFTLEVBQUMsY0FBZDtBQUFBLDZDQUNJO0FBQUcsNEJBQUksRUFBQyxHQUFSO0FBQUEsZ0RBQ0k7QUFBRyxtQ0FBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FESixlQUVJO0FBQUEsb0NBQU9ULElBQUksQ0FBQ0MsVUFBTCxDQUFnQlM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUxKLGVBV0k7QUFBSSwrQkFBUyxFQUFDLFlBQWQ7QUFBQSw4Q0FDSTtBQUFHLGlDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosYUFBVVYsSUFBSSxDQUFDTSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFU7QUFBQSxTQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBaURLUixZQUFZLEVBakRqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQXVESDs7R0F6SFE1Qjs7S0FBQUE7QUEySFQsK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3Byb2R1Y3RTbGlkZXIuanM/NDk1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmZ1bmN0aW9uIEJsb2dTbGlkZXIoKSB7XHJcbiAgICBjb25zdCBbbmV3c0RhdGEsIHNldE5ld3NEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOjUwMDAsXHJcblx0XHRyZXNwb25zaXZlOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0ICBicmVha3BvaW50OiAxMDI0LFxyXG5cdFx0XHQgIHNldHRpbmdzOiB7XHJcblx0XHRcdFx0c2xpZGVzVG9TaG93OiAyLFxyXG5cdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHRcdGluZmluaXRlOiB0cnVlLFxyXG5cdFx0XHRcdGRvdHM6IGZhbHNlLFxyXG5cdFx0XHRcdGNlbnRlck1vZGU6ZmFsc2UsXHJcblx0XHRcdCAgfVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdCAgYnJlYWtwb2ludDogNzY3LFxyXG5cdFx0XHQgIHNldHRpbmdzOiB7XHJcblx0XHRcdFx0c2xpZGVzVG9TaG93OiAxLFxyXG5cdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHRcdGluZmluaXRlOiB0cnVlLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHQgIH1cclxuXHRcdFx0fSxcclxuXHRcdF1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZmV0Y2hOZXdzRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBhcGlVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvbGF0ZXN0bmV3c2Jsb2dzP3BvcHVsYXRlPSpcIjtcclxuICAgICAgICBjb25zdCBiZWFyZXJUb2tlbiA9IFwiQmVhcmVyIDkyNjI2YzMxZjRkMDYxNjQzZWRmZWZiYTM2NDRlYjUzZDI1ZWZiOTA4ZDZiZWU4YTdiNTUwYzAyMDAwOTI3YWUxMmFiMjg5NDY5Y2EzYmZiZWI3OTk2MDYxMTVlYmMzNTU2ZTIwMjA3MTc2N2NkZTE1YzAzYjE0YTgzNWY3ZmY3MjlmMmRkYzg5N2JiYTNiZjRjYzg4MjUwNzkxNDRlMWY1ZTg5ODBmYzBmM2EyMGU4ZjQ4MTUwOGU4MzIzNTNjZDhlY2Y4N2ExMTFmZGIxOWI5NDc2NzA3NGJjMTExY2E0NGU3OTQ0OTJkYzcyYWYzMDUyNWMzOWFhMzYxNDQ5N2JcIjsgLy8gUmVwbGFjZSB3aXRoIHlvdXIgYWN0dWFsIGFjY2VzcyB0b2tlblxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGJlYXJlclRva2VuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGRhdGEuXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0TmV3c0RhdGEoZGF0YS5kYXRhKTsgLy8gVXBkYXRlIHN0YXRlIHdpdGggZmV0Y2hlZCBkYXRhXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hOZXdzRGF0YSgpO1xyXG4gICAgfSwgW10pOyAvLyBGZXRjaCBkYXRhIG9uIGNvbXBvbmVudCBtb3VudFxyXG5cclxuICAgIGNvbnN0IHJlbmRlckFycm93cyA9ICgpID0+IHtcclxuICAgICAgICAvLyBZb3VyIGFycm93IHJlbmRlcmluZyBsb2dpYy4uLlxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1jYXJvdXNlbDEgb3dsLWJ0bi0xIG93bC1idG4tY2VudGVyLWxyICBvd2wtYnRuLXByaW1hcnlcIiBzdHlsZT17eyBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICB7bmV3c0RhdGEubWFwKChuZXdzKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtuZXdzLmlkfSBjbGFzc05hbWU9XCJpdGVtIHdvdyBmYWRlSW5VcFwiIGRhdGEtd293LWR1cmF0aW9uPVwiMnNcIiBkYXRhLXdvdy1kZWxheT1cIjAuMnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGxhYi1ibG9nIHN0eWxlLTEgYmctd2hpdGUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRsYWItbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17bmV3cy5hdHRyaWJ1dGVzLm5ld3NpbWFnZS5kYXRhLmF0dHJpYnV0ZXMuZm9ybWF0cy5tZWRpdW0udXJsfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRsYWItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZGxhYi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nLWRldGFpbHMvJHtuZXdzLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntuZXdzLmF0dHJpYnV0ZXMuaGVhZGluZ308L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tYjBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3cy5hdHRyaWJ1dGVzLmV4cGxhaW5hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogQXNzdW1pbmcgeW91IGhhdmUgJ3B1Ymxpc2hlZEF0JywgJ2NvbW1lbnRzJywgYW5kIHNvY2lhbCBtZWRpYSBzaGFyZSBsaW5rcyBpbiAnbmV3cy5hdHRyaWJ1dGVzJyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkbGFiLW1ldGEgbWV0YS1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9zdC1kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLWNsb2NrIG0tcjEwXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3cy5hdHRyaWJ1dGVzLnB1Ymxpc2hlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvc3QtY29tbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tc3BlZWNoLWJ1YmJsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntuZXdzLmF0dHJpYnV0ZXMuY29tbWVudHN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9zdC1zaGFyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1zaGFyZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFlvdXIgc29jaWFsIG1lZGlhIHNoYXJlIGxpbmtzLi4uICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICAge3JlbmRlckFycm93cygpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dTbGlkZXI7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTbGlkZXIiLCJJbWFnZSIsIkJsb2dTbGlkZXIiLCJuZXdzRGF0YSIsInNldE5ld3NEYXRhIiwic2V0dGluZ3MiLCJkb3RzIiwiYXJyb3dzIiwiY2VudGVyTW9kZSIsInNsaWRlc1RvU2hvdyIsImRyYWdnYWJsZSIsImluZmluaXRlIiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsInNwZWVkIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJmZXRjaE5ld3NEYXRhIiwiYXBpVXJsIiwiYmVhcmVyVG9rZW4iLCJmZXRjaCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwiZXJyb3IiLCJyZW5kZXJBcnJvd3MiLCJtYXAiLCJuZXdzIiwiYXR0cmlidXRlcyIsIm5ld3NpbWFnZSIsImZvcm1hdHMiLCJtZWRpdW0iLCJ1cmwiLCJpZCIsImhlYWRpbmciLCJleHBsYWluYXRpb24iLCJwdWJsaXNoZWRBdCIsImNvbW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/productSlider.js\n");

/***/ })

});