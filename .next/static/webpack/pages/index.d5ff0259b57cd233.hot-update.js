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

/***/ "./src/components/sections/header/header.jsx":
/*!***************************************************!*\
  !*** ./src/components/sections/header/header.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* eslint-disable react/no-unescaped-entities */ \nvar _s = $RefreshSig$();\n\n\nfunction Header() {\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleScroll = ()=>{\n        if (window.scrollY > 0) {\n            setIsScrolled(true);\n        } else {\n            setIsScrolled(false);\n        }\n    };\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    //text-sm sm:text-xl md:text-xl\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"me\",\n        className: \"\".concat(isScrolled ? \"text-teal-500 shadow-lg transition duration-300\" : \"\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-56 rounded-full text-center flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl lg:text-5xl md:text-3xl py-2 text-white \".concat(isScrolled ? \"text-teal-500\" : \"\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-teal-500\",\n                                children: \"Hello\"\n                            }, void 0, false, {\n                                fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/sections/header/header.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, this),\n                            \", I'm\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/sections/header/header.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-5xl lg:text-7xl md:text-6xl sm:text-4xl py-2 font-medium text-white \".concat(isScrolled ? \"text-teal-500\" : \"\"),\n                        children: \"Oğuzhan G\\xf6kcekoca\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/sections/header/header.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-md lg:text:2xl md:text-2xl sm:text-lg py-2 text-white \".concat(isScrolled ? \"text-teal-500\" : \"\"),\n                        children: [\n                            \"I am a\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-teal-500\",\n                                children: \"Software Engineering\"\n                            }, void 0, false, {\n                                fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/sections/header/header.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this),\n                            \" student\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-teal-500 font-extrabold\",\n                                children: \".\"\n                            }, void 0, false, {\n                                fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/sections/header/header.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/sections/header/header.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        to: \"more\",\n                        spy: true,\n                        smooth: true,\n                        duration: 500,\n                        className: \"bg-teal-500 text-white text-lg font-medium rounded-full px-8 py-3 mt-10 hover:bg-white hover:text-teal-500 transition duration-300 \".concat(isScrolled ? \"border border-teal-500\" : \"\"),\n                        children: \"Learn More\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/sections/header/header.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/sections/header/header.jsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/sections/header/header.jsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/sections/header/header.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"UCaI8lpZVGvPrsRoIFYRt2wv0+o=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9oZWFkZXIvaGVhZGVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw4Q0FBOEM7O0FBQ047QUFDSjtBQUVyQixTQUFTRyxTQUFTOztJQUMvQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQUMsS0FBSztJQUVsRCxNQUFNSyxlQUFlLElBQU07UUFDekIsSUFBSUMsT0FBT0MsT0FBTyxHQUFHLEdBQUc7WUFDdEJILGNBQWMsSUFBSTtRQUNwQixPQUFPO1lBQ0xBLGNBQWMsS0FBSztRQUNyQixDQUFDO0lBQ0g7SUFFQUwsc0RBQWUsQ0FBQyxJQUFNO1FBQ3BCTyxPQUFPRyxnQkFBZ0IsQ0FBQyxVQUFVSjtRQUVsQyxPQUFPLElBQU1DLE9BQU9JLG1CQUFtQixDQUFDLFVBQVVMO0lBQ3BELEdBQUcsRUFBRTtJQUNQLCtCQUErQjtJQUM3QixxQkFDRSw4REFBQ007UUFBUUMsSUFBRztRQUFLQyxXQUFXLEdBQXVFLE9BQXBFVixhQUFhLG9EQUFvRCxFQUFFO2tCQUNoRyw0RUFBQ1c7WUFBSUQsV0FBVTtzQkFDYiw0RUFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBR0YsV0FBVyxtREFBcUYsT0FBbENWLGFBQWEsa0JBQWtCLEVBQUU7OzBDQUNqRyw4REFBQ2E7Z0NBQUtILFdBQVU7MENBQWdCOzs7Ozs7NEJBQVk7Ozs7Ozs7a0NBRTlDLDhEQUFDSTt3QkFBR0osV0FBVyw0RUFBOEcsT0FBbENWLGFBQWEsa0JBQWtCLEVBQUU7a0NBQUk7Ozs7OztrQ0FHaEksOERBQUNlO3dCQUFHTCxXQUFXLDhEQUFnRyxPQUFsQ1YsYUFBYSxrQkFBa0IsRUFBRTs7NEJBQUk7NEJBQ3pHOzBDQUNQLDhEQUFDYTtnQ0FBS0gsV0FBVTswQ0FBZ0I7Ozs7Ozs0QkFBMkI7MENBQzNELDhEQUFDRztnQ0FBS0gsV0FBVTswQ0FBK0I7Ozs7Ozs7Ozs7OztrQ0FFakQsOERBQUNaLDhDQUFJQTt3QkFDSGtCLElBQUc7d0JBQ0hDLEtBQUssSUFBSTt3QkFDVEMsUUFBUSxJQUFJO3dCQUNaQyxVQUFVO3dCQUNWVCxXQUFXLHNJQUFpTCxPQUEzQ1YsYUFBYSwyQkFBMkIsRUFBRTtrQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8zTSxDQUFDO0dBNUN1QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvaGVhZGVyL2hlYWRlci5qc3g/Yzg1NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bmVzY2FwZWQtZW50aXRpZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFtpc1Njcm9sbGVkLCBzZXRJc1Njcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMCkge1xuICAgICAgc2V0SXNTY3JvbGxlZCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SXNTY3JvbGxlZChmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gIH0sIFtdKTtcbi8vdGV4dC1zbSBzbTp0ZXh0LXhsIG1kOnRleHQteGxcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD0nbWUnIGNsYXNzTmFtZT17YCR7aXNTY3JvbGxlZCA/ICd0ZXh0LXRlYWwtNTAwIHNoYWRvdy1sZyB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCcgOiAnJ31gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLXNjcmVlbic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdC01NiByb3VuZGVkLWZ1bGwgdGV4dC1jZW50ZXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2B0ZXh0LXhsIGxnOnRleHQtNXhsIG1kOnRleHQtM3hsIHB5LTIgdGV4dC13aGl0ZSAke2lzU2Nyb2xsZWQgPyAndGV4dC10ZWFsLTUwMCcgOiAnJ31gfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC10ZWFsLTUwMCc+SGVsbG88L3NwYW4+LCBJJ21cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2B0ZXh0LTV4bCBsZzp0ZXh0LTd4bCBtZDp0ZXh0LTZ4bCBzbTp0ZXh0LTR4bCBweS0yIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgJHtpc1Njcm9sbGVkID8gJ3RleHQtdGVhbC01MDAnIDogJyd9YH0+XG4gICAgICAgICAgICBPxJ91emhhbiBHw7ZrY2Vrb2NhXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtgdGV4dC1tZCBsZzp0ZXh0OjJ4bCBtZDp0ZXh0LTJ4bCBzbTp0ZXh0LWxnIHB5LTIgdGV4dC13aGl0ZSAke2lzU2Nyb2xsZWQgPyAndGV4dC10ZWFsLTUwMCcgOiAnJ31gfT5cbiAgICAgICAgICAgIEkgYW0gYXsnICd9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtdGVhbC01MDAnPlNvZnR3YXJlIEVuZ2luZWVyaW5nPC9zcGFuPiBzdHVkZW50XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtdGVhbC01MDAgZm9udC1leHRyYWJvbGQnPi48L3NwYW4+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgdG89J21vcmUnXG4gICAgICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmctdGVhbC01MDAgdGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtbWVkaXVtIHJvdW5kZWQtZnVsbCBweC04IHB5LTMgbXQtMTAgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC10ZWFsLTUwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCAke2lzU2Nyb2xsZWQgPyAnYm9yZGVyIGJvcmRlci10ZWFsLTUwMCcgOiAnJ31gfT5cbiAgICAgICAgICAgIExlYXJuIE1vcmUgXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsIkhlYWRlciIsImlzU2Nyb2xsZWQiLCJzZXRJc1Njcm9sbGVkIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJzcGFuIiwiaDEiLCJoMyIsInRvIiwic3B5Iiwic21vb3RoIiwiZHVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/sections/header/header.jsx\n"));

/***/ })

});