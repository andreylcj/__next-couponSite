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
  }, [dispatch]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvR2VuZXJhbEZlYXR1cmVkQ291cG9ucy5qcyJdLCJuYW1lcyI6WyJHZW5lcmFsRmVhdHVyZWRDb3Vwb25zIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJsaXN0Q291cG9ucyIsImxvYWRpbmciLCJlcnJvciIsImNvdXBvbnMiLCJ1c2VFZmZlY3QiLCJsaXN0Q291cG9uc0FjdGlvbiIsIm1hcCIsImNvdXBvbiIsImluZGV4IiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLHNCQUFULEdBQWtDO0FBQUE7O0FBQUE7O0FBRTlCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRjhCLHFCQUdOQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFYO0FBQUEsR0FBRCxDQUhMO0FBQUEsTUFHdEJDLFdBSHNCLGdCQUd0QkEsV0FIc0I7O0FBQUEsTUFJdEJDLE9BSnNCLEdBSU1ELFdBSk4sQ0FJdEJDLE9BSnNCO0FBQUEsTUFJYkMsS0FKYSxHQUlNRixXQUpOLENBSWJFLEtBSmE7QUFBQSxNQUlOQyxPQUpNLEdBSU1ILFdBSk4sQ0FJTkcsT0FKTTtBQUs5QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pSLFlBQVEsQ0FBQ1MsNkZBQWlCLEVBQWxCLENBQVI7QUFDSCxHQUZRLEVBRU4sQ0FBQ1QsUUFBRCxDQUZNLENBQVQ7QUFJQSxzQkFDSTtBQUFTLE1BQUUsRUFBQyxRQUFaO0FBQXFCLGFBQVMsRUFBQyxRQUEvQjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDSTtBQUFJLGlCQUFTLEVBQUMsT0FBZDtBQUFzQixVQUFFLEVBQUMsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFJSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsK0JBQWY7QUFBQSxpQ0FDSTtBQUFJLHFCQUFTLEVBQUMsMkJBQWQ7QUFBQSxtQ0FDSSxxRUFBQywrRUFBRDtBQUErQixxQkFBTyxFQUFFSyxPQUF4QztBQUFpRCxtQkFBSyxFQUFFQyxLQUF4RDtBQUFBLHdCQUNLQyxPQUFPLENBQUNHLEdBQVIsQ0FBWSxVQUFDQyxNQUFELEVBQVNDLEtBQVQ7QUFBQSxvQ0FDVCxxRUFBQyxpRUFBRDtBQUFrQyx3QkFBTSxFQUFFRDtBQUExQyxtQkFBc0JBLE1BQU0sQ0FBQ0UsR0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEUztBQUFBLGVBQVo7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFVSSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFCSDs7R0E5QlFkLHNCO1VBRVlFLHVELEVBQ09DLHVEOzs7S0FIbkJILHNCO0FBZ0NNQSxxRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZGM4ZDZlZWJiYWFkOWUxODFjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZhbGlkQ291cG9uSXRlbSBmcm9tICcuLi9zbm5pcGV0cy9WYWxpZENvdXBvbkl0ZW0nO1xyXG5pbXBvcnQgR2V0RW1haWwgZnJvbSAnLi4vc25uaXBldHMvR2V0RW1haWwnO1xyXG5pbXBvcnQgU2hvd0NvbnRlbnRXaXRoTG9hZGluZ09yRXJyb3IgZnJvbSAnLi4vc25uaXBldHMvU2hvd0NvbnRlbnRXaXRoTG9hZGluZ09yRXJyb3InXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBsaXN0Q291cG9uc0FjdGlvbiB9IGZyb20gJy4uL3JlZHV4X3N0b3JlL2FjdGlvbnMvY291cG9uc0FjdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gR2VuZXJhbEZlYXR1cmVkQ291cG9ucygpIHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IGxpc3RDb3Vwb25zIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlKVxyXG4gICAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgY291cG9ucyB9ID0gbGlzdENvdXBvbnM7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGxpc3RDb3Vwb25zQWN0aW9uKCkpXHJcbiAgICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwibWlkZGxlXCIgY2xhc3NOYW1lPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIiBpZD1cInRvcDI1XCI+IE9zIDI1IG1lbGhvcmVzIEN1cG9ucyBkZSBEZXNjb250byBkYSBzZW1hbmEhPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudCBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgY291cG9ucy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb3Vwb24tbGlzdCB2YWxpZC1jb3Vwb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvd0NvbnRlbnRXaXRoTG9hZGluZ09yRXJyb3IgbG9hZGluZz17bG9hZGluZ30gZXJyb3I9e2Vycm9yfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291cG9ucy5tYXAoKGNvdXBvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZhbGlkQ291cG9uSXRlbSBrZXk9e2NvdXBvbi5faWR9IGNvdXBvbj17Y291cG9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TaG93Q29udGVudFdpdGhMb2FkaW5nT3JFcnJvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8R2V0RW1haWwgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdlbmVyYWxGZWF0dXJlZENvdXBvbnNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==