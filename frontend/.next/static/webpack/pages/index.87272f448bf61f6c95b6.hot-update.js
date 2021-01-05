webpackHotUpdate_N_E("pages/index",{

/***/ "./redux_store/actions/featuredStoresActions.js":
/*!******************************************************!*\
  !*** ./redux_store/actions/featuredStoresActions.js ***!
  \******************************************************/
/*! exports provided: listFeaturedStoresAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listFeaturedStoresAction", function() { return listFeaturedStoresAction; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _constants_featuredStoresConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/featuredStoresConstants */ "./redux_store/constants/featuredStoresConstants.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




var listFeaturedStoresAction = function listFeaturedStoresAction() {
  return /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var _yield$Axios$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _constants_featuredStoresConstants__WEBPACK_IMPORTED_MODULE_2__["FEATURED_STORE_REQUEST"]
              });
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://localhost:5000/api/stores/index-featured-estores');

            case 4:
              _yield$Axios$get = _context.sent;
              data = _yield$Axios$get.data;
              dispatch({
                type: _constants_featuredStoresConstants__WEBPACK_IMPORTED_MODULE_2__["FEATURED_STORE_SUCCESS"],
                payload: data
              });
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              dispatch({
                type: _constants_featuredStoresConstants__WEBPACK_IMPORTED_MODULE_2__["FEATURED_STORE_FAIL"],
                payload: _context.t0.message
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
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
/* harmony import */ var _snnipets_ShowContentWithLoadingOrError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../snnipets/ShowContentWithLoadingOrError */ "./snnipets/ShowContentWithLoadingOrError.js");
/* harmony import */ var _redux_store_actions_featuredStoresActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux_store/actions/featuredStoresActions */ "./redux_store/actions/featuredStoresActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\NextJS\\next_project\\frontend\\sections\\FeaturedStores.js",
    _s = $RefreshSig$();







function FeaturedStores() {
  _s();

  var _this = this;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state;
  }),
      listFeaturedStore = _useSelector.listFeaturedStore;

  var loading = listFeaturedStore.loading,
      error = listFeaturedStore.error,
      featuredStores = listFeaturedStore.featuredStores;
  var stores = featuredStores;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_redux_store_actions_featuredStoresActions__WEBPACK_IMPORTED_MODULE_4__["listFeaturedStoresAction"])());
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "featured-header-container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "list",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_ShowContentWithLoadingOrError__WEBPACK_IMPORTED_MODULE_3__["default"], {
        loading: loading,
        error: error,
        children: stores.map(function (store) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_LogoSquare__WEBPACK_IMPORTED_MODULE_2__["default"], {
            store: store
          }, store._id, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "featured-header-indicator"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

_s(FeaturedStores, "Zhn2OGd3CWsULIMsbLvod3Bjl1o=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXhfc3RvcmUvYWN0aW9ucy9mZWF0dXJlZFN0b3Jlc0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NlY3Rpb25zL0ZlYXR1cmVkU3RvcmVzLmpzIl0sIm5hbWVzIjpbImxpc3RGZWF0dXJlZFN0b3Jlc0FjdGlvbiIsImRpc3BhdGNoIiwidHlwZSIsIkZFQVRVUkVEX1NUT1JFX1JFUVVFU1QiLCJBeGlvcyIsImdldCIsImRhdGEiLCJGRUFUVVJFRF9TVE9SRV9TVUNDRVNTIiwicGF5bG9hZCIsIkZFQVRVUkVEX1NUT1JFX0ZBSUwiLCJtZXNzYWdlIiwiRmVhdHVyZWRTdG9yZXMiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJsaXN0RmVhdHVyZWRTdG9yZSIsImxvYWRpbmciLCJlcnJvciIsImZlYXR1cmVkU3RvcmVzIiwic3RvcmVzIiwidXNlRWZmZWN0IiwibWFwIiwic3RvcmUiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkI7QUFBQTtBQUFBLGdNQUFNLGlCQUFPQyxRQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDMUNBLHNCQUFRLENBQUM7QUFDTEMsb0JBQUksRUFBRUMseUZBQXNCQTtBQUR2QixlQUFELENBQVI7QUFEMEM7QUFBQTtBQUFBLHFCQUtmQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUseURBQVYsQ0FMZTs7QUFBQTtBQUFBO0FBSzlCQyxrQkFMOEIsb0JBSzlCQSxJQUw4QjtBQU10Q0wsc0JBQVEsQ0FBQztBQUFFQyxvQkFBSSxFQUFFSyx5RkFBUjtBQUFnQ0MsdUJBQU8sRUFBRUY7QUFBekMsZUFBRCxDQUFSO0FBTnNDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBUXRDTCxzQkFBUSxDQUFDO0FBQUVDLG9CQUFJLEVBQUVPLHNGQUFSO0FBQTZCRCx1QkFBTyxFQUFFLFlBQU1FO0FBQTVDLGVBQUQsQ0FBUjs7QUFSc0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQWpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsY0FBVCxHQUEwQjtBQUFBOztBQUFBOztBQUN0QixNQUFNVixRQUFRLEdBQUdXLCtEQUFXLEVBQTVCOztBQURzQixxQkFFUUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBWDtBQUFBLEdBQUQsQ0FGbkI7QUFBQSxNQUVkQyxpQkFGYyxnQkFFZEEsaUJBRmM7O0FBQUEsTUFHZEMsT0FIYyxHQUdxQkQsaUJBSHJCLENBR2RDLE9BSGM7QUFBQSxNQUdMQyxLQUhLLEdBR3FCRixpQkFIckIsQ0FHTEUsS0FISztBQUFBLE1BR0VDLGNBSEYsR0FHcUJILGlCQUhyQixDQUdFRyxjQUhGO0FBSXRCLE1BQU1DLE1BQU0sR0FBR0QsY0FBZjtBQUNBRSx5REFBUyxDQUFDLFlBQU07QUFDWm5CLFlBQVEsQ0FBQ0QsMkdBQXdCLEVBQXpCLENBQVI7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsMkJBQWY7QUFBQSw0QkFRSTtBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUEsNkJBQ0kscUVBQUMsK0VBQUQ7QUFBK0IsZUFBTyxFQUFFZ0IsT0FBeEM7QUFBaUQsYUFBSyxFQUFFQyxLQUF4RDtBQUFBLGtCQUNLRSxNQUFNLENBQUNFLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsOEJBQ1IscUVBQUMsNERBQUQ7QUFBNEIsaUJBQUssRUFBRUE7QUFBbkMsYUFBaUJBLEtBQUssQ0FBQ0MsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUTtBQUFBLFNBQVg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKLGVBZUk7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQkg7O0dBM0JRWixjO1VBQ1lDLHVELEVBQ2FDLHVEOzs7S0FGekJGLGM7QUE2Qk1BLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg3MjcyZjQ0OGJmNjFmNmM5NWI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGRUFUVVJFRF9TVE9SRV9GQUlMLCBGRUFUVVJFRF9TVE9SRV9SRVFVRVNULCBGRUFUVVJFRF9TVE9SRV9TVUNDRVNTIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9mZWF0dXJlZFN0b3Jlc0NvbnN0YW50c1wiXHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0RmVhdHVyZWRTdG9yZXNBY3Rpb24gPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBGRUFUVVJFRF9TVE9SRV9SRVFVRVNUXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBBeGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvc3RvcmVzL2luZGV4LWZlYXR1cmVkLWVzdG9yZXMnKTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEZFQVRVUkVEX1NUT1JFX1NVQ0NFU1MsIHBheWxvYWQ6IGRhdGEgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBGRUFUVVJFRF9TVE9SRV9GQUlMLCBwYXlsb2FkOiBlcnJvci5tZXNzYWdlIH0pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTG9nb1NxdWFyZSBmcm9tICcuLi9zbm5pcGV0cy9Mb2dvU3F1YXJlJ1xyXG5pbXBvcnQgU2hvd0NvbnRlbnRXaXRoTG9hZGluZ09yRXJyb3IgZnJvbSAnLi4vc25uaXBldHMvU2hvd0NvbnRlbnRXaXRoTG9hZGluZ09yRXJyb3InO1xyXG5pbXBvcnQgeyBsaXN0RmVhdHVyZWRTdG9yZXNBY3Rpb24gfSBmcm9tICcuLi9yZWR1eF9zdG9yZS9hY3Rpb25zL2ZlYXR1cmVkU3RvcmVzQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuZnVuY3Rpb24gRmVhdHVyZWRTdG9yZXMoKSB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IGxpc3RGZWF0dXJlZFN0b3JlIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlKVxyXG4gICAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZmVhdHVyZWRTdG9yZXMgfSA9IGxpc3RGZWF0dXJlZFN0b3JlO1xyXG4gICAgY29uc3Qgc3RvcmVzID0gZmVhdHVyZWRTdG9yZXM7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGxpc3RGZWF0dXJlZFN0b3Jlc0FjdGlvbigpKVxyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVkLWhlYWRlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgey8qIEFQUEVBUiBPTkxZIE9OIENFTExcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmZWF0dXJlZEhlYWRlci1zdGVwIGpzLXN0ZXBJY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ1LWFycm93LWljb25cIiB2aWV3Qm94PVwiMCAwIDU0IDU0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiB4bGluazpocmVmPVwiL2ljb25zL2ljb25zLnN2ZyNhcnJvdy1pY29uXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz4gXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPiBcclxuICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8U2hvd0NvbnRlbnRXaXRoTG9hZGluZ09yRXJyb3IgbG9hZGluZz17bG9hZGluZ30gZXJyb3I9e2Vycm9yfT5cclxuICAgICAgICAgICAgICAgICAgICB7c3RvcmVzLm1hcCgoc3RvcmUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ29TcXVhcmUga2V5PXtzdG9yZS5faWR9IHN0b3JlPXtzdG9yZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2hvd0NvbnRlbnRXaXRoTG9hZGluZ09yRXJyb3I+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZWQtaGVhZGVyLWluZGljYXRvclwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZFN0b3JlcyJdLCJzb3VyY2VSb290IjoiIn0=