webpackHotUpdate_N_E("pages/_app",{

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

var listCouponsReducer = function listCouponsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    coupons: []
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXhfc3RvcmUvcmVkdWNlcnMvQ291cG9uc1JlZHVjZXIuanMiXSwibmFtZXMiOlsibGlzdENvdXBvbnNSZWR1Y2VyIiwic3RhdGUiLCJjb3Vwb25zIiwiYWN0aW9uIiwidHlwZSIsIkNPVVBPTlNfUkVRVUVTVCIsImxvYWRpbmciLCJDT1VQT05TX1NVQ0NFU1MiLCJwYXlsb2FkIiwiQ09VUE9OU19GQUlMIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdPLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBcUM7QUFBQSxNQUFwQ0MsS0FBb0MsdUVBQTVCO0FBQUVDLFdBQU8sRUFBRTtBQUFYLEdBQTRCO0FBQUEsTUFBWEMsTUFBVzs7QUFDbkUsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS0MsMkVBQUw7QUFDSSxhQUFPO0FBQUVDLGVBQU8sRUFBRSxJQUFYO0FBQWlCSixlQUFPLEVBQUU7QUFBMUIsT0FBUDs7QUFDSixTQUFLSywyRUFBTDtBQUNJLGFBQU87QUFBRUQsZUFBTyxFQUFFLEtBQVg7QUFBa0JKLGVBQU8sRUFBRUMsTUFBTSxDQUFDSztBQUFsQyxPQUFQOztBQUNKLFNBQUtDLHdFQUFMO0FBQ0ksYUFBTztBQUFFSCxlQUFPLEVBQUUsS0FBWDtBQUFrQkksYUFBSyxFQUFFUCxNQUFNLENBQUNLLE9BQWhDO0FBQXlDTixlQUFPLEVBQUU7QUFBbEQsT0FBUDs7QUFDSjtBQUNJLGFBQU9ELEtBQVA7QUFSUjtBQVVILENBWE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42NmI2NDNkYzEyMTQ0YWI5MWVmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ09VUE9OU19GQUlMLCBDT1VQT05TX1JFUVVFU1QsIENPVVBPTlNfU1VDQ0VTUyB9IGZyb20gXCIuLi9jb25zdGFudHMvQ291cG9uc0NvbnN0YW50c1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0Q291cG9uc1JlZHVjZXIgPSAoc3RhdGUgPSB7IGNvdXBvbnM6IFtdIH0sIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQ09VUE9OU19SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4geyBsb2FkaW5nOiB0cnVlLCBjb3Vwb25zOiBbXSB9XHJcbiAgICAgICAgY2FzZSBDT1VQT05TX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7IGxvYWRpbmc6IGZhbHNlLCBjb3Vwb25zOiBhY3Rpb24ucGF5bG9hZCB9XHJcbiAgICAgICAgY2FzZSBDT1VQT05TX0ZBSUw6XHJcbiAgICAgICAgICAgIHJldHVybiB7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQsIGNvdXBvbnM6IFtdIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9