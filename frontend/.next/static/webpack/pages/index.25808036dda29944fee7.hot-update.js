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


var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\NextJS\\next_project\\frontend\\sections\\FeaturedStores.js",
    _s = $RefreshSig$();




function FeaturedStores() {
  _s();

  var _this = this;

  var dispatch = useDispatch();

  var _useSelector = useSelector(function (state) {
    return state;
  }),
      listFeaturedStore = _useSelector.listFeaturedStore;

  var loading = listFeaturedStore.loading,
      error = listFeaturedStore.error,
      featuredStores = listFeaturedStore.featuredStores;
  useEffect(function () {
    dispatch(listFeaturedStoresAction());
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "featured-header-container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "list",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowContentWithLoadingOrError, {
        loading: loading,
        error: error,
        children: stores.map(function (store) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_LogoSquare__WEBPACK_IMPORTED_MODULE_2__["default"], {
            store: store
          }, store._id, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "featured-header-indicator"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

_s(FeaturedStores, "Zhn2OGd3CWsULIMsbLvod3Bjl1o=", true);

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

/***/ }),

/***/ "./sections/GeneralFeaturedCoupons.js":
/*!********************************************!*\
  !*** ./sections/GeneralFeaturedCoupons.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _snnipets_ValidCouponItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../snnipets/ValidCouponItem */ "./snnipets/ValidCouponItem.js");
/* harmony import */ var _snnipets_GetEmail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../snnipets/GetEmail */ "./snnipets/GetEmail.js");
/* harmony import */ var _snnipets_ShowContentWithLoadingOrError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../snnipets/ShowContentWithLoadingOrError */ "./snnipets/ShowContentWithLoadingOrError.js");


var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\NextJS\\next_project\\frontend\\sections\\GeneralFeaturedCoupons.js",
    _s = $RefreshSig$();






