webpackJsonp([4],{1060:function(e,t,a){var n=a(1061);"string"===typeof n&&(n=[[e.i,n,""]]);var i={hmr:!1};i.transform=void 0;a(674)(n,i);n.locals&&(e.exports=n.locals)},1061:function(e,t,a){t=e.exports=a(20)(!1),t.push([e.i,".fix-left-fluid-layout__header{z-index:var(--z-index__header)}.fix-left-fluid-layout__container{display:-ms-flexbox;display:flex;-ms-flex:1 0 auto;flex:1 0 auto}.fix-left-fluid-layout__accent-bar{height:21.5rem;margin-bottom:-21.5rem;background-image:-webkit-linear-gradient(#637fea,#4d69d3),-webkit-linear-gradient(191deg,#637fea,#4d69d3);background-image:-o-linear-gradient(#637fea,#4d69d3),-o-linear-gradient(191deg,#637fea,#4d69d3);background-image:linear-gradient(#637fea,#4d69d3),linear-gradient(259deg,#637fea,#4d69d3);width:100%;-ms-flex-negative:0;flex-shrink:0}.fix-left-fluid-layout__main{width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 1;flex:1 1;overflow-y:auto}.fix-left-fluid-layout__side-bar{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border-right:var(--component__border);background:var(--secondary__bg-color)}.fix-left-fluid-layout__footer{-ms-flex-negative:0;flex-shrink:0}",""])},136:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),i=a.n(n),r=a(824),l=a(241),o=a(1060),d=(a.n(o),Object(l.b)("fix-left-fluid-layout")),c=function(e){return i.a.createElement(i.a.Fragment,null,e.showAccent&&i.a.createElement("div",{className:d("accent-bar")}),i.a.createElement("div",{className:d("container")},i.a.createElement("div",{className:d("side-bar")},e.left),i.a.createElement("div",{className:d("main")},e.children)),i.a.createElement("div",{className:d("footer")},e.footer))};t.default=Object(r.a)(c)},824:function(e,t,a){"use strict";function n(e){var t=function(t){var a=t.isAuthenticated,n=t.location,i=t.pendingAuth,l=t.redirectFromLogin;return i?r.a.createElement(c.a,null):a?r.a.createElement(e,t):(l(n),r.a.createElement(o.c,{to:Object(f.a)("/login")}))},a=function(e){return{isAuthenticated:e.auth.isAuthenticated,pendingAuth:e.auth.pending}},n=function(e){return{redirectFromLogin:function(t){return e(Object(d.h)(t))}}};return Object(l.connect)(a,n)(t)}var i=a(0),r=a.n(i),l=a(6),o=a(27),d=a(80),c=a(247),f=a(43);t.a=n}});