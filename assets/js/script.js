function animateIn(){$("body").removeClass("animate-in"),$("body")[0].offsetHeight,$("body").addClass("animateBody--in")}function initVisited(){if(!$("html").hasClass("no-localstorage")){"visited-"+window.location.pathname;localStorage.setItem("visited-"+window.location.pathname,!0);var e=document.getElementsByTagName("a");for(i=0;i<e.length;i++){var t=e[i];t.host==window.location.host&&localStorage.getItem("visited-"+t.pathname)&&(t.dataset.visited=!0)}}}function initExternalLinks(){$(document.links).filter(function(){return this.hostname!=window.location.hostname}).attr("target","_blank")}function toggleContactModal(e,t){var n=$("#contactMe-openModal"),o=$("#contactMe-modal"),a=n[0].offsetLeft+n.width()/2,i=n[0].offsetTop+n.height()/2;o.find(".m-modal-animation").css("margin-left",a).css("margin-top",i),"success"===e?(o.addClass("is-success"),o.find(".m-modal-messageText").html(t),setTimeout(function(){o.removeClass("is-open"),$("body").removeClass("is-modalOpen")},4e3),setTimeout(function(){o.removeClass("is-success")},5e3)):(o.toggleClass("is-open"),$("body").toggleClass("is-modalOpen"),autosize($("#contactForm-message")))}window.Modernizr=function(e,t,n){function o(e){f.cssText=e}function a(e,t){return typeof e===t}var i,r,c,s="2.8.3",l={},u=!0,d=t.documentElement,m="modernizr",p=t.createElement(m),f=p.style,h=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),g={},v=[],y=v.slice,w=function(e,n,o,a){var i,r,c,s,l=t.createElement("div"),u=t.body,p=u||t.createElement("body");if(parseInt(o,10))for(;o--;)c=t.createElement("div"),c.id=a?a[o]:m+(o+1),l.appendChild(c);return i=["&#173;",'<style id="s',m,'">',e,"</style>"].join(""),l.id=m,(u?l:p).innerHTML+=i,p.appendChild(l),u||(p.style.background="",p.style.overflow="hidden",s=d.style.overflow,d.style.overflow="hidden",d.appendChild(p)),r=n(l,e),u?l.parentNode.removeChild(l):(p.parentNode.removeChild(p),d.style.overflow=s),!!r},b={}.hasOwnProperty;c=a(b,"undefined")||a(b.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return b.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=y.call(arguments,1),o=function(){if(this instanceof o){var a=function(){};a.prototype=t.prototype;var i=new a,r=t.apply(i,n.concat(y.call(arguments)));return Object(r)===r?r:i}return t.apply(e,n.concat(y.call(arguments)))};return o}),g.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:w(["@media (",h.join("touch-enabled),("),m,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},g.localstorage=function(){try{return localStorage.setItem(m,m),localStorage.removeItem(m),!0}catch(e){return!1}};for(var C in g)c(g,C)&&(r=C.toLowerCase(),l[r]=g[C](),v.push((l[r]?"":"no-")+r));return l.addTest=function(e,t){if("object"==typeof e)for(var o in e)c(e,o)&&l.addTest(o,e[o]);else{if(e=e.toLowerCase(),l[e]!==n)return l;t="function"==typeof t?t():t,"undefined"!=typeof u&&u&&(d.className+=" "+(t?"":"no-")+e),l[e]=t}return l},o(""),p=i=null,function(e,t){function n(e,t){var n=e.createElement("p"),o=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",o.insertBefore(n.lastChild,o.firstChild)}function o(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function a(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function i(e,n,o){if(n||(n=t),u)return n.createElement(e);o||(o=a(n));var i;return i=o.cache[e]?o.cache[e].cloneNode():f.test(e)?(o.cache[e]=o.createElem(e)).cloneNode():o.createElem(e),!i.canHaveChildren||p.test(e)||i.tagUrn?i:o.frag.appendChild(i)}function r(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||a(e);for(var i=n.frag.cloneNode(),r=0,c=o(),s=c.length;s>r;r++)i.createElement(c[r]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function s(e){e||(e=t);var o=a(e);return y.shivCSS&&!l&&!o.hasCSS&&(o.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||c(e,o),e}var l,u,d="3.7.0",m=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,u=!0}}();var y={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:m.shivCSS!==!1,supportsUnknownElements:u,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:s,createElement:i,createDocumentFragment:r};e.html5=y,s(t)}(this,t),l._version=s,l._prefixes=h,l.testStyles=w,d.className=d.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(u?" js "+v.join(" "):""),l}(this,this.document),function(e,t,n){function o(e){return"[object Function]"==g.call(e)}function a(e){return"string"==typeof e}function i(){}function r(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=v.shift();y=1,e?e.t?f(function(){("c"==e.t?m.injectCss:m.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):y=0}function s(e,n,o,a,i,s,l){function u(t){if(!p&&r(d.readyState)&&(w.r=p=1,!y&&c(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&f(function(){C.removeChild(d)},50);for(var o in T[n])T[n].hasOwnProperty(o)&&T[n][o].onload()}}var l=l||m.errorTimeout,d=t.createElement(e),p=0,g=0,w={t:o,s:n,e:i,a:s,x:l};1===T[n]&&(g=1,T[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},v.splice(a,0,w),"img"!=e&&(g||2===T[n]?(C.insertBefore(d,b?null:h),f(u,l)):T[n].push(d))}function l(e,t,n,o,i){return y=0,t=t||"j",a(e)?s("c"==t?S:E,e,t,this.i++,n,o,i):(v.splice(this.i++,0,e),1==v.length&&c()),this}function u(){var e=m;return e.loader={load:l,i:0},e}var d,m,p=t.documentElement,f=e.setTimeout,h=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,w="MozAppearance"in p.style,b=w&&!!t.createRange().compareNode,C=b?p:h.parentNode,p=e.opera&&"[object Opera]"==g.call(e.opera),p=!!t.attachEvent&&!p,E=w?"object":p?"script":"img",S=p?"script":E,$=Array.isArray||function(e){return"[object Array]"==g.call(e)},j=[],T={},x={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};m=function(e){function t(e){var t,n,o,e=e.split("!"),a=j.length,i=e.pop(),r=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;r>n;n++)o=e[n].split("="),(t=x[o.shift()])&&(i=t(i,o));for(n=0;a>n;n++)i=j[n](i);return i}function r(e,a,i,r,c){var s=t(e),l=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(a&&(a=o(a)?a:a[e]||a[r]||a[e.split("/").pop().split("?")[0]]),s.instead?s.instead(e,a,i,r,c):(T[s.url]?s.noexec=!0:T[s.url]=1,i.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(o(a)||o(l))&&i.load(function(){u(),a&&a(s.origUrl,c,r),l&&l(s.origUrl,c,r),T[s.url]=2})))}function c(e,t){function n(e,n){if(e){if(a(e))n||(d=function(){var e=[].slice.call(arguments);m.apply(this,e),p()}),r(e,d,t,0,l);else if(Object(e)===e)for(s in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(s)&&(!n&&!--c&&(o(d)?d=function(){var e=[].slice.call(arguments);m.apply(this,e),p()}:d[s]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(m[s])),r(e[s],d,t,s,l))}else!n&&p()}var c,s,l=!!e.test,u=e.load||e.both,d=e.callback||i,m=d,p=e.complete||i;n(l?e.yep:e.nope,!!u),u&&n(u)}var s,l,d=this.yepnope.loader;if(a(e))r(e,0,d,0);else if($(e))for(s=0;s<e.length;s++)l=e[s],a(l)?r(l,0,d,0):$(l)?m(l):Object(l)===l&&c(l,d);else Object(e)===e&&c(e,d)},m.addPrefix=function(e,t){x[e]=t},m.addFilter=function(e){j.push(e)},m.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,o,a,s,l){var u,d,p=t.createElement("script"),a=a||m.errorTimeout;p.src=e;for(d in o)p.setAttribute(d,o[d]);n=l?c:n||i,p.onreadystatechange=p.onload=function(){!u&&r(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},f(function(){u||(u=1,n(1))},a),s?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,o,a,r,s){var l,a=t.createElement("link"),n=s?c:n||i;a.href=e,a.rel="stylesheet",a.type="text/css";for(l in o)a.setAttribute(l,o[l]);r||(h.parentNode.insertBefore(a,h),f(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},FastClick.attach(document.body),function(e,t,n,o,a,i,r){e.GoogleAnalyticsObject=a,e[a]=e[a]||function(){(e[a].q=e[a].q||[]).push(arguments)},e[a].l=1*new Date,i=t.createElement(n),r=t.getElementsByTagName(n)[0],i.async=1,i.src=o,r.parentNode.insertBefore(i,r)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-63372069-1","auto"),InstantClick.on("change",function(){ga("send","pageview",location.pathname+location.search),numPagesVisited++,initVisited(),initExternalLinks(),animateIn(),$(window).resize()}),InstantClick.init();var numPagesVisited=0;window.onbeforeunload=function(){ga("send","event","time-tracking","page-exit"),1===numPagesVisited&&ga("send","event","engagement","page-bounce")},$("html").addClass("animateHeader--in"),animateIn(),$(document).on("keyup","input, textarea",function(){$(this).val().length?$(this).closest(".m-input-wrapper").addClass("is-notEmpty"):$(this).closest(".m-input-wrapper").removeClass("is-notEmpty")}).on("focus","input, textarea",function(){$(this).closest(".m-input-wrapper").addClass("is-focused")}).on("blur","input, textarea",function(){$(this).closest(".m-input-wrapper").removeClass("is-focused")}),$(document).on("click","#contactMe-openModal, #contactMe-closeModal",function(){toggleContactModal()}),$(document).on("click","#contactForm-submit",function(e){e.preventDefault();var t=($("#contactForm")[0],$("#contactForm-name")),n=$("#contactForm-email"),o=$("#contactForm-message"),a=$("#contactForm-url"),i=$("#contactForm-submit");a.val(window.location.pathname),window.history.replaceState({},"","/contact"),i.attr("data-text","Sending...");var r=new XMLHttpRequest;r.open("POST","//formspree.io/hello@morgancarter.com.au",!0),r.setRequestHeader("Accept","application/json"),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.send("name="+t.val()+"&email="+n.val()+"&message="+o.val()+"&url="+a.val()),window.history.replaceState({},"",a.val()),r.onloadend=function(e){200===e.target.status&&(toggleContactModal("success","Thanks for contacting me!<br> I'll be in touch within a couple of days."),t.val("").removeClass("is-notEmpty"),n.val("").removeClass("is-notEmpty"),o.val("").removeClass("is-notEmpty"),a.val("")),setTimeout(function(){i.attr("data-text","Submit")},1e3)}});