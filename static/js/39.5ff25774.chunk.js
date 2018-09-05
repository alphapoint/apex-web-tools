webpackJsonp([39],{1318:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(2),s=r.n(a),i=r(855),u=r(703),c=r(43),l=r(241),f=r(772),d=r(830),p=r(27),h=r(828),m=(r.n(h),Object(l.b)("standalone-form")),b=function(e,t){var r=e.handleSubmit,n=e.submitting;return e.is2FARequired?o.a.createElement("div",{className:m("wrapper")},o.a.createElement(d.a,{customClass:m("logo")}),o.a.createElement("div",{className:m("container")},o.a.createElement("div",{className:m("header")},o.a.createElement("div",{className:m("header-text")},t.t("Two-Factor Authentication"))),o.a.createElement("form",{onSubmit:r,className:m("form")},o.a.createElement("div",{className:m("information-text")},t.t("Enter the token from your Authenticator app.")),o.a.createElement("div",{className:m("auto-tab-input")},o.a.createElement(i.a,{name:"code",type:"input",numberOfInputs:6,validate:[f.f]})),o.a.createElement("hr",{className:m("separator")}),o.a.createElement(u.a,{type:"submit",disabled:n,customClass:"standalone-form"},n?t.t("Processing..."):t.t("Submit"))))):o.a.createElement(p.c,{to:Object(c.a)("/login")})};b.propTypes={handleSubmit:s.a.func.isRequired,submitting:s.a.bool.isRequired},b.contextTypes={t:s.a.func.isRequired},t.a=b},692:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(42),o=r(6),a=r(1318),s=r(80),i=function(e){return{is2FARequired:e.auth.is2FARequired}},u=Object(o.connect)(i)(a.a),c=Object(n.i)({form:"twoFactorAuth",onSubmit:function(e,t){return t(Object(s.i)(e.code))},onChange:function(e,t,r){e.code&&6===e.code.length&&r.submit()}})(u);t.default=c},697:function(e,t){function r(){for(var e={},t=0;t<arguments.length;t++){var r=arguments[t];for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}return e}e.exports=r},699:function(e,t,r){"use strict";function n(e){this.request=e.request,this.xhr=e.xhr,this.headers=e.headers||{},this.status=e.status||0,this.text=e.text,this.body=e.body,this.contentType=e.contentType,this.isHttpError=e.status>=400}var o=r(700),a=r(701);n.prototype.header=o.prototype.header,n.fromRequest=function(e){return new n(a(e))},e.exports=n},700:function(e,t,r){"use strict";function n(e){var t="string"===typeof e?{url:e}:e||{};this.method=t.method?t.method.toUpperCase():"GET",this.url=t.url,this.headers=t.headers||{},this.body=t.body,this.timeout=t.timeout||0,this.errorOn404=null==t.errorOn404||t.errorOn404,this.onload=t.onload,this.onerror=t.onerror}n.prototype.abort=function(){if(!this.aborted)return this.aborted=!0,this.xhr.abort(),this},n.prototype.header=function(e,t){var r;for(r in this.headers)if(this.headers.hasOwnProperty(r)&&e.toLowerCase()===r.toLowerCase()){if(1===arguments.length)return this.headers[r];delete this.headers[r];break}if(null!=t)return this.headers[e]=t,t},e.exports=n},701:function(e,t,r){"use strict";var n=r(697);e.exports=function(e){var t=e.xhr,r={request:e,xhr:t};try{var o,a,s,i={};if(t.getAllResponseHeaders)for(o=t.getAllResponseHeaders().split("\n"),a=0;a<o.length;a++)(s=o[a].match(/\s*([^\s]+):\s+([^\s]+)/))&&(i[s[1]]=s[2]);r=n(r,{status:t.status,contentType:t.contentType||t.getResponseHeader&&t.getResponseHeader("Content-Type"),headers:i,text:t.responseText,body:t.response||t.responseText})}catch(e){}return r}},702:function(e,t,r){"use strict";e.exports=function(e){var t,r=!1;return function(){return r||(r=!0,t=e.apply(this,arguments)),t}}},703:function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var o=r(0),a=r.n(o),s=r(2),i=r.n(s),u=r(706),c=r(241),l=r(763),f=(r.n(l),function(e){var t=e.children,r=e.styleName,o=e.baseClass,s=e.customClass,i=e.classModifiers,u=e.disabled,l=n(e,["children","styleName","baseClass","customClass","classModifiers","disabled"]),f=Object(c.b)(o,s,i);return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",Object.assign({disabled:u,className:f("btn",[r,i])},l),t))});f.defaultProps={name:"",value:"",type:"",autoFocus:!1,disabled:!1,baseClass:"ap-button",styleName:u.b.general},f.propTypes={name:i.a.string,value:i.a.string,type:i.a.string,autoFocus:i.a.bool,disabled:i.a.bool,baseClass:i.a.string,customClass:i.a.string,styleName:u.a},f.contextTypes={t:i.a.func.isRequired},t.a=f},706:function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"a",function(){return s});var n=r(2),o=r.n(n),a={general:"general",additive:"additive",subtractive:"subtractive"},s=o.a.oneOf([a.general,a.additive,a.subtractive])},707:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=r(0),i=r.n(s),u=r(2),c=r.n(u),l=r(708),f=r.n(l),d=r(713),p=r.n(d),h=r(715),m=function(){function e(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&i.return&&i.return()}finally{if(o)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),b=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),g=f.a.use(p.a),v={PENDING:"pending",LOADING:"loading",LOADED:"loaded",FAILED:"failed",UNSUPPORTED:"unsupported"},_={},y={},w=function(e){function t(e){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleLoad=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e)return void r.fail(e);r.isActive&&r.setState({loadedText:t.text,status:v.LOADED},function(){r.props.onLoad(r.props.src,n)})},r.state={status:v.PENDING},r.isActive=!1,r}return a(t,e),b(t,[{key:"componentWillMount",value:function(){this.isActive=!0}},{key:"componentDidMount",value:function(){this.state.status===v.PENDING&&(this.props.supportTest()?this.props.src?this.startLoad():this.fail(Object(h.a)("Missing source")):this.fail(Object(h.e)()))}},{key:"componentDidUpdate",value:function(e){e.src!==this.props.src&&(this.props.src?this.startLoad():this.fail(Object(h.a)("Missing source")))}},{key:"componentWillUnmount",value:function(){this.isActive=!1}},{key:"getFile",value:function(e){var t=this,r=this.props,n=r.cacheGetRequests,o=r.src;if(n){if(y[o]){var a=m(y[o],2),s=a[0],i=a[1];e(s,i,!0)}_[o]||(_[o]=[],g.get(o,function(e,r){_[o].forEach(function(n){y[o]=[e,r],o===t.props.src&&n(e,r)})})),_[o].push(e)}else g.get(o,function(r,n){o===t.props.src&&e(r,n)})}},{key:"fail",value:function(e){var t=this,r=e.isUnsupportedBrowserError?v.UNSUPPORTED:v.FAILED;this.isActive&&this.setState({status:r},function(){"function"===typeof t.props.onError&&t.props.onError(e)})}},{key:"startLoad",value:function(){this.isActive&&this.setState({status:v.LOADING},this.load)}},{key:"load",value:function(){var e=this.props.src.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);return e?this.handleLoad(null,{text:e[1]?atob(e[2]):decodeURIComponent(e[2])}):this.getFile(this.handleLoad)}},{key:"getClassName",value:function(){var e="isvg "+this.state.status;return this.props.className&&(e+=" "+this.props.className),e}},{key:"processSVG",value:function(e){var t=this.props,r=t.uniquifyIDs,n=t.uniqueHash,o=t.baseURL;return r?Object(h.d)(e,n||Object(h.c)(),o):e}},{key:"renderContents",value:function(){switch(this.state.status){case v.UNSUPPORTED:case v.FAILED:return this.props.children;default:return this.props.preloader}}},{key:"render",value:function(){var e=void 0,t=void 0;return this.state.loadedText?t={__html:this.processSVG(this.state.loadedText)}:e=this.renderContents(),this.props.wrapper({style:this.props.style,className:this.getClassName(),dangerouslySetInnerHTML:t},e)}}]),t}(i.a.PureComponent);w.propTypes={baseURL:c.a.string,cacheGetRequests:c.a.bool,children:c.a.node,className:c.a.string,onError:c.a.func,onLoad:c.a.func,preloader:c.a.node,src:c.a.string.isRequired,style:c.a.object,supportTest:c.a.func,uniqueHash:c.a.string,uniquifyIDs:c.a.bool,wrapper:c.a.func},w.defaultProps={baseURL:"",cacheGetRequests:!1,onLoad:function(){},supportTest:h.b,uniquifyIDs:!0,wrapper:i.a.createFactory("span")},t.a=w},708:function(e,t,r){"use strict";function n(e,t){function r(r,n){var s,c,h,m,b,g;for(r=new f(d(e,r)),a=0;a<t.length;a++)c=t[a],c.processRequest&&c.processRequest(r);for(a=0;a<t.length;a++)if(c=t[a],c.createXHR){s=c.createXHR(r);break}s=s||new i,r.xhr=s,h=p(u(function(e){clearTimeout(b),s.onload=s.onerror=s.onabort=s.onreadystatechange=s.ontimeout=s.onprogress=null;var i=o(r,e),u=i||l.fromRequest(r);for(a=0;a<t.length;a++)c=t[a],c.processResponse&&c.processResponse(u);i&&r.onerror&&r.onerror(i),!i&&r.onload&&r.onload(u),n&&n(i,i?void 0:u)})),g="onload"in s&&"onerror"in s,s.onload=function(){h()},s.onerror=h,s.onabort=function(){h()},s.onreadystatechange=function(){if(4===s.readyState){if(r.aborted)return h();if(!g){var e;try{e=s.status}catch(t){}var t=0===e?new Error("Internal XHR Error"):null;return h(t)}}},s.ontimeout=function(){},s.onprogress=function(){},s.open(r.method,r.url),r.timeout&&(b=setTimeout(function(){r.timedOut=!0,h();try{s.abort()}catch(e){}},r.timeout));for(m in r.headers)r.headers.hasOwnProperty(m)&&s.setRequestHeader(m,r.headers[m]);return s.send(r.body),r}e=e||{},t=t||[];var s,h=["get","post","put","head","patch","delete"];for(a=0;a<h.length;a++)s=h[a],r[s]=function(e){return function(t,n){return t=new f(t),t.method=e,r(t,n)}}(s);return r.plugins=function(){return t},r.defaults=function(r){return r?n(d(e,r),t):e},r.use=function(){var r=Array.prototype.slice.call(arguments,0);return n(e,t.concat(r))},r.bare=function(){return n()},r.Request=f,r.Response=l,r.RequestError=c,r}function o(e,t){if(e.aborted)return h("Request aborted",e,{name:"Abort"});if(e.timedOut)return h("Request timeout",e,{name:"Timeout"});var r,n=e.xhr,o=Math.floor(n.status/100);switch(o){case 0:case 2:if(!t)return;return h(t.message,e);case 4:if(404===n.status&&!e.errorOn404)return;r="Client";break;case 5:r="Server";break;default:r="HTTP"}var a=r+" Error: The server returned a status of "+n.status+' for the request "'+e.method.toUpperCase()+" "+e.url+'"';return h(a,e)}var a,s=r(709),i=r(710),u=r(711),c=r(712),l=r(699),f=r(700),d=r(697),p=r(702),h=c.create;e.exports=n({},[s])},709:function(e,t,r){"use strict";e.exports={processRequest:function(e){e.url=e.url.replace(/[^%]+/g,function(e){return encodeURI(e)})}}},710:function(e,t){e.exports=window.XMLHttpRequest},711:function(e,t,r){"use strict";e.exports=function(e){return function(){var t=Array.prototype.slice.call(arguments,0),r=function(){return e.apply(null,t)};setTimeout(r,0)}}},712:function(e,t,r){"use strict";function n(e,t){var r=new Error(e);r.name="RequestError",this.name=r.name,this.message=r.message,r.stack&&(this.stack=r.stack),this.toString=function(){return this.message};for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n])}var o=r(699),a=r(701),s=r(697);n.prototype=s(Error.prototype),n.prototype.constructor=n,n.create=function(e,t,r){var s=new n(e,r);return o.call(s,a(t)),s},e.exports=n},713:function(e,t,r){"use strict";var n=r(714),o=r(702),a=!1,s=o(function(){return"undefined"!==typeof window&&null!==window&&window.XMLHttpRequest&&"withCredentials"in new window.XMLHttpRequest});e.exports={createXHR:function(e){var t,r,o;if("undefined"!==typeof window&&null!==window&&(t=n(e.url),r=n(window.location.href),t.host&&(t.protocol!==r.protocol||t.host!==r.host||t.port!==r.port))){if(!a&&e.headers)for(o in e.headers)if(e.headers.hasOwnProperty(o)){a=!0,window&&window.console&&window.console.warn&&window.console.warn("Request headers are ignored in old IE when using the oldiexdomain plugin.");break}if(window.XDomainRequest&&!s()){var i=new window.XDomainRequest;return i.setRequestHeader=function(){},i}}}}},714:function(e,t){(function(){var t,r,n,o={}.hasOwnProperty;t=/^(?:(?:([^:\/?\#]+:)\/+|(\/\/))(?:([a-z0-9-\._~%]+)(?::([a-z0-9-\._~%]+))?@)?(([a-z0-9-\._~%!$&'()*+,;=]+)(?::([0-9]+))?)?)?([^?\#]*?)(\?[^\#]*)?(\#.*)?$/,n=function(e,t){return n.URL.parse(e,t)},n.URL=function(){function e(e){var t,n,a;for(t in r)o.call(r,t)&&(n=r[t],this[t]=null!=(a=e[t])?a:n);this.host||(this.host=this.hostname&&this.port?this.hostname+":"+this.port:this.hostname?this.hostname:""),this.origin||(this.origin=this.protocol?this.protocol+"//"+this.host:""),this.isAbsolutePathRelative=!this.host&&"/"===this.pathname.charAt(0),this.isPathRelative=!this.host&&"/"!==this.pathname.charAt(0),this.isRelative=this.isSchemeRelative||this.isAbsolutePathRelative||this.isPathRelative,this.isAbsolute=!this.isRelative}return e.parse=function(e){var r,o,a;return r=e.toString().match(t),o=r[8]||"",a=r[1],new n.URL({protocol:a,username:r[3],password:r[4],hostname:r[6],port:r[7],pathname:a&&"/"!==o.charAt(0)?"/"+o:o,search:r[9],hash:r[10],isSchemeRelative:null!=r[2]})},e}(),r={protocol:"",username:"",password:"",host:"",hostname:"",port:"",pathname:"",search:"",hash:"",origin:"",isSchemeRelative:!1},e.exports=n}).call(this)},715:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}r.d(t,"b",function(){return l}),r.d(t,"c",function(){return f}),r.d(t,"d",function(){return d}),r.d(t,"e",function(){return m}),r.d(t,"a",function(){return b});var s=r(716),i=r.n(s),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=i()(function(){if(!document)return!1;var e=document.createElement("div");return e.innerHTML="<svg />",e.firstChild&&"http://www.w3.org/2000/svg"===e.firstChild.namespaceURI}),l=i()(function(){return!(!c()||"undefined"===typeof window||null===window)&&(window.XMLHttpRequest||window.XDomainRequest)}),f=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,t="abcdefghijklmnopqrstuvwxyz",r=t+t.toUpperCase()+"1234567890",n="",o=0;o<e;o++)n+=function(e){return e[Math.floor(Math.random()*e.length)]}(r);return n},d=function(){var e=function(e){return"(?:(?:\\s|\\:)"+e+")"},t=new RegExp("(?:("+e("id")+')="([^"]+)")|(?:('+e("href")+"|"+e("role")+"|"+e("arcrole")+')="\\#([^"]+)")|(?:="url\\(\\#([^\\)]+)\\)")|(?:url\\(\\#([^\\)]+)\\))',"g");return function(e,r,n){var o=function(e){return e+"___"+r};return e.replace(t,function(e,t,r,a,s,i,u){return r?t+'="'+o(r)+'"':s?a+'="'+n+"#"+o(s)+'"':i?'="url('+n+"#"+o(i)+')"':u?"url("+n+"#"+o(u)+")":void 0})}}(),p=function(e){function t(e){var r;n(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.name="InlineSVGError",a.isSupportedBrowser=!0,a.isConfigurationError=!1,a.isUnsupportedBrowserError=!1,a.message=e,r=a,o(a,r)}return a(t,e),t}(Error),h=function(e,t){var r=new p(e);return u({},r,t)},m=function(e){var t=e;return t||(t="Unsupported Browser"),h(t,{isSupportedBrowser:!1,isUnsupportedBrowserError:!0})},b=function(e){return h(e,{isConfigurationError:!0})}},716:function(e,t,r){function n(e){var t=function(){return t.called?t.value:(t.called=!0,t.value=e.apply(this,arguments))};return t.called=!1,t}function o(e){var t=function(){if(t.called)throw new Error(t.onceError);return t.called=!0,t.value=e.apply(this,arguments)},r=e.name||"Function wrapped with `once`";return t.onceError=r+" shouldn't be called more than once",t.called=!1,t}var a=r(717);e.exports=a(n),e.exports.strict=a(o),n.proto=n(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return n(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return o(this)},configurable:!0})})},717:function(e,t){function r(e,t){function n(){for(var t=new Array(arguments.length),r=0;r<t.length;r++)t[r]=arguments[r];var n=e.apply(this,t),o=t[t.length-1];return"function"===typeof n&&n!==o&&Object.keys(o).forEach(function(e){n[e]=o[e]}),n}if(e&&t)return r(e)(t);if("function"!==typeof e)throw new TypeError("need wrapper function");return Object.keys(e).forEach(function(t){n[t]=e[t]}),n}e.exports=r},763:function(e,t,r){var n=r(672);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(671)(n,o);n.locals&&(e.exports=n.locals)},772:function(e,t,r){"use strict";r.d(t,"f",function(){return n}),r.d(t,"e",function(){return o}),r.d(t,"c",function(){return a}),r.d(t,"a",function(){return s}),r.d(t,"d",function(){return i}),r.d(t,"b",function(){return u}),r.d(t,"g",function(){return c});var n=function(e){return e?void 0:"Required"},o=function(e,t){return e!==t.password?"Passwords do not match":void 0},a=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e)?"Invalid email address":void 0},s=function(e){return e&&!/^[a-z0-9]*$/i.test(e)?"Input should only contain alphanumeric characters":void 0},i=function(e,t){return t&&t>e?"Must be less than "+e:void 0},u=function(e){return function(t){return void 0!==t&&t<=e?"Must be bigger than "+e:void 0}}(0),c=function(e){return e&&!/^(?=.{8,})(?=.*[A-Z])(?=.*[0-9]).*$/g.test(e)?"Password must contain at least 8 characters, one number, and at least one capital letter":void 0}},828:function(e,t,r){var n=r(833);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(671)(n,o);n.locals&&(e.exports=n.locals)},830:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(2),s=r.n(a),i=r(43),u=r(707),c=r(241),l=r(840),f=(r.n(l),function(e){var t=e.customClass,r=Object(c.b)("ap-logo",t);return o.a.createElement("div",{className:r()},o.a.createElement(u.a,{alt:"Site logo",src:Object(i.a)("/local/logos/site-logo.svg"),className:r("img")}))});f.defaultProps={customClass:""},f.propTypes={customClass:s.a.string},t.a=f},833:function(e,t,r){t=e.exports=r(20)(!1),t.push([e.i,".standalone-form__wrapper{position:fixed;top:0;left:0;min-width:100%;min-height:100%;height:100%;background:var(--standalone-form__wrapper-bg-image);max-height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow-y:auto}.standalone-form__input-wrapper{margin-bottom:2.5rem}.standalone-form__input-box{height:3rem}.standalone-form__logo{margin:2.8rem;position:absolute;top:0;left:0;color:var(--standalone-form__logo-color)}.standalone-form__container{margin:auto;width:var(--standalone-form__container-width);min-height:-webkit-min-content;min-height:-moz-min-content;min-height:min-content;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background:var(--standalone-form__container-bg-color);-webkit-box-shadow:var(--standalone-form__container-box-shadow);box-shadow:var(--standalone-form__container-box-shadow)}.standalone-form__header{height:6.4rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:var(--standalone-form__header-color);background:var(--standalone-form__header-bg-color);padding-left:2.8rem;-webkit-box-shadow:var(--standalone-form__header-box-shadow);box-shadow:var(--standalone-form__header-box-shadow)}.standalone-form__header-text,.standalone-form__message-text{font-size:1.6rem;color:var(--font__color-primary)}.standalone-form__message{height:14rem;color:var(--standalone-form__message-color);background:var(--standalone-form__header-bg-color);padding:0 2.8rem;-webkit-box-shadow:var(--standalone-form__message-box-shadow);box-shadow:var(--standalone-form__message-box-shadow)}.standalone-form__message,.standalone-form__message-footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.standalone-form__message-footer{height:6.2rem;margin:0 2.8rem;border-top:solid 1px var(--border__color)}.standalone-form__message-footer .standalone-form__btn--additive,.standalone-form__message-footer .standalone-form__btn--subtractive{font-size:1.1rem;display:inline-block;height:3.2rem;line-height:3.2rem;border-radius:2px;text-align:center;cursor:pointer;padding:0 1rem;border:1px solid transparent;color:var(--font__color-primary);white-space:nowrap;width:auto;min-width:var(--standalone-form__btn-width)}.standalone-form__message-footer .standalone-form__btn--subtractive{background:var(--danger__bg-color)}.standalone-form__message-footer .standalone-form__btn--additive{background:var(--success__bg-color)}.standalone-form__message-footer .standalone-form__btn--subtractive:hover{background:var(--danger__bg-color--hover)}.standalone-form__message-footer .standalone-form__btn--additive:hover{background:var(--success__bg-color--hover)}.standalone-form__message-footer .standalone-form__btn--subtractive:focus{background:var(--danger__bg-color--focus);border:solid 1px var(--danger__border-color--focus)}.standalone-form__message-footer .standalone-form__btn--additive:focus{background:var(--success__bg-color--focus);border:solid 1px var(--success__border-color--focus)}.standalone-form__success{padding:1rem}.standalone-form__terms-text{margin:1rem 0;line-height:1.45;color:var(--font__color-secondary)}.standalone-form__information-text{margin-bottom:2.8rem;font-size:1.4rem;color:var(--font__color-secondary)}.standalone-form__password-strength{color:var(--information__color)}.standalone-form__password-error{color:var(--danger__bg-color);margin-bottom:2.5rem}.standalone-form__footer{height:6.2rem;margin:0 2.8rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-top:solid 1px var(--border__color)}.standalone-form__footer-separator{width:0;height:2rem;border-right:solid 1px var(--border__color);margin:0 1.5rem}.standalone-form__form{-ms-flex-positive:1;flex-grow:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;margin:2.75rem}.standalone-form__btn{width:var(--standalone-form__btn-width);height:var(--standalone-form__btn-height);background-color:var(--standalone-form__btn-bg-color)}.standalone-form__separator{margin:0 0 2.5rem;display:block;border-top:solid 1px var(--border__color)}.standalone-form__auto-tab-input,.standalone-form__radio-list{margin-bottom:2.5rem}.standalone-form__error{color:var(--danger__color);padding-top:.5rem;display:inline-block}.standalone-form__info{padding-top:.5rem}@media (max-width:576px){.standalone-form__wrapper{-ms-flex-pack:start;justify-content:flex-start}.standalone-form__container{width:100%;font-size:1.3rem;-webkit-box-shadow:initial;box-shadow:none;margin:initial}.standalone-form__logo{-ms-flex-item-align:start;align-self:flex-start;position:static;top:auto;left:auto}}",""])},840:function(e,t,r){var n=r(841);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(671)(n,o);n.locals&&(e.exports=n.locals)},841:function(e,t,r){t=e.exports=r(20)(!1),t.push([e.i,".ap-logo{-o-object-fit:contain;object-fit:contain}.ap-logo__img{width:8rem}",""])},855:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=r(0),i=r.n(s),u=r(2),c=r.n(u),l=r(42),f=r(241),d=r(924),p=(r.n(d),function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()),h=function(e){function t(e){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleChange=function(e,t){var n=e.target,o=n.value,a=r.props.maxLength,s=r.state.values.slice();o.length<=a?(s[t]=o,r.setNewValues(s)):o.length>a&&t<r.props.numberOfInputs-1&&(s[t+1]=o.substr(o.length-1,1),r.setNewValues(s))},r.handleKeyUp=function(e,t){if(8===e.keyCode&&0===e.target.value.length)for(var n=e.target.previousElementSibling;n&&null!==n;){if("input"===n.tagName.toLowerCase()){n.focus();break}n=n.previousElementSibling}else if(e.target.value.length===r.props.maxLength)for(var o=e.target.nextElementSibling;o&&null!==o;){if("input"===o.tagName.toLowerCase()){o.focus();break}o=o.nextElementSibling}},r.state={values:Array(e.numberOfInputs).fill("")},r}return a(t,e),p(t,[{key:"setNewValues",value:function(e){var t=this;this.setState({values:e},function(){t.props.input.onChange(t.state.values.join(""))})}},{key:"render",value:function(){var e=this,t=this.props,r=t.info,n=t.meta,o=t.label,a=t.customClass,s=Object(f.b)("ap-auto-tab-input",a),u=this.state.values.map(function(t,r){return i.a.createElement("input",{key:r,className:s(),onKeyUp:function(t){return e.handleKeyUp(t,r)},onChange:function(t){return e.handleChange(t,r)},value:e.state.values[r]})});return i.a.createElement("div",{className:"form-group"},"hidden"!==this.props.type&&i.a.createElement("label",{className:s("label")},o),u,r&&i.a.createElement("small",{className:"form-text-muted"},r),n.touched&&n.error&&i.a.createElement("span",{className:""+s("error")},n.error))}}]),t}(i.a.Component),m=function(e){return i.a.createElement(l.a,Object.assign({name:e.name,component:h},e))};m.defaultProps={maxLength:1},m.propTypes={name:c.a.string.isRequired,type:c.a.string,customClass:c.a.string,numberOfInputs:c.a.number.isRequired,maxLength:c.a.number},t.a=m},924:function(e,t,r){var n=r(925);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(671)(n,o);n.locals&&(e.exports=n.locals)},925:function(e,t,r){t=e.exports=r(20)(!1),t.push([e.i,".ap-auto-tab-input{width:3.2rem;height:3.2rem;margin:.5rem 1rem .5rem 0;border-radius:2px;text-align:center;font-size:1.4rem;color:var(--font__color-primary);background:var(--input__bg-color)}.ap-auto-tab-input__label{display:block;color:var(--font__color-secondary)}.ap-auto-tab-input__error{display:block;color:var(--input-error-text);padding-top:.5rem}.ap-auto-tab-input__form-text-muted{display:inline-block;color:var(--font__color-secondary);padding-top:.5rem}",""])}});