webpackJsonp([40],{1144:function(e,t,r){"use strict";var o=function(e){s.setProperty("--transition__time","0s"),setTimeout(function(){return s.setProperty("--transition__time","0.3s")},1),e.forEach(function(e){var t=e.name,r=e.color;i(t,r)}),localStorage.setItem("theme",JSON.stringify(e))},n=function(e){return getComputedStyle(l).getPropertyValue(e).trim()},a=function(){for(var e=[],t=1;t<100;t++){var r="--color"+(t<9?"0"+t:t),o=n(r);o&&e.push({name:r,color:o})}return e},i=function(e,t){var r=getComputedStyle(l);s.setProperty(e,t);for(var o=0;o<100;o+=5){var n=e+"_"+o;if(r.getPropertyValue(n).trim()){var a=function(e,t){if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e)){var r=e.substring(1).split("");return 3===r.length&&(r=[r[0],r[0],r[1],r[1],r[2],r[2]]),r="0x"+r.join(""),"rgba("+[r>>16&255,r>>8&255,255&r].join(",")+","+t+")"}return e}(t,o/100);s.setProperty(n,a)}}},c=function(){return o(m)},l=document.documentElement,s=l.style,m=a(),u={useDarkTheme:c,updateTheme:o,setPaletteColor:i,getPaletteColor:n,getThemeColors:a};t.a=u},1145:function(e,t,r){var o=r(1146);"string"===typeof o&&(o=[[e.i,o,""]]);var n={hmr:!1};n.transform=void 0;r(667)(o,n);o.locals&&(e.exports=o.locals)},1146:function(e,t,r){t=e.exports=r(20)(!1),t.push([e.i,".theme-editor{height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background:var(--primary__bg-color)}.theme-editor__header{padding:2.5rem;border-bottom:var(--component__border);background:var(--component__header-bg-color)}.theme-editor__header-text{font-size:1.4rem;padding-bottom:1rem;color:var(--font__color-primary)}.theme-editor__description{letter-spacing:.3px;color:var(--font__color-secondary)}.theme-editor__body{padding:2.5rem;overflow:auto}.theme-editor__body,.theme-editor__left{display:-ms-flexbox;display:flex;width:100%}.theme-editor__left{-ms-flex-wrap:wrap;flex-wrap:wrap}.theme-editor__right{width:20rem}.theme-editor__color-row{white-space:nowrap;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid var(--border__color-secondary);padding-bottom:.5rem;margin:0 3rem .5rem 0;-ms-flex-negative:0;flex-shrink:0;width:20rem}.theme-editor__label{font-size:1.2rem;margin-right:1rem}.theme-editor__input-color{border:1px solid #000}.theme-editor__btn{font-size:1.2rem;display:block;padding:1rem;margin-bottom:1rem;text-align:center;color:var(--font__color-primary);background:var(--success__bg-color)}.theme-editor__btn:hover{background:var(--success__bg-color--hover)}",""])},676:function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),c=r.n(i),l=r(2),s=r.n(l),m=r(1144),u=r(886),d=r(239),f=r(1145),p=(r.n(f),function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}()),h=Object(d.b)("theme-editor"),_=function(e){function t(){return o(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){var e=this,t=document.querySelector("html").style,r=function(r,o){t.setProperty("--transition__time","0s"),setTimeout(function(){return t.setProperty("--transition__time","0.3s")},1),m.a.setPaletteColor(r,o),e.setState({})},o=function(e){return c.a.createElement("div",{key:e,className:h("color-row")},c.a.createElement("span",{className:h("label")},e,":"),c.a.createElement("input",{type:"color",onChange:function(t){return r(e,t.target.value)},value:m.a.getPaletteColor(e),className:h("input-color")}))},n=m.a.getThemeColors(),a=n.map(function(e){var t=e.name;return o(t)});return c.a.createElement("div",{className:h()},c.a.createElement("div",{className:h("header")},c.a.createElement("div",{className:h("header-text")},this.context.t("Theme Editor")),c.a.createElement("div",{className:h("description")},this.context.t("Edit all the colors used in the app"))),c.a.createElement("div",{className:h("body")},c.a.createElement("div",{className:h("left")},a),c.a.createElement("div",{className:h("right")},c.a.createElement("a",{className:h("btn"),onClick:function(){m.a.useDarkTheme(),e.setState({})}},"Use Dark Theme"),c.a.createElement("a",{className:h("btn"),onClick:function(){return Object(u.a)(JSON.stringify(n,null,2))}},"Copy To Clipboard"))))}}]),t}(c.a.Component);_.contextTypes={t:s.a.func.isRequired},t.default=_},886:function(e,t,r){"use strict";var o=function(e){var t=document.createElement("textarea");t.innerText=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()};t.a=o}});