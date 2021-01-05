webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux_store/constants/FeaturedStoresConstants.js":
/*!**********************************************************!*\
  !*** ./redux_store/constants/FeaturedStoresConstants.js ***!
  \**********************************************************/
/*! exports provided: FEATURED_STORE_REQUEST, FEATURED_STORE_SUCCESS, FEATURED_STORE_FAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURED_STORE_REQUEST", function() { return FEATURED_STORE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURED_STORE_SUCCESS", function() { return FEATURED_STORE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURED_STORE_FAIL", function() { return FEATURED_STORE_FAIL; });
var FEATURED_STORE_REQUEST = 'FEATURED_STORE_REQUEST';
var FEATURED_STORE_SUCCESS = 'FEATURED_STORE_SUCCESS';
var FEATURED_STORE_FAIL = 'FEATURED_STORE_FAIL';

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

/***/ "./redux_store/constants/featuredStoresConstants.js":
false,

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXhfc3RvcmUvY29uc3RhbnRzL0ZlYXR1cmVkU3RvcmVzQ29uc3RhbnRzLmpzIiwid2VicGFjazovL19OX0UvLi9yZWR1eF9zdG9yZS9yZWR1Y2Vycy9GZWF0dXJlZFN0b3Jlc1JlZHVjZXJzLmpzIl0sIm5hbWVzIjpbIkZFQVRVUkVEX1NUT1JFX1JFUVVFU1QiLCJGRUFUVVJFRF9TVE9SRV9TVUNDRVNTIiwiRkVBVFVSRURfU1RPUkVfRkFJTCIsImluaXRpYWxTdGF0ZSIsImZlYXR1cmVkU3RvcmVzIiwibGlzdEZlYXR1cmVkU3RvcmVSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibG9hZGluZyIsInBheWxvYWQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsSUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1DLFlBQVksR0FBRztBQUFFQyxnQkFBYyxFQUFFO0FBQWxCLENBQXJCO0FBQ08sSUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJILFlBQXlCO0FBQUEsTUFBWEksTUFBVzs7QUFDdEUsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS1IseUZBQUw7QUFDSSxhQUFPO0FBQUVTLGVBQU8sRUFBRSxJQUFYO0FBQWlCTCxzQkFBYyxFQUFFO0FBQWpDLE9BQVA7O0FBQ0osU0FBS0gseUZBQUw7QUFDSSxhQUFPO0FBQUVRLGVBQU8sRUFBRSxLQUFYO0FBQWtCTCxzQkFBYyxFQUFFRyxNQUFNLENBQUNHO0FBQXpDLE9BQVA7O0FBQ0osU0FBS1Isc0ZBQUw7QUFDSSxhQUFPO0FBQUVPLGVBQU8sRUFBRSxLQUFYO0FBQWtCRSxhQUFLLEVBQUVKLE1BQU0sQ0FBQ0csT0FBaEM7QUFBeUNOLHNCQUFjLEVBQUU7QUFBekQsT0FBUDs7QUFDSjtBQUNJLGFBQU9FLEtBQVA7QUFSUjtBQVVILENBWE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lOWM2YWIwZjRhZTg0NGFkNThiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEZFQVRVUkVEX1NUT1JFX1JFUVVFU1QgPSAnRkVBVFVSRURfU1RPUkVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGRUFUVVJFRF9TVE9SRV9TVUNDRVNTID0gJ0ZFQVRVUkVEX1NUT1JFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRkVBVFVSRURfU1RPUkVfRkFJTCA9ICdGRUFUVVJFRF9TVE9SRV9GQUlMJzsiLCJpbXBvcnQgeyBGRUFUVVJFRF9TVE9SRV9GQUlMLCBGRUFUVVJFRF9TVE9SRV9SRVFVRVNULCBGRUFUVVJFRF9TVE9SRV9TVUNDRVNTIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9GZWF0dXJlZFN0b3Jlc0NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0geyBmZWF0dXJlZFN0b3JlczogW10gfTtcclxuZXhwb3J0IGNvbnN0IGxpc3RGZWF0dXJlZFN0b3JlUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBGRUFUVVJFRF9TVE9SRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4geyBsb2FkaW5nOiB0cnVlLCBmZWF0dXJlZFN0b3JlczogW10gfVxyXG4gICAgICAgIGNhc2UgRkVBVFVSRURfU1RPUkVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgbG9hZGluZzogZmFsc2UsIGZlYXR1cmVkU3RvcmVzOiBhY3Rpb24ucGF5bG9hZCB9XHJcbiAgICAgICAgY2FzZSBGRUFUVVJFRF9TVE9SRV9GQUlMOlxyXG4gICAgICAgICAgICByZXR1cm4geyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGFjdGlvbi5wYXlsb2FkLCBmZWF0dXJlZFN0b3JlczogW10gfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=