webpackHotUpdate_N_E("pages/index",{

/***/ "./sections/FeaturedStores.js":
/*!************************************!*\
  !*** ./sections/FeaturedStores.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _snnipets_LogoSquare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../snnipets/LogoSquare */ "./snnipets/LogoSquare.js");
/* harmony import */ var _snnipets_ShowContentWithLoadingOrError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../snnipets/ShowContentWithLoadingOrError */ "./snnipets/ShowContentWithLoadingOrError.js");
/* harmony import */ var _redux_store_actions_featuredStoresActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux_store/actions/featuredStoresActions */ "./redux_store/actions/featuredStoresActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\NextJS\\next_project\\frontend\\sections\\FeaturedStores.js",
    _s = $RefreshSig$();







function FeaturedStores() {
  _s();

  var _this = this;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state;
  }),
      listFeaturedStore = _useSelector.listFeaturedStore;

  var loading = listFeaturedStore.loading,
      error = listFeaturedStore.error,
      featuredStores = listFeaturedStore.featuredStores;
  var stores = featuredStores;
  console.log(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state;
  }));
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_redux_store_actions_featuredStoresActions__WEBPACK_IMPORTED_MODULE_4__["listFeaturedStoresAction"])());
  }, [dispatch]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "featured-header-container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "list",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_ShowContentWithLoadingOrError__WEBPACK_IMPORTED_MODULE_3__["default"], {
        loading: loading,
        error: error,
        children: stores.map(function (store) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_LogoSquare__WEBPACK_IMPORTED_MODULE_2__["default"], {
            store: store
          }, store._id, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "featured-header-indicator"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

_s(FeaturedStores, "Uh62CzQDrPekk7ZuXVQ//hyARAo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

_c = FeaturedStores;
/* harmony default export */ __webpack_exports__["default"] = (FeaturedStores);

var _c;

$RefreshReg$(_c, "FeaturedStores");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvRmVhdHVyZWRTdG9yZXMuanMiXSwibmFtZXMiOlsiRmVhdHVyZWRTdG9yZXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImxpc3RGZWF0dXJlZFN0b3JlIiwibG9hZGluZyIsImVycm9yIiwiZmVhdHVyZWRTdG9yZXMiLCJzdG9yZXMiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwibGlzdEZlYXR1cmVkU3RvcmVzQWN0aW9uIiwibWFwIiwic3RvcmUiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxHQUEwQjtBQUFBOztBQUFBOztBQUN0QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURzQixxQkFFUUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBWDtBQUFBLEdBQUQsQ0FGbkI7QUFBQSxNQUVkQyxpQkFGYyxnQkFFZEEsaUJBRmM7O0FBQUEsTUFHZEMsT0FIYyxHQUdxQkQsaUJBSHJCLENBR2RDLE9BSGM7QUFBQSxNQUdMQyxLQUhLLEdBR3FCRixpQkFIckIsQ0FHTEUsS0FISztBQUFBLE1BR0VDLGNBSEYsR0FHcUJILGlCQUhyQixDQUdFRyxjQUhGO0FBSXRCLE1BQU1DLE1BQU0sR0FBR0QsY0FBZjtBQUNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWVIsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBWDtBQUFBLEdBQUQsQ0FBdkI7QUFDQVEseURBQVMsQ0FBQyxZQUFNO0FBQ1pYLFlBQVEsQ0FBQ1ksMkdBQXdCLEVBQXpCLENBQVI7QUFDSCxHQUZRLEVBRU4sQ0FBQ1osUUFBRCxDQUZNLENBQVQ7QUFHQSxzQkFDSTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBLDRCQVFJO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBQSw2QkFDSSxxRUFBQywrRUFBRDtBQUErQixlQUFPLEVBQUVLLE9BQXhDO0FBQWlELGFBQUssRUFBRUMsS0FBeEQ7QUFBQSxrQkFDS0UsTUFBTSxDQUFDSyxHQUFQLENBQVcsVUFBQ0MsS0FBRDtBQUFBLDhCQUNSLHFFQUFDLDREQUFEO0FBQTRCLGlCQUFLLEVBQUVBO0FBQW5DLGFBQWlCQSxLQUFLLENBQUNDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFE7QUFBQSxTQUFYO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSixlQWVJO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUJIOztHQTVCUWhCLGM7VUFDWUUsdUQsRUFDYUMsdUQsRUFHbEJBLHVEOzs7S0FMUEgsYztBQThCTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTBmZTQzYzczMTJlNmQ5NjllNGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMb2dvU3F1YXJlIGZyb20gJy4uL3NubmlwZXRzL0xvZ29TcXVhcmUnXHJcbmltcG9ydCBTaG93Q29udGVudFdpdGhMb2FkaW5nT3JFcnJvciBmcm9tICcuLi9zbm5pcGV0cy9TaG93Q29udGVudFdpdGhMb2FkaW5nT3JFcnJvcic7XHJcbmltcG9ydCB7IGxpc3RGZWF0dXJlZFN0b3Jlc0FjdGlvbiB9IGZyb20gJy4uL3JlZHV4X3N0b3JlL2FjdGlvbnMvZmVhdHVyZWRTdG9yZXNBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5mdW5jdGlvbiBGZWF0dXJlZFN0b3JlcygpIHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgbGlzdEZlYXR1cmVkU3RvcmUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUpXHJcbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBmZWF0dXJlZFN0b3JlcyB9ID0gbGlzdEZlYXR1cmVkU3RvcmU7XHJcbiAgICBjb25zdCBzdG9yZXMgPSBmZWF0dXJlZFN0b3JlcztcclxuICAgIGNvbnNvbGUubG9nKHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUpKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChsaXN0RmVhdHVyZWRTdG9yZXNBY3Rpb24oKSlcclxuICAgIH0sIFtkaXNwYXRjaF0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVkLWhlYWRlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgey8qIEFQUEVBUiBPTkxZIE9OIENFTExcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmZWF0dXJlZEhlYWRlci1zdGVwIGpzLXN0ZXBJY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ1LWFycm93LWljb25cIiB2aWV3Qm94PVwiMCAwIDU0IDU0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiB4bGluazpocmVmPVwiL2ljb25zL2ljb25zLnN2ZyNhcnJvdy1pY29uXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz4gXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPiBcclxuICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8U2hvd0NvbnRlbnRXaXRoTG9hZGluZ09yRXJyb3IgbG9hZGluZz17bG9hZGluZ30gZXJyb3I9e2Vycm9yfT5cclxuICAgICAgICAgICAgICAgICAgICB7c3RvcmVzLm1hcCgoc3RvcmUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ29TcXVhcmUga2V5PXtzdG9yZS5faWR9IHN0b3JlPXtzdG9yZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2hvd0NvbnRlbnRXaXRoTG9hZGluZ09yRXJyb3I+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZWQtaGVhZGVyLWluZGljYXRvclwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZFN0b3JlcyJdLCJzb3VyY2VSb290IjoiIn0=