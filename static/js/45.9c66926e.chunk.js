webpackJsonp([45],{1116:function(t,e,r){var n=r(1117);"string"===typeof n&&(n=[[t.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(693)(n,o);n.locals&&(t.exports=n.locals)},1117:function(t,e,r){e=t.exports=r(25)(!1),e.push([t.i,".ap-logo{-o-object-fit:contain;object-fit:contain}.ap-logo__link,.ap-logo__link:active,.ap-logo__link:hover,.ap-logo__link:link,.ap-logo__link:visited{color:var(--standalone-form__logo-color)}.ap-logo__img{width:8rem}",""])},1276:function(t,e,r){var n=r(1277);"string"===typeof n&&(n=[[t.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(693)(n,o);n.locals&&(t.exports=n.locals)},1277:function(t,e,r){e=t.exports=r(25)(!1),e.push([t.i,".standalone-layout__wrapper{position:fixed;top:0;left:0;min-width:100%;min-height:100%;height:100%;background:var(--standalone-form__wrapper-bg-image);max-height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow-y:auto}.standalone-layout__logo{margin:2.8rem;position:absolute;top:0;left:0;color:var(--standalone-form__logo-color)}@media only screen and (max-width:576px){.standalone-layout__logo{margin:auto;position:relative;margin-top:2rem;margin-bottom:0}}",""])},697:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),o=r.n(n),s=r(264),i=r(978),a=r(1276),u=(r.n(a),Object(s.b)("standalone-layout")),c=function(t){return o.a.createElement("div",{className:u("wrapper")},o.a.createElement(i.a,{customClass:u("logo"),linkTo:"/"}),t.children)};e.default=c},733:function(t,e){function r(){for(var t={},e=0;e<arguments.length;e++){var r=arguments[e];for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])}return t}t.exports=r},735:function(t,e,r){"use strict";function n(t){this.request=t.request,this.xhr=t.xhr,this.headers=t.headers||{},this.status=t.status||0,this.text=t.text,this.body=t.body,this.contentType=t.contentType,this.isHttpError=t.status>=400}var o=r(736),s=r(737);n.prototype.header=o.prototype.header,n.fromRequest=function(t){return new n(s(t))},t.exports=n},736:function(t,e,r){"use strict";function n(t){var e="string"===typeof t?{url:t}:t||{};this.method=e.method?e.method.toUpperCase():"GET",this.url=e.url,this.headers=e.headers||{},this.body=e.body,this.timeout=e.timeout||0,this.errorOn404=null==e.errorOn404||e.errorOn404,this.onload=e.onload,this.onerror=e.onerror}n.prototype.abort=function(){if(!this.aborted)return this.aborted=!0,this.xhr.abort(),this},n.prototype.header=function(t,e){var r;for(r in this.headers)if(this.headers.hasOwnProperty(r)&&t.toLowerCase()===r.toLowerCase()){if(1===arguments.length)return this.headers[r];delete this.headers[r];break}if(null!=e)return this.headers[t]=e,e},t.exports=n},737:function(t,e,r){"use strict";var n=r(733);t.exports=function(t){var e=t.xhr,r={request:t,xhr:e};try{var o,s,i,a={};if(e.getAllResponseHeaders)for(o=e.getAllResponseHeaders().split("\n"),s=0;s<o.length;s++)(i=o[s].match(/\s*([^\s]+):\s+([^\s]+)/))&&(a[i[1]]=i[2]);r=n(r,{status:e.status,contentType:e.contentType||e.getResponseHeader&&e.getResponseHeader("Content-Type"),headers:a,text:e.responseText,body:e.response||e.responseText})}catch(t){}return r}},738:function(t,e,r){"use strict";t.exports=function(t){var e,r=!1;return function(){return r||(r=!0,e=t.apply(this,arguments)),e}}},747:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=r(0),a=r.n(i),u=r(2),c=r.n(u),l=r(752),p=r.n(l),f=r(757),h=r.n(f),d=r(759),v=function(){function t(t,e){var r=[],n=!0,o=!1,s=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,s=t}finally{try{!n&&a.return&&a.return()}finally{if(o)throw s}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),y=p.a.use(h.a),g={PENDING:"pending",LOADING:"loading",LOADED:"loaded",FAILED:"failed",UNSUPPORTED:"unsupported"},w={},b={},R=function(t){function e(t){n(this,e);var r=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.handleLoad=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t)return void r.fail(t);r.isActive&&r.setState({loadedText:e.text,status:g.LOADED},function(){r.props.onLoad(r.props.src,n)})},r.state={status:g.PENDING},r.isActive=!1,r}return s(e,t),m(e,[{key:"componentWillMount",value:function(){this.isActive=!0}},{key:"componentDidMount",value:function(){this.state.status===g.PENDING&&(this.props.supportTest()?this.props.src?this.startLoad():this.fail(Object(d.a)("Missing source")):this.fail(Object(d.e)()))}},{key:"componentDidUpdate",value:function(t){t.src!==this.props.src&&(this.props.src?this.startLoad():this.fail(Object(d.a)("Missing source")))}},{key:"componentWillUnmount",value:function(){this.isActive=!1}},{key:"getFile",value:function(t){var e=this,r=this.props,n=r.cacheGetRequests,o=r.src;if(n){if(b[o]){var s=v(b[o],2),i=s[0],a=s[1];t(i,a,!0)}w[o]||(w[o]=[],y.get(o,function(t,r){w[o].forEach(function(n){b[o]=[t,r],o===e.props.src&&n(t,r)})})),w[o].push(t)}else y.get(o,function(r,n){o===e.props.src&&t(r,n)})}},{key:"fail",value:function(t){var e=this,r=t.isUnsupportedBrowserError?g.UNSUPPORTED:g.FAILED;this.isActive&&this.setState({status:r},function(){"function"===typeof e.props.onError&&e.props.onError(t)})}},{key:"startLoad",value:function(){this.isActive&&this.setState({status:g.LOADING},this.load)}},{key:"load",value:function(){var t=this.props.src.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);return t?this.handleLoad(null,{text:t[1]?atob(t[2]):decodeURIComponent(t[2])}):this.getFile(this.handleLoad)}},{key:"getClassName",value:function(){var t="isvg "+this.state.status;return this.props.className&&(t+=" "+this.props.className),t}},{key:"processSVG",value:function(t){var e=this.props,r=e.uniquifyIDs,n=e.uniqueHash,o=e.baseURL;return r?Object(d.d)(t,n||Object(d.c)(),o):t}},{key:"renderContents",value:function(){switch(this.state.status){case g.UNSUPPORTED:case g.FAILED:return this.props.children;default:return this.props.preloader}}},{key:"render",value:function(){var t=void 0,e=void 0;return this.state.loadedText?e={__html:this.processSVG(this.state.loadedText)}:t=this.renderContents(),this.props.wrapper({style:this.props.style,className:this.getClassName(),dangerouslySetInnerHTML:e},t)}}]),e}(a.a.PureComponent);R.propTypes={baseURL:c.a.string,cacheGetRequests:c.a.bool,children:c.a.node,className:c.a.string,onError:c.a.func,onLoad:c.a.func,preloader:c.a.node,src:c.a.string.isRequired,style:c.a.object,supportTest:c.a.func,uniqueHash:c.a.string,uniquifyIDs:c.a.bool,wrapper:c.a.func},R.defaultProps={baseURL:"",cacheGetRequests:!1,onLoad:function(){},supportTest:d.b,uniquifyIDs:!0,wrapper:a.a.createFactory("span")},e.a=R},752:function(t,e,r){"use strict";function n(t,e){function r(r,n){var i,c,d,v,m,y;for(r=new p(f(t,r)),s=0;s<e.length;s++)c=e[s],c.processRequest&&c.processRequest(r);for(s=0;s<e.length;s++)if(c=e[s],c.createXHR){i=c.createXHR(r);break}i=i||new a,r.xhr=i,d=h(u(function(t){clearTimeout(m),i.onload=i.onerror=i.onabort=i.onreadystatechange=i.ontimeout=i.onprogress=null;var a=o(r,t),u=a||l.fromRequest(r);for(s=0;s<e.length;s++)c=e[s],c.processResponse&&c.processResponse(u);a&&r.onerror&&r.onerror(a),!a&&r.onload&&r.onload(u),n&&n(a,a?void 0:u)})),y="onload"in i&&"onerror"in i,i.onload=function(){d()},i.onerror=d,i.onabort=function(){d()},i.onreadystatechange=function(){if(4===i.readyState){if(r.aborted)return d();if(!y){var t;try{t=i.status}catch(e){}var e=0===t?new Error("Internal XHR Error"):null;return d(e)}}},i.ontimeout=function(){},i.onprogress=function(){},i.open(r.method,r.url),r.timeout&&(m=setTimeout(function(){r.timedOut=!0,d();try{i.abort()}catch(t){}},r.timeout));for(v in r.headers)r.headers.hasOwnProperty(v)&&i.setRequestHeader(v,r.headers[v]);return i.send(r.body),r}t=t||{},e=e||[];var i,d=["get","post","put","head","patch","delete"];for(s=0;s<d.length;s++)i=d[s],r[i]=function(t){return function(e,n){return e=new p(e),e.method=t,r(e,n)}}(i);return r.plugins=function(){return e},r.defaults=function(r){return r?n(f(t,r),e):t},r.use=function(){var r=Array.prototype.slice.call(arguments,0);return n(t,e.concat(r))},r.bare=function(){return n()},r.Request=p,r.Response=l,r.RequestError=c,r}function o(t,e){if(t.aborted)return d("Request aborted",t,{name:"Abort"});if(t.timedOut)return d("Request timeout",t,{name:"Timeout"});var r,n=t.xhr,o=Math.floor(n.status/100);switch(o){case 0:case 2:if(!e)return;return d(e.message,t);case 4:if(404===n.status&&!t.errorOn404)return;r="Client";break;case 5:r="Server";break;default:r="HTTP"}var s=r+" Error: The server returned a status of "+n.status+' for the request "'+t.method.toUpperCase()+" "+t.url+'"';return d(s,t)}var s,i=r(753),a=r(754),u=r(755),c=r(756),l=r(735),p=r(736),f=r(733),h=r(738),d=c.create;t.exports=n({},[i])},753:function(t,e,r){"use strict";t.exports={processRequest:function(t){t.url=t.url.replace(/[^%]+/g,function(t){return encodeURI(t)})}}},754:function(t,e){t.exports=window.XMLHttpRequest},755:function(t,e,r){"use strict";t.exports=function(t){return function(){var e=Array.prototype.slice.call(arguments,0),r=function(){return t.apply(null,e)};setTimeout(r,0)}}},756:function(t,e,r){"use strict";function n(t,e){var r=new Error(t);r.name="RequestError",this.name=r.name,this.message=r.message,r.stack&&(this.stack=r.stack),this.toString=function(){return this.message};for(var n in e)e.hasOwnProperty(n)&&(this[n]=e[n])}var o=r(735),s=r(737),i=r(733);n.prototype=i(Error.prototype),n.prototype.constructor=n,n.create=function(t,e,r){var i=new n(t,r);return o.call(i,s(e)),i},t.exports=n},757:function(t,e,r){"use strict";var n=r(758),o=r(738),s=!1,i=o(function(){return"undefined"!==typeof window&&null!==window&&window.XMLHttpRequest&&"withCredentials"in new window.XMLHttpRequest});t.exports={createXHR:function(t){var e,r,o;if("undefined"!==typeof window&&null!==window&&(e=n(t.url),r=n(window.location.href),e.host&&(e.protocol!==r.protocol||e.host!==r.host||e.port!==r.port))){if(!s&&t.headers)for(o in t.headers)if(t.headers.hasOwnProperty(o)){s=!0,window&&window.console&&window.console.warn&&window.console.warn("Request headers are ignored in old IE when using the oldiexdomain plugin.");break}if(window.XDomainRequest&&!i()){var a=new window.XDomainRequest;return a.setRequestHeader=function(){},a}}}}},758:function(t,e){(function(){var e,r,n,o={}.hasOwnProperty;e=/^(?:(?:([^:\/?\#]+:)\/+|(\/\/))(?:([a-z0-9-\._~%]+)(?::([a-z0-9-\._~%]+))?@)?(([a-z0-9-\._~%!$&'()*+,;=]+)(?::([0-9]+))?)?)?([^?\#]*?)(\?[^\#]*)?(\#.*)?$/,n=function(t,e){return n.URL.parse(t,e)},n.URL=function(){function t(t){var e,n,s;for(e in r)o.call(r,e)&&(n=r[e],this[e]=null!=(s=t[e])?s:n);this.host||(this.host=this.hostname&&this.port?this.hostname+":"+this.port:this.hostname?this.hostname:""),this.origin||(this.origin=this.protocol?this.protocol+"//"+this.host:""),this.isAbsolutePathRelative=!this.host&&"/"===this.pathname.charAt(0),this.isPathRelative=!this.host&&"/"!==this.pathname.charAt(0),this.isRelative=this.isSchemeRelative||this.isAbsolutePathRelative||this.isPathRelative,this.isAbsolute=!this.isRelative}return t.parse=function(t){var r,o,s;return r=t.toString().match(e),o=r[8]||"",s=r[1],new n.URL({protocol:s,username:r[3],password:r[4],hostname:r[6],port:r[7],pathname:s&&"/"!==o.charAt(0)?"/"+o:o,search:r[9],hash:r[10],isSchemeRelative:null!=r[2]})},t}(),r={protocol:"",username:"",password:"",host:"",hostname:"",port:"",pathname:"",search:"",hash:"",origin:"",isSchemeRelative:!1},t.exports=n}).call(this)},759:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.d(e,"b",function(){return l}),r.d(e,"c",function(){return p}),r.d(e,"d",function(){return f}),r.d(e,"e",function(){return v}),r.d(e,"a",function(){return m});var i=r(760),a=r.n(i),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c=a()(function(){if(!document)return!1;var t=document.createElement("div");return t.innerHTML="<svg />",t.firstChild&&"http://www.w3.org/2000/svg"===t.firstChild.namespaceURI}),l=a()(function(){return!(!c()||"undefined"===typeof window||null===window)&&(window.XMLHttpRequest||window.XDomainRequest)}),p=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,e="abcdefghijklmnopqrstuvwxyz",r=e+e.toUpperCase()+"1234567890",n="",o=0;o<t;o++)n+=function(t){return t[Math.floor(Math.random()*t.length)]}(r);return n},f=function(){var t=function(t){return"(?:(?:\\s|\\:)"+t+")"},e=new RegExp("(?:("+t("id")+')="([^"]+)")|(?:('+t("href")+"|"+t("role")+"|"+t("arcrole")+')="\\#([^"]+)")|(?:="url\\(\\#([^\\)]+)\\)")|(?:url\\(\\#([^\\)]+)\\))',"g");return function(t,r,n){var o=function(t){return t+"___"+r};return t.replace(e,function(t,e,r,s,i,a,u){return r?e+'="'+o(r)+'"':i?s+'="'+n+"#"+o(i)+'"':a?'="url('+n+"#"+o(a)+')"':u?"url("+n+"#"+o(u)+")":void 0})}}(),h=function(t){function e(t){var r;n(this,e);var s=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return s.name="InlineSVGError",s.isSupportedBrowser=!0,s.isConfigurationError=!1,s.isUnsupportedBrowserError=!1,s.message=t,r=s,o(s,r)}return s(e,t),e}(Error),d=function(t,e){var r=new h(t);return u({},r,e)},v=function(t){var e=t;return e||(e="Unsupported Browser"),d(e,{isSupportedBrowser:!1,isUnsupportedBrowserError:!0})},m=function(t){return d(t,{isConfigurationError:!0})}},760:function(t,e,r){function n(t){var e=function(){return e.called?e.value:(e.called=!0,e.value=t.apply(this,arguments))};return e.called=!1,e}function o(t){var e=function(){if(e.called)throw new Error(e.onceError);return e.called=!0,e.value=t.apply(this,arguments)},r=t.name||"Function wrapped with `once`";return e.onceError=r+" shouldn't be called more than once",e.called=!1,e}var s=r(761);t.exports=s(n),t.exports.strict=s(o),n.proto=n(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return n(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return o(this)},configurable:!0})})},761:function(t,e){function r(t,e){function n(){for(var e=new Array(arguments.length),r=0;r<e.length;r++)e[r]=arguments[r];var n=t.apply(this,e),o=e[e.length-1];return"function"===typeof n&&n!==o&&Object.keys(o).forEach(function(t){n[t]=o[t]}),n}if(t&&e)return r(t)(e);if("function"!==typeof t)throw new TypeError("need wrapper function");return Object.keys(t).forEach(function(e){n[e]=t[e]}),n}t.exports=r},978:function(t,e,r){"use strict";var n=r(0),o=r.n(n),s=r(2),i=r.n(s),a=r(36),u=r(26),c=r(747),l=r(5),p=r(264),f=r(1116),h=(r.n(f),function(t){var e=t.customClass,r=t.linkTo,n=t.onClick,s=Object(p.b)("ap-logo",e),i=function(){return l.default.global.siteLogo.match(/.svg$/)?o.a.createElement(c.a,{alt:"Site logo",src:Object(u.a)("/local/logos/"+l.default.global.siteLogo),className:s("img")}):o.a.createElement("img",{alt:"Site logo",src:Object(u.a)("/local/logos/"+l.default.global.siteLogo),className:s("img")})};return o.a.createElement("div",{className:s()},r?o.a.createElement(a.a,{className:s("link"),to:Object(u.a)(r),onClick:n},i()):i())});h.defaultProps={customClass:"",linkTo:""},h.propTypes={customClass:i.a.string,linkTo:i.a.string,onClick:i.a.func},e.a=h}});