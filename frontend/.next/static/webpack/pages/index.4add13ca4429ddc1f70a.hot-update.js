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
/* harmony import */ var _snnipets_ShowContentWithLoadingOrError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../snnipets/ShowContentWithLoadingOrError */ "./snnipets/ShowContentWithLoadingOrError.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_store_actions_couponsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux_store/actions/couponsActions */ "./redux_store/actions/couponsActions.js");


var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\NextJS\\next_project\\frontend\\sections\\GeneralFeaturedCoupons.js",
    _s = $RefreshSig$();








function GeneralFeaturedCoupons() {
  _s();

  var _this = this;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state;
  }),
      listCoupons = _useSelector.listCoupons;

  var loading = listCoupons.loading,
      error = listCoupons.error,
      coupons = listCoupons.coupons;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_redux_store_actions_couponsActions__WEBPACK_IMPORTED_MODULE_6__["listCouponsAction"])());
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
        lineNumber: 20,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
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
                  lineNumber: 28,
                  columnNumber: 37
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_GetEmail__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

_s(GeneralFeaturedCoupons, "JkyCN0WJFdM51+iaj/Euo6iRCsQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvR2VuZXJhbEZlYXR1cmVkQ291cG9ucy5qcyJdLCJuYW1lcyI6WyJHZW5lcmFsRmVhdHVyZWRDb3Vwb25zIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJsaXN0Q291cG9ucyIsImxvYWRpbmciLCJlcnJvciIsImNvdXBvbnMiLCJ1c2VFZmZlY3QiLCJsaXN0Q291cG9uc0FjdGlvbiIsIm1hcCIsImNvdXBvbiIsImluZGV4IiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLHNCQUFULEdBQWtDO0FBQUE7O0FBQUE7O0FBRTlCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRjhCLHFCQUdOQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFYO0FBQUEsR0FBRCxDQUhMO0FBQUEsTUFHdEJDLFdBSHNCLGdCQUd0QkEsV0FIc0I7O0FBQUEsTUFJdEJDLE9BSnNCLEdBSU1ELFdBSk4sQ0FJdEJDLE9BSnNCO0FBQUEsTUFJYkMsS0FKYSxHQUlNRixXQUpOLENBSWJFLEtBSmE7QUFBQSxNQUlOQyxPQUpNLEdBSU1ILFdBSk4sQ0FJTkcsT0FKTTtBQUs5QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pSLFlBQVEsQ0FBQ1MsNkZBQWlCLEVBQWxCLENBQVI7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0k7QUFBUyxNQUFFLEVBQUMsUUFBWjtBQUFxQixhQUFTLEVBQUMsUUFBL0I7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0k7QUFBSSxpQkFBUyxFQUFDLE9BQWQ7QUFBc0IsVUFBRSxFQUFDLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLCtCQUFmO0FBQUEsaUNBQ0k7QUFBSSxxQkFBUyxFQUFDLDJCQUFkO0FBQUEsbUNBQ0kscUVBQUMsK0VBQUQ7QUFBK0IscUJBQU8sRUFBRUosT0FBeEM7QUFBaUQsbUJBQUssRUFBRUMsS0FBeEQ7QUFBQSx3QkFDS0MsT0FBTyxDQUFDRyxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxLQUFUO0FBQUEsb0NBQ1QscUVBQUMsaUVBQUQ7QUFBa0Msd0JBQU0sRUFBRUQ7QUFBMUMsbUJBQXNCQSxNQUFNLENBQUNFLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRFM7QUFBQSxlQUFaO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBVUkscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxQkg7O0dBOUJRZCxzQjtVQUVZRSx1RCxFQUNPQyx1RDs7O0tBSG5CSCxzQjtBQWdDTUEscUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGFkZDEzY2E0NDI5ZGRjMWY3MGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBWYWxpZENvdXBvbkl0ZW0gZnJvbSAnLi4vc25uaXBldHMvVmFsaWRDb3Vwb25JdGVtJztcclxuaW1wb3J0IEdldEVtYWlsIGZyb20gJy4uL3NubmlwZXRzL0dldEVtYWlsJztcclxuaW1wb3J0IFNob3dDb250ZW50V2l0aExvYWRpbmdPckVycm9yIGZyb20gJy4uL3NubmlwZXRzL1Nob3dDb250ZW50V2l0aExvYWRpbmdPckVycm9yJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgbGlzdENvdXBvbnNBY3Rpb24gfSBmcm9tICcuLi9yZWR1eF9zdG9yZS9hY3Rpb25zL2NvdXBvbnNBY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIEdlbmVyYWxGZWF0dXJlZENvdXBvbnMoKSB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBsaXN0Q291cG9ucyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZSlcclxuICAgIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGNvdXBvbnMgfSA9IGxpc3RDb3Vwb25zO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChsaXN0Q291cG9uc0FjdGlvbigpKVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJtaWRkbGVcIiBjbGFzc05hbWU9XCJtaWRkbGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiIGlkPVwidG9wMjVcIj4gT3MgMjUgbWVsaG9yZXMgQ3Vwb25zIGRlIERlc2NvbnRvIGRhIHNlbWFuYSE8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayBjb3Vwb25zLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvdXBvbi1saXN0IHZhbGlkLWNvdXBvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG93Q29udGVudFdpdGhMb2FkaW5nT3JFcnJvciBsb2FkaW5nPXtsb2FkaW5nfSBlcnJvcj17ZXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vwb25zLm1hcCgoY291cG9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmFsaWRDb3Vwb25JdGVtIGtleT17Y291cG9uLl9pZH0gY291cG9uPXtjb3Vwb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Nob3dDb250ZW50V2l0aExvYWRpbmdPckVycm9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHZXRFbWFpbCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2VuZXJhbEZlYXR1cmVkQ291cG9uc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9