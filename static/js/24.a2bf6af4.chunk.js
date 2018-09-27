webpackJsonp([24],{1202:function(e,t,r){"use strict";var n=r(7),o=r(1203),i=r(1206),a=function(e){var t=e.transfer.fetching;return{transfers:Object(i.a)(e),fetching:t}};t.a=Object(n.connect)(a)(o.a)},1203:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(1),a=r.n(i),s=r(771),c=r(709),u=r(80),l=r(1204),d=(r.n(l),Object(u.b)("retail-transfer-history")),p=function(e,t){var r=e.transfers,n=e.fetching;return o.a.createElement("div",{className:d()},o.a.createElement("div",{className:d("header")},t.t("Transfer History")),o.a.createElement("div",{className:d("items")},function(){return n?o.a.createElement("div",{className:d("spinner")},o.a.createElement(s.a,{isInline:!0})):0!==r.length||n?r.map(function(e,t){return o.a.createElement("div",{key:t,className:d("item")},e)}):o.a.createElement("div",{className:d("item")},o.a.createElement(c.a,{name:"stop",customClass:d("icon")}),t.t("No Transfer History"))}()))};p.contextTypes={t:a.a.func.isRequired},t.a=p},1204:function(e,t,r){var n=r(1205);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(686)(n,o);n.locals&&(e.exports=n.locals)},1205:function(e,t,r){t=e.exports=r(27)(!1),t.push([e.i,".retail-transfer-history{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-shadow:var(--settings__card-box-shadow);box-shadow:var(--settings__card-box-shadow);border-radius:var(--settings__card-border-radius-size);overflow:hidden}.retail-transfer-history__header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:var(--settings__card-header-title-font-color);background:var(--settings__card-header-bg-color);font-size:var(--settings__card-header-title-font-size);letter-spacing:var(--settings__card-header-title-letter-spacing);line-height:normal;height:var(--settings__body-header-with-border-height);padding:var(--settings__card-header-padding);padding-left:var(--settings__body-header-title-padding-left);margin-bottom:1px;color:var(--settings__body-header-title-font-color);background:var(--component__header-bg-color);border-bottom:var(--settings__card-header-accent-border);border-top-left-radius:var(--settings__card-border-radius-size);border-top-right-radius:var(--settings__card-border-radius-size)}.retail-transfer-history__items{background:var(--table__bg-color)}.retail-transfer-history__item,.retail-transfer-history__spinner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:6.3rem;width:100%;padding-left:2.8rem;font-size:1.6rem;border-bottom:1px solid var(--border__color)}.retail-transfer-history__spinner{margin:0}.retail-transfer-history__item:last-child{border-bottom:none;border-radius:0 0 1rem 1rem}.retail-transfer-history__icon{margin-right:.5rem}",""])},1206:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var n=r(81),o=(r.n(n),r(51)),i=Object(n.createSelector)(function(e){return e.transfer.transfers},function(e){return Object(o.a)(e.map(function(e){return e.ReceiverUserName}))})},1207:function(e,t,r){var n=r(1208);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(686)(n,o);n.locals&&(e.exports=n.locals)},1208:function(e,t,r){t=e.exports=r(27)(!1),t.push([e.i,'.retail-user-contacts{width:100%;height:var(--settings__body-height);position:relative;z-index:0;background:var(--settings__body-bg-color);max-width:var(--settings__body-max-width);margin:var(--settings__body-margin);padding:var(--settings__body-padding)}.retail-user-contacts__block-with-text{max-width:calc(var(--retail-setting__body-max-width) / 1.5);color:var(--retail-user-contacts__header-text-color);background:var(--settings__body-header-bg-color);margin:var(--settings__body-header-margin);position:relative}.retail-user-contacts__block-with-text:before{display:var(--settings__accent-bar-display);content:"";background-image:var(--accent-bar__gradient);min-width:100vw;height:calc(100% + (var(--settings__body-header-margin) * 2) + (var(--settings__body-padding) * 4));position:absolute;z-index:-1;top:calc(((var(--settings__body-padding) * 2) + 2px) * -1);bottom:0;left:calc((var(--side-menu__item-width) + var(--settings__body-header-margin) + var(--settings__body-padding) + 2px) * -1);right:0}.retail-user-contacts__header-text{font-size:var(--settings__body-header-title-font-size);color:var(--settings__body-header-title-font-color);letter-spacing:var(--settings__body-header-title-letter-spacing);padding-bottom:var(--settings__body-header-title-padding-bottom)}.retail-user-contacts__text{font-size:var(--settings__body-header-sub-title-font-size);color:var(--settings__body-header-sub-title-font-color);letter-spacing:var(--settings__body-header-sub-title-letter-spacing);line-height:var(--settings__body-header-sub-title-line-height)}',""])},283:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r.n(n),i=r(1),a=r.n(i),s=r(80),c=r(1202),u=r(1207),l=(r.n(u),Object(s.b)("retail-user-contacts")),d=function(e,t){return o.a.createElement("div",{className:l()},o.a.createElement("div",{className:l("block-with-text")},o.a.createElement("div",{className:l("header-text")},t.t("Trading with Other On-Exchange Participants")),o.a.createElement("div",{className:l("text")},t.t("You can freely transfer currency with other participants on the exchange. Simply provide the email address for your contact during the \u201cSend\u201d or \u201cReceive\u201d process. If the email address is registered on the exchange, then the user will receive the transfer. If the email address is not registered, the user will get an invitation to join the exchange."))),o.a.createElement(c.a,null))};d.contextTypes={t:a.a.func.isRequired},t.default=d},708:function(e,t){function r(){for(var e={},t=0;t<arguments.length;t++){var r=arguments[t];for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}return e}e.exports=r},709:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(1),a=r.n(i),s=r(715),c=r(80),u=r(726),l=(r.n(u),r(728)),d=r.n(l),p=r(729),f=r.n(p),h=r(730),m=r.n(h),g=r(731),v=r.n(g),b=r(732),y=r.n(b),w=r(733),_=r.n(w),x=r(734),E=r.n(x),R=r(735),O=r.n(R),k=r(736),T=r.n(k),q=r(737),P=r.n(q),j=r(738),N=r.n(j),L=r(739),A=r.n(L),S=r(740),C=r.n(S),U=r(741),I=r.n(U),D=r(742),H=r.n(D),M=r(743),z=r.n(M),G=r(744),X=r.n(G),F=r(745),B=r.n(F),V=r(746),W=r.n(V),Z=r(747),$=r.n(Z),J=r(748),K=r.n(J),Y=r(749),Q=r.n(Y),ee=r(750),te=r.n(ee),re=r(751),ne=r.n(re),oe=r(752),ie=r.n(oe),ae=r(753),se=r.n(ae),ce=r(754),ue=r.n(ce),le=r(755),de=r.n(le),pe=r(756),fe=r.n(pe),he=r(757),me=r.n(he),ge=r(758),ve=r.n(ge),be=r(759),ye=r.n(be),we=r(760),_e=r.n(we),xe=r(761),Ee=r.n(xe),Re=r(762),Oe=r.n(Re),ke=r(763),Te=r.n(ke),qe=r(764),Pe=r.n(qe),je=r(765),Ne=r.n(je),Le=r(766),Ae=r.n(Le),Se=r(767),Ce=r.n(Se),Ue=r(768),Ie=r.n(Ue),De=r(769),He=r.n(De),Me=r(770),ze=r.n(Me),Ge={"user-settings":ne.a,"buy-sell":se.a,user:fe.a,notification:me.a,dashboard:de.a,trading:ue.a,wallet:ie.a,stop:d.a,balance:f.a,center:m.a,close:v.a,"close-inverse":y.a,"deposit-arrow":_.a,download:X.a,exchange:E.a,"generate-reports":O.a,check:T.a,checkbox:P.a,refresh:N.a,"withdraw-arrow":A.a,menu:C.a,"menu-toggle":I.a,key:H.a,bigKey:z.a,arrowPrevious:B.a,arrowNext:W.a,"simple-check":te.a,pending:Q.a,settings:K.a,alert:$.a,buy:ve.a,sell:ye.a,eye:_e.a,receive:Ee.a,send:Oe.a,deposit:Te.a,withdraw:Pe.a,info:Ne.a,copy:Ae.a,star:Ce.a,"logo-powered":Ie.a,"open-buy":He.a,"open-sell":ze.a},Xe=function(e){var t=e.name,r=e.customClass,n=e.classModifiers,i=Object(c.a)(n,t),a=Object(c.b)(["ap-icon",r]),u=Ge[t];return o.a.createElement(s.a,{src:u,className:a(null,i)})};Xe.defaultProps={name:"",customClass:"custom-icon",classModifiers:"",disabled:!1},Xe.propTypes={name:a.a.string,customClass:a.a.string,classModifiers:a.a.oneOfType([a.a.string,a.a.arrayOf(a.a.string)]),disabled:a.a.bool},t.a=Xe},710:function(e,t,r){"use strict";function n(e){this.request=e.request,this.xhr=e.xhr,this.headers=e.headers||{},this.status=e.status||0,this.text=e.text,this.body=e.body,this.contentType=e.contentType,this.isHttpError=e.status>=400}var o=r(711),i=r(712);n.prototype.header=o.prototype.header,n.fromRequest=function(e){return new n(i(e))},e.exports=n},711:function(e,t,r){"use strict";function n(e){var t="string"===typeof e?{url:e}:e||{};this.method=t.method?t.method.toUpperCase():"GET",this.url=t.url,this.headers=t.headers||{},this.body=t.body,this.timeout=t.timeout||0,this.errorOn404=null==t.errorOn404||t.errorOn404,this.onload=t.onload,this.onerror=t.onerror}n.prototype.abort=function(){if(!this.aborted)return this.aborted=!0,this.xhr.abort(),this},n.prototype.header=function(e,t){var r;for(r in this.headers)if(this.headers.hasOwnProperty(r)&&e.toLowerCase()===r.toLowerCase()){if(1===arguments.length)return this.headers[r];delete this.headers[r];break}if(null!=t)return this.headers[e]=t,t},e.exports=n},712:function(e,t,r){"use strict";var n=r(708);e.exports=function(e){var t=e.xhr,r={request:e,xhr:t};try{var o,i,a,s={};if(t.getAllResponseHeaders)for(o=t.getAllResponseHeaders().split("\n"),i=0;i<o.length;i++)(a=o[i].match(/\s*([^\s]+):\s+([^\s]+)/))&&(s[a[1]]=a[2]);r=n(r,{status:t.status,contentType:t.contentType||t.getResponseHeader&&t.getResponseHeader("Content-Type"),headers:s,text:t.responseText,body:t.response||t.responseText})}catch(e){}return r}},713:function(e,t,r){"use strict";e.exports=function(e){var t,r=!1;return function(){return r||(r=!0,t=e.apply(this,arguments)),t}}},715:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=r(0),s=r.n(a),c=r(1),u=r.n(c),l=r(716),d=r.n(l),p=r(721),f=r.n(p),h=r(723),m=function(){function e(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),v=d.a.use(f.a),b={PENDING:"pending",LOADING:"loading",LOADED:"loaded",FAILED:"failed",UNSUPPORTED:"unsupported"},y={},w={},_=function(e){function t(e){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleLoad=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e)return void r.fail(e);r.isActive&&r.setState({loadedText:t.text,status:b.LOADED},function(){r.props.onLoad(r.props.src,n)})},r.state={status:b.PENDING},r.isActive=!1,r}return i(t,e),g(t,[{key:"componentWillMount",value:function(){this.isActive=!0}},{key:"componentDidMount",value:function(){this.state.status===b.PENDING&&(this.props.supportTest()?this.props.src?this.startLoad():this.fail(Object(h.a)("Missing source")):this.fail(Object(h.e)()))}},{key:"componentDidUpdate",value:function(e){e.src!==this.props.src&&(this.props.src?this.startLoad():this.fail(Object(h.a)("Missing source")))}},{key:"componentWillUnmount",value:function(){this.isActive=!1}},{key:"getFile",value:function(e){var t=this,r=this.props,n=r.cacheGetRequests,o=r.src;if(n){if(w[o]){var i=m(w[o],2),a=i[0],s=i[1];e(a,s,!0)}y[o]||(y[o]=[],v.get(o,function(e,r){y[o].forEach(function(n){w[o]=[e,r],o===t.props.src&&n(e,r)})})),y[o].push(e)}else v.get(o,function(r,n){o===t.props.src&&e(r,n)})}},{key:"fail",value:function(e){var t=this,r=e.isUnsupportedBrowserError?b.UNSUPPORTED:b.FAILED;this.isActive&&this.setState({status:r},function(){"function"===typeof t.props.onError&&t.props.onError(e)})}},{key:"startLoad",value:function(){this.isActive&&this.setState({status:b.LOADING},this.load)}},{key:"load",value:function(){var e=this.props.src.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);return e?this.handleLoad(null,{text:e[1]?atob(e[2]):decodeURIComponent(e[2])}):this.getFile(this.handleLoad)}},{key:"getClassName",value:function(){var e="isvg "+this.state.status;return this.props.className&&(e+=" "+this.props.className),e}},{key:"processSVG",value:function(e){var t=this.props,r=t.uniquifyIDs,n=t.uniqueHash,o=t.baseURL;return r?Object(h.d)(e,n||Object(h.c)(),o):e}},{key:"renderContents",value:function(){switch(this.state.status){case b.UNSUPPORTED:case b.FAILED:return this.props.children;default:return this.props.preloader}}},{key:"render",value:function(){var e=void 0,t=void 0;return this.state.loadedText?t={__html:this.processSVG(this.state.loadedText)}:e=this.renderContents(),this.props.wrapper({style:this.props.style,className:this.getClassName(),dangerouslySetInnerHTML:t},e)}}]),t}(s.a.PureComponent);_.propTypes={baseURL:u.a.string,cacheGetRequests:u.a.bool,children:u.a.node,className:u.a.string,onError:u.a.func,onLoad:u.a.func,preloader:u.a.node,src:u.a.string.isRequired,style:u.a.object,supportTest:u.a.func,uniqueHash:u.a.string,uniquifyIDs:u.a.bool,wrapper:u.a.func},_.defaultProps={baseURL:"",cacheGetRequests:!1,onLoad:function(){},supportTest:h.b,uniquifyIDs:!0,wrapper:s.a.createFactory("span")},t.a=_},716:function(e,t,r){"use strict";function n(e,t){function r(r,n){var a,u,h,m,g,v;for(r=new d(p(e,r)),i=0;i<t.length;i++)u=t[i],u.processRequest&&u.processRequest(r);for(i=0;i<t.length;i++)if(u=t[i],u.createXHR){a=u.createXHR(r);break}a=a||new s,r.xhr=a,h=f(c(function(e){clearTimeout(g),a.onload=a.onerror=a.onabort=a.onreadystatechange=a.ontimeout=a.onprogress=null;var s=o(r,e),c=s||l.fromRequest(r);for(i=0;i<t.length;i++)u=t[i],u.processResponse&&u.processResponse(c);s&&r.onerror&&r.onerror(s),!s&&r.onload&&r.onload(c),n&&n(s,s?void 0:c)})),v="onload"in a&&"onerror"in a,a.onload=function(){h()},a.onerror=h,a.onabort=function(){h()},a.onreadystatechange=function(){if(4===a.readyState){if(r.aborted)return h();if(!v){var e;try{e=a.status}catch(t){}var t=0===e?new Error("Internal XHR Error"):null;return h(t)}}},a.ontimeout=function(){},a.onprogress=function(){},a.open(r.method,r.url),r.timeout&&(g=setTimeout(function(){r.timedOut=!0,h();try{a.abort()}catch(e){}},r.timeout));for(m in r.headers)r.headers.hasOwnProperty(m)&&a.setRequestHeader(m,r.headers[m]);return a.send(r.body),r}e=e||{},t=t||[];var a,h=["get","post","put","head","patch","delete"];for(i=0;i<h.length;i++)a=h[i],r[a]=function(e){return function(t,n){return t=new d(t),t.method=e,r(t,n)}}(a);return r.plugins=function(){return t},r.defaults=function(r){return r?n(p(e,r),t):e},r.use=function(){var r=Array.prototype.slice.call(arguments,0);return n(e,t.concat(r))},r.bare=function(){return n()},r.Request=d,r.Response=l,r.RequestError=u,r}function o(e,t){if(e.aborted)return h("Request aborted",e,{name:"Abort"});if(e.timedOut)return h("Request timeout",e,{name:"Timeout"});var r,n=e.xhr,o=Math.floor(n.status/100);switch(o){case 0:case 2:if(!t)return;return h(t.message,e);case 4:if(404===n.status&&!e.errorOn404)return;r="Client";break;case 5:r="Server";break;default:r="HTTP"}var i=r+" Error: The server returned a status of "+n.status+' for the request "'+e.method.toUpperCase()+" "+e.url+'"';return h(i,e)}var i,a=r(717),s=r(718),c=r(719),u=r(720),l=r(710),d=r(711),p=r(708),f=r(713),h=u.create;e.exports=n({},[a])},717:function(e,t,r){"use strict";e.exports={processRequest:function(e){e.url=e.url.replace(/[^%]+/g,function(e){return encodeURI(e)})}}},718:function(e,t){e.exports=window.XMLHttpRequest},719:function(e,t,r){"use strict";e.exports=function(e){return function(){var t=Array.prototype.slice.call(arguments,0),r=function(){return e.apply(null,t)};setTimeout(r,0)}}},720:function(e,t,r){"use strict";function n(e,t){var r=new Error(e);r.name="RequestError",this.name=r.name,this.message=r.message,r.stack&&(this.stack=r.stack),this.toString=function(){return this.message};for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n])}var o=r(710),i=r(712),a=r(708);n.prototype=a(Error.prototype),n.prototype.constructor=n,n.create=function(e,t,r){var a=new n(e,r);return o.call(a,i(t)),a},e.exports=n},721:function(e,t,r){"use strict";var n=r(722),o=r(713),i=!1,a=o(function(){return"undefined"!==typeof window&&null!==window&&window.XMLHttpRequest&&"withCredentials"in new window.XMLHttpRequest});e.exports={createXHR:function(e){var t,r,o;if("undefined"!==typeof window&&null!==window&&(t=n(e.url),r=n(window.location.href),t.host&&(t.protocol!==r.protocol||t.host!==r.host||t.port!==r.port))){if(!i&&e.headers)for(o in e.headers)if(e.headers.hasOwnProperty(o)){i=!0,window&&window.console&&window.console.warn&&window.console.warn("Request headers are ignored in old IE when using the oldiexdomain plugin.");break}if(window.XDomainRequest&&!a()){var s=new window.XDomainRequest;return s.setRequestHeader=function(){},s}}}}},722:function(e,t){(function(){var t,r,n,o={}.hasOwnProperty;t=/^(?:(?:([^:\/?\#]+:)\/+|(\/\/))(?:([a-z0-9-\._~%]+)(?::([a-z0-9-\._~%]+))?@)?(([a-z0-9-\._~%!$&'()*+,;=]+)(?::([0-9]+))?)?)?([^?\#]*?)(\?[^\#]*)?(\#.*)?$/,n=function(e,t){return n.URL.parse(e,t)},n.URL=function(){function e(e){var t,n,i;for(t in r)o.call(r,t)&&(n=r[t],this[t]=null!=(i=e[t])?i:n);this.host||(this.host=this.hostname&&this.port?this.hostname+":"+this.port:this.hostname?this.hostname:""),this.origin||(this.origin=this.protocol?this.protocol+"//"+this.host:""),this.isAbsolutePathRelative=!this.host&&"/"===this.pathname.charAt(0),this.isPathRelative=!this.host&&"/"!==this.pathname.charAt(0),this.isRelative=this.isSchemeRelative||this.isAbsolutePathRelative||this.isPathRelative,this.isAbsolute=!this.isRelative}return e.parse=function(e){var r,o,i;return r=e.toString().match(t),o=r[8]||"",i=r[1],new n.URL({protocol:i,username:r[3],password:r[4],hostname:r[6],port:r[7],pathname:i&&"/"!==o.charAt(0)?"/"+o:o,search:r[9],hash:r[10],isSchemeRelative:null!=r[2]})},e}(),r={protocol:"",username:"",password:"",host:"",hostname:"",port:"",pathname:"",search:"",hash:"",origin:"",isSchemeRelative:!1},e.exports=n}).call(this)},723:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}r.d(t,"b",function(){return l}),r.d(t,"c",function(){return d}),r.d(t,"d",function(){return p}),r.d(t,"e",function(){return m}),r.d(t,"a",function(){return g});var a=r(724),s=r.n(a),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=s()(function(){if(!document)return!1;var e=document.createElement("div");return e.innerHTML="<svg />",e.firstChild&&"http://www.w3.org/2000/svg"===e.firstChild.namespaceURI}),l=s()(function(){return!(!u()||"undefined"===typeof window||null===window)&&(window.XMLHttpRequest||window.XDomainRequest)}),d=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,t="abcdefghijklmnopqrstuvwxyz",r=t+t.toUpperCase()+"1234567890",n="",o=0;o<e;o++)n+=function(e){return e[Math.floor(Math.random()*e.length)]}(r);return n},p=function(){var e=function(e){return"(?:(?:\\s|\\:)"+e+")"},t=new RegExp("(?:("+e("id")+')="([^"]+)")|(?:('+e("href")+"|"+e("role")+"|"+e("arcrole")+')="\\#([^"]+)")|(?:="url\\(\\#([^\\)]+)\\)")|(?:url\\(\\#([^\\)]+)\\))',"g");return function(e,r,n){var o=function(e){return e+"___"+r};return e.replace(t,function(e,t,r,i,a,s,c){return r?t+'="'+o(r)+'"':a?i+'="'+n+"#"+o(a)+'"':s?'="url('+n+"#"+o(s)+')"':c?"url("+n+"#"+o(c)+")":void 0})}}(),f=function(e){function t(e){var r;n(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.name="InlineSVGError",i.isSupportedBrowser=!0,i.isConfigurationError=!1,i.isUnsupportedBrowserError=!1,i.message=e,r=i,o(i,r)}return i(t,e),t}(Error),h=function(e,t){var r=new f(e);return c({},r,t)},m=function(e){var t=e;return t||(t="Unsupported Browser"),h(t,{isSupportedBrowser:!1,isUnsupportedBrowserError:!0})},g=function(e){return h(e,{isConfigurationError:!0})}},724:function(e,t,r){function n(e){var t=function(){return t.called?t.value:(t.called=!0,t.value=e.apply(this,arguments))};return t.called=!1,t}function o(e){var t=function(){if(t.called)throw new Error(t.onceError);return t.called=!0,t.value=e.apply(this,arguments)},r=e.name||"Function wrapped with `once`";return t.onceError=r+" shouldn't be called more than once",t.called=!1,t}var i=r(725);e.exports=i(n),e.exports.strict=i(o),n.proto=n(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return n(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return o(this)},configurable:!0})})},725:function(e,t){function r(e,t){function n(){for(var t=new Array(arguments.length),r=0;r<t.length;r++)t[r]=arguments[r];var n=e.apply(this,t),o=t[t.length-1];return"function"===typeof n&&n!==o&&Object.keys(o).forEach(function(e){n[e]=o[e]}),n}if(e&&t)return r(e)(t);if("function"!==typeof e)throw new TypeError("need wrapper function");return Object.keys(e).forEach(function(t){n[t]=e[t]}),n}e.exports=r},726:function(e,t,r){var n=r(727);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(686)(n,o);n.locals&&(e.exports=n.locals)},727:function(e,t,r){t=e.exports=r(27)(!1),t.push([e.i,".ap-icon{display:inline-block;width:10px}.ap-icon--success{color:var(--success)}.ap-icon--info{color:var(--information__color)}.ap-icon--danger{color:var(--danger__color);height:1rem}.ap-icon--big{width:14px}.ap-icon--center{width:12px}.ap-icon--deposit-arrow,.ap-icon--withdraw-arrow{width:11px}.ap-icon--balance,.ap-icon--exchange,.ap-icon--settings{width:16px;margin-top:3px;margin-bottom:-3px}.ap-icon--generate-report{width:12px}.ap-icon--key{width:16px}.ap-icon--menu{width:24px}.ap-icon--refresh{width:15px}.ap-icon--widthraw-arrow{width:11px}",""])},728:function(e,t,r){e.exports=r.p+"static/media/icon-stop.12973336.svg"},729:function(e,t,r){e.exports=r.p+"static/media/icon-balance.25d500b4.svg"},730:function(e,t,r){e.exports=r.p+"static/media/icon-center.d3865558.svg"},731:function(e,t,r){e.exports=r.p+"static/media/icon-close.f5458b61.svg"},732:function(e,t,r){e.exports=r.p+"static/media/icon-close-inverse.241501cd.svg"},733:function(e,t,r){e.exports=r.p+"static/media/icon-deposit-arrow.fb9cee72.svg"},734:function(e,t,r){e.exports=r.p+"static/media/icon-exchange.a6cdeb82.svg"},735:function(e,t,r){e.exports=r.p+"static/media/icon-generate-reports.c25e875a.svg"},736:function(e,t,r){e.exports=r.p+"static/media/icon-check.4443b294.svg"},737:function(e,t,r){e.exports=r.p+"static/media/icon-checkbox.6ff75c6f.svg"},738:function(e,t,r){e.exports=r.p+"static/media/icon-refresh.36718f54.svg"},739:function(e,t,r){e.exports=r.p+"static/media/icon-withdraw-arrow.4644456c.svg"},740:function(e,t,r){e.exports=r.p+"static/media/icon-menu.ff0128f9.svg"},741:function(e,t,r){e.exports=r.p+"static/media/icon-menu-toggle.ad89aeb9.svg"},742:function(e,t,r){e.exports=r.p+"static/media/icon-key.c3b5c80f.svg"},743:function(e,t,r){e.exports=r.p+"static/media/icon-key-big.0d56bc9b.svg"},744:function(e,t,r){e.exports=r.p+"static/media/icon-download.ebdd4d2b.svg"},745:function(e,t,r){e.exports=r.p+"static/media/icon-arrow-prev.ec3c7dc9.svg"},746:function(e,t,r){e.exports=r.p+"static/media/icon-arrow-next.02ae871b.svg"},747:function(e,t,r){e.exports=r.p+"static/media/icon-alert.b09e6a92.svg"},748:function(e,t,r){e.exports=r.p+"static/media/icon-settings.d15941a5.svg"},749:function(e,t,r){e.exports=r.p+"static/media/icon-pending.e2938acc.svg"},750:function(e,t,r){e.exports=r.p+"static/media/icon-simple-check.03179922.svg"},751:function(e,t,r){e.exports=r.p+"static/media/icon-nav-settings.18d95955.svg"},752:function(e,t,r){e.exports=r.p+"static/media/icon-nav-wallet.057192aa.svg"},753:function(e,t,r){e.exports=r.p+"static/media/icon-nav-buy-sell.5ff447ad.svg"},754:function(e,t,r){e.exports=r.p+"static/media/icon-nav-trading.6846b323.svg"},755:function(e,t,r){e.exports=r.p+"static/media/icon-nav-dashboard-on.da8d7604.svg"},756:function(e,t,r){e.exports=r.p+"static/media/icon-nav-user.4473673a.svg"},757:function(e,t,r){e.exports=r.p+"static/media/icon-nav-notification.84f07c0e.svg"},758:function(e,t,r){e.exports=r.p+"static/media/icon-buy.4736e26a.svg"},759:function(e,t,r){e.exports=r.p+"static/media/icon-sell.749581f6.svg"},760:function(e,t,r){e.exports=r.p+"static/media/icon-eye.f3c39bfb.svg"},761:function(e,t,r){e.exports=r.p+"static/media/icon-receive.f8805981.svg"},762:function(e,t,r){e.exports=r.p+"static/media/icon-send.0eae48e8.svg"},763:function(e,t,r){e.exports=r.p+"static/media/icon-deposit.59dc6048.svg"},764:function(e,t,r){e.exports=r.p+"static/media/icon-withdraw.ce30850a.svg"},765:function(e,t,r){e.exports=r.p+"static/media/icon-info.6448a8d0.svg"},766:function(e,t,r){e.exports=r.p+"static/media/icon-copy.9dc9a9a7.svg"},767:function(e,t,r){e.exports=r.p+"static/media/icon-star.9e54355c.svg"},768:function(e,t,r){e.exports=r.p+"static/media/logo-powered.7f6a585c.svg"},769:function(e,t,r){e.exports=r.p+"static/media/icon-open-buy-big.ec282aaa.svg"},770:function(e,t,r){e.exports=r.p+"static/media/icon-open-sell-big.04ef7f4d.svg"},771:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(1),a=r.n(i),s=r(80),c=r(775),u=(r.n(c),Object(s.b)("spinner")),l=function(e){var t=e.isVisible,r=e.isInline,n=e.text,i=e.customClass,a=i||function(){return""};return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement("div",{className:u("container",r&&"inline")+" "+a("spinner-container")},o.a.createElement("div",{className:u("circle",r&&"inline")+" "+a("spinner-circle")}),n&&o.a.createElement("div",{className:u("text")},n)))};l.propTypes={isInline:a.a.bool,isVisible:a.a.bool.isRequired,customClass:a.a.func,text:a.a.string},l.defaultProps={isVisible:!0},t.a=l},775:function(e,t,r){var n=r(776);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(686)(n,o);n.locals&&(e.exports=n.locals)},776:function(e,t,r){t=e.exports=r(27)(!1),t.push([e.i,".spinner__circle,.spinner__circle:after{border-radius:50%;width:2.5rem;height:2.5rem}.spinner__circle{margin:auto;-webkit-transform:translateZ(0);transform:translateZ(0);border-top:.2rem solid var(--spinner__color-secondary);border-right:.2rem solid var(--spinner__color-secondary);border-bottom:.2rem solid var(--spinner__color-secondary);border-left:.2rem solid var(--spinner__color-primary);-webkit-animation:loading 1.1s infinite linear;animation:loading 1.1s infinite linear}.spinner__circle--inline{border-top:.2rem solid var(--spinner__color-tertiary);border-right:.2rem solid var(--spinner__color-tertiary);border-bottom:.2rem solid var(--spinner__color-tertiary)}.spinner__container{position:absolute;display:-ms-flexbox;display:flex;margin:1rem 1.75rem;height:3rem;line-height:3rem}.spinner__container--inline{position:relative;margin:0;background:transparent}.spinner__text{color:var(--spinner__font-color);margin-left:1rem;display:inline-block}@-webkit-keyframes loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])}});