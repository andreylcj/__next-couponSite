webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux_store/reducers/FeaturedStoresReducers.js":
/*!********************************************************!*\
  !*** ./redux_store/reducers/FeaturedStoresReducers.js ***!
  \********************************************************/
/*! exports provided: listFeaturedStoreReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listFeaturedStoreReducer", function() { return listFeaturedStoreReducer; });
/* harmony import */ var _constants_FeaturedStoresConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/FeaturedStoresConstants */ "./redux_store/constants/FeaturedStoresConstants.js");

var initialState = {
  featuredStores: []
};
var listFeaturedStoreReducer = function listFeaturedStoreReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants_FeaturedStoresConstants__WEBPACK_IMPORTED_MODULE_0__["FEATURED_STORE_REQUEST"]:
      return {
        loading: true
      };

    case _constants_FeaturedStoresConstants__WEBPACK_IMPORTED_MODULE_0__["FEATURED_STORE_SUCCESS"]:
      return {
        loading: false,
        featuredStores: action.payload
      };

    case _constants_FeaturedStoresConstants__WEBPACK_IMPORTED_MODULE_0__["FEATURED_STORE_FAIL"]:
      return {
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXhfc3RvcmUvcmVkdWNlcnMvRmVhdHVyZWRTdG9yZXNSZWR1Y2Vycy5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJmZWF0dXJlZFN0b3JlcyIsImxpc3RGZWF0dXJlZFN0b3JlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkZFQVRVUkVEX1NUT1JFX1JFUVVFU1QiLCJsb2FkaW5nIiwiRkVBVFVSRURfU1RPUkVfU1VDQ0VTUyIsInBheWxvYWQiLCJGRUFUVVJFRF9TVE9SRV9GQUlMIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUFFQyxnQkFBYyxFQUFFO0FBQWxCLENBQXJCO0FBQ08sSUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJILFlBQXlCO0FBQUEsTUFBWEksTUFBVzs7QUFDdEUsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS0MseUZBQUw7QUFDSSxhQUFPO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQVA7O0FBQ0osU0FBS0MseUZBQUw7QUFDSSxhQUFPO0FBQUVELGVBQU8sRUFBRSxLQUFYO0FBQWtCTixzQkFBYyxFQUFFRyxNQUFNLENBQUNLO0FBQXpDLE9BQVA7O0FBQ0osU0FBS0Msc0ZBQUw7QUFDSSxhQUFPO0FBQUVILGVBQU8sRUFBRSxLQUFYO0FBQWtCSSxhQUFLLEVBQUVQLE1BQU0sQ0FBQ0s7QUFBaEMsT0FBUDs7QUFDSjtBQUNJLGFBQU9OLEtBQVA7QUFSUjtBQVVILENBWE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jNDRhODlhMzkyNDM1MDk3NWY2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkVBVFVSRURfU1RPUkVfRkFJTCwgRkVBVFVSRURfU1RPUkVfUkVRVUVTVCwgRkVBVFVSRURfU1RPUkVfU1VDQ0VTUyB9IGZyb20gXCIuLi9jb25zdGFudHMvRmVhdHVyZWRTdG9yZXNDb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgZmVhdHVyZWRTdG9yZXM6IFtdIH07XHJcbmV4cG9ydCBjb25zdCBsaXN0RmVhdHVyZWRTdG9yZVJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgRkVBVFVSRURfU1RPUkVfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJuIHsgbG9hZGluZzogdHJ1ZSB9XHJcbiAgICAgICAgY2FzZSBGRUFUVVJFRF9TVE9SRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4geyBsb2FkaW5nOiBmYWxzZSwgZmVhdHVyZWRTdG9yZXM6IGFjdGlvbi5wYXlsb2FkIH1cclxuICAgICAgICBjYXNlIEZFQVRVUkVEX1NUT1JFX0ZBSUw6XHJcbiAgICAgICAgICAgIHJldHVybiB7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=