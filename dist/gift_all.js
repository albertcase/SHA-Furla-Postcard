/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return W(this,"");i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);
;(function(){
	'use strict';

	// can we support addEventListener
	var hasNative = 'addEventListener' in (new Image());

	var preLoader = function(images, options){
		this.options = {
			pipeline: false,
			auto: true,
			prefetch: false,
			/* onProgress: function(){}, */
			/* onError: function(){}, */
			onComplete: function(){}
		};

		options && typeof options == 'object' && this.setOptions(options);

		this.addQueue(images);
		this.queue.length && this.options.auto && this.processQueue();
	};

	preLoader.prototype.setOptions = function(options){
		// shallow copy
		var o = this.options,
			key;

		for (key in options) options.hasOwnProperty(key) && (o[key] = options[key]);

		return this;
	};

	preLoader.prototype.addQueue = function(images){
		// stores a local array, dereferenced from original
		this.queue = images.slice();

		return this;
	};

	preLoader.prototype.reset = function(){
		// reset the arrays
		this.completed = [];
		this.errors = [];

		return this;
	};

	preLoader.prototype.addEvents = function(image, src, index){
		var self = this,
			o = this.options,
			cleanup = function(){
				if (hasNative){
					this.removeEventListener('error', abort);
					this.removeEventListener('abort', abort);
					this.removeEventListener('load', load);
				}
				else {
					this.onerror = this.onabort = this.onload = null;
				}
			},
			abort = function(){
				//console.log('src error:' + src);
				cleanup.call(this);

				self.errors.push(src);
				o.onError && o.onError.call(self, src);
				checkProgress.call(self, src);
				o.pipeline && self.loadNext(index);
			},
			load = function(){
				//console.log('src load:' + src);
				cleanup.call(this);

				// store progress. this === image
				self.completed.push(src); // this.src may differ
				checkProgress.call(self, src, this);
				o.pipeline && self.loadNext(index);
			};

		if (hasNative){
			image.addEventListener('error', abort, false);
			image.addEventListener('abort', abort, false);
			image.addEventListener('load', load, false);
		}
		else {
			image.onerror = image.onabort = abort;
			image.onload = load;
		}

	};

	preLoader.prototype.load = function(src, index){
		/*jshint -W058 */
		var image = new Image;

		this.addEvents(image, src, index);

		// actually load
		image.src = src;

		return this;
	};

	preLoader.prototype.loadNext = function(index){
		// when pipeline loading is enabled, calls next item
		index++;
		this.queue[index] && this.load(this.queue[index], index);

		return this;
	};

	preLoader.prototype.processQueue = function(){
		// runs through all queued items.
		var i = 0,
			queue = this.queue,
			len = queue.length;

		// process all queue items
		this.reset();

		if (!this.options.pipeline) for (; i < len; ++i) this.load(queue[i], i);
		else this.load(queue[0], 0);

		return this;
	};

	/*jshint validthis:true */
	function checkProgress(src, image){
		// intermediate checker for queue remaining. not exported.
		// called on preLoader instance as scope
		var args = [],
			o = this.options;

		// call onProgress
		o.onProgress && src && o.onProgress.call(this, src, image, this.completed.length);

		if (this.completed.length + this.errors.length === this.queue.length){
			args.push(this.completed);
			this.errors.length && args.push(this.errors);
			o.onComplete.apply(this, args);
		}

		return this;
	}
	/*jshint validthis:false */

	if (typeof define === 'function' && define.amd){
		// we have an AMD loader.
		define(function(){
			return preLoader;
		});
	}
	else {
		this.preLoader = preLoader;
	}
}).call(this);

