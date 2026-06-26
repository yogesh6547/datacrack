function n1(e,t){for(var r=0;r<t.length;r++){const a=t[r];if(typeof a!="string"&&!Array.isArray(a)){for(const n in a)if(n!=="default"&&!(n in e)){const i=Object.getOwnPropertyDescriptor(a,n);i&&Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:()=>a[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();function i1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mm={exports:{}},Ls={},hm={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ri=Symbol.for("react.element"),s1=Symbol.for("react.portal"),o1=Symbol.for("react.fragment"),l1=Symbol.for("react.strict_mode"),u1=Symbol.for("react.profiler"),c1=Symbol.for("react.provider"),d1=Symbol.for("react.context"),m1=Symbol.for("react.forward_ref"),h1=Symbol.for("react.suspense"),p1=Symbol.for("react.memo"),f1=Symbol.for("react.lazy"),Qu=Symbol.iterator;function g1(e){return e===null||typeof e!="object"?null:(e=Qu&&e[Qu]||e["@@iterator"],typeof e=="function"?e:null)}var pm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fm=Object.assign,gm={};function Qa(e,t,r){this.props=e,this.context=t,this.refs=gm,this.updater=r||pm}Qa.prototype.isReactComponent={};Qa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ym(){}ym.prototype=Qa.prototype;function C0(e,t,r){this.props=e,this.context=t,this.refs=gm,this.updater=r||pm}var E0=C0.prototype=new ym;E0.constructor=C0;fm(E0,Qa.prototype);E0.isPureReactComponent=!0;var Ju=Array.isArray,vm=Object.prototype.hasOwnProperty,N0={current:null},wm={key:!0,ref:!0,__self:!0,__source:!0};function bm(e,t,r){var a,n={},i=null,s=null;if(t!=null)for(a in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)vm.call(t,a)&&!wm.hasOwnProperty(a)&&(n[a]=t[a]);var o=arguments.length-2;if(o===1)n.children=r;else if(1<o){for(var l=Array(o),d=0;d<o;d++)l[d]=arguments[d+2];n.children=l}if(e&&e.defaultProps)for(a in o=e.defaultProps,o)n[a]===void 0&&(n[a]=o[a]);return{$$typeof:ri,type:e,key:i,ref:s,props:n,_owner:N0.current}}function y1(e,t){return{$$typeof:ri,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function R0(e){return typeof e=="object"&&e!==null&&e.$$typeof===ri}function v1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Zu=/\/+/g;function go(e,t){return typeof e=="object"&&e!==null&&e.key!=null?v1(""+e.key):t.toString(36)}function Ui(e,t,r,a,n){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ri:case s1:s=!0}}if(s)return s=e,n=n(s),e=a===""?"."+go(s,0):a,Ju(n)?(r="",e!=null&&(r=e.replace(Zu,"$&/")+"/"),Ui(n,t,r,"",function(d){return d})):n!=null&&(R0(n)&&(n=y1(n,r+(!n.key||s&&s.key===n.key?"":(""+n.key).replace(Zu,"$&/")+"/")+e)),t.push(n)),1;if(s=0,a=a===""?".":a+":",Ju(e))for(var o=0;o<e.length;o++){i=e[o];var l=a+go(i,o);s+=Ui(i,t,r,l,n)}else if(l=g1(e),typeof l=="function")for(e=l.call(e),o=0;!(i=e.next()).done;)i=i.value,l=a+go(i,o++),s+=Ui(i,t,r,l,n);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function fi(e,t,r){if(e==null)return e;var a=[],n=0;return Ui(e,a,"","",function(i){return t.call(r,i,n++)}),a}function w1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var et={current:null},Gi={transition:null},b1={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:Gi,ReactCurrentOwner:N0};function xm(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:fi,forEach:function(e,t,r){fi(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return fi(e,function(){t++}),t},toArray:function(e){return fi(e,function(t){return t})||[]},only:function(e){if(!R0(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=Qa;ae.Fragment=o1;ae.Profiler=u1;ae.PureComponent=C0;ae.StrictMode=l1;ae.Suspense=h1;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b1;ae.act=xm;ae.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=fm({},e.props),n=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=N0.current),t.key!==void 0&&(n=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)vm.call(t,l)&&!wm.hasOwnProperty(l)&&(a[l]=t[l]===void 0&&o!==void 0?o[l]:t[l])}var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){o=Array(l);for(var d=0;d<l;d++)o[d]=arguments[d+2];a.children=o}return{$$typeof:ri,type:e.type,key:n,ref:i,props:a,_owner:s}};ae.createContext=function(e){return e={$$typeof:d1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:c1,_context:e},e.Consumer=e};ae.createElement=bm;ae.createFactory=function(e){var t=bm.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:m1,render:e}};ae.isValidElement=R0;ae.lazy=function(e){return{$$typeof:f1,_payload:{_status:-1,_result:e},_init:w1}};ae.memo=function(e,t){return{$$typeof:p1,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=Gi.transition;Gi.transition={};try{e()}finally{Gi.transition=t}};ae.unstable_act=xm;ae.useCallback=function(e,t){return et.current.useCallback(e,t)};ae.useContext=function(e){return et.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return et.current.useDeferredValue(e)};ae.useEffect=function(e,t){return et.current.useEffect(e,t)};ae.useId=function(){return et.current.useId()};ae.useImperativeHandle=function(e,t,r){return et.current.useImperativeHandle(e,t,r)};ae.useInsertionEffect=function(e,t){return et.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return et.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return et.current.useMemo(e,t)};ae.useReducer=function(e,t,r){return et.current.useReducer(e,t,r)};ae.useRef=function(e){return et.current.useRef(e)};ae.useState=function(e){return et.current.useState(e)};ae.useSyncExternalStore=function(e,t,r){return et.current.useSyncExternalStore(e,t,r)};ae.useTransition=function(){return et.current.useTransition()};ae.version="18.3.1";hm.exports=ae;var M=hm.exports;const Nr=i1(M),x1=n1({__proto__:null,default:Nr},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S1=M,k1=Symbol.for("react.element"),T1=Symbol.for("react.fragment"),_1=Object.prototype.hasOwnProperty,C1=S1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E1={key:!0,ref:!0,__self:!0,__source:!0};function Sm(e,t,r){var a,n={},i=null,s=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(a in t)_1.call(t,a)&&!E1.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)n[a]===void 0&&(n[a]=t[a]);return{$$typeof:k1,type:e,key:i,ref:s,props:n,_owner:C1.current}}Ls.Fragment=T1;Ls.jsx=Sm;Ls.jsxs=Sm;mm.exports=Ls;var y=mm.exports,ul={},km={exports:{}},yt={},Tm={exports:{}},_m={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,K){var Y=j.length;j.push(K);e:for(;0<Y;){var W=Y-1>>>1,Q=j[W];if(0<n(Q,K))j[W]=K,j[Y]=Q,Y=W;else break e}}function r(j){return j.length===0?null:j[0]}function a(j){if(j.length===0)return null;var K=j[0],Y=j.pop();if(Y!==K){j[0]=Y;e:for(var W=0,Q=j.length,le=Q>>>1;W<le;){var ze=2*(W+1)-1,ut=j[ze],Kt=ze+1,Rt=j[Kt];if(0>n(ut,Y))Kt<Q&&0>n(Rt,ut)?(j[W]=Rt,j[Kt]=Y,W=Kt):(j[W]=ut,j[ze]=Y,W=ze);else if(Kt<Q&&0>n(Rt,Y))j[W]=Rt,j[Kt]=Y,W=Kt;else break e}}return K}function n(j,K){var Y=j.sortIndex-K.sortIndex;return Y!==0?Y:j.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],d=[],h=1,m=null,g=3,b=!1,_=!1,T=!1,N=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(j){for(var K=r(d);K!==null;){if(K.callback===null)a(d);else if(K.startTime<=j)a(d),K.sortIndex=K.expirationTime,t(l,K);else break;K=r(d)}}function E(j){if(T=!1,x(j),!_)if(r(l)!==null)_=!0,re(R);else{var K=r(d);K!==null&&Ie(E,K.startTime-j)}}function R(j,K){_=!1,T&&(T=!1,w(F),F=-1),b=!0;var Y=g;try{for(x(K),m=r(l);m!==null&&(!(m.expirationTime>K)||j&&!te());){var W=m.callback;if(typeof W=="function"){m.callback=null,g=m.priorityLevel;var Q=W(m.expirationTime<=K);K=e.unstable_now(),typeof Q=="function"?m.callback=Q:m===r(l)&&a(l),x(K)}else a(l);m=r(l)}if(m!==null)var le=!0;else{var ze=r(d);ze!==null&&Ie(E,ze.startTime-K),le=!1}return le}finally{m=null,g=Y,b=!1}}var A=!1,I=null,F=-1,U=5,B=-1;function te(){return!(e.unstable_now()-B<U)}function ne(){if(I!==null){var j=e.unstable_now();B=j;var K=!0;try{K=I(!0,j)}finally{K?Ge():(A=!1,I=null)}}else A=!1}var Ge;if(typeof v=="function")Ge=function(){v(ne)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,V=Ae.port2;Ae.port1.onmessage=ne,Ge=function(){V.postMessage(null)}}else Ge=function(){N(ne,0)};function re(j){I=j,A||(A=!0,Ge())}function Ie(j,K){F=N(function(){j(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){_||b||(_=!0,re(R))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(j){switch(g){case 1:case 2:case 3:var K=3;break;default:K=g}var Y=g;g=K;try{return j()}finally{g=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,K){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Y=g;g=j;try{return K()}finally{g=Y}},e.unstable_scheduleCallback=function(j,K,Y){var W=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?W+Y:W):Y=W,j){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=Y+Q,j={id:h++,callback:K,priorityLevel:j,startTime:Y,expirationTime:Q,sortIndex:-1},Y>W?(j.sortIndex=Y,t(d,j),r(l)===null&&j===r(d)&&(T?(w(F),F=-1):T=!0,Ie(E,Y-W))):(j.sortIndex=Q,t(l,j),_||b||(_=!0,re(R))),j},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(j){var K=g;return function(){var Y=g;g=K;try{return j.apply(this,arguments)}finally{g=Y}}}})(_m);Tm.exports=_m;var N1=Tm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R1=M,ft=N1;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cm=new Set,Ln={};function da(e,t){$a(e,t),$a(e+"Capture",t)}function $a(e,t){for(Ln[e]=t,e=0;e<t.length;e++)Cm.add(t[e])}var sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cl=Object.prototype.hasOwnProperty,M1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ec={},tc={};function A1(e){return cl.call(tc,e)?!0:cl.call(ec,e)?!1:M1.test(e)?tc[e]=!0:(ec[e]=!0,!1)}function I1(e,t,r,a){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F1(e,t,r,a){if(t===null||typeof t>"u"||I1(e,t,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function tt(e,t,r,a,n,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=n,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ue[e]=new tt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ue[t]=new tt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ue[e]=new tt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ue[e]=new tt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ue[e]=new tt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ue[e]=new tt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ue[e]=new tt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ue[e]=new tt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ue[e]=new tt(e,5,!1,e.toLowerCase(),null,!1,!1)});var M0=/[\-:]([a-z])/g;function A0(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(M0,A0);Ue[t]=new tt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(M0,A0);Ue[t]=new tt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(M0,A0);Ue[t]=new tt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ue[e]=new tt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ue[e]=new tt(e,1,!1,e.toLowerCase(),null,!0,!0)});function I0(e,t,r,a){var n=Ue.hasOwnProperty(t)?Ue[t]:null;(n!==null?n.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(F1(t,r,n,a)&&(r=null),a||n===null?A1(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):n.mustUseProperty?e[n.propertyName]=r===null?n.type===3?!1:"":r:(t=n.attributeName,a=n.attributeNamespace,r===null?e.removeAttribute(t):(n=n.type,r=n===3||n===4&&r===!0?"":""+r,a?e.setAttributeNS(a,t,r):e.setAttribute(t,r))))}var dr=R1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gi=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ba=Symbol.for("react.fragment"),F0=Symbol.for("react.strict_mode"),dl=Symbol.for("react.profiler"),Em=Symbol.for("react.provider"),Nm=Symbol.for("react.context"),L0=Symbol.for("react.forward_ref"),ml=Symbol.for("react.suspense"),hl=Symbol.for("react.suspense_list"),O0=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),Rm=Symbol.for("react.offscreen"),rc=Symbol.iterator;function un(e){return e===null||typeof e!="object"?null:(e=rc&&e[rc]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Object.assign,yo;function yn(e){if(yo===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);yo=t&&t[1]||""}return`
`+yo+e}var vo=!1;function wo(e,t){if(!e||vo)return"";vo=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var a=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){a=d}e.call(t.prototype)}else{try{throw Error()}catch(d){a=d}e()}}catch(d){if(d&&a&&typeof d.stack=="string"){for(var n=d.stack.split(`
`),i=a.stack.split(`
`),s=n.length-1,o=i.length-1;1<=s&&0<=o&&n[s]!==i[o];)o--;for(;1<=s&&0<=o;s--,o--)if(n[s]!==i[o]){if(s!==1||o!==1)do if(s--,o--,0>o||n[s]!==i[o]){var l=`
`+n[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=o);break}}}finally{vo=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?yn(e):""}function L1(e){switch(e.tag){case 5:return yn(e.type);case 16:return yn("Lazy");case 13:return yn("Suspense");case 19:return yn("SuspenseList");case 0:case 2:case 15:return e=wo(e.type,!1),e;case 11:return e=wo(e.type.render,!1),e;case 1:return e=wo(e.type,!0),e;default:return""}}function pl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ba:return"Fragment";case wa:return"Portal";case dl:return"Profiler";case F0:return"StrictMode";case ml:return"Suspense";case hl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nm:return(e.displayName||"Context")+".Consumer";case Em:return(e._context.displayName||"Context")+".Provider";case L0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O0:return t=e.displayName||null,t!==null?t:pl(e.type)||"Memo";case wr:t=e._payload,e=e._init;try{return pl(e(t))}catch{}}return null}function O1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pl(t);case 8:return t===F0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Br(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function P1(e){var t=Mm(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var n=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yi(e){e._valueTracker||(e._valueTracker=P1(e))}function Am(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),a="";return e&&(a=Mm(e)?e.checked?"true":"false":e.value),e=a,e!==r?(t.setValue(e),!0):!1}function rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fl(e,t){var r=t.checked;return Se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function ac(e,t){var r=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;r=Br(t.value!=null?t.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Im(e,t){t=t.checked,t!=null&&I0(e,"checked",t,!1)}function gl(e,t){Im(e,t);var r=Br(t.value),a=t.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yl(e,t.type,r):t.hasOwnProperty("defaultValue")&&yl(e,t.type,Br(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function nc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function yl(e,t,r){(t!=="number"||rs(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var vn=Array.isArray;function Ia(e,t,r,a){if(e=e.options,t){t={};for(var n=0;n<r.length;n++)t["$"+r[n]]=!0;for(r=0;r<e.length;r++)n=t.hasOwnProperty("$"+e[r].value),e[r].selected!==n&&(e[r].selected=n),n&&a&&(e[r].defaultSelected=!0)}else{for(r=""+Br(r),t=null,n=0;n<e.length;n++){if(e[n].value===r){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function vl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return Se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ic(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(P(92));if(vn(r)){if(1<r.length)throw Error(P(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Br(r)}}function Fm(e,t){var r=Br(t.value),a=Br(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function sc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Lm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Lm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vi,Om=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,a,n){MSApp.execUnsafeLocalFunction(function(){return e(t,r,a,n)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vi=vi||document.createElement("div"),vi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},z1=["Webkit","ms","Moz","O"];Object.keys(kn).forEach(function(e){z1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kn[t]=kn[e]})});function Pm(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||kn.hasOwnProperty(e)&&kn[e]?(""+t).trim():t+"px"}function zm(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=r.indexOf("--")===0,n=Pm(r,t[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,n):e[r]=n}}var D1=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bl(e,t){if(t){if(D1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function xl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sl=null;function P0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kl=null,Fa=null,La=null;function oc(e){if(e=ii(e)){if(typeof kl!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Bs(t),kl(e.stateNode,e.type,t))}}function Dm(e){Fa?La?La.push(e):La=[e]:Fa=e}function Bm(){if(Fa){var e=Fa,t=La;if(La=Fa=null,oc(e),t)for(e=0;e<t.length;e++)oc(t[e])}}function $m(e,t){return e(t)}function jm(){}var bo=!1;function Um(e,t,r){if(bo)return e(t,r);bo=!0;try{return $m(e,t,r)}finally{bo=!1,(Fa!==null||La!==null)&&(jm(),Bm())}}function Pn(e,t){var r=e.stateNode;if(r===null)return null;var a=Bs(r);if(a===null)return null;r=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(P(231,t,typeof r));return r}var Tl=!1;if(sr)try{var cn={};Object.defineProperty(cn,"passive",{get:function(){Tl=!0}}),window.addEventListener("test",cn,cn),window.removeEventListener("test",cn,cn)}catch{Tl=!1}function B1(e,t,r,a,n,i,s,o,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(h){this.onError(h)}}var Tn=!1,as=null,ns=!1,_l=null,$1={onError:function(e){Tn=!0,as=e}};function j1(e,t,r,a,n,i,s,o,l){Tn=!1,as=null,B1.apply($1,arguments)}function U1(e,t,r,a,n,i,s,o,l){if(j1.apply(this,arguments),Tn){if(Tn){var d=as;Tn=!1,as=null}else throw Error(P(198));ns||(ns=!0,_l=d)}}function ma(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Gm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lc(e){if(ma(e)!==e)throw Error(P(188))}function G1(e){var t=e.alternate;if(!t){if(t=ma(e),t===null)throw Error(P(188));return t!==e?null:e}for(var r=e,a=t;;){var n=r.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){r=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===r)return lc(n),e;if(i===a)return lc(n),t;i=i.sibling}throw Error(P(188))}if(r.return!==a.return)r=n,a=i;else{for(var s=!1,o=n.child;o;){if(o===r){s=!0,r=n,a=i;break}if(o===a){s=!0,a=n,r=i;break}o=o.sibling}if(!s){for(o=i.child;o;){if(o===r){s=!0,r=i,a=n;break}if(o===a){s=!0,a=i,r=n;break}o=o.sibling}if(!s)throw Error(P(189))}}if(r.alternate!==a)throw Error(P(190))}if(r.tag!==3)throw Error(P(188));return r.stateNode.current===r?e:t}function Hm(e){return e=G1(e),e!==null?qm(e):null}function qm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qm(e);if(t!==null)return t;e=e.sibling}return null}var Wm=ft.unstable_scheduleCallback,uc=ft.unstable_cancelCallback,H1=ft.unstable_shouldYield,q1=ft.unstable_requestPaint,Ce=ft.unstable_now,W1=ft.unstable_getCurrentPriorityLevel,z0=ft.unstable_ImmediatePriority,Vm=ft.unstable_UserBlockingPriority,is=ft.unstable_NormalPriority,V1=ft.unstable_LowPriority,Xm=ft.unstable_IdlePriority,Os=null,Gt=null;function X1(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Os,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:Q1,K1=Math.log,Y1=Math.LN2;function Q1(e){return e>>>=0,e===0?32:31-(K1(e)/Y1|0)|0}var wi=64,bi=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ss(e,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,n=e.suspendedLanes,i=e.pingedLanes,s=r&268435455;if(s!==0){var o=s&~n;o!==0?a=wn(o):(i&=s,i!==0&&(a=wn(i)))}else s=r&~n,s!==0?a=wn(s):i!==0&&(a=wn(i));if(a===0)return 0;if(t!==0&&t!==a&&!(t&n)&&(n=a&-a,i=t&-t,n>=i||n===16&&(i&4194240)!==0))return t;if(a&4&&(a|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)r=31-Ot(t),n=1<<r,a|=e[r],t&=~n;return a}function J1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z1(e,t){for(var r=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Ot(i),o=1<<s,l=n[s];l===-1?(!(o&r)||o&a)&&(n[s]=J1(o,t)):l<=t&&(e.expiredLanes|=o),i&=~o}}function Cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Km(){var e=wi;return wi<<=1,!(wi&4194240)&&(wi=64),e}function xo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ai(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=r}function eg(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var n=31-Ot(r),i=1<<n;t[n]=0,a[n]=-1,e[n]=-1,r&=~i}}function D0(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var a=31-Ot(r),n=1<<a;n&t|e[a]&t&&(e[a]|=t),r&=~n}}var ue=0;function Ym(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qm,B0,Jm,Zm,eh,El=!1,xi=[],Rr=null,Mr=null,Ar=null,zn=new Map,Dn=new Map,Sr=[],tg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cc(e,t){switch(e){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dn.delete(t.pointerId)}}function dn(e,t,r,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=ii(t),t!==null&&B0(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function rg(e,t,r,a,n){switch(t){case"focusin":return Rr=dn(Rr,e,t,r,a,n),!0;case"dragenter":return Mr=dn(Mr,e,t,r,a,n),!0;case"mouseover":return Ar=dn(Ar,e,t,r,a,n),!0;case"pointerover":var i=n.pointerId;return zn.set(i,dn(zn.get(i)||null,e,t,r,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Dn.set(i,dn(Dn.get(i)||null,e,t,r,a,n)),!0}return!1}function th(e){var t=ta(e.target);if(t!==null){var r=ma(t);if(r!==null){if(t=r.tag,t===13){if(t=Gm(r),t!==null){e.blockedOn=t,eh(e.priority,function(){Jm(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);Sl=a,r.target.dispatchEvent(a),Sl=null}else return t=ii(r),t!==null&&B0(t),e.blockedOn=r,!1;t.shift()}return!0}function dc(e,t,r){Hi(e)&&r.delete(t)}function ag(){El=!1,Rr!==null&&Hi(Rr)&&(Rr=null),Mr!==null&&Hi(Mr)&&(Mr=null),Ar!==null&&Hi(Ar)&&(Ar=null),zn.forEach(dc),Dn.forEach(dc)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,El||(El=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,ag)))}function Bn(e){function t(n){return mn(n,e)}if(0<xi.length){mn(xi[0],e);for(var r=1;r<xi.length;r++){var a=xi[r];a.blockedOn===e&&(a.blockedOn=null)}}for(Rr!==null&&mn(Rr,e),Mr!==null&&mn(Mr,e),Ar!==null&&mn(Ar,e),zn.forEach(t),Dn.forEach(t),r=0;r<Sr.length;r++)a=Sr[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<Sr.length&&(r=Sr[0],r.blockedOn===null);)th(r),r.blockedOn===null&&Sr.shift()}var Oa=dr.ReactCurrentBatchConfig,os=!0;function ng(e,t,r,a){var n=ue,i=Oa.transition;Oa.transition=null;try{ue=1,$0(e,t,r,a)}finally{ue=n,Oa.transition=i}}function ig(e,t,r,a){var n=ue,i=Oa.transition;Oa.transition=null;try{ue=4,$0(e,t,r,a)}finally{ue=n,Oa.transition=i}}function $0(e,t,r,a){if(os){var n=Nl(e,t,r,a);if(n===null)Ao(e,t,a,ls,r),cc(e,a);else if(rg(n,e,t,r,a))a.stopPropagation();else if(cc(e,a),t&4&&-1<tg.indexOf(e)){for(;n!==null;){var i=ii(n);if(i!==null&&Qm(i),i=Nl(e,t,r,a),i===null&&Ao(e,t,a,ls,r),i===n)break;n=i}n!==null&&a.stopPropagation()}else Ao(e,t,a,null,r)}}var ls=null;function Nl(e,t,r,a){if(ls=null,e=P0(a),e=ta(e),e!==null)if(t=ma(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Gm(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ls=e,null}function rh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W1()){case z0:return 1;case Vm:return 4;case is:case V1:return 16;case Xm:return 536870912;default:return 16}default:return 16}}var Tr=null,j0=null,qi=null;function ah(){if(qi)return qi;var e,t=j0,r=t.length,a,n="value"in Tr?Tr.value:Tr.textContent,i=n.length;for(e=0;e<r&&t[e]===n[e];e++);var s=r-e;for(a=1;a<=s&&t[r-a]===n[i-a];a++);return qi=n.slice(e,1<a?1-a:void 0)}function Wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Si(){return!0}function mc(){return!1}function vt(e){function t(r,a,n,i,s){this._reactName=r,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Si:mc,this.isPropagationStopped=mc,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),t}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},U0=vt(Ja),ni=Se({},Ja,{view:0,detail:0}),sg=vt(ni),So,ko,hn,Ps=Se({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:G0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(So=e.screenX-hn.screenX,ko=e.screenY-hn.screenY):ko=So=0,hn=e),So)},movementY:function(e){return"movementY"in e?e.movementY:ko}}),hc=vt(Ps),og=Se({},Ps,{dataTransfer:0}),lg=vt(og),ug=Se({},ni,{relatedTarget:0}),To=vt(ug),cg=Se({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),dg=vt(cg),mg=Se({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hg=vt(mg),pg=Se({},Ja,{data:0}),pc=vt(pg),fg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yg[e])?!!t[e]:!1}function G0(){return vg}var wg=Se({},ni,{key:function(e){if(e.key){var t=fg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:G0,charCode:function(e){return e.type==="keypress"?Wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bg=vt(wg),xg=Se({},Ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fc=vt(xg),Sg=Se({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:G0}),kg=vt(Sg),Tg=Se({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),_g=vt(Tg),Cg=Se({},Ps,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Eg=vt(Cg),Ng=[9,13,27,32],H0=sr&&"CompositionEvent"in window,_n=null;sr&&"documentMode"in document&&(_n=document.documentMode);var Rg=sr&&"TextEvent"in window&&!_n,nh=sr&&(!H0||_n&&8<_n&&11>=_n),gc=" ",yc=!1;function ih(e,t){switch(e){case"keyup":return Ng.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xa=!1;function Mg(e,t){switch(e){case"compositionend":return sh(t);case"keypress":return t.which!==32?null:(yc=!0,gc);case"textInput":return e=t.data,e===gc&&yc?null:e;default:return null}}function Ag(e,t){if(xa)return e==="compositionend"||!H0&&ih(e,t)?(e=ah(),qi=j0=Tr=null,xa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nh&&t.locale!=="ko"?null:t.data;default:return null}}var Ig={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ig[e.type]:t==="textarea"}function oh(e,t,r,a){Dm(a),t=us(t,"onChange"),0<t.length&&(r=new U0("onChange","change",null,r,a),e.push({event:r,listeners:t}))}var Cn=null,$n=null;function Fg(e){vh(e,0)}function zs(e){var t=Ta(e);if(Am(t))return e}function Lg(e,t){if(e==="change")return t}var lh=!1;if(sr){var _o;if(sr){var Co="oninput"in document;if(!Co){var wc=document.createElement("div");wc.setAttribute("oninput","return;"),Co=typeof wc.oninput=="function"}_o=Co}else _o=!1;lh=_o&&(!document.documentMode||9<document.documentMode)}function bc(){Cn&&(Cn.detachEvent("onpropertychange",uh),$n=Cn=null)}function uh(e){if(e.propertyName==="value"&&zs($n)){var t=[];oh(t,$n,e,P0(e)),Um(Fg,t)}}function Og(e,t,r){e==="focusin"?(bc(),Cn=t,$n=r,Cn.attachEvent("onpropertychange",uh)):e==="focusout"&&bc()}function Pg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zs($n)}function zg(e,t){if(e==="click")return zs(t)}function Dg(e,t){if(e==="input"||e==="change")return zs(t)}function Bg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:Bg;function jn(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var n=r[a];if(!cl.call(t,n)||!zt(e[n],t[n]))return!1}return!0}function xc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sc(e,t){var r=xc(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=t&&a>=t)return{node:r,offset:t-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=xc(r)}}function ch(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ch(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dh(){for(var e=window,t=rs();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=rs(e.document)}return t}function q0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $g(e){var t=dh(),r=e.focusedElem,a=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&ch(r.ownerDocument.documentElement,r)){if(a!==null&&q0(r)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var n=r.textContent.length,i=Math.min(a.start,n);a=a.end===void 0?i:Math.min(a.end,n),!e.extend&&i>a&&(n=a,a=i,i=n),n=Sc(r,i);var s=Sc(r,a);n&&s&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(n.node,n.offset),e.removeAllRanges(),i>a?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jg=sr&&"documentMode"in document&&11>=document.documentMode,Sa=null,Rl=null,En=null,Ml=!1;function kc(e,t,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ml||Sa==null||Sa!==rs(a)||(a=Sa,"selectionStart"in a&&q0(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),En&&jn(En,a)||(En=a,a=us(Rl,"onSelect"),0<a.length&&(t=new U0("onSelect","select",null,t,r),e.push({event:t,listeners:a}),t.target=Sa)))}function ki(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ka={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionend:ki("Transition","TransitionEnd")},Eo={},mh={};sr&&(mh=document.createElement("div").style,"AnimationEvent"in window||(delete ka.animationend.animation,delete ka.animationiteration.animation,delete ka.animationstart.animation),"TransitionEvent"in window||delete ka.transitionend.transition);function Ds(e){if(Eo[e])return Eo[e];if(!ka[e])return e;var t=ka[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in mh)return Eo[e]=t[r];return e}var hh=Ds("animationend"),ph=Ds("animationiteration"),fh=Ds("animationstart"),gh=Ds("transitionend"),yh=new Map,Tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(e,t){yh.set(e,t),da(t,[e])}for(var No=0;No<Tc.length;No++){var Ro=Tc[No],Ug=Ro.toLowerCase(),Gg=Ro[0].toUpperCase()+Ro.slice(1);qr(Ug,"on"+Gg)}qr(hh,"onAnimationEnd");qr(ph,"onAnimationIteration");qr(fh,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(gh,"onTransitionEnd");$a("onMouseEnter",["mouseout","mouseover"]);$a("onMouseLeave",["mouseout","mouseover"]);$a("onPointerEnter",["pointerout","pointerover"]);$a("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hg=new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));function _c(e,t,r){var a=e.type||"unknown-event";e.currentTarget=r,U1(a,t,void 0,e),e.currentTarget=null}function vh(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var s=a.length-1;0<=s;s--){var o=a[s],l=o.instance,d=o.currentTarget;if(o=o.listener,l!==i&&n.isPropagationStopped())break e;_c(n,o,d),i=l}else for(s=0;s<a.length;s++){if(o=a[s],l=o.instance,d=o.currentTarget,o=o.listener,l!==i&&n.isPropagationStopped())break e;_c(n,o,d),i=l}}}if(ns)throw e=_l,ns=!1,_l=null,e}function me(e,t){var r=t[Ol];r===void 0&&(r=t[Ol]=new Set);var a=e+"__bubble";r.has(a)||(wh(t,e,2,!1),r.add(a))}function Mo(e,t,r){var a=0;t&&(a|=4),wh(r,e,a,t)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function Un(e){if(!e[Ti]){e[Ti]=!0,Cm.forEach(function(r){r!=="selectionchange"&&(Hg.has(r)||Mo(r,!1,e),Mo(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ti]||(t[Ti]=!0,Mo("selectionchange",!1,t))}}function wh(e,t,r,a){switch(rh(t)){case 1:var n=ng;break;case 4:n=ig;break;default:n=$0}r=n.bind(null,t,r,e),n=void 0,!Tl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,r,{capture:!0,passive:n}):e.addEventListener(t,r,!0):n!==void 0?e.addEventListener(t,r,{passive:n}):e.addEventListener(t,r,!1)}function Ao(e,t,r,a,n){var i=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var o=a.stateNode.containerInfo;if(o===n||o.nodeType===8&&o.parentNode===n)break;if(s===4)for(s=a.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===n||l.nodeType===8&&l.parentNode===n))return;s=s.return}for(;o!==null;){if(s=ta(o),s===null)return;if(l=s.tag,l===5||l===6){a=i=s;continue e}o=o.parentNode}}a=a.return}Um(function(){var d=i,h=P0(r),m=[];e:{var g=yh.get(e);if(g!==void 0){var b=U0,_=e;switch(e){case"keypress":if(Wi(r)===0)break e;case"keydown":case"keyup":b=bg;break;case"focusin":_="focus",b=To;break;case"focusout":_="blur",b=To;break;case"beforeblur":case"afterblur":b=To;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=kg;break;case hh:case ph:case fh:b=dg;break;case gh:b=_g;break;case"scroll":b=sg;break;case"wheel":b=Eg;break;case"copy":case"cut":case"paste":b=hg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=fc}var T=(t&4)!==0,N=!T&&e==="scroll",w=T?g!==null?g+"Capture":null:g;T=[];for(var v=d,x;v!==null;){x=v;var E=x.stateNode;if(x.tag===5&&E!==null&&(x=E,w!==null&&(E=Pn(v,w),E!=null&&T.push(Gn(v,E,x)))),N)break;v=v.return}0<T.length&&(g=new b(g,_,null,r,h),m.push({event:g,listeners:T}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",g&&r!==Sl&&(_=r.relatedTarget||r.fromElement)&&(ta(_)||_[or]))break e;if((b||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,b?(_=r.relatedTarget||r.toElement,b=d,_=_?ta(_):null,_!==null&&(N=ma(_),_!==N||_.tag!==5&&_.tag!==6)&&(_=null)):(b=null,_=d),b!==_)){if(T=hc,E="onMouseLeave",w="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(T=fc,E="onPointerLeave",w="onPointerEnter",v="pointer"),N=b==null?g:Ta(b),x=_==null?g:Ta(_),g=new T(E,v+"leave",b,r,h),g.target=N,g.relatedTarget=x,E=null,ta(h)===d&&(T=new T(w,v+"enter",_,r,h),T.target=x,T.relatedTarget=N,E=T),N=E,b&&_)t:{for(T=b,w=_,v=0,x=T;x;x=ya(x))v++;for(x=0,E=w;E;E=ya(E))x++;for(;0<v-x;)T=ya(T),v--;for(;0<x-v;)w=ya(w),x--;for(;v--;){if(T===w||w!==null&&T===w.alternate)break t;T=ya(T),w=ya(w)}T=null}else T=null;b!==null&&Cc(m,g,b,T,!1),_!==null&&N!==null&&Cc(m,N,_,T,!0)}}e:{if(g=d?Ta(d):window,b=g.nodeName&&g.nodeName.toLowerCase(),b==="select"||b==="input"&&g.type==="file")var R=Lg;else if(vc(g))if(lh)R=Dg;else{R=Pg;var A=Og}else(b=g.nodeName)&&b.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(R=zg);if(R&&(R=R(e,d))){oh(m,R,r,h);break e}A&&A(e,g,d),e==="focusout"&&(A=g._wrapperState)&&A.controlled&&g.type==="number"&&yl(g,"number",g.value)}switch(A=d?Ta(d):window,e){case"focusin":(vc(A)||A.contentEditable==="true")&&(Sa=A,Rl=d,En=null);break;case"focusout":En=Rl=Sa=null;break;case"mousedown":Ml=!0;break;case"contextmenu":case"mouseup":case"dragend":Ml=!1,kc(m,r,h);break;case"selectionchange":if(jg)break;case"keydown":case"keyup":kc(m,r,h)}var I;if(H0)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else xa?ih(e,r)&&(F="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(F="onCompositionStart");F&&(nh&&r.locale!=="ko"&&(xa||F!=="onCompositionStart"?F==="onCompositionEnd"&&xa&&(I=ah()):(Tr=h,j0="value"in Tr?Tr.value:Tr.textContent,xa=!0)),A=us(d,F),0<A.length&&(F=new pc(F,e,null,r,h),m.push({event:F,listeners:A}),I?F.data=I:(I=sh(r),I!==null&&(F.data=I)))),(I=Rg?Mg(e,r):Ag(e,r))&&(d=us(d,"onBeforeInput"),0<d.length&&(h=new pc("onBeforeInput","beforeinput",null,r,h),m.push({event:h,listeners:d}),h.data=I))}vh(m,t)})}function Gn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function us(e,t){for(var r=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;n.tag===5&&i!==null&&(n=i,i=Pn(e,r),i!=null&&a.unshift(Gn(e,i,n)),i=Pn(e,t),i!=null&&a.push(Gn(e,i,n))),e=e.return}return a}function ya(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cc(e,t,r,a,n){for(var i=t._reactName,s=[];r!==null&&r!==a;){var o=r,l=o.alternate,d=o.stateNode;if(l!==null&&l===a)break;o.tag===5&&d!==null&&(o=d,n?(l=Pn(r,i),l!=null&&s.unshift(Gn(r,l,o))):n||(l=Pn(r,i),l!=null&&s.push(Gn(r,l,o)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var qg=/\r\n?/g,Wg=/\u0000|\uFFFD/g;function Ec(e){return(typeof e=="string"?e:""+e).replace(qg,`
`).replace(Wg,"")}function _i(e,t,r){if(t=Ec(t),Ec(e)!==t&&r)throw Error(P(425))}function cs(){}var Al=null,Il=null;function Fl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ll=typeof setTimeout=="function"?setTimeout:void 0,Vg=typeof clearTimeout=="function"?clearTimeout:void 0,Nc=typeof Promise=="function"?Promise:void 0,Xg=typeof queueMicrotask=="function"?queueMicrotask:typeof Nc<"u"?function(e){return Nc.resolve(null).then(e).catch(Kg)}:Ll;function Kg(e){setTimeout(function(){throw e})}function Io(e,t){var r=t,a=0;do{var n=r.nextSibling;if(e.removeChild(r),n&&n.nodeType===8)if(r=n.data,r==="/$"){if(a===0){e.removeChild(n),Bn(t);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=n}while(r);Bn(t)}function Ir(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Za=Math.random().toString(36).slice(2),jt="__reactFiber$"+Za,Hn="__reactProps$"+Za,or="__reactContainer$"+Za,Ol="__reactEvents$"+Za,Yg="__reactListeners$"+Za,Qg="__reactHandles$"+Za;function ta(e){var t=e[jt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[or]||r[jt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Rc(e);e!==null;){if(r=e[jt])return r;e=Rc(e)}return t}e=r,r=e.parentNode}return null}function ii(e){return e=e[jt]||e[or],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ta(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Bs(e){return e[Hn]||null}var Pl=[],_a=-1;function Wr(e){return{current:e}}function he(e){0>_a||(e.current=Pl[_a],Pl[_a]=null,_a--)}function de(e,t){_a++,Pl[_a]=e.current,e.current=t}var $r={},Xe=Wr($r),st=Wr(!1),sa=$r;function ja(e,t){var r=e.type.contextTypes;if(!r)return $r;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var n={},i;for(i in r)n[i]=t[i];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=n),n}function ot(e){return e=e.childContextTypes,e!=null}function ds(){he(st),he(Xe)}function Mc(e,t,r){if(Xe.current!==$r)throw Error(P(168));de(Xe,t),de(st,r)}function bh(e,t,r){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var n in a)if(!(n in t))throw Error(P(108,O1(e)||"Unknown",n));return Se({},r,a)}function ms(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$r,sa=Xe.current,de(Xe,e),de(st,st.current),!0}function Ac(e,t,r){var a=e.stateNode;if(!a)throw Error(P(169));r?(e=bh(e,t,sa),a.__reactInternalMemoizedMergedChildContext=e,he(st),he(Xe),de(Xe,e)):he(st),de(st,r)}var er=null,$s=!1,Fo=!1;function xh(e){er===null?er=[e]:er.push(e)}function Jg(e){$s=!0,xh(e)}function Vr(){if(!Fo&&er!==null){Fo=!0;var e=0,t=ue;try{var r=er;for(ue=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}er=null,$s=!1}catch(n){throw er!==null&&(er=er.slice(e+1)),Wm(z0,Vr),n}finally{ue=t,Fo=!1}}return null}var Ca=[],Ea=0,hs=null,ps=0,xt=[],St=0,oa=null,rr=1,ar="";function Jr(e,t){Ca[Ea++]=ps,Ca[Ea++]=hs,hs=e,ps=t}function Sh(e,t,r){xt[St++]=rr,xt[St++]=ar,xt[St++]=oa,oa=e;var a=rr;e=ar;var n=32-Ot(a)-1;a&=~(1<<n),r+=1;var i=32-Ot(t)+n;if(30<i){var s=n-n%5;i=(a&(1<<s)-1).toString(32),a>>=s,n-=s,rr=1<<32-Ot(t)+n|r<<n|a,ar=i+e}else rr=1<<i|r<<n|a,ar=e}function W0(e){e.return!==null&&(Jr(e,1),Sh(e,1,0))}function V0(e){for(;e===hs;)hs=Ca[--Ea],Ca[Ea]=null,ps=Ca[--Ea],Ca[Ea]=null;for(;e===oa;)oa=xt[--St],xt[St]=null,ar=xt[--St],xt[St]=null,rr=xt[--St],xt[St]=null}var ht=null,mt=null,pe=!1,Lt=null;function kh(e,t){var r=kt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Ic(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,mt=Ir(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=oa!==null?{id:rr,overflow:ar}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=kt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ht=e,mt=null,!0):!1;default:return!1}}function zl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Dl(e){if(pe){var t=mt;if(t){var r=t;if(!Ic(e,t)){if(zl(e))throw Error(P(418));t=Ir(r.nextSibling);var a=ht;t&&Ic(e,t)?kh(a,r):(e.flags=e.flags&-4097|2,pe=!1,ht=e)}}else{if(zl(e))throw Error(P(418));e.flags=e.flags&-4097|2,pe=!1,ht=e}}}function Fc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function Ci(e){if(e!==ht)return!1;if(!pe)return Fc(e),pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fl(e.type,e.memoizedProps)),t&&(t=mt)){if(zl(e))throw Th(),Error(P(418));for(;t;)kh(e,t),t=Ir(t.nextSibling)}if(Fc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){mt=Ir(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}mt=null}}else mt=ht?Ir(e.stateNode.nextSibling):null;return!0}function Th(){for(var e=mt;e;)e=Ir(e.nextSibling)}function Ua(){mt=ht=null,pe=!1}function X0(e){Lt===null?Lt=[e]:Lt.push(e)}var Zg=dr.ReactCurrentBatchConfig;function pn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(P(309));var a=r.stateNode}if(!a)throw Error(P(147,e));var n=a,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var o=n.refs;s===null?delete o[i]:o[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!r._owner)throw Error(P(290,e))}return e}function Ei(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lc(e){var t=e._init;return t(e._payload)}function _h(e){function t(w,v){if(e){var x=w.deletions;x===null?(w.deletions=[v],w.flags|=16):x.push(v)}}function r(w,v){if(!e)return null;for(;v!==null;)t(w,v),v=v.sibling;return null}function a(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function n(w,v){return w=Pr(w,v),w.index=0,w.sibling=null,w}function i(w,v,x){return w.index=x,e?(x=w.alternate,x!==null?(x=x.index,x<v?(w.flags|=2,v):x):(w.flags|=2,v)):(w.flags|=1048576,v)}function s(w){return e&&w.alternate===null&&(w.flags|=2),w}function o(w,v,x,E){return v===null||v.tag!==6?(v=$o(x,w.mode,E),v.return=w,v):(v=n(v,x),v.return=w,v)}function l(w,v,x,E){var R=x.type;return R===ba?h(w,v,x.props.children,E,x.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===wr&&Lc(R)===v.type)?(E=n(v,x.props),E.ref=pn(w,v,x),E.return=w,E):(E=Zi(x.type,x.key,x.props,null,w.mode,E),E.ref=pn(w,v,x),E.return=w,E)}function d(w,v,x,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=jo(x,w.mode,E),v.return=w,v):(v=n(v,x.children||[]),v.return=w,v)}function h(w,v,x,E,R){return v===null||v.tag!==7?(v=ia(x,w.mode,E,R),v.return=w,v):(v=n(v,x),v.return=w,v)}function m(w,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=$o(""+v,w.mode,x),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case gi:return x=Zi(v.type,v.key,v.props,null,w.mode,x),x.ref=pn(w,null,v),x.return=w,x;case wa:return v=jo(v,w.mode,x),v.return=w,v;case wr:var E=v._init;return m(w,E(v._payload),x)}if(vn(v)||un(v))return v=ia(v,w.mode,x,null),v.return=w,v;Ei(w,v)}return null}function g(w,v,x,E){var R=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:o(w,v,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case gi:return x.key===R?l(w,v,x,E):null;case wa:return x.key===R?d(w,v,x,E):null;case wr:return R=x._init,g(w,v,R(x._payload),E)}if(vn(x)||un(x))return R!==null?null:h(w,v,x,E,null);Ei(w,x)}return null}function b(w,v,x,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return w=w.get(x)||null,o(v,w,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case gi:return w=w.get(E.key===null?x:E.key)||null,l(v,w,E,R);case wa:return w=w.get(E.key===null?x:E.key)||null,d(v,w,E,R);case wr:var A=E._init;return b(w,v,x,A(E._payload),R)}if(vn(E)||un(E))return w=w.get(x)||null,h(v,w,E,R,null);Ei(v,E)}return null}function _(w,v,x,E){for(var R=null,A=null,I=v,F=v=0,U=null;I!==null&&F<x.length;F++){I.index>F?(U=I,I=null):U=I.sibling;var B=g(w,I,x[F],E);if(B===null){I===null&&(I=U);break}e&&I&&B.alternate===null&&t(w,I),v=i(B,v,F),A===null?R=B:A.sibling=B,A=B,I=U}if(F===x.length)return r(w,I),pe&&Jr(w,F),R;if(I===null){for(;F<x.length;F++)I=m(w,x[F],E),I!==null&&(v=i(I,v,F),A===null?R=I:A.sibling=I,A=I);return pe&&Jr(w,F),R}for(I=a(w,I);F<x.length;F++)U=b(I,w,F,x[F],E),U!==null&&(e&&U.alternate!==null&&I.delete(U.key===null?F:U.key),v=i(U,v,F),A===null?R=U:A.sibling=U,A=U);return e&&I.forEach(function(te){return t(w,te)}),pe&&Jr(w,F),R}function T(w,v,x,E){var R=un(x);if(typeof R!="function")throw Error(P(150));if(x=R.call(x),x==null)throw Error(P(151));for(var A=R=null,I=v,F=v=0,U=null,B=x.next();I!==null&&!B.done;F++,B=x.next()){I.index>F?(U=I,I=null):U=I.sibling;var te=g(w,I,B.value,E);if(te===null){I===null&&(I=U);break}e&&I&&te.alternate===null&&t(w,I),v=i(te,v,F),A===null?R=te:A.sibling=te,A=te,I=U}if(B.done)return r(w,I),pe&&Jr(w,F),R;if(I===null){for(;!B.done;F++,B=x.next())B=m(w,B.value,E),B!==null&&(v=i(B,v,F),A===null?R=B:A.sibling=B,A=B);return pe&&Jr(w,F),R}for(I=a(w,I);!B.done;F++,B=x.next())B=b(I,w,F,B.value,E),B!==null&&(e&&B.alternate!==null&&I.delete(B.key===null?F:B.key),v=i(B,v,F),A===null?R=B:A.sibling=B,A=B);return e&&I.forEach(function(ne){return t(w,ne)}),pe&&Jr(w,F),R}function N(w,v,x,E){if(typeof x=="object"&&x!==null&&x.type===ba&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case gi:e:{for(var R=x.key,A=v;A!==null;){if(A.key===R){if(R=x.type,R===ba){if(A.tag===7){r(w,A.sibling),v=n(A,x.props.children),v.return=w,w=v;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===wr&&Lc(R)===A.type){r(w,A.sibling),v=n(A,x.props),v.ref=pn(w,A,x),v.return=w,w=v;break e}r(w,A);break}else t(w,A);A=A.sibling}x.type===ba?(v=ia(x.props.children,w.mode,E,x.key),v.return=w,w=v):(E=Zi(x.type,x.key,x.props,null,w.mode,E),E.ref=pn(w,v,x),E.return=w,w=E)}return s(w);case wa:e:{for(A=x.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){r(w,v.sibling),v=n(v,x.children||[]),v.return=w,w=v;break e}else{r(w,v);break}else t(w,v);v=v.sibling}v=jo(x,w.mode,E),v.return=w,w=v}return s(w);case wr:return A=x._init,N(w,v,A(x._payload),E)}if(vn(x))return _(w,v,x,E);if(un(x))return T(w,v,x,E);Ei(w,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(r(w,v.sibling),v=n(v,x),v.return=w,w=v):(r(w,v),v=$o(x,w.mode,E),v.return=w,w=v),s(w)):r(w,v)}return N}var Ga=_h(!0),Ch=_h(!1),fs=Wr(null),gs=null,Na=null,K0=null;function Y0(){K0=Na=gs=null}function Q0(e){var t=fs.current;he(fs),e._currentValue=t}function Bl(e,t,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===r)break;e=e.return}}function Pa(e,t){gs=e,K0=Na=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(it=!0),e.firstContext=null)}function Ct(e){var t=e._currentValue;if(K0!==e)if(e={context:e,memoizedValue:t,next:null},Na===null){if(gs===null)throw Error(P(308));Na=e,gs.dependencies={lanes:0,firstContext:e}}else Na=Na.next=e;return t}var ra=null;function J0(e){ra===null?ra=[e]:ra.push(e)}function Eh(e,t,r,a){var n=t.interleaved;return n===null?(r.next=r,J0(t)):(r.next=n.next,n.next=r),t.interleaved=r,lr(e,a)}function lr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var br=!1;function Z0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fr(e,t,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,ie&2){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,lr(e,r)}return n=a.interleaved,n===null?(t.next=t,J0(a)):(t.next=n.next,n.next=t),a.interleaved=t,lr(e,r)}function Vi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,D0(e,r)}}function Oc(e,t){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var n=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?n=i=s:i=i.next=s,r=r.next}while(r!==null);i===null?n=i=t:i=i.next=t}else n=i=t;r={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ys(e,t,r,a){var n=e.updateQueue;br=!1;var i=n.firstBaseUpdate,s=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var l=o,d=l.next;l.next=null,s===null?i=d:s.next=d,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=d:o.next=d,h.lastBaseUpdate=l))}if(i!==null){var m=n.baseState;s=0,h=d=l=null,o=i;do{var g=o.lane,b=o.eventTime;if((a&g)===g){h!==null&&(h=h.next={eventTime:b,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=e,T=o;switch(g=t,b=r,T.tag){case 1:if(_=T.payload,typeof _=="function"){m=_.call(b,m,g);break e}m=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=T.payload,g=typeof _=="function"?_.call(b,m,g):_,g==null)break e;m=Se({},m,g);break e;case 2:br=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,g=n.effects,g===null?n.effects=[o]:g.push(o))}else b={eventTime:b,lane:g,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(d=h=b,l=m):h=h.next=b,s|=g;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;g=o,o=g.next,g.next=null,n.lastBaseUpdate=g,n.shared.pending=null}}while(!0);if(h===null&&(l=m),n.baseState=l,n.firstBaseUpdate=d,n.lastBaseUpdate=h,t=n.shared.interleaved,t!==null){n=t;do s|=n.lane,n=n.next;while(n!==t)}else i===null&&(n.shared.lanes=0);ua|=s,e.lanes=s,e.memoizedState=m}}function Pc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],n=a.callback;if(n!==null){if(a.callback=null,a=r,typeof n!="function")throw Error(P(191,n));n.call(a)}}}var si={},Ht=Wr(si),qn=Wr(si),Wn=Wr(si);function aa(e){if(e===si)throw Error(P(174));return e}function eu(e,t){switch(de(Wn,t),de(qn,e),de(Ht,si),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wl(t,e)}he(Ht),de(Ht,t)}function Ha(){he(Ht),he(qn),he(Wn)}function Rh(e){aa(Wn.current);var t=aa(Ht.current),r=wl(t,e.type);t!==r&&(de(qn,e),de(Ht,r))}function tu(e){qn.current===e&&(he(Ht),he(qn))}var ve=Wr(0);function vs(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Lo=[];function ru(){for(var e=0;e<Lo.length;e++)Lo[e]._workInProgressVersionPrimary=null;Lo.length=0}var Xi=dr.ReactCurrentDispatcher,Oo=dr.ReactCurrentBatchConfig,la=0,be=null,Le=null,De=null,ws=!1,Nn=!1,Vn=0,e4=0;function He(){throw Error(P(321))}function au(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!zt(e[r],t[r]))return!1;return!0}function nu(e,t,r,a,n,i){if(la=i,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xi.current=e===null||e.memoizedState===null?n4:i4,e=r(a,n),Nn){i=0;do{if(Nn=!1,Vn=0,25<=i)throw Error(P(301));i+=1,De=Le=null,t.updateQueue=null,Xi.current=s4,e=r(a,n)}while(Nn)}if(Xi.current=bs,t=Le!==null&&Le.next!==null,la=0,De=Le=be=null,ws=!1,t)throw Error(P(300));return e}function iu(){var e=Vn!==0;return Vn=0,e}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?be.memoizedState=De=e:De=De.next=e,De}function Et(){if(Le===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=De===null?be.memoizedState:De.next;if(t!==null)De=t,Le=e;else{if(e===null)throw Error(P(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},De===null?be.memoizedState=De=e:De=De.next=e}return De}function Xn(e,t){return typeof t=="function"?t(e):t}function Po(e){var t=Et(),r=t.queue;if(r===null)throw Error(P(311));r.lastRenderedReducer=e;var a=Le,n=a.baseQueue,i=r.pending;if(i!==null){if(n!==null){var s=n.next;n.next=i.next,i.next=s}a.baseQueue=n=i,r.pending=null}if(n!==null){i=n.next,a=a.baseState;var o=s=null,l=null,d=i;do{var h=d.lane;if((la&h)===h)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),a=d.hasEagerState?d.eagerState:e(a,d.action);else{var m={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(o=l=m,s=a):l=l.next=m,be.lanes|=h,ua|=h}d=d.next}while(d!==null&&d!==i);l===null?s=a:l.next=o,zt(a,t.memoizedState)||(it=!0),t.memoizedState=a,t.baseState=s,t.baseQueue=l,r.lastRenderedState=a}if(e=r.interleaved,e!==null){n=e;do i=n.lane,be.lanes|=i,ua|=i,n=n.next;while(n!==e)}else n===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function zo(e){var t=Et(),r=t.queue;if(r===null)throw Error(P(311));r.lastRenderedReducer=e;var a=r.dispatch,n=r.pending,i=t.memoizedState;if(n!==null){r.pending=null;var s=n=n.next;do i=e(i,s.action),s=s.next;while(s!==n);zt(i,t.memoizedState)||(it=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,a]}function Mh(){}function Ah(e,t){var r=be,a=Et(),n=t(),i=!zt(a.memoizedState,n);if(i&&(a.memoizedState=n,it=!0),a=a.queue,su(Lh.bind(null,r,a,e),[e]),a.getSnapshot!==t||i||De!==null&&De.memoizedState.tag&1){if(r.flags|=2048,Kn(9,Fh.bind(null,r,a,n,t),void 0,null),Be===null)throw Error(P(349));la&30||Ih(r,t,n)}return n}function Ih(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Fh(e,t,r,a){t.value=r,t.getSnapshot=a,Oh(t)&&Ph(e)}function Lh(e,t,r){return r(function(){Oh(t)&&Ph(e)})}function Oh(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!zt(e,r)}catch{return!0}}function Ph(e){var t=lr(e,1);t!==null&&Pt(t,e,1,-1)}function zc(e){var t=Bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:e},t.queue=e,e=e.dispatch=a4.bind(null,be,e),[t.memoizedState,e]}function Kn(e,t,r,a){return e={tag:e,create:t,destroy:r,deps:a,next:null},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,t.lastEffect=e)),e}function zh(){return Et().memoizedState}function Ki(e,t,r,a){var n=Bt();be.flags|=e,n.memoizedState=Kn(1|t,r,void 0,a===void 0?null:a)}function js(e,t,r,a){var n=Et();a=a===void 0?null:a;var i=void 0;if(Le!==null){var s=Le.memoizedState;if(i=s.destroy,a!==null&&au(a,s.deps)){n.memoizedState=Kn(t,r,i,a);return}}be.flags|=e,n.memoizedState=Kn(1|t,r,i,a)}function Dc(e,t){return Ki(8390656,8,e,t)}function su(e,t){return js(2048,8,e,t)}function Dh(e,t){return js(4,2,e,t)}function Bh(e,t){return js(4,4,e,t)}function $h(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jh(e,t,r){return r=r!=null?r.concat([e]):null,js(4,4,$h.bind(null,t,e),r)}function ou(){}function Uh(e,t){var r=Et();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&au(t,a[1])?a[0]:(r.memoizedState=[e,t],e)}function Gh(e,t){var r=Et();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&au(t,a[1])?a[0]:(e=e(),r.memoizedState=[e,t],e)}function Hh(e,t,r){return la&21?(zt(r,t)||(r=Km(),be.lanes|=r,ua|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=r)}function t4(e,t){var r=ue;ue=r!==0&&4>r?r:4,e(!0);var a=Oo.transition;Oo.transition={};try{e(!1),t()}finally{ue=r,Oo.transition=a}}function qh(){return Et().memoizedState}function r4(e,t,r){var a=Or(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},Wh(e))Vh(t,r);else if(r=Eh(e,t,r,a),r!==null){var n=Ze();Pt(r,e,a,n),Xh(r,t,a)}}function a4(e,t,r){var a=Or(e),n={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(Wh(e))Vh(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,o=i(s,r);if(n.hasEagerState=!0,n.eagerState=o,zt(o,s)){var l=t.interleaved;l===null?(n.next=n,J0(t)):(n.next=l.next,l.next=n),t.interleaved=n;return}}catch{}finally{}r=Eh(e,t,n,a),r!==null&&(n=Ze(),Pt(r,e,a,n),Xh(r,t,a))}}function Wh(e){var t=e.alternate;return e===be||t!==null&&t===be}function Vh(e,t){Nn=ws=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Xh(e,t,r){if(r&4194240){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,D0(e,r)}}var bs={readContext:Ct,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},n4={readContext:Ct,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:Dc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ki(4194308,4,$h.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ki(4,2,e,t)},useMemo:function(e,t){var r=Bt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var a=Bt();return t=r!==void 0?r(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=r4.bind(null,be,e),[a.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:zc,useDebugValue:ou,useDeferredValue:function(e){return Bt().memoizedState=e},useTransition:function(){var e=zc(!1),t=e[0];return e=t4.bind(null,e[1]),Bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var a=be,n=Bt();if(pe){if(r===void 0)throw Error(P(407));r=r()}else{if(r=t(),Be===null)throw Error(P(349));la&30||Ih(a,t,r)}n.memoizedState=r;var i={value:r,getSnapshot:t};return n.queue=i,Dc(Lh.bind(null,a,i,e),[e]),a.flags|=2048,Kn(9,Fh.bind(null,a,i,r,t),void 0,null),r},useId:function(){var e=Bt(),t=Be.identifierPrefix;if(pe){var r=ar,a=rr;r=(a&~(1<<32-Ot(a)-1)).toString(32)+r,t=":"+t+"R"+r,r=Vn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=e4++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},i4={readContext:Ct,useCallback:Uh,useContext:Ct,useEffect:su,useImperativeHandle:jh,useInsertionEffect:Dh,useLayoutEffect:Bh,useMemo:Gh,useReducer:Po,useRef:zh,useState:function(){return Po(Xn)},useDebugValue:ou,useDeferredValue:function(e){var t=Et();return Hh(t,Le.memoizedState,e)},useTransition:function(){var e=Po(Xn)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Mh,useSyncExternalStore:Ah,useId:qh,unstable_isNewReconciler:!1},s4={readContext:Ct,useCallback:Uh,useContext:Ct,useEffect:su,useImperativeHandle:jh,useInsertionEffect:Dh,useLayoutEffect:Bh,useMemo:Gh,useReducer:zo,useRef:zh,useState:function(){return zo(Xn)},useDebugValue:ou,useDeferredValue:function(e){var t=Et();return Le===null?t.memoizedState=e:Hh(t,Le.memoizedState,e)},useTransition:function(){var e=zo(Xn)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Mh,useSyncExternalStore:Ah,useId:qh,unstable_isNewReconciler:!1};function It(e,t){if(e&&e.defaultProps){t=Se({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function $l(e,t,r,a){t=e.memoizedState,r=r(a,t),r=r==null?t:Se({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Us={isMounted:function(e){return(e=e._reactInternals)?ma(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var a=Ze(),n=Or(e),i=nr(a,n);i.payload=t,r!=null&&(i.callback=r),t=Fr(e,i,n),t!==null&&(Pt(t,e,n,a),Vi(t,e,n))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var a=Ze(),n=Or(e),i=nr(a,n);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Fr(e,i,n),t!==null&&(Pt(t,e,n,a),Vi(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ze(),a=Or(e),n=nr(r,a);n.tag=2,t!=null&&(n.callback=t),t=Fr(e,n,a),t!==null&&(Pt(t,e,a,r),Vi(t,e,a))}};function Bc(e,t,r,a,n,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,s):t.prototype&&t.prototype.isPureReactComponent?!jn(r,a)||!jn(n,i):!0}function Kh(e,t,r){var a=!1,n=$r,i=t.contextType;return typeof i=="object"&&i!==null?i=Ct(i):(n=ot(t)?sa:Xe.current,a=t.contextTypes,i=(a=a!=null)?ja(e,n):$r),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Us,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),t}function $c(e,t,r,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,a),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function jl(e,t,r,a){var n=e.stateNode;n.props=r,n.state=e.memoizedState,n.refs={},Z0(e);var i=t.contextType;typeof i=="object"&&i!==null?n.context=Ct(i):(i=ot(t)?sa:Xe.current,n.context=ja(e,i)),n.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&($l(e,t,i,r),n.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(t=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),t!==n.state&&Us.enqueueReplaceState(n,n.state,null),ys(e,r,n,a),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function qa(e,t){try{var r="",a=t;do r+=L1(a),a=a.return;while(a);var n=r}catch(i){n=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:n,digest:null}}function Do(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ul(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var o4=typeof WeakMap=="function"?WeakMap:Map;function Yh(e,t,r){r=nr(-1,r),r.tag=3,r.payload={element:null};var a=t.value;return r.callback=function(){Ss||(Ss=!0,Jl=a),Ul(e,t)},r}function Qh(e,t,r){r=nr(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var n=t.value;r.payload=function(){return a(n)},r.callback=function(){Ul(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Ul(e,t),typeof a!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function jc(e,t,r){var a=e.pingCache;if(a===null){a=e.pingCache=new o4;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(r)||(n.add(r),e=x4.bind(null,e,t,r),t.then(e,e))}function Uc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gc(e,t,r,a,n){return e.mode&1?(e.flags|=65536,e.lanes=n,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=nr(-1,1),t.tag=2,Fr(r,t,1))),r.lanes|=1),e)}var l4=dr.ReactCurrentOwner,it=!1;function Ye(e,t,r,a){t.child=e===null?Ch(t,null,r,a):Ga(t,e.child,r,a)}function Hc(e,t,r,a,n){r=r.render;var i=t.ref;return Pa(t,n),a=nu(e,t,r,a,i,n),r=iu(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n,ur(e,t,n)):(pe&&r&&W0(t),t.flags|=1,Ye(e,t,a,n),t.child)}function qc(e,t,r,a,n){if(e===null){var i=r.type;return typeof i=="function"&&!fu(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Jh(e,t,i,a,n)):(e=Zi(r.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&n)){var s=i.memoizedProps;if(r=r.compare,r=r!==null?r:jn,r(s,a)&&e.ref===t.ref)return ur(e,t,n)}return t.flags|=1,e=Pr(i,a),e.ref=t.ref,e.return=t,t.child=e}function Jh(e,t,r,a,n){if(e!==null){var i=e.memoizedProps;if(jn(i,a)&&e.ref===t.ref)if(it=!1,t.pendingProps=a=i,(e.lanes&n)!==0)e.flags&131072&&(it=!0);else return t.lanes=e.lanes,ur(e,t,n)}return Gl(e,t,r,a,n)}function Zh(e,t,r){var a=t.pendingProps,n=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Ma,ct),ct|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(Ma,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:r,de(Ma,ct),ct|=a}else i!==null?(a=i.baseLanes|r,t.memoizedState=null):a=r,de(Ma,ct),ct|=a;return Ye(e,t,n,r),t.child}function ep(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Gl(e,t,r,a,n){var i=ot(r)?sa:Xe.current;return i=ja(t,i),Pa(t,n),r=nu(e,t,r,a,i,n),a=iu(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n,ur(e,t,n)):(pe&&a&&W0(t),t.flags|=1,Ye(e,t,r,n),t.child)}function Wc(e,t,r,a,n){if(ot(r)){var i=!0;ms(t)}else i=!1;if(Pa(t,n),t.stateNode===null)Yi(e,t),Kh(t,r,a),jl(t,r,a,n),a=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var l=s.context,d=r.contextType;typeof d=="object"&&d!==null?d=Ct(d):(d=ot(r)?sa:Xe.current,d=ja(t,d));var h=r.getDerivedStateFromProps,m=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==a||l!==d)&&$c(t,s,a,d),br=!1;var g=t.memoizedState;s.state=g,ys(t,a,s,n),l=t.memoizedState,o!==a||g!==l||st.current||br?(typeof h=="function"&&($l(t,r,h,a),l=t.memoizedState),(o=br||Bc(t,r,o,a,g,l,d))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=l),s.props=a,s.state=l,s.context=d,a=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,Nh(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:It(t.type,o),s.props=d,m=t.pendingProps,g=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=Ct(l):(l=ot(r)?sa:Xe.current,l=ja(t,l));var b=r.getDerivedStateFromProps;(h=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==m||g!==l)&&$c(t,s,a,l),br=!1,g=t.memoizedState,s.state=g,ys(t,a,s,n);var _=t.memoizedState;o!==m||g!==_||st.current||br?(typeof b=="function"&&($l(t,r,b,a),_=t.memoizedState),(d=br||Bc(t,r,d,a,g,_,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,_,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=_),s.props=a,s.state=_,s.context=l,a=d):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),a=!1)}return Hl(e,t,r,a,i,n)}function Hl(e,t,r,a,n,i){ep(e,t);var s=(t.flags&128)!==0;if(!a&&!s)return n&&Ac(t,r,!1),ur(e,t,i);a=t.stateNode,l4.current=t;var o=s&&typeof r.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&s?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,o,i)):Ye(e,t,o,i),t.memoizedState=a.state,n&&Ac(t,r,!0),t.child}function tp(e){var t=e.stateNode;t.pendingContext?Mc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mc(e,t.context,!1),eu(e,t.containerInfo)}function Vc(e,t,r,a,n){return Ua(),X0(n),t.flags|=256,Ye(e,t,r,a),t.child}var ql={dehydrated:null,treeContext:null,retryLane:0};function Wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function rp(e,t,r){var a=t.pendingProps,n=ve.current,i=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(n&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),de(ve,n&1),e===null)return Dl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=a.children,e=a.fallback,i?(a=t.mode,i=t.child,s={mode:"hidden",children:s},!(a&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=qs(s,a,0,null),e=ia(e,a,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Wl(r),t.memoizedState=ql,e):lu(t,s));if(n=e.memoizedState,n!==null&&(o=n.dehydrated,o!==null))return u4(e,t,s,a,o,n,r);if(i){i=a.fallback,s=t.mode,n=e.child,o=n.sibling;var l={mode:"hidden",children:a.children};return!(s&1)&&t.child!==n?(a=t.child,a.childLanes=0,a.pendingProps=l,t.deletions=null):(a=Pr(n,l),a.subtreeFlags=n.subtreeFlags&14680064),o!==null?i=Pr(o,i):(i=ia(i,s,r,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,s=e.child.memoizedState,s=s===null?Wl(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~r,t.memoizedState=ql,a}return i=e.child,e=i.sibling,a=Pr(i,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=r),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function lu(e,t){return t=qs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ni(e,t,r,a){return a!==null&&X0(a),Ga(t,e.child,null,r),e=lu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function u4(e,t,r,a,n,i,s){if(r)return t.flags&256?(t.flags&=-257,a=Do(Error(P(422))),Ni(e,t,s,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=a.fallback,n=t.mode,a=qs({mode:"visible",children:a.children},n,0,null),i=ia(i,n,s,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,t.mode&1&&Ga(t,e.child,null,s),t.child.memoizedState=Wl(s),t.memoizedState=ql,i);if(!(t.mode&1))return Ni(e,t,s,null);if(n.data==="$!"){if(a=n.nextSibling&&n.nextSibling.dataset,a)var o=a.dgst;return a=o,i=Error(P(419)),a=Do(i,a,void 0),Ni(e,t,s,a)}if(o=(s&e.childLanes)!==0,it||o){if(a=Be,a!==null){switch(s&-s){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(a.suspendedLanes|s)?0:n,n!==0&&n!==i.retryLane&&(i.retryLane=n,lr(e,n),Pt(a,e,n,-1))}return pu(),a=Do(Error(P(421))),Ni(e,t,s,a)}return n.data==="$?"?(t.flags|=128,t.child=e.child,t=S4.bind(null,e),n._reactRetry=t,null):(e=i.treeContext,mt=Ir(n.nextSibling),ht=t,pe=!0,Lt=null,e!==null&&(xt[St++]=rr,xt[St++]=ar,xt[St++]=oa,rr=e.id,ar=e.overflow,oa=t),t=lu(t,a.children),t.flags|=4096,t)}function Xc(e,t,r){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Bl(e.return,t,r)}function Bo(e,t,r,a,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=r,i.tailMode=n)}function ap(e,t,r){var a=t.pendingProps,n=a.revealOrder,i=a.tail;if(Ye(e,t,a.children,r),a=ve.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xc(e,r,t);else if(e.tag===19)Xc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(de(ve,a),!(t.mode&1))t.memoizedState=null;else switch(n){case"forwards":for(r=t.child,n=null;r!==null;)e=r.alternate,e!==null&&vs(e)===null&&(n=r),r=r.sibling;r=n,r===null?(n=t.child,t.child=null):(n=r.sibling,r.sibling=null),Bo(t,!1,n,r,i);break;case"backwards":for(r=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&vs(e)===null){t.child=n;break}e=n.sibling,n.sibling=r,r=n,n=e}Bo(t,!0,r,null,i);break;case"together":Bo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ur(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ua|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,r=Pr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Pr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function c4(e,t,r){switch(t.tag){case 3:tp(t),Ua();break;case 5:Rh(t);break;case 1:ot(t.type)&&ms(t);break;case 4:eu(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,n=t.memoizedProps.value;de(fs,a._currentValue),a._currentValue=n;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(de(ve,ve.current&1),t.flags|=128,null):r&t.child.childLanes?rp(e,t,r):(de(ve,ve.current&1),e=ur(e,t,r),e!==null?e.sibling:null);de(ve,ve.current&1);break;case 19:if(a=(r&t.childLanes)!==0,e.flags&128){if(a)return ap(e,t,r);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),de(ve,ve.current),a)break;return null;case 22:case 23:return t.lanes=0,Zh(e,t,r)}return ur(e,t,r)}var np,Vl,ip,sp;np=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Vl=function(){};ip=function(e,t,r,a){var n=e.memoizedProps;if(n!==a){e=t.stateNode,aa(Ht.current);var i=null;switch(r){case"input":n=fl(e,n),a=fl(e,a),i=[];break;case"select":n=Se({},n,{value:void 0}),a=Se({},a,{value:void 0}),i=[];break;case"textarea":n=vl(e,n),a=vl(e,a),i=[];break;default:typeof n.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=cs)}bl(r,a);var s;r=null;for(d in n)if(!a.hasOwnProperty(d)&&n.hasOwnProperty(d)&&n[d]!=null)if(d==="style"){var o=n[d];for(s in o)o.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ln.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in a){var l=a[d];if(o=n!=null?n[d]:void 0,a.hasOwnProperty(d)&&l!==o&&(l!=null||o!=null))if(d==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(i||(i=[]),i.push(d,r)),r=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(i=i||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ln.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&me("scroll",e),i||o===l||(i=[])):(i=i||[]).push(d,l))}r&&(i=i||[]).push("style",r);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};sp=function(e,t,r,a){r!==a&&(t.flags|=4)};function fn(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(t)for(var n=e.child;n!==null;)r|=n.lanes|n.childLanes,a|=n.subtreeFlags&14680064,a|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)r|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=r,t}function d4(e,t,r){var a=t.pendingProps;switch(V0(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return ot(t.type)&&ds(),qe(t),null;case 3:return a=t.stateNode,Ha(),he(st),he(Xe),ru(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ci(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Lt!==null&&(t0(Lt),Lt=null))),Vl(e,t),qe(t),null;case 5:tu(t);var n=aa(Wn.current);if(r=t.type,e!==null&&t.stateNode!=null)ip(e,t,r,a,n),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(P(166));return qe(t),null}if(e=aa(Ht.current),Ci(t)){a=t.stateNode,r=t.type;var i=t.memoizedProps;switch(a[jt]=t,a[Hn]=i,e=(t.mode&1)!==0,r){case"dialog":me("cancel",a),me("close",a);break;case"iframe":case"object":case"embed":me("load",a);break;case"video":case"audio":for(n=0;n<bn.length;n++)me(bn[n],a);break;case"source":me("error",a);break;case"img":case"image":case"link":me("error",a),me("load",a);break;case"details":me("toggle",a);break;case"input":ac(a,i),me("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},me("invalid",a);break;case"textarea":ic(a,i),me("invalid",a)}bl(r,i),n=null;for(var s in i)if(i.hasOwnProperty(s)){var o=i[s];s==="children"?typeof o=="string"?a.textContent!==o&&(i.suppressHydrationWarning!==!0&&_i(a.textContent,o,e),n=["children",o]):typeof o=="number"&&a.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&_i(a.textContent,o,e),n=["children",""+o]):Ln.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&me("scroll",a)}switch(r){case"input":yi(a),nc(a,i,!0);break;case"textarea":yi(a),sc(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=cs)}a=n,t.updateQueue=a,a!==null&&(t.flags|=4)}else{s=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Lm(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=s.createElement(r,{is:a.is}):(e=s.createElement(r),r==="select"&&(s=e,a.multiple?s.multiple=!0:a.size&&(s.size=a.size))):e=s.createElementNS(e,r),e[jt]=t,e[Hn]=a,np(e,t,!1,!1),t.stateNode=e;e:{switch(s=xl(r,a),r){case"dialog":me("cancel",e),me("close",e),n=a;break;case"iframe":case"object":case"embed":me("load",e),n=a;break;case"video":case"audio":for(n=0;n<bn.length;n++)me(bn[n],e);n=a;break;case"source":me("error",e),n=a;break;case"img":case"image":case"link":me("error",e),me("load",e),n=a;break;case"details":me("toggle",e),n=a;break;case"input":ac(e,a),n=fl(e,a),me("invalid",e);break;case"option":n=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},n=Se({},a,{value:void 0}),me("invalid",e);break;case"textarea":ic(e,a),n=vl(e,a),me("invalid",e);break;default:n=a}bl(r,n),o=n;for(i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="style"?zm(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Om(e,l)):i==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&On(e,l):typeof l=="number"&&On(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ln.hasOwnProperty(i)?l!=null&&i==="onScroll"&&me("scroll",e):l!=null&&I0(e,i,l,s))}switch(r){case"input":yi(e),nc(e,a,!1);break;case"textarea":yi(e),sc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Br(a.value));break;case"select":e.multiple=!!a.multiple,i=a.value,i!=null?Ia(e,!!a.multiple,i,!1):a.defaultValue!=null&&Ia(e,!!a.multiple,a.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=cs)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)sp(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(P(166));if(r=aa(Wn.current),aa(Ht.current),Ci(t)){if(a=t.stateNode,r=t.memoizedProps,a[jt]=t,(i=a.nodeValue!==r)&&(e=ht,e!==null))switch(e.tag){case 3:_i(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_i(a.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[jt]=t,t.stateNode=a}return qe(t),null;case 13:if(he(ve),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&mt!==null&&t.mode&1&&!(t.flags&128))Th(),Ua(),t.flags|=98560,i=!1;else if(i=Ci(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[jt]=t}else Ua(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;qe(t),i=!1}else Lt!==null&&(t0(Lt),Lt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||ve.current&1?Oe===0&&(Oe=3):pu())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return Ha(),Vl(e,t),e===null&&Un(t.stateNode.containerInfo),qe(t),null;case 10:return Q0(t.type._context),qe(t),null;case 17:return ot(t.type)&&ds(),qe(t),null;case 19:if(he(ve),i=t.memoizedState,i===null)return qe(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)fn(i,!1);else{if(Oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=vs(e),s!==null){for(t.flags|=128,fn(i,!1),a=s.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;r!==null;)i=r,e=a,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return de(ve,ve.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ce()>Wa&&(t.flags|=128,a=!0,fn(i,!1),t.lanes=4194304)}else{if(!a)if(e=vs(s),e!==null){if(t.flags|=128,a=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),fn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!pe)return qe(t),null}else 2*Ce()-i.renderingStartTime>Wa&&r!==1073741824&&(t.flags|=128,a=!0,fn(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(r=i.last,r!==null?r.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ce(),t.sibling=null,r=ve.current,de(ve,a?r&1|2:r&1),t):(qe(t),null);case 22:case 23:return hu(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?ct&1073741824&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function m4(e,t){switch(V0(t),t.tag){case 1:return ot(t.type)&&ds(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ha(),he(st),he(Xe),ru(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return tu(t),null;case 13:if(he(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(ve),null;case 4:return Ha(),null;case 10:return Q0(t.type._context),null;case 22:case 23:return hu(),null;case 24:return null;default:return null}}var Ri=!1,We=!1,h4=typeof WeakSet=="function"?WeakSet:Set,q=null;function Ra(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){Te(e,t,a)}else r.current=null}function Xl(e,t,r){try{r()}catch(a){Te(e,t,a)}}var Kc=!1;function p4(e,t){if(Al=os,e=dh(),q0(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var s=0,o=-1,l=-1,d=0,h=0,m=e,g=null;t:for(;;){for(var b;m!==r||n!==0&&m.nodeType!==3||(o=s+n),m!==i||a!==0&&m.nodeType!==3||(l=s+a),m.nodeType===3&&(s+=m.nodeValue.length),(b=m.firstChild)!==null;)g=m,m=b;for(;;){if(m===e)break t;if(g===r&&++d===n&&(o=s),g===i&&++h===a&&(l=s),(b=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=b}r=o===-1||l===-1?null:{start:o,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Il={focusedElem:e,selectionRange:r},os=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var T=_.memoizedProps,N=_.memoizedState,w=t.stateNode,v=w.getSnapshotBeforeUpdate(t.elementType===t.type?T:It(t.type,T),N);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(E){Te(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return _=Kc,Kc=!1,_}function Rn(e,t,r){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var n=a=a.next;do{if((n.tag&e)===e){var i=n.destroy;n.destroy=void 0,i!==void 0&&Xl(t,r,i)}n=n.next}while(n!==a)}}function Gs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==t)}}function Kl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function op(e){var t=e.alternate;t!==null&&(e.alternate=null,op(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jt],delete t[Hn],delete t[Ol],delete t[Yg],delete t[Qg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lp(e){return e.tag===5||e.tag===3||e.tag===4}function Yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yl(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=cs));else if(a!==4&&(e=e.child,e!==null))for(Yl(e,t,r),e=e.sibling;e!==null;)Yl(e,t,r),e=e.sibling}function Ql(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Ql(e,t,r),e=e.sibling;e!==null;)Ql(e,t,r),e=e.sibling}var $e=null,Ft=!1;function gr(e,t,r){for(r=r.child;r!==null;)up(e,t,r),r=r.sibling}function up(e,t,r){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Os,r)}catch{}switch(r.tag){case 5:We||Ra(r,t);case 6:var a=$e,n=Ft;$e=null,gr(e,t,r),$e=a,Ft=n,$e!==null&&(Ft?(e=$e,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):$e.removeChild(r.stateNode));break;case 18:$e!==null&&(Ft?(e=$e,r=r.stateNode,e.nodeType===8?Io(e.parentNode,r):e.nodeType===1&&Io(e,r),Bn(e)):Io($e,r.stateNode));break;case 4:a=$e,n=Ft,$e=r.stateNode.containerInfo,Ft=!0,gr(e,t,r),$e=a,Ft=n;break;case 0:case 11:case 14:case 15:if(!We&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){n=a=a.next;do{var i=n,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Xl(r,t,s),n=n.next}while(n!==a)}gr(e,t,r);break;case 1:if(!We&&(Ra(r,t),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(o){Te(r,t,o)}gr(e,t,r);break;case 21:gr(e,t,r);break;case 22:r.mode&1?(We=(a=We)||r.memoizedState!==null,gr(e,t,r),We=a):gr(e,t,r);break;default:gr(e,t,r)}}function Qc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new h4),t.forEach(function(a){var n=k4.bind(null,e,a);r.has(a)||(r.add(a),a.then(n,n))})}}function Mt(e,t){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var n=r[a];try{var i=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:$e=o.stateNode,Ft=!1;break e;case 3:$e=o.stateNode.containerInfo,Ft=!0;break e;case 4:$e=o.stateNode.containerInfo,Ft=!0;break e}o=o.return}if($e===null)throw Error(P(160));up(i,s,n),$e=null,Ft=!1;var l=n.alternate;l!==null&&(l.return=null),n.return=null}catch(d){Te(n,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)cp(t,e),t=t.sibling}function cp(e,t){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),Dt(e),a&4){try{Rn(3,e,e.return),Gs(3,e)}catch(T){Te(e,e.return,T)}try{Rn(5,e,e.return)}catch(T){Te(e,e.return,T)}}break;case 1:Mt(t,e),Dt(e),a&512&&r!==null&&Ra(r,r.return);break;case 5:if(Mt(t,e),Dt(e),a&512&&r!==null&&Ra(r,r.return),e.flags&32){var n=e.stateNode;try{On(n,"")}catch(T){Te(e,e.return,T)}}if(a&4&&(n=e.stateNode,n!=null)){var i=e.memoizedProps,s=r!==null?r.memoizedProps:i,o=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&Im(n,i),xl(o,s);var d=xl(o,i);for(s=0;s<l.length;s+=2){var h=l[s],m=l[s+1];h==="style"?zm(n,m):h==="dangerouslySetInnerHTML"?Om(n,m):h==="children"?On(n,m):I0(n,h,m,d)}switch(o){case"input":gl(n,i);break;case"textarea":Fm(n,i);break;case"select":var g=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?Ia(n,!!i.multiple,b,!1):g!==!!i.multiple&&(i.defaultValue!=null?Ia(n,!!i.multiple,i.defaultValue,!0):Ia(n,!!i.multiple,i.multiple?[]:"",!1))}n[Hn]=i}catch(T){Te(e,e.return,T)}}break;case 6:if(Mt(t,e),Dt(e),a&4){if(e.stateNode===null)throw Error(P(162));n=e.stateNode,i=e.memoizedProps;try{n.nodeValue=i}catch(T){Te(e,e.return,T)}}break;case 3:if(Mt(t,e),Dt(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Bn(t.containerInfo)}catch(T){Te(e,e.return,T)}break;case 4:Mt(t,e),Dt(e);break;case 13:Mt(t,e),Dt(e),n=e.child,n.flags&8192&&(i=n.memoizedState!==null,n.stateNode.isHidden=i,!i||n.alternate!==null&&n.alternate.memoizedState!==null||(du=Ce())),a&4&&Qc(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(We=(d=We)||h,Mt(t,e),We=d):Mt(t,e),Dt(e),a&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(q=e,h=e.child;h!==null;){for(m=q=h;q!==null;){switch(g=q,b=g.child,g.tag){case 0:case 11:case 14:case 15:Rn(4,g,g.return);break;case 1:Ra(g,g.return);var _=g.stateNode;if(typeof _.componentWillUnmount=="function"){a=g,r=g.return;try{t=a,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(T){Te(a,r,T)}}break;case 5:Ra(g,g.return);break;case 22:if(g.memoizedState!==null){Zc(m);continue}}b!==null?(b.return=g,q=b):Zc(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{n=m.stateNode,d?(i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=m.stateNode,l=m.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Pm("display",s))}catch(T){Te(e,e.return,T)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(T){Te(e,e.return,T)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Mt(t,e),Dt(e),a&4&&Qc(e);break;case 21:break;default:Mt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(lp(r)){var a=r;break e}r=r.return}throw Error(P(160))}switch(a.tag){case 5:var n=a.stateNode;a.flags&32&&(On(n,""),a.flags&=-33);var i=Yc(e);Ql(e,i,n);break;case 3:case 4:var s=a.stateNode.containerInfo,o=Yc(e);Yl(e,o,s);break;default:throw Error(P(161))}}catch(l){Te(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function f4(e,t,r){q=e,dp(e)}function dp(e,t,r){for(var a=(e.mode&1)!==0;q!==null;){var n=q,i=n.child;if(n.tag===22&&a){var s=n.memoizedState!==null||Ri;if(!s){var o=n.alternate,l=o!==null&&o.memoizedState!==null||We;o=Ri;var d=We;if(Ri=s,(We=l)&&!d)for(q=n;q!==null;)s=q,l=s.child,s.tag===22&&s.memoizedState!==null?ed(n):l!==null?(l.return=s,q=l):ed(n);for(;i!==null;)q=i,dp(i),i=i.sibling;q=n,Ri=o,We=d}Jc(e)}else n.subtreeFlags&8772&&i!==null?(i.return=n,q=i):Jc(e)}}function Jc(e){for(;q!==null;){var t=q;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:We||Gs(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!We)if(r===null)a.componentDidMount();else{var n=t.elementType===t.type?r.memoizedProps:It(t.type,r.memoizedProps);a.componentDidUpdate(n,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Pc(t,i,a);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Pc(t,s,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Bn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}We||t.flags&512&&Kl(t)}catch(g){Te(t,t.return,g)}}if(t===e){q=null;break}if(r=t.sibling,r!==null){r.return=t.return,q=r;break}q=t.return}}function Zc(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var r=t.sibling;if(r!==null){r.return=t.return,q=r;break}q=t.return}}function ed(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Gs(4,t)}catch(l){Te(t,r,l)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var n=t.return;try{a.componentDidMount()}catch(l){Te(t,n,l)}}var i=t.return;try{Kl(t)}catch(l){Te(t,i,l)}break;case 5:var s=t.return;try{Kl(t)}catch(l){Te(t,s,l)}}}catch(l){Te(t,t.return,l)}if(t===e){q=null;break}var o=t.sibling;if(o!==null){o.return=t.return,q=o;break}q=t.return}}var g4=Math.ceil,xs=dr.ReactCurrentDispatcher,uu=dr.ReactCurrentOwner,_t=dr.ReactCurrentBatchConfig,ie=0,Be=null,Ee=null,je=0,ct=0,Ma=Wr(0),Oe=0,Yn=null,ua=0,Hs=0,cu=0,Mn=null,nt=null,du=0,Wa=1/0,Jt=null,Ss=!1,Jl=null,Lr=null,Mi=!1,_r=null,ks=0,An=0,Zl=null,Qi=-1,Ji=0;function Ze(){return ie&6?Ce():Qi!==-1?Qi:Qi=Ce()}function Or(e){return e.mode&1?ie&2&&je!==0?je&-je:Zg.transition!==null?(Ji===0&&(Ji=Km()),Ji):(e=ue,e!==0||(e=window.event,e=e===void 0?16:rh(e.type)),e):1}function Pt(e,t,r,a){if(50<An)throw An=0,Zl=null,Error(P(185));ai(e,r,a),(!(ie&2)||e!==Be)&&(e===Be&&(!(ie&2)&&(Hs|=r),Oe===4&&kr(e,je)),lt(e,a),r===1&&ie===0&&!(t.mode&1)&&(Wa=Ce()+500,$s&&Vr()))}function lt(e,t){var r=e.callbackNode;Z1(e,t);var a=ss(e,e===Be?je:0);if(a===0)r!==null&&uc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(r!=null&&uc(r),t===1)e.tag===0?Jg(td.bind(null,e)):xh(td.bind(null,e)),Xg(function(){!(ie&6)&&Vr()}),r=null;else{switch(Ym(a)){case 1:r=z0;break;case 4:r=Vm;break;case 16:r=is;break;case 536870912:r=Xm;break;default:r=is}r=wp(r,mp.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function mp(e,t){if(Qi=-1,Ji=0,ie&6)throw Error(P(327));var r=e.callbackNode;if(za()&&e.callbackNode!==r)return null;var a=ss(e,e===Be?je:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=Ts(e,a);else{t=a;var n=ie;ie|=2;var i=pp();(Be!==e||je!==t)&&(Jt=null,Wa=Ce()+500,na(e,t));do try{w4();break}catch(o){hp(e,o)}while(!0);Y0(),xs.current=i,ie=n,Ee!==null?t=0:(Be=null,je=0,t=Oe)}if(t!==0){if(t===2&&(n=Cl(e),n!==0&&(a=n,t=e0(e,n))),t===1)throw r=Yn,na(e,0),kr(e,a),lt(e,Ce()),r;if(t===6)kr(e,a);else{if(n=e.current.alternate,!(a&30)&&!y4(n)&&(t=Ts(e,a),t===2&&(i=Cl(e),i!==0&&(a=i,t=e0(e,i))),t===1))throw r=Yn,na(e,0),kr(e,a),lt(e,Ce()),r;switch(e.finishedWork=n,e.finishedLanes=a,t){case 0:case 1:throw Error(P(345));case 2:Zr(e,nt,Jt);break;case 3:if(kr(e,a),(a&130023424)===a&&(t=du+500-Ce(),10<t)){if(ss(e,0)!==0)break;if(n=e.suspendedLanes,(n&a)!==a){Ze(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=Ll(Zr.bind(null,e,nt,Jt),t);break}Zr(e,nt,Jt);break;case 4:if(kr(e,a),(a&4194240)===a)break;for(t=e.eventTimes,n=-1;0<a;){var s=31-Ot(a);i=1<<s,s=t[s],s>n&&(n=s),a&=~i}if(a=n,a=Ce()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*g4(a/1960))-a,10<a){e.timeoutHandle=Ll(Zr.bind(null,e,nt,Jt),a);break}Zr(e,nt,Jt);break;case 5:Zr(e,nt,Jt);break;default:throw Error(P(329))}}}return lt(e,Ce()),e.callbackNode===r?mp.bind(null,e):null}function e0(e,t){var r=Mn;return e.current.memoizedState.isDehydrated&&(na(e,t).flags|=256),e=Ts(e,t),e!==2&&(t=nt,nt=r,t!==null&&t0(t)),e}function t0(e){nt===null?nt=e:nt.push.apply(nt,e)}function y4(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var n=r[a],i=n.getSnapshot;n=n.value;try{if(!zt(i(),n))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kr(e,t){for(t&=~cu,t&=~Hs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ot(t),a=1<<r;e[r]=-1,t&=~a}}function td(e){if(ie&6)throw Error(P(327));za();var t=ss(e,0);if(!(t&1))return lt(e,Ce()),null;var r=Ts(e,t);if(e.tag!==0&&r===2){var a=Cl(e);a!==0&&(t=a,r=e0(e,a))}if(r===1)throw r=Yn,na(e,0),kr(e,t),lt(e,Ce()),r;if(r===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zr(e,nt,Jt),lt(e,Ce()),null}function mu(e,t){var r=ie;ie|=1;try{return e(t)}finally{ie=r,ie===0&&(Wa=Ce()+500,$s&&Vr())}}function ca(e){_r!==null&&_r.tag===0&&!(ie&6)&&za();var t=ie;ie|=1;var r=_t.transition,a=ue;try{if(_t.transition=null,ue=1,e)return e()}finally{ue=a,_t.transition=r,ie=t,!(ie&6)&&Vr()}}function hu(){ct=Ma.current,he(Ma)}function na(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Vg(r)),Ee!==null)for(r=Ee.return;r!==null;){var a=r;switch(V0(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&ds();break;case 3:Ha(),he(st),he(Xe),ru();break;case 5:tu(a);break;case 4:Ha();break;case 13:he(ve);break;case 19:he(ve);break;case 10:Q0(a.type._context);break;case 22:case 23:hu()}r=r.return}if(Be=e,Ee=e=Pr(e.current,null),je=ct=t,Oe=0,Yn=null,cu=Hs=ua=0,nt=Mn=null,ra!==null){for(t=0;t<ra.length;t++)if(r=ra[t],a=r.interleaved,a!==null){r.interleaved=null;var n=a.next,i=r.pending;if(i!==null){var s=i.next;i.next=n,a.next=s}r.pending=a}ra=null}return e}function hp(e,t){do{var r=Ee;try{if(Y0(),Xi.current=bs,ws){for(var a=be.memoizedState;a!==null;){var n=a.queue;n!==null&&(n.pending=null),a=a.next}ws=!1}if(la=0,De=Le=be=null,Nn=!1,Vn=0,uu.current=null,r===null||r.return===null){Oe=1,Yn=t,Ee=null;break}e:{var i=e,s=r.return,o=r,l=t;if(t=je,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,h=o,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var b=Uc(s);if(b!==null){b.flags&=-257,Gc(b,s,o,i,t),b.mode&1&&jc(i,d,t),t=b,l=d;var _=t.updateQueue;if(_===null){var T=new Set;T.add(l),t.updateQueue=T}else _.add(l);break e}else{if(!(t&1)){jc(i,d,t),pu();break e}l=Error(P(426))}}else if(pe&&o.mode&1){var N=Uc(s);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Gc(N,s,o,i,t),X0(qa(l,o));break e}}i=l=qa(l,o),Oe!==4&&(Oe=2),Mn===null?Mn=[i]:Mn.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var w=Yh(i,l,t);Oc(i,w);break e;case 1:o=l;var v=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Lr===null||!Lr.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var E=Qh(i,o,t);Oc(i,E);break e}}i=i.return}while(i!==null)}gp(r)}catch(R){t=R,Ee===r&&r!==null&&(Ee=r=r.return);continue}break}while(!0)}function pp(){var e=xs.current;return xs.current=bs,e===null?bs:e}function pu(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Be===null||!(ua&268435455)&&!(Hs&268435455)||kr(Be,je)}function Ts(e,t){var r=ie;ie|=2;var a=pp();(Be!==e||je!==t)&&(Jt=null,na(e,t));do try{v4();break}catch(n){hp(e,n)}while(!0);if(Y0(),ie=r,xs.current=a,Ee!==null)throw Error(P(261));return Be=null,je=0,Oe}function v4(){for(;Ee!==null;)fp(Ee)}function w4(){for(;Ee!==null&&!H1();)fp(Ee)}function fp(e){var t=vp(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?gp(e):Ee=t,uu.current=null}function gp(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=m4(r,t),r!==null){r.flags&=32767,Ee=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Oe=6,Ee=null;return}}else if(r=d4(r,t,ct),r!==null){Ee=r;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);Oe===0&&(Oe=5)}function Zr(e,t,r){var a=ue,n=_t.transition;try{_t.transition=null,ue=1,b4(e,t,r,a)}finally{_t.transition=n,ue=a}return null}function b4(e,t,r,a){do za();while(_r!==null);if(ie&6)throw Error(P(327));r=e.finishedWork;var n=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(eg(e,i),e===Be&&(Ee=Be=null,je=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Mi||(Mi=!0,wp(is,function(){return za(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=_t.transition,_t.transition=null;var s=ue;ue=1;var o=ie;ie|=4,uu.current=null,p4(e,r),cp(r,e),$g(Il),os=!!Al,Il=Al=null,e.current=r,f4(r),q1(),ie=o,ue=s,_t.transition=i}else e.current=r;if(Mi&&(Mi=!1,_r=e,ks=n),i=e.pendingLanes,i===0&&(Lr=null),X1(r.stateNode),lt(e,Ce()),t!==null)for(a=e.onRecoverableError,r=0;r<t.length;r++)n=t[r],a(n.value,{componentStack:n.stack,digest:n.digest});if(Ss)throw Ss=!1,e=Jl,Jl=null,e;return ks&1&&e.tag!==0&&za(),i=e.pendingLanes,i&1?e===Zl?An++:(An=0,Zl=e):An=0,Vr(),null}function za(){if(_r!==null){var e=Ym(ks),t=_t.transition,r=ue;try{if(_t.transition=null,ue=16>e?16:e,_r===null)var a=!1;else{if(e=_r,_r=null,ks=0,ie&6)throw Error(P(331));var n=ie;for(ie|=4,q=e.current;q!==null;){var i=q,s=i.child;if(q.flags&16){var o=i.deletions;if(o!==null){for(var l=0;l<o.length;l++){var d=o[l];for(q=d;q!==null;){var h=q;switch(h.tag){case 0:case 11:case 15:Rn(8,h,i)}var m=h.child;if(m!==null)m.return=h,q=m;else for(;q!==null;){h=q;var g=h.sibling,b=h.return;if(op(h),h===d){q=null;break}if(g!==null){g.return=b,q=g;break}q=b}}}var _=i.alternate;if(_!==null){var T=_.child;if(T!==null){_.child=null;do{var N=T.sibling;T.sibling=null,T=N}while(T!==null)}}q=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,q=s;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Rn(9,i,i.return)}var w=i.sibling;if(w!==null){w.return=i.return,q=w;break e}q=i.return}}var v=e.current;for(q=v;q!==null;){s=q;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,q=x;else e:for(s=v;q!==null;){if(o=q,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Gs(9,o)}}catch(R){Te(o,o.return,R)}if(o===s){q=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,q=E;break e}q=o.return}}if(ie=n,Vr(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Os,e)}catch{}a=!0}return a}finally{ue=r,_t.transition=t}}return!1}function rd(e,t,r){t=qa(r,t),t=Yh(e,t,1),e=Fr(e,t,1),t=Ze(),e!==null&&(ai(e,1,t),lt(e,t))}function Te(e,t,r){if(e.tag===3)rd(e,e,r);else for(;t!==null;){if(t.tag===3){rd(t,e,r);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Lr===null||!Lr.has(a))){e=qa(r,e),e=Qh(t,e,1),t=Fr(t,e,1),e=Ze(),t!==null&&(ai(t,1,e),lt(t,e));break}}t=t.return}}function x4(e,t,r){var a=e.pingCache;a!==null&&a.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&r,Be===e&&(je&r)===r&&(Oe===4||Oe===3&&(je&130023424)===je&&500>Ce()-du?na(e,0):cu|=r),lt(e,t)}function yp(e,t){t===0&&(e.mode&1?(t=bi,bi<<=1,!(bi&130023424)&&(bi=4194304)):t=1);var r=Ze();e=lr(e,t),e!==null&&(ai(e,t,r),lt(e,r))}function S4(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),yp(e,r)}function k4(e,t){var r=0;switch(e.tag){case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(r=n.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(P(314))}a!==null&&a.delete(t),yp(e,r)}var vp;vp=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)it=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return it=!1,c4(e,t,r);it=!!(e.flags&131072)}else it=!1,pe&&t.flags&1048576&&Sh(t,ps,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Yi(e,t),e=t.pendingProps;var n=ja(t,Xe.current);Pa(t,r),n=nu(null,t,a,e,n,r);var i=iu();return t.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(a)?(i=!0,ms(t)):i=!1,t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Z0(t),n.updater=Us,t.stateNode=n,n._reactInternals=t,jl(t,a,e,r),t=Hl(null,t,a,!0,i,r)):(t.tag=0,pe&&i&&W0(t),Ye(null,t,n,r),t=t.child),t;case 16:a=t.elementType;e:{switch(Yi(e,t),e=t.pendingProps,n=a._init,a=n(a._payload),t.type=a,n=t.tag=_4(a),e=It(a,e),n){case 0:t=Gl(null,t,a,e,r);break e;case 1:t=Wc(null,t,a,e,r);break e;case 11:t=Hc(null,t,a,e,r);break e;case 14:t=qc(null,t,a,It(a.type,e),r);break e}throw Error(P(306,a,""))}return t;case 0:return a=t.type,n=t.pendingProps,n=t.elementType===a?n:It(a,n),Gl(e,t,a,n,r);case 1:return a=t.type,n=t.pendingProps,n=t.elementType===a?n:It(a,n),Wc(e,t,a,n,r);case 3:e:{if(tp(t),e===null)throw Error(P(387));a=t.pendingProps,i=t.memoizedState,n=i.element,Nh(e,t),ys(t,a,null,r);var s=t.memoizedState;if(a=s.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){n=qa(Error(P(423)),t),t=Vc(e,t,a,r,n);break e}else if(a!==n){n=qa(Error(P(424)),t),t=Vc(e,t,a,r,n);break e}else for(mt=Ir(t.stateNode.containerInfo.firstChild),ht=t,pe=!0,Lt=null,r=Ch(t,null,a,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ua(),a===n){t=ur(e,t,r);break e}Ye(e,t,a,r)}t=t.child}return t;case 5:return Rh(t),e===null&&Dl(t),a=t.type,n=t.pendingProps,i=e!==null?e.memoizedProps:null,s=n.children,Fl(a,n)?s=null:i!==null&&Fl(a,i)&&(t.flags|=32),ep(e,t),Ye(e,t,s,r),t.child;case 6:return e===null&&Dl(t),null;case 13:return rp(e,t,r);case 4:return eu(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ga(t,null,a,r):Ye(e,t,a,r),t.child;case 11:return a=t.type,n=t.pendingProps,n=t.elementType===a?n:It(a,n),Hc(e,t,a,n,r);case 7:return Ye(e,t,t.pendingProps,r),t.child;case 8:return Ye(e,t,t.pendingProps.children,r),t.child;case 12:return Ye(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(a=t.type._context,n=t.pendingProps,i=t.memoizedProps,s=n.value,de(fs,a._currentValue),a._currentValue=s,i!==null)if(zt(i.value,s)){if(i.children===n.children&&!st.current){t=ur(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){s=i.child;for(var l=o.firstContext;l!==null;){if(l.context===a){if(i.tag===1){l=nr(-1,r&-r),l.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?l.next=l:(l.next=h.next,h.next=l),d.pending=l}}i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),Bl(i.return,r,t),o.lanes|=r;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(P(341));s.lanes|=r,o=s.alternate,o!==null&&(o.lanes|=r),Bl(s,r,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Ye(e,t,n.children,r),t=t.child}return t;case 9:return n=t.type,a=t.pendingProps.children,Pa(t,r),n=Ct(n),a=a(n),t.flags|=1,Ye(e,t,a,r),t.child;case 14:return a=t.type,n=It(a,t.pendingProps),n=It(a.type,n),qc(e,t,a,n,r);case 15:return Jh(e,t,t.type,t.pendingProps,r);case 17:return a=t.type,n=t.pendingProps,n=t.elementType===a?n:It(a,n),Yi(e,t),t.tag=1,ot(a)?(e=!0,ms(t)):e=!1,Pa(t,r),Kh(t,a,n),jl(t,a,n,r),Hl(null,t,a,!0,e,r);case 19:return ap(e,t,r);case 22:return Zh(e,t,r)}throw Error(P(156,t.tag))};function wp(e,t){return Wm(e,t)}function T4(e,t,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,r,a){return new T4(e,t,r,a)}function fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _4(e){if(typeof e=="function")return fu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===L0)return 11;if(e===O0)return 14}return 2}function Pr(e,t){var r=e.alternate;return r===null?(r=kt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Zi(e,t,r,a,n,i){var s=2;if(a=e,typeof e=="function")fu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ba:return ia(r.children,n,i,t);case F0:s=8,n|=8;break;case dl:return e=kt(12,r,t,n|2),e.elementType=dl,e.lanes=i,e;case ml:return e=kt(13,r,t,n),e.elementType=ml,e.lanes=i,e;case hl:return e=kt(19,r,t,n),e.elementType=hl,e.lanes=i,e;case Rm:return qs(r,n,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Em:s=10;break e;case Nm:s=9;break e;case L0:s=11;break e;case O0:s=14;break e;case wr:s=16,a=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=kt(s,r,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function ia(e,t,r,a){return e=kt(7,e,a,t),e.lanes=r,e}function qs(e,t,r,a){return e=kt(22,e,a,t),e.elementType=Rm,e.lanes=r,e.stateNode={isHidden:!1},e}function $o(e,t,r){return e=kt(6,e,null,t),e.lanes=r,e}function jo(e,t,r){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function C4(e,t,r,a,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xo(0),this.expirationTimes=xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xo(0),this.identifierPrefix=a,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function gu(e,t,r,a,n,i,s,o,l){return e=new C4(e,t,r,o,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=kt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Z0(i),e}function E4(e,t,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wa,key:a==null?null:""+a,children:e,containerInfo:t,implementation:r}}function bp(e){if(!e)return $r;e=e._reactInternals;e:{if(ma(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var r=e.type;if(ot(r))return bh(e,r,t)}return t}function xp(e,t,r,a,n,i,s,o,l){return e=gu(r,a,!0,e,n,i,s,o,l),e.context=bp(null),r=e.current,a=Ze(),n=Or(r),i=nr(a,n),i.callback=t??null,Fr(r,i,n),e.current.lanes=n,ai(e,n,a),lt(e,a),e}function Ws(e,t,r,a){var n=t.current,i=Ze(),s=Or(n);return r=bp(r),t.context===null?t.context=r:t.pendingContext=r,t=nr(i,s),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=Fr(n,t,s),e!==null&&(Pt(e,n,s,i),Vi(e,n,s)),s}function _s(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ad(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function yu(e,t){ad(e,t),(e=e.alternate)&&ad(e,t)}function N4(){return null}var Sp=typeof reportError=="function"?reportError:function(e){console.error(e)};function vu(e){this._internalRoot=e}Vs.prototype.render=vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Ws(e,t,null,null)};Vs.prototype.unmount=vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ca(function(){Ws(null,e,null,null)}),t[or]=null}};function Vs(e){this._internalRoot=e}Vs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zm();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Sr.length&&t!==0&&t<Sr[r].priority;r++);Sr.splice(r,0,e),r===0&&th(e)}};function wu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nd(){}function R4(e,t,r,a,n){if(n){if(typeof a=="function"){var i=a;a=function(){var d=_s(s);i.call(d)}}var s=xp(t,a,e,0,null,!1,!1,"",nd);return e._reactRootContainer=s,e[or]=s.current,Un(e.nodeType===8?e.parentNode:e),ca(),s}for(;n=e.lastChild;)e.removeChild(n);if(typeof a=="function"){var o=a;a=function(){var d=_s(l);o.call(d)}}var l=gu(e,0,!1,null,null,!1,!1,"",nd);return e._reactRootContainer=l,e[or]=l.current,Un(e.nodeType===8?e.parentNode:e),ca(function(){Ws(t,l,r,a)}),l}function Ks(e,t,r,a,n){var i=r._reactRootContainer;if(i){var s=i;if(typeof n=="function"){var o=n;n=function(){var l=_s(s);o.call(l)}}Ws(t,s,e,n)}else s=R4(r,t,e,n,a);return _s(s)}Qm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=wn(t.pendingLanes);r!==0&&(D0(t,r|1),lt(t,Ce()),!(ie&6)&&(Wa=Ce()+500,Vr()))}break;case 13:ca(function(){var a=lr(e,1);if(a!==null){var n=Ze();Pt(a,e,1,n)}}),yu(e,1)}};B0=function(e){if(e.tag===13){var t=lr(e,134217728);if(t!==null){var r=Ze();Pt(t,e,134217728,r)}yu(e,134217728)}};Jm=function(e){if(e.tag===13){var t=Or(e),r=lr(e,t);if(r!==null){var a=Ze();Pt(r,e,t,a)}yu(e,t)}};Zm=function(){return ue};eh=function(e,t){var r=ue;try{return ue=e,t()}finally{ue=r}};kl=function(e,t,r){switch(t){case"input":if(gl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var a=r[t];if(a!==e&&a.form===e.form){var n=Bs(a);if(!n)throw Error(P(90));Am(a),gl(a,n)}}}break;case"textarea":Fm(e,r);break;case"select":t=r.value,t!=null&&Ia(e,!!r.multiple,t,!1)}};$m=mu;jm=ca;var M4={usingClientEntryPoint:!1,Events:[ii,Ta,Bs,Dm,Bm,mu]},gn={findFiberByHostInstance:ta,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A4={bundleType:gn.bundleType,version:gn.version,rendererPackageName:gn.rendererPackageName,rendererConfig:gn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hm(e),e===null?null:e.stateNode},findFiberByHostInstance:gn.findFiberByHostInstance||N4,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ai.isDisabled&&Ai.supportsFiber)try{Os=Ai.inject(A4),Gt=Ai}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M4;yt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wu(t))throw Error(P(200));return E4(e,t,null,r)};yt.createRoot=function(e,t){if(!wu(e))throw Error(P(299));var r=!1,a="",n=Sp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(n=t.onRecoverableError)),t=gu(e,1,!1,null,null,r,!1,a,n),e[or]=t.current,Un(e.nodeType===8?e.parentNode:e),new vu(t)};yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Hm(t),e=e===null?null:e.stateNode,e};yt.flushSync=function(e){return ca(e)};yt.hydrate=function(e,t,r){if(!Xs(t))throw Error(P(200));return Ks(null,e,t,!0,r)};yt.hydrateRoot=function(e,t,r){if(!wu(e))throw Error(P(405));var a=r!=null&&r.hydratedSources||null,n=!1,i="",s=Sp;if(r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=xp(t,null,e,1,r??null,n,!1,i,s),e[or]=t.current,Un(e),a)for(e=0;e<a.length;e++)r=a[e],n=r._getVersion,n=n(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,n]:t.mutableSourceEagerHydrationData.push(r,n);return new Vs(t)};yt.render=function(e,t,r){if(!Xs(t))throw Error(P(200));return Ks(null,e,t,!1,r)};yt.unmountComponentAtNode=function(e){if(!Xs(e))throw Error(P(40));return e._reactRootContainer?(ca(function(){Ks(null,null,e,!1,function(){e._reactRootContainer=null,e[or]=null})}),!0):!1};yt.unstable_batchedUpdates=mu;yt.unstable_renderSubtreeIntoContainer=function(e,t,r,a){if(!Xs(r))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Ks(e,t,r,!1,a)};yt.version="18.3.1-next-f1338f8080-20240426";function kp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kp)}catch(e){console.error(e)}}kp(),km.exports=yt;var I4=km.exports,id=I4;ul.createRoot=id.createRoot,ul.hydrateRoot=id.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qn(){return Qn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Qn.apply(null,arguments)}var Cr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Cr||(Cr={}));const sd="popstate";function F4(e){e===void 0&&(e={});function t(a,n){let{pathname:i,search:s,hash:o}=a.location;return r0("",{pathname:i,search:s,hash:o},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function r(a,n){return typeof n=="string"?n:Cs(n)}return O4(t,r,null,e)}function xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function L4(){return Math.random().toString(36).substr(2,8)}function od(e,t){return{usr:e.state,key:e.key,idx:t}}function r0(e,t,r,a){return r===void 0&&(r=null),Qn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?en(t):t,{state:r,key:t&&t.key||a||L4()})}function Cs(e){let{pathname:t="/",search:r="",hash:a=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function en(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function O4(e,t,r,a){a===void 0&&(a={});let{window:n=document.defaultView,v5Compat:i=!1}=a,s=n.history,o=Cr.Pop,l=null,d=h();d==null&&(d=0,s.replaceState(Qn({},s.state,{idx:d}),""));function h(){return(s.state||{idx:null}).idx}function m(){o=Cr.Pop;let N=h(),w=N==null?null:N-d;d=N,l&&l({action:o,location:T.location,delta:w})}function g(N,w){o=Cr.Push;let v=r0(T.location,N,w);d=h()+1;let x=od(v,d),E=T.createHref(v);try{s.pushState(x,"",E)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;n.location.assign(E)}i&&l&&l({action:o,location:T.location,delta:1})}function b(N,w){o=Cr.Replace;let v=r0(T.location,N,w);d=h();let x=od(v,d),E=T.createHref(v);s.replaceState(x,"",E),i&&l&&l({action:o,location:T.location,delta:0})}function _(N){let w=n.location.origin!=="null"?n.location.origin:n.location.href,v=typeof N=="string"?N:Cs(N);return v=v.replace(/ $/,"%20"),xe(w,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,w)}let T={get action(){return o},get location(){return e(n,s)},listen(N){if(l)throw new Error("A history only accepts one active listener");return n.addEventListener(sd,m),l=N,()=>{n.removeEventListener(sd,m),l=null}},createHref(N){return t(n,N)},createURL:_,encodeLocation(N){let w=_(N);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:g,replace:b,go(N){return s.go(N)}};return T}var ld;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ld||(ld={}));function P4(e,t,r){return r===void 0&&(r="/"),z4(e,t,r)}function z4(e,t,r,a){let n=typeof t=="string"?en(t):t,i=Va(n.pathname||"/",r);if(i==null)return null;let s=Tp(e);D4(s);let o=null,l=K4(i);for(let d=0;o==null&&d<s.length;++d)o=V4(s[d],l);return o}function Tp(e,t,r,a){t===void 0&&(t=[]),r===void 0&&(r=[]),a===void 0&&(a="");let n=(i,s,o)=>{let l={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};l.relativePath.startsWith("/")&&(xe(l.relativePath.startsWith(a),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(a.length));let d=zr([a,l.relativePath]),h=r.concat(l);i.children&&i.children.length>0&&(xe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Tp(i.children,t,h,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:q4(d,i.index),routesMeta:h})};return e.forEach((i,s)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))n(i,s);else for(let l of _p(i.path))n(i,s,l)}),t}function _p(e){let t=e.split("/");if(t.length===0)return[];let[r,...a]=t,n=r.endsWith("?"),i=r.replace(/\?$/,"");if(a.length===0)return n?[i,""]:[i];let s=_p(a.join("/")),o=[];return o.push(...s.map(l=>l===""?i:[i,l].join("/"))),n&&o.push(...s),o.map(l=>e.startsWith("/")&&l===""?"/":l)}function D4(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:W4(t.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}const B4=/^:[\w-]+$/,$4=3,j4=2,U4=1,G4=10,H4=-2,ud=e=>e==="*";function q4(e,t){let r=e.split("/"),a=r.length;return r.some(ud)&&(a+=H4),t&&(a+=j4),r.filter(n=>!ud(n)).reduce((n,i)=>n+(B4.test(i)?$4:i===""?U4:G4),a)}function W4(e,t){return e.length===t.length&&e.slice(0,-1).every((a,n)=>a===t[n])?e[e.length-1]-t[t.length-1]:0}function V4(e,t,r){let{routesMeta:a}=e,n={},i="/",s=[];for(let o=0;o<a.length;++o){let l=a[o],d=o===a.length-1,h=i==="/"?t:t.slice(i.length)||"/",m=a0({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},h),g=l.route;if(!m)return null;Object.assign(n,m.params),s.push({params:n,pathname:zr([i,m.pathname]),pathnameBase:e2(zr([i,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(i=zr([i,m.pathnameBase]))}return s}function a0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,a]=X4(e.path,e.caseSensitive,e.end),n=t.match(r);if(!n)return null;let i=n[0],s=i.replace(/(.)\/+$/,"$1"),o=n.slice(1);return{params:a.reduce((d,h,m)=>{let{paramName:g,isOptional:b}=h;if(g==="*"){let T=o[m]||"";s=i.slice(0,i.length-T.length).replace(/(.)\/+$/,"$1")}const _=o[m];return b&&!_?d[g]=void 0:d[g]=(_||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:s,pattern:e}}function X4(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),bu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,l)=>(a.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),a]}function K4(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return bu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Va(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,a=e.charAt(r);return a&&a!=="/"?null:e.slice(r)||"/"}const Y4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Q4=e=>Y4.test(e);function J4(e,t){t===void 0&&(t="/");let{pathname:r,search:a="",hash:n=""}=typeof e=="string"?en(e):e,i;if(r)if(Q4(r))i=r;else{if(r.includes("//")){let s=r;r=Cp(r),bu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+r))}r.startsWith("/")?i=cd(r.substring(1),"/"):i=cd(r,t)}else i=t;return{pathname:i,search:t2(a),hash:r2(n)}}function cd(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?r.length>1&&r.pop():n!=="."&&r.push(n)}),r.length>1?r.join("/"):"/"}function Uo(e,t,r,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Z4(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function xu(e,t){let r=Z4(e);return t?r.map((a,n)=>n===r.length-1?a.pathname:a.pathnameBase):r.map(a=>a.pathnameBase)}function Su(e,t,r,a){a===void 0&&(a=!1);let n;typeof e=="string"?n=en(e):(n=Qn({},e),xe(!n.pathname||!n.pathname.includes("?"),Uo("?","pathname","search",n)),xe(!n.pathname||!n.pathname.includes("#"),Uo("#","pathname","hash",n)),xe(!n.search||!n.search.includes("#"),Uo("#","search","hash",n)));let i=e===""||n.pathname==="",s=i?"/":n.pathname,o;if(s==null)o=r;else{let m=t.length-1;if(!a&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),m-=1;n.pathname=g.join("/")}o=m>=0?t[m]:"/"}let l=J4(n,o),d=s&&s!=="/"&&s.endsWith("/"),h=(i||s===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(d||h)&&(l.pathname+="/"),l}const Cp=e=>e.replace(/\/\/+/g,"/"),zr=e=>Cp(e.join("/")),e2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),t2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,r2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function a2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ep=["post","put","patch","delete"];new Set(Ep);const n2=["get",...Ep];new Set(n2);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jn(){return Jn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Jn.apply(null,arguments)}const Ys=M.createContext(null),Np=M.createContext(null),mr=M.createContext(null),Qs=M.createContext(null),qt=M.createContext({outlet:null,matches:[],isDataRoute:!1}),Rp=M.createContext(null);function i2(e,t){let{relative:r}=t===void 0?{}:t;tn()||xe(!1);let{basename:a,navigator:n}=M.useContext(mr),{hash:i,pathname:s,search:o}=Zs(e,{relative:r}),l=s;return a!=="/"&&(l=s==="/"?a:zr([a,s])),n.createHref({pathname:l,search:o,hash:i})}function tn(){return M.useContext(Qs)!=null}function ha(){return tn()||xe(!1),M.useContext(Qs).location}function Mp(e){M.useContext(mr).static||M.useLayoutEffect(e)}function pa(){let{isDataRoute:e}=M.useContext(qt);return e?b2():s2()}function s2(){tn()||xe(!1);let e=M.useContext(Ys),{basename:t,future:r,navigator:a}=M.useContext(mr),{matches:n}=M.useContext(qt),{pathname:i}=ha(),s=JSON.stringify(xu(n,r.v7_relativeSplatPath)),o=M.useRef(!1);return Mp(()=>{o.current=!0}),M.useCallback(function(d,h){if(h===void 0&&(h={}),!o.current)return;if(typeof d=="number"){a.go(d);return}let m=Su(d,JSON.parse(s),i,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:zr([t,m.pathname])),(h.replace?a.replace:a.push)(m,h.state,h)},[t,a,s,i,e])}const o2=M.createContext(null);function l2(e){let t=M.useContext(qt).outlet;return t&&M.createElement(o2.Provider,{value:e},t)}function Js(){let{matches:e}=M.useContext(qt),t=e[e.length-1];return t?t.params:{}}function Zs(e,t){let{relative:r}=t===void 0?{}:t,{future:a}=M.useContext(mr),{matches:n}=M.useContext(qt),{pathname:i}=ha(),s=JSON.stringify(xu(n,a.v7_relativeSplatPath));return M.useMemo(()=>Su(e,JSON.parse(s),i,r==="path"),[e,s,i,r])}function u2(e,t){return c2(e,t)}function c2(e,t,r,a){tn()||xe(!1);let{navigator:n}=M.useContext(mr),{matches:i}=M.useContext(qt),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let d=ha(),h;if(t){var m;let N=typeof t=="string"?en(t):t;l==="/"||(m=N.pathname)!=null&&m.startsWith(l)||xe(!1),h=N}else h=d;let g=h.pathname||"/",b=g;if(l!=="/"){let N=l.replace(/^\//,"").split("/");b="/"+g.replace(/^\//,"").split("/").slice(N.length).join("/")}let _=P4(e,{pathname:b}),T=f2(_&&_.map(N=>Object.assign({},N,{params:Object.assign({},o,N.params),pathname:zr([l,n.encodeLocation?n.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?l:zr([l,n.encodeLocation?n.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),i,r,a);return t&&T?M.createElement(Qs.Provider,{value:{location:Jn({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Cr.Pop}},T):T}function d2(){let e=w2(),t=a2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},t),r?M.createElement("pre",{style:n},r):null,null)}const m2=M.createElement(d2,null);class h2 extends M.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?M.createElement(qt.Provider,{value:this.props.routeContext},M.createElement(Rp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function p2(e){let{routeContext:t,match:r,children:a}=e,n=M.useContext(Ys);return n&&n.static&&n.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=r.route.id),M.createElement(qt.Provider,{value:t},a)}function f2(e,t,r,a){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),a===void 0&&(a=null),e==null){var i;if(!r)return null;if(r.errors)e=r.matches;else if((i=a)!=null&&i.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,o=(n=r)==null?void 0:n.errors;if(o!=null){let h=s.findIndex(m=>m.route.id&&(o==null?void 0:o[m.route.id])!==void 0);h>=0||xe(!1),s=s.slice(0,Math.min(s.length,h+1))}let l=!1,d=-1;if(r&&a&&a.v7_partialHydration)for(let h=0;h<s.length;h++){let m=s[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=h),m.route.id){let{loaderData:g,errors:b}=r,_=m.route.loader&&g[m.route.id]===void 0&&(!b||b[m.route.id]===void 0);if(m.route.lazy||_){l=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((h,m,g)=>{let b,_=!1,T=null,N=null;r&&(b=o&&m.route.id?o[m.route.id]:void 0,T=m.route.errorElement||m2,l&&(d<0&&g===0?(x2("route-fallback"),_=!0,N=null):d===g&&(_=!0,N=m.route.hydrateFallbackElement||null)));let w=t.concat(s.slice(0,g+1)),v=()=>{let x;return b?x=T:_?x=N:m.route.Component?x=M.createElement(m.route.Component,null):m.route.element?x=m.route.element:x=h,M.createElement(p2,{match:m,routeContext:{outlet:h,matches:w,isDataRoute:r!=null},children:x})};return r&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?M.createElement(h2,{location:r.location,revalidation:r.revalidation,component:T,error:b,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):v()},null)}var Ap=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ap||{}),Ip=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ip||{});function g2(e){let t=M.useContext(Ys);return t||xe(!1),t}function y2(e){let t=M.useContext(Np);return t||xe(!1),t}function v2(e){let t=M.useContext(qt);return t||xe(!1),t}function Fp(e){let t=v2(),r=t.matches[t.matches.length-1];return r.route.id||xe(!1),r.route.id}function w2(){var e;let t=M.useContext(Rp),r=y2(),a=Fp();return t!==void 0?t:(e=r.errors)==null?void 0:e[a]}function b2(){let{router:e}=g2(Ap.UseNavigateStable),t=Fp(Ip.UseNavigateStable),r=M.useRef(!1);return Mp(()=>{r.current=!0}),M.useCallback(function(n,i){i===void 0&&(i={}),r.current&&(typeof n=="number"?e.navigate(n):e.navigate(n,Jn({fromRouteId:t},i)))},[e,t])}const dd={};function x2(e,t,r){dd[e]||(dd[e]=!0)}function S2(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function k2(e){let{to:t,replace:r,state:a,relative:n}=e;tn()||xe(!1);let{future:i,static:s}=M.useContext(mr),{matches:o}=M.useContext(qt),{pathname:l}=ha(),d=pa(),h=Su(t,xu(o,i.v7_relativeSplatPath),l,n==="path"),m=JSON.stringify(h);return M.useEffect(()=>d(JSON.parse(m),{replace:r,state:a,relative:n}),[d,m,n,r,a]),null}function T2(e){return l2(e.context)}function At(e){xe(!1)}function _2(e){let{basename:t="/",children:r=null,location:a,navigationType:n=Cr.Pop,navigator:i,static:s=!1,future:o}=e;tn()&&xe(!1);let l=t.replace(/^\/*/,"/"),d=M.useMemo(()=>({basename:l,navigator:i,static:s,future:Jn({v7_relativeSplatPath:!1},o)}),[l,o,i,s]);typeof a=="string"&&(a=en(a));let{pathname:h="/",search:m="",hash:g="",state:b=null,key:_="default"}=a,T=M.useMemo(()=>{let N=Va(h,l);return N==null?null:{location:{pathname:N,search:m,hash:g,state:b,key:_},navigationType:n}},[l,h,m,g,b,_,n]);return T==null?null:M.createElement(mr.Provider,{value:d},M.createElement(Qs.Provider,{children:r,value:T}))}function C2(e){let{children:t,location:r}=e;return u2(n0(t),r)}new Promise(()=>{});function n0(e,t){t===void 0&&(t=[]);let r=[];return M.Children.forEach(e,(a,n)=>{if(!M.isValidElement(a))return;let i=[...t,n];if(a.type===M.Fragment){r.push.apply(r,n0(a.props.children,i));return}a.type!==At&&xe(!1),!a.props.index||!a.props.children||xe(!1);let s={id:a.props.id||i.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(s.children=n0(a.props.children,i)),r.push(s)}),r}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Es(){return Es=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Es.apply(null,arguments)}function Lp(e,t){if(e==null)return{};var r={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(t.indexOf(a)!==-1)continue;r[a]=e[a]}return r}function E2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function N2(e,t){return e.button===0&&(!t||t==="_self")&&!E2(e)}const R2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],M2=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],A2="6";try{window.__reactRouterVersion=A2}catch{}const I2=M.createContext({isTransitioning:!1}),F2="startTransition",md=x1[F2];function L2(e){let{basename:t,children:r,future:a,window:n}=e,i=M.useRef();i.current==null&&(i.current=F4({window:n,v5Compat:!0}));let s=i.current,[o,l]=M.useState({action:s.action,location:s.location}),{v7_startTransition:d}=a||{},h=M.useCallback(m=>{d&&md?md(()=>l(m)):l(m)},[l,d]);return M.useLayoutEffect(()=>s.listen(h),[s,h]),M.useEffect(()=>S2(a),[a]),M.createElement(_2,{basename:t,children:r,location:o.location,navigationType:o.action,navigator:s,future:a})}const O2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",P2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,z2=M.forwardRef(function(t,r){let{onClick:a,relative:n,reloadDocument:i,replace:s,state:o,target:l,to:d,preventScrollReset:h,viewTransition:m}=t,g=Lp(t,R2),{basename:b}=M.useContext(mr),_,T=!1;if(typeof d=="string"&&P2.test(d)&&(_=d,O2))try{let x=new URL(window.location.href),E=d.startsWith("//")?new URL(x.protocol+d):new URL(d),R=Va(E.pathname,b);E.origin===x.origin&&R!=null?d=R+E.search+E.hash:T=!0}catch{}let N=i2(d,{relative:n}),w=$2(d,{replace:s,state:o,target:l,preventScrollReset:h,relative:n,viewTransition:m});function v(x){a&&a(x),x.defaultPrevented||w(x)}return M.createElement("a",Es({},g,{href:_||N,onClick:T||i?a:v,ref:r,target:l}))}),D2=M.forwardRef(function(t,r){let{"aria-current":a="page",caseSensitive:n=!1,className:i="",end:s=!1,style:o,to:l,viewTransition:d,children:h}=t,m=Lp(t,M2),g=Zs(l,{relative:m.relative}),b=ha(),_=M.useContext(Np),{navigator:T,basename:N}=M.useContext(mr),w=_!=null&&j2(g)&&d===!0,v=T.encodeLocation?T.encodeLocation(g).pathname:g.pathname,x=b.pathname,E=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;n||(x=x.toLowerCase(),E=E?E.toLowerCase():null,v=v.toLowerCase()),E&&N&&(E=Va(E,N)||E);const R=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let A=x===v||!s&&x.startsWith(v)&&x.charAt(R)==="/",I=E!=null&&(E===v||!s&&E.startsWith(v)&&E.charAt(v.length)==="/"),F={isActive:A,isPending:I,isTransitioning:w},U=A?a:void 0,B;typeof i=="function"?B=i(F):B=[i,A?"active":null,I?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let te=typeof o=="function"?o(F):o;return M.createElement(z2,Es({},m,{"aria-current":U,className:B,ref:r,style:te,to:l,viewTransition:d}),typeof h=="function"?h(F):h)});var i0;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(i0||(i0={}));var hd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(hd||(hd={}));function B2(e){let t=M.useContext(Ys);return t||xe(!1),t}function $2(e,t){let{target:r,replace:a,state:n,preventScrollReset:i,relative:s,viewTransition:o}=t===void 0?{}:t,l=pa(),d=ha(),h=Zs(e,{relative:s});return M.useCallback(m=>{if(N2(m,r)){m.preventDefault();let g=a!==void 0?a:Cs(d)===Cs(h);l(e,{replace:g,state:n,preventScrollReset:i,relative:s,viewTransition:o})}},[d,l,h,a,n,r,e,i,s,o])}function j2(e,t){t===void 0&&(t={});let r=M.useContext(I2);r==null&&xe(!1);let{basename:a}=B2(i0.useViewTransitionState),n=Zs(e,{relative:t.relative});if(!r.isTransitioning)return!1;let i=Va(r.currentLocation.pathname,a)||r.currentLocation.pathname,s=Va(r.nextLocation.pathname,a)||r.nextLocation.pathname;return a0(n.pathname,s)!=null||a0(n.pathname,i)!=null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var U2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),_e=(e,t)=>{const r=M.forwardRef(({color:a="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:o="",children:l,...d},h)=>M.createElement("svg",{ref:h,...U2,width:n,height:n,stroke:a,strokeWidth:s?Number(i)*24/Number(n):i,className:["lucide",`lucide-${G2(e)}`,o].join(" "),...d},[...t.map(([m,g])=>M.createElement(m,g)),...Array.isArray(l)?l:[l]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=_e("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=_e("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=_e("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=_e("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=_e("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=_e("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=_e("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=_e("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=_e("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=_e("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=_e("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=_e("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=_e("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=_e("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=_e("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=_e("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=_e("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=_e("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=_e("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=_e("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=_e("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=_e("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),$p=M.createContext(),jp="datacrack-progress";function ry(){try{const e=localStorage.getItem(jp);if(e){const t=JSON.parse(e);return{pythonSolved:new Set(t.pythonSolved||[]),sqlSolved:new Set(t.sqlSolved||[]),mlCompleted:new Set(t.mlCompleted||[]),conceptCompleted:new Set(t.conceptCompleted||[])}}}catch(e){console.error("Failed to load progress:",e)}return{pythonSolved:new Set,sqlSolved:new Set,mlCompleted:new Set,conceptCompleted:new Set}}function ay(e){localStorage.setItem(jp,JSON.stringify({pythonSolved:Array.from(e.pythonSolved),sqlSolved:Array.from(e.sqlSolved),mlCompleted:Array.from(e.mlCompleted),conceptCompleted:Array.from(e.conceptCompleted)}))}function ny({children:e}){const[t,r]=M.useState(ry);M.useEffect(()=>{ay(t)},[t]);const a=g=>{r(b=>{const _={...b,pythonSolved:new Set(b.pythonSolved)};return _.pythonSolved.add(g),_})},n=g=>{r(b=>{const _={...b,pythonSolved:new Set(b.pythonSolved)};return _.pythonSolved.delete(g),_})},i=g=>{r(b=>{const _={...b,sqlSolved:new Set(b.sqlSolved)};return _.sqlSolved.add(g),_})},s=g=>{r(b=>{const _={...b,sqlSolved:new Set(b.sqlSolved)};return _.sqlSolved.delete(g),_})},o=g=>{r(b=>{const _={...b,mlCompleted:new Set(b.mlCompleted)};return _.mlCompleted.add(g),_})},l=g=>{r(b=>{const _={...b,mlCompleted:new Set(b.mlCompleted)};return _.mlCompleted.delete(g),_})},d=g=>{r(b=>{const _={...b,conceptCompleted:new Set(b.conceptCompleted)};return _.conceptCompleted.add(g),_})},h=g=>{r(b=>{const _={...b,conceptCompleted:new Set(b.conceptCompleted)};return _.conceptCompleted.delete(g),_})},m=()=>{r({pythonSolved:new Set,sqlSolved:new Set,mlCompleted:new Set,conceptCompleted:new Set})};return y.jsx($p.Provider,{value:{...t,totalPython:50,totalSQL:30,totalML:12,totalConcepts:0,markPythonSolved:a,markPythonUnsolved:n,markSQLSolved:i,markSQLUnsolved:s,markMLCompleted:o,markMLUncompleted:l,markConceptCompleted:d,markConceptUncompleted:h,resetProgress:m},children:e})}function an(){const e=M.useContext($p);if(!e)throw new Error("useProgress must be used within a ProgressProvider");return e}const iy={slug:"classification-metrics",title:"Classification Metrics",order:1,content:`
## The Confusion Matrix

The confusion matrix is the 2x2 foundation table that compares predicted labels against actual labels. Every single classification metric is derived from these four numbers.

|   | **Predicted Positive** | **Predicted Negative** |
|---|---|---|
| **Actual Positive** | TP (True Positive) | FN (False Negative) |
| **Actual Negative** | FP (False Positive) | TN (True Negative) |

### Understanding Each Cell

**True Positive (TP):** The model predicted positive, and it was actually positive. These are correct catches. Example: The spam filter correctly marks a spam email as spam.

**True Negative (TN):** The model predicted negative, and it was actually negative. Also correct. Example: The spam filter correctly lets an important email through.

**False Positive (FP) = Type I Error = "False Alarm":** The model predicted positive, but it was actually negative. Example: The spam filter marks an important work email as spam. This is costly because the user might miss critical information.

**False Negative (FN) = Type II Error = "Miss":** The model predicted negative, but it was actually positive. Example: The spam filter lets a phishing email through to the inbox. This is dangerous because the user is now exposed to the threat.

> **Key Distinction:** Type I Error (FP) = "crying wolf" — seeing something that is not there. Type II Error (FN) = "missing the boat" — failing to detect something that is there.

### Cancer Detection Example

Consider a cancer detection model with 100 patients. The model is tested against known diagnoses:

|   | **Predicted Cancer** | **Predicted Healthy** |
|---|---|---|
| **Actually has Cancer** | TP = 45 | FN = 5 |
| **Actually Healthy** | FP = 10 | TN = 40 |

Reading this table: Out of 50 actual cancer patients, the model correctly identified 45 (TP) but missed 5 (FN). Out of 50 healthy patients, the model correctly cleared 40 (TN) but incorrectly flagged 10 as cancer (FP). The 5 missed cancers are the most dangerous outcome.

---

## Accuracy

Accuracy measures the fraction of all predictions that were correct.

$$Accuracy = \\frac{TP + TN}{TP + TN + FP + FN}$$

**Example:** Accuracy = (45 + 40) / (100) = 85%. This means 85 out of 100 predictions were correct.

### Why Accuracy Is Misleading

Consider a dataset with 95 healthy patients and 5 cancer patients. A model that predicts EVERYONE is healthy achieves 95% accuracy, but catches ZERO cancers.

$$Accuracy = \\frac{0 + 95}{0 + 95 + 0 + 5} = 95\\%$$

The model looks great on paper but is completely useless for its intended purpose. This is why accuracy alone is dangerous, especially with imbalanced datasets.

> **💡 Interview Tip:** Always ask "What is the class distribution?" before reporting accuracy. If 99% of samples are negative, a model that predicts "all negative" gets 99% accuracy but has zero predictive power for the positive class.

---

## Precision

Precision answers: "Of all the times the model said YES, how often was it actually right?"

$$Precision = \\frac{TP}{TP + FP}$$

**Example:** Precision = 45 / (45 + 10) = 81.8%. Out of 55 times the model flagged cancer, 45 were correct.

### When to Optimize for Precision

- **Spam filtering:** Marking an important email as spam (FP) means the user misses critical information. High precision ensures few legitimate emails get caught.
- **Content recommendation:** Recommending irrelevant content (FP) frustrates users and reduces engagement. High precision means recommendations are relevant.
- **Legal document review:** False matches in e-discovery (FP) waste expensive lawyer time reviewing irrelevant documents.

### The Precision Trade-off

Increasing precision means the model is more "cautious" about predicting positive. It raises the classification threshold, which means fewer false alarms but also more missed true positives (lower recall). It is a fundamental trade-off: you cannot maximize both precision and recall simultaneously.

---

## Recall (Sensitivity / True Positive Rate)

Recall answers: "Of all the actual positive cases, how many did the model find?"

$$Recall = \\frac{TP}{TP + FN}$$

**Example:** Recall = 45 / (45 + 5) = 90%. The model found 90% of all actual cancer cases.

### When to Optimize for Recall

- **Cancer detection:** Missing a cancer case (FN) can be fatal. It is better to flag a healthy person for further testing (FP) than to miss a real cancer (FN).
- **Fraud detection:** Every missed fraud (FN) costs money directly. Banks prefer to investigate some false alarms rather than let fraud slip through.
- **Airport security:** Missing a genuine threat (FN) has catastrophic consequences. Security systems are designed for maximum recall even at the cost of many false alarms.
- **Disease screening during pandemics:** Missing an infected person (FN) leads to further spreading. Mass screening prioritizes recall.

### The Recall Trade-off

Increasing recall means the model is more "aggressive" about predicting positive. It lowers the classification threshold, catching more true positives but also generating more false alarms (lower precision).

---

## F1 Score

The F1 score is the harmonic mean of precision and recall, providing a single metric that balances both concerns.

$$F1 = 2 \\times \\frac{Precision \\times Recall}{Precision + Recall}$$

### Why Harmonic Mean Instead of Arithmetic Mean?

The harmonic mean punishes extreme values much more than the arithmetic mean. Consider these scenarios:

| Precision | Recall | Arithmetic Mean | F1 Score |
|---|---|---|---|
| 100% | 50% | 75% | 66.7% |
| 90% | 90% | 90% | 90% |
| 100% | 1% | 50.5% | 2% |

Notice that when precision is 100% but recall is only 1%, the arithmetic mean says 50.5% (seems okay), but F1 says 2% (accurately reflecting that the model is nearly useless). F1 requires BOTH precision AND recall to be good, making it a much stricter and more honest metric.

### F-beta Score

The F-beta score generalizes F1 by allowing you to weight precision or recall more heavily:

$$F_{\\beta} = (1 + \\beta^2) \\times \\frac{Precision \\times Recall}{\\beta^2 \\times Precision + Recall}$$

- **beta = 1:** Standard F1 (equal weight to precision and recall)
- **beta = 2:** F2 score (recall is weighted twice as much as precision — use when missing positives is worse than false alarms)
- **beta = 0.5:** F0.5 score (precision is weighted twice as much as recall — use when false alarms are worse than misses)

---

## Specificity and True Negative Rate

Specificity measures: "Of all actual negative cases, how many did the model correctly identify?"

$$Specificity = \\frac{TN}{TN + FP}$$

It is the complement of the False Positive Rate:

$$FPR = 1 - Specificity = \\frac{FP}{TN + FP}$$

### When Specificity Matters

- **Disease diagnosis:** Telling a healthy person they are sick (FP) causes unnecessary anxiety, expensive follow-up tests, and potential harmful treatments. High specificity avoids this.
- **Product quality control on a production line:** Flagging a good product as defective (FP) means unnecessary rework, wasted materials, and reduced throughput.
- **Spam filtering (from the receiving side):** Losing real emails to spam (FP from the filter's perspective) means missing important communications.

---

## ROC Curve

The Receiver Operating Characteristic (ROC) curve visualizes model performance across ALL possible classification thresholds, not just a single one.

### How It Works Step by Step

1. A trained classifier outputs a probability score for each sample (e.g., 0.73 chance of cancer)
2. We apply a threshold (e.g., 0.5) to convert probabilities to binary labels
3. At each threshold, we compute the True Positive Rate (TPR) and False Positive Rate (FPR)
4. We plot TPR on the Y-axis versus FPR on the X-axis for every possible threshold
5. The resulting curve shows the full trade-off profile of the model

**X-axis:** False Positive Rate = FP / (FP + TN) = 1 - Specificity

**Y-axis:** True Positive Rate = TP / (TP + FN) = Recall

### Interpreting the Curve Shape

- **Perfect classifier:** The curve goes straight up to (0, 1) then straight across to (1, 1). Area Under Curve (AUC) = 1.0. The model perfectly separates classes.
- **Random classifier:** The curve is a diagonal line from (0, 0) to (1, 1). AUC = 0.5. The model is no better than flipping a coin.
- **Good classifier:** The curve bows toward the top-left corner. The further from the diagonal, the better.
- **Worse than random:** The curve dips below the diagonal. AUC < 0.5. The model's predictions are actually inverted (swap its predictions and it becomes good).

### Area Under the Curve (AUC)

AUC provides a single number summary of the ROC curve. It represents the probability that the model ranks a randomly chosen positive example higher than a randomly chosen negative example.

| AUC Range | Model Quality | Interpretation |
|---|---|---|
| 0.9 - 1.0 | Excellent | The model almost perfectly separates the classes |
| 0.8 - 0.9 | Good | The model has strong discriminative ability |
| 0.7 - 0.8 | Acceptable | The model is useful but could be improved |
| 0.6 - 0.7 | Poor | The model has weak discriminative ability |
| 0.5 - 0.6 | Random | The model has no useful discriminative ability |

> **⚠️ Pitfall:** AUC can be misleading with very imbalanced datasets. A model can achieve high AUC while still producing mostly false positives at any practically useful threshold. Always look at the full ROC curve, not just the AUC number.

---

## Precision-Recall (PR) Curve

For imbalanced datasets where the positive class is rare, the PR curve is often more informative than the ROC curve. It plots Precision (Y-axis) versus Recall (X-axis).

| Use ROC-AUC When | Use PR-AUC When |
|---|---|
| Classes are roughly balanced (e.g., 50/50) | Classes are imbalanced (e.g., 1% positive) |
| False positives and false negatives are equally costly | False negatives are much more costly than false positives |
| You want a threshold-independent overview | You specifically care about performance on the rare positive class |

> **💡 Interview Tip:** If someone asks "Is accuracy a good metric?", always respond: "It depends on the class distribution and the relative costs of different errors." Then walk through the confusion matrix and explain why F1 or AUC is more appropriate for imbalanced data.

---

## Log-Loss (Cross-Entropy Loss)

Log-Loss measures the quality of predicted probabilities, not just binary predictions. It penalizes confident wrong predictions exponentially.

$$LogLoss = -\\frac{1}{N} \\sum_{i=1}^{N} \\left[ y_i \\log(p_i) + (1-y_i) \\log(1-p_i) \\right]$$

Where p_i is the predicted probability that sample i belongs to the positive class.

### How the Penalty Works

- A model predicting 0.99 probability for a negative sample (very confident and wrong): penalty = -log(0.01) = 4.6
- A model predicting 0.6 probability for a negative sample (slightly wrong): penalty = -log(0.4) = 0.92
- A model predicting 0.01 probability for a negative sample (confident and correct): penalty = -log(0.99) = 0.01

The key insight: Log-Loss does not just care whether the prediction was right or wrong, it cares HOW CONFIDENT the model was. A model that says "I am 51% sure this is positive" when it is wrong is much better than one that says "I am 99% sure this is positive" when it is wrong, even though both get the same accuracy.

### Why Use Log-Loss Instead of Accuracy?

- Accuracy treats all wrong predictions equally (51% wrong is the same as 99% wrong)
- Log-Loss considers the confidence of the prediction
- Log-Loss is differentiable, making it suitable as a loss function for gradient-based optimization
- Lower is better (0 = perfect predictions)

---

## Cohen's Kappa

Cohen's Kappa measures how much better your model is compared to random guessing. It accounts for the agreement that would happen by chance.

$$\\kappa = \\frac{p_o - p_e}{1 - p_e}$$

Where p_o is the observed accuracy and p_e is the expected accuracy by chance (based on class proportions).

| Kappa Value | Interpretation | What It Means |
|---|---|---|
| 0.81 - 1.00 | Almost perfect agreement | The model is excellent |
| 0.61 - 0.80 | Substantial agreement | The model is good |
| 0.41 - 0.60 | Moderate agreement | The model is fair |
| 0.21 - 0.40 | Fair agreement | The model is poor |
| 0.00 - 0.20 | Slight agreement | The model barely beats random chance |
| Below 0.00 | Less than chance | The model is worse than random guessing |

Use Cohen's Kappa when you have class imbalance and want to know if your model is actually learning something or just exploiting the class distribution.

---

## Matthews Correlation Coefficient (MCC)

MCC is widely considered the single best metric for binary classification because it uses all four confusion matrix values and is balanced even with extreme class imbalance.

$$MCC = \\frac{TP \\times TN - FP \\times FN}{\\sqrt{(TP+FP)(TP+FN)(TN+FP)(TN+FN)}}$$

- MCC = +1: Perfect prediction (all samples classified correctly)
- MCC = 0: No better than random guessing
- MCC = -1: Total disagreement (every prediction is wrong — the model is inverted)

Unlike accuracy or F1, MCC provides a symmetric measure that treats all classes equally, making it the most reliable single metric for imbalanced datasets.

---

## Decision Threshold Optimization

The default classification threshold of 0.5 is almost never optimal. The right threshold depends on the specific costs of different error types in your application.

### Four Strategies for Choosing a Threshold

1. **Maximize F1-score:** Try every possible threshold from 0 to 1, compute F1 at each, and pick the threshold that gives the highest F1.
2. **Youden's J statistic:** Find the threshold that maximizes (TPR - FPR) on the ROC curve. This balances sensitivity and specificity.
3. **Cost-sensitive thresholding:** Assign real-world costs to FP and FN. If a false negative costs $1000 and a false positive costs $10, choose the threshold that minimizes total expected cost.
4. **Business requirement:** If the business says "we need at least 95% recall," find the lowest threshold that achieves 95% recall and use that.

### Threshold Impact Example

| Threshold | Precision | Recall | F1 | When to Use |
|---|---|---|---|---|
| 0.3 (low) | 60% | 95% | 73.6% | Cancer screening — catching every case matters most |
| 0.5 (default) | 82% | 80% | 81.0% | General purpose — balanced trade-off |
| 0.7 (high) | 95% | 55% | 69.7% | Legal review — false positives are very expensive |

Notice how the same model produces very different behavior depending on the threshold. The "best" threshold depends entirely on the application.

---

## Which Metric Should You Report?

| Business Situation | Primary Metric | Why | Secondary Metric |
|---|---|---|---|
| Balanced classes, equal error costs | Accuracy | Simple, interpretable | F1 Score |
| Imbalanced classes | F1 Score or MCC | Accuracy is misleading | AUC-ROC |
| False positives are very costly (e.g., spam filter) | Precision | Minimize false alarms | AUC-PR |
| False negatives are very costly (e.g., cancer detection) | Recall | Minimize misses | AUC-PR |
| You need probability estimates | Log-Loss | Measures probability quality | AUC-ROC |
| Comparing against a baseline model | Cohen's Kappa | Shows improvement over chance | MCC |

> **🎯 Interview Gold Standard Answer:** Start with "It depends on the business context and class distribution." Then: (1) describe the confusion matrix for the problem, (2) identify which error type is more costly, (3) recommend the appropriate metric, and (4) mention that you would also look at the ROC curve for a complete picture.
`},sy=Object.freeze(Object.defineProperty({__proto__:null,default:iy},Symbol.toStringTag,{value:"Module"})),oy={slug:"decision-trees",title:"Decision Trees",order:2,content:`
## Core Architecture and Philosophy

At its essence, a Decision Tree mirrors a flowchart where:

- **Root Node:** Represents the entire dataset, which gets split into the first set of mutually exclusive subsets.
- **Internal Nodes:** Represent decision rules based on specific features.
- **Branches:** Represent the outcome of a decision rule (e.g., Feature ≤ Threshold vs. Feature > Threshold).
- **Leaf Nodes:** Represent the final outcome or class prediction. No further splitting occurs here.

Unlike linear models that find a global boundary (like a hyperplane), Decision Trees partition the feature space into **orthogonal, hyper-rectangular regions**.

| Feature Y | | |
|---|---|---|
| Region A | Region B | |
| Region C (spans full width) | | |

### The Recursive Binary Splitting Algorithm

Decision Trees are typically constructed using a **top-down, greedy approach** called recursive binary splitting.

1. **Top-Down:** It starts at the root node (where all observations are present) and successively splits the predictor space.
2. **Greedy:** At each step of the tree-building process, the best split is made *at that particular step*, rather than looking ahead and picking a split that will lead to a better tree a few steps down.

---

## The Mathematical Foundations

To make an optimal split, the algorithm requires a mathematical metric to evaluate "split quality." The goal is to maximize **homogeneity (purity)** within the resulting child nodes.

Let a node represent a subset of data Q. For a classification task with K classes, let p_{mk} be the proportion of training observations in node m that belong to class k:

$$p_{mk} = \\frac{1}{|Q|} \\sum_{x \\in Q} I(y = k)$$

### Entropy and Information Gain

Entropy is a concept borrowed from information theory that measures the level of disorder or impurity in a dataset.

$$H(Q) = -\\sum_{k=1}^{K} p_{mk} \\log_2(p_{mk})$$

- If a node is perfectly pure (all observations belong to one class), Entropy = 0.
- If a node is uniformly split across two classes, Entropy = 1.0.

When deciding a split on a feature A, we calculate the **Information Gain (IG)**, which measures the reduction in entropy:

$$IG(Q, A) = H(Q) - \\sum_{v \\in \\text{Values}(A)} \\frac{|Q_v|}{|Q|} H(Q_v)$$

The ID3 and C4.5 tree algorithms maximize Information Gain at each node.

### Gini Impurity

Gini Impurity is the default metric used by the CART (Classification and Regression Trees) algorithm. It measures the probability of a randomly chosen element being incorrectly classified if it were randomly labeled according to the distribution of labels in the node.

$$G(Q) = 1 - \\sum_{k=1}^{K} p_{mk}^2$$

- A perfectly pure node has a Gini Impurity of 0.
- The maximum Gini Impurity for two evenly split classes is 0.5.

**Gini vs. Entropy:** Gini Impurity is computationally faster because it doesn't require calculating logarithmic functions. Numerically, they yield very similar tree structures 90% of the time.

### Variance Reduction (Regression Trees)

For continuous target variables, metrics like Gini or Entropy do not apply. Instead, the tree minimizes the Mean Squared Error (MSE) or Variance. The split quality is determined by the reduction in variance:

$$\\text{Variance}(Q) = \\frac{1}{|Q|} \\sum_{i \\in Q} (y_i - \\bar{y})^2$$

The algorithm chooses the split that minimizes the sum of squared residuals across the child nodes.

> **💡 Interview Tip:** In interviews, always be ready to explain the difference between Entropy and Gini Impurity. The key point: Gini is computationally faster (no logarithms), but both yield nearly identical trees. CART uses Gini by default; ID3/C4.5 use Information Gain.

---

## Python Implementation and scikit-learn Deep Dive

In the Python ecosystem, \`scikit-learn\` provides the gold standard implementations via \`DecisionTreeClassifier\` and \`DecisionTreeRegressor\`. However, its implementation relies on specific internal designs that introduce subtle nuances.

### API Anatomy and Key Hyperparameters

The \`DecisionTreeClassifier\` accepts these key parameters:

- **criterion:** \`'gini'\` or \`'entropy'\` / \`'log_loss'\` — the split quality metric
- **splitter:** \`'best'\` evaluates all splits; \`'random'\` selects a random subset
- **max_depth:** \`None\` by default — crucial for preventing overfitting
- **min_samples_split:** \`2\` — minimum samples required to split an internal node
- **min_samples_leaf:** \`1\` — minimum samples required to be at a leaf node
- **max_features:** \`None\` — number of features to consider when looking for the best split
- **ccp_alpha:** \`0.0\` — complexity parameter used for Minimal Cost-Complexity Pruning

### Critical Python-Specific Nuances

#### Binary CART Implementation Only

While algorithms like C4.5 natively handle categorical features with multiple branches (multi-way splits), **scikit-learn's implementation of CART only creates binary trees**. This means categorical variables *must* be converted into numerical formats.

#### One-Hot Encoding vs. Label Encoding

Because scikit-learn treats all features as continuous/numerical, how you encode categories dramatically impacts your tree:

- **One-Hot Encoding:** Creates high-cardinality, sparse matrices. Decision trees struggle with this because they select one sparse dummy variable at a time, splitting the data into a tiny subset and a massive subset. This deeply dilutes the predictive power of that feature.
- **Label Encoding:** Forces an artificial ordinal relationship (e.g., Small=0, Medium=1, Large=2). While fine for truly ordinal data, forcing this on nominal data (e.g., Red=0, Blue=1, Green=2) forces the tree to group elements unnaturally (e.g., grouping Red and Green together by splitting on ≤ 1).

#### Determinism and random_state

Even though Decision Trees look deterministic, \`splitter='best'\` resolves ties randomly if multiple features yield the exact same information gain. Always lock down your experiments using a fixed \`random_state\`.

> **⚠️ Common Pitfall:** Forgetting to set \`random_state\` in decision trees. Your results will differ between runs because tie-breaking is random. In production, always fix this for reproducibility.

---

## Architectural Vulnerabilities and Overfitting

The biggest flaw of a raw Decision Tree is its **high variance**. If left unconstrained, a tree will split recursively until every single training point sits in its own pure leaf node, achieving 100% training accuracy but failing catastrophically on unseen data.

### Pre-Pruning (Early Stopping)

Pre-pruning restricts the growth of the tree during construction.

- **\`max_depth\`:** Caps how many levels the tree can have.
- **\`min_samples_leaf\`:** Guarantees that no anomalous, single-outlier data points end up dictating a leaf node's classification.

### Post-Pruning (Cost-Complexity Pruning)

Instead of stopping early, you let the tree grow completely, and then prune back weak branches. Scikit-learn implements this via **Minimal Cost-Complexity Pruning**, controlled by the cost parameter α ≥ 0.

The cost function minimized is:

$$R_\\alpha(T) = R(T) + \\alpha |T|$$

Where R(T) is the total misclassification rate of the tree, and |T| is the number of terminal leaves. A higher α penalizes larger trees, forcing branches to collapse into a single leaf node.

> **💡 Interview Tip:** Pre-pruning is faster but risks stopping too early (the "horizon effect"). Post-pruning lets the tree fully explore, then removes weak branches. In practice, post-pruning with cost-complexity (via \`ccp_alpha\`) tends to produce better generalization.

---

## Advantages and Disadvantages

### When Decision Trees Excel

- **High Interpretability:** Ideal for highly regulated industries (finance, healthcare) where decisions must be audited or explained to stakeholders.
- **Non-Linear Relationships:** Highly capable of capturing non-linear interactions without requiring manual mathematical transformations.
- **Zero Feature Scaling Required:** Insensitive to data scales; scaling features has absolutely no impact on splits.
- **Robust to Outliers:** Outliers simply fall into extreme bins without skewing the core structural boundaries of the tree.

### When Decision Trees Fail

- **High Variance / Overfitting:** Raw trees change drastically with tiny variations in training data.
- **Extrapolation Blindness:** Regression trees cannot predict values outside the range of the training data.
- **Diagonal Decision Boundaries:** Because splits are strictly orthogonal (axis-aligned), approximating a simple diagonal line Y = X requires a staircase of dozens of splits.
- **Imbalanced Datasets:** Trees tend to create highly biased branches toward majority classes unless weights are balanced.

| When Decision Trees Excel | When Decision Trees Fail / Struggle |
|---|---|
| High interpretability for regulated industries | High variance — raw trees change with tiny data variations |
| Non-linear relationships without manual transforms | Extrapolation blindness — regression trees can't predict outside training range |
| Zero feature scaling required | Diagonal boundaries require staircase of many splits |
| Robust to outliers | Imbalanced datasets bias toward majority class |

> **⚠️ Common Pitfall:** Using decision trees on highly sparse, one-hot-encoded data. Trees select one dummy variable at a time, creating deeply unbalanced splits that dilute feature power. Use label encoding or target encoding instead.

---

## Practical Summary

| Scenario | Recommendation |
|---|---|
| Need quick, interpretable, non-linear insights | ✅ Use Decision Trees |
| Building a base estimator for ensemble methods (Random Forest, XGBoost) | ✅ Use Decision Trees |
| Working with smooth, linear functions | ❌ Avoid — use Linear/Logistic Regression |
| Working with unstructured data (images, text) | ❌ Avoid — use Neural Networks |
| Highly sparse data from extensive one-hot encoding | ❌ Avoid — use models robust to sparsity |

> **🎯 Interview Gold Standard Answer:** "Decision Trees split the feature space using recursive binary splitting, optimizing for either Gini Impurity or Information Gain. Their key advantage is interpretability and zero need for feature scaling. However, they suffer from high variance and overfitting, which is why in practice we almost always use ensemble methods like Random Forests or Gradient Boosted Trees that combine many weak trees into a strong predictor."

---

## Hands-On Python Implementation

Here is a complete, production-ready pipeline demonstrating data preprocessing, hyperparameter optimization, and tree visualization.

\`\`\`python
import numpy as np
import pandas as pd
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.tree import DecisionTreeClassifier, plot_tree
import matplotlib.pyplot as plt

# 1. Load and prepare data
data = load_breast_cancer()
X = pd.DataFrame(data.data, columns=data.feature_names)
y = data.target

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# 2. Instantiate and tune via Grid Search (Pre-pruning)
param_grid = {
    'criterion': ['gini', 'entropy'],
    'max_depth': [3, 4, 5, 6],
    'min_samples_leaf': [2, 5, 10]
}

grid_search = GridSearchCV(
    estimator=DecisionTreeClassifier(random_state=42),
    param_grid=param_grid,
    cv=5,
    scoring='f1',
    n_jobs=-1
)

grid_search.fit(X_train, y_train)
best_tree = grid_search.best_estimator_

print(f"Optimal Parameters: {grid_search.best_params_}")
print(f"Optimized Test F1-Score: {best_tree.score(X_test, y_test):.4f}")

# 3. Visualize the final pruned structure
plt.figure(figsize=(20, 10))
plot_tree(
    best_tree,
    feature_names=data.feature_names,
    class_names=data.target_names,
    filled=True,
    rounded=True,
    fontsize=10
)
plt.title("Optimized Decision Tree Structure")
plt.show()
\`\`\`

> **💡 Interview Tip:** When presenting tree-based models in interviews, always mention that you would visualize the tree structure. This demonstrates interpretability awareness — a key advantage of decision trees over black-box models.
`},ly=Object.freeze(Object.defineProperty({__proto__:null,default:oy},Symbol.toStringTag,{value:"Module"})),uy={slug:"ml-interview-tips",title:"ML Interview Tips & Pitfalls",order:4,content:`
## How to Structure Any ML Interview Answer

Interviewers do not just want the answer — they want to see your **thought process**. Use the **STAR-ML framework** for every ML question:

1. **S**ituation: Clarify the problem. Ask about the business context, dataset size, and constraints.
2. **T**echnique: Name the algorithm or approach you would use and why.
3. **A**nalysis: Discuss tradeoffs, metrics, and potential failure modes.
4. **R**esult: Describe how you would evaluate success and iterate.

> **🎯 Interview Gold:** The single most common mistake in ML interviews is jumping straight to algorithms without understanding the problem. Always start with: "Before selecting a model, I would understand the business objective, the data available, and the constraints on latency and interpretability."

---

## Data Handling: The First 30 Minutes of Any ML Project

### The Data Checklist

Before touching any model, verify these items:

1. **Target variable:** Is it clearly defined? Is there label noise? How was it collected?
2. **Class distribution:** What is the positive/negative ratio? For fraud detection, 0.1% positive is normal — accuracy is meaningless.
3. **Missing values:** What percentage is missing per feature? Are they Missing Completely at Random (MCAR), Missing at Random (MAR), or Missing Not at Random (MNAR)?
4. **Data leakage:** Are any features derived from the target or from future information? This is the #1 cause of suspiciously high accuracy.
5. **Train/test overlap:** Do any samples appear in both sets? For time series, is the split temporal?
6. **Feature types:** Continuous, categorical, ordinal, text, images? Each requires different preprocessing.
7. **Scale of the problem:** How many rows and columns? This determines which algorithms are feasible.

> **💡 Interview Tip:** Always ask: "What is the class distribution?" before discussing metrics. If 99% of samples are negative, a model that predicts "all negative" gets 99% accuracy but has zero predictive power.

### Missing Values: The Nuanced Approach

Not all missing values are the same. The strategy depends on the **mechanism** of missingness:

| Mechanism | Meaning | Example | Strategy |
|---|---|---|---|
| **MCAR** (Missing Completely at Random) | Missingness is unrelated to any variable | Lab equipment malfunction | Listwise deletion or any imputation |
| **MAR** (Missing at Random) | Missingness depends on observed variables | Older patients skip certain tests | Impute using other features (e.g., KNN, regression) |
| **MNAR** (Missing Not at Random) | Missingness depends on the unobserved value itself | Rich people do not report income | Model the missingness mechanism explicitly |

**Practical rules:**
- If <5% missing: Median/mode imputation is usually fine.
- If 5-30% missing: Use KNN imputation or iterative imputation (e.g., \`IterativeImputer\` in scikit-learn).
- If >30% missing: Consider dropping the feature or creating a binary "is_missing" indicator.
- For tree-based models (XGBoost, LightGBM): Let the algorithm handle it natively — it often outperforms manual imputation.

> **⚠️ Common Pitfall:** Using mean imputation for features with outliers. The mean is sensitive to outliers — always use median for skewed distributions.

### Class Imbalance: When Accuracy Lies

**The problem:** With 99% negative and 1% positive samples, a model that predicts "all negative" achieves 99% accuracy. This is worse than useless.

**Strategies ranked by effectiveness:**

1. **Use proper metrics first:** Switch from accuracy to F1-score, AUC-ROC, AUC-PR, or MCC. This alone changes the conversation.
2. **Class weights:** Set \`class_weight='balanced'\` in RF/SVM, or \`scale_pos_weight\` in XGBoost. This penalizes the model more for misclassifying the minority class.
3. **SMOTE (Synthetic Minority Over-sampling):** Creates synthetic samples of the minority class by interpolating between existing samples. Only apply to training data, never to test data.
4. **Undersampling:** Randomly remove majority class samples. Works when you have plenty of data.
5. **Ensemble approaches:** Use \`BalancedRandomForest\` or \`EasyEnsemble\` from imbalanced-learn.
6. **Threshold tuning:** Train with default threshold (0.5), then lower the threshold to increase recall for the minority class.

> **💡 Interview Tip:** The best answer to "How do you handle class imbalance?" is: "I start by choosing the right metric — typically AUC-PR for highly imbalanced data. Then I use class weights as the simplest approach. If that is not enough, I try SMOTE on the training set only. I always evaluate on an untouched test set."

### Feature Engineering for Tabular Data

| Feature Type | Encoding Strategy | When to Use |
|---|---|---|
| **Continuous** | Standard scaling, min-max, robust scaling | SVM, KNN, neural networks. Tree models do not need scaling. |
| **Ordinal categorical** | Label encoding (ordered integers) | When order matters: low < medium < high. |
| **Nominal categorical (low cardinality)** | One-hot encoding | Fewer than ~20 unique values. |
| **Nominal categorical (high cardinality)** | Target encoding, frequency encoding, hashing | >20 unique values. One-hot creates too many sparse features. |
| **Text** | TF-IDF, word embeddings (Word2Vec), transformer embeddings | Depends on the task. TF-IDF for simple classification, transformers for complex NLP. |
| **Date/Time** | Extract day, month, hour, day_of_week, is_weekend | Time-based patterns. |
| **Geospatial** | Haversine distance to key points, clustering | Location-based features. |

> **⚠️ Common Pitfall:** Target encoding without cross-validation causes data leakage. The encoded feature leaks information about the target variable. Always compute target means using only the training fold during cross-validation.

---

## Model Selection: The Decision Framework

### The No-Free-Lunch Principle

No algorithm is universally best. The choice depends on:

1. **Dataset size:** Small (<1K rows) → simple models (logistic regression, small trees). Large (>100K) → complex models (gradient boosting, neural networks).
2. **Feature types:** Mostly categorical → LightGBM (native handling). Mostly continuous → any tree model or linear model.
3. **Interpretability requirements:** Regulatory/medical → logistic regression, decision trees. No constraints → ensemble methods.
4. **Training time budget:** Real-time → lightweight models. Offline batch → complex ensembles.
5. **Accuracy requirements:** Baseline → Random Forest. Maximum accuracy → XGBoost/LightGBM with tuning.

### The Algorithm Selection Cheat Sheet

| Situation | Start Here | Why |
|---|---|---|
| Need a baseline in 5 minutes | Logistic Regression (classification) or Linear Regression (regression) | Fast, interpretable, sets a performance floor |
| Tabular data, no tuning time | Random Forest | Robust defaults, no overfitting with more trees |
| Tabular data, maximum accuracy | XGBoost or LightGBM | Sequential error correction captures complex patterns |
| High-dimensional sparse data | LightGBM | EFB bundles sparse features, GOSS reduces rows |
| Many categorical features | LightGBM | Native categorical handling without encoding |
| Image data | CNN (ResNet, EfficientNet) | Convolutional layers capture spatial patterns |
| Text data | Transformers (BERT, RoBERTa) | Self-attention captures long-range dependencies |
| Time series | ARIMA (simple), LSTM/Prophet (complex) | Temporal patterns require specialized architectures |
| Anomaly detection | Isolation Forest, LOF, Autoencoders | Unsupervised methods that do not need labeled anomalies |

---

## Complex ML Situations: Tricky Scenarios

### Scenario 1: Your Model Has 99.5% Accuracy but the Business Is Unhappy

**Root cause analysis:**
- Check the class distribution. If 99% of samples are negative, the model is just predicting "all negative."
- Switch to AUC-PR or F1-score. You will likely see the model is terrible at predicting the positive class.
- Check if the positive class (e.g., fraud, disease) is what the business actually cares about.

**Fix:** Retrain with class weights or SMOTE. Optimize for recall on the positive class if false negatives are costly.

### Scenario 2: Training Accuracy Is 95% but Test Accuracy Is 68%

**Root cause:** Overfitting. The model memorized training data.

**Systematic fixes:**
1. **Reduce model complexity:** Lower max_depth, increase min_samples_leaf, add regularization.
2. **Get more data:** More training data reduces overfitting.
3. **Feature selection:** Remove noisy or irrelevant features.
4. **Cross-validation:** Use k-fold CV instead of a single train/test split for more reliable estimates.
5. **Check for data leakage:** Are any features inadvertently containing target information?

### Scenario 3: Two Models Have Similar Accuracy — How Do You Choose?

**Tiebreaker criteria:**
1. **Inference latency:** If deployment requires real-time predictions (<10ms), choose the faster model.
2. **Interpretability:** If stakeholders need explanations, prefer simpler models or use SHAP.
3. **Robustness:** How does the model perform under distribution shift? Test on different time periods or data sources.
4. **Maintenance cost:** How many hyperparameters need tuning? How often does it need retraining?
5. **Missing value handling:** Does the model handle NaN natively (XGBoost, LightGBM) or require preprocessing (RF)?

### Scenario 4: Your Model Works Great in Development but Fails in Production

**Common causes:**
- **Data drift:** The distribution of production data differs from training data. Monitor feature distributions over time.
- **Concept drift:** The relationship between features and target changes over time. Retrain periodically.
- **Feature pipeline errors:** A bug in feature engineering causes different values in production.
- **Serving infrastructure:** The model is served in a different environment (e.g., different sklearn version).
- **Threshold miscalibration:** The default 0.5 threshold may not be optimal for production class distribution.

**Monitoring checklist:**
1. Log prediction distributions daily.
2. Monitor feature drift using PSI (Population Stability Index) or KS test.
3. Set up alerts for sudden drops in model performance.
4. Retrain on a schedule (weekly for fast-changing data, monthly for stable data).

### Scenario 5: You Have a Dataset with 500 Features and 1000 Rows

**The curse of dimensionality:** More features than rows means high risk of overfitting.

**Strategy:**
1. **Feature selection first:** Remove low-variance features, remove highly correlated features (>0.95 correlation).
2. **PCA or feature extraction:** Reduce to 50-100 principal components.
3. **Regularized models:** Use L1 regularization (Lasso) to automatically select features.
4. **Tree-based models:** Random Forest and XGBoost handle high dimensionality better than linear models because of feature subsampling.
5. **Domain knowledge:** Ask domain experts which features are most relevant.

> **💡 Interview Tip:** When asked about high-dimensional data, always mention both algorithmic approaches (regularization, tree subsampling) and preprocessing approaches (feature selection, PCA). This shows breadth of knowledge.

---

## Deployment and Production Pitfalls

### The ML System Design Framework

When asked to design an ML system, cover these components:

1. **Data pipeline:** How is data collected, stored, and processed? Batch vs. streaming?
2. **Feature store:** Where are features computed? How are they served at prediction time?
3. **Training pipeline:** How is the model trained? How often? Online vs. batch learning?
4. **Serving infrastructure:** How are predictions served? REST API, gRPC, edge deployment?
5. **Monitoring:** How is model performance tracked? What triggers retraining?
6. **Feedback loop:** How do production predictions improve future training data?

### The Top 5 Production Mistakes

1. **No monitoring:** Deploying a model without tracking its performance over time. The model will degrade silently.
2. **Training-serving skew:** Computing features differently in training vs. production. Always use the same feature pipeline.
3. **No A/B testing:** Deploying a new model to all users without comparing it to the current model.
4. **Ignoring feedback loops:** If the model influences the data it is trained on (e.g., recommendation systems), the feedback loop can amplify biases.
5. **Over-engineering:** Building a complex deep learning system when a simple logistic regression would suffice. Start simple, add complexity only when needed.

> **🎯 Interview Gold:** "In production, I focus on three things: monitoring (track prediction distributions and feature drift), retraining (schedule based on data velocity), and rollback capability (always keep the previous model version ready for instant rollback)."

---

## Feature Importance and Model Interpretability

### When Interpretability Matters

- **Healthcare:** Doctors need to know why a model predicts high readmission risk.
- **Finance:** Regulators require model decisions to be explainable (GDPR, ECOA).
- **Legal:** Court admissibility requires transparent reasoning.
- **Trust:** Stakeholders trust models they understand.

### The Interpretability Toolkit

| Method | What It Provides | Best For |
|---|---|---|
| **SHAP values** | Per-instance feature contributions | Any model. Gold standard for both global and local explanations. |
| **Permutation importance** | Feature importance based on performance drop | Any model. More reliable than Gini importance. |
| **Partial Dependence Plots (PDP)** | How a feature affects the prediction | Tree models, linear models. Shows marginal effect. |
| **LIME** | Local interpretable explanations | Complex models (neural networks, ensembles). |
| **SHAP summary plot** | Global feature importance with direction | Any model. Shows which features drive predictions up or down. |

> **💡 Interview Tip:** Always mention SHAP in interpretability questions. It is the most widely accepted method and works with any model. Mention that SHAP values have a theoretical foundation in game theory (Shapley values), which gives them mathematical rigor.

---

## Quick-Fire Trick Questions and Answers

**Q: Why not use accuracy for imbalanced datasets?**

A: Accuracy counts all predictions equally. With 99% negative samples, a model predicting "all negative" gets 99% accuracy. Use AUC-PR (area under precision-recall curve) which focuses on the positive class performance.

**Q: When would you use logistic regression over a neural network?**

A: When you need interpretability, have limited data (<10K rows), need fast training, or require guarantees about model behavior (e.g., monotonicity constraints). Neural networks need lots of data and are black boxes.

**Q: What is the difference between L1 and L2 regularization?**

A: L1 (Lasso) adds $|w|$ penalty, which drives some weights to exactly zero (feature selection). L2 (Ridge) adds $w^2$ penalty, which shrinks all weights proportionally (never to zero). Use L1 when you suspect many features are irrelevant. Use L2 when all features are somewhat useful.

**Q: How do you handle a feature that is highly correlated with the target?**

A: Check for data leakage first — the feature might be derived from the target (e.g., including post-transaction data in a fraud prediction model). If it is legitimate, it is the most predictive feature — use it but validate with temporal splits to ensure it works on future data.

**Q: What is the difference between data drift and concept drift?**

A: Data drift is when the distribution of input features changes (e.g., more young users in production than training). Concept drift is when the relationship between features and target changes (e.g., what constitutes "fraud" evolves). Both require monitoring, but concept drift requires retraining with new labels.

**Q: When would you NOT use gradient boosting?**

A: When you need real-time training (online learning), have very small datasets (<1K rows), require strong extrapolation guarantees, or need a simple model for regulatory compliance. Also avoid when the data has strong temporal patterns and you cannot set up proper temporal cross-validation.

**Q: How do you know if your model is overfitting or underfitting?**

A: Compare training and validation metrics. Overfitting: high training accuracy, low validation accuracy (large gap). Underfitting: both training and validation accuracy are low (small gap, both poor). The goal is high validation accuracy with a small gap.

**Q: What is the most common mistake in ML interviews?**

A: Jumping to algorithms without understanding the problem. Always start with: "What is the business objective? What data is available? What are the constraints?" Then discuss metrics, then algorithms, then implementation.

> **🎯 Interview Gold:** "The best ML engineers I have worked with all share one trait: they spend more time understanding the data and the problem than tuning hyperparameters. A well-understood problem with a simple model beats a poorly understood problem with a complex model every time."
`},cy=Object.freeze(Object.defineProperty({__proto__:null,default:uy},Symbol.toStringTag,{value:"Module"})),dy={slug:"ml-nuances",title:"ML Nuances & Critical Decisions",order:7,content:`
## Overview

This page covers the hidden knowledge that only comes from hands-on experience building production ML systems. These are the nuances, decision points, and pitfalls that separate junior from senior ML engineers.

**Prerequisites:** Understanding of basic ML concepts, model training, and evaluation.

---

## 1. Data Leakage: The Silent Killer

Data leakage is the #1 cause of models that look great in development but fail in production. It occurs when information from outside the training dataset influences the model during training.

### The Three Types of Data Leakage

#### 1. Train-Test Contamination

\`\`\`python
# WRONG: Fitting scaler on entire dataset before splitting
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)  # LEAKS test statistics into training
X_train, X_test = train_test_split(X_scaled)

# RIGHT: Fit on training data only
X_train, X_test = train_test_split(X)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)  # Uses training statistics
\`\`\`

#### 2. Target Leakage (Most Dangerous)

\`\`\`python
# WRONG: Feature derived from target
df['loan_default_risk'] = df['loan_default']  # Direct leakage!
df['payment_delayed'] = df['days_past_due'] > 30  # Leakage if computed after default

# RIGHT: Use only features available at prediction time
df['payment_delayed'] = (df['due_date'] - df['payment_date']).dt.days
# This is computed BEFORE we know if they default
\`\`\`

#### 3. Temporal Leakage

\`\`\`python
# WRONG: Random split for time series
X_train, X_test = train_test_split(data, test_size=0.2)  # Future data leaks into training

# RIGHT: Temporal split
train = data[data['date'] < '2023-01-01']
test = data[data['date'] >= '2023-01-01']
\`\`\`

### Leakage Detection Checklist

| Check | How to Detect | Fix |
|---|---|---|
| Feature correlation with target > 0.95 | Check before modeling | Verify feature is computed before target |
| Model performance drops in production | Compare train vs prod metrics | Audit feature pipeline for temporal issues |
| Cross-validation scores vary wildly | Check CV strategy | Use proper CV (time series, stratified, group) |
| Feature importance includes "future" features | Review feature definitions | Remove features using future information |

> **⚠️ Critical Nuance:** A model with 99% accuracy that fails in production almost always has leakage. Always audit features for temporal validity before celebrating high metrics.

---

## 2. Cross-Validation: Strategy Selection Framework

Cross-validation is not one-size-fits-all. The wrong CV strategy gives overly optimistic or pessimistic performance estimates.

### CV Strategy Decision Tree

\`\`\`python
# Question 1: Is your data time-ordered?
if is_time_series:
    # Use TimeSeriesSplit
    from sklearn.model_selection import TimeSeriesSplit
    cv = TimeSeriesSplit(n_splits=5, gap=0)
    # NEVER use random KFold for time series!

# Question 2: Are there groups that should not be split?
elif has_groups:  # e.g., same user in multiple samples
    # Use GroupKFold
    from sklearn.model_selection import GroupKFold
    cv = GroupKFold(n_splits=5)
    # Prevents data from same group appearing in train and test

# Question 3: Is the target imbalanced?
elif is_imbalanced:
    # Use StratifiedKFold
    from sklearn.model_selection import StratifiedKFold
    cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
    # Maintains class distribution in each fold

# Default: Standard KFold
else:
    from sklearn.model_selection import KFold
    cv = KFold(n_splits=5, shuffle=True, random_state=42)
\`\`\`

### Critical CV Nuances

#### Nested Cross-Validation (for hyperparameter tuning):

\`\`\`python
from sklearn.model_selection import cross_val_score, GridSearchCV

# WRONG: Tuning on same CV folds used for evaluation
# This leaks information from test folds into hyperparameter selection

# RIGHT: Nested CV
param_grid = {'max_depth': [3, 5, 7], 'min_samples_leaf': [1, 5, 10]}
inner_cv = StratifiedKFold(n_splits=3)  # For hyperparameter tuning
outer_cv = StratifiedKFold(n_splits=5)  # For performance estimation

clf = GridSearchCV(estimator=DecisionTreeClassifier(),
                   param_grid=param_grid, cv=inner_cv)
scores = cross_val_score(clf, X, y, cv=outer_cv)  # Unbiased estimate
\`\`\`

**Why nested CV matters:** If you tune hyperparameters on the same folds you evaluate on, you're implicitly selecting the best hyperparameters for that specific test set. The performance estimate is optimistically biased. Nested CV gives an unbiased estimate of how the model will perform on truly unseen data.

### CV Strategy Cheat Sheet

| Scenario | CV Strategy | Why |
|---|---|---|
| Time series data | TimeSeriesSplit | Prevents future data leakage |
| Multiple samples per user/group | GroupKFold | Prevents overfitting to specific groups |
| Imbalanced classification | StratifiedKFold | Maintains class distribution |
| Small dataset (<1K samples) | LeaveOneOut | Maximizes training data |
| Standard tabular data | KFold (shuffled) | General purpose |

---

## 3. Hyperparameter Tuning: Decision Framework

Hyperparameter tuning is expensive. The key insight: not all hyperparameters are equally important.

### Hyperparameter Importance Hierarchy

**Tier 1: Always tune (high impact)**
- XGBoost/LightGBM: learning_rate, n_estimators, max_depth, min_child_weight
- Random Forest: n_estimators, max_depth, min_samples_leaf
- SVM: C, gamma, kernel

**Tier 2: Tune if Tier 1 insufficient (medium impact)**
- XGBoost/LightGBM: subsample, colsample_bytree, reg_alpha, reg_lambda
- Random Forest: max_features, min_samples_split

**Tier 3: Fine-tuning (low impact)**
- XGBoost/LightGBM: gamma, scale_pos_weight (if imbalanced)
- Random Forest: bootstrap, oob_score

### Tuning Strategy Selection

\`\`\`python
# Grid Search: Exhaustive, guaranteed best in grid
# WHEN: Small parameter space (<50 combinations), need exact best
# PRO: Guaranteed to find best combination in grid
# CON: Exponential time complexity
from sklearn.model_selection import GridSearchCV
grid = GridSearchCV(model, param_grid={'max_depth': [3,5,7], 'lr': [0.01, 0.1]}, cv=5)

# Random Search: Sample random combinations
# WHEN: Large parameter space, limited time budget
# PRO: Often finds good results faster than grid search
# CON: No guarantee of finding optimal
from sklearn.model_selection import RandomizedSearchCV
random = RandomizedSearchCV(model, param_distributions=..., n_iter=50, cv=5)

# Bayesian Optimization: Learns from past trials
# WHEN: Expensive model training, need optimal with few evaluations
# PRO: Most efficient for expensive models
# CON: More complex setup
from optuna import create_study
study = create_study(direction='maximize')
study.optimize(objective, n_trials=100)
\`\`\`

### Critical Tuning Nuances

#### 1. Learning Rate vs N_Estimators Tradeoff:

\`\`\`python
# Rule of thumb: halve learning_rate → double n_estimators
# Lower learning_rate = more robust, needs more trees
xgb_low_lr = XGBClassifier(learning_rate=0.01, n_estimators=1000)  # Slower, better
xgb_high_lr = XGBClassifier(learning_rate=0.3, n_estimators=100)   # Faster, riskier
\`\`\`

#### 2. Early Stopping as Regularization:

\`\`\`python
# Always use early stopping with gradient boosting
# It automatically finds optimal n_estimators, preventing overfitting
xgb.fit(X_train, y_train,
        eval_set=[(X_test, y_test)],
        early_stopping_rounds=20,  # Stop if no improvement in 20 rounds
        verbose=False)
print(f"Best iteration: {xgb.best_iteration}")  # Use this, not n_estimators
\`\`\`

#### 3. The "Free Lunch" in Random Forest:

\`\`\`python
# Random Forest does NOT overfit with more trees (unlike boosting)
# Just increase n_estimators until OOB score plateaus
rf = RandomForestClassifier(n_estimators=1000, oob_score=True)  # Safe to overshoot
\`\`\`

> **💡 Interview Nuance:** When asked about hyperparameter tuning, always mention: (1) start with defaults, (2) tune learning_rate and n_estimators first for boosting, (3) use early stopping, (4) use random search for large spaces, (5) never tune on test set.

---

## 4. Model Evaluation: Hidden Pitfalls

### The Multiple Comparison Problem

If you try 100 different models and report the best one, your performance estimate is optimistically biased.

\`\`\`python
# WRONG: Reporting best of 100 models without correction
for i in range(100):
    model = train_random_model()
    scores.append(model.score(X_test, y_test))
print(f"Best model accuracy: {max(scores):.4f}")  # Overestimated!

# RIGHT: Use a holdout set for final evaluation
# Split data into: train (60%), validation (20%), test (20%)
# Use validation for model selection
# Use test ONCE for final unbiased estimate
X_train, X_temp, y_train, y_temp = train_test_split(X, y, test_size=0.4)
X_val, X_test, y_val, y_test = train_test_split(X_temp, y_temp, test_size=0.5)
\`\`\`

### The Accuracy Illusion with Imbalanced Data

\`\`\`python
# Scenario: 99% negative, 1% positive
# Model that predicts "all negative" achieves 99% accuracy

# WRONG metric: Accuracy
accuracy = model.score(X_test, y_test)  # 99% - looks great!

# RIGHT metrics for imbalanced data
from sklearn.metrics import f1_score, roc_auc_score, average_precision_score
f1 = f1_score(y_test, y_pred)  # Will be 0 for "all negative"
auc_roc = roc_auc_score(y_test, y_pred_proba)  # Will be 0.5 for random
auc_pr = average_precision_score(y_test, y_pred_proba)  # Most informative
\`\`\`

### When to Use Which Metric

| Scenario | Primary Metric | Why |
|---|---|---|
| Balanced classes | Accuracy | Simple, interpretable |
| Imbalanced, care about both FP/FN | F1-score | Balances precision and recall |
| Imbalanced, care about ranking | AUC-ROC | Threshold-independent |
| Highly imbalanced (>100:1) | AUC-PR | More sensitive to minority class |
| Cost-sensitive (FP ≠ FN cost) | Custom cost function | Reflects business reality |

### The Confidence Calibration Problem

\`\`\`python
# A model can have high accuracy but poorly calibrated probabilities
# Calibration: predicted probability should match actual frequency

from sklearn.calibration import calibration_curve
import matplotlib.pyplot as plt

prob_true, prob_pred = calibration_curve(y_test, y_pred_proba, n_bins=10)
plt.plot(prob_pred, prob_true, marker='o')
plt.plot([0, 1], [0, 1], linestyle='--')  # Perfect calibration
plt.xlabel('Mean predicted probability')
plt.ylabel('Fraction of positives')
\`\`\`

**Critical nuance:** XGBoost and Random Forest tend to be overconfident. If you need well-calibrated probabilities (e.g., for risk scoring), apply Platt scaling (sigmoid calibration) or isotonic regression.

---

## 5. Imbalanced Data: Decision Framework

### When to Use Which Technique

\`\`\`python
# Decision tree for imbalanced data handling:

# Step 1: Always start with class weights (fastest, safest)
model = XGBClassifier(scale_pos_weight=99)  # For 1:99 imbalance

# Step 2: If class weights insufficient, try SMOTE (only on training data!)
from imblearn.over_sampling import SMOTE
smote = SMOTE(random_state=42)
X_train_balanced, y_train_balanced = smote.fit_resample(X_train, y_train)

# Step 3: If SMOTE creates too much noise, try undersampling
from imblearn.under_sampling import RandomUnderSampler
rus = RandomUnderSampler(random_state=42)
X_train_balanced, y_train_balanced = rus.fit_resample(X_train, y_train)

# Step 4: For extreme imbalance (>1000:1), use anomaly detection
from sklearn.ensemble import IsolationForest
iso = IsolationForest(contamination=0.001)
\`\`\`

### SMOTE Pitfalls

**Critical nuance:** SMOTE creates synthetic samples by interpolating between existing minority samples. This can:

- **Help:** When minority class has clear structure
- **Hurt:** When minority class is noisy or has outliers (amplifies noise)
- **Never apply:** To test data or before splitting (data leakage)

**Better alternative for noisy data:** Use SMOTE-ENN (SMOTE + Edited Nearest Neighbors) which removes noisy synthetic samples.

---

## 6. Feature Engineering: Hidden Decision Points

### The "Feature Pipeline" Problem

In production, features must be computed identically in training and serving. This is harder than it sounds.

\`\`\`python
# WRONG: Ad-hoc feature computation
# Training:
df['feature'] = df['col'].apply(lambda x: complex_function(x))

# Production (different implementation, different results):
df['feature'] = df['col'].map(some_other_function)

# RIGHT: Serialize the entire pipeline
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import FunctionTransformer

def complex_feature(X):
    return X.apply(lambda x: complex_function(x))

pipeline = Pipeline([
    ('feature_eng', FunctionTransformer(complex_feature)),
    ('scaler', StandardScaler()),
    ('model', XGBClassifier())
])

pipeline.fit(X_train, y_train)
# Save entire pipeline
import joblib
joblib.dump(pipeline, 'model.pkl')

# In production: load and predict
model = joblib.load('model.pkl')
predictions = model.predict(X_production)  # Identical feature computation
\`\`\`

### Feature Engineering Decision Framework

| Feature Type | Encoding | When to Create | Pitfall |
|---|---|---|---|
| Numerical | StandardScaler (for linear models), none (for trees) | Always | Forgetting to fit scaler on train only |
| Categorical (low cardinality) | One-hot | <20 categories | Explodes feature count |
| Categorical (high cardinality) | Target encoding | >20 categories | Data leakage without CV |
| Text | TF-IDF or embeddings | Always | Using raw text with tree models |
| Date/Time | Extract components | Always | Using future information (e.g., day of week from future) |
| Interactions | Multiply/divide features | When domain knowledge suggests | Creating too many (curse of dimensionality) |
| Aggregations | Group statistics | When group behavior matters | Leakage if computed on full dataset |

### The "Feature Store" Necessity

For production systems with >100 features, manual feature computation is error-prone. A feature store (Feast, Tecton, Redis) provides:

- **Point-in-time correctness:** Features computed as-of the prediction time
- **Consistency:** Same computation in training and serving
- **Reusability:** Features shared across models
- **Monitoring:** Track feature distributions and data quality

> **⚠️ Critical Nuance:** The most common production failure is training-serving skew — features computed differently in training vs. production. Always use a feature pipeline that is serialized and versioned.

---

## 7. Ensemble Methods: Selection Nuances

### Bagging vs Boosting: Beyond the Basics

| Aspect | Bagging (RF) | Boosting (XGBoost) |
|---|---|---|
| **When to choose** | Noisy data, need robustness | Clean data, need max accuracy |
| **Overfitting behavior** | Does not overfit with more trees | Overfits without early stopping |
| **Error correction** | Parallel (no error correction) | Sequential (corrects previous errors) |
| **Bias reduction** | Minimal | Significant |
| **Variance reduction** | Significant | Moderate |
| **Training speed** | Parallelizable (fast) | Sequential (slower) |
| **Interpretability** | More stable feature importance | Less stable importance |

### When to Use Stacking vs Single Model

\`\`\`python
# Stacking: Train multiple models, use their predictions as features for meta-learner
# WHEN: You have diverse models with different strengths
# PRO: Can capture complementary patterns
# CON: Complex, prone to overfitting, slow inference

from sklearn.ensemble import StackingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from xgboost import XGBClassifier

stack = StackingClassifier(
    estimators=[
        ('rf', RandomForestClassifier(n_estimators=100)),
        ('xgb', XGBClassifier(n_estimators=100))
    ],
    final_estimator=LogisticRegression(),  # Meta-learner
    cv=5
)
\`\`\`

**Critical nuance:** Stacking helps when base models make different types of errors. If all base models are decision trees, stacking provides minimal benefit. Diversity (different algorithms) is key.

### The "Wisdom of Crowds" Threshold

For ensembles to work, base models must be:

1. **Accurate:** Better than random (AUC > 0.5)
2. **Diverse:** Make different errors (correlation < 1.0)

If base models are highly correlated (e.g., 10 XGBoost models with same hyperparameters), the ensemble provides diminishing returns.

---

## 8. Model Serialization and Deployment

### Serialization Options

| Method | Pros | Cons | When to Use |
|---|---|---|---|
| **Pickle** | Native Python, easy | Not secure, version-dependent | Quick prototyping |
| **Joblib** | Faster for large numpy arrays | Same as pickle | Production with sklearn |
| **ONNX** | Language-agnostic, optimized | Conversion overhead | Cross-platform deployment |
| **PMML** | Standard format | Limited model support | Enterprise systems |

\`\`\`python
# WRONG: Saving only the model
import pickle
with open('model.pkl', 'wb') as f:
    pickle.dump(model, f)  # Missing preprocessing!

# In production:
model = pickle.load(open('model.pkl', 'rb'))
# ERROR: model expects scaled features, but you forgot to save the scaler!

# RIGHT: Save entire pipeline
from sklearn.pipeline import Pipeline
pipeline = Pipeline([
    ('imputer', SimpleImputer()),
    ('scaler', StandardScaler()),
    ('model', XGBClassifier())
])

pipeline.fit(X_train, y_train)
joblib.dump(pipeline, 'pipeline.pkl')  # Includes preprocessing

# In production:
pipeline = joblib.load('pipeline.pkl')
predictions = pipeline.predict(X_production)  # Preprocessing included
\`\`\`

### Model Versioning

\`\`\`python
# Critical: Track model version, training data version, hyperparameters
import mlflow

mlflow.set_experiment("fraud_detection")
with mlflow.start_run(run_name="xgb_v2"):
    mlflow.log_params({
        'learning_rate': 0.05,
        'max_depth': 4,
        'n_estimators': 200
    })
    mlflow.log_metrics({'auc': 0.95, 'f1': 0.88})
    mlflow.sklearn.log_model(model, "model")
\`\`\`

**Why versioning matters:** When a model fails in production, you need to know:

- Which hyperparameters were used?
- What data was it trained on?
- What was the validation performance?
- Has the code changed since training?

---

## 9. A/B Testing ML Models

### The Paired Comparison Problem

You cannot simply compare two models on the same test set if they are evaluated sequentially. User behavior changes over time.

\`\`\`python
# WRONG: Compare Model A on Jan data, Model B on Feb data
# User behavior may have changed between months!

# RIGHT: Randomly assign users to Model A or Model B
# This controls for temporal effects

# A/B test setup:
# - 10% traffic → Model A (champion)
# - 10% traffic → Model B (challenger)
# - 80% traffic → Current production model

# Metrics to track:
# 1. Business metrics: conversion rate, revenue, user engagement
# 2. Model metrics: AUC, F1, calibration
# 3. Latency metrics: p50, p95, p99 response times
\`\`\`

### Statistical Significance

\`\`\`python
from scipy import stats

# After A/B test, check if improvement is statistically significant
model_a_scores = [0.85, 0.87, 0.84, ...]  # Daily AUC scores
model_b_scores = [0.88, 0.89, 0.87, ...]

t_stat, p_value = stats.ttest_rel(model_a_scores, model_b_scores)

if p_value < 0.05:
    print("Model B is significantly better")
else:
    print("No significant difference — keep Model A to avoid change risk")
\`\`\`

**Critical nuance:** Always run A/B tests for at least 1-2 weeks to capture weekly seasonality. A test that runs for 1 day may show improvement that disappears on weekends.

---

## 10. Cold Start Problems

### The Four Cold Start Scenarios

#### 1. New User (no historical data)

\`\`\`python
# Problem: User just signed up, no click/purchase history
# Solutions:
# - Use demographic features (age, location, device)
# - Use onboarding survey responses
# - Start with popular items (exploration)
# - Use meta-learning: train on user cohorts, not individuals
\`\`\`

#### 2. New Item (no interaction data)

\`\`\`python
# Problem: New product listed, no user interactions
# Solutions:
# - Use content features: category, price, description embeddings
# - Use image features: pretrained CNN embeddings
# - Transfer learning from similar items
\`\`\`

#### 3. New Feature (not in training data)

\`\`\`python
# Problem: New feature added in production, model wasn't trained on it
# Solutions:
# - Retrain model with new feature
# - Use feature hashing to handle unseen categories
# - Fall back to model without the new feature
\`\`\`

#### 4. New Class (unseen category in target)

\`\`\`python
# Problem: New fraud pattern emerges, not in training data
# Solutions:
# - Anomaly detection: flag as "unknown" instead of forcing classification
# - Continual learning: update model with new labeled examples
# - Confidence threshold: if max probability < 0.7, flag for human review
\`\`\`

### Cold Start Decision Framework

| Scenario | Immediate Solution | Long-term Solution |
|---|---|---|
| New user | Popular items, demographics | Meta-learning, few-shot learning |
| New item | Content-based features | Transfer learning from similar items |
| New feature | Retrain model | Online learning, feature stores |
| New class | Anomaly detection | Continual learning pipeline |

---

## 11. Error Analysis: Systematic Debugging

### The Error Analysis Framework

When model performance is unsatisfactory, follow this systematic approach:

\`\`\`python
# Step 1: Quantify the error
# - Is it overfitting (train >> test) or underfitting (train ≈ test, both low)?
# - Which metric is failing? (Accuracy, F1, AUC, calibration)

# Step 2: Segment analysis
# Break down errors by subgroups
for segment in ['age_group', 'location', 'product_category']:
    segment_errors = errors[data[segment] == segment_value]
    print(f"{segment}: error_rate={segment_errors.mean():.2f}")

# Step 3: Error pattern detection
# - Are errors concentrated in specific feature ranges?
# - Are errors correlated with data quality issues (missing values, outliers)?
# - Are errors systematic (model is biased) or random (high variance)?

# Step 4: Feature importance on errors
# Train a model to predict "is_error" and check which features predict errors
from sklearn.ensemble import RandomForestClassifier
error_predictor = RandomForestClassifier()
error_predictor.fit(X, is_error)
importances = pd.Series(error_predictor.feature_importances_, index=feature_names)
\`\`\`

### Common Error Patterns and Fixes

| Error Pattern | Diagnosis | Fix |
|---|---|---|
| High train, low test | Overfitting | Reduce model complexity, add regularization, more data |
| Low train, low test | Underfitting | Increase model complexity, better features |
| Errors concentrated in subgroup | Bias | Collect more data for subgroup, use group-aware training |
| Errors on edge cases | Extrapolation failure | Add more edge case examples, use models that handle extrapolation |
| Inconsistent errors | High variance | More data, ensemble methods, reduce features |
| Systematic bias | Label noise | Clean labels, use robust loss functions |

---

## 12. Production Monitoring: Beyond Accuracy

### The Four Types of Model Degradation

#### 1. Data Drift
- **What:** Input feature distribution changes
- **Detection:** PSI (Population Stability Index), KS test
- **Example:** More young users in production than training
- **Fix:** Retrain on recent data, or use domain adaptation

#### 2. Concept Drift
- **What:** Relationship between features and target changes
- **Detection:** Monitor prediction accuracy on labeled data
- **Example:** Fraud patterns change as fraudsters adapt
- **Fix:** Retrain model with recent labeled data

#### 3. Feature Pipeline Drift
- **What:** Feature computation code changes
- **Detection:** Monitor feature distributions, compare training vs serving
- **Example:** Bug in feature engineering causes different values
- **Fix:** Version control feature pipeline, use feature store

#### 4. Infrastructure Drift
- **What:** Model served in different environment
- **Detection:** Compare predictions on same input in train vs prod
- **Example:** Different library versions, different hardware
- **Fix:** Containerize model, use ONNX for consistency

### Monitoring Implementation

\`\`\`python
# Calculate Population Stability Index (PSI)
def calculate_psi(expected, actual, buckets=10):
    """PSI > 0.2 indicates significant drift"""
    breakpoints = np.arange(0, 110, 100/buckets)
    expected_percents = np.histogram(expected, breakpoints)[0] / len(expected)
    actual_percents = np.histogram(actual, breakpoints)[0] / len(actual)
    
    # Avoid division by zero
    expected_percents = np.where(expected_percents == 0, 0.001, expected_percents)
    actual_percents = np.where(actual_percents == 0, 0.001, actual_percents)
    
    psi = np.sum((actual_percents - expected_percents) * np.log(actual_percents / expected_percents))
    return psi

# Monitor daily
psi = calculate_psi(train_feature_dist, today_feature_dist)
if psi > 0.2:
    alert("Feature drift detected! Consider retraining.")
\`\`\`

### Monitoring Checklist

| Monitor | Frequency | Alert Threshold | Action |
|---|---|---|---|
| Prediction distribution | Daily | PSI > 0.2 | Investigate feature drift |
| Feature distributions | Daily | PSI > 0.2 | Retrain or adapt model |
| Model performance | Weekly | AUC drop > 5% | Retrain with new data |
| Latency (p95) | Real-time | > SLA | Scale infrastructure |
| Error rate | Real-time | > threshold | Rollback to previous model |
| Data quality | Daily | Missing > 10% | Fix data pipeline |

---

## 13. Advanced Nuances by Model Type

### XGBoost/LightGBM Specific

#### 1. Handling Imbalanced Data:

\`\`\`python
# scale_pos_weight = (negative_count / positive_count)
# This makes the model penalize misclassifying minority class more
xgb = XGBClassifier(scale_pos_weight=99)  # For 1:99 imbalance
\`\`\`

#### 2. Missing Value Handling:

\`\`\`python
# XGBoost/LightGBM learn the optimal direction for missing values
# During training, they try sending missing values left and right, choose best
# This often outperforms manual imputation
\`\`\`

#### 3. Monotonic Constraints:

\`\`\`python
# Enforce business logic: "higher income → lower default risk"
xgb = XGBClassifier(monotone_constraints={'income': -1, 'age': 1})
\`\`\`

### Random Forest Specific

#### 1. OOB Score as Validation:

\`\`\`python
# OOB samples (~37% of data) serve as built-in validation
# No need for separate validation set during training
rf = RandomForestClassifier(n_estimators=300, oob_score=True)
rf.fit(X_train, y_train)
print(f"OOB Score: {rf.oob_score_:.4f}")  # Reliable validation estimate
\`\`\`

#### 2. When to Increase N_estimators:

\`\`\`python
# Random Forest does NOT overfit with more trees
# Keep increasing until OOB score plateaus
for n in [100, 200, 500, 1000]:
    rf = RandomForestClassifier(n_estimators=n, oob_score=True)
    rf.fit(X, y)
    print(f"n={n}, OOB={rf.oob_score_:.4f}")
# Stop when improvement < 0.001
\`\`\`

### Linear Models Specific

#### 1. Feature Scaling is Mandatory:

\`\`\`python
# L1/L2 regularization penalizes coefficient magnitudes
# Without scaling, features with large ranges get penalized more
# ALWAYS scale before linear models with regularization
\`\`\`

#### 2. Multicollinearity Detection:

\`\`\`python
# Check VIF (Variance Inflation Factor)
from statsmodels.stats.outliers_influence import variance_inflation_factor

vif = pd.DataFrame()
vif['Feature'] = X.columns
vif['VIF'] = [variance_inflation_factor(X.values, i) for i in range(X.shape[1])]

# VIF > 10 indicates severe multicollinearity
# Fix: Remove features, use PCA, or use tree models (robust to multicollinearity)
\`\`\`

---

## 14. The "Senior Engineer" Decision Checklist

Before deploying any model, answer these questions:

### Data Quality
- [ ] Have I checked for data leakage (target leakage, temporal leakage)?
- [ ] Are missing values handled consistently in training and production?
- [ ] Have I validated feature distributions in production match training?

### Model Selection
- [ ] Did I start with a baseline (logistic regression) before complex models?
- [ ] Is the model complexity justified by the data size?
- [ ] Have I considered inference latency requirements?

### Evaluation
- [ ] Am I using the right metric for the business problem?
- [ ] Have I used proper cross-validation (not random KFold for time series)?
- [ ] Is my test set truly held out (never used for tuning)?
- [ ] Have I checked for class imbalance and used appropriate metrics?

### Production Readiness
- [ ] Is the entire pipeline (preprocessing + model) serialized?
- [ ] Have I set up monitoring for data drift, concept drift, and performance?
- [ ] Is there a rollback plan if the model fails?
- [ ] Have I versioned the model, data, and code?

### Interpretability
- [ ] Can I explain why the model made a specific prediction?
- [ ] Have I checked for unexpected biases (e.g., discriminating by gender)?
- [ ] Is the model compliant with regulations (GDPR, ECOA)?

---

## 15. Interview Questions: The Nuance Level

### Q: "Your model has 95% accuracy in development but 70% in production. What happened?"

**Junior answer:** "The model is overfitting."

**Senior answer:** "I would systematically investigate: (1) Data leakage — did I accidentally use future information or target-derived features? (2) Distribution shift — do production features have different distributions than training? Check PSI. (3) Feature pipeline — are features computed identically in training and production? (4) Temporal issues — if time series, did I use random splits instead of temporal splits? (5) Label quality — are production labels collected differently? I would start by comparing feature distributions and checking for leakage, as those are the most common causes."

### Q: "How do you handle a model that's biased against a protected group?"

**Junior answer:** "Remove the protected attribute from features."

**Senior answer:** "Removing the protected attribute is insufficient because of proxy variables (e.g., zipcode correlates with race). I would: (1) Measure bias using fairness metrics (disparate impact, equal opportunity difference). (2) Check for proxy variables using correlation analysis. (3) Apply preprocessing (reweighing, disparate impact remover), in-processing (fairness constraints), or post-processing (threshold adjustment). (4) Validate that fixing bias doesn't drastically reduce overall performance. (5) Document the fairness-accuracy tradeoff for stakeholders."

### Q: "When would you NOT use gradient boosting?"

**Junior answer:** "When the dataset is small."

**Senior answer:** "Gradient boosting is not my choice when: (1) I need real-time training (online learning) — boosting is inherently sequential. (2) The data has strong temporal patterns and I cannot set up proper temporal CV — boosting can memorize temporal leakage. (3) I need strong interpretability — while SHAP works, it's slower than interpreting a single decision tree or linear model. (4) The data is extremely noisy — boosting can overfit to noise because it focuses on hard examples. (5) Inference latency is <1ms — logistic regression is faster. I would use Random Forest for robustness, or Logistic Regression for speed and interpretability."

---

## Quick Reference: Decision Trees for Common Scenarios

| Scenario | Decision | Rationale |
|---|---|---|
| Model performs great in CV, terrible in prod | Check data leakage first | #1 cause of train-prod gap |
| Imbalanced data (1:100) | Start with class weights, then SMOTE | Class weights are free, SMOTE risks overfitting |
| 1000 features, 10K rows | Feature selection before modeling | Curse of dimensionality |
| Time series data | TimeSeriesSplit CV, temporal features | Random splits leak future data |
| Need model explainability | SHAP + tree model or logistic regression | SHAP works with any model |
| Production latency <10ms | Logistic regression or small tree | Fast inference |
| Model needs weekly retraining | LightGBM with early stopping | Fast training, automatic regularization |
| Cold start (new user) | Content-based + popular items | No historical data available |
| Multiple models to compare | A/B test with statistical significance | Avoid selection bias |

> **💡 Interview Gold Standard:** "The nuances I've covered — data leakage, proper CV strategy, hyperparameter importance hierarchy, production monitoring, and cold start solutions — are what separate models that work in notebooks from models that work in production. The key mindset shift is: always think about the entire ML system, not just the model training step. Data quality, feature pipelines, monitoring, and deployment constraints are often harder than model selection."
`},my=Object.freeze(Object.defineProperty({__proto__:null,default:dy},Symbol.toStringTag,{value:"Module"})),hy={slug:"model-runs",title:"Model Runs",order:6,content:`
## Overview

This page walks through complete model training pipelines at different scales and complexity levels. Starting with standard tabular data, progressing through high-dimensional feature selection, mixed data types, big data with Parquet, and finally multimodal fusion.

**Datasets used:**
- Breast Cancer Wisconsin (Diagnostic) — 569 samples, 30 features
- Synthetic high-dimensional data — 50k rows, 1000 features
- Synthetic mixed-type data — 50k rows, 1000 features (numeric + categorical)
- Synthetic massive data — 2M rows, 30 features (Parquet format)
- Synthetic multimodal data — 500 samples (tabular + text + image)

---

## 1. Optimized Decision Tree

### Pipeline Steps

1. **Load & Split** — stratified train/test split (80/20)
2. **Grid Search** — exhaustive search over hyperparameters with 5-fold CV
3. **Evaluate** — report best parameters and test F1-score
4. **Visualize** — plot the final pruned tree structure

### Hyperparameter Grid

\`\`\`python
param_grid = {
    'criterion': ['gini', 'entropy'],
    'max_depth': [3, 4, 5, 6],
    'min_samples_leaf': [2, 5, 10]
}
\`\`\`

| Parameter | Values | Purpose |
|---|---|---|
| criterion | gini, entropy | Split quality metric |
| max_depth | 3–6 | Pre-pruning: cap tree depth |
| min_samples_leaf | 2, 5, 10 | Pre-pruning: min samples per leaf |

### Key Code

\`\`\`python
from sklearn.model_selection import GridSearchCV
from sklearn.tree import DecisionTreeClassifier

grid_search = GridSearchCV(
    estimator=DecisionTreeClassifier(random_state=42),
    param_grid=param_grid,
    cv=5,
    scoring='f1',
    n_jobs=-1
)

grid_search.fit(X_train, y_train)
best_tree = grid_search.best_estimator_

print(f"Optimal Parameters: {grid_search.best_params_}")
print(f"Optimized Test F1-Score: {best_tree.score(X_test, y_test):.4f}")
\`\`\`

### Tree Visualization

\`\`\`python
from sklearn.tree import plot_tree
import matplotlib.pyplot as plt

plt.figure(figsize=(20, 10))
plot_tree(
    best_tree,
    feature_names=data.feature_names,
    class_names=data.target_names,
    filled=True,
    rounded=True,
    fontsize=10
)
plt.title("Optimized Decision Tree Structure")
plt.show()
\`\`\`

### Interview Angles

- **Why Grid Search?** Exhaustive search guarantees finding the best combination within the specified grid. Trade-off: computationally expensive for large grids.
- **Why F1-score?** The breast cancer dataset is slightly imbalanced (~37% malignant). F1 balances precision and recall better than accuracy.
- **Pre-pruning vs Post-pruning:** This example uses pre-pruning (limiting depth/leaf samples). Post-pruning (cost-complexity pruning) often yields better generalization but requires growing the full tree first.
- **Visualization value:** Being able to explain a single tree path (e.g., "if worst area > 755, go left…") demonstrates interpretability — a key advantage over black-box models.

> **💡 Tip:** Always set random_state for reproducibility. Even with splitter='best', tie-breaking between equally good splits is random.

---

## 2. Random Forest

### Pipeline Steps

1. **Baseline** — train an untuned RF with 100 trees
2. **Tune** — GridSearchCV over a broader hyperparameter space
3. **Evaluate** — classification report on test set
4. **OOB Score** — out-of-bag estimate without a separate validation set
5. **Feature Importance** — permutation importance (more reliable than Gini)

### Hyperparameter Grid

\`\`\`python
param_grid = {
    'n_estimators': [100, 200, 300],
    'max_depth': [None, 10, 20, 30],
    'min_samples_split': [2, 5, 10],
    'min_samples_leaf': [1, 2, 4],
    'max_features': ['sqrt', 'log2'],
}
\`\`\`

| Parameter | Values | Purpose |
|---|---|---|
| n_estimators | 100–300 | Number of trees in the forest |
| max_depth | None, 10, 20, 30 | Tree depth limit |
| min_samples_split | 2, 5, 10 | Min samples to split a node |
| min_samples_leaf | 1, 2, 4 | Min samples at a leaf |
| max_features | sqrt, log2 | Features considered per split |

### Key Code

\`\`\`python
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV

# Baseline
rf_base = RandomForestClassifier(n_estimators=100, random_state=42, n_jobs=-1)
rf_base.fit(X_train, y_train)
print(f"Baseline Accuracy: {rf_base.score(X_test, y_test):.4f}")

# Tuned
grid = GridSearchCV(
    RandomForestClassifier(random_state=42),
    param_grid, cv=5, scoring='f1', n_jobs=-1
)
grid.fit(X_train, y_train)
best_rf = grid.best_estimator_
print(f"Best CV F1: {grid.best_score_:.4f}")

# Evaluate
y_pred = best_rf.predict(X_test)
print(classification_report(y_test, y_pred, target_names=data.target_names))
\`\`\`

### Out-of-Bag (OOB) Score

\`\`\`python
oob_rf = RandomForestClassifier(
    n_estimators=300, oob_score=True, random_state=42
)
oob_rf.fit(X_train, y_train)
print(f"OOB Score: {oob_rf.oob_score_:.4f}")
\`\`\`

OOB uses the ~37% of samples not included in each bootstrap sample as a built-in validation set — no need for a separate holdout set during training.

### Permutation Importance

\`\`\`python
from sklearn.inspection import permutation_importance

perm_imp = permutation_importance(
    best_rf, X_test, y_test, n_repeats=10, random_state=42
)
feat_imp = pd.Series(perm_imp.importances_mean, index=data.feature_names)
feat_imp.sort_values(ascending=False).head(15).plot(
    kind='barh', color='purple', alpha=0.7
)
plt.title('Top 15 Features (Permutation Importance)')
plt.gca().invert_yaxis()
plt.tight_layout()
plt.show()
\`\`\`

**Why permutation importance over Gini importance?**

- Gini importance is biased toward high-cardinality features
- Permutation importance measures actual performance drop when a feature is shuffled — more reliable and model-agnostic

### Interview Angles

- **Bagging intuition:** Each tree sees a different bootstrap sample. Errors average out → variance reduction without increasing bias.
- **Feature randomness:** At each split, only √p features are considered (classification). This decorrelates trees, making the ensemble more robust.
- **OOB score:** A free validation metric. If OOB score ≈ CV score, your model is stable. Large gaps suggest overfitting.
- **When to increase n_estimators:** Diminishing returns after ~200–300 trees. More trees = slower training/prediction with minimal gain.

> **⚠️ Common Pitfall:** Forgetting n_jobs=-1 in GridSearchCV. Without it, search runs single-threaded and is painfully slow.

---

## 3. XGBoost (Extreme Gradient Boosting)

### Pipeline Steps

1. **Load & Split** — same stratified split
2. **Train with Early Stopping** — monitor validation logloss, stop if no improvement for 20 rounds
3. **Evaluate** — accuracy, AUC-ROC, classification report
4. **Feature Importance** — gain-based importance plot

### Key Hyperparameters

\`\`\`python
xgb = XGBClassifier(
    n_estimators=500,        # Upper bound; early stopping will find optimal
    max_depth=4,             # Shallow trees for boosting
    learning_rate=0.05,      # Shrinkage — lower = more robust, needs more trees
    subsample=0.8,           # Row subsampling per tree
    colsample_bytree=0.8,    # Feature subsampling per tree
    reg_alpha=0.1,           # L1 regularization on leaf weights
    reg_lambda=1.0,          # L2 regularization on leaf weights
    eval_metric='logloss',
    early_stopping_rounds=20,
    random_state=42
)
\`\`\`

| Parameter | Value | Purpose |
|---|---|---|
| n_estimators | 500 | Upper bound; early stopping finds actual best iteration |
| max_depth | 4 | Shallow trees prevent overfitting in boosting |
| learning_rate | 0.05 | Lower = slower learning, better generalization |
| subsample | 0.8 | Stochastic gradient boosting — rows sampled per tree |
| colsample_bytree | 0.8 | Feature subsampling per tree |
| reg_alpha | 0.1 | L1 regularization (sparsity) |
| reg_lambda | 1.0 | L2 regularization (smoothing) |
| early_stopping_rounds | 20 | Stop if no improvement in 20 consecutive rounds |

### Key Code

\`\`\`python
from xgboost import XGBClassifier
from sklearn.metrics import roc_auc_score, classification_report

xgb.fit(
    X_train, y_train,
    eval_set=[(X_test, y_test)],
    verbose=False
)

print(f"Best iteration: {xgb.best_iteration}")
print(f"Test Accuracy: {xgb.score(X_test, y_test):.4f}")
print(f"Test AUC-ROC: {roc_auc_score(y_test, xgb.predict_proba(X_test)[:, 1]):.4f}")
print(classification_report(y_test, xgb.predict(X_test), target_names=data.target_names))
\`\`\`

### Gain-Based Feature Importance

\`\`\`python
imp = xgb.feature_importances_
feat_imp = pd.Series(imp, index=data.feature_names).sort_values(ascending=False)
feat_imp.head(15).plot(kind='barh', color='coral', alpha=0.7)
plt.title('Top 15 Features (XGBoost Gain)')
plt.gca().invert_yaxis()
plt.tight_layout()
plt.show()
\`\`\`

XGBoost's feature_importances_ is gain-based — how much each feature contributes to reducing the loss function across all trees. This is generally more informative than Gini importance.

### Interview Angles

- **Why early stopping?** Prevents overfitting by halting training when validation performance plateaus. The best_iteration attribute tells you the optimal number of trees.
- **Learning rate vs n_estimators trade-off:** Lower learning_rate → need more trees → more robust model. Rule of thumb: if you halve learning_rate, double n_estimators.
- **Subsampling:** Both row (subsample) and column (colsample_bytree) subsampling add randomness, reducing overfitting. This is XGBoost's built-in regularization.
- **Regularization parameters:** reg_alpha (L1) drives some leaf weights to zero → sparsity. reg_lambda (L2) smooths leaf weights. Together they prevent any single tree from dominating.
- **AUC-ROC vs Accuracy:** AUC measures ranking quality (probability calibration). Accuracy is threshold-dependent. Report both in interviews.

> **🎯 Interview Gold Standard:** "I would start with a baseline model (logistic regression or decision tree), then move to ensemble methods. For tabular data, XGBoost is often the best choice because it handles non-linearities, interactions, and regularization automatically. I'd use early stopping to prevent overfitting, and permutation importance for interpretability."

---

## 4. Feature Selection: Less Rows, More Columns

**Scenario:** 50,000 rows, 1,000 features (50 informative, 50 redundant, 900 noise). When features outnumber rows, feature selection is critical to avoid overfitting and reduce computational cost.

### Pipeline Steps

1. **Variance Threshold** — remove constant/near-constant features
2. **Correlation Filter** — drop highly correlated pairs (>0.95), keeping the one with stronger target correlation
3. **Statistical Tests (Mutual Information)** — remove features with near-zero relationship to target
4. **L1 Regularization (Logistic Regression)** — embedded feature selection via sparsity
5. **Tree Importance Validation (Random Forest)** — sanity check remaining features
6. **Final Model (XGBoost)** — train on the curated feature set

### Step-by-Step Implementation

\`\`\`python
from sklearn.feature_selection import VarianceThreshold, mutual_info_classif, SelectFromModel
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from xgboost import XGBClassifier

# Generate synthetic data: 50k rows, 1000 features
X, y = make_classification(
    n_samples=50000, n_features=1000,
    n_informative=50, n_redundant=50, random_state=42
)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
\`\`\`

#### Step 1: Variance Threshold

\`\`\`python
selector_var = VarianceThreshold(threshold=0.01)
selector_var.fit(X_train)
features_kept_var = X_train.columns[selector_var.get_support()]
X_train = X_train[features_kept_var]
X_test = X_test[features_kept_var]
print(f"Features remaining: {X_train.shape[1]}")
\`\`\`

Removes features with variance below threshold — catches constant columns and near-constants.

#### Step 2: Correlation Filter

\`\`\`python
corr_matrix = X_train.corr().abs()
target_corr = X_train.apply(lambda col: col.corr(y_train)).abs()

upper_tri = corr_matrix.where(np.triu(np.ones(corr_matrix.shape), k=1).astype(bool))
to_drop = set()

for col in upper_tri.columns:
    high_corr_features = upper_tri.index[upper_tri[col] > 0.95].tolist()
    for hc_feat in high_corr_features:
        if target_corr[col] > target_corr[hc_feat]:
            to_drop.add(hc_feat)
        else:
            to_drop.add(col)

X_train = X_train.drop(columns=list(to_drop))
X_test = X_test.drop(columns=list(to_drop))
\`\`\`

Highly correlated features (redundant) are reduced to one — keeps the one more correlated with the target.

#### Step 3: Mutual Information

\`\`\`python
mi_scores = mutual_info_classif(X_train, y_train, random_state=42)
mi_series = pd.Series(mi_scores, index=X_train.columns)
features_to_keep_mi = mi_series[mi_series > 0.001].index
X_train = X_train[features_to_keep_mi]
X_test = X_test[features_to_keep_mi]
\`\`\`

Mutual information captures non-linear relationships that correlation misses. Filters out pure noise features.

#### Step 4: L1 Regularization

\`\`\`python
l1_model = LogisticRegression(
    solver='saga',
    l1_ratio=1.0,
    C=0.05,
    random_state=42,
    max_iter=1000
)
l1_selector = SelectFromModel(l1_model)
l1_selector.fit(X_train, y_train)
features_kept_l1 = X_train.columns[l1_selector.get_support()]
X_train = X_train[features_kept_l1]
X_test = X_test[features_kept_l1]
\`\`\`

L1 regularization drives coefficients of irrelevant features to exactly zero — built-in feature selection. **Critical:** L1 requires scaled data (StandardScaler) to work fairly across features.

#### Step 5: Random Forest Validation

\`\`\`python
rf = RandomForestClassifier(n_estimators=100, random_state=42, n_jobs=-1)
rf.fit(X_train, y_train)
rf_importances = pd.DataFrame({
    'Feature': X_train.columns,
    'Importance': rf.feature_importances_
}).sort_values(by='Importance', ascending=False)
print(rf_importances.head(5))
\`\`\`

Sanity check: if top features make domain sense, the pipeline is trustworthy.

#### Step 6: Final XGBoost Model

\`\`\`python
xgb = XGBClassifier(n_estimators=200, learning_rate=0.05, random_state=42, n_jobs=-1)
xgb.fit(X_train, y_train)
y_pred = xgb.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Trained on {X_train.shape[1]} features. Accuracy: {accuracy:.4f}")
\`\`\`

### Interview Angles

- **Why sequential filtering?** Each step removes a different type of bad feature: variance removes constants, correlation removes redundancy, MI removes noise, L1 removes weak signals. Together they're more powerful than any single method.
- **Why L1 needs scaling:** Without StandardScaler, features with large magnitudes (e.g., salary = 60000) get penalized more than small-magnitude features (e.g., binary flags = 0/1), regardless of actual predictive power.
- **Data leakage prevention:** Split data BEFORE feature selection. Never fit selectors on the full dataset — this leaks test information into training.
- **When to stop:** After L1, you typically have 20–200 features left. Further selection is optional and domain-dependent.

> **💡 Tip:** This pipeline is called the "Six Sigma of Feature Selection" — progressively tighter filters that leave only high-quality signal.

---

## 5. Feature Selection: Complex Data (Mixed Types)

**Scenario:** 50,000 rows, 1,000 features including continuous numeric, discrete identifiers, ordinal categorical, nominal categorical, binary categorical, and constant columns.

### The Challenge

Real-world data is messy. You cannot apply a single feature selection method to all types. This pipeline handles mixed data with proper preprocessing.

### Data Composition

| Feature Type | Example | Encoding Strategy |
|---|---|---|
| Continuous Numerical | salary | StandardScaler |
| Discrete/Identifier | pincode | OrdinalEncoder (treat as categorical) |
| Ordinal Categorical | education (High School < Bachelors < Masters < PhD) | OrdinalEncoder |
| Nominal Categorical | department (Tech, Sales, HR...) | OrdinalEncoder |
| Binary Categorical | is_remote (Yes/No) | OrdinalEncoder |
| Constant | constant_col | Removed by VarianceThreshold |

### Preprocessing Pipeline

\`\`\`python
from sklearn.preprocessing import OrdinalEncoder, StandardScaler

# Identify column types
cat_cols = X_train.select_dtypes(include=['object', 'category']).columns.tolist()
num_cols = X_train.select_dtypes(include=['number']).columns.tolist()

# 1. Encode categoricals (including string pincodes)
encoder = OrdinalEncoder(handle_unknown='use_encoded_value', unknown_value=-1)
X_train[cat_cols] = encoder.fit_transform(X_train[cat_cols])
X_test[cat_cols] = encoder.transform(X_test[cat_cols])

# 2. Scale ALL features (L1 regularization REQUIRES this)
scaler = StandardScaler()
X_train = pd.DataFrame(scaler.fit_transform(X_train), columns=X_train.columns, index=X_train.index)
X_test = pd.DataFrame(scaler.transform(X_test), columns=X_test.columns, index=X_test.index)
\`\`\`

**Why OrdinalEncoder instead of OneHotEncoder?**

- OneHotEncoding would explode 5 categorical columns into potentially hundreds of binary columns
- OrdinalEncoder keeps feature count manageable (1 column per categorical)
- Tree-based models handle ordinal encoding well — they split on threshold values

**Why StandardScaler before L1?**

- L1 regularization penalizes coefficient magnitudes
- Without scaling, features with large natural ranges (salary ~60000) get penalized more than small-range features (binary 0/1)
- Scaling ensures fair regularization across all features

### Feature Selection (Same 6-Step Pipeline)

After preprocessing, apply the same sequential pipeline:

1. Variance Threshold — removes constant_col
2. Correlation Filter — drops redundant features
3. Mutual Information — filters noise
4. L1 Regularization — embedded selection
5. RF Validation — sanity check
6. XGBoost Final — train on curated features

### Key Insight: Order Matters

\`\`\`python
# WRONG ORDER — don't do this:
# 1. OneHotEncode (explodes feature count)
# 2. Try to select features (now working with 2000+ columns)

# RIGHT ORDER:
# 1. Encode smartly (OrdinalEncoder keeps count low)
# 2. Scale (required for L1)
# 3. Select features (working with manageable 1000 columns)
# 4. Train model
\`\`\`

### Interview Angles

- **Ordinal vs OneHot for trees:** Trees can split on ordinal-encoded categoricals (e.g., education ≤ 1.5 splits "High School/Bachelors" from "Masters/PhD"). OneHot creates sparse features that trees struggle with.
- **Why scale before L1:** L1 penalty is applied to coefficient magnitudes. A feature with range [0, 100000] needs a much smaller coefficient than [0, 1]. Without scaling, L1 unfairly penalizes large-range features.
- **Handling unknown categories:** handle_unknown='use_encoded_value' prevents crashes on test data with unseen categories.

> **⚠️ Common Pitfall:** Using OneHotEncoder for high-cardinality categoricals. A feature with 100 unique values becomes 100 binary columns, diluting predictive power and slowing training. Use OrdinalEncoder for tree-based models.

---

## 6. Big Data: Parquet + LightGBM + Online Learning

**Scenario:** 2 million rows, 30 features. Traditional CSV loading is slow and memory-inefficient. This section covers Parquet storage, subsampling for prototyping, full-scale LightGBM training, and online learning for incremental updates.

### Why Parquet?

| Format | Read Speed | Compression | Columnar | Schema Evolution |
|---|---|---|---|---|
| CSV | Slow | Poor | No | No |
| Parquet | Fast | Excellent | Yes | Yes |

Parquet is columnar — you can read only the columns you need without loading the entire file. For 2M rows, this difference is 10-100x faster.

### Step 0: Data Generation & Parquet Storage

\`\`\`python
import pandas as pd
import numpy as np
import lightgbm as lgb
import os

n_rows = 2_000_000
n_features = 30

# Generate data
X_array, y_array = make_classification(
    n_samples=n_rows, n_features=n_features,
    n_informative=15, random_state=42
)

df = pd.DataFrame(X_array, columns=[f"feat_{i}" for i in range(n_features)])
df = df.astype(np.float32)  # Downcast 64-bit to 32-bit to save RAM
df['target'] = y_array.astype(np.int8)

# Save as Parquet
parquet_path = "massive_dataset.parquet"
df.to_parquet(parquet_path, engine='pyarrow', index=False)
print(f"File size: {os.path.getsize(parquet_path) / (1024*1024):.2f} MB")

# Clear RAM — data is now on disk
del df, X_array, y_array
\`\`\`

**Memory optimization:** Downcasting float64 → float32 and int64 → int8 cuts memory usage by 50-75%.

### Step 1: Prototyping on Subsample

\`\`\`python
# Read only 10% of data for fast iteration
df_sample = pd.read_parquet(parquet_path).sample(frac=0.1, random_state=42)
X_proto = df_sample.drop(columns=['target'])
y_proto = df_sample['target']

# Quick prototype model
clf_proto = lgb.LGBMClassifier(n_estimators=50, random_state=42, n_jobs=-1)
clf_proto.fit(X_proto, y_proto)
print(f"Prototype trained on {len(df_sample)} rows")

del df_sample, X_proto, y_proto, clf_proto  # Free memory
\`\`\`

**Why prototype?** Training on 2M rows takes minutes. If your pipeline has bugs, you'll waste hours. Prototype on 10% (200k rows) to validate the pipeline, then scale up.

### Step 2: Full-Scale LightGBM with GOSS

\`\`\`python
# Load full dataset
df_full = pd.read_parquet(parquet_path)
X_train, X_test, y_train, y_test = train_test_split(
    df_full.drop(columns=['target']), df_full['target'],
    test_size=0.1, random_state=42
)

# LightGBM with Gradient-based One-Side Sampling (GOSS)
params = {
    'objective': 'binary',
    'metric': 'binary_error',
    'boosting_type': 'goss',  # GOSS: keeps high-gradient points, samples low-gradient
    'max_bin': 255,           # Histogram bins (hardware-efficient)
    'learning_rate': 0.05,
    'num_leaves': 63,
    'verbose': -1
}

lgb_train = lgb.Dataset(X_train, y_train)
lgb_eval = lgb.Dataset(X_test, y_test, reference=lgb_train)

bst = lgb.train(
    params,
    lgb_train,
    num_boost_round=200,
    valid_sets=[lgb_train, lgb_eval],
    callbacks=[lgb.early_stopping(stopping_rounds=10)]
)
\`\`\`

**GOSS (Gradient-based One-Side Sampling):**

- Keeps all data points with large gradients (high error, still learning)
- Randomly samples a fraction of small-gradient points (already well-learned)
- Amplifies weights of sampled small-gradient points to preserve distribution
- Result: Processes fewer data points per split → dramatically faster training

### Step 3: Online Learning (Incremental Updates)

\`\`\`python
# New data arrives (e.g., 1 month later)
X_new, y_new = make_classification(n_samples=50000, n_features=n_features, random_state=99)

lgb_new_data = lgb.Dataset(X_new, y_new)

# Update existing model — NO need to retrain from scratch!
bst_updated = lgb.train(
    params,
    lgb_new_data,
    num_boost_round=50,  # Just add 50 new trees
    init_model=bst,      # PASS EXISTING MODEL HERE
    valid_sets=[lgb_new_data]
)
\`\`\`

Online learning lets you incrementally update models with new data. Instead of retraining on 2M + 50k rows, you train 50 additional trees on just the new data. This is critical for production systems with continuous data streams.

### Interview Angles

- **Parquet vs CSV:** Parquet is columnar, compressed, and schema-aware. For big data, it's 10-100x faster to read specific columns. Always use Parquet for datasets >1GB.
- **Prototyping strategy:** Always validate on a subsample before full training. It catches pipeline bugs in minutes, not hours.
- **GOSS intuition:** Not all data points are equally informative. Points with high gradient (large errors) need attention; points with low gradient are already learned. Sampling the easy points speeds up training without losing accuracy.
- **Online learning:** In production, data distributions shift over time (concept drift). Online learning lets models adapt without full retraining. XGBoost and LightGBM both support init_model for this.

> **💡 Tip:** For massive datasets, use float32 instead of float64 and int8 instead of int64. This halves memory usage with negligible accuracy loss for most ML models.

---

## 7. Multimodal Data: Text + Image + Tabular

**Scenario:** 500 samples with three data modalities — structured tabular features, unstructured text reviews, and image data. This section demonstrates feature extraction and fusion for multimodal learning.

### Data Composition

| Modality | Raw Format | Features | Extraction Method |
|---|---|---|---|
| Tabular | age, salary, credit_score | 3 | Direct (scaled) |
| Text | Product reviews | 10 | TF-IDF → TruncatedSVD |
| Image | 224×224 RGB images | 20 | ResNet18 → PCA |

### Step 1: Text Feature Extraction (TF-IDF → SVD)

\`\`\`python
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import TruncatedSVD

reviews = [
    "Terrible product, broke immediately.",
    "Absolutely love it, highly recommend!",
    "It's okay, nothing special but gets the job done.",
    "Fast shipping, excellent quality.",
    "Customer service was completely unhelpful."
]
text_data = [reviews[i % 5] for i in range(n_rows)]

# TF-IDF: convert text to term frequency matrix
vectorizer = TfidfVectorizer(stop_words='english')
text_tfidf = vectorizer.fit_transform(text_data)

# SVD: compress sparse TF-IDF to dense embeddings
svd = TruncatedSVD(n_components=10, random_state=42)
text_features = svd.fit_transform(text_tfidf)
df_text = pd.DataFrame(text_features, columns=[f"text_feat_{i}" for i in range(10)])
\`\`\`

**Why TF-IDF → SVD?**

- TF-IDF creates a sparse matrix (vocabulary size × samples)
- SVD (Latent Semantic Analysis) compresses to dense embeddings capturing semantic meaning
- Reduces thousands of TF-IDF dimensions to 10–50 meaningful components

### Step 2: Image Feature Extraction (ResNet → PCA)

\`\`\`python
import torch
import torchvision.models as models
import torchvision.transforms as transforms
from sklearn.decomposition import PCA

# Load pretrained ResNet18 (remove final classification layer)
resnet = models.resnet18(pretrained=True)
resnet = torch.nn.Sequential(*(list(resnet.children())[:-1]))
resnet.eval()

# Normalize images (ImageNet stats)
normalize = transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])

# Extract 512-dim embeddings from ResNet
with torch.no_grad():
    for i in range(0, n_rows, 50):
        batch = images_tensor[i:i+50]
        batch = torch.stack([normalize(img) for img in batch])
        embeddings = resnet(batch)
        embeddings = embeddings.squeeze(-1).squeeze(-1)
        image_features_list.append(embeddings.numpy())

raw_image_features = np.vstack(image_features_list)

# PCA: compress 512 → 20 components
pca = PCA(n_components=20, random_state=42)
compressed_image_features = pca.fit_transform(raw_image_features)
df_image = pd.DataFrame(compressed_image_features, columns=[f"img_pca_feat_{i}" for i in range(20)])
\`\`\`

**Why pretrained ResNet?**

- ResNet18 is trained on ImageNet (1.2M images, 1000 classes)
- The penultimate layer learns rich visual features (edges, textures, shapes)
- Transfer learning: reuse these features instead of training from scratch
- PCA reduces 512 → 20 to avoid overwhelming the tabular/text features

### Step 3: Feature Fusion

\`\`\`python
# Combine all modalities
X_combined = pd.concat([df_tabular, df_text, df_image], axis=1)
print(f"Final shape: {X_combined.shape}")  # (500, 33) = 3 tabular + 10 text + 20 image

X_train, X_test, y_train, y_test = train_test_split(X_combined, y, test_size=0.2)
\`\`\`

**Fusion strategy:** Simple concatenation works well when modalities have similar scales. For more complex scenarios, consider:

- **Early fusion:** Concatenate raw features (this example)
- **Late fusion:** Train separate models per modality, combine predictions
- **Hybrid fusion:** Intermediate-level combination with learned weights

### Step 4: Final Model (XGBoost)

\`\`\`python
xgb = XGBClassifier(
    n_estimators=100,
    learning_rate=0.1,
    max_depth=4,
    random_state=42,
    n_jobs=-1
)

xgb.fit(X_train, y_train)
y_pred = xgb.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Final Accuracy: {accuracy:.4f}")

# Check feature importance across modalities
importances = xgb.feature_importances_
print(f"Tabular 'age' importance: {importances[0]:.4f}")
print(f"Top text feature importance: {importances[3]:.4f}")
print(f"Top image feature importance: {importances[13]:.4f}")
\`\`\`

### Interview Angles

- **Why transfer learning for images?** Training a CNN from scratch requires millions of images. Pretrained ResNet18 already knows edges, textures, and shapes — we just repurpose it for our task.
- **Why PCA after ResNet?** 512-dim embeddings are overkill for 500 samples. PCA prevents the image features from dominating the tabular features in importance rankings.
- **Multimodal fusion challenges:** Different modalities have different scales, missing patterns, and noise levels. Always normalize/scale before fusion. Consider weighted fusion if one modality is clearly stronger.
- **When to use late fusion:** If modalities are independent (e.g., text reviews and X-ray images for disease diagnosis), train separate experts and combine predictions. This handles missing modalities gracefully.

> **🎯 Interview Gold Standard:** "For multimodal data, I extract features from each modality using domain-specific pretrained models — TF-IDF/SVD for text, ResNet for images, raw/scaled for tabular. Then I fuse them via concatenation and train a tree-based model like XGBoost, which handles heterogeneous features naturally. If one modality is missing at inference time, I can fall back to the remaining modalities or use late fusion for robustness."

---

## Model Comparison Summary

| Aspect | Decision Tree | Random Forest | XGBoost | LightGBM |
|---|---|---|---|---|
| **Type** | Single tree | Bagging (parallel) | Boosting (sequential) | Boosting (sequential) |
| **Primary goal** | Interpretability | Variance reduction | Bias reduction | Speed + accuracy |
| **Overfitting risk** | High | Low | Medium (early stopping) | Medium-High (leaf-wise) |
| **Training speed** | Fast | Moderate | Slower | Fastest (GOSS) |
| **Hyperparameters** | Few | Many | Many | Many |
| **Feature importance** | Gini/entropy | Permutation (reliable) | Gain-based | Gain-based |
| **Best for** | Baseline, explanation | General purpose | Competition/winning | Large datasets |

### When to Choose Which

| Scenario | Recommended Model | Why |
|---|---|---|
| Need to explain decisions | Decision Tree | Fully interpretable path |
| General purpose, robust baseline | Random Forest | Low variance, minimal tuning |
| Maximum predictive performance | XGBoost | State-of-art for tabular data |
| Very large dataset (>100K rows) | LightGBM | GOSS + histogram = fastest |
| Need probability estimates | XGBoost | Well-calibrated probabilities |
| Online learning / incremental updates | LightGBM | Supports init_model for warm starts |
| Fast inference required | Decision Tree | Single tree, O(depth) prediction |
| Multimodal data | XGBoost | Handles heterogeneous features |

---

## Practical Takeaways

1. **Always start with a baseline** — a simple model gives you a performance floor and helps debug data issues.
2. **Tune systematically** — GridSearchCV or RandomizedSearchCV with cross-validation. Never tune on the test set.
3. **Use early stopping** — for boosting models, it's the most effective regularization technique.
4. **Prefer permutation importance** — over built-in Gini/gain importance when explaining to stakeholders.
5. **Report multiple metrics** — accuracy alone is misleading. Include F1, AUC-ROC, and confusion matrix for classification.
6. **Set random_state everywhere** — ensures reproducibility in experiments and interviews.
7. **For high-dimensional data:** Sequential feature selection (variance → correlation → MI → L1) beats any single method.
8. **For mixed data types:** OrdinalEncoder + StandardScaler is the sweet spot for tree-based models.
9. **For big data:** Parquet + LightGBM GOSS + prototyping on subsamples = production-ready pipeline.
10. **For multimodal data:** Extract features with pretrained models, fuse via concatenation, train XGBoost.

> **💡 Interview Tip:** When asked "Which model would you use?", never give a single answer. Say: "It depends on the constraints — interpretability needs, dataset size, latency requirements, feature dimensionality, and whether we're optimizing for precision or recall. I'd start simple and scale complexity only when needed."
`},py=Object.freeze(Object.defineProperty({__proto__:null,default:hy},Symbol.toStringTag,{value:"Module"})),fy={slug:"model-selection-guide",title:"Model Selection & Real-World ML",order:5,content:`
## The ML Project Lifecycle: The Complete Flow

Building a production ML model is a sequence of dependent decisions. Each step constrains the next. Understanding this flow prevents the most common ML mistakes: choosing a model before understanding the data, engineering features after model selection, or deploying without monitoring.

**The 8-step lifecycle:**

1. **Problem Definition** — What are we solving? What does success look like?
2. **Data Understanding** — What do we have? What is missing? What is the scale?
3. **Data Preprocessing** — Handle missing values, outliers, encoding
4. **Feature Engineering** — Create new features from raw data
5. **Feature Selection** — Remove irrelevant or redundant features
6. **Model Selection & Training** — Choose algorithm, tune, validate
7. **Evaluation & Error Analysis** — Does it meet the business threshold?
8. **Deployment & Monitoring** — Serve predictions, track performance, retrain

**Critical timing rules:**
- Feature engineering happens **before** model selection, but iterates **after** initial model results reveal which features matter.
- Feature selection happens **after** initial feature engineering but **before** final model tuning. Running it too early leaks test information. Running it too late wastes compute.
- Model selection is the **middle** of the pipeline, not the beginning. Choosing XGBoost before understanding your data is like choosing a car before knowing if you need to drive on water.

> **💡 Interview Tip:** The biggest differentiator between junior and senior ML engineers is that seniors spend 70% of their time on steps 1-5 (problem through feature selection) and only 30% on steps 6-8 (model through deployment). Juniors do the reverse.

---

## Step 1-2: Understanding Your Data Before Choosing Anything

### The Data Assessment Checklist

Before touching any model, answer these questions. Each answer constrains your downstream choices:

**Scale questions (determine which algorithms are feasible):**
- How many rows? (<1K → simple models. 1K-100K → most models. 100K-10M → gradient boosting. >10M → LightGBM or distributed.)
- How many features? (<50 → use all. 50-500 → consider selection. >500 → must reduce.)
- What is the memory footprint? (If >80% of RAM, you need sampling or streaming.)

**Quality questions (determine preprocessing needs):**
- What percentage of values are missing per feature? (<5% → median. 5-30% → KNN/imputation. >30% → drop or indicator.)
- Are there outliers? (Tree models: robust. Linear models/svm: must handle.)
- What are the feature types? (Continuous, categorical, text, images — each needs different encoding.)

**Target questions (determine metrics and model type):**
- What is the class distribution? (Balanced → accuracy OK. Imbalanced → need F1/AUC.)
- Is the target variable well-defined? (Ambiguous labels → clean data first.)
- Is there data leakage? (Features derived from the target or from the future.)

**Constraint questions (determine deployment architecture):**
- What is the inference latency requirement? (<1ms → LR. <10ms → small trees. <100ms → any tree model. No limit → any model.)
- Must the model be interpretable? (Regulated industries → LR/DT. Unregulated → any.)
- How often does the data change? (Static → train once. Streaming → online learning.)

> **⚠️ Common Pitfall:** Skipping data understanding and jumping to model selection. A data scientist who picks XGBoost without checking class distribution, missing values, or data leakage will build a model that looks great in training but fails in production.

### Dataset Size: What Changes at Each Tier

| Dataset Size | Characteristics | Recommended Approach | Why |
|---|---|---|---|
| **<1K rows** | Very limited signal, high overfitting risk | Logistic Regression, small Decision Tree, k-NN | Simple models have fewer parameters to overfit. Complex models need more data to generalize. |
| **1K - 100K rows** | Moderate signal, most algorithms work | Random Forest, XGBoost, LightGBM, SVM | Enough data for tree ensembles and kernel methods. Cross-validation is reliable. |
| **100K - 10M rows** | Strong signal, training time matters | LightGBM (histogram splitting), XGBoost with early stopping | LightGBM's GOSS + EFB make it 10x faster than XGBoost at this scale. |
| **>10M rows** | Abundant signal, compute is the bottleneck | LightGBM with distributed training (Dask/Spark), deep learning | LightGBM can handle 10M rows in minutes. For >100M, use Spark or GPU training. |

**Why dataset size matters for model choice:**
- **Small datasets** have high variance — complex models memorize rather than learn. Bias is acceptable; variance is the enemy. Use simple models.
- **Large datasets** have low variance — complex models can learn genuine patterns without overfitting. Bias becomes the enemy. Use complex models.

---

## Step 3-4: Feature Engineering — Building the Right Inputs

### The Feature Engineering Flow

The correct order of operations:

1. **Handle missing values** (before anything else — models cannot process NaN)
2. **Encode categoricals** (convert text categories to numbers)
3. **Create derived features** (interactions, aggregations, domain-specific)
4. **Scale numerical features** (only for distance-based models: SVM, KNN, neural networks)
5. **Handle temporal features** (lags, rolling windows, calendar)
6. **Iterate based on model results** (check feature importance, engineer new features)

**Why this order:** Each step depends on the previous. You cannot create interaction features from unencoded categoricals. You cannot scale features that still contain NaN. And you should not finalize feature engineering until you see which features the model actually uses.

### Handling Missing Values: The Decision Tree

**First, understand WHY values are missing:**

| Mechanism | Example | What It Means | Strategy |
|---|---|---|---|
| **MCAR** (random) | Lab equipment malfunction | Missingness is unrelated to anything | Any imputation works. Even deletion is OK if <5% missing. |
| **MAR** (depends on observed data) | Older patients skip certain tests | Missingness depends on other features you have | Use KNN or iterative imputation (predict missing values from other features). |
| **MNAR** (depends on the missing value itself) | Rich people do not report income | The missingness IS the signal | Create a binary "is_missing" feature AND impute. The missingness itself is informative. |

**Practical rules:**
- <5% missing: Median imputation is fine. The impact is negligible.
- 5-30% missing: Use KNN imputation or \`IterativeImputer\`. Simple median loses relationships between features.
- >30% missing: Create an "is_missing" indicator column, then impute. Or consider dropping the feature if it has no predictive power.
- For XGBoost/LightGBM: Let the algorithm handle it natively. It learns the optimal handling from the data, often outperforming manual imputation.

> **💡 Why this matters:** Incorrect imputation can introduce bias. If rich people do not report income (MNAR), imputing with the median income biases the model toward middle-income predictions. The "is_missing" flag captures the signal that income was not reported.

### Encoding Categorical Features: Why Method Matters

The encoding method determines how the model perceives categories:

| Method | What It Does | When It Works | When It Fails |
|---|---|---|---|
| **One-hot encoding** | Creates binary column per category | Low cardinality (<20 categories) | High cardinality: 1000 categories = 1000 sparse columns. Tree models waste splits on irrelevant columns. |
| **Label encoding** | Assigns integer per category | Ordinal features (low < medium < high) | Nominal features: forces arbitrary order. Tree models learn "Red=0, Blue=1, Green=2" implies Red < Blue < Green. |
| **Target encoding** | Replaces category with mean of target | High cardinality, tree models | Without regularization: overfits. Always use smoothing + cross-validation. |
| **Frequency encoding** | Replaces category with its count | When frequency correlates with target | When rare categories are important (they get the same low frequency). |
| **Embedding encoding** | Learns dense vector per category | Very high cardinality (100K+ categories) | Requires neural network architecture. Not compatible with tree models directly. |

**Why target encoding is the best default for tree models with high cardinality:**
- It compresses N categories into 1 numerical feature.
- Similar categories (with similar target means) get similar values.
- Tree models can immediately split on this feature, unlike one-hot where they must find the right column among 1000.

> **⚠️ Common Pitfall:** Target encoding without cross-validation causes data leakage. The encoded feature leaks information about the target variable. Always compute target means using only the training fold during cross-validation.

### Creating Derived Features: The Art of Feature Engineering

The most impactful feature engineering creates features that capture **domain knowledge**:

**Interaction features (capture combined effects):**
- \`age * income\` — A 25-year-old earning $200K is different from a 65-year-old earning $200K.
- \`price * discount_pct\` — A $100 item at 50% off ($50 effective) vs. a $10 item at 50% off ($5 effective).
- \`visit_count * days_since_last_visit\` — Frequent recent visitors vs. infrequent old visitors.

**Aggregation features (capture patterns across groups):**
- \`avg_purchase_amount_per_user\` — User spending behavior.
- \`days_since_last_transaction\` — Recency (strongest predictor in many domains).
- \`num_transactions_last_7d\` — Velocity (detects sudden behavior changes).

**Domain-specific features:**
- **E-commerce:** Cart abandonment rate, browse-to-purchase ratio, price sensitivity score.
- **Healthcare:** Medication interaction count, lab trend slope, visit frequency.
- **Finance:** Debt-to-income ratio, credit utilization, payment history streak.

> **💡 Why feature engineering often matters more than model choice:** A well-engineered feature set with Logistic Regression frequently outperforms a raw feature set with XGBoost. Features determine what the model CAN learn. The algorithm determines HOW it learns.

### Time Series Feature Engineering: Why Standard Approaches Fail

Time series data has a fundamental constraint: **you cannot use future information to predict the past.** This eliminates many standard feature engineering approaches.

**Correct approach (point-in-time features):**
\`\`\`python
# WRONG: Using today's data to predict today
df['avg_sales_today'] = df['sales'].rolling(7).mean()  # LEAKS FUTURE DATA

# RIGHT: Using yesterday's data to predict today
df['avg_sales_7d'] = df['sales'].shift(1).rolling(7).mean()  # NO LEAKAGE
\`\`\`

**Essential time series features:**
- **Lag features:** What was the value 1 day, 7 days, 30 days ago? (Captures autocorrelation.)
- **Rolling statistics:** Mean, std, min, max over sliding windows. (Smooths noise, reveals trends.)
- **Calendar features:** Day of week, month, is_weekend, is_holiday. (Captures seasonality.)
- **Trend features:** Slope of recent values, rate of change. (Captures direction of movement.)
- **Seasonality:** Fourier features for daily, weekly, yearly patterns.

> **💡 Interview Tip:** For time series, always emphasize that you must use **temporal splits** (train on past, validate on future) — never random splits. Random splits cause data leakage from the future into the past, producing artificially high accuracy.

### Feature Engineering for Massive Datasets (>10M rows)

When you have millions of rows, feature engineering becomes a **compute problem**:

1. **Pre-compute in batch:** Run feature engineering on a schedule (daily/weekly) and store results in a feature store.
2. **Use efficient operations:** Vectorized pandas operations, not row-by-row loops. For >100M rows, use Dask or Spark.
3. **Feature hashing:** For high-cardinality categoricals, hash into a fixed number of buckets. Trade some accuracy for massive memory savings.
4. **Subsample for prototyping:** Develop features on 100K rows, then scale to full data once the pipeline is validated.
5. **Feature store:** Centralized repository (Feast, Tecton, Redis) that serves pre-computed features at prediction time. This eliminates training-serving skew.

> **⚠️ Common Pitfall:** Computing features differently in training vs. production. In training, you use the full dataset. In production, you only have data up to the current moment. Always use point-in-time features during training to simulate production conditions.

---

## Step 5: Feature Selection — Reducing Dimensionality

### When Feature Selection Happens

Feature selection happens **after** initial feature engineering and **before** final model tuning:

1. Engineer features (create interactions, encode, aggregate)
2. Train a quick baseline model (Random Forest or XGBoost with all features)
3. **Run feature selection** (identify which features matter)
4. Retrain the final model with selected features
5. Iterate if results are unsatisfactory

**Why this timing:** Running feature selection before feature engineering means you are selecting from incomplete features. Running it after final model tuning wastes compute on irrelevant features.

### Methods by Dataset Size

**<50 features:** Do NOT run feature selection. Use all features. The risk of removing a useful feature outweighs the marginal benefit of removal.

**50-500 features:** Start with correlation filter (remove pairs with >0.95 correlation). Then use tree-based importance to rank features. Keep top 50-100.

**500-5000 features:** Use L1 regularization (Lasso) to automatically select features. Or use PCA for dimensionality reduction. Then apply tree importance on the reduced set.

**>5000 features (text, genomics):** Use domain-specific selection first (TF-IDF for text, statistical tests for genomics). Then apply model-based selection on the reduced set.

### The Golden Rule of Feature Selection

**NEVER run feature selection on the entire dataset before splitting into train/test.** This leaks information from the test set into the feature selection process, causing overly optimistic evaluation. Always perform feature selection **within** cross-validation folds.

---

## Step 6: Model Selection — Choosing the Right Algorithm

### The Baseline-First Approach

Always start simple and add complexity only when needed:

**Step 6a: Establish a baseline (30 minutes)**

Train Logistic Regression (classification) or Linear Regression (regression). This takes 5 minutes and tells you:
- What accuracy floor to expect
- Which features are most predictive (coefficients)
- Whether the problem is learnable at all

If the baseline is already good enough for the business, **stop here.** Do not add complexity for marginal gains.

**Step 6b: Try tree-based models (1-2 hours)**

If the baseline is insufficient, try Random Forest. RF requires minimal tuning, does not overfit with more trees, and provides feature importance. If RF is good enough, stop here.

**Step 6c: Try gradient boosting (2-4 hours)**

If RF is not sufficient, try XGBoost or LightGBM. These typically achieve the highest accuracy for tabular data but require more tuning and are prone to overfitting without early stopping.

**Step 6d: Try deep learning (if applicable)**

Only when the data is unstructured (text, images, audio) or when tabular models are genuinely insufficient. Deep learning requires large datasets, GPU compute, and significant engineering effort.

### Why Each Model Is Chosen Over Alternatives

**Logistic Regression — Why start here:**
- Trains in seconds on any dataset size
- Coefficients directly tell you feature importance and direction
- Interpretable: "Each additional year of age increases default risk by 3%"
- Regularization (L1/L2) provides automatic feature selection and overfitting control
- Serves as a performance floor — no complex model should perform worse

**Random Forest — Why try it next:**
- Handles mixed feature types (continuous + categorical) without preprocessing
- Does not overfit with more trees (converges to a limit)
- Built-in OOB validation (no need for a separate validation set)
- Robust to outliers and noisy features
- Feature importance reveals which features matter

**XGBoost/LightGBM — Why use them for maximum accuracy:**
- Sequential error correction captures patterns that parallel bagging misses
- Built-in L1/L2 regularization prevents overfitting
- Early stopping automatically finds the optimal number of trees
- Consistently wins Kaggle tabular competitions
- Handles missing values natively (XGBoost, LightGBM)

**Deep Learning — Why use it (and when not to):**
- **Use when:** Data is unstructured (text, images, audio), or you need to learn complex non-linear representations automatically
- **Do not use when:** Data is tabular with <100K rows, you need interpretability, or inference latency must be <10ms
- **Why:** Neural networks have millions of parameters. They need massive data to generalize. On tabular data with moderate size, gradient boosting usually wins.

### The Latency vs Accuracy Tradeoff

| Inference Budget | Best Choice | Why |
|---|---|---|
| <1ms | Logistic Regression | Dot product + sigmoid is a single CPU instruction |
| <5ms | Small Decision Tree (depth 3-5) | Traversing 5 nodes is trivially fast |
| <10ms | Random Forest (100 trees, depth 10) | Parallel tree traversal |
| <50ms | XGBoost/LightGBM (100-500 trees) | Sequential but optimized |
| <100ms | Any tree ensemble | Including larger ensembles |
| No limit | Deep learning, large ensembles | Full model complexity |

---

## Step 7: Complex Real-World Scenarios

### Scenario: 1000+ Features, 50K Rows (High-Dimensional, Small Dataset)

**The problem:** More features than samples means extreme overfitting risk. Every model will find patterns in noise.

**The flow:**

1. **Variance threshold:** Remove features with near-zero variance (constant or near-constant values). These provide no information.
2. **Correlation filter:** Remove features with >0.95 pairwise correlation. Keep the one with higher individual correlation to the target.
3. **Statistical tests:** Run mutual information or chi-squared tests to rank features by relevance to the target.
4. **L1 regularization:** Train a Logistic Regression with L1 penalty. Features with zero weights are irrelevant. This typically reduces 1000 features to 50-100.
5. **Tree importance validation:** Train a Random Forest on the L1-selected features. Compare importance rankings. If they agree, the selection is robust.
6. **Final model:** Train XGBoost/LightGBM on the selected 50-100 features.

**Why this order:** Each step reduces the feature space further, making the next step more effective. L1 regularization on 1000 features with 50K rows is feasible. XGBoost on 1000 features with 50K rows would overfit badly.

### Scenario: 10M+ Rows (Massive Dataset)

**The problem:** Training time becomes the bottleneck. A single XGBoost training run might take hours.

**The flow:**

1. **Start with LightGBM:** Histogram-based splitting + GOSS + EFB makes it 10x faster than XGBoost on large datasets.
2. **Subsample for prototyping:** Train on 1M rows first. If results are good, scale to full data. If not, the issue is likely features or labels, not data size.
3. **Feature engineering in batch:** Pre-compute features using Dask or Spark. Store in Parquet format for fast loading.
4. **Distributed training:** If LightGBM on a single machine is too slow, use Dask-LightGBM or Spark MLlib for distributed training across multiple machines.
5. **Online learning:** If new data arrives continuously (e.g., clickstream), consider SGDClassifier or online variants of tree models that update incrementally.

**Why LightGBM over XGBoost at this scale:** LightGBM's histogram-based splitting evaluates only 255 bin boundaries instead of sorting all unique values. GOSS reduces the number of data points processed. EFB reduces the number of features scanned. Combined, these give 10-100x speedup on large datasets.

### Scenario: Live Streaming Data (Real-Time Predictions)

**The problem:** Features must be computed in real-time from a data stream. You cannot use future data. The model must score each event in <10ms.

**The flow:**

1. **Feature store:** Pre-compute batch features (user history, aggregates) and store in Redis/Kafka. These are served in <1ms.
2. **Streaming features:** Compute real-time features (velocity, recency) using a streaming framework (Flink, Kafka Streams). These update with each new event.
3. **Point-in-time correctness:** During training, use only features that would have been available at prediction time. Never use future aggregates.
4. **Model serving:** Deploy a lightweight model (Logistic Regression or small tree) via ONNX Runtime for <5ms inference.
5. **Concept drift monitoring:** Track prediction distributions daily. If the distribution shifts significantly, retrain the model.

**Why a feature store is essential:** Without a feature store, you compute features differently in training (batch, full history) vs. production (streaming, partial history). This training-serving skew causes the model to perform well in testing but fail in production.

### Scenario: Mixed Data Types (Tabular + Text + Images)

**The problem:** No single model handles all modalities. Text needs transformers, images need CNNs, tabular needs tree models.

**The flow (feature-level fusion — the most practical approach):**

1. **Process text separately:** Use TF-IDF or DistilBERT to extract text features (e.g., sentiment score, topic distribution, keyword counts).
2. **Process images separately:** Use a pre-trained CNN (ResNet) to extract image features (e.g., embedding vectors).
3. **Combine with tabular features:** Concatenate text features + image features + tabular features into a single feature vector.
4. **Train a tree model on the combined vector:** XGBoost or LightGBM handles the mixed feature types and learns interactions across modalities.

**Why this works better than end-to-end multi-modal models:**
- Each modality is processed by the best model for that data type.
- The tree model can handle the heterogeneous feature types (some are probabilities, some are embeddings, some are raw numbers).
- Easier to debug: if text features are not helping, you can remove them without retraining the image model.

---

## Step 8: Deployment and Production Constraints

### The Real-World Constraints Checklist

Every production model must satisfy these constraints. Failing any one of them can cause the project to fail:

| Constraint | What to Check | Consequence of Ignoring |
|---|---|---|
| **Inference latency** | Can the model score predictions within the SLA? | Slow predictions → user frustration, lost revenue |
| **Memory footprint** | Does the model fit in production server memory? | Out-of-memory errors,无法 deploy |
| **Training time** | Can the model retrain within the maintenance window? | Cannot update the model, performance degrades |
| **Interpretability** | Can you explain every prediction to a stakeholder? | Regulatory fines, loss of trust |
| **Missing value handling** | Can the model handle NaN in production features? | Crashes at prediction time |
| **Distribution shift** | Will the model perform well when data changes? | Silent performance degradation |
| **Reproducibility** | Can you reproduce the exact same model from the same data? | Cannot debug, cannot audit |
| **Cost** | Is the compute/training cost within budget? | Project gets cancelled |

### Training-Serving Skew: The Silent Killer

The most common cause of production ML failures is **training-serving skew** — when the model performs differently in production than in testing.

**Common causes:**
1. **Feature computation differences:** Training uses batch features with full history. Production uses streaming features with partial history.
2. **Data preprocessing differences:** Training uses \`StandardScaler.fit_transform()\` on the full dataset. Production uses a different scaler fitted on different data.
3. **Timestamp leakage:** Training uses future data to predict the past. Production only has past data.
4. **Version mismatches:** Training uses sklearn 1.2. Production has sklearn 1.3, which changed a default parameter.

**Prevention:** Always use the same feature pipeline, the same preprocessing objects, and the same model version in training and production. Use a feature store to serve pre-computed features.

### Concept Drift and Data Drift

**Data drift:** The distribution of input features changes over time (e.g., more young users in production than training). The model still works, but the features it sees are different.

**Concept drift:** The relationship between features and target changes over time (e.g., what constitutes "fraud" evolves as fraudsters adapt). The model's learned patterns become obsolete.

**Monitoring strategy:**
1. Log prediction distributions daily. Alert if the mean or variance shifts significantly.
2. Monitor feature distributions using PSI (Population Stability Index). PSI > 0.2 indicates significant drift.
3. Track model performance on labeled data as it becomes available (weekly/monthly).
4. Set up automatic retraining triggers when performance drops below a threshold.

---

## Real-World Examples: Full Pipeline Walkthroughs

### Example 1: E-Commerce Product Recommendation

**Business:** Show personalized product recommendations on the homepage. Must load in <200ms. 50M users, 10M products.

**Why a two-stage architecture:** No single model can search 10M products in <200ms. Split into retrieval (find 1000 candidates fast) and ranking (score 1000 candidates accurately).

**Pipeline:**
1. **Feature engineering:** User embeddings (purchase history, demographics), item embeddings (category, price, reviews). Pre-computed offline.
2. **Retrieval:** Two-tower deep model + FAISS approximate nearest neighbor. Finds 1000 candidates in <10ms.
3. **Ranking:** XGBoost re-ranks 1000 candidates using rich features. In <50ms.
4. **Post-processing:** Business rules (diversity, freshness, inventory).

**Why XGBoost for ranking (not deep learning):** XGBoost handles mixed feature types (user features + item features + interaction features), is faster to retrain weekly, and its tree structure naturally captures non-linear interactions.

### Example 2: Hospital Readmission (Interpretability-First)

**Business:** Predict 30-day readmission. Must be explainable to doctors. 40% missing lab values.

**Why Logistic Regression over XGBoost:** FDA requires explainable models. LR coefficients directly say "each additional medication increases risk by X%." XGBoost cannot provide this without SHAP, which is not yet FDA-approved as a primary explanation method.

**Pipeline:**
1. **Imputation:** IterativeImputer for labs (predicts missing values from other features, preserving correlations).
2. **Feature engineering:** Interaction features (age x medications, lab_trend x visit_frequency).
3. **Model:** Logistic Regression with L1 regularization (feature selection + interpretability).
4. **Validation:** XGBoost + SHAP as a "second opinion" to verify LR findings.

### Example 3: Real-Time Fraud Detection (Latency-Critical)

**Business:** Score 50K transactions/second in <10ms. FP cost $10, FN cost $500. Fraud patterns shift weekly.

**Why Logistic Regression for real-time scoring:** LR inference is <1ms (dot product + sigmoid). XGBoost takes 5-20ms. At 50K TPS, even 5ms creates a 250-second backlog.

**Pipeline:**
1. **Feature engineering:** Velocity features (transactions in last 1h/24h/7d), geographic features, merchant risk scores. Pre-computed.
2. **Real-time scoring:** Logistic Regression. <1ms per transaction.
3. **Batch retraining:** XGBoost trained weekly. Its predictions become features for the real-time model.
4. **Anomaly detection:** Isolation Forest on 1-hour sliding window catches novel fraud patterns.

### Example 4: Credit Scoring (Regulatory Compliance)

**Business:** Approve/deny loans in real-time. Must explain every denial. ECOA regulatory requirement.

**Why Scorecard + LR over XGBoost:** XGBoost's AUC is 5% higher, but it cannot generate the plain-English adverse action notices regulators require. The 5% accuracy sacrifice is worth legal compliance.

### Example 5: NLP Sentiment (Cascade Architecture)

**Business:** Classify 10M reviews. Must handle sarcasm and slang. Batch processing overnight.

**Why a cascade over using BERT for everything:** BERT on 10M reviews = 13.9 hours of GPU. LR on 10M reviews = 1.4 hours of CPU. The cascade (LR first, BERT for uncertain cases) achieves 99.2% agreement with BERT-on-all at 10% of the cost.

### Example 6: Manufacturing Quality Control (Cost-Driven)

**Business:** Detect wafer defects. FN costs $50K, FP costs $50. Must achieve >99.5% recall.

**Why ResNet ensemble over YOLO:** YOLO is faster (10ms vs 45ms) but has 97% recall vs 99.5%. The 2.5% recall difference = 2.5 more missed defects/day = $125K/day in avoided defect escapes.

---

## Quick Reference: Model Selection by Scenario

| Scenario | Best Choice | Why | Avoid |
|---|---|---|---|
| **Baseline needed fast** | Logistic Regression | 5-minute train, interpretable, sets performance floor | Deep learning (overkill) |
| **Tabular, max accuracy** | XGBoost/LightGBM | Sequential error correction + regularization | Neural networks (overkill for tabular) |
| **Large dataset (>10M rows)** | LightGBM | Histogram splitting + GOSS = 10x faster than XGBoost | XGBoost (too slow) |
| **Interpretability required** | LR + SHAP | Coefficients + per-instance explanations | Black-box ensembles |
| **Real-time (<10ms)** | Logistic Regression | <1ms inference | Deep learning (too slow) |
| **Text data** | TF-IDF + LR (simple) or DistilBERT (complex) | Right tool for the data type | Tree models on raw text |
| **Image data** | Fine-tuned ResNet/EfficientNet | Pre-trained features capture visual patterns | Hand-crafted features |
| **Time series** | LightGBM + temporal features | Tree models with lag/rolling features outperform ARIMA | Random splits (data leakage) |
| **Extreme imbalance** | Anomaly detection framing | Isolation Forest does not need balanced labels | Standard classifiers |
| **Streaming data** | Feature store + LR | Pre-computed features + fast inference | Real-time deep learning |

> **🎯 Interview Gold Standard Answer:** "My approach follows a structured lifecycle: I start with data understanding, then feature engineering, then feature selection, then baseline modeling, then iterative improvement. I never pick an algorithm before understanding the data. For tabular data, I start with Logistic Regression as a baseline, move to Random Forest for robustness, then XGBoost/LightGBM for maximum accuracy. I only use deep learning for unstructured data. Every choice is driven by the business constraints: latency, interpretability, cost, and data scale."
`},gy=Object.freeze(Object.defineProperty({__proto__:null,default:fy},Symbol.toStringTag,{value:"Module"})),yy={slug:"random-forest-ensemble",title:"Random Forest & Ensemble Learning",order:3,content:`
## The Bias-Variance Tradeoff: Why Ensembles Exist

Every machine learning model suffers from two types of error: **bias** (systematic underfitting) and **variance** (sensitivity to training data fluctuations). A single Decision Tree pushed to full depth achieves near-zero bias but extreme variance — it memorizes training data. A shallow tree has low variance but high bias. Ensembles solve this by combining many imperfect models to reduce total error.

The mathematical decomposition of expected prediction error is:

$$\\text{Error} = \\text{Bias}^2 + \\text{Variance} + \\text{Irreducible Noise}$$

You cannot eliminate all three simultaneously. Ensembles strategically attack one component while keeping the other in check.

---

## Bagging (Bootstrap Aggregating)

**Goal:** Reduce **variance** without increasing bias.

**Mechanism:** Train $n$ independent models on bootstrap samples (random samples with replacement), then aggregate their predictions by averaging (regression) or majority vote (classification).

**Why it works mathematically:** When you average $n$ independent predictions, each with variance $\\sigma^2$:

$$\\text{Var}(\\text{average}) = \\frac{\\sigma^2}{n}$$

The variance decreases inversely with the number of models. However, this formula assumes the models are **uncorrelated**. In practice, bootstrap samples are 63.2% unique, so trees are somewhat correlated — but feature randomization (as in Random Forest) drives correlation down.

**Out-of-Bag (OOB) Estimation:** Since each bootstrap sample leaves out ~36.8% of the original data, these OOB samples serve as a built-in validation set for each tree. The OOB score is computed by aggregating predictions only on the OOB samples, providing a reliable estimate of generalization error **without needing a separate validation set**. This is a unique advantage of bagging methods.

---

## Boosting (Sequential Error Correction)

**Goal:** Reduce **bias** (and variance of the ensemble) by sequentially training models that correct previous errors.

**Mechanism:** Train models one at a time. Each new model is fitted to the **residual errors** (or gradient of the loss) of the ensemble so far. The final prediction is a weighted sum of all models' contributions.

**Key insight:** While bagging averages many high-variance, low-bias models to reduce variance, boosting combines many low-variance, high-bias (shallow) models to reduce bias. This is why boosting typically achieves higher accuracy on clean data but is more prone to overfitting.

**The learning rate (shrinkage):** Each boosting round contributes only a fraction (determined by the learning rate) to the final prediction. Lower learning rates (0.01-0.05) require more trees but produce better generalization — a fundamental tradeoff between speed and accuracy.

| Aspect | Bagging | Boosting |
|---|---|---|
| Training | Parallel (independent) | Sequential (each corrects the last) |
| Primary Target | Variance reduction | Bias reduction |
| Overfitting Risk | Low (converges with more trees) | Higher (needs early stopping / regularization) |
| Base Learner | Deep trees (low bias, high variance) | Shallow trees (high bias, low variance) |
| Speed | Faster (parallelizable) | Slower (inherently sequential) |
| Interpretability | Feature importance is stable | Feature importance less stable |
| Missing Values | Manual imputation needed | Native handling (XGBoost, LightGBM) |
| Examples | Random Forest | XGBoost, LightGBM, AdaBoost |

> **💡 Interview Tip:** When asked "Bagging vs Boosting?", start with the bias-variance lens: "Bagging targets variance by averaging diverse models. Boosting targets bias by sequentially correcting errors. The choice depends on whether your model is overfitting (use bagging) or underfitting (use boosting)."

---

## Deep Dive: Random Forest (The Bagging King)

Random Forest takes bagging and adds **feature randomization** (subspace sampling) to decorrelate trees. Without this, all bootstrap trees would pick the same dominant feature for their root split, making them highly correlated — and averaging correlated models barely reduces variance.

### The Two Sources of Randomness

1. **Bootstrap sampling:** Each tree sees a different random subset of rows (with replacement). About 36.8% of rows are left out per tree (OOB data).
2. **Feature subspace sampling:** At each split, the tree can only consider a random subset of $M$ total features:
   - **Classification:** $\\sqrt{M}$ features (default in scikit-learn)
   - **Regression:** $M/3$ features (default in scikit-learn)

### Why Feature Randomization is the Secret Sauce

Consider a dataset with one dominant feature that explains 80% of the variance. Without feature randomization, every tree picks that feature first, making all trees nearly identical. Averaging identical trees gives you... the same tree.

The ensemble variance formula makes this precise:

$$\\text{Var}(\\text{ensemble}) = \\rho \\sigma^2 + \\frac{1-\\rho}{n} \\sigma^2$$

Where $\\rho$ is the average pairwise correlation between trees and $n$ is the number of trees. When $\\rho = 1$ (perfectly correlated), the ensemble has the same variance as a single tree — no improvement. When $\\rho = 0$ (independent), variance drops to $\\sigma^2 / n$. Feature randomization is the mechanism that drives $\\rho$ toward zero.

### Out-of-Bag Error Analysis

The OOB score is not just a convenience — it is a reliable estimate of test-set performance. Research has shown that OOB error converges to the leave-one-out cross-validation error as the number of trees grows. You can also use OOB samples to:

- **Detect overfitting:** If OOB score plateaus while training accuracy keeps rising, the model is overfitting.
- **Estimate feature importance:** OOB-based permutation importance is more reliable than Gini importance.
- **Assess calibration:** Compare OOB probability estimates with actual outcomes.

### Feature Importance: Three Flavors

1. **Gini Importance (Mean Decrease in Impurity):** How much each feature reduces impurity across all splits. Fast but biased toward high-cardinality features (e.g., a feature with 100 unique values appears more important than one with 2, even with equal predictive power).
2. **Permutation Importance:** Randomly shuffle each feature's values and measure the drop in model performance. More reliable than Gini importance but computationally expensive.
3. **SHAP Values:** Game-theoretic approach that attributes each prediction to individual features. Provides both global importance and per-instance explanations. The gold standard for interpretability.

> **⚠️ Common Pitfall:** Blindly trusting Gini importance. If a categorical feature has 500 unique values, it will dominate the importance ranking even if it is useless. Always cross-validate with permutation importance or SHAP values.

---

## Practical Examples: When Random Forest Shines

### Example 1: Medical Diagnosis (Classification)

A hospital wants to predict patient readmission within 30 days based on 200 clinical features (lab results, medications, demographics, visit history).

**Why RF works:**
- **Robust to noisy features:** Many clinical measurements are noisy or irrelevant. RF's feature subspace sampling means each tree ignores most noise features.
- **Handles mixed feature types:** Lab values (continuous), medications (binary), and visit counts (integer) all work without special preprocessing.
- **OOB validation:** With limited patient data, OOB scoring avoids wasting data on a hold-out set.
- **Stable feature importance:** Clinicians need to know which factors drive readmission risk. RF provides consistent importance rankings.

### Example 2: Customer Churn Prediction (Classification)

A telecom company wants to predict which customers will cancel their subscription. The dataset has 50 features, 10% class imbalance (churners are minority), and some missing values.

**Why RF works:**
- **Class imbalance:** RF handles moderate imbalance well because the ensemble averages out the biased decisions individual trees make on the minority class.
- **Feature interactions:** RF automatically captures interactions like "high monthly charges AND low usage = high churn risk" without manual feature engineering.
- **Missing values:** While scikit-learn's RF does not handle NaN, imputing with median (via SimpleImputer) works well because RF is robust to imputation noise.

### Example 3: Real Estate Valuation (Regression)

Predicting house prices from 30 features including square footage, location, school ratings, and crime rates.

**Why RF works:**
- **Non-linear relationships:** RF captures the fact that square footage matters more in good school districts — a complex interaction that linear models miss.
- **Robust to outliers:** A single mansion with a $10M price tag does not skew the entire model — it only affects the trees where that house appears in the bootstrap sample.
- **No feature scaling needed:** Unlike neural networks or SVMs, RF works equally well with raw feature values.

> **💡 Interview Tip:** When explaining RF in interviews, always mention the "wisdom of the crowd" analogy: "Imagine asking 100 financial analysts, each given a different random subset of data fields, to make independent predictions. The average of all 100 predictions is far more reliable than any single analyst's judgment."

---

## Random Forest: End-to-End Python Implementation

\`\`\`python
import numpy as np
import pandas as pd
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import (
    classification_report, confusion_matrix,
    accuracy_score, roc_auc_score
)
from sklearn.inspection import permutation_importance
import matplotlib.pyplot as plt
import seaborn as sns

# 1. Load and split
data = load_breast_cancer()
X = pd.DataFrame(data.data, columns=data.feature_names)
y = data.target
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# 2. Baseline (untuned)
rf_base = RandomForestClassifier(n_estimators=100, random_state=42, n_jobs=-1)
rf_base.fit(X_train, y_train)
print(f"Baseline Accuracy: {rf_base.score(X_test, y_test):.4f}")

# 3. Hyperparameter tuning
param_grid = {
    'n_estimators': [100, 200, 300],
    'max_depth': [None, 10, 20, 30],
    'min_samples_split': [2, 5, 10],
    'min_samples_leaf': [1, 2, 4],
    'max_features': ['sqrt', 'log2'],
}
grid = GridSearchCV(
    RandomForestClassifier(random_state=42),
    param_grid, cv=5, scoring='f1', n_jobs=-1
)
grid.fit(X_train, y_train)
best_rf = grid.best_estimator_
print(f"Best CV F1: {grid.best_score_:.4f}")

# 4. Evaluate
y_pred = best_rf.predict(X_test)
print(classification_report(y_test, y_pred, target_names=data.target_names))

# 5. OOB Score
oob_rf = RandomForestClassifier(
    n_estimators=300, oob_score=True, random_state=42
)
oob_rf.fit(X_train, y_train)
print(f"OOB Score: {oob_rf.oob_score_:.4f}")

# 6. Permutation Importance (more reliable than Gini)
perm_imp = permutation_importance(
    best_rf, X_test, y_test, n_repeats=10, random_state=42
)
feat_imp = pd.Series(perm_imp.importances_mean, index=data.feature_names)
feat_imp.sort_values(ascending=False).head(15).plot(
    kind='barh', color='purple', alpha=0.7
)
plt.title('Top 15 Features (Permutation Importance)')
plt.gca().invert_yaxis()
plt.tight_layout()
plt.show()
\`\`\`

---

## Random Forest Hyperparameter Deep Dive

| Hyperparameter | Default | Effect of Increasing | When to Change |
|---|---|---|---|
| **n_estimators** | 100 | More trees = lower variance, diminishing returns | Always increase until OOB score plateaus. RF does NOT overfit with more trees. |
| **max_depth** | None | Deeper trees = more complex, higher variance | Limit to 10-30 for noisy data. None works well for clean data. |
| **min_samples_split** | 2 | Fewer splits = simpler model | Increase to 5-10 when overfitting. |
| **min_samples_leaf** | 1 | Larger leaves = smoother predictions | Increase to 2-5 for noisy data. Critical for preventing single-sample leaves. |
| **max_features** | sqrt(M) | More features per split = higher correlation between trees | Decrease for more diversity. Never set to 1.0 — defeats the purpose. |
| **bootstrap** | True | False = Pasting (no replacement) | Almost always True. Setting False eliminates OOB scoring. |

---

## Deep Dive: XGBoost (Extreme Gradient Boosting)

XGBoost is the most popular algorithm for tabular data in Kaggle competitions and production systems. It takes gradient boosting and adds mathematical rigor, regularization, and engineering optimizations that make it both more accurate and more robust than vanilla gradient boosting.

### The Mathematical Core: Second-Order Taylor Expansion

Traditional gradient boosting uses only the **first derivative** (gradient) of the loss function to determine the direction of improvement. XGBoost goes further by using a **second-order Taylor expansion**, incorporating both the gradient ($g_i$) and the Hessian ($h_i$, second derivative):

$$L^{(t)} \\approx \\sum_{i=1}^{n} [g_i f_t(x_i) + \\frac{1}{2} h_i f_t^2(x_i)] + \\Omega(f_t) + \\text{constant}$$

This gives XGBoost two advantages:
1. **Faster convergence:** Understanding curvature allows larger, more accurate steps.
2. **Custom loss functions:** Any twice-differentiable loss function can be optimized by providing its gradient and Hessian.

### The Gain Formula: How XGBoost Decides Splits

For a potential split into left ($L$) and right ($R$) children:

$$\\text{Gain} = \\frac{1}{2} \\left[ \\frac{(\\sum g_L)^2}{\\sum h_L + \\lambda} + \\frac{(\\sum g_R)^2}{\\sum h_R + \\lambda} - \\frac{(\\sum g_P)^2}{\\sum h_P + \\lambda} \\right] - \\gamma$$

- $\\lambda$ (reg_lambda): L2 regularization on leaf weights — higher values produce smoother predictions
- $\\gamma$ (gamma): Minimum loss reduction required to make a split — acts as a pruning threshold
- The formula directly trades off prediction accuracy against model complexity

### XGBoost's Systemic Innovations

**Sparsity-Aware Splitting:** XGBoost handles missing values natively. During training, it learns the optimal "default direction" (left or right) for missing values by trying both and choosing whichever minimizes loss. This means you do NOT need to impute missing values — XGBoost learns the best imputation strategy from the data.

**Column Block (Weighted Quantile Sketch):** For large datasets, XGBoost pre-sorts features into blocks and uses a quantile sketch algorithm to find approximate split points. This allows it to handle datasets that do not fit in memory.

**Built-in Regularization:** L1 ($\\alpha$) and L2 ($\\lambda$) regularization on leaf weights prevent overfitting — a feature Random Forest lacks entirely. This is why XGBoost can achieve lower test error than RF even with aggressive tree growth.

**Early Stopping:** XGBoost supports monitoring performance on a validation set during training and stopping when performance degrades. This automatically finds the optimal number of boosting rounds, preventing overfitting.

### When XGBoost Outperforms Random Forest

- **Clean tabular data with clear signal:** XGBoost's sequential error correction captures patterns that parallel bagging misses.
- **When you need the highest possible accuracy:** XGBoost consistently wins Kaggle tabular competitions.
- **When regularization is critical:** Built-in L1/L2 regularization allows aggressive tree growth without overfitting.
- **When you have missing values:** Native sparsity-aware handling is superior to manual imputation.

### When XGBoost Underperforms

- **Very noisy data:** Sequential boosting can overfit to noise. RF is more robust.
- **Small datasets (<1000 rows):** RF's parallel averaging is more stable with limited data.
- **When training speed matters:** XGBoost is slower than RF and LightGBM on large datasets.

> **⚠️ Common Pitfall:** Using high learning_rate (>0.3) with many trees. Each tree makes large corrections, causing rapid overfitting. Always prefer low learning_rate (0.01-0.1) with more trees and use early stopping.

---

## XGBoost: End-to-End Python Implementation

\`\`\`python
import numpy as np
import pandas as pd
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from xgboost import XGBClassifier
from sklearn.metrics import (
    classification_report, accuracy_score, roc_auc_score
)
import matplotlib.pyplot as plt

# 1. Load data
data = load_breast_cancer()
X = pd.DataFrame(data.data, columns=data.feature_names)
y = data.target
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# 2. Train with early stopping
xgb = XGBClassifier(
    n_estimators=500,
    max_depth=4,
    learning_rate=0.05,
    subsample=0.8,
    colsample_bytree=0.8,
    reg_alpha=0.1,
    reg_lambda=1.0,
    eval_metric='logloss',
    early_stopping_rounds=20,
    random_state=42
)
xgb.fit(
    X_train, y_train,
    eval_set=[(X_test, y_test)],
    verbose=False
)

print(f"Best iteration: {xgb.best_iteration}")
print(f"Test Accuracy: {xgb.score(X_test, y_test):.4f}")
print(f"Test AUC-ROC: {roc_auc_score(y_test, xgb.predict_proba(X_test)[:, 1]):.4f}")
print(classification_report(y_test, xgb.predict(target_names=data.target_names)))

# 3. Feature importance (gain-based)
imp = xgb.feature_importances_
feat_imp = pd.Series(imp, index=data.feature_names).sort_values(ascending=False)
feat_imp.head(15).plot(kind='barh', color='coral', alpha=0.7)
plt.title('Top 15 Features (XGBoost Gain)')
plt.gca().invert_yaxis()
plt.tight_layout()
plt.show()
\`\`\`

---

## XGBoost Hyperparameter Deep Dive

| Hyperparameter | Default | Effect of Increasing | When to Change |
|---|---|---|---|
| **n_estimators** | 100 | More boosting rounds = lower bias | Always use with early stopping. 100-1000+ depending on learning_rate. |
| **learning_rate** | 0.1 | Larger steps = faster but less generalizable | Lower (0.01-0.05) for best results. Requires more n_estimators. |
| **max_depth** | 6 | Deeper trees = more complex patterns | Keep shallow (3-8). Unlike RF, deep trees in boosting overfit severely. |
| **subsample** | 1.0 | Row subsampling = more diversity | 0.7-0.9 reduces overfitting (Stochastic Gradient Boosting). |
| **colsample_bytree** | 1.0 | Feature subsampling = more diversity | 0.7-0.9. Similar to RF's max_features but per boosting round. |
| **reg_alpha (L1)** | 0 | L1 on leaf weights = sparser model | 0.01-1.0 when overfitting or many features. |
| **reg_lambda (L2)** | 1 | L2 on leaf weights = smoother model | 1-10 for regularization. |
| **gamma** | 0 | Min loss reduction for split = pruning | 0.1-0.5 for conservative splitting. |
| **min_child_weight** | 1 | Min instance weight in child = simpler leaves | 3-10 prevents overfitting on small, noisy splits. |

---

## Deep Dive: LightGBM (Light Gradient Boosting Machine)

Developed by Microsoft, LightGBM was designed to solve XGBoost's scaling limitations. On datasets with millions of rows and hundreds of features, LightGBM trains **orders of magnitude faster** while using less memory.

### The Two Key Innovations

**1. Leaf-Wise Tree Growth (vs. Level-Wise)**

XGBoost grows trees level by level — every node in a row splits simultaneously, producing balanced trees. LightGBM grows trees by selecting the **single leaf** that maximizes loss reduction at each step, regardless of depth. This produces deeper, asymmetric trees that minimize loss faster.

The trade-off: leaf-wise growth can produce very deep trees that overfit. Always set \`max_depth\` as a safety net (e.g., 7-15) even though the default is unlimited.

**Rule of thumb:** For leaf-wise growth, set \`num_leaves\` < $2^{\\text{max_depth}}$. If \`num_leaves\` = $2^{\\text{max_depth}}$, the tree behaves like a level-wise tree, defeating the purpose.

**2. Gradient-Based One-Side Sampling (GOSS)**

Not all data points contribute equally to learning. Points with **large gradients** (high error) still need improvement, while points with **small gradients** (low error) are already well-learned.

GOSS keeps all high-gradient points and takes a small random sample of low-gradient points, amplifying their weights to preserve the data distribution. This reduces the number of data points the algorithm processes per split, dramatically speeding up training without losing accuracy.

**3. Exclusive Feature Bundling (EFB)**

In high-dimensional sparse data, many features are "mutually exclusive" — they are rarely non-zero at the same time. EFB bundles these features into a single combined feature, reducing the number of features to scan without losing information. This is effectively automatic dimensionality reduction.

### LightGBM's Additional Advantages

- **Histogram-based splitting:** Continuous features are binned into discrete histograms (default 255 bins). This reduces the number of split points to evaluate from O(n) to O(bins), making each split dramatically faster.
- **Native categorical feature support:** LightGBM can handle categorical features directly (without one-hot encoding) using an optimal split algorithm that considers all categories. This is a significant advantage over XGBoost and RF.
- **GPU training:** LightGBM has native GPU support for histogram construction and split finding, enabling training on millions of rows in minutes.
- **Faster training convergence:** Due to leaf-wise growth + GOSS + EFB, LightGBM typically requires fewer data passes than XGBoost to reach the same accuracy.

### When LightGBM Outperforms XGBoost

- **Large datasets (>100K rows):** Histogram-based splitting and GOSS provide dramatic speedups.
- **High-dimensional data (>100 features):** EFB reduces effective dimensionality automatically.
- **Categorical features:** Native handling avoids the preprocessing overhead and information loss of one-hot encoding.
- **When training speed is critical:** LightGBM is 2-10x faster than XGBoost on large datasets.
- **GPU acceleration:** Native GPU support for further speed gains.

### When LightGBM Underperforms

- **Small datasets (<10K rows):** Histogram binning loses precision. XGBoost's exact splitting is more accurate.
- **Noisy data with many irrelevant features:** Leaf-wise growth can overfit to noise faster than level-wise growth.
- **When \`num_leaves\` is not properly tuned:** Default num_leaves=31 may be too high for simple problems, causing overfitting.

> **⚠️ Common Pitfall:** Setting \`num_leaves\` too high without constraining \`max_depth\`. If \`num_leaves=255\` and \`max_depth=-1\` (unlimited), the tree can grow extremely deep and overfit. Always set both \`num_leaves\` and \`max_depth\`.

---

## LightGBM: End-to-End Python Implementation

\`\`\`python
import numpy as np
import pandas as pd
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from lightgbm import LGBMClassifier
from sklearn.metrics import (
    classification_report, accuracy_score, roc_auc_score
)
import matplotlib.pyplot as plt

# 1. Load data
data = load_breast_cancer()
X = pd.DataFrame(data.data, columns=data.feature_names)
y = data.target
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# 2. Train with early stopping
lgbm = LGBMClassifier(
    n_estimators=500,
    num_leaves=31,
    max_depth=7,
    learning_rate=0.05,
    subsample=0.8,
    colsample_bytree=0.8,
    min_child_samples=20,
    reg_alpha=0.1,
    reg_lambda=1.0,
    verbose=-1,
    random_state=42
)
lgbm.fit(
    X_train, y_train,
    eval_set=[(X_test, y_test)],
    callbacks=[
        __import__('lightgbm').early_stopping(20),
        __import__('lightgbm').log_evaluation(0)
    ]
)

print(f"Best iteration: {lgbm.best_iteration_}")
print(f"Test Accuracy: {lgbm.score(X_test, y_test):.4f}")
print(f"Test AUC-ROC: {roc_auc_score(y_test, lgbm.predict_proba(X_test)[:, 1]):.4f}")
print(classification_report(y_test, lgbm.predict(X_test), target_names=data.target_names))

# 3. Feature importance (gain)
imp = lgbm.feature_importances_
feat_imp = pd.Series(imp, index=data.feature_names).sort_values(ascending=False)
feat_imp.head(15).plot(kind='barh', color='teal', alpha=0.7)
plt.title('Top 15 Features (LightGBM Gain)')
plt.gca().invert_yaxis()
plt.tight_layout()
plt.show()
\`\`\`

---

## LightGBM Hyperparameter Deep Dive

| Hyperparameter | Default | Effect of Increasing | When to Change |
|---|---|---|---|
| **n_estimators** | 100 | More boosting rounds | Always use with early stopping. 100-2000+ depending on learning_rate. |
| **learning_rate** | 0.1 | Larger steps | Lower (0.01-0.05) for best generalization. |
| **num_leaves** | 31 | More leaves = more complex tree | THE key parameter. 31 is safe. Increase for complex patterns. Always pair with max_depth. |
| **max_depth** | -1 | Depth limit on trees | Set to 7-15 as safety net. -1 = unlimited (risky). |
| **min_child_samples** | 20 | Min samples in leaf | 20-100 for noisy data. Prevents overfitting on small leaves. |
| **subsample** | 1.0 | Row subsampling | 0.7-0.9 for regularization. |
| **colsample_bytree** | 1.0 | Feature subsampling | 0.7-0.9. Adds diversity between trees. |
| **reg_alpha (L1)** | 0 | L1 regularization | 0.01-1.0 for feature selection. |
| **reg_lambda (L2)** | 0 | L2 regularization | 0.1-10.0 to smooth predictions. |
| **min_split_gain** | 0 | Min gain for split | 0.1-0.3 reduces overfitting. |

---

## Handling Complex Datasets: A Practical Guide

### Missing Values

| Algorithm | Strategy |
|---|---|
| **Random Forest** | Does NOT handle NaN. Impute with median/most_frequent before training. |
| **XGBoost** | Native sparsity-aware routing. Learns optimal default direction for NaN during training. |
| **LightGBM** | Native NaN handling via histogram binning. Missing values are treated as a separate bin. |

**Recommendation:** For RF, always use \`SimpleImputer(strategy='median')\`. For XGBoost and LightGBM, let the algorithm handle it natively — it often outperforms manual imputation because it learns the optimal handling from the data.

### High-Cardinality Categorical Features

One-hot encoding creates sparse matrices that dilute feature power in tree-based models. Better approaches:

1. **Target encoding:** Replace category with mean target value (with cross-validation to prevent leakage).
2. **Frequency encoding:** Replace category with its frequency in the training data.
3. **Label encoding:** For ordinal features where order matters.
4. **LightGBM native:** Pass categorical features as \`categorical_feature\` parameter — LightGBM handles them optimally.

### Class Imbalance

- **RF:** Use \`class_weight='balanced'\` or \`class_weight='balanced_subsample'\`.
- **XGBoost:** Use \`scale_pos_weight = count(negative) / count(positive)\`.
- **LightGBM:** Use \`is_unbalance=True\` or \`scale_pos_weight\`.
- **All three:** Consider SMOTE, ADASYN, or undersampling for severe imbalance.

### High-Dimensional Sparse Data

- **RF:** Reduce \`max_features\` to increase diversity among trees.
- **XGBoost:** Enable \`tree_method='gpu_hist'\` for GPU acceleration on large sparse matrices.
- **LightGBM:** EFB automatically bundles sparse features. Enable \`use_sparse=true\` for optimized sparse matrix handling.

### Feature Engineering Tips

1. **Polynomial features:** RF and boosting models capture interactions, but explicit polynomial features can still help for specific known relationships.
2. **Target encoding for categoricals:** More informative than one-hot for tree models.
3. **Binning continuous features:** Can help LightGBM's histogram approach by reducing bin boundaries.
4. **Feature selection:** Remove low-variance and highly correlated features before training. All three algorithms benefit from cleaner input.

> **💡 Interview Tip:** When asked about handling complex datasets, structure your answer: "First, I handle missing values — impute for RF, let XGBoost/LightGBM handle natively. Then, I encode categoricals — target encoding for RF/XGBoost, native handling for LightGBM. For class imbalance, I use class weights or SMOTE. For high dimensionality, I rely on the models' built-in feature subsampling and consider PCA or feature selection as a preprocessing step."

---

## When to Use Which Model: Scenario-Based Guide

| Scenario | Recommended | Why | Avoid |
|---|---|---|---|
| **Quick baseline, no time to tune** | Random Forest | Robust defaults, no overfitting with more trees, OOB validation | XGBoost/LightGBM if you cannot tune properly |
| **Maximum accuracy on clean tabular data** | XGBoost | Sequential error correction + L1/L2 regularization = best bias-variance tradeoff | RF (lower accuracy ceiling) |
| **Large dataset (>1M rows)** | LightGBM | Histogram splitting + GOSS + EFB = orders of magnitude faster | XGBoost (slower on large data) |
| **Many categorical features** | LightGBM | Native categorical handling, no encoding needed | RF/XGBoost (require encoding) |
| **Missing values in data** | XGBoost or LightGBM | Native sparsity-aware handling outperforms manual imputation | RF (requires imputation) |
| **Need extrapolation (regression)** | XGBoost or LightGBM | Both model residuals, can extrapolate beyond training range | RF (averages within training range) |
| **Noisy data with many outliers** | Random Forest | Parallel averaging is most robust to noise | LightGBM (leaf-wise overfits to noise) |
| **Interpretability matters** | Random Forest | Stable feature importance, simpler model structure | XGBoost (less stable importance) |
| **Real-time prediction (latency critical)** | Random Forest | Shallow ensemble = faster inference | Deep boosting ensembles |
| **GPU training needed** | LightGBM or XGBoost | Both have GPU support. LightGBM's is more mature. | RF (parallel CPU is sufficient) |
| **Time series with temporal leakage risk** | Random Forest | Less aggressive pattern matching reduces leakage risk | Boosting (can memorize temporal patterns) |
| **Production with minimal maintenance** | Random Forest | No early stopping needed, no learning_rate to tune | XGBoost/LightGBM (more hyperparameters) |

### Decision Flowchart

1. **Is your dataset large (>100K rows)?** → Start with LightGBM for speed.
2. **Is accuracy the top priority and you can invest time tuning?** → Try XGBoost.
3. **Do you need a robust baseline with minimal effort?** → Start with Random Forest.
4. **Are there many missing values or categorical features?** → XGBoost or LightGBM (native handling).
5. **Is the data very noisy with many irrelevant features?** → Random Forest (most robust).
6. **Do you need interpretability?** → Random Forest (stable importance) or use SHAP with any model.

---

## Comprehensive Interview Questions

### Ensemble Learning Fundamentals

**Q1: Why does averaging independent models reduce variance but not bias?**

A: Bias is a systematic error — every model makes the same directional mistake. Averaging identical systematic errors yields the same systematic error. Variance is random — each model errs differently due to training data variations. When averaged, these random errors cancel out. Formally: for $n$ models each with bias $b$ and variance $\\sigma^2$, the ensemble has bias $b$ (unchanged) and variance $\\sigma^2/n$ (reduced by factor $n$).

**Q2: What is the difference between Bagging and Pasting?**

A: Bagging samples rows **with replacement** (bootstrap), meaning some rows appear multiple times per model. Pasting samples **without replacement**, meaning each row appears at most once. Bagging is preferred because it provides OOB samples (~36.8% of data) for free validation. Pasting does not guarantee OOB samples.

**Q3: Can ensembles of weak learners actually outperform a single strong learner?**

A: Yes, under two conditions: (1) base learners are **accurate enough** (better than random), and (2) base learners are **diverse enough** (making different errors). A Random Forest achieves both: unpruned trees have low bias (accurate) and feature randomization creates diversity (low correlation). This is why RF consistently outperforms a single optimized Decision Tree.

**Q4: What is the theoretical upper bound on ensemble accuracy?**

A: For a binary classification ensemble with $n$ models each having accuracy $p > 0.5$, the ensemble accuracy (via majority vote) approaches 1 as $n \\to \\infty$, provided the models are sufficiently independent. This follows from the Law of Large Numbers. In practice, correlation between models limits this improvement.

### Random Forest Deep Dive

**Q5: Why does RF use sqrt(M) features for classification but M/3 for regression?**

A: Classification typically has one dominant feature at each split. sqrt(M) provides enough diversity to decorrelate trees while allowing good splits. Regression often needs more features to find optimal continuous splits. These defaults are heuristics — the optimal values are dataset-dependent and should be tuned.

**Q6: What happens when you increase n_estimators from 100 to 10000?**

A: The OOB/test error will decrease initially and then plateau. Unlike boosting, RF does NOT overfit with more trees — the error converges to a limit. However, computational cost increases linearly. The OOB score tells you when you have reached the plateau.

**Q7: How does RF handle multicollinearity?**

A: RF is relatively robust to multicollinearity because feature subsampling means correlated features compete for selection at each split, distributing importance across them. However, feature importance (Gini) becomes unreliable — importance is split between correlated features. Use permutation importance or SHAP for more accurate importance estimates.

**Q8: A customer asks: "My Random Forest has 99.9% training accuracy but 75% test accuracy." What do you recommend?**

A: Classic overfitting. Systematic fixes: (1) Reduce max_depth (try 10-20). (2) Increase min_samples_leaf to 5-10. (3) Reduce max_features to increase diversity. (4) Increase n_estimators. (5) Check for data leakage. (6) Verify class balance. (7) Consider removing noisy features via feature selection. The goal is a small gap between train and test accuracy, not zero training error.

### XGBoost Deep Dive

**Q9: Why does XGBoost use second-order Taylor expansion instead of just the gradient?**

A: The gradient tells you the direction of steepest descent. The Hessian (second derivative) tells you the **curvature** — how quickly the gradient changes. Using both allows XGBoost to take larger, more accurate steps toward the optimum. Think of it as the difference between walking downhill by feeling the slope (first-order) versus using a topographic map (second-order). This enables faster convergence and better handling of complex loss landscapes.

**Q10: What is the role of the gamma parameter in XGBoost?**

A: Gamma is the minimum loss reduction required to make a split. A split is only accepted if:

$$\\text{Gain} > \\gamma$$

Higher gamma values make the algorithm more conservative — fewer splits, simpler trees, less overfitting. It acts as a pruning mechanism. When gamma=0, every split that improves loss is accepted. When gamma=0.5, only splits that reduce loss by at least 0.5 are accepted.

**Q11: How does XGBoost handle missing values?**

A: During training, for each potential split, XGBoost tries sending missing values both left and right, and chooses the direction that minimizes loss. This "learned default direction" is stored in the tree structure. At prediction time, missing values follow the learned direction. This often outperforms manual imputation because it learns the optimal handling from the data.

**Q12: What is the relationship between learning_rate and n_estimators?**

A: They are inversely related. The final prediction is:

$$\\hat{y} = \\sum_{t=1}^{T} \\eta f_t(x)$$

Where $\\eta$ is the learning_rate and $T$ is n_estimators. Lower $\\eta$ requires larger $T$ to reach the same model capacity. The optimal strategy: use a low learning_rate (0.01-0.05) with early stopping to automatically find the optimal $T$. This gives better generalization than a high learning_rate with fewer trees.

### LightGBM Deep Dive

**Q13: Explain leaf-wise vs. level-wise tree growth. When would you choose one over the other?**

A: Level-wise (XGBoost) grows all nodes at a given depth simultaneously, producing balanced trees. This can waste computation splitting nodes with low information gain. Leaf-wise (LightGBM) always splits the leaf with the highest loss reduction, producing deeper, asymmetric trees that minimize loss faster. Choose leaf-wise when speed matters and you can tune num_leaves/max_depth carefully. Choose level-wise when you want more predictable tree structure and less tuning risk.

**Q14: What is GOSS and why does it work?**

A: Gradient-Based One-Side Sampling keeps all data points with large gradients (high error, still learning) and samples a fraction of small-gradient points (already well-learned), amplifying their weights. This works because small-gradient points contribute little new information — they are already correctly predicted. By reducing the number of points processed per split, GOSS dramatically speeds up training without significantly affecting accuracy.

**Q15: How does LightGBM handle categorical features natively?**

A: LightGBM uses an optimal split algorithm for categoricals. Instead of one-hot encoding (which creates O(k) binary features), it finds the best partition of categories into two groups (for binary splits). This is equivalent to finding the optimal label encoding that maximizes the split gain. For high-cardinality categoricals (e.g., user IDs with 100K values), this is vastly more efficient than one-hot encoding.

**Q16: When would LightGBM fail and what would you do?**

A: LightGBM can fail when: (1) num_leaves is too high → overfitting. Fix: reduce num_leaves, increase min_child_samples. (2) Very small datasets (<10K rows) → histogram binning loses precision. Fix: use XGBoost with exact splitting. (3) Many irrelevant features with leaf-wise growth → tree grows deep fitting to noise. Fix: feature selection first, or increase min_child_samples. (4) Data has strong temporal patterns → leaf-wise can memorize. Fix: use proper time-series cross-validation.

---

## Head-to-Head Comparison: All Three Algorithms

| Aspect | Random Forest | XGBoost | LightGBM |
|---|---|---|---|
| **Ensemble Type** | Bagging (Parallel) | Boosting (Sequential) | Boosting (Sequential) |
| **Tree Growth** | Full depth (no pruning) | Level-wise (balanced) | Leaf-wise (asymmetric) |
| **Split Finding** | Exact (pre-sorted) | Exact + Quantile sketch | Histogram-based (binned) |
| **Missing Values** | Manual imputation | Native (sparsity-aware) | Native (histogram binning) |
| **Categorical Features** | Requires encoding | Requires encoding (better with label) | Native optimal handling |
| **Regularization** | None built-in | L1 + L2 + gamma + min_child_weight | L1 + L2 + min_split_gain + min_child_samples |
| **Overfitting Risk** | Low (converges) | Medium (needs early stopping) | Higher (leaf-wise grows fast) |
| **Training Speed** | Fast (parallel CPU) | Medium (CPU/GPU) | Fastest (CPU/GPU + GOSS + EFB) |
| **Inference Speed** | Medium (many trees) | Medium | Fast (fewer splits per tree) |
| **Extrapolation** | Cannot | Can (via residuals) | Can (via residuals) |
| **Interpretability** | High (stable importance) | Medium (gain importance) | Medium (split/gain importance) |
| **Typical Accuracy** | Good baseline | Best on clean tabular data | Best on large/sparse data |
| **When to Choose** | Baseline, noisy data, interpretability | Max accuracy, tabular data | Large datasets, speed critical |

### Final Recommendation

> **🎯 Interview Gold Standard Answer:** "My ensemble strategy follows a progression: I start with Random Forest as a baseline — it requires minimal tuning, provides OOB validation, and is robust to noise. If I need higher accuracy, I move to XGBoost, which uses second-order Taylor expansion for faster convergence and built-in L1/L2 regularization. For large datasets (millions of rows), I switch to LightGBM, which uses histogram-based splitting, leaf-wise growth, GOSS for data sampling, and EFB for feature bundling — making it orders of magnitude faster. The key trade-off is that LightGBM's leaf-wise growth can overfit faster, so I always control num_leaves and set max_depth as a safety net. In production, I ensemble all three using stacking — RF for robustness, XGBoost for accuracy, and LightGBM for speed — and let a meta-learner combine their strengths."
`},vy=Object.freeze(Object.defineProperty({__proto__:null,default:yy},Symbol.toStringTag,{value:"Module"})),wy=Object.assign({"./ClassificationMetrics.jsx":sy,"./DecisionTree.jsx":ly,"./MLInterviewTips.jsx":cy,"./MLNuances.jsx":my,"./ModelRuns.jsx":py,"./ModelSelectionGuide.jsx":gy,"./RandomForest.jsx":vy}),Zt=Object.values(wy).map(e=>e.default).filter(Boolean).sort((e,t)=>e.order-t.order);Object.fromEntries(Zt.map(e=>[e.slug,e]));const by=Zt.length,xy=[{path:"/python",label:"Python Coding",icon:V2,totalKey:"totalPython",solvedKey:"pythonSolved"},{path:"/sql",label:"SQL Practice",icon:Pp,totalKey:"totalSQL",solvedKey:"sqlSolved"},{path:"/ml",label:"ML Concepts",icon:H2,totalKey:"totalML",solvedKey:"mlCompleted"},{path:"/Concepts",label:"Concepts",icon:zp,totalKey:"totalConcepts",solvedKey:"conceptCompleted",dynamicTotal:by}];function Sy({collapsed:e,onToggleCollapse:t}){const r=an(),a=ha();return y.jsxs("aside",{className:`
        ${e?"w-[72px]":"w-[200px]"}
        h-screen bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700
        flex flex-col transition-all duration-300 ease-in-out relative
        fixed left-0 top-0 z-40
      `,children:[y.jsxs("div",{className:"flex items-center gap-3 px-5 h-16 border-b border-gray-200 dark:border-slate-700 shrink-0",children:[y.jsx("div",{className:"w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0",children:y.jsx(ty,{className:"w-5 h-5 text-white"})}),!e&&y.jsx("span",{className:"text-lg font-bold tracking-tight text-gray-900 dark:text-white",children:"DataCrack"})]}),y.jsx("nav",{className:"flex-1 py-4 px-3 space-y-1 overflow-y-auto scrollbar-thin",children:xy.map(n=>{var h;const i=n.icon,s=a.pathname.startsWith(n.path),o=((h=r[n.solvedKey])==null?void 0:h.size)||0,l=n.dynamicTotal??r[n.totalKey],d=l>0?Math.round(o/l*100):0;return y.jsxs(D2,{to:n.path,className:`
                flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group
                ${s?"bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400":"text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700/50 hover:text-gray-900 dark:hover:text-white"}
              `,children:[y.jsx(i,{className:`w-5 h-5 shrink-0 ${s?"text-emerald-600 dark:text-emerald-400":""}`}),!e&&y.jsxs("div",{className:"flex-1 min-w-0",children:[y.jsx("div",{className:"text-sm font-medium truncate",children:n.label}),y.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[y.jsx("div",{className:"flex-1 h-1.5 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden",children:y.jsx("div",{className:"h-full bg-emerald-500 rounded-full transition-all duration-500",style:{width:`${d}%`}})}),y.jsxs("span",{className:"text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap",children:[o,"/",l]})]})]})]},n.path)})}),y.jsx("button",{onClick:t,className:`\r
          absolute -right-3 top-20 w-6 h-6 rounded-full\r
          bg-gray-200 dark:bg-slate-600 hover:bg-gray-300 dark:hover:bg-slate-500\r
          flex items-center justify-center\r
          transition-colors duration-200\r
          shadow-sm\r
        `,children:e?y.jsx(Tu,{className:"w-3.5 h-3.5 text-gray-600 dark:text-gray-300"}):y.jsx(ku,{className:"w-3.5 h-3.5 text-gray-600 dark:text-gray-300"})}),!e&&y.jsx("div",{className:"px-5 py-4 border-t border-gray-200 dark:border-slate-700 shrink-0",children:y.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:"Interview Prep Platform"})})]})}const Up=M.createContext();function ky({children:e}){const[t,r]=M.useState(()=>{const n=localStorage.getItem("datacrack-theme");return n||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")});M.useEffect(()=>{const n=document.documentElement;t==="dark"?n.classList.add("dark"):n.classList.remove("dark"),localStorage.setItem("datacrack-theme",t)},[t]);const a=()=>{r(n=>n==="dark"?"light":"dark")};return y.jsx(Up.Provider,{value:{theme:t,toggleTheme:a},children:e})}function Cu(){const e=M.useContext(Up);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e}function Ty(){const{theme:e,toggleTheme:t}=Cu(),{resetProgress:r}=an(),[a,n]=M.useState(!1),i=()=>{r(),n(!1)};return y.jsxs("header",{className:"h-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700 flex items-center justify-between px-6 shrink-0",children:[y.jsx("div",{className:"flex items-center gap-3",children:y.jsx("h1",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"Master your Data Analyst & Data Scientist interviews"})}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsxs("div",{className:"relative",children:[y.jsx("button",{onClick:()=>n(!a),className:`\r
              p-2 rounded-lg text-gray-500 dark:text-gray-400\r
              hover:bg-gray-100 dark:hover:bg-slate-700\r
              transition-colors duration-200\r
            `,title:"Reset Progress",children:y.jsx(_u,{className:"w-4.5 h-4.5"})}),a&&y.jsxs("div",{className:"absolute right-0 top-12 w-64 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-600 p-4 z-50 animate-fade-in",children:[y.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mb-3",children:"Reset all progress? This cannot be undone."}),y.jsxs("div",{className:"flex gap-2",children:[y.jsx("button",{onClick:i,className:"flex-1 px-3 py-1.5 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-md transition-colors",children:"Reset"}),y.jsx("button",{onClick:()=>n(!1),className:"flex-1 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-md transition-colors",children:"Cancel"})]})]})]}),y.jsx("button",{onClick:t,className:`\r
            p-2 rounded-lg text-gray-500 dark:text-gray-400\r
            hover:bg-gray-100 dark:hover:bg-slate-700\r
            transition-colors duration-200\r
          `,title:`Switch to ${e==="dark"?"light":"dark"} mode`,children:e==="dark"?y.jsx(Q2,{className:"w-4.5 h-4.5"}):y.jsx(Y2,{className:"w-4.5 h-4.5"})})]})]})}function _y(){const[e,t]=M.useState(!1);return y.jsxs("div",{className:"flex h-screen bg-gray-50 dark:bg-slate-900 overflow-hidden",children:[y.jsx(Sy,{collapsed:e,onToggleCollapse:()=>t(!e)}),y.jsxs("div",{className:"flex-1 flex flex-col transition-all duration-300",style:{marginLeft:e?72:200},children:[y.jsx(Ty,{}),y.jsx("main",{className:"flex-1 overflow-hidden",children:y.jsx(T2,{})})]})]})}const pd=[{id:"list",label:"List",color:"emerald"},{id:"dict",label:"Dictionary",color:"blue"},{id:"pandas",label:"Pandas",color:"purple"},{id:"ml",label:"ML Programming",color:"amber"}],fd=[{id:1,title:"Two Sum",difficulty:"Easy",category:"list",description:"Given a list of integers `nums` and an integer `target`, return the **indices** of the two numbers that add up to `target`.\n\nYou may assume that each input would have **exactly one solution**, and you may not use the same element twice.\n\nReturn the answer as a list of two integers.",constraints:["2 <= nums.length <= 10^4","-10^9 <= nums[i] <= 10^9","-10^9 <= target <= 10^9","Only one valid answer exists."],examples:[{input:"nums = [2, 7, 11, 15], target = 9",output:"[0, 1]",explanation:"Because nums[0] + nums[1] == 9, we return [0, 1]."},{input:"nums = [3, 2, 4], target = 6",output:"[1, 2]",explanation:"Because nums[1] + nums[2] == 6, we return [1, 2]."},{input:"nums = [3, 3], target = 6",output:"[0, 1]",explanation:"Because nums[0] + nums[1] == 6, we return [0, 1]."}],starterCode:`def two_sum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    # Write your solution here
    pass`,testCases:[{input:"[[2,7,11,15], 9]",expected:"[0, 1]"},{input:"[[3,2,4], 6]",expected:"[1, 2]"},{input:"[[3,3], 6]",expected:"[0, 1]"}],functionName:"two_sum"},{id:2,title:"Remove Duplicates from Sorted Array",difficulty:"Easy",category:"list",description:`Given a sorted list of integers \`nums\`, remove the duplicates **in-place** such that each element appears only once and return the new length.

Do not allocate extra space for another list. You must do this by modifying the input list **in-place** with O(1) extra memory.

Return the number of unique elements.`,constraints:["1 <= nums.length <= 3 * 10^4","-10^4 <= nums[i] <= 10^4","nums is sorted in non-decreasing order."],examples:[{input:"nums = [1, 1, 2]",output:"2",explanation:"The first two elements are [1, 2]."},{input:"nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]",output:"5",explanation:"The first five elements are [0, 1, 2, 3, 4]."}],starterCode:`def remove_duplicates(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    # Write your solution here
    pass`,testCases:[{input:"[[1,1,2]]",expected:"2"},{input:"[[0,0,1,1,1,2,2,3,3,4]]",expected:"5"}],functionName:"remove_duplicates"},{id:3,title:"Best Time to Buy and Sell Stock",difficulty:"Easy",category:"list",description:"You are given a list `prices` where `prices[i]` is the price of a given stock on the `ith` day.\n\nYou want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.\n\nReturn the **maximum profit** you can achieve. If you cannot achieve any profit, return `0`.",constraints:["1 <= prices.length <= 10^5","0 <= prices[i] <= 10^4"],examples:[{input:"prices = [7, 1, 5, 3, 6, 4]",output:"5",explanation:"Buy on day 2 (price = 1) and sell on day 5 (price = 6). Profit = 6 - 1 = 5."},{input:"prices = [7, 6, 4, 3, 1]",output:"0",explanation:"No transactions are done, max profit = 0."}],starterCode:`def max_profit(prices):
    """
    :type prices: List[int]
    :rtype: int
    """
    # Write your solution here
    pass`,testCases:[{input:"[[7,1,5,3,6,4]]",expected:"5"},{input:"[[7,6,4,3,1]]",expected:"0"}],functionName:"max_profit"},{id:4,title:"Rotate Array",difficulty:"Medium",category:"list",description:"Given an integer list `nums` and an integer `k`, rotate the list to the **right** by `k` steps.\n\nFor example, with `nums = [1, 2, 3, 4, 5, 6, 7]` and `k = 3`, the result should be `[5, 6, 7, 1, 2, 3, 4]`.",constraints:["1 <= nums.length <= 10^5","-2^31 <= nums[i] <= 2^31 - 1","0 <= k <= 10^5"],examples:[{input:"nums = [1, 2, 3, 4, 5, 6, 7], k = 3",output:"[5, 6, 7, 1, 2, 3, 4]",explanation:"Rotate right by 3 steps."},{input:"nums = [-1, -100, 3, 99], k = 2",output:"[3, 99, -1, -100]",explanation:"Rotate right by 2 steps."}],starterCode:`def rotate(nums, k):
    """
    :type nums: List[int]
    :type k: int
    :rtype: None Do not return anything, modify nums in-place instead.
    """
    # Write your solution here
    pass`,testCases:[{input:"[[1,2,3,4,5,6,7], 3]",expected:"[5, 6, 7, 1, 2, 3, 4]"},{input:"[[-1,-100,3,99], 2]",expected:"[3, 99, -1, -100]"}],functionName:"rotate"},{id:5,title:"Sliding Window Maximum",difficulty:"Hard",category:"list",description:"You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.\n\nReturn the **max sliding window** as a list of integers.",constraints:["1 <= nums.length <= 10^5","-10^4 <= nums[i] <= 10^4","1 <= k <= nums.length"],examples:[{input:"nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3",output:"[3, 3, 5, 5, 6, 7]",explanation:`Window position and maximum:
[1  3  -1] -3  5  3  6  7  →  3
 1 [3  -1  -3] 5  3  6  7  →  3
 1  3 [-1  -3  5] 3  6  7  →  5
 1  3  -1 [-3  5  3] 6  7  →  5
 1  3  -1  -3 [5  3  6] 7  →  6
 1  3  -1  -3  5 [3  6  7] →  7`},{input:"nums = [1], k = 1",output:"[1]"}],starterCode:`def max_sliding_window(nums, k):
    """
    :type nums: List[int]
    :type k: int
    :rtype: List[int]
    """
    # Write your solution here
    pass`,testCases:[{input:"[[1,3,-1,-3,5,3,6,7], 3]",expected:"[3, 3, 5, 5, 6, 7]"},{input:"[[1], 1]",expected:"[1]"}],functionName:"max_sliding_window"},{id:6,title:"Merge Two Sorted Lists",difficulty:"Easy",category:"list",description:"Merge two sorted lists into one sorted list. Return the head of the merged linked list represented as a list.",constraints:["The number of nodes in both lists is in [0, 50].","-100 <= Node.val <= 100"],examples:[{input:"l1 = [1,2,4], l2 = [1,3,4]",output:"[1,1,2,3,4,4]"}],starterCode:`def merge_two_lists(l1, l2):
    # Write your solution here
    pass`,testCases:[{input:"[[1,2,4], [1,3,4]]",expected:"[1, 1, 2, 3, 4, 4]"}],functionName:"merge_two_lists"},{id:7,title:"Container With Most Water",difficulty:"Medium",category:"list",description:"Find two lines that together with the x-axis form a container that holds the most water.",constraints:["n >= 2","1 <= heights[i] <= 10^4"],examples:[{input:"height = [1,8,6,2,5,4,8,3,7]",output:"49"}],starterCode:`def max_area(height):
    # Write your solution here
    pass`,testCases:[{input:"[[1,8,6,2,5,4,8,3,7]]",expected:"49"}],functionName:"max_area"},{id:8,title:"3Sum",difficulty:"Medium",category:"list",description:"Find all unique triplets in the list which give the sum of zero.",constraints:["0 <= nums.length <= 3000","-10^5 <= nums[i] <= 10^5"],examples:[{input:"nums = [-1,0,1,2,-1,-4]",output:"[[-1,-1,2],[-1,0,1]]"}],starterCode:`def three_sum(nums):
    # Write your solution here
    pass`,testCases:[{input:"[[-1,0,1,2,-1,-4]]",expected:"[[-1,-1,2],[-1,0,1]]"}],functionName:"three_sum"},{id:9,title:"Product of Array Except Self",difficulty:"Medium",category:"list",description:"Return an array where each element is the product of all other elements without using division.",constraints:["2 <= nums.length <= 10^5","No division allowed"],examples:[{input:"nums = [1,2,3,4]",output:"[24,12,8,6]"}],starterCode:`def product_except_self(nums):
    # Write your solution here
    pass`,testCases:[{input:"[[1,2,3,4]]",expected:"[24, 12, 8, 6]"}],functionName:"product_except_self"},{id:10,title:"Trapping Rain Water",difficulty:"Hard",category:"list",description:"Compute how much water it can trap after raining.",constraints:["n == height.length","1 <= n <= 2 * 10^4"],examples:[{input:"height = [0,1,0,2,1,0,1,3,2,1,2,1]",output:"6"}],starterCode:`def trap(height):
    # Write your solution here
    pass`,testCases:[{input:"[[0,1,0,2,1,0,1,3,2,1,2,1]]",expected:"6"}],functionName:"trap"},{id:11,title:"Find All Anagrams in a String",difficulty:"Medium",category:"list",description:"Find all start indices of p's anagrams in s.",constraints:["1 <= s.length, p.length <= 3 * 10^4"],examples:[{input:'s = "cbaebabacd", p = "abc"',output:"[0,6]"}],starterCode:`def find_anagrams(s, p):
    # Write your solution here
    pass`,testCases:[{input:'["cbaebabacd", "abc"]',expected:"[0, 6]"}],functionName:"find_anagrams"},{id:12,title:"Kth Largest Element",difficulty:"Medium",category:"list",description:"Find the kth largest element in an unsorted list.",constraints:["1 <= k <= nums.length <= 10^5"],examples:[{input:"nums = [3,2,1,5,6,4], k = 2",output:"5"}],starterCode:`def find_kth_largest(nums, k):
    # Write your solution here
    pass`,testCases:[{input:"[[3,2,1,5,6,4], 2]",expected:"5"}],functionName:"find_kth_largest"},{id:13,title:"Valid Anagram",difficulty:"Easy",category:"dict",description:"Given two strings s and t, return true if t is an anagram of s, and false otherwise.",constraints:["1 <= s.length, t.length <= 5 * 10^4","s and t consist of lowercase English letters."],examples:[{input:'s = "anagram", t = "nagaram"',output:"True"},{input:'s = "rat", t = "car"',output:"False"}],starterCode:`def is_anagram(s, t):
    # Write your solution here
    pass`,testCases:[{input:'["anagram", "nagaram"]',expected:"True"},{input:'["rat", "car"]',expected:"False"}],functionName:"is_anagram"},{id:14,title:"Group Anagrams",difficulty:"Medium",category:"dict",description:"Group strings that are anagrams of each other.",constraints:["1 <= strs.length <= 10^4","0 <= strs[i].length <= 100"],examples:[{input:'strs = ["eat","tea","tan","ate","nat","bat"]',output:'[["eat","tea","ate"],["tan","nat"],["bat"]]'}],starterCode:`def group_anagrams(strs):
    # Write your solution here
    pass`,testCases:[{input:'[["eat","tea","tan","ate","nat","bat"]]',expected:'[["eat","tea","ate"],["tan","nat"],["bat"]]'}],functionName:"group_anagrams"},{id:15,title:"Top K Frequent Elements",difficulty:"Medium",category:"dict",description:"Return the k most frequent elements.",constraints:["1 <= nums.length <= 10^5","1 <= k <= number of unique elements"],examples:[{input:"nums = [1,1,1,2,2,3], k = 2",output:"[1,2]"}],starterCode:`def top_k_frequent(nums, k):
    # Write your solution here
    pass`,testCases:[{input:"[[1,1,1,2,2,3], 2]",expected:"[1, 2]"}],functionName:"top_k_frequent"},{id:16,title:"LRU Cache",difficulty:"Hard",category:"dict",description:"Design and implement a data structure for Least Recently Used (LRU) cache.",constraints:["1 <= capacity <= 3000"],examples:[{input:"LRUCache(2), put(1,1), put(2,2), get(1), put(3,3), get(2)",output:"1, -1"}],starterCode:`class LRUCache:
    def __init__(self, capacity):
        pass
    def get(self, key):
        pass
    def put(self, key, value):
        pass`,testCases:[{input:'capacity=2, ops=[["put",1,1],["put",2,2],["get",1],["put",3,3],["get",2]]',expected:"[None,None,1,None,-1]"}],functionName:"LRUCache"},{id:17,title:"Word Frequency",difficulty:"Easy",category:"dict",description:"Count the frequency of each word in a given text and return the top k frequent words.",constraints:["1 <= words.length <= 500"],examples:[{input:'words = "the cat sat on the mat the cat", k = 2',output:'["the", "cat"]'}],starterCode:`def word_frequency(text, k):
    # Write your solution here
    pass`,testCases:[{input:'["the cat sat on the mat the cat", 2]',expected:'["the", "cat"]'}],functionName:"word_frequency"},{id:18,title:"Two Sum (Dictionary)",difficulty:"Easy",category:"dict",description:"Solve Two Sum using a dictionary/hashmap for O(n) solution.",constraints:["2 <= nums.length <= 10^4"],examples:[{input:"nums = [2,7,11,15], target = 9",output:"[0,1]"}],starterCode:`def two_sum_dict(nums, target):
    # Write your solution using a dictionary
    pass`,testCases:[{input:"[[2,7,11,15], 9]",expected:"[0, 1]"}],functionName:"two_sum_dict"},{id:19,title:"Longest Consecutive Sequence",difficulty:"Medium",category:"dict",description:"Find the length of the longest consecutive elements sequence.",constraints:["0 <= nums.length <= 10^5","-10^9 <= nums[i] <= 10^9"],examples:[{input:"nums = [100,4,200,1,3,2]",output:"4"}],starterCode:`def longest_consecutive(nums):
    # Write your solution here
    pass`,testCases:[{input:"[[100,4,200,1,3,2]]",expected:"4"}],functionName:"longest_consecutive"},{id:20,title:"Subarray Sum Equals K",difficulty:"Medium",category:"dict",description:"Count the number of continuous subarrays whose sum equals k.",constraints:["1 <= nums.length <= 2 * 10^4"],examples:[{input:"nums = [1,1,1], k = 2",output:"2"}],starterCode:`def subarray_sum(nums, k):
    # Write your solution here
    pass`,testCases:[{input:"[[1,1,1], 2]",expected:"2"}],functionName:"subarray_sum"},{id:21,title:"Sort Characters By Frequency",difficulty:"Medium",category:"dict",description:"Sort characters by frequency in descending order.",constraints:["1 <= s.length <= 5 * 10^5"],examples:[{input:'s = "tree"',output:'"eert"'}],starterCode:`def frequency_sort(s):
    # Write your solution here
    pass`,testCases:[{input:'["tree"]',expected:'"eert"'}],functionName:"frequency_sort"},{id:22,title:"Isomorphic Strings",difficulty:"Easy",category:"dict",description:"Determine if two strings are isomorphic.",constraints:["1 <= s.length <= 5 * 10^4"],examples:[{input:'s = "egg", t = "add"',output:"True"},{input:'s = "foo", t = "bar"',output:"False"}],starterCode:`def is_isomorphic(s, t):
    # Write your solution here
    pass`,testCases:[{input:'["egg", "add"]',expected:"True"},{input:'["foo", "bar"]',expected:"False"}],functionName:"is_isomorphic"},{id:23,title:"DataFrame Filtering",difficulty:"Easy",category:"pandas",description:'Given a DataFrame of employees with columns [name, department, salary, age], filter employees who are in the "Engineering" department and have a salary greater than 80000.',constraints:["DataFrame has at least 1 row","All columns are present"],examples:[{input:'df = pd.DataFrame({"name":["A","B","C"], "dept":["Engineering","Sales","Engineering"], "salary":[90000,75000,95000]})',output:"DataFrame with rows A and C"}],starterCode:`import pandas as pd

def filter_engineering(df):
    # Filter Engineering department with salary > 80000
    pass`,testCases:[{input:'pd.DataFrame({"name":["A","B","C"], "dept":["Engineering","Sales","Engineering"], "salary":[90000,75000,95000]})',expected:"2 rows: A, C"}],functionName:"filter_engineering"},{id:24,title:"GroupBy Aggregation",difficulty:"Easy",category:"pandas",description:"Given a sales DataFrame with columns [product, region, sales], group by product and calculate the total sales for each product.",constraints:["DataFrame has at least 1 row"],examples:[{input:'df = pd.DataFrame({"product":["A","B","A"], "sales":[100,200,150]})',output:"A: 250, B: 200"}],starterCode:`import pandas as pd

def total_sales_by_product(df):
    # Group by product and sum sales
    pass`,testCases:[{input:'pd.DataFrame({"product":["A","B","A"], "sales":[100,200,150]})',expected:"A: 250, B: 200"}],functionName:"total_sales_by_product"},{id:25,title:"Handle Missing Values",difficulty:"Easy",category:"pandas",description:'Given a DataFrame with missing values (NaN), fill numeric columns with the column mean and string columns with "Unknown".',constraints:["DataFrame may contain mixed types"],examples:[{input:"df with NaN values",output:"DataFrame with filled values"}],starterCode:`import pandas as pd
import numpy as np

def fill_missing(df):
    # Fill NaN values appropriately
    pass`,testCases:[{input:'pd.DataFrame({"a":[1,np.nan,3], "b":["x",None,"z"]})',expected:"a: [1,2,3], b: [x,Unknown,z]"}],functionName:"fill_missing"},{id:26,title:"Merge DataFrames",difficulty:"Medium",category:"pandas",description:"Merge two DataFrames on a common key using an inner join.",constraints:["Both DataFrames have the key column"],examples:[{input:"df1 with orders, df2 with customers",output:"Merged DataFrame"}],starterCode:`import pandas as pd

def merge_dataframes(df1, df2, key):
    # Merge on common key
    pass`,testCases:[{input:'df1(id=[1,2], val=["a","b"]), df2(id=[2,3], val2=["c","d"])',expected:"Inner join on id=2"}],functionName:"merge_dataframes"},{id:27,title:"Pivot Table",difficulty:"Medium",category:"pandas",description:"Create a pivot table from a sales DataFrame with products as rows, regions as columns, and sales as values.",constraints:["DataFrame has product, region, and sales columns"],examples:[{input:"Sales data",output:"Pivot table with products x regions"}],starterCode:`import pandas as pd

def create_pivot(df):
    # Create pivot table
    pass`,testCases:[{input:'pd.DataFrame({"product":["A","A","B"],"region":["E","W","E"],"sales":[100,200,150]})',expected:"Pivot table"}],functionName:"create_pivot"},{id:28,title:"Data Type Conversion",difficulty:"Easy",category:"pandas",description:"Convert columns to appropriate data types: date strings to datetime, numeric strings to float.",constraints:["DataFrame has string columns that should be other types"],examples:[{input:"DataFrame with string dates and numbers",output:"DataFrame with proper types"}],starterCode:`import pandas as pd

def convert_types(df):
    # Convert date and numeric columns
    pass`,testCases:[{input:'pd.DataFrame({"date":["2024-01-01"],"value":["42.5"]})',expected:"datetime64 and float64 types"}],functionName:"convert_types"},{id:29,title:"Apply Function",difficulty:"Medium",category:"pandas",description:'Use the apply method to create a new column that categorizes values into bins (e.g., "Low", "Medium", "High").',constraints:["DataFrame has a numeric column"],examples:[{input:"DataFrame with scores",output:"DataFrame with grade column"}],starterCode:`import pandas as pd

def categorize_scores(df):
    # Apply categorization function
    pass`,testCases:[{input:'pd.DataFrame({"score":[25,50,75,90]})',expected:"Categories: Low, Medium, High, High"}],functionName:"categorize_scores"},{id:30,title:"Time Series Resampling",difficulty:"Medium",category:"pandas",description:"Resample daily sales data to monthly averages.",constraints:["DataFrame has a datetime index and numeric values"],examples:[{input:"Daily sales data",output:"Monthly average sales"}],starterCode:`import pandas as pd

def monthly_average(df):
    # Resample to monthly frequency
    pass`,testCases:[{input:"Daily data with dates",expected:"Monthly aggregated data"}],functionName:"monthly_average"},{id:31,title:"String Operations",difficulty:"Easy",category:"pandas",description:"Clean a column of names: strip whitespace, convert to lowercase, and extract first names.",constraints:["Column contains string values"],examples:[{input:'["  John Doe ", "Jane Smith"]',output:'["john", "jane"]'}],starterCode:`import pandas as pd

def clean_names(df):
    # Clean the name column
    pass`,testCases:[{input:'pd.DataFrame({"name":["  John Doe ","Jane Smith"]})',expected:"First names in lowercase"}],functionName:"clean_names"},{id:32,title:"Rolling Window Calculation",difficulty:"Medium",category:"pandas",description:"Calculate a 7-day rolling average of stock prices.",constraints:["DataFrame has price column"],examples:[{input:"Daily stock prices",output:"Rolling 7-day average"}],starterCode:`import pandas as pd

def rolling_average(prices, window=7):
    # Calculate rolling average
    pass`,testCases:[{input:'pd.DataFrame({"price":[100,102,98,105,110,108,112,115]})',expected:"7-day rolling mean"}],functionName:"rolling_average"},{id:33,title:"Get Dummies (One-Hot Encoding)",difficulty:"Easy",category:"pandas",description:"Convert categorical variables into dummy/indicator variables using one-hot encoding.",constraints:["DataFrame has categorical columns"],examples:[{input:'DataFrame with "color" column',output:"DataFrame with color_red, color_blue, etc."}],starterCode:`import pandas as pd

def one_hot_encode(df, column):
    # Apply one-hot encoding
    pass`,testCases:[{input:'pd.DataFrame({"color":["red","blue","red"]})',expected:"color_red, color_blue columns"}],functionName:"one_hot_encode"},{id:34,title:"Correlation Matrix",difficulty:"Medium",category:"pandas",description:"Calculate the correlation matrix for all numeric columns in a DataFrame and find the most correlated pair.",constraints:["DataFrame has multiple numeric columns"],examples:[{input:"DataFrame with columns A, B, C",output:"Correlation matrix and most correlated pair"}],starterCode:`import pandas as pd

def most_correlated(df):
    # Calculate correlation and find most correlated pair
    pass`,testCases:[{input:'pd.DataFrame({"a":[1,2,3,4,5],"b":[2,4,5,4,5],"c":[1,3,2,5,4]})',expected:"Most correlated pair"}],functionName:"most_correlated"},{id:35,title:"Data Aggregation with Multiple Functions",difficulty:"Medium",category:"pandas",description:"Group data by category and apply multiple aggregation functions (mean, median, std) to each group.",constraints:["DataFrame has group and value columns"],examples:[{input:"Sales by category",output:"Multiple stats per category"}],starterCode:`import pandas as pd

def multi_aggregate(df):
    # Apply multiple aggregation functions
    pass`,testCases:[{input:'pd.DataFrame({"cat":["A","A","B","B"],"val":[10,20,30,40]})',expected:"Stats per category"}],functionName:"multi_aggregate"},{id:36,title:"Manual Train-Test Split",difficulty:"Easy",category:"ml",description:"Implement a train-test split function from scratch without using sklearn. The function should randomly split data into training and testing sets.",constraints:["test_size should be between 0 and 1","Data can be lists or numpy-like"],examples:[{input:"data = [1,2,3,4,5,6,7,8,9,10], test_size=0.3",output:"7 train, 3 test items"}],starterCode:`import random

def train_test_split(data, test_size=0.2, seed=42):
    """
    Split data into train and test sets.
    :param data: list of data points
    :param test_size: fraction for test set
    :param seed: random seed for reproducibility
    :return: (train_data, test_data)
    """
    # Implement your own train_test_split
    pass`,testCases:[{input:"[[1,2,3,4,5,6,7,8,9,10], 0.3, 42]",expected:"len(train)=7, len(test)=3"}],functionName:"train_test_split"},{id:37,title:"Mean Squared Error from Scratch",difficulty:"Easy",category:"ml",description:`Implement Mean Squared Error (MSE) from scratch.

$$MSE = \\frac{1}{n} \\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2$$`,constraints:["Both lists must have the same length","n > 0"],examples:[{input:"y_actual = [3, -0.5, 2, 7], y_predicted = [2.5, 0.0, 2, 8]",output:"0.375"}],starterCode:`def mean_squared_error(y_actual, y_predicted):
    """
    Calculate MSE from scratch.
    :param y_actual: list of actual values
    :param y_predicted: list of predicted values
    :return: float MSE value
    """
    # Implement MSE formula
    pass`,testCases:[{input:"[[3,-0.5,2,7], [2.5,0.0,2,8]]",expected:"0.375"}],functionName:"mean_squared_error"},{id:38,title:"KNN from Scratch",difficulty:"Medium",category:"ml",description:"Implement K-Nearest Neighbors classifier from scratch. Given training data and a test point, classify it based on the k nearest neighbors using Euclidean distance.",constraints:["k >= 1","Training data is non-empty"],examples:[{input:"Train: [[1,2],[2,3],[3,1],[6,7],[7,8]], Test: [3,3], k=3",output:"Class of majority of 3 nearest neighbors"}],starterCode:`def knn_predict(train_data, train_labels, test_point, k=3):
    """
    Predict class using KNN.
    :param train_data: list of feature vectors
    :param train_labels: list of class labels
    :param test_point: feature vector to classify
    :param k: number of neighbors
    :return: predicted class label
    """
    # Implement KNN
    pass`,testCases:[{input:"[[[1,2],[2,3],[3,1],[6,7],[7,8]], [0,0,0,1,1], [3,3], 3]",expected:"0 (majority class)"}],functionName:"knn_predict"},{id:39,title:"Gradient Descent Implementation",difficulty:"Medium",category:"ml",description:`Implement simple gradient descent to find the optimal parameters for a linear model.

$$\\theta_{new} = \\theta_{old} - \\alpha \\cdot \\nabla J(\\theta)$$`,constraints:["Learning rate > 0","Iterations > 0"],examples:[{input:"X = [1,2,3,4,5], y = [2,4,5,4,5], lr=0.01, epochs=1000",output:"Optimal weight and bias"}],starterCode:`def gradient_descent(X, y, lr=0.01, epochs=1000):
    """
    Implement gradient descent for linear regression.
    :return: (weight, bias) tuple
    """
    # Initialize parameters
    # Loop for epochs
    # Compute predictions, loss, gradients
    # Update parameters
    pass`,testCases:[{input:"[[1,2,3,4,5], [2,4,5,4,5], 0.01, 1000]",expected:"weight near 0.6, bias near 2.2"}],functionName:"gradient_descent"},{id:40,title:"Logistic Regression from Scratch",difficulty:"Hard",category:"ml",description:`Implement logistic regression with sigmoid function and binary cross-entropy loss.

$$\\sigma(z) = \\frac{1}{1 + e^{-z}}$$
$$J = -\\frac{1}{n}\\sum[y\\log(\\hat{y}) + (1-y)\\log(1-\\hat{y})]$$`,constraints:["Binary classification only","Features should be normalized"],examples:[{input:"Simple 2D classification data",output:"Trained weights and bias"}],starterCode:`import math

def sigmoid(z):
    return 1 / (1 + math.exp(-z))

def logistic_regression(X, y, lr=0.1, epochs=1000):
    """
    Train logistic regression from scratch.
    :return: (weights, bias)
    """
    # Implement logistic regression
    pass`,testCases:[{input:"Simple linearly separable data",expected:"Accuracy > 0.8"}],functionName:"logistic_regression"},{id:41,title:"Confusion Matrix from Scratch",difficulty:"Easy",category:"ml",description:"Implement a confusion matrix and calculate accuracy, precision, recall, and F1 score.",constraints:["Binary classification","y_true and y_pred have same length"],examples:[{input:"y_true = [1,0,1,1,0], y_pred = [1,0,0,1,1]",output:"TP=2, TN=1, FP=1, FN=1"}],starterCode:`def confusion_matrix(y_true, y_pred):
    """
    Calculate confusion matrix and metrics.
    :return: dict with TP, TN, FP, FN, accuracy, precision, recall, f1
    """
    # Implement confusion matrix
    pass`,testCases:[{input:"[[1,0,1,1,0], [1,0,0,1,1]]",expected:"TP=2, TN=1, FP=1, FN=1, acc=0.6"}],functionName:"confusion_matrix"},{id:42,title:"Cross-Validation from Scratch",difficulty:"Medium",category:"ml",description:"Implement k-fold cross-validation to evaluate a model.",constraints:["k >= 2","Data length >= k"],examples:[{input:"data with 10 samples, k=5",output:"5 folds with average score"}],starterCode:`def k_fold_cross_validation(data, labels, k=5, model_fn=None):
    """
    Implement k-fold cross-validation.
    :return: list of scores and average
    """
    # Split data into k folds
    # For each fold, train on remaining, test on current
    pass`,testCases:[{input:"[[1,2,3,4,5,6,7,8,9,10], [0,0,0,0,0,1,1,1,1,1], 5]",expected:"Average score across 5 folds"}],functionName:"k_fold_cross_validation"},{id:43,title:"Linear Regression from Scratch",difficulty:"Medium",category:"ml",description:`Implement simple linear regression using the normal equation or gradient descent.

$$\\hat{y} = wx + b$$
$$w = \\frac{\\sum(x_i - \\bar{x})(y_i - \\bar{y})}{\\sum(x_i - \\bar{x})^2}$$`,constraints:["X is a list of floats","y is a list of floats of same length"],examples:[{input:"X = [1,2,3,4,5], y = [2,4,5,4,5]",output:"weight=0.6, bias=2.2"}],starterCode:`def linear_regression(X, y):
    """
    Fit linear regression using closed form.
    :return: (weight, bias)
    """
    # Implement using the formula
    pass`,testCases:[{input:"[[1,2,3,4,5], [2,4,5,4,5]]",expected:"weight=0.6, bias=2.2"}],functionName:"linear_regression"},{id:44,title:"R² Score from Scratch",difficulty:"Easy",category:"ml",description:`Implement R-squared (coefficient of determination) from scratch.

$$R^2 = 1 - \\frac{\\sum(y_i - \\hat{y}_i)^2}{\\sum(y_i - \\bar{y})^2}$$`,constraints:["Both lists have same length"],examples:[{input:"y_actual = [3,-0.5,2,7], y_predicted = [2.5,0.0,2,8]",output:"R² score"}],starterCode:`def r_squared(y_actual, y_predicted):
    """
    Calculate R² score.
    :return: float R² value
    """
    # Implement R² formula
    pass`,testCases:[{input:"[[3,-0.5,2,7], [2.5,0.0,2,8]]",expected:"R² close to 0.948"}],functionName:"r_squared"},{id:45,title:"Standard Scaler from Scratch",difficulty:"Easy",category:"ml",description:`Implement StandardScaler (z-score normalization) from scratch.

$$z = \\frac{x - \\mu}{\\sigma}$$`,constraints:["Input is a list of numbers","Standard deviation > 0"],examples:[{input:"data = [1, 2, 3, 4, 5]",output:"[-1.41, -0.71, 0, 0.71, 1.41]"}],starterCode:`def standard_scale(data):
    """
    Apply z-score normalization.
    :return: list of scaled values
    """
    # Calculate mean and std
    # Apply z-score formula
    pass`,testCases:[{input:"[[1,2,3,4,5]]",expected:"Mean=0, Std=1 for scaled data"}],functionName:"standard_scale"},{id:46,title:"Decision Tree (Simple)",difficulty:"Hard",category:"ml",description:"Implement a simple decision tree classifier using information gain (entropy) for splitting.",constraints:["Binary features","Binary labels"],examples:[{input:"Simple XOR-like dataset",output:"Trained decision tree"}],starterCode:`import math

def entropy(labels):
    """Calculate entropy of a label list."""
    pass

def information_gain(feature, labels):
    """Calculate information gain."""
    pass

def build_tree(X, y, features):
    """Build a decision tree recursively."""
    pass`,testCases:[{input:"XOR dataset",expected:"Tree that can classify XOR"}],functionName:"build_tree"},{id:47,title:"Random Forest (Concept)",difficulty:"Hard",category:"ml",description:"Implement a basic random forest using bootstrap sampling and majority voting.",constraints:["Uses decision trees as base learners"],examples:[{input:"Training data",output:"Ensemble predictions"}],starterCode:`import random

def bootstrap_sample(X, y):
    """Create a bootstrap sample."""
    pass

def random_forest_predict(X_train, y_train, X_test, n_trees=10):
    """Make predictions using random forest."""
    pass`,testCases:[{input:"Simple classification data",expected:"Majority vote predictions"}],functionName:"random_forest_predict"},{id:48,title:"Naive Bayes from Scratch",difficulty:"Medium",category:"ml",description:"Implement Naive Bayes classifier for text classification using bag of words.",constraints:["Text data","Multiple classes"],examples:[{input:"Text documents with labels",output:"Predicted class for new text"}],starterCode:`def naive_bayes_train(texts, labels):
    """Train Naive Bayes model."""
    pass

def naive_bayes_predict(model, text):
    """Predict class for a text document."""
    pass`,testCases:[{input:'["spam text", "ham text"], ["spam", "ham"]',expected:"Correct class probabilities"}],functionName:"naive_bayes_train"},{id:49,title:"ROC Curve and AUC",difficulty:"Medium",category:"ml",description:"Implement ROC curve computation and AUC (Area Under the Curve) calculation.",constraints:["Binary classification probabilities"],examples:[{input:"y_true = [0,0,1,1], y_scores = [0.1,0.4,0.35,0.8]",output:"AUC value"}],starterCode:`def roc_curve(y_true, y_scores):
    """Compute ROC curve points."""
    pass

def auc_score(y_true, y_scores):
    """Calculate AUC using trapezoidal rule."""
    pass`,testCases:[{input:"[[0,0,1,1], [0.1,0.4,0.35,0.8]]",expected:"AUC between 0 and 1"}],functionName:"roc_curve"},{id:50,title:"PCA from Scratch",difficulty:"Hard",category:"ml",description:`Implement Principal Component Analysis (PCA) from scratch for dimensionality reduction.

1. Center the data
2. Compute covariance matrix
3. Compute eigenvalues/eigenvectors
4. Project data onto top k components`,constraints:["Data is a 2D list (matrix)","k <= number of features"],examples:[{input:"data = [[2.5,2.4],[0.5,0.7],[2.2,2.9],[1.9,2.2],[3.1,3.0]], k=1",output:"Reduced 1D data"}],starterCode:`def pca(data, k=1):
    """
    Implement PCA from scratch.
    :param data: list of lists (2D matrix)
    :param k: number of principal components
    :return: reduced data
    """
    # Step 1: Center the data (subtract mean)
    # Step 2: Compute covariance matrix
    # Step 3: Compute eigenvalues and eigenvectors
    # Step 4: Select top k eigenvectors
    # Step 5: Project data
    pass`,testCases:[{input:"[[2.5,2.4],[0.5,0.7],[2.2,2.9],[1.9,2.2],[3.1,3.0]], 1",expected:"1D reduced data"}],functionName:"pca"}];function Cy(e){let t=e.split(`
`),r=t.join(`
`);r=r.replace(/"""[\s\S]*?"""/g,""),r=r.replace(/'''[\s\S]*?'''/g,""),t=r.split(`
`);const a=t.map(s=>{let o=s;return o=o.replace(/#.*$/,""),o}).filter(s=>s.trim()!==""),n=[],i=[{indent:-1,hasBrace:!1}];for(let s=0;s<a.length;s++){let o=a[s];const l=o.trim();if(l==="")continue;const d=o.match(/^(\s*)/),h=d?d[1].length:0;for(;i.length>1&&h<=i[i.length-1].indent;)i.pop(),n.push(" ".repeat(i.length>0?i[i.length-1].indent+4:0)+"}");let m=l;m=m.replace(/^def\s+(\w+)\s*\(([^)]*)\)\s*:/,"function $1($2) {"),m=m.replace(/^class\s+(\w+)\s*:/,"function $1() {"),m=m.replace(/^for\s+(\w+)\s+in\s+range\((.+)\)\s*:$/,"for (let $1 = 0; $1 < ($2); $1++) {"),m=m.replace(/^for\s+(\w+)\s*,\s*(\w+)\s+in\s+enumerate\((\w+)\)\s*:/,"for (const [$2, $1] of $3.entries()) {"),m=m.replace(/^for\s+(\w+)\s*,\s*(\w+)\s+in\s+zip\((\w+),\s*(\w+)\)\s*:/,"for (let $1i = 0; $1i < $3.length; $1i++) { let $1 = $3[$1i]; let $2 = $4[$1i];"),m=m.replace(/^for\s+(\w+)\s+in\s+(\w+)\s*:$/,"for (const $1 of $2) {"),m=m.replace(/^if\s+(.+)\s*:$/,"if ($1) {"),m=m.replace(/^elif\s+(.+)\s*:$/,"} else if ($1) {"),m=m.replace(/^else\s*:$/,"} else {"),m=m.replace(/^while\s+(.+)\s*:$/,"while ($1) {"),m=m.replace(/\bTrue\b/g,"true"),m=m.replace(/\bFalse\b/g,"false"),m=m.replace(/\bNone\b/g,"null"),m==="pass"&&(m="return undefined;"),m=m.replace(/\blen\((\w+)\)/g,"$1.length"),m=m.replace(/\.append\(/g,".push("),m=m.replace(/\.strip\(\)/g,".trim()"),m=m.replace(/\.split\(\)/g,'.split("")'),m=m.replace(/\bis\s+not\s+None\b/g,"!== null"),m=m.replace(/\bis\s+None\b/g,"=== null"),m=m.replace(/(\w+)\s+not\s+in\s+(\w+)/g,"!$2.includes($1)"),m=m.replace(/\bnot\s+/g,"!"),m=m.replace(/\band\b/g,"&&"),m=m.replace(/\bor\b/g,"||"),m=m.replace(/sorted\((\w+)\)/g,"[...$1].sort((a, b) => a - b)"),m=m.replace(/sorted\((\w+),\s*reverse\s*=\s*True\)/g,"[...$1].sort((a, b) => b - a)");const g=m.includes("{"),b=m.trim().startsWith("}");i.length>0&&i[i.length-1].indent,n.push(" ".repeat(h)+m),g&&!b&&i.push({indent:h,hasBrace:!0})}for(;i.length>1;){i.pop();const s=i.length>0?i[i.length-1].indent+4:0;n.push(" ".repeat(Math.max(0,s))+"}")}return n.join(`
`)}function Ey(){const[e,t]=M.useState([]),[r,a]=M.useState(!1),[n,i]=M.useState(""),s=M.useCallback((l,d,h)=>{a(!0),t([]),i(""),setTimeout(()=>{try{const m=Cy(l),g=d.map((T,N)=>{try{const w=T.input,v=T.expected,x=m+`
var __inputs = ${w};
var __result = ${h}.apply(null, __inputs);
return __result;`;let E;try{E=new Function(x)()}catch{const F=l+`
var __inputs = ${w};
var __result = ${h}.apply(null, __inputs);
return __result;`;E=new Function(F)()}const R=Ny(E,v),A=E!=null?JSON.stringify(E).replace(/\s+/g," ").trim():String(E);return{testNumber:N+1,input:w,expected:v,actual:A,passed:R,error:null}}catch(w){return{testNumber:N+1,input:T.input,expected:T.expected,actual:null,passed:!1,error:w.message}}});t(g);const b=g.filter(T=>T.passed).length,_=g.length;i(`Execution complete: ${b}/${_} test cases passed.`)}catch(m){i(`Error: ${m.message}`),t([{testNumber:1,input:"",expected:"",actual:null,passed:!1,error:`Compilation Error: ${m.message}`}])}finally{a(!1)}},800)},[]),o=M.useCallback(()=>{t([]),i("")},[]);return{results:e,isRunning:r,output:n,runCode:s,clearResults:o}}function Ny(e,t){if(e==null)return!1;const r=JSON.stringify(e);try{const s=JSON.parse(t);if(JSON.stringify(s)===r)return!0}catch{}const a=s=>s.toString().replace(/[\s\n]+/g," ").trim();if(a(r)===a(t))return!0;const n=r.match(/-?\d+\.?\d*/g),i=t.match(/-?\d+\.?\d*/g);return n&&i&&n.length===i.length?n.every((s,o)=>Math.abs(parseFloat(s)-parseFloat(i[o]))<.01):!1}function Ry({questions:e,currentIndex:t,onNavigate:r,solvedIds:a,activeCategory:n,onCategoryChange:i}){var d;const[s,o]=M.useState(!1);return e[t]?y.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shrink-0",children:[y.jsx("div",{className:"flex items-center gap-2",children:y.jsxs("div",{className:"relative",children:[y.jsxs("button",{onClick:()=>o(!s),className:`
              flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium
              border border-gray-200 dark:border-slate-600
              ${n?"bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800":"bg-gray-50 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600"}
              transition-colors duration-200
            `,children:[y.jsx(X2,{className:"w-3.5 h-3.5"}),n?((d=pd.find(h=>h.id===n))==null?void 0:d.label)||"All":"All Topics"]}),s&&y.jsxs("div",{className:"absolute left-0 top-full mt-1 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-600 py-1 z-50 animate-fade-in",children:[y.jsxs("button",{onClick:()=>{i(null),o(!1)},className:`
                  w-full text-left px-4 py-2 text-sm transition-colors
                  ${n?"text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700":"bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400"}
                `,children:["All Topics (",50,")"]}),pd.map(h=>y.jsx("button",{onClick:()=>{i(h.id),o(!1)},className:`
                    w-full text-left px-4 py-2 text-sm transition-colors
                    ${n===h.id?"bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400":"text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"}
                  `,children:h.label},h.id))]})]})}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("button",{onClick:()=>r(t-1),disabled:t===0,className:"p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors",children:y.jsx(ku,{className:"w-4 h-4"})}),y.jsxs("span",{className:"text-sm font-mono text-gray-600 dark:text-gray-400 min-w-[100px] text-center",children:[t+1," / ",e.length]}),y.jsx("button",{onClick:()=>r(t+1),disabled:t===e.length-1,className:"p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors",children:y.jsx(Tu,{className:"w-4 h-4"})})]}),y.jsx("div",{className:"hidden lg:flex items-center gap-1",children:e.slice(Math.max(0,t-5),Math.min(e.length,t+6)).map((h,m)=>{const g=Math.max(0,t-5)+m,b=g===t,_=a.has(h.id);return y.jsx("button",{onClick:()=>r(g),className:`
                w-6 h-6 rounded-full text-xs font-medium flex items-center justify-center transition-all duration-200
                ${b?"bg-emerald-600 text-white scale-110":_?"bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400":"bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-600"}
              `,title:h.title,children:_?y.jsx(rn,{className:"w-3 h-3"}):g+1},h.id)})})]}):null}function My({question:e,isSolved:t}){if(!e)return null;const r={Easy:"difficulty-easy",Medium:"difficulty-medium",Hard:"difficulty-hard"}[e.difficulty]||"difficulty-easy";return y.jsxs("div",{className:"h-full overflow-y-auto scrollbar-thin p-6 space-y-6",children:[y.jsxs("div",{className:"flex items-start justify-between gap-4",children:[y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[y.jsxs("span",{className:"text-xs font-mono text-gray-500 dark:text-gray-400",children:["#",e.id]}),y.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:e.title})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("span",{className:`px-2.5 py-0.5 rounded-full text-xs font-medium ${r}`,children:e.difficulty}),y.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300",children:e.category})]})]}),t&&y.jsxs("div",{className:"flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 shrink-0",children:[y.jsx(rn,{className:"w-5 h-5"}),y.jsx("span",{className:"text-sm font-medium",children:"Solved"})]})]}),y.jsx("div",{className:"prose prose-sm dark:prose-invert max-w-none",children:y.jsx("div",{className:"text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line text-sm",children:e.description})}),e.constraints&&e.constraints.length>0&&y.jsxs("div",{children:[y.jsxs("h3",{className:"flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white mb-2",children:[y.jsx(K2,{className:"w-4 h-4 text-blue-500"}),"Constraints"]}),y.jsx("ul",{className:"space-y-1",children:e.constraints.map((a,n)=>y.jsx("li",{className:"text-sm text-gray-600 dark:text-gray-400 font-mono bg-gray-50 dark:bg-slate-700/50 px-3 py-1 rounded",children:a},n))})]}),e.examples&&e.examples.length>0&&y.jsxs("div",{children:[y.jsx("h3",{className:"text-sm font-semibold text-gray-900 dark:text-white mb-3",children:"Examples"}),y.jsx("div",{className:"space-y-4",children:e.examples.map((a,n)=>y.jsxs("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:[y.jsx("div",{className:"bg-gray-50 dark:bg-slate-700/50 px-4 py-2 border-b border-gray-200 dark:border-slate-600",children:y.jsxs("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:["Example ",n+1]})}),y.jsxs("div",{className:"p-4 space-y-3",children:[y.jsxs("div",{children:[y.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1",children:"Input:"}),y.jsx("code",{className:"text-sm font-mono bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded text-gray-800 dark:text-gray-200",children:a.input})]}),y.jsxs("div",{children:[y.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1",children:"Output:"}),y.jsx("code",{className:"text-sm font-mono bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded text-gray-800 dark:text-gray-200",children:a.output})]}),a.explanation&&y.jsxs("div",{children:[y.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1",children:"Explanation:"}),y.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line",children:a.explanation})]})]})]},n))})]}),y.jsx("div",{className:"callout-tip rounded-lg p-4",children:y.jsxs("div",{className:"flex items-start gap-2",children:[y.jsx(zp,{className:"w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0"}),y.jsxs("div",{children:[y.jsx("p",{className:"text-sm font-medium text-emerald-800 dark:text-emerald-300",children:"Interview Tip"}),y.jsx("p",{className:"text-sm text-emerald-700 dark:text-emerald-400 mt-1",children:Ay(e)})]})]})})]})}function Ay(e){const t={list:"Think about time and space complexity. Can you solve this in O(n) using a hash map or two-pointer technique?",dict:"Dictionaries/hash maps provide O(1) lookups. Consider how you can use this to reduce complexity.",pandas:"Pandas provides vectorized operations that are much faster than iterating row by row.",ml:"Break the problem down mathematically first. Write out the formula, then translate it to code step by step."};return t[e.category]||t.list}function gd(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=Array(t);r<t;r++)a[r]=e[r];return a}function Iy(e){if(Array.isArray(e))return e}function Fy(e,t,r){return(t=$y(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ly(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var a,n,i,s,o=[],l=!0,d=!1;try{if(i=(r=r.call(e)).next,t!==0)for(;!(l=(a=i.call(r)).done)&&(o.push(a.value),o.length!==t);l=!0);}catch(h){d=!0,n=h}finally{try{if(!l&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw n}}return o}}function Oy(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yd(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function vd(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?yd(Object(r),!0).forEach(function(a){Fy(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):yd(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function Py(e,t){if(e==null)return{};var r,a,n=zy(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function zy(e,t){if(e==null)return{};var r={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(t.indexOf(a)!==-1)continue;r[a]=e[a]}return r}function Dy(e,t){return Iy(e)||Ly(e,t)||jy(e,t)||Oy()}function By(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $y(e){var t=By(e,"string");return typeof t=="symbol"?t:t+""}function jy(e,t){if(e){if(typeof e=="string")return gd(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?gd(e,t):void 0}}function Uy(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function wd(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function bd(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?wd(Object(r),!0).forEach(function(a){Uy(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):wd(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function Gy(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(a){return t.reduceRight(function(n,i){return i(n)},a)}}function xn(e){return function t(){for(var r=this,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return n.length>=e.length?e.apply(this,n):function(){for(var s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];return t.apply(r,[].concat(n,o))}}}function Ns(e){return{}.toString.call(e).includes("Object")}function Hy(e){return!Object.keys(e).length}function Zn(e){return typeof e=="function"}function qy(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Wy(e,t){return Ns(t)||Dr("changeType"),Object.keys(t).some(function(r){return!qy(e,r)})&&Dr("changeField"),t}function Vy(e){Zn(e)||Dr("selectorType")}function Xy(e){Zn(e)||Ns(e)||Dr("handlerType"),Ns(e)&&Object.values(e).some(function(t){return!Zn(t)})&&Dr("handlersType")}function Ky(e){e||Dr("initialIsRequired"),Ns(e)||Dr("initialType"),Hy(e)&&Dr("initialContent")}function Yy(e,t){throw new Error(e[t]||e.default)}var Qy={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Dr=xn(Yy)(Qy),Ii={changes:Wy,selector:Vy,handler:Xy,initial:Ky};function Jy(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ii.initial(e),Ii.handler(t);var r={current:e},a=xn(tv)(r,t),n=xn(ev)(r),i=xn(Ii.changes)(e),s=xn(Zy)(r);function o(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(h){return h};return Ii.selector(d),d(r.current)}function l(d){Gy(a,n,i,s)(d)}return[o,l]}function Zy(e,t){return Zn(t)?t(e.current):t}function ev(e,t){return e.current=bd(bd({},e.current),t),t}function tv(e,t,r){return Zn(t)?t(e.current):Object.keys(r).forEach(function(a){var n;return(n=t[a])===null||n===void 0?void 0:n.call(t,e.current[a])}),r}var rv={create:Jy},av={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function nv(e){return function t(){for(var r=this,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return n.length>=e.length?e.apply(this,n):function(){for(var s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];return t.apply(r,[].concat(n,o))}}}function iv(e){return{}.toString.call(e).includes("Object")}function sv(e){return e||xd("configIsRequired"),iv(e)||xd("configType"),e.urls?(ov(),{paths:{vs:e.urls.monacoBase}}):e}function ov(){console.warn(Gp.deprecation)}function lv(e,t){throw new Error(e[t]||e.default)}var Gp={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},xd=nv(lv)(Gp),uv={config:sv},cv=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return function(n){return r.reduceRight(function(i,s){return s(i)},n)}};function Hp(e,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&e[r]&&Object.assign(t[r],Hp(e[r],t[r]))}),vd(vd({},e),t)}var dv={type:"cancelation",msg:"operation is manually canceled"};function Go(e){var t=!1,r=new Promise(function(a,n){e.then(function(i){return t?n(dv):a(i)}),e.catch(n)});return r.cancel=function(){return t=!0},r}var mv=["monaco"],hv=rv.create({config:av,isInitialized:!1,resolve:null,reject:null,monaco:null}),qp=Dy(hv,2),oi=qp[0],eo=qp[1];function pv(e){var t=uv.config(e),r=t.monaco,a=Py(t,mv);eo(function(n){return{config:Hp(n.config,a),monaco:r}})}function fv(){var e=oi(function(t){var r=t.monaco,a=t.isInitialized,n=t.resolve;return{monaco:r,isInitialized:a,resolve:n}});if(!e.isInitialized){if(eo({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Go(Ho);if(window.monaco&&window.monaco.editor)return Wp(window.monaco),e.resolve(window.monaco),Go(Ho);cv(gv,vv)(wv)}return Go(Ho)}function gv(e){return document.body.appendChild(e)}function yv(e){var t=document.createElement("script");return e&&(t.src=e),t}function vv(e){var t=oi(function(a){var n=a.config,i=a.reject;return{config:n,reject:i}}),r=yv("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function wv(){var e=oi(function(r){var a=r.config,n=r.resolve,i=r.reject;return{config:a,resolve:n,reject:i}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(r){var a=r.m||r;Wp(a),e.resolve(a)},function(r){e.reject(r)})}function Wp(e){oi().monaco||eo({monaco:e})}function bv(){return oi(function(e){var t=e.monaco;return t})}var Ho=new Promise(function(e,t){return eo({resolve:e,reject:t})}),Vp={config:pv,init:fv,__getMonacoInstance:bv},xv={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},qo=xv,Sv={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},kv=Sv;function Tv({children:e}){return Nr.createElement("div",{style:kv.container},e)}var _v=Tv,Cv=_v;function Ev({width:e,height:t,isEditorReady:r,loading:a,_ref:n,className:i,wrapperProps:s}){return Nr.createElement("section",{style:{...qo.wrapper,width:e,height:t},...s},!r&&Nr.createElement(Cv,null,a),Nr.createElement("div",{ref:n,style:{...qo.fullWidth,...!r&&qo.hide},className:i}))}var Nv=Ev,Xp=M.memo(Nv);function Rv(e){M.useEffect(e,[])}var Kp=Rv;function Mv(e,t,r=!0){let a=M.useRef(!0);M.useEffect(a.current||!r?()=>{a.current=!1}:e,t)}var dt=Mv;function In(){}function Aa(e,t,r,a){return Av(e,a)||Iv(e,t,r,a)}function Av(e,t){return e.editor.getModel(Yp(e,t))}function Iv(e,t,r,a){return e.editor.createModel(t,r,a?Yp(e,a):void 0)}function Yp(e,t){return e.Uri.parse(t)}function Fv({original:e,modified:t,language:r,originalLanguage:a,modifiedLanguage:n,originalModelPath:i,modifiedModelPath:s,keepCurrentOriginalModel:o=!1,keepCurrentModifiedModel:l=!1,theme:d="light",loading:h="Loading...",options:m={},height:g="100%",width:b="100%",className:_,wrapperProps:T={},beforeMount:N=In,onMount:w=In}){let[v,x]=M.useState(!1),[E,R]=M.useState(!0),A=M.useRef(null),I=M.useRef(null),F=M.useRef(null),U=M.useRef(w),B=M.useRef(N),te=M.useRef(!1);Kp(()=>{let V=Vp.init();return V.then(re=>(I.current=re)&&R(!1)).catch(re=>(re==null?void 0:re.type)!=="cancelation"&&console.error("Monaco initialization: error:",re)),()=>A.current?Ae():V.cancel()}),dt(()=>{if(A.current&&I.current){let V=A.current.getOriginalEditor(),re=Aa(I.current,e||"",a||r||"text",i||"");re!==V.getModel()&&V.setModel(re)}},[i],v),dt(()=>{if(A.current&&I.current){let V=A.current.getModifiedEditor(),re=Aa(I.current,t||"",n||r||"text",s||"");re!==V.getModel()&&V.setModel(re)}},[s],v),dt(()=>{let V=A.current.getModifiedEditor();V.getOption(I.current.editor.EditorOption.readOnly)?V.setValue(t||""):t!==V.getValue()&&(V.executeEdits("",[{range:V.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),V.pushUndoStop())},[t],v),dt(()=>{var V,re;(re=(V=A.current)==null?void 0:V.getModel())==null||re.original.setValue(e||"")},[e],v),dt(()=>{let{original:V,modified:re}=A.current.getModel();I.current.editor.setModelLanguage(V,a||r||"text"),I.current.editor.setModelLanguage(re,n||r||"text")},[r,a,n],v),dt(()=>{var V;(V=I.current)==null||V.editor.setTheme(d)},[d],v),dt(()=>{var V;(V=A.current)==null||V.updateOptions(m)},[m],v);let ne=M.useCallback(()=>{var Ie;if(!I.current)return;B.current(I.current);let V=Aa(I.current,e||"",a||r||"text",i||""),re=Aa(I.current,t||"",n||r||"text",s||"");(Ie=A.current)==null||Ie.setModel({original:V,modified:re})},[r,t,n,e,a,i,s]),Ge=M.useCallback(()=>{var V;!te.current&&F.current&&(A.current=I.current.editor.createDiffEditor(F.current,{automaticLayout:!0,...m}),ne(),(V=I.current)==null||V.editor.setTheme(d),x(!0),te.current=!0)},[m,d,ne]);M.useEffect(()=>{v&&U.current(A.current,I.current)},[v]),M.useEffect(()=>{!E&&!v&&Ge()},[E,v,Ge]);function Ae(){var re,Ie,j,K;let V=(re=A.current)==null?void 0:re.getModel();o||((Ie=V==null?void 0:V.original)==null||Ie.dispose()),l||((j=V==null?void 0:V.modified)==null||j.dispose()),(K=A.current)==null||K.dispose()}return Nr.createElement(Xp,{width:b,height:g,isEditorReady:v,loading:h,_ref:F,className:_,wrapperProps:T})}var Lv=Fv;M.memo(Lv);function Ov(e){let t=M.useRef();return M.useEffect(()=>{t.current=e},[e]),t.current}var Pv=Ov,Fi=new Map;function zv({defaultValue:e,defaultLanguage:t,defaultPath:r,value:a,language:n,path:i,theme:s="light",line:o,loading:l="Loading...",options:d={},overrideServices:h={},saveViewState:m=!0,keepCurrentModel:g=!1,width:b="100%",height:_="100%",className:T,wrapperProps:N={},beforeMount:w=In,onMount:v=In,onChange:x,onValidate:E=In}){let[R,A]=M.useState(!1),[I,F]=M.useState(!0),U=M.useRef(null),B=M.useRef(null),te=M.useRef(null),ne=M.useRef(v),Ge=M.useRef(w),Ae=M.useRef(),V=M.useRef(a),re=Pv(i),Ie=M.useRef(!1),j=M.useRef(!1);Kp(()=>{let W=Vp.init();return W.then(Q=>(U.current=Q)&&F(!1)).catch(Q=>(Q==null?void 0:Q.type)!=="cancelation"&&console.error("Monaco initialization: error:",Q)),()=>B.current?Y():W.cancel()}),dt(()=>{var Q,le,ze,ut;let W=Aa(U.current,e||a||"",t||n||"",i||r||"");W!==((Q=B.current)==null?void 0:Q.getModel())&&(m&&Fi.set(re,(le=B.current)==null?void 0:le.saveViewState()),(ze=B.current)==null||ze.setModel(W),m&&((ut=B.current)==null||ut.restoreViewState(Fi.get(i))))},[i],R),dt(()=>{var W;(W=B.current)==null||W.updateOptions(d)},[d],R),dt(()=>{!B.current||a===void 0||(B.current.getOption(U.current.editor.EditorOption.readOnly)?B.current.setValue(a):a!==B.current.getValue()&&(j.current=!0,B.current.executeEdits("",[{range:B.current.getModel().getFullModelRange(),text:a,forceMoveMarkers:!0}]),B.current.pushUndoStop(),j.current=!1))},[a],R),dt(()=>{var Q,le;let W=(Q=B.current)==null?void 0:Q.getModel();W&&n&&((le=U.current)==null||le.editor.setModelLanguage(W,n))},[n],R),dt(()=>{var W;o!==void 0&&((W=B.current)==null||W.revealLine(o))},[o],R),dt(()=>{var W;(W=U.current)==null||W.editor.setTheme(s)},[s],R);let K=M.useCallback(()=>{var W;if(!(!te.current||!U.current)&&!Ie.current){Ge.current(U.current);let Q=i||r,le=Aa(U.current,a||e||"",t||n||"",Q||"");B.current=(W=U.current)==null?void 0:W.editor.create(te.current,{model:le,automaticLayout:!0,...d},h),m&&B.current.restoreViewState(Fi.get(Q)),U.current.editor.setTheme(s),o!==void 0&&B.current.revealLine(o),A(!0),Ie.current=!0}},[e,t,r,a,n,i,d,h,m,s,o]);M.useEffect(()=>{R&&ne.current(B.current,U.current)},[R]),M.useEffect(()=>{!I&&!R&&K()},[I,R,K]),V.current=a,M.useEffect(()=>{var W,Q;R&&x&&((W=Ae.current)==null||W.dispose(),Ae.current=(Q=B.current)==null?void 0:Q.onDidChangeModelContent(le=>{j.current||x(B.current.getValue(),le)}))},[R,x]),M.useEffect(()=>{if(R){let W=U.current.editor.onDidChangeMarkers(Q=>{var ze;let le=(ze=B.current.getModel())==null?void 0:ze.uri;if(le&&Q.find(ut=>ut.path===le.path)){let ut=U.current.editor.getModelMarkers({resource:le});E==null||E(ut)}});return()=>{W==null||W.dispose()}}return()=>{}},[R,E]);function Y(){var W,Q;(W=Ae.current)==null||W.dispose(),g?m&&Fi.set(i,B.current.saveViewState()):(Q=B.current.getModel())==null||Q.dispose(),B.current.dispose()}return Nr.createElement(Xp,{width:b,height:_,isEditorReady:R,loading:l,_ref:te,className:T,wrapperProps:N})}var Dv=zv,Bv=M.memo(Dv),Qp=Bv;function $v({results:e,output:t,isRunning:r}){return y.jsxs("div",{className:"border-t border-gray-200 dark:border-slate-600 bg-gray-900 dark:bg-slate-900 max-h-[250px] overflow-y-auto scrollbar-thin shrink-0",children:[y.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 border-b border-gray-700",children:[y.jsx(Z2,{className:"w-3.5 h-3.5 text-gray-400"}),y.jsx("span",{className:"text-xs font-medium text-gray-400",children:"Console Output"})]}),r&&y.jsxs("div",{className:"flex items-center gap-2 px-4 py-3",children:[y.jsx(Da,{className:"w-4 h-4 text-emerald-500 animate-spin"}),y.jsx("span",{className:"text-sm text-gray-400",children:"Running test cases..."})]}),!r&&t&&y.jsx("div",{className:"px-4 py-2 text-sm text-gray-400 font-mono",children:t}),!r&&e.length>0&&y.jsx("div",{className:"px-4 pb-3 space-y-1",children:e.map(a=>y.jsxs("div",{className:`
                flex items-start gap-2 px-3 py-2 rounded text-sm font-mono
                ${a.passed?"bg-emerald-950/20 text-emerald-400":"bg-red-950/20 text-red-400"}
              `,children:[a.passed?y.jsx(rn,{className:"w-4 h-4 mt-0.5 shrink-0"}):y.jsx(ey,{className:"w-4 h-4 mt-0.5 shrink-0"}),y.jsxs("div",{className:"flex-1 min-w-0",children:[y.jsxs("div",{className:"font-medium",children:["Test ",a.testNumber,": ",a.passed?"Passed":"Failed"]}),!a.passed&&y.jsx("div",{className:"mt-1 space-y-1 text-xs",children:a.error?y.jsx("div",{className:"text-red-400",children:a.error}):y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"text-gray-500",children:["Input: ",a.input]}),y.jsxs("div",{className:"text-gray-500",children:["Expected: ",a.expected]}),y.jsxs("div",{className:"text-red-400",children:["Got: ",a.actual]})]})})]})]},a.testNumber))}),!r&&e.length===0&&y.jsx("div",{className:"px-4 py-6 text-center text-gray-500 text-sm",children:'Click "Run Code" to test your solution against the test cases.'})]})}function jv({question:e,code:t,onCodeChange:r,onRun:a,onSubmit:n,results:i,isRunning:s,output:o}){const{theme:l}=Cu(),[d,h]=M.useState(!0);if(!e)return null;const m=i.filter(b=>b.passed).length,g=i.length;return y.jsxs("div",{className:"h-full flex flex-col",children:[y.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 shrink-0",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("span",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Solution"}),y.jsx("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:"Python 3"})]}),y.jsxs("button",{onClick:()=>r(e.starterCode),className:"flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors",children:[y.jsx(_u,{className:"w-3.5 h-3.5"}),"Reset"]})]}),y.jsx("div",{className:"flex-1 min-h-0",children:y.jsx(Qp,{height:"100%",language:"python",theme:l==="dark"?"vs-dark":"vs",value:t,onChange:b=>r(b||""),options:{fontSize:14,fontFamily:"'JetBrains Mono', 'Fira Code', monospace",fontLigatures:!0,minimap:{enabled:!1},scrollBeyondLastLine:!1,padding:{top:16},lineNumbers:"on",renderLineHighlight:"all",tabSize:4,insertSpaces:!0,wordWrap:"on",automaticLayout:!0,suggest:{showKeywords:!0,showSnippets:!0},quickSuggestions:!1,parameterHints:{enabled:!1}},loading:y.jsx("div",{className:"flex items-center justify-center h-full bg-gray-900",children:y.jsx(Da,{className:"w-8 h-8 text-emerald-500 animate-spin"})})})}),y.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-800/50 shrink-0",children:[y.jsxs("button",{onClick:()=>h(!d),className:"flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors",children:[y.jsx(q2,{className:`w-4 h-4 transition-transform ${d?"":"-rotate-90"}`}),"Console ",i.length>0&&`(${m}/${g})`]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsxs("button",{onClick:a,disabled:s,className:`\r
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium\r
              bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-300\r
              hover:bg-gray-300 dark:hover:bg-slate-500\r
              disabled:opacity-50 disabled:cursor-not-allowed\r
              transition-all duration-200\r
            `,children:[s?y.jsx(Da,{className:"w-4 h-4 animate-spin"}):y.jsx(Dp,{className:"w-4 h-4"}),"Run Code"]}),y.jsxs("button",{onClick:n,disabled:s,className:`\r
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium\r
              bg-emerald-600 text-white\r
              hover:bg-emerald-700\r
              disabled:opacity-50 disabled:cursor-not-allowed\r
              transition-all duration-200\r
            `,children:[y.jsx(Bp,{className:"w-4 h-4"}),"Submit"]})]})]}),d&&y.jsx($v,{results:i,output:o,isRunning:s})]})}function Sd(){const{questionId:e}=Js(),t=pa(),{pythonSolved:r,markPythonSolved:a}=an(),{results:n,isRunning:i,output:s,runCode:o,clearResults:l}=Ey(),[d,h]=M.useState(null),[m,g]=M.useState({}),b=M.useMemo(()=>d?fd.filter(R=>R.category===d):fd,[d]),_=M.useMemo(()=>{if(e){const R=b.findIndex(A=>A.id===parseInt(e));if(R>=0)return R}return 0},[e,b]),T=b[_],N=T?m[T.id]||T.starterCode:"",w=R=>{T&&g(A=>({...A,[T.id]:R}))},v=R=>{if(R>=0&&R<b.length){const A=b[R];t(`/python/${A.id}`),l()}},x=()=>{T&&o(N,T.testCases,T.functionName)},E=()=>{T&&(o(N,T.testCases,T.functionName),setTimeout(()=>{},1e3))};return M.useEffect(()=>{n.length>0&&!i&&n.every(A=>A.passed)&&T&&a(T.id)},[n,i,T,a]),M.useEffect(()=>{if(b.length>0){const R=b[0];(!e||!b.find(A=>A.id===parseInt(e)))&&t(`/python/${R.id}`,{replace:!0})}},[d]),T?y.jsxs("div",{className:"h-full flex flex-col",children:[y.jsx(Ry,{questions:b,currentIndex:_,onNavigate:v,solvedIds:r,activeCategory:d,onCategoryChange:h}),y.jsxs("div",{className:"flex-1 flex min-h-0",children:[y.jsx("div",{className:"w-1/2 border-r border-gray-200 dark:border-slate-700 overflow-hidden",children:y.jsx(My,{question:T,isSolved:r.has(T.id)})}),y.jsx("div",{className:"w-1/2 overflow-hidden",children:y.jsx(jv,{question:T,code:N,onCodeChange:w,onRun:x,onSubmit:E,results:n,isRunning:i,output:s})})]})]}):y.jsx("div",{className:"flex items-center justify-center h-full",children:y.jsx("p",{className:"text-gray-500",children:"No questions found."})})}const Yt=[{id:1,title:"Employees Earning More Than Their Managers",difficulty:"Easy",description:`Write a query to find employees who earn more than their managers.

**Table: Employee**
| id | name   | salary | managerId |
|----|--------|--------|-----------|
| 1  | Joe    | 70000  | 3         |
| 2  | Henry  | 80000  | 4         |
| 3  | Sam    | 60000  | NULL      |
| 4  | Max    | 90000  | NULL      |`,schema:{name:"Employee",columns:[{name:"id",type:"INT",key:"PK"},{name:"name",type:"VARCHAR"},{name:"salary",type:"INT"},{name:"managerId",type:"INT",key:"FK"}]},sampleData:`INSERT INTO Employee VALUES (1, 'Joe', 70000, 3);
INSERT INTO Employee VALUES (2, 'Henry', 80000, 4);
INSERT INTO Employee VALUES (3, 'Sam', 60000, NULL);
INSERT INTO Employee VALUES (4, 'Max', 90000, NULL);`,starterCode:`SELECT e.name AS Employee
FROM Employee e
JOIN Employee m ON e.managerId = m.id
WHERE e.salary > m.salary;`,expectedOutput:[{Employee:"Joe"}]},{id:2,title:"Duplicate Emails",difficulty:"Easy",description:`Write a query to find all duplicate email addresses in a table.

**Table: Person**
| id | email          |
|----|----------------|
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |`,schema:{name:"Person",columns:[{name:"id",type:"INT",key:"PK"},{name:"email",type:"VARCHAR"}]},sampleData:`INSERT INTO Person VALUES (1, 'john@example.com');
INSERT INTO Person VALUES (2, 'bob@example.com');
INSERT INTO Person VALUES (3, 'john@example.com');`,starterCode:`SELECT email
FROM Person
GROUP BY email
HAVING COUNT(*) > 1;`,expectedOutput:[{email:"john@example.com"}]},{id:3,title:"Delete Duplicate Emails",difficulty:"Easy",description:"Write a query to delete all duplicate email entries, keeping only the one with the smallest id.",schema:{name:"Person",columns:[{name:"id",type:"INT",key:"PK"},{name:"email",type:"VARCHAR"}]},sampleData:`INSERT INTO Person VALUES (1, 'john@example.com');
INSERT INTO Person VALUES (2, 'bob@example.com');
INSERT INTO Person VALUES (3, 'john@example.com');`,starterCode:`DELETE FROM Person
WHERE id NOT IN (
    SELECT MIN(id)
    FROM Person
    GROUP BY email
);`,expectedOutput:[{id:1,email:"john@example.com"},{id:2,email:"bob@example.com"}]},{id:4,title:"Second Highest Salary",difficulty:"Medium",description:"Write a query to find the second highest salary from the Employee table. If there is no second highest salary, return NULL.",schema:{name:"Employee",columns:[{name:"id",type:"INT",key:"PK"},{name:"salary",type:"INT"}]},sampleData:`INSERT INTO Employee VALUES (1, 100);
INSERT INTO Employee VALUES (2, 200);
INSERT INTO Employee VALUES (3, 300);`,starterCode:`SELECT MAX(salary) AS SecondHighestSalary
FROM Employee
WHERE salary < (SELECT MAX(salary) FROM Employee);`,expectedOutput:[{SecondHighestSalary:200}]},{id:5,title:"Customers Who Never Order",difficulty:"Easy",description:`Write a query to find all customers who never placed an order.

**Table: Customers**
| id | name  |
|----|-------|
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |

**Table: Orders**
| id | customerId |
|----|------------|
| 1  | 3          |
| 2  | 4          |`,schema:{name:"Customers + Orders",columns:[{name:"Customers.id",type:"INT",key:"PK"},{name:"Customers.name",type:"VARCHAR"},{name:"Orders.id",type:"INT",key:"PK"},{name:"Orders.customerId",type:"INT",key:"FK"}]},sampleData:`INSERT INTO Customers VALUES (1, 'Joe');
INSERT INTO Customers VALUES (2, 'Henry');
INSERT INTO Customers VALUES (3, 'Sam');
INSERT INTO Customers VALUES (4, 'Max');
INSERT INTO Orders VALUES (1, 3);
INSERT INTO Orders VALUES (2, 4);`,starterCode:`SELECT c.name AS Customers
FROM Customers c
LEFT JOIN Orders o ON c.id = o.customerId
WHERE o.id IS NULL;`,expectedOutput:[{Customers:"Joe"},{Customers:"Henry"}]},{id:6,title:"Department Top Three Salaries",difficulty:"Hard",description:"Find the employees who are in the top three highest salaries in each department.",schema:{name:"Employee + Department",columns:[{name:"Employee.id",type:"INT"},{name:"Employee.name",type:"VARCHAR"},{name:"Employee.salary",type:"INT"},{name:"Employee.departmentId",type:"INT"},{name:"Department.id",type:"INT"},{name:"Department.name",type:"VARCHAR"}]},sampleData:`INSERT INTO Department VALUES (1, 'IT');
INSERT INTO Department VALUES (2, 'Sales');
INSERT INTO Employee VALUES (1, 'Joe', 85000, 1);
INSERT INTO Employee VALUES (2, 'Henry', 80000, 2);
INSERT INTO Employee VALUES (3, 'Sam', 60000, 2);
INSERT INTO Employee VALUES (4, 'Max', 90000, 1);
INSERT INTO Employee VALUES (5, 'Janet', 69000, 1);
INSERT INTO Employee VALUES (6, 'Randy', 85000, 1);`,starterCode:`SELECT d.name AS Department, e.name AS Employee, e.salary
FROM Employee e
JOIN Department d ON e.departmentId = d.id
WHERE (
    SELECT COUNT(DISTINCT e2.salary)
    FROM Employee e2
    WHERE e2.departmentId = e.departmentId AND e2.salary > e.salary
) < 3
ORDER BY d.name, e.salary DESC;`,expectedOutput:[{Department:"IT",Employee:"Max",salary:9e4},{Department:"IT",Employee:"Joe",salary:85e3},{Department:"IT",Employee:"Randy",salary:85e3},{Department:"Sales",Employee:"Henry",salary:8e4}]},{id:7,title:"Consecutive Numbers",difficulty:"Medium",description:"Find all numbers that appear at least three times consecutively.",schema:{name:"Logs",columns:[{name:"id",type:"INT",key:"PK"},{name:"num",type:"VARCHAR"}]},sampleData:`INSERT INTO Logs VALUES (1, '1');
INSERT INTO Logs VALUES (2, '1');
INSERT INTO Logs VALUES (3, '1');
INSERT INTO Logs VALUES (4, '2');
INSERT INTO Logs VALUES (5, '1');
INSERT INTO Logs VALUES (6, '2');
INSERT INTO Logs VALUES (7, '2');`,starterCode:`SELECT DISTINCT l1.num AS ConsecutiveNums
FROM Logs l1
JOIN Logs l2 ON l1.id = l2.id - 1
JOIN Logs l3 ON l1.id = l3.id - 2
WHERE l1.num = l2.num AND l2.num = l3.num;`,expectedOutput:[{ConsecutiveNums:"1"}]},{id:8,title:"Employees with Missing Information",difficulty:"Easy",description:"Report the names of employees who are missing information (either missing from Employees or Salaries table).",schema:{name:"Employees + Salaries",columns:[{name:"Employees.employee_id",type:"INT"},{name:"Employees.name",type:"VARCHAR"},{name:"Salaries.employee_id",type:"INT"},{name:"Salaries.salary",type:"INT"}]},sampleData:`INSERT INTO Employees VALUES (2, 'Crew');
INSERT INTO Employees VALUES (4, 'Haven');
INSERT INTO Employees VALUES (5, 'Kevin');
INSERT INTO Salaries VALUES (5, 80000);
INSERT INTO Salaries VALUES (2, 76000);
INSERT INTO Salaries VALUES (4, 65000);`,starterCode:`SELECT e.employee_id, e.name
FROM Employees e
LEFT JOIN Salaries s ON e.employee_id = s.employee_id
WHERE s.employee_id IS NULL
UNION
SELECT s.employee_id, e.name
FROM Salaries s
LEFT JOIN Employees e ON s.employee_id = e.employee_id
WHERE e.employee_id IS NULL;`,expectedOutput:[{employee_id:2,name:"Crew"},{employee_id:4,name:"Haven"},{employee_id:5,name:"Kevin"}]},{id:9,title:"Game Play Analysis",difficulty:"Medium",description:"Find the install date of the game and the number of players that installed the game on that day (Day 1 retention).",schema:{name:"Activity",columns:[{name:"player_id",type:"INT"},{name:"device_id",type:"INT"},{name:"event_date",type:"DATE"},{name:"games_played",type:"INT"}]},sampleData:`INSERT INTO Activity VALUES (1, 2, '2016-03-01', 5);
INSERT INTO Activity VALUES (2, 3, '2016-05-01', 6);
INSERT INTO Activity VALUES (1, 2, '2016-03-02', 6);
INSERT INTO Activity VALUES (3, 1, '2016-03-01', 3);
INSERT INTO Activity VALUES (3, 4, '2016-07-01', 1);`,starterCode:`SELECT 
    a.event_date AS install_dt,
    COUNT(DISTINCT a.player_id) AS installs,
    ROUND(COUNT(DISTINCT ret.player_id) / COUNT(DISTINCT a.player_id), 2) AS day1_retention
FROM Activity a
LEFT JOIN Activity ret 
    ON a.player_id = ret.player_id 
    AND DATEDIFF(ret.event_date, a.event_date) = 1
WHERE a.event_date = (
    SELECT MIN(event_date) FROM Activity
)
GROUP BY a.event_date;`,expectedOutput:[{install_dt:"2016-03-01",installs:2,day1_retention:.5}]},{id:10,title:"Triangle Classification",difficulty:"Easy",description:"Determine if the three sides form a triangle and classify it as Equilateral, Isosceles, or Scalene.",schema:{name:"Triangle",columns:[{name:"x",type:"INT"},{name:"y",type:"INT"},{name:"z",type:"INT"}]},sampleData:`INSERT INTO Triangle VALUES (13, 15, 30);
INSERT INTO Triangle VALUES (10, 20, 15);`,starterCode:`SELECT 
    CASE 
        WHEN x + y <= z OR x + z <= y OR y + z <= x THEN 'Not A Triangle'
        WHEN x = y AND y = z THEN 'Equilateral'
        WHEN x = y OR y = z OR x = z THEN 'Isosceles'
        ELSE 'Scalene'
    END AS triangle_type
FROM Triangle;`,expectedOutput:[{triangle_type:"Not A Triangle"},{triangle_type:"Isosceles"}]},{id:11,title:"Department Highest Salary",difficulty:"Medium",description:"Find the employees who have the highest salary in each department.",schema:{name:"Employee + Department",columns:[{name:"Employee.id",type:"INT"},{name:"Employee.name",type:"VARCHAR"},{name:"Employee.salary",type:"INT"},{name:"Employee.departmentId",type:"INT"},{name:"Department.id",type:"INT"},{name:"Department.name",type:"VARCHAR"}]},sampleData:`INSERT INTO Department VALUES (1, 'IT');
INSERT INTO Department VALUES (2, 'Sales');
INSERT INTO Employee VALUES (1, 'Joe', 70000, 1);
INSERT INTO Employee VALUES (2, 'Jim', 90000, 2);
INSERT INTO Employee VALUES (3, 'Henry', 80000, 2);
INSERT INTO Employee VALUES (4, 'Sam', 60000, 1);`,starterCode:`SELECT d.name AS Department, e.name AS Employee, e.salary
FROM Employee e
JOIN Department d ON e.departmentId = d.id
WHERE e.salary = (
    SELECT MAX(salary)
    FROM Employee
    WHERE departmentId = d.id
);`,expectedOutput:[{Department:"IT",Employee:"Joe",salary:7e4},{Department:"Sales",Employee:"Jim",salary:9e4}]},{id:12,title:"Rainfall Year Trend",difficulty:"Medium",description:"Find the total rainfall for each year and classify it as Wet or Dry year.",schema:{name:"Weather",columns:[{name:"id",type:"INT"},{name:"recordDate",type:"DATE"},{name:"rainfall",type:"INT"}]},sampleData:`INSERT INTO Weather VALUES (1, '2020-01-01', 10);
INSERT INTO Weather VALUES (2, '2020-01-02', 20);
INSERT INTO Weather VALUES (3, '2020-01-03', 30);
INSERT INTO Weather VALUES (4, '2021-01-01', 5);
INSERT INTO Weather VALUES (5, '2021-01-02', 10);`,starterCode:`SELECT 
    YEAR(recordDate) AS year,
    SUM(rainfall) AS total_rainfall,
    CASE 
        WHEN SUM(rainfall) > 50 THEN 'Wet'
        ELSE 'Dry'
    END AS year_type
FROM Weather
GROUP BY YEAR(recordDate)
ORDER BY year;`,expectedOutput:[{year:2020,total_rainfall:60,year_type:"Wet"},{year:2021,total_rainfall:15,year_type:"Dry"}]},{id:13,title:"Running Total of Sales",difficulty:"Medium",description:"Calculate a running total of sales ordered by date.",schema:{name:"Sales",columns:[{name:"id",type:"INT"},{name:"sale_date",type:"DATE"},{name:"amount",type:"INT"}]},sampleData:`INSERT INTO Sales VALUES (1, '2024-01-01', 100);
INSERT INTO Sales VALUES (2, '2024-01-02', 200);
INSERT INTO Sales VALUES (3, '2024-01-03', 150);`,starterCode:`SELECT 
    id,
    sale_date,
    amount,
    SUM(amount) OVER (ORDER BY sale_date) AS running_total
FROM Sales
ORDER BY sale_date;`,expectedOutput:[{id:1,amount:100,running_total:100},{id:2,amount:200,running_total:300},{id:3,amount:150,running_total:450}]},{id:14,title:"Average Salary by Department",difficulty:"Easy",description:"Calculate the average salary for each department.",schema:{name:"Employee",columns:[{name:"id",type:"INT"},{name:"name",type:"VARCHAR"},{name:"salary",type:"INT"},{name:"departmentId",type:"INT"}]},sampleData:`INSERT INTO Employee VALUES (1, 'Joe', 70000, 1);
INSERT INTO Employee VALUES (2, 'Jim', 90000, 2);
INSERT INTO Employee VALUES (3, 'Henry', 80000, 2);
INSERT INTO Employee VALUES (4, 'Sam', 60000, 1);`,starterCode:`SELECT 
    departmentId,
    AVG(salary) AS avg_salary
FROM Employee
GROUP BY departmentId;`,expectedOutput:[{departmentId:1,avg_salary:65e3},{departmentId:2,avg_salary:85e3}]},{id:15,title:"Rank Scores",difficulty:"Medium",description:"Write a query to rank scores. If there is a tie, both should have the same rank. No gaps in ranking.",schema:{name:"Scores",columns:[{name:"id",type:"INT"},{name:"score",type:"DECIMAL"}]},sampleData:`INSERT INTO Scores VALUES (1, 3.50);
INSERT INTO Scores VALUES (2, 3.65);
INSERT INTO Scores VALUES (3, 4.00);
INSERT INTO Scores VALUES (4, 3.85);
INSERT INTO Scores VALUES (5, 4.00);
INSERT INTO Scores VALUES (6, 3.65);`,starterCode:`SELECT 
    score,
    DENSE_RANK() OVER (ORDER BY score DESC) AS rank
FROM Scores
ORDER BY score DESC;`,expectedOutput:[{score:4,rank:1},{score:4,rank:1},{score:3.85,rank:2},{score:3.65,rank:3},{score:3.65,rank:3},{score:3.5,rank:4}]},{id:16,title:"Month over Month Growth",difficulty:"Hard",description:"Calculate the month-over-month revenue growth rate.",schema:{name:"Revenues",columns:[{name:"month",type:"DATE"},{name:"revenue",type:"INT"}]},sampleData:`INSERT INTO Revenues VALUES ('2024-01-01', 1000);
INSERT INTO Revenues VALUES ('2024-02-01', 1500);
INSERT INTO Revenues VALUES ('2024-03-01', 1200);
INSERT INTO Revenues VALUES ('2024-04-01', 2000);`,starterCode:`SELECT 
    month,
    revenue,
    LAG(revenue) OVER (ORDER BY month) AS prev_revenue,
    ROUND((revenue - LAG(revenue) OVER (ORDER BY month)) * 100.0 / LAG(revenue) OVER (ORDER BY month), 2) AS growth_pct
FROM Revenues
ORDER BY month;`,expectedOutput:[{month:"2024-01",revenue:1e3,growth_pct:null},{month:"2024-02",revenue:1500,growth_pct:50},{month:"2024-03",revenue:1200,growth_pct:-20},{month:"2024-04",revenue:2e3,growth_pct:66.67}]},{id:17,title:"Find Median Salary",difficulty:"Hard",description:"Find the median salary for each department.",schema:{name:"Employee",columns:[{name:"id",type:"INT"},{name:"name",type:"VARCHAR"},{name:"salary",type:"INT"},{name:"departmentId",type:"INT"}]},sampleData:`INSERT INTO Employee VALUES (1, 'Joe', 70000, 1);
INSERT INTO Employee VALUES (2, 'Jim', 90000, 1);
INSERT INTO Employee VALUES (3, 'Henry', 80000, 2);
INSERT INTO Employee VALUES (4, 'Sam', 60000, 2);`,starterCode:`WITH Ranked AS (
    SELECT 
        departmentId,
        salary,
        ROW_NUMBER() OVER (PARTITION BY departmentId ORDER BY salary) AS rn,
        COUNT(*) OVER (PARTITION BY departmentId) AS cnt
    FROM Employee
)
SELECT departmentId, AVG(salary) AS median_salary
FROM Ranked
WHERE rn IN (FLOOR((cnt+1)/2.0), CEIL((cnt+1)/2.0))
GROUP BY departmentId;`,expectedOutput:[{departmentId:1,median_salary:8e4},{departmentId:2,median_salary:7e4}]},{id:18,title:"User Activity Summary",difficulty:"Easy",description:"Summarize each user's total activity: total sessions and total duration.",schema:{name:"UserActivity",columns:[{name:"user_id",type:"INT"},{name:"session_id",type:"INT"},{name:"duration",type:"INT"}]},sampleData:`INSERT INTO UserActivity VALUES (1, 1, 30);
INSERT INTO UserActivity VALUES (1, 2, 45);
INSERT INTO UserActivity VALUES (2, 3, 20);
INSERT INTO UserActivity VALUES (3, 4, 60);
INSERT INTO UserActivity VALUES (3, 5, 50);`,starterCode:`SELECT 
    user_id,
    COUNT(*) AS total_sessions,
    SUM(duration) AS total_duration,
    AVG(duration) AS avg_session_duration
FROM UserActivity
GROUP BY user_id;`,expectedOutput:[{user_id:1,total_sessions:2,total_duration:75},{user_id:2,total_sessions:1,total_duration:20},{user_id:3,total_sessions:2,total_duration:110}]},{id:19,title:"Pairs of Products",difficulty:"Medium",description:"Find all pairs of products that were bought together in the same order.",schema:{name:"OrderItems",columns:[{name:"order_id",type:"INT"},{name:"product_id",type:"INT"}]},sampleData:`INSERT INTO OrderItems VALUES (1, 1);
INSERT INTO OrderItems VALUES (1, 2);
INSERT INTO OrderItems VALUES (1, 3);
INSERT INTO OrderItems VALUES (2, 1);
INSERT INTO OrderItems VALUES (2, 2);
INSERT INTO OrderItems VALUES (3, 1);`,starterCode:`SELECT 
    a.product_id AS product1,
    b.product_id AS product2,
    COUNT(*) AS times_bought_together
FROM OrderItems a
JOIN OrderItems b ON a.order_id = b.order_id AND a.product_id < b.product_id
GROUP BY a.product_id, b.product_id
ORDER BY times_bought_together DESC;`,expectedOutput:[{product1:1,product2:2,times_bought_together:2},{product1:1,product2:3,times_bought_together:1},{product1:2,product2:3,times_bought_together:1}]},{id:20,title:"Year over Year Comparison",difficulty:"Medium",description:"Compare each year's sales with the previous year's sales.",schema:{name:"Sales",columns:[{name:"sale_id",type:"INT"},{name:"sale_date",type:"DATE"},{name:"amount",type:"INT"}]},sampleData:`INSERT INTO Sales VALUES (1, '2022-06-15', 100);
INSERT INTO Sales VALUES (2, '2023-06-20', 150);
INSERT INTO Sales VALUES (3, '2023-12-25', 200);
INSERT INTO Sales VALUES (4, '2024-06-18', 250);`,starterCode:`SELECT 
    YEAR(sale_date) AS sale_year,
    SUM(amount) AS total_sales,
    LAG(SUM(amount)) OVER (ORDER BY YEAR(sale_date)) AS prev_year_sales
FROM Sales
GROUP BY YEAR(sale_date)
ORDER BY sale_year;`,expectedOutput:[{sale_year:2022,total_sales:100,prev_year_sales:null},{sale_year:2023,total_sales:350,prev_year_sales:100},{sale_year:2024,total_sales:250,prev_year_sales:350}]},{id:21,title:"Cohort Retention Analysis",difficulty:"Hard",description:"Calculate user retention by cohort (signup month).",schema:{name:"UserSignups",columns:[{name:"user_id",type:"INT"},{name:"signup_date",type:"DATE"},{name:"activity_date",type:"DATE"}]},sampleData:`INSERT INTO UserSignups VALUES (1, '2024-01-01', '2024-01-01');
INSERT INTO UserSignups VALUES (1, '2024-01-01', '2024-02-01');
INSERT INTO UserSignups VALUES (2, '2024-01-01', '2024-01-01');
INSERT INTO UserSignups VALUES (3, '2024-02-01', '2024-02-01');`,starterCode:`SELECT 
    DATE_FORMAT(signup_date, '%Y-%m') AS cohort,
    COUNT(DISTINCT user_id) AS total_users,
    COUNT(DISTINCT CASE WHEN activity_date > signup_date THEN user_id END) AS retained_users
FROM UserSignups
GROUP BY DATE_FORMAT(signup_date, '%Y-%m');`,expectedOutput:[{cohort:"2024-01",total_users:2,retained_users:1},{cohort:"2024-02",total_users:1,retained_users:0}]},{id:22,title:"Gaps in Sequence",difficulty:"Medium",description:"Find the gaps (missing numbers) in a sequence of IDs.",schema:{name:"Numbers",columns:[{name:"num",type:"INT"}]},sampleData:`INSERT INTO Numbers VALUES (1);
INSERT INTO Numbers VALUES (2);
INSERT INTO Numbers VALUES (5);
INSERT INTO Numbers VALUES (6);
INSERT INTO Numbers VALUES (7);
INSERT INTO Numbers VALUES (9);`,starterCode:`SELECT 
    n1.num + 1 AS gap_start,
    n2.num - 1 AS gap_end
FROM Numbers n1
JOIN Numbers n2 ON n2.num = (
    SELECT MIN(num) FROM Numbers WHERE num > n1.num
)
WHERE n2.num - n1.num > 1;`,expectedOutput:[{gap_start:3,gap_end:4},{gap_start:8,gap_end:8}]},{id:23,title:"Percentage of Total",difficulty:"Easy",description:"Calculate each category's percentage of the total.",schema:{name:"Sales",columns:[{name:"product",type:"VARCHAR"},{name:"category",type:"VARCHAR"},{name:"amount",type:"INT"}]},sampleData:`INSERT INTO Sales VALUES ('Laptop', 'Electronics', 1000);
INSERT INTO Sales VALUES ('Phone', 'Electronics', 800);
INSERT INTO Sales VALUES ('Shirt', 'Clothing', 50);
INSERT INTO Sales VALUES ('Pants', 'Clothing', 80);`,starterCode:`SELECT 
    category,
    SUM(amount) AS category_total,
    ROUND(SUM(amount) * 100.0 / (SELECT SUM(amount) FROM Sales), 2) AS pct_of_total
FROM Sales
GROUP BY category
ORDER BY category_total DESC;`,expectedOutput:[{category:"Electronics",category_total:1800,pct_of_total:93.75},{category:"Clothing",category_total:130,pct_of_total:6.25}]},{id:24,title:"First and Last Purchase",difficulty:"Easy",description:"Find each customer's first and last purchase date.",schema:{name:"Purchases",columns:[{name:"customer_id",type:"INT"},{name:"purchase_date",type:"DATE"},{name:"amount",type:"INT"}]},sampleData:`INSERT INTO Purchases VALUES (1, '2024-01-01', 100);
INSERT INTO Purchases VALUES (1, '2024-03-15', 200);
INSERT INTO Purchases VALUES (2, '2024-02-10', 150);`,starterCode:`SELECT 
    customer_id,
    MIN(purchase_date) AS first_purchase,
    MAX(purchase_date) AS last_purchase
FROM Purchases
GROUP BY customer_id;`,expectedOutput:[{customer_id:1,first_purchase:"2024-01-01",last_purchase:"2024-03-15"},{customer_id:2,first_purchase:"2024-02-10",last_purchase:"2024-02-10"}]},{id:25,title:"Delete Low Salary Employees",difficulty:"Easy",description:"Delete all employees whose salary is below the company average.",schema:{name:"Employee",columns:[{name:"id",type:"INT"},{name:"name",type:"VARCHAR"},{name:"salary",type:"INT"}]},sampleData:`INSERT INTO Employee VALUES (1, 'Joe', 40000);
INSERT INTO Employee VALUES (2, 'Jim', 60000);
INSERT INTO Employee VALUES (3, 'Henry', 50000);`,starterCode:`DELETE FROM Employee
WHERE salary < (SELECT AVG(salary) FROM Employee);`,expectedOutput:[{id:2,name:"Jim",salary:6e4}]},{id:26,title:"Nth Highest Salary",difficulty:"Medium",description:"Write a query to find the nth highest salary. If the nth highest doesn't exist, return NULL.",schema:{name:"Employee",columns:[{name:"id",type:"INT"},{name:"salary",type:"INT"}]},sampleData:`INSERT INTO Employee VALUES (1, 100);
INSERT INTO Employee VALUES (2, 200);
INSERT INTO Employee VALUES (3, 300);`,starterCode:`-- Find 2nd highest salary
SELECT DISTINCT salary AS getNthHighestSalary
FROM Employee
ORDER BY salary DESC
LIMIT 1 OFFSET 1;`,expectedOutput:[{getNthHighestSalary:200}]},{id:27,title:"Quarterly Sales Report",difficulty:"Medium",description:"Generate a quarterly sales report.",schema:{name:"Sales",columns:[{name:"sale_id",type:"INT"},{name:"sale_date",type:"DATE"},{name:"amount",type:"INT"}]},sampleData:`INSERT INTO Sales VALUES (1, '2024-01-15', 100);
INSERT INTO Sales VALUES (2, '2024-02-20', 200);
INSERT INTO Sales VALUES (3, '2024-04-10', 150);
INSERT INTO Sales VALUES (4, '2024-07-25', 300);
INSERT INTO Sales VALUES (5, '2024-11-05', 250);`,starterCode:`SELECT 
    CONCAT(YEAR(sale_date), '-Q', QUARTER(sale_date)) AS quarter,
    COUNT(*) AS num_sales,
    SUM(amount) AS total_revenue
FROM Sales
GROUP BY YEAR(sale_date), QUARTER(sale_date)
ORDER BY quarter;`,expectedOutput:[{quarter:"2024-Q1",num_sales:2,total_revenue:300},{quarter:"2024-Q2",num_sales:1,total_revenue:150},{quarter:"2024-Q3",num_sales:1,total_revenue:300},{quarter:"2024-Q4",num_sales:1,total_revenue:250}]},{id:28,title:"Pivot Sales by Region",difficulty:"Hard",description:"Pivot sales data so that regions become columns.",schema:{name:"Sales",columns:[{name:"product",type:"VARCHAR"},{name:"region",type:"VARCHAR"},{name:"amount",type:"INT"}]},sampleData:`INSERT INTO Sales VALUES ('Widget', 'North', 100);
INSERT INTO Sales VALUES ('Widget', 'South', 150);
INSERT INTO Sales VALUES ('Gadget', 'North', 200);
INSERT INTO Sales VALUES ('Gadget', 'South', 250);`,starterCode:`SELECT 
    product,
    SUM(CASE WHEN region = 'North' THEN amount ELSE 0 END) AS north,
    SUM(CASE WHEN region = 'South' THEN amount ELSE 0 END) AS south
FROM Sales
GROUP BY product;`,expectedOutput:[{product:"Widget",north:100,south:150},{product:"Gadget",north:200,south:250}]},{id:29,title:"Sequential Purchase Detection",difficulty:"Hard",description:"Find customers who made purchases on consecutive days.",schema:{name:"Purchases",columns:[{name:"customer_id",type:"INT"},{name:"purchase_date",type:"DATE"}]},sampleData:`INSERT INTO Purchases VALUES (1, '2024-01-01');
INSERT INTO Purchases VALUES (1, '2024-01-02');
INSERT INTO Purchases VALUES (1, '2024-01-05');
INSERT INTO Purchases VALUES (2, '2024-01-01');
INSERT INTO Purchases VALUES (2, '2024-01-03');`,starterCode:`SELECT DISTINCT p1.customer_id
FROM Purchases p1
JOIN Purchases p2 
    ON p1.customer_id = p2.customer_id 
    AND DATEDIFF(p2.purchase_date, p1.purchase_date) = 1;`,expectedOutput:[{customer_id:1}]},{id:30,title:"Revenue Moving Average",difficulty:"Medium",description:"Calculate the 3-day moving average of daily revenue.",schema:{name:"DailyRevenue",columns:[{name:"rev_date",type:"DATE"},{name:"revenue",type:"INT"}]},sampleData:`INSERT INTO DailyRevenue VALUES ('2024-01-01', 100);
INSERT INTO DailyRevenue VALUES ('2024-01-02', 200);
INSERT INTO DailyRevenue VALUES ('2024-01-03', 150);
INSERT INTO DailyRevenue VALUES ('2024-01-04', 300);
INSERT INTO DailyRevenue VALUES ('2024-01-05', 250);`,starterCode:`SELECT 
    rev_date,
    revenue,
    AVG(revenue) OVER (ORDER BY rev_date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg_3day
FROM DailyRevenue
ORDER BY rev_date;`,expectedOutput:[{rev_date:"2024-01-01",revenue:100,moving_avg_3day:100},{rev_date:"2024-01-02",revenue:200,moving_avg_3day:150},{rev_date:"2024-01-03",revenue:150,moving_avg_3day:150},{rev_date:"2024-01-04",revenue:300,moving_avg_3day:216.67},{rev_date:"2024-01-05",revenue:250,moving_avg_3day:233.33}]}];function Uv({schema:e}){return e?y.jsxs("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:[y.jsx("div",{className:"bg-blue-50 dark:bg-blue-950/30 px-4 py-2 border-b border-gray-200 dark:border-slate-600",children:y.jsxs("span",{className:"text-sm font-bold text-blue-700 dark:text-blue-400",children:["📋 ",e.name]})}),y.jsx("div",{className:"bg-white dark:bg-slate-800",children:e.columns.map((t,r)=>y.jsxs("div",{className:`
              flex items-center justify-between px-4 py-2 text-sm
              ${r<e.columns.length-1?"border-b border-gray-100 dark:border-slate-700":""}
            `,children:[y.jsxs("div",{className:"flex items-center gap-2",children:[t.key==="PK"&&y.jsx("span",{className:"text-xs px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-mono font-bold",children:"PK"}),t.key==="FK"&&y.jsx("span",{className:"text-xs px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-mono font-bold",children:"FK"}),y.jsx("span",{className:"font-mono text-gray-800 dark:text-gray-200 font-medium",children:t.name})]}),y.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400 font-mono",children:t.type})]},r))})]}):null}function Gv({question:e,isSolved:t}){return e?y.jsxs("div",{className:"h-full overflow-y-auto scrollbar-thin p-6 space-y-6",children:[y.jsxs("div",{className:"flex items-start justify-between gap-4",children:[y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[y.jsxs("span",{className:"text-xs font-mono text-gray-500 dark:text-gray-400",children:["#",e.id]}),y.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:e.title})]}),y.jsx("span",{className:`px-2.5 py-0.5 rounded-full text-xs font-medium ${e.difficulty==="Easy"?"difficulty-easy":e.difficulty==="Medium"?"difficulty-medium":"difficulty-hard"}`,children:e.difficulty})]}),t&&y.jsxs("div",{className:"flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 shrink-0",children:[y.jsx(rn,{className:"w-5 h-5"}),y.jsx("span",{className:"text-sm font-medium",children:"Solved"})]})]}),y.jsx("div",{className:"text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line",children:e.description}),e.schema&&y.jsxs("div",{children:[y.jsxs("h3",{className:"flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white mb-3",children:[y.jsx(Pp,{className:"w-4 h-4 text-blue-500"}),"Schema: ",e.schema.name]}),y.jsx(Uv,{schema:e.schema})]}),e.sampleData&&y.jsxs("div",{children:[y.jsx("h3",{className:"text-sm font-semibold text-gray-900 dark:text-white mb-2",children:"Sample Data"}),y.jsx("pre",{className:"bg-gray-50 dark:bg-slate-700/50 border border-gray-200 dark:border-slate-600 rounded-lg p-4 text-xs font-mono text-gray-700 dark:text-gray-300 overflow-x-auto",children:e.sampleData})]})]}):null}function Hv({results:e}){if(!e||e.length===0)return null;const t=Object.keys(e[0]);return y.jsx("div",{className:"overflow-x-auto",children:y.jsxs("table",{className:"w-full text-sm",children:[y.jsx("thead",{children:y.jsx("tr",{className:"bg-gray-50 dark:bg-slate-700/50 border-b border-gray-200 dark:border-slate-600",children:t.map(r=>y.jsx("th",{className:"px-4 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider",children:r},r))})}),y.jsx("tbody",{children:e.map((r,a)=>y.jsx("tr",{className:`
                border-b border-gray-100 dark:border-slate-700
                ${a%2===0?"bg-white dark:bg-slate-800":"bg-gray-50 dark:bg-slate-800/50"}
              `,children:t.map(n=>y.jsx("td",{className:"px-4 py-2 font-mono text-gray-700 dark:text-gray-300 text-xs",children:r[n]===null?y.jsx("span",{className:"text-gray-400 dark:text-gray-500 italic",children:"NULL"}):String(r[n])},n))},a))})]})})}function qv({question:e,code:t,onCodeChange:r,onRun:a,onSubmit:n,results:i,isRunning:s}){const{theme:o}=Cu(),[l,d]=M.useState(!0);return e?y.jsxs("div",{className:"h-full flex flex-col",children:[y.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 shrink-0",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("span",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"SQL Editor"}),y.jsx("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:"MySQL"})]}),y.jsxs("button",{onClick:()=>r(e.starterCode),className:"flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors",children:[y.jsx(_u,{className:"w-3.5 h-3.5"}),"Reset"]})]}),y.jsx("div",{className:"flex-1 min-h-0",children:y.jsx(Qp,{height:"100%",language:"sql",theme:o==="dark"?"vs-dark":"vs",value:t,onChange:h=>r(h||""),options:{fontSize:14,fontFamily:"'JetBrains Mono', 'Fira Code', monospace",fontLigatures:!0,minimap:{enabled:!1},scrollBeyondLastLine:!1,padding:{top:16},lineNumbers:"on",renderLineHighlight:"all",tabSize:2,insertSpaces:!0,wordWrap:"on",automaticLayout:!0},loading:y.jsx("div",{className:"flex items-center justify-center h-full bg-gray-900",children:y.jsx(Da,{className:"w-8 h-8 text-emerald-500 animate-spin"})})})}),y.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-800/50 shrink-0",children:[y.jsxs("button",{onClick:()=>d(!l),className:"flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors",children:[y.jsx(J2,{className:"w-4 h-4"}),"Results ",i.length>0&&`(${i.length} rows)`]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsxs("button",{onClick:a,disabled:s,className:`\r
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium\r
              bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-300\r
              hover:bg-gray-300 dark:hover:bg-slate-500\r
              disabled:opacity-50 disabled:cursor-not-allowed\r
              transition-all duration-200\r
            `,children:[s?y.jsx(Da,{className:"w-4 h-4 animate-spin"}):y.jsx(Dp,{className:"w-4 h-4"}),"Run Query"]}),y.jsxs("button",{onClick:n,disabled:s,className:`\r
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium\r
              bg-emerald-600 text-white\r
              hover:bg-emerald-700\r
              disabled:opacity-50 disabled:cursor-not-allowed\r
              transition-all duration-200\r
            `,children:[y.jsx(Bp,{className:"w-4 h-4"}),"Submit"]})]})]}),l&&y.jsxs("div",{className:"border-t border-gray-200 dark:border-slate-600 max-h-[250px] overflow-y-auto scrollbar-thin shrink-0",children:[s&&y.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-slate-800",children:[y.jsx(Da,{className:"w-4 h-4 text-emerald-500 animate-spin"}),y.jsx("span",{className:"text-sm text-gray-500",children:"Executing query..."})]}),!s&&i.length>0&&y.jsxs("div",{className:"bg-white dark:bg-slate-800",children:[y.jsx("div",{className:"px-4 py-2 border-b border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700/50",children:y.jsxs("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:["✓ Query executed successfully — ",i.length," row(s) returned"]})}),y.jsx(Hv,{results:i})]}),!s&&i.length===0&&y.jsx("div",{className:"px-4 py-6 text-center text-gray-500 text-sm bg-gray-50 dark:bg-slate-800/50",children:'Click "Run Query" to execute your SQL and see results.'})]})]}):null}function kd(){const{questionId:e}=Js(),t=pa(),{sqlSolved:r,markSQLSolved:a}=an(),[n,i]=M.useState({}),[s,o]=M.useState([]),[l,d]=M.useState(!1),h=M.useMemo(()=>{if(e){const w=Yt.findIndex(v=>v.id===parseInt(e));if(w>=0)return w}return 0},[e]),m=Yt[h],g=m?n[m.id]||m.starterCode:"",b=w=>{m&&i(v=>({...v,[m.id]:w}))},_=w=>{if(w>=0&&w<Yt.length){const v=Yt[w];t(`/sql/${v.id}`),o([])}},T=()=>{d(!0),setTimeout(()=>{m&&(o(m.expectedOutput),a(m.id)),d(!1)},600)},N=()=>{T()};return M.useEffect(()=>{Yt.length>0&&(!e||!Yt.find(w=>w.id===parseInt(e)))&&t(`/sql/${Yt[0].id}`,{replace:!0})},[]),m?y.jsxs("div",{className:"h-full flex flex-col",children:[y.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shrink-0",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("span",{className:`px-2.5 py-0.5 rounded-full text-xs font-medium ${m.difficulty==="Easy"?"difficulty-easy":m.difficulty==="Medium"?"difficulty-medium":"difficulty-hard"}`,children:m.difficulty}),y.jsxs("span",{className:"text-sm font-medium text-gray-900 dark:text-white",children:["#",m.id," — ",m.title]})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("button",{onClick:()=>_(h-1),disabled:h===0,className:"px-3 py-1.5 rounded-lg text-sm bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 disabled:opacity-30 transition-colors",children:"← Prev"}),y.jsxs("span",{className:"text-sm font-mono text-gray-500 dark:text-gray-400",children:[h+1,"/",Yt.length]}),y.jsx("button",{onClick:()=>_(h+1),disabled:h===Yt.length-1,className:"px-3 py-1.5 rounded-lg text-sm bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 disabled:opacity-30 transition-colors",children:"Next →"})]})]}),y.jsxs("div",{className:"flex-1 flex min-h-0",children:[y.jsx("div",{className:"w-1/2 border-r border-gray-200 dark:border-slate-700 overflow-hidden",children:y.jsx(Gv,{question:m,isSolved:r.has(m.id)})}),y.jsx("div",{className:"w-1/2 overflow-hidden",children:y.jsx(qv,{question:m,code:g,onCodeChange:b,onRun:T,onSubmit:N,results:s,isRunning:l})})]})]}):y.jsx("div",{className:"flex items-center justify-center h-full",children:y.jsx("p",{className:"text-gray-500",children:"No questions found."})})}const Kr=[{slug:"basic-statistics",title:"Basic Statistics",order:1,content:`
## Mean, Median, and Mode

These are the three fundamental measures of central tendency in statistics.

### Mean (Average)

The **mean** is the sum of all values divided by the number of values.

$$\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i$$

**Example:** For the dataset [2, 4, 6, 8, 10]:
- Mean = (2 + 4 + 6 + 8 + 10) / 5 = **6**

### Median

The **median** is the middle value when data is sorted in ascending order.

- If n is odd: median = middle value
- If n is even: median = average of two middle values

**Example:** For [1, 3, 5, 7, 9], median = **5**

### Mode

The **mode** is the most frequently occurring value in the dataset.

**Example:** For [1, 2, 2, 3, 4], mode = **2**

> **💡 Interview Tip:** The mean is sensitive to outliers. The median is more robust. Always check the distribution before choosing which to report.

---

## Variance and Standard Deviation

These measure how spread out your data is.

### Variance

Population variance:

$$\\sigma^2 = \\frac{1}{N} \\sum_{i=1}^{N} (x_i - \\mu)^2$$

Sample variance (unbiased):

$$s^2 = \\frac{1}{n-1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2$$

> **Why n-1?** We use n-1 (Bessel's correction) for sample variance to get an unbiased estimate of the population variance.

### Standard Deviation

The standard deviation is simply the square root of variance:

$$\\sigma = \\sqrt{\\sigma^2}$$

**Example:** For [2, 4, 6, 8, 10]:
- Mean = 6
- Variance = [(2-6)² + (4-6)² + (6-6)² + (8-6)² + (10-6)²] / 5 = 8
- Standard Deviation = √8 ≈ **2.83**

> **⚠️ Common Mistake:** Confusing population variance (1/N) with sample variance (1/(n-1)). In interviews, always clarify which one you're computing.

---

## Covariance and Correlation

### Covariance

Covariance measures how two variables change together:

$$Cov(X,Y) = \\frac{1}{n-1} \\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})$$

- Positive covariance: variables tend to increase together
- Negative covariance: one increases while the other decreases

### Pearson Correlation Coefficient

Correlation is the standardized version of covariance:

$$r = \\frac{Cov(X,Y)}{\\sigma_X \\cdot \\sigma_Y}$$

- r ranges from -1 to 1
- r = 1: perfect positive correlation
- r = 0: no correlation
- r = -1: perfect negative correlation

> **💡 Interview Tip:** Correlation does NOT imply causation. This is one of the most commonly tested concepts in data science interviews.
`},{slug:"probability",title:"Probability Fundamentals",order:2,content:`
## Basic Probability Rules

### Addition Rule

$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$

### Multiplication Rule

$$P(A \\cap B) = P(A) \\cdot P(B|A)$$

### Conditional Probability

$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$

---

## Bayes' Theorem

One of the most important concepts in statistics and ML:

$$P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$$

Where:
- P(A|B) = posterior probability
- P(B|A) = likelihood
- P(A) = prior probability
- P(B) = marginal probability

**Classic Example — Medical Testing:**

If a disease affects 1% of people, and a test has 95% sensitivity and 90% specificity:

$$P(Disease|Positive) = \\frac{0.95 \\times 0.01}{0.95 \\times 0.01 + 0.10 \\times 0.99} = \\frac{0.0095}{0.1085} \\approx 8.8\\%$$

> **⚠️ Key Insight:** Even with a seemingly accurate test, if the disease is rare, most positive results are false positives!

---

## Probability Distributions

### Normal (Gaussian) Distribution

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$

- Bell-shaped curve
- 68-95-99.7 rule: 68% within 1σ, 95% within 2σ, 99.7% within 3σ

### Binomial Distribution

Models the number of successes in n independent trials:

$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$$

### Poisson Distribution

Models the number of events in a fixed interval:

$$P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$$
`},{slug:"linear-regression",title:"Linear Regression",order:3,content:`
## Simple Linear Regression

Fits a straight line to data:

$$\\hat{y} = \\beta_0 + \\beta_1 x$$

### Finding Optimal Parameters

Using Ordinary Least Squares (OLS):

$$\\beta_1 = \\frac{\\sum(x_i - \\bar{x})(y_i - \\bar{y})}{\\sum(x_i - \\bar{x})^2}$$

$$\\beta_0 = \\bar{y} - \\beta_1 \\bar{x}$$

---

## Multiple Linear Regression

Extends to multiple features:

$$\\hat{y} = \\beta_0 + \\beta_1 x_1 + \\beta_2 x_2 + ... + \\beta_n x_n$$

In matrix form: **ŷ = Xβ**

---

## Assumptions of Linear Regression

1. **Linearity** — Relationship between X and Y is linear
2. **Independence** — Observations are independent
3. **Homoscedasticity** — Constant variance of residuals
4. **Normality** — Residuals are normally distributed
5. **No multicollinearity** — Features are not highly correlated with each other

> **💡 Interview Tip:** If assumptions are violated, consider: polynomial features, log transforms, regularization (Ridge/Lasso), or switching to a non-linear model.

---

## Model Evaluation

### R-squared (Coefficient of Determination)

$$R^2 = 1 - \\frac{SS_{res}}{SS_{tot}} = 1 - \\frac{\\sum(y_i - \\hat{y}_i)^2}{\\sum(y_i - \\bar{y})^2}$$

- R² = 1: perfect fit
- R² = 0: model explains none of the variance

### Adjusted R-squared

$$R^2_{adj} = 1 - \\frac{(1-R^2)(n-1)}{n-p-1}$$

Penalizes adding features that don't improve the model.

---

## Regularization

### Ridge Regression (L2)

$$J(\\beta) = \\sum(y_i - \\hat{y}_i)^2 + \\alpha \\sum \\beta_j^2$$

### Lasso Regression (L1)

$$J(\\beta) = \\sum(y_i - \\hat{y}_i)^2 + \\alpha \\sum |\\beta_j|$$

Lasso can drive coefficients to exactly zero, performing feature selection.
`},{slug:"logistic-regression",title:"Logistic Regression",order:4,content:`
## The Sigmoid Function

Logistic regression uses the sigmoid (logistic) function to map any real number to [0, 1]:

$$\\sigma(z) = \\frac{1}{1 + e^{-z}}$$

where z = β₀ + β₁x₁ + ... + βₙxₙ

---

## Decision Boundary

- If P(y=1|x) ≥ 0.5 → predict class 1
- If P(y=1|x) < 0.5 → predict class 0

---

## Cost Function (Binary Cross-Entropy)

$$J(\\theta) = -\\frac{1}{m} \\sum_{i=1}^{m} [y_i \\log(\\hat{y}_i) + (1-y_i) \\log(1-\\hat{y}_i)]$$

> **💡 Why not use MSE?** With the sigmoid function, MSE creates a non-convex cost function with many local minima. Cross-entropy gives a convex optimization landscape.

---

## Gradient Descent Update

$$\\theta_j := \\theta_j - \\alpha \\frac{\\partial J}{\\partial \\theta_j}$$

$$\\frac{\\partial J}{\\partial \\theta_j} = \\frac{1}{m} \\sum_{i=1}^{m} (\\hat{y}_i - y_i) x_{ij}$$

---

## Multiclass Extension

### One-vs-Rest (OvR)
- Train K binary classifiers (one per class)
- Class with highest probability wins

### Softmax Regression (Multinomial)
$$P(y=k|x) = \\frac{e^{z_k}}{\\sum_{j=1}^{K} e^{z_j}}$$
`},{slug:"classification-metrics",title:"Classification Metrics",order:5,content:`
## The Confusion Matrix

The confusion matrix is the 2x2 foundation table that compares predicted labels against actual labels. Every single classification metric is derived from these four numbers.

|   | **Predicted Positive** | **Predicted Negative** |
|---|---|---|
| **Actual Positive** | TP (True Positive) | FN (False Negative) |
| **Actual Negative** | FP (False Positive) | TN (True Negative) |

### Understanding Each Cell

**True Positive (TP):** The model predicted positive, and it was actually positive. These are correct catches. Example: The spam filter correctly marks a spam email as spam.

**True Negative (TN):** The model predicted negative, and it was actually negative. Also correct. Example: The spam filter correctly lets an important email through.

**False Positive (FP) = Type I Error = "False Alarm":** The model predicted positive, but it was actually negative. Example: The spam filter marks an important work email as spam. This is costly because the user might miss critical information.

**False Negative (FN) = Type II Error = "Miss":** The model predicted negative, but it was actually positive. Example: The spam filter lets a phishing email through to the inbox. This is dangerous because the user is now exposed to the threat.

> **Key Distinction:** Type I Error (FP) = "crying wolf" — seeing something that is not there. Type II Error (FN) = "missing the boat" — failing to detect something that is there.

### Cancer Detection Example

Consider a cancer detection model with 100 patients. The model is tested against known diagnoses:

|   | **Predicted Cancer** | **Predicted Healthy** |
|---|---|---|
| **Actually has Cancer** | TP = 45 | FN = 5 |
| **Actually Healthy** | FP = 10 | TN = 40 |

Reading this table: Out of 50 actual cancer patients, the model correctly identified 45 (TP) but missed 5 (FN). Out of 50 healthy patients, the model correctly cleared 40 (TN) but incorrectly flagged 10 as cancer (FP). The 5 missed cancers are the most dangerous outcome.

---

## Accuracy

Accuracy measures the fraction of all predictions that were correct.

$$Accuracy = \\frac{TP + TN}{TP + TN + FP + FN}$$

**Example:** Accuracy = (45 + 40) / (100) = 85%. This means 85 out of 100 predictions were correct.

### Why Accuracy Is Misleading

Consider a dataset with 95 healthy patients and 5 cancer patients. A model that predicts EVERYONE is healthy achieves 95% accuracy, but catches ZERO cancers.

$$Accuracy = \\frac{0 + 95}{0 + 95 + 0 + 5} = 95\\%$$

The model looks great on paper but is completely useless for its intended purpose. This is why accuracy alone is dangerous, especially with imbalanced datasets.

> **Interview Tip:** Always ask "What is the class distribution?" before reporting accuracy. If 99% of samples are negative, a model that predicts "all negative" gets 99% accuracy but has zero predictive power for the positive class.

---

## Precision

Precision answers: "Of all the times the model said YES, how often was it actually right?"

$$Precision = \\frac{TP}{TP + FP}$$

**Example:** Precision = 45 / (45 + 10) = 81.8%. Out of 55 times the model flagged cancer, 45 were correct.

### When to Optimize for Precision

- **Spam filtering:** Marking an important email as spam (FP) means the user misses critical information. High precision ensures few legitimate emails get caught.
- **Content recommendation:** Recommending irrelevant content (FP) frustrates users and reduces engagement. High precision means recommendations are relevant.
- **Legal document review:** False matches in e-discovery (FP) waste expensive lawyer time reviewing irrelevant documents.

### The Precision Trade-off

Increasing precision means the model is more "cautious" about predicting positive. It raises the classification threshold, which means fewer false alarms but also more missed true positives (lower recall). It is a fundamental trade-off: you cannot maximize both precision and recall simultaneously.

---

## Recall (Sensitivity / True Positive Rate)

Recall answers: "Of all the actual positive cases, how many did the model find?"

$$Recall = \\frac{TP}{TP + FN}$$

**Example:** Recall = 45 / (45 + 5) = 90%. The model found 90% of all actual cancer cases.

### When to Optimize for Recall

- **Cancer detection:** Missing a cancer case (FN) can be fatal. It is better to flag a healthy person for further testing (FP) than to miss a real cancer (FN).
- **Fraud detection:** Every missed fraud (FN) costs money directly. Banks prefer to investigate some false alarms rather than let fraud slip through.
- **Airport security:** Missing a genuine threat (FN) has catastrophic consequences. Security systems are designed for maximum recall even at the cost of many false alarms.
- **Disease screening during pandemics:** Missing an infected person (FN) leads to further spreading. Mass screening prioritizes recall.

### The Recall Trade-off

Increasing recall means the model is more "aggressive" about predicting positive. It lowers the classification threshold, catching more true positives but also generating more false alarms (lower precision).

---

## F1 Score

The F1 score is the harmonic mean of precision and recall, providing a single metric that balances both concerns.

$$F1 = 2 \\times \\frac{Precision \\times Recall}{Precision + Recall}$$

### Why Harmonic Mean Instead of Arithmetic Mean?

The harmonic mean punishes extreme values much more than the arithmetic mean. Consider these scenarios:

| Precision | Recall | Arithmetic Mean | F1 Score |
|---|---|---|---|
| 100% | 50% | 75% | 66.7% |
| 90% | 90% | 90% | 90% |
| 100% | 1% | 50.5% | 2% |

Notice that when precision is 100% but recall is only 1%, the arithmetic mean says 50.5% (seems okay), but F1 says 2% (accurately reflecting that the model is nearly useless). F1 requires BOTH precision AND recall to be good, making it a much stricter and more honest metric.

### F-beta Score

The F-beta score generalizes F1 by allowing you to weight precision or recall more heavily:

$$F_{\\beta} = (1 + \\beta^2) \\times \\frac{Precision \\times Recall}{\\beta^2 \\times Precision + Recall}$$

- **beta = 1:** Standard F1 (equal weight to precision and recall)
- **beta = 2:** F2 score (recall is weighted twice as much as precision — use when missing positives is worse than false alarms)
- **beta = 0.5:** F0.5 score (precision is weighted twice as much as recall — use when false alarms are worse than misses)

---

## Specificity and True Negative Rate

Specificity measures: "Of all actual negative cases, how many did the model correctly identify?"

$$Specificity = \\frac{TN}{TN + FP}$$

It is the complement of the False Positive Rate:

$$FPR = 1 - Specificity = \\frac{FP}{TN + FP}$$

### When Specificity Matters

- **Disease diagnosis:** Telling a healthy person they are sick (FP) causes unnecessary anxiety, expensive follow-up tests, and potential harmful treatments. High specificity avoids this.
- **Product quality control on a production line:** Flagging a good product as defective (FP) means unnecessary rework, wasted materials, and reduced throughput.
- **Spam filtering (from the receiving side):** Losing real emails to spam (FP from the filter's perspective) means missing important communications.

---

## ROC Curve

The Receiver Operating Characteristic (ROC) curve visualizes model performance across ALL possible classification thresholds, not just a single one.

### How It Works Step by Step

1. A trained classifier outputs a probability score for each sample (e.g., 0.73 chance of cancer)
2. We apply a threshold (e.g., 0.5) to convert probabilities to binary labels
3. At each threshold, we compute the True Positive Rate (TPR) and False Positive Rate (FPR)
4. We plot TPR on the Y-axis versus FPR on the X-axis for every possible threshold
5. The resulting curve shows the full trade-off profile of the model

**X-axis:** False Positive Rate = FP / (FP + TN) = 1 - Specificity

**Y-axis:** True Positive Rate = TP / (TP + FN) = Recall

### Interpreting the Curve Shape

- **Perfect classifier:** The curve goes straight up to (0, 1) then straight across to (1, 1). Area Under Curve (AUC) = 1.0. The model perfectly separates classes.
- **Random classifier:** The curve is a diagonal line from (0, 0) to (1, 1). AUC = 0.5. The model is no better than flipping a coin.
- **Good classifier:** The curve bows toward the top-left corner. The further from the diagonal, the better.
- **Worse than random:** The curve dips below the diagonal. AUC < 0.5. The model's predictions are actually inverted (swap its predictions and it becomes good).

### Area Under the Curve (AUC)

AUC provides a single number summary of the ROC curve. It represents the probability that the model ranks a randomly chosen positive example higher than a randomly chosen negative example.

| AUC Range | Model Quality | Interpretation |
|---|---|---|
| 0.9 - 1.0 | Excellent | The model almost perfectly separates the classes |
| 0.8 - 0.9 | Good | The model has strong discriminative ability |
| 0.7 - 0.8 | Acceptable | The model is useful but could be improved |
| 0.6 - 0.7 | Poor | The model has weak discriminative ability |
| 0.5 - 0.6 | Random | The model has no useful discriminative ability |

> **Pitfall:** AUC can be misleading with very imbalanced datasets. A model can achieve high AUC while still producing mostly false positives at any practically useful threshold. Always look at the full ROC curve, not just the AUC number.

---

## Precision-Recall (PR) Curve

For imbalanced datasets where the positive class is rare, the PR curve is often more informative than the ROC curve. It plots Precision (Y-axis) versus Recall (X-axis).

| Use ROC-AUC When | Use PR-AUC When |
|---|---|
| Classes are roughly balanced (e.g., 50/50) | Classes are imbalanced (e.g., 1% positive) |
| False positives and false negatives are equally costly | False negatives are much more costly than false positives |
| You want a threshold-independent overview | You specifically care about performance on the rare positive class |

> **Interview Tip:** If someone asks "Is accuracy a good metric?", always respond: "It depends on the class distribution and the relative costs of different errors." Then walk through the confusion matrix and explain why F1 or AUC is more appropriate for imbalanced data.

---

## Log-Loss (Cross-Entropy Loss)

Log-Loss measures the quality of predicted probabilities, not just binary predictions. It penalizes confident wrong predictions exponentially.

$$LogLoss = -\\frac{1}{N} \\sum_{i=1}^{N} \\left[ y_i \\log(p_i) + (1-y_i) \\log(1-p_i) \\right]$$

Where p_i is the predicted probability that sample i belongs to the positive class.

### How the Penalty Works

- A model predicting 0.99 probability for a negative sample (very confident and wrong): penalty = -log(0.01) = 4.6
- A model predicting 0.6 probability for a negative sample (slightly wrong): penalty = -log(0.4) = 0.92
- A model predicting 0.01 probability for a negative sample (confident and correct): penalty = -log(0.99) = 0.01

The key insight: Log-Loss does not just care whether the prediction was right or wrong, it cares HOW CONFIDENT the model was. A model that says "I am 51% sure this is positive" when it is wrong is much better than one that says "I am 99% sure this is positive" when it is wrong, even though both get the same accuracy.

### Why Use Log-Loss Instead of Accuracy?

- Accuracy treats all wrong predictions equally (51% wrong is the same as 99% wrong)
- Log-Loss considers the confidence of the prediction
- Log-Loss is differentiable, making it suitable as a loss function for gradient-based optimization
- Lower is better (0 = perfect predictions)

---

## Cohen's Kappa

Cohen's Kappa measures how much better your model is compared to random guessing. It accounts for the agreement that would happen by chance.

$$\\kappa = \\frac{p_o - p_e}{1 - p_e}$$

Where p_o is the observed accuracy and p_e is the expected accuracy by chance (based on class proportions).

| Kappa Value | Interpretation | What It Means |
|---|---|---|
| 0.81 - 1.00 | Almost perfect agreement | The model is excellent |
| 0.61 - 0.80 | Substantial agreement | The model is good |
| 0.41 - 0.60 | Moderate agreement | The model is fair |
| 0.21 - 0.40 | Fair agreement | The model is poor |
| 0.00 - 0.20 | Slight agreement | The model barely beats random chance |
| Below 0.00 | Less than chance | The model is worse than random guessing |

Use Cohen's Kappa when you have class imbalance and want to know if your model is actually learning something or just exploiting the class distribution.

---

## Matthews Correlation Coefficient (MCC)

MCC is widely considered the single best metric for binary classification because it uses all four confusion matrix values and is balanced even with extreme class imbalance.

$$MCC = \\frac{TP \\times TN - FP \\times FN}{\\sqrt{(TP+FP)(TP+FN)(TN+FP)(TN+FN)}}$$

- MCC = +1: Perfect prediction (all samples classified correctly)
- MCC = 0: No better than random guessing
- MCC = -1: Total disagreement (every prediction is wrong — the model is inverted)

Unlike accuracy or F1, MCC provides a symmetric measure that treats all classes equally, making it the most reliable single metric for imbalanced datasets.

---

## Decision Threshold Optimization

The default classification threshold of 0.5 is almost never optimal. The right threshold depends on the specific costs of different error types in your application.

### Four Strategies for Choosing a Threshold

1. **Maximize F1-score:** Try every possible threshold from 0 to 1, compute F1 at each, and pick the threshold that gives the highest F1.
2. **Youden's J statistic:** Find the threshold that maximizes (TPR - FPR) on the ROC curve. This balances sensitivity and specificity.
3. **Cost-sensitive thresholding:** Assign real-world costs to FP and FN. If a false negative costs $1000 and a false positive costs $10, choose the threshold that minimizes total expected cost.
4. **Business requirement:** If the business says "we need at least 95% recall," find the lowest threshold that achieves 95% recall and use that.

### Threshold Impact Example

| Threshold | Precision | Recall | F1 | When to Use |
|---|---|---|---|---|
| 0.3 (low) | 60% | 95% | 73.6% | Cancer screening — catching every case matters most |
| 0.5 (default) | 82% | 80% | 81.0% | General purpose — balanced trade-off |
| 0.7 (high) | 95% | 55% | 69.7% | Legal review — false positives are very expensive |

Notice how the same model produces very different behavior depending on the threshold. The "best" threshold depends entirely on the application.

---

## Which Metric Should You Report?

| Business Situation | Primary Metric | Why | Secondary Metric |
|---|---|---|---|
| Balanced classes, equal error costs | Accuracy | Simple, interpretable | F1 Score |
| Imbalanced classes | F1 Score or MCC | Accuracy is misleading | AUC-ROC |
| False positives are very costly (e.g., spam filter) | Precision | Minimize false alarms | AUC-PR |
| False negatives are very costly (e.g., cancer detection) | Recall | Minimize misses | AUC-PR |
| You need probability estimates | Log-Loss | Measures probability quality | AUC-ROC |
| Comparing against a baseline model | Cohen's Kappa | Shows improvement over chance | MCC |

> **Interview Gold Standard Answer:** Start with "It depends on the business context and class distribution." Then: (1) describe the confusion matrix for the problem, (2) identify which error type is more costly, (3) recommend the appropriate metric, and (4) mention that you would also look at the ROC curve for a complete picture.
`},{slug:"decision-trees",title:"Decision Trees",order:6,content:`
## How Decision Trees Work

A decision tree recursively splits the data based on feature values to create homogeneous groups.

---

## Splitting Criteria

### Information Gain (Entropy)

**Entropy** measures impurity:

$$H(S) = -\\sum_{i=1}^{c} p_i \\log_2(p_i)$$

- H = 0: pure node (all same class)
- H = 1: maximum impurity (binary classification, 50/50 split)

**Information Gain:**

$$IG(S, A) = H(S) - \\sum_{v \\in Values(A)} \\frac{|S_v|}{|S|} H(S_v)$$

### Gini Impurity

$$Gini(S) = 1 - \\sum_{i=1}^{c} p_i^2$$

Most algorithms (like CART) use Gini by default.

---

## Pruning

### Pre-pruning (Early Stopping)
- Limit max depth
- Set minimum samples per leaf
- Set minimum information gain threshold

### Post-pruning
- Grow full tree, then remove branches that don't improve validation performance
- Reduced Error Pruning
- Cost Complexity Pruning

> **💡 Interview Tip:** Decision trees are prone to overfitting. Always mention pruning or ensemble methods as solutions.

---

## Advantages and Disadvantages

**✅ Advantages:**
- Easy to interpret and visualize
- No feature scaling needed
- Handles both numerical and categorical data
- Captures non-linear relationships

**❌ Disadvantages:**
- Prone to overfitting
- Unstable (small data changes → different tree)
- Biased toward features with more levels
`},{slug:"ensemble-methods",title:"Ensemble Methods",order:7,content:`
## Random Forest

An ensemble of decision trees trained on different subsets of data and features.

### Key Concepts
- **Bagging (Bootstrap Aggregating):** Train each tree on a random sample with replacement
- **Feature Randomness:** At each split, consider only √p features (classification) or p/3 (regression)
- **Prediction:** Average (regression) or majority vote (classification)

### Why It Works
- Reduces variance without increasing bias
- Each tree overfits differently → errors average out

---

## Gradient Boosting

Sequentially builds trees, where each new tree corrects the errors of the previous ones.

### Algorithm
1. Start with initial prediction (e.g., mean)
2. Compute residuals (errors)
3. Fit a tree to the residuals
4. Add the tree's predictions to the ensemble
5. Repeat steps 2-4

### Key Hyperparameters
- **Learning Rate (η):** Shrinkage parameter (lower = more robust)
- **n_estimators:** Number of trees
- **max_depth:** Usually shallow (3-8)

### Popular Implementations
- **XGBoost:** Regularized gradient boosting
- **LightGBM:** Leaf-wise growth, faster
- **CatBoost:** Handles categorical features natively

---

## AdaBoost

Adaptive Boosting — focuses on misclassified samples by increasing their weights.

### Algorithm
1. Initialize equal weights for all samples
2. Train weak classifier
3. Increase weights of misclassified samples
4. Train next weak classifier on reweighted data
5. Combine classifiers with weighted votes

---

## Bagging vs Boosting

| Aspect | Bagging | Boosting |
|--------|---------|----------|
| Training | Parallel | Sequential |
| Focus | Reduce variance | Reduce bias |
| Overfitting | Less prone | More prone |
| Example | Random Forest | XGBoost |
`},{slug:"knn-kmeans",title:"KNN and K-Means",order:8,content:`
## K-Nearest Neighbors (KNN)

A non-parametric, instance-based learning algorithm.

### How It Works
1. Store all training data
2. For a new point, find the K nearest neighbors
3. Classification: majority vote
4. Regression: average of K neighbors

### Distance Metrics

**Euclidean Distance:**
$$d(x, y) = \\sqrt{\\sum_{i=1}^{n}(x_i - y_i)^2}$$

**Manhattan Distance:**
$$d(x, y) = \\sum_{i=1}^{n}|x_i - y_i|$$

**Minkowski Distance:**
$$d(x, y) = (\\sum_{i=1}^{n}|x_i - y_i|^p)^{1/p}$$

### Choosing K
- Small K → low bias, high variance (overfitting)
- Large K → high bias, low variance (underfitting)
- Typically choose odd K to avoid ties
- Use cross-validation to find optimal K

> **💡 Interview Tip:** KNN suffers from the curse of dimensionality. Feature selection/PCA is important before using KNN.

---

## K-Means Clustering

An unsupervised algorithm that partitions data into K clusters.

### Algorithm
1. Initialize K centroids randomly
2. Assign each point to nearest centroid
3. Recompute centroids as mean of assigned points
4. Repeat steps 2-3 until convergence

### Objective Function (Inertia)

$$J = \\sum_{k=1}^{K} \\sum_{x_i \\in C_k} ||x_i - \\mu_k||^2$$

### Choosing K
- **Elbow Method:** Plot inertia vs K, look for the "elbow"
- **Silhouette Score:** Measures cluster cohesion vs separation

$$s(i) = \\frac{b(i) - a(i)}{\\max(a(i), b(i))}$$

### Limitations
- Assumes spherical clusters
- Sensitive to initialization (use K-Means++)
- Sensitive to outliers
- Must specify K beforehand

---

## When to Use Which?

| KNN | K-Means |
|-----|---------|
| Supervised | Unsupervised |
| Classification/Regression | Clustering |
| Lazy learner | Eager learner |
| Uses all features | Can work with any distance metric |
`},{slug:"dimensionality-reduction",title:"Dimensionality Reduction",order:9,content:`
## Why Reduce Dimensionality?

- **Curse of dimensionality:** Performance degrades with many features
- **Visualization:** Can't plot >3 dimensions
- **Computational efficiency:** Fewer features = faster training
- **Noise reduction:** Remove irrelevant features

---

## PCA (Principal Component Analysis)

The most popular linear dimensionality reduction technique.

### Algorithm
1. **Standardize** the data (mean=0, std=1)
2. Compute the **covariance matrix**
3. Compute **eigenvalues** and **eigenvectors**
4. Sort eigenvectors by eigenvalues (descending)
5. Select top k eigenvectors
6. **Project** data onto the new k-dimensional space

### Mathematical Foundation

Covariance matrix:
$$C = \\frac{1}{n-1} X^T X$$

The eigenvectors of C are the principal components, and eigenvalues indicate the variance explained by each component.

### Explained Variance Ratio

$$\\text{Explained Variance}_k = \\frac{\\lambda_k}{\\sum_{i=1}^{p} \\lambda_i}$$

Choose k such that cumulative explained variance ≥ 95%.

---

## t-SNE

A non-linear technique for visualization (2D/3D).

### Key Ideas
- Preserves local structure (nearby points stay nearby)
- Uses probability distributions in high and low dimensions
- Minimizes KL divergence between distributions

### Limitations
- Slow for large datasets
- Non-deterministic
- Not suitable for new data points (no transform method)

---

## LDA (Linear Discriminant Analysis)

Supervised dimensionality reduction — maximizes class separability.

$$J(w) = \\frac{w^T S_B w}{w^T S_W w}$$

Where S_B is between-class scatter and S_W is within-class scatter.
`},{slug:"cross-validation",title:"Cross-Validation & Model Selection",order:10,content:`
## Why Cross-Validation?

A single train-test split can be unreliable. Cross-validation provides a more robust estimate of model performance.

---

## K-Fold Cross-Validation

1. Split data into K equal folds
2. For each fold:
   - Train on K-1 folds
   - Validate on the remaining fold
3. Average the K validation scores

Typically K=5 or K=10.

### Stratified K-Fold
Ensures each fold has the same class distribution as the full dataset. **Always use this for classification tasks.**

---

## Leave-One-Out Cross-Validation (LOOCV)

K = N (number of samples). Each fold is a single sample.
- Pros: Nearly unbiased estimate
- Cons: Computationally expensive, high variance

---

## Time Series Cross-Validation

**Never** use random K-fold for time series! Use expanding or sliding window:

1. Train: [1,2,3] → Test: [4]
2. Train: [1,2,3,4] → Test: [5]
3. Train: [1,2,3,4,5] → Test: [6]

---

## Bias-Variance Tradeoff

$$Expected\\ Error = Bias^2 + Variance + Irreducible\\ Error$$

| High Bias | High Variance |
|-----------|---------------|
| Underfitting | Overfitting |
| Simple model | Complex model |
| Solution: more features, less regularization | Solution: more data, regularization, simpler model |

---

## Hyperparameter Tuning

### Grid Search
- Exhaustive search over specified parameter grid
- Pros: Guaranteed to find best combination
- Cons: Computationally expensive

### Random Search
- Randomly sample parameter combinations
- Often finds good results faster than grid search
- Better for high-dimensional parameter spaces

### Bayesian Optimization
- Uses past results to guide next parameter selection
- More efficient than grid/random search
- Tools: Optuna, Hyperopt
`},{slug:"feature-engineering",title:"Feature Engineering",order:11,content:`
## Why Feature Engineering Matters

> "Applied ML is basically feature engineering." — Andrew Ng

The quality of your features often matters more than the choice of algorithm.

---

## Numerical Features

### Scaling
- **Min-Max Scaling:** X_scaled = (X - X_min) / (X_max - X_min)
- **Standard Scaling (Z-score):** z = (X - μ) / σ
- **Robust Scaling:** Uses median and IQR (robust to outliers)

### Transformations
- **Log transform:** For right-skewed data
- **Box-Cox transform:** Finds optimal power transformation
- **Polynomial features:** Capture non-linear relationships

---

## Categorical Features

### One-Hot Encoding
Creates binary columns for each category. Use when categories have no order.

### Label Encoding
Assigns integer to each category. Use for ordinal features.

### Target Encoding
Replace category with the mean of the target variable. Risk of overfitting — use with cross-validation.

---

## Text Features

- **Bag of Words:** Word counts
- **TF-IDF:** Term frequency × inverse document frequency
- **Word Embeddings:** Word2Vec, GloVe, FastText

---

## Missing Value Strategies

1. **Drop** rows/columns with too many missing values
2. **Mean/Median/Mode** imputation
3. **KNN imputation** — use similar samples
4. **Model-based imputation** — predict missing values
5. **Add indicator column** — flag which values were missing

---

## Feature Selection Methods

### Filter Methods
- Correlation threshold
- Chi-squared test
- Mutual information

### Wrapper Methods
- Forward selection
- Backward elimination
- Recursive Feature Elimination (RFE)

### Embedded Methods
- L1 regularization (Lasso) → feature selection
- Feature importance from tree-based models
`},{slug:"ml-system-design",title:"ML System Design & Interview Tips",order:12,content:`
## ML System Design Framework

Use this framework when asked to design an ML system in interviews:

### 1. Problem Framing
- Define the objective (what metric are we optimizing?)
- Define the prediction target
- Determine the ML task type (classification, regression, etc.)

### 2. Data
- What data is available?
- Data collection and labeling strategy
- Data quality and potential biases
- Feature engineering ideas

### 3. Model Selection
- Start simple (baseline: logistic regression, decision tree)
- Gradually increase complexity
- Consider latency and compute constraints

### 4. Evaluation
- Offline metrics (AUC, F1, RMSE, etc.)
- Online metrics (A/B testing)
- Business metrics (revenue impact, user engagement)

### 5. Deployment & Monitoring
- Model serving architecture
- A/B testing strategy
- Monitoring for data drift and model degradation
- Retraining strategy

---

## Common Interview Topics

### Data Leakage
- When information from outside the training dataset leaks into the model
- Common sources: future data, target-related features, test data contamination

### Imbalanced Data
- **Resampling:** SMOTE, undersampling, oversampling
- **Algorithm-level:** Class weights, focal loss
- **Metrics:** Precision, Recall, F1, AUC-PR

### Feature Importance
- Permutation importance
- SHAP values
- Partial Dependence Plots

---

## Quick Reference: Algorithm Selection

| Scenario | Recommended Algorithms |
|----------|----------------------|
| Binary classification | Logistic Regression, XGBoost, LightGBM |
| Multi-class classification | Random Forest, XGBoost, Neural Networks |
| Regression | Linear Regression, Ridge/Lasso, XGBoost |
| Clustering | K-Means, DBSCAN, Hierarchical |
| Anomaly Detection | Isolation Forest, LOF, Autoencoders |
| Recommendation | Collaborative Filtering, Content-Based |
| Time Series | ARIMA, Prophet, LSTM |
`}];function Jp({topics:e,currentSlug:t,completedSlugs:r,routePrefix:a="/ml"}){const n=pa(),i=e.filter(s=>r.has(s.slug)).length;return y.jsxs("div",{className:"h-full flex flex-col",children:[y.jsxs("div",{className:"px-5 py-4 border-b border-gray-200 dark:border-slate-700 shrink-0",children:[y.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[y.jsx(Op,{className:"w-5 h-5 text-purple-500"}),y.jsx("h2",{className:"text-sm font-bold text-gray-900 dark:text-white",children:"ML Learning Roadmap"})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("div",{className:"flex-1 h-1.5 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden",children:y.jsx("div",{className:"h-full bg-purple-500 rounded-full transition-all duration-500",style:{width:`${i/e.length*100}%`}})}),y.jsxs("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:[i,"/",e.length]})]})]}),y.jsx("nav",{className:"flex-1 overflow-y-auto scrollbar-thin py-2 px-3",children:e.map((s,o)=>{const l=s.slug===t,d=r.has(s.slug);return y.jsxs("button",{onClick:()=>n(`${a}/${s.slug}`),className:`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 mb-0.5
                ${l?"bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400":"text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700/50"}
              `,children:[y.jsx("div",{className:`
                w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold
                ${d?"bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400":l?"bg-purple-600 text-white":"bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400"}
              `,children:d?y.jsx(rn,{className:"w-4 h-4"}):o+1}),y.jsx("span",{className:"text-sm font-medium truncate",children:s.title})]},s.slug)})})]})}class z extends Error{constructor(t,r){var a="KaTeX parse error: "+t,n,i,s=r&&r.loc;if(s&&s.start<=s.end){var o=s.lexer.input;n=s.start,i=s.end,n===o.length?a+=" at end of input: ":a+=" at position "+(n+1)+": ";var l=o.slice(n,i).replace(/[^]/g,"$&̲"),d;n>15?d="…"+o.slice(n-15,n):d=o.slice(0,n);var h;i+15<o.length?h=o.slice(i,i+15)+"…":h=o.slice(i),a+=d+l+h}super(a),this.name="ParseError",this.position=void 0,this.length=void 0,this.rawMessage=void 0,Object.setPrototypeOf(this,z.prototype),this.position=n,n!=null&&i!=null&&(this.length=i-n),this.rawMessage=t}}var Wv=/([A-Z])/g,Vv=e=>e.replace(Wv,"-$1").toLowerCase(),Xv={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},Kv=/[&><"']/g,Ve=e=>String(e).replace(Kv,t=>Xv[t]),es=e=>e.type==="ordgroup"||e.type==="color"?e.body.length===1?es(e.body[0]):e:e.type==="font"?es(e.body):e,Yv=new Set(["mathord","textord","atom"]),hr=e=>Yv.has(es(e).type),Qv=e=>{var t=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);return t?t[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])?null:t[1].toLowerCase():"_relative"},s0={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:e=>"#"+e},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(e,t)=>(t.push(e),t)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:e=>Math.max(0,e),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:e=>Math.max(0,e),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:e=>Math.max(0,e),cli:"-e, --max-expand <n>",cliProcessor:e=>e==="Infinity"?1/0:parseInt(e)},globalGroup:{type:"boolean",cli:!1}};function Jv(e){if(typeof e!="string")return e.enum[0];switch(e){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{};default:throw new Error("Unexpected schema type; settings must declare an explicit default.")}}function Zv(e){if(e.default!==void 0)return e.default;var t=Array.isArray(e.type)?e.type[0]:e.type;return Jv(t)}function e5(e,t,r,a){var n=r[t];e[t]=n!==void 0?a.processor?a.processor(n):n:Zv(a)}class Eu{constructor(t){t===void 0&&(t={}),this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,t=t||{};for(var r of Object.keys(s0)){var a=s0[r];a&&e5(this,r,t,a)}}reportNonstrict(t,r,a){var n=this.strict;if(typeof n=="function"&&(n=n(t,r,a)),!(!n||n==="ignore")){if(n===!0||n==="error")throw new z("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+t+"]"),a);n==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+n+"': "+r+" ["+t+"]"))}}useStrictBehavior(t,r,a){var n=this.strict;if(typeof n=="function")try{n=n(t,r,a)}catch{n="error"}return!n||n==="ignore"?!1:n===!0||n==="error"?!0:n==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+n+"': "+r+" ["+t+"]")),!1)}isTrusted(t){if("url"in t&&t.url&&!t.protocol){var r=Qv(t.url);if(r==null)return!1;t.protocol=r}var a=typeof this.trust=="function"?this.trust(t):this.trust;return!!a}}class yr{constructor(t,r,a){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=t,this.size=r,this.cramped=a}sup(){return $t[t5[this.id]]}sub(){return $t[r5[this.id]]}fracNum(){return $t[a5[this.id]]}fracDen(){return $t[n5[this.id]]}cramp(){return $t[i5[this.id]]}text(){return $t[s5[this.id]]}isTight(){return this.size>=2}}var Nu=0,Rs=1,Ba=2,ir=3,ei=4,Tt=5,Xa=6,Je=7,$t=[new yr(Nu,0,!1),new yr(Rs,0,!0),new yr(Ba,1,!1),new yr(ir,1,!0),new yr(ei,2,!1),new yr(Tt,2,!0),new yr(Xa,3,!1),new yr(Je,3,!0)],t5=[ei,Tt,ei,Tt,Xa,Je,Xa,Je],r5=[Tt,Tt,Tt,Tt,Je,Je,Je,Je],a5=[Ba,ir,ei,Tt,Xa,Je,Xa,Je],n5=[ir,ir,Tt,Tt,Je,Je,Je,Je],i5=[Rs,Rs,ir,ir,Tt,Tt,Je,Je],s5=[Nu,Rs,Ba,ir,Ba,ir,Ba,ir],Z={DISPLAY:$t[Nu],TEXT:$t[Ba],SCRIPT:$t[ei],SCRIPTSCRIPT:$t[Xa]},o0=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function o5(e){for(var t=0;t<o0.length;t++)for(var r=o0[t],a=0;a<r.blocks.length;a++){var n=r.blocks[a];if(e>=n[0]&&e<=n[1])return r.name}return null}var ts=[];o0.forEach(e=>e.blocks.forEach(t=>ts.push(...t)));function Zp(e){for(var t=0;t<ts.length;t+=2)if(e>=ts[t]&&e<=ts[t+1])return!0;return!1}var Fe=e=>e+" "+e,va=80,l5=function(t,r){return"M95,"+(622+t+r)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+t/2.075+" -"+t+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+t)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},u5=function(t,r){return"M263,"+(601+t+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+t/2.084+" -"+t+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+t)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},c5=function(t,r){return"M983 "+(10+t+r)+`
l`+t/3.13+" -"+t+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+t)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},d5=function(t,r){return"M424,"+(2398+t+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+t/4.223+" -"+t+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+t)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+t)+" "+r+`
h400000v`+(40+t)+"h-400000z"},m5=function(t,r){return"M473,"+(2713+t+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+t/5.298+" -"+t+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+t)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+t)+" "+r+"h400000v"+(40+t)+"H1017.7z"},h5=function(t){var r=t/2;return"M400000 "+t+" H0 L"+r+" 0 l65 45 L145 "+(t-80)+" H400000z"},p5=function(t,r,a){var n=a-54-r-t;return"M702 "+(t+r)+"H400000"+(40+t)+`
H742v`+n+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+t)+"H742z"},f5=function(t,r,a){r=1e3*r;var n="";switch(t){case"sqrtMain":n=l5(r,va);break;case"sqrtSize1":n=u5(r,va);break;case"sqrtSize2":n=c5(r,va);break;case"sqrtSize3":n=d5(r,va);break;case"sqrtSize4":n=m5(r,va);break;case"sqrtTall":n=p5(r,va,a)}return n},g5=function(t,r){switch(t){case"⎜":return Fe("M291 0 H417 V"+r+" H291z");case"∣":return Fe("M145 0 H188 V"+r+" H145z");case"∥":return Fe("M145 0 H188 V"+r+" H145z")+Fe("M367 0 H410 V"+r+" H367z");case"⎟":return Fe("M457 0 H583 V"+r+" H457z");case"⎢":return Fe("M319 0 H403 V"+r+" H319z");case"⎥":return Fe("M263 0 H347 V"+r+" H263z");case"⎪":return Fe("M384 0 H504 V"+r+" H384z");case"⏐":return Fe("M312 0 H355 V"+r+" H312z");case"‖":return Fe("M257 0 H300 V"+r+" H257z")+Fe("M478 0 H521 V"+r+" H478z");default:return""}},Td={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:Fe("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),leftbracketunder:Fe("M0 0 h120 V290 H399995 v120 H0z"),leftbracketover:Fe("M0 440 h120 V150 H399995 v-120 H0z"),leftmapsto:Fe("M40 281 V448H0V74H40V241H400000v40z"),leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:Fe("M0 50 h400000 v40H0z m0 194h40000v40H0z"),midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:Fe("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),rightbracketunder:Fe("M399995 0 h-120 V290 H0 v120 H400000z"),rightbracketover:Fe("M399995 440 h-120 V150 H0 v-120 H399995z"),rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},y5=function(t,r){switch(t){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 v84 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+r+" v1759 v84 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+r+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+r+" v1759 h84z";case"vert":return"M145 15 v585 v"+r+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-r+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+r+" v585 h43z";case"doublevert":return"M145 15 v585 v"+r+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-r+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+r+` v585 h43z
M367 15 v585 v`+r+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-r+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+r+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+r+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+r+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+r+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+r+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v602 h84z
M403 1759 V0 H319 V1759 v`+r+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+r+` v602 h84z
M347 1759 V0 h-84 V1759 v`+r+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(r+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(r+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(r+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(r+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};function v5(e){return"toText"in e}class nn{constructor(t){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=t,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(t){return this.classes.includes(t)}toNode(){for(var t=document.createDocumentFragment(),r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){for(var t="",r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t}toText(){return this.children.map(t=>{if(v5(t))return t.toText();throw new Error("Expected MathDomNode with toText, got "+t.constructor.name)}).join("")}}var l0={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},w5={ex:!0,em:!0,mu:!0},ef=function(t){return typeof t!="string"&&(t=t.unit),t in l0||t in w5||t==="ex"},we=function(t,r){var a;if(t.unit in l0)a=l0[t.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(t.unit==="mu")a=r.fontMetrics().cssEmPerMu;else{var n;if(r.style.isTight()?n=r.havingStyle(r.style.text()):n=r,t.unit==="ex")a=n.fontMetrics().xHeight;else if(t.unit==="em")a=n.fontMetrics().quad;else throw new z("Invalid unit: '"+t.unit+"'");n!==r&&(a*=n.sizeMultiplier/r.sizeMultiplier)}return Math.min(t.number*a,r.maxSize)},$=function(t){return+t.toFixed(4)+"em"},jr=function(t){return t.filter(r=>r).join(" ")},Ru=function(t){var r="";for(var a of Object.keys(t)){var n=t[a];n!==void 0&&(r+=Vv(a)+":"+n+";")}return r},tf=function(t,r,a){if(this.classes=t||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=a||{},r){r.style.isTight()&&this.classes.push("mtight");var n=r.getColor();n&&(this.style.color=n)}},rf=function(t){var r=document.createElement(t);r.className=jr(this.classes),Object.assign(r.style,this.style);for(var a of Object.keys(this.attributes))r.setAttribute(a,this.attributes[a]);for(var n=0;n<this.children.length;n++)r.appendChild(this.children[n].toNode());return r},b5=/[\s"'>/=\x00-\x1f]/,af=function(t){var r="<"+t;this.classes.length&&(r+=' class="'+Ve(jr(this.classes))+'"');var a=Ru(this.style);a&&(r+=' style="'+Ve(a)+'"');for(var n of Object.keys(this.attributes)){if(b5.test(n))throw new z("Invalid attribute name '"+n+"'");r+=" "+n+'="'+Ve(this.attributes[n])+'"'}r+=">";for(var i=0;i<this.children.length;i++)r+=this.children[i].toMarkup();return r+="</"+t+">",r};class sn{constructor(t,r,a,n){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,this.italic=void 0,tf.call(this,t,a,n),this.children=r||[]}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return rf.call(this,"span")}toMarkup(){return af.call(this,"span")}}class to{constructor(t,r,a,n){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,tf.call(this,r,n),this.children=a||[],this.setAttribute("href",t)}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return rf.call(this,"a")}toMarkup(){return af.call(this,"a")}}class x5{constructor(t,r,a){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=t,this.classes=["mord"],this.height=0,this.depth=0,this.maxFontSize=0,this.style=a}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createElement("img");return t.src=this.src,t.alt=this.alt,t.className="mord",Object.assign(t.style,this.style),t}toMarkup(){var t='<img src="'+Ve(this.src)+'"'+(' alt="'+Ve(this.alt)+'"'),r=Ru(this.style);return r&&(t+=' style="'+Ve(r)+'"'),t+="'/>",t}}var S5={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class gt{constructor(t,r,a,n,i,s,o,l){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=t,this.height=r||0,this.depth=a||0,this.italic=n||0,this.skew=i||0,this.width=s||0,this.classes=o||[],this.style=l||{},this.maxFontSize=0;var d=o5(this.text.charCodeAt(0));d&&this.classes.push(d+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=S5[this.text])}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createTextNode(this.text),r=null;return this.italic>0&&(r=document.createElement("span"),r.style.marginRight=$(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=jr(this.classes)),Object.keys(this.style).length>0&&(r=r||document.createElement("span"),Object.assign(r.style,this.style)),r?(r.appendChild(t),r):t}toMarkup(){var t=!1,r="<span";this.classes.length&&(t=!0,r+=' class="',r+=Ve(jr(this.classes)),r+='"');var a="";this.italic>0&&(a+="margin-right:"+$(this.italic)+";"),a+=Ru(this.style),a&&(t=!0,r+=' style="'+Ve(a)+'"');var n=Ve(this.text);return t?(r+=">",r+=n,r+="</span>",r):n}}class cr{constructor(t,r){this.children=void 0,this.attributes=void 0,this.children=t||[],this.attributes=r||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"svg");for(var a of Object.keys(this.attributes))r.setAttribute(a,this.attributes[a]);for(var n=0;n<this.children.length;n++)r.appendChild(this.children[n].toNode());return r}toMarkup(){var t='<svg xmlns="http://www.w3.org/2000/svg"';for(var r of Object.keys(this.attributes))t+=" "+r+'="'+Ve(this.attributes[r])+'"';t+=">";for(var a=0;a<this.children.length;a++)t+=this.children[a].toMarkup();return t+="</svg>",t}}class Ur{constructor(t,r){this.pathName=void 0,this.alternate=void 0,this.pathName=t,this.alternate=r}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",Td[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+Ve(this.alternate)+'"/>':'<path d="'+Ve(Td[this.pathName])+'"/>'}}class u0{constructor(t){this.attributes=void 0,this.attributes=t||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"line");for(var a of Object.keys(this.attributes))r.setAttribute(a,this.attributes[a]);return r}toMarkup(){var t="<line";for(var r of Object.keys(this.attributes))t+=" "+r+'="'+Ve(this.attributes[r])+'"';return t+="/>",t}}function k5(e){if(e instanceof gt)return e;throw new Error("Expected symbolNode but got "+String(e)+".")}function T5(e){if(e instanceof sn)return e;throw new Error("Expected span<HtmlDomNode> but got "+String(e)+".")}var _5=e=>e instanceof sn||e instanceof to||e instanceof nn,Ut={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Li={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},_d={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function C5(e,t){Ut[e]=t}function Mu(e,t,r){if(!Ut[t])throw new Error("Font metrics not found for font: "+t+".");var a=e.charCodeAt(0),n=Ut[t][a];if(!n&&e[0]in _d&&(a=_d[e[0]].charCodeAt(0),n=Ut[t][a]),!n&&r==="text"&&Zp(a)&&(n=Ut[t][77]),n)return{depth:n[0],height:n[1],italic:n[2],skew:n[3],width:n[4]}}var Wo={};function E5(e){var t;if(e>=5?t=0:e>=3?t=1:t=2,!Wo[t]){var r=Wo[t]={cssEmPerMu:Li.quad[t]/18};for(var a in Li)Li.hasOwnProperty(a)&&(r[a]=Li[a][t])}return Wo[t]}var fe={math:{},text:{}};function u(e,t,r,a,n,i){fe[e][n]={font:t,group:r,replace:a},i&&a&&(fe[e][a]=fe[e][n])}var c="math",L="text",p="main",S="ams",ge="accent-token",H="bin",rt="close",on="inner",X="mathord",Me="op-token",wt="open",li="punct",k="rel",pr="spacing",C="textord";u(c,p,k,"≡","\\equiv",!0);u(c,p,k,"≺","\\prec",!0);u(c,p,k,"≻","\\succ",!0);u(c,p,k,"∼","\\sim",!0);u(c,p,k,"⊥","\\perp");u(c,p,k,"⪯","\\preceq",!0);u(c,p,k,"⪰","\\succeq",!0);u(c,p,k,"≃","\\simeq",!0);u(c,p,k,"∣","\\mid",!0);u(c,p,k,"≪","\\ll",!0);u(c,p,k,"≫","\\gg",!0);u(c,p,k,"≍","\\asymp",!0);u(c,p,k,"∥","\\parallel");u(c,p,k,"⋈","\\bowtie",!0);u(c,p,k,"⌣","\\smile",!0);u(c,p,k,"⊑","\\sqsubseteq",!0);u(c,p,k,"⊒","\\sqsupseteq",!0);u(c,p,k,"≐","\\doteq",!0);u(c,p,k,"⌢","\\frown",!0);u(c,p,k,"∋","\\ni",!0);u(c,p,k,"∝","\\propto",!0);u(c,p,k,"⊢","\\vdash",!0);u(c,p,k,"⊣","\\dashv",!0);u(c,p,k,"∋","\\owns");u(c,p,li,".","\\ldotp");u(c,p,li,"⋅","\\cdotp");u(c,p,li,"⋅","·");u(L,p,C,"⋅","·");u(c,p,C,"#","\\#");u(L,p,C,"#","\\#");u(c,p,C,"&","\\&");u(L,p,C,"&","\\&");u(c,p,C,"ℵ","\\aleph",!0);u(c,p,C,"∀","\\forall",!0);u(c,p,C,"ℏ","\\hbar",!0);u(c,p,C,"∃","\\exists",!0);u(c,p,C,"∇","\\nabla",!0);u(c,p,C,"♭","\\flat",!0);u(c,p,C,"ℓ","\\ell",!0);u(c,p,C,"♮","\\natural",!0);u(c,p,C,"♣","\\clubsuit",!0);u(c,p,C,"℘","\\wp",!0);u(c,p,C,"♯","\\sharp",!0);u(c,p,C,"♢","\\diamondsuit",!0);u(c,p,C,"ℜ","\\Re",!0);u(c,p,C,"♡","\\heartsuit",!0);u(c,p,C,"ℑ","\\Im",!0);u(c,p,C,"♠","\\spadesuit",!0);u(c,p,C,"§","\\S",!0);u(L,p,C,"§","\\S");u(c,p,C,"¶","\\P",!0);u(L,p,C,"¶","\\P");u(c,p,C,"†","\\dag");u(L,p,C,"†","\\dag");u(L,p,C,"†","\\textdagger");u(c,p,C,"‡","\\ddag");u(L,p,C,"‡","\\ddag");u(L,p,C,"‡","\\textdaggerdbl");u(c,p,rt,"⎱","\\rmoustache",!0);u(c,p,wt,"⎰","\\lmoustache",!0);u(c,p,rt,"⟯","\\rgroup",!0);u(c,p,wt,"⟮","\\lgroup",!0);u(c,p,H,"∓","\\mp",!0);u(c,p,H,"⊖","\\ominus",!0);u(c,p,H,"⊎","\\uplus",!0);u(c,p,H,"⊓","\\sqcap",!0);u(c,p,H,"∗","\\ast");u(c,p,H,"⊔","\\sqcup",!0);u(c,p,H,"◯","\\bigcirc",!0);u(c,p,H,"∙","\\bullet",!0);u(c,p,H,"‡","\\ddagger");u(c,p,H,"≀","\\wr",!0);u(c,p,H,"⨿","\\amalg");u(c,p,H,"&","\\And");u(c,p,k,"⟵","\\longleftarrow",!0);u(c,p,k,"⇐","\\Leftarrow",!0);u(c,p,k,"⟸","\\Longleftarrow",!0);u(c,p,k,"⟶","\\longrightarrow",!0);u(c,p,k,"⇒","\\Rightarrow",!0);u(c,p,k,"⟹","\\Longrightarrow",!0);u(c,p,k,"↔","\\leftrightarrow",!0);u(c,p,k,"⟷","\\longleftrightarrow",!0);u(c,p,k,"⇔","\\Leftrightarrow",!0);u(c,p,k,"⟺","\\Longleftrightarrow",!0);u(c,p,k,"↦","\\mapsto",!0);u(c,p,k,"⟼","\\longmapsto",!0);u(c,p,k,"↗","\\nearrow",!0);u(c,p,k,"↩","\\hookleftarrow",!0);u(c,p,k,"↪","\\hookrightarrow",!0);u(c,p,k,"↘","\\searrow",!0);u(c,p,k,"↼","\\leftharpoonup",!0);u(c,p,k,"⇀","\\rightharpoonup",!0);u(c,p,k,"↙","\\swarrow",!0);u(c,p,k,"↽","\\leftharpoondown",!0);u(c,p,k,"⇁","\\rightharpoondown",!0);u(c,p,k,"↖","\\nwarrow",!0);u(c,p,k,"⇌","\\rightleftharpoons",!0);u(c,S,k,"≮","\\nless",!0);u(c,S,k,"","\\@nleqslant");u(c,S,k,"","\\@nleqq");u(c,S,k,"⪇","\\lneq",!0);u(c,S,k,"≨","\\lneqq",!0);u(c,S,k,"","\\@lvertneqq");u(c,S,k,"⋦","\\lnsim",!0);u(c,S,k,"⪉","\\lnapprox",!0);u(c,S,k,"⊀","\\nprec",!0);u(c,S,k,"⋠","\\npreceq",!0);u(c,S,k,"⋨","\\precnsim",!0);u(c,S,k,"⪹","\\precnapprox",!0);u(c,S,k,"≁","\\nsim",!0);u(c,S,k,"","\\@nshortmid");u(c,S,k,"∤","\\nmid",!0);u(c,S,k,"⊬","\\nvdash",!0);u(c,S,k,"⊭","\\nvDash",!0);u(c,S,k,"⋪","\\ntriangleleft");u(c,S,k,"⋬","\\ntrianglelefteq",!0);u(c,S,k,"⊊","\\subsetneq",!0);u(c,S,k,"","\\@varsubsetneq");u(c,S,k,"⫋","\\subsetneqq",!0);u(c,S,k,"","\\@varsubsetneqq");u(c,S,k,"≯","\\ngtr",!0);u(c,S,k,"","\\@ngeqslant");u(c,S,k,"","\\@ngeqq");u(c,S,k,"⪈","\\gneq",!0);u(c,S,k,"≩","\\gneqq",!0);u(c,S,k,"","\\@gvertneqq");u(c,S,k,"⋧","\\gnsim",!0);u(c,S,k,"⪊","\\gnapprox",!0);u(c,S,k,"⊁","\\nsucc",!0);u(c,S,k,"⋡","\\nsucceq",!0);u(c,S,k,"⋩","\\succnsim",!0);u(c,S,k,"⪺","\\succnapprox",!0);u(c,S,k,"≆","\\ncong",!0);u(c,S,k,"","\\@nshortparallel");u(c,S,k,"∦","\\nparallel",!0);u(c,S,k,"⊯","\\nVDash",!0);u(c,S,k,"⋫","\\ntriangleright");u(c,S,k,"⋭","\\ntrianglerighteq",!0);u(c,S,k,"","\\@nsupseteqq");u(c,S,k,"⊋","\\supsetneq",!0);u(c,S,k,"","\\@varsupsetneq");u(c,S,k,"⫌","\\supsetneqq",!0);u(c,S,k,"","\\@varsupsetneqq");u(c,S,k,"⊮","\\nVdash",!0);u(c,S,k,"⪵","\\precneqq",!0);u(c,S,k,"⪶","\\succneqq",!0);u(c,S,k,"","\\@nsubseteqq");u(c,S,H,"⊴","\\unlhd");u(c,S,H,"⊵","\\unrhd");u(c,S,k,"↚","\\nleftarrow",!0);u(c,S,k,"↛","\\nrightarrow",!0);u(c,S,k,"⇍","\\nLeftarrow",!0);u(c,S,k,"⇏","\\nRightarrow",!0);u(c,S,k,"↮","\\nleftrightarrow",!0);u(c,S,k,"⇎","\\nLeftrightarrow",!0);u(c,S,k,"△","\\vartriangle");u(c,S,C,"ℏ","\\hslash");u(c,S,C,"▽","\\triangledown");u(c,S,C,"◊","\\lozenge");u(c,S,C,"Ⓢ","\\circledS");u(c,S,C,"®","\\circledR");u(L,S,C,"®","\\circledR");u(c,S,C,"∡","\\measuredangle",!0);u(c,S,C,"∄","\\nexists");u(c,S,C,"℧","\\mho");u(c,S,C,"Ⅎ","\\Finv",!0);u(c,S,C,"⅁","\\Game",!0);u(c,S,C,"‵","\\backprime");u(c,S,C,"▲","\\blacktriangle");u(c,S,C,"▼","\\blacktriangledown");u(c,S,C,"■","\\blacksquare");u(c,S,C,"⧫","\\blacklozenge");u(c,S,C,"★","\\bigstar");u(c,S,C,"∢","\\sphericalangle",!0);u(c,S,C,"∁","\\complement",!0);u(c,S,C,"ð","\\eth",!0);u(L,p,C,"ð","ð");u(c,S,C,"╱","\\diagup");u(c,S,C,"╲","\\diagdown");u(c,S,C,"□","\\square");u(c,S,C,"□","\\Box");u(c,S,C,"◊","\\Diamond");u(c,S,C,"¥","\\yen",!0);u(L,S,C,"¥","\\yen",!0);u(c,S,C,"✓","\\checkmark",!0);u(L,S,C,"✓","\\checkmark");u(c,S,C,"ℶ","\\beth",!0);u(c,S,C,"ℸ","\\daleth",!0);u(c,S,C,"ℷ","\\gimel",!0);u(c,S,C,"ϝ","\\digamma",!0);u(c,S,C,"ϰ","\\varkappa");u(c,S,wt,"┌","\\@ulcorner",!0);u(c,S,rt,"┐","\\@urcorner",!0);u(c,S,wt,"└","\\@llcorner",!0);u(c,S,rt,"┘","\\@lrcorner",!0);u(c,S,k,"≦","\\leqq",!0);u(c,S,k,"⩽","\\leqslant",!0);u(c,S,k,"⪕","\\eqslantless",!0);u(c,S,k,"≲","\\lesssim",!0);u(c,S,k,"⪅","\\lessapprox",!0);u(c,S,k,"≊","\\approxeq",!0);u(c,S,H,"⋖","\\lessdot");u(c,S,k,"⋘","\\lll",!0);u(c,S,k,"≶","\\lessgtr",!0);u(c,S,k,"⋚","\\lesseqgtr",!0);u(c,S,k,"⪋","\\lesseqqgtr",!0);u(c,S,k,"≑","\\doteqdot");u(c,S,k,"≓","\\risingdotseq",!0);u(c,S,k,"≒","\\fallingdotseq",!0);u(c,S,k,"∽","\\backsim",!0);u(c,S,k,"⋍","\\backsimeq",!0);u(c,S,k,"⫅","\\subseteqq",!0);u(c,S,k,"⋐","\\Subset",!0);u(c,S,k,"⊏","\\sqsubset",!0);u(c,S,k,"≼","\\preccurlyeq",!0);u(c,S,k,"⋞","\\curlyeqprec",!0);u(c,S,k,"≾","\\precsim",!0);u(c,S,k,"⪷","\\precapprox",!0);u(c,S,k,"⊲","\\vartriangleleft");u(c,S,k,"⊴","\\trianglelefteq");u(c,S,k,"⊨","\\vDash",!0);u(c,S,k,"⊪","\\Vvdash",!0);u(c,S,k,"⌣","\\smallsmile");u(c,S,k,"⌢","\\smallfrown");u(c,S,k,"≏","\\bumpeq",!0);u(c,S,k,"≎","\\Bumpeq",!0);u(c,S,k,"≧","\\geqq",!0);u(c,S,k,"⩾","\\geqslant",!0);u(c,S,k,"⪖","\\eqslantgtr",!0);u(c,S,k,"≳","\\gtrsim",!0);u(c,S,k,"⪆","\\gtrapprox",!0);u(c,S,H,"⋗","\\gtrdot");u(c,S,k,"⋙","\\ggg",!0);u(c,S,k,"≷","\\gtrless",!0);u(c,S,k,"⋛","\\gtreqless",!0);u(c,S,k,"⪌","\\gtreqqless",!0);u(c,S,k,"≖","\\eqcirc",!0);u(c,S,k,"≗","\\circeq",!0);u(c,S,k,"≜","\\triangleq",!0);u(c,S,k,"∼","\\thicksim");u(c,S,k,"≈","\\thickapprox");u(c,S,k,"⫆","\\supseteqq",!0);u(c,S,k,"⋑","\\Supset",!0);u(c,S,k,"⊐","\\sqsupset",!0);u(c,S,k,"≽","\\succcurlyeq",!0);u(c,S,k,"⋟","\\curlyeqsucc",!0);u(c,S,k,"≿","\\succsim",!0);u(c,S,k,"⪸","\\succapprox",!0);u(c,S,k,"⊳","\\vartriangleright");u(c,S,k,"⊵","\\trianglerighteq");u(c,S,k,"⊩","\\Vdash",!0);u(c,S,k,"∣","\\shortmid");u(c,S,k,"∥","\\shortparallel");u(c,S,k,"≬","\\between",!0);u(c,S,k,"⋔","\\pitchfork",!0);u(c,S,k,"∝","\\varpropto");u(c,S,k,"◀","\\blacktriangleleft");u(c,S,k,"∴","\\therefore",!0);u(c,S,k,"∍","\\backepsilon");u(c,S,k,"▶","\\blacktriangleright");u(c,S,k,"∵","\\because",!0);u(c,S,k,"⋘","\\llless");u(c,S,k,"⋙","\\gggtr");u(c,S,H,"⊲","\\lhd");u(c,S,H,"⊳","\\rhd");u(c,S,k,"≂","\\eqsim",!0);u(c,p,k,"⋈","\\Join");u(c,S,k,"≑","\\Doteq",!0);u(c,S,H,"∔","\\dotplus",!0);u(c,S,H,"∖","\\smallsetminus");u(c,S,H,"⋒","\\Cap",!0);u(c,S,H,"⋓","\\Cup",!0);u(c,S,H,"⩞","\\doublebarwedge",!0);u(c,S,H,"⊟","\\boxminus",!0);u(c,S,H,"⊞","\\boxplus",!0);u(c,S,H,"⋇","\\divideontimes",!0);u(c,S,H,"⋉","\\ltimes",!0);u(c,S,H,"⋊","\\rtimes",!0);u(c,S,H,"⋋","\\leftthreetimes",!0);u(c,S,H,"⋌","\\rightthreetimes",!0);u(c,S,H,"⋏","\\curlywedge",!0);u(c,S,H,"⋎","\\curlyvee",!0);u(c,S,H,"⊝","\\circleddash",!0);u(c,S,H,"⊛","\\circledast",!0);u(c,S,H,"⋅","\\centerdot");u(c,S,H,"⊺","\\intercal",!0);u(c,S,H,"⋒","\\doublecap");u(c,S,H,"⋓","\\doublecup");u(c,S,H,"⊠","\\boxtimes",!0);u(c,S,k,"⇢","\\dashrightarrow",!0);u(c,S,k,"⇠","\\dashleftarrow",!0);u(c,S,k,"⇇","\\leftleftarrows",!0);u(c,S,k,"⇆","\\leftrightarrows",!0);u(c,S,k,"⇚","\\Lleftarrow",!0);u(c,S,k,"↞","\\twoheadleftarrow",!0);u(c,S,k,"↢","\\leftarrowtail",!0);u(c,S,k,"↫","\\looparrowleft",!0);u(c,S,k,"⇋","\\leftrightharpoons",!0);u(c,S,k,"↶","\\curvearrowleft",!0);u(c,S,k,"↺","\\circlearrowleft",!0);u(c,S,k,"↰","\\Lsh",!0);u(c,S,k,"⇈","\\upuparrows",!0);u(c,S,k,"↿","\\upharpoonleft",!0);u(c,S,k,"⇃","\\downharpoonleft",!0);u(c,p,k,"⊶","\\origof",!0);u(c,p,k,"⊷","\\imageof",!0);u(c,S,k,"⊸","\\multimap",!0);u(c,S,k,"↭","\\leftrightsquigarrow",!0);u(c,S,k,"⇉","\\rightrightarrows",!0);u(c,S,k,"⇄","\\rightleftarrows",!0);u(c,S,k,"↠","\\twoheadrightarrow",!0);u(c,S,k,"↣","\\rightarrowtail",!0);u(c,S,k,"↬","\\looparrowright",!0);u(c,S,k,"↷","\\curvearrowright",!0);u(c,S,k,"↻","\\circlearrowright",!0);u(c,S,k,"↱","\\Rsh",!0);u(c,S,k,"⇊","\\downdownarrows",!0);u(c,S,k,"↾","\\upharpoonright",!0);u(c,S,k,"⇂","\\downharpoonright",!0);u(c,S,k,"⇝","\\rightsquigarrow",!0);u(c,S,k,"⇝","\\leadsto");u(c,S,k,"⇛","\\Rrightarrow",!0);u(c,S,k,"↾","\\restriction");u(c,p,C,"‘","`");u(c,p,C,"$","\\$");u(L,p,C,"$","\\$");u(L,p,C,"$","\\textdollar");u(c,p,C,"%","\\%");u(L,p,C,"%","\\%");u(c,p,C,"_","\\_");u(L,p,C,"_","\\_");u(L,p,C,"_","\\textunderscore");u(c,p,C,"∠","\\angle",!0);u(c,p,C,"∞","\\infty",!0);u(c,p,C,"′","\\prime");u(c,p,C,"△","\\triangle");u(c,p,C,"Γ","\\Gamma",!0);u(c,p,C,"Δ","\\Delta",!0);u(c,p,C,"Θ","\\Theta",!0);u(c,p,C,"Λ","\\Lambda",!0);u(c,p,C,"Ξ","\\Xi",!0);u(c,p,C,"Π","\\Pi",!0);u(c,p,C,"Σ","\\Sigma",!0);u(c,p,C,"Υ","\\Upsilon",!0);u(c,p,C,"Φ","\\Phi",!0);u(c,p,C,"Ψ","\\Psi",!0);u(c,p,C,"Ω","\\Omega",!0);u(c,p,C,"A","Α");u(c,p,C,"B","Β");u(c,p,C,"E","Ε");u(c,p,C,"Z","Ζ");u(c,p,C,"H","Η");u(c,p,C,"I","Ι");u(c,p,C,"K","Κ");u(c,p,C,"M","Μ");u(c,p,C,"N","Ν");u(c,p,C,"O","Ο");u(c,p,C,"P","Ρ");u(c,p,C,"T","Τ");u(c,p,C,"X","Χ");u(c,p,C,"¬","\\neg",!0);u(c,p,C,"¬","\\lnot");u(c,p,C,"⊤","\\top");u(c,p,C,"⊥","\\bot");u(c,p,C,"∅","\\emptyset");u(c,S,C,"∅","\\varnothing");u(c,p,X,"α","\\alpha",!0);u(c,p,X,"β","\\beta",!0);u(c,p,X,"γ","\\gamma",!0);u(c,p,X,"δ","\\delta",!0);u(c,p,X,"ϵ","\\epsilon",!0);u(c,p,X,"ζ","\\zeta",!0);u(c,p,X,"η","\\eta",!0);u(c,p,X,"θ","\\theta",!0);u(c,p,X,"ι","\\iota",!0);u(c,p,X,"κ","\\kappa",!0);u(c,p,X,"λ","\\lambda",!0);u(c,p,X,"μ","\\mu",!0);u(c,p,X,"ν","\\nu",!0);u(c,p,X,"ξ","\\xi",!0);u(c,p,X,"ο","\\omicron",!0);u(c,p,X,"π","\\pi",!0);u(c,p,X,"ρ","\\rho",!0);u(c,p,X,"σ","\\sigma",!0);u(c,p,X,"τ","\\tau",!0);u(c,p,X,"υ","\\upsilon",!0);u(c,p,X,"ϕ","\\phi",!0);u(c,p,X,"χ","\\chi",!0);u(c,p,X,"ψ","\\psi",!0);u(c,p,X,"ω","\\omega",!0);u(c,p,X,"ε","\\varepsilon",!0);u(c,p,X,"ϑ","\\vartheta",!0);u(c,p,X,"ϖ","\\varpi",!0);u(c,p,X,"ϱ","\\varrho",!0);u(c,p,X,"ς","\\varsigma",!0);u(c,p,X,"φ","\\varphi",!0);u(c,p,H,"∗","*",!0);u(c,p,H,"+","+");u(c,p,H,"−","-",!0);u(c,p,H,"⋅","\\cdot",!0);u(c,p,H,"∘","\\circ",!0);u(c,p,H,"÷","\\div",!0);u(c,p,H,"±","\\pm",!0);u(c,p,H,"×","\\times",!0);u(c,p,H,"∩","\\cap",!0);u(c,p,H,"∪","\\cup",!0);u(c,p,H,"∖","\\setminus",!0);u(c,p,H,"∧","\\land");u(c,p,H,"∨","\\lor");u(c,p,H,"∧","\\wedge",!0);u(c,p,H,"∨","\\vee",!0);u(c,p,C,"√","\\surd");u(c,p,wt,"⟨","\\langle",!0);u(c,p,wt,"∣","\\lvert");u(c,p,wt,"∥","\\lVert");u(c,p,rt,"?","?");u(c,p,rt,"!","!");u(c,p,rt,"⟩","\\rangle",!0);u(c,p,rt,"∣","\\rvert");u(c,p,rt,"∥","\\rVert");u(c,p,k,"=","=");u(c,p,k,":",":");u(c,p,k,"≈","\\approx",!0);u(c,p,k,"≅","\\cong",!0);u(c,p,k,"≥","\\ge");u(c,p,k,"≥","\\geq",!0);u(c,p,k,"←","\\gets");u(c,p,k,">","\\gt",!0);u(c,p,k,"∈","\\in",!0);u(c,p,k,"","\\@not");u(c,p,k,"⊂","\\subset",!0);u(c,p,k,"⊃","\\supset",!0);u(c,p,k,"⊆","\\subseteq",!0);u(c,p,k,"⊇","\\supseteq",!0);u(c,S,k,"⊈","\\nsubseteq",!0);u(c,S,k,"⊉","\\nsupseteq",!0);u(c,p,k,"⊨","\\models");u(c,p,k,"←","\\leftarrow",!0);u(c,p,k,"≤","\\le");u(c,p,k,"≤","\\leq",!0);u(c,p,k,"<","\\lt",!0);u(c,p,k,"→","\\rightarrow",!0);u(c,p,k,"→","\\to");u(c,S,k,"≱","\\ngeq",!0);u(c,S,k,"≰","\\nleq",!0);u(c,p,pr," ","\\ ");u(c,p,pr," ","\\space");u(c,p,pr," ","\\nobreakspace");u(L,p,pr," ","\\ ");u(L,p,pr," "," ");u(L,p,pr," ","\\space");u(L,p,pr," ","\\nobreakspace");u(c,p,pr,"","\\nobreak");u(c,p,pr,"","\\allowbreak");u(c,p,li,",",",");u(c,p,li,";",";");u(c,S,H,"⊼","\\barwedge",!0);u(c,S,H,"⊻","\\veebar",!0);u(c,p,H,"⊙","\\odot",!0);u(c,p,H,"⊕","\\oplus",!0);u(c,p,H,"⊗","\\otimes",!0);u(c,p,C,"∂","\\partial",!0);u(c,p,H,"⊘","\\oslash",!0);u(c,S,H,"⊚","\\circledcirc",!0);u(c,S,H,"⊡","\\boxdot",!0);u(c,p,H,"△","\\bigtriangleup");u(c,p,H,"▽","\\bigtriangledown");u(c,p,H,"†","\\dagger");u(c,p,H,"⋄","\\diamond");u(c,p,H,"⋆","\\star");u(c,p,H,"◃","\\triangleleft");u(c,p,H,"▹","\\triangleright");u(c,p,wt,"{","\\{");u(L,p,C,"{","\\{");u(L,p,C,"{","\\textbraceleft");u(c,p,rt,"}","\\}");u(L,p,C,"}","\\}");u(L,p,C,"}","\\textbraceright");u(c,p,wt,"{","\\lbrace");u(c,p,rt,"}","\\rbrace");u(c,p,wt,"[","\\lbrack",!0);u(L,p,C,"[","\\lbrack",!0);u(c,p,rt,"]","\\rbrack",!0);u(L,p,C,"]","\\rbrack",!0);u(c,p,wt,"(","\\lparen",!0);u(c,p,rt,")","\\rparen",!0);u(L,p,C,"<","\\textless",!0);u(L,p,C,">","\\textgreater",!0);u(c,p,wt,"⌊","\\lfloor",!0);u(c,p,rt,"⌋","\\rfloor",!0);u(c,p,wt,"⌈","\\lceil",!0);u(c,p,rt,"⌉","\\rceil",!0);u(c,p,C,"\\","\\backslash");u(c,p,C,"∣","|");u(c,p,C,"∣","\\vert");u(L,p,C,"|","\\textbar",!0);u(c,p,C,"∥","\\|");u(c,p,C,"∥","\\Vert");u(L,p,C,"∥","\\textbardbl");u(L,p,C,"~","\\textasciitilde");u(L,p,C,"\\","\\textbackslash");u(L,p,C,"^","\\textasciicircum");u(c,p,k,"↑","\\uparrow",!0);u(c,p,k,"⇑","\\Uparrow",!0);u(c,p,k,"↓","\\downarrow",!0);u(c,p,k,"⇓","\\Downarrow",!0);u(c,p,k,"↕","\\updownarrow",!0);u(c,p,k,"⇕","\\Updownarrow",!0);u(c,p,Me,"∐","\\coprod");u(c,p,Me,"⋁","\\bigvee");u(c,p,Me,"⋀","\\bigwedge");u(c,p,Me,"⨄","\\biguplus");u(c,p,Me,"⋂","\\bigcap");u(c,p,Me,"⋃","\\bigcup");u(c,p,Me,"∫","\\int");u(c,p,Me,"∫","\\intop");u(c,p,Me,"∬","\\iint");u(c,p,Me,"∭","\\iiint");u(c,p,Me,"∏","\\prod");u(c,p,Me,"∑","\\sum");u(c,p,Me,"⨂","\\bigotimes");u(c,p,Me,"⨁","\\bigoplus");u(c,p,Me,"⨀","\\bigodot");u(c,p,Me,"∮","\\oint");u(c,p,Me,"∯","\\oiint");u(c,p,Me,"∰","\\oiiint");u(c,p,Me,"⨆","\\bigsqcup");u(c,p,Me,"∫","\\smallint");u(L,p,on,"…","\\textellipsis");u(c,p,on,"…","\\mathellipsis");u(L,p,on,"…","\\ldots",!0);u(c,p,on,"…","\\ldots",!0);u(c,p,on,"⋯","\\@cdots",!0);u(c,p,on,"⋱","\\ddots",!0);u(c,p,C,"⋮","\\varvdots");u(L,p,C,"⋮","\\varvdots");u(c,p,ge,"ˊ","\\acute");u(c,p,ge,"ˋ","\\grave");u(c,p,ge,"¨","\\ddot");u(c,p,ge,"~","\\tilde");u(c,p,ge,"ˉ","\\bar");u(c,p,ge,"˘","\\breve");u(c,p,ge,"ˇ","\\check");u(c,p,ge,"^","\\hat");u(c,p,ge,"⃗","\\vec");u(c,p,ge,"˙","\\dot");u(c,p,ge,"˚","\\mathring");u(c,p,X,"","\\@imath");u(c,p,X,"","\\@jmath");u(c,p,C,"ı","ı");u(c,p,C,"ȷ","ȷ");u(L,p,C,"ı","\\i",!0);u(L,p,C,"ȷ","\\j",!0);u(L,p,C,"ß","\\ss",!0);u(L,p,C,"æ","\\ae",!0);u(L,p,C,"œ","\\oe",!0);u(L,p,C,"ø","\\o",!0);u(L,p,C,"Æ","\\AE",!0);u(L,p,C,"Œ","\\OE",!0);u(L,p,C,"Ø","\\O",!0);u(L,p,ge,"ˊ","\\'");u(L,p,ge,"ˋ","\\`");u(L,p,ge,"ˆ","\\^");u(L,p,ge,"˜","\\~");u(L,p,ge,"ˉ","\\=");u(L,p,ge,"˘","\\u");u(L,p,ge,"˙","\\.");u(L,p,ge,"¸","\\c");u(L,p,ge,"˚","\\r");u(L,p,ge,"ˇ","\\v");u(L,p,ge,"¨",'\\"');u(L,p,ge,"˝","\\H");u(L,p,ge,"◯","\\textcircled");var nf={"--":!0,"---":!0,"``":!0,"''":!0};u(L,p,C,"–","--",!0);u(L,p,C,"–","\\textendash");u(L,p,C,"—","---",!0);u(L,p,C,"—","\\textemdash");u(L,p,C,"‘","`",!0);u(L,p,C,"‘","\\textquoteleft");u(L,p,C,"’","'",!0);u(L,p,C,"’","\\textquoteright");u(L,p,C,"“","``",!0);u(L,p,C,"“","\\textquotedblleft");u(L,p,C,"”","''",!0);u(L,p,C,"”","\\textquotedblright");u(c,p,C,"°","\\degree",!0);u(L,p,C,"°","\\degree");u(L,p,C,"°","\\textdegree",!0);u(c,p,C,"£","\\pounds");u(c,p,C,"£","\\mathsterling",!0);u(L,p,C,"£","\\pounds");u(L,p,C,"£","\\textsterling",!0);u(c,S,C,"✠","\\maltese");u(L,S,C,"✠","\\maltese");var Cd='0123456789/@."';for(var Vo=0;Vo<Cd.length;Vo++){var Ed=Cd.charAt(Vo);u(c,p,C,Ed,Ed)}var Nd='0123456789!@*()-=+";:?/.,';for(var Xo=0;Xo<Nd.length;Xo++){var Rd=Nd.charAt(Xo);u(L,p,C,Rd,Rd)}var Ms="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var Ko=0;Ko<Ms.length;Ko++){var Oi=Ms.charAt(Ko);u(c,p,X,Oi,Oi),u(L,p,C,Oi,Oi)}u(c,S,C,"C","ℂ");u(L,S,C,"C","ℂ");u(c,S,C,"H","ℍ");u(L,S,C,"H","ℍ");u(c,S,C,"N","ℕ");u(L,S,C,"N","ℕ");u(c,S,C,"P","ℙ");u(L,S,C,"P","ℙ");u(c,S,C,"Q","ℚ");u(L,S,C,"Q","ℚ");u(c,S,C,"R","ℝ");u(L,S,C,"R","ℝ");u(c,S,C,"Z","ℤ");u(L,S,C,"Z","ℤ");u(c,p,X,"h","ℎ");u(L,p,X,"h","ℎ");var J;for(var Ke=0;Ke<Ms.length;Ke++){var ke=Ms.charAt(Ke);J=String.fromCharCode(55349,56320+Ke),u(c,p,X,ke,J),u(L,p,C,ke,J),J=String.fromCharCode(55349,56372+Ke),u(c,p,X,ke,J),u(L,p,C,ke,J),J=String.fromCharCode(55349,56424+Ke),u(c,p,X,ke,J),u(L,p,C,ke,J),J=String.fromCharCode(55349,56580+Ke),u(c,p,X,ke,J),u(L,p,C,ke,J),J=String.fromCharCode(55349,56684+Ke),u(c,p,X,ke,J),u(L,p,C,ke,J),J=String.fromCharCode(55349,56736+Ke),u(c,p,X,ke,J),u(L,p,C,ke,J),J=String.fromCharCode(55349,56788+Ke),u(c,p,X,ke,J),u(L,p,C,ke,J),J=String.fromCharCode(55349,56840+Ke),u(c,p,X,ke,J),u(L,p,C,ke,J),J=String.fromCharCode(55349,56944+Ke),u(c,p,X,ke,J),u(L,p,C,ke,J),Ke<26&&(J=String.fromCharCode(55349,56632+Ke),u(c,p,X,ke,J),u(L,p,C,ke,J),J=String.fromCharCode(55349,56476+Ke),u(c,p,X,ke,J),u(L,p,C,ke,J))}J="𝕜";u(c,p,X,"k",J);u(L,p,C,"k",J);for(var Yr=0;Yr<10;Yr++){var vr=Yr.toString();J=String.fromCharCode(55349,57294+Yr),u(c,p,X,vr,J),u(L,p,C,vr,J),J=String.fromCharCode(55349,57314+Yr),u(c,p,X,vr,J),u(L,p,C,vr,J),J=String.fromCharCode(55349,57324+Yr),u(c,p,X,vr,J),u(L,p,C,vr,J),J=String.fromCharCode(55349,57334+Yr),u(c,p,X,vr,J),u(L,p,C,vr,J)}var c0="ÐÞþ";for(var Yo=0;Yo<c0.length;Yo++){var Pi=c0.charAt(Yo);u(c,p,X,Pi,Pi),u(L,p,C,Pi,Pi)}var d0={mathClass:"mathbf",textClass:"textbf",font:"Main-Bold"},Md={mathClass:"mathnormal",textClass:"textit",font:"Math-Italic"},Ad={mathClass:"boldsymbol",textClass:"boldsymbol",font:"Main-BoldItalic"},N5={mathClass:"mathscr",textClass:"textscr",font:"Script-Regular"},ea={mathClass:"",textClass:"",font:""},Id={mathClass:"mathfrak",textClass:"textfrak",font:"Fraktur-Regular"},Fd={mathClass:"mathbb",textClass:"textbb",font:"AMS-Regular"},Ld={mathClass:"mathboldfrak",textClass:"textboldfrak",font:"Fraktur-Regular"},m0={mathClass:"mathsf",textClass:"textsf",font:"SansSerif-Regular"},h0={mathClass:"mathboldsf",textClass:"textboldsf",font:"SansSerif-Bold"},Od={mathClass:"mathitsf",textClass:"textitsf",font:"SansSerif-Italic"},p0={mathClass:"mathtt",textClass:"texttt",font:"Typewriter-Regular"},Pd=[d0,d0,Md,Md,Ad,Ad,N5,ea,ea,ea,Id,Id,Fd,Fd,Ld,Ld,m0,m0,h0,h0,Od,Od,ea,ea,p0,p0],R5=[d0,ea,m0,h0,p0],M5=e=>{var t=e.charCodeAt(0),r=e.charCodeAt(1),a=(t-55296)*1024+(r-56320)+65536;if(119808<=a&&a<120484){var n=Math.floor((a-119808)/26);return Pd[n]}else if(120782<=a&&a<=120831){var i=Math.floor((a-120782)/10);return R5[i]}else{if(a===120485||a===120486)return Pd[0];if(120486<a&&a<120782)return ea;throw new z("Unsupported character: "+e)}},ro=function(t,r,a){if(fe[a][t]){var n=fe[a][t].replace;n&&(t=n)}return{value:t,metrics:Mu(t,r,a)}},Qe=function(t,r,a,n,i){var s=ro(t,r,a),o=s.metrics;t=s.value;var l;if(o){var d=o.italic;(a==="text"||n&&n.font==="mathit")&&(d=0),l=new gt(t,o.height,o.depth,d,o.skew,o.width,i)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+t+"' in style '"+r+"' and mode '"+a+"'")),l=new gt(t,0,0,0,0,0,i);if(n){l.maxFontSize=n.sizeMultiplier,n.style.isTight()&&l.classes.push("mtight");var h=n.getColor();h&&(l.style.color=h)}return l},Au=function(t,r,a,n){return n===void 0&&(n=[]),a.font==="boldsymbol"&&ro(t,"Main-Bold",r).metrics?Qe(t,"Main-Bold",r,a,n.concat(["mathbf"])):t==="\\"||fe[r][t].font==="main"?Qe(t,"Main-Regular",r,a,n):Qe(t,"AMS-Regular",r,a,n.concat(["amsrm"]))},A5=function(t,r,a){return a!=="textord"&&ro(t,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},ao=function(t,r,a){var n=t.mode,i=t.text,s=["mord"],{font:o,fontFamily:l,fontWeight:d,fontShape:h}=r,m=n==="math"||n==="text"&&!!o,g=m?o:l,b="",_="";if(i.charCodeAt(0)===55349){var T=M5(i);b=T.font,_=T[n+"Class"]}if(b)return Qe(i,b,n,r,s.concat(_));if(g){var N,w;if(g==="boldsymbol"){var v=A5(i,n,a);N=v.fontName,w=[v.fontClass]}else m?(N=f0[o].fontName,w=[o]):(N=zi(l,d,h),w=[l,d,h]);if(ro(i,N,n).metrics)return Qe(i,N,n,r,s.concat(w));if(nf.hasOwnProperty(i)&&N.slice(0,10)==="Typewriter"){for(var x=[],E=0;E<i.length;E++)x.push(Qe(i[E],N,n,r,s.concat(w)));return fr(x)}}if(a==="mathord")return Qe(i,"Math-Italic",n,r,s.concat(["mathnormal"]));if(a==="textord"){var R=fe[n][i]&&fe[n][i].font;if(R==="ams"){var A=zi("amsrm",d,h);return Qe(i,A,n,r,s.concat("amsrm",d,h))}else if(R==="main"||!R){var I=zi("textrm",d,h);return Qe(i,I,n,r,s.concat(d,h))}else{var F=zi(R,d,h);return Qe(i,F,n,r,s.concat(F,d,h))}}else throw new Error("unexpected type: "+a+" in makeOrd")},I5=(e,t)=>{if(jr(e.classes)!==jr(t.classes)||e.skew!==t.skew||e.maxFontSize!==t.maxFontSize||e.italic!==0&&e.hasClass("mathnormal"))return!1;if(e.classes.length===1){var r=e.classes[0];if(r==="mbin"||r==="mord")return!1}for(var a of Object.keys(e.style))if(e.style[a]!==t.style[a])return!1;for(var n of Object.keys(t.style))if(e.style[n]!==t.style[n])return!1;return!0},sf=e=>{for(var t=0;t<e.length-1;t++){var r=e[t],a=e[t+1];r instanceof gt&&a instanceof gt&&I5(r,a)&&(r.text+=a.text,r.height=Math.max(r.height,a.height),r.depth=Math.max(r.depth,a.depth),r.italic=a.italic,e.splice(t+1,1),t--)}return e},Iu=function(t){for(var r=0,a=0,n=0,i=0;i<t.children.length;i++){var s=t.children[i];s.height>r&&(r=s.height),s.depth>a&&(a=s.depth),s.maxFontSize>n&&(n=s.maxFontSize)}t.height=r,t.depth=a,t.maxFontSize=n},O=function(t,r,a,n){var i=new sn(t,r,a,n);return Iu(i),i},Gr=(e,t,r,a)=>new sn(e,t,r,a),Ka=function(t,r,a){var n=O([t],[],r);return n.height=Math.max(a||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),n.style.borderBottomWidth=$(n.height),n.maxFontSize=1,n},F5=function(t,r,a,n){var i=new to(t,r,a,n);return Iu(i),i},fr=function(t){var r=new nn(t);return Iu(r),r},Ya=function(t,r){return t instanceof nn?O([],[t],r):t},L5=function(t){if(t.positionType==="individualShift"){for(var r=t.children,a=[r[0]],n=-r[0].shift-r[0].elem.depth,i=n,s=1;s<r.length;s++){var o=-r[s].shift-i-r[s].elem.depth,l=o-(r[s-1].elem.height+r[s-1].elem.depth);i=i+o,a.push({type:"kern",size:l}),a.push(r[s])}return{children:a,depth:n}}var d;if(t.positionType==="top"){for(var h=t.positionData,m=0;m<t.children.length;m++){var g=t.children[m];h-=g.type==="kern"?g.size:g.elem.height+g.elem.depth}d=h}else if(t.positionType==="bottom")d=-t.positionData;else{var b=t.children[0];if(b.type!=="elem")throw new Error('First child must have type "elem".');if(t.positionType==="shift")d=-b.elem.depth-t.positionData;else if(t.positionType==="firstBaseline")d=-b.elem.depth;else throw new Error("Invalid positionType "+t.positionType+".")}return{children:t.children,depth:d}},se=function(t,r){for(var{children:a,depth:n}=L5(t),i=0,s=0;s<a.length;s++){var o=a[s];if(o.type==="elem"){var l=o.elem;i=Math.max(i,l.maxFontSize,l.height)}}i+=2;var d=O(["pstrut"],[]);d.style.height=$(i);for(var h=[],m=n,g=n,b=n,_=0;_<a.length;_++){var T=a[_];if(T.type==="kern")b+=T.size;else{var N=T.elem,w=T.wrapperClasses||[],v=T.wrapperStyle||{},x=O(w,[d,N],void 0,v);x.style.top=$(-i-b-N.depth),T.marginLeft&&(x.style.marginLeft=T.marginLeft),T.marginRight&&(x.style.marginRight=T.marginRight),h.push(x),b+=N.height+N.depth}m=Math.min(m,b),g=Math.max(g,b)}var E=O(["vlist"],h);E.style.height=$(g);var R;if(m<0){var A=O([],[]),I=O(["vlist"],[A]);I.style.height=$(-m);var F=O(["vlist-s"],[new gt("​")]);R=[O(["vlist-r"],[E,F]),O(["vlist-r"],[I])]}else R=[O(["vlist-r"],[E])];var U=O(["vlist-t"],R);return R.length===2&&U.classes.push("vlist-t2"),U.height=g,U.depth=-m,U},of=(e,t)=>{var r=O(["mspace"],[],t),a=we(e,t);return r.style.marginRight=$(a),r},zi=(e,t,r)=>{var a,n;switch(e){case"amsrm":a="AMS";break;case"textrm":a="Main";break;case"textsf":a="SansSerif";break;case"texttt":a="Typewriter";break;default:a=e}return t==="textbf"&&r==="textit"?n="BoldItalic":t==="textbf"?n="Bold":r==="textit"?n="Italic":n="Regular",a+"-"+n},f0={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},lf={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},uf=function(t,r){var[a,n,i]=lf[t],s=new Ur(a),o=new cr([s],{width:$(n),height:$(i),style:"width:"+$(n),viewBox:"0 0 "+1e3*n+" "+1e3*i,preserveAspectRatio:"xMinYMin"}),l=Gr(["overlay"],[o],r);return l.height=i,l.style.height=$(i),l.style.width=$(n),l},ye={number:3,unit:"mu"},Qr={number:4,unit:"mu"},Qt={number:5,unit:"mu"},O5={mord:{mop:ye,mbin:Qr,mrel:Qt,minner:ye},mop:{mord:ye,mop:ye,mrel:Qt,minner:ye},mbin:{mord:Qr,mop:Qr,mopen:Qr,minner:Qr},mrel:{mord:Qt,mop:Qt,mopen:Qt,minner:Qt},mopen:{},mclose:{mop:ye,mbin:Qr,mrel:Qt,minner:ye},mpunct:{mord:ye,mop:ye,mrel:Qt,mopen:ye,mclose:ye,mpunct:ye,minner:ye},minner:{mord:ye,mop:ye,mbin:Qr,mrel:Qt,mopen:ye,mpunct:ye,minner:ye}},P5={mord:{mop:ye},mop:{mord:ye,mop:ye},mbin:{},mrel:{},mopen:{},mclose:{mop:ye},mpunct:{},minner:{mop:ye}},cf={},As={},Is={};function G(e){for(var{type:t,names:r,props:a,handler:n,htmlBuilder:i,mathmlBuilder:s}=e,o={type:t,numArgs:a.numArgs,argTypes:a.argTypes,allowedInArgument:!!a.allowedInArgument,allowedInText:!!a.allowedInText,allowedInMath:a.allowedInMath===void 0?!0:a.allowedInMath,numOptionalArgs:a.numOptionalArgs||0,infix:!!a.infix,primitive:!!a.primitive,handler:n},l=0;l<r.length;++l)cf[r[l]]=o;t&&(i&&(As[t]=i),s&&(Is[t]=s))}function fa(e){var{type:t,htmlBuilder:r,mathmlBuilder:a}=e;G({type:t,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:a})}var Fs=function(t){return t.type==="ordgroup"&&t.body.length===1?t.body[0]:t},Ne=function(t){return t.type==="ordgroup"?t.body:[t]},z5=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),D5=new Set(["rightmost","mrel","mclose","mpunct"]),B5={display:Z.DISPLAY,text:Z.TEXT,script:Z.SCRIPT,scriptscript:Z.SCRIPTSCRIPT},$5={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},Pe=function(t,r,a,n){n===void 0&&(n=[null,null]);for(var i=[],s=0;s<t.length;s++){var o=oe(t[s],r);if(o instanceof nn){var l=o.children;i.push(...l)}else i.push(o)}if(sf(i),!a)return i;var d=r;if(t.length===1){var h=t[0];h.type==="sizing"?d=r.havingSize(h.size):h.type==="styling"&&(d=r.havingStyle(B5[h.style]))}var m=O([n[0]||"leftmost"],[],r),g=O([n[1]||"rightmost"],[],r),b=a==="root";return g0(i,(_,T)=>{var N=T.classes[0],w=_.classes[0];N==="mbin"&&D5.has(w)?T.classes[0]="mord":w==="mbin"&&z5.has(N)&&(_.classes[0]="mord")},{node:m},g,b),g0(i,(_,T)=>{var N,w,v=v0(T),x=v0(_),E=v&&x?_.hasClass("mtight")?(N=P5[v])==null?void 0:N[x]:(w=O5[v])==null?void 0:w[x]:null;if(E)return of(E,d)},{node:m},g,b),i},g0=function(t,r,a,n,i){n&&t.push(n);for(var s=0;s<t.length;s++){var o=t[s],l=df(o);if(l){g0(l.children,r,a,null,i);continue}var d=!o.hasClass("mspace");if(d){var h=r(o,a.node);h&&(a.insertAfter?a.insertAfter(h):(t.unshift(h),s++))}d?a.node=o:i&&o.hasClass("newline")&&(a.node=O(["leftmost"])),a.insertAfter=(m=>g=>{t.splice(m+1,0,g),s++})(s)}n&&t.pop()},df=function(t){return t instanceof nn||t instanceof to||t instanceof sn&&t.hasClass("enclosing")?t:null},y0=function(t,r){var a=df(t);if(a){var n=a.children;if(n.length){if(r==="right")return y0(n[n.length-1],"right");if(r==="left")return y0(n[0],"left")}}return t},v0=function(t,r){if(!t)return null;r&&(t=y0(t,r));var a=t.classes[0];return $5[a]||null},ti=function(t,r){var a=["nulldelimiter"].concat(t.baseSizingClasses());return O(r.concat(a))},oe=function(t,r,a){if(!t)return O();if(As[t.type]){var n=As[t.type](t,r);if(a&&r.size!==a.size){n=O(r.sizingClasses(a),[n],r);var i=r.sizeMultiplier/a.sizeMultiplier;n.height*=i,n.depth*=i}return n}else throw new z("Got group of unknown type: '"+t.type+"'")};function Di(e,t){var r=O(["base"],e,t),a=O(["strut"]);return a.style.height=$(r.height+r.depth),r.depth&&(a.style.verticalAlign=$(-r.depth)),r.children.unshift(a),r}function w0(e,t){var r=null;e.length===1&&e[0].type==="tag"&&(r=e[0].tag,e=e[0].body);var a=Pe(e,t,"root"),n;a.length===2&&a[1].hasClass("tag")&&(n=a.pop());for(var i=[],s=[],o=0;o<a.length;o++)if(s.push(a[o]),a[o].hasClass("mbin")||a[o].hasClass("mrel")||a[o].hasClass("allowbreak")){for(var l=!1;o<a.length-1&&a[o+1].hasClass("mspace")&&!a[o+1].hasClass("newline");)o++,s.push(a[o]),a[o].hasClass("nobreak")&&(l=!0);l||(i.push(Di(s,t)),s=[])}else a[o].hasClass("newline")&&(s.pop(),s.length>0&&(i.push(Di(s,t)),s=[]),i.push(a[o]));s.length>0&&i.push(Di(s,t));var d;r?(d=Di(Pe(r,t,!0),t),d.classes=["tag"],i.push(d)):n&&i.push(n);var h=O(["katex-html"],i);if(h.setAttribute("aria-hidden","true"),d){var m=d.children[0];m.style.height=$(h.height+h.depth),h.depth&&(m.style.verticalAlign=$(-h.depth))}return h}function mf(e){return new nn(e)}class D{constructor(t,r,a){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=t,this.attributes={},this.children=r||[],this.classes=a||[]}setAttribute(t,r){this.attributes[t]=r}getAttribute(t){return this.attributes[t]}toNode(){var t=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&t.setAttribute(r,this.attributes[r]);this.classes.length>0&&(t.className=jr(this.classes));for(var a=0;a<this.children.length;a++)if(this.children[a]instanceof Re&&this.children[a+1]instanceof Re){for(var n=this.children[a].toText()+this.children[++a].toText();this.children[a+1]instanceof Re;)n+=this.children[++a].toText();t.appendChild(new Re(n).toNode())}else t.appendChild(this.children[a].toNode());return t}toMarkup(){var t="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="',t+=Ve(this.attributes[r]),t+='"');this.classes.length>0&&(t+=' class ="'+Ve(jr(this.classes))+'"'),t+=">";for(var a=0;a<this.children.length;a++)t+=this.children[a].toMarkup();return t+="</"+this.type+">",t}toText(){return this.children.map(t=>t.toText()).join("")}}class Re{constructor(t){this.text=void 0,this.text=t}toNode(){return document.createTextNode(this.text)}toMarkup(){return Ve(this.toText())}toText(){return this.text}}class hf{constructor(t){this.width=void 0,this.character=void 0,this.width=t,t>=.05555&&t<=.05556?this.character=" ":t>=.1666&&t<=.1667?this.character=" ":t>=.2222&&t<=.2223?this.character=" ":t>=.2777&&t<=.2778?this.character="  ":t>=-.05556&&t<=-.05555?this.character=" ⁣":t>=-.1667&&t<=-.1666?this.character=" ⁣":t>=-.2223&&t<=-.2222?this.character=" ⁣":t>=-.2778&&t<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var t=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return t.setAttribute("width",$(this.width)),t}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+$(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var j5=new Set(["\\imath","\\jmath"]),U5=new Set(["mrow","mtable"]),Nt=function(t,r,a){return fe[r][t]&&fe[r][t].replace&&t.charCodeAt(0)!==55349&&!(nf.hasOwnProperty(t)&&a&&(a.fontFamily&&a.fontFamily.slice(4,6)==="tt"||a.font&&a.font.slice(4,6)==="tt"))&&(t=fe[r][t].replace),new Re(t)},Fu=function(t){return t.length===1?t[0]:new D("mrow",t)},G5={mathit:"italic",boldsymbol:e=>e.type==="textord"?"bold":"bold-italic",mathbf:"bold",mathbb:"double-struck",mathsfit:"sans-serif-italic",mathfrak:"fraktur",mathscr:"script",mathcal:"script",mathsf:"sans-serif",mathtt:"monospace"},Lu=(e,t)=>{if(e.mode==="text"){if(t.fontFamily==="texttt")return"monospace";if(t.fontFamily==="textsf")return t.fontShape==="textit"&&t.fontWeight==="textbf"?"sans-serif-bold-italic":t.fontShape==="textit"?"sans-serif-italic":t.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(t.fontShape==="textit"&&t.fontWeight==="textbf")return"bold-italic";if(t.fontShape==="textit")return"italic";if(t.fontWeight==="textbf")return"bold"}var r=t.font;if(!r||r==="mathnormal")return null;var a=e.mode,n=G5[r];if(n)return typeof n=="function"?n(e):n;var i=e.text;if(j5.has(i))return null;if(fe[a][i]){var s=fe[a][i].replace;s&&(i=s)}var o=f0[r].fontName;return Mu(i,o,a)?f0[r].variant:null};function Qo(e){if(!e)return!1;if(e.type==="mi"&&e.children.length===1){var t=e.children[0];return t instanceof Re&&t.text==="."}else if(e.type==="mo"&&e.children.length===1&&e.getAttribute("separator")==="true"&&e.getAttribute("lspace")==="0em"&&e.getAttribute("rspace")==="0em"){var r=e.children[0];return r instanceof Re&&r.text===","}else return!1}var bt=function(t,r,a){if(t.length===1){var n=ce(t[0],r);return a&&n instanceof D&&n.type==="mo"&&(n.setAttribute("lspace","0em"),n.setAttribute("rspace","0em")),[n]}for(var i=[],s,o=0;o<t.length;o++){var l=ce(t[o],r);if(l instanceof D&&s instanceof D){if(l.type==="mtext"&&s.type==="mtext"&&l.getAttribute("mathvariant")===s.getAttribute("mathvariant")){s.children.push(...l.children);continue}else if(l.type==="mn"&&s.type==="mn"){s.children.push(...l.children);continue}else if(Qo(l)&&s.type==="mn"){s.children.push(...l.children);continue}else if(l.type==="mn"&&Qo(s))l.children=[...s.children,...l.children],i.pop();else if((l.type==="msup"||l.type==="msub")&&l.children.length>=1&&(s.type==="mn"||Qo(s))){var d=l.children[0];d instanceof D&&d.type==="mn"&&(d.children=[...s.children,...d.children],i.pop())}else if(s.type==="mi"&&s.children.length===1){var h=s.children[0];if(h instanceof Re&&h.text==="̸"&&(l.type==="mo"||l.type==="mi"||l.type==="mn")){var m=l.children[0];m instanceof Re&&m.text.length>0&&(m.text=m.text.slice(0,1)+"̸"+m.text.slice(1),i.pop())}}}i.push(l),s=l}return i},Hr=function(t,r,a){return Fu(bt(t,r,a))},ce=function(t,r){if(!t)return new D("mrow");if(Is[t.type])return Is[t.type](t,r);throw new z("Got group of unknown type: '"+t.type+"'")};function zd(e,t,r,a,n){var i=bt(e,r),s;i.length===1&&i[0]instanceof D&&U5.has(i[0].type)?s=i[0]:s=new D("mrow",i);var o=new D("annotation",[new Re(t)]);o.setAttribute("encoding","application/x-tex");var l=new D("semantics",[s,o]),d=new D("math",[l]);d.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),a&&d.setAttribute("display","block");var h=n?"katex":"katex-mathml";return O([h],[d])}var H5=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Dd=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Bd=function(t,r){return r.size<2?t:H5[t-1][r.size-1]};class tr{constructor(t){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=t.style,this.color=t.color,this.size=t.size||tr.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||"",this.fontFamily=t.fontFamily||"",this.fontWeight=t.fontWeight||"",this.fontShape=t.fontShape||"",this.sizeMultiplier=Dd[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this._fontMetrics=void 0}extend(t){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};return Object.assign(r,t),new tr(r)}havingStyle(t){return this.style===t?this:this.extend({style:t,size:Bd(this.textSize,t)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(t){return this.size===t&&this.textSize===t?this:this.extend({style:this.style.text(),size:t,textSize:t,sizeMultiplier:Dd[t-1]})}havingBaseStyle(t){t=t||this.style.text();var r=Bd(tr.BASESIZE,t);return this.size===r&&this.textSize===tr.BASESIZE&&this.style===t?this:this.extend({style:t,size:r})}havingBaseSizing(){var t;switch(this.style.id){case 4:case 5:t=3;break;case 6:case 7:t=1;break;default:t=6}return this.extend({style:this.style.text(),size:t})}withColor(t){return this.extend({color:t})}withPhantom(){return this.extend({phantom:!0})}withFont(t){return this.extend({font:t})}withTextFontFamily(t){return this.extend({fontFamily:t,font:""})}withTextFontWeight(t){return this.extend({fontWeight:t,font:""})}withTextFontShape(t){return this.extend({fontShape:t,font:""})}sizingClasses(t){return t.size!==this.size?["sizing","reset-size"+t.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==tr.BASESIZE?["sizing","reset-size"+this.size,"size"+tr.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=E5(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}tr.BASESIZE=6;var pf=function(t){return new tr({style:t.displayMode?Z.DISPLAY:Z.TEXT,maxSize:t.maxSize,minRuleThickness:t.minRuleThickness})},ff=function(t,r){if(r.displayMode){var a=["katex-display"];r.leqno&&a.push("leqno"),r.fleqn&&a.push("fleqn"),t=O(a,[t])}return t},q5=function(t,r,a){var n=pf(a),i;if(a.output==="mathml")return zd(t,r,n,a.displayMode,!0);if(a.output==="html"){var s=w0(t,n);i=O(["katex"],[s])}else{var o=zd(t,r,n,a.displayMode,!1),l=w0(t,n);i=O(["katex"],[o,l])}return ff(i,a)},W5=function(t,r,a){var n=pf(a),i=w0(t,n),s=O(["katex"],[i]);return ff(s,a)},V5={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",underbracket:"⎵",overbracket:"⎴",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},no=function(t){var r=new D("mo",[new Re(V5[t.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},X5={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overbracket:[["leftbracketover","rightbracketover"],1.6,440],underbracket:[["leftbracketunder","rightbracketunder"],1.6,410],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},K5=new Set(["widehat","widecheck","widetilde","utilde"]),io=function(t,r){function a(){var o=4e5,l=t.label.slice(1);if(K5.has(l)&&"base"in t){var d=t.base.type==="ordgroup"?t.base.body.length:1,h,m,g;if(d>5)l==="widehat"||l==="widecheck"?(h=420,o=2364,g=.42,m=l+"4"):(h=312,o=2340,g=.34,m="tilde4");else{var b=[1,1,2,2,3,3][d];l==="widehat"||l==="widecheck"?(o=[0,1062,2364,2364,2364][b],h=[0,239,300,360,420][b],g=[0,.24,.3,.3,.36,.42][b],m=l+b):(o=[0,600,1033,2339,2340][b],h=[0,260,286,306,312][b],g=[0,.26,.286,.3,.306,.34][b],m="tilde"+b)}var _=new Ur(m),T=new cr([_],{width:"100%",height:$(g),viewBox:"0 0 "+o+" "+h,preserveAspectRatio:"none"});return{span:Gr([],[T],r),minWidth:0,height:g}}else{var N=[],w=X5[l];if(!w)throw new Error('No SVG data for "'+l+'".');var[v,x,E]=w,R=E/1e3,A=v.length,I,F;if(A===1){if(w.length!==4)throw new Error('Expected 4-tuple for single-path SVG data "'+l+'".');I=["hide-tail"],F=[w[3]]}else if(A===2)I=["halfarrow-left","halfarrow-right"],F=["xMinYMin","xMaxYMin"];else if(A===3)I=["brace-left","brace-center","brace-right"],F=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+A+" children.");for(var U=0;U<A;U++){var B=new Ur(v[U]),te=new cr([B],{width:"400em",height:$(R),viewBox:"0 0 "+o+" "+E,preserveAspectRatio:F[U]+" slice"}),ne=Gr([I[U]],[te],r);if(A===1)return{span:ne,minWidth:x,height:R};ne.style.height=$(R),N.push(ne)}return{span:O(["stretchy"],N,r),minWidth:x,height:R}}}var{span:n,minWidth:i,height:s}=a();return n.height=s,n.style.height=$(s),i>0&&(n.style.minWidth=$(i)),n},Y5=function(t,r,a,n,i){var s,o=t.height+t.depth+a+n;if(/fbox|color|angl/.test(r)){if(s=O(["stretchy",r],[],i),r==="fbox"){var l=i.color&&i.getColor();l&&(s.style.borderColor=l)}}else{var d=[];/^[bx]cancel$/.test(r)&&d.push(new u0({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&d.push(new u0({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var h=new cr(d,{width:"100%",height:$(o)});s=Gr([],[h],i)}return s.height=o,s.style.height=$(o),s},Q5={bin:1,close:1,inner:1,open:1,punct:1,rel:1},J5={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1};function Z5(e){return e in Q5}function ee(e,t){if(!e||e.type!==t)throw new Error("Expected node of type "+t+", but got "+(e?"node of type "+e.type:String(e)));return e}function so(e){var t=oo(e);if(!t)throw new Error("Expected node of symbol group type, but got "+(e?"node of type "+e.type:String(e)));return t}function oo(e){return e&&(e.type==="atom"||J5.hasOwnProperty(e.type))?e:null}var gf=e=>{if(e instanceof gt)return e;if(_5(e)&&e.children.length===1)return gf(e.children[0])},Ou=(e,t)=>{var r,a,n;e&&e.type==="supsub"?(a=ee(e.base,"accent"),r=a.base,e.base=r,n=T5(oe(e,t)),e.base=a):(a=ee(e,"accent"),r=a.base);var i=oe(r,t.havingCrampedStyle()),s=a.isShifty&&hr(r),o=0;if(s){var l,d;o=(l=(d=gf(i))==null?void 0:d.skew)!=null?l:0}var h=a.label==="\\c",m=h?i.height+i.depth:Math.min(i.height,t.fontMetrics().xHeight),g;if(a.isStretchy)g=io(a,t),g=se({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"elem",elem:g,wrapperClasses:["svg-align"],wrapperStyle:o>0?{width:"calc(100% - "+$(2*o)+")",marginLeft:$(2*o)}:void 0}]});else{var b,_;a.label==="\\vec"?(b=uf("vec",t),_=lf.vec[1]):(b=ao({mode:a.mode,text:a.label},t,"textord"),b=k5(b),b.italic=0,_=b.width,h&&(m+=b.depth)),g=O(["accent-body"],[b]);var T=a.label==="\\textcircled";T&&(g.classes.push("accent-full"),m=i.height);var N=o;T||(N-=_/2),g.style.left=$(N),a.label==="\\textcircled"&&(g.style.top=".2em"),g=se({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"kern",size:-m},{type:"elem",elem:g}]})}var w=O(["mord","accent"],[g],t);return n?(n.children[0]=w,n.height=Math.max(w.height,n.height),n.classes[0]="mord",n):w},yf=(e,t)=>{var r=e.isStretchy?no(e.label):new D("mo",[Nt(e.label,e.mode)]),a=new D("mover",[ce(e.base,t),r]);return a.setAttribute("accent","true"),a},e3=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(e=>"\\"+e).join("|"));G({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(e,t)=>{var r=Fs(t[0]),a=!e3.test(e.funcName),n=!a||e.funcName==="\\widehat"||e.funcName==="\\widetilde"||e.funcName==="\\widecheck";return{type:"accent",mode:e.parser.mode,label:e.funcName,isStretchy:a,isShifty:n,base:r}},htmlBuilder:Ou,mathmlBuilder:yf});G({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(e,t)=>{var r=t[0],a=e.parser.mode;return a==="math"&&(e.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+e.funcName+" works only in text mode"),a="text"),{type:"accent",mode:a,label:e.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:Ou,mathmlBuilder:yf});G({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(e,t)=>{var{parser:r,funcName:a}=e,n=t[0];return{type:"accentUnder",mode:r.mode,label:a,base:n}},htmlBuilder:(e,t)=>{var r=oe(e.base,t),a=io(e,t),n=e.label==="\\utilde"?.12:0,i=se({positionType:"top",positionData:r.height,children:[{type:"elem",elem:a,wrapperClasses:["svg-align"]},{type:"kern",size:n},{type:"elem",elem:r}]});return O(["mord","accentunder"],[i],t)},mathmlBuilder:(e,t)=>{var r=no(e.label),a=new D("munder",[ce(e.base,t),r]);return a.setAttribute("accentunder","true"),a}});var Bi=e=>{var t=new D("mpadded",e?[e]:[]);return t.setAttribute("width","+0.6em"),t.setAttribute("lspace","0.3em"),t};G({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(e,t,r){var{parser:a,funcName:n}=e;return{type:"xArrow",mode:a.mode,label:n,body:t[0],below:r[0]}},htmlBuilder(e,t){var r=t.style,a=t.havingStyle(r.sup()),n=Ya(oe(e.body,a,t),t),i=e.label.slice(0,2)==="\\x"?"x":"cd";n.classes.push(i+"-arrow-pad");var s;e.below&&(a=t.havingStyle(r.sub()),s=Ya(oe(e.below,a,t),t),s.classes.push(i+"-arrow-pad"));var o=io(e,t),l=-t.fontMetrics().axisHeight+.5*o.height,d=-t.fontMetrics().axisHeight-.5*o.height-.111;(n.depth>.25||e.label==="\\xleftequilibrium")&&(d-=n.depth);var h;if(s){var m=-t.fontMetrics().axisHeight+s.height+.5*o.height+.111;h=se({positionType:"individualShift",children:[{type:"elem",elem:n,shift:d},{type:"elem",elem:o,shift:l,wrapperClasses:["svg-align"]},{type:"elem",elem:s,shift:m}]})}else h=se({positionType:"individualShift",children:[{type:"elem",elem:n,shift:d},{type:"elem",elem:o,shift:l,wrapperClasses:["svg-align"]}]});return O(["mrel","x-arrow"],[h],t)},mathmlBuilder(e,t){var r=no(e.label);r.setAttribute("minsize",e.label.charAt(0)==="x"?"1.75em":"3.0em");var a;if(e.body){var n=Bi(ce(e.body,t));if(e.below){var i=Bi(ce(e.below,t));a=new D("munderover",[r,i,n])}else a=new D("mover",[r,n])}else if(e.below){var s=Bi(ce(e.below,t));a=new D("munder",[r,s])}else a=Bi(),a=new D("mover",[r,a]);return a}});function vf(e,t){var r=Pe(e.body,t,!0);return O([e.mclass],r,t)}function wf(e,t){var r,a=bt(e.body,t);return e.mclass==="minner"?r=new D("mpadded",a):e.mclass==="mord"?e.isCharacterBox?(r=a[0],r.type="mi"):r=new D("mi",a):(e.isCharacterBox?(r=a[0],r.type="mo"):r=new D("mo",a),e.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):e.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):e.mclass==="mopen"||e.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):e.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}G({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(e,t){var{parser:r,funcName:a}=e,n=t[0];return{type:"mclass",mode:r.mode,mclass:"m"+a.slice(5),body:Ne(n),isCharacterBox:hr(n)}},htmlBuilder:vf,mathmlBuilder:wf});var lo=e=>{var t=e.type==="ordgroup"&&e.body.length?e.body[0]:e;return t.type==="atom"&&(t.family==="bin"||t.family==="rel")?"m"+t.family:"mord"};G({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(e,t){var{parser:r}=e;return{type:"mclass",mode:r.mode,mclass:lo(t[0]),body:Ne(t[1]),isCharacterBox:hr(t[1])}}});G({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(e,t){var{parser:r,funcName:a}=e,n=t[1],i=t[0],s;a!=="\\stackrel"?s=lo(n):s="mrel";var o={type:"op",mode:n.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:a!=="\\stackrel",body:Ne(n)},l={type:"supsub",mode:i.mode,base:o,sup:a==="\\underset"?null:i,sub:a==="\\underset"?i:null};return{type:"mclass",mode:r.mode,mclass:s,body:[l],isCharacterBox:hr(l)}},htmlBuilder:vf,mathmlBuilder:wf});G({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:r}=e;return{type:"pmb",mode:r.mode,mclass:lo(t[0]),body:Ne(t[0])}},htmlBuilder(e,t){var r=Pe(e.body,t,!0),a=O([e.mclass],r,t);return a.style.textShadow="0.02em 0.01em 0.04px",a},mathmlBuilder(e,t){var r=bt(e.body,t),a=new D("mstyle",r);return a.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),a}});var t3={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},$d=()=>({type:"styling",body:[],mode:"math",style:"display",resetFont:!0}),jd=e=>e.type==="textord"&&e.text==="@",r3=(e,t)=>(e.type==="mathord"||e.type==="atom")&&e.text===t;function a3(e,t,r){var a=t3[e];switch(a){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(a,[t[0]],[t[1]]);case"\\uparrow":case"\\downarrow":{var n=r.callFunction("\\\\cdleft",[t[0]],[]),i={type:"atom",text:a,mode:"math",family:"rel"},s=r.callFunction("\\Big",[i],[]),o=r.callFunction("\\\\cdright",[t[1]],[]),l={type:"ordgroup",mode:"math",body:[n,s,o]};return r.callFunction("\\\\cdparent",[l],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var d={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[d],[])}default:return{type:"textord",text:" ",mode:"math"}}}function n3(e){var t=[];for(e.gullet.beginGroup(),e.gullet.macros.set("\\cr","\\\\\\relax"),e.gullet.beginGroup();;){t.push(e.parseExpression(!1,"\\\\")),e.gullet.endGroup(),e.gullet.beginGroup();var r=e.fetch().text;if(r==="&"||r==="\\\\")e.consume();else if(r==="\\end"){t[t.length-1].length===0&&t.pop();break}else throw new z("Expected \\\\ or \\cr or \\end",e.nextToken)}for(var a=[],n=[a],i=0;i<t.length;i++){for(var s=t[i],o=$d(),l=0;l<s.length;l++)if(!jd(s[l]))o.body.push(s[l]);else{a.push(o),l+=1;var d=so(s[l]).text,h=new Array(2);if(h[0]={type:"ordgroup",mode:"math",body:[]},h[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(d))if("<>AV".includes(d))for(var m=0;m<2;m++){for(var g=!0,b=l+1;b<s.length;b++){if(r3(s[b],d)){g=!1,l=b;break}if(jd(s[b]))throw new z("Missing a "+d+" character to complete a CD arrow.",s[b]);h[m].body.push(s[b])}if(g)throw new z("Missing a "+d+" character to complete a CD arrow.",s[l])}else throw new z('Expected one of "<>AV=|." after @',s[l]);var _=a3(d,h,e),T={type:"styling",body:[_],mode:"math",style:"display",resetFont:!0};a.push(T),o=$d()}i%2===0?a.push(o):a.shift(),a=[],n.push(a)}e.gullet.endGroup(),e.gullet.endGroup();var N=new Array(n[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:n,arraystretch:1,addJot:!0,rowGaps:[null],cols:N,colSeparationType:"CD",hLinesBeforeRow:new Array(n.length+1).fill([])}}G({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(e,t){var{parser:r,funcName:a}=e;return{type:"cdlabel",mode:r.mode,side:a.slice(4),label:t[0]}},htmlBuilder(e,t){var r=t.havingStyle(t.style.sup()),a=Ya(oe(e.label,r,t),t);return a.classes.push("cd-label-"+e.side),a.style.bottom=$(.8-a.depth),a.height=0,a.depth=0,a},mathmlBuilder(e,t){var r=new D("mrow",[ce(e.label,t)]);return r=new D("mpadded",[r]),r.setAttribute("width","0"),e.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new D("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});G({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(e,t){var{parser:r}=e;return{type:"cdlabelparent",mode:r.mode,fragment:t[0]}},htmlBuilder(e,t){var r=Ya(oe(e.fragment,t),t);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(e,t){return new D("mrow",[ce(e.fragment,t)])}});G({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(e,t){for(var{parser:r}=e,a=ee(t[0],"ordgroup"),n=a.body,i="",s=0;s<n.length;s++){var o=ee(n[s],"textord");i+=o.text}var l=parseInt(i),d;if(isNaN(l))throw new z("\\@char has non-numeric argument "+i);if(l<0||l>=1114111)throw new z("\\@char with invalid code point "+i);return l<=65535?d=String.fromCharCode(l):(l-=65536,d=String.fromCharCode((l>>10)+55296,(l&1023)+56320)),{type:"textord",mode:r.mode,text:d}}});var bf=(e,t)=>{var r=Pe(e.body,t.withColor(e.color),!1);return fr(r)},xf=(e,t)=>{var r=bt(e.body,t.withColor(e.color)),a=new D("mstyle",r);return a.setAttribute("mathcolor",e.color),a};G({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(e,t){var{parser:r}=e,a=ee(t[0],"color-token").color,n=t[1];return{type:"color",mode:r.mode,color:a,body:Ne(n)}},htmlBuilder:bf,mathmlBuilder:xf});G({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(e,t){var{parser:r,breakOnTokenText:a}=e,n=ee(t[0],"color-token").color;r.gullet.macros.set("\\current@color",n);var i=r.parseExpression(!0,a);return{type:"color",mode:r.mode,color:n,body:i}},htmlBuilder:bf,mathmlBuilder:xf});G({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(e,t,r){var{parser:a}=e,n=a.gullet.future().text==="["?a.parseSizeGroup(!0):null,i=!a.settings.displayMode||!a.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:a.mode,newLine:i,size:n&&ee(n,"size").value}},htmlBuilder(e,t){var r=O(["mspace"],[],t);return e.newLine&&(r.classes.push("newline"),e.size&&(r.style.marginTop=$(we(e.size,t)))),r},mathmlBuilder(e,t){var r=new D("mspace");return e.newLine&&(r.setAttribute("linebreak","newline"),e.size&&r.setAttribute("height",$(we(e.size,t)))),r}});var b0={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},Sf=e=>{var t=e.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new z("Expected a control sequence",e);return t},i3=e=>{var t=e.gullet.popToken();return t.text==="="&&(t=e.gullet.popToken(),t.text===" "&&(t=e.gullet.popToken())),t},kf=(e,t,r,a)=>{var n=e.gullet.macros.get(r.text);n==null&&(r.noexpand=!0,n={tokens:[r],numArgs:0,unexpandable:!e.gullet.isExpandable(r.text)}),e.gullet.macros.set(t,n,a)};G({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(e){var{parser:t,funcName:r}=e;t.consumeSpaces();var a=t.fetch();if(b0[a.text])return(r==="\\global"||r==="\\\\globallong")&&(a.text=b0[a.text]),ee(t.parseFunction(),"internal");throw new z("Invalid token after macro prefix",a)}});G({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:r}=e,a=t.gullet.popToken(),n=a.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(n))throw new z("Expected a control sequence",a);for(var i=0,s,o=[[]];t.gullet.future().text!=="{";)if(a=t.gullet.popToken(),a.text==="#"){if(t.gullet.future().text==="{"){s=t.gullet.future(),o[i].push("{");break}if(a=t.gullet.popToken(),!/^[1-9]$/.test(a.text))throw new z('Invalid argument number "'+a.text+'"');if(parseInt(a.text)!==i+1)throw new z('Argument number "'+a.text+'" out of order');i++,o.push([])}else{if(a.text==="EOF")throw new z("Expected a macro definition");o[i].push(a.text)}var{tokens:l}=t.gullet.consumeArg();return s&&l.unshift(s),(r==="\\edef"||r==="\\xdef")&&(l=t.gullet.expandTokens(l),l.reverse()),t.gullet.macros.set(n,{tokens:l,numArgs:i,delimiters:o},r===b0[r]),{type:"internal",mode:t.mode}}});G({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:r}=e,a=Sf(t.gullet.popToken());t.gullet.consumeSpaces();var n=i3(t);return kf(t,a,n,r==="\\\\globallet"),{type:"internal",mode:t.mode}}});G({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:r}=e,a=Sf(t.gullet.popToken()),n=t.gullet.popToken(),i=t.gullet.popToken();return kf(t,a,i,r==="\\\\globalfuture"),t.gullet.pushToken(i),t.gullet.pushToken(n),{type:"internal",mode:t.mode}}});var Sn=function(t,r,a){var n=fe.math[t]&&fe.math[t].replace,i=Mu(n||t,r,a);if(!i)throw new Error("Unsupported symbol "+t+" and font size "+r+".");return i},Pu=function(t,r,a,n){var i=a.havingBaseStyle(r),s=O(n.concat(i.sizingClasses(a)),[t],a),o=i.sizeMultiplier/a.sizeMultiplier;return s.height*=o,s.depth*=o,s.maxFontSize=i.sizeMultiplier,s},Tf=function(t,r,a){var n=r.havingBaseStyle(a),i=(1-r.sizeMultiplier/n.sizeMultiplier)*r.fontMetrics().axisHeight;t.classes.push("delimcenter"),t.style.top=$(i),t.height-=i,t.depth+=i},s3=function(t,r,a,n,i,s){var o=Qe(t,"Main-Regular",i,n),l=Pu(o,r,n,s);return Tf(l,n,r),l},o3=function(t,r,a,n){return Qe(t,"Size"+r+"-Regular",a,n)},_f=function(t,r,a,n,i,s){var o=o3(t,r,i,n),l=Pu(O(["delimsizing","size"+r],[o],n),Z.TEXT,n,s);return a&&Tf(l,n,Z.TEXT),l},Jo=function(t,r,a){var n;r==="Size1-Regular"?n="delim-size1":n="delim-size4";var i=O(["delimsizinginner",n],[O([],[Qe(t,r,a)])]);return{type:"elem",elem:i}},Zo=function(t,r,a){var n=Ut["Size4-Regular"][t.charCodeAt(0)]?Ut["Size4-Regular"][t.charCodeAt(0)][4]:Ut["Size1-Regular"][t.charCodeAt(0)][4],i=new Ur("inner",g5(t,Math.round(1e3*r))),s=new cr([i],{width:$(n),height:$(r),style:"width:"+$(n),viewBox:"0 0 "+1e3*n+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),o=Gr([],[s],a);return o.height=r,o.style.height=$(r),o.style.width=$(n),{type:"elem",elem:o}},x0=.008,$i={type:"kern",size:-1*x0},l3=new Set(["|","\\lvert","\\rvert","\\vert"]),u3=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),Cf=function(t,r,a,n,i,s){var o,l,d,h,m="",g=0;o=d=h=t,l=null;var b="Size1-Regular";t==="\\uparrow"?d=h="⏐":t==="\\Uparrow"?d=h="‖":t==="\\downarrow"?o=d="⏐":t==="\\Downarrow"?o=d="‖":t==="\\updownarrow"?(o="\\uparrow",d="⏐",h="\\downarrow"):t==="\\Updownarrow"?(o="\\Uparrow",d="‖",h="\\Downarrow"):l3.has(t)?(d="∣",m="vert",g=333):u3.has(t)?(d="∥",m="doublevert",g=556):t==="["||t==="\\lbrack"?(o="⎡",d="⎢",h="⎣",b="Size4-Regular",m="lbrack",g=667):t==="]"||t==="\\rbrack"?(o="⎤",d="⎥",h="⎦",b="Size4-Regular",m="rbrack",g=667):t==="\\lfloor"||t==="⌊"?(d=o="⎢",h="⎣",b="Size4-Regular",m="lfloor",g=667):t==="\\lceil"||t==="⌈"?(o="⎡",d=h="⎢",b="Size4-Regular",m="lceil",g=667):t==="\\rfloor"||t==="⌋"?(d=o="⎥",h="⎦",b="Size4-Regular",m="rfloor",g=667):t==="\\rceil"||t==="⌉"?(o="⎤",d=h="⎥",b="Size4-Regular",m="rceil",g=667):t==="("||t==="\\lparen"?(o="⎛",d="⎜",h="⎝",b="Size4-Regular",m="lparen",g=875):t===")"||t==="\\rparen"?(o="⎞",d="⎟",h="⎠",b="Size4-Regular",m="rparen",g=875):t==="\\{"||t==="\\lbrace"?(o="⎧",l="⎨",h="⎩",d="⎪",b="Size4-Regular"):t==="\\}"||t==="\\rbrace"?(o="⎫",l="⎬",h="⎭",d="⎪",b="Size4-Regular"):t==="\\lgroup"||t==="⟮"?(o="⎧",h="⎩",d="⎪",b="Size4-Regular"):t==="\\rgroup"||t==="⟯"?(o="⎫",h="⎭",d="⎪",b="Size4-Regular"):t==="\\lmoustache"||t==="⎰"?(o="⎧",h="⎭",d="⎪",b="Size4-Regular"):(t==="\\rmoustache"||t==="⎱")&&(o="⎫",h="⎩",d="⎪",b="Size4-Regular");var _=Sn(o,b,i),T=_.height+_.depth,N=Sn(d,b,i),w=N.height+N.depth,v=Sn(h,b,i),x=v.height+v.depth,E=0,R=1;if(l!==null){var A=Sn(l,b,i);E=A.height+A.depth,R=2}var I=T+x+E,F=Math.max(0,Math.ceil((r-I)/(R*w))),U=I+F*R*w,B=n.fontMetrics().axisHeight;a&&(B*=n.sizeMultiplier);var te=U/2-B,ne=[];if(m.length>0){var Ge=U-T-x,Ae=Math.round(U*1e3),V=y5(m,Math.round(Ge*1e3)),re=new Ur(m,V),Ie=$(g/1e3),j=$(Ae/1e3),K=new cr([re],{width:Ie,height:j,viewBox:"0 0 "+g+" "+Ae}),Y=Gr([],[K],n);Y.height=Ae/1e3,Y.style.width=Ie,Y.style.height=j,ne.push({type:"elem",elem:Y})}else{if(ne.push(Jo(h,b,i)),ne.push($i),l===null){var W=U-T-x+2*x0;ne.push(Zo(d,W,n))}else{var Q=(U-T-x-E)/2+2*x0;ne.push(Zo(d,Q,n)),ne.push($i),ne.push(Jo(l,b,i)),ne.push($i),ne.push(Zo(d,Q,n))}ne.push($i),ne.push(Jo(o,b,i))}var le=n.havingBaseStyle(Z.TEXT),ze=se({positionType:"bottom",positionData:te,children:ne});return Pu(O(["delimsizing","mult"],[ze],le),Z.TEXT,n,s)},el=80,tl=.08,rl=function(t,r,a,n,i){var s=f5(t,n,a),o=new Ur(t,s),l=new cr([o],{width:"400em",height:$(r),viewBox:"0 0 400000 "+a,preserveAspectRatio:"xMinYMin slice"});return Gr(["hide-tail"],[l],i)},c3=function(t,r){var a=r.havingBaseSizing(),n=Af("\\surd",t*a.sizeMultiplier,Mf,a),i=a.sizeMultiplier,s=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),o,l,d,h,m;return n.type==="small"?(h=1e3+1e3*s+el,t<1?i=1:t<1.4&&(i=.7),l=(1+s+tl)/i,d=(1+s)/i,o=rl("sqrtMain",l,h,s,r),o.style.minWidth="0.853em",m=.833/i):n.type==="large"?(h=(1e3+el)*Fn[n.size],d=(Fn[n.size]+s)/i,l=(Fn[n.size]+s+tl)/i,o=rl("sqrtSize"+n.size,l,h,s,r),o.style.minWidth="1.02em",m=1/i):(l=t+s+tl,d=t+s,h=Math.floor(1e3*t+s)+el,o=rl("sqrtTall",l,h,s,r),o.style.minWidth="0.742em",m=1.056),o.height=d,o.style.height=$(l),{span:o,advanceWidth:m,ruleWidth:(r.fontMetrics().sqrtRuleThickness+s)*i}},Ef=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),d3=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),Nf=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),Fn=[0,1.2,1.8,2.4,3],Rf=function(t,r,a,n,i){if(t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle"),Ef.has(t)||Nf.has(t))return _f(t,r,!1,a,n,i);if(d3.has(t))return Cf(t,Fn[r],!1,a,n,i);throw new z("Illegal delimiter: '"+t+"'")},m3=[{type:"small",style:Z.SCRIPTSCRIPT},{type:"small",style:Z.SCRIPT},{type:"small",style:Z.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],h3=[{type:"small",style:Z.SCRIPTSCRIPT},{type:"small",style:Z.SCRIPT},{type:"small",style:Z.TEXT},{type:"stack"}],Mf=[{type:"small",style:Z.SCRIPTSCRIPT},{type:"small",style:Z.SCRIPT},{type:"small",style:Z.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],p3=function(t){if(t.type==="small")return"Main-Regular";if(t.type==="large")return"Size"+t.size+"-Regular";if(t.type==="stack")return"Size4-Regular";var r=t.type;throw new Error("Add support for delim type '"+r+"' here.")},Af=function(t,r,a,n){for(var i=Math.min(2,3-n.style.size),s=i;s<a.length;s++){var o=a[s];if(o.type==="stack")break;var l=Sn(t,p3(o),"math"),d=l.height+l.depth;if(o.type==="small"){var h=n.havingBaseStyle(o.style);d*=h.sizeMultiplier}if(d>r)return o}return a[a.length-1]},S0=function(t,r,a,n,i,s){t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle");var o;Nf.has(t)?o=m3:Ef.has(t)?o=Mf:o=h3;var l=Af(t,r,o,n);return l.type==="small"?s3(t,l.style,a,n,i,s):l.type==="large"?_f(t,l.size,a,n,i,s):Cf(t,r,a,n,i,s)},al=function(t,r,a,n,i,s){var o=n.fontMetrics().axisHeight*n.sizeMultiplier,l=901,d=5/n.fontMetrics().ptPerEm,h=Math.max(r-o,a+o),m=Math.max(h/500*l,2*h-d);return S0(t,m,!0,n,i,s)},Ud={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},f3=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function Gd(e){return"isMiddle"in e}function uo(e,t){var r=oo(e);if(r&&f3.has(r.text))return r;throw r?new z("Invalid delimiter '"+r.text+"' after '"+t.funcName+"'",e):new z("Invalid delimiter type '"+e.type+"'",e)}G({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(e,t)=>{var r=uo(t[0],e);return{type:"delimsizing",mode:e.parser.mode,size:Ud[e.funcName].size,mclass:Ud[e.funcName].mclass,delim:r.text}},htmlBuilder:(e,t)=>e.delim==="."?O([e.mclass]):Rf(e.delim,e.size,t,e.mode,[e.mclass]),mathmlBuilder:e=>{var t=[];e.delim!=="."&&t.push(Nt(e.delim,e.mode));var r=new D("mo",t);e.mclass==="mopen"||e.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var a=$(Fn[e.size]);return r.setAttribute("minsize",a),r.setAttribute("maxsize",a),r}});function Hd(e){if(!e.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}G({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var r=e.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new z("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:e.parser.mode,delim:uo(t[0],e).text,color:r}}});G({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var r=uo(t[0],e),a=e.parser;++a.leftrightDepth;var n=a.parseExpression(!1);--a.leftrightDepth,a.expect("\\right",!1);var i=ee(a.parseFunction(),"leftright-right");return{type:"leftright",mode:a.mode,body:n,left:r.text,right:i.delim,rightColor:i.color}},htmlBuilder:(e,t)=>{Hd(e);for(var r=Pe(e.body,t,!0,["mopen","mclose"]),a=0,n=0,i=!1,s=0;s<r.length;s++){var o=r[s];Gd(o)?i=!0:(a=Math.max(r[s].height,a),n=Math.max(r[s].depth,n))}a*=t.sizeMultiplier,n*=t.sizeMultiplier;var l;if(e.left==="."?l=ti(t,["mopen"]):l=al(e.left,a,n,t,e.mode,["mopen"]),r.unshift(l),i)for(var d=1;d<r.length;d++){var h=r[d];if(Gd(h)){var m=h.isMiddle;r[d]=al(m.delim,a,n,m.options,e.mode,[])}}var g;if(e.right===".")g=ti(t,["mclose"]);else{var b=e.rightColor?t.withColor(e.rightColor):t;g=al(e.right,a,n,b,e.mode,["mclose"])}return r.push(g),O(["minner"],r,t)},mathmlBuilder:(e,t)=>{Hd(e);var r=bt(e.body,t);if(e.left!=="."){var a=new D("mo",[Nt(e.left,e.mode)]);a.setAttribute("fence","true"),r.unshift(a)}if(e.right!=="."){var n=new D("mo",[Nt(e.right,e.mode)]);n.setAttribute("fence","true"),e.rightColor&&n.setAttribute("mathcolor",e.rightColor),r.push(n)}return Fu(r)}});G({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var r=uo(t[0],e);if(!e.parser.leftrightDepth)throw new z("\\middle without preceding \\left",r);return{type:"middle",mode:e.parser.mode,delim:r.text}},htmlBuilder:(e,t)=>{var r;return e.delim==="."?r=ti(t,[]):(r=Rf(e.delim,1,t,e.mode,[]),r.isMiddle={delim:e.delim,options:t}),r},mathmlBuilder:(e,t)=>{var r=e.delim==="\\vert"||e.delim==="|"?Nt("|","text"):Nt(e.delim,e.mode),a=new D("mo",[r]);return a.setAttribute("fence","true"),a.setAttribute("lspace","0.05em"),a.setAttribute("rspace","0.05em"),a}});var co=(e,t)=>{var r=Ya(oe(e.body,t),t),a=e.label.slice(1),n=t.sizeMultiplier,i,s,o=hr(e.body);if(a==="sout")i=O(["stretchy","sout"]),i.height=t.fontMetrics().defaultRuleThickness/n,s=-.5*t.fontMetrics().xHeight;else if(a==="phase"){var l=we({number:.6,unit:"pt"},t),d=we({number:.35,unit:"ex"},t),h=t.havingBaseSizing();n=n/h.sizeMultiplier;var m=r.height+r.depth+l+d;r.style.paddingLeft=$(m/2+l);var g=Math.floor(1e3*m*n),b=h5(g),_=new cr([new Ur("phase",b)],{width:"400em",height:$(g/1e3),viewBox:"0 0 400000 "+g,preserveAspectRatio:"xMinYMin slice"});i=Gr(["hide-tail"],[_],t),i.style.height=$(m),s=r.depth+l+d}else{/cancel/.test(a)?o||r.classes.push("cancel-pad"):a==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var T,N,w=0;/box/.test(a)?(w=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),T=t.fontMetrics().fboxsep+(a==="colorbox"?0:w),N=T):a==="angl"?(w=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),T=4*w,N=Math.max(0,.25-r.depth)):(T=o?.2:0,N=T),i=Y5(r,a,T,N,t),/fbox|boxed|fcolorbox/.test(a)?(i.style.borderStyle="solid",i.style.borderWidth=$(w)):a==="angl"&&w!==.049&&(i.style.borderTopWidth=$(w),i.style.borderRightWidth=$(w)),s=r.depth+N,e.backgroundColor&&(i.style.backgroundColor=e.backgroundColor,e.borderColor&&(i.style.borderColor=e.borderColor))}var v;if(e.backgroundColor)v=se({positionType:"individualShift",children:[{type:"elem",elem:i,shift:s},{type:"elem",elem:r,shift:0}]});else{var x=/cancel|phase/.test(a)?["svg-align"]:[];v=se({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:i,shift:s,wrapperClasses:x}]})}return/cancel/.test(a)&&(v.height=r.height,v.depth=r.depth),/cancel/.test(a)&&!o?O(["mord","cancel-lap"],[v],t):O(["mord"],[v],t)},mo=(e,t)=>{var r,a=new D(e.label.includes("colorbox")?"mpadded":"menclose",[ce(e.body,t)]);switch(e.label){case"\\cancel":a.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":a.setAttribute("notation","downdiagonalstrike");break;case"\\phase":a.setAttribute("notation","phasorangle");break;case"\\sout":a.setAttribute("notation","horizontalstrike");break;case"\\fbox":a.setAttribute("notation","box");break;case"\\angl":a.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,a.setAttribute("width","+"+2*r+"pt"),a.setAttribute("height","+"+2*r+"pt"),a.setAttribute("lspace",r+"pt"),a.setAttribute("voffset",r+"pt"),e.label==="\\fcolorbox"){var n=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);a.setAttribute("style","border: "+$(n)+" solid "+e.borderColor)}break;case"\\xcancel":a.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return e.backgroundColor&&a.setAttribute("mathbackground",e.backgroundColor),a};G({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","hbox"]},handler(e,t,r){var{parser:a,funcName:n}=e,i=ee(t[0],"color-token").color,s=t[1];return{type:"enclose",mode:a.mode,label:n,backgroundColor:i,body:s}},htmlBuilder:co,mathmlBuilder:mo});G({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","hbox"]},handler(e,t,r){var{parser:a,funcName:n}=e,i=ee(t[0],"color-token").color,s=ee(t[1],"color-token").color,o=t[2];return{type:"enclose",mode:a.mode,label:n,backgroundColor:s,borderColor:i,body:o}},htmlBuilder:co,mathmlBuilder:mo});G({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(e,t){var{parser:r}=e;return{type:"enclose",mode:r.mode,label:"\\fbox",body:t[0]}}});G({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\phase"],props:{numArgs:1},handler(e,t){var{parser:r,funcName:a}=e,n=t[0];return{type:"enclose",mode:r.mode,label:a,body:n}},htmlBuilder:co,mathmlBuilder:mo});G({type:"enclose",names:["\\sout"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:r,funcName:a}=e;r.mode==="math"&&r.settings.reportNonstrict("mathVsSout","LaTeX's \\sout works only in text mode");var n=t[0];return{type:"enclose",mode:r.mode,label:a,body:n}},htmlBuilder:co,mathmlBuilder:mo});G({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(e,t){var{parser:r}=e;return{type:"enclose",mode:r.mode,label:"\\angl",body:t[0]}}});var If={};function Wt(e){for(var{type:t,names:r,props:a,handler:n,htmlBuilder:i,mathmlBuilder:s}=e,o={type:t,numArgs:a.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:n},l=0;l<r.length;++l)If[r[l]]=o;i&&(As[t]=i),s&&(Is[t]=s)}var Ff={};function f(e,t){Ff[e]=t}class at{constructor(t,r,a){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=t,this.start=r,this.end=a}static range(t,r){return r?!t||!t.loc||!r.loc||t.loc.lexer!==r.loc.lexer?null:new at(t.loc.lexer,t.loc.start,r.loc.end):t&&t.loc}}class pt{constructor(t,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=t,this.loc=r}range(t,r){return new pt(r,at.range(this,t))}}function qd(e){var t=[];e.consumeSpaces();var r=e.fetch().text;for(r==="\\relax"&&(e.consume(),e.consumeSpaces(),r=e.fetch().text);r==="\\hline"||r==="\\hdashline";)e.consume(),t.push(r==="\\hdashline"),e.consumeSpaces(),r=e.fetch().text;return t}var ho=e=>{var t=e.parser.settings;if(!t.displayMode)throw new z("{"+e.envName+"} can be used only in display mode.")},g3=new Set(["gather","gather*"]);function zu(e){if(!e.includes("ed"))return!e.includes("*")}function Xr(e,t,r){var{hskipBeforeAndAfter:a,addJot:n,cols:i,arraystretch:s,colSeparationType:o,autoTag:l,singleRow:d,emptySingleRow:h,maxNumCols:m,leqno:g}=t;if(e.gullet.beginGroup(),d||e.gullet.macros.set("\\cr","\\\\\\relax"),!s){var b=e.gullet.expandMacroAsText("\\arraystretch");if(b==null)s=1;else if(s=parseFloat(b),!s||s<0)throw new z("Invalid \\arraystretch: "+b)}e.gullet.beginGroup();var _=[],T=[_],N=[],w=[],v=l!=null?[]:void 0;function x(){l&&e.gullet.macros.set("\\@eqnsw","1",!0)}function E(){v&&(e.gullet.macros.get("\\df@tag")?(v.push(e.subparse([new pt("\\df@tag")])),e.gullet.macros.set("\\df@tag",void 0,!0)):v.push(!!l&&e.gullet.macros.get("\\@eqnsw")==="1"))}for(x(),w.push(qd(e));;){var R=e.parseExpression(!1,d?"\\end":"\\\\");e.gullet.endGroup(),e.gullet.beginGroup();var A={type:"ordgroup",mode:e.mode,body:R};r&&(A={type:"styling",mode:e.mode,style:r,resetFont:!0,body:[A]}),_.push(A);var I=e.fetch().text;if(I==="&"){if(m&&_.length===m){if(d||o)throw new z("Too many tab characters: &",e.nextToken);e.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}e.consume()}else if(I==="\\end"){E(),_.length===1&&A.type==="styling"&&A.body.length===1&&A.body[0].type==="ordgroup"&&A.body[0].body.length===0&&(T.length>1||!h)&&T.pop(),w.length<T.length+1&&w.push([]);break}else if(I==="\\\\"){e.consume();var F=void 0;e.gullet.future().text!==" "&&(F=e.parseSizeGroup(!0)),N.push(F?F.value:null),E(),w.push(qd(e)),_=[],T.push(_),x()}else throw new z("Expected & or \\\\ or \\cr or \\end",e.nextToken)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:"array",mode:e.mode,addJot:n,arraystretch:s,body:T,cols:i,rowGaps:N,hskipBeforeAndAfter:a,hLinesBeforeRow:w,colSeparationType:o,tags:v,leqno:g}}function Du(e){return e.slice(0,1)==="d"?"display":"text"}var Vt=function(t,r){var a,n,i=t.body.length,s=t.hLinesBeforeRow,o=0,l=new Array(i),d=[],h=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),m=1/r.fontMetrics().ptPerEm,g=5*m;if(t.colSeparationType&&t.colSeparationType==="small"){var b=r.havingStyle(Z.SCRIPT).sizeMultiplier;g=.2778*(b/r.sizeMultiplier)}var _=t.colSeparationType==="CD"?we({number:3,unit:"ex"},r):12*m,T=3*m,N=t.arraystretch*_,w=.7*N,v=.3*N,x=0;function E(hi){for(var pi=0;pi<hi.length;++pi)pi>0&&(x+=.25),d.push({pos:x,isDashed:hi[pi]})}for(E(s[0]),a=0;a<t.body.length;++a){var R=t.body[a],A=w,I=v;o<R.length&&(o=R.length);var F={cells:new Array(R.length),height:0,depth:0,pos:0};for(n=0;n<R.length;++n){var U=oe(R[n],r);I<U.depth&&(I=U.depth),A<U.height&&(A=U.height),F.cells[n]=U}var B=t.rowGaps[a],te=0;B&&(te=we(B,r),te>0&&(te+=v,I<te&&(I=te),te=0)),t.addJot&&a<t.body.length-1&&(I+=T),F.height=A,F.depth=I,x+=A,F.pos=x,x+=I+te,l[a]=F,E(s[a+1])}var ne=x/2+r.fontMetrics().axisHeight,Ge=t.cols||[],Ae=[],V,re,Ie=[];if(t.tags&&t.tags.some(hi=>hi))for(a=0;a<i;++a){var j=l[a],K=j.pos-ne,Y=t.tags[a],W=void 0;Y===!0?W=O(["eqn-num"],[],r):Y===!1?W=O([],[],r):W=O([],Pe(Y,r,!0),r),W.depth=j.depth,W.height=j.height,Ie.push({type:"elem",elem:W,shift:K})}for(n=0,re=0;n<o||re<Ge.length;++n,++re){for(var Q,le=Ge[re],ze=!0;((ut=le)==null?void 0:ut.type)==="separator";){var ut;if(ze||(V=O(["arraycolsep"],[]),V.style.width=$(r.fontMetrics().doubleRuleSep),Ae.push(V)),le.separator==="|"||le.separator===":"){var Kt=le.separator==="|"?"solid":"dashed",Rt=O(["vertical-separator"],[],r);Rt.style.height=$(x),Rt.style.borderRightWidth=$(h),Rt.style.borderRightStyle=Kt,Rt.style.margin="0 "+$(-h/2);var Gu=x-ne;Gu&&(Rt.style.verticalAlign=$(-Gu)),Ae.push(Rt)}else throw new z("Invalid separator type: "+le.separator);re++,le=Ge[re],ze=!1}if(!(n>=o)){var ga=void 0;if(n>0||t.hskipBeforeAndAfter){var Hu,qu;ga=(Hu=(qu=le)==null?void 0:qu.pregap)!=null?Hu:g,ga!==0&&(V=O(["arraycolsep"],[]),V.style.width=$(ga),Ae.push(V))}var Wu=[];for(a=0;a<i;++a){var ci=l[a],di=ci.cells[n];if(di){var Qf=ci.pos-ne;di.depth=ci.depth,di.height=ci.height,Wu.push({type:"elem",elem:di,shift:Qf})}}var Jf=se({positionType:"individualShift",children:Wu}),Zf=O(["col-align-"+(((Q=le)==null?void 0:Q.align)||"c")],[Jf]);if(Ae.push(Zf),n<o-1||t.hskipBeforeAndAfter){var Vu,Xu;ga=(Vu=(Xu=le)==null?void 0:Xu.postgap)!=null?Vu:g,ga!==0&&(V=O(["arraycolsep"],[]),V.style.width=$(ga),Ae.push(V))}}}var mi=O(["mtable"],Ae);if(d.length>0){for(var e1=Ka("hline",r,h),t1=Ka("hdashline",r,h),fo=[{type:"elem",elem:mi,shift:0}];d.length>0;){var Ku=d.pop(),Yu=Ku.pos-ne;Ku.isDashed?fo.push({type:"elem",elem:t1,shift:Yu}):fo.push({type:"elem",elem:e1,shift:Yu})}mi=se({positionType:"individualShift",children:fo})}if(Ie.length===0)return O(["mord"],[mi],r);var r1=se({positionType:"individualShift",children:Ie}),a1=O(["tag"],[r1],r);return fr([mi,a1])},y3={c:"center ",l:"left ",r:"right "},Xt=function(t,r){for(var a=[],n=new D("mtd",[],["mtr-glue"]),i=new D("mtd",[],["mml-eqn-num"]),s=0;s<t.body.length;s++){for(var o=t.body[s],l=[],d=0;d<o.length;d++)l.push(new D("mtd",[ce(o[d],r)]));t.tags&&t.tags[s]&&(l.unshift(n),l.push(n),t.leqno?l.unshift(i):l.push(i)),a.push(new D("mtr",l))}var h=new D("mtable",a),m=t.arraystretch===.5?.1:.16+t.arraystretch-1+(t.addJot?.09:0);h.setAttribute("rowspacing",$(m));var g="",b="";if(t.cols&&t.cols.length>0){var _=t.cols,T="",N=!1,w=0,v=_.length;_[0].type==="separator"&&(g+="top ",w=1),_[_.length-1].type==="separator"&&(g+="bottom ",v-=1);for(var x=w;x<v;x++){var E=_[x];E.type==="align"?(b+=y3[E.align],N&&(T+="none "),N=!0):E.type==="separator"&&N&&(T+=E.separator==="|"?"solid ":"dashed ",N=!1)}h.setAttribute("columnalign",b.trim()),/[sd]/.test(T)&&h.setAttribute("columnlines",T.trim())}if(t.colSeparationType==="align"){for(var R=t.cols||[],A="",I=1;I<R.length;I++)A+=I%2?"0em ":"1em ";h.setAttribute("columnspacing",A.trim())}else t.colSeparationType==="alignat"||t.colSeparationType==="gather"?h.setAttribute("columnspacing","0em"):t.colSeparationType==="small"?h.setAttribute("columnspacing","0.2778em"):t.colSeparationType==="CD"?h.setAttribute("columnspacing","0.5em"):h.setAttribute("columnspacing","1em");var F="",U=t.hLinesBeforeRow;g+=U[0].length>0?"left ":"",g+=U[U.length-1].length>0?"right ":"";for(var B=1;B<U.length-1;B++)F+=U[B].length===0?"none ":U[B][0]?"dashed ":"solid ";return/[sd]/.test(F)&&h.setAttribute("rowlines",F.trim()),g!==""&&(h=new D("menclose",[h]),h.setAttribute("notation",g.trim())),t.arraystretch&&t.arraystretch<1&&(h=new D("mstyle",[h]),h.setAttribute("scriptlevel","1")),h},Lf=function(t,r){t.envName.includes("ed")||ho(t);var a=[],n=t.envName.includes("at")?"alignat":"align",i=t.envName==="split",s=Xr(t.parser,{cols:a,addJot:!0,autoTag:i?void 0:zu(t.envName),emptySingleRow:!0,colSeparationType:n,maxNumCols:i?2:void 0,leqno:t.parser.settings.leqno},"display"),o=0,l=0,d={type:"ordgroup",mode:t.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var h="",m=0;m<r[0].body.length;m++){var g=ee(r[0].body[m],"textord");h+=g.text}o=Number(h),l=o*2}var b=!l;s.body.forEach(function(w){for(var v=1;v<w.length;v+=2){var x=ee(w[v],"styling"),E=ee(x.body[0],"ordgroup");E.body.unshift(d)}if(b)l<w.length&&(l=w.length);else{var R=w.length/2;if(o<R)throw new z("Too many math in a row: "+("expected "+o+", but got "+R),w[0])}});for(var _=0;_<l;++_){var T="r",N=0;_%2===1?T="l":_>0&&b&&(N=1),a[_]={type:"align",align:T,pregap:N,postgap:0}}return s.colSeparationType=b?"align":"alignat",s};Wt({type:"array",names:["array","darray"],props:{numArgs:1},handler(e,t){var r=oo(t[0]),a=r?[t[0]]:ee(t[0],"ordgroup").body,n=a.map(function(s){var o=so(s),l=o.text;if("lcr".includes(l))return{type:"align",align:l};if(l==="|")return{type:"separator",separator:"|"};if(l===":")return{type:"separator",separator:":"};throw new z("Unknown column alignment: "+l,s)}),i={cols:n,hskipBeforeAndAfter:!0,maxNumCols:n.length};return Xr(e.parser,i,Du(e.envName))},htmlBuilder:Vt,mathmlBuilder:Xt});Wt({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(e){var t={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[e.envName.replace("*","")],r="c",a={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(e.envName.charAt(e.envName.length-1)==="*"){var n=e.parser;if(n.consumeSpaces(),n.fetch().text==="["){if(n.consume(),n.consumeSpaces(),r=n.fetch().text,!"lcr".includes(r))throw new z("Expected l or c or r",n.nextToken);n.consume(),n.consumeSpaces(),n.expect("]"),n.consume(),a.cols=[{type:"align",align:r}]}}var i=Xr(e.parser,a,Du(e.envName)),s=Math.max(0,...i.body.map(o=>o.length));return i.cols=new Array(s).fill({type:"align",align:r}),t?{type:"leftright",mode:e.mode,body:[i],left:t[0],right:t[1],rightColor:void 0}:i},htmlBuilder:Vt,mathmlBuilder:Xt});Wt({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(e){var t={arraystretch:.5},r=Xr(e.parser,t,"script");return r.colSeparationType="small",r},htmlBuilder:Vt,mathmlBuilder:Xt});Wt({type:"array",names:["subarray"],props:{numArgs:1},handler(e,t){var r=oo(t[0]),a=r?[t[0]]:ee(t[0],"ordgroup").body,n=a.map(function(o){var l=so(o),d=l.text;if("lc".includes(d))return{type:"align",align:d};throw new z("Unknown column alignment: "+d,o)});if(n.length>1)throw new z("{subarray} can contain only one column");var i={cols:n,hskipBeforeAndAfter:!1,arraystretch:.5},s=Xr(e.parser,i,"script");if(s.body.length>0&&s.body[0].length>1)throw new z("{subarray} can contain only one column");return s},htmlBuilder:Vt,mathmlBuilder:Xt});Wt({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(e){var t={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=Xr(e.parser,t,Du(e.envName));return{type:"leftright",mode:e.mode,body:[r],left:e.envName.includes("r")?".":"\\{",right:e.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:Vt,mathmlBuilder:Xt});Wt({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:Lf,htmlBuilder:Vt,mathmlBuilder:Xt});Wt({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(e){g3.has(e.envName)&&ho(e);var t={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:zu(e.envName),emptySingleRow:!0,leqno:e.parser.settings.leqno};return Xr(e.parser,t,"display")},htmlBuilder:Vt,mathmlBuilder:Xt});Wt({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:Lf,htmlBuilder:Vt,mathmlBuilder:Xt});Wt({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(e){ho(e);var t={autoTag:zu(e.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:e.parser.settings.leqno};return Xr(e.parser,t,"display")},htmlBuilder:Vt,mathmlBuilder:Xt});Wt({type:"array",names:["CD"],props:{numArgs:0},handler(e){return ho(e),n3(e.parser)},htmlBuilder:Vt,mathmlBuilder:Xt});f("\\nonumber","\\gdef\\@eqnsw{0}");f("\\notag","\\nonumber");G({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(e,t){throw new z(e.funcName+" valid only within array environment")}});var Wd=If;G({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(e,t){var{parser:r,funcName:a}=e,n=t[0];if(n.type!=="ordgroup")throw new z("Invalid environment name",n);for(var i="",s=0;s<n.body.length;++s)i+=ee(n.body[s],"textord").text;if(a==="\\begin"){if(!Wd.hasOwnProperty(i))throw new z("No such environment: "+i,n);var o=Wd[i],{args:l,optArgs:d}=r.parseArguments("\\begin{"+i+"}",o),h={mode:r.mode,envName:i,parser:r},m=o.handler(h,l,d);r.expect("\\end",!1);var g=r.nextToken,b=ee(r.parseFunction(),"environment");if(b.name!==i)throw new z("Mismatch: \\begin{"+i+"} matched by \\end{"+b.name+"}",g);return m}return{type:"environment",mode:r.mode,name:i,nameGroup:n}}});var Of=(e,t)=>{var r=e.font,a=t.withFont(r);return oe(e.body,a)},Pf=(e,t)=>{var r=e.font,a=t.withFont(r);return ce(e.body,a)},Vd={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak"};G({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(e,t)=>{var{parser:r,funcName:a}=e,n=Fs(t[0]),i=a;return i in Vd&&(i=Vd[i]),{type:"font",mode:r.mode,font:i.slice(1),body:n}},htmlBuilder:Of,mathmlBuilder:Pf});G({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(e,t)=>{var{parser:r}=e,a=t[0];return{type:"mclass",mode:r.mode,mclass:lo(a),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:a}],isCharacterBox:hr(a)}}});G({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{parser:r,funcName:a,breakOnTokenText:n}=e,{mode:i}=r,s=r.parseExpression(!0,n);return{type:"font",mode:i,font:"math"+a.slice(1),body:{type:"ordgroup",mode:r.mode,body:s}}},htmlBuilder:Of,mathmlBuilder:Pf});var v3=(e,t)=>{var r=t.style,a=r.fracNum(),n=r.fracDen(),i;i=t.havingStyle(a);var s=oe(e.numer,i,t);if(e.continued){var o=8.5/t.fontMetrics().ptPerEm,l=3.5/t.fontMetrics().ptPerEm;s.height=s.height<o?o:s.height,s.depth=s.depth<l?l:s.depth}i=t.havingStyle(n);var d=oe(e.denom,i,t),h,m,g;e.hasBarLine?(e.barSize?(m=we(e.barSize,t),h=Ka("frac-line",t,m)):h=Ka("frac-line",t),m=h.height,g=h.height):(h=null,m=0,g=t.fontMetrics().defaultRuleThickness);var b,_,T;r.size===Z.DISPLAY.size?(b=t.fontMetrics().num1,m>0?_=3*g:_=7*g,T=t.fontMetrics().denom1):(m>0?(b=t.fontMetrics().num2,_=g):(b=t.fontMetrics().num3,_=3*g),T=t.fontMetrics().denom2);var N;if(h){var v=t.fontMetrics().axisHeight;b-s.depth-(v+.5*m)<_&&(b+=_-(b-s.depth-(v+.5*m))),v-.5*m-(d.height-T)<_&&(T+=_-(v-.5*m-(d.height-T)));var x=-(v-.5*m);N=se({positionType:"individualShift",children:[{type:"elem",elem:d,shift:T},{type:"elem",elem:h,shift:x},{type:"elem",elem:s,shift:-b}]})}else{var w=b-s.depth-(d.height-T);w<_&&(b+=.5*(_-w),T+=.5*(_-w)),N=se({positionType:"individualShift",children:[{type:"elem",elem:d,shift:T},{type:"elem",elem:s,shift:-b}]})}i=t.havingStyle(r),N.height*=i.sizeMultiplier/t.sizeMultiplier,N.depth*=i.sizeMultiplier/t.sizeMultiplier;var E;r.size===Z.DISPLAY.size?E=t.fontMetrics().delim1:r.size===Z.SCRIPTSCRIPT.size?E=t.havingStyle(Z.SCRIPT).fontMetrics().delim2:E=t.fontMetrics().delim2;var R,A;return e.leftDelim==null?R=ti(t,["mopen"]):R=S0(e.leftDelim,E,!0,t.havingStyle(r),e.mode,["mopen"]),e.continued?A=O([]):e.rightDelim==null?A=ti(t,["mclose"]):A=S0(e.rightDelim,E,!0,t.havingStyle(r),e.mode,["mclose"]),O(["mord"].concat(i.sizingClasses(t)),[R,O(["mfrac"],[N]),A],t)},w3=(e,t)=>{var r=new D("mfrac",[ce(e.numer,t),ce(e.denom,t)]);if(!e.hasBarLine)r.setAttribute("linethickness","0px");else if(e.barSize){var a=we(e.barSize,t);r.setAttribute("linethickness",$(a))}if(e.leftDelim!=null||e.rightDelim!=null){var n=[];if(e.leftDelim!=null){var i=new D("mo",[new Re(e.leftDelim.replace("\\",""))]);i.setAttribute("fence","true"),n.push(i)}if(n.push(r),e.rightDelim!=null){var s=new D("mo",[new Re(e.rightDelim.replace("\\",""))]);s.setAttribute("fence","true"),n.push(s)}return Fu(n)}return r},zf=(e,t)=>{if(!t)return e;var r={type:"styling",mode:e.mode,style:t,body:[e]};return r};G({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(e,t)=>{var{parser:r,funcName:a}=e,n=t[0],i=t[1],s,o=null,l=null;switch(a){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":s=!0;break;case"\\\\atopfrac":s=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":s=!1,o="(",l=")";break;case"\\\\bracefrac":s=!1,o="\\{",l="\\}";break;case"\\\\brackfrac":s=!1,o="[",l="]";break;default:throw new Error("Unrecognized genfrac command")}var d=a==="\\cfrac",h=null;return d||a.startsWith("\\d")?h="display":a.startsWith("\\t")&&(h="text"),zf({type:"genfrac",mode:r.mode,numer:n,denom:i,continued:d,hasBarLine:s,leftDelim:o,rightDelim:l,barSize:null},h)},htmlBuilder:v3,mathmlBuilder:w3});G({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(e){var{parser:t,funcName:r,token:a}=e,n;switch(r){case"\\over":n="\\frac";break;case"\\choose":n="\\binom";break;case"\\atop":n="\\\\atopfrac";break;case"\\brace":n="\\\\bracefrac";break;case"\\brack":n="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:t.mode,replaceWith:n,token:a}}});var Xd=["display","text","script","scriptscript"],Kd=function(t){var r=null;return t.length>0&&(r=t,r=r==="."?null:r),r};G({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(e,t){var{parser:r}=e,a=t[4],n=t[5],i=Fs(t[0]),s=i.type==="atom"&&i.family==="open"?Kd(i.text):null,o=Fs(t[1]),l=o.type==="atom"&&o.family==="close"?Kd(o.text):null,d=ee(t[2],"size"),h,m=null;d.isBlank?h=!0:(m=d.value,h=m.number>0);var g=null,b=t[3];if(b.type==="ordgroup"){if(b.body.length>0){var _=ee(b.body[0],"textord");g=Xd[Number(_.text)]}}else b=ee(b,"textord"),g=Xd[Number(b.text)];return zf({type:"genfrac",mode:r.mode,numer:a,denom:n,continued:!1,hasBarLine:h,barSize:m,leftDelim:s,rightDelim:l},g)}});G({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(e,t){var{parser:r,funcName:a,token:n}=e;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:ee(t[0],"size").value,token:n}}});G({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(e,t)=>{var{parser:r,funcName:a}=e,n=t[0],i=ee(t[1],"infix").size;if(!i)throw new Error("\\\\abovefrac expected size, but got "+String(i));var s=t[2],o=i.number>0;return{type:"genfrac",mode:r.mode,numer:n,denom:s,continued:!1,hasBarLine:o,barSize:i,leftDelim:null,rightDelim:null}}});var Df=(e,t)=>{var r=t.style,a,n;e.type==="supsub"?(a=e.sup?oe(e.sup,t.havingStyle(r.sup()),t):oe(e.sub,t.havingStyle(r.sub()),t),n=ee(e.base,"horizBrace")):n=ee(e,"horizBrace");var i=oe(n.base,t.havingBaseStyle(Z.DISPLAY)),s=io(n,t),o;if(n.isOver?o=se({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"kern",size:.1},{type:"elem",elem:s,wrapperClasses:["svg-align"]}]}):o=se({positionType:"bottom",positionData:i.depth+.1+s.height,children:[{type:"elem",elem:s,wrapperClasses:["svg-align"]},{type:"kern",size:.1},{type:"elem",elem:i}]}),a){var l=O(["minner",n.isOver?"mover":"munder"],[o],t);n.isOver?o=se({positionType:"firstBaseline",children:[{type:"elem",elem:l},{type:"kern",size:.2},{type:"elem",elem:a}]}):o=se({positionType:"bottom",positionData:l.depth+.2+a.height+a.depth,children:[{type:"elem",elem:a},{type:"kern",size:.2},{type:"elem",elem:l}]})}return O(["minner",n.isOver?"mover":"munder"],[o],t)},b3=(e,t)=>{var r=no(e.label);return new D(e.isOver?"mover":"munder",[ce(e.base,t),r])};G({type:"horizBrace",names:["\\overbrace","\\underbrace","\\overbracket","\\underbracket"],props:{numArgs:1},handler(e,t){var{parser:r,funcName:a}=e;return{type:"horizBrace",mode:r.mode,label:a,isOver:a.includes("\\over"),base:t[0]}},htmlBuilder:Df,mathmlBuilder:b3});G({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,a=t[1],n=ee(t[0],"url").url;return r.settings.isTrusted({command:"\\href",url:n})?{type:"href",mode:r.mode,href:n,body:Ne(a)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(e,t)=>{var r=Pe(e.body,t,!1);return F5(e.href,[],r,t)},mathmlBuilder:(e,t)=>{var r=Hr(e.body,t);return r instanceof D||(r=new D("mrow",[r])),r.setAttribute("href",e.href),r}});G({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,a=ee(t[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:a}))return r.formatUnsupportedCmd("\\url");for(var n=[],i=0;i<a.length;i++){var s=a[i];s==="~"&&(s="\\textasciitilde"),n.push({type:"textord",mode:"text",text:s})}var o={type:"text",mode:r.mode,font:"\\texttt",body:n};return{type:"href",mode:r.mode,href:a,body:Ne(o)}}});G({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(e,t){var{parser:r}=e;return{type:"hbox",mode:r.mode,body:Ne(t[0])}},htmlBuilder(e,t){var r=Pe(e.body,t.withFont(""),!1);return fr(r)},mathmlBuilder(e,t){return new D("mrow",bt(e.body,t.withFont("")))}});G({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(e,t)=>{var{parser:r,funcName:a,token:n}=e,i=ee(t[0],"raw").string,s=t[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var o,l={};switch(a){case"\\htmlClass":l.class=i,o={command:"\\htmlClass",class:i};break;case"\\htmlId":l.id=i,o={command:"\\htmlId",id:i};break;case"\\htmlStyle":l.style=i,o={command:"\\htmlStyle",style:i};break;case"\\htmlData":{for(var d=i.split(","),h=0;h<d.length;h++){var m=d[h],g=m.indexOf("=");if(g<0)throw new z("\\htmlData key/value '"+m+"' missing equals sign");var b=m.slice(0,g),_=m.slice(g+1);l["data-"+b.trim()]=_}o={command:"\\htmlData",attributes:l};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(o)?{type:"html",mode:r.mode,attributes:l,body:Ne(s)}:r.formatUnsupportedCmd(a)},htmlBuilder:(e,t)=>{var r=Pe(e.body,t,!1),a=["enclosing"];e.attributes.class&&a.push(...e.attributes.class.trim().split(/\s+/));var n=O(a,r,t);for(var i in e.attributes)i!=="class"&&e.attributes.hasOwnProperty(i)&&n.setAttribute(i,e.attributes[i]);return n},mathmlBuilder:(e,t)=>Hr(e.body,t)});G({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(e,t)=>{var{parser:r}=e;return{type:"htmlmathml",mode:r.mode,html:Ne(t[0]),mathml:Ne(t[1])}},htmlBuilder:(e,t)=>{var r=Pe(e.html,t,!1);return fr(r)},mathmlBuilder:(e,t)=>Hr(e.mathml,t)});var nl=function(t){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))return{number:+t,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);if(!r)throw new z("Invalid size: '"+t+"' in \\includegraphics");var a={number:+(r[1]+r[2]),unit:r[3]};if(!ef(a))throw new z("Invalid unit: '"+a.unit+"' in \\includegraphics.");return a};G({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(e,t,r)=>{var{parser:a}=e,n={number:0,unit:"em"},i={number:.9,unit:"em"},s={number:0,unit:"em"},o="";if(r[0])for(var l=ee(r[0],"raw").string,d=l.split(","),h=0;h<d.length;h++){var m=d[h].split("=");if(m.length===2){var g=m[1].trim();switch(m[0].trim()){case"alt":o=g;break;case"width":n=nl(g);break;case"height":i=nl(g);break;case"totalheight":s=nl(g);break;default:throw new z("Invalid key: '"+m[0]+"' in \\includegraphics.")}}}var b=ee(t[0],"url").url;return o===""&&(o=b,o=o.replace(/^.*[\\/]/,""),o=o.substring(0,o.lastIndexOf("."))),a.settings.isTrusted({command:"\\includegraphics",url:b})?{type:"includegraphics",mode:a.mode,alt:o,width:n,height:i,totalheight:s,src:b}:a.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(e,t)=>{var r=we(e.height,t),a=0;e.totalheight.number>0&&(a=we(e.totalheight,t)-r);var n=0;e.width.number>0&&(n=we(e.width,t));var i={height:$(r+a)};n>0&&(i.width=$(n)),a>0&&(i.verticalAlign=$(-a));var s=new x5(e.src,e.alt,i);return s.height=r,s.depth=a,s},mathmlBuilder:(e,t)=>{var r=new D("mglyph",[]);r.setAttribute("alt",e.alt);var a=we(e.height,t),n=0;if(e.totalheight.number>0&&(n=we(e.totalheight,t)-a,r.setAttribute("valign",$(-n))),r.setAttribute("height",$(a+n)),e.width.number>0){var i=we(e.width,t);r.setAttribute("width",$(i))}return r.setAttribute("src",e.src),r}});G({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(e,t){var{parser:r,funcName:a}=e,n=ee(t[0],"size");if(r.settings.strict){var i=a[1]==="m",s=n.value.unit==="mu";i?(s||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" supports only mu units, "+("not "+n.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" works only in math mode")):s&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:n.value}},htmlBuilder(e,t){return of(e.dimension,t)},mathmlBuilder(e,t){var r=we(e.dimension,t);return new hf(r)}});G({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:r,funcName:a}=e,n=t[0];return{type:"lap",mode:r.mode,alignment:a.slice(5),body:n}},htmlBuilder:(e,t)=>{var r;e.alignment==="clap"?(r=O([],[oe(e.body,t)]),r=O(["inner"],[r],t)):r=O(["inner"],[oe(e.body,t)]);var a=O(["fix"],[]),n=O([e.alignment],[r,a],t),i=O(["strut"]);return i.style.height=$(n.height+n.depth),n.depth&&(i.style.verticalAlign=$(-n.depth)),n.children.unshift(i),n=O(["thinbox"],[n],t),O(["mord","vbox"],[n],t)},mathmlBuilder:(e,t)=>{var r=new D("mpadded",[ce(e.body,t)]);if(e.alignment!=="rlap"){var a=e.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",a+"width")}return r.setAttribute("width","0px"),r}});G({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){var{funcName:r,parser:a}=e,n=a.mode;a.switchMode("math");var i=r==="\\("?"\\)":"$",s=a.parseExpression(!1,i);return a.expect(i),a.switchMode(n),{type:"styling",mode:a.mode,style:"text",resetFont:!0,body:s}}});G({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){throw new z("Mismatched "+e.funcName)}});var Yd=(e,t)=>{switch(t.style.size){case Z.DISPLAY.size:return e.display;case Z.TEXT.size:return e.text;case Z.SCRIPT.size:return e.script;case Z.SCRIPTSCRIPT.size:return e.scriptscript;default:return e.text}};G({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(e,t)=>{var{parser:r}=e;return{type:"mathchoice",mode:r.mode,display:Ne(t[0]),text:Ne(t[1]),script:Ne(t[2]),scriptscript:Ne(t[3])}},htmlBuilder:(e,t)=>{var r=Yd(e,t),a=Pe(r,t,!1);return fr(a)},mathmlBuilder:(e,t)=>{var r=Yd(e,t);return Hr(r,t)}});var Bf=(e,t,r,a,n,i,s)=>{e=O([],[e]);var o=r&&hr(r),l,d;if(t){var h=oe(t,a.havingStyle(n.sup()),a);d={elem:h,kern:Math.max(a.fontMetrics().bigOpSpacing1,a.fontMetrics().bigOpSpacing3-h.depth)}}if(r){var m=oe(r,a.havingStyle(n.sub()),a);l={elem:m,kern:Math.max(a.fontMetrics().bigOpSpacing2,a.fontMetrics().bigOpSpacing4-m.height)}}var g;if(d&&l){var b=a.fontMetrics().bigOpSpacing5+l.elem.height+l.elem.depth+l.kern+e.depth+s;g=se({positionType:"bottom",positionData:b,children:[{type:"kern",size:a.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:$(-i)},{type:"kern",size:l.kern},{type:"elem",elem:e},{type:"kern",size:d.kern},{type:"elem",elem:d.elem,marginLeft:$(i)},{type:"kern",size:a.fontMetrics().bigOpSpacing5}]})}else if(l){var _=e.height-s;g=se({positionType:"top",positionData:_,children:[{type:"kern",size:a.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:$(-i)},{type:"kern",size:l.kern},{type:"elem",elem:e}]})}else if(d){var T=e.depth+s;g=se({positionType:"bottom",positionData:T,children:[{type:"elem",elem:e},{type:"kern",size:d.kern},{type:"elem",elem:d.elem,marginLeft:$(i)},{type:"kern",size:a.fontMetrics().bigOpSpacing5}]})}else return e;var N=[g];if(l&&i!==0&&!o){var w=O(["mspace"],[],a);w.style.marginRight=$(i),N.unshift(w)}return O(["mop","op-limits"],N,a)},$f=new Set(["\\smallint"]),ln=(e,t)=>{var r,a,n=!1,i;e.type==="supsub"?(r=e.sup,a=e.sub,i=ee(e.base,"op"),n=!0):i=ee(e,"op");var s=t.style,o=!1;s.size===Z.DISPLAY.size&&i.symbol&&!$f.has(i.name)&&(o=!0);var l,d;if(i.symbol){var h=o?"Size2-Regular":"Size1-Regular",m="";if((i.name==="\\oiint"||i.name==="\\oiiint")&&(m=i.name.slice(1),i.name=m==="oiint"?"\\iint":"\\iiint"),l=Qe(i.name,h,"math",t,["mop","op-symbol",o?"large-op":"small-op"]),d=l.italic,m.length>0){var g=uf(m+"Size"+(o?"2":"1"),t);l=se({positionType:"individualShift",children:[{type:"elem",elem:l,shift:0},{type:"elem",elem:g,shift:o?.08:0}]}),i.name="\\"+m,l.classes.unshift("mop"),l.italic=d}}else if(i.body){var b=Pe(i.body,t,!0);b.length===1&&b[0]instanceof gt?(l=b[0],l.classes[0]="mop"):l=O(["mop"],b,t)}else{for(var _=[],T=1;T<i.name.length;T++)_.push(Au(i.name[T],i.mode,t));l=O(["mop"],_,t)}var N=0,w=0;if((l instanceof gt||i.name==="\\oiint"||i.name==="\\oiiint")&&!i.suppressBaseShift){var v;N=(l.height-l.depth)/2-t.fontMetrics().axisHeight,w=(v=l.italic)!=null?v:0}return n?Bf(l,r,a,t,s,w,N):(N&&(l.style.position="relative",l.style.top=$(N)),l)},ui=(e,t)=>{var r;if(e.symbol)r=new D("mo",[Nt(e.name,e.mode)]),$f.has(e.name)&&r.setAttribute("largeop","false");else if(e.body)r=new D("mo",bt(e.body,t));else{r=new D("mi",[new Re(e.name.slice(1))]);var a=new D("mo",[Nt("⁡","text")]);e.parentIsSupSub?r=new D("mrow",[r,a]):r=mf([r,a])}return r},x3={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};G({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(e,t)=>{var{parser:r,funcName:a}=e,n=a;return n.length===1&&(n=x3[n]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:n}},htmlBuilder:ln,mathmlBuilder:ui});G({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var{parser:r}=e,a=t[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Ne(a)}},htmlBuilder:ln,mathmlBuilder:ui});var S3={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};G({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(e){var{parser:t,funcName:r}=e;return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:ln,mathmlBuilder:ui});G({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(e){var{parser:t,funcName:r}=e;return{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:ln,mathmlBuilder:ui});G({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(e){var{parser:t,funcName:r}=e,a=r;return a.length===1&&(a=S3[a]),{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:a}},htmlBuilder:ln,mathmlBuilder:ui});var jf=(e,t)=>{var r,a,n=!1,i;e.type==="supsub"?(r=e.sup,a=e.sub,i=ee(e.base,"operatorname"),n=!0):i=ee(e,"operatorname");var s;if(i.body.length>0){for(var o=i.body.map(m=>{var g="text"in m?m.text:void 0;return typeof g=="string"?{type:"textord",mode:m.mode,text:g}:m}),l=Pe(o,t.withFont("mathrm"),!0),d=0;d<l.length;d++){var h=l[d];h instanceof gt&&(h.text=h.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}s=O(["mop"],l,t)}else s=O(["mop"],[],t);return n?Bf(s,r,a,t,t.style,0,0):s},k3=(e,t)=>{for(var r=bt(e.body,t.withFont("mathrm")),a=!0,n=0;n<r.length;n++){var i=r[n];if(!(i instanceof hf))if(i instanceof D)switch(i.type){case"mi":case"mn":case"mspace":case"mtext":break;case"mo":{var s=i.children[0];i.children.length===1&&s instanceof Re?s.text=s.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):a=!1;break}default:a=!1}else a=!1}if(a){var o=r.map(h=>h.toText()).join("");r=[new Re(o)]}var l=new D("mi",r);l.setAttribute("mathvariant","normal");var d=new D("mo",[Nt("⁡","text")]);return e.parentIsSupSub?new D("mrow",[l,d]):mf([l,d])};G({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(e,t)=>{var{parser:r,funcName:a}=e,n=t[0];return{type:"operatorname",mode:r.mode,body:Ne(n),alwaysHandleSupSub:a==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:jf,mathmlBuilder:k3});f("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");fa({type:"ordgroup",htmlBuilder(e,t){return e.semisimple?fr(Pe(e.body,t,!1)):O(["mord"],Pe(e.body,t,!0),t)},mathmlBuilder(e,t){return Hr(e.body,t,!0)}});G({type:"overline",names:["\\overline"],props:{numArgs:1},handler(e,t){var{parser:r}=e,a=t[0];return{type:"overline",mode:r.mode,body:a}},htmlBuilder(e,t){var r=oe(e.body,t.havingCrampedStyle()),a=Ka("overline-line",t),n=t.fontMetrics().defaultRuleThickness,i=se({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*n},{type:"elem",elem:a},{type:"kern",size:n}]});return O(["mord","overline"],[i],t)},mathmlBuilder(e,t){var r=new D("mo",[new Re("‾")]);r.setAttribute("stretchy","true");var a=new D("mover",[ce(e.body,t),r]);return a.setAttribute("accent","true"),a}});G({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,a=t[0];return{type:"phantom",mode:r.mode,body:Ne(a)}},htmlBuilder:(e,t)=>{var r=Pe(e.body,t.withPhantom(),!1);return fr(r)},mathmlBuilder:(e,t)=>{var r=bt(e.body,t);return new D("mphantom",r)}});f("\\hphantom","\\smash{\\phantom{#1}}");G({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,a=t[0];return{type:"vphantom",mode:r.mode,body:a}},htmlBuilder:(e,t)=>{var r=O(["inner"],[oe(e.body,t.withPhantom())]),a=O(["fix"],[]);return O(["mord","rlap"],[r,a],t)},mathmlBuilder:(e,t)=>{var r=bt(Ne(e.body),t),a=new D("mphantom",r),n=new D("mpadded",[a]);return n.setAttribute("width","0px"),n}});G({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(e,t){var{parser:r}=e,a=ee(t[0],"size").value,n=t[1];return{type:"raisebox",mode:r.mode,dy:a,body:n}},htmlBuilder(e,t){var r=oe(e.body,t),a=we(e.dy,t);return se({positionType:"shift",positionData:-a,children:[{type:"elem",elem:r}]})},mathmlBuilder(e,t){var r=new D("mpadded",[ce(e.body,t)]),a=e.dy.number+e.dy.unit;return r.setAttribute("voffset",a),r}});G({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(e){var{parser:t}=e;return{type:"internal",mode:t.mode}}});G({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(e,t,r){var{parser:a}=e,n=r[0],i=ee(t[0],"size"),s=ee(t[1],"size");return{type:"rule",mode:a.mode,shift:n&&ee(n,"size").value,width:i.value,height:s.value}},htmlBuilder(e,t){var r=O(["mord","rule"],[],t),a=we(e.width,t),n=we(e.height,t),i=e.shift?we(e.shift,t):0;return r.style.borderRightWidth=$(a),r.style.borderTopWidth=$(n),r.style.bottom=$(i),r.width=a,r.height=n+i,r.depth=-i,r.maxFontSize=n*1.125*t.sizeMultiplier,r},mathmlBuilder(e,t){var r=we(e.width,t),a=we(e.height,t),n=e.shift?we(e.shift,t):0,i=t.color&&t.getColor()||"black",s=new D("mspace");s.setAttribute("mathbackground",i),s.setAttribute("width",$(r)),s.setAttribute("height",$(a));var o=new D("mpadded",[s]);return n>=0?o.setAttribute("height",$(n)):(o.setAttribute("height",$(n)),o.setAttribute("depth",$(-n))),o.setAttribute("voffset",$(n)),o}});function Uf(e,t,r){for(var a=Pe(e,t,!1),n=t.sizeMultiplier/r.sizeMultiplier,i=0;i<a.length;i++){var s=a[i].classes.indexOf("sizing");s<0?Array.prototype.push.apply(a[i].classes,t.sizingClasses(r)):a[i].classes[s+1]==="reset-size"+t.size&&(a[i].classes[s+1]="reset-size"+r.size),a[i].height*=n,a[i].depth*=n}return fr(a)}var Qd=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],T3=(e,t)=>{var r=t.havingSize(e.size);return Uf(e.body,r,t)};G({type:"sizing",names:Qd,props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{breakOnTokenText:r,funcName:a,parser:n}=e,i=n.parseExpression(!1,r);return{type:"sizing",mode:n.mode,size:Qd.indexOf(a)+1,body:i}},htmlBuilder:T3,mathmlBuilder:(e,t)=>{var r=t.havingSize(e.size),a=bt(e.body,r),n=new D("mstyle",a);return n.setAttribute("mathsize",$(r.sizeMultiplier)),n}});G({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(e,t,r)=>{var{parser:a}=e,n=!1,i=!1,s=r[0]&&ee(r[0],"ordgroup");if(s)for(var o,l=0;l<s.body.length;++l){var d=s.body[l];if(o=so(d).text,o==="t")n=!0;else if(o==="b")i=!0;else{n=!1,i=!1;break}}else n=!0,i=!0;var h=t[0];return{type:"smash",mode:a.mode,body:h,smashHeight:n,smashDepth:i}},htmlBuilder:(e,t)=>{var r=O([],[oe(e.body,t)]);if(!e.smashHeight&&!e.smashDepth)return r;if(e.smashHeight&&(r.height=0),e.smashDepth&&(r.depth=0),e.smashHeight&&e.smashDepth)return O(["mord","smash"],[r],t);if(r.children)for(var a=0;a<r.children.length;a++)e.smashHeight&&(r.children[a].height=0),e.smashDepth&&(r.children[a].depth=0);var n=se({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return O(["mord"],[n],t)},mathmlBuilder:(e,t)=>{var r=new D("mpadded",[ce(e.body,t)]);return e.smashHeight&&r.setAttribute("height","0px"),e.smashDepth&&r.setAttribute("depth","0px"),r}});G({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(e,t,r){var{parser:a}=e,n=r[0],i=t[0];return{type:"sqrt",mode:a.mode,body:i,index:n}},htmlBuilder(e,t){var r=oe(e.body,t.havingCrampedStyle());r.height===0&&(r.height=t.fontMetrics().xHeight),r=Ya(r,t);var a=t.fontMetrics(),n=a.defaultRuleThickness,i=n;t.style.id<Z.TEXT.id&&(i=t.fontMetrics().xHeight);var s=n+i/4,o=r.height+r.depth+s+n,{span:l,ruleWidth:d,advanceWidth:h}=c3(o,t),m=l.height-d;m>r.height+r.depth+s&&(s=(s+m-r.height-r.depth)/2);var g=l.height-r.height-s-d;r.style.paddingLeft=$(h);var b=se({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+g)},{type:"elem",elem:l},{type:"kern",size:d}]});if(e.index){var _=t.havingStyle(Z.SCRIPTSCRIPT),T=oe(e.index,_,t),N=.6*(b.height-b.depth),w=se({positionType:"shift",positionData:-N,children:[{type:"elem",elem:T}]}),v=O(["root"],[w]);return O(["mord","sqrt"],[v,b],t)}else return O(["mord","sqrt"],[b],t)},mathmlBuilder(e,t){var{body:r,index:a}=e;return a?new D("mroot",[ce(r,t),ce(a,t)]):new D("msqrt",[ce(r,t)])}});var k0={display:Z.DISPLAY,text:Z.TEXT,script:Z.SCRIPT,scriptscript:Z.SCRIPTSCRIPT};function _3(e){return e in k0}G({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e,t){var{breakOnTokenText:r,funcName:a,parser:n}=e,i=n.parseExpression(!0,r),s=a.slice(1,a.length-5);if(!_3(s))throw new Error("Unknown style: "+s);return{type:"styling",mode:n.mode,style:s,body:i}},htmlBuilder(e,t){var r=k0[e.style],a=t.havingStyle(r);return e.resetFont&&(a=a.withFont("")),Uf(e.body,a,t)},mathmlBuilder(e,t){var r=k0[e.style],a=t.havingStyle(r);e.resetFont&&(a=a.withFont(""));var n=bt(e.body,a),i=new D("mstyle",n),s={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},o=s[e.style];return i.setAttribute("scriptlevel",o[0]),i.setAttribute("displaystyle",o[1]),i}});var C3=function(t,r){var a=t.base;if(a)if(a.type==="op"){var n=a.limits&&(r.style.size===Z.DISPLAY.size||a.alwaysHandleSupSub);return n?ln:null}else if(a.type==="operatorname"){var i=a.alwaysHandleSupSub&&(r.style.size===Z.DISPLAY.size||a.limits);return i?jf:null}else{if(a.type==="accent")return hr(a.base)?Ou:null;if(a.type==="horizBrace"){var s=!t.sub;return s===a.isOver?Df:null}else return null}else return null};fa({type:"supsub",htmlBuilder(e,t){var r=C3(e,t);if(r)return r(e,t);var{base:a,sup:n,sub:i}=e,s=oe(a,t),o,l,d=t.fontMetrics(),h=0,m=0,g=a&&hr(a);if(n){var b=t.havingStyle(t.style.sup());o=oe(n,b,t),g||(h=s.height-b.fontMetrics().supDrop*b.sizeMultiplier/t.sizeMultiplier)}if(i){var _=t.havingStyle(t.style.sub());l=oe(i,_,t),g||(m=s.depth+_.fontMetrics().subDrop*_.sizeMultiplier/t.sizeMultiplier)}var T;t.style===Z.DISPLAY?T=d.sup1:t.style.cramped?T=d.sup3:T=d.sup2;var N=t.sizeMultiplier,w=$(.5/d.ptPerEm/N),v=null;if(l){var x=e.base&&e.base.type==="op"&&e.base.name&&(e.base.name==="\\oiint"||e.base.name==="\\oiiint");if(s instanceof gt||x){var E;v=$(-((E=s.italic)!=null?E:0))}}var R;if(o&&l){h=Math.max(h,T,o.depth+.25*d.xHeight),m=Math.max(m,d.sub2);var A=d.defaultRuleThickness,I=4*A;if(h-o.depth-(l.height-m)<I){m=I-(h-o.depth)+l.height;var F=.8*d.xHeight-(h-o.depth);F>0&&(h+=F,m-=F)}var U=[{type:"elem",elem:l,shift:m,marginRight:w,marginLeft:v},{type:"elem",elem:o,shift:-h,marginRight:w}];R=se({positionType:"individualShift",children:U})}else if(l){m=Math.max(m,d.sub1,l.height-.8*d.xHeight);var B=[{type:"elem",elem:l,marginLeft:v,marginRight:w}];R=se({positionType:"shift",positionData:m,children:B})}else if(o)h=Math.max(h,T,o.depth+.25*d.xHeight),R=se({positionType:"shift",positionData:-h,children:[{type:"elem",elem:o,marginRight:w}]});else throw new Error("supsub must have either sup or sub.");var te=v0(s,"right")||"mord";return O([te],[s,O(["msupsub"],[R])],t)},mathmlBuilder(e,t){var r=!1,a,n;e.base&&e.base.type==="horizBrace"&&(n=!!e.sup,n===e.base.isOver&&(r=!0,a=e.base.isOver)),e.base&&(e.base.type==="op"||e.base.type==="operatorname")&&(e.base.parentIsSupSub=!0);var i=[ce(e.base,t)];e.sub&&i.push(ce(e.sub,t)),e.sup&&i.push(ce(e.sup,t));var s;if(r)s=a?"mover":"munder";else if(e.sub)if(e.sup){var d=e.base;d&&d.type==="op"&&d.limits&&t.style===Z.DISPLAY||d&&d.type==="operatorname"&&d.alwaysHandleSupSub&&(t.style===Z.DISPLAY||d.limits)?s="munderover":s="msubsup"}else{var l=e.base;l&&l.type==="op"&&l.limits&&(t.style===Z.DISPLAY||l.alwaysHandleSupSub)||l&&l.type==="operatorname"&&l.alwaysHandleSupSub&&(l.limits||t.style===Z.DISPLAY)?s="munder":s="msub"}else{var o=e.base;o&&o.type==="op"&&o.limits&&(t.style===Z.DISPLAY||o.alwaysHandleSupSub)||o&&o.type==="operatorname"&&o.alwaysHandleSupSub&&(o.limits||t.style===Z.DISPLAY)?s="mover":s="msup"}return new D(s,i)}});fa({type:"atom",htmlBuilder(e,t){return Au(e.text,e.mode,t,["m"+e.family])},mathmlBuilder(e,t){var r=new D("mo",[Nt(e.text,e.mode)]);if(e.family==="bin"){var a=Lu(e,t);a==="bold-italic"&&r.setAttribute("mathvariant",a)}else e.family==="punct"?r.setAttribute("separator","true"):(e.family==="open"||e.family==="close")&&r.setAttribute("stretchy","false");return r}});var Gf={mi:"italic",mn:"normal",mtext:"normal"};fa({type:"mathord",htmlBuilder(e,t){return ao(e,t,"mathord")},mathmlBuilder(e,t){var r=new D("mi",[Nt(e.text,e.mode,t)]),a=Lu(e,t)||"italic";return a!==Gf[r.type]&&r.setAttribute("mathvariant",a),r}});fa({type:"textord",htmlBuilder(e,t){return ao(e,t,"textord")},mathmlBuilder(e,t){var r=Nt(e.text,e.mode,t),a=Lu(e,t)||"normal",n;return e.mode==="text"?n=new D("mtext",[r]):/[0-9]/.test(e.text)?n=new D("mn",[r]):e.text==="\\prime"?n=new D("mo",[r]):n=new D("mi",[r]),a!==Gf[n.type]&&n.setAttribute("mathvariant",a),n}});var il={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},sl={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};fa({type:"spacing",htmlBuilder(e,t){if(sl.hasOwnProperty(e.text)){var r=sl[e.text].className||"";if(e.mode==="text"){var a=ao(e,t,"textord");return a.classes.push(r),a}else return O(["mspace",r],[Au(e.text,e.mode,t)],t)}else{if(il.hasOwnProperty(e.text))return O(["mspace",il[e.text]],[],t);throw new z('Unknown type of space "'+e.text+'"')}},mathmlBuilder(e,t){var r;if(sl.hasOwnProperty(e.text))r=new D("mtext",[new Re(" ")]);else{if(il.hasOwnProperty(e.text))return new D("mspace");throw new z('Unknown type of space "'+e.text+'"')}return r}});var Jd=()=>{var e=new D("mtd",[]);return e.setAttribute("width","50%"),e};fa({type:"tag",mathmlBuilder(e,t){var r=new D("mtable",[new D("mtr",[Jd(),new D("mtd",[Hr(e.body,t)]),Jd(),new D("mtd",[Hr(e.tag,t)])])]);return r.setAttribute("width","100%"),r}});var Zd={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},em={"\\textbf":"textbf","\\textmd":"textmd"},E3={"\\textit":"textit","\\textup":"textup"},tm=(e,t)=>{var r=e.font;if(r){if(Zd[r])return t.withTextFontFamily(Zd[r]);if(em[r])return t.withTextFontWeight(em[r]);if(r==="\\emph")return t.fontShape==="textit"?t.withTextFontShape("textup"):t.withTextFontShape("textit")}else return t;return t.withTextFontShape(E3[r])};G({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(e,t){var{parser:r,funcName:a}=e,n=t[0];return{type:"text",mode:r.mode,body:Ne(n),font:a}},htmlBuilder(e,t){var r=tm(e,t),a=Pe(e.body,r,!0);return O(["mord","text"],a,r)},mathmlBuilder(e,t){var r=tm(e,t);return Hr(e.body,r)}});G({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:r}=e;return{type:"underline",mode:r.mode,body:t[0]}},htmlBuilder(e,t){var r=oe(e.body,t),a=Ka("underline-line",t),n=t.fontMetrics().defaultRuleThickness,i=se({positionType:"top",positionData:r.height,children:[{type:"kern",size:n},{type:"elem",elem:a},{type:"kern",size:3*n},{type:"elem",elem:r}]});return O(["mord","underline"],[i],t)},mathmlBuilder(e,t){var r=new D("mo",[new Re("‾")]);r.setAttribute("stretchy","true");var a=new D("munder",[ce(e.body,t),r]);return a.setAttribute("accentunder","true"),a}});G({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(e,t){var{parser:r}=e;return{type:"vcenter",mode:r.mode,body:t[0]}},htmlBuilder(e,t){var r=oe(e.body,t),a=t.fontMetrics().axisHeight,n=.5*(r.height-a-(r.depth+a));return se({positionType:"shift",positionData:n,children:[{type:"elem",elem:r}]})},mathmlBuilder(e,t){var r=new D("mpadded",[ce(e.body,t)],["vcenter"]);return new D("mrow",[r])}});G({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(e,t,r){throw new z("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(e,t){for(var r=rm(e),a=[],n=t.havingStyle(t.style.text()),i=0;i<r.length;i++){var s=r[i];s==="~"&&(s="\\textasciitilde"),a.push(Qe(s,"Typewriter-Regular",e.mode,n,["mord","texttt"]))}return O(["mord","text"].concat(n.sizingClasses(t)),sf(a),n)},mathmlBuilder(e,t){var r=new Re(rm(e)),a=new D("mtext",[r]);return a.setAttribute("mathvariant","monospace"),a}});var rm=e=>e.body.replace(/ /g,e.star?"␣":" "),Er=cf,Hf=`[ \r
	]`,N3="\\\\[a-zA-Z@]+",R3="\\\\[^\uD800-\uDFFF]",M3="("+N3+")"+Hf+"*",A3=`\\\\(
|[ \r	]+
?)[ \r	]*`,T0="[̀-ͯ]",I3=new RegExp(T0+"+$"),F3="("+Hf+"+)|"+(A3+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(T0+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(T0+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+M3)+("|"+R3+")");class am{constructor(t,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=t,this.settings=r,this.tokenRegex=new RegExp(F3,"g"),this.catcodes={"%":14,"~":13}}setCatcode(t,r){this.catcodes[t]=r}lex(){var t=this.input,r=this.tokenRegex.lastIndex;if(r===t.length)return new pt("EOF",new at(this,r,r));var a=this.tokenRegex.exec(t);if(a===null||a.index!==r)throw new z("Unexpected character: '"+t[r]+"'",new pt(t[r],new at(this,r,r+1)));var n=a[6]||a[3]||(a[2]?"\\ ":" ");if(this.catcodes[n]===14){var i=t.indexOf(`
`,this.tokenRegex.lastIndex);return i===-1?(this.tokenRegex.lastIndex=t.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=i+1,this.lex()}return new pt(n,new at(this,r,this.tokenRegex.lastIndex))}}class L3{constructor(t,r){t===void 0&&(t={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=t,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new z("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var t=this.undefStack.pop();for(var r in t)t.hasOwnProperty(r)&&(t[r]==null?delete this.current[r]:this.current[r]=t[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(t){return this.current.hasOwnProperty(t)||this.builtins.hasOwnProperty(t)}get(t){return this.current.hasOwnProperty(t)?this.current[t]:this.builtins[t]}set(t,r,a){if(a===void 0&&(a=!1),a){for(var n=0;n<this.undefStack.length;n++)delete this.undefStack[n][t];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][t]=r)}else{var i=this.undefStack[this.undefStack.length-1];i&&!i.hasOwnProperty(t)&&(i[t]=this.current[t])}r==null?delete this.current[t]:this.current[t]=r}}var O3=Ff;f("\\noexpand",function(e){var t=e.popToken();return e.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}});f("\\expandafter",function(e){var t=e.popToken();return e.expandOnce(!0),{tokens:[t],numArgs:0}});f("\\@firstoftwo",function(e){var t=e.consumeArgs(2);return{tokens:t[0],numArgs:0}});f("\\@secondoftwo",function(e){var t=e.consumeArgs(2);return{tokens:t[1],numArgs:0}});f("\\@ifnextchar",function(e){var t=e.consumeArgs(3);e.consumeSpaces();var r=e.future();return t[0].length===1&&t[0][0].text===r.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}});f("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");f("\\TextOrMath",function(e){var t=e.consumeArgs(2);return e.mode==="text"?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var nm={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};f("\\char",function(e){var t=e.popToken(),r,a=0;if(t.text==="'")r=8,t=e.popToken();else if(t.text==='"')r=16,t=e.popToken();else if(t.text==="`")if(t=e.popToken(),t.text[0]==="\\")a=t.text.charCodeAt(1);else{if(t.text==="EOF")throw new z("\\char` missing argument");a=t.text.charCodeAt(0)}else r=10;if(r){if(a=nm[t.text],a==null||a>=r)throw new z("Invalid base-"+r+" digit "+t.text);for(var n;(n=nm[e.future().text])!=null&&n<r;)a*=r,a+=n,e.popToken()}return"\\@char{"+a+"}"});var Bu=(e,t,r,a)=>{var n=e.consumeArg().tokens;if(n.length!==1)throw new z("\\newcommand's first argument must be a macro name");var i=n[0].text,s=e.isDefined(i);if(s&&!t)throw new z("\\newcommand{"+i+"} attempting to redefine "+(i+"; use \\renewcommand"));if(!s&&!r)throw new z("\\renewcommand{"+i+"} when command "+i+" does not yet exist; use \\newcommand");var o=0;if(n=e.consumeArg().tokens,n.length===1&&n[0].text==="["){for(var l="",d=e.expandNextToken();d.text!=="]"&&d.text!=="EOF";)l+=d.text,d=e.expandNextToken();if(!l.match(/^\s*[0-9]+\s*$/))throw new z("Invalid number of arguments: "+l);o=parseInt(l),n=e.consumeArg().tokens}return s&&a||e.macros.set(i,{tokens:n,numArgs:o}),""};f("\\newcommand",e=>Bu(e,!1,!0,!1));f("\\renewcommand",e=>Bu(e,!0,!1,!1));f("\\providecommand",e=>Bu(e,!0,!0,!0));f("\\message",e=>{var t=e.consumeArgs(1)[0];return console.log(t.reverse().map(r=>r.text).join("")),""});f("\\errmessage",e=>{var t=e.consumeArgs(1)[0];return console.error(t.reverse().map(r=>r.text).join("")),""});f("\\show",e=>{var t=e.popToken(),r=t.text;return console.log(t,e.macros.get(r),Er[r],fe.math[r],fe.text[r]),""});f("\\bgroup","{");f("\\egroup","}");f("~","\\nobreakspace");f("\\lq","`");f("\\rq","'");f("\\aa","\\r a");f("\\AA","\\r A");f("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");f("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");f("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");f("ℬ","\\mathscr{B}");f("ℰ","\\mathscr{E}");f("ℱ","\\mathscr{F}");f("ℋ","\\mathscr{H}");f("ℐ","\\mathscr{I}");f("ℒ","\\mathscr{L}");f("ℳ","\\mathscr{M}");f("ℛ","\\mathscr{R}");f("ℭ","\\mathfrak{C}");f("ℌ","\\mathfrak{H}");f("ℨ","\\mathfrak{Z}");f("\\Bbbk","\\Bbb{k}");f("\\llap","\\mathllap{\\textrm{#1}}");f("\\rlap","\\mathrlap{\\textrm{#1}}");f("\\clap","\\mathclap{\\textrm{#1}}");f("\\mathstrut","\\vphantom{(}");f("\\underbar","\\underline{\\text{#1}}");f("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');f("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");f("\\ne","\\neq");f("≠","\\neq");f("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");f("∉","\\notin");f("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");f("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");f("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");f("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");f("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");f("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");f("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");f("⟂","\\perp");f("‼","\\mathclose{!\\mkern-0.8mu!}");f("∌","\\notni");f("⌜","\\ulcorner");f("⌝","\\urcorner");f("⌞","\\llcorner");f("⌟","\\lrcorner");f("©","\\copyright");f("®","\\textregistered");f("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');f("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');f("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');f("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');f("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");f("⋮","\\vdots");f("\\varGamma","\\mathit{\\Gamma}");f("\\varDelta","\\mathit{\\Delta}");f("\\varTheta","\\mathit{\\Theta}");f("\\varLambda","\\mathit{\\Lambda}");f("\\varXi","\\mathit{\\Xi}");f("\\varPi","\\mathit{\\Pi}");f("\\varSigma","\\mathit{\\Sigma}");f("\\varUpsilon","\\mathit{\\Upsilon}");f("\\varPhi","\\mathit{\\Phi}");f("\\varPsi","\\mathit{\\Psi}");f("\\varOmega","\\mathit{\\Omega}");f("\\substack","\\begin{subarray}{c}#1\\end{subarray}");f("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");f("\\boxed","\\fbox{$\\displaystyle{#1}$}");f("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");f("\\implies","\\DOTSB\\;\\Longrightarrow\\;");f("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");f("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");f("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var im={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},P3=new Set(["bin","rel"]);f("\\dots",function(e){var t="\\dotso",r=e.expandAfterFuture().text;return r in im?t=im[r]:(r.slice(0,4)==="\\not"||r in fe.math&&P3.has(fe.math[r].group))&&(t="\\dotsb"),t});var $u={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};f("\\dotso",function(e){var t=e.future().text;return t in $u?"\\ldots\\,":"\\ldots"});f("\\dotsc",function(e){var t=e.future().text;return t in $u&&t!==","?"\\ldots\\,":"\\ldots"});f("\\cdots",function(e){var t=e.future().text;return t in $u?"\\@cdots\\,":"\\@cdots"});f("\\dotsb","\\cdots");f("\\dotsm","\\cdots");f("\\dotsi","\\!\\cdots");f("\\dotsx","\\ldots\\,");f("\\DOTSI","\\relax");f("\\DOTSB","\\relax");f("\\DOTSX","\\relax");f("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");f("\\,","\\tmspace+{3mu}{.1667em}");f("\\thinspace","\\,");f("\\>","\\mskip{4mu}");f("\\:","\\tmspace+{4mu}{.2222em}");f("\\medspace","\\:");f("\\;","\\tmspace+{5mu}{.2777em}");f("\\thickspace","\\;");f("\\!","\\tmspace-{3mu}{.1667em}");f("\\negthinspace","\\!");f("\\negmedspace","\\tmspace-{4mu}{.2222em}");f("\\negthickspace","\\tmspace-{5mu}{.277em}");f("\\enspace","\\kern.5em ");f("\\enskip","\\hskip.5em\\relax");f("\\quad","\\hskip1em\\relax");f("\\qquad","\\hskip2em\\relax");f("\\tag","\\@ifstar\\tag@literal\\tag@paren");f("\\tag@paren","\\tag@literal{({#1})}");f("\\tag@literal",e=>{if(e.macros.get("\\df@tag"))throw new z("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});f("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");f("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");f("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");f("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");f("\\newline","\\\\\\relax");f("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var qf=$(Ut["Main-Regular"][84][1]-.7*Ut["Main-Regular"][65][1]);f("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+qf+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");f("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+qf+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");f("\\hspace","\\@ifstar\\@hspacer\\@hspace");f("\\@hspace","\\hskip #1\\relax");f("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");f("\\ordinarycolon",":");f("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");f("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');f("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');f("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');f("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');f("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');f("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');f("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');f("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');f("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');f("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');f("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');f("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');f("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');f("∷","\\dblcolon");f("∹","\\eqcolon");f("≔","\\coloneqq");f("≕","\\eqqcolon");f("⩴","\\Coloneqq");f("\\ratio","\\vcentcolon");f("\\coloncolon","\\dblcolon");f("\\colonequals","\\coloneqq");f("\\coloncolonequals","\\Coloneqq");f("\\equalscolon","\\eqqcolon");f("\\equalscoloncolon","\\Eqqcolon");f("\\colonminus","\\coloneq");f("\\coloncolonminus","\\Coloneq");f("\\minuscolon","\\eqcolon");f("\\minuscoloncolon","\\Eqcolon");f("\\coloncolonapprox","\\Colonapprox");f("\\coloncolonsim","\\Colonsim");f("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");f("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");f("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");f("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");f("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");f("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");f("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");f("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");f("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");f("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");f("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");f("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");f("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");f("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");f("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");f("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");f("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");f("\\nleqq","\\html@mathml{\\@nleqq}{≰}");f("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");f("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");f("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");f("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");f("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");f("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");f("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");f("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");f("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");f("\\imath","\\html@mathml{\\@imath}{ı}");f("\\jmath","\\html@mathml{\\@jmath}{ȷ}");f("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");f("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");f("⟦","\\llbracket");f("⟧","\\rrbracket");f("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");f("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");f("⦃","\\lBrace");f("⦄","\\rBrace");f("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");f("⦵","\\minuso");f("\\darr","\\downarrow");f("\\dArr","\\Downarrow");f("\\Darr","\\Downarrow");f("\\lang","\\langle");f("\\rang","\\rangle");f("\\uarr","\\uparrow");f("\\uArr","\\Uparrow");f("\\Uarr","\\Uparrow");f("\\N","\\mathbb{N}");f("\\R","\\mathbb{R}");f("\\Z","\\mathbb{Z}");f("\\alef","\\aleph");f("\\alefsym","\\aleph");f("\\Alpha","\\mathrm{A}");f("\\Beta","\\mathrm{B}");f("\\bull","\\bullet");f("\\Chi","\\mathrm{X}");f("\\clubs","\\clubsuit");f("\\cnums","\\mathbb{C}");f("\\Complex","\\mathbb{C}");f("\\Dagger","\\ddagger");f("\\diamonds","\\diamondsuit");f("\\empty","\\emptyset");f("\\Epsilon","\\mathrm{E}");f("\\Eta","\\mathrm{H}");f("\\exist","\\exists");f("\\harr","\\leftrightarrow");f("\\hArr","\\Leftrightarrow");f("\\Harr","\\Leftrightarrow");f("\\hearts","\\heartsuit");f("\\image","\\Im");f("\\infin","\\infty");f("\\Iota","\\mathrm{I}");f("\\isin","\\in");f("\\Kappa","\\mathrm{K}");f("\\larr","\\leftarrow");f("\\lArr","\\Leftarrow");f("\\Larr","\\Leftarrow");f("\\lrarr","\\leftrightarrow");f("\\lrArr","\\Leftrightarrow");f("\\Lrarr","\\Leftrightarrow");f("\\Mu","\\mathrm{M}");f("\\natnums","\\mathbb{N}");f("\\Nu","\\mathrm{N}");f("\\Omicron","\\mathrm{O}");f("\\plusmn","\\pm");f("\\rarr","\\rightarrow");f("\\rArr","\\Rightarrow");f("\\Rarr","\\Rightarrow");f("\\real","\\Re");f("\\reals","\\mathbb{R}");f("\\Reals","\\mathbb{R}");f("\\Rho","\\mathrm{P}");f("\\sdot","\\cdot");f("\\sect","\\S");f("\\spades","\\spadesuit");f("\\sub","\\subset");f("\\sube","\\subseteq");f("\\supe","\\supseteq");f("\\Tau","\\mathrm{T}");f("\\thetasym","\\vartheta");f("\\weierp","\\wp");f("\\Zeta","\\mathrm{Z}");f("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");f("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");f("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");f("\\bra","\\mathinner{\\langle{#1}|}");f("\\ket","\\mathinner{|{#1}\\rangle}");f("\\braket","\\mathinner{\\langle{#1}\\rangle}");f("\\Bra","\\left\\langle#1\\right|");f("\\Ket","\\left|#1\\right\\rangle");var Wf=e=>t=>{var r=t.consumeArg().tokens,a=t.consumeArg().tokens,n=t.consumeArg().tokens,i=t.consumeArg().tokens,s=t.macros.get("|"),o=t.macros.get("\\|");t.macros.beginGroup();var l=m=>g=>{e&&(g.macros.set("|",s),n.length&&g.macros.set("\\|",o));var b=m;if(!m&&n.length){var _=g.future();_.text==="|"&&(g.popToken(),b=!0)}return{tokens:b?n:a,numArgs:0}};t.macros.set("|",l(!1)),n.length&&t.macros.set("\\|",l(!0));var d=t.consumeArg().tokens,h=t.expandTokens([...i,...d,...r]);return t.macros.endGroup(),{tokens:h.reverse(),numArgs:0}};f("\\bra@ket",Wf(!1));f("\\bra@set",Wf(!0));f("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");f("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");f("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");f("\\angln","{\\angl n}");f("\\blue","\\textcolor{##6495ed}{#1}");f("\\orange","\\textcolor{##ffa500}{#1}");f("\\pink","\\textcolor{##ff00af}{#1}");f("\\red","\\textcolor{##df0030}{#1}");f("\\green","\\textcolor{##28ae7b}{#1}");f("\\gray","\\textcolor{gray}{#1}");f("\\purple","\\textcolor{##9d38bd}{#1}");f("\\blueA","\\textcolor{##ccfaff}{#1}");f("\\blueB","\\textcolor{##80f6ff}{#1}");f("\\blueC","\\textcolor{##63d9ea}{#1}");f("\\blueD","\\textcolor{##11accd}{#1}");f("\\blueE","\\textcolor{##0c7f99}{#1}");f("\\tealA","\\textcolor{##94fff5}{#1}");f("\\tealB","\\textcolor{##26edd5}{#1}");f("\\tealC","\\textcolor{##01d1c1}{#1}");f("\\tealD","\\textcolor{##01a995}{#1}");f("\\tealE","\\textcolor{##208170}{#1}");f("\\greenA","\\textcolor{##b6ffb0}{#1}");f("\\greenB","\\textcolor{##8af281}{#1}");f("\\greenC","\\textcolor{##74cf70}{#1}");f("\\greenD","\\textcolor{##1fab54}{#1}");f("\\greenE","\\textcolor{##0d923f}{#1}");f("\\goldA","\\textcolor{##ffd0a9}{#1}");f("\\goldB","\\textcolor{##ffbb71}{#1}");f("\\goldC","\\textcolor{##ff9c39}{#1}");f("\\goldD","\\textcolor{##e07d10}{#1}");f("\\goldE","\\textcolor{##a75a05}{#1}");f("\\redA","\\textcolor{##fca9a9}{#1}");f("\\redB","\\textcolor{##ff8482}{#1}");f("\\redC","\\textcolor{##f9685d}{#1}");f("\\redD","\\textcolor{##e84d39}{#1}");f("\\redE","\\textcolor{##bc2612}{#1}");f("\\maroonA","\\textcolor{##ffbde0}{#1}");f("\\maroonB","\\textcolor{##ff92c6}{#1}");f("\\maroonC","\\textcolor{##ed5fa6}{#1}");f("\\maroonD","\\textcolor{##ca337c}{#1}");f("\\maroonE","\\textcolor{##9e034e}{#1}");f("\\purpleA","\\textcolor{##ddd7ff}{#1}");f("\\purpleB","\\textcolor{##c6b9fc}{#1}");f("\\purpleC","\\textcolor{##aa87ff}{#1}");f("\\purpleD","\\textcolor{##7854ab}{#1}");f("\\purpleE","\\textcolor{##543b78}{#1}");f("\\mintA","\\textcolor{##f5f9e8}{#1}");f("\\mintB","\\textcolor{##edf2df}{#1}");f("\\mintC","\\textcolor{##e0e5cc}{#1}");f("\\grayA","\\textcolor{##f6f7f7}{#1}");f("\\grayB","\\textcolor{##f0f1f2}{#1}");f("\\grayC","\\textcolor{##e3e5e6}{#1}");f("\\grayD","\\textcolor{##d6d8da}{#1}");f("\\grayE","\\textcolor{##babec2}{#1}");f("\\grayF","\\textcolor{##888d93}{#1}");f("\\grayG","\\textcolor{##626569}{#1}");f("\\grayH","\\textcolor{##3b3e40}{#1}");f("\\grayI","\\textcolor{##21242c}{#1}");f("\\kaBlue","\\textcolor{##314453}{#1}");f("\\kaGreen","\\textcolor{##71B307}{#1}");var Vf={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class z3{constructor(t,r,a){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(t),this.macros=new L3(O3,r.macros),this.mode=a,this.stack=[]}feed(t){this.lexer=new am(t,this.settings)}switchMode(t){this.mode=t}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(t){this.stack.push(t)}pushTokens(t){this.stack.push(...t)}scanArgument(t){var r,a,n;if(t){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:n,end:a}=this.consumeArg(["]"])}else({tokens:n,start:r,end:a}=this.consumeArg());return this.pushToken(new pt("EOF",a.loc)),this.pushTokens(n),new pt("",at.range(r,a))}consumeSpaces(){for(;;){var t=this.future();if(t.text===" ")this.stack.pop();else break}}consumeArg(t){var r=[],a=t&&t.length>0;a||this.consumeSpaces();var n=this.future(),i,s=0,o=0;do{if(i=this.popToken(),r.push(i),i.text==="{")++s;else if(i.text==="}"){if(--s,s===-1)throw new z("Extra }",i)}else if(i.text==="EOF")throw new z("Unexpected end of input in a macro argument, expected '"+(t&&a?t[o]:"}")+"'",i);if(t&&a)if((s===0||s===1&&t[o]==="{")&&i.text===t[o]){if(++o,o===t.length){r.splice(-o,o);break}}else o=0}while(s!==0||a);return n.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:n,end:i}}consumeArgs(t,r){if(r){if(r.length!==t+1)throw new z("The length of delimiters doesn't match the number of args!");for(var a=r[0],n=0;n<a.length;n++){var i=this.popToken();if(a[n]!==i.text)throw new z("Use of the macro doesn't match its definition",i)}}for(var s=[],o=0;o<t;o++)s.push(this.consumeArg(r&&r[o+1]).tokens);return s}countExpansion(t){if(this.expansionCount+=t,this.expansionCount>this.settings.maxExpand)throw new z("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(t){var r=this.popToken(),a=r.text,n=r.noexpand?null:this._getExpansion(a);if(n==null||t&&n.unexpandable){if(t&&n==null&&a[0]==="\\"&&!this.isDefined(a))throw new z("Undefined control sequence: "+a);return this.pushToken(r),!1}this.countExpansion(1);var i=n.tokens,s=this.consumeArgs(n.numArgs,n.delimiters);if(n.numArgs){i=i.slice();for(var o=i.length-1;o>=0;--o){var l=i[o];if(l.text==="#"){if(o===0)throw new z("Incomplete placeholder at end of macro body",l);if(l=i[--o],l.text==="#")i.splice(o+1,1);else if(/^[1-9]$/.test(l.text))i.splice(o,2,...s[+l.text-1]);else throw new z("Not a valid argument number",l)}}}return this.pushTokens(i),i.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var t=this.stack.pop();return t.treatAsRelax&&(t.text="\\relax"),t}}expandMacro(t){return this.macros.has(t)?this.expandTokens([new pt(t)]):void 0}expandTokens(t){var r=[],a=this.stack.length;for(this.pushTokens(t);this.stack.length>a;)if(this.expandOnce(!0)===!1){var n=this.stack.pop();n.treatAsRelax&&(n.noexpand=!1,n.treatAsRelax=!1),r.push(n)}return this.countExpansion(r.length),r}expandMacroAsText(t){var r=this.expandMacro(t);return r&&r.map(a=>a.text).join("")}_getExpansion(t){var r=this.macros.get(t);if(r==null)return r;if(t.length===1){var a=this.lexer.catcodes[t];if(a!=null&&a!==13)return}var n=typeof r=="function"?r(this):r;if(typeof n=="string"){var i=0;if(n.includes("#"))for(var s=n.replace(/##/g,"");s.includes("#"+(i+1));)++i;for(var o=new am(n,this.settings),l=[],d=o.lex();d.text!=="EOF";)l.push(d),d=o.lex();l.reverse();var h={tokens:l,numArgs:i};return h}return n}isDefined(t){return this.macros.has(t)||Er.hasOwnProperty(t)||fe.math.hasOwnProperty(t)||fe.text.hasOwnProperty(t)||Vf.hasOwnProperty(t)}isExpandable(t){var r=this.macros.get(t);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:Er.hasOwnProperty(t)&&!Er[t].primitive}}var sm=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,ji=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),ol={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},om={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class po{constructor(t,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new z3(t,r,this.mode),this.settings=r,this.leftrightDepth=0,this.nextToken=null}expect(t,r){if(r===void 0&&(r=!0),this.fetch().text!==t)throw new z("Expected '"+t+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(t){this.mode=t,this.gullet.switchMode(t)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var t=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),t}finally{this.gullet.endGroups()}}subparse(t){var r=this.nextToken;this.consume(),this.gullet.pushToken(new pt("}")),this.gullet.pushTokens(t);var a=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,a}parseExpression(t,r){for(var a=[];;){this.mode==="math"&&this.consumeSpaces();var n=this.fetch();if(po.endOfExpression.has(n.text)||r&&n.text===r||t&&Er[n.text]&&Er[n.text].infix)break;var i=this.parseAtom(r);if(i){if(i.type==="internal")continue}else break;a.push(i)}return this.mode==="text"&&this.formLigatures(a),this.handleInfixNodes(a)}handleInfixNodes(t){for(var r=-1,a,n=0;n<t.length;n++){var i=t[n];if(i.type==="infix"){if(r!==-1)throw new z("only one infix operator per group",i.token);r=n,a=i.replaceWith}}if(r!==-1&&a){var s,o,l=t.slice(0,r),d=t.slice(r+1);l.length===1&&l[0].type==="ordgroup"?s=l[0]:s={type:"ordgroup",mode:this.mode,body:l},d.length===1&&d[0].type==="ordgroup"?o=d[0]:o={type:"ordgroup",mode:this.mode,body:d};var h;return a==="\\\\abovefrac"?h=this.callFunction(a,[s,t[r],o],[]):h=this.callFunction(a,[s,o],[]),[h]}else return t}handleSupSubscript(t){var r=this.fetch(),a=r.text;this.consume(),this.consumeSpaces();var n;do{var i;n=this.parseGroup(t)}while(((i=n)==null?void 0:i.type)==="internal");if(!n)throw new z("Expected group after '"+a+"'",r);return n}formatUnsupportedCmd(t){for(var r=[],a=0;a<t.length;a++)r.push({type:"textord",mode:"text",text:t[a]});var n={type:"text",mode:this.mode,body:r},i={type:"color",mode:this.mode,color:this.settings.errorColor,body:[n]};return i}parseAtom(t){var r=this.parseGroup("atom",t);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var a,n;;){this.consumeSpaces();var i=this.fetch();if(i.text==="\\limits"||i.text==="\\nolimits"){if(r&&r.type==="op"){var s=i.text==="\\limits";r.limits=s,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=i.text==="\\limits");else throw new z("Limit controls must follow a math operator",i);this.consume()}else if(i.text==="^"){if(a)throw new z("Double superscript",i);a=this.handleSupSubscript("superscript")}else if(i.text==="_"){if(n)throw new z("Double subscript",i);n=this.handleSupSubscript("subscript")}else if(i.text==="'"){if(a)throw new z("Double superscript",i);var o={type:"textord",mode:this.mode,text:"\\prime"},l=[o];for(this.consume();this.fetch().text==="'";)l.push(o),this.consume();this.fetch().text==="^"&&l.push(this.handleSupSubscript("superscript")),a={type:"ordgroup",mode:this.mode,body:l}}else if(ji[i.text]){var d=sm.test(i.text),h=[];for(h.push(new pt(ji[i.text])),this.consume();;){var m=this.fetch().text;if(!ji[m]||sm.test(m)!==d)break;h.unshift(new pt(ji[m])),this.consume()}var g=this.subparse(h);d?n={type:"ordgroup",mode:"math",body:g}:a={type:"ordgroup",mode:"math",body:g}}else break}return a||n?{type:"supsub",mode:this.mode,base:r,sup:a,sub:n}:r}parseFunction(t,r){var a=this.fetch(),n=a.text,i=Er[n];if(!i)return null;if(this.consume(),r&&r!=="atom"&&!i.allowedInArgument)throw new z("Got function '"+n+"' with no arguments"+(r?" as "+r:""),a);if(this.mode==="text"&&!i.allowedInText)throw new z("Can't use function '"+n+"' in text mode",a);if(this.mode==="math"&&i.allowedInMath===!1)throw new z("Can't use function '"+n+"' in math mode",a);var{args:s,optArgs:o}=this.parseArguments(n,i);return this.callFunction(n,s,o,a,t)}callFunction(t,r,a,n,i){var s={funcName:t,parser:this,token:n,breakOnTokenText:i},o=Er[t];if(o&&o.handler)return o.handler(s,r,a);throw new z("No function handler for "+t)}parseArguments(t,r){var a=r.numArgs+r.numOptionalArgs;if(a===0)return{args:[],optArgs:[]};for(var n=[],i=[],s=0;s<a;s++){var o=r.argTypes&&r.argTypes[s],l=s<r.numOptionalArgs;("primitive"in r&&r.primitive&&o==null||r.type==="sqrt"&&s===1&&i[0]==null)&&(o="primitive");var d=this.parseGroupOfType("argument to '"+t+"'",o,l);if(l)i.push(d);else if(d!=null)n.push(d);else throw new z("Null argument, please report this as a bug")}return{args:n,optArgs:i}}parseGroupOfType(t,r,a){switch(r){case"color":return this.parseColorGroup(a);case"size":return this.parseSizeGroup(a);case"url":return this.parseUrlGroup(a);case"math":case"text":return this.parseArgumentGroup(a,r);case"hbox":{var n=this.parseArgumentGroup(a,"text");return n!=null?{type:"styling",mode:n.mode,body:[n],style:"text",resetFont:!0}:null}case"raw":{var i=this.parseStringGroup("raw",a);return i!=null?{type:"raw",mode:"text",string:i.text}:null}case"primitive":{if(a)throw new z("A primitive argument cannot be optional");var s=this.parseGroup(t);if(s==null)throw new z("Expected group as "+t,this.fetch());return s}case"original":case null:case void 0:return this.parseArgumentGroup(a);default:throw new z("Unknown group type as "+t,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(t,r){var a=this.gullet.scanArgument(r);if(a==null)return null;for(var n="",i;(i=this.fetch()).text!=="EOF";)n+=i.text,this.consume();return this.consume(),a.text=n,a}parseRegexGroup(t,r){for(var a=this.fetch(),n=a,i="",s;(s=this.fetch()).text!=="EOF"&&t.test(i+s.text);)n=s,i+=n.text,this.consume();if(i==="")throw new z("Invalid "+r+": '"+a.text+"'",a);return a.range(n,i)}parseColorGroup(t){var r=this.parseStringGroup("color",t);if(r==null)return null;var a=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!a)throw new z("Invalid color: '"+r.text+"'",r);var n=a[0];return/^[0-9a-f]{6}$/i.test(n)&&(n="#"+n),{type:"color-token",mode:this.mode,color:n}}parseSizeGroup(t){var r,a=!1;if(this.gullet.consumeSpaces(),!t&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",t),!r)return null;!t&&r.text.length===0&&(r.text="0pt",a=!0);var n=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!n)throw new z("Invalid size: '"+r.text+"'",r);var i={number:+(n[1]+n[2]),unit:n[3]};if(!ef(i))throw new z("Invalid unit: '"+i.unit+"'",r);return{type:"size",mode:this.mode,value:i,isBlank:a}}parseUrlGroup(t){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",t);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var a=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:a}}parseArgumentGroup(t,r){var a=this.gullet.scanArgument(t);if(a==null)return null;var n=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var i=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var s={type:"ordgroup",mode:this.mode,loc:a.loc,body:i};return r&&this.switchMode(n),s}parseGroup(t,r){var a=this.fetch(),n=a.text,i;if(n==="{"||n==="\\begingroup"){this.consume();var s=n==="{"?"}":"\\endgroup";this.gullet.beginGroup();var o=this.parseExpression(!1,s),l=this.fetch();this.expect(s),this.gullet.endGroup(),i={type:"ordgroup",mode:this.mode,loc:at.range(a,l),body:o,semisimple:n==="\\begingroup"||void 0}}else if(i=this.parseFunction(r,t)||this.parseSymbol(),i==null&&n[0]==="\\"&&!Vf.hasOwnProperty(n)){if(this.settings.throwOnError)throw new z("Undefined control sequence: "+n,a);i=this.formatUnsupportedCmd(n),this.consume()}return i}formLigatures(t){for(var r=t.length-1,a=0;a<r;++a){var n=t[a];if(n.type==="textord"){var i=n.text,s=t[a+1];if(!(!s||s.type!=="textord")){if(i==="-"&&s.text==="-"){var o=t[a+2];a+1<r&&o&&o.type==="textord"&&o.text==="-"?(t.splice(a,3,{type:"textord",mode:"text",loc:at.range(n,o),text:"---"}),r-=2):(t.splice(a,2,{type:"textord",mode:"text",loc:at.range(n,s),text:"--"}),r-=1)}(i==="'"||i==="`")&&s.text===i&&(t.splice(a,2,{type:"textord",mode:"text",loc:at.range(n,s),text:i+i}),r-=1)}}}}parseSymbol(){var t=this.fetch(),r=t.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var a=r.slice(5),n=a.charAt(0)==="*";if(n&&(a=a.slice(1)),a.length<2||a.charAt(0)!==a.slice(-1))throw new z(`\\verb assertion failed --
                    please report what input caused this bug`);return a=a.slice(1,-1),{type:"verb",mode:"text",body:a,star:n}}om.hasOwnProperty(r[0])&&!fe[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',t),r=om[r[0]]+r.slice(1));var i=I3.exec(r);i&&(r=r.substring(0,i.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var s;if(fe[this.mode][r]){this.settings.strict&&this.mode==="math"&&c0.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',t);var o=fe[this.mode][r].group,l=at.range(t),d;Z5(o)?d={type:"atom",mode:this.mode,family:o,loc:l,text:r}:d={type:o,mode:this.mode,loc:l,text:r},s=d}else if(r.charCodeAt(0)>=128)this.settings.strict&&(Zp(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',t):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),t)),s={type:"textord",mode:"text",loc:at.range(t),text:r};else return null;if(this.consume(),i)for(var h=0;h<i[0].length;h++){var m=i[0][h];if(!ol[m])throw new z("Unknown accent ' "+m+"'",t);var g=ol[m][this.mode]||ol[m].text;if(!g)throw new z("Accent "+m+" unsupported in "+this.mode+" mode",t);s={type:"accent",mode:this.mode,loc:at.range(t),label:g,isStretchy:!1,isShifty:!0,base:s}}return s}}po.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var ju=function(t,r){if(!(typeof t=="string"||t instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var a=new po(t,r);delete a.gullet.macros.current["\\df@tag"];var n=a.parse();if(delete a.gullet.macros.current["\\current@color"],delete a.gullet.macros.current["\\color"],a.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new z("\\tag works only in display equations");n=[{type:"tag",mode:"text",body:n,tag:a.subparse([new pt("\\df@tag")])}]}return n},Xf=function(t,r,a){r.textContent="";var n=Uu(t,a).toNode();r.appendChild(n)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),Xf=function(){throw new z("KaTeX doesn't work in quirks mode.")});var D3=function(t,r){var a=Uu(t,r).toMarkup();return a},B3=function(t,r){var a=new Eu(r);return ju(t,a)},Kf=function(t,r,a){if(a.throwOnError||!(t instanceof z))throw t;var n=O(["katex-error"],[new gt(r)]);return n.setAttribute("title",t.toString()),n.setAttribute("style","color:"+a.errorColor),n},Uu=function(t,r){var a=new Eu(r);try{var n=ju(t,a);return q5(n,t,a)}catch(i){return Kf(i,t,a)}},$3=function(t,r){var a=new Eu(r);try{var n=ju(t,a);return W5(n,t,a)}catch(i){return Kf(i,t,a)}},j3="0.16.47",U3={Span:sn,Anchor:to,SymbolNode:gt,SvgNode:cr,PathNode:Ur,LineNode:u0},_0={version:j3,render:Xf,renderToString:D3,ParseError:z,SETTINGS_SCHEMA:s0,__parse:B3,__renderToDomTree:Uu,__renderToHTMLTree:$3,__setFontMetrics:C5,__defineSymbol:u,__defineFunction:G,__defineMacro:f,__domTree:U3};function Yf({topic:e,isCompleted:t,onMarkComplete:r,allTopics:a,currentTopicIndex:n,onNavigate:i}){const s=M.useRef(null),o=n>0?a[n-1]:null,l=n<a.length-1?a[n+1]:null;M.useEffect(()=>{var h;s.current&&(()=>{const g=document.createTreeWalker(s.current,NodeFilter.SHOW_TEXT,null,!1),b=[];let _;for(;_=g.nextNode();)b.push(_);b.forEach(T=>{const N=T.textContent;if(N.includes("$$")){const w=N.split(/(\$\$[\s\S]*?\$\$)/);if(w.length>1){const v=document.createDocumentFragment();w.forEach(x=>{if(x.startsWith("$$")&&x.endsWith("$$")){const E=x.slice(2,-2).trim(),R=document.createElement("span");R.className="katex-display-wrapper";try{_0.render(E,R,{throwOnError:!1,displayMode:!0})}catch{R.textContent=E}v.appendChild(R)}else v.appendChild(document.createTextNode(x))}),T.parentNode.replaceChild(v,T)}}})})(),(h=s.current)==null||h.scrollTo(0,0)},[e.slug]);const d=h=>h?h.replace(/\$\$([\s\S]*?)\$\$/g,(b,_)=>{try{return _0.renderToString(_.trim(),{throwOnError:!1,displayMode:!0})}catch{return`<code>${_}</code>`}}).split(/(?=^## )/gm).filter(b=>b.trim()).map(b=>{const _=b.split(`
`);let T="",N=!1,w=[],v=[],x=!1,E="",R=[];for(let A=0;A<_.length;A++){const I=_[A],F=I.trim();if(F.startsWith("```")){x?(T+=W3(E,R.join(`
`)),x=!1,E="",R=[]):(x=!0,E=F.slice(3).trim(),R=[]);continue}if(x){R.push(I);continue}if(F===""){N&&w.length>0&&(T+=ll(v,w),w=[],v=[],N=!1);continue}if(F.startsWith("|")&&F.endsWith("|")){if(F.includes("---"))continue;const te=F.split("|").slice(1,-1).map(ne=>ne.trim());N?w.push(te):(v=te,N=!0);continue}else N&&(T+=ll(v,w),w=[],v=[],N=!1);if(F.startsWith("## ")){const B=F.slice(3);T+=`<div class="ml-section-header"><span class="ml-section-icon">${G3(B)}</span><h2>${xr(B)}</h2></div>`;continue}if(F.startsWith("### ")){T+=`<h3 class="ml-subsection-header">${xr(F.slice(4))}</h3>`;continue}if(F==="---"){T+='<hr class="ml-divider" />';continue}if(F.startsWith("> ")){const B=F.slice(2),te=H3(B);T+=`<div class="ml-callout ml-callout-${te}">
            <div class="ml-callout-icon">${q3(te)}</div>
            <div class="ml-callout-content">${xr(B)}</div>
          </div>`;continue}if(F.startsWith("- ")){T+=`<div class="ml-list-item">
            <span class="ml-bullet">•</span>
            <span>${xr(F.slice(2))}</span>
          </div>`;continue}const U=F.match(/^(\d+)\.\s+(.+)/);if(U){T+=`<div class="ml-numbered-item">
            <span class="ml-number">${U[1]}</span>
            <span>${xr(U[2])}</span>
          </div>`;continue}T+=`<p class="ml-paragraph">${xr(F)}</p>`}return N&&w.length>0&&(T+=ll(v,w)),T}).join(""):"";return y.jsxs("div",{className:"max-w-4xl mx-auto px-10 py-10",children:[y.jsxs("div",{className:"flex items-start justify-between mb-10",children:[y.jsxs("div",{children:[y.jsxs("span",{className:"text-xs font-mono text-purple-500 dark:text-purple-400 mb-2 block tracking-wider uppercase",children:["Topic ",n+1," of ",a.length]}),y.jsxs("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3",children:[y.jsx(Op,{className:"w-8 h-8 text-purple-500"}),e.title]})]}),y.jsx("button",{onClick:r,className:`
            flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 shadow-sm
            ${t?"bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800":"bg-white dark:bg-slate-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-600 border border-gray-200 dark:border-slate-600"}
          `,children:t?y.jsxs(y.Fragment,{children:[y.jsx(rn,{className:"w-4 h-4"}),"Completed"]}):y.jsxs(y.Fragment,{children:[y.jsx(W2,{className:"w-4 h-4"}),"Mark as Read"]})})]}),y.jsx("div",{ref:s,className:"ml-content",dangerouslySetInnerHTML:{__html:d(e.content)}}),y.jsxs("div",{className:"flex items-center justify-between mt-16 pt-8 border-t border-gray-200 dark:border-slate-600",children:[o?y.jsxs("button",{onClick:()=>i(o.slug),className:"flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors border border-gray-200 dark:border-slate-600",children:[y.jsx(ku,{className:"w-4 h-4"}),y.jsxs("div",{className:"text-left",children:[y.jsx("div",{className:"text-xs text-gray-400 dark:text-gray-500",children:"Previous"}),y.jsx("div",{children:o.title})]})]}):y.jsx("div",{}),l?y.jsxs("button",{onClick:()=>i(l.slug),className:"flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-medium text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/20 transition-colors border border-purple-200 dark:border-purple-800",children:[y.jsxs("div",{className:"text-right",children:[y.jsx("div",{className:"text-xs text-purple-400 dark:text-purple-500",children:"Next"}),y.jsx("div",{children:l.title})]}),y.jsx(Tu,{className:"w-4 h-4"})]}):y.jsx("div",{})]})]})}function xr(e){return e.replace(/\*\*(.+?)\*\*/g,'<strong class="ml-bold">$1</strong>').replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`(.+?)`/g,'<code class="ml-inline-code">$1</code>').replace(/\$(.+?)\$/g,(t,r)=>{try{return _0.renderToString(r,{throwOnError:!1,displayMode:!1})}catch{return`<span class="ml-formula-inline">${r}</span>`}})}function G3(e){const t=e.toLowerCase();return t.includes("example")||t.includes("when to")?"💡":t.includes("advantage")||t.includes("disadvantage")?"⚖️":t.includes("interview")||t.includes("tip")?"🎯":t.includes("algorithm")||t.includes("how")?"⚙️":t.includes("metric")||t.includes("evaluation")||t.includes("score")?"📊":t.includes("cost")||t.includes("loss")||t.includes("error")?"📉":t.includes("curve")||t.includes("roc")||t.includes("pr ")?"📈":t.includes("confusion")||t.includes("matrix")?"🔢":t.includes("precision")||t.includes("recall")||t.includes("f1")?"🎯":t.includes("regularization")?"🔧":t.includes("split")||t.includes("pruning")?"🌳":t.includes("boost")||t.includes("ensemble")||t.includes("random forest")?"🌲":t.includes("distance")||t.includes("cluster")?"📍":t.includes("pca")||t.includes("dimension")?"📐":t.includes("cross-validation")||t.includes("tuning")?"🔄":t.includes("feature")||t.includes("scaling")?"🛠️":t.includes("summary")||t.includes("which")?"📋":t.includes("threshold")?"🎚️":t.includes("log-loss")||t.includes("logloss")?"📝":t.includes("kappa")||t.includes("mcc")?"✅":"📌"}function H3(e){return e.includes("💡")||e.toLowerCase().includes("tip")||e.toLowerCase().includes("interview")?"tip":e.includes("⚠️")||e.toLowerCase().includes("common mistake")||e.toLowerCase().includes("pitfall")||e.toLowerCase().includes("never")?"warning":e.includes("🎯")||e.toLowerCase().includes("gold")?"gold":"info"}function q3(e){switch(e){case"tip":return"💡";case"warning":return"⚠️";case"gold":return"🎯";default:return"ℹ️"}}function ll(e,t){if(!e.length||!t.length)return"";const r=e.length,a=t.map(n=>{const i=[...n];for(;i.length<r;)i.push("");return i.slice(0,r)});return`
    <div class="ml-table-wrapper">
      <table class="ml-table">
        <colgroup>
          ${e.map(()=>"<col />").join("")}
        </colgroup>
        <thead>
          <tr>
            ${e.map(n=>`<th>${xr(n)}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${a.map(n=>`
            <tr>
              ${n.map(i=>`<td>${xr(i)}</td>`).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function W3(e,t){const r=t.replace(/\x26/g,"&amp;").replace(/\x3c/g,"&lt;").replace(/\x3e/g,"&gt;"),a=e==="python"||e==="py"?V3(r):r;return`
    <div class="ml-code-block-wrapper">
      <div class="ml-code-block-header">
        <div class="ml-code-block-dots">
          <span></span><span></span><span></span>
        </div>
        <span class="ml-code-block-lang">${e||"code"}</span>
      </div>
      <pre class="ml-code-block"><code>${a}</code></pre>
    </div>
  `}function V3(e){const t="\0>",r="\0SPO\0",a="\0SPC\0";let n=e.replace(/<span class="([^"]+)">/g,(d,h)=>`${r}${h}${t}`);n=n.replace(/<\/span>/g,a),n=n.replace(/(#.*)$/gm,`${r}py-cm${t}$1${a}`),n=n.replace(/("""[\s\S]*?"""|'''[\s\S]*?''')/g,`${r}py-str${t}$1${a}`),n=n.replace(/((?:f|r|b|fr|rf|br|rb)?"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g,`${r}py-str${t}$1${a}`),n=n.replace(/(@[\w.]+)/g,`${r}py-dec${t}$1${a}`);const i=["def","class","return","if","elif","else","for","while","in","import","from","as","with","try","except","finally","raise","pass","break","continue","and","or","not","is","None","True","False","lambda","yield","global","nonlocal","assert","del","print"],s=new RegExp(`\\b(${i.join("|")})\\b`,"g");n=n.replace(s,`${r}py-kw${t}$1${a}`);const o=["range","len","int","float","str","list","dict","set","tuple","type","isinstance","sorted","enumerate","zip","map","filter","min","max","sum","abs","round","open","input","super","property"],l=new RegExp(`\\b(${o.join("|")})\\b(?=\\()`,"g");return n=n.replace(l,`${r}py-bi${t}$1${a}`),n=n.replace(/\b(def\s+)(\w+)/g,`$1${r}py-fn${t}$2${a}`),n=n.replace(new RegExp("(?<![.\\w\\x00])(\\w+)(?=\\()","g"),d=>i.includes(d)||o.includes(d)?d:`${r}py-fn${t}${d}${a}`),n=n.replace(/\b(\d+\.?\d*)\b/g,`${r}py-num${t}$1${a}`),n=n.replace(/\x00SPO\x00([^\x00]+?)\x00>/g,'<span class="$1">'),n=n.replace(/\x00SPC\x00/g,"</span>"),n}function lm(){const{topicSlug:e}=Js(),t=pa(),{mlCompleted:r,markMLCompleted:a}=an(),n=M.useMemo(()=>e?Kr.find(i=>i.slug===e):Kr[0],[e]);return M.useEffect(()=>{Kr.length>0&&!e&&t(`/ml/${Kr[0].slug}`,{replace:!0})},[]),n?y.jsxs("div",{className:"h-full flex min-h-0",children:[y.jsx("div",{className:"w-[280px] border-r border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shrink-0",children:y.jsx(Jp,{topics:Kr,currentSlug:n.slug,completedSlugs:r})}),y.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-thin",children:y.jsx(Yf,{topic:n,isCompleted:r.has(n.slug),onMarkComplete:()=>a(n.slug),allTopics:Kr,currentTopicIndex:Kr.findIndex(i=>i.slug===n.slug),onNavigate:i=>t(`/ml/${i}`)})})]}):y.jsx("div",{className:"flex items-center justify-center h-full",children:y.jsx("p",{className:"text-gray-500",children:"No topics found."})})}const X3="modulepreload",K3=function(e){return"/datacrack/"+e},um={},Y3=function(t,r,a){let n=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(r.map(l=>{if(l=K3(l),l in um)return;um[l]=!0;const d=l.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":X3,d||(m.as="script"),m.crossOrigin="",m.href=l,o&&m.setAttribute("nonce",o),document.head.appendChild(m),d)return new Promise((g,b)=>{m.addEventListener("load",g),m.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return n.then(s=>{for(const o of s||[])o.status==="rejected"&&i(o.reason);return t().catch(i)})},Q3=M.lazy(()=>Y3(()=>import("./DecisionTreeDiagram-Dp3fgJaH.js"),[])),cm={"decision-trees":Q3};function dm(){const{topicSlug:e}=Js(),t=pa(),{conceptCompleted:r,markConceptCompleted:a}=an(),n=M.useMemo(()=>e?Zt.find(i=>i.slug===e):Zt[0]||null,[e]);return M.useEffect(()=>{Zt.length>0&&!e&&t(`/Concepts/${Zt[0].slug}`,{replace:!0})},[]),n?y.jsxs("div",{className:"h-full flex min-h-0",children:[y.jsx("div",{className:"w-[280px] border-r border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shrink-0",children:y.jsx(Jp,{topics:Zt,currentSlug:n.slug,completedSlugs:r,routePrefix:"/Concepts"})}),y.jsxs("div",{className:"flex-1 overflow-y-auto scrollbar-thin",children:[cm[n.slug]&&y.jsx("div",{className:"max-w-4xl mx-auto px-10 pt-10",children:y.jsx(M.Suspense,{fallback:null,children:(()=>{const i=cm[n.slug];return y.jsx(i,{})})()})}),y.jsx(Yf,{topic:n,isCompleted:r.has(n.slug),onMarkComplete:()=>a(n.slug),allTopics:Zt,currentTopicIndex:Zt.findIndex(i=>i.slug===n.slug),onNavigate:i=>t(`/Concepts/${i}`)})]})]}):y.jsx("div",{className:"flex items-center justify-center h-full",children:y.jsx("p",{className:"text-gray-500",children:"No concept topics found. Add .jsx files to src/pages/Concepts/."})})}function J3(){return y.jsx(C2,{children:y.jsxs(At,{path:"/",element:y.jsx(_y,{}),children:[y.jsx(At,{index:!0,element:y.jsx(k2,{to:"/python",replace:!0})}),y.jsx(At,{path:"python",element:y.jsx(Sd,{})}),y.jsx(At,{path:"python/:questionId",element:y.jsx(Sd,{})}),y.jsx(At,{path:"sql",element:y.jsx(kd,{})}),y.jsx(At,{path:"sql/:questionId",element:y.jsx(kd,{})}),y.jsx(At,{path:"ml",element:y.jsx(lm,{})}),y.jsx(At,{path:"ml/:topicSlug",element:y.jsx(lm,{})}),y.jsx(At,{path:"Concepts",element:y.jsx(dm,{})}),y.jsx(At,{path:"Concepts/:topicSlug",element:y.jsx(dm,{})})]})})}ul.createRoot(document.getElementById("root")).render(y.jsx(Nr.StrictMode,{children:y.jsx(L2,{children:y.jsx(ky,{children:y.jsx(ny,{children:y.jsx(J3,{})})})})}));export{y as j};
