webpackJsonp([40],{1268:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(32),i=r(802),s=r(1269),c=r(853),l=r(1273),u=(r.n(l),Object(o.b)("transfer-request-list")),m=function(e){var t=e.filteredItems.map(function(e){return a.a.createElement(s.a,{key:e.RequestCode,item:e})}),r=Math.ceil(t.length/3||t.length),n=r?a.a.createElement(c.a,{componentName:"transferRequest",content:function(e){return t.slice(3*e,3*(e+1))},totalPages:r}):null;return a.a.createElement("div",{className:u()},e.fetching?a.a.createElement(i.a,null):n)};t.a=m},1269:function(e,t,r){"use strict";var n=r(8),a=r(1270),o=r(848),i=r(93),s=function(e,t){var r=Object(o.c)(e,t.item.ProductId);return{iconFileName:r.iconFileName,ProductSymbol:r.ProductSymbol,ProductFullName:r.ProductFullName,RequestorUsername:t.item.RequestorUsername,Amount:t.item.Amount}},c=function(e,t){return{approveTransferRequest:function(){return e(Object(i.h)(t.item.RequestCode))},rejectTransferRequest:function(){return e(Object(i.k)(t.item.RequestCode))}}};t.a=Object(n.connect)(s,c)(a.a)},1270:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(1),i=r.n(o),s=r(32),c=r(847),l=r(263),u=r(264),m=r(1271),p=(r.n(m),r(266)),d=Object(s.b)("transfer-request-item"),f=function(e,t){var r=e.iconFileName,n=e.ProductSymbol,o=e.ProductFullName,i=e.Amount,s=e.RequestorUsername,m=e.approveTransferRequest,f=e.rejectTransferRequest;return a.a.createElement("div",{className:d()},a.a.createElement("div",{className:d("details")},a.a.createElement("div",{className:d("type-icon")},a.a.createElement(l.a,{name:"send",customClass:d("icon")})),a.a.createElement("div",{className:d("product-icon")},a.a.createElement(c.a,{iconFileName:r,size:35})),a.a.createElement("div",{className:d("description")},t.t("Send")," ",i+" "+n+" "+o," ",t.t("to")," ",s)),a.a.createElement("div",{className:d("buttons")},a.a.createElement(u.a,{onClick:function(){return m()},customClass:d(),styleName:p.b.additive},t.t("Approve")),a.a.createElement(u.a,{onClick:function(){return f()},customClass:d(),styleName:p.b.subtractive},t.t("Reject"))))};f.contextTypes={t:i.a.func.isRequired},t.a=f},1271:function(e,t,r){var n=r(1272);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(767)(n,a);n.locals&&(e.exports=n.locals)},1272:function(e,t,r){t=e.exports=r(33)(!1),t.push([e.i,".transfer-request-item{display:-ms-flexbox;display:flex;width:100%;padding:0 2.5rem;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;height:8rem;background:var(--nav-header__bg-color);min-width:96rem}.transfer-request-item:hover{background:var(--component__bg-color)}.transfer-request-item:not(:first-child){border-top:1px solid var(--component__border-color)}.transfer-request-item__details{display:-ms-flexbox;display:flex}.transfer-request-item__type-icon{margin-right:2rem;border:1px solid var(--font__color-primary);border-radius:2rem;width:3.5rem;height:3.5rem;padding-top:.7rem;padding-left:.6rem}.transfer-request-item__icon{height:1.8rem;width:1.8rem}.transfer-request-item__product-icon{margin-right:1.5rem}.transfer-request-item__description{font-size:1.9rem;line-height:3.5rem}.transfer-request-item__btn{width:12rem;margin-left:1.8rem}@media only screen and (max-width:78.6rem){.transfer-request-item{min-width:unset;-ms-flex-direction:column;flex-direction:column;height:unset;min-height:8rem;padding:2.5rem}.transfer-request-item__details{-ms-flex-wrap:wrap;flex-wrap:wrap;padding-bottom:1rem;width:100%}.transfer-request-item__buttons{width:100%;display:-ms-flexbox;display:flex}.transfer-request-item__btn:first-child{margin-left:0}:root .transfer-request-item,_:-ms-fullscreen{height:15rem!important;width:100%!important}}",""])},1273:function(e,t,r){var n=r(1274);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(767)(n,a);n.locals&&(e.exports=n.locals)},1274:function(e,t,r){t=e.exports=r(33)(!1),t.push([e.i,".transfer-request-list .pagination__content{background-color:var(--component__bg-color);overflow-x:auto}.transfer-request-list .pagination__container{background-color:var(--component__header-bg-color);height:6.4rem;padding:0 1.4rem}.transfer-request-list .pagination__pages{line-height:3.6rem;text-align:center;border:1px solid var(--component__border-color);background:var(--tertiary__bg-color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.transfer-request-list .pagination__page{width:3.6rem;padding:0;background:var(--table__row-bg-color);border-right:1px solid var(--border__color);font-size:1.4rem}.transfer-request-list .pagination__page:hover{color:var(--component__color-primary);background:var(--pagination__bg-color-hover)}.transfer-request-list .pagination__page--active,.transfer-request-list .pagination__page--active:hover{background:var(--pagination__bg-color--active)}.transfer-request-list .pagination__text{height:3.6rem;width:12.5rem;border:1px solid var(--border__color);text-align:center;background:var(--table__row-bg-color)}@media only screen and (max-width:76.8rem){.transfer-request-list .pagination__text{width:unset;padding:0 1rem}}",""])},776:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(8),a=r(1268),o=function(e){var t=Array.isArray(e.transferRequest.items)?e.transferRequest.items.filter(function(e){return"Requested"===e.Status}):[];return Object.assign({},e.transferRequest,{filteredItems:t})};t.default=Object(n.connect)(o)(a.a)},802:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(1),i=r.n(o),s=r(32),c=r(808),l=(r.n(c),Object(s.b)("spinner")),u=function(e){var t=e.isVisible,r=e.isInline,n=e.text,o=e.customClass,i=o||function(){return""};return a.a.createElement(a.a.Fragment,null,t&&a.a.createElement("div",{className:l("container",r&&"inline")+" "+i("spinner-container")},a.a.createElement("div",{className:l("circle",r&&"inline")+" "+i("spinner-circle")}),n&&a.a.createElement("div",{className:l("text")},n)))};u.propTypes={isInline:i.a.bool,isVisible:i.a.bool.isRequired,customClass:i.a.func,text:i.a.string},u.defaultProps={isVisible:!0},t.a=u},808:function(e,t,r){var n=r(809);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(767)(n,a);n.locals&&(e.exports=n.locals)},809:function(e,t,r){t=e.exports=r(33)(!1),t.push([e.i,".spinner__circle,.spinner__circle:after{border-radius:50%;width:2.5rem;height:2.5rem}.spinner__circle{margin:auto;-webkit-transform:translateZ(0);transform:translateZ(0);border-top:.2rem solid var(--spinner__color-secondary);border-right:.2rem solid var(--spinner__color-secondary);border-bottom:.2rem solid var(--spinner__color-secondary);border-left:.2rem solid var(--spinner__color-primary);-webkit-animation:loading 1.1s infinite linear;animation:loading 1.1s infinite linear}.spinner__circle--inline{border-top:.2rem solid var(--spinner__color-tertiary);border-right:.2rem solid var(--spinner__color-tertiary);border-bottom:.2rem solid var(--spinner__color-tertiary)}.spinner__container{position:absolute;display:-ms-flexbox;display:flex;margin:1rem 1.75rem;height:3rem;line-height:3rem}.spinner__container--inline{position:relative;margin:0;background:transparent}.spinner__text{color:var(--spinner__font-color);margin-left:1rem;display:inline-block}@-webkit-keyframes loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},847:function(e,t,r){"use strict";var n=r(8),a=r(850),o=function(e,t){return{productManifest:e.productManifest,iconFileName:t.iconFileName,size:t.size||48}};t.a=Object(n.connect)(o)(a.a)},848:function(e,t,r){"use strict";r.d(t,"a",function(){return c}),r.d(t,"d",function(){return u}),r.d(t,"c",function(){return m}),r.d(t,"b",function(){return p}),r.d(t,"e",function(){return d});var n=r(85),a=(r.n(n),r(272)),o=function(e){return e.product.products},i=function(e){return e.position.positions},s=function(e){return e.productManifest.manifest},c=Object(n.createSelector)([function(e){return e.product},function(e){return e.position},function(e){return e.productManifest}],function(e,t,r){return e.fetching||t.fetching||r.fetching}),l=Object(n.createSelector)([o,function(e){return e.product.decimalPlaces},i],function(e,t,r){return e.map(function(e){var n=r[e.ProductId];if(!n)return e;var o=t[e.Product],i=Object(a.a)(n,o);return Object.assign({},i,e)})}),u=Object(n.createSelector)([l,s],function(e,t){return e.map(function(e){var r=t[e.Product]||{iconFileName:e.Product+"DEFAULT_ICON"};return Object.assign({},e,r)})}),m=Object(n.createSelector)([u,function(e,t){return t}],function(e,t){return e.find(function(e){return e.ProductId===t})}),p=Object(n.createSelector)(u,function(e){return e.filter(function(e){return"-"!==e.Amount})}),d=Object(n.createSelector)(u,function(e){return e.filter(function(e){return"-"===e.Amount})})},850:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(1),i=r.n(o),s=r(16),c=r(32),l=r(851),u=(r.n(l),Object(c.b)("product-icon")),m=function(e){var t=e.productManifest,r=e.iconFileName,n=e.size,o=void 0===n?48:n,i=e.customClass;return t.fetching?null:(null==r&&console.log(r),r&&r.indexOf("DEFAULT_ICON")>0?p(o,r):a.a.createElement("img",{alt:"product icon",height:o+"px",className:i,src:Object(s.a)("/local/product-icons/"+r)}))},p=function(e,t){return a.a.createElement("div",{className:u(null,"default"),style:{width:e,height:e,MozBorderRadius:e/2,WebkitBorderRadius:e/2,borderRadius:e/2,textAlign:"center",fontSize:.5*e,lineHeight:e+"px"}},a.a.createElement("span",null,t.charAt(0)))};m.propTypes={productManifest:i.a.object.isRequired,iconFileName:i.a.string,size:i.a.number},t.a=m},851:function(e,t,r){var n=r(852);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(767)(n,a);n.locals&&(e.exports=n.locals)},852:function(e,t,r){t=e.exports=r(33)(!1),t.push([e.i,".product-icon--default{background:var(--product-icon__default-bg-color);color:var(--product-icon__default-color)}",""])},853:function(e,t,r){"use strict";var n=r(8),a=r(269),o=r(854),i=function(e,t){return{setActivePage:function(r){return e(Object(a.b)({componentName:t.componentName,activePage:r}))}}},s=function(e,t){return{activePage:e.paginationMemory[t.componentName]}};t.a=Object(n.connect)(s,i)(o.a)},854:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),s=r.n(i),c=r(1),l=r.n(c),u=r(263),m=r(5),p=r(32),d=r(855),f=(r.n(d),function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()),g=function(e){function t(){var e,r,o,i;n(this,t);for(var c=arguments.length,l=Array(c),m=0;m<c;m++)l[m]=arguments[m];return r=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.getClasses=function(){return Object(p.b)(["pagination",o.props.customClass+"-pagination"])},o.goToPage=function(e,t){e.preventDefault(),o.props.setActivePage&&o.props.setActivePage(t)},o.renderNextButton=function(e){var t=o.getClasses(),r=0===o.props.totalPages||e===o.props.totalPages-1;return s.a.createElement("a",{className:t("text",{disabled:r}),onClick:function(t){return!r&&o.goToPage(t,e+1)}},o.context.t("Next"),s.a.createElement(u.a,{name:"arrowNext",customClass:t("arrow","next")}))},o.renderPreviousButton=function(e){var t=o.getClasses(),r=0===o.props.totalPages||0===e;return s.a.createElement("a",{className:t("text",{disabled:r}),onClick:function(t){return!r&&o.goToPage(t,e-1)}},s.a.createElement(u.a,{name:"arrowPrevious",customClass:t("arrow","previous")}),o.context.t("Previous"))},i=r,a(o,i)}return o(t,e),f(t,[{key:"render",value:function(){for(var e=this,t=this.getClasses(),r=this.props.activePage,n=r-Math.floor(m.default.Pagination.maxPages/2)>0?r-Math.floor(m.default.Pagination.maxPages/2):0,a=r+m.default.Pagination.maxPages/2<=this.props.totalPages?r+m.default.Pagination.maxPages/2:this.props.totalPages,o=[],i=n;i<a;i++)!function(n){var a=s.a.createElement("a",{key:n,className:t("page",r===n?"active":null),onClick:function(t){return e.goToPage(t,n)}},n+1);o.push(a)}(i);var c=this.props.content(r);return s.a.createElement("div",{className:this.props.containerClassName},s.a.createElement("div",{className:t("content")},c),s.a.createElement("div",{className:t("container")},this.renderPreviousButton(r),s.a.createElement("div",{className:t("pages")},o),this.renderNextButton(r)))}}]),t}(i.Component);g.propTypes={totalPages:l.a.number.isRequired,content:l.a.func.isRequired,activePage:l.a.number,containerClassName:l.a.string,componentName:l.a.string,customClass:l.a.string},g.contextTypes={t:l.a.func.isRequired},g.defaultProps={activePage:0,containerClassName:"",customClass:""},t.a=g},855:function(e,t,r){var n=r(856);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(767)(n,a);n.locals&&(e.exports=n.locals)},856:function(e,t,r){t=e.exports=r(33)(!1),t.push([e.i,".pagination{display:-ms-flexbox;display:flex;list-style-type:none;margin:0;padding:0}.pagination__container{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;height:3.6rem;line-height:3.6rem;padding:0 1rem;border-top:1px solid var(--component__border-color);background-color:var(--pagination__bg-color)}.pagination__text{color:var(--link__color)}.pagination__text,.pagination__text--disabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pagination__text--disabled{cursor:not-allowed}.pagination__text:hover{color:var(--link__color--hover)}.pagination__arrow--previous{margin-right:.5rem}.pagination__text--disabled,.pagination__text--disabled:hover{color:var(--link__color--disabled)}.pagination__page{color:var(--component__color-secondary);padding:.6rem .75rem}.pagination__page:hover{color:var(--component__color-primary);background:var(--pagination__bg-color-hover)}.pagination__page--active,.pagination__page--active:hover{color:var(--component__color-primary);background:var(--pagination__bg-color--active)}.pagination__pages{line-height:1rem;border:1px solid var(--component__border-color);background:var(--tertiary__bg-color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pagination__arrow--next{margin-left:.5rem}",""])}});