webpackJsonp([24],{1027:function(e,t,a){var n=a(1028);"string"===typeof n&&(n=[[e.i,n,""]]);var r={hmr:!1};r.transform=void 0;a(682)(n,r);n.locals&&(e.exports=n.locals)},1028:function(e,t,a){t=e.exports=a(27)(!1),t.push([e.i,".dual-fluid-header-fixed-content-layout__accent-bar{height:21.5rem;margin-bottom:-21.5rem;background-image:var(--accent-bar__gradient);width:100%;-ms-flex-negative:0;flex-shrink:0}.dual-fluid-header-fixed-content-layout__header-secondary{min-height:7.5rem;height:7.5rem}.dual-fluid-header-fixed-content-layout__fixed-container{width:95%;max-width:1200px;margin:37px auto 0;-ms-flex-negative:0;flex-shrink:0;-ms-flex:1 1 auto;flex:1 1 auto}.dual-fluid-header-fixed-content-layout__footer{margin-top:3rem}",""])},274:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),i=a(80),c=a(1027),o=(a.n(c),a(831)),d=Object(i.b)("dual-fluid-header-fixed-content-layout"),u=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:d("accent-bar")}),r.a.createElement("div",{className:d("header-secondary")},e.headerSecondary),r.a.createElement("div",{className:d("fixed-container")},e.children),r.a.createElement("div",{className:d("footer")},e.footer))};t.default=Object(o.a)(u)},831:function(e,t,a){"use strict";function n(e){var t=function(t){var a=t.isAuthenticated,n=t.location,r=t.pendingAuth,c=t.redirectFromLogin;return r?i.a.createElement(u.a,null):a?i.a.createElement(e,t):(c(n),i.a.createElement(o.c,{to:Object(l.a)("/login")}))},a=function(e){return{isAuthenticated:e.auth.isAuthenticated,pendingAuth:e.auth.pending}},n=function(e){return{redirectFromLogin:function(t){return e(Object(d.h)(t))}}};return Object(c.connect)(a,n)(t)}var r=a(0),i=a.n(r),c=a(7),o=a(29),d=a(84),u=a(266),l=a(20);t.a=n}});