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

/***/ "./src/components/navbar/NavBar.jsx":
/*!******************************************!*\
  !*** ./src/components/navbar/NavBar.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var _images_ogi_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/ogi.png */ \"./src/images/ogi.png\");\n/* eslint-disable jsx-a11y/alt-text */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction NavBar() {\n    _s();\n    const [showNav, setShowNav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [iconSize, setIconSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(24);\n    const handleScroll = ()=>{\n        if (window.scrollY > 0) {\n            setIsScrolled(true);\n        } else {\n            setIsScrolled(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            if (window.innerWidth < 640) {\n                setIconSize(20);\n            } else {\n                setIconSize(24);\n            }\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []);\n    function toggleNav() {\n        setShowNav(!showNav);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"fixed top-0 w-full z-50 p-3 flex items-center justify-between \".concat(isScrolled ? \"bg-white shadow-lg transition duration-300\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-4 pl-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _images_ogi_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        width: iconSize * 3 / 2,\n                        height: iconSize * 3 / 2,\n                        className: \"rounded-full\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/navbar/NavBar.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                        to: \"me\",\n                        spy: true,\n                        smooth: true,\n                        duration: 500,\n                        className: \"text-sm sm:text-xl md:text-xl font-extrabold dark:text-slate-300 hover:text-teal-500 transition-colors duration-300 \".concat(isScrolled ? \"truncate\" : \"\", \" whitespace-normal\"),\n                        children: [\n                            \"Oğuzhan \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/navbar/NavBar.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 19\n                            }, this),\n                            \" G\\xf6kcekoca\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/navbar/NavBar.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/navbar/NavBar.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap md:flex-nowrap items-center gap-8 font-extrabold dark:text-slate-300 text-sm md:text-xl list-none\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                            to: \"about\",\n                            spy: true,\n                            smooth: true,\n                            duration: 500,\n                            className: \"hover:text-teal-500 transition-colors duration-300\",\n                            children: \"About\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/navbar/NavBar.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/navbar/NavBar.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                            to: \"more\",\n                            spy: true,\n                            smooth: true,\n                            duration: 500,\n                            className: \"hover:text-teal-500 transition-colors duration-300\",\n                            children: \"More\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/navbar/NavBar.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/navbar/NavBar.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                            to: \"contact\",\n                            spy: true,\n                            smooth: true,\n                            duration: 500,\n                            className: \"hover:text-teal-500 transition-colors duration-300\",\n                            children: \"Contact\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/navbar/NavBar.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/navbar/NavBar.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/navbar/NavBar.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:flex items-center gap-2 md:gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://www.linkedin.com/in/oğuzhan-g\\xf6kcekoca-442802250/\",\n                        className: \"dark:text-slate-300 hover:text-teal-500 transition-colors duration-300 block md:inline\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillLinkedin, {\n                            size: iconSize\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/navbar/NavBar.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 5\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/navbar/NavBar.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/oguzhangkckc\",\n                        className: \"dark:text-slate-300 hover:text-teal-500 transition-colors duration-300 block md:inline\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillGithub, {\n                            size: iconSize\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/navbar/NavBar.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 5\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/navbar/NavBar.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"mailto:ogokcekoca@gmail.com\",\n                        className: \"dark:text-slate-300 hover:text-teal-500 transition-colors duration-300 block md:inline\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillMail, {\n                            size: iconSize\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/navbar/NavBar.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 5\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/navbar/NavBar.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://www.instagram.com/oguzhangokcekoca/\",\n                        className: \"dark:text-slate-300 hover:text-teal-500 transition-colors duration-300 block md:inline\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillInstagram, {\n                            size: iconSize\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/navbar/NavBar.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 5\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/navbar/NavBar.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 3\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/navbar/NavBar.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oguzhangokcekoca/react-portfolio/src/components/navbar/NavBar.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(NavBar, \"pR2qsj8eWhYmtye7SNA9+oug8OY=\");\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs0QkFBQ2lDLE1BQU14Qjs7Ozs7Ozs7Ozs7a0NBRXBCLDhEQUFDc0I7d0JBQUVDLE1BQUs7d0JBQThDWixXQUFVO2tDQUM5RCw0RUFBQ3JCLDJEQUFlQTs0QkFBQ2tDLE1BQU14Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0IsQ0FBQztHQWhGdUJMO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL25hdmJhci9OYXZCYXIuanN4PzQwNzIiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYWx0LXRleHQgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWlGaWxsTGlua2VkaW4sIEFpRmlsbEdpdGh1YiwgQWlGaWxsSW5zdGFncmFtLCBBaUZpbGxNYWlsIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgb2dpIGZyb20gJy4uLy4uL2ltYWdlcy9vZ2kucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKCkge1xuICBjb25zdCBbc2hvd05hdiwgc2V0U2hvd05hdl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1Njcm9sbGVkLCBzZXRJc1Njcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ljb25TaXplLCBzZXRJY29uU2l6ZV0gPSB1c2VTdGF0ZSgyNCk7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDApIHtcbiAgICAgIHNldElzU2Nyb2xsZWQodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzU2Nyb2xsZWQoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA2NDApIHtcbiAgICAgICAgc2V0SWNvblNpemUoMjApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SWNvblNpemUoMjQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcblxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZU5hdigpIHtcbiAgICBzZXRTaG93TmF2KCFzaG93TmF2KTtcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT17YGZpeGVkIHRvcC0wIHctZnVsbCB6LTUwIHAtMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gJHtpc1Njcm9sbGVkID8gJ2JnLXdoaXRlIHNoYWRvdy1sZyB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCcgOiAnJ31gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgcGwtNFwiPlxuICAgICAgICA8SW1hZ2Ugc3JjPXtvZ2l9IHdpZHRoPXtpY29uU2l6ZSAqIDMgLyAyfSBoZWlnaHQ9e2ljb25TaXplICogMyAvIDJ9IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIC8+XG4gICAgICAgIDxMaW5rIHRvPVwibWVcIiBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezUwMH0gY2xhc3NOYW1lPXtgdGV4dC1zbSBzbTp0ZXh0LXhsIG1kOnRleHQteGwgZm9udC1leHRyYWJvbGQgZGFyazp0ZXh0LXNsYXRlLTMwMCBob3Zlcjp0ZXh0LXRlYWwtNTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCAke2lzU2Nyb2xsZWQgPyAndHJ1bmNhdGUnIDogJyd9IHdoaXRlc3BhY2Utbm9ybWFsYH0+XG4gICAgICAgICAgT8SfdXpoYW4gPGJyIC8+IEfDtmtjZWtvY2FcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIG1kOmZsZXgtbm93cmFwIGl0ZW1zLWNlbnRlciBnYXAtOCBmb250LWV4dHJhYm9sZCBkYXJrOnRleHQtc2xhdGUtMzAwIHRleHQtc20gbWQ6dGV4dC14bCBsaXN0LW5vbmVcIj5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIHRvPVwiYWJvdXRcIiBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezUwMH0gY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC10ZWFsLTUwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgdG89XCJtb3JlXCIgc3B5PXt0cnVlfSBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXs1MDB9IGNsYXNzTmFtZT1cImhvdmVyOnRleHQtdGVhbC01MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICBNb3JlXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgdG89XCJjb250YWN0XCIgc3B5PXt0cnVlfSBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXs1MDB9IGNsYXNzTmFtZT1cImhvdmVyOnRleHQtdGVhbC01MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtZDpnYXAtOFwiPlxuICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2/En3V6aGFuLWfDtmtjZWtvY2EtNDQyODAyMjUwL1wiIGNsYXNzTmFtZT1cImRhcms6dGV4dC1zbGF0ZS0zMDAgaG92ZXI6dGV4dC10ZWFsLTUwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgYmxvY2sgbWQ6aW5saW5lXCI+XG4gICAgPEFpRmlsbExpbmtlZGluIHNpemU9e2ljb25TaXplfSAvPlxuICA8L2E+XG4gIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vb2d1emhhbmdrY2tjXCIgY2xhc3NOYW1lPVwiZGFyazp0ZXh0LXNsYXRlLTMwMCBob3Zlcjp0ZXh0LXRlYWwtNTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBibG9jayBtZDppbmxpbmVcIj5cbiAgICA8QWlGaWxsR2l0aHViIHNpemU9e2ljb25TaXplfSAvPlxuICA8L2E+XG4gIDxhIGhyZWY9XCJtYWlsdG86b2dva2Nla29jYUBnbWFpbC5jb21cIiBjbGFzc05hbWU9XCJkYXJrOnRleHQtc2xhdGUtMzAwIGhvdmVyOnRleHQtdGVhbC01MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGJsb2NrIG1kOmlubGluZVwiPlxuICAgIDxBaUZpbGxNYWlsIHNpemU9e2ljb25TaXplfSAvPlxuICA8L2E+XG4gIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL29ndXpoYW5nb2tjZWtvY2EvXCIgY2xhc3NOYW1lPVwiZGFyazp0ZXh0LXNsYXRlLTMwMCBob3Zlcjp0ZXh0LXRlYWwtNTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBibG9jayBtZDppbmxpbmVcIj5cbiAgICA8QWlGaWxsSW5zdGFncmFtIHNpemU9e2ljb25TaXplfSAvPlxuICA8L2E+XG48L2Rpdj5cblxuICAgIDwvbmF2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBaUZpbGxMaW5rZWRpbiIsIkFpRmlsbEdpdGh1YiIsIkFpRmlsbEluc3RhZ3JhbSIsIkFpRmlsbE1haWwiLCJJbWFnZSIsIkxpbmsiLCJvZ2kiLCJOYXZCYXIiLCJzaG93TmF2Iiwic2V0U2hvd05hdiIsImlzU2Nyb2xsZWQiLCJzZXRJc1Njcm9sbGVkIiwiaWNvblNpemUiLCJzZXRJY29uU2l6ZSIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVJlc2l6ZSIsImlubmVyV2lkdGgiLCJ0b2dnbGVOYXYiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInRvIiwic3B5Iiwic21vb3RoIiwiZHVyYXRpb24iLCJiciIsImxpIiwiYSIsImhyZWYiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/navbar/NavBar.jsx\n"));

/***/ })

});