webpackJsonp([25],{1234:function(e,r,t){"use strict";var n=t(0),o=t.n(n),i=t(1),a=t.n(i),c=t(81),s=t(1235),l=t(777),u=t(1238),d=(t.n(u),Object(c.b)("product-balances")),m=function(e,r){var t=e.balances.map(function(e){return o.a.createElement(s.a,{key:e.ProductId,balance:e})});return o.a.createElement("div",{className:d("list")},o.a.createElement("div",{className:d("header")},r.t("Balances")),e.fetching?o.a.createElement(l.a,null):t)};m.contextTypes={t:a.a.func.isRequired},r.a=m},1235:function(e,r,t){"use strict";var n=t(0),o=t.n(n),i=t(81),a=t(801),c=t(1236),s=(t.n(c),Object(i.b)("balance-item")),l=function(e){return o.a.createElement("div",{className:s("container")},o.a.createElement("div",{className:s("group")},o.a.createElement("div",{className:s("icon")},o.a.createElement(a.a,{iconFileName:e.balance.iconFileName,size:24})),o.a.createElement("div",{className:s("product")},e.balance.Product+" "+e.balance.ProductFullName)),o.a.createElement("div",{className:s("group")},o.a.createElement("div",{className:s("position")},e.balance.Amount)))};r.a=l},1236:function(e,r,t){var n=t(1237);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;t(692)(n,o);n.locals&&(e.exports=n.locals)},1237:function(e,r,t){r=e.exports=t(28)(!1),r.push([e.i,".balance-item__container{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:2rem 2.5rem;font-size:1.2rem;border-bottom:1px solid var(--component__border-color);color:var(--component__color-primary);background:var(--balance-item__container-bg-color)}.balance-item__container:hover{color:var(--component__color-primary);background:var(--balance-item__bg-color--hover)}.balance-item__group{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.balance-item__icon{margin-right:1.5rem}.balance-item__product{margin-right:1.5rem;font-size:1.2rem}.balance-item__position{margin-right:1.5rem;font-size:1.4rem}.balance-item__percentage{margin-left:1.5rem;font-size:1.4rem}",""])},1238:function(e,r,t){var n=t(1239);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;t(692)(n,o);n.locals&&(e.exports=n.locals)},1239:function(e,r,t){r=e.exports=t(28)(!1),r.push([e.i,'.product-balances__header{padding-left:var(--settings__body-header-title-padding-left);height:var(--settings__body-header-with-border-height);line-height:var(--settings__body-header-with-border-height);font-size:var(--settings__body-header-title-font-size);border-bottom:1px solid var(--component__border-color);border-radius:1rem;color:var(--settings__body-header-title-font-color);background:var(--component__header-bg-color);position:relative}.product-balances__header:after{content:"";width:100%;height:.2rem;background-color:var(--component__border-color--glow);position:absolute;bottom:0;left:0}',""])},287:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(7),o=t(802),i=t(1234),a=function(e){return{fetching:Object(o.a)(e),balances:Object(o.d)(e)}};r.default=Object(n.connect)(a)(i.a)},777:function(e,r,t){"use strict";var n=t(0),o=t.n(n),i=t(1),a=t.n(i),c=t(81),s=t(782),l=(t.n(s),Object(c.b)("spinner")),u=function(e){var r=e.isVisible,t=e.isInline,n=e.text,i=e.customClass,a=i||function(){return""};return o.a.createElement(o.a.Fragment,null,r&&o.a.createElement("div",{className:l("container",t&&"inline")+" "+a("spinner-container")},o.a.createElement("div",{className:l("circle",t&&"inline")+" "+a("spinner-circle")}),n&&o.a.createElement("div",{className:l("text")},n)))};u.propTypes={isInline:a.a.bool,isVisible:a.a.bool.isRequired,customClass:a.a.func,text:a.a.string},u.defaultProps={isVisible:!0},r.a=u},782:function(e,r,t){var n=t(783);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;t(692)(n,o);n.locals&&(e.exports=n.locals)},783:function(e,r,t){r=e.exports=t(28)(!1),r.push([e.i,".spinner__circle,.spinner__circle:after{border-radius:50%;width:2.5rem;height:2.5rem}.spinner__circle{margin:auto;-webkit-transform:translateZ(0);transform:translateZ(0);border-top:.2rem solid var(--spinner__color-secondary);border-right:.2rem solid var(--spinner__color-secondary);border-bottom:.2rem solid var(--spinner__color-secondary);border-left:.2rem solid var(--spinner__color-primary);-webkit-animation:loading 1.1s infinite linear;animation:loading 1.1s infinite linear}.spinner__circle--inline{border-top:.2rem solid var(--spinner__color-tertiary);border-right:.2rem solid var(--spinner__color-tertiary);border-bottom:.2rem solid var(--spinner__color-tertiary)}.spinner__container{position:absolute;display:-ms-flexbox;display:flex;margin:1rem 1.75rem;height:3rem;line-height:3rem}.spinner__container--inline{position:relative;margin:0;background:transparent}.spinner__text{color:var(--spinner__font-color);margin-left:1rem;display:inline-block}@-webkit-keyframes loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},801:function(e,r,t){"use strict";var n=t(7),o=t(804),i=function(e,r){return{productManifest:e.productManifest,iconFileName:r.iconFileName,size:r.size||48}};r.a=Object(n.connect)(i)(o.a)},802:function(e,r,t){"use strict";t.d(r,"a",function(){return s}),t.d(r,"d",function(){return u}),t.d(r,"c",function(){return d}),t.d(r,"b",function(){return m}),t.d(r,"e",function(){return f});var n=t(82),o=(t.n(n),t(263)),i=function(e){return e.product.products},a=function(e){return e.position.positions},c=function(e){return e.productManifest.manifest},s=Object(n.createSelector)([function(e){return e.product},function(e){return e.position},function(e){return e.productManifest}],function(e,r,t){return e.fetching||r.fetching||t.fetching}),l=Object(n.createSelector)([i,function(e){return e.product.decimalPlaces},a],function(e,r,t){return e.map(function(e){var n=t[e.ProductId];if(!n)return e;var i=r[e.Product],a=Object(o.a)(n,i);return Object.assign({},a,e)})}),u=Object(n.createSelector)([l,c],function(e,r){return e.map(function(e){var t=r[e.Product]||{iconFileName:e.Product+"DEFAULT_ICON"};return Object.assign({},e,t)})}),d=Object(n.createSelector)([u,function(e,r){return r}],function(e,r){return e.find(function(e){return e.ProductId===r})}),m=Object(n.createSelector)(u,function(e){return e.filter(function(e){return"-"!==e.Amount})}),f=Object(n.createSelector)(u,function(e){return e.filter(function(e){return"-"===e.Amount})})},804:function(e,r,t){"use strict";var n=t(0),o=t.n(n),i=t(1),a=t.n(i),c=t(21),s=t(81),l=t(805),u=(t.n(l),Object(s.b)("product-icon")),d=function(e){var r=e.productManifest,t=e.iconFileName,n=e.size,i=void 0===n?48:n,a=e.customClass;return r.fetching?null:(null==t&&console.log(t),t&&t.indexOf("DEFAULT_ICON")>0?m(i,t):o.a.createElement("img",{alt:"product icon",height:i+"px",className:a,src:Object(c.a)("/local/product-icons/"+t)}))},m=function(e,r){return o.a.createElement("div",{className:u(null,"default"),style:{width:e,height:e,MozBorderRadius:e/2,WebkitBorderRadius:e/2,borderRadius:e/2,textAlign:"center",fontSize:.5*e,lineHeight:e+"px"}},o.a.createElement("span",null,r.charAt(0)))};d.propTypes={productManifest:a.a.object.isRequired,iconFileName:a.a.string,size:a.a.number},r.a=d},805:function(e,r,t){var n=t(806);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;t(692)(n,o);n.locals&&(e.exports=n.locals)},806:function(e,r,t){r=e.exports=t(28)(!1),r.push([e.i,".product-icon--default{background:var(--product-icon__default-bg-color);color:var(--product-icon__default-color)}",""])}});