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
  console.log(coupons);
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

_s(IndexPage, "P44ZwXKvjZcUenJj12eotXd8v7o=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXhQYWdlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJsaXN0RmVhdHVyZWRTdG9yZSIsImxpc3RDb3Vwb25zIiwiY29uc29sZSIsImxvZyIsImxvYWRpbmciLCJlcnJvciIsImZlYXR1cmVkU3RvcmVzIiwiY291cG9ucyIsInVzZUVmZmVjdCIsImxpc3RGZWF0dXJlZFN0b3Jlc0FjdGlvbiIsImxpc3RDb3Vwb25zQWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUNsQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURrQyxxQkFFU0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBWDtBQUFBLEdBQUQsQ0FGcEI7QUFBQSxNQUUxQkMsaUJBRjBCLGdCQUUxQkEsaUJBRjBCO0FBQUEsTUFFUEMsV0FGTyxnQkFFUEEsV0FGTzs7QUFHbENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFIa0MsTUFJMUJDLE9BSjBCLEdBSVNKLGlCQUpULENBSTFCSSxPQUowQjtBQUFBLE1BSWpCQyxLQUppQixHQUlTTCxpQkFKVCxDQUlqQkssS0FKaUI7QUFBQSxNQUlWQyxjQUpVLEdBSVNOLGlCQUpULENBSVZNLGNBSlU7QUFBQSxNQUsxQkMsT0FMMEIsR0FLZE4sV0FMYyxDQUsxQk0sT0FMMEI7QUFNbENMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSSxPQUFaO0FBQ0FMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFDQUsseURBQVMsQ0FBQyxZQUFNO0FBQ2RaLFlBQVEsQ0FBQ2EsMkdBQXdCLEVBQXpCLENBQVI7QUFDQWIsWUFBUSxDQUFDYyw2RkFBaUIsRUFBbEIsQ0FBUjtBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFTLFFBQUUsRUFBQyxVQUFaO0FBQXVCLGVBQVMsRUFBQyxpQkFBakM7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSSxtQkFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsRUFHR1IsT0FBTyxDQUFDQyxHQUFSLENBQVksR0FBWixDQUhILGVBSUUscUVBQUMsK0VBQUQ7QUFBK0IsaUJBQU8sRUFBRUMsT0FBeEM7QUFBaUQsZUFBSyxFQUFFQyxLQUF4RDtBQUFBLGlDQUNFLHFFQUFDLGdFQUFEO0FBQWdCLDBCQUFjLEVBQUVDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixFQWVHSixPQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaLENBZkgsZUFnQkUscUVBQUMsK0VBQUQ7QUFBK0IsYUFBTyxFQUFFQyxPQUF4QztBQUFpRCxXQUFLLEVBQUVDLEtBQXhEO0FBQUEsNkJBQ0UscUVBQUMsd0VBQUQ7QUFBd0IsOEJBQXNCLEVBQUVFO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGO0FBQUEsa0JBREY7QUFzQkQ7O0dBbkN1QlosUztVQUNMRSx1RCxFQUMwQkMsdUQ7OztLQUZyQkgsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yN2UzYTYyYWIwMDJiOGM0Y2E2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGZWF0dXJlZFN0b3JlcyBmcm9tICcuLi9zZWN0aW9ucy9GZWF0dXJlZFN0b3Jlcyc7XG5pbXBvcnQgR2VuZXJhbEZlYXR1cmVkQ291cG9ucyBmcm9tICcuLi9zZWN0aW9ucy9HZW5lcmFsRmVhdHVyZWRDb3Vwb25zJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgU2hvd0NvbnRlbnRXaXRoTG9hZGluZ09yRXJyb3IgZnJvbSAnLi4vc25uaXBldHMvU2hvd0NvbnRlbnRXaXRoTG9hZGluZ09yRXJyb3InO1xuaW1wb3J0IHsgbGlzdEZlYXR1cmVkU3RvcmVzQWN0aW9uIH0gZnJvbSAnLi4vcmVkdXhfc3RvcmUvYWN0aW9ucy9GZWF0dXJlZFN0b3Jlc0FjdGlvbnMnO1xuaW1wb3J0IHsgbGlzdENvdXBvbnNBY3Rpb24gfSBmcm9tICcuLi9yZWR1eF9zdG9yZS9hY3Rpb25zL2NvdXBvbnNBY3Rpb25zJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBsaXN0RmVhdHVyZWRTdG9yZSwgbGlzdENvdXBvbnMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUpXG4gIGNvbnNvbGUubG9nKCcxJylcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZmVhdHVyZWRTdG9yZXMgfSA9IGxpc3RGZWF0dXJlZFN0b3JlO1xuICBjb25zdCB7IGNvdXBvbnMgfSA9IGxpc3RDb3Vwb25zO1xuICBjb25zb2xlLmxvZyhjb3Vwb25zKVxuICBjb25zb2xlLmxvZygnMicpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2gobGlzdEZlYXR1cmVkU3RvcmVzQWN0aW9uKCkpXG4gICAgZGlzcGF0Y2gobGlzdENvdXBvbnNBY3Rpb24oKSlcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TW9yYW50PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzZWN0aW9uIGlkPVwiZmVhdHVyZWRcIiBjbGFzc05hbWU9XCJmZWF0dXJlZC1zdG9yZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5DdXBvbnMgZSBjYXNoYmFjayBlbSAyLjAwMCBsb2phczwvaDE+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+RWNvbm9taXplIG5hIHN1YSBjb21wcmEgdXNhbmRvIG9zIG1lbGhvcmVzIEN1cG9ucyBkZSBEZXNjb250byBlIENhc2hiYWNrITwvaDI+XG4gICAgICAgICAge2NvbnNvbGUubG9nKCczJyl9XG4gICAgICAgICAgPFNob3dDb250ZW50V2l0aExvYWRpbmdPckVycm9yIGxvYWRpbmc9e2xvYWRpbmd9IGVycm9yPXtlcnJvcn0+XG4gICAgICAgICAgICA8RmVhdHVyZWRTdG9yZXMgZmVhdHVyZWRTdG9yZXM9e2ZlYXR1cmVkU3RvcmVzfSAvPlxuICAgICAgICAgIDwvU2hvd0NvbnRlbnRXaXRoTG9hZGluZ09yRXJyb3I+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24gPlxuICAgICAge2NvbnNvbGUubG9nKCc0Jyl9XG4gICAgICA8U2hvd0NvbnRlbnRXaXRoTG9hZGluZ09yRXJyb3IgbG9hZGluZz17bG9hZGluZ30gZXJyb3I9e2Vycm9yfT5cbiAgICAgICAgPEdlbmVyYWxGZWF0dXJlZENvdXBvbnMgZ2VuZXJhbEZlYXR1cmVkQ291cG9ucz17Y291cG9uc30gLz5cbiAgICAgIDwvU2hvd0NvbnRlbnRXaXRoTG9hZGluZ09yRXJyb3I+XG4gICAgPC8+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9