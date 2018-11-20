webpackJsonp([36],{1317:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var l=n(0),c=n.n(l),i=n(1),s=n.n(i),u=n(5),y=n(946),d=n(1318),f=(n.n(d),function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}()),p=Object(u.b)("loyalty-token"),m=function(t){function e(){var t,n,r,l;o(this,e);for(var c=arguments.length,i=Array(c),s=0;s<c;s++)i[s]=arguments[s];return n=r=a(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(i))),r.loyaltyDisabled=function(t,e){return!t||e.Amount<=0},r.getLoyaltyLabel=function(t,e,n){var o=r.context.t("You must have a balance to use "+e+" to pay for fees"),a=r.context.t("Use {ProductSymbol} to pay for fees",{ProductSymbol:e}),l=r.context.t("({LoyaltyDiscount}% discount )",{LoyaltyDiscount:n});return(t?o:a)+" "+l},l=n,a(r,l)}return r(e,t),f(e,[{key:"componentWillMount",value:function(){this.props.getOperatorLoyaltyFeeConfigs()}},{key:"render",value:function(){var t=this,e=this.props,n=e.loyaltyOMSEnabled,o=e.loyaltyOMSProducts,a=e.currentAccount,r=e.updateAccount,l=a&&a.LoyaltyEnabled?a.LoyaltyProductId:0,i="";if(o.length>1){var s=o.slice().map(function(t){return t.ProductSymbol}),u=s.pop();i=this.context.t("{products} or {lastProduct}",{products:s.join(", "),lastProduct:u})}else 1===o.length&&(i=o[0].ProductSymbol);return c.a.createElement("div",{className:p()},c.a.createElement("h1",{className:p("header")},this.context.t("Trading Fees")),c.a.createElement("p",{className:p("description")},i?this.context.t("Using {displayProducts} for transaction fees applies a discount to your trading fee. If you hold {displayProducts} in your account, you have the option of having your trading fees automatically subtracted from your {displayProducts} balance.",{displayProducts:i}):this.context.t("Loyalty token has not been set up on this exchange.")),n&&c.a.createElement("div",{className:"row loyalty"},c.a.createElement("div",{className:"col-xs-12"},o.map(function(e,o){var a=t.loyaltyDisabled(n,e);return c.a.createElement(y.a,{key:e.ProductId,id:"loyaltyToken"+e.ProductId,name:"loyaltyToken",value:o,label:t.getLoyaltyLabel(a,e.ProductSymbol,e.LoyaltyDiscount),checked:l===e.ProductId,onChange:function(){return r(e)},disabled:a})}),c.a.createElement(y.a,{id:"loyaltyToken",name:"loyaltyToken",value:-1,label:this.context.t("Use default fees"),checked:0===l,onChange:function(){return r()}}))))}}]),e}(c.a.Component);e.a=m,m.defaultProps={loyaltyOMSProducts:[],loyaltyOMSEnabled:!1},m.propTypes={loyaltyOMSEnabled:s.a.bool,loyaltyOMSProducts:s.a.array},m.contextTypes={t:s.a.func.isRequired}},1318:function(t,e,n){var o=n(1319);"string"===typeof o&&(o=[[t.i,o,""]]);var a={hmr:!1};a.transform=void 0;n(884)(o,a);o.locals&&(t.exports=o.locals)},1319:function(t,e,n){e=t.exports=n(43)(!1),e.push([t.i,".loyalty-token{padding:3rem;background:var(--settings__body-bg-color);height:var(--settings__body-height);width:100%}.loyalty-token__header{color:var(--component__color-primary);font-size:var(--advanced-settings__header-text-size);margin-bottom:var(--advanced-settings__header-text-margin-bottom);letter-spacing:var(--advanced-settings__header-text-letter-spacing)}.loyalty-token__description{max-width:30.6rem;line-height:1.5;letter-spacing:.5px;color:var(--font__color-secondary)}@media only screen and (max-width:48rem){.loyalty-token{height:unset;-ms-flex:1 1;flex:1 1}}",""])},1320:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return l});var o=n(109),a=(n.n(o),n(25)),r=Object(o.createSelector)([function(t){return t.loyaltyFee.loyaltyFees},function(t){return t.position.positions}],function(t,e){var n=[];return e=Object.keys(e).map(function(t){return e[t]}),t.forEach(function(t){if(t.IsEnabled){var o=e.find(function(e){return e.ProductId===t.LoyaltyProductId});if(o){var r=100*t.LoyaltyDiscount,l=Math.floor(r)!==r?r.toString().split(".")[1].length||0:0;o.LoyaltyDiscount=Object(a.b)(r,l),n.push(o)}}}),{loyaltyOMSEnabled:!0,loyaltyOMSProducts:n}}),l=Object(o.createSelector)([function(t){return t.user.accounts},function(t){return t.user.selectedAccountId}],function(t,e){return t.find(function(t){return e===t.AccountId})})},901:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(7),a=n(8),r=n(1317),l=n(337),c=n(36),i=n(1320),s=function(t){var e=Object(i.b)(t);return{loyaltyOMSEnabled:e.loyaltyOMSEnabled,loyaltyOMSProducts:e.loyaltyOMSProducts,currentAccount:Object(i.a)(t)}},u={getOperatorLoyaltyFeeConfigs:l.d,updateAccount:c.s},y=Object(o.connect)(s,u)(r.a);e.default=Object(a.j)({form:"loyaltyTokenForm",onSubmit:function(){}})(y)},946:function(t,e,n){"use strict";function o(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}var a=n(0),r=n.n(a),l=n(1),c=n.n(l),i=n(8),s=n(5),u=function(t){var e=t.input,n=t.customClass,a=t.meta,l=t.inline,c=t.label,i=t.info,u=t.id,y=o(t,["input","customClass","meta","inline","label","info","id"]),d=Object(s.b)(["ap-radio",n]);return delete y.meta,r.a.createElement("div",{className:d(null,{inline:l})},r.a.createElement("input",Object.assign({className:d("input"),type:"radio"},e,y,{id:u})),r.a.createElement("label",{className:d("label"),htmlFor:u},c,r.a.createElement("span",{className:d("check")}),r.a.createElement("span",{className:d("checked")})),i&&r.a.createElement("small",{className:"form-text-muted "+d("radio-info")},i),a.dirty&&a.error&&r.a.createElement("span",{className:d("radio-error")},a.error))},y=function(t){return r.a.createElement(i.a,Object.assign({name:t.name,component:u,type:"radio"},t))};y.defaultProps={name:"",label:"",autoFocus:!1,required:!1,readOnly:!1,inline:!1,info:""},y.propTypes={name:c.a.string,label:c.a.string,customClass:c.a.string,autoFocus:c.a.bool,required:c.a.bool,readOnly:c.a.bool,inline:c.a.bool,info:c.a.string,id:c.a.string.isRequired},e.a=y}});