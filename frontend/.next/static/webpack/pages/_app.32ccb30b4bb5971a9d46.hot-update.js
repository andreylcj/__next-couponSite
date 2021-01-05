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

var listFeaturedStoreReducer = function listFeaturedStoreReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    loading: true,
    featuredStores: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants_FeaturedStoresConstants__WEBPACK_IMPORTED_MODULE_0__["FEATURED_STORE_REQUEST"]:
      return {
        loading: true,
        featuredStores: []
      };

    case _constants_FeaturedStoresConstants__WEBPACK_IMPORTED_MODULE_0__["FEATURED_STORE_SUCCESS"]:
      return {
        loading: false,
        featuredStores: action.payload
      };

    case _constants_FeaturedStoresConstants__WEBPACK_IMPORTED_MODULE_0__["FEATURED_STORE_FAIL"]:
      return {
        loading: false,
        error: action.payload,
        featuredStores: []
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXhfc3RvcmUvcmVkdWNlcnMvRmVhdHVyZWRTdG9yZXNSZWR1Y2Vycy5qcyJdLCJuYW1lcyI6WyJsaXN0RmVhdHVyZWRTdG9yZVJlZHVjZXIiLCJzdGF0ZSIsImxvYWRpbmciLCJmZWF0dXJlZFN0b3JlcyIsImFjdGlvbiIsInR5cGUiLCJGRUFUVVJFRF9TVE9SRV9SRVFVRVNUIiwiRkVBVFVSRURfU1RPUkVfU1VDQ0VTUyIsInBheWxvYWQiLCJGRUFUVVJFRF9TVE9SRV9GQUlMIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdPLElBQU1BLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsR0FBMkQ7QUFBQSxNQUExREMsS0FBMEQsdUVBQWxEO0FBQUVDLFdBQU8sRUFBRSxJQUFYO0FBQWlCQyxrQkFBYyxFQUFFO0FBQWpDLEdBQWtEO0FBQUEsTUFBWEMsTUFBVzs7QUFDL0YsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS0MseUZBQUw7QUFDSSxhQUFPO0FBQUVKLGVBQU8sRUFBRSxJQUFYO0FBQWlCQyxzQkFBYyxFQUFFO0FBQWpDLE9BQVA7O0FBQ0osU0FBS0kseUZBQUw7QUFDSSxhQUFPO0FBQUVMLGVBQU8sRUFBRSxLQUFYO0FBQWtCQyxzQkFBYyxFQUFFQyxNQUFNLENBQUNJO0FBQXpDLE9BQVA7O0FBQ0osU0FBS0Msc0ZBQUw7QUFDSSxhQUFPO0FBQUVQLGVBQU8sRUFBRSxLQUFYO0FBQWtCUSxhQUFLLEVBQUVOLE1BQU0sQ0FBQ0ksT0FBaEM7QUFBeUNMLHNCQUFjLEVBQUU7QUFBekQsT0FBUDs7QUFDSjtBQUNJLGFBQU9GLEtBQVA7QUFSUjtBQVVILENBWE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zMmNjYjMwYjRiYjU5NzFhOWQ0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkVBVFVSRURfU1RPUkVfRkFJTCwgRkVBVFVSRURfU1RPUkVfUkVRVUVTVCwgRkVBVFVSRURfU1RPUkVfU1VDQ0VTUyB9IGZyb20gXCIuLi9jb25zdGFudHMvRmVhdHVyZWRTdG9yZXNDb25zdGFudHNcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbGlzdEZlYXR1cmVkU3RvcmVSZWR1Y2VyID0gKHN0YXRlID0geyBsb2FkaW5nOiB0cnVlLCBmZWF0dXJlZFN0b3JlczogW10gfSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBGRUFUVVJFRF9TVE9SRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4geyBsb2FkaW5nOiB0cnVlLCBmZWF0dXJlZFN0b3JlczogW10gfVxyXG4gICAgICAgIGNhc2UgRkVBVFVSRURfU1RPUkVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgbG9hZGluZzogZmFsc2UsIGZlYXR1cmVkU3RvcmVzOiBhY3Rpb24ucGF5bG9hZCB9XHJcbiAgICAgICAgY2FzZSBGRUFUVVJFRF9TVE9SRV9GQUlMOlxyXG4gICAgICAgICAgICByZXR1cm4geyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGFjdGlvbi5wYXlsb2FkLCBmZWF0dXJlZFN0b3JlczogW10gfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=