// http://www.makeitgo.ws/articles/animationframe/
;(function() {
    var lastFrame, method, now, queue, requestAnimationFrame, timer, vendor, _i, _len, _ref, _ref1;
    method = 'native';
    now = Date.now || function() {
        return new Date().getTime();
    };
    requestAnimationFrame = window.requestAnimationFrame;
    _ref = ['webkit', 'moz', 'o', 'ms'];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        vendor = _ref[_i];
        if (requestAnimationFrame == null) {
            requestAnimationFrame = window[vendor + 'RequestAnimationFrame'];
        }
    }
    if (requestAnimationFrame == null) {
        method = 'timer';
        lastFrame = 0;
        queue = timer = null;
        requestAnimationFrame = function(callback) {
            var fire, nextFrame, time;
            if (queue != null) {
                queue.push(callback);
                return;
            }
            time = now();
            nextFrame = Math.max(0, 16.66 - (time - lastFrame));
            queue = [callback];
            lastFrame = time + nextFrame;
            fire = function() {
                var cb, q, _j, _len1;
                q = queue;
                queue = null;
                for (_j = 0, _len1 = q.length; _j < _len1; _j++) {
                    cb = q[_j];
                    cb(lastFrame);
                }
            };
            timer = setTimeout(fire, nextFrame);
        };
    }
    requestAnimationFrame(function(time) {
        var offset, _ref1;
        if (time < 1e12) {
            if (((_ref1 = window.performance) != null ? _ref1.now : void 0) != null) {
                requestAnimationFrame.now = function() {
                    return window.performance.now();
                };
                requestAnimationFrame.method = 'native-highres';
            } else {
                offset = now() - time;
                requestAnimationFrame.now = function() {
                    return now() - offset;
                };
                requestAnimationFrame.method = 'native-highres-noperf';
            }
        } else {
            requestAnimationFrame.now = now;
        }
    });
    requestAnimationFrame.now = ((_ref1 = window.performance) != null ? _ref1.now : void 0) != null ? (function() {
        return window.performance.now();
    }) : now;
    requestAnimationFrame.method = method;
    window.requestAnimationFrame = requestAnimationFrame;

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(timer) {
            clearTimeout(timer);
        };
})();


/**
 * Created by Eric Lee on 8/24/14.
 * Modified by Eric Lee on 6/17/16.
 */
;(function(){
    'use strict';

    var reqAnimate = function(element, options) {
        this.options = {
            fps: 30,
            totalFrames: 16,
            time: Infinity,
            processAnimation: function(){},
            doneAnimation: function(){}
        };
        this.element = element;
        this.currentFrame = 0;
        this.lastFrame = 0;
        this.frameNum = 0;
        this.startTime = window.requestAnimationFrame.now();
        //requestId = null;
        this.timeIndex = 1;

        options && typeof options == 'object' && this.setOptions(options);

        // this.options.fps=6;

    };
    var requestId = null;
    var canceled = 0;

    reqAnimate.prototype.start = function() {
        canceled = 0;
        this.loop(this.startTime);
    };

    reqAnimate.prototype.cancel = function() {
        if (requestId) {
            window.cancelAnimationFrame(requestId);
            requestId = null;
            canceled = 1;
        }
    };

    reqAnimate.prototype.setOptions = function(options){
        // shallow copy
        var o = this.options,
            key;

        for (key in options) options.hasOwnProperty(key) && (o[key] = options[key]);

        return this;
    };

    reqAnimate.prototype.loop = function(time) {
        var o = this.options;
        if (!canceled) {
            this.updateFrame(time);
            requestId = window.requestAnimationFrame(this.loop.bind(this));

            if ((this.frameNum + 1 == o.totalFrames) && o.time !== Infinity && this.timeIndex >= o.time) {
                this.cancel();
                o.doneAnimation && o.doneAnimation.call(this, this.element);
            }
        }
    };

    reqAnimate.prototype.updateFrame = function(time) {
        var o = this.options
            , delta = (time - this.startTime) / 1000;
        this.currentFrame += (delta * o.fps);

        this.frameNum = Math.floor(this.currentFrame);

        if (this.frameNum >= o.totalFrames) {
            this.currentFrame = this.frameNum = 0;
            this.timeIndex++;
            this.lastFrame = -1;
        }

        this.frameNum >= 0
        && this.frameNum > this.lastFrame
        && o.processAnimation
        && o.processAnimation.call(this, this.element, this.frameNum);

        this.startTime = window.requestAnimationFrame.now();
        this.lastFrame = this.frameNum;
    };

    if (typeof define === 'function' && define.amd){
        // we have an AMD loader.
        define(function(){
            return reqAnimate;
        });
    }
    else {
        this.reqAnimate = reqAnimate;
    }

}).call(this);
/*
 * Author: Alex Gibson
 * https://github.com/alexgibson/shake.js
 * License: MIT license
 */

