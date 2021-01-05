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

/***/ }),

/***/ "./redux_store/reducers/FeaturedStoresReducers.js":
/*!********************************************************!*\
  !*** ./redux_store/reducers/FeaturedStoresReducers.js ***!
  \********************************************************/
/*! exports provided: listFeaturedStoreReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listFeaturedStoreReducer", function() { return listFeaturedStoreReducer; });
/* harmony import */ var _constants_featuredStoresConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/featuredStoresConstants */ "./redux_store/constants/featuredStoresConstants.js");

var initialState = {
  featuredStores: []
};
var listFeaturedStoreReducer = function listFeaturedStoreReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants_featuredStoresConstants__WEBPACK_IMPORTED_MODULE_0__["FEATURED_STORE_REQUEST"]:
      return {
        loading: true,
        featuredStores: []
      };

    case _constants_featuredStoresConstants__WEBPACK_IMPORTED_MODULE_0__["FEATURED_STORE_SUCCESS"]:
      return {
        loading: false,
        featuredStores: action.payload
      };

    case _constants_featuredStoresConstants__WEBPACK_IMPORTED_MODULE_0__["FEATURED_STORE_FAIL"]:
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

/***/ }),

/***/ "./redux_store/reducers/couponsReducer.js":
false,

/***/ "./redux_store/reducers/featuredStoresReducers.js":
false,

/***/ "./redux_store/store.js":
/*!******************************!*\
  !*** ./redux_store/store.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers_FeaturedStoresReducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/FeaturedStoresReducers */ "./redux_store/reducers/FeaturedStoresReducers.js");
/* harmony import */ var _reducers_CouponsReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/CouponsReducer */ "./redux_store/reducers/CouponsReducer.js");




var initialState = {};
var reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  listFeaturedStore: _reducers_FeaturedStoresReducers__WEBPACK_IMPORTED_MODULE_2__["listFeaturedStoreReducer"],
  listCoupons: _reducers_CouponsReducer__WEBPACK_IMPORTED_MODULE_3__["listCouponsReducer"]
});

var defineComposeEnhancer = function defineComposeEnhancer() {
  if (true) {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
  } else {}
};

