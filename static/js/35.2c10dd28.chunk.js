webpackJsonp([35],{1506:function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}var r=a(0),i=a.n(r),o=a(1),s=a.n(o),l=a(12),c=a(38),d=a(306),m=function(e){var t=e.input,a=e.customClass,r=e.meta,o=e.inline,s=e.label,l=e.info,m=e.id,u=n(e,["input","customClass","meta","inline","label","info","id"]),b=Object(c.b)(["ap-checkbox",a]);return delete u.meta,i.a.createElement("div",{className:b("checkbox",o&&"inline")},i.a.createElement("input",Object.assign({className:b("checkbox"),type:"checkbox"},t,u,{id:m})),i.a.createElement("label",{htmlFor:m},s,t&&t.value&&i.a.createElement(d.a,{name:"checkbox",customClass:b("icon")})),l&&i.a.createElement("small",{className:"form-text-muted "+b("checkbox-info")},l),r.dirty&&r.error&&i.a.createElement("span",{className:""+b("checkbox-error")},r.error))},u=function(e){return i.a.createElement(l.a,Object.assign({name:e.name,component:m},e,{type:"checkbox"}))};u.defaultProps={name:"",label:"",autoFocus:!1,required:!1,readOnly:!1,inline:!1,info:""},u.propTypes={name:s.a.string,label:s.a.string,customClass:s.a.string,autoFocus:s.a.bool,required:s.a.bool,readOnly:s.a.bool,inline:s.a.bool,info:s.a.string,id:s.a.string},t.a=u},2222:function(e,t,a){"use strict";var n=a(10),r=a(2223),i=a(5),o=a(44),s=function(e){var t=e.margin.marginStatus;return{cardText:i.default.MarginTrading.cardText,modalText:i.default.MarginTrading.modalText,marginStatus:t}},l={getMarginStatus:o.p};t.a=Object(n.connect)(s,l)(r.a)},2223:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),o=a.n(i),s=a(38),l=a(2224),c=a(2241),d=(a.n(c),Object(s.b)("trade-settings")),m=function(e,t){var a=e.getMarginStatus,i=e.cardText,o=e.modalText;return Object(n.useEffect)(function(){a()},[]),r.a.createElement("div",{className:d()},r.a.createElement("div",null,r.a.createElement("div",{className:d("header")},r.a.createElement("div",{className:d("header-text")},t.t("Adjust Trade Settings")),r.a.createElement("div",{className:d("description")},t.t("Lorem ipsum dolor sit amet, consectetur adipiscing  elit."))),r.a.createElement("div",{className:d("settings")},r.a.createElement(l.a,{cardText:i,modalText:o})),r.a.createElement("div",{className:d("row")})))};m.contextTypes={t:o.a.func.isRequired},t.a=m},2224:function(e,t,a){"use strict";var n=a(2225);t.a=n.a},2225:function(e,t,a){"use strict";var n=a(10),r=a(17),i=a(2226),o=function(e){var t=e.user.userInfo.MarginBorrowerEnabled,a=e.margin.accountState.marginStatus;return{marginEnabled:t&&"Approved"===a?"enabled":"disabled",marginStatus:a}},s=function(e){return{openEnableMarginTradingModal:function(){return e(Object(r.e)(r.b.MARGIN_TRADING))},openDisableMarginTradingModal:function(){return e(Object(r.e)(r.b.MARGIN_DISABLE))}}};t.a=Object(n.connect)(o,s)(i.a)},2226:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),o=a.n(i),s=a(38),l=a(307),c=a(335),d=a(2227),m=a(2231),u=a(2236),b=Object(s.b)("trade-settings"),g=function(e,t){var a=e.marginEnabled,n=e.marginStatus,i=e.openEnableMarginTradingModal,o=e.openDisableMarginTradingModal,s=e.cardText,g=e.modalText,p=e.disabled,f="Pending"===n?n:a;return r.a.createElement("section",{className:b("box")},"disabled"===a&&r.a.createElement(c.a,{name:"alert"}),r.a.createElement("header",{className:b("box-header")},r.a.createElement("span",null,t.t("Margin Trading"))),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{className:b("box-body")},r.a.createElement("p",null,t.t(s)),r.a.createElement("p",{className:b("status")},t.t("Margin Trading is"),r.a.createElement("strong",null," ",t.t(f.toLowerCase())),"."),r.a.createElement("div",null,r.a.createElement(l.a,{type:"button",customClass:b("submit-button")+" "+f,onClick:"disabled"===a?i:o,disabled:p||"Pending"===n},r.a.createElement("span",null,"Pending"===n?t.t("Pending"):"enabled"===a?t.t("Disable"):t.t("Enable"))))),r.a.createElement(m.a,{text:g}),r.a.createElement(d.a,null),r.a.createElement(u.a,null))};g.contextTypes={t:o.a.func.isRequired},g.defaultProps={marginEnabled:"disabled"},t.a=g},2227:function(e,t,a){"use strict";var n=a(2228);t.a=n.a},2228:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),o=(a.n(i),a(38)),s=a(310),l=a(311),c=a(17),d=a(2229),m=(a.n(d),Object(o.b)("margin-trading-confirmation")),u=function(e,t){var a=e.isOpen,n=e.close;return r.a.createElement(s.a,{isOpen:a,title:t.t("Margin Trading"),close:n,footer:{buttonText:t.t("OK"),onClick:n},customClass:m("modal")},r.a.createElement("div",null,r.a.createElement("p",null,t.t("We will review your account and then notify you when you begin margin trading on the exchange.")),r.a.createElement("br",null),r.a.createElement("p",null,t.t("Thanks so much!"))))};u.contextTypes={t:i.func.isRequired},u.propTypes={close:i.func.isRequired,isOpen:i.bool.isRequired},t.a=Object(l.a)({name:c.b.MARGIN_CONFIRM})(u)},2229:function(e,t,a){var n=a(2230);"string"===typeof n&&(n=[[e.i,n,""]]);var r={hmr:!1};r.transform=void 0;a(866)(n,r);n.locals&&(e.exports=n.locals)},2230:function(e,t,a){t=e.exports=a(39)(!1),t.push([e.i,".margin-trading-confirmation__modal__content p{font-size:1.6rem}.margin-trading-confirmation__modal__header{font-size:1.6rem;background-color:rgb(var(--pc__accent-highlight))}.margin-trading-confirmation__modal__btn{background-color:rgb(var(--pc__accent-highlight));width:10rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}",""])},2231:function(e,t,a){"use strict";var n=a(2232);t.a=n.a},2232:function(e,t,a){"use strict";var n=a(10),r=a(12),i=a(54),o=a.n(i),s=a(2233),l=a(17),c=a(311),d=a(44),m="marginTrading",u=function(e){var t=e.user.userInfo.MarginBorrowerEnabled,a=t?"enabled":"disabled",n=e.form.marginTrading;return{buttonIsDisabled:!o()(n,"values.terms")||"disabled"!==a,showPhone:o()(n,"values.showPhone",!1),phone:o()(n,"values.phone")}},b=function(e){return{resetForm:function(){return e(Object(r.l)(m))},submitForm:function(){e(Object(d.j)()).then(function(t){t&&(e(Object(l.e)(l.b.MARGIN_CONFIRM)),e(Object(d.p)()))})}}},g=Object(n.connect)(u,b)(s.a),p=Object(r.j)({form:m,onSubmit:function(){}})(g);t.a=Object(c.a)({name:l.b.MARGIN_TRADING})(p)},2233:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),o=a.n(i),s=a(38),l=a(310),c=a(1506),d=(a(931),a(2234)),m=(a.n(d),Object(s.b)("enable-margin-confirmation")),u=function(e,t){var a=e.isOpen,n=e.close,i=(e.showPhone,e.buttonIsDisabled),o=e.text,s=e.submitting,d=e.submitForm;return r.a.createElement(l.a,{isOpen:a,title:t.t("Margin Trading"),close:n,footer:{buttonType:"submit",buttonText:r.a.createElement("span",null,s?t.t("Pending"):t.t("Enable")),onClick:d,disabled:i||s},customClass:m("modal")},r.a.createElement("div",{className:m("modal-header")},r.a.createElement("h3",{className:m("header")},t.t("Are you sure you want to enable margin trading?")),r.a.createElement("div",{className:m("scrollable")},r.a.createElement("p",null,t.t(o))),r.a.createElement("div",{className:m("checkboxes")},r.a.createElement("div",null,r.a.createElement(c.a,{name:"terms",id:"agree",label:t.t("I agree to the terms.")})))))};u.contextTypes={t:o.a.func.isRequired},t.a=u},2234:function(e,t,a){var n=a(2235);"string"===typeof n&&(n=[[e.i,n,""]]);var r={hmr:!1};r.transform=void 0;a(866)(n,r);n.locals&&(e.exports=n.locals)},2235:function(e,t,a){t=e.exports=a(39)(!1),t.push([e.i,".enable-margin-confirmation__modal{max-width:51.2rem}.enable-margin-confirmation__modal__header{font-size:1.6rem;background-color:rgb(var(--pc__accent-highlight))}.ap-icon--close{color:var(--settings__body-header-title-font-color)}.enable-margin-confirmation__modal__btn{background-color:rgb(var(--pc__accent-highlight));width:10rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.enable-margin-confirmation__header{font-size:1.6rem;padding:2.1rem 0;padding-top:0}.enable-margin-confirmation__scrollable{background-color:var(--side-menu__item-bg-color--selected);padding:1.7rem 2.1rem;max-height:26.8rem;overflow:scroll;color:var(--component__color-secondary)}.enable-margin-confirmation__scrollable::-webkit-scrollbar-thumb{background-color:rgb(var(--pc__accent-highlight));width:.4rem}.enable-margin-confirmation__checkboxes{margin-top:1.7rem}.enable-margin-confirmation__phone-wrapper{margin-top:1rem}",""])},2236:function(e,t,a){"use strict";var n=a(2237);t.a=n.a},2237:function(e,t,a){"use strict";var n=a(10),r=a(17),i=a(44),o=a(2238),s=a(311),l=function(e){return{disableMargin:function(){e(Object(i.m)()),e(Object(i.p)())}}},c=Object(n.connect)(null,l)(o.a);t.a=Object(s.a)({name:r.b.MARGIN_DISABLE})(c)},2238:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),o=a.n(i),s=a(38),l=a(310),c=a(2239),d=(a.n(c),Object(s.b)("disable-margin-confirmation")),m=function(e,t){var a=e.close,n=e.isOpen,i=e.disableMargin;return r.a.createElement(l.a,{isOpen:n,title:t.t("Margin Trading"),close:a,footer:{buttonText:t.t("OK"),onClick:i},customClass:d("modal")},r.a.createElement("div",null,r.a.createElement("p",null,t.t("Are you sure want to turn off margin? If you do so, you will have to reapply to begin using margin again.")),r.a.createElement("br",null),r.a.createElement("p",null,t.t("While margin will be turned off, any positions will remain open until closed or liquidated."))))};m.contextTypes={t:o.a.func.isRequired},m.propTypes={close:o.a.func.isRequired,isOpen:o.a.bool.isRequired},t.a=m},2239:function(e,t,a){var n=a(2240);"string"===typeof n&&(n=[[e.i,n,""]]);var r={hmr:!1};r.transform=void 0;a(866)(n,r);n.locals&&(e.exports=n.locals)},2240:function(e,t,a){t=e.exports=a(39)(!1),t.push([e.i,".disable-margin-confirmation__modal__content p{font-size:1.6rem}.disable-margin-confirmation__modal__header{font-size:1.6rem;background-color:var(--danger__color)}.disable-margin-confirmation__modal__btn{background-color:var(--danger__color);width:10rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}",""])},2241:function(e,t,a){var n=a(2242);"string"===typeof n&&(n=[[e.i,n,""]]);var r={hmr:!1};r.transform=void 0;a(866)(n,r);n.locals&&(e.exports=n.locals)},2242:function(e,t,a){t=e.exports=a(39)(!1),t.push([e.i,".trade-settings__header{margin:var(--settings__body-header-margin)}.trade-settings__header-text{font-size:var(--settings__body-header-title-font-size);color:var(--settings__body-header-title-font-color);letter-spacing:var(--settings__body-header-title-letter-spacing);padding-bottom:var(--settings__body-header-title-padding-bottom)}.trade-settings__description{font-size:var(--settings__body-header-sub-title-font-size);color:var(--settings__body-header-sub-title-font-color);line-height:var(--settings__body-header-sub-title-line-height);letter-spacing:.5px}.trade-settings__settings{overflow:visible;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-left:var(--settings__kyc-cards-container-margin-l)}.trade-settings__box{position:relative;border:var(--settings__kyc-card-container-border-size) solid var(--settings__kyc-card-container-border-color);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 1;flex:1 1;min-width:30rem;max-width:30rem;height:var(--settings__kyc-card-height);color:var(--component__color-secondary);margin-right:3rem;margin-bottom:3rem;background-color:var(--side-menu__item-bg-color--selected);-webkit-box-shadow:var(--settings__card-box-shadow);box-shadow:var(--settings__card-box-shadow);border-radius:var(--settings__kyc-card-border-radius)}.trade-settings__box-header{padding:2.8rem 2.3rem;font-size:1.6rem;color:var(--settings__body-header-title-font-color)}.trade-settings__box-body{height:calc(100% - 29.8rem);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;padding:2.8rem 2.3rem;line-height:1.6rem;letter-spacing:.55px}.trade-settings__status{color:var(--settings__body-header-title-font-color);margin-bottom:2rem}.trade-settings .divider{background:var(--settings__kyc-card-container-border-color)}.trade-settings__submit-button{height:unset;text-transform:uppercase;padding:.2rem 2.7rem}.trade-settings__submit-button,.trade-settings__submit-button .disabled{background-color:rgb(var(--pc__accent-highlight))}.trade-settings__submit-button .enabled{background-color:var(--danger__color)}.trade-settings .ap-icon--alert{text-align:center;position:absolute;right:-5px;top:-5px;width:unset;color:var(--settings__body-header-title-font-color);background:rgb(var(--pc__accent-highlight));border:1px solid rgb(var(--pc__accent-highlight));padding:7px;border-radius:50%}.enabled__btn{background:var(--danger__color)}",""])},887:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2222);t.default=n.a},912:function(e,t,a){var n,r;!function(){"use strict";function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var o=a.apply(null,n);o&&e.push(o)}else if("object"===r)for(var s in n)i.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}var i={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(a.default=a,e.exports=a):(n=[],void 0!==(r=function(){return a}.apply(t,n))&&(e.exports=r))}()},928:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(937),r=function(e,t){return e.dataTest||(Object(n.a)(e[t])?e[t]:"")}},931:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}a.d(t,"a",function(){return g});var i=a(0),o=a.n(i),s=a(1),l=a.n(s),c=a(912),d=a.n(c),m=a(12),u=a(38),b=a(928),g=function(e,t){var a=e.input,i=e.customClass,s=e.classModifiers,l=e.meta,c=e.rows,m=e.info,g=e.label,p=e.labelInInput,f=e.rightLabelText,_=e.iconComponent,h=r(e,["input","customClass","classModifiers","meta","rows","info","label","labelInInput","rightLabelText","iconComponent"]),v=c>1,x=Object(u.b)(["ap-input",i]),y=Object.assign({className:d()("form-control",n({},x("with-label"),p),n({},x("input","error",""),l.dirty&&l.error),n({},x("text-area"),v),f?x("input","with-right-label"):x("input",s))},a,h);return o.a.createElement("div",{className:"form-group "+x("input-wrapper",s)},"hidden"!==e.type&&o.a.createElement("label",{className:"ap--label "+x("label",s)},g),o.a.createElement("div",{className:d()(f&&x("input-with-right-label-container"),x("input-box"))},p&&o.a.createElement("span",{className:"label-in-input "+x("label-in-input")},p),v?o.a.createElement("textarea",Object.assign({},y,{"data-test":Object(b.a)(e,"label")})):_?o.a.createElement("div",{className:x("input-with-icon")},o.a.createElement("input",Object.assign({"data-test":Object(b.a)(e,"label")},y)),_):o.a.createElement("input",Object.assign({"data-test":Object(b.a)(e,"label")},y)),f?o.a.createElement("div",{className:x("right-label")},o.a.createElement("span",{className:x("right-label-span")},f)):null,m&&o.a.createElement("div",{className:"form-text-muted "+x("info")},m),l.touched&&l.error&&o.a.createElement("div",{className:x("error")},t.t(l.error))))};g.contextTypes={t:l.a.func.isRequired};var p=function(e){return o.a.createElement(m.a,Object.assign({name:e.name,component:g},e))};p.defaultProps={name:"",label:"",labelInInput:"",type:"",classModifiers:"",placeholder:"",info:"",autoFocus:"",disabled:!1,required:!1,rows:1},p.propTypes={name:l.a.string,label:l.a.string,labelInInput:l.a.string,type:l.a.string,customClass:l.a.string,classModifiers:l.a.oneOfType([l.a.string,l.a.arrayOf(l.a.string)]),placeholder:l.a.string,info:l.a.oneOfType([l.a.string,l.a.object]),autoFocus:l.a.string,disabled:l.a.bool,required:l.a.bool,rightLabelText:l.a.string,rows:l.a.number,dataTest:l.a.string},p.contextTypes={t:l.a.func.isRequired},t.b=p},937:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e){return"string"===typeof e||e instanceof String}}});