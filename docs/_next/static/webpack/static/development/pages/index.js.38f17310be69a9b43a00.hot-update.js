webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");

var _jsxFileName = "/Users/wasu.l/Documents/workspace/wasuwat/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 2.5rem;\n  @media (max-width: 525px) {\n    margin-left: 1.5rem;\n    ul li {\n      margin: 1rem 0;\n      list-style-type: circle;\n    }\n    ul li span {\n      color: #c7c7c7;\n      font-weight: 300;\n    }\n  }\n\n  @media (min-width: 526px) {\n    margin: 1rem;\n    width: 50%;\n    display: inline-block;\n    ul li {\n      margin: 1rem 0;\n      list-style-type: circle;\n    }\n    ul li span {\n      color: #c7c7c7;\n      font-weight: 300;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  img {\n    filter: none;\n    width: 100%;\n    border-radius: 50%;\n  }\n  @media (max-width: 525px) {\n    width: 75%;\n    margin: 2rem auto;\n    img {\n      margin: 0 auto;\n    }\n  }\n  @media (min-width: 526px) {\n    width: 30%;\n    display: inline-block;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  q {\n    font-style: italic;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  html,body {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    color:#c7c7c7;\n    background-color: black;\n    font-family: 'Roboto Mono', sans-serif;\n    font-weight:300;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["injectGlobal"])(_templateObject());
var expandWidth = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(["from{width:0vw;}to{width:100vw;}"]);
var ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__ProgressBar",
  componentId: "otpqae-0"
})(["width:0vw;height:3px;background-color:white;position:absolute;animation:", " 400ms ease-in;"], expandWidth);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__Container",
  componentId: "otpqae-1"
})(["min-height:100%;display:flex;flex-direction:column;justify-content:flex-start;background-color:black;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].main.withConfig({
  displayName: "pages__Content",
  componentId: "otpqae-2"
})(["order:2;flex-grow:1;flex-shrink:1;flex-basis:auto;padding:2rem;@media (min-width:320px) and (max-width:425px){padding:0 1.5rem;}@media (min-width:426px) and (max-width:600px){padding:0 12%;}@media (min-width:600px) and (max-width:767px){padding:0 15%;}@media (min-width:768px) and (max-width:1024px){padding:0 18%;}@media (min-width:1025px){padding:0 25%;}"]);
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].footer.withConfig({
  displayName: "pages__Footer",
  componentId: "otpqae-3"
})(["order:3;flex-shrink:0;text-align:center;align-self:flex-end;height:60px;width:100%;color:white;"]);
var FooterText = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "pages__FooterText",
  componentId: "otpqae-4"
})(["color:#c7c7c7;padding:2rem;text-align:center;font-size:1rem;font-weight:300;"]);
var TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__TitleContainer",
  componentId: "otpqae-5"
})(["@media (max-width:425px){padding:0.5rem;}@media (min-width:426px){padding:0.25rem;}"]);
var bounce = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(["from,20%,53%,80%,to{transform:translate3d(0,0,0);}40%,43%{transform:translate3d(0,-15px,0);}70%{transform:translate3d(0,-7px,0);}90%{transform:translate3d(0,-2px,0);}"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1.withConfig({
  displayName: "pages__Title",
  componentId: "otpqae-6"
})(["color:white;font-weight:700;animation:", " 1s ease;transform-origin:center bottom;@media (max-width:375px){font-size:2.45rem;}@media (min-width:376px){font-size:3rem;}"], bounce);
var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "pages__SubTitle",
  componentId: "otpqae-7"
})(["color:#c7c7c7;width:95%;padding:0.25rem 1.5rem;font-weight:700;font-size:1.25rem;"]);
var Box = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__Box",
  componentId: "otpqae-8"
})(["width:100%;margin:1rem 0;border:1px solid white;background-color:black;"]);
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__ImageContainer",
  componentId: "otpqae-9"
})(["@media (max-width:767px){margin:1rem;}@media (min-width:768px){margin:2rem;}img{filter:grayscale();width:100%;height:100%;}"]);
var BoxContent = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__BoxContent",
  componentId: "otpqae-10"
})(["color:#c7c7c7;margin:2.35rem;font-size:0.95rem;font-weight:300;word-wrap:normal;@media (max-width:426px){margin:1.5rem;line-height:1.65rem;}"]);
var QuoteContent = BoxContent.extend(_templateObject2());
var ProfileImageContainer = ImageContainer.extend(_templateObject3());
var ProfileContent = BoxContent.extend(_templateObject4());
var Socials = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].section.withConfig({
  displayName: "pages__Socials",
  componentId: "otpqae-11"
})(["display:flex;justify-content:center;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "pages__Button",
  componentId: "otpqae-12"
})(["cursor:pointer;background-color:black;margin:0 0.85rem;margin-top:1rem;padding:0.7rem 1.25rem;font-size:0.85rem;font-weight:300;font-family:'Roboto Mono',sans-serif;box-shadow:3px 4px 0px -1px #ececec;a{text-decoration:none;color:white;}"]);

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$props$data = this.props.data,
          _this$props$data$avat = _this$props$data.avatar_url,
          avatar_url = _this$props$data$avat === void 0 ? 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png' : _this$props$data$avat,
          _this$props$data$name = _this$props$data.name,
          name = _this$props$data$name === void 0 ? 'Wasuwat Limsuparhat' : _this$props$data$name,
          _this$props$data$loca = _this$props$data.location,
          location = _this$props$data$loca === void 0 ? 'Thailand' : _this$props$data$loca,
          _this$props$data$comp = _this$props$data.company,
          company = _this$props$data$comp === void 0 ? '' : _this$props$data$comp,
          _this$props$data$bio = _this$props$data.bio,
          bio = _this$props$data$bio === void 0 ? '' : _this$props$data$bio;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProgressBar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "#helloworld")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Box, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProfileImageContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: avatar_url,
        alt: "Profile image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProfileContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, "Who am I"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, location, " based dev")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, "Fluent in Thai & English")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "Hired : ", company))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Box, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, "What I do"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BoxContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, "My skill set and interests are primarily on web development with Javascript. I am capable of doing both front-end and back-end web development, but I do have preference over doing front-end. My other interests includes blockchain and cryptocurrency technologies."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BoxContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, "Having learn")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Socials, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://medium.com/@phet.w",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, "Medium")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://github.com/rappad",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, "Github")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://codepen.io/rappad/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, "Codepen")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, "\xA9 Wasuwat Limsuparhat | 2018")));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://api.github.com/users/rappad');

              case 2:
                _ref = _context.sent;
                data = _ref.data;
                return _context.abrupt("return", {
                  data: data
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.38f17310be69a9b43a00.hot-update.js.map