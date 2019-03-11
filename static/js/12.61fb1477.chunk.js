webpackJsonp([12],{1303:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1304),c=a(6),i=a(1308),l=(a.n(i),Object(c.b)("market-data-cards")),s=function(e){var t=e.level1,a=e.instruments,r=e.products,c=a.map(function(e){var a=e.InstrumentId,c=t[a];if(!c)return null;var i=e.Product1,s=e.Product2,u=r.find(function(e){return e.ProductId===i}),d=r.find(function(e){return e.ProductId===s});return n.a.createElement("div",{key:a,className:l("card")+" container-with-shadow"},n.a.createElement(o.a,{product1:u,product2:d,level1Data:c}))});return n.a.createElement("div",{className:l()},n.a.createElement("div",{className:l("row")},c))};t.a=s},1304:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1),c=a.n(o),i=a(6),l=a(352),s=a(973),u=a(49),d=a(977),m=a(27),f=a(1305),b=a(1306),p=(a.n(b),Object(i.b)("market-data-card")),v=function(e,t){var a=e.product1,r=e.product2,o=e.level1Data,c=o.LastTradedPx,i=o.Rolling24HrVolume,l=o.Rolling24HrPxChange,b=o.SessionHigh,v=o.SessionLow,x=o.BestBid,_=o.BestOffer,g=e.coin,h=Object(f.a)(c,l);return n.a.createElement("div",{className:p()},n.a.createElement("div",{className:p("row")},g?n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{iconFileName:a.iconFileName,size:40}),n.a.createElement("div",{className:p("coins-header-text")},a.ProductFullName+" "+a.ProductSymbol)):n.a.createElement(s.a,{label:a.ProductFullName+" / "+r.ProductFullName,text:a.ProductSymbol+"/"+r.ProductSymbol,customClass:p(),classModifiers:"header"})),n.a.createElement("div",{className:p("row")},n.a.createElement(s.a,{label:t.t("Last Price"),text:Object(m.b)(c,r.ProductSymbol),customClass:p()}),n.a.createElement(s.a,{label:t.t("24-Hour Change"),text:Object(m.b)(h,r.ProductSymbol),customClass:p(),classModifiers:h.gte(0)?"24h-positive":"24h-negative"})),n.a.createElement("div",{className:p("row")},n.a.createElement(s.a,{label:t.t("24-Hour Pct Change"),text:Object(m.c)(l),customClass:p(),classModifiers:l>=0?"24h-positive":"24h-negative"}),n.a.createElement(s.a,{label:t.t("24-Hour Vol."),text:Object(m.b)(i,a.ProductSymbol),customClass:p()})),n.a.createElement("div",{className:p("row")},n.a.createElement(s.a,{label:t.t("24-Hour High"),text:Object(m.b)(b,r.ProductSymbol),customClass:p()}),n.a.createElement(s.a,{label:t.t("24-Hour Low"),text:Object(m.b)(v,r.ProductSymbol),customClass:p()})),n.a.createElement("div",{className:p("row")},n.a.createElement(s.a,{label:t.t("Bid"),text:Object(m.b)(x,r.ProductSymbol),customClass:p(),classModifiers:"bid"}),n.a.createElement(s.a,{label:t.t("Ask"),text:Object(m.b)(_,r.ProductSymbol),customClass:p(),classModifiers:"ask"})),g&&n.a.createElement("div",{className:p("row")},n.a.createElement("div",{className:p("activity"),onClick:function(){}},"View Activity \u2192"),n.a.createElement("div",{className:p("icons")},n.a.createElement("div",{className:p("icon-container"),onClick:function(){}},n.a.createElement(u.a,{name:"buy",customClass:p("icon")})),n.a.createElement("div",{className:p("icon-container"),onClick:function(){}},n.a.createElement(u.a,{name:"sell",customClass:p("icon")})))))};v.propTypes={level1Data:l.b.isRequired,product1:c.a.object.isRequired,product2:c.a.object.isRequired,coin:c.a.bool},v.contextTypes={t:c.a.func.isRequired},t.a=v},1305:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var r=a(39),n=a.n(r),o=function(e,t){return e=new n.a(e),t=new n.a(t/100),e.times(t.div(t.plus(1)))}},1306:function(e,t,a){var r=a(1307);"string"===typeof r&&(r=[[e.i,r,""]]);var n={hmr:!1};n.transform=void 0;a(942)(r,n);r.locals&&(e.exports=r.locals)},1307:function(e,t,a){t=e.exports=a(48)(!1),t.push([e.i,".market-data-card{background:var(--component__bg-color);border-radius:1rem;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around;height:100%}.market-data-card__row{height:6.5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding-left:2.5rem;border-bottom:1px solid var(--border__color)}.market-data-card__row:last-child{-webkit-box-shadow:none;box-shadow:none;border-bottom:none}.market-data-card__coins-header-text{font-size:2rem;padding-left:1.8rem;margin-right:auto;color:var(--font__color-primary)}.market-data-card__activity{font-size:1.4rem;color:var(--information__color);cursor:pointer}.market-data-card__icon-container{display:inline-block;border:solid 1px var(--border__color);height:4rem;width:4rem;margin-right:1.6rem;cursor:pointer}.market-data-card__icon{margin-left:10px;margin-top:12px;color:var(--font__color-secondary)}.market-data-card__lwt-container{-ms-flex-direction:column-reverse;flex-direction:column-reverse;width:50%}.market-data-card__lwt-label{padding-top:.2rem;font-size:1.1rem;margin:0;color:var(--font__color-secondary)}.market-data-card__lwt-text{white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;font-size:1.6rem;color:var(--font__color-primary)}.market-data-card__lwt-label--header{color:var(--font__color-secondary)}.market-data-card__lwt-text--header{font-weight:700;font-size:2rem}.market-data-card__lwt-text--bid{color:var(--exchange-colors__buy)}.market-data-card__lwt-text--ask{color:var(--exchange-colors__sell)}.market-data-card__lwt-text--24h-positive{color:var(--exchange-colors__buy)}.market-data-card__lwt-text--24h-negative{color:var(--exchange-colors__sell)}",""])},1308:function(e,t,a){var r=a(1309);"string"===typeof r&&(r=[[e.i,r,""]]);var n={hmr:!1};n.transform=void 0;a(942)(r,n);r.locals&&(e.exports=r.locals)},1309:function(e,t,a){t=e.exports=a(48)(!1),t.push([e.i,".market-data-cards__row{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-pack:center;justify-content:center;max-width:120rem}.market-data-cards__card{width:35rem;height:32rem;margin:0 2rem 4rem;border-radius:1rem;overflow:hidden}",""])},220:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(8),n=a(1303),o=a(976),c=function(e){return{level1:e.level1,instruments:e.instrument.instruments,products:Object(o.d)(e)}};t.default=Object(r.connect)(c)(n.a)},973:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1),c=a.n(o),i=a(28),l=a.n(i),s=a(202),u=a.n(s),d=a(344),m=a(991),f=(a.n(m),new u.a({name:"ap-label-with-text",outputIsString:!0})),b=function(e){var t=e.label,a=e.text,r=e.customClass,o=e.classModifiers,c=new u.a({name:r,outputIsString:!0});return n.a.createElement("div",{className:l()(f(),c("lwt-container",o))},n.a.createElement("label",{className:l()("ap--label",f("label"),c("lwt-label",o))},t),n.a.createElement("span",{className:l()(f("text"),c("lwt-text",o)),"data-test":Object(d.a)(e,"label")},a))};b.propTypes={label:c.a.string.isRequired,text:c.a.oneOfType([c.a.string,c.a.number,c.a.object]),customClass:c.a.string,classModifiers:c.a.oneOfType([c.a.string,c.a.arrayOf(c.a.string),c.a.objectOf(c.a.bool)]),dataTest:c.a.string},b.defaultProps={customClass:"custom-label-with-text"},t.a=b},976:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"d",function(){return u}),a.d(t,"c",function(){return d}),a.d(t,"b",function(){return m}),a.d(t,"e",function(){return f});var r=a(124),n=(a.n(r),a(346)),o=function(e){return e.product.products},c=function(e){return e.position.positions},i=function(e){return e.productManifest.manifest},l=Object(r.createSelector)([function(e){return e.product},function(e){return e.position},function(e){return e.productManifest}],function(e,t,a){return e.fetching||t.fetching||a.fetching}),s=Object(r.createSelector)([o,function(e){return e.product.decimalPlaces},c],function(e,t,a){return e.map(function(e){var r=a[e.ProductId];if(!r)return e;var o=t[e.Product],c=Object(n.a)(r,o);return Object.assign({},c,e)})}),u=Object(r.createSelector)([s,i],function(e,t){return e.map(function(e){var a=t[e.Product]||{iconFileName:e.Product+"DEFAULT_ICON"};return Object.assign({},e,a)})}),d=Object(r.createSelector)([u,function(e,t){return t}],function(e,t){return e.find(function(e){return e.ProductId===t})}),m=Object(r.createSelector)(u,function(e){return e.filter(function(e){return"-"!==e.Amount})}),f=Object(r.createSelector)(u,function(e){return e.filter(function(e){return"-"===e.Amount})})},977:function(e,t,a){"use strict";var r=a(8),n=a(978),o=function(e,t){return{productManifest:e.productManifest,iconFileName:t.iconFileName,size:t.size||48}};t.a=Object(r.connect)(o)(n.a)},978:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1),c=a.n(o),i=a(22),l=a(6),s=a(979),u=(a.n(s),Object(l.b)("product-icon")),d=function(e){var t=e.productManifest,a=e.iconFileName,r=e.size,o=void 0===r?48:r,c=e.customClass;return t.fetching?null:(null==a&&console.log(a),a&&a.indexOf("DEFAULT_ICON")>0?m(o,a):n.a.createElement("img",{alt:"product icon",height:o+"px",className:c,src:Object(i.a)("/local/product-icons/"+a)}))},m=function(e,t){return n.a.createElement("div",{className:u(null,"default"),style:{width:e,height:e,MozBorderRadius:e/2,WebkitBorderRadius:e/2,borderRadius:e/2,textAlign:"center",fontSize:.5*e,lineHeight:e+"px"}},n.a.createElement("span",null,t.charAt(0)))};d.propTypes={productManifest:c.a.object.isRequired,iconFileName:c.a.string,size:c.a.number},t.a=d},979:function(e,t,a){var r=a(980);"string"===typeof r&&(r=[[e.i,r,""]]);var n={hmr:!1};n.transform=void 0;a(942)(r,n);r.locals&&(e.exports=r.locals)},980:function(e,t,a){t=e.exports=a(48)(!1),t.push([e.i,".product-icon--default{background:var(--product-icon__default-bg-color);color:var(--product-icon__default-color)}",""])},991:function(e,t,a){var r=a(943);"string"===typeof r&&(r=[[e.i,r,""]]);var n={hmr:!1};n.transform=void 0;a(942)(r,n);r.locals&&(e.exports=r.locals)}});