webpackJsonp([9],{1050:function(e,t,n){var a=n(1051);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!1};r.transform=void 0;n(942)(a,r);a.locals&&(e.exports=a.locals)},1051:function(e,t,n){t=e.exports=n(48)(!1),t.push([e.i,".single-fluid-header-fixed-content-layout__accent-bar{height:21.5rem;margin-bottom:-21.5rem;background-image:var(--accent-bar__gradient);width:100%;-ms-flex-negative:0;flex-shrink:0}.single-fluid-header-fixed-content-layout__fixed-container{width:95%;max-width:1200px;margin:0 auto;-ms-flex:1 0 auto;flex:1 0 auto}.single-fluid-header-fixed-content-layout__footer{margin-top:8rem;-ms-flex-negative:0;flex-shrink:0}@media only screen and (max-width:48rem){.single-fluid-header-fixed-content-layout__footer{margin-top:3.4rem}}",""])},128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n.n(a),i=n(6),o=n(1050),c=(n.n(o),n(982)),l=Object(i.b)("single-fluid-header-fixed-content-layout"),u=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:l("accent-bar")}),r.a.createElement("div",{className:l("fixed-container")},e.children),r.a.createElement("div",{className:l("footer")},e.footer))};t.default=Object(c.a)(u)},982:function(e,t,n){"use strict";function a(e){var t=function(t){var n=t.isAuthenticated,a=t.location,r=t.pendingAuth,o=t.redirectFromLogin;return r?i.a.createElement(u.a,null):n?i.a.createElement(e,t):(o(a),i.a.createElement(c.c,{to:Object(d.a)("/login")}))},n=function(e){return{isAuthenticated:e.auth.isAuthenticated,pendingAuth:e.auth.pending}},a=function(e){return{redirectFromLogin:function(t){return e(Object(l.h)(t))}}};return Object(o.connect)(n,a)(t)}var r=n(0),i=n.n(r),o=n(8),c=n(37),l=n(76),u=n(348),d=n(22);t.a=a}});