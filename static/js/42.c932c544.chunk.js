webpackJsonp([42],{2165:function(e,t,r){"use strict";var a=r(2166);t.a=a.a},2166:function(e,t,r){"use strict";var a=r(9),n=r(2167),i=r(2170),s=function(e){var t=e.transfer.fetching;return{transfers:Object(i.a)(e),fetching:t}};t.a=Object(a.connect)(s)(n.a)},2167:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(3),s=r.n(i),o=r(888),c=r(290),d=r(36),l=r(2168),_=(r.n(l),Object(d.b)("transfer-history")),m=function(e,t){var r=e.transfers,a=e.fetching;return a?n.a.createElement("div",{className:_("spinner")},n.a.createElement(o.a,{isInline:!0})):0!==r.length||a?r.map(function(e,t){return n.a.createElement("div",{key:t,className:_("item")},e)}):n.a.createElement("div",{className:_("item")},n.a.createElement(c.a,{name:"stop",customClass:_("icon")}),t.t("No Transfer History"))};m.contextTypes={t:s.a.func.isRequired},t.a=m},2168:function(e,t,r){var a=r(2169);"string"===typeof a&&(a=[[e.i,a,""]]);var n={hmr:!1};n.transform=void 0;r(834)(a,n);a.locals&&(e.exports=a.locals)},2169:function(e,t,r){t=e.exports=r(37)(!1),t.push([e.i,".transfer-history__item,.transfer-history__spinner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:6.3rem;width:100%;padding-left:2.8rem;font-size:1.6rem;border-bottom:1px solid var(--border__color)}.transfer-history__spinner{margin:0}.transfer-history__item:last-child{border-bottom:none;border-radius:0 0 1rem 1rem}.transfer-history__icon{margin-right:.5rem}",""])},2170:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var a=r(21),n=(r.n(a),r(30)),i=Object(a.createSelector)(function(e){return e.transfer.transfers},function(e){return Object(n.a)(e.map(function(e){return e.ReceiverUserName}))})},2171:function(e,t,r){var a=r(2172);"string"===typeof a&&(a=[[e.i,a,""]]);var n={hmr:!1};n.transform=void 0;r(834)(a,n);a.locals&&(e.exports=a.locals)},2172:function(e,t,r){t=e.exports=r(37)(!1),t.push([e.i,'.user-contacts-layout{width:100%;height:var(--settings__body-height);position:relative;z-index:0;background:var(--settings__body-bg-color);max-width:var(--settings__body-max-width);margin:var(--settings__body-margin);padding:var(--settings__body-padding)}.user-contacts-layout__block-with-text{max-width:calc(var(--retail-setting__body-max-width) / 1.5);color:var(--user-contacts__header-text-color);background:var(--settings__body-header-bg-color);margin:var(--settings__body-header-margin);position:relative}.user-contacts-layout__block-with-text:before{display:var(--settings__accent-bar-display);content:"";background-image:var(--accent-bar__gradient);min-width:100vw;height:calc(100% + (var(--settings__body-header-margin) * 2) + (var(--settings__body-padding) * 4));position:absolute;z-index:-1;top:calc(((var(--settings__body-padding) * 2) + 2px) * -1);bottom:0;left:calc((var(--side-menu__item-width) + var(--settings__body-header-margin) + var(--settings__body-padding) + 2px) * -1);right:0}.user-contacts-layout__header-text{font-size:var(--settings__body-header-title-font-size);color:var(--settings__body-header-title-font-color);letter-spacing:var(--settings__body-header-title-letter-spacing);padding-bottom:var(--settings__body-header-title-padding-bottom)}.user-contacts-layout__text{font-size:var(--settings__body-header-sub-title-font-size);color:var(--settings__body-header-sub-title-font-color);letter-spacing:var(--settings__body-header-sub-title-letter-spacing);line-height:var(--settings__body-header-sub-title-line-height)}.user-contacts-layout__transfer{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-shadow:var(--settings__card-box-shadow);box-shadow:var(--settings__card-box-shadow);border-radius:var(--settings__card-border-radius-size);overflow:hidden}.user-contacts-layout__transfer-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:var(--settings__card-header-title-font-color);background:var(--settings__card-header-bg-color);font-size:var(--settings__card-header-title-font-size);letter-spacing:var(--settings__card-header-title-letter-spacing);line-height:normal;height:var(--settings__body-header-with-border-height);padding:var(--settings__card-header-padding);padding-left:var(--settings__body-header-title-padding-left);background:var(--component__header-bg-color);border-bottom:var(--settings__card-header-accent-border);border-top-left-radius:var(--settings__card-border-radius-size);border-top-right-radius:var(--settings__card-border-radius-size)}.user-contacts-layout__transfer-items{background:var(--table__bg-color)}@media only screen and (max-width:480px){.user-contacts-layout{height:unset;-ms-flex:1 1;flex:1 1}.user-contacts-layout__block-with-text:before{left:calc((var(--settings__body-header-margin) + var(--settings__body-padding)) * -1)}}',""])},852:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),n=r.n(a),i=r(3),s=r.n(i),o=r(36),c=r(2165),d=r(2171),l=(r.n(d),Object(o.b)("user-contacts-layout")),_=function(e,t){return n.a.createElement("div",{className:l()},n.a.createElement("div",{className:l("block-with-text")},n.a.createElement("div",{className:l("header-text")},t.t("Trading with Other On-Exchange Participants")),n.a.createElement("div",{className:l("text")},t.t("You can freely transfer currency with other participants on the exchange. Simply provide the email address for your contact during the \u201cSend\u201d or \u201cReceive\u201d process. If the email address is registered on the exchange, then the user will receive the transfer. If the email address is not registered, the user will get an invitation to join the exchange."))),n.a.createElement("div",{className:l("transfer")},n.a.createElement("div",{className:l("transfer-header")},t.t("Transfer History")),n.a.createElement("div",{className:l("transfer-items")},n.a.createElement(c.a,null))))};_.contextTypes={t:s.a.func.isRequired},t.default=_},888:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(3),s=r.n(i),o=r(36),c=r(902),d=(r.n(c),Object(o.b)("spinner")),l=function(e){var t=e.isVisible,r=e.isInline,a=e.text,i=e.customClass,s=e.classModifiers,c="string"===typeof i?Object(o.b)(i):i||function(){return""};return n.a.createElement(n.a.Fragment,null,t&&n.a.createElement("div",{className:d("container",r&&"inline")+" "+c("spinner-container",s)},n.a.createElement("div",{className:d("circle",r&&"inline")+" "+c("spinner-circle",s)}),a&&n.a.createElement("div",{className:d("text")},a)))};l.propTypes={isInline:s.a.bool,isVisible:s.a.bool.isRequired,customClass:s.a.oneOfType([s.a.func,s.a.string]),text:s.a.string},l.defaultProps={isVisible:!0},t.a=l},902:function(e,t,r){var a=r(903);"string"===typeof a&&(a=[[e.i,a,""]]);var n={hmr:!1};n.transform=void 0;r(834)(a,n);a.locals&&(e.exports=a.locals)},903:function(e,t,r){t=e.exports=r(37)(!1),t.push([e.i,".spinner__circle,.spinner__circle:after{border-radius:50%;width:2.5rem;height:2.5rem}.spinner__circle{margin:auto;-webkit-transform:translateZ(0);transform:translateZ(0);border-top:.2rem solid var(--spinner__color-secondary);border-right:.2rem solid var(--spinner__color-secondary);border-bottom:.2rem solid var(--spinner__color-secondary);border-left:.2rem solid var(--spinner__color-primary);-webkit-animation:loading 1.1s infinite linear;animation:loading 1.1s infinite linear}.spinner__circle--inline{border-top:.2rem solid var(--spinner__color-tertiary);border-right:.2rem solid var(--spinner__color-tertiary);border-bottom:.2rem solid var(--spinner__color-tertiary)}.spinner__container{position:absolute;display:-ms-flexbox;display:flex;margin:1rem 1.75rem;height:3rem;line-height:3rem}.spinner__container--inline{position:relative;margin:0;background:transparent}.spinner__text{color:var(--spinner__font-color);margin-left:1rem;display:inline-block}@-webkit-keyframes loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])}});