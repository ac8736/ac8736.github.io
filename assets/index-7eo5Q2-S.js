function Yd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Ku(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zu={exports:{}},Ho={},Ju={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tr=Symbol.for("react.element"),Xd=Symbol.for("react.portal"),Kd=Symbol.for("react.fragment"),Zd=Symbol.for("react.strict_mode"),Jd=Symbol.for("react.profiler"),qd=Symbol.for("react.provider"),bd=Symbol.for("react.context"),ep=Symbol.for("react.forward_ref"),tp=Symbol.for("react.suspense"),np=Symbol.for("react.memo"),rp=Symbol.for("react.lazy"),Cs=Symbol.iterator;function op(e){return e===null||typeof e!="object"?null:(e=Cs&&e[Cs]||e["@@iterator"],typeof e=="function"?e:null)}var qu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bu=Object.assign,ec={};function Pn(e,t,n){this.props=e,this.context=t,this.refs=ec,this.updater=n||qu}Pn.prototype.isReactComponent={};Pn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tc(){}tc.prototype=Pn.prototype;function ma(e,t,n){this.props=e,this.context=t,this.refs=ec,this.updater=n||qu}var ha=ma.prototype=new tc;ha.constructor=ma;bu(ha,Pn.prototype);ha.isPureReactComponent=!0;var _s=Array.isArray,nc=Object.prototype.hasOwnProperty,ga={current:null},rc={key:!0,ref:!0,__self:!0,__source:!0};function oc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)nc.call(t,r)&&!rc.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Tr,type:e,key:i,ref:l,props:o,_owner:ga.current}}function ip(e,t){return{$$typeof:Tr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function va(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tr}function lp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ns=/\/+/g;function $i(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lp(""+e.key):t.toString(36)}function no(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Tr:case Xd:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+$i(l,0):r,_s(o)?(n="",e!=null&&(n=e.replace(Ns,"$&/")+"/"),no(o,t,n,"",function(u){return u})):o!=null&&(va(o)&&(o=ip(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Ns,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",_s(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+$i(i,a);l+=no(i,t,n,s,o)}else if(s=op(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+$i(i,a++),l+=no(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Mr(e,t,n){if(e==null)return e;var r=[],o=0;return no(e,r,"","",function(i){return t.call(n,i,o++)}),r}function ap(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},ro={transition:null},sp={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:ro,ReactCurrentOwner:ga};O.Children={map:Mr,forEach:function(e,t,n){Mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Mr(e,function(){t++}),t},toArray:function(e){return Mr(e,function(t){return t})||[]},only:function(e){if(!va(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Pn;O.Fragment=Kd;O.Profiler=Jd;O.PureComponent=ma;O.StrictMode=Zd;O.Suspense=tp;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sp;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bu({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ga.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)nc.call(t,s)&&!rc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Tr,type:e.type,key:o,ref:i,props:r,_owner:l}};O.createContext=function(e){return e={$$typeof:bd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qd,_context:e},e.Consumer=e};O.createElement=oc;O.createFactory=function(e){var t=oc.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:ep,render:e}};O.isValidElement=va;O.lazy=function(e){return{$$typeof:rp,_payload:{_status:-1,_result:e},_init:ap}};O.memo=function(e,t){return{$$typeof:np,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=ro.transition;ro.transition={};try{e()}finally{ro.transition=t}};O.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};O.useCallback=function(e,t){return we.current.useCallback(e,t)};O.useContext=function(e){return we.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return we.current.useDeferredValue(e)};O.useEffect=function(e,t){return we.current.useEffect(e,t)};O.useId=function(){return we.current.useId()};O.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return we.current.useMemo(e,t)};O.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};O.useRef=function(e){return we.current.useRef(e)};O.useState=function(e){return we.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return we.current.useTransition()};O.version="18.2.0";Ju.exports=O;var _=Ju.exports;const ic=Ku(_),cl=Yd({__proto__:null,default:ic},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up=_,cp=Symbol.for("react.element"),fp=Symbol.for("react.fragment"),dp=Object.prototype.hasOwnProperty,pp=up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mp={key:!0,ref:!0,__self:!0,__source:!0};function lc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)dp.call(t,r)&&!mp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:cp,type:e,key:i,ref:l,props:o,_owner:pp.current}}Ho.Fragment=fp;Ho.jsx=lc;Ho.jsxs=lc;Zu.exports=Ho;var x=Zu.exports,fl={},ac={exports:{}},je={},sc={exports:{}},uc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,I){var j=R.length;R.push(I);e:for(;0<j;){var Z=j-1>>>1,re=R[Z];if(0<o(re,I))R[Z]=I,R[j]=re,j=Z;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var I=R[0],j=R.pop();if(j!==I){R[0]=j;e:for(var Z=0,re=R.length,Lr=re>>>1;Z<Lr;){var $t=2*(Z+1)-1,Li=R[$t],Mt=$t+1,$r=R[Mt];if(0>o(Li,j))Mt<re&&0>o($r,Li)?(R[Z]=$r,R[Mt]=j,Z=Mt):(R[Z]=Li,R[$t]=j,Z=$t);else if(Mt<re&&0>o($r,j))R[Z]=$r,R[Mt]=j,Z=Mt;else break e}}return I}function o(R,I){var j=R.sortIndex-I.sortIndex;return j!==0?j:R.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],m=1,d=null,h=3,y=!1,v=!1,g=!1,k=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(R){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=R)r(u),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(u)}}function w(R){if(g=!1,p(R),!v)if(n(s)!==null)v=!0,ji(N);else{var I=n(u);I!==null&&Oi(w,I.startTime-R)}}function N(R,I){v=!1,g&&(g=!1,f(z),z=-1),y=!0;var j=h;try{for(p(I),d=n(s);d!==null&&(!(d.expirationTime>I)||R&&!Ve());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,h=d.priorityLevel;var re=Z(d.expirationTime<=I);I=e.unstable_now(),typeof re=="function"?d.callback=re:d===n(s)&&r(s),p(I)}else r(s);d=n(s)}if(d!==null)var Lr=!0;else{var $t=n(u);$t!==null&&Oi(w,$t.startTime-I),Lr=!1}return Lr}finally{d=null,h=j,y=!1}}var P=!1,E=null,z=-1,K=5,L=-1;function Ve(){return!(e.unstable_now()-L<K)}function On(){if(E!==null){var R=e.unstable_now();L=R;var I=!0;try{I=E(!0,R)}finally{I?Ln():(P=!1,E=null)}}else P=!1}var Ln;if(typeof c=="function")Ln=function(){c(On)};else if(typeof MessageChannel<"u"){var Es=new MessageChannel,Gd=Es.port2;Es.port1.onmessage=On,Ln=function(){Gd.postMessage(null)}}else Ln=function(){k(On,0)};function ji(R){E=R,P||(P=!0,Ln())}function Oi(R,I){z=k(function(){R(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,ji(N))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var j=h;h=I;try{return R()}finally{h=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,I){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var j=h;h=R;try{return I()}finally{h=j}},e.unstable_scheduleCallback=function(R,I,j){var Z=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Z+j:Z):j=Z,R){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=j+re,R={id:m++,callback:I,priorityLevel:R,startTime:j,expirationTime:re,sortIndex:-1},j>Z?(R.sortIndex=j,t(u,R),n(s)===null&&R===n(u)&&(g?(f(z),z=-1):g=!0,Oi(w,j-Z))):(R.sortIndex=re,t(s,R),v||y||(v=!0,ji(N))),R},e.unstable_shouldYield=Ve,e.unstable_wrapCallback=function(R){var I=h;return function(){var j=h;h=I;try{return R.apply(this,arguments)}finally{h=j}}}})(uc);sc.exports=uc;var hp=sc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cc=_,Ie=hp;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fc=new Set,or={};function Zt(e,t){wn(e,t),wn(e+"Capture",t)}function wn(e,t){for(or[e]=t,e=0;e<t.length;e++)fc.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dl=Object.prototype.hasOwnProperty,gp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ps={},Ts={};function vp(e){return dl.call(Ts,e)?!0:dl.call(Ps,e)?!1:gp.test(e)?Ts[e]=!0:(Ps[e]=!0,!1)}function yp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wp(e,t,n,r){if(t===null||typeof t>"u"||yp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ya=/[\-:]([a-z])/g;function wa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ya,wa);fe[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ya,wa);fe[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ya,wa);fe[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function xa(e,t,n,r){var o=fe.hasOwnProperty(t)?fe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wp(t,n,o,r)&&(n=null),r||o===null?vp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fr=Symbol.for("react.element"),bt=Symbol.for("react.portal"),en=Symbol.for("react.fragment"),Sa=Symbol.for("react.strict_mode"),pl=Symbol.for("react.profiler"),dc=Symbol.for("react.provider"),pc=Symbol.for("react.context"),ka=Symbol.for("react.forward_ref"),ml=Symbol.for("react.suspense"),hl=Symbol.for("react.suspense_list"),Ea=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),mc=Symbol.for("react.offscreen"),Rs=Symbol.iterator;function $n(e){return e===null||typeof e!="object"?null:(e=Rs&&e[Rs]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Mi;function Qn(e){if(Mi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Mi=t&&t[1]||""}return`
`+Mi+e}var Fi=!1;function Di(e,t){if(!e||Fi)return"";Fi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Fi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Qn(e):""}function xp(e){switch(e.tag){case 5:return Qn(e.type);case 16:return Qn("Lazy");case 13:return Qn("Suspense");case 19:return Qn("SuspenseList");case 0:case 2:case 15:return e=Di(e.type,!1),e;case 11:return e=Di(e.type.render,!1),e;case 1:return e=Di(e.type,!0),e;default:return""}}function gl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case en:return"Fragment";case bt:return"Portal";case pl:return"Profiler";case Sa:return"StrictMode";case ml:return"Suspense";case hl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pc:return(e.displayName||"Context")+".Consumer";case dc:return(e._context.displayName||"Context")+".Provider";case ka:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ea:return t=e.displayName||null,t!==null?t:gl(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return gl(e(t))}catch{}}return null}function Sp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gl(t);case 8:return t===Sa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kp(e){var t=hc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Dr(e){e._valueTracker||(e._valueTracker=kp(e))}function gc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function yo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vl(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vc(e,t){t=t.checked,t!=null&&xa(e,"checked",t,!1)}function yl(e,t){vc(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wl(e,t.type,n):t.hasOwnProperty("defaultValue")&&wl(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Is(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wl(e,t,n){(t!=="number"||yo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Gn=Array.isArray;function dn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function xl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function js(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Gn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function yc(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Os(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ur,xc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ur=Ur||document.createElement("div"),Ur.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ur.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ir(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ep=["Webkit","ms","Moz","O"];Object.keys(Kn).forEach(function(e){Ep.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kn[t]=Kn[e]})});function Sc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kn.hasOwnProperty(e)&&Kn[e]?(""+t).trim():t+"px"}function kc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Sc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Cp=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kl(e,t){if(t){if(Cp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function El(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cl=null;function Ca(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _l=null,pn=null,mn=null;function Ls(e){if(e=Ir(e)){if(typeof _l!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Ko(t),_l(e.stateNode,e.type,t))}}function Ec(e){pn?mn?mn.push(e):mn=[e]:pn=e}function Cc(){if(pn){var e=pn,t=mn;if(mn=pn=null,Ls(e),t)for(e=0;e<t.length;e++)Ls(t[e])}}function _c(e,t){return e(t)}function Nc(){}var Ui=!1;function Pc(e,t,n){if(Ui)return e(t,n);Ui=!0;try{return _c(e,t,n)}finally{Ui=!1,(pn!==null||mn!==null)&&(Nc(),Cc())}}function lr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ko(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Nl=!1;if(ut)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){Nl=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Nl=!1}function _p(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var Zn=!1,wo=null,xo=!1,Pl=null,Np={onError:function(e){Zn=!0,wo=e}};function Pp(e,t,n,r,o,i,l,a,s){Zn=!1,wo=null,_p.apply(Np,arguments)}function Tp(e,t,n,r,o,i,l,a,s){if(Pp.apply(this,arguments),Zn){if(Zn){var u=wo;Zn=!1,wo=null}else throw Error(S(198));xo||(xo=!0,Pl=u)}}function Jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Tc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $s(e){if(Jt(e)!==e)throw Error(S(188))}function Rp(e){var t=e.alternate;if(!t){if(t=Jt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return $s(o),e;if(i===r)return $s(o),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Rc(e){return e=Rp(e),e!==null?zc(e):null}function zc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zc(e);if(t!==null)return t;e=e.sibling}return null}var Ic=Ie.unstable_scheduleCallback,Ms=Ie.unstable_cancelCallback,zp=Ie.unstable_shouldYield,Ip=Ie.unstable_requestPaint,J=Ie.unstable_now,jp=Ie.unstable_getCurrentPriorityLevel,_a=Ie.unstable_ImmediatePriority,jc=Ie.unstable_UserBlockingPriority,So=Ie.unstable_NormalPriority,Op=Ie.unstable_LowPriority,Oc=Ie.unstable_IdlePriority,Qo=null,tt=null;function Lp(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Qo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:Fp,$p=Math.log,Mp=Math.LN2;function Fp(e){return e>>>=0,e===0?32:31-($p(e)/Mp|0)|0}var Ar=64,Br=4194304;function Yn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ko(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Yn(a):(i&=l,i!==0&&(r=Yn(i)))}else l=n&~o,l!==0?r=Yn(l):i!==0&&(r=Yn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ye(t),o=1<<n,r|=e[n],t&=~o;return r}function Dp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Up(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ye(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=Dp(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Tl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lc(){var e=Ar;return Ar<<=1,!(Ar&4194240)&&(Ar=64),e}function Ai(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ye(t),e[t]=n}function Ap(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ye(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Na(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ye(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var D=0;function $c(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mc,Pa,Fc,Dc,Uc,Rl=!1,Vr=[],kt=null,Et=null,Ct=null,ar=new Map,sr=new Map,vt=[],Bp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fs(e,t){switch(e){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":sr.delete(t.pointerId)}}function Fn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ir(t),t!==null&&Pa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Vp(e,t,n,r,o){switch(t){case"focusin":return kt=Fn(kt,e,t,n,r,o),!0;case"dragenter":return Et=Fn(Et,e,t,n,r,o),!0;case"mouseover":return Ct=Fn(Ct,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return ar.set(i,Fn(ar.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,sr.set(i,Fn(sr.get(i)||null,e,t,n,r,o)),!0}return!1}function Ac(e){var t=Ut(e.target);if(t!==null){var n=Jt(t);if(n!==null){if(t=n.tag,t===13){if(t=Tc(n),t!==null){e.blockedOn=t,Uc(e.priority,function(){Fc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Cl=r,n.target.dispatchEvent(r),Cl=null}else return t=Ir(n),t!==null&&Pa(t),e.blockedOn=n,!1;t.shift()}return!0}function Ds(e,t,n){oo(e)&&n.delete(t)}function Wp(){Rl=!1,kt!==null&&oo(kt)&&(kt=null),Et!==null&&oo(Et)&&(Et=null),Ct!==null&&oo(Ct)&&(Ct=null),ar.forEach(Ds),sr.forEach(Ds)}function Dn(e,t){e.blockedOn===t&&(e.blockedOn=null,Rl||(Rl=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Wp)))}function ur(e){function t(o){return Dn(o,e)}if(0<Vr.length){Dn(Vr[0],e);for(var n=1;n<Vr.length;n++){var r=Vr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kt!==null&&Dn(kt,e),Et!==null&&Dn(Et,e),Ct!==null&&Dn(Ct,e),ar.forEach(t),sr.forEach(t),n=0;n<vt.length;n++)r=vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vt.length&&(n=vt[0],n.blockedOn===null);)Ac(n),n.blockedOn===null&&vt.shift()}var hn=pt.ReactCurrentBatchConfig,Eo=!0;function Hp(e,t,n,r){var o=D,i=hn.transition;hn.transition=null;try{D=1,Ta(e,t,n,r)}finally{D=o,hn.transition=i}}function Qp(e,t,n,r){var o=D,i=hn.transition;hn.transition=null;try{D=4,Ta(e,t,n,r)}finally{D=o,hn.transition=i}}function Ta(e,t,n,r){if(Eo){var o=zl(e,t,n,r);if(o===null)Zi(e,t,r,Co,n),Fs(e,r);else if(Vp(o,e,t,n,r))r.stopPropagation();else if(Fs(e,r),t&4&&-1<Bp.indexOf(e)){for(;o!==null;){var i=Ir(o);if(i!==null&&Mc(i),i=zl(e,t,n,r),i===null&&Zi(e,t,r,Co,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Zi(e,t,r,null,n)}}var Co=null;function zl(e,t,n,r){if(Co=null,e=Ca(r),e=Ut(e),e!==null)if(t=Jt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Tc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Co=e,null}function Bc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jp()){case _a:return 1;case jc:return 4;case So:case Op:return 16;case Oc:return 536870912;default:return 16}default:return 16}}var wt=null,Ra=null,io=null;function Vc(){if(io)return io;var e,t=Ra,n=t.length,r,o="value"in wt?wt.value:wt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return io=o.slice(e,1<r?1-r:void 0)}function lo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wr(){return!0}function Us(){return!1}function Oe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Wr:Us,this.isPropagationStopped=Us,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wr)},persist:function(){},isPersistent:Wr}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},za=Oe(Tn),zr=Y({},Tn,{view:0,detail:0}),Gp=Oe(zr),Bi,Vi,Un,Go=Y({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ia,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Un&&(Un&&e.type==="mousemove"?(Bi=e.screenX-Un.screenX,Vi=e.screenY-Un.screenY):Vi=Bi=0,Un=e),Bi)},movementY:function(e){return"movementY"in e?e.movementY:Vi}}),As=Oe(Go),Yp=Y({},Go,{dataTransfer:0}),Xp=Oe(Yp),Kp=Y({},zr,{relatedTarget:0}),Wi=Oe(Kp),Zp=Y({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0}),Jp=Oe(Zp),qp=Y({},Tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bp=Oe(qp),e0=Y({},Tn,{data:0}),Bs=Oe(e0),t0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=r0[e])?!!t[e]:!1}function Ia(){return o0}var i0=Y({},zr,{key:function(e){if(e.key){var t=t0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=lo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?n0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ia,charCode:function(e){return e.type==="keypress"?lo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?lo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),l0=Oe(i0),a0=Y({},Go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vs=Oe(a0),s0=Y({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ia}),u0=Oe(s0),c0=Y({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),f0=Oe(c0),d0=Y({},Go,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),p0=Oe(d0),m0=[9,13,27,32],ja=ut&&"CompositionEvent"in window,Jn=null;ut&&"documentMode"in document&&(Jn=document.documentMode);var h0=ut&&"TextEvent"in window&&!Jn,Wc=ut&&(!ja||Jn&&8<Jn&&11>=Jn),Ws=" ",Hs=!1;function Hc(e,t){switch(e){case"keyup":return m0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tn=!1;function g0(e,t){switch(e){case"compositionend":return Qc(t);case"keypress":return t.which!==32?null:(Hs=!0,Ws);case"textInput":return e=t.data,e===Ws&&Hs?null:e;default:return null}}function v0(e,t){if(tn)return e==="compositionend"||!ja&&Hc(e,t)?(e=Vc(),io=Ra=wt=null,tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wc&&t.locale!=="ko"?null:t.data;default:return null}}var y0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!y0[e.type]:t==="textarea"}function Gc(e,t,n,r){Ec(r),t=_o(t,"onChange"),0<t.length&&(n=new za("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,cr=null;function w0(e){rf(e,0)}function Yo(e){var t=on(e);if(gc(t))return e}function x0(e,t){if(e==="change")return t}var Yc=!1;if(ut){var Hi;if(ut){var Qi="oninput"in document;if(!Qi){var Gs=document.createElement("div");Gs.setAttribute("oninput","return;"),Qi=typeof Gs.oninput=="function"}Hi=Qi}else Hi=!1;Yc=Hi&&(!document.documentMode||9<document.documentMode)}function Ys(){qn&&(qn.detachEvent("onpropertychange",Xc),cr=qn=null)}function Xc(e){if(e.propertyName==="value"&&Yo(cr)){var t=[];Gc(t,cr,e,Ca(e)),Pc(w0,t)}}function S0(e,t,n){e==="focusin"?(Ys(),qn=t,cr=n,qn.attachEvent("onpropertychange",Xc)):e==="focusout"&&Ys()}function k0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(cr)}function E0(e,t){if(e==="click")return Yo(t)}function C0(e,t){if(e==="input"||e==="change")return Yo(t)}function _0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:_0;function fr(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!dl.call(t,o)||!Ke(e[o],t[o]))return!1}return!0}function Xs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ks(e,t){var n=Xs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xs(n)}}function Kc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zc(){for(var e=window,t=yo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yo(e.document)}return t}function Oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function N0(e){var t=Zc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Kc(n.ownerDocument.documentElement,n)){if(r!==null&&Oa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ks(n,i);var l=Ks(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var P0=ut&&"documentMode"in document&&11>=document.documentMode,nn=null,Il=null,bn=null,jl=!1;function Zs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jl||nn==null||nn!==yo(r)||(r=nn,"selectionStart"in r&&Oa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bn&&fr(bn,r)||(bn=r,r=_o(Il,"onSelect"),0<r.length&&(t=new za("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nn)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rn={animationend:Hr("Animation","AnimationEnd"),animationiteration:Hr("Animation","AnimationIteration"),animationstart:Hr("Animation","AnimationStart"),transitionend:Hr("Transition","TransitionEnd")},Gi={},Jc={};ut&&(Jc=document.createElement("div").style,"AnimationEvent"in window||(delete rn.animationend.animation,delete rn.animationiteration.animation,delete rn.animationstart.animation),"TransitionEvent"in window||delete rn.transitionend.transition);function Xo(e){if(Gi[e])return Gi[e];if(!rn[e])return e;var t=rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jc)return Gi[e]=t[n];return e}var qc=Xo("animationend"),bc=Xo("animationiteration"),ef=Xo("animationstart"),tf=Xo("transitionend"),nf=new Map,Js="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,t){nf.set(e,t),Zt(t,[e])}for(var Yi=0;Yi<Js.length;Yi++){var Xi=Js[Yi],T0=Xi.toLowerCase(),R0=Xi[0].toUpperCase()+Xi.slice(1);jt(T0,"on"+R0)}jt(qc,"onAnimationEnd");jt(bc,"onAnimationIteration");jt(ef,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(tf,"onTransitionEnd");wn("onMouseEnter",["mouseout","mouseover"]);wn("onMouseLeave",["mouseout","mouseover"]);wn("onPointerEnter",["pointerout","pointerover"]);wn("onPointerLeave",["pointerout","pointerover"]);Zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xn));function qs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Tp(r,t,void 0,e),e.currentTarget=null}function rf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;qs(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;qs(o,a,u),i=s}}}if(xo)throw e=Pl,xo=!1,Pl=null,e}function V(e,t){var n=t[Fl];n===void 0&&(n=t[Fl]=new Set);var r=e+"__bubble";n.has(r)||(of(t,e,2,!1),n.add(r))}function Ki(e,t,n){var r=0;t&&(r|=4),of(n,e,r,t)}var Qr="_reactListening"+Math.random().toString(36).slice(2);function dr(e){if(!e[Qr]){e[Qr]=!0,fc.forEach(function(n){n!=="selectionchange"&&(z0.has(n)||Ki(n,!1,e),Ki(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qr]||(t[Qr]=!0,Ki("selectionchange",!1,t))}}function of(e,t,n,r){switch(Bc(t)){case 1:var o=Hp;break;case 4:o=Qp;break;default:o=Ta}n=o.bind(null,t,n,e),o=void 0,!Nl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Zi(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Ut(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Pc(function(){var u=i,m=Ca(n),d=[];e:{var h=nf.get(e);if(h!==void 0){var y=za,v=e;switch(e){case"keypress":if(lo(n)===0)break e;case"keydown":case"keyup":y=l0;break;case"focusin":v="focus",y=Wi;break;case"focusout":v="blur",y=Wi;break;case"beforeblur":case"afterblur":y=Wi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=As;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Xp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=u0;break;case qc:case bc:case ef:y=Jp;break;case tf:y=f0;break;case"scroll":y=Gp;break;case"wheel":y=p0;break;case"copy":case"cut":case"paste":y=bp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Vs}var g=(t&4)!==0,k=!g&&e==="scroll",f=g?h!==null?h+"Capture":null:h;g=[];for(var c=u,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=lr(c,f),w!=null&&g.push(pr(c,w,p)))),k)break;c=c.return}0<g.length&&(h=new y(h,v,null,n,m),d.push({event:h,listeners:g}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==Cl&&(v=n.relatedTarget||n.fromElement)&&(Ut(v)||v[ct]))break e;if((y||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?Ut(v):null,v!==null&&(k=Jt(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(g=As,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(g=Vs,w="onPointerLeave",f="onPointerEnter",c="pointer"),k=y==null?h:on(y),p=v==null?h:on(v),h=new g(w,c+"leave",y,n,m),h.target=k,h.relatedTarget=p,w=null,Ut(m)===u&&(g=new g(f,c+"enter",v,n,m),g.target=p,g.relatedTarget=k,w=g),k=w,y&&v)t:{for(g=y,f=v,c=0,p=g;p;p=qt(p))c++;for(p=0,w=f;w;w=qt(w))p++;for(;0<c-p;)g=qt(g),c--;for(;0<p-c;)f=qt(f),p--;for(;c--;){if(g===f||f!==null&&g===f.alternate)break t;g=qt(g),f=qt(f)}g=null}else g=null;y!==null&&bs(d,h,y,g,!1),v!==null&&k!==null&&bs(d,k,v,g,!0)}}e:{if(h=u?on(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var N=x0;else if(Qs(h))if(Yc)N=C0;else{N=k0;var P=S0}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=E0);if(N&&(N=N(e,u))){Gc(d,N,n,m);break e}P&&P(e,h,u),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&wl(h,"number",h.value)}switch(P=u?on(u):window,e){case"focusin":(Qs(P)||P.contentEditable==="true")&&(nn=P,Il=u,bn=null);break;case"focusout":bn=Il=nn=null;break;case"mousedown":jl=!0;break;case"contextmenu":case"mouseup":case"dragend":jl=!1,Zs(d,n,m);break;case"selectionchange":if(P0)break;case"keydown":case"keyup":Zs(d,n,m)}var E;if(ja)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else tn?Hc(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Wc&&n.locale!=="ko"&&(tn||z!=="onCompositionStart"?z==="onCompositionEnd"&&tn&&(E=Vc()):(wt=m,Ra="value"in wt?wt.value:wt.textContent,tn=!0)),P=_o(u,z),0<P.length&&(z=new Bs(z,e,null,n,m),d.push({event:z,listeners:P}),E?z.data=E:(E=Qc(n),E!==null&&(z.data=E)))),(E=h0?g0(e,n):v0(e,n))&&(u=_o(u,"onBeforeInput"),0<u.length&&(m=new Bs("onBeforeInput","beforeinput",null,n,m),d.push({event:m,listeners:u}),m.data=E))}rf(d,t)})}function pr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _o(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=lr(e,n),i!=null&&r.unshift(pr(e,i,o)),i=lr(e,t),i!=null&&r.push(pr(e,i,o))),e=e.return}return r}function qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function bs(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=lr(n,i),s!=null&&l.unshift(pr(n,s,a))):o||(s=lr(n,i),s!=null&&l.push(pr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var I0=/\r\n?/g,j0=/\u0000|\uFFFD/g;function eu(e){return(typeof e=="string"?e:""+e).replace(I0,`
`).replace(j0,"")}function Gr(e,t,n){if(t=eu(t),eu(e)!==t&&n)throw Error(S(425))}function No(){}var Ol=null,Ll=null;function $l(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ml=typeof setTimeout=="function"?setTimeout:void 0,O0=typeof clearTimeout=="function"?clearTimeout:void 0,tu=typeof Promise=="function"?Promise:void 0,L0=typeof queueMicrotask=="function"?queueMicrotask:typeof tu<"u"?function(e){return tu.resolve(null).then(e).catch($0)}:Ml;function $0(e){setTimeout(function(){throw e})}function Ji(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ur(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ur(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rn=Math.random().toString(36).slice(2),et="__reactFiber$"+Rn,mr="__reactProps$"+Rn,ct="__reactContainer$"+Rn,Fl="__reactEvents$"+Rn,M0="__reactListeners$"+Rn,F0="__reactHandles$"+Rn;function Ut(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nu(e);e!==null;){if(n=e[et])return n;e=nu(e)}return t}e=n,n=e.parentNode}return null}function Ir(e){return e=e[et]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function on(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Ko(e){return e[mr]||null}var Dl=[],ln=-1;function Ot(e){return{current:e}}function W(e){0>ln||(e.current=Dl[ln],Dl[ln]=null,ln--)}function B(e,t){ln++,Dl[ln]=e.current,e.current=t}var It={},ge=Ot(It),Ee=Ot(!1),Qt=It;function xn(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ce(e){return e=e.childContextTypes,e!=null}function Po(){W(Ee),W(ge)}function ru(e,t,n){if(ge.current!==It)throw Error(S(168));B(ge,t),B(Ee,n)}function lf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,Sp(e)||"Unknown",o));return Y({},n,r)}function To(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,Qt=ge.current,B(ge,e),B(Ee,Ee.current),!0}function ou(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=lf(e,t,Qt),r.__reactInternalMemoizedMergedChildContext=e,W(Ee),W(ge),B(ge,e)):W(Ee),B(Ee,n)}var it=null,Zo=!1,qi=!1;function af(e){it===null?it=[e]:it.push(e)}function D0(e){Zo=!0,af(e)}function Lt(){if(!qi&&it!==null){qi=!0;var e=0,t=D;try{var n=it;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}it=null,Zo=!1}catch(o){throw it!==null&&(it=it.slice(e+1)),Ic(_a,Lt),o}finally{D=t,qi=!1}}return null}var an=[],sn=0,Ro=null,zo=0,$e=[],Me=0,Gt=null,lt=1,at="";function Ft(e,t){an[sn++]=zo,an[sn++]=Ro,Ro=e,zo=t}function sf(e,t,n){$e[Me++]=lt,$e[Me++]=at,$e[Me++]=Gt,Gt=e;var r=lt;e=at;var o=32-Ye(r)-1;r&=~(1<<o),n+=1;var i=32-Ye(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,lt=1<<32-Ye(t)+o|n<<o|r,at=i+e}else lt=1<<i|n<<o|r,at=e}function La(e){e.return!==null&&(Ft(e,1),sf(e,1,0))}function $a(e){for(;e===Ro;)Ro=an[--sn],an[sn]=null,zo=an[--sn],an[sn]=null;for(;e===Gt;)Gt=$e[--Me],$e[Me]=null,at=$e[--Me],$e[Me]=null,lt=$e[--Me],$e[Me]=null}var Re=null,Te=null,H=!1,Ge=null;function uf(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function iu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Te=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Te=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gt!==null?{id:lt,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,Te=null,!0):!1;default:return!1}}function Ul(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Al(e){if(H){var t=Te;if(t){var n=t;if(!iu(e,t)){if(Ul(e))throw Error(S(418));t=_t(n.nextSibling);var r=Re;t&&iu(e,t)?uf(r,n):(e.flags=e.flags&-4097|2,H=!1,Re=e)}}else{if(Ul(e))throw Error(S(418));e.flags=e.flags&-4097|2,H=!1,Re=e}}}function lu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function Yr(e){if(e!==Re)return!1;if(!H)return lu(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$l(e.type,e.memoizedProps)),t&&(t=Te)){if(Ul(e))throw cf(),Error(S(418));for(;t;)uf(e,t),t=_t(t.nextSibling)}if(lu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Te=_t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Te=null}}else Te=Re?_t(e.stateNode.nextSibling):null;return!0}function cf(){for(var e=Te;e;)e=_t(e.nextSibling)}function Sn(){Te=Re=null,H=!1}function Ma(e){Ge===null?Ge=[e]:Ge.push(e)}var U0=pt.ReactCurrentBatchConfig;function He(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Io=Ot(null),jo=null,un=null,Fa=null;function Da(){Fa=un=jo=null}function Ua(e){var t=Io.current;W(Io),e._currentValue=t}function Bl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gn(e,t){jo=e,Fa=un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(Fa!==e)if(e={context:e,memoizedValue:t,next:null},un===null){if(jo===null)throw Error(S(308));un=e,jo.dependencies={lanes:0,firstContext:e}}else un=un.next=e;return t}var At=null;function Aa(e){At===null?At=[e]:At.push(e)}function ff(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Aa(t)):(n.next=o.next,o.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gt=!1;function Ba(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function df(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ft(e,n)}return o=r.interleaved,o===null?(t.next=t,Aa(r)):(t.next=o.next,o.next=t),r.interleaved=t,ft(e,n)}function ao(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Na(e,n)}}function au(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Oo(e,t,n,r){var o=e.updateQueue;gt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=u:a.next=u,m.lastBaseUpdate=s))}if(i!==null){var d=o.baseState;l=0,m=u=s=null,a=i;do{var h=a.lane,y=a.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,g=a;switch(h=t,y=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){d=v.call(y,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,h=typeof v=="function"?v.call(y,d,h):v,h==null)break e;d=Y({},d,h);break e;case 2:gt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(u=m=y,s=d):m=m.next=y,l|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(m===null&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Xt|=l,e.lanes=l,e.memoizedState=d}}function su(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var pf=new cc.Component().refs;function Vl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jo={isMounted:function(e){return(e=e._reactInternals)?Jt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Tt(e),i=st(r,o);i.payload=t,n!=null&&(i.callback=n),t=Nt(e,i,o),t!==null&&(Xe(t,e,o,r),ao(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Tt(e),i=st(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Nt(e,i,o),t!==null&&(Xe(t,e,o,r),ao(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Tt(e),o=st(n,r);o.tag=2,t!=null&&(o.callback=t),t=Nt(e,o,r),t!==null&&(Xe(t,e,r,n),ao(t,e,r))}};function uu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!fr(n,r)||!fr(o,i):!0}function mf(e,t,n){var r=!1,o=It,i=t.contextType;return typeof i=="object"&&i!==null?i=Ue(i):(o=Ce(t)?Qt:ge.current,r=t.contextTypes,i=(r=r!=null)?xn(e,o):It),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Jo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function cu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Jo.enqueueReplaceState(t,t.state,null)}function Wl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=pf,Ba(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ue(i):(i=Ce(t)?Qt:ge.current,o.context=xn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Vl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Jo.enqueueReplaceState(o,o.state,null),Oo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function An(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===pf&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Xr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fu(e){var t=e._init;return t(e._payload)}function hf(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=Rt(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,w){return c===null||c.tag!==6?(c=il(p,f.mode,w),c.return=f,c):(c=o(c,p),c.return=f,c)}function s(f,c,p,w){var N=p.type;return N===en?m(f,c,p.props.children,w,p.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ht&&fu(N)===c.type)?(w=o(c,p.props),w.ref=An(f,c,p),w.return=f,w):(w=mo(p.type,p.key,p.props,null,f.mode,w),w.ref=An(f,c,p),w.return=f,w)}function u(f,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=ll(p,f.mode,w),c.return=f,c):(c=o(c,p.children||[]),c.return=f,c)}function m(f,c,p,w,N){return c===null||c.tag!==7?(c=Wt(p,f.mode,w,N),c.return=f,c):(c=o(c,p),c.return=f,c)}function d(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=il(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Fr:return p=mo(c.type,c.key,c.props,null,f.mode,p),p.ref=An(f,null,c),p.return=f,p;case bt:return c=ll(c,f.mode,p),c.return=f,c;case ht:var w=c._init;return d(f,w(c._payload),p)}if(Gn(c)||$n(c))return c=Wt(c,f.mode,p,null),c.return=f,c;Xr(f,c)}return null}function h(f,c,p,w){var N=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:a(f,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Fr:return p.key===N?s(f,c,p,w):null;case bt:return p.key===N?u(f,c,p,w):null;case ht:return N=p._init,h(f,c,N(p._payload),w)}if(Gn(p)||$n(p))return N!==null?null:m(f,c,p,w,null);Xr(f,p)}return null}function y(f,c,p,w,N){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,a(c,f,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Fr:return f=f.get(w.key===null?p:w.key)||null,s(c,f,w,N);case bt:return f=f.get(w.key===null?p:w.key)||null,u(c,f,w,N);case ht:var P=w._init;return y(f,c,p,P(w._payload),N)}if(Gn(w)||$n(w))return f=f.get(p)||null,m(c,f,w,N,null);Xr(c,w)}return null}function v(f,c,p,w){for(var N=null,P=null,E=c,z=c=0,K=null;E!==null&&z<p.length;z++){E.index>z?(K=E,E=null):K=E.sibling;var L=h(f,E,p[z],w);if(L===null){E===null&&(E=K);break}e&&E&&L.alternate===null&&t(f,E),c=i(L,c,z),P===null?N=L:P.sibling=L,P=L,E=K}if(z===p.length)return n(f,E),H&&Ft(f,z),N;if(E===null){for(;z<p.length;z++)E=d(f,p[z],w),E!==null&&(c=i(E,c,z),P===null?N=E:P.sibling=E,P=E);return H&&Ft(f,z),N}for(E=r(f,E);z<p.length;z++)K=y(E,f,z,p[z],w),K!==null&&(e&&K.alternate!==null&&E.delete(K.key===null?z:K.key),c=i(K,c,z),P===null?N=K:P.sibling=K,P=K);return e&&E.forEach(function(Ve){return t(f,Ve)}),H&&Ft(f,z),N}function g(f,c,p,w){var N=$n(p);if(typeof N!="function")throw Error(S(150));if(p=N.call(p),p==null)throw Error(S(151));for(var P=N=null,E=c,z=c=0,K=null,L=p.next();E!==null&&!L.done;z++,L=p.next()){E.index>z?(K=E,E=null):K=E.sibling;var Ve=h(f,E,L.value,w);if(Ve===null){E===null&&(E=K);break}e&&E&&Ve.alternate===null&&t(f,E),c=i(Ve,c,z),P===null?N=Ve:P.sibling=Ve,P=Ve,E=K}if(L.done)return n(f,E),H&&Ft(f,z),N;if(E===null){for(;!L.done;z++,L=p.next())L=d(f,L.value,w),L!==null&&(c=i(L,c,z),P===null?N=L:P.sibling=L,P=L);return H&&Ft(f,z),N}for(E=r(f,E);!L.done;z++,L=p.next())L=y(E,f,z,L.value,w),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?z:L.key),c=i(L,c,z),P===null?N=L:P.sibling=L,P=L);return e&&E.forEach(function(On){return t(f,On)}),H&&Ft(f,z),N}function k(f,c,p,w){if(typeof p=="object"&&p!==null&&p.type===en&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Fr:e:{for(var N=p.key,P=c;P!==null;){if(P.key===N){if(N=p.type,N===en){if(P.tag===7){n(f,P.sibling),c=o(P,p.props.children),c.return=f,f=c;break e}}else if(P.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ht&&fu(N)===P.type){n(f,P.sibling),c=o(P,p.props),c.ref=An(f,P,p),c.return=f,f=c;break e}n(f,P);break}else t(f,P);P=P.sibling}p.type===en?(c=Wt(p.props.children,f.mode,w,p.key),c.return=f,f=c):(w=mo(p.type,p.key,p.props,null,f.mode,w),w.ref=An(f,c,p),w.return=f,f=w)}return l(f);case bt:e:{for(P=p.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=o(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ll(p,f.mode,w),c.return=f,f=c}return l(f);case ht:return P=p._init,k(f,c,P(p._payload),w)}if(Gn(p))return v(f,c,p,w);if($n(p))return g(f,c,p,w);Xr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,p),c.return=f,f=c):(n(f,c),c=il(p,f.mode,w),c.return=f,f=c),l(f)):n(f,c)}return k}var kn=hf(!0),gf=hf(!1),jr={},nt=Ot(jr),hr=Ot(jr),gr=Ot(jr);function Bt(e){if(e===jr)throw Error(S(174));return e}function Va(e,t){switch(B(gr,t),B(hr,e),B(nt,jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sl(t,e)}W(nt),B(nt,t)}function En(){W(nt),W(hr),W(gr)}function vf(e){Bt(gr.current);var t=Bt(nt.current),n=Sl(t,e.type);t!==n&&(B(hr,e),B(nt,n))}function Wa(e){hr.current===e&&(W(nt),W(hr))}var Q=Ot(0);function Lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bi=[];function Ha(){for(var e=0;e<bi.length;e++)bi[e]._workInProgressVersionPrimary=null;bi.length=0}var so=pt.ReactCurrentDispatcher,el=pt.ReactCurrentBatchConfig,Yt=0,G=null,ee=null,ie=null,$o=!1,er=!1,vr=0,A0=0;function de(){throw Error(S(321))}function Qa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function Ga(e,t,n,r,o,i){if(Yt=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,so.current=e===null||e.memoizedState===null?H0:Q0,e=n(r,o),er){i=0;do{if(er=!1,vr=0,25<=i)throw Error(S(301));i+=1,ie=ee=null,t.updateQueue=null,so.current=G0,e=n(r,o)}while(er)}if(so.current=Mo,t=ee!==null&&ee.next!==null,Yt=0,ie=ee=G=null,$o=!1,t)throw Error(S(300));return e}function Ya(){var e=vr!==0;return vr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?G.memoizedState=ie=e:ie=ie.next=e,ie}function Ae(){if(ee===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=ie===null?G.memoizedState:ie.next;if(t!==null)ie=t,ee=e;else{if(e===null)throw Error(S(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ie===null?G.memoizedState=ie=e:ie=ie.next=e}return ie}function yr(e,t){return typeof t=="function"?t(e):t}function tl(e){var t=Ae(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ee,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var m=u.lane;if((Yt&m)===m)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=d,l=r):s=s.next=d,G.lanes|=m,Xt|=m}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,Ke(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,G.lanes|=i,Xt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function nl(e){var t=Ae(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ke(i,t.memoizedState)||(ke=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function yf(){}function wf(e,t){var n=G,r=Ae(),o=t(),i=!Ke(r.memoizedState,o);if(i&&(r.memoizedState=o,ke=!0),r=r.queue,Xa(kf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,wr(9,Sf.bind(null,n,r,o,t),void 0,null),le===null)throw Error(S(349));Yt&30||xf(n,t,o)}return o}function xf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sf(e,t,n,r){t.value=n,t.getSnapshot=r,Ef(t)&&Cf(e)}function kf(e,t,n){return n(function(){Ef(t)&&Cf(e)})}function Ef(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function Cf(e){var t=ft(e,1);t!==null&&Xe(t,e,1,-1)}function du(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yr,lastRenderedState:e},t.queue=e,e=e.dispatch=W0.bind(null,G,e),[t.memoizedState,e]}function wr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _f(){return Ae().memoizedState}function uo(e,t,n,r){var o=Je();G.flags|=e,o.memoizedState=wr(1|t,n,void 0,r===void 0?null:r)}function qo(e,t,n,r){var o=Ae();r=r===void 0?null:r;var i=void 0;if(ee!==null){var l=ee.memoizedState;if(i=l.destroy,r!==null&&Qa(r,l.deps)){o.memoizedState=wr(t,n,i,r);return}}G.flags|=e,o.memoizedState=wr(1|t,n,i,r)}function pu(e,t){return uo(8390656,8,e,t)}function Xa(e,t){return qo(2048,8,e,t)}function Nf(e,t){return qo(4,2,e,t)}function Pf(e,t){return qo(4,4,e,t)}function Tf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rf(e,t,n){return n=n!=null?n.concat([e]):null,qo(4,4,Tf.bind(null,t,e),n)}function Ka(){}function zf(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function If(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function jf(e,t,n){return Yt&21?(Ke(n,t)||(n=Lc(),G.lanes|=n,Xt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function B0(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=el.transition;el.transition={};try{e(!1),t()}finally{D=n,el.transition=r}}function Of(){return Ae().memoizedState}function V0(e,t,n){var r=Tt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lf(e))$f(t,n);else if(n=ff(e,t,n,r),n!==null){var o=ye();Xe(n,e,r,o),Mf(n,t,r)}}function W0(e,t,n){var r=Tt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lf(e))$f(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Ke(a,l)){var s=t.interleaved;s===null?(o.next=o,Aa(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=ff(e,t,o,r),n!==null&&(o=ye(),Xe(n,e,r,o),Mf(n,t,r))}}function Lf(e){var t=e.alternate;return e===G||t!==null&&t===G}function $f(e,t){er=$o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Mf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Na(e,n)}}var Mo={readContext:Ue,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},H0={readContext:Ue,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:pu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,uo(4194308,4,Tf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return uo(4194308,4,e,t)},useInsertionEffect:function(e,t){return uo(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=V0.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:du,useDebugValue:Ka,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=du(!1),t=e[0];return e=B0.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,o=Je();if(H){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),le===null)throw Error(S(349));Yt&30||xf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,pu(kf.bind(null,r,i,e),[e]),r.flags|=2048,wr(9,Sf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Je(),t=le.identifierPrefix;if(H){var n=at,r=lt;n=(r&~(1<<32-Ye(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=A0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Q0={readContext:Ue,useCallback:zf,useContext:Ue,useEffect:Xa,useImperativeHandle:Rf,useInsertionEffect:Nf,useLayoutEffect:Pf,useMemo:If,useReducer:tl,useRef:_f,useState:function(){return tl(yr)},useDebugValue:Ka,useDeferredValue:function(e){var t=Ae();return jf(t,ee.memoizedState,e)},useTransition:function(){var e=tl(yr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:yf,useSyncExternalStore:wf,useId:Of,unstable_isNewReconciler:!1},G0={readContext:Ue,useCallback:zf,useContext:Ue,useEffect:Xa,useImperativeHandle:Rf,useInsertionEffect:Nf,useLayoutEffect:Pf,useMemo:If,useReducer:nl,useRef:_f,useState:function(){return nl(yr)},useDebugValue:Ka,useDeferredValue:function(e){var t=Ae();return ee===null?t.memoizedState=e:jf(t,ee.memoizedState,e)},useTransition:function(){var e=nl(yr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:yf,useSyncExternalStore:wf,useId:Of,unstable_isNewReconciler:!1};function Cn(e,t){try{var n="",r=t;do n+=xp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function rl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Y0=typeof WeakMap=="function"?WeakMap:Map;function Ff(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Do||(Do=!0,ea=r),Hl(e,t)},n}function Df(e,t,n){n=st(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Hl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Hl(e,t),typeof r!="function"&&(Pt===null?Pt=new Set([this]):Pt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function mu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Y0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=am.bind(null,e,t,n),t.then(e,e))}function hu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=st(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var X0=pt.ReactCurrentOwner,ke=!1;function ve(e,t,n,r){t.child=e===null?gf(t,null,n,r):kn(t,e.child,n,r)}function vu(e,t,n,r,o){n=n.render;var i=t.ref;return gn(t,o),r=Ga(e,t,n,r,i,o),n=Ya(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,dt(e,t,o)):(H&&n&&La(t),t.flags|=1,ve(e,t,r,o),t.child)}function yu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!rs(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Uf(e,t,i,r,o)):(e=mo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:fr,n(l,r)&&e.ref===t.ref)return dt(e,t,o)}return t.flags|=1,e=Rt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Uf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(fr(i,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,dt(e,t,o)}return Ql(e,t,n,r,o)}function Af(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(fn,Pe),Pe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(fn,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,B(fn,Pe),Pe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,B(fn,Pe),Pe|=r;return ve(e,t,o,n),t.child}function Bf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ql(e,t,n,r,o){var i=Ce(n)?Qt:ge.current;return i=xn(t,i),gn(t,o),n=Ga(e,t,n,r,i,o),r=Ya(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,dt(e,t,o)):(H&&r&&La(t),t.flags|=1,ve(e,t,n,o),t.child)}function wu(e,t,n,r,o){if(Ce(n)){var i=!0;To(t)}else i=!1;if(gn(t,o),t.stateNode===null)co(e,t),mf(t,n,r),Wl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ue(u):(u=Ce(n)?Qt:ge.current,u=xn(t,u));var m=n.getDerivedStateFromProps,d=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&cu(t,l,r,u),gt=!1;var h=t.memoizedState;l.state=h,Oo(t,r,l,o),s=t.memoizedState,a!==r||h!==s||Ee.current||gt?(typeof m=="function"&&(Vl(t,n,m,r),s=t.memoizedState),(a=gt||uu(t,n,a,r,h,s,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,df(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:He(t.type,a),l.props=u,d=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ue(s):(s=Ce(n)?Qt:ge.current,s=xn(t,s));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==d||h!==s)&&cu(t,l,r,s),gt=!1,h=t.memoizedState,l.state=h,Oo(t,r,l,o);var v=t.memoizedState;a!==d||h!==v||Ee.current||gt?(typeof y=="function"&&(Vl(t,n,y,r),v=t.memoizedState),(u=gt||uu(t,n,u,r,h,v,s)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Gl(e,t,n,r,i,o)}function Gl(e,t,n,r,o,i){Bf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&ou(t,n,!1),dt(e,t,i);r=t.stateNode,X0.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=kn(t,e.child,null,i),t.child=kn(t,null,a,i)):ve(e,t,a,i),t.memoizedState=r.state,o&&ou(t,n,!0),t.child}function Vf(e){var t=e.stateNode;t.pendingContext?ru(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ru(e,t.context,!1),Va(e,t.containerInfo)}function xu(e,t,n,r,o){return Sn(),Ma(o),t.flags|=256,ve(e,t,n,r),t.child}var Yl={dehydrated:null,treeContext:null,retryLane:0};function Xl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wf(e,t,n){var r=t.pendingProps,o=Q.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),B(Q,o&1),e===null)return Al(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=ti(l,r,0,null),e=Wt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Xl(n),t.memoizedState=Yl,e):Za(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return K0(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Rt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Rt(a,i):(i=Wt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Xl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Yl,r}return i=e.child,e=i.sibling,r=Rt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Za(e,t){return t=ti({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Kr(e,t,n,r){return r!==null&&Ma(r),kn(t,e.child,null,n),e=Za(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function K0(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=rl(Error(S(422))),Kr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ti({mode:"visible",children:r.children},o,0,null),i=Wt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&kn(t,e.child,null,l),t.child.memoizedState=Xl(l),t.memoizedState=Yl,i);if(!(t.mode&1))return Kr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(S(419)),r=rl(i,r,void 0),Kr(e,t,l,r)}if(a=(l&e.childLanes)!==0,ke||a){if(r=le,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,ft(e,o),Xe(r,e,o,-1))}return ns(),r=rl(Error(S(421))),Kr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=sm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Te=_t(o.nextSibling),Re=t,H=!0,Ge=null,e!==null&&($e[Me++]=lt,$e[Me++]=at,$e[Me++]=Gt,lt=e.id,at=e.overflow,Gt=t),t=Za(t,r.children),t.flags|=4096,t)}function Su(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Bl(e.return,t,n)}function ol(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Hf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ve(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Su(e,n,t);else if(e.tag===19)Su(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(Q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Lo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ol(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Lo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ol(t,!0,n,null,i);break;case"together":ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function co(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Rt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Z0(e,t,n){switch(t.tag){case 3:Vf(t),Sn();break;case 5:vf(t);break;case 1:Ce(t.type)&&To(t);break;case 4:Va(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;B(Io,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Wf(e,t,n):(B(Q,Q.current&1),e=dt(e,t,n),e!==null?e.sibling:null);B(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Hf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Af(e,t,n)}return dt(e,t,n)}var Qf,Kl,Gf,Yf;Qf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kl=function(){};Gf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Bt(nt.current);var i=null;switch(n){case"input":o=vl(e,o),r=vl(e,r),i=[];break;case"select":o=Y({},o,{value:void 0}),r=Y({},r,{value:void 0}),i=[];break;case"textarea":o=xl(e,o),r=xl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=No)}kl(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(or.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(or.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&V("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Yf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Bn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function J0(e,t,n){var r=t.pendingProps;switch($a(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ce(t.type)&&Po(),pe(t),null;case 3:return r=t.stateNode,En(),W(Ee),W(ge),Ha(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ge!==null&&(ra(Ge),Ge=null))),Kl(e,t),pe(t),null;case 5:Wa(t);var o=Bt(gr.current);if(n=t.type,e!==null&&t.stateNode!=null)Gf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return pe(t),null}if(e=Bt(nt.current),Yr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[et]=t,r[mr]=i,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<Xn.length;o++)V(Xn[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":zs(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":js(r,i),V("invalid",r)}kl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Gr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Gr(r.textContent,a,e),o=["children",""+a]):or.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&V("scroll",r)}switch(n){case"input":Dr(r),Is(r,i,!0);break;case"textarea":Dr(r),Os(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=No)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[et]=t,e[mr]=r,Qf(e,t,!1,!1),t.stateNode=e;e:{switch(l=El(n,r),n){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<Xn.length;o++)V(Xn[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":zs(e,r),o=vl(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Y({},r,{value:void 0}),V("invalid",e);break;case"textarea":js(e,r),o=xl(e,r),V("invalid",e);break;default:o=r}kl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?kc(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&xc(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ir(e,s):typeof s=="number"&&ir(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(or.hasOwnProperty(i)?s!=null&&i==="onScroll"&&V("scroll",e):s!=null&&xa(e,i,s,l))}switch(n){case"input":Dr(e),Is(e,r,!1);break;case"textarea":Dr(e),Os(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?dn(e,!!r.multiple,i,!1):r.defaultValue!=null&&dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=No)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)Yf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Bt(gr.current),Bt(nt.current),Yr(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(i=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:Gr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return pe(t),null;case 13:if(W(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Te!==null&&t.mode&1&&!(t.flags&128))cf(),Sn(),t.flags|=98560,i=!1;else if(i=Yr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[et]=t}else Sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),i=!1}else Ge!==null&&(ra(Ge),Ge=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?te===0&&(te=3):ns())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return En(),Kl(e,t),e===null&&dr(t.stateNode.containerInfo),pe(t),null;case 10:return Ua(t.type._context),pe(t),null;case 17:return Ce(t.type)&&Po(),pe(t),null;case 19:if(W(Q),i=t.memoizedState,i===null)return pe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Bn(i,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Lo(e),l!==null){for(t.flags|=128,Bn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(Q,Q.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>_n&&(t.flags|=128,r=!0,Bn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Lo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Bn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!H)return pe(t),null}else 2*J()-i.renderingStartTime>_n&&n!==1073741824&&(t.flags|=128,r=!0,Bn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=Q.current,B(Q,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return ts(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function q0(e,t){switch($a(t),t.tag){case 1:return Ce(t.type)&&Po(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return En(),W(Ee),W(ge),Ha(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wa(t),null;case 13:if(W(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Q),null;case 4:return En(),null;case 10:return Ua(t.type._context),null;case 22:case 23:return ts(),null;case 24:return null;default:return null}}var Zr=!1,he=!1,b0=typeof WeakSet=="function"?WeakSet:Set,T=null;function cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Zl(e,t,n){try{n()}catch(r){X(e,t,r)}}var ku=!1;function em(e,t){if(Ol=Eo,e=Zc(),Oa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,m=0,d=e,h=null;t:for(;;){for(var y;d!==n||o!==0&&d.nodeType!==3||(a=l+o),d!==i||r!==0&&d.nodeType!==3||(s=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(y=d.firstChild)!==null;)h=d,d=y;for(;;){if(d===e)break t;if(h===n&&++u===o&&(a=l),h===i&&++m===r&&(s=l),(y=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ll={focusedElem:e,selectionRange:n},Eo=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,k=v.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?g:He(t.type,g),k);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){X(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return v=ku,ku=!1,v}function tr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Zl(t,n,i)}o=o.next}while(o!==r)}}function bo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Jl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xf(e){var t=e.alternate;t!==null&&(e.alternate=null,Xf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[mr],delete t[Fl],delete t[M0],delete t[F0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kf(e){return e.tag===5||e.tag===3||e.tag===4}function Eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=No));else if(r!==4&&(e=e.child,e!==null))for(ql(e,t,n),e=e.sibling;e!==null;)ql(e,t,n),e=e.sibling}function bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bl(e,t,n),e=e.sibling;e!==null;)bl(e,t,n),e=e.sibling}var se=null,Qe=!1;function mt(e,t,n){for(n=n.child;n!==null;)Zf(e,t,n),n=n.sibling}function Zf(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Qo,n)}catch{}switch(n.tag){case 5:he||cn(n,t);case 6:var r=se,o=Qe;se=null,mt(e,t,n),se=r,Qe=o,se!==null&&(Qe?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Qe?(e=se,n=n.stateNode,e.nodeType===8?Ji(e.parentNode,n):e.nodeType===1&&Ji(e,n),ur(e)):Ji(se,n.stateNode));break;case 4:r=se,o=Qe,se=n.stateNode.containerInfo,Qe=!0,mt(e,t,n),se=r,Qe=o;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Zl(n,t,l),o=o.next}while(o!==r)}mt(e,t,n);break;case 1:if(!he&&(cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}mt(e,t,n);break;case 21:mt(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,mt(e,t,n),he=r):mt(e,t,n);break;default:mt(e,t,n)}}function Cu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new b0),t.forEach(function(r){var o=um.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:se=a.stateNode,Qe=!1;break e;case 3:se=a.stateNode.containerInfo,Qe=!0;break e;case 4:se=a.stateNode.containerInfo,Qe=!0;break e}a=a.return}if(se===null)throw Error(S(160));Zf(i,l,o),se=null,Qe=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){X(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jf(t,e),t=t.sibling}function Jf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),Ze(e),r&4){try{tr(3,e,e.return),bo(3,e)}catch(g){X(e,e.return,g)}try{tr(5,e,e.return)}catch(g){X(e,e.return,g)}}break;case 1:We(t,e),Ze(e),r&512&&n!==null&&cn(n,n.return);break;case 5:if(We(t,e),Ze(e),r&512&&n!==null&&cn(n,n.return),e.flags&32){var o=e.stateNode;try{ir(o,"")}catch(g){X(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&vc(o,i),El(a,l);var u=El(a,i);for(l=0;l<s.length;l+=2){var m=s[l],d=s[l+1];m==="style"?kc(o,d):m==="dangerouslySetInnerHTML"?xc(o,d):m==="children"?ir(o,d):xa(o,m,d,u)}switch(a){case"input":yl(o,i);break;case"textarea":yc(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?dn(o,!!i.multiple,y,!1):h!==!!i.multiple&&(i.defaultValue!=null?dn(o,!!i.multiple,i.defaultValue,!0):dn(o,!!i.multiple,i.multiple?[]:"",!1))}o[mr]=i}catch(g){X(e,e.return,g)}}break;case 6:if(We(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){X(e,e.return,g)}}break;case 3:if(We(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ur(t.containerInfo)}catch(g){X(e,e.return,g)}break;case 4:We(t,e),Ze(e);break;case 13:We(t,e),Ze(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ba=J())),r&4&&Cu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(he=(u=he)||m,We(t,e),he=u):We(t,e),Ze(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(T=e,m=e.child;m!==null;){for(d=T=m;T!==null;){switch(h=T,y=h.child,h.tag){case 0:case 11:case 14:case 15:tr(4,h,h.return);break;case 1:cn(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(g){X(r,n,g)}}break;case 5:cn(h,h.return);break;case 22:if(h.memoizedState!==null){Nu(d);continue}}y!==null?(y.return=h,T=y):Nu(d)}m=m.sibling}e:for(m=null,d=e;;){if(d.tag===5){if(m===null){m=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,s=d.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Sc("display",l))}catch(g){X(e,e.return,g)}}}else if(d.tag===6){if(m===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){X(e,e.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;m===d&&(m=null),d=d.return}m===d&&(m=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:We(t,e),Ze(e),r&4&&Cu(e);break;case 21:break;default:We(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Kf(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ir(o,""),r.flags&=-33);var i=Eu(e);bl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Eu(e);ql(e,a,l);break;default:throw Error(S(161))}}catch(s){X(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tm(e,t,n){T=e,qf(e)}function qf(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Zr;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||he;a=Zr;var u=he;if(Zr=l,(he=s)&&!u)for(T=o;T!==null;)l=T,s=l.child,l.tag===22&&l.memoizedState!==null?Pu(o):s!==null?(s.return=l,T=s):Pu(o);for(;i!==null;)T=i,qf(i),i=i.sibling;T=o,Zr=a,he=u}_u(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,T=i):_u(e)}}function _u(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||bo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&su(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}su(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var d=m.dehydrated;d!==null&&ur(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}he||t.flags&512&&Jl(t)}catch(h){X(t,t.return,h)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Nu(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Pu(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bo(4,t)}catch(s){X(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){X(t,o,s)}}var i=t.return;try{Jl(t)}catch(s){X(t,i,s)}break;case 5:var l=t.return;try{Jl(t)}catch(s){X(t,l,s)}}}catch(s){X(t,t.return,s)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var nm=Math.ceil,Fo=pt.ReactCurrentDispatcher,Ja=pt.ReactCurrentOwner,De=pt.ReactCurrentBatchConfig,$=0,le=null,b=null,ce=0,Pe=0,fn=Ot(0),te=0,xr=null,Xt=0,ei=0,qa=0,nr=null,Se=null,ba=0,_n=1/0,ot=null,Do=!1,ea=null,Pt=null,Jr=!1,xt=null,Uo=0,rr=0,ta=null,fo=-1,po=0;function ye(){return $&6?J():fo!==-1?fo:fo=J()}function Tt(e){return e.mode&1?$&2&&ce!==0?ce&-ce:U0.transition!==null?(po===0&&(po=Lc()),po):(e=D,e!==0||(e=window.event,e=e===void 0?16:Bc(e.type)),e):1}function Xe(e,t,n,r){if(50<rr)throw rr=0,ta=null,Error(S(185));Rr(e,n,r),(!($&2)||e!==le)&&(e===le&&(!($&2)&&(ei|=n),te===4&&yt(e,ce)),_e(e,r),n===1&&$===0&&!(t.mode&1)&&(_n=J()+500,Zo&&Lt()))}function _e(e,t){var n=e.callbackNode;Up(e,t);var r=ko(e,e===le?ce:0);if(r===0)n!==null&&Ms(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ms(n),t===1)e.tag===0?D0(Tu.bind(null,e)):af(Tu.bind(null,e)),L0(function(){!($&6)&&Lt()}),n=null;else{switch($c(r)){case 1:n=_a;break;case 4:n=jc;break;case 16:n=So;break;case 536870912:n=Oc;break;default:n=So}n=ld(n,bf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function bf(e,t){if(fo=-1,po=0,$&6)throw Error(S(327));var n=e.callbackNode;if(vn()&&e.callbackNode!==n)return null;var r=ko(e,e===le?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ao(e,r);else{t=r;var o=$;$|=2;var i=td();(le!==e||ce!==t)&&(ot=null,_n=J()+500,Vt(e,t));do try{im();break}catch(a){ed(e,a)}while(!0);Da(),Fo.current=i,$=o,b!==null?t=0:(le=null,ce=0,t=te)}if(t!==0){if(t===2&&(o=Tl(e),o!==0&&(r=o,t=na(e,o))),t===1)throw n=xr,Vt(e,0),yt(e,r),_e(e,J()),n;if(t===6)yt(e,r);else{if(o=e.current.alternate,!(r&30)&&!rm(o)&&(t=Ao(e,r),t===2&&(i=Tl(e),i!==0&&(r=i,t=na(e,i))),t===1))throw n=xr,Vt(e,0),yt(e,r),_e(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Dt(e,Se,ot);break;case 3:if(yt(e,r),(r&130023424)===r&&(t=ba+500-J(),10<t)){if(ko(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ml(Dt.bind(null,e,Se,ot),t);break}Dt(e,Se,ot);break;case 4:if(yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Ye(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nm(r/1960))-r,10<r){e.timeoutHandle=Ml(Dt.bind(null,e,Se,ot),r);break}Dt(e,Se,ot);break;case 5:Dt(e,Se,ot);break;default:throw Error(S(329))}}}return _e(e,J()),e.callbackNode===n?bf.bind(null,e):null}function na(e,t){var n=nr;return e.current.memoizedState.isDehydrated&&(Vt(e,t).flags|=256),e=Ao(e,t),e!==2&&(t=Se,Se=n,t!==null&&ra(t)),e}function ra(e){Se===null?Se=e:Se.push.apply(Se,e)}function rm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ke(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yt(e,t){for(t&=~qa,t&=~ei,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ye(t),r=1<<n;e[n]=-1,t&=~r}}function Tu(e){if($&6)throw Error(S(327));vn();var t=ko(e,0);if(!(t&1))return _e(e,J()),null;var n=Ao(e,t);if(e.tag!==0&&n===2){var r=Tl(e);r!==0&&(t=r,n=na(e,r))}if(n===1)throw n=xr,Vt(e,0),yt(e,t),_e(e,J()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dt(e,Se,ot),_e(e,J()),null}function es(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(_n=J()+500,Zo&&Lt())}}function Kt(e){xt!==null&&xt.tag===0&&!($&6)&&vn();var t=$;$|=1;var n=De.transition,r=D;try{if(De.transition=null,D=1,e)return e()}finally{D=r,De.transition=n,$=t,!($&6)&&Lt()}}function ts(){Pe=fn.current,W(fn)}function Vt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,O0(n)),b!==null)for(n=b.return;n!==null;){var r=n;switch($a(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Po();break;case 3:En(),W(Ee),W(ge),Ha();break;case 5:Wa(r);break;case 4:En();break;case 13:W(Q);break;case 19:W(Q);break;case 10:Ua(r.type._context);break;case 22:case 23:ts()}n=n.return}if(le=e,b=e=Rt(e.current,null),ce=Pe=t,te=0,xr=null,qa=ei=Xt=0,Se=nr=null,At!==null){for(t=0;t<At.length;t++)if(n=At[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}At=null}return e}function ed(e,t){do{var n=b;try{if(Da(),so.current=Mo,$o){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}$o=!1}if(Yt=0,ie=ee=G=null,er=!1,vr=0,Ja.current=null,n===null||n.return===null){te=1,xr=t,b=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=ce,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,m=a,d=m.tag;if(!(m.mode&1)&&(d===0||d===11||d===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=hu(l);if(y!==null){y.flags&=-257,gu(y,l,a,i,t),y.mode&1&&mu(i,u,t),t=y,s=u;var v=t.updateQueue;if(v===null){var g=new Set;g.add(s),t.updateQueue=g}else v.add(s);break e}else{if(!(t&1)){mu(i,u,t),ns();break e}s=Error(S(426))}}else if(H&&a.mode&1){var k=hu(l);if(k!==null){!(k.flags&65536)&&(k.flags|=256),gu(k,l,a,i,t),Ma(Cn(s,a));break e}}i=s=Cn(s,a),te!==4&&(te=2),nr===null?nr=[i]:nr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Ff(i,s,t);au(i,f);break e;case 1:a=s;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Pt===null||!Pt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Df(i,a,t);au(i,w);break e}}i=i.return}while(i!==null)}rd(n)}catch(N){t=N,b===n&&n!==null&&(b=n=n.return);continue}break}while(!0)}function td(){var e=Fo.current;return Fo.current=Mo,e===null?Mo:e}function ns(){(te===0||te===3||te===2)&&(te=4),le===null||!(Xt&268435455)&&!(ei&268435455)||yt(le,ce)}function Ao(e,t){var n=$;$|=2;var r=td();(le!==e||ce!==t)&&(ot=null,Vt(e,t));do try{om();break}catch(o){ed(e,o)}while(!0);if(Da(),$=n,Fo.current=r,b!==null)throw Error(S(261));return le=null,ce=0,te}function om(){for(;b!==null;)nd(b)}function im(){for(;b!==null&&!zp();)nd(b)}function nd(e){var t=id(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?rd(e):b=t,Ja.current=null}function rd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=q0(n,t),n!==null){n.flags&=32767,b=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,b=null;return}}else if(n=J0(n,t,Pe),n!==null){b=n;return}if(t=t.sibling,t!==null){b=t;return}b=t=e}while(t!==null);te===0&&(te=5)}function Dt(e,t,n){var r=D,o=De.transition;try{De.transition=null,D=1,lm(e,t,n,r)}finally{De.transition=o,D=r}return null}function lm(e,t,n,r){do vn();while(xt!==null);if($&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ap(e,i),e===le&&(b=le=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jr||(Jr=!0,ld(So,function(){return vn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=De.transition,De.transition=null;var l=D;D=1;var a=$;$|=4,Ja.current=null,em(e,n),Jf(n,e),N0(Ll),Eo=!!Ol,Ll=Ol=null,e.current=n,tm(n),Ip(),$=a,D=l,De.transition=i}else e.current=n;if(Jr&&(Jr=!1,xt=e,Uo=o),i=e.pendingLanes,i===0&&(Pt=null),Lp(n.stateNode),_e(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Do)throw Do=!1,e=ea,ea=null,e;return Uo&1&&e.tag!==0&&vn(),i=e.pendingLanes,i&1?e===ta?rr++:(rr=0,ta=e):rr=0,Lt(),null}function vn(){if(xt!==null){var e=$c(Uo),t=De.transition,n=D;try{if(De.transition=null,D=16>e?16:e,xt===null)var r=!1;else{if(e=xt,xt=null,Uo=0,$&6)throw Error(S(331));var o=$;for($|=4,T=e.current;T!==null;){var i=T,l=i.child;if(T.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(T=u;T!==null;){var m=T;switch(m.tag){case 0:case 11:case 15:tr(8,m,i)}var d=m.child;if(d!==null)d.return=m,T=d;else for(;T!==null;){m=T;var h=m.sibling,y=m.return;if(Xf(m),m===u){T=null;break}if(h!==null){h.return=y,T=h;break}T=y}}}var v=i.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var k=g.sibling;g.sibling=null,g=k}while(g!==null)}}T=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,T=l;else e:for(;T!==null;){if(i=T,i.flags&2048)switch(i.tag){case 0:case 11:case 15:tr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,T=f;break e}T=i.return}}var c=e.current;for(T=c;T!==null;){l=T;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,T=p;else e:for(l=c;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:bo(9,a)}}catch(N){X(a,a.return,N)}if(a===l){T=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,T=w;break e}T=a.return}}if($=o,Lt(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Qo,e)}catch{}r=!0}return r}finally{D=n,De.transition=t}}return!1}function Ru(e,t,n){t=Cn(n,t),t=Ff(e,t,1),e=Nt(e,t,1),t=ye(),e!==null&&(Rr(e,1,t),_e(e,t))}function X(e,t,n){if(e.tag===3)Ru(e,e,n);else for(;t!==null;){if(t.tag===3){Ru(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pt===null||!Pt.has(r))){e=Cn(n,e),e=Df(t,e,1),t=Nt(t,e,1),e=ye(),t!==null&&(Rr(t,1,e),_e(t,e));break}}t=t.return}}function am(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ce&n)===n&&(te===4||te===3&&(ce&130023424)===ce&&500>J()-ba?Vt(e,0):qa|=n),_e(e,t)}function od(e,t){t===0&&(e.mode&1?(t=Br,Br<<=1,!(Br&130023424)&&(Br=4194304)):t=1);var n=ye();e=ft(e,t),e!==null&&(Rr(e,t,n),_e(e,n))}function sm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),od(e,n)}function um(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),od(e,n)}var id;id=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,Z0(e,t,n);ke=!!(e.flags&131072)}else ke=!1,H&&t.flags&1048576&&sf(t,zo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;co(e,t),e=t.pendingProps;var o=xn(t,ge.current);gn(t,n),o=Ga(null,t,r,e,o,n);var i=Ya();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(i=!0,To(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ba(t),o.updater=Jo,t.stateNode=o,o._reactInternals=t,Wl(t,r,e,n),t=Gl(null,t,r,!0,i,n)):(t.tag=0,H&&i&&La(t),ve(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(co(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=fm(r),e=He(r,e),o){case 0:t=Ql(null,t,r,e,n);break e;case 1:t=wu(null,t,r,e,n);break e;case 11:t=vu(null,t,r,e,n);break e;case 14:t=yu(null,t,r,He(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Ql(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),wu(e,t,r,o,n);case 3:e:{if(Vf(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,o=i.element,df(e,t),Oo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Cn(Error(S(423)),t),t=xu(e,t,r,n,o);break e}else if(r!==o){o=Cn(Error(S(424)),t),t=xu(e,t,r,n,o);break e}else for(Te=_t(t.stateNode.containerInfo.firstChild),Re=t,H=!0,Ge=null,n=gf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sn(),r===o){t=dt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return vf(t),e===null&&Al(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,$l(r,o)?l=null:i!==null&&$l(r,i)&&(t.flags|=32),Bf(e,t),ve(e,t,l,n),t.child;case 6:return e===null&&Al(t),null;case 13:return Wf(e,t,n);case 4:return Va(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),vu(e,t,r,o,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,B(Io,r._currentValue),r._currentValue=l,i!==null)if(Ke(i.value,l)){if(i.children===o.children&&!Ee.current){t=dt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=st(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?s.next=s:(s.next=m.next,m.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Bl(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(S(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Bl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ve(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,gn(t,n),o=Ue(o),r=r(o),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,o=He(r,t.pendingProps),o=He(r.type,o),yu(e,t,r,o,n);case 15:return Uf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),co(e,t),t.tag=1,Ce(r)?(e=!0,To(t)):e=!1,gn(t,n),mf(t,r,o),Wl(t,r,o,n),Gl(null,t,r,!0,e,n);case 19:return Hf(e,t,n);case 22:return Af(e,t,n)}throw Error(S(156,t.tag))};function ld(e,t){return Ic(e,t)}function cm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new cm(e,t,n,r)}function rs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fm(e){if(typeof e=="function")return rs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ka)return 11;if(e===Ea)return 14}return 2}function Rt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function mo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")rs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case en:return Wt(n.children,o,i,t);case Sa:l=8,o|=8;break;case pl:return e=Fe(12,n,t,o|2),e.elementType=pl,e.lanes=i,e;case ml:return e=Fe(13,n,t,o),e.elementType=ml,e.lanes=i,e;case hl:return e=Fe(19,n,t,o),e.elementType=hl,e.lanes=i,e;case mc:return ti(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case dc:l=10;break e;case pc:l=9;break e;case ka:l=11;break e;case Ea:l=14;break e;case ht:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Fe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Wt(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function ti(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=mc,e.lanes=n,e.stateNode={isHidden:!1},e}function il(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function ll(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ai(0),this.expirationTimes=Ai(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ai(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function os(e,t,n,r,o,i,l,a,s){return e=new dm(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Fe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ba(i),e}function pm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ad(e){if(!e)return It;e=e._reactInternals;e:{if(Jt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ce(n))return lf(e,n,t)}return t}function sd(e,t,n,r,o,i,l,a,s){return e=os(n,r,!0,e,o,i,l,a,s),e.context=ad(null),n=e.current,r=ye(),o=Tt(n),i=st(r,o),i.callback=t??null,Nt(n,i,o),e.current.lanes=o,Rr(e,o,r),_e(e,r),e}function ni(e,t,n,r){var o=t.current,i=ye(),l=Tt(o);return n=ad(n),t.context===null?t.context=n:t.pendingContext=n,t=st(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(o,t,l),e!==null&&(Xe(e,o,l,i),ao(e,o,l)),l}function Bo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function is(e,t){zu(e,t),(e=e.alternate)&&zu(e,t)}function mm(){return null}var ud=typeof reportError=="function"?reportError:function(e){console.error(e)};function ls(e){this._internalRoot=e}ri.prototype.render=ls.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));ni(e,t,null,null)};ri.prototype.unmount=ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kt(function(){ni(null,e,null,null)}),t[ct]=null}};function ri(e){this._internalRoot=e}ri.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vt.length&&t!==0&&t<vt[n].priority;n++);vt.splice(n,0,e),n===0&&Ac(e)}};function as(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Iu(){}function hm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Bo(l);i.call(u)}}var l=sd(t,r,e,0,null,!1,!1,"",Iu);return e._reactRootContainer=l,e[ct]=l.current,dr(e.nodeType===8?e.parentNode:e),Kt(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Bo(s);a.call(u)}}var s=os(e,0,!1,null,null,!1,!1,"",Iu);return e._reactRootContainer=s,e[ct]=s.current,dr(e.nodeType===8?e.parentNode:e),Kt(function(){ni(t,s,n,r)}),s}function ii(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Bo(l);a.call(s)}}ni(t,l,e,o)}else l=hm(n,t,e,o,r);return Bo(l)}Mc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Yn(t.pendingLanes);n!==0&&(Na(t,n|1),_e(t,J()),!($&6)&&(_n=J()+500,Lt()))}break;case 13:Kt(function(){var r=ft(e,1);if(r!==null){var o=ye();Xe(r,e,1,o)}}),is(e,1)}};Pa=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=ye();Xe(t,e,134217728,n)}is(e,134217728)}};Fc=function(e){if(e.tag===13){var t=Tt(e),n=ft(e,t);if(n!==null){var r=ye();Xe(n,e,t,r)}is(e,t)}};Dc=function(){return D};Uc=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};_l=function(e,t,n){switch(t){case"input":if(yl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ko(r);if(!o)throw Error(S(90));gc(r),yl(r,o)}}}break;case"textarea":yc(e,n);break;case"select":t=n.value,t!=null&&dn(e,!!n.multiple,t,!1)}};_c=es;Nc=Kt;var gm={usingClientEntryPoint:!1,Events:[Ir,on,Ko,Ec,Cc,es]},Vn={findFiberByHostInstance:Ut,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vm={bundleType:Vn.bundleType,version:Vn.version,rendererPackageName:Vn.rendererPackageName,rendererConfig:Vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rc(e),e===null?null:e.stateNode},findFiberByHostInstance:Vn.findFiberByHostInstance||mm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qr.isDisabled&&qr.supportsFiber)try{Qo=qr.inject(vm),tt=qr}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gm;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!as(t))throw Error(S(200));return pm(e,t,null,n)};je.createRoot=function(e,t){if(!as(e))throw Error(S(299));var n=!1,r="",o=ud;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=os(e,1,!1,null,null,n,!1,r,o),e[ct]=t.current,dr(e.nodeType===8?e.parentNode:e),new ls(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Rc(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return Kt(e)};je.hydrate=function(e,t,n){if(!oi(t))throw Error(S(200));return ii(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!as(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=ud;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=sd(t,null,e,1,n??null,o,!1,i,l),e[ct]=t.current,dr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ri(t)};je.render=function(e,t,n){if(!oi(t))throw Error(S(200));return ii(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!oi(e))throw Error(S(40));return e._reactRootContainer?(Kt(function(){ii(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};je.unstable_batchedUpdates=es;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!oi(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return ii(e,t,n,!1,r)};je.version="18.2.0-next-9e3b772b8-20220608";function cd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cd)}catch(e){console.error(e)}}cd(),ac.exports=je;var ym=ac.exports,ju=ym;fl.createRoot=ju.createRoot,fl.hydrateRoot=ju.hydrateRoot;/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sr(){return Sr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sr.apply(this,arguments)}var St;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(St||(St={}));const Ou="popstate";function wm(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:a}=r.location;return oa("",{pathname:i,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:fd(o)}return Sm(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ss(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function xm(){return Math.random().toString(36).substr(2,8)}function Lu(e,t){return{usr:e.state,key:e.key,idx:t}}function oa(e,t,n,r){return n===void 0&&(n=null),Sr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zn(t):t,{state:n,key:t&&t.key||r||xm()})}function fd(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Sm(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=St.Pop,s=null,u=m();u==null&&(u=0,l.replaceState(Sr({},l.state,{idx:u}),""));function m(){return(l.state||{idx:null}).idx}function d(){a=St.Pop;let k=m(),f=k==null?null:k-u;u=k,s&&s({action:a,location:g.location,delta:f})}function h(k,f){a=St.Push;let c=oa(g.location,k,f);n&&n(c,k),u=m()+1;let p=Lu(c,u),w=g.createHref(c);try{l.pushState(p,"",w)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;o.location.assign(w)}i&&s&&s({action:a,location:g.location,delta:1})}function y(k,f){a=St.Replace;let c=oa(g.location,k,f);n&&n(c,k),u=m();let p=Lu(c,u),w=g.createHref(c);l.replaceState(p,"",w),i&&s&&s({action:a,location:g.location,delta:0})}function v(k){let f=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof k=="string"?k:fd(k);return ne(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let g={get action(){return a},get location(){return e(o,l)},listen(k){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Ou,d),s=k,()=>{o.removeEventListener(Ou,d),s=null}},createHref(k){return t(o,k)},createURL:v,encodeLocation(k){let f=v(k);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:y,go(k){return l.go(k)}};return g}var $u;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})($u||($u={}));function km(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?zn(t):t,o=md(r.pathname||"/",n);if(o==null)return null;let i=dd(e);Em(i);let l=null;for(let a=0;l==null&&a<i.length;++a)l=jm(i[a],$m(o));return l}function dd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(ne(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Ht([r,s.relativePath]),m=n.concat(s);i.children&&i.children.length>0&&(ne(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),dd(i.children,t,m,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:zm(u,i.index),routesMeta:m})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let s of pd(i.path))o(i,l,s)}),t}function pd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=pd(r.join("/")),a=[];return a.push(...l.map(s=>s===""?i:[i,s].join("/"))),o&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Em(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Im(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Cm=/^:[\w-]+$/,_m=3,Nm=2,Pm=1,Tm=10,Rm=-2,Mu=e=>e==="*";function zm(e,t){let n=e.split("/"),r=n.length;return n.some(Mu)&&(r+=Rm),t&&(r+=Nm),n.filter(o=>!Mu(o)).reduce((o,i)=>o+(Cm.test(i)?_m:i===""?Pm:Tm),r)}function Im(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function jm(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",m=Om({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!m)return null;Object.assign(r,m.params);let d=a.route;i.push({params:r,pathname:Ht([o,m.pathname]),pathnameBase:Vm(Ht([o,m.pathnameBase])),route:d}),m.pathnameBase!=="/"&&(o=Ht([o,m.pathnameBase]))}return i}function Om(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Lm(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,m,d)=>{let{paramName:h,isOptional:y}=m;if(h==="*"){let g=a[d]||"";l=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}const v=a[d];return y&&!v?u[h]=void 0:u[h]=Mm(v||"",h),u},{}),pathname:i,pathnameBase:l,pattern:e}}function Lm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ss(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function $m(e){try{return decodeURI(e)}catch(t){return ss(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Mm(e,t){try{return decodeURIComponent(e)}catch(n){return ss(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function md(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Fm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?zn(e):e;return{pathname:n?n.startsWith("/")?n:Dm(n,t):t,search:Wm(r),hash:Hm(o)}}function Dm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function al(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Um(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Am(e,t){let n=Um(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Bm(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=zn(e):(o=Sr({},e),ne(!o.pathname||!o.pathname.includes("?"),al("?","pathname","search",o)),ne(!o.pathname||!o.pathname.includes("#"),al("#","pathname","hash",o)),ne(!o.search||!o.search.includes("#"),al("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(l==null)a=n;else{let d=t.length-1;if(!r&&l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),d-=1;o.pathname=h.join("/")}a=d>=0?t[d]:"/"}let s=Fm(o,a),u=l&&l!=="/"&&l.endsWith("/"),m=(i||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||m)&&(s.pathname+="/"),s}const Ht=e=>e.join("/").replace(/\/\/+/g,"/"),Vm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Wm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Hm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Qm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const hd=["post","put","patch","delete"];new Set(hd);const Gm=["get",...hd];new Set(Gm);/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kr(){return kr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kr.apply(this,arguments)}const us=_.createContext(null),Ym=_.createContext(null),li=_.createContext(null),ai=_.createContext(null),In=_.createContext({outlet:null,matches:[],isDataRoute:!1}),gd=_.createContext(null);function si(){return _.useContext(ai)!=null}function cs(){return si()||ne(!1),_.useContext(ai).location}function vd(e){_.useContext(li).static||_.useLayoutEffect(e)}function Xm(){let{isDataRoute:e}=_.useContext(In);return e?ah():Km()}function Km(){si()||ne(!1);let e=_.useContext(us),{basename:t,future:n,navigator:r}=_.useContext(li),{matches:o}=_.useContext(In),{pathname:i}=cs(),l=JSON.stringify(Am(o,n.v7_relativeSplatPath)),a=_.useRef(!1);return vd(()=>{a.current=!0}),_.useCallback(function(u,m){if(m===void 0&&(m={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=Bm(u,JSON.parse(l),i,m.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Ht([t,d.pathname])),(m.replace?r.replace:r.push)(d,m.state,m)},[t,r,l,i,e])}function Zm(e,t){return Jm(e,t)}function Jm(e,t,n,r){si()||ne(!1);let{navigator:o}=_.useContext(li),{matches:i}=_.useContext(In),l=i[i.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=cs(),m;if(t){var d;let k=typeof t=="string"?zn(t):t;s==="/"||(d=k.pathname)!=null&&d.startsWith(s)||ne(!1),m=k}else m=u;let h=m.pathname||"/",y=s==="/"?h:h.slice(s.length)||"/",v=km(e,{pathname:y}),g=nh(v&&v.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:Ht([s,o.encodeLocation?o.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?s:Ht([s,o.encodeLocation?o.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return t&&g?_.createElement(ai.Provider,{value:{location:kr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:St.Pop}},g):g}function qm(){let e=lh(),t=Qm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:o},n):null,null)}const bm=_.createElement(qm,null);class eh extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?_.createElement(In.Provider,{value:this.props.routeContext},_.createElement(gd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function th(e){let{routeContext:t,match:n,children:r}=e,o=_.useContext(us);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(In.Provider,{value:t},r)}function nh(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let l=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let m=l.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));m>=0||ne(!1),l=l.slice(0,Math.min(l.length,m+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<l.length;m++){let d=l[m];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=m),d.route.id){let{loaderData:h,errors:y}=n,v=d.route.loader&&h[d.route.id]===void 0&&(!y||y[d.route.id]===void 0);if(d.route.lazy||v){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((m,d,h)=>{let y,v=!1,g=null,k=null;n&&(y=a&&d.route.id?a[d.route.id]:void 0,g=d.route.errorElement||bm,s&&(u<0&&h===0?(sh("route-fallback",!1),v=!0,k=null):u===h&&(v=!0,k=d.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,h+1)),c=()=>{let p;return y?p=g:v?p=k:d.route.Component?p=_.createElement(d.route.Component,null):d.route.element?p=d.route.element:p=m,_.createElement(th,{match:d,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:p})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?_.createElement(eh,{location:n.location,revalidation:n.revalidation,component:g,error:y,children:c(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):c()},null)}var yd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(yd||{}),Vo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vo||{});function rh(e){let t=_.useContext(us);return t||ne(!1),t}function oh(e){let t=_.useContext(Ym);return t||ne(!1),t}function ih(e){let t=_.useContext(In);return t||ne(!1),t}function wd(e){let t=ih(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function lh(){var e;let t=_.useContext(gd),n=oh(Vo.UseRouteError),r=wd(Vo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function ah(){let{router:e}=rh(yd.UseNavigateStable),t=wd(Vo.UseNavigateStable),n=_.useRef(!1);return vd(()=>{n.current=!0}),_.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,kr({fromRouteId:t},i)))},[e,t])}const Fu={};function sh(e,t,n){!t&&!Fu[e]&&(Fu[e]=!0)}function ia(e){ne(!1)}function uh(e){let{basename:t="/",children:n=null,location:r,navigationType:o=St.Pop,navigator:i,static:l=!1,future:a}=e;si()&&ne(!1);let s=t.replace(/^\/*/,"/"),u=_.useMemo(()=>({basename:s,navigator:i,static:l,future:kr({v7_relativeSplatPath:!1},a)}),[s,a,i,l]);typeof r=="string"&&(r=zn(r));let{pathname:m="/",search:d="",hash:h="",state:y=null,key:v="default"}=r,g=_.useMemo(()=>{let k=md(m,s);return k==null?null:{location:{pathname:k,search:d,hash:h,state:y,key:v},navigationType:o}},[s,m,d,h,y,v,o]);return g==null?null:_.createElement(li.Provider,{value:u},_.createElement(ai.Provider,{children:n,value:g}))}function ch(e){let{children:t,location:n}=e;return Zm(la(t),n)}new Promise(()=>{});function la(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,o)=>{if(!_.isValidElement(r))return;let i=[...t,o];if(r.type===_.Fragment){n.push.apply(n,la(r.props.children,i));return}r.type!==ia&&ne(!1),!r.props.index||!r.props.children||ne(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=la(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const fh="6";try{window.__reactRouterVersion=fh}catch{}const dh="startTransition",Du=cl[dh];function ph(e){let{basename:t,children:n,future:r,window:o}=e,i=_.useRef();i.current==null&&(i.current=wm({window:o,v5Compat:!0}));let l=i.current,[a,s]=_.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},m=_.useCallback(d=>{u&&Du?Du(()=>s(d)):s(d)},[s,u]);return _.useLayoutEffect(()=>l.listen(m),[l,m]),_.createElement(uh,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}var Uu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Uu||(Uu={}));var Au;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Au||(Au={}));function mh(){const[e,t]=_.useState("light"),n=r=>t(r.target.checked?"dark":"light");return _.useEffect(()=>{document.body.setAttribute("data-theme",e)},[e]),x.jsxs("div",{className:"container-switch",children:[x.jsx("span",{children:"Dark Mode"}),x.jsxs("label",{className:"switch",children:[x.jsx("input",{type:"checkbox",onChange:n,checked:e==="dark"}),x.jsx("span",{className:"slider"})]})]})}function hh(){const e=Xm(),t=cs();return x.jsxs("header",{className:"header",children:[t.pathname==="/"?x.jsxs(x.Fragment,{children:[x.jsx("h1",{children:"Hello!"}),x.jsxs("h2",{children:["I'm ",x.jsx("span",{className:"span",children:"Andy Chen"}),", a passionate software engineer who loves developing websites and video games."]}),x.jsxs("div",{className:"button-container",children:[x.jsx("button",{className:"button",onClick:()=>e("/portfolio"),children:"Portfolio"}),x.jsx("button",{className:"button",onClick:()=>window.open("https://github.com/ac8736"),children:"GitHub"}),x.jsx("button",{className:"button",onClick:()=>window.open("https://ac8736.itch.io/"),children:"Itch.io"})]}),x.jsxs("p",{className:"contact-email",children:["If you have any inquiries, please feel free to contact me:"," ",x.jsx("a",{href:"mailto:andy.chen.swe@gmail.com",children:"andy.chen.swe@gmail.com"})]})]}):x.jsxs(x.Fragment,{children:[x.jsx("h1",{children:"Portfolio"}),x.jsx("h2",{children:"Welcome to my little corner of the Internet! Below are projects that I have worked on."}),x.jsx("button",{className:"button",style:{marginBottom:"1rem"},onClick:()=>e("/"),children:"Go back"})]}),x.jsx(mh,{})]})}function gh(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function vh(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var yh=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(vh(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=gh(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),me="-ms-",Wo="-moz-",M="-webkit-",xd="comm",fs="rule",ds="decl",wh="@import",Sd="@keyframes",xh="@layer",Sh=Math.abs,ui=String.fromCharCode,kh=Object.assign;function Eh(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function kd(e){return e.trim()}function Ch(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function aa(e,t){return e.indexOf(t)}function ue(e,t){return e.charCodeAt(t)|0}function Er(e,t,n){return e.slice(t,n)}function qe(e){return e.length}function ps(e){return e.length}function br(e,t){return t.push(e),e}function _h(e,t){return e.map(t).join("")}var ci=1,Nn=1,Ed=0,Ne=0,q=0,jn="";function fi(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ci,column:Nn,length:l,return:""}}function Wn(e,t){return kh(fi("",null,null,"",null,null,0),e,{length:-e.length},t)}function Nh(){return q}function Ph(){return q=Ne>0?ue(jn,--Ne):0,Nn--,q===10&&(Nn=1,ci--),q}function ze(){return q=Ne<Ed?ue(jn,Ne++):0,Nn++,q===10&&(Nn=1,ci++),q}function rt(){return ue(jn,Ne)}function ho(){return Ne}function Or(e,t){return Er(jn,e,t)}function Cr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Cd(e){return ci=Nn=1,Ed=qe(jn=e),Ne=0,[]}function _d(e){return jn="",e}function go(e){return kd(Or(Ne-1,sa(e===91?e+2:e===40?e+1:e)))}function Th(e){for(;(q=rt())&&q<33;)ze();return Cr(e)>2||Cr(q)>3?"":" "}function Rh(e,t){for(;--t&&ze()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return Or(e,ho()+(t<6&&rt()==32&&ze()==32))}function sa(e){for(;ze();)switch(q){case e:return Ne;case 34:case 39:e!==34&&e!==39&&sa(q);break;case 40:e===41&&sa(e);break;case 92:ze();break}return Ne}function zh(e,t){for(;ze()&&e+q!==57;)if(e+q===84&&rt()===47)break;return"/*"+Or(t,Ne-1)+"*"+ui(e===47?e:ze())}function Ih(e){for(;!Cr(rt());)ze();return Or(e,Ne)}function jh(e){return _d(vo("",null,null,null,[""],e=Cd(e),0,[0],e))}function vo(e,t,n,r,o,i,l,a,s){for(var u=0,m=0,d=l,h=0,y=0,v=0,g=1,k=1,f=1,c=0,p="",w=o,N=i,P=r,E=p;k;)switch(v=c,c=ze()){case 40:if(v!=108&&ue(E,d-1)==58){aa(E+=F(go(c),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:E+=go(c);break;case 9:case 10:case 13:case 32:E+=Th(v);break;case 92:E+=Rh(ho()-1,7);continue;case 47:switch(rt()){case 42:case 47:br(Oh(zh(ze(),ho()),t,n),s);break;default:E+="/"}break;case 123*g:a[u++]=qe(E)*f;case 125*g:case 59:case 0:switch(c){case 0:case 125:k=0;case 59+m:f==-1&&(E=F(E,/\f/g,"")),y>0&&qe(E)-d&&br(y>32?Vu(E+";",r,n,d-1):Vu(F(E," ","")+";",r,n,d-2),s);break;case 59:E+=";";default:if(br(P=Bu(E,t,n,u,m,o,a,p,w=[],N=[],d),i),c===123)if(m===0)vo(E,t,P,P,w,i,d,a,N);else switch(h===99&&ue(E,3)===110?100:h){case 100:case 108:case 109:case 115:vo(e,P,P,r&&br(Bu(e,P,P,0,0,o,a,p,o,w=[],d),N),o,N,d,a,r?w:N);break;default:vo(E,P,P,P,[""],N,0,a,N)}}u=m=y=0,g=f=1,p=E="",d=l;break;case 58:d=1+qe(E),y=v;default:if(g<1){if(c==123)--g;else if(c==125&&g++==0&&Ph()==125)continue}switch(E+=ui(c),c*g){case 38:f=m>0?1:(E+="\f",-1);break;case 44:a[u++]=(qe(E)-1)*f,f=1;break;case 64:rt()===45&&(E+=go(ze())),h=rt(),m=d=qe(p=E+=Ih(ho())),c++;break;case 45:v===45&&qe(E)==2&&(g=0)}}return i}function Bu(e,t,n,r,o,i,l,a,s,u,m){for(var d=o-1,h=o===0?i:[""],y=ps(h),v=0,g=0,k=0;v<r;++v)for(var f=0,c=Er(e,d+1,d=Sh(g=l[v])),p=e;f<y;++f)(p=kd(g>0?h[f]+" "+c:F(c,/&\f/g,h[f])))&&(s[k++]=p);return fi(e,t,n,o===0?fs:a,s,u,m)}function Oh(e,t,n){return fi(e,t,n,xd,ui(Nh()),Er(e,2,-2),0)}function Vu(e,t,n,r){return fi(e,t,n,ds,Er(e,0,r),Er(e,r+1,-1),r)}function yn(e,t){for(var n="",r=ps(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Lh(e,t,n,r){switch(e.type){case xh:if(e.children.length)break;case wh:case ds:return e.return=e.return||e.value;case xd:return"";case Sd:return e.return=e.value+"{"+yn(e.children,r)+"}";case fs:e.value=e.props.join(",")}return qe(n=yn(e.children,r))?e.return=e.value+"{"+n+"}":""}function $h(e){var t=ps(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function Mh(e){return function(t){t.root||(t=t.return)&&e(t)}}function Fh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Dh=function(t,n,r){for(var o=0,i=0;o=i,i=rt(),o===38&&i===12&&(n[r]=1),!Cr(i);)ze();return Or(t,Ne)},Uh=function(t,n){var r=-1,o=44;do switch(Cr(o)){case 0:o===38&&rt()===12&&(n[r]=1),t[r]+=Dh(Ne-1,n,r);break;case 2:t[r]+=go(o);break;case 4:if(o===44){t[++r]=rt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ui(o)}while(o=ze());return t},Ah=function(t,n){return _d(Uh(Cd(t),n))},Wu=new WeakMap,Bh=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Wu.get(r))&&!o){Wu.set(t,!0);for(var i=[],l=Ah(n,i),a=r.props,s=0,u=0;s<l.length;s++)for(var m=0;m<a.length;m++,u++)t.props[u]=i[s]?l[s].replace(/&\f/g,a[m]):a[m]+" "+l[s]}}},Vh=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Nd(e,t){switch(Eh(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+Wo+e+me+e+e;case 6828:case 4268:return M+e+me+e+e;case 6165:return M+e+me+"flex-"+e+e;case 5187:return M+e+F(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+me+"flex-$1$2")+e;case 5443:return M+e+me+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return M+e+me+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return M+e+me+F(e,"shrink","negative")+e;case 5292:return M+e+me+F(e,"basis","preferred-size")+e;case 6060:return M+"box-"+F(e,"-grow","")+M+e+me+F(e,"grow","positive")+e;case 4554:return M+F(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+me+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qe(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+Wo+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~aa(e,"stretch")?Nd(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ue(e,t+1)!==115)break;case 6444:switch(ue(e,qe(e)-3-(~aa(e,"!important")&&10))){case 107:return F(e,":",":"+M)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+M+(ue(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+me+"$2box$3")+e}break;case 5936:switch(ue(e,t+11)){case 114:return M+e+me+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+me+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+me+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return M+e+me+e+e}return e}var Wh=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case ds:t.return=Nd(t.value,t.length);break;case Sd:return yn([Wn(t,{value:F(t.value,"@","@"+M)})],o);case fs:if(t.length)return _h(t.props,function(i){switch(Ch(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return yn([Wn(t,{props:[F(i,/:(read-\w+)/,":"+Wo+"$1")]})],o);case"::placeholder":return yn([Wn(t,{props:[F(i,/:(plac\w+)/,":"+M+"input-$1")]}),Wn(t,{props:[F(i,/:(plac\w+)/,":"+Wo+"$1")]}),Wn(t,{props:[F(i,/:(plac\w+)/,me+"input-$1")]})],o)}return""})}},Hh=[Wh],Qh=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var k=g.getAttribute("data-emotion");k.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var o=t.stylisPlugins||Hh,i={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var k=g.getAttribute("data-emotion").split(" "),f=1;f<k.length;f++)i[k[f]]=!0;a.push(g)});var s,u=[Bh,Vh];{var m,d=[Lh,Mh(function(g){m.insert(g)})],h=$h(u.concat(o,d)),y=function(k){return yn(jh(k),h)};s=function(k,f,c,p){m=c,y(k?k+"{"+f.styles+"}":f.styles),p&&(v.inserted[f.name]=!0)}}var v={key:n,sheet:new yh({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return v.sheet.hydrate(a),v},Pd={exports:{}},U={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae=typeof Symbol=="function"&&Symbol.for,ms=ae?Symbol.for("react.element"):60103,hs=ae?Symbol.for("react.portal"):60106,di=ae?Symbol.for("react.fragment"):60107,pi=ae?Symbol.for("react.strict_mode"):60108,mi=ae?Symbol.for("react.profiler"):60114,hi=ae?Symbol.for("react.provider"):60109,gi=ae?Symbol.for("react.context"):60110,gs=ae?Symbol.for("react.async_mode"):60111,vi=ae?Symbol.for("react.concurrent_mode"):60111,yi=ae?Symbol.for("react.forward_ref"):60112,wi=ae?Symbol.for("react.suspense"):60113,Gh=ae?Symbol.for("react.suspense_list"):60120,xi=ae?Symbol.for("react.memo"):60115,Si=ae?Symbol.for("react.lazy"):60116,Yh=ae?Symbol.for("react.block"):60121,Xh=ae?Symbol.for("react.fundamental"):60117,Kh=ae?Symbol.for("react.responder"):60118,Zh=ae?Symbol.for("react.scope"):60119;function Le(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ms:switch(e=e.type,e){case gs:case vi:case di:case mi:case pi:case wi:return e;default:switch(e=e&&e.$$typeof,e){case gi:case yi:case Si:case xi:case hi:return e;default:return t}}case hs:return t}}}function Td(e){return Le(e)===vi}U.AsyncMode=gs;U.ConcurrentMode=vi;U.ContextConsumer=gi;U.ContextProvider=hi;U.Element=ms;U.ForwardRef=yi;U.Fragment=di;U.Lazy=Si;U.Memo=xi;U.Portal=hs;U.Profiler=mi;U.StrictMode=pi;U.Suspense=wi;U.isAsyncMode=function(e){return Td(e)||Le(e)===gs};U.isConcurrentMode=Td;U.isContextConsumer=function(e){return Le(e)===gi};U.isContextProvider=function(e){return Le(e)===hi};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ms};U.isForwardRef=function(e){return Le(e)===yi};U.isFragment=function(e){return Le(e)===di};U.isLazy=function(e){return Le(e)===Si};U.isMemo=function(e){return Le(e)===xi};U.isPortal=function(e){return Le(e)===hs};U.isProfiler=function(e){return Le(e)===mi};U.isStrictMode=function(e){return Le(e)===pi};U.isSuspense=function(e){return Le(e)===wi};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===di||e===vi||e===mi||e===pi||e===wi||e===Gh||typeof e=="object"&&e!==null&&(e.$$typeof===Si||e.$$typeof===xi||e.$$typeof===hi||e.$$typeof===gi||e.$$typeof===yi||e.$$typeof===Xh||e.$$typeof===Kh||e.$$typeof===Zh||e.$$typeof===Yh)};U.typeOf=Le;Pd.exports=U;var Jh=Pd.exports,Rd=Jh,qh={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},bh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zd={};zd[Rd.ForwardRef]=qh;zd[Rd.Memo]=bh;var e1=!0;function Id(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var vs=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||e1===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},jd=function(t,n,r){vs(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function t1(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var n1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},r1=/[A-Z]|^ms/g,o1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Od=function(t){return t.charCodeAt(1)===45},Hu=function(t){return t!=null&&typeof t!="boolean"},sl=Fh(function(e){return Od(e)?e:e.replace(r1,"-$&").toLowerCase()}),Qu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(o1,function(r,o,i){return be={name:o,styles:i,next:be},o})}return n1[t]!==1&&!Od(t)&&typeof n=="number"&&n!==0?n+"px":n};function _r(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return be={name:n.name,styles:n.styles,next:be},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)be={name:r.name,styles:r.styles,next:be},r=r.next;var o=n.styles+";";return o}return i1(e,t,n)}case"function":{if(e!==void 0){var i=be,l=n(e);return be=i,_r(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function i1(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=_r(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":Hu(l)&&(r+=sl(i)+":"+Qu(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)Hu(l[a])&&(r+=sl(i)+":"+Qu(i,l[a])+";");else{var s=_r(e,t,l);switch(i){case"animation":case"animationName":{r+=sl(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var Gu=/label:\s*([^\s;\n{]+)\s*(;|$)/g,be,ys=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";be=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=_r(r,n,l)):i+=l[0];for(var a=1;a<t.length;a++)i+=_r(r,n,t[a]),o&&(i+=l[a]);Gu.lastIndex=0;for(var s="",u;(u=Gu.exec(i))!==null;)s+="-"+u[1];var m=t1(i)+s;return{name:m,styles:i,next:be}},l1=function(t){return t()},a1=cl.useInsertionEffect?cl.useInsertionEffect:!1,Ld=a1||l1,ws={}.hasOwnProperty,$d=_.createContext(typeof HTMLElement<"u"?Qh({key:"css"}):null);$d.Provider;var Md=function(t){return _.forwardRef(function(n,r){var o=_.useContext($d);return t(n,o,r)})},Fd=_.createContext({}),ua="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",s1=function(t,n){var r={};for(var o in n)ws.call(n,o)&&(r[o]=n[o]);return r[ua]=t,r},u1=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return vs(n,r,o),Ld(function(){return jd(n,r,o)}),null},c1=Md(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[ua],i=[r],l="";typeof e.className=="string"?l=Id(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var a=ys(i,void 0,_.useContext(Fd));l+=t.key+"-"+a.name;var s={};for(var u in e)ws.call(e,u)&&u!=="css"&&u!==ua&&(s[u]=e[u]);return s.ref=n,s.className=l,_.createElement(_.Fragment,null,_.createElement(u1,{cache:t,serialized:a,isStringTag:typeof o=="string"}),_.createElement(o,s))}),f1=c1,d1=x.Fragment;function oe(e,t,n){return ws.call(t,"css")?x.jsx(f1,s1(e,t),n):x.jsx(e,t,n)}function Dd(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ys(t)}var C=function(){var t=Dd.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},p1=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var a in i)i[a]&&a&&(l&&(l+=" "),l+=a)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function m1(e,t,n){var r=[],o=Id(e,r,n);return r.length<2?n:o+t(r)}var h1=function(t){var n=t.cache,r=t.serializedArr;return Ld(function(){for(var o=0;o<r.length;o++)jd(n,r[o],!1)}),null},ul=Md(function(e,t){var n=!1,r=[],o=function(){for(var u=arguments.length,m=new Array(u),d=0;d<u;d++)m[d]=arguments[d];var h=ys(m,t.registered);return r.push(h),vs(t,h,!1),t.key+"-"+h.name},i=function(){for(var u=arguments.length,m=new Array(u),d=0;d<u;d++)m[d]=arguments[d];return m1(t.registered,o,p1(m))},l={css:o,cx:i,theme:_.useContext(Fd)},a=e.children(l);return n=!0,_.createElement(_.Fragment,null,_.createElement(h1,{cache:t,serializedArr:r}),a)}),g1=Object.defineProperty,v1=(e,t,n)=>t in e?g1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,eo=(e,t,n)=>(v1(e,typeof t!="symbol"?t+"":t,n),n),ca=new Map,to=new WeakMap,Yu=0,y1=void 0;function w1(e){return e?(to.has(e)||(Yu+=1,to.set(e,Yu.toString())),to.get(e)):"0"}function x1(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?w1(e.root):e[t]}`).toString()}function S1(e){const t=x1(e);let n=ca.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(l=>{l.forEach(a=>{var s;const u=a.isIntersecting&&o.some(m=>a.intersectionRatio>=m);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(s=r.get(a.target))==null||s.forEach(m=>{m(u,a)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},ca.set(t,n)}return n}function Ud(e,t,n={},r=y1){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:o,observer:i,elements:l}=S1(n),a=l.get(e)||[];return l.has(e)||l.set(e,a),a.push(t),i.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(l.delete(e),i.unobserve(e)),l.size===0&&(i.disconnect(),ca.delete(o))}}function k1(e){return typeof e.children!="function"}var Xu=class extends _.Component{constructor(e){super(e),eo(this,"node",null),eo(this,"_unobserveCb",null),eo(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),eo(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),k1(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:i}=this.props;this._unobserveCb=Ud(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:y,entry:v}=this.state;return e({inView:y,entry:v,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:i,onChange:l,skip:a,trackVisibility:s,delay:u,initialInView:m,fallbackInView:d,...h}=this.props;return _.createElement(t||"div",{ref:this.handleNode,...h},e)}};function Ad({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:l,initialInView:a,fallbackInView:s,onChange:u}={}){var m;const[d,h]=_.useState(null),y=_.useRef(),[v,g]=_.useState({inView:!!a,entry:void 0});y.current=u,_.useEffect(()=>{if(l||!d)return;let p;return p=Ud(d,(w,N)=>{g({inView:w,entry:N}),y.current&&y.current(w,N),N.isIntersecting&&i&&p&&(p(),p=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{p&&p()}},[Array.isArray(e)?e.toString():e,d,o,r,i,l,n,s,t]);const k=(m=v.entry)==null?void 0:m.target,f=_.useRef();!d&&k&&!i&&!l&&f.current!==k&&(f.current=k,g({inView:!!a,entry:void 0}));const c=[h,v.inView,v.entry];return c.ref=c[0],c.inView=c[1],c.entry=c[2],c}var Bd={exports:{}},A={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xs=Symbol.for("react.element"),Ss=Symbol.for("react.portal"),ki=Symbol.for("react.fragment"),Ei=Symbol.for("react.strict_mode"),Ci=Symbol.for("react.profiler"),_i=Symbol.for("react.provider"),Ni=Symbol.for("react.context"),E1=Symbol.for("react.server_context"),Pi=Symbol.for("react.forward_ref"),Ti=Symbol.for("react.suspense"),Ri=Symbol.for("react.suspense_list"),zi=Symbol.for("react.memo"),Ii=Symbol.for("react.lazy"),C1=Symbol.for("react.offscreen"),Vd;Vd=Symbol.for("react.module.reference");function Be(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case xs:switch(e=e.type,e){case ki:case Ci:case Ei:case Ti:case Ri:return e;default:switch(e=e&&e.$$typeof,e){case E1:case Ni:case Pi:case Ii:case zi:case _i:return e;default:return t}}case Ss:return t}}}A.ContextConsumer=Ni;A.ContextProvider=_i;A.Element=xs;A.ForwardRef=Pi;A.Fragment=ki;A.Lazy=Ii;A.Memo=zi;A.Portal=Ss;A.Profiler=Ci;A.StrictMode=Ei;A.Suspense=Ti;A.SuspenseList=Ri;A.isAsyncMode=function(){return!1};A.isConcurrentMode=function(){return!1};A.isContextConsumer=function(e){return Be(e)===Ni};A.isContextProvider=function(e){return Be(e)===_i};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===xs};A.isForwardRef=function(e){return Be(e)===Pi};A.isFragment=function(e){return Be(e)===ki};A.isLazy=function(e){return Be(e)===Ii};A.isMemo=function(e){return Be(e)===zi};A.isPortal=function(e){return Be(e)===Ss};A.isProfiler=function(e){return Be(e)===Ci};A.isStrictMode=function(e){return Be(e)===Ei};A.isSuspense=function(e){return Be(e)===Ti};A.isSuspenseList=function(e){return Be(e)===Ri};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ki||e===Ci||e===Ei||e===Ti||e===Ri||e===C1||typeof e=="object"&&e!==null&&(e.$$typeof===Ii||e.$$typeof===zi||e.$$typeof===_i||e.$$typeof===Ni||e.$$typeof===Pi||e.$$typeof===Vd||e.getModuleId!==void 0)};A.typeOf=Be;Bd.exports=A;var _1=Bd.exports;C`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;C`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;C`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;C`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;C`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;C`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;C`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;C`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const N1=C`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,P1=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,T1=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,R1=C`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,z1=C`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ks=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,I1=C`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,j1=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,O1=C`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,L1=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$1=C`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,M1=C`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,F1=C`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function D1({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=ks,iterationCount:o=1}){return Dd`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function U1(e){return e==null}function A1(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Wd(e,t){return n=>n?e():t()}function Nr(e){return Wd(e,()=>null)}function fa(e){return Nr(()=>({opacity:0}))(e)}const Hd=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=ks,triggerOnce:a=!1,className:s,style:u,childClassName:m,childStyle:d,children:h,onVisibilityChange:y}=e,v=_.useMemo(()=>D1({keyframes:l,duration:o}),[o,l]);return U1(h)?null:A1(h)?oe(V1,{...e,animationStyles:v,children:String(h)}):_1.isFragment(h)?oe(Qd,{...e,animationStyles:v}):oe(d1,{children:_.Children.map(h,(g,k)=>{if(!_.isValidElement(g))return null;const f=r+(t?k*o*n:0);switch(g.type){case"ol":case"ul":return oe(ul,{children:({cx:c})=>oe(g.type,{...g.props,className:c(s,g.props.className),style:Object.assign({},u,g.props.style),children:oe(Hd,{...e,children:g.props.children})})});case"li":return oe(Xu,{threshold:i,triggerOnce:a,onChange:y,children:({inView:c,ref:p})=>oe(ul,{children:({cx:w})=>oe(g.type,{...g.props,ref:p,className:w(m,g.props.className),css:Nr(()=>v)(c),style:Object.assign({},d,g.props.style,fa(!c),{animationDelay:f+"ms"})})})});default:return oe(Xu,{threshold:i,triggerOnce:a,onChange:y,children:({inView:c,ref:p})=>oe("div",{ref:p,className:s,css:Nr(()=>v)(c),style:Object.assign({},u,fa(!c),{animationDelay:f+"ms"}),children:oe(ul,{children:({cx:w})=>oe(g.type,{...g.props,className:w(m,g.props.className),style:Object.assign({},d,g.props.style)})})})})}})})},B1={display:"inline-block",whiteSpace:"pre"},V1=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:a=!1,className:s,style:u,children:m,onVisibilityChange:d}=e,{ref:h,inView:y}=Ad({triggerOnce:a,threshold:l,onChange:d});return Wd(()=>oe("div",{ref:h,className:s,style:Object.assign({},u,B1),children:m.split("").map((v,g)=>oe("span",{css:Nr(()=>t)(y),style:{animationDelay:o+g*i*r+"ms"},children:v},g))}),()=>oe(Qd,{...e,children:m}))(n)},Qd=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:l,onVisibilityChange:a}=e,{ref:s,inView:u}=Ad({triggerOnce:r,threshold:n,onChange:a});return oe("div",{ref:s,className:o,css:Nr(()=>t)(u),style:Object.assign({},i,fa(!u)),children:l})};C`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;C`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;C`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;C`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;C`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const W1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,H1=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Q1=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,G1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Y1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,X1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,K1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Z1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,J1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,q1=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,b1=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,eg=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,tg=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function ng(e,t,n){switch(n){case"bottom-left":return t?H1:P1;case"bottom-right":return t?Q1:T1;case"down":return e?t?Y1:z1:t?G1:R1;case"left":return e?t?K1:I1:t?X1:ks;case"right":return e?t?J1:O1:t?Z1:j1;case"top-left":return t?q1:L1;case"top-right":return t?b1:$1;case"up":return e?t?tg:F1:t?eg:M1;default:return t?W1:N1}}const Pr=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=_.useMemo(()=>ng(t,r,n),[t,n,r]);return oe(Hd,{keyframes:i,...o})};C`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;C`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;C`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;C`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;C`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;C`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;C`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;C`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function rg(){return x.jsxs("div",{className:"background-container",children:[x.jsx(Pr,{triggerOnce:!0,children:x.jsxs("div",{className:"background-container-sub",children:[x.jsx("h1",{className:"fixed-margin-top",children:"Education"}),x.jsxs("div",{className:"subcontent",children:[x.jsx("h2",{children:"New York University"}),x.jsx("p",{className:"text",children:"Bachelor's of Science in Computer Science, Minor in Mathematics"}),x.jsx("p",{className:"text",children:"Attended from September 2020 to May 2024. I have taken a number of classes related to software development including: Data Structures & Algorithms, Object Oriented Programming, Computer Architecture, Operating Systems, Computer Networking, Software Engineering, Game Design, Game Engineering."})]})]})}),x.jsx(Pr,{triggerOnce:!0,children:x.jsxs("div",{className:"background-container-sub",children:[x.jsx("h1",{className:"fixed-margin-top",children:"Experience"}),x.jsxs("div",{className:"subcontent",children:[x.jsxs("div",{children:[x.jsx("h2",{children:"Genesys"}),x.jsx("p",{className:"text",children:"Software Engineer Intern"}),x.jsx("p",{className:"text",children:"From May 2023 to August 2023. I designed and implemented a new feature that helps new customers easily obtain necessary resources. The feature was built with Angular and the ServerLess Framework, both using TypeScript."})]}),x.jsxs("div",{children:[x.jsx("h2",{children:"HABNET Chamber of Commerce"}),x.jsx("p",{className:"text",children:"Web Associate Intern"}),x.jsx("p",{className:"text",children:"From from July 2022 to August 2022. I assisted in the development of a new mobile app geared towards helping local merchants connect with eachother. The app was built with React Native and TypeScript."})]}),x.jsxs("div",{children:[x.jsx("h2",{children:"EGD Collective"}),x.jsx("p",{className:"text",children:"Gameplay Programmer"}),x.jsx("p",{className:"text",children:"From from October 2021 to April 2022. I worked with a team to develop a 2D fighting game in Unity, where my primary role was developing the C# scripts for the game's characters."})]})]})]})})]})}function og(){return x.jsx(x.Fragment,{children:x.jsx(rg,{})})}const ig="/assets/hd-companion-BWMCHD3T.jpg",lg="/assets/sentiment-analysis-pnfLjW0x.png",ag="/assets/hi-tea-pM8Ww4sk.jpg",sg=[{title:"Sentiment Analysis",link:"https://sentiment-analysis-app.netlify.app/",tech:"Hugging Face Transformers, PyTorch, React",description:"I used the Hugging Face Transformers API to finetune a BERT model on sentiment analysis. The dataset used was the    Toxic Tweets Dataset from Kaggle. The finetuning process was achieved using PyTorch and Jupyter Notebook, and utilized    Google Colab GPU resources to speed up the training process.",closing:"React is used to create a simple web interface for users to input text and receive a sentiment analysis prediction.       Model is deployed on Hugging Face.",img:lg},{title:"Hi Tea",link:"https://www.hiteasyracuse.com/",tech:"HTML, CSS, JavaScript",description:"This website is for a local bubble tea shop in Syracuse, NY. The site is actively used by customers to view the menu      and other options available with Hi Tea.",closing:"The website is developed with HTML/CSS and JavaScript.",img:ag},{title:"Helldivers Companion",link:"https://main--helldivers-companion.netlify.app/",tech:"SvelteKit, TypeScript",description:"Using a community API, I created a web app to display information about the game Helldivers. The app displays all the      information provided, such as the sectors and each planet within them. Each planet can also open a modal, which will      display its liberation status and current owner. The webapp also includes a reactive search bar to allow users to      easily find planets they want to view.",closing:"SvelteKit with TypeScript is used to create the web app. The app is deployed on Netlify.",img:ig}];function ug(){const e=sg.map((t,n)=>x.jsxs(Pr,{triggerOnce:!0,children:[x.jsxs("div",{className:"subcontent",children:[x.jsxs("h2",{children:[t.title," |"," ",x.jsx("a",{href:t.link,target:"_blank",className:"anchor-link",children:"Link"})]}),x.jsx("p",{className:"text",children:t.tech}),x.jsx("p",{className:"text",children:t.description}),x.jsx("p",{className:"text",children:t.closing}),x.jsx("img",{src:t.img,className:"sentiment-analysis-img"})]}),x.jsx("div",{className:"games-divider"})]},n));return x.jsx("div",{children:e})}const cg="/assets/hot_knife_game-Cw07BjE0.gif",fg="/assets/asteroids_gif-G16yT-6p.gif",dg="/assets/dungeon_fight_gif-FhoN2tDU.gif",pg="/assets/forest_gif-z2xutSYI.gif",mg="/assets/death_gif-CFNqw45b.gif",hg="/assets/gen_ai_gif-nmBYqTPo.gif",gg="/assets/the_dark_cave-Tf2Bt4Rv.png",vg=[{title:"The Dark Cave | Platformer",link:"https://ac8736.itch.io/the-dark-cave",tech:"GameMaker Studio, GML",description:"I build this game as a result of learning about GameMaker and experimenting with it. The game is a short 2D platformer game that features player mechanics such as: double jump, shooting, dashing. There are also enemies for the player to shoot.      Since the game is built in GameMaker, I used their programming language GML to write all the scripts and logic.",closing:"Listening to criticisms from previous projects, I implemented many suggested improvements, including clear button instructions during the game and utilizing comfortable key binds. The game is deployed to Itch.io as a .zip file. Please feel free to play and all feedback is welcome!",img:gg}],yg=[{title:"1000 Degree Hot Knife | Minimalism",link:"https://jipinyaozi.itch.io/1000-degree-hot-knife",tech:"Unity Game Engine, C#",description:"This game was built as a prototype with an emphasis on the theme of minimalism. Alongside two other contributors, we    built a game with the goal of being simple to play and having minimalistic graphics. I was responsible for the    development of the scripts (written in C#) for the game mechanics, such as the score and shields.",closing:"Unity Game Engine was utilized to develop this game and deployed to Itch.io. Please feel free to play and all feedback    is welcome!",img:cg},{title:"Asteroids | Game Feel",link:"https://ac8736.itch.io/trails",tech:"Unity Game Engine, C#",description:"This game was built as a prototype with an emphasis on game feel. Alongside two other contributors, we built a game      with the goal of being simple to play and to have toggleable options for various different game feels, such as camera      shake, particles, and sound effects. I was responsible for the development of the scripts (written in C#) for the main      game mechanics, such as the shooting, asteroids spawning, and animations.",closing:"Unity Game Engine was utilized to develop this game and deployed to Itch.io. Please feel free to play and all feedback    is welcome!",img:fg},{title:"Dungeon Fight | Dexterity",link:"https://ac8736.itch.io/fight",tech:"Unity Game Engine, C#",description:"This game was built as a prototype with an emphasis on dexterity. Alongside two other contributors, we built a game      with the goal of requiring high dexterity to play, with inspiration coming from the Souls genre. I was responsible for      the development of the player scripts (written in C#), such as the movement, fighting, health, and animations. This      entire development process took one week, from designing to implementation.",closing:"Unity Game Engine was utilized to develop this game and deployed to Itch.io. Please feel free to play and all feedback    is welcome!",img:dg},{title:"Forest | Level Design",link:"https://ac8736.itch.io/forest",tech:"Unity Game Engine, C#",description:"This game was built as a prototype, focusing on how to design levels. With two other contributors, our goal was to      produce two levels, the first to teach the basic mechanics of the game, and a second level to test the player and see      how well the tutorial taught. I was responsible for developing the player actions, like the movement and the ability      to pick up items. I was also involved in the designing of both levels.",closing:"Unity Game Engine was utilized to develop this game and deployed to Itch.io. Please feel free to play and all feedback    is welcome!",img:pg},{title:"Running From Death | Procedural Generation",link:"https://spearmintorbit.itch.io/dungeonfighter",tech:"Unity Game Engine, C#",description:"This game was built as a prototype, featuring procedurally generated content. Along with two other contributors, our      goal was to create a game that uses procedural generation algorithms to create levels. My main responsibility was to      implement procedural generation with Binary Partition and the Random Walk algorithms. I also developed the player and      shooting mechanics.",closing:"Unity Game Engine was utilized to develop this game and deployed to Itch.io. Please feel free to play and all feedback    is welcome!",img:mg},{title:"AI vs Vocaloid | Generative AI",link:"https://aqoursbaelz.itch.io/ai-or-vocaloid",tech:"Unity Game Engine, C#",description:"This game was built as a prototype, featuring generative AI. Along with three other contributors, our      goal was to create a game that uses generative AI, such as voice generation. I was involved in basic scripting with C# and assisting in AI voice generation.",closing:"Unity Game Engine was utilized to develop this game and deployed to Itch.io. Please feel free to play and all feedback    is welcome!",img:hg}];function wg(){const e=vg.map((n,r)=>x.jsxs(Pr,{triggerOnce:!0,children:[x.jsxs("div",{className:"subcontent",children:[x.jsxs("h2",{children:[n.title," |"," ",x.jsx("a",{href:n.link,target:"_blank",className:"anchor-link",children:"Itch.io"})]}),x.jsx("p",{className:"text",children:n.tech}),x.jsx("p",{className:"text",children:n.description}),x.jsx("p",{className:"text",children:n.closing}),x.jsx("img",{src:n.img,className:"hot-knife-gif"})]}),x.jsx("div",{className:"games-divider"})]},r)),t=yg.map((n,r)=>x.jsxs(Pr,{triggerOnce:!0,children:[x.jsxs("div",{className:"subcontent",children:[x.jsxs("h2",{children:[n.title," |"," ",x.jsx("a",{href:n.link,target:"_blank",className:"anchor-link",children:"Itch.io"})]}),x.jsx("p",{className:"text",children:n.tech}),x.jsx("p",{className:"text",children:n.description}),x.jsx("p",{className:"text",children:n.closing}),x.jsx("img",{src:n.img,className:"hot-knife-gif"})]}),x.jsx("div",{className:"games-divider"})]},r));return x.jsxs("div",{children:[e,x.jsx("h2",{className:"subtitle",children:"The following six games are part of a six week journey. Each week, I developed a game with emphasis on a specific characteristic."}),t]})}function xg(){const[e,t]=_.useState("websites");return x.jsxs(x.Fragment,{children:[x.jsxs("div",{className:"tab-button-group",children:[x.jsx("button",{className:e==="websites"?"tab-buttons-selected":"tab-buttons-unselected",onClick:()=>t("websites"),children:"Projects"}),x.jsx("button",{className:e==="games"?"tab-buttons-selected":"tab-buttons-unselected",onClick:()=>t("games"),children:"Games"})]}),x.jsx("div",{className:"divider"}),e==="websites"&&x.jsx(ug,{}),e==="games"&&x.jsx(wg,{})]})}function Sg(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var da=_,Hn=Sg(da);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var pa=function(){return pa=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},pa.apply(this,arguments)};function kg(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function Eg(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var Cg=`.scroll-to-top {
  background-color: white;
  right: 40px;
  bottom: 40px;
  position: fixed;
  z-index: 2;
  cursor: pointer;
  border-radius: 7px;
  width: 40px;
  height: 40px;
  box-shadow: 0 9px 25px 0 rgba(132, 128, 177, 0.28);
  border: none;
}

.scroll-to-top:active {
  transform: matrix(0.95, 0, 0, 0.95, 0, 0);
}
`;Eg(Cg);function _g(e){e===void 0&&(e=!1),e?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0}var Ng=function(e){var t=e.top,n=t===void 0?20:t,r=e.className,o=r===void 0?"":r,i=e.color,l=i===void 0?"black":i,a=e.smooth,s=a===void 0?!1:a,u=e.component,m=u===void 0?"":u,d=e.viewBox,h=d===void 0?"0 0 256 256":d,y=e.svgPath,v=y===void 0?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":y,g=e.width,k=g===void 0?"28":g,f=e.height,c=f===void 0?"28":f,p=kg(e,["top","className","color","smooth","component","viewBox","svgPath","width","height"]),w=da.useState(!1),N=w[0],P=w[1];return da.useEffect(function(){var E=function(){P(document.documentElement.scrollTop>=n)};return E(),document.addEventListener("scroll",E),function(){return document.removeEventListener("scroll",E)}},[n]),Hn.createElement(Hn.Fragment,null,N&&Hn.createElement("button",pa({className:"scroll-to-top "+o,onClick:function(){return _g(s)},"aria-label":"Scroll to top"},p),m||Hn.createElement("svg",{width:k,height:c,fill:l,viewBox:h},Hn.createElement("path",{d:v}))))},Pg=Ng;const Tg=Ku(Pg);function Rg(){return x.jsxs(x.Fragment,{children:[x.jsxs(ph,{children:[x.jsx(hh,{}),x.jsxs(ch,{children:[x.jsx(ia,{path:"/",element:x.jsx(og,{})}),x.jsx(ia,{path:"/portfolio",element:x.jsx(xg,{})})]})]}),x.jsx(Tg,{smooth:!0})]})}fl.createRoot(document.getElementById("root")).render(x.jsx(ic.StrictMode,{children:x.jsx(Rg,{})}));
