webpackJsonp([11],{1209:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(794),c=n(80),u=n(771),l=n(936),p=n(941),f=n(1210),d=(n.n(f),Object(c.b)("wallet-details")),h=function(t,e){var n=t.positionDetails,r=n.iconFileName,i=n.Product,a=n.ProductFullName,c=n.AvailableBalance,f=n.Hold,h=n.PendingDeposits,m=n.Amount,v=n.ProductType,b=n.ProductId,g="CryptoCurrency"===v,y=function(t,n){return o.a.createElement("div",{className:d("detail")},o.a.createElement("div",{className:d("label")},e.t(t)),o.a.createElement("div",{className:d("value")},n))};return o.a.createElement("div",{className:d()},t.fetching?o.a.createElement(u.a,{isInline:!0,customClass:d}):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:d("product-actions-row")},o.a.createElement("div",{className:d("product-label")},o.a.createElement("div",{className:d("product-icon")},o.a.createElement(s.a,{iconFileName:r,size:48})),o.a.createElement("div",{className:d("product-symbol-name")},i+" "+a)),o.a.createElement("div",{className:d("wallet-nav-items")},g?o.a.createElement(l.a,{product:{iconFileName:r,ProductFullName:a,ProductSymbol:i,ProductId:b}}):o.a.createElement(p.a,{product:{iconFileName:r,ProductFullName:a,ProductSymbol:i,ProductId:b}}))),o.a.createElement("div",{className:d("position-row")},y("Available Balance",c),y("Hold",f),y("Pending Deposits",h),y("Total Balance",m))))};h.propTypes={positionDetails:a.a.object,fetching:a.a.bool.isRequired},h.contextTypes={t:a.a.func.isRequired},e.a=h},1210:function(t,e,n){var r=n(1211);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(686)(r,o);r.locals&&(t.exports=r.locals)},1211:function(t,e,n){e=t.exports=n(27)(!1),e.push([t.i,".wallet-details{margin:4rem;width:calc(100% - 8rem);background-color:var(--component__bg-color);border-radius:1rem;-webkit-box-shadow:0 .5rem 2.5rem 0 var(--shadow__color);box-shadow:0 .5rem 2.5rem 0 var(--shadow__color)}.wallet-details__product-actions-row{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid var(--border__color)}.wallet-details__product-label{display:-ms-flexbox;display:flex}.wallet-details__product-icon{padding:30px}.wallet-details__product-symbol-name{height:100%;font-size:2.5rem}.wallet-details__product-symbol-name,.wallet-details__wallet-nav-items{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.wallet-details__wallet-nav-items{padding-right:30px}.wallet-details__position-row{display:-ms-flexbox;display:flex;width:100%}.wallet-details__detail{width:25%;padding:30px;border-right:1px solid var(--border__color)}.wallet-details__detail:last-of-type{border-right:0}.wallet-details__label{font-size:1.2rem;color:var(--wallet-detail__label-color)}.wallet-details__value{font-size:2.5rem}.wallet-details__spinner-container{margin:1.5rem 3.5rem}",""])},153:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(7),o=n(1209),i=n(795),a=function(t){var e=t.position,n=Object(i.a)(t);return{positionDetails:Object(i.d)(t).find(function(t){return t.ProductId===e.selectedProductId}),fetching:n}};e.default=Object(r.connect)(a)(o.a)},708:function(t,e){function n(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])}return t}t.exports=n},709:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(715),c=n(80),u=n(726),l=(n.n(u),n(728)),p=n.n(l),f=n(729),d=n.n(f),h=n(730),m=n.n(h),v=n(731),b=n.n(v),g=n(732),y=n.n(g),w=n(733),x=n.n(w),_=n(734),O=n.n(_),E=n(735),R=n.n(E),P=n(736),k=n.n(P),j=n(737),N=n.n(j),T=n(738),C=n.n(T),S=n(739),q=n.n(S),A=n(740),F=n.n(A),D=n(741),I=n.n(D),L=n(742),U=n.n(L),M=n(743),H=n.n(M),B=n(744),z=n.n(B),G=n(745),X=n.n(G),V=n(746),W=n.n(V),Z=n(747),$=n.n(Z),J=n(748),K=n.n(J),Q=n(749),Y=n.n(Q),tt=n(750),et=n.n(tt),nt=n(751),rt=n.n(nt),ot=n(752),it=n.n(ot),at=n(753),st=n.n(at),ct=n(754),ut=n.n(ct),lt=n(755),pt=n.n(lt),ft=n(756),dt=n.n(ft),ht=n(757),mt=n.n(ht),vt=n(758),bt=n.n(vt),gt=n(759),yt=n.n(gt),wt=n(760),xt=n.n(wt),_t=n(761),Ot=n.n(_t),Et=n(762),Rt=n.n(Et),Pt=n(763),kt=n.n(Pt),jt=n(764),Nt=n.n(jt),Tt=n(765),Ct=n.n(Tt),St=n(766),qt=n.n(St),At=n(767),Ft=n.n(At),Dt=n(768),It=n.n(Dt),Lt=n(769),Ut=n.n(Lt),Mt=n(770),Ht=n.n(Mt),Bt={"user-settings":rt.a,"buy-sell":st.a,user:dt.a,notification:mt.a,dashboard:pt.a,trading:ut.a,wallet:it.a,stop:p.a,balance:d.a,center:m.a,close:b.a,"close-inverse":y.a,"deposit-arrow":x.a,download:z.a,exchange:O.a,"generate-reports":R.a,check:k.a,checkbox:N.a,refresh:C.a,"withdraw-arrow":q.a,menu:F.a,"menu-toggle":I.a,key:U.a,bigKey:H.a,arrowPrevious:X.a,arrowNext:W.a,"simple-check":et.a,pending:Y.a,settings:K.a,alert:$.a,buy:bt.a,sell:yt.a,eye:xt.a,receive:Ot.a,send:Rt.a,deposit:kt.a,withdraw:Nt.a,info:Ct.a,copy:qt.a,star:Ft.a,"logo-powered":It.a,"open-buy":Ut.a,"open-sell":Ht.a},zt=function(t){var e=t.name,n=t.customClass,r=t.classModifiers,i=Object(c.a)(r,e),a=Object(c.b)(["ap-icon",n]),u=Bt[e];return o.a.createElement(s.a,{src:u,className:a(null,i)})};zt.defaultProps={name:"",customClass:"custom-icon",classModifiers:"",disabled:!1},zt.propTypes={name:a.a.string,customClass:a.a.string,classModifiers:a.a.oneOfType([a.a.string,a.a.arrayOf(a.a.string)]),disabled:a.a.bool},e.a=zt},710:function(t,e,n){"use strict";function r(t){this.request=t.request,this.xhr=t.xhr,this.headers=t.headers||{},this.status=t.status||0,this.text=t.text,this.body=t.body,this.contentType=t.contentType,this.isHttpError=t.status>=400}var o=n(711),i=n(712);r.prototype.header=o.prototype.header,r.fromRequest=function(t){return new r(i(t))},t.exports=r},711:function(t,e,n){"use strict";function r(t){var e="string"===typeof t?{url:t}:t||{};this.method=e.method?e.method.toUpperCase():"GET",this.url=e.url,this.headers=e.headers||{},this.body=e.body,this.timeout=e.timeout||0,this.errorOn404=null==e.errorOn404||e.errorOn404,this.onload=e.onload,this.onerror=e.onerror}r.prototype.abort=function(){if(!this.aborted)return this.aborted=!0,this.xhr.abort(),this},r.prototype.header=function(t,e){var n;for(n in this.headers)if(this.headers.hasOwnProperty(n)&&t.toLowerCase()===n.toLowerCase()){if(1===arguments.length)return this.headers[n];delete this.headers[n];break}if(null!=e)return this.headers[t]=e,e},t.exports=r},712:function(t,e,n){"use strict";var r=n(708);t.exports=function(t){var e=t.xhr,n={request:t,xhr:e};try{var o,i,a,s={};if(e.getAllResponseHeaders)for(o=e.getAllResponseHeaders().split("\n"),i=0;i<o.length;i++)(a=o[i].match(/\s*([^\s]+):\s+([^\s]+)/))&&(s[a[1]]=a[2]);n=r(n,{status:e.status,contentType:e.contentType||e.getResponseHeader&&e.getResponseHeader("Content-Type"),headers:s,text:e.responseText,body:e.response||e.responseText})}catch(t){}return n}},713:function(t,e,n){"use strict";t.exports=function(t){var e,n=!1;return function(){return n||(n=!0,e=t.apply(this,arguments)),e}}},715:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(0),s=n.n(a),c=n(1),u=n.n(c),l=n(716),p=n.n(l),f=n(721),d=n.n(f),h=n(723),m=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),b=p.a.use(d.a),g={PENDING:"pending",LOADING:"loading",LOADED:"loaded",FAILED:"failed",UNSUPPORTED:"unsupported"},y={},w={},x=function(t){function e(t){r(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.handleLoad=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t)return void n.fail(t);n.isActive&&n.setState({loadedText:e.text,status:g.LOADED},function(){n.props.onLoad(n.props.src,r)})},n.state={status:g.PENDING},n.isActive=!1,n}return i(e,t),v(e,[{key:"componentWillMount",value:function(){this.isActive=!0}},{key:"componentDidMount",value:function(){this.state.status===g.PENDING&&(this.props.supportTest()?this.props.src?this.startLoad():this.fail(Object(h.a)("Missing source")):this.fail(Object(h.e)()))}},{key:"componentDidUpdate",value:function(t){t.src!==this.props.src&&(this.props.src?this.startLoad():this.fail(Object(h.a)("Missing source")))}},{key:"componentWillUnmount",value:function(){this.isActive=!1}},{key:"getFile",value:function(t){var e=this,n=this.props,r=n.cacheGetRequests,o=n.src;if(r){if(w[o]){var i=m(w[o],2),a=i[0],s=i[1];t(a,s,!0)}y[o]||(y[o]=[],b.get(o,function(t,n){y[o].forEach(function(r){w[o]=[t,n],o===e.props.src&&r(t,n)})})),y[o].push(t)}else b.get(o,function(n,r){o===e.props.src&&t(n,r)})}},{key:"fail",value:function(t){var e=this,n=t.isUnsupportedBrowserError?g.UNSUPPORTED:g.FAILED;this.isActive&&this.setState({status:n},function(){"function"===typeof e.props.onError&&e.props.onError(t)})}},{key:"startLoad",value:function(){this.isActive&&this.setState({status:g.LOADING},this.load)}},{key:"load",value:function(){var t=this.props.src.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);return t?this.handleLoad(null,{text:t[1]?atob(t[2]):decodeURIComponent(t[2])}):this.getFile(this.handleLoad)}},{key:"getClassName",value:function(){var t="isvg "+this.state.status;return this.props.className&&(t+=" "+this.props.className),t}},{key:"processSVG",value:function(t){var e=this.props,n=e.uniquifyIDs,r=e.uniqueHash,o=e.baseURL;return n?Object(h.d)(t,r||Object(h.c)(),o):t}},{key:"renderContents",value:function(){switch(this.state.status){case g.UNSUPPORTED:case g.FAILED:return this.props.children;default:return this.props.preloader}}},{key:"render",value:function(){var t=void 0,e=void 0;return this.state.loadedText?e={__html:this.processSVG(this.state.loadedText)}:t=this.renderContents(),this.props.wrapper({style:this.props.style,className:this.getClassName(),dangerouslySetInnerHTML:e},t)}}]),e}(s.a.PureComponent);x.propTypes={baseURL:u.a.string,cacheGetRequests:u.a.bool,children:u.a.node,className:u.a.string,onError:u.a.func,onLoad:u.a.func,preloader:u.a.node,src:u.a.string.isRequired,style:u.a.object,supportTest:u.a.func,uniqueHash:u.a.string,uniquifyIDs:u.a.bool,wrapper:u.a.func},x.defaultProps={baseURL:"",cacheGetRequests:!1,onLoad:function(){},supportTest:h.b,uniquifyIDs:!0,wrapper:s.a.createFactory("span")},e.a=x},716:function(t,e,n){"use strict";function r(t,e){function n(n,r){var a,u,h,m,v,b;for(n=new p(f(t,n)),i=0;i<e.length;i++)u=e[i],u.processRequest&&u.processRequest(n);for(i=0;i<e.length;i++)if(u=e[i],u.createXHR){a=u.createXHR(n);break}a=a||new s,n.xhr=a,h=d(c(function(t){clearTimeout(v),a.onload=a.onerror=a.onabort=a.onreadystatechange=a.ontimeout=a.onprogress=null;var s=o(n,t),c=s||l.fromRequest(n);for(i=0;i<e.length;i++)u=e[i],u.processResponse&&u.processResponse(c);s&&n.onerror&&n.onerror(s),!s&&n.onload&&n.onload(c),r&&r(s,s?void 0:c)})),b="onload"in a&&"onerror"in a,a.onload=function(){h()},a.onerror=h,a.onabort=function(){h()},a.onreadystatechange=function(){if(4===a.readyState){if(n.aborted)return h();if(!b){var t;try{t=a.status}catch(e){}var e=0===t?new Error("Internal XHR Error"):null;return h(e)}}},a.ontimeout=function(){},a.onprogress=function(){},a.open(n.method,n.url),n.timeout&&(v=setTimeout(function(){n.timedOut=!0,h();try{a.abort()}catch(t){}},n.timeout));for(m in n.headers)n.headers.hasOwnProperty(m)&&a.setRequestHeader(m,n.headers[m]);return a.send(n.body),n}t=t||{},e=e||[];var a,h=["get","post","put","head","patch","delete"];for(i=0;i<h.length;i++)a=h[i],n[a]=function(t){return function(e,r){return e=new p(e),e.method=t,n(e,r)}}(a);return n.plugins=function(){return e},n.defaults=function(n){return n?r(f(t,n),e):t},n.use=function(){var n=Array.prototype.slice.call(arguments,0);return r(t,e.concat(n))},n.bare=function(){return r()},n.Request=p,n.Response=l,n.RequestError=u,n}function o(t,e){if(t.aborted)return h("Request aborted",t,{name:"Abort"});if(t.timedOut)return h("Request timeout",t,{name:"Timeout"});var n,r=t.xhr,o=Math.floor(r.status/100);switch(o){case 0:case 2:if(!e)return;return h(e.message,t);case 4:if(404===r.status&&!t.errorOn404)return;n="Client";break;case 5:n="Server";break;default:n="HTTP"}var i=n+" Error: The server returned a status of "+r.status+' for the request "'+t.method.toUpperCase()+" "+t.url+'"';return h(i,t)}var i,a=n(717),s=n(718),c=n(719),u=n(720),l=n(710),p=n(711),f=n(708),d=n(713),h=u.create;t.exports=r({},[a])},717:function(t,e,n){"use strict";t.exports={processRequest:function(t){t.url=t.url.replace(/[^%]+/g,function(t){return encodeURI(t)})}}},718:function(t,e){t.exports=window.XMLHttpRequest},719:function(t,e,n){"use strict";t.exports=function(t){return function(){var e=Array.prototype.slice.call(arguments,0),n=function(){return t.apply(null,e)};setTimeout(n,0)}}},720:function(t,e,n){"use strict";function r(t,e){var n=new Error(t);n.name="RequestError",this.name=n.name,this.message=n.message,n.stack&&(this.stack=n.stack),this.toString=function(){return this.message};for(var r in e)e.hasOwnProperty(r)&&(this[r]=e[r])}var o=n(710),i=n(712),a=n(708);r.prototype=a(Error.prototype),r.prototype.constructor=r,r.create=function(t,e,n){var a=new r(t,n);return o.call(a,i(e)),a},t.exports=r},721:function(t,e,n){"use strict";var r=n(722),o=n(713),i=!1,a=o(function(){return"undefined"!==typeof window&&null!==window&&window.XMLHttpRequest&&"withCredentials"in new window.XMLHttpRequest});t.exports={createXHR:function(t){var e,n,o;if("undefined"!==typeof window&&null!==window&&(e=r(t.url),n=r(window.location.href),e.host&&(e.protocol!==n.protocol||e.host!==n.host||e.port!==n.port))){if(!i&&t.headers)for(o in t.headers)if(t.headers.hasOwnProperty(o)){i=!0,window&&window.console&&window.console.warn&&window.console.warn("Request headers are ignored in old IE when using the oldiexdomain plugin.");break}if(window.XDomainRequest&&!a()){var s=new window.XDomainRequest;return s.setRequestHeader=function(){},s}}}}},722:function(t,e){(function(){var e,n,r,o={}.hasOwnProperty;e=/^(?:(?:([^:\/?\#]+:)\/+|(\/\/))(?:([a-z0-9-\._~%]+)(?::([a-z0-9-\._~%]+))?@)?(([a-z0-9-\._~%!$&'()*+,;=]+)(?::([0-9]+))?)?)?([^?\#]*?)(\?[^\#]*)?(\#.*)?$/,r=function(t,e){return r.URL.parse(t,e)},r.URL=function(){function t(t){var e,r,i;for(e in n)o.call(n,e)&&(r=n[e],this[e]=null!=(i=t[e])?i:r);this.host||(this.host=this.hostname&&this.port?this.hostname+":"+this.port:this.hostname?this.hostname:""),this.origin||(this.origin=this.protocol?this.protocol+"//"+this.host:""),this.isAbsolutePathRelative=!this.host&&"/"===this.pathname.charAt(0),this.isPathRelative=!this.host&&"/"!==this.pathname.charAt(0),this.isRelative=this.isSchemeRelative||this.isAbsolutePathRelative||this.isPathRelative,this.isAbsolute=!this.isRelative}return t.parse=function(t){var n,o,i;return n=t.toString().match(e),o=n[8]||"",i=n[1],new r.URL({protocol:i,username:n[3],password:n[4],hostname:n[6],port:n[7],pathname:i&&"/"!==o.charAt(0)?"/"+o:o,search:n[9],hash:n[10],isSchemeRelative:null!=n[2]})},t}(),n={protocol:"",username:"",password:"",host:"",hostname:"",port:"",pathname:"",search:"",hash:"",origin:"",isSchemeRelative:!1},t.exports=r}).call(this)},723:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"b",function(){return l}),n.d(e,"c",function(){return p}),n.d(e,"d",function(){return f}),n.d(e,"e",function(){return m}),n.d(e,"a",function(){return v});var a=n(724),s=n.n(a),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=s()(function(){if(!document)return!1;var t=document.createElement("div");return t.innerHTML="<svg />",t.firstChild&&"http://www.w3.org/2000/svg"===t.firstChild.namespaceURI}),l=s()(function(){return!(!u()||"undefined"===typeof window||null===window)&&(window.XMLHttpRequest||window.XDomainRequest)}),p=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,e="abcdefghijklmnopqrstuvwxyz",n=e+e.toUpperCase()+"1234567890",r="",o=0;o<t;o++)r+=function(t){return t[Math.floor(Math.random()*t.length)]}(n);return r},f=function(){var t=function(t){return"(?:(?:\\s|\\:)"+t+")"},e=new RegExp("(?:("+t("id")+')="([^"]+)")|(?:('+t("href")+"|"+t("role")+"|"+t("arcrole")+')="\\#([^"]+)")|(?:="url\\(\\#([^\\)]+)\\)")|(?:url\\(\\#([^\\)]+)\\))',"g");return function(t,n,r){var o=function(t){return t+"___"+n};return t.replace(e,function(t,e,n,i,a,s,c){return n?e+'="'+o(n)+'"':a?i+'="'+r+"#"+o(a)+'"':s?'="url('+r+"#"+o(s)+')"':c?"url("+r+"#"+o(c)+")":void 0})}}(),d=function(t){function e(t){var n;r(this,e);var i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.name="InlineSVGError",i.isSupportedBrowser=!0,i.isConfigurationError=!1,i.isUnsupportedBrowserError=!1,i.message=t,n=i,o(i,n)}return i(e,t),e}(Error),h=function(t,e){var n=new d(t);return c({},n,e)},m=function(t){var e=t;return e||(e="Unsupported Browser"),h(e,{isSupportedBrowser:!1,isUnsupportedBrowserError:!0})},v=function(t){return h(t,{isConfigurationError:!0})}},724:function(t,e,n){function r(t){var e=function(){return e.called?e.value:(e.called=!0,e.value=t.apply(this,arguments))};return e.called=!1,e}function o(t){var e=function(){if(e.called)throw new Error(e.onceError);return e.called=!0,e.value=t.apply(this,arguments)},n=t.name||"Function wrapped with `once`";return e.onceError=n+" shouldn't be called more than once",e.called=!1,e}var i=n(725);t.exports=i(r),t.exports.strict=i(o),r.proto=r(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return r(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return o(this)},configurable:!0})})},725:function(t,e){function n(t,e){function r(){for(var e=new Array(arguments.length),n=0;n<e.length;n++)e[n]=arguments[n];var r=t.apply(this,e),o=e[e.length-1];return"function"===typeof r&&r!==o&&Object.keys(o).forEach(function(t){r[t]=o[t]}),r}if(t&&e)return n(t)(e);if("function"!==typeof t)throw new TypeError("need wrapper function");return Object.keys(t).forEach(function(e){r[e]=t[e]}),r}t.exports=n},726:function(t,e,n){var r=n(727);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(686)(r,o);r.locals&&(t.exports=r.locals)},727:function(t,e,n){e=t.exports=n(27)(!1),e.push([t.i,".ap-icon{display:inline-block;width:10px}.ap-icon--success{color:var(--success)}.ap-icon--info{color:var(--information__color)}.ap-icon--danger{color:var(--danger__color);height:1rem}.ap-icon--big{width:14px}.ap-icon--center{width:12px}.ap-icon--deposit-arrow,.ap-icon--withdraw-arrow{width:11px}.ap-icon--balance,.ap-icon--exchange,.ap-icon--settings{width:16px;margin-top:3px;margin-bottom:-3px}.ap-icon--generate-report{width:12px}.ap-icon--key{width:16px}.ap-icon--menu{width:24px}.ap-icon--refresh{width:15px}.ap-icon--widthraw-arrow{width:11px}",""])},728:function(t,e,n){t.exports=n.p+"static/media/icon-stop.12973336.svg"},729:function(t,e,n){t.exports=n.p+"static/media/icon-balance.25d500b4.svg"},730:function(t,e,n){t.exports=n.p+"static/media/icon-center.d3865558.svg"},731:function(t,e,n){t.exports=n.p+"static/media/icon-close.f5458b61.svg"},732:function(t,e,n){t.exports=n.p+"static/media/icon-close-inverse.241501cd.svg"},733:function(t,e,n){t.exports=n.p+"static/media/icon-deposit-arrow.fb9cee72.svg"},734:function(t,e,n){t.exports=n.p+"static/media/icon-exchange.a6cdeb82.svg"},735:function(t,e,n){t.exports=n.p+"static/media/icon-generate-reports.c25e875a.svg"},736:function(t,e,n){t.exports=n.p+"static/media/icon-check.4443b294.svg"},737:function(t,e,n){t.exports=n.p+"static/media/icon-checkbox.6ff75c6f.svg"},738:function(t,e,n){t.exports=n.p+"static/media/icon-refresh.36718f54.svg"},739:function(t,e,n){t.exports=n.p+"static/media/icon-withdraw-arrow.4644456c.svg"},740:function(t,e,n){t.exports=n.p+"static/media/icon-menu.ff0128f9.svg"},741:function(t,e,n){t.exports=n.p+"static/media/icon-menu-toggle.ad89aeb9.svg"},742:function(t,e,n){t.exports=n.p+"static/media/icon-key.c3b5c80f.svg"},743:function(t,e,n){t.exports=n.p+"static/media/icon-key-big.0d56bc9b.svg"},744:function(t,e,n){t.exports=n.p+"static/media/icon-download.ebdd4d2b.svg"},745:function(t,e,n){t.exports=n.p+"static/media/icon-arrow-prev.ec3c7dc9.svg"},746:function(t,e,n){t.exports=n.p+"static/media/icon-arrow-next.02ae871b.svg"},747:function(t,e,n){t.exports=n.p+"static/media/icon-alert.b09e6a92.svg"},748:function(t,e,n){t.exports=n.p+"static/media/icon-settings.d15941a5.svg"},749:function(t,e,n){t.exports=n.p+"static/media/icon-pending.e2938acc.svg"},750:function(t,e,n){t.exports=n.p+"static/media/icon-simple-check.03179922.svg"},751:function(t,e,n){t.exports=n.p+"static/media/icon-nav-settings.18d95955.svg"},752:function(t,e,n){t.exports=n.p+"static/media/icon-nav-wallet.057192aa.svg"},753:function(t,e,n){t.exports=n.p+"static/media/icon-nav-buy-sell.5ff447ad.svg"},754:function(t,e,n){t.exports=n.p+"static/media/icon-nav-trading.6846b323.svg"},755:function(t,e,n){t.exports=n.p+"static/media/icon-nav-dashboard-on.da8d7604.svg"},756:function(t,e,n){t.exports=n.p+"static/media/icon-nav-user.4473673a.svg"},757:function(t,e,n){t.exports=n.p+"static/media/icon-nav-notification.84f07c0e.svg"},758:function(t,e,n){t.exports=n.p+"static/media/icon-buy.4736e26a.svg"},759:function(t,e,n){t.exports=n.p+"static/media/icon-sell.749581f6.svg"},760:function(t,e,n){t.exports=n.p+"static/media/icon-eye.f3c39bfb.svg"},761:function(t,e,n){t.exports=n.p+"static/media/icon-receive.f8805981.svg"},762:function(t,e,n){t.exports=n.p+"static/media/icon-send.0eae48e8.svg"},763:function(t,e,n){t.exports=n.p+"static/media/icon-deposit.59dc6048.svg"},764:function(t,e,n){t.exports=n.p+"static/media/icon-withdraw.ce30850a.svg"},765:function(t,e,n){t.exports=n.p+"static/media/icon-info.6448a8d0.svg"},766:function(t,e,n){t.exports=n.p+"static/media/icon-copy.9dc9a9a7.svg"},767:function(t,e,n){t.exports=n.p+"static/media/icon-star.9e54355c.svg"},768:function(t,e,n){t.exports=n.p+"static/media/logo-powered.7f6a585c.svg"},769:function(t,e,n){t.exports=n.p+"static/media/icon-open-buy-big.ec282aaa.svg"},770:function(t,e,n){t.exports=n.p+"static/media/icon-open-sell-big.04ef7f4d.svg"},771:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(80),c=n(775),u=(n.n(c),Object(s.b)("spinner")),l=function(t){var e=t.isVisible,n=t.isInline,r=t.text,i=t.customClass,a=i||function(){return""};return o.a.createElement(o.a.Fragment,null,e&&o.a.createElement("div",{className:u("container",n&&"inline")+" "+a("spinner-container")},o.a.createElement("div",{className:u("circle",n&&"inline")+" "+a("spinner-circle")}),r&&o.a.createElement("div",{className:u("text")},r)))};l.propTypes={isInline:a.a.bool,isVisible:a.a.bool.isRequired,customClass:a.a.func,text:a.a.string},l.defaultProps={isVisible:!0},e.a=l},775:function(t,e,n){var r=n(776);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(686)(r,o);r.locals&&(t.exports=r.locals)},776:function(t,e,n){e=t.exports=n(27)(!1),e.push([t.i,".spinner__circle,.spinner__circle:after{border-radius:50%;width:2.5rem;height:2.5rem}.spinner__circle{margin:auto;-webkit-transform:translateZ(0);transform:translateZ(0);border-top:.2rem solid var(--spinner__color-secondary);border-right:.2rem solid var(--spinner__color-secondary);border-bottom:.2rem solid var(--spinner__color-secondary);border-left:.2rem solid var(--spinner__color-primary);-webkit-animation:loading 1.1s infinite linear;animation:loading 1.1s infinite linear}.spinner__circle--inline{border-top:.2rem solid var(--spinner__color-tertiary);border-right:.2rem solid var(--spinner__color-tertiary);border-bottom:.2rem solid var(--spinner__color-tertiary)}.spinner__container{position:absolute;display:-ms-flexbox;display:flex;margin:1rem 1.75rem;height:3rem;line-height:3rem}.spinner__container--inline{position:relative;margin:0;background:transparent}.spinner__text{color:var(--spinner__font-color);margin-left:1rem;display:inline-block}@-webkit-keyframes loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},794:function(t,e,n){"use strict";var r=n(7),o=n(797),i=function(t,e){return{productManifest:t.productManifest,iconFileName:e.iconFileName,size:e.size||48}};e.a=Object(r.connect)(i)(o.a)},795:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"d",function(){return l}),n.d(e,"c",function(){return p}),n.d(e,"b",function(){return f}),n.d(e,"e",function(){return d});var r=n(81),o=(n.n(r),n(261)),i=function(t){return t.product.products},a=function(t){return t.position.positions},s=function(t){return t.productManifest.manifest},c=Object(r.createSelector)([function(t){return t.product},function(t){return t.position},function(t){return t.productManifest}],function(t,e,n){return t.fetching||e.fetching||n.fetching}),u=Object(r.createSelector)([i,function(t){return t.product.decimalPlaces},a],function(t,e,n){return t.map(function(t){var r=n[t.ProductId];if(!r)return t;var i=e[t.Product],a=Object(o.a)(r,i);return Object.assign({},a,t)})}),l=Object(r.createSelector)([u,s],function(t,e){return t.map(function(t){var n=e[t.Product]||{iconFileName:t.Product+"DEFAULT_ICON"};return Object.assign({},t,n)})}),p=Object(r.createSelector)([l,function(t,e){return e}],function(t,e){return t.find(function(t){return t.ProductId===e})}),f=Object(r.createSelector)(l,function(t){return t.filter(function(t){return"-"!==t.Amount})}),d=Object(r.createSelector)(l,function(t){return t.filter(function(t){return"-"===t.Amount})})},797:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(20),c=n(80),u=n(798),l=(n.n(u),Object(c.b)("product-icon")),p=function(t){var e=t.productManifest,n=t.iconFileName,r=t.size,i=void 0===r?48:r,a=t.customClass;return e.fetching?null:(null==n&&console.log(n),n&&n.indexOf("DEFAULT_ICON")>0?f(i,n):o.a.createElement("img",{alt:"product icon",height:i+"px",className:a,src:Object(s.a)("/local/product-icons/"+n)}))},f=function(t,e){return o.a.createElement("div",{className:l(null,"default"),style:{width:t,height:t,MozBorderRadius:t/2,WebkitBorderRadius:t/2,borderRadius:t/2,textAlign:"center",fontSize:.5*t,lineHeight:t+"px"}},o.a.createElement("span",null,e.charAt(0)))};p.propTypes={productManifest:a.a.object.isRequired,iconFileName:a.a.string,size:a.a.number},e.a=p},798:function(t,e,n){var r=n(799);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(686)(r,o);r.locals&&(t.exports=r.locals)},799:function(t,e,n){e=t.exports=n(27)(!1),e.push([t.i,".product-icon--default{background:var(--product-icon__default-bg-color);color:var(--product-icon__default-color)}",""])},850:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(1),o=n.n(r),i=o.a.shape({iconFileName:o.a.string,ProductFullName:o.a.string,ProductSymbol:o.a.string,ProductId:o.a.number})},857:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(80),c=n(709),u=n(938),l=(n.n(u),function(t){var e=t.tooltipText,n=t.iconName,r=t.customClass,i=t.action,a=Object(s.b)("icon-button",r);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{"data-tip":e,"data-place":"bottom","data-effect":"solid",onClick:i,className:a()},o.a.createElement(c.a,{name:n,customClass:a("icon")}),o.a.createElement("span",{className:a("label")},n)))});l.protoTypes={tooltipText:a.a.string.isRequired,iconName:a.a.string.isRequired,parentClass:a.a.string.isRequired,action:a.a.func},e.a=l},858:function(t,e,n){var r=n(940);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(686)(r,o);r.locals&&(t.exports=r.locals)},936:function(t,e,n){"use strict";var r=n(7),o=n(13),i=n(937),a=function(t){return{openSendReceiveSidePane:function(e,n){t(Object(o.o)(e,n))}}};e.a=Object(r.connect)(null,a)(i.a)},937:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(0),s=n.n(a),c=n(1),u=n.n(c),l=n(857),p=n(80),f=n(850),d=n(858),h=(n.n(d),function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()),m=Object(p.b)("wallet-nav-item"),v=function(t){function e(){var t,n,i,a;r(this,e);for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),i.onSendClick=function(){i.onBtnClick(!0)},i.onReceiveClick=function(){i.onBtnClick(!1)},i.onBtnClick=function(t){var e=i.props;(0,e.openSendReceiveSidePane)(t,e.product)},a=n,o(i,a)}return i(e,t),h(e,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{iconName:"send",action:this.onSendClick,tooltipText:this.context.t("Send"),customClass:m()}),s.a.createElement(l.a,{iconName:"receive",action:this.onReceiveClick,tooltipText:this.context.t("Receive"),customClass:m()}))}}]),e}(s.a.Component);v.propTypes={openSendReceiveSidePane:u.a.func.isRequired,product:f.a},v.contextTypes={t:u.a.func.isRequired},e.a=v},938:function(t,e,n){var r=n(939);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(686)(r,o);r.locals&&(t.exports=r.locals)},939:function(t,e,n){e=t.exports=n(27)(!1),e.push([t.i,".icon-button{min-width:4rem;height:4rem;border-radius:4px;color:var(--font__color-secondary);background:var(--primary__bg-color);border:1px solid var(--border-secondary);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;cursor:pointer}.icon-button:hover,.icon-button:hover .icon-button__icon{color:var(--font__color-primary)}.icon-button__icon{-ms-flex-negative:0;flex-shrink:0;width:2rem;height:2rem;color:var(--font__color-secondary);-webkit-transition:var(--transition__settings);-o-transition:var(--transition__settings);transition:var(--transition__settings)}",""])},940:function(t,e,n){e=t.exports=n(27)(!1),e.push([t.i,".wallet-nav-item{margin-left:1.2rem;padding:0 1rem}.wallet-nav-item__label{text-transform:capitalize;padding-left:1rem}",""])},941:function(t,e,n){"use strict";var r=n(7),o=n(13),i=n(942),a=function(t){return{openRetailFiatSidePane:function(e,n){t(Object(o.n)(e,n))}}};e.a=Object(r.connect)(null,a)(i.a)},942:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(0),s=n.n(a),c=n(1),u=n.n(c),l=n(857),p=n(80),f=n(858),d=(n.n(f),function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()),h=Object(p.b)("wallet-nav-item"),m=function(t){function e(){var t,n,i,a;r(this,e);for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),i.onDepositClick=function(){i.onBtnClick(!0)},i.onWithdrawClick=function(){i.onBtnClick(!1)},i.onBtnClick=function(t){var e=i.props;(0,e.openRetailFiatSidePane)(t,e.product)},a=n,o(i,a)}return i(e,t),d(e,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{iconName:"deposit",action:this.onDepositClick,tooltipText:this.context.t("Deposit"),customClass:h()}),s.a.createElement(l.a,{iconName:"withdraw",action:this.onWithdrawClick,tooltipText:this.context.t("Withdraw"),customClass:h()}))}}]),e}(s.a.Component);m.propTypes={openRetailFiatSidePane:u.a.func.isRequired,product:u.a.shape({iconFileName:u.a.string,ProductFullName:u.a.string,ProductSymbol:u.a.string,ProductId:u.a.number})},m.contextTypes={t:u.a.func.isRequired},e.a=m}});