(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{167:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a,_,l=r(267),o=(a=l)&&a.__esModule?a:{default:a};(_=r(4).enterModule)&&_(e);var u,c,n=o.default;t.default=n,u=r(4).default,c=r(4).leaveModule,u&&(u.register(n,"default","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/ShoppingCart/index.js"),c(e))}).call(this,r(20)(e))},249:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _getPrototypeOf=__webpack_require__(59),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__(58),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(57),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__(56),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__(55),_inherits3=_interopRequireDefault(_inherits2),_class,_temp,_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(0),_propTypes2=_interopRequireDefault(_propTypes),_reactstrap=__webpack_require__(175),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}enterModule=__webpack_require__(4).enterModule,enterModule&&enterModule(module);var Cart=(_temp=_class=function(_Component){function Cart(){return(0,_classCallCheck3.default)(this,Cart),(0,_possibleConstructorReturn3.default)(this,(Cart.__proto__||(0,_getPrototypeOf2.default)(Cart)).apply(this,arguments))}return(0,_inherits3.default)(Cart,_Component),(0,_createClass3.default)(Cart,[{key:"render",value:function(){var e=this.props,t=e.cart,r=e.deleteCartItem,a=t.reduce(function(e,t){return e+t.price},0);return _react2.default.createElement("div",null,_react2.default.createElement(_reactstrap.Table,null,_react2.default.createElement("thead",null,_react2.default.createElement("tr",null,_react2.default.createElement("th",null,"#"),_react2.default.createElement("th",null,"品項"),_react2.default.createElement("th",null,"價格"),_react2.default.createElement("th",null))),_react2.default.createElement("tbody",null,t.map(function(e,t){return _react2.default.createElement("tr",null,_react2.default.createElement("th",{scope:"row"},t+1),_react2.default.createElement("td",null,e.title),_react2.default.createElement("td",null,e.price),_react2.default.createElement("td",null,_react2.default.createElement(_reactstrap.Button,{color:"danger",onClick:function(){return r(t)}},"X")," "))}))),_react2.default.createElement(_reactstrap.Alert,{color:"success",className:"text-right"},"總價：",a,"元"))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Cart}(_react.Component),_class.propTypes={cart:_propTypes2.default.array,deleteCartItem:_propTypes2.default.func},_temp),reactHotLoader,leaveModule;exports.default=Cart,reactHotLoader=__webpack_require__(4).default,leaveModule=__webpack_require__(4).leaveModule,reactHotLoader&&(reactHotLoader.register(Cart,"Cart","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/ShoppingCart/Cart.js"),leaveModule(module))}).call(this,__webpack_require__(20)(module))},250:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _getPrototypeOf=__webpack_require__(59),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__(58),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(57),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__(56),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__(55),_inherits3=_interopRequireDefault(_inherits2),_class,_temp,_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(0),_propTypes2=_interopRequireDefault(_propTypes),_reactstrap=__webpack_require__(175),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}enterModule=__webpack_require__(4).enterModule,enterModule&&enterModule(module);var Product=(_temp=_class=function(_Component){function Product(){return(0,_classCallCheck3.default)(this,Product),(0,_possibleConstructorReturn3.default)(this,(Product.__proto__||(0,_getPrototypeOf2.default)(Product)).apply(this,arguments))}return(0,_inherits3.default)(Product,_Component),(0,_createClass3.default)(Product,[{key:"render",value:function(){var e=this.props,t=e.product,r=e.cart,a=e.addToCart;return _react2.default.createElement(_reactstrap.Card,null,_react2.default.createElement(_reactstrap.CardImg,{width:"100%",src:t.img,alt:"Card image cap"}),_react2.default.createElement(_reactstrap.CardBody,null,_react2.default.createElement(_reactstrap.CardTitle,null,t.title),_react2.default.createElement(_reactstrap.CardSubtitle,null,t.discount?_react2.default.createElement(_reactstrap.Badge,{color:"danger"},"特價：",t.price):_react2.default.createElement(_reactstrap.Badge,{color:"success"},"售價：",t.price)),_react2.default.createElement(_reactstrap.CardText,null,t.desc),_react2.default.createElement(_reactstrap.Button,{disabled:r.find(function(e){return e.id===t.id}),color:"secondary",onClick:function(){return a(t)}},"購買")))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Product}(_react.Component),_class.propTypes={product:_propTypes2.default.object,cart:_propTypes2.default.array,addToCart:_propTypes2.default.func},_temp),reactHotLoader,leaveModule;exports.default=Product,reactHotLoader=__webpack_require__(4).default,leaveModule=__webpack_require__(4).leaveModule,reactHotLoader&&(reactHotLoader.register(Product,"Product","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/ShoppingCart/Product.js"),leaveModule(module))}).call(this,__webpack_require__(20)(module))},267:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _regenerator=__webpack_require__(266),_regenerator2=_interopRequireDefault(_regenerator),_asyncToGenerator2=__webpack_require__(263),_asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2),_getPrototypeOf=__webpack_require__(59),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__(58),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(57),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__(56),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__(55),_inherits3=_interopRequireDefault(_inherits2),_taggedTemplateLiteral2=__webpack_require__(86),_taggedTemplateLiteral3=_interopRequireDefault(_taggedTemplateLiteral2),_templateObject=(0,_taggedTemplateLiteral3.default)(["\n  position: relative;\n  top: 5rem;\n"],["\n  position: relative;\n  top: 5rem;\n"]),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_reactstrap=__webpack_require__(175),_styledComponents=__webpack_require__(60),_styledComponents2=_interopRequireDefault(_styledComponents),_Product=__webpack_require__(250),_Product2=_interopRequireDefault(_Product),_Cart=__webpack_require__(249),_Cart2=_interopRequireDefault(_Cart),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}enterModule=__webpack_require__(4).enterModule,enterModule&&enterModule(module);var Div=_styledComponents2.default.div(_templateObject),ShoppingCart=function(_Component){function ShoppingCart(){var e,t,r,a,_=this;(0,_classCallCheck3.default)(this,ShoppingCart);for(var l=arguments.length,o=Array(l),u=0;u<l;u++)o[u]=arguments[u];return t=r=(0,_possibleConstructorReturn3.default)(this,(e=ShoppingCart.__proto__||(0,_getPrototypeOf2.default)(ShoppingCart)).call.apply(e,[this].concat(o))),r.state={modal:!1,album:[],cart:[]},r.componentDidMount=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function e(){var t;return _regenerator2.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://demojson.herokuapp.com/cart").then(function(e){return e.json()});case 2:t=e.sent,r.setState({album:t});case 4:case"end":return e.stop()}},e,_)})),r.toggle=function(){r.setState({modal:!r.state.modal})},r.addToCart=function(e){var t=r.state.cart;t.push(e),r.setState({cart:t})},r.deleteCartItem=function(e){var t=r.state.cart;t.splice(e,1),r.setState({cart:t})},r.checkout=function(e){alert("已從您的信用卡中扣除"+e+"元！")},a=t,(0,_possibleConstructorReturn3.default)(r,a)}return(0,_inherits3.default)(ShoppingCart,_Component),(0,_createClass3.default)(ShoppingCart,[{key:"render",value:function(){var e=this,t=this.state,r=t.album,a=t.cart,_=t.modal,l=a.reduce(function(e,t){return e+t.price},0);return _react2.default.createElement(Div,null,_react2.default.createElement(_reactstrap.Container,null,_react2.default.createElement(_reactstrap.Row,null,_react2.default.createElement(_reactstrap.Col,{md:12},_react2.default.createElement(_reactstrap.Jumbotron,null,_react2.default.createElement("h1",{className:"display-3"},"美客唱片"),_react2.default.createElement("p",{className:"lead"},"美客唱片成立以來，結合實體唱片通路、唱片公司、網站，因而擁有豐富、完整的音樂資源"),_react2.default.createElement("p",{className:"lead"},"並與電視、廣播等媒體進行策略聯盟，已迅速打響知名度，並廣受各界好評"),_react2.default.createElement("p",{className:"lead"},"不僅如此，美客唱片將跨足大中華地區，透過舉辦跨國、跨區域的大型頒獎典禮、演唱會以及音樂活動"),_react2.default.createElement("p",{className:"lead"},"進一步擴大影響力，提昇流行音樂產業的動能"),_react2.default.createElement("hr",{className:"my-2"}),_react2.default.createElement("p",{className:"lead"},_react2.default.createElement(_reactstrap.Button,{color:"primary",onClick:this.toggle},"購物車(",a.length,")"))))),_react2.default.createElement(_reactstrap.Row,null,r.map(function(t){return _react2.default.createElement(_reactstrap.Col,{key:t.id,sm:6,md:4,className:"mb-3"},_react2.default.createElement(_Product2.default,{product:t,cart:a,addToCart:e.addToCart}))})),_react2.default.createElement(_reactstrap.Modal,{isOpen:_,toggle:this.toggle},_react2.default.createElement(_reactstrap.ModalHeader,{toggle:this.toggle},"購物車"),_react2.default.createElement(_reactstrap.ModalBody,null,_react2.default.createElement(_Cart2.default,{cart:a,deleteCartItem:this.deleteCartItem})),_react2.default.createElement(_reactstrap.ModalFooter,null,_react2.default.createElement(_reactstrap.Button,{disabled:0===a.length,color:"primary",onClick:function(){return e.checkout(l)}},"結帳")," ",_react2.default.createElement(_reactstrap.Button,{color:"secondary",onClick:this.toggle},"取消")))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),ShoppingCart}(_react.Component),reactHotLoader,leaveModule;exports.default=ShoppingCart,reactHotLoader=__webpack_require__(4).default,leaveModule=__webpack_require__(4).leaveModule,reactHotLoader&&(reactHotLoader.register(Div,"Div","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/ShoppingCart/ShoppingCart.js"),reactHotLoader.register(ShoppingCart,"ShoppingCart","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/ShoppingCart/ShoppingCart.js"),leaveModule(module))}).call(this,__webpack_require__(20)(module))}}]);