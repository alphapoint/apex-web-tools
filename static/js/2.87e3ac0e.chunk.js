webpackJsonp([2],{1153:function(t,e,n){var r=n(1154);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(674)(r,o);r.locals&&(t.exports=r.locals)},1154:function(t,e,n){e=t.exports=n(20)(!1),e.push([t.i,".page-footer{min-height:var(--footer__height);width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--footer__bg-color);padding:4.4rem 4.4rem 0;border-top:2px solid var(--border__color)}.page-footer__footer-left-content{width:50%;font-size:1.2rem}.page-footer__footer-right-content{display:-ms-flexbox;display:flex;width:40%;max-width:60rem;margin-left:10%;-ms-flex-pack:justify;justify-content:space-between}.page-footer__text{font-size:1.2rem;width:10.7rem;color:var(--text-link);line-height:1.8rem}.page-footer__icon{width:10.7rem;color:var(--footer__logo-color)}@media only screen and (max-width:76.8rem){.page-footer__footer-right-content{-ms-flex-wrap:wrap;flex-wrap:wrap}.page-footer__icon{width:10.7rem;color:var(--footer__logo-color);margin-left:auto}}@media only screen and (max-width:48rem){.page-footer{display:block}.page-footer__footer-left-content{margin-bottom:1rem}.page-footer__footer-right-content{margin-left:0;width:auto}.page-footer__footer-right-content>*{margin-right:1rem}}",""])},146:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n.n(r),i=n(2),a=n.n(i),s=n(128),c=n.n(s),u=n(701),p=n(9),f=n(241),l=n(1153),d=(n.n(l),Object(f.b)("page-footer")),h=function(t,e){return o.a.createElement("footer",{className:d()},o.a.createElement("div",{className:d("footer-left-content")},e.t("{n}\u2122 {y}. All Rights Reserved.",{n:p.default.global.siteName,y:(new Date).getFullYear()})),o.a.createElement("div",{className:d("footer-right-content")},c()(p.default,"Footer.links",[]).map(function(t,n){return o.a.createElement("div",{key:n,className:d("text")},t.map(function(t,r){return o.a.createElement("a",{key:""+n+r,href:t.link},e.t(t.text))}))}),o.a.createElement("div",{className:d("icon")},o.a.createElement(u.a,{name:"logo-powered"}))))};h.contextTypes={t:a.a.func.isRequired},e.default=h},700:function(t,e){function n(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])}return t}t.exports=n},701:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(2),a=n.n(i),s=n(709),c=n(241),u=n(720),p=(n.n(u),n(722)),f=n.n(p),l=n(723),d=n.n(l),h=n(724),m=n.n(h),v=n(725),g=n.n(v),w=n(726),y=n.n(w),b=n(727),x=n.n(b),R=n(728),_=n.n(R),E=n(729),O=n.n(E),k=n(730),T=n.n(k),q=n(731),P=n.n(q),j=n(732),L=n.n(j),A=n(733),N=n.n(A),D=n(734),S=n.n(D),U=n(735),C=n.n(U),H=n(736),I=n.n(H),M=n(737),G=n.n(M),F=n(738),X=n.n(F),z=n(739),B=n.n(z),V=n(740),W=n.n(V),$=n(741),J=n.n($),Y=n(742),K=n.n(Y),Q=n(743),Z=n.n(Q),tt=n(744),et=n.n(tt),nt=n(745),rt=n.n(nt),ot=n(746),it=n.n(ot),at=n(747),st=n.n(at),ct=n(748),ut=n.n(ct),pt=n(749),ft=n.n(pt),lt=n(750),dt=n.n(lt),ht=n(751),mt=n.n(ht),vt=n(752),gt=n.n(vt),wt=n(753),yt=n.n(wt),bt=n(754),xt=n.n(bt),Rt=n(755),_t=n.n(Rt),Et=n(756),Ot=n.n(Et),kt=n(757),Tt=n.n(kt),qt=n(758),Pt=n.n(qt),jt=n(759),Lt=n.n(jt),At=n(760),Nt=n.n(At),Dt=n(761),St=n.n(Dt),Ut=n(762),Ct=n.n(Ut),Ht=n(763),It=n.n(Ht),Mt={"user-settings":et.a,"buy-sell":it.a,user:ft.a,notification:dt.a,dashboard:ut.a,trading:st.a,wallet:rt.a,stop:f.a,balance:d.a,center:m.a,close:g.a,"close-inverse":y.a,"deposit-arrow":x.a,download:G.a,exchange:_.a,"generate-reports":O.a,check:T.a,checkbox:P.a,refresh:L.a,"withdraw-arrow":N.a,menu:S.a,"menu-toggle":C.a,key:I.a,arrowPrevious:X.a,arrowNext:B.a,"simple-check":Z.a,pending:K.a,settings:J.a,alert:W.a,buy:mt.a,sell:gt.a,eye:yt.a,receive:xt.a,send:_t.a,deposit:Ot.a,withdraw:Tt.a,info:Pt.a,copy:Lt.a,star:Nt.a,"logo-powered":St.a,"open-buy":Ct.a,"open-sell":It.a},Gt=function(t){var e=t.name,n=t.customClass,r=t.classModifiers,i=Object(c.a)(r,e),a=Object(c.b)(["ap-icon",n]),u=Mt[e];return o.a.createElement(s.a,{src:u,className:a(null,i)})};Gt.defaultProps={name:"",customClass:"custom-icon",classModifiers:"",disabled:!1},Gt.propTypes={name:a.a.string,customClass:a.a.string,classModifiers:a.a.oneOfType([a.a.string,a.a.arrayOf(a.a.string)]),disabled:a.a.bool},e.a=Gt},702:function(t,e,n){"use strict";function r(t){this.request=t.request,this.xhr=t.xhr,this.headers=t.headers||{},this.status=t.status||0,this.text=t.text,this.body=t.body,this.contentType=t.contentType,this.isHttpError=t.status>=400}var o=n(703),i=n(704);r.prototype.header=o.prototype.header,r.fromRequest=function(t){return new r(i(t))},t.exports=r},703:function(t,e,n){"use strict";function r(t){var e="string"===typeof t?{url:t}:t||{};this.method=e.method?e.method.toUpperCase():"GET",this.url=e.url,this.headers=e.headers||{},this.body=e.body,this.timeout=e.timeout||0,this.errorOn404=null==e.errorOn404||e.errorOn404,this.onload=e.onload,this.onerror=e.onerror}r.prototype.abort=function(){if(!this.aborted)return this.aborted=!0,this.xhr.abort(),this},r.prototype.header=function(t,e){var n;for(n in this.headers)if(this.headers.hasOwnProperty(n)&&t.toLowerCase()===n.toLowerCase()){if(1===arguments.length)return this.headers[n];delete this.headers[n];break}if(null!=e)return this.headers[t]=e,e},t.exports=r},704:function(t,e,n){"use strict";var r=n(700);t.exports=function(t){var e=t.xhr,n={request:t,xhr:e};try{var o,i,a,s={};if(e.getAllResponseHeaders)for(o=e.getAllResponseHeaders().split("\n"),i=0;i<o.length;i++)(a=o[i].match(/\s*([^\s]+):\s+([^\s]+)/))&&(s[a[1]]=a[2]);n=r(n,{status:e.status,contentType:e.contentType||e.getResponseHeader&&e.getResponseHeader("Content-Type"),headers:s,text:e.responseText,body:e.response||e.responseText})}catch(t){}return n}},705:function(t,e,n){"use strict";t.exports=function(t){var e,n=!1;return function(){return n||(n=!0,e=t.apply(this,arguments)),e}}},709:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(0),s=n.n(a),c=n(2),u=n.n(c),p=n(710),f=n.n(p),l=n(715),d=n.n(l),h=n(717),m=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),g=f.a.use(d.a),w={PENDING:"pending",LOADING:"loading",LOADED:"loaded",FAILED:"failed",UNSUPPORTED:"unsupported"},y={},b={},x=function(t){function e(t){r(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.handleLoad=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t)return void n.fail(t);n.isActive&&n.setState({loadedText:e.text,status:w.LOADED},function(){n.props.onLoad(n.props.src,r)})},n.state={status:w.PENDING},n.isActive=!1,n}return i(e,t),v(e,[{key:"componentWillMount",value:function(){this.isActive=!0}},{key:"componentDidMount",value:function(){this.state.status===w.PENDING&&(this.props.supportTest()?this.props.src?this.startLoad():this.fail(Object(h.a)("Missing source")):this.fail(Object(h.e)()))}},{key:"componentDidUpdate",value:function(t){t.src!==this.props.src&&(this.props.src?this.startLoad():this.fail(Object(h.a)("Missing source")))}},{key:"componentWillUnmount",value:function(){this.isActive=!1}},{key:"getFile",value:function(t){var e=this,n=this.props,r=n.cacheGetRequests,o=n.src;if(r){if(b[o]){var i=m(b[o],2),a=i[0],s=i[1];t(a,s,!0)}y[o]||(y[o]=[],g.get(o,function(t,n){y[o].forEach(function(r){b[o]=[t,n],o===e.props.src&&r(t,n)})})),y[o].push(t)}else g.get(o,function(n,r){o===e.props.src&&t(n,r)})}},{key:"fail",value:function(t){var e=this,n=t.isUnsupportedBrowserError?w.UNSUPPORTED:w.FAILED;this.isActive&&this.setState({status:n},function(){"function"===typeof e.props.onError&&e.props.onError(t)})}},{key:"startLoad",value:function(){this.isActive&&this.setState({status:w.LOADING},this.load)}},{key:"load",value:function(){var t=this.props.src.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);return t?this.handleLoad(null,{text:t[1]?atob(t[2]):decodeURIComponent(t[2])}):this.getFile(this.handleLoad)}},{key:"getClassName",value:function(){var t="isvg "+this.state.status;return this.props.className&&(t+=" "+this.props.className),t}},{key:"processSVG",value:function(t){var e=this.props,n=e.uniquifyIDs,r=e.uniqueHash,o=e.baseURL;return n?Object(h.d)(t,r||Object(h.c)(),o):t}},{key:"renderContents",value:function(){switch(this.state.status){case w.UNSUPPORTED:case w.FAILED:return this.props.children;default:return this.props.preloader}}},{key:"render",value:function(){var t=void 0,e=void 0;return this.state.loadedText?e={__html:this.processSVG(this.state.loadedText)}:t=this.renderContents(),this.props.wrapper({style:this.props.style,className:this.getClassName(),dangerouslySetInnerHTML:e},t)}}]),e}(s.a.PureComponent);x.propTypes={baseURL:u.a.string,cacheGetRequests:u.a.bool,children:u.a.node,className:u.a.string,onError:u.a.func,onLoad:u.a.func,preloader:u.a.node,src:u.a.string.isRequired,style:u.a.object,supportTest:u.a.func,uniqueHash:u.a.string,uniquifyIDs:u.a.bool,wrapper:u.a.func},x.defaultProps={baseURL:"",cacheGetRequests:!1,onLoad:function(){},supportTest:h.b,uniquifyIDs:!0,wrapper:s.a.createFactory("span")},e.a=x},710:function(t,e,n){"use strict";function r(t,e){function n(n,r){var a,u,h,m,v,g;for(n=new f(l(t,n)),i=0;i<e.length;i++)u=e[i],u.processRequest&&u.processRequest(n);for(i=0;i<e.length;i++)if(u=e[i],u.createXHR){a=u.createXHR(n);break}a=a||new s,n.xhr=a,h=d(c(function(t){clearTimeout(v),a.onload=a.onerror=a.onabort=a.onreadystatechange=a.ontimeout=a.onprogress=null;var s=o(n,t),c=s||p.fromRequest(n);for(i=0;i<e.length;i++)u=e[i],u.processResponse&&u.processResponse(c);s&&n.onerror&&n.onerror(s),!s&&n.onload&&n.onload(c),r&&r(s,s?void 0:c)})),g="onload"in a&&"onerror"in a,a.onload=function(){h()},a.onerror=h,a.onabort=function(){h()},a.onreadystatechange=function(){if(4===a.readyState){if(n.aborted)return h();if(!g){var t;try{t=a.status}catch(e){}var e=0===t?new Error("Internal XHR Error"):null;return h(e)}}},a.ontimeout=function(){},a.onprogress=function(){},a.open(n.method,n.url),n.timeout&&(v=setTimeout(function(){n.timedOut=!0,h();try{a.abort()}catch(t){}},n.timeout));for(m in n.headers)n.headers.hasOwnProperty(m)&&a.setRequestHeader(m,n.headers[m]);return a.send(n.body),n}t=t||{},e=e||[];var a,h=["get","post","put","head","patch","delete"];for(i=0;i<h.length;i++)a=h[i],n[a]=function(t){return function(e,r){return e=new f(e),e.method=t,n(e,r)}}(a);return n.plugins=function(){return e},n.defaults=function(n){return n?r(l(t,n),e):t},n.use=function(){var n=Array.prototype.slice.call(arguments,0);return r(t,e.concat(n))},n.bare=function(){return r()},n.Request=f,n.Response=p,n.RequestError=u,n}function o(t,e){if(t.aborted)return h("Request aborted",t,{name:"Abort"});if(t.timedOut)return h("Request timeout",t,{name:"Timeout"});var n,r=t.xhr,o=Math.floor(r.status/100);switch(o){case 0:case 2:if(!e)return;return h(e.message,t);case 4:if(404===r.status&&!t.errorOn404)return;n="Client";break;case 5:n="Server";break;default:n="HTTP"}var i=n+" Error: The server returned a status of "+r.status+' for the request "'+t.method.toUpperCase()+" "+t.url+'"';return h(i,t)}var i,a=n(711),s=n(712),c=n(713),u=n(714),p=n(702),f=n(703),l=n(700),d=n(705),h=u.create;t.exports=r({},[a])},711:function(t,e,n){"use strict";t.exports={processRequest:function(t){t.url=t.url.replace(/[^%]+/g,function(t){return encodeURI(t)})}}},712:function(t,e){t.exports=window.XMLHttpRequest},713:function(t,e,n){"use strict";t.exports=function(t){return function(){var e=Array.prototype.slice.call(arguments,0),n=function(){return t.apply(null,e)};setTimeout(n,0)}}},714:function(t,e,n){"use strict";function r(t,e){var n=new Error(t);n.name="RequestError",this.name=n.name,this.message=n.message,n.stack&&(this.stack=n.stack),this.toString=function(){return this.message};for(var r in e)e.hasOwnProperty(r)&&(this[r]=e[r])}var o=n(702),i=n(704),a=n(700);r.prototype=a(Error.prototype),r.prototype.constructor=r,r.create=function(t,e,n){var a=new r(t,n);return o.call(a,i(e)),a},t.exports=r},715:function(t,e,n){"use strict";var r=n(716),o=n(705),i=!1,a=o(function(){return"undefined"!==typeof window&&null!==window&&window.XMLHttpRequest&&"withCredentials"in new window.XMLHttpRequest});t.exports={createXHR:function(t){var e,n,o;if("undefined"!==typeof window&&null!==window&&(e=r(t.url),n=r(window.location.href),e.host&&(e.protocol!==n.protocol||e.host!==n.host||e.port!==n.port))){if(!i&&t.headers)for(o in t.headers)if(t.headers.hasOwnProperty(o)){i=!0,window&&window.console&&window.console.warn&&window.console.warn("Request headers are ignored in old IE when using the oldiexdomain plugin.");break}if(window.XDomainRequest&&!a()){var s=new window.XDomainRequest;return s.setRequestHeader=function(){},s}}}}},716:function(t,e){(function(){var e,n,r,o={}.hasOwnProperty;e=/^(?:(?:([^:\/?\#]+:)\/+|(\/\/))(?:([a-z0-9-\._~%]+)(?::([a-z0-9-\._~%]+))?@)?(([a-z0-9-\._~%!$&'()*+,;=]+)(?::([0-9]+))?)?)?([^?\#]*?)(\?[^\#]*)?(\#.*)?$/,r=function(t,e){return r.URL.parse(t,e)},r.URL=function(){function t(t){var e,r,i;for(e in n)o.call(n,e)&&(r=n[e],this[e]=null!=(i=t[e])?i:r);this.host||(this.host=this.hostname&&this.port?this.hostname+":"+this.port:this.hostname?this.hostname:""),this.origin||(this.origin=this.protocol?this.protocol+"//"+this.host:""),this.isAbsolutePathRelative=!this.host&&"/"===this.pathname.charAt(0),this.isPathRelative=!this.host&&"/"!==this.pathname.charAt(0),this.isRelative=this.isSchemeRelative||this.isAbsolutePathRelative||this.isPathRelative,this.isAbsolute=!this.isRelative}return t.parse=function(t){var n,o,i;return n=t.toString().match(e),o=n[8]||"",i=n[1],new r.URL({protocol:i,username:n[3],password:n[4],hostname:n[6],port:n[7],pathname:i&&"/"!==o.charAt(0)?"/"+o:o,search:n[9],hash:n[10],isSchemeRelative:null!=n[2]})},t}(),n={protocol:"",username:"",password:"",host:"",hostname:"",port:"",pathname:"",search:"",hash:"",origin:"",isSchemeRelative:!1},t.exports=r}).call(this)},717:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"b",function(){return p}),n.d(e,"c",function(){return f}),n.d(e,"d",function(){return l}),n.d(e,"e",function(){return m}),n.d(e,"a",function(){return v});var a=n(718),s=n.n(a),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=s()(function(){if(!document)return!1;var t=document.createElement("div");return t.innerHTML="<svg />",t.firstChild&&"http://www.w3.org/2000/svg"===t.firstChild.namespaceURI}),p=s()(function(){return!(!u()||"undefined"===typeof window||null===window)&&(window.XMLHttpRequest||window.XDomainRequest)}),f=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,e="abcdefghijklmnopqrstuvwxyz",n=e+e.toUpperCase()+"1234567890",r="",o=0;o<t;o++)r+=function(t){return t[Math.floor(Math.random()*t.length)]}(n);return r},l=function(){var t=function(t){return"(?:(?:\\s|\\:)"+t+")"},e=new RegExp("(?:("+t("id")+')="([^"]+)")|(?:('+t("href")+"|"+t("role")+"|"+t("arcrole")+')="\\#([^"]+)")|(?:="url\\(\\#([^\\)]+)\\)")|(?:url\\(\\#([^\\)]+)\\))',"g");return function(t,n,r){var o=function(t){return t+"___"+n};return t.replace(e,function(t,e,n,i,a,s,c){return n?e+'="'+o(n)+'"':a?i+'="'+r+"#"+o(a)+'"':s?'="url('+r+"#"+o(s)+')"':c?"url("+r+"#"+o(c)+")":void 0})}}(),d=function(t){function e(t){var n;r(this,e);var i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.name="InlineSVGError",i.isSupportedBrowser=!0,i.isConfigurationError=!1,i.isUnsupportedBrowserError=!1,i.message=t,n=i,o(i,n)}return i(e,t),e}(Error),h=function(t,e){var n=new d(t);return c({},n,e)},m=function(t){var e=t;return e||(e="Unsupported Browser"),h(e,{isSupportedBrowser:!1,isUnsupportedBrowserError:!0})},v=function(t){return h(t,{isConfigurationError:!0})}},718:function(t,e,n){function r(t){var e=function(){return e.called?e.value:(e.called=!0,e.value=t.apply(this,arguments))};return e.called=!1,e}function o(t){var e=function(){if(e.called)throw new Error(e.onceError);return e.called=!0,e.value=t.apply(this,arguments)},n=t.name||"Function wrapped with `once`";return e.onceError=n+" shouldn't be called more than once",e.called=!1,e}var i=n(719);t.exports=i(r),t.exports.strict=i(o),r.proto=r(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return r(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return o(this)},configurable:!0})})},719:function(t,e){function n(t,e){function r(){for(var e=new Array(arguments.length),n=0;n<e.length;n++)e[n]=arguments[n];var r=t.apply(this,e),o=e[e.length-1];return"function"===typeof r&&r!==o&&Object.keys(o).forEach(function(t){r[t]=o[t]}),r}if(t&&e)return n(t)(e);if("function"!==typeof t)throw new TypeError("need wrapper function");return Object.keys(t).forEach(function(e){r[e]=t[e]}),r}t.exports=n},720:function(t,e,n){var r=n(721);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(674)(r,o);r.locals&&(t.exports=r.locals)},721:function(t,e,n){e=t.exports=n(20)(!1),e.push([t.i,".ap-icon{display:inline-block;width:10px}.ap-icon--success{color:var(--success)}.ap-icon--info{color:var(--information__color)}.ap-icon--danger{color:var(--danger__color);height:1rem}.ap-icon--big{width:14px}.ap-icon--center{width:12px}.ap-icon--deposit-arrow,.ap-icon--withdraw-arrow{width:11px}.ap-icon--balance,.ap-icon--exchange,.ap-icon--settings{width:16px;margin-top:3px;margin-bottom:-3px}.ap-icon--generate-report{width:12px}.ap-icon--key{width:16px}.ap-icon--menu{width:24px}.ap-icon--refresh{width:15px}.ap-icon--widthraw-arrow{width:11px}",""])},722:function(t,e,n){t.exports=n.p+"static/media/icon-stop.12973336.svg"},723:function(t,e,n){t.exports=n.p+"static/media/icon-balance.25d500b4.svg"},724:function(t,e,n){t.exports=n.p+"static/media/icon-center.d3865558.svg"},725:function(t,e,n){t.exports=n.p+"static/media/icon-close.f5458b61.svg"},726:function(t,e,n){t.exports=n.p+"static/media/icon-close-inverse.241501cd.svg"},727:function(t,e,n){t.exports=n.p+"static/media/icon-deposit-arrow.fb9cee72.svg"},728:function(t,e,n){t.exports=n.p+"static/media/icon-exchange.9c5a32b0.svg"},729:function(t,e,n){t.exports=n.p+"static/media/icon-generate-reports.c25e875a.svg"},730:function(t,e,n){t.exports=n.p+"static/media/icon-check.4443b294.svg"},731:function(t,e,n){t.exports=n.p+"static/media/icon-checkbox.6ff75c6f.svg"},732:function(t,e,n){t.exports=n.p+"static/media/icon-refresh.36718f54.svg"},733:function(t,e,n){t.exports=n.p+"static/media/icon-withdraw-arrow.4644456c.svg"},734:function(t,e,n){t.exports=n.p+"static/media/icon-menu.ff0128f9.svg"},735:function(t,e,n){t.exports=n.p+"static/media/icon-menu-toggle.ad89aeb9.svg"},736:function(t,e,n){t.exports=n.p+"static/media/icon-key.c3b5c80f.svg"},737:function(t,e,n){t.exports=n.p+"static/media/icon-download.ebdd4d2b.svg"},738:function(t,e,n){t.exports=n.p+"static/media/icon-arrow-prev.ec3c7dc9.svg"},739:function(t,e,n){t.exports=n.p+"static/media/icon-arrow-next.02ae871b.svg"},740:function(t,e,n){t.exports=n.p+"static/media/icon-alert.b09e6a92.svg"},741:function(t,e,n){t.exports=n.p+"static/media/icon-settings.d15941a5.svg"},742:function(t,e,n){t.exports=n.p+"static/media/icon-pending.e2938acc.svg"},743:function(t,e,n){t.exports=n.p+"static/media/icon-simple-check.03179922.svg"},744:function(t,e,n){t.exports=n.p+"static/media/icon-nav-settings.18d95955.svg"},745:function(t,e,n){t.exports=n.p+"static/media/icon-nav-wallet.d1ac2082.svg"},746:function(t,e,n){t.exports=n.p+"static/media/icon-nav-buy-sell.5ff447ad.svg"},747:function(t,e,n){t.exports=n.p+"static/media/icon-nav-trading.ac0d0bea.svg"},748:function(t,e,n){t.exports=n.p+"static/media/icon-nav-dashboard-on.56ceecff.svg"},749:function(t,e,n){t.exports=n.p+"static/media/icon-nav-user.1cd05f40.svg"},750:function(t,e,n){t.exports=n.p+"static/media/icon-nav-notification.84f07c0e.svg"},751:function(t,e,n){t.exports=n.p+"static/media/icon-buy.4736e26a.svg"},752:function(t,e,n){t.exports=n.p+"static/media/icon-sell.749581f6.svg"},753:function(t,e,n){t.exports=n.p+"static/media/icon-eye.f3c39bfb.svg"},754:function(t,e,n){t.exports=n.p+"static/media/icon-receive.f8805981.svg"},755:function(t,e,n){t.exports=n.p+"static/media/icon-send.0eae48e8.svg"},756:function(t,e,n){t.exports=n.p+"static/media/icon-deposit.59dc6048.svg"},757:function(t,e,n){t.exports=n.p+"static/media/icon-withdraw.ce30850a.svg"},758:function(t,e,n){t.exports=n.p+"static/media/icon-info.6448a8d0.svg"},759:function(t,e,n){t.exports=n.p+"static/media/icon-copy.9dc9a9a7.svg"},760:function(t,e,n){t.exports=n.p+"static/media/icon-star.9e54355c.svg"},761:function(t,e,n){t.exports=n.p+"static/media/logo-powered.7f6a585c.svg"},762:function(t,e,n){t.exports=n.p+"static/media/icon-open-buy-big.ec282aaa.svg"},763:function(t,e,n){t.exports=n.p+"static/media/icon-open-sell-big.04ef7f4d.svg"}});