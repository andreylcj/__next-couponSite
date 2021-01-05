webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sections_FeaturedStores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/FeaturedStores */ "./sections/FeaturedStores.js");
/* harmony import */ var _sections_GeneralFeaturedCoupons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/GeneralFeaturedCoupons */ "./sections/GeneralFeaturedCoupons.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _snnipets_ShowContentWithLoadingOrError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../snnipets/ShowContentWithLoadingOrError */ "./snnipets/ShowContentWithLoadingOrError.js");
/* harmony import */ var _redux_store_actions_FeaturedStoresActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux_store/actions/FeaturedStoresActions */ "./redux_store/actions/FeaturedStoresActions.js");
/* harmony import */ var _redux_store_actions_couponsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux_store/actions/couponsActions */ "./redux_store/actions/couponsActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\NextJS\\next_project\\frontend\\pages\\index.js",
    _s = $RefreshSig$();









function IndexPage() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state;
  }),
      listFeaturedStore = _useSelector.listFeaturedStore,
      listCoupons = _useSelector.listCoupons;

  console.log('1');
  var loading = listFeaturedStore.loading,
      error = listFeaturedStore.error,
      featuredStores = listFeaturedStore.featuredStores;
  var coupons = listCoupons.coupons;
  console.log(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state;
  }));
  console.log('2');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_redux_store_actions_FeaturedStoresActions__WEBPACK_IMPORTED_MODULE_6__["listFeaturedStoresAction"])());
    dispatch(Object(_redux_store_actions_couponsActions__WEBPACK_IMPORTED_MODULE_7__["listCouponsAction"])());
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Morant"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      id: "featured",
      className: "featured-stores",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "title",
          children: "Cupons e cashback em 2.000 lojas"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "subtitle",
          children: "Economize na sua compra usando os melhores Cupons de Desconto e Cashback!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this), console.log('3'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_ShowContentWithLoadingOrError__WEBPACK_IMPORTED_MODULE_5__["default"], {
          loading: loading,
          error: error,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sections_FeaturedStores__WEBPACK_IMPORTED_MODULE_2__["default"], {
            featuredStores: featuredStores
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), console.log('4'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_ShowContentWithLoadingOrError__WEBPACK_IMPORTED_MODULE_5__["default"], {
      loading: loading,
      error: error,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sections_GeneralFeaturedCoupons__WEBPACK_IMPORTED_MODULE_3__["default"], {
        generalFeaturedCoupons: coupons
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(IndexPage, "jWTyrax3qlEWOuD05Ycd2lcEeUw=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"]];
});

_c = IndexPage;

var _c;