(function(global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return factory(global, global.document);
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory(global, global.document);
    } else {
        global.Shake = factory(global, global.document);
    }
} (typeof window !== 'undefined' ? window : this, function (window, document) {

    'use strict';

    function Shake(options) {
        //feature detect
        this.hasDeviceMotion = 'ondevicemotion' in window;

        this.options = {
            threshold: 15, //default velocity threshold for shake to register
            timeout: 1000 //default interval between events
        };

        if (typeof options === 'object') {
            for (var i in options) {
                if (options.hasOwnProperty(i)) {
                    this.options[i] = options[i];
                }
            }
        }

        //use date to prevent multiple shakes firing
        this.lastTime = new Date();

        //accelerometer values
        this.lastX = null;
        this.lastY = null;
        this.lastZ = null;

        //create custom event
        if (typeof document.CustomEvent === 'function') {
            this.event = new document.CustomEvent('shake', {
                bubbles: true,
                cancelable: true
            });
        } else if (typeof document.createEvent === 'function') {
            this.event = document.createEvent('Event');
            this.event.initEvent('shake', true, true);
        } else {
            return false;
        }
    }

    //reset timer values
    Shake.prototype.reset = function () {
        this.lastTime = new Date();
        this.lastX = null;
        this.lastY = null;
        this.lastZ = null;
    };

    //start listening for devicemotion
    Shake.prototype.start = function () {
        this.reset();
        if (this.hasDeviceMotion) {
            window.addEventListener('devicemotion', this, false);
        }
    };

    //stop listening for devicemotion
    Shake.prototype.stop = function () {
        if (this.hasDeviceMotion) {
            window.removeEventListener('devicemotion', this, false);
        }
        this.reset();
    };

    //calculates if shake did occur
    Shake.prototype.devicemotion = function (e) {
        var current = e.accelerationIncludingGravity;
        var currentTime;
        var timeDifference;
        var deltaX = 0;
        var deltaY = 0;
        var deltaZ = 0;

        if ((this.lastX === null) && (this.lastY === null) && (this.lastZ === null)) {
            this.lastX = current.x;
            this.lastY = current.y;
            this.lastZ = current.z;
            return;
        }

        deltaX = Math.abs(this.lastX - current.x);
        deltaY = Math.abs(this.lastY - current.y);
        deltaZ = Math.abs(this.lastZ - current.z);

        if (((deltaX > this.options.threshold) && (deltaY > this.options.threshold)) || ((deltaX > this.options.threshold) && (deltaZ > this.options.threshold)) || ((deltaY > this.options.threshold) && (deltaZ > this.options.threshold))) {
            //calculate time in milliseconds since last shake registered
            currentTime = new Date();
            timeDifference = currentTime.getTime() - this.lastTime.getTime();

            if (timeDifference > this.options.timeout) {
                window.dispatchEvent(this.event);
                this.lastTime = new Date();
            }
        }

        this.lastX = current.x;
        this.lastY = current.y;
        this.lastZ = current.z;

    };

    //event handler
    Shake.prototype.handleEvent = function (e) {
        if (typeof (this[e.type]) === 'function') {
            return this[e.type](e);
        }
    };

    return Shake;
}));

