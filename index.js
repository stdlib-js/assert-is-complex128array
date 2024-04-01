// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).isComplex128Array=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,c=String.prototype.replace,h=/e\+(\d)$/,p=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,y=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function v(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=c.call(n,b,"$1e"),n=c.call(n,w,"e"),n=c.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=c.call(n,h,"e+0$1"),n=c.call(n,p,"e-0$1"),r.alternate&&(n=c.call(n,g,"$1."),n=c.call(n,m,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function d(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var E=String.fromCharCode,_=isNaN,T=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function V(r){var e,t,n,o,a,f,l,s,c,h,p,g,m;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)f+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,c=0;c<t.length;c++)switch(o=t.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,_(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(h=n.arg,p=n.width,g=n.padRight,m=void 0,(m=p-h.length)<0?h:h=g?h+d(m):d(m)+h)),f+=n.arg||"",l+=1}return f}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,i;for(t=[],i=0,n=j.exec(r);n;)(e=r.slice(i,j.lastIndex-n[0].length)).length&&t.push(e),t.push(S(n)),i=j.lastIndex,n=j.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){var e,t;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[A(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return V.apply(null,e)}var k,L=Object.prototype,O=L.toString,R=L.__defineGetter__,B=L.__defineSetter__,I=L.__lookupGetter__,N=L.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(I.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=L,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&R&&R.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var C=k;function M(r,e,t){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function P(r){return"number"==typeof r}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function $(){return Y&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var G=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&G.call(r,e)}var U="function"==typeof Symbol?Symbol:void 0,X="function"==typeof U?U.toStringTag:"";var J=$()?function(r){var e,t,n;if(null==r)return W.call(r);t=r[X],e=Z(r,X);try{r[X]=void 0}catch(e){return W.call(r)}return n=W.call(r),e?r[X]=t:delete r[X],n}:function(r){return W.call(r)},z=Number,q=z.prototype.toString;var D=$();function H(r){return"object"==typeof r&&(r instanceof z||(D?function(r){try{return q.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function K(r){return P(r)||H(r)}M(K,"isPrimitive",P),M(K,"isObject",H);var Q=Number.POSITIVE_INFINITY,rr=z.NEGATIVE_INFINITY,er=Math.floor;function tr(r){return er(r)===r}function nr(r){return r<Q&&r>rr&&tr(r)}function ir(r){return P(r)&&nr(r)}function or(r){return H(r)&&nr(r.valueOf())}function ar(r){return ir(r)||or(r)}function ur(r){return ir(r)&&r>=0}function fr(r){return or(r)&&r.valueOf()>=0}function lr(r){return ur(r)||fr(r)}M(ar,"isPrimitive",ir),M(ar,"isObject",or),M(lr,"isPrimitive",ur),M(lr,"isObject",fr);var sr=4294967295;function cr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&tr(r.length)&&r.length>=0&&r.length<=sr}var hr=9007199254740991;function pr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&tr(r.length)&&r.length>=0&&r.length<=hr}var gr="function"==typeof ArrayBuffer;function mr(r){return gr&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===J(r)}var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function wr(r){return"object"==typeof r&&null!==r&&!yr(r)}function br(r){return"string"==typeof r}var vr=String.prototype.valueOf;var dr=$();function Er(r){return"object"==typeof r&&(r instanceof String||(dr?function(r){try{return vr.call(r),!0}catch(r){return!1}}(r):"[object String]"===J(r)))}function _r(r){return br(r)||Er(r)}M(_r,"isPrimitive",br),M(_r,"isObject",Er);var Tr=/./;function xr(r){return"boolean"==typeof r}var Vr=Boolean,jr=Boolean.prototype.toString;var Sr=$();function Ar(r){return"object"==typeof r&&(r instanceof Vr||(Sr?function(r){try{return jr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Fr(r){return xr(r)||Ar(r)}M(Fr,"isPrimitive",xr),M(Fr,"isObject",Ar);var kr="object"==typeof self?self:null,Lr="object"==typeof window?window:null,Or="object"==typeof global?global:null,Rr="object"==typeof globalThis?globalThis:null;var Br=function(r){if(arguments.length){if(!xr(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Rr)return Rr;if(kr)return kr;if(Lr)return Lr;if(Or)return Or;throw new Error("unexpected error. Unable to resolve global object.")}(),Ir=Br.document&&Br.document.childNodes,Nr=Int8Array;function Cr(){return/^\s*function\s*([^(]*)/i}var Mr=/^\s*function\s*([^(]*)/i;function Pr(r){return null!==r&&"object"==typeof r}function Yr(r){var e,t,n,i;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Mr.exec(n.toString()))return e[1]}return Pr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(Cr,"REGEXP",Mr),M(Pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!yr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Pr));var $r="function"==typeof Tr||"object"==typeof Nr||"function"==typeof Ir?function(r){return Yr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Yr(r).toLowerCase():e};function Wr(r){return"function"===$r(r)}function Gr(r,e){if(!(this instanceof Gr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!P(r))throw new TypeError(F("invalid argument. Real component must be a number. Value: `%s`.",r));if(!P(e))throw new TypeError(F("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return C(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),C(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}M(Gr,"BYTES_PER_ELEMENT",8),M(Gr.prototype,"BYTES_PER_ELEMENT",8),M(Gr.prototype,"byteLength",16),M(Gr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),M(Gr.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Zr="function"==typeof Math.fround?Math.fround:null,Ur="function"==typeof Float32Array;var Xr="function"==typeof Float32Array?Float32Array:null;var Jr="function"==typeof Float32Array?Float32Array:void 0;var zr=function(){var r,e,t;if("function"!=typeof Xr)return!1;try{e=new Xr([1,3.14,-3.14,5e40]),t=e,r=(Ur&&t instanceof Float32Array||"[object Float32Array]"===J(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Q}catch(e){r=!1}return r}()?Jr:function(){throw new Error("not implemented")},qr=new zr(1);var Dr="function"==typeof Zr?Zr:function(r){return qr[0]=r,qr[0]};function Hr(r,e){if(!(this instanceof Hr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!P(r))throw new TypeError(F("invalid argument. Real component must be a number. Value: `%s`.",r));if(!P(e))throw new TypeError(F("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return C(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Dr(r)}),C(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Dr(e)}),this}function Kr(r){return r instanceof Gr||r instanceof Hr||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Qr(r){return tr(r/2)}M(Hr,"BYTES_PER_ELEMENT",4),M(Hr.prototype,"BYTES_PER_ELEMENT",4),M(Hr.prototype,"byteLength",8),M(Hr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),M(Hr.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var re=8;var ee=16;function te(){return"function"==typeof U&&"symbol"==typeof U("foo")&&Z(U,"iterator")&&"symbol"==typeof U.iterator}var ne=te()?Symbol.iterator:null;function ie(r,e,t){C(r,e,{configurable:!1,enumerable:!1,get:t})}var oe="function"==typeof Float64Array;var ae="function"==typeof Float64Array?Float64Array:null;var ue="function"==typeof Float64Array?Float64Array:void 0;var fe=function(){var r,e,t;if("function"!=typeof ae)return!1;try{e=new ae([1,3.14,-3.14,NaN]),t=e,r=(oe&&t instanceof Float64Array||"[object Float64Array]"===J(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ue:function(){throw new Error("not implemented")};function le(r){return r.re}function se(r){return r.im}var ce={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};var he={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function pe(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(cr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Kr(n))return new TypeError(F("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(le(n),se(n))}return e}var ge=2*fe.BYTES_PER_ELEMENT,me=te();function ye(r){return r instanceof ve||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function we(r){return r===ve||"Complex64Array"===r.name}function be(r,e){return new Gr(r[e*=2],r[e+1])}function ve(){var r,e,t,n,i,o,a;if(e=arguments.length,!(this instanceof ve))return 0===e?new ve:1===e?new ve(arguments[0]):2===e?new ve(arguments[0],arguments[1]):new ve(arguments[0],arguments[1],arguments[2]);if(0===e)t=new fe(0);else if(1===e)if(ur(arguments[0]))t=new fe(2*arguments[0]);else if(pr(arguments[0]))if((n=(t=arguments[0]).length)&&yr(t)&&Kr(t[0])){if(t=function(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Kr(n=e[i]))return null;r[o]=le(n),r[o+1]=se(n),o+=2}return r}(new fe(2*n),t),null===t){if(!Qr(n))throw new RangeError(F("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new fe(arguments[0])}}else{if("object"==typeof(a=t)&&null!==a&&"Complex64Array"===a.constructor.name&&a.BYTES_PER_ELEMENT===re)o=0,t=new zr((i=t).buffer,i.byteOffset+i.BYTES_PER_ELEMENT*o,2*(i.length-o));else if(function(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===ee}(t))t=function(r,e){return new fe(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}(t,0);else if(!Qr(n))throw new RangeError(F("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new fe(t)}else if(mr(arguments[0])){if(!tr((t=arguments[0]).byteLength/ge))throw new RangeError(F("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ge,t.byteLength));t=new fe(t)}else{if(!wr(arguments[0]))throw new TypeError(F("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===me)throw new TypeError(F("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Wr(t[ne]))throw new TypeError(F("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Wr((t=t[ne]()).next))throw new TypeError(F("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=pe(t))instanceof Error)throw t;t=new fe(t)}else{if(!mr(t=arguments[0]))throw new TypeError(F("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ur(r=arguments[1]))throw new TypeError(F("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!tr(r/ge))throw new RangeError(F("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ge,r));if(2===e){if(!tr((n=t.byteLength-r)/ge))throw new RangeError(F("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ge,n));t=new fe(t,r)}else{if(!ur(n=arguments[2]))throw new TypeError(F("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*ge>t.byteLength-r)throw new RangeError(F("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*ge));t=new fe(t,r,2*n)}}return M(this,"_buffer",t),M(this,"_length",t.length/2),this}return M(ve,"BYTES_PER_ELEMENT",ge),M(ve,"name","Complex128Array"),M(ve,"from",(function(r){var e,t,n,i,o,a,u,f,l,s,c,h;if(!Wr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!we(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Wr(n=arguments[1]))throw new TypeError(F("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(ye(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,h=0,c=0;c<f;c++){if(Kr(s=n.call(e,r.get(c),c)))o[h]=le(s),o[h+1]=se(s);else{if(!(cr(s)&&s.length>=2))throw new TypeError(F("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));o[h]=s[0],o[h+1]=s[1]}h+=2}return i}return new this(r)}if(pr(r)){if(n){for(f=r.length,u=r.get&&r.set?function(r){var e=he[r];return"function"==typeof e?e:he.default}("default"):function(r){var e=ce[r];return"function"==typeof e?e:ce.default}("default"),c=0;c<f;c++)if(!Kr(u(r,c))){l=!0;break}if(l){if(!Qr(f))throw new RangeError(F("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,c=0;c<f;c++)o[c]=n.call(e,u(r,c),c);return i}for(o=(i=new this(f))._buffer,h=0,c=0;c<f;c++){if(Kr(s=n.call(e,u(r,c),c)))o[h]=le(s),o[h+1]=se(s);else{if(!(cr(s)&&s.length>=2))throw new TypeError(F("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));o[h]=s[0],o[h+1]=s[1]}h+=2}return i}return new this(r)}if(wr(r)&&me&&Wr(r[ne])){if(!Wr((o=r[ne]()).next))throw new TypeError(F("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if(a=n?function(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,cr(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Kr(o))return new TypeError(F("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(le(o),se(o))}return n}(o,n,e):pe(o),a instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,c=0;c<f;c++)o[c]=a[c];return i}throw new TypeError(F("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),M(ve,"of",(function(){var r,e;if(!Wr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!we(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),M(ve.prototype,"at",(function(r){if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!tr(r))throw new TypeError(F("invalid argument. Must provide an integer. Value: `%s`.",r));if(r<0&&(r+=this._length),!(r<0||r>=this._length))return be(this._buffer,r)})),ie(ve.prototype,"buffer",(function(){return this._buffer.buffer})),ie(ve.prototype,"byteLength",(function(){return this._buffer.byteLength})),ie(ve.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),M(ve.prototype,"BYTES_PER_ELEMENT",ve.BYTES_PER_ELEMENT),M(ve.prototype,"copyWithin",(function(r,e){if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),M(ve.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,M(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Gr(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),M(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),ne&&M(t,ne,(function(){return e.entries()})),t})),M(ve.prototype,"every",(function(r,e){var t,n;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Wr(r))throw new TypeError(F("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=0;n<this._length;n++)if(!r.call(e,be(t,n),n,this))return!1;return!0})),M(ve.prototype,"fill",(function(r,e,t){var n,i,o,a,u,f;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Kr(r))throw new TypeError(F("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(n=this._buffer,i=this._length,arguments.length>1){if(!tr(e))throw new TypeError(F("invalid argument. Second argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=i)<0&&(e=0),arguments.length>2){if(!tr(t))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",t));t<0&&(t+=i)<0&&(t=0),t>i&&(t=i)}else t=i}else e=0,t=i;for(a=le(r),u=se(r),f=e;f<t;f++)n[o=2*f]=a,n[o+1]=u;return this})),M(ve.prototype,"filter",(function(r,e){var t,n,i,o;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Wr(r))throw new TypeError(F("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=[],i=0;i<this._length;i++)o=be(t,i),r.call(e,o,i,this)&&n.push(o);return new this.constructor(n)})),M(ve.prototype,"find",(function(r,e){var t,n,i;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Wr(r))throw new TypeError(F("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=0;n<this._length;n++)if(i=be(t,n),r.call(e,i,n,this))return i})),M(ve.prototype,"findIndex",(function(r,e){var t,n,i;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Wr(r))throw new TypeError(F("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=0;n<this._length;n++)if(i=be(t,n),r.call(e,i,n,this))return n;return-1})),M(ve.prototype,"findLast",(function(r,e){var t,n,i;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Wr(r))throw new TypeError(F("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=this._length-1;n>=0;n--)if(i=be(t,n),r.call(e,i,n,this))return i})),M(ve.prototype,"findLastIndex",(function(r,e){var t,n,i;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Wr(r))throw new TypeError(F("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=this._length-1;n>=0;n--)if(i=be(t,n),r.call(e,i,n,this))return n;return-1})),M(ve.prototype,"forEach",(function(r,e){var t,n,i;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Wr(r))throw new TypeError(F("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=0;n<this._length;n++)i=be(t,n),r.call(e,i,n,this)})),M(ve.prototype,"get",(function(r){if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ur(r))throw new TypeError(F("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return be(this._buffer,r)})),ie(ve.prototype,"length",(function(){return this._length})),M(ve.prototype,"includes",(function(r,e){var t,n,i,o,a;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Kr(r))throw new TypeError(F("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!tr(e))throw new TypeError(F("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0&&(e+=this._length)<0&&(e=0)}else e=0;for(i=le(r),o=se(r),t=this._buffer,a=e;a<this._length;a++)if(i===t[n=2*a]&&o===t[n+1])return!0;return!1})),M(ve.prototype,"indexOf",(function(r,e){var t,n,i,o,a;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Kr(r))throw new TypeError(F("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!tr(e))throw new TypeError(F("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0&&(e+=this._length)<0&&(e=0)}else e=0;for(i=le(r),o=se(r),t=this._buffer,a=e;a<this._length;a++)if(i===t[n=2*a]&&o===t[n+1])return a;return-1})),M(ve.prototype,"join",(function(r){var e,t,n,i;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(0===arguments.length)n=",";else{if(!_r(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));n=r}for(e=[],t=this._buffer,i=0;i<this._length;i++)e.push(be(t,i).toString());return e.join(n)})),M(ve.prototype,"lastIndexOf",(function(r,e){var t,n,i,o,a;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Kr(r))throw new TypeError(F("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!tr(e))throw new TypeError(F("invalid argument. Second argument must be an integer. Value: `%s`.",e));e>=this._length?e=this._length-1:e<0&&(e+=this._length)}else e=this._length-1;for(i=le(r),o=se(r),t=this._buffer,a=e;a>=0;a--)if(i===t[n=2*a]&&o===t[n+1])return a;return-1})),M(ve.prototype,"map",(function(r,e){var t,n,i,o,a;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Wr(r))throw new TypeError(F("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,t=(i=new this.constructor(this._length))._buffer,o=0;o<this._length;o++)if(Kr(a=r.call(e,be(n,o),o,this)))t[2*o]=le(a),t[2*o+1]=se(a);else{if(!cr(a)||2!==a.length)throw new TypeError(F("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));t[2*o]=a[0],t[2*o+1]=a[1]}return i})),M(ve.prototype,"reduce",(function(r,e){var t,n,i,o;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Wr(r))throw new TypeError(F("invalid argument. First argument must be a function. Value: `%s`.",r));if(t=this._buffer,i=this._length,arguments.length>1)n=e,o=0;else{if(0===i)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");n=be(t,0),o=1}for(;o<i;o++)n=r(n,be(t,o),o,this);return n})),M(ve.prototype,"reverse",(function(){var r,e,t,n,i,o;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,r=this._buffer,n=er(t/2),i=0;i<n;i++)o=t-i-1,e=r[2*i],r[2*i]=r[2*o],r[2*o]=e,e=r[2*i+1],r[2*i+1]=r[2*o+1],r[2*o+1]=e;return this})),M(ve.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ur(t=arguments[1]))throw new TypeError(F("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Kr(r)){if(t>=this._length)throw new RangeError(F("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=le(r),void(n[t+1]=se(r))}if(ye(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*ge,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new fe(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!pr(r))throw new TypeError(F("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Kr(r[f])){o=!0;break}if(o){if(!Qr(a))throw new RangeError(F("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*ge,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new fe(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=le(u),n[t+1]=se(u),t+=2}})),M(ve.prototype,"slice",(function(r,e){var t,n,i,o,a,u,f;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,u=this._length,0===arguments.length)r=0,e=u;else{if(!tr(r))throw new TypeError(F("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=u)<0&&(r=0),1===arguments.length)e=u;else{if(!tr(e))throw new TypeError(F("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0?(e+=u)<0&&(e=0):e>u&&(e=u)}}for(t=r<e?e-r:0,n=(i=new this.constructor(t))._buffer,f=0;f<t;f++)o=2*(f+r),n[2*f]=a[o],n[2*f+1]=a[o+1];return i})),M(ve.prototype,"some",(function(r,e){var t,n;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Wr(r))throw new TypeError(F("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=0;n<this._length;n++)if(r.call(e,be(t,n),n,this))return!0;return!1})),M(ve.prototype,"subarray",(function(r,e){var t,n,i;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,i=this._length,0===arguments.length)r=0,e=i;else{if(!tr(r))throw new TypeError(F("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=i)<0&&(r=0),1===arguments.length)e=i;else{if(!tr(e))throw new TypeError(F("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0?(e+=i)<0&&(e=0):e>i&&(e=i)}}return r>=i?(i=0,t=n.byteLength):r>=e?(i=0,t=n.byteOffset+r*ge):(i=e-r,t=n.byteOffset+r*ge),new this.constructor(n.buffer,t,i<0?0:i)})),M(ve.prototype,"toReversed",(function(){var r,e,t,n,i,o;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,e=new this.constructor(t),n=this._buffer,r=e._buffer,i=0;i<t;i++)o=t-i-1,r[2*i]=n[2*o],r[2*i+1]=n[2*o+1];return e})),M(ve.prototype,"toString",(function(){var r,e,t;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=this._buffer,t=0;t<this._length;t++)r.push(be(e,t).toString());return r.join(",")})),M(ve.prototype,"with",(function(r,e){var t,n,i;if(!ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!tr(r))throw new TypeError(F("invalid argument. First argument must be an integer. Value: `%s`.",r));if(i=this._length,r<0&&(r+=i),r<0||r>=i)throw new RangeError(F("invalid argument. Index argument is out-of-bounds. Value: `%s`.",r));if(!Kr(e))throw new TypeError(F("invalid argument. Second argument must be a complex number. Value: `%s`.",e));return(t=(n=new this.constructor(this._buffer))._buffer)[2*r]=le(e),t[2*r+1]=se(e),n})),function(r){return r instanceof ve||"Complex128Array"===Yr(r)}}));
//# sourceMappingURL=index.js.map