$RefreshReg$(_c, "IndexPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXhQYWdlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJsaXN0RmVhdHVyZWRTdG9yZSIsImxpc3RDb3Vwb25zIiwiY29uc29sZSIsImxvZyIsImxvYWRpbmciLCJlcnJvciIsImZlYXR1cmVkU3RvcmVzIiwiY291cG9ucyIsInVzZUVmZmVjdCIsImxpc3RGZWF0dXJlZFN0b3Jlc0FjdGlvbiIsImxpc3RDb3Vwb25zQWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUNsQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURrQyxxQkFFU0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBWDtBQUFBLEdBQUQsQ0FGcEI7QUFBQSxNQUUxQkMsaUJBRjBCLGdCQUUxQkEsaUJBRjBCO0FBQUEsTUFFUEMsV0FGTyxnQkFFUEEsV0FGTzs7QUFHbENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFIa0MsTUFJMUJDLE9BSjBCLEdBSVNKLGlCQUpULENBSTFCSSxPQUowQjtBQUFBLE1BSWpCQyxLQUppQixHQUlTTCxpQkFKVCxDQUlqQkssS0FKaUI7QUFBQSxNQUlWQyxjQUpVLEdBSVNOLGlCQUpULENBSVZNLGNBSlU7QUFBQSxNQUsxQkMsT0FMMEIsR0FLZE4sV0FMYyxDQUsxQk0sT0FMMEI7QUFNbENMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFYO0FBQUEsR0FBRCxDQUF2QjtBQUNBRyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaO0FBQ0FLLHlEQUFTLENBQUMsWUFBTTtBQUNkWixZQUFRLENBQUNhLDJHQUF3QixFQUF6QixDQUFSO0FBQ0FiLFlBQVEsQ0FBQ2MsNkZBQWlCLEVBQWxCLENBQVI7QUFDRCxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0Esc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBUyxRQUFFLEVBQUMsVUFBWjtBQUF1QixlQUFTLEVBQUMsaUJBQWpDO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUksbUJBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLEVBR0dSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVosQ0FISCxlQUlFLHFFQUFDLCtFQUFEO0FBQStCLGlCQUFPLEVBQUVDLE9BQXhDO0FBQWlELGVBQUssRUFBRUMsS0FBeEQ7QUFBQSxpQ0FDRSxxRUFBQyxnRUFBRDtBQUFnQiwwQkFBYyxFQUFFQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsRUFlR0osT0FBTyxDQUFDQyxHQUFSLENBQVksR0FBWixDQWZILGVBZ0JFLHFFQUFDLCtFQUFEO0FBQStCLGFBQU8sRUFBRUMsT0FBeEM7QUFBaUQsV0FBSyxFQUFFQyxLQUF4RDtBQUFBLDZCQUNFLHFFQUFDLHdFQUFEO0FBQXdCLDhCQUFzQixFQUFFRTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRjtBQUFBLGtCQURGO0FBc0JEOztHQW5DdUJaLFM7VUFDTEUsdUQsRUFDMEJDLHVELEVBSS9CQSx1RDs7O0tBTlVILFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDhhYjAyZjdhNDYxYTc3NDFlM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmVhdHVyZWRTdG9yZXMgZnJvbSAnLi4vc2VjdGlvbnMvRmVhdHVyZWRTdG9yZXMnO1xuaW1wb3J0IEdlbmVyYWxGZWF0dXJlZENvdXBvbnMgZnJvbSAnLi4vc2VjdGlvbnMvR2VuZXJhbEZlYXR1cmVkQ291cG9ucyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFNob3dDb250ZW50V2l0aExvYWRpbmdPckVycm9yIGZyb20gJy4uL3NubmlwZXRzL1Nob3dDb250ZW50V2l0aExvYWRpbmdPckVycm9yJztcbmltcG9ydCB7IGxpc3RGZWF0dXJlZFN0b3Jlc0FjdGlvbiB9IGZyb20gJy4uL3JlZHV4X3N0b3JlL2FjdGlvbnMvRmVhdHVyZWRTdG9yZXNBY3Rpb25zJztcbmltcG9ydCB7IGxpc3RDb3Vwb25zQWN0aW9uIH0gZnJvbSAnLi4vcmVkdXhfc3RvcmUvYWN0aW9ucy9jb3Vwb25zQWN0aW9ucyc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgbGlzdEZlYXR1cmVkU3RvcmUsIGxpc3RDb3Vwb25zIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlKVxuICBjb25zb2xlLmxvZygnMScpXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGZlYXR1cmVkU3RvcmVzIH0gPSBsaXN0RmVhdHVyZWRTdG9yZTtcbiAgY29uc3QgeyBjb3Vwb25zIH0gPSBsaXN0Q291cG9ucztcbiAgY29uc29sZS5sb2codXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZSkpXG4gIGNvbnNvbGUubG9nKCcyJylcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChsaXN0RmVhdHVyZWRTdG9yZXNBY3Rpb24oKSlcbiAgICBkaXNwYXRjaChsaXN0Q291cG9uc0FjdGlvbigpKVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Nb3JhbnQ8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHNlY3Rpb24gaWQ9XCJmZWF0dXJlZFwiIGNsYXNzTmFtZT1cImZlYXR1cmVkLXN0b3Jlc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkN1cG9ucyBlIGNhc2hiYWNrIGVtIDIuMDAwIGxvamFzPC9oMT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5FY29ub21pemUgbmEgc3VhIGNvbXByYSB1c2FuZG8gb3MgbWVsaG9yZXMgQ3Vwb25zIGRlIERlc2NvbnRvIGUgQ2FzaGJhY2shPC9oMj5cbiAgICAgICAgICB7Y29uc29sZS5sb2coJzMnKX1cbiAgICAgICAgICA8U2hvd0NvbnRlbnRXaXRoTG9hZGluZ09yRXJyb3IgbG9hZGluZz17bG9hZGluZ30gZXJyb3I9e2Vycm9yfT5cbiAgICAgICAgICAgIDxGZWF0dXJlZFN0b3JlcyBmZWF0dXJlZFN0b3Jlcz17ZmVhdHVyZWRTdG9yZXN9IC8+XG4gICAgICAgICAgPC9TaG93Q29udGVudFdpdGhMb2FkaW5nT3JFcnJvcj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbiA+XG4gICAgICB7Y29uc29sZS5sb2coJzQnKX1cbiAgICAgIDxTaG93Q29udGVudFdpdGhMb2FkaW5nT3JFcnJvciBsb2FkaW5nPXtsb2FkaW5nfSBlcnJvcj17ZXJyb3J9PlxuICAgICAgICA8R2VuZXJhbEZlYXR1cmVkQ291cG9ucyBnZW5lcmFsRmVhdHVyZWRDb3Vwb25zPXtjb3Vwb25zfSAvPlxuICAgICAgPC9TaG93Q29udGVudFdpdGhMb2FkaW5nT3JFcnJvcj5cbiAgICA8Lz5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=