(function(doc, win) {
    var docEl = doc.documentElement,
    isIOS = navigator.userAgent.match(/iphone|ipod|ipad/gi),
    dpr = isIOS? Math.min(win.devicePixelRatio, 3) : 1,
    scale = 1 / dpr,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    //fix iphone plus bug
    if(dpr == 3){
        scale=1;
        dpr = 2;
    }
    docEl.dataset.dpr = dpr;
    //var metaEl = doc.createElement('meta');
    //metaEl.name = 'viewport';
    //metaEl.content = 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale;
    //docEl.firstElementChild.appendChild(metaEl);
    var recalc = function () {
        var width = docEl.clientWidth,
			height = docEl.clientHeight;
        if (width / dpr > 750) {
            width = 750 * dpr;
        }
				if(width/height>750/1207){
					docEl.style.fontSize = 100 * (height / 1207) + 'px';

				}else{
					docEl.style.fontSize = 100 * (width / 750) + 'px';
				}
      };
    recalc();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
})(document, window);
var products = [
        {
            name:'FURLA TRIBE BANGLE',
            pid:101,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0000_FURLA_TRIBE-BANGLE-18MM-ZIG-ZAG_02_856027.png'
        },
        {
            name:'FURLA TRIBE BANGLE',
            pid:102,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0001_FURLA_TRIBE-BANGLE-46MM_856001.png'
        },
        {
            name:'FURLA LADY BLOGGER KEYRING',
            pid:103,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0002_FURLA_LADY-BLOGGER-KEYRING-BIG-TAG_852289.png'
        },
        {
            name:'FURLA ELISA KEYRING STELLA C FRANGE',
            pid:104,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0003_FURLA_ELISA-KEYRING-STELLA-C-FRANGE_852064.png'
        },
        {
            name:'FURLA ELISA KEYRING CUORE',
            pid:105,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0004_FURLA_ELISA-KEYRING-CUORE-C-FRANGE_852056.png'
        },
    {
            name:'FURLA ASTREA OCCH',
            pid:106,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0005_FURLA_ASTREA-OCCH-DONNA-COL-0579_849237.png'
        },
        {
            name:'FURLA ARMONIA',
            pid:107,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0006_FURLA_ARMONIA-OCCH-DONNA-COL-0700_849230.png'
        },
        {
            name:'FURLA ARMONIA OCCH',
            pid:108,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0007_FURLA_ARMONIA-OCCH-DONNA-COL-0GB4_849711.png'
        },
        {
            name:'FURLA ALTEA OCCH',
            pid:109,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0008_FURLA_ALTEA-OCCH-DONNA-COL-0300_01_849236.png'
        },
        {
            name:'FURLA AMAZZONE MINI',
            pid:110,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0009_FURLA_AMAZZONE-MINI-CROSSBODY_851858.png'
        },
        {
            name:'FURLA AMAZZONE',
            pid:111,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0010_FURLA_AMAZZONE-MINI-CROSSBODY_02_851838.png'
        },
        {
            name:'FURLA_METROPOLIS MINI CROSSBODY',
            pid:112,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0011_FURLA_AMAZZONE-MINI-CROSSBODY_01_851837.png'
        },
        {
            name:'FURLA METROPOLIS',
            pid:113,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0012_FURLA_METROPOLIS-ROCKER-MINI-CROSSBODY_01_852578.png'
        },
        {
            name:'FURLA METROPOLIS',
            pid:114,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0013_FURLA_METROPOLIS-ROCKER-MINI-CROSSBODY_02_852577.jpg.png'
        },
        {
            name:'FURLA METROPOLIS',
            pid:115,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0014_FURLA_METROPOLIS-MINI-CROSSBODY_03_851547.png'
        },

        {
            name:'FURLA METROPOLIS',
            pid:116,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0015_FURLA_METROPOLIS-MINI-CROSSBODY_01_851507.png'
        },
        {
            name:'FURLA BABYLON',
            pid:117,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0016_FURLA-BABYLON_850659-(Nov-14).png'
        },
        {
            name:'FURLA METROPOLIS',
            pid:118,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0017_FURLA_METROPOLIS-MINI-CROSSBODY_02_851157.png'
        },
        {
            name:'FURLA METROPOLIS',
            pid:119,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0018_FURLA-METROPOLIS-GLITTER-GOLD_851136-(Dec-12).png'
        },
        {
            name:'FURLA METROPOLIS',
            pid:120,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0019_FURLA-METROPOLIS-851171-M1.png'
        },
{
            name:'FURLA METROPOLIS',
            pid:121,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0020_FURLA-METROPOLIS-851164-M1.png'
        },
        {
            name:'FURLA METROPOLIS',
            pid:122,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0021_FURLA-METROPOLIS-851163-M1.png'
        },
        {
            name:'FURLA METROPOLIS',
            pid:123,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0022_FURLA-METROPOLIS-GLITTER-SILVER_851137-(Dec-12).png'
        },
        {
            name:'FURLA ALLEGRA',
            pid:124,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0023_FURLA-ALLEGRA-SILVER_850770-(Nov-14).png'
        },
        {
            name:'FURLA ALLEGRA',
            pid:125,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0024_FURLA-ALLEGRA--GOLD_850897-(Nov-14).png'
        },
        {
            name:'FURLA BABYLON',
            pid:126,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0025_FURLA_BABYLON-FURLA-XL-ZIP-AROUND_850623.png'
        },
        {
            name:'FURLA BABYLON',
            pid:127,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0026_FURLA-BABYLON-EVELOPE_851272-(Nov-14).png'
        },
        {
            name:'FURLA BABYLON',
            pid:128,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0027_FURLA-BABYLON-850780-M1.png'
        },
        {
            name:'FURLA AMAZZONE',
            pid:129,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0028_FURLA_AMAZZONE-CROSSBODY-851831-M1.png'
        },
        {
            name:'FURLA AMAZZONE',
            pid:130,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0029_FURLA_AMAZZONE-CROSSBODY--851831-S1.png'
        },
        {
            name:'FURLA AMAZZONE',
            pid:131,
            imgsrc:'/dist/images/products/FURLA-product_0000s_0030_FURLA_AMAZZONE-CROSSBODY--851827-S1.png'
        },
];
;(function(){
	var ua = navigator.userAgent.toLowerCase();
	var Common = {
		gotoPin:function(num){
			$('.container .pin').removeClass('current');
			$('.container .pin').eq(num).addClass('current');
		},
		goHomePage:function(){
			window.location.href = '/template/index.html';
		},
		goGiftPage:function(){
			window.location.href = '/template/gift.html';
		},
		goFormPage:function(){
			window.location.href = '/template/form.html';
		},
		getParameterByName:function(name){
			name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
			var results = regex.exec(location.search);
			return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		},
		msgBox:function(msg,long){
			if(long){
				$('body').append('<div class="ajaxpop msgbox minwidthbox"><div class="loading">'+msg+'</div></div>');
			}else{
				$('body').append('<div class="ajaxpop msgbox"><div class="loading"><div class="icon-loading"></div>'+msg+'</div></div>');
			}
		},
		errorMsg : {
			add:function(ele,msg){

				for(var i in ele.childNodes){
					if(ele.childNodes[i].className == 'error'){
						ele.childNodes[i].textContent = msg;
						return true;
					}else{
						if(i==ele.childNodes.length-1){
							var newDiv = document.createElement('div');
							newDiv.textContent = msg;
							newDiv.className = 'error';
							ele.appendChild(newDiv);
						}
					}
				}
			},
			remove:function(ele){

				for(var i in ele.childNodes){
					if(ele.childNodes[i].className == 'error'){
						ele.childNodes[i].parentNode.removeChild(ele.childNodes[i]);
						return;
					}
				}
			}
		},
		alertBox:{
			add:function(msg){
				$('body').append('<div class="alertpop msgbox"><div class="inner"><div class="msg">'+msg+'</div><div class="btn-alert-ok">关闭</div></div></div>');
			},
			remove:function(){
				$('.alertpop').remove();
			}
		},


	};

	var isScroll=true;
	var noBounce = function() {
		var module = {};

		var settings = {
			animate: false
		};

		var track = [];

		var velocity = {
			x: 0,
			y: 0
		};

		var vector = {
			subtraction: function(v1, v2) {
				return {
					x: v1.x - v2.x,
					y: v1.y - v2.y
				};
			},
			length: function(v) {
				return Math.sqrt((v.x * v.x) + (v.y * v.y));
			},
			unit: function(v) {
				var length = vector.length(v);
				v.x /= length;
				v.y /= length;
			},
			skalarMult: function(v, s) {
				v.x *= s;
				v.y *= s;
			}
		};

		var requestAnimFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function(callback) {
					window.setTimeout(callback, 1000 / 60);
				};
		})();

		function handleTouchStart(evt) {
			var point,
				touch;

			touch = evt.changedTouches[0];
			point = {
				x: touch.clientX,
				y: touch.clientY,
				timeStamp: evt.timeStamp
			};
			track = [point];
		}

		function handleTouchMove(evt) {
			var point,
				touch;

			evt.preventDefault();
			if(isScroll){
				touch = evt.changedTouches[0];
				point = {
					x: touch.clientX,
					y: touch.clientY,
					timeStamp: evt.timeStamp
				};
				track.push(point);
				doScroll();
			}

		}

		function handleTouchEnd(evt) {
			if (track.length > 2 && settings.animate) {
				velocity = calcVelocity();
				requestAnimFrame(animate);
			}
		}

		function calcVelocity() {
			var p1,
				p2,
				v,
				timeDiff,
				length;

			p1 = track[0];
			p2 = track[track.length - 1];
			timeDiff = p2.timeStamp - p1.timeStamp;
			v = vector.subtraction(p2, p1);
			length = vector.length(v);
			vector.unit(v);
			vector.skalarMult(v, length / timeDiff * 20);
			return v;
		}

		function doScroll() {
			var p1,
				p2,
				x,
				y;

			if (track.length > 1) {
				p1 = track[track.length - 1];
				p2 = track[track.length - 2];
				x = p2.x - p1.x;
				y = p2.y - p1.y;
				requestAnimFrame(function() {
					window.scrollBy(x, y);
				});
			}
		}

		function animate() {
			scrollBy(-velocity.x, -velocity.y);
			vector.skalarMult(velocity, 0.95);
			if (vector.length(velocity) > 0.2) {
				requestAnimFrame(animate);
			}
		}

		//Returns true if it is a DOM element
		function isElement(o) {
			return (
				typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
				o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
			);
		}

		module.init = function(options) {
			if (typeof options.animate === "boolean") {
				settings.animate = options.animate;
			}
			if (isElement(options.element)) {
				settings.element = options.element;
			}

			var element = settings.element || document;

			element.addEventListener("touchstart", handleTouchStart);
			element.addEventListener("touchmove", handleTouchMove);
			element.addEventListener("touchend", handleTouchEnd);
			element.addEventListener("touchcancel", handleTouchEnd);
			element.addEventListener("touchleave", handleTouchEnd);
		};

		return module;
	}();

	noBounce.init({
		animate: false
	});

	this.Common = Common;

}).call(this);

