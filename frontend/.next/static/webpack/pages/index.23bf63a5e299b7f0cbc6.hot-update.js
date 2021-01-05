webpackHotUpdate_N_E("pages/index",{

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

var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\NextJS\\next_project\\frontend\\sections\\GeneralFeaturedCoupons.js";




function GeneralFeaturedCoupons(props) {
  var _this = this;

  var coupons = props.generalFeaturedCoupons;
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
        lineNumber: 10,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "main-content ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "content-block coupons-content",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "coupon-list valid-coupons",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowContentWithLoadingOrError, {
              loading: loading,
              error: error,
              children: coupons.map(function (coupon, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_ValidCouponItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  coupon: coupon
                }, coupon._id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 37
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_GetEmail__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvR2VuZXJhbEZlYXR1cmVkQ291cG9ucy5qcyJdLCJuYW1lcyI6WyJHZW5lcmFsRmVhdHVyZWRDb3Vwb25zIiwicHJvcHMiLCJjb3Vwb25zIiwiZ2VuZXJhbEZlYXR1cmVkQ291cG9ucyIsImxvYWRpbmciLCJlcnJvciIsIm1hcCIsImNvdXBvbiIsImluZGV4IiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLHNCQUFULENBQWdDQyxLQUFoQyxFQUF1QztBQUFBOztBQUNuQyxNQUFNQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0Usc0JBQXRCO0FBQ0Esc0JBQ0k7QUFBUyxNQUFFLEVBQUMsUUFBWjtBQUFxQixhQUFTLEVBQUMsUUFBL0I7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0k7QUFBSSxpQkFBUyxFQUFDLE9BQWQ7QUFBc0IsVUFBRSxFQUFDLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLCtCQUFmO0FBQUEsaUNBQ0k7QUFBSSxxQkFBUyxFQUFDLDJCQUFkO0FBQUEsbUNBQ0kscUVBQUMsNkJBQUQ7QUFBK0IscUJBQU8sRUFBRUMsT0FBeEM7QUFBaUQsbUJBQUssRUFBRUMsS0FBeEQ7QUFBQSx3QkFDS0gsT0FBTyxDQUFDSSxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxLQUFUO0FBQUEsb0NBQ1QscUVBQUMsaUVBQUQ7QUFBa0Msd0JBQU0sRUFBRUQ7QUFBMUMsbUJBQXNCQSxNQUFNLENBQUNFLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRFM7QUFBQSxlQUFaO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBVUkscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxQkg7O0tBdkJRVCxzQjtBQXlCTUEscUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjNiZjYzYTVlMjk5YjdmMGNiYzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBWYWxpZENvdXBvbkl0ZW0gZnJvbSAnLi4vc25uaXBldHMvVmFsaWRDb3Vwb25JdGVtJztcclxuaW1wb3J0IEdldEVtYWlsIGZyb20gJy4uL3NubmlwZXRzL0dldEVtYWlsJztcclxuXHJcbmZ1bmN0aW9uIEdlbmVyYWxGZWF0dXJlZENvdXBvbnMocHJvcHMpIHtcclxuICAgIGNvbnN0IGNvdXBvbnMgPSBwcm9wcy5nZW5lcmFsRmVhdHVyZWRDb3Vwb25zO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBpZD1cIm1pZGRsZVwiIGNsYXNzTmFtZT1cIm1pZGRsZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCIgaWQ9XCJ0b3AyNVwiPiBPcyAyNSBtZWxob3JlcyBDdXBvbnMgZGUgRGVzY29udG8gZGEgc2VtYW5hITwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIGNvdXBvbnMtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY291cG9uLWxpc3QgdmFsaWQtY291cG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNob3dDb250ZW50V2l0aExvYWRpbmdPckVycm9yIGxvYWRpbmc9e2xvYWRpbmd9IGVycm9yPXtlcnJvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdXBvbnMubWFwKChjb3Vwb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWYWxpZENvdXBvbkl0ZW0ga2V5PXtjb3Vwb24uX2lkfSBjb3Vwb249e2NvdXBvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2hvd0NvbnRlbnRXaXRoTG9hZGluZ09yRXJyb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdldEVtYWlsIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZW5lcmFsRmVhdHVyZWRDb3Vwb25zXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=