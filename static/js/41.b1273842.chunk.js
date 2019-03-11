webpackJsonp([41],{1399:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(0),o=n.n(s),c=n(1),l=n.n(c),d=n(28),u=n.n(d),g=n(200),p=n.n(g),f=n(6),v=n(54),y=n(1400),_=(n.n(y),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),b=Object(f.b)("kyc-settings"),h=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),_(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.userId,r=t.userName,i=t.getUserConfig;!e.userId&&!e.userName&&n&&r&&i(n,r)}},{key:"render",value:function(){var e=this.props,t=e.kycConfig,n=e.verificationLevel,r=e.levelIncreaseStatus,i=e.openKYCSidePane,a=e.LevelsComponent,s=e.highlightStyle,c=p()(t,"levels",[]),l=c[0],d=c[1],g=c[2],f=c[3],v={highlightStyle:s,verificationLevel:n,levelIncreaseStatus:r,openKYCSidePane:i,levels:c,level1:l,level2:d,level3:g,level4:f};return o.a.createElement("div",{className:u()(b("",s))},o.a.createElement("div",{className:b("header")},o.a.createElement("div",{className:b("header-text")},this.context.t("Current Verification Level")),o.a.createElement("div",{className:b("description")},this.context.t("For your security, some of our services require you to provide basic or additional levels of verification.")),o.a.createElement("div",{className:b("description")},this.context.t("To verify your account or to check what your current verification level is, see below."))),o.a.createElement("div",{className:b("levels")},o.a.createElement(a,v)))}}]),t}(o.a.Component);h.contextTypes={t:l.a.func.isRequired},h.propTypes={userId:l.a.number,userName:l.a.string,values:l.a.object,verificationLevel:l.a.number,levelIncreaseStatus:l.a.oneOfType([l.a.string,l.a.number]),openKYCSidePane:l.a.func,kycConfig:l.a.shape({type:l.a.string,levels:l.a.arrayOf(l.a.shape(v.a))})},t.a=h},1400:function(e,t,n){var r=n(1401);"string"===typeof r&&(r=[[e.i,r,""]]);var i={hmr:!1};i.transform=void 0;n(942)(r,i);r.locals&&(e.exports=r.locals)},1401:function(e,t,n){t=e.exports=n(48)(!1),t.push([e.i,'.kyc-settings{height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background:var(--settings__body-bg-color);max-width:var(--settings__body-max-width);margin:var(--settings__body-margin);padding:var(--settings__body-padding)}.kyc-settings__header{background:var(--settings__body-header-bg-color);margin:var(--settings__body-header-margin);position:relative}.kyc-settings__header:before{display:var(--settings__accent-bar-display);content:"";background-image:var(--accent-bar__gradient);min-width:100vw;height:calc(100% + (var(--settings__body-header-margin) * 2) + (var(--settings__body-padding) * 4));position:absolute;z-index:-1;top:calc(((var(--settings__body-padding) * 2) + 2px) * -1);bottom:0;left:calc((var(--side-menu__item-width) + var(--settings__body-header-margin) + var(--settings__body-padding) + 2px) * -1);right:0}.kyc-settings__header-text{font-size:var(--settings__body-header-title-font-size);color:var(--settings__body-header-title-font-color);letter-spacing:var(--settings__body-header-title-letter-spacing);padding-bottom:var(--settings__body-header-title-padding-bottom)}.kyc-settings__levels{overflow:visible;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-left:var(--settings__kyc-cards-container-margin-l)}.kyc-settings__description{font-size:var(--settings__body-header-sub-title-font-size);color:var(--settings__body-header-sub-title-font-color);letter-spacing:var(--settings__body-header-sub-title-letter-spacing);line-height:var(--settings__body-header-sub-title-line-height);letter-spacing:.5px}.kyc-settings__description:last-of-type{padding-bottom:0}@media only screen and (max-width:48rem){.kyc-settings{width:100%}.kyc-settings__levels{display:unset}.kyc-settings__header:before{left:calc((var(--settings__body-header-margin) + var(--settings__body-padding) + 2px) * -1)}}',""])},957:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),i=n(1399),a=n(52),s=n(38),o=n(15),c=n(358),l=function(e){var t=Object(a.b)(e),n=t.verificationLevel,r=t.levelIncreaseStatus,i=t.kycConfig,s=Object(c.b)(i);return{verificationLevel:n,levelIncreaseStatus:r,kycConfig:i,highlightStyle:i.highlightStyle,userId:e.user.userInfo.UserId,userName:e.user.userInfo.UserName,LevelsComponent:s}},d=function(e){return{getUserConfig:function(t,n){return e(Object(s.k)(t,n))},openKYCSidePane:function(){return e(Object(o.m)())}}},u=Object(r.connect)(l,d)(i.a);t.default=u}});