webpackJsonp([28],{1010:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(1),i=r.n(o),s=r(37),c=r(23),l=r(356),u=r(5),m=r(6),d=r(1064),p=(r.n(d),function(e){var t=e.customClass,r=e.linkTo,n=Object(m.b)("ap-logo",t),o=function(){return u.default.global.siteLogo.match(/.svg$/)?a.a.createElement(l.a,{alt:"Site logo",src:Object(c.a)("/local/logos/"+u.default.global.siteLogo),className:n("img")}):a.a.createElement("img",{alt:"Site logo",src:Object(c.a)("/local/logos/"+u.default.global.siteLogo),className:n("img")})};return a.a.createElement("div",{className:n()},r?a.a.createElement(s.a,{className:n("link"),to:Object(c.a)(r)},o()):o())});p.defaultProps={customClass:"",linkTo:""},p.propTypes={customClass:i.a.string,linkTo:i.a.string},t.a=p},1012:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),s=r.n(i),c=r(1),l=r.n(c),u=r(28),m=r.n(u),d=r(6),p=r(1013),f=(r.n(p),function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()),h=function(e,t){return s.a.createElement(e,{onClick:t})},g="ap-popover",v=function(e){function t(e){n(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.componentWillUnmount=function(){r.removeListeners()},r.handleClickOutside=function(e){r.popupRef.contains(e.target)||r.toggleShow()},r.handleKeyDown=function(e){"Escape"===e.code&&(r.toggleShow(),e.target.blur())},r.toggleShow=function(){r.setState({show:!r.state.show,popoverLeftOffset:0},function(){if(r.state.show&&r.contentRef&&r.isOutOfScreen()){var e=r.getLeftOffset();r.setState({popoverLeftOffset:e})}r.state.show?r.addListeners():r.removeListeners()})},r.isOutOfScreen=function(){var e=r.contentRef.getBoundingClientRect();return e.x+e.width>window.innerWidth},r.getLeftOffset=function(){var e=r.contentRef.getBoundingClientRect(),t=window.innerWidth-(e.x+e.width);return document.body.scrollHeight>window.innerHeight?t-17:t},r.getBEMClasses=function(){var e=[g,r.props.customClass,r.props.isMenu&&"popover-menu"];return Object(d.b)(e)},r.popupRef=null,r.contentRef=null,r.state={show:!1,popoverLeftOffset:0},r}return o(t,e),f(t,[{key:"addListeners",value:function(){document.addEventListener("mousedown",this.handleClickOutside),document.addEventListener("keydown",this.handleKeyDown)}},{key:"removeListeners",value:function(){document.removeEventListener("mousedown",this.handleClickOutside),document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this,t=this.props,r=t.trigger,n=t.content,a=t.drawArrow,o=this.state.show,i=h(r,this.toggleShow),c=this.getBEMClasses(),l=c(o?"visible":"hidden");return s.a.createElement("div",{className:m()("popover",c("popover")),ref:function(t){return e.popupRef=t}},i,s.a.createElement("div",{ref:function(t){return e.contentRef=t},className:l+" "+c("content",a&&"with-arrow")},o&&n))}}]),t}(s.a.Component);v.propTypes={trigger:l.a.func.isRequired,content:l.a.element.isRequired,drawArrow:l.a.bool,customClass:l.a.string},v.defaultProps={drawArrow:!1},t.a=v},1013:function(e,t,r){var n=r(944);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(942)(n,a);n.locals&&(e.exports=n.locals)},1064:function(e,t,r){var n=r(1065);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(942)(n,a);n.locals&&(e.exports=n.locals)},1065:function(e,t,r){t=e.exports=r(48)(!1),t.push([e.i,".ap-logo{-o-object-fit:contain;object-fit:contain}.ap-logo__link,.ap-logo__link:active,.ap-logo__link:hover,.ap-logo__link:link,.ap-logo__link:visited{color:var(--standalone-form__logo-color)}.ap-logo__img{width:8rem}",""])},1135:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),s=r.n(i),c=r(37),l=r(1),u=r.n(l),m=r(23),d=r(6),p=r(1136),f=(r.n(p),r(1012)),h=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),g=function(e){function t(e){n(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.getLinkElement=function(e){return s.a.createElement(c.a,{key:e.label,className:r.baseClasses("item",e.customClass),to:Object(m.a)(e.linkTo),onClick:function(){return r.popoverRef.toggleShow()}},e.beforeLabelElement,s.a.createElement("span",{className:r.baseClasses("item-label")},e.label))},r.getOnClickElement=function(e){return s.a.createElement("a",{key:e.label,className:r.baseClasses("item",e.customClass),onClick:r.getOnItemClick(e)},e.beforeLabelElement,s.a.createElement("span",{className:r.baseClasses("item-label")},e.label))},r.getOnItemClick=function(e){return function(){"undefined"!==typeof e.onClick&&(e.onClick(),r.popoverRef.toggleShow())}},r.renderContent=function(){return r.props.items.map(function(e,t){return e.divider?s.a.createElement("div",{key:t,className:r.baseClasses("item-divider")}):e.linkTo?r.getLinkElement(e):r.getOnClickElement(e)})},r.popoverRef=null,r.baseClasses=Object(d.b)(["popover-menu",r.props.customClass]),r}return o(t,e),h(t,[{key:"render",value:function(){var e=this,t=this.props.popoverProps;return s.a.createElement(f.a,Object.assign({ref:function(t){return e.popoverRef=t},content:s.a.createElement("div",null,this.renderContent()),drawArrow:!0,isMenu:"true",customClass:this.baseClasses()},t))}}]),t}(s.a.Component);g.propTypes={items:u.a.arrayOf(u.a.oneOfType([u.a.shape({label:u.a.string.isRequired,beforeLabelElement:u.a.element,onClick:u.a.func,linkTo:u.a.string,customClass:u.a.string}),u.a.shape({divider:u.a.oneOf([!0]).isRequired})])).isRequired,customClass:u.a.string,popoverProps:u.a.shape({trigger:u.a.func.isRequired}).isRequired},g.defaultProps={items:[],customClass:""},t.a=g},1136:function(e,t,r){var n=r(951);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(942)(n,a);n.locals&&(e.exports=n.locals)},1477:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(1),i=r.n(o),s=r(23),c=r(6),l=r(49),u=r(1010),m=r(1478),d=r(1482),p=r(126),f=r(1486),h=(r.n(f),Object(c.b)("page-header")),g=function(e,t){var r=t.router.history;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:h("container-1")},a.a.createElement("div",{className:h("header-item","logo")},a.a.createElement(u.a,null)),a.a.createElement(d.a,null),a.a.createElement("div",{className:h("right-panel")},a.a.createElement(m.a,{customClass:"page-header-user-summary"}),a.a.createElement("div",{className:h("header-item",["last","hoverable",r.location.pathname.includes("settings")?"active":""]),onClick:function(){return r.push(Object(s.a)(p.c.settingsPath))}},a.a.createElement(l.a,{name:"user-settings",key:"settings",customClass:h("icon")})))))};g.contextTypes={router:i.a.shape({history:i.a.object.isRequired}).isRequired,t:i.a.func.isRequired},t.a=g},1478:function(e,t,r){"use strict";var n=r(8),a=r(1479),o=r(75),i=r(38),s=function(e){var t=e.user,r=t.accounts,n=t.selectedAccountId;return{accounts:r,selectedAccount:r.find(function(e){return e.AccountId===n})}},c={logout:o.h,selectAccount:i.o};t.a=Object(n.connect)(s,c)(a.a)},1479:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),s=r.n(i),c=r(1),l=r.n(c),u=r(1135),m=r(49),d=r(339),p=r(6),f=r(1480),h=(r.n(f),function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()),g=function(e){function t(){var e,r,o,i;n(this,t);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return r=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.renderMenuItems=function(){var e=o.props,t=e.accounts,r=e.selectedAccount;if(t.length<=1)return[{label:o.context.t(r.AccountName),customClass:o.context.t("username-in-dropdown")},{label:o.context.t("Sign Out"),onClick:o.props.logout}];var n=t.filter(function(e){return e.AccountId!==r.AccountId}).map(function(e){return{label:o.context.t("Switch to {accountName}",{accountName:e.AccountName}),onClick:function(){return o.props.selectAccount(e.AccountId,e.OMSID)}}});return n.push({divider:!0},{label:o.context.t("Sign Out"),onClick:o.props.logout}),n},i=r,a(o,i)}return o(t,e),h(t,[{key:"render",value:function(){var e=this.props,t=e.selectedAccount,r=e.customClass,n=Object(p.b)(["user-summary",r]);return s.a.createElement("div",{className:n("container")},t?s.a.createElement(u.a,{customClass:n(),popoverProps:{trigger:function(e){return s.a.createElement("button",Object.assign({className:n("popover-menu-trigger")},e),s.a.createElement("span",{className:n("user-info-container")},s.a.createElement(m.a,{name:"user",customClass:n("icon")}),s.a.createElement("span",{className:n("username-in-display")},t.AccountName),s.a.createElement("span",{className:n("popover-menu-trigger-triangle")})))},customClass:"user-summary"},items:this.renderMenuItems()}):s.a.createElement(d.a,{isInline:!0,customClass:n}))}}]),t}(s.a.Component);g.propTypes={selectedAccount:l.a.shape({AccountName:l.a.string.isRequired}),accounts:l.a.array.isRequired,logout:l.a.func.isRequired},g.contextTypes={t:l.a.func.isRequired},t.a=g},1480:function(e,t,r){var n=r(1481);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(942)(n,a);n.locals&&(e.exports=n.locals)},1481:function(e,t,r){t=e.exports=r(48)(!1),t.push([e.i,".user-summary{width:25rem;cursor:pointer}.user-summary__container{width:25rem;height:100%;line-height:1.4;min-width:25rem;border-left:1px solid var(--user-summary__border-color);border-right:1px solid var(--user-summary__border-color)}.user-summary__popover-menu-trigger-triangle{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid;display:inline-block}.user-summary__username-in-display{font-size:1.2rem}.user-summary__user-info-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;cursor:pointer}.user-summary__spinner-container{height:100%;-ms-flex-align:center;align-items:center;padding:0 1.5rem}.user-summary__spinner-circle{margin:0}.user-summary__popover,.user-summary__popover-menu-trigger{display:inline-block;height:100%;width:100%}.user-summary__popover-menu-trigger{position:relative;border:none;font-size:1.1rem;text-align:left;cursor:pointer;color:var(--component__color-secondary)}.page-header-user-summary__user-info-container{margin-top:.6rem;padding:0 1.5rem}.user-summary__popover-content--with-arrow:after{left:21rem}.user-summary__popover-menu-trigger:focus,.user-summary__popover-menu-trigger:hover{color:var(--component__color-primary);background:var(--component__bg-color)}.user-summary__content>div{background:var(--user-summary__content-bg-color)}@media only screen and (min-width:99.2rem){.page-header-user-summary__item--username-in-dropdown,.user-summary__icon{display:none}}@media only screen and (max-width:99.2rem){.user-summary__container{width:auto;min-width:6rem}.user-summary__user-info-container{-ms-flex-pack:center;justify-content:center}.user-summary__popover-menu-trigger-triangle,.user-summary__username-in-display{display:none}.user-summary__icon{width:auto}}",""])},1482:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),s=r.n(i),c=r(1483),l=r(6),u=r(49),m=r(1484),d=(r.n(m),function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()),p=Object(l.b)("page-header-nav"),f=function(e){function t(){var e,r,o,i;n(this,t);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return r=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.state={isOpen:!1},o.handleClick=function(){o.state.isOpen?document.removeEventListener("click",o.handleOutsideClick,!1):document.addEventListener("click",o.handleOutsideClick,!1),o.setState(function(e){return{isOpen:!e.isOpen}})},o.handleOutsideClick=function(e){o.node.contains(e.target)||o.handleClick()},i=r,a(o,i)}return o(t,e),d(t,[{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleOutsideClick,!1)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:p("container",this.state.isOpen?"":"closed"),ref:function(t){e.node=t}},s.a.createElement("div",{className:p("menu-toggle",this.state.isOpen?"active":""),onClick:this.handleClick},s.a.createElement(u.a,{name:"menu-toggle",customClass:p("icon")})),s.a.createElement(c.a,{customClass:p,handleNavItemClick:this.handleClick}))}}]),t}(s.a.Component);t.a=f},1483:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(1),i=r.n(o),s=r(37),c=r(126),l=r(23),u=r(49),m=function(e,t){var r=e.customClass,n=e.handleNavItemClick,o=function(e,t,r){var n=r.path.split("/");if(r.path.includes("retail")){if(t.pathname.includes(n[2]))return!0}else if(t.pathname.includes(n[1]))return!0;return!1};return c.c.mainNavItems.map(function(e){return a.a.createElement(s.b,{key:e.path,to:Object(l.a)(e.path),onClick:n,className:r("item",["hoverable"]),isActive:function(t,r){return o(0,r,e)},activeClassName:r("item",["selected"])},a.a.createElement(u.a,{name:e.icon,customClass:r("icon")}),a.a.createElement("span",{className:r("label")},t.t(e.text)))})};m.propTypes={customClass:i.a.oneOfType([i.a.string,i.a.func]),items:i.a.array},m.contextTypes={t:i.a.func.isRequired},t.a=m},1484:function(e,t,r){var n=r(1485);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(942)(n,a);n.locals&&(e.exports=n.locals)},1485:function(e,t,r){t=e.exports=r(48)(!1),t.push([e.i,'.page-header-nav__container,.page-header-nav__item{display:-ms-flexbox;display:flex}.page-header-nav__item{-ms-flex-align:center;align-items:center;width:16rem;padding-top:.5rem;cursor:pointer;font-weight:700;-ms-flex-pack:center;justify-content:center;color:var(--nav-item__color);background:var(--nav-header__bg-color);border-right:solid 1px var(--nav-item__separator-color);border-color:var(--tab__separator-color);-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:var(--z-index__navigation)}.page-header-nav__menu-toggle--active:after{content:"";display:inline-block;position:absolute;bottom:-1px;right:1.3rem;border-left:.8rem solid transparent;border-right:.8rem solid transparent;border-bottom:.8rem solid var(--nav-header__bg-color)}.page-header-nav__item--hoverable:hover{background:var(--nav-item__bg-color--hover);color:var(--nav-item__color--hover)}.page-header-nav__item--selected,.page-header-nav__item--selected:hover{background:var(--nav-item__bg-color--selected);color:var(--nav-item__color--action)}.page-header-nav__label{font-size:var(--nav-item__font-size)}.page-header-nav__icon{display:-ms-flexbox;display:flex;width:var(--nav-item__icon-size);margin:0 1.2rem 0 0}.page-header-nav__icon--exchange{margin-top:.3rem}.page-header-nav__menu-toggle{cursor:pointer;border-right:1px solid var(--tab__separator-color);width:var(--nav-header__height);min-height:var(--nav-header__height);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;color:var(--nav-item__color);z-index:1}.page-header-nav__menu-toggle:focus,.page-header-nav__menu-toggle:hover{color:var(--nav-item__color--action)}.page-header-nav__menu-toggle--active~.page-header-nav__item--selected,.page-header-nav__menu-toggle:hover~.page-header-nav__item--selected{background:var(--nav-item__bg-color--selected);color:var(--nav-item__color--action)}.page-header-nav__icon--menu-toggle{margin-right:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:80%;width:80%}.page-header-nav__icon--menu-toggle:before{content:"";border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid;display:inline-block;margin-top:0}.page-header-nav__container--closed{overflow:hidden}:root .page-header-nav__icon--menu-toggle:before,_:-ms-fullscreen{margin-top:var(--nav-header__height)}@media only screen and (min-width:99.2rem){.page-header-nav__menu-toggle{display:none}}@media only screen and (max-width:99.2rem){.page-header-nav__container{-ms-flex-order:1;order:1;-ms-flex-direction:column;flex-direction:column;z-index:var(--z-index__navigation);position:absolute;height:var(--nav-header__height)}.page-header-nav__item{padding-left:3rem;padding-right:3rem;min-height:var(--nav-header__height);display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:start;align-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;width:20rem;position:relative;border-top:1px solid var(--tab__separator-color);-ms-flex-order:2;order:2}.page-header-nav__item:not(.page-header-nav__item--selected){-webkit-box-shadow:var(--nav-header__box-shadow);box-shadow:var(--nav-header__box-shadow)}.page-header-nav__item:last-of-type{border-bottom-right-radius:var(--component__border-radius)}.page-header-nav__item--selected,.page-header-nav__item--selected:hover{-ms-flex-order:1;order:1;z-index:-1;background:transparent;cursor:default}.page-header-nav__menu-toggle{position:absolute;right:0;width:100%}.page-header-nav__icon--menu-toggle{position:absolute;right:2rem;width:0;height:0}:root .page-header-nav__icon--menu-toggle,_:-ms-fullscreen{right:2.5rem}}@media only screen and (max-width:48rem){.page-header-nav__item{width:60vw;-webkit-box-shadow:var(--nav-header__box-shadow);box-shadow:var(--nav-header__box-shadow)}.page-header-nav__item,.page-header-nav__item--selected,.page-header-nav__item--selected:hover{-ms-flex-order:unset;order:unset}.page-header-nav__item--selected,.page-header-nav__item--selected:hover{background:var(--nav-item__bg-color--selected);z-index:unset}.page-header-nav__menu-toggle{position:relative;width:var(--nav-header__height)}.page-header-nav__icon--menu-toggle{position:static;width:100%;height:100%}.page-header-nav__menu-toggle--active{background:var(--nav-item__bg-color--selected)}.page-header-nav__menu-toggle--active:after{left:2.6rem;right:auto;border-bottom-color:var(--nav-header__bg-color)}.page-header-nav__icon--menu-toggle:before{display:none}}',""])},1486:function(e,t,r){var n=r(1487);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(942)(n,a);n.locals&&(e.exports=n.locals)},1487:function(e,t,r){t=e.exports=r(48)(!1),t.push([e.i,".page-header__container-1{position:relative;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;z-index:var(--z-index__navigation);margin-bottom:4px;height:var(--nav-header__height);background:var(--nav-header__bg-color);-webkit-box-shadow:0 4px 0 0 var(--nav-item__bg-color--selected),0 2px 2rem 0 var(--component__box-shadow-color);box-shadow:0 4px 0 0 var(--nav-item__bg-color--selected),0 2px 2rem 0 var(--component__box-shadow-color)}.page-header__header-item{font-size:1.4rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:100%;width:16rem;padding-top:.8rem;-ms-flex-pack:center;justify-content:center;border-right:1px solid var(--nav-item__separator-color);border-color:var(--nav-item__separator-color);color:var(--nav-item__color)}.page-header__header-item--hoverable{cursor:pointer}.page-header__header-item--active,.page-header__header-item--hoverable:hover{background:var(--component__bg-color);color:var(--font__color-primary)}.page-header__header-item--logo{width:16rem;color:var(--font__color-primary);-ms-flex-negative:0;flex-shrink:0}.page-header__right-panel{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-positive:1;flex-grow:1}.page-header__icon{width:2rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:0 .8rem 0 0;cursor:pointer}.page-header__icon--logo>svg{width:10rem;height:2.4rem}.page-header__header-item--last{position:relative;width:6.5rem;cursor:pointer;border-right:0}.page-header__icon--user-settings{width:auto;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-preferred-size:100%;flex-basis:100%;margin:0;margin-bottom:.3rem}.page-header__header-item--last{display:none}@media only screen and (max-width:99.2rem){.page-header__header-item--logo{-ms-flex-order:2;order:2;-ms-flex:1 1;flex:1 1;border-right:0;border-color:var(--nav-item__separator-color)}.page-header__right-panel{-ms-flex-order:3;order:3;-ms-flex-positive:unset;flex-grow:unset;position:absolute;right:0;height:var(--nav-header__height)}}",""])},970:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r.n(n),o=r(982),i=r(1477),s=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,null),e.children)};t.default=Object(o.a)(s)},982:function(e,t,r){"use strict";function n(e){var t=function(t){var r=t.isAuthenticated,n=t.location,a=t.pendingAuth,i=t.redirectFromLogin;return a?o.a.createElement(l.a,null):r?o.a.createElement(e,t):(i(n),o.a.createElement(s.c,{to:Object(u.a)("/login")}))},r=function(e){return{isAuthenticated:e.auth.isAuthenticated,pendingAuth:e.auth.pending}},n=function(e){return{redirectFromLogin:function(t){return e(Object(c.i)(t))}}};return Object(i.connect)(r,n)(t)}var a=r(0),o=r.n(a),i=r(8),s=r(37),c=r(75),l=r(348),u=r(23);t.a=n}});