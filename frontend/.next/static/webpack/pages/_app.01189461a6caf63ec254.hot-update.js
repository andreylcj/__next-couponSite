webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux_store/constants/CouponsConstants.js":
/*!***************************************************!*\
  !*** ./redux_store/constants/CouponsConstants.js ***!
  \***************************************************/
/*! exports provided: COUPONS_REQUEST, COUPONS_SUCCESS, COUPONS_FAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUPONS_REQUEST", function() { return COUPONS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUPONS_SUCCESS", function() { return COUPONS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUPONS_FAIL", function() { return COUPONS_FAIL; });
var COUPONS_REQUEST = 'COUPONS_REQUEST';
var COUPONS_SUCCESS = 'COUPONS_SUCCESS';
var COUPONS_FAIL = 'COUPONS_FAIL';

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

/***/ }),

/***/ "./redux_store/constants/couponsConstants.js":
false,

/***/ "./redux_store/reducers/CouponsReducer.js":
/*!************************************************!*\
  !*** ./redux_store/reducers/CouponsReducer.js ***!
  \************************************************/
/*! exports provided: listCouponsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listCouponsReducer", function() { return listCouponsReducer; });
/* harmony import */ var _constants_CouponsConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/CouponsConstants */ "./redux_store/constants/CouponsConstants.js");

var initialState = {
  coupons: []
};
var listCouponsReducer = function listCouponsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants_CouponsConstants__WEBPACK_IMPORTED_MODULE_0__["COUPONS_REQUEST"]:
      return {
        loading: true,
        coupons: []
      };

    case _constants_CouponsConstants__WEBPACK_IMPORTED_MODULE_0__["COUPONS_SUCCESS"]:
      return {
        loading: false,
        coupons: action.payload
      };

    case _constants_CouponsConstants__WEBPACK_IMPORTED_MODULE_0__["COUPONS_FAIL"]:
      return {
        loading: false,
        error: action.payload,
        coupons: []
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXhfc3RvcmUvY29uc3RhbnRzL0NvdXBvbnNDb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4X3N0b3JlL3JlZHVjZXJzL0NvdXBvbnNSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbIkNPVVBPTlNfUkVRVUVTVCIsIkNPVVBPTlNfU1VDQ0VTUyIsIkNPVVBPTlNfRkFJTCIsImluaXRpYWxTdGF0ZSIsImNvdXBvbnMiLCJsaXN0Q291cG9uc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJsb2FkaW5nIiwicGF5bG9hZCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLFlBQVksR0FBRyxjQUFyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQyxZQUFZLEdBQUc7QUFBRUMsU0FBTyxFQUFFO0FBQVgsQ0FBckI7QUFDTyxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QkgsWUFBeUI7QUFBQSxNQUFYSSxNQUFXOztBQUNoRSxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLUiwyRUFBTDtBQUNJLGFBQU87QUFBRVMsZUFBTyxFQUFFLElBQVg7QUFBaUJMLGVBQU8sRUFBRTtBQUExQixPQUFQOztBQUNKLFNBQUtILDJFQUFMO0FBQ0ksYUFBTztBQUFFUSxlQUFPLEVBQUUsS0FBWDtBQUFrQkwsZUFBTyxFQUFFRyxNQUFNLENBQUNHO0FBQWxDLE9BQVA7O0FBQ0osU0FBS1Isd0VBQUw7QUFDSSxhQUFPO0FBQUVPLGVBQU8sRUFBRSxLQUFYO0FBQWtCRSxhQUFLLEVBQUVKLE1BQU0sQ0FBQ0csT0FBaEM7QUFBeUNOLGVBQU8sRUFBRTtBQUFsRCxPQUFQOztBQUNKO0FBQ0ksYUFBT0UsS0FBUDtBQVJSO0FBVUgsQ0FYTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjAxMTg5NDYxYTZjYWY2M2VjMjU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQ09VUE9OU19SRVFVRVNUID0gJ0NPVVBPTlNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDT1VQT05TX1NVQ0NFU1MgPSAnQ09VUE9OU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENPVVBPTlNfRkFJTCA9ICdDT1VQT05TX0ZBSUwnOyIsImltcG9ydCB7IENPVVBPTlNfRkFJTCwgQ09VUE9OU19SRVFVRVNULCBDT1VQT05TX1NVQ0NFU1MgfSBmcm9tIFwiLi4vY29uc3RhbnRzL0NvdXBvbnNDb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgY291cG9uczogW10gfTtcclxuZXhwb3J0IGNvbnN0IGxpc3RDb3Vwb25zUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBDT1VQT05TX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7IGxvYWRpbmc6IHRydWUsIGNvdXBvbnM6IFtdIH1cclxuICAgICAgICBjYXNlIENPVVBPTlNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgbG9hZGluZzogZmFsc2UsIGNvdXBvbnM6IGFjdGlvbi5wYXlsb2FkIH1cclxuICAgICAgICBjYXNlIENPVVBPTlNfRkFJTDpcclxuICAgICAgICAgICAgcmV0dXJuIHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiBhY3Rpb24ucGF5bG9hZCwgY291cG9uczogW10gfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=