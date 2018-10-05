webpackJsonp([38],{1048:function(e,t,n){"use strict";function o(e){var t=function(t){var n=t.shouldRedirect,o=t.redirectLocation;return t.isAuthenticated?Object(l.a)()?a.a.createElement(e,t):n?a.a.createElement(s.c,{to:{pathname:o.pathname,search:o.search}}):a.a.createElement(s.c,{to:Object(c.a)(u.b.path+"?default=redirect")}):a.a.createElement(e,t)},n=function(e){return{isAuthenticated:e.auth.isAuthenticated,shouldRedirect:e.auth.shouldRedirect,redirectLocation:e.auth.location}};return Object(i.connect)(n,null)(t)}var r=n(0),a=n.n(r),i=n(7),s=n(31),c=n(21),l=n(1049),u=n(84);t.a=o},1049:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n(271),r=function(){return!!Object(o.a)()||(!!Object(o.c)()||void 0)}},1332:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(1),i=n.n(a),s=n(31),c=n(791),l=n(257),u=n(717),p=n(848),d=n(790),f=n(1333),m=n(1048),h=n(21),g=n(5),b=n(81),v=n(847),w=(n.n(v),Object(b.b)("standalone-form")),_=function(e,t){var n=e.handleSubmit,o=e.errorMsg,a=e.submitting,i=e.doSubmit,m=e.isConnected;return r.a.createElement("div",{className:w("wrapper")},r.a.createElement(p.a,{customClass:w("logo"),linkTo:"/"}),r.a.createElement("div",{className:w("container")},r.a.createElement("div",{className:w("header")},r.a.createElement("div",{className:w("header-text")},t.t("Log In to {n}",{n:g.default.global.siteName})),r.a.createElement(s.a,{to:Object(h.a)("/"),className:w("close-icon")},r.a.createElement(u.a,{name:"close",classModifiers:"big"}))),r.a.createElement("form",{onSubmit:n(function(e){return i(e,m)}),className:w("form")},o&&r.a.createElement("p",{className:w("error")},o),r.a.createElement(c.b,{type:"text",name:"username",customClass:w(),label:t.t("Username"),validate:[d.h]}),r.a.createElement(f.a,{type:"password",name:"password",customClass:w(),label:t.t("Password"),validate:[d.h]}),r.a.createElement("hr",{className:w("separator")}),r.a.createElement(l.a,{type:"submit",disabled:a,customClass:"standalone-form"},a?t.t("Processing..."):t.t("Log In"))),r.a.createElement("div",{className:w("footer")},r.a.createElement(s.a,{to:Object(h.a)("/signup"),disabled:!0},t.t("Sign Up")),r.a.createElement("div",{className:w("footer-separator")}),r.a.createElement(s.a,{to:Object(h.a)("/problem-logging-in"),disabled:!0},t.t("Problem Logging In?")))))};_.defaultProps={handleSubmit:function(){},submitting:!1},_.propTypes={handleSubmit:i.a.func,submitting:i.a.bool,referrer:i.a.string},_.contextTypes={t:i.a.func.isRequired},t.a=Object(m.a)(_)},1333:function(e,t,n){"use strict";function o(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(0),c=n.n(s),l=n(1),u=n.n(l),p=n(29),d=n(717),f=n(791),m=n(81),h=n(1334),g=(n.n(h),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),b=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=function(){n.setState({reveal:!n.state.reveal})},n.state={value:"",reveal:!1},n}return i(t,e),g(t,[{key:"render",value:function(){var e=this.props,t=e.customClass,n=o(e,["customClass"]),r=Object(m.b)("ap-password-input",t);return c.a.createElement("div",{className:r()},c.a.createElement(f.a,Object.assign({customClass:t},n,{type:this.state.reveal?"text":"password"})),c.a.createElement("span",{onClick:this.handleClick,className:r("icon",{active:this.state.reveal})},c.a.createElement(d.a,{name:"eye"})))}}]),t}(c.a.Component),v=function(e){return c.a.createElement(p.a,Object.assign({name:e.name,component:b},e))};v.propTypes={customClass:u.a.string},t.a=v},1334:function(e,t,n){var o=n(1335);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!1};r.transform=void 0;n(693)(o,r);o.locals&&(e.exports=o.locals)},1335:function(e,t,n){t=e.exports=n(28)(!1),t.push([e.i,".ap-password-input__icon{height:1.5rem;width:1.5rem;position:relative;cursor:pointer;bottom:4.8rem;left:90%;color:var(--font__color-secondary)}.ap-password-input__icon--active{color:var(--font__color-primary)}",""])},708:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),r=n(29),a=n(1332),i=n(85),s=n(8),c=n(21),l=function(e){return{errorMsg:e.auth.errorMsg,isConnected:e.wsConnection.isConnected}},u=function(e,t){return{doSubmit:function(n,o){return o&&navigator.onLine?e(Object(i.f)(n)).then(function(e){e.type===i.a&&t.history.push(Object(c.a)("/twofactorauth"))}):e(Object(s.f)({id:"loginNotConnectedError",text:"We were unable to login, check your internet connection and try refreshing the page.",type:"warning"}))}}},p=Object(o.connect)(l,u)(a.a),d=Object(r.j)({form:"login",onSubmit:function(){}})(p);t.default=d},716:function(e,t){function n(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])}return e}e.exports=n},717:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(1),i=n.n(a),s=n(723),c=n(81),l=n(734),u=(n.n(l),n(736)),p=n.n(u),d=n(737),f=n.n(d),m=n(738),h=n.n(m),g=n(739),b=n.n(g),v=n(740),w=n.n(v),_=n(741),y=n.n(_),x=n(742),O=n.n(x),E=n(743),k=n.n(E),j=n(744),R=n.n(j),T=n(745),P=n.n(T),N=n(746),C=n.n(N),L=n(747),q=n.n(L),S=n(748),A=n.n(S),I=n(749),M=n.n(I),U=n(750),D=n.n(U),H=n(751),G=n.n(H),F=n(752),X=n.n(F),z=n(753),B=n.n(z),W=n(754),$=n.n(W),Z=n(755),V=n.n(Z),J=n(756),K=n.n(J),Q=n(757),Y=n.n(Q),ee=n(758),te=n.n(ee),ne=n(759),oe=n.n(ne),re=n(760),ae=n.n(re),ie=n(761),se=n.n(ie),ce=n(762),le=n.n(ce),ue=n(763),pe=n.n(ue),de=n(764),fe=n.n(de),me=n(765),he=n.n(me),ge=n(766),be=n.n(ge),ve=n(767),we=n.n(ve),_e=n(768),ye=n.n(_e),xe=n(769),Oe=n.n(xe),Ee=n(770),ke=n.n(Ee),je=n(771),Re=n.n(je),Te=n(772),Pe=n.n(Te),Ne=n(773),Ce=n.n(Ne),Le=n(774),qe=n.n(Le),Se=n(775),Ae=n.n(Se),Ie=n(776),Me=n.n(Ie),Ue=n(777),De=n.n(Ue),He=n(778),Ge=n.n(He),Fe=n(779),Xe=n.n(Fe),ze=n(780),Be=n.n(ze),We=n(781),$e=n.n(We),Ze={"user-settings":oe.a,"buy-sell":se.a,user:fe.a,notification:he.a,dashboard:pe.a,trading:le.a,wallet:ae.a,stop:p.a,balance:f.a,center:h.a,close:b.a,"close-inverse":w.a,"deposit-arrow":y.a,download:X.a,exchange:O.a,"generate-reports":k.a,check:R.a,checkbox:P.a,refresh:C.a,"withdraw-arrow":q.a,menu:A.a,"menu-toggle":M.a,key:D.a,bigKey:G.a,arrowPrevious:B.a,arrowNext:$.a,"simple-check":te.a,pending:Y.a,settings:K.a,alert:V.a,buy:be.a,sell:we.a,eye:ye.a,receive:Oe.a,receiveWithBorder:ke.a,send:Re.a,sendWithBorder:Pe.a,deposit:Ce.a,withdraw:qe.a,withdrawWithBorder:Ae.a,info:Me.a,copy:De.a,star:Ge.a,"logo-powered":Xe.a,"open-buy":Be.a,"open-sell":$e.a},Ve=function(e){var t=e.name,n=e.customClass,o=e.classModifiers,a=Object(c.a)(o,t),i=Object(c.b)(["ap-icon",n]),l=Ze[t];return r.a.createElement(s.a,{src:l,className:i(null,a)})};Ve.defaultProps={name:"",customClass:"custom-icon",classModifiers:"",disabled:!1},Ve.propTypes={name:i.a.string,customClass:i.a.string,classModifiers:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.string)]),disabled:i.a.bool},t.a=Ve},718:function(e,t,n){"use strict";function o(e){this.request=e.request,this.xhr=e.xhr,this.headers=e.headers||{},this.status=e.status||0,this.text=e.text,this.body=e.body,this.contentType=e.contentType,this.isHttpError=e.status>=400}var r=n(719),a=n(720);o.prototype.header=r.prototype.header,o.fromRequest=function(e){return new o(a(e))},e.exports=o},719:function(e,t,n){"use strict";function o(e){var t="string"===typeof e?{url:e}:e||{};this.method=t.method?t.method.toUpperCase():"GET",this.url=t.url,this.headers=t.headers||{},this.body=t.body,this.timeout=t.timeout||0,this.errorOn404=null==t.errorOn404||t.errorOn404,this.onload=t.onload,this.onerror=t.onerror}o.prototype.abort=function(){if(!this.aborted)return this.aborted=!0,this.xhr.abort(),this},o.prototype.header=function(e,t){var n;for(n in this.headers)if(this.headers.hasOwnProperty(n)&&e.toLowerCase()===n.toLowerCase()){if(1===arguments.length)return this.headers[n];delete this.headers[n];break}if(null!=t)return this.headers[e]=t,t},e.exports=o},720:function(e,t,n){"use strict";var o=n(716);e.exports=function(e){var t=e.xhr,n={request:e,xhr:t};try{var r,a,i,s={};if(t.getAllResponseHeaders)for(r=t.getAllResponseHeaders().split("\n"),a=0;a<r.length;a++)(i=r[a].match(/\s*([^\s]+):\s+([^\s]+)/))&&(s[i[1]]=i[2]);n=o(n,{status:t.status,contentType:t.contentType||t.getResponseHeader&&t.getResponseHeader("Content-Type"),headers:s,text:t.responseText,body:t.response||t.responseText})}catch(e){}return n}},721:function(e,t,n){"use strict";e.exports=function(e){var t,n=!1;return function(){return n||(n=!0,t=e.apply(this,arguments)),t}}},722:function(e,t,n){var o,r;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)&&o.length){var i=n.apply(null,o);i&&e.push(i)}else if("object"===r)for(var s in o)a.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(n.default=n,e.exports=n):(o=[],void 0!==(r=function(){return n}.apply(t,o))&&(e.exports=r))}()},723:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=n.n(i),c=n(1),l=n.n(c),u=n(724),p=n.n(u),d=n(729),f=n.n(d),m=n(731),h=function(){function e(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),b=p.a.use(f.a),v={PENDING:"pending",LOADING:"loading",LOADED:"loaded",FAILED:"failed",UNSUPPORTED:"unsupported"},w={},_={},y=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleLoad=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e)return void n.fail(e);n.isActive&&n.setState({loadedText:t.text,status:v.LOADED},function(){n.props.onLoad(n.props.src,o)})},n.state={status:v.PENDING},n.isActive=!1,n}return a(t,e),g(t,[{key:"componentWillMount",value:function(){this.isActive=!0}},{key:"componentDidMount",value:function(){this.state.status===v.PENDING&&(this.props.supportTest()?this.props.src?this.startLoad():this.fail(Object(m.a)("Missing source")):this.fail(Object(m.e)()))}},{key:"componentDidUpdate",value:function(e){e.src!==this.props.src&&(this.props.src?this.startLoad():this.fail(Object(m.a)("Missing source")))}},{key:"componentWillUnmount",value:function(){this.isActive=!1}},{key:"getFile",value:function(e){var t=this,n=this.props,o=n.cacheGetRequests,r=n.src;if(o){if(_[r]){var a=h(_[r],2),i=a[0],s=a[1];e(i,s,!0)}w[r]||(w[r]=[],b.get(r,function(e,n){w[r].forEach(function(o){_[r]=[e,n],r===t.props.src&&o(e,n)})})),w[r].push(e)}else b.get(r,function(n,o){r===t.props.src&&e(n,o)})}},{key:"fail",value:function(e){var t=this,n=e.isUnsupportedBrowserError?v.UNSUPPORTED:v.FAILED;this.isActive&&this.setState({status:n},function(){"function"===typeof t.props.onError&&t.props.onError(e)})}},{key:"startLoad",value:function(){this.isActive&&this.setState({status:v.LOADING},this.load)}},{key:"load",value:function(){var e=this.props.src.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);return e?this.handleLoad(null,{text:e[1]?atob(e[2]):decodeURIComponent(e[2])}):this.getFile(this.handleLoad)}},{key:"getClassName",value:function(){var e="isvg "+this.state.status;return this.props.className&&(e+=" "+this.props.className),e}},{key:"processSVG",value:function(e){var t=this.props,n=t.uniquifyIDs,o=t.uniqueHash,r=t.baseURL;return n?Object(m.d)(e,o||Object(m.c)(),r):e}},{key:"renderContents",value:function(){switch(this.state.status){case v.UNSUPPORTED:case v.FAILED:return this.props.children;default:return this.props.preloader}}},{key:"render",value:function(){var e=void 0,t=void 0;return this.state.loadedText?t={__html:this.processSVG(this.state.loadedText)}:e=this.renderContents(),this.props.wrapper({style:this.props.style,className:this.getClassName(),dangerouslySetInnerHTML:t},e)}}]),t}(s.a.PureComponent);y.propTypes={baseURL:l.a.string,cacheGetRequests:l.a.bool,children:l.a.node,className:l.a.string,onError:l.a.func,onLoad:l.a.func,preloader:l.a.node,src:l.a.string.isRequired,style:l.a.object,supportTest:l.a.func,uniqueHash:l.a.string,uniquifyIDs:l.a.bool,wrapper:l.a.func},y.defaultProps={baseURL:"",cacheGetRequests:!1,onLoad:function(){},supportTest:m.b,uniquifyIDs:!0,wrapper:s.a.createFactory("span")},t.a=y},724:function(e,t,n){"use strict";function o(e,t){function n(n,o){var i,l,m,h,g,b;for(n=new p(d(e,n)),a=0;a<t.length;a++)l=t[a],l.processRequest&&l.processRequest(n);for(a=0;a<t.length;a++)if(l=t[a],l.createXHR){i=l.createXHR(n);break}i=i||new s,n.xhr=i,m=f(c(function(e){clearTimeout(g),i.onload=i.onerror=i.onabort=i.onreadystatechange=i.ontimeout=i.onprogress=null;var s=r(n,e),c=s||u.fromRequest(n);for(a=0;a<t.length;a++)l=t[a],l.processResponse&&l.processResponse(c);s&&n.onerror&&n.onerror(s),!s&&n.onload&&n.onload(c),o&&o(s,s?void 0:c)})),b="onload"in i&&"onerror"in i,i.onload=function(){m()},i.onerror=m,i.onabort=function(){m()},i.onreadystatechange=function(){if(4===i.readyState){if(n.aborted)return m();if(!b){var e;try{e=i.status}catch(t){}var t=0===e?new Error("Internal XHR Error"):null;return m(t)}}},i.ontimeout=function(){},i.onprogress=function(){},i.open(n.method,n.url),n.timeout&&(g=setTimeout(function(){n.timedOut=!0,m();try{i.abort()}catch(e){}},n.timeout));for(h in n.headers)n.headers.hasOwnProperty(h)&&i.setRequestHeader(h,n.headers[h]);return i.send(n.body),n}e=e||{},t=t||[];var i,m=["get","post","put","head","patch","delete"];for(a=0;a<m.length;a++)i=m[a],n[i]=function(e){return function(t,o){return t=new p(t),t.method=e,n(t,o)}}(i);return n.plugins=function(){return t},n.defaults=function(n){return n?o(d(e,n),t):e},n.use=function(){var n=Array.prototype.slice.call(arguments,0);return o(e,t.concat(n))},n.bare=function(){return o()},n.Request=p,n.Response=u,n.RequestError=l,n}function r(e,t){if(e.aborted)return m("Request aborted",e,{name:"Abort"});if(e.timedOut)return m("Request timeout",e,{name:"Timeout"});var n,o=e.xhr,r=Math.floor(o.status/100);switch(r){case 0:case 2:if(!t)return;return m(t.message,e);case 4:if(404===o.status&&!e.errorOn404)return;n="Client";break;case 5:n="Server";break;default:n="HTTP"}var a=n+" Error: The server returned a status of "+o.status+' for the request "'+e.method.toUpperCase()+" "+e.url+'"';return m(a,e)}var a,i=n(725),s=n(726),c=n(727),l=n(728),u=n(718),p=n(719),d=n(716),f=n(721),m=l.create;e.exports=o({},[i])},725:function(e,t,n){"use strict";e.exports={processRequest:function(e){e.url=e.url.replace(/[^%]+/g,function(e){return encodeURI(e)})}}},726:function(e,t){e.exports=window.XMLHttpRequest},727:function(e,t,n){"use strict";e.exports=function(e){return function(){var t=Array.prototype.slice.call(arguments,0),n=function(){return e.apply(null,t)};setTimeout(n,0)}}},728:function(e,t,n){"use strict";function o(e,t){var n=new Error(e);n.name="RequestError",this.name=n.name,this.message=n.message,n.stack&&(this.stack=n.stack),this.toString=function(){return this.message};for(var o in t)t.hasOwnProperty(o)&&(this[o]=t[o])}var r=n(718),a=n(720),i=n(716);o.prototype=i(Error.prototype),o.prototype.constructor=o,o.create=function(e,t,n){var i=new o(e,n);return r.call(i,a(t)),i},e.exports=o},729:function(e,t,n){"use strict";var o=n(730),r=n(721),a=!1,i=r(function(){return"undefined"!==typeof window&&null!==window&&window.XMLHttpRequest&&"withCredentials"in new window.XMLHttpRequest});e.exports={createXHR:function(e){var t,n,r;if("undefined"!==typeof window&&null!==window&&(t=o(e.url),n=o(window.location.href),t.host&&(t.protocol!==n.protocol||t.host!==n.host||t.port!==n.port))){if(!a&&e.headers)for(r in e.headers)if(e.headers.hasOwnProperty(r)){a=!0,window&&window.console&&window.console.warn&&window.console.warn("Request headers are ignored in old IE when using the oldiexdomain plugin.");break}if(window.XDomainRequest&&!i()){var s=new window.XDomainRequest;return s.setRequestHeader=function(){},s}}}}},730:function(e,t){(function(){var t,n,o,r={}.hasOwnProperty;t=/^(?:(?:([^:\/?\#]+:)\/+|(\/\/))(?:([a-z0-9-\._~%]+)(?::([a-z0-9-\._~%]+))?@)?(([a-z0-9-\._~%!$&'()*+,;=]+)(?::([0-9]+))?)?)?([^?\#]*?)(\?[^\#]*)?(\#.*)?$/,o=function(e,t){return o.URL.parse(e,t)},o.URL=function(){function e(e){var t,o,a;for(t in n)r.call(n,t)&&(o=n[t],this[t]=null!=(a=e[t])?a:o);this.host||(this.host=this.hostname&&this.port?this.hostname+":"+this.port:this.hostname?this.hostname:""),this.origin||(this.origin=this.protocol?this.protocol+"//"+this.host:""),this.isAbsolutePathRelative=!this.host&&"/"===this.pathname.charAt(0),this.isPathRelative=!this.host&&"/"!==this.pathname.charAt(0),this.isRelative=this.isSchemeRelative||this.isAbsolutePathRelative||this.isPathRelative,this.isAbsolute=!this.isRelative}return e.parse=function(e){var n,r,a;return n=e.toString().match(t),r=n[8]||"",a=n[1],new o.URL({protocol:a,username:n[3],password:n[4],hostname:n[6],port:n[7],pathname:a&&"/"!==r.charAt(0)?"/"+r:r,search:n[9],hash:n[10],isSchemeRelative:null!=n[2]})},e}(),n={protocol:"",username:"",password:"",host:"",hostname:"",port:"",pathname:"",search:"",hash:"",origin:"",isSchemeRelative:!1},e.exports=o}).call(this)},731:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return u}),n.d(t,"c",function(){return p}),n.d(t,"d",function(){return d}),n.d(t,"e",function(){return h}),n.d(t,"a",function(){return g});var i=n(732),s=n.n(i),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=s()(function(){if(!document)return!1;var e=document.createElement("div");return e.innerHTML="<svg />",e.firstChild&&"http://www.w3.org/2000/svg"===e.firstChild.namespaceURI}),u=s()(function(){return!(!l()||"undefined"===typeof window||null===window)&&(window.XMLHttpRequest||window.XDomainRequest)}),p=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,t="abcdefghijklmnopqrstuvwxyz",n=t+t.toUpperCase()+"1234567890",o="",r=0;r<e;r++)o+=function(e){return e[Math.floor(Math.random()*e.length)]}(n);return o},d=function(){var e=function(e){return"(?:(?:\\s|\\:)"+e+")"},t=new RegExp("(?:("+e("id")+')="([^"]+)")|(?:('+e("href")+"|"+e("role")+"|"+e("arcrole")+')="\\#([^"]+)")|(?:="url\\(\\#([^\\)]+)\\)")|(?:url\\(\\#([^\\)]+)\\))',"g");return function(e,n,o){var r=function(e){return e+"___"+n};return e.replace(t,function(e,t,n,a,i,s,c){return n?t+'="'+r(n)+'"':i?a+'="'+o+"#"+r(i)+'"':s?'="url('+o+"#"+r(s)+')"':c?"url("+o+"#"+r(c)+")":void 0})}}(),f=function(e){function t(e){var n;o(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.name="InlineSVGError",a.isSupportedBrowser=!0,a.isConfigurationError=!1,a.isUnsupportedBrowserError=!1,a.message=e,n=a,r(a,n)}return a(t,e),t}(Error),m=function(e,t){var n=new f(e);return c({},n,t)},h=function(e){var t=e;return t||(t="Unsupported Browser"),m(t,{isSupportedBrowser:!1,isUnsupportedBrowserError:!0})},g=function(e){return m(e,{isConfigurationError:!0})}},732:function(e,t,n){function o(e){var t=function(){return t.called?t.value:(t.called=!0,t.value=e.apply(this,arguments))};return t.called=!1,t}function r(e){var t=function(){if(t.called)throw new Error(t.onceError);return t.called=!0,t.value=e.apply(this,arguments)},n=e.name||"Function wrapped with `once`";return t.onceError=n+" shouldn't be called more than once",t.called=!1,t}var a=n(733);e.exports=a(o),e.exports.strict=a(r),o.proto=o(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return o(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return r(this)},configurable:!0})})},733:function(e,t){function n(e,t){function o(){for(var t=new Array(arguments.length),n=0;n<t.length;n++)t[n]=arguments[n];var o=e.apply(this,t),r=t[t.length-1];return"function"===typeof o&&o!==r&&Object.keys(r).forEach(function(e){o[e]=r[e]}),o}if(e&&t)return n(e)(t);if("function"!==typeof e)throw new TypeError("need wrapper function");return Object.keys(e).forEach(function(t){o[t]=e[t]}),o}e.exports=n},734:function(e,t,n){var o=n(735);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!1};r.transform=void 0;n(693)(o,r);o.locals&&(e.exports=o.locals)},735:function(e,t,n){t=e.exports=n(28)(!1),t.push([e.i,".ap-icon{display:inline-block;width:10px}.ap-icon--success{color:var(--success)}.ap-icon--info{color:var(--information__color)}.ap-icon--danger{color:var(--danger__color);height:1rem}.ap-icon--big{width:14px}.ap-icon--center{width:12px}.ap-icon--deposit-arrow,.ap-icon--withdraw-arrow{width:11px}.ap-icon--balance,.ap-icon--exchange,.ap-icon--settings{width:16px;margin-top:3px;margin-bottom:-3px}.ap-icon--generate-report{width:12px}.ap-icon--key{width:16px}.ap-icon--menu{width:24px}.ap-icon--refresh{width:15px}.ap-icon--widthraw-arrow{width:11px}",""])},736:function(e,t,n){e.exports=n.p+"static/media/icon-stop.12973336.svg"},737:function(e,t,n){e.exports=n.p+"static/media/icon-balance.25d500b4.svg"},738:function(e,t,n){e.exports=n.p+"static/media/icon-center.d3865558.svg"},739:function(e,t,n){e.exports=n.p+"static/media/icon-close.f5458b61.svg"},740:function(e,t,n){e.exports=n.p+"static/media/icon-close-inverse.241501cd.svg"},741:function(e,t,n){e.exports=n.p+"static/media/icon-deposit-arrow.fb9cee72.svg"},742:function(e,t,n){e.exports=n.p+"static/media/icon-exchange.a6cdeb82.svg"},743:function(e,t,n){e.exports=n.p+"static/media/icon-generate-reports.c25e875a.svg"},744:function(e,t,n){e.exports=n.p+"static/media/icon-check.4443b294.svg"},745:function(e,t,n){e.exports=n.p+"static/media/icon-checkbox.6ff75c6f.svg"},746:function(e,t,n){e.exports=n.p+"static/media/icon-refresh.36718f54.svg"},747:function(e,t,n){e.exports=n.p+"static/media/icon-withdraw-arrow.4644456c.svg"},748:function(e,t,n){e.exports=n.p+"static/media/icon-menu.ff0128f9.svg"},749:function(e,t,n){e.exports=n.p+"static/media/icon-menu-toggle.ad89aeb9.svg"},750:function(e,t,n){e.exports=n.p+"static/media/icon-key.c3b5c80f.svg"},751:function(e,t,n){e.exports=n.p+"static/media/icon-key-big.0d56bc9b.svg"},752:function(e,t,n){e.exports=n.p+"static/media/icon-download.ebdd4d2b.svg"},753:function(e,t,n){e.exports=n.p+"static/media/icon-arrow-prev.ec3c7dc9.svg"},754:function(e,t,n){e.exports=n.p+"static/media/icon-arrow-next.02ae871b.svg"},755:function(e,t,n){e.exports=n.p+"static/media/icon-alert.b09e6a92.svg"},756:function(e,t,n){e.exports=n.p+"static/media/icon-settings.d15941a5.svg"},757:function(e,t,n){e.exports=n.p+"static/media/icon-pending.e2938acc.svg"},758:function(e,t,n){e.exports=n.p+"static/media/icon-simple-check.03179922.svg"},759:function(e,t,n){e.exports=n.p+"static/media/icon-nav-settings.18d95955.svg"},760:function(e,t,n){e.exports=n.p+"static/media/icon-nav-wallet.057192aa.svg"},761:function(e,t,n){e.exports=n.p+"static/media/icon-nav-buy-sell.5ff447ad.svg"},762:function(e,t,n){e.exports=n.p+"static/media/icon-nav-trading.6846b323.svg"},763:function(e,t,n){e.exports=n.p+"static/media/icon-nav-dashboard-on.da8d7604.svg"},764:function(e,t,n){e.exports=n.p+"static/media/icon-nav-user.4473673a.svg"},765:function(e,t,n){e.exports=n.p+"static/media/icon-nav-notification.84f07c0e.svg"},766:function(e,t,n){e.exports=n.p+"static/media/icon-buy.4736e26a.svg"},767:function(e,t,n){e.exports=n.p+"static/media/icon-sell.749581f6.svg"},768:function(e,t,n){e.exports=n.p+"static/media/icon-eye.f3c39bfb.svg"},769:function(e,t,n){e.exports=n.p+"static/media/icon-receive.f8805981.svg"},770:function(e,t,n){e.exports=n.p+"static/media/icon-receive-with-border.51998985.svg"},771:function(e,t,n){e.exports=n.p+"static/media/icon-send.0eae48e8.svg"},772:function(e,t,n){e.exports=n.p+"static/media/icon-send-with-border.d2690259.svg"},773:function(e,t,n){e.exports=n.p+"static/media/icon-deposit.361361b7.svg"},774:function(e,t,n){e.exports=n.p+"static/media/icon-withdraw.aa1ee13f.svg"},775:function(e,t,n){e.exports=n.p+"static/media/icon-withdraw-with-border.e6866da7.svg"},776:function(e,t,n){e.exports=n.p+"static/media/icon-info.6448a8d0.svg"},777:function(e,t,n){e.exports=n.p+"static/media/icon-copy.9dc9a9a7.svg"},778:function(e,t,n){e.exports=n.p+"static/media/icon-star.9e54355c.svg"},779:function(e,t,n){e.exports=n.p+"static/media/logo-powered.7f6a585c.svg"},780:function(e,t,n){e.exports=n.p+"static/media/icon-open-buy-big.ec282aaa.svg"},781:function(e,t,n){e.exports=n.p+"static/media/icon-open-sell-big.04ef7f4d.svg"},790:function(e,t,n){"use strict";n.d(t,"h",function(){return o}),n.d(t,"f",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return i}),n.d(t,"e",function(){return s}),n.d(t,"b",function(){return c}),n.d(t,"i",function(){return l}),n.d(t,"d",function(){return u}),n.d(t,"g",function(){return p});var o=function(e){return e?void 0:"Required"},r=function(e,t){return e!==t.password?"Passwords do not match":void 0},a=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e)?"Invalid email address":void 0},i=function(e){return e&&!/^[a-z0-9]*$/i.test(e)?"Input should only contain alphanumeric characters":void 0},s=function(e,t){return t&&t>e?"Must be less than "+e:void 0},c=function(e){return function(t){return void 0!==t&&t<=e?"Must be bigger than "+e:void 0}}(0),l=function(e){return e&&!/^(?=.{8,})(?=.*[A-Z])(?=.*[0-9]).*$/g.test(e)?"Password must contain at least 8 characters, one number, and at least one capital letter":void 0},u=function(e){var t="[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime());return e&&t?"Invalid date":void 0},p=function(e){return function(t){return console.log("maxLength",t&&t.length>e),t&&t.length>e?"Must be "+e+" characters or less":void 0}}},791:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}n.d(t,"a",function(){return f});var a=n(0),i=n.n(a),s=n(1),c=n.n(s),l=n(722),u=n.n(l),p=n(29),d=n(81),f=function(e){var t=e.input,n=e.customClass,a=e.classModifiers,s=e.meta,c=e.rows,l=e.info,p=e.label,f=e.labelInInput,m=e.rightLabelText,h=r(e,["input","customClass","classModifiers","meta","rows","info","label","labelInInput","rightLabelText"]),g=c>1,b=Object(d.b)(["ap-input",n]),v=Object.assign({className:u()("form-control",o({},b("with-label"),f),o({},b("input","error",""),s.dirty&&s.error),o({},b("text-area"),g),m?b("input","with-right-label"):b("input",a))},t,h);return i.a.createElement("div",{className:"form-group "+b("input-wrapper",a)},"hidden"!==e.type&&i.a.createElement("label",{className:"ap--label "+b("label",a)},p),i.a.createElement("div",{className:u()(m&&b("input-with-right-label-container"),b("input-box"))},f&&i.a.createElement("span",{className:"label-in-input "+b("label-in-input")},f),g?i.a.createElement("textarea",v):i.a.createElement("input",v),m?i.a.createElement("div",{className:b("right-label")},i.a.createElement("span",{className:b("right-label-span")},m)):null,l&&i.a.createElement("div",{className:"form-text-muted "+b("info")},l),s.touched&&s.error&&i.a.createElement("div",{className:b("error")},s.error)))},m=function(e){return i.a.createElement(p.a,Object.assign({name:e.name,component:f},e))};m.defaultProps={name:"",label:"",labelInInput:"",type:"",classModifiers:"",placeholder:"",info:"",autoFocus:"",disabled:!1,required:!1,rows:1},m.propTypes={name:c.a.string,label:c.a.string,labelInInput:c.a.string,type:c.a.string,customClass:c.a.string,classModifiers:c.a.oneOfType([c.a.string,c.a.arrayOf(c.a.string)]),placeholder:c.a.string,info:c.a.oneOfType([c.a.string,c.a.object]),autoFocus:c.a.string,disabled:c.a.bool,required:c.a.bool,rightLabelText:c.a.string,rows:c.a.number},t.b=m},847:function(e,t,n){var o=n(857);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!1};r.transform=void 0;n(693)(o,r);o.locals&&(e.exports=o.locals)},848:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(1),i=n.n(a),s=n(31),c=n(21),l=n(723),u=n(5),p=n(81),d=n(858),f=(n.n(d),function(e){var t=e.customClass,n=e.linkTo,o=Object(p.b)("ap-logo",t),a=function(){return u.default.global.siteLogo.match(/.svg$/)?r.a.createElement(l.a,{alt:"Site logo",src:Object(c.a)("/local/logos/"+u.default.global.siteLogo),className:o("img")}):r.a.createElement("img",{alt:"Site logo",src:Object(c.a)("/local/logos/"+u.default.global.siteLogo),className:o("img")})};return r.a.createElement("div",{className:o()},n?r.a.createElement(s.a,{className:o("link"),to:Object(c.a)(n)},a()):a())});f.defaultProps={customClass:"",linkTo:""},f.propTypes={customClass:i.a.string,linkTo:i.a.string},t.a=f},857:function(e,t,n){t=e.exports=n(28)(!1),t.push([e.i,".standalone-form__wrapper{position:fixed;top:0;left:0;min-width:100%;min-height:100%;height:100%;background:var(--standalone-form__wrapper-bg-image);max-height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow-y:auto}.standalone-form__input-wrapper{margin-bottom:2.5rem}.standalone-form__input-box{height:3rem}.standalone-form__logo{margin:2.8rem;position:absolute;top:0;left:0;color:var(--standalone-form__logo-color)}.standalone-form__close-icon{position:absolute;top:1.5rem;right:1.5rem;color:var(--font__color-primary)}.standalone-form__container{margin:auto;width:var(--standalone-form__container-width);min-height:-webkit-min-content;min-height:-moz-min-content;min-height:min-content;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background:var(--standalone-form__container-bg-color);-webkit-box-shadow:var(--standalone-form__container-box-shadow);box-shadow:var(--standalone-form__container-box-shadow)}.standalone-form__header{position:relative;height:6.4rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:var(--standalone-form__header-color);background:var(--standalone-form__header-bg-color);padding-left:2.8rem;-webkit-box-shadow:var(--standalone-form__header-box-shadow);box-shadow:var(--standalone-form__header-box-shadow)}.standalone-form__header-text,.standalone-form__message-text{font-size:1.6rem;color:var(--font__color-primary)}.standalone-form__message{height:14rem;color:var(--standalone-form__message-color);background:var(--standalone-form__header-bg-color);padding:0 2.8rem;-webkit-box-shadow:var(--standalone-form__message-box-shadow);box-shadow:var(--standalone-form__message-box-shadow)}.standalone-form__message,.standalone-form__message-footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.standalone-form__message-footer{height:6.2rem;margin:0 2.8rem;border-top:solid 1px var(--border__color)}.standalone-form__message-footer .standalone-form__btn--additive,.standalone-form__message-footer .standalone-form__btn--subtractive{font-size:1.1rem;display:inline-block;height:3.2rem;line-height:3.2rem;border-radius:2px;text-align:center;cursor:pointer;padding:0 1rem;border:1px solid transparent;color:var(--font__color-primary);white-space:nowrap;width:auto;min-width:var(--standalone-form__btn-width)}.standalone-form__message-footer .standalone-form__btn--subtractive{background:var(--danger__bg-color)}.standalone-form__message-footer .standalone-form__btn--additive{background:var(--success__bg-color)}.standalone-form__message-footer .standalone-form__btn--subtractive:hover{background:var(--danger__bg-color--hover)}.standalone-form__message-footer .standalone-form__btn--additive:hover{background:var(--success__bg-color--hover)}.standalone-form__message-footer .standalone-form__btn--subtractive:focus{background:var(--danger__bg-color--focus);border:solid 1px var(--danger__border-color--focus)}.standalone-form__message-footer .standalone-form__btn--additive:focus{background:var(--success__bg-color--focus);border:solid 1px var(--success__border-color--focus)}.standalone-form__success{padding:1rem}.standalone-form__terms-text{margin:1rem 0;line-height:1.45;color:var(--font__color-secondary)}.standalone-form__information-text{margin-bottom:2.8rem;font-size:1.4rem;color:var(--font__color-secondary)}.standalone-form__password-strength{color:var(--information__color)}.standalone-form__password-error{color:var(--danger__bg-color);margin-bottom:2.5rem}.standalone-form__footer{height:6.2rem;margin:0 2.8rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-top:solid 1px var(--border__color)}.standalone-form__footer-separator{width:0;height:2rem;border-right:solid 1px var(--border__color);margin:0 1.5rem}.standalone-form__form{-ms-flex-positive:1;flex-grow:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;margin:2.75rem}.standalone-form__btn{width:var(--standalone-form__btn-width);height:var(--standalone-form__btn-height);background-color:var(--standalone-form__btn-bg-color)}.standalone-form__separator{margin:0 0 2.5rem;display:block;border-top:solid 1px var(--border__color)}.standalone-form__auto-tab-input,.standalone-form__radio-list{margin-bottom:2.5rem}.standalone-form__error{color:var(--danger__color);padding-top:.5rem;display:inline-block}.standalone-form__info{padding-top:.5rem}@media (max-width:576px){.standalone-form__wrapper{-ms-flex-pack:start;justify-content:flex-start}.standalone-form__container{width:100%;font-size:1.3rem;-webkit-box-shadow:initial;box-shadow:none;margin:initial}.standalone-form__logo{-ms-flex-item-align:start;align-self:flex-start;position:static;top:auto;left:auto}}",""])},858:function(e,t,n){var o=n(859);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!1};r.transform=void 0;n(693)(o,r);o.locals&&(e.exports=o.locals)},859:function(e,t,n){t=e.exports=n(28)(!1),t.push([e.i,".ap-logo{-o-object-fit:contain;object-fit:contain}.ap-logo__link,.ap-logo__link:active,.ap-logo__link:hover,.ap-logo__link:link,.ap-logo__link:visited{color:var(--standalone-form__logo-color)}.ap-logo__img{width:8rem}",""])}});