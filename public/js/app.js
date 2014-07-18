/*! clioflict - v0.0.1 - 2014-07-18 */
/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
//# sourceMappingURL=jquery.min.map

if(!jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(window.jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===b.prop("type")&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(window.jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("dropdown");d||c.data("dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery);

/*! Socket.IO.js build:0.9.16, development. Copyright(c) 2011 LearnBoost <dev@learnboost.com> MIT Licensed */

var io = ('undefined' === typeof module ? {} : module.exports);
(function() {

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, global) {

  /**
   * IO namespace.
   *
   * @namespace
   */

  var io = exports;

  /**
   * Socket.IO version
   *
   * @api public
   */

  io.version = '0.9.16';

  /**
   * Protocol implemented.
   *
   * @api public
   */

  io.protocol = 1;

  /**
   * Available transports, these will be populated with the available transports
   *
   * @api public
   */

  io.transports = [];

  /**
   * Keep track of jsonp callbacks.
   *
   * @api private
   */

  io.j = [];

  /**
   * Keep track of our io.Sockets
   *
   * @api private
   */
  io.sockets = {};


  /**
   * Manages connections to hosts.
   *
   * @param {String} uri
   * @Param {Boolean} force creation of new socket (defaults to false)
   * @api public
   */

  io.connect = function (host, details) {
    var uri = io.util.parseUri(host)
      , uuri
      , socket;

    if (global && global.location) {
      uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
      uri.host = uri.host || (global.document
        ? global.document.domain : global.location.hostname);
      uri.port = uri.port || global.location.port;
    }

    uuri = io.util.uniqueUri(uri);

    var options = {
        host: uri.host
      , secure: 'https' == uri.protocol
      , port: uri.port || ('https' == uri.protocol ? 443 : 80)
      , query: uri.query || ''
    };

    io.util.merge(options, details);

    if (options['force new connection'] || !io.sockets[uuri]) {
      socket = new io.Socket(options);
    }

    if (!options['force new connection'] && socket) {
      io.sockets[uuri] = socket;
    }

    socket = socket || io.sockets[uuri];

    // if path is different from '' or /
    return socket.of(uri.path.length > 1 ? uri.path : '');
  };

})('object' === typeof module ? module.exports : (this.io = {}), this);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, global) {

  /**
   * Utilities namespace.
   *
   * @namespace
   */

  var util = exports.util = {};

  /**
   * Parses an URI
   *
   * @author Steven Levithan <stevenlevithan.com> (MIT license)
   * @api public
   */

  var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

  var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password',
               'host', 'port', 'relative', 'path', 'directory', 'file', 'query',
               'anchor'];

  util.parseUri = function (str) {
    var m = re.exec(str || '')
      , uri = {}
      , i = 14;

    while (i--) {
      uri[parts[i]] = m[i] || '';
    }

    return uri;
  };

  /**
   * Produces a unique url that identifies a Socket.IO connection.
   *
   * @param {Object} uri
   * @api public
   */

  util.uniqueUri = function (uri) {
    var protocol = uri.protocol
      , host = uri.host
      , port = uri.port;

    if ('document' in global) {
      host = host || document.domain;
      port = port || (protocol == 'https'
        && document.location.protocol !== 'https:' ? 443 : document.location.port);
    } else {
      host = host || 'localhost';

      if (!port && protocol == 'https') {
        port = 443;
      }
    }

    return (protocol || 'http') + '://' + host + ':' + (port || 80);
  };

  /**
   * Mergest 2 query strings in to once unique query string
   *
   * @param {String} base
   * @param {String} addition
   * @api public
   */

  util.query = function (base, addition) {
    var query = util.chunkQuery(base || '')
      , components = [];

    util.merge(query, util.chunkQuery(addition || ''));
    for (var part in query) {
      if (query.hasOwnProperty(part)) {
        components.push(part + '=' + query[part]);
      }
    }

    return components.length ? '?' + components.join('&') : '';
  };

  /**
   * Transforms a querystring in to an object
   *
   * @param {String} qs
   * @api public
   */

  util.chunkQuery = function (qs) {
    var query = {}
      , params = qs.split('&')
      , i = 0
      , l = params.length
      , kv;

    for (; i < l; ++i) {
      kv = params[i].split('=');
      if (kv[0]) {
        query[kv[0]] = kv[1];
      }
    }

    return query;
  };

  /**
   * Executes the given function when the page is loaded.
   *
   *     io.util.load(function () { console.log('page loaded'); });
   *
   * @param {Function} fn
   * @api public
   */

  var pageLoaded = false;

  util.load = function (fn) {
    if ('document' in global && document.readyState === 'complete' || pageLoaded) {
      return fn();
    }

    util.on(global, 'load', fn, false);
  };

  /**
   * Adds an event.
   *
   * @api private
   */

  util.on = function (element, event, fn, capture) {
    if (element.attachEvent) {
      element.attachEvent('on' + event, fn);
    } else if (element.addEventListener) {
      element.addEventListener(event, fn, capture);
    }
  };

  /**
   * Generates the correct `XMLHttpRequest` for regular and cross domain requests.
   *
   * @param {Boolean} [xdomain] Create a request that can be used cross domain.
   * @returns {XMLHttpRequest|false} If we can create a XMLHttpRequest.
   * @api private
   */

  util.request = function (xdomain) {

    if (xdomain && 'undefined' != typeof XDomainRequest && !util.ua.hasCORS) {
      return new XDomainRequest();
    }

    if ('undefined' != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
      return new XMLHttpRequest();
    }

    if (!xdomain) {
      try {
        return new window[(['Active'].concat('Object').join('X'))]('Microsoft.XMLHTTP');
      } catch(e) { }
    }

    return null;
  };

  /**
   * XHR based transport constructor.
   *
   * @constructor
   * @api public
   */

  /**
   * Change the internal pageLoaded value.
   */

  if ('undefined' != typeof window) {
    util.load(function () {
      pageLoaded = true;
    });
  }

  /**
   * Defers a function to ensure a spinner is not displayed by the browser
   *
   * @param {Function} fn
   * @api public
   */

  util.defer = function (fn) {
    if (!util.ua.webkit || 'undefined' != typeof importScripts) {
      return fn();
    }

    util.load(function () {
      setTimeout(fn, 100);
    });
  };

  /**
   * Merges two objects.
   *
   * @api public
   */

  util.merge = function merge (target, additional, deep, lastseen) {
    var seen = lastseen || []
      , depth = typeof deep == 'undefined' ? 2 : deep
      , prop;

    for (prop in additional) {
      if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
        if (typeof target[prop] !== 'object' || !depth) {
          target[prop] = additional[prop];
          seen.push(additional[prop]);
        } else {
          util.merge(target[prop], additional[prop], depth - 1, seen);
        }
      }
    }

    return target;
  };

  /**
   * Merges prototypes from objects
   *
   * @api public
   */

  util.mixin = function (ctor, ctor2) {
    util.merge(ctor.prototype, ctor2.prototype);
  };

  /**
   * Shortcut for prototypical and static inheritance.
   *
   * @api private
   */

  util.inherit = function (ctor, ctor2) {
    function f() {};
    f.prototype = ctor2.prototype;
    ctor.prototype = new f;
  };

  /**
   * Checks if the given object is an Array.
   *
   *     io.util.isArray([]); // true
   *     io.util.isArray({}); // false
   *
   * @param Object obj
   * @api public
   */

  util.isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  /**
   * Intersects values of two arrays into a third
   *
   * @api public
   */

  util.intersect = function (arr, arr2) {
    var ret = []
      , longest = arr.length > arr2.length ? arr : arr2
      , shortest = arr.length > arr2.length ? arr2 : arr;

    for (var i = 0, l = shortest.length; i < l; i++) {
      if (~util.indexOf(longest, shortest[i]))
        ret.push(shortest[i]);
    }

    return ret;
  };

  /**
   * Array indexOf compatibility.
   *
   * @see bit.ly/a5Dxa2
   * @api public
   */

  util.indexOf = function (arr, o, i) {

    for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0;
         i < j && arr[i] !== o; i++) {}

    return j <= i ? -1 : i;
  };

  /**
   * Converts enumerables to array.
   *
   * @api public
   */

  util.toArray = function (enu) {
    var arr = [];

    for (var i = 0, l = enu.length; i < l; i++)
      arr.push(enu[i]);

    return arr;
  };

  /**
   * UA / engines detection namespace.
   *
   * @namespace
   */

  util.ua = {};

  /**
   * Whether the UA supports CORS for XHR.
   *
   * @api public
   */

  util.ua.hasCORS = 'undefined' != typeof XMLHttpRequest && (function () {
    try {
      var a = new XMLHttpRequest();
    } catch (e) {
      return false;
    }

    return a.withCredentials != undefined;
  })();

  /**
   * Detect webkit.
   *
   * @api public
   */

  util.ua.webkit = 'undefined' != typeof navigator
    && /webkit/i.test(navigator.userAgent);

   /**
   * Detect iPad/iPhone/iPod.
   *
   * @api public
   */

  util.ua.iDevice = 'undefined' != typeof navigator
      && /iPad|iPhone|iPod/i.test(navigator.userAgent);

})('undefined' != typeof io ? io : module.exports, this);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Expose constructor.
   */

  exports.EventEmitter = EventEmitter;

  /**
   * Event emitter constructor.
   *
   * @api public.
   */

  function EventEmitter () {};

  /**
   * Adds a listener
   *
   * @api public
   */

  EventEmitter.prototype.on = function (name, fn) {
    if (!this.$events) {
      this.$events = {};
    }

    if (!this.$events[name]) {
      this.$events[name] = fn;
    } else if (io.util.isArray(this.$events[name])) {
      this.$events[name].push(fn);
    } else {
      this.$events[name] = [this.$events[name], fn];
    }

    return this;
  };

  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  /**
   * Adds a volatile listener.
   *
   * @api public
   */

  EventEmitter.prototype.once = function (name, fn) {
    var self = this;

    function on () {
      self.removeListener(name, on);
      fn.apply(this, arguments);
    };

    on.listener = fn;
    this.on(name, on);

    return this;
  };

  /**
   * Removes a listener.
   *
   * @api public
   */

  EventEmitter.prototype.removeListener = function (name, fn) {
    if (this.$events && this.$events[name]) {
      var list = this.$events[name];

      if (io.util.isArray(list)) {
        var pos = -1;

        for (var i = 0, l = list.length; i < l; i++) {
          if (list[i] === fn || (list[i].listener && list[i].listener === fn)) {
            pos = i;
            break;
          }
        }

        if (pos < 0) {
          return this;
        }

        list.splice(pos, 1);

        if (!list.length) {
          delete this.$events[name];
        }
      } else if (list === fn || (list.listener && list.listener === fn)) {
        delete this.$events[name];
      }
    }

    return this;
  };

  /**
   * Removes all listeners for an event.
   *
   * @api public
   */

  EventEmitter.prototype.removeAllListeners = function (name) {
    if (name === undefined) {
      this.$events = {};
      return this;
    }

    if (this.$events && this.$events[name]) {
      this.$events[name] = null;
    }

    return this;
  };

  /**
   * Gets all listeners for a certain event.
   *
   * @api publci
   */

  EventEmitter.prototype.listeners = function (name) {
    if (!this.$events) {
      this.$events = {};
    }

    if (!this.$events[name]) {
      this.$events[name] = [];
    }

    if (!io.util.isArray(this.$events[name])) {
      this.$events[name] = [this.$events[name]];
    }

    return this.$events[name];
  };

  /**
   * Emits an event.
   *
   * @api public
   */

  EventEmitter.prototype.emit = function (name) {
    if (!this.$events) {
      return false;
    }

    var handler = this.$events[name];

    if (!handler) {
      return false;
    }

    var args = Array.prototype.slice.call(arguments, 1);

    if ('function' == typeof handler) {
      handler.apply(this, args);
    } else if (io.util.isArray(handler)) {
      var listeners = handler.slice();

      for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i].apply(this, args);
      }
    } else {
      return false;
    }

    return true;
  };

})(
    'undefined' != typeof io ? io : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

/**
 * Based on JSON2 (http://www.JSON.org/js.html).
 */

(function (exports, nativeJSON) {
  "use strict";

  // use native JSON if it's available
  if (nativeJSON && nativeJSON.parse){
    return exports.JSON = {
      parse: nativeJSON.parse
    , stringify: nativeJSON.stringify
    };
  }

  var JSON = exports.JSON = {};

  function f(n) {
      // Format integers to have at least two digits.
      return n < 10 ? '0' + n : n;
  }

  function date(d, key) {
    return isFinite(d.valueOf()) ?
        d.getUTCFullYear()     + '-' +
        f(d.getUTCMonth() + 1) + '-' +
        f(d.getUTCDate())      + 'T' +
        f(d.getUTCHours())     + ':' +
        f(d.getUTCMinutes())   + ':' +
        f(d.getUTCSeconds())   + 'Z' : null;
  };

  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap,
      indent,
      meta = {    // table of character substitutions
          '\b': '\\b',
          '\t': '\\t',
          '\n': '\\n',
          '\f': '\\f',
          '\r': '\\r',
          '"' : '\\"',
          '\\': '\\\\'
      },
      rep;


  function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

      escapable.lastIndex = 0;
      return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
          var c = meta[a];
          return typeof c === 'string' ? c :
              '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' : '"' + string + '"';
  }


  function str(key, holder) {

// Produce a string from holder[key].

      var i,          // The loop counter.
          k,          // The member key.
          v,          // The member value.
          length,
          mind = gap,
          partial,
          value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

      if (value instanceof Date) {
          value = date(key);
      }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

      if (typeof rep === 'function') {
          value = rep.call(holder, key, value);
      }

// What happens next depends on the value's type.

      switch (typeof value) {
      case 'string':
          return quote(value);

      case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

          return isFinite(value) ? String(value) : 'null';

      case 'boolean':
      case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

          return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

      case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

          if (!value) {
              return 'null';
          }

// Make an array to hold the partial results of stringifying this object value.

          gap += indent;
          partial = [];

// Is the value an array?

          if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

              length = value.length;
              for (i = 0; i < length; i += 1) {
                  partial[i] = str(i, value) || 'null';
              }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

              v = partial.length === 0 ? '[]' : gap ?
                  '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                  '[' + partial.join(',') + ']';
              gap = mind;
              return v;
          }

// If the replacer is an array, use it to select the members to be stringified.

          if (rep && typeof rep === 'object') {
              length = rep.length;
              for (i = 0; i < length; i += 1) {
                  if (typeof rep[i] === 'string') {
                      k = rep[i];
                      v = str(k, value);
                      if (v) {
                          partial.push(quote(k) + (gap ? ': ' : ':') + v);
                      }
                  }
              }
          } else {

// Otherwise, iterate through all of the keys in the object.

              for (k in value) {
                  if (Object.prototype.hasOwnProperty.call(value, k)) {
                      v = str(k, value);
                      if (v) {
                          partial.push(quote(k) + (gap ? ': ' : ':') + v);
                      }
                  }
              }
          }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

          v = partial.length === 0 ? '{}' : gap ?
              '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
              '{' + partial.join(',') + '}';
          gap = mind;
          return v;
      }
  }

// If the JSON object does not yet have a stringify method, give it one.

  JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

      var i;
      gap = '';
      indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

      if (typeof space === 'number') {
          for (i = 0; i < space; i += 1) {
              indent += ' ';
          }

// If the space parameter is a string, it will be used as the indent string.

      } else if (typeof space === 'string') {
          indent = space;
      }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

      rep = replacer;
      if (replacer && typeof replacer !== 'function' &&
              (typeof replacer !== 'object' ||
              typeof replacer.length !== 'number')) {
          throw new Error('JSON.stringify');
      }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

      return str('', {'': value});
  };

// If the JSON object does not yet have a parse method, give it one.

  JSON.parse = function (text, reviver) {
  // The parse method takes a text and an optional reviver function, and returns
  // a JavaScript value if the text is a valid JSON text.

      var j;

      function walk(holder, key) {

  // The walk method is used to recursively walk the resulting structure so
  // that modifications can be made.

          var k, v, value = holder[key];
          if (value && typeof value === 'object') {
              for (k in value) {
                  if (Object.prototype.hasOwnProperty.call(value, k)) {
                      v = walk(value, k);
                      if (v !== undefined) {
                          value[k] = v;
                      } else {
                          delete value[k];
                      }
                  }
              }
          }
          return reviver.call(holder, key, value);
      }


  // Parsing happens in four stages. In the first stage, we replace certain
  // Unicode characters with escape sequences. JavaScript handles many characters
  // incorrectly, either silently deleting them, or treating them as line endings.

      text = String(text);
      cx.lastIndex = 0;
      if (cx.test(text)) {
          text = text.replace(cx, function (a) {
              return '\\u' +
                  ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
          });
      }

  // In the second stage, we run the text against regular expressions that look
  // for non-JSON patterns. We are especially concerned with '()' and 'new'
  // because they can cause invocation, and '=' because it can cause mutation.
  // But just to be safe, we want to reject all unexpected forms.

  // We split the second stage into 4 regexp operations in order to work around
  // crippling inefficiencies in IE's and Safari's regexp engines. First we
  // replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
  // replace all simple value tokens with ']' characters. Third, we delete all
  // open brackets that follow a colon or comma or that begin the text. Finally,
  // we look to see that the remaining characters are only whitespace or ']' or
  // ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

      if (/^[\],:{}\s]*$/
              .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                  .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                  .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

  // In the third stage we use the eval function to compile the text into a
  // JavaScript structure. The '{' operator is subject to a syntactic ambiguity
  // in JavaScript: it can begin a block or an object literal. We wrap the text
  // in parens to eliminate the ambiguity.

          j = eval('(' + text + ')');

  // In the optional fourth stage, we recursively walk the new structure, passing
  // each name/value pair to a reviver function for possible transformation.

          return typeof reviver === 'function' ?
              walk({'': j}, '') : j;
      }

  // If the text is not JSON parseable, then a SyntaxError is thrown.

      throw new SyntaxError('JSON.parse');
  };

})(
    'undefined' != typeof io ? io : module.exports
  , typeof JSON !== 'undefined' ? JSON : undefined
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Parser namespace.
   *
   * @namespace
   */

  var parser = exports.parser = {};

  /**
   * Packet types.
   */

  var packets = parser.packets = [
      'disconnect'
    , 'connect'
    , 'heartbeat'
    , 'message'
    , 'json'
    , 'event'
    , 'ack'
    , 'error'
    , 'noop'
  ];

  /**
   * Errors reasons.
   */

  var reasons = parser.reasons = [
      'transport not supported'
    , 'client not handshaken'
    , 'unauthorized'
  ];

  /**
   * Errors advice.
   */

  var advice = parser.advice = [
      'reconnect'
  ];

  /**
   * Shortcuts.
   */

  var JSON = io.JSON
    , indexOf = io.util.indexOf;

  /**
   * Encodes a packet.
   *
   * @api private
   */

  parser.encodePacket = function (packet) {
    var type = indexOf(packets, packet.type)
      , id = packet.id || ''
      , endpoint = packet.endpoint || ''
      , ack = packet.ack
      , data = null;

    switch (packet.type) {
      case 'error':
        var reason = packet.reason ? indexOf(reasons, packet.reason) : ''
          , adv = packet.advice ? indexOf(advice, packet.advice) : '';

        if (reason !== '' || adv !== '')
          data = reason + (adv !== '' ? ('+' + adv) : '');

        break;

      case 'message':
        if (packet.data !== '')
          data = packet.data;
        break;

      case 'event':
        var ev = { name: packet.name };

        if (packet.args && packet.args.length) {
          ev.args = packet.args;
        }

        data = JSON.stringify(ev);
        break;

      case 'json':
        data = JSON.stringify(packet.data);
        break;

      case 'connect':
        if (packet.qs)
          data = packet.qs;
        break;

      case 'ack':
        data = packet.ackId
          + (packet.args && packet.args.length
              ? '+' + JSON.stringify(packet.args) : '');
        break;
    }

    // construct packet with required fragments
    var encoded = [
        type
      , id + (ack == 'data' ? '+' : '')
      , endpoint
    ];

    // data fragment is optional
    if (data !== null && data !== undefined)
      encoded.push(data);

    return encoded.join(':');
  };

  /**
   * Encodes multiple messages (payload).
   *
   * @param {Array} messages
   * @api private
   */

  parser.encodePayload = function (packets) {
    var decoded = '';

    if (packets.length == 1)
      return packets[0];

    for (var i = 0, l = packets.length; i < l; i++) {
      var packet = packets[i];
      decoded += '\ufffd' + packet.length + '\ufffd' + packets[i];
    }

    return decoded;
  };

  /**
   * Decodes a packet
   *
   * @api private
   */

  var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;

  parser.decodePacket = function (data) {
    var pieces = data.match(regexp);

    if (!pieces) return {};

    var id = pieces[2] || ''
      , data = pieces[5] || ''
      , packet = {
            type: packets[pieces[1]]
          , endpoint: pieces[4] || ''
        };

    // whether we need to acknowledge the packet
    if (id) {
      packet.id = id;
      if (pieces[3])
        packet.ack = 'data';
      else
        packet.ack = true;
    }

    // handle different packet types
    switch (packet.type) {
      case 'error':
        var pieces = data.split('+');
        packet.reason = reasons[pieces[0]] || '';
        packet.advice = advice[pieces[1]] || '';
        break;

      case 'message':
        packet.data = data || '';
        break;

      case 'event':
        try {
          var opts = JSON.parse(data);
          packet.name = opts.name;
          packet.args = opts.args;
        } catch (e) { }

        packet.args = packet.args || [];
        break;

      case 'json':
        try {
          packet.data = JSON.parse(data);
        } catch (e) { }
        break;

      case 'connect':
        packet.qs = data || '';
        break;

      case 'ack':
        var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
        if (pieces) {
          packet.ackId = pieces[1];
          packet.args = [];

          if (pieces[3]) {
            try {
              packet.args = pieces[3] ? JSON.parse(pieces[3]) : [];
            } catch (e) { }
          }
        }
        break;

      case 'disconnect':
      case 'heartbeat':
        break;
    };

    return packet;
  };

  /**
   * Decodes data payload. Detects multiple messages
   *
   * @return {Array} messages
   * @api public
   */

  parser.decodePayload = function (data) {
    // IE doesn't like data[i] for unicode chars, charAt works fine
    if (data.charAt(0) == '\ufffd') {
      var ret = [];

      for (var i = 1, length = ''; i < data.length; i++) {
        if (data.charAt(i) == '\ufffd') {
          ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
          i += Number(length) + 1;
          length = '';
        } else {
          length += data.charAt(i);
        }
      }

      return ret;
    } else {
      return [parser.decodePacket(data)];
    }
  };

})(
    'undefined' != typeof io ? io : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Expose constructor.
   */

  exports.Transport = Transport;

  /**
   * This is the transport template for all supported transport methods.
   *
   * @constructor
   * @api public
   */

  function Transport (socket, sessid) {
    this.socket = socket;
    this.sessid = sessid;
  };

  /**
   * Apply EventEmitter mixin.
   */

  io.util.mixin(Transport, io.EventEmitter);


  /**
   * Indicates whether heartbeats is enabled for this transport
   *
   * @api private
   */

  Transport.prototype.heartbeats = function () {
    return true;
  };

  /**
   * Handles the response from the server. When a new response is received
   * it will automatically update the timeout, decode the message and
   * forwards the response to the onMessage function for further processing.
   *
   * @param {String} data Response from the server.
   * @api private
   */

  Transport.prototype.onData = function (data) {
    this.clearCloseTimeout();

    // If the connection in currently open (or in a reopening state) reset the close
    // timeout since we have just received data. This check is necessary so
    // that we don't reset the timeout on an explicitly disconnected connection.
    if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
      this.setCloseTimeout();
    }

    if (data !== '') {
      // todo: we should only do decodePayload for xhr transports
      var msgs = io.parser.decodePayload(data);

      if (msgs && msgs.length) {
        for (var i = 0, l = msgs.length; i < l; i++) {
          this.onPacket(msgs[i]);
        }
      }
    }

    return this;
  };

  /**
   * Handles packets.
   *
   * @api private
   */

  Transport.prototype.onPacket = function (packet) {
    this.socket.setHeartbeatTimeout();

    if (packet.type == 'heartbeat') {
      return this.onHeartbeat();
    }

    if (packet.type == 'connect' && packet.endpoint == '') {
      this.onConnect();
    }

    if (packet.type == 'error' && packet.advice == 'reconnect') {
      this.isOpen = false;
    }

    this.socket.onPacket(packet);

    return this;
  };

  /**
   * Sets close timeout
   *
   * @api private
   */

  Transport.prototype.setCloseTimeout = function () {
    if (!this.closeTimeout) {
      var self = this;

      this.closeTimeout = setTimeout(function () {
        self.onDisconnect();
      }, this.socket.closeTimeout);
    }
  };

  /**
   * Called when transport disconnects.
   *
   * @api private
   */

  Transport.prototype.onDisconnect = function () {
    if (this.isOpen) this.close();
    this.clearTimeouts();
    this.socket.onDisconnect();
    return this;
  };

  /**
   * Called when transport connects
   *
   * @api private
   */

  Transport.prototype.onConnect = function () {
    this.socket.onConnect();
    return this;
  };

  /**
   * Clears close timeout
   *
   * @api private
   */

  Transport.prototype.clearCloseTimeout = function () {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
  };

  /**
   * Clear timeouts
   *
   * @api private
   */

  Transport.prototype.clearTimeouts = function () {
    this.clearCloseTimeout();

    if (this.reopenTimeout) {
      clearTimeout(this.reopenTimeout);
    }
  };

  /**
   * Sends a packet
   *
   * @param {Object} packet object.
   * @api private
   */

  Transport.prototype.packet = function (packet) {
    this.send(io.parser.encodePacket(packet));
  };

  /**
   * Send the received heartbeat message back to server. So the server
   * knows we are still connected.
   *
   * @param {String} heartbeat Heartbeat response from the server.
   * @api private
   */

  Transport.prototype.onHeartbeat = function (heartbeat) {
    this.packet({ type: 'heartbeat' });
  };

  /**
   * Called when the transport opens.
   *
   * @api private
   */

  Transport.prototype.onOpen = function () {
    this.isOpen = true;
    this.clearCloseTimeout();
    this.socket.onOpen();
  };

  /**
   * Notifies the base when the connection with the Socket.IO server
   * has been disconnected.
   *
   * @api private
   */

  Transport.prototype.onClose = function () {
    var self = this;

    /* FIXME: reopen delay causing a infinit loop
    this.reopenTimeout = setTimeout(function () {
      self.open();
    }, this.socket.options['reopen delay']);*/

    this.isOpen = false;
    this.socket.onClose();
    this.onDisconnect();
  };

  /**
   * Generates a connection url based on the Socket.IO URL Protocol.
   * See <https://github.com/learnboost/socket.io-node/> for more details.
   *
   * @returns {String} Connection url
   * @api private
   */

  Transport.prototype.prepareUrl = function () {
    var options = this.socket.options;

    return this.scheme() + '://'
      + options.host + ':' + options.port + '/'
      + options.resource + '/' + io.protocol
      + '/' + this.name + '/' + this.sessid;
  };

  /**
   * Checks if the transport is ready to start a connection.
   *
   * @param {Socket} socket The socket instance that needs a transport
   * @param {Function} fn The callback
   * @api private
   */

  Transport.prototype.ready = function (socket, fn) {
    fn.call(this);
  };
})(
    'undefined' != typeof io ? io : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io, global) {

  /**
   * Expose constructor.
   */

  exports.Socket = Socket;

  /**
   * Create a new `Socket.IO client` which can establish a persistent
   * connection with a Socket.IO enabled server.
   *
   * @api public
   */

  function Socket (options) {
    this.options = {
        port: 80
      , secure: false
      , document: 'document' in global ? document : false
      , resource: 'socket.io'
      , transports: io.transports
      , 'connect timeout': 10000
      , 'try multiple transports': true
      , 'reconnect': true
      , 'reconnection delay': 500
      , 'reconnection limit': Infinity
      , 'reopen delay': 3000
      , 'max reconnection attempts': 10
      , 'sync disconnect on unload': false
      , 'auto connect': true
      , 'flash policy port': 10843
      , 'manualFlush': false
    };

    io.util.merge(this.options, options);

    this.connected = false;
    this.open = false;
    this.connecting = false;
    this.reconnecting = false;
    this.namespaces = {};
    this.buffer = [];
    this.doBuffer = false;

    if (this.options['sync disconnect on unload'] &&
        (!this.isXDomain() || io.util.ua.hasCORS)) {
      var self = this;
      io.util.on(global, 'beforeunload', function () {
        self.disconnectSync();
      }, false);
    }

    if (this.options['auto connect']) {
      this.connect();
    }
};

  /**
   * Apply EventEmitter mixin.
   */

  io.util.mixin(Socket, io.EventEmitter);

  /**
   * Returns a namespace listener/emitter for this socket
   *
   * @api public
   */

  Socket.prototype.of = function (name) {
    if (!this.namespaces[name]) {
      this.namespaces[name] = new io.SocketNamespace(this, name);

      if (name !== '') {
        this.namespaces[name].packet({ type: 'connect' });
      }
    }

    return this.namespaces[name];
  };

  /**
   * Emits the given event to the Socket and all namespaces
   *
   * @api private
   */

  Socket.prototype.publish = function () {
    this.emit.apply(this, arguments);

    var nsp;

    for (var i in this.namespaces) {
      if (this.namespaces.hasOwnProperty(i)) {
        nsp = this.of(i);
        nsp.$emit.apply(nsp, arguments);
      }
    }
  };

  /**
   * Performs the handshake
   *
   * @api private
   */

  function empty () { };

  Socket.prototype.handshake = function (fn) {
    var self = this
      , options = this.options;

    function complete (data) {
      if (data instanceof Error) {
        self.connecting = false;
        self.onError(data.message);
      } else {
        fn.apply(null, data.split(':'));
      }
    };

    var url = [
          'http' + (options.secure ? 's' : '') + ':/'
        , options.host + ':' + options.port
        , options.resource
        , io.protocol
        , io.util.query(this.options.query, 't=' + +new Date)
      ].join('/');

    if (this.isXDomain() && !io.util.ua.hasCORS) {
      var insertAt = document.getElementsByTagName('script')[0]
        , script = document.createElement('script');

      script.src = url + '&jsonp=' + io.j.length;
      insertAt.parentNode.insertBefore(script, insertAt);

      io.j.push(function (data) {
        complete(data);
        script.parentNode.removeChild(script);
      });
    } else {
      var xhr = io.util.request();

      xhr.open('GET', url, true);
      if (this.isXDomain()) {
        xhr.withCredentials = true;
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          xhr.onreadystatechange = empty;

          if (xhr.status == 200) {
            complete(xhr.responseText);
          } else if (xhr.status == 403) {
            self.onError(xhr.responseText);
          } else {
            self.connecting = false;            
            !self.reconnecting && self.onError(xhr.responseText);
          }
        }
      };
      xhr.send(null);
    }
  };

  /**
   * Find an available transport based on the options supplied in the constructor.
   *
   * @api private
   */

  Socket.prototype.getTransport = function (override) {
    var transports = override || this.transports, match;

    for (var i = 0, transport; transport = transports[i]; i++) {
      if (io.Transport[transport]
        && io.Transport[transport].check(this)
        && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
        return new io.Transport[transport](this, this.sessionid);
      }
    }

    return null;
  };

  /**
   * Connects to the server.
   *
   * @param {Function} [fn] Callback.
   * @returns {io.Socket}
   * @api public
   */

  Socket.prototype.connect = function (fn) {
    if (this.connecting) {
      return this;
    }

    var self = this;
    self.connecting = true;
    
    this.handshake(function (sid, heartbeat, close, transports) {
      self.sessionid = sid;
      self.closeTimeout = close * 1000;
      self.heartbeatTimeout = heartbeat * 1000;
      if(!self.transports)
          self.transports = self.origTransports = (transports ? io.util.intersect(
              transports.split(',')
            , self.options.transports
          ) : self.options.transports);

      self.setHeartbeatTimeout();

      function connect (transports){
        if (self.transport) self.transport.clearTimeouts();

        self.transport = self.getTransport(transports);
        if (!self.transport) return self.publish('connect_failed');

        // once the transport is ready
        self.transport.ready(self, function () {
          self.connecting = true;
          self.publish('connecting', self.transport.name);
          self.transport.open();

          if (self.options['connect timeout']) {
            self.connectTimeoutTimer = setTimeout(function () {
              if (!self.connected) {
                self.connecting = false;

                if (self.options['try multiple transports']) {
                  var remaining = self.transports;

                  while (remaining.length > 0 && remaining.splice(0,1)[0] !=
                         self.transport.name) {}

                    if (remaining.length){
                      connect(remaining);
                    } else {
                      self.publish('connect_failed');
                    }
                }
              }
            }, self.options['connect timeout']);
          }
        });
      }

      connect(self.transports);

      self.once('connect', function (){
        clearTimeout(self.connectTimeoutTimer);

        fn && typeof fn == 'function' && fn();
      });
    });

    return this;
  };

  /**
   * Clears and sets a new heartbeat timeout using the value given by the
   * server during the handshake.
   *
   * @api private
   */

  Socket.prototype.setHeartbeatTimeout = function () {
    clearTimeout(this.heartbeatTimeoutTimer);
    if(this.transport && !this.transport.heartbeats()) return;

    var self = this;
    this.heartbeatTimeoutTimer = setTimeout(function () {
      self.transport.onClose();
    }, this.heartbeatTimeout);
  };

  /**
   * Sends a message.
   *
   * @param {Object} data packet.
   * @returns {io.Socket}
   * @api public
   */

  Socket.prototype.packet = function (data) {
    if (this.connected && !this.doBuffer) {
      this.transport.packet(data);
    } else {
      this.buffer.push(data);
    }

    return this;
  };

  /**
   * Sets buffer state
   *
   * @api private
   */

  Socket.prototype.setBuffer = function (v) {
    this.doBuffer = v;

    if (!v && this.connected && this.buffer.length) {
      if (!this.options['manualFlush']) {
        this.flushBuffer();
      }
    }
  };

  /**
   * Flushes the buffer data over the wire.
   * To be invoked manually when 'manualFlush' is set to true.
   *
   * @api public
   */

  Socket.prototype.flushBuffer = function() {
    this.transport.payload(this.buffer);
    this.buffer = [];
  };
  

  /**
   * Disconnect the established connect.
   *
   * @returns {io.Socket}
   * @api public
   */

  Socket.prototype.disconnect = function () {
    if (this.connected || this.connecting) {
      if (this.open) {
        this.of('').packet({ type: 'disconnect' });
      }

      // handle disconnection immediately
      this.onDisconnect('booted');
    }

    return this;
  };

  /**
   * Disconnects the socket with a sync XHR.
   *
   * @api private
   */

  Socket.prototype.disconnectSync = function () {
    // ensure disconnection
    var xhr = io.util.request();
    var uri = [
        'http' + (this.options.secure ? 's' : '') + ':/'
      , this.options.host + ':' + this.options.port
      , this.options.resource
      , io.protocol
      , ''
      , this.sessionid
    ].join('/') + '/?disconnect=1';

    xhr.open('GET', uri, false);
    xhr.send(null);

    // handle disconnection immediately
    this.onDisconnect('booted');
  };

  /**
   * Check if we need to use cross domain enabled transports. Cross domain would
   * be a different port or different domain name.
   *
   * @returns {Boolean}
   * @api private
   */

  Socket.prototype.isXDomain = function () {

    var port = global.location.port ||
      ('https:' == global.location.protocol ? 443 : 80);

    return this.options.host !== global.location.hostname 
      || this.options.port != port;
  };

  /**
   * Called upon handshake.
   *
   * @api private
   */

  Socket.prototype.onConnect = function () {
    if (!this.connected) {
      this.connected = true;
      this.connecting = false;
      if (!this.doBuffer) {
        // make sure to flush the buffer
        this.setBuffer(false);
      }
      this.emit('connect');
    }
  };

  /**
   * Called when the transport opens
   *
   * @api private
   */

  Socket.prototype.onOpen = function () {
    this.open = true;
  };

  /**
   * Called when the transport closes.
   *
   * @api private
   */

  Socket.prototype.onClose = function () {
    this.open = false;
    clearTimeout(this.heartbeatTimeoutTimer);
  };

  /**
   * Called when the transport first opens a connection
   *
   * @param text
   */

  Socket.prototype.onPacket = function (packet) {
    this.of(packet.endpoint).onPacket(packet);
  };

  /**
   * Handles an error.
   *
   * @api private
   */

  Socket.prototype.onError = function (err) {
    if (err && err.advice) {
      if (err.advice === 'reconnect' && (this.connected || this.connecting)) {
        this.disconnect();
        if (this.options.reconnect) {
          this.reconnect();
        }
      }
    }

    this.publish('error', err && err.reason ? err.reason : err);
  };

  /**
   * Called when the transport disconnects.
   *
   * @api private
   */

  Socket.prototype.onDisconnect = function (reason) {
    var wasConnected = this.connected
      , wasConnecting = this.connecting;

    this.connected = false;
    this.connecting = false;
    this.open = false;

    if (wasConnected || wasConnecting) {
      this.transport.close();
      this.transport.clearTimeouts();
      if (wasConnected) {
        this.publish('disconnect', reason);

        if ('booted' != reason && this.options.reconnect && !this.reconnecting) {
          this.reconnect();
        }
      }
    }
  };

  /**
   * Called upon reconnection.
   *
   * @api private
   */

  Socket.prototype.reconnect = function () {
    this.reconnecting = true;
    this.reconnectionAttempts = 0;
    this.reconnectionDelay = this.options['reconnection delay'];

    var self = this
      , maxAttempts = this.options['max reconnection attempts']
      , tryMultiple = this.options['try multiple transports']
      , limit = this.options['reconnection limit'];

    function reset () {
      if (self.connected) {
        for (var i in self.namespaces) {
          if (self.namespaces.hasOwnProperty(i) && '' !== i) {
              self.namespaces[i].packet({ type: 'connect' });
          }
        }
        self.publish('reconnect', self.transport.name, self.reconnectionAttempts);
      }

      clearTimeout(self.reconnectionTimer);

      self.removeListener('connect_failed', maybeReconnect);
      self.removeListener('connect', maybeReconnect);

      self.reconnecting = false;

      delete self.reconnectionAttempts;
      delete self.reconnectionDelay;
      delete self.reconnectionTimer;
      delete self.redoTransports;

      self.options['try multiple transports'] = tryMultiple;
    };

    function maybeReconnect () {
      if (!self.reconnecting) {
        return;
      }

      if (self.connected) {
        return reset();
      };

      if (self.connecting && self.reconnecting) {
        return self.reconnectionTimer = setTimeout(maybeReconnect, 1000);
      }

      if (self.reconnectionAttempts++ >= maxAttempts) {
        if (!self.redoTransports) {
          self.on('connect_failed', maybeReconnect);
          self.options['try multiple transports'] = true;
          self.transports = self.origTransports;
          self.transport = self.getTransport();
          self.redoTransports = true;
          self.connect();
        } else {
          self.publish('reconnect_failed');
          reset();
        }
      } else {
        if (self.reconnectionDelay < limit) {
          self.reconnectionDelay *= 2; // exponential back off
        }

        self.connect();
        self.publish('reconnecting', self.reconnectionDelay, self.reconnectionAttempts);
        self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay);
      }
    };

    this.options['try multiple transports'] = false;
    this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);

    this.on('connect', maybeReconnect);
  };

})(
    'undefined' != typeof io ? io : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
  , this
);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Expose constructor.
   */

  exports.SocketNamespace = SocketNamespace;

  /**
   * Socket namespace constructor.
   *
   * @constructor
   * @api public
   */

  function SocketNamespace (socket, name) {
    this.socket = socket;
    this.name = name || '';
    this.flags = {};
    this.json = new Flag(this, 'json');
    this.ackPackets = 0;
    this.acks = {};
  };

  /**
   * Apply EventEmitter mixin.
   */

  io.util.mixin(SocketNamespace, io.EventEmitter);

  /**
   * Copies emit since we override it
   *
   * @api private
   */

  SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;

  /**
   * Creates a new namespace, by proxying the request to the socket. This
   * allows us to use the synax as we do on the server.
   *
   * @api public
   */

  SocketNamespace.prototype.of = function () {
    return this.socket.of.apply(this.socket, arguments);
  };

  /**
   * Sends a packet.
   *
   * @api private
   */

  SocketNamespace.prototype.packet = function (packet) {
    packet.endpoint = this.name;
    this.socket.packet(packet);
    this.flags = {};
    return this;
  };

  /**
   * Sends a message
   *
   * @api public
   */

  SocketNamespace.prototype.send = function (data, fn) {
    var packet = {
        type: this.flags.json ? 'json' : 'message'
      , data: data
    };

    if ('function' == typeof fn) {
      packet.id = ++this.ackPackets;
      packet.ack = true;
      this.acks[packet.id] = fn;
    }

    return this.packet(packet);
  };

  /**
   * Emits an event
   *
   * @api public
   */
  
  SocketNamespace.prototype.emit = function (name) {
    var args = Array.prototype.slice.call(arguments, 1)
      , lastArg = args[args.length - 1]
      , packet = {
            type: 'event'
          , name: name
        };

    if ('function' == typeof lastArg) {
      packet.id = ++this.ackPackets;
      packet.ack = 'data';
      this.acks[packet.id] = lastArg;
      args = args.slice(0, args.length - 1);
    }

    packet.args = args;

    return this.packet(packet);
  };

  /**
   * Disconnects the namespace
   *
   * @api private
   */

  SocketNamespace.prototype.disconnect = function () {
    if (this.name === '') {
      this.socket.disconnect();
    } else {
      this.packet({ type: 'disconnect' });
      this.$emit('disconnect');
    }

    return this;
  };

  /**
   * Handles a packet
   *
   * @api private
   */

  SocketNamespace.prototype.onPacket = function (packet) {
    var self = this;

    function ack () {
      self.packet({
          type: 'ack'
        , args: io.util.toArray(arguments)
        , ackId: packet.id
      });
    };

    switch (packet.type) {
      case 'connect':
        this.$emit('connect');
        break;

      case 'disconnect':
        if (this.name === '') {
          this.socket.onDisconnect(packet.reason || 'booted');
        } else {
          this.$emit('disconnect', packet.reason);
        }
        break;

      case 'message':
      case 'json':
        var params = ['message', packet.data];

        if (packet.ack == 'data') {
          params.push(ack);
        } else if (packet.ack) {
          this.packet({ type: 'ack', ackId: packet.id });
        }

        this.$emit.apply(this, params);
        break;

      case 'event':
        var params = [packet.name].concat(packet.args);

        if (packet.ack == 'data')
          params.push(ack);

        this.$emit.apply(this, params);
        break;

      case 'ack':
        if (this.acks[packet.ackId]) {
          this.acks[packet.ackId].apply(this, packet.args);
          delete this.acks[packet.ackId];
        }
        break;

      case 'error':
        if (packet.advice){
          this.socket.onError(packet);
        } else {
          if (packet.reason == 'unauthorized') {
            this.$emit('connect_failed', packet.reason);
          } else {
            this.$emit('error', packet.reason);
          }
        }
        break;
    }
  };

  /**
   * Flag interface.
   *
   * @api private
   */

  function Flag (nsp, name) {
    this.namespace = nsp;
    this.name = name;
  };

  /**
   * Send a message
   *
   * @api public
   */

  Flag.prototype.send = function () {
    this.namespace.flags[this.name] = true;
    this.namespace.send.apply(this.namespace, arguments);
  };

  /**
   * Emit an event
   *
   * @api public
   */

  Flag.prototype.emit = function () {
    this.namespace.flags[this.name] = true;
    this.namespace.emit.apply(this.namespace, arguments);
  };

})(
    'undefined' != typeof io ? io : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io, global) {

  /**
   * Expose constructor.
   */

  exports.websocket = WS;

  /**
   * The WebSocket transport uses the HTML5 WebSocket API to establish an
   * persistent connection with the Socket.IO server. This transport will also
   * be inherited by the FlashSocket fallback as it provides a API compatible
   * polyfill for the WebSockets.
   *
   * @constructor
   * @extends {io.Transport}
   * @api public
   */

  function WS (socket) {
    io.Transport.apply(this, arguments);
  };

  /**
   * Inherits from Transport.
   */

  io.util.inherit(WS, io.Transport);

  /**
   * Transport name
   *
   * @api public
   */

  WS.prototype.name = 'websocket';

  /**
   * Initializes a new `WebSocket` connection with the Socket.IO server. We attach
   * all the appropriate listeners to handle the responses from the server.
   *
   * @returns {Transport}
   * @api public
   */

  WS.prototype.open = function () {
    var query = io.util.query(this.socket.options.query)
      , self = this
      , Socket


    if (!Socket) {
      Socket = global.MozWebSocket || global.WebSocket;
    }

    this.websocket = new Socket(this.prepareUrl() + query);

    this.websocket.onopen = function () {
      self.onOpen();
      self.socket.setBuffer(false);
    };
    this.websocket.onmessage = function (ev) {
      self.onData(ev.data);
    };
    this.websocket.onclose = function () {
      self.onClose();
      self.socket.setBuffer(true);
    };
    this.websocket.onerror = function (e) {
      self.onError(e);
    };

    return this;
  };

  /**
   * Send a message to the Socket.IO server. The message will automatically be
   * encoded in the correct message format.
   *
   * @returns {Transport}
   * @api public
   */

  // Do to a bug in the current IDevices browser, we need to wrap the send in a 
  // setTimeout, when they resume from sleeping the browser will crash if 
  // we don't allow the browser time to detect the socket has been closed
  if (io.util.ua.iDevice) {
    WS.prototype.send = function (data) {
      var self = this;
      setTimeout(function() {
         self.websocket.send(data);
      },0);
      return this;
    };
  } else {
    WS.prototype.send = function (data) {
      this.websocket.send(data);
      return this;
    };
  }

  /**
   * Payload
   *
   * @api private
   */

  WS.prototype.payload = function (arr) {
    for (var i = 0, l = arr.length; i < l; i++) {
      this.packet(arr[i]);
    }
    return this;
  };

  /**
   * Disconnect the established `WebSocket` connection.
   *
   * @returns {Transport}
   * @api public
   */

  WS.prototype.close = function () {
    this.websocket.close();
    return this;
  };

  /**
   * Handle the errors that `WebSocket` might be giving when we
   * are attempting to connect or send messages.
   *
   * @param {Error} e The error.
   * @api private
   */

  WS.prototype.onError = function (e) {
    this.socket.onError(e);
  };

  /**
   * Returns the appropriate scheme for the URI generation.
   *
   * @api private
   */
  WS.prototype.scheme = function () {
    return this.socket.options.secure ? 'wss' : 'ws';
  };

  /**
   * Checks if the browser has support for native `WebSockets` and that
   * it's not the polyfill created for the FlashSocket transport.
   *
   * @return {Boolean}
   * @api public
   */

  WS.check = function () {
    return ('WebSocket' in global && !('__addTask' in WebSocket))
          || 'MozWebSocket' in global;
  };

  /**
   * Check if the `WebSocket` transport support cross domain communications.
   *
   * @returns {Boolean}
   * @api public
   */

  WS.xdomainCheck = function () {
    return true;
  };

  /**
   * Add the transport to your public io.transports array.
   *
   * @api private
   */

  io.transports.push('websocket');

})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
  , this
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Expose constructor.
   */

  exports.flashsocket = Flashsocket;

  /**
   * The FlashSocket transport. This is a API wrapper for the HTML5 WebSocket
   * specification. It uses a .swf file to communicate with the server. If you want
   * to serve the .swf file from a other server than where the Socket.IO script is
   * coming from you need to use the insecure version of the .swf. More information
   * about this can be found on the github page.
   *
   * @constructor
   * @extends {io.Transport.websocket}
   * @api public
   */

  function Flashsocket () {
    io.Transport.websocket.apply(this, arguments);
  };

  /**
   * Inherits from Transport.
   */

  io.util.inherit(Flashsocket, io.Transport.websocket);

  /**
   * Transport name
   *
   * @api public
   */

  Flashsocket.prototype.name = 'flashsocket';

  /**
   * Disconnect the established `FlashSocket` connection. This is done by adding a 
   * new task to the FlashSocket. The rest will be handled off by the `WebSocket` 
   * transport.
   *
   * @returns {Transport}
   * @api public
   */

  Flashsocket.prototype.open = function () {
    var self = this
      , args = arguments;

    WebSocket.__addTask(function () {
      io.Transport.websocket.prototype.open.apply(self, args);
    });
    return this;
  };
  
  /**
   * Sends a message to the Socket.IO server. This is done by adding a new
   * task to the FlashSocket. The rest will be handled off by the `WebSocket` 
   * transport.
   *
   * @returns {Transport}
   * @api public
   */

  Flashsocket.prototype.send = function () {
    var self = this, args = arguments;
    WebSocket.__addTask(function () {
      io.Transport.websocket.prototype.send.apply(self, args);
    });
    return this;
  };

  /**
   * Disconnects the established `FlashSocket` connection.
   *
   * @returns {Transport}
   * @api public
   */

  Flashsocket.prototype.close = function () {
    WebSocket.__tasks.length = 0;
    io.Transport.websocket.prototype.close.call(this);
    return this;
  };

  /**
   * The WebSocket fall back needs to append the flash container to the body
   * element, so we need to make sure we have access to it. Or defer the call
   * until we are sure there is a body element.
   *
   * @param {Socket} socket The socket instance that needs a transport
   * @param {Function} fn The callback
   * @api private
   */

  Flashsocket.prototype.ready = function (socket, fn) {
    function init () {
      var options = socket.options
        , port = options['flash policy port']
        , path = [
              'http' + (options.secure ? 's' : '') + ':/'
            , options.host + ':' + options.port
            , options.resource
            , 'static/flashsocket'
            , 'WebSocketMain' + (socket.isXDomain() ? 'Insecure' : '') + '.swf'
          ];

      // Only start downloading the swf file when the checked that this browser
      // actually supports it
      if (!Flashsocket.loaded) {
        if (typeof WEB_SOCKET_SWF_LOCATION === 'undefined') {
          // Set the correct file based on the XDomain settings
          WEB_SOCKET_SWF_LOCATION = path.join('/');
        }

        if (port !== 843) {
          WebSocket.loadFlashPolicyFile('xmlsocket://' + options.host + ':' + port);
        }

        WebSocket.__initialize();
        Flashsocket.loaded = true;
      }

      fn.call(self);
    }

    var self = this;
    if (document.body) return init();

    io.util.load(init);
  };

  /**
   * Check if the FlashSocket transport is supported as it requires that the Adobe
   * Flash Player plug-in version `10.0.0` or greater is installed. And also check if
   * the polyfill is correctly loaded.
   *
   * @returns {Boolean}
   * @api public
   */

  Flashsocket.check = function () {
    if (
        typeof WebSocket == 'undefined'
      || !('__initialize' in WebSocket) || !swfobject
    ) return false;

    return swfobject.getFlashPlayerVersion().major >= 10;
  };

  /**
   * Check if the FlashSocket transport can be used as cross domain / cross origin 
   * transport. Because we can't see which type (secure or insecure) of .swf is used
   * we will just return true.
   *
   * @returns {Boolean}
   * @api public
   */

  Flashsocket.xdomainCheck = function () {
    return true;
  };

  /**
   * Disable AUTO_INITIALIZATION
   */

  if (typeof window != 'undefined') {
    WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true;
  }

  /**
   * Add the transport to your public io.transports array.
   *
   * @api private
   */

  io.transports.push('flashsocket');
})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
if ('undefined' != typeof window) {
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O[(['Active'].concat('Object').join('X'))]!=D){try{var ad=new window[(['Active'].concat('Object').join('X'))](W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?(['Active'].concat('').join('X')):"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
}
// Copyright: Hiroshi Ichikawa <http://gimite.net/en/>
// License: New BSD License
// Reference: http://dev.w3.org/html5/websockets/
// Reference: http://tools.ietf.org/html/draft-hixie-thewebsocketprotocol

(function() {
  
  if ('undefined' == typeof window || window.WebSocket) return;

  var console = window.console;
  if (!console || !console.log || !console.error) {
    console = {log: function(){ }, error: function(){ }};
  }
  
  if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
    console.error("Flash Player >= 10.0.0 is required.");
    return;
  }
  if (location.protocol == "file:") {
    console.error(
      "WARNING: web-socket-js doesn't work in file:///... URL " +
      "unless you set Flash Security Settings properly. " +
      "Open the page via Web server i.e. http://...");
  }

  /**
   * This class represents a faux web socket.
   * @param {string} url
   * @param {array or string} protocols
   * @param {string} proxyHost
   * @param {int} proxyPort
   * @param {string} headers
   */
  WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
    var self = this;
    self.__id = WebSocket.__nextId++;
    WebSocket.__instances[self.__id] = self;
    self.readyState = WebSocket.CONNECTING;
    self.bufferedAmount = 0;
    self.__events = {};
    if (!protocols) {
      protocols = [];
    } else if (typeof protocols == "string") {
      protocols = [protocols];
    }
    // Uses setTimeout() to make sure __createFlash() runs after the caller sets ws.onopen etc.
    // Otherwise, when onopen fires immediately, onopen is called before it is set.
    setTimeout(function() {
      WebSocket.__addTask(function() {
        WebSocket.__flash.create(
            self.__id, url, protocols, proxyHost || null, proxyPort || 0, headers || null);
      });
    }, 0);
  };

  /**
   * Send data to the web socket.
   * @param {string} data  The data to send to the socket.
   * @return {boolean}  True for success, false for failure.
   */
  WebSocket.prototype.send = function(data) {
    if (this.readyState == WebSocket.CONNECTING) {
      throw "INVALID_STATE_ERR: Web Socket connection has not been established";
    }
    // We use encodeURIComponent() here, because FABridge doesn't work if
    // the argument includes some characters. We don't use escape() here
    // because of this:
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Guide/Functions#escape_and_unescape_Functions
    // But it looks decodeURIComponent(encodeURIComponent(s)) doesn't
    // preserve all Unicode characters either e.g. "\uffff" in Firefox.
    // Note by wtritch: Hopefully this will not be necessary using ExternalInterface.  Will require
    // additional testing.
    var result = WebSocket.__flash.send(this.__id, encodeURIComponent(data));
    if (result < 0) { // success
      return true;
    } else {
      this.bufferedAmount += result;
      return false;
    }
  };

  /**
   * Close this web socket gracefully.
   */
  WebSocket.prototype.close = function() {
    if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
      return;
    }
    this.readyState = WebSocket.CLOSING;
    WebSocket.__flash.close(this.__id);
  };

  /**
   * Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
   *
   * @param {string} type
   * @param {function} listener
   * @param {boolean} useCapture
   * @return void
   */
  WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
    if (!(type in this.__events)) {
      this.__events[type] = [];
    }
    this.__events[type].push(listener);
  };

  /**
   * Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
   *
   * @param {string} type
   * @param {function} listener
   * @param {boolean} useCapture
   * @return void
   */
  WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
    if (!(type in this.__events)) return;
    var events = this.__events[type];
    for (var i = events.length - 1; i >= 0; --i) {
      if (events[i] === listener) {
        events.splice(i, 1);
        break;
      }
    }
  };

  /**
   * Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
   *
   * @param {Event} event
   * @return void
   */
  WebSocket.prototype.dispatchEvent = function(event) {
    var events = this.__events[event.type] || [];
    for (var i = 0; i < events.length; ++i) {
      events[i](event);
    }
    var handler = this["on" + event.type];
    if (handler) handler(event);
  };

  /**
   * Handles an event from Flash.
   * @param {Object} flashEvent
   */
  WebSocket.prototype.__handleEvent = function(flashEvent) {
    if ("readyState" in flashEvent) {
      this.readyState = flashEvent.readyState;
    }
    if ("protocol" in flashEvent) {
      this.protocol = flashEvent.protocol;
    }
    
    var jsEvent;
    if (flashEvent.type == "open" || flashEvent.type == "error") {
      jsEvent = this.__createSimpleEvent(flashEvent.type);
    } else if (flashEvent.type == "close") {
      // TODO implement jsEvent.wasClean
      jsEvent = this.__createSimpleEvent("close");
    } else if (flashEvent.type == "message") {
      var data = decodeURIComponent(flashEvent.message);
      jsEvent = this.__createMessageEvent("message", data);
    } else {
      throw "unknown event type: " + flashEvent.type;
    }
    
    this.dispatchEvent(jsEvent);
  };
  
  WebSocket.prototype.__createSimpleEvent = function(type) {
    if (document.createEvent && window.Event) {
      var event = document.createEvent("Event");
      event.initEvent(type, false, false);
      return event;
    } else {
      return {type: type, bubbles: false, cancelable: false};
    }
  };
  
  WebSocket.prototype.__createMessageEvent = function(type, data) {
    if (document.createEvent && window.MessageEvent && !window.opera) {
      var event = document.createEvent("MessageEvent");
      event.initMessageEvent("message", false, false, data, null, null, window, null);
      return event;
    } else {
      // IE and Opera, the latter one truncates the data parameter after any 0x00 bytes.
      return {type: type, data: data, bubbles: false, cancelable: false};
    }
  };
  
  /**
   * Define the WebSocket readyState enumeration.
   */
  WebSocket.CONNECTING = 0;
  WebSocket.OPEN = 1;
  WebSocket.CLOSING = 2;
  WebSocket.CLOSED = 3;

  WebSocket.__flash = null;
  WebSocket.__instances = {};
  WebSocket.__tasks = [];
  WebSocket.__nextId = 0;
  
  /**
   * Load a new flash security policy file.
   * @param {string} url
   */
  WebSocket.loadFlashPolicyFile = function(url){
    WebSocket.__addTask(function() {
      WebSocket.__flash.loadManualPolicyFile(url);
    });
  };

  /**
   * Loads WebSocketMain.swf and creates WebSocketMain object in Flash.
   */
  WebSocket.__initialize = function() {
    if (WebSocket.__flash) return;
    
    if (WebSocket.__swfLocation) {
      // For backword compatibility.
      window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation;
    }
    if (!window.WEB_SOCKET_SWF_LOCATION) {
      console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
      return;
    }
    var container = document.createElement("div");
    container.id = "webSocketContainer";
    // Hides Flash box. We cannot use display: none or visibility: hidden because it prevents
    // Flash from loading at least in IE. So we move it out of the screen at (-100, -100).
    // But this even doesn't work with Flash Lite (e.g. in Droid Incredible). So with Flash
    // Lite, we put it at (0, 0). This shows 1x1 box visible at left-top corner but this is
    // the best we can do as far as we know now.
    container.style.position = "absolute";
    if (WebSocket.__isFlashLite()) {
      container.style.left = "0px";
      container.style.top = "0px";
    } else {
      container.style.left = "-100px";
      container.style.top = "-100px";
    }
    var holder = document.createElement("div");
    holder.id = "webSocketFlash";
    container.appendChild(holder);
    document.body.appendChild(container);
    // See this article for hasPriority:
    // http://help.adobe.com/en_US/as3/mobile/WS4bebcd66a74275c36cfb8137124318eebc6-7ffd.html
    swfobject.embedSWF(
      WEB_SOCKET_SWF_LOCATION,
      "webSocketFlash",
      "1" /* width */,
      "1" /* height */,
      "10.0.0" /* SWF version */,
      null,
      null,
      {hasPriority: true, swliveconnect : true, allowScriptAccess: "always"},
      null,
      function(e) {
        if (!e.success) {
          console.error("[WebSocket] swfobject.embedSWF failed");
        }
      });
  };
  
  /**
   * Called by Flash to notify JS that it's fully loaded and ready
   * for communication.
   */
  WebSocket.__onFlashInitialized = function() {
    // We need to set a timeout here to avoid round-trip calls
    // to flash during the initialization process.
    setTimeout(function() {
      WebSocket.__flash = document.getElementById("webSocketFlash");
      WebSocket.__flash.setCallerUrl(location.href);
      WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);
      for (var i = 0; i < WebSocket.__tasks.length; ++i) {
        WebSocket.__tasks[i]();
      }
      WebSocket.__tasks = [];
    }, 0);
  };
  
  /**
   * Called by Flash to notify WebSockets events are fired.
   */
  WebSocket.__onFlashEvent = function() {
    setTimeout(function() {
      try {
        // Gets events using receiveEvents() instead of getting it from event object
        // of Flash event. This is to make sure to keep message order.
        // It seems sometimes Flash events don't arrive in the same order as they are sent.
        var events = WebSocket.__flash.receiveEvents();
        for (var i = 0; i < events.length; ++i) {
          WebSocket.__instances[events[i].webSocketId].__handleEvent(events[i]);
        }
      } catch (e) {
        console.error(e);
      }
    }, 0);
    return true;
  };
  
  // Called by Flash.
  WebSocket.__log = function(message) {
    console.log(decodeURIComponent(message));
  };
  
  // Called by Flash.
  WebSocket.__error = function(message) {
    console.error(decodeURIComponent(message));
  };
  
  WebSocket.__addTask = function(task) {
    if (WebSocket.__flash) {
      task();
    } else {
      WebSocket.__tasks.push(task);
    }
  };
  
  /**
   * Test if the browser is running flash lite.
   * @return {boolean} True if flash lite is running, false otherwise.
   */
  WebSocket.__isFlashLite = function() {
    if (!window.navigator || !window.navigator.mimeTypes) {
      return false;
    }
    var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
    if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
      return false;
    }
    return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false;
  };
  
  if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
    if (window.addEventListener) {
      window.addEventListener("load", function(){
        WebSocket.__initialize();
      }, false);
    } else {
      window.attachEvent("onload", function(){
        WebSocket.__initialize();
      });
    }
  }
  
})();

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io, global) {

  /**
   * Expose constructor.
   *
   * @api public
   */

  exports.XHR = XHR;

  /**
   * XHR constructor
   *
   * @costructor
   * @api public
   */

  function XHR (socket) {
    if (!socket) return;

    io.Transport.apply(this, arguments);
    this.sendBuffer = [];
  };

  /**
   * Inherits from Transport.
   */

  io.util.inherit(XHR, io.Transport);

  /**
   * Establish a connection
   *
   * @returns {Transport}
   * @api public
   */

  XHR.prototype.open = function () {
    this.socket.setBuffer(false);
    this.onOpen();
    this.get();

    // we need to make sure the request succeeds since we have no indication
    // whether the request opened or not until it succeeded.
    this.setCloseTimeout();

    return this;
  };

  /**
   * Check if we need to send data to the Socket.IO server, if we have data in our
   * buffer we encode it and forward it to the `post` method.
   *
   * @api private
   */

  XHR.prototype.payload = function (payload) {
    var msgs = [];

    for (var i = 0, l = payload.length; i < l; i++) {
      msgs.push(io.parser.encodePacket(payload[i]));
    }

    this.send(io.parser.encodePayload(msgs));
  };

  /**
   * Send data to the Socket.IO server.
   *
   * @param data The message
   * @returns {Transport}
   * @api public
   */

  XHR.prototype.send = function (data) {
    this.post(data);
    return this;
  };

  /**
   * Posts a encoded message to the Socket.IO server.
   *
   * @param {String} data A encoded message.
   * @api private
   */

  function empty () { };

  XHR.prototype.post = function (data) {
    var self = this;
    this.socket.setBuffer(true);

    function stateChange () {
      if (this.readyState == 4) {
        this.onreadystatechange = empty;
        self.posting = false;

        if (this.status == 200){
          self.socket.setBuffer(false);
        } else {
          self.onClose();
        }
      }
    }

    function onload () {
      this.onload = empty;
      self.socket.setBuffer(false);
    };

    this.sendXHR = this.request('POST');

    if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
      this.sendXHR.onload = this.sendXHR.onerror = onload;
    } else {
      this.sendXHR.onreadystatechange = stateChange;
    }

    this.sendXHR.send(data);
  };

  /**
   * Disconnects the established `XHR` connection.
   *
   * @returns {Transport}
   * @api public
   */

  XHR.prototype.close = function () {
    this.onClose();
    return this;
  };

  /**
   * Generates a configured XHR request
   *
   * @param {String} url The url that needs to be requested.
   * @param {String} method The method the request should use.
   * @returns {XMLHttpRequest}
   * @api private
   */

  XHR.prototype.request = function (method) {
    var req = io.util.request(this.socket.isXDomain())
      , query = io.util.query(this.socket.options.query, 't=' + +new Date);

    req.open(method || 'GET', this.prepareUrl() + query, true);

    if (method == 'POST') {
      try {
        if (req.setRequestHeader) {
          req.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        } else {
          // XDomainRequest
          req.contentType = 'text/plain';
        }
      } catch (e) {}
    }

    return req;
  };

  /**
   * Returns the scheme to use for the transport URLs.
   *
   * @api private
   */

  XHR.prototype.scheme = function () {
    return this.socket.options.secure ? 'https' : 'http';
  };

  /**
   * Check if the XHR transports are supported
   *
   * @param {Boolean} xdomain Check if we support cross domain requests.
   * @returns {Boolean}
   * @api public
   */

  XHR.check = function (socket, xdomain) {
    try {
      var request = io.util.request(xdomain),
          usesXDomReq = (global.XDomainRequest && request instanceof XDomainRequest),
          socketProtocol = (socket && socket.options && socket.options.secure ? 'https:' : 'http:'),
          isXProtocol = (global.location && socketProtocol != global.location.protocol);
      if (request && !(usesXDomReq && isXProtocol)) {
        return true;
      }
    } catch(e) {}

    return false;
  };

  /**
   * Check if the XHR transport supports cross domain requests.
   *
   * @returns {Boolean}
   * @api public
   */

  XHR.xdomainCheck = function (socket) {
    return XHR.check(socket, true);
  };

})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
  , this
);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Expose constructor.
   */

  exports.htmlfile = HTMLFile;

  /**
   * The HTMLFile transport creates a `forever iframe` based transport
   * for Internet Explorer. Regular forever iframe implementations will 
   * continuously trigger the browsers buzy indicators. If the forever iframe
   * is created inside a `htmlfile` these indicators will not be trigged.
   *
   * @constructor
   * @extends {io.Transport.XHR}
   * @api public
   */

  function HTMLFile (socket) {
    io.Transport.XHR.apply(this, arguments);
  };

  /**
   * Inherits from XHR transport.
   */

  io.util.inherit(HTMLFile, io.Transport.XHR);

  /**
   * Transport name
   *
   * @api public
   */

  HTMLFile.prototype.name = 'htmlfile';

  /**
   * Creates a new Ac...eX `htmlfile` with a forever loading iframe
   * that can be used to listen to messages. Inside the generated
   * `htmlfile` a reference will be made to the HTMLFile transport.
   *
   * @api private
   */

  HTMLFile.prototype.get = function () {
    this.doc = new window[(['Active'].concat('Object').join('X'))]('htmlfile');
    this.doc.open();
    this.doc.write('<html></html>');
    this.doc.close();
    this.doc.parentWindow.s = this;

    var iframeC = this.doc.createElement('div');
    iframeC.className = 'socketio';

    this.doc.body.appendChild(iframeC);
    this.iframe = this.doc.createElement('iframe');

    iframeC.appendChild(this.iframe);

    var self = this
      , query = io.util.query(this.socket.options.query, 't='+ +new Date);

    this.iframe.src = this.prepareUrl() + query;

    io.util.on(window, 'unload', function () {
      self.destroy();
    });
  };

  /**
   * The Socket.IO server will write script tags inside the forever
   * iframe, this function will be used as callback for the incoming
   * information.
   *
   * @param {String} data The message
   * @param {document} doc Reference to the context
   * @api private
   */

  HTMLFile.prototype._ = function (data, doc) {
    // unescape all forward slashes. see GH-1251
    data = data.replace(/\\\//g, '/');
    this.onData(data);
    try {
      var script = doc.getElementsByTagName('script')[0];
      script.parentNode.removeChild(script);
    } catch (e) { }
  };

  /**
   * Destroy the established connection, iframe and `htmlfile`.
   * And calls the `CollectGarbage` function of Internet Explorer
   * to release the memory.
   *
   * @api private
   */

  HTMLFile.prototype.destroy = function () {
    if (this.iframe){
      try {
        this.iframe.src = 'about:blank';
      } catch(e){}

      this.doc = null;
      this.iframe.parentNode.removeChild(this.iframe);
      this.iframe = null;

      CollectGarbage();
    }
  };

  /**
   * Disconnects the established connection.
   *
   * @returns {Transport} Chaining.
   * @api public
   */

  HTMLFile.prototype.close = function () {
    this.destroy();
    return io.Transport.XHR.prototype.close.call(this);
  };

  /**
   * Checks if the browser supports this transport. The browser
   * must have an `Ac...eXObject` implementation.
   *
   * @return {Boolean}
   * @api public
   */

  HTMLFile.check = function (socket) {
    if (typeof window != "undefined" && (['Active'].concat('Object').join('X')) in window){
      try {
        var a = new window[(['Active'].concat('Object').join('X'))]('htmlfile');
        return a && io.Transport.XHR.check(socket);
      } catch(e){}
    }
    return false;
  };

  /**
   * Check if cross domain requests are supported.
   *
   * @returns {Boolean}
   * @api public
   */

  HTMLFile.xdomainCheck = function () {
    // we can probably do handling for sub-domains, we should
    // test that it's cross domain but a subdomain here
    return false;
  };

  /**
   * Add the transport to your public io.transports array.
   *
   * @api private
   */

  io.transports.push('htmlfile');

})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io, global) {

  /**
   * Expose constructor.
   */

  exports['xhr-polling'] = XHRPolling;

  /**
   * The XHR-polling transport uses long polling XHR requests to create a
   * "persistent" connection with the server.
   *
   * @constructor
   * @api public
   */

  function XHRPolling () {
    io.Transport.XHR.apply(this, arguments);
  };

  /**
   * Inherits from XHR transport.
   */

  io.util.inherit(XHRPolling, io.Transport.XHR);

  /**
   * Merge the properties from XHR transport
   */

  io.util.merge(XHRPolling, io.Transport.XHR);

  /**
   * Transport name
   *
   * @api public
   */

  XHRPolling.prototype.name = 'xhr-polling';

  /**
   * Indicates whether heartbeats is enabled for this transport
   *
   * @api private
   */

  XHRPolling.prototype.heartbeats = function () {
    return false;
  };

  /** 
   * Establish a connection, for iPhone and Android this will be done once the page
   * is loaded.
   *
   * @returns {Transport} Chaining.
   * @api public
   */

  XHRPolling.prototype.open = function () {
    var self = this;

    io.Transport.XHR.prototype.open.call(self);
    return false;
  };

  /**
   * Starts a XHR request to wait for incoming messages.
   *
   * @api private
   */

  function empty () {};

  XHRPolling.prototype.get = function () {
    if (!this.isOpen) return;

    var self = this;

    function stateChange () {
      if (this.readyState == 4) {
        this.onreadystatechange = empty;

        if (this.status == 200) {
          self.onData(this.responseText);
          self.get();
        } else {
          self.onClose();
        }
      }
    };

    function onload () {
      this.onload = empty;
      this.onerror = empty;
      self.retryCounter = 1;
      self.onData(this.responseText);
      self.get();
    };

    function onerror () {
      self.retryCounter ++;
      if(!self.retryCounter || self.retryCounter > 3) {
        self.onClose();  
      } else {
        self.get();
      }
    };

    this.xhr = this.request();

    if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
      this.xhr.onload = onload;
      this.xhr.onerror = onerror;
    } else {
      this.xhr.onreadystatechange = stateChange;
    }

    this.xhr.send(null);
  };

  /**
   * Handle the unclean close behavior.
   *
   * @api private
   */

  XHRPolling.prototype.onClose = function () {
    io.Transport.XHR.prototype.onClose.call(this);

    if (this.xhr) {
      this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
      try {
        this.xhr.abort();
      } catch(e){}
      this.xhr = null;
    }
  };

  /**
   * Webkit based browsers show a infinit spinner when you start a XHR request
   * before the browsers onload event is called so we need to defer opening of
   * the transport until the onload event is called. Wrapping the cb in our
   * defer method solve this.
   *
   * @param {Socket} socket The socket instance that needs a transport
   * @param {Function} fn The callback
   * @api private
   */

  XHRPolling.prototype.ready = function (socket, fn) {
    var self = this;

    io.util.defer(function () {
      fn.call(self);
    });
  };

  /**
   * Add the transport to your public io.transports array.
   *
   * @api private
   */

  io.transports.push('xhr-polling');

})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
  , this
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io, global) {
  /**
   * There is a way to hide the loading indicator in Firefox. If you create and
   * remove a iframe it will stop showing the current loading indicator.
   * Unfortunately we can't feature detect that and UA sniffing is evil.
   *
   * @api private
   */

  var indicator = global.document && "MozAppearance" in
    global.document.documentElement.style;

  /**
   * Expose constructor.
   */

  exports['jsonp-polling'] = JSONPPolling;

  /**
   * The JSONP transport creates an persistent connection by dynamically
   * inserting a script tag in the page. This script tag will receive the
   * information of the Socket.IO server. When new information is received
   * it creates a new script tag for the new data stream.
   *
   * @constructor
   * @extends {io.Transport.xhr-polling}
   * @api public
   */

  function JSONPPolling (socket) {
    io.Transport['xhr-polling'].apply(this, arguments);

    this.index = io.j.length;

    var self = this;

    io.j.push(function (msg) {
      self._(msg);
    });
  };

  /**
   * Inherits from XHR polling transport.
   */

  io.util.inherit(JSONPPolling, io.Transport['xhr-polling']);

  /**
   * Transport name
   *
   * @api public
   */

  JSONPPolling.prototype.name = 'jsonp-polling';

  /**
   * Posts a encoded message to the Socket.IO server using an iframe.
   * The iframe is used because script tags can create POST based requests.
   * The iframe is positioned outside of the view so the user does not
   * notice it's existence.
   *
   * @param {String} data A encoded message.
   * @api private
   */

  JSONPPolling.prototype.post = function (data) {
    var self = this
      , query = io.util.query(
             this.socket.options.query
          , 't='+ (+new Date) + '&i=' + this.index
        );

    if (!this.form) {
      var form = document.createElement('form')
        , area = document.createElement('textarea')
        , id = this.iframeId = 'socketio_iframe_' + this.index
        , iframe;

      form.className = 'socketio';
      form.style.position = 'absolute';
      form.style.top = '0px';
      form.style.left = '0px';
      form.style.display = 'none';
      form.target = id;
      form.method = 'POST';
      form.setAttribute('accept-charset', 'utf-8');
      area.name = 'd';
      form.appendChild(area);
      document.body.appendChild(form);

      this.form = form;
      this.area = area;
    }

    this.form.action = this.prepareUrl() + query;

    function complete () {
      initIframe();
      self.socket.setBuffer(false);
    };

    function initIframe () {
      if (self.iframe) {
        self.form.removeChild(self.iframe);
      }

      try {
        // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
        iframe = document.createElement('<iframe name="'+ self.iframeId +'">');
      } catch (e) {
        iframe = document.createElement('iframe');
        iframe.name = self.iframeId;
      }

      iframe.id = self.iframeId;

      self.form.appendChild(iframe);
      self.iframe = iframe;
    };

    initIframe();

    // we temporarily stringify until we figure out how to prevent
    // browsers from turning `\n` into `\r\n` in form inputs
    this.area.value = io.JSON.stringify(data);

    try {
      this.form.submit();
    } catch(e) {}

    if (this.iframe.attachEvent) {
      iframe.onreadystatechange = function () {
        if (self.iframe.readyState == 'complete') {
          complete();
        }
      };
    } else {
      this.iframe.onload = complete;
    }

    this.socket.setBuffer(true);
  };

  /**
   * Creates a new JSONP poll that can be used to listen
   * for messages from the Socket.IO server.
   *
   * @api private
   */

  JSONPPolling.prototype.get = function () {
    var self = this
      , script = document.createElement('script')
      , query = io.util.query(
             this.socket.options.query
          , 't='+ (+new Date) + '&i=' + this.index
        );

    if (this.script) {
      this.script.parentNode.removeChild(this.script);
      this.script = null;
    }

    script.async = true;
    script.src = this.prepareUrl() + query;
    script.onerror = function () {
      self.onClose();
    };

    var insertAt = document.getElementsByTagName('script')[0];
    insertAt.parentNode.insertBefore(script, insertAt);
    this.script = script;

    if (indicator) {
      setTimeout(function () {
        var iframe = document.createElement('iframe');
        document.body.appendChild(iframe);
        document.body.removeChild(iframe);
      }, 100);
    }
  };

  /**
   * Callback function for the incoming message stream from the Socket.IO server.
   *
   * @param {String} data The message
   * @api private
   */

  JSONPPolling.prototype._ = function (msg) {
    this.onData(msg);
    if (this.isOpen) {
      this.get();
    }
    return this;
  };

  /**
   * The indicator hack only works after onload
   *
   * @param {Socket} socket The socket instance that needs a transport
   * @param {Function} fn The callback
   * @api private
   */

  JSONPPolling.prototype.ready = function (socket, fn) {
    var self = this;
    if (!indicator) return fn.call(this);

    io.util.load(function () {
      fn.call(self);
    });
  };

  /**
   * Checks if browser supports this transport.
   *
   * @return {Boolean}
   * @api public
   */

  JSONPPolling.check = function () {
    return 'document' in global;
  };

  /**
   * Check if cross domain requests are supported
   *
   * @returns {Boolean}
   * @api public
   */

  JSONPPolling.xdomainCheck = function () {
    return true;
  };

  /**
   * Add the transport to your public io.transports array.
   *
   * @api private
   */

  io.transports.push('jsonp-polling');

})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
  , this
);

if (typeof define === "function" && define.amd) {
  define([], function () { return io; });
}
})();

(function(){

  if (!window.jQuery) { throw new Error("jQuery is required"); }
  if (!window.io)     { throw new Error("socket.io is required"); }


  var socket     = null
  var streamable = {
    config: {
      host: window.location.origin // assume localhost and local protocol.
    }
  };


  /* a user may start interacting with our request API before
     we can guarantee that we're connected to the socket
     so we must queue up all the requests, and flush them once
     we're sure we're connected to the socket. */

  var _reqQueue        = [];

  /* socket connectivity is managed in a lazy fashion.
     ie: if Streamable is required into the browser, but never
     used, we don't waste a socket connection. */
  var _NOT_CONNECTED = 0
  ,   _CONNECTING    = 1
  ,   _CONNECTED     = 2
  , connectionStatus = _NOT_CONNECTED;

  var doConnectLazy = function() {
    socket = io.connect(streamable.config.host+'/streamable');
    connectionStatus = _CONNECTING;

    socket.on('connect', function() {
      connectionStatus = _CONNECTED;
      _reqQueue.forEach(function(req) {
        streamable.get.apply(null, req);
      });
      _reqQueue = [];
    });

    socket.on('error', function(e) {
      connectionStatus = _NOT_CONNECTED;
      throw e;
    });

    socket.on('disconnect', function() {
      connectionStatus = _NOT_CONNECTED // not connected.
    });
  };


  var handleDone = function(events) {
    return function ajaxDone(data) {
      if (!data.streamId) {
        return events.onError(new Error("streamId not provided in response"));
      }

      socket.on(data.streamId, function onData(payload) {
        // this is a completion.
        if (payload[0] === 'end') {
          socket.removeAllListeners(data.streamId);
          events.onEnd();

        // this is a terminating error.
        } else if (payload[0] === 'err.') {
          events.onError(payload[1]);
          socket.removeAllListeners(data.streamId);
          events.onEnd();

        // this is a non-terminating error.
        } else if (payload[0] === 'err') {
          events.onError(payload[1]);

        // this is a data payload.
        } else if (payload[0] === 'data') {
          try {
            events.onData.call(events, JSON.parse(payload[1]));
          } catch (err) {
            events.onData.call(events, payload[1]);
          }

        }
      });

      // notify server that we're ready to receive
      // our response stream.
      socket.emit(data.streamId+'ack');

    }
  };


  var handleFail = function(events) {
    return function ajaxFail(jqXHR, textStatus, errorThrown) {
      events.onError(errorThrown);
      events.onEnd();
    }
  };

  // From: https://github.com/dominictarr/crypto-browserify/blob/master/rng.js
  // NOTE: Math.random() does not guarantee "cryptographic quality"
  var mathRNG = function(size) {
    var bytes = new Array(size);
    var r;

    for (var i = 0, r; i < size; i++) {
      if ((i & 0x03) == 0) r = Math.random() * 0x100000000;
      bytes[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return bytes;
  };

  streamable.get = function(url, options, events) {
    if (connectionStatus != _CONNECTED) {
      _reqQueue.push([url, options, events]);
      if (connectionStatus != _CONNECTING) { doConnectLazy(); }
      return;
    }

    /* options allow you to send URL k/v
       params along with your request easily
       without doing the encoding by hand. */
    if (typeof options == 'object' && !events) {
      events  = options;
      options = {};
    }

    /* we embed our socket session into our request
       so that we know which session to send the stream to. */
    var params = options.params ? options.params : {};
    params.sid = socket.socket.sessionid;

    /* introduce randomness to querystring to make
       each request unique. */
    params['r' + mathRNG(8).join('')] = 1;

    /* event API is very similar to what you
       would expect in node.js/EventEmitter.
       ie: expect n data/errors calls and a single
       end event, at the very end, always. */
    if(!events.onData)  { events.onData  = function(){}; };
    if(!events.onError) { events.onError = function(error){ throw err; }; };
    if(!events.onEnd)   { events.onEnd   = function(){}; };

    jQuery.ajax({
      url      : url,
      dataType : 'json',
      data     : params
    })
      .done(handleDone(events))
      .fail(handleFail(events));
  };

  this.Streamable = streamable;

}.call(this));


(function(N,T,r){'use strict';function u(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.0-build.2918+sha.a2c7cf9/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function cb(b){if(null==
b||Na(b))return!1;var a=b.length;return 1===b.nodeType&&a?!0:y(b)||K(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d,e;if(b)if(L(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(K(b)||cb(b))for(d=0,e=b.length;d<e;d++)a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Yb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);
return a.sort()}function jd(b,a,c){for(var d=Yb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Zb(b){return function(a,c){b(c,a)}}function kd(){return++db}function $b(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function B(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});$b(b,a);return b}function W(b){return parseInt(b,10)}function ac(b,a){return B(new (B(function(){},{prototype:b})),a)}function C(){}function Da(b){return b}function ca(b){return function(){return b}}
function z(b){return"undefined"===typeof b}function E(b){return"undefined"!==typeof b}function R(b){return null!=b&&"object"===typeof b}function y(b){return"string"===typeof b}function Ea(b){return"number"===typeof b}function qa(b){return"[object Date]"===ya.call(b)}function L(b){return"function"===typeof b}function eb(b){return"[object RegExp]"===ya.call(b)}function Na(b){return b&&b.window===b}function ld(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function md(b){var a={};b=b.split(",");
var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function nd(b,a,c){var d=[];q(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Oa(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Fa(b,a){var c=Oa(b,a);0<=c&&b.splice(c,1);return a}function za(b,a,c,d){if(Na(b)||b&&b.$evalAsync&&b.$watch)throw Pa("cpws");if(a){if(b===a)throw Pa("cpi");c=c||[];d=d||[];if(R(b)){var e=Oa(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(K(b))for(var f=
a.length=0;f<b.length;f++)e=za(b[f],null,c,d),R(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;q(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=za(b[f],null,c,d),R(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);$b(a,g)}}else if(a=b)K(b)?a=za(b,[],c,d):qa(b)?a=new Date(b.getTime()):eb(b)?a=RegExp(b.source):R(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=za(b,e,c,d));return a}function ia(b,a){var c=0;if(K(b))for(a=a||[];c<b.length;c++)a[c]=b[c];else if(R(b)){a=a||{};
for(var d=Object.keys(b),e=d.length;c<e;c++){var f=d[c];if("$"!==f.charAt(0)||"$"!==f.charAt(1))a[f]=b[f]}}return a||b}function ra(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(K(b)){if(!K(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ra(b[d],a[d]))return!1;return!0}}else{if(qa(b))return qa(a)&&b.getTime()==a.getTime();if(eb(b)&&eb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&
a.$watch||Na(b)||Na(a)||K(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!L(b[d])){if(!ra(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==r&&!L(a[d]))return!1;return!0}return!1}function bc(){return T.securityPolicy&&T.securityPolicy.isActive||T.querySelector&&!(!T.querySelector("[ng-csp]")&&!T.querySelector("[data-ng-csp]"))}function Ab(b,a){var c=2<arguments.length?ja.call(arguments,2):[];return!L(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?
a.apply(b,c.concat(ja.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function od(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=r:Na(a)?c="$WINDOW":a&&T===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function sa(b,a){return"undefined"===typeof b?r:JSON.stringify(b,od,a?"  ":null)}function cc(b){return y(b)?JSON.parse(b):b}function fa(b){b=F(b).clone();try{b.empty()}catch(a){}var c=F("<div>").append(b).html();
try{return 3===b[0].nodeType?M(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+M(b)})}catch(d){return M(c)}}function dc(b){try{return decodeURIComponent(b)}catch(a){}}function ec(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=dc(c[0]),E(d)&&(b=E(c[1])?dc(c[1]):!0,Bb.call(a,d)?K(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Cb(b){var a=[];q(b,function(b,d){K(b)?q(b,function(b){a.push(Aa(d,!0)+(!0===b?"":"="+Aa(b,!0)))}):a.push(Aa(d,!0)+
(!0===b?"":"="+Aa(b,!0)))});return a.length?a.join("&"):""}function fb(b){return Aa(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Aa(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function pd(b,a){var c,d,e=fc.length;b=F(b);for(d=0;d<e;++d)if(c=fc[d]+a,y(c=b.attr(c)))return c;return null}function qd(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g={},h=["ng:app","ng-app",
"x-ng-app","data-ng-app"],m=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(h,function(a){h[a]=!0;c(T.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=m.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&h[b.name]&&(e=a,f=b.value)})}});e&&(g.strictDi=null!==pd(e,"strict-di"),a(e,f?[f]:[],g))}function gc(b,a,c){R(c)||
(c={});c=B({strictDi:!1},c);var d=function(){b=F(b);if(b.injector()){var d=b[0]===T?"document":fa(b);throw Pa("btstrpd",d);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");d=Db(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_DEFER_BOOTSTRAP!/;if(N&&!e.test(N.name))return d();N.name=N.name.replace(e,"");Qa.resumeBootstrap=function(b){q(b,function(b){a.push(b)});
d()}}function gb(b,a){a=a||"_";return b.replace(rd,function(b,d){return(d?a:"")+b.toLowerCase()})}function sd(){var b;(ta=N.jQuery)&&ta.fn.on?(F=ta,B(ta.fn,{scope:Ga.scope,isolateScope:Ga.isolateScope,controller:Ga.controller,injector:Ga.injector,inheritedData:Ga.inheritedData}),b=ta.cleanData,b=b.$$original||b,ta.cleanData=function(a){for(var c=0,d;null!=(d=a[c]);c++)ta(d).triggerHandler("$destroy");b(a)},ta.cleanData.$$original=b):F=Q;Qa.element=F}function Eb(b,a,c){if(!b)throw Pa("areq",a||"?",
c||"required");return b}function Ra(b,a,c){c&&K(b)&&(b=b[b.length-1]);Eb(L(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ba(b,a){if("hasOwnProperty"===b)throw Pa("badname",a);}function hc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&L(b)?Ab(e,b):b}function Fb(b){var a=b[0];b=b[b.length-1];if(a===b)return F(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);
return F(c)}function td(b){var a=u("$injector"),c=u("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||u;return b.module||(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e,f){f||(f=c);return function(){f[e||"push"]([a,d,arguments]);return k}}if(!f)throw a("nomod",e);var c=[],d=[],n=[],p=b("$injector","invoke","push",d),k={_invokeQueue:c,_configBlocks:d,_runBlocks:n,
requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:p,run:function(a){n.push(a);return this}};g&&p(g);return k}())}}())}function ud(b){B(b,{bootstrap:gc,copy:za,extend:B,equals:ra,element:F,
forEach:q,injector:Db,noop:C,bind:Ab,toJson:sa,fromJson:cc,identity:Da,isUndefined:z,isDefined:E,isString:y,isFunction:L,isObject:R,isNumber:Ea,isElement:ld,isArray:K,version:vd,isDate:qa,lowercase:M,uppercase:hb,callbacks:{counter:0},$$minErr:u,$$csp:bc});Sa=td(N);try{Sa("ngLocale")}catch(a){Sa("ngLocale",[]).provider("$locale",wd)}Sa("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:xd});a.provider("$compile",ic).directive({a:yd,input:jc,textarea:jc,form:zd,script:Ad,select:Bd,
style:Cd,option:Dd,ngBind:Ed,ngBindHtml:Fd,ngBindTemplate:Gd,ngClass:Hd,ngClassEven:Id,ngClassOdd:Jd,ngCloak:Kd,ngController:Ld,ngForm:Md,ngHide:Nd,ngIf:Od,ngInclude:Pd,ngInit:Qd,ngNonBindable:Rd,ngPluralize:Sd,ngRepeat:Td,ngShow:Ud,ngStyle:Vd,ngSwitch:Wd,ngSwitchWhen:Xd,ngSwitchDefault:Yd,ngOptions:Zd,ngTransclude:$d,ngModel:ae,ngList:be,ngChange:ce,pattern:kc,ngPattern:kc,required:lc,ngRequired:lc,minlength:mc,ngMinlength:mc,maxlength:nc,ngMaxlength:nc,ngValue:de,ngModelOptions:ee}).directive({ngInclude:fe}).directive(ib).directive(oc);
a.provider({$anchorScroll:ge,$animate:he,$browser:ie,$cacheFactory:je,$controller:ke,$document:le,$exceptionHandler:me,$filter:pc,$interpolate:ne,$interval:oe,$http:pe,$httpBackend:qe,$location:re,$log:se,$parse:te,$rootScope:ue,$q:ve,$$q:we,$sce:xe,$sceDelegate:ye,$sniffer:ze,$templateCache:Ae,$timeout:Be,$window:Ce,$$rAF:De,$$asyncCallback:Ee})}])}function Ta(b){return b.replace(Fe,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Ge,"Moz$1")}function He(b,a){var c,d,e=a.createDocumentFragment(),
f=[];if(Gb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(Ie.exec(b)||["",""])[1].toLowerCase();d=da[d]||da._default;c.innerHTML=d[1]+b.replace(Je,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=f.concat(ja.call(c.childNodes,void 0));c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});return e}function Q(b){if(b instanceof Q)return b;y(b)&&(b=Z(b));if(!(this instanceof Q)){if(y(b)&&"<"!=b.charAt(0))throw Hb("nosel");
return new Q(b)}if(y(b)){var a;a=T;var c;b=(c=Ke.exec(b))?[a.createElement(c[1])]:(c=He(b,a))?c.childNodes:[]}qc(this,b)}function Ib(b){return b.cloneNode(!0)}function jb(b,a){a||Jb(b);if(b.childNodes&&b.childNodes.length)for(var c=b.getElementsByTagName?b.getElementsByTagName("*"):b.querySelectorAll?b.querySelectorAll("*"):[],d=0,e=c.length;d<e;d++)Jb(c[d])}function rc(b,a,c,d){if(E(d))throw Hb("offargs");var e=ka(b,"events");ka(b,"handle")&&(z(a)?q(e,function(a,c){Ua(b,c,a);delete e[c]}):q(a.split(" "),
function(a){z(c)?(Ua(b,a,e[a]),delete e[a]):Fa(e[a]||[],c)}))}function Jb(b,a){var c=b.ng339,d=Va[c];d&&(a?delete Va[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),rc(b)),delete Va[c],b.ng339=r))}function ka(b,a,c){var d=b.ng339,d=Va[d||-1];if(E(c))d||(b.ng339=d=++Le,d=Va[d]={}),d[a]=c;else return d&&d[a]}function sc(b,a,c){if(!b.nodeType||1===b.nodeType||9===b.nodeType){var d=ka(b,"data"),e=E(c),f=!e&&E(a),g=f&&!R(a);d||g||ka(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&
d[a];B(d,a)}else return d}}function Kb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function kb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",Z((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+Z(a)+" "," ")))})}function lb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=Z(a);-1===c.indexOf(" "+a+" ")&&
(c+=a+" ")});b.setAttribute("class",Z(c))}}function qc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;"number"===typeof c&&a.window!==a?c&&(a.item&&(a=ja.call(a)),tc.apply(b,a)):b[b.length++]=a}}function uc(b,a){return mb(b,"$"+(a||"ngController")+"Controller")}function mb(b,a,c){b=F(b);9==b[0].nodeType&&(b=b.find("html"));for(a=K(a)?a:[a];b.length;){for(var d=b[0],e=0,f=a.length;e<f;e++)if((c=b.data(a[e]))!==r)return c;b=F(d.parentNode||11===d.nodeType&&d.host)}}function vc(b){for(jb(b,
!0);b.firstChild;)b.removeChild(b.firstChild)}function wc(b,a){var c=nb[a.toLowerCase()];return c&&xc[la(b)]&&c}function Me(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&yc[a]}function Ne(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||T);if(z(c.defaultPrevented)){var f=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};
c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=ia(a[e||c.type]||[]);q(g,function(a){a.call(b,c)});8>=U?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ha(b,a){var c=typeof b,d;"function"==c||"object"==c&&null!==b?"function"==typeof(d=b.$$hashKey)?d=b.$$hashKey():d===r&&(d=b.$$hashKey=(a||kd)()):d=b;return c+
":"+d}function Wa(b,a){if(a){var c=0;this.nextUid=function(){return++c}}q(b,this.put,this)}function Oe(b){return(b=b.toString().replace(zc,"").match(Ac))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Lb(b,a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw y(c)&&c||(c=b.name||Oe(b)),Ia("strictdi",c);a=b.toString().replace(zc,"");a=a.match(Ac);q(a[1].split(Pe),function(a){a.replace(Qe,function(a,b,c){d.push(c)})})}b.$inject=d}}else K(b)?(a=b.length-
1,Ra(b[a],"fn"),d=b.slice(0,a)):Ra(b,"fn",!0);return d}function Db(b,a){function c(a){return function(b,c){if(R(b))q(b,Zb(a));else return a(b,c)}}function d(a,b){Ba(a,"service");if(L(b)||K(b))b=k.instantiate(b);if(!b.$get)throw Ia("pget",a);return p[a+m]=b}function e(a,b){return d(a,{$get:b})}function f(a){var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=k.get(e[0]);f[e[1]].apply(f,e[2])}}if(!n.get(a)){n.put(a,!0);try{y(a)?(c=Sa(a),b=b.concat(f(c.requires)).concat(c._runBlocks),
d(c._invokeQueue),d(c._configBlocks)):L(a)?b.push(k.invoke(a)):K(a)?b.push(k.invoke(a)):Ra(a,"module")}catch(e){throw K(a)&&(a=a[a.length-1]),e.message&&(e.stack&&-1==e.stack.indexOf(e.message))&&(e=e.message+"\n"+e.stack),Ia("modulerr",a,e.stack||e.message||e);}}});return b}function g(b,c){function d(a){if(b.hasOwnProperty(a)){if(b[a]===h)throw Ia("cdep",a+" <- "+l.join(" <- "));return b[a]}try{return l.unshift(a),b[a]=h,b[a]=c(a)}catch(e){throw b[a]===h&&delete b[a],e;}finally{l.shift()}}function e(b,
c,f,g){"string"===typeof f&&(g=f,f=null);var h=[];g=Lb(b,a,g);var m,l,k;l=0;for(m=g.length;l<m;l++){k=g[l];if("string"!==typeof k)throw Ia("itkn",k);h.push(f&&f.hasOwnProperty(k)?f[k]:d(k))}K(b)&&(b=b[m]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=function(){};d.prototype=(K(a)?a[a.length-1]:a).prototype;d=new d;a=e(a,d,b,c);return R(a)||L(a)?a:d},get:d,annotate:Lb,has:function(a){return p.hasOwnProperty(a+m)||b.hasOwnProperty(a)}}}a=!0===a;var h={},m="Provider",l=[],n=
new Wa([],!0),p={$provide:{provider:c(d),factory:c(e),service:c(function(a,b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return e(a,ca(b))}),constant:c(function(a,b){Ba(a,"constant");p[a]=b;t[a]=b}),decorator:function(a,b){var c=k.get(a+m),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},k=p.$injector=g(p,function(){throw Ia("unpr",l.join(" <- "));},a),t={},s=t.$injector=g(t,function(a){var b=k.get(a+m);return s.invoke(b.$get,
b,r,a)},a);q(f(b),function(a){s.invoke(a||C)});return s}function ge(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==la(a)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});
return f}]}function Ee(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function Re(b,a,c,d){function e(a){try{a.apply(null,ja.call(arguments,1))}finally{if(s--,0===s)for(;J.length;)try{J.pop()()}catch(b){c.error(b)}}}function f(a,b){(function Se(){q(H,function(a){a()});G=b(Se,a)})()}function g(){w=null;v!=h.url()&&(v=h.url(),q(V,function(a){a(h.url())}))}var h=this,m=a[0],l=b.location,n=b.history,p=b.setTimeout,k=b.clearTimeout,
t={};h.isMock=!1;var s=0,J=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){s++};h.notifyWhenNoOutstandingRequests=function(a){q(H,function(a){a()});0===s?a():J.push(a)};var H=[],G;h.addPollFn=function(a){z(G)&&f(100,p);H.push(a);return a};var v=l.href,A=a.find("base"),w=null;h.url=function(a,c){l!==b.location&&(l=b.location);n!==b.history&&(n=b.history);if(a){if(v!=a)return v=a,d.history?c?n.replaceState(null,"",a):(n.pushState(null,"",a),A.attr("href",A.attr("href"))):
(w=a,c?l.replace(a):l.href=a),h}else return w||l.href.replace(/%27/g,"'")};var V=[],O=!1;h.onUrlChange=function(a){if(!O){if(d.history)F(b).on("popstate",g);if(d.hashchange)F(b).on("hashchange",g);else h.addPollFn(g);O=!0}V.push(a);return a};h.baseHref=function(){var a=A.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var S={},P="",D=h.baseHref();h.cookies=function(a,b){var d,e,f,g;if(a)b===r?m.cookie=escape(a)+"=;path="+D+";expires=Thu, 01 Jan 1970 00:00:00 GMT":y(b)&&(d=(m.cookie=
escape(a)+"="+escape(b)+";path="+D).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==P)for(P=m.cookie,d=P.split("; "),S={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=unescape(e.substring(0,g)),S[a]===r&&(S[a]=unescape(e.substring(g+1))));return S}};h.defer=function(a,b){var c;s++;c=p(function(){delete t[c];e(a)},b||0);t[c]=!0;return c};h.defer.cancel=function(a){return t[a]?(delete t[a],k(a),e(C),!0):
!1}}function ie(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new Re(b,d,a,c)}]}function je(){this.$get=function(){function b(b,d){function e(a){a!=p&&(k?k==a&&(k=a.n):k=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw u("$cacheFactory")("iid",b);var g=0,h=B({},d,{id:b}),m={},l=d&&d.capacity||Number.MAX_VALUE,n={},p=null,k=null;return a[b]={put:function(a,b){if(l<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}if(!z(b))return a in
m||g++,m[a]=b,g>l&&this.remove(k.key),b},get:function(a){if(l<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=n[a];if(!b)return;b==p&&(p=b.p);b==k&&(k=b.n);f(b.n,b.p);delete n[a]}delete m[a];g--},removeAll:function(){m={};g=0;n={};p=k=null},destroy:function(){n=h=m=null;delete a[b]},info:function(){return B({},h,{size:g})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}
function Ae(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function ic(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,g=md("ngSrc,ngSrcset,src,srcset"),h=/^(on[a-z]+|formaction)$/;this.directive=function l(a,e){Ba(a,"directive");y(a)?(Eb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,f){try{var g=b.invoke(c);L(g)?g={compile:ca(g)}:
!g.compile&&g.link&&(g.compile=ca(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(h){d(h)}});return e}])),c[a].push(e)):q(a,Zb(l));return this};this.aHrefSanitizationWhitelist=function(b){return E(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return E(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=
["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,p,k,t,s,J,H,G,v,A,w){function V(a,b,c,d,e){a instanceof F||(a=F(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=F(b).wrap("<span></span>").parent()[0])});var f=S(a,b,a,c,d,e);O(a,"ng-scope");return function(b,c,d,e){Eb(b,"scope");var g=c?Ga.clone.call(a):a;q(d,function(a,b){g.data("$"+b+"Controller",a)});g.data("$scope",
b);c&&c(g,b);f&&f(b,g,g,e);return g}}function O(a,b){try{a.addClass(b)}catch(c){}}function S(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,n,p,t,G;f=c.length;var s=Array(f);for(p=0;p<f;p++)s[p]=c[p];G=p=0;for(t=h.length;p<t;G++)k=s[G],c=h[p++],f=h[p++],l=F(k),c?(c.scope?(n=a.$new(),l.data("$scope",n)):n=a,l=c.transcludeOnThisElement?P(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?P(a,b):null,c(f,n,k,d,l)):f&&f(a,k.childNodes,r,e)}for(var h=[],k,l,n,p,t=0;t<a.length;t++)k=new Mb,l=D(a[t],[],k,
0===t?d:r,e),(f=l.length?ba(l,a[t],k,b,c,null,[],[],f):null)&&f.scope&&O(F(a[t]),"ng-scope"),k=f&&f.terminal||!(n=a[t].childNodes)||!n.length?null:S(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b),h.push(f,k),p=p||f||k,f=null;return p?g:null}function P(a,b,c){return function(d,e,f){var g=!1;d||(d=a.$new(),g=d.$$transcluded=!0);e=b(d,e,f,c);if(g)e.on("$destroy",function(){d.$destroy()});return e}}function D(a,b,c,d,g){var h=c.$attr,k;switch(a.nodeType){case 1:ua(b,na(la(a)),
"E",d,g);for(var l,p,n,t=a.attributes,G=0,s=t&&t.length;G<s;G++){var H=!1,J=!1;l=t[G];if(!U||8<=U||l.specified){k=l.name;p=Z(l.value);l=na(k);if(n=Ca.test(l))k=gb(l.substr(6),"-");var v=l.replace(/(Start|End)$/,"");l===v+"Start"&&(H=k,J=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=na(k.toLowerCase());h[l]=k;if(n||!c.hasOwnProperty(l))c[l]=p,wc(a,l)&&(c[l]=!0);X(a,b,p,l);ua(b,l,"A",d,g,H,J)}}a=a.className;if(y(a)&&""!==a)for(;k=f.exec(a);)l=na(k[2]),ua(b,l,"C",d,g)&&(c[l]=Z(k[3])),a=a.substr(k.index+
k[0].length);break;case 3:u(b,a.nodeValue);break;case 8:try{if(k=e.exec(a.nodeValue))l=na(k[1]),ua(b,l,"M",d,g)&&(c[l]=Z(k[2]))}catch(A){}}b.sort(z);return b}function x(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ga("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return F(d)}function Y(a,b,c){return function(d,e,f,g,h){e=x(e[0],b,c);return a(d,e,f,g,h)}}function ba(a,c,d,e,f,g,h,k,l){function t(a,
b,c,d){if(a){c&&(a=Y(a,c,d));a.require=I.require;a.directiveName=B;if(w===I||I.$$isolateScope)a=Cc(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Y(b,c,d));b.require=I.require;b.directiveName=B;if(w===I||I.$$isolateScope)b=Cc(b,{isolateScope:!0});k.push(b)}}function G(a,b,c,d){var e,f="data",g=!1;if(y(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ga("ctreq",b,a);}else K(b)&&(e=[],
q(b,function(b){e.push(G(a,b,c,d))}));return e}function H(a,e,f,g,l){function t(a,b){var c;2>arguments.length&&(b=a,a=r);z&&(c=ba);return l(a,b,c)}var v,A,Bc,x,V,D,ba={},Y;v=c===f?d:ia(d,new Mb(F(f),d.$attr));A=v.$$element;if(w){var Te=/^\s*([@=&])(\??)\s*(\w*)\s*$/;g=F(f);D=e.$new(!0);!S||S!==w&&S!==w.$$originalDirective?g.data("$isolateScopeNoTemplate",D):g.data("$isolateScope",D);O(g,"ng-isolate-scope");q(w.scope,function(a,c){var d=a.match(Te)||[],f=d[3]||c,g="?"==d[2],d=d[1],h,k,l,p;D.$$isolateBindings[c]=
d+f;switch(d){case "@":v.$observe(f,function(a){D[c]=a});v.$$observers[f].$$scope=e;v[f]&&(D[c]=b(v[f])(e));break;case "=":if(g&&!v[f])break;k=s(v[f]);p=k.literal?ra:function(a,b){return a===b};l=k.assign||function(){h=D[c]=k(e);throw ga("nonassign",v[f],w.name);};h=D[c]=k(e);D.$watch(function Ue(){var a=k(e);p(a,D[c])||(p(a,h)?l(e,a=D[c]):D[c]=a);Ue.$$unwatch=k.$$unwatch;return h=a},null,k.literal);break;case "&":k=s(v[f]);D[c]=function(a){return k(e,a)};break;default:throw ga("iscp",w.name,c,a);
}})}Y=l&&t;P&&q(P,function(a){var b={$scope:a===w||a.$$isolateScope?D:e,$element:A,$attrs:v,$transclude:Y},c;V=a.controller;"@"==V&&(V=v[a.name]);c=J(V,b);ba[a.name]=c;z||A.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(Bc=h.length;g<Bc;g++)try{x=h[g],x(x.isolateScope?D:e,A,v,x.require&&G(x.directiveName,x.require,A,ba),Y)}catch(ma){p(ma,fa(A))}g=e;w&&(w.template||null===w.templateUrl)&&(g=D);a&&a(g,f.childNodes,r,l);for(g=k.length-1;0<=g;g--)try{x=k[g],x(x.isolateScope?
D:e,A,v,x.require&&G(x.directiveName,x.require,A,ba),Y)}catch(u){p(u,fa(A))}}l=l||{};for(var v=-Number.MAX_VALUE,A,P=l.controllerDirectives,w=l.newIsolateScopeDirective,S=l.templateDirective,ba=l.nonTlbTranscludeDirective,ua=!1,Xa=!1,z=l.hasElementTranscludeDirective,X=d.$$element=F(c),I,B,u,M=e,Ja,N=0,Q=a.length;N<Q;N++){I=a[N];var Ca=I.$$start,ob=I.$$end;Ca&&(X=x(c,Ca,ob));u=r;if(v>I.priority)break;if(u=I.scope)I.templateUrl||(R(u)?(Ka("new/isolated scope",w||A,I,X),w=I):Ka("new/isolated scope",
w,I,X)),A=A||I;B=I.name;!I.templateUrl&&I.controller&&(u=I.controller,P=P||{},Ka("'"+B+"' controller",P[B],I,X),P[B]=I);if(u=I.transclude)ua=!0,I.$$tlb||(Ka("transclusion",ba,I,X),ba=I),"element"==u?(z=!0,v=I.priority,u=x(c,Ca,ob),X=d.$$element=F(T.createComment(" "+B+": "+d[B]+" ")),c=X[0],pb(f,F(ja.call(u,0)),c),M=V(u,e,v,g&&g.name,{nonTlbTranscludeDirective:ba})):(u=F(Ib(c)).contents(),X.empty(),M=V(u,e));if(I.template)if(Xa=!0,Ka("template",S,I,X),S=I,u=L(I.template)?I.template(X,d):I.template,
u=Dc(u),I.replace){g=I;u=Gb.test(u)?F(Ec(I.type,Z(u))):[];c=u[0];if(1!=u.length||1!==c.nodeType)throw ga("tplrt",B,"");pb(f,X,c);Q={$attr:{}};u=D(c,[],Q);var U=a.splice(N+1,a.length-(N+1));w&&E(u);a=a.concat(u).concat(U);ma(d,Q);Q=a.length}else X.html(u);if(I.templateUrl)Xa=!0,Ka("template",S,I,X),S=I,I.replace&&(g=I),H=C(a.splice(N,a.length-N),X,d,f,ua&&M,h,k,{controllerDirectives:P,newIsolateScopeDirective:w,templateDirective:S,nonTlbTranscludeDirective:ba}),Q=a.length;else if(I.compile)try{Ja=
I.compile(X,d,M),L(Ja)?t(null,Ja,Ca,ob):Ja&&t(Ja.pre,Ja.post,Ca,ob)}catch(W){p(W,fa(X))}I.terminal&&(H.terminal=!0,v=Math.max(v,I.priority))}H.scope=A&&!0===A.scope;H.transcludeOnThisElement=ua;H.templateOnThisElement=Xa;H.transclude=M;l.hasElementTranscludeDirective=z;return H}function E(a){for(var b=0,c=a.length;b<c;b++)a[b]=ac(a[b],{$$isolateScope:!0})}function ua(b,e,f,g,h,k,n){if(e===h)return null;h=null;if(c.hasOwnProperty(e)){var t;e=a.get(e+d);for(var G=0,s=e.length;G<s;G++)try{t=e[G],(g===
r||g>t.priority)&&-1!=t.restrict.indexOf(f)&&(k&&(t=ac(t,{$$start:k,$$end:n})),b.push(t),h=t)}catch(v){p(v)}}return h}function ma(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(O(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=
c[f])})}function C(a,b,c,d,e,f,g,h){var l=[],p,n,G=b[0],s=a.shift(),H=B({},s,{templateUrl:null,transclude:null,replace:null,$$originalDirective:s}),A=L(s.templateUrl)?s.templateUrl(b,c):s.templateUrl,J=s.type;b.empty();k.get(v.getTrustedResourceUrl(A),{cache:t}).success(function(k){var t,v;k=Dc(k);if(s.replace){k=Gb.test(k)?F(Ec(J,Z(k))):[];t=k[0];if(1!=k.length||1!==t.nodeType)throw ga("tplrt",s.name,A);k={$attr:{}};pb(d,b,t);var w=D(t,[],k);R(s.scope)&&E(w);a=w.concat(a);ma(c,k)}else t=G,b.html(k);
a.unshift(H);p=ba(a,t,c,e,b,s,f,g,h);q(d,function(a,c){a==t&&(d[c]=b[0])});for(n=S(b[0].childNodes,e);l.length;){k=l.shift();v=l.shift();var x=l.shift(),V=l.shift(),w=b[0];if(v!==G){var Y=v.className;h.hasElementTranscludeDirective&&s.replace||(w=Ib(t));pb(x,F(v),w);O(F(w),Y)}v=p.transcludeOnThisElement?P(k,p.transclude,V):V;p(n,k,w,d,v)}l=null}).error(function(a,b,c,d){throw ga("tpload",d.url);});return function(a,b,c,d,e){a=e;l?(l.push(b),l.push(c),l.push(d),l.push(a)):(p.transcludeOnThisElement&&
(a=P(b,p.transclude,e)),p(n,b,c,d,a))}}function z(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Ka(a,b,c,d){if(b)throw ga("multidir",b.name,c.name,a,fa(d));}function u(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){var e=a.parent().length;e&&O(a.parent(),"ng-binding");return function(a,f){var g=f.parent(),h=g.data("$binding")||[];d=b(c);h.push(d);g.data("$binding",h);e||O(g,"ng-binding");a.$watch(d,function(a){f[0].nodeValue=
a})}}})}function Ec(a,b){a=M(a||"html");switch(a){case "svg":case "math":var c=T.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function Xa(a,b){if("srcdoc"==b)return v.HTML;var c=la(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return v.RESOURCE_URL}function X(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"select"===la(a))throw ga("selmulti",fa(a));c.push({priority:100,compile:function(){return{pre:function(c,
d,k){d=k.$$observers||(k.$$observers={});if(h.test(e))throw ga("nodomevents");if(f=b(k[e],!0,Xa(a,e),g[e]))k[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a)})}}}})}}function pb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=T.createDocumentFragment();
a.appendChild(d);c[F.expando]=d[F.expando];d=1;for(e=b.length;d<e;d++)f=b[d],F(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Cc(a,b){return B(function(){return a.apply(null,arguments)},a,b)}var Mb=function(a,b){this.$$element=a;this.$attr=b||{}};Mb.prototype={$normalize:na,$addClass:function(a){a&&0<a.length&&A.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&A.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Fc(a,b),d=Fc(b,a);0===c.length?A.removeClass(this.$$element,
d):0===d.length?A.addClass(this.$$element,c):A.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=this.$$element[0],f=wc(e,a),g=Me(e,a),e=a;f?(this.$$element.prop(a,b),d=f):g&&(this[g]=b,e=g);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=gb(a,"-"));f=la(this.$$element);if("a"===f&&"href"===a||"img"===f&&"src"===a)this[a]=b=w(b,"src"===a);!1!==c&&(null===b||b===r?this.$$element.removeAttr(d):this.$$element.attr(d,b));(a=this.$$observers)&&q(a[e],function(a){try{a(b)}catch(c){p(c)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);H.$evalAsync(function(){e.$$inter||b(c[a])});return function(){Fa(e,b)}}};var N=b.startSymbol(),Q=b.endSymbol(),Dc="{{"==N||"}}"==Q?Da:function(a){return a.replace(/\{\{/g,N).replace(/}}/g,Q)},Ca=/^ngAttr[A-Z]/;return V}]}function na(b){return Ta(b.replace(Ve,""))}function Fc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;
c+=(0<c.length?" ":"")+g}return c}function ke(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){Ba(a,"controller");R(a)?B(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){return function(f,g){var h,m,l;y(f)&&(h=f.match(c),m=h[1],l=h[3],f=b.hasOwnProperty(m)?b[m]:hc(g.$scope,m,!0)||(a?hc(e,m,!0):r),Ra(f,m,!0));h=d.instantiate(f,g,m);if(l){if(!g||"object"!==typeof g.$scope)throw u("$controller")("noscp",m||f.name,l);g.$scope[l]=h}return h}}]}
function le(){this.$get=["$window",function(b){return F(b.document)}]}function me(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Gc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=M(Z(b.substr(0,e)));d=Z(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function Hc(b){var a=R(b)?b:r;return function(c){a||(a=Gc(b));return c?a[M(c)]||null:a}}function Ic(b,a,c){if(L(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}
function pe(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){y(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=cc(d)));return d}],transformRequest:[function(a){return R(a)&&"[object File]"!==ya.call(a)&&"[object Blob]"!==ya.call(a)?sa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ia(d),put:ia(d),patch:ia(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},
f=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function k(a){function b(a){var d=B({},a,{data:Ic(a.data,a.headers,c.transformResponse)});return 200<=a.status&&300>a.status?d:n.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=B({},a.headers),d,f,b=B({},b.common,b[M(a.method)]);a:for(d in b){a=M(d);for(f in c)if(M(f)===a)continue a;
c[d]=b[d]}(function(a){var b;q(a,function(c,d){L(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);B(c,a);c.headers=d;c.method=hb(c.method);var f=[function(a){d=a.headers;var c=Ic(a.data,Hc(d),a.transformRequest);z(c)&&q(d,function(a,b){"content-type"===M(b)&&delete d[b]});z(a.withCredentials)&&!z(e.withCredentials)&&(a.withCredentials=e.withCredentials);return t(a,c,d).then(b,b)},r],g=n.when(c);for(q(H,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||
a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var h=f.shift(),g=g.then(a,h)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function t(c,f,m){function p(a,b,c,e){D&&(200<=a&&300>a?D.put(Y,[a,b,Gc(c),e]):D.remove(Y));t(b,a,c,e);d.$$phase||d.$apply()}function t(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?q.resolve:q.reject)({data:a,status:b,
headers:Hc(d),config:c,statusText:e})}function H(){var a=Oa(k.pendingRequests,c);-1!==a&&k.pendingRequests.splice(a,1)}var q=n.defer(),P=q.promise,D,x,Y=s(c.url,c.params);k.pendingRequests.push(c);P.then(H,H);(c.cache||e.cache)&&(!1!==c.cache&&"GET"==c.method)&&(D=R(c.cache)?c.cache:R(e.cache)?e.cache:J);if(D)if(x=D.get(Y),E(x)){if(x.then)return x.then(H,H),x;K(x)?t(x[1],x[0],ia(x[2]),x[3]):t(x,200,{},"OK")}else D.put(Y,P);z(x)&&((x=Nb(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:r)&&(m[c.xsrfHeaderName||
e.xsrfHeaderName]=x),a(c.method,Y,f,p,m,c.timeout,c.withCredentials,c.responseType));return P}function s(a,b){if(!b)return a;var c=[];jd(b,function(a,b){null===a||z(a)||(K(a)||(a=[a]),q(a,function(a){R(a)&&(a=sa(a));c.push(Aa(b)+"="+Aa(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var J=c("$http"),H=[];q(f,function(a){H.unshift(y(a)?p.get(a):p.invoke(a))});k.pendingRequests=[];(function(a){q(arguments,function(a){k[a]=function(b,c){return k(B(c||{},{method:a,url:b}))}})})("get",
"delete","head","jsonp");(function(a){q(arguments,function(a){k[a]=function(b,c,d){return k(B(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=e;return k}]}function We(b){if(8>=U&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!N.XMLHttpRequest))return new N.ActiveXObject("Microsoft.XMLHTTP");if(N.XMLHttpRequest)return new N.XMLHttpRequest;throw u("$httpBackend")("noxhr");}function qe(){this.$get=["$browser","$window","$document",function(b,a,c){return Xe(b,We,b.defer,a.angular.callbacks,
c[0])}]}function Xe(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),g=null;f.type="text/javascript";f.src=a;f.async=!0;g=function(a){Ua(f,"load",g);Ua(f,"error",g);e.body.removeChild(f);f=null;var h=-1,s="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),s=a.type,h="error"===a.type?404:200);c&&c(h,s)};qb(f,"load",g);qb(f,"error",g);e.body.appendChild(f);return g}var g=-1;return function(e,m,l,n,p,k,t,s){function J(){G=g;A&&A();w&&w.abort()}function H(a,d,e,f,g){O&&c.cancel(O);
A=w=null;0===d&&(d=e?200:"file"==va(m).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(C)}var G;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==M(e)){var v="_"+(d.counter++).toString(36);d[v]=function(a){d[v].data=a;d[v].called=!0};var A=f(m.replace("JSON_CALLBACK","angular.callbacks."+v),v,function(a,b){H(n,a,d[v].data,"",b);d[v]=C})}else{var w=a(e);w.open(e,m,!0);q(p,function(a,b){E(a)&&w.setRequestHeader(b,a)});w.onreadystatechange=function(){if(w&&4==w.readyState){var a=
null,b=null,c="";G!==g&&(a=w.getAllResponseHeaders(),b="response"in w?w.response:w.responseText);G===g&&10>U||(c=w.statusText);H(n,G||w.status,b,a,c)}};t&&(w.withCredentials=!0);if(s)try{w.responseType=s}catch(V){if("json"!==s)throw V;}w.send(l||null)}if(0<k)var O=c(J,k);else k&&k.then&&k.then(J)}}function ne(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+
a}function g(f,g,t,s){s=!!s;for(var J,H,G=0,v=[],A=[],w=[],V=f.length,O=!1,S=!1,P=[],D={},x={};G<V;)if(-1!=(J=f.indexOf(b,G))&&-1!=(H=f.indexOf(a,J+h)))G!==J&&(S=!0),v.push(f.substring(G,J)),G=f.substring(J+h,H),A.push(G),w.push(c(G)),G=H+m,O=!0;else{G!==V&&(S=!0,v.push(f.substring(G)));break}q(v,function(c,d){v[d]=v[d].replace(l,b).replace(n,a)});v.length===A.length&&v.push("");if(t&&O&&(S||1<A.length))throw Jc("noconcat",f);if(!g||O){P.length=v.length+A.length;var Y=function(a){for(var b=0,c=A.length;b<
c;b++)P[2*b]=v[b],P[2*b+1]=a[b];P[2*c]=v[c];return P.join("")},ba=function(a){return a=t?e.getTrusted(t,a):e.valueOf(a)},u=function(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=sa(a)}return a};return B(function ma(a){var b=a&&a.$id||"notAScope",c=D[b],e=x[b],g=0,h=A.length,k=Array(h),m,l=e===r?!0:!1;c||(c=[],l=!0,a&&a.$on&&a.$on("$destroy",function(){D[b]=null;x[b]=null}));try{for(ma.$$unwatch=!0;g<h;g++){m=ba(w[g](a));if(s&&z(m)){ma.$$unwatch=r;
return}m=u(m);m!==c[g]&&(l=!0);k[g]=m;ma.$$unwatch=ma.$$unwatch&&w[g].$$unwatch}l&&(D[b]=k,x[b]=e=Y(k))}catch(t){a=Jc("interr",f,t.toString()),d(a)}return e},{exp:f,separators:v,expressions:A})}}var h=b.length,m=a.length,l=RegExp(b.replace(/./g,f),"g"),n=RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function oe(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,m,l){var n=a.setInterval,p=a.clearInterval,k=
0,t=E(l)&&!l,s=(t?d:c).defer(),J=s.promise;m=E(m)?m:0;J.then(null,null,e);J.$$intervalId=n(function(){s.notify(k++);0<m&&k>=m&&(s.resolve(k),p(J.$$intervalId),delete f[J.$$intervalId]);t||b.$apply()},h);f[J.$$intervalId]=s;return J}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function wd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),
AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Ob(b){b=b.split("/");for(var a=b.length;a--;)b[a]=fb(b[a]);return b.join("/")}function Kc(b,a,c){b=va(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=W(b.port)||Ye[b.protocol]||null}function Lc(b,a,c){var d="/"!==b.charAt(0);d&&
(b="/"+b);b=va(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=ec(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function oa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ya(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Pb(b){return b.substr(0,Ya(b).lastIndexOf("/")+1)}function Mc(b,a){this.$$html5=!0;a=a||"";var c=Pb(b);Kc(b,this,b);this.$$parse=function(a){var e=
oa(c,a);if(!y(e))throw Qb("ipthprfx",a,c);Lc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Cb(this.$$search),b=this.$$hash?"#"+fb(this.$$hash):"";this.$$url=Ob(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=oa(b,d))!==r)return d=e,(e=oa(a,e))!==r?c+(oa("/",e)||e):b+d;if((e=oa(c,d))!==r)return c+e;if(c==d+"/")return c}}function Rb(b,a){var c=Pb(b);Kc(b,this,b);this.$$parse=function(d){var e=oa(b,
d)||oa(c,d),e="#"==e.charAt(0)?oa(a,e):this.$$html5?e:"";if(!y(e))throw Qb("ihshprfx",d,a);Lc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?"#"+fb(this.$$hash):"";this.$$url=Ob(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Ya(b)==Ya(a))return a}}function Sb(b,a){this.$$html5=
!0;Rb.apply(this,arguments);var c=Pb(b);this.$$rewrite=function(d){var e;if(b==Ya(d))return d;if(e=oa(c,d))return b+a+e;if(c===d+"/")return c};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?"#"+fb(this.$$hash):"";this.$$url=Ob(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function rb(b){return function(){return this[b]}}function Nc(b,a){return function(c){if(z(c))return this[b];this[b]=a(c);this.$$compose();return this}}function re(){var b="",a=!1;this.hashPrefix=function(a){return E(a)?
(b=a,this):b};this.html5Mode=function(b){return E(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,m,l=d.baseHref(),n=d.url(),p;a?(p=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(l||"/"),m=e.history?Mc:Sb):(p=Ya(n),m=Rb);h=new m(p,"#"+b);h.$$parse(h.$$rewrite(n));f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var e=F(a.target);"a"!==la(e[0]);)if(e[0]===f[0]||
!(e=e.parent())[0])return;var g=e.prop("href");R(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=va(g.animVal).href);if(m===Sb){var k=e.attr("href")||e.attr("xlink:href");if(0>k.indexOf("://"))if(g="#"+b,"/"==k[0])g=p+g+k;else if("#"==k[0])g=p+g+(h.path()||"/")+k;else{for(var l=h.path().split("/"),k=k.split("/"),n=0;n<k.length;n++)"."!=k[n]&&(".."==k[n]?l.pop():k[n].length&&l.push(k[n]));g=p+g+l.join("/")}}l=h.$$rewrite(g);g&&(!e.attr("target")&&l&&!a.isDefaultPrevented())&&(a.preventDefault(),
l!=d.url()&&(h.$$parse(l),c.$apply(),N.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=n&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var k=0;c.$watch(function(){var a=d.url(),b=h.$$replace;k&&a==h.absUrl()||(k++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):
(d.url(h.absUrl(),b),g(a))}));h.$$replace=!1;return k});return h}]}function se(){var b=!0,a=this;this.debugEnabled=function(a){return E(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||C;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];q(arguments,
function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function pa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw ha("isecfld",a);return b}function La(b,a){if(b){if(b.constructor===b)throw ha("isecfn",a);if(b.window===b)throw ha("isecwindow",a);if(b.children&&
(b.nodeName||b.prop&&b.attr&&b.find))throw ha("isecdom",a);if(b===Object)throw ha("isecobj",a);}return b}function sb(b,a,c,d){a=a.split(".");for(var e,f=0;1<a.length;f++){e=pa(a.shift(),d);var g=b[e];g||(g={},b[e]=g);b=g}e=pa(a.shift(),d);La(b,d);La(b[e],d);return b[e]=c}function Oc(b,a,c,d,e,f){pa(b,f);pa(a,f);pa(c,f);pa(d,f);pa(e,f);return function(f,h){var m=h&&h.hasOwnProperty(b)?h:f;if(null==m)return m;m=m[b];if(!a)return m;if(null==m)return r;m=m[a];if(!c)return m;if(null==m)return r;m=m[c];
if(!d)return m;if(null==m)return r;m=m[d];return e?null==m?r:m=m[e]:m}}function Pc(b,a,c){if(Tb.hasOwnProperty(b))return Tb[b];var d=b.split("."),e=d.length;if(a.csp)a=6>e?Oc(d[0],d[1],d[2],d[3],d[4],c):function(a,b){var f=0,l;do l=Oc(d[f++],d[f++],d[f++],d[f++],d[f++],c)(a,b),b=r,a=l;while(f<e);return l};else{var f="var p;\n";q(d,function(a,b){pa(a,c);f+="if(s == null) return undefined;\ns="+(b?"s":'((k&&k.hasOwnProperty("'+a+'"))?k:s)')+'["'+a+'"];\n'});f+="return s;";a=new Function("s","k",f);
a.toString=ca(f)}"hasOwnProperty"!==b&&(Tb[b]=a);return a}function te(){var b={},a={csp:!1};this.$get=["$filter","$sniffer",function(c,d){a.csp=d.csp;return function(d){function f(a){function b(e,f){c||(d=a.constant&&d?d:a(e,f),b.$$unwatch=E(d),b.$$unwatch&&(e&&e.$$postDigestQueue)&&e.$$postDigestQueue.push(function(){!(c=E(d))||null!==d&&d.$$unwrapTrustedValue||(d=za(d,null))}));return d}var c=!1,d;b.literal=a.literal;b.constant=a.constant;b.assign=a.assign;return b}var g,h;switch(typeof d){case "string":d=
Z(d);":"===d.charAt(0)&&":"===d.charAt(1)&&(h=!0,d=d.substring(2));if(b.hasOwnProperty(d))return h?f(b[d]):b[d];g=new Ub(a);g=(new Za(g,c,a)).parse(d);"hasOwnProperty"!==d&&(b[d]=g);return h||g.constant?f(g):g;case "function":return d;default:return C}}}]}function ve(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Qc(function(a){b.$evalAsync(a)},a)}]}function we(){this.$get=["$browser","$exceptionHandler",function(b,a){return Qc(function(a){b.defer(a)},a)}]}function Qc(b,a){function c(a){return a}
function d(a){return g(a)}var e=function(){var g=[],l,n;return n={resolve:function(a){if(g){var c=g;g=r;l=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],l.then(a[0],a[1],a[2])})}},reject:function(a){n.resolve(h(a))},notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,h){var n=e(),J=function(d){try{n.resolve((L(b)?b:c)(d))}catch(e){n.reject(e),a(e)}},H=function(b){try{n.resolve((L(f)?f:d)(b))}catch(c){n.reject(c),
a(c)}},G=function(b){try{n.notify((L(h)?h:c)(b))}catch(d){a(d)}};g?g.push([J,H,G]):l.then(J,H,G);return n.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,!1)}return g&&L(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&
L(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(f,g){var h=e();b(function(){try{h.resolve((L(g)?g:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:g,when:function(h,l,n,p){var k=e(),t,s=function(b){try{return(L(l)?l:c)(b)}catch(d){return a(d),g(d)}},J=function(b){try{return(L(n)?n:d)(b)}catch(c){return a(c),g(c)}},H=function(b){try{return(L(p)?
p:c)(b)}catch(d){a(d)}};b(function(){f(h).then(function(a){t||(t=!0,k.resolve(f(a).then(s,J,H)))},function(a){t||(t=!0,k.resolve(J(a)))},function(a){t||k.notify(H(a))})});return k.promise},all:function(a){var b=e(),c=0,d=K(a)?[]:{};q(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function De(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||
b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function ue(){var b=10,a=u("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,
e,f,g){function h(){this.$id=++db;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(k.$$phase)throw a("inprog",k.$$phase);k.$$phase=b}function l(a,b){var c=f(a);Ra(c,b);return c}function n(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&
delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++db;this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);
a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=l(a,"watch"),f=this.$$watchers,g={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;if(!L(b)){var h=l(b||C,"listener");g.fn=function(a,b,c){h(c)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Fa(f,g);c=null}},$watchGroup:function(a,b){function c(){return h}var d=Array(a.length),e=Array(a.length),g=
[],h=0,k=this,l=Array(a.length),m=a.length;q(a,function(a,b){var c=f(a);g.push(k.$watch(c,function(a,f){e[b]=a;d[b]=f;h++;l[b]&&!c.$$unwatch&&m++;!l[b]&&c.$$unwatch&&m--;l[b]=c.$$unwatch}))},this);g.push(k.$watch(c,function(){b(e,d,k);c.$$unwatch=0===m?!0:!1}));return function(){q(g,function(a){a()})}},$watchCollection:function(a,b){function c(){e=m(d);var a,b;if(R(e))if(cb(e))for(g!==n&&(g=n,x=g.length=0,l++),a=e.length,x!==a&&(l++,g.length=x=a),b=0;b<a;b++)g[b]!==g[b]&&e[b]!==e[b]||g[b]===e[b]||
(l++,g[b]=e[b]);else{g!==p&&(g=p={},x=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g.hasOwnProperty(b)?g[b]!==e[b]&&(l++,g[b]=e[b]):(x++,g[b]=e[b],l++));if(x>a)for(b in l++,g)g.hasOwnProperty(b)&&!e.hasOwnProperty(b)&&(x--,delete g[b])}else g!==e&&(g=e,l++);c.$$unwatch=m.$$unwatch;return l}var d=this,e,g,h,k=1<b.length,l=0,m=f(a),n=[],p={},q=!0,x=0;return this.$watch(c,function(){q?(q=!1,b(e,e,d)):b(e,h,d);if(k)if(R(e))if(cb(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h=
{},e)Bb.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var d,f,g,h,l=this.$$asyncQueue,n=this.$$postDigestQueue,A,q,r=b,O,S=[],P=[],D,x,u;m("$digest");c=null;do{q=!1;for(O=this;l.length;){try{u=l.shift(),u.scope.$eval(u.expression)}catch(F){k.$$phase=null,e(F)}c=null}a:do{if(h=O.$$watchers)for(A=h.length;A--;)try{if(d=h[A])if((f=d.get(O))!==(g=d.last)&&!(d.eq?ra(f,g):"number"===typeof f&&"number"===typeof g&&isNaN(f)&&isNaN(g)))q=!0,c=d,d.last=d.eq?za(f,null):f,d.fn(f,g===p?f:g,O),5>r&&(D=
4-r,S[D]||(S[D]=[]),x=L(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,x+="; newVal: "+sa(f)+"; oldVal: "+sa(g),S[D].push(x)),d.get.$$unwatch&&P.push({watch:d,array:h});else if(d===c){q=!1;break a}}catch(E){k.$$phase=null,e(E)}if(!(A=O.$$childHead||O!==this&&O.$$nextSibling))for(;O!==this&&!(A=O.$$nextSibling);)O=O.$parent}while(O=A);if((q||l.length)&&!r--)throw k.$$phase=null,a("infdig",b,sa(S));}while(q||l.length);for(k.$$phase=null;n.length;)try{n.shift()()}catch(B){e(B)}for(A=P.length-1;0<=
A;--A)d=P[A],d.watch.get.$$unwatch&&Fa(d.array,d.watch)},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==k&&(q(this.$$listenerCount,Ab(null,n,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=
this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=C,this.$on=this.$watch=this.$watchGroup=function(){return C})}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){k.$$phase||k.$$asyncQueue.length||g.defer(function(){k.$$asyncQueue.length&&k.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},
$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{k.$$phase=null;try{k.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[Oa(c,b)]=null;n(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=
!0},defaultPrevented:!1},k=[h].concat(ja.call(arguments,1)),l,m;do{d=f.$$listeners[a]||c;h.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;f=f.$parent}while(f);h.currentScope=null;return h},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(ja.call(arguments,1)),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||
[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}f.currentScope=null;return f}};var k=new h;return k}]}function xd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file|blob):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return E(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return E(b)?
(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!U||8<=U)if(f=va(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Ze(b){if("self"===b)return b;if(y(b)){if(-1<b.indexOf("***"))throw wa("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(eb(b))return RegExp("^"+b.source+"$");throw wa("imatcher");}function Rc(b){var a=[];E(b)&&q(b,function(b){a.push(Ze(b))});
return a}function ye(){this.SCE_CONTEXTS=ea;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Rc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Rc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}
var e=function(a){throw wa("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[ea.HTML]=d(f);g[ea.CSS]=d(f);g[ea.URL]=d(f);g[ea.JS]=d(f);g[ea.RESOURCE_URL]=d(g[ea.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw wa("icontext",a,b);if(null===b||b===r||""===b)return b;if("string"!==typeof b)throw wa("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===r||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();
if(c===ea.RESOURCE_URL){var f=va(d.toString()),n,p,k=!1;n=0;for(p=b.length;n<p;n++)if("self"===b[n]?Nb(f):b[n].exec(f.href)){k=!0;break}if(k)for(n=0,p=a.length;n<p;n++)if("self"===a[n]?Nb(f):a[n].exec(f.href)){k=!1;break}if(k)return d;throw wa("insecurl",d.toString());}if(c===ea.HTML)return e(d);throw wa("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function xe(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer",
"$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw wa("iequirks");var e=ia(ea);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Da);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function k(a,c){var f=e.getTrusted(b,d(a,c));k.$$unwatch=d.$$unwatch;return f}};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;q(ea,function(a,b){var c=M(b);e[Ta("parse_as_"+c)]=
function(b){return f(a,b)};e[Ta("get_trusted_"+c)]=function(b){return g(a,b)};e[Ta("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function ze(){this.$get=["$window","$document",function(b,a){var c={},d=W((/android (\d+)/.exec(M((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g=f.documentMode,h,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,l=f.body&&f.body.style,n=!1,p=!1;if(l){for(var k in l)if(n=m.exec(k)){h=n[0];h=h.substr(0,1).toUpperCase()+h.substr(1);
break}h||(h="WebkitOpacity"in l&&"webkit");n=!!("transition"in l||h+"Transition"in l);p=!!("animation"in l||h+"Animation"in l);!d||n&&p||(n=y(f.body.style.webkitTransition),p=y(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<g),hasEvent:function(a){if("input"==a&&9==U)return!1;if(z(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:bc(),vendorPrefix:h,transitions:n,animations:p,android:d,msie:U,msieDocumentMode:g}}]}
function Be(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,m,l){var n=E(l)&&!l,p=(n?d:c).defer(),k=p.promise;m=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[k.$$timeoutId]}n||b.$apply()},m);k.$$timeoutId=m;g[m]=p;return k}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function va(b,a){var c=b;
U&&($.setAttribute("href",c),c=$.href);$.setAttribute("href",c);return{href:$.href,protocol:$.protocol?$.protocol.replace(/:$/,""):"",host:$.host,search:$.search?$.search.replace(/^\?/,""):"",hash:$.hash?$.hash.replace(/^#/,""):"",hostname:$.hostname,port:$.port,pathname:"/"===$.pathname.charAt(0)?$.pathname:"/"+$.pathname}}function Nb(b){b=y(b)?va(b):b;return b.protocol===Sc.protocol&&b.host===Sc.host}function Ce(){this.$get=ca(N)}function pc(b){function a(d,e){if(R(d)){var f={};q(d,function(b,c){f[c]=
a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Tc);a("date",Uc);a("filter",$e);a("json",af);a("limitTo",bf);a("lowercase",cf);a("number",Vc);a("orderBy",Wc);a("uppercase",df)}function $e(){return function(b,a,c){if(!K(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Qa.equals(a,
b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Bb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;
case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=b[g];e.check(h)&&d.push(h)}return d}}function Tc(b){var a=b.NUMBER_FORMATS;return function(b,d){z(d)&&(d=a.CURRENCY_SYM);return Xc(b,
a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Vc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Xc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Xc(b,a,c,d,e){if(null==b||!isFinite(b)||R(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",m=[],l=!1;if(-1!==g.indexOf("e")){var n=g.match(/([\d\.]+)e(-?)(\d+)/);n&&"-"==n[2]&&n[3]>e+1?(g="0",b=0):(h=g,l=!0)}if(l)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{g=(g.split(Yc)[1]||"").length;z(e)&&(e=Math.min(Math.max(a.minFrac,
g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);b=(""+b).split(Yc);g=b[0];b=b[1]||"";var n=0,p=a.lgSize,k=a.gSize;if(g.length>=p+k)for(n=g.length-p,l=0;l<n;l++)0===(n-l)%k&&0!==l&&(h+=c),h+=g.charAt(l);for(l=n;l<g.length;l++)0===(g.length-l)%p&&0!==l&&(h+=c),h+=g.charAt(l);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}m.push(f?a.negPre:a.posPre);m.push(h);m.push(f?a.negSuf:a.posSuf);return m.join("")}function tb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<
a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function aa(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return tb(e,a,d)}}function ub(b,a){return function(c,d){var e=c["get"+b](),f=hb(a?"SHORT"+b:b);return d[f][e]}}function Zc(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function $c(b){return function(a){var c=Zc(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);
return tb(a,b)}}function Uc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=W(b[9]+b[10]),g=W(b[9]+b[11]));h.call(a,W(b[1]),W(b[2])-1,W(b[3]));f=W(b[4]||0)-f;g=W(b[5]||0)-g;h=W(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],h,
m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;y(c)&&(c=ef.test(c)?W(c):a(c));Ea(c)&&(c=new Date(c));if(!qa(c))return c;for(;e;)(m=ff.exec(e))?(g=g.concat(ja.call(m,1)),e=g.pop()):(g.push(e),e=null);q(g,function(a){h=gf[a];f+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function af(){return function(b){return sa(b,!0)}}function bf(){return function(b,a){if(!K(b)&&!y(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):W(a);if(y(b))return a?0<=a?b.slice(0,a):
b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Wc(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?("string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!K(a)||!c)return a;c=K(c)?c:[c];c=nd(c,function(a){var c=!1,d=a||Da;if(y(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c=
"-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var g=d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],h=0;h<a.length;h++)g.push(a[h]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function xa(b){L(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ca(b)}function ad(b,a,c,d){function e(a,c){c=c?"-"+gb(c,"-"):"";d.removeClass(b,(a?vb:wb)+c);d.addClass(b,(a?wb:vb)+c)}
var f=this,g=b.parent().controller("form")||xb,h=0,m=f.$error={},l=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(Ma);e(!0);f.$rollbackViewValue=function(){q(l,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){q(l,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ba(a.$name,"input");l.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(m,function(b,c){f.$setValidity(c,
!0,a)});Fa(l,a)};f.$setValidity=function(a,b,c){var d=m[a];if(b)d&&(Fa(d,c),d.length||(h--,h||(e(b),f.$valid=!0,f.$invalid=!1),m[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{h||e(b);if(d){if(-1!=Oa(d,c))return}else m[a]=d=[],h++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Ma);d.addClass(b,yb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,yb);d.addClass(b,Ma);f.$dirty=!1;f.$pristine=!0;q(l,function(a){a.$setPristine()})}}
function Vb(b,a,c,d){b.$setValidity(a,c);return c?d:r}function bd(b,a){var c,d;if(a)for(c=0;c<a.length;++c)if(d=a[c],b[d])return!0;return!1}function hf(b,a,c,d,e){R(e)&&(b.$$hasNativeValidators=!0,b.$parsers.push(function(f){if(b.$error[a]||bd(e,d)||!bd(e,c))return f;b.$setValidity(a,!1)}))}function $a(b,a,c,d,e,f){var g=a.prop(jf),h=a[0].placeholder,m={};d.$$validityState=g;if(!e.android){var l=!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;n()})}var n=function(e){if(!l){var f=
a.val(),k=e&&e.type;if(U&&"input"===(e||m).type&&a[0].placeholder!==h)h=a[0].placeholder;else{c.ngTrim&&"false"===c.ngTrim||(f=Z(f));var p=g&&d.$$hasNativeValidators;if(d.$viewValue!==f||""===f&&p)b.$$phase?d.$setViewValue(f,k,p):b.$apply(function(){d.$setViewValue(f,k,p)})}}};if(e.hasEvent("input"))a.on("input",n);else{var p,k=function(a){p||(p=f.defer(function(){n(a);p=null}))};a.on("keydown",function(a){var b=a.keyCode;91===b||(15<b&&19>b||37<=b&&40>=b)||k(a)});if(e.hasEvent("paste"))a.on("paste cut",
k)}a.on("change",n);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function zb(b,a){return function(c){var d;return qa(c)?c:y(c)&&(b.lastIndex=0,c=b.exec(c))?(c.shift(),d={yyyy:0,MM:1,dd:1,HH:0,mm:0},q(c,function(b,c){c<a.length&&(d[a[c]]=+b)}),new Date(d.yyyy,d.MM-1,d.dd,d.HH,d.mm)):NaN}}function ab(b,a,c,d){return function(e,f,g,h,m,l,n){$a(e,f,g,h,m,l);h.$parsers.push(function(d){if(h.$isEmpty(d))return h.$setValidity(b,!0),null;if(a.test(d))return h.$setValidity(b,!0),c(d);
h.$setValidity(b,!1);return r});h.$formatters.push(function(a){return qa(a)?n("date")(a,d):""});g.min&&(e=function(a){var b=h.$isEmpty(a)||c(a)>=c(g.min);h.$setValidity("min",b);return b?a:r},h.$parsers.push(e),h.$formatters.push(e));g.max&&(e=function(a){var b=h.$isEmpty(a)||c(a)<=c(g.max);h.$setValidity("max",b);return b?a:r},h.$parsers.push(e),h.$formatters.push(e))}}function cd(b,a,c,d,e){if(E(d)){b=b(d);if(!b.constant)throw(new u("ngModel"))("constexpr","Expected constant expression for `{0}`, but saw `{1}`.",
c,d);return b(a)}return e}function Wb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){if(!K(a)){if(y(a))return a.split(" ");if(R(a)){var b=[];q(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function m(a,b){var c=g.data("$classCounts")||{},d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===
+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!n){var l=m(k,1);h.$addClass(l)}else if(!ra(b,n)){var q=e(n),l=d(k,q),k=d(q,k),k=m(k,-1),l=m(l,1);0===l.length?c.removeClass(g,k):0===k.length?c.addClass(g,l):c.setClass(g,l,k)}}n=ia(b)}var n;f.$watch(h[b],l,!0);h.$observe("class",function(a){l(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[b]));g===a?(g=m(l,1),h.$addClass(g)):
(g=m(l,-1),h.$removeClass(g))}})}}}]}var kf=/^\/(.+)\/([a-z]*)$/,jf="validity",M=function(b){return y(b)?b.toLowerCase():b},Bb=Object.prototype.hasOwnProperty,hb=function(b){return y(b)?b.toUpperCase():b},U,F,ta,ja=[].slice,tc=[].push,ya=Object.prototype.toString,Pa=u("ng"),Qa=N.angular||(N.angular={}),Sa,la,db=0;U=W((/msie (\d+)/.exec(M(navigator.userAgent))||[])[1]);isNaN(U)&&(U=W((/trident\/.*; rv:(\d+)/.exec(M(navigator.userAgent))||[])[1]));C.$inject=[];Da.$inject=[];var K=function(){return L(Array.isArray)?
Array.isArray:function(b){return"[object Array]"===ya.call(b)}}(),Z=function(){return String.prototype.trim?function(b){return y(b)?b.trim():b}:function(b){return y(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();la=9>U?function(b){b=b.nodeName?b:b[0];return M(b.scopeName&&"HTML"!=b.scopeName?b.scopeName+":"+b.nodeName:b.nodeName)}:function(b){return M(b.nodeName?b.nodeName:b[0].nodeName)};var fc=["ng-","data-ng-","ng:","x-ng-"],rd=/[A-Z]/g,vd={full:"1.3.0-build.2918+sha.a2c7cf9",major:1,minor:3,
dot:0,codeName:"snapshot"};Q.expando="ng339";var Va=Q.cache={},Le=1,qb=N.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Ua=N.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};Q._data=function(b){return this.cache[b[this.expando]]||{}};var Fe=/([\:\-\_]+(.))/g,Ge=/^moz([A-Z])/,Hb=u("jqLite"),Ke=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Gb=/<|&#?\w+;/,Ie=/<([\w:]+)/,Je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
da={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};da.optgroup=da.option;da.tbody=da.tfoot=da.colgroup=da.caption=da.thead;da.th=da.td;var Ga=Q.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===T.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),Q(N).on("load",a))},
toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?F(this[b]):F(this[this.length+b])},length:0,push:tc,sort:[].sort,splice:[].splice},nb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){nb[M(b)]=b});var xc={};q("input select option textarea button form details".split(" "),function(b){xc[b]=!0});var yc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngPattern:"pattern"};q({data:sc,inheritedData:mb,
scope:function(b){return F(b).data("$scope")||mb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return F(b).data("$isolateScope")||F(b).data("$isolateScopeNoTemplate")},controller:uc,injector:function(b){return mb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Kb,css:function(b,a,c){a=Ta(a);if(E(c))b.style[a]=c;else{var d;8>=U&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=U&&(d=""===d?r:d);return d}},attr:function(b,a,
c){var d=M(a);if(nb[d])if(E(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||C).specified?d:r;else if(E(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?r:b},prop:function(b,a,c){if(E(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(z(b)){var d=a.nodeType;return 1===d||3===d?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(z(a)){if(b.multiple&&"select"===la(b)){var c=
[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(z(a))return b.innerHTML;jb(b,!0);b.innerHTML=a},empty:vc},function(b,a){Q.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==vc&&(2==b.length&&b!==Kb&&b!==uc?a:d)===r){if(R(a)){for(e=0;e<g;e++)if(b===sc)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===r?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=
0;e<g;e++)b(this[e],a,d);return this}});q({removeData:Jb,on:function a(c,d,e,f){if(E(f))throw Hb("onargs");if(!c.nodeType||1===c.nodeType||9===c.nodeType){var g=ka(c,"events"),h=ka(c,"handle");g||ka(c,"events",g={});h||ka(c,"handle",h=Ne(c,g));q(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var n=T.body.contains||T.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?
d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||n(this,c))||h(a,d)})}else qb(c,d,h),g[d]=[];f=g[d]}f.push(e)})}},off:rc,one:function(a,c,d){a=F(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;jb(a);q(new Q(c),function(c){d?e.insertBefore(c,
d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){q(new Q(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new Q(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=F(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){jb(a);
var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new Q(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:lb,removeClass:kb,toggleClass:function(a,c,d){c&&q(c.split(" "),function(c){var f=d;z(f)&&(f=!Kb(a,c));(f?lb:kb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?
a.getElementsByTagName(c):[]},clone:Ib,triggerHandler:function(a,c,d){c=(ka(a,"events")||{})[c];d=d||[];var e=[{preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopPropagation:C}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){Q.prototype[c]=function(c,e,f){for(var g,h=0;h<this.length;h++)z(g)?(g=a(this[h],c,e,f),E(g)&&(g=F(g))):qc(g,a(this[h],c,e,f));return E(g)?g:this};Q.prototype.bind=Q.prototype.on;Q.prototype.unbind=
Q.prototype.off});Wa.prototype={put:function(a,c){this[Ha(a,this.nextUid)]=c},get:function(a){return this[Ha(a,this.nextUid)]},remove:function(a){var c=this[a=Ha(a,this.nextUid)];delete this[a];return c}};var Ac=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Pe=/,/,Qe=/^\s*(_?)(\S+?)\1\s*$/,zc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ia=u("$injector");Db.$$annotate=Lb;var lf=u("$animate"),he=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw lf("notcsel",
c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,g,h){g?g.after(a):c.prepend(a);h&&d(h);return C},leave:function(a,c){a.remove();c&&d(c);return C},move:function(a,c,d,h){return this.enter(a,c,d,h)},addClass:function(a,c,g){c=y(c)?c:K(c)?c.join(" "):"";q(a,function(a){lb(a,c)});g&&
d(g);return C},removeClass:function(a,c,g){c=y(c)?c:K(c)?c.join(" "):"";q(a,function(a){kb(a,c)});g&&d(g);return C},setClass:function(a,c,g,h){q(a,function(a){lb(a,c);kb(a,g)});h&&d(h);return C},enabled:C}}]}],ga=u("$compile");ic.$inject=["$provide","$$sanitizeUriProvider"];var Ve=/^(x[\:\-_]|data[\:\-_])/i,Jc=u("$interpolate"),mf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Ye={http:80,https:443,ftp:21},Qb=u("$location");Sb.prototype=Rb.prototype=Mc.prototype={$$html5:!1,$$replace:!1,absUrl:rb("$$absUrl"),
url:function(a,c){if(z(a))return this.$$url;var d=mf.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:rb("$$protocol"),host:rb("$$host"),port:rb("$$port"),path:Nc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(y(a))this.$$search=ec(a);else if(R(a))q(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Qb("isrcharg");
break;default:z(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Nc("$$hash",Da),replace:function(){this.$$replace=!0;return this}};var ha=u("$parse"),nf=Function.prototype.call,of=Function.prototype.apply,pf=Function.prototype.bind,bb={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:C,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return E(d)?E(e)?d+e:d:E(e)?e:r},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(E(d)?
d:0)-(E(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":C,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,
c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},qf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Ub=function(a){this.options=a};Ub.prototype={constructor:Ub,lex:function(a){this.text=a;this.index=0;this.ch=r;for(this.tokens=[];this.index<this.text.length;)if(this.ch=
this.text.charAt(this.index),this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch))this.index++;else{a=this.ch+this.peek();var c=a+this.peek(2),d=bb[this.ch],e=bb[a],f=bb[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,
text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=
a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=E(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ha("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=M(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&
e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(f=
this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;else break}d={index:d,text:c};if(bb.hasOwnProperty(c))d.fn=bb[c],d.constant=!0;else{var m=Pc(c,this.options,this.text);d.fn=B(function(a,c){return m(a,c)},{assign:function(d,e){return sb(d,c,e,a.text)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;
for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(g=this.text.substring(this.index+1,this.index+5),g.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+g+"]"),this.index+=4,d+=String.fromCharCode(parseInt(g,16))):d=(f=qf[g])?d+f:d+g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",
c)}};var Za=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};Za.ZERO=B(function(){return 0},{constant:!0});Za.prototype={constructor:Za,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=
this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.constant&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw ha("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw ha("ueoe",
this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return B(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return B(function(e,f){return a(e,
f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return B(function(e,f){return c(e,f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,
c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];this.expect(":");)d.push(this.expression());return ca(function(a,f,g){g=[g];for(var h=0;h<d.length;h++)g.push(d[h](a,f));return c.apply(a,g)})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),
function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=
this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},
unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Za.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Pc(d,this.options,this.text);return B(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){return sb(a(e,h),d,g,c.text)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return B(function(e,f){var g=a(e,f),h=d(e,f);
pa(h,c.text);return g?La(g[h],c.text):r},{assign:function(e,f,g){var h=d(e,g);return La(a(e,g),c.text)[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var h=[],m=c?c(f,g):f,l=0;l<d.length;l++)h.push(d[l](f,g));l=a(f,g,m)||C;La(m,e.text);var n=e.text;if(l){if(l.constructor===l)throw ha("isecfn",n);if(l===nf||l===of||l===pf)throw ha("isecff",n);}h=l.apply?l.apply(m,
h):l(h[0],h[1],h[2],h[3],h[4]);return La(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return B(function(c,d){for(var g=[],h=0;h<a.length;h++)g.push(a[h](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");
var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return B(function(c,d){for(var e={},m=0;m<a.length;m++){var l=a[m];e[l.key]=l.value(c,d)}return e},{literal:!0,constant:c})}};var Tb={},wa=u("$sce"),ea={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},$=T.createElement("a"),Sc=va(N.location.href,!0);pc.$inject=["$provide"];Tc.$inject=["$locale"];Vc.$inject=["$locale"];var Yc=".",gf={yyyy:aa("FullYear",4),yy:aa("FullYear",
2,0,!0),y:aa("FullYear",1),MMMM:ub("Month"),MMM:ub("Month",!0),MM:aa("Month",2,1),M:aa("Month",1,1),dd:aa("Date",2),d:aa("Date",1),HH:aa("Hours",2),H:aa("Hours",1),hh:aa("Hours",2,-12),h:aa("Hours",1,-12),mm:aa("Minutes",2),m:aa("Minutes",1),ss:aa("Seconds",2),s:aa("Seconds",1),sss:aa("Milliseconds",3),EEEE:ub("Day"),EEE:ub("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(tb(Math[0<a?"floor":"ceil"](a/60),2)+tb(Math.abs(a%
60),2))},ww:$c(2),w:$c(1)},ff=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,ef=/^\-?\d+$/;Uc.$inject=["$locale"];var cf=ca(M),df=ca(hb);Wc.$inject=["$parse"];var yd=ca({restrict:"E",compile:function(a,c){8>=U&&(c.href||c.name||c.$set("href",""),a.append(T.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===ya.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),
ib={};q(nb,function(a,c){if("multiple"!=a){var d=na("ng-"+c);ib[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});q(yc,function(a,c){ib[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(kf))){f.$set("ngPattern",RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});q(["src","srcset","href"],function(a){var c=na("ng-"+a);ib[c]=function(){return{priority:99,
link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===ya.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(a){a&&(f.$set(h,a),U&&g&&e.prop(g,f[h]))})}}}});var xb={$addControl:C,$removeControl:C,$setValidity:C,$setDirty:C,$setPristine:C};ad.$inject=["$element","$attrs","$scope","$animate"];var dd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:ad,compile:function(){return{pre:function(a,e,f,
g){if(!f.action){var h=function(c){a.$apply(function(){g.$commitViewValue()});c.preventDefault?c.preventDefault():c.returnValue=!1};qb(e[0],"submit",h);e.on("$destroy",function(){c(function(){Ua(e[0],"submit",h)},0,!1)})}var m=e.parent().controller("form"),l=f.name||f.ngForm;l&&sb(a,l,g,l);if(m)e.on("$destroy",function(){m.$removeControl(g);l&&sb(a,l,r,l);B(g,xb)})}}}}}]},zd=dd(),Md=dd(!0),rf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,sf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
tf=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,ed=/^(\d{4})-(\d{2})-(\d{2})$/,fd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)$/,Xb=/^(\d{4})-W(\d\d)$/,gd=/^(\d{4})-(\d\d)$/,hd=/^(\d\d):(\d\d)$/,uf=/(\s+|^)default(\s+|$)/,id={text:$a,date:ab("date",ed,zb(ed,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ab("datetimelocal",fd,zb(fd,["yyyy","MM","dd","HH","mm"]),"yyyy-MM-ddTHH:mm"),time:ab("time",hd,zb(hd,["HH","mm"]),"HH:mm"),week:ab("week",Xb,function(a){if(qa(a))return a;if(y(a)){Xb.lastIndex=0;var c=Xb.exec(a);
if(c){a=+c[1];var d=+c[2],c=Zc(a),d=7*(d-1);return new Date(a,0,c.getDate()+d)}}return NaN},"yyyy-Www"),month:ab("month",gd,zb(gd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){$a(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||tf.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return r});hf(e,"number",vf,null,e.$$validityState);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=
parseFloat(d.min);return Vb(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return Vb(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return Vb(e,"number",e.$isEmpty(a)||Ea(a),a)})},url:function(a,c,d,e,f,g){$a(a,c,d,e,f,g);e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||rf.test(d)}},email:function(a,c,d,e,f,g){$a(a,c,d,e,f,g);e.$validators.email=function(a,
c){var d=a||c;return e.$isEmpty(d)||sf.test(d)}},radio:function(a,c,d,e){z(d.name)&&c.attr("name",++db);c.on("click",function(f){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value,f&&f.type)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,m){var l=cd(m,a,"ngTrueValue",d.ngTrueValue,!0),n=cd(m,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(d){a.$apply(function(){e.$setViewValue(c[0].checked,d&&d.type)})});
e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==l};e.$formatters.push(function(a){return ra(a,l)});e.$parsers.push(function(a){return a?l:n})},hidden:C,button:C,submit:C,reset:C,file:C},vf=["badInput"],jc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:function(f,g,h,m){m[0]&&(id[M(h.type)]||id.text)(f,g,h,m[0],c,a,d,e)}}}],wb="ng-valid",vb="ng-invalid",Ma="ng-pristine",yb="ng-dirty",wf=["$scope","$exceptionHandler",
"$attrs","$element","$parse","$animate","$timeout",function(a,c,d,e,f,g,h){function m(a,c){c=c?"-"+gb(c,"-"):"";g.removeClass(e,(a?vb:wb)+c);g.addClass(e,(a?wb:vb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$validators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var l=f(d.ngModel),n=l.assign,p=null,k=this;if(!n)throw u("ngModel")("nonassign",d.ngModel,
fa(e));this.$render=C;this.$isEmpty=function(a){return z(a)||""===a||null===a||a!==a};var t=e.inheritedData("$formController")||xb,s=0,J=this.$error={};e.addClass(Ma).addClass("ng-untouched");m(!0);this.$setValidity=function(a,c){J[a]!==!c&&(c?(J[a]&&s--,s||(m(!0),k.$valid=!0,k.$invalid=!1)):(m(!1),k.$invalid=!0,k.$valid=!1,s++),J[a]=!c,m(c,a),t.$setValidity(a,c,k))};this.$setPristine=function(){k.$dirty=!1;k.$pristine=!0;g.removeClass(e,yb);g.addClass(e,Ma)};this.$setUntouched=function(){k.$touched=
!1;k.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){k.$touched=!0;k.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(p);k.$viewValue=k.$$lastCommittedViewValue;k.$render()};this.$validate=function(){if(k.$modelValue===k.$modelValue){var a=k.$modelValue;k.$$runValidators(k.$$invalidModelValue||k.$modelValue,k.$viewValue);a!==k.$modelValue&&k.$$writeModelToScope()}};this.$$runValidators=function(a,c){q(k.$validators,
function(d,e){k.$setValidity(e,d(a,c))});k.$modelValue=k.$valid?a:r;k.$$invalidModelValue=k.$valid?r:a};this.$commitViewValue=function(a){var c=k.$viewValue;h.cancel(p);if(a||k.$$lastCommittedViewValue!==c){k.$$lastCommittedViewValue=c;k.$pristine&&(k.$dirty=!0,k.$pristine=!1,g.removeClass(e,Ma),g.addClass(e,yb),t.$setDirty());var d=c;q(k.$parsers,function(a){d=a(d)});k.$modelValue===d||!z(k.$$invalidModelValue)&&k.$$invalidModelValue==d||(k.$$runValidators(d,c),k.$$writeModelToScope())}};this.$$writeModelToScope=
function(){var d;k.$options&&k.$options.getterSetter&&L(d=l(a))?d(k.$modelValue):n(a,k.$modelValue);q(k.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c,d){k.$viewValue=a;k.$options&&!k.$options.updateOnDefault||k.$$debounceViewValueCommit(c,d)};this.$$debounceViewValueCommit=function(a,c){var d=0,e=k.$options;e&&E(e.debounce)&&(e=e.debounce,Ea(e)?d=e:Ea(e[a])?d=e[a]:Ea(e["default"])&&(d=e["default"]));h.cancel(p);d?p=h(function(){k.$commitViewValue(c)},d):
k.$commitViewValue(c)};a.$watch(function(){var c=l(a);k.$options&&(k.$options.getterSetter&&L(c))&&(c=c());if(k.$modelValue!==c&&(z(k.$$invalidModelValue)||k.$$invalidModelValue!=c)){for(var d=k.$formatters,e=d.length,f=c;e--;)f=d[e](f);k.$$runValidators(c,f);k.$viewValue!==f&&(k.$viewValue=k.$$lastCommittedViewValue=f,k.$render())}return c})}],ae=function(){return{require:["ngModel","^?form","^?ngModelOptions"],controller:wf,link:{pre:function(a,c,d,e){e[2]&&(e[0].$options=e[2].$options);var f=e[0],
g=e[1]||xb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})},post:function(a,c,d,e){var f=e[0];if(f.$options&&f.$options.updateOn)c.on(f.$options.updateOn,function(c){a.$apply(function(){f.$$debounceViewValueCommit(c&&c.type)})});c.on("blur",function(c){a.$apply(function(){f.$setTouched()})})}}}},ce=ca({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),lc=function(){return{require:"?ngModel",link:function(a,c,d,e){e&&(d.required=
!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},kc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){y(a)&&0<a.length&&(a=RegExp(a));if(a&&!a.test)throw u("ngPattern")("noregexp",g,a,fa(c));f=a||r;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||z(f)||f.test(a)}}}}},nc=function(){return{require:"?ngModel",link:function(a,
c,d,e){if(e){var f=0;d.$observe("maxlength",function(a){f=W(a)||0;e.$validate()});e.$validators.maxlength=function(a){return e.$isEmpty(a)||a.length<=f}}}}},mc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=W(a)||0;e.$validate()});e.$validators.minlength=function(a){return e.$isEmpty(a)||a.length>=f}}}}},be=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!z(a)){var c=
[];a&&q(a.split(f),function(a){a&&c.push(Z(a))});return c}});e.$formatters.push(function(a){return K(a)?a.join(", "):r});e.$isEmpty=function(a){return!a||!a.length}}}},xf=/^(true|false|\d+)$/,de=function(){return{priority:100,compile:function(a,c){return xf.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ee=function(){return{controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);
this.$options.updateOn!==r?(this.$options.updateOnDefault=!1,this.$options.updateOn=Z(this.$options.updateOn.replace(uf,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ed=xa({compile:function(a){a.addClass("ng-binding");return function(a,d,e){d.data("$binding",e.ngBind);a.$watch(e.ngBind,function(a){d.text(a==r?"":a)})}}}),Gd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);
e.$observe("ngBindTemplate",function(a){d.text(a)})}}],Fd=["$sce","$parse",function(a,c){return function(d,e,f){function g(){var a=h(d);g.$$unwatch=h.$$unwatch;return(a||"").toString()}e.addClass("ng-binding").data("$binding",f.ngBindHtml);var h=c(f.ngBindHtml);d.$watch(g,function(c){e.html(a.getTrustedHtml(h(d))||"")})}}],Hd=Wb("",!0),Jd=Wb("Odd",0),Id=Wb("Even",1),Kd=xa({compile:function(a,c){c.$set("ngCloak",r);a.removeClass("ng-cloak")}}),Ld=[function(){return{scope:!0,controller:"@",priority:500}}],
oc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=na("ng-"+a);oc[c]=["$parse",function(d){return{compile:function(e,f){var g=d(f[c]);return function(c,d){d.on(M(a),function(a){c.$apply(function(){g(c,{$event:a})})})}}}}]});var Od=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,m,l;c.$watch(e.ngIf,
function(c){c?m||g(function(c,f){m=f;c[c.length++]=T.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(l&&(l.remove(),l=null),m&&(m.$destroy(),m=null),h&&(l=Fb(h.clone),a.leave(l,function(){l=null}),h=null))})}}}],Pd=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Qa.noop,compile:function(g,h){var m=h.ngInclude||h.src,l=h.onload||"",n=h.autoscroll;return function(g,
h,q,s,J){var H=0,r,v,A,w=function(){v&&(v.remove(),v=null);r&&(r.$destroy(),r=null);A&&(e.leave(A,function(){v=null}),v=A,A=null)};g.$watch(f.parseAsResourceUrl(m),function(f){var m=function(){!E(n)||n&&!g.$eval(n)||d()},q=++H;f?(a.get(f,{cache:c}).success(function(a){if(q===H){var c=g.$new();s.template=a;a=J(c,function(a){w();e.enter(a,null,h,m)});r=c;A=a;r.$emit("$includeContentLoaded");g.$eval(l)}}).error(function(){q===H&&(w(),g.$emit("$includeContentError"))}),g.$emit("$includeContentRequested")):
(w(),s.template=null)})}}}}],fe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],Qd=xa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Rd=xa({terminal:!0,priority:1E3}),Sd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,m=g.$attr.when&&f.attr(g.$attr.when),l=g.offset||0,n=e.$eval(m)||{},p={},k=c.startSymbol(),
t=c.endSymbol(),s=/^when(Minus)?(.+)$/;q(g,function(a,c){s.test(c)&&(n[M(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});q(n,function(a,e){p[e]=c(a.replace(d,k+h+"-"+l+t))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in n||(c=a.pluralCat(c-l));return p[c](e)},function(a){f.text(a)})}}}],Td=["$parse","$animate",function(a,c){var d=u("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,h,m){var l=g.ngRepeat,n=l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
p,k,t,s,r,u,G={$id:Ha};if(!n)throw d("iexp",l);g=n[1];h=n[2];(n=n[3])?(p=a(n),k=function(a,c,d){u&&(G[u]=a);G[r]=c;G.$index=d;return p(e,G)}):(t=function(a,c){return Ha(c)},s=function(a){return a});n=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!n)throw d("iidexp",g);r=n[3]||n[1];u=n[2];var v={};e.$watchCollection(h,function(a){var e,g,h=f[0],n,p={},D,x,G,E,B,C,z,y=[],K=function(a,c){a[r]=G;u&&(a[u]=x);a.$index=c;a.$first=0===c;a.$last=c===D-1;a.$middle=!(a.$first||a.$last);a.$odd=
!(a.$even=0===(c&1))};if(cb(a))C=a,B=k||t;else{B=k||s;C=[];for(g in a)a.hasOwnProperty(g)&&"$"!=g.charAt(0)&&C.push(g);C.sort()}D=C.length;g=y.length=C.length;for(e=0;e<g;e++)if(x=a===C?e:C[e],G=a[x],E=B(x,G,e),Ba(E,"`track by` id"),v.hasOwnProperty(E))z=v[E],delete v[E],p[E]=z,y[e]=z;else{if(p.hasOwnProperty(E))throw q(y,function(a){a&&a.scope&&(v[a.id]=a)}),d("dupes",l,E);y[e]={id:E};p[E]=!1}for(n in v)v.hasOwnProperty(n)&&(z=v[n],g=Fb(z.clone),c.leave(g),q(g,function(a){a.$$NG_REMOVED=!0}),z.scope.$destroy());
e=0;for(g=C.length;e<g;e++)if(x=a===C?e:C[e],G=a[x],z=y[e],y[e-1]&&(h=y[e-1].clone[y[e-1].clone.length-1]),z.scope){n=h;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);z.clone[0]!=n&&c.move(Fb(z.clone),null,F(h));h=z.clone[z.clone.length-1];K(z.scope,e)}else m(function(a,d){z.scope=d;a[a.length++]=T.createComment(" end ngRepeat: "+l+" ");c.enter(a,null,F(h));h=a;z.clone=a;p[z.id]=z;K(z.scope,e)});v=p})}}}],Ud=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":
"addClass"](d,"ng-hide")})}}],Nd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide")})}}],Vd=xa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Wd=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],m=[],l=[];c.$watch(e.ngSwitch||e.on,function(d){var p,k;p=0;for(k=m.length;p<
k;++p)m[p].remove();p=m.length=0;for(k=l.length;p<k;++p){var t=h[p];l[p].$destroy();m[p]=t;a.leave(t,function(){m.splice(p,1)})}h.length=0;l.length=0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),q(g,function(d){var e=c.$new();l.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Xd=xa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,
element:c})}}),Yd=xa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),$d=xa({link:function(a,c,d,e,f){if(!f)throw u("ngTransclude")("orphan",fa(c));f(function(a){c.empty();c.append(a)})}}),Ad=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],yf=u("ngOptions"),Zd=ca({terminal:!0}),Bd=["$compile","$parse",
function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:C};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,l={},n=e,p;m.databound=d.ngModel;m.init=function(a,c,d){n=a;p=d};m.addOption=function(c,d){Ba(c,'"option value"');l[c]=!0;n.$viewValue==c&&(a.val(c),
p.parent()&&p.remove());d[0].hasAttribute("selected")&&(d[0].selected=!0)};m.removeOption=function(a){this.hasOption(a)&&(delete l[a],n.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ha(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};m.hasOption=function(a){return l.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=C})}],link:function(e,g,h,m){function l(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(A.parent()&&
A.remove(),c.val(a),""===a&&C.prop("selected",!0)):z(a)&&C?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){A.parent()&&A.remove();d.$setViewValue(c.val())})})}function n(a,c,d){var e;d.$render=function(){var a=new Wa(d.$viewValue);q(c.find("option"),function(c){c.selected=E(a.get(c.value))})};a.$watch(function(){ra(e,d.$viewValue)||(e=ia(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});
d.$setViewValue(a)})})}function p(e,f,g){function h(){var a={"":[]},c=[""],d,k,r,s,x;s=g.$modelValue;x=A(e)||[];var C=n?Yb(x):x,F,y,B;y={};r=!1;var D,H;if(t)if(w&&K(s))for(r=new Wa([]),B=0;B<s.length;B++)y[m]=s[B],r.put(w(e,y),s[B]);else r=new Wa(s);for(B=0;F=C.length,B<F;B++){k=B;if(n){k=C[B];if("$"===k.charAt(0))continue;y[n]=k}y[m]=x[k];d=p(e,y)||"";(k=a[d])||(k=a[d]=[],c.push(d));t?d=E(r.remove(w?w(e,y):q(e,y))):(w?(d={},d[m]=s,d=w(e,d)===w(e,y)):d=s===q(e,y),r=r||d);D=l(e,y);D=E(D)?D:"";k.push({id:w?
w(e,y):n?C[B]:B,label:D,selected:d})}t||(u||null===s?a[""].unshift({id:"",label:"",selected:!r}):r||a[""].unshift({id:"?",label:"",selected:!0}));y=0;for(C=c.length;y<C;y++){d=c[y];k=a[d];z.length<=y?(s={element:v.clone().attr("label",d),label:k.label},x=[s],z.push(x),f.append(s.element)):(x=z[y],s=x[0],s.label!=d&&s.element.attr("label",s.label=d));D=null;B=0;for(F=k.length;B<F;B++)r=k[B],(d=x[B+1])?(D=d.element,d.label!==r.label&&D.text(d.label=r.label),d.id!==r.id&&D.val(d.id=r.id),d.selected!==
r.selected&&D.prop("selected",d.selected=r.selected)):(""===r.id&&u?H=u:(H=G.clone()).val(r.id).prop("selected",r.selected).text(r.label),x.push({element:H,label:r.label,id:r.id,selected:r.selected}),D?D.after(H):s.element.append(H),D=H);for(B++;x.length>B;)x.pop().element.remove()}for(;z.length>y;)z.pop()[0].element.remove()}var k;if(!(k=s.match(d)))throw yf("iexp",s,fa(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:m),A=c(k[7]),w=k[8]?c(k[8]):null,z=[[{element:f,label:""}]];
u&&(a(u)(e),u.removeClass("ng-scope"),u.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=A(e)||[],d={},h,k,l,p,s,v,u;if(t)for(k=[],p=0,v=z.length;p<v;p++)for(a=z[p],l=1,s=a.length;l<s;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(w)for(u=0;u<c.length&&(d[m]=c[u],w(e,d)!=h);u++);else d[m]=c[h];k.push(q(e,d))}}else{h=f.val();if("?"==h)k=r;else if(""===h)k=null;else if(w)for(u=0;u<c.length;u++){if(d[m]=c[u],w(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),
k=q(e,d);1<z[0].length&&z[0][1].id!==h&&(z[0][1].selected=!1)}g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(m[1]){var k=m[0];m=m[1];var t=h.multiple,s=h.ngOptions,u=!1,C,G=F(T.createElement("option")),v=F(T.createElement("optgroup")),A=G.clone();h=0;for(var w=g.children(),y=w.length;h<y;h++)if(""===w[h].value){C=u=w.eq(h);break}k.init(m,u,A);t&&(m.$isEmpty=function(a){return!a||0===a.length});s?p(e,g,m):t?n(e,g,m):l(e,g,m,k)}}}}],Dd=["$interpolate",function(a){var c={addOption:C,removeOption:C};
return{restrict:"E",priority:100,compile:function(d,e){if(z(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var l=d.parent(),n=l.data("$selectController")||l.parent().data("$selectController");n&&n.databound?d.prop("selected",!1):n=c;f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&n.removeOption(c);n.addOption(a,d)}):n.addOption(e.value,d);d.on("$destroy",function(){n.removeOption(e.value)})}}}}],Cd=ca({restrict:"E",terminal:!1});N.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):
(sd(),ud(Qa),F(T).ready(function(){qd(T,gc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map


(function(window, angular, undefined) {'use strict';

var $sanitizeMinErr = angular.$$minErr('$sanitize');

/**
 * @ngdoc module
 * @name ngSanitize
 * @description
 *
 * # ngSanitize
 *
 * The `ngSanitize` module provides functionality to sanitize HTML.
 *
 *
 * <div doc-module-components="ngSanitize"></div>
 *
 * See {@link ngSanitize.$sanitize `$sanitize`} for usage.
 */

/*
 * HTML Parser By Misko Hevery (misko@hevery.com)
 * based on:  HTML Parser By John Resig (ejohn.org)
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 *
 * // Use like so:
 * htmlParser(htmlString, {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * });
 *
 */


/**
 * @ngdoc service
 * @name $sanitize
 * @kind function
 *
 * @description
 *   The input is sanitized by parsing the html into tokens. All safe tokens (from a whitelist) are
 *   then serialized back to properly escaped html string. This means that no unsafe input can make
 *   it into the returned string, however, since our parser is more strict than a typical browser
 *   parser, it's possible that some obscure input, which would be recognized as valid HTML by a
 *   browser, won't make it through the sanitizer.
 *   The whitelist is configured using the functions `aHrefSanitizationWhitelist` and
 *   `imgSrcSanitizationWhitelist` of {@link ng.$compileProvider `$compileProvider`}.
 *
 * @param {string} html Html input.
 * @returns {string} Sanitized html.
 *
 * @example
   <example module="sanitizeExample" deps="angular-sanitize.js">
   <file name="index.html">
     <script>
         angular.module('sanitizeExample', ['ngSanitize'])
           .controller('ExampleController', ['$scope', '$sce', function($scope, $sce) {
             $scope.snippet =
               '<p style="color:blue">an html\n' +
               '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
               'snippet</p>';
             $scope.deliberatelyTrustDangerousSnippet = function() {
               return $sce.trustAsHtml($scope.snippet);
             };
           }]);
     </script>
     <div ng-controller="ExampleController">
        Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
       <table>
         <tr>
           <td>Directive</td>
           <td>How</td>
           <td>Source</td>
           <td>Rendered</td>
         </tr>
         <tr id="bind-html-with-sanitize">
           <td>ng-bind-html</td>
           <td>Automatically uses $sanitize</td>
           <td><pre>&lt;div ng-bind-html="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
           <td><div ng-bind-html="snippet"></div></td>
         </tr>
         <tr id="bind-html-with-trust">
           <td>ng-bind-html</td>
           <td>Bypass $sanitize by explicitly trusting the dangerous value</td>
           <td>
           <pre>&lt;div ng-bind-html="deliberatelyTrustDangerousSnippet()"&gt;
&lt;/div&gt;</pre>
           </td>
           <td><div ng-bind-html="deliberatelyTrustDangerousSnippet()"></div></td>
         </tr>
         <tr id="bind-default">
           <td>ng-bind</td>
           <td>Automatically escapes</td>
           <td><pre>&lt;div ng-bind="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
           <td><div ng-bind="snippet"></div></td>
         </tr>
       </table>
       </div>
   </file>
   <file name="protractor.js" type="protractor">
     it('should sanitize the html snippet by default', function() {
       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
         toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
     });

     it('should inline raw snippet if bound to a trusted value', function() {
       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).
         toBe("<p style=\"color:blue\">an html\n" +
              "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
              "snippet</p>");
     });

     it('should escape snippet without any filter', function() {
       expect(element(by.css('#bind-default div')).getInnerHtml()).
         toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
              "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
              "snippet&lt;/p&gt;");
     });

     it('should update', function() {
       element(by.model('snippet')).clear();
       element(by.model('snippet')).sendKeys('new <b onclick="alert(1)">text</b>');
       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
         toBe('new <b>text</b>');
       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).toBe(
         'new <b onclick="alert(1)">text</b>');
       expect(element(by.css('#bind-default div')).getInnerHtml()).toBe(
         "new &lt;b onclick=\"alert(1)\"&gt;text&lt;/b&gt;");
     });
   </file>
   </example>
 */
function $SanitizeProvider() {
  this.$get = ['$$sanitizeUri', function($$sanitizeUri) {
    return function(html) {
      var buf = [];
      htmlParser(html, htmlSanitizeWriter(buf, function(uri, isImage) {
        return !/^unsafe/.test($$sanitizeUri(uri, isImage));
      }));
      return buf.join('');
    };
  }];
}

function sanitizeText(chars) {
  var buf = [];
  var writer = htmlSanitizeWriter(buf, angular.noop);
  writer.chars(chars);
  return buf.join('');
}


// Regular Expressions for parsing tags and attributes
var START_TAG_REGEXP =
       /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,
  END_TAG_REGEXP = /^<\s*\/\s*([\w:-]+)[^>]*>/,
  ATTR_REGEXP = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
  BEGIN_TAG_REGEXP = /^</,
  BEGING_END_TAGE_REGEXP = /^<\s*\//,
  COMMENT_REGEXP = /<!--(.*?)-->/g,
  DOCTYPE_REGEXP = /<!DOCTYPE([^>]*?)>/i,
  CDATA_REGEXP = /<!\[CDATA\[(.*?)]]>/g,
  SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  // Match everything outside of normal chars and " (quote character)
  NON_ALPHANUMERIC_REGEXP = /([^\#-~| |!])/g;


// Good source of info about elements and attributes
// http://dev.w3.org/html5/spec/Overview.html#semantics
// http://simon.html5.org/html-elements

// Safe Void Elements - HTML5
// http://dev.w3.org/html5/spec/Overview.html#void-elements
var voidElements = makeMap("area,br,col,hr,img,wbr");

// Elements that you can, intentionally, leave open (and which close themselves)
// http://dev.w3.org/html5/spec/Overview.html#optional-tags
var optionalEndTagBlockElements = makeMap("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
    optionalEndTagInlineElements = makeMap("rp,rt"),
    optionalEndTagElements = angular.extend({},
                                            optionalEndTagInlineElements,
                                            optionalEndTagBlockElements);

// Safe Block Elements - HTML5
var blockElements = angular.extend({}, optionalEndTagBlockElements, makeMap("address,article," +
        "aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5," +
        "h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul"));

// Inline Elements - HTML5
var inlineElements = angular.extend({}, optionalEndTagInlineElements, makeMap("a,abbr,acronym,b," +
        "bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s," +
        "samp,small,span,strike,strong,sub,sup,time,tt,u,var"));


// Special Elements (can contain anything)
var specialElements = makeMap("script,style");

var validElements = angular.extend({},
                                   voidElements,
                                   blockElements,
                                   inlineElements,
                                   optionalEndTagElements);

//Attributes that have href and hence need to be sanitized
var uriAttrs = makeMap("background,cite,href,longdesc,src,usemap");
var validAttrs = angular.extend({}, uriAttrs, makeMap(
    'abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,'+
    'color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,'+
    'ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,'+
    'scope,scrolling,shape,size,span,start,summary,target,title,type,'+
    'valign,value,vspace,width'));

function makeMap(str) {
  var obj = {}, items = str.split(','), i;
  for (i = 0; i < items.length; i++) obj[items[i]] = true;
  return obj;
}


/**
 * @example
 * htmlParser(htmlString, {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * });
 *
 * @param {string} html string
 * @param {object} handler
 */
function htmlParser( html, handler ) {
  var index, chars, match, stack = [], last = html;
  stack.last = function() { return stack[ stack.length - 1 ]; };

  while ( html ) {
    chars = true;

    // Make sure we're not in a script or style element
    if ( !stack.last() || !specialElements[ stack.last() ] ) {

      // Comment
      if ( html.indexOf("<!--") === 0 ) {
        // comments containing -- are not allowed unless they terminate the comment
        index = html.indexOf("--", 4);

        if ( index >= 0 && html.lastIndexOf("-->", index) === index) {
          if (handler.comment) handler.comment( html.substring( 4, index ) );
          html = html.substring( index + 3 );
          chars = false;
        }
      // DOCTYPE
      } else if ( DOCTYPE_REGEXP.test(html) ) {
        match = html.match( DOCTYPE_REGEXP );

        if ( match ) {
          html = html.replace( match[0], '');
          chars = false;
        }
      // end tag
      } else if ( BEGING_END_TAGE_REGEXP.test(html) ) {
        match = html.match( END_TAG_REGEXP );

        if ( match ) {
          html = html.substring( match[0].length );
          match[0].replace( END_TAG_REGEXP, parseEndTag );
          chars = false;
        }

      // start tag
      } else if ( BEGIN_TAG_REGEXP.test(html) ) {
        match = html.match( START_TAG_REGEXP );

        if ( match ) {
          html = html.substring( match[0].length );
          match[0].replace( START_TAG_REGEXP, parseStartTag );
          chars = false;
        }
      }

      if ( chars ) {
        index = html.indexOf("<");

        var text = index < 0 ? html : html.substring( 0, index );
        html = index < 0 ? "" : html.substring( index );

        if (handler.chars) handler.chars( decodeEntities(text) );
      }

    } else {
      html = html.replace(new RegExp("(.*)<\\s*\\/\\s*" + stack.last() + "[^>]*>", 'i'),
        function(all, text){
          text = text.replace(COMMENT_REGEXP, "$1").replace(CDATA_REGEXP, "$1");

          if (handler.chars) handler.chars( decodeEntities(text) );

          return "";
      });

      parseEndTag( "", stack.last() );
    }

    if ( html == last ) {
      throw $sanitizeMinErr('badparse', "The sanitizer was unable to parse the following block " +
                                        "of html: {0}", html);
    }
    last = html;
  }

  // Clean up any remaining tags
  parseEndTag();

  function parseStartTag( tag, tagName, rest, unary ) {
    tagName = angular.lowercase(tagName);
    if ( blockElements[ tagName ] ) {
      while ( stack.last() && inlineElements[ stack.last() ] ) {
        parseEndTag( "", stack.last() );
      }
    }

    if ( optionalEndTagElements[ tagName ] && stack.last() == tagName ) {
      parseEndTag( "", tagName );
    }

    unary = voidElements[ tagName ] || !!unary;

    if ( !unary )
      stack.push( tagName );

    var attrs = {};

    rest.replace(ATTR_REGEXP,
      function(match, name, doubleQuotedValue, singleQuotedValue, unquotedValue) {
        var value = doubleQuotedValue
          || singleQuotedValue
          || unquotedValue
          || '';

        attrs[name] = decodeEntities(value);
    });
    if (handler.start) handler.start( tagName, attrs, unary );
  }

  function parseEndTag( tag, tagName ) {
    var pos = 0, i;
    tagName = angular.lowercase(tagName);
    if ( tagName )
      // Find the closest opened tag of the same type
      for ( pos = stack.length - 1; pos >= 0; pos-- )
        if ( stack[ pos ] == tagName )
          break;

    if ( pos >= 0 ) {
      // Close all the open elements, up the stack
      for ( i = stack.length - 1; i >= pos; i-- )
        if (handler.end) handler.end( stack[ i ] );

      // Remove the open elements from the stack
      stack.length = pos;
    }
  }
}

var hiddenPre=document.createElement("pre");
var spaceRe = /^(\s*)([\s\S]*?)(\s*)$/;
/**
 * decodes all entities into regular string
 * @param value
 * @returns {string} A string with decoded entities.
 */
function decodeEntities(value) {
  if (!value) { return ''; }

  // Note: IE8 does not preserve spaces at the start/end of innerHTML
  // so we must capture them and reattach them afterward
  var parts = spaceRe.exec(value);
  var spaceBefore = parts[1];
  var spaceAfter = parts[3];
  var content = parts[2];
  if (content) {
    hiddenPre.innerHTML=content.replace(/</g,"&lt;");
    // innerText depends on styling as it doesn't display hidden elements.
    // Therefore, it's better to use textContent not to cause unnecessary
    // reflows. However, IE<9 don't support textContent so the innerText
    // fallback is necessary.
    content = 'textContent' in hiddenPre ?
      hiddenPre.textContent : hiddenPre.innerText;
  }
  return spaceBefore + content + spaceAfter;
}

/**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 * @param value
 * @returns {string} escaped text
 */
function encodeEntities(value) {
  return value.
    replace(/&/g, '&amp;').
    replace(SURROGATE_PAIR_REGEXP, function (value) {
      var hi = value.charCodeAt(0);
      var low = value.charCodeAt(1);
      return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
    }).
    replace(NON_ALPHANUMERIC_REGEXP, function(value){
      return '&#' + value.charCodeAt(0) + ';';
    }).
    replace(/</g, '&lt;').
    replace(/>/g, '&gt;');
}

/**
 * create an HTML/XML writer which writes to buffer
 * @param {Array} buf use buf.jain('') to get out sanitized html string
 * @returns {object} in the form of {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * }
 */
function htmlSanitizeWriter(buf, uriValidator){
  var ignore = false;
  var out = angular.bind(buf, buf.push);
  return {
    start: function(tag, attrs, unary){
      tag = angular.lowercase(tag);
      if (!ignore && specialElements[tag]) {
        ignore = tag;
      }
      if (!ignore && validElements[tag] === true) {
        out('<');
        out(tag);
        angular.forEach(attrs, function(value, key){
          var lkey=angular.lowercase(key);
          var isImage = (tag === 'img' && lkey === 'src') || (lkey === 'background');
          if (validAttrs[lkey] === true &&
            (uriAttrs[lkey] !== true || uriValidator(value, isImage))) {
            out(' ');
            out(key);
            out('="');
            out(encodeEntities(value));
            out('"');
          }
        });
        out(unary ? '/>' : '>');
      }
    },
    end: function(tag){
        tag = angular.lowercase(tag);
        if (!ignore && validElements[tag] === true) {
          out('</');
          out(tag);
          out('>');
        }
        if (tag == ignore) {
          ignore = false;
        }
      },
    chars: function(chars){
        if (!ignore) {
          out(encodeEntities(chars));
        }
      }
  };
}


// define ngSanitize module and register $sanitize service
angular.module('ngSanitize', []).provider('$sanitize', $SanitizeProvider);

/* global sanitizeText: false */

/**
 * @ngdoc filter
 * @name linky
 * @kind function
 *
 * @description
 * Finds links in text input and turns them into html links. Supports http/https/ftp/mailto and
 * plain email address links.
 *
 * Requires the {@link ngSanitize `ngSanitize`} module to be installed.
 *
 * @param {string} text Input text.
 * @param {string} target Window (_blank|_self|_parent|_top) or named frame to open links in.
 * @returns {string} Html-linkified text.
 *
 * @usage
   <span ng-bind-html="linky_expression | linky"></span>
 *
 * @example
   <example module="linkyExample" deps="angular-sanitize.js">
     <file name="index.html">
       <script>
         angular.module('linkyExample', ['ngSanitize'])
           .controller('ExampleController', ['$scope', function($scope) {
             $scope.snippet =
               'Pretty text with some links:\n'+
               'http://angularjs.org/,\n'+
               'mailto:us@somewhere.org,\n'+
               'another@somewhere.org,\n'+
               'and one more: ftp://127.0.0.1/.';
             $scope.snippetWithTarget = 'http://angularjs.org/';
           }]);
       </script>
       <div ng-controller="ExampleController">
       Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
       <table>
         <tr>
           <td>Filter</td>
           <td>Source</td>
           <td>Rendered</td>
         </tr>
         <tr id="linky-filter">
           <td>linky filter</td>
           <td>
             <pre>&lt;div ng-bind-html="snippet | linky"&gt;<br>&lt;/div&gt;</pre>
           </td>
           <td>
             <div ng-bind-html="snippet | linky"></div>
           </td>
         </tr>
         <tr id="linky-target">
          <td>linky target</td>
          <td>
            <pre>&lt;div ng-bind-html="snippetWithTarget | linky:'_blank'"&gt;<br>&lt;/div&gt;</pre>
          </td>
          <td>
            <div ng-bind-html="snippetWithTarget | linky:'_blank'"></div>
          </td>
         </tr>
         <tr id="escaped-html">
           <td>no filter</td>
           <td><pre>&lt;div ng-bind="snippet"&gt;<br>&lt;/div&gt;</pre></td>
           <td><div ng-bind="snippet"></div></td>
         </tr>
       </table>
     </file>
     <file name="protractor.js" type="protractor">
       it('should linkify the snippet with urls', function() {
         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
             toBe('Pretty text with some links: http://angularjs.org/, us@somewhere.org, ' +
                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
         expect(element.all(by.css('#linky-filter a')).count()).toEqual(4);
       });

       it('should not linkify snippet without the linky filter', function() {
         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText()).
             toBe('Pretty text with some links: http://angularjs.org/, mailto:us@somewhere.org, ' +
                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
         expect(element.all(by.css('#escaped-html a')).count()).toEqual(0);
       });

       it('should update', function() {
         element(by.model('snippet')).clear();
         element(by.model('snippet')).sendKeys('new http://link.');
         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
             toBe('new http://link.');
         expect(element.all(by.css('#linky-filter a')).count()).toEqual(1);
         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText())
             .toBe('new http://link.');
       });

       it('should work with the target property', function() {
        expect(element(by.id('linky-target')).
            element(by.binding("snippetWithTarget | linky:'_blank'")).getText()).
            toBe('http://angularjs.org/');
        expect(element(by.css('#linky-target a')).getAttribute('target')).toEqual('_blank');
       });
     </file>
   </example>
 */
angular.module('ngSanitize').filter('linky', ['$sanitize', function($sanitize) {
  var LINKY_URL_REGEXP =
        /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,
      MAILTO_REGEXP = /^mailto:/;

  return function(text, target) {
    if (!text) return text;
    var match;
    var raw = text;
    var html = [];
    var url;
    var i;
    while ((match = raw.match(LINKY_URL_REGEXP))) {
      // We can not end in these as they are sometimes found at the end of the sentence
      url = match[0];
      // if we did not match ftp/http/mailto then assume mailto
      if (match[2] == match[3]) url = 'mailto:' + url;
      i = match.index;
      addText(raw.substr(0, i));
      addLink(url, match[0].replace(MAILTO_REGEXP, ''));
      raw = raw.substring(i + match[0].length);
    }
    addText(raw);
    return $sanitize(html.join(''));

    function addText(text) {
      if (!text) {
        return;
      }
      html.push(sanitizeText(text));
    }

    function addLink(url, text) {
      html.push('<a ');
      if (angular.isDefined(target)) {
        html.push('target="');
        html.push(target);
        html.push('" ');
      }
      html.push('href="');
      html.push(url);
      html.push('">');
      addText(text);
      html.push('</a>');
    }
  };
}]);


})(window, window.angular);


(function(window, $) {
'use strict';

var EXCESS_ROWS = 6;
var SCROLL_THRESHOLD = 4;
var ASC = "asc";

var DESC = "desc";

var NG_FIELD = '_ng_field_';
var NG_DEPTH = '_ng_depth_';
var NG_HIDDEN = '_ng_hidden_';
var NG_COLUMN = '_ng_column_';
var CUSTOM_FILTERS = /CUSTOM_FILTERS/g;
var COL_FIELD = /COL_FIELD/g;
var DISPLAY_CELL_TEMPLATE = /DISPLAY_CELL_TEMPLATE/g;
var EDITABLE_CELL_TEMPLATE = /EDITABLE_CELL_TEMPLATE/g;
var CELL_EDITABLE_CONDITION = /CELL_EDITABLE_CONDITION/g;
var TEMPLATE_REGEXP = /<.+>/;
window.ngGrid = {};
window.ngGrid.i18n = {};
var ngGridServices = angular.module('ngGrid.services', []);
var ngGridDirectives = angular.module('ngGrid.directives', []);
var ngGridFilters = angular.module('ngGrid.filters', []);

angular.module('ngGrid', ['ngGrid.services', 'ngGrid.directives', 'ngGrid.filters']);

var ngMoveSelectionHandler = function($scope, elm, evt, grid) {
    if ($scope.selectionProvider.selectedItems === undefined) {
        return true;
    }

    var charCode = evt.which || evt.keyCode,
        newColumnIndex,
        lastInRow = false,
        firstInRow = false,
        rowIndex = $scope.selectionProvider.lastClickedRow === undefined ? 1 : $scope.selectionProvider.lastClickedRow.rowIndex,
        visibleCols = $scope.columns.filter(function(c) { return c.visible; }),
        pinnedCols = $scope.columns.filter(function(c) { return c.pinned; });

    if ($scope.col) {
        newColumnIndex = visibleCols.indexOf($scope.col);
    }

    if (charCode !== 37 && charCode !== 38 && charCode !== 39 && charCode !== 40 && (grid.config.noTabInterference || charCode !== 9) && charCode !== 13) {
        return true;
    }
    if ($scope.enableCellSelection) {
        if (charCode === 9) { 
            evt.preventDefault();
        }

        var focusedOnFirstColumn = $scope.showSelectionCheckbox ? $scope.col.index === 1 : $scope.col.index === 0;
        var focusedOnFirstVisibleColumns = $scope.$index === 1 || $scope.$index === 0;
        var focusedOnLastVisibleColumns = $scope.$index === ($scope.renderedColumns.length - 1) || $scope.$index === ($scope.renderedColumns.length - 2);
        var focusedOnLastColumn = visibleCols.indexOf($scope.col) === (visibleCols.length - 1);
        var focusedOnLastPinnedColumn = pinnedCols.indexOf($scope.col) === (pinnedCols.length - 1);
        if (charCode === 37 || charCode === 9 && evt.shiftKey) {
            var scrollTo = 0;

            if (!focusedOnFirstColumn) {
                newColumnIndex -= 1;
            }

            if (focusedOnFirstVisibleColumns) {
                if (focusedOnFirstColumn && charCode === 9 && evt.shiftKey){
                    scrollTo = grid.$canvas.width();
                    newColumnIndex = visibleCols.length - 1;
                    firstInRow = true;
                }
                else {
                    scrollTo = grid.$viewport.scrollLeft() - $scope.col.width;
                }
            }
            else if (pinnedCols.length > 0) {
                scrollTo = grid.$viewport.scrollLeft() - visibleCols[newColumnIndex].width;
            }

            grid.$viewport.scrollLeft(scrollTo);
        }
        else if (charCode === 39 || charCode ===  9 && !evt.shiftKey) {
            if (focusedOnLastVisibleColumns) {
                if (focusedOnLastColumn && charCode ===  9 && !evt.shiftKey) {
                    grid.$viewport.scrollLeft(0);
                    newColumnIndex = $scope.showSelectionCheckbox ? 1 : 0;  
                    lastInRow = true;
                }
                else {
                    grid.$viewport.scrollLeft(grid.$viewport.scrollLeft() + $scope.col.width);
                }
            }
            else if (focusedOnLastPinnedColumn) {
                grid.$viewport.scrollLeft(0);
            }

            if (!focusedOnLastColumn) {
                newColumnIndex += 1;
            }
        }
    }
    var items;
    if ($scope.configGroups.length > 0) {
        items = grid.rowFactory.parsedData.filter(function (row) {
            return !row.isAggRow;
        });
    }
    else {
        items = grid.filteredRows;
    }
    var offset = 0;
    if (rowIndex !== 0 && (charCode === 38 || charCode === 13 && evt.shiftKey || charCode === 9 && evt.shiftKey && firstInRow)) { 
        offset = -1;
    }
    else if (rowIndex !== items.length - 1 && (charCode === 40 || charCode === 13 && !evt.shiftKey || charCode === 9 && lastInRow)) {
        offset = 1;
    }
    if (offset) {
        var r = items[rowIndex + offset];
        if (r.beforeSelectionChange(r, evt)) {
            r.continueSelection(evt);
            $scope.$emit('ngGridEventDigestGridParent');

            if ($scope.selectionProvider.lastClickedRow.renderedRowIndex >= $scope.renderedRows.length - EXCESS_ROWS - 2) {
                grid.$viewport.scrollTop(grid.$viewport.scrollTop() + $scope.rowHeight);
            }
            else if ($scope.selectionProvider.lastClickedRow.renderedRowIndex <= EXCESS_ROWS + 2) {
                grid.$viewport.scrollTop(grid.$viewport.scrollTop() - $scope.rowHeight);
            }
      }
    }
    if ($scope.enableCellSelection) {
        setTimeout(function(){
            $scope.domAccessProvider.focusCellElement($scope, $scope.renderedColumns.indexOf(visibleCols[newColumnIndex]));
        }, 3);
    }

    return false;
};

if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    };
}
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(elt ) {
        var len = this.length >>> 0;
        var from = Number(arguments[1]) || 0;
        from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        if (from < 0) {
            from += len;
        }
        for (; from < len; from++) {
            if (from in this && this[from] === elt) {
                return from;
            }
        }
        return -1;
    };
}
if (!Array.prototype.filter) {
    Array.prototype.filter = function(fun ) {
        "use strict";
        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function") {
            throw new TypeError();
        }
        var res = [];
        var thisp = arguments[1];
        for (var i = 0; i < len; i++) {
            if (i in t) {
                var val = t[i]; 
                if (fun.call(thisp, val, i, t)) {
                    res.push(val);
                }
            }
        }
        return res;
    };
}
ngGridFilters.filter('checkmark', function() {
    return function(input) {
        return input ? '\u2714' : '\u2718';
    };
});
ngGridFilters.filter('ngColumns', function() {
    return function(input) {
        return input.filter(function(col) {
            return !col.isAggCol;
        });
    };
});
angular.module('ngGrid.services').factory('$domUtilityService',['$utilityService', '$window', function($utils, $window) {
    var domUtilityService = {};
    var regexCache = {};
    var getWidths = function() {
        var $testContainer = $('<div></div>');
        $testContainer.appendTo('body');
        $testContainer.height(100).width(100).css("position", "absolute").css("overflow", "scroll");
        $testContainer.append('<div style="height: 400px; width: 400px;"></div>');
        domUtilityService.ScrollH = ($testContainer.height() - $testContainer[0].clientHeight);
        domUtilityService.ScrollW = ($testContainer.width() - $testContainer[0].clientWidth);
        $testContainer.empty();
        $testContainer.attr('style', '');
        $testContainer.append('<span style="font-family: Verdana, Helvetica, Sans-Serif; font-size: 14px;"><strong>M</strong></span>');
        domUtilityService.LetterW = $testContainer.children().first().width();
        $testContainer.remove();
    };
    domUtilityService.eventStorage = {};
    domUtilityService.AssignGridContainers = function($scope, rootEl, grid) {
        grid.$root = $(rootEl);
        grid.$topPanel = grid.$root.find(".ngTopPanel");
        grid.$groupPanel = grid.$root.find(".ngGroupPanel");
        grid.$headerContainer = grid.$topPanel.find(".ngHeaderContainer");
        $scope.$headerContainer = grid.$headerContainer;

        grid.$headerScroller = grid.$topPanel.find(".ngHeaderScroller");
        grid.$headers = grid.$headerScroller.children();
        grid.$viewport = grid.$root.find(".ngViewport");
        grid.$canvas = grid.$viewport.find(".ngCanvas");
        grid.$footerPanel = grid.$root.find(".ngFooterPanel");

        var scopeDereg = $scope.$watch(function () {
            return grid.$viewport.scrollLeft();
        }, function (newLeft) {
            return grid.$headerContainer.scrollLeft(newLeft);
        });

        $scope.$on('$destroy', function() {
            $(grid.$root.parent()).off('resize.nggrid');

            grid.$root = null;
            grid.$topPanel = null;
            grid.$headerContainer = null;
            grid.$headers = null;
            grid.$canvas = null;
            grid.$footerPanel = null;

            scopeDereg();
        });

        domUtilityService.UpdateGridLayout($scope, grid);
    };
    domUtilityService.getRealWidth = function (obj) {
        var width = 0;
        var props = { visibility: "hidden", display: "block" };
        var hiddenParents = obj.parents().andSelf().not(':visible');
        $.swap(hiddenParents[0], props, function () {
            width = obj.outerWidth();
        });
        return width;
    };
    domUtilityService.UpdateGridLayout = function($scope, grid) {
        if (!grid.$root){
            return;
        }
        var scrollTop = grid.$viewport.scrollTop();
        grid.elementDims.rootMaxW = grid.$root.width();
        if (grid.$root.is(':hidden')) {
            grid.elementDims.rootMaxW = domUtilityService.getRealWidth(grid.$root);
        }
        grid.elementDims.rootMaxH = grid.$root.height();
        grid.refreshDomSizes();
        $scope.adjustScrollTop(scrollTop, true); 
    };
    domUtilityService.numberOfGrids = 0;
    domUtilityService.setStyleText = function(grid, css) {
        var style = grid.styleSheet,
            gridId = grid.gridId,
            doc = $window.document;

        if (!style) {
            style = doc.getElementById(gridId);
        }
        if (!style) {
            style = doc.createElement('style');
            style.type = 'text/css';
            style.id = gridId;
            (doc.head || doc.getElementsByTagName('head')[0]).appendChild(style);
        }

        if (style.styleSheet && !style.sheet) {
            style.styleSheet.cssText = css;
        } else {
            style.innerHTML = css;
        }
        grid.styleSheet = style;
        grid.styleText = css;
    };
    domUtilityService.BuildStyles = function($scope, grid, digest) {
        var rowHeight = grid.config.rowHeight,
            gridId = grid.gridId,
            css,
            cols = $scope.columns,
            sumWidth = 0;

        var trw = $scope.totalRowWidth();
        css = "." + gridId + " .ngCanvas { width: " + trw + "px; }" +
            "." + gridId + " .ngRow { width: " + trw + "px; }" +
            "." + gridId + " .ngCanvas { width: " + trw + "px; }" +
            "." + gridId + " .ngHeaderScroller { width: " + (trw + domUtilityService.ScrollH) + "px}";

        for (var i = 0; i < cols.length; i++) {
            var col = cols[i];
            if (col.visible !== false) {
                css += "." + gridId + " .col" + i + " { width: " + col.width + "px; left: " + sumWidth + "px; height: " + rowHeight + "px }" +
                    "." + gridId + " .colt" + i + " { width: " + col.width + "px; }";
                sumWidth += col.width;
            }
        }
        domUtilityService.setStyleText(grid, css);

        $scope.adjustScrollLeft(grid.$viewport.scrollLeft());
        if (digest) {
            domUtilityService.digest($scope);
        }
    };
    domUtilityService.setColLeft = function(col, colLeft, grid) {
        if (grid.styleText) {
            var regex = regexCache[col.index];
            if (!regex) {
                regex = regexCache[col.index] = new RegExp(".col" + col.index + " { width: [0-9]+px; left: [0-9]+px");
            }
            var css = grid.styleText.replace(regex, ".col" + col.index + " { width: " + col.width + "px; left: " + colLeft + "px");
            domUtilityService.setStyleText(grid, css);
        }
    };
    domUtilityService.setColLeft.immediate = 1;
    domUtilityService.RebuildGrid = function($scope, grid){
        domUtilityService.UpdateGridLayout($scope, grid);
        if (grid.config.maintainColumnRatios == null || grid.config.maintainColumnRatios) {
            grid.configureColumnWidths();
        }
        $scope.adjustScrollLeft(grid.$viewport.scrollLeft());
        domUtilityService.BuildStyles($scope, grid, true);
    };

    domUtilityService.digest = function($scope) {
        if (!$scope.$root.$$phase) {
            $scope.$digest();
        }
    };
    domUtilityService.ScrollH = 17; 
    domUtilityService.ScrollW = 17; 
    domUtilityService.LetterW = 10;
    getWidths();
    return domUtilityService;
}]);
angular.module('ngGrid.services').factory('$sortService', ['$parse', function($parse) {
    var sortService = {};
    sortService.colSortFnCache = {}; 
    sortService.isCustomSort = false;
    sortService.guessSortFn = function(item) {
        var itemType = typeof(item);
        switch (itemType) {
            case "number":
                return sortService.sortNumber;
            case "boolean":
                return sortService.sortBool;
            case "string":
                return item.match(/^[-+]?[£$¤]?[\d,.]+%?$/) ? sortService.sortNumberStr : sortService.sortAlpha;
            default:
                if (Object.prototype.toString.call(item) === '[object Date]') {
                    return sortService.sortDate;
                }
                else {
                    return sortService.basicSort;
                }
        }
    };
    sortService.basicSort = function(a, b) {
        if (a === b) {
            return 0;
        }
        if (a < b) {
            return -1;
        }
        return 1;
    };
    sortService.sortNumber = function(a, b) {
        return a - b;
    };
    sortService.sortNumberStr = function(a, b) {
        var numA, numB, badA = false, badB = false;
        numA = parseFloat(a.replace(/[^0-9.-]/g, ''));
        if (isNaN(numA)) {
            badA = true;
        }
        numB = parseFloat(b.replace(/[^0-9.-]/g, ''));
        if (isNaN(numB)) {
            badB = true;
        }
        if (badA && badB) {
            return 0;
        }
        if (badA) {
            return 1;
        }
        if (badB) {
            return -1;
        }
        return numA - numB;
    };
    sortService.sortAlpha = function(a, b) {
        var strA = a.toLowerCase(),
            strB = b.toLowerCase();
        return strA === strB ? 0 : (strA < strB ? -1 : 1);
    };
    sortService.sortDate = function(a, b) {
        var timeA = a.getTime(),
            timeB = b.getTime();
        return timeA === timeB ? 0 : (timeA < timeB ? -1 : 1);
    };
    sortService.sortBool = function(a, b) {
        if (a && b) {
            return 0;
        }
        if (!a && !b) {
            return 0;
        } else {
            return a ? 1 : -1;
        }
    };
    sortService.sortData = function(sortInfo, data ) {
        if (!data || !sortInfo) {
            return;
        }
        var l = sortInfo.fields.length,
            order = sortInfo.fields,
            col,
            direction,
            d = data.slice(0);
        data.sort(function (itemA, itemB) {
            var tem = 0,
                indx = 0,
                res,
                sortFn;
            while (tem === 0 && indx < l) {
                col = sortInfo.columns[indx];
                direction = sortInfo.directions[indx];
                sortFn = sortService.getSortFn(col, d);
                var propA = $parse(order[indx])(itemA);
                var propB = $parse(order[indx])(itemB);
                if (sortService.isCustomSort) {
                    res = sortFn(propA, propB);
                    tem = direction === ASC ? res : 0 - res;
                } else {
                    if ((!propA && propA !== 0) || (!propB && propB !== 0)) {
                        if (!propB && !propA) {
                            tem = 0;
                        }
                        else if (!propA) {
                            tem = 1;
                        }
                        else if (!propB) {
                            tem = -1;
                        }
                    }
                    else {
                        res = sortFn(propA, propB);
                        tem = direction === ASC ? res : 0 - res;
                    }
                }
                indx++;
            }
            return tem;
        });
    };
    sortService.Sort = function(sortInfo, data) {
        if (sortService.isSorting) {
            return;
        }
        sortService.isSorting = true;
        sortService.sortData(sortInfo, data);
        sortService.isSorting = false;
    };
    sortService.getSortFn = function(col, data) {
        var sortFn, item;
        if (sortService.colSortFnCache[col.field]) {
            sortFn = sortService.colSortFnCache[col.field];
        }
        else if (col.sortingAlgorithm !== undefined) {
            sortFn = col.sortingAlgorithm;
            sortService.colSortFnCache[col.field] = col.sortingAlgorithm;
            sortService.isCustomSort = true;
        }
        else { 
            item = data[0];
            if (!item) {
                return sortFn;
            }
            sortFn = sortService.guessSortFn($parse(col.field)(item));
            if (sortFn) {
                sortService.colSortFnCache[col.field] = sortFn;
            } else {
                sortFn = sortService.sortAlpha;
            }
        }
        return sortFn;
    };
    return sortService;
}]);

angular.module('ngGrid.services').factory('$utilityService', ['$parse', function ($parse) {
    var funcNameRegex = /function (.{1,})\(/;
    var utils = {
        visualLength: function(node) {
            var elem = document.getElementById('testDataLength');
            if (!elem) {
                elem = document.createElement('SPAN');
                elem.id = "testDataLength";
                elem.style.visibility = "hidden";
                document.body.appendChild(elem);
            }
            var $node = $(node);
            $(elem).css({'font': $node.css('font'),
                        'font-size': $node.css('font-size'),
                        'font-family': $node.css('font-family')});
            elem.innerHTML = $node.text();
            var width = elem.offsetWidth;
            document.body.removeChild(elem);
            return width;
        },
        forIn: function(obj, action) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    action(obj[prop], prop);
                }
            }
        },
        evalProperty: function (entity, path) {
            return $parse("entity." + path)({ entity: entity });
        },
        endsWith: function(str, suffix) {
            if (!str || !suffix || typeof str !== "string") {
                return false;
            }
            return str.indexOf(suffix, str.length - suffix.length) !== -1;
        },
        isNullOrUndefined: function(obj) {
            if (obj === undefined || obj === null) {
                return true;
            }
            return false;
        },
        getElementsByClassName: function(cl) {
            if (document.getElementsByClassName) {
                return document.getElementsByClassName(cl);
            }
            else {
                var retnode = [];
                var myclass = new RegExp('\\b' + cl + '\\b');
                var elem = document.getElementsByTagName('*');
                for (var i = 0; i < elem.length; i++) {
                    var classes = elem[i].className;
                    if (myclass.test(classes)) {
                        retnode.push(elem[i]);
                    }
                }
                return retnode;
            }
        },
        newId: (function() {
            var seedId = new Date().getTime();
            return function() {
                return seedId += 1;
            };
        })(),
        seti18n: function($scope, language) {
            var $langPack = window.ngGrid.i18n[language];
            for (var label in $langPack) {
                $scope.i18n[label] = $langPack[label];
            }
        },
        getInstanceType: function (o) {
            var results = (funcNameRegex).exec(o.constructor.toString());
            if (results && results.length > 1) {
                var instanceType = results[1].replace(/^\s+|\s+$/g, ""); 
                return instanceType;
            }
            else {
                return "";
            }
        }
    };

    return utils;
}]);

var ngAggregate = function (aggEntity, rowFactory, rowHeight, groupInitState) {
    this.rowIndex = 0;
    this.offsetTop = this.rowIndex * rowHeight;
    this.entity = aggEntity;
    this.label = aggEntity.gLabel;
    this.field = aggEntity.gField;
    this.depth = aggEntity.gDepth;
    this.parent = aggEntity.parent;
    this.children = aggEntity.children;
    this.aggChildren = aggEntity.aggChildren;
    this.aggIndex = aggEntity.aggIndex;
    this.collapsed = groupInitState;
    this.groupInitState = groupInitState;
    this.rowFactory = rowFactory;
    this.rowHeight = rowHeight;
    this.isAggRow = true;
    this.offsetLeft = aggEntity.gDepth * 25;
    this.aggLabelFilter = aggEntity.aggLabelFilter;
};

ngAggregate.prototype.toggleExpand = function () {
    this.collapsed = this.collapsed ? false : true;
    if (this.orig) {
        this.orig.collapsed = this.collapsed;
    }
    this.notifyChildren();
};
ngAggregate.prototype.setExpand = function (state) {
    this.collapsed = state;
    this.notifyChildren();
};
ngAggregate.prototype.notifyChildren = function () {
    var longest = Math.max(this.rowFactory.aggCache.length, this.children.length);
    for (var i = 0; i < longest; i++) {
        if (this.aggChildren[i]) {
            this.aggChildren[i].entity[NG_HIDDEN] = this.collapsed;
            if (this.collapsed) {
                this.aggChildren[i].setExpand(this.collapsed);
            }
        }
        if (this.children[i]) {
            this.children[i][NG_HIDDEN] = this.collapsed;
        }
        if (i > this.aggIndex && this.rowFactory.aggCache[i]) {
            var agg = this.rowFactory.aggCache[i];
            var offset = (30 * this.children.length);
            agg.offsetTop = this.collapsed ? agg.offsetTop - offset : agg.offsetTop + offset;
        }
    }
    this.rowFactory.renderedChange();
};
ngAggregate.prototype.aggClass = function () {
    return this.collapsed ? "ngAggArrowCollapsed" : "ngAggArrowExpanded";
};
ngAggregate.prototype.totalChildren = function () {
    if (this.aggChildren.length > 0) {
        var i = 0;
        var recurse = function (cur) {
            if (cur.aggChildren.length > 0) {
                angular.forEach(cur.aggChildren, function (a) {
                    recurse(a);
                });
            } else {
                i += cur.children.length;
            }
        };
        recurse(this);
        return i;
    } else {
        return this.children.length;
    }
};
ngAggregate.prototype.copy = function () {
    var ret = new ngAggregate(this.entity, this.rowFactory, this.rowHeight, this.groupInitState);
    ret.orig = this;
    return ret;
};
var ngColumn = function (config, $scope, grid, domUtilityService, $templateCache, $utils) {
    var self = this,
        colDef = config.colDef,
        delay = 500,
        clicks = 0,
        timer = null;
    self.colDef = config.colDef;
    self.width = colDef.width;
    self.groupIndex = 0;
    self.isGroupedBy = false;
    self.minWidth = !colDef.minWidth ? 50 : colDef.minWidth;
    self.maxWidth = !colDef.maxWidth ? 9000 : colDef.maxWidth;
    self.enableCellEdit = colDef.enableCellEdit !== undefined ? colDef.enableCellEdit : (config.enableCellEdit || config.enableCellEditOnFocus);
    self.cellEditableCondition = colDef.cellEditableCondition || config.cellEditableCondition || 'true';

    self.headerRowHeight = config.headerRowHeight;
    self.displayName = (colDef.displayName === undefined) ? colDef.field : colDef.displayName;

    self.index = config.index;
    self.isAggCol = config.isAggCol;
    self.cellClass = colDef.cellClass;
    self.sortPriority = undefined;
    self.cellFilter = colDef.cellFilter ? colDef.cellFilter : "";
    self.field = colDef.field;
    self.aggLabelFilter = colDef.aggLabelFilter || colDef.cellFilter;
    self.visible = $utils.isNullOrUndefined(colDef.visible) || colDef.visible;
    self.sortable = false;
    self.resizable = false;
    self.pinnable = false;
    self.pinned = (config.enablePinning && colDef.pinned);
    self.originalIndex = config.originalIndex == null ? self.index : config.originalIndex;
    self.groupable = $utils.isNullOrUndefined(colDef.groupable) || colDef.groupable;
    if (config.enableSort) {
        self.sortable = $utils.isNullOrUndefined(colDef.sortable) || colDef.sortable;
    }
    if (config.enableResize) {
        self.resizable = $utils.isNullOrUndefined(colDef.resizable) || colDef.resizable;
    }
    if (config.enablePinning) {
        self.pinnable = $utils.isNullOrUndefined(colDef.pinnable) || colDef.pinnable;
    }
    self.sortDirection = undefined;
    self.sortingAlgorithm = colDef.sortFn;
    self.headerClass = colDef.headerClass;
    self.cursor = self.sortable ? 'pointer' : 'default';
    self.headerCellTemplate = colDef.headerCellTemplate || $templateCache.get('headerCellTemplate.html');
    self.cellTemplate = colDef.cellTemplate || $templateCache.get('cellTemplate.html').replace(CUSTOM_FILTERS, self.cellFilter ? "|" + self.cellFilter : "");
    if(self.enableCellEdit) {
        self.cellEditTemplate = colDef.cellEditTemplate || $templateCache.get('cellEditTemplate.html');
        self.editableCellTemplate = colDef.editableCellTemplate || $templateCache.get('editableCellTemplate.html');
    }
    if (colDef.cellTemplate && !TEMPLATE_REGEXP.test(colDef.cellTemplate)) {
        self.cellTemplate = $templateCache.get(colDef.cellTemplate) || $.ajax({
            type: "GET",
            url: colDef.cellTemplate,
            async: false
        }).responseText;
    }
    if (self.enableCellEdit && colDef.editableCellTemplate && !TEMPLATE_REGEXP.test(colDef.editableCellTemplate)) {
        self.editableCellTemplate = $templateCache.get(colDef.editableCellTemplate) || $.ajax({
            type: "GET",
            url: colDef.editableCellTemplate,
            async: false
        }).responseText;
    }
    if (colDef.headerCellTemplate && !TEMPLATE_REGEXP.test(colDef.headerCellTemplate)) {
        self.headerCellTemplate = $templateCache.get(colDef.headerCellTemplate) || $.ajax({
            type: "GET",
            url: colDef.headerCellTemplate,
            async: false
        }).responseText;
    }
    self.colIndex = function () {
        var classes = self.pinned ? "pinned " : "";
        classes += "col" + self.index + " colt" + self.index;
        if (self.cellClass) {
            classes += " " + self.cellClass;
        }
        return classes;
    };
    self.groupedByClass = function() {
        return self.isGroupedBy ? "ngGroupedByIcon" : "ngGroupIcon";
    };
    self.toggleVisible = function() {
        self.visible = !self.visible;
    };
    self.showSortButtonUp = function() {
        return self.sortable ? self.sortDirection === DESC : self.sortable;
    };
    self.showSortButtonDown = function() {
        return self.sortable ? self.sortDirection === ASC : self.sortable;
    };
    self.noSortVisible = function() {
        return !self.sortDirection;
    };
    self.sort = function(evt) {
        if (!self.sortable) {
            return true; 
        }
        var dir = self.sortDirection === ASC ? DESC : ASC;
        self.sortDirection = dir;
        config.sortCallback(self, evt);
        return false;
    };
    self.gripClick = function() {
        clicks++; 
        if (clicks === 1) {
            timer = setTimeout(function() {
                clicks = 0; 
            }, delay);
        } else {
            clearTimeout(timer); 
            config.resizeOnDataCallback(self); 
            clicks = 0; 
        }
    };
    self.gripOnMouseDown = function(event) {
        $scope.isColumnResizing = true;
        if (event.ctrlKey && !self.pinned) {
            self.toggleVisible();
            domUtilityService.BuildStyles($scope, grid);
            return true;
        }
        event.target.parentElement.style.cursor = 'col-resize';
        self.startMousePosition = event.clientX;
        self.origWidth = self.width;
        $(document).mousemove(self.onMouseMove);
        $(document).mouseup(self.gripOnMouseUp);
        return false;
    };
    self.onMouseMove = function(event) {
        var diff = event.clientX - self.startMousePosition;
        var newWidth = diff + self.origWidth;
        self.width = (newWidth < self.minWidth ? self.minWidth : (newWidth > self.maxWidth ? self.maxWidth : newWidth));
        $scope.hasUserChangedGridColumnWidths = true;
        domUtilityService.BuildStyles($scope, grid);
        return false;
    };
    self.gripOnMouseUp = function (event) {
        $(document).off('mousemove', self.onMouseMove);
        $(document).off('mouseup', self.gripOnMouseUp);
        event.target.parentElement.style.cursor = 'default';
        domUtilityService.digest($scope);
        $scope.isColumnResizing = false;
        return false;
    };
    self.copy = function() {
        var ret = new ngColumn(config, $scope, grid, domUtilityService, $templateCache, $utils);
        ret.isClone = true;
        ret.orig = self;
        return ret;
    };
    self.setVars = function (fromCol) {
        self.orig = fromCol;
        self.width = fromCol.width;
        self.groupIndex = fromCol.groupIndex;
        self.isGroupedBy = fromCol.isGroupedBy;
        self.displayName = fromCol.displayName;
        self.index = fromCol.index;
        self.isAggCol = fromCol.isAggCol;
        self.cellClass = fromCol.cellClass;
        self.cellFilter = fromCol.cellFilter;
        self.field = fromCol.field;
        self.aggLabelFilter = fromCol.aggLabelFilter;
        self.visible = fromCol.visible;
        self.sortable = fromCol.sortable;
        self.resizable = fromCol.resizable;
        self.pinnable = fromCol.pinnable;
        self.pinned = fromCol.pinned;
        self.originalIndex = fromCol.originalIndex;
        self.sortDirection = fromCol.sortDirection;
        self.sortingAlgorithm = fromCol.sortingAlgorithm;
        self.headerClass = fromCol.headerClass;
        self.headerCellTemplate = fromCol.headerCellTemplate;
        self.cellTemplate = fromCol.cellTemplate;
        self.cellEditTemplate = fromCol.cellEditTemplate;
    };
};

var ngDimension = function (options) {
    this.outerHeight = null;
    this.outerWidth = null;
    $.extend(this, options);
};
var ngDomAccessProvider = function (grid) {
    this.previousColumn = null;
    this.grid = grid;

};

ngDomAccessProvider.prototype.changeUserSelect = function (elm, value) {
    elm.css({
        '-webkit-touch-callout': value,
        '-webkit-user-select': value,
        '-khtml-user-select': value,
        '-moz-user-select': value === 'none' ? '-moz-none' : value,
        '-ms-user-select': value,
        'user-select': value
    });
};
ngDomAccessProvider.prototype.focusCellElement = function ($scope, index) { 
    if ($scope.selectionProvider.lastClickedRow) {
        var columnIndex = index !== undefined ? index : this.previousColumn;
        var elm = $scope.selectionProvider.lastClickedRow.clone ? $scope.selectionProvider.lastClickedRow.clone.elm : $scope.selectionProvider.lastClickedRow.elm;
        if (columnIndex !== undefined && elm) {
            var columns = angular.element(elm[0].children).filter(function () { return this.nodeType !== 8; }); 
            var i = Math.max(Math.min($scope.renderedColumns.length - 1, columnIndex), 0);
            if (this.grid.config.showSelectionCheckbox && angular.element(columns[i]).scope() && angular.element(columns[i]).scope().col.index === 0) {
                i = 1; 
            }
            if (columns[i]) {
                columns[i].children[1].children[0].focus();
            }
            this.previousColumn = columnIndex;
        }
    }
};
ngDomAccessProvider.prototype.selectionHandlers = function ($scope, elm) {
    var doingKeyDown = false;
    var self = this;

    function keydown (evt) {
        if (evt.keyCode === 16) { 
            self.changeUserSelect(elm, 'none', evt);
            return true;
        } else if (!doingKeyDown) {
            doingKeyDown = true;
            var ret = ngMoveSelectionHandler($scope, elm, evt, self.grid);
            doingKeyDown = false;
            return ret;
        }
        return true;
    }

    elm.bind('keydown', keydown);

    function keyup (evt) {
        if (evt.keyCode === 16) { 
            self.changeUserSelect(elm, 'text', evt);
        }
        return true;
    }

    elm.bind('keyup', keyup);

    elm.on('$destroy', function() {
        elm.off('keydown', keydown);
        elm.off('keyup', keyup);
    });
};
var ngEventProvider = function (grid, $scope, domUtilityService, $timeout) {
    var self = this;
    self.colToMove = undefined;
    self.groupToMove = undefined;
    self.assignEvents = function() {
        if (grid.config.jqueryUIDraggable && !grid.config.enablePinning) {
            grid.$groupPanel.droppable({
                addClasses: false,
                drop: function(event) {
                    self.onGroupDrop(event);
                }
            });

            grid.$groupPanel.on('$destroy', function() {
                grid.$groupPanel = null;
            });
        } else {
            grid.$groupPanel.on('mousedown', self.onGroupMouseDown).on('dragover', self.dragOver).on('drop', self.onGroupDrop);
            grid.$topPanel.on('mousedown', '.ngHeaderScroller', self.onHeaderMouseDown).on('dragover', '.ngHeaderScroller', self.dragOver);

            grid.$groupPanel.on('$destroy', function() {
                if (grid.$groupPanel){
                    grid.$groupPanel.off('mousedown');
                }

                grid.$groupPanel = null;
            });

            if (grid.config.enableColumnReordering) {
                grid.$topPanel.on('drop', '.ngHeaderScroller', self.onHeaderDrop);
            }

            grid.$topPanel.on('$destroy', function() {
                if (grid.$topPanel){
                    grid.$topPanel.off('mousedown');
                }

                if (grid.config.enableColumnReordering && grid.$topPanel) {
                    grid.$topPanel.off('drop');
                }

                grid.$topPanel = null;
            });
        }

        $scope.$on('$destroy', $scope.$watch('renderedColumns', function() {
            $timeout(self.setDraggables);
        }));
    };
    self.dragStart = function(evt){
      evt.dataTransfer.setData('text', ''); 
    };
    self.dragOver = function(evt) {
        evt.preventDefault();
    };
    self.setDraggables = function() {
        if (!grid.config.jqueryUIDraggable) {
            var columns = grid.$root.find('.ngHeaderSortColumn'); 
            angular.forEach(columns, function(col){
                if(col.className && col.className.indexOf("ngHeaderSortColumn") !== -1){
                    col.setAttribute('draggable', 'true');
                    if (col.addEventListener) { 
                        col.addEventListener('dragstart', self.dragStart);

                        angular.element(col).on('$destroy', function() {
                            angular.element(col).off('dragstart', self.dragStart);
                            col.removeEventListener('dragstart', self.dragStart);
                        });
                    }
                }
            });
            if (navigator.userAgent.indexOf("MSIE") !== -1){
                var sortColumn = grid.$root.find('.ngHeaderSortColumn');
                sortColumn.bind('selectstart', function () { 
                    this.dragDrop(); 
                    return false; 
                });
                angular.element(sortColumn).on('$destroy', function() {
                    sortColumn.off('selectstart');
                });
            }
        } else {
            if (grid.$root) {
                grid.$root.find('.ngHeaderSortColumn').draggable({
                    helper: 'clone',
                    appendTo: 'body',
                    stack: 'div',
                    addClasses: false,
                    start: function(event) {
                        self.onHeaderMouseDown(event);
                    }
                }).droppable({
                    drop: function(event) {
                        self.onHeaderDrop(event);
                    }
                });
            }
        }
    };
    self.onGroupMouseDown = function(event) {
        var groupItem = $(event.target);
        if (groupItem[0].className !== 'ngRemoveGroup') {
            var groupItemScope = angular.element(groupItem).scope();
            if (groupItemScope) {
                if (!grid.config.jqueryUIDraggable) {
                    groupItem.attr('draggable', 'true');
                    if(this.addEventListener){
                        this.addEventListener('dragstart', self.dragStart);
                        angular.element(this).on('$destroy', function() {
                            this.removeEventListener('dragstart', self.dragStart); 
                        });
                    }
                    if (navigator.userAgent.indexOf("MSIE") !== -1){
                        groupItem.bind('selectstart', function () { 
                            this.dragDrop(); 
                            return false; 
                        });

                        groupItem.on('$destroy', function() {
                            groupItem.off('selectstart');
                        });
                    }
                }
                self.groupToMove = { header: groupItem, groupName: groupItemScope.group, index: groupItemScope.$index };
            }
        } else {
            self.groupToMove = undefined;
        }
    };
    self.onGroupDrop = function(event) {
        event.stopPropagation();
        var groupContainer;
        var groupScope;
        if (self.groupToMove) {
            groupContainer = $(event.target).closest('.ngGroupElement'); 
            if (groupContainer.context.className === 'ngGroupPanel') {
                $scope.configGroups.splice(self.groupToMove.index, 1);
                $scope.configGroups.push(self.groupToMove.groupName);
            } else {
                groupScope = angular.element(groupContainer).scope();
                if (groupScope) {
                    if (self.groupToMove.index !== groupScope.$index) {
                        $scope.configGroups.splice(self.groupToMove.index, 1);
                        $scope.configGroups.splice(groupScope.$index, 0, self.groupToMove.groupName);
                    }
                }
            }
            self.groupToMove = undefined;
            grid.fixGroupIndexes();
        } else if (self.colToMove) {
            if ($scope.configGroups.indexOf(self.colToMove.col) === -1) {
                groupContainer = $(event.target).closest('.ngGroupElement'); 
                if (groupContainer.context.className === 'ngGroupPanel' || groupContainer.context.className === 'ngGroupPanelDescription ng-binding') {
                    $scope.groupBy(self.colToMove.col);
                } else {
                    groupScope = angular.element(groupContainer).scope();
                    if (groupScope) {
                        $scope.removeGroup(groupScope.$index);
                    }
                }
            }
            self.colToMove = undefined;
        }
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };
    self.onHeaderMouseDown = function(event) {
        var headerContainer = $(event.target).closest('.ngHeaderSortColumn');
        var headerScope = angular.element(headerContainer).scope();
        if (headerScope) {
            self.colToMove = { header: headerContainer, col: headerScope.col };
        }
    };
    self.onHeaderDrop = function(event) {
        if (!self.colToMove || self.colToMove.col.pinned) {
            return;
        }
        var headerContainer = $(event.target).closest('.ngHeaderSortColumn');
        var headerScope = angular.element(headerContainer).scope();
        if (headerScope) {
            if (self.colToMove.col === headerScope.col || headerScope.col.pinned) {
                return;
            }
            $scope.columns.splice(self.colToMove.col.index, 1);
            $scope.columns.splice(headerScope.col.index, 0, self.colToMove.col);
            grid.fixColumnIndexes();
            self.colToMove = undefined;
            domUtilityService.digest($scope);
        }
    };

    self.assignGridEventHandlers = function() {
        if (grid.config.tabIndex === -1) {
            grid.$viewport.attr('tabIndex', domUtilityService.numberOfGrids);
            domUtilityService.numberOfGrids++;
        } else {
            grid.$viewport.attr('tabIndex', grid.config.tabIndex);
        }
        var windowThrottle;
        var windowResize = function(){
            clearTimeout(windowThrottle);
            windowThrottle = setTimeout(function() {
                domUtilityService.RebuildGrid($scope,grid);
            }, 100);
        };
        $(window).on('resize.nggrid', windowResize);
        var parentThrottle;
        var parentResize = function() {
            clearTimeout(parentThrottle);
            parentThrottle = setTimeout(function() {
                domUtilityService.RebuildGrid($scope,grid);
            }, 100);
        };
        $(grid.$root.parent()).on('resize.nggrid', parentResize);

        $scope.$on('$destroy', function(){
            $(window).off('resize.nggrid', windowResize);
        });
    };
    self.assignGridEventHandlers();
    self.assignEvents();
};

var ngFooter = function ($scope, grid) {
    $scope.maxRows = function () {
        var ret = Math.max($scope.totalServerItems, grid.data.length);
        return ret;
    };
     $scope.$on('$destroy', $scope.$watch('totalServerItems',function(n,o){
        $scope.currentMaxPages = $scope.maxPages();
    }));

    $scope.multiSelect = (grid.config.enableRowSelection && grid.config.multiSelect);
    $scope.selectedItemCount = grid.selectedItemCount;
    $scope.maxPages = function () {
        if($scope.maxRows() === 0) {
            return 1;
        }
        return Math.ceil($scope.maxRows() / $scope.pagingOptions.pageSize);
    };

    $scope.pageForward = function() {
        var page = $scope.pagingOptions.currentPage;
        if ($scope.totalServerItems > 0) {
            $scope.pagingOptions.currentPage = Math.min(page + 1, $scope.maxPages());
        } else {
            $scope.pagingOptions.currentPage++;
        }
    };

    $scope.pageBackward = function() {
        var page = $scope.pagingOptions.currentPage;
        $scope.pagingOptions.currentPage = Math.max(page - 1, 1);
    };

    $scope.pageToFirst = function() {
        $scope.pagingOptions.currentPage = 1;
    };

    $scope.pageToLast = function() {
        var maxPages = $scope.maxPages();
        $scope.pagingOptions.currentPage = maxPages;
    };

    $scope.cantPageForward = function() {
        var curPage = $scope.pagingOptions.currentPage;
        var maxPages = $scope.maxPages();
        if ($scope.totalServerItems > 0) {
            return curPage >= maxPages;
        } else {
            return grid.data.length < 1;
        }

    };
    $scope.cantPageToLast = function() {
        if ($scope.totalServerItems > 0) {
            return $scope.cantPageForward();
        } else {
            return true;
        }
    };
    $scope.cantPageBackward = function() {
        var curPage = $scope.pagingOptions.currentPage;
        return curPage <= 1;
    };
};

var ngGrid = function ($scope, options, sortService, domUtilityService, $filter, $templateCache, $utils, $timeout, $parse, $http, $q) {
    var defaults = {
        aggregateTemplate: undefined,
        afterSelectionChange: function() {
        },
        beforeSelectionChange: function() {
            return true;
        },
        checkboxCellTemplate: undefined,
        checkboxHeaderTemplate: undefined,
        columnDefs: undefined,
        data: [],
        dataUpdated: function() {
        },
        enableCellEdit: false,
        enableCellEditOnFocus: false,
        enableCellSelection: false,
        enableColumnResize: false,
        enableColumnReordering: false,
        enableColumnHeavyVirt: false,
        enablePaging: false,
        enablePinning: false,
        enableRowSelection: true,
        enableSorting: true,
        enableHighlighting: false,
        excludeProperties: [],
        filterOptions: {
            filterText: "",
            useExternalFilter: false
        },
        footerRowHeight: 55,
        footerTemplate: undefined,
        forceSyncScrolling: true,
        groups: [],
        groupsCollapsedByDefault: true,
        headerRowHeight: 30,
        headerRowTemplate: undefined,
        jqueryUIDraggable: false,
        jqueryUITheme: false,
        keepLastSelected: true,
        maintainColumnRatios: undefined,
        menuTemplate: undefined,
        multiSelect: true,
        pagingOptions: {
            pageSizes: [250, 500, 1000],
            pageSize: 250,
            currentPage: 1
        },
        pinSelectionCheckbox: false,
        plugins: [],
        primaryKey: undefined,
        rowHeight: 30,
        rowTemplate: undefined,
        selectedItems: [],
        selectWithCheckboxOnly: false,
        showColumnMenu: false,
        showFilter: false,
        showFooter: false,
        showGroupPanel: false,
        showSelectionCheckbox: false,
        sortInfo: {fields: [], columns: [], directions: [] },
        tabIndex: -1,
        totalServerItems: 0,
        useExternalSorting: false,
        i18n: 'en',
        virtualizationThreshold: 50,
	noTabInterference: false
    },
        self = this;
    self.maxCanvasHt = 0;
    self.config = $.extend(defaults, window.ngGrid.config, options);
    self.config.showSelectionCheckbox = (self.config.showSelectionCheckbox && self.config.enableColumnHeavyVirt === false);
    self.config.enablePinning = (self.config.enablePinning && self.config.enableColumnHeavyVirt === false);
    self.config.selectWithCheckboxOnly = (self.config.selectWithCheckboxOnly && self.config.showSelectionCheckbox !== false);
    self.config.pinSelectionCheckbox = self.config.enablePinning;

    if (typeof options.columnDefs === "string") {
        self.config.columnDefs = $scope.$eval(options.columnDefs);
    }
    self.rowCache = [];
    self.rowMap = [];
    self.gridId = "ng" + $utils.newId();
    self.$root = null; 
    self.$groupPanel = null;
    self.$topPanel = null;
    self.$headerContainer = null;
    self.$headerScroller = null;
    self.$headers = null;
    self.$viewport = null;
    self.$canvas = null;
    self.rootDim = self.config.gridDim;
    self.data = [];
    self.lateBindColumns = false;
    self.filteredRows = [];

    self.initTemplates = function() {
        var templates = ['rowTemplate', 'aggregateTemplate', 'headerRowTemplate', 'checkboxCellTemplate', 'checkboxHeaderTemplate', 'menuTemplate', 'footerTemplate'];

        var promises = [];
        angular.forEach(templates, function(template) {
            promises.push( self.getTemplate(template) );
        });

        return $q.all(promises);
    };
    self.getTemplate = function (key) {
        var t = self.config[key];
        var uKey = self.gridId + key + ".html";
        var p = $q.defer();
        if (t && !TEMPLATE_REGEXP.test(t)) {
            $http.get(t, {
                cache: $templateCache
            })
            .success(function(data){
                $templateCache.put(uKey, data);
                p.resolve();
            })
            .error(function(err){
                p.reject("Could not load template: " + t);
            });
        } else if (t) {
            $templateCache.put(uKey, t);
            p.resolve();
        } else {
            var dKey = key + ".html";
            $templateCache.put(uKey, $templateCache.get(dKey));
            p.resolve();
        }

        return p.promise;
    };

    if (typeof self.config.data === "object") {
        self.data = self.config.data; 
    }
    self.calcMaxCanvasHeight = function() {
        var calculatedHeight;
        if(self.config.groups.length > 0){
            calculatedHeight = self.rowFactory.parsedData.filter(function(e) {
                return !e[NG_HIDDEN];
            }).length * self.config.rowHeight;
        } else {
            calculatedHeight = self.filteredRows.length * self.config.rowHeight;
        }
        return calculatedHeight;
    };
    self.elementDims = {
        scrollW: 0,
        scrollH: 0,
        rowIndexCellW: 25,
        rowSelectedCellW: 25,
        rootMaxW: 0,
        rootMaxH: 0
    };
    self.setRenderedRows = function (newRows) {
        $scope.renderedRows.length = newRows.length;
        for (var i = 0; i < newRows.length; i++) {
            if (!$scope.renderedRows[i] || (newRows[i].isAggRow || $scope.renderedRows[i].isAggRow)) {
                $scope.renderedRows[i] = newRows[i].copy();
                $scope.renderedRows[i].collapsed = newRows[i].collapsed;
                if (!newRows[i].isAggRow) {
                    $scope.renderedRows[i].setVars(newRows[i]);
                }
            } else {
                $scope.renderedRows[i].setVars(newRows[i]);
            }
            $scope.renderedRows[i].rowIndex = newRows[i].rowIndex;
            $scope.renderedRows[i].offsetTop = newRows[i].offsetTop;
            $scope.renderedRows[i].selected = newRows[i].selected;
            newRows[i].renderedRowIndex = i;
        }
        self.refreshDomSizes();
        $scope.$emit('ngGridEventRows', newRows);
    };
    self.minRowsToRender = function() {
        var viewportH = $scope.viewportDimHeight() || 1;
        return Math.floor(viewportH / self.config.rowHeight);
    };
    self.refreshDomSizes = function() {
        var dim = new ngDimension();
        dim.outerWidth = self.elementDims.rootMaxW;
        dim.outerHeight = self.elementDims.rootMaxH;
        self.rootDim = dim;
        self.maxCanvasHt = self.calcMaxCanvasHeight();
    };
    self.buildColumnDefsFromData = function () {
        self.config.columnDefs = [];
        var item = self.data[0];
        if (!item) {
            self.lateBoundColumns = true;
            return;
        }
        $utils.forIn(item, function (prop, propName) {
            if (self.config.excludeProperties.indexOf(propName) === -1) {
                self.config.columnDefs.push({
                    field: propName
                });
            }
        });
    };
    self.buildColumns = function() {
        var columnDefs = self.config.columnDefs,
            cols = [];
        if (!columnDefs) {
            self.buildColumnDefsFromData();
            columnDefs = self.config.columnDefs;
        }
        if (self.config.showSelectionCheckbox) {
            cols.push(new ngColumn({
                colDef: {
                    field: '\u2714',
                    width: self.elementDims.rowSelectedCellW,
                    sortable: false,
                    resizable: false,
                    groupable: false,
                    headerCellTemplate: $templateCache.get($scope.gridId + 'checkboxHeaderTemplate.html'),
                    cellTemplate: $templateCache.get($scope.gridId + 'checkboxCellTemplate.html'),
                    pinned: self.config.pinSelectionCheckbox
                },
                index: 0,
                headerRowHeight: self.config.headerRowHeight,
                sortCallback: self.sortData,
                resizeOnDataCallback: self.resizeOnData,
                enableResize: self.config.enableColumnResize,
                enableSort: self.config.enableSorting,
                enablePinning: self.config.enablePinning
            }, $scope, self, domUtilityService, $templateCache, $utils));
        }
        if (columnDefs.length > 0) {
            var checkboxOffset = self.config.showSelectionCheckbox ? 1 : 0;
            var groupOffset = $scope.configGroups.length;
            $scope.configGroups.length = 0;
            angular.forEach(columnDefs, function(colDef, i) {
                i += checkboxOffset;
                var column = new ngColumn({
                    colDef: colDef,
                    index: i + groupOffset,
                    originalIndex: i,
                    headerRowHeight: self.config.headerRowHeight,
                    sortCallback: self.sortData,
                    resizeOnDataCallback: self.resizeOnData,
                    enableResize: self.config.enableColumnResize,
                    enableSort: self.config.enableSorting,
                    enablePinning: self.config.enablePinning,
                    enableCellEdit: self.config.enableCellEdit || self.config.enableCellEditOnFocus,
                    cellEditableCondition: self.config.cellEditableCondition
                }, $scope, self, domUtilityService, $templateCache, $utils);
                var indx = self.config.groups.indexOf(colDef.field);
                if (indx !== -1) {
                    column.isGroupedBy = true;
                    $scope.configGroups.splice(indx, 0, column);
                    column.groupIndex = $scope.configGroups.length;
                }
                cols.push(column);
            });
            $scope.columns = cols;
            if (self.config.groups.length > 0) {
                self.rowFactory.getGrouping(self.config.groups);
            }
        }
    };
    self.configureColumnWidths = function() {
        var asterisksArray = [],
            percentArray = [],
            asteriskNum = 0,
            totalWidth = 0;
        var indexMap = {};
        angular.forEach($scope.columns, function(ngCol, i) {
            if (!$utils.isNullOrUndefined(ngCol.originalIndex)) {
                var origIndex = ngCol.originalIndex;
                if (self.config.showSelectionCheckbox) {
                    if(ngCol.originalIndex === 0 && ngCol.visible){
                        totalWidth += 25;
                    }
                    origIndex--;
                }
                indexMap[origIndex] = i;
            }
        });

        angular.forEach(self.config.columnDefs, function(colDef, i) {
            var ngColumn = $scope.columns[indexMap[i]];

            colDef.index = i;

            var isPercent = false, t;
            if ($utils.isNullOrUndefined(colDef.width)) {
                colDef.width = "*";
            } else { 
                isPercent = isNaN(colDef.width) ? $utils.endsWith(colDef.width, "%") : false;
                t = isPercent ? colDef.width : parseInt(colDef.width, 10);
            }
            if (isNaN(t) && !$scope.hasUserChangedGridColumnWidths) {
                t = colDef.width;
                if (t === 'auto') { 
                    ngColumn.width = ngColumn.minWidth;
                    totalWidth += ngColumn.width;
                    var temp = ngColumn;

                    $scope.$on('$destroy', $scope.$on("ngGridEventData", function () {
                        self.resizeOnData(temp);
                    }));

                    return;
                } else if (t.indexOf("*") !== -1) { 
                    if (ngColumn.visible !== false) {
                        asteriskNum += t.length;
                    }
                    asterisksArray.push(colDef);
                    return;
                } else if (isPercent) { 
                    percentArray.push(colDef);
                    return;
                } else { 
                    throw "unable to parse column width, use percentage (\"10%\",\"20%\", etc...) or \"*\" to use remaining width of grid";
                }
            } else if (ngColumn.visible !== false) {
                totalWidth += ngColumn.width = parseInt(ngColumn.width, 10);
            }
        });
        if (percentArray.length > 0) {
            self.config.maintainColumnRatios = self.config.maintainColumnRatios !== false;
            var percentWidth = 0; 
            var hiddenPercent = 0; 
            angular.forEach(percentArray, function(colDef) {
                var ngColumn = $scope.columns[indexMap[colDef.index]];
                var percent = parseFloat(colDef.width) / 100;
                percentWidth += percent;

                if (!ngColumn.visible) {
                    hiddenPercent += percent;
                }
            });
            var percentWidthUsed = percentWidth - hiddenPercent;
            angular.forEach(percentArray, function(colDef) {
                var ngColumn = $scope.columns[indexMap[colDef.index]];
                var percent = parseFloat(colDef.width) / 100;
                if (hiddenPercent > 0) {
                    percent = percent / percentWidthUsed;
                }
                else {
                    percent = percent / percentWidth;
                }

                var pixelsForPercentBasedWidth = self.rootDim.outerWidth * percentWidth;
                ngColumn.width = pixelsForPercentBasedWidth * percent;
                totalWidth += ngColumn.width;
            });
        }
        if (asterisksArray.length > 0) {
            self.config.maintainColumnRatios = self.config.maintainColumnRatios !== false;
            var remainingWidth = self.rootDim.outerWidth - totalWidth;
            if (self.maxCanvasHt > $scope.viewportDimHeight()) {
                remainingWidth -= domUtilityService.ScrollW;
            }
            var asteriskVal = Math.floor(remainingWidth / asteriskNum);
            angular.forEach(asterisksArray, function(colDef, i) {
                var ngColumn = $scope.columns[indexMap[colDef.index]];
                ngColumn.width = asteriskVal * colDef.width.length;
                if (ngColumn.visible !== false) {
                    totalWidth += ngColumn.width;
                }

                var isLast = (i === (asterisksArray.length - 1));
                if(isLast && totalWidth < self.rootDim.outerWidth){
                    var gridWidthDifference = self.rootDim.outerWidth - totalWidth;
                    if(self.maxCanvasHt > $scope.viewportDimHeight()){
                        gridWidthDifference -= domUtilityService.ScrollW;
                    }
                    ngColumn.width += gridWidthDifference;
                }
            });
        }
    };
    self.init = function() {
        return self.initTemplates().then(function(){
            $scope.selectionProvider = new ngSelectionProvider(self, $scope, $parse);
            $scope.domAccessProvider = new ngDomAccessProvider(self);
            self.rowFactory = new ngRowFactory(self, $scope, domUtilityService, $templateCache, $utils);
            self.searchProvider = new ngSearchProvider($scope, self, $filter);
            self.styleProvider = new ngStyleProvider($scope, self);
            $scope.$on('$destroy', $scope.$watch('configGroups', function(a) {
              var tempArr = [];
              angular.forEach(a, function(item) {
                tempArr.push(item.field || item);
              });
              self.config.groups = tempArr;
              self.rowFactory.filteredRowsChanged();
              $scope.$emit('ngGridEventGroups', a);
            }, true));
             $scope.$on('$destroy', $scope.$watch('columns', function (a) {
                if(!$scope.isColumnResizing){
                    domUtilityService.RebuildGrid($scope, self);
                }
                $scope.$emit('ngGridEventColumns', a);
            }, true));
             $scope.$on('$destroy', $scope.$watch(function() {
                return options.i18n;
            }, function(newLang) {
                $utils.seti18n($scope, newLang);
            }));
            self.maxCanvasHt = self.calcMaxCanvasHeight();

            if (self.config.sortInfo.fields && self.config.sortInfo.fields.length > 0) {
                $scope.$on('$destroy', $scope.$watch(function() {
                    return self.config.sortInfo;
                }, function(sortInfo){
                    if (!sortService.isSorting) {
                        self.sortColumnsInit();
                        $scope.$emit('ngGridEventSorted', self.config.sortInfo);
                    }
                }, true));
            }
        });
    };
    self.resizeOnData = function(col) {
        var longest = col.minWidth;
        var arr = $utils.getElementsByClassName('col' + col.index);
        angular.forEach(arr, function(elem, index) {
            var i;
            if (index === 0) {
                var kgHeaderText = $(elem).find('.ngHeaderText');
                i = $utils.visualLength(kgHeaderText) + 10; 
            } else {
                var ngCellText = $(elem).find('.ngCellText');
                i = $utils.visualLength(ngCellText) + 10; 
            }
            if (i > longest) {
                longest = i;
            }
        });
        col.width = col.longest = Math.min(col.maxWidth, longest + 7); 
        domUtilityService.BuildStyles($scope, self, true);
    };
    self.lastSortedColumns = [];
    self.sortData = function(col, evt) {
        if (evt && evt.shiftKey && self.config.sortInfo) {
            var indx = self.config.sortInfo.columns.indexOf(col);
            if (indx === -1) {
                if (self.config.sortInfo.columns.length === 1) {
                    self.config.sortInfo.columns[0].sortPriority = 1;
                }
                self.config.sortInfo.columns.push(col);
                col.sortPriority = self.config.sortInfo.columns.length;
                self.config.sortInfo.fields.push(col.field);
                self.config.sortInfo.directions.push(col.sortDirection);
                self.lastSortedColumns.push(col);
            } else {
                self.config.sortInfo.directions[indx] = col.sortDirection;
            }
        } else if (!self.config.useExternalSorting || (self.config.useExternalSorting && self.config.sortInfo )) {
            var isArr = $.isArray(col);
            self.config.sortInfo.columns.length = 0;
            self.config.sortInfo.fields.length = 0;
            self.config.sortInfo.directions.length = 0;
            var push = function (c) {
                self.config.sortInfo.columns.push(c);
                self.config.sortInfo.fields.push(c.field);
                self.config.sortInfo.directions.push(c.sortDirection);
                self.lastSortedColumns.push(c);
            };
            if (isArr) {
                angular.forEach(col, function (c, i) {
                    c.sortPriority = i + 1;
                    push(c);
                });
            } else {
                self.clearSortingData(col);
                col.sortPriority = undefined;
                push(col);
            }

            self.sortActual();
            self.searchProvider.evalFilter();
            $scope.$emit('ngGridEventSorted', self.config.sortInfo);
        }
    };
    self.sortColumnsInit = function() {
        if (self.config.sortInfo.columns) {
            self.config.sortInfo.columns.length = 0;
        } else {
            self.config.sortInfo.columns = [];
        }

        var cols = [];
        angular.forEach($scope.columns, function(c) {
            var i = self.config.sortInfo.fields.indexOf(c.field);
            if (i !== -1) {
                c.sortDirection = self.config.sortInfo.directions[i] || 'asc';
                cols[i] = c;
            }
        });

        if(cols.length === 1){
            self.sortData(cols[0]);
        }else{
            self.sortData(cols);
        }
    };
    self.sortActual = function() {
        if (!self.config.useExternalSorting) {
            var tempData = self.data.slice(0);
            angular.forEach(tempData, function(item, i) {
                var e = self.rowMap[i];
                if (e !== undefined) {
                    var v = self.rowCache[e];
                    if (v !== undefined) {
                        item.preSortSelected = v.selected;
                        item.preSortIndex = i;
                    }
                }
            });
            sortService.Sort(self.config.sortInfo, tempData);
            angular.forEach(tempData, function(item, i) {
                self.rowCache[i].entity = item;
                self.rowCache[i].selected = item.preSortSelected;
                self.rowMap[item.preSortIndex] = i;
                delete item.preSortSelected;
                delete item.preSortIndex;
            });
        }
    };

    self.clearSortingData = function (col) {
        if (!col) {
            angular.forEach(self.lastSortedColumns, function (c) {
                c.sortDirection = "";
                c.sortPriority = null;
            });
            self.lastSortedColumns = [];
        } else {
            angular.forEach(self.lastSortedColumns, function (c) {
                if (col.index !== c.index) {
                    c.sortDirection = "";
                    c.sortPriority = null;
                }
            });
            self.lastSortedColumns[0] = col;
            self.lastSortedColumns.length = 1;
        }
    };
    self.fixColumnIndexes = function() {
        for (var i = 0; i < $scope.columns.length; i++) {
            $scope.columns[i].index = i;
        }
    };
    self.fixGroupIndexes = function() {
        angular.forEach($scope.configGroups, function(item, i) {
            item.groupIndex = i + 1;
        });
    };
    $scope.elementsNeedMeasuring = true;
    $scope.columns = [];
    $scope.renderedRows = [];
    $scope.renderedColumns = [];
    $scope.headerRow = null;
    $scope.rowHeight = self.config.rowHeight;
    $scope.jqueryUITheme = self.config.jqueryUITheme;
    $scope.showSelectionCheckbox = self.config.showSelectionCheckbox;
    $scope.enableCellSelection = self.config.enableCellSelection;
    $scope.enableCellEditOnFocus = self.config.enableCellEditOnFocus;
    $scope.footer = null;
    $scope.selectedItems = self.config.selectedItems;
    $scope.multiSelect = self.config.multiSelect;
    $scope.showFooter = self.config.showFooter;
    $scope.footerRowHeight = $scope.showFooter ? self.config.footerRowHeight : 0;
    $scope.showColumnMenu = self.config.showColumnMenu;
    $scope.forceSyncScrolling = self.config.forceSyncScrolling;
    $scope.showMenu = false;
    $scope.configGroups = [];
    $scope.gridId = self.gridId;
    $scope.enablePaging = self.config.enablePaging;
    $scope.pagingOptions = self.config.pagingOptions;
    $scope.i18n = {};
    $utils.seti18n($scope, self.config.i18n);
    $scope.adjustScrollLeft = function (scrollLeft) {
        var colwidths = 0,
            totalLeft = 0,
            x = $scope.columns.length,
            newCols = [],
            dcv = !self.config.enableColumnHeavyVirt;
        var r = 0;
        var addCol = function (c) {
            if (dcv) {
                newCols.push(c);
            } else {
                if (!$scope.renderedColumns[r]) {
                    $scope.renderedColumns[r] = c.copy();
                } else {
                    $scope.renderedColumns[r].setVars(c);
                }
            }
            r++;
        };
        for (var i = 0; i < x; i++) {
            var col = $scope.columns[i];
            if (col.visible !== false) {
                var w = col.width + colwidths;
                if (col.pinned) {
                    addCol(col);
                    var newLeft = i > 0 ? (scrollLeft + totalLeft) : scrollLeft;
                    domUtilityService.setColLeft(col, newLeft, self);
                    totalLeft += col.width;
                } else {
                    if (w >= scrollLeft) {
                        if (colwidths <= scrollLeft + self.rootDim.outerWidth) {
                            addCol(col);
                        }
                    }
                }
                colwidths += col.width;
            }
        }
        if (dcv) {
            $scope.renderedColumns = newCols;
        }
    };
    self.prevScrollTop = 0;
    self.prevScrollIndex = 0;
    $scope.adjustScrollTop = function(scrollTop, force) {
        if (self.prevScrollTop === scrollTop && !force) {
            return;
        }
        if (scrollTop > 0 && self.$viewport[0].scrollHeight - scrollTop <= self.$viewport.outerHeight()) {
            $scope.$emit('ngGridEventScroll');
        }
        var rowIndex = Math.floor(scrollTop / self.config.rowHeight);
        var newRange;
        if (self.filteredRows.length > self.config.virtualizationThreshold) {
            if (self.prevScrollTop < scrollTop && rowIndex < self.prevScrollIndex + SCROLL_THRESHOLD) {
                return;
            }
            if (self.prevScrollTop > scrollTop && rowIndex > self.prevScrollIndex - SCROLL_THRESHOLD) {
                return;
            }
            newRange = new ngRange(Math.max(0, rowIndex - EXCESS_ROWS), rowIndex + self.minRowsToRender() + EXCESS_ROWS);
        } else {
            var maxLen = $scope.configGroups.length > 0 ? self.rowFactory.parsedData.length : self.filteredRows.length;
            newRange = new ngRange(0, Math.max(maxLen, self.minRowsToRender() + EXCESS_ROWS));
        }
        self.prevScrollTop = scrollTop;
        self.rowFactory.UpdateViewableRange(newRange);
        self.prevScrollIndex = rowIndex;
    };
    $scope.toggleShowMenu = function() {
        $scope.showMenu = !$scope.showMenu;
    };
    $scope.toggleSelectAll = function(state, selectOnlyVisible) {
        $scope.selectionProvider.toggleSelectAll(state, false, selectOnlyVisible);
    };
    $scope.totalFilteredItemsLength = function() {
        return self.filteredRows.length;
    };
    $scope.showGroupPanel = function() {
        return self.config.showGroupPanel;
    };
    $scope.topPanelHeight = function() {
        return self.config.showGroupPanel === true ? self.config.headerRowHeight + 32 : self.config.headerRowHeight;
    };

    $scope.viewportDimHeight = function() {
        return Math.max(0, self.rootDim.outerHeight - $scope.topPanelHeight() - $scope.footerRowHeight - 2);
    };
    $scope.groupBy = function (col) {
        if (self.data.length < 1 || !col.groupable  || !col.field) {
            return;
        }
        if (!col.sortDirection) {
            col.sort({ shiftKey: $scope.configGroups.length > 0 ? true : false });
        }

        var indx = $scope.configGroups.indexOf(col);
        if (indx === -1) {
            col.isGroupedBy = true;
            $scope.configGroups.push(col);
            col.groupIndex = $scope.configGroups.length;
        } else {
            $scope.removeGroup(indx);
        }
        self.$viewport.scrollTop(0);
        domUtilityService.digest($scope);
    };
    $scope.removeGroup = function(index) {
        var col = $scope.columns.filter(function(item) {
            return item.groupIndex === (index + 1);
        })[0];
        col.isGroupedBy = false;
        col.groupIndex = 0;
        if ($scope.columns[index].isAggCol) {
            $scope.columns.splice(index, 1);
            $scope.configGroups.splice(index, 1);
            self.fixGroupIndexes();
        }
        if ($scope.configGroups.length === 0) {
            self.fixColumnIndexes();
            domUtilityService.digest($scope);
        }
        $scope.adjustScrollLeft(0);
    };
    $scope.togglePin = function (col) {
        var indexFrom = col.index;
        var indexTo = 0;
        for (var i = 0; i < $scope.columns.length; i++) {
            if (!$scope.columns[i].pinned) {
                break;
            }
            indexTo++;
        }
        if (col.pinned) {
            indexTo = Math.max(col.originalIndex, indexTo - 1);
        }
        col.pinned = !col.pinned;
        $scope.columns.splice(indexFrom, 1);
        $scope.columns.splice(indexTo, 0, col);
        self.fixColumnIndexes();
        domUtilityService.BuildStyles($scope, self, true);
        self.$viewport.scrollLeft(self.$viewport.scrollLeft() - col.width);
    };
    $scope.totalRowWidth = function() {
        var totalWidth = 0,
            cols = $scope.columns;
        for (var i = 0; i < cols.length; i++) {
            if (cols[i].visible !== false) {
                totalWidth += cols[i].width;
            }
        }
        return totalWidth;
    };
    $scope.headerScrollerDim = function() {
        var viewportH = $scope.viewportDimHeight(),
            maxHeight = self.maxCanvasHt,
            vScrollBarIsOpen = (maxHeight > viewportH),
            newDim = new ngDimension();

        newDim.autoFitHeight = true;
        newDim.outerWidth = $scope.totalRowWidth();
        if (vScrollBarIsOpen) {
            newDim.outerWidth += self.elementDims.scrollW;
        } else if ((maxHeight - viewportH) <= self.elementDims.scrollH) { 
            newDim.outerWidth += self.elementDims.scrollW;
        }
        return newDim;
    };
};

var ngRange = function (top, bottom) {
    this.topRow = top;
    this.bottomRow = bottom;
};
var ngRow = function (entity, config, selectionProvider, rowIndex, $utils) {
	this.entity = entity;
	this.config = config;
	this.selectionProvider = selectionProvider;
	this.rowIndex = rowIndex;
	this.utils = $utils;
	this.selected = selectionProvider.getSelection(entity);
	this.cursor = this.config.enableRowSelection && !this.config.selectWithCheckboxOnly ? 'pointer' : 'default';
	this.beforeSelectionChange = config.beforeSelectionChangeCallback;
	this.afterSelectionChange = config.afterSelectionChangeCallback;
	this.offsetTop = this.rowIndex * config.rowHeight;
	this.rowDisplayIndex = 0;
};

ngRow.prototype.setSelection = function (isSelected) {
	this.selectionProvider.setSelection(this, isSelected);
	this.selectionProvider.lastClickedRow = this;
};
ngRow.prototype.continueSelection = function (event) {
	this.selectionProvider.ChangeSelection(this, event);
};
ngRow.prototype.ensureEntity = function (expected) {
	if (this.entity !== expected) {
		this.entity = expected;
		this.selected = this.selectionProvider.getSelection(this.entity);
	}
};
ngRow.prototype.toggleSelected = function (event) {
	if (!this.config.enableRowSelection && !this.config.enableCellSelection) {
		return true;
	}
	var element = event.target || event;
	if (element.type === "checkbox" && element.parentElement.className !== "ngSelectionCell ng-scope") {
		return true;
	}
	if (this.config.selectWithCheckboxOnly && element.type !== "checkbox") {
		this.selectionProvider.lastClickedRow = this;
		return true;
	} 
	if (this.beforeSelectionChange(this, event)) {
		this.continueSelection(event);
	}
	return false;
};
ngRow.prototype.alternatingRowClass = function () {
	var isEven = (this.rowIndex % 2) === 0;
	var classes = {
		'ngRow' : true,
		'selected': this.selected,
		'even': isEven,
		'odd': !isEven,
		'ui-state-default': this.config.jqueryUITheme && isEven,
		'ui-state-active': this.config.jqueryUITheme && !isEven
	};
	return classes;
};
ngRow.prototype.getProperty = function (path) {
	return this.utils.evalProperty(this.entity, path);
};
ngRow.prototype.copy = function () {
	this.clone = new ngRow(this.entity, this.config, this.selectionProvider, this.rowIndex, this.utils);
	this.clone.isClone = true;
	this.clone.elm = this.elm;
	this.clone.orig = this;
	return this.clone;
};
ngRow.prototype.setVars = function (fromRow) {
	fromRow.clone = this;
	this.entity = fromRow.entity;
	this.selected = fromRow.selected;
    this.orig = fromRow;
};
var ngRowFactory = function (grid, $scope, domUtilityService, $templateCache, $utils) {
    var self = this;
    self.aggCache = {};
    self.parentCache = []; 
    self.dataChanged = true;
    self.parsedData = [];
    self.rowConfig = {};
    self.selectionProvider = $scope.selectionProvider;
    self.rowHeight = 30;
    self.numberOfAggregates = 0;
    self.groupedData = undefined;
    self.rowHeight = grid.config.rowHeight;
    self.rowConfig = {
        enableRowSelection: grid.config.enableRowSelection,
        rowClasses: grid.config.rowClasses,
        selectedItems: $scope.selectedItems,
        selectWithCheckboxOnly: grid.config.selectWithCheckboxOnly,
        beforeSelectionChangeCallback: grid.config.beforeSelectionChange,
        afterSelectionChangeCallback: grid.config.afterSelectionChange,
        jqueryUITheme: grid.config.jqueryUITheme,
        enableCellSelection: grid.config.enableCellSelection,
        rowHeight: grid.config.rowHeight
    };

    self.renderedRange = new ngRange(0, grid.minRowsToRender() + EXCESS_ROWS);
    self.buildEntityRow = function(entity, rowIndex) {
        return new ngRow(entity, self.rowConfig, self.selectionProvider, rowIndex, $utils);
    };

    self.buildAggregateRow = function(aggEntity, rowIndex) {
        var agg = self.aggCache[aggEntity.aggIndex]; 
        if (!agg) {
            agg = new ngAggregate(aggEntity, self, self.rowConfig.rowHeight, grid.config.groupsCollapsedByDefault);
            self.aggCache[aggEntity.aggIndex] = agg;
        }
        agg.rowIndex = rowIndex;
        agg.offsetTop = rowIndex * self.rowConfig.rowHeight;
        return agg;
    };
    self.UpdateViewableRange = function(newRange) {
        self.renderedRange = newRange;
        self.renderedChange();
    };
    self.filteredRowsChanged = function() {
        if (grid.lateBoundColumns && grid.filteredRows.length > 0) {
            grid.config.columnDefs = undefined;
            grid.buildColumns();
            grid.lateBoundColumns = false;
            $scope.$evalAsync(function() {
                $scope.adjustScrollLeft(0);
            });
        }
        self.dataChanged = true;
        if (grid.config.groups.length > 0) {
            self.getGrouping(grid.config.groups);
        }
        self.UpdateViewableRange(self.renderedRange);
    };

    self.renderedChange = function() {
        if (!self.groupedData || grid.config.groups.length < 1) {
            self.renderedChangeNoGroups();
            grid.refreshDomSizes();
            return;
        }
        self.wasGrouped = true;
        self.parentCache = [];
        var x = 0;
        var temp = self.parsedData.filter(function (e) {
            if (e.isAggRow) {
                if (e.parent && e.parent.collapsed) {
                    return false;
                }
                return true;
            }
            if (!e[NG_HIDDEN]) {
                e.rowIndex = x++;
            }
            return !e[NG_HIDDEN];
        });
        self.totalRows = temp.length;
        var rowArr = [];
        for (var i = self.renderedRange.topRow; i < self.renderedRange.bottomRow; i++) {
            if (temp[i]) {
                temp[i].offsetTop = i * grid.config.rowHeight;
                rowArr.push(temp[i]);
            }
        }
        grid.setRenderedRows(rowArr);
    };

    self.renderedChangeNoGroups = function () {
        var rowArr = [];
        for (var i = self.renderedRange.topRow; i < self.renderedRange.bottomRow; i++) {
            if (grid.filteredRows[i]) {
                grid.filteredRows[i].rowIndex = i;
                grid.filteredRows[i].offsetTop = i * grid.config.rowHeight;
                rowArr.push(grid.filteredRows[i]);
            }
        }
        grid.setRenderedRows(rowArr);
    };

    self.fixRowCache = function () {
        var newLen = grid.data.length;
        var diff = newLen - grid.rowCache.length;
        if (diff < 0) {
            grid.rowCache.length = grid.rowMap.length = newLen;
        } else {
            for (var i = grid.rowCache.length; i < newLen; i++) {
                grid.rowCache[i] = grid.rowFactory.buildEntityRow(grid.data[i], i);
            }
        }
    };
    self.parseGroupData = function(g) {
        if (g.values) {
            for (var x = 0; x < g.values.length; x++){
                self.parentCache[self.parentCache.length - 1].children.push(g.values[x]);
                self.parsedData.push(g.values[x]);
            }
        } else {
            for (var prop in g) {
                if (prop === NG_FIELD || prop === NG_DEPTH || prop === NG_COLUMN) {
                    continue;
                } else if (g.hasOwnProperty(prop)) {
                    var agg = self.buildAggregateRow({
                        gField: g[NG_FIELD],
                        gLabel: prop,
                        gDepth: g[NG_DEPTH],
                        isAggRow: true,
                        '_ng_hidden_': false,
                        children: [],
                        aggChildren: [],
                        aggIndex: self.numberOfAggregates,
                        aggLabelFilter: g[NG_COLUMN].aggLabelFilter
                    }, 0);
                    self.numberOfAggregates++;
                    agg.parent = self.parentCache[agg.depth - 1];
                    if (agg.parent) {
                        agg.parent.collapsed = false;
                        agg.parent.aggChildren.push(agg);
                    }
                    self.parsedData.push(agg);
                    self.parentCache[agg.depth] = agg;
                    self.parseGroupData(g[prop]);
                }
            }
        }
    };
    self.getGrouping = function(groups) {
        self.aggCache = [];
        self.numberOfAggregates = 0;
        self.groupedData = {};
        var rows = grid.filteredRows,
            maxDepth = groups.length,
            cols = $scope.columns;

        function filterCols(cols, group) {
            return cols.filter(function(c) {
                return c.field === group;
            });
        }

        for (var x = 0; x < rows.length; x++) {
            var model = rows[x].entity;
            if (!model) {
                return;
            }
            rows[x][NG_HIDDEN] = grid.config.groupsCollapsedByDefault;
            var ptr = self.groupedData;

            for (var y = 0; y < groups.length; y++) {
                var group = groups[y];

                var col = filterCols(cols, group)[0];

                var val = $utils.evalProperty(model, group);
                val = val ? val.toString() : 'null';
                if (!ptr[val]) {
                    ptr[val] = {};
                }
                if (!ptr[NG_FIELD]) {
                    ptr[NG_FIELD] = group;
                }
                if (!ptr[NG_DEPTH]) {
                    ptr[NG_DEPTH] = y;
                }
                if (!ptr[NG_COLUMN]) {
                    ptr[NG_COLUMN] = col;
                }
                ptr = ptr[val];
            }
            if (!ptr.values) {
                ptr.values = [];
            }
            ptr.values.push(rows[x]);
        }
        if(cols.length > 0) {
            for (var z = 0; z < groups.length; z++) {
                if (!cols[z].isAggCol && z <= maxDepth) {
                    cols.splice(0, 0, new ngColumn({
                        colDef: {
                            field: '',
                            width: 25,
                            sortable: false,
                            resizable: false,
                            headerCellTemplate: '<div class="ngAggHeader"></div>',
                            pinned: grid.config.pinSelectionCheckbox
                        },
                        enablePinning: grid.config.enablePinning,
                        isAggCol: true,
                        headerRowHeight: grid.config.headerRowHeight
                    }, $scope, grid, domUtilityService, $templateCache, $utils));
                }
            }
        }

        grid.fixColumnIndexes();
        $scope.adjustScrollLeft(0);
        self.parsedData.length = 0;
        self.parseGroupData(self.groupedData);
        self.fixRowCache();
    };

    if (grid.config.groups.length > 0 && grid.filteredRows.length > 0) {
        self.getGrouping(grid.config.groups);
    }
};
var ngSearchProvider = function ($scope, grid, $filter) {
    var self = this,
        searchConditions = [];

    self.extFilter = grid.config.filterOptions.useExternalFilter;
    $scope.showFilter = grid.config.showFilter;
    $scope.filterText = '';

    self.fieldMap = {};

    var convertToFieldMap = function(obj) {
        var fieldMap = {};
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                fieldMap[prop.toLowerCase()] = obj[prop];
            }
        }
        return fieldMap;
    };

    var searchEntireRow = function(condition, item, fieldMap){
        var result;
        for (var prop in item) {
            if (item.hasOwnProperty(prop)) {
                var c = fieldMap[prop.toLowerCase()];
                if (!c) {
                    continue;
                }
                var pVal = item[prop];
                if(typeof pVal === 'object' && !(pVal instanceof Date)) {
                    var objectFieldMap = convertToFieldMap(c);
                    result = searchEntireRow(condition, pVal, objectFieldMap);
                    if (result) {
                        return true;
                    }
                } else {
                    var f = null,
                        s = null;
                    if (c && c.cellFilter) {
                        s = c.cellFilter.split(':');
                        f = $filter(s[0]);
                    }
                    if (pVal !== null && pVal !== undefined) {
                        if (typeof f === "function") {
                            var filterRes = f(pVal, s[1].slice(1,-1)).toString();
                            result = condition.regex.test(filterRes);
                        } else {
                            result = condition.regex.test(pVal.toString());
                        }
                        if (result) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };

    var searchColumn = function(condition, item){
        var result;
        var col = self.fieldMap[condition.columnDisplay];
        if (!col) {
            return false;
        }
        var sp = col.cellFilter.split(':');
        var filter = col.cellFilter ? $filter(sp[0]) : null;
        var value = item[condition.column] || item[col.field.split('.')[0]];
        if (value === null || value === undefined) {
            return false;
        }
        if (typeof filter === "function") {
            var filterResults = filter(typeof value === "object" ? evalObject(value, col.field) : value, sp[1]).toString();
            result = condition.regex.test(filterResults);
        }
        else {
            result = condition.regex.test(typeof value === "object" ? evalObject(value, col.field).toString() : value.toString());
        }
        if (result) {
            return true;
        }
        return false;
    };

    var filterFunc = function(item) {
        for (var x = 0, len = searchConditions.length; x < len; x++) {
            var condition = searchConditions[x];
            var result;
            if (!condition.column) {
                result = searchEntireRow(condition, item, self.fieldMap);
            } else {
                result = searchColumn(condition, item);
            }
            if(!result) {
                return false;
            }
        }
        return true;
    };

    self.evalFilter = function () {
        if (searchConditions.length === 0) {
            grid.filteredRows = grid.rowCache;
        } else {
            grid.filteredRows = grid.rowCache.filter(function(row) {
                return filterFunc(row.entity);
            });
        }
        for (var i = 0; i < grid.filteredRows.length; i++)
        {
            grid.filteredRows[i].rowIndex = i;

        }
        grid.rowFactory.filteredRowsChanged();
    };
    var evalObject = function (obj, columnName) {
        if (typeof obj !== "object" || typeof columnName !== "string") {
            return obj;
        }
        var args = columnName.split('.');
        var cObj = obj;
        if (args.length > 1) {
            for (var i = 1, len = args.length; i < len; i++) {
                cObj = cObj[args[i]];
                if (!cObj) {
                    return obj;
                }
            }
            return cObj;
        }
        return obj;
    };
    var getRegExp = function (str, modifiers) {
        try {
            return new RegExp(str, modifiers);
        } catch (err) {
            return new RegExp(str.replace(/(\^|\$|\(|\)|<|>|\[|\]|\{|\}|\\|\||\.|\*|\+|\?)/g, '\\$1'));
        }
    };
    var buildSearchConditions = function (a) {
        searchConditions = [];
        var qStr;
        if (!(qStr = $.trim(a))) {
            return;
        }
        var columnFilters = qStr.split(";");
        for (var i = 0; i < columnFilters.length; i++) {
            var args = columnFilters[i].split(':');
            if (args.length > 1) {
                var columnName = $.trim(args[0]);
                var columnValue = $.trim(args[1]);
                if (columnName && columnValue) {
                    searchConditions.push({
                        column: columnName,
                        columnDisplay: columnName.replace(/\s+/g, '').toLowerCase(),
                        regex: getRegExp(columnValue, 'i')
                    });
                }
            } else {
                var val = $.trim(args[0]);
                if (val) {
                    searchConditions.push({
                        column: '',
                        regex: getRegExp(val, 'i')
                    });
                }
            }
        }
    };

    if (!self.extFilter) {
         $scope.$on('$destroy', $scope.$watch('columns', function (cs) {
            for (var i = 0; i < cs.length; i++) {
                var col = cs[i];
                if (col.field) {
                    if(col.field.match(/\./g)){
                        var properties = col.field.split('.');
                        var currentProperty = self.fieldMap;
                        for(var j = 0; j < properties.length - 1; j++) {
                            currentProperty[ properties[j] ] =  currentProperty[ properties[j] ] || {};
                            currentProperty = currentProperty[properties[j]];
                        }
                        currentProperty[ properties[properties.length - 1] ] = col;
                    } else {
                        self.fieldMap[col.field.toLowerCase()] = col;
                    }
                }
                if (col.displayName) {
                    self.fieldMap[col.displayName.toLowerCase().replace(/\s+/g, '')] = col;
                }
            }
        }));
    }

     $scope.$on('$destroy', $scope.$watch(
        function () {
            return grid.config.filterOptions.filterText;
        },
        function (a) {
            $scope.filterText = a;
        }
    ));

    $scope.$on('$destroy', $scope.$watch('filterText', function(a){
        if (!self.extFilter) {
            $scope.$emit('ngGridEventFilter', a);
            buildSearchConditions(a);
            self.evalFilter();
        }
    }));
};

var ngSelectionProvider = function (grid, $scope, $parse) {
    var self = this;
    self.multi = grid.config.multiSelect;
    self.selectedItems = grid.config.selectedItems;
    self.selectedIndex = grid.config.selectedIndex;
    self.lastClickedRow = undefined;
    self.ignoreSelectedItemChanges = false; 
    self.pKeyParser = $parse(grid.config.primaryKey);
    self.ChangeSelection = function (rowItem, evt) {
        var charCode = evt.which || evt.keyCode;
        var isUpDownKeyPress = (charCode === 40 || charCode === 38);

        if (evt && evt.shiftKey && !evt.keyCode && self.multi && grid.config.enableRowSelection) {
            if (self.lastClickedRow) {
                var rowsArr;
                if ($scope.configGroups.length > 0) {
                    rowsArr = grid.rowFactory.parsedData.filter(function(row) {
                        return !row.isAggRow;
                    });
                }
                else {
                    rowsArr = grid.filteredRows;
                }

                var thisIndx = rowItem.rowIndex;
                var prevIndx = self.lastClickedRowIndex;
                if (thisIndx === prevIndx) {
                    return false;
                }

                if (thisIndx < prevIndx) {
                    thisIndx = thisIndx ^ prevIndx;
                    prevIndx = thisIndx ^ prevIndx;
                    thisIndx = thisIndx ^ prevIndx;
                    thisIndx--;
                }
                else {
                    prevIndx++;
                }

                var rows = [];
                for (; prevIndx <= thisIndx; prevIndx++) {
                    rows.push(rowsArr[prevIndx]);
                }

                if (rows[rows.length - 1].beforeSelectionChange(rows, evt)) {
                    for (var i = 0; i < rows.length; i++) {
                        var ri = rows[i];
                        var selectionState = ri.selected;
                        ri.selected = !selectionState;
                        if (ri.clone) {
                            ri.clone.selected = ri.selected;
                        }
                        var index = self.selectedItems.indexOf(ri.entity);
                        if (index === -1) {
                            self.selectedItems.push(ri.entity);
                        }
                        else {
                            self.selectedItems.splice(index, 1);
                        }
                    }
                    rows[rows.length - 1].afterSelectionChange(rows, evt);
                }
                self.lastClickedRow = rowItem;
                self.lastClickedRowIndex = rowItem.rowIndex;

                return true;
            }
        }
        else if (!self.multi) {
            if (self.lastClickedRow === rowItem) {
                self.setSelection(self.lastClickedRow, grid.config.keepLastSelected ? true : !rowItem.selected);
            } else {
                if (self.lastClickedRow) {
                    self.setSelection(self.lastClickedRow, false);
                }
                self.setSelection(rowItem, !rowItem.selected);
            }
        }
        else if (!evt.keyCode || isUpDownKeyPress && !grid.config.selectWithCheckboxOnly) {
            self.setSelection(rowItem, !rowItem.selected);
        }
        self.lastClickedRow = rowItem;
        self.lastClickedRowIndex = rowItem.rowIndex;
        return true;
    };

    self.getSelection = function (entity) {
        return self.getSelectionIndex(entity) !== -1;
    };

    self.getSelectionIndex = function (entity) {
        var index = -1;
        if (grid.config.primaryKey) {
            var val = self.pKeyParser(entity);
            angular.forEach(self.selectedItems, function (c, k) {
                if (val === self.pKeyParser(c)) {
                    index = k;
                }
            });
        }
        else {
            index = self.selectedItems.indexOf(entity);
        }
        return index;
    };
    self.setSelection = function (rowItem, isSelected) {
        if(grid.config.enableRowSelection){
            if (!isSelected) {
                var indx = self.getSelectionIndex(rowItem.entity);
                if (indx !== -1) {
                    self.selectedItems.splice(indx, 1);
                }
            }
            else {
                if (self.getSelectionIndex(rowItem.entity) === -1) {
                    if (!self.multi && self.selectedItems.length > 0) {
                        self.toggleSelectAll(false, true);
                    }
                    self.selectedItems.push(rowItem.entity);
                }
            }
            rowItem.selected = isSelected;
            if (rowItem.orig) {
                rowItem.orig.selected = isSelected;
            }
            if (rowItem.clone) {
                rowItem.clone.selected = isSelected;
            }
            rowItem.afterSelectionChange(rowItem);
        }
    };
    self.toggleSelectAll = function (checkAll, bypass, selectFiltered) {
        var rows = selectFiltered ? grid.filteredRows : grid.rowCache;
        if (bypass || grid.config.beforeSelectionChange(rows, checkAll)) {
            var selectedlength = self.selectedItems.length;
            if (selectedlength > 0) {
                self.selectedItems.length = 0;
            }
            for (var i = 0; i < rows.length; i++) {
                rows[i].selected = checkAll;
                if (rows[i].clone) {
                    rows[i].clone.selected = checkAll;
                }
                if (checkAll) {
                    self.selectedItems.push(rows[i].entity);
                }
            }
            if (!bypass) {
                grid.config.afterSelectionChange(rows, checkAll);
            }
        }
    };
};

var ngStyleProvider = function($scope, grid) {
    $scope.headerCellStyle = function(col) {
        return { "height": col.headerRowHeight + "px" };
    };
    $scope.rowStyle = function (row) {
        var ret = { "top": row.offsetTop + "px", "height": $scope.rowHeight + "px" };
        if (row.isAggRow) {
            ret.left = row.offsetLeft;
        }
        return ret;
    };
    $scope.canvasStyle = function() {
        return { "height": grid.maxCanvasHt + "px" };
    };
    $scope.headerScrollerStyle = function() {
        return { "height": grid.config.headerRowHeight + "px" };
    };
    $scope.topPanelStyle = function() {
        return { "width": grid.rootDim.outerWidth + "px", "height": $scope.topPanelHeight() + "px" };
    };
    $scope.headerStyle = function() {
        return { "width": grid.rootDim.outerWidth + "px", "height": grid.config.headerRowHeight + "px" };
    };
    $scope.groupPanelStyle = function () {
        return { "width": grid.rootDim.outerWidth + "px", "height": "32px" };
    };
    $scope.viewportStyle = function() {
        return { "width": grid.rootDim.outerWidth + "px", "height": $scope.viewportDimHeight() + "px" };
    };
    $scope.footerStyle = function() {
        return { "width": grid.rootDim.outerWidth + "px", "height": $scope.footerRowHeight + "px" };
    };
};
ngGridDirectives.directive('ngCellHasFocus', ['$domUtilityService',
    function (domUtilityService) {
        var focusOnInputElement = function($scope, elm) {
            $scope.isFocused = true;
            domUtilityService.digest($scope);

            $scope.$broadcast('ngGridEventStartCellEdit');
            $scope.$emit('ngGridEventStartCellEdit');

            $scope.$on('$destroy', $scope.$on('ngGridEventEndCellEdit', function() {
                $scope.isFocused = false;
                domUtilityService.digest($scope);
            }));
        };

        return function($scope, elm) {
            var isFocused = false;
            var isCellEditableOnMouseDown = false;

            $scope.editCell = function() {
                if(!$scope.enableCellEditOnFocus) {
                    setTimeout(function() {
                        focusOnInputElement($scope,elm);
                    }, 0);
                }
            };

            function mousedown (evt) {
                if($scope.enableCellEditOnFocus) {
                    isCellEditableOnMouseDown = true;
                } else {
                    elm.focus();
                }
                return true;
            }

            function click (evt) {
                if($scope.enableCellEditOnFocus) {
                    evt.preventDefault();
                    isCellEditableOnMouseDown = false;
                    focusOnInputElement($scope,elm);
                }
            }

            elm.bind('mousedown', mousedown);

            elm.bind('click', click);
            function focus (evt) {
                isFocused = true;
                if($scope.enableCellEditOnFocus && !isCellEditableOnMouseDown) {
                    focusOnInputElement($scope,elm);
                }
                return true;
            }

            elm.bind('focus', focus);

            function blur() {
                isFocused = false;
                return true;
            }

            elm.bind('blur', blur);

            function keydown (evt) {
                if(!$scope.enableCellEditOnFocus) {
                    if (isFocused && evt.keyCode !== 37 && evt.keyCode !== 38 && evt.keyCode !== 39 && evt.keyCode !== 40 && evt.keyCode !== 9 && !evt.shiftKey && evt.keyCode !== 13) {
                        focusOnInputElement($scope,elm);
                    }
                    if (isFocused && evt.shiftKey && (evt.keyCode >= 65 && evt.keyCode <= 90)) {
                        focusOnInputElement($scope, elm);
                    }
                    if (evt.keyCode === 27) {
                        elm.focus();
                    }
                }
                return true;
            }

            elm.bind('keydown', keydown);

            elm.on('$destroy', function() {
                elm.off('mousedown', mousedown);
                elm.off('click', click);
                elm.off('focus', focus);
                elm.off('blur', blur);
                elm.off('keydown', keydown);
            });
        };
    }]);

ngGridDirectives.directive('ngCellText',
  function () {
      return function(scope, elm) {
          function mouseover (evt) {
              evt.preventDefault();
          }
          elm.bind('mouseover', mouseover);

          function mouseleave(evt) {
              evt.preventDefault();
          }
          elm.bind('mouseleave', mouseleave);

          elm.on('$destroy', function() {
            elm.off('mouseover', mouseover);
            elm.off('mouseleave', mouseleave);
          });
      };
  });
ngGridDirectives.directive('ngCell', ['$compile', '$domUtilityService', function ($compile, domUtilityService) {
    var ngCell = {
        scope: false,
        compile: function() {
            return {
                pre: function($scope, iElement) {
                    var html;
                    var cellTemplate = $scope.col.cellTemplate.replace(COL_FIELD, 'row.entity.' + $scope.col.field);

                    if ($scope.col.enableCellEdit) {
                        html =  $scope.col.cellEditTemplate;
                        html = html.replace(CELL_EDITABLE_CONDITION, $scope.col.cellEditableCondition);
                        html = html.replace(DISPLAY_CELL_TEMPLATE, cellTemplate);
                        html = html.replace(EDITABLE_CELL_TEMPLATE, $scope.col.editableCellTemplate.replace(COL_FIELD, 'row.entity.' + $scope.col.field));
                    } else {
                        html = cellTemplate;
                    }

                    var cellElement = $(html);
                    iElement.append(cellElement);
                    $compile(cellElement)($scope);
                    if ($scope.enableCellSelection && cellElement[0].className.indexOf('ngSelectionCell') === -1) {
                        cellElement[0].setAttribute('tabindex', 0);
                        cellElement.addClass('ngCellElement');
                    }
                },
                post: function($scope, iElement) {
                    if ($scope.enableCellSelection) {
                        $scope.domAccessProvider.selectionHandlers($scope, iElement);
                    }
                    $scope.$on('$destroy', $scope.$on('ngGridEventDigestCell', function() {
                        domUtilityService.digest($scope);
                    }));
                }
            };
        }
    };
    return ngCell;
}]);

ngGridDirectives.directive('ngEditCellIf', [function () {
  return {
    transclude: 'element',
    priority: 1000,
    terminal: true,
    restrict: 'A',
    compile: function (e, a, transclude) {
      return function (scope, element, attr) {

        var childElement;
        var childScope;
         scope.$on('$destroy', scope.$watch(attr['ngEditCellIf'], function (newValue) {
          if (childElement) {
            childElement.remove();
            childElement = undefined;
          }
          if (childScope) {
            childScope.$destroy();
            childScope = undefined;
          }

          if (newValue) {
            childScope = scope.$new();
            transclude(childScope, function (clone) {
              childElement = clone;
              element.after(clone);
            });
          }
        }));
      };
    }
  };
}]);
ngGridDirectives.directive('ngGridFooter', ['$compile', '$templateCache', function ($compile, $templateCache) {
    var ngGridFooter = {
        scope: false,
        compile: function () {
            return {
                pre: function ($scope, iElement) {
                    if (iElement.children().length === 0) {
                        iElement.append($compile($templateCache.get($scope.gridId + 'footerTemplate.html'))($scope));
                    }
                }
            };
        }
    };
    return ngGridFooter;
}]);
ngGridDirectives.directive('ngGridMenu', ['$compile', '$templateCache', function ($compile, $templateCache) {
    var ngGridMenu = {
        scope: false,
        compile: function () {
            return {
                pre: function ($scope, iElement) {
                    if (iElement.children().length === 0) {
                        iElement.append($compile($templateCache.get($scope.gridId + 'menuTemplate.html'))($scope));
                    }
                }
            };
        }
    };
    return ngGridMenu;
}]);
ngGridDirectives.directive('ngGrid', ['$compile', '$filter', '$templateCache', '$sortService', '$domUtilityService', '$utilityService', '$timeout', '$parse', '$http', '$q', function ($compile, $filter, $templateCache, sortService, domUtilityService, $utils, $timeout, $parse, $http, $q) {
    var ngGridDirective = {
        scope: true,
        compile: function() {
            return {
                pre: function($scope, iElement, iAttrs) {
                    var $element = $(iElement);
                    var options = $scope.$eval(iAttrs.ngGrid);
                    options.gridDim = new ngDimension({ outerHeight: $($element).height(), outerWidth: $($element).width() });

                    var grid = new ngGrid($scope, options, sortService, domUtilityService, $filter, $templateCache, $utils, $timeout, $parse, $http, $q);
                    $scope.$on('$destroy', function cleanOptions() {
                        options.gridDim = null;
                        options.selectRow = null;
                        options.selectItem = null;
                        options.selectAll = null;
                        options.selectVisible = null;
                        options.groupBy = null;
                        options.sortBy = null;
                        options.gridId = null;
                        options.ngGrid = null;
                        options.$gridScope = null;
                        options.$gridServices = null;

                        $scope.domAccessProvider.grid = null;
                        angular.element(grid.styleSheet).remove();
                        grid.styleSheet = null;
                    });

                    return grid.init().then(function() {
                        if (typeof options.columnDefs === "string") {
                            $scope.$on('$destroy', $scope.$parent.$watch(options.columnDefs, function (a) {
                                if (!a) {
                                    grid.refreshDomSizes();
                                    grid.buildColumns();
                                    return;
                                }
                                grid.lateBoundColumns = false;
                                $scope.columns = [];
                                grid.config.columnDefs = a;
                                grid.buildColumns();
                                grid.eventProvider.assignEvents();
                                domUtilityService.RebuildGrid($scope, grid);
                            }, true));
                        }
                        else {
                            grid.buildColumns();
                        }
                        if (typeof options.totalServerItems === "string") {
                            $scope.$on('$destroy', $scope.$parent.$watch(options.totalServerItems, function (newTotal, oldTotal) {
                                if (!angular.isDefined(newTotal)) {
                                    $scope.totalServerItems = 0;
                                }
                                else {
                                    $scope.totalServerItems = newTotal;
                                }
                            }));
                        }
                        else {
                            $scope.totalServerItems = 0;
                        }
                        if (typeof options.data === "string") {
                            var dataWatcher = function (a) {
                                grid.data = $.extend([], a);
                                grid.rowFactory.fixRowCache();
                                angular.forEach(grid.data, function (item, j) {
                                    var indx = grid.rowMap[j] || j;
                                    if (grid.rowCache[indx]) {
                                        grid.rowCache[indx].ensureEntity(item);
                                    }
                                    grid.rowMap[indx] = j;
                                });
                                grid.searchProvider.evalFilter();
                                grid.configureColumnWidths();
                                grid.refreshDomSizes();
                                if (grid.config.sortInfo.fields.length > 0) {
                                    grid.sortColumnsInit();
                                    $scope.$emit('ngGridEventSorted', grid.config.sortInfo);
                                }
                                $scope.$emit("ngGridEventData", grid.gridId);
                            };
                            $scope.$on('$destroy', $scope.$parent.$watch(options.data, dataWatcher));
                            $scope.$on('$destroy', $scope.$parent.$watch(options.data + '.length', function() {
                                dataWatcher($scope.$eval(options.data));
								$scope.adjustScrollTop(grid.$viewport.scrollTop(), true);
                            }));
                        }
                        grid.footerController = new ngFooter($scope, grid);
                        iElement.addClass("ngGrid").addClass(grid.gridId.toString());
                        if (!options.enableHighlighting) {
                            iElement.addClass("unselectable");
                        }
                        if (options.jqueryUITheme) {
                            iElement.addClass('ui-widget');
                        }
                        iElement.append($compile($templateCache.get('gridTemplate.html'))($scope));
                        domUtilityService.AssignGridContainers($scope, iElement, grid);
                        grid.eventProvider = new ngEventProvider(grid, $scope, domUtilityService, $timeout);
                        options.selectRow = function (rowIndex, state) {
                            if (grid.rowCache[rowIndex]) {
                                if (grid.rowCache[rowIndex].clone) {
                                    grid.rowCache[rowIndex].clone.setSelection(state ? true : false);
                                } 
                                grid.rowCache[rowIndex].setSelection(state ? true : false);
                            }
                        };
                        options.selectItem = function (itemIndex, state) {
                            options.selectRow(grid.rowMap[itemIndex], state);
                        };
                        options.selectAll = function (state) {
                            $scope.toggleSelectAll(state);
                        };
                        options.selectVisible = function (state) {
                            $scope.toggleSelectAll(state, true);
                        };
                        options.groupBy = function (field) {
                            if (field) {
                                $scope.groupBy($scope.columns.filter(function(c) {
                                    return c.field === field;
                                })[0]);
                            } else {
                                var arr = $.extend(true, [], $scope.configGroups);
                                angular.forEach(arr, $scope.groupBy);
                            }
                        };
                        options.sortBy = function (field) {
                            var col = $scope.columns.filter(function (c) {
                                return c.field === field;
                            })[0];
                            if (col) {
                                col.sort();
                            }
                        };
                        options.gridId = grid.gridId;
                        options.ngGrid = grid;
                        options.$gridScope = $scope;
                        options.$gridServices = { SortService: sortService, DomUtilityService: domUtilityService, UtilityService: $utils };

                        $scope.$on('$destroy', $scope.$on('ngGridEventDigestGrid', function(){
                            domUtilityService.digest($scope.$parent);
                        }));
                        $scope.$on('$destroy', $scope.$on('ngGridEventDigestGridParent', function(){
                            domUtilityService.digest($scope.$parent);
                        }));
                        $scope.$evalAsync(function() {
                            $scope.adjustScrollLeft(0);
                        });
                        angular.forEach(options.plugins, function (p) {
                            if (typeof p === "function") {
                                p = new p(); 
                            }
                            var newScope = $scope.$new();
                            p.init(newScope, grid, options.$gridServices);
                            options.plugins[$utils.getInstanceType(p)] = p;

                            $scope.$on('$destroy', function() {
                                newScope.$destroy();
                            });
                        });
                        if (typeof options.init === "function") {
                            options.init(grid, $scope);
                        }
                        return null;
                    });
                }
            };
        }
    };
    return ngGridDirective;
}]);

ngGridDirectives.directive('ngHeaderCell', ['$compile', function($compile) {
    var ngHeaderCell = {
        scope: false,
        compile: function() {
            return {
                pre: function($scope, iElement) {
                    iElement.append($compile($scope.col.headerCellTemplate)($scope));
                }
            };
        }
    };
    return ngHeaderCell;
}]);
ngGridDirectives.directive('ngHeaderRow', ['$compile', '$templateCache', function ($compile, $templateCache) {
    var ngHeaderRow = {
        scope: false,
        compile: function () {
            return {
                pre: function ($scope, iElement) {
                    if (iElement.children().length === 0) {
                        iElement.append($compile($templateCache.get($scope.gridId + 'headerRowTemplate.html'))($scope));
                    }
                }
            };
        }
    };
    return ngHeaderRow;
}]);
ngGridDirectives.directive('ngInput', [function() {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ngModel) {
            var oldCellValue;
            var dereg = scope.$watch('ngModel', function() {
                oldCellValue = ngModel.$modelValue;
                dereg(); 
            });

            function keydown (evt) {
                switch (evt.keyCode) {
                    case 37: 
                    case 38: 
                    case 39: 
                    case 40: 
                        evt.stopPropagation();
                        break;
                    case 27: 
                        if (!scope.$$phase) {
                            scope.$apply(function() {
                                ngModel.$setViewValue(oldCellValue);
                                elm.blur();
                            });
                        }
                        break;
                    case 13: 
                        if(scope.enableCellEditOnFocus && scope.totalFilteredItemsLength() - 1 > scope.row.rowIndex && scope.row.rowIndex > 0  || scope.col.enableCellEdit) {
                            elm.blur();
                        }
                        break;
                }

                return true;
            }
            elm.bind('keydown', keydown);

            function click (evt) {
                evt.stopPropagation();
            }

            elm.bind('click', click);
            function mousedown (evt) {
                evt.stopPropagation();
            }

            elm.bind('mousedown', mousedown);

            elm.on('$destroy', function() {
                elm.off('keydown', keydown);
                elm.off('click', click);
                elm.off('mousedown', mousedown);
            });

            scope.$on('$destroy', scope.$on('ngGridEventStartCellEdit', function () {
                elm.focus();
                elm.select();
            }));

            angular.element(elm).bind('blur', function () {
                scope.$emit('ngGridEventEndCellEdit');
            });
        }
    };
}]);

ngGridDirectives.directive('ngRow', ['$compile', '$domUtilityService', '$templateCache', function ($compile, domUtilityService, $templateCache) {
    var ngRow = {
        scope: false,
        compile: function() {
            return {
                pre: function($scope, iElement) {
                    $scope.row.elm = iElement;
                    if ($scope.row.clone) {
                        $scope.row.clone.elm = iElement;
                    }
                    if ($scope.row.isAggRow) {
                        var html = $templateCache.get($scope.gridId + 'aggregateTemplate.html');
                        if ($scope.row.aggLabelFilter) {
                            html = html.replace(CUSTOM_FILTERS, '| ' + $scope.row.aggLabelFilter);
                        } else {
                            html = html.replace(CUSTOM_FILTERS, "");
                        }
                        iElement.append($compile(html)($scope));
                    } else {
                        iElement.append($compile($templateCache.get($scope.gridId + 'rowTemplate.html'))($scope));
                    }
					$scope.$on('$destroy', $scope.$on('ngGridEventDigestRow', function(){
						domUtilityService.digest($scope);
					}));
                }
            };
        }
    };
    return ngRow;
}]);
ngGridDirectives.directive('ngViewport', [function() {
    return function($scope, elm) {
        var isMouseWheelActive;
        var prevScollLeft;
        var prevScollTop = 0;
        var ensureDigest = function() {
            if (!$scope.$root.$$phase) {
                $scope.$digest();
            }
        };
        var scrollTimer;

        function scroll (evt) {
            var scrollLeft = evt.target.scrollLeft,
                scrollTop = evt.target.scrollTop;
            if ($scope.$headerContainer) {
                $scope.$headerContainer.scrollLeft(scrollLeft);
            }
            $scope.adjustScrollLeft(scrollLeft);
            $scope.adjustScrollTop(scrollTop);
            if ($scope.forceSyncScrolling) {
                ensureDigest();
            } else {
                clearTimeout(scrollTimer);
                scrollTimer = setTimeout(ensureDigest, 150);
            }
            prevScollLeft = scrollLeft;
            prevScollTop = scrollTop;
            isMouseWheelActive = false;
            return true;
        }

        elm.bind('scroll', scroll);

        function mousewheel() {
            isMouseWheelActive = true;
            if (elm.focus) { elm.focus(); }
            return true;
        }

        elm.bind("mousewheel DOMMouseScroll", mousewheel);

        elm.on('$destroy', function() {
            elm.off('scroll', scroll);
            elm.off('mousewheel DOMMouseScroll', mousewheel);
        });

        if (!$scope.enableCellSelection) {
            $scope.domAccessProvider.selectionHandlers($scope, elm);
        }
    };
}]);
window.ngGrid.i18n['da'] = {
    ngAggregateLabel: 'artikler',
    ngGroupPanelDescription: 'Grupér rækker udfra en kolonne ved at trække dens overskift hertil.',
    ngSearchPlaceHolder: 'Søg...',
    ngMenuText: 'Vælg kolonner:',
    ngShowingItemsLabel: 'Viste rækker:',
    ngTotalItemsLabel: 'Rækker totalt:',
    ngSelectedItemsLabel: 'Valgte rækker:',
    ngPageSizeLabel: 'Side størrelse:',
    ngPagerFirstTitle: 'Første side',
    ngPagerNextTitle: 'Næste side',
    ngPagerPrevTitle: 'Forrige side',
    ngPagerLastTitle: 'Sidste side'
};
window.ngGrid.i18n['de'] = {
    ngAggregateLabel: 'eintrag',
    ngGroupPanelDescription: 'Ziehen Sie eine Spaltenüberschrift hierhin um nach dieser Spalte zu gruppieren.',
    ngSearchPlaceHolder: 'Suche...',
    ngMenuText: 'Spalten auswählen:',
    ngShowingItemsLabel: 'Zeige Einträge:',
    ngTotalItemsLabel: 'Einträge gesamt:',
    ngSelectedItemsLabel: 'Ausgewählte Einträge:',
    ngPageSizeLabel: 'Einträge pro Seite:',
    ngPagerFirstTitle: 'Erste Seite',
    ngPagerNextTitle: 'Nächste Seite',
    ngPagerPrevTitle: 'Vorherige Seite',
    ngPagerLastTitle: 'Letzte Seite'
};
window.ngGrid.i18n['en'] = {
    ngAggregateLabel: 'items',
    ngGroupPanelDescription: 'Drag a column header here and drop it to group by that column.',
    ngSearchPlaceHolder: 'Search...',
    ngMenuText: 'Choose Columns:',
    ngShowingItemsLabel: 'Showing Items:',
    ngTotalItemsLabel: 'Total Items:',
    ngSelectedItemsLabel: 'Selected Items:',
    ngPageSizeLabel: 'Page Size:',
    ngPagerFirstTitle: 'First Page',
    ngPagerNextTitle: 'Next Page',
    ngPagerPrevTitle: 'Previous Page',
    ngPagerLastTitle: 'Last Page'
};
window.ngGrid.i18n['es'] = {
    ngAggregateLabel: 'Artículos',
    ngGroupPanelDescription: 'Arrastre un encabezado de columna aquí y soltarlo para agrupar por esa columna.',
    ngSearchPlaceHolder: 'Buscar...',
    ngMenuText: 'Elegir columnas:',
    ngShowingItemsLabel: 'Artículos Mostrando:',
    ngTotalItemsLabel: 'Artículos Totales:',
    ngSelectedItemsLabel: 'Artículos Seleccionados:',
    ngPageSizeLabel: 'Tamaño de Página:',
    ngPagerFirstTitle: 'Primera Página',
    ngPagerNextTitle: 'Página Siguiente',
    ngPagerPrevTitle: 'Página Anterior',
    ngPagerLastTitle: 'Última Página'
};
window.ngGrid.i18n['fa'] = {
    ngAggregateLabel: 'موردها',
    ngGroupPanelDescription: 'یک عنوان ستون اینجا را بردار و به گروهی از آن ستون بیانداز.',
    ngSearchPlaceHolder: 'جستجو...',
    ngMenuText: 'انتخاب ستون\u200cها:',
    ngShowingItemsLabel: 'نمایش موردها:',
    ngTotalItemsLabel: 'همهٔ موردها:',
    ngSelectedItemsLabel: 'موردهای انتخاب\u200cشده:',
    ngPageSizeLabel: 'اندازهٔ صفحه:',
    ngPagerFirstTitle: 'صفحهٔ اول',
    ngPagerNextTitle: 'صفحهٔ بعد',
    ngPagerPrevTitle: 'صفحهٔ قبل',
    ngPagerLastTitle: 'آخرین صفحه'
};

window.ngGrid.i18n['fr'] = {
    ngAggregateLabel: 'articles',
    ngGroupPanelDescription: 'Faites glisser un en-tête de colonne ici et déposez-le vers un groupe par cette colonne.',
    ngSearchPlaceHolder: 'Recherche...',
    ngMenuText: 'Choisir des colonnes:',
    ngShowingItemsLabel: 'Articles Affichage des:',
    ngTotalItemsLabel: 'Nombre total d\'articles:',
    ngSelectedItemsLabel: 'Éléments Articles:',
    ngPageSizeLabel: 'Taille de page:',
    ngPagerFirstTitle: 'Première page',
    ngPagerNextTitle: 'Page Suivante',
    ngPagerPrevTitle: 'Page précédente',
    ngPagerLastTitle: 'Dernière page'
};
window.ngGrid.i18n['nl'] = {
    ngAggregateLabel: 'items',
    ngGroupPanelDescription: 'Sleep hier een kolomkop om op te groeperen.',
    ngSearchPlaceHolder: 'Zoeken...',
    ngMenuText: 'Kies kolommen:',
    ngShowingItemsLabel: 'Toon items:',
    ngTotalItemsLabel: 'Totaal items:',
    ngSelectedItemsLabel: 'Geselecteerde items:',
    ngPageSizeLabel: 'Pagina grootte:, ',
    ngPagerFirstTitle: 'Eerste pagina',
    ngPagerNextTitle: 'Volgende pagina',
    ngPagerPrevTitle: 'Vorige pagina',
    ngPagerLastTitle: 'Laatste pagina'
};

window.ngGrid.i18n['pt-br'] = {
    ngAggregateLabel: 'itens',
    ngGroupPanelDescription: 'Arraste e solte uma coluna aqui para agrupar por essa coluna',
    ngSearchPlaceHolder: 'Procurar...',
    ngMenuText: 'Selecione as colunas:',
    ngShowingItemsLabel: 'Mostrando os Itens:',
    ngTotalItemsLabel: 'Total de Itens:',
    ngSelectedItemsLabel: 'Items Selecionados:',
    ngPageSizeLabel: 'Tamanho da Página:',
    ngPagerFirstTitle: 'Primeira Página',
    ngPagerNextTitle: 'Próxima Página',
    ngPagerPrevTitle: 'Página Anterior',
    ngPagerLastTitle: 'Última Página'
};

window.ngGrid.i18n['zh-cn'] = {
    ngAggregateLabel: '条目',
    ngGroupPanelDescription: '拖曳表头到此处以进行分组',
    ngSearchPlaceHolder: '搜索...',
    ngMenuText: '数据分组与选择列：',
    ngShowingItemsLabel: '当前显示条目：',
    ngTotalItemsLabel: '条目总数：',
    ngSelectedItemsLabel: '选中条目：',
    ngPageSizeLabel: '每页显示数：',
    ngPagerFirstTitle: '回到首页',
    ngPagerNextTitle: '下一页',
    ngPagerPrevTitle: '上一页',
    ngPagerLastTitle: '前往尾页' 
};

window.ngGrid.i18n['zh-tw'] = {
    ngAggregateLabel: '筆',
    ngGroupPanelDescription: '拖拉表頭到此處以進行分組',
    ngSearchPlaceHolder: '搜尋...',
    ngMenuText: '選擇欄位：',
    ngShowingItemsLabel: '目前顯示筆數：',
    ngTotalItemsLabel: '總筆數：',
    ngSelectedItemsLabel: '選取筆數：',
    ngPageSizeLabel: '每頁顯示：',
    ngPagerFirstTitle: '第一頁',
    ngPagerNextTitle: '下一頁',
    ngPagerPrevTitle: '上一頁',
    ngPagerLastTitle: '最後頁'
};

angular.module('ngGrid').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('aggregateTemplate.html',
    "<div ng-click=\"row.toggleExpand()\" ng-style=\"rowStyle(row)\" class=\"ngAggregate\">\r" +
    "\n" +
    "    <span class=\"ngAggregateText\">{{row.label CUSTOM_FILTERS}} ({{row.totalChildren()}} {{AggItemsLabel}})</span>\r" +
    "\n" +
    "    <div class=\"{{row.aggClass()}}\"></div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );
  $templateCache.put('cellEditTemplate.html',
    "<div ng-cell-has-focus ng-dblclick=\"CELL_EDITABLE_CONDITION && editCell()\">\r" +
    "\n" +
    "\t<div ng-edit-cell-if=\"!(isFocused && CELL_EDITABLE_CONDITION)\">\t\r" +
    "\n" +
    "\t\tDISPLAY_CELL_TEMPLATE\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div ng-edit-cell-if=\"isFocused && CELL_EDITABLE_CONDITION\">\r" +
    "\n" +
    "\t\tEDITABLE_CELL_TEMPLATE\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );
  $templateCache.put('cellTemplate.html',
    "<div class=\"ngCellText\" ng-class=\"col.colIndex()\"><span ng-cell-text>{{COL_FIELD CUSTOM_FILTERS}}</span></div>"
  );
  $templateCache.put('checkboxCellTemplate.html',
    "<div class=\"ngSelectionCell\"><input tabindex=\"-1\" class=\"ngSelectionCheckbox\" type=\"checkbox\" ng-checked=\"row.selected\" /></div>"
  );
  $templateCache.put('checkboxHeaderTemplate.html',
    "<input class=\"ngSelectionHeader\" type=\"checkbox\" ng-show=\"multiSelect\" ng-model=\"allSelected\" ng-change=\"toggleSelectAll(allSelected, true)\"/>"
  );
  $templateCache.put('editableCellTemplate.html',
    "<input ng-class=\"'colt' + col.index\" ng-input=\"COL_FIELD\" ng-model=\"COL_FIELD\" />"
  );
  $templateCache.put('footerTemplate.html',
    "<div ng-show=\"showFooter\" class=\"ngFooterPanel\" ng-class=\"{'ui-widget-content': jqueryUITheme, 'ui-corner-bottom': jqueryUITheme}\" ng-style=\"footerStyle()\">\r" +
    "\n" +
    "    <div class=\"ngTotalSelectContainer\" >\r" +
    "\n" +
    "        <div class=\"ngFooterTotalItems\" ng-class=\"{'ngNoMultiSelect': !multiSelect}\" >\r" +
    "\n" +
    "            <span class=\"ngLabel\">{{i18n.ngTotalItemsLabel}} {{maxRows()}}</span><span ng-show=\"filterText.length > 0\" class=\"ngLabel\">({{i18n.ngShowingItemsLabel}} {{totalFilteredItemsLength()}})</span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"ngFooterSelectedItems\" ng-show=\"multiSelect\">\r" +
    "\n" +
    "            <span class=\"ngLabel\">{{i18n.ngSelectedItemsLabel}} {{selectedItems.length}}</span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"ngPagerContainer\" style=\"float: right; margin-top: 10px;\" ng-show=\"enablePaging\" ng-class=\"{'ngNoMultiSelect': !multiSelect}\">\r" +
    "\n" +
    "        <div style=\"float:left; margin-right: 10px;\" class=\"ngRowCountPicker\">\r" +
    "\n" +
    "            <span style=\"float: left; margin-top: 3px;\" class=\"ngLabel\">{{i18n.ngPageSizeLabel}}</span>\r" +
    "\n" +
    "            <select style=\"float: left;height: 27px; width: 100px\" ng-model=\"pagingOptions.pageSize\" >\r" +
    "\n" +
    "                <option ng-repeat=\"size in pagingOptions.pageSizes\">{{size}}</option>\r" +
    "\n" +
    "            </select>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div style=\"float:left; margin-right: 10px; line-height:25px;\" class=\"ngPagerControl\" style=\"float: left; min-width: 135px;\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"ngPagerButton\" ng-click=\"pageToFirst()\" ng-disabled=\"cantPageBackward()\" title=\"{{i18n.ngPagerFirstTitle}}\"><div class=\"ngPagerFirstTriangle\"><div class=\"ngPagerFirstBar\"></div></div></button>\r" +
    "\n" +
    "            <button type=\"button\" class=\"ngPagerButton\" ng-click=\"pageBackward()\" ng-disabled=\"cantPageBackward()\" title=\"{{i18n.ngPagerPrevTitle}}\"><div class=\"ngPagerFirstTriangle ngPagerPrevTriangle\"></div></button>\r" +
    "\n" +
    "            <input class=\"ngPagerCurrent\" min=\"1\" max=\"{{currentMaxPages}}\" type=\"number\" style=\"width:50px; height: 24px; margin-top: 1px; padding: 0 4px;\" ng-model=\"pagingOptions.currentPage\"/>\r" +
    "\n" +
    "            <span class=\"ngGridMaxPagesNumber\" ng-show=\"maxPages() > 0\">/ {{maxPages()}}</span>\r" +
    "\n" +
    "            <button type=\"button\" class=\"ngPagerButton\" ng-click=\"pageForward()\" ng-disabled=\"cantPageForward()\" title=\"{{i18n.ngPagerNextTitle}}\"><div class=\"ngPagerLastTriangle ngPagerNextTriangle\"></div></button>\r" +
    "\n" +
    "            <button type=\"button\" class=\"ngPagerButton\" ng-click=\"pageToLast()\" ng-disabled=\"cantPageToLast()\" title=\"{{i18n.ngPagerLastTitle}}\"><div class=\"ngPagerLastTriangle\"><div class=\"ngPagerLastBar\"></div></div></button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );
  $templateCache.put('gridTemplate.html',
    "<div class=\"ngTopPanel\" ng-class=\"{'ui-widget-header':jqueryUITheme, 'ui-corner-top': jqueryUITheme}\" ng-style=\"topPanelStyle()\">\r" +
    "\n" +
    "    <div class=\"ngGroupPanel\" ng-show=\"showGroupPanel()\" ng-style=\"groupPanelStyle()\">\r" +
    "\n" +
    "        <div class=\"ngGroupPanelDescription\" ng-show=\"configGroups.length == 0\">{{i18n.ngGroupPanelDescription}}</div>\r" +
    "\n" +
    "        <ul ng-show=\"configGroups.length > 0\" class=\"ngGroupList\">\r" +
    "\n" +
    "            <li class=\"ngGroupItem\" ng-repeat=\"group in configGroups\">\r" +
    "\n" +
    "                <span class=\"ngGroupElement\">\r" +
    "\n" +
    "                    <span class=\"ngGroupName\">{{group.displayName}}\r" +
    "\n" +
    "                        <span ng-click=\"removeGroup($index)\" class=\"ngRemoveGroup\">x</span>\r" +
    "\n" +
    "                    </span>\r" +
    "\n" +
    "                    <span ng-hide=\"$last\" class=\"ngGroupArrow\"></span>\r" +
    "\n" +
    "                </span>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"ngHeaderContainer\" ng-style=\"headerStyle()\">\r" +
    "\n" +
    "        <div ng-header-row class=\"ngHeaderScroller\" ng-style=\"headerScrollerStyle()\"></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div ng-grid-menu></div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"ngViewport\" unselectable=\"on\" ng-viewport ng-class=\"{'ui-widget-content': jqueryUITheme}\" ng-style=\"viewportStyle()\">\r" +
    "\n" +
    "    <div class=\"ngCanvas\" ng-style=\"canvasStyle()\">\r" +
    "\n" +
    "        <div ng-style=\"rowStyle(row)\" ng-repeat=\"row in renderedRows\" ng-click=\"row.toggleSelected($event)\" ng-class=\"row.alternatingRowClass()\" ng-row></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div ng-grid-footer></div>\r" +
    "\n"
  );
  $templateCache.put('headerCellTemplate.html',
    "<div class=\"ngHeaderSortColumn {{col.headerClass}}\" ng-style=\"{'cursor': col.cursor}\" ng-class=\"{ 'ngSorted': !col.noSortVisible() }\">\r" +
    "\n" +
    "    <div ng-click=\"col.sort($event)\" ng-class=\"'colt' + col.index\" class=\"ngHeaderText\">{{col.displayName}}</div>\r" +
    "\n" +
    "    <div class=\"ngSortButtonDown\" ng-click=\"col.sort($event)\" ng-show=\"col.showSortButtonDown()\"></div>\r" +
    "\n" +
    "    <div class=\"ngSortButtonUp\" ng-click=\"col.sort($event)\" ng-show=\"col.showSortButtonUp()\"></div>\r" +
    "\n" +
    "    <div class=\"ngSortPriority\">{{col.sortPriority}}</div>\r" +
    "\n" +
    "    <div ng-class=\"{ ngPinnedIcon: col.pinned, ngUnPinnedIcon: !col.pinned }\" ng-click=\"togglePin(col)\" ng-show=\"col.pinnable\"></div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div ng-show=\"col.resizable\" class=\"ngHeaderGrip\" ng-click=\"col.gripClick($event)\" ng-mousedown=\"col.gripOnMouseDown($event)\"></div>\r" +
    "\n"
  );
  $templateCache.put('headerRowTemplate.html',
    "<div ng-style=\"{ height: col.headerRowHeight }\" ng-repeat=\"col in renderedColumns\" ng-class=\"col.colIndex()\" class=\"ngHeaderCell\">\r" +
    "\n" +
    "\t<div class=\"ngVerticalBar\" ng-style=\"{height: col.headerRowHeight}\" ng-class=\"{ ngVerticalBarVisible: !$last }\">&nbsp;</div>\r" +
    "\n" +
    "\t<div ng-header-cell></div>\r" +
    "\n" +
    "</div>"
  );
  $templateCache.put('menuTemplate.html',
    "<div ng-show=\"showColumnMenu || showFilter\"  class=\"ngHeaderButton\" ng-click=\"toggleShowMenu()\">\r" +
    "\n" +
    "    <div class=\"ngHeaderButtonArrow\"></div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div ng-show=\"showMenu\" class=\"ngColMenu\">\r" +
    "\n" +
    "    <div ng-show=\"showFilter\">\r" +
    "\n" +
    "        <input placeholder=\"{{i18n.ngSearchPlaceHolder}}\" type=\"text\" ng-model=\"filterText\"/>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div ng-show=\"showColumnMenu\">\r" +
    "\n" +
    "        <span class=\"ngMenuText\">{{i18n.ngMenuText}}</span>\r" +
    "\n" +
    "        <ul class=\"ngColList\">\r" +
    "\n" +
    "            <li class=\"ngColListItem\" ng-repeat=\"col in columns | ngColumns\">\r" +
    "\n" +
    "                <label><input ng-disabled=\"col.pinned\" type=\"checkbox\" class=\"ngColListCheckbox\" ng-model=\"col.visible\"/>{{col.displayName}}</label>\r" +
    "\n" +
    "\t\t\t\t<a title=\"Group By\" ng-class=\"col.groupedByClass()\" ng-show=\"col.groupable && col.visible\" ng-click=\"groupBy(col)\"></a>\r" +
    "\n" +
    "\t\t\t\t<span class=\"ngGroupingNumber\" ng-show=\"col.groupIndex > 0\">{{col.groupIndex}}</span>          \r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );
  $templateCache.put('rowTemplate.html',
    "<div ng-style=\"{ 'cursor': row.cursor }\" ng-repeat=\"col in renderedColumns\" ng-class=\"col.colIndex()\" class=\"ngCell {{col.cellClass}}\">\r" +
    "\n" +
    "\t<div class=\"ngVerticalBar\" ng-style=\"{height: rowHeight}\" ng-class=\"{ ngVerticalBarVisible: !$last }\">&nbsp;</div>\r" +
    "\n" +
    "\t<div ng-cell></div>\r" +
    "\n" +
    "</div>"
  );

}]);

}(window, jQuery));

(function(window, document) {

// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('ngCsv.config', []).
  value('ngCsv.config', {
      debug: true
  }).
  config(['$compileProvider', function($compileProvider){
    if (angular.isDefined($compileProvider.urlSanitizationWhitelist)) {
      $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|data):/);
    } else {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|data):/);
    }
  }]);

// Modules
angular.module('ngCsv.directives', []);
angular.module('ngCsv',
    [
        'ngCsv.config',
        'ngCsv.directives',
        'ngSanitize'
    ]);
/**
 * ng-csv module
 * Export Javascript's arrays to csv files from the browser
 *
 * Author: asafdav - https://github.com/asafdav
 */
angular.module('ngCsv.directives', []).
  directive('ngCsv', ['$parse', function ($parse) {
    return {
      restrict: 'AC',
      replace: true,
      transclude: true,
      scope: {
        data:'&ngCsv',
        filename:'@filename',
        header: '&csvHeader',
        txtDelim: '@textDelimiter',
        fieldSep: '@fieldSeparator',
        ngClick: '&'
      },
      controller: [
        '$scope',
        '$element',
        '$attrs',
        '$transclude',
        function ($scope, $element, $attrs, $transclude) {
          var stringifyCell = function(data) {
            if (typeof data === 'string') {
              data = data.replace(/"/g, '""'); // Escape double qoutes
              if ($scope.txtDelim) data = $scope.txtDelim + data + $scope.txtDelim;
              return data;
            }

            if (typeof data === 'boolean') {
              return data ? 'TRUE' : 'FALSE';
            }

            return data;
          };

          $scope.csv = '';

          $scope.$watch(function (newValue) {
            $scope.buildCsv();
          }, true);

          $scope.buildCsv = function () {
            var data = $scope.data();
            var csvContent = 'data:text/csv;charset=utf-8,';

            // Check if there's a provided header array
            var header = $scope.header();
            if (header) {
              var encodingArray = [];
              angular.forEach(header, function (title) {
                this.push(title);
              }, encodingArray);

              var headerString = encodingArray.join($scope.fieldSep || ',');
              csvContent += headerString + '\r\n';
            }

            // Process the data
            angular.forEach(data, function (row, index) {
              var infoArray = [];
              angular.forEach(row, function (field) {
                this.push(stringifyCell(field));
              }, infoArray);
              dataString = infoArray.join($scope.fieldSep || ',');
              csvContent += index < data.length ? dataString + '\r\n' : dataString;
            });

            $scope.csv = encodeURI(csvContent);
            return $scope.csv;
          };

          $scope.getFilename = function () {
            return $scope.filename || 'download.csv';
          };
        }
      ],
      template: '<div class="csv-wrap">' +
        '<div class="element" ng-transclude></div>' +
        '<a class="hidden-link" ng-hide="true" ng-href="{{ csv }}"' +
        ' download="{{ getFilename() }}"></a>' +
        '</div>',
      link: function (scope, element, attrs) {
        var subject = angular.element(element.children()[0]),
            link = angular.element(element.children()[1]);

        subject.bind('click', function (e) {
          link[0].click();
          if (!!scope.ngClick) {
            scope.ngClick();
          }
        });
      }
    };
  }]);
})(window, document);

(function(b){b.gritter={};b.gritter.options={position:"",class_name:"",fade_in_speed:"medium",fade_out_speed:1000,time:6000};b.gritter.add=function(f){try{return a.add(f||{})}catch(d){var c="Gritter Error: "+d;(typeof(console)!="undefined"&&console.error)?console.error(c,f):alert(c)}};b.gritter.remove=function(d,c){a.removeSpecific(d,c||{})};b.gritter.removeAll=function(c){a.stop(c||{})};var a={position:"",fade_in_speed:"",fade_out_speed:"",time:"",_custom_timer:0,_item_count:0,_is_setup:0,_tpl_close:'<a class="gritter-close" href="#" tabindex="1">Close Notification</a>',_tpl_title:'<span class="gritter-title">[[title]]</span>',_tpl_item:'<div id="gritter-item-[[number]]" class="gritter-item-wrapper [[item_class]]" style="display:none" role="alert"><div class="gritter-top"></div><div class="gritter-item">[[close]][[image]]<div class="[[class_name]]">[[title]]<p>[[text]]</p></div><div style="clear:both"></div></div><div class="gritter-bottom"></div></div>',_tpl_wrap:'<div id="gritter-notice-wrapper"></div>',add:function(g){if(typeof(g)=="string"){g={text:g}}if(g.text===null){throw'You must supply "text" parameter.'}if(!this._is_setup){this._runSetup()}var k=g.title,n=g.text,e=g.image||"",l=g.sticky||false,m=g.class_name||b.gritter.options.class_name,j=b.gritter.options.position,d=g.time||"";this._verifyWrapper();this._item_count++;var f=this._item_count,i=this._tpl_item;b(["before_open","after_open","before_close","after_close"]).each(function(p,q){a["_"+q+"_"+f]=(b.isFunction(g[q]))?g[q]:function(){}});this._custom_timer=0;if(d){this._custom_timer=d}var c=(e!="")?'<img src="'+e+'" class="gritter-image" />':"",h=(e!="")?"gritter-with-image":"gritter-without-image";if(k){k=this._str_replace("[[title]]",k,this._tpl_title)}else{k=""}i=this._str_replace(["[[title]]","[[text]]","[[close]]","[[image]]","[[number]]","[[class_name]]","[[item_class]]"],[k,n,this._tpl_close,c,this._item_count,h,m],i);if(this["_before_open_"+f]()===false){return false}b("#gritter-notice-wrapper").addClass(j).append(i);var o=b("#gritter-item-"+this._item_count);o.fadeIn(this.fade_in_speed,function(){a["_after_open_"+f](b(this))});if(!l){this._setFadeTimer(o,f)}b(o).bind("mouseenter mouseleave",function(p){if(p.type=="mouseenter"){if(!l){a._restoreItemIfFading(b(this),f)}}else{if(!l){a._setFadeTimer(b(this),f)}}a._hoverState(b(this),p.type)});b(o).find(".gritter-close").click(function(){a.removeSpecific(f,{},null,true);return false;});return f},_countRemoveWrapper:function(c,d,f){d.remove();this["_after_close_"+c](d,f);if(b(".gritter-item-wrapper").length==0){b("#gritter-notice-wrapper").remove()}},_fade:function(g,d,j,f){var j=j||{},i=(typeof(j.fade)!="undefined")?j.fade:true,c=j.speed||this.fade_out_speed,h=f;this["_before_close_"+d](g,h);if(f){g.unbind("mouseenter mouseleave")}if(i){g.animate({opacity:0},c,function(){g.animate({height:0},300,function(){a._countRemoveWrapper(d,g,h)})})}else{this._countRemoveWrapper(d,g)}},_hoverState:function(d,c){if(c=="mouseenter"){d.addClass("hover");d.find(".gritter-close").show()}else{d.removeClass("hover");d.find(".gritter-close").hide()}},removeSpecific:function(c,g,f,d){if(!f){var f=b("#gritter-item-"+c)}this._fade(f,c,g||{},d)},_restoreItemIfFading:function(d,c){clearTimeout(this["_int_id_"+c]);d.stop().css({opacity:"",height:""})},_runSetup:function(){for(opt in b.gritter.options){this[opt]=b.gritter.options[opt]}this._is_setup=1},_setFadeTimer:function(f,d){var c=(this._custom_timer)?this._custom_timer:this.time;this["_int_id_"+d]=setTimeout(function(){a._fade(f,d)},c)},stop:function(e){var c=(b.isFunction(e.before_close))?e.before_close:function(){};var f=(b.isFunction(e.after_close))?e.after_close:function(){};var d=b("#gritter-notice-wrapper");c(d);d.fadeOut(function(){b(this).remove();f()})},_str_replace:function(v,e,o,n){var k=0,h=0,t="",m="",g=0,q=0,l=[].concat(v),c=[].concat(e),u=o,d=c instanceof Array,p=u instanceof Array;u=[].concat(u);if(n){this.window[n]=0}for(k=0,g=u.length;k<g;k++){if(u[k]===""){continue}for(h=0,q=l.length;h<q;h++){t=u[k]+"";m=d?(c[h]!==undefined?c[h]:""):c[0];u[k]=(t).split(l[h]).join(m);if(n&&u[k]!==t){this.window[n]+=(t.length-u[k].length)/l[h].length}}}return p?u:u[0]},_verifyWrapper:function(){if(b("#gritter-notice-wrapper").length==0){b("body").append(this._tpl_wrap)}}}})(jQuery);


/*! clioflict - v0.0.1 - 2014-07-18 */
var clioClientSearch = angular.module('clioClientSearch', ['ngSanitize','ngGrid','ngCsv']);


clioClientSearch.factory('searchDB', [function($scope){
  return {};
}]);

// field name should be a regular expression to match the
// custom data field against
var customDataExtraction = function(fieldName, contact) {
  var customDataValue;

  //  Clio API Docs for Contact
  //
  // custom_field_values:             (array of hashes) A polymorphic collect of custom field values set on this contact. You can get a list of custom fields from the custom fields and custom field sets end points.
  //   id:                            (int, readonly) Unique identifier. Note
  //   type:                          (string, required) Type of custom field value, one of [CustomFieldCheckboxValue, CustomFieldContactValue, CustomFieldCurrencyValue, CustomFieldDateValue, CustomFieldTimeValue, CustomFieldEmailValue, CustomFieldMatterValue, CustomFieldNumericValue, CustomFieldPicklistValue, CustomFieldTextAreaValue, CustomFieldTextLineValue, CustomFieldUrlValue].
  //   created_at:                    (datetime, readonly) Date/time of record creation
  //   updated_at:                    (datetime, readonly) Date/time of last modification of record
  //   custom_field:                  (hash, required) The custom field of the custom field value
  //   value:                         (depending on type) The data of the custom field value. The data must be valid based on the type. For CustomFieldContactValue this is the id of the Contact. For CustomFieldMatterValue this is the id of the Matter. For CustomFieldPicklistOptionValue this is the id of the picklist option.
  //   contact:                       (hash, readonly, only for CustomFieldContactValue) The contact of the custom field contact value
  //   matter:                        (hash, readonly, only for CustomFieldMatterValue) The matter of the custom field matter value
  //   custom_field_picklist_option:  (hash, readonly, only for CustomFieldPicklistValue) The option of the custom field picklist value

  // Clio API Docs for Custom Field
  //
  // id:                             (int, readonly) Unique identifier
  // created_at:                     (datetime, readonly) Date/time of record creation
  // updated_at:                     (datetime, readonly) Date/time of last modification of record
  // name:                           (string, required) Custom Field Set name
  // parent_type:                    (string, required) Type of object the custom field is for, either "Contact" or Matter"
  // field_type:                     (string, required) Field type of the custom field, one of ["checkbox", "contact", "currency", "date", "time", "email", "matter", "numeric", "picklist", "text_area", "text_line", "url"]
  // displayed:                      (boolean, required) If the custom field is displayed by default or not
  // custom_field_picklist_options:  (array of hashes) If the field_type is a "picklist" this field is populated with a collection of options, otherwise nil.


  angular.forEach(contact.custom_field_values, function(custom_data) {
    if (custom_data.custom_field && custom_data.custom_field.name.match(fieldName)) {
      if (custom_data.custom_field.name.match("Contact Type")) {
        customDataValue = custom_data.custom_field_picklist_option.name;
      } else {
        customDataValue = custom_data.value;
      }
    }
  });

  return customDataValue;
};




clioClientSearch.controller('SearchController', ['$scope', 'searchDB',
  function($scope, searchDB) {
    $scope.vm = {};
    $scope.vm.accounts = [];
    $scope.vm.isLoading = false;
    $scope.gridData = [];
    $scope.filterOptions = {
      filterText: ''
    };

    $scope.exportHeaders = ['id',
      'account_name',
      'contact_type',
      'first_name',
      'last_name',
      'middle_name',
      'date_of_birth',
      'phone_number',
      'street',
      'city',
      'state',
      'postal_code',
      'organization'
    ];

    $scope.vm.gridOptions = {
      data: 'gridData',
      enableColumnReordering: true,
      enableColumnResize: true,
      filterOptions: $scope.filterOptions,
      columnDefs: [{
        field: 'account_name',
        displayName: 'Account Name',
        width: 120
      }, {
        field: 'contact_type',
        displayName: 'Type'
      }, {
        field: 'first_name',
        displayName: 'First Name'
      }, {
        field: 'last_name',
        displayName: 'Last Name'
      }, {
        field: 'middle_name',
        displayName: 'Middle Name'
      }, {
        field: 'date_of_birth',
        displayName: 'Date of Birth'
      }, {
        field: 'phone_number',
        displayName: 'Phone Number'
      }, {
        field: 'street',
        displayName: 'Street'
      }, {
        field: 'city',
        displayName: 'City'
      }, {
        field: 'state',
        displayName: 'State'
      }, {
        field: 'postal_code',
        displayName: 'Zip Code'
      }, {
        field: 'organization',
        displayName: 'Organization'
      }, ],
      afterSelectionChange: function(rowItem, state) {
        rowItem.entity.rowIndex = rowItem.rowIndex;
        $scope.toggleContact(rowItem.entity, rowItem.entity.account_name);
      },
      //showFilter: true
    };

    $.get('/accounts', function(data) {
      var accounts = data.accounts;

      $scope.$apply(function() {
        $scope.vm.accounts = accounts;
        $scope.vm.totalAccounts = accounts.length;
      });
    });

    $scope.toggleContact = function(contact, accountName, toggleGrid) {
      var foundIndex;
      $.each($scope.vm.selectedContacts, function(i, selectedContact) {
        if (selectedContact.id === contact.id) {
          foundIndex = i;
        }
      });

      if (foundIndex !== undefined) {
        $scope.vm.selectedContacts.splice(foundIndex, 1);
      } else {
        contact.accountName = accountName;
        $scope.vm.selectedContacts.push(contact);
      }
      if (toggleGrid) {
        $scope.vm.gridOptions.selectRow(contact.rowIndex);
      }
    };

    $scope.exportContacts = function() {
      var results = [];
      if ($scope.vm.gridOptions.ngGrid) {
        angular.forEach($scope.vm.gridOptions.ngGrid.filteredRows, function(contact) {
          var exportContact = [];
          angular.forEach($scope.exportHeaders, function(header) {
            var field = contact.entity[header];
            exportContact.push(field);
          });
          results.push(exportContact);
        });
      }
      return results;
    };
    $scope.exportFilename = function() {
      return 'cliosearch-' + $scope.searchTerm + '.csv';
    };

    $scope.search = function() {
      $scope.hasSearched = true;
      $scope.vm.isLoading = true;
      var searchData = {
        params: {
          searchTerm: $scope.searchTerm
        }
      };
      $scope.gridData = [];
      $scope.vm.selectedContacts = [];
      $scope.vm.accountsSearched = 0;
      var totalAccountsCompleted = 0;

      $.each($scope.vm.accounts, function(i, account) {
        account.isLoading = true;
        account.contacts = [];
      });

      var resultsHandler = function(data) {
        var results = JSON.parse(data.results);
        var accountId = data.account['_id'];
        var account = {};
        $.each($scope.vm.accounts, function(i, acc) {
          if (acc.id == accountId) {
            account = acc;
          }
        });

        $scope.$apply(function() {
          angular.forEach(results.contacts, function(contact) {

            contact.account_name = account.name;
            contact.date_of_birth = customDataExtraction(/date of birth/i, contact);
            contact.middle_name = customDataExtraction(/middle name/i, contact);
            contact.contact_type = customDataExtraction(/contact type/i, contact);
            var firstPhone = contact.phone_numbers[0];
            var firstAddress = contact.addresses[0];
            if (firstPhone) {
              contact.phone_number = firstPhone.number;
            }
            if (firstAddress) {
              contact.street = firstAddress.street;
              contact.city = firstAddress.city;
              contact.state = firstAddress.state;
              contact.postal_code = firstAddress.postal_code;
            }
            if (contact.type === 'Company') {
              contact.organization = contact.name;
            } else {
              contact.organization = contact.company ? contact.company.name : null;
            }

            $scope.gridData.push(contact);
          });
          account.isLoading = false;

          $scope.vm.isLoading = false;
          $scope.vm.accountsSearched++;

        });

      };

      var errorsHandler = function(data) {
        angular.forEach(data.errors, function(error) {
          $.gritter.add({
            title: 'Error',
            text: error
          });
        });
      };

      Streamable.get('/query', searchData, {
        onData: function(data) {
          if (data.results) {
            resultsHandler(data);
          } else if (data.errors) {
            errorsHandler(data);
          }
        },
        onError: function(err) {
          // assume error happened b/c user is required to reauthenticate
          window.location = '/login';
        }
      });

    };
  }
]);


clioClientSearch.directive('clioloader', 
  [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'loader.html'
    };
  }]
);


clioClientSearch.directive('contactdetails', 
  [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'contact_details.html',
      scope: {
        contact: '=',
        removeContact: '&'
      },
      link: function(scope, element, attrs) {
        scope.contactTypeClass = scope.contact.type.toLowerCase() + '-details';

        scope.showHideContact = function(contact) {
          if (contact.isCollapsed) {
            contact.isCollapsed = false;
          } else {
            contact.isCollapsed = true;
          }
        };
      }
    };
  }]
);

clioClientSearch.directive('contactsummary', 
  [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'contact_summary.html',
      scope: {
        contact: '='
      },
      link: function(scope, element, attrs) {
        scope.contactTypeClass = 'summary ' + 
                                 scope.contact.type.toLowerCase() + '-summary';

        scope.glyphsClass = 'glyphicon ';
        if (scope.contact.type === 'Person') {
          scope.glyphsClass += 'glyphicon-user';
        } else {
          scope.glyphsClass += 'glyphicon-home';
        }
      }
    };
  }]
);


angular.module("clioClientSearch").run(["$templateCache", function($templateCache) {

  $templateCache.put("address.html",
    ""
  );

  $templateCache.put("contact_details.html",
    "<div ng-class=\"contactTypeClass\">\n" +
    "  <header>\n" +
    "    <h5 class=\"name\">{{contact.name}}</h5>\n" +
    "    <span class=\"glyphicon glyphicon-minus-sign\" ng-click='removeContact(contact)'>\n" +
    "    </span>\n" +
    "    <h6 class=\"account\">{{contact.accountName}}</h6>\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "  </header>\n" +
    "  <article>\n" +
    "   <div class=\"custom_field_values\" ng-if='contact.custom_field_values.length'>\n" +
    "      <h6>Date of Birth:</h6>\n" +
    "      <table class=\"table table-bordered\">\n" +
    "          <thead><tr>\n" +
    "          <th>Date of Birth</th>\n" +
    "        </tr></thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td>{{contact.date_of_birth}}</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "    <div class=\"email-addresses\" ng-if='contact.email_addresses.length'>\n" +
    "      <h6>Email Addresses:</h6>\n" +
    "      <table class=\"table table-bordered\">\n" +
    "        <thead><tr>\n" +
    "          <th>Type</th>\n" +
    "          <th>Address</th>\n" +
    "        </tr></thead>\n" +
    "        <tbody>\n" +
    "          <tr ng-repeat='email in contact.email_addresses'>\n" +
    "            <td>{{email.name}}</td>\n" +
    "            <td>{{email.address}}</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "    <div class=\"phone-numbers\" ng-if='contact.phone_numbers.length'>\n" +
    "      <h6>Phone Numbers:</h6>\n" +
    "      <table class=\"table table-bordered\">\n" +
    "        <thead><tr>\n" +
    "          <th>Type</th>\n" +
    "          <th>Number</th>\n" +
    "        </tr></thead>\n" +
    "        <tbody>\n" +
    "          <tr ng-repeat='phone in contact.phone_numbers'>\n" +
    "            <td>{{phone.name}}</td>\n" +
    "            <td>{{phone.number}}</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "    <div class=\"addresses\" ng-if='contact.addresses.length'>\n" +
    "      <h6>Addresses:</h6>\n" +
    "      <table class=\"table table-bordered\">\n" +
    "        <thead><tr>\n" +
    "          <th>Type</th>\n" +
    "          <th>City</th>\n" +
    "          <th>Country</th>\n" +
    "          <th>Postal Code</th>\n" +
    "          <th>Street</th>\n" +
    "          <th>Province</th>\n" +
    "        </tr></thead>\n" +
    "        <tbody>\n" +
    "          <tr ng-repeat='address in contact.addresses'>\n" +
    "            <td>{{address.name}}</td>\n" +
    "            <td>{{address.city}}</td>\n" +
    "            <td>{{address.country}}</td>\n" +
    "            <td>{{address.postal_code}}</td>\n" +
    "            <td>{{address.street}}</td>\n" +
    "            <td>{{address.province}}</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </article>\n" +
    "</div>"
  );

  $templateCache.put("contact_summary.html",
    "<div ng-class=\"contactTypeClass\">\n" +
    "  <div ng-class='glyphsClass'></div>\n" +
    "  <div class=\"details\">\n" +
    "    <p>{{contact.name}}</p>\n" +
    "  </div>\n" +
    "  <div class=\"clearfix\"></div>\n" +
    "</div>\n"
  );

  $templateCache.put("email_address.html",
    ""
  );

  $templateCache.put("grid.html",
    "<div ng-class=\"contactTypeClass\">\n" +
    "\t<div ng-class='glyphsClass'></div>\n" +
    "      <div class=\"gridStyle\" ng-grid=\"gridOptions\">\n" +
    "    </div>\n" +
    "</div>"
  );

  $templateCache.put("loader.html",
    "<div class=\"loader facebookG\">\n" +
    "  <div class=\"blockG_1 facebook_blockG\"></div>\n" +
    "  <div class=\"blockG_2 facebook_blockG\"></div>\n" +
    "  <div class=\"blockG_3 facebook_blockG\"></div>\n" +
    "</div>\n"
  );

  $templateCache.put("phone_number.html",
    ""
  );

}]);
