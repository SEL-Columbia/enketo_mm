/*! jQuery v1.7.2 jquery.com | jquery.org/license */

(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/*! jQuery UI - v1.9.0-beta.1 - 2012-06-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function(a,b){function e(b,c){var d,e,g,h=b.nodeName.toLowerCase();return"area"===h?(d=b.parentNode,e=d.name,!b.href||!e||d.nodeName.toLowerCase()!=="map"?!1:(g=a("img[usemap=#"+e+"]")[0],!!g&&f(g))):(/input|select|textarea|button|object/.test(h)?!b.disabled:"a"===h?b.href||c:c)&&f(b)}function f(b){return!a(b).parents().andSelf().filter(function(){return a.css(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}var c=0,d=/^ui-id-\d+$/;a.ui=a.ui||{};if(a.ui.version)return;a.extend(a.ui,{version:"1.9.0-beta.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;return a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.css(this,"position"))&&/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++c)})},removeUniqueId:function(){return this.each(function(){d.test(this.id)&&a(this).removeAttr("id")})},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(c,d){function h(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?g["inner"+d].call(this):this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return typeof b!="number"?g["outer"+d].call(this,b):this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return e(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var c=a.attr(b,"tabindex"),d=isNaN(c);return(d||c>=0)&&e(b,!d)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c){var d,e=a.plugins[b];if(!e||!a.element[0].parentNode||a.element[0].parentNode.nodeType===11)return;for(d=0;d<e.length;d++)a.options[e[d][0]]&&e[d][1].apply(a.element,c)}},contains:a.contains,hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}})})(jQuery),function(a,b){var c=0,d=Array.prototype.slice,e=a.cleanData;a.cleanData=function(b){for(var c=0,d;(d=b[c])!=null;c++)try{a(d).triggerHandler("remove")}catch(f){}e(b)},a.widget=function(b,c,d){var e,f,g,h,i=b.split(".")[0];b=b.split(".")[1],e=i+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][e]=function(b){return!!a.data(b,e)},a[i]=a[i]||{},f=a[i][b],g=a[i][b]=function(a,b){if(!this._createWidget)return new g(a,b);arguments.length&&this._createWidget(a,b)},a.extend(g,f,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),h=new c,h.options=a.widget.extend({},h.options),a.each(d,function(b,e){a.isFunction(e)&&(d[b]=function(){var a=function(){return c.prototype[b].apply(this,arguments)},d=function(a){return c.prototype[b].apply(this,a)};return function(){var b=this._super,c=this._superApply,f;return this._super=a,this._superApply=d,f=e.apply(this,arguments),this._super=b,this._superApply=c,f}}())}),g.prototype=a.widget.extend(h,{widgetEventPrefix:b},d,{constructor:g,namespace:i,widgetName:b,widgetBaseClass:e,widgetFullName:e}),f?(a.each(f._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,g,c._proto)}),delete f._childConstructors):c._childConstructors.push(g),a.widget.bridge(b,g)},a.widget.extend=function(c){var e=d.call(arguments,1),f=0,g=e.length,h,i;for(;f<g;f++)for(h in e[f])i=e[f][h],e[f].hasOwnProperty(h)&&i!==b&&(c[h]=a.isPlainObject(i)?a.widget.extend({},c[h],i):i);return c},a.widget.bridge=function(c,e){var f=e.prototype.widgetFullName;a.fn[c]=function(g){var h=typeof g=="string",i=d.call(arguments,1),j=this;return g=!h&&i.length?a.widget.extend.apply(null,[g].concat(i)):g,h?this.each(function(){var d,e=a.data(this,f);if(!e)return a.error("cannot call methods on "+c+" prior to initialization; "+"attempted to call method '"+g+"'");if(!a.isFunction(e[g])||g.charAt(0)==="_")return a.error("no such method '"+g+"' for "+c+" widget instance");d=e[g].apply(e,i);if(d!==e&&d!==b)return j=d&&d.jquery?j.pushStack(d.get()):d,!1}):this.each(function(){var b=a.data(this,f);b?b.option(g||{})._init():new e(g,this)}),j}},a.Widget=function(a,b){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(b,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=a.widget.extend({},this.options,this._getCreateOptions(),b),this.bindings=a(),this.hoverable=a(),this.focusable=a(),d!==this&&(a.data(d,this.widgetName,this),a.data(d,this.widgetFullName,this),this._on({remove:"destroy"}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(c,d){var e=c,f,g,h;if(arguments.length===0)return a.widget.extend({},this.options);if(typeof c=="string"){e={},f=c.split("."),c=f.shift();if(f.length){g=e[c]=a.widget.extend({},this.options[c]);for(h=0;h<f.length-1;h++)g[f[h]]=g[f[h]]||{},g=g[f[h]];c=f.pop();if(d===b)return g[c]===b?null:g[c];g[c]=d}else{if(d===b)return this.options[c]===b?null:this.options[c];e[c]=d}}return this._setOptions(e),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return this.options[a]=b,a==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!b).attr("aria-disabled",b),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(b,c){c?(b=a(b),this.bindings=this.bindings.add(b)):(c=b,b=this.element);var d=this;a.each(c,function(c,e){function f(){if(d.options.disabled===!0||a(this).hasClass("ui-state-disabled"))return;return(typeof e=="string"?d[e]:e).apply(d,arguments)}typeof e!="string"&&(f.guid=e.guid=e.guid||f.guid||a.guid++);var g=c.match(/^(\w+)\s*(.*)$/),h=g[1]+d.eventNamespace,i=g[2];i?d.widget().delegate(i,h,f):b.bind(h,f)})},_off:function(a,b){b=(b||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,a.unbind(b).undelegate(b)},_delay:function(a,b){function c(){return(typeof a=="string"?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){a(b.currentTarget).addClass("ui-state-hover")},mouseleave:function(b){a(b.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){a(b.currentTarget).addClass("ui-state-focus")},focusout:function(b){a(b.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){typeof e=="string"&&(e={effect:e});var g,h=e?e===!0||typeof e=="number"?c:e.effect||c:b;e=e||{},typeof e=="number"&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&(a.effects.effect[h]||a.uiBackCompat!==!1&&a.effects[h])?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}}),a.uiBackCompat!==!1&&(a.Widget.prototype._getCreateOptions=function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]})}(jQuery),function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{version:"1.9.0-beta.1",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){if(c)return;this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which===1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted)return b.preventDefault(),!0}return!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0,!0},_mouseMove:function(b){return!a.browser.msie||document.documentMode>=9||!!b.button?this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted):this._mouseUp(b)},_mouseUp:function(b){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target===this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})}(jQuery),function(a,b){a.widget("ui.draggable",a.ui.mouse,{version:"1.9.0-beta.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(b){var c=this.options;return this.helper||c.disabled||a(b.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(b),this.handle?(a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),c.containment&&this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_mouseDrag:function(b,c){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute");if(!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp({}),!1;this.position=d.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=!1;a.ui.ddmanager&&!this.options.dropBehaviour&&(c=a.ui.ddmanager.drop(this,b)),this.dropped&&(c=this.dropped,this.dropped=!1);var d=this.element[0],e=!1;while(d&&(d=d.parentNode))d==document&&(e=!0);if(!e&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var f=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){f._trigger("stop",b)!==!1&&f._clear()})}else this._trigger("stop",b)!==!1&&this._clear();return!1},_mouseUp:function(b){return this.options.iframeFix===!0&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?!0:!1;return a(this.options.handle,this.element).find("*").andSelf().each(function(){this==b.target&&(c=!0)}),c},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;return d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo),d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute"),d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[b.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(b.containment=="document"?0:a(window).scrollLeft())+a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b.containment=="document"?0:a(window).scrollTop())+(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)&&b.containment.constructor!=Array){var c=a(b.containment),d=c[0];if(!d)return;var e=c.offset(),f=a(d).css("overflow")!="hidden";this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c}else b.containment.constructor==Array&&(this.containment=b.containment)},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d,left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName),f=b.pageX,g=b.pageY;if(this.originalPosition){var h;if(this.containment){if(this.relative_container){var i=this.relative_container.offset();h=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else h=this.containment;b.pageX-this.offset.click.left<h[0]&&(f=h[0]+this.offset.click.left),b.pageY-this.offset.click.top<h[1]&&(g=h[1]+this.offset.click.top),b.pageX-this.offset.click.left>h[2]&&(f=h[2]+this.offset.click.left),b.pageY-this.offset.click.top>h[3]&&(g=h[3]+this.offset.click.top)}if(c.grid){var j=c.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY;g=h?j-this.offset.click.top<h[1]||j-this.offset.click.top>h[3]?j-this.offset.click.top<h[1]?j+c.grid[1]:j-c.grid[1]:j:j;var k=c.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX;f=h?k-this.offset.click.left<h[0]||k-this.offset.click.left>h[2]?k-this.offset.click.left<h[0]?k+c.grid[0]:k-c.grid[0]:k:k}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),b=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(a){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,d.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("draggable"),e=this,f=function(b){var c=this.offset.click.top,d=this.offset.click.left,e=this.positionAbs.top,f=this.positionAbs.left,g=b.height,h=b.width,i=b.top,j=b.left;return a.ui.isOver(e+c,f+d,i,j,g,h)};a.each(d.sortables,function(f){this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c){var d=a("body"),e=a(this).data("draggable").options;d.css("cursor")&&(e._cursor=d.css("cursor")),d.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(b,c){var d=a(this).data("draggable");d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"&&(d.overflowOffset=d.scrollParent.offset())},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=!1;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!="x")d.overflowOffset.top+d.scrollParent[0].offsetHeight-b.pageY<e.scrollSensitivity?d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop-e.scrollSpeed);if(!e.axis||e.axis!="y")d.overflowOffset.left+d.scrollParent[0].offsetWidth-b.pageX<e.scrollSensitivity?d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft-e.scrollSpeed)}else{if(!e.axis||e.axis!="x")b.pageY-a(document).scrollTop()<e.scrollSensitivity?f=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<e.scrollSensitivity&&(f=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed));if(!e.axis||e.axis!="y")b.pageX-a(document).scrollLeft()<e.scrollSensitivity?f=a(document).scrollLeft(a(document).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<e.scrollSensitivity&&(f=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed))}f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c){var d=a(this).data("draggable"),e=d.options;d.snapElements=[],a(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=e.snapTolerance,g=c.offset.left,h=g+d.helperProportions.width,i=c.offset.top,j=i+d.helperProportions.height;for(var k=d.snapElements.length-1;k>=0;k--){var l=d.snapElements[k].left,m=l+d.snapElements[k].width,n=d.snapElements[k].top,o=n+d.snapElements[k].height;if(!(l-f<g&&g<m+f&&n-f<i&&i<o+f||l-f<g&&g<m+f&&n-f<j&&j<o+f||l-f<h&&h<m+f&&n-f<i&&i<o+f||l-f<h&&h<m+f&&n-f<j&&j<o+f)){d.snapElements[k].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=!1;continue}if(e.snapMode!="inner"){var p=Math.abs(n-j)<=f,q=Math.abs(o-i)<=f,r=Math.abs(l-h)<=f,s=Math.abs(m-g)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n-d.helperProportions.height,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l-d.helperProportions.width}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m}).left-d.margins.left)}var t=p||q||r||s;if(e.snapMode!="outer"){var p=Math.abs(n-i)<=f,q=Math.abs(o-j)<=f,r=Math.abs(l-g)<=f,s=Math.abs(m-h)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o-d.helperProportions.height,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m-d.helperProportions.width}).left-d.margins.left)}!d.snapElements[k].snapping&&(p||q||r||s||t)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=p||q||r||s||t}}}),a.ui.plugin.add("draggable","stack",{start:function(b,c){var d=a(this).data("draggable").options,e=a.makeArray(a(d.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});if(!e.length)return;var f=parseInt(e[0].style.zIndex)||0;a(e).each(function(a){this.style.zIndex=f+a}),this[0].style.zIndex=f+e.length}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})}(jQuery),function(a,b){a.widget("ui.droppable",{version:"1.9.0-beta.1",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create:function(){var b=this.options,c=b.accept;this.isover=0,this.isout=1,this.accept=a.isFunction(c)?c:function(a){return a.is(c)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},a.ui.ddmanager.droppables[b.scope]=a.ui.ddmanager.droppables[b.scope]||[],a.ui.ddmanager.droppables[b.scope].push(this),b.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){var b=a.ui.ddmanager.droppables[this.options.scope];for(var c=0;c<b.length;c++)b[c]==this&&b.splice(c,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(b,c){b=="accept"&&(this.accept=a.isFunction(c)?c:function(a){return a.is(c)}),a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),c&&this._trigger("activate",b,this.ui(c))},_deactivate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),c&&this._trigger("deactivate",b,this.ui(c))},_over:function(b){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return;this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",b,this.ui(c)))},_out:function(b){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return;this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",b,this.ui(c)))},_drop:function(b,c){var d=c||a.ui.ddmanager.current;if(!d||(d.currentItem||d.element)[0]==this.element[0])return!1;var e=!1;return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var b=a.data(this,"droppable");if(b.options.greedy&&!b.options.disabled&&b.options.scope==d.options.scope&&b.accept.call(b.element[0],d.currentItem||d.element)&&a.ui.intersect(d,a.extend(b,{offset:b.element.offset()}),b.options.tolerance))return e=!0,!1}),e?!1:this.accept.call(this.element[0],d.currentItem||d.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",b,this.ui(d)),this.element):!1},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}}),a.ui.intersect=function(b,c,d){if(!c.offset)return!1;var e=(b.positionAbs||b.position.absolute).left,f=e+b.helperProportions.width,g=(b.positionAbs||b.position.absolute).top,h=g+b.helperProportions.height,i=c.offset.left,j=i+c.proportions.width,k=c.offset.top,l=k+c.proportions.height;switch(d){case"fit":return i<=e&&f<=j&&k<=g&&h<=l;case"intersect":return i<e+b.helperProportions.width/2&&f-b.helperProportions.width/2<j&&k<g+b.helperProportions.height/2&&h-b.helperProportions.height/2<l;case"pointer":var m=(b.positionAbs||b.position.absolute).left+(b.clickOffset||b.offset.click).left,n=(b.positionAbs||b.position.absolute).top+(b.clickOffset||b.offset.click).top,o=a.ui.isOver(n,m,k,i,c.proportions.height,c.proportions.width);return o;case"touch":return(g>=k&&g<=l||h>=k&&h<=l||g<k&&h>l)&&(e>=i&&e<=j||f>=i&&f<=j||e<i&&f>j);default:return!1}},a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(b,c){var d=a.ui.ddmanager.droppables[b.options.scope]||[],e=c?c.type:null,f=(b.currentItem||b.element).find(":data(droppable)").andSelf();g:for(var h=0;h<d.length;h++){if(d[h].options.disabled||b&&!d[h].accept.call(d[h].element[0],b.currentItem||b.element))continue;for(var i=0;i<f.length;i++)if(f[i]==d[h].element[0]){d[h].proportions.height=0;continue g}d[h].visible=d[h].element.css("display")!="none";if(!d[h].visible)continue;e=="mousedown"&&d[h]._activate.call(d[h],c),d[h].offset=d[h].element.offset(),d[h].proportions={width:d[h].element[0].offsetWidth,height:d[h].element[0].offsetHeight}}},drop:function(b,c){var d=!1;return a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(!this.options)return;!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance)&&(d=this._drop.call(this,c)||d),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],b.currentItem||b.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,c))}),d},dragStart:function(b,c){b.element.parentsUntil("body").bind("scroll.droppable",function(){b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)})},drag:function(b,c){b.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(b,c),a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var d=a.ui.intersect(b,this,this.options.tolerance),e=!d&&this.isover==1?"isout":d&&this.isover==0?"isover":null;if(!e)return;var f;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");g.length&&(f=a.data(g[0],"droppable"),f.greedyChild=e=="isover"?1:0)}f&&e=="isover"&&(f.isover=0,f.isout=1,f._out.call(f,c)),this[e]=1,this[e=="isout"?"isover":"isout"]=0,this[e=="isover"?"_over":"_out"].call(this,c),f&&e=="isout"&&(f.isout=0,f.isover=1,f._over.call(f,c))})},dragStop:function(b,c){b.element.parentsUntil("body").unbind("scroll.droppable"),b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)}}}(jQuery),function(a,b){a.widget("ui.resizable",a.ui.mouse,{version:"1.9.0-beta.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1e3},_create:function(){var b=this,c=this.options;this.element.addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!c.aspectRatio,aspectRatio:c.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:c.helper||c.ghost||c.animate?c.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("resizable",this.element.data("resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=c.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");if(this.handles.constructor==String){this.handles=="all"&&(this.handles="n,e,s,w,se,sw,ne,nw");var d=this.handles.split(",");this.handles={};for(var e=0;e<d.length;e++){var f=a.trim(d[e]),g="ui-resizable-"+f,h=a('<div class="ui-resizable-handle '+g+'"></div>');h.css({zIndex:c.zIndex}),"se"==f&&h.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[f]=".ui-resizable-"+f,this.element.append(h)}}this._renderAxis=function(b){b=b||this.element;for(var c in this.handles){this.handles[c].constructor==String&&(this.handles[c]=a(this.handles[c],this.element).show());if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var d=a(this.handles[c],this.element),e=0;e=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth();var f=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join("");b.css(f,e),this._proportionallyResize()}if(!a(this.handles[c]).length)continue}},this._renderAxis(this.element),this._handles=a(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){if(!b.resizing){if(this.className)var a=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=a&&a[1]?a[1]:"se"}}),c.autoHide&&(this._handles.hide(),a(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(c.disabled)return;a(this).removeClass("ui-resizable-autohide"),b._handles.show()}).mouseleave(function(){if(c.disabled)return;b.resizing||(a(this).addClass("ui-resizable-autohide"),b._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var b=function(b){a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){b(this.element);var c=this.element;c.after(this.originalElement.css({position:c.css("position"),width:c.outerWidth(),height:c.outerHeight(),top:c.css("top"),left:c.css("left")})).remove()}return this.originalElement.css("resize",this.originalResizeStyle),b(this.originalElement),this},_mouseCapture:function(b){var c=!1;for(var d in this.handles)a(this.handles[d])[0]==b.target&&(c=!0);return!this.options.disabled&&c},_mouseStart:function(b){var d=this.options,e=this.element.position(),f=this.element;this.resizing=!0,this.documentScroll={top:a(document).scrollTop(),left:a(document).scrollLeft()},(f.is(".ui-draggable")||/absolute/.test(f.css("position")))&&f.css({position:"absolute",top:e.top,left:e.left}),this._renderProxy();var g=c(this.helper.css("left")),h=c(this.helper.css("top"));d.containment&&(g+=a(d.containment).scrollLeft()||0,h+=a(d.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:g,top:h},this.size=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalSize=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalPosition={left:g,top:h},this.sizeDiff={width:f.outerWidth()-f.width(),height:f.outerHeight()-f.height()},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio=typeof d.aspectRatio=="number"?d.aspectRatio:this.originalSize.width/this.originalSize.height||1;var i=a(".ui-resizable-"+this.axis).css("cursor");return a("body").css("cursor",i=="auto"?this.axis+"-resize":i),f.addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(a){var b=this.helper,c=this.options,d={},e=this,f=this.originalMousePosition,g=this.axis,h=a.pageX-f.left||0,i=a.pageY-f.top||0,j=this._change[g];if(!j)return!1;var k=j.apply(this,[a,h,i]);this._updateVirtualBoundaries(a.shiftKey);if(this._aspectRatio||a.shiftKey)k=this._updateRatio(k,a);return k=this._respectSize(k,a),this._propagate("resize",a),b.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"}),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),this._updateCache(k),this._trigger("resize",a,this.ui()),!1},_mouseStop:function(b){this.resizing=!1;var c=this.options,d=this;if(this._helper){var e=this._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&a.ui.hasScroll(e[0],"left")?0:d.sizeDiff.height,h=f?0:d.sizeDiff.width,i={width:d.helper.width()-h,height:d.helper.height()-g},j=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null,k=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null;c.animate||this.element.css(a.extend(i,{top:k,left:j})),d.helper.height(d.size.height),d.helper.width(d.size.width),this._helper&&!c.animate&&this._proportionallyResize()}return a("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(a){var b=this.options,c,e,f,g,h;h={minWidth:d(b.minWidth)?b.minWidth:0,maxWidth:d(b.maxWidth)?b.maxWidth:Infinity,minHeight:d(b.minHeight)?b.minHeight:0,maxHeight:d(b.maxHeight)?b.maxHeight:Infinity};if(this._aspectRatio||a)c=h.minHeight*this.aspectRatio,f=h.minWidth/this.aspectRatio,e=h.maxHeight*this.aspectRatio,g=h.maxWidth/this.aspectRatio,c>h.minWidth&&(h.minWidth=c),f>h.minHeight&&(h.minHeight=f),e<h.maxWidth&&(h.maxWidth=e),g<h.maxHeight&&(h.maxHeight=g);this._vBoundaries=h},_updateCache:function(a){var b=this.options;this.offset=this.helper.offset(),d(a.left)&&(this.position.left=a.left),d(a.top)&&(this.position.top=a.top),d(a.height)&&(this.size.height=a.height),d(a.width)&&(this.size.width=a.width)},_updateRatio:function(a,b){var c=this.options,e=this.position,f=this.size,g=this.axis;return d(a.height)?a.width=a.height*this.aspectRatio:d(a.width)&&(a.height=a.width/this.aspectRatio),g=="sw"&&(a.left=e.left+(f.width-a.width),a.top=null),g=="nw"&&(a.top=e.top+(f.height-a.height),a.left=e.left+(f.width-a.width)),a},_respectSize:function(a,b){var c=this.helper,e=this._vBoundaries,f=this._aspectRatio||b.shiftKey,g=this.axis,h=d(a.width)&&e.maxWidth&&e.maxWidth<a.width,i=d(a.height)&&e.maxHeight&&e.maxHeight<a.height,j=d(a.width)&&e.minWidth&&e.minWidth>a.width,k=d(a.height)&&e.minHeight&&e.minHeight>a.height;j&&(a.width=e.minWidth),k&&(a.height=e.minHeight),h&&(a.width=e.maxWidth),i&&(a.height=e.maxHeight);var l=this.originalPosition.left+this.originalSize.width,m=this.position.top+this.size.height,n=/sw|nw|w/.test(g),o=/nw|ne|n/.test(g);j&&n&&(a.left=l-e.minWidth),h&&n&&(a.left=l-e.maxWidth),k&&o&&(a.top=m-e.minHeight),i&&o&&(a.top=m-e.maxHeight);var p=!a.width&&!a.height;return p&&!a.left&&a.top?a.top=null:p&&!a.top&&a.left&&(a.left=null),a},_proportionallyResize:function(){var b=this.options;if(!this._proportionallyResizeElements.length)return;var c=this.helper||this.element;for(var d=0;d<this._proportionallyResizeElements.length;d++){var e=this._proportionallyResizeElements[d];if(!this.borderDif){var f=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],g=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];this.borderDif=a.map(f,function(a,b){var c=parseInt(a,10)||0,d=parseInt(g[b],10)||0;return c+d})}e.css({height:c.height()-this.borderDif[0]-this.borderDif[2]||0,width:c.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset();if(this._helper){this.helper=this.helper||a('<div style="overflow:hidden;"></div>');var d=a.browser.msie&&a.browser.version<7,e=d?1:0,f=d?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+f,height:this.element.outerHeight()+f,position:"absolute",left:this.elementOffset.left-e+"px",top:this.elementOffset.top-e+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(a,b,c){return{width:this.originalSize.width+b}},w:function(a,b,c){var d=this.options,e=this.originalSize,f=this.originalPosition;return{left:f.left+b,width:e.width-b}},n:function(a,b,c){var d=this.options,e=this.originalSize,f=this.originalPosition;return{top:f.top+c,height:e.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),b!="resize"&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.ui.plugin.add("resizable","alsoResize",{start:function(b,c){var d=a(this).data("resizable"),e=d.options,f=function(b){a(b).each(function(){var b=a(this);b.data("resizable-alsoresize",{width:parseInt(b.width(),10),height:parseInt(b.height(),10),left:parseInt(b.css("left"),10),top:parseInt(b.css("top"),10)})})};typeof e.alsoResize=="object"&&!e.alsoResize.parentNode?e.alsoResize.length?(e.alsoResize=e.alsoResize[0],f(e.alsoResize)):a.each(e.alsoResize,function(a){f(a)}):f(e.alsoResize)},resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0},i=function(b,d){a(b).each(function(){var b=a(this),e=a(this).data("resizable-alsoresize"),f={},g=d&&d.length?d:b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(g,function(a,b){var c=(e[b]||0)+(h[b]||0);c&&c>=0&&(f[b]=c||null)}),b.css(f)})};typeof e.alsoResize=="object"&&!e.alsoResize.nodeType?a.each(e.alsoResize,function(a,b){i(a,b)}):i(e.alsoResize)},stop:function(b,c){a(this).removeData("resizable-alsoresize")}}),a.ui.plugin.add("resizable","animate",{stop:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d._proportionallyResizeElements,g=f.length&&/textarea/i.test(f[0].nodeName),h=g&&a.ui.hasScroll(f[0],"left")?0:d.sizeDiff.height,i=g?0:d.sizeDiff.width,j={width:d.size.width-i,height:d.size.height-h},k=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null,l=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null;d.element.animate(a.extend(j,l&&k?{top:l,left:k}:{}),{duration:e.animateDuration,easing:e.animateEasing,step:function(){var c={width:parseInt(d.element.css("width"),10),height:parseInt(d.element.css("height"),10),top:parseInt(d.element.css("top"),10),left:parseInt(d.element.css("left"),10)};f&&f.length&&a(f[0]).css({width:c.width,height:c.height}),d._updateCache(c),d._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(b,d){var e=a(this).data("resizable"),f=e.options,g=e.element,h=f.containment,i=h instanceof a?h.get(0):/parent/.test(h)?g.parent().get(0):h;if(!i)return;e.containerElement=a(i);if(/document/.test(h)||h==document)e.containerOffset={left:0,top:0},e.containerPosition={left:0,top:0},e.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight};else{var j=a(i),k=[];a(["Top","Right","Left","Bottom"]).each(function(a,b){k[a]=c(j.css("padding"+b))}),e.containerOffset=j.offset(),e.containerPosition=j.position(),e.containerSize={height:j.innerHeight()-k[3],width:j.innerWidth()-k[1]};var l=e.containerOffset,m=e.containerSize.height,n=e.containerSize.width,o=a.ui.hasScroll(i,"left")?i.scrollWidth:n,p=a.ui.hasScroll(i)?i.scrollHeight:m;e.parentData={element:i,left:l.left,top:l.top,width:o,height:p}}},resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.containerSize,g=d.containerOffset,h=d.size,i=d.position,j=d._aspectRatio||b.shiftKey,k={top:0,left:0},l=d.containerElement;l[0]!=document&&/static/.test(l.css("position"))&&(k=g),i.left<(d._helper?g.left:0)&&(d.size.width=d.size.width+(d._helper?d.position.left-g.left:d.position.left-k.left),j&&(d.size.height=d.size.width/d.aspectRatio),d.position.left=e.helper?g.left:0),i.top<(d._helper?g.top:0)&&(d.size.height=d.size.height+(d._helper?d.position.top-g.top:d.position.top),j&&(d.size.width=d.size.height*d.aspectRatio),d.position.top=d._helper?g.top:0),d.offset.left=d.parentData.left+d.position.left,d.offset.top=d.parentData.top+d.position.top;var m=Math.abs((d._helper?d.offset.left-k.left:d.offset.left-k.left)+d.sizeDiff.width),n=Math.abs((d._helper?d.offset.top-k.top:d.offset.top-g.top)+d.sizeDiff.height),o=d.containerElement.get(0)==d.element.parent().get(0),p=/relative|absolute/.test(d.containerElement.css("position"));o&&p&&(m-=d.parentData.left),m+d.size.width>=d.parentData.width&&(d.size.width=d.parentData.width-m,j&&(d.size.height=d.size.width/d.aspectRatio)),n+d.size.height>=d.parentData.height&&(d.size.height=d.parentData.height-n,j&&(d.size.width=d.size.height*d.aspectRatio))},stop:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.position,g=d.containerOffset,h=d.containerPosition,i=d.containerElement,j=a(d.helper),k=j.offset(),l=j.outerWidth()-d.sizeDiff.width,m=j.outerHeight()-d.sizeDiff.height;d._helper&&!e.animate&&/relative/.test(i.css("position"))&&a(this).css({left:k.left-h.left-g.left,width:l,height:m}),d._helper&&!e.animate&&/static/.test(i.css("position"))&&a(this).css({left:k.left-h.left-g.left,width:l,height:m})}}),a.ui.plugin.add("resizable","ghost",{start:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.size;d.ghost=d.originalElement.clone(),d.ghost.css({opacity:.25,display:"block",position:"relative",height:f.height,width:f.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof e.ghost=="string"?e.ghost:""),d.ghost.appendTo(d.helper)},resize:function(b,c){var d=a(this).data("resizable"),e=d.options;d.ghost&&d.ghost.css({position:"relative",height:d.size.height,width:d.size.width})},stop:function(b,c){var d=a(this).data("resizable"),e=d.options;d.ghost&&d.helper&&d.helper.get(0).removeChild(d.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.size,g=d.originalSize,h=d.originalPosition,i=d.axis,j=e._aspectRatio||b.shiftKey;e.grid=typeof e.grid=="number"?[e.grid,e.grid]:e.grid;var k=Math.round((f.width-g.width)/(e.grid[0]||1))*(e.grid[0]||1),l=Math.round((f.height-g.height)/(e.grid[1]||1))*(e.grid[1]||1);/^(se|s|e)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l):/^(ne)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l,d.position.top=h.top-l):/^(sw)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l,d.position.left=h.left-k):(d.size.width=g.width+k,d.size.height=g.height+l,d.position.top=h.top-l,d.position.left=h.left-k)}});var c=function(a){return parseInt(a,10)||0},d=function(a){return!isNaN(parseInt(a,10))}}(jQuery),function(a,b){a.widget("ui.selectable",a.ui.mouse,{version:"1.9.0-beta.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch"},_create:function(){var b=this;this.element.addClass("ui-selectable"),this.dragged=!1;var c;this.refresh=function(){c=a(b.options.filter,b.element[0]),c.addClass("ui-selectee"),c.each(function(){var b=a(this),c=b.offset();a.data(this,"selectable-item",{element:this,$element:b,left:c.left,top:c.top,right:c.left+b.outerWidth(),bottom:c.top+b.outerHeight(),startselected:!1,selected:b.hasClass("ui-selected"),selecting:b.hasClass("ui-selecting"),unselecting:b.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=c.addClass("ui-selectee"),this._mouseInit(),this.helper=a("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(b){var c=this;this.opos=[b.pageX,b.pageY];if(this.options.disabled)return;var d=this.options;this.selectees=a(d.filter,this.element[0]),this._trigger("start",b),a(d.appendTo).append(this.helper),this.helper.css({left:b.clientX,top:b.clientY,width:0,height:0}),d.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var d=a.data(this,"selectable-item");d.startselected=!0,!b.metaKey&&!b.ctrlKey&&(d.$element.removeClass("ui-selected"),d.selected=!1,d.$element.addClass("ui-unselecting"),d.unselecting=!0,c._trigger("unselecting",b,{unselecting:d.element}))}),a(b.target).parents().andSelf().each(function(){var d=a.data(this,"selectable-item");if(d){var e=!b.metaKey&&!b.ctrlKey||!d.$element.hasClass("ui-selected");return d.$element.removeClass(e?"ui-unselecting":"ui-selected").addClass(e?"ui-selecting":"ui-unselecting"),d.unselecting=!e,d.selecting=e,d.selected=e,e?c._trigger("selecting",b,{selecting:d.element}):c._trigger("unselecting",b,{unselecting:d.element}),!1}})},_mouseDrag:function(b){var c=this;this.dragged=!0;if(this.options.disabled)return;var d=this.options,e=this.opos[0],f=this.opos[1],g=b.pageX,h=b.pageY;if(e>g){var i=g;g=e,e=i}if(f>h){var i=h;h=f,f=i}return this.helper.css({left:e,top:f,width:g-e,height:h-f}),this.selectees.each(function(){var i=a.data(this,"selectable-item");if(!i||i.element==c.element[0])return;var j=!1;d.tolerance=="touch"?j=!(i.left>g||i.right<e||i.top>h||i.bottom<f):d.tolerance=="fit"&&(j=i.left>e&&i.right<g&&i.top>f&&i.bottom<h),j?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,c._trigger("selecting",b,{selecting:i.element}))):(i.selecting&&((b.metaKey||b.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),c._trigger("unselecting",b,{unselecting:i.element}))),i.selected&&!b.metaKey&&!b.ctrlKey&&!i.startselected&&(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,c._trigger("unselecting",b,{unselecting:i.element})))}),!1},_mouseStop:function(b){var c=this;this.dragged=!1;var d=this.options;return a(".ui-unselecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-unselecting"),d.unselecting=!1,d.startselected=!1,c._trigger("unselected",b,{unselected:d.element})}),a(".ui-selecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected"),d.selecting=!1,d.selected=!0,d.startselected=!0,c._trigger("selected",b,{selected:d.element})}),this._trigger("stop",b),this.helper.remove(),!1}})}(jQuery),function(a,b){a.widget("ui.sortable",a.ui.mouse,{version:"1.9.0-beta.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var a=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?a.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData(this.widgetName+"-item");return this},_setOption:function(b,c){b==="disabled"?(this.options[b]=c,this.widget().toggleClass("ui-sortable-disabled",!!c)):a.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(b,c){var d=this;if(this.reverting)return!1;if(this.options.disabled||this.options.type=="static")return!1;this._refreshItems(b);var e=null,f=a(b.target).parents().each(function(){if(a.data(this,d.widgetName+"-item")==d)return e=a(this),!1});a.data(b.target,d.widgetName+"-item")==d&&(e=a(b.target));if(!e)return!1;if(this.options.handle&&!c){var g=!1;a(this.options.handle,e).find("*").andSelf().each(function(){this==b.target&&(g=!0)});if(!g)return!1}return this.currentItem=e,this._removeCurrentsFromItems(),!0},_mouseStart:function(b,c,d){var e=this.options;this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(b),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),e.containment&&this._setContainment(),e.cursor&&(a("body").css("cursor")&&(this._storedCursor=a("body").css("cursor")),a("body").css("cursor",e.cursor)),e.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",e.opacity)),e.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",e.zIndex)),this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",b,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();if(!d)for(var f=this.containers.length-1;f>=0;f--)this.containers[f]._trigger("activate",b,this._uiHash(this));return a.ui.ddmanager&&(a.ui.ddmanager.current=this),a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(b),!0},_mouseDrag:function(b){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs);if(this.options.scroll){var c=this.options,d=!1;this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-b.pageY<c.scrollSensitivity?this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop+c.scrollSpeed:b.pageY-this.overflowOffset.top<c.scrollSensitivity&&(this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop-c.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-b.pageX<c.scrollSensitivity?this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft+c.scrollSpeed:b.pageX-this.overflowOffset.left<c.scrollSensitivity&&(this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft-c.scrollSpeed)):(b.pageY-a(document).scrollTop()<c.scrollSensitivity?d=a(document).scrollTop(a(document).scrollTop()-c.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<c.scrollSensitivity&&(d=a(document).scrollTop(a(document).scrollTop()+c.scrollSpeed)),b.pageX-a(document).scrollLeft()<c.scrollSensitivity?d=a(document).scrollLeft(a(document).scrollLeft()-c.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<c.scrollSensitivity&&(d=a(document).scrollLeft(a(document).scrollLeft()+c.scrollSpeed))),d!==!1&&a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(var e=this.items.length-1;e>=0;e--){var f=this.items[e],g=f.item[0],h=this._intersectsWithPointer(f);if(!h)continue;if(g!=this.currentItem[0]&&this.placeholder[h==1?"next":"prev"]()[0]!=g&&!a.contains(this.placeholder[0],g)&&(this.options.type=="semi-dynamic"?!a.contains(this.element[0],g):!0)){this.direction=h==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(f))this._rearrange(b,f);else break;this._trigger("change",b,this._uiHash());break}}return this._contactContainers(b),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),this._trigger("sort",b,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(b,c){if(!b)return;a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,b);if(this.options.revert){var d=this,e=this.placeholder.offset();this.reverting=!0,a(this.helper).animate({left:e.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:e.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){d._clear(b)})}else this._clear(b,c);return!1},cancel:function(){if(this.dragging){this._mouseUp({target:null}),this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var b=this.containers.length-1;b>=0;b--)this.containers[b]._trigger("deactivate",null,this._uiHash(this)),this.containers[b].containerCache.over&&(this.containers[b]._trigger("out",null,this._uiHash(this)),this.containers[b].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),a.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},a(c).each(function(){var c=(a(b.item||this).attr(b.attribute||"id")||"").match(b.expression||/(.+)[-=_](.+)/);c&&d.push((b.key||c[1]+"[]")+"="+(b.key&&b.expression?c[1]:c[2]))}),!d.length&&b.key&&d.push(b.key+"="),d.join("&")},toArray:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},c.each(function(){d.push(a(b.item||this).attr(b.attribute||"id")||"")}),d},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,e=d+this.helperProportions.height,f=a.left,g=f+a.width,h=a.top,i=h+a.height,j=this.offset.click.top,k=this.offset.click.left,l=d+j>h&&d+j<i&&b+k>f&&b+k<g;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?l:f<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<g&&h<d+this.helperProportions.height/2&&e-this.helperProportions.height/2<i},_intersectsWithPointer:function(b){var c=this.options.axis==="x"||a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,b.top,b.height),d=this.options.axis==="y"||a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,b.left,b.width),e=c&&d,f=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();return e?this.floating?g&&g=="right"||f=="down"?2:1:f&&(f=="down"?2:1):!1},_intersectsWithSides:function(b){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,b.top+b.height/2,b.height),d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,b.left+b.width/2,b.width),e=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();return this.floating&&f?f=="right"&&d||f=="left"&&!d:e&&(e=="down"&&c||e=="up"&&!c)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return a!=0&&(a>0?"right":"left")},refresh:function(a){return this._refreshItems(a),this.refreshPositions(),this},_connectWith:function(){var a=this.options;return a.connectWith.constructor==String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(b){var c=[],d=[],e=this._connectWith();if(e&&b)for(var f=e.length-1;f>=0;f--){var g=a(e[f]);for(var h=g.length-1;h>=0;h--){var i=a.data(g[h],this.widgetName);i&&i!=this&&!i.options.disabled&&d.push([a.isFunction(i.options.items)?i.options.items.call(i.element):a(i.options.items,i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),i])}}d.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var f=d.length-1;f>=0;f--)d[f][0].each(function(){c.push(this)});return a(c)},_removeCurrentsFromItems:function(){var a=this.currentItem.find(":data("+this.widgetName+"-item)");for(var b=0;b<this.items.length;b++)for(var c=0;c<a.length;c++)a[c]==this.items[b].item[0]&&this.items.splice(b,1)},_refreshItems:function(b){this.items=[],this.containers=[this];var c=this.items,d=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]],e=this._connectWith();if(e&&this.ready)for(var f=e.length-1;f>=0;f--){var g=a(e[f]);for(var h=g.length-1;h>=0;h--){var i=a.data(g[h],this.widgetName);i&&i!=this&&!i.options.disabled&&(d.push([a.isFunction(i.options.items)?i.options.items.call(i.element[0],b,{item:this.currentItem}):a(i.options.items,i.element),i]),this.containers.push(i))}}for(var f=d.length-1;f>=0;f--){var j=d[f][1],k=d[f][0];for(var h=0,l=k.length;h<l;h++){var m=a(k[h]);m.data(this.widgetName+"-item",j),c.push({item:m,instance:j,width:0,height:0,left:0,top:0})}}},refreshPositions:function(b){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var c=this.items.length-1;c>=0;c--){var d=this.items[c];if(d.instance!=this.currentContainer&&this.currentContainer&&d.item[0]!=this.currentItem[0])continue;var e=this.options.toleranceElement?a(this.options.toleranceElement,d.item):d.item;b||(d.width=e.outerWidth(),d.height=e.outerHeight());var f=e.offset();d.left=f.left,d.top=f.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(var c=this.containers.length-1;c>=0;c--){var f=this.containers[c].element.offset();this.containers[c].containerCache.left=f.left,this.containers[c].containerCache.top=f.top,this.containers[c].containerCache.width=this.containers[c].element.outerWidth(),this.containers[c].containerCache.height=this.containers[c].element.outerHeight()}return this},_createPlaceholder:function(b){b=b||this;var c=b.options;if(!c.placeholder||c.placeholder.constructor==String){var d=c.placeholder;c.placeholder={element:function(){var c=a(document.createElement(b.currentItem[0].nodeName)).addClass(d||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return d||(c.style.visibility="hidden"),c},update:function(a,e){if(d&&!c.forcePlaceholderSize)return;e.height()||e.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10)),e.width()||e.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10))}}}b.placeholder=a(c.placeholder.element.call(b.element,b.currentItem)),b.currentItem.after(b.placeholder),c.placeholder.update(b,b.placeholder)},_contactContainers:function(b){var c=null,d=null;for(var e=this.containers.length-1;e>=0;e--){if(a.contains(this.currentItem[0],this.containers[e].element[0]))continue;if(this._intersectsWith(this.containers[e].containerCache)){if(c&&a.contains(this.containers[e].element[0],c.element[0]))continue;c=this.containers[e],d=e}else this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",b,this._uiHash(this)),this.containers[e].containerCache.over=0)}if(!c)return;if(this.containers.length===1)this.containers[d]._trigger("over",b,this._uiHash(this)),this.containers[d].containerCache.over=1;else if(this.currentContainer!=this.containers[d]){var f=1e4,g=null,h=this.positionAbs[this.containers[d].floating?"left":"top"];for(var i=this.items.length-1;i>=0;i--){if(!a.contains(this.containers[d].element[0],this.items[i].item[0]))continue;var j=this.containers[d].floating?this.items[i].item.offset().left:this.items[i].item.offset().top;Math.abs(j-h)<f&&(f=Math.abs(j-h),g=this.items[i],this.direction=j-h>0?"down":"up")}if(!g&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[d],g?this._rearrange(b,g,null,!0):this._rearrange(b,null,this.containers[d].element,!0),this._trigger("change",b,this._uiHash()),this.containers[d]._trigger("change",b,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[d]._trigger("over",b,this._uiHash(this)),this.containers[d].containerCache.over=1}},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b,this.currentItem])):c.helper=="clone"?this.currentItem.clone():this.currentItem;return d.parents("body").length||a(c.appendTo!="parent"?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]),d[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(d[0].style.width==""||c.forceHelperSize)&&d.width(this.currentItem.width()),(d[0].style.height==""||c.forceHelperSize)&&d.height(this.currentItem.height()),d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)){var c=a(b.containment)[0],d=a(b.containment).offset(),e=a(c).css("overflow")!="hidden";this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(e?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(e?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d,left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName);this.cssPosition=="relative"&&(this.scrollParent[0]==document||this.scrollParent[0]==this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset());var f=b.pageX,g=b.pageY;if(this.originalPosition){this.containment&&(b.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),b.pageY-this.offset.click.top<this.containment[1]&&(g=this.containment[1]+this.offset.click.top),b.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),b.pageY-this.offset.click.top>this.containment[3]&&(g=this.containment[3]+this.offset.click.top));if(c.grid){var h=this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1];g=this.containment?h-this.offset.click.top<this.containment[1]||h-this.offset.click.top>this.containment[3]?h-this.offset.click.top<this.containment[1]?h+c.grid[1]:h-c.grid[1]:h:h;var i=this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0];f=this.containment?i-this.offset.click.left<this.containment[0]||i-this.offset.click.left>this.containment[2]?i-this.offset.click.left<this.containment[0]?i+c.grid[0]:i-c.grid[0]:i:i}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?b.item[0]:b.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var e=this.counter;this._delay(function(){e==this.counter&&this.refreshPositions(!d)})},_clear:function(b,c){this.reverting=!1;var d=[];!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var e in this._storedCSS)if(this._storedCSS[e]=="auto"||this._storedCSS[e]=="static")this._storedCSS[e]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!c&&d.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!c&&d.push(function(a){this._trigger("update",a,this._uiHash())});if(!a.contains(this.element[0],this.currentItem[0])){c||d.push(function(a){this._trigger("remove",a,this._uiHash())});for(var e=this.containers.length-1;e>=0;e--)a.contains(this.containers[e].element[0],this.currentItem[0])&&!c&&(d.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.containers[e])),d.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.containers[e])))}for(var e=this.containers.length-1;e>=0;e--)c||d.push(function(a){return function(b){a._trigger("deactivate",b,this._uiHash(this))}}.call(this,this.containers[e])),this.containers[e].containerCache.over&&(d.push(function(a){return function(b){a._trigger("out",b,this._uiHash(this))}}.call(this,this.containers[e])),this.containers[e].containerCache.over=0);this._storedCursor&&a("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex),this.dragging=!1;if(this.cancelHelperRemoval){if(!c){this._trigger("beforeStop",b,this._uiHash());for(var e=0;e<d.length;e++)d[e].call(this,b);this._trigger("stop",b,this._uiHash())}return!1}c||this._trigger("beforeStop",b,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!=this.currentItem[0]&&this.helper.remove(),this.helper=null;if(!c){for(var e=0;e<d.length;e++)d[e].call(this,b);this._trigger("stop",b,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(b){var c=b||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:b?b.element:null}}})}(jQuery),jQuery.effects||function(a,b){var c=a.uiBackCompat!==!1,d="ui-effects-";a.effects={effect:{}},function(a,b){function l(a,b,c){var d=h[b.type]||{},e=c||b.empty;return e&&a==null?null:b.def&&a==null?b.def:(d.floor?a=~~a:a=parseFloat(a),a==null||isNaN(a)?b.def:d.mod?(a%=d.mod,a<0?d.mod+a:a):d.min>a?d.min:d.max<a?d.max:a)}function m(b){var c=f(),d=c._rgba=[];return b=b.toLowerCase(),k(e,function(a,e){var f=e.re.exec(b),h=f&&e.parse(f),i,j=e.space||"rgba",k=g[j].cache;if(h)return i=c[j](h),c[k]=i[k],d=c._rgba=i._rgba,!1}),d.length!==0?(Math.max.apply(Math,d)===0&&a.extend(d,j.transparent),c):j[b]}function n(a,b,c){return c=(c+1)%1,c*6<1?a+(b-a)*6*c:c*2<1?b:c*3<2?a+(b-a)*(2/3-c)*6:a}var c="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color outlineColor".split(" "),d=/^([\-+])=\s*(\d+\.?\d*)/,e=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{re:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],f=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e)},g={rgba:{cache:"_rgba",props:{red:{idx:0,type:"byte",empty:!0},green:{idx:1,type:"byte",empty:!0},blue:{idx:2,type:"byte",empty:!0},alpha:{idx:3,type:"percent",def:1}}},hsla:{cache:"_hsla",props:{hue:{idx:0,type:"degrees",empty:!0},saturation:{idx:1,type:"percent",empty:!0},lightness:{idx:2,type:"percent",empty:!0}}}},h={"byte":{floor:!0,min:0,max:255},percent:{min:0,max:1},degrees:{mod:360,floor:!0}},i=f.support={},j,k=a.each;g.hsla.props.alpha=g.rgba.props.alpha,f.fn=a.extend(f.prototype,{parse:function(c,d,e,h){if(c===b)return this._rgba=[null,null,null,null],this;if(c.jquery||c.nodeType)c=a(c).css(d),d=b;var i=this,n=a.type(c),o=this._rgba=[],p;d!==b&&(c=[c,d,e,h],n="array");if(n==="string")return this.parse(m(c)||j._default);if(n==="array")return k(g.rgba.props,function(a,b){o[b.idx]=l(c[b.idx],b)}),this;if(n==="object")return c instanceof f?k(g,function(a,b){c[b.cache]&&(i[b.cache]=c[b.cache].slice())}):k(g,function(a,b){k(b.props,function(a,d){var e=b.cache;if(!i[e]&&b.to){if(c[a]==null||a==="alpha")return;i[e]=b.to(i._rgba)}i[e][d.idx]=l(c[a],d,!0)})}),this},is:function(a){var b=f(a),c=!0,d=this;return k(g,function(a,e){var f=b[e.cache],g;return f&&(g=d[e.cache]||e.to&&e.to(d._rgba)||[],k(e.props,function(a,b){if(f[b.idx]!=null)return c=f[b.idx]===g[b.idx],c})),c}),c},_space:function(){var a=[],b=this;return k(g,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(a,b){var c=f(a),d=c._space(),e=g[d],i=this[e.cache]||e.to(this._rgba),j=i.slice();return c=c[e.cache],k(e.props,function(a,d){var e=d.idx,f=i[e],g=c[e],k=h[d.type]||{};if(g===null)return;f===null?j[e]=g:(k.mod&&(g-f>k.mod/2?f+=k.mod:f-g>k.mod/2&&(f-=k.mod)),j[d.idx]=l((g-f)*b+f,d))}),this[d](j)},blend:function(b){if(this._rgba[3]===1)return this;var c=this._rgba.slice(),d=c.pop(),e=f(b)._rgba;return f(a.map(c,function(a,b){return(1-d)*e[b]+d*a}))},toRgbaString:function(){var b="rgba(",c=a.map(this._rgba,function(a,b){return a==null?b>2?1:0:a});return c[3]===1&&(c.pop(),b="rgb("),b+c.join(",")+")"},toHslaString:function(){var b="hsla(",c=a.map(this.hsla(),function(a,b){return a==null&&(a=b>2?1:0),b&&b<3&&(a=Math.round(a*100)+"%"),a});return c[3]===1&&(c.pop(),b="hsl("),b+c.join(",")+")"},toHexString:function(b){var c=this._rgba.slice(),d=c.pop();return b&&c.push(~~(d*255)),"#"+a.map(c,function(a,b){return a=(a||0).toString(16),a.length===1?"0"+a:a}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),f.fn.parse.prototype=f.fn,g.hsla.to=function(a){if(a[0]==null||a[1]==null||a[2]==null)return[null,null,null,a[3]];var b=a[0]/255,c=a[1]/255,d=a[2]/255,e=a[3],f=Math.max(b,c,d),g=Math.min(b,c,d),h=f-g,i=f+g,j=i*.5,k,l;return g===f?k=0:b===f?k=60*(c-d)/h+360:c===f?k=60*(d-b)/h+120:k=60*(b-c)/h+240,j===0||j===1?l=j:j<=.5?l=h/i:l=h/(2-i),[Math.round(k)%360,l,j,e==null?1:e]},g.hsla.from=function(a){if(a[0]==null||a[1]==null||a[2]==null)return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2],e=a[3],f=d<=.5?d*(1+c):d+c-d*c,g=2*d-f,h,i,j;return[Math.round(n(g,f,b+1/3)*255),Math.round(n(g,f,b)*255),Math.round(n(g,f,b-1/3)*255),e]},k(g,function(c,e){var g=e.props,h=e.cache,i=e.to,j=e.from;f.fn[c]=function(c){i&&!this[h]&&(this[h]=i(this._rgba));if(c===b)return this[h].slice();var d=a.type(c),e=d==="array"||d==="object"?c:arguments,m=this[h].slice(),n;return k(g,function(a,b){var c=e[d==="object"?a:b.idx];c==null&&(c=m[b.idx]),m[b.idx]=l(c,b)}),j?(n=f(j(m)),n[h]=m,n):f(m)},k(g,function(b,e){if(f.fn[b])return;f.fn[b]=function(f){var g=a.type(f),h=b==="alpha"?this._hsla?"hsla":"rgba":c,i=this[h](),j=i[e.idx],k;return g==="undefined"?j:(g==="function"&&(f=f.call(this,j),g=a.type(f)),f==null&&e.empty?this:(g==="string"&&(k=d.exec(f),k&&(f=j+parseFloat(k[2])*(k[1]==="+"?1:-1))),i[e.idx]=f,this[h](i)))}})}),k(c,function(b,c){a.cssHooks[c]={set:function(b,d){var e,g,h;if(a.type(d)!=="string"||(e=m(d))){d=f(e||d);if(!i.rgba&&d._rgba[3]!==1){h=c==="backgroundColor"?b.parentNode:b;do g=a.curCSS(h,"backgroundColor");while((g===""||g==="transparent")&&(h=h.parentNode)&&h.style);d=d.blend(g&&g!=="transparent"?g:"_default")}d=d.toRgbaString()}try{b.style[c]=d}catch(d){}}},a.fx.step[c]=function(b){b.colorInit||(b.start=f(b.elem,c),b.end=f(b.end),b.colorInit=!0),a.cssHooks[c].set(b.elem,b.start.transition(b.end,b.pos))}}),a(function(){var a=document.createElement("div"),b=a.style;b.cssText="background-color:rgba(1,1,1,.5)",i.rgba=b.backgroundColor.indexOf("rgba")>-1}),j=a.Color.names={aqua:"#00ffff",azure:"#f0ffff",beige:"#f5f5dc",black:"#000000",blue:"#0000ff",brown:"#a52a2a",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkviolet:"#9400d3",fuchsia:"#ff00ff",gold:"#ffd700",green:"#008000",indigo:"#4b0082",khaki:"#f0e68c",lightblue:"#add8e6",lightcyan:"#e0ffff",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightyellow:"#ffffe0",lime:"#00ff00",magenta:"#ff00ff",maroon:"#800000",navy:"#000080",olive:"#808000",orange:"#ffa500",pink:"#ffc0cb",purple:"#800080",violet:"#800080",red:"#ff0000",silver:"#c0c0c0",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function e(){var b=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,c={},d,e,f;if(b&&b.length&&b[0]&&b[b[0]]){f=b.length;while(f--)d=b[f],typeof b[d]=="string"&&(c[a.camelCase(d)]=b[d])}else for(d in b)typeof b[d]=="string"&&(c[d]=b[d]);return c}function f(b,c){var e={},f,g;for(f in c)g=c[f],b[f]!==g&&!d[f]&&(a.fx.step[f]||!isNaN(parseFloat(g)))&&(e[f]=g);return e}var c=["add","remove","toggle"],d={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(b,c){a.fx.step[c]=function(a){if(a.end!=="none"&&!a.setAttr||a.pos===1&&!a.setAttr)jQuery.style(a.elem,c,a.end),a.setAttr=!0}}),a.effects.animateClass=function(b,d,g,h){var i=a.speed(d,g,h);return this.queue(function(){var d=a(this),g=d.attr("class")||"",h,j=i.children?d.find("*").andSelf():d;j=j.map(function(){var b=a(this);return{el:b,start:e.call(this)}}),h=function(){a.each(c,function(a,c){b[c]&&d[c+"Class"](b[c])})},h(),j=j.map(function(){return this.end=e.call(this.el[0]),this.diff=f(this.start,this.end),this}),d.attr("class",g),j=j.map(function(){var b=this,c=a.Deferred(),d=jQuery.extend({},i,{queue:!1,complete:function(){c.resolve(b)}});return this.el.animate(this.diff,d),c.promise()}),a.when.apply(a,j.get()).done(function(){h(),a.each(arguments,function(){var b=this.el;a.each(this.diff,function(a){b.css(a,"")})}),i.complete.call(d[0])})})},a.fn.extend({_addClass:a.fn.addClass,addClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{add:b},c,d,e]):this._addClass(b)},_removeClass:a.fn.removeClass,removeClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{remove:b},c,d,e]):this._removeClass(b)},_toggleClass:a.fn.toggleClass,toggleClass:function(c,d,e,f,g){return typeof d=="boolean"||d===b?e?a.effects.animateClass.apply(this,[d?{add:c}:{remove:c},e,f,g]):this._toggleClass(c,d):a.effects.animateClass.apply(this,[{toggle:c},d,e,f])},switchClass:function(b,c,d,e,f){return a.effects.animateClass.apply(this,[{add:c,remove:b},d,e,f])}})}(),function(){function e(c,d,e,f){a.isPlainObject(c)&&(d=c,c=c.effect),c={effect:c},d===b&&(d={}),a.isFunction(d)&&(f=d,e=null,d={});if(typeof d=="number"||a.fx.speeds[d])f=e,e=d,d={};return a.isFunction(e)&&(f=e,e=null),d&&a.extend(c,d),e=e||d.duration,c.duration=a.fx.off?0:typeof e=="number"?e:e in a.fx.speeds?a.fx.speeds[e]:a.fx.speeds._default,c.complete=f||d.complete,c}function f(b){return!b||typeof b=="number"||a.fx.speeds[b]?!0:typeof b=="string"&&!a.effects.effect[b]?c&&a.effects[b]?!1:!0:!1}a.extend(a.effects,{version:"1.9.0-beta.1",save:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.data(d+b[c],a[0].style[b[c]])},restore:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.css(b[c],a.data(d+b[c]))},setMode:function(a,b){return b==="toggle"&&(b=a.is(":hidden")?"show":"hide"),b},getBaseline:function(a,b){var c,d;switch(a[0]){case"top":c=0;break;case"middle":c=.5;break;case"bottom":c=1;break;default:c=a[0]/b.height}switch(a[1]){case"left":d=0;break;case"center":d=.5;break;case"right":d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),"float":b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:b.width(),height:b.height()},f=document.activeElement;try{f.id}catch(g){f=document.body}return b.wrap(d),(b[0]===f||a.contains(b[0],f))&&a(f).focus(),d=b.parent(),b.css("position")==="static"?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),b.css(e),d.css(c).show()},removeWrapper:function(b){var c=document.activeElement;return b.parent().is(".ui-effects-wrapper")&&(b.parent().replaceWith(b),(b[0]===c||a.contains(b[0],c))&&a(c).focus()),b},setTransition:function(b,c,d,e){return e=e||{},a.each(c,function(a,c){var f=b.cssUnit(c);f[0]>0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.extend({effect:function(b,d,f,g){function m(b){function f(){a.isFunction(d)&&d.call(c[0]),a.isFunction(b)&&b()}var c=a(this),d=h.complete,e=h.mode;(c.is(":hidden")?e==="hide":e==="show")?f():k.call(c[0],h,f)}var h=e.apply(this,arguments),i=h.mode,j=h.queue,k=a.effects.effect[h.effect],l=!k&&c&&a.effects[h.effect];return a.fx.off||!k&&!l?i?this[i](h.duration,h.complete):this.each(function(){h.complete&&h.complete.call(this)}):k?j===!1?this.each(m):this.queue(j||"fx",m):l.call(this,{options:h,duration:h.duration,callback:h.complete,mode:h.mode})},_show:a.fn.show,show:function(a){if(f(a))return this._show.apply(this,arguments);var b=e.apply(this,arguments);return b.mode="show",this.effect.call(this,b)},_hide:a.fn.hide,hide:function(a){if(f(a))return this._hide.apply(this,arguments);var b=e.apply(this,arguments);return b.mode="hide",this.effect.call(this,b)},__toggle:a.fn.toggle,toggle:function(b){if(f(b)||typeof b=="boolean"||a.isFunction(b))return this.__toggle.apply(this,arguments);var c=e.apply(this,arguments);return c.mode="toggle",this.effect.call(this,c)},cssUnit:function(b){var c=this.css(b),d=[];return a.each(["em","px","%","pt"],function(a,b){c.indexOf(b)>0&&(d=[parseFloat(c),b])}),d}})}(),function(){var b={};a.each(["Quad","Cubic","Quart","Quint","Expo"],function(a,c){b[c]=function(b){return Math.pow(b,a+2)}}),a.extend(b,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return a===0||a===1?a:-Math.pow(2,8*(a-1))*Math.sin(((a-1)*80-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){var b,c=4;while(a<((b=Math.pow(2,--c))-1)/11);return 1/Math.pow(4,3-c)-7.5625*Math.pow((b*3-2)/22-a,2)}}),a.each(b,function(b,c){a.easing["easeIn"+b]=c,a.easing["easeOut"+b]=function(a){return 1-c(1-a)},a.easing["easeInOut"+b]=function(a){return a<.5?c(a*2)/2:1-c(a*-2+2)/2}})}()}(jQuery),function(a,b){var c=0,d={},e={},f={};d.height=d.paddingTop=d.paddingBottom=d.borderTopWidth=d.borderBottomWidth="hide",e.height=e.paddingTop=e.paddingBottom=e.borderTopWidth=e.borderBottomWidth="show",a.extend(f,e,{accordionHeight:"show"}),a.fx.step.accordionHeight=function(b){var c=a(b.elem),d=c.data("ui-accordion-height");c.height(d.total-c.outerHeight()-d.toHide.outerHeight()+c.height())},a.widget("ui.accordion",{version:"1.9.0-beta.1",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var b=this.accordionId="ui-accordion-"+(this.element.attr("id")||++c),d=this.options;this.prevShow=this.prevHide=a(),this.element.addClass("ui-accordion ui-widget ui-helper-reset"),this.headers=this.element.find(d.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this._hoverable(this.headers),this._focusable(this.headers),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(),!d.collapsible&&d.active===!1&&(d.active=0),d.active<0&&(d.active+=this.headers.length),this.active=this._findActive(d.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"),this.active.next().addClass("ui-accordion-content-active").show(),this._createIcons(),this.originalHeight=this.element[0].style.height,this.refresh(),this.element.attr("role","tablist"),this.headers.attr("role","tab").each(function(c){var d=a(this),e=d.attr("id"),f=d.next(),g=f.attr("id");e||(e=b+"-header-"+c,d.attr("id",e)),g||(g=b+"-panel-"+c,f.attr("id",g)),d.attr("aria-controls",g),f.attr("aria-labelledby",e)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._on(this.headers,{keydown:"_keydown"}),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._setupEvents(d.event)},_getCreateEventData:function(){return{header:this.active,content:this.active.length?this.active.next():a()}},_createIcons:function(){var b=this.options.icons;b&&(a("<span>").addClass("ui-accordion-header-icon ui-icon "+b.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(b.header).addClass(b.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var a;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),a=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this.options.heightStyle!=="content"&&(this.element.css("height",this.originalHeight),a.css("height",""))},_setOption:function(a,b){if(a==="active"){this._activate(b);return}a==="event"&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(b)),this._super(a,b),a==="collapsible"&&!b&&this.options.active===!1&&this._activate(0),a==="icons"&&(this._destroyIcons(),b&&this._createIcons()),a==="disabled"&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!b)},_keydown:function(b){if(b.altKey||b.ctrlKey)return;var c=a.ui.keyCode,d=this.headers.length,e=this.headers.index(b.target),f=!1;switch(b.keyCode){case c.RIGHT:case c.DOWN:f=this.headers[(e+1)%d];break;case c.LEFT:case c.UP:f=this.headers[(e-1+d)%d];break;case c.SPACE:case c.ENTER:this._eventHandler(b);break;case c.HOME:f=this.headers[0];break;case c.END:f=this.headers[d-1]}f&&(a(b.target).attr("tabIndex",-1),a(f).attr("tabIndex",0),f.focus(),b.preventDefault())},_panelKeyDown:function(b){b.keyCode===a.ui.keyCode.UP&&b.ctrlKey&&a(b.currentTarget).prev().focus()},refresh:function(){var b,c,d=this.options.heightStyle,e=this.element.parent();this.element.css("height",this.originalHeight),d==="fill"?(a.support.minHeight||(c=e.css("overflow"),e.css("overflow","hidden")),b=e.height(),this.element.siblings(":visible").each(function(){var c=a(this),d=c.css("position");if(d==="absolute"||d==="fixed")return;b-=c.outerHeight(!0)}),c&&e.css("overflow",c),this.headers.each(function(){b-=a(this).outerHeight(!0)}),this.headers.next().each(function(){a(this).height(Math.max(0,b-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")):d==="auto"&&(b=0,this.headers.next().each(function(){b=Math.max(b,a(this).height("").height())}).height(b)),d!=="content"&&this.element.height(this.element.height())},_activate:function(b){var c=this._findActive(b)[0];if(c===this.active[0])return;c=c||this.active[0],this._eventHandler({target:c,currentTarget:c,preventDefault:a.noop})},_findActive:function(b){return typeof b=="number"?this.headers.eq(b):a()},_setupEvents:function(b){var c={};if(!b)return;a.each(b.split(" "),function(a,b){c[b]="_eventHandler"}),this._on(this.headers,c)},_eventHandler:function(b){var c=this.options,d=this.active,e=a(b.currentTarget),f=e[0]===d[0],g=f&&c.collapsible,h=g?a():e.next(),i=d.next(),j={oldHeader:d,oldPanel:i,newHeader:g?a():e,newPanel:h};b.preventDefault();if(f&&!c.collapsible||this._trigger("beforeActivate",b,j)===!1)return;c.active=g?!1:this.headers.index(e),this.active=f?a():e,this._toggle(j),d.removeClass("ui-accordion-header-active ui-state-active"),c.icons&&d.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header),f||(e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),c.icons&&e.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader),e.next().addClass("ui-accordion-content-active"))},_toggle:function(b){var c=b.newPanel,d=this.prevShow.length?this.prevShow:b.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=c,this.prevHide=d,this.options.animate?this._animate(c,d,b):(d.hide(),c.show(),this._toggleComplete(b)),d.attr({"aria-expanded":"false","aria-hidden":"true"}),d.prev().attr("aria-selected","false"),c.length&&d.length?d.prev().attr("tabIndex",-1):c.length&&this.headers.filter(function(){return a(this).attr("tabIndex")===0}).attr("tabIndex",-1),c.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(a,b,c){var g,h,i,j=this,k=a.length&&(!b.length||a.index()<b.index()),l=this.options.animate||{},m=k&&l.down||l,n=function(){a.removeData("ui-accordion-height"),j._toggleComplete(c)};typeof m=="number"&&(i=m),typeof m=="string"&&(h=m),h=h||m.easing||l.easing,i=i||m.duration||l.duration;if(!b.length)return a.animate(e,i,h,n);if(!a.length)return b.animate(d,i,h,n);g=a.show().outerHeight(),b.animate(d,i,h),a.hide().data("ui-accordion-height",{total:g,toHide:b}).animate(this.options.heightStyle==="content"?e:f,i,h,n)},_toggleComplete:function(a){var b=a.oldPanel;b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),b.length&&(b.parent()[0].className=b.parent()[0].className),this._trigger("activate",null,a)}}),a.uiBackCompat!==!1&&(function(a,b){a.extend(b.options,{navigation:!1,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}});var c=b._create;b._create=function(){if(this.options.navigation){var b=this,d=this.element.find(this.options.header),e=d.next(),f=d.add(e).find("a").filter(this.options.navigationFilter)[0];f&&d.add(e).each(function(c){if(a.contains(this,f))return b.options.active=Math.floor(c/2),!1})}c.call(this)}}(jQuery,jQuery.ui.accordion.prototype),function(a,b){a.extend(b.options,{heightStyle:null,autoHeight:!0,clearStyle:!1,fillSpace:!1});var c=b._create,d=b._setOption;a.extend(b,{_create:function(){this.options.heightStyle=this.options.heightStyle||this._mergeHeightStyle(),c.call(this)},_setOption:function(a,b){if(a==="autoHeight"||a==="clearStyle"||a==="fillSpace")this.options.heightStyle=this._mergeHeightStyle();d.apply(this,arguments)},_mergeHeightStyle:function(){var a=this.options;if(a.fillSpace)return"fill";if(a.clearStyle)return"content";if(a.autoHeight)return"auto"}})}(jQuery,jQuery.ui.accordion.prototype),function(a,b){a.extend(b.options.icons,{activeHeader:null,headerSelected:"ui-icon-triangle-1-s"});var c=b._createIcons;b._createIcons=function(){this.options.icons&&(this.options.icons.activeHeader=this.options.icons.activeHeader||this.options.icons.headerSelected),c.call(this)}}(jQuery,jQuery.ui.accordion.prototype),function(a,b){b.activate=b._activate;var c=b._findActive;b._findActive=function(a){return a===-1&&(a=!1),a&&typeof a!="number"&&(a=this.headers.index(this.headers.filter(a)),a===-1&&(a=!1)),c.call(this,a)}}(jQuery,jQuery.ui.accordion.prototype),jQuery.ui.accordion.prototype.resize=jQuery.ui.accordion.prototype.refresh,function(a,b){a.extend(b.options,{change:null,changestart:null});var c=b._trigger;b._trigger=function(a,b,d){var e=c.apply(this,arguments);return e?(a==="beforeActivate"?e=c.call(this,"changestart",b,{oldHeader:d.oldHeader,oldContent:d.oldPanel,newHeader:d.newHeader,newContent:d.newPanel}):a==="activate"&&(e=c.call(this,"change",b,{oldHeader:d.oldHeader,oldContent:d.oldPanel,newHeader:d.newHeader,newContent:d.newPanel})),e):!1}}(jQuery,jQuery.ui.accordion.prototype),function(a,b){a.extend(b.options,{animate:null,animated:"slide"});var c=b._create;b._create=function(){var a=this.options;a.animate===null&&(a.animated?a.animated==="slide"?a.animate=300:a.animated==="bounceslide"?a.animate={duration:200,down:{easing:"easeOutBounce",duration:1e3}}:a.animate=a.animated:a.animate=!1),c.call(this)}}(jQuery,jQuery.ui.accordion.prototype))}(jQuery),function(a,b){var c=0;a.widget("ui.autocomplete",{version:"1.9.0-beta.1",defaultElement:"<input>",options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var b,c,d;this.isMultiLine=this._isMultiLine(),this.valueMethod=this.element[this.element.is("input,textarea")?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on({keydown:function(e){if(this.element.prop("readOnly")){b=!0,d=!0,c=!0;return}b=!1,d=!1,c=!1;var f=a.ui.keyCode;switch(e.keyCode){case f.PAGE_UP:b=!0,this._move("previousPage",e);break;case f.PAGE_DOWN:b=!0,this._move("nextPage",e);break;case f.UP:b=!0,this._keyEvent("previous",e);break;case f.DOWN:b=!0,this._keyEvent("next",e);break;case f.ENTER:case f.NUMPAD_ENTER:this.menu.active&&(b=!0,e.preventDefault(),this.menu.select(e));break;case f.TAB:this.menu.active&&this.menu.select(e);break;case f.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(e),e.preventDefault());break;default:c=!0,this._searchTimeout(e)}},keypress:function(d){if(b){b=!1,d.preventDefault();return}if(c)return;var e=a.ui.keyCode;switch(d.keyCode){case e.PAGE_UP:this._move("previousPage",d);break;case e.PAGE_DOWN:this._move("nextPage",d);break;case e.UP:this._keyEvent("previous",d);break;case e.DOWN:this._keyEvent("next",d)}},input:function(a){if(d){d=!1,a.preventDefault();return}this._searchTimeout(a)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(a){if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching),this.close(a),this._change(a)}}),this._initSource(),this.menu=a("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo||"body")[0]).menu({input:a(),role:null}).zIndex(this.element.zIndex()+1).hide().data("menu"),this._on(this.menu.element,{mousedown:function(b){b.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var c=this.menu.element[0];a(b.target).closest(".ui-menu-item").length||this._delay(function(){var b=this;this.document.one("mousedown",function(d){d.target!==b.element[0]&&d.target!==c&&!a.contains(c,d.target)&&b.close()})})},menufocus:function(b,c){if(this.isNewMenu){this.isNewMenu=!1;if(b.originalEvent&&/^mouse/.test(b.originalEvent.type)){this.menu.blur(),this.document.one("mousemove",function(){a(b.target).trigger(b.originalEvent)});return}}var d=c.item.data("ui-autocomplete-item")||c.item.data("item.autocomplete");!1!==this._trigger("focus",b,{item:d})?b.originalEvent&&/^key/.test(b.originalEvent.type)&&this._value(d.value):this.liveRegion.text(d.value)},menuselect:function(a,b){var c=b.item.data("ui-autocomplete-item")||b.item.data("item.autocomplete"),d=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=d,this._delay(function(){this.previous=d,this.selectedItem=c})),!1!==this._trigger("select",a,{item:c})&&this._value(c.value),this.term=this._value(),this.close(a),this.selectedItem=c}}),this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element),a.fn.bgiframe&&this.menu.element.bgiframe(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(a,b){this._super(a,b),a==="source"&&this._initSource(),a==="appendTo"&&this.menu.element.appendTo(this.document.find(b||"body")[0]),a==="disabled"&&b&&this.xhr&&this.xhr.abort()},_isMultiLine:function(){return this.element.is("textarea")?!0:this.element.is("input")?!1:this.element.prop("isContentEditable")},_initSource:function(){var b,c,d=this;a.isArray(this.options.source)?(b=this.options.source,this.source=function(c,d){d(a.ui.autocomplete.filter(b,c.term))}):typeof this.options.source=="string"?(c=this.options.source,this.source=function(b,e){d.xhr&&d.xhr.abort(),d.xhr=a.ajax({url:c,data:b,dataType:"json",success:function(a,b){e(a)},error:function(){e([])}})}):this.source=this.options.source},_searchTimeout:function(a){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,a))},this.options.delay)},search:function(a,b){a=a!=null?a:this._value(),this.term=this._value();if(a.length<this.options.minLength)return this.close(b);if(this._trigger("search",b)===!1)return;return this._search(a)},_search:function(a){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:a},this._response())},_response:function(){var a=this,b=++c;return function(d){b===c&&a.__response(d),a.pending--,a.pending||a.element.removeClass("ui-autocomplete-loading")}},__response:function(a){a&&(a=this._normalize(a)),this._trigger("response",null,{content:a}),!this.options.disabled&&a&&a.length&&!this.cancelSearch?(this._suggest(a),this._trigger("open")):this._close()},close:function(a){this.cancelSearch=!0,this._close(a)},_close:function(a){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",a))},_change:function(a){this.previous!==this._value()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(b){return b.length&&b[0].label&&b[0].value?b:a.map(b,function(b){return typeof b=="string"?{label:b,value:b}:a.extend({label:b.label||b.value,value:b.value||b.label},b)})},_suggest:function(b){var c=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(c,b),this.menu.blur(),this.menu.refresh(),c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,c){var d=this;a.each(c,function(a,c){d._renderItemData(b,c)})},_renderItemData:function(a,b){return this._renderItem(a,b).data("ui-autocomplete-item",b)},_renderItem:function(b,c){return a("<li>").append(a("<a>").text(c.label)).appendTo(b)},_move:function(a,b){if(!this.menu.element.is(":visible")){this.search(null,b);return}if(this.menu.isFirstItem()&&/^previous/.test(a)||this.menu.isLastItem()&&/^next/.test(a)){this._value(this.term),this.menu.blur();return}this.menu[a](b)},widget:function(){return this.menu.element},_value:function(a){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(a,b){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(a,b),b.preventDefault()}}),a.extend(a.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(b,c){var d=new RegExp(a.ui.autocomplete.escapeRegex(c),"i");return a.grep(b,function(a){return d.test(a.label||a.value||a)})}}),a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(a){return a+(a>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(a){var b;this._superApply(arguments);if(this.options.disabled||this.cancelSearch)return;a&&a.length?b=this.options.messages.results(a.length):b=this.options.messages.noResults,this.liveRegion.text(b)}})}(jQuery),function(a,b){var c,d,e,f,g="ui-button ui-widget ui-state-default ui-corner-all",h="ui-state-hover ui-state-active ",i="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",j=function(){var b=a(this).find(":ui-button");setTimeout(function(){b.button("refresh")},1)},k=function(b){var c=b.name,d=b.form,e=a([]);return c&&(d?e=a(d).find("[name='"+c+"']"):e=a("[name='"+c+"']",b.ownerDocument).filter(function(){return!this.form})),e};a.widget("ui.button",{version:"1.9.0-beta.1",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,j),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var b=this,h=this.options,i=this.type==="checkbox"||this.type==="radio",l="ui-state-hover"+(i?"":" ui-state-active"),m="ui-state-focus";h.label===null&&(h.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html()),this.buttonElement.addClass(g).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(h.disabled)return;a(this).addClass("ui-state-hover"),this===c&&a(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){if(h.disabled)return;a(this).removeClass(l)}).bind("click"+this.eventNamespace,function(a){h.disabled&&(a.preventDefault(),a.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){b.buttonElement.addClass(m)}).bind("blur"+this.eventNamespace,function(){b.buttonElement.removeClass(m)}),i&&(this.element.bind("change"+this.eventNamespace,function(){if(f)return;b.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(a){if(h.disabled)return;f=!1,d=a.pageX,e=a.pageY}).bind("mouseup"+this.eventNamespace,function(a){if(h.disabled)return;if(d!==a.pageX||e!==a.pageY)f=!0})),this.type==="checkbox"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(h.disabled||f)return!1;a(this).toggleClass("ui-state-active"),b.buttonElement.attr("aria-pressed",b.element[0].checked)}):this.type==="radio"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(h.disabled||f)return!1;a(this).addClass("ui-state-active"),b.buttonElement.attr("aria-pressed","true");var c=b.element[0];k(c).not(c).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(h.disabled)return!1;a(this).addClass("ui-state-active"),c=this,b.document.one("mouseup",function(){c=null})}).bind("mouseup"+this.eventNamespace,function(){if(h.disabled)return!1;a(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(b){if(h.disabled)return!1;(b.keyCode===a.ui.keyCode.SPACE||b.keyCode===a.ui.keyCode.ENTER)&&a(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace,function(){a(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(b){b.keyCode===a.ui.keyCode.SPACE&&a(this).click()})),this._setOption("disabled",h.disabled),this._resetButton()},_determineButtonType:function(){var a,b,c;this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button",this.type==="checkbox"||this.type==="radio"?(a=this.element.parents().last(),b="label[for='"+this.element.attr("id")+"']",this.buttonElement=a.find(b),this.buttonElement.length||(a=a.length?a.siblings():this.element.siblings(),this.buttonElement=a.filter(b),this.buttonElement.length||(this.buttonElement=a.find(b))),this.element.addClass("ui-helper-hidden-accessible"),c=this.element.is(":checked"),c&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",c)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(g+" "+h+" "+i).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(a,b){this._super(a,b);if(a==="disabled"){b?this.element.prop("disabled",!0):this.element.prop("disabled",!1);return}this._resetButton()},refresh:function(){var b=this.element.is(":disabled");b!==this.options.disabled&&this._setOption("disabled",b),this.type==="radio"?k(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var b=this.buttonElement.removeClass(i),c=a("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,e=d.primary&&d.secondary,f=[];d.primary||d.secondary?(this.options.text&&f.push("ui-button-text-icon"+(e?"s":d.primary?"-primary":"-secondary")),d.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>"),d.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>"),this.options.text||(f.push(e?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||b.attr("title",a.trim(c)))):f.push("ui-button-text-only"),b.addClass(f.join(" "))}}),a.widget("ui.buttonset",{version:"1.9.0-beta.1",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(a,b){a==="disabled"&&this.buttons.button("option",a,b),this._super(a,b)},refresh:function(){var b=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(b?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})}(jQuery),function($,undefined){function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function bindHover(a){var b="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return a.delegate(b,"mouseout",function(){$(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!=-1&&$(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!=-1&&$(this).removeClass("ui-datepicker-next-hover")}).delegate(b,"mouseover",function(){$.datepicker._isDisabledDatepicker(instActive.inline?a.parent()[0]:instActive.input[0])||($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),$(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!=-1&&$(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!=-1&&$(this).addClass("ui-datepicker-next-hover"))})}function extendRemove(a,b){$.extend(a,b);for(var c in b)if(b[c]==null||b[c]==undefined)a[c]=b[c];return a}$.extend($.ui,{datepicker:{version:"1.9.0-beta.1"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return extendRemove(this._defaults,a||{}),this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline=nodeName=="div"||nodeName=="span";target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(a,b){var c=a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:c,input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:b?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(a,b){var c=$(a);b.append=$([]),b.trigger=$([]);if(c.hasClass(this.markerClassName))return;this._attachments(c,b),c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),this._autoSize(b),$.data(a,PROP_NAME,b),b.settings.disabled&&this._disableDatepicker(a)},_attachments:function(a,b){var c=this._get(b,"appendText"),d=this._get(b,"isRTL");b.append&&b.append.remove(),c&&(b.append=$('<span class="'+this._appendClass+'">'+c+"</span>"),a[d?"before":"after"](b.append)),a.unbind("focus",this._showDatepicker),b.trigger&&b.trigger.remove();var e=this._get(b,"showOn");(e=="focus"||e=="both")&&a.focus(this._showDatepicker);if(e=="button"||e=="both"){var f=this._get(b,"buttonText"),g=this._get(b,"buttonImage");b.trigger=$(this._get(b,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:g,alt:f,title:f}):$('<button type="button"></button>').addClass(this._triggerClass).html(g==""?f:$("<img/>").attr({src:g,alt:f,title:f}))),a[d?"before":"after"](b.trigger),b.trigger.click(function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput==a[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=a[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(a[0])):$.datepicker._showDatepicker(a[0]),!1})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var d=function(a){var b=0,c=0;for(var d=0;d<a.length;d++)a[d].length>b&&(b=a[d].length,c=d);return c};b.setMonth(d(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort"))),b.setDate(d(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=$(a);if(c.hasClass(this.markerClassName))return;c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),$.data(a,PROP_NAME,b),this._setDate(b,this._getDefaultDate(b),!0),this._updateDatepicker(b),this._updateAlternate(b),b.settings.disabled&&this._disableDatepicker(a),b.dpDiv.css("display","block")},_dialogDatepicker:function(a,b,c,d,e){var f=this._dialogInst;if(!f){this.uuid+=1;var g="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+g+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),f=this._dialogInst=this._newInst(this._dialogInput,!1),f.settings={},$.data(this._dialogInput[0],PROP_NAME,f)}extendRemove(f.settings,d||{}),b=b&&b.constructor==Date?this._formatDate(f,b):b,this._dialogInput.val(b),this._pos=e?e.length?e:[e.pageX,e.pageY]:null;if(!this._pos){var h=document.documentElement.clientWidth,i=document.documentElement.clientHeight,j=document.documentElement.scrollLeft||document.body.scrollLeft,k=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[h/2-100+j,i/2-150+k]}return this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),f.settings.onSelect=c,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,f),this},_destroyDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();$.removeData(a,PROP_NAME),d=="input"?(c.append.remove(),c.trigger.remove(),b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(d=="div"||d=="span")&&b.removeClass(this.markerClassName).empty()},_enableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!1,c.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().removeClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b})},_disableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!0,c.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().addClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b}),this._disabledInputs[this._disabledInputs.length]=a},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return!0;return!1},_getInst:function(a){try{return $.data(a,PROP_NAME)}catch(b){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(a,b,c){var d=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?$.extend({},$.datepicker._defaults):d?b=="all"?$.extend({},d.settings):this._get(d,b):null;var e=b||{};typeof b=="string"&&(e={},e[b]=c);if(d){this._curInst==d&&this._hideDatepicker();var f=this._getDateDatepicker(a,!0),g=this._getMinMaxDate(d,"min"),h=this._getMinMaxDate(d,"max");extendRemove(d.settings,e),g!==null&&e.dateFormat!==undefined&&e.minDate===undefined&&(d.settings.minDate=this._formatDate(d,g)),h!==null&&e.dateFormat!==undefined&&e.maxDate===undefined&&(d.settings.maxDate=this._formatDate(d,h)),this._attachments($(a),d),this._autoSize(d),this._setDate(d,f),this._updateAlternate(d),this._updateDatepicker(d)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},_doKeyDown:function(a){var b=$.datepicker._getInst(a.target),c=!0,d=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=!0;if($.datepicker._datepickerShowing)switch(a.keyCode){case 9:$.datepicker._hideDatepicker(),c=!1;break;case 13:var e=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",b.dpDiv);e[0]&&$.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,e[0]);var f=$.datepicker._get(b,"onSelect");if(f){var g=$.datepicker._formatDate(b);f.apply(b.input?b.input[0]:null,[g,b])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 35:(a.ctrlKey||a.metaKey)&&$.datepicker._clearDate(a.target),c=a.ctrlKey||a.metaKey;break;case 36:(a.ctrlKey||a.metaKey)&&$.datepicker._gotoToday(a.target),c=a.ctrlKey||a.metaKey;break;case 37:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?1:-1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 38:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,-7,"D"),c=a.ctrlKey||a.metaKey;break;case 39:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?-1:1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 40:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,7,"D"),c=a.ctrlKey||a.metaKey;break;default:c=!1}else a.keyCode==36&&a.ctrlKey?$.datepicker._showDatepicker(this):c=!1;c&&(a.preventDefault(),a.stopPropagation())},_doKeyPress:function(a){var b=$.datepicker._getInst(a.target);if($.datepicker._get(b,"constrainInput")){var c=$.datepicker._possibleChars($.datepicker._get(b,"dateFormat")),d=String.fromCharCode(a.charCode==undefined?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||d<" "||!c||c.indexOf(d)>-1}},_doKeyUp:function(a){var b=$.datepicker._getInst(a.target);if(b.input.val()!=b.lastVal)try{var c=$.datepicker.parseDate($.datepicker._get(b,"dateFormat"),b.input?b.input.val():null,$.datepicker._getFormatConfig(b));c&&($.datepicker._setDateFromField(b),$.datepicker._updateAlternate(b),$.datepicker._updateDatepicker(b))}catch(d){$.datepicker.log(d)}return!0},_showDatepicker:function(a){a=a.target||a,a.nodeName.toLowerCase()!="input"&&(a=$("input",a.parentNode)[0]);if($.datepicker._isDisabledDatepicker(a)||$.datepicker._lastInput==a)return;var b=$.datepicker._getInst(a);$.datepicker._curInst&&$.datepicker._curInst!=b&&($.datepicker._curInst.dpDiv.stop(!0,!0),b&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var c=$.datepicker._get(b,"beforeShow"),d=c?c.apply(a,[a,b]):{};if(d===!1)return;extendRemove(b.settings,d),b.lastVal=null,$.datepicker._lastInput=a,$.datepicker._setDateFromField(b),$.datepicker._inDialog&&(a.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(a),$.datepicker._pos[1]+=a.offsetHeight);var e=!1;$(a).parents().each(function(){return e|=$(this).css("position")=="fixed",!e});var f={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null,b.dpDiv.empty(),b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(b),f=$.datepicker._checkOffset(b,f,e),b.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":e?"fixed":"absolute",display:"none",left:f.left+"px",top:f.top+"px"});if(!b.inline){var g=$.datepicker._get(b,"showAnim"),h=$.datepicker._get(b,"duration"),i=function(){var a=b.dpDiv.find("iframe.ui-datepicker-cover");if(!!a.length){var c=$.datepicker._getBorders(b.dpDiv);a.css({left:-c[0],top:-c[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex($(a).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&($.effects.effect[g]||$.effects[g])?b.dpDiv.show(g,$.datepicker._get(b,"showOptions"),h,i):b.dpDiv[g||"show"](g?h:null,i),(!g||!h)&&i(),b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus(),$.datepicker._curInst=b}},_updateDatepicker:function(a){this.maxRows=4;var b=$.datepicker._getBorders(a.dpDiv);instActive=a,a.dpDiv.empty().append(this._generateHTML(a)),this._attachHandlers(a);var c=a.dpDiv.find("iframe.ui-datepicker-cover");!c.length||c.css({left:-b[0],top:-b[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()}),a.dpDiv.find("."+this._dayOverClass+" a").mouseover();var d=this._getNumberOfMonths(a),e=d[1],f=17;a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),e>1&&a.dpDiv.addClass("ui-datepicker-multi-"+e).css("width",f*e+"em"),a.dpDiv[(d[0]!=1||d[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),a==$.datepicker._curInst&&$.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var g=a.yearshtml;setTimeout(function(){g===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml),g=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(a){return{thin:1,medium:2,thick:3}[a]||a};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var d=a.dpDiv.outerWidth(),e=a.dpDiv.outerHeight(),f=a.input?a.input.outerWidth():0,g=a.input?a.input.outerHeight():0,h=document.documentElement.clientWidth+$(document).scrollLeft(),i=document.documentElement.clientHeight+$(document).scrollTop();return b.left-=this._get(a,"isRTL")?d-f:0,b.left-=c&&b.left==a.input.offset().left?$(document).scrollLeft():0,b.top-=c&&b.top==a.input.offset().top+g?$(document).scrollTop():0,b.left-=Math.min(b.left,b.left+d>h&&h>d?Math.abs(b.left+d-h):0),b.top-=Math.min(b.top,b.top+e>i&&i>e?Math.abs(e+g):0),b},_findPos:function(a){var b=this._getInst(a),c=this._get(b,"isRTL");while(a&&(a.type=="hidden"||a.nodeType!=1||$.expr.filters.hidden(a)))a=a[c?"previousSibling":"nextSibling"];var d=$(a).offset();return[d.left,d.top]},_hideDatepicker:function(a){var b=this._curInst;if(!b||a&&b!=$.data(a,PROP_NAME))return;if(this._datepickerShowing){var c=this._get(b,"showAnim"),d=this._get(b,"duration"),e=function(){$.datepicker._tidyDialog(b)};$.effects&&($.effects.effect[c]||$.effects[c])?b.dpDiv.hide(c,$.datepicker._get(b,"showOptions"),d,e):b.dpDiv[c=="slideDown"?"slideUp":c=="fadeIn"?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1;var f=this._get(b,"onClose");f&&f.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(!$.datepicker._curInst)return;var b=$(a.target),c=$.datepicker._getInst(b[0]);(b[0].id!=$.datepicker._mainDivId&&b.parents("#"+$.datepicker._mainDivId).length==0&&!b.hasClass($.datepicker.markerClassName)&&!b.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||b.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=c)&&$.datepicker._hideDatepicker()},_adjustDate:function(a,b,c){var d=$(a),e=this._getInst(d[0]);if(this._isDisabledDatepicker(d[0]))return;this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c),this._updateDatepicker(e)},_gotoToday:function(a){var b=$(a),c=this._getInst(b[0]);if(this._get(c,"gotoCurrent")&&c.currentDay)c.selectedDay=c.currentDay,c.drawMonth=c.selectedMonth=c.currentMonth,c.drawYear=c.selectedYear=c.currentYear;else{var d=new Date;c.selectedDay=d.getDate(),c.drawMonth=c.selectedMonth=d.getMonth(),c.drawYear=c.selectedYear=d.getFullYear()}this._notifyChange(c),this._adjustDate(b)},_selectMonthYear:function(a,b,c){var d=$(a),e=this._getInst(d[0]);e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10),this._notifyChange(e),this._adjustDate(d)},_selectDay:function(a,b,c,d){var e=$(a);if($(d).hasClass(this._unselectableClass)||this._isDisabledDatepicker(e[0]))return;var f=this._getInst(e[0]);f.selectedDay=f.currentDay=$("a",d).html(),f.selectedMonth=f.currentMonth=b,f.selectedYear=f.currentYear=c,this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))},_clearDate:function(a){var b=$(a),c=this._getInst(b[0]);this._selectDate(b,"")},_selectDate:function(a,b){var c=$(a),d=this._getInst(c[0]);b=b!=null?b:this._formatDate(d),d.input&&d.input.val(b),this._updateAlternate(d);var e=this._get(d,"onSelect");e?e.apply(d.input?d.input[0]:null,[b,d]):d.input&&d.input.trigger("change"),d.inline?this._updateDatepicker(d):(this._hideDatepicker(),this._lastInput=d.input[0],typeof d.input[0]!="object"&&d.input.focus(),this._lastInput=null)},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),d=this._getDate(a),e=this.formatDate(c,d,this._getFormatConfig(a));$(b).each(function(){$(this).val(e)})}},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b=new Date(a.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;var d=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;d=typeof d!="string"?d:(new Date).getFullYear()%100+parseInt(d,10);var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=-1,j=-1,k=-1,l=-1,m=!1,n=function(b){var c=s+1<a.length&&a.charAt(s+1)==b;return c&&s++,c},o=function(a){var c=n(a),d=a=="@"?14:a=="!"?20:a=="y"&&c?4:a=="o"?3:2,e=new RegExp("^\\d{1,"+d+"}"),f=b.substring(r).match(e);if(!f)throw"Missing number at position "+r;return r+=f[0].length,parseInt(f[0],10)},p=function(a,c,d){var e=$.map(n(a)?d:c,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)}),f=-1;$.each(e,function(a,c){var d=c[1];if(b.substr(r,d.length).toLowerCase()==d.toLowerCase())return f=c[0],r+=d.length,!1});if(f!=-1)return f+1;throw"Unknown name at position "+r},q=function(){if(b.charAt(r)!=a.charAt(s))throw"Unexpected literal at position "+r;r++},r=0;for(var s=0;s<a.length;s++)if(m)a.charAt(s)=="'"&&!n("'")?m=!1:q();else switch(a.charAt(s)){case"d":k=o("d");break;case"D":p("D",e,f);break;case"o":l=o("o");break;case"m":j=o("m");break;case"M":j=p("M",g,h);break;case"y":i=o("y");break;case"@":var t=new Date(o("@"));i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"!":var t=new Date((o("!")-this._ticksTo1970)/1e4);i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"'":n("'")?q():m=!0;break;default:q()}if(r<b.length){var u=b.substr(r);if(!/^\s+/.test(u))throw"Extra/unparsed characters found in date: "+u}i==-1?i=(new Date).getFullYear():i<100&&(i+=(new Date).getFullYear()-(new Date).getFullYear()%100+(i<=d?0:-100));if(l>-1){j=1,k=l;do{var v=this._getDaysInMonth(i,j-1);if(k<=v)break;j++,k-=v}while(!0)}var t=this._daylightSavingAdjust(new Date(i,j-1,k));if(t.getFullYear()!=i||t.getMonth()+1!=j||t.getDate()!=k)throw"Invalid date";return t},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,e=(c?c.dayNames:null)||this._defaults.dayNames,f=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,h=function(b){var c=m+1<a.length&&a.charAt(m+1)==b;return c&&m++,c},i=function(a,b,c){var d=""+b;if(h(a))while(d.length<c)d="0"+d;return d},j=function(a,b,c,d){return h(a)?d[b]:c[b]},k="",l=!1;if(b)for(var m=0;m<a.length;m++)if(l)a.charAt(m)=="'"&&!h("'")?l=!1:k+=a.charAt(m);else switch(a.charAt(m)){case"d":k+=i("d",b.getDate(),2);break;case"D":k+=j("D",b.getDay(),d,e);break;case"o":k+=i("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":k+=i("m",b.getMonth()+1,2);break;case"M":k+=j("M",b.getMonth(),f,g);break;case"y":k+=h("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":k+=b.getTime();break;case"!":k+=b.getTime()*1e4+this._ticksTo1970;break;case"'":h("'")?k+="'":l=!0;break;default:k+=a.charAt(m)}return k},_possibleChars:function(a){var b="",c=!1,d=function(b){var c=e+1<a.length&&a.charAt(e+1)==b;return c&&e++,c};for(var e=0;e<a.length;e++)if(c)a.charAt(e)=="'"&&!d("'")?c=!1:b+=a.charAt(e);else switch(a.charAt(e)){case"d":case"m":case"y":case"@":b+="0123456789";break;case"D":case"M":return null;case"'":d("'")?b+="'":c=!0;break;default:b+=a.charAt(e)}return b},_get:function(a,b){return a.settings[b]!==undefined?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()==a.lastVal)return;var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e,f;e=f=this._getDefaultDate(a);var g=this._getFormatConfig(a);try{e=this.parseDate(c,d,g)||f}catch(h){this.log(h),d=b?"":d}a.selectedDay=e.getDate(),a.drawMonth=a.selectedMonth=e.getMonth(),a.drawYear=a.selectedYear=e.getFullYear(),a.currentDay=d?e.getDate():0,a.currentMonth=d?e.getMonth():0,a.currentYear=d?e.getFullYear():0,this._adjustInstDate(a)},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var d=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},e=function(b){try{return $.datepicker.parseDate($.datepicker._get(a,"dateFormat"),b,$.datepicker._getFormatConfig(a))}catch(c){}var d=(b.toLowerCase().match(/^c/)?$.datepicker._getDate(a):null)||new Date,e=d.getFullYear(),f=d.getMonth(),g=d.getDate(),h=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,i=h.exec(b);while(i){switch(i[2]||"d"){case"d":case"D":g+=parseInt(i[1],10);break;case"w":case"W":g+=parseInt(i[1],10)*7;break;case"m":case"M":f+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f));break;case"y":case"Y":e+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f))}i=h.exec(b)}return new Date(e,f,g)},f=b==null||b===""?c:typeof b=="string"?e(b):typeof b=="number"?isNaN(b)?c:d(b):new Date(b.getTime());return f=f&&f.toString()=="Invalid Date"?c:f,f&&(f.setHours(0),f.setMinutes(0),f.setSeconds(0),f.setMilliseconds(0)),this._daylightSavingAdjust(f)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),(e!=a.selectedMonth||f!=a.selectedYear)&&!c&&this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_attachHandlers:function(a){var b=this._get(a,"stepMonths"),c="#"+a.id;a.dpDiv.find("[data-handler]").map(function(){var a={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(c,-b,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(c,+b,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(c)},selectDay:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectDay(c,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(c,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(c,this,"Y"),!1}};$(this).bind(this.getAttribute("data-event"),a[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),d=this._get(a,"showButtonPanel"),e=this._get(a,"hideIfNoPrevNext"),f=this._get(a,"navigationAsDateFormat"),g=this._getNumberOfMonths(a),h=this._get(a,"showCurrentAtPos"),i=this._get(a,"stepMonths"),j=g[0]!=1||g[1]!=1,k=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),l=this._getMinMaxDate(a,"min"),m=this._getMinMaxDate(a,"max"),n=a.drawMonth-h,o=a.drawYear;n<0&&(n+=12,o--);if(m){var p=this._daylightSavingAdjust(new Date(m.getFullYear(),m.getMonth()-g[0]*g[1]+1,m.getDate()));p=l&&p<l?l:p;while(this._daylightSavingAdjust(new Date(o,n,1))>p)n--,n<0&&(n=11,o--)}a.drawMonth=n,a.drawYear=o;var q=this._get(a,"prevText");q=f?this.formatDate(q,this._daylightSavingAdjust(new Date(o,n-i,1)),this._getFormatConfig(a)):q;var r=this._canAdjustMonth(a,-1,o,n)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>":e?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>",s=this._get(a,"nextText");s=f?this.formatDate(s,this._daylightSavingAdjust(new Date(o,n+i,1)),this._getFormatConfig(a)):s;var t=this._canAdjustMonth(a,1,o,n)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":e?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>",u=this._get(a,"currentText"),v=this._get(a,"gotoCurrent")&&a.currentDay?k:b;u=f?this.formatDate(u,v,this._getFormatConfig(a)):u;var w=a.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(a,"closeText")+"</button>",x=d?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?w:"")+(this._isInRange(a,v)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+u+"</button>":"")+(c?"":w)+"</div>":"",y=parseInt(this._get(a,"firstDay"),10);y=isNaN(y)?0:y;var z=this._get(a,"showWeek"),A=this._get(a,"dayNames"),B=this._get(a,"dayNamesShort"),C=this._get(a,"dayNamesMin"),D=this._get(a,"monthNames"),E=this._get(a,"monthNamesShort"),F=this._get(a,"beforeShowDay"),G=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths"),I=this._get(a,"calculateWeek")||this.iso8601Week,J=this._getDefaultDate(a),K="";for(var L=0;L<g[0];L++){var M="";this.maxRows=4;for(var N=0;N<g[1];N++){var O=this._daylightSavingAdjust(new Date(o,n,a.selectedDay)),P=" ui-corner-all",Q="";if(j){Q+='<div class="ui-datepicker-group';if(g[1]>1)switch(N){case 0:Q+=" ui-datepicker-group-first",P=" ui-corner-"+(c?"right":"left");break;case g[1]-1:Q+=" ui-datepicker-group-last",P=" ui-corner-"+(c?"left":"right");break;default:Q+=" ui-datepicker-group-middle",P=""}Q+='">'}Q+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+P+'">'+(/all|left/.test(P)&&L==0?c?t:r:"")+(/all|right/.test(P)&&L==0?c?r:t:"")+this._generateMonthYearHeader(a,n,o,l,m,L>0||N>0,D,E)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var R=z?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(var S=0;S<7;S++){var T=(S+y)%7;R+="<th"+((S+y+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+A[T]+'">'+C[T]+"</span></th>"}Q+=R+"</tr></thead><tbody>";var U=this._getDaysInMonth(o,n);o==a.selectedYear&&n==a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,U));var V=(this._getFirstDayOfMonth(o,n)-y+7)%7,W=Math.ceil((V+U)/7),X=j?this.maxRows>W?this.maxRows:W:W;this.maxRows=X;var Y=this._daylightSavingAdjust(new Date(o,n,1-V));for(var Z=0;Z<X;Z++){Q+="<tr>";var _=z?'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(Y)+"</td>":"";for(var S=0;S<7;S++){var ba=F?F.apply(a.input?a.input[0]:null,[Y]):[!0,""],bb=Y.getMonth()!=n,bc=bb&&!H||!ba[0]||l&&Y<l||m&&Y>m;_+='<td class="'+((S+y+6)%7>=5?" ui-datepicker-week-end":"")+(bb?" ui-datepicker-other-month":"")+(Y.getTime()==O.getTime()&&n==a.selectedMonth&&a._keyEvent||J.getTime()==Y.getTime()&&J.getTime()==O.getTime()?" "+this._dayOverClass:"")+(bc?" "+this._unselectableClass+" ui-state-disabled":"")+(bb&&!G?"":" "+ba[1]+(Y.getTime()==k.getTime()?" "+this._currentClass:"")+(Y.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!bb||G)&&ba[2]?' title="'+ba[2]+'"':"")+(bc?"":' data-handler="selectDay" data-event="click" data-month="'+Y.getMonth()+'" data-year="'+Y.getFullYear()+'"')+">"+(bb&&!G?"&#xa0;":bc?'<span class="ui-state-default">'+Y.getDate()+"</span>":'<a class="ui-state-default'+(Y.getTime()==b.getTime()?" ui-state-highlight":"")+(Y.getTime()==k.getTime()?" ui-state-active":"")+(bb?" ui-priority-secondary":"")+'" href="#">'+Y.getDate()+"</a>")+"</td>",Y.setDate(Y.getDate()+1),Y=this._daylightSavingAdjust(Y)}Q+=_+"</tr>"}n++,n>11&&(n=0,o++),Q+="</tbody></table>"+(j?"</div>"+(g[0]>0&&N==g[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),M+=Q}K+=M}return K+=x+($.browser.msie&&parseInt($.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),a._keyEvent=!1,K},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i=this._get(a,"changeMonth"),j=this._get(a,"changeYear"),k=this._get(a,"showMonthAfterYear"),l='<div class="ui-datepicker-title">',m="";if(f||!i)m+='<span class="ui-datepicker-month">'+g[b]+"</span>";else{var n=d&&d.getFullYear()==c,o=e&&e.getFullYear()==c;m+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var p=0;p<12;p++)(!n||p>=d.getMonth())&&(!o||p<=e.getMonth())&&(m+='<option value="'+p+'"'+(p==b?' selected="selected"':"")+">"+h[p]+"</option>");m+="</select>"}k||(l+=m+(f||!i||!j?"&#xa0;":""));if(!a.yearshtml){a.yearshtml="";if(f||!j)l+='<span class="ui-datepicker-year">'+c+"</span>";else{var q=this._get(a,"yearRange").split(":"),r=(new Date).getFullYear(),s=function(a){var b=a.match(/c[+-].*/)?c+parseInt(a.substring(1),10):a.match(/[+-].*/)?r+parseInt(a,10):parseInt(a,10);return isNaN(b)?r:b},t=s(q[0]),u=Math.max(t,s(q[1]||""));t=d?Math.max(t,d.getFullYear()):t,u=e?Math.min(u,e.getFullYear()):u,a.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';for(;t<=u;t++)a.yearshtml+='<option value="'+t+'"'+(t==c?' selected="selected"':"")+">"+t+"</option>";a.yearshtml+="</select>",l+=a.yearshtml,a.yearshtml=null}}return l+=this._get(a,"yearSuffix"),k&&(l+=(f||!i||!j?"&#xa0;":"")+m),l+="</div>",l},_adjustInstDate:function(a,b,c){var d=a.drawYear+(c=="Y"?b:0),e=a.drawMonth+(c=="M"?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+(c=="D"?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),(c=="M"||c=="Y")&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;return e=d&&e>d?d:e,e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return b==null?[1,1]:typeof b=="number"?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));return b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!d||b.getTime()<=d.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),$.fn.datepicker=function(a){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv),$.datepicker.initialized=!0);var b=Array.prototype.slice.call(arguments,1);return typeof a!="string"||a!="isDisabled"&&a!="getDate"&&a!="widget"?a=="option"&&arguments.length==2&&typeof arguments[1]=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b)):this.each(function(){typeof a=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this].concat(b)):$.datepicker._attachDatepicker(this,a)}):$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b))},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.9.0-beta.1",window["DP_jQuery_"+dpuuid]=$}(jQuery),function(a,b){var c="ui-dialog ui-widget ui-widget-content ui-corner-all ",d={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},e={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};a.widget("ui.dialog",{version:"1.9.0-beta.1",options:{autoOpen:!0,buttons:{},closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:!1,maxWidth:!1,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,stack:!0,title:"",width:300,zIndex:1e3},_create:function(){this.originalTitle=this.element.attr("title"),typeof this.originalTitle!="string"&&(this.originalTitle=""),this.oldPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.options.title=this.options.title||this.originalTitle;var b=this,d=this.options,e=d.title||"&#160;",f=(this.uiDialog=a("<div>")).addClass(c+d.dialogClass).css({display:"none",outline:0,zIndex:d.zIndex}).attr("tabIndex",-1).keydown(function(c){d.closeOnEscape&&!c.isDefaultPrevented()&&c.keyCode&&c.keyCode===a.ui.keyCode.ESCAPE&&(b.close(c),c.preventDefault())}).mousedown(function(a){b.moveToTop(!1,a)}).appendTo("body"),g=this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(f),h=(this.uiDialogTitlebar=a("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").prependTo(f),i=a("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role","button").click(function(a){a.preventDefault(),b.close(a)}).appendTo(h),j=(this.uiDialogTitlebarCloseText=a("<span>")).addClass("ui-icon ui-icon-closethick").text(d.closeText).appendTo(i),k=a("<span>").uniqueId().addClass("ui-dialog-title").html(e).prependTo(h),l=(this.uiDialogButtonPane=a("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),m=(this.uiButtonSet=a("<div>")).addClass("ui-dialog-buttonset").appendTo(l);f.attr({role:"dialog","aria-labelledby":k.attr("id")}),h.find("*").add(h).disableSelection(),this._hoverable(i),this._focusable(i),d.draggable&&a.fn.draggable&&this._makeDraggable(),d.resizable&&a.fn.resizable&&this._makeResizable(),this._createButtons(d.buttons),this._isOpen=!1,a.fn.bgiframe&&f.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},_destroy:function(){var a,b=this.oldPosition;this.overlay&&this.overlay.destroy(),this.uiDialog.hide(),this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),a=b.parent.children().eq(b.index),a.length?a.before(this.element):b.parent.append(this.element)},widget:function(){return this.uiDialog},close:function(b){var c=this,d,e;if(!this._isOpen)return;if(!1===this._trigger("beforeClose",b))return;return this._isOpen=!1,this.overlay&&this.overlay.destroy(),this._off(this.uiDialog,"keypress"),this.options.hide?this.uiDialog.hide(this.options.hide,function(){c._trigger("close",b)}):(this.uiDialog.hide(),this._trigger("close",b)),a.ui.dialog.overlay.resize(),this.options.modal&&(d=0,a(".ui-dialog").each(function(){this!==c.uiDialog[0]&&(e=a(this).css("z-index"),isNaN(e)||(d=Math.max(d,e)))}),a.ui.dialog.maxZ=d),this},isOpen:function(){return this._isOpen},moveToTop:function(b,c){var d=this.options,e;return d.modal&&!b||!d.stack&&!d.modal?this._trigger("focus",c):(d.zIndex>a.ui.dialog.maxZ&&(a.ui.dialog.maxZ=d.zIndex),this.overlay&&(a.ui.dialog.maxZ+=1,a.ui.dialog.overlay.maxZ=a.ui.dialog.maxZ,this.overlay.$el.css("z-index",a.ui.dialog.overlay.maxZ)),e={scrollTop:this.element.scrollTop(),scrollLeft:this.element.scrollLeft()},a.ui.dialog.maxZ+=1,this.uiDialog.css("z-index",a.ui.dialog.maxZ),this.element.attr(e),this._trigger("focus",c),this)},open:function(){if(this._isOpen)return;var b,c=this.options,d=this.uiDialog;return this._size(),this._position(c.position),d.show(c.show),this.overlay=c.modal?new a.ui.dialog.overlay(this):null,this.moveToTop(!0),c.modal&&this._on(d,{keydown:function(b){if(b.keyCode!==a.ui.keyCode.TAB)return;var c=a(":tabbable",this),d=c.filter(":first"),e=c.filter(":last");if(b.target===e[0]&&!b.shiftKey)return d.focus(1),!1;if(b.target===d[0]&&b.shiftKey)return e.focus(1),!1}}),b=this.element.find(":tabbable"),b.length||(b=this.uiDialogButtonPane.find(":tabbable"),b.length||(b=d)),b.eq(0).focus(),this._isOpen=!0,this._trigger("open"),this},_createButtons:function(b){var c,d,e=this,f=!1;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),typeof b=="object"&&b!==null&&a.each(b,function(){return!(f=!0)}),f?(a.each(b,function(b,c){c=a.isFunction(c)?{click:c,text:b}:c;var d=a("<button type='button'>").attr(c,!0).unbind("click").click(function(){c.click.apply(e.element[0],arguments)}).appendTo(e.uiButtonSet);a.fn.button&&d.button()}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog)):this.uiDialog.removeClass("ui-dialog-buttons")},_makeDraggable:function(){function d(a){return{position:a.position,offset:a.offset}}var b=this,c=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(c,e){a(this).addClass("ui-dialog-dragging"),b._trigger("dragStart",c,d(e))},drag:function(a,c){b._trigger("drag",a,d(c))},stop:function(e,f){c.position=[f.position.left-b.document.scrollLeft(),f.position.top-b.document.scrollTop()],a(this).removeClass("ui-dialog-dragging"),b._trigger("dragStop",e,d(f)),a.ui.dialog.overlay.resize()}})},_makeResizable:function(c){function h(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}c=c===b?this.options.resizable:c;var d=this,e=this.options,f=this.uiDialog.css("position"),g=typeof c=="string"?c:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:this._minHeight(),handles:g,start:function(b,c){a(this).addClass("ui-dialog-resizing"),d._trigger("resizeStart",b,h(c))},resize:function(a,b){d._trigger("resize",a,h(b))},stop:function(b,c){a(this).removeClass("ui-dialog-resizing"),e.height=a(this).height(),e.width=a(this).width(),d._trigger("resizeStop",b,h(c)),a.ui.dialog.overlay.resize()}}).css("position",f).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(b){var c=[],d=[0,0],e;if(b){if(typeof b=="string"||typeof b=="object"&&"0"in b)c=b.split?b.split(" "):[b[0],b[1]],c.length===1&&(c[1]=c[0]),a.each(["left","top"],function(a,b){+c[a]===c[a]&&(d[a]=c[a],c[a]=b)}),b={my:c.join(" "),at:c.join(" "),offset:d.join(" ")};b=a.extend({},a.ui.dialog.prototype.options.position,b)}else b=a.ui.dialog.prototype.options.position;e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.position(b),e||this.uiDialog.hide()},_setOptions:function(b){var c=this,f={},g=!1;a.each(b,function(a,b){c._setOption(a,b),a in d&&(g=!0),a in e&&(f[a]=b)}),g&&this._size(),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",f)},_setOption:function(b,d){var e,f,g=this.uiDialog;switch(b){case"buttons":this._createButtons(d);break;case"closeText":this.uiDialogTitlebarCloseText.text(""+d);break;case"dialogClass":g.removeClass(this.options.dialogClass).addClass(c+d);break;case"disabled":d?g.addClass("ui-dialog-disabled"):g.removeClass("ui-dialog-disabled");break;case"draggable":e=g.is(":data(draggable)"),e&&!d&&g.draggable("destroy"),!e&&d&&this._makeDraggable();break;case"position":this._position(d);break;case"resizable":f=g.is(":data(resizable)"),f&&!d&&g.resizable("destroy"),f&&typeof d=="string"&&g.resizable("option","handles",d),!f&&d!==!1&&this._makeResizable(d);break;case"title":a(".ui-dialog-title",this.uiDialogTitlebar).html(""+(d||"&#160;"))}this._super(b,d)},_size:function(){var b,c,d,e=this.options,f=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0}),e.minWidth>e.width&&(e.width=e.minWidth),b=this.uiDialog.css({height:"auto",width:e.width}).outerHeight(),c=Math.max(0,e.minHeight-b),e.height==="auto"?a.support.minHeight?this.element.css({minHeight:c,height:"auto"}):(this.uiDialog.show(),d=this.element.css("height","auto").height(),f||this.uiDialog.hide(),this.element.height(Math.max(d,c))):this.element.height(Math.max(e.height-b,0)),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}}),a.extend(a.ui.dialog,{uuid:0,maxZ:0,getTitleId:function(a){var b=a.attr("id");return b||(this.uuid+=1,b=this.uuid),"ui-dialog-title-"+b},overlay:function(b){this.$el=a.ui.dialog.overlay.create(b)}}),a.extend(a.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),create:function(b){this.instances.length===0&&(setTimeout(function(){a.ui.dialog.overlay.instances.length&&a(document).bind(a.ui.dialog.overlay.events,function(b){if(a(b.target).zIndex()<a.ui.dialog.overlay.maxZ)return!1})},1),a(window).bind("resize.dialog-overlay",a.ui.dialog.overlay.resize));var c=this.oldInstances.pop()||a("<div>").addClass("ui-widget-overlay");return a(document).bind("keydown.dialog-overlay",function(d){var e=a.ui.dialog.overlay.instances;e.length!==0&&e[e.length-1]===c&&b.options.closeOnEscape&&!d.isDefaultPrevented()&&d.keyCode&&d.keyCode===a.ui.keyCode.ESCAPE&&(b.close(d),d.preventDefault())}),c.appendTo(document.body).css({width:this.width(),height:this.height()}),a.fn.bgiframe&&c.bgiframe(),this.instances.push(c),c},destroy:function(b){var c=a.inArray(b,this.instances),d=0;c!==-1&&this.oldInstances.push(this.instances.splice(c,1)[0]),this.instances.length===0&&a([document,window]).unbind(".dialog-overlay"),b.height(0).width(0).remove(),a.each(this.instances,function(){d=Math.max(d,this.css("z-index"))}),this.maxZ=d},height:function(){var b,c;return a.browser.msie?(b=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),c=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight),b<c?a(window).height()+"px":b+"px"):a(document).height()+"px"},width:function(){var b,c;return a.browser.msie?(b=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),c=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth),b<c?a(window).width()+"px":b+"px"):a(document).width()+"px"},resize:function(){var b=a([]);a.each(a.ui.dialog.overlay.instances,function(){b=b.add(this)}),b.css({width:0,height:0}).css({width:a.ui.dialog.overlay.width(),height:a.ui.dialog.overlay.height()})}}),a.extend(a.ui.dialog.overlay.prototype,{destroy:function(){a.ui.dialog.overlay.destroy(this.$el)}})}(jQuery),function(a,b){var c=/up|down|vertical/,d=/up|left|vertical|horizontal/;a.effects.effect.blind=function(b,e){var f=a(this),g=["position","top","bottom","left","right","height","width"],h=a.effects.setMode(f,b.mode||"hide"),i=b.direction||"up",j=c.test(i),k=j?"height":"width",l=j?"top":"left",m=d.test(i),n={},o=h==="show",p,q,r;f.parent().is(".ui-effects-wrapper")?a.effects.save(f.parent(),g):a.effects.save(f,g),f.show(),p=a.effects.createWrapper(f).css({overflow:"hidden"}),q=p[k](),r=parseFloat(p.css(l)),n[k]=o?q:0,m||(f.css(j?"bottom":"right",0).css(j?"top":"left","auto").css({position:"absolute"}),n[l]=o?r:q+r),o&&(p.css(k,0),m||p.css(l,r+q)),p.animate(n,{duration:b.duration,easing:b.easing,queue:!1,complete:function(){h==="hide"&&f.hide(),a.effects.restore(f,g),a.effects.removeWrapper(f),e()}})}}(jQuery),function(a,b){a.effects.effect.bounce=function(b,c){var d=a(this),e=["position","top","bottom","left","right","height","width"],f=a.effects.setMode(d,b.mode||"effect"),g=f==="hide",h=f==="show",i=b.direction||"up",j=b.distance,k=b.times||5,l=k*2+(h||g?1:0),m=b.duration/l,n=b.easing,o=i==="up"||i==="down"?"top":"left",p=i==="up"||i==="left",q,r,s,t=d.queue(),u=t.length;(h||g)&&e.push("opacity"),a.effects.save(d,e),d.show(),a.effects.createWrapper(d),j||(j=d[o==="top"?"outerHeight":"outerWidth"]()/3),h&&(s={opacity:1},s[o]=0,d.css("opacity",0).css(o,p?-j*2:j*2).animate(s,m,n)),g&&(j=j/Math.pow(2,k-1)),s={},s[o]=0;for(q=0;q<k;q++)r={},r[o]=(p?"-=":"+=")+j,d.animate(r,m,n).animate(s,m,n),j=g?j*2:j/2;g&&(r={opacity:0},r[o]=(p?"-=":"+=")+j,d.animate(r,m,n)),d.queue(function(){g&&d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()}),u>1&&t.splice.apply(t,[1,0].concat(t.splice(u,l+1))),d.dequeue()}}(jQuery),function(a,b){a.effects.effect.clip=function(b,c){var d=a(this),e=["position","top","bottom","left","right","height","width"],f=a.effects.setMode(d,b.mode||"hide"),g=f==="show",h=b.direction||"vertical",i=h==="vertical",j=i?"height":"width",k=i?"top":"left",l={},m,n,o;a.effects.save(d,e),d.show(),m=a.effects.createWrapper(d).css({overflow:"hidden"}),n=d[0].tagName==="IMG"?m:d,o=n[j](),g&&(n.css(j,0),n.css(k,o/2)),l[j]=g?o:0,l[k]=g?0:o/2,n.animate(l,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){g||d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()}})}}(jQuery),function(a,b){a.effects.effect.drop=function(b,c){var d=a(this),e=["position","top","bottom","left","right","opacity","height","width"],f=a.effects.setMode(d,b.mode||"hide"),g=f==="show",h=b.direction||"left",i=h==="up"||h==="down"?"top":"left",j=h==="up"||h==="left"?"pos":"neg",k={opacity:g?1:0},l;a.effects.save(d,e),d.show(),a.effects.createWrapper(d),l=b.distance||d[i==="top"?"outerHeight":"outerWidth"]({margin:!0})/2,g&&d.css("opacity",0).css(i,j==="pos"?-l:l),k[i]=(g?j==="pos"?"+=":"-=":j==="pos"?"-=":"+=")+l,d.animate(k,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){f==="hide"&&d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()}})}}(jQuery),function(a,b){a.effects.effect.explode=function(b,c){function s(){l.push(this),l.length===d*e&&t()}function t(){f.css({visibility:"visible"}),a(l).remove(),h||f.hide(),c()}var d=b.pieces?Math.round(Math.sqrt(b.pieces)):3,e=d,f=a(this),g=a.effects.setMode(f,b.mode||"hide"),h=g==="show",i=f.show().css("visibility","hidden").offset(),j=Math.ceil(f.outerWidth()/e),k=Math.ceil(f.outerHeight()/d),l=[],m,n,o,p,q,r;for(m=0;m<d;m++){p=i.top+m*k,r=m-(d-1)/2;for(n=0;n<e;n++)o=i.left+n*j,q=n-(e-1)/2,f.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-n*j,top:-m*k}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:j,height:k,left:o+(h?q*j:0),top:p+(h?r*k:0),opacity:h?0:1}).animate({left:o+(h?0:q*j),top:p+(h?0:r*k),opacity:h?1:0},b.duration||500,b.easing,s)}}}(jQuery),function(a,b){a.effects.effect.fade=function(b,c){var d=a(this),e=a.effects.setMode(d,b.mode||"toggle");d.animate({opacity:e},{queue:!1,duration:b.duration,easing:b.easing,complete:c})}}(jQuery),function(a,b){a.effects.effect.fold=function(b,c){var d=a(this),e=["position","top","bottom","left","right","height","width"],f=a.effects.setMode(d,b.mode||"hide"),g=f==="show",h=f==="hide",i=b.size||15,j=/([0-9]+)%/.exec(i),k=!!b.horizFirst,l=g!==k,m=l?["width","height"]:["height","width"],n=b.duration/2,o,p,q={},r={};a.effects.save(d,e),d.show(),o=a.effects.createWrapper(d).css({overflow:"hidden"}),p=l?[o.width(),o.height()]:[o.height(),o.width()],j&&(i=parseInt(j[1],10)/100*p[h?0:1]),g&&o.css(k?{height:0,width:i}:{height:i,width:0}),q[m[0]]=g?p[0]:i,r[m[1]]=g?p[1]:0,o.animate(q,n,b.easing).animate(r,n,b.easing,function(){h&&d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()})}}(jQuery),function(a,b){a.effects.effect.highlight=function(b,c){var d=a(this),e=["backgroundImage","backgroundColor","opacity"],f=a.effects.setMode(d,b.mode||"show"),g={backgroundColor:d.css("backgroundColor")};f==="hide"&&(g.opacity=0),a.effects.save(d,e),d.show().css({backgroundImage:"none",backgroundColor:b.color||"#ffff99"}).animate(g,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){f==="hide"&&d.hide(),a.effects.restore(d,e),c()}})}}(jQuery),function(a,b){a.effects.effect.pulsate=function(b,c){var d=a(this),e=a.effects.setMode(d,b.mode||"show"),f=e==="show",g=e==="hide",h=f||e==="hide",i=(b.times||5)*2+(h?1:0),j=b.duration/i,k=0,l=d.queue(),m=l.length,n;if(f||!d.is(":visible"))d.css("opacity",0).show(),k=1;for(n=1;n<i;n++)d.animate({opacity:k},j,b.easing),k=1-k;d.animate({opacity:k},j,b.easing),d.queue(function(){g&&d.hide(),c()}),m>1&&l.splice.apply(l,[1,0].concat(l.splice(m,i+1))),d.dequeue()}}(jQuery),function(a,b){a.effects.effect.puff=function(b,c){var d=a(this),e=a.effects.setMode(d,b.mode||"hide"),f=e==="hide",g=parseInt(b.percent,10)||150,h=g/100,i={height:d.height(),width:d.width()};a.extend(b,{effect:"scale",queue:!1,fade:!0,mode:e,complete:c,percent:f?g:100,from:f?i:{height:i.height*h,width:i.width*h}}),d.effect(b)},a.effects.effect.scale=function(b,c){var d=a(this),e=a.extend(!0,{},b),f=a.effects.setMode(d,b.mode||"effect"),g=parseInt(b.percent,10)||(parseInt(b.percent,10)===0?0:f==="hide"?0:100),h=b.direction||"both",i=b.origin,j={height:d.height(),width:d.width(),outerHeight:d.outerHeight(),outerWidth:d.outerWidth()},k={y:h!=="horizontal"?g/100:1,x:h!=="vertical"?g/100:1};e.effect="size",e.queue=!1,e.complete=c,f!=="effect"&&(e.origin=i||["middle","center"],e.restore=!0),e.from=b.from||(f==="show"?{height:0,width:0}:j),e.to={height:j.height*k.y,width:j.width*k.x,outerHeight:j.outerHeight*k.y,outerWidth:j.outerWidth*k.x},e.fade&&(f==="show"&&(e.from.opacity=0,e.to.opacity=1),f==="hide"&&(e.from.opacity=1,e.to.opacity=0)),d.effect(e)},a.effects.effect.size=function(b,c){var d=a(this),e=["position","top","bottom","left","right","width","height","overflow","opacity"],f=["position","top","bottom","left","right","overflow","opacity"],g=["width","height","overflow"],h=["fontSize"],i=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],j=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],k=a.effects.setMode(d,b.mode||"effect"),l=b.restore||k!=="effect",m=b.scale||"both",n=b.origin||["middle","center"],o,p,q,r=d.css("position");k==="show"&&d.show(),o={height:d.height(),width:d.width(),outerHeight:d.outerHeight(),outerWidth:d.outerWidth()},d.from=b.from||o,d.to=b.to||o,q={from:{y:d.from.height/o.height,x:d.from.width/o.width},to:{y:d.to.height/o.height,x:d.to.width/o.width}};if(m==="box"||m==="both")q.from.y!==q.to.y&&(e=e.concat(i),d.from=a.effects.setTransition(d,i,q.from.y,d.from),d.to=a.effects.setTransition(d,i,q.to.y,d.to)),q.from.x!==q.to.x&&(e=e.concat(j),d.from=a.effects.setTransition(d,j,q.from.x,d.from),d.to=a.effects.setTransition(d,j,q.to.x,d.to));(m==="content"||m==="both")&&q.from.y!==q.to.y&&(e=e.concat(h),d.from=a.effects.setTransition(d,h,q.from.y,d.from),d.to=a.effects.setTransition(d,h,q.to.y,d.to)),a.effects.save(d,l?e:f),d.show(),a.effects.createWrapper(d),d.css("overflow","hidden").css(d.from),n&&(p=a.effects.getBaseline(n,o),d.from.top=(o.outerHeight-d.outerHeight())*p.y,d.from.left=(o.outerWidth-d.outerWidth())*p.x,d.to.top=(o.outerHeight-d.to.outerHeight)*p.y,d.to.left=(o.outerWidth-d.to.outerWidth)*p.x),d.css(d.from);if(m==="content"||m==="both")i=i.concat(["marginTop","marginBottom"]).concat(h),j=j.concat(["marginLeft","marginRight"]),g=e.concat(i).concat(j),d.find("*[width]").each(function(){var c=a(this),d={height:c.height(),width:c.width()};l&&a.effects.save(c,g),c.from={height:d.height*q.from.y,width:d.width*q.from.x},c.to={height:d.height*q.to.y,width:d.width*q.to.x},q.from.y!==q.to.y&&(c.from=a.effects.setTransition(c,i,q.from.y,c.from),c.to=a.effects.setTransition(c,i,q.to.y,c.to)),q.from.x!==q.to.x&&(c.from=a.effects.setTransition(c,j,q.from.x,c.from),c.to=a.effects.setTransition(c,j,q.to.x,c.to)),c.css(c.from),c.animate(c.to,b.duration,b.easing,function(){l&&a.effects.restore(c,g)})});d.animate(d.to,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){d.to.opacity===0&&d.css("opacity",d.from.opacity),k==="hide"&&d.hide(),a.effects.restore(d,l?e:f),l||(r==="static"?d.css({position:"relative",top:d.to.top,left:d.to.left}):a.each(["top","left"],function(a,b){d.css(b,function(b,c){var e=parseInt(c,10),f=a?d.to.left:d.to.top;return c==="auto"?f+"px":e+f+"px"})})),a.effects.removeWrapper(d),c()}})}}(jQuery),function(a,b){a.effects.effect.shake=function(b,c){var d=a(this),e=["position","top","bottom","left","right","height","width"],f=a.effects.setMode(d,b.mode||"effect"),g=b.direction||"left",h=b.distance||20,i=b.times||3,j=i*2+1,k=b.duration,l=g==="up"||g==="down"?"top":"left",m=g==="up"||g==="left",n={},o={},p={},q,r=d.queue(),s=r.length;a.effects.save(d,e),d.show(),a.effects.createWrapper(d),n[l]=(m?"-=":"+=")+h,o[l]=(m?"+=":"-=")+h*2,p[l]=(m?"-=":"+=")+h*2,d.animate(n,k,b.easing);for(q=1;q<i;q++)d.animate(o,k,b.easing).animate(p,k,b.easing);d.animate(o,k,b.easing).animate(n,k/2,b.easing).queue(function(){f==="hide"&&d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()}),s>1&&r.splice.apply(r,[1,0].concat(r.splice(s,j+1))),d.dequeue()}}(jQuery),function(a,b){a.effects.effect.slide=function(b,c){var d=a(this),e=["position","top","bottom","left","right","width","height"],f=a.effects.setMode(d,b.mode||"show"),g=f==="show",h=b.direction||"left",i=h==="up"||h==="down"?"top":"left",j=h==="up"||h==="left",k,l={};a.effects.save(d,e),d.show(),k=b.distance||d[i==="top"?"outerHeight":"outerWidth"]({margin:!0}),a.effects.createWrapper(d).css({overflow:"hidden"}),g&&d.css(i,j?isNaN(k)?"-"+k:-k:k),l[i]=(g?j?"+=":"-=":j?"-=":"+=")+k,d.animate(l,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){f==="hide"&&d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()}})}}(jQuery),function(a,b){a.effects.effect.transfer=function(b,c){var d=a(this),e=a(b.to),f=e.css("position")==="fixed",g=a("body"),h=f?g.scrollTop():0,i=f?g.scrollLeft():0,j=e.offset(),k={top:j.top-h,left:j.left-i,height:e.innerHeight(),width:e.innerWidth()},l=d.offset(),m=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.className).css({top:l.top-h,left:l.left-i,height:d.innerHeight(),width:d.innerWidth(),position:f?"fixed":"absolute"}).animate(k,b.duration,b.easing,function(){m.remove(),c()})}}(jQuery),function(a,b){var c=null;a.widget("ui.menu",{version:"1.9.0-beta.1",defaultElement:"<ul>",delay:300,options:{menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,a.proxy(function(a){this.options.disabled&&a.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(a){a.preventDefault()},"click .ui-state-disabled > a":function(a){a.preventDefault()},"click .ui-menu-item:has(a)":function(b){var d=a(b.target);d[0]!==c&&(c=d[0],d.one("click"+this.eventNamespace,function(a){c=null}),d.closest(".ui-menu-item").is(".ui-state-disabled")||(this.select(b),this._delay(function(){this.element.is(":focus")||this.element.focus()},20)))},"mouseenter .ui-menu-item":function(b){var c=a(b.currentTarget);c.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(b,c)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(b){var c,d=this.element,e=d.children(".ui-menu-item").eq(0);this.active?e=this.active:this._hasScroll()&&(c=d.offset().top,d.children().each(function(){var b=a(this);if(b.offset().top-c>=0)return e=b,!1})),this.focus(b,e)},blur:function(b){this._delay(function(){a.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(b)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(b){a(b.target).closest(".ui-menu").length||this.collapseAll(b)}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var b=a(this);b.data("ui-menu-submenu-carat")&&b.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content"),this._off(a(c),"click")},_keydown:function(b){function h(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var c,d,e,f,g=!0;switch(b.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(b);break;case a.ui.keyCode.PAGE_DOWN:this.nextPage(b);break;case a.ui.keyCode.HOME:this._move("first","first",b);break;case a.ui.keyCode.END:this._move("last","last",b);break;case a.ui.keyCode.UP:this.previous(b);break;case a.ui.keyCode.DOWN:this.next(b);break;case a.ui.keyCode.LEFT:this.collapse(b);break;case a.ui.keyCode.RIGHT:this.active.is(".ui-state-disabled")||this.expand(b);break;case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(b);break;case a.ui.keyCode.ESCAPE:this.collapse(b);break;default:g=!1,d=this.previousFilter||"",e=String.fromCharCode(b.keyCode),f=!1,clearTimeout(this.filterTimer),e===d?f=!0:e=d+e,c=this.activeMenu.children(".ui-menu-item").filter(function(){return(new RegExp("^"+h(e),"i")).test(a(this).children("a").text())}),c=f&&c.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):c,c.length||(e=String.fromCharCode(b.keyCode),c=this.activeMenu.children(".ui-menu-item").filter(function(){return(new RegExp("^"+h(e),"i")).test(a(this).children("a").text())})),c.length?(this.focus(b,c),c.length>1?(this.previousFilter=e,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}g&&b.preventDefault()},_activate:function(a){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(a):this.select(a))},refresh:function(){var b,c=this.element.find(this.options.menus+":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"});b=c.add(this.element),b.children(":not( .ui-menu-item ):has( a )").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),b.children(":not(.ui-menu-item)").each(function(){var b=a(this);/[^\-—–\s]/.test(b.text())||b.addClass("ui-widget-content ui-menu-divider")}),b.children(".ui-state-disabled").attr("aria-disabled","true"),c.each(function(){var b=a(this),c=b.prev("a"),d=a("<span>").addClass("ui-menu-icon ui-icon ui-icon-carat-1-e").data("ui-menu-submenu-carat",!0);c.attr("aria-haspopup","true").prepend(d),b.attr("aria-labelledby",c.attr("id"))})},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},focus:function(a,b){var c,d;this.blur(a,a&&a.type==="focus"),this._scrollIntoView(b),this.active=b.first(),d=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",d.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),a&&a.type==="keydown"?this._close():this.timer=this._delay(function(){this._close()},this.delay),c=b.children(".ui-menu"),c.length&&/^mouse/.test(a.type)&&this._startOpening(c),this.activeMenu=b.parent(),this._trigger("focus",a,{item:b})},_scrollIntoView:function(b){var c,d,e,f,g,h;this._hasScroll()&&(c=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0,d=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0,e=b.offset().top-this.activeMenu.offset().top-c-d,f=this.activeMenu.scrollTop(),g=this.activeMenu.height(),h=b.height(),e<0?this.activeMenu.scrollTop(f+e):e+h>g&&this.activeMenu.scrollTop(f+e-g+h))},blur:function(a,b){b||clearTimeout(this.timer);if(!this.active)return;this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",a,{item:this.active})},_startOpening:function(a){clearTimeout(this.timer);if(a.attr("aria-hidden")!=="true")return;this.timer=this._delay(function(){this._close(),this._open(a)},this.delay)},_open:function(b){var c=a.extend({of:this.active},a.type(this.options.position)==="function"?this.options.position(this.active):this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden","true"),b.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(c)},collapseAll:function(b,c){clearTimeout(this.timer),this.timer=this._delay(function(){var d=c?this.element:a(b&&b.target).closest(this.element.find(".ui-menu"));d.length||(d=this.element),this._close(d),this.blur(b),this.activeMenu=d},this.delay)},_close:function(a){a||(a=this.active?this.active.parent():this.element),a.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(a){var b=this.active&&this.active.parent().closest(".ui-menu-item",this.element);if(b&&b.length)return this._close(),this.focus(a,b),!0},expand:function(a){var b=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();if(b&&b.length)return this._open(b.parent()),this._delay(function(){this.focus(a,b)},20),!0},next:function(a){this._move("next","first",a)},previous:function(a){this._move("prev","last",a)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(a,b,c){var d;this.active&&(a==="first"||a==="last"?d=this.active[a==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1):d=this.active[a+"All"](".ui-menu-item").eq(0));if(!d||!d.length||!this.active)d=this.activeMenu.children(".ui-menu-item")[b]();this.focus(c,d)},nextPage:function(b){var c,d,e;if(!this.active){this.next(b);return}if(this.isLastItem())return;this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d-e<0}),this.focus(b,c)):this.focus(b,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())},previousPage:function(b){var c,d,e;if(!this.active){this.next(b);return}if(this.isFirstItem())return;this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d+e>0}),this.focus(b,c)):this.focus(b,this.activeMenu.children(".ui-menu-item").first())},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(a){var b={item:this.active};this.collapseAll(a,!0),this._trigger("select",a,b)}})}(jQuery),function(a,b){function m(a,b,c){return[parseInt(a[0],10)*(k.test(a[0])?b/100:1),parseInt(a[1],10)*(k.test(a[1])?c/100:1)]}function n(b,c){return parseInt(a.css(b,c),10)||0}a.ui=a.ui||{};var c,d=Math.max,e=Math.abs,f=Math.round,g=/left|center|right/,h=/top|center|bottom/,i=/[\+\-]\d+%?/,j=/^\w+/,k=/%$/,l=a.fn.position;a.position={scrollbarWidth:function(){if(c!==b)return c;var d,e,f=a("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),g=f.children()[0];return a("body").append(f),d=g.offsetWidth,f.css("overflow","scroll"),e=g.offsetWidth,d===e&&(e=f[0].clientWidth),f.remove(),c=d-e},getScrollInfo:function(b){var c=b.isWindow?"":b.element.css("overflow-x"),d=b.isWindow?"":b.element.css("overflow-y"),e=c==="scroll"||c==="auto"&&b.width<b.element[0].scrollWidth,f=d==="scroll"||d==="auto"&&b.height<b.element[0].scrollHeight;return{width:e?a.position.scrollbarWidth():0,height:f?a.position.scrollbarWidth():0}},getWithinInfo:function(b){var c=a(b||window),d=a.isWindow(c[0]);return{element:c,isWindow:d,offset:c.offset()||{left:0,top:0},scrollLeft:c.scrollLeft(),scrollTop:c.scrollTop(),width:d?c.width():c.outerWidth(),height:d?c.height():c.outerHeight()}}},a.fn.position=function(b){if(!b||!b.of)return l.apply(this,arguments);b=a.extend({},b);var c,k,o,p,q,r=a(b.of),s=a.position.getWithinInfo(b.within),t=a.position.getScrollInfo(s),u=r[0],v=(b.collision||"flip").split(" "),w={};return u.nodeType===9?(k=r.width(),o=r.height(),p={top:0,left:0}):a.isWindow(u)?(k=r.width(),o=r.height(),p={top:r.scrollTop(),left:r.scrollLeft()}):u.preventDefault?(b.at="left top",k=o=0,p={top:u.pageY,left:u.pageX}):(k=r.outerWidth(),o=r.outerHeight(),p=r.offset()),q=a.extend({},p),a.each(["my","at"],function(){var a=(b[this]||"").split(" "),c,d;a.length===1&&(a=g.test(a[0])?a.concat(["center"]):h.test(a[0])?["center"].concat(a):["center","center"]),a[0]=g.test(a[0])?a[0]:"center",a[1]=h.test(a[1])?a[1]:"center",c=i.exec(a[0]),d=i.exec(a[1]),w[this]=[c?c[0]:0,d?d[0]:0],b[this]=[j.exec(a[0])[0],j.exec(a[1])[0]]}),v.length===1&&(v[1]=v[0]),b.at[0]==="right"?q.left+=k:b.at[0]==="center"&&(q.left+=k/2),b.at[1]==="bottom"?q.top+=o:b.at[1]==="center"&&(q.top+=o/2),c=m(w.at,k,o),q.left+=c[0],q.top+=c[1],this.each(function(){var g,h,i=a(this),j=i.outerWidth(),l=i.outerHeight(),u=n(this,"marginLeft"),x=n(this,"marginTop"),y=j+u+n(this,"marginRight")+t.width,z=l+x+n(this,"marginBottom")+t.height,A=a.extend({},q),B=m(w.my,i.outerWidth(),i.outerHeight());b.my[0]==="right"?A.left-=j:b.my[0]==="center"&&(A.left-=j/2),b.my[1]==="bottom"?A.top-=l:b.my[1]==="center"&&(A.top-=l/2),A.left+=B[0],A.top+=B[1],a.support.offsetFractions||(A.left=f(A.left),A.top=f(A.top)),g={marginLeft:u,marginTop:x},a.each(["left","top"],function(d,e){a.ui.position[v[d]]&&a.ui.position[v[d]][e](A,{targetWidth:k,targetHeight:o,elemWidth:j,elemHeight:l,collisionPosition:g,collisionWidth:y,collisionHeight:z,offset:[c[0]+B[0],c[1]+B[1]],my:b.my,at:b.at,within:s,elem:i})}),a.fn.bgiframe&&i.bgiframe(),b.using&&(h=function(a){var c=p.left-A.left,f=c+k-j,g=p.top-A.top,h=g+o-l,m={target:{element:r,left:p.left,top:p.top,width:k,height:o},element:{element:i,left:A.left,top:A.top,width:j,height:l},horizontal:f<0?"left":c>0?"right":"center",vertical:h<0?"top":g>0?"bottom":"middle"};k<j&&e(c+f)<k&&(m.horizontal="center"),o<l&&e(g+h)<o&&(m.vertical="middle"),d(e(c),e(f))>d(e(g),e(h))?m.important="horizontal":m.important="vertical",b.using.call(this,a,m)}),i.offset(a.extend(A,{using:h}))})},a.ui.position={fit:{left:function(a,b){var c=b.within,e=c.isWindow?c.scrollLeft:c.offset.left,f=c.width,g=a.left-b.collisionPosition.marginLeft,h=e-g,i=g+b.collisionWidth-f-e,j;b.collisionWidth>f?h>0&&i<=0?(j=a.left+h+b.collisionWidth-f-e,a.left+=h-j):i>0&&h<=0?a.left=e:h>i?a.left=e+f-b.collisionWidth:a.left=e:h>0?a.left+=h:i>0?a.left-=i:a.left=d(a.left-g,a.left)},top:function(a,b){var c=b.within,e=c.isWindow?c.scrollTop:c.offset.top,f=b.within.height,g=a.top-b.collisionPosition.marginTop,h=e-g,i=g+b.collisionHeight-f-e,j;b.collisionHeight>f?h>0&&i<=0?(j=a.top+h+b.collisionHeight-f-e,a.top+=h-j):i>0&&h<=0?a.top=e:h>i?a.top=e+f-b.collisionHeight:a.top=e:h>0?a.top+=h:i>0?a.top-=i:a.top=d(a.top-g,a.top)}},flip:{left:function(a,b){var c=b.within,d=c.offset.left+c.scrollLeft,f=c.width,g=c.isWindow?0:c.offset.left,h=a.left-b.collisionPosition.marginLeft,i=h-g,j=h+b.collisionWidth-f-g,k=b.my[0]==="left"?-b.elemWidth:b.my[0]==="right"?b.elemWidth:0,l=b.at[0]==="left"?b.targetWidth:b.at[0]==="right"?-b.targetWidth:0,m=-2*b.offset[0],n,o;if(i<0){n=a.left+k+l+m+b.collisionWidth-f-d;if(n<0||n<e(i))a.left+=k+l+m}else if(j>0){o=a.left-b.collisionPosition.marginLeft+k+l+m-g;if(o>0||e(o)<j)a.left+=k+l+m}},top:function(a,b){var c=b.within,d=c.offset.top+c.scrollTop,f=c.height,g=c.isWindow?0:c.offset.top,h=a.top-b.collisionPosition.marginTop,i=h-g,j=h+b.collisionHeight-f-g,k=b.my[1]==="top",l=k?-b.elemHeight:b.my[1]==="bottom"?b.elemHeight:0,m=b.at[1]==="top"?b.targetHeight:b.at[1]==="bottom"?-b.targetHeight:0,n=-2*b.offset[1],o,p;i<0?(p=a.top+l+m+n+b.collisionHeight-f-d,a.top+l+m+n>i&&(p<0||p<e(i))&&(a.top+=l+m+n)):j>0&&(o=a.top-b.collisionPosition.marginTop+l+m+n-g,a.top+l+m+n>j&&(o>0||e(o)<j)&&(a.top+=l+m+n))}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments),a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments),a.ui.position.fit.top.apply(this,arguments)}}},function(){var b,c,d,e,f,g=document.getElementsByTagName("body")[0],h=document.createElement("div");b=document.createElement(g?"div":"body"),d={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},g&&a.extend(d,{position:"absolute",left:"-1000px",top:"-1000px"});for(f in d)b.style[f]=d[f];b.appendChild(h),c=g||document.documentElement,c.insertBefore(b,c.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",e=a(h).offset().left,a.support.offsetFractions=e>10&&e<11,b.innerHTML="",c.removeChild(b)}(),a.uiBackCompat!==!1&&function(a){var c=a.fn.position;a.fn.position=function(d){if(!d||!d.offset)return c.call(this,d);var e=d.offset.split(" "),f=d.at.split(" ");return e.length===1&&(e[1]=e[0]),/^\d/.test(e[0])&&(e[0]="+"+e[0]),/^\d/.test(e[1])&&(e[1]="+"+e[1]),f.length===1&&(/left|center|right/.test(f[0])?f[1]="center":(f[1]=f[0],f[0]="center")),c.call(this,a.extend(d,{at:f[0]+e[0]+" "+f[1]+e[1],offset:b}))}}(jQuery)}(jQuery),function(a,b){a.widget("ui.progressbar",{version:"1.9.0-beta.1",options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()}),this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this.oldValue=this._value(),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(a){return a===b?this._value():(this._setOption("value",a),this)},_setOption:function(a,b){a==="value"&&(this.options.value=b,this._refreshValue(),this._value()===this.options.max&&this._trigger("complete")),this._super(a,b)},_value:function(){var a=this.options.value;return typeof a!="number"&&(a=0),Math.min(this.options.max,Math.max(this.min,a))},_percentage:function(){return 100*this._value()/this.options.max},_refreshValue:function(){var a=this.value(),b=this._percentage();this.oldValue!==a&&(this.oldValue=a,this._trigger("change")),this.valueDiv.toggle(a>this.min).toggleClass("ui-corner-right",a===this.options.max).width(b.toFixed(0)+"%"),this.element.attr("aria-valuenow",a)}})}(jQuery),function(a,b){var c=5;a.widget("ui.slider",a.ui.mouse,{version:"1.9.0-beta.1",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var b,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=d.values&&d.values.length||1,h=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(d.disabled?" ui-slider-disabled ui-disabled":"")),this.range=a([]),d.range&&(d.range===!0&&(d.values||(d.values=[this._valueMin(),this._valueMin()]),d.values.length&&d.values.length!==2&&(d.values=[d.values[0],d.values[0]])),this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(d.range==="min"||d.range==="max"?" ui-slider-range-"+d.range:"")));for(b=e.length;b<g;b++)h.push(f);this.handles=e.add(a(h.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(a){a.preventDefault()}).mouseenter(function(){d.disabled||a(this).addClass("ui-state-hover")}).mouseleave(function(){a(this).removeClass("ui-state-hover")}).focus(function(){d.disabled?a(this).blur():(a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),a(this).addClass("ui-state-focus"))}).blur(function(){a(this).removeClass("ui-state-focus")}),this.handles.each(function(b){a(this).data("ui-slider-handle-index",b)}),this._on(this.handles,{keydown:function(b){var d,e,f,g,h=a(b.target).data("ui-slider-handle-index");switch(b.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:b.preventDefault();if(!this._keySliding){this._keySliding=!0,a(b.target).addClass("ui-state-active"),d=this._start(b,h);if(d===!1)return}}g=this.options.step,this.options.values&&this.options.values.length?e=f=this.values(h):e=f=this.value();switch(b.keyCode){case a.ui.keyCode.HOME:f=this._valueMin();break;case a.ui.keyCode.END:f=this._valueMax();break;case a.ui.keyCode.PAGE_UP:f=this._trimAlignValue(e+(this._valueMax()-this._valueMin())/c);break;case a.ui.keyCode.PAGE_DOWN:f=this._trimAlignValue(e-(this._valueMax()-this._valueMin())/c);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(e===this._valueMax())return;f=this._trimAlignValue(e+g);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(e===this._valueMin())return;f=this._trimAlignValue(e-g)}this._slide(b,h,f)},keyup:function(b){var c=a(b.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(b,c),this._change(b,c),a(b.target).removeClass("ui-state-active"))}}),this._refreshValue(),this._animateOff=!1},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(b){var c,d,e,f,g,h,i,j,k=this,l=this.options;return l.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),c={x:b.pageX,y:b.pageY},d=this._normValueFromMouse(c),e=this._valueMax()-this._valueMin()+1,this.handles.each(function(b){var c=Math.abs(d-k.values(b));e>c&&(e=c,f=a(this),g=b)}),l.range===!0&&this.values(1)===l.min&&(g+=1,f=a(this.handles[g])),h=this._start(b,g),h===!1?!1:(this._mouseSliding=!0,this._handleIndex=g,f.addClass("ui-state-active").focus(),i=f.offset(),j=!a(b.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=j?{left:0,top:0}:{left:b.pageX-i.left-f.width()/2,top:b.pageY-i.top-f.height()/2-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,g,d),this._animateOff=!0,!0))},_mouseStart:function(a){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;return this.orientation==="horizontal"?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),this.orientation==="vertical"&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e,this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};return this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),this.options.values.length===2&&this.options.range===!0&&(b===0&&c>d||b===1&&c<d)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c,!0))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("change",a,c)}},value:function(a){if(arguments.length){this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(b,c){var d,e,f;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),this._change(null,b);return}if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();d=this.options.values,e=arguments[0];for(f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()},_setOption:function(b,c){var d,e=0;a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments);switch(b){case"disabled":c?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.prop("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.prop("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(d=0;d<e;d+=1)this._change(null,d);this._animateOff=!1}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a),a},_values:function(a){var b,c,d;if(arguments.length)return b=this.options.values[a],b=this._trimAlignValue(b),b;c=this.options.values.slice();for(d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;return Math.abs(c)*2>=b&&(d+=c>0?b:-b),parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b,c,d,e,f,g=this.options.range,h=this.options,i=this,j=this._animateOff?!1:h.animate,k={};this.options.values&&this.options.values.length?this.handles.each(function(d,e){c=(i.values(d)-i._valueMin())/(i._valueMax()-i._valueMin())*100,k[i.orientation==="horizontal"?"left":"bottom"]=c+"%",a(this).stop(1,1)[j?"animate":"css"](k,h.animate),i.options.range===!0&&(i.orientation==="horizontal"?(d===0&&i.range.stop(1,1)[j?"animate":"css"]({left:c+"%"},h.animate),d===1&&i.range[j?"animate":"css"]({width:c-b+"%"},{queue:!1,duration:h.animate})):(d===0&&i.range.stop(1,1)[j?"animate":"css"]({bottom:c+"%"},h.animate),d===1&&i.range[j?"animate":"css"]({height:c-b+"%"},{queue:!1,duration:h.animate}))),b=c}):(d=this.value(),e=this._valueMin(),f=this._valueMax(),c=f!==e?(d-e)/(f-e)*100:0,k[this.orientation==="horizontal"?"left":"bottom"]=c+"%",this.handle.stop(1,1)[j?"animate":"css"](k,h.animate),g==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[j?"animate":"css"]({width:c+"%"},h.animate),g==="max"&&this.orientation==="horizontal"&&this.range[j?"animate":"css"]({width:100-c+"%"},{queue:!1,duration:h.animate}),g==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[j?"animate":"css"]({height:c+"%"},h.animate),g==="max"&&this.orientation==="vertical"&&this.range[j?"animate":"css"]({height:100-c+"%"},{queue:!1,duration:h.animate}))}})}(jQuery),function(a){function b(a){return function(){var b=this.element.val();a.apply(this,arguments),this._refresh(),b!==this.element.val()&&this._trigger("change")}}a.widget("ui.spinner",{version:"1.9.0-beta.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var b={},c=this.element;return a.each(["min","max","step"],function(a,d){var e=c.attr(d);e!==undefined&&e.length&&(b[d]=e)}),b},_events:{keydown:function(a){this._start(a)&&this._keydown(a)&&a.preventDefault()},keyup:"_stop",focus:function(){this.uiSpinner.addClass("ui-state-active"),this.previous=this.element.val()},blur:function(a){if(this.cancelBlur){delete this.cancelBlur;return}this._refresh(),this.uiSpinner.removeClass("ui-state-active"),this.previous!==this.element.val()&&this._trigger("change",a)},mousewheel:function(a,b){if(!b)return;if(!this.spinning&&!this._start(a))return!1;this._spin((b>0?1:-1)*this.options.step,a),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(a)},100),a.preventDefault()},"mousedown .ui-spinner-button":function(b){function d(){var a=this.element[0]===this.document[0].activeElement;a||(this.element.focus(),this.previous=c,this._delay(function(){this.previous=c}))}var c;c=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),b.preventDefault(),d.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,d.call(this)});if(this._start(b)===!1)return;this._repeat(null,a(b.currentTarget).hasClass("ui-spinner-up")?1:-1,b)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(b){if(!a(b.currentTarget).hasClass("ui-state-active"))return;if(this._start(b)===!1)return!1;this._repeat(null,a(b.currentTarget).hasClass("ui-spinner-up")?1:-1,b)},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var a=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this._hoverable(a),this.element.attr("role","spinbutton"),this.buttons=a.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(a.height()*.5)&&a.height()>0&&a.height(a.height()),this.options.disabled&&this.disable()},_keydown:function(b){var c=this.options,d=a.ui.keyCode;switch(b.keyCode){case d.UP:return this._repeat(null,1,b),!0;case d.DOWN:return this._repeat(null,-1,b),!0;case d.PAGE_UP:return this._repeat(null,c.page,b),!0;case d.PAGE_DOWN:return this._repeat(null,-c.page,b),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-state-default ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon ui-icon-triangle-1-n'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon ui-icon-triangle-1-s'>&#9660;</span></a>"},_start:function(a){return!this.spinning&&this._trigger("start",a)===!1?!1:(this.counter||(this.counter=1),this.spinning=!0,!0)},_repeat:function(a,b,c){a=a||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,b,c)},a),this._spin(b*this.options.step,c)},_spin:function(a,b){var c=this.value()||0;this.counter||(this.counter=1),c=this._adjustValue(c+a*this._increment(this.counter));if(!this.spinning||this._trigger("spin",b,{value:c})!==!1)this._value(c),this.counter++},_increment:function(b){var c=this.options.incremental;return c?a.isFunction(c)?c(b):Math.floor(b*b*b/5e4-b*b/500+17*b/200+1):1},_precision:function(){var a=this._precisionOf(this.options.step);return this.options.min!==null&&(a=Math.max(a,this._precisionOf(this.options.min))),a},_precisionOf:function(a){var b=a.toString(),c=b.indexOf(".");return c===-1?0:b.length-c-1},_adjustValue:function(a){var b,c,d=this.options;return b=d.min!==null?d.min:0,c=a-b,c=Math.round(c/d.step)*d.step,a=b+c,a=parseFloat(a.toFixed(this._precision())),d.max!==null&&a>d.max?d.max:d.min!==null&&a<d.min?d.min:a},_stop:function(a){if(!this.spinning)return;clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",a)},_setOption:function(a,b){if(a==="culture"||a==="numberFormat"){var c=this._parse(this.element.val());this.options[a]=b,this.element.val(this._format(c));return}(a==="max"||a==="min"||a==="step")&&typeof b=="string"&&(b=this._parse(b)),this._super(a,b),a==="disabled"&&(b?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:b(function(a){this._super(a),this._value(this.element.val())}),_parse:function(a){return typeof a=="string"&&a!==""&&(a=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(a,10,this.options.culture):+a),a===""||isNaN(a)?null:a},_format:function(a){return a===""?"":window.Globalize&&this.options.numberFormat?Globalize.format(a,this.options.numberFormat,this.options.culture):a},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(a,b){var c;a!==""&&(c=this._parse(a),c!==null&&(b||(c=this._adjustValue(c)),a=this._format(c))),this.element.val(a),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:b(function(a){this._stepUp(a)}),_stepUp:function(a){this._spin((a||1)*this.options.step)},stepDown:b(function(a){this._stepDown(a)}),_stepDown:function(a){this._spin((a||1)*-this.options.step)},pageUp:b(function(a){this._stepUp((a||1)*this.options.page)}),pageDown:b(function(a){this._stepDown((a||1)*this.options.page)}),value:function(a){if(!arguments.length)return this._parse(this.element.val());b(this._value).call(this,a)},widget:function(){return this.uiSpinner}})}(jQuery),function(a,b){function e(){return++c}function f(a){return a=a.cloneNode(!1),a.hash.length>1&&a.href.replace(d,"")===location.href.replace(d,"")}var c=0,d=/#.*$/;a.widget("ui.tabs",{version:"1.9.0-beta.1",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var b,c=this,d=this.options,e=d.active;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",d.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(b){a(this).is(".ui-state-disabled")&&b.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){a(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs();if(e===null){location.hash&&this.anchors.each(function(a,b){if(b.hash===location.hash)return e=a,!1}),e===null&&(e=this.tabs.filter(".ui-tabs-active").index());if(e===null||e===-1)e=this.tabs.length?0:!1}e!==!1&&(e=this.tabs.eq(e).index(),e===-1&&(e=d.collapsible?!1:0)),d.active=e,!d.collapsible&&d.active===!1&&this.anchors.length&&(d.active=0),a.isArray(d.disabled)&&(d.disabled=a.unique(d.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"),function(a){return c.tabs.index(a)}))).sort()),this.options.active!==!1&&this.anchors.length?this.active=this._findActive(this.options.active):this.active=a(),this._refresh(),this.active.length&&this.load(d.active)},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):a()}},_tabKeydown:function(b){var c=a(this.document[0].activeElement).closest("li"),d=this.tabs.index(c),e=!0;if(this._handlePageNav(b))return;switch(b.keyCode){case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:d++;break;case a.ui.keyCode.UP:case a.ui.keyCode.LEFT:e=!1,d--;break;case a.ui.keyCode.END:d=this.anchors.length-1;break;case a.ui.keyCode.HOME:d=0;break;case a.ui.keyCode.SPACE:b.preventDefault(),clearTimeout(this.activating),this._activate(d);return;case a.ui.keyCode.ENTER:b.preventDefault(),clearTimeout(this.activating),this._activate(d===this.options.active?!1:d);return;default:return}b.preventDefault(),clearTimeout(this.activating),d=this._focusNextTab(d,e),b.ctrlKey||(c.attr("aria-selected","false"),this.tabs.eq(d).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",d)},this.delay))},_panelKeydown:function(b){if(this._handlePageNav(b))return;b.ctrlKey&&b.keyCode===a.ui.keyCode.UP&&(b.preventDefault(),this.active.focus())},_handlePageNav:function(b){if(b.altKey&&b.keyCode===a.ui.keyCode.PAGE_UP)return this._activate(this._focusNextTab(this.options.active-1,!1)),!0;if(b.altKey&&b.keyCode===a.ui.keyCode.PAGE_DOWN)return this._activate(this._focusNextTab(this.options.active+1,!0)),!0},_findNextTab:function(b,c){function e(){return b>d&&(b=0),b<0&&(b=d),b}var d=this.tabs.length-1;while(a.inArray(e(),this.options.disabled)!==-1)b=c?b+1:b-1;return b},_focusNextTab:function(a,b){return a=this._findNextTab(a,b),this.tabs.eq(a).focus(),a},_setOption:function(a,b){if(a==="active"){this._activate(b);return}if(a==="disabled"){this._setupDisabled(b);return}this._super(a,b),a==="collapsible"&&(this.element.toggleClass("ui-tabs-collapsible",b),!b&&this.options.active===!1&&this._activate(0)),a==="event"&&this._setupEvents(b),a==="heightStyle"&&this._setupHeightStyle(b)},_tabId:function(a){return a.attr("aria-controls")||"ui-tabs-"+e()},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var b,c=this.options,d=this.tablist.children(":has(a[href])");c.disabled=a.map(d.filter(".ui-state-disabled"),function(a){return d.index(a)}),this._processTabs(),c.active===!1||!this.anchors.length?(c.active=!1,this.active=a()):this.active.length&&!a.contains(this.tablist[0],this.active[0])?this.tabs.length===c.disabled.length?(c.active=!1,this.active=a()):this._activate(this._findNextTab(Math.max(0,c.active-1),!1)):c.active=this.tabs.index(this.active),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var b=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return a("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=a(),this.anchors.each(function(c,d){var e,g,h,i=a(d).uniqueId().attr("id"),j=a(d).closest("li"),k=j.attr("aria-controls");f(d)?(e=d.hash,g=b.element.find(b._sanitizeSelector(e))):(h=b._tabId(j),e="#"+h,g=b.element.find(e),g.length||(g=b._createPanel(h),g.insertAfter(b.panels[c-1]||b.tablist)),g.attr("aria-live","polite")),g.length&&(b.panels=b.panels.add(g)),k&&j.data("ui-tabs-aria-controls",k),j.attr({"aria-controls":e.substring(1),"aria-labelledby":i}),g.attr("aria-labelledby",i)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(b){return a("<div>").attr("id",b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(b){a.isArray(b)&&(b.length?b.length===this.anchors.length&&(b=!0):b=!1);for(var c=0,d;d=this.tabs[c];c++)b===!0||a.inArray(c,b)!==-1?a(d).addClass("ui-state-disabled").attr("aria-disabled","true"):a(d).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=b},_setupEvents:function(b){var c={click:function(a){a.preventDefault()}};b&&a.each(b.split(" "),function(a,b){c[b]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,c),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(b){var c,d,e=this.element.parent();b==="fill"?(a.support.minHeight||(d=e.css("overflow"),e.css("overflow","hidden")),c=e.height(),this.element.siblings(":visible").each(function(){var b=a(this),d=b.css("position");if(d==="absolute"||d==="fixed")return;c-=b.outerHeight(!0)}),d&&e.css("overflow",d),this.element.children().not(this.panels).each(function(){c-=a(this).outerHeight(!0)}),this.panels.each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")):b==="auto"&&(c=0,this.panels.each(function(){c=Math.max(c,a(this).height("").height())}).height(c))},_eventHandler:function(b){var c=this.options,d=this.active,e=a(b.currentTarget),f=e.closest("li"),g=f[0]===d[0],h=g&&c.collapsible,i=h?a():this._getPanelForTab(f),j=d.length?this._getPanelForTab(d):a(),k={oldTab:d,oldPanel:j,newTab:h?a():f,newPanel:i};b.preventDefault();if(f.hasClass("ui-state-disabled")||f.hasClass("ui-tabs-loading")||this.running||g&&!c.collapsible||this._trigger("beforeActivate",b,k)===!1)return;c.active=h?!1:this.tabs.index(f),this.active=g?a():f,this.xhr&&this.xhr.abort(),!j.length&&!i.length&&a.error("jQuery UI Tabs: Mismatching fragment identifier."),i.length&&this.load(this.tabs.index(f),b),this._toggle(b,k)},_toggle:function(b,c){function g(){d.running=!1,d._trigger("activate",b,c)}function h(){c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),e.length&&d.options.show?d._show(e,d.options.show,g):(e.show(),g())}var d=this,e=c.newPanel,f=c.oldPanel;this.running=!0,f.length&&this.options.hide?this._hide(f,this.options.hide,function(){c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),h()}):(c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),f.hide(),h()),f.attr({"aria-expanded":"false","aria-hidden":"true"}),c.oldTab.attr("aria-selected","false"),e.length&&f.length?c.oldTab.attr("tabIndex",-1):e.length&&this.tabs.filter(function(){return a(this).attr("tabIndex")===0}).attr("tabIndex",-1),e.attr({"aria-expanded":"true","aria-hidden":"false"}),c.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(b){var c,d=this._findActive(b);if(d[0]===this.active[0])return;d.length||(d=this.active),c=d.find(".ui-tabs-anchor")[0],this._eventHandler({target:c,currentTarget:c,preventDefault:a.noop})},_findActive:function(b){return b===!1?a():this.tabs.eq(b)},_getIndex:function(a){return typeof a=="string"&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(),this.tabs.add(this.panels).each(function(){a.data(this,"ui-tabs-destroy")?a(this).remove():a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var b=a(this),c=b.data("ui-tabs-aria-controls");c?b.attr("aria-controls",c):b.removeAttr("aria-controls")}),this.options.heightStyle!=="content"&&this.panels.css("height","")},enable:function(c){var d=this.options.disabled;if(d===!1)return;c===b?d=!1:(c=this._getIndex(c),a.isArray(d)?d=a.map(d,function(a){return a!==c?a:null}):d=a.map(this.tabs,function(a,b){return b!==c?b:null})),this._setupDisabled(d)},disable:function(c){var d=this.options.disabled;if(d===!0)return;if(c===b)d=!0;else{c=this._getIndex(c);if(a.inArray(c,d)!==-1)return;a.isArray(d)?d=a.merge([c],d).sort():d=[c]}this._setupDisabled(d)},load:function(b,c){b=this._getIndex(b);var d=this,e=this.tabs.eq(b),g=e.find(".ui-tabs-anchor"),h=this._getPanelForTab(e),i={tab:e,panel:h};if(f(g[0]))return;this.xhr=a.ajax({url:g.attr("href"),beforeSend:function(b,e){return d._trigger("beforeLoad",c,a.extend({jqXHR:b,ajaxSettings:e},i))}}),this.xhr&&this.xhr.statusText!=="canceled"&&(e.addClass("ui-tabs-loading"),h.attr("aria-busy","true"),this.xhr.success(function(a){setTimeout(function(){h.html(a),d._trigger("load",c,i)},1)}).complete(function(a,b){setTimeout(function(){b==="abort"&&d.panels.stop(!1,!0),e.removeClass("ui-tabs-loading"),h.removeAttr("aria-busy"),a===d.xhr&&delete d.xhr},1)}))},_getPanelForTab:function(b){var c=a(b).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+c))}}),a.uiBackCompat!==!1&&(a.ui.tabs.prototype._ui=function(a,b){return{tab:a,panel:b,index:this.anchors.index(a)}},a.widget("ui.tabs",a.ui.tabs,{url:function(a,b){this.anchors.eq(a).attr("href",b)}}),a.widget("ui.tabs",a.ui.tabs,{options:{ajaxOptions:null,cache:!1},_create:function(){this._super();var b=this;this._on({tabsbeforeload:function(c,d){if(a.data(d.tab[0],"cache.tabs")){c.preventDefault();return}a.extend(d.ajaxSettings,b.options.ajaxOptions,{error:function(a,c,e){try{b.options.ajaxOptions.error(a,c,d.tab.closest("li").index(),d.tab[0])}catch(e){}}}),d.jqXHR.success(function(){b.options.cache&&a.data(d.tab[0],"cache.tabs",!0)})}})},_setOption:function(a,b){a==="cache"&&b===!1&&this.anchors.removeData("cache.tabs"),this._super(a,b)},_destroy:function(){this.anchors.removeData("cache.tabs"),this._super()},url:function(a,b){this.anchors.eq(a).removeData("cache.tabs"),this._superApply(arguments)}}),a.widget("ui.tabs",a.ui.tabs,{abort:function(){this.xhr&&this.xhr.abort()}}),a.widget("ui.tabs",a.ui.tabs,{options:{spinner:"<em>Loading&#8230;</em>"},_create:function(){this._super(),this._on({tabsbeforeload:function(a,b){if(!this.options.spinner)return;var c=b.tab.find("span"),d=c.html();c.html(this.options.spinner),b.jqXHR.complete(function(){c.html(d)})}})}}),a.widget("ui.tabs",a.ui.tabs,{options:{enable:null,disable:null},enable:function(b){var c=this.options,d;if(b&&c.disabled===!0||a.isArray(c.disabled)&&a.inArray(b,c.disabled)!==-1)d=!0;this._superApply(arguments),d&&this._trigger("enable",null,this._ui(this.anchors[b],this.panels[b]))},disable:function(b){var c=this.options,d;if(b&&c.disabled===!1||a.isArray(c.disabled)&&a.inArray(b,c.disabled)===-1)d=!0;this._superApply(arguments),d&&this._trigger("disable",null,this._ui(this.anchors[b],this.panels[b]))}}),a.widget("ui.tabs",a.ui.tabs,{options:{add:null,remove:null,tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},add:function(c,d,e){e===b&&(e=this.anchors.length);var f,g,h=this.options,i=a(h.tabTemplate.replace(/#\{href\}/g,c).replace(/#\{label\}/g,d)),j=c.indexOf("#")?this._tabId(i):c.replace("#","");return i.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy",!0),i.attr("aria-controls",j),f=e>=this.tabs.length,g=this.element.find("#"+j),g.length||(g=this._createPanel(j),f?e>0?g.insertAfter(this.panels.eq(-1)):g.appendTo(this.element):g.insertBefore(this.panels[e])),g.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(),f?i.appendTo(this.tablist):i.insertBefore(this.tabs[e]),h.disabled=a.map(h.disabled,function(a){return a>=e?++a:a}),this.refresh(),this.tabs.length===1&&h.active===!1&&this.option("active",0),this._trigger("add",null,this._ui(this.anchors[e],this.panels[e])),this},remove:function(b){b=this._getIndex(b);var c=this.options,d=this.tabs.eq(b).remove(),e=this._getPanelForTab(d).remove();return d.hasClass("ui-tabs-active")&&this.anchors.length>2&&this._activate(b+(b+1<this.anchors.length?1:-1)),c.disabled=a.map(a.grep(c.disabled,function(a){return a!==b}),function(a){return a>=b?--a:a}),this.refresh(),this._trigger("remove",null,this._ui(d.find("a")[0],e[0])),this}}),a.widget("ui.tabs",a.ui.tabs,{length:function(){return this.anchors.length}}),a.widget("ui.tabs",a.ui.tabs,{options:{idPrefix:"ui-tabs-"},_tabId:function(b){var c=b.is("li")?b.find("a[href]"):b;return c=c[0],a(c).closest("li").attr("aria-controls")||c.title&&c.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF\-]/g,"")||this.options.idPrefix+e()}}),a.widget("ui.tabs",a.ui.tabs,{options:{panelTemplate:"<div></div>"},_createPanel:function(b){return a(this.options.panelTemplate).attr("id",b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)}}),a.widget("ui.tabs",a.ui.tabs,{_create:function(){var a=this.options;a.active===null&&a.selected!==b&&(a.active=a.selected===-1?!1:a.selected),this._super(),a.selected=a.active,a.selected===!1&&(a.selected=-1)},_setOption:function(a,b){if(a!=="selected")return this._super(a,b);var c=this.options;this._super("active",b===-1?!1:b),c.selected=c.active,c.selected===!1&&(c.selected=-1)},_eventHandler:function(a){this._superApply(arguments),this.options.selected=this.options.active,this.options.selected===!1&&(this.options.selected=-1)}}),a.widget("ui.tabs",a.ui.tabs,{options:{show:null,select:null},_create:function(){this._super(),this.options.active!==!1&&this._trigger("show",null,this._ui(this.active.find(".ui-tabs-anchor")[0],this._getPanelForTab(this.active)[0]))},_trigger:function(a,b,c){var d=this._superApply(arguments);return d?(a==="beforeActivate"&&c.newTab.length?d=this._super("select",b,{tab:c.newTab.find(".ui-tabs-anchor")[0],panel:c.newPanel[0],index:c.newTab.closest("li").index()}):a==="activate"&&c.newTab.length&&(d=this._super("show",b,{tab:c.newTab.find(".ui-tabs-anchor")[0],panel:c.newPanel[0],index:c.newTab.closest("li").index()})),d):!1}}),a.widget("ui.tabs",a.ui.tabs,{select:function(a){a=this._getIndex(a);if(a===-1)if(this.options.collapsible&&this.options.selected!==-1)a=this.options.selected;else return;this.anchors.eq(a).trigger(this.options.event+this.eventNamespace)}}),function(){var b=0;a.widget("ui.tabs",a.ui.tabs,{options:{cookie:null},_create:function(){var a=this.options,b;a.active==null&&a.cookie&&(b=parseInt(this._cookie(),10),b===-1&&(b=!1),a.active=b),this._super()},_cookie:function(c){var d=[this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+ ++b)];return arguments.length&&(d.push(c===!1?-1:c),d.push(this.options.cookie)),a.cookie.apply(null,d)},_refresh:function(){this._super(),this.options.cookie&&this._cookie(this.options.active,this.options.cookie)},_eventHandler:function(a){this._superApply(arguments),this.options.cookie&&this._cookie(this.options.active,this.options.cookie)},_destroy:function(){this._super(),this.options.cookie&&this._cookie(null,this.options.cookie)}})}(),a.widget("ui.tabs",a.ui.tabs,{_trigger:function(b,c,d){var e=a.extend({},d);return b==="load"&&(e.panel=e.panel[0],e.tab=e.tab.find(".ui-tabs-anchor")[0]),this._super(b,c,e)}}),a.widget("ui.tabs",a.ui.tabs,{options:{fx:null},_getFx:function(){var b,c,d=this.options.fx;return d&&(a.isArray(d)?(b=d[0],c=d[1]):b=c=d),d?{show:c,hide:b}:null},_toggle:function(a,b){function g(){c.running=!1,c._trigger("activate",a,b)}function h(){b.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),d.length&&f.show?d.animate(f.show,f.show.duration,function(){g()}):(d.show(),g())}var c=this,d=b.newPanel,e=b.oldPanel,f=this._getFx();if(!f)return this._super(a,b);c.running=!0,e.length&&f.hide?e.animate(f.hide,f.hide.duration,function(){b.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),h()}):(b.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),e.hide(),h())}}))}(jQuery),function(a){function c(b,c){var d=(b.attr("aria-describedby")||"").split(/\s+/);d.push(c),b.data("ui-tooltip-id",c).attr("aria-describedby",a.trim(d.join(" ")))}function d(b){var c=b.data("ui-tooltip-id"),d=(b.attr("aria-describedby")||"").split(/\s+/),e=a.inArray(c,d);e!==-1&&d.splice(e,1),b.removeData("ui-tooltip-id"),d=a.trim(d.join(" ")),d?b.attr("aria-describedby",d):b.removeAttr("aria-describedby")}var b=0;a.widget("ui.tooltip",{version:"1.9.0-beta.1",options:{content:function(){return a(this).attr("title")},hide:!0,items:"[title]",position:{my:"left+15 center",at:"right center",collision:"flipfit flipfit"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={}},_setOption:function(a,b){if(a==="disabled"){this[b?"_disable":"_enable"](),this.options[a]=b;return}this._super(a,b)},_disable:function(){var b=this;a.each(this.tooltips,function(c,d){var e=a.Event("blur");e.target=e.currentTarget=d[0],b.close(e,!0)}),this.element.find(this.options.items).andSelf().each(function(){var b=a(this);b.is("[title]")&&b.data("ui-tooltip-title",b.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).andSelf().each(function(){var b=a(this);b.data("ui-tooltip-title")&&b.attr("title",b.data("ui-tooltip-title"))})},open:function(b){var c,d=this,e=a(b?b.target:this.element).closest(this.options.items);if(!e.length)return;if(this.options.track&&e.data("ui-tooltip-id")){this._find(e).position(a.extend({of:e},this.options.position));return}e.attr("title")&&e.data("ui-tooltip-title",e.attr("title")),e.data("tooltip-open",!0),c=this.options.content.call(e[0],function(a){if(!e.data("tooltip-open"))return;setTimeout(function(){d._open(b,e,a)},1)}),c&&d._open(b,e,c)},_open:function(b,d,e){function h(a){g.of=a,f.position(g)}var f,g;if(!e)return;f=this._find(d);if(f.length){f.find(".ui-tooltip-content").html(e);return}d.is("[title]")&&(b&&b.type==="mouseover"?d.attr("title",""):d.removeAttr("title")),f=this._tooltip(d),c(d,f.attr("id")),f.find(".ui-tooltip-content").html(e),this.options.track&&/^mouse/.test(b.originalEvent.type)?(g=a.extend({},this.options.position),this._on(this.document,{mousemove:h}),h(b)):f.position(a.extend({of:d},this.options.position)),f.hide(),this._show(f,this.options.show),this._trigger("open",b,{tooltip:f}),this._on(d,{mouseleave:"close",focusout:"close",keyup:function(b){if(b.keyCode===a.ui.keyCode.ESCAPE){var c=a.Event(b);c.currentTarget=d[0],this.close(c,!0)}}})},close:function(b,c){var e=this,f=a(b?b.currentTarget:this.element),g=this._find(f);if(this.closing)return;if(!c&&b&&b.type!=="focusout"&&this.document[0].activeElement===f[0])return;f.data("ui-tooltip-title")&&f.attr("title",f.data("ui-tooltip-title")),d(f),g.stop(!0),this._hide(g,this.options.hide,function(){a(this).remove(),delete e.tooltips[this.id]}),f.removeData("tooltip-open"),this._off(f,"mouseleave focusout keyup"),this._off(this.document,"mousemove"),this.closing=!0,this._trigger("close",b,{tooltip:g}),this.closing=!1},_tooltip:function(c){var d="ui-tooltip-"+b++,e=a("<div>").attr({id:d,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return a("<div>").addClass("ui-tooltip-content").appendTo(e),e.appendTo(this.document[0].body),a.fn.bgiframe&&e.bgiframe(),this.tooltips[d]=c,e},_find:function(b){var c=b.data("ui-tooltip-id");return c?a("#"+c):a()},_destroy:function(){a.each(this.tooltips,function(b){a("#"+b).remove()})}})}(jQuery);
/*
* jQuery timepicker addon
* By: Trent Richardson [http://trentrichardson.com]
* Version 1.0.1
* Last Modified: 07/01/2012
*
* Copyright 2012 Trent Richardson
* You may use this project under MIT or GPL licenses.
* http://trentrichardson.com/Impromptu/GPL-LICENSE.txt
* http://trentrichardson.com/Impromptu/MIT-LICENSE.txt
*
* HERES THE CSS:
* .ui-timepicker-div .ui-widget-header { margin-bottom: 8px; }
* .ui-timepicker-div dl { text-align: left; }
* .ui-timepicker-div dl dt { height: 25px; margin-bottom: -25px; }
* .ui-timepicker-div dl dd { margin: 0 10px 10px 65px; }
* .ui-timepicker-div td { font-size: 90%; }
* .ui-tpicker-grid-label { background: none; border: none; margin: 0; padding: 0; }
*/

/*jslint evil: true, maxlen: 300, white: false, undef: false, nomen: false, onevar: false */


(function($) {

// Prevent "Uncaught RangeError: Maximum call stack size exceeded"
$.ui.timepicker = $.ui.timepicker || {};
if ($.ui.timepicker.version) {
	return;
}

$.extend($.ui, { timepicker: { version: "1.0.1" } });

/* Time picker manager.
   Use the singleton instance of this class, $.timepicker, to interact with the time picker.
   Settings for (groups of) time pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */

function Timepicker() {
	this.regional = []; // Available regional settings, indexed by language code
	this.regional[''] = { // Default regional settings
		currentText: 'Now',
		closeText: 'Done',
		ampm: false,
		amNames: ['AM', 'A'],
		pmNames: ['PM', 'P'],
		timeFormat: 'hh:mm tt',
		timeSuffix: '',
		timeOnlyTitle: 'Choose Time',
		timeText: 'Time',
		hourText: 'Hour',
		minuteText: 'Minute',
		secondText: 'Second',
		millisecText: 'Millisecond',
		timezoneText: 'Time Zone'
	};
	this._defaults = { // Global defaults for all the datetime picker instances
		showButtonPanel: true,
		timeOnly: false,
		showHour: true,
		showMinute: true,
		showSecond: false,
		showMillisec: false,
		showTimezone: false,
		showTime: true,
		stepHour: 1,
		stepMinute: 1,
		stepSecond: 1,
		stepMillisec: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisec: 0,
		timezone: null,
		useLocalTimezone: false,
		defaultTimezone: "+0000",
		hourMin: 0,
		minuteMin: 0,
		secondMin: 0,
		millisecMin: 0,
		hourMax: 23,
		minuteMax: 59,
		secondMax: 59,
		millisecMax: 999,
		minDateTime: null,
		maxDateTime: null,
		onSelect: null,
		hourGrid: 0,
		minuteGrid: 0,
		secondGrid: 0,
		millisecGrid: 0,
		alwaysSetTime: true,
		separator: ' ',
		altFieldTimeOnly: true,
		showTimepicker: true,
		timezoneIso8601: false,
		timezoneList: null,
		addSliderAccess: false,
		sliderAccessArgs: null
	};
	$.extend(this._defaults, this.regional['']);
}

$.extend(Timepicker.prototype, {
	$input: null,
	$altInput: null,
	$timeObj: null,
	inst: null,
	hour_slider: null,
	minute_slider: null,
	second_slider: null,
	millisec_slider: null,
	timezone_select: null,
	hour: 0,
	minute: 0,
	second: 0,
	millisec: 0,
	timezone: null,
	defaultTimezone: "+0000",
	hourMinOriginal: null,
	minuteMinOriginal: null,
	secondMinOriginal: null,
	millisecMinOriginal: null,
	hourMaxOriginal: null,
	minuteMaxOriginal: null,
	secondMaxOriginal: null,
	millisecMaxOriginal: null,
	ampm: '',
	formattedDate: '',
	formattedTime: '',
	formattedDateTime: '',
	timezoneList: null,

	/* Override the default settings for all instances of the time picker.
	   @param  settings  object - the new settings to use as defaults (anonymous object)
	   @return the manager object */
	setDefaults: function(settings) {
		extendRemove(this._defaults, settings || {});
		return this;
	},

	//########################################################################
	// Create a new Timepicker instance
	//########################################################################
	_newInst: function($input, o) {
		var tp_inst = new Timepicker(),
			inlineSettings = {};

		for (var attrName in this._defaults) {
			var attrValue = $input.attr('time:' + attrName);
			if (attrValue) {
				try {
					inlineSettings[attrName] = eval(attrValue);
				} catch (err) {
					inlineSettings[attrName] = attrValue;
				}
			}
		}
		tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, o, {
			beforeShow: function(input, dp_inst) {
				if ($.isFunction(o.beforeShow)) {
					return o.beforeShow(input, dp_inst, tp_inst);
                }
			},
			onChangeMonthYear: function(year, month, dp_inst) {
				// Update the time as well : this prevents the time from disappearing from the $input field.
				tp_inst._updateDateTime(dp_inst);
				if ($.isFunction(o.onChangeMonthYear)) {
					o.onChangeMonthYear.call($input[0], year, month, dp_inst, tp_inst);
                }
			},
			onClose: function(dateText, dp_inst) {
				if (tp_inst.timeDefined === true && $input.val() !== '') {
					tp_inst._updateDateTime(dp_inst);
                }
				if ($.isFunction(o.onClose)) {
					o.onClose.call($input[0], dateText, dp_inst, tp_inst);
                }
			},
			timepicker: tp_inst // add timepicker as a property of datepicker: $.datepicker._get(dp_inst, 'timepicker');
		});
		tp_inst.amNames = $.map(tp_inst._defaults.amNames, function(val) { return val.toUpperCase(); });
		tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function(val) { return val.toUpperCase(); });

		if (tp_inst._defaults.timezoneList === null) {
			var timezoneList = [];
			for (var i = -11; i <= 12; i++) {
				timezoneList.push((i >= 0 ? '+' : '-') + ('0' + Math.abs(i).toString()).slice(-2) + '00');
            }
			if (tp_inst._defaults.timezoneIso8601) {
				timezoneList = $.map(timezoneList, function(val) {
					return val == '+0000' ? 'Z' : (val.substring(0, 3) + ':' + val.substring(3));
				});
            }
			tp_inst._defaults.timezoneList = timezoneList;
		}

		tp_inst.timezone = tp_inst._defaults.timezone;
		tp_inst.hour = tp_inst._defaults.hour;
		tp_inst.minute = tp_inst._defaults.minute;
		tp_inst.second = tp_inst._defaults.second;
		tp_inst.millisec = tp_inst._defaults.millisec;
		tp_inst.ampm = '';
		tp_inst.$input = $input;

		if (o.altField) {
			tp_inst.$altInput = $(o.altField)
				.css({ cursor: 'pointer' })
				.focus(function(){ $input.trigger("focus"); });
        }

		if(tp_inst._defaults.minDate===0 || tp_inst._defaults.minDateTime===0)
		{
			tp_inst._defaults.minDate=new Date();
		}
		if(tp_inst._defaults.maxDate===0 || tp_inst._defaults.maxDateTime===0)
		{
			tp_inst._defaults.maxDate=new Date();
		}

		// datepicker needs minDate/maxDate, timepicker needs minDateTime/maxDateTime..
		if(tp_inst._defaults.minDate !== undefined && tp_inst._defaults.minDate instanceof Date) {
			tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime());
        }
		if(tp_inst._defaults.minDateTime !== undefined && tp_inst._defaults.minDateTime instanceof Date) {
			tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime());
        }
		if(tp_inst._defaults.maxDate !== undefined && tp_inst._defaults.maxDate instanceof Date) {
			tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime());
        }
		if(tp_inst._defaults.maxDateTime !== undefined && tp_inst._defaults.maxDateTime instanceof Date) {
			tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime());
        }
		return tp_inst;
	},

	//########################################################################
	// add our sliders to the calendar
	//########################################################################
	_addTimePicker: function(dp_inst) {
		var currDT = (this.$altInput && this._defaults.altFieldTimeOnly) ?
				this.$input.val() + ' ' + this.$altInput.val() :
				this.$input.val();

		this.timeDefined = this._parseTime(currDT);
		this._limitMinMaxDateTime(dp_inst, false);
		this._injectTimePicker();
	},

	//########################################################################
	// parse the time string from input value or _setTime
	//########################################################################
	_parseTime: function(timeString, withDate) {
		if (!this.inst) {
			this.inst = $.datepicker._getInst(this.$input[0]);
		}
		
		if (withDate || !this._defaults.timeOnly) 
		{
			var dp_dateFormat = $.datepicker._get(this.inst, 'dateFormat');
			try {
				var parseRes = parseDateTimeInternal(dp_dateFormat, this._defaults.timeFormat, timeString, $.datepicker._getFormatConfig(this.inst), this._defaults);
				if (!parseRes.timeObj) { return false; }
				$.extend(this, parseRes.timeObj);
			} catch (err)
			{
				return false;
			}
			return true;
		}
		else
		{
			var timeObj = $.datepicker.parseTime(this._defaults.timeFormat, timeString, this._defaults);
			if(!timeObj) { return false; }
			$.extend(this, timeObj);
			return true;
		}
	},
	
	//########################################################################
	// generate and inject html for timepicker into ui datepicker
	//########################################################################
	_injectTimePicker: function() {
		var $dp = this.inst.dpDiv,
			o = this._defaults,
			tp_inst = this,
			// Added by Peter Medeiros:
			// - Figure out what the hour/minute/second max should be based on the step values.
			// - Example: if stepMinute is 15, then minMax is 45.
			hourMax = parseInt((o.hourMax - ((o.hourMax - o.hourMin) % o.stepHour)) ,10),
			minMax  = parseInt((o.minuteMax - ((o.minuteMax - o.minuteMin) % o.stepMinute)) ,10),
			secMax  = parseInt((o.secondMax - ((o.secondMax - o.secondMin) % o.stepSecond)) ,10),
			millisecMax  = parseInt((o.millisecMax - ((o.millisecMax - o.millisecMin) % o.stepMillisec)) ,10),
			dp_id = this.inst.id.toString().replace(/([^A-Za-z0-9_])/g, '');

		// Prevent displaying twice
		//if ($dp.find("div#ui-timepicker-div-"+ dp_id).length === 0) {
		if ($dp.find("div#ui-timepicker-div-"+ dp_id).length === 0 && o.showTimepicker) {
			var noDisplay = ' style="display:none;"',
				html =	'<div class="ui-timepicker-div" id="ui-timepicker-div-' + dp_id + '"><dl>' +
						'<dt class="ui_tpicker_time_label" id="ui_tpicker_time_label_' + dp_id + '"' +
						((o.showTime) ? '' : noDisplay) + '>' + o.timeText + '</dt>' +
						'<dd class="ui_tpicker_time" id="ui_tpicker_time_' + dp_id + '"' +
						((o.showTime) ? '' : noDisplay) + '></dd>' +
						'<dt class="ui_tpicker_hour_label" id="ui_tpicker_hour_label_' + dp_id + '"' +
						((o.showHour) ? '' : noDisplay) + '>' + o.hourText + '</dt>',
				hourGridSize = 0,
				minuteGridSize = 0,
				secondGridSize = 0,
				millisecGridSize = 0,
				size = null;

            // Hours
			html += '<dd class="ui_tpicker_hour"><div id="ui_tpicker_hour_' + dp_id + '"' +
						((o.showHour) ? '' : noDisplay) + '></div>';
			if (o.showHour && o.hourGrid > 0) {
				html += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';

				for (var h = o.hourMin; h <= hourMax; h += parseInt(o.hourGrid,10)) {
					hourGridSize++;
					var tmph = (o.ampm && h > 12) ? h-12 : h;
					if (tmph < 10) { tmph = '0' + tmph; }
					if (o.ampm) {
						if (h === 0) {
                            tmph = 12 +'a';
                        } else {
                            if (h < 12) { tmph += 'a'; }
						    else { tmph += 'p'; }
                        }
					}
					html += '<td>' + tmph + '</td>';
				}

				html += '</tr></table></div>';
			}
			html += '</dd>';

			// Minutes
			html += '<dt class="ui_tpicker_minute_label" id="ui_tpicker_minute_label_' + dp_id + '"' +
					((o.showMinute) ? '' : noDisplay) + '>' + o.minuteText + '</dt>'+
					'<dd class="ui_tpicker_minute"><div id="ui_tpicker_minute_' + dp_id + '"' +
							((o.showMinute) ? '' : noDisplay) + '></div>';

			if (o.showMinute && o.minuteGrid > 0) {
				html += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';

				for (var m = o.minuteMin; m <= minMax; m += parseInt(o.minuteGrid,10)) {
					minuteGridSize++;
					html += '<td>' + ((m < 10) ? '0' : '') + m + '</td>';
				}

				html += '</tr></table></div>';
			}
			html += '</dd>';

			// Seconds
			html += '<dt class="ui_tpicker_second_label" id="ui_tpicker_second_label_' + dp_id + '"' +
					((o.showSecond) ? '' : noDisplay) + '>' + o.secondText + '</dt>'+
					'<dd class="ui_tpicker_second"><div id="ui_tpicker_second_' + dp_id + '"'+
							((o.showSecond) ? '' : noDisplay) + '></div>';

			if (o.showSecond && o.secondGrid > 0) {
				html += '<div style="padding-left: 1px"><table><tr>';

				for (var s = o.secondMin; s <= secMax; s += parseInt(o.secondGrid,10)) {
					secondGridSize++;
					html += '<td>' + ((s < 10) ? '0' : '') + s + '</td>';
				}

				html += '</tr></table></div>';
			}
			html += '</dd>';

			// Milliseconds
			html += '<dt class="ui_tpicker_millisec_label" id="ui_tpicker_millisec_label_' + dp_id + '"' +
					((o.showMillisec) ? '' : noDisplay) + '>' + o.millisecText + '</dt>'+
					'<dd class="ui_tpicker_millisec"><div id="ui_tpicker_millisec_' + dp_id + '"'+
							((o.showMillisec) ? '' : noDisplay) + '></div>';

			if (o.showMillisec && o.millisecGrid > 0) {
				html += '<div style="padding-left: 1px"><table><tr>';

				for (var l = o.millisecMin; l <= millisecMax; l += parseInt(o.millisecGrid,10)) {
					millisecGridSize++;
					html += '<td>' + ((l < 10) ? '0' : '') + l + '</td>';
				}

				html += '</tr></table></div>';
			}
			html += '</dd>';

			// Timezone
			html += '<dt class="ui_tpicker_timezone_label" id="ui_tpicker_timezone_label_' + dp_id + '"' +
					((o.showTimezone) ? '' : noDisplay) + '>' + o.timezoneText + '</dt>';
			html += '<dd class="ui_tpicker_timezone" id="ui_tpicker_timezone_' + dp_id + '"'	+
							((o.showTimezone) ? '' : noDisplay) + '></dd>';

			html += '</dl></div>';
			var $tp = $(html);

				// if we only want time picker...
			if (o.timeOnly === true) {
				$tp.prepend(
					'<div class="ui-widget-header ui-helper-clearfix ui-corner-all">' +
						'<div class="ui-datepicker-title">' + o.timeOnlyTitle + '</div>' +
					'</div>');
				$dp.find('.ui-datepicker-header, .ui-datepicker-calendar').hide();
			}

			this.hour_slider = $tp.find('#ui_tpicker_hour_'+ dp_id).slider({
				orientation: "horizontal",
				value: this.hour,
				min: o.hourMin,
				max: hourMax,
				step: o.stepHour,
				slide: function(event, ui) {
					tp_inst.hour_slider.slider( "option", "value", ui.value);
					tp_inst._onTimeChange();
				}
			});


			// Updated by Peter Medeiros:
			// - Pass in Event and UI instance into slide function
			this.minute_slider = $tp.find('#ui_tpicker_minute_'+ dp_id).slider({
				orientation: "horizontal",
				value: this.minute,
				min: o.minuteMin,
				max: minMax,
				step: o.stepMinute,
				slide: function(event, ui) {
					tp_inst.minute_slider.slider( "option", "value", ui.value);
					tp_inst._onTimeChange();
				}
			});

			this.second_slider = $tp.find('#ui_tpicker_second_'+ dp_id).slider({
				orientation: "horizontal",
				value: this.second,
				min: o.secondMin,
				max: secMax,
				step: o.stepSecond,
				slide: function(event, ui) {
					tp_inst.second_slider.slider( "option", "value", ui.value);
					tp_inst._onTimeChange();
				}
			});

			this.millisec_slider = $tp.find('#ui_tpicker_millisec_'+ dp_id).slider({
				orientation: "horizontal",
				value: this.millisec,
				min: o.millisecMin,
				max: millisecMax,
				step: o.stepMillisec,
				slide: function(event, ui) {
					tp_inst.millisec_slider.slider( "option", "value", ui.value);
					tp_inst._onTimeChange();
				}
			});

			this.timezone_select = $tp.find('#ui_tpicker_timezone_'+ dp_id).append('<select></select>').find("select");
			$.fn.append.apply(this.timezone_select,
				$.map(o.timezoneList, function(val, idx) {
					return $("<option />")
						.val(typeof val == "object" ? val.value : val)
						.text(typeof val == "object" ? val.label : val);
				})
			);
			if (typeof(this.timezone) != "undefined" && this.timezone !== null && this.timezone !== "") {
				var local_date = new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12);
				var local_timezone = timeZoneString(local_date);
				if (local_timezone == this.timezone) {
					selectLocalTimeZone(tp_inst);
				} else {
					this.timezone_select.val(this.timezone);
				}
			} else {
				if (typeof(this.hour) != "undefined" && this.hour !== null && this.hour !== "") {
					this.timezone_select.val(o.defaultTimezone);
				} else {
					selectLocalTimeZone(tp_inst);
				}
			}
			this.timezone_select.change(function() {
				tp_inst._defaults.useLocalTimezone = false;
				tp_inst._onTimeChange();
			});

			// Add grid functionality
			if (o.showHour && o.hourGrid > 0) {
				size = 100 * hourGridSize * o.hourGrid / (hourMax - o.hourMin);

				$tp.find(".ui_tpicker_hour table").css({
					width: size + "%",
					marginLeft: (size / (-2 * hourGridSize)) + "%",
					borderCollapse: 'collapse'
				}).find("td").each( function(index) {
					$(this).click(function() {
						var h = $(this).html();
						if(o.ampm)	{
							var ap = h.substring(2).toLowerCase(),
								aph = parseInt(h.substring(0,2), 10);
							if (ap == 'a') {
								if (aph == 12) { h = 0; }
								else { h = aph; }
							} else if (aph == 12) { h = 12; }
							else { h = aph + 12; }
						}
						tp_inst.hour_slider.slider("option", "value", h);
						tp_inst._onTimeChange();
						tp_inst._onSelectHandler();
					}).css({
						cursor: 'pointer',
						width: (100 / hourGridSize) + '%',
						textAlign: 'center',
						overflow: 'hidden'
					});
				});
			}

			if (o.showMinute && o.minuteGrid > 0) {
				size = 100 * minuteGridSize * o.minuteGrid / (minMax - o.minuteMin);
				$tp.find(".ui_tpicker_minute table").css({
					width: size + "%",
					marginLeft: (size / (-2 * minuteGridSize)) + "%",
					borderCollapse: 'collapse'
				}).find("td").each(function(index) {
					$(this).click(function() {
						tp_inst.minute_slider.slider("option", "value", $(this).html());
						tp_inst._onTimeChange();
						tp_inst._onSelectHandler();
					}).css({
						cursor: 'pointer',
						width: (100 / minuteGridSize) + '%',
						textAlign: 'center',
						overflow: 'hidden'
					});
				});
			}

			if (o.showSecond && o.secondGrid > 0) {
				$tp.find(".ui_tpicker_second table").css({
					width: size + "%",
					marginLeft: (size / (-2 * secondGridSize)) + "%",
					borderCollapse: 'collapse'
				}).find("td").each(function(index) {
					$(this).click(function() {
						tp_inst.second_slider.slider("option", "value", $(this).html());
						tp_inst._onTimeChange();
						tp_inst._onSelectHandler();
					}).css({
						cursor: 'pointer',
						width: (100 / secondGridSize) + '%',
						textAlign: 'center',
						overflow: 'hidden'
					});
				});
			}

			if (o.showMillisec && o.millisecGrid > 0) {
				$tp.find(".ui_tpicker_millisec table").css({
					width: size + "%",
					marginLeft: (size / (-2 * millisecGridSize)) + "%",
					borderCollapse: 'collapse'
				}).find("td").each(function(index) {
					$(this).click(function() {
						tp_inst.millisec_slider.slider("option", "value", $(this).html());
						tp_inst._onTimeChange();
						tp_inst._onSelectHandler();
					}).css({
						cursor: 'pointer',
						width: (100 / millisecGridSize) + '%',
						textAlign: 'center',
						overflow: 'hidden'
					});
				});
			}

			var $buttonPanel = $dp.find('.ui-datepicker-buttonpane');
			if ($buttonPanel.length) { $buttonPanel.before($tp); }
			else { $dp.append($tp); }

			this.$timeObj = $tp.find('#ui_tpicker_time_'+ dp_id);

			if (this.inst !== null) {
				var timeDefined = this.timeDefined;
				this._onTimeChange();
				this.timeDefined = timeDefined;
			}

			//Emulate datepicker onSelect behavior. Call on slidestop.
			var onSelectDelegate = function() {
				tp_inst._onSelectHandler();
			};
			this.hour_slider.bind('slidestop',onSelectDelegate);
			this.minute_slider.bind('slidestop',onSelectDelegate);
			this.second_slider.bind('slidestop',onSelectDelegate);
			this.millisec_slider.bind('slidestop',onSelectDelegate);

			// slideAccess integration: http://trentrichardson.com/2011/11/11/jquery-ui-sliders-and-touch-accessibility/
			if (this._defaults.addSliderAccess){
				var sliderAccessArgs = this._defaults.sliderAccessArgs;
				setTimeout(function(){ // fix for inline mode
					if($tp.find('.ui-slider-access').length === 0){
						$tp.find('.ui-slider:visible').sliderAccess(sliderAccessArgs);

						// fix any grids since sliders are shorter
						var sliderAccessWidth = $tp.find('.ui-slider-access:eq(0)').outerWidth(true);
						if(sliderAccessWidth){
							$tp.find('table:visible').each(function(){
								var $g = $(this),
									oldWidth = $g.outerWidth(),
									oldMarginLeft = $g.css('marginLeft').toString().replace('%',''),
									newWidth = oldWidth - sliderAccessWidth,
									newMarginLeft = ((oldMarginLeft * newWidth)/oldWidth) + '%';

								$g.css({ width: newWidth, marginLeft: newMarginLeft });
							});
						}
					}
				},0);
			}
			// end slideAccess integration

		}
	},

	//########################################################################
	// This function tries to limit the ability to go outside the
	// min/max date range
	//########################################################################
	_limitMinMaxDateTime: function(dp_inst, adjustSliders){
		var o = this._defaults,
			dp_date = new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay);

		if(!this._defaults.showTimepicker) { return; } // No time so nothing to check here

		if($.datepicker._get(dp_inst, 'minDateTime') !== null && $.datepicker._get(dp_inst, 'minDateTime') !== undefined && dp_date){
			var minDateTime = $.datepicker._get(dp_inst, 'minDateTime'),
				minDateTimeDate = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), 0, 0, 0, 0);

			if(this.hourMinOriginal === null || this.minuteMinOriginal === null || this.secondMinOriginal === null || this.millisecMinOriginal === null){
				this.hourMinOriginal = o.hourMin;
				this.minuteMinOriginal = o.minuteMin;
				this.secondMinOriginal = o.secondMin;
				this.millisecMinOriginal = o.millisecMin;
			}

			if(dp_inst.settings.timeOnly || minDateTimeDate.getTime() == dp_date.getTime()) {
				this._defaults.hourMin = minDateTime.getHours();
				if (this.hour <= this._defaults.hourMin) {
					this.hour = this._defaults.hourMin;
					this._defaults.minuteMin = minDateTime.getMinutes();
					if (this.minute <= this._defaults.minuteMin) {
						this.minute = this._defaults.minuteMin;
						this._defaults.secondMin = minDateTime.getSeconds();
					} else if (this.second <= this._defaults.secondMin){
						this.second = this._defaults.secondMin;
						this._defaults.millisecMin = minDateTime.getMilliseconds();
					} else {
						if(this.millisec < this._defaults.millisecMin) {
							this.millisec = this._defaults.millisecMin;
                        }
						this._defaults.millisecMin = this.millisecMinOriginal;
					}
				} else {
					this._defaults.minuteMin = this.minuteMinOriginal;
					this._defaults.secondMin = this.secondMinOriginal;
					this._defaults.millisecMin = this.millisecMinOriginal;
				}
			}else{
				this._defaults.hourMin = this.hourMinOriginal;
				this._defaults.minuteMin = this.minuteMinOriginal;
				this._defaults.secondMin = this.secondMinOriginal;
				this._defaults.millisecMin = this.millisecMinOriginal;
			}
		}

		if($.datepicker._get(dp_inst, 'maxDateTime') !== null && $.datepicker._get(dp_inst, 'maxDateTime') !== undefined && dp_date){
			var maxDateTime = $.datepicker._get(dp_inst, 'maxDateTime'),
				maxDateTimeDate = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), 0, 0, 0, 0);

			if(this.hourMaxOriginal === null || this.minuteMaxOriginal === null || this.secondMaxOriginal === null){
				this.hourMaxOriginal = o.hourMax;
				this.minuteMaxOriginal = o.minuteMax;
				this.secondMaxOriginal = o.secondMax;
				this.millisecMaxOriginal = o.millisecMax;
			}

			if(dp_inst.settings.timeOnly || maxDateTimeDate.getTime() == dp_date.getTime()){
				this._defaults.hourMax = maxDateTime.getHours();
				if (this.hour >= this._defaults.hourMax) {
					this.hour = this._defaults.hourMax;
					this._defaults.minuteMax = maxDateTime.getMinutes();
					if (this.minute >= this._defaults.minuteMax) {
						this.minute = this._defaults.minuteMax;
						this._defaults.secondMax = maxDateTime.getSeconds();
					} else if (this.second >= this._defaults.secondMax) {
						this.second = this._defaults.secondMax;
						this._defaults.millisecMax = maxDateTime.getMilliseconds();
					} else {
						if(this.millisec > this._defaults.millisecMax) { this.millisec = this._defaults.millisecMax; }
						this._defaults.millisecMax = this.millisecMaxOriginal;
					}
				} else {
					this._defaults.minuteMax = this.minuteMaxOriginal;
					this._defaults.secondMax = this.secondMaxOriginal;
					this._defaults.millisecMax = this.millisecMaxOriginal;
				}
			}else{
				this._defaults.hourMax = this.hourMaxOriginal;
				this._defaults.minuteMax = this.minuteMaxOriginal;
				this._defaults.secondMax = this.secondMaxOriginal;
				this._defaults.millisecMax = this.millisecMaxOriginal;
			}
		}

		if(adjustSliders !== undefined && adjustSliders === true){
			var hourMax = parseInt((this._defaults.hourMax - ((this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour)) ,10),
                minMax  = parseInt((this._defaults.minuteMax - ((this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute)) ,10),
                secMax  = parseInt((this._defaults.secondMax - ((this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond)) ,10),
				millisecMax  = parseInt((this._defaults.millisecMax - ((this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec)) ,10);

			if(this.hour_slider) {
				this.hour_slider.slider("option", { min: this._defaults.hourMin, max: hourMax }).slider('value', this.hour);
            }
			if(this.minute_slider) {
				this.minute_slider.slider("option", { min: this._defaults.minuteMin, max: minMax }).slider('value', this.minute);
            }
			if(this.second_slider){
				this.second_slider.slider("option", { min: this._defaults.secondMin, max: secMax }).slider('value', this.second);
            }
			if(this.millisec_slider) {
				this.millisec_slider.slider("option", { min: this._defaults.millisecMin, max: millisecMax }).slider('value', this.millisec);
            }
		}

	},


	//########################################################################
	// when a slider moves, set the internal time...
	// on time change is also called when the time is updated in the text field
	//########################################################################
	_onTimeChange: function() {
		var hour   = (this.hour_slider) ? this.hour_slider.slider('value') : false,
			minute = (this.minute_slider) ? this.minute_slider.slider('value') : false,
			second = (this.second_slider) ? this.second_slider.slider('value') : false,
			millisec = (this.millisec_slider) ? this.millisec_slider.slider('value') : false,
			timezone = (this.timezone_select) ? this.timezone_select.val() : false,
			o = this._defaults;

		if (typeof(hour) == 'object') { hour = false; }
		if (typeof(minute) == 'object') { minute = false; }
		if (typeof(second) == 'object') { second = false; }
		if (typeof(millisec) == 'object') { millisec = false; }
		if (typeof(timezone) == 'object') { timezone = false; }

		if (hour !== false) { hour = parseInt(hour,10); }
		if (minute !== false) { minute = parseInt(minute,10); }
		if (second !== false) { second = parseInt(second,10); }
		if (millisec !== false) { millisec = parseInt(millisec,10); }

		var ampm = o[hour < 12 ? 'amNames' : 'pmNames'][0];

		// If the update was done in the input field, the input field should not be updated.
		// If the update was done using the sliders, update the input field.
		var hasChanged = (hour != this.hour || minute != this.minute ||
				second != this.second || millisec != this.millisec ||
				(this.ampm.length > 0 &&
				    (hour < 12) != ($.inArray(this.ampm.toUpperCase(), this.amNames) !== -1)) ||
				timezone != this.timezone);

		if (hasChanged) {

			if (hour !== false) { this.hour = hour; }
			if (minute !== false) { this.minute = minute; }
			if (second !== false) { this.second = second; }
			if (millisec !== false) { this.millisec = millisec; }
			if (timezone !== false) { this.timezone = timezone; }

			if (!this.inst) { this.inst = $.datepicker._getInst(this.$input[0]); }

			this._limitMinMaxDateTime(this.inst, true);
		}
		if (o.ampm) { this.ampm = ampm; }

		//this._formatTime();
		this.formattedTime = $.datepicker.formatTime(this._defaults.timeFormat, this, this._defaults);
		if (this.$timeObj) { this.$timeObj.text(this.formattedTime + o.timeSuffix); }
		this.timeDefined = true;
		if (hasChanged) { this._updateDateTime(); }
	},

	//########################################################################
	// call custom onSelect.
	// bind to sliders slidestop, and grid click.
	//########################################################################
	_onSelectHandler: function() {
		var onSelect = this._defaults.onSelect;
		var inputEl = this.$input ? this.$input[0] : null;
		if (onSelect && inputEl) {
			onSelect.apply(inputEl, [this.formattedDateTime, this]);
		}
	},

	//########################################################################
	// left for any backwards compatibility
	//########################################################################
	_formatTime: function(time, format) {
		time = time || { hour: this.hour, minute: this.minute, second: this.second, millisec: this.millisec, ampm: this.ampm, timezone: this.timezone };
		var tmptime = (format || this._defaults.timeFormat).toString();

		tmptime = $.datepicker.formatTime(tmptime, time, this._defaults);

		if (arguments.length) { return tmptime; }
		else { this.formattedTime = tmptime; }
	},

	//########################################################################
	// update our input with the new date time..
	//########################################################################
	_updateDateTime: function(dp_inst) {
		dp_inst = this.inst || dp_inst;
		var dt = $.datepicker._daylightSavingAdjust(new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay)),
			dateFmt = $.datepicker._get(dp_inst, 'dateFormat'),
			formatCfg = $.datepicker._getFormatConfig(dp_inst),
			timeAvailable = dt !== null && this.timeDefined;
		this.formattedDate = $.datepicker.formatDate(dateFmt, (dt === null ? new Date() : dt), formatCfg);
		var formattedDateTime = this.formattedDate;
		// remove following lines to force every changes in date picker to change the input value
		// Bug descriptions: when an input field has a default value, and click on the field to pop up the date picker. 
		// If the user manually empty the value in the input field, the date picker will never change selected value.
		//if (dp_inst.lastVal !== undefined && (dp_inst.lastVal.length > 0 && this.$input.val().length === 0)) {
		//	return;
        //}

		if (this._defaults.timeOnly === true) {
			formattedDateTime = this.formattedTime;
		} else if (this._defaults.timeOnly !== true && (this._defaults.alwaysSetTime || timeAvailable)) {
			formattedDateTime += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix;
		}

		this.formattedDateTime = formattedDateTime;

		if(!this._defaults.showTimepicker) {
			this.$input.val(this.formattedDate);
		} else if (this.$altInput && this._defaults.altFieldTimeOnly === true) {
			this.$altInput.val(this.formattedTime);
			this.$input.val(this.formattedDate);
		} else if(this.$altInput) {
			this.$altInput.val(formattedDateTime);
			this.$input.val(formattedDateTime);
		} else {
			this.$input.val(formattedDateTime);
		}

		this.$input.trigger("change");
	}

});

$.fn.extend({
	//########################################################################
	// shorthand just to use timepicker..
	//########################################################################
	timepicker: function(o) {
		o = o || {};
		var tmp_args = arguments;

		if (typeof o == 'object') { tmp_args[0] = $.extend(o, { timeOnly: true }); }

		return $(this).each(function() {
			$.fn.datetimepicker.apply($(this), tmp_args);
		});
	},

	//########################################################################
	// extend timepicker to datepicker
	//########################################################################
	datetimepicker: function(o) {
		o = o || {};
		var tmp_args = arguments;

		if (typeof(o) == 'string'){
			if(o == 'getDate') {
				return $.fn.datepicker.apply($(this[0]), tmp_args);
            }
			else {
				return this.each(function() {
					var $t = $(this);
					$t.datepicker.apply($t, tmp_args);
				});
            }
		}
		else {
			return this.each(function() {
				var $t = $(this);
				$t.datepicker($.timepicker._newInst($t, o)._defaults);
			});
        }
	}
});

$.datepicker.parseDateTime = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
	var parseRes = parseDateTimeInternal(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings);
	if (parseRes.timeObj)
	{
		var t = parseRes.timeObj;
		parseRes.date.setHours(t.hour, t.minute, t.second, t.millisec);
	}

	return parseRes.date;
};

$.datepicker.parseTime = function(timeFormat, timeString, options) {
	
	//########################################################################
	// pattern for standard and localized AM/PM markers
	//########################################################################
	var getPatternAmpm = function(amNames, pmNames) {
		var markers = [];
		if (amNames) {
			$.merge(markers, amNames);
        }
		if (pmNames) {
			$.merge(markers, pmNames);
        }
		markers = $.map(markers, function(val) { return val.replace(/[.*+?|()\[\]{}\\]/g, '\\$&'); });
		return '(' + markers.join('|') + ')?';
	};
   
	//########################################################################
	// figure out position of time elements.. cause js cant do named captures
	//########################################################################
	var getFormatPositions = function( timeFormat ) {
		var finds = timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|t{1,2}|z)/g),
			orders = { h: -1, m: -1, s: -1, l: -1, t: -1, z: -1 };

		if (finds) {
			for (var i = 0; i < finds.length; i++) {
				if (orders[finds[i].toString().charAt(0)] == -1) {
					orders[finds[i].toString().charAt(0)] = i + 1;
                }
            }
        }
		return orders;
	};
    
	var o = extendRemove(extendRemove({}, $.timepicker._defaults), options || {});
    
	var regstr = '^' + timeFormat.toString()
			.replace(/h{1,2}/ig, '(\\d?\\d)')
			.replace(/m{1,2}/ig, '(\\d?\\d)')
			.replace(/s{1,2}/ig, '(\\d?\\d)')
			.replace(/l{1}/ig, '(\\d?\\d?\\d)')
			.replace(/t{1,2}/ig, getPatternAmpm(o.amNames, o.pmNames))
			.replace(/z{1}/ig, '(z|[-+]\\d\\d:?\\d\\d)?')
			.replace(/\s/g, '\\s?') + o.timeSuffix + '$',
		order = getFormatPositions(timeFormat),
		ampm = '',
		treg;

	treg = timeString.match(new RegExp(regstr, 'i'));

	var resTime = {hour: 0, minute: 0, second: 0, millisec: 0};
    
	if (treg) {
		if (order.t !== -1) {
			if (treg[order.t] === undefined || treg[order.t].length === 0) {
				ampm = '';
				resTime.ampm = '';
			} else {
				ampm = $.inArray(treg[order.t], o.amNames) !== -1 ? 'AM' : 'PM';
				resTime.ampm = o[ampm == 'AM' ? 'amNames' : 'pmNames'][0];
			}
		}

		if (order.h !== -1) {
			if (ampm == 'AM' && treg[order.h] == '12') {
				resTime.hour = 0; // 12am = 0 hour
			} else {
                if (ampm == 'PM' && treg[order.h] != '12') {
                    resTime.hour = parseInt(treg[order.h],10) + 12; // 12pm = 12 hour, any other pm = hour + 12
                }
                else { resTime.hour = Number(treg[order.h]); }
            }
		}

		if (order.m !== -1) { resTime.minute = Number(treg[order.m]); }
		if (order.s !== -1) { resTime.second = Number(treg[order.s]); }
		if (order.l !== -1) { resTime.millisec = Number(treg[order.l]); }
		if (order.z !== -1 && treg[order.z] !== undefined) {
			var tz = treg[order.z].toUpperCase();
			switch (tz.length) {
				case 1:	// Z
					tz = o.timezoneIso8601 ? 'Z' : '+0000';
					break;
				case 5:	// +hhmm
					if (o.timezoneIso8601) {
						tz = tz.substring(1) == '0000' ?
							'Z' :
							tz.substring(0, 3) + ':' + tz.substring(3);
                    }
					break;
				case 6:	// +hh:mm
					if (!o.timezoneIso8601) {
						tz = tz == 'Z' || tz.substring(1) == '00:00' ?
							'+0000' :
							tz.replace(/:/, '');
					} else {
                        if (tz.substring(1) == '00:00') {
                            tz = 'Z';
                        }
                    }
					break;
			}
			resTime.timezone = tz;
		}


		return resTime;
	}

	return false;
};

//########################################################################
// format the time all pretty...
// format = string format of the time
// time = a {}, not a Date() for timezones
// options = essentially the regional[].. amNames, pmNames, ampm
//########################################################################
$.datepicker.formatTime = function(format, time, options) {
	options = options || {};
	options = $.extend($.timepicker._defaults, options);
	time = $.extend({hour:0, minute:0, second:0, millisec:0, timezone:'+0000'}, time);

	var tmptime = format;
	var ampmName = options.amNames[0];

	var hour = parseInt(time.hour, 10);
	if (options.ampm) {
		if (hour > 11){
			ampmName = options.pmNames[0];
			if(hour > 12) {
				hour = hour % 12;
            }
		}
		if (hour === 0) {
			hour = 12;
        }
	}
	tmptime = tmptime.replace(/(?:hh?|mm?|ss?|[tT]{1,2}|[lz])/g, function(match) {
		switch (match.toLowerCase()) {
			case 'hh': return ('0' + hour).slice(-2);
			case 'h':  return hour;
			case 'mm': return ('0' + time.minute).slice(-2);
			case 'm':  return time.minute;
			case 'ss': return ('0' + time.second).slice(-2);
			case 's':  return time.second;
			case 'l':  return ('00' + time.millisec).slice(-3);
			case 'z':  return time.timezone;
			case 't': case 'tt':
				if (options.ampm) {
					if (match.length == 1) {
						ampmName = ampmName.charAt(0);
                    }
					return match.charAt(0) == 'T' ? ampmName.toUpperCase() : ampmName.toLowerCase();
				}
				return '';
		}
	});

	tmptime = $.trim(tmptime);
	return tmptime;
};

//########################################################################
// the bad hack :/ override datepicker so it doesnt close on select
// inspired: http://stackoverflow.com/questions/1252512/jquery-datepicker-prevent-closing-picker-when-clicking-a-date/1762378#1762378
//########################################################################
$.datepicker._base_selectDate = $.datepicker._selectDate;
$.datepicker._selectDate = function (id, dateStr) {
	var inst = this._getInst($(id)[0]),
		tp_inst = this._get(inst, 'timepicker');

	if (tp_inst) {
		tp_inst._limitMinMaxDateTime(inst, true);
		inst.inline = inst.stay_open = true;
		//This way the onSelect handler called from calendarpicker get the full dateTime
		this._base_selectDate(id, dateStr);
		inst.inline = inst.stay_open = false;
		this._notifyChange(inst);
		this._updateDatepicker(inst);
	}
	else { this._base_selectDate(id, dateStr); }
};

//#############################################################################################
// second bad hack :/ override datepicker so it triggers an event when changing the input field
// and does not redraw the datepicker on every selectDate event
//#############################################################################################
$.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker;
$.datepicker._updateDatepicker = function(inst) {

	// don't popup the datepicker if there is another instance already opened
	var input = inst.input[0];
	if($.datepicker._curInst &&
	   $.datepicker._curInst != inst &&
	   $.datepicker._datepickerShowing &&
	   $.datepicker._lastInput != input) {
		return;
	}

	if (typeof(inst.stay_open) !== 'boolean' || inst.stay_open === false) {

		this._base_updateDatepicker(inst);

		// Reload the time control when changing something in the input text field.
		var tp_inst = this._get(inst, 'timepicker');
		if(tp_inst) {
			tp_inst._addTimePicker(inst);

			if (tp_inst._defaults.useLocalTimezone) { //checks daylight saving with the new date.
				var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay, 12);
				selectLocalTimeZone(tp_inst, date);
				tp_inst._onTimeChange();
			}
		}
	}
};

//#######################################################################################
// third bad hack :/ override datepicker so it allows spaces and colon in the input field
//#######################################################################################
$.datepicker._base_doKeyPress = $.datepicker._doKeyPress;
$.datepicker._doKeyPress = function(event) {
	var inst = $.datepicker._getInst(event.target),
		tp_inst = $.datepicker._get(inst, 'timepicker');

	if (tp_inst) {
		if ($.datepicker._get(inst, 'constrainInput')) {
			var ampm = tp_inst._defaults.ampm,
				dateChars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat')),
				datetimeChars = tp_inst._defaults.timeFormat.toString()
								.replace(/[hms]/g, '')
								.replace(/TT/g, ampm ? 'APM' : '')
								.replace(/Tt/g, ampm ? 'AaPpMm' : '')
								.replace(/tT/g, ampm ? 'AaPpMm' : '')
								.replace(/T/g, ampm ? 'AP' : '')
								.replace(/tt/g, ampm ? 'apm' : '')
								.replace(/t/g, ampm ? 'ap' : '') +
								" " +
								tp_inst._defaults.separator +
								tp_inst._defaults.timeSuffix +
								(tp_inst._defaults.showTimezone ? tp_inst._defaults.timezoneList.join('') : '') +
								(tp_inst._defaults.amNames.join('')) +
								(tp_inst._defaults.pmNames.join('')) +
								dateChars,
				chr = String.fromCharCode(event.charCode === undefined ? event.keyCode : event.charCode);
			return event.ctrlKey || (chr < ' ' || !dateChars || datetimeChars.indexOf(chr) > -1);
		}
	}

	return $.datepicker._base_doKeyPress(event);
};

//#######################################################################################
// Override key up event to sync manual input changes.
//#######################################################################################
$.datepicker._base_doKeyUp = $.datepicker._doKeyUp;
$.datepicker._doKeyUp = function (event) {
	var inst = $.datepicker._getInst(event.target),
		tp_inst = $.datepicker._get(inst, 'timepicker');

	if (tp_inst) {
		if (tp_inst._defaults.timeOnly && (inst.input.val() != inst.lastVal)) {
			try {
				$.datepicker._updateDatepicker(inst);
			}
			catch (err) {
				$.datepicker.log(err);
			}
		}
	}

	return $.datepicker._base_doKeyUp(event);
};

//#######################################################################################
// override "Today" button to also grab the time.
//#######################################################################################
$.datepicker._base_gotoToday = $.datepicker._gotoToday;
$.datepicker._gotoToday = function(id) {
	var inst = this._getInst($(id)[0]),
		$dp = inst.dpDiv;
	this._base_gotoToday(id);
	var tp_inst = this._get(inst, 'timepicker');
	selectLocalTimeZone(tp_inst);
	var now = new Date();
	this._setTime(inst, now);
	$( '.ui-datepicker-today', $dp).click();
};

//#######################################################################################
// Disable & enable the Time in the datetimepicker
//#######################################################################################
$.datepicker._disableTimepickerDatepicker = function(target) {
	var inst = this._getInst(target);
    if (!inst) { return; }
    
	var tp_inst = this._get(inst, 'timepicker');
	$(target).datepicker('getDate'); // Init selected[Year|Month|Day]
	if (tp_inst) {
		tp_inst._defaults.showTimepicker = false;
		tp_inst._updateDateTime(inst);
	}
};

$.datepicker._enableTimepickerDatepicker = function(target) {
	var inst = this._getInst(target);
    if (!inst) { return; }
    
	var tp_inst = this._get(inst, 'timepicker');
	$(target).datepicker('getDate'); // Init selected[Year|Month|Day]
	if (tp_inst) {
		tp_inst._defaults.showTimepicker = true;
		tp_inst._addTimePicker(inst); // Could be disabled on page load
		tp_inst._updateDateTime(inst);
	}
};

//#######################################################################################
// Create our own set time function
//#######################################################################################
$.datepicker._setTime = function(inst, date) {
	var tp_inst = this._get(inst, 'timepicker');
	if (tp_inst) {
		var defaults = tp_inst._defaults,
			// calling _setTime with no date sets time to defaults
			hour = date ? date.getHours() : defaults.hour,
			minute = date ? date.getMinutes() : defaults.minute,
			second = date ? date.getSeconds() : defaults.second,
			millisec = date ? date.getMilliseconds() : defaults.millisec;
		//check if within min/max times..
		// correct check if within min/max times. 	
		// Rewritten by Scott A. Woodward
		var hourEq = hour === defaults.hourMin,
			minuteEq = minute === defaults.minuteMin,
			secondEq = second === defaults.secondMin;
		var reset = false;
		if(hour < defaults.hourMin || hour > defaults.hourMax)  
			reset = true;
		else if( (minute < defaults.minuteMin || minute > defaults.minuteMax) && hourEq)
			reset = true;
		else if( (second < defaults.secondMin || second > defaults.secondMax ) && hourEq && minuteEq)
			reset = true;
		else if( (millisec < defaults.millisecMin || millisec > defaults.millisecMax) && hourEq && minuteEq && secondEq)
			reset = true;
		if(reset) {
			hour = defaults.hourMin;
			minute = defaults.minuteMin;
			second = defaults.secondMin;
			millisec = defaults.millisecMin;
		}
		tp_inst.hour = hour;
		tp_inst.minute = minute;
		tp_inst.second = second;
		tp_inst.millisec = millisec;
		if (tp_inst.hour_slider) tp_inst.hour_slider.slider('value', hour);
		if (tp_inst.minute_slider) tp_inst.minute_slider.slider('value', minute);
		if (tp_inst.second_slider) tp_inst.second_slider.slider('value', second);
		if (tp_inst.millisec_slider) tp_inst.millisec_slider.slider('value', millisec);

		tp_inst._onTimeChange();
		tp_inst._updateDateTime(inst);
	}
};

//#######################################################################################
// Create new public method to set only time, callable as $().datepicker('setTime', date)
//#######################################################################################
$.datepicker._setTimeDatepicker = function(target, date, withDate) {
	var inst = this._getInst(target);
    if (!inst) { return; }
    
	var tp_inst = this._get(inst, 'timepicker');
    
	if (tp_inst) {
		this._setDateFromField(inst);
		var tp_date;
		if (date) {
			if (typeof date == "string") {
				tp_inst._parseTime(date, withDate);
				tp_date = new Date();
				tp_date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
			}
			else { tp_date = new Date(date.getTime()); }
			if (tp_date.toString() == 'Invalid Date') { tp_date = undefined; }
			this._setTime(inst, tp_date);
		}
	}

};

//#######################################################################################
// override setDate() to allow setting time too within Date object
//#######################################################################################
$.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker;
$.datepicker._setDateDatepicker = function(target, date) {
	var inst = this._getInst(target);
    if (!inst) { return; }
    
	var tp_date = (date instanceof Date) ? new Date(date.getTime()) : date;

	this._updateDatepicker(inst);
	this._base_setDateDatepicker.apply(this, arguments);
	this._setTimeDatepicker(target, tp_date, true);
};

//#######################################################################################
// override getDate() to allow getting time too within Date object
//#######################################################################################
$.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker;
$.datepicker._getDateDatepicker = function(target, noDefault) {
	var inst = this._getInst(target);
    if (!inst) { return; }
    
    var tp_inst = this._get(inst, 'timepicker');

	if (tp_inst) {
		this._setDateFromField(inst, noDefault);
		var date = this._getDate(inst);
		if (date && tp_inst._parseTime($(target).val(), tp_inst.timeOnly)) { date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec); }
		return date;
	}
	return this._base_getDateDatepicker(target, noDefault);
};

//#######################################################################################
// override parseDate() because UI 1.8.14 throws an error about "Extra characters"
// An option in datapicker to ignore extra format characters would be nicer.
//#######################################################################################
$.datepicker._base_parseDate = $.datepicker.parseDate;
$.datepicker.parseDate = function(format, value, settings) {
    var splitRes = splitDateTime(format, value, settings);
	return $.datepicker._base_parseDate(format, splitRes[0], settings);
};

//#######################################################################################
// override formatDate to set date with time to the input
//#######################################################################################
$.datepicker._base_formatDate = $.datepicker._formatDate;
$.datepicker._formatDate = function(inst, day, month, year){
	var tp_inst = this._get(inst, 'timepicker');
	if(tp_inst) {
		tp_inst._updateDateTime(inst);
		return tp_inst.$input.val();
	}
	return this._base_formatDate(inst);
};

//#######################################################################################
// override options setter to add time to maxDate(Time) and minDate(Time). MaxDate
//#######################################################################################
$.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker;
$.datepicker._optionDatepicker = function(target, name, value) {
	var inst = this._getInst(target);
    if (!inst) { return null; }
    
	var tp_inst = this._get(inst, 'timepicker');
	if (tp_inst) {
		var min = null, max = null, onselect = null;
		if (typeof name == 'string') { // if min/max was set with the string
			if (name === 'minDate' || name === 'minDateTime' ) {
				min = value;
            }
			else {
                if (name === 'maxDate' || name === 'maxDateTime') {
                    max = value;
                }
                else {
                    if (name === 'onSelect') {
                        onselect = value;
                    }
                }
            }
		} else {
            if (typeof name == 'object') { //if min/max was set with the JSON
                if (name.minDate) {
                    min = name.minDate;
                } else {
                    if (name.minDateTime) {
                        min = name.minDateTime;
                    } else {
                        if (name.maxDate) {
                            max = name.maxDate;
                        } else {
                            if (name.maxDateTime) {
                                max = name.maxDateTime;
                            }
                        }
                    }
                }
            }
        }
		if(min) { //if min was set
			if (min === 0) {
				min = new Date();
            } else {
				min = new Date(min);
            }

			tp_inst._defaults.minDate = min;
			tp_inst._defaults.minDateTime = min;
		} else if (max) { //if max was set
			if(max===0) {
				max=new Date();
            } else {
				max= new Date(max);
            }
			tp_inst._defaults.maxDate = max;
			tp_inst._defaults.maxDateTime = max;
		} else if (onselect) {
			tp_inst._defaults.onSelect = onselect;
        }
	}
	if (value === undefined) {
		return this._base_optionDatepicker(target, name);
    }
	return this._base_optionDatepicker(target, name, value);
};

//#######################################################################################
// jQuery extend now ignores nulls!
//#######################################################################################
function extendRemove(target, props) {
	$.extend(target, props);
	for (var name in props) {
		if (props[name] === null || props[name] === undefined) {
			target[name] = props[name];
        }
    }
	return target;
}

//#######################################################################################
// Splits datetime string into date ans time substrings.
// Throws exception when date can't be parsed
// If only date is present, time substring eill be '' 
//#######################################################################################
var splitDateTime = function(dateFormat, dateTimeString, dateSettings)
{
	try {
		var date = $.datepicker._base_parseDate(dateFormat, dateTimeString, dateSettings);
	} catch (err) {
		if (err.indexOf(":") >= 0) {
			// Hack!  The error message ends with a colon, a space, and
			// the "extra" characters.  We rely on that instead of
			// attempting to perfectly reproduce the parsing algorithm.
            var dateStringLength = dateTimeString.length-(err.length-err.indexOf(':')-2);
            var timeString = dateTimeString.substring(dateStringLength);

            return [dateTimeString.substring(0, dateStringLength), dateTimeString.substring(dateStringLength)];
            
		} else {
			throw err;
		}
	}
	return [dateTimeString, ''];
};

//#######################################################################################
// Internal function to parse datetime interval
// Returns: {date: Date, timeObj: Object}, where
//   date - parsed date without time (type Date)
//   timeObj = {hour: , minute: , second: , millisec: } - parsed time. Optional
//#######################################################################################
var parseDateTimeInternal = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings)
{
    var date;
    var splitRes = splitDateTime(dateFormat, dateTimeString, dateSettings);
	date = $.datepicker._base_parseDate(dateFormat, splitRes[0], dateSettings);
    if (splitRes[1] !== '')
    {
        var timeString = splitRes[1];
        var separator = timeSettings && timeSettings.separator ? timeSettings.separator : $.timepicker._defaults.separator;            
        if ( timeString.indexOf(separator) !== 0) {
            throw 'Missing time separator';
        }
        timeString = timeString.substring(separator.length);
        var parsedTime = $.datepicker.parseTime(timeFormat, timeString, timeSettings);
        if (parsedTime === null) {
            throw 'Wrong time format';
        }
        return {date: date, timeObj: parsedTime};
    } else {
        return {date: date};
    }
};

//#######################################################################################
// Internal function to set timezone_select to the local timezone
//#######################################################################################
var selectLocalTimeZone = function(tp_inst, date)
{
	if (tp_inst && tp_inst.timezone_select) {
		tp_inst._defaults.useLocalTimezone = true;
		var now = typeof date !== 'undefined' ? date : new Date();
		var tzoffset = timeZoneString(now);
		if (tp_inst._defaults.timezoneIso8601) {
			tzoffset = tzoffset.substring(0, 3) + ':' + tzoffset.substring(3);
        }
		tp_inst.timezone_select.val(tzoffset);
	}
};

// Input: Date Object
// Output: String with timezone offset, e.g. '+0100'
var timeZoneString = function(date)
{
	var off = date.getTimezoneOffset() * -10100 / 60;
	var timezone = (off >= 0 ? '+' : '-') + Math.abs(off).toString().substr(1);
	return timezone;
};

$.timepicker = new Timepicker(); // singleton instance
$.timepicker.version = "1.0.1";

})(jQuery);
/*
 * jQuery MultiSelect UI Widget 1.12
 * Copyright (c) 2011 Eric Hynds
 *
 * http://www.erichynds.com/jquery/jquery-ui-multiselect-widget/
 *
 * Depends:
 *   - jQuery 1.4.2+
 *   - jQuery UI 1.8 widget factory
 *
 * Optional:
 *   - jQuery UI effects
 *   - jQuery UI position utility
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 */

(function(d){var j=0;d.widget("ech.multiselect",{options:{header:!0,height:175,minWidth:225,classes:"",checkAllText:"Check all",uncheckAllText:"Uncheck all",noneSelectedText:"Select options",selectedText:"# selected",selectedList:0,show:"",hide:"",autoOpen:!1,multiple:!0,position:{}},_create:function(){var a=this.element.hide(),b=this.options;this.speed=d.fx.speeds._default;this._isOpen=!1;a=(this.button=d('<button type="button"><span class="ui-icon ui-icon-triangle-2-n-s"></span></button>')).addClass("ui-multiselect ui-widget ui-state-default ui-corner-all").addClass(b.classes).attr({title:a.attr("title"), "aria-haspopup":!0,tabIndex:a.attr("tabIndex")}).insertAfter(a);(this.buttonlabel=d("<span />")).html(b.noneSelectedText).appendTo(a);var a=(this.menu=d("<div />")).addClass("ui-multiselect-menu ui-widget ui-widget-content ui-corner-all").addClass(b.classes).appendTo(document.body),c=(this.header=d("<div />")).addClass("ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix").appendTo(a);(this.headerLinkContainer=d("<ul />")).addClass("ui-helper-reset").html(function(){return!0=== b.header?'<li><a class="ui-multiselect-all" href="#"><span class="ui-icon ui-icon-check"></span><span>'+b.checkAllText+'</span></a></li><li><a class="ui-multiselect-none" href="#"><span class="ui-icon ui-icon-closethick"></span><span>'+b.uncheckAllText+"</span></a></li>":"string"===typeof b.header?"<li>"+b.header+"</li>":""}).append('<li class="ui-multiselect-close"><a href="#" class="ui-multiselect-close"><span class="ui-icon ui-icon-circle-close"></span></a></li>').appendTo(c);(this.checkboxContainer= d("<ul />")).addClass("ui-multiselect-checkboxes ui-helper-reset").appendTo(a);this._bindEvents();this.refresh(!0);b.multiple||a.addClass("ui-multiselect-single")},_init:function(){!1===this.options.header&&this.header.hide();this.options.multiple||this.headerLinkContainer.find(".ui-multiselect-all, .ui-multiselect-none").hide();this.options.autoOpen&&this.open();this.element.is(":disabled")&&this.disable()},refresh:function(a){var b=this.element,c=this.options,e=this.menu,h=this.checkboxContainer, g=[],f=[],i=b.attr("id")||j++;b.find("option").each(function(b){d(this);var a=this.parentNode,e=this.innerHTML,h=this.title,j=this.value,b=this.id||"ui-multiselect-"+i+"-option-"+b,k=this.disabled,m=this.selected,l=["ui-corner-all"];"optgroup"===a.tagName.toLowerCase()&&(a=a.getAttribute("label"),-1===d.inArray(a,g)&&(f.push('<li class="ui-multiselect-optgroup-label"><a href="#">'+a+"</a></li>"),g.push(a)));k&&l.push("ui-state-disabled");m&&!c.multiple&&l.push("ui-state-active");f.push('<li class="'+ (k?"ui-multiselect-disabled":"")+'">');f.push('<label for="'+b+'" title="'+h+'" class="'+l.join(" ")+'">');f.push('<input id="'+b+'" name="multiselect_'+i+'" type="'+(c.multiple?"checkbox":"radio")+'" value="'+j+'" title="'+e+'"');m&&(f.push(' checked="checked"'),f.push(' aria-selected="true"'));k&&(f.push(' disabled="disabled"'),f.push(' aria-disabled="true"'));f.push(" /><span>"+e+"</span></label></li>")});h.html(f.join(""));this.labels=e.find("label");this._setButtonWidth();this._setMenuWidth(); this.button[0].defaultValue=this.update();a||this._trigger("refresh")},update:function(){var a=this.options,b=this.labels.find("input"),c=b.filter("[checked]"),e=c.length,a=0===e?a.noneSelectedText:d.isFunction(a.selectedText)?a.selectedText.call(this,e,b.length,c.get()):/\d/.test(a.selectedList)&&0<a.selectedList&&e<=a.selectedList?c.map(function(){return d(this).next().text()}).get().join(", "):a.selectedText.replace("#",e).replace("#",b.length);this.buttonlabel.html(a);return a},_bindEvents:function(){function a(){b[b._isOpen?  "close":"open"]();return!1}var b=this,c=this.button;c.find("span").bind("click.multiselect",a);c.bind({click:a,keypress:function(a){switch(a.which){case 27:case 38:case 37:b.close();break;case 39:case 40:b.open()}},mouseenter:function(){c.hasClass("ui-state-disabled")||d(this).addClass("ui-state-hover")},mouseleave:function(){d(this).removeClass("ui-state-hover")},focus:function(){c.hasClass("ui-state-disabled")||d(this).addClass("ui-state-focus")},blur:function(){d(this).removeClass("ui-state-focus")}}); this.header.delegate("a","click.multiselect",function(a){if(d(this).hasClass("ui-multiselect-close"))b.close();else b[d(this).hasClass("ui-multiselect-all")?"checkAll":"uncheckAll"]();a.preventDefault()});this.menu.delegate("li.ui-multiselect-optgroup-label a","click.multiselect",function(a){a.preventDefault();var c=d(this),g=c.parent().nextUntil("li.ui-multiselect-optgroup-label").find("input:visible:not(:disabled)"),f=g.get(),c=c.parent().text();!1!==b._trigger("beforeoptgrouptoggle",a,{inputs:f, label:c})&&(b._toggleChecked(g.filter("[checked]").length!==g.length,g),b._trigger("optgrouptoggle",a,{inputs:f,label:c,checked:f[0].checked}))}).delegate("label","mouseenter.multiselect",function(){d(this).hasClass("ui-state-disabled")||(b.labels.removeClass("ui-state-hover"),d(this).addClass("ui-state-hover").find("input").focus())}).delegate("label","keydown.multiselect",function(a){a.preventDefault();switch(a.which){case 9:case 27:b.close();break;case 38:case 40:case 37:case 39:b._traverse(a.which, this);break;case 13:d(this).find("input")[0].click()}}).delegate('input[type="checkbox"], input[type="radio"]',"click.multiselect",function(a){var c=d(this),g=this.value,f=this.checked,i=b.element.find("option");this.disabled||!1===b._trigger("click",a,{value:g,text:this.title,checked:f})?a.preventDefault():(c.focus(),c.attr("aria-selected",f),i.each(function(){if(this.value===g)this.selected=f;else if(!b.options.multiple)this.selected=!1}),b.options.multiple||(b.labels.removeClass("ui-state-active"), c.closest("label").toggleClass("ui-state-active",f),b.close()),b.element.trigger("change"),setTimeout(d.proxy(b.update,b),10))});d(document).bind("mousedown.multiselect",function(a){b._isOpen&&!d.contains(b.menu[0],a.target)&&!d.contains(b.button[0],a.target)&&a.target!==b.button[0]&&b.close()});d(this.element[0].form).bind("reset.multiselect",function(){setTimeout(d.proxy(b.refresh,b),10)})},_setButtonWidth:function(){var a=this.element.outerWidth(),b=this.options;if(/\d/.test(b.minWidth)&&a<b.minWidth)a= b.minWidth;this.button.width(a)},_setMenuWidth:function(){var a=this.menu,b=this.button.outerWidth()-parseInt(a.css("padding-left"),10)-parseInt(a.css("padding-right"),10)-parseInt(a.css("border-right-width"),10)-parseInt(a.css("border-left-width"),10);a.width(b||this.button.outerWidth())},_traverse:function(a,b){var c=d(b),e=38===a||37===a,c=c.parent()[e?"prevAll":"nextAll"]("li:not(.ui-multiselect-disabled, .ui-multiselect-optgroup-label)")[e?"last":"first"]();c.length?c.find("label").trigger("mouseover"): (c=this.menu.find("ul").last(),this.menu.find("label")[e?"last":"first"]().trigger("mouseover"),c.scrollTop(e?c.height():0))},_toggleState:function(a,b){return function(){this.disabled||(this[a]=b);b?this.setAttribute("aria-selected",!0):this.removeAttribute("aria-selected")}},_toggleChecked:function(a,b){var c=b&&b.length?b:this.labels.find("input"),e=this;c.each(this._toggleState("checked",a));c.eq(0).focus();this.update();var h=c.map(function(){return this.value}).get();this.element.find("option").each(function(){!this.disabled&& -1<d.inArray(this.value,h)&&e._toggleState("selected",a).call(this)});c.length&&this.element.trigger("change")},_toggleDisabled:function(a){this.button.attr({disabled:a,"aria-disabled":a})[a?"addClass":"removeClass"]("ui-state-disabled");this.menu.find("input").attr({disabled:a,"aria-disabled":a}).parent()[a?"addClass":"removeClass"]("ui-state-disabled");this.element.attr({disabled:a,"aria-disabled":a})},open:function(){var a=this.button,b=this.menu,c=this.speed,e=this.options;if(!(!1===this._trigger("beforeopen")|| a.hasClass("ui-state-disabled")||this._isOpen)){var h=b.find("ul").last(),g=e.show,f=a.offset();d.isArray(e.show)&&(g=e.show[0],c=e.show[1]||this.speed);h.scrollTop(0).height(e.height);d.ui.position&&!d.isEmptyObject(e.position)?(e.position.of=e.position.of||a,b.show().position(e.position).hide().show(g,c)):b.css({top:f.top+a.outerHeight(),left:f.left}).show(g,c);this.labels.eq(0).trigger("mouseover").trigger("mouseenter").find("input").trigger("focus");a.addClass("ui-state-active");this._isOpen= !0;this._trigger("open")}},close:function(){if(!1!==this._trigger("beforeclose")){var a=this.options,b=a.hide,c=this.speed;d.isArray(a.hide)&&(b=a.hide[0],c=a.hide[1]||this.speed);this.menu.hide(b,c);this.button.removeClass("ui-state-active").trigger("blur").trigger("mouseleave");this._isOpen=!1;this._trigger("close")}},enable:function(){this._toggleDisabled(!1)},disable:function(){this._toggleDisabled(!0)},checkAll:function(){this._toggleChecked(!0);this._trigger("checkAll")},uncheckAll:function(){this._toggleChecked(!1); this._trigger("uncheckAll")},getChecked:function(){return this.menu.find("input").filter("[checked]")},destroy:function(){d.Widget.prototype.destroy.call(this);this.button.remove();this.menu.remove();this.element.show();return this},isOpen:function(){return this._isOpen},widget:function(){return this.menu},_setOption:function(a,b){var c=this.menu;switch(a){case "header":c.find("div.ui-multiselect-header")[b?"show":"hide"]();break;case "checkAllText":c.find("a.ui-multiselect-all span").eq(-1).text(b); break;case "uncheckAllText":c.find("a.ui-multiselect-none span").eq(-1).text(b);break;case "height":c.find("ul").last().height(parseInt(b,10));break;case "minWidth":this.options[a]=parseInt(b,10);this._setButtonWidth();this._setMenuWidth();break;case "selectedText":case "selectedList":case "noneSelectedText":this.options[a]=b;this.update();break;case "classes":c.add(this.button).removeClass(this.options.classes).addClass(b)}d.Widget.prototype._setOption.apply(this,arguments)}})})(jQuery);
/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */

;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(k),g.offsetWidth,e=k.value!=l,g.removeChild(k)):e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),k.appendChild(j);return f=["&#173;","<style>",a,"</style>"].join(""),k.id=h,m.innerHTML+=f,m.appendChild(k),l||(m.style.background="",g.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e});var J=function(c,d){var f=c.join(""),g=d.length;y(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch||(j.touch&&j.touch.offsetTop)===9,e.csstransforms3d=(j.csstransforms3d&&j.csstransforms3d.offsetLeft)===9&&j.csstransforms3d.offsetHeight===3,e.generatedcontent=(j.generatedcontent&&j.generatedcontent.offsetHeight)>=1,e.fontface=/src/i.test(h)&&h.indexOf(d.split(" ")[0])===0},g,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",n.join("touch-enabled),("),h,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",n.join("transform-3d),("),h,")","{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""),['#generatedcontent:after{content:"',l,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);s.flexbox=function(){return I("flexOrder")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){try{var d=b.createElement("canvas"),e;e=!(!a.WebGLRenderingContext||!d.getContext("experimental-webgl")&&!d.getContext("webgl")),d=c}catch(f){e=!1}return e},s.touch=function(){return e.touch},s.geolocation=function(){return!!navigator.geolocation},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexedDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b]+"WebSocket"])return!0;return"WebSocket"in a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.borderradius=function(){return I("borderRadius")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){return e.fontface},s.generatedcontent=function(){return e.generatedcontent},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)B(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),C(""),i=k=null,function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
XPathJS=(function(){var y,t,o,b,u,B,c,q,E,v,w,j=[],d="http://www.w3.org/XML/1998/namespace",C="http://www.w3.org/2000/xmlns/",p="http://www.w3.org/1999/xhtml",s,D,z,A,h,g,x=function(G){return G.ownerDocument},n=function(H){var G=[],I=function(J,L){var M,K,N=[];for(K=0;K<J.length;K++){M=J.item(K);if(false!==arrayIndexOf(M.nodeType,L)){N.push(M)}}return N};switch(H.nodeType){case 1:G=I(H.childNodes,supportedChildNodeTypes=[1,3,4,7,8]);break;case 9:G=I(H.childNodes,supportedChildNodeTypes=[1,7,8]);break;case 2:case 3:case 4:case 7:case 8:case 13:break;default:throw new Error("Internal Error: nodeChildren - unsupported node type: "+H.nodeType);break}return G},l=function(J){var H,I,G=[];H=n(J);for(I=0;I<H.length;I++){G.push(H[I]);G.push.apply(G,l(H[I]))}return G},f=function(H){var G;switch(H.nodeType){case 1:case 3:case 4:case 7:case 8:case 9:return H.parentNode;break;case 2:if(H.ownerElement){return H.ownerElement}G=nodeAttributeSearch(H.ownerDocument,true,function(I,J){if(J===H){return true}});return G;break;case 13:return H.ownerElement;break;default:throw new Error("Internal Error: nodeParent - node type not supported: "+H.type);break}},a=function(I){var H,G=[];while(H=f(I)){G.push(H);I=H}return G},k=function(G){return F(G,"nextSibling")},m=function(G){return F(G,"previousSibling")},F=function(J,I){var H,G=[];while(H=J[I]){switch(H.nodeType){case 1:case 3:case 4:case 7:case 8:case 9:G.push(H);break;default:break}J=H}return G},r=function(K){var G=[],I,J,L,H;I=a(K);I.unshift(K);for(J=0;J<I.length;J++){L=k(I[J]);for(H=0;H<L.length;H++){G.push(L[H]);G.push.apply(G,l(L[H]))}}return G},e=function(K){var G=[],I,J,L,H;I=a(K);I.unshift(K);for(J=0;J<I.length;J++){L=m(I[J]);for(H=0;H<L.length;H++){G.push.apply(G,l(L[H]).reverse());G.push(L[H])}}return G},x=function(G){switch(G.nodeType){case 9:return G;default:return G.ownerDocument}};nodeAttribute=function(I){var G=[],H;if(I.nodeType===1){for(H=0;H<I.attributes.length;H++){if(!I.attributes[H].specified){continue}if(false===isNamespaceAttributeNode(I.attributes[H])){G.push(I.attributes[H])}}}return G},nodeNamespace=function(K,L){var G=(L||[]),I,H,J;if(K.nodeType===1){if(K.ownerDocument.documentElement===K&&typeof K.ownerDocument.namespaces==="object"){for(I=K.ownerDocument.namespaces.length-1;I>=0;I--){J=K.ownerDocument.namespaces.item(I);insertNamespaceIfNotDeclared.call(this,G,J.name,J.urn,K)}}for(I=K.attributes.length-1;I>=0;I--){if(!K.attributes[I].specified){continue}if(false===(H=isNamespaceAttributeNode(K.attributes[I]))){continue}if(H.length===1){insertNamespaceIfNotDeclared.call(this,G,"",K.attributes[I].nodeValue,K);continue}insertNamespaceIfNotDeclared.call(this,G,H[1],K.attributes[I].nodeValue,K)}nodeNamespace.call(this,K.parentNode,G);if(L===undefined){insertNamespaceIfNotDeclared.call(this,G,"xml",d,K);if(G[0]&&G[0].prefix===""&&G[0].namespaceURI===""){G.shift()}}if(L===undefined){for(I=0;I<G.length;I++){if(G[I].ownerElement!==K){G[I]=createNamespaceNode(G[I].prefix,G[I].nodeValue,K)}}}}return G},insertNamespaceIfNotDeclared=function(L,K,J,I){var G,H;if(!this.opts["case-sensitive"]){K=K.toLowerCase()}for(G=0;G<L.length;G++){if(L[G].prefix===K){return false}}H=createNamespaceNode(K,J,I);if(K===""&&J!==null){L.unshift(H)}else{L.push(H)}return true},isNamespaceAttributeNode=function(H){var G=H.nodeName.split(":");if(G[0]==="xmlns"){return G}return false},nodeIdAttribute=function(K,J){var N,L,M,I,O,G,H;if(K.nodeType===1){M=(!J)?nodeAttribute(K):[J];I=nodeNamespace.call(this,K);for(N=0;N<M.length;N++){G=M[N].nodeName.split(":");if(G.length===1){G[1]=G[0];G[0]=""}O=null;for(L=0;L<I.length;L++){if(I[L].prefix===G[0]){O=I[L].namespaceURI;break}}if(O===null){O=""}if(this.opts["unique-ids"][O]===G[1]){return M[N]}}}return null},nodeAttributeSearch=function(H,K,L){var J,G,N,I,M=[];N=H.getElementsByTagName("*");for(J=0;J<N.length;J++){I=N.item(J);if(I.nodeType!=1){continue}for(G=0;G<I.attributes.length;G++){if(!I.attributes[G].specified){continue}if(L(I,I.attributes[G])===true){if(K){return I}else{M.push(I);break}}}}if(K){return null}else{return M}},nodeExpandedName=function(I){var G,J,H,K;switch(I.nodeType){case 1:if(typeof I.scopeName!="undefined"){K={prefix:(I.scopeName=="HTML")?"":I.scopeName,name:I.nodeName}}else{G=I.nodeName.split(":");if(G.length==1){K={prefix:"",name:G[0]}}else{K={prefix:G[0],name:G[1]}}}if(!this.opts["case-sensitive"]){K.prefix=K.prefix.toLowerCase();K.name=K.name.toLowerCase()}J=nodeNamespace.call(this,I);for(H=0;H<J.length;H++){if(J[H].prefix===K.prefix){K.ns=J[H].namespaceURI;return K}}if(K.prefix===""){K.ns=null;return K}throw new Error('Internal Error: nodeExpandedName - Failed to expand namespace prefix "'+K.prefix+'" on element: '+I.nodeName);break;case 2:G=I.nodeName.split(":");if(G.length==1){return{prefix:"",ns:null,name:G[0]}}K={prefix:G[0],name:G[1]};if(!this.opts["case-sensitive"]){K.prefix=K.prefix.toLowerCase();K.name=K.name.toLowerCase()}J=nodeNamespace.call(this,f(I));for(H=0;H<J.length;H++){if(J[H].prefix===K.prefix){K.ns=J[H].namespaceURI;return K}}throw new Error('Internal Error: nodeExpandedName - Failed to expand namespace prefix "'+K.prefix+'" on attribute: '+I.nodeName);break;case 13:return{prefix:null,ns:null,name:((!this.opts["case-sensitive"])?I.prefix:I.prefix.toLowerCase())};break;case 7:return{prefix:null,ns:null,name:((!this.opts["case-sensitive"])?I.target:I.target.toLowerCase())};break;default:return false;break}},nodeStringValue=function(I){var H,G,J="";switch(I.nodeType){case 9:case 1:G=q(new w(I,1,1,{},{},{}),{type:"step",args:["descendant",{type:"nodeType",args:["text",[]]}]});G.sortDocumentOrder();for(H=0;H<G.value.length;H++){J+=G.value[H].data}return J;break;case 2:return I.nodeValue;break;case 13:return I.namespaceURI;break;case 7:case 8:case 3:case 4:return I.data;break;default:throw new Error("Internal Error: nodeStringValue does not support node type: "+I.nodeType);break}},createError=function(J,G,I){var H=new Error(I);H.name=G;H.code=J;return H},arrayIndexOf=function(I,H){var G=H.length;while(G--){if(H[G]===I){return G}}return false},compareOperator=function(J,M,H,I){var L,K,N,G,O;if(J instanceof h){if(M instanceof h){G=M.stringValues();N=J.stringValues();for(L=0;L<N.length;L++){for(K=0;K<G.length;K++){O=compareOperator(N[L],G[K],H,I);if(O.toBoolean()){return O}}}}else{if(M instanceof A){N=J.stringValues();for(L=0;L<N.length;L++){O=compareOperator(new A(N[L].toNumber()),M,H,I);if(O.toBoolean()){return O}}}else{if(M instanceof DateType||(M instanceof z&&M.isDateString())){if(M instanceof z){M=new DateType(M)}N=J.stringValues();for(L=0;L<N.length;L++){O=compareOperator(new DateType(N[L].toDate()),M,H,I);if(O.toBoolean()){return O}}}else{if(M instanceof z){N=J.stringValues();for(L=0;L<N.length;L++){O=compareOperator(N[L],M,H,I);if(O.toBoolean()){return O}}}else{return compareOperator(new D(J.toBoolean()),M,H,I)}}}}}else{if(M instanceof h){if(J instanceof A){G=M.stringValues();for(L=0;L<G.length;L++){O=compareOperator(J,new A(G[L].toNumber()),H,I);if(O.toBoolean()){return O}}}else{if(J instanceof DateType||(J instanceof z&&J.isDateString())){if(J instanceof z){J=new DateType(J)}G=M.stringValues();for(L=0;L<G.length;L++){O=compareOperator(J,new DateType(G[L].toDate()),H,I);if(O.toBoolean()){return O}}}else{if(J instanceof z){G=M.stringValues();for(L=0;L<G.length;L++){O=compareOperator(J,G[L],H,I);if(O.toBoolean()){return O}}}else{return compareOperator(J,new D(M.toBoolean()),H,I)}}}}else{switch(H){case"=":case"!=":if(J instanceof D||M instanceof D){return new D(I(J.toBoolean(),M.toBoolean()))}else{if(J instanceof A||M instanceof A){return new D(I(J.toNumber(),M.toNumber()))}}return new D(I(J.toString(),M.toString()));break;default:return new D(I(J.toNumber(),M.toNumber()));break}}}return new D(false)},getComparableNode=function(G){switch(G.nodeType){case 2:case 3:case 4:case 7:case 8:return f(G);break;case 1:case 9:return G;break;case 13:default:throw new Error("Internal Error: getComparableNode - Node type not supported: "+G.nodeType);break}},compareDocumentPosition=function(I,H){var G,J,K;if(I.nodeType==13&&H.nodeType==13&&I.ownerElement==H.ownerElement){if(I===H){return 0}J=nodeNamespace.call(g,I.ownerElement);for(K=0;K<J.length;K++){if(J[K]===I){G=4;break}else{if(J[K]===H){G=2;break}}}}else{if(I.nodeType==13){I=I.ownerElement}if(H.nodeType==13){H=H.ownerElement}G=compareDocumentPositionNoNamespace(I,H)}return G},compareDocumentPositionNoNamespace=function(J,I){var H,K,G,L,M,N=function(V,O,T,S,W,P,Q,R,U){if(W===0||(W&P)===P){return R+P}else{if((W&Q)===Q){return U}else{return W}}};if(J.compareDocumentPosition){return J.compareDocumentPosition(I)}if(J===I){return 0}H=getComparableNode(J);K=getComparableNode(I);if(H.nodeType===9){if(K.nodeType===9){if(H!==K){return 1}else{G=0}}else{if(H!==K.ownerDocument){return 1}else{G=4+16}}}else{if(K.nodeType===9){if(K!==H.ownerDocument){return 1}else{G=2+8}}else{if(H.ownerDocument!==K.ownerDocument){return 1}else{if(!H.contains||typeof H.sourceIndex==="undefined"||!K.contains||typeof K.sourceIndex==="undefined"){throw new Error('Cannot compare elements. Neither "compareDocumentPosition" nor "contains" available.')}else{G=(H!=K&&H.contains(K)&&16)+(H!=K&&K.contains(H)&&8)+(H.sourceIndex>=0&&K.sourceIndex>=0?(H.sourceIndex<K.sourceIndex&&4)+(H.sourceIndex>K.sourceIndex&&2):1)+0}}}}if(J===H&&I===K){return G}else{if(J===H){return N(J,H,I,K,G,16,8,4,2)}else{if(I===K){return N(I,K,J,H,G,8,16,2,4)}else{if((G&16)===16){return 4}else{if((G&8)===8){return 2}else{if(G===0){for(L=0;L<H.attributes.length;L++){M=H.attributes[L];if(!M.specified){continue}if(M===I){return 2}else{if(M===J){return 4}}}throw new Error("Internal Error: compareDocumentPosition failed to sort attributes.")}else{return G}}}}}}throw new Error("Internal Error: compareDocumentPosition failed to sort nodes.")},nodeSupported=function(G){if(!G){throw createError(9,"NOT_SUPPORTED_ERR","Context node was not supplied.")}else{if(G.nodeType!=9&&G.nodeType!=1&&G.nodeType!=2&&G.nodeType!=3&&G.nodeType!=4&&G.nodeType!=8&&G.nodeType!=7&&G.nodeType!=13){throw createError(9,"NOT_SUPPORTED_ERR","The supplied node type is not supported. (nodeType: "+G.nodeType+")")}else{if(G.nodeType==2&&!G.specified){throw createError(9,"NOT_SUPPORTED_ERR","The supplied node is a non-specified attribute node. Only specified attribute nodes are supported.")}}}},createNamespaceNode=function(K,J,I){var G,H;for(G=0;G<j.length;G++){H=j[G];if(H.prefix===K&&H.nodeValue===J&&H.ownerElement===I){return H}}H=new B(K,J,I);j.push(H);return H};s=function(I,H,G){this.value=I;this.type=H;this.supports=G};s.prototype={value:null,type:null,supports:[],toBoolean:function(){throw new Error('Unable to convert "'+this.type+'" to "boolean".')},toString:function(){throw new Error('Unable to convert "'+this.type+'" to "string".')},toNumber:function(){throw new Error('Unable to convert "'+this.type+'" to "number".')},toNodeSet:function(){throw new Error('Unable to convert "'+this.type+'" to "node-set".')},toDate:function(){throw new Error('Unable to convert "'+this.type+'" to "date".')},canConvertTo:function(G){return false!==arrayIndexOf(G,this.supports)}};D=function(G){s.call(this,G,"boolean",["boolean","string","number","date"])};D.prototype=new s;D.constructor=D;D.prototype.toBoolean=function(){return this.value};D.prototype.toString=function(){return(this.value===true)?"true":"false"};D.prototype.toNumber=function(){return(this.value)?1:0};D.prototype.toDate=function(){return null};h=function(H,G){s.call(this,H,"node-set",["boolean","string","number","node-set","date"]);this.docOrder=(G||"unsorted")};h.prototype=new s;h.constructor=h;h.prototype.toBoolean=function(){return(this.value.length>0)?true:false};h.prototype.toString=function(){if(this.value.length<1){return""}this.sortDocumentOrder();return nodeStringValue(this.value[0])};h.prototype.toNumber=function(){return(new z(this.toString())).toNumber()};h.prototype.toNodeSet=function(){return this.value};h.prototype.toDate=function(){return(new z(this.toString())).toDate()};h.prototype.sortDocumentOrder=function(){switch(this.docOrder){case"document-order":break;case"reverse-document-order":this.value.reverse();break;default:this.value.sort(function(I,H){var G=compareDocumentPosition(I,H);if((G&4)==4){return -1}else{if((G&2)==2){return 1}else{throw new Error("NodeSetType.sortDocumentOrder - unexpected compare result: "+G)}}});break}this.docOrder="document-order"};h.prototype.sortReverseDocumentOrder=function(){switch(this.docOrder){case"document-order":this.value.reverse();break;case"reverse-document-order":break;default:this.sortDocumentOrder();this.value.reverse();break}this.docOrder="reverse-document-order"};h.prototype.append=function(H){var K,J=0,I=0,G;if(!H instanceof h){throw new Error("NodeSetType can be passed into NodeSetType.append method")}this.sortDocumentOrder();H.sortDocumentOrder();while(J<this.value.length&&I<H.value.length){G=compareDocumentPosition(this.value[J],H.value[I]);if(G==0){I++}else{if((G&4)==4){J++}else{if((G&2)==2){this.value.splice(J,0,H.value[I]);J++;I++}else{throw new Error("Internal Error: NodeSetType.append - unable to sort nodes. (result: "+G+")")}}}}for(;I<H.value.length;I++){this.value.push(H.value[I])}this.docOrder="document-order"};h.prototype.stringValues=function(){var H,I,G=[];for(H=0;H<this.value.length;H++){I=new z(nodeStringValue(this.value[H]));if(I.isDateString()){I=new DateType(I.value)}G.push(I)}return G};z=function(G){s.call(this,G,"string",["boolean","string","number","date"])};z.prototype=new s;z.constructor=z;z.prototype.toBoolean=function(){return(this.value.length>0)?true:false};z.prototype.toString=function(){return this.value};z.prototype.toNumber=function(){var G;G=this.value.match(/^[ \t\r\n]*(-?[0-9]+(?:[.][0-9]*)?)[ \t\r\n]*$/);if(G!==null){return parseFloat(G[1])}G=this.value.match(/^[ \t\r\n]*(-?[.][0-9]+)[ \t\r\n]*$/);if(G!==null){return parseFloat(G[1])}return Number.NaN};z.prototype.toDate=function(){return new Date(this.value)};z.prototype.isDateString=function(){if(!isNaN(this.value)){return false}if(isNaN(Date.parse(this.value))){return false}console.debug("found string value that passes check for datestringiness: "+this.value);return true};A=function(G){s.call(this,G,"number",["boolean","string","number","date"])};A.prototype=new s;A.constructor=A;A.prototype.toBoolean=function(){return(this.value!==0&&!isNaN(this.value))?true:false};A.prototype.toString=function(){return this.value.toString()};A.prototype.toNumber=function(){return this.value};A.prototype.toDate=function(){return new Date(this.value*(1000*60*60*24))};DateType=function(G){s.call(this,G,"date",["date","string","number","boolean"])};DateType.prototype=new s;DateType.constructor=DateType;DateType.prototype.toDate=function(){return new Date(this.value)};DateType.prototype.toString=function(){return new Date(this.value).toUTCString()};DateType.prototype.toNumber=function(){return(new Date(this.value).getTime())/(1000*60*60*24)};DateType.prototype.toBoolean=function(){return(new Date(this.value)!="Invalid Date")?true:false};y=function(I,H){var G;this.code=I;switch(this.code){case y.INVALID_EXPRESSION_ERR:this.name="INVALID_EXPRESSION_ERR";break;case y.TYPE_ERR:this.name="TYPE_ERR";break;default:G=new Error("Unsupported XPathException code: "+this.code);G.name="XPathExceptionInternalError";throw G;break}this.message=(H||"")};y.prototype.toString=function(){return'XPathException: "'+this.message+'", code: "'+this.code+'", name: "'+this.name+'"'};y.INVALID_EXPRESSION_ERR=51;y.TYPE_ERR=52;t=function(H){var I,G,J;for(I in H){J=false;for(G in this.opts){if(I===G){this.opts[I]=H[I];J=true;break}}if(J){continue}throw new Error("Unsupported option: "+I)}this.opts["unique-ids"][d]="id";this.opts["unique-ids"][p]="id"};t.prototype={opts:{"unique-ids":{},"case-sensitive":false},createExpression:function(N,M){var G,K,I,H={},L;try{G=XPathJS._parser.parse(N)}catch(J){K="The expression is not a legal expression.";if(J instanceof XPathJS._parser.SyntaxError){K+=" (line: "+J.line+", character: "+J.column+")"}else{K+=" ("+J.message+")"}throw new y(y.INVALID_EXPRESSION_ERR,K)}if(G.nsPrefixes.length>0){if(typeof M!="object"||typeof M.lookupNamespaceURI==="undefined"){throw new y(y.INVALID_EXPRESSION_ERR,"No namespace resolver provided or lookupNamespaceURI function not supported.")}for(I=0;I<G.nsPrefixes.length;I++){L=G.nsPrefixes[I];H[L]=M.lookupNamespaceURI(L);if(H[L]===null){throw createError(14,"NAMESPACE_ERR",'Undefined namespace prefix "'+L+'" in the context of the given resolver.')}}}return new o(G,H,this.opts)},createNSResolver:function(G){return new b(G)},evaluate:function(K,H,J,I,G){var K=this.createExpression(K,J);return K.evaluate(H,I,G)}};o=function(H,G,I){this.parsedExpression=H;this.namespaceMapping=G;this.opts=I||{}};o.prototype={parsedExpression:null,namespaceMapping:null,opts:{},evaluate:function(H,J,G){var I;g=this;nodeSupported(H);I=new w(H,1,1,{},v,this.namespaceMapping,this.opts);return u.factory(I,J,q(I,this.parsedExpression.tree))}};w=function(K,G,J,M,L,I,H){this.node=K;this.pos=G;this.size=J;this.vars=M;this.fns=L;this.nsMap=I;this.opts=H||{}};w.prototype={node:null,pos:null,size:null,vars:null,fns:null,nsMap:null,opts:null,clone:function(I,G,H){return new w(I||this.node,(typeof G!="undefined")?G:this.pos,(typeof H!="undefined")?H:this.size,this.vars,this.fns,this.nsMap,this.opts)}};b=function(G){nodeSupported(G);this.node=G};b.prototype={node:null,lookupNamespaceURI:function(K){var J=this.node,G,I,H;switch(K){case"xml":return d;break;case"xmlns":return C;break;default:switch(this.node.nodeType){case 9:J=J.documentElement;break;case 1:break;default:J=f(J);break}if(J!=null&&J.nodeType==1){if(""==K){I=J.getAttribute("xmlns");if(I!==null){return I}}else{if(J.ownerDocument.documentElement===J&&typeof J.ownerDocument.namespaces==="object"){for(G=0;G<J.ownerDocument.namespaces.length;G++){I=J.ownerDocument.namespaces.item(G);if(I.name==K){return I.urn}}}else{for(G=0;G<J.attributes.length;G++){if(!J.attributes[G].specified){continue}if("xmlns:"+K==J.attributes[G].nodeName){return J.attributes[G].nodeValue}}}}if(J.ownerDocument.documentElement!==J&&J.parentNode){H=this.node;this.node=J.parentNode;I=this.lookupNamespaceURI(K);this.node=H;return I}}return null;break}}};E={"/":function(M,K){var L,J,G,H,I,N;if(M===null){G=new h([x(this.node)],"document-order")}else{G=q(this,M);if(!G instanceof h){throw new Error("Left side of path separator (/) must be of node-set type. (type: "+G.type+")")}}if(K===null){I=G}else{I=new h([],"document-order");for(J=0;J<G.value.length;J++){N=this.clone(G.value[J]);H=q(N,K);if(!H instanceof h){throw new Error("Right side of path separator (/) must be of node-set type. (type: "+H.type+")")}I.append(H)}}return I},step:function(K,L){var M,O,J,G,I,N,H;switch(K){case"child":M=new h(n(this.node),"document-order");break;case"descendant":M=new h(l(this.node),"document-order");break;case"parent":J=f(this.node);M=new h((!J)?[]:[J],"document-order");break;case"ancestor":M=new h(a(this.node),"reverse-document-order");break;case"following-sibling":M=new h(k(this.node),"document-order");break;case"preceding-sibling":M=new h(m(this.node),"reverse-document-order");break;case"following":M=new h(r(this.node),"document-order");break;case"preceding":M=new h(e(this.node),"reverse-document-order");break;case"attribute":M=new h(nodeAttribute(this.node),"document-order");break;case"namespace":M=new h(nodeNamespace.call(this,this.node),"document-order");break;case"self":M=new h([this.node],"document-order");break;case"descendant-or-self":G=l(this.node);G.unshift(this.node);M=new h(G,"document-order");break;case"ancestor-or-self":G=a(this.node);G.unshift(this.node);M=new h(G,"reverse-document-order");break;default:throw new Error("Axis type not supported: "+K);break}switch(L.type){case"nodeType":if(L.args[0]=="node"){break}for(O=M.value.length-1;O>=0;O--){switch(L.args[0]){case"text":if(M.value[O].nodeType!=3&&M.value[O].nodeType!=4){M.value.splice(O,1)}break;case"comment":if(M.value[O].nodeType!=8){M.value.splice(O,1)}break;case"processing-instruction":if(M.value[O].nodeType!=7||(L.args[1].length>0&&q(this,L.args[1][0])!=M.value[O].nodeName)){M.value.splice(O,1)}break}}break;case"name":I=q(this,L);switch(K){case"attribute":N=2;break;case"namespace":N=13;break;default:N=1;break}for(O=M.value.length-1;O>=0;O--){if(M.value[O].nodeType!=N){M.value.splice(O,1);continue}if(I.ns===null&&I.name===null){continue}H=nodeExpandedName.call(this,M.value[O]);if(H===false||H.ns!==I.ns){M.value.splice(O,1);continue}if(I.name!==null&&H.name.toLowerCase()!=I.name.toLowerCase()){M.value.splice(O,1)}}break;default:throw new Error("NodeTest type not supported in step: "+L.type);break}return M},predicate:function(H,N,I){var L,M,O,K,J,G;L=q(this,N);if(!L instanceof h){throw new Error('Expected "node-set", got: '+L.type)}switch(H){case"ancestor":case"ancestor-or-self":case"preceding":case"preceding-sibling":L.sortReverseDocumentOrder();break;default:L.sortDocumentOrder();break}for(K=0;K<I.length;K++){for(M=0,J=1,G=L.value.length;M<L.value.length;J++){O=q(this.clone(L.value[M],J,G),I[K]);if(O instanceof A){if(O.value!=J){L.value.splice(M,1);continue}}else{if(!O.toBoolean()){L.value.splice(M,1);continue}}M++}}return L},"function":function(G,O){var I,P=[],Q=function(R){return((R.ns!==null)?"{"+R.ns+"}":"{}")+R.name},N=function(R){var T,S=[],U;for(T=0;T<R.length;T++){U=(R[T].t===undefined)?"object":R[T].t;if(R[T].r!==false){if(R[T].rep===true){U+="+"}}else{if(R[T].rep===true){U+="*"}else{U+="?"}}S.push(U)}return"("+S.join(", ")+")"},J,M,K=0,L=[],H;I=q(this,G);if(I.ns===null){I.ns=""}if(!this.fns[I.ns]||!this.fns[I.ns][I.name]){throw new Error('Function "'+Q(I)+'" does not exist.')}J=this.fns[I.ns][I.name];if(!J.args){J.args=[]}for(M=0,K=0;M<J.args.length;K++,M++){if(O[K]===undefined){if(J.args[M].r!==false){throw new Error('Function "'+Q(I)+'" expects '+N(J.args)+".")}}else{L.push((J.args[M].t===undefined)?"object":J.args[M].t)}if(J.args[M].rep===true){for(;K<O.length;K++){L.push((J.args[M].t===undefined)?"object":J.args[M].t)}break}}if(L.length<O.length){throw new Error('Function "'+Q(I)+'" expects '+N(J.args)+".")}for(M=0;M<O.length;M++){H=q(this,O[M]);if(L[M]!=="object"&&!H.canConvertTo(L[M])){throw new Error('Function "'+Q(I)+'" expects '+N(J.args)+'.Cannot convert "'+H.type+'" to "'+L[M]+'".')}P.push(H)}result=J.fn.apply(this,P);if(!result instanceof s){throw new Error('Function "'+Q(I)+'" did not return a value that inherits from BaseType.')}else{if(J.ret!=="object"&&!result.canConvertTo(J.ret)){throw new Error('Function "'+Q(I)+'" return "'+result.type+'" type that cannot be converted to "'+J.ret+'".')}}return result},"|":function(H,G){H=q(this,H);G=q(this,G);if(typeof H=="undefined"||typeof G=="undefined"||!H instanceof h||!G instanceof h){throw new Error('Unable to perform union on non-"node-set" types.')}H.append(G);return H},or:function(H,G){if(q(this,H).toBoolean()){return new D(true)}return new D(q(this,G).toBoolean())},and:function(H,G){if(q(this,H).toBoolean()){return new D(q(this,G).toBoolean())}return new D(false)},"=":function(H,G){return compareOperator.call(this,q(this,H),q(this,G),"=",function(J,I){return J==I})},"!=":function(H,G){return compareOperator.call(this,q(this,H),q(this,G),"!=",function(J,I){return J!=I})},"<=":function(H,G){return compareOperator.call(this,q(this,H),q(this,G),"<=",function(J,I){return J<=I})},"<":function(H,G){return compareOperator.call(this,q(this,H),q(this,G),"<",function(J,I){return J<I})},">=":function(H,G){return compareOperator.call(this,q(this,H),q(this,G),">=",function(J,I){return J>=I})},">":function(H,G){return compareOperator.call(this,q(this,H),q(this,G),">",function(J,I){return J>I})},"+":function(H,G){return new A(q(this,H).toNumber()+q(this,G).toNumber())},"-":function(H,G){return new A(q(this,H).toNumber()-q(this,G).toNumber())},div:function(H,G){return new A(q(this,H).toNumber()/q(this,G).toNumber())},mod:function(H,G){return new A(q(this,H).toNumber()%q(this,G).toNumber())},"*":function(H,G){return new A(q(this,H).toNumber()*q(this,G).toNumber())},string:function(G){return new z(G)},number:function(G){return new A(G)},"$":function(G){throw new Error("TODO: Not implemented.16")},name:function(I,G){var H=null;if(I!==null){H=this.nsMap[I];if(!H){throw new Error('Namespace prefix "'+I+'" is not mapped to a namespace.')}}return{ns:H,name:G}}};v={"":{last:{fn:function(){return new A(this.size)},ret:"number"},position:{fn:function(){return new A(this.pos)},ret:"number"},count:{fn:function(G){return new A(G.toNodeSet().length)},args:[{t:"node-set"}],ret:"number"},id:{fn:function(K){var I=this,G=[],M,L,J,H=[],O,N=function(Q){var P,R=Q.split(/[\u0020\u0009\u000D\u000A]+/);for(P=R.length-1;P>=0;P--){if(R[P].length==0){R.splice(P,1)}}return R};if(K instanceof h){for(M=0;M<K.value.length;M++){G.push.apply(G,N(nodeStringValue(K.value[M])))}}else{K=K.toString();G=N(K)}for(M=G.length-1;M>=0;M--){for(L=M-1;L>=0;L--){if(G[M]==G[L]&&M!=L){G.splice(M,1);break}}}for(M=0;M<G.length;M++){J=x(this.node).getElementById(G[M]);if(J){if(nodeIdAttribute.call(this,J)){H.push(J);continue}}nodeAttributeSearch(x(this.node),true,function(P,R){var Q=nodeIdAttribute.call(I,P,R);if(Q&&Q.nodeValue==G[M]){H.push(P);return true}})}return new h(H)},args:[{}],ret:"node-set"},"local-name":{fn:function(H){var I,G="";if(arguments.length==0){H=new h([this.node])}if(H.toNodeSet().length>0){H.sortDocumentOrder();I=nodeExpandedName.call(this,H.value[0]);if(I!==false){G=I.name}}return new z(G)},args:[{t:"node-set",r:false}],ret:"string"},"namespace-uri":{fn:function(G){var I,H="";if(arguments.length==0){G=new h([this.node])}if(G.toNodeSet().length>0){G.sortDocumentOrder();I=nodeExpandedName.call(this,G.value[0]);if(I!==false&&I.ns!==null){H=I.ns}}return new z(H)},args:[{t:"node-set",r:false}],ret:"string"},name:{fn:function(G){var I,H="";if(arguments.length==0){G=new h([this.node])}if(G.toNodeSet().length>0){G.sortDocumentOrder();I=nodeExpandedName.call(this,G.value[0]);if(I!==false){H=(I.prefix&&I.prefix.length>0)?I.prefix+":"+I.name:I.name}}return new z(H)},args:[{t:"node-set",r:false}],ret:"string"},string:{fn:function(G){if(arguments.length==0){G=new h([this.node],"document-order")}return new z(G.toString())},args:[{t:"object",r:false}],ret:"string"},concat:{fn:function(J,H){var G,I="";for(G=0;G<arguments.length;G++){I+=arguments[G].toString()}return new z(I)},args:[{t:"string"},{t:"string"},{t:"string",r:false,rep:true}],ret:"string"},"starts-with":{fn:function(G,H){return new D(G.toString().substr(0,(H=H.toString()).length)==H)},args:[{t:"string"},{t:"string"}],ret:"string"},contains:{fn:function(G,H){return new D(G.toString().indexOf(H=H.toString())!=-1)},args:[{t:"string"},{t:"string"}],ret:"string"},"substring-before":{fn:function(G,H){G=G.toString();H=G.indexOf(H.toString());return new z(H==-1?"":G.substr(0,H))},args:[{t:"string"},{t:"string"}],ret:"string"},"substring-after":{fn:function(G,H){var I;G=G.toString();H=H.toString();I=G.indexOf(H);return new z(I==-1?"":G.substr(I+H.length))},args:[{t:"string"},{t:"string"}],ret:"string"},substring:{fn:function(H,I,G){H=H.toString();I=Math.round(I.toNumber())-1;return new z(isNaN(I)?"":((arguments.length==2)?H.substring(I<0?0:I):H.substring(I<0?0:I,I+Math.round(G.toNumber()))))},args:[{t:"string"},{t:"number"},{t:"number",r:false}],ret:"string"},"string-length":{fn:function(G){G=(arguments.length==0)?nodeStringValue(this.node):G.toString();return new A(G.length)},args:[{t:"string",r:false}],ret:"number"},"normalize-space":{fn:function(G){G=(arguments.length==0)?nodeStringValue(this.node):G.toString();return new z(G.replace(/^[\u0020\u0009\u000D\u000A]+/,"").replace(/[\u0020\u0009\u000D\u000A]+$/,"").replace(/[\u0020\u0009\u000D\u000A]+/g," "))},args:[{t:"string",r:false}],ret:"string"},translate:{fn:function(M,L,K){var H="",J,I,G;M=M.toString();L=L.toString();K=K.toString();for(J=0;J<M.length;J++){if((I=L.indexOf(G=M.charAt(J)))==-1||(G=K.charAt(I))){H+=G}}return new z(H)},args:[{t:"string"},{t:"string"},{t:"string"}],ret:"string"},"boolean":{fn:function(G){return new D(G.toBoolean())},args:[{r:true}],ret:"boolean"},not:{fn:function(G){return new D(!G.toBoolean())},args:[{t:"boolean"}],ret:"boolean"},"true":{fn:function(){return new D(true)},ret:"boolean"},"false":{fn:function(){return new D(false)},ret:"boolean"},lang:{fn:function(M){var G=this.node,K,N,P,O=M.toString().toLowerCase().split("-"),H,L,J,I;for(;G.nodeType!=9;G=f(G)){K=nodeAttribute(G);for(L=0;L<K.length;L++){N=K[L].nodeName.split(":");if(N.length===1){N[1]=N[0];N[0]=""}if(N[1]=="lang"){P=K[L].nodeValue.toLowerCase().split("-");if(P.length<O.length){continue}I=true;for(J=0;J<O.length;J++){if(O[J]!=P[J]){I=false;break}}if(I){H=nodeNamespace.call(this,G);for(J=0;J<H.length;J++){if(H[J].prefix==N[0]&&H[J].nodeValue==d){return new D(true)}}}}}}return new D(false)},args:[{t:"string"}],ret:"boolean"},number:{fn:function(G){if(arguments.length==0){G=new h([this.node],"document-order")}return new A(G.toNumber())},args:[{t:"object",r:false}],ret:"number"},sum:{fn:function(G){var H,I=0;G=G.toNodeSet();for(H=0;H<G.length;H++){I+=(new z(nodeStringValue(G[H]))).toNumber()}return new A(I)},args:[{t:"node-set"}],ret:"number"},floor:{fn:function(G){return new A(Math.floor(G))},args:[{t:"number"}],ret:"number"},ceiling:{fn:function(G){return new A(Math.ceil(G))},args:[{t:"number"}],ret:"number"},round:{fn:function(G){return new A(Math.round(G))},args:[{t:"number"}],ret:"number"},sum_jr:{fn:function(G){var H,I;sum=0;G=G.toNodeSet();for(H=0;H<G.length;H++){I=(nodeStringValue(G[H])=="")?"0":nodeStringValue(G[H]);sum+=(new z(I)).toNumber()}return new A(sum)},args:[{t:"node-set"}],ret:"number"},selected:{fn:function(I,J){var H,G;J=J.toString().trim();G=I.toString();return new D((" "+G+" ").indexOf(" "+J+" ")!=-1)},args:[{t:"object"},{t:"string"}],ret:"boolean"},"count-selected":{fn:function(H){var G=[];H=H.toNodeSet();if(H.length>0){G=nodeStringValue(H[0]).trim().split(" ");return(G.length==1&&G[0]==="")?new A(0):new A(G.length)}return new A(0)},args:[{t:"node-set"}],ret:"number"},checklist:{fn:function(K,G,H){var J,I,L=0;K=K.toNumber();G=G.toNumber();for(J=2;J<arguments.length;J++){if(arguments[J] instanceof h){for(I=0;I<arguments[J].stringValues().length;I++){if(arguments[J].stringValues()[I].toBoolean()===true){L++}}}else{if(arguments[J].toBoolean()===true){L++}}}return new D((K<0||L>=K)&&(G<0||L<=G))},args:[{t:"number"},{t:"number"},{t:"object"},{t:"object",r:false,rep:true}],ret:"boolean"},"boolean-from-string":{fn:function(G){return new D(G.toString().toLowerCase()==="true"||String(G)==="1")},args:[{t:"string"}],ret:"boolean"},"if":{fn:function(I,H,G){return(I.toBoolean()?H:G)},args:[{t:"object"},{t:"object"},{t:"object"}],ret:"object"},date:{fn:function(G){return new DateType(G.toDate())},args:[{t:"object"}],ret:"string"},today:{fn:function(){var G=new Date();return new DateType(new Date(G.getFullYear(),G.getMonth(),G.getDate()))},ret:"string"},now:{fn:function(){return new DateType(new Date())},ret:"string"},regex:{fn:function(J,I){var H,G;H=J.toString();G=new RegExp(I);return new D(G.test(H))},args:[{t:"object"},{t:"string"}],ret:"boolean"}}};q=function(H,G){if(typeof E[G.type]!="function"){throw new Error("Internal Error: Expression type does not exist: "+G.type)}return E[G.type].apply(H,G.args)};u=function(G,H,I){switch(H){case u.NUMBER_TYPE:this.resultType=u.NUMBER_TYPE;this.numberValue=I.toNumber();break;case u.STRING_TYPE:this.resultType=u.STRING_TYPE;this.stringValue=I.toString();break;case u.BOOLEAN_TYPE:this.resultType=u.BOOLEAN_TYPE;this.booleanValue=I.toBoolean();break;case u.UNORDERED_NODE_ITERATOR_TYPE:case u.ORDERED_NODE_ITERATOR_TYPE:case u.UNORDERED_NODE_SNAPSHOT_TYPE:case u.ORDERED_NODE_SNAPSHOT_TYPE:case u.ANY_UNORDERED_NODE_TYPE:case u.FIRST_ORDERED_NODE_TYPE:if(!I instanceof h){throw new Error('Expected result of type "node-set", got: "'+I.type+'"')}this.resultType=H;switch(H){case u.UNORDERED_NODE_ITERATOR_TYPE:case u.UNORDERED_NODE_SNAPSHOT_TYPE:this._value=I.toNodeSet();this.snapshotLength=this._value.length;break;case u.ORDERED_NODE_ITERATOR_TYPE:case u.ORDERED_NODE_SNAPSHOT_TYPE:I.sortDocumentOrder();this._value=I.toNodeSet();this.snapshotLength=this._value.length;break;case u.ANY_UNORDERED_NODE_TYPE:I=I.toNodeSet();this.singleNodeValue=(I.length)?I[0]:null;break;case u.FIRST_ORDERED_NODE_TYPE:I.sortDocumentOrder();I=I.toNodeSet();this.singleNodeValue=(I.length)?I[0]:null;break;default:throw new y(y.TYPE_ERR,"XPath result type not supported. (type: "+H+")");break}break;default:throw new y(y.TYPE_ERR,"XPath result type not supported. (type: "+H+")");break}};u.factory=function(H,I,J){var G;if(I!==u.ANY_TYPE){return new u(H,I,J)}if(J instanceof h){G=new u(H,u.UNORDERED_NODE_ITERATOR_TYPE,J)}else{if(J instanceof A){G=new u(H,u.NUMBER_TYPE,J)}else{if(J instanceof D){G=new u(H,u.BOOLEAN_TYPE,J)}else{if(J instanceof z){G=new u(H,u.STRING_TYPE,J)}else{throw new y(y.TYPE_ERR,"Internal Error: Unsupported value type: "+typeof J)}}}}return G};u.prototype={resultType:null,numberValue:null,stringValue:null,booleanValue:null,singleNodeValue:null,invalidIteratorState:null,snapshotLength:null,_iteratorIndex:0,iterateNext:function(){if(this.resultType!=u.UNORDERED_NODE_ITERATOR_TYPE&&this.resultType!=u.ORDERED_NODE_ITERATOR_TYPE){throw new y(y.TYPE_ERR,"iterateNext() method may only be used with results of type UNORDERED_NODE_ITERATOR_TYPE or ORDERED_NODE_ITERATOR_TYPE")}if(this._iteratorIndex<this._value.length){return this._value[this._iteratorIndex++]}return null},snapshotItem:function(G){if(this.resultType!=u.UNORDERED_NODE_SNAPSHOT_TYPE&&this.resultType!=u.ORDERED_NODE_SNAPSHOT_TYPE){throw new y(y.TYPE_ERR,"snapshotItem() method may only be used with results of type UNORDERED_NODE_SNAPSHOT_TYPE or ORDERED_NODE_SNAPSHOT_TYPE")}return this._value[G]}};u.ANY_TYPE=0;u.NUMBER_TYPE=1;u.STRING_TYPE=2;u.BOOLEAN_TYPE=3;u.UNORDERED_NODE_ITERATOR_TYPE=4;u.ORDERED_NODE_ITERATOR_TYPE=5;u.UNORDERED_NODE_SNAPSHOT_TYPE=6;u.ORDERED_NODE_SNAPSHOT_TYPE=7;u.ANY_UNORDERED_NODE_TYPE=8;u.FIRST_ORDERED_NODE_TYPE=9;B=function(I,G,H){if(H.nodeType!=1){throw new Error("Internal Error: XPathNamespace owner element must be an Element node.")}this.ownerElement=H;this.ownerDocument=H.ownerDocument;this.nodeName="#namespace";this.prefix=I;this.localName=I;this.nodeType=B.XPATH_NAMESPACE_NODE;this.namespaceURI=G;this.nodeValue=G};B.XPATH_NAMESPACE_NODE=13;c={XPathException:y,XPathEvaluator:t,XPathNSResolver:b,XPathExpression:o,XPathResult:u,XPathNamespace:B,getCurrentDomLevel3XPathBindings:function(){return{window:{XPathException:window.XPathException,XPathExpression:window.XPathExpression,XPathNSResolver:window.XPathNSResolver,XPathResult:window.XPathResult,XPathNamespace:window.XPathNamespace},document:{createExpression:document.createExpression,createNSResolver:document.createNSResolver,evaluate:document.evaluate}}},createDomLevel3XPathBindings:function(G){var H=new t(G);return{window:{XPathException:y,XPathExpression:o,XPathNSResolver:b,XPathResult:u,XPathNamespace:B},document:{createExpression:function(){return H.createExpression.apply(H,arguments)},createNSResolver:function(){return H.createNSResolver.apply(H,arguments)},evaluate:function(){return H.evaluate.apply(H,arguments)}}}},bindDomLevel3XPath:function(J){var H=(J||c.createDomLevel3XPathBindings()),I=c.getCurrentDomLevel3XPathBindings(),G;for(G in H.window){window[G]=H.window[G]}for(G in H.document){document[G]=H.document[G]}return I}};return c})();XPathJS._parser=(function(){function b(c){return'"'+c.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g,escape)+'"'}var a={parse:function(f,q){var e={XPath:F,LocationPath:o,AbsoluteLocationPath:ag,RelativeLocationPath:D,Step:A,AxisSpecifier:W,AxisName:c,NodeTest:p,Predicate:J,AbbreviatedAbsoluteLocationPath:ak,AbbreviatedStep:R,AbbreviatedAxisSpecifier:ac,Expr:L,PrimaryExpr:K,FunctionCall:ad,UnionExpr:af,PathExpr:x,FilterExpr:r,OrExpr:S,AndExpr:n,EqualityExpr:ai,RelationalExpr:w,AdditiveExpr:k,MultiplicativeExpr:d,UnaryExpr:B,Literal:ap,Number:am,Digits:ah,MultiplyOperator:ae,FunctionName:m,VariableReference:O,NameTest:T,NodeType:ao,S:U,_:P,QName:ab,PrefixedName:z,UnprefixedName:v,NCName:I,NameStartChar:C,NameChar:t,Name:g};if(q!==undefined){if(e[q]===undefined){throw new Error("Invalid rule name: "+b(q)+".")}}else{q="XPath"}var M=0;var Z=0;var h=0;var s=[];function aj(ar,aw,au){var aq=ar;var av=au-ar.length;for(var at=0;at<av;at++){aq=aw+aq}return aq}function E(at){var ar=at.charCodeAt(0);var aq;var au;if(ar<=255){aq="x";au=2}else{aq="u";au=4}return"\\"+aq+aj(ar.toString(16).toUpperCase(),"0",au)}function u(aq){if(M<h){return}if(M>h){h=M;s=[]}s.push(aq)}function F(){var au,ar,aq;var av,at;av=M;at=M;au=P();if(au!==null){ar=L();if(ar!==null){aq=P();if(aq!==null){au=[au,ar,aq]}else{au=null;M=at}}else{au=null;M=at}}else{au=null;M=at}if(au!==null){au=(function(ax,aw){return{tree:aw,nsPrefixes:N}})(av,au[1])}if(au===null){M=av}return au}function o(){var aq;aq=D();if(aq===null){aq=ag()}return aq}function ag(){var av,at,aq;var aw,au,ar;av=ak();if(av===null){aw=M;au=M;if(f.charCodeAt(M)===47){av="/";M++}else{av=null;if(Z===0){u('"/"')}}if(av!==null){ar=M;at=P();if(at!==null){aq=D();if(aq!==null){at=[at,aq]}else{at=null;M=ar}}else{at=null;M=ar}at=at!==null?at:"";if(at!==null){av=[av,at]}else{av=null;M=au}}else{av=null;M=au}if(av!==null){av=(function(ay,ax){return{type:"/",args:[null,(ax)?ax[1]:null]}})(aw,av[1])}if(av===null){M=aw}}return av}function D(){var aw,av,au,at,ar,aq;var az,ay,ax;az=M;ay=M;aw=A();if(aw!==null){av=[];ax=M;au=P();if(au!==null){if(f.substr(M,2)==="//"){at="//";M+=2}else{at=null;if(Z===0){u('"//"')}}if(at===null){if(f.charCodeAt(M)===47){at="/";M++}else{at=null;if(Z===0){u('"/"')}}}if(at!==null){ar=P();if(ar!==null){aq=A();if(aq!==null){au=[au,at,ar,aq]}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}while(au!==null){av.push(au);ax=M;au=P();if(au!==null){if(f.substr(M,2)==="//"){at="//";M+=2}else{at=null;if(Z===0){u('"//"')}}if(at===null){if(f.charCodeAt(M)===47){at="/";M++}else{at=null;if(Z===0){u('"/"')}}}if(at!==null){ar=P();if(ar!==null){aq=A();if(aq!==null){au=[au,at,ar,aq]}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}if(av!==null){aw=[aw,av]}else{aw=null;M=ay}}else{aw=null;M=ay}if(aw!==null){aw=(function(aD,aB,aC){var aA;for(aA=0;aA<aC.length;aA++){aB=an(aC[aA][1],aB,aC[aA][3])}return aB})(az,aw[0],aw[1])}if(aw===null){M=az}return aw}function A(){var aw,av,au,at,ar,aq;var az,ay,ax;az=M;ay=M;aw=W();if(aw!==null){av=P();if(av!==null){au=p();if(au!==null){at=[];ax=M;ar=P();if(ar!==null){aq=J();if(aq!==null){ar=[ar,aq]}else{ar=null;M=ax}}else{ar=null;M=ax}while(ar!==null){at.push(ar);ax=M;ar=P();if(ar!==null){aq=J();if(aq!==null){ar=[ar,aq]}else{ar=null;M=ax}}else{ar=null;M=ax}}if(at!==null){aw=[aw,av,au,at]}else{aw=null;M=ay}}else{aw=null;M=ay}}else{aw=null;M=ay}}else{aw=null;M=ay}if(aw!==null){aw=(function(aD,aB,aC,aA){return j({type:"step",args:[aB,aC]},aB,aA,1)})(az,aw[0],aw[2],aw[3])}if(aw===null){M=az}if(aw===null){aw=R()}return aw}function W(){var au,ar,aq;var av,at;av=M;at=M;au=c();if(au!==null){ar=P();if(ar!==null){if(f.substr(M,2)==="::"){aq="::";M+=2}else{aq=null;if(Z===0){u('"::"')}}if(aq!==null){au=[au,ar,aq]}else{au=null;M=at}}else{au=null;M=at}}else{au=null;M=at}if(au!==null){au=(function(ax,aw){return aw})(av,au[0])}if(au===null){M=av}if(au===null){av=M;au=ac();if(au!==null){au=(function(ax,aw){return(aw.length)?aw:"child"})(av,au)}if(au===null){M=av}}return au}function c(){var aq;if(f.substr(M,16)==="ancestor-or-self"){aq="ancestor-or-self";M+=16}else{aq=null;if(Z===0){u('"ancestor-or-self"')}}if(aq===null){if(f.substr(M,8)==="ancestor"){aq="ancestor";M+=8}else{aq=null;if(Z===0){u('"ancestor"')}}if(aq===null){if(f.substr(M,9)==="attribute"){aq="attribute";M+=9}else{aq=null;if(Z===0){u('"attribute"')}}if(aq===null){if(f.substr(M,5)==="child"){aq="child";M+=5}else{aq=null;if(Z===0){u('"child"')}}if(aq===null){if(f.substr(M,18)==="descendant-or-self"){aq="descendant-or-self";M+=18}else{aq=null;if(Z===0){u('"descendant-or-self"')}}if(aq===null){if(f.substr(M,10)==="descendant"){aq="descendant";M+=10}else{aq=null;if(Z===0){u('"descendant"')}}if(aq===null){if(f.substr(M,17)==="following-sibling"){aq="following-sibling";M+=17}else{aq=null;if(Z===0){u('"following-sibling"')}}if(aq===null){if(f.substr(M,9)==="following"){aq="following";M+=9}else{aq=null;if(Z===0){u('"following"')}}if(aq===null){if(f.substr(M,9)==="namespace"){aq="namespace";M+=9}else{aq=null;if(Z===0){u('"namespace"')}}if(aq===null){if(f.substr(M,6)==="parent"){aq="parent";M+=6}else{aq=null;if(Z===0){u('"parent"')}}if(aq===null){if(f.substr(M,17)==="preceding-sibling"){aq="preceding-sibling";M+=17}else{aq=null;if(Z===0){u('"preceding-sibling"')}}if(aq===null){if(f.substr(M,9)==="preceding"){aq="preceding";M+=9}else{aq=null;if(Z===0){u('"preceding"')}}if(aq===null){if(f.substr(M,4)==="self"){aq="self";M+=4}else{aq=null;if(Z===0){u('"self"')}}}}}}}}}}}}}}return aq}function p(){var ax,aw,av,au,at,ar,aq;var az,ay;az=M;ay=M;ax=ao();if(ax!==null){aw=P();if(aw!==null){if(f.charCodeAt(M)===40){av="(";M++}else{av=null;if(Z===0){u('"("')}}if(av!==null){au=P();if(au!==null){if(f.charCodeAt(M)===41){at=")";M++}else{at=null;if(Z===0){u('")"')}}if(at!==null){ax=[ax,aw,av,au,at]}else{ax=null;M=ay}}else{ax=null;M=ay}}else{ax=null;M=ay}}else{ax=null;M=ay}}else{ax=null;M=ay}if(ax!==null){ax=(function(aB,aA){return{type:"nodeType",args:[aA,[]]}})(az,ax[0])}if(ax===null){M=az}if(ax===null){az=M;ay=M;if(f.substr(M,22)==="processing-instruction"){ax="processing-instruction";M+=22}else{ax=null;if(Z===0){u('"processing-instruction"')}}if(ax!==null){aw=P();if(aw!==null){if(f.charCodeAt(M)===40){av="(";M++}else{av=null;if(Z===0){u('"("')}}if(av!==null){au=P();if(au!==null){at=ap();if(at!==null){ar=P();if(ar!==null){if(f.charCodeAt(M)===41){aq=")";M++}else{aq=null;if(Z===0){u('")"')}}if(aq!==null){ax=[ax,aw,av,au,at,ar,aq]}else{ax=null;M=ay}}else{ax=null;M=ay}}else{ax=null;M=ay}}else{ax=null;M=ay}}else{ax=null;M=ay}}else{ax=null;M=ay}}else{ax=null;M=ay}if(ax!==null){ax=(function(aC,aB,aA){return{type:"nodeType",args:[aB,[aA]]}})(az,ax[0],ax[4])}if(ax===null){M=az}if(ax===null){az=M;ax=T();if(ax!==null){ax=(function(aB,aA){return aA})(az,ax)}if(ax===null){M=az}}}return ax}function J(){var aw,au,at,ar,aq;var ax,av;ax=M;av=M;if(f.charCodeAt(M)===91){aw="[";M++}else{aw=null;if(Z===0){u('"["')}}if(aw!==null){au=P();if(au!==null){at=L();if(at!==null){ar=P();if(ar!==null){if(f.charCodeAt(M)===93){aq="]";M++}else{aq=null;if(Z===0){u('"]"')}}if(aq!==null){aw=[aw,au,at,ar,aq]}else{aw=null;M=av}}else{aw=null;M=av}}else{aw=null;M=av}}else{aw=null;M=av}}else{aw=null;M=av}if(aw!==null){aw=(function(az,ay){return ay})(ax,aw[2])}if(aw===null){M=ax}return aw}function ak(){var au,ar,aq;var av,at;av=M;at=M;if(f.substr(M,2)==="//"){au="//";M+=2}else{au=null;if(Z===0){u('"//"')}}if(au!==null){ar=P();if(ar!==null){aq=D();if(aq!==null){au=[au,ar,aq]}else{au=null;M=at}}else{au=null;M=at}}else{au=null;M=at}if(au!==null){au=(function(ax,aw){return an("//",null,aw)})(av,au[2])}if(au===null){M=av}return au}function R(){var aq;var ar;ar=M;if(f.substr(M,2)===".."){aq="..";M+=2}else{aq=null;if(Z===0){u('".."')}}if(aq===null){if(f.charCodeAt(M)===46){aq=".";M++}else{aq=null;if(Z===0){u('"."')}}}if(aq!==null){aq=(function(av,au){var at={type:"step",args:["self",{type:"nodeType",args:["node",[]]}]};if(au==".."){at.args[0]="parent"}return at})(ar,aq)}if(aq===null){M=ar}return aq}function ac(){var aq;var ar;ar=M;if(f.charCodeAt(M)===64){aq="@";M++}else{aq=null;if(Z===0){u('"@"')}}aq=aq!==null?aq:"";if(aq!==null){aq=(function(au,at){return(at)?"attribute":""})(ar,aq)}if(aq===null){M=ar}return aq}function L(){var aq;var ar;ar=M;aq=S();if(aq!==null){aq=(function(au,at){return at})(ar,aq)}if(aq===null){M=ar}return aq}function K(){var aw,au,at,ar,aq;var ax,av;ax=M;aw=O();if(aw!==null){aw=(function(az,ay){return ay})(ax,aw)}if(aw===null){M=ax}if(aw===null){ax=M;av=M;if(f.charCodeAt(M)===40){aw="(";M++}else{aw=null;if(Z===0){u('"("')}}if(aw!==null){au=P();if(au!==null){at=L();if(at!==null){ar=P();if(ar!==null){if(f.charCodeAt(M)===41){aq=")";M++}else{aq=null;if(Z===0){u('")"')}}if(aq!==null){aw=[aw,au,at,ar,aq]}else{aw=null;M=av}}else{aw=null;M=av}}else{aw=null;M=av}}else{aw=null;M=av}}else{aw=null;M=av}if(aw!==null){aw=(function(az,ay){return ay})(ax,aw[2])}if(aw===null){M=ax}if(aw===null){ax=M;aw=ap();if(aw!==null){aw=(function(az,ay){return ay})(ax,aw)}if(aw===null){M=ax}if(aw===null){ax=M;aw=am();if(aw!==null){aw=(function(ay,az){return az})(ax,aw)}if(aw===null){M=ax}if(aw===null){aw=ad()}}}}return aw}function ad(){var ay,ax,aw,av,au,at,ar,aq,aE,aD;var aC,aB,aA,az;aC=M;aB=M;ay=m();if(ay!==null){ax=P();if(ax!==null){if(f.charCodeAt(M)===40){aw="(";M++}else{aw=null;if(Z===0){u('"("')}}if(aw!==null){aA=M;av=P();if(av!==null){au=L();if(au!==null){at=[];az=M;ar=P();if(ar!==null){if(f.charCodeAt(M)===44){aq=",";M++}else{aq=null;if(Z===0){u('","')}}if(aq!==null){aE=P();if(aE!==null){aD=L();if(aD!==null){ar=[ar,aq,aE,aD]}else{ar=null;M=az}}else{ar=null;M=az}}else{ar=null;M=az}}else{ar=null;M=az}while(ar!==null){at.push(ar);az=M;ar=P();if(ar!==null){if(f.charCodeAt(M)===44){aq=",";M++}else{aq=null;if(Z===0){u('","')}}if(aq!==null){aE=P();if(aE!==null){aD=L();if(aD!==null){ar=[ar,aq,aE,aD]}else{ar=null;M=az}}else{ar=null;M=az}}else{ar=null;M=az}}else{ar=null;M=az}}if(at!==null){av=[av,au,at]}else{av=null;M=aA}}else{av=null;M=aA}}else{av=null;M=aA}av=av!==null?av:"";if(av!==null){au=P();if(au!==null){if(f.charCodeAt(M)===41){at=")";M++}else{at=null;if(Z===0){u('")"')}}if(at!==null){ay=[ay,ax,aw,av,au,at]}else{ay=null;M=aB}}else{ay=null;M=aB}}else{ay=null;M=aB}}else{ay=null;M=aB}}else{ay=null;M=aB}}else{ay=null;M=aB}if(ay!==null){ay=(function(aJ,aH,aF){var aI,aG=[];if(aF){aG.push(aF[1]);for(aI=0;aI<aF[2].length;aI++){aG.push(aF[2][aI][3])}}return{type:"function",args:[aH,aG]}})(aC,ay[0],ay[3])}if(ay===null){M=aC}return ay}function af(){var aw,av,au,at,ar,aq;var az,ay,ax;az=M;ay=M;aw=x();if(aw!==null){av=[];ax=M;au=P();if(au!==null){if(f.charCodeAt(M)===124){at="|";M++}else{at=null;if(Z===0){u('"|"')}}if(at!==null){ar=P();if(ar!==null){aq=x();if(aq!==null){au=[au,at,ar,aq]}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}while(au!==null){av.push(au);ax=M;au=P();if(au!==null){if(f.charCodeAt(M)===124){at="|";M++}else{at=null;if(Z===0){u('"|"')}}if(at!==null){ar=P();if(ar!==null){aq=x();if(aq!==null){au=[au,at,ar,aq]}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}if(av!==null){aw=[aw,av]}else{aw=null;M=ay}}else{aw=null;M=ay}if(aw!==null){aw=(function(aC,aA,aB){return al(aA,aB,1,3)})(az,aw[0],aw[1])}if(aw===null){M=az}return aw}function x(){var ax,av,at,ar,aq;var ay,aw,au;ay=M;aw=M;ax=r();if(ax!==null){au=M;av=P();if(av!==null){if(f.substr(M,2)==="//"){at="//";M+=2}else{at=null;if(Z===0){u('"//"')}}if(at===null){if(f.charCodeAt(M)===47){at="/";M++}else{at=null;if(Z===0){u('"/"')}}}if(at!==null){ar=P();if(ar!==null){aq=D();if(aq!==null){av=[av,at,ar,aq]}else{av=null;M=au}}else{av=null;M=au}}else{av=null;M=au}}else{av=null;M=au}av=av!==null?av:"";if(av!==null){ax=[ax,av]}else{ax=null;M=aw}}else{ax=null;M=aw}if(ax!==null){ax=(function(aB,aA,az){if(!az){return aA}return an(az[1],aA,az[3])})(ay,ax[0],ax[1])}if(ax===null){M=ay}if(ax===null){ay=M;ax=o();if(ax!==null){ax=(function(aA,az){return az})(ay,ax)}if(ax===null){M=ay}}return ax}function r(){var aw,au,ar,aq;var ax,av,at;ax=M;av=M;aw=K();if(aw!==null){au=[];at=M;ar=P();if(ar!==null){aq=J();if(aq!==null){ar=[ar,aq]}else{ar=null;M=at}}else{ar=null;M=at}while(ar!==null){au.push(ar);at=M;ar=P();if(ar!==null){aq=J();if(aq!==null){ar=[ar,aq]}else{ar=null;M=at}}else{ar=null;M=at}}if(au!==null){aw=[aw,au]}else{aw=null;M=av}}else{aw=null;M=av}if(aw!==null){aw=(function(aA,ay,az){return j(ay,"child",az,1)})(ax,aw[0],aw[1])}if(aw===null){M=ax}return aw}function S(){var aw,av,au,at,ar,aq;var az,ay,ax;az=M;ay=M;aw=n();if(aw!==null){av=[];ax=M;au=P();if(au!==null){if(f.substr(M,2)==="or"){at="or";M+=2}else{at=null;if(Z===0){u('"or"')}}if(at!==null){ar=P();if(ar!==null){aq=n();if(aq!==null){au=[au,at,ar,aq]}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}while(au!==null){av.push(au);ax=M;au=P();if(au!==null){if(f.substr(M,2)==="or"){at="or";M+=2}else{at=null;if(Z===0){u('"or"')}}if(at!==null){ar=P();if(ar!==null){aq=n();if(aq!==null){au=[au,at,ar,aq]}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}if(av!==null){aw=[aw,av]}else{aw=null;M=ay}}else{aw=null;M=ay}if(aw!==null){aw=(function(aC,aA,aB){return al(aA,aB,1,3)})(az,aw[0],aw[1])}if(aw===null){M=az}return aw}function n(){var aw,av,au,at,ar,aq;var az,ay,ax;az=M;ay=M;aw=ai();if(aw!==null){av=[];ax=M;au=P();if(au!==null){if(f.substr(M,3)==="and"){at="and";M+=3}else{at=null;if(Z===0){u('"and"')}}if(at!==null){ar=P();if(ar!==null){aq=ai();if(aq!==null){au=[au,at,ar,aq]}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}while(au!==null){av.push(au);ax=M;au=P();if(au!==null){if(f.substr(M,3)==="and"){at="and";M+=3}else{at=null;if(Z===0){u('"and"')}}if(at!==null){ar=P();if(ar!==null){aq=ai();if(aq!==null){au=[au,at,ar,aq]}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}if(av!==null){aw=[aw,av]}else{aw=null;M=ay}}else{aw=null;M=ay}if(aw!==null){aw=(function(aC,aA,aB){return al(aA,aB,1,3)})(az,aw[0],aw[1])}if(aw===null){M=az}return aw}function ai(){var aw,av,au,at,ar,aq;var az,ay,ax;az=M;ay=M;aw=w();if(aw!==null){av=[];ax=M;au=P();if(au!==null){if(f.charCodeAt(M)===61){at="=";M++}else{at=null;if(Z===0){u('"="')}}if(at===null){if(f.substr(M,2)==="!="){at="!=";M+=2}else{at=null;if(Z===0){u('"!="')}}}if(at!==null){ar=P();if(ar!==null){aq=w();if(aq!==null){au=[au,at,ar,aq]}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}while(au!==null){av.push(au);ax=M;au=P();if(au!==null){if(f.charCodeAt(M)===61){at="=";M++}else{at=null;if(Z===0){u('"="')}}if(at===null){if(f.substr(M,2)==="!="){at="!=";M+=2}else{at=null;if(Z===0){u('"!="')}}}if(at!==null){ar=P();if(ar!==null){aq=w();if(aq!==null){au=[au,at,ar,aq]}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}if(av!==null){aw=[aw,av]}else{aw=null;M=ay}}else{aw=null;M=ay}if(aw!==null){aw=(function(aC,aA,aB){return al(aA,aB,1,3)})(az,aw[0],aw[1])}if(aw===null){M=az}return aw}function w(){var aw,av,au,at,ar,aq;var az,ay,ax;az=M;ay=M;aw=k();if(aw!==null){av=[];ax=M;au=P();if(au!==null){if(f.substr(M,2)==="<="){at="<=";M+=2}else{at=null;if(Z===0){u('"<="')}}if(at===null){if(f.charCodeAt(M)===60){at="<";M++}else{at=null;if(Z===0){u('"<"')}}if(at===null){if(f.substr(M,2)===">="){at=">=";M+=2}else{at=null;if(Z===0){u('">="')}}if(at===null){if(f.charCodeAt(M)===62){at=">";M++}else{at=null;if(Z===0){u('">"')}}}}}if(at!==null){ar=P();if(ar!==null){aq=k();if(aq!==null){au=[au,at,ar,aq]}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}while(au!==null){av.push(au);ax=M;au=P();if(au!==null){if(f.substr(M,2)==="<="){at="<=";M+=2}else{at=null;if(Z===0){u('"<="')}}if(at===null){if(f.charCodeAt(M)===60){at="<";M++}else{at=null;if(Z===0){u('"<"')}}if(at===null){if(f.substr(M,2)===">="){at=">=";M+=2}else{at=null;if(Z===0){u('">="')}}if(at===null){if(f.charCodeAt(M)===62){at=">";M++}else{at=null;if(Z===0){u('">"')}}}}}if(at!==null){ar=P();if(ar!==null){aq=k();if(aq!==null){au=[au,at,ar,aq]}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}if(av!==null){aw=[aw,av]}else{aw=null;M=ay}}else{aw=null;M=ay}if(aw!==null){aw=(function(aC,aA,aB){return al(aA,aB,1,3)})(az,aw[0],aw[1])}if(aw===null){M=az}return aw}function k(){var aw,av,au,at,ar,aq;var az,ay,ax;az=M;ay=M;aw=d();if(aw!==null){av=[];ax=M;au=P();if(au!==null){if(f.charCodeAt(M)===43){at="+";M++}else{at=null;if(Z===0){u('"+"')}}if(at===null){if(f.charCodeAt(M)===45){at="-";M++}else{at=null;if(Z===0){u('"-"')}}}if(at!==null){ar=P();if(ar!==null){aq=d();if(aq!==null){au=[au,at,ar,aq]}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}while(au!==null){av.push(au);ax=M;au=P();if(au!==null){if(f.charCodeAt(M)===43){at="+";M++}else{at=null;if(Z===0){u('"+"')}}if(at===null){if(f.charCodeAt(M)===45){at="-";M++}else{at=null;if(Z===0){u('"-"')}}}if(at!==null){ar=P();if(ar!==null){aq=d();if(aq!==null){au=[au,at,ar,aq]}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}if(av!==null){aw=[aw,av]}else{aw=null;M=ay}}else{aw=null;M=ay}if(aw!==null){aw=(function(aC,aA,aB){return al(aA,aB,1,3)})(az,aw[0],aw[1])}if(aw===null){M=az}return aw}function d(){var aw,av,au,at,ar,aq;var az,ay,ax;az=M;ay=M;aw=B();if(aw!==null){av=[];ax=M;au=P();if(au!==null){at=ae();if(at===null){if(f.substr(M,3)==="div"){at="div";M+=3}else{at=null;if(Z===0){u('"div"')}}if(at===null){if(f.substr(M,3)==="mod"){at="mod";M+=3}else{at=null;if(Z===0){u('"mod"')}}}}if(at!==null){ar=P();if(ar!==null){aq=B();if(aq!==null){au=[au,at,ar,aq]}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}while(au!==null){av.push(au);ax=M;au=P();if(au!==null){at=ae();if(at===null){if(f.substr(M,3)==="div"){at="div";M+=3}else{at=null;if(Z===0){u('"div"')}}if(at===null){if(f.substr(M,3)==="mod"){at="mod";M+=3}else{at=null;if(Z===0){u('"mod"')}}}}if(at!==null){ar=P();if(ar!==null){aq=B();if(aq!==null){au=[au,at,ar,aq]}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}else{au=null;M=ax}}if(av!==null){aw=[aw,av]}else{aw=null;M=ay}}else{aw=null;M=ay}if(aw!==null){aw=(function(aC,aA,aB){return al(aA,aB,1,3)})(az,aw[0],aw[1])}if(aw===null){M=az}return aw}function B(){var au,ar,aq;var av,at;av=M;au=af();if(au!==null){au=(function(ax,aw){return aw})(av,au)}if(au===null){M=av}if(au===null){av=M;at=M;if(f.charCodeAt(M)===45){au="-";M++}else{au=null;if(Z===0){u('"-"')}}if(au!==null){ar=P();if(ar!==null){aq=B();if(aq!==null){au=[au,ar,aq]}else{au=null;M=at}}else{au=null;M=at}}else{au=null;M=at}if(au!==null){au=(function(ax,aw){return{type:"*",args:[{type:"number",args:[-1]},aw]}})(av,au[2])}if(au===null){M=av}}return au}function ap(){var au,ar,aq;var av,at;av=M;at=M;if(f.charCodeAt(M)===34){au='"';M++}else{au=null;if(Z===0){u('"\\""')}}if(au!==null){ar=[];if(/^[^"]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u('[^"]')}}while(aq!==null){ar.push(aq);if(/^[^"]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u('[^"]')}}}if(ar!==null){if(f.charCodeAt(M)===34){aq='"';M++}else{aq=null;if(Z===0){u('"\\""')}}if(aq!==null){au=[au,ar,aq]}else{au=null;M=at}}else{au=null;M=at}}else{au=null;M=at}if(au!==null){au=(function(ax,aw){return{type:"string",args:[aw.join("")]}})(av,au[1])}if(au===null){M=av}if(au===null){av=M;at=M;if(f.charCodeAt(M)===39){au="'";M++}else{au=null;if(Z===0){u('"\'"')}}if(au!==null){ar=[];if(/^[^']/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[^']")}}while(aq!==null){ar.push(aq);if(/^[^']/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[^']")}}}if(ar!==null){if(f.charCodeAt(M)===39){aq="'";M++}else{aq=null;if(Z===0){u('"\'"')}}if(aq!==null){au=[au,ar,aq]}else{au=null;M=at}}else{au=null;M=at}}else{au=null;M=at}if(au!==null){au=(function(ax,aw){return{type:"string",args:[aw.join("")]}})(av,au[1])}if(au===null){M=av}}return au}function am(){var av,at,aq;var aw,au,ar;aw=M;au=M;av=ah();if(av!==null){ar=M;if(f.charCodeAt(M)===46){at=".";M++}else{at=null;if(Z===0){u('"."')}}if(at!==null){aq=ah();aq=aq!==null?aq:"";if(aq!==null){at=[at,aq]}else{at=null;M=ar}}else{at=null;M=ar}at=at!==null?at:"";if(at!==null){av=[av,at]}else{av=null;M=au}}else{av=null;M=au}if(av!==null){av=(function(az,ay,ax){return{type:"number",args:[(ax)?parseFloat(ay+"."+ax[1]):parseInt(ay)]}})(aw,av[0],av[1])}if(av===null){M=aw}if(av===null){aw=M;au=M;if(f.charCodeAt(M)===46){av=".";M++}else{av=null;if(Z===0){u('"."')}}if(av!==null){at=ah();if(at!==null){av=[av,at]}else{av=null;M=au}}else{av=null;M=au}if(av!==null){av=(function(ay,ax){return{type:"number",args:[parseFloat("."+ax)]}})(aw,av[1])}if(av===null){M=aw}}return av}function ah(){var ar,aq;var at;at=M;if(/^[0-9]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[0-9]")}}if(aq!==null){ar=[];while(aq!==null){ar.push(aq);if(/^[0-9]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[0-9]")}}}}else{ar=null}if(ar!==null){ar=(function(av,au){return au.join("")})(at,ar)}if(ar===null){M=at}return ar}function ae(){var aq;if(f.charCodeAt(M)===42){aq="*";M++}else{aq=null;if(Z===0){u('"*"')}}return aq}function m(){var at,aq;var au,ar;au=M;ar=M;at=ab();if(at!==null){aq=(function(ax,av){var aw;if(V.args[0]===null){for(aw=0;aw<aa.length;aw++){if(V.args[1]==aa[aw]){return false}}}return true})(M,at)?"":null;if(aq!==null){at=[at,aq]}else{at=null;M=ar}}else{at=null;M=ar}if(at!==null){at=(function(aw,av){(av.args[0]==="")?av={type:av.type,args:[null,av.args[1]]}:X(av.args[0]);return av})(au,at[0])}if(at===null){M=au}return at}function O(){var at,aq;var au,ar;au=M;ar=M;if(f.charCodeAt(M)===36){at="$";M++}else{at=null;if(Z===0){u('"$"')}}if(at!==null){aq=ab();if(aq!==null){at=[at,aq]}else{at=null;M=ar}}else{at=null;M=ar}if(at!==null){at=(function(aw,av){X(av.args[0]);return{type:"$",args:[av]}})(au,at[1])}if(at===null){M=au}return at}function T(){var au,ar,aq;var av,at;av=M;if(f.charCodeAt(M)===42){au="*";M++}else{au=null;if(Z===0){u('"*"')}}if(au!==null){au=(function(aw){return{type:"name",args:[null,null]}})(av)}if(au===null){M=av}if(au===null){av=M;at=M;au=I();if(au!==null){if(f.charCodeAt(M)===58){ar=":";M++}else{ar=null;if(Z===0){u('":"')}}if(ar!==null){if(f.charCodeAt(M)===42){aq="*";M++}else{aq=null;if(Z===0){u('"*"')}}if(aq!==null){au=[au,ar,aq]}else{au=null;M=at}}else{au=null;M=at}}else{au=null;M=at}if(au!==null){au=(function(ax,aw){X(aw);return{type:"name",args:[aw,null]}})(av,au[0])}if(au===null){M=av}if(au===null){av=M;au=ab();if(au!==null){au=(function(ax,aw){X(aw.args[0]);return aw})(av,au)}if(au===null){M=av}}}return au}function ao(){var aq;if(f.substr(M,7)==="comment"){aq="comment";M+=7}else{aq=null;if(Z===0){u('"comment"')}}if(aq===null){if(f.substr(M,4)==="text"){aq="text";M+=4}else{aq=null;if(Z===0){u('"text"')}}if(aq===null){if(f.substr(M,22)==="processing-instruction"){aq="processing-instruction";M+=22}else{aq=null;if(Z===0){u('"processing-instruction"')}}if(aq===null){if(f.substr(M,4)==="node"){aq="node";M+=4}else{aq=null;if(Z===0){u('"node"')}}}}}return aq}function U(){var ar,aq;if(/^[ \t\r\n]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[ \\t\\r\\n]")}}if(aq!==null){ar=[];while(aq!==null){ar.push(aq);if(/^[ \t\r\n]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[ \\t\\r\\n]")}}}}else{ar=null}return ar}function P(){var aq;aq=U();aq=aq!==null?aq:"";return aq}function ab(){var aq;var ar;ar=M;aq=z();if(aq===null){aq=v()}if(aq!==null){aq=(function(au,at){V=at;return at})(ar,aq)}if(aq===null){M=ar}return aq}function z(){var au,ar,aq;var av,at;av=M;at=M;au=I();if(au!==null){if(f.charCodeAt(M)===58){ar=":";M++}else{ar=null;if(Z===0){u('":"')}}if(ar!==null){aq=I();if(aq!==null){au=[au,ar,aq]}else{au=null;M=at}}else{au=null;M=at}}else{au=null;M=at}if(au!==null){au=(function(ay,ax,aw){return{type:"name",args:[ax,aw]}})(av,au[0],au[2])}if(au===null){M=av}return au}function v(){var aq;var ar;ar=M;aq=I();if(aq!==null){aq=(function(au,at){return{type:"name",args:[null,at]}})(ar,aq)}if(aq===null){M=ar}return aq}function I(){var aq;aq=g();return aq}function C(){var aq;if(/^[A-Z]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[A-Z]")}}if(aq===null){if(f.charCodeAt(M)===95){aq="_";M++}else{aq=null;if(Z===0){u('"_"')}}if(aq===null){if(/^[a-z]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[a-z]")}}if(aq===null){if(/^[\xC0-\xD6]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[\\xC0-\\xD6]")}}if(aq===null){if(/^[\xD8-\xF6]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[\\xD8-\\xF6]")}}if(aq===null){if(/^[\xF8-\u02FF]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[\\xF8-\\u02FF]")}}if(aq===null){if(/^[\u0370-\u037D]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[\\u0370-\\u037D]")}}if(aq===null){if(/^[\u037F-\u1FFF]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[\\u037F-\\u1FFF]")}}if(aq===null){if(/^[\u200C-\u200D]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[\\u200C-\\u200D]")}}if(aq===null){if(/^[\u2070-\u218F]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[\\u2070-\\u218F]")}}if(aq===null){if(/^[\u2C00-\u2FEF]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[\\u2C00-\\u2FEF]")}}if(aq===null){if(/^[\u3001-\uD7FF]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[\\u3001-\\uD7FF]")}}if(aq===null){if(/^[\uF900-\uFDCF]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[\\uF900-\\uFDCF]")}}if(aq===null){if(/^[\uFDF0-\uFFFD]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[\\uFDF0-\\uFFFD]")}}}}}}}}}}}}}}}return aq}function t(){var aq;aq=C();if(aq===null){if(f.charCodeAt(M)===45){aq="-";M++}else{aq=null;if(Z===0){u('"-"')}}if(aq===null){if(f.charCodeAt(M)===46){aq=".";M++}else{aq=null;if(Z===0){u('"."')}}if(aq===null){if(/^[0-9]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[0-9]")}}if(aq===null){if(/^[\xB7]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[\\xB7]")}}if(aq===null){if(/^[\u0300-\u036F]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[\\u0300-\\u036F]")}}if(aq===null){if(/^[\u203F-\u2040]/.test(f.charAt(M))){aq=f.charAt(M);M++}else{aq=null;if(Z===0){u("[\\u203F-\\u2040]")}}}}}}}}return aq}function g(){var au,ar,aq;var av,at;av=M;at=M;au=C();if(au!==null){ar=[];aq=t();while(aq!==null){ar.push(aq);aq=t()}if(ar!==null){au=[au,ar]}else{au=null;M=at}}else{au=null;M=at}if(au!==null){au=(function(ay,aw,ax){return aw+ax.join("")})(av,au[0],au[1])}if(au===null){M=av}return au}function G(at){at.sort();var au=null;var ar=[];for(var aq=0;aq<at.length;aq++){if(at[aq]!==au){ar.push(at[aq]);au=at[aq]}}return ar}function H(){var aq=1;var au=1;var av=false;for(var ar=0;ar<Math.max(M,h);ar++){var at=f.charAt(ar);if(at==="\n"){if(!av){aq++}au=1;av=false}else{if(at==="\r"||at==="\u2028"||at==="\u2029"){aq++;au=1;av=true}else{au++;av=false}}}return{line:aq,column:au}}var al=function(ax,av,ar,aw){var au,at,aq={type:"",args:[]};aq.args.push(ax);for(au=0;au<av.length;au++){switch(typeof ar){case"string":aq.type=ar;break;case"object":aq.type=av[au][ar[0]];for(at=1;at<ar.length;at++){aq.type=aq.type[ar[at]]}break;default:aq.type=av[au][ar];break}aq.args.push((typeof aw=="undefined")?av[au]:av[au][aw]);aq={type:"",args:[aq]}}return aq.args[0]},j=function(au,at,aq,av){var ar=[];if(aq.length<1){return au}for(i=0;i<aq.length;i++){ar.push(aq[i][av])}return{type:"predicate",args:[at,au,ar]}},N=[],X=function(ar){var aq,at=false;if(ar===null){return}for(aq=0;aq<N.length;aq++){if(N[aq]===ar){at=true;break}}if(!at){N.push(ar)}},V,aa=["comment","text","processing-instruction","node"],an=function(ar,at,aq){if(ar=="/"){return{type:"/",args:[at,aq]}}return{type:"/",args:[{type:"/",args:[at,{type:"step",args:["descendant-or-self",{type:"nodeType",args:["node",[]]}]}]},aq]}};var y=e[q]();if(y===null||M!==f.length){var Q=Math.max(M,h);var l=Q<f.length?f.charAt(Q):null;var Y=H();throw new this.SyntaxError(G(s),l,Q,Y.line,Y.column)}return y},toSource:function(){return this._source}};a.SyntaxError=function(f,g,h,d,e){function c(l,m){var j,k;switch(l.length){case 0:j="end of input";break;case 1:j=l[0];break;default:j=l.slice(0,l.length-1).join(", ")+" or "+l[l.length-1]}k=m?b(m):"end of input";return"Expected "+j+" but "+k+" found."}this.name="SyntaxError";this.expected=f;this.found=g;this.message=c(f,g);this.offset=h;this.line=d;this.column=e};a.SyntaxError.prototype=Error.prototype;return a})();
(function() {

  if (!(window.console && console.log)) {
    (function() {
      var console, length, methods, noop, _results;
      noop = function() {};
      methods = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "markTimeline", "table", "time", "timeEnd", "timeStamp", "trace", "warn"];
      length = methods.length;
      console = window.console = {};
      _results = [];
      while (length--) {
        _results.push(console[methods[length]] = noop);
      }
      return _results;
    })();
  }

  window.log = function() {
    log.history = log.history || [];
    log.history.push(arguments_);
    if (this.console) {
      return console.log(Array.prototype.slice.call(arguments_));
    }
  };

}).call(this);
/**
 * @preserve Copyright 2012 Martijn van de Rijdt
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint browser:true, devel:true, jquery:true, smarttabs:true*//*global Modernizr, console:true*/
// CHANGE: it would be better to remove references to store and form in common.js
//
// Copyright 2012 Martijn van de Rijdt
/************ Global variables ***************/


var /**@type {GUI}*/ gui;

//form = null,
var DEFAULT_SETTINGS = {};
//var	_$pages; //getPage, addScrollBar, display, buttonArray, setSettings;
	//resetForm, setSettings, loadForm, deleteForm, saveForm,
// !Document.ready()
/************ Document Ready ****************/
$(document).ready(function(){
	"use strict";
	gui = new GUI();
	gui.init();
	// avoid windows console errors
	if (typeof console == "undefined") {console = {log: function(){}};}
	if (typeof (window.console.debug) == "undefined") {console.debug = console.log;}

	if (getGetVariable('debug') !== 'true'){
		window.console.log = function(){};
		window.console.debug = function(){};
	}
});

// !Global Functions
/************ Global Functions ***************/



/* !GUI Class */
//The GUI object deals with the main GUI elements (but not the survey form elements)
/**
 *
 * @constructor
 *
 * Function (Class): GUI
 *
 * description
 *
 * Returns:
 *
 *   return description
 */
function GUI(){
	"use strict";
	//var fbBar, //true if feedbackBar is shown
	//	page, //true if page is shown
	//	feedbackTimeout,
		//headerEl, feedbackEl, pageEl, confirmEl, alertEl, $form,
		//browserSupport = {'offline-launch':false, 'local-storage':false, 'fancy-visuals':false},
		//updateEditStatus,
		//_this=this;
		//$form = $('form.jr:eq(0)');
}

GUI.prototype.init = function(){
	"use strict";
	// setting up UI elements
	
	
	
	this.nav.setup();
	//setTabs();
	// setting consistent theme colors using a JQuery UI theme
	//this.setConsistentColors();
	this.pages().init();
	
	// setup eventHandlers
	this.setEventHandlers();
	// setup additional 'custom' eventHandlers declared other js file
	if (typeof this.setCustomEventHandlers === 'function'){
		this.setCustomEventHandlers();
	}
	
	// the settings are retrieved from storage and applied before the pages are removed from the DOM
	
			//tooltips on all elements with a title
	//$('[title]').tooltip();
	//$("[title]").tipTip();
	//$("[title]").tipsy({gravity: $.fn.tipsy.autoNS});
	$('.dialog [title]').tooltip();
	//transform comboboxes
	//$('#forms-saved-names').combobox();
	/*$('#forms-saved ol').selectable({
		stop: function() {
			var recordName;
			alert ($( ".ui-selected").text());
			$('ui-selected').removeClass('ui-selected');
			$(this).selectable('destroy');

		}
	});*/

	// checking for support for specific fancy css3 visual stuff
	if (Modernizr.borderradius && Modernizr.boxshadow && Modernizr.csstransitions && Modernizr.opacity){
		$(document).trigger('browsersupport', 'fancy-visuals');
	}

	$('footer').detach().appendTo('#container');
	//this.nav.reset();
};

GUI.prototype.setup = function(){
	"use strict";
	// final setup of GUI object
		//setSettings();
		// set height of scrollable container by calling resize event
		$(window).trigger('resize');
};


	
//	this.setBrowserSupport = function(propObj){
//		for (var propName in propObj){
//			browserSupport[propName] = propObj[propName];
//			//console.log('just set browser support property: '+propName+' to:'+propObj[propName]); // DEBUG
//		}
//	};
	
	
	// setting consistent theme colors, the purpose of using this function (instead of css stylesheet adjustments)
	// is to be able to easily switch to another jQuery UI theme
GUI.prototype.setConsistentColors = function(){
	"use strict";
	//$('body').removeClass('ui-widget-content'); //???????


	//var bodyBackgroundColor, pageBackgroundColor, headerHighlightColor, headerBorderColor, headerBackgroundColor, headerNavTextColor, //mainContentBackground,
//		buttonBackgroundColorDefault,buttonBackgroundColorHover, buttonBackgroundColorActive;
//	//colors used for different states in nav menu (see setEventHandlers())
//	headerHighlightColor = /** @type {string} */ $('#feedback-bar').css('background-color');
//	headerBorderColor =  /** @type {string} */ $('header').css('border-top-color');
//	headerBackgroundColor =  /** @type {string} */ $('header').css('background-color');
//	//mainContentBackground = $('body').addClass('ui-widget-content').css('background');
	

//	$('nav').addClass('ui-state-default'); //trick
//	headerNavTextColor =  /** @type {string} */ $('nav').css('color');
//	buttonBackgroundColorDefault =  /** @type {string} */ $('nav').css('background-color');
//	$('nav').addClass('ui-state-hover');
//	buttonBackgroundColorHover =  /** @type {string} */ $('nav').css('background-color');
//	$('nav').addClass('ui-state-active');
//	buttonBackgroundColorActive =  /** @type {string} */ $('nav').css('background-color');
//	$('nav').removeClass();
			
	//$('#logo').css('color', headerHighlightColor);

	//$('#page, #form-controls').css('background-image','none'); //CHANGE: DO THIS IN CSS STYLESHEET INSTEAD

	//$('#page, #component').css('color', headerHighlightColor);
	//$('#survey-info').css('color',headerBorderColor);

	//bodyBackgroundColor = /** @type {string} */ $('body').addClass('ui-widget-shadow').css('background-color');
	//$('body').css('background-color', bodyBackgroundColor).removeClass('ui-widget-shadow');
	//$('body').addClass('ui-widget-shadow') //trick
	//	.css('background-color', $('body').css('background-color'))
	//	.removeClass('ui-widget-shadow');
	//$('.question').css('border-color', $('body').css('background-color'));
	//pageBackgroundColor = /** @type {string} */ $('#page-content').addClass('ui-widget-overlay').css('background-color');
	//$('#page-content, #overlay').css('background-color', pageBackgroundColor).removeClass('ui-widget-overlay');
	//$('#page-content, #overlay').addClass('ui-widget-overlay') // trick
	//	.css('background-color', $('#page-content').css('background-color'))
	//	.removeClass('ui-widget-overlay');

	//all links in articles .page
	//$('.page a, .page a:link, .page a:visited').css('color', buttonBackgroundColorDefault)
//		.hover(function(){
//			$(this).css('color', buttonBackgroundColorHover);
//		}, function(){
//			$(this).css('color', buttonBackgroundColorDefault);
//		})
//		.mousedown(function(){
//			$(this).css('color', buttonBackgroundColorActive);
//		})
//		.mouseup(function(){
//			$(this).css('color', buttonBackgroundColorDefault);
//		});

	//form background on page with tabs
	//$('.tabs-nohdr .ui-tabs-panel').css('background-color', '#FEEEBD');

	//$('#export-excel').button({'icons': {'primary':"ui-icon-suitcase"}});

	//set navigation menu colors;
	
};
	
GUI.prototype.setEventHandlers = function(){
	"use strict";
	var that=this;
	
	// close 'buttons' on page and feedback bar
	$('#feedback-bar-close').button({'icons':{'primary': "ui-icon-closethick"}, 'text': false})
		.click(function(event){
			event.preventDefault();
			that.hideFeedback();
		});
	$('#page-close').button({'icons':{'primary': "ui-icon-closethick"}, 'text': false})
		.click(function(event){
			event.preventDefault();
			that.pages().close();
		});
	// override style of some buttons and give them a 'custom-button class'
	$('#feedback-bar-close, #page-close').removeClass().addClass('custom-button ui-widget-header ui-corner-all');
	
	// capture all internal links to navigation menu items (except the links in the navigation menu itself)
	$(document).on('click', 'a[href^="#"]:not([href="#"]):not(nav ul li a)', function(event){
		var href = $(this).attr('href');
		//console.log('captured click to nav page, href='+href);
		//if href is not just an empty anchor it is an internal link and will trigger a navigation menu click
		if (href !== '#'){
			event.preventDefault();
			$('nav li a[href="'+href+'"]').click();
		}
	});
	
	//particularly relevant in launch component where popstate is triggered when # is added to url
//	$(document).on('click', $('a[href="#"]'), function(event){
//		event.preventDefault();
//	});

	// event handlers for navigation menu
	$('nav ul li a[href^="#"]')
		.click(function(event){
			event.preventDefault();
			var targetPage = $(this).attr('href').substr(1);
			that.pages().open(targetPage);
			$(this).closest('li').addClass('nav-state-active');//.css('border-color', headerBorderColor);
			//$(this).css('color', headerHighlightColor);
		});
		//.hover(function(){
//;			$(this).closest('li').addClass('nav-state-hover');
//;			//$(this).css('color', buttonBackgroundColorHover);
//;			//$('nav ul li:not(.active)').css('border-color', headerBackgroundColor);
//;			//$(this).closest('li:not(.active)').css('border-color', headerHighlightColor)
//;				//.find('a').css('color', buttonBackgroundColorHover);
//;		}, function(){
//;			$(this).closest('li').removeClass('nav-state-hover');
//;			//$('nav ul li:not(.active)').css('border-color', headerBackgroundColor)
//;			//	.find('a').css('color', buttonBackgroundColorDefault);
//		});
	
	// handlers for status icons in header
	$(window).on('onlinestatuschange', function(e,online){
		that.updateStatus.connection(online);
		});

	$(document).on('edit', 'form.jr', function(event, status){
		//console.log('gui updating edit status icon');
		that.updateStatus.edit(status);
	});

	$(document).on('browsersupport', function(e, supported){
		that.updateStatus.support(supported);
	});

	$('#page, #feedback-bar').on('change', function(){
		that.display();
	});
			
	// more info on connection status after clicking icon
	$('header #status-connection')
		.click(function(event){
			that.showFeedback($(this).attr('title'));
			event.stopPropagation(); //prevent closing of simultaneously shown page when clicking icon
			//event.cancelBubble(); //IE
		});
		
	$(window).resize(function(){ //move this when feedback bar is shown?
		
		//console.log('resize event called, window width is '+$(window).width()); //DEBUG
		
		$('#container').css('top', $('header').outerHeight());
		
		// resizing scrollable container\
		$('body:not(.no-scroll) #container')
			.height($(window).height()-$('header').outerHeight()-$('#form-controls.bottom').outerHeight());
		
		// replacing form controls in mobile setting // REPLACE: SHOULD MOVE WITH CSS
		//$('body.no-scroll #form-controls')
		//	.css('height',$('#form-controls').height()).css('top', $('header').outerHeight()+$('#container').outerHeight());
		
		// hide logo if the navigation menu starts overlapping
		var navLeft = $('nav').offset().left;
		var logoRight = $('#logo').offset().left+$('#logo').outerWidth();
		//console.log('nav left:'+navLeft+' logo right:'+logoRight); // DEBUG
		if (navLeft < logoRight){
			$('#logo').css('visibility', 'hidden');
		}
		else {
			$('#logo').css('visibility', 'visible');
		}
					
	});
};
	
GUI.prototype.nav = {
	setup : function(){
		"use strict";
		$('article.page').each(function(){
			var display, title='', id, link;
			id=$(this).attr('id');
			if ($(this).attr('data-display')){
				display = $(this).attr('data-display');
			}
			else display = id;
			if ($(this).attr('data-title')){
				title = $(this).attr('data-title');
			}
			else title = id;
			if ($(this).attr('data-ext-link')){
				link = $(this).attr('data-ext-link');
			}
			else link = '#'+id;
			$('<li class="ui-corner-tl ui-corner-tr"><a href="'+link+'" title="'+title+'" >'+display+'</a></li>')
				.appendTo($('nav ul'));
		
		});
	},
	reset : function(){
		"use strict";
		$('nav ul li').removeClass('nav-state-active');//.css('border-color', headerBackgroundColor);
		//$('nav ul li a').css('color', buttonBackgroundColorDefault);
	}
};
	
	//function setTabs(){
	//	$('.main article').each(function(){
	//		var display, title='', id, link;
	//		id=$(this).attr('id');
	//		if ($(this).attr('data-display')){
	//			display = $(this).attr('data-display');
	//		}
	//		else display = id;
	//		if ($(this).attr('data-title')){
	//			title = $(this).attr('data-title');
	//		}
	//		else title = id;
	//		if ($(this).attr('data-ext-link')){
	//			link = $(this).attr('data-ext-link');
	//		}
	//		else link = '#'+id;
	//		$('<a href="'+link+'" title="'+title+'" >'+display+'</a>')
	//			.appendTo($('#tabs'));
	//	});
	//}
	//

GUI.prototype.pages = function(){
	"use strict";

	this.init = function(){

		//this.showing = false;
		this.$pages = $('<pages></pages>');// placeholder 'parent' element for the articles (pages)
		// detaching pages from DOM and storing them in the pages variable
		$('article.page').detach().appendTo(this.$pages);//.css('display','block');
	};

	this.get = function(name){

		var $page = this.$pages.find('article[id="'+name+'"]');//.clone(true);
		//switch(name){
		//	case 'records':
			//_this.updateRecordList(page); // ?? Why does call with this.up.. not work?
		//		break;
		//	case 'settings':
		//}
		$page = ($page.length > 0) ? $page : $('article[id="'+name+'"]');
		
		return $page ;
		//}
	};
		
	this.isShowing = function(name){
		//no name means any page
		var idSelector = (typeof name !== 'undefined') ? '[id="'+name+'"]' : '';
		return ( $('#page article.page'+idSelector).length > 0 );
	};
		
	this.open = function(pg){
		var $page;
		if (this.isShowing(pg)){
			return;
		}

		$page = this.get(pg);//outsidePage;
		//console.debug('opening page '+pg);
		
		if ($page.length !== 1){
			return console.error('page not found');
		}

		if(this.isShowing()){
			this.close();
		}
			
		$('#page-content').prepend($page.show()).trigger('change');
		$('#overlay').show();

		//for some reason, the scrollbar needs to be added after a short delay (default duration of show() maybe)
		//similarly adding the event handler needs to be done a delay otherwise it picks up an even(?) instantly
		//addScrollBar should be called each time page loads because record list will change
		setTimeout(function(){
			$page.find('.scroll-list').addScrollBar();
			$('#overlay, header').bind('click.pageEvents', function(){
				//triggers a click of the page close button
				$('#page-close').trigger('click');
			});
		}, 50);
		
		// if the page is visible as well as the feedbackbar the display() method should be called if the window is resized
		$(window).bind('resize.pageEvents', function(){
			$('#page').trigger('change');
		});
	};
		
	this.close = function(){
		var $page;
		//console.log('closePage() triggered');
		$page = $('#page .page').detach();
		this.$pages.append($page);
		$('#page').trigger('change');
		this.nav.reset();
		$('#overlay').hide();
		$('#overlay, header').unbind('.pageEvents');
		$(window).unbind('.pageEvents');
	};

	return this;
};


/**
 * @param {string=} message
 * @param {number=} duration
 */
GUI.prototype.showFeedback = function(message, duration){
	"use strict"; // duration in seconds
	var $msg,
		that = this;
	
	if (!duration){
		duration =  10 * 1000;// 10 seconds
	}
	else {
		duration = duration*1000; // convert to milliseconds
	}
	
	// max 2 messages displayed
	$('#feedback-bar p').eq(1).remove();
	
	// if an already shown message isn't exactly the same
	if($('#feedback-bar p').html() !== message){//} || feedbackEl.find('p').length === 0){
		$msg = $('<p></p>');
		$msg.text(message); // encodes special characters
		$('#feedback-bar').prepend($msg);
	}
	$('#feedback-bar').trigger('change');

	// automatically remove feedback after a period
	setTimeout(function(){
		if(typeof $msg !== 'undefined'){
			$msg.remove(); //find('#feedback-bar-message').empty();
		}
		$('#feedback-bar').trigger('change');
	}, duration);
};
	
GUI.prototype.hideFeedback = function(){
	"use strict";
	$('#feedback-bar p').remove();
	$('#feedback-bar').trigger('change'); //find('#feedback-bar-message').empty();
};

/**
 * @param {string} message
 * @param {string=} heading
 * @param {string=} icon css class of icon
 */
GUI.prototype.alert = function(message, heading, icon){
	"use strict";
	var closeFn,
		$alert = $('#dialog-alert');

	heading = heading || 'Alert';
	icon = icon || 'ui-icon-alert';

	$alert.find('p .ui-icon:eq(0)').removeClass().addClass('ui-icon '+icon);
	//to call when dialog closes
	closeFn = function(){
		$alert.dialog('destroy');
		$alert.find('#dialog-alert-msg').text('');
		//console.log('alert dialog destroyed');
	};

	//write content into alert dialog
	$alert.find('#dialog-alert-msg').html(message).capitalizeStart();

	$alert.dialog({
		'title': heading,
		'modal': true,
		'resizable': false,
		'closeOnEscape': true,
		'buttons': {
			"Ok": closeFn
		},
		'beforeClose': closeFn,
		'width': 500
	});
};
	
	/**
	 * Function: confirm
	 *
	 * description
	 *
	 *   @param {?(Object.<string, (string|boolean)>|string)=} text - In its simplest form this is just a string but it can
	 *                                                         also an object with parameters msg, heading and errorMsg.
	 *   @param {Object=} choices - [type/description]
	 */
GUI.prototype.confirm = function(text, choices){
	"use strict";
	var msg, heading, errorMsg, closeFn, dialogName, $dialog;
	
	if (typeof text === 'string'){
		msg = text;
	}
	else if (typeof text.msg === 'string'){
		msg = text.msg;
	}
	
	msg = (typeof msg !== 'undefined') ? msg : 'Please confirm action';
	heading = (typeof text.heading !== 'undefined') ? text.heading : 'Are you sure?';
	//errorMsg = (typeof text.errorMsg !== 'undefined') ? text.errorMsg : '';
	dialogName = (typeof text.dialog !== 'undefined') ? text.dialog : 'confirm';
	choices = (typeof choices !== 'undefined') ? choices : {};
	choices.posButton = choices.posButton || 'Confirm';
	choices.negButton = choices.negButton || 'Cancel';
	choices.posAction = choices.posAction || function(){return false;};
	choices.negAction = choices.negAction || function(){return false;};
	choices.beforeAction = choices.beforeAction || function(){};

	closeFn = function(){
		$dialog.dialog('destroy');
		$dialog.find('.dialog-msg, .dialog-error').text('');
		console.debug('dialog destroyed');
		//choices.afterAction.call();
	};

	$dialog = $('#dialog-'+dialogName);
	
	//write content into confirmation dialog
	$dialog.find('.dialog-msg').html(msg).capitalizeStart();
	//$dialog.find('.dialog-error').text(errorMsg).capitalizeStart();

	//instantiate dialog
	$dialog.dialog({
		'open': choices.beforeAction,
		'title': heading,
		'resizable': false,
		'modal': true,
		'closeOnEscape': true,
		'buttons': [
			{
				text: choices.posButton,
				click: function(){
					choices.posAction.call();
					//console.log('error text: '+$dialog.find('.dialog-error').text());
					if ($dialog.find('.dialog-error').text().length === 0){
						closeFn.call();
					}
				}
			},
			{
				text: choices.negButton,
				click: function(){
					choices.negAction.call();
					closeFn.call();
				}
			}
		],
		'width': 500,
		'beforeClose': closeFn
	});

};
	
GUI.prototype.updateStatus = {
	connection : function(online) {
		"use strict";
		console.log('updating online status in menu bar to:');
		console.log(online);
		if (online) {
			$('header #status-connection').removeClass().addClass('ui-icon ui-icon-signal-diag')
				.attr('title', 'It appears there is currently an Internet connection available.');
		}
		else {
			$('header #status-connection').removeClass().addClass('ui-icon ui-icon-cancel')
				.attr('title', 'It appears there is currently no Internet connection');
		}
	},
	edit : function(editing){
		"use strict";
		if (editing) {
			$('header #status-editing').removeClass().addClass('ui-icon ui-icon-pencil')
				.attr('title', 'Form is being edited.');
		}
		else {
			$('header #status-editing').removeClass().attr('title', '');
		}
	},
	support : function(supported){
		"use strict";
		//console.debug('"this" in updateStatus.supported:');
		//console.debug(this);
		//BAD BAD BAD to refer to gui here!!
		var $page = gui.pages().get('settings');// : $('#settings');
		if ($page.length > 0){
			console.debug('updating browser support for '+supported);
			$page.find('#settings-browserSupport-'+supported+' span.ui-icon').addClass('ui-icon-check');
		}
	}
};


//function to operate the sliders that reveal the feedback bar and page by changing their css 'top' property
GUI.prototype.display = function(){
	"use strict";
	////console.log('display() called');
	var feedbackTop, pageTop,
		$header = $('header'),
		$feedback = $('#feedback-bar'),
		$page = $('#page');
	//the below can probably be simplified, is the this.page().isVisible check necessary at all?
	if ($feedback.find('p').length > 0){
		feedbackTop = $header.outerHeight(); // shows feedback-bar
		if (this.pages().isShowing()){
			pageTop = $header.outerHeight() + $feedback.outerHeight(); // shows page
		}
		else{
			pageTop = $header.outerHeight() + $feedback.outerHeight() - $page.outerHeight(); // hides page
		}
	}
	else{
		feedbackTop = $header.outerHeight() - $feedback.outerHeight();
		if (this.pages().isShowing()){
			pageTop = $header.outerHeight(); // shows page
		}
		else{
			pageTop = $header.outerHeight() - $page.outerHeight();
		}
	}
	////console.log ('top feedback: '+feedbackTop); //DEBUG
	////console.log ('top page: '+pageTop); //DEBUG
	$feedback.css('top', feedbackTop);
	$page.css('top', pageTop);
};

/**
 * [updateSettings description] Updates the settings in the GUI and triggers change events (used when app launches) that are handled in customEventHandlers.
 * It is generic and could be used for any kind of radio or checkbox settings.
 *
 * @param  {Object.<string, (boolean|string)>} settings [description]
 *
 */
GUI.prototype.setSettings = function(settings){
	"use strict";
	var $input,
		that = this;
	console.log('gui updateSettings() started'); //DEBUG
	
	$.each(settings, function(key, value){ //iterate through each item in object
		//console.log('key:'+key+' value:'+value);// DEBUG
		$input = (value) ? that.pages().get('settings').find('input[name="'+key+'"][value="'+value+'"]') :
			that.pages().get('settings').find('input[name="'+key+'"]');

		value = (value) ? true : false;
		if ($input.length > 0){
			//could change this to only trigger change event if value is changed but not so important
			$input.attr('checked', value).trigger('change');
		}
	});
};

function getGetVariable(variable) {
	"use strict";
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return encodeURI(pair[1]);// URLs are case senstive!.toLowerCase();
		}
	}
	return false;
}




/**
 * Pads a string with prefixed zeros until the requested string length is achieved.
 * @param  {number} digits [description]
 * @return {String|string}        [description]
 */
String.prototype.pad = function(digits){
		var x = this;
		while (x.length < digits){
			x = '0'+x;
		}
		return x;
};
/*
 *
 *  Provides a central switch for application reporting
 *
 *  It is e.g. possible to output console.error to the user instead of to the console and use
 *  the url debug GET variable to switch back tot the console.
 *  Or it can be customized to switch e.g. console.log off completelt without having to comment out lines
 *  or it can be used to log to a variable/localStorage/sessionStorage and send a crash report to the server
 *  The possibilies to customize this are endless!
 *
 *  NOTE: NOT TESTED WHEN USING APPLICATION CACHE - THIS PROBABLY MESSES THINGS UP!
 */
 
/**
 * @constructor
 *
 * Function (Class): Report
 *
 * description
 *
 * Returns:
 *
 *   return description
 */
//function Report(){
//	"use strict";
//	var output;
//	var debug = getGetVariable('debug') || false;//

//	// avoid windows console errors
//	if (typeof(window.console) == "undefined") {console = {log: function(){}};}
//	if (typeof(console.debug) == "undefined") {console.debug = console.log;}
//
//	console.log('Report object initialized with debug = '+debug);
//
//	this.error = function(message){
//		output('error', message);
//	};
//
//	this.log = function(message){
//		output('log', message);
//	};
//
//	this.debug = function(message){
//		output('debug', message);
//	};
//
//	output = function(type, message){
//		// if in debug mode or if gui isn't available: just output to console
//		if (typeof gui == 'undefined' || (typeof debug !== 'undefined' && debug == 'true') ){
//			console[type](message);
//		}
//		// if gui is available and type = error
//		else if (type === 'error'){
//			console[type](message);
//			//gui.alert('You discovered a bug in the application or an error in the form! (see javascript console) Please report this to rapaide@aidwebsolutions.com.');
//		}
//		// if gui is available
//		else {
//			//nada
//		}
//	};
//}

/************ JQuery Extensions **************/

	
(function($){
	"use strict";
	// give a set of elements the same (longest) width
	$.fn.equalWidth = function(){
		var largestWidth = 0;
		return this.each(function(){
			if ($(this).width() > largestWidth) {
				largestWidth = $(this).width();
			}
		}).each(function(){
			$(this).width(largestWidth);
		});
	};
	
	//reverse jQuery collection
	$.fn.reverse = [].reverse;
	
	// Alphanumeric plugin for form input elements see http://www.itgroup.com.ph/alphanumeric/
	$.fn.alphanumeric = function(p) {

		p = $.extend({
			ichars: "!@#$%^&*()+=[]\\\';,/{}|\":<>?~`.- ",
			nchars: "",
			allow: ""
		}, p);

		return this.each
			(
				function()
				{

					if (p.nocaps) p.nchars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
					if (p.allcaps) p.nchars += "abcdefghijklmnopqrstuvwxyz";
					
					var s = p.allow.split('');
					for (var i=0;i<s.length;i++) if (p.ichars.indexOf(s[i]) != -1) s[i] = "\\" + s[i];
					p.allow = s.join('|');
					
					var reg = new RegExp(p.allow,'gi');
					var ch = p.ichars + p.nchars;
					ch = ch.replace(reg,'');

					$(this).keypress
						(
							function (e)
								{
									var k;
									if (!e.charCode) k = String.fromCharCode(e.which);
										else k = String.fromCharCode(e.charCode);
										
									if (ch.indexOf(k) != -1) e.preventDefault();
									if (e.ctrlKey&&k=='v') e.preventDefault();
									
								}
								
						);
						
					$(this).bind('contextmenu',function () {return false;});
									
				}
			);

	};

	$.fn.numeric = function(p) {
	
		var az = "abcdefghijklmnopqrstuvwxyz";
		az += az.toUpperCase();

		p = $.extend({
			nchars: az
		}, p);

		return this.each (function()
			{
				$(this).alphanumeric(p);
			}
		);
			
	};
	
	$.fn.alpha = function(p) {

		var nm = "1234567890";

		p = $.extend({
			nchars: nm
		}, p);

		return this.each (function()
			{
				$(this).alphanumeric(p);
			}
		);
			
	};

	// plugin to select the first word(s) of a string and capitalize it
	$.fn.capitalizeStart = function (numWords) {
		if(!numWords){
			numWords = 1;
		}
		var node = this.contents().filter(function () {
			return this.nodeType == 3;
			}).first(),
			text = node.text(),
			first = text.split(" ", numWords).join(" ");

		if (!node.length)
			return;
	
		node[0].nodeValue = text.slice(first.length);
		node.before('<span class="capitalize">' + first + '</span>');
	};


	//function to add a scrollbar to the list of records, if necessary
	$.fn.addScrollBar = function(){
		return this.each(function(){
			//scrollpane parts
			var scrollPane = $(this), //('#records-saved-pane'),
				scrollContent = $(this).find('ol');//('#records-saved ol');

			//change the main div to overflow-hidden as we can use the slider now
			scrollPane.css('overflow','hidden');
			
			//compare the height of the scroll content to the scroll pane to see if we need a scrollbar
			var difference = scrollContent.height()-scrollPane.height();//eg it's 200px longer
			
			if(difference>0){//if the scrollbar is needed, set it up...
				var proportion = difference / scrollContent.height();//eg 200px/500px
				var handleHeight = Math.round((1-proportion)*scrollPane.height());//set the proportional height - round it to make sure everything adds up correctly later on
				handleHeight -= handleHeight%2; //ensure the handle height is exactly divisible by two
				
				$('#records .column.middle').html('<div id="slider-wrap" class="ui-corner-all"><div id="slider-vertical"></div></div>');//append the necessary divs so they're only there if needed
				$("#slider-wrap").height(scrollPane.outerHeight());//set the height of the slider bar to that of the scroll pane
				
				//set up the slider
				$('#slider-vertical').slider({
					orientation: 'vertical',
					range: 'max',
					min: 0,
					max: 100,
					value: 100,
					slide: function(event, ui) {
						var topValue = -((100-ui.value)*difference/100);
						//console.log('new topValue:'+topValue);
						scrollContent.css({top:topValue});//move the top up (negative value) by the percentage the slider has been moved times the difference in height
					}
				});

				// align the slider with the top of the scroll pane
				$('#slider-wrap').css('margin-top', $('#records-saved h3').outerHeight(true));
				//set the handle height and bottom margin so the middle of the handle is in line with the slider
				$(".ui-slider-handle").css({height:handleHeight,'margin-bottom':-0.5*handleHeight});

				var origSliderHeight = $("#slider-vertical").height();//read the original slider height
				var sliderHeight = origSliderHeight - handleHeight ;//the height through which the handle can move needs to be the original height minus the handle height
				var sliderMargin =  (origSliderHeight - sliderHeight)*0.5;//so the slider needs to have both top and bottom margins equal to half the difference
				$(".ui-slider").css({height:sliderHeight,'margin-top':sliderMargin});//set the slider height and margins
				
				//position the slider range div at the top of the slider wrap - this ensures clicks above the area through which the handle moves are OK
				$(".ui-slider-range").css({top:-sliderMargin});
				
				//add a click function to ensure clicks below the area through which the handle moves are OK
				$("#slider-wrap").click(function(){//this means the bottom of the slider beyond the slider range is clicked, so move the slider right down
					$("#slider-vertical").slider("value", 0);
					scrollContent.css({top:-difference});
				});
				
				//additional code for mousewheel
				//$(".scrol-list, #slider-wrap").mousewheel(function(event, delta){
				//	var speed = 5;
				//	var sliderVal = $("#slider-vertical").slider("value");//read current value of the slider
				//
				//	sliderVal += (delta*speed);//increment the current value
				//	$("#slider-vertical").slider("value", sliderVal);//and set the new value of the slider
				//
				//	var topValue = -((100-sliderVal)*difference/100);//calculate the content top from the slider position
				//
				//	if (topValue>0) topValue = 0;//stop the content scrolling down too much
				//	if (Math.abs(topValue)>difference) topValue = (-1)*difference;//stop the content scrolling up too much
				//
				//	scrollContent.css({top:topValue});//move the content to the new position
				//	event.preventDefault();//stop any default behaviour
				//});
			}
		});
	};

})(jQuery);

/**
 * @preserve Copyright 2012 Martijn van de Rijdt
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint browser:true, devel:true, jquery:true, smarttabs:true sub:true*//*global gui, store, Form, DEFAULT_SETTINGS, Modernizr*/

/* !Storage Class */
/**
 *
 *
 * Function (Class): Storage
 *
 * description
 *
 * Returns:
 *
 *   return description
 *
 * @constructor
 */

function StorageLocal(){
	"use strict";
	var RESERVED_KEYS = ['__settings', 'null','__history', 'Firebug', 'undefined', '__bookmark', '__counter'];

	var localStorage = window.localStorage;
	// Could be replaced by Modernizr function if Modernizr remains used in final version
	this.isSupported = function() {
		try {
			return 'localStorage' in window && window['localStorage'] !== null;
		} catch (e) {
			return false;
		}
	};
	
	//used for testing
	this.getForbiddenKeys = function(){
		return RESERVED_KEYS;
	};
		
	// saves a data object in JSON format (string)
	// ADD CONSIDER separating this function for surveyData and other record types as there seems very little that is shared between record types
	/**
	 * [setRecord description]
	 * @param {string} newKey    [description]
	 * @param {Object.<(string|number), (string|boolean|number)>} record     [description]
	 * @param {boolean=} del [description] used to change name of existing record and delete old record
	 * @param {boolean=} overwrite [description] overwrite is only used when there is *another* record with the same new name (not when simply updating current form)
	 * @param {?string=} oldKey    [description]
	 * @return {string}
	 */
	this.setRecord = function(newKey, record, del, overwrite, oldKey) {
		console.debug('setRecord received record with final: '+record['ready']);
		//console.debug(record);
		//var record = rec;
		if (!newKey || newKey.length < 1){
			console.error('no key provided for record');
			return 'require';
		}
		newKey = newKey.trim();
		oldKey = (typeof oldKey === 'string') ? oldKey.trim() : null;
		overwrite = (typeof overwrite !== 'undefined' && overwrite === true) ? true : false;
		
		// ADD: CATCH ERROR WHEN LOCALSTORAGE SPACE IS FULL
		
		//using the knowledge that only survey data is provided as a "data" property (and is  a string)
		if (typeof record['data'] === 'string' && isReservedKey(newKey)){
			return 'forbidden';
		}
		// if the record has an existing key, but was not loaded from the store with this key, do not overwrite
		if (typeof record['data'] === 'string' && oldKey !== newKey && isExistingKey(newKey) && overwrite !== true) {
			
			//if (oldKey !== newKey && overwrite === false) {
			return 'existing';
			//}
		}
		try {
			//add timestamp to survey data
			if (typeof record['data'] === 'string'){
				record['lastSaved'] = (new Date()).getTime();
				//if (newKey == this.getCounterValue() ){
				localStorage.setItem('__counter', JSON.stringify({'counter': this.getCounterValue()}));
				//}
			}
			//record['ready'] = (Boolean(record['ready']) === true) ? true : false;
			//console.log('lastSaved: '+data['lastSaved']);
			localStorage.setItem(newKey, JSON.stringify(record)); //{
				//"data": record['data'], "ready": record['ready'], "lastSaved":record['lastSaved']
			//}));
			
			console.debug('saved: '+newKey+', old key was: '+oldKey);
			//if the record was loaded from the store (oldKey != null) and the key's value was changed during editing
			//delete the old record if del=true
			if (oldKey !== null && oldKey!=='' && oldKey !== newKey){
				if(del){
					console.log('going to remove old record with key:' + oldKey);
					this.removeRecord(oldKey);
				}
			}
			return 'success';
		}
		catch(e){
			console.log('error in store.setRecord:'+e.message);
			return 'error';
		}
	};
	
	
	/**
	 * Returns a form data record as an object. This is the only function that obtains records from the local storage.
	 * @param  {string} key [description]
	 * @return {*}     [description]
	 */
	this.getRecord = function(key){
		var record;
		try{
			//console.debug('record: '+localStorage.getItem(key));
			record = JSON.parse(localStorage.getItem(key));
			//console.debug('record after parse:');
			//console.debug(record);
			//console.log('found data:'+JSON.stringify(data)); //DEBUG
			return record;//{key: key, data: record['data'], ready: record['ready'], lastSaved: record['lastSaved']};// returns null if item cannot be found
		}
		catch(e){
			console.error('error with loading data from store: '+e.message);
			return null;
		}
	};

	// removes a record
	this.removeRecord = function(key){
		try{
			localStorage.removeItem(key);
			//console.log('removed record with key:'+key) // DEBUG
			return true;
		}
		catch(e){
			console.log('error with removing data from store: '+e.message);
			return false;
		}
	};

//	this.setRecordStatus = function (key, status){
//		var record = this.getRecord(key);
//		record.ready = status;
//		this.setRecord(key, record, false, true, key);
//	};
	
	/**
	 * returns an ordered array of objects with form keys and final variables {{"key": "name1", "final": true},{"key": "name2", etc.
	 * @return { Array.<Object.<string, (boolean|string)>>} [description]
	 */
	this.getFormList = function(){
		var i, ready, record,
			formList=[],
			records = this.getSurveyRecords(false);
		//console.log('data received:'+JSON.stringify(data)); // DEBUG
		for (i=0 ; i<records.length ; i++){
			record = records[i];
			//record['ready'] = (record['ready']=== 'true' || record['ready'] === true) ? true : false;
			formList.push({key: record['key'], 'ready': record['ready'], 'lastSaved': record['lastSaved']});
		}
		console.debug('formList returning '+formList.length+' items'); //DEBUG
		//order formList by lastSaved timestamp
		formList.sort(function(a,b){
			return b['lastSaved']-a['lastSaved'];
		});
		console.debug('formlist: '+JSON.stringify(formList));
		return formList;//returns empty object if no form data in storage or error was thrown
	};
	
	/**
	 * retrieves all survey data
	 * @param  {boolean=} finalOnly   [description]
	 * @param  {?string=} excludeName [description]
	 * @return {Array.<Object.<(string|number), (string|boolean)>>}             [description]
	 */
	this.getSurveyRecords = function(finalOnly, excludeName){
		var i, key,
			records = [],
			record  = {};
		finalOnly = finalOnly || false;
		excludeName = excludeName || null;
		//try{
			//console.log(localStorage.length+' records found'); // DEBUG
			for (i=0; i<localStorage.length; i++) {
				key = localStorage.key(i);
				//console.debug('found record with with key:'+key);
				record = this.getRecord(key);//localStorage.getItem(key);
				// get record - all non-reserved keys contain survey data
				if (!isReservedKey(key)){
					//console.debug('record with key: '+key+' is survey data');
					try{
						//record = JSON.parse(record);
						//console.debug('record:');
						//console.debug(record);
						/* although the key is also available as one of the record properties
							this should not be relied upon and the actual storage key should be used */
						record.key = key;
						//record['ready'] = record['ready'];
						//record['lastSaved'] = record['lastSaved'];
						//if (record.recordType === recordType){
						console.debug('this record is surveyData: '+record.key); // DEBUG
						console.debug('excludename: '+excludeName);
						console.debug('record.ready: '+record['ready']+' type:'+typeof record['ready']);
						//=== true comparison breaks in Google Closure compiler. Should probably be called with --output_wrapper to prevent this (but not possible in ANT?)
						//alternatively, the complete code could perhaps be wrapped in an anonymous function (except declaration of globals?)
						if (key !== excludeName && (!finalOnly || record['ready'] === 'true' || record['ready'] === true )){//} && (record.key !== form.getKey()) ){
							records.push(record);
						}
					}
					catch(e){
						console.log('record found that was probably not in the correct JSON format'+
							' (e.g. Firebug settings or corrupt record) (error: '+e.message+'), record was ignored');
					}
				}
			}
		//}
		//catch(e){
		//	console.log('error with retrieving all survey data data from storage');
		//	data = [];
		//}
		//console.debug('getSurveyRecords() returns: '+JSON.stringify(records)); // DEBUG
		return records;
	};

	/**
	 * [getSurveyDataArr description]
	 * @param  {boolean=} finalOnly   [description]
	 * @param  {?string=} excludeName [description]
	 * @return {Array.<Object.<string, string>>}             [description]
	 */
	this.getSurveyDataArr = function(finalOnly, excludeName){
		var i, records,
			dataArr = [];
		finalOnly = finalOnly || true;
		records = this.getSurveyRecords(finalOnly, excludeName);
		//console.debug('getSurveyDataArr will build array from these records: '+JSON.stringify(records));
		for (i=0 ; i<records.length ; i++){
			dataArr.push({name: records[i].key, data: records[i]['data']});//[records[i].key, records[i].data]
		}
		//console.debug('returning data array: '+JSON.stringify(dataArr));
		return dataArr;
	};

	/**
	 * [getSurveyDataXMLStr description]
	 * @param  {boolean=} finalOnly [description]
	 * @return {?string}           [description]
	 */
	this.getSurveyDataXMLStr = function(finalOnly){
		var i,
			dataObjArr = this.getSurveyDataArr(finalOnly),
			dataOnlyArr =[];
		for (i=0 ; i<dataObjArr.length ; i++){
			dataOnlyArr.push(dataObjArr[i].data);
		}
		return (dataOnlyArr.length>0) ? '<exported>'+dataOnlyArr.join('')+'</exported>' : null;
	};
	
	
	// MOVE TO STORE?
	//function to get settings from the store - all settings or one particular setting
	//this.getSettings = function(name){
//		var settings={};
//		var settingsRec = this.getRecord('settings');
//		//console.log('settings record:'+settingsRec);
//		if (settingsRec){
//			settings = settingsRec;
//		}
//		else {
//			settings = DEFAULT_SETTINGS;
//		}
//		if (name){
//			settings = settings[name]; // still to be tested
//		}
//		// console.log('returning settings: '+settings); //DEBUG
//		return settings;
//	};

	// private function to check if key is forbidden
	function isReservedKey(k) {
		var i;
		for (i=0 ; i<RESERVED_KEYS.length ; i++){
			if (k === RESERVED_KEYS[i]){
				return true;
			}
		}
		return false;
	}

	// private function to check if the key exists
	function isExistingKey(k) {
		if (localStorage.getItem(k)){
			//console.log('existing key');// DEBUG
			return true;
		}
		//console.log('not existing key');// DEBUG
		return false;
	}
	
	this.getCounterValue = function(){
		var record = this.getRecord('__counter'),
			number = (record && typeof record['counter'] !== 'undefined' && isNumber(record['counter'])) ? Number(record['counter']) : 0,
			numberStr = (number+1).toString().pad(4);
		//this.setRecord('__counter', numberStr);
		return numberStr;
	};

}

function isNumber(n){
	return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Settings class depends on Store Class
 *
 * @constructor
 */
function Settings(){
	"use strict";
}

Settings.prototype.init = function(){
	"use strict";
	var i, value, name,
		settings = this.get(),
		that = this;
	
	//set settings (loose coupling with GUI)
	$(document).trigger('setsettings', settings);
	//perform actions based on settings at launch
	//for (var prop in settings){
		
	//}
};

//communicates with local storage
/**
 * [get description]
 * @return {Object.<string, (boolean|string)>}         [description]
 */
Settings.prototype.get = function(){
	"use strict";
	return store.getRecord('__settings') || DEFAULT_SETTINGS;
};

/**
 * [getOne description]
 * @param  {string} setting [description]
 * @return {?(string|boolean)}         [description]
 */
Settings.prototype.getOne = function(setting){
	var settings = store.getRecord('__settings') || DEFAULT_SETTINGS;
	return (typeof setting !== 'undefined' && typeof settings[setting] !== 'undefined') ? settings[setting] : null;
};

/**
 * Communicates with local storage and perform action linked with setting. Called by eventhandler in GUI.
 *
 * @param {string} setting [description]
 * @param {string|boolean} value   [description]
 */
Settings.prototype.set = function(setting, value){
	"use strict";
	var result,
		settings = this.get();
	console.debug('going to store setting: '+setting+' with value:'+value);
	settings[setting] = value;
	result = store.setRecord('__settings', settings);
	//perform action linked to setting
	if (typeof this[setting] !== 'undefined'){
		this[setting](value);
	}
	return (result === 'success' ) ? true : console.error('error storing settings');
};
/**
 * @preserve Copyright 2012 Martijn van de Rijdt
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint browser:true, devel:true, jquery:true, smarttabs:true, trailing:false*//*global XPathJS, XMLSerializer:true, Modernizr*/

/**
 * Class: Form
 *
 * This class provides the JavaRosa form functionality by manipulating the survey form DOM object and
 * continuously updating the data XML Document. All methods are placed inside the constructor (so privileged 
 * or private) because only one instance will be created at a time.
 *
 * Parameters:
 *
 *   $form  - The form as JQuery object
 *   dataStr - <instance> as XML string
 *
 * Returns:
 *
 *   -
 *
 * Closure tags:
 *
 * @constructor
 */

function Form (formSelector, dataStr){
	"use strict";
	var data, form, $form, $formClone;
 
	//*** FOR DEBUGGING and TESTING, OTHERWISE DISABLE***
	this.ex = function(expr, type, selector, index){return data.evaluate(expr, type, selector, index);};
	this.sfv = function(){return form.setAllVals();};
	this.getDataO = function(){return data.get();};
	this.data = function(dataStr){return new DataXML(dataStr);};
	//this.data = function(){return data;};
	this.form = function(selector){return new FormHTML(selector);};
	this.getDataXML = function(){return data.getXML();};
	this.validateAll = function(){return form.validateAll();};
	//***************************************


/**
 * Function: init
 *
 * Initializes the Form instance (XML data and HTML form).
 * 
 *
 *
 *
 */
	this.init = function() {
		//dataStr = dataStr.replace(/xmlns\=\"[a-zA-Z0-9\:\/\.]*\"/,'');
		
		//if (typeof console== 'undefined'){
	///		report &= window.console;
	//	}
		//cloning children to keep any event handlers on 'form.jr' intact upon resetting
		$formClone = $(formSelector).clone().appendTo('<original></original>');

		data = new DataXML(dataStr);
		data.init();
		//console.debug('form data obj initialized');	
		form = new FormHTML(formSelector);
		form.init();
		//console.debug('form html obj initialized');
		
		//to update data tab launch, trigger a dataupdate (required after )
		//$form.trigger('dataupdate');

		return;
	};

	/**
     * @param {boolean=} incTempl
     * @param {boolean=} incNs
     */
	this.getDataStr = function(incTempl, incNs){
		return data.getStr(incTempl, incNs);
	};
	/**
     *
     */
	this.getRecordName = function(){
		return form.recordName.get();
	};
	/**
     * @param {string} name
     */
	this.setRecordName = function(name){
		return form.recordName.set(name);
	};
	this.getRecordStatus = function(){
		return form.recordStatus.get();
	};
	/**
     * @param {(boolean|string)=} markedFinal
     */
	this.setRecordStatus = function(markedFinal){
		return form.recordStatus.set(markedFinal);
	};
	/**
	 * @param { boolean } status [description]
	 */
	 this.setEditStatus = function(status){
		return form.editStatus.set(status);
	 };
	 this.getEditStatus = function(){
		return form.editStatus.get();
	 };

	//restores form instance to pre-initialized state
	this.reset = function(){
		//form language selector was moved outside of <form> so has to be separately removed
		$('#form-languages').remove();
		$form.replaceWith($formClone);
	 };

	 /**
	 * Validates the whole form and returns true or false
	 * @return {boolean} 
	 */ 
	this.validateForm = function(){
		return form.validateAll();
	};
	/**
	 * Returns wether form has validated as true or false. Needs to be called AFTER calling validate()!
	 * @return {!boolean} 
	 */ 
	this.isValid = function(){
		return form.isValid();
	};

	//odd function to modify date strings (et. al.?) just before they are submitted or exported
	this.prepareForSubmission = function(dataStr){
		var name, value,
			formData = new DataXML(dataStr); //$($.parseXML(dataStr));
		//console.debug(formData.);
		$form.find('[data-type-xml="date"], [data-type-xml="dateTime"]').each(function(){
			name = $(this).attr('name');
			//console.debug('found date element with name: '+name);
			formData.node(name).get().each(function(){
				console.debug('found date DATA node with name: '+name);
				value = $(this).text().trim();
				if (value.length > 0){
					console.debug('converting date string: '+value);
					value = new Date(value).toJrString();
					console.debug('jrDateString: '+value);
					//bypassing validation & conversion of Nodeset sub-class
					$(this).text(value);
				}
			});
		});

		$form.find('[type="time"]').each(function(){

		});
		return formData.getStr(true, true);
	};
/**
 * Function: DataXML
 *
 * description
 *
 * Parameters:
 *
 *   dataStr - [type/description]
 *
 * Returns:
 *
 *   return description
 * 
 *   @constructor
 */
	function DataXML(dataStr) {
	
		var $data, 
			that=this;
		//console.debug('dataStr:'+dataStr); 
		//seems wrong but using regular expression on string avoids persistant xmlns behaviour
		dataStr = dataStr.replace(/<[\/]?instance(>|\s+[^>]*>)/gi, '');
		////console.debug(dataStr);
		//TEMPORARY DUE TO FIREFOX ISSUE, REMOVE ALL NAMESPACES FROM STRING, BETTER TO LEARN HOW TO DEAL WITH DEFAULT NAMESPACES
		//dataStr = dataStr.replace(/xmlns\=\"[a-zA-Z0-9\:\/\.]*\"/,'');

		this.xml = $.parseXML(dataStr);
		//$instance = $(xml);
		//cleanDataStr = (new window.XMLSerializer()).serializeToString($instance.find('instance>*')[0]);
		//xml = $.parseXML(cleanDataStr);
		$data = $(this.xml);

		//this.xml = xml;
		this.$ = $data;

		//replace browser-built-in-XPath Engine
		XPathJS.bindDomLevel3XPath(); // move to Data if evalXpression moves to Data


		/**
		 * Function: node
		 * 
		 * description
		 * 
		 * Parameters:
		 * 
		 *   @param {(string|null)=} selector - [type/description]
		 *   @param {(string|number|null)=} index    - [type/description]
		 *   @param {(Object|null)=} filter   - [type/description]
		 *   @param filter.onlyTemplate
		 *   @param filter.noTemplate
		 *   @param filter.onlyLeaf
		 *   @param filter.noEmpty
		 *   @returns {Nodeset}
		 */
		this.node = function(selector, index, filter){
			return new Nodeset(selector, index, filter);
		};
		
		
		/**
		 * Function: Nodeset
		 *
		 * description
		 *
		 * Parameters:
		 *
		 *   @param {(string|null)=} selector - [type/description]
		 *   @param {(string|number|null)=} index    - [type/description]
		 *   @param {(Object|null)=} filter   - [type/description]
		 *   @param filter.onlyTemplate
		 *   @param filter.noTemplate
		 *   @param filter.onlyLeaf
		 *   @param filter.noEmpty
		 *   @constructor
		 */
		function Nodeset(selector, index, filter){
			
			this.selector = (typeof selector !== 'undefined' && selector) ? selector : '*'; 
					//this.selector = selector.replace(/^\/{1}/, "instance/"); 
			
				//this.selector = '*:not(instance)';
			//}	
			filter = (typeof filter !== 'undefined' && filter !== null) ? filter : {};
			this.filter = filter;
			this.filter.noTemplate = (typeof filter.noTemplate !== 'undefined') ? filter.noTemplate : true;
			this.filter.onlyLeaf = (typeof filter.onlyLeaf !== 'undefined') ? filter.onlyLeaf : false;
			this.filter.onlyTemplate = (typeof filter.onlyTemplate !== 'undefined') ? filter.onlyTemplate : false;
			this.filter.noEmpty = (typeof filter.noEmpty !== 'undefined') ? filter.noEmpty : false;
			this.index = index;
			//this.xmlDataType = xmlDataType;
			////console.debug('nodeset instance created with xmlDataType: '+this.xmlDataType);

			//return this; //necessary?
		}

		/**
		 * Function: get
		 * 
		 * Privileged method to find data nodes filtered by a jQuery or XPath selector and additional filter properties
		 * Without parameters it returns a collection of all data nodes excluding template nodes and their children. Therefore, most
		 * queries will not require filter properties. This function handles all (?) data queries in the application.
		 * 
		 * Parameters:
		 * 
		 *   selector - [Optional] String containing a JQuery selector or an XPath
		 *   filter - [Optional] Object (filter) with the following optional boolean properties: "noTemplate"(default: false), "onlyTemplate", "noEmpty", "onlyEmpty".
		 *   
		 * Notes: 
		 *    
		 *   onlyTemplate = true - will negate any value for "noTemplate"
		 *   noEmpty = true - returns only leaf nodes and therefore makes the "onlyLeaf" property obsolete
		 *   noTemplate = false - returns all data nodes if no other properties or the selector are set.
		 *   
		 * Returns:
		 * 
		 *   Data nodes that match the selector and filter.
		 *   
		 * See Also:
		 * 
		 *   <xfind>
		 */
		Nodeset.prototype.get = function(){
			var p, $nodes, val;
			
			// filter property error check
			//for (p in this.filter){
				//if (this.filter.hasOwnProperty(p)){
					//if ($.inArray(p, ['onlyTemplate','noTemplate', 'noEmpty', 'onlyLeaf']) == -1){
						//console.error('node.get() received invalid filter property: '+p);
					//}
				//}
			//}
			////console.debug('node.get() looking for node: '+this.selector);
			// noTemplate is ignored if onlyTemplate === true
			if (this.filter.onlyTemplate === true){
				$nodes = $data.xfind(this.selector).filter('[template]');
			}
			// default
			else if (this.filter.noTemplate === true){	
				$nodes = $data.xfind(this.selector).not('[template], [template] *');
			}
			else{
				$nodes = $data.xfind(this.selector);
			}
			//noEmpty automatically excludes non-leaf nodes
			if (this.filter.noEmpty === true){
				$nodes = $nodes.filter(function(){
					val = $(this).text();
					//$this = $(this);
					////console.log ('children: '+$(this).children().length);
					////console.log ('text length: '+($.trim($this.text()).length));
					return $(this).children().length === 0 && val.trim().length > 0;//$.trim($this.text()).length > 0;
				});
			}
			//this may still contain empty leaf nodes
			else if (this.filter.onlyLeaf === true){
				$nodes = $nodes.filter(function(){
					return $(this).children().length === 0;
				});
			}
			$nodes = (typeof this.index !== 'undefined' && this.index !== null) ? $nodes.eq(this.index) : $nodes;
			////console.debug('node.get() returns');//console.debug($nodes);
			return $nodes;
		};


		/**
		 * Function: setVal
		 * 
		 * Sets data node values.
		 * 
		 * Parameters:
		 * 
		 *   selector - String of JQuery or XPath selector for a data node
		 *   value - String/Number/Boolean of the new value of this node
		 *   index - The 0-based index of this node amongs its peers with the same selector
		 *   
		 * Returns:
		 * 
		 *   -
		 */
		Nodeset.prototype.setVal = function(newVal, expr, xmlDataType){
			var target, curVal, success;
			//index = (typeof index !== 'undefined') ? index : -1;
			curVal = this.getVal().join(' ');
			//console.log('setting value of data node: '+this.selector+' with index: '+this.index);
			
			if (typeof newVal !== 'undefined'){
				newVal = ($.isArray(newVal)) ? newVal.join(' ') : newVal;
				//this would perhaps be better: (but selected('a b') actually would not work (and does now))
				//if($.isArray(value)){
				//	$.each(value, function(i, val){value[i] = encodeURI(val);});
				//	value = value.join(' ');
				//}
			}
			else newVal = '';
			newVal = this.convert(newVal, xmlDataType);
			//value = data.type(value, type);
			//console.debug('value(s) to set: '+newVal);
			//console.debug('existing value(s): '+curVal);

			target = this.get();//.eq(index);

			if ( target.length === 1 && newVal.toString().trim() !== curVal.toString().trim() ){ //|| (target.length > 1 && typeof this.index == 'undefined') ){
				//if (this.validate(value) === true){
				//first change the value so that it can be evaluated in XPath (validated)
				

				target.text(newVal);
				//	return true;
				//}
				//return false;
				//then return validation result
				success = this.validate(expr, xmlDataType);
				$form.trigger('dataupdate', target.prop('nodeName'));
				return success;
			}
			if (target.length > 1){
			//	//console.debug('number of nodes with that name: '+target.length);
			//	target.eq(this.index).text(value);
				console.error('nodeset.setVal expected nodeset with one node, but received multiple');
				return null;
			}
			if (target.length === 0 ){
				console.error('Data node: '+this.selector+' with null-based index: '+this.index+' not found!');
				return null;
			}
			//always validate if the new value is not empty, even if value didn't change (see validateAll() function)
			//return (newVal.length > 0 && validateAll) ? this.validate(expr, xmlDataType) : true;
			return null;
			////console.debug('validation result: '+this.validate());
		};

		/**for
		 * Function: getVal
		 * 
		 * Obtains the data value if a JQuery or XPath selector for a single node is provided.
		 * 
		 * Parameters:
		 * 
		 *   selector - String of JQuery or XPath selector
		 *   
		 * Returns:
		 * 
		 *   returns the value of the node or false if no nodes were found. Throws error and stops when multiple 
		 *   nodes with that selector were found
		 *   
		 */
		Nodeset.prototype.getVal = function(){
			var vals=[];
			this.get().each(function(){
				//if not leaf node
				vals.push($(this).text());
			});
			return vals;
		};
		
		//clone data node after all templates have been cloned (after initialization)
		Nodeset.prototype.clone = function($precedingTargetNode){
			var $dataNode, allClonedNodeNames;

			$dataNode = this.get();
			////console.debug(dataNode);
			////console.debug(precedingTargetNode);
			$precedingTargetNode = $precedingTargetNode || $dataNode;
			if ($dataNode.length === 1 && $precedingTargetNode.length ===1){
				$dataNode.clone().insertAfter($precedingTargetNode).find('*').andSelf().removeAttr('template');
				//$('form.jr').trigger('dataupdate');
				//since the dataNode (template) may have descendants as well that are used in evaluating e.g. 
				//branching logic, we need to trigger a data update for each of the cloned nodes...
				allClonedNodeNames = [$dataNode.prop('nodeName')];
				$dataNode.find('*').each(function(){
					allClonedNodeNames.push($(this).prop('nodeName'));
				});
				////console.log('nodenames in clone: ');
				////console.log(allClonedNodeNames);
				$form.trigger('dataupdate', allClonedNodeNames.join());
			}
			else{
				console.error ('node.clone() function did not receive origin and target nodes');
			}
		};

		Nodeset.prototype.remove = function(){
			var dataNode = this.get();
			if (dataNode.length > 0){
				//console.log('removing data node with name: '+this.get().prop('nodeName'));
				dataNode.remove();
				$form.trigger('dataupdate', dataNode.prop('nodeName') );
			}
			else {
				console.error('could not find node '+this.selector+' with index '+this.index+ 'to remove ');
			}
		};

		Nodeset.prototype.convert = function(x, xmlDataType){
			////console.debug('received xmlDataType for conversion: '+xmlDataType);
			if (x.toString() === ''){
				return x;
			}
			if (typeof xmlDataType !== 'undefined' && xmlDataType !== null && 
				typeof this.types[xmlDataType.toLowerCase()] !== 'undefined' &&
				typeof this.types[xmlDataType.toLowerCase()].convert !== 'undefined'){
					return this.types[xmlDataType.toLowerCase()].convert(x);
			}
			return x;
		};
 
		Nodeset.prototype.validate = function(expr, xmlDataType){
			//var //i, result,
			var typeValid, exprValid,
				value = this.getVal();
			//	value = this.getVal(); //multiple acceptable???
			
			//for (i=0 ; i<values.length ; i++){
			//	result.push({type: this.type.validate(values[i]), expr: true });
				//ADD result of XPath constraint expr 
			//} 
			////console.log('xml data type = '+this.xmlDataType);
			if (value.toString() === '') {
				return true;
			}

			if (typeof xmlDataType == 'undefined' || xmlDataType === null || 
				typeof this.types[xmlDataType.toLowerCase()] == 'undefined'){
				console.error('data type '+xmlDataType+' set to string');
				xmlDataType = 'string';
			}
			typeValid = this.types[xmlDataType.toLowerCase()].validate(value);
			//console.debug('type valid: '+typeValid);
			exprValid = (typeof expr !== 'undefined' && expr !== null && expr.length > 0) ? that.evaluate(expr, 'boolean', this.selector, this.index) : true;
			//console.debug('constraint valid: '+exprValid);
			return (typeValid && exprValid);
		};

		Nodeset.prototype.types = {
			'string' :{
				//max length of type string is 255 chars. Convert (truncate) silently?
				validate : function(x){
					return true;
				}
			},
			'select' :{
				validate: function(x){
					return true;
				}
			},
			'select1' :{
				validate: function(x){
					return true;
				}
			},
			'decimal' :{
				validate : function(x){
					return (!isNaN(x-0) && x !== null) ? true : false;
				}
			},
			'int' : {
				validate : function(x){
					return (!isNaN(x-0) && x !== null && Math.round(x) == x) ? true : false; //x.toString() == parseInt(x, 10).toString();
				}
			}, 
			'date' : {
				validate : function(x){
					////console.debug('validating date: "'+x+'"');
					////console.debug(new Date(x.toString()));
					return ( new Date(x.toString()).toString() !== 'Invalid Date' );
				},
				convert : function(x){
					var datetime = new Date(x);
					datetime.setUTCHours(0,0,0,0);
					////console.log('converting datetime to date');
					return new Date(datetime).toUTCString();//.getUTCFullYear(), datetime.getUTCMonth(), datetime.getUTCDate());
				}
			},
			'datetime' : {
				validate : function(x){
					return ( new Date(x).toString() !== 'Invalid Date');
				},
			'convert' : function(x){
					return ( new Date(x).toUTCString() );
				}
			},
			'time' : {
				validate : function(x){
					return ( new Date('2012-01-01 '+x).toString() !== 'Invalid Date');
				},
				convert : function(x){
					var datetime = new Date('2012-01-01 '+x);
					////console.log('converting datetime to time');
					return datetime.getHours().toString().pad(2)+':'+datetime.getMinutes().toString().pad(2)+':'+datetime.getSeconds().toString().pad(2);
				}
			},
			'barcode' : {
				validate: function(x){
					return true;
				}
			},
			'geopoint' : {
				validate: function(x){
					return true;
				}
			},
			'binary' : {
				validate: function(x){
					return true;
				}
			}
		};	
	}

		/**
	 * Function: DataXML.init
	 * 
	 * Sets up the $data object.
	 * 
	 * Parameters:
	 * 
	 *   dataStr - xml data as a string
	 *   
	 * Returns:
	 * 
	 *   -
	 */
	DataXML.prototype.init = function(){
		var $root, val;
		//console.log('initializing DataXML object');
		//trimming values
		this.node(null, null, {noEmpty: true, noTemplate: false}).get().each(function(){
			////console.debug('value found'+ $(this).text());
			val = $(this).text();
			$(this).text(val.trim());
		});
		$root = this.node(':first', 0).get();
		////console.debug('root element');
		////console.debug($root);
		//store namespace of root element
		this.namespace = $root.attr('xmlns');
		//console.debug('namespace of root element is:'+this.namespace);
		//remove namespace from <instance>
		//this.$.find('instance').removeAttr('xmlns');
		//strip namespace from root element (first child of instance) 
		$root.removeAttr('xmlns');

		this.cloneAllTemplates();

		return;
	};


//index is the index of the node (defined in Nodeset), that the clone should be added immediately after
		//if a node with that name and that index already exists the node will NOT be cloned
		//almost same as clone() but adds targetIndex and removes template attributes and if no template node exists it will copy a normal node
		//nodeset (givein in node() should include filter noTemplate:false) so it will provide all nodes that that name
	DataXML.prototype.cloneTemplate = function(selector, index){
		////console.log('trying to locate data node with path: '+path+' to clone and insert after node with same xpath and index: '+index);
		var $insertAfterNode, name,
			template = this.node(selector, 0, {onlyTemplate: true}); //eq(0) is actually obsolete
		//console.debug('going to clone date template node with selector: '+selector+' and insert after index '+index);
		//if form does not use jr:template="" but the node-to-clone does exist
		template = (template.get().length === 0) ? this.node(selector, 0) : template;
		name = template.get().prop('nodeName');
		$insertAfterNode = this.node(selector, index).get();

		//if templatenodes and insertafternode(s) have been identified AND the node following insertafternode doesn't already exist(! important for nested repeats!)
		if (template.get().length === 1 && $insertAfterNode.length === 1 && $insertAfterNode.next().prop('nodeName') !== name){//this.node(selector, index+1).get().length === 0){
			//console.log('found data repeat node with template attribute');
				//cloneDataNode(templateNode, insertAfterNode);

			template.clone($insertAfterNode);
			//console.debug('cloning done');
				//templateNode.clone().insertAfter(templateNode.parent().children(templateNode.prop('nodeName')).last()).removeAttr('template');
		}
		else{
			//console.error ('Could locate node: '+path+' with index '+index+' in data instance.There could be multiple template node (a BUG) or none.');
			//console.debug('templatenode found: ');
			//console.debug(template.get());
			//console.debug('insertAfternode found: ');
			//console.debug($insertAfterNode);
			////console.debug('target existing already?: ');
			////console.debug(this.node(selector, index+1).get());
			if ($insertAfterNode.next().prop('nodeName') !== name ){
				console.error('Could not find template node and/or node to insert the clone after');
			}
		}
	};
/**
	 * Function: cloneAllTemplates
	 *
	 * Initialization function that creates <repeat>able data nodes with the defaults from the template if no repeats have been created yet. 
	 * Strictly speaking this is not "according to the spec" as the user should be asked first whether it has any data for this question
	 * but seems usually always better to assume at least one 'repeat' (= 1 question). It doesn't make use of the Nodeset subclass (CHANGE?)
	 *
	 * Parameters:
	 *
	 *   startNode - Provides the scope (default is the whole data object) from which to start cloning.
	 *
	 * Returns:
	 *
	 *   -
	 *
	 * See Also:
	 *
	 *   In JavaRosa, the documentation on the jr:template attribute.
	 * 
	 * @param {jQuery=} startNode
	 */ 
	DataXML.prototype.cloneAllTemplates = function(startNode){
		var _this = this;
		////console.log('cloning all templates once');
		if (typeof startNode == 'undefined' || startNode.length === 0){
			startNode = this.$.find(':first');
		}
		//clone data nodes with template (jr:template=) attribute if it doesn't have any siblings of the same name already
		//strictly speaking this is not "according to the spec" as the user should be asked whether it has any data for this question
		//but I think it is almost always better to assume at least one 'repeat' (= 1 question)
		startNode.children('[template]').each(function(){
			////console.log('found data point with template attribute, name:'+$(this).prop('nodeName'));
			if (typeof $(this).parent().attr('template') == 'undefined' && $(this).siblings($(this).prop('nodeName')).not('[template]').length === 0){
				//console.log('going to clone template data node with name: ' + $(this).prop('nodeName'));
				$(this).clone().insertAfter($(this)).find('*').andSelf().removeAttr('template');
				//cloneDataNode($(this));
			}
		});
		startNode.children().not('[template]').each(function(){
			_this.cloneAllTemplates($(this));
		});
		return;
	};

	

	

	/**
	 * Function: get
	 * 
	 * Returns jQuery Data Object (obsolete?)
	 * 
	 * Parameters:
	 * 
	 * Returns:
	 * 
	 *   JQuery Data Object
	 *   
	 * See Also:
	 * 
	 *    <nodes.get()>, which is always (?) preferred except for debugging.
	 *   
	 */
	DataXML.prototype.get = function(){
		return this.$ || null;
	};

	/**
	 * Function: getXML
	 * 
	 * Getter for data xml object. REMOVE <INSTANCE>?
	 * 
	 * Returns:
	 * 
	 *   data xml object
	 */
	DataXML.prototype.getXML = function(){
		return this.xml || null;
	};

	/**
	 * Function: getStr
	 * 
	 * Public function to get a string of the CLONED data object (used for Rapaide.launch component).
	 * 
	 * Parameters:
	 * 
	 *   incTempl - Boolean that indicates whether to include template nodes.
	 *   
	 * Returns:
	 * 
	 *   string of data xml object
	 */
	DataXML.prototype.getStr = function(incTempl, incNs){
		var $dataClone, dataStr;

		incTempl = (typeof incTempl !== 'undefined') ? incTempl : false;
		incNs = (typeof incNs !== 'undefined') ? incNs : true;
		
		$dataClone = $('<root></root');
		
		this.$.find(':first').clone().appendTo($dataClone);

		if (incTempl === false){
			$dataClone.find('[template]').remove();
			////console.log('removed templates');
		}
		if (incNs === true && typeof this.namespace !== 'undefined' && this.namespace.length > 0) {
			$dataClone.children().eq(0).attr('xmlns', this.namespace);
		}
		////console.debug('dataClone in getStr:');
		////console.debug($dataClone);
		dataStr = (new XMLSerializer()).serializeToString($dataClone.children().eq(0)[0]);

		//TEMPORARY DUE TO FIREFOX ISSUE, REMOVE NAMESPACE FROM STRING (AGAIN), BETTER TO LEARN HOW TO DEAL WITH DEFAULT NAMESPACES
		dataStr = dataStr.replace(/xmlns\=\"[A-z0-9\:\/\.\-\%\_\?&amp;]*\"/gi,' ');

		//remove tabs
		dataStr = dataStr.replace(/\t/g, '');

		return dataStr;
	};

	/**
	 * There is a bug in JavaRosa that has resulted in the usage of incorrect formulae on nodes inside repeat nodes. 
	 * Those formulae use absolute path when relative paths should have been used. See more here:
	 * https://bitbucket.org/javarosa/javarosa/wiki/XFormDeviations (point 3). 
	 * Tools such as pyxform (and xls form?) also build forms in this incorrect manner. It will take time to 
	 * correct this way of making forms so makeBugCompliant() aims to mimic the incorrect 
	 * behaviour by injection the [position] of repeats into the XPath expressions. The resulting expression
	 * will then be evaluated in a way users expect (as if the paths were relative) without having to mess up
	 * the XPath Evaluator. E.g. '/data/rep_a/node_a' could become '/data/rep_a[2]/node_a' if the context is inside 
	 * the second rep_a repeat.
	 * 
	 * This function should be removed as soon as JavaRosa (or maybe just pyxform) fixes the way those formulae
	 * are created (or evaluated).
	 * 
	 * @param  {string} expr  the XPath expression
	 * @param  {jQuery} $repParents jQuery collection of repeat parents of the context input node
	 * @return {string} modified expression with injected positions (1-based) 
	 */
	DataXML.prototype.makeBugCompliant = function(expr, $repParents){
		var i, repSelector, repIndex,
			bcExpr = expr;
		//console.debug('received expression: '+expr+' inside repeat: '+repSelector+' with 0-based index: '+repIndex);
		for (i=0 ; i<$repParents.length ; i++){
			repSelector = /** @type {string} */$repParents.eq(i).attr('name');
			//console.log(repSelector);
			repIndex = $repParents.eq(i).siblings('[name="'+repSelector+'"]').andSelf().index($repParents.eq(i)); 
			//console.log(repIndex);
			bcExpr = bcExpr.replace(repSelector, repSelector+'['+(repIndex+1)+']');
		}
		//if (expr !== bcExpr){
			//console.debug('expr inside repeat made bug compliant, new expression: '+bcExpr);
		//}
		return bcExpr;
	};

	/*
	 * Evaluates an XPath Expression using the browser's native XPath 1.0 engine
	 * $context parameter is a jQuery object!
	 * type 
	 *  (and only used for booleans
	 *
	 *
	 * 
	 */
	/**
	 * Evaluates an XPath Expression using XPathJS_javarosa (not native XPath 1.0 evaluator)
	 * 
	 * THIS FUNCTION DOESN'T SEEM TO WORK PROPERLY FOR NODE RESULTTYPES! otherwise:
	 * nodes can be accessed by returned node.snapshotItem(i)(.textContent)
	 * node can be accessed by returned node(.textContent)
	 * 
	 * @param  {string} expr       [description]
	 * @param  {string=} resTypeStr boolean, string, number, nodes (best to always supply this)
	 * @param  {string=} selector   jQuery selector which will be use to provide the context to the evaluator
	 * @param  {number=} index      index of selector in document
	 * @return {?(number|string|boolean)}            [description]
	 */
	DataXML.prototype.evaluate = function(expr, resTypeStr, selector, index){
		var context, dataCleanClone, resTypeNum, resultTypes, result, $repParents;//, repSelector, repIndex;//, repDataNodeName;
		
		//$context = $context || this.get().find('instance>*');
		//console.debug('evaluating expression: '+expr);
		resTypeStr = resTypeStr || 'any';
		index = index || 0;
		//console.debug('selector of context: '+selector);
		//console.debug('index of context node: '+index);
		//var context = $.parseXML((new window.XMLSerializer()).serializeToString($context[0]));
		//create a clone so that the template nodes can be removed (not tried detach() and attach()
		
		////console.debug(data.get());
		//$clonedDoc = this.get().find('instance>*').clone().appendTo($('<root></root>'));
		//$clonedContext.find('[template]').remove();
		
		////console.log('creating clean clone from string:'+this.getStr(false, false));
		dataCleanClone = new DataXML(this.getStr(false, false));
		////console.log('clean clone:');
		////console.log(dataCleanClone);
		////console.log('selector of context node: '+selector);
		////console.log('index of context node: '+index);
		//use a trick to be able to get the context node using getElementById
		if (typeof selector !== 'undefined' || selector !== null) {
			//console.debug('selector for context node in evaluate(): '+selector+' with index: '+index);
			//dataCleanClone.node(selector, index, {}).get().attr('id','getme');
			//context = dataCleanClone.get()[0].getElementById('getme');
			context = dataCleanClone.node(selector, index, {}).get()[0];
			/**
			 * If the expressions is bound to a node that is inside a repeat.... see makeBugCompliant()
			 */
			if ($form.find('[name="'+selector+'"]').parents('.jr-repeat').length > 0 ){
				$repParents = $form.find('[name="'+selector+'"]').eq(index).parents('.jr-repeat');
				expr = this.makeBugCompliant(expr, $repParents);
			}
		}
		else context = dataCleanClone.getXML();//dataCleanClone.get()[0];//.documentElement;
		
		resultTypes = { //REMOVE VALUES? NOT USED
			0 : ['any', 'ANY_TYPE'], //works
			1 : ['number', 'NUMBER_TYPE', 'numberValue'], //works, e.g. evalXpression('number(true())', 'number')
			2 : ['string', 'STRING_TYPE', 'stringValue'], //works, e.g. evalXpression('string(38)', 'string')
			3 : ['boolean', 'BOOLEAN_TYPE', 'booleanValue'], //works, e.g. evalXpression('"red" != "bleu", 'boolean')
			//NOTE: nodes are actually never requested in this function as DataXML.node().get() is used to return nodes
			
			7 : ['nodes', 'ORDERED_NODE_SNAPSHOT_TYPE'], //works with iterateNext().textContent
			9 : ['node', 'FIRST_ORDERED_NODE_TYPE']
			//'node': ['FIRST_ORDERED_NODE_TYPE','singleNodeValue'], // does NOT work, just take first result of previous
		};

		//translate typeStr to number according to DOM level 3 XPath constants
		for (resTypeNum in resultTypes){

			resTypeNum = Number(resTypeNum);

			if (resultTypes[resTypeNum][0] == resTypeStr){
				break;
			}
			else{
				resTypeNum = 0;
			}
		}

		expr = expr.replace( /&lt;/g, '<');
		expr = expr.replace( /&gt;/g, '>'); 
		expr = expr.replace( /&quot;/g, '"');

		////console.log('expr to test: '+expr);//+' with result type number: '+resTypeNum);
		//result = evaluator.evaluate(expr, context.documentElement, null, resultType, null);
		try{
				result = document.evaluate(expr, context, null, resTypeNum, null);
			////console.log('evaluated: '+expr+' to: '+(result[resultTypes[type][1]] || 'resultnode(s)'));
			////console.log(result); //NOTE THAT THIS USE OF THE CONSOLE THROWS AN ERROR IN FIREFOX when using native XPath!
			if (resTypeNum === 0){
				for (resTypeNum in resultTypes){
					resTypeNum = Number(resTypeNum);
					////console.log('checking if resultType = '+type+' is equal to actual result.resultType = '+result.resultType);
					if (resTypeNum == Number(result.resultType)){
						result = (resTypeNum >0 && resTypeNum<4) ? result[resultTypes[resTypeNum][2]] : result;
						console.debug('evaluated '+expr+' to: '+result);
						return result;
					}
					//resultTypeValProp = resultTypes[type][1];
					//console.log('checking type with value property:'+resultTypeValProp);
					// WHEN PROBLEMS USE ITERATENEXT().textContent for resultType = 4
					//try{
					//	if (typeof result[resultTypeValProp] !== 'undefined'){
					//		//console.log('result type detected: '+type);
					//		return result[resultTypeValProp];
					//	}
					//}
					//catch(e){
					//	//console.log('result type is not: '+type);
					//}
				}
				console.error('Expression: '+expr+' did not return any boolean, string or number value as expected');
				//console.debug(result);
			}
			console.debug('evaluated '+expr+' to: '+result[resultTypes[resTypeNum][2]]);
			return result[resultTypes[resTypeNum][2]];
		}
		catch(e){
			console.error('Error occurred trying to evaluate: '+expr+', message: '+e.message);
		}
	};

/**
 * Function: FormHTML
 * 
 * description
 * 
 * Parameters:
 * 
 *   selector - [type/description]
 * 
 * Returns:
 * 
 *   return description
 *   
 *   @constructor
 */
	function FormHTML (selector){
		//there will be only one instance of FormHTML
		$form = $(selector);

		//this.input = function($node){
		//	return new Input($node);
		//};

		
	}

	FormHTML.prototype.init = function(){
		var icons, name;//,
			//that = this; 
		//console.debug ('initializing HTML form');

		this.checkForErrors();

		if (typeof data == 'undefined' || !(data instanceof DataXML)){
			return console.error('variable data needs to be defined as instance of DataXML');
		}
		
		icons = '<div class="question-icons"><span class="required"></span><span class="hint"></span></div>';
		
		//append icons
		$form.find('label>input[type="checkbox"], label>input[type="radio"]').parent().parent('fieldset').prepend(icons);
		$form.parent().find('label>select, :not(#jr-preload-items, #jr-calculated-items)>label>input')//, form>label>input')
			.not('[type="checkbox"], [type="radio"]').parent().prepend(icons);

		//this.input.getWrapNodes($form.parent().find('fieldset:not(#jr-preload-items, #jr-calculated-items) input, select, textarea'))
		//	.prepend(icons);	

		//add 'required field' clue
		$form.find('label>input[type="checkbox"][required], label>input[type="radio"][required]').parent().parent('fieldset')
			.find('.question-icons .required').addClass('ui-icon ui-icon-notice');
		$form.parent().find('label>select[required], :not(#jr-preload-items, #jr-calculated-items)>label>input[required]')
			.not('[type="checkbox"], [type="radio"]').parent().find('.question-icons .required')
			.addClass('ui-icon ui-icon-notice');

		//this.input.getWrapNodes($form.find('[required]')).find('.question-icons .required').text('*');

		//groups of radiobuttons needs to have the same name which referes to the xpath in instance
		//when a radio button is clone this will cause a problem. Therefore radiobuttons store their xpath in data-name.
		$form.find('input[type="radio"]').each(function(){
			name = /**@type {string} */$(this).attr('name');
			$(this).attr('data-name', name);
		});

		$form.find('h2').first().append('<span/>');

		//this.setLangs();
		//$form.find('.jr-hint, .jr-constraint-msg').hide();
		//
		this.repeat.init();
		this.setAllVals();
		this.beautify();
		this.widgets.init();
		this.branch.init();
		this.calcUpdate();
		this.outputUpdate();
		this.setEventHandlers();
		this.preloads.init(); //after event handlers!
		//$form.fixLegends();
		this.setLangs();
		this.editStatus.set(false);
	};

	FormHTML.prototype.checkForErrors = function(){
		var i,
			paths = [],
			total = {},
			$stats = $form.find('#stats');
		total.jrItem= parseInt($stats.find('[id="jrItem"]').text(), 10);
		total.jrInput= parseInt($stats.find('[id="jrInput"]').text(), 10);
		total.jrUpload = parseInt($stats.find('[id="jrUpload"]').text(), 10);
		total.jrTrigger = parseInt($stats.find('[id="jrTrigger"]').text(), 10);
		total.jrConstraint = parseInt($stats.find('[id="jrConstraint"]').text(), 10);
		total.jrRelevant = parseInt($stats.find('[id="jrRelevant"]').text(), 10);
		total.jrCalculate = parseInt($stats.find('[id="jrCalculate"]').text(), 10);
		total.jrPreload = parseInt($stats.find('[id="jrPreload"]').text(), 10);

		//console.log('checking for general transformation or xml form errors by comparing stats');
		//$form.find('#stats span').each(function(){
		//	total[$(this).attr('id')] = parseInt($(this).text(),10);
		//});
		/** @type {number} */
		total.hRadio = $form.find('input[type="radio"]').length;
		total.hCheck = $form.find('input[type="checkbox"]').length;
		total.hSelect = $form.find('select').length;
		total.hOption = $form.find('option[value!=""]').length;
		total.hInputNotRadioCheck = $form.find('input:not([type="radio"],[type="checkbox"])').length;
		total.hTrigger = $form.find('.trigger').length;
		total.hRelevantNotRadioCheck = $form.find('[data-relevant]:not([type="radio"],[type="checkbox"])').length;
		total.hRelevantRadioCheck = $form.find('input[data-relevant][type="radio"],input[data-relevant][type="checkbox"]').parent().parent('fieldset').length;
		total.hConstraintNotRadioCheck = $form.find('[data-constraint]:not([type="radio"],[type="checkbox"])').length;
		total.hConstraintRadioCheck = $form.find('input[data-constraint][type="radio"],input[data-constraint][type="checkbox"]').parent().parent('fieldset').length;
		total.hCalculate = $form.find('[data-calculate]').length;
		total.hPreload = $form.find('#jr-preload-items input').length;

		//console.debug(total);

		if ( total.jrItem !== ( total.hOption + total.hRadio + total.hCheck )  ) {
			console.error(' total select-type filter differs between XML form and HTML form');
		}
		if ( ( total.jrInput + total.jrUpload ) !== ( total.hInputNotRadioCheck - total.hCalculate - total.hPreload ) ){
			console.error(' total amount of input/upload fields differs between XML form and HTML form');
		}
		if ( total.jrTrigger != total.hTrigger ){
			console.error(' total triggers differs between XML form and HTML form');
		}
		if ( total.jrRelevant != ( total.hRelevantNotRadioCheck + total.hRelevantRadioCheck)){
			console.error(' total amount of branches differs between XML form and HTML form (not a problem if caused by obsolete bindings in xml form)');
		}
		if ( total.jrConstraint != ( total.hConstraintNotRadioCheck + total.hConstraintRadioCheck)){
			console.error(' total amount of constraints differs between XML form and HTML form (not a problem if caused by obsolete bindings in xml form).'+
				' Note that constraints on &lt;trigger&gt; elements are ignored in the transformation and could cause this error too.');
		}
		if ( total.jrCalculate != total.hCalculate ){
			console.error(' total amount of calculated items differs between XML form and HTML formprel');
		}
		if ( total.jrPreload != total.hPreload ){
			console.error(' total amount of preload items differs between XML form and HTML form');
		}
		//probably resource intensive: check if all nodes mentioned in name attributes exist in $data
		
		$form.find('[name]').each(function(){
			if ($.inArray($(this).attr('name'), paths)) {
				paths.push($(this).attr('name'));
			}
		});
		//s//console.debug(paths);
		for (i=0 ; i<paths.length ; i++){
			////console.debug('checking: '+paths[i]);
			if (data.node(paths[i]).get().length < 1){
				console.error('Found name attribute: '+paths[i]+' that does not have a corresponding data node. Transformation error or XML form error (relative nodesets perhaps?');
			}
		}

	};

	//this may not be the most efficient. Could also be implemented like Data.Nodeset;
	//also use for fieldset nodes (to evaluate branch logic) and also used to get and set form data of the app settings
	FormHTML.prototype.input = {
		//multiple nodes are limited to ones of the same input type (better implemented as JQuery plugin actually)
		getWrapNodes: function($inputNodes){
			var type = this.getInputType($inputNodes.eq(0));
			return (type == 'radio' || type == 'checkbox') ? $inputNodes.parent('label').parent('fieldset') : 
				(type == 'fieldset') ? $inputNodes : $inputNodes.parent('label');
		},
		getProps : function($node){
			if ($node.length !== 1){
				return console.error('getProps(): no input node provided or multiple');
			}
			////console.log('required: '+$node.attr('required'));
			return {
				path: this.getName($node), 
				ind: this.getIndex($node),
				inputType: this.getInputType($node),
				xmlType: this.getXmlType($node),
				constraint: $node.attr('data-constraint'),
				relevant: $node.attr('data-relevant'),
				val: this.getVal($node),
				required: ($node.attr('required') !== undefined) ? true : false,
				enabled: this.isEnabled($node),
				multiple: this.isMultiple($node)
			};
		},
		getInputType : function($node){
			if ($node.length !== 1){
				return ''; //console.error('getInputType(): no input node provided or multiple');
			}
			if ($node.prop('nodeName').toLowerCase() == 'input'){
				if ($node.attr('type').length > 0){
					return $node.attr('type').toLowerCase();
				}	
				else return console.error('<input> node has no type');
			}
			else if ($node.prop('nodeName').toLowerCase() == 'select' ){
				return 'select';
			}
			else if ($node.prop('nodeName').toLowerCase() == 'fieldset'){
				return 'fieldset';
			}
			else return console.error('unexpected input node type provided');
		},
		getXmlType : function($node){
			if ($node.length !== 1){
				return console.error('getXMLType(): no input node provided or multiple');
			}
			return $node.attr('data-type-xml');
		},
		getName : function($node){
			//var indexSuffix;
			if ($node.length !== 1){
				return console.error('getName(): no input node provided or multiple');
			}
			if (this.getInputType($node) == 'radio'){
				//indexSuffix = $node.attr('name').lastIndexOf('____');
				//if (indexSuffix > 0){
					return $node.attr('data-name');//.substr(0, indexSuffix);
				//}
			}
			if ($node.attr('name').length > 0){
				return $node.attr('name');
			}
			else return console.error('input node has no name');
		},
		//the index that can be used to find the node in $data
		getIndex : function($node){
			var inputType, name, $wrapNode, $wrapNodesSameName;
			if ($node.length !== 1){
				return console.error('getIndex(): no input node provided or multiple');
			}
			inputType = this.getInputType($node);
			name = this.getName($node);
			////console.debug('name provided by input.getName:'+name);
			////console.debug('name of attribute name:'+$node.attr('name'));
			//if (inputType === 'radio' && name !== $node.attr('name')){
				//return parseInt( $node.attr('name').substring($node.attr('name').lastIndexOf('____')+4), 10);
			//}
			$wrapNode = this.getWrapNodes($node);
			////console.debug('wrapnode:');
			////console.debug($wrapNode);
			if (inputType === 'radio' && name !== $node.attr('name')){
				$wrapNodesSameName = this.getWrapNodes($form.find('[data-name="'+name+'"]'));
			}
			else {
				$wrapNodesSameName = this.getWrapNodes($form.find('[name="'+name+'"]'));
			}
			////console.debug('wrapnodes with same name:');
			////console.debug($wrapNodesSameName);	

			return $wrapNodesSameName.index($wrapNode);
		},
		isMultiple: function($node){
			return (this.getInputType($node) == 'checkbox' || $node.attr('multiple') !== undefined) ? true : false;
		},
		isEnabled: function($node){
			return ($node.attr('disabled') !== undefined  || $node.parents('fieldset:disabled').length !== 0 ) ? false : true;
		},
		getVal : function($node){
			var inputType, values=[], name;
			if ($node.length !== 1){
				return console.error('getVal(): no inputNode provided or multiple');
			}
			inputType = this.getInputType($node);
			name = this.getName($node);
			////console.debug('input type: '+inputType);
			if (inputType == 'radio'){
				return this.getWrapNodes($node).find('input:checked').val() || '';
			}
			//checkbox values bug in jQuery as (node.val() should work)
			if (inputType == 'checkbox'){
				//console.debug(this.getWrapNodes($node));
				this.getWrapNodes($node).find('input[name="'+name+'"]:checked').each(function(){
					//console.debug('found checkbox value: '+$(this).val());
					values.push($(this).val());
				});
				return values;
			}
			return $node.val() || '';
		},
		setVal : function(name, index, value){
			var $inputNodes;//, 
				//values = value.split(' ');
			index = index || 0;
			
			if (this.getInputType($form.find('[data-name="'+name+'"]').eq(0)) == 'radio'){
				//name = name+'____'+index;
				//index = 0;
				//why not use this.getIndex?
				return this.getWrapNodes($form.find('[data-name="'+name+'"]')).eq(index).find('input[value="'+value+'"]').attr('checked', true);
			}
			else {
				//why not use this.getIndex?
				$inputNodes = this.getWrapNodes($form.find('[name="'+name+'"]')).eq(index).find('input, select, textarea');
			}

			if (this.isMultiple($inputNodes.eq(0)) === true){
				////console.log('control allows values will be split at spaces');
				value = value.split(' ');
			}
			//console.debug('name of form element to set value of (if exists in form):'+name+', index:'+index+' new value: '+value);
			////console.debug($inputNodes);
			return $inputNodes.val(value);
		}
	};

	/**
	 * Function: setAllVals
	 * 
	 * Uses current content of $data to set all the values in the form
	 * 
	 * Notes:
	 * 
	 * Since not all data nodes with a value have a corresponding input element, it could be considered to turn this
	 * around and cycle through the HTML form elements and check for each form element whether data is available.
	 * 
	 * Returns:
	 * 
	 *   -
	 */
	FormHTML.prototype.setAllVals = function(){
		var index, name, value,
			that=this;			
		////console.log('setting form values');
		data.node(null, null, {noEmpty: true}).get().each(function(){
			//parent = $(this).parent(),
			//parentName = parent.prop('nodeName'),
			value = $(this).text(); //actually should use Nodeset.getVal() for that would require changing getVal();
			//index = data.node(parentName).get().index(parent);
			index = data.node($(this).prop('nodeName')).get().index($(this));
			name = that.generateName($(this));
			//console.debug('calling input.setVal with name: '+name+', index: '+index+', value: '+value);
			that.input.setVal(name, index, value);
		});
		return;
	};

	FormHTML.prototype.setLangs = function(){
		var lang, value, newLabel,
			that = this,
			defaultLang = $form.find('#form-languages').attr('data-default-lang');
		////console.log('found default language: '+defaultLang);
		$('#form-languages').detach().insertBefore($('form.jr').parent());
		if (!defaultLang || defaultLang==='') {
			defaultLang = $('#form-languages a:eq(0)').attr('lang');
		}
		console.debug('default language is: '+defaultLang);

		if ($('#form-languages a').length < 2 ){
			$form.find('[lang]').addClass('active');
			//hide the short versions if long versions exist
			$form.find('.jr-form-short.active').each(function(){
				if ($(this).siblings('.jr-form-long.active').length > 0){
					$(this).removeClass('active');
				}
			});
			this.setHints();//defaultLang);
			return;
		}

		//$form.find('#form-languages').addClass('ui-helper-clearfix');
		$('#form-languages a').click(function(event){
			event.preventDefault();
			lang = $(this).attr('lang');
			$('#form-languages a').removeClass('active');
			$(this).addClass('active');
			////console.log('going to hide langauges');

			//$form.find('[lang]').not('.jr-hint, .jr-constraint-msg, jr-option-translations>*').show().not('[lang="'+lang+'"], [lang=""], #form-languages a').hide();
			$form.find('[lang]').removeClass('active').filter('[lang="'+lang+'"], [lang=""]').addClass('active');

			//hide the short versions if long versions exist
			$form.find('.jr-form-short.active').each(function(){
				if ($(this).siblings('.jr-form-long.active').length > 0){
					$(this).removeClass('active');
				}
			});

			//swap language of <select> <option>s
			$form.find('select>option').not('[value=""]').each(function(){
				value = $(this).attr('value');
				////console.log('option value is '+value);
				newLabel = $(this).parent('select').next('.jr-option-translations')
					.children('.active[data-option-value="'+value+'"]').text().trim();
				////console.log('new option label is '+newLabel +' with length: '+newLabel.length);
				newLabel = (typeof newLabel !== 'undefined' && newLabel.length > 0) ? newLabel : '[MISSING TRANSLATION]';
				
				$(this).text(newLabel);
			});

			//quickfix for labels and legends that do not contain a span.active without other class
			$form.find('legend span.active:not(.jr-hint, .jr-constraint-msg), label span.active:not(.jr-hint, .jr-constraint-msg)').each(function(){
				if ( $(this).text().trim().length === 0 ){
					$(this).text('[MISSING TRANSLATION]');
				}
			});

			that.setHints();
			//$form.fixLegends();
			$form.trigger('changelanguage');
		});
		$('#form-languages a[lang="'+defaultLang+'"]').click();
	};
		
	// called whenever language or ouput value changes
	FormHTML.prototype.setHints = function(){
		var hint, $wrapNode;
		////console.log('setting hints, lang is '+lang);
		$form.find('*>.jr-hint').parent().each(function(){
			if ($(this).prop('nodeName').toLowerCase() !== 'label' && $(this).prop('nodeName').toLowerCase() !== 'fieldset' ){
				$wrapNode = $(this).parent('fieldset');
			}
			else{
				$wrapNode = $(this);
			}
			//if ($wrapNode.length > 0){
			hint = ($wrapNode.length > 0 ) ? //&& lang !== 'undefined' && lang !== '') ? 
				$(this).find('.jr-hint.active').text().trim() : $(this).find('span.jr-hint').text().trim();
			//}
			
			////console.debug('hint: '+hint);
			if (hint.length > 0){
				////console.debug('setting hint: '+hint);
				//$(this).find('input, select').attr('title', hint);
				$wrapNode.find('.question-icons .hint').attr('title', hint).addClass('ui-icon ui-icon-help');
			}
			else{
				$wrapNode.find('.question-icons .hint').removeAttr('title').removeClass('ui-icon ui-icon-help');
			}
		});
		$form.tooltip(); //  use refresh() ??
	};

	//FormHTML.prototype.reset = function(){
//		//var value1st;
//		//ADD ?? checkForOpenForm(false);
//		$form.reset();
//		this.recordName.reset();
//		this.recordStatus.reset();
//		form.editStatus.set(false);//

//		//$('#survey-title').text('New Survey');//

//		//$('button#delete-form').hide();//

//		//set the combobox with the list of files back to the first item
//		
//	};

	FormHTML.prototype.editStatus = {
		set : function(status){
			$form.attr('data-edited',Boolean(status));//.toString());
			$form.trigger('edit', status);
		},
		get : function(){
			return ($form.attr('data-edited') === 'true') ? true : false;
		}
	};

	FormHTML.prototype.recordName = {
		set : function(key){
			$form.attr('data-stored-with-key', key);
			//$('#record-name').text(key);
			$form.find('h2 span').text(key);
		},
		get : function() {
			return $form.attr('data-stored-with-key') || null;
		},
		reset : function(){
			$form.removeAttr('data-stored-with-key');
		}
	};


	FormHTML.prototype.recordStatus = {
		set : function(markedFinal){
			$form.attr('data-stored-final', markedFinal.toString());
		},
		get : function() {
			return ($form.attr('data-stored-final') === 'true') ? true : false;
		},
		reset : function(){
			$form.removeAttr('data-stored-final');
		}
	};

	// evaluate the skip logic in data-relevant attributes
	// this function should be called whenever $data has been updated
	// If this becomes more complex it is probably better to create a branch object:
	// branch.anim, branch.filter, branch.duration, branch.update, branch.init() //for eventhandlers
	// this would actually be more consistent too as it's more modular like widgets, repeats, preloads
	FormHTML.prototype.branch = {
		init: function(){
			//console.debug('initializing branches');
			$form.on('click', '.jr-branch', function(event){
				var $that = $(this);
				if(!$(this).hasClass('busy')){
					if ($(this).hasClass('show')){
						$(this).addClass('busy').removeClass('show').next().hide('blind', {}, 600, function(){
							$that.removeClass('busy');
						});
					}
					else{
						$(this).addClass('busy show').next().show('blind', {}, 600, function(){
							$that.removeClass('busy');
							$that.next().fixLegends();
						});
					}
				}
				
			});
			this.update();
		},
		/**
		 * updates branches based on changed input fields
		 * @param  {string=} changedNodeNames [description]
		 * @return {boolean}                  [description]
		 */
		update: function(changedNodeNames){
			var i, p, branchNode, result, namesArr, cleverSelector,			
				alreadyCovered = {},
				that=this;
			
			namesArr = (typeof changedNodeNames !== 'undefined') ? changedNodeNames.split(',') : [];
			cleverSelector = (namesArr.length > 0) ? [] : ['[data-relevant]'];
			
			for (i=0 ; i<namesArr.length ; i++){
				cleverSelector.push('[data-relevant*="'+namesArr[i]+'"]');
			}

			console.debug('Updating branches for expressions that contain: '+namesArr.join());
			//console.debug('the clever selector created: '+cleverSelector.join());

			$form.find(cleverSelector.join()).each(function(){
				//VERY WRONG TO USE form HERE!!!! FIX THIS
				//one could argue that I should not use the input object here as a branch is not always an input (sometimes a group)		
				p = form.input.getProps($(this));
				branchNode = form.input.getWrapNodes($(this));
				
				//name = $(this).attr('name');
				
				if ((p.inputType == 'radio' || p.inputType == 'checkbox') && alreadyCovered[p.path]){
					return false;
				}
				////console.debug(p);
				////console.debug(branchNode);

				//type = $(this).prop('nodeName').toLowerCase();
				//type = (type == 'input') ? $(this).attr('type').toLowerCase() : type;
				
				//expr = $(this).attr('data-relevant'); //"5 = 5";

				//branchNode = (type == 'fieldset') ? $(this) : 
				//	(type == 'radio' || type == 'checkbox') ? $(this).parent().parent('fieldset') : $(this).parent('label');

				if(branchNode.length !== 1){
					console.error('could not find branch node');
					return false;
				}
				try{
					//var result = evaluator.evaluate(expr, context.documentElement, null, XPathResult.BOOLEAN_TYPE, null);
					result = data.evaluate(p.relevant, 'boolean', p.path, p.ind);
					//console.debug('evaluated branch logic to: '+result+' (type: '+(typeof result)+')');
				}
				catch(e){
					console.error('Serious error occurred trying to evaluate skip logic '+
					'for node with name: "'+p.path+'" (message: '+e.message+')');
					return false;
				}
			
				alreadyCovered[p.path] = true;

				//for mysterious reasons '===' operator fails after Advanced Compilation even though result has value true 
				//and type boolean
				if (result === true){
					that.enable(branchNode);
				}
				else {
					that.disable(branchNode);
				}
			});
			return true;
		},
		/**
		 * Enables and reveals a branch node/group
		 * @param  {jQuery} branchNode [description]
		 * @return {jQuery}            [description]
		 */
		enable : function(branchNode){
			var type;
			console.debug('enabling branch');

			branchNode.prev('.jr-branch').hide('slow', function(){$(this).remove();});
			
			//branchNode.removeAttr('disabled');
			branchNode.removeClass('disabled').show('blind', {direction: 'up'}, 1000, function(){$(this).fixLegends();} );

			type = branchNode.prop('nodeName').toLowerCase();

			return (type == 'label') ? branchNode.children('input, select, textarea')
				.removeAttr('disabled') : branchNode.removeAttr('disabled');
		},
		disable : function(branchNode){
			var type, 
				branchClue = '<div class="jr-branch ui-corner-all"></div>';

			console.debug('disabling branch');
			//add disabled class (to style) and hide
			branchNode.addClass('disabled').hide(); //HUH??? Hide() DOESN"T WORK WITH PARAMETERS!
			//NOTE: DATA IS NOT REMOVED WHICH IS WRONG!
			
			//if the branch was previously enabled
			if (branchNode.prev('.jr-branch').length === 0){
				branchNode.before(branchClue);
				//if the branch was hidden upon loading, then shown and then hidden again
				//difficult to detect. Maybe better to just replace clearInputs with setDefaults	
				////console.debug('going to clear branch:');
				////console.debug(branchNode);
				branchNode.clearInputs('change');
			}

			//since all fields are emptied they can be marked as valid
			//branchNode.find('input, select, textarea').each(function(){
			//	this.setValid($(this));
			//});

			type = branchNode.prop('nodeName').toLowerCase();

			return (type == 'label') ? branchNode.children('input, select, textarea')
				.attr('disabled', 'disabled') : branchNode.attr('disabled', 'disabled');
	
		}
	};

/**
 * Function: outputUpdate
 * 
 * description
 * 
 * Parameters:
 * 
 * @param {string=} changedNodeNames - [type/description]
 * 
 * Returns:
 * 
 *   return description
 */
	FormHTML.prototype.outputUpdate = function(changedNodeNames){
		var i, $inputNode, contextPath, contextIndex, expr, namesArr, cleverSelector, 
			that=this,
			val='';
		console.log('updating active outputs that contain: '+changedNodeNames);
		namesArr = (typeof changedNodeNames !== 'undefined') ? changedNodeNames.split(',') : [];
		cleverSelector = (namesArr.length > 0) ? [] : ['.jr-output[data-value]'];
		for (i=0 ; i<namesArr.length ; i++){
			cleverSelector.push('.jr-output[data-value*="'+namesArr[i]+'"]');
		}
		//console.debug('the clever selector created: '+cleverSelector.join());
		
		$form.find(':not([disabled]) span.active').find(cleverSelector.join()).each(function(){
			try{
					expr = $(this).attr('data-value');
			//val = data.node($(this).attr('data-value')).getVal();
			///if (typeof expr !== 'undefined' && expr.length > 0){
				//temporary solution to make eMCI form run, some weird stuff in <output value= expressions
			//	try{
					//console.log('trying output expression: '+expr);
		
					val = data.evaluate(expr, 'string');
					//console.log(val);
				}
				catch(e){
					console.error('error occurred trying to evaluate output value from expression: '+
						expr+', (message:'+e.message+')');
					val = '[ERROR]';
				}
			//}	
//			} 
//			catch(e){
//				val = $(this).attr('data-value');
//				//console.log('output value was not referring to a node value, and was therefore assumed to be a string:' +val);
//			}
			$(this).text(val);
		});
		$form.fixLegends();
		//hints may have changed too
		this.setHints();
	};

	//var updatingCalcs;
	//@changedNodeNames {String} comma-separated list of changed data node names
	/**
	 * Function: calcUpdate
	 * 
	 * description
	 * 
	 * Parameters:
	 * 
	 *   @param {string=} changedNodeNames - [type/description]
	 * 
	 * Returns:
	 * 
	 *   return description
	 */
	FormHTML.prototype.calcUpdate = function(changedNodeNames){
		var i, name, expr, dataType, result, constraint, namesArr, valid, cleverSelector;

		//console.log('updating calculated items with expressions that contain: '+changedNodeNames);
		namesArr = (typeof changedNodeNames !== 'undefined') ? changedNodeNames.split(',') : [];
		cleverSelector = (namesArr.length > 0) ? [] : ['input[data-calculate]'];
		for (i=0 ; i<namesArr.length ; i++){
			cleverSelector.push('input[data-calculate*="'+namesArr[i]+'"]');
		}
		//console.debug('the clever selector created: '+cleverSelector.join());
		//if(!updatingCalcs){
			//updatingCalcs = true; //ACTUALLY THIS IS NOT CORRECT! BUT performance could become an issue
			// would be better to call at least twice if a value changes.
			
		$form.find('#jr-calculated-items').find(cleverSelector.join()).each(function(){
			name = $(this).attr('name');
			expr = $(this).attr('data-calculate');
			dataType = $(this).attr('data-type-xml');
			constraint = $(this).attr('data-constraint'); //obsolete?
			result = data.evaluate(expr, 'string', name, null); //not sure if using 'string' is always correct
			//console.debug('evaluated calculation: '+expr+' with result: '+result);
			valid = data.node(name, null).setVal(result, constraint, dataType);
			//if(valid !== 'undefined' && valid === false){
				//console.log('Calculated item with name: '+name+' value was set but does not have a valid value!');
			//}
		});
		//}
		//updatingCalcs = false;
	};

	FormHTML.prototype.beautify = function(){
		//$form.find('#form_logo').detach().prependTo($form);
		$form.find('.jr-group, .jr-repeat').addClass('ui-corner-all');
		$form.find('h2#form-title').addClass('ui-widget-header ui-corner-all');
		/*$form.find('form > fieldset').alternateBackground('alt-bg');*/
		$form.find('.trigger').addClass('ui-state-highlight ui-corner-all');
		//need to trigger fixLegends with a delay.. this is ugly..
		//setTimeout(function(){$form.fixLegends();}, 1000);
		//improve looks when images, video or audio is used as label
		$('fieldset:not(.jr-appearance-compact)>label, fieldset:not(.jr-appearance-compact)>legend').children('img,video,audio').parent().addClass('ui-helper-clearfix with-media');
	};

	FormHTML.prototype.widgets = {
		init : function(){
			//console.log('initializing widgets');
			this.compactWidget();
			this.dateWidget();
			this.timeWidget();
			this.dateTimeWidget();
			this.selectOneWidget();
			this.selectMultiWidget();
			this.readonlyWidget();
			this.gridWidget();
			this.spinnerWidget();
			this.sliderWidget();
			this.geoPointWidget();
			this.barcodeWidget();
		},
		compactWidget: function(){
			//move this to css!
			$form.find('.jr-appearance-compact>label>span').hide(); 
		},
		dateWidget : function(){
			
			/*$form.find('input[type="date"]').click(function(e){
				e.preventDefault();
			}).datepicker({
				onSelect: function(dateText){
					var d = new Date(dateText),
						dv = d.getFullYear().toString().pad(4)+'-'+(d.getMonth()+1).toString().pad(2)+'-'+d.getDate().toString().pad(2);
					$(this).val(dv).trigger('change');
				}
			});*/
			if(!Modernizr.inputtypes.date){
				$form.find('input[type="date"]').datepicker({});
			}
		},
		timeWidget : function(){
			if(!Modernizr.inputtypes.time){
				$form.find('input[type="time"]').timepicker({});
			}
		}, 
		dateTimeWidget : function(){
			if(!Modernizr.inputtypes.datetime){
				$form.find('input[type="datetime"]').datetimepicker();
			}
		},
		selectOneWidget : function(){
			//note: in chrome size is at least 4 if multiple attr is present
			$form.find('select:not([multiple])').attr('size', '1');//.find('[value=""]').remove();	
			$('select:not([multiple])').multiselect({
				'multiple': false,
				'header': 'Select one option',
				'noneSelectedText': 'Select one option',
				'selectedList': 1,
				'position': {
					'my':'left top', 
					'at': 'left bottom'
				}//,
				//selectedList: 1
			});		
		},
		selectMultiWidget : function(){
			//note: in chrome size is at least 4 if multiple attr is present
			$form.find('select[multiple]').attr('size', '5').find('[value=""]').remove(); //for html form

			$('select[multiple]').multiselect({
				'header': 'false', 
				'position': {
					'my':'left top', 
					'at': 'left bottom'
				}

			});
		},
		//transforms readonly inputs into triggers
		readonlyWidget : function(){
			$form.find('input[readonly]:not([data-type-xml="geopoint"])').parent('label').each(function(){
				//var $spans = $(this).find('span').not('.question-icons span').detach(); 
				var html = $(this).html(),
					relevant = $(this).find('input').attr('data-relevant'),
					name = 'name="'+$(this).find('input').attr('name')+'"',
					attributes = (typeof relevant !== 'undefined') ? 'data-relevant="'+relevant+'" '+name : name;
				$('<fieldset class="trigger ui-state-highlight ui-corner-all" '+attributes+'></fieldset>')
					.insertBefore($(this)).append(html).find('input').remove(); 
				$(this).remove();
			});
		},
		gridWidget :function(){
			//$form.find('.jr-appearance-compact label img').selectable();
		},
		spinnerWidget :function(){
			//$form.find('input[type="number"]').spinner();
		},
		sliderWidget : function(){
			//detect max and min with algorithm that evaluates expressions multiple times
			//algortithm could guess likely border values by using a regular expression search...
		},
		geoPointWidget : function(){
			//add current location automatically
			//provide edit button to change manually
			//in edit mode, the button switches to an Auto button that 
			//automatically detects
			$form.find('input[data-type-xml="geopoint"]').attr('placeholder', 'Awesome geopoint widget will follow in the future!');
		},
		autoCompleteWidget: function(){

		},
		barcodeWidget : function(){
			$form.find('input[data-type-xml="barcode"]').attr('placeholder', 'This probably does not require support for browser data entry.');
		}
	};

	/*Note that preloaders may be deprecated in the future, so not important*/
	//functions are design to fail silently if unknown preloaders are called
	FormHTML.prototype.preloads = {
		init: function(){
			var item, param, name, curVal,
				that = this;
			//console.log('initializing preloads');
			$form.find('#jr-preload-items input').each(function(){
				item = $(this).attr('data-preload').toLowerCase();
				param = $(this).attr('data-preload-params').toLowerCase();
				name = $(this).attr('name');
				if (typeof that[item] !== 'undefined'){
					//proper way would be to add index
					curVal = data.node(name).getVal();
					that.setVal($(this), that[item]({param: param, curVal:curVal, node: $(this)}));
				}
				else{
					console.error('Preload "'+item+'"" not supported. May or may not be a big deal.');
				}
			});
		},
		setVal: function(node, val){
			//console.debug('preload input node:');
			//console.debug(node);
			//console.debug('value of preload item to set:' +val);
			//node.removeAttr('disabled').val(val.toString()).trigger('change').attr('disabled', 'disabled');
			node.val(val.toString()).trigger('change');
		},
		'timestamp' : function(o){
			var that = this;
			// when is 'start' or 'end'
			if (o.param == 'start' && o.curVal !== ''){
				return (o.curVal === '') ? o.curVal : data.evaluate('now()', 'string');
			}
			if (o.param == 'end'){
				//set event handler for each save event (needs to be triggered!)
				$form.on('beforesave', function(){that.setVal(o.node, data.evaluate('now()', 'string'));});
				return data.evaluate('now()', 'string');
			}
			return '';
		},
		'date' : function(o){
			var today, year, month, day;

			if (o.curVal !== ''){
				today = new Date(data.evaluate('today()', 'string'));
				year = today.getUTCFullYear().toString().pad(4);
				month = (today.getUTCMonth() + 1).toString().pad(2);
				day = today.getUTCDate().toString().pad(2);

				return year+'-'+month+'-'+day;
			}
			return o.curVal;
		},
		'property' : function(o){
			// of = 'deviceid', 'subscriberid', 'simserial', 'phonenumber'
			// return '' except for deviceid?
			return 'no property preload in Rapaide';
		},
		'context' : function(o){
			// 'application', 'user'??
			return (o.param == 'application') ? 'rapaide' : '';
		},
		'patient' : function(o){
			return 'not supported in Rapaide';
		},
		'user' : function(o){
			//uuid, user_id, user_type
			return 'user preload item not functioning yet';
		},
		'uid' : function(o){
			//general
			return 'no uid';
		},
		'browser' : function(o){
			//console.debug('evaluation browser preload');
			if (o.param == 'name'){
				
				var a = ($.browser.webkit) ? 'webkit' : ($.browser.mozilla) ? 'mozilla' : ($.browser.opera) ? 'opera' : ($.browser.msie) ? 'msie' : 'unknown';
				//console.debug(a);
				return a;
			}
			if (o.param == 'version'){
				return $.browser.version;
			}
		},
		'os': function(o){
			return 'not known';
		}
	};

/**
 * Variable: repeat
 * 
 * This can perhaps be simplified and improved by:
 * - adding a function repeat.update() that looks at the instance whether to add repeat form fields
 * - calling update from init() (data.init() is called before form.init() so the initial repeats have been added already)
 * - when button is clicked data.node().clone() or data.node().remove() is called first and then repeat.update()
 * - watch out though when repeats in the middle are removed... or just disable that possibility
 * 
 */
	FormHTML.prototype.repeat = {
		/**
		 * Function: init
		 * 
		 * Initiates all Repeat Groups in form (only called once).
		 * 
		 * Returns:
		 * 
		 *   return description
		 */
		init : function(){
			var i, numRepsInCount, repCountPath, numRepsInInstance, numRepsDefault,
				that=this;
			//console.debug('initializing repeats');
			$form.find('fieldset.jr-repeat').prepend('<span class="repeat-number"></span>');
			$form.find('fieldset.jr-repeat:not([data-repeat-fixed])')
				.append('<button type="button" class="repeat"></button><button type="button" class="remove"></button>');
			$form.find('button.repeat').button({'text': false, 'icons': {'primary':"ui-icon-plusthick"}});
			$form.find('button.remove').button({'disabled': true, 'text':false, 'icons': {'primary':"ui-icon-minusthick"}});

			//MOVE HANDLERS to FormHTML.eventHandlers?
			//delegated handlers (strictly speaking not required, but checked for doubling of events -> OK)
			$form.on('click', 'button.repeat:enabled', function(){
				//create a clone
				that.clone($(this).parent('fieldset.jr-repeat'));
				//prevent default
				return false;
			});
			$form.on('click', 'button.remove:enabled', function(){
				//remove clone
				that.remove($(this).parent('fieldset.jr-repeat.clone'));
				//prevent default
				return false;
			});
			//if the number of repeats is fixed
			//$form.find('fieldset.jr-repeat[data-repeat-fixed]').each(function(){
//				var numberOfRepeats = 1;
//				//ADD CODE TO determine number of repeats from Xpath reference
//				for (i=1 ; i <  numberOfRepeats ; i++){
//				//call repeatNode from child of $(this)
//				}
//			});

			//clone form fields to create the default number 
			//NOTE THIS ASSUMES THE DEFAULT NUMBER IS STATIC, NOT DYNAMIC!!
			$form.find('fieldset.jr-repeat').each(function(){
				repCountPath = $(this).attr('data-repeat-count') || "";
				numRepsInCount = (repCountPath.length > 0) ? parseInt(data.node(repCountPath).getVal(), 10) : 0;
				//console.debug('number of reps in count attribute: ' +numRepsInCount);
				numRepsInInstance = data.node($(this).attr('name')).get().length;
				numRepsDefault = (numRepsInCount > numRepsInInstance) ? numRepsInCount : numRepsInInstance;
				
				//console.log('default number of repeats for '+$(this).attr('name')+' is '+numRepsDefault);
				//1st rep is already included (by XSLT transformation)
				for (i = 1 ; i<numRepsDefault ; i++){
					that.clone($(this).siblings().andSelf().last(), '');
				}
			});
		},
		/**
		 * Function: clone
		 * 
		 * description
		 * 
		 * Parameters:
		 * 
		 *   node - [type/description]
		 * 
		 * Returns:
		 * 
		 *   return description
		 */
		clone : function($node, ev){
			var $master, $clone, $parent, index, radioNames, i, path, timestamp,
				that = this;
			if ($node.length !== 1){
				console.error('Nothing to clone');
				return false;
			}
			$parent = $node.parent('fieldset.jr-group');
			$master = $parent.children('fieldset.jr-repeat:not(.clone)').eq(0);
			//create a clone and
			$clone = $master.clone(false);//deep cloning with button events causes problems
			//remove any clones inside this clone.. (cloned repeats within repeats..)
			$clone.find('.clone').remove();
			$clone.addClass('clone');//.removeClass('invalid ui-state-error');
			//re-initialize buttons
			$clone.find('button.remove').button({'text':false, 'icons': {'primary':"ui-icon-minusthick"}});
			$clone.find('button.repeat').button({'text': false, 'icons': {'primary':"ui-icon-plusthick"}});

			$clone.insertAfter($node)
				//.find('button').removeClass('ui-state-hover')
				.parent('.jr-group').numberRepeats();
			$clone.hide().show('highlight',{ },600); //animations that look okay: highlight, scale, slide
			//is this code actually working?
			//clone.find('input, select, textarea').val(null);
			$clone.clearInputs(ev);
			$clone.find('.invalid input, .invalid select, .invalid textarea').each(function(){
				that.setValid($(this));
			});
			//clone.find('fieldset.jr-repeat').addClass('clone');

			//note: in http://formhub.org/formhub_u/forms/hh_polio_survey_cloned/form.xml a parent group of a repeat
			//has the same ref attribute as teh nodeset attribute of the repeat. This would cause a problem determining 
			//the proper index if .jr-repeat was not included in the selector
			index = $form.find('fieldset.jr-repeat[name="'+$node.attr('name')+'"]').index($node);
			//parentIndex = $form.find('[name="'+$master.attr('name')+'"]').parent().index($parent);
			//add ____x to names of radio buttons where x is the index
			radioNames = [];
			
			$clone.find('input[type="radio"]').each(function(){
				if ($.inArray($(this).attr('data-name'), radioNames) === -1){
					radioNames.push($(this).attr('data-name'));
				}
			});
			//console.debug ('different radioNames in clone: '+radioNames.join());
			for (i=0; i<radioNames.length ;i++){
				timestamp = new Date().getTime().toString();
				//index of the clone is index of the master node + 1
				//clone.find('input[type="radio"][name="'+radioNames[i]+'"]').attr('name', radioNames[i]+'____'+(index+1));
				$clone.find('input[type="radio"][data-name="'+radioNames[i]+'"]').attr('name', timestamp);
			}

			this.toggleButtons($master.parent());

			//create a new data point in <instance> by cloning the template node
			path = $master.attr('name');

			//0-based index of node in a jquery resultset when using a selector with that name attribute
			//console.log('index of form node to clone: '+index);
			/*
			 * clone data node if it doesn't already exist
			 */
			if (path.length > 0 && index >= 0 ){//&& data.node(path, index+1).get().length === 0){
				////console.debug('calling data.cloneTemplate');
				data.cloneTemplate(path, index);
			}

			$form.trigger('changerepeat'); 
			return true;
		},
		remove : function(node){
			var delay = 600,// dataNode,
				that = this,
				repeatPath = node.attr('name'),
				repeatIndex = $form.find('[name="'+repeatPath+'"]').index(node),
				parentGroup = node.parent('fieldset.jr-group');
			//var parent = node.parent('fieldset.jr-repeat');
		
			//var parentSiblings = parent.siblings();
		
			node.hide('drop',{}, delay, function(){
				node.remove();
				parentGroup.numberRepeats();

				that.toggleButtons(parentGroup);
			});

			//now remove the data node
			data.node(repeatPath, repeatIndex).remove();

			$form.trigger('changerepeat'); 
		},
		toggleButtons : function(node){
			//var constraint;
			node = (typeof node == 'undefined' || node.length === 0 || !node) ?	node = $form : node;
			
			//first switch everything off and remove hover state
			node.find('button.repeat, button.remove').button('disable').removeClass('ui-state-hover');
		
			//enable last + button if constraint is true or non-existing
			//constraint = node.attr('data-constraint');
			//if ((constraint.length > 0 && evalXpression(constraint) === true) || typeof constraint == 'undefined'){
				node.find('fieldset.jr-repeat:last-child > button.repeat').button('enable');
			//}
			// the nth-child selector is a bit dangerous. It relies on this structure <fieldset class="jr-repeat"><h2></h2><label><label><label></fieldset>
			// alternatively, we could allow the first repeat to be deleted as well (as long as it is not the ONLY repeat)
			node.find('fieldset.jr-repeat:not(:nth-child(2)) > button.remove').button('enable'); //Improve this so that it enables all except first
		}
	};
	
	FormHTML.prototype.setEventHandlers = function(){
		var n, valid,//path, index, constraint, value, values, inputType, xmlDataType, indexOfAddition, gpIndex, $fieldset, valid, 
			that = this;

		//first prevent default submission, e.g. when text field is filled in and Enter key is pressed
		$('form.jr').attr('onsubmit', 'return false;');

		$form.on('change validate', 'input, select, textarea', function(event){ 
			n = that.input.getProps($(this));
			//console.debug('change event detected trigger by element with following properties:');
			//console.debug(n);

			//the enabled check serves a purpose only when an input field itself is marked as enabled but its parent fieldset is not
			if (event.type == 'validate'){
				//if an element is disabled mark it as valid (to undo a previously shown branch with fields marked as invalid)
				valid = (n.enabled && n.inputType !== 'hidden') ? data.node(n.path, n.ind).validate(n.constraint, n.xmlType) : true;
			}
			else{
				valid = data.node(n.path, n.ind).setVal(n.val, n.constraint, n.xmlType);
			}
			
			//console.log('data.set validation returned valid: '+valid);
			//additional check for 'required'
			valid = (n.enabled && n.inputType !== 'hidden' && n.required && n.val.length < 1) ? false : valid;

			if (typeof valid !== 'undefined' && valid !== null){
				return (valid === false) ? that.setInvalid($(this)) : that.setValid($(this));
			}
		});	
		
		//nodeNames is comma-separated list as a string
		$form.on('dataupdate', function(event, nodeNames){
			//nodeNames = nodeNames.split(',');
			//console.debug('dataupdate detected on: '+nodeNames);
			//console.debug(event);
			
			that.calcUpdate(nodeNames); //EACH CALCUPDATE THAT CHANGES A VALUE TRIGGERS ANOTHER CALCUPDATE => VERY INEFFICIENT
			that.branch.update(nodeNames);
			that.outputUpdate(nodeNames);
			//it is possible that a changed data value validates question that were previously invalidated
			//that.validateInvalids();
		});

		//edit is fired when the form changes due to user input or repeats added/removed
		//branch update doesn't require detection as it always happens as a result of an event that triggers change or changerepeat.
		$form.on('change changerepeat', function(event){
			//console.debug('detected event to trigger editstatus: ');
			//console.debug(event);
			that.editStatus.set(true);
		});

		$form.on('changerepeat', function(event){
			//set defaults of added repeats, setAllValls does not trigger change event
			that.setAllVals();
			//the cloned fields may have been marked as invalid, so after setting thee default values, validate the invalid ones
			//that.validateInvalids();
		});

//		$form.on('beforesave', function(event){
//			console.debug('beforesave event detected');
//			that.validateAll();
//		});

		//hacks for legends
		//it would be much better to replace these two handlers with a handler that detects the resize event of the form
		//but for some reason that doesn't work
		$(window).resize(function(){
			$form.fixLegends();
		});

		$form.on('changelanguage', function(){
			//console.log('changelanguage event detected');
			that.outputUpdate();
		});
	};

	FormHTML.prototype.setValid = function(node){
		//var visualNode;
		//visualNode = (type == 'checkbox' || type == 'radio') ? node.parent().parent('fieldset') : node.parent('label');
		//visualNode.removeClass('invalid');//.find('div.invalid').remove();
		this.input.getWrapNodes(node).removeClass('invalid ui-state-error');
	};

	FormHTML.prototype.setInvalid = function(node){
		//var visualNode;
		//visualNode = (type == 'checkbox' || type == 'radio') ? node.parent().parent('fieldset') : node.parent('label');
		//visualNode.addClass('invalid');
//		if (!visualNode.children().first().hasClass('invalid')){
//			visualNode.prepend(
//				$('<div class="invalid"></div>').append(visualNode.find('.jr-constraint-msg'))
//			);
//			visualNode.find('.invalid .active').show(); // THIS LINE CAN BE REMOVE WHEN SETLANG() IS REFACTORED USE CSS FOR DISPLAYING
//		}
		this.input.getWrapNodes(node).addClass('invalid ui-state-error');
	};

	/**
	 * Function: generateName
	 * 
	 * Function to generate the name of a form element (= simple path to data node) corresponding to the provided data node. Omits instance node.
	 * 
	 * Parameters:
	 * 
	 *   node - A data node of which to determine the corresponding form field name.
	 * 
	 * Returns:
	 * 
	 *   String that looks like an XPath
	 *   
	 */
	FormHTML.prototype.generateName = function(dataNode){
		//other nodes may have the same XPath but because this function is used to determine the corresponding input name of a data node, index is not included 
		var steps = [dataNode.prop('nodeName')],
			parent = dataNode.parent();
		while (parent.length == 1 && parent.prop('nodeName') !== '#document'){
			steps.push(parent.prop("nodeName"));
			parent = parent.parent();
		}
		return '/'+steps.reverse().join('/');
	};

	/**
	 * Validates all enabled input fields after first resetting everything as valid.
	 * @return {boolean} whether the form contains any errors
	 */
	FormHTML.prototype.validateAll = function(){
		var that = this;
		//can't fire custom events on disabled elements therefore we set them all as valid
		$form.find('fieldset:disabled input, fieldset:disabled select, fieldset:disabled textarea, input:disabled, select:disabled, textarea:disabled').each(function(){
			that.setValid($(this));
		});
		//the above still leaves out elements that are not disabled directly but have disabled parents
		//this is dealt with in the validate event handler
		$form.find('input, select, textarea').trigger('validate');
		return this.isValid();
	};

	/**
	 * Returns true is form is valid and false if not. Needs to be called AFTER (or by) validateAll()
	 * @return {!boolean} whether the form is valid
	 */
	FormHTML.prototype.isValid = function(){
		return ($form.find('.invalid').length > 0) ? false : true;
	};
}

GUI.prototype.setCustomEventHandlers = function(){};

/**
 * Converts a native Date UTC String to a JavaRosa style date string
 * @return {string} a date or datetime string formatted according to JavaRosa
 */
Date.prototype.toJrString = function(){
	//2012-09-05T12:57:00.000-04 (ODK)
	//2012-09-01 (ODK)
	var timezone,
		date=this,
		jrDate = date.getUTCFullYear().toString().pad(4)+'-'+(date.getUTCMonth()+1).toString().pad(2)+'-'+date.getUTCDate().toString().pad(2);
	//console.log('date: '+date.toString());
	if ( date.getUTCMilliseconds() > 0 || date.getUTCSeconds() > 0 || date.getUTCMinutes() > 0 || date.getUTCHours()>0 ){
		jrDate += 'T'+date.getHours().toString().pad(2)+':'+date.getMinutes().toString().pad(2)+':'+date.getSeconds().toString().pad(2)+
			'.'+date.getMilliseconds().toString().pad(3);
		timezone = date.getTimezoneOffset()/60;
		jrDate += (timezone < 0) ? '+'+(-timezone).toString().pad(2) : '-'+timezone.toString().pad(2);
		//(-date.getTimezoneOffset()/60);
	}
	return jrDate;
};

(function($){
	"use strict";
	// plugin to update number of repeated elements (with class jr-repeat)
	$.fn.numberRepeats = function() {

		return this.each(function(){

			$(this).find('fieldset.jr-repeat').each(function(){
				var repSiblings, qtyRepeats, i;
				////console.log('found '+$(this).find('fieldset.jr-group > fieldset.jr-repeat').length +' items');
				// if it is the first-of-type (not that ':first-of-type' does not have cross-browser support)
				if ($(this).prev('fieldset.jr-repeat').length === 0){
					repSiblings = $(this).siblings('fieldset.jr-repeat');
					qtyRepeats = repSiblings.length + 1;
					////console.log('number of repeats of '+$(this).attr('name')+' is '+qtyRepeats);
					if (qtyRepeats > 1) {
						$(this).find('span.repeat-number').text('1');
						i = 2;
						repSiblings.each(function(){
							////console.log('numbering a repeat');
							$(this).find('span.repeat-number').text(i);
							i++;
						});
					}
					else{
						$(this).find('span.repeat-number').empty();
					}
				}
				else{
					////console.log('not first of type');
				}
			});
		});
	};

/**
 * Function: clearInputs
 * 
 * Clears form input fields and triggers events when doing this. If formelement is cloned but not yet added to DOM 
 * (and not synchronized with data object), the desired event is probably 'edit' (default). If it is already added 
 * to the DOM (and synchronized with data object) a regular change event should be fired
 * 
 * Parameters:
 * 
 *   ev - event to be triggered
 * 
 * Returns:
 * 
 *   jQuery this object
 */
	$.fn.clearInputs = function(ev) {
		ev = ev || 'edit';
		////console.log('objects received to clear: '+this.length);
		////console.debug(this);
		////console.log('event to fire: '+ev);
		return this.each(function(){
			////console.debug($(this));
			$(this).find('input, select, textarea').each(function(){
				var type = $(this).attr('type');
				if ($(this).prop('nodeName').toUpperCase() === 'SELECT'){
					type = 'select';
				}
				if ($(this).prop('nodeName').toUpperCase() === 'TEXTAREA'){
					type = 'textarea';
				}
				////console.log('type to reset: '+type);
				switch (type){
					case 'date':
					case 'number':
					case 'search':
					case 'color':
					case 'range':
					case 'url':
					case 'email':
					case 'password':
					case 'text':
					case 'file':
					case 'hidden':
					case 'textarea':
						$(this).val('').trigger(ev);
						break;
					case 'radio':
					case 'checkbox':
						if ($(this).prop('checked')){
							//console.log('found checked value, going to reset it');
							$(this).prop('checked', false);
							$(this).trigger(ev);
						}
						break;
					case 'select':
						// TEST THIS!
						$(this)[0].selectedIndex = -1;
						$(this).trigger(ev);
						break;
					default:
						console.error('Unrecognized input type found when trying to reset: '+type);
				}
			});
		});
	};

	//this corrects a problem caused by the css legend fix (that positions the legend as 'absolute')
	//it corrects the margin-top of the first <label> sibling following a <legend>
	//the whole form (or several) can be provides as the context
	$.fn.fixLegends = function() {
		var legendHeight;
		////console.log('fixing legends');
		return this.each(function(){
			$(this).find('legend + label').each(function(){
				//console.error('found legend');
				legendHeight = ($(this).prev().find('.jr-constraint-msg.active').length > 0 && $(this).prev().height() < 36) ? 36 : 
					($(this).prev().height() < 19) ? 19 : 
					$(this).prev().height();
				
				$(this).animate({
					'margin-top' : (legendHeight+6)+'px'
				}, 600 );
			});
		});
	};


	/**
	 * Function: xfind
	 * 
	 * Simple XPath Compatibility Plugin for jQuery 1.1
	 * By John Resig
	 * Dual licensed under MIT and GPL.
	 * some changes made by Martijn van de Rijdt (not replacing $.find(), removed context)
	 * 
	 * Parameters:
	 * 
	 *   selector - String containing a JQuery selector or an XPath/
	 * 
	 * Returns:
	 * 
	 *   Nodes matching the selector.
	 *   
	 * See Also:
	 * 
	 *   Original plugin code here: http://code.google.com/p/jqueryjs/source/browse/trunk/plugins/xpath/jquery.xpath.js?spec=svn3167&r=3167
	 */
    $.fn.xfind = function(selector){
			var parts, cur, i;
			////console.debug('xfind plugin received selector: '+selector);
			// Convert the root / into a different context
            //if ( !selector.indexOf("/") ) {
            //        context = context.documentElement;
            //        selector = selector.replace(/^\/\w*/, "");
            //        if ( !selector )
            //                return [ context ];
            //}

            // Convert // to " "
            selector = selector.replace(/\/\//g, " ");

            //added by Martijn
            selector = selector.replace(/^\//,"");
            selector = selector.replace(/\/\.$/,'');

            // Convert / to >
            selector = selector.replace(/\//g, ">");

            // Naively convert [elem] into :has(elem)
            selector = selector.replace(/\[([^@].*?)\]/g, function(m, selector){
                    return ":has(" + selector + ")";
            });

            // Naively convert /.. into a new set of expressions
            // Martijn: I just don't see this except if this always occurs as nodea/../../parentofnodea/../../grandparentofnodea
            if ( selector.indexOf(">..") >= 0 ) {
                    parts = selector.split(/>\.\.>?/g);
                    //var cur = jQuery(parts[0], context);
                    cur = jQuery(parts[0], this);
                    for ( i = 1; i < parts.length; i++ )
                            cur = cur.parent(parts[i]);
                    return cur.get();
            }

            //selector += ':not([template], [template] *)';
            ////console.debug('xfind plugin going to return jQuery object with selector: '+selector);
            //if performance becomes an issue, it's worthwhile implementing this with native XPath instead.
            return this.find(selector);
    };

})(jQuery);
/**
 * @preserve Copyright 2012 Martijn van de Rijdt
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint browser:true, devel:true, jquery:true, smarttabs:true sub:true *//*global gui, jrDataStr, report, Form, store:true, StorageLocal:true, Settings, Modernizr*/

/* Global Variables and Constants -  CONSTANTS SHOULD BE MOVED TO CONFIG FILE AND ADDED DYNAMICALLY*/

var /**@type {Form}*/form;
var /**@type {Connection}*/connection;
var /**@type {Cache}*/cache;
var /**@type {Settings}*/settings,
	currentOnlineStatus = false;//, SURVEY_FORM_ID;
var /**@type {StorageLocal}*/ store;
var MODERN_BROWSERS_URL = 'modern_browsers';

DEFAULT_SETTINGS = {'autoUpload':true, 'buttonLocation': 'bottom', 'autoNotifyBackup':false };
//var GEARS_MANIFEST_URL = 'manifest/gears';

//var MAX_QTY_SAVED_FORMS = 50;
var CACHE_CHECK_INTERVAL = 3600*1000;

//tight coupling with Form and Storage class, but loose coupling with GUI
// !Document.ready()
/************ Document Ready ****************/
$(document).ready(function() {
	'use strict';
	var bookmark, message, choices, shown, time;

	store = new StorageLocal();
	form = new Form('form.jr:eq(0)', jrDataStr);
	settings = new Settings();
	settings.init();
	connection = new Connection();
	
	// check if localStorage is supported and if not re-direct to browser download page
	if (!store.isSupported()){
	//if(Modernizr.localStorage){
		//console.log('redirect attempt because of lack of localStorage support'); // DEBUG
		window.location = MODERN_BROWSERS_URL;
	}
	else{
		$(document).trigger('browsersupport', 'local-storage');
	}

	//reminder to bookmark page will be shown 3 times
	bookmark = store.getRecord('__bookmark');
	
	//shown=0;
	//if (bookmark){
	//	shown = (bookmark.shown) ? bookmark.shown : 0;
	//}

	shown = (bookmark) ? bookmark['shown'] : 0;
	if(shown < 3){
		setTimeout(function(){
			time = (shown === 1) ? 'time' : 'times';
			gui.showFeedback('Please bookmark this page for easy offline launch. '+
				'This reminder will be shown '+(2-shown)+' more '+time+'.', 20);
			shown++;
			store.setRecord('__bookmark', {'shown': shown});
		}, 5*1000);
	}
	
	//best to place this after localStorage check, so that IE7 users with Gears
	//will be re-directed immediately before asking whether they allow Gears to store data
	if ($('html').attr('manifest')){
		cache = new Cache();
		cache.init();
		// application cache for launching application offline
		if (cache.isSupported()){
			
			$(document).trigger('browsersupport', 'offline-launch');
			
			//check for updated cache
			checkCache();
			
			// Check for an updated manifest file regularly and refresh cache if necessary.
			window.setInterval(function(){
				checkCache();
			}, CACHE_CHECK_INTERVAL);
			
		}
		else{ // if applicationCache is not supported
			message = 'Offline application launch not supported by your browser. '+
					'You can use it without this feature or see options for resolving this';
			choices = {
				posButton : 'Show options',
				negButton : 'Use it',
				posAction : function(){ window.location = MODERN_BROWSERS_URL; }
			};
			gui.confirm({msg: message, heading:'Application cannot launch offline'}, choices);
		}
		console.log('cache initialized');
	}

	//var formFormat;
	// get form format from json file and build the survey form elements
	//var request;
//	if (window.XMLHttpRequest){
	//request=new XMLHttpRequest();
	//request.open("GET", FORM_FORMAT_URL, false); //not asynchronous!!
	//request.send();
	//if (request.responseText === 'error'){
	//	console.log('This survey does not exist or has not been published yet');
	//}
	//else if (request.responseText && request.responseText!=''){
	//	formFormat = JSON.parse(request.responseText);
	//	//formFormat = request.responseText; //maybe do check to see if responseText is in XML format?
	//	console.log('loaded form format from the json file:'+JSON.stringify(formFormat));
	//}
	//else {
	//	console.log('Error occurred while loading form format');
	//}
	////	var formBuiltSuccessfully;
//	if (formFormat){
//		formBuiltSuccessfully = form.init(formFormat);
//	}
	
	//console.log('form built successfully?: '+formBuiltSuccessfully); // DEBUG
	
//	if(formBuiltSuccessfully){
		
		
		//$('header #survey-info').text(form.COUNTRY+' '+form.SECTOR+' '+form.YEAR+' '+form.SURVEY_NAME);
		
	// initialize the GUI object
	//gui.init();
	
	form.init();
	
	connection.init(); //should be called after form format is loaded
	//initialize file export/backup function
	//initSaveFormsToFile(); // CHECK SAFARI OS X BUG
	
	
	
	// ADD / REPLACE If there is sufficient cross-browser support this could be replaced by simply calling window.navigator.onLine which returns false or true
	//var onlineCheckInterval = window.setInterval(function () {
		//checking online status
		//console.log('checking online status'); // DEBUG
	//	gui.updateConnectionStatus(connection.getStatus());
	//}, 5*1000);
			
	
	
	///var linkAnalysis = $('#link-analysis').attr('href')+'?name='+connection.getTableName();
	//$('#link-analysis').attr('href', linkAnalysis);
	
	

	gui.setup();
//	}
//	else{
//	// ADD ERROR PAGE!
//	console.log('form not built successfully');
//	}

	//trigger fake save event to update formlist on data page
	$('form.jr').trigger('save', JSON.stringify(store.getFormList()));
});

function checkCache(){
	'use strict';
	cache.checkForUpdate();
	window.setTimeout(function(){
		console.log('going to provide cache feedback to user. cache.getError='+cache.getError()); // DEBUG
		if (cache.updateReady()){
			gui.showFeedback('A new version of this application has been downloaded. '+
				'Please save your work and refresh to update.', 20); //REQUIRES DOUBLE REFRESH IN IE8....
		}
		else if (cache.getError()){
			if (cache.getError() === 'security'){
				gui.showFeedback ('Please allow site to store data for offline use and refresh.', 60);
			}
			else {
				gui.alert('An error occurred with the application cache. '+
				'You may have a problem launching offline (error: '+cache.getError()+'). '+
				'Please save your work, refresh and check if offline launch works.');
			}
		}
	}, 30*1000); //it may take a while for the resources to download
}

/**
 * Controller function to load a form from local storage. Checks whether there is any unsaved data in the current form first.
 * @param  {string} formName  The name of the form to load (key of local db).
 * @param  {boolean=} confirmed Whether unsaved data can be discarded and lost forever.
 */
function loadForm(formName, confirmed){
	'use strict';
	var message, choices, record;
	//console.log('loadForm called'); // DEBUG
	if (!confirmed && form.getEditStatus()){
		message = 'Would you like to proceed without saving changes to the form you were working on?';
		choices = {
			posAction: function(){ loadForm(formName, true); }
		};
		gui.confirm(message, choices);
	}
	else {
		// request a form data object
		record = store.getRecord(formName);
		//enters that data in the form on the screen
		// *OLD*checkForOpenForm(true);
		if (record.data !== null){
			//var success = form.setData(data);
			form.reset();
			//gui.closePage();
			form = new Form('form.jr:eq(0)', record.data);
			form.init();
			//form.setRecordStatus(record.ready);
			//Avoid uploading of currently open form by setting edit status in STORE to false. To be re-considered if this is best approach.
			//store.setRecordStatus(formName, false);
			form.setRecordName(formName);
			//console.log('displaying loaded form data succes?: '+success); // DEBUG
			$('#page-close').click();
			$('button#delete-form').button('enable');
			//if(!success){
				//gui.alert('Error loading form. Saved data may be corrupted');
			//}
			//else
			gui.showFeedback('"'+formName +'" has been loaded', 2);
		}
		else{
			gui.alert('Record contained no data');
			// ADD something went wrong with loading data from storage
		}
	}
}
/**
 * [saveForm description]
 * @param  {string=} confirmedRecordName  [description]
 * @param  {string|boolean=} confirmedFinalStatus [description]
 * @param  {boolean=} deleteOldName        [description]
 * @param  {boolean=} overwriteExisting    [description]                   [description]
 */
function saveForm(confirmedRecordName, confirmedFinalStatus, deleteOldName, overwriteExisting){
	'use strict';
	var result, message, choices,
		curRecordName = form.getRecordName(),
		curRecordFinal = form.getRecordStatus(),
		rec = {};
		//record = { 'data': form.getDataStr(true, true), 'ready': confirmedFinalStatus};
	//record['ready'] = confirmedFinalStatus;
	console.debug('new name: '+confirmedRecordName+', before: '+curRecordName+', delOld: '+deleteOldName+', overwr: '+overwriteExisting);
	if (form.getDataStr(true, true) === null || form.getDataStr(true, true) === ''){
		return gui.showFeedback('Nothing to save.'); //ADD error with getting data from form?
	}

	if (typeof confirmedRecordName == 'undefined' || confirmedRecordName.length === 0){
		curRecordName = curRecordName || store.getCounterValue();
		$('#dialog-save input[name="record-name"]').val(curRecordName);
		$('#dialog-save input[name="record-final"]').attr('checked', curRecordFinal);
		return gui.saveConfirm();
		//console.debug('new Record Props: '+JSON.stringify(newRecord));
		//return saveForm(newRecord.name, newRecord.markedFinal);
	}

	if (curRecordName && curRecordName !== confirmedRecordName && typeof deleteOldName == 'undefined'){
		message = 'Record name has changed. Would you like to delete the record saved under the old name:'+curRecordName+'?';
		choices = {
			posButton : 'Yes, delete',
			negButton : 'No, keep',
			posAction : function(){ saveForm(confirmedRecordName, confirmedFinalStatus, true); },
			negAction : function(){ saveForm(confirmedRecordName, confirmedFinalStatus, false); }
		};
		return gui.confirm({msg: message, heading: 'Delete old Record?'}, choices);
	}

	//trigger beforesave event which is used e.g. to update timestamp preload item.
	$('form.jr').trigger('beforesave');
	rec = { 'data': form.getDataStr(true, true), 'ready': confirmedFinalStatus};
	// HOW THE HELL DOES REC GET A LASTSAVED PROPERTY HERE??? SOMETHING VERY WRONG
	console.debug('sending following record to store.setRecord():');
	console.debug(rec);
	//alert('hey');
	result = store.setRecord(confirmedRecordName, rec, deleteOldName, overwriteExisting, curRecordName);
		
	console.log('result of save: '+result); // DEBUG
	if (result === 'success'){
		gui.showFeedback('Form with name "'+confirmedRecordName+'" has been saved.', 2);
		
		//set the new custom html5 data attribute stored-with-key
		form.setRecordName(confirmedRecordName);
		form.setRecordStatus(confirmedFinalStatus);
		form.setEditStatus(false);
		$('button#delete-form').button('enable');
		//update records in GUI
		$('form.jr').trigger('save', JSON.stringify(store.getFormList()));
	}
	//else if (result === 'require'){
	//	gui.alert (form.KEY_LABEL+' is required. Please provide this.');
	//}
	else if (result === 'existing'){
		message = 'Record with name '+confirmedRecordName+' already exists. Would you like to overwrite existing record? ';
		choices = {
			posButton : 'Yes, overwrite',
			posAction : function(){ saveForm(confirmedRecordName, confirmedFinalStatus, deleteOldName, true); },
			negAction : function(){ gui.showFeedback("Form was not saved.");}
		};
		gui.confirm(message, choices);
	}
	else if (result === 'forbidden'){
		gui.alert ('This name is not allowed. Please change it');
		gui.showFeedback ('Form was NOT saved.');
	}
	else {
		gui.showFeedback('Error occurred. Form was NOT saved.');
	}
}

/**
 * Controller function to reset to a blank form. Checks whether all changes have been saved first
 * @param  {boolean=} confirmed Whether unsaved changes can be discarded and lost forever
 */
function resetForm(confirmed){
	'use strict';
	var message, choices;
		//valueFirst = /**@type {string} */$('#saved-forms option:first').val();
	//console.debug('first form is '+valueFirst);
	//gui.pages().get('records').find('#records-saved').val(valueFirst);
	console.debug('editstatus: '+ form.getEditStatus());
	if (!confirmed && form.getEditStatus()){
		message = 'There are unsaved changes, would you like to continue <strong>without</strong> saving those?';
		choices = {
			posAction : function(){ resetForm(true); }
		};
		gui.confirm(message, choices);
	}
	else {
		form.reset();
		form = new Form('form.jr:eq(0)', jrDataStr);
		form.init();
		$('button#delete-form').button('disable');
	}
}

/**
 * Controller function to delete a record of form data.
 * @param  {boolean=} confirmed whether the user has confirmed that he/she wants to delete the data
 */
function deleteForm(confirmed) {
	'use strict';
	var message, choices, key = form.getRecordName();

	if (key !== '' && key !== null){
		if (confirmed){
			var success = store.removeRecord(key);
			if (success){
				resetForm(true);
				gui.showFeedback('Successfully deleted form.');
				$('form.jr').trigger('delete', JSON.stringify(store.getFormList()));
			}
			else {
				gui.showFeedback('An error occurred when trying to delete this form.');
			}
		}
		else {
			message = 'Please confirm that you would like to remove this form from storage.';
			choices = {
				posButton : 'Delete',
				posAction : function(){ deleteForm(true); }
			};
			gui.confirm(message, choices);
		}
	}
	else {
		gui.showFeedback ('Please first load the form you would like to delete or choose reset if you\'d like to reset the current form.');
	}
	return;
}

/**
 * function to export or backup data. It depends on the browser whether this data is shown in a new browser window/tab
 * or is downloaded automatically. It is not possible to provide a file name.
 *
 * @param  {boolean=} finalOnly [description]
 */
function exportData(finalOnly){
	"use strict";
	var data, uriContent, newWindow;
	finalOnly = finalOnly || true;

	data = store.getSurveyDataXMLStr(finalOnly);//store.getSurveyData(finalOnly).join('');
	//console.debug(data);
	if (!data){
		gui.showFeedback('No data marked "final" to export.');
	}
	else{
		uriContent = "data:application/octet-stream," + encodeURIComponent(data); /*data:application/octet-stream*/
		newWindow = window.open(uriContent, 'exportedData');
	//window.location.href = uriContent;
	}
}

// BUG: function causes a crash in Safari on OS X when loaded from appCache in fresh Safari browser window
//function initSaveFormsToFile() {
//	'use strict';
//	$('#downloader').downloadify({
//		filename: function(){
//			return 'All_Form_Data.json'; //static file -- you could retrieve from form input box
//		},
//		data: function(){
//			console.log('getting data for download'); // DEBUG
//			return JSON.stringify(store.getRecordCollection()); //static content -- you could retrieve from form input box
//		},
//		onComplete: function(){
//			gui.showFeedback('The file has been saved!');
//		},
//		onCancel: function(){
//		// anything?
//		},
//		onError: function(){
//			gui.alert('Error saving file. File not saved!');
//		},
//		swf: '/libraries/downloadify/downloadify.swf',
//		downloadImage: '/libraries/downloadify/download.png', // CHANGE THIS IMAGE AND LOCATION
//		width: 210,
//		height: 55,
//		transparent: true,
//		append: false
//	});
//}

/**
 * @constructor
 * Function (CLass): Cache
 *
 * description
 *
 * Returns:
 *
 *   return description
 */
function Cache(){
	'use strict';
	var cacheType, appCache, update, error;
	var loadedVersion; //only used for Gears cache
		
	this.init = function(){
		//first check for the preferred cache
		if (window.applicationCache){
			cacheType='html5Cache';
			appCache = window.applicationCache;
			//checkForUpdate();
			appCache.addEventListener('updateready', function(){
			// when an updated cache is downloaded and ready to be used
			// swap to the newest version of the cache, will NOT refresh page only newly called resources
			appCache.swapCache();
			update = true;
			}, false);
			appCache.addEventListener('error', function(event){
				console.log ('HTML5 cache error event'); // DEBUG
				if (connection.getOnlineStatus()) {//error event always triggered when offline
					console.log ('noticed online status'); //DEBUG
					error = "error downloading application"; // Possible to trigger cache problem for testing?
				}
			}, false);
		}
//		else if (window.google && google.gears){
//			try{
//				var gearsServer = google.gears.factory.create('beta.localserver');
//				appCache = gearsServer.createManagedStore('rapaide_store');
//				appCache.manifestUrl = GEARS_MANIFEST_URL;
//				if (appCache){
//					cacheType='gearsCache';
//				}
//				loadedVersion = appCache.currentVersion;
//				//checkForUpdate();
//				var timerId = window.setInterval(function() {
//					// When the currentVersion property has a value, all of the resources
//					// listed in the manifest file for that version are captured.
//					if (loadedVersion) {
//						window.clearInterval(timerId);
//						console.log('loaded Gears cache with version:'+loadedVersion);
//						error = null;
//					}
//					else if (appCache.updateStatus == 3) {
//						console.log('Error: ' + appCache.lastErrorMessage); // DEBUG
//						error = appCache.lastErrorMessage;
//						window.clearInterval(timerId); //TEST this by creating incorrect manifest URL
//					}
//				}, 500);
//			}
//			catch(e){
//				console.log ('Gears does not have permission or other Gears initialization error');
//			}
//		}
	};
	
	this.isSupported = function(){
		return (cacheType==='html5Cache' || cacheType==='gearsCache') ? true : false;
	};
	
	this.checkForUpdate = function(){
		console.log('checking for cache update');
		//switch(cacheType){
			//case 'html5Cache':
				try{appCache.update();}
				//Opera throws mysterious INVALID_STATE_ERR
				catch(e){
					if (e.name === 'NS_ERROR_DOM_SECURITY_ERR'){ //FF before approving offline use
						error = 'security';
					}
					console.log('error thrown during cache update. error name: '+e.name+'  message: '+e.message);
				}
				//event listener will update variable 'update';
		//		break;
//			case 'gearsCache' :
//				// Checking for updates will also happen regularly automatically even if not explicitly called
//				appCache.checkForUpdate();
//				break;
//		}
		return;
	};

	this.updateReady = function(){
//		if (cacheType==='gearsCache'){
//			//console.log ('loadedVersion:'+loadedVersion); //DEBUG
//			//console.log ('currentVersion:'+appCache.currentVersion); //DEBUG
//			update = (loadedVersion !== '' && loadedVersion != appCache.currentVersion) ? true : false;
//		}
		console.log('updateReady() returns: '+update); //DEBUG
		return update;
	};

	this.getError = function(){
		return error;
	};

}


//Class dealing with communication to the server ADD HTML5 VALIDATION and FILE/URL UPLOAD from launch.js
/**
 * @constructor
 *
 * Function: Connection
 *
 * description
 *
 * Returns:
 *
 *   return description
 */
function Connection(){
	"use strict";
	//var onlineStatus;
	//var tableFields, primaryKey;
	//var tableName, version;
	var that=this;
	this.uploadOngoing = false;
	
	this.init = function(){
		//console.log('initializing Connection object');
		//checkOnlineStatus();
		that = this;
		window.setInterval(function(){
			//console.log('setting status'); //DEBUG
			//setStatus();
			that.upload();
		}, 10*1000);
		//window.addEventListener("offline", function(e){
		//	console.log('offline event detected');
		//	setStatus();
		//}
		//window.addEventListener("online", function(e){
		//	console.log('online event detected');
		//	setStatus();
		//}
		$(window).on('offline online', function(){
			//console.log('window network event detected');
			that.setOnlineStatus(that.getOnlineStatus());
		});
		//since network change events are not properly fired, at least not in Firefox 13 (OS X), this is an temporary fix
		//that can be removed eventually or set to to 60x1000 (1 min)
		/*window.setInterval(function(){
			$(window).trigger('online');
		}, 10*1000);*/
		$(window).trigger('online');
		//setTableVars();
	};
}
	
//	function setTableVars(){
//		var primaryKey;
//		tableName = form.COUNTRY+'_'+form.SECTOR+'_'+form.YEAR+'_'+form.SURVEY_NAME;
//
//		//make tableName database friendly
//		tableName = tableName.replace(/\s/g, '_');
//		//console.log('tableName without whitespace: '+tableName); //DEBUG
//		tableName = tableName.toLowerCase();
//		//console.log('tableName lowercase: '+tableName); //DEBUG
//
//		version = form.VERSION;
//
//		//tableFields = '';
//		//for (var i=0; i<form.QUESTIONS.length; i++){
//		//	tableFields += form.QUESTIONS[i].id + ' ' + form.QUESTIONS[i].type + ', ';
//		//}
//		//tableFields += 'lastSaved double, lastUploaded double';
//		//primary key of MySQL table is a combination of two colummns and only the first 20 characters of the second column are used.
//		primaryKey = 'lastUploaded, '+form.KEY_NAME+'(20)';
//	}
//
//	this.getStatus = function(){
//		return onlineStatus;
//	};
//
//	this.getTableName = function(){
//		return tableName;
//	};
	
	//this.setAutoUpload = function(upload){
	//	autoUpload = upload;
	//}
	
	// provides the connection status, should be considered: 'seems online' or 'seems offline'
	// NEEDS IMPROVEMENT. navigator.onLine alone is probably not appropriate because for some browsers this will
	// return true when connected to a local network that is not connected to the Internet.
	// However, this could be the first step. If (true) a request is sent to the server to check for a connection
	// @online = used to force a status (necessary?)
Connection.prototype.getOnlineStatus = function(){
	console.log('checking connection status');//, status before check is: '+onlineStatus); // DEBUG
	//if (typeof online !== 'undefined' && ( online === true || online === false ) ){
		//setStatus(online);
	//}
	//forced status
	//else {
	return navigator.onLine;
		//navigator.onLine not working properly in Firefox
		//if (navigator.onLine){
			//NOTE that GET is not working (by default) in a CodeIgniter setup!!
//				$.ajax({
//					type:'POST',
//					url: CONNECTION_URL,
//					cache: false,
//					dataType: 'text',
//					timeout: 3000,
//					success: function(){
//						setStatus(true);
//						},
//					error: function(){
//						setStatus(false);
//						}
//				});
		//}
		//else {
			//setStatus(false);
		//}
//	}
};
	
Connection.prototype.setOnlineStatus = function(newStatus){
	//var oldStatus = onlineStatus;
	//onlineStatus = online;
	if (newStatus !== this.currentOnlineStatus){
		console.log('status changed to: '+newStatus+', triggering window.onlinestatuschange');
		$(window).trigger('onlinestatuschange', newStatus);
	}
	this.currentOnlineStatus = newStatus;
};

// PROTECTION AGAINST CALLING FUNCTION TWICE to be tested
// attempts to upload all finalized forms *** ADD with the oldest timeStamp first? ** to the server
Connection.prototype.upload = function(force, excludeName) {
	var i, name, result,// last,
		//uploadQueue = [],
		autoUpload = (settings.getOne('autoUpload') === 'true' || settings.getOne('autoUpload') === true) ? true : false;
	//console.log('upload called with uploadOngoing variable: '+uploadOngoing+' and autoUpload: '+autoUpload); // DEBUG

	// proceed if autoUpload is true or it is overridden, and if there is currently no queue for submissions
	if ( ( typeof this.uploadQueue == 'undefined' || this.uploadQueue.length === 0 ) && ( autoUpload === true || force ) ){
		//var dataArr=[];//, insertedStr='';
		this.uploadResult = {win:[], fail:[], force: force};
		this.uploadQueue = store.getSurveyDataArr(true, excludeName);

		console.debug('upload queue: '+this.uploadQueue);

		if (this.uploadQueue.length === 0 ){
			return (force) ? gui.showFeedback('Nothing marked "final" to upload (or record is currently open).') : false;
		}
		//for (i=0 ; i<dataArr.length ; i++){
			//last = (i == dataArr.length-1) ? true : false;
		//name = dataArr[i].name;
		this.uploadOne();
		//this.uploadOne(dataArr[i].data, name, last);
		//}
	}
};

Connection.prototype.uploadOne = function(){//dataXMLStr, name, last){
	var record, content, last,
		that = this;
	if (this.uploadQueue.length > 0){
		record = this.uploadQueue.pop();
		content = new FormData();
		content.append('xml_submission_data', form.prepareForSubmission(record.data));//dataXMLStr);
		content.append('Date', new Date().toUTCString());
		last = (this.uploadQueue.length === 0) ? true : false;
		//console.log('attempting upload with override: '+override+' Changing uploadOngoing to true'); // DEBUG
		//this.uploadOngoing = true;
		//console.log('data to be send: '+JSON.stringify(dataObj)); // DEBUG
		$.ajax('data/submission',{
			type: 'POST',
			data: content,
			cache: false,
			//async: false, //THIS NEEDS TO BE CHANGED, BUT AJAX SUBMISSIONS NEED TO TAke place sequentially
			contentType: false,
			processData: false,
			complete: function(jqXHR, response){
				that.processOpenRosaResponse(jqXHR.status, record.name, last);
				//ODK Aggregrate gets very confused if two POSTs are sent in quick succession,
				//as it duplicates 1 entry and omits the other but returns 201 for both...
				//so we wait until previous POST is finished.
				that.uploadOne();
			}
		});
	}
	
};


Connection.prototype.processOpenRosaResponse = function(status, name, last){
	var i, waswere, namesStr,
		msg = '',
		names=[],
		statusMap = {
		0: {success: false, msg: "Uploading of data failed (probably offline)"},
		200: {success:false, msg: "Data server did not accept data. Contact Enketo helpdesk please."},
		201: {success:true, msg: ""},
		202: {success:true, msg: name+" may have had errors. Contact survey administrator please."},
		'2xx': {success:false, msg: "Unknown error occurred when submitting data. Contact Enketo helpdesk please"},
		400: {success:false, msg: "Data server did not accept data. Contact survey administrator please."},
		403: {success:false, msg: "You are not allowed to post data to this data server. Contact survey administrator please."},
		404: {success:false, msg: "Submission area on data server not found or not properly configured."},
		'4xx': {success:false, msg: "Unknown submission problem on data server."},
		413: {success:false, msg: "Data is too large. Please export the data and contact the Enketo helpdesk please."},
		500: {success:false, msg: "Sorry, the Enketo server is down or being maintained. Please try again later or contact Enketo helpdesk please."},
		503: {success:false, msg: "Sorry, the Enketo server is down or being maintained. Please try again later or contact Enketo helpdesk please."},
		'5xx':{success:false, msg: "Sorry, the Enketo server is down or being maintained. Please try again later or contact Enketo helpdesk please."}
	};
	console.debug('name: '+name);
	console.debug(status);
	
	if (typeof statusMap[status] !== 'undefined'){
		if ( statusMap[status].success === true){
			store.removeRecord(name);
			$('form.jr').trigger('delete', JSON.stringify(store.getFormList()));
			console.log('tried to remove record with key: '+name);
			this.uploadResult.win.push([name, statusMap[status].msg]);
		}
		else if (statusMap[status].success === false){
			this.uploadResult.fail.push([name, statusMap[status].msg]);
		}
	}
	//unforeseen statuscodes
	else if (status > 500){
		console.error ('error during uploading, received unexpected statuscode: '+status);
		this.uploadResult.fail.push([name, statusMap['5xx'].msg]);
	}
	else if (status > 400){
		console.error ('error during uploading, received unexpected statuscode: '+status);
		this.uploadResult.fail.push([name, statusMap['4xx'].msg]);
	}
	else if (status > 200){
		console.error ('error during uploading, received unexpected statuscode: '+status);
		this.uploadResult.fail.push([name, statusMap['2xx'].msg]);
	}
	
	if (last !== true){
		return;
	}

	if (this.uploadResult.win.length > 0){
		for (i = 0 ; i<this.uploadResult.win.length ; i++){
			names.push(this.uploadResult.win[i][0]);
			msg = (typeof this.uploadResult.win[i][2] !== 'undefined') ? msg + (this.uploadResult.win[i][1])+' ' : '';
		}
		waswere = (i>1) ? ' were' : ' was';
		namesStr = names.join(', ');
		gui.showFeedback(namesStr.substring(0, namesStr.length) + waswere +' successfully uploaded. '+msg);
	}
	//else{
	// not sure if there should be a notification if forms fail automatic submission
	if (this.uploadResult.fail.length > 0){
		if (this.uploadResult.force === true){
			for (i = 0 ; i<this.uploadResult.fail.length ; i++){
				msg += this.uploadResult.fail[i][0] + ': ' + this.uploadResult.fail[i][1] + '<br />';
			}
			gui.alert(msg, 'Failed data submission');
		}
		else{

		}
	}

	this.uploadOngoing = false;
	//re-enable upload button
};


//avoid Google Closure Compiler renaming:
//Settings.prototype['autoUpload'] = Settings.prototype.autoUpload;
//Settings.prototype['buttonLocation'] = Settings.prototype.buttonLocation;

Settings.prototype['autoUpload'] = function(val){

};

Settings.prototype['buttonLocation'] = function(val){
	"use strict";
	//if ($(this).checked === true) {
	//console.log('found radio input with required value'); // DEBUG
	$('#form-controls').removeClass('bottom right mobile').addClass(val);
//						if (el[i].value==='mobile'){
//							$('body').addClass('no-scroll');
//						}
//						else {
//							$('body').removeClass('no-scroll');
//						}
	$(window).trigger('resize');
};

//function to update the settings record
///function updateSettings(){
//"use strict";
//console.log('updateSettings fired, with parameter settingsForm:'); //DEBUG
//
//// the intro message might also contain a setting: 'never show this message again'
//	//if(!settingsForm){
//		settingsForm = 'settings-form';
//	//}
//
//	//detect change
//	console.log('triggered by :'+$(this).attr('name')); // DEBUG
//
//	//save settings to localStorage
//	var data = form.getData(settingsForm);
//	//console.log('data scraped from '+settingsForm+': '+JSON.stringify(data)); // DEBUG
//	if (data !== null){ // CHECK IF AN EMPTY FORM REALLY RETURNS NULL!
//		var result = store.setRecord(data);
//		//console.log('result of attempt to save settings: '+result);
//		if (result !== 'success'){
//			gui.showFeedback('Error occurred when trying to save the settings.');
//		}
//	}
//	//make changes
//	updateSetting($(this));
//
/// perform action according to the (changed) settings
//function updateSetting(el){
//	"use strict";
//}


//Extend GUI
//setCustomEventHandlers is called automatically by GUI.init();
GUI.prototype.setCustomEventHandlers = function(){
	"use strict";
	var settingsForm, that = this;
	
	// survey-form controls
	$('button#save-form').button({'icons': {'primary':"ui-icon-disk"}})
		.click(function(){
			form.validateForm();
			saveForm();
		});
	$('button#reset-form').button({'icons': {'primary':"ui-icon-refresh"}})
		.click(function(){
			resetForm();
		});
	$('button#delete-form').button({'icons': {'primary':"ui-icon-trash"}, disabled:true})
		.click(function(){
			deleteForm(false);
		});

	$('#form-controls button').equalWidth();

	$(document)
		.on('click', '#records-saved li:not(.no-click)', function(event){ // future items matching selection will also get eventHandler
			event.preventDefault();
			var name = /** @type {string} */$(this).find('.name').text();
			loadForm(name);
			$(this).siblings().removeClass('ui-state-active');
			$(this).addClass('ui-state-active');
		})
		.on('mouseenter', '#records-saved li:not(.no-click)', function(){
			$(this).addClass('ui-state-hover');
			//$(this).mousedown(function(){
//				$(this).addClass('ui-state-active');
//			}).mouseup(function(){
//				$(this).removeClass('ui-state-active');
//			});
		})
		.on('mouseleave', '#records-saved li:not(.no-click)', function(){
			$(this).removeClass('ui-state-hover');
		});
	
	this.pages().get('records').find('button#records-force-upload').button({'icons': {'primary':"ui-icon-arrowthick-1-n"}})
		.click(function(){
			//gui.alert('Sorry, this button is not working yet.');
			connection.upload(true, form.getRecordName());
		})
		.hover(function(){
			$('#records-force-upload-info').show();
		}, function(){
			$('#records-force-upload-info').hide();
		});

	//export/backup locally stored data
	this.pages().get('records').find('button#records-export').button({'icons': {'primary':"ui-icon-suitcase"}})
		.click(function(){
			//false means also non-final records are exported. Add selectmenu with both options.
			//gui.alert('hey');
			exportData(false);

		})
		.hover(function(){
			$('#records-export-info').show();
		}, function(){
			$('#records-export-info').hide();
		});

	$(document).on('save delete', 'form.jr', function(e, formList){
		//console.debug('save or delete event detected with new formlist: '+formList);
		that.updateRecordList(JSON.parse(formList));
	});

	$(document).on('setsettings', function(e, settings){
		console.debug('settingschange detected, GUI will be updated with settings:');
		//console.debug(settings);
		that.setSettings(settings);
	});

	// handlers for application settings [settings page]
	this.pages().get('settings').on('change', 'input', function(){
		var name =  /** @type {string} */  $(this).attr('name');
		var value = ($(this).is(':checked')) ?  /** @type {string} */ $(this).val().toString() : '';
		console.debug('settings change by user detected');
		
		settings.set(name, value);
		//actions resulting from settings change
		//if (that.hasOwnProperty(name)){
		//	that[name](value);
		//}
//		switch(name){
//			case 'settings-auto-upload':
//				break;
//			case 'settings-button-location':
//				//var value = $(this).val();
//				//$('#form-controls').removeClass().addClass(el.val());
//				//console.log('found '+el.length+' radio elements with this name');
//				//for (var i = 0; i < el.length; i++) {
//
//			break;
//		}
	});

	$('#dialog-save').hide();

};

//update the survey forms names list
GUI.prototype.updateRecordList = function(recordList, $page) {
	"use strict";
	var name, date, clss, i, icon, $list, $li,
		finishedFormsQty = 0,
		draftFormsQty = 0;
	console.debug('updating recordlist in GUI');
	if(!$page){
		$page = this.pages().get('records');//this.$pages.find('article[id="records"]');
	}
	
	//var selectElement = pageEl.find('#forms-saved-names');
	$list = $page.find('#records-saved ol');
	
	//remove the existing option elements
	//selectElement.children().remove();
	$list.children().remove();
	//$('<option value="select form">Select Form</option>').appendTo(selectElement);
	
	// get form list object (keys + upload) ordered by time last saved
	recordList = recordList || [];//store.getFormList();
//		if (!formList){
//			_this.alert('error loading list of saved forms');
//			return;
//		}
	if (recordList.length > 0){
		for (i=0; i<recordList.length; i++){
			name = recordList[i].key;
			date = new Date(recordList[i]['lastSaved']).toDateString();
			if (recordList[i]['ready']){// === true){//} || recordList[i]['ready'] == 'true'){
				icon = 'check';
				finishedFormsQty++;
			}
			else {
				icon = 'pencil';
				draftFormsQty++;
			}
			//$('<option value="'+name+'">'+name+'</option>').addClass(clss).appendTo(selectElement);
			//$('<li><span class="ui-icon ui-icon-'+icon+'"></span><span class="name">'+name+
			//	'</span><span class="date"> ('+date+')</span></li>')
			//	.appendTo(listElement);
			$li = $('<li><span class="ui-icon ui-icon-'+icon+'"></span><span class="name">'+
				'</span><span class="date"> ('+date+')</span></li>');
			$li.find('.name').text(name); // encodes string to html
			$list.append($li);
		}
	}
	else{
		$('<li class="no-click">no locally saved records found</li>').appendTo($list);
	}
// *	OLD*	else if (result.field(2) == 2) {
// *	OLD*		color = 'gray';
	// update status counters
	//pageEl.find('#forms-saved-qty').text(recordList.length);
	$page.find('#records-draft-qty').text(draftFormsQty);
	$page.find('#records-final-qty').text(finishedFormsQty);
};

GUI.prototype.saveConfirm = function(){
	"use strict";
	var $saveConfirm = $('#dialog-save');
	this.confirm(
		{
			dialog: 'save',
			msg:'',
			heading:'Record Details'
		},
		{
			posButton: 'Ok',
			negButton: 'Cancel',
			posAction: function(){
				console.debug('value of final in confirm dialog: '+Boolean($saveConfirm.find('[name="record-final"]:checked').val()));
				//console.debug($saveConfirm.find('[name="record-final"]'));
				return saveForm(
					$saveConfirm.find('[name="record-name"]').val(),
					Boolean($saveConfirm.find('[name="record-final"]:checked').val())
					//$saveConfirm.find('[name="record-final"]:checked').val()
				);
			},
			negAction: function(){
				return false;
			},
			beforeAction: function(){
				if (!form.isValid()){
					console.log('form invalid');
					$saveConfirm.find('[name="record-final"]').attr('disabled', 'disabled');
				}
				else{
					console.log('form valid');
					$saveConfirm.find('[name="record-final"]').removeAttr('disabled');
				}
			}
		}
	);
};
(function() {

  window.load_form = function(url_root, destination_id) {
    var add_jr_data_str, insert_form_to_dom, instance_url, url;
    url = "" + url_root + "/xslt_form.xml";
    instance_url = "" + url_root + "/instance.xml";
    insert_form_to_dom = function(node, status, r) {
      return document.getElementById(destination_id).innerHTML = r.responseText;
    };
    $.ajax({
      url: url,
      async: false
    }).done(insert_form_to_dom);
    add_jr_data_str = function(node, status, r) {
      return window.jrDataStr = r.responseText;
    };
    return $.ajax({
      url: instance_url,
      async: false
    }).done(add_jr_data_str);
  };

}).call(this);