$(document).ready(function(){

	//close alert pop
	$('body').on('touchstart','.btn-alert-ok',function(){
		Common.alertBox.remove();
		//for form page
		if($('body').hasClass('page-form') && $(this).parent().find('.msg').html() == '你已经参与抽奖'){
			window.location.href='/';
		}
	});

});




;(function(){

    var weixinshare = function(obj){
        wx.ready(function(){
            wx.onMenuShareAppMessage({
                title: obj.title1,
                desc: obj.des,
                link: obj.link,
                imgUrl: obj.img,
                type: '',
                dataUrl: '',
                success: function () {
                    console.log('share success to friend');

                },
                cancel: function () {

                }
            });
            wx.onMenuShareTimeline({
                title: obj.title1,
                link: obj.link,
                imgUrl: obj.img,
                success: function () {
                    console.log('share success to timeline');
                },
                cancel: function () {

                }
            });


        })
    };

    if (typeof define === 'function' && define.amd){
        // we have an AMD loader.
        define(function(){
            return weixinshare;
        });
    }
    else {
        this.weixinshare = weixinshare;
    }

}).call(this);

$(document).ready(function(){
    weixinshare({
        title1: '为梦想，你包容了什么？',
        des: '参与心理测试赢取由COACH追梦女性倾情赞助的礼物',
        link: window.location.origin+'/index.html',
        img: 'http://careerwomen.samesamechina.com/dist/images/share.jpg'
    });
});

