webpackJsonp([33],{1064:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var n=r(1),a=r.n(n),i={type:a.a.string,levels:a.a.arrayOf(a.a.shape({level:a.a.number,button:a.a.string,label:a.a.string,description:a.a.shape({benefits:a.a.array,requirements:a.a.string}),verifiedMessage:a.a.string,underReviewMessage:a.a.string,form:a.a.arrayOf(a.a.shape({label:a.a.string,type:a.a.string}))}))}},1676:function(e,t,r){"use strict";var n=r(2152);t.a=n.a},1677:function(e,t,r){"use strict";var n=r(2156);t.a=n.a},1678:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return a}),r.d(t,"c",function(){return i}),r.d(t,"f",function(){return o}),r.d(t,"g",function(){return c}),r.d(t,"h",function(){return s}),r.d(t,"i",function(){return l}),r.d(t,"d",function(){return u}),r.d(t,"e",function(){return d});var n=function(e,t){return{currentLevel:0===e&&"pass"!==t||1===e&&"underReview"===t}},a=function(e,t){return{underReview:0===e&&"underReview"===t,verified:e>0||0===e&&"pass"===t,canIncrease:0===e&&"pass"!==t&&"underReview"!==t,currentLevel:1===e&&"pass"!==t||0===e&&"pass"===t}},i=function(e,t,r){var n=e-2;return{underReview:t===n&&"underReview"===r,verified:t>n||t===n&&"pass"===r,canIncrease:t===n-1&&"pass"===r||t===n&&"pass"!==r&&"underReview"!==r,currentLevel:t>n||t===n&&"pass"===r}},o=function(e){return{currentLevel:0===e}},c=function(e,t){return{underReview:0===e&&1===t,verified:e>=1,canIncrease:0===e&&1!==t,currentLevel:1===e}},s=function(e,t){return{underReview:1===e&&2===t,verified:e>=2,canIncrease:1===e&&2!==t,currentLevel:2===e}},l=function(e,t){return{underReview:2===e&&3===t,verified:3===e,canIncrease:2===e&&3!==t,currentLevel:3===e}},u=function(e){return{currentLevel:0===e}},d=function(e,t){return{underReview:1===e&&"underReview"===t,verified:e>0,canIncrease:0===e&&"underReview"!==t,currentLevel:1===e}}},2143:function(e,t,r){"use strict";var n=r(10),a=r(2144),i=r(175),o=r(2149),c=function(e){var t=Object(i.b)(e),r=t.kycConfig;return{LevelsComponent:Object(o.a)(r)}},s=Object(n.connect)(c)(a.a);t.a=s},2144:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(2145),o=(r.n(i),r(2147)),c=(r.n(o),function(e){var t=e.LevelsComponent;return a.a.createElement(t,null)});t.a=c},2145:function(e,t,r){var n=r(2146);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(862)(n,a);n.locals&&(e.exports=n.locals)},2146:function(e,t,r){t=e.exports=r(37)(!1),t.push([e.i,'.kyc-settings{height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background:var(--settings__body-bg-color);max-width:var(--settings__body-max-width);margin:var(--settings__body-margin);padding:var(--settings__body-padding)}.kyc-settings__header{background:var(--settings__body-header-bg-color);margin:var(--settings__body-header-margin);position:relative}.kyc-settings__header:before{display:var(--settings__accent-bar-display);content:"";background-image:var(--accent-bar__gradient);min-width:100vw;height:calc(100% + (var(--settings__body-header-margin) * 2) + (var(--settings__body-padding) * 4));position:absolute;z-index:-1;top:calc(((var(--settings__body-padding) * 2) + 2px) * -1);bottom:0;left:calc((var(--side-menu__item-width) + var(--settings__body-header-margin) + var(--settings__body-padding) + 2px) * -1);right:0}.kyc-settings__header-text{font-size:var(--settings__body-header-title-font-size);color:var(--settings__body-header-title-font-color);letter-spacing:var(--settings__body-header-title-letter-spacing);padding-bottom:var(--settings__body-header-title-padding-bottom)}.kyc-settings__levels{overflow:visible;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-left:var(--settings__kyc-cards-container-margin-l)}.kyc-settings__description{font-size:var(--settings__body-header-sub-title-font-size);color:var(--settings__body-header-sub-title-font-color);letter-spacing:var(--settings__body-header-sub-title-letter-spacing);line-height:var(--settings__body-header-sub-title-line-height);letter-spacing:.5px}.kyc-settings__description:last-of-type{padding-bottom:0}@media only screen and (max-width:480px){.kyc-settings{width:100%}.kyc-settings__levels{display:unset}.kyc-settings__header:before{left:calc((var(--settings__body-header-margin) + var(--settings__body-padding) + 2px) * -1)}}',""])},2147:function(e,t,r){var n=r(2148);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(862)(n,a);n.locals&&(e.exports=n.locals)},2148:function(e,t,r){t=e.exports=r(37)(!1),t.push([e.i,".kyc-form__title{color:var(--font__color-secondary);font-size:1.6rem}.kyc-form__wrapper{width:37rem;margin-top:2rem}.inline__info{width:100%;text-align:right}.kyc-form__close__btn{margin-top:1rem}.kyc-form__form-body{width:100%}.kyc-form__dpk-wrapper,.kyc-form__input-wrapper,.kyc-form__select-wrapper{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;margin:0;padding:2rem 1rem 0 0;-ms-flex-align:baseline;align-items:baseline}.kyc-form__dpk-label,.kyc-form__label,.kyc-form__select-label{width:15rem;margin:0;-ms-flex-pack:start;justify-content:flex-start;margin-top:.7rem}.kyc-form__info{margin-top:.7rem;padding-left:2rem;font-style:italic}.form-group .kyc-form__dpk-input,.form-group .kyc-form__input,.form-group .kyc-form__select{width:22rem}.kyc-form__btn:not(.ap-upload__btn){width:18em;margin:1rem 0}.kyc-form__loading,.kyc-form__template-body,.kyc-form__template-footer{margin-top:2rem;padding-top:2rem;-webkit-transition:none;-o-transition:none;transition:none}.kyc-form__error:not(.ap-upload__error){position:absolute;top:4.9rem;margin-left:1rem;margin-top:unset;padding-top:unset}.kyc-form__section{margin-top:3rem;padding-top:2rem;border-top:1px solid var(--border__color)}.kyc-form__section--bottom{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.kyc-manual-directions__email{font-size:1.5rem;line-height:2rem;color:var(--font__color-secondary)}.ap-phone-input__input-box.kyc-form__input-box{width:22rem}.ap-phone-input__input-box.kyc-form__input-box .react-phone-number-input__country-select option{color:var(--font__color-primary)}.kyc-form__input-box .react-phone-number-input__row{height:var(--input__height);padding:0 0 0 1rem;border-radius:2px;background:var(--input__bg-color);border:1px solid var(--input__border-color)}.kyc-form__back__btn{margin-right:2rem}",""])},2149:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var n=r(2150),a=r(2159),i=r(2163),o=r(2167),c=function(e){switch(e.type){case"IM":case"IMLegacy":return a.a;case"IM3.2":return n.a;case"Jumio":return i.a;case"Manual":case"HTML":return o.a}}},2150:function(e,t,r){"use strict";var n=r(2151);t.a=n.a},2151:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(1676),o=r(2154),c=function(){return a.a.createElement(i.a,{LevelsComponent:o.a})};t.a=c},2152:function(e,t,r){"use strict";var n=r(10),a=r(2153),i=r(175),o=r(43),c=function(e){var t=Object(i.b)(e),r=t.verificationLevel,n=t.levelIncreaseStatus,a=t.kycConfig;return{verificationLevel:r,levelIncreaseStatus:n,kycConfig:a,highlightStyle:a.highlightStyle,userId:e.user.userInfo.UserId,userName:e.user.userInfo.UserName}},s=function(e){return{getUserConfig:function(t,r){return e(Object(o.l)(t,r))}}},l=Object(n.connect)(c,s)(a.a);t.a=l},2153:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=r(0),c=r.n(o),s=r(1),l=r.n(s),u=r(907),d=r.n(u),f=r(119),v=r.n(f),p=r(36),g=r(1064),m=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_=Object(p.b)("kyc-settings"),b=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),m(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.userId,n=t.userName,a=t.getUserConfig;!e.userId&&!e.userName&&r&&n&&a(r,n)}},{key:"render",value:function(){var e=this.props,t=e.kycConfig,r=e.verificationLevel,n=e.levelIncreaseStatus,a=e.LevelsComponent,i=e.highlightStyle,o=v()(t,"levels",[]),s=o[0],l=o[1],u=o[2],f=o[3],p={highlightStyle:i,verificationLevel:r,levelIncreaseStatus:n,levels:o,level1:s,level2:l,level3:u,level4:f};return c.a.createElement("div",{className:d()(_("",i))},c.a.createElement("div",{className:_("header")},c.a.createElement("div",{className:_("header-text")},this.context.t("Current Verification Level")),c.a.createElement("div",{className:_("description")},this.context.t("For your security, some of our services require you to provide basic or additional levels of verification.")),c.a.createElement("div",{className:_("description")},this.context.t("To verify your account or to check what your current verification level is, see below."))),c.a.createElement("div",{className:_("levels")},c.a.createElement(a,p)))}}]),t}(c.a.Component);b.contextTypes={t:l.a.func.isRequired},b.propTypes={userId:l.a.number,userName:l.a.string,values:l.a.object,verificationLevel:l.a.number,levelIncreaseStatus:l.a.oneOfType([l.a.string,l.a.number]),openKYCSidePane:l.a.func,kycConfig:l.a.shape({type:l.a.string,levels:l.a.arrayOf(l.a.shape(g.a))})},t.a=b},2154:function(e,t,r){"use strict";var n=r(10),a=r(2155),i=r(13),o=function(e){return{openKYCSidePane:function(){return e(Object(i.n)())}}},c=Object(n.connect)(null,o)(a.a);t.a=c},2155:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(1677),o=r(1678),c=function(e){var t=e.highlightStyle,r=e.levels,n=e.levelIncreaseStatus,c=e.openKYCSidePane,s=e.verificationLevel;return r.map(function(e){if(1===e.level){var r=Object(o.a)(s,n);return a.a.createElement(i.a,Object.assign({key:e.level,verified:!0,config:e},r,{highlightStyle:t}))}var l=2===e.level?Object(o.b)(s,n):Object(o.c)(e.level,s,n);return a.a.createElement(i.a,Object.assign({key:e.level,config:e},l,{openPane:c,highlightStyle:t}))})};t.a=c},2156:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=r(0),c=r.n(o),s=r(1),l=r.n(s),u=r(333),d=r(304),f=r(36),v=r(1064),p=r(2157),g=(r.n(p),function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()),m=Object(f.b)("kyc-level"),_=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),g(t,[{key:"render",value:function(){var e=this,t=this.props,r=t.verified,n=t.underReview,a=t.canIncrease,i=t.currentLevel,o=t.openPane,s=t.highlightStyle,l=t.config,f=l.label,v=l.button,p=l.verifiedMessage,g=l.underReviewMessage,_=l.description,b=_.benefits,y=_.requirements,h=i?"selected":"";return c.a.createElement("div",{className:m(null,h)},c.a.createElement("div",{className:m("header-title",h)},this.context.t(f)),"star"===s&&i&&c.a.createElement(u.a,{name:"star",className:m("star-icon")}),c.a.createElement("div",{className:m("body")},b&&b.length>0&&c.a.createElement("div",{className:m("benefits")},c.a.createElement("div",{className:m("sub-title",h)},this.context.t("Benefits")),c.a.createElement("ul",{className:m("list")},b.map(function(t,r){return c.a.createElement("li",{key:r,className:m("list-item")},e.context.t(t))}))),c.a.createElement("div",{className:m("requirements")},c.a.createElement("div",{className:m("sub-title",h)},this.context.t("Requirements")),c.a.createElement("div",{className:m("item-description")},this.context.t(y)))),r&&c.a.createElement("div",{className:m("footer","verified")},c.a.createElement(u.a,{name:"simple-check",customClass:m("verified-icon")}),this.context.t(p)),n&&c.a.createElement("div",{className:m("footer","under-review")},c.a.createElement(u.a,{name:"pending",customClass:m("under-review-icon")}),this.context.t(g)),a&&c.a.createElement("div",{className:m("footer","can-increase")},c.a.createElement(d.a,{customClass:m("change"),onClick:o},this.context.t(v)||this.context.t("Increase to {label}",{label:f}))),!r&&!n&&!a&&c.a.createElement("div",{className:m("footer","cannot-increase")},c.a.createElement(d.a,{customClass:m(),disabled:!0},this.context.t(v)||this.context.t("Increase to {label}",{label:f}))))}}]),t}(c.a.Component);_.propTypes={verified:l.a.bool,underReview:l.a.bool,currentLevel:l.a.bool,canIncrease:l.a.bool,config:l.a.shape(v.a),openPane:l.a.func,highlightStyle:l.a.string},_.contextTypes={t:l.a.func.isRequired},t.a=_},2157:function(e,t,r){var n=r(2158);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(862)(n,a);n.locals&&(e.exports=n.locals)},2158:function(e,t,r){t=e.exports=r(37)(!1),t.push([e.i,".kyc-level,.kyc-level--selected{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 1;flex:1 1;min-width:30rem;max-width:30rem;height:var(--settings__kyc-card-height);color:var(--component__color-secondary);margin-right:3rem;margin-bottom:3rem;background:var(--settings__kyc-card-bg-color);-webkit-box-shadow:var(--settings__card-box-shadow);box-shadow:var(--settings__card-box-shadow);border-radius:var(--settings__kyc-card-border-radius)}.kyc-level:not(.kyc-level--selected){border:var(--settings__kyc-card-container-border-size) solid var(--settings__kyc-card-container-border-color)}.ap-icon.ap-icon--star{position:absolute;top:-1.5rem;right:-1.5rem;border-radius:100%;padding:1rem;color:var(--settings__kyc-card-star-fill-color);background:var(--settings__kyc-card-star-bg-color);-webkit-box-shadow:var(--settings__kyc-card-star-box-shadow);box-shadow:var(--settings__kyc-card-star-box-shadow);display:block;width:4.2rem;height:4.3rem;display:var(--settings__kyc-card-star-display)}.kyc-level__header-title{font-size:2.5rem;letter-spacing:1.1px;line-height:6rem;padding:0 1.5rem;height:6rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0;color:var(--component__color-secondary);background:var(--settings__kyc-card-header-bg-color);border-top-right-radius:var(--settings__kyc-card-border-radius);border-top-left-radius:var(--settings__kyc-card-border-radius)}.kyc-level__body{height:100%;padding:1.5rem;min-height:17rem;background:var(--settings__kyc-card-bg-color);color:var(--component__color-secondary);border-top:solid var(--settings__kyc-card-body-top-border-size) var(--settings__kyc-card-body-top-border-color);border-bottom:solid var(--settings__kyc-card-body-bottom-border-size) var(--settings__kyc-card-body-bottom-border-color)}.kyc-level__benefits{margin-bottom:2rem}.kyc-level__sub-title{font-size:1.2rem;line-height:1.64rem}.kyc-level__list{padding-left:1.5rem}.kyc-level__item-description,.kyc-level__list-item{font-size:1.1rem;line-height:1.64rem}.kyc-level__footer--verified{color:var(--settings__kyc-card-footer-color--verified)}.kyc-level__footer--under-review{color:var(--warning__color)}.kyc-level__under-review-icon,.kyc-level__verified-icon{margin-right:1.75rem}.kyc-level__btn,.kyc-level__change__btn{text-transform:uppercase;width:100%;display:inline-block}.kyc-level__change__btn{background:var(--warning__bg-color);border:1px solid var(--warning__bg-color)}.kyc-level__change__btn:hover{background:var(--warning__bg-color--hover);border:1px solid var(--warning__bg-color--hover)}.kyc-level__change__btn:focus{background:var(--warning__bg-color--focus);border:1px solid var(--warning__border-color--focus)}.kyc-level__footer{padding:0 1.5rem;height:5.5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0}.kyc-level__header-title--selected,.kyc-level__sub-title--selected{color:var(--component__color-primary)}.kyc-level--selected{border:var(--settings__kyc-card-container-border-size--selected) solid var(--kyc-level__border-color--selected)}",""])},2159:function(e,t,r){"use strict";var n=r(2160);t.a=n.a},2160:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(1676),o=r(2161),c=function(){return a.a.createElement(i.a,{LevelsComponent:o.a})};t.a=c},2161:function(e,t,r){"use strict";var n=r(10),a=r(2162),i=r(13),o=function(e){return{openKYCSidePane:function(){return e(Object(i.m)())}}},c=Object(n.connect)(null,o)(a.a);t.a=c},2162:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(1677),o=r(1678),c=function(e){var t=e.highlightStyle,r=e.levels,n=e.levelIncreaseStatus,c=e.openKYCSidePane,s=e.verificationLevel;return r.map(function(e){if(1===e.level){var r=Object(o.a)(s,n);return a.a.createElement(i.a,Object.assign({key:e.level,verified:!0,config:e},r,{highlightStyle:t}))}var l=2===e.level?Object(o.b)(s,n):Object(o.c)(e.level,s,n);return a.a.createElement(i.a,Object.assign({key:e.level,config:e},l,{openPane:c,highlightStyle:t}))})};t.a=c},2163:function(e,t,r){"use strict";var n=r(2164);t.a=n.a},2164:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(1676),o=r(2165),c=function(){return a.a.createElement(i.a,{LevelsComponent:o.a})};t.a=c},2165:function(e,t,r){"use strict";var n=r(10),a=r(2166),i=r(13),o=function(e){return{openKYCSidePane:function(){return e(Object(i.o)())}}},c=Object(n.connect)(null,o)(a.a);t.a=c},2166:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(1677),o=r(1678),c=function(e){var t=e.highlightStyle,r=e.level1,n=e.level2,c=e.levelIncreaseStatus,s=e.openKYCSidePane,l=e.verificationLevel,u=Object(o.d)(l),d=Object(o.e)(l,c);return[r&&a.a.createElement(i.a,Object.assign({key:r.level,verified:!0,config:r},u,{highlightStyle:t})),n&&a.a.createElement(i.a,Object.assign({key:n.level,config:n},d,{openPane:s,highlightStyle:t}))]};t.a=c},2167:function(e,t,r){"use strict";var n=r(2168);t.a=n.a},2168:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(1676),o=r(2169),c=function(){return a.a.createElement(i.a,{LevelsComponent:o.a})};t.a=c},2169:function(e,t,r){"use strict";var n=r(10),a=r(2170),i=r(13),o=function(e){return{openKYCSidePane:function(){return e(Object(i.p)())}}},c=Object(n.connect)(null,o)(a.a);t.a=c},2170:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(1677),o=r(1678),c=function(e){var t=e.highlightStyle,r=e.level1,n=e.level2,c=e.level3,s=e.level4,l=e.levelIncreaseStatus,u=e.openKYCSidePane,d=e.verificationLevel,f=Object(o.f)(d),v=Object(o.g)(d,l),p=Object(o.h)(d,l),g=Object(o.i)(d,l);return[r&&a.a.createElement(i.a,Object.assign({key:r.level,verified:!0,config:r},f,{highlightStyle:t})),n&&a.a.createElement(i.a,Object.assign({key:n.level,config:n},v,{openPane:u,highlightStyle:t})),c&&a.a.createElement(i.a,Object.assign({key:c.level,config:c},p,{openPane:u,highlightStyle:t})),s&&a.a.createElement(i.a,Object.assign({key:s.level,config:s},g,{openPane:u,highlightStyle:t}))]};t.a=c},878:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2143);t.default=n.a},907:function(e,t,r){var n,a;!function(){"use strict";function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===a)for(var c in n)i.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}var i={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(r.default=r,e.exports=r):(n=[],void 0!==(a=function(){return r}.apply(t,n))&&(e.exports=a))}()}});