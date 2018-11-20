webpackJsonp([1],{1072:function(e,t,n){"use strict";var o=n(0),r=n.n(o),c=n(1),a=n.n(c),i=n(1073),s=n(1074),u=n(5),l=n(1075),m=(n.n(l),Object(u.b)("balances-menu")),p=function(e,t){var n=e.positions.map(function(t){return r.a.createElement(i.a,{key:t.ProductId,position:t,selected:t.ProductId===e.selectedProductId,onItemClick:e.selectPositionAndSave})});return r.a.createElement(s.a,{customClass:m(),dataTest:"Asset List"},n)};p.propTypes={positions:a.a.array.isRequired},p.contextTypes={t:a.a.func.isRequired},t.a=p},1073:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),i=n.n(a),s=n(1),u=n.n(s),l=n(919),m=n(5),p=n(994),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=Object(m.b)("balances-menu"),b=function(e){function t(){var e,n,c,a;o(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return n=c=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),c.handleClick=function(){c.props.onItemClick(c.props.position.ProductId)},a=n,r(c,a)}return c(t,e),f(t,[{key:"render",value:function(){return i.a.createElement(p.a,{onItemClick:this.handleClick,selected:this.props.selected,customClass:"balances-menu"},i.a.createElement("div",{className:""+d("item-icon")},i.a.createElement(l.a,{iconFileName:this.props.position.iconFileName,size:28})),i.a.createElement("div",{className:""+d("item-details")},i.a.createElement("div",{className:""+d("item-symbol-name")},this.props.position.Product," ",this.props.position.ProductFullName),i.a.createElement("div",{className:""+d("item-balance-value")},this.props.position.Amount,i.a.createElement("span",{className:""+d("item-value-symbol")}," ",this.props.position.Product," "))))}}]),t}(i.a.Component);b.propTypes={position:u.a.object.isRequired},t.a=b},1074:function(e,t,n){"use strict";var o=n(0),r=n.n(o),c=n(1),a=n.n(c),i=n(5),s=n(991),u=(n.n(s),Object(i.b)("trade-component")),l=function(e){var t=e.dataTest,n=e.children,o=e.customClass,c=e.header,a=Object(i.b)("menu-component",o);return r.a.createElement("div",{className:u()+" "+a()},c&&r.a.createElement("div",{className:""+u("header")},e.header),r.a.createElement("ul",{className:""+a("list"),"data-test":t},n))};l.propTypes={header:a.a.string,customClass:a.a.string,dataTest:a.a.string,children:a.a.oneOfType([a.a.arrayOf(a.a.element),a.a.element])},t.a=l},1075:function(e,t,n){var o=n(1076);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!1};r.transform=void 0;n(884)(o,r);o.locals&&(e.exports=o.locals)},1076:function(e,t,n){t=e.exports=n(43)(!1),t.push([e.i,".balances-menu,.trade-component.menu-component.balances-menu{height:80vh;overflow-y:scroll;background:var(--balances-menu__bg-color)}.balances-menu__item-icon{padding:1.2rem 1.5rem 1.2rem 1rem}.balances-menu__item-symbol-name{font-size:var(--balances-menu__item-label-font-size);color:var(--component__font-color-seondary);padding:2px 0;font-size:1.2rem;font-weight:700;color:var(--balances-menu__symbol-name-color)}.balances-menu__item-balance-value{font-size:var(--balances-menu__item-value-font-size);color:var(--component__color-primary)}.balances-menu__item-value-symbol{font-size:var(--balances-menu__item-label-font-size);color:var(--component__font-color-seondary)}.balances-menu__item{min-width:28rem;height:7.5rem}@media only screen and (max-width:48rem){.balances-menu{display:none}}",""])},121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),r=n(918),c=n(184),a=n(1072),i=function(e){return{positions:Object(r.d)(e),selectedProductId:e.position.selectedProductId}},s={selectPositionAndSave:c.g};t.default=Object(o.connect)(i,s)(a.a)},918:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"d",function(){return l}),n.d(t,"c",function(){return m}),n.d(t,"b",function(){return p}),n.d(t,"e",function(){return f});var o=n(109),r=(n.n(o),n(317)),c=function(e){return e.product.products},a=function(e){return e.position.positions},i=function(e){return e.productManifest.manifest},s=Object(o.createSelector)([function(e){return e.product},function(e){return e.position},function(e){return e.productManifest}],function(e,t,n){return e.fetching||t.fetching||n.fetching}),u=Object(o.createSelector)([c,function(e){return e.product.decimalPlaces},a],function(e,t,n){return e.map(function(e){var o=n[e.ProductId];if(!o)return e;var c=t[e.Product],a=Object(r.a)(o,c);return Object.assign({},a,e)})}),l=Object(o.createSelector)([u,i],function(e,t){return e.map(function(e){var n=t[e.Product]||{iconFileName:e.Product+"DEFAULT_ICON"};return Object.assign({},e,n)})}),m=Object(o.createSelector)([l,function(e,t){return t}],function(e,t){return e.find(function(e){return e.ProductId===t})}),p=Object(o.createSelector)(l,function(e){return e.filter(function(e){return"-"!==e.Amount})}),f=Object(o.createSelector)(l,function(e){return e.filter(function(e){return"-"===e.Amount})})},919:function(e,t,n){"use strict";var o=n(7),r=n(920),c=function(e,t){return{productManifest:e.productManifest,iconFileName:t.iconFileName,size:t.size||48}};t.a=Object(o.connect)(c)(r.a)},920:function(e,t,n){"use strict";var o=n(0),r=n.n(o),c=n(1),a=n.n(c),i=n(17),s=n(5),u=n(921),l=(n.n(u),Object(s.b)("product-icon")),m=function(e){var t=e.productManifest,n=e.iconFileName,o=e.size,c=void 0===o?48:o,a=e.customClass;return t.fetching?null:(null==n&&console.log(n),n&&n.indexOf("DEFAULT_ICON")>0?p(c,n):r.a.createElement("img",{alt:"product icon",height:c+"px",className:a,src:Object(i.a)("/local/product-icons/"+n)}))},p=function(e,t){return r.a.createElement("div",{className:l(null,"default"),style:{width:e,height:e,MozBorderRadius:e/2,WebkitBorderRadius:e/2,borderRadius:e/2,textAlign:"center",fontSize:.5*e,lineHeight:e+"px"}},r.a.createElement("span",null,t.charAt(0)))};m.propTypes={productManifest:a.a.object.isRequired,iconFileName:a.a.string,size:a.a.number},t.a=m},921:function(e,t,n){var o=n(922);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!1};r.transform=void 0;n(884)(o,r);o.locals&&(e.exports=o.locals)},922:function(e,t,n){t=e.exports=n(43)(!1),t.push([e.i,".product-icon--default{background:var(--product-icon__default-bg-color);color:var(--product-icon__default-color)}",""])},991:function(e,t,n){var o=n(995);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!1};r.transform=void 0;n(884)(o,r);o.locals&&(e.exports=o.locals)},994:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),i=n.n(a),s=n(1),u=n.n(s),l=n(5),m=n(991),p=(n.n(m),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),f="menu-component",d=function(e){function t(){var e,n,c,a;o(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return n=c=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),c.getBEMClasses=function(){return Object(l.b)(f,c.props.customClass)},a=n,r(c,a)}return c(t,e),p(t,[{key:"render",value:function(){var e=this.getBEMClasses();return i.a.createElement("li",{className:e("item",this.props.selected&&"selected"),onClick:this.props.onItemClick},this.props.children)}}]),t}(i.a.Component);d.propTypes={onItemClick:u.a.func.isRequired,selected:u.a.bool,customClass:u.a.string},t.a=d},995:function(e,t,n){t=e.exports=n(43)(!1),t.push([e.i,".menu-component{-ms-flex:1 1;flex:1 1;overflow:auto}.menu-component__list{padding:0;margin:0}.menu-component__item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-bottom:solid 1px var(--side-menu__item-separator-color);border-left:4px solid transparent;width:var(--side-menu__item-width);height:var(--side-menu__item-height);padding:0 2rem 0 .75rem;cursor:pointer}.menu-component__item:active,.menu-component__item:hover{background:var(--side-menu__item-bg-color--hover)}.menu-component__item--selected,.menu-component__item--selected:hover,.menu-component__item:active{background:var(--side-menu__item-bg-color--selected)}",""])}});