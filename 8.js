(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{168:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r,a,o=n(279),i=(r=o)&&r.__esModule?r:{default:r};(a=n(4).enterModule)&&a(e);var _,l,u=i.default;t.default=u,_=n(4).default,l=n(4).leaveModule,_&&(_.register(u,"default","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/Home/index.js"),l(e))}).call(this,n(20)(e))},268:function(e,t,n){e.exports=n.p+"82b442f274b32cc59f514150db0b52ed.gif"},269:function(e,t,n){e.exports=n.p+"80d3cff536875f84410c9b9f0541c371.gif"},270:function(e,t,n){e.exports=n.p+"3b4ab2fc2da8c67d1a2f3660dfc5afa9.gif"},271:function(e,t,n){e.exports=n.p+"133cf574803f2c6b67aa286556a9fd30.gif"},272:function(e,t,n){e.exports=n.p+"a512de37e6b86d17829d83dcb60c1f64.png"},273:function(e){e.exports=[{id:1,c_name:"購物車",e_name:"ShoppingCart",description:"讓使用者在網頁上選購商品加入購物車進行結帳",path:"#/ShoppingCart",github:""},{id:2,c_name:"貪食蛇",e_name:"SnakeGame",description:"操作方向鍵上下左右移動蛇吃餌, 髓著分數越高身體越長",path:"#/SnakeGame",github:"https://github.com/jhongyi/react-snake-game"},{id:3,c_name:"終極密碼",e_name:"DaVinciCode",description:"根據猜測數字太大或太小而進行的益智遊戲",path:"#/DaVinciCode",github:"https://github.com/jhongyi/react-da-vinci-code"},{id:4,c_name:"撲克排序",e_name:"PokerOrder",description:"選擇十三張牌後可依據花色或是大小後進行排序",path:"#/PokerOrder",github:""}]},278:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _getPrototypeOf=__webpack_require__(59),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__(58),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(57),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__(56),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__(55),_inherits3=_interopRequireDefault(_inherits2),_taggedTemplateLiteral2=__webpack_require__(86),_taggedTemplateLiteral3=_interopRequireDefault(_taggedTemplateLiteral2),_templateObject=(0,_taggedTemplateLiteral3.default)(["\n  position: relative;\n  background: #fff;\n  padding: 1rem 1rem;\n  // height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-content: flex-start;\n  flex-wrap: wrap;\n  .card {\n    margin-bottom: 1rem;\n    width: 32%;\n    img {\n      max-height: 15rem;\n    }\n    .link {\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      padding: 0.2rem;\n      img {\n        width: 2rem;\n        height: 2rem;\n      }\n    }\n  }\n"],["\n  position: relative;\n  background: #fff;\n  padding: 1rem 1rem;\n  // height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-content: flex-start;\n  flex-wrap: wrap;\n  .card {\n    margin-bottom: 1rem;\n    width: 32%;\n    img {\n      max-height: 15rem;\n    }\n    .link {\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      padding: 0.2rem;\n      img {\n        width: 2rem;\n        height: 2rem;\n      }\n    }\n  }\n"]),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_styledComponents=__webpack_require__(60),_styledComponents2=_interopRequireDefault(_styledComponents),_reactstrap=__webpack_require__(175),_Works=__webpack_require__(273),_Works2=_interopRequireDefault(_Works),_github=__webpack_require__(272),_github2=_interopRequireDefault(_github),_ShoppingCart=__webpack_require__(271),_ShoppingCart2=_interopRequireDefault(_ShoppingCart),_SnakeGame=__webpack_require__(270),_SnakeGame2=_interopRequireDefault(_SnakeGame),_DavinciCode=__webpack_require__(269),_DavinciCode2=_interopRequireDefault(_DavinciCode),_PokerOrder=__webpack_require__(268),_PokerOrder2=_interopRequireDefault(_PokerOrder),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}enterModule=__webpack_require__(4).enterModule,enterModule&&enterModule(module);var Div=_styledComponents2.default.div(_templateObject),Works=function(_Component){function Works(){return(0,_classCallCheck3.default)(this,Works),(0,_possibleConstructorReturn3.default)(this,(Works.__proto__||(0,_getPrototypeOf2.default)(Works)).apply(this,arguments))}return(0,_inherits3.default)(Works,_Component),(0,_createClass3.default)(Works,[{key:"render",value:function(){return _react2.default.createElement(Div,null,_Works2.default.map(function(e,t){var n="";switch(e.e_name){case"ShoppingCart":n=_ShoppingCart2.default;break;case"SnakeGame":n=_SnakeGame2.default;break;case"DaVinciCode":n=_DavinciCode2.default;break;case"PokerOrder":n=_PokerOrder2.default}return _react2.default.createElement(_reactstrap.Card,{key:e.id},_react2.default.createElement(_reactstrap.CardImg,{top:!0,src:n,alt:e.e_name}),_react2.default.createElement(_reactstrap.CardBody,null,_react2.default.createElement(_reactstrap.CardTitle,null,_react2.default.createElement("a",{href:e.path},e.c_name)),_react2.default.createElement(_reactstrap.CardText,null,e.description),""!==e.github&&_react2.default.createElement("div",{className:"link"},_react2.default.createElement("a",{target:"blank",href:e.github},_react2.default.createElement("img",{src:_github2.default})))))}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Works}(_react.Component),_default=Works,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__(4).default,leaveModule=__webpack_require__(4).leaveModule,reactHotLoader&&(reactHotLoader.register(Div,"Div","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/Home/Works.js"),reactHotLoader.register(Works,"Works","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/Home/Works.js"),reactHotLoader.register(_default,"default","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/Home/Works.js"),leaveModule(module))}).call(this,__webpack_require__(20)(module))},279:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _getPrototypeOf=__webpack_require__(59),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__(58),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(57),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__(56),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__(55),_inherits3=_interopRequireDefault(_inherits2),_taggedTemplateLiteral2=__webpack_require__(86),_taggedTemplateLiteral3=_interopRequireDefault(_taggedTemplateLiteral2),_templateObject=(0,_taggedTemplateLiteral3.default)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  div {\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center center;\n  }\n  a {\n    text-decoration: none;\n  }\n  .bg {\n    background-image: url(",");\n  }\n  .blur {\n    opacity: 0;\n    background-image: url(",");\n  }\n"],["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  div {\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center center;\n  }\n  a {\n    text-decoration: none;\n  }\n  .bg {\n    background-image: url(",");\n  }\n  .blur {\n    opacity: 0;\n    background-image: url(",");\n  }\n"]),_templateObject2=(0,_taggedTemplateLiteral3.default)(["\n  z-index: 1;\n  top: 0;\n  width: 100%;\n  padding: 0px 20px;\n  div {\n    max-width: 600px;\n    margin: 0 auto;\n    padding-top: 45vh;\n    height: 100vh;\n    text-align: center;\n    color: White;\n    h1 {\n      font-weight: 800;\n      font-size: 3.4em;\n      margin-bottom: 0.2em;\n    }\n    a {\n      font-size: 0.8em;\n      letter-spacing: 0.08em;\n      color: rgba(255,255,255,0.85);\n      line-height: 30px;\n      padding: 7px 14px;\n      border: 1px solid rgba(255,255,255,0.3);\n      border-radius: 2em;\n      transition: all 0.3s ease;\n      &:hover {\n        background: #fff;\n        color: #fff;\n      }\n    }\n    p {\n      font-size: 1.5em;\n      margin-bottom: 0.7em;\n      font-family: Times New Roman;\n    }\n  }\n"],["\n  z-index: 1;\n  top: 0;\n  width: 100%;\n  padding: 0px 20px;\n  div {\n    max-width: 600px;\n    margin: 0 auto;\n    padding-top: 45vh;\n    height: 100vh;\n    text-align: center;\n    color: White;\n    h1 {\n      font-weight: 800;\n      font-size: 3.4em;\n      margin-bottom: 0.2em;\n    }\n    a {\n      font-size: 0.8em;\n      letter-spacing: 0.08em;\n      color: rgba(255,255,255,0.85);\n      line-height: 30px;\n      padding: 7px 14px;\n      border: 1px solid rgba(255,255,255,0.3);\n      border-radius: 2em;\n      transition: all 0.3s ease;\n      &:hover {\n        background: #fff;\n        color: #fff;\n      }\n    }\n    p {\n      font-size: 1.5em;\n      margin-bottom: 0.7em;\n      font-family: Times New Roman;\n    }\n  }\n"]),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_styledComponents=__webpack_require__(60),_styledComponents2=_interopRequireDefault(_styledComponents),_Works=__webpack_require__(278),_Works2=_interopRequireDefault(_Works),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}enterModule=__webpack_require__(4).enterModule,enterModule&&enterModule(module);var BackgroundImage1="https://d262ilb51hltx0.cloudfront.net/fit/c/1600/1280/gradv/29/81/60/darken/25/1*4ncz3hLxmL8E_bUh-0z62w.jpeg",BackgroundImage2="https://d262ilb51hltx0.cloudfront.net/fit/c/1600/1280/gradv/29/81/40/darken/50/blur/50/1*4ncz3hLxmL8E_bUh-0z62w.jpeg",BlurImgDiv=_styledComponents2.default.div(_templateObject,BackgroundImage1,BackgroundImage2),Main=_styledComponents2.default.div(_templateObject2),Home=function(_Component){function Home(){return(0,_classCallCheck3.default)(this,Home),(0,_possibleConstructorReturn3.default)(this,(Home.__proto__||(0,_getPrototypeOf2.default)(Home)).apply(this,arguments))}return(0,_inherits3.default)(Home,_Component),(0,_createClass3.default)(Home,[{key:"render",value:function(){return _react2.default.createElement("div",null,_react2.default.createElement(BlurImgDiv,null,_react2.default.createElement("div",{className:"bg"}),_react2.default.createElement("div",{className:"blur"})),_react2.default.createElement(Main,null,_react2.default.createElement("div",null,_react2.default.createElement("h1",null,"JhongYi WebSite"),_react2.default.createElement("p",null,"My stories and ideas"),_react2.default.createElement("a",{target:"blank",href:"https://medium.com/@jhongyichen0418",title:"Medium"},"Learn more"))),_react2.default.createElement(_Works2.default,null))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Home}(_react.Component),reactHotLoader,leaveModule;exports.default=Home,reactHotLoader=__webpack_require__(4).default,leaveModule=__webpack_require__(4).leaveModule,reactHotLoader&&(reactHotLoader.register(BackgroundImage1,"BackgroundImage1","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/Home/Home.js"),reactHotLoader.register(BackgroundImage2,"BackgroundImage2","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/Home/Home.js"),reactHotLoader.register(BlurImgDiv,"BlurImgDiv","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/Home/Home.js"),reactHotLoader.register(Main,"Main","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/Home/Home.js"),reactHotLoader.register(Home,"Home","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/Home/Home.js"),leaveModule(module))}).call(this,__webpack_require__(20)(module))}}]);