/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/skin/skin-1.css */ \"./css/skin/skin-1.css\");\n/* harmony import */ var _css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/switcher.css */ \"./styles/switcher.css\");\n/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_switcher_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"C:\\\\Users\\\\Lenovo\\\\Downloads\\\\teme1latest\\\\frontend\\\\pages\\\\_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n //import Slider from \"react-rangeslider\";\n//import \"react-rangeslider/lib/index.css\";\n\n\n //import useScrollPosition from \"use-scroll-position\";\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: toggle1,\n    1: setToggle1\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: body_,\n    1: setbody_\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  const {\n    0: header,\n    1: setHeader\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"fixed\");\n  const {\n    0: header_,\n    1: setHeader_\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    setbody_(document.querySelector(\"body\"));\n    setHeader_(document.getElementsByClassName(\"main-bar-wraper\"));\n  }, []); //let scrollPosition = useScrollPosition();\n\n  function toggle() {\n    setToggle1(!toggle1);\n  }\n\n  const chageHeader = value => {\n    setHeader(value);\n\n    if (value === \"fixed\") {\n      header_[0].classList.add(\"sticky-header\");\n      header_[0].classList.remove(\"sticky-no\");\n    } else {\n      header_[0].classList.add(\"sticky-no\");\n      header_[0].classList.remove(\"sticky-header\");\n      header_[0].classList.remove(\"is-fixed\");\n    }\n  };\n\n  const onChange = value => {\n    setSliderValu(value);\n    body_.style.padding = value + \"px\";\n  };\n  /*  header === \"fixed\" && scrollPosition > 10\r\n     ? header_ && header_[0].classList.add(\"is-fixed\")\r\n     : header_ && header_[0].classList.remove(\"is-fixed\"); */\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"title\", {\n        children: \"Samar - React Template\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 4\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        type: \"image/png\",\n        sizes: \"16x16\",\n        href: \"/images/favicon.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 4\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 3\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"page-wraper\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 4\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 3\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"a\", {\n      href: \"https://themeforest.net/cart/configure_before_adding/32950742/?license=regular;\",\n      target: \"_blank\",\n      className: \"bt-buy-now theme-btn\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"i\", {\n        className: \"ti-shopping-cart\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 4\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"span\", {\n        children: \"Buy Now\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 4\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 3\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"a\", {\n      href: \"https://support.w3itexperts.com\",\n      target: \"_blank\",\n      className: \"bt-support-now theme-btn\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"i\", {\n        className: \"ti-headphone-alt\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 4\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"span\", {\n        children: \"Support\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 4\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 3\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"a\", {\n      href: \"#top\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"button\", {\n        className: \"scroltop icon-up\",\n        type: \"button\",\n        style: {\n          display: \"inline-block\"\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"i\", {\n          className: \"fa fa-arrow-up\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 4\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 3\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxjQUxELGVBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURSxlQWlCRjtBQUNDLFVBQUksRUFBQyxpQ0FETjtBQUVDLFlBQU0sRUFBQyxRQUZSO0FBR0MsZUFBUyxFQUFDLDBCQUhYO0FBQUEsOEJBS0M7QUFBRyxpQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxELGVBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkUsZUF5QkY7QUFBRyxVQUFJLEVBQUMsTUFBUjtBQUFBLDZCQUNDO0FBQ0UsaUJBQVMsRUFBQyxrQkFEWjtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsYUFBSyxFQUFFO0FBQUVzQixVQUFBQSxPQUFPLEVBQUU7QUFBWCxTQUhUO0FBQUEsK0JBS0U7QUFBRyxtQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJFO0FBQUEsa0JBREY7QUFxQ0Q7O0FBRUQsaUVBQWV4QixLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FtYXIvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3QtcmFuZ2VzbGlkZXJcIjtcclxuLy9pbXBvcnQgXCJyZWFjdC1yYW5nZXNsaWRlci9saWIvaW5kZXguY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcclxuLy9pbXBvcnQgdXNlU2Nyb2xsUG9zaXRpb24gZnJvbSBcInVzZS1zY3JvbGwtcG9zaXRpb25cIjtcclxuaW1wb3J0IFwiLi4vY3NzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9jc3Mvc2tpbi9za2luLTEuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvc3dpdGNoZXIuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuXHRjb25zdCBbdG9nZ2xlMSwgc2V0VG9nZ2xlMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2JvZHlfLCBzZXRib2R5X10gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtoZWFkZXIsIHNldEhlYWRlcl0gPSB1c2VTdGF0ZShcImZpeGVkXCIpO1xyXG5cdGNvbnN0IFtoZWFkZXJfLCBzZXRIZWFkZXJfXSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRib2R5Xyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSk7XHJcblx0XHRzZXRIZWFkZXJfKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWJhci13cmFwZXJcIikpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Ly9sZXQgc2Nyb2xsUG9zaXRpb24gPSB1c2VTY3JvbGxQb3NpdGlvbigpO1xyXG5cdGZ1bmN0aW9uIHRvZ2dsZSgpIHtcclxuXHRcdHNldFRvZ2dsZTEoIXRvZ2dsZTEpO1xyXG5cdH1cclxuIFxyXG4gIGNvbnN0IGNoYWdlSGVhZGVyID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRIZWFkZXIodmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlID09PSBcImZpeGVkXCIpIHtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QuYWRkKFwic3RpY2t5LWhlYWRlclwiKTtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LW5vXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QuYWRkKFwic3RpY2t5LW5vXCIpO1xyXG4gICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3ktaGVhZGVyXCIpO1xyXG4gICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1maXhlZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0U2xpZGVyVmFsdSh2YWx1ZSk7XHJcbiAgICBib2R5Xy5zdHlsZS5wYWRkaW5nID0gdmFsdWUgKyBcInB4XCI7XHJcbiAgfTtcclxuXHJcbiAvKiAgaGVhZGVyID09PSBcImZpeGVkXCIgJiYgc2Nyb2xsUG9zaXRpb24gPiAxMFxyXG4gICAgPyBoZWFkZXJfICYmIGhlYWRlcl9bMF0uY2xhc3NMaXN0LmFkZChcImlzLWZpeGVkXCIpXHJcbiAgICA6IGhlYWRlcl8gJiYgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtZml4ZWRcIik7ICovXHJcblx0XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPlNhbWFyIC0gUmVhY3QgVGVtcGxhdGU8L3RpdGxlPlxyXG5cdFx0XHQ8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTZ4MTZcIiBocmVmPVwiL2ltYWdlcy9mYXZpY29uLnBuZ1wiLz5cclxuICAgICAgICA8L0hlYWQ+XHRcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicGFnZS13cmFwZXJcIj5cclxuXHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG5cdFx0PC9kaXY+XHJcblx0XHRcclxuXHRcdDxhXHJcblx0XHRcdGhyZWY9XCJodHRwczovL3RoZW1lZm9yZXN0Lm5ldC9jYXJ0L2NvbmZpZ3VyZV9iZWZvcmVfYWRkaW5nLzMyOTUwNzQyLz9saWNlbnNlPXJlZ3VsYXI7XCJcclxuXHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcclxuXHRcdFx0Y2xhc3NOYW1lPVwiYnQtYnV5LW5vdyB0aGVtZS1idG5cIlxyXG5cdFx0PlxyXG5cdFx0XHQ8aSBjbGFzc05hbWU9XCJ0aS1zaG9wcGluZy1jYXJ0XCIgLz5cclxuXHRcdFx0PHNwYW4+QnV5IE5vdzwvc3Bhbj5cclxuXHRcdDwvYT5cclxuXHRcdDxhXHJcblx0XHRcdGhyZWY9XCJodHRwczovL3N1cHBvcnQudzNpdGV4cGVydHMuY29tXCJcclxuXHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcclxuXHRcdFx0Y2xhc3NOYW1lPVwiYnQtc3VwcG9ydC1ub3cgdGhlbWUtYnRuXCJcclxuXHRcdD5cclxuXHRcdFx0PGkgY2xhc3NOYW1lPVwidGktaGVhZHBob25lLWFsdFwiIC8+XHJcblx0XHRcdDxzcGFuPlN1cHBvcnQ8L3NwYW4+XHJcblx0XHQ8L2E+XHJcblx0XHQ8YSBocmVmPVwiI3RvcFwiPlxyXG5cdFx0XHQ8YnV0dG9uXHJcblx0XHRcdCAgY2xhc3NOYW1lPVwic2Nyb2x0b3AgaWNvbi11cFwiXHJcblx0XHRcdCAgdHlwZT1cImJ1dHRvblwiXHJcblx0XHRcdCAgc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdCAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctdXBcIiAvPlxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdDwvYT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0b2dnbGUxIiwic2V0VG9nZ2xlMSIsImJvZHlfIiwic2V0Ym9keV8iLCJoZWFkZXIiLCJzZXRIZWFkZXIiLCJoZWFkZXJfIiwic2V0SGVhZGVyXyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0b2dnbGUiLCJjaGFnZUhlYWRlciIsInZhbHVlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwib25DaGFuZ2UiLCJzZXRTbGlkZXJWYWx1Iiwic3R5bGUiLCJwYWRkaW5nIiwiZGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./css/skin/skin-1.css":
/*!*****************************!*\
  !*** ./css/skin/skin-1.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/switcher.css":
/*!*****************************!*\
  !*** ./styles/switcher.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();