/*All the api collection*/
Api = {
    //保存贺卡
    //choose1  choose2  choose3  wish touser fromuser
    saveCard:function(obj,callback){
        //$.ajax({
        //    url:'/api/savecard',
        //    type:'POST',
        //    dataType:'json',
        //    data:obj,
        //    success:function(data){
        //        return callback(data);
        //
        //        //code=1    msg = 贺卡id
        //    }
        //});
        return callback({
            code:1,
            msg:'fkdakfasfa'
        });
    },
    //查询贺卡
    //参数  id
    getLetter:function(obj,callback){
        //$.ajax({
        //    url:'/api/loadcard',
        //    type:'POST',
        //    dataType:'json',
        //    data:obj,
        //    success:function(data){
        //        return callback(data);
        //        //返回  code=1    msg =  {choose1 choose2 choose3 wish date}
        //    }
        //});
        return callback({
            code:1,
            msg:{
                choose1:101,
                choose2:102,
                choose3:103,
                touser:'name',
                fromuser:'yours',
                wish:'lsdlfkkasdkfksadlf\nzidfksdakflksdklflkdsa',
                date:'2016年12月1日'
            }
        })
    },
    //获取卡券
    getCoupon:function(callback){
        $.ajax({
            url:'/api/card',
            type:'POST',
            dataType:'json',
            success:function(data){
                return callback(data);
                //{"status":1,"msg":[{"cardId":"pKCDxji7MvlTj_JtzqeUtXFJEd6s","cardExt":{"code":"S16110798","openid":"oKCDxjg_qXvWmYiUmofo-tnYxi8g","timestamp":1480416762,"signature":"0c2866f75a186ae3ee89d6410f2d48aa002db578"}}]}
            }
        });
    },
    //卡券抽奖
    cardLottery:function(callback){
        //Common.msgBox('loading...');
        //$.ajax({
        //    url:'/api/cardlottery',
        //    type:'POST',
        //    dataType:'json',
        //    success:function(data){
        //        $('.msgbox').remove();
        //        return callback(data);
        //        //返回  code=1    msg = 中奖
        //        //code=2    msg = 未中奖
        //    }
        //});
        return callback({
            code:2,
            msg:'中奖'
        });
    },
    //礼物抽奖
    giftLottery:function(callback){
        //Common.msgBox('loading...');
        //$.ajax({
        //    url:'/api/giftlottery',
        //    type:'POST',
        //    dataType:'json',
        //    success:function(data){
        //        $('.msgbox').remove();
        //        return callback(data);
        //        //code=1    msg = 中奖
        //        //code=2    msg = 未中奖
        //    }
        //});
        return callback({
            code:2
        })
    },
    //留资料
    //firstname
    //    secondname
    //mobile
    //    address
    //email
    //    issend
    submitInfo:function(obj,callback){
        //$.ajax({
        //    url:'/api/info',
        //    type:'POST',
        //    dataType:'json',
        //    data:obj,
        //    success:function(data){
        //        return callback(data);
        //        //返回  code=1    msg = 提交成功
        //    }
        //});
        return callback({
            code:'1'
        })
    },



};
;(function(){

    var gift = function(){

    };
    //init
    gift.prototype.init = function(){
        var self = this;
        var baseurl = '/dist/images/';
        var imagesArray = [
            baseurl + 'bg.jpg',
            baseurl + 'bg-layer-1.png',
            baseurl + 'bg-layer-2.png',
            baseurl + 'logo.png',
            baseurl + 'box-top.png',
            baseurl + 'box-bottom.jpg',
            baseurl + 'line.png',
            baseurl + 'card.png',
            baseurl + 'p2-t3.png',
            baseurl + 'p2-t4.png',
            baseurl + 't-open.png',
            baseurl + 'text-3.png',
        ];
        var animateImgArr = [];
        for(var k=0;k<50;k++){
            animateImgArr.push(baseurl+'animate/L_000'+(44+k)+'.jpg');
        }
        imagesArray = imagesArray.concat(animateImgArr);
        var i = 0;
        new preLoader(imagesArray, {
            onProgress: function(){
                i++;
                var progress = parseInt(i/imagesArray.length*100);
                $('.preload .v-content').html('已加载'+progress+'%');
            },
            onComplete: function(){
                //
                $('.container').addClass('fade');
                $('.box-animate').addClass('fade');
                $('.preload').remove();
                self.openGift();
                //self.showLetter();
                //self.prize();

            }
        });

    };

    //open page
    gift.prototype.openGift = function(){
        var self = this;
        Common.gotoPin(0);
        //imulate shake function
        $('.pg1-t1').on('touchstart',function(){
            openBox();
        });

        //shake
        var giftShake = new Shake({
            threshold: 15, //default velocity threshold for shake to register
            timeout: 1000
        });
        giftShake.start();
        window.addEventListener('shake', shakeEventDidOccur, false);
        //function to call when shake occurs
        function shakeEventDidOccur () {
            openBox();
            //stop shake
            giftShake.stop();
        }

        function openBox(){
        //    api
            loadAni();
            var inputName = $('#input-name-1');
            var textConEle = $('#l-content');
            var inputName2 = $('#input-name-2');
            var dbEle = $('.dest-block');
            var dateEle = $('.letter-date');
            var curCardId = Common.getParameterByName('cardid');
            Api.getLetter({data:curCardId},function(data){
                if(data.code==1){
                    var newdata = data.msg;
                    var dbHtml='';
                    var j=0;
                    for(var i=0;i<products.length;i++){
                      if((products[i].pid == newdata.choose1)||(products[i].pid == newdata.choose2)||(products[i].pid == newdata.choose3)){
                          dbHtml = dbHtml+'<div class="item item-dest item-'+j+'"><img src="'+products[i].imgsrc+'" alt=""/></div>';
                      }
                    };
                    dbEle.html(dbHtml);
                    inputName.val(newdata.touser).attr('disabled','true');
                    inputName2.val(newdata.fromuser).attr('disabled','true');
                    textConEle.val(newdata.wish).attr('disabled','true');
                    dateEle.html(newdata.date);
                }
            });

        }

        function loadAni(){
            var j = 44;
            var reqAnimateNow = new reqAnimate($('.box-animate img')[0],{
                fps: 30,
                //totalFrames: 50,
                time: Infinity,
                processAnimation: function(){
                    var imgName ="/dist/images/animate/L_000"+j+".jpg";
                    j++;
                    $('.box-animate img').attr('src',imgName);
                    if(j>93){
                        reqAnimateNow.cancel();
                        //show box and letter
                        $('.box-animate').addClass('fadeout').remove(1000);
                        $('.box-bottom').addClass('fade');
                    }
                },
                doneAnimation: function(){

                }
            });
            reqAnimateNow.start();
        };

        //find the letter card ,and then show
        $('.dest-block').on('touchstart',function(){
            self.showLetter();
        });
    };

    gift.prototype.showLetter = function(){
        var self = this;
        $('.card').addClass('goright');
        $('.section-letter').removeClass('hide');
        var aaa = setTimeout(function(){
            Common.gotoPin(1);
        },1000);


        var isprize = false;
        $('.btn-postcard').on('touchstart',function(){
            Api.giftLottery(function(data){
                if(data.code==1){
                    isprize = true;
                    self.prize(isprize);
                }else if(data.code==2){
                    isprize = false;
                    self.prize(isprize);
                }else{
                    alert(data.msg);
                }
            });
        });
    };
    //prize page
    gift.prototype.prize = function(isprize){
        var self = this;
        Common.gotoPin(2);
        $('.box-animate').remove();
        if(isprize){
            $('.replace-text').removeClass('rt-2').addClass('rt-1');
            $('.replace-text img').attr('src','/dist/images/text-key-1.png');
        }else{
            $('.replace-text').removeClass('rt-1').addClass('rt-2');
            $('.replace-text img').attr('src','/dist/images/text-prize-4.png');
            //我也要送好礼祝福
            $('.btn-goform span').html('我也要送好礼祝福');
        }
        //有两种情况，中奖的话就是go form page
        //未中奖就是再送一次祝福 go index page
        $('.btn-goform').on('touchstart',function(){
           if(isprize){
               Common.goFormPage();
           }else{
               Common.goHomePage();
           }
        });

    };




    //dom ready
    $(document).ready(function(){

        var myfurla = new gift();
        myfurla.init();


    });


})();

