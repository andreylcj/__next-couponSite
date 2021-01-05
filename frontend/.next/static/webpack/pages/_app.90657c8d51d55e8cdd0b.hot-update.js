webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux_store/reducers/couponsReducer.js":
/*!************************************************!*\
  !*** ./redux_store/reducers/couponsReducer.js ***!
  \************************************************/
/*! exports provided: listCouponsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listCouponsReducer", function() { return listCouponsReducer; });
/* harmony import */ var _constants_couponsConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/couponsConstants */ "./redux_store/constants/couponsConstants.js");

var initialState = {
  coupons: []
};
var listCouponsReducer = function listCouponsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants_couponsConstants__WEBPACK_IMPORTED_MODULE_0__["COUPONS_REQUEST"]:
      return {
        loading: true,
        coupons: []
      };

    case _constants_couponsConstants__WEBPACK_IMPORTED_MODULE_0__["COUPONS_SUCCESS"]:
      return {
        loading: false,
        coupons: action.payload
      };

    case _constants_couponsConstants__WEBPACK_IMPORTED_MODULE_0__["COUPONS_FAIL"]:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXhfc3RvcmUvcmVkdWNlcnMvY291cG9uc1JlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiY291cG9ucyIsImxpc3RDb3Vwb25zUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkNPVVBPTlNfUkVRVUVTVCIsImxvYWRpbmciLCJDT1VQT05TX1NVQ0NFU1MiLCJwYXlsb2FkIiwiQ09VUE9OU19GQUlMIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUFFQyxTQUFPLEVBQUU7QUFBWCxDQUFyQjtBQUNPLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCSCxZQUF5QjtBQUFBLE1BQVhJLE1BQVc7O0FBQ2hFLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUtDLDJFQUFMO0FBQ0ksYUFBTztBQUFFQyxlQUFPLEVBQUUsSUFBWDtBQUFpQk4sZUFBTyxFQUFFO0FBQTFCLE9BQVA7O0FBQ0osU0FBS08sMkVBQUw7QUFDSSxhQUFPO0FBQUVELGVBQU8sRUFBRSxLQUFYO0FBQWtCTixlQUFPLEVBQUVHLE1BQU0sQ0FBQ0s7QUFBbEMsT0FBUDs7QUFDSixTQUFLQyx3RUFBTDtBQUNJLGFBQU87QUFBRUgsZUFBTyxFQUFFLEtBQVg7QUFBa0JJLGFBQUssRUFBRVAsTUFBTSxDQUFDSztBQUFoQyxPQUFQOztBQUNKO0FBQ0ksYUFBT04sS0FBUDtBQVJSO0FBVUgsQ0FYTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjkwNjU3YzhkNTFkNTVlOGNkZDBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDT1VQT05TX0ZBSUwsIENPVVBPTlNfUkVRVUVTVCwgQ09VUE9OU19TVUNDRVNTIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9jb3Vwb25zQ29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IGNvdXBvbnM6IFtdIH07XHJcbmV4cG9ydCBjb25zdCBsaXN0Q291cG9uc1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQ09VUE9OU19SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4geyBsb2FkaW5nOiB0cnVlLCBjb3Vwb25zOiBbXSB9XHJcbiAgICAgICAgY2FzZSBDT1VQT05TX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7IGxvYWRpbmc6IGZhbHNlLCBjb3Vwb25zOiBhY3Rpb24ucGF5bG9hZCB9XHJcbiAgICAgICAgY2FzZSBDT1VQT05TX0ZBSUw6XHJcbiAgICAgICAgICAgIHJldHVybiB7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=