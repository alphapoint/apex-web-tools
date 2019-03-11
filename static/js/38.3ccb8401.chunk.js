webpackJsonp([38],{1161:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(0),i=n.n(s),c=n(79),u=n.n(c),l=n(1),f=n.n(l),p=n(6),m=n(354),b=n(1162),y=n(1165),d=(n.n(y),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),h=function(e){function t(){var e,n,a,s;r(this,t);for(var i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.bemClasses=Object(p.b)(["ap-snackbar"]),s=n,o(a,s)}return a(t,e),d(t,[{key:"closeSnack",value:function(e){this.props.dismissSnackByUniqueId(e.uniqueId),e.onClose&&e.onClose()}},{key:"getSnackElement",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e.timeout||m.a.timeout,o=Math.round(r/1e3);return setTimeout(function(){return t.closeSnack(e)},r),i.a.createElement("div",{key:n,className:this.bemClasses("snack")},i.a.createElement(b.a,Object.assign({},e,{onClose:function(){return t.closeSnack(t.props.snacks[0])}})),m.a.showProgressBar&&i.a.createElement("div",{className:this.bemClasses("snack-progress"),style:{animationDuration:o+"s"}}))}},{key:"render",value:function(){var e=this;return u.a.createPortal(i.a.createElement("div",{className:this.bemClasses()},m.a.showMultiple&&this.props.snacks.map(function(t,n){return e.getSnackElement(t,n)}),!m.a.showMultiple&&this.props.snacks[0]&&this.getSnackElement(this.props.snacks[0])),document.body)}}]),t}(s.Component);h.defaultProps={timeout:m.a.timeout,snacks:[]},h.propTypes={timeout:f.a.number,snacks:f.a.arrayOf(f.a.shape({timeout:f.a.number,text:f.a.string.isRequired,id:f.a.string.isRequired,type:f.a.oneOf(["info","success","warning"]),customClass:f.a.string,onClose:f.a.func})).isRequired},t.a=h},1162:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(0),i=n.n(s),c=n(1),u=n.n(c),l=n(6),f=n(354),p=n(49),m=n(1163),b=(n.n(m),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),y=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),b(t,[{key:"render",value:function(){var e=this,t=Object(l.b)(["snackbar",this.props.customClass]),n=this.props,r=n.type,o=n.text,a=n.textVars;return i.a.createElement("div",{className:t("",r)},i.a.createElement("div",{className:t("text",r)},this.context.t(o,a)),i.a.createElement("div",{className:t("close",r),onClick:function(){return e.props.onClose()}},i.a.createElement(p.a,{name:"close",className:t("close-icon"),customClass:t("icon"),classModifiers:"big"})))}}]),t}(s.Component);y.defaultProps={timeout:f.a.timeout,text:"",textVars:{},type:f.a.type,customClass:"custom-snackbar",onClose:function(){}},y.contextTypes={t:u.a.func.isRequired},y.propTypes={timeout:u.a.number,id:u.a.string.isRequired,text:u.a.string.isRequired,textVars:u.a.object,type:u.a.oneOf(["info","success","warning"]),customClass:u.a.string,onClose:u.a.func},t.a=y},1163:function(e,t,n){var r=n(1164);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(942)(r,o);r.locals&&(e.exports=r.locals)},1164:function(e,t,n){t=e.exports=n(48)(!1),t.push([e.i,".snackbar{height:52px;color:var(--font__color-primary);display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:start;align-items:flex-start;padding:0 2rem;position:relative}.snackbar--info{background:var(--information__color)}.snackbar--success{background:var(--success__color)}.snackbar--warning{background:var(--danger__color)}.snackbar__close,.snackbar__text{-ms-flex-order:0;order:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;line-height:52px;vertical-align:middle}",""])},1165:function(e,t,n){var r=n(952);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(942)(r,o);r.locals&&(e.exports=r.locals)},950:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),o=n(10),a=n(1161),s=function(e){return{snacks:e.snackbar.snacks}},i=function(e){return{dismissSnackByUniqueId:function(t){return e(Object(o.e)(t))}}};t.default=Object(r.connect)(s,i)(a.a)}});