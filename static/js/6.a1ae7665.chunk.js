webpackJsonp([6],{1188:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(5),l=n(1189),s=n(310),u=n(1193),A=(n.n(u),Object(c.b)("wallet-card-grid")),d=function(e,t){var n=e.products.map(function(e){return o.a.createElement(l.a,{key:e.ProductId,productId:e.ProductId})});return o.a.createElement(o.a.Fragment,null,e.fetching||n.length?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:A("header")},t.t(e.header)),o.a.createElement("div",{className:A()},e.fetching?o.a.createElement(s.a,null):n)):"")};d.contextTypes={t:i.a.func.isRequired},t.a=d},1189:function(e,t,n){"use strict";var r=n(7),o=n(1190),a=n(924),i=n(185),c=function(e,t){var n=Object(a.c)(e,t.productId);return{iconFileName:n.iconFileName,ProductSymbol:n.ProductSymbol,ProductFullName:n.ProductFullName,Amount:n.Amount,isCrypto:"CryptoCurrency"===n.ProductType,ProductId:n.ProductId}},l=function(e,t){return{selectPositionAndSave:function(){e(Object(i.g)(t.productId))}}};t.a=Object(r.connect)(c,l)(o.a)},1190:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(34),l=n(20),s=n(5),u=n(923),A=n(44),d=n(980),m=n(985),p=n(112),f=n(1191),C=(n.n(f),Object(s.b)("wallet-card")),b=function(e,t){var n=e.iconFileName,r=e.ProductSymbol,a=e.ProductFullName,i=e.Amount,s=e.isCrypto,f=e.ProductId;return o.a.createElement("div",{className:C()+" container-with-shadow"},o.a.createElement("div",{className:C("icon-label-row")},o.a.createElement("div",{className:C("icon")},o.a.createElement(u.a,{iconFileName:n,size:44})),o.a.createElement("span",{className:C("symbol-label")},r+" "+a)),o.a.createElement("div",{className:C("balance-row")},o.a.createElement("div",{className:C("balance")},o.a.createElement("span",{className:C("label")},t.t("Current Balance")),o.a.createElement("div",{className:C("amount")},i))),o.a.createElement("div",{className:C("activity-link-row")},o.a.createElement("div",{className:C("activity-link-container")},o.a.createElement(c.a,{className:C("activity-link"),to:Object(l.a)(p.g.path),onClick:e.selectPositionAndSave},t.t("View Activity")," ",o.a.createElement(A.a,{name:"arrowNext",customClass:C("next-icon")}))),o.a.createElement("div",{className:C("icon-nav-buttons")},s?o.a.createElement(d.a,{product:{iconFileName:n,ProductSymbol:r,ProductFullName:a,ProductId:f}}):o.a.createElement(m.a,{product:{iconFileName:n,ProductSymbol:r,ProductFullName:a,ProductId:f}}))))};b.contextTypes={t:i.a.func.isRequired},t.a=b},1191:function(e,t,n){var r=n(1192);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(888)(r,o);r.locals&&(e.exports=r.locals)},1192:function(e,t,n){t=e.exports=n(43)(!0),t.push([e.i,".wallet-card{width:37rem;background:var(--wallet-card__bg-color);border-radius:1rem;margin:0 2rem 4rem}.wallet-card__icon-label-row{display:-ms-flexbox;display:flex;padding:2rem;-ms-flex-align:center;align-items:center}.wallet-card__symbol-label{font-size:2rem;margin-left:1.5rem;color:var(--font__color-primary)}.wallet-card__balance-row{display:-ms-flexbox;display:flex;width:100%;border-top:1px solid var(--wallet-card__divider-border-color);border-bottom:1px solid var(--wallet-card__divider-border-color-secondary)}.wallet-card__balance{width:50%;padding:2rem 2rem 3rem;border-right:solid 1px var(--wallet-card__divider-border-color)}.wallet-card__label{margin-bottom:1rem;color:var(--font__color-secondary)}.wallet-card__value{width:50%;border-left:1px solid var(--border__color);padding:2rem 2rem 3rem}.wallet-card__amount{font-size:2rem;color:var(--font__color-primary)}.wallet-card__activity-link-row{background:var(--wallet-card__activity-link-row-bg-color);padding:1.5rem 2.5rem;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;display:-ms-flexbox;display:flex;width:100%;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.wallet-card__activity-link{font-size:1.4rem}.wallet-card__next-icon{margin-left:.75rem}.wallet-card__icon-nav-buttons{display:-ms-flexbox;display:flex}","",{version:3,sources:["/Users/iMac/Documents/Trabajo/toptal/alphapoint/repositories/apex-web-0.2.57/src/components/WalletCards/WalletCard.css"],names:[],mappings:"AAAA,aACE,YAAa,AACb,wCAAyC,AACzC,mBAAoB,AACpB,kBAAyB,CAC1B,AAED,6BACE,oBAAqB,AACrB,aAAc,AACd,aAAc,AACd,sBAAuB,AACnB,kBAAoB,CACzB,AAED,2BACE,eAAgB,AAChB,mBAAoB,AACpB,gCAAkC,CACnC,AAED,0BACE,oBAAqB,AACrB,aAAc,AACd,WAAY,AACZ,8DAA+D,AAC/D,0EAA4E,CAC7E,AAED,sBACE,UAAW,AACX,uBAAwB,AACxB,+DAAiE,CAClE,AAED,oBACE,mBAAoB,AACpB,kCAAoC,CACrC,AAED,oBACE,UAAW,AACX,2CAA4C,AAC5C,sBAAwB,CACzB,AAED,qBACE,eAAgB,AAChB,gCAAkC,CACnC,AAED,gCACE,0DAA2D,AAC3D,sBAAuB,AACvB,+BAAgC,AAChC,gCAAiC,AACjC,oBAAqB,AACrB,aAAc,AACd,WAAY,AACZ,sBAAuB,AACnB,8BAA+B,AACnC,sBAAuB,AACnB,kBAAoB,CACzB,AAED,4BACE,gBAAkB,CACnB,AAED,wBACE,kBAAqB,CACtB,AAED,+BACE,oBAAqB,AACrB,YAAc,CACf",file:"WalletCard.css",sourcesContent:[".wallet-card {\n  width: 37rem;\n  background: var(--wallet-card__bg-color);\n  border-radius: 1rem;\n  margin: 0 2rem 4rem 2rem;\n}\n\n.wallet-card__icon-label-row {\n  display: -ms-flexbox;\n  display: flex;\n  padding: 2rem;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.wallet-card__symbol-label {\n  font-size: 2rem;\n  margin-left: 1.5rem;\n  color: var(--font__color-primary);\n}\n\n.wallet-card__balance-row {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  border-top: 1px solid var(--wallet-card__divider-border-color);\n  border-bottom: 1px solid var(--wallet-card__divider-border-color-secondary);\n}\n\n.wallet-card__balance {\n  width: 50%;\n  padding: 2rem 2rem 3rem;\n  border-right: solid 1px var(--wallet-card__divider-border-color);\n}\n\n.wallet-card__label {\n  margin-bottom: 1rem;\n  color: var(--font__color-secondary);\n}\n\n.wallet-card__value {\n  width: 50%;\n  border-left: 1px solid var(--border__color);\n  padding: 2rem 2rem 3rem;\n}\n\n.wallet-card__amount {\n  font-size: 2rem;\n  color: var(--font__color-primary);\n}\n\n.wallet-card__activity-link-row {\n  background: var(--wallet-card__activity-link-row-bg-color);\n  padding: 1.5rem 2.5rem;\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.wallet-card__activity-link {\n  font-size: 1.4rem;\n}\n\n.wallet-card__next-icon {\n  margin-left: 0.75rem;\n}\n\n.wallet-card__icon-nav-buttons {\n  display: -ms-flexbox;\n  display: flex;\n}\n"],sourceRoot:""}])},1193:function(e,t,n){var r=n(1194);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(888)(r,o);r.locals&&(e.exports=r.locals)},1194:function(e,t,n){t=e.exports=n(43)(!0),t.push([e.i,".wallet-card-grid{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center;margin:0 -2rem;min-height:5rem;margin-bottom:4rem}.wallet-card-grid__header{padding:3rem 3rem 3.6rem;font-size:2.4rem}","",{version:3,sources:["/Users/iMac/Documents/Trabajo/toptal/alphapoint/repositories/apex-web-0.2.57/src/components/WalletCards/WalletCardGrid.css"],names:[],mappings:"AAAA,kBACE,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AAChB,eAAgB,AACpB,qBAAsB,AAClB,uBAAwB,AAC5B,eAAgB,AAChB,gBAAiB,AACjB,kBAAoB,CACrB,AAED,0BACE,yBAA0B,AAC1B,gBAAkB,CACnB",file:"WalletCardGrid.css",sourcesContent:[".wallet-card-grid {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: center;\n      justify-content: center;\n  margin: 0 -2rem;\n  min-height: 5rem;\n  margin-bottom: 4rem;\n}\n\n.wallet-card-grid__header {\n  padding: 3rem 3rem 3.6rem;\n  font-size: 2.4rem;\n}\n"],sourceRoot:""}])},197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),o=n(924),a=n(1188),i=function(e){return{header:"Funded Accounts",fetching:Object(o.a)(e),products:Object(o.b)(e)}};t.default=Object(r.connect)(i)(a.a)},923:function(e,t,n){"use strict";var r=n(7),o=n(925),a=function(e,t){return{productManifest:e.productManifest,iconFileName:t.iconFileName,size:t.size||48}};t.a=Object(r.connect)(a)(o.a)},924:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"d",function(){return u}),n.d(t,"c",function(){return A}),n.d(t,"b",function(){return d}),n.d(t,"e",function(){return m});var r=n(108),o=(n.n(r),n(317)),a=function(e){return e.product.products},i=function(e){return e.position.positions},c=function(e){return e.productManifest.manifest},l=Object(r.createSelector)([function(e){return e.product},function(e){return e.position},function(e){return e.productManifest}],function(e,t,n){return e.fetching||t.fetching||n.fetching}),s=Object(r.createSelector)([a,function(e){return e.product.decimalPlaces},i],function(e,t,n){return e.map(function(e){var r=n[e.ProductId];if(!r)return e;var a=t[e.Product],i=Object(o.a)(r,a);return Object.assign({},i,e)})}),u=Object(r.createSelector)([s,c],function(e,t){return e.map(function(e){var n=t[e.Product]||{iconFileName:e.Product+"DEFAULT_ICON"};return Object.assign({},e,n)})}),A=Object(r.createSelector)([u,function(e,t){return t}],function(e,t){return e.find(function(e){return e.ProductId===t})}),d=Object(r.createSelector)(u,function(e){return e.filter(function(e){return"-"!==e.Amount})}),m=Object(r.createSelector)(u,function(e){return e.filter(function(e){return"-"===e.Amount})})},925:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(20),l=n(5),s=n(926),u=(n.n(s),Object(l.b)("product-icon")),A=function(e){var t=e.productManifest,n=e.iconFileName,r=e.size,a=void 0===r?48:r,i=e.customClass;return t.fetching?null:(null==n&&console.log(n),n&&n.indexOf("DEFAULT_ICON")>0?d(a,n):o.a.createElement("img",{alt:"product icon",height:a+"px",className:i,src:Object(c.a)("/local/product-icons/"+n)}))},d=function(e,t){return o.a.createElement("div",{className:u(null,"default"),style:{width:e,height:e,MozBorderRadius:e/2,WebkitBorderRadius:e/2,borderRadius:e/2,textAlign:"center",fontSize:.5*e,lineHeight:e+"px"}},o.a.createElement("span",null,t.charAt(0)))};A.propTypes={productManifest:i.a.object.isRequired,iconFileName:i.a.string,size:i.a.number},t.a=A},926:function(e,t,n){var r=n(927);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(888)(r,o);r.locals&&(e.exports=r.locals)},927:function(e,t,n){t=e.exports=n(43)(!0),t.push([e.i,".product-icon--default{background:var(--product-icon__default-bg-color);color:var(--product-icon__default-color)}","",{version:3,sources:["/Users/iMac/Documents/Trabajo/toptal/alphapoint/repositories/apex-web-0.2.57/src/components/common/ProductIcon/ProductIcon.css"],names:[],mappings:"AAAA,uBACE,iDAAkD,AAClD,wCAA0C,CAC3C",file:"ProductIcon.css",sourcesContent:[".product-icon--default {\n  background: var(--product-icon__default-bg-color);\n  color: var(--product-icon__default-color);\n}\n"],sourceRoot:""}])},942:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(1),o=n.n(r),a=o.a.shape({iconFileName:o.a.string,ProductFullName:o.a.string,ProductSymbol:o.a.string,ProductId:o.a.number})},945:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(5),l=n(44),s=n(982),u=(n.n(s),function(e){var t=e.tooltipText,n=e.iconName,r=e.customClass,a=e.action,i=Object(c.b)("icon-button",r);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{"data-tip":t,"data-place":"bottom","data-effect":"solid",onClick:a,className:i()},o.a.createElement(l.a,{name:n,customClass:i("icon")}),o.a.createElement("span",{className:i("label")},n)))});u.protoTypes={tooltipText:i.a.string.isRequired,iconName:i.a.string.isRequired,parentClass:i.a.string.isRequired,action:i.a.func},t.a=u},946:function(e,t,n){var r=n(984);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(888)(r,o);r.locals&&(e.exports=r.locals)},980:function(e,t,n){"use strict";var r=n(7),o=n(15),a=n(981),i=function(e){return{openSendReceiveSidePane:function(t,n){e(Object(o.p)(t,n))}}};t.a=Object(r.connect)(null,i)(a.a)},981:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),l=n(1),s=n.n(l),u=n(945),A=n(5),d=n(942),m=n(946),p=(n.n(m),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),f=Object(A.b)("wallet-nav-item"),C=function(e){function t(){var e,n,a,i;r(this,t);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.onSendClick=function(){a.onBtnClick(!0)},a.onReceiveClick=function(){a.onBtnClick(!1)},a.onBtnClick=function(e){var t=a.props;(0,t.openSendReceiveSidePane)(e,t.product)},i=n,o(a,i)}return a(t,e),p(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{iconName:"send",action:this.onSendClick,tooltipText:this.context.t("Send"),customClass:f()}),c.a.createElement(u.a,{iconName:"receive",action:this.onReceiveClick,tooltipText:this.context.t("Receive"),customClass:f()}))}}]),t}(c.a.Component);C.propTypes={openSendReceiveSidePane:s.a.func.isRequired,product:d.a},C.contextTypes={t:s.a.func.isRequired},t.a=C},982:function(e,t,n){var r=n(983);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(888)(r,o);r.locals&&(e.exports=r.locals)},983:function(e,t,n){t=e.exports=n(43)(!0),t.push([e.i,".icon-button{min-width:4rem;height:4rem;border-radius:4px;color:var(--font__color-secondary);background:var(--primary__bg-color);border:1px solid var(--border-secondary);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;cursor:pointer}.icon-button:hover,.icon-button:hover .icon-button__icon{color:var(--font__color-primary)}.icon-button__icon{-ms-flex-negative:0;flex-shrink:0;width:2rem;height:2rem;color:var(--font__color-secondary);-webkit-transition:var(--transition__settings);-o-transition:var(--transition__settings);transition:var(--transition__settings)}","",{version:3,sources:["/Users/iMac/Documents/Trabajo/toptal/alphapoint/repositories/apex-web-0.2.57/src/components/common/APIconButton/APIconButton.css"],names:[],mappings:"AAAA,aACE,eAAgB,AAChB,YAAa,AACb,kBAAmB,AACnB,mCAAoC,AACpC,oCAAqC,AACrC,yCAA0C,AAC1C,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,mBAAoB,AACxB,cAAgB,CACjB,AAMD,yDACE,gCAAkC,CACnC,AAED,mBACE,oBAAqB,AACjB,cAAe,AACnB,WAAY,AACZ,YAAa,AACb,mCAAoC,AACpC,+CAAgD,AAChD,0CAA2C,AAC3C,sCAAwC,CACzC",file:"APIconButton.css",sourcesContent:[".icon-button {\n  min-width: 4rem;\n  height: 4rem;\n  border-radius: 4px;\n  color: var(--font__color-secondary);\n  background: var(--primary__bg-color);\n  border: 1px solid var(--border-secondary);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  cursor: pointer;\n}\n\n.icon-button:hover {\n  color: var(--font__color-primary);\n}\n\n.icon-button:hover .icon-button__icon {\n  color: var(--font__color-primary);\n}\n\n.icon-button__icon {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  width: 2rem;\n  height: 2rem;\n  color: var(--font__color-secondary);\n  -webkit-transition: var(--transition__settings);\n  -o-transition: var(--transition__settings);\n  transition: var(--transition__settings);\n}\n"],sourceRoot:""}])},984:function(e,t,n){t=e.exports=n(43)(!0),t.push([e.i,".wallet-nav-item{margin-left:1.2rem;padding:0 1rem}.wallet-nav-item__label{text-transform:capitalize;padding-left:1rem}","",{version:3,sources:["/Users/iMac/Documents/Trabajo/toptal/alphapoint/repositories/apex-web-0.2.57/src/components/WalletNavItems/WalletNavItems.css"],names:[],mappings:"AAAA,iBACE,mBAAoB,AACpB,cAAgB,CACjB,AAED,wBACE,0BAA2B,AAC3B,iBAAmB,CACpB",file:"WalletNavItems.css",sourcesContent:[".wallet-nav-item {\n  margin-left: 1.2rem;\n  padding: 0 1rem;\n}\n\n.wallet-nav-item__label {\n  text-transform: capitalize;\n  padding-left: 1rem;\n}\n\n/* .wallet-nav-item__icon{\n  padding-left: 1rem;\n} */\n"],sourceRoot:""}])},985:function(e,t,n){"use strict";var r=n(7),o=n(15),a=n(986),i=function(e){return{openRetailFiatSidePane:function(t,n){e(Object(o.o)(t,n))}}};t.a=Object(r.connect)(null,i)(a.a)},986:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),l=n(1),s=n.n(l),u=n(945),A=n(5),d=n(946),m=(n.n(d),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),p=Object(A.b)("wallet-nav-item"),f=function(e){function t(){var e,n,a,i;r(this,t);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.onDepositClick=function(){a.onBtnClick(!0)},a.onWithdrawClick=function(){a.onBtnClick(!1)},a.onBtnClick=function(e){var t=a.props;(0,t.openRetailFiatSidePane)(e,t.product)},i=n,o(a,i)}return a(t,e),m(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{iconName:"deposit",action:this.onDepositClick,tooltipText:this.context.t("Deposit"),customClass:p()}),c.a.createElement(u.a,{iconName:"withdraw",action:this.onWithdrawClick,tooltipText:this.context.t("Withdraw"),customClass:p()}))}}]),t}(c.a.Component);f.propTypes={openRetailFiatSidePane:s.a.func.isRequired,product:s.a.shape({iconFileName:s.a.string,ProductFullName:s.a.string,ProductSymbol:s.a.string,ProductId:s.a.number})},f.contextTypes={t:s.a.func.isRequired},t.a=f}});
//# sourceMappingURL=6.a1ae7665.chunk.js.map