var composeEnhancer = defineComposeEnhancer();
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, composeEnhancer(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"])));
/* harmony default export */ __webpack_exports__["default"] = (store);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXhfc3RvcmUvcmVkdWNlcnMvQ291cG9uc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4X3N0b3JlL3JlZHVjZXJzL0ZlYXR1cmVkU3RvcmVzUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4X3N0b3JlL3N0b3JlLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImNvdXBvbnMiLCJsaXN0Q291cG9uc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJDT1VQT05TX1JFUVVFU1QiLCJsb2FkaW5nIiwiQ09VUE9OU19TVUNDRVNTIiwicGF5bG9hZCIsIkNPVVBPTlNfRkFJTCIsImVycm9yIiwiZmVhdHVyZWRTdG9yZXMiLCJsaXN0RmVhdHVyZWRTdG9yZVJlZHVjZXIiLCJGRUFUVVJFRF9TVE9SRV9SRVFVRVNUIiwiRkVBVFVSRURfU1RPUkVfU1VDQ0VTUyIsIkZFQVRVUkVEX1NUT1JFX0ZBSUwiLCJyZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwibGlzdEZlYXR1cmVkU3RvcmUiLCJsaXN0Q291cG9ucyIsImRlZmluZUNvbXBvc2VFbmhhbmNlciIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsImNvbXBvc2UiLCJjb21wb3NlRW5oYW5jZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUFFQyxTQUFPLEVBQUU7QUFBWCxDQUFyQjtBQUNPLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCSCxZQUF5QjtBQUFBLE1BQVhJLE1BQVc7O0FBQ2hFLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUtDLDJFQUFMO0FBQ0ksYUFBTztBQUFFQyxlQUFPLEVBQUUsSUFBWDtBQUFpQk4sZUFBTyxFQUFFO0FBQTFCLE9BQVA7O0FBQ0osU0FBS08sMkVBQUw7QUFDSSxhQUFPO0FBQUVELGVBQU8sRUFBRSxLQUFYO0FBQWtCTixlQUFPLEVBQUVHLE1BQU0sQ0FBQ0s7QUFBbEMsT0FBUDs7QUFDSixTQUFLQyx3RUFBTDtBQUNJLGFBQU87QUFBRUgsZUFBTyxFQUFFLEtBQVg7QUFBa0JJLGFBQUssRUFBRVAsTUFBTSxDQUFDSyxPQUFoQztBQUF5Q1IsZUFBTyxFQUFFO0FBQWxELE9BQVA7O0FBQ0o7QUFDSSxhQUFPRSxLQUFQO0FBUlI7QUFVSCxDQVhNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUDtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1ILFlBQVksR0FBRztBQUFFWSxnQkFBYyxFQUFFO0FBQWxCLENBQXJCO0FBQ08sSUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixHQUFrQztBQUFBLE1BQWpDVixLQUFpQyx1RUFBekJILFlBQXlCO0FBQUEsTUFBWEksTUFBVzs7QUFDdEUsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS1MseUZBQUw7QUFDSSxhQUFPO0FBQUVQLGVBQU8sRUFBRSxJQUFYO0FBQWlCSyxzQkFBYyxFQUFFO0FBQWpDLE9BQVA7O0FBQ0osU0FBS0cseUZBQUw7QUFDSSxhQUFPO0FBQUVSLGVBQU8sRUFBRSxLQUFYO0FBQWtCSyxzQkFBYyxFQUFFUixNQUFNLENBQUNLO0FBQXpDLE9BQVA7O0FBQ0osU0FBS08sc0ZBQUw7QUFDSSxhQUFPO0FBQUVULGVBQU8sRUFBRSxLQUFYO0FBQWtCSSxhQUFLLEVBQUVQLE1BQU0sQ0FBQ0ssT0FBaEM7QUFBeUNHLHNCQUFjLEVBQUU7QUFBekQsT0FBUDs7QUFDSjtBQUNJLGFBQU9ULEtBQVA7QUFSUjtBQVVILENBWE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1ILFlBQVksR0FBRyxFQUFyQjtBQUNBLElBQU1pQixPQUFPLEdBQUdDLDZEQUFlLENBQUM7QUFDNUJDLG1CQUFpQixFQUFFTix5RkFEUztBQUU1Qk8sYUFBVyxFQUFFbEIsMkVBQWtCQTtBQUZILENBQUQsQ0FBL0I7O0FBS0EsSUFBTW1CLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUNoQyxZQUFtQztBQUMvQixXQUFPQyxNQUFNLENBQUNDLG9DQUFQLElBQStDQyw2Q0FBdEQ7QUFDSCxHQUZELE1BRU8sRUFFTjtBQUNKLENBTkQ7O0FBT0EsSUFBTUMsZUFBZSxHQUFHSixxQkFBcUIsRUFBN0M7QUFDQSxJQUFNSyxLQUFLLEdBQUdDLHlEQUFXLENBQUNWLE9BQUQsRUFBVWpCLFlBQVYsRUFBd0J5QixlQUFlLENBQUNHLDZEQUFlLENBQUNDLG1EQUFELENBQWhCLENBQXZDLENBQXpCO0FBRWVILG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuN2FmZGVkM2YyYjc3MTk1N2MwM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENPVVBPTlNfRkFJTCwgQ09VUE9OU19SRVFVRVNULCBDT1VQT05TX1NVQ0NFU1MgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2NvdXBvbnNDb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgY291cG9uczogW10gfTtcclxuZXhwb3J0IGNvbnN0IGxpc3RDb3Vwb25zUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBDT1VQT05TX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7IGxvYWRpbmc6IHRydWUsIGNvdXBvbnM6IFtdIH1cclxuICAgICAgICBjYXNlIENPVVBPTlNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgbG9hZGluZzogZmFsc2UsIGNvdXBvbnM6IGFjdGlvbi5wYXlsb2FkIH1cclxuICAgICAgICBjYXNlIENPVVBPTlNfRkFJTDpcclxuICAgICAgICAgICAgcmV0dXJuIHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiBhY3Rpb24ucGF5bG9hZCwgY291cG9uczogW10gfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEZFQVRVUkVEX1NUT1JFX0ZBSUwsIEZFQVRVUkVEX1NUT1JFX1JFUVVFU1QsIEZFQVRVUkVEX1NUT1JFX1NVQ0NFU1MgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2ZlYXR1cmVkU3RvcmVzQ29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IGZlYXR1cmVkU3RvcmVzOiBbXSB9O1xyXG5leHBvcnQgY29uc3QgbGlzdEZlYXR1cmVkU3RvcmVSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEZFQVRVUkVEX1NUT1JFX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7IGxvYWRpbmc6IHRydWUsIGZlYXR1cmVkU3RvcmVzOiBbXSB9XHJcbiAgICAgICAgY2FzZSBGRUFUVVJFRF9TVE9SRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4geyBsb2FkaW5nOiBmYWxzZSwgZmVhdHVyZWRTdG9yZXM6IGFjdGlvbi5wYXlsb2FkIH1cclxuICAgICAgICBjYXNlIEZFQVRVUkVEX1NUT1JFX0ZBSUw6XHJcbiAgICAgICAgICAgIHJldHVybiB7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQsIGZlYXR1cmVkU3RvcmVzOiBbXSB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyBsaXN0RmVhdHVyZWRTdG9yZVJlZHVjZXIgfSBmcm9tIFwiLi9yZWR1Y2Vycy9GZWF0dXJlZFN0b3Jlc1JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IGxpc3RDb3Vwb25zUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcnMvQ291cG9uc1JlZHVjZXInXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcclxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBsaXN0RmVhdHVyZWRTdG9yZTogbGlzdEZlYXR1cmVkU3RvcmVSZWR1Y2VyLFxyXG4gICAgbGlzdENvdXBvbnM6IGxpc3RDb3Vwb25zUmVkdWNlcixcclxufSlcclxuXHJcbmNvbnN0IGRlZmluZUNvbXBvc2VFbmhhbmNlciA9ICgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIHx8IGNvbXBvc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBjb21wb3NlXHJcbiAgICB9XHJcbn1cclxuY29uc3QgY29tcG9zZUVuaGFuY2VyID0gZGVmaW5lQ29tcG9zZUVuaGFuY2VyKCk7XHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBjb21wb3NlRW5oYW5jZXIoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==