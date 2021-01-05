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
            lineNumber: 27,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "featured-header-indicator"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

_s(FeaturedStores, "Zhn2OGd3CWsULIMsbLvod3Bjl1o=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvRmVhdHVyZWRTdG9yZXMuanMiXSwibmFtZXMiOlsiRmVhdHVyZWRTdG9yZXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImxpc3RGZWF0dXJlZFN0b3JlIiwibG9hZGluZyIsImVycm9yIiwiZmVhdHVyZWRTdG9yZXMiLCJzdG9yZXMiLCJ1c2VFZmZlY3QiLCJsaXN0RmVhdHVyZWRTdG9yZXNBY3Rpb24iLCJtYXAiLCJzdG9yZSIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULEdBQTBCO0FBQUE7O0FBQUE7O0FBQ3RCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRHNCLHFCQUVRQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFYO0FBQUEsR0FBRCxDQUZuQjtBQUFBLE1BRWRDLGlCQUZjLGdCQUVkQSxpQkFGYzs7QUFBQSxNQUdkQyxPQUhjLEdBR3FCRCxpQkFIckIsQ0FHZEMsT0FIYztBQUFBLE1BR0xDLEtBSEssR0FHcUJGLGlCQUhyQixDQUdMRSxLQUhLO0FBQUEsTUFHRUMsY0FIRixHQUdxQkgsaUJBSHJCLENBR0VHLGNBSEY7QUFJdEIsTUFBTUMsTUFBTSxHQUFHRCxjQUFmO0FBQ0FFLHlEQUFTLENBQUMsWUFBTTtBQUNaVCxZQUFRLENBQUNVLDJHQUF3QixFQUF6QixDQUFSO0FBQ0gsR0FGUSxFQUVOLENBQUNWLFFBQUQsQ0FGTSxDQUFUO0FBR0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsMkJBQWY7QUFBQSw0QkFRSTtBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUEsNkJBQ0kscUVBQUMsK0VBQUQ7QUFBK0IsZUFBTyxFQUFFSyxPQUF4QztBQUFpRCxhQUFLLEVBQUVDLEtBQXhEO0FBQUEsa0JBQ0tFLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFVBQUNDLEtBQUQ7QUFBQSw4QkFDUixxRUFBQyw0REFBRDtBQUE0QixpQkFBSyxFQUFFQTtBQUFuQyxhQUFpQkEsS0FBSyxDQUFDQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBWDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkosZUFlSTtBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1CSDs7R0EzQlFkLGM7VUFDWUUsdUQsRUFDYUMsdUQ7OztLQUZ6QkgsYztBQTZCTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDVlYzI2ZjcxNDU2NjlmMjBjY2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMb2dvU3F1YXJlIGZyb20gJy4uL3NubmlwZXRzL0xvZ29TcXVhcmUnXHJcbmltcG9ydCBTaG93Q29udGVudFdpdGhMb2FkaW5nT3JFcnJvciBmcm9tICcuLi9zbm5pcGV0cy9TaG93Q29udGVudFdpdGhMb2FkaW5nT3JFcnJvcic7XHJcbmltcG9ydCB7IGxpc3RGZWF0dXJlZFN0b3Jlc0FjdGlvbiB9IGZyb20gJy4uL3JlZHV4X3N0b3JlL2FjdGlvbnMvZmVhdHVyZWRTdG9yZXNBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5mdW5jdGlvbiBGZWF0dXJlZFN0b3JlcygpIHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgbGlzdEZlYXR1cmVkU3RvcmUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUpXHJcbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBmZWF0dXJlZFN0b3JlcyB9ID0gbGlzdEZlYXR1cmVkU3RvcmU7XHJcbiAgICBjb25zdCBzdG9yZXMgPSBmZWF0dXJlZFN0b3JlcztcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gobGlzdEZlYXR1cmVkU3RvcmVzQWN0aW9uKCkpXHJcbiAgICB9LCBbZGlzcGF0Y2hdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlZC1oZWFkZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHsvKiBBUFBFQVIgT05MWSBPTiBDRUxMXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmVhdHVyZWRIZWFkZXItc3RlcCBqcy1zdGVwSWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidS1hcnJvdy1pY29uXCIgdmlld0JveD1cIjAgMCA1NCA1NFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgeGxpbms6aHJlZj1cIi9pY29ucy9pY29ucy5zdmcjYXJyb3ctaWNvblwiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+IFxyXG4gICAgICAgICAgICA8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPFNob3dDb250ZW50V2l0aExvYWRpbmdPckVycm9yIGxvYWRpbmc9e2xvYWRpbmd9IGVycm9yPXtlcnJvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3N0b3Jlcy5tYXAoKHN0b3JlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvU3F1YXJlIGtleT17c3RvcmUuX2lkfSBzdG9yZT17c3RvcmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1Nob3dDb250ZW50V2l0aExvYWRpbmdPckVycm9yPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVkLWhlYWRlci1pbmRpY2F0b3JcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZWRTdG9yZXMiXSwic291cmNlUm9vdCI6IiJ9