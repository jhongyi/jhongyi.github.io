(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{166:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r,a,o=n(248),i=(r=o)&&r.__esModule?r:{default:r};(a=n(4).enterModule)&&a(e);var c,s,u=i.default;t.default=u,c=n(4).default,s=n(4).leaveModule,c&&(c.register(u,"default","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/SnakeGame/index.js"),s(e))}).call(this,n(20)(e))},169:function(e,t,n){var r=n(61),a=n(15)("toStringTag"),o="Arguments"==r(function(){return arguments}());e.exports=function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),a))?n:o?r(t):"Object"==(i=r(t))&&"function"==typeof t.callee?"Arguments":i}},170:function(e,t,n){e.exports={default:n(178),__esModule:!0}},171:function(e,t,n){var r=n(15)("iterator"),a=!1;try{var o=[7][r]();o.return=function(){a=!0},Array.from(o,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!a)return!1;var n=!1;try{var o=[7],i=o[r]();i.next=function(){return{done:n=!0}},o[r]=function(){return i},e(o)}catch(e){}return n}},172:function(e,t,n){var r=n(169),a=n(15)("iterator"),o=n(34);e.exports=n(5).getIteratorMethod=function(e){if(void 0!=e)return e[a]||e["@@iterator"]||o[r(e)]}},173:function(e,t,n){var r=n(34),a=n(15)("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||o[a]===e)}},174:function(e,t,n){var r=n(21);e.exports=function(e,t,n,a){try{return a?t(r(n)[0],n[1]):t(n)}catch(t){var o=e.return;throw void 0!==o&&r(o.call(e)),t}}},176:function(e,t,n){"use strict";var r=n(12),a=n(23);e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},177:function(e,t,n){"use strict";var r=n(62),a=n(7),o=n(35),i=n(174),c=n(173),s=n(88),u=n(176),l=n(172);a(a.S+a.F*!n(171)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,d,_=o(e),f="function"==typeof this?this:Array,g=arguments.length,m=g>1?arguments[1]:void 0,p=void 0!==m,h=0,k=l(_);if(p&&(m=r(m,g>2?arguments[2]:void 0,2)),void 0==k||f==Array&&c(k))for(n=new f(t=s(_.length));t>h;h++)u(n,h,p?m(_[h],h):_[h]);else for(d=k.call(_),n=new f;!(a=d.next()).done;h++)u(n,h,p?i(d,m,[a.value,h],!0):a.value);return n.length=h,n}})},178:function(e,t,n){n(87),n(177),e.exports=n(5).Array.from},179:function(e,t,n){"use strict";t.__esModule=!0;var r,a=n(170),o=(r=a)&&r.__esModule?r:{default:r};t.default=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,o.default)(e)}},182:function(e,t,n){var r;
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(a.apply(null,r));else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}void 0!==e&&e.exports?e.exports=a:void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},244:function(e,t,n){var r=n(13),a=Math.floor;e.exports=function(e){return!r(e)&&isFinite(e)&&a(e)===e}},245:function(e,t,n){var r=n(7);r(r.S,"Number",{isInteger:n(244)})},246:function(e,t,n){n(245),e.exports=n(5).Number.isInteger},247:function(e,t,n){e.exports={default:n(246),__esModule:!0}},248:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _isInteger=__webpack_require__(247),_isInteger2=_interopRequireDefault(_isInteger),_extends2=__webpack_require__(90),_extends3=_interopRequireDefault(_extends2),_toConsumableArray2=__webpack_require__(179),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2),_from=__webpack_require__(170),_from2=_interopRequireDefault(_from),_getPrototypeOf=__webpack_require__(59),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__(58),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(57),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__(56),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__(55),_inherits3=_interopRequireDefault(_inherits2),_taggedTemplateLiteral2=__webpack_require__(86),_taggedTemplateLiteral3=_interopRequireDefault(_taggedTemplateLiteral2),_templateObject=(0,_taggedTemplateLiteral3.default)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content:center;\n  color: #555;\n  position: relative;\n  top: 5rem;\n"],["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content:center;\n  color: #555;\n  position: relative;\n  top: 5rem;\n"]),_templateObject2=(0,_taggedTemplateLiteral3.default)(["\n  border: 1px solid #ccc;\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0;\n  .stageRow {\n    display: flex;\n    flex-direction: row;\n    .stageCol {\n      width: 12px;\n      height: 12px;\n      background-color: #222;\n      &.snake {\n        background-color: white;\n      }\n      &.point {\n        background-color: red;\n      }\n    }\n  }\n"],["\n  border: 1px solid #ccc;\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0;\n  .stageRow {\n    display: flex;\n    flex-direction: row;\n    .stageCol {\n      width: 12px;\n      height: 12px;\n      background-color: #222;\n      &.snake {\n        background-color: white;\n      }\n      &.point {\n        background-color: red;\n      }\n    }\n  }\n"]),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_classnames=__webpack_require__(182),_classnames2=_interopRequireDefault(_classnames),_styledComponents=__webpack_require__(60),_styledComponents2=_interopRequireDefault(_styledComponents),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}enterModule=__webpack_require__(4).enterModule,enterModule&&enterModule(module);var DivContent=_styledComponents2.default.div(_templateObject),DivStage=_styledComponents2.default.div(_templateObject2),gameStageArea={width:50,height:20},direction={left:37,top:38,right:39,bottom:40},costTimeInterval=void 0,gameSpeed=50,defaultState={direction:direction.right,snake:[457,456,455],point:232,canUpdateDirection:!0,timeoutId:void 0,costTime:0,score:0},SnakeGame=function(_Component){function SnakeGame(){(0,_classCallCheck3.default)(this,SnakeGame);var e=(0,_possibleConstructorReturn3.default)(this,(SnakeGame.__proto__||(0,_getPrototypeOf2.default)(SnakeGame)).call(this));return e.generateStage=function(){return(0,_from2.default)(Array(gameStageArea.height)).map(function(e,t){return(0,_from2.default)(Array(gameStageArea.width)).map(function(e,n){return{id:t*gameStageArea.width+n,key:"block"+(t*gameStageArea.width+n)}})})},e.gameStart=function(){costTimeInterval=setInterval(function(){e.setState({costTime:e.state.costTime+1})},1e3),e.setState({timeoutId:setTimeout(e.updateGame,gameSpeed)})},e.resetGame=function(){var t={costTime:e.state.costTime,score:e.state.score};e.setState({ranking:[].concat((0,_toConsumableArray3.default)(e.state.ranking),[t])}),e.setState(defaultState)},e.gameOver=function(){clearTimeout(e.state.timeoutId),e.setState({timeoutId:void 0}),clearInterval(costTimeInterval)},e.shouldUpdatePoint=function(){return e.state.snake[0]===e.state.point},e.generateNewPoint=function(){var t=void 0;do{t=Math.floor(Math.random()*gameStageArea.height*gameStageArea.width)}while(e.state.snake.find(function(e){return e===t}));e.setState({point:t})},e.isGameEnd=function(e,t){var n=!1,r=e[0],a=t[0];return console.log("-------------snake---------------"),console.log("newSnakeHead",r),console.log("oldSnakeHead",a),console.log("------------------------------------"),e.reduce(function(e,t){return t===r?(console.log("hey",t),e+1):e},0)>1&&(n=!0),r<0&&(n=!0),(r<0||r>gameStageArea.height*gameStageArea.width-1)&&(n=!0),r+1===a&&a%gameStageArea.width==0&&(n=!0),r-1===a&&r%gameStageArea.width==0&&(n=!0),n},e.updateGame=function(){var t=[].concat((0,_toConsumableArray3.default)(e.state.snake));switch(e.state.direction){case direction.left:t.unshift(t[0]-1);break;case direction.right:t.unshift(t[0]+1);break;case direction.top:t.unshift(t[0]-gameStageArea.width);break;case direction.bottom:t.unshift(t[0]+gameStageArea.width)}if(e.isGameEnd(t,e.state.snake))return e.gameOver(),alert("遊戲結束"),void e.resetGame();e.shouldUpdatePoint()?(e.setState({score:e.state.score+10}),e.generateNewPoint()):t.pop(),e.setState({snake:t,canUpdateDirection:!0}),setTimeout(e.updateGame,gameSpeed)},e.onKeyDown=function(t){var n=!1;switch(t.keyCode){case direction.left:e.state.direction!==direction.right&&(n=!0);break;case direction.top:e.state.direction!==direction.bottom&&(n=!0);break;case direction.right:e.state.direction!==direction.left&&(n=!0);break;case direction.bottom:e.state.direction!==direction.top&&(n=!0)}n&&e.state.canUpdateDirection&&e.setState({direction:t.keyCode,canUpdateDirection:!1}),e.state.timeoutId||e.gameStart()},e.state=(0,_extends3.default)({stage:e.generateStage(),ranking:[]},defaultState),e}return(0,_inherits3.default)(SnakeGame,_Component),(0,_createClass3.default)(SnakeGame,[{key:"render",value:function(){var e=this;return _react2.default.createElement(DivContent,{tabIndex:"0",onKeyDown:this.onKeyDown},_react2.default.createElement(DivStage,{id:"stage",tabIndex:"0",onKeyDown:this.onKeyDown},this.state.stage.map(function(t,n){return _react2.default.createElement("div",{className:"stageRow",key:"stageRow"+n},t.map(function(t){return _react2.default.createElement("div",{className:(0,_classnames2.default)("stageCol",{snake:(0,_isInteger2.default)(e.state.snake.find(function(e){return t.id===e})),point:e.state.point===t.id}),key:t.key})}))}),_react2.default.createElement("div",null,"分數: ",this.state.score," 分"),_react2.default.createElement("div",null,"時間: ",this.state.costTime," 秒")),_react2.default.createElement("div",null,_react2.default.createElement("h2",{style:{textAlign:"center"}},"排行榜"),_react2.default.createElement("table",null,_react2.default.createElement("tr",null,_react2.default.createElement("th",{style:{width:"100px"}},"時間"),_react2.default.createElement("th",{style:{width:"100px"}},"分數")),this.state.ranking.map(function(e,t){return _react2.default.createElement("tr",{key:t},_react2.default.createElement("td",{style:{textAlign:"center"}},e.costTime," 秒"),_react2.default.createElement("td",{style:{textAlign:"center"}},e.score," 分"))}))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),SnakeGame}(_react.Component),reactHotLoader,leaveModule;exports.default=SnakeGame,reactHotLoader=__webpack_require__(4).default,leaveModule=__webpack_require__(4).leaveModule,reactHotLoader&&(reactHotLoader.register(DivContent,"DivContent","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/SnakeGame/SnakeGame.js"),reactHotLoader.register(DivStage,"DivStage","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/SnakeGame/SnakeGame.js"),reactHotLoader.register(gameStageArea,"gameStageArea","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/SnakeGame/SnakeGame.js"),reactHotLoader.register(direction,"direction","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/SnakeGame/SnakeGame.js"),reactHotLoader.register(costTimeInterval,"costTimeInterval","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/SnakeGame/SnakeGame.js"),reactHotLoader.register(gameSpeed,"gameSpeed","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/SnakeGame/SnakeGame.js"),reactHotLoader.register(defaultState,"defaultState","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/SnakeGame/SnakeGame.js"),reactHotLoader.register(SnakeGame,"SnakeGame","/Users/jhongyi/project/frontend/jhongyi-github-unbuild/src/containers/SnakeGame/SnakeGame.js"),leaveModule(module))}).call(this,__webpack_require__(20)(module))}}]);