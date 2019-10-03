webpackJsonp([41],{1589:function(e,t,r){"use strict";var n=r(9),o=r(1590),i=r(1593),a=function(e){var t=e.transfer.fetching;return{transfers:Object(i.a)(e),fetching:t}};t.a=Object(n.connect)(a)(o.a)},1590:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(2),a=r.n(i),s=r(819),c=r(730),u=r(264),d=r(1591),l=(r.n(d),Object(u.b)("retail-transfer-history")),p=function(e,t){var r=e.transfers,n=e.fetching;return o.a.createElement("div",{className:l()},o.a.createElement("div",{className:l("header")},t.t("Transfer History")),o.a.createElement("div",{className:l("items")},function(){return n?o.a.createElement("div",{className:l("spinner")},o.a.createElement(s.a,{isInline:!0})):0!==r.length||n?r.map(function(e,t){return o.a.createElement("div",{key:t,className:l("item")},e)}):o.a.createElement("div",{className:l("item")},o.a.createElement(c.a,{name:"stop",customClass:l("icon")}),t.t("No Transfer History"))}()))};p.contextTypes={t:a.a.func.isRequired},t.a=p},1591:function(e,t,r){var n=r(1592);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(693)(n,o);n.locals&&(e.exports=n.locals)},1592:function(e,t,r){t=e.exports=r(25)(!1),t.push([e.i,".retail-transfer-history{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-shadow:var(--settings__card-box-shadow);box-shadow:var(--settings__card-box-shadow);border-radius:var(--settings__card-border-radius-size);overflow:hidden}.retail-transfer-history__header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:var(--settings__card-header-title-font-color);background:var(--settings__card-header-bg-color);font-size:var(--settings__card-header-title-font-size);letter-spacing:var(--settings__card-header-title-letter-spacing);line-height:normal;height:var(--settings__body-header-with-border-height);padding:var(--settings__card-header-padding);padding-left:var(--settings__body-header-title-padding-left);background:var(--component__header-bg-color);border-bottom:var(--settings__card-header-accent-border);border-top-left-radius:var(--settings__card-border-radius-size);border-top-right-radius:var(--settings__card-border-radius-size)}.retail-transfer-history__items{background:var(--table__bg-color)}.retail-transfer-history__item,.retail-transfer-history__spinner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:6.3rem;width:100%;padding-left:2.8rem;font-size:1.6rem;border-bottom:1px solid var(--border__color)}.retail-transfer-history__spinner{margin:0}.retail-transfer-history__item:last-child{border-bottom:none;border-radius:0 0 1rem 1rem}.retail-transfer-history__icon{margin-right:.5rem}",""])},1593:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var n=r(57),o=(r.n(n),r(66)),i=Object(n.createSelector)(function(e){return e.transfer.transfers},function(e){return Object(o.a)(e.map(function(e){return e.ReceiverUserName}))})},1594:function(e,t,r){var n=r(1595);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(693)(n,o);n.locals&&(e.exports=n.locals)},1595:function(e,t,r){t=e.exports=r(25)(!1),t.push([e.i,'.retail-user-contacts{width:100%;height:var(--settings__body-height);position:relative;z-index:0;background:var(--settings__body-bg-color);max-width:var(--settings__body-max-width);margin:var(--settings__body-margin);padding:var(--settings__body-padding)}.retail-user-contacts__block-with-text{max-width:calc(var(--retail-setting__body-max-width) / 1.5);color:var(--retail-user-contacts__header-text-color);background:var(--settings__body-header-bg-color);margin:var(--settings__body-header-margin);position:relative}.retail-user-contacts__block-with-text:before{display:var(--settings__accent-bar-display);content:"";background-image:var(--accent-bar__gradient);min-width:100vw;height:calc(100% + (var(--settings__body-header-margin) * 2) + (var(--settings__body-padding) * 4));position:absolute;z-index:-1;top:calc(((var(--settings__body-padding) * 2) + 2px) * -1);bottom:0;left:calc((var(--side-menu__item-width) + var(--settings__body-header-margin) + var(--settings__body-padding) + 2px) * -1);right:0}.retail-user-contacts__header-text{font-size:var(--settings__body-header-title-font-size);color:var(--settings__body-header-title-font-color);letter-spacing:var(--settings__body-header-title-letter-spacing);padding-bottom:var(--settings__body-header-title-padding-bottom)}.retail-user-contacts__text{font-size:var(--settings__body-header-sub-title-font-size);color:var(--settings__body-header-sub-title-font-color);letter-spacing:var(--settings__body-header-sub-title-letter-spacing);line-height:var(--settings__body-header-sub-title-line-height)}@media only screen and (max-width:48rem){.retail-user-contacts{height:unset;-ms-flex:1 1;flex:1 1}.retail-user-contacts__block-with-text:before{left:calc((var(--settings__body-header-margin) + var(--settings__body-padding)) * -1)}}',""])},713:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r.n(n),i=r(2),a=r.n(i),s=r(264),c=r(1589),u=r(1594),d=(r.n(u),Object(s.b)("retail-user-contacts")),l=function(e,t){return o.a.createElement("div",{className:d()},o.a.createElement("div",{className:d("block-with-text")},o.a.createElement("div",{className:d("header-text")},t.t("Trading with Other On-Exchange Participants")),o.a.createElement("div",{className:d("text")},t.t("You can freely transfer currency with other participants on the exchange. Simply provide the email address for your contact during the \u201cSend\u201d or \u201cReceive\u201d process. If the email address is registered on the exchange, then the user will receive the transfer. If the email address is not registered, the user will get an invitation to join the exchange."))),o.a.createElement(c.a,null))};l.contextTypes={t:a.a.func.isRequired},t.default=l},730:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(2),a=r.n(i),s=r(747),c=r(264),u=r(762),d=(r.n(u),r(764)),l=r.n(d),p=r(765),f=r.n(p),h=r(766),g=r.n(h),m=r(767),v=r.n(m),b=r(768),y=r.n(b),w=r(769),x=r.n(w),_=r(770),E=r.n(_),R=r(771),O=r.n(R),k=r(772),T=r.n(k),P=r(773),j=r.n(P),q=r(774),N=r.n(q),L=r(775),C=r.n(L),A=r(776),S=r.n(A),U=r(777),I=r.n(U),D=r(778),H=r.n(D),M=r(779),z=r.n(M),G=r(780),X=r.n(G),B=r(781),F=r.n(B),V=r(782),W=r.n(V),Z=r(783),$=r.n(Z),J=r(784),K=r.n(J),Y=r(785),Q=r.n(Y),ee=r(786),te=r.n(ee),re=r(787),ne=r.n(re),oe=r(788),ie=r.n(oe),ae=r(789),se=r.n(ae),ce=r(790),ue=r.n(ce),de=r(791),le=r.n(de),pe=r(792),fe=r.n(pe),he=r(793),ge=r.n(he),me=r(794),ve=r.n(me),be=r(795),ye=r.n(be),we=r(796),xe=r.n(we),_e=r(797),Ee=r.n(_e),Re=r(798),Oe=r.n(Re),ke=r(799),Te=r.n(ke),Pe=r(800),je=r.n(Pe),qe=r(801),Ne=r.n(qe),Le=r(802),Ce=r.n(Le),Ae=r(803),Se=r.n(Ae),Ue=r(804),Ie=r.n(Ue),De=r(805),He=r.n(De),Me=r(806),ze=r.n(Me),Ge=r(807),Xe=r.n(Ge),Be=r(808),Fe=r.n(Be),Ve=r(809),We=r.n(Ve),Ze=r(810),$e=r.n(Ze),Je=r(811),Ke=r.n(Je),Ye=r(812),Qe=r.n(Ye),et=r(813),tt=r.n(et),rt=r(814),nt=r.n(rt),ot=r(815),it=r.n(ot),at={caretPrevious:l.a,caretNext:f.a,doubleCaretPrevious:g.a,doubleCaretNext:v.a,"user-settings":le.a,"buy-sell":ge.a,user:xe.a,notification:Ee.a,dashboard:ye.a,trading:ve.a,wallet:fe.a,stop:y.a,balance:x.a,center:E.a,close:O.a,"close-inverse":T.a,"deposit-arrow":j.a,download:K.a,exchange:N.a,"generate-reports":C.a,check:S.a,checkbox:I.a,refresh:H.a,"withdraw-arrow":z.a,menu:X.a,"menu-toggle":F.a,key:W.a,bigKey:$.a,arrowPrevious:Q.a,arrowNext:te.a,"simple-check":ue.a,pending:se.a,settings:ie.a,alert:ne.a,buy:Oe.a,sell:Te.a,eye:je.a,receive:Ne.a,receiveWithBorder:Ce.a,send:Se.a,sendWithBorder:Ie.a,deposit:He.a,depositWithBorder:ze.a,withdraw:Xe.a,withdrawWithBorder:Fe.a,info:We.a,copy:$e.a,star:Ke.a,"logo-powered":Qe.a,"open-buy":tt.a,"open-sell":nt.a,calendar:it.a},st=function(e){var t=e.name,r=e.customClass,n=e.classModifiers,i=Object(c.a)(n,t),a=Object(c.b)(["ap-icon",r]),u=at[t];return o.a.createElement(s.a,{src:u,className:a(null,i)})};st.defaultProps={name:"",customClass:"custom-icon",classModifiers:"",disabled:!1},st.propTypes={name:a.a.string,customClass:a.a.string,classModifiers:a.a.oneOfType([a.a.string,a.a.arrayOf(a.a.string)]),disabled:a.a.bool},t.a=st},733:function(e,t){function r(){for(var e={},t=0;t<arguments.length;t++){var r=arguments[t];for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}return e}e.exports=r},735:function(e,t,r){"use strict";function n(e){this.request=e.request,this.xhr=e.xhr,this.headers=e.headers||{},this.status=e.status||0,this.text=e.text,this.body=e.body,this.contentType=e.contentType,this.isHttpError=e.status>=400}var o=r(736),i=r(737);n.prototype.header=o.prototype.header,n.fromRequest=function(e){return new n(i(e))},e.exports=n},736:function(e,t,r){"use strict";function n(e){var t="string"===typeof e?{url:e}:e||{};this.method=t.method?t.method.toUpperCase():"GET",this.url=t.url,this.headers=t.headers||{},this.body=t.body,this.timeout=t.timeout||0,this.errorOn404=null==t.errorOn404||t.errorOn404,this.onload=t.onload,this.onerror=t.onerror}n.prototype.abort=function(){if(!this.aborted)return this.aborted=!0,this.xhr.abort(),this},n.prototype.header=function(e,t){var r;for(r in this.headers)if(this.headers.hasOwnProperty(r)&&e.toLowerCase()===r.toLowerCase()){if(1===arguments.length)return this.headers[r];delete this.headers[r];break}if(null!=t)return this.headers[e]=t,t},e.exports=n},737:function(e,t,r){"use strict";var n=r(733);e.exports=function(e){var t=e.xhr,r={request:e,xhr:t};try{var o,i,a,s={};if(t.getAllResponseHeaders)for(o=t.getAllResponseHeaders().split("\n"),i=0;i<o.length;i++)(a=o[i].match(/\s*([^\s]+):\s+([^\s]+)/))&&(s[a[1]]=a[2]);r=n(r,{status:t.status,contentType:t.contentType||t.getResponseHeader&&t.getResponseHeader("Content-Type"),headers:s,text:t.responseText,body:t.response||t.responseText})}catch(e){}return r}},738:function(e,t,r){"use strict";e.exports=function(e){var t,r=!1;return function(){return r||(r=!0,t=e.apply(this,arguments)),t}}},747:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=r(0),s=r.n(a),c=r(2),u=r.n(c),d=r(752),l=r.n(d),p=r(757),f=r.n(p),h=r(759),g=function(){function e(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),v=l.a.use(f.a),b={PENDING:"pending",LOADING:"loading",LOADED:"loaded",FAILED:"failed",UNSUPPORTED:"unsupported"},y={},w={},x=function(e){function t(e){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleLoad=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e)return void r.fail(e);r.isActive&&r.setState({loadedText:t.text,status:b.LOADED},function(){r.props.onLoad(r.props.src,n)})},r.state={status:b.PENDING},r.isActive=!1,r}return i(t,e),m(t,[{key:"componentWillMount",value:function(){this.isActive=!0}},{key:"componentDidMount",value:function(){this.state.status===b.PENDING&&(this.props.supportTest()?this.props.src?this.startLoad():this.fail(Object(h.a)("Missing source")):this.fail(Object(h.e)()))}},{key:"componentDidUpdate",value:function(e){e.src!==this.props.src&&(this.props.src?this.startLoad():this.fail(Object(h.a)("Missing source")))}},{key:"componentWillUnmount",value:function(){this.isActive=!1}},{key:"getFile",value:function(e){var t=this,r=this.props,n=r.cacheGetRequests,o=r.src;if(n){if(w[o]){var i=g(w[o],2),a=i[0],s=i[1];e(a,s,!0)}y[o]||(y[o]=[],v.get(o,function(e,r){y[o].forEach(function(n){w[o]=[e,r],o===t.props.src&&n(e,r)})})),y[o].push(e)}else v.get(o,function(r,n){o===t.props.src&&e(r,n)})}},{key:"fail",value:function(e){var t=this,r=e.isUnsupportedBrowserError?b.UNSUPPORTED:b.FAILED;this.isActive&&this.setState({status:r},function(){"function"===typeof t.props.onError&&t.props.onError(e)})}},{key:"startLoad",value:function(){this.isActive&&this.setState({status:b.LOADING},this.load)}},{key:"load",value:function(){var e=this.props.src.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);return e?this.handleLoad(null,{text:e[1]?atob(e[2]):decodeURIComponent(e[2])}):this.getFile(this.handleLoad)}},{key:"getClassName",value:function(){var e="isvg "+this.state.status;return this.props.className&&(e+=" "+this.props.className),e}},{key:"processSVG",value:function(e){var t=this.props,r=t.uniquifyIDs,n=t.uniqueHash,o=t.baseURL;return r?Object(h.d)(e,n||Object(h.c)(),o):e}},{key:"renderContents",value:function(){switch(this.state.status){case b.UNSUPPORTED:case b.FAILED:return this.props.children;default:return this.props.preloader}}},{key:"render",value:function(){var e=void 0,t=void 0;return this.state.loadedText?t={__html:this.processSVG(this.state.loadedText)}:e=this.renderContents(),this.props.wrapper({style:this.props.style,className:this.getClassName(),dangerouslySetInnerHTML:t},e)}}]),t}(s.a.PureComponent);x.propTypes={baseURL:u.a.string,cacheGetRequests:u.a.bool,children:u.a.node,className:u.a.string,onError:u.a.func,onLoad:u.a.func,preloader:u.a.node,src:u.a.string.isRequired,style:u.a.object,supportTest:u.a.func,uniqueHash:u.a.string,uniquifyIDs:u.a.bool,wrapper:u.a.func},x.defaultProps={baseURL:"",cacheGetRequests:!1,onLoad:function(){},supportTest:h.b,uniquifyIDs:!0,wrapper:s.a.createFactory("span")},t.a=x},752:function(e,t,r){"use strict";function n(e,t){function r(r,n){var a,u,h,g,m,v;for(r=new l(p(e,r)),i=0;i<t.length;i++)u=t[i],u.processRequest&&u.processRequest(r);for(i=0;i<t.length;i++)if(u=t[i],u.createXHR){a=u.createXHR(r);break}a=a||new s,r.xhr=a,h=f(c(function(e){clearTimeout(m),a.onload=a.onerror=a.onabort=a.onreadystatechange=a.ontimeout=a.onprogress=null;var s=o(r,e),c=s||d.fromRequest(r);for(i=0;i<t.length;i++)u=t[i],u.processResponse&&u.processResponse(c);s&&r.onerror&&r.onerror(s),!s&&r.onload&&r.onload(c),n&&n(s,s?void 0:c)})),v="onload"in a&&"onerror"in a,a.onload=function(){h()},a.onerror=h,a.onabort=function(){h()},a.onreadystatechange=function(){if(4===a.readyState){if(r.aborted)return h();if(!v){var e;try{e=a.status}catch(t){}var t=0===e?new Error("Internal XHR Error"):null;return h(t)}}},a.ontimeout=function(){},a.onprogress=function(){},a.open(r.method,r.url),r.timeout&&(m=setTimeout(function(){r.timedOut=!0,h();try{a.abort()}catch(e){}},r.timeout));for(g in r.headers)r.headers.hasOwnProperty(g)&&a.setRequestHeader(g,r.headers[g]);return a.send(r.body),r}e=e||{},t=t||[];var a,h=["get","post","put","head","patch","delete"];for(i=0;i<h.length;i++)a=h[i],r[a]=function(e){return function(t,n){return t=new l(t),t.method=e,r(t,n)}}(a);return r.plugins=function(){return t},r.defaults=function(r){return r?n(p(e,r),t):e},r.use=function(){var r=Array.prototype.slice.call(arguments,0);return n(e,t.concat(r))},r.bare=function(){return n()},r.Request=l,r.Response=d,r.RequestError=u,r}function o(e,t){if(e.aborted)return h("Request aborted",e,{name:"Abort"});if(e.timedOut)return h("Request timeout",e,{name:"Timeout"});var r,n=e.xhr,o=Math.floor(n.status/100);switch(o){case 0:case 2:if(!t)return;return h(t.message,e);case 4:if(404===n.status&&!e.errorOn404)return;r="Client";break;case 5:r="Server";break;default:r="HTTP"}var i=r+" Error: The server returned a status of "+n.status+' for the request "'+e.method.toUpperCase()+" "+e.url+'"';return h(i,e)}var i,a=r(753),s=r(754),c=r(755),u=r(756),d=r(735),l=r(736),p=r(733),f=r(738),h=u.create;e.exports=n({},[a])},753:function(e,t,r){"use strict";e.exports={processRequest:function(e){e.url=e.url.replace(/[^%]+/g,function(e){return encodeURI(e)})}}},754:function(e,t){e.exports=window.XMLHttpRequest},755:function(e,t,r){"use strict";e.exports=function(e){return function(){var t=Array.prototype.slice.call(arguments,0),r=function(){return e.apply(null,t)};setTimeout(r,0)}}},756:function(e,t,r){"use strict";function n(e,t){var r=new Error(e);r.name="RequestError",this.name=r.name,this.message=r.message,r.stack&&(this.stack=r.stack),this.toString=function(){return this.message};for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n])}var o=r(735),i=r(737),a=r(733);n.prototype=a(Error.prototype),n.prototype.constructor=n,n.create=function(e,t,r){var a=new n(e,r);return o.call(a,i(t)),a},e.exports=n},757:function(e,t,r){"use strict";var n=r(758),o=r(738),i=!1,a=o(function(){return"undefined"!==typeof window&&null!==window&&window.XMLHttpRequest&&"withCredentials"in new window.XMLHttpRequest});e.exports={createXHR:function(e){var t,r,o;if("undefined"!==typeof window&&null!==window&&(t=n(e.url),r=n(window.location.href),t.host&&(t.protocol!==r.protocol||t.host!==r.host||t.port!==r.port))){if(!i&&e.headers)for(o in e.headers)if(e.headers.hasOwnProperty(o)){i=!0,window&&window.console&&window.console.warn&&window.console.warn("Request headers are ignored in old IE when using the oldiexdomain plugin.");break}if(window.XDomainRequest&&!a()){var s=new window.XDomainRequest;return s.setRequestHeader=function(){},s}}}}},758:function(e,t){(function(){var t,r,n,o={}.hasOwnProperty;t=/^(?:(?:([^:\/?\#]+:)\/+|(\/\/))(?:([a-z0-9-\._~%]+)(?::([a-z0-9-\._~%]+))?@)?(([a-z0-9-\._~%!$&'()*+,;=]+)(?::([0-9]+))?)?)?([^?\#]*?)(\?[^\#]*)?(\#.*)?$/,n=function(e,t){return n.URL.parse(e,t)},n.URL=function(){function e(e){var t,n,i;for(t in r)o.call(r,t)&&(n=r[t],this[t]=null!=(i=e[t])?i:n);this.host||(this.host=this.hostname&&this.port?this.hostname+":"+this.port:this.hostname?this.hostname:""),this.origin||(this.origin=this.protocol?this.protocol+"//"+this.host:""),this.isAbsolutePathRelative=!this.host&&"/"===this.pathname.charAt(0),this.isPathRelative=!this.host&&"/"!==this.pathname.charAt(0),this.isRelative=this.isSchemeRelative||this.isAbsolutePathRelative||this.isPathRelative,this.isAbsolute=!this.isRelative}return e.parse=function(e){var r,o,i;return r=e.toString().match(t),o=r[8]||"",i=r[1],new n.URL({protocol:i,username:r[3],password:r[4],hostname:r[6],port:r[7],pathname:i&&"/"!==o.charAt(0)?"/"+o:o,search:r[9],hash:r[10],isSchemeRelative:null!=r[2]})},e}(),r={protocol:"",username:"",password:"",host:"",hostname:"",port:"",pathname:"",search:"",hash:"",origin:"",isSchemeRelative:!1},e.exports=n}).call(this)},759:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}r.d(t,"b",function(){return d}),r.d(t,"c",function(){return l}),r.d(t,"d",function(){return p}),r.d(t,"e",function(){return g}),r.d(t,"a",function(){return m});var a=r(760),s=r.n(a),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=s()(function(){if(!document)return!1;var e=document.createElement("div");return e.innerHTML="<svg />",e.firstChild&&"http://www.w3.org/2000/svg"===e.firstChild.namespaceURI}),d=s()(function(){return!(!u()||"undefined"===typeof window||null===window)&&(window.XMLHttpRequest||window.XDomainRequest)}),l=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,t="abcdefghijklmnopqrstuvwxyz",r=t+t.toUpperCase()+"1234567890",n="",o=0;o<e;o++)n+=function(e){return e[Math.floor(Math.random()*e.length)]}(r);return n},p=function(){var e=function(e){return"(?:(?:\\s|\\:)"+e+")"},t=new RegExp("(?:("+e("id")+')="([^"]+)")|(?:('+e("href")+"|"+e("role")+"|"+e("arcrole")+')="\\#([^"]+)")|(?:="url\\(\\#([^\\)]+)\\)")|(?:url\\(\\#([^\\)]+)\\))',"g");return function(e,r,n){var o=function(e){return e+"___"+r};return e.replace(t,function(e,t,r,i,a,s,c){return r?t+'="'+o(r)+'"':a?i+'="'+n+"#"+o(a)+'"':s?'="url('+n+"#"+o(s)+')"':c?"url("+n+"#"+o(c)+")":void 0})}}(),f=function(e){function t(e){var r;n(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.name="InlineSVGError",i.isSupportedBrowser=!0,i.isConfigurationError=!1,i.isUnsupportedBrowserError=!1,i.message=e,r=i,o(i,r)}return i(t,e),t}(Error),h=function(e,t){var r=new f(e);return c({},r,t)},g=function(e){var t=e;return t||(t="Unsupported Browser"),h(t,{isSupportedBrowser:!1,isUnsupportedBrowserError:!0})},m=function(e){return h(e,{isConfigurationError:!0})}},760:function(e,t,r){function n(e){var t=function(){return t.called?t.value:(t.called=!0,t.value=e.apply(this,arguments))};return t.called=!1,t}function o(e){var t=function(){if(t.called)throw new Error(t.onceError);return t.called=!0,t.value=e.apply(this,arguments)},r=e.name||"Function wrapped with `once`";return t.onceError=r+" shouldn't be called more than once",t.called=!1,t}var i=r(761);e.exports=i(n),e.exports.strict=i(o),n.proto=n(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return n(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return o(this)},configurable:!0})})},761:function(e,t){function r(e,t){function n(){for(var t=new Array(arguments.length),r=0;r<t.length;r++)t[r]=arguments[r];var n=e.apply(this,t),o=t[t.length-1];return"function"===typeof n&&n!==o&&Object.keys(o).forEach(function(e){n[e]=o[e]}),n}if(e&&t)return r(e)(t);if("function"!==typeof e)throw new TypeError("need wrapper function");return Object.keys(e).forEach(function(t){n[t]=e[t]}),n}e.exports=r},762:function(e,t,r){var n=r(763);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(693)(n,o);n.locals&&(e.exports=n.locals)},763:function(e,t,r){t=e.exports=r(25)(!1),t.push([e.i,".ap-icon{display:inline-block;width:10px}.ap-icon--success{color:var(--success)}.ap-icon--info{color:var(--information__color)}.ap-icon--danger{color:var(--danger__color);height:1rem}.ap-icon--big{width:14px;height:14px}.ap-icon--center{width:12px}.ap-icon--deposit-arrow,.ap-icon--withdraw-arrow{width:11px}.ap-icon--balance,.ap-icon--exchange,.ap-icon--settings{width:16px;margin-top:3px;margin-bottom:-3px}.ap-icon--generate-report{width:12px}.ap-icon--key{width:16px}.ap-icon--menu{width:24px}.ap-icon--refresh{width:15px}.ap-icon--widthraw-arrow{width:11px}",""])},764:function(e,t,r){e.exports=r.p+"static/media/icon-caret-prev.32253ec8.svg"},765:function(e,t,r){e.exports=r.p+"static/media/icon-caret-next.110fecd7.svg"},766:function(e,t,r){e.exports=r.p+"static/media/icon-double-caret-prev.b8497d68.svg"},767:function(e,t,r){e.exports=r.p+"static/media/icon-double-caret-next.5056c1f7.svg"},768:function(e,t,r){e.exports=r.p+"static/media/icon-stop.12973336.svg"},769:function(e,t,r){e.exports=r.p+"static/media/icon-balance.25d500b4.svg"},770:function(e,t,r){e.exports=r.p+"static/media/icon-center.d3865558.svg"},771:function(e,t,r){e.exports=r.p+"static/media/icon-close.56aba6b5.svg"},772:function(e,t,r){e.exports=r.p+"static/media/icon-close-inverse.5169a4c3.svg"},773:function(e,t,r){e.exports=r.p+"static/media/icon-deposit-arrow.fb9cee72.svg"},774:function(e,t,r){e.exports=r.p+"static/media/icon-exchange.a6cdeb82.svg"},775:function(e,t,r){e.exports=r.p+"static/media/icon-generate-reports.c25e875a.svg"},776:function(e,t,r){e.exports=r.p+"static/media/icon-check.4443b294.svg"},777:function(e,t,r){e.exports=r.p+"static/media/icon-checkbox.6ff75c6f.svg"},778:function(e,t,r){e.exports=r.p+"static/media/icon-refresh.36718f54.svg"},779:function(e,t,r){e.exports=r.p+"static/media/icon-withdraw-arrow.4644456c.svg"},780:function(e,t,r){e.exports=r.p+"static/media/icon-menu.ff0128f9.svg"},781:function(e,t,r){e.exports=r.p+"static/media/icon-menu-toggle.ad89aeb9.svg"},782:function(e,t,r){e.exports=r.p+"static/media/icon-key.c3b5c80f.svg"},783:function(e,t,r){e.exports=r.p+"static/media/icon-key-big.0d56bc9b.svg"},784:function(e,t,r){e.exports=r.p+"static/media/icon-download.ebdd4d2b.svg"},785:function(e,t,r){e.exports=r.p+"static/media/icon-arrow-prev.ec3c7dc9.svg"},786:function(e,t,r){e.exports=r.p+"static/media/icon-arrow-next.02ae871b.svg"},787:function(e,t,r){e.exports=r.p+"static/media/icon-alert.b09e6a92.svg"},788:function(e,t,r){e.exports=r.p+"static/media/icon-settings.d15941a5.svg"},789:function(e,t,r){e.exports=r.p+"static/media/icon-pending.e2938acc.svg"},790:function(e,t,r){e.exports=r.p+"static/media/icon-simple-check.4db4903c.svg"},791:function(e,t,r){e.exports=r.p+"static/media/icon-nav-settings.33a25eda.svg"},792:function(e,t,r){e.exports=r.p+"static/media/icon-nav-wallet.f94c3639.svg"},793:function(e,t,r){e.exports=r.p+"static/media/icon-nav-buy-sell.05bf1b3e.svg"},794:function(e,t,r){e.exports=r.p+"static/media/icon-nav-trading.3fcf73a2.svg"},795:function(e,t,r){e.exports=r.p+"static/media/icon-nav-dashboard-on.e893058b.svg"},796:function(e,t,r){e.exports=r.p+"static/media/icon-nav-user.46dcb523.svg"},797:function(e,t,r){e.exports=r.p+"static/media/icon-nav-notification.e1c86986.svg"},798:function(e,t,r){e.exports=r.p+"static/media/icon-buy.fab94b94.svg"},799:function(e,t,r){e.exports=r.p+"static/media/icon-sell.0f4f4688.svg"},800:function(e,t,r){e.exports=r.p+"static/media/icon-eye.9068c8e6.svg"},801:function(e,t,r){e.exports=r.p+"static/media/icon-receive.83db15a3.svg"},802:function(e,t,r){e.exports=r.p+"static/media/icon-receive-with-border.a28e2bb8.svg"},803:function(e,t,r){e.exports=r.p+"static/media/icon-send.6df667a8.svg"},804:function(e,t,r){e.exports=r.p+"static/media/icon-send-with-border.41bc43b8.svg"},805:function(e,t,r){e.exports=r.p+"static/media/icon-deposit.ee555dfc.svg"},806:function(e,t,r){e.exports=r.p+"static/media/icon-deposit-with-border.875719fd.svg"},807:function(e,t,r){e.exports=r.p+"static/media/icon-withdraw.6b67e16d.svg"},808:function(e,t,r){e.exports=r.p+"static/media/icon-withdraw-with-border.241ed288.svg"},809:function(e,t,r){e.exports=r.p+"static/media/icon-info.6448a8d0.svg"},810:function(e,t,r){e.exports=r.p+"static/media/icon-copy.9dc9a9a7.svg"},811:function(e,t,r){e.exports=r.p+"static/media/icon-star.9e54355c.svg"},812:function(e,t,r){e.exports=r.p+"static/media/logo-powered.7f6a585c.svg"},813:function(e,t,r){e.exports=r.p+"static/media/icon-open-buy-big.fc624e53.svg"},814:function(e,t,r){e.exports=r.p+"static/media/icon-open-sell-big.f913f6d7.svg"},815:function(e,t,r){e.exports=r.p+"static/media/icon-calendar.936d754e.svg"},819:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(2),a=r.n(i),s=r(264),c=r(853),u=(r.n(c),Object(s.b)("spinner")),d=function(e){var t=e.isVisible,r=e.isInline,n=e.text,i=e.customClass,a=e.classModifiers,c="string"===typeof i?Object(s.b)(i):i||function(){return""};return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement("div",{className:u("container",r&&"inline")+" "+c("spinner-container",a)},o.a.createElement("div",{className:u("circle",r&&"inline")+" "+c("spinner-circle",a)}),n&&o.a.createElement("div",{className:u("text")},n)))};d.propTypes={isInline:a.a.bool,isVisible:a.a.bool.isRequired,customClass:a.a.oneOfType([a.a.func,a.a.string]),text:a.a.string},d.defaultProps={isVisible:!0},t.a=d},853:function(e,t,r){var n=r(854);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(693)(n,o);n.locals&&(e.exports=n.locals)},854:function(e,t,r){t=e.exports=r(25)(!1),t.push([e.i,".spinner__circle,.spinner__circle:after{border-radius:50%;width:2.5rem;height:2.5rem}.spinner__circle{margin:auto;-webkit-transform:translateZ(0);transform:translateZ(0);border-top:.2rem solid var(--spinner__color-secondary);border-right:.2rem solid var(--spinner__color-secondary);border-bottom:.2rem solid var(--spinner__color-secondary);border-left:.2rem solid var(--spinner__color-primary);-webkit-animation:loading 1.1s infinite linear;animation:loading 1.1s infinite linear}.spinner__circle--inline{border-top:.2rem solid var(--spinner__color-tertiary);border-right:.2rem solid var(--spinner__color-tertiary);border-bottom:.2rem solid var(--spinner__color-tertiary)}.spinner__container{position:absolute;display:-ms-flexbox;display:flex;margin:1rem 1.75rem;height:3rem;line-height:3rem}.spinner__container--inline{position:relative;margin:0;background:transparent}.spinner__text{color:var(--spinner__font-color);margin-left:1rem;display:inline-block}@-webkit-keyframes loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])}});