function GeneralFeaturedCoupons() {
  _s();

  var _this = this;

  var dispatch = useDispatch();

  var _useSelector = useSelector(function (state) {
    return state;
  }),
      listCoupons = _useSelector.listCoupons;

  var loading = listCoupons.loading,
      error = listCoupons.error,
      coupons = listCoupons.coupons;
  useEffect(function () {
    dispatch(listCouponsAction());
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    id: "middle",
    className: "middle",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "title",
        id: "top25",
        children: " Os 25 melhores Cupons de Desconto da semana!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "main-content ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "content-block coupons-content",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "coupon-list valid-coupons",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_ShowContentWithLoadingOrError__WEBPACK_IMPORTED_MODULE_4__["default"], {
              loading: loading,
              error: error,
              children: coupons.map(function (coupon, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_ValidCouponItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  coupon: coupon
                }, coupon._id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 37
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_GetEmail__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

_s(GeneralFeaturedCoupons, "JkyCN0WJFdM51+iaj/Euo6iRCsQ=", true);

_c = GeneralFeaturedCoupons;
/* harmony default export */ __webpack_exports__["default"] = (GeneralFeaturedCoupons);

var _c;

$RefreshReg$(_c, "GeneralFeaturedCoupons");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvRmVhdHVyZWRTdG9yZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NlY3Rpb25zL0dlbmVyYWxGZWF0dXJlZENvdXBvbnMuanMiXSwibmFtZXMiOlsiRmVhdHVyZWRTdG9yZXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImxpc3RGZWF0dXJlZFN0b3JlIiwibG9hZGluZyIsImVycm9yIiwiZmVhdHVyZWRTdG9yZXMiLCJ1c2VFZmZlY3QiLCJsaXN0RmVhdHVyZWRTdG9yZXNBY3Rpb24iLCJzdG9yZXMiLCJtYXAiLCJzdG9yZSIsIl9pZCIsIkdlbmVyYWxGZWF0dXJlZENvdXBvbnMiLCJsaXN0Q291cG9ucyIsImNvdXBvbnMiLCJsaXN0Q291cG9uc0FjdGlvbiIsImNvdXBvbiIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsR0FBMEI7QUFBQTs7QUFBQTs7QUFDdEIsTUFBTUMsUUFBUSxHQUFHQyxXQUFXLEVBQTVCOztBQURzQixxQkFFUUMsV0FBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFYO0FBQUEsR0FBRCxDQUZuQjtBQUFBLE1BRWRDLGlCQUZjLGdCQUVkQSxpQkFGYzs7QUFBQSxNQUdkQyxPQUhjLEdBR3FCRCxpQkFIckIsQ0FHZEMsT0FIYztBQUFBLE1BR0xDLEtBSEssR0FHcUJGLGlCQUhyQixDQUdMRSxLQUhLO0FBQUEsTUFHRUMsY0FIRixHQUdxQkgsaUJBSHJCLENBR0VHLGNBSEY7QUFJdEJDLFdBQVMsQ0FBQyxZQUFNO0FBQ1pSLFlBQVEsQ0FBQ1Msd0JBQXdCLEVBQXpCLENBQVI7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsMkJBQWY7QUFBQSw0QkFRSTtBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUEsNkJBQ0kscUVBQUMsNkJBQUQ7QUFBK0IsZUFBTyxFQUFFSixPQUF4QztBQUFpRCxhQUFLLEVBQUVDLEtBQXhEO0FBQUEsa0JBQ0tJLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQUNDLEtBQUQ7QUFBQSw4QkFDUixxRUFBQyw0REFBRDtBQUE0QixpQkFBSyxFQUFFQTtBQUFuQyxhQUFpQkEsS0FBSyxDQUFDQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBWDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkosZUFlSTtBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1CSDs7R0ExQlFkLGM7O0tBQUFBLGM7QUE0Qk1BLDZFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTZSxzQkFBVCxHQUFrQztBQUFBOztBQUFBOztBQUU5QixNQUFNZCxRQUFRLEdBQUdDLFdBQVcsRUFBNUI7O0FBRjhCLHFCQUdOQyxXQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQVg7QUFBQSxHQUFELENBSEw7QUFBQSxNQUd0QlksV0FIc0IsZ0JBR3RCQSxXQUhzQjs7QUFBQSxNQUl0QlYsT0FKc0IsR0FJTVUsV0FKTixDQUl0QlYsT0FKc0I7QUFBQSxNQUliQyxLQUphLEdBSU1TLFdBSk4sQ0FJYlQsS0FKYTtBQUFBLE1BSU5VLE9BSk0sR0FJTUQsV0FKTixDQUlOQyxPQUpNO0FBSzlCUixXQUFTLENBQUMsWUFBTTtBQUNaUixZQUFRLENBQUNpQixpQkFBaUIsRUFBbEIsQ0FBUjtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDSTtBQUFTLE1BQUUsRUFBQyxRQUFaO0FBQXFCLGFBQVMsRUFBQyxRQUEvQjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDSTtBQUFJLGlCQUFTLEVBQUMsT0FBZDtBQUFzQixVQUFFLEVBQUMsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFJSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsK0JBQWY7QUFBQSxpQ0FDSTtBQUFJLHFCQUFTLEVBQUMsMkJBQWQ7QUFBQSxtQ0FDSSxxRUFBQywrRUFBRDtBQUErQixxQkFBTyxFQUFFWixPQUF4QztBQUFpRCxtQkFBSyxFQUFFQyxLQUF4RDtBQUFBLHdCQUNLVSxPQUFPLENBQUNMLEdBQVIsQ0FBWSxVQUFDTyxNQUFELEVBQVNDLEtBQVQ7QUFBQSxvQ0FDVCxxRUFBQyxpRUFBRDtBQUFrQyx3QkFBTSxFQUFFRDtBQUExQyxtQkFBc0JBLE1BQU0sQ0FBQ0wsR0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEUztBQUFBLGVBQVo7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFVSSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFCSDs7R0E5QlFDLHNCOztLQUFBQSxzQjtBQWdDTUEscUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjU4MDgwMzZkZGEyOTk0NGZlZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMb2dvU3F1YXJlIGZyb20gJy4uL3NubmlwZXRzL0xvZ29TcXVhcmUnXHJcblxyXG5mdW5jdGlvbiBGZWF0dXJlZFN0b3JlcygpIHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgbGlzdEZlYXR1cmVkU3RvcmUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUpXHJcbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBmZWF0dXJlZFN0b3JlcyB9ID0gbGlzdEZlYXR1cmVkU3RvcmU7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGxpc3RGZWF0dXJlZFN0b3Jlc0FjdGlvbigpKVxyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVkLWhlYWRlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgey8qIEFQUEVBUiBPTkxZIE9OIENFTExcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmZWF0dXJlZEhlYWRlci1zdGVwIGpzLXN0ZXBJY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ1LWFycm93LWljb25cIiB2aWV3Qm94PVwiMCAwIDU0IDU0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiB4bGluazpocmVmPVwiL2ljb25zL2ljb25zLnN2ZyNhcnJvdy1pY29uXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz4gXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPiBcclxuICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8U2hvd0NvbnRlbnRXaXRoTG9hZGluZ09yRXJyb3IgbG9hZGluZz17bG9hZGluZ30gZXJyb3I9e2Vycm9yfT5cclxuICAgICAgICAgICAgICAgICAgICB7c3RvcmVzLm1hcCgoc3RvcmUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ29TcXVhcmUga2V5PXtzdG9yZS5faWR9IHN0b3JlPXtzdG9yZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2hvd0NvbnRlbnRXaXRoTG9hZGluZ09yRXJyb3I+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZWQtaGVhZGVyLWluZGljYXRvclwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZFN0b3JlcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBWYWxpZENvdXBvbkl0ZW0gZnJvbSAnLi4vc25uaXBldHMvVmFsaWRDb3Vwb25JdGVtJztcclxuaW1wb3J0IEdldEVtYWlsIGZyb20gJy4uL3NubmlwZXRzL0dldEVtYWlsJztcclxuaW1wb3J0IFNob3dDb250ZW50V2l0aExvYWRpbmdPckVycm9yIGZyb20gJy4uL3NubmlwZXRzL1Nob3dDb250ZW50V2l0aExvYWRpbmdPckVycm9yJztcclxuXHJcbmZ1bmN0aW9uIEdlbmVyYWxGZWF0dXJlZENvdXBvbnMoKSB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBsaXN0Q291cG9ucyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZSlcclxuICAgIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGNvdXBvbnMgfSA9IGxpc3RDb3Vwb25zO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChsaXN0Q291cG9uc0FjdGlvbigpKVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJtaWRkbGVcIiBjbGFzc05hbWU9XCJtaWRkbGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiIGlkPVwidG9wMjVcIj4gT3MgMjUgbWVsaG9yZXMgQ3Vwb25zIGRlIERlc2NvbnRvIGRhIHNlbWFuYSE8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayBjb3Vwb25zLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvdXBvbi1saXN0IHZhbGlkLWNvdXBvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG93Q29udGVudFdpdGhMb2FkaW5nT3JFcnJvciBsb2FkaW5nPXtsb2FkaW5nfSBlcnJvcj17ZXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vwb25zLm1hcCgoY291cG9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmFsaWRDb3Vwb25JdGVtIGtleT17Y291cG9uLl9pZH0gY291cG9uPXtjb3Vwb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Nob3dDb250ZW50V2l0aExvYWRpbmdPckVycm9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHZXRFbWFpbCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2VuZXJhbEZlYXR1cmVkQ291cG9uc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9