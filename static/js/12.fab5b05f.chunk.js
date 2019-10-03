webpackJsonp([12],{1987:function(e,r,a){"use strict";var t=a(1988);r.a=t.a},1988:function(e,r,a){"use strict";var t=a(10),n=a(313),i=a(1989),o=function(e){return{fetching:Object(n.a)(e),balances:Object(n.d)(e)}};r.a=Object(t.connect)(o)(i.a)},1989:function(e,r,a){"use strict";var t=a(0),n=a.n(t),i=a(36),o=a(1990),c=a(914),l=a(1993),s=(a.n(l),Object(i.b)("product-balances")),d=function(e){var r=e.balances.map(function(e){return n.a.createElement(o.a,{key:e.ProductId,balance:e})});return n.a.createElement(n.a.Fragment,null,e.fetching?n.a.createElement(c.a,null):n.a.createElement("div",{className:s("container")},n.a.createElement("div",{className:s("wrapper")},r)))};r.a=d},1990:function(e,r,a){"use strict";var t=a(0),n=a.n(t),i=a(36),o=a(942),c=a(1991),l=(a.n(c),Object(i.b)("balance-item")),s=function(e){return n.a.createElement("div",{className:l("container")},n.a.createElement("div",{className:l("group")},n.a.createElement("div",{className:l("icon")},n.a.createElement(o.a,{iconFileName:e.balance.iconFileName,size:24})),n.a.createElement("div",{className:l("product")},e.balance.Product+" "+e.balance.ProductFullName)),n.a.createElement("div",{className:l("group")},n.a.createElement("div",{className:l("position")},e.balance.Amount)))};r.a=s},1991:function(e,r,a){var t=a(1992);"string"===typeof t&&(t=[[e.i,t,""]]);var n={hmr:!1};n.transform=void 0;a(862)(t,n);t.locals&&(e.exports=t.locals)},1992:function(e,r,a){r=e.exports=a(37)(!1),r.push([e.i,".balance-item__container{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:2rem 2.5rem;font-size:1.2rem;border-bottom:1px solid var(--component__border-color);color:var(--component__color-primary);background:var(--balance-item__container-bg-color)}.balance-item__container:hover{color:var(--component__color-primary);background:var(--balance-item__bg-color--hover)}.balance-item__group{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.balance-item__icon{margin-right:1.5rem}.balance-item__product{margin-right:1.5rem;font-size:1.2rem}.balance-item__position{margin-right:1.5rem;font-size:1.4rem}.balance-item__percentage{margin-left:1.5rem;font-size:1.4rem}",""])},1993:function(e,r,a){var t=a(1994);"string"===typeof t&&(t=[[e.i,t,""]]);var n={hmr:!1};n.transform=void 0;a(862)(t,n);t.locals&&(e.exports=t.locals)},1994:function(e,r,a){r=e.exports=a(37)(!1),r.push([e.i,".product-balances__container{height:100%}.product-balances__wrapper{height:100%;overflow:auto}@media only screen and (max-width:768px){.product-balances__container{height:70rem}}@media only screen and (max-width:480px){.product-balances__container{height:40rem}}",""])},1995:function(e,r,a){var t=a(1996);"string"===typeof t&&(t=[[e.i,t,""]]);var n={hmr:!1};n.transform=void 0;a(862)(t,n);t.locals&&(e.exports=t.locals)},1996:function(e,r,a){r=e.exports=a(37)(!1),r.push([e.i,'.balances-list-layout{position:relative;height:100%;min-height:calc(var(--retail-dashboard__card-header-height) + 20rem);overflow:hidden}.balances-list-layout__header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:var(--retail-dashboard__card-header-title-padding);height:var(--retail-dashboard__card-header-height);font-size:var(--retail-dashboard__card-header-title-font-size);color:var(--retail-dashboard__card-header-title-font-color);background:var(--component__header-bg-color);position:relative;border-top-left-radius:1rem;border-top-right-radius:1rem}.balances-list-layout__header:after{content:"";width:100%;height:.2rem;background-color:var(--component__border-color--glow);position:absolute;bottom:0;left:0}.balances-list-layout .product-balances__container{height:calc(100% - var(--retail-dashboard__card-header-height))}@media only screen and (max-width:768px){.balances-list-layout .product-balances__container{height:70rem}}@media only screen and (max-width:480px){.balances-list-layout .product-balances__container{height:40rem}}',""])},86:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=a(0),n=a.n(t),i=a(1),o=a.n(i),c=a(1987),l=a(36),s=a(1995),d=(a.n(s),Object(l.b)("balances-list-layout")),m=function(e,r){return n.a.createElement("div",{className:d()},n.a.createElement("div",{className:d("header")},r.t("Balances")),n.a.createElement(c.a,null))};m.contextTypes={t:o.a.func.isRequired},r.default=m},914:function(e,r,a){"use strict";var t=a(0),n=a.n(t),i=a(1),o=a.n(i),c=a(36),l=a(929),s=(a.n(l),Object(c.b)("spinner")),d=function(e){var r=e.isVisible,a=e.isInline,t=e.text,i=e.customClass,o=e.classModifiers,l="string"===typeof i?Object(c.b)(i):i||function(){return""};return n.a.createElement(n.a.Fragment,null,r&&n.a.createElement("div",{className:s("container",a&&"inline")+" "+l("spinner-container",o)},n.a.createElement("div",{className:s("circle",a&&"inline")+" "+l("spinner-circle",o)}),t&&n.a.createElement("div",{className:s("text")},t)))};d.propTypes={isInline:o.a.bool,isVisible:o.a.bool.isRequired,customClass:o.a.oneOfType([o.a.func,o.a.string]),text:o.a.string},d.defaultProps={isVisible:!0},r.a=d},929:function(e,r,a){var t=a(930);"string"===typeof t&&(t=[[e.i,t,""]]);var n={hmr:!1};n.transform=void 0;a(862)(t,n);t.locals&&(e.exports=t.locals)},930:function(e,r,a){r=e.exports=a(37)(!1),r.push([e.i,".spinner__circle,.spinner__circle:after{border-radius:50%;width:2.5rem;height:2.5rem}.spinner__circle{margin:auto;-webkit-transform:translateZ(0);transform:translateZ(0);border-top:.2rem solid var(--spinner__color-secondary);border-right:.2rem solid var(--spinner__color-secondary);border-bottom:.2rem solid var(--spinner__color-secondary);border-left:.2rem solid var(--spinner__color-primary);-webkit-animation:loading 1.1s infinite linear;animation:loading 1.1s infinite linear}.spinner__circle--inline{border-top:.2rem solid var(--spinner__color-tertiary);border-right:.2rem solid var(--spinner__color-tertiary);border-bottom:.2rem solid var(--spinner__color-tertiary)}.spinner__container{position:absolute;display:-ms-flexbox;display:flex;margin:1rem 1.75rem;height:3rem;line-height:3rem}.spinner__container--inline{position:relative;margin:0;background:transparent}.spinner__text{color:var(--spinner__font-color);margin-left:1rem;display:inline-block}@-webkit-keyframes loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},942:function(e,r,a){"use strict";var t=a(10),n=a(943),i=function(e,r){return{productManifest:e.productManifest,iconFileName:r.iconFileName,size:r.size||48}};r.a=Object(t.connect)(i)(n.a)},943:function(e,r,a){"use strict";var t=a(0),n=a.n(t),i=a(1),o=a.n(i),c=a(38),l=a(36),s=a(944),d=(a.n(s),Object(l.b)("product-icon")),m=function(e){var r=e.productManifest,a=e.iconFileName,t=e.size,i=void 0===t?48:t,o=e.customClass;return r.fetching?null:(null==a&&console.log(a),a&&a.indexOf("DEFAULT_ICON")>0?u(i,a):n.a.createElement("img",{alt:"product icon",height:i+"px",className:o,src:Object(c.a)("/local/product-icons/"+a)}))},u=function(e,r){return n.a.createElement("div",{className:d(null,"default"),style:{width:e,height:e,MozBorderRadius:e/2,WebkitBorderRadius:e/2,borderRadius:e/2,textAlign:"center",fontSize:.5*e,lineHeight:e+"px"}},n.a.createElement("span",null,r.charAt(0)))};m.propTypes={productManifest:o.a.object.isRequired,iconFileName:o.a.string,size:o.a.number},r.a=m},944:function(e,r,a){var t=a(945);"string"===typeof t&&(t=[[e.i,t,""]]);var n={hmr:!1};n.transform=void 0;a(862)(t,n);t.locals&&(e.exports=t.locals)},945:function(e,r,a){r=e.exports=a(37)(!1),r.push([e.i,".product-icon--default{background:var(--product-icon__default-bg-color);color:var(--product-icon__default-color)}",""])}});