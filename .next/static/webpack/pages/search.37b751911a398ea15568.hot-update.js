self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_peru_konalap_changes_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_peru_konalap_changes_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_peru_konalap_changes_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_peru_konalap_changes_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_SearchResults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchResults */ "./components/SearchResults.js");
/* harmony import */ var react_adsense__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-adsense */ "./node_modules/react-adsense/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\peru\\konalap-changes\\pages\\search.js",
    _this = undefined,
    _s = $RefreshSig$();








var Search = function Search(_ref) {
  _s();

  var results = _ref.results,
      imageResults = _ref.imageResults;

  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'auto'
    }, 'google_translate_element');
  }

  function loadError(onError) {
    console.error("Failed ".concat(onError.target.src, " didn't load correctly"));
  }

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  react__WEBPACK_IMPORTED_MODULE_8__.useEffect( /*#__PURE__*/(0,E_peru_konalap_changes_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_peru_konalap_changes_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var LoadExternalScript;
    return E_peru_konalap_changes_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            LoadExternalScript = /*#__PURE__*/function () {
              var _ref3 = (0,E_peru_konalap_changes_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_peru_konalap_changes_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
                var externalScript;
                return E_peru_konalap_changes_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        externalScript = document.createElement("script");
                        externalScript.onerror = loadError;
                        externalScript.id = "external";
                        externalScript.async = true;
                        externalScript.type = "text/javascript"; //externalScript.setAttribute("crossorigin", "anonymous");

                        document.body.appendChild(externalScript);
                        externalScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function LoadExternalScript() {
                return _ref3.apply(this, arguments);
              };
            }();

            _context2.next = 3;
            return LoadExternalScript();

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: [router.query.term, " - Google Search"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchResults__WEBPACK_IMPORTED_MODULE_6__.default, {
      results: results,
      imageResults: imageResults
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, _this);
};

_s(Search, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = Search;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Search);

var _c;

$RefreshReg$(_c, "Search");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInJlc3VsdHMiLCJpbWFnZVJlc3VsdHMiLCJnb29nbGVUcmFuc2xhdGVFbGVtZW50SW5pdCIsImdvb2dsZSIsInRyYW5zbGF0ZSIsIlRyYW5zbGF0ZUVsZW1lbnQiLCJwYWdlTGFuZ3VhZ2UiLCJsb2FkRXJyb3IiLCJvbkVycm9yIiwiY29uc29sZSIsImVycm9yIiwidGFyZ2V0Iiwic3JjIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJMb2FkRXh0ZXJuYWxTY3JpcHQiLCJleHRlcm5hbFNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm9uZXJyb3IiLCJpZCIsImFzeW5jIiwidHlwZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInF1ZXJ5IiwidGVybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUlBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLE9BQTRCLFFBQTVCQSxPQUE0QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQzVDLFdBQVNDLDBCQUFULEdBQXNDO0FBQ3BDLFFBQUlDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsZ0JBQXJCLENBQXNDO0FBQUNDLGtCQUFZLEVBQUU7QUFBZixLQUF0QyxFQUE4RCwwQkFBOUQ7QUFDSDs7QUFHRCxXQUFTQyxTQUFULENBQW1CQyxPQUFuQixFQUE0QjtBQUM1QkMsV0FBTyxDQUFDQyxLQUFSLGtCQUF3QkYsT0FBTyxDQUFDRyxNQUFSLENBQWVDLEdBQXZDO0FBQ0M7O0FBQ0MsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBQyw4Q0FBQSxtU0FBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JDLDhCQURRO0FBQUEsOFNBQ2E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CQyxzQ0FEbUIsR0FDRkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBREU7QUFFekJGLHNDQUFjLENBQUNHLE9BQWYsR0FBeUJiLFNBQXpCO0FBQ0FVLHNDQUFjLENBQUNJLEVBQWYsR0FBb0IsVUFBcEI7QUFDQUosc0NBQWMsQ0FBQ0ssS0FBZixHQUF1QixJQUF2QjtBQUNBTCxzQ0FBYyxDQUFDTSxJQUFmLEdBQXNCLGlCQUF0QixDQUx5QixDQU16Qjs7QUFDQUwsZ0NBQVEsQ0FBQ00sSUFBVCxDQUFjQyxXQUFkLENBQTBCUixjQUExQjtBQUNBQSxzQ0FBYyxDQUFDTCxHQUFmOztBQVJ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURiOztBQUFBLDhCQUNSSSxrQkFEUTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQVlSQSxrQkFBa0IsRUFaVjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFoQixJQWVHLEVBZkg7QUFnQkEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUEsbUJBQVFILE1BQU0sQ0FBQ2EsS0FBUCxDQUFhQyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQVFFLDhEQUFDLDhEQUFEO0FBQWUsYUFBTyxFQUFFM0IsT0FBeEI7QUFBaUMsa0JBQVksRUFBRUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0JELENBN0NEOztHQUFNRixNO1VBU1dlLGtEOzs7S0FUWGYsTTs7QUErQ04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjM3Yjc1MTkxMWEzOThlYTE1NTY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgU2VhcmNoUmVzdWx0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzXCI7XHJcbmltcG9ydCBSZXNwb25zZSBmcm9tIFwiLi4vUmVzcG9uc2VcIjtcclxuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICd0cmFuc2xhdHRlJztcclxuaW1wb3J0IEFkU2Vuc2UgZnJvbSAncmVhY3QtYWRzZW5zZSc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBTZWFyY2ggPSAoeyByZXN1bHRzLCBpbWFnZVJlc3VsdHMgfSkgPT4ge1xyXG4gIGZ1bmN0aW9uIGdvb2dsZVRyYW5zbGF0ZUVsZW1lbnRJbml0KCkge1xyXG4gICAgbmV3IGdvb2dsZS50cmFuc2xhdGUuVHJhbnNsYXRlRWxlbWVudCh7cGFnZUxhbmd1YWdlOiAnYXV0byd9LCAnZ29vZ2xlX3RyYW5zbGF0ZV9lbGVtZW50Jyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsb2FkRXJyb3Iob25FcnJvcikge1xyXG5jb25zb2xlLmVycm9yKGBGYWlsZWQgJHtvbkVycm9yLnRhcmdldC5zcmN9IGRpZG4ndCBsb2FkIGNvcnJlY3RseWApO1xyXG59XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBcclxuICBSZWFjdC51c2VFZmZlY3QoYXN5bmMoKSA9PiB7XHJcbiAgICBjb25zdCBMb2FkRXh0ZXJuYWxTY3JpcHQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGV4dGVybmFsU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgICAgZXh0ZXJuYWxTY3JpcHQub25lcnJvciA9IGxvYWRFcnJvcjtcclxuICAgICAgZXh0ZXJuYWxTY3JpcHQuaWQgPSBcImV4dGVybmFsXCI7XHJcbiAgICAgIGV4dGVybmFsU2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgICAgZXh0ZXJuYWxTY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XHJcbiAgICAgIC8vZXh0ZXJuYWxTY3JpcHQuc2V0QXR0cmlidXRlKFwiY3Jvc3NvcmlnaW5cIiwgXCJhbm9ueW1vdXNcIik7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZXh0ZXJuYWxTY3JpcHQpO1xyXG4gICAgICBleHRlcm5hbFNjcmlwdC5zcmMgPSBgLy90cmFuc2xhdGUuZ29vZ2xlLmNvbS90cmFuc2xhdGVfYS9lbGVtZW50LmpzP2NiPWdvb2dsZVRyYW5zbGF0ZUVsZW1lbnRJbml0YDtcclxuICAgICAgXHJcbiAgICB9O1xyXG4gICAgYXdhaXQgTG9hZEV4dGVybmFsU2NyaXB0KCk7XHJcbiAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IGdvb2dsZVRyYW5zbGF0ZUVsZW1lbnRJbml0KCk7IH0sIDQwMCk7XHJcbiAgICBcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57cm91dGVyLnF1ZXJ5LnRlcm19IC0gR29vZ2xlIFNlYXJjaDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8SGVhZGVyIC8+XHJcblxyXG4gICAgICA8U2VhcmNoUmVzdWx0cyByZXN1bHRzPXtyZXN1bHRzfSBpbWFnZVJlc3VsdHM9e2ltYWdlUmVzdWx0c30vPlxyXG5cclxuICAgICB7LyogPEFkU2Vuc2UuR29vZ2xlXHJcbiAgY2xpZW50PSdjYS1wdWItNzI5MjgxMDQ4NjAwNDkyNidcclxuICBzbG90PSc3ODA2Mzk0NjczJ1xyXG4gIC8+Ki99XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIFxyXG4gIGNvbnNvbGUubG9nKGNvbnRleHQucXVlcnkpXHJcbiAgY29uc3QgdXNlRHVtbXlEYXRhID0gZmFsc2U7XHJcbiAgY29uc3Qgc3RhcnRJbmRleCA9IGNvbnRleHQucXVlcnkuc3RhcnQgfHwgXCIwXCI7XHJcbiAgXHJcblxyXG4gIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gYXdhaXQgdHJhbnNsYXRlKGNvbnRleHQucXVlcnkudGVybSwge3RvOiBjb250ZXh0Py5xdWVyeT8ubGFufHwnZW4nfSk7XHJcbiAgY29uc3QgZGF0YSA9IHVzZUR1bW15RGF0YVxyXG4gICAgPyBSZXNwb25zZVxyXG4gICAgOiBhd2FpdCBmZXRjaChcclxuICAgICAgZW5jb2RlVVJJKGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jdXN0b21zZWFyY2gvdjE/a2V5PUFJemFTeUJ4TjMtbEFweHdENzM2TW0zSGQzV2xTaVZpTENKVGZXcyZjeD04ODIwMTk3NWExMmE2ZjRmZCZxPSR7dHJhbnNsYXRlZFRleHQudGV4dH0mc3RhcnQ9JHtzdGFydEluZGV4fWApXHJcbiAgICAgICkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgY29uc29sZS5sb2coXCJAQEBAQEBcIik7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnWC1SYXBpZEFQSS1LZXknOiAnZDQ3M2UwOGVkNW1zaDNiZmQyYmI5OGNkYTJkNXAxNTg2NGJqc24xODI5Y2MyM2ExMjcnLFxyXG4gICAgICAnWC1SYXBpZEFQSS1Ib3N0JzogJ2R1Y2tkdWNrZ28tZHVja2R1Y2tnby16ZXJvLWNsaWNrLWluZm8ucC5yYXBpZGFwaS5jb20nXHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBpbWFnZURhdGEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9kdWNrZHVja2dvLWR1Y2tkdWNrZ28temVyby1jbGljay1pbmZvLnAucmFwaWRhcGkuY29tLz9xPSR7dHJhbnNsYXRlZFRleHQudGV4dH0mbm9faHRtbD0xJm5vX3JlZGlyZWN0PTEmc2tpcF9kaXNhbWJpZz0xJmZvcm1hdD1qc29uYCwgb3B0aW9ucykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gIGNvbnNvbGUubG9nKFwiISEhISEhISEhIVwiKTtcclxuICBjb25zb2xlLmxvZyhpbWFnZURhdGEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcmVzdWx0czogZGF0YSxcclxuICAgICAgaW1hZ2VSZXN1bHRzOiBpbWFnZURhdGEsXHJcbiAgICAgIGxhbmd1YWdlOiBjb250ZXh0Py5xdWVyeT8ubGFufHwnZW4nXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==