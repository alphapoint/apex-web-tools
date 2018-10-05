webpackJsonp([4],{1136:function(e,t,n){"use strict";var o=n(0),r=n.n(o),c=n(1),i=n.n(c),a=n(1137),s=n(1138),u=n(81),l=n(1139),m=(n.n(l),Object(u.b)("balances-menu")),p=function(e,t){var n=e.positions.map(function(t){return r.a.createElement(a.a,{key:t.ProductId,position:t,selected:t.ProductId===e.selectedProductId,onItemClick:e.selectPositionAndSave})});return r.a.createElement(s.a,{customClass:m()},n)};p.propTypes={positions:i.a.array.isRequired},p.contextTypes={t:i.a.func.isRequired},t.a=p},1137:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),a=n.n(i),s=n(1),u=n.n(s),l=n(806),m=n(81),p=n(984),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=Object(m.b)("balances-menu"),b=function(e){function t(){var e,n,c,i;o(this,t);for(var a=arguments.length,s=Array(a),u=0;u<a;u++)s[u]=arguments[u];return n=c=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),c.handleClick=function(){c.props.onItemClick(c.props.position.ProductId)},i=n,r(c,i)}return c(t,e),f(t,[{key:"render",value:function(){return a.a.createElement(p.a,{onItemClick:this.handleClick,selected:this.props.selected,customClass:"balances-menu"},a.a.createElement("div",{className:""+d("item-icon")},a.a.createElement(l.a,{iconFileName:this.props.position.iconFileName,size:28})),a.a.createElement("div",{className:""+d("item-details")},a.a.createElement("div",{className:""+d("item-symbol-name")},this.props.position.Product," ",this.props.position.ProductFullName),a.a.createElement("div",{className:""+d("item-balance-value")},this.props.position.Amount,a.a.createElement("span",{className:""+d("item-value-symbol")}," ",this.props.position.Product," "))))}}]),t}(a.a.Component);b.propTypes={position:u.a.object.isRequired},t.a=b},1138:function(e,t,n){"use strict";var o=n(0),r=n.n(o),c=n(1),i=n.n(c),a=n(81),s=n(960),u=(n.n(s),Object(a.b)("trade-component")),l=function(e){var t=Object(a.b)("menu-component",e.customClass);return r.a.createElement("div",{className:u()+" "+t()},e.header&&r.a.createElement("div",{className:""+u("header")},e.header),r.a.createElement("ul",{className:""+t("list")},e.children))};l.propTypes={header:i.a.string,customClass:i.a.string},t.a=l},1139:function(e,t,n){var o=n(1140);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!1};r.transform=void 0;n(693)(o,r);o.locals&&(e.exports=o.locals)},1140:function(e,t,n){t=e.exports=n(28)(!1),t.push([e.i,".balances-menu,.trade-component.menu-component.balances-menu{height:80vh;overflow-y:scroll;background:var(--balances-menu__bg-color)}.balances-menu__item-icon{padding:1.2rem 1.5rem 1.2rem 1rem}.balances-menu__item-symbol-name{font-size:var(--balances-menu__item-label-font-size);color:var(--component__font-color-seondary);padding:2px 0;font-size:1.2rem;font-weight:700;color:var(--balances-menu__symbol-name-color)}.balances-menu__item-balance-value{font-size:var(--balances-menu__item-value-font-size);color:var(--component__color-primary)}.balances-menu__item-value-symbol{font-size:var(--balances-menu__item-label-font-size);color:var(--component__font-color-seondary)}.balances-menu__item{min-width:28rem;height:7.5rem}",""])},806:function(e,t,n){"use strict";var o=n(7),r=n(809),c=function(e,t){return{productManifest:e.productManifest,iconFileName:t.iconFileName,size:t.size||48}};t.a=Object(o.connect)(c)(r.a)},807:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"d",function(){return l}),n.d(t,"c",function(){return m}),n.d(t,"b",function(){return p}),n.d(t,"e",function(){return f});var o=n(82),r=(n.n(o),n(263)),c=function(e){return e.product.products},i=function(e){return e.position.positions},a=function(e){return e.productManifest.manifest},s=Object(o.createSelector)([function(e){return e.product},function(e){return e.position},function(e){return e.productManifest}],function(e,t,n){return e.fetching||t.fetching||n.fetching}),u=Object(o.createSelector)([c,function(e){return e.product.decimalPlaces},i],function(e,t,n){return e.map(function(e){var o=n[e.ProductId];if(!o)return e;var c=t[e.Product],i=Object(r.a)(o,c);return Object.assign({},i,e)})}),l=Object(o.createSelector)([u,a],function(e,t){return e.map(function(e){var n=t[e.Product]||{iconFileName:e.Product+"DEFAULT_ICON"};return Object.assign({},e,n)})}),m=Object(o.createSelector)([l,function(e,t){return t}],function(e,t){return e.find(function(e){return e.ProductId===t})}),p=Object(o.createSelector)(l,function(e){return e.filter(function(e){return"-"!==e.Amount})}),f=Object(o.createSelector)(l,function(e){return e.filter(function(e){return"-"===e.Amount})})},809:function(e,t,n){"use strict";var o=n(0),r=n.n(o),c=n(1),i=n.n(c),a=n(21),s=n(81),u=n(810),l=(n.n(u),Object(s.b)("product-icon")),m=function(e){var t=e.productManifest,n=e.iconFileName,o=e.size,c=void 0===o?48:o,i=e.customClass;return t.fetching?null:(null==n&&console.log(n),n&&n.indexOf("DEFAULT_ICON")>0?p(c,n):r.a.createElement("img",{alt:"product icon",height:c+"px",className:i,src:Object(a.a)("/local/product-icons/"+n)}))},p=function(e,t){return r.a.createElement("div",{className:l(null,"default"),style:{width:e,height:e,MozBorderRadius:e/2,WebkitBorderRadius:e/2,borderRadius:e/2,textAlign:"center",fontSize:.5*e,lineHeight:e+"px"}},r.a.createElement("span",null,t.charAt(0)))};m.propTypes={productManifest:i.a.object.isRequired,iconFileName:i.a.string,size:i.a.number},t.a=m},810:function(e,t,n){var o=n(811);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!1};r.transform=void 0;n(693)(o,r);o.locals&&(e.exports=o.locals)},811:function(e,t,n){t=e.exports=n(28)(!1),t.push([e.i,".product-icon--default{background:var(--product-icon__default-bg-color);color:var(--product-icon__default-color)}",""])},95:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),r=n(807),c=n(147),i=n(1136),a=function(e){return{positions:Object(r.d)(e),selectedProductId:e.position.selectedProductId}},s={selectPositionAndSave:c.g};t.default=Object(o.connect)(a,s)(i.a)},960:function(e,t,n){var o=n(985);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!1};r.transform=void 0;n(693)(o,r);o.locals&&(e.exports=o.locals)},984:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),a=n.n(i),s=n(1),u=n.n(s),l=n(81),m=n(960),p=(n.n(m),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),f="menu-component",d=function(e){function t(){var e,n,c,i;o(this,t);for(var a=arguments.length,s=Array(a),u=0;u<a;u++)s[u]=arguments[u];return n=c=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),c.getBEMClasses=function(){return Object(l.b)(f,c.props.customClass)},i=n,r(c,i)}return c(t,e),p(t,[{key:"render",value:function(){var e=this.getBEMClasses();return a.a.createElement("li",{className:e("item",this.props.selected&&"selected"),onClick:this.props.onItemClick},this.props.children)}}]),t}(a.a.Component);d.propTypes={onItemClick:u.a.func.isRequired,selected:u.a.bool,customClass:u.a.string},t.a=d},985:function(e,t,n){t=e.exports=n(28)(!1),t.push([e.i,".menu-component{-ms-flex:1 1;flex:1 1;overflow:auto}.menu-component__list{padding:0;margin:0}.menu-component__item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-bottom:solid 1px var(--side-menu__item-separator-color);border-left:4px solid transparent;width:var(--side-menu__item-width);height:var(--side-menu__item-height);padding:0 2rem 0 .75rem;cursor:pointer}.menu-component__item:active,.menu-component__item:hover{background:var(--side-menu__item-bg-color--hover)}.menu-component__item--selected,.menu-component__item--selected:hover,.menu-component__item:active{background:var(--side-menu__item-bg-color--selected)}",""])}});