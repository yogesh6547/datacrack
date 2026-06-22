function af(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(n,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();function sf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mm={exports:{}},Os={},hm={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ri=Symbol.for("react.element"),of=Symbol.for("react.portal"),lf=Symbol.for("react.fragment"),uf=Symbol.for("react.strict_mode"),cf=Symbol.for("react.profiler"),df=Symbol.for("react.provider"),mf=Symbol.for("react.context"),hf=Symbol.for("react.forward_ref"),pf=Symbol.for("react.suspense"),ff=Symbol.for("react.memo"),gf=Symbol.for("react.lazy"),Qu=Symbol.iterator;function vf(e){return e===null||typeof e!="object"?null:(e=Qu&&e[Qu]||e["@@iterator"],typeof e=="function"?e:null)}var pm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fm=Object.assign,gm={};function Jn(e,t,r){this.props=e,this.context=t,this.refs=gm,this.updater=r||pm}Jn.prototype.isReactComponent={};Jn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vm(){}vm.prototype=Jn.prototype;function E0(e,t,r){this.props=e,this.context=t,this.refs=gm,this.updater=r||pm}var N0=E0.prototype=new vm;N0.constructor=E0;fm(N0,Jn.prototype);N0.isPureReactComponent=!0;var Ju=Array.isArray,ym=Object.prototype.hasOwnProperty,A0={current:null},wm={key:!0,ref:!0,__self:!0,__source:!0};function xm(e,t,r){var n,a={},i=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)ym.call(t,n)&&!wm.hasOwnProperty(n)&&(a[n]=t[n]);var o=arguments.length-2;if(o===1)a.children=r;else if(1<o){for(var l=Array(o),d=0;d<o;d++)l[d]=arguments[d+2];a.children=l}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)a[n]===void 0&&(a[n]=o[n]);return{$$typeof:ri,type:e,key:i,ref:s,props:a,_owner:A0.current}}function yf(e,t){return{$$typeof:ri,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function R0(e){return typeof e=="object"&&e!==null&&e.$$typeof===ri}function wf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Zu=/\/+/g;function go(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wf(""+e.key):t.toString(36)}function Ui(e,t,r,n,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ri:case of:s=!0}}if(s)return s=e,a=a(s),e=n===""?"."+go(s,0):n,Ju(a)?(r="",e!=null&&(r=e.replace(Zu,"$&/")+"/"),Ui(a,t,r,"",function(d){return d})):a!=null&&(R0(a)&&(a=yf(a,r+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(Zu,"$&/")+"/")+e)),t.push(a)),1;if(s=0,n=n===""?".":n+":",Ju(e))for(var o=0;o<e.length;o++){i=e[o];var l=n+go(i,o);s+=Ui(i,t,r,l,a)}else if(l=vf(e),typeof l=="function")for(e=l.call(e),o=0;!(i=e.next()).done;)i=i.value,l=n+go(i,o++),s+=Ui(i,t,r,l,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function fi(e,t,r){if(e==null)return e;var n=[],a=0;return Ui(e,n,"","",function(i){return t.call(r,i,a++)}),n}function xf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var et={current:null},Hi={transition:null},bf={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:Hi,ReactCurrentOwner:A0};function bm(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:fi,forEach:function(e,t,r){fi(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return fi(e,function(){t++}),t},toArray:function(e){return fi(e,function(t){return t})||[]},only:function(e){if(!R0(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=Jn;ae.Fragment=lf;ae.Profiler=cf;ae.PureComponent=E0;ae.StrictMode=uf;ae.Suspense=pf;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bf;ae.act=bm;ae.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=fm({},e.props),a=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=A0.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)ym.call(t,l)&&!wm.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&o!==void 0?o[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){o=Array(l);for(var d=0;d<l;d++)o[d]=arguments[d+2];n.children=o}return{$$typeof:ri,type:e.type,key:a,ref:i,props:n,_owner:s}};ae.createContext=function(e){return e={$$typeof:mf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:df,_context:e},e.Consumer=e};ae.createElement=xm;ae.createFactory=function(e){var t=xm.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:hf,render:e}};ae.isValidElement=R0;ae.lazy=function(e){return{$$typeof:gf,_payload:{_status:-1,_result:e},_init:xf}};ae.memo=function(e,t){return{$$typeof:ff,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=Hi.transition;Hi.transition={};try{e()}finally{Hi.transition=t}};ae.unstable_act=bm;ae.useCallback=function(e,t){return et.current.useCallback(e,t)};ae.useContext=function(e){return et.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return et.current.useDeferredValue(e)};ae.useEffect=function(e,t){return et.current.useEffect(e,t)};ae.useId=function(){return et.current.useId()};ae.useImperativeHandle=function(e,t,r){return et.current.useImperativeHandle(e,t,r)};ae.useInsertionEffect=function(e,t){return et.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return et.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return et.current.useMemo(e,t)};ae.useReducer=function(e,t,r){return et.current.useReducer(e,t,r)};ae.useRef=function(e){return et.current.useRef(e)};ae.useState=function(e){return et.current.useState(e)};ae.useSyncExternalStore=function(e,t,r){return et.current.useSyncExternalStore(e,t,r)};ae.useTransition=function(){return et.current.useTransition()};ae.version="18.3.1";hm.exports=ae;var R=hm.exports;const Ar=sf(R),Sf=af({__proto__:null,default:Ar},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf=R,Tf=Symbol.for("react.element"),Cf=Symbol.for("react.fragment"),Ef=Object.prototype.hasOwnProperty,Nf=kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Af={key:!0,ref:!0,__self:!0,__source:!0};function Sm(e,t,r){var n,a={},i=null,s=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Ef.call(t,n)&&!Af.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:Tf,type:e,key:i,ref:s,props:a,_owner:Nf.current}}Os.Fragment=Cf;Os.jsx=Sm;Os.jsxs=Sm;mm.exports=Os;var g=mm.exports,ul={},km={exports:{}},vt={},Tm={exports:{}},Cm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,K){var Y=j.length;j.push(K);e:for(;0<Y;){var W=Y-1>>>1,Q=j[W];if(0<a(Q,K))j[W]=K,j[Y]=Q,Y=W;else break e}}function r(j){return j.length===0?null:j[0]}function n(j){if(j.length===0)return null;var K=j[0],Y=j.pop();if(Y!==K){j[0]=Y;e:for(var W=0,Q=j.length,le=Q>>>1;W<le;){var De=2*(W+1)-1,ut=j[De],Kt=De+1,Rt=j[Kt];if(0>a(ut,Y))Kt<Q&&0>a(Rt,ut)?(j[W]=Rt,j[Kt]=Y,W=Kt):(j[W]=ut,j[De]=Y,W=De);else if(Kt<Q&&0>a(Rt,Y))j[W]=Rt,j[Kt]=Y,W=Kt;else break e}}return K}function a(j,K){var Y=j.sortIndex-K.sortIndex;return Y!==0?Y:j.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],d=[],h=1,m=null,v=3,x=!1,T=!1,C=!1,A=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(j){for(var K=r(d);K!==null;){if(K.callback===null)n(d);else if(K.startTime<=j)n(d),K.sortIndex=K.expirationTime,t(l,K);else break;K=r(d)}}function N(j){if(C=!1,b(j),!T)if(r(l)!==null)T=!0,ne(M);else{var K=r(d);K!==null&&Le(N,K.startTime-j)}}function M(j,K){T=!1,C&&(C=!1,w(P),P=-1),x=!0;var Y=v;try{for(b(K),m=r(l);m!==null&&(!(m.expirationTime>K)||j&&!re());){var W=m.callback;if(typeof W=="function"){m.callback=null,v=m.priorityLevel;var Q=W(m.expirationTime<=K);K=e.unstable_now(),typeof Q=="function"?m.callback=Q:m===r(l)&&n(l),b(K)}else n(l);m=r(l)}if(m!==null)var le=!0;else{var De=r(d);De!==null&&Le(N,De.startTime-K),le=!1}return le}finally{m=null,v=Y,x=!1}}var I=!1,_=null,P=-1,U=5,O=-1;function re(){return!(e.unstable_now()-O<U)}function te(){if(_!==null){var j=e.unstable_now();O=j;var K=!0;try{K=_(!0,j)}finally{K?Te():(I=!1,_=null)}}else I=!1}var Te;if(typeof y=="function")Te=function(){y(te)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,V=Ne.port2;Ne.port1.onmessage=te,Te=function(){V.postMessage(null)}}else Te=function(){A(te,0)};function ne(j){_=j,I||(I=!0,Te())}function Le(j,K){P=A(function(){j(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){T||x||(T=!0,ne(M))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(j){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var Y=v;v=K;try{return j()}finally{v=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,K){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Y=v;v=j;try{return K()}finally{v=Y}},e.unstable_scheduleCallback=function(j,K,Y){var W=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?W+Y:W):Y=W,j){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=Y+Q,j={id:h++,callback:K,priorityLevel:j,startTime:Y,expirationTime:Q,sortIndex:-1},Y>W?(j.sortIndex=Y,t(d,j),r(l)===null&&j===r(d)&&(C?(w(P),P=-1):C=!0,Le(N,Y-W))):(j.sortIndex=Q,t(l,j),T||x||(T=!0,ne(M))),j},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(j){var K=v;return function(){var Y=v;v=K;try{return j.apply(this,arguments)}finally{v=Y}}}})(Cm);Tm.exports=Cm;var Rf=Tm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf=R,ft=Rf;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Em=new Set,Oa={};function mn(e,t){jn(e,t),jn(e+"Capture",t)}function jn(e,t){for(Oa[e]=t,e=0;e<t.length;e++)Em.add(t[e])}var sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cl=Object.prototype.hasOwnProperty,If=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ec={},tc={};function _f(e){return cl.call(tc,e)?!0:cl.call(ec,e)?!1:If.test(e)?tc[e]=!0:(ec[e]=!0,!1)}function Lf(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Of(e,t,r,n){if(t===null||typeof t>"u"||Lf(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function tt(e,t,r,n,a,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){He[e]=new tt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];He[t]=new tt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){He[e]=new tt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){He[e]=new tt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){He[e]=new tt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){He[e]=new tt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){He[e]=new tt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){He[e]=new tt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){He[e]=new tt(e,5,!1,e.toLowerCase(),null,!1,!1)});var M0=/[\-:]([a-z])/g;function I0(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(M0,I0);He[t]=new tt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(M0,I0);He[t]=new tt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(M0,I0);He[t]=new tt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){He[e]=new tt(e,1,!1,e.toLowerCase(),null,!1,!1)});He.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){He[e]=new tt(e,1,!1,e.toLowerCase(),null,!0,!0)});function _0(e,t,r,n){var a=He.hasOwnProperty(t)?He[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Of(t,r,a,n)&&(r=null),n||a===null?_f(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var dr=Mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gi=Symbol.for("react.element"),xn=Symbol.for("react.portal"),bn=Symbol.for("react.fragment"),L0=Symbol.for("react.strict_mode"),dl=Symbol.for("react.profiler"),Nm=Symbol.for("react.provider"),Am=Symbol.for("react.context"),O0=Symbol.for("react.forward_ref"),ml=Symbol.for("react.suspense"),hl=Symbol.for("react.suspense_list"),P0=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),Rm=Symbol.for("react.offscreen"),rc=Symbol.iterator;function ua(e){return e===null||typeof e!="object"?null:(e=rc&&e[rc]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,vo;function va(e){if(vo===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);vo=t&&t[1]||""}return`
`+vo+e}var yo=!1;function wo(e,t){if(!e||yo)return"";yo=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),i=n.stack.split(`
`),s=a.length-1,o=i.length-1;1<=s&&0<=o&&a[s]!==i[o];)o--;for(;1<=s&&0<=o;s--,o--)if(a[s]!==i[o]){if(s!==1||o!==1)do if(s--,o--,0>o||a[s]!==i[o]){var l=`
`+a[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=o);break}}}finally{yo=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?va(e):""}function Pf(e){switch(e.tag){case 5:return va(e.type);case 16:return va("Lazy");case 13:return va("Suspense");case 19:return va("SuspenseList");case 0:case 2:case 15:return e=wo(e.type,!1),e;case 11:return e=wo(e.type.render,!1),e;case 1:return e=wo(e.type,!0),e;default:return""}}function pl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bn:return"Fragment";case xn:return"Portal";case dl:return"Profiler";case L0:return"StrictMode";case ml:return"Suspense";case hl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Am:return(e.displayName||"Context")+".Consumer";case Nm:return(e._context.displayName||"Context")+".Provider";case O0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P0:return t=e.displayName||null,t!==null?t:pl(e.type)||"Memo";case wr:t=e._payload,e=e._init;try{return pl(e(t))}catch{}}return null}function zf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pl(t);case 8:return t===L0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Br(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ff(e){var t=Mm(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vi(e){e._valueTracker||(e._valueTracker=Ff(e))}function Im(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Mm(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fl(e,t){var r=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function nc(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Br(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _m(e,t){t=t.checked,t!=null&&_0(e,"checked",t,!1)}function gl(e,t){_m(e,t);var r=Br(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vl(e,t.type,r):t.hasOwnProperty("defaultValue")&&vl(e,t.type,Br(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ac(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function vl(e,t,r){(t!=="number"||rs(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ya=Array.isArray;function Ln(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Br(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ic(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(F(92));if(ya(r)){if(1<r.length)throw Error(F(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Br(r)}}function Lm(e,t){var r=Br(t.value),n=Br(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function sc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Om(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Om(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yi,Pm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yi=yi||document.createElement("div"),yi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pa(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var ka={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Df=["Webkit","ms","Moz","O"];Object.keys(ka).forEach(function(e){Df.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ka[t]=ka[e]})});function zm(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ka.hasOwnProperty(e)&&ka[e]?(""+t).trim():t+"px"}function Fm(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=zm(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var Bf=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xl(e,t){if(t){if(Bf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sl=null;function z0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kl=null,On=null,Pn=null;function oc(e){if(e=ii(e)){if(typeof kl!="function")throw Error(F(280));var t=e.stateNode;t&&(t=Bs(t),kl(e.stateNode,e.type,t))}}function Dm(e){On?Pn?Pn.push(e):Pn=[e]:On=e}function Bm(){if(On){var e=On,t=Pn;if(Pn=On=null,oc(e),t)for(e=0;e<t.length;e++)oc(t[e])}}function $m(e,t){return e(t)}function jm(){}var xo=!1;function Um(e,t,r){if(xo)return e(t,r);xo=!0;try{return $m(e,t,r)}finally{xo=!1,(On!==null||Pn!==null)&&(jm(),Bm())}}function za(e,t){var r=e.stateNode;if(r===null)return null;var n=Bs(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(F(231,t,typeof r));return r}var Tl=!1;if(sr)try{var ca={};Object.defineProperty(ca,"passive",{get:function(){Tl=!0}}),window.addEventListener("test",ca,ca),window.removeEventListener("test",ca,ca)}catch{Tl=!1}function $f(e,t,r,n,a,i,s,o,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(h){this.onError(h)}}var Ta=!1,ns=null,as=!1,Cl=null,jf={onError:function(e){Ta=!0,ns=e}};function Uf(e,t,r,n,a,i,s,o,l){Ta=!1,ns=null,$f.apply(jf,arguments)}function Hf(e,t,r,n,a,i,s,o,l){if(Uf.apply(this,arguments),Ta){if(Ta){var d=ns;Ta=!1,ns=null}else throw Error(F(198));as||(as=!0,Cl=d)}}function hn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Hm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lc(e){if(hn(e)!==e)throw Error(F(188))}function qf(e){var t=e.alternate;if(!t){if(t=hn(e),t===null)throw Error(F(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var i=a.alternate;if(i===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===r)return lc(a),e;if(i===n)return lc(a),t;i=i.sibling}throw Error(F(188))}if(r.return!==n.return)r=a,n=i;else{for(var s=!1,o=a.child;o;){if(o===r){s=!0,r=a,n=i;break}if(o===n){s=!0,n=a,r=i;break}o=o.sibling}if(!s){for(o=i.child;o;){if(o===r){s=!0,r=i,n=a;break}if(o===n){s=!0,n=i,r=a;break}o=o.sibling}if(!s)throw Error(F(189))}}if(r.alternate!==n)throw Error(F(190))}if(r.tag!==3)throw Error(F(188));return r.stateNode.current===r?e:t}function qm(e){return e=qf(e),e!==null?Gm(e):null}function Gm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gm(e);if(t!==null)return t;e=e.sibling}return null}var Wm=ft.unstable_scheduleCallback,uc=ft.unstable_cancelCallback,Gf=ft.unstable_shouldYield,Wf=ft.unstable_requestPaint,Ae=ft.unstable_now,Vf=ft.unstable_getCurrentPriorityLevel,F0=ft.unstable_ImmediatePriority,Vm=ft.unstable_UserBlockingPriority,is=ft.unstable_NormalPriority,Xf=ft.unstable_LowPriority,Xm=ft.unstable_IdlePriority,Ps=null,Ht=null;function Kf(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Ps,e,void 0,(e.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:Jf,Yf=Math.log,Qf=Math.LN2;function Jf(e){return e>>>=0,e===0?32:31-(Yf(e)/Qf|0)|0}var wi=64,xi=4194304;function wa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ss(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,i=e.pingedLanes,s=r&268435455;if(s!==0){var o=s&~a;o!==0?n=wa(o):(i&=s,i!==0&&(n=wa(i)))}else s=r&~a,s!==0?n=wa(s):i!==0&&(n=wa(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Pt(t),a=1<<r,n|=e[r],t&=~a;return n}function Zf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function e4(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Pt(i),o=1<<s,l=a[s];l===-1?(!(o&r)||o&n)&&(a[s]=Zf(o,t)):l<=t&&(e.expiredLanes|=o),i&=~o}}function El(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Km(){var e=wi;return wi<<=1,!(wi&4194240)&&(wi=64),e}function bo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ni(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pt(t),e[t]=r}function t4(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Pt(r),i=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~i}}function D0(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Pt(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var ue=0;function Ym(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qm,B0,Jm,Zm,eh,Nl=!1,bi=[],Rr=null,Mr=null,Ir=null,Fa=new Map,Da=new Map,Sr=[],r4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cc(e,t){switch(e){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Fa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(t.pointerId)}}function da(e,t,r,n,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[a]},t!==null&&(t=ii(t),t!==null&&B0(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function n4(e,t,r,n,a){switch(t){case"focusin":return Rr=da(Rr,e,t,r,n,a),!0;case"dragenter":return Mr=da(Mr,e,t,r,n,a),!0;case"mouseover":return Ir=da(Ir,e,t,r,n,a),!0;case"pointerover":var i=a.pointerId;return Fa.set(i,da(Fa.get(i)||null,e,t,r,n,a)),!0;case"gotpointercapture":return i=a.pointerId,Da.set(i,da(Da.get(i)||null,e,t,r,n,a)),!0}return!1}function th(e){var t=tn(e.target);if(t!==null){var r=hn(t);if(r!==null){if(t=r.tag,t===13){if(t=Hm(r),t!==null){e.blockedOn=t,eh(e.priority,function(){Jm(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Al(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Sl=n,r.target.dispatchEvent(n),Sl=null}else return t=ii(r),t!==null&&B0(t),e.blockedOn=r,!1;t.shift()}return!0}function dc(e,t,r){qi(e)&&r.delete(t)}function a4(){Nl=!1,Rr!==null&&qi(Rr)&&(Rr=null),Mr!==null&&qi(Mr)&&(Mr=null),Ir!==null&&qi(Ir)&&(Ir=null),Fa.forEach(dc),Da.forEach(dc)}function ma(e,t){e.blockedOn===t&&(e.blockedOn=null,Nl||(Nl=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,a4)))}function Ba(e){function t(a){return ma(a,e)}if(0<bi.length){ma(bi[0],e);for(var r=1;r<bi.length;r++){var n=bi[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Rr!==null&&ma(Rr,e),Mr!==null&&ma(Mr,e),Ir!==null&&ma(Ir,e),Fa.forEach(t),Da.forEach(t),r=0;r<Sr.length;r++)n=Sr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Sr.length&&(r=Sr[0],r.blockedOn===null);)th(r),r.blockedOn===null&&Sr.shift()}var zn=dr.ReactCurrentBatchConfig,os=!0;function i4(e,t,r,n){var a=ue,i=zn.transition;zn.transition=null;try{ue=1,$0(e,t,r,n)}finally{ue=a,zn.transition=i}}function s4(e,t,r,n){var a=ue,i=zn.transition;zn.transition=null;try{ue=4,$0(e,t,r,n)}finally{ue=a,zn.transition=i}}function $0(e,t,r,n){if(os){var a=Al(e,t,r,n);if(a===null)Io(e,t,n,ls,r),cc(e,n);else if(n4(a,e,t,r,n))n.stopPropagation();else if(cc(e,n),t&4&&-1<r4.indexOf(e)){for(;a!==null;){var i=ii(a);if(i!==null&&Qm(i),i=Al(e,t,r,n),i===null&&Io(e,t,n,ls,r),i===a)break;a=i}a!==null&&n.stopPropagation()}else Io(e,t,n,null,r)}}var ls=null;function Al(e,t,r,n){if(ls=null,e=z0(n),e=tn(e),e!==null)if(t=hn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Hm(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ls=e,null}function rh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vf()){case F0:return 1;case Vm:return 4;case is:case Xf:return 16;case Xm:return 536870912;default:return 16}default:return 16}}var Tr=null,j0=null,Gi=null;function nh(){if(Gi)return Gi;var e,t=j0,r=t.length,n,a="value"in Tr?Tr.value:Tr.textContent,i=a.length;for(e=0;e<r&&t[e]===a[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===a[i-n];n++);return Gi=a.slice(e,1<n?1-n:void 0)}function Wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Si(){return!0}function mc(){return!1}function yt(e){function t(r,n,a,i,s){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Si:mc,this.isPropagationStopped=mc,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),t}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},U0=yt(Zn),ai=ke({},Zn,{view:0,detail:0}),o4=yt(ai),So,ko,ha,zs=ke({},ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:H0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ha&&(ha&&e.type==="mousemove"?(So=e.screenX-ha.screenX,ko=e.screenY-ha.screenY):ko=So=0,ha=e),So)},movementY:function(e){return"movementY"in e?e.movementY:ko}}),hc=yt(zs),l4=ke({},zs,{dataTransfer:0}),u4=yt(l4),c4=ke({},ai,{relatedTarget:0}),To=yt(c4),d4=ke({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),m4=yt(d4),h4=ke({},Zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),p4=yt(h4),f4=ke({},Zn,{data:0}),pc=yt(f4),g4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w4(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=y4[e])?!!t[e]:!1}function H0(){return w4}var x4=ke({},ai,{key:function(e){if(e.key){var t=g4[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?v4[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:H0,charCode:function(e){return e.type==="keypress"?Wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),b4=yt(x4),S4=ke({},zs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fc=yt(S4),k4=ke({},ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:H0}),T4=yt(k4),C4=ke({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),E4=yt(C4),N4=ke({},zs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),A4=yt(N4),R4=[9,13,27,32],q0=sr&&"CompositionEvent"in window,Ca=null;sr&&"documentMode"in document&&(Ca=document.documentMode);var M4=sr&&"TextEvent"in window&&!Ca,ah=sr&&(!q0||Ca&&8<Ca&&11>=Ca),gc=" ",vc=!1;function ih(e,t){switch(e){case"keyup":return R4.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function I4(e,t){switch(e){case"compositionend":return sh(t);case"keypress":return t.which!==32?null:(vc=!0,gc);case"textInput":return e=t.data,e===gc&&vc?null:e;default:return null}}function _4(e,t){if(Sn)return e==="compositionend"||!q0&&ih(e,t)?(e=nh(),Gi=j0=Tr=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ah&&t.locale!=="ko"?null:t.data;default:return null}}var L4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!L4[e.type]:t==="textarea"}function oh(e,t,r,n){Dm(n),t=us(t,"onChange"),0<t.length&&(r=new U0("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Ea=null,$a=null;function O4(e){yh(e,0)}function Fs(e){var t=Cn(e);if(Im(t))return e}function P4(e,t){if(e==="change")return t}var lh=!1;if(sr){var Co;if(sr){var Eo="oninput"in document;if(!Eo){var wc=document.createElement("div");wc.setAttribute("oninput","return;"),Eo=typeof wc.oninput=="function"}Co=Eo}else Co=!1;lh=Co&&(!document.documentMode||9<document.documentMode)}function xc(){Ea&&(Ea.detachEvent("onpropertychange",uh),$a=Ea=null)}function uh(e){if(e.propertyName==="value"&&Fs($a)){var t=[];oh(t,$a,e,z0(e)),Um(O4,t)}}function z4(e,t,r){e==="focusin"?(xc(),Ea=t,$a=r,Ea.attachEvent("onpropertychange",uh)):e==="focusout"&&xc()}function F4(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fs($a)}function D4(e,t){if(e==="click")return Fs(t)}function B4(e,t){if(e==="input"||e==="change")return Fs(t)}function $4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:$4;function ja(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!cl.call(t,a)||!Ft(e[a],t[a]))return!1}return!0}function bc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sc(e,t){var r=bc(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=bc(r)}}function ch(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ch(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dh(){for(var e=window,t=rs();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=rs(e.document)}return t}function G0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function j4(e){var t=dh(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&ch(r.ownerDocument.documentElement,r)){if(n!==null&&G0(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,i=Math.min(n.start,a);n=n.end===void 0?i:Math.min(n.end,a),!e.extend&&i>n&&(a=n,n=i,i=a),a=Sc(r,i);var s=Sc(r,n);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var U4=sr&&"documentMode"in document&&11>=document.documentMode,kn=null,Rl=null,Na=null,Ml=!1;function kc(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ml||kn==null||kn!==rs(n)||(n=kn,"selectionStart"in n&&G0(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Na&&ja(Na,n)||(Na=n,n=us(Rl,"onSelect"),0<n.length&&(t=new U0("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=kn)))}function ki(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Tn={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionend:ki("Transition","TransitionEnd")},No={},mh={};sr&&(mh=document.createElement("div").style,"AnimationEvent"in window||(delete Tn.animationend.animation,delete Tn.animationiteration.animation,delete Tn.animationstart.animation),"TransitionEvent"in window||delete Tn.transitionend.transition);function Ds(e){if(No[e])return No[e];if(!Tn[e])return e;var t=Tn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in mh)return No[e]=t[r];return e}var hh=Ds("animationend"),ph=Ds("animationiteration"),fh=Ds("animationstart"),gh=Ds("transitionend"),vh=new Map,Tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(e,t){vh.set(e,t),mn(t,[e])}for(var Ao=0;Ao<Tc.length;Ao++){var Ro=Tc[Ao],H4=Ro.toLowerCase(),q4=Ro[0].toUpperCase()+Ro.slice(1);Gr(H4,"on"+q4)}Gr(hh,"onAnimationEnd");Gr(ph,"onAnimationIteration");Gr(fh,"onAnimationStart");Gr("dblclick","onDoubleClick");Gr("focusin","onFocus");Gr("focusout","onBlur");Gr(gh,"onTransitionEnd");jn("onMouseEnter",["mouseout","mouseover"]);jn("onMouseLeave",["mouseout","mouseover"]);jn("onPointerEnter",["pointerout","pointerover"]);jn("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G4=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function Cc(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Hf(n,t,void 0,e),e.currentTarget=null}function yh(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var o=n[s],l=o.instance,d=o.currentTarget;if(o=o.listener,l!==i&&a.isPropagationStopped())break e;Cc(a,o,d),i=l}else for(s=0;s<n.length;s++){if(o=n[s],l=o.instance,d=o.currentTarget,o=o.listener,l!==i&&a.isPropagationStopped())break e;Cc(a,o,d),i=l}}}if(as)throw e=Cl,as=!1,Cl=null,e}function me(e,t){var r=t[Pl];r===void 0&&(r=t[Pl]=new Set);var n=e+"__bubble";r.has(n)||(wh(t,e,2,!1),r.add(n))}function Mo(e,t,r){var n=0;t&&(n|=4),wh(r,e,n,t)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function Ua(e){if(!e[Ti]){e[Ti]=!0,Em.forEach(function(r){r!=="selectionchange"&&(G4.has(r)||Mo(r,!1,e),Mo(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ti]||(t[Ti]=!0,Mo("selectionchange",!1,t))}}function wh(e,t,r,n){switch(rh(t)){case 1:var a=i4;break;case 4:a=s4;break;default:a=$0}r=a.bind(null,t,r,e),a=void 0,!Tl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Io(e,t,r,n,a){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var o=n.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(s===4)for(s=n.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;s=s.return}for(;o!==null;){if(s=tn(o),s===null)return;if(l=s.tag,l===5||l===6){n=i=s;continue e}o=o.parentNode}}n=n.return}Um(function(){var d=i,h=z0(r),m=[];e:{var v=vh.get(e);if(v!==void 0){var x=U0,T=e;switch(e){case"keypress":if(Wi(r)===0)break e;case"keydown":case"keyup":x=b4;break;case"focusin":T="focus",x=To;break;case"focusout":T="blur",x=To;break;case"beforeblur":case"afterblur":x=To;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=u4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=T4;break;case hh:case ph:case fh:x=m4;break;case gh:x=E4;break;case"scroll":x=o4;break;case"wheel":x=A4;break;case"copy":case"cut":case"paste":x=p4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=fc}var C=(t&4)!==0,A=!C&&e==="scroll",w=C?v!==null?v+"Capture":null:v;C=[];for(var y=d,b;y!==null;){b=y;var N=b.stateNode;if(b.tag===5&&N!==null&&(b=N,w!==null&&(N=za(y,w),N!=null&&C.push(Ha(y,N,b)))),A)break;y=y.return}0<C.length&&(v=new x(v,T,null,r,h),m.push({event:v,listeners:C}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",v&&r!==Sl&&(T=r.relatedTarget||r.fromElement)&&(tn(T)||T[or]))break e;if((x||v)&&(v=h.window===h?h:(v=h.ownerDocument)?v.defaultView||v.parentWindow:window,x?(T=r.relatedTarget||r.toElement,x=d,T=T?tn(T):null,T!==null&&(A=hn(T),T!==A||T.tag!==5&&T.tag!==6)&&(T=null)):(x=null,T=d),x!==T)){if(C=hc,N="onMouseLeave",w="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(C=fc,N="onPointerLeave",w="onPointerEnter",y="pointer"),A=x==null?v:Cn(x),b=T==null?v:Cn(T),v=new C(N,y+"leave",x,r,h),v.target=A,v.relatedTarget=b,N=null,tn(h)===d&&(C=new C(w,y+"enter",T,r,h),C.target=b,C.relatedTarget=A,N=C),A=N,x&&T)t:{for(C=x,w=T,y=0,b=C;b;b=yn(b))y++;for(b=0,N=w;N;N=yn(N))b++;for(;0<y-b;)C=yn(C),y--;for(;0<b-y;)w=yn(w),b--;for(;y--;){if(C===w||w!==null&&C===w.alternate)break t;C=yn(C),w=yn(w)}C=null}else C=null;x!==null&&Ec(m,v,x,C,!1),T!==null&&A!==null&&Ec(m,A,T,C,!0)}}e:{if(v=d?Cn(d):window,x=v.nodeName&&v.nodeName.toLowerCase(),x==="select"||x==="input"&&v.type==="file")var M=P4;else if(yc(v))if(lh)M=B4;else{M=F4;var I=z4}else(x=v.nodeName)&&x.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(M=D4);if(M&&(M=M(e,d))){oh(m,M,r,h);break e}I&&I(e,v,d),e==="focusout"&&(I=v._wrapperState)&&I.controlled&&v.type==="number"&&vl(v,"number",v.value)}switch(I=d?Cn(d):window,e){case"focusin":(yc(I)||I.contentEditable==="true")&&(kn=I,Rl=d,Na=null);break;case"focusout":Na=Rl=kn=null;break;case"mousedown":Ml=!0;break;case"contextmenu":case"mouseup":case"dragend":Ml=!1,kc(m,r,h);break;case"selectionchange":if(U4)break;case"keydown":case"keyup":kc(m,r,h)}var _;if(q0)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Sn?ih(e,r)&&(P="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(ah&&r.locale!=="ko"&&(Sn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Sn&&(_=nh()):(Tr=h,j0="value"in Tr?Tr.value:Tr.textContent,Sn=!0)),I=us(d,P),0<I.length&&(P=new pc(P,e,null,r,h),m.push({event:P,listeners:I}),_?P.data=_:(_=sh(r),_!==null&&(P.data=_)))),(_=M4?I4(e,r):_4(e,r))&&(d=us(d,"onBeforeInput"),0<d.length&&(h=new pc("onBeforeInput","beforeinput",null,r,h),m.push({event:h,listeners:d}),h.data=_))}yh(m,t)})}function Ha(e,t,r){return{instance:e,listener:t,currentTarget:r}}function us(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=za(e,r),i!=null&&n.unshift(Ha(e,i,a)),i=za(e,t),i!=null&&n.push(Ha(e,i,a))),e=e.return}return n}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ec(e,t,r,n,a){for(var i=t._reactName,s=[];r!==null&&r!==n;){var o=r,l=o.alternate,d=o.stateNode;if(l!==null&&l===n)break;o.tag===5&&d!==null&&(o=d,a?(l=za(r,i),l!=null&&s.unshift(Ha(r,l,o))):a||(l=za(r,i),l!=null&&s.push(Ha(r,l,o)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var W4=/\r\n?/g,V4=/\u0000|\uFFFD/g;function Nc(e){return(typeof e=="string"?e:""+e).replace(W4,`
`).replace(V4,"")}function Ci(e,t,r){if(t=Nc(t),Nc(e)!==t&&r)throw Error(F(425))}function cs(){}var Il=null,_l=null;function Ll(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ol=typeof setTimeout=="function"?setTimeout:void 0,X4=typeof clearTimeout=="function"?clearTimeout:void 0,Ac=typeof Promise=="function"?Promise:void 0,K4=typeof queueMicrotask=="function"?queueMicrotask:typeof Ac<"u"?function(e){return Ac.resolve(null).then(e).catch(Y4)}:Ol;function Y4(e){setTimeout(function(){throw e})}function _o(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),Ba(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);Ba(t)}function _r(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var ea=Math.random().toString(36).slice(2),jt="__reactFiber$"+ea,qa="__reactProps$"+ea,or="__reactContainer$"+ea,Pl="__reactEvents$"+ea,Q4="__reactListeners$"+ea,J4="__reactHandles$"+ea;function tn(e){var t=e[jt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[or]||r[jt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Rc(e);e!==null;){if(r=e[jt])return r;e=Rc(e)}return t}e=r,r=e.parentNode}return null}function ii(e){return e=e[jt]||e[or],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function Bs(e){return e[qa]||null}var zl=[],En=-1;function Wr(e){return{current:e}}function he(e){0>En||(e.current=zl[En],zl[En]=null,En--)}function de(e,t){En++,zl[En]=e.current,e.current=t}var $r={},Xe=Wr($r),st=Wr(!1),on=$r;function Un(e,t){var r=e.type.contextTypes;if(!r)return $r;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in r)a[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function ot(e){return e=e.childContextTypes,e!=null}function ds(){he(st),he(Xe)}function Mc(e,t,r){if(Xe.current!==$r)throw Error(F(168));de(Xe,t),de(st,r)}function xh(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(F(108,zf(e)||"Unknown",a));return ke({},r,n)}function ms(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$r,on=Xe.current,de(Xe,e),de(st,st.current),!0}function Ic(e,t,r){var n=e.stateNode;if(!n)throw Error(F(169));r?(e=xh(e,t,on),n.__reactInternalMemoizedMergedChildContext=e,he(st),he(Xe),de(Xe,e)):he(st),de(st,r)}var er=null,$s=!1,Lo=!1;function bh(e){er===null?er=[e]:er.push(e)}function Z4(e){$s=!0,bh(e)}function Vr(){if(!Lo&&er!==null){Lo=!0;var e=0,t=ue;try{var r=er;for(ue=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}er=null,$s=!1}catch(a){throw er!==null&&(er=er.slice(e+1)),Wm(F0,Vr),a}finally{ue=t,Lo=!1}}return null}var Nn=[],An=0,hs=null,ps=0,bt=[],St=0,ln=null,rr=1,nr="";function Jr(e,t){Nn[An++]=ps,Nn[An++]=hs,hs=e,ps=t}function Sh(e,t,r){bt[St++]=rr,bt[St++]=nr,bt[St++]=ln,ln=e;var n=rr;e=nr;var a=32-Pt(n)-1;n&=~(1<<a),r+=1;var i=32-Pt(t)+a;if(30<i){var s=a-a%5;i=(n&(1<<s)-1).toString(32),n>>=s,a-=s,rr=1<<32-Pt(t)+a|r<<a|n,nr=i+e}else rr=1<<i|r<<a|n,nr=e}function W0(e){e.return!==null&&(Jr(e,1),Sh(e,1,0))}function V0(e){for(;e===hs;)hs=Nn[--An],Nn[An]=null,ps=Nn[--An],Nn[An]=null;for(;e===ln;)ln=bt[--St],bt[St]=null,nr=bt[--St],bt[St]=null,rr=bt[--St],bt[St]=null}var ht=null,mt=null,pe=!1,Ot=null;function kh(e,t){var r=kt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function _c(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,mt=_r(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=ln!==null?{id:rr,overflow:nr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=kt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ht=e,mt=null,!0):!1;default:return!1}}function Fl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Dl(e){if(pe){var t=mt;if(t){var r=t;if(!_c(e,t)){if(Fl(e))throw Error(F(418));t=_r(r.nextSibling);var n=ht;t&&_c(e,t)?kh(n,r):(e.flags=e.flags&-4097|2,pe=!1,ht=e)}}else{if(Fl(e))throw Error(F(418));e.flags=e.flags&-4097|2,pe=!1,ht=e}}}function Lc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function Ei(e){if(e!==ht)return!1;if(!pe)return Lc(e),pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ll(e.type,e.memoizedProps)),t&&(t=mt)){if(Fl(e))throw Th(),Error(F(418));for(;t;)kh(e,t),t=_r(t.nextSibling)}if(Lc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){mt=_r(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}mt=null}}else mt=ht?_r(e.stateNode.nextSibling):null;return!0}function Th(){for(var e=mt;e;)e=_r(e.nextSibling)}function Hn(){mt=ht=null,pe=!1}function X0(e){Ot===null?Ot=[e]:Ot.push(e)}var eg=dr.ReactCurrentBatchConfig;function pa(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(F(309));var n=r.stateNode}if(!n)throw Error(F(147,e));var a=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var o=a.refs;s===null?delete o[i]:o[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(F(284));if(!r._owner)throw Error(F(290,e))}return e}function Ni(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Oc(e){var t=e._init;return t(e._payload)}function Ch(e){function t(w,y){if(e){var b=w.deletions;b===null?(w.deletions=[y],w.flags|=16):b.push(y)}}function r(w,y){if(!e)return null;for(;y!==null;)t(w,y),y=y.sibling;return null}function n(w,y){for(w=new Map;y!==null;)y.key!==null?w.set(y.key,y):w.set(y.index,y),y=y.sibling;return w}function a(w,y){return w=zr(w,y),w.index=0,w.sibling=null,w}function i(w,y,b){return w.index=b,e?(b=w.alternate,b!==null?(b=b.index,b<y?(w.flags|=2,y):b):(w.flags|=2,y)):(w.flags|=1048576,y)}function s(w){return e&&w.alternate===null&&(w.flags|=2),w}function o(w,y,b,N){return y===null||y.tag!==6?(y=$o(b,w.mode,N),y.return=w,y):(y=a(y,b),y.return=w,y)}function l(w,y,b,N){var M=b.type;return M===bn?h(w,y,b.props.children,N,b.key):y!==null&&(y.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===wr&&Oc(M)===y.type)?(N=a(y,b.props),N.ref=pa(w,y,b),N.return=w,N):(N=Zi(b.type,b.key,b.props,null,w.mode,N),N.ref=pa(w,y,b),N.return=w,N)}function d(w,y,b,N){return y===null||y.tag!==4||y.stateNode.containerInfo!==b.containerInfo||y.stateNode.implementation!==b.implementation?(y=jo(b,w.mode,N),y.return=w,y):(y=a(y,b.children||[]),y.return=w,y)}function h(w,y,b,N,M){return y===null||y.tag!==7?(y=sn(b,w.mode,N,M),y.return=w,y):(y=a(y,b),y.return=w,y)}function m(w,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return y=$o(""+y,w.mode,b),y.return=w,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case gi:return b=Zi(y.type,y.key,y.props,null,w.mode,b),b.ref=pa(w,null,y),b.return=w,b;case xn:return y=jo(y,w.mode,b),y.return=w,y;case wr:var N=y._init;return m(w,N(y._payload),b)}if(ya(y)||ua(y))return y=sn(y,w.mode,b,null),y.return=w,y;Ni(w,y)}return null}function v(w,y,b,N){var M=y!==null?y.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return M!==null?null:o(w,y,""+b,N);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case gi:return b.key===M?l(w,y,b,N):null;case xn:return b.key===M?d(w,y,b,N):null;case wr:return M=b._init,v(w,y,M(b._payload),N)}if(ya(b)||ua(b))return M!==null?null:h(w,y,b,N,null);Ni(w,b)}return null}function x(w,y,b,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return w=w.get(b)||null,o(y,w,""+N,M);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case gi:return w=w.get(N.key===null?b:N.key)||null,l(y,w,N,M);case xn:return w=w.get(N.key===null?b:N.key)||null,d(y,w,N,M);case wr:var I=N._init;return x(w,y,b,I(N._payload),M)}if(ya(N)||ua(N))return w=w.get(b)||null,h(y,w,N,M,null);Ni(y,N)}return null}function T(w,y,b,N){for(var M=null,I=null,_=y,P=y=0,U=null;_!==null&&P<b.length;P++){_.index>P?(U=_,_=null):U=_.sibling;var O=v(w,_,b[P],N);if(O===null){_===null&&(_=U);break}e&&_&&O.alternate===null&&t(w,_),y=i(O,y,P),I===null?M=O:I.sibling=O,I=O,_=U}if(P===b.length)return r(w,_),pe&&Jr(w,P),M;if(_===null){for(;P<b.length;P++)_=m(w,b[P],N),_!==null&&(y=i(_,y,P),I===null?M=_:I.sibling=_,I=_);return pe&&Jr(w,P),M}for(_=n(w,_);P<b.length;P++)U=x(_,w,P,b[P],N),U!==null&&(e&&U.alternate!==null&&_.delete(U.key===null?P:U.key),y=i(U,y,P),I===null?M=U:I.sibling=U,I=U);return e&&_.forEach(function(re){return t(w,re)}),pe&&Jr(w,P),M}function C(w,y,b,N){var M=ua(b);if(typeof M!="function")throw Error(F(150));if(b=M.call(b),b==null)throw Error(F(151));for(var I=M=null,_=y,P=y=0,U=null,O=b.next();_!==null&&!O.done;P++,O=b.next()){_.index>P?(U=_,_=null):U=_.sibling;var re=v(w,_,O.value,N);if(re===null){_===null&&(_=U);break}e&&_&&re.alternate===null&&t(w,_),y=i(re,y,P),I===null?M=re:I.sibling=re,I=re,_=U}if(O.done)return r(w,_),pe&&Jr(w,P),M;if(_===null){for(;!O.done;P++,O=b.next())O=m(w,O.value,N),O!==null&&(y=i(O,y,P),I===null?M=O:I.sibling=O,I=O);return pe&&Jr(w,P),M}for(_=n(w,_);!O.done;P++,O=b.next())O=x(_,w,P,O.value,N),O!==null&&(e&&O.alternate!==null&&_.delete(O.key===null?P:O.key),y=i(O,y,P),I===null?M=O:I.sibling=O,I=O);return e&&_.forEach(function(te){return t(w,te)}),pe&&Jr(w,P),M}function A(w,y,b,N){if(typeof b=="object"&&b!==null&&b.type===bn&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case gi:e:{for(var M=b.key,I=y;I!==null;){if(I.key===M){if(M=b.type,M===bn){if(I.tag===7){r(w,I.sibling),y=a(I,b.props.children),y.return=w,w=y;break e}}else if(I.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===wr&&Oc(M)===I.type){r(w,I.sibling),y=a(I,b.props),y.ref=pa(w,I,b),y.return=w,w=y;break e}r(w,I);break}else t(w,I);I=I.sibling}b.type===bn?(y=sn(b.props.children,w.mode,N,b.key),y.return=w,w=y):(N=Zi(b.type,b.key,b.props,null,w.mode,N),N.ref=pa(w,y,b),N.return=w,w=N)}return s(w);case xn:e:{for(I=b.key;y!==null;){if(y.key===I)if(y.tag===4&&y.stateNode.containerInfo===b.containerInfo&&y.stateNode.implementation===b.implementation){r(w,y.sibling),y=a(y,b.children||[]),y.return=w,w=y;break e}else{r(w,y);break}else t(w,y);y=y.sibling}y=jo(b,w.mode,N),y.return=w,w=y}return s(w);case wr:return I=b._init,A(w,y,I(b._payload),N)}if(ya(b))return T(w,y,b,N);if(ua(b))return C(w,y,b,N);Ni(w,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,y!==null&&y.tag===6?(r(w,y.sibling),y=a(y,b),y.return=w,w=y):(r(w,y),y=$o(b,w.mode,N),y.return=w,w=y),s(w)):r(w,y)}return A}var qn=Ch(!0),Eh=Ch(!1),fs=Wr(null),gs=null,Rn=null,K0=null;function Y0(){K0=Rn=gs=null}function Q0(e){var t=fs.current;he(fs),e._currentValue=t}function Bl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Fn(e,t){gs=e,K0=Rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(it=!0),e.firstContext=null)}function Et(e){var t=e._currentValue;if(K0!==e)if(e={context:e,memoizedValue:t,next:null},Rn===null){if(gs===null)throw Error(F(308));Rn=e,gs.dependencies={lanes:0,firstContext:e}}else Rn=Rn.next=e;return t}var rn=null;function J0(e){rn===null?rn=[e]:rn.push(e)}function Nh(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,J0(t)):(r.next=a.next,a.next=r),t.interleaved=r,lr(e,n)}function lr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var xr=!1;function Z0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ah(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ar(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Lr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,ie&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,lr(e,r)}return a=n.interleaved,a===null?(t.next=t,J0(n)):(t.next=a.next,a.next=t),n.interleaved=t,lr(e,r)}function Vi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,D0(e,r)}}function Pc(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?a=i=s:i=i.next=s,r=r.next}while(r!==null);i===null?a=i=t:i=i.next=t}else a=i=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function vs(e,t,r,n){var a=e.updateQueue;xr=!1;var i=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,d=l.next;l.next=null,s===null?i=d:s.next=d,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=d:o.next=d,h.lastBaseUpdate=l))}if(i!==null){var m=a.baseState;s=0,h=d=l=null,o=i;do{var v=o.lane,x=o.eventTime;if((n&v)===v){h!==null&&(h=h.next={eventTime:x,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var T=e,C=o;switch(v=t,x=r,C.tag){case 1:if(T=C.payload,typeof T=="function"){m=T.call(x,m,v);break e}m=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=C.payload,v=typeof T=="function"?T.call(x,m,v):T,v==null)break e;m=ke({},m,v);break e;case 2:xr=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,v=a.effects,v===null?a.effects=[o]:v.push(o))}else x={eventTime:x,lane:v,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(d=h=x,l=m):h=h.next=x,s|=v;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;v=o,o=v.next,v.next=null,a.lastBaseUpdate=v,a.shared.pending=null}}while(!0);if(h===null&&(l=m),a.baseState=l,a.firstBaseUpdate=d,a.lastBaseUpdate=h,t=a.shared.interleaved,t!==null){a=t;do s|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);cn|=s,e.lanes=s,e.memoizedState=m}}function zc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(F(191,a));a.call(n)}}}var si={},qt=Wr(si),Ga=Wr(si),Wa=Wr(si);function nn(e){if(e===si)throw Error(F(174));return e}function eu(e,t){switch(de(Wa,t),de(Ga,e),de(qt,si),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wl(t,e)}he(qt),de(qt,t)}function Gn(){he(qt),he(Ga),he(Wa)}function Rh(e){nn(Wa.current);var t=nn(qt.current),r=wl(t,e.type);t!==r&&(de(Ga,e),de(qt,r))}function tu(e){Ga.current===e&&(he(qt),he(Ga))}var we=Wr(0);function ys(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oo=[];function ru(){for(var e=0;e<Oo.length;e++)Oo[e]._workInProgressVersionPrimary=null;Oo.length=0}var Xi=dr.ReactCurrentDispatcher,Po=dr.ReactCurrentBatchConfig,un=0,be=null,Pe=null,Be=null,ws=!1,Aa=!1,Va=0,tg=0;function qe(){throw Error(F(321))}function nu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ft(e[r],t[r]))return!1;return!0}function au(e,t,r,n,a,i){if(un=i,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xi.current=e===null||e.memoizedState===null?ig:sg,e=r(n,a),Aa){i=0;do{if(Aa=!1,Va=0,25<=i)throw Error(F(301));i+=1,Be=Pe=null,t.updateQueue=null,Xi.current=og,e=r(n,a)}while(Aa)}if(Xi.current=xs,t=Pe!==null&&Pe.next!==null,un=0,Be=Pe=be=null,ws=!1,t)throw Error(F(300));return e}function iu(){var e=Va!==0;return Va=0,e}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?be.memoizedState=Be=e:Be=Be.next=e,Be}function Nt(){if(Pe===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=Be===null?be.memoizedState:Be.next;if(t!==null)Be=t,Pe=e;else{if(e===null)throw Error(F(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Be===null?be.memoizedState=Be=e:Be=Be.next=e}return Be}function Xa(e,t){return typeof t=="function"?t(e):t}function zo(e){var t=Nt(),r=t.queue;if(r===null)throw Error(F(311));r.lastRenderedReducer=e;var n=Pe,a=n.baseQueue,i=r.pending;if(i!==null){if(a!==null){var s=a.next;a.next=i.next,i.next=s}n.baseQueue=a=i,r.pending=null}if(a!==null){i=a.next,n=n.baseState;var o=s=null,l=null,d=i;do{var h=d.lane;if((un&h)===h)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var m={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(o=l=m,s=n):l=l.next=m,be.lanes|=h,cn|=h}d=d.next}while(d!==null&&d!==i);l===null?s=n:l.next=o,Ft(n,t.memoizedState)||(it=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do i=a.lane,be.lanes|=i,cn|=i,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Fo(e){var t=Nt(),r=t.queue;if(r===null)throw Error(F(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,i=t.memoizedState;if(a!==null){r.pending=null;var s=a=a.next;do i=e(i,s.action),s=s.next;while(s!==a);Ft(i,t.memoizedState)||(it=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function Mh(){}function Ih(e,t){var r=be,n=Nt(),a=t(),i=!Ft(n.memoizedState,a);if(i&&(n.memoizedState=a,it=!0),n=n.queue,su(Oh.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||Be!==null&&Be.memoizedState.tag&1){if(r.flags|=2048,Ka(9,Lh.bind(null,r,n,a,t),void 0,null),$e===null)throw Error(F(349));un&30||_h(r,t,a)}return a}function _h(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Lh(e,t,r,n){t.value=r,t.getSnapshot=n,Ph(t)&&zh(e)}function Oh(e,t,r){return r(function(){Ph(t)&&zh(e)})}function Ph(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ft(e,r)}catch{return!0}}function zh(e){var t=lr(e,1);t!==null&&zt(t,e,1,-1)}function Fc(e){var t=Bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:e},t.queue=e,e=e.dispatch=ag.bind(null,be,e),[t.memoizedState,e]}function Ka(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Fh(){return Nt().memoizedState}function Ki(e,t,r,n){var a=Bt();be.flags|=e,a.memoizedState=Ka(1|t,r,void 0,n===void 0?null:n)}function js(e,t,r,n){var a=Nt();n=n===void 0?null:n;var i=void 0;if(Pe!==null){var s=Pe.memoizedState;if(i=s.destroy,n!==null&&nu(n,s.deps)){a.memoizedState=Ka(t,r,i,n);return}}be.flags|=e,a.memoizedState=Ka(1|t,r,i,n)}function Dc(e,t){return Ki(8390656,8,e,t)}function su(e,t){return js(2048,8,e,t)}function Dh(e,t){return js(4,2,e,t)}function Bh(e,t){return js(4,4,e,t)}function $h(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jh(e,t,r){return r=r!=null?r.concat([e]):null,js(4,4,$h.bind(null,t,e),r)}function ou(){}function Uh(e,t){var r=Nt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&nu(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Hh(e,t){var r=Nt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&nu(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function qh(e,t,r){return un&21?(Ft(r,t)||(r=Km(),be.lanes|=r,cn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=r)}function rg(e,t){var r=ue;ue=r!==0&&4>r?r:4,e(!0);var n=Po.transition;Po.transition={};try{e(!1),t()}finally{ue=r,Po.transition=n}}function Gh(){return Nt().memoizedState}function ng(e,t,r){var n=Pr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Wh(e))Vh(t,r);else if(r=Nh(e,t,r,n),r!==null){var a=Ze();zt(r,e,n,a),Xh(r,t,n)}}function ag(e,t,r){var n=Pr(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Wh(e))Vh(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,o=i(s,r);if(a.hasEagerState=!0,a.eagerState=o,Ft(o,s)){var l=t.interleaved;l===null?(a.next=a,J0(t)):(a.next=l.next,l.next=a),t.interleaved=a;return}}catch{}finally{}r=Nh(e,t,a,n),r!==null&&(a=Ze(),zt(r,e,n,a),Xh(r,t,n))}}function Wh(e){var t=e.alternate;return e===be||t!==null&&t===be}function Vh(e,t){Aa=ws=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Xh(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,D0(e,r)}}var xs={readContext:Et,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},ig={readContext:Et,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:Dc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ki(4194308,4,$h.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ki(4,2,e,t)},useMemo:function(e,t){var r=Bt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Bt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=ng.bind(null,be,e),[n.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:Fc,useDebugValue:ou,useDeferredValue:function(e){return Bt().memoizedState=e},useTransition:function(){var e=Fc(!1),t=e[0];return e=rg.bind(null,e[1]),Bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=be,a=Bt();if(pe){if(r===void 0)throw Error(F(407));r=r()}else{if(r=t(),$e===null)throw Error(F(349));un&30||_h(n,t,r)}a.memoizedState=r;var i={value:r,getSnapshot:t};return a.queue=i,Dc(Oh.bind(null,n,i,e),[e]),n.flags|=2048,Ka(9,Lh.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=Bt(),t=$e.identifierPrefix;if(pe){var r=nr,n=rr;r=(n&~(1<<32-Pt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Va++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=tg++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sg={readContext:Et,useCallback:Uh,useContext:Et,useEffect:su,useImperativeHandle:jh,useInsertionEffect:Dh,useLayoutEffect:Bh,useMemo:Hh,useReducer:zo,useRef:Fh,useState:function(){return zo(Xa)},useDebugValue:ou,useDeferredValue:function(e){var t=Nt();return qh(t,Pe.memoizedState,e)},useTransition:function(){var e=zo(Xa)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:Mh,useSyncExternalStore:Ih,useId:Gh,unstable_isNewReconciler:!1},og={readContext:Et,useCallback:Uh,useContext:Et,useEffect:su,useImperativeHandle:jh,useInsertionEffect:Dh,useLayoutEffect:Bh,useMemo:Hh,useReducer:Fo,useRef:Fh,useState:function(){return Fo(Xa)},useDebugValue:ou,useDeferredValue:function(e){var t=Nt();return Pe===null?t.memoizedState=e:qh(t,Pe.memoizedState,e)},useTransition:function(){var e=Fo(Xa)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:Mh,useSyncExternalStore:Ih,useId:Gh,unstable_isNewReconciler:!1};function _t(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function $l(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ke({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Us={isMounted:function(e){return(e=e._reactInternals)?hn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ze(),a=Pr(e),i=ar(n,a);i.payload=t,r!=null&&(i.callback=r),t=Lr(e,i,a),t!==null&&(zt(t,e,a,n),Vi(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ze(),a=Pr(e),i=ar(n,a);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Lr(e,i,a),t!==null&&(zt(t,e,a,n),Vi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ze(),n=Pr(e),a=ar(r,n);a.tag=2,t!=null&&(a.callback=t),t=Lr(e,a,n),t!==null&&(zt(t,e,n,r),Vi(t,e,n))}};function Bc(e,t,r,n,a,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!ja(r,n)||!ja(a,i):!0}function Kh(e,t,r){var n=!1,a=$r,i=t.contextType;return typeof i=="object"&&i!==null?i=Et(i):(a=ot(t)?on:Xe.current,n=t.contextTypes,i=(n=n!=null)?Un(e,a):$r),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Us,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function $c(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function jl(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},Z0(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Et(i):(i=ot(t)?on:Xe.current,a.context=Un(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&($l(e,t,i,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Us.enqueueReplaceState(a,a.state,null),vs(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Wn(e,t){try{var r="",n=t;do r+=Pf(n),n=n.return;while(n);var a=r}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Do(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ul(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var lg=typeof WeakMap=="function"?WeakMap:Map;function Yh(e,t,r){r=ar(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ss||(Ss=!0,Jl=n),Ul(e,t)},r}function Qh(e,t,r){r=ar(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){Ul(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Ul(e,t),typeof n!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function jc(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new lg;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=Sg.bind(null,e,t,r),t.then(e,e))}function Uc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hc(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=ar(-1,1),t.tag=2,Lr(r,t,1))),r.lanes|=1),e)}var ug=dr.ReactCurrentOwner,it=!1;function Ye(e,t,r,n){t.child=e===null?Eh(t,null,r,n):qn(t,e.child,r,n)}function qc(e,t,r,n,a){r=r.render;var i=t.ref;return Fn(t,a),n=au(e,t,r,n,i,a),r=iu(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,ur(e,t,a)):(pe&&r&&W0(t),t.flags|=1,Ye(e,t,n,a),t.child)}function Gc(e,t,r,n,a){if(e===null){var i=r.type;return typeof i=="function"&&!fu(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Jh(e,t,i,n,a)):(e=Zi(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var s=i.memoizedProps;if(r=r.compare,r=r!==null?r:ja,r(s,n)&&e.ref===t.ref)return ur(e,t,a)}return t.flags|=1,e=zr(i,n),e.ref=t.ref,e.return=t,t.child=e}function Jh(e,t,r,n,a){if(e!==null){var i=e.memoizedProps;if(ja(i,n)&&e.ref===t.ref)if(it=!1,t.pendingProps=n=i,(e.lanes&a)!==0)e.flags&131072&&(it=!0);else return t.lanes=e.lanes,ur(e,t,a)}return Hl(e,t,r,n,a)}function Zh(e,t,r){var n=t.pendingProps,a=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(In,ct),ct|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(In,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,de(In,ct),ct|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,de(In,ct),ct|=n;return Ye(e,t,a,r),t.child}function e1(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Hl(e,t,r,n,a){var i=ot(r)?on:Xe.current;return i=Un(t,i),Fn(t,a),r=au(e,t,r,n,i,a),n=iu(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,ur(e,t,a)):(pe&&n&&W0(t),t.flags|=1,Ye(e,t,r,a),t.child)}function Wc(e,t,r,n,a){if(ot(r)){var i=!0;ms(t)}else i=!1;if(Fn(t,a),t.stateNode===null)Yi(e,t),Kh(t,r,n),jl(t,r,n,a),n=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var l=s.context,d=r.contextType;typeof d=="object"&&d!==null?d=Et(d):(d=ot(r)?on:Xe.current,d=Un(t,d));var h=r.getDerivedStateFromProps,m=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==n||l!==d)&&$c(t,s,n,d),xr=!1;var v=t.memoizedState;s.state=v,vs(t,n,s,a),l=t.memoizedState,o!==n||v!==l||st.current||xr?(typeof h=="function"&&($l(t,r,h,n),l=t.memoizedState),(o=xr||Bc(t,r,o,n,v,l,d))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),s.props=n,s.state=l,s.context=d,n=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,Ah(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:_t(t.type,o),s.props=d,m=t.pendingProps,v=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=Et(l):(l=ot(r)?on:Xe.current,l=Un(t,l));var x=r.getDerivedStateFromProps;(h=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==m||v!==l)&&$c(t,s,n,l),xr=!1,v=t.memoizedState,s.state=v,vs(t,n,s,a);var T=t.memoizedState;o!==m||v!==T||st.current||xr?(typeof x=="function"&&($l(t,r,x,n),T=t.memoizedState),(d=xr||Bc(t,r,d,n,v,T,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,T,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,T,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=T),s.props=n,s.state=T,s.context=l,n=d):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),n=!1)}return ql(e,t,r,n,i,a)}function ql(e,t,r,n,a,i){e1(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return a&&Ic(t,r,!1),ur(e,t,i);n=t.stateNode,ug.current=t;var o=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=qn(t,e.child,null,i),t.child=qn(t,null,o,i)):Ye(e,t,o,i),t.memoizedState=n.state,a&&Ic(t,r,!0),t.child}function t1(e){var t=e.stateNode;t.pendingContext?Mc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mc(e,t.context,!1),eu(e,t.containerInfo)}function Vc(e,t,r,n,a){return Hn(),X0(a),t.flags|=256,Ye(e,t,r,n),t.child}var Gl={dehydrated:null,treeContext:null,retryLane:0};function Wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function r1(e,t,r){var n=t.pendingProps,a=we.current,i=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(a&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),de(we,a&1),e===null)return Dl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,i?(n=t.mode,i=t.child,s={mode:"hidden",children:s},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Gs(s,n,0,null),e=sn(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Wl(r),t.memoizedState=Gl,e):lu(t,s));if(a=e.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return cg(e,t,s,n,o,a,r);if(i){i=n.fallback,s=t.mode,a=e.child,o=a.sibling;var l={mode:"hidden",children:n.children};return!(s&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=zr(a,l),n.subtreeFlags=a.subtreeFlags&14680064),o!==null?i=zr(o,i):(i=sn(i,s,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,s=e.child.memoizedState,s=s===null?Wl(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~r,t.memoizedState=Gl,n}return i=e.child,e=i.sibling,n=zr(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function lu(e,t){return t=Gs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ai(e,t,r,n){return n!==null&&X0(n),qn(t,e.child,null,r),e=lu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cg(e,t,r,n,a,i,s){if(r)return t.flags&256?(t.flags&=-257,n=Do(Error(F(422))),Ai(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,a=t.mode,n=Gs({mode:"visible",children:n.children},a,0,null),i=sn(i,a,s,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&qn(t,e.child,null,s),t.child.memoizedState=Wl(s),t.memoizedState=Gl,i);if(!(t.mode&1))return Ai(e,t,s,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var o=n.dgst;return n=o,i=Error(F(419)),n=Do(i,n,void 0),Ai(e,t,s,n)}if(o=(s&e.childLanes)!==0,it||o){if(n=$e,n!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|s)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,lr(e,a),zt(n,e,a,-1))}return pu(),n=Do(Error(F(421))),Ai(e,t,s,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=kg.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,mt=_r(a.nextSibling),ht=t,pe=!0,Ot=null,e!==null&&(bt[St++]=rr,bt[St++]=nr,bt[St++]=ln,rr=e.id,nr=e.overflow,ln=t),t=lu(t,n.children),t.flags|=4096,t)}function Xc(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Bl(e.return,t,r)}function Bo(e,t,r,n,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=a)}function n1(e,t,r){var n=t.pendingProps,a=n.revealOrder,i=n.tail;if(Ye(e,t,n.children,r),n=we.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xc(e,r,t);else if(e.tag===19)Xc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(de(we,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&ys(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Bo(t,!1,a,r,i);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ys(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Bo(t,!0,r,null,i);break;case"together":Bo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ur(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,r=zr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=zr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function dg(e,t,r){switch(t.tag){case 3:t1(t),Hn();break;case 5:Rh(t);break;case 1:ot(t.type)&&ms(t);break;case 4:eu(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;de(fs,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(de(we,we.current&1),t.flags|=128,null):r&t.child.childLanes?r1(e,t,r):(de(we,we.current&1),e=ur(e,t,r),e!==null?e.sibling:null);de(we,we.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return n1(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),de(we,we.current),n)break;return null;case 22:case 23:return t.lanes=0,Zh(e,t,r)}return ur(e,t,r)}var a1,Vl,i1,s1;a1=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Vl=function(){};i1=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,nn(qt.current);var i=null;switch(r){case"input":a=fl(e,a),n=fl(e,n),i=[];break;case"select":a=ke({},a,{value:void 0}),n=ke({},n,{value:void 0}),i=[];break;case"textarea":a=yl(e,a),n=yl(e,n),i=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=cs)}xl(r,n);var s;r=null;for(d in a)if(!n.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var o=a[d];for(s in o)o.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Oa.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in n){var l=n[d];if(o=a!=null?a[d]:void 0,n.hasOwnProperty(d)&&l!==o&&(l!=null||o!=null))if(d==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(i||(i=[]),i.push(d,r)),r=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(i=i||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Oa.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&me("scroll",e),i||o===l||(i=[])):(i=i||[]).push(d,l))}r&&(i=i||[]).push("style",r);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};s1=function(e,t,r,n){r!==n&&(t.flags|=4)};function fa(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function mg(e,t,r){var n=t.pendingProps;switch(V0(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(t),null;case 1:return ot(t.type)&&ds(),Ge(t),null;case 3:return n=t.stateNode,Gn(),he(st),he(Xe),ru(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ei(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ot!==null&&(t0(Ot),Ot=null))),Vl(e,t),Ge(t),null;case 5:tu(t);var a=nn(Wa.current);if(r=t.type,e!==null&&t.stateNode!=null)i1(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(F(166));return Ge(t),null}if(e=nn(qt.current),Ei(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[jt]=t,n[qa]=i,e=(t.mode&1)!==0,r){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<xa.length;a++)me(xa[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":nc(n,i),me("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},me("invalid",n);break;case"textarea":ic(n,i),me("invalid",n)}xl(r,i),a=null;for(var s in i)if(i.hasOwnProperty(s)){var o=i[s];s==="children"?typeof o=="string"?n.textContent!==o&&(i.suppressHydrationWarning!==!0&&Ci(n.textContent,o,e),a=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&Ci(n.textContent,o,e),a=["children",""+o]):Oa.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&me("scroll",n)}switch(r){case"input":vi(n),ac(n,i,!0);break;case"textarea":vi(n),sc(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=cs)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Om(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[jt]=t,e[qa]=n,a1(e,t,!1,!1),t.stateNode=e;e:{switch(s=bl(r,n),r){case"dialog":me("cancel",e),me("close",e),a=n;break;case"iframe":case"object":case"embed":me("load",e),a=n;break;case"video":case"audio":for(a=0;a<xa.length;a++)me(xa[a],e);a=n;break;case"source":me("error",e),a=n;break;case"img":case"image":case"link":me("error",e),me("load",e),a=n;break;case"details":me("toggle",e),a=n;break;case"input":nc(e,n),a=fl(e,n),me("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=ke({},n,{value:void 0}),me("invalid",e);break;case"textarea":ic(e,n),a=yl(e,n),me("invalid",e);break;default:a=n}xl(r,a),o=a;for(i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="style"?Fm(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Pm(e,l)):i==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Pa(e,l):typeof l=="number"&&Pa(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Oa.hasOwnProperty(i)?l!=null&&i==="onScroll"&&me("scroll",e):l!=null&&_0(e,i,l,s))}switch(r){case"input":vi(e),ac(e,n,!1);break;case"textarea":vi(e),sc(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Br(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?Ln(e,!!n.multiple,i,!1):n.defaultValue!=null&&Ln(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=cs)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ge(t),null;case 6:if(e&&t.stateNode!=null)s1(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(F(166));if(r=nn(Wa.current),nn(qt.current),Ei(t)){if(n=t.stateNode,r=t.memoizedProps,n[jt]=t,(i=n.nodeValue!==r)&&(e=ht,e!==null))switch(e.tag){case 3:Ci(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ci(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[jt]=t,t.stateNode=n}return Ge(t),null;case 13:if(he(we),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&mt!==null&&t.mode&1&&!(t.flags&128))Th(),Hn(),t.flags|=98560,i=!1;else if(i=Ei(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(F(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[jt]=t}else Hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ge(t),i=!1}else Ot!==null&&(t0(Ot),Ot=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||we.current&1?ze===0&&(ze=3):pu())),t.updateQueue!==null&&(t.flags|=4),Ge(t),null);case 4:return Gn(),Vl(e,t),e===null&&Ua(t.stateNode.containerInfo),Ge(t),null;case 10:return Q0(t.type._context),Ge(t),null;case 17:return ot(t.type)&&ds(),Ge(t),null;case 19:if(he(we),i=t.memoizedState,i===null)return Ge(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)fa(i,!1);else{if(ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ys(e),s!==null){for(t.flags|=128,fa(i,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return de(we,we.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ae()>Vn&&(t.flags|=128,n=!0,fa(i,!1),t.lanes=4194304)}else{if(!n)if(e=ys(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),fa(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!pe)return Ge(t),null}else 2*Ae()-i.renderingStartTime>Vn&&r!==1073741824&&(t.flags|=128,n=!0,fa(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(r=i.last,r!==null?r.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ae(),t.sibling=null,r=we.current,de(we,n?r&1|2:r&1),t):(Ge(t),null);case 22:case 23:return hu(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?ct&1073741824&&(Ge(t),t.subtreeFlags&6&&(t.flags|=8192)):Ge(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function hg(e,t){switch(V0(t),t.tag){case 1:return ot(t.type)&&ds(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),he(st),he(Xe),ru(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return tu(t),null;case 13:if(he(we),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(we),null;case 4:return Gn(),null;case 10:return Q0(t.type._context),null;case 22:case 23:return hu(),null;case 24:return null;default:return null}}var Ri=!1,We=!1,pg=typeof WeakSet=="function"?WeakSet:Set,G=null;function Mn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Ee(e,t,n)}else r.current=null}function Xl(e,t,r){try{r()}catch(n){Ee(e,t,n)}}var Kc=!1;function fg(e,t){if(Il=os,e=dh(),G0(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var s=0,o=-1,l=-1,d=0,h=0,m=e,v=null;t:for(;;){for(var x;m!==r||a!==0&&m.nodeType!==3||(o=s+a),m!==i||n!==0&&m.nodeType!==3||(l=s+n),m.nodeType===3&&(s+=m.nodeValue.length),(x=m.firstChild)!==null;)v=m,m=x;for(;;){if(m===e)break t;if(v===r&&++d===a&&(o=s),v===i&&++h===n&&(l=s),(x=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=x}r=o===-1||l===-1?null:{start:o,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(_l={focusedElem:e,selectionRange:r},os=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var T=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var C=T.memoizedProps,A=T.memoizedState,w=t.stateNode,y=w.getSnapshotBeforeUpdate(t.elementType===t.type?C:_t(t.type,C),A);w.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(N){Ee(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return T=Kc,Kc=!1,T}function Ra(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Xl(t,r,i)}a=a.next}while(a!==n)}}function Hs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Kl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function o1(e){var t=e.alternate;t!==null&&(e.alternate=null,o1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jt],delete t[qa],delete t[Pl],delete t[Q4],delete t[J4])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function l1(e){return e.tag===5||e.tag===3||e.tag===4}function Yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||l1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=cs));else if(n!==4&&(e=e.child,e!==null))for(Yl(e,t,r),e=e.sibling;e!==null;)Yl(e,t,r),e=e.sibling}function Ql(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ql(e,t,r),e=e.sibling;e!==null;)Ql(e,t,r),e=e.sibling}var je=null,Lt=!1;function gr(e,t,r){for(r=r.child;r!==null;)u1(e,t,r),r=r.sibling}function u1(e,t,r){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Ps,r)}catch{}switch(r.tag){case 5:We||Mn(r,t);case 6:var n=je,a=Lt;je=null,gr(e,t,r),je=n,Lt=a,je!==null&&(Lt?(e=je,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):je.removeChild(r.stateNode));break;case 18:je!==null&&(Lt?(e=je,r=r.stateNode,e.nodeType===8?_o(e.parentNode,r):e.nodeType===1&&_o(e,r),Ba(e)):_o(je,r.stateNode));break;case 4:n=je,a=Lt,je=r.stateNode.containerInfo,Lt=!0,gr(e,t,r),je=n,Lt=a;break;case 0:case 11:case 14:case 15:if(!We&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var i=a,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Xl(r,t,s),a=a.next}while(a!==n)}gr(e,t,r);break;case 1:if(!We&&(Mn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(o){Ee(r,t,o)}gr(e,t,r);break;case 21:gr(e,t,r);break;case 22:r.mode&1?(We=(n=We)||r.memoizedState!==null,gr(e,t,r),We=n):gr(e,t,r);break;default:gr(e,t,r)}}function Qc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new pg),t.forEach(function(n){var a=Tg.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function Mt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var i=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:je=o.stateNode,Lt=!1;break e;case 3:je=o.stateNode.containerInfo,Lt=!0;break e;case 4:je=o.stateNode.containerInfo,Lt=!0;break e}o=o.return}if(je===null)throw Error(F(160));u1(i,s,a),je=null,Lt=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(d){Ee(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)c1(t,e),t=t.sibling}function c1(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),Dt(e),n&4){try{Ra(3,e,e.return),Hs(3,e)}catch(C){Ee(e,e.return,C)}try{Ra(5,e,e.return)}catch(C){Ee(e,e.return,C)}}break;case 1:Mt(t,e),Dt(e),n&512&&r!==null&&Mn(r,r.return);break;case 5:if(Mt(t,e),Dt(e),n&512&&r!==null&&Mn(r,r.return),e.flags&32){var a=e.stateNode;try{Pa(a,"")}catch(C){Ee(e,e.return,C)}}if(n&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,s=r!==null?r.memoizedProps:i,o=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&_m(a,i),bl(o,s);var d=bl(o,i);for(s=0;s<l.length;s+=2){var h=l[s],m=l[s+1];h==="style"?Fm(a,m):h==="dangerouslySetInnerHTML"?Pm(a,m):h==="children"?Pa(a,m):_0(a,h,m,d)}switch(o){case"input":gl(a,i);break;case"textarea":Lm(a,i);break;case"select":var v=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Ln(a,!!i.multiple,x,!1):v!==!!i.multiple&&(i.defaultValue!=null?Ln(a,!!i.multiple,i.defaultValue,!0):Ln(a,!!i.multiple,i.multiple?[]:"",!1))}a[qa]=i}catch(C){Ee(e,e.return,C)}}break;case 6:if(Mt(t,e),Dt(e),n&4){if(e.stateNode===null)throw Error(F(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(C){Ee(e,e.return,C)}}break;case 3:if(Mt(t,e),Dt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Ba(t.containerInfo)}catch(C){Ee(e,e.return,C)}break;case 4:Mt(t,e),Dt(e);break;case 13:Mt(t,e),Dt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(du=Ae())),n&4&&Qc(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(We=(d=We)||h,Mt(t,e),We=d):Mt(t,e),Dt(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(G=e,h=e.child;h!==null;){for(m=G=h;G!==null;){switch(v=G,x=v.child,v.tag){case 0:case 11:case 14:case 15:Ra(4,v,v.return);break;case 1:Mn(v,v.return);var T=v.stateNode;if(typeof T.componentWillUnmount=="function"){n=v,r=v.return;try{t=n,T.props=t.memoizedProps,T.state=t.memoizedState,T.componentWillUnmount()}catch(C){Ee(n,r,C)}}break;case 5:Mn(v,v.return);break;case 22:if(v.memoizedState!==null){Zc(m);continue}}x!==null?(x.return=v,G=x):Zc(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{a=m.stateNode,d?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=m.stateNode,l=m.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=zm("display",s))}catch(C){Ee(e,e.return,C)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(C){Ee(e,e.return,C)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Mt(t,e),Dt(e),n&4&&Qc(e);break;case 21:break;default:Mt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(l1(r)){var n=r;break e}r=r.return}throw Error(F(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(Pa(a,""),n.flags&=-33);var i=Yc(e);Ql(e,i,a);break;case 3:case 4:var s=n.stateNode.containerInfo,o=Yc(e);Yl(e,o,s);break;default:throw Error(F(161))}}catch(l){Ee(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gg(e,t,r){G=e,d1(e)}function d1(e,t,r){for(var n=(e.mode&1)!==0;G!==null;){var a=G,i=a.child;if(a.tag===22&&n){var s=a.memoizedState!==null||Ri;if(!s){var o=a.alternate,l=o!==null&&o.memoizedState!==null||We;o=Ri;var d=We;if(Ri=s,(We=l)&&!d)for(G=a;G!==null;)s=G,l=s.child,s.tag===22&&s.memoizedState!==null?ed(a):l!==null?(l.return=s,G=l):ed(a);for(;i!==null;)G=i,d1(i),i=i.sibling;G=a,Ri=o,We=d}Jc(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,G=i):Jc(e)}}function Jc(e){for(;G!==null;){var t=G;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:We||Hs(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!We)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:_t(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&zc(t,i,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}zc(t,s,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Ba(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}We||t.flags&512&&Kl(t)}catch(v){Ee(t,t.return,v)}}if(t===e){G=null;break}if(r=t.sibling,r!==null){r.return=t.return,G=r;break}G=t.return}}function Zc(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var r=t.sibling;if(r!==null){r.return=t.return,G=r;break}G=t.return}}function ed(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Hs(4,t)}catch(l){Ee(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(l){Ee(t,a,l)}}var i=t.return;try{Kl(t)}catch(l){Ee(t,i,l)}break;case 5:var s=t.return;try{Kl(t)}catch(l){Ee(t,s,l)}}}catch(l){Ee(t,t.return,l)}if(t===e){G=null;break}var o=t.sibling;if(o!==null){o.return=t.return,G=o;break}G=t.return}}var vg=Math.ceil,bs=dr.ReactCurrentDispatcher,uu=dr.ReactCurrentOwner,Ct=dr.ReactCurrentBatchConfig,ie=0,$e=null,Re=null,Ue=0,ct=0,In=Wr(0),ze=0,Ya=null,cn=0,qs=0,cu=0,Ma=null,at=null,du=0,Vn=1/0,Jt=null,Ss=!1,Jl=null,Or=null,Mi=!1,Cr=null,ks=0,Ia=0,Zl=null,Qi=-1,Ji=0;function Ze(){return ie&6?Ae():Qi!==-1?Qi:Qi=Ae()}function Pr(e){return e.mode&1?ie&2&&Ue!==0?Ue&-Ue:eg.transition!==null?(Ji===0&&(Ji=Km()),Ji):(e=ue,e!==0||(e=window.event,e=e===void 0?16:rh(e.type)),e):1}function zt(e,t,r,n){if(50<Ia)throw Ia=0,Zl=null,Error(F(185));ni(e,r,n),(!(ie&2)||e!==$e)&&(e===$e&&(!(ie&2)&&(qs|=r),ze===4&&kr(e,Ue)),lt(e,n),r===1&&ie===0&&!(t.mode&1)&&(Vn=Ae()+500,$s&&Vr()))}function lt(e,t){var r=e.callbackNode;e4(e,t);var n=ss(e,e===$e?Ue:0);if(n===0)r!==null&&uc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&uc(r),t===1)e.tag===0?Z4(td.bind(null,e)):bh(td.bind(null,e)),K4(function(){!(ie&6)&&Vr()}),r=null;else{switch(Ym(n)){case 1:r=F0;break;case 4:r=Vm;break;case 16:r=is;break;case 536870912:r=Xm;break;default:r=is}r=w1(r,m1.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function m1(e,t){if(Qi=-1,Ji=0,ie&6)throw Error(F(327));var r=e.callbackNode;if(Dn()&&e.callbackNode!==r)return null;var n=ss(e,e===$e?Ue:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Ts(e,n);else{t=n;var a=ie;ie|=2;var i=p1();($e!==e||Ue!==t)&&(Jt=null,Vn=Ae()+500,an(e,t));do try{xg();break}catch(o){h1(e,o)}while(!0);Y0(),bs.current=i,ie=a,Re!==null?t=0:($e=null,Ue=0,t=ze)}if(t!==0){if(t===2&&(a=El(e),a!==0&&(n=a,t=e0(e,a))),t===1)throw r=Ya,an(e,0),kr(e,n),lt(e,Ae()),r;if(t===6)kr(e,n);else{if(a=e.current.alternate,!(n&30)&&!yg(a)&&(t=Ts(e,n),t===2&&(i=El(e),i!==0&&(n=i,t=e0(e,i))),t===1))throw r=Ya,an(e,0),kr(e,n),lt(e,Ae()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(F(345));case 2:Zr(e,at,Jt);break;case 3:if(kr(e,n),(n&130023424)===n&&(t=du+500-Ae(),10<t)){if(ss(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){Ze(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ol(Zr.bind(null,e,at,Jt),t);break}Zr(e,at,Jt);break;case 4:if(kr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var s=31-Pt(n);i=1<<s,s=t[s],s>a&&(a=s),n&=~i}if(n=a,n=Ae()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*vg(n/1960))-n,10<n){e.timeoutHandle=Ol(Zr.bind(null,e,at,Jt),n);break}Zr(e,at,Jt);break;case 5:Zr(e,at,Jt);break;default:throw Error(F(329))}}}return lt(e,Ae()),e.callbackNode===r?m1.bind(null,e):null}function e0(e,t){var r=Ma;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=Ts(e,t),e!==2&&(t=at,at=r,t!==null&&t0(t)),e}function t0(e){at===null?at=e:at.push.apply(at,e)}function yg(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],i=a.getSnapshot;a=a.value;try{if(!Ft(i(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kr(e,t){for(t&=~cu,t&=~qs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Pt(t),n=1<<r;e[r]=-1,t&=~n}}function td(e){if(ie&6)throw Error(F(327));Dn();var t=ss(e,0);if(!(t&1))return lt(e,Ae()),null;var r=Ts(e,t);if(e.tag!==0&&r===2){var n=El(e);n!==0&&(t=n,r=e0(e,n))}if(r===1)throw r=Ya,an(e,0),kr(e,t),lt(e,Ae()),r;if(r===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zr(e,at,Jt),lt(e,Ae()),null}function mu(e,t){var r=ie;ie|=1;try{return e(t)}finally{ie=r,ie===0&&(Vn=Ae()+500,$s&&Vr())}}function dn(e){Cr!==null&&Cr.tag===0&&!(ie&6)&&Dn();var t=ie;ie|=1;var r=Ct.transition,n=ue;try{if(Ct.transition=null,ue=1,e)return e()}finally{ue=n,Ct.transition=r,ie=t,!(ie&6)&&Vr()}}function hu(){ct=In.current,he(In)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,X4(r)),Re!==null)for(r=Re.return;r!==null;){var n=r;switch(V0(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ds();break;case 3:Gn(),he(st),he(Xe),ru();break;case 5:tu(n);break;case 4:Gn();break;case 13:he(we);break;case 19:he(we);break;case 10:Q0(n.type._context);break;case 22:case 23:hu()}r=r.return}if($e=e,Re=e=zr(e.current,null),Ue=ct=t,ze=0,Ya=null,cu=qs=cn=0,at=Ma=null,rn!==null){for(t=0;t<rn.length;t++)if(r=rn[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,i=r.pending;if(i!==null){var s=i.next;i.next=a,n.next=s}r.pending=n}rn=null}return e}function h1(e,t){do{var r=Re;try{if(Y0(),Xi.current=xs,ws){for(var n=be.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}ws=!1}if(un=0,Be=Pe=be=null,Aa=!1,Va=0,uu.current=null,r===null||r.return===null){ze=1,Ya=t,Re=null;break}e:{var i=e,s=r.return,o=r,l=t;if(t=Ue,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,h=o,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var v=h.alternate;v?(h.updateQueue=v.updateQueue,h.memoizedState=v.memoizedState,h.lanes=v.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=Uc(s);if(x!==null){x.flags&=-257,Hc(x,s,o,i,t),x.mode&1&&jc(i,d,t),t=x,l=d;var T=t.updateQueue;if(T===null){var C=new Set;C.add(l),t.updateQueue=C}else T.add(l);break e}else{if(!(t&1)){jc(i,d,t),pu();break e}l=Error(F(426))}}else if(pe&&o.mode&1){var A=Uc(s);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Hc(A,s,o,i,t),X0(Wn(l,o));break e}}i=l=Wn(l,o),ze!==4&&(ze=2),Ma===null?Ma=[i]:Ma.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var w=Yh(i,l,t);Pc(i,w);break e;case 1:o=l;var y=i.type,b=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Or===null||!Or.has(b)))){i.flags|=65536,t&=-t,i.lanes|=t;var N=Qh(i,o,t);Pc(i,N);break e}}i=i.return}while(i!==null)}g1(r)}catch(M){t=M,Re===r&&r!==null&&(Re=r=r.return);continue}break}while(!0)}function p1(){var e=bs.current;return bs.current=xs,e===null?xs:e}function pu(){(ze===0||ze===3||ze===2)&&(ze=4),$e===null||!(cn&268435455)&&!(qs&268435455)||kr($e,Ue)}function Ts(e,t){var r=ie;ie|=2;var n=p1();($e!==e||Ue!==t)&&(Jt=null,an(e,t));do try{wg();break}catch(a){h1(e,a)}while(!0);if(Y0(),ie=r,bs.current=n,Re!==null)throw Error(F(261));return $e=null,Ue=0,ze}function wg(){for(;Re!==null;)f1(Re)}function xg(){for(;Re!==null&&!Gf();)f1(Re)}function f1(e){var t=y1(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?g1(e):Re=t,uu.current=null}function g1(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=hg(r,t),r!==null){r.flags&=32767,Re=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Re=null;return}}else if(r=mg(r,t,ct),r!==null){Re=r;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);ze===0&&(ze=5)}function Zr(e,t,r){var n=ue,a=Ct.transition;try{Ct.transition=null,ue=1,bg(e,t,r,n)}finally{Ct.transition=a,ue=n}return null}function bg(e,t,r,n){do Dn();while(Cr!==null);if(ie&6)throw Error(F(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(t4(e,i),e===$e&&(Re=$e=null,Ue=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Mi||(Mi=!0,w1(is,function(){return Dn(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Ct.transition,Ct.transition=null;var s=ue;ue=1;var o=ie;ie|=4,uu.current=null,fg(e,r),c1(r,e),j4(_l),os=!!Il,_l=Il=null,e.current=r,gg(r),Wf(),ie=o,ue=s,Ct.transition=i}else e.current=r;if(Mi&&(Mi=!1,Cr=e,ks=a),i=e.pendingLanes,i===0&&(Or=null),Kf(r.stateNode),lt(e,Ae()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(Ss)throw Ss=!1,e=Jl,Jl=null,e;return ks&1&&e.tag!==0&&Dn(),i=e.pendingLanes,i&1?e===Zl?Ia++:(Ia=0,Zl=e):Ia=0,Vr(),null}function Dn(){if(Cr!==null){var e=Ym(ks),t=Ct.transition,r=ue;try{if(Ct.transition=null,ue=16>e?16:e,Cr===null)var n=!1;else{if(e=Cr,Cr=null,ks=0,ie&6)throw Error(F(331));var a=ie;for(ie|=4,G=e.current;G!==null;){var i=G,s=i.child;if(G.flags&16){var o=i.deletions;if(o!==null){for(var l=0;l<o.length;l++){var d=o[l];for(G=d;G!==null;){var h=G;switch(h.tag){case 0:case 11:case 15:Ra(8,h,i)}var m=h.child;if(m!==null)m.return=h,G=m;else for(;G!==null;){h=G;var v=h.sibling,x=h.return;if(o1(h),h===d){G=null;break}if(v!==null){v.return=x,G=v;break}G=x}}}var T=i.alternate;if(T!==null){var C=T.child;if(C!==null){T.child=null;do{var A=C.sibling;C.sibling=null,C=A}while(C!==null)}}G=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,G=s;else e:for(;G!==null;){if(i=G,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ra(9,i,i.return)}var w=i.sibling;if(w!==null){w.return=i.return,G=w;break e}G=i.return}}var y=e.current;for(G=y;G!==null;){s=G;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,G=b;else e:for(s=y;G!==null;){if(o=G,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Hs(9,o)}}catch(M){Ee(o,o.return,M)}if(o===s){G=null;break e}var N=o.sibling;if(N!==null){N.return=o.return,G=N;break e}G=o.return}}if(ie=a,Vr(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Ps,e)}catch{}n=!0}return n}finally{ue=r,Ct.transition=t}}return!1}function rd(e,t,r){t=Wn(r,t),t=Yh(e,t,1),e=Lr(e,t,1),t=Ze(),e!==null&&(ni(e,1,t),lt(e,t))}function Ee(e,t,r){if(e.tag===3)rd(e,e,r);else for(;t!==null;){if(t.tag===3){rd(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Or===null||!Or.has(n))){e=Wn(r,e),e=Qh(t,e,1),t=Lr(t,e,1),e=Ze(),t!==null&&(ni(t,1,e),lt(t,e));break}}t=t.return}}function Sg(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&r,$e===e&&(Ue&r)===r&&(ze===4||ze===3&&(Ue&130023424)===Ue&&500>Ae()-du?an(e,0):cu|=r),lt(e,t)}function v1(e,t){t===0&&(e.mode&1?(t=xi,xi<<=1,!(xi&130023424)&&(xi=4194304)):t=1);var r=Ze();e=lr(e,t),e!==null&&(ni(e,t,r),lt(e,r))}function kg(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),v1(e,r)}function Tg(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(F(314))}n!==null&&n.delete(t),v1(e,r)}var y1;y1=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)it=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return it=!1,dg(e,t,r);it=!!(e.flags&131072)}else it=!1,pe&&t.flags&1048576&&Sh(t,ps,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Yi(e,t),e=t.pendingProps;var a=Un(t,Xe.current);Fn(t,r),a=au(null,t,n,e,a,r);var i=iu();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(n)?(i=!0,ms(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Z0(t),a.updater=Us,t.stateNode=a,a._reactInternals=t,jl(t,n,e,r),t=ql(null,t,n,!0,i,r)):(t.tag=0,pe&&i&&W0(t),Ye(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Yi(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=Eg(n),e=_t(n,e),a){case 0:t=Hl(null,t,n,e,r);break e;case 1:t=Wc(null,t,n,e,r);break e;case 11:t=qc(null,t,n,e,r);break e;case 14:t=Gc(null,t,n,_t(n.type,e),r);break e}throw Error(F(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:_t(n,a),Hl(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:_t(n,a),Wc(e,t,n,a,r);case 3:e:{if(t1(t),e===null)throw Error(F(387));n=t.pendingProps,i=t.memoizedState,a=i.element,Ah(e,t),vs(t,n,null,r);var s=t.memoizedState;if(n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Wn(Error(F(423)),t),t=Vc(e,t,n,r,a);break e}else if(n!==a){a=Wn(Error(F(424)),t),t=Vc(e,t,n,r,a);break e}else for(mt=_r(t.stateNode.containerInfo.firstChild),ht=t,pe=!0,Ot=null,r=Eh(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Hn(),n===a){t=ur(e,t,r);break e}Ye(e,t,n,r)}t=t.child}return t;case 5:return Rh(t),e===null&&Dl(t),n=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,s=a.children,Ll(n,a)?s=null:i!==null&&Ll(n,i)&&(t.flags|=32),e1(e,t),Ye(e,t,s,r),t.child;case 6:return e===null&&Dl(t),null;case 13:return r1(e,t,r);case 4:return eu(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=qn(t,null,n,r):Ye(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:_t(n,a),qc(e,t,n,a,r);case 7:return Ye(e,t,t.pendingProps,r),t.child;case 8:return Ye(e,t,t.pendingProps.children,r),t.child;case 12:return Ye(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,i=t.memoizedProps,s=a.value,de(fs,n._currentValue),n._currentValue=s,i!==null)if(Ft(i.value,s)){if(i.children===a.children&&!st.current){t=ur(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){s=i.child;for(var l=o.firstContext;l!==null;){if(l.context===n){if(i.tag===1){l=ar(-1,r&-r),l.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?l.next=l:(l.next=h.next,h.next=l),d.pending=l}}i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),Bl(i.return,r,t),o.lanes|=r;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(F(341));s.lanes|=r,o=s.alternate,o!==null&&(o.lanes|=r),Bl(s,r,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Ye(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,Fn(t,r),a=Et(a),n=n(a),t.flags|=1,Ye(e,t,n,r),t.child;case 14:return n=t.type,a=_t(n,t.pendingProps),a=_t(n.type,a),Gc(e,t,n,a,r);case 15:return Jh(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:_t(n,a),Yi(e,t),t.tag=1,ot(n)?(e=!0,ms(t)):e=!1,Fn(t,r),Kh(t,n,a),jl(t,n,a,r),ql(null,t,n,!0,e,r);case 19:return n1(e,t,r);case 22:return Zh(e,t,r)}throw Error(F(156,t.tag))};function w1(e,t){return Wm(e,t)}function Cg(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,r,n){return new Cg(e,t,r,n)}function fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Eg(e){if(typeof e=="function")return fu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===O0)return 11;if(e===P0)return 14}return 2}function zr(e,t){var r=e.alternate;return r===null?(r=kt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Zi(e,t,r,n,a,i){var s=2;if(n=e,typeof e=="function")fu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case bn:return sn(r.children,a,i,t);case L0:s=8,a|=8;break;case dl:return e=kt(12,r,t,a|2),e.elementType=dl,e.lanes=i,e;case ml:return e=kt(13,r,t,a),e.elementType=ml,e.lanes=i,e;case hl:return e=kt(19,r,t,a),e.elementType=hl,e.lanes=i,e;case Rm:return Gs(r,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nm:s=10;break e;case Am:s=9;break e;case O0:s=11;break e;case P0:s=14;break e;case wr:s=16,n=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=kt(s,r,t,a),t.elementType=e,t.type=n,t.lanes=i,t}function sn(e,t,r,n){return e=kt(7,e,n,t),e.lanes=r,e}function Gs(e,t,r,n){return e=kt(22,e,n,t),e.elementType=Rm,e.lanes=r,e.stateNode={isHidden:!1},e}function $o(e,t,r){return e=kt(6,e,null,t),e.lanes=r,e}function jo(e,t,r){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ng(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bo(0),this.expirationTimes=bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bo(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function gu(e,t,r,n,a,i,s,o,l){return e=new Ng(e,t,r,o,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=kt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Z0(i),e}function Ag(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function x1(e){if(!e)return $r;e=e._reactInternals;e:{if(hn(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var r=e.type;if(ot(r))return xh(e,r,t)}return t}function b1(e,t,r,n,a,i,s,o,l){return e=gu(r,n,!0,e,a,i,s,o,l),e.context=x1(null),r=e.current,n=Ze(),a=Pr(r),i=ar(n,a),i.callback=t??null,Lr(r,i,a),e.current.lanes=a,ni(e,a,n),lt(e,n),e}function Ws(e,t,r,n){var a=t.current,i=Ze(),s=Pr(a);return r=x1(r),t.context===null?t.context=r:t.pendingContext=r,t=ar(i,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Lr(a,t,s),e!==null&&(zt(e,a,s,i),Vi(e,a,s)),s}function Cs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function vu(e,t){nd(e,t),(e=e.alternate)&&nd(e,t)}function Rg(){return null}var S1=typeof reportError=="function"?reportError:function(e){console.error(e)};function yu(e){this._internalRoot=e}Vs.prototype.render=yu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));Ws(e,t,null,null)};Vs.prototype.unmount=yu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){Ws(null,e,null,null)}),t[or]=null}};function Vs(e){this._internalRoot=e}Vs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zm();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Sr.length&&t!==0&&t<Sr[r].priority;r++);Sr.splice(r,0,e),r===0&&th(e)}};function wu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ad(){}function Mg(e,t,r,n,a){if(a){if(typeof n=="function"){var i=n;n=function(){var d=Cs(s);i.call(d)}}var s=b1(t,n,e,0,null,!1,!1,"",ad);return e._reactRootContainer=s,e[or]=s.current,Ua(e.nodeType===8?e.parentNode:e),dn(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var o=n;n=function(){var d=Cs(l);o.call(d)}}var l=gu(e,0,!1,null,null,!1,!1,"",ad);return e._reactRootContainer=l,e[or]=l.current,Ua(e.nodeType===8?e.parentNode:e),dn(function(){Ws(t,l,r,n)}),l}function Ks(e,t,r,n,a){var i=r._reactRootContainer;if(i){var s=i;if(typeof a=="function"){var o=a;a=function(){var l=Cs(s);o.call(l)}}Ws(t,s,e,a)}else s=Mg(r,t,e,a,n);return Cs(s)}Qm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=wa(t.pendingLanes);r!==0&&(D0(t,r|1),lt(t,Ae()),!(ie&6)&&(Vn=Ae()+500,Vr()))}break;case 13:dn(function(){var n=lr(e,1);if(n!==null){var a=Ze();zt(n,e,1,a)}}),vu(e,1)}};B0=function(e){if(e.tag===13){var t=lr(e,134217728);if(t!==null){var r=Ze();zt(t,e,134217728,r)}vu(e,134217728)}};Jm=function(e){if(e.tag===13){var t=Pr(e),r=lr(e,t);if(r!==null){var n=Ze();zt(r,e,t,n)}vu(e,t)}};Zm=function(){return ue};eh=function(e,t){var r=ue;try{return ue=e,t()}finally{ue=r}};kl=function(e,t,r){switch(t){case"input":if(gl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=Bs(n);if(!a)throw Error(F(90));Im(n),gl(n,a)}}}break;case"textarea":Lm(e,r);break;case"select":t=r.value,t!=null&&Ln(e,!!r.multiple,t,!1)}};$m=mu;jm=dn;var Ig={usingClientEntryPoint:!1,Events:[ii,Cn,Bs,Dm,Bm,mu]},ga={findFiberByHostInstance:tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_g={bundleType:ga.bundleType,version:ga.version,rendererPackageName:ga.rendererPackageName,rendererConfig:ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qm(e),e===null?null:e.stateNode},findFiberByHostInstance:ga.findFiberByHostInstance||Rg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ii.isDisabled&&Ii.supportsFiber)try{Ps=Ii.inject(_g),Ht=Ii}catch{}}vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ig;vt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wu(t))throw Error(F(200));return Ag(e,t,null,r)};vt.createRoot=function(e,t){if(!wu(e))throw Error(F(299));var r=!1,n="",a=S1;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=gu(e,1,!1,null,null,r,!1,n,a),e[or]=t.current,Ua(e.nodeType===8?e.parentNode:e),new yu(t)};vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=qm(t),e=e===null?null:e.stateNode,e};vt.flushSync=function(e){return dn(e)};vt.hydrate=function(e,t,r){if(!Xs(t))throw Error(F(200));return Ks(null,e,t,!0,r)};vt.hydrateRoot=function(e,t,r){if(!wu(e))throw Error(F(405));var n=r!=null&&r.hydratedSources||null,a=!1,i="",s=S1;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=b1(t,null,e,1,r??null,a,!1,i,s),e[or]=t.current,Ua(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Vs(t)};vt.render=function(e,t,r){if(!Xs(t))throw Error(F(200));return Ks(null,e,t,!1,r)};vt.unmountComponentAtNode=function(e){if(!Xs(e))throw Error(F(40));return e._reactRootContainer?(dn(function(){Ks(null,null,e,!1,function(){e._reactRootContainer=null,e[or]=null})}),!0):!1};vt.unstable_batchedUpdates=mu;vt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Xs(r))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return Ks(e,t,r,!1,n)};vt.version="18.3.1-next-f1338f8080-20240426";function k1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k1)}catch(e){console.error(e)}}k1(),km.exports=vt;var Lg=km.exports,id=Lg;ul.createRoot=id.createRoot,ul.hydrateRoot=id.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qa(){return Qa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Qa.apply(null,arguments)}var Er;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Er||(Er={}));const sd="popstate";function Og(e){e===void 0&&(e={});function t(n,a){let{pathname:i,search:s,hash:o}=n.location;return r0("",{pathname:i,search:s,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:Es(a)}return zg(t,r,null,e)}function Se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Pg(){return Math.random().toString(36).substr(2,8)}function od(e,t){return{usr:e.state,key:e.key,idx:t}}function r0(e,t,r,n){return r===void 0&&(r=null),Qa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ta(t):t,{state:r,key:t&&t.key||n||Pg()})}function Es(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function ta(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function zg(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:i=!1}=n,s=a.history,o=Er.Pop,l=null,d=h();d==null&&(d=0,s.replaceState(Qa({},s.state,{idx:d}),""));function h(){return(s.state||{idx:null}).idx}function m(){o=Er.Pop;let A=h(),w=A==null?null:A-d;d=A,l&&l({action:o,location:C.location,delta:w})}function v(A,w){o=Er.Push;let y=r0(C.location,A,w);d=h()+1;let b=od(y,d),N=C.createHref(y);try{s.pushState(b,"",N)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;a.location.assign(N)}i&&l&&l({action:o,location:C.location,delta:1})}function x(A,w){o=Er.Replace;let y=r0(C.location,A,w);d=h();let b=od(y,d),N=C.createHref(y);s.replaceState(b,"",N),i&&l&&l({action:o,location:C.location,delta:0})}function T(A){let w=a.location.origin!=="null"?a.location.origin:a.location.href,y=typeof A=="string"?A:Es(A);return y=y.replace(/ $/,"%20"),Se(w,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,w)}let C={get action(){return o},get location(){return e(a,s)},listen(A){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(sd,m),l=A,()=>{a.removeEventListener(sd,m),l=null}},createHref(A){return t(a,A)},createURL:T,encodeLocation(A){let w=T(A);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:v,replace:x,go(A){return s.go(A)}};return C}var ld;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ld||(ld={}));function Fg(e,t,r){return r===void 0&&(r="/"),Dg(e,t,r)}function Dg(e,t,r,n){let a=typeof t=="string"?ta(t):t,i=Xn(a.pathname||"/",r);if(i==null)return null;let s=T1(e);Bg(s);let o=null,l=Yg(i);for(let d=0;o==null&&d<s.length;++d)o=Xg(s[d],l);return o}function T1(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let a=(i,s,o)=>{let l={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};l.relativePath.startsWith("/")&&(Se(l.relativePath.startsWith(n),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(n.length));let d=Fr([n,l.relativePath]),h=r.concat(l);i.children&&i.children.length>0&&(Se(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),T1(i.children,t,h,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:Wg(d,i.index),routesMeta:h})};return e.forEach((i,s)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))a(i,s);else for(let l of C1(i.path))a(i,s,l)}),t}function C1(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return a?[i,""]:[i];let s=C1(n.join("/")),o=[];return o.push(...s.map(l=>l===""?i:[i,l].join("/"))),a&&o.push(...s),o.map(l=>e.startsWith("/")&&l===""?"/":l)}function Bg(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Vg(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const $g=/^:[\w-]+$/,jg=3,Ug=2,Hg=1,qg=10,Gg=-2,ud=e=>e==="*";function Wg(e,t){let r=e.split("/"),n=r.length;return r.some(ud)&&(n+=Gg),t&&(n+=Ug),r.filter(a=>!ud(a)).reduce((a,i)=>a+($g.test(i)?jg:i===""?Hg:qg),n)}function Vg(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function Xg(e,t,r){let{routesMeta:n}=e,a={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],d=o===n.length-1,h=i==="/"?t:t.slice(i.length)||"/",m=n0({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},h),v=l.route;if(!m)return null;Object.assign(a,m.params),s.push({params:a,pathname:Fr([i,m.pathname]),pathnameBase:t2(Fr([i,m.pathnameBase])),route:v}),m.pathnameBase!=="/"&&(i=Fr([i,m.pathnameBase]))}return s}function n0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Kg(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let i=a[0],s=i.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:n.reduce((d,h,m)=>{let{paramName:v,isOptional:x}=h;if(v==="*"){let C=o[m]||"";s=i.slice(0,i.length-C.length).replace(/(.)\/+$/,"$1")}const T=o[m];return x&&!T?d[v]=void 0:d[v]=(T||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:s,pattern:e}}function Kg(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),xu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,l)=>(n.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function Yg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return xu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Xn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const Qg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jg=e=>Qg.test(e);function Zg(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?ta(e):e,i;if(r)if(Jg(r))i=r;else{if(r.includes("//")){let s=r;r=E1(r),xu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+r))}r.startsWith("/")?i=cd(r.substring(1),"/"):i=cd(r,t)}else i=t;return{pathname:i,search:r2(n),hash:n2(a)}}function cd(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Uo(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function e2(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function bu(e,t){let r=e2(e);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Su(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=ta(e):(a=Qa({},e),Se(!a.pathname||!a.pathname.includes("?"),Uo("?","pathname","search",a)),Se(!a.pathname||!a.pathname.includes("#"),Uo("#","pathname","hash",a)),Se(!a.search||!a.search.includes("#"),Uo("#","search","hash",a)));let i=e===""||a.pathname==="",s=i?"/":a.pathname,o;if(s==null)o=r;else{let m=t.length-1;if(!n&&s.startsWith("..")){let v=s.split("/");for(;v[0]==="..";)v.shift(),m-=1;a.pathname=v.join("/")}o=m>=0?t[m]:"/"}let l=Zg(a,o),d=s&&s!=="/"&&s.endsWith("/"),h=(i||s===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(d||h)&&(l.pathname+="/"),l}const E1=e=>e.replace(/\/\/+/g,"/"),Fr=e=>E1(e.join("/")),t2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),r2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,n2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function a2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const N1=["post","put","patch","delete"];new Set(N1);const i2=["get",...N1];new Set(i2);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ja(){return Ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ja.apply(null,arguments)}const Ys=R.createContext(null),A1=R.createContext(null),mr=R.createContext(null),Qs=R.createContext(null),Gt=R.createContext({outlet:null,matches:[],isDataRoute:!1}),R1=R.createContext(null);function s2(e,t){let{relative:r}=t===void 0?{}:t;ra()||Se(!1);let{basename:n,navigator:a}=R.useContext(mr),{hash:i,pathname:s,search:o}=Zs(e,{relative:r}),l=s;return n!=="/"&&(l=s==="/"?n:Fr([n,s])),a.createHref({pathname:l,search:o,hash:i})}function ra(){return R.useContext(Qs)!=null}function pn(){return ra()||Se(!1),R.useContext(Qs).location}function M1(e){R.useContext(mr).static||R.useLayoutEffect(e)}function fn(){let{isDataRoute:e}=R.useContext(Gt);return e?b2():o2()}function o2(){ra()||Se(!1);let e=R.useContext(Ys),{basename:t,future:r,navigator:n}=R.useContext(mr),{matches:a}=R.useContext(Gt),{pathname:i}=pn(),s=JSON.stringify(bu(a,r.v7_relativeSplatPath)),o=R.useRef(!1);return M1(()=>{o.current=!0}),R.useCallback(function(d,h){if(h===void 0&&(h={}),!o.current)return;if(typeof d=="number"){n.go(d);return}let m=Su(d,JSON.parse(s),i,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Fr([t,m.pathname])),(h.replace?n.replace:n.push)(m,h.state,h)},[t,n,s,i,e])}const l2=R.createContext(null);function u2(e){let t=R.useContext(Gt).outlet;return t&&R.createElement(l2.Provider,{value:e},t)}function Js(){let{matches:e}=R.useContext(Gt),t=e[e.length-1];return t?t.params:{}}function Zs(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=R.useContext(mr),{matches:a}=R.useContext(Gt),{pathname:i}=pn(),s=JSON.stringify(bu(a,n.v7_relativeSplatPath));return R.useMemo(()=>Su(e,JSON.parse(s),i,r==="path"),[e,s,i,r])}function c2(e,t){return d2(e,t)}function d2(e,t,r,n){ra()||Se(!1);let{navigator:a}=R.useContext(mr),{matches:i}=R.useContext(Gt),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let d=pn(),h;if(t){var m;let A=typeof t=="string"?ta(t):t;l==="/"||(m=A.pathname)!=null&&m.startsWith(l)||Se(!1),h=A}else h=d;let v=h.pathname||"/",x=v;if(l!=="/"){let A=l.replace(/^\//,"").split("/");x="/"+v.replace(/^\//,"").split("/").slice(A.length).join("/")}let T=Fg(e,{pathname:x}),C=g2(T&&T.map(A=>Object.assign({},A,{params:Object.assign({},o,A.params),pathname:Fr([l,a.encodeLocation?a.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?l:Fr([l,a.encodeLocation?a.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),i,r,n);return t&&C?R.createElement(Qs.Provider,{value:{location:Ja({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Er.Pop}},C):C}function m2(){let e=x2(),t=a2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),r?R.createElement("pre",{style:a},r):null,null)}const h2=R.createElement(m2,null);class p2 extends R.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?R.createElement(Gt.Provider,{value:this.props.routeContext},R.createElement(R1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function f2(e){let{routeContext:t,match:r,children:n}=e,a=R.useContext(Ys);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),R.createElement(Gt.Provider,{value:t},n)}function g2(e,t,r,n){var a;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var i;if(!r)return null;if(r.errors)e=r.matches;else if((i=n)!=null&&i.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,o=(a=r)==null?void 0:a.errors;if(o!=null){let h=s.findIndex(m=>m.route.id&&(o==null?void 0:o[m.route.id])!==void 0);h>=0||Se(!1),s=s.slice(0,Math.min(s.length,h+1))}let l=!1,d=-1;if(r&&n&&n.v7_partialHydration)for(let h=0;h<s.length;h++){let m=s[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=h),m.route.id){let{loaderData:v,errors:x}=r,T=m.route.loader&&v[m.route.id]===void 0&&(!x||x[m.route.id]===void 0);if(m.route.lazy||T){l=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((h,m,v)=>{let x,T=!1,C=null,A=null;r&&(x=o&&m.route.id?o[m.route.id]:void 0,C=m.route.errorElement||h2,l&&(d<0&&v===0?(S2("route-fallback"),T=!0,A=null):d===v&&(T=!0,A=m.route.hydrateFallbackElement||null)));let w=t.concat(s.slice(0,v+1)),y=()=>{let b;return x?b=C:T?b=A:m.route.Component?b=R.createElement(m.route.Component,null):m.route.element?b=m.route.element:b=h,R.createElement(f2,{match:m,routeContext:{outlet:h,matches:w,isDataRoute:r!=null},children:b})};return r&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?R.createElement(p2,{location:r.location,revalidation:r.revalidation,component:C,error:x,children:y(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):y()},null)}var I1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(I1||{}),_1=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(_1||{});function v2(e){let t=R.useContext(Ys);return t||Se(!1),t}function y2(e){let t=R.useContext(A1);return t||Se(!1),t}function w2(e){let t=R.useContext(Gt);return t||Se(!1),t}function L1(e){let t=w2(),r=t.matches[t.matches.length-1];return r.route.id||Se(!1),r.route.id}function x2(){var e;let t=R.useContext(R1),r=y2(),n=L1();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function b2(){let{router:e}=v2(I1.UseNavigateStable),t=L1(_1.UseNavigateStable),r=R.useRef(!1);return M1(()=>{r.current=!0}),R.useCallback(function(a,i){i===void 0&&(i={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Ja({fromRouteId:t},i)))},[e,t])}const dd={};function S2(e,t,r){dd[e]||(dd[e]=!0)}function k2(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function T2(e){let{to:t,replace:r,state:n,relative:a}=e;ra()||Se(!1);let{future:i,static:s}=R.useContext(mr),{matches:o}=R.useContext(Gt),{pathname:l}=pn(),d=fn(),h=Su(t,bu(o,i.v7_relativeSplatPath),l,a==="path"),m=JSON.stringify(h);return R.useEffect(()=>d(JSON.parse(m),{replace:r,state:n,relative:a}),[d,m,a,r,n]),null}function C2(e){return u2(e.context)}function It(e){Se(!1)}function E2(e){let{basename:t="/",children:r=null,location:n,navigationType:a=Er.Pop,navigator:i,static:s=!1,future:o}=e;ra()&&Se(!1);let l=t.replace(/^\/*/,"/"),d=R.useMemo(()=>({basename:l,navigator:i,static:s,future:Ja({v7_relativeSplatPath:!1},o)}),[l,o,i,s]);typeof n=="string"&&(n=ta(n));let{pathname:h="/",search:m="",hash:v="",state:x=null,key:T="default"}=n,C=R.useMemo(()=>{let A=Xn(h,l);return A==null?null:{location:{pathname:A,search:m,hash:v,state:x,key:T},navigationType:a}},[l,h,m,v,x,T,a]);return C==null?null:R.createElement(mr.Provider,{value:d},R.createElement(Qs.Provider,{children:r,value:C}))}function N2(e){let{children:t,location:r}=e;return c2(a0(t),r)}new Promise(()=>{});function a0(e,t){t===void 0&&(t=[]);let r=[];return R.Children.forEach(e,(n,a)=>{if(!R.isValidElement(n))return;let i=[...t,a];if(n.type===R.Fragment){r.push.apply(r,a0(n.props.children,i));return}n.type!==It&&Se(!1),!n.props.index||!n.props.children||Se(!1);let s={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=a0(n.props.children,i)),r.push(s)}),r}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ns(){return Ns=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ns.apply(null,arguments)}function O1(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function A2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function R2(e,t){return e.button===0&&(!t||t==="_self")&&!A2(e)}const M2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],I2=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],_2="6";try{window.__reactRouterVersion=_2}catch{}const L2=R.createContext({isTransitioning:!1}),O2="startTransition",md=Sf[O2];function P2(e){let{basename:t,children:r,future:n,window:a}=e,i=R.useRef();i.current==null&&(i.current=Og({window:a,v5Compat:!0}));let s=i.current,[o,l]=R.useState({action:s.action,location:s.location}),{v7_startTransition:d}=n||{},h=R.useCallback(m=>{d&&md?md(()=>l(m)):l(m)},[l,d]);return R.useLayoutEffect(()=>s.listen(h),[s,h]),R.useEffect(()=>k2(n),[n]),R.createElement(E2,{basename:t,children:r,location:o.location,navigationType:o.action,navigator:s,future:n})}const z2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",F2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,D2=R.forwardRef(function(t,r){let{onClick:n,relative:a,reloadDocument:i,replace:s,state:o,target:l,to:d,preventScrollReset:h,viewTransition:m}=t,v=O1(t,M2),{basename:x}=R.useContext(mr),T,C=!1;if(typeof d=="string"&&F2.test(d)&&(T=d,z2))try{let b=new URL(window.location.href),N=d.startsWith("//")?new URL(b.protocol+d):new URL(d),M=Xn(N.pathname,x);N.origin===b.origin&&M!=null?d=M+N.search+N.hash:C=!0}catch{}let A=s2(d,{relative:a}),w=j2(d,{replace:s,state:o,target:l,preventScrollReset:h,relative:a,viewTransition:m});function y(b){n&&n(b),b.defaultPrevented||w(b)}return R.createElement("a",Ns({},v,{href:T||A,onClick:C||i?n:y,ref:r,target:l}))}),B2=R.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:a=!1,className:i="",end:s=!1,style:o,to:l,viewTransition:d,children:h}=t,m=O1(t,I2),v=Zs(l,{relative:m.relative}),x=pn(),T=R.useContext(A1),{navigator:C,basename:A}=R.useContext(mr),w=T!=null&&U2(v)&&d===!0,y=C.encodeLocation?C.encodeLocation(v).pathname:v.pathname,b=x.pathname,N=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;a||(b=b.toLowerCase(),N=N?N.toLowerCase():null,y=y.toLowerCase()),N&&A&&(N=Xn(N,A)||N);const M=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let I=b===y||!s&&b.startsWith(y)&&b.charAt(M)==="/",_=N!=null&&(N===y||!s&&N.startsWith(y)&&N.charAt(y.length)==="/"),P={isActive:I,isPending:_,isTransitioning:w},U=I?n:void 0,O;typeof i=="function"?O=i(P):O=[i,I?"active":null,_?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let re=typeof o=="function"?o(P):o;return R.createElement(D2,Ns({},m,{"aria-current":U,className:O,ref:r,style:re,to:l,viewTransition:d}),typeof h=="function"?h(P):h)});var i0;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(i0||(i0={}));var hd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(hd||(hd={}));function $2(e){let t=R.useContext(Ys);return t||Se(!1),t}function j2(e,t){let{target:r,replace:n,state:a,preventScrollReset:i,relative:s,viewTransition:o}=t===void 0?{}:t,l=fn(),d=pn(),h=Zs(e,{relative:s});return R.useCallback(m=>{if(R2(m,r)){m.preventDefault();let v=n!==void 0?n:Es(d)===Es(h);l(e,{replace:v,state:a,preventScrollReset:i,relative:s,viewTransition:o})}},[d,l,h,n,a,r,e,i,s,o])}function U2(e,t){t===void 0&&(t={});let r=R.useContext(L2);r==null&&Se(!1);let{basename:n}=$2(i0.useViewTransitionState),a=Zs(e,{relative:t.relative});if(!r.isTransitioning)return!1;let i=Xn(r.currentLocation.pathname,n)||r.currentLocation.pathname,s=Xn(r.nextLocation.pathname,n)||r.nextLocation.pathname;return n0(a.pathname,s)!=null||n0(a.pathname,i)!=null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var H2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ge=(e,t)=>{const r=R.forwardRef(({color:n="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:o="",children:l,...d},h)=>R.createElement("svg",{ref:h,...H2,width:a,height:a,stroke:n,strokeWidth:s?Number(i)*24/Number(a):i,className:["lucide",`lucide-${q2(e)}`,o].join(" "),...d},[...t.map(([m,v])=>R.createElement(m,v)),...Array.isArray(l)?l:[l]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=ge("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=ge("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=ge("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=ge("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=ge("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=ge("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=ge("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=ge("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=ge("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=ge("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=ge("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=ge("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=ge("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=ge("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=ge("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=ge("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=ge("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=ge("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=ge("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=ge("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=ge("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=ge("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=ge("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=ge("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),j1=R.createContext(),U1="datacrack-progress";function a5(){try{const e=localStorage.getItem(U1);if(e){const t=JSON.parse(e);return{pythonSolved:new Set(t.pythonSolved||[]),sqlSolved:new Set(t.sqlSolved||[]),mlCompleted:new Set(t.mlCompleted||[]),conceptCompleted:new Set(t.conceptCompleted||[])}}}catch(e){console.error("Failed to load progress:",e)}return{pythonSolved:new Set,sqlSolved:new Set,mlCompleted:new Set,conceptCompleted:new Set}}function i5(e){localStorage.setItem(U1,JSON.stringify({pythonSolved:Array.from(e.pythonSolved),sqlSolved:Array.from(e.sqlSolved),mlCompleted:Array.from(e.mlCompleted),conceptCompleted:Array.from(e.conceptCompleted)}))}function s5({children:e}){const[t,r]=R.useState(a5);R.useEffect(()=>{i5(t)},[t]);const n=v=>{r(x=>{const T={...x,pythonSolved:new Set(x.pythonSolved)};return T.pythonSolved.add(v),T})},a=v=>{r(x=>{const T={...x,pythonSolved:new Set(x.pythonSolved)};return T.pythonSolved.delete(v),T})},i=v=>{r(x=>{const T={...x,sqlSolved:new Set(x.sqlSolved)};return T.sqlSolved.add(v),T})},s=v=>{r(x=>{const T={...x,sqlSolved:new Set(x.sqlSolved)};return T.sqlSolved.delete(v),T})},o=v=>{r(x=>{const T={...x,mlCompleted:new Set(x.mlCompleted)};return T.mlCompleted.add(v),T})},l=v=>{r(x=>{const T={...x,mlCompleted:new Set(x.mlCompleted)};return T.mlCompleted.delete(v),T})},d=v=>{r(x=>{const T={...x,conceptCompleted:new Set(x.conceptCompleted)};return T.conceptCompleted.add(v),T})},h=v=>{r(x=>{const T={...x,conceptCompleted:new Set(x.conceptCompleted)};return T.conceptCompleted.delete(v),T})},m=()=>{r({pythonSolved:new Set,sqlSolved:new Set,mlCompleted:new Set,conceptCompleted:new Set})};return g.jsx(j1.Provider,{value:{...t,totalPython:50,totalSQL:30,totalML:12,totalConcepts:0,markPythonSolved:n,markPythonUnsolved:a,markSQLSolved:i,markSQLUnsolved:s,markMLCompleted:o,markMLUncompleted:l,markConceptCompleted:d,markConceptUncompleted:h,resetProgress:m},children:e})}function aa(){const e=R.useContext(j1);if(!e)throw new Error("useProgress must be used within a ProgressProvider");return e}const o5={slug:"classification-metrics",title:"Classification Metrics",order:1,content:`
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
`},l5=Object.freeze(Object.defineProperty({__proto__:null,default:o5},Symbol.toStringTag,{value:"Module"})),u5={slug:"decision-trees",title:"Decision Trees",order:2,content:`
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
`},c5=Object.freeze(Object.defineProperty({__proto__:null,default:u5},Symbol.toStringTag,{value:"Module"})),d5={slug:"ml-interview-tips",title:"ML Interview Tips & Pitfalls",order:4,content:`
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
`},m5=Object.freeze(Object.defineProperty({__proto__:null,default:d5},Symbol.toStringTag,{value:"Module"})),h5={slug:"model-selection-guide",title:"Model Selection & Real-World ML",order:5,content:`
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
`},p5=Object.freeze(Object.defineProperty({__proto__:null,default:h5},Symbol.toStringTag,{value:"Module"})),f5={slug:"random-forest-ensemble",title:"Random Forest & Ensemble Learning",order:3,content:`
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
`},g5=Object.freeze(Object.defineProperty({__proto__:null,default:f5},Symbol.toStringTag,{value:"Module"})),v5=Object.assign({"./ClassificationMetrics.jsx":l5,"./DecisionTree.jsx":c5,"./MLInterviewTips.jsx":m5,"./ModelSelectionGuide.jsx":p5,"./RandomForest.jsx":g5}),Zt=Object.values(v5).map(e=>e.default).filter(Boolean).sort((e,t)=>e.order-t.order);Object.fromEntries(Zt.map(e=>[e.slug,e]));const y5=Zt.length,w5=[{path:"/python",label:"Python Coding",icon:X2,totalKey:"totalPython",solvedKey:"pythonSolved"},{path:"/sql",label:"SQL Practice",icon:z1,totalKey:"totalSQL",solvedKey:"sqlSolved"},{path:"/ml",label:"ML Concepts",icon:G2,totalKey:"totalML",solvedKey:"mlCompleted"},{path:"/Concepts",label:"Concepts",icon:F1,totalKey:"totalConcepts",solvedKey:"conceptCompleted",dynamicTotal:y5}];function x5({collapsed:e,onToggleCollapse:t,mobileOpen:r,onMobileClose:n}){const a=aa(),i=pn();return g.jsxs("aside",{className:`
        ${e?"w-[72px]":"w-[200px]"}
        h-screen bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700
        flex flex-col transition-all duration-300 ease-in-out relative
        fixed left-0 top-0 z-40
        md:translate-x-0
        ${r?"translate-x-0":"-translate-x-full"}
      `,children:[g.jsxs("div",{className:"flex items-center gap-3 px-5 h-16 border-b border-gray-200 dark:border-slate-700 shrink-0",children:[g.jsx("div",{className:"w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0",children:g.jsx(n5,{className:"w-5 h-5 text-white"})}),!e&&g.jsx("span",{className:"text-lg font-bold tracking-tight text-gray-900 dark:text-white",children:"DataCrack"})]}),g.jsx("nav",{className:"flex-1 py-4 px-3 space-y-1 overflow-y-auto scrollbar-thin",children:w5.map(s=>{var v;const o=s.icon,l=i.pathname.startsWith(s.path),d=((v=a[s.solvedKey])==null?void 0:v.size)||0,h=s.dynamicTotal??a[s.totalKey],m=h>0?Math.round(d/h*100):0;return g.jsxs(B2,{to:s.path,className:`
                flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group
                ${l?"bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400":"text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700/50 hover:text-gray-900 dark:hover:text-white"}
              `,children:[g.jsx(o,{className:`w-5 h-5 shrink-0 ${l?"text-emerald-600 dark:text-emerald-400":""}`}),!e&&g.jsxs("div",{className:"flex-1 min-w-0",children:[g.jsx("div",{className:"text-sm font-medium truncate",children:s.label}),g.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[g.jsx("div",{className:"flex-1 h-1.5 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden",children:g.jsx("div",{className:"h-full bg-emerald-500 rounded-full transition-all duration-500",style:{width:`${m}%`}})}),g.jsxs("span",{className:"text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap",children:[d,"/",h]})]})]})]},s.path)})}),g.jsx("button",{onClick:t,className:`\r
          absolute -right-3 top-20 w-6 h-6 rounded-full\r
          bg-gray-200 dark:bg-slate-600 hover:bg-gray-300 dark:hover:bg-slate-500\r
          flex items-center justify-center\r
          transition-colors duration-200\r
          shadow-sm\r
          hidden md:flex\r
        `,children:e?g.jsx(Tu,{className:"w-3.5 h-3.5 text-gray-600 dark:text-gray-300"}):g.jsx(ku,{className:"w-3.5 h-3.5 text-gray-600 dark:text-gray-300"})}),!e&&g.jsx("div",{className:"px-5 py-4 border-t border-gray-200 dark:border-slate-700 shrink-0",children:g.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:"Interview Prep Platform"})})]})}const H1=R.createContext();function b5({children:e}){const[t,r]=R.useState(()=>{const a=localStorage.getItem("datacrack-theme");return a||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")});R.useEffect(()=>{const a=document.documentElement;t==="dark"?a.classList.add("dark"):a.classList.remove("dark"),localStorage.setItem("datacrack-theme",t)},[t]);const n=()=>{r(a=>a==="dark"?"light":"dark")};return g.jsx(H1.Provider,{value:{theme:t,toggleTheme:n},children:e})}function Eu(){const e=R.useContext(H1);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e}function S5({onToggleMobileMenu:e}){const{theme:t,toggleTheme:r}=Eu(),{resetProgress:n}=aa(),[a,i]=R.useState(!1),s=()=>{n(),i(!1)};return g.jsxs("header",{className:"h-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700 flex items-center justify-between px-6 shrink-0",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[e&&g.jsx("button",{onClick:e,className:"md:hidden p-2 -ml-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors",children:g.jsx(D1,{className:"w-5 h-5"})}),g.jsx("h1",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 hidden sm:block",children:"Master your Data Analyst & Data Scientist interviews"})]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsxs("div",{className:"relative",children:[g.jsx("button",{onClick:()=>i(!a),className:`\r
              p-2 rounded-lg text-gray-500 dark:text-gray-400\r
              hover:bg-gray-100 dark:hover:bg-slate-700\r
              transition-colors duration-200\r
            `,title:"Reset Progress",children:g.jsx(Cu,{className:"w-4.5 h-4.5"})}),a&&g.jsxs("div",{className:"absolute right-0 top-12 w-64 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-600 p-4 z-50 animate-fade-in",children:[g.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mb-3",children:"Reset all progress? This cannot be undone."}),g.jsxs("div",{className:"flex gap-2",children:[g.jsx("button",{onClick:s,className:"flex-1 px-3 py-1.5 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-md transition-colors",children:"Reset"}),g.jsx("button",{onClick:()=>i(!1),className:"flex-1 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-md transition-colors",children:"Cancel"})]})]})]}),g.jsx("button",{onClick:r,className:`\r
            p-2 rounded-lg text-gray-500 dark:text-gray-400\r
            hover:bg-gray-100 dark:hover:bg-slate-700\r
            transition-colors duration-200\r
          `,title:`Switch to ${t==="dark"?"light":"dark"} mode`,children:t==="dark"?g.jsx(J2,{className:"w-4.5 h-4.5"}):g.jsx(Q2,{className:"w-4.5 h-4.5"})})]})]})}function k5(){const[e,t]=R.useState(!1),[r,n]=R.useState(!1),[a,i]=R.useState(!1);return R.useEffect(()=>{const s=()=>i(window.innerWidth<768);return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),g.jsxs("div",{className:"flex h-screen bg-gray-50 dark:bg-slate-900 overflow-hidden",children:[g.jsx(x5,{collapsed:e,onToggleCollapse:()=>t(!e),mobileOpen:r,onMobileClose:()=>n(!1)}),r&&g.jsx("div",{className:"fixed inset-0 bg-black/50 z-30 md:hidden",onClick:()=>n(!1)}),g.jsxs("div",{className:"flex-1 flex flex-col transition-all duration-300",style:{marginLeft:a?0:e?72:200},children:[g.jsx(S5,{onToggleMobileMenu:()=>n(!r)}),g.jsx("main",{className:"flex-1 overflow-hidden",children:g.jsx(C2,{})})]})]})}const pd=[{id:"list",label:"List",color:"emerald"},{id:"dict",label:"Dictionary",color:"blue"},{id:"pandas",label:"Pandas",color:"purple"},{id:"ml",label:"ML Programming",color:"amber"}],fd=[{id:1,title:"Two Sum",difficulty:"Easy",category:"list",description:"Given a list of integers `nums` and an integer `target`, return the **indices** of the two numbers that add up to `target`.\n\nYou may assume that each input would have **exactly one solution**, and you may not use the same element twice.\n\nReturn the answer as a list of two integers.",constraints:["2 <= nums.length <= 10^4","-10^9 <= nums[i] <= 10^9","-10^9 <= target <= 10^9","Only one valid answer exists."],examples:[{input:"nums = [2, 7, 11, 15], target = 9",output:"[0, 1]",explanation:"Because nums[0] + nums[1] == 9, we return [0, 1]."},{input:"nums = [3, 2, 4], target = 6",output:"[1, 2]",explanation:"Because nums[1] + nums[2] == 6, we return [1, 2]."},{input:"nums = [3, 3], target = 6",output:"[0, 1]",explanation:"Because nums[0] + nums[1] == 6, we return [0, 1]."}],starterCode:`def two_sum(nums, target):
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
    pass`,testCases:[{input:"[[2.5,2.4],[0.5,0.7],[2.2,2.9],[1.9,2.2],[3.1,3.0]], 1",expected:"1D reduced data"}],functionName:"pca"}];function T5(e){let t=e.split(`
`),r=t.join(`
`);r=r.replace(/"""[\s\S]*?"""/g,""),r=r.replace(/'''[\s\S]*?'''/g,""),t=r.split(`
`);const n=t.map(s=>{let o=s;return o=o.replace(/#.*$/,""),o}).filter(s=>s.trim()!==""),a=[],i=[{indent:-1,hasBrace:!1}];for(let s=0;s<n.length;s++){let o=n[s];const l=o.trim();if(l==="")continue;const d=o.match(/^(\s*)/),h=d?d[1].length:0;for(;i.length>1&&h<=i[i.length-1].indent;)i.pop(),a.push(" ".repeat(i.length>0?i[i.length-1].indent+4:0)+"}");let m=l;m=m.replace(/^def\s+(\w+)\s*\(([^)]*)\)\s*:/,"function $1($2) {"),m=m.replace(/^class\s+(\w+)\s*:/,"function $1() {"),m=m.replace(/^for\s+(\w+)\s+in\s+range\((.+)\)\s*:$/,"for (let $1 = 0; $1 < ($2); $1++) {"),m=m.replace(/^for\s+(\w+)\s*,\s*(\w+)\s+in\s+enumerate\((\w+)\)\s*:/,"for (const [$2, $1] of $3.entries()) {"),m=m.replace(/^for\s+(\w+)\s*,\s*(\w+)\s+in\s+zip\((\w+),\s*(\w+)\)\s*:/,"for (let $1i = 0; $1i < $3.length; $1i++) { let $1 = $3[$1i]; let $2 = $4[$1i];"),m=m.replace(/^for\s+(\w+)\s+in\s+(\w+)\s*:$/,"for (const $1 of $2) {"),m=m.replace(/^if\s+(.+)\s*:$/,"if ($1) {"),m=m.replace(/^elif\s+(.+)\s*:$/,"} else if ($1) {"),m=m.replace(/^else\s*:$/,"} else {"),m=m.replace(/^while\s+(.+)\s*:$/,"while ($1) {"),m=m.replace(/\bTrue\b/g,"true"),m=m.replace(/\bFalse\b/g,"false"),m=m.replace(/\bNone\b/g,"null"),m==="pass"&&(m="return undefined;"),m=m.replace(/\blen\((\w+)\)/g,"$1.length"),m=m.replace(/\.append\(/g,".push("),m=m.replace(/\.strip\(\)/g,".trim()"),m=m.replace(/\.split\(\)/g,'.split("")'),m=m.replace(/\bis\s+not\s+None\b/g,"!== null"),m=m.replace(/\bis\s+None\b/g,"=== null"),m=m.replace(/(\w+)\s+not\s+in\s+(\w+)/g,"!$2.includes($1)"),m=m.replace(/\bnot\s+/g,"!"),m=m.replace(/\band\b/g,"&&"),m=m.replace(/\bor\b/g,"||"),m=m.replace(/sorted\((\w+)\)/g,"[...$1].sort((a, b) => a - b)"),m=m.replace(/sorted\((\w+),\s*reverse\s*=\s*True\)/g,"[...$1].sort((a, b) => b - a)");const v=m.includes("{"),x=m.trim().startsWith("}");i.length>0&&i[i.length-1].indent,a.push(" ".repeat(h)+m),v&&!x&&i.push({indent:h,hasBrace:!0})}for(;i.length>1;){i.pop();const s=i.length>0?i[i.length-1].indent+4:0;a.push(" ".repeat(Math.max(0,s))+"}")}return a.join(`
`)}function C5(){const[e,t]=R.useState([]),[r,n]=R.useState(!1),[a,i]=R.useState(""),s=R.useCallback((l,d,h)=>{n(!0),t([]),i(""),setTimeout(()=>{try{const m=T5(l),v=d.map((C,A)=>{try{const w=C.input,y=C.expected,b=m+`
var __inputs = ${w};
var __result = ${h}.apply(null, __inputs);
return __result;`;let N;try{N=new Function(b)()}catch{const P=l+`
var __inputs = ${w};
var __result = ${h}.apply(null, __inputs);
return __result;`;N=new Function(P)()}const M=E5(N,y),I=N!=null?JSON.stringify(N).replace(/\s+/g," ").trim():String(N);return{testNumber:A+1,input:w,expected:y,actual:I,passed:M,error:null}}catch(w){return{testNumber:A+1,input:C.input,expected:C.expected,actual:null,passed:!1,error:w.message}}});t(v);const x=v.filter(C=>C.passed).length,T=v.length;i(`Execution complete: ${x}/${T} test cases passed.`)}catch(m){i(`Error: ${m.message}`),t([{testNumber:1,input:"",expected:"",actual:null,passed:!1,error:`Compilation Error: ${m.message}`}])}finally{n(!1)}},800)},[]),o=R.useCallback(()=>{t([]),i("")},[]);return{results:e,isRunning:r,output:a,runCode:s,clearResults:o}}function E5(e,t){if(e==null)return!1;const r=JSON.stringify(e);try{const s=JSON.parse(t);if(JSON.stringify(s)===r)return!0}catch{}const n=s=>s.toString().replace(/[\s\n]+/g," ").trim();if(n(r)===n(t))return!0;const a=r.match(/-?\d+\.?\d*/g),i=t.match(/-?\d+\.?\d*/g);return a&&i&&a.length===i.length?a.every((s,o)=>Math.abs(parseFloat(s)-parseFloat(i[o]))<.01):!1}function N5({questions:e,currentIndex:t,onNavigate:r,solvedIds:n,activeCategory:a,onCategoryChange:i}){var d;const[s,o]=R.useState(!1);return e[t]?g.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shrink-0",children:[g.jsx("div",{className:"flex items-center gap-2",children:g.jsxs("div",{className:"relative",children:[g.jsxs("button",{onClick:()=>o(!s),className:`
              flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium
              border border-gray-200 dark:border-slate-600
              ${a?"bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800":"bg-gray-50 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600"}
              transition-colors duration-200
            `,children:[g.jsx(K2,{className:"w-3.5 h-3.5"}),a?((d=pd.find(h=>h.id===a))==null?void 0:d.label)||"All":"All Topics"]}),s&&g.jsxs("div",{className:"absolute left-0 top-full mt-1 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-600 py-1 z-50 animate-fade-in",children:[g.jsxs("button",{onClick:()=>{i(null),o(!1)},className:`
                  w-full text-left px-4 py-2 text-sm transition-colors
                  ${a?"text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700":"bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400"}
                `,children:["All Topics (",50,")"]}),pd.map(h=>g.jsx("button",{onClick:()=>{i(h.id),o(!1)},className:`
                    w-full text-left px-4 py-2 text-sm transition-colors
                    ${a===h.id?"bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400":"text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"}
                  `,children:h.label},h.id))]})]})}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("button",{onClick:()=>r(t-1),disabled:t===0,className:"p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors",children:g.jsx(ku,{className:"w-4 h-4"})}),g.jsxs("span",{className:"text-sm font-mono text-gray-600 dark:text-gray-400 min-w-[100px] text-center",children:[t+1," / ",e.length]}),g.jsx("button",{onClick:()=>r(t+1),disabled:t===e.length-1,className:"p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors",children:g.jsx(Tu,{className:"w-4 h-4"})})]}),g.jsx("div",{className:"hidden lg:flex items-center gap-1",children:e.slice(Math.max(0,t-5),Math.min(e.length,t+6)).map((h,m)=>{const v=Math.max(0,t-5)+m,x=v===t,T=n.has(h.id);return g.jsx("button",{onClick:()=>r(v),className:`
                w-6 h-6 rounded-full text-xs font-medium flex items-center justify-center transition-all duration-200
                ${x?"bg-emerald-600 text-white scale-110":T?"bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400":"bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-600"}
              `,title:h.title,children:T?g.jsx(na,{className:"w-3 h-3"}):v+1},h.id)})})]}):null}function A5({question:e,isSolved:t}){if(!e)return null;const r={Easy:"difficulty-easy",Medium:"difficulty-medium",Hard:"difficulty-hard"}[e.difficulty]||"difficulty-easy";return g.jsxs("div",{className:"h-full overflow-y-auto scrollbar-thin p-6 space-y-6",children:[g.jsxs("div",{className:"flex items-start justify-between gap-4",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[g.jsxs("span",{className:"text-xs font-mono text-gray-500 dark:text-gray-400",children:["#",e.id]}),g.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:e.title})]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:`px-2.5 py-0.5 rounded-full text-xs font-medium ${r}`,children:e.difficulty}),g.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300",children:e.category})]})]}),t&&g.jsxs("div",{className:"flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 shrink-0",children:[g.jsx(na,{className:"w-5 h-5"}),g.jsx("span",{className:"text-sm font-medium",children:"Solved"})]})]}),g.jsx("div",{className:"prose prose-sm dark:prose-invert max-w-none",children:g.jsx("div",{className:"text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line text-sm",children:e.description})}),e.constraints&&e.constraints.length>0&&g.jsxs("div",{children:[g.jsxs("h3",{className:"flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white mb-2",children:[g.jsx(Y2,{className:"w-4 h-4 text-blue-500"}),"Constraints"]}),g.jsx("ul",{className:"space-y-1",children:e.constraints.map((n,a)=>g.jsx("li",{className:"text-sm text-gray-600 dark:text-gray-400 font-mono bg-gray-50 dark:bg-slate-700/50 px-3 py-1 rounded",children:n},a))})]}),e.examples&&e.examples.length>0&&g.jsxs("div",{children:[g.jsx("h3",{className:"text-sm font-semibold text-gray-900 dark:text-white mb-3",children:"Examples"}),g.jsx("div",{className:"space-y-4",children:e.examples.map((n,a)=>g.jsxs("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:[g.jsx("div",{className:"bg-gray-50 dark:bg-slate-700/50 px-4 py-2 border-b border-gray-200 dark:border-slate-600",children:g.jsxs("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:["Example ",a+1]})}),g.jsxs("div",{className:"p-4 space-y-3",children:[g.jsxs("div",{children:[g.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1",children:"Input:"}),g.jsx("code",{className:"text-sm font-mono bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded text-gray-800 dark:text-gray-200",children:n.input})]}),g.jsxs("div",{children:[g.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1",children:"Output:"}),g.jsx("code",{className:"text-sm font-mono bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded text-gray-800 dark:text-gray-200",children:n.output})]}),n.explanation&&g.jsxs("div",{children:[g.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1",children:"Explanation:"}),g.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line",children:n.explanation})]})]})]},a))})]}),g.jsx("div",{className:"callout-tip rounded-lg p-4",children:g.jsxs("div",{className:"flex items-start gap-2",children:[g.jsx(F1,{className:"w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0"}),g.jsxs("div",{children:[g.jsx("p",{className:"text-sm font-medium text-emerald-800 dark:text-emerald-300",children:"Interview Tip"}),g.jsx("p",{className:"text-sm text-emerald-700 dark:text-emerald-400 mt-1",children:R5(e)})]})]})})]})}function R5(e){const t={list:"Think about time and space complexity. Can you solve this in O(n) using a hash map or two-pointer technique?",dict:"Dictionaries/hash maps provide O(1) lookups. Consider how you can use this to reduce complexity.",pandas:"Pandas provides vectorized operations that are much faster than iterating row by row.",ml:"Break the problem down mathematically first. Write out the formula, then translate it to code step by step."};return t[e.category]||t.list}function gd(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function M5(e){if(Array.isArray(e))return e}function I5(e,t,r){return(t=D5(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _5(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,i,s,o=[],l=!0,d=!1;try{if(i=(r=r.call(e)).next,t!==0)for(;!(l=(n=i.call(r)).done)&&(o.push(n.value),o.length!==t);l=!0);}catch(h){d=!0,a=h}finally{try{if(!l&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw a}}return o}}function L5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vd(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function yd(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?vd(Object(r),!0).forEach(function(n){I5(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):vd(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function O5(e,t){if(e==null)return{};var r,n,a=P5(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function P5(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function z5(e,t){return M5(e)||_5(e,t)||B5(e,t)||L5()}function F5(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function D5(e){var t=F5(e,"string");return typeof t=="symbol"?t:t+""}function B5(e,t){if(e){if(typeof e=="string")return gd(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?gd(e,t):void 0}}function $5(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function wd(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function xd(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?wd(Object(r),!0).forEach(function(n){$5(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):wd(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function j5(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return t.reduceRight(function(a,i){return i(a)},n)}}function ba(e){return function t(){for(var r=this,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return a.length>=e.length?e.apply(this,a):function(){for(var s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];return t.apply(r,[].concat(a,o))}}}function As(e){return{}.toString.call(e).includes("Object")}function U5(e){return!Object.keys(e).length}function Za(e){return typeof e=="function"}function H5(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function q5(e,t){return As(t)||Dr("changeType"),Object.keys(t).some(function(r){return!H5(e,r)})&&Dr("changeField"),t}function G5(e){Za(e)||Dr("selectorType")}function W5(e){Za(e)||As(e)||Dr("handlerType"),As(e)&&Object.values(e).some(function(t){return!Za(t)})&&Dr("handlersType")}function V5(e){e||Dr("initialIsRequired"),As(e)||Dr("initialType"),U5(e)&&Dr("initialContent")}function X5(e,t){throw new Error(e[t]||e.default)}var K5={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Dr=ba(X5)(K5),_i={changes:q5,selector:G5,handler:W5,initial:V5};function Y5(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};_i.initial(e),_i.handler(t);var r={current:e},n=ba(Z5)(r,t),a=ba(J5)(r),i=ba(_i.changes)(e),s=ba(Q5)(r);function o(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(h){return h};return _i.selector(d),d(r.current)}function l(d){j5(n,a,i,s)(d)}return[o,l]}function Q5(e,t){return Za(t)?t(e.current):t}function J5(e,t){return e.current=xd(xd({},e.current),t),t}function Z5(e,t,r){return Za(t)?t(e.current):Object.keys(r).forEach(function(n){var a;return(a=t[n])===null||a===void 0?void 0:a.call(t,e.current[n])}),r}var ev={create:Y5},tv={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function rv(e){return function t(){for(var r=this,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return a.length>=e.length?e.apply(this,a):function(){for(var s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];return t.apply(r,[].concat(a,o))}}}function nv(e){return{}.toString.call(e).includes("Object")}function av(e){return e||bd("configIsRequired"),nv(e)||bd("configType"),e.urls?(iv(),{paths:{vs:e.urls.monacoBase}}):e}function iv(){console.warn(q1.deprecation)}function sv(e,t){throw new Error(e[t]||e.default)}var q1={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},bd=rv(sv)(q1),ov={config:av},lv=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(a){return r.reduceRight(function(i,s){return s(i)},a)}};function G1(e,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&e[r]&&Object.assign(t[r],G1(e[r],t[r]))}),yd(yd({},e),t)}var uv={type:"cancelation",msg:"operation is manually canceled"};function Ho(e){var t=!1,r=new Promise(function(n,a){e.then(function(i){return t?a(uv):n(i)}),e.catch(a)});return r.cancel=function(){return t=!0},r}var cv=["monaco"],dv=ev.create({config:tv,isInitialized:!1,resolve:null,reject:null,monaco:null}),W1=z5(dv,2),oi=W1[0],eo=W1[1];function mv(e){var t=ov.config(e),r=t.monaco,n=O5(t,cv);eo(function(a){return{config:G1(a.config,n),monaco:r}})}function hv(){var e=oi(function(t){var r=t.monaco,n=t.isInitialized,a=t.resolve;return{monaco:r,isInitialized:n,resolve:a}});if(!e.isInitialized){if(eo({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Ho(qo);if(window.monaco&&window.monaco.editor)return V1(window.monaco),e.resolve(window.monaco),Ho(qo);lv(pv,gv)(vv)}return Ho(qo)}function pv(e){return document.body.appendChild(e)}function fv(e){var t=document.createElement("script");return e&&(t.src=e),t}function gv(e){var t=oi(function(n){var a=n.config,i=n.reject;return{config:a,reject:i}}),r=fv("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function vv(){var e=oi(function(r){var n=r.config,a=r.resolve,i=r.reject;return{config:n,resolve:a,reject:i}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(r){var n=r.m||r;V1(n),e.resolve(n)},function(r){e.reject(r)})}function V1(e){oi().monaco||eo({monaco:e})}function yv(){return oi(function(e){var t=e.monaco;return t})}var qo=new Promise(function(e,t){return eo({resolve:e,reject:t})}),X1={config:mv,init:hv,__getMonacoInstance:yv},wv={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Go=wv,xv={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},bv=xv;function Sv({children:e}){return Ar.createElement("div",{style:bv.container},e)}var kv=Sv,Tv=kv;function Cv({width:e,height:t,isEditorReady:r,loading:n,_ref:a,className:i,wrapperProps:s}){return Ar.createElement("section",{style:{...Go.wrapper,width:e,height:t},...s},!r&&Ar.createElement(Tv,null,n),Ar.createElement("div",{ref:a,style:{...Go.fullWidth,...!r&&Go.hide},className:i}))}var Ev=Cv,K1=R.memo(Ev);function Nv(e){R.useEffect(e,[])}var Y1=Nv;function Av(e,t,r=!0){let n=R.useRef(!0);R.useEffect(n.current||!r?()=>{n.current=!1}:e,t)}var dt=Av;function _a(){}function _n(e,t,r,n){return Rv(e,n)||Mv(e,t,r,n)}function Rv(e,t){return e.editor.getModel(Q1(e,t))}function Mv(e,t,r,n){return e.editor.createModel(t,r,n?Q1(e,n):void 0)}function Q1(e,t){return e.Uri.parse(t)}function Iv({original:e,modified:t,language:r,originalLanguage:n,modifiedLanguage:a,originalModelPath:i,modifiedModelPath:s,keepCurrentOriginalModel:o=!1,keepCurrentModifiedModel:l=!1,theme:d="light",loading:h="Loading...",options:m={},height:v="100%",width:x="100%",className:T,wrapperProps:C={},beforeMount:A=_a,onMount:w=_a}){let[y,b]=R.useState(!1),[N,M]=R.useState(!0),I=R.useRef(null),_=R.useRef(null),P=R.useRef(null),U=R.useRef(w),O=R.useRef(A),re=R.useRef(!1);Y1(()=>{let V=X1.init();return V.then(ne=>(_.current=ne)&&M(!1)).catch(ne=>(ne==null?void 0:ne.type)!=="cancelation"&&console.error("Monaco initialization: error:",ne)),()=>I.current?Ne():V.cancel()}),dt(()=>{if(I.current&&_.current){let V=I.current.getOriginalEditor(),ne=_n(_.current,e||"",n||r||"text",i||"");ne!==V.getModel()&&V.setModel(ne)}},[i],y),dt(()=>{if(I.current&&_.current){let V=I.current.getModifiedEditor(),ne=_n(_.current,t||"",a||r||"text",s||"");ne!==V.getModel()&&V.setModel(ne)}},[s],y),dt(()=>{let V=I.current.getModifiedEditor();V.getOption(_.current.editor.EditorOption.readOnly)?V.setValue(t||""):t!==V.getValue()&&(V.executeEdits("",[{range:V.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),V.pushUndoStop())},[t],y),dt(()=>{var V,ne;(ne=(V=I.current)==null?void 0:V.getModel())==null||ne.original.setValue(e||"")},[e],y),dt(()=>{let{original:V,modified:ne}=I.current.getModel();_.current.editor.setModelLanguage(V,n||r||"text"),_.current.editor.setModelLanguage(ne,a||r||"text")},[r,n,a],y),dt(()=>{var V;(V=_.current)==null||V.editor.setTheme(d)},[d],y),dt(()=>{var V;(V=I.current)==null||V.updateOptions(m)},[m],y);let te=R.useCallback(()=>{var Le;if(!_.current)return;O.current(_.current);let V=_n(_.current,e||"",n||r||"text",i||""),ne=_n(_.current,t||"",a||r||"text",s||"");(Le=I.current)==null||Le.setModel({original:V,modified:ne})},[r,t,a,e,n,i,s]),Te=R.useCallback(()=>{var V;!re.current&&P.current&&(I.current=_.current.editor.createDiffEditor(P.current,{automaticLayout:!0,...m}),te(),(V=_.current)==null||V.editor.setTheme(d),b(!0),re.current=!0)},[m,d,te]);R.useEffect(()=>{y&&U.current(I.current,_.current)},[y]),R.useEffect(()=>{!N&&!y&&Te()},[N,y,Te]);function Ne(){var ne,Le,j,K;let V=(ne=I.current)==null?void 0:ne.getModel();o||((Le=V==null?void 0:V.original)==null||Le.dispose()),l||((j=V==null?void 0:V.modified)==null||j.dispose()),(K=I.current)==null||K.dispose()}return Ar.createElement(K1,{width:x,height:v,isEditorReady:y,loading:h,_ref:P,className:T,wrapperProps:C})}var _v=Iv;R.memo(_v);function Lv(e){let t=R.useRef();return R.useEffect(()=>{t.current=e},[e]),t.current}var Ov=Lv,Li=new Map;function Pv({defaultValue:e,defaultLanguage:t,defaultPath:r,value:n,language:a,path:i,theme:s="light",line:o,loading:l="Loading...",options:d={},overrideServices:h={},saveViewState:m=!0,keepCurrentModel:v=!1,width:x="100%",height:T="100%",className:C,wrapperProps:A={},beforeMount:w=_a,onMount:y=_a,onChange:b,onValidate:N=_a}){let[M,I]=R.useState(!1),[_,P]=R.useState(!0),U=R.useRef(null),O=R.useRef(null),re=R.useRef(null),te=R.useRef(y),Te=R.useRef(w),Ne=R.useRef(),V=R.useRef(n),ne=Ov(i),Le=R.useRef(!1),j=R.useRef(!1);Y1(()=>{let W=X1.init();return W.then(Q=>(U.current=Q)&&P(!1)).catch(Q=>(Q==null?void 0:Q.type)!=="cancelation"&&console.error("Monaco initialization: error:",Q)),()=>O.current?Y():W.cancel()}),dt(()=>{var Q,le,De,ut;let W=_n(U.current,e||n||"",t||a||"",i||r||"");W!==((Q=O.current)==null?void 0:Q.getModel())&&(m&&Li.set(ne,(le=O.current)==null?void 0:le.saveViewState()),(De=O.current)==null||De.setModel(W),m&&((ut=O.current)==null||ut.restoreViewState(Li.get(i))))},[i],M),dt(()=>{var W;(W=O.current)==null||W.updateOptions(d)},[d],M),dt(()=>{!O.current||n===void 0||(O.current.getOption(U.current.editor.EditorOption.readOnly)?O.current.setValue(n):n!==O.current.getValue()&&(j.current=!0,O.current.executeEdits("",[{range:O.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),O.current.pushUndoStop(),j.current=!1))},[n],M),dt(()=>{var Q,le;let W=(Q=O.current)==null?void 0:Q.getModel();W&&a&&((le=U.current)==null||le.editor.setModelLanguage(W,a))},[a],M),dt(()=>{var W;o!==void 0&&((W=O.current)==null||W.revealLine(o))},[o],M),dt(()=>{var W;(W=U.current)==null||W.editor.setTheme(s)},[s],M);let K=R.useCallback(()=>{var W;if(!(!re.current||!U.current)&&!Le.current){Te.current(U.current);let Q=i||r,le=_n(U.current,n||e||"",t||a||"",Q||"");O.current=(W=U.current)==null?void 0:W.editor.create(re.current,{model:le,automaticLayout:!0,...d},h),m&&O.current.restoreViewState(Li.get(Q)),U.current.editor.setTheme(s),o!==void 0&&O.current.revealLine(o),I(!0),Le.current=!0}},[e,t,r,n,a,i,d,h,m,s,o]);R.useEffect(()=>{M&&te.current(O.current,U.current)},[M]),R.useEffect(()=>{!_&&!M&&K()},[_,M,K]),V.current=n,R.useEffect(()=>{var W,Q;M&&b&&((W=Ne.current)==null||W.dispose(),Ne.current=(Q=O.current)==null?void 0:Q.onDidChangeModelContent(le=>{j.current||b(O.current.getValue(),le)}))},[M,b]),R.useEffect(()=>{if(M){let W=U.current.editor.onDidChangeMarkers(Q=>{var De;let le=(De=O.current.getModel())==null?void 0:De.uri;if(le&&Q.find(ut=>ut.path===le.path)){let ut=U.current.editor.getModelMarkers({resource:le});N==null||N(ut)}});return()=>{W==null||W.dispose()}}return()=>{}},[M,N]);function Y(){var W,Q;(W=Ne.current)==null||W.dispose(),v?m&&Li.set(i,O.current.saveViewState()):(Q=O.current.getModel())==null||Q.dispose(),O.current.dispose()}return Ar.createElement(K1,{width:x,height:T,isEditorReady:M,loading:l,_ref:re,className:C,wrapperProps:A})}var zv=Pv,Fv=R.memo(zv),J1=Fv;function Dv({results:e,output:t,isRunning:r}){return g.jsxs("div",{className:"border-t border-gray-200 dark:border-slate-600 bg-gray-900 dark:bg-slate-900 max-h-[250px] overflow-y-auto scrollbar-thin shrink-0",children:[g.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 border-b border-gray-700",children:[g.jsx(e5,{className:"w-3.5 h-3.5 text-gray-400"}),g.jsx("span",{className:"text-xs font-medium text-gray-400",children:"Console Output"})]}),r&&g.jsxs("div",{className:"flex items-center gap-2 px-4 py-3",children:[g.jsx(Bn,{className:"w-4 h-4 text-emerald-500 animate-spin"}),g.jsx("span",{className:"text-sm text-gray-400",children:"Running test cases..."})]}),!r&&t&&g.jsx("div",{className:"px-4 py-2 text-sm text-gray-400 font-mono",children:t}),!r&&e.length>0&&g.jsx("div",{className:"px-4 pb-3 space-y-1",children:e.map(n=>g.jsxs("div",{className:`
                flex items-start gap-2 px-3 py-2 rounded text-sm font-mono
                ${n.passed?"bg-emerald-950/20 text-emerald-400":"bg-red-950/20 text-red-400"}
              `,children:[n.passed?g.jsx(na,{className:"w-4 h-4 mt-0.5 shrink-0"}):g.jsx(t5,{className:"w-4 h-4 mt-0.5 shrink-0"}),g.jsxs("div",{className:"flex-1 min-w-0",children:[g.jsxs("div",{className:"font-medium",children:["Test ",n.testNumber,": ",n.passed?"Passed":"Failed"]}),!n.passed&&g.jsx("div",{className:"mt-1 space-y-1 text-xs",children:n.error?g.jsx("div",{className:"text-red-400",children:n.error}):g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"text-gray-500",children:["Input: ",n.input]}),g.jsxs("div",{className:"text-gray-500",children:["Expected: ",n.expected]}),g.jsxs("div",{className:"text-red-400",children:["Got: ",n.actual]})]})})]})]},n.testNumber))}),!r&&e.length===0&&g.jsx("div",{className:"px-4 py-6 text-center text-gray-500 text-sm",children:'Click "Run Code" to test your solution against the test cases.'})]})}function Bv({question:e,code:t,onCodeChange:r,onRun:n,onSubmit:a,results:i,isRunning:s,output:o}){const{theme:l}=Eu(),[d,h]=R.useState(!0);if(!e)return null;const m=i.filter(x=>x.passed).length,v=i.length;return g.jsxs("div",{className:"h-full flex flex-col",children:[g.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 shrink-0",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Solution"}),g.jsx("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:"Python 3"})]}),g.jsxs("button",{onClick:()=>r(e.starterCode),className:"flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors",children:[g.jsx(Cu,{className:"w-3.5 h-3.5"}),"Reset"]})]}),g.jsx("div",{className:"flex-1 min-h-0",children:g.jsx(J1,{height:"100%",language:"python",theme:l==="dark"?"vs-dark":"vs",value:t,onChange:x=>r(x||""),options:{fontSize:14,fontFamily:"'JetBrains Mono', 'Fira Code', monospace",fontLigatures:!0,minimap:{enabled:!1},scrollBeyondLastLine:!1,padding:{top:16},lineNumbers:"on",renderLineHighlight:"all",tabSize:4,insertSpaces:!0,wordWrap:"on",automaticLayout:!0,suggest:{showKeywords:!0,showSnippets:!0},quickSuggestions:!1,parameterHints:{enabled:!1}},loading:g.jsx("div",{className:"flex items-center justify-center h-full bg-gray-900",children:g.jsx(Bn,{className:"w-8 h-8 text-emerald-500 animate-spin"})})})}),g.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-800/50 shrink-0",children:[g.jsxs("button",{onClick:()=>h(!d),className:"flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors",children:[g.jsx(W2,{className:`w-4 h-4 transition-transform ${d?"":"-rotate-90"}`}),"Console ",i.length>0&&`(${m}/${v})`]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsxs("button",{onClick:n,disabled:s,className:`\r
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium\r
              bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-300\r
              hover:bg-gray-300 dark:hover:bg-slate-500\r
              disabled:opacity-50 disabled:cursor-not-allowed\r
              transition-all duration-200\r
            `,children:[s?g.jsx(Bn,{className:"w-4 h-4 animate-spin"}):g.jsx(B1,{className:"w-4 h-4"}),"Run Code"]}),g.jsxs("button",{onClick:a,disabled:s,className:`\r
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium\r
              bg-emerald-600 text-white\r
              hover:bg-emerald-700\r
              disabled:opacity-50 disabled:cursor-not-allowed\r
              transition-all duration-200\r
            `,children:[g.jsx($1,{className:"w-4 h-4"}),"Submit"]})]})]}),d&&g.jsx(Dv,{results:i,output:o,isRunning:s})]})}function Sd(){const{questionId:e}=Js(),t=fn(),{pythonSolved:r,markPythonSolved:n}=aa(),{results:a,isRunning:i,output:s,runCode:o,clearResults:l}=C5(),[d,h]=R.useState(null),[m,v]=R.useState({}),x=R.useMemo(()=>d?fd.filter(M=>M.category===d):fd,[d]),T=R.useMemo(()=>{if(e){const M=x.findIndex(I=>I.id===parseInt(e));if(M>=0)return M}return 0},[e,x]),C=x[T],A=C?m[C.id]||C.starterCode:"",w=M=>{C&&v(I=>({...I,[C.id]:M}))},y=M=>{if(M>=0&&M<x.length){const I=x[M];t(`/python/${I.id}`),l()}},b=()=>{C&&o(A,C.testCases,C.functionName)},N=()=>{C&&(o(A,C.testCases,C.functionName),setTimeout(()=>{},1e3))};return R.useEffect(()=>{a.length>0&&!i&&a.every(I=>I.passed)&&C&&n(C.id)},[a,i,C,n]),R.useEffect(()=>{if(x.length>0){const M=x[0];(!e||!x.find(I=>I.id===parseInt(e)))&&t(`/python/${M.id}`,{replace:!0})}},[d]),C?g.jsxs("div",{className:"h-full flex flex-col",children:[g.jsx(N5,{questions:x,currentIndex:T,onNavigate:y,solvedIds:r,activeCategory:d,onCategoryChange:h}),g.jsxs("div",{className:"flex-1 flex min-h-0",children:[g.jsx("div",{className:"w-1/2 border-r border-gray-200 dark:border-slate-700 overflow-hidden",children:g.jsx(A5,{question:C,isSolved:r.has(C.id)})}),g.jsx("div",{className:"w-1/2 overflow-hidden",children:g.jsx(Bv,{question:C,code:A,onCodeChange:w,onRun:b,onSubmit:N,results:a,isRunning:i,output:s})})]})]}):g.jsx("div",{className:"flex items-center justify-center h-full",children:g.jsx("p",{className:"text-gray-500",children:"No questions found."})})}const Yt=[{id:1,title:"Employees Earning More Than Their Managers",difficulty:"Easy",description:`Write a query to find employees who earn more than their managers.

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
ORDER BY rev_date;`,expectedOutput:[{rev_date:"2024-01-01",revenue:100,moving_avg_3day:100},{rev_date:"2024-01-02",revenue:200,moving_avg_3day:150},{rev_date:"2024-01-03",revenue:150,moving_avg_3day:150},{rev_date:"2024-01-04",revenue:300,moving_avg_3day:216.67},{rev_date:"2024-01-05",revenue:250,moving_avg_3day:233.33}]}];function $v({schema:e}){return e?g.jsxs("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:[g.jsx("div",{className:"bg-blue-50 dark:bg-blue-950/30 px-4 py-2 border-b border-gray-200 dark:border-slate-600",children:g.jsxs("span",{className:"text-sm font-bold text-blue-700 dark:text-blue-400",children:["📋 ",e.name]})}),g.jsx("div",{className:"bg-white dark:bg-slate-800",children:e.columns.map((t,r)=>g.jsxs("div",{className:`
              flex items-center justify-between px-4 py-2 text-sm
              ${r<e.columns.length-1?"border-b border-gray-100 dark:border-slate-700":""}
            `,children:[g.jsxs("div",{className:"flex items-center gap-2",children:[t.key==="PK"&&g.jsx("span",{className:"text-xs px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-mono font-bold",children:"PK"}),t.key==="FK"&&g.jsx("span",{className:"text-xs px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-mono font-bold",children:"FK"}),g.jsx("span",{className:"font-mono text-gray-800 dark:text-gray-200 font-medium",children:t.name})]}),g.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400 font-mono",children:t.type})]},r))})]}):null}function jv({question:e,isSolved:t}){return e?g.jsxs("div",{className:"h-full overflow-y-auto scrollbar-thin p-6 space-y-6",children:[g.jsxs("div",{className:"flex items-start justify-between gap-4",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[g.jsxs("span",{className:"text-xs font-mono text-gray-500 dark:text-gray-400",children:["#",e.id]}),g.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:e.title})]}),g.jsx("span",{className:`px-2.5 py-0.5 rounded-full text-xs font-medium ${e.difficulty==="Easy"?"difficulty-easy":e.difficulty==="Medium"?"difficulty-medium":"difficulty-hard"}`,children:e.difficulty})]}),t&&g.jsxs("div",{className:"flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 shrink-0",children:[g.jsx(na,{className:"w-5 h-5"}),g.jsx("span",{className:"text-sm font-medium",children:"Solved"})]})]}),g.jsx("div",{className:"text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line",children:e.description}),e.schema&&g.jsxs("div",{children:[g.jsxs("h3",{className:"flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white mb-3",children:[g.jsx(z1,{className:"w-4 h-4 text-blue-500"}),"Schema: ",e.schema.name]}),g.jsx($v,{schema:e.schema})]}),e.sampleData&&g.jsxs("div",{children:[g.jsx("h3",{className:"text-sm font-semibold text-gray-900 dark:text-white mb-2",children:"Sample Data"}),g.jsx("pre",{className:"bg-gray-50 dark:bg-slate-700/50 border border-gray-200 dark:border-slate-600 rounded-lg p-4 text-xs font-mono text-gray-700 dark:text-gray-300 overflow-x-auto",children:e.sampleData})]})]}):null}function Uv({results:e}){if(!e||e.length===0)return null;const t=Object.keys(e[0]);return g.jsx("div",{className:"overflow-x-auto",children:g.jsxs("table",{className:"w-full text-sm",children:[g.jsx("thead",{children:g.jsx("tr",{className:"bg-gray-50 dark:bg-slate-700/50 border-b border-gray-200 dark:border-slate-600",children:t.map(r=>g.jsx("th",{className:"px-4 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider",children:r},r))})}),g.jsx("tbody",{children:e.map((r,n)=>g.jsx("tr",{className:`
                border-b border-gray-100 dark:border-slate-700
                ${n%2===0?"bg-white dark:bg-slate-800":"bg-gray-50 dark:bg-slate-800/50"}
              `,children:t.map(a=>g.jsx("td",{className:"px-4 py-2 font-mono text-gray-700 dark:text-gray-300 text-xs",children:r[a]===null?g.jsx("span",{className:"text-gray-400 dark:text-gray-500 italic",children:"NULL"}):String(r[a])},a))},n))})]})})}function Hv({question:e,code:t,onCodeChange:r,onRun:n,onSubmit:a,results:i,isRunning:s}){const{theme:o}=Eu(),[l,d]=R.useState(!0);return e?g.jsxs("div",{className:"h-full flex flex-col",children:[g.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 shrink-0",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"SQL Editor"}),g.jsx("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:"MySQL"})]}),g.jsxs("button",{onClick:()=>r(e.starterCode),className:"flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors",children:[g.jsx(Cu,{className:"w-3.5 h-3.5"}),"Reset"]})]}),g.jsx("div",{className:"flex-1 min-h-0",children:g.jsx(J1,{height:"100%",language:"sql",theme:o==="dark"?"vs-dark":"vs",value:t,onChange:h=>r(h||""),options:{fontSize:14,fontFamily:"'JetBrains Mono', 'Fira Code', monospace",fontLigatures:!0,minimap:{enabled:!1},scrollBeyondLastLine:!1,padding:{top:16},lineNumbers:"on",renderLineHighlight:"all",tabSize:2,insertSpaces:!0,wordWrap:"on",automaticLayout:!0},loading:g.jsx("div",{className:"flex items-center justify-center h-full bg-gray-900",children:g.jsx(Bn,{className:"w-8 h-8 text-emerald-500 animate-spin"})})})}),g.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-800/50 shrink-0",children:[g.jsxs("button",{onClick:()=>d(!l),className:"flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors",children:[g.jsx(Z2,{className:"w-4 h-4"}),"Results ",i.length>0&&`(${i.length} rows)`]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsxs("button",{onClick:n,disabled:s,className:`\r
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium\r
              bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-300\r
              hover:bg-gray-300 dark:hover:bg-slate-500\r
              disabled:opacity-50 disabled:cursor-not-allowed\r
              transition-all duration-200\r
            `,children:[s?g.jsx(Bn,{className:"w-4 h-4 animate-spin"}):g.jsx(B1,{className:"w-4 h-4"}),"Run Query"]}),g.jsxs("button",{onClick:a,disabled:s,className:`\r
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium\r
              bg-emerald-600 text-white\r
              hover:bg-emerald-700\r
              disabled:opacity-50 disabled:cursor-not-allowed\r
              transition-all duration-200\r
            `,children:[g.jsx($1,{className:"w-4 h-4"}),"Submit"]})]})]}),l&&g.jsxs("div",{className:"border-t border-gray-200 dark:border-slate-600 max-h-[250px] overflow-y-auto scrollbar-thin shrink-0",children:[s&&g.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-slate-800",children:[g.jsx(Bn,{className:"w-4 h-4 text-emerald-500 animate-spin"}),g.jsx("span",{className:"text-sm text-gray-500",children:"Executing query..."})]}),!s&&i.length>0&&g.jsxs("div",{className:"bg-white dark:bg-slate-800",children:[g.jsx("div",{className:"px-4 py-2 border-b border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700/50",children:g.jsxs("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:["✓ Query executed successfully — ",i.length," row(s) returned"]})}),g.jsx(Uv,{results:i})]}),!s&&i.length===0&&g.jsx("div",{className:"px-4 py-6 text-center text-gray-500 text-sm bg-gray-50 dark:bg-slate-800/50",children:'Click "Run Query" to execute your SQL and see results.'})]})]}):null}function kd(){const{questionId:e}=Js(),t=fn(),{sqlSolved:r,markSQLSolved:n}=aa(),[a,i]=R.useState({}),[s,o]=R.useState([]),[l,d]=R.useState(!1),h=R.useMemo(()=>{if(e){const w=Yt.findIndex(y=>y.id===parseInt(e));if(w>=0)return w}return 0},[e]),m=Yt[h],v=m?a[m.id]||m.starterCode:"",x=w=>{m&&i(y=>({...y,[m.id]:w}))},T=w=>{if(w>=0&&w<Yt.length){const y=Yt[w];t(`/sql/${y.id}`),o([])}},C=()=>{d(!0),setTimeout(()=>{m&&(o(m.expectedOutput),n(m.id)),d(!1)},600)},A=()=>{C()};return R.useEffect(()=>{Yt.length>0&&(!e||!Yt.find(w=>w.id===parseInt(e)))&&t(`/sql/${Yt[0].id}`,{replace:!0})},[]),m?g.jsxs("div",{className:"h-full flex flex-col",children:[g.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shrink-0",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("span",{className:`px-2.5 py-0.5 rounded-full text-xs font-medium ${m.difficulty==="Easy"?"difficulty-easy":m.difficulty==="Medium"?"difficulty-medium":"difficulty-hard"}`,children:m.difficulty}),g.jsxs("span",{className:"text-sm font-medium text-gray-900 dark:text-white",children:["#",m.id," — ",m.title]})]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("button",{onClick:()=>T(h-1),disabled:h===0,className:"px-3 py-1.5 rounded-lg text-sm bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 disabled:opacity-30 transition-colors",children:"← Prev"}),g.jsxs("span",{className:"text-sm font-mono text-gray-500 dark:text-gray-400",children:[h+1,"/",Yt.length]}),g.jsx("button",{onClick:()=>T(h+1),disabled:h===Yt.length-1,className:"px-3 py-1.5 rounded-lg text-sm bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 disabled:opacity-30 transition-colors",children:"Next →"})]})]}),g.jsxs("div",{className:"flex-1 flex min-h-0",children:[g.jsx("div",{className:"w-1/2 border-r border-gray-200 dark:border-slate-700 overflow-hidden",children:g.jsx(jv,{question:m,isSolved:r.has(m.id)})}),g.jsx("div",{className:"w-1/2 overflow-hidden",children:g.jsx(Hv,{question:m,code:v,onCodeChange:x,onRun:C,onSubmit:A,results:s,isRunning:l})})]})]}):g.jsx("div",{className:"flex items-center justify-center h-full",children:g.jsx("p",{className:"text-gray-500",children:"No questions found."})})}const Kr=[{slug:"basic-statistics",title:"Basic Statistics",order:1,content:`
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
`}];function Z1({topics:e,currentSlug:t,completedSlugs:r,routePrefix:n="/ml",onCloseMobile:a}){const i=fn(),s=e.filter(o=>r.has(o.slug)).length;return g.jsxs("div",{className:"h-full flex flex-col",children:[g.jsxs("div",{className:"px-5 py-4 border-b border-gray-200 dark:border-slate-700 shrink-0",children:[a&&g.jsx("button",{onClick:a,className:"md:hidden absolute top-4 right-4 p-1 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-700",children:g.jsx(r5,{className:"w-5 h-5"})}),g.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[g.jsx(P1,{className:"w-5 h-5 text-purple-500"}),g.jsx("h2",{className:"text-sm font-bold text-gray-900 dark:text-white",children:"ML Learning Roadmap"})]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("div",{className:"flex-1 h-1.5 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden",children:g.jsx("div",{className:"h-full bg-purple-500 rounded-full transition-all duration-500",style:{width:`${s/e.length*100}%`}})}),g.jsxs("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:[s,"/",e.length]})]})]}),g.jsx("nav",{className:"flex-1 overflow-y-auto scrollbar-thin py-2 px-3",children:e.map((o,l)=>{const d=o.slug===t,h=r.has(o.slug);return g.jsxs("button",{onClick:()=>i(`${n}/${o.slug}`),className:`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 mb-0.5
                ${d?"bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400":"text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700/50"}
              `,children:[g.jsx("div",{className:`
                w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold
                ${h?"bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400":d?"bg-purple-600 text-white":"bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400"}
              `,children:h?g.jsx(na,{className:"w-4 h-4"}):l+1}),g.jsx("span",{className:"text-sm font-medium truncate",children:o.title})]},o.slug)})})]})}class D extends Error{constructor(t,r){var n="KaTeX parse error: "+t,a,i,s=r&&r.loc;if(s&&s.start<=s.end){var o=s.lexer.input;a=s.start,i=s.end,a===o.length?n+=" at end of input: ":n+=" at position "+(a+1)+": ";var l=o.slice(a,i).replace(/[^]/g,"$&̲"),d;a>15?d="…"+o.slice(a-15,a):d=o.slice(0,a);var h;i+15<o.length?h=o.slice(i,i+15)+"…":h=o.slice(i),n+=d+l+h}super(n),this.name="ParseError",this.position=void 0,this.length=void 0,this.rawMessage=void 0,Object.setPrototypeOf(this,D.prototype),this.position=a,a!=null&&i!=null&&(this.length=i-a),this.rawMessage=t}}var qv=/([A-Z])/g,Gv=e=>e.replace(qv,"-$1").toLowerCase(),Wv={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},Vv=/[&><"']/g,Ve=e=>String(e).replace(Vv,t=>Wv[t]),es=e=>e.type==="ordgroup"||e.type==="color"?e.body.length===1?es(e.body[0]):e:e.type==="font"?es(e.body):e,Xv=new Set(["mathord","textord","atom"]),hr=e=>Xv.has(es(e).type),Kv=e=>{var t=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);return t?t[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])?null:t[1].toLowerCase():"_relative"},s0={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:e=>"#"+e},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(e,t)=>(t.push(e),t)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:e=>Math.max(0,e),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:e=>Math.max(0,e),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:e=>Math.max(0,e),cli:"-e, --max-expand <n>",cliProcessor:e=>e==="Infinity"?1/0:parseInt(e)},globalGroup:{type:"boolean",cli:!1}};function Yv(e){if(typeof e!="string")return e.enum[0];switch(e){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{};default:throw new Error("Unexpected schema type; settings must declare an explicit default.")}}function Qv(e){if(e.default!==void 0)return e.default;var t=Array.isArray(e.type)?e.type[0]:e.type;return Yv(t)}function Jv(e,t,r,n){var a=r[t];e[t]=a!==void 0?n.processor?n.processor(a):a:Qv(n)}class Nu{constructor(t){t===void 0&&(t={}),this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,t=t||{};for(var r of Object.keys(s0)){var n=s0[r];n&&Jv(this,r,t,n)}}reportNonstrict(t,r,n){var a=this.strict;if(typeof a=="function"&&(a=a(t,r,n)),!(!a||a==="ignore")){if(a===!0||a==="error")throw new D("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+t+"]"),n);a==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+r+" ["+t+"]"))}}useStrictBehavior(t,r,n){var a=this.strict;if(typeof a=="function")try{a=a(t,r,n)}catch{a="error"}return!a||a==="ignore"?!1:a===!0||a==="error"?!0:a==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+r+" ["+t+"]")),!1)}isTrusted(t){if("url"in t&&t.url&&!t.protocol){var r=Kv(t.url);if(r==null)return!1;t.protocol=r}var n=typeof this.trust=="function"?this.trust(t):this.trust;return!!n}}class vr{constructor(t,r,n){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=t,this.size=r,this.cramped=n}sup(){return $t[Zv[this.id]]}sub(){return $t[e3[this.id]]}fracNum(){return $t[t3[this.id]]}fracDen(){return $t[r3[this.id]]}cramp(){return $t[n3[this.id]]}text(){return $t[a3[this.id]]}isTight(){return this.size>=2}}var Au=0,Rs=1,$n=2,ir=3,ei=4,Tt=5,Kn=6,Je=7,$t=[new vr(Au,0,!1),new vr(Rs,0,!0),new vr($n,1,!1),new vr(ir,1,!0),new vr(ei,2,!1),new vr(Tt,2,!0),new vr(Kn,3,!1),new vr(Je,3,!0)],Zv=[ei,Tt,ei,Tt,Kn,Je,Kn,Je],e3=[Tt,Tt,Tt,Tt,Je,Je,Je,Je],t3=[$n,ir,ei,Tt,Kn,Je,Kn,Je],r3=[ir,ir,Tt,Tt,Je,Je,Je,Je],n3=[Rs,Rs,ir,ir,Tt,Tt,Je,Je],a3=[Au,Rs,$n,ir,$n,ir,$n,ir],Z={DISPLAY:$t[Au],TEXT:$t[$n],SCRIPT:$t[ei],SCRIPTSCRIPT:$t[Kn]},o0=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function i3(e){for(var t=0;t<o0.length;t++)for(var r=o0[t],n=0;n<r.blocks.length;n++){var a=r.blocks[n];if(e>=a[0]&&e<=a[1])return r.name}return null}var ts=[];o0.forEach(e=>e.blocks.forEach(t=>ts.push(...t)));function ep(e){for(var t=0;t<ts.length;t+=2)if(e>=ts[t]&&e<=ts[t+1])return!0;return!1}var Oe=e=>e+" "+e,wn=80,s3=function(t,r){return"M95,"+(622+t+r)+`
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
M`+(834+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},o3=function(t,r){return"M263,"+(601+t+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+t/2.084+" -"+t+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+t)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},l3=function(t,r){return"M983 "+(10+t+r)+`
l`+t/3.13+" -"+t+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+t)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},u3=function(t,r){return"M424,"+(2398+t+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+t/4.223+" -"+t+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+t)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+t)+" "+r+`
h400000v`+(40+t)+"h-400000z"},c3=function(t,r){return"M473,"+(2713+t+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+t/5.298+" -"+t+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+t)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+t)+" "+r+"h400000v"+(40+t)+"H1017.7z"},d3=function(t){var r=t/2;return"M400000 "+t+" H0 L"+r+" 0 l65 45 L145 "+(t-80)+" H400000z"},m3=function(t,r,n){var a=n-54-r-t;return"M702 "+(t+r)+"H400000"+(40+t)+`
H742v`+a+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+t)+"H742z"},h3=function(t,r,n){r=1e3*r;var a="";switch(t){case"sqrtMain":a=s3(r,wn);break;case"sqrtSize1":a=o3(r,wn);break;case"sqrtSize2":a=l3(r,wn);break;case"sqrtSize3":a=u3(r,wn);break;case"sqrtSize4":a=c3(r,wn);break;case"sqrtTall":a=m3(r,wn,n)}return a},p3=function(t,r){switch(t){case"⎜":return Oe("M291 0 H417 V"+r+" H291z");case"∣":return Oe("M145 0 H188 V"+r+" H145z");case"∥":return Oe("M145 0 H188 V"+r+" H145z")+Oe("M367 0 H410 V"+r+" H367z");case"⎟":return Oe("M457 0 H583 V"+r+" H457z");case"⎢":return Oe("M319 0 H403 V"+r+" H319z");case"⎥":return Oe("M263 0 H347 V"+r+" H263z");case"⎪":return Oe("M384 0 H504 V"+r+" H384z");case"⏐":return Oe("M312 0 H355 V"+r+" H312z");case"‖":return Oe("M257 0 H300 V"+r+" H257z")+Oe("M478 0 H521 V"+r+" H478z");default:return""}},Td={doubleleftarrow:`M262 157
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
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:Oe("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),leftbracketunder:Oe("M0 0 h120 V290 H399995 v120 H0z"),leftbracketover:Oe("M0 440 h120 V150 H399995 v-120 H0z"),leftmapsto:Oe("M40 281 V448H0V74H40V241H400000v40z"),leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:Oe("M0 50 h400000 v40H0z m0 194h40000v40H0z"),midbrace:`M200428 334
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
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:Oe("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),rightbracketunder:Oe("M399995 0 h-120 V290 H0 v120 H400000z"),rightbracketover:Oe("M399995 440 h-120 V150 H0 v-120 H399995z"),rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},f3=function(t,r){switch(t){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 v84 h347 v-84
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
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};function g3(e){return"toText"in e}class ia{constructor(t){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=t,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(t){return this.classes.includes(t)}toNode(){for(var t=document.createDocumentFragment(),r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){for(var t="",r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t}toText(){return this.children.map(t=>{if(g3(t))return t.toText();throw new Error("Expected MathDomNode with toText, got "+t.constructor.name)}).join("")}}var l0={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},v3={ex:!0,em:!0,mu:!0},tp=function(t){return typeof t!="string"&&(t=t.unit),t in l0||t in v3||t==="ex"},xe=function(t,r){var n;if(t.unit in l0)n=l0[t.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(t.unit==="mu")n=r.fontMetrics().cssEmPerMu;else{var a;if(r.style.isTight()?a=r.havingStyle(r.style.text()):a=r,t.unit==="ex")n=a.fontMetrics().xHeight;else if(t.unit==="em")n=a.fontMetrics().quad;else throw new D("Invalid unit: '"+t.unit+"'");a!==r&&(n*=a.sizeMultiplier/r.sizeMultiplier)}return Math.min(t.number*n,r.maxSize)},$=function(t){return+t.toFixed(4)+"em"},jr=function(t){return t.filter(r=>r).join(" ")},Ru=function(t){var r="";for(var n of Object.keys(t)){var a=t[n];a!==void 0&&(r+=Gv(n)+":"+a+";")}return r},rp=function(t,r,n){if(this.classes=t||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=n||{},r){r.style.isTight()&&this.classes.push("mtight");var a=r.getColor();a&&(this.style.color=a)}},np=function(t){var r=document.createElement(t);r.className=jr(this.classes),Object.assign(r.style,this.style);for(var n of Object.keys(this.attributes))r.setAttribute(n,this.attributes[n]);for(var a=0;a<this.children.length;a++)r.appendChild(this.children[a].toNode());return r},y3=/[\s"'>/=\x00-\x1f]/,ap=function(t){var r="<"+t;this.classes.length&&(r+=' class="'+Ve(jr(this.classes))+'"');var n=Ru(this.style);n&&(r+=' style="'+Ve(n)+'"');for(var a of Object.keys(this.attributes)){if(y3.test(a))throw new D("Invalid attribute name '"+a+"'");r+=" "+a+'="'+Ve(this.attributes[a])+'"'}r+=">";for(var i=0;i<this.children.length;i++)r+=this.children[i].toMarkup();return r+="</"+t+">",r};class sa{constructor(t,r,n,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,this.italic=void 0,rp.call(this,t,n,a),this.children=r||[]}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return np.call(this,"span")}toMarkup(){return ap.call(this,"span")}}class to{constructor(t,r,n,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,rp.call(this,r,a),this.children=n||[],this.setAttribute("href",t)}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return np.call(this,"a")}toMarkup(){return ap.call(this,"a")}}class w3{constructor(t,r,n){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=t,this.classes=["mord"],this.height=0,this.depth=0,this.maxFontSize=0,this.style=n}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createElement("img");return t.src=this.src,t.alt=this.alt,t.className="mord",Object.assign(t.style,this.style),t}toMarkup(){var t='<img src="'+Ve(this.src)+'"'+(' alt="'+Ve(this.alt)+'"'),r=Ru(this.style);return r&&(t+=' style="'+Ve(r)+'"'),t+="'/>",t}}var x3={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class gt{constructor(t,r,n,a,i,s,o,l){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=t,this.height=r||0,this.depth=n||0,this.italic=a||0,this.skew=i||0,this.width=s||0,this.classes=o||[],this.style=l||{},this.maxFontSize=0;var d=i3(this.text.charCodeAt(0));d&&this.classes.push(d+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=x3[this.text])}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createTextNode(this.text),r=null;return this.italic>0&&(r=document.createElement("span"),r.style.marginRight=$(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=jr(this.classes)),Object.keys(this.style).length>0&&(r=r||document.createElement("span"),Object.assign(r.style,this.style)),r?(r.appendChild(t),r):t}toMarkup(){var t=!1,r="<span";this.classes.length&&(t=!0,r+=' class="',r+=Ve(jr(this.classes)),r+='"');var n="";this.italic>0&&(n+="margin-right:"+$(this.italic)+";"),n+=Ru(this.style),n&&(t=!0,r+=' style="'+Ve(n)+'"');var a=Ve(this.text);return t?(r+=">",r+=a,r+="</span>",r):a}}class cr{constructor(t,r){this.children=void 0,this.attributes=void 0,this.children=t||[],this.attributes=r||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"svg");for(var n of Object.keys(this.attributes))r.setAttribute(n,this.attributes[n]);for(var a=0;a<this.children.length;a++)r.appendChild(this.children[a].toNode());return r}toMarkup(){var t='<svg xmlns="http://www.w3.org/2000/svg"';for(var r of Object.keys(this.attributes))t+=" "+r+'="'+Ve(this.attributes[r])+'"';t+=">";for(var n=0;n<this.children.length;n++)t+=this.children[n].toMarkup();return t+="</svg>",t}}class Ur{constructor(t,r){this.pathName=void 0,this.alternate=void 0,this.pathName=t,this.alternate=r}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",Td[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+Ve(this.alternate)+'"/>':'<path d="'+Ve(Td[this.pathName])+'"/>'}}class u0{constructor(t){this.attributes=void 0,this.attributes=t||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"line");for(var n of Object.keys(this.attributes))r.setAttribute(n,this.attributes[n]);return r}toMarkup(){var t="<line";for(var r of Object.keys(this.attributes))t+=" "+r+'="'+Ve(this.attributes[r])+'"';return t+="/>",t}}function b3(e){if(e instanceof gt)return e;throw new Error("Expected symbolNode but got "+String(e)+".")}function S3(e){if(e instanceof sa)return e;throw new Error("Expected span<HtmlDomNode> but got "+String(e)+".")}var k3=e=>e instanceof sa||e instanceof to||e instanceof ia,Ut={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Oi={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},Cd={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function T3(e,t){Ut[e]=t}function Mu(e,t,r){if(!Ut[t])throw new Error("Font metrics not found for font: "+t+".");var n=e.charCodeAt(0),a=Ut[t][n];if(!a&&e[0]in Cd&&(n=Cd[e[0]].charCodeAt(0),a=Ut[t][n]),!a&&r==="text"&&ep(n)&&(a=Ut[t][77]),a)return{depth:a[0],height:a[1],italic:a[2],skew:a[3],width:a[4]}}var Wo={};function C3(e){var t;if(e>=5?t=0:e>=3?t=1:t=2,!Wo[t]){var r=Wo[t]={cssEmPerMu:Oi.quad[t]/18};for(var n in Oi)Oi.hasOwnProperty(n)&&(r[n]=Oi[n][t])}return Wo[t]}var fe={math:{},text:{}};function u(e,t,r,n,a,i){fe[e][a]={font:t,group:r,replace:n},i&&n&&(fe[e][n]=fe[e][a])}var c="math",L="text",p="main",S="ams",ve="accent-token",q="bin",rt="close",oa="inner",X="mathord",_e="op-token",wt="open",li="punct",k="rel",pr="spacing",E="textord";u(c,p,k,"≡","\\equiv",!0);u(c,p,k,"≺","\\prec",!0);u(c,p,k,"≻","\\succ",!0);u(c,p,k,"∼","\\sim",!0);u(c,p,k,"⊥","\\perp");u(c,p,k,"⪯","\\preceq",!0);u(c,p,k,"⪰","\\succeq",!0);u(c,p,k,"≃","\\simeq",!0);u(c,p,k,"∣","\\mid",!0);u(c,p,k,"≪","\\ll",!0);u(c,p,k,"≫","\\gg",!0);u(c,p,k,"≍","\\asymp",!0);u(c,p,k,"∥","\\parallel");u(c,p,k,"⋈","\\bowtie",!0);u(c,p,k,"⌣","\\smile",!0);u(c,p,k,"⊑","\\sqsubseteq",!0);u(c,p,k,"⊒","\\sqsupseteq",!0);u(c,p,k,"≐","\\doteq",!0);u(c,p,k,"⌢","\\frown",!0);u(c,p,k,"∋","\\ni",!0);u(c,p,k,"∝","\\propto",!0);u(c,p,k,"⊢","\\vdash",!0);u(c,p,k,"⊣","\\dashv",!0);u(c,p,k,"∋","\\owns");u(c,p,li,".","\\ldotp");u(c,p,li,"⋅","\\cdotp");u(c,p,li,"⋅","·");u(L,p,E,"⋅","·");u(c,p,E,"#","\\#");u(L,p,E,"#","\\#");u(c,p,E,"&","\\&");u(L,p,E,"&","\\&");u(c,p,E,"ℵ","\\aleph",!0);u(c,p,E,"∀","\\forall",!0);u(c,p,E,"ℏ","\\hbar",!0);u(c,p,E,"∃","\\exists",!0);u(c,p,E,"∇","\\nabla",!0);u(c,p,E,"♭","\\flat",!0);u(c,p,E,"ℓ","\\ell",!0);u(c,p,E,"♮","\\natural",!0);u(c,p,E,"♣","\\clubsuit",!0);u(c,p,E,"℘","\\wp",!0);u(c,p,E,"♯","\\sharp",!0);u(c,p,E,"♢","\\diamondsuit",!0);u(c,p,E,"ℜ","\\Re",!0);u(c,p,E,"♡","\\heartsuit",!0);u(c,p,E,"ℑ","\\Im",!0);u(c,p,E,"♠","\\spadesuit",!0);u(c,p,E,"§","\\S",!0);u(L,p,E,"§","\\S");u(c,p,E,"¶","\\P",!0);u(L,p,E,"¶","\\P");u(c,p,E,"†","\\dag");u(L,p,E,"†","\\dag");u(L,p,E,"†","\\textdagger");u(c,p,E,"‡","\\ddag");u(L,p,E,"‡","\\ddag");u(L,p,E,"‡","\\textdaggerdbl");u(c,p,rt,"⎱","\\rmoustache",!0);u(c,p,wt,"⎰","\\lmoustache",!0);u(c,p,rt,"⟯","\\rgroup",!0);u(c,p,wt,"⟮","\\lgroup",!0);u(c,p,q,"∓","\\mp",!0);u(c,p,q,"⊖","\\ominus",!0);u(c,p,q,"⊎","\\uplus",!0);u(c,p,q,"⊓","\\sqcap",!0);u(c,p,q,"∗","\\ast");u(c,p,q,"⊔","\\sqcup",!0);u(c,p,q,"◯","\\bigcirc",!0);u(c,p,q,"∙","\\bullet",!0);u(c,p,q,"‡","\\ddagger");u(c,p,q,"≀","\\wr",!0);u(c,p,q,"⨿","\\amalg");u(c,p,q,"&","\\And");u(c,p,k,"⟵","\\longleftarrow",!0);u(c,p,k,"⇐","\\Leftarrow",!0);u(c,p,k,"⟸","\\Longleftarrow",!0);u(c,p,k,"⟶","\\longrightarrow",!0);u(c,p,k,"⇒","\\Rightarrow",!0);u(c,p,k,"⟹","\\Longrightarrow",!0);u(c,p,k,"↔","\\leftrightarrow",!0);u(c,p,k,"⟷","\\longleftrightarrow",!0);u(c,p,k,"⇔","\\Leftrightarrow",!0);u(c,p,k,"⟺","\\Longleftrightarrow",!0);u(c,p,k,"↦","\\mapsto",!0);u(c,p,k,"⟼","\\longmapsto",!0);u(c,p,k,"↗","\\nearrow",!0);u(c,p,k,"↩","\\hookleftarrow",!0);u(c,p,k,"↪","\\hookrightarrow",!0);u(c,p,k,"↘","\\searrow",!0);u(c,p,k,"↼","\\leftharpoonup",!0);u(c,p,k,"⇀","\\rightharpoonup",!0);u(c,p,k,"↙","\\swarrow",!0);u(c,p,k,"↽","\\leftharpoondown",!0);u(c,p,k,"⇁","\\rightharpoondown",!0);u(c,p,k,"↖","\\nwarrow",!0);u(c,p,k,"⇌","\\rightleftharpoons",!0);u(c,S,k,"≮","\\nless",!0);u(c,S,k,"","\\@nleqslant");u(c,S,k,"","\\@nleqq");u(c,S,k,"⪇","\\lneq",!0);u(c,S,k,"≨","\\lneqq",!0);u(c,S,k,"","\\@lvertneqq");u(c,S,k,"⋦","\\lnsim",!0);u(c,S,k,"⪉","\\lnapprox",!0);u(c,S,k,"⊀","\\nprec",!0);u(c,S,k,"⋠","\\npreceq",!0);u(c,S,k,"⋨","\\precnsim",!0);u(c,S,k,"⪹","\\precnapprox",!0);u(c,S,k,"≁","\\nsim",!0);u(c,S,k,"","\\@nshortmid");u(c,S,k,"∤","\\nmid",!0);u(c,S,k,"⊬","\\nvdash",!0);u(c,S,k,"⊭","\\nvDash",!0);u(c,S,k,"⋪","\\ntriangleleft");u(c,S,k,"⋬","\\ntrianglelefteq",!0);u(c,S,k,"⊊","\\subsetneq",!0);u(c,S,k,"","\\@varsubsetneq");u(c,S,k,"⫋","\\subsetneqq",!0);u(c,S,k,"","\\@varsubsetneqq");u(c,S,k,"≯","\\ngtr",!0);u(c,S,k,"","\\@ngeqslant");u(c,S,k,"","\\@ngeqq");u(c,S,k,"⪈","\\gneq",!0);u(c,S,k,"≩","\\gneqq",!0);u(c,S,k,"","\\@gvertneqq");u(c,S,k,"⋧","\\gnsim",!0);u(c,S,k,"⪊","\\gnapprox",!0);u(c,S,k,"⊁","\\nsucc",!0);u(c,S,k,"⋡","\\nsucceq",!0);u(c,S,k,"⋩","\\succnsim",!0);u(c,S,k,"⪺","\\succnapprox",!0);u(c,S,k,"≆","\\ncong",!0);u(c,S,k,"","\\@nshortparallel");u(c,S,k,"∦","\\nparallel",!0);u(c,S,k,"⊯","\\nVDash",!0);u(c,S,k,"⋫","\\ntriangleright");u(c,S,k,"⋭","\\ntrianglerighteq",!0);u(c,S,k,"","\\@nsupseteqq");u(c,S,k,"⊋","\\supsetneq",!0);u(c,S,k,"","\\@varsupsetneq");u(c,S,k,"⫌","\\supsetneqq",!0);u(c,S,k,"","\\@varsupsetneqq");u(c,S,k,"⊮","\\nVdash",!0);u(c,S,k,"⪵","\\precneqq",!0);u(c,S,k,"⪶","\\succneqq",!0);u(c,S,k,"","\\@nsubseteqq");u(c,S,q,"⊴","\\unlhd");u(c,S,q,"⊵","\\unrhd");u(c,S,k,"↚","\\nleftarrow",!0);u(c,S,k,"↛","\\nrightarrow",!0);u(c,S,k,"⇍","\\nLeftarrow",!0);u(c,S,k,"⇏","\\nRightarrow",!0);u(c,S,k,"↮","\\nleftrightarrow",!0);u(c,S,k,"⇎","\\nLeftrightarrow",!0);u(c,S,k,"△","\\vartriangle");u(c,S,E,"ℏ","\\hslash");u(c,S,E,"▽","\\triangledown");u(c,S,E,"◊","\\lozenge");u(c,S,E,"Ⓢ","\\circledS");u(c,S,E,"®","\\circledR");u(L,S,E,"®","\\circledR");u(c,S,E,"∡","\\measuredangle",!0);u(c,S,E,"∄","\\nexists");u(c,S,E,"℧","\\mho");u(c,S,E,"Ⅎ","\\Finv",!0);u(c,S,E,"⅁","\\Game",!0);u(c,S,E,"‵","\\backprime");u(c,S,E,"▲","\\blacktriangle");u(c,S,E,"▼","\\blacktriangledown");u(c,S,E,"■","\\blacksquare");u(c,S,E,"⧫","\\blacklozenge");u(c,S,E,"★","\\bigstar");u(c,S,E,"∢","\\sphericalangle",!0);u(c,S,E,"∁","\\complement",!0);u(c,S,E,"ð","\\eth",!0);u(L,p,E,"ð","ð");u(c,S,E,"╱","\\diagup");u(c,S,E,"╲","\\diagdown");u(c,S,E,"□","\\square");u(c,S,E,"□","\\Box");u(c,S,E,"◊","\\Diamond");u(c,S,E,"¥","\\yen",!0);u(L,S,E,"¥","\\yen",!0);u(c,S,E,"✓","\\checkmark",!0);u(L,S,E,"✓","\\checkmark");u(c,S,E,"ℶ","\\beth",!0);u(c,S,E,"ℸ","\\daleth",!0);u(c,S,E,"ℷ","\\gimel",!0);u(c,S,E,"ϝ","\\digamma",!0);u(c,S,E,"ϰ","\\varkappa");u(c,S,wt,"┌","\\@ulcorner",!0);u(c,S,rt,"┐","\\@urcorner",!0);u(c,S,wt,"└","\\@llcorner",!0);u(c,S,rt,"┘","\\@lrcorner",!0);u(c,S,k,"≦","\\leqq",!0);u(c,S,k,"⩽","\\leqslant",!0);u(c,S,k,"⪕","\\eqslantless",!0);u(c,S,k,"≲","\\lesssim",!0);u(c,S,k,"⪅","\\lessapprox",!0);u(c,S,k,"≊","\\approxeq",!0);u(c,S,q,"⋖","\\lessdot");u(c,S,k,"⋘","\\lll",!0);u(c,S,k,"≶","\\lessgtr",!0);u(c,S,k,"⋚","\\lesseqgtr",!0);u(c,S,k,"⪋","\\lesseqqgtr",!0);u(c,S,k,"≑","\\doteqdot");u(c,S,k,"≓","\\risingdotseq",!0);u(c,S,k,"≒","\\fallingdotseq",!0);u(c,S,k,"∽","\\backsim",!0);u(c,S,k,"⋍","\\backsimeq",!0);u(c,S,k,"⫅","\\subseteqq",!0);u(c,S,k,"⋐","\\Subset",!0);u(c,S,k,"⊏","\\sqsubset",!0);u(c,S,k,"≼","\\preccurlyeq",!0);u(c,S,k,"⋞","\\curlyeqprec",!0);u(c,S,k,"≾","\\precsim",!0);u(c,S,k,"⪷","\\precapprox",!0);u(c,S,k,"⊲","\\vartriangleleft");u(c,S,k,"⊴","\\trianglelefteq");u(c,S,k,"⊨","\\vDash",!0);u(c,S,k,"⊪","\\Vvdash",!0);u(c,S,k,"⌣","\\smallsmile");u(c,S,k,"⌢","\\smallfrown");u(c,S,k,"≏","\\bumpeq",!0);u(c,S,k,"≎","\\Bumpeq",!0);u(c,S,k,"≧","\\geqq",!0);u(c,S,k,"⩾","\\geqslant",!0);u(c,S,k,"⪖","\\eqslantgtr",!0);u(c,S,k,"≳","\\gtrsim",!0);u(c,S,k,"⪆","\\gtrapprox",!0);u(c,S,q,"⋗","\\gtrdot");u(c,S,k,"⋙","\\ggg",!0);u(c,S,k,"≷","\\gtrless",!0);u(c,S,k,"⋛","\\gtreqless",!0);u(c,S,k,"⪌","\\gtreqqless",!0);u(c,S,k,"≖","\\eqcirc",!0);u(c,S,k,"≗","\\circeq",!0);u(c,S,k,"≜","\\triangleq",!0);u(c,S,k,"∼","\\thicksim");u(c,S,k,"≈","\\thickapprox");u(c,S,k,"⫆","\\supseteqq",!0);u(c,S,k,"⋑","\\Supset",!0);u(c,S,k,"⊐","\\sqsupset",!0);u(c,S,k,"≽","\\succcurlyeq",!0);u(c,S,k,"⋟","\\curlyeqsucc",!0);u(c,S,k,"≿","\\succsim",!0);u(c,S,k,"⪸","\\succapprox",!0);u(c,S,k,"⊳","\\vartriangleright");u(c,S,k,"⊵","\\trianglerighteq");u(c,S,k,"⊩","\\Vdash",!0);u(c,S,k,"∣","\\shortmid");u(c,S,k,"∥","\\shortparallel");u(c,S,k,"≬","\\between",!0);u(c,S,k,"⋔","\\pitchfork",!0);u(c,S,k,"∝","\\varpropto");u(c,S,k,"◀","\\blacktriangleleft");u(c,S,k,"∴","\\therefore",!0);u(c,S,k,"∍","\\backepsilon");u(c,S,k,"▶","\\blacktriangleright");u(c,S,k,"∵","\\because",!0);u(c,S,k,"⋘","\\llless");u(c,S,k,"⋙","\\gggtr");u(c,S,q,"⊲","\\lhd");u(c,S,q,"⊳","\\rhd");u(c,S,k,"≂","\\eqsim",!0);u(c,p,k,"⋈","\\Join");u(c,S,k,"≑","\\Doteq",!0);u(c,S,q,"∔","\\dotplus",!0);u(c,S,q,"∖","\\smallsetminus");u(c,S,q,"⋒","\\Cap",!0);u(c,S,q,"⋓","\\Cup",!0);u(c,S,q,"⩞","\\doublebarwedge",!0);u(c,S,q,"⊟","\\boxminus",!0);u(c,S,q,"⊞","\\boxplus",!0);u(c,S,q,"⋇","\\divideontimes",!0);u(c,S,q,"⋉","\\ltimes",!0);u(c,S,q,"⋊","\\rtimes",!0);u(c,S,q,"⋋","\\leftthreetimes",!0);u(c,S,q,"⋌","\\rightthreetimes",!0);u(c,S,q,"⋏","\\curlywedge",!0);u(c,S,q,"⋎","\\curlyvee",!0);u(c,S,q,"⊝","\\circleddash",!0);u(c,S,q,"⊛","\\circledast",!0);u(c,S,q,"⋅","\\centerdot");u(c,S,q,"⊺","\\intercal",!0);u(c,S,q,"⋒","\\doublecap");u(c,S,q,"⋓","\\doublecup");u(c,S,q,"⊠","\\boxtimes",!0);u(c,S,k,"⇢","\\dashrightarrow",!0);u(c,S,k,"⇠","\\dashleftarrow",!0);u(c,S,k,"⇇","\\leftleftarrows",!0);u(c,S,k,"⇆","\\leftrightarrows",!0);u(c,S,k,"⇚","\\Lleftarrow",!0);u(c,S,k,"↞","\\twoheadleftarrow",!0);u(c,S,k,"↢","\\leftarrowtail",!0);u(c,S,k,"↫","\\looparrowleft",!0);u(c,S,k,"⇋","\\leftrightharpoons",!0);u(c,S,k,"↶","\\curvearrowleft",!0);u(c,S,k,"↺","\\circlearrowleft",!0);u(c,S,k,"↰","\\Lsh",!0);u(c,S,k,"⇈","\\upuparrows",!0);u(c,S,k,"↿","\\upharpoonleft",!0);u(c,S,k,"⇃","\\downharpoonleft",!0);u(c,p,k,"⊶","\\origof",!0);u(c,p,k,"⊷","\\imageof",!0);u(c,S,k,"⊸","\\multimap",!0);u(c,S,k,"↭","\\leftrightsquigarrow",!0);u(c,S,k,"⇉","\\rightrightarrows",!0);u(c,S,k,"⇄","\\rightleftarrows",!0);u(c,S,k,"↠","\\twoheadrightarrow",!0);u(c,S,k,"↣","\\rightarrowtail",!0);u(c,S,k,"↬","\\looparrowright",!0);u(c,S,k,"↷","\\curvearrowright",!0);u(c,S,k,"↻","\\circlearrowright",!0);u(c,S,k,"↱","\\Rsh",!0);u(c,S,k,"⇊","\\downdownarrows",!0);u(c,S,k,"↾","\\upharpoonright",!0);u(c,S,k,"⇂","\\downharpoonright",!0);u(c,S,k,"⇝","\\rightsquigarrow",!0);u(c,S,k,"⇝","\\leadsto");u(c,S,k,"⇛","\\Rrightarrow",!0);u(c,S,k,"↾","\\restriction");u(c,p,E,"‘","`");u(c,p,E,"$","\\$");u(L,p,E,"$","\\$");u(L,p,E,"$","\\textdollar");u(c,p,E,"%","\\%");u(L,p,E,"%","\\%");u(c,p,E,"_","\\_");u(L,p,E,"_","\\_");u(L,p,E,"_","\\textunderscore");u(c,p,E,"∠","\\angle",!0);u(c,p,E,"∞","\\infty",!0);u(c,p,E,"′","\\prime");u(c,p,E,"△","\\triangle");u(c,p,E,"Γ","\\Gamma",!0);u(c,p,E,"Δ","\\Delta",!0);u(c,p,E,"Θ","\\Theta",!0);u(c,p,E,"Λ","\\Lambda",!0);u(c,p,E,"Ξ","\\Xi",!0);u(c,p,E,"Π","\\Pi",!0);u(c,p,E,"Σ","\\Sigma",!0);u(c,p,E,"Υ","\\Upsilon",!0);u(c,p,E,"Φ","\\Phi",!0);u(c,p,E,"Ψ","\\Psi",!0);u(c,p,E,"Ω","\\Omega",!0);u(c,p,E,"A","Α");u(c,p,E,"B","Β");u(c,p,E,"E","Ε");u(c,p,E,"Z","Ζ");u(c,p,E,"H","Η");u(c,p,E,"I","Ι");u(c,p,E,"K","Κ");u(c,p,E,"M","Μ");u(c,p,E,"N","Ν");u(c,p,E,"O","Ο");u(c,p,E,"P","Ρ");u(c,p,E,"T","Τ");u(c,p,E,"X","Χ");u(c,p,E,"¬","\\neg",!0);u(c,p,E,"¬","\\lnot");u(c,p,E,"⊤","\\top");u(c,p,E,"⊥","\\bot");u(c,p,E,"∅","\\emptyset");u(c,S,E,"∅","\\varnothing");u(c,p,X,"α","\\alpha",!0);u(c,p,X,"β","\\beta",!0);u(c,p,X,"γ","\\gamma",!0);u(c,p,X,"δ","\\delta",!0);u(c,p,X,"ϵ","\\epsilon",!0);u(c,p,X,"ζ","\\zeta",!0);u(c,p,X,"η","\\eta",!0);u(c,p,X,"θ","\\theta",!0);u(c,p,X,"ι","\\iota",!0);u(c,p,X,"κ","\\kappa",!0);u(c,p,X,"λ","\\lambda",!0);u(c,p,X,"μ","\\mu",!0);u(c,p,X,"ν","\\nu",!0);u(c,p,X,"ξ","\\xi",!0);u(c,p,X,"ο","\\omicron",!0);u(c,p,X,"π","\\pi",!0);u(c,p,X,"ρ","\\rho",!0);u(c,p,X,"σ","\\sigma",!0);u(c,p,X,"τ","\\tau",!0);u(c,p,X,"υ","\\upsilon",!0);u(c,p,X,"ϕ","\\phi",!0);u(c,p,X,"χ","\\chi",!0);u(c,p,X,"ψ","\\psi",!0);u(c,p,X,"ω","\\omega",!0);u(c,p,X,"ε","\\varepsilon",!0);u(c,p,X,"ϑ","\\vartheta",!0);u(c,p,X,"ϖ","\\varpi",!0);u(c,p,X,"ϱ","\\varrho",!0);u(c,p,X,"ς","\\varsigma",!0);u(c,p,X,"φ","\\varphi",!0);u(c,p,q,"∗","*",!0);u(c,p,q,"+","+");u(c,p,q,"−","-",!0);u(c,p,q,"⋅","\\cdot",!0);u(c,p,q,"∘","\\circ",!0);u(c,p,q,"÷","\\div",!0);u(c,p,q,"±","\\pm",!0);u(c,p,q,"×","\\times",!0);u(c,p,q,"∩","\\cap",!0);u(c,p,q,"∪","\\cup",!0);u(c,p,q,"∖","\\setminus",!0);u(c,p,q,"∧","\\land");u(c,p,q,"∨","\\lor");u(c,p,q,"∧","\\wedge",!0);u(c,p,q,"∨","\\vee",!0);u(c,p,E,"√","\\surd");u(c,p,wt,"⟨","\\langle",!0);u(c,p,wt,"∣","\\lvert");u(c,p,wt,"∥","\\lVert");u(c,p,rt,"?","?");u(c,p,rt,"!","!");u(c,p,rt,"⟩","\\rangle",!0);u(c,p,rt,"∣","\\rvert");u(c,p,rt,"∥","\\rVert");u(c,p,k,"=","=");u(c,p,k,":",":");u(c,p,k,"≈","\\approx",!0);u(c,p,k,"≅","\\cong",!0);u(c,p,k,"≥","\\ge");u(c,p,k,"≥","\\geq",!0);u(c,p,k,"←","\\gets");u(c,p,k,">","\\gt",!0);u(c,p,k,"∈","\\in",!0);u(c,p,k,"","\\@not");u(c,p,k,"⊂","\\subset",!0);u(c,p,k,"⊃","\\supset",!0);u(c,p,k,"⊆","\\subseteq",!0);u(c,p,k,"⊇","\\supseteq",!0);u(c,S,k,"⊈","\\nsubseteq",!0);u(c,S,k,"⊉","\\nsupseteq",!0);u(c,p,k,"⊨","\\models");u(c,p,k,"←","\\leftarrow",!0);u(c,p,k,"≤","\\le");u(c,p,k,"≤","\\leq",!0);u(c,p,k,"<","\\lt",!0);u(c,p,k,"→","\\rightarrow",!0);u(c,p,k,"→","\\to");u(c,S,k,"≱","\\ngeq",!0);u(c,S,k,"≰","\\nleq",!0);u(c,p,pr," ","\\ ");u(c,p,pr," ","\\space");u(c,p,pr," ","\\nobreakspace");u(L,p,pr," ","\\ ");u(L,p,pr," "," ");u(L,p,pr," ","\\space");u(L,p,pr," ","\\nobreakspace");u(c,p,pr,"","\\nobreak");u(c,p,pr,"","\\allowbreak");u(c,p,li,",",",");u(c,p,li,";",";");u(c,S,q,"⊼","\\barwedge",!0);u(c,S,q,"⊻","\\veebar",!0);u(c,p,q,"⊙","\\odot",!0);u(c,p,q,"⊕","\\oplus",!0);u(c,p,q,"⊗","\\otimes",!0);u(c,p,E,"∂","\\partial",!0);u(c,p,q,"⊘","\\oslash",!0);u(c,S,q,"⊚","\\circledcirc",!0);u(c,S,q,"⊡","\\boxdot",!0);u(c,p,q,"△","\\bigtriangleup");u(c,p,q,"▽","\\bigtriangledown");u(c,p,q,"†","\\dagger");u(c,p,q,"⋄","\\diamond");u(c,p,q,"⋆","\\star");u(c,p,q,"◃","\\triangleleft");u(c,p,q,"▹","\\triangleright");u(c,p,wt,"{","\\{");u(L,p,E,"{","\\{");u(L,p,E,"{","\\textbraceleft");u(c,p,rt,"}","\\}");u(L,p,E,"}","\\}");u(L,p,E,"}","\\textbraceright");u(c,p,wt,"{","\\lbrace");u(c,p,rt,"}","\\rbrace");u(c,p,wt,"[","\\lbrack",!0);u(L,p,E,"[","\\lbrack",!0);u(c,p,rt,"]","\\rbrack",!0);u(L,p,E,"]","\\rbrack",!0);u(c,p,wt,"(","\\lparen",!0);u(c,p,rt,")","\\rparen",!0);u(L,p,E,"<","\\textless",!0);u(L,p,E,">","\\textgreater",!0);u(c,p,wt,"⌊","\\lfloor",!0);u(c,p,rt,"⌋","\\rfloor",!0);u(c,p,wt,"⌈","\\lceil",!0);u(c,p,rt,"⌉","\\rceil",!0);u(c,p,E,"\\","\\backslash");u(c,p,E,"∣","|");u(c,p,E,"∣","\\vert");u(L,p,E,"|","\\textbar",!0);u(c,p,E,"∥","\\|");u(c,p,E,"∥","\\Vert");u(L,p,E,"∥","\\textbardbl");u(L,p,E,"~","\\textasciitilde");u(L,p,E,"\\","\\textbackslash");u(L,p,E,"^","\\textasciicircum");u(c,p,k,"↑","\\uparrow",!0);u(c,p,k,"⇑","\\Uparrow",!0);u(c,p,k,"↓","\\downarrow",!0);u(c,p,k,"⇓","\\Downarrow",!0);u(c,p,k,"↕","\\updownarrow",!0);u(c,p,k,"⇕","\\Updownarrow",!0);u(c,p,_e,"∐","\\coprod");u(c,p,_e,"⋁","\\bigvee");u(c,p,_e,"⋀","\\bigwedge");u(c,p,_e,"⨄","\\biguplus");u(c,p,_e,"⋂","\\bigcap");u(c,p,_e,"⋃","\\bigcup");u(c,p,_e,"∫","\\int");u(c,p,_e,"∫","\\intop");u(c,p,_e,"∬","\\iint");u(c,p,_e,"∭","\\iiint");u(c,p,_e,"∏","\\prod");u(c,p,_e,"∑","\\sum");u(c,p,_e,"⨂","\\bigotimes");u(c,p,_e,"⨁","\\bigoplus");u(c,p,_e,"⨀","\\bigodot");u(c,p,_e,"∮","\\oint");u(c,p,_e,"∯","\\oiint");u(c,p,_e,"∰","\\oiiint");u(c,p,_e,"⨆","\\bigsqcup");u(c,p,_e,"∫","\\smallint");u(L,p,oa,"…","\\textellipsis");u(c,p,oa,"…","\\mathellipsis");u(L,p,oa,"…","\\ldots",!0);u(c,p,oa,"…","\\ldots",!0);u(c,p,oa,"⋯","\\@cdots",!0);u(c,p,oa,"⋱","\\ddots",!0);u(c,p,E,"⋮","\\varvdots");u(L,p,E,"⋮","\\varvdots");u(c,p,ve,"ˊ","\\acute");u(c,p,ve,"ˋ","\\grave");u(c,p,ve,"¨","\\ddot");u(c,p,ve,"~","\\tilde");u(c,p,ve,"ˉ","\\bar");u(c,p,ve,"˘","\\breve");u(c,p,ve,"ˇ","\\check");u(c,p,ve,"^","\\hat");u(c,p,ve,"⃗","\\vec");u(c,p,ve,"˙","\\dot");u(c,p,ve,"˚","\\mathring");u(c,p,X,"","\\@imath");u(c,p,X,"","\\@jmath");u(c,p,E,"ı","ı");u(c,p,E,"ȷ","ȷ");u(L,p,E,"ı","\\i",!0);u(L,p,E,"ȷ","\\j",!0);u(L,p,E,"ß","\\ss",!0);u(L,p,E,"æ","\\ae",!0);u(L,p,E,"œ","\\oe",!0);u(L,p,E,"ø","\\o",!0);u(L,p,E,"Æ","\\AE",!0);u(L,p,E,"Œ","\\OE",!0);u(L,p,E,"Ø","\\O",!0);u(L,p,ve,"ˊ","\\'");u(L,p,ve,"ˋ","\\`");u(L,p,ve,"ˆ","\\^");u(L,p,ve,"˜","\\~");u(L,p,ve,"ˉ","\\=");u(L,p,ve,"˘","\\u");u(L,p,ve,"˙","\\.");u(L,p,ve,"¸","\\c");u(L,p,ve,"˚","\\r");u(L,p,ve,"ˇ","\\v");u(L,p,ve,"¨",'\\"');u(L,p,ve,"˝","\\H");u(L,p,ve,"◯","\\textcircled");var ip={"--":!0,"---":!0,"``":!0,"''":!0};u(L,p,E,"–","--",!0);u(L,p,E,"–","\\textendash");u(L,p,E,"—","---",!0);u(L,p,E,"—","\\textemdash");u(L,p,E,"‘","`",!0);u(L,p,E,"‘","\\textquoteleft");u(L,p,E,"’","'",!0);u(L,p,E,"’","\\textquoteright");u(L,p,E,"“","``",!0);u(L,p,E,"“","\\textquotedblleft");u(L,p,E,"”","''",!0);u(L,p,E,"”","\\textquotedblright");u(c,p,E,"°","\\degree",!0);u(L,p,E,"°","\\degree");u(L,p,E,"°","\\textdegree",!0);u(c,p,E,"£","\\pounds");u(c,p,E,"£","\\mathsterling",!0);u(L,p,E,"£","\\pounds");u(L,p,E,"£","\\textsterling",!0);u(c,S,E,"✠","\\maltese");u(L,S,E,"✠","\\maltese");var Ed='0123456789/@."';for(var Vo=0;Vo<Ed.length;Vo++){var Nd=Ed.charAt(Vo);u(c,p,E,Nd,Nd)}var Ad='0123456789!@*()-=+";:?/.,';for(var Xo=0;Xo<Ad.length;Xo++){var Rd=Ad.charAt(Xo);u(L,p,E,Rd,Rd)}var Ms="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var Ko=0;Ko<Ms.length;Ko++){var Pi=Ms.charAt(Ko);u(c,p,X,Pi,Pi),u(L,p,E,Pi,Pi)}u(c,S,E,"C","ℂ");u(L,S,E,"C","ℂ");u(c,S,E,"H","ℍ");u(L,S,E,"H","ℍ");u(c,S,E,"N","ℕ");u(L,S,E,"N","ℕ");u(c,S,E,"P","ℙ");u(L,S,E,"P","ℙ");u(c,S,E,"Q","ℚ");u(L,S,E,"Q","ℚ");u(c,S,E,"R","ℝ");u(L,S,E,"R","ℝ");u(c,S,E,"Z","ℤ");u(L,S,E,"Z","ℤ");u(c,p,X,"h","ℎ");u(L,p,X,"h","ℎ");var J;for(var Ke=0;Ke<Ms.length;Ke++){var Ce=Ms.charAt(Ke);J=String.fromCharCode(55349,56320+Ke),u(c,p,X,Ce,J),u(L,p,E,Ce,J),J=String.fromCharCode(55349,56372+Ke),u(c,p,X,Ce,J),u(L,p,E,Ce,J),J=String.fromCharCode(55349,56424+Ke),u(c,p,X,Ce,J),u(L,p,E,Ce,J),J=String.fromCharCode(55349,56580+Ke),u(c,p,X,Ce,J),u(L,p,E,Ce,J),J=String.fromCharCode(55349,56684+Ke),u(c,p,X,Ce,J),u(L,p,E,Ce,J),J=String.fromCharCode(55349,56736+Ke),u(c,p,X,Ce,J),u(L,p,E,Ce,J),J=String.fromCharCode(55349,56788+Ke),u(c,p,X,Ce,J),u(L,p,E,Ce,J),J=String.fromCharCode(55349,56840+Ke),u(c,p,X,Ce,J),u(L,p,E,Ce,J),J=String.fromCharCode(55349,56944+Ke),u(c,p,X,Ce,J),u(L,p,E,Ce,J),Ke<26&&(J=String.fromCharCode(55349,56632+Ke),u(c,p,X,Ce,J),u(L,p,E,Ce,J),J=String.fromCharCode(55349,56476+Ke),u(c,p,X,Ce,J),u(L,p,E,Ce,J))}J="𝕜";u(c,p,X,"k",J);u(L,p,E,"k",J);for(var Yr=0;Yr<10;Yr++){var yr=Yr.toString();J=String.fromCharCode(55349,57294+Yr),u(c,p,X,yr,J),u(L,p,E,yr,J),J=String.fromCharCode(55349,57314+Yr),u(c,p,X,yr,J),u(L,p,E,yr,J),J=String.fromCharCode(55349,57324+Yr),u(c,p,X,yr,J),u(L,p,E,yr,J),J=String.fromCharCode(55349,57334+Yr),u(c,p,X,yr,J),u(L,p,E,yr,J)}var c0="ÐÞþ";for(var Yo=0;Yo<c0.length;Yo++){var zi=c0.charAt(Yo);u(c,p,X,zi,zi),u(L,p,E,zi,zi)}var d0={mathClass:"mathbf",textClass:"textbf",font:"Main-Bold"},Md={mathClass:"mathnormal",textClass:"textit",font:"Math-Italic"},Id={mathClass:"boldsymbol",textClass:"boldsymbol",font:"Main-BoldItalic"},E3={mathClass:"mathscr",textClass:"textscr",font:"Script-Regular"},en={mathClass:"",textClass:"",font:""},_d={mathClass:"mathfrak",textClass:"textfrak",font:"Fraktur-Regular"},Ld={mathClass:"mathbb",textClass:"textbb",font:"AMS-Regular"},Od={mathClass:"mathboldfrak",textClass:"textboldfrak",font:"Fraktur-Regular"},m0={mathClass:"mathsf",textClass:"textsf",font:"SansSerif-Regular"},h0={mathClass:"mathboldsf",textClass:"textboldsf",font:"SansSerif-Bold"},Pd={mathClass:"mathitsf",textClass:"textitsf",font:"SansSerif-Italic"},p0={mathClass:"mathtt",textClass:"texttt",font:"Typewriter-Regular"},zd=[d0,d0,Md,Md,Id,Id,E3,en,en,en,_d,_d,Ld,Ld,Od,Od,m0,m0,h0,h0,Pd,Pd,en,en,p0,p0],N3=[d0,en,m0,h0,p0],A3=e=>{var t=e.charCodeAt(0),r=e.charCodeAt(1),n=(t-55296)*1024+(r-56320)+65536;if(119808<=n&&n<120484){var a=Math.floor((n-119808)/26);return zd[a]}else if(120782<=n&&n<=120831){var i=Math.floor((n-120782)/10);return N3[i]}else{if(n===120485||n===120486)return zd[0];if(120486<n&&n<120782)return en;throw new D("Unsupported character: "+e)}},ro=function(t,r,n){if(fe[n][t]){var a=fe[n][t].replace;a&&(t=a)}return{value:t,metrics:Mu(t,r,n)}},Qe=function(t,r,n,a,i){var s=ro(t,r,n),o=s.metrics;t=s.value;var l;if(o){var d=o.italic;(n==="text"||a&&a.font==="mathit")&&(d=0),l=new gt(t,o.height,o.depth,d,o.skew,o.width,i)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+t+"' in style '"+r+"' and mode '"+n+"'")),l=new gt(t,0,0,0,0,0,i);if(a){l.maxFontSize=a.sizeMultiplier,a.style.isTight()&&l.classes.push("mtight");var h=a.getColor();h&&(l.style.color=h)}return l},Iu=function(t,r,n,a){return a===void 0&&(a=[]),n.font==="boldsymbol"&&ro(t,"Main-Bold",r).metrics?Qe(t,"Main-Bold",r,n,a.concat(["mathbf"])):t==="\\"||fe[r][t].font==="main"?Qe(t,"Main-Regular",r,n,a):Qe(t,"AMS-Regular",r,n,a.concat(["amsrm"]))},R3=function(t,r,n){return n!=="textord"&&ro(t,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},no=function(t,r,n){var a=t.mode,i=t.text,s=["mord"],{font:o,fontFamily:l,fontWeight:d,fontShape:h}=r,m=a==="math"||a==="text"&&!!o,v=m?o:l,x="",T="";if(i.charCodeAt(0)===55349){var C=A3(i);x=C.font,T=C[a+"Class"]}if(x)return Qe(i,x,a,r,s.concat(T));if(v){var A,w;if(v==="boldsymbol"){var y=R3(i,a,n);A=y.fontName,w=[y.fontClass]}else m?(A=f0[o].fontName,w=[o]):(A=Fi(l,d,h),w=[l,d,h]);if(ro(i,A,a).metrics)return Qe(i,A,a,r,s.concat(w));if(ip.hasOwnProperty(i)&&A.slice(0,10)==="Typewriter"){for(var b=[],N=0;N<i.length;N++)b.push(Qe(i[N],A,a,r,s.concat(w)));return fr(b)}}if(n==="mathord")return Qe(i,"Math-Italic",a,r,s.concat(["mathnormal"]));if(n==="textord"){var M=fe[a][i]&&fe[a][i].font;if(M==="ams"){var I=Fi("amsrm",d,h);return Qe(i,I,a,r,s.concat("amsrm",d,h))}else if(M==="main"||!M){var _=Fi("textrm",d,h);return Qe(i,_,a,r,s.concat(d,h))}else{var P=Fi(M,d,h);return Qe(i,P,a,r,s.concat(P,d,h))}}else throw new Error("unexpected type: "+n+" in makeOrd")},M3=(e,t)=>{if(jr(e.classes)!==jr(t.classes)||e.skew!==t.skew||e.maxFontSize!==t.maxFontSize||e.italic!==0&&e.hasClass("mathnormal"))return!1;if(e.classes.length===1){var r=e.classes[0];if(r==="mbin"||r==="mord")return!1}for(var n of Object.keys(e.style))if(e.style[n]!==t.style[n])return!1;for(var a of Object.keys(t.style))if(e.style[a]!==t.style[a])return!1;return!0},sp=e=>{for(var t=0;t<e.length-1;t++){var r=e[t],n=e[t+1];r instanceof gt&&n instanceof gt&&M3(r,n)&&(r.text+=n.text,r.height=Math.max(r.height,n.height),r.depth=Math.max(r.depth,n.depth),r.italic=n.italic,e.splice(t+1,1),t--)}return e},_u=function(t){for(var r=0,n=0,a=0,i=0;i<t.children.length;i++){var s=t.children[i];s.height>r&&(r=s.height),s.depth>n&&(n=s.depth),s.maxFontSize>a&&(a=s.maxFontSize)}t.height=r,t.depth=n,t.maxFontSize=a},z=function(t,r,n,a){var i=new sa(t,r,n,a);return _u(i),i},Hr=(e,t,r,n)=>new sa(e,t,r,n),Yn=function(t,r,n){var a=z([t],[],r);return a.height=Math.max(n||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),a.style.borderBottomWidth=$(a.height),a.maxFontSize=1,a},I3=function(t,r,n,a){var i=new to(t,r,n,a);return _u(i),i},fr=function(t){var r=new ia(t);return _u(r),r},Qn=function(t,r){return t instanceof ia?z([],[t],r):t},_3=function(t){if(t.positionType==="individualShift"){for(var r=t.children,n=[r[0]],a=-r[0].shift-r[0].elem.depth,i=a,s=1;s<r.length;s++){var o=-r[s].shift-i-r[s].elem.depth,l=o-(r[s-1].elem.height+r[s-1].elem.depth);i=i+o,n.push({type:"kern",size:l}),n.push(r[s])}return{children:n,depth:a}}var d;if(t.positionType==="top"){for(var h=t.positionData,m=0;m<t.children.length;m++){var v=t.children[m];h-=v.type==="kern"?v.size:v.elem.height+v.elem.depth}d=h}else if(t.positionType==="bottom")d=-t.positionData;else{var x=t.children[0];if(x.type!=="elem")throw new Error('First child must have type "elem".');if(t.positionType==="shift")d=-x.elem.depth-t.positionData;else if(t.positionType==="firstBaseline")d=-x.elem.depth;else throw new Error("Invalid positionType "+t.positionType+".")}return{children:t.children,depth:d}},se=function(t,r){for(var{children:n,depth:a}=_3(t),i=0,s=0;s<n.length;s++){var o=n[s];if(o.type==="elem"){var l=o.elem;i=Math.max(i,l.maxFontSize,l.height)}}i+=2;var d=z(["pstrut"],[]);d.style.height=$(i);for(var h=[],m=a,v=a,x=a,T=0;T<n.length;T++){var C=n[T];if(C.type==="kern")x+=C.size;else{var A=C.elem,w=C.wrapperClasses||[],y=C.wrapperStyle||{},b=z(w,[d,A],void 0,y);b.style.top=$(-i-x-A.depth),C.marginLeft&&(b.style.marginLeft=C.marginLeft),C.marginRight&&(b.style.marginRight=C.marginRight),h.push(b),x+=A.height+A.depth}m=Math.min(m,x),v=Math.max(v,x)}var N=z(["vlist"],h);N.style.height=$(v);var M;if(m<0){var I=z([],[]),_=z(["vlist"],[I]);_.style.height=$(-m);var P=z(["vlist-s"],[new gt("​")]);M=[z(["vlist-r"],[N,P]),z(["vlist-r"],[_])]}else M=[z(["vlist-r"],[N])];var U=z(["vlist-t"],M);return M.length===2&&U.classes.push("vlist-t2"),U.height=v,U.depth=-m,U},op=(e,t)=>{var r=z(["mspace"],[],t),n=xe(e,t);return r.style.marginRight=$(n),r},Fi=(e,t,r)=>{var n,a;switch(e){case"amsrm":n="AMS";break;case"textrm":n="Main";break;case"textsf":n="SansSerif";break;case"texttt":n="Typewriter";break;default:n=e}return t==="textbf"&&r==="textit"?a="BoldItalic":t==="textbf"?a="Bold":r==="textit"?a="Italic":a="Regular",n+"-"+a},f0={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},lp={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},up=function(t,r){var[n,a,i]=lp[t],s=new Ur(n),o=new cr([s],{width:$(a),height:$(i),style:"width:"+$(a),viewBox:"0 0 "+1e3*a+" "+1e3*i,preserveAspectRatio:"xMinYMin"}),l=Hr(["overlay"],[o],r);return l.height=i,l.style.height=$(i),l.style.width=$(a),l},ye={number:3,unit:"mu"},Qr={number:4,unit:"mu"},Qt={number:5,unit:"mu"},L3={mord:{mop:ye,mbin:Qr,mrel:Qt,minner:ye},mop:{mord:ye,mop:ye,mrel:Qt,minner:ye},mbin:{mord:Qr,mop:Qr,mopen:Qr,minner:Qr},mrel:{mord:Qt,mop:Qt,mopen:Qt,minner:Qt},mopen:{},mclose:{mop:ye,mbin:Qr,mrel:Qt,minner:ye},mpunct:{mord:ye,mop:ye,mrel:Qt,mopen:ye,mclose:ye,mpunct:ye,minner:ye},minner:{mord:ye,mop:ye,mbin:Qr,mrel:Qt,mopen:ye,mpunct:ye,minner:ye}},O3={mord:{mop:ye},mop:{mord:ye,mop:ye},mbin:{},mrel:{},mopen:{},mclose:{mop:ye},mpunct:{},minner:{mop:ye}},cp={},Is={},_s={};function H(e){for(var{type:t,names:r,props:n,handler:a,htmlBuilder:i,mathmlBuilder:s}=e,o={type:t,numArgs:n.numArgs,argTypes:n.argTypes,allowedInArgument:!!n.allowedInArgument,allowedInText:!!n.allowedInText,allowedInMath:n.allowedInMath===void 0?!0:n.allowedInMath,numOptionalArgs:n.numOptionalArgs||0,infix:!!n.infix,primitive:!!n.primitive,handler:a},l=0;l<r.length;++l)cp[r[l]]=o;t&&(i&&(Is[t]=i),s&&(_s[t]=s))}function gn(e){var{type:t,htmlBuilder:r,mathmlBuilder:n}=e;H({type:t,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:n})}var Ls=function(t){return t.type==="ordgroup"&&t.body.length===1?t.body[0]:t},Me=function(t){return t.type==="ordgroup"?t.body:[t]},P3=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),z3=new Set(["rightmost","mrel","mclose","mpunct"]),F3={display:Z.DISPLAY,text:Z.TEXT,script:Z.SCRIPT,scriptscript:Z.SCRIPTSCRIPT},D3={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},Fe=function(t,r,n,a){a===void 0&&(a=[null,null]);for(var i=[],s=0;s<t.length;s++){var o=oe(t[s],r);if(o instanceof ia){var l=o.children;i.push(...l)}else i.push(o)}if(sp(i),!n)return i;var d=r;if(t.length===1){var h=t[0];h.type==="sizing"?d=r.havingSize(h.size):h.type==="styling"&&(d=r.havingStyle(F3[h.style]))}var m=z([a[0]||"leftmost"],[],r),v=z([a[1]||"rightmost"],[],r),x=n==="root";return g0(i,(T,C)=>{var A=C.classes[0],w=T.classes[0];A==="mbin"&&z3.has(w)?C.classes[0]="mord":w==="mbin"&&P3.has(A)&&(T.classes[0]="mord")},{node:m},v,x),g0(i,(T,C)=>{var A,w,y=y0(C),b=y0(T),N=y&&b?T.hasClass("mtight")?(A=O3[y])==null?void 0:A[b]:(w=L3[y])==null?void 0:w[b]:null;if(N)return op(N,d)},{node:m},v,x),i},g0=function(t,r,n,a,i){a&&t.push(a);for(var s=0;s<t.length;s++){var o=t[s],l=dp(o);if(l){g0(l.children,r,n,null,i);continue}var d=!o.hasClass("mspace");if(d){var h=r(o,n.node);h&&(n.insertAfter?n.insertAfter(h):(t.unshift(h),s++))}d?n.node=o:i&&o.hasClass("newline")&&(n.node=z(["leftmost"])),n.insertAfter=(m=>v=>{t.splice(m+1,0,v),s++})(s)}a&&t.pop()},dp=function(t){return t instanceof ia||t instanceof to||t instanceof sa&&t.hasClass("enclosing")?t:null},v0=function(t,r){var n=dp(t);if(n){var a=n.children;if(a.length){if(r==="right")return v0(a[a.length-1],"right");if(r==="left")return v0(a[0],"left")}}return t},y0=function(t,r){if(!t)return null;r&&(t=v0(t,r));var n=t.classes[0];return D3[n]||null},ti=function(t,r){var n=["nulldelimiter"].concat(t.baseSizingClasses());return z(r.concat(n))},oe=function(t,r,n){if(!t)return z();if(Is[t.type]){var a=Is[t.type](t,r);if(n&&r.size!==n.size){a=z(r.sizingClasses(n),[a],r);var i=r.sizeMultiplier/n.sizeMultiplier;a.height*=i,a.depth*=i}return a}else throw new D("Got group of unknown type: '"+t.type+"'")};function Di(e,t){var r=z(["base"],e,t),n=z(["strut"]);return n.style.height=$(r.height+r.depth),r.depth&&(n.style.verticalAlign=$(-r.depth)),r.children.unshift(n),r}function w0(e,t){var r=null;e.length===1&&e[0].type==="tag"&&(r=e[0].tag,e=e[0].body);var n=Fe(e,t,"root"),a;n.length===2&&n[1].hasClass("tag")&&(a=n.pop());for(var i=[],s=[],o=0;o<n.length;o++)if(s.push(n[o]),n[o].hasClass("mbin")||n[o].hasClass("mrel")||n[o].hasClass("allowbreak")){for(var l=!1;o<n.length-1&&n[o+1].hasClass("mspace")&&!n[o+1].hasClass("newline");)o++,s.push(n[o]),n[o].hasClass("nobreak")&&(l=!0);l||(i.push(Di(s,t)),s=[])}else n[o].hasClass("newline")&&(s.pop(),s.length>0&&(i.push(Di(s,t)),s=[]),i.push(n[o]));s.length>0&&i.push(Di(s,t));var d;r?(d=Di(Fe(r,t,!0),t),d.classes=["tag"],i.push(d)):a&&i.push(a);var h=z(["katex-html"],i);if(h.setAttribute("aria-hidden","true"),d){var m=d.children[0];m.style.height=$(h.height+h.depth),h.depth&&(m.style.verticalAlign=$(-h.depth))}return h}function mp(e){return new ia(e)}class B{constructor(t,r,n){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=t,this.attributes={},this.children=r||[],this.classes=n||[]}setAttribute(t,r){this.attributes[t]=r}getAttribute(t){return this.attributes[t]}toNode(){var t=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&t.setAttribute(r,this.attributes[r]);this.classes.length>0&&(t.className=jr(this.classes));for(var n=0;n<this.children.length;n++)if(this.children[n]instanceof Ie&&this.children[n+1]instanceof Ie){for(var a=this.children[n].toText()+this.children[++n].toText();this.children[n+1]instanceof Ie;)a+=this.children[++n].toText();t.appendChild(new Ie(a).toNode())}else t.appendChild(this.children[n].toNode());return t}toMarkup(){var t="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="',t+=Ve(this.attributes[r]),t+='"');this.classes.length>0&&(t+=' class ="'+Ve(jr(this.classes))+'"'),t+=">";for(var n=0;n<this.children.length;n++)t+=this.children[n].toMarkup();return t+="</"+this.type+">",t}toText(){return this.children.map(t=>t.toText()).join("")}}class Ie{constructor(t){this.text=void 0,this.text=t}toNode(){return document.createTextNode(this.text)}toMarkup(){return Ve(this.toText())}toText(){return this.text}}class hp{constructor(t){this.width=void 0,this.character=void 0,this.width=t,t>=.05555&&t<=.05556?this.character=" ":t>=.1666&&t<=.1667?this.character=" ":t>=.2222&&t<=.2223?this.character=" ":t>=.2777&&t<=.2778?this.character="  ":t>=-.05556&&t<=-.05555?this.character=" ⁣":t>=-.1667&&t<=-.1666?this.character=" ⁣":t>=-.2223&&t<=-.2222?this.character=" ⁣":t>=-.2778&&t<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var t=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return t.setAttribute("width",$(this.width)),t}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+$(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var B3=new Set(["\\imath","\\jmath"]),$3=new Set(["mrow","mtable"]),At=function(t,r,n){return fe[r][t]&&fe[r][t].replace&&t.charCodeAt(0)!==55349&&!(ip.hasOwnProperty(t)&&n&&(n.fontFamily&&n.fontFamily.slice(4,6)==="tt"||n.font&&n.font.slice(4,6)==="tt"))&&(t=fe[r][t].replace),new Ie(t)},Lu=function(t){return t.length===1?t[0]:new B("mrow",t)},j3={mathit:"italic",boldsymbol:e=>e.type==="textord"?"bold":"bold-italic",mathbf:"bold",mathbb:"double-struck",mathsfit:"sans-serif-italic",mathfrak:"fraktur",mathscr:"script",mathcal:"script",mathsf:"sans-serif",mathtt:"monospace"},Ou=(e,t)=>{if(e.mode==="text"){if(t.fontFamily==="texttt")return"monospace";if(t.fontFamily==="textsf")return t.fontShape==="textit"&&t.fontWeight==="textbf"?"sans-serif-bold-italic":t.fontShape==="textit"?"sans-serif-italic":t.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(t.fontShape==="textit"&&t.fontWeight==="textbf")return"bold-italic";if(t.fontShape==="textit")return"italic";if(t.fontWeight==="textbf")return"bold"}var r=t.font;if(!r||r==="mathnormal")return null;var n=e.mode,a=j3[r];if(a)return typeof a=="function"?a(e):a;var i=e.text;if(B3.has(i))return null;if(fe[n][i]){var s=fe[n][i].replace;s&&(i=s)}var o=f0[r].fontName;return Mu(i,o,n)?f0[r].variant:null};function Qo(e){if(!e)return!1;if(e.type==="mi"&&e.children.length===1){var t=e.children[0];return t instanceof Ie&&t.text==="."}else if(e.type==="mo"&&e.children.length===1&&e.getAttribute("separator")==="true"&&e.getAttribute("lspace")==="0em"&&e.getAttribute("rspace")==="0em"){var r=e.children[0];return r instanceof Ie&&r.text===","}else return!1}var xt=function(t,r,n){if(t.length===1){var a=ce(t[0],r);return n&&a instanceof B&&a.type==="mo"&&(a.setAttribute("lspace","0em"),a.setAttribute("rspace","0em")),[a]}for(var i=[],s,o=0;o<t.length;o++){var l=ce(t[o],r);if(l instanceof B&&s instanceof B){if(l.type==="mtext"&&s.type==="mtext"&&l.getAttribute("mathvariant")===s.getAttribute("mathvariant")){s.children.push(...l.children);continue}else if(l.type==="mn"&&s.type==="mn"){s.children.push(...l.children);continue}else if(Qo(l)&&s.type==="mn"){s.children.push(...l.children);continue}else if(l.type==="mn"&&Qo(s))l.children=[...s.children,...l.children],i.pop();else if((l.type==="msup"||l.type==="msub")&&l.children.length>=1&&(s.type==="mn"||Qo(s))){var d=l.children[0];d instanceof B&&d.type==="mn"&&(d.children=[...s.children,...d.children],i.pop())}else if(s.type==="mi"&&s.children.length===1){var h=s.children[0];if(h instanceof Ie&&h.text==="̸"&&(l.type==="mo"||l.type==="mi"||l.type==="mn")){var m=l.children[0];m instanceof Ie&&m.text.length>0&&(m.text=m.text.slice(0,1)+"̸"+m.text.slice(1),i.pop())}}}i.push(l),s=l}return i},qr=function(t,r,n){return Lu(xt(t,r,n))},ce=function(t,r){if(!t)return new B("mrow");if(_s[t.type])return _s[t.type](t,r);throw new D("Got group of unknown type: '"+t.type+"'")};function Fd(e,t,r,n,a){var i=xt(e,r),s;i.length===1&&i[0]instanceof B&&$3.has(i[0].type)?s=i[0]:s=new B("mrow",i);var o=new B("annotation",[new Ie(t)]);o.setAttribute("encoding","application/x-tex");var l=new B("semantics",[s,o]),d=new B("math",[l]);d.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),n&&d.setAttribute("display","block");var h=a?"katex":"katex-mathml";return z([h],[d])}var U3=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Dd=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Bd=function(t,r){return r.size<2?t:U3[t-1][r.size-1]};class tr{constructor(t){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=t.style,this.color=t.color,this.size=t.size||tr.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||"",this.fontFamily=t.fontFamily||"",this.fontWeight=t.fontWeight||"",this.fontShape=t.fontShape||"",this.sizeMultiplier=Dd[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this._fontMetrics=void 0}extend(t){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};return Object.assign(r,t),new tr(r)}havingStyle(t){return this.style===t?this:this.extend({style:t,size:Bd(this.textSize,t)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(t){return this.size===t&&this.textSize===t?this:this.extend({style:this.style.text(),size:t,textSize:t,sizeMultiplier:Dd[t-1]})}havingBaseStyle(t){t=t||this.style.text();var r=Bd(tr.BASESIZE,t);return this.size===r&&this.textSize===tr.BASESIZE&&this.style===t?this:this.extend({style:t,size:r})}havingBaseSizing(){var t;switch(this.style.id){case 4:case 5:t=3;break;case 6:case 7:t=1;break;default:t=6}return this.extend({style:this.style.text(),size:t})}withColor(t){return this.extend({color:t})}withPhantom(){return this.extend({phantom:!0})}withFont(t){return this.extend({font:t})}withTextFontFamily(t){return this.extend({fontFamily:t,font:""})}withTextFontWeight(t){return this.extend({fontWeight:t,font:""})}withTextFontShape(t){return this.extend({fontShape:t,font:""})}sizingClasses(t){return t.size!==this.size?["sizing","reset-size"+t.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==tr.BASESIZE?["sizing","reset-size"+this.size,"size"+tr.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=C3(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}tr.BASESIZE=6;var pp=function(t){return new tr({style:t.displayMode?Z.DISPLAY:Z.TEXT,maxSize:t.maxSize,minRuleThickness:t.minRuleThickness})},fp=function(t,r){if(r.displayMode){var n=["katex-display"];r.leqno&&n.push("leqno"),r.fleqn&&n.push("fleqn"),t=z(n,[t])}return t},H3=function(t,r,n){var a=pp(n),i;if(n.output==="mathml")return Fd(t,r,a,n.displayMode,!0);if(n.output==="html"){var s=w0(t,a);i=z(["katex"],[s])}else{var o=Fd(t,r,a,n.displayMode,!1),l=w0(t,a);i=z(["katex"],[o,l])}return fp(i,n)},q3=function(t,r,n){var a=pp(n),i=w0(t,a),s=z(["katex"],[i]);return fp(s,n)},G3={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",underbracket:"⎵",overbracket:"⎴",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},ao=function(t){var r=new B("mo",[new Ie(G3[t.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},W3={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overbracket:[["leftbracketover","rightbracketover"],1.6,440],underbracket:[["leftbracketunder","rightbracketunder"],1.6,410],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},V3=new Set(["widehat","widecheck","widetilde","utilde"]),io=function(t,r){function n(){var o=4e5,l=t.label.slice(1);if(V3.has(l)&&"base"in t){var d=t.base.type==="ordgroup"?t.base.body.length:1,h,m,v;if(d>5)l==="widehat"||l==="widecheck"?(h=420,o=2364,v=.42,m=l+"4"):(h=312,o=2340,v=.34,m="tilde4");else{var x=[1,1,2,2,3,3][d];l==="widehat"||l==="widecheck"?(o=[0,1062,2364,2364,2364][x],h=[0,239,300,360,420][x],v=[0,.24,.3,.3,.36,.42][x],m=l+x):(o=[0,600,1033,2339,2340][x],h=[0,260,286,306,312][x],v=[0,.26,.286,.3,.306,.34][x],m="tilde"+x)}var T=new Ur(m),C=new cr([T],{width:"100%",height:$(v),viewBox:"0 0 "+o+" "+h,preserveAspectRatio:"none"});return{span:Hr([],[C],r),minWidth:0,height:v}}else{var A=[],w=W3[l];if(!w)throw new Error('No SVG data for "'+l+'".');var[y,b,N]=w,M=N/1e3,I=y.length,_,P;if(I===1){if(w.length!==4)throw new Error('Expected 4-tuple for single-path SVG data "'+l+'".');_=["hide-tail"],P=[w[3]]}else if(I===2)_=["halfarrow-left","halfarrow-right"],P=["xMinYMin","xMaxYMin"];else if(I===3)_=["brace-left","brace-center","brace-right"],P=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+I+" children.");for(var U=0;U<I;U++){var O=new Ur(y[U]),re=new cr([O],{width:"400em",height:$(M),viewBox:"0 0 "+o+" "+N,preserveAspectRatio:P[U]+" slice"}),te=Hr([_[U]],[re],r);if(I===1)return{span:te,minWidth:b,height:M};te.style.height=$(M),A.push(te)}return{span:z(["stretchy"],A,r),minWidth:b,height:M}}}var{span:a,minWidth:i,height:s}=n();return a.height=s,a.style.height=$(s),i>0&&(a.style.minWidth=$(i)),a},X3=function(t,r,n,a,i){var s,o=t.height+t.depth+n+a;if(/fbox|color|angl/.test(r)){if(s=z(["stretchy",r],[],i),r==="fbox"){var l=i.color&&i.getColor();l&&(s.style.borderColor=l)}}else{var d=[];/^[bx]cancel$/.test(r)&&d.push(new u0({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&d.push(new u0({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var h=new cr(d,{width:"100%",height:$(o)});s=Hr([],[h],i)}return s.height=o,s.style.height=$(o),s},K3={bin:1,close:1,inner:1,open:1,punct:1,rel:1},Y3={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1};function Q3(e){return e in K3}function ee(e,t){if(!e||e.type!==t)throw new Error("Expected node of type "+t+", but got "+(e?"node of type "+e.type:String(e)));return e}function so(e){var t=oo(e);if(!t)throw new Error("Expected node of symbol group type, but got "+(e?"node of type "+e.type:String(e)));return t}function oo(e){return e&&(e.type==="atom"||Y3.hasOwnProperty(e.type))?e:null}var gp=e=>{if(e instanceof gt)return e;if(k3(e)&&e.children.length===1)return gp(e.children[0])},Pu=(e,t)=>{var r,n,a;e&&e.type==="supsub"?(n=ee(e.base,"accent"),r=n.base,e.base=r,a=S3(oe(e,t)),e.base=n):(n=ee(e,"accent"),r=n.base);var i=oe(r,t.havingCrampedStyle()),s=n.isShifty&&hr(r),o=0;if(s){var l,d;o=(l=(d=gp(i))==null?void 0:d.skew)!=null?l:0}var h=n.label==="\\c",m=h?i.height+i.depth:Math.min(i.height,t.fontMetrics().xHeight),v;if(n.isStretchy)v=io(n,t),v=se({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"elem",elem:v,wrapperClasses:["svg-align"],wrapperStyle:o>0?{width:"calc(100% - "+$(2*o)+")",marginLeft:$(2*o)}:void 0}]});else{var x,T;n.label==="\\vec"?(x=up("vec",t),T=lp.vec[1]):(x=no({mode:n.mode,text:n.label},t,"textord"),x=b3(x),x.italic=0,T=x.width,h&&(m+=x.depth)),v=z(["accent-body"],[x]);var C=n.label==="\\textcircled";C&&(v.classes.push("accent-full"),m=i.height);var A=o;C||(A-=T/2),v.style.left=$(A),n.label==="\\textcircled"&&(v.style.top=".2em"),v=se({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"kern",size:-m},{type:"elem",elem:v}]})}var w=z(["mord","accent"],[v],t);return a?(a.children[0]=w,a.height=Math.max(w.height,a.height),a.classes[0]="mord",a):w},vp=(e,t)=>{var r=e.isStretchy?ao(e.label):new B("mo",[At(e.label,e.mode)]),n=new B("mover",[ce(e.base,t),r]);return n.setAttribute("accent","true"),n},J3=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(e=>"\\"+e).join("|"));H({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(e,t)=>{var r=Ls(t[0]),n=!J3.test(e.funcName),a=!n||e.funcName==="\\widehat"||e.funcName==="\\widetilde"||e.funcName==="\\widecheck";return{type:"accent",mode:e.parser.mode,label:e.funcName,isStretchy:n,isShifty:a,base:r}},htmlBuilder:Pu,mathmlBuilder:vp});H({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(e,t)=>{var r=t[0],n=e.parser.mode;return n==="math"&&(e.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+e.funcName+" works only in text mode"),n="text"),{type:"accent",mode:n,label:e.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:Pu,mathmlBuilder:vp});H({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0];return{type:"accentUnder",mode:r.mode,label:n,base:a}},htmlBuilder:(e,t)=>{var r=oe(e.base,t),n=io(e,t),a=e.label==="\\utilde"?.12:0,i=se({positionType:"top",positionData:r.height,children:[{type:"elem",elem:n,wrapperClasses:["svg-align"]},{type:"kern",size:a},{type:"elem",elem:r}]});return z(["mord","accentunder"],[i],t)},mathmlBuilder:(e,t)=>{var r=ao(e.label),n=new B("munder",[ce(e.base,t),r]);return n.setAttribute("accentunder","true"),n}});var Bi=e=>{var t=new B("mpadded",e?[e]:[]);return t.setAttribute("width","+0.6em"),t.setAttribute("lspace","0.3em"),t};H({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(e,t,r){var{parser:n,funcName:a}=e;return{type:"xArrow",mode:n.mode,label:a,body:t[0],below:r[0]}},htmlBuilder(e,t){var r=t.style,n=t.havingStyle(r.sup()),a=Qn(oe(e.body,n,t),t),i=e.label.slice(0,2)==="\\x"?"x":"cd";a.classes.push(i+"-arrow-pad");var s;e.below&&(n=t.havingStyle(r.sub()),s=Qn(oe(e.below,n,t),t),s.classes.push(i+"-arrow-pad"));var o=io(e,t),l=-t.fontMetrics().axisHeight+.5*o.height,d=-t.fontMetrics().axisHeight-.5*o.height-.111;(a.depth>.25||e.label==="\\xleftequilibrium")&&(d-=a.depth);var h;if(s){var m=-t.fontMetrics().axisHeight+s.height+.5*o.height+.111;h=se({positionType:"individualShift",children:[{type:"elem",elem:a,shift:d},{type:"elem",elem:o,shift:l,wrapperClasses:["svg-align"]},{type:"elem",elem:s,shift:m}]})}else h=se({positionType:"individualShift",children:[{type:"elem",elem:a,shift:d},{type:"elem",elem:o,shift:l,wrapperClasses:["svg-align"]}]});return z(["mrel","x-arrow"],[h],t)},mathmlBuilder(e,t){var r=ao(e.label);r.setAttribute("minsize",e.label.charAt(0)==="x"?"1.75em":"3.0em");var n;if(e.body){var a=Bi(ce(e.body,t));if(e.below){var i=Bi(ce(e.below,t));n=new B("munderover",[r,i,a])}else n=new B("mover",[r,a])}else if(e.below){var s=Bi(ce(e.below,t));n=new B("munder",[r,s])}else n=Bi(),n=new B("mover",[r,n]);return n}});function yp(e,t){var r=Fe(e.body,t,!0);return z([e.mclass],r,t)}function wp(e,t){var r,n=xt(e.body,t);return e.mclass==="minner"?r=new B("mpadded",n):e.mclass==="mord"?e.isCharacterBox?(r=n[0],r.type="mi"):r=new B("mi",n):(e.isCharacterBox?(r=n[0],r.type="mo"):r=new B("mo",n),e.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):e.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):e.mclass==="mopen"||e.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):e.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}H({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(e,t){var{parser:r,funcName:n}=e,a=t[0];return{type:"mclass",mode:r.mode,mclass:"m"+n.slice(5),body:Me(a),isCharacterBox:hr(a)}},htmlBuilder:yp,mathmlBuilder:wp});var lo=e=>{var t=e.type==="ordgroup"&&e.body.length?e.body[0]:e;return t.type==="atom"&&(t.family==="bin"||t.family==="rel")?"m"+t.family:"mord"};H({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(e,t){var{parser:r}=e;return{type:"mclass",mode:r.mode,mclass:lo(t[0]),body:Me(t[1]),isCharacterBox:hr(t[1])}}});H({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(e,t){var{parser:r,funcName:n}=e,a=t[1],i=t[0],s;n!=="\\stackrel"?s=lo(a):s="mrel";var o={type:"op",mode:a.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:n!=="\\stackrel",body:Me(a)},l={type:"supsub",mode:i.mode,base:o,sup:n==="\\underset"?null:i,sub:n==="\\underset"?i:null};return{type:"mclass",mode:r.mode,mclass:s,body:[l],isCharacterBox:hr(l)}},htmlBuilder:yp,mathmlBuilder:wp});H({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:r}=e;return{type:"pmb",mode:r.mode,mclass:lo(t[0]),body:Me(t[0])}},htmlBuilder(e,t){var r=Fe(e.body,t,!0),n=z([e.mclass],r,t);return n.style.textShadow="0.02em 0.01em 0.04px",n},mathmlBuilder(e,t){var r=xt(e.body,t),n=new B("mstyle",r);return n.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),n}});var Z3={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},$d=()=>({type:"styling",body:[],mode:"math",style:"display",resetFont:!0}),jd=e=>e.type==="textord"&&e.text==="@",ey=(e,t)=>(e.type==="mathord"||e.type==="atom")&&e.text===t;function ty(e,t,r){var n=Z3[e];switch(n){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(n,[t[0]],[t[1]]);case"\\uparrow":case"\\downarrow":{var a=r.callFunction("\\\\cdleft",[t[0]],[]),i={type:"atom",text:n,mode:"math",family:"rel"},s=r.callFunction("\\Big",[i],[]),o=r.callFunction("\\\\cdright",[t[1]],[]),l={type:"ordgroup",mode:"math",body:[a,s,o]};return r.callFunction("\\\\cdparent",[l],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var d={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[d],[])}default:return{type:"textord",text:" ",mode:"math"}}}function ry(e){var t=[];for(e.gullet.beginGroup(),e.gullet.macros.set("\\cr","\\\\\\relax"),e.gullet.beginGroup();;){t.push(e.parseExpression(!1,"\\\\")),e.gullet.endGroup(),e.gullet.beginGroup();var r=e.fetch().text;if(r==="&"||r==="\\\\")e.consume();else if(r==="\\end"){t[t.length-1].length===0&&t.pop();break}else throw new D("Expected \\\\ or \\cr or \\end",e.nextToken)}for(var n=[],a=[n],i=0;i<t.length;i++){for(var s=t[i],o=$d(),l=0;l<s.length;l++)if(!jd(s[l]))o.body.push(s[l]);else{n.push(o),l+=1;var d=so(s[l]).text,h=new Array(2);if(h[0]={type:"ordgroup",mode:"math",body:[]},h[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(d))if("<>AV".includes(d))for(var m=0;m<2;m++){for(var v=!0,x=l+1;x<s.length;x++){if(ey(s[x],d)){v=!1,l=x;break}if(jd(s[x]))throw new D("Missing a "+d+" character to complete a CD arrow.",s[x]);h[m].body.push(s[x])}if(v)throw new D("Missing a "+d+" character to complete a CD arrow.",s[l])}else throw new D('Expected one of "<>AV=|." after @',s[l]);var T=ty(d,h,e),C={type:"styling",body:[T],mode:"math",style:"display",resetFont:!0};n.push(C),o=$d()}i%2===0?n.push(o):n.shift(),n=[],a.push(n)}e.gullet.endGroup(),e.gullet.endGroup();var A=new Array(a[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:a,arraystretch:1,addJot:!0,rowGaps:[null],cols:A,colSeparationType:"CD",hLinesBeforeRow:new Array(a.length+1).fill([])}}H({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(e,t){var{parser:r,funcName:n}=e;return{type:"cdlabel",mode:r.mode,side:n.slice(4),label:t[0]}},htmlBuilder(e,t){var r=t.havingStyle(t.style.sup()),n=Qn(oe(e.label,r,t),t);return n.classes.push("cd-label-"+e.side),n.style.bottom=$(.8-n.depth),n.height=0,n.depth=0,n},mathmlBuilder(e,t){var r=new B("mrow",[ce(e.label,t)]);return r=new B("mpadded",[r]),r.setAttribute("width","0"),e.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new B("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});H({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(e,t){var{parser:r}=e;return{type:"cdlabelparent",mode:r.mode,fragment:t[0]}},htmlBuilder(e,t){var r=Qn(oe(e.fragment,t),t);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(e,t){return new B("mrow",[ce(e.fragment,t)])}});H({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(e,t){for(var{parser:r}=e,n=ee(t[0],"ordgroup"),a=n.body,i="",s=0;s<a.length;s++){var o=ee(a[s],"textord");i+=o.text}var l=parseInt(i),d;if(isNaN(l))throw new D("\\@char has non-numeric argument "+i);if(l<0||l>=1114111)throw new D("\\@char with invalid code point "+i);return l<=65535?d=String.fromCharCode(l):(l-=65536,d=String.fromCharCode((l>>10)+55296,(l&1023)+56320)),{type:"textord",mode:r.mode,text:d}}});var xp=(e,t)=>{var r=Fe(e.body,t.withColor(e.color),!1);return fr(r)},bp=(e,t)=>{var r=xt(e.body,t.withColor(e.color)),n=new B("mstyle",r);return n.setAttribute("mathcolor",e.color),n};H({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(e,t){var{parser:r}=e,n=ee(t[0],"color-token").color,a=t[1];return{type:"color",mode:r.mode,color:n,body:Me(a)}},htmlBuilder:xp,mathmlBuilder:bp});H({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(e,t){var{parser:r,breakOnTokenText:n}=e,a=ee(t[0],"color-token").color;r.gullet.macros.set("\\current@color",a);var i=r.parseExpression(!0,n);return{type:"color",mode:r.mode,color:a,body:i}},htmlBuilder:xp,mathmlBuilder:bp});H({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(e,t,r){var{parser:n}=e,a=n.gullet.future().text==="["?n.parseSizeGroup(!0):null,i=!n.settings.displayMode||!n.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:n.mode,newLine:i,size:a&&ee(a,"size").value}},htmlBuilder(e,t){var r=z(["mspace"],[],t);return e.newLine&&(r.classes.push("newline"),e.size&&(r.style.marginTop=$(xe(e.size,t)))),r},mathmlBuilder(e,t){var r=new B("mspace");return e.newLine&&(r.setAttribute("linebreak","newline"),e.size&&r.setAttribute("height",$(xe(e.size,t)))),r}});var x0={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},Sp=e=>{var t=e.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new D("Expected a control sequence",e);return t},ny=e=>{var t=e.gullet.popToken();return t.text==="="&&(t=e.gullet.popToken(),t.text===" "&&(t=e.gullet.popToken())),t},kp=(e,t,r,n)=>{var a=e.gullet.macros.get(r.text);a==null&&(r.noexpand=!0,a={tokens:[r],numArgs:0,unexpandable:!e.gullet.isExpandable(r.text)}),e.gullet.macros.set(t,a,n)};H({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(e){var{parser:t,funcName:r}=e;t.consumeSpaces();var n=t.fetch();if(x0[n.text])return(r==="\\global"||r==="\\\\globallong")&&(n.text=x0[n.text]),ee(t.parseFunction(),"internal");throw new D("Invalid token after macro prefix",n)}});H({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:r}=e,n=t.gullet.popToken(),a=n.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(a))throw new D("Expected a control sequence",n);for(var i=0,s,o=[[]];t.gullet.future().text!=="{";)if(n=t.gullet.popToken(),n.text==="#"){if(t.gullet.future().text==="{"){s=t.gullet.future(),o[i].push("{");break}if(n=t.gullet.popToken(),!/^[1-9]$/.test(n.text))throw new D('Invalid argument number "'+n.text+'"');if(parseInt(n.text)!==i+1)throw new D('Argument number "'+n.text+'" out of order');i++,o.push([])}else{if(n.text==="EOF")throw new D("Expected a macro definition");o[i].push(n.text)}var{tokens:l}=t.gullet.consumeArg();return s&&l.unshift(s),(r==="\\edef"||r==="\\xdef")&&(l=t.gullet.expandTokens(l),l.reverse()),t.gullet.macros.set(a,{tokens:l,numArgs:i,delimiters:o},r===x0[r]),{type:"internal",mode:t.mode}}});H({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:r}=e,n=Sp(t.gullet.popToken());t.gullet.consumeSpaces();var a=ny(t);return kp(t,n,a,r==="\\\\globallet"),{type:"internal",mode:t.mode}}});H({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:r}=e,n=Sp(t.gullet.popToken()),a=t.gullet.popToken(),i=t.gullet.popToken();return kp(t,n,i,r==="\\\\globalfuture"),t.gullet.pushToken(i),t.gullet.pushToken(a),{type:"internal",mode:t.mode}}});var Sa=function(t,r,n){var a=fe.math[t]&&fe.math[t].replace,i=Mu(a||t,r,n);if(!i)throw new Error("Unsupported symbol "+t+" and font size "+r+".");return i},zu=function(t,r,n,a){var i=n.havingBaseStyle(r),s=z(a.concat(i.sizingClasses(n)),[t],n),o=i.sizeMultiplier/n.sizeMultiplier;return s.height*=o,s.depth*=o,s.maxFontSize=i.sizeMultiplier,s},Tp=function(t,r,n){var a=r.havingBaseStyle(n),i=(1-r.sizeMultiplier/a.sizeMultiplier)*r.fontMetrics().axisHeight;t.classes.push("delimcenter"),t.style.top=$(i),t.height-=i,t.depth+=i},ay=function(t,r,n,a,i,s){var o=Qe(t,"Main-Regular",i,a),l=zu(o,r,a,s);return Tp(l,a,r),l},iy=function(t,r,n,a){return Qe(t,"Size"+r+"-Regular",n,a)},Cp=function(t,r,n,a,i,s){var o=iy(t,r,i,a),l=zu(z(["delimsizing","size"+r],[o],a),Z.TEXT,a,s);return n&&Tp(l,a,Z.TEXT),l},Jo=function(t,r,n){var a;r==="Size1-Regular"?a="delim-size1":a="delim-size4";var i=z(["delimsizinginner",a],[z([],[Qe(t,r,n)])]);return{type:"elem",elem:i}},Zo=function(t,r,n){var a=Ut["Size4-Regular"][t.charCodeAt(0)]?Ut["Size4-Regular"][t.charCodeAt(0)][4]:Ut["Size1-Regular"][t.charCodeAt(0)][4],i=new Ur("inner",p3(t,Math.round(1e3*r))),s=new cr([i],{width:$(a),height:$(r),style:"width:"+$(a),viewBox:"0 0 "+1e3*a+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),o=Hr([],[s],n);return o.height=r,o.style.height=$(r),o.style.width=$(a),{type:"elem",elem:o}},b0=.008,$i={type:"kern",size:-1*b0},sy=new Set(["|","\\lvert","\\rvert","\\vert"]),oy=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),Ep=function(t,r,n,a,i,s){var o,l,d,h,m="",v=0;o=d=h=t,l=null;var x="Size1-Regular";t==="\\uparrow"?d=h="⏐":t==="\\Uparrow"?d=h="‖":t==="\\downarrow"?o=d="⏐":t==="\\Downarrow"?o=d="‖":t==="\\updownarrow"?(o="\\uparrow",d="⏐",h="\\downarrow"):t==="\\Updownarrow"?(o="\\Uparrow",d="‖",h="\\Downarrow"):sy.has(t)?(d="∣",m="vert",v=333):oy.has(t)?(d="∥",m="doublevert",v=556):t==="["||t==="\\lbrack"?(o="⎡",d="⎢",h="⎣",x="Size4-Regular",m="lbrack",v=667):t==="]"||t==="\\rbrack"?(o="⎤",d="⎥",h="⎦",x="Size4-Regular",m="rbrack",v=667):t==="\\lfloor"||t==="⌊"?(d=o="⎢",h="⎣",x="Size4-Regular",m="lfloor",v=667):t==="\\lceil"||t==="⌈"?(o="⎡",d=h="⎢",x="Size4-Regular",m="lceil",v=667):t==="\\rfloor"||t==="⌋"?(d=o="⎥",h="⎦",x="Size4-Regular",m="rfloor",v=667):t==="\\rceil"||t==="⌉"?(o="⎤",d=h="⎥",x="Size4-Regular",m="rceil",v=667):t==="("||t==="\\lparen"?(o="⎛",d="⎜",h="⎝",x="Size4-Regular",m="lparen",v=875):t===")"||t==="\\rparen"?(o="⎞",d="⎟",h="⎠",x="Size4-Regular",m="rparen",v=875):t==="\\{"||t==="\\lbrace"?(o="⎧",l="⎨",h="⎩",d="⎪",x="Size4-Regular"):t==="\\}"||t==="\\rbrace"?(o="⎫",l="⎬",h="⎭",d="⎪",x="Size4-Regular"):t==="\\lgroup"||t==="⟮"?(o="⎧",h="⎩",d="⎪",x="Size4-Regular"):t==="\\rgroup"||t==="⟯"?(o="⎫",h="⎭",d="⎪",x="Size4-Regular"):t==="\\lmoustache"||t==="⎰"?(o="⎧",h="⎭",d="⎪",x="Size4-Regular"):(t==="\\rmoustache"||t==="⎱")&&(o="⎫",h="⎩",d="⎪",x="Size4-Regular");var T=Sa(o,x,i),C=T.height+T.depth,A=Sa(d,x,i),w=A.height+A.depth,y=Sa(h,x,i),b=y.height+y.depth,N=0,M=1;if(l!==null){var I=Sa(l,x,i);N=I.height+I.depth,M=2}var _=C+b+N,P=Math.max(0,Math.ceil((r-_)/(M*w))),U=_+P*M*w,O=a.fontMetrics().axisHeight;n&&(O*=a.sizeMultiplier);var re=U/2-O,te=[];if(m.length>0){var Te=U-C-b,Ne=Math.round(U*1e3),V=f3(m,Math.round(Te*1e3)),ne=new Ur(m,V),Le=$(v/1e3),j=$(Ne/1e3),K=new cr([ne],{width:Le,height:j,viewBox:"0 0 "+v+" "+Ne}),Y=Hr([],[K],a);Y.height=Ne/1e3,Y.style.width=Le,Y.style.height=j,te.push({type:"elem",elem:Y})}else{if(te.push(Jo(h,x,i)),te.push($i),l===null){var W=U-C-b+2*b0;te.push(Zo(d,W,a))}else{var Q=(U-C-b-N)/2+2*b0;te.push(Zo(d,Q,a)),te.push($i),te.push(Jo(l,x,i)),te.push($i),te.push(Zo(d,Q,a))}te.push($i),te.push(Jo(o,x,i))}var le=a.havingBaseStyle(Z.TEXT),De=se({positionType:"bottom",positionData:re,children:te});return zu(z(["delimsizing","mult"],[De],le),Z.TEXT,a,s)},el=80,tl=.08,rl=function(t,r,n,a,i){var s=h3(t,a,n),o=new Ur(t,s),l=new cr([o],{width:"400em",height:$(r),viewBox:"0 0 400000 "+n,preserveAspectRatio:"xMinYMin slice"});return Hr(["hide-tail"],[l],i)},ly=function(t,r){var n=r.havingBaseSizing(),a=Ip("\\surd",t*n.sizeMultiplier,Mp,n),i=n.sizeMultiplier,s=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),o,l,d,h,m;return a.type==="small"?(h=1e3+1e3*s+el,t<1?i=1:t<1.4&&(i=.7),l=(1+s+tl)/i,d=(1+s)/i,o=rl("sqrtMain",l,h,s,r),o.style.minWidth="0.853em",m=.833/i):a.type==="large"?(h=(1e3+el)*La[a.size],d=(La[a.size]+s)/i,l=(La[a.size]+s+tl)/i,o=rl("sqrtSize"+a.size,l,h,s,r),o.style.minWidth="1.02em",m=1/i):(l=t+s+tl,d=t+s,h=Math.floor(1e3*t+s)+el,o=rl("sqrtTall",l,h,s,r),o.style.minWidth="0.742em",m=1.056),o.height=d,o.style.height=$(l),{span:o,advanceWidth:m,ruleWidth:(r.fontMetrics().sqrtRuleThickness+s)*i}},Np=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),uy=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),Ap=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),La=[0,1.2,1.8,2.4,3],Rp=function(t,r,n,a,i){if(t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle"),Np.has(t)||Ap.has(t))return Cp(t,r,!1,n,a,i);if(uy.has(t))return Ep(t,La[r],!1,n,a,i);throw new D("Illegal delimiter: '"+t+"'")},cy=[{type:"small",style:Z.SCRIPTSCRIPT},{type:"small",style:Z.SCRIPT},{type:"small",style:Z.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],dy=[{type:"small",style:Z.SCRIPTSCRIPT},{type:"small",style:Z.SCRIPT},{type:"small",style:Z.TEXT},{type:"stack"}],Mp=[{type:"small",style:Z.SCRIPTSCRIPT},{type:"small",style:Z.SCRIPT},{type:"small",style:Z.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],my=function(t){if(t.type==="small")return"Main-Regular";if(t.type==="large")return"Size"+t.size+"-Regular";if(t.type==="stack")return"Size4-Regular";var r=t.type;throw new Error("Add support for delim type '"+r+"' here.")},Ip=function(t,r,n,a){for(var i=Math.min(2,3-a.style.size),s=i;s<n.length;s++){var o=n[s];if(o.type==="stack")break;var l=Sa(t,my(o),"math"),d=l.height+l.depth;if(o.type==="small"){var h=a.havingBaseStyle(o.style);d*=h.sizeMultiplier}if(d>r)return o}return n[n.length-1]},S0=function(t,r,n,a,i,s){t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle");var o;Ap.has(t)?o=cy:Np.has(t)?o=Mp:o=dy;var l=Ip(t,r,o,a);return l.type==="small"?ay(t,l.style,n,a,i,s):l.type==="large"?Cp(t,l.size,n,a,i,s):Ep(t,r,n,a,i,s)},nl=function(t,r,n,a,i,s){var o=a.fontMetrics().axisHeight*a.sizeMultiplier,l=901,d=5/a.fontMetrics().ptPerEm,h=Math.max(r-o,n+o),m=Math.max(h/500*l,2*h-d);return S0(t,m,!0,a,i,s)},Ud={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},hy=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function Hd(e){return"isMiddle"in e}function uo(e,t){var r=oo(e);if(r&&hy.has(r.text))return r;throw r?new D("Invalid delimiter '"+r.text+"' after '"+t.funcName+"'",e):new D("Invalid delimiter type '"+e.type+"'",e)}H({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(e,t)=>{var r=uo(t[0],e);return{type:"delimsizing",mode:e.parser.mode,size:Ud[e.funcName].size,mclass:Ud[e.funcName].mclass,delim:r.text}},htmlBuilder:(e,t)=>e.delim==="."?z([e.mclass]):Rp(e.delim,e.size,t,e.mode,[e.mclass]),mathmlBuilder:e=>{var t=[];e.delim!=="."&&t.push(At(e.delim,e.mode));var r=new B("mo",t);e.mclass==="mopen"||e.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var n=$(La[e.size]);return r.setAttribute("minsize",n),r.setAttribute("maxsize",n),r}});function qd(e){if(!e.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}H({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var r=e.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new D("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:e.parser.mode,delim:uo(t[0],e).text,color:r}}});H({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var r=uo(t[0],e),n=e.parser;++n.leftrightDepth;var a=n.parseExpression(!1);--n.leftrightDepth,n.expect("\\right",!1);var i=ee(n.parseFunction(),"leftright-right");return{type:"leftright",mode:n.mode,body:a,left:r.text,right:i.delim,rightColor:i.color}},htmlBuilder:(e,t)=>{qd(e);for(var r=Fe(e.body,t,!0,["mopen","mclose"]),n=0,a=0,i=!1,s=0;s<r.length;s++){var o=r[s];Hd(o)?i=!0:(n=Math.max(r[s].height,n),a=Math.max(r[s].depth,a))}n*=t.sizeMultiplier,a*=t.sizeMultiplier;var l;if(e.left==="."?l=ti(t,["mopen"]):l=nl(e.left,n,a,t,e.mode,["mopen"]),r.unshift(l),i)for(var d=1;d<r.length;d++){var h=r[d];if(Hd(h)){var m=h.isMiddle;r[d]=nl(m.delim,n,a,m.options,e.mode,[])}}var v;if(e.right===".")v=ti(t,["mclose"]);else{var x=e.rightColor?t.withColor(e.rightColor):t;v=nl(e.right,n,a,x,e.mode,["mclose"])}return r.push(v),z(["minner"],r,t)},mathmlBuilder:(e,t)=>{qd(e);var r=xt(e.body,t);if(e.left!=="."){var n=new B("mo",[At(e.left,e.mode)]);n.setAttribute("fence","true"),r.unshift(n)}if(e.right!=="."){var a=new B("mo",[At(e.right,e.mode)]);a.setAttribute("fence","true"),e.rightColor&&a.setAttribute("mathcolor",e.rightColor),r.push(a)}return Lu(r)}});H({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var r=uo(t[0],e);if(!e.parser.leftrightDepth)throw new D("\\middle without preceding \\left",r);return{type:"middle",mode:e.parser.mode,delim:r.text}},htmlBuilder:(e,t)=>{var r;return e.delim==="."?r=ti(t,[]):(r=Rp(e.delim,1,t,e.mode,[]),r.isMiddle={delim:e.delim,options:t}),r},mathmlBuilder:(e,t)=>{var r=e.delim==="\\vert"||e.delim==="|"?At("|","text"):At(e.delim,e.mode),n=new B("mo",[r]);return n.setAttribute("fence","true"),n.setAttribute("lspace","0.05em"),n.setAttribute("rspace","0.05em"),n}});var co=(e,t)=>{var r=Qn(oe(e.body,t),t),n=e.label.slice(1),a=t.sizeMultiplier,i,s,o=hr(e.body);if(n==="sout")i=z(["stretchy","sout"]),i.height=t.fontMetrics().defaultRuleThickness/a,s=-.5*t.fontMetrics().xHeight;else if(n==="phase"){var l=xe({number:.6,unit:"pt"},t),d=xe({number:.35,unit:"ex"},t),h=t.havingBaseSizing();a=a/h.sizeMultiplier;var m=r.height+r.depth+l+d;r.style.paddingLeft=$(m/2+l);var v=Math.floor(1e3*m*a),x=d3(v),T=new cr([new Ur("phase",x)],{width:"400em",height:$(v/1e3),viewBox:"0 0 400000 "+v,preserveAspectRatio:"xMinYMin slice"});i=Hr(["hide-tail"],[T],t),i.style.height=$(m),s=r.depth+l+d}else{/cancel/.test(n)?o||r.classes.push("cancel-pad"):n==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var C,A,w=0;/box/.test(n)?(w=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),C=t.fontMetrics().fboxsep+(n==="colorbox"?0:w),A=C):n==="angl"?(w=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),C=4*w,A=Math.max(0,.25-r.depth)):(C=o?.2:0,A=C),i=X3(r,n,C,A,t),/fbox|boxed|fcolorbox/.test(n)?(i.style.borderStyle="solid",i.style.borderWidth=$(w)):n==="angl"&&w!==.049&&(i.style.borderTopWidth=$(w),i.style.borderRightWidth=$(w)),s=r.depth+A,e.backgroundColor&&(i.style.backgroundColor=e.backgroundColor,e.borderColor&&(i.style.borderColor=e.borderColor))}var y;if(e.backgroundColor)y=se({positionType:"individualShift",children:[{type:"elem",elem:i,shift:s},{type:"elem",elem:r,shift:0}]});else{var b=/cancel|phase/.test(n)?["svg-align"]:[];y=se({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:i,shift:s,wrapperClasses:b}]})}return/cancel/.test(n)&&(y.height=r.height,y.depth=r.depth),/cancel/.test(n)&&!o?z(["mord","cancel-lap"],[y],t):z(["mord"],[y],t)},mo=(e,t)=>{var r,n=new B(e.label.includes("colorbox")?"mpadded":"menclose",[ce(e.body,t)]);switch(e.label){case"\\cancel":n.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":n.setAttribute("notation","downdiagonalstrike");break;case"\\phase":n.setAttribute("notation","phasorangle");break;case"\\sout":n.setAttribute("notation","horizontalstrike");break;case"\\fbox":n.setAttribute("notation","box");break;case"\\angl":n.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,n.setAttribute("width","+"+2*r+"pt"),n.setAttribute("height","+"+2*r+"pt"),n.setAttribute("lspace",r+"pt"),n.setAttribute("voffset",r+"pt"),e.label==="\\fcolorbox"){var a=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);n.setAttribute("style","border: "+$(a)+" solid "+e.borderColor)}break;case"\\xcancel":n.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return e.backgroundColor&&n.setAttribute("mathbackground",e.backgroundColor),n};H({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","hbox"]},handler(e,t,r){var{parser:n,funcName:a}=e,i=ee(t[0],"color-token").color,s=t[1];return{type:"enclose",mode:n.mode,label:a,backgroundColor:i,body:s}},htmlBuilder:co,mathmlBuilder:mo});H({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","hbox"]},handler(e,t,r){var{parser:n,funcName:a}=e,i=ee(t[0],"color-token").color,s=ee(t[1],"color-token").color,o=t[2];return{type:"enclose",mode:n.mode,label:a,backgroundColor:s,borderColor:i,body:o}},htmlBuilder:co,mathmlBuilder:mo});H({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(e,t){var{parser:r}=e;return{type:"enclose",mode:r.mode,label:"\\fbox",body:t[0]}}});H({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\phase"],props:{numArgs:1},handler(e,t){var{parser:r,funcName:n}=e,a=t[0];return{type:"enclose",mode:r.mode,label:n,body:a}},htmlBuilder:co,mathmlBuilder:mo});H({type:"enclose",names:["\\sout"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:r,funcName:n}=e;r.mode==="math"&&r.settings.reportNonstrict("mathVsSout","LaTeX's \\sout works only in text mode");var a=t[0];return{type:"enclose",mode:r.mode,label:n,body:a}},htmlBuilder:co,mathmlBuilder:mo});H({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(e,t){var{parser:r}=e;return{type:"enclose",mode:r.mode,label:"\\angl",body:t[0]}}});var _p={};function Wt(e){for(var{type:t,names:r,props:n,handler:a,htmlBuilder:i,mathmlBuilder:s}=e,o={type:t,numArgs:n.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:a},l=0;l<r.length;++l)_p[r[l]]=o;i&&(Is[t]=i),s&&(_s[t]=s)}var Lp={};function f(e,t){Lp[e]=t}class nt{constructor(t,r,n){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=t,this.start=r,this.end=n}static range(t,r){return r?!t||!t.loc||!r.loc||t.loc.lexer!==r.loc.lexer?null:new nt(t.loc.lexer,t.loc.start,r.loc.end):t&&t.loc}}class pt{constructor(t,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=t,this.loc=r}range(t,r){return new pt(r,nt.range(this,t))}}function Gd(e){var t=[];e.consumeSpaces();var r=e.fetch().text;for(r==="\\relax"&&(e.consume(),e.consumeSpaces(),r=e.fetch().text);r==="\\hline"||r==="\\hdashline";)e.consume(),t.push(r==="\\hdashline"),e.consumeSpaces(),r=e.fetch().text;return t}var ho=e=>{var t=e.parser.settings;if(!t.displayMode)throw new D("{"+e.envName+"} can be used only in display mode.")},py=new Set(["gather","gather*"]);function Fu(e){if(!e.includes("ed"))return!e.includes("*")}function Xr(e,t,r){var{hskipBeforeAndAfter:n,addJot:a,cols:i,arraystretch:s,colSeparationType:o,autoTag:l,singleRow:d,emptySingleRow:h,maxNumCols:m,leqno:v}=t;if(e.gullet.beginGroup(),d||e.gullet.macros.set("\\cr","\\\\\\relax"),!s){var x=e.gullet.expandMacroAsText("\\arraystretch");if(x==null)s=1;else if(s=parseFloat(x),!s||s<0)throw new D("Invalid \\arraystretch: "+x)}e.gullet.beginGroup();var T=[],C=[T],A=[],w=[],y=l!=null?[]:void 0;function b(){l&&e.gullet.macros.set("\\@eqnsw","1",!0)}function N(){y&&(e.gullet.macros.get("\\df@tag")?(y.push(e.subparse([new pt("\\df@tag")])),e.gullet.macros.set("\\df@tag",void 0,!0)):y.push(!!l&&e.gullet.macros.get("\\@eqnsw")==="1"))}for(b(),w.push(Gd(e));;){var M=e.parseExpression(!1,d?"\\end":"\\\\");e.gullet.endGroup(),e.gullet.beginGroup();var I={type:"ordgroup",mode:e.mode,body:M};r&&(I={type:"styling",mode:e.mode,style:r,resetFont:!0,body:[I]}),T.push(I);var _=e.fetch().text;if(_==="&"){if(m&&T.length===m){if(d||o)throw new D("Too many tab characters: &",e.nextToken);e.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}e.consume()}else if(_==="\\end"){N(),T.length===1&&I.type==="styling"&&I.body.length===1&&I.body[0].type==="ordgroup"&&I.body[0].body.length===0&&(C.length>1||!h)&&C.pop(),w.length<C.length+1&&w.push([]);break}else if(_==="\\\\"){e.consume();var P=void 0;e.gullet.future().text!==" "&&(P=e.parseSizeGroup(!0)),A.push(P?P.value:null),N(),w.push(Gd(e)),T=[],C.push(T),b()}else throw new D("Expected & or \\\\ or \\cr or \\end",e.nextToken)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:"array",mode:e.mode,addJot:a,arraystretch:s,body:C,cols:i,rowGaps:A,hskipBeforeAndAfter:n,hLinesBeforeRow:w,colSeparationType:o,tags:y,leqno:v}}function Du(e){return e.slice(0,1)==="d"?"display":"text"}var Vt=function(t,r){var n,a,i=t.body.length,s=t.hLinesBeforeRow,o=0,l=new Array(i),d=[],h=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),m=1/r.fontMetrics().ptPerEm,v=5*m;if(t.colSeparationType&&t.colSeparationType==="small"){var x=r.havingStyle(Z.SCRIPT).sizeMultiplier;v=.2778*(x/r.sizeMultiplier)}var T=t.colSeparationType==="CD"?xe({number:3,unit:"ex"},r):12*m,C=3*m,A=t.arraystretch*T,w=.7*A,y=.3*A,b=0;function N(hi){for(var pi=0;pi<hi.length;++pi)pi>0&&(b+=.25),d.push({pos:b,isDashed:hi[pi]})}for(N(s[0]),n=0;n<t.body.length;++n){var M=t.body[n],I=w,_=y;o<M.length&&(o=M.length);var P={cells:new Array(M.length),height:0,depth:0,pos:0};for(a=0;a<M.length;++a){var U=oe(M[a],r);_<U.depth&&(_=U.depth),I<U.height&&(I=U.height),P.cells[a]=U}var O=t.rowGaps[n],re=0;O&&(re=xe(O,r),re>0&&(re+=y,_<re&&(_=re),re=0)),t.addJot&&n<t.body.length-1&&(_+=C),P.height=I,P.depth=_,b+=I,P.pos=b,b+=_+re,l[n]=P,N(s[n+1])}var te=b/2+r.fontMetrics().axisHeight,Te=t.cols||[],Ne=[],V,ne,Le=[];if(t.tags&&t.tags.some(hi=>hi))for(n=0;n<i;++n){var j=l[n],K=j.pos-te,Y=t.tags[n],W=void 0;Y===!0?W=z(["eqn-num"],[],r):Y===!1?W=z([],[],r):W=z([],Fe(Y,r,!0),r),W.depth=j.depth,W.height=j.height,Le.push({type:"elem",elem:W,shift:K})}for(a=0,ne=0;a<o||ne<Te.length;++a,++ne){for(var Q,le=Te[ne],De=!0;((ut=le)==null?void 0:ut.type)==="separator";){var ut;if(De||(V=z(["arraycolsep"],[]),V.style.width=$(r.fontMetrics().doubleRuleSep),Ne.push(V)),le.separator==="|"||le.separator===":"){var Kt=le.separator==="|"?"solid":"dashed",Rt=z(["vertical-separator"],[],r);Rt.style.height=$(b),Rt.style.borderRightWidth=$(h),Rt.style.borderRightStyle=Kt,Rt.style.margin="0 "+$(-h/2);var Hu=b-te;Hu&&(Rt.style.verticalAlign=$(-Hu)),Ne.push(Rt)}else throw new D("Invalid separator type: "+le.separator);ne++,le=Te[ne],De=!1}if(!(a>=o)){var vn=void 0;if(a>0||t.hskipBeforeAndAfter){var qu,Gu;vn=(qu=(Gu=le)==null?void 0:Gu.pregap)!=null?qu:v,vn!==0&&(V=z(["arraycolsep"],[]),V.style.width=$(vn),Ne.push(V))}var Wu=[];for(n=0;n<i;++n){var ci=l[n],di=ci.cells[a];if(di){var Qp=ci.pos-te;di.depth=ci.depth,di.height=ci.height,Wu.push({type:"elem",elem:di,shift:Qp})}}var Jp=se({positionType:"individualShift",children:Wu}),Zp=z(["col-align-"+(((Q=le)==null?void 0:Q.align)||"c")],[Jp]);if(Ne.push(Zp),a<o-1||t.hskipBeforeAndAfter){var Vu,Xu;vn=(Vu=(Xu=le)==null?void 0:Xu.postgap)!=null?Vu:v,vn!==0&&(V=z(["arraycolsep"],[]),V.style.width=$(vn),Ne.push(V))}}}var mi=z(["mtable"],Ne);if(d.length>0){for(var ef=Yn("hline",r,h),tf=Yn("hdashline",r,h),fo=[{type:"elem",elem:mi,shift:0}];d.length>0;){var Ku=d.pop(),Yu=Ku.pos-te;Ku.isDashed?fo.push({type:"elem",elem:tf,shift:Yu}):fo.push({type:"elem",elem:ef,shift:Yu})}mi=se({positionType:"individualShift",children:fo})}if(Le.length===0)return z(["mord"],[mi],r);var rf=se({positionType:"individualShift",children:Le}),nf=z(["tag"],[rf],r);return fr([mi,nf])},fy={c:"center ",l:"left ",r:"right "},Xt=function(t,r){for(var n=[],a=new B("mtd",[],["mtr-glue"]),i=new B("mtd",[],["mml-eqn-num"]),s=0;s<t.body.length;s++){for(var o=t.body[s],l=[],d=0;d<o.length;d++)l.push(new B("mtd",[ce(o[d],r)]));t.tags&&t.tags[s]&&(l.unshift(a),l.push(a),t.leqno?l.unshift(i):l.push(i)),n.push(new B("mtr",l))}var h=new B("mtable",n),m=t.arraystretch===.5?.1:.16+t.arraystretch-1+(t.addJot?.09:0);h.setAttribute("rowspacing",$(m));var v="",x="";if(t.cols&&t.cols.length>0){var T=t.cols,C="",A=!1,w=0,y=T.length;T[0].type==="separator"&&(v+="top ",w=1),T[T.length-1].type==="separator"&&(v+="bottom ",y-=1);for(var b=w;b<y;b++){var N=T[b];N.type==="align"?(x+=fy[N.align],A&&(C+="none "),A=!0):N.type==="separator"&&A&&(C+=N.separator==="|"?"solid ":"dashed ",A=!1)}h.setAttribute("columnalign",x.trim()),/[sd]/.test(C)&&h.setAttribute("columnlines",C.trim())}if(t.colSeparationType==="align"){for(var M=t.cols||[],I="",_=1;_<M.length;_++)I+=_%2?"0em ":"1em ";h.setAttribute("columnspacing",I.trim())}else t.colSeparationType==="alignat"||t.colSeparationType==="gather"?h.setAttribute("columnspacing","0em"):t.colSeparationType==="small"?h.setAttribute("columnspacing","0.2778em"):t.colSeparationType==="CD"?h.setAttribute("columnspacing","0.5em"):h.setAttribute("columnspacing","1em");var P="",U=t.hLinesBeforeRow;v+=U[0].length>0?"left ":"",v+=U[U.length-1].length>0?"right ":"";for(var O=1;O<U.length-1;O++)P+=U[O].length===0?"none ":U[O][0]?"dashed ":"solid ";return/[sd]/.test(P)&&h.setAttribute("rowlines",P.trim()),v!==""&&(h=new B("menclose",[h]),h.setAttribute("notation",v.trim())),t.arraystretch&&t.arraystretch<1&&(h=new B("mstyle",[h]),h.setAttribute("scriptlevel","1")),h},Op=function(t,r){t.envName.includes("ed")||ho(t);var n=[],a=t.envName.includes("at")?"alignat":"align",i=t.envName==="split",s=Xr(t.parser,{cols:n,addJot:!0,autoTag:i?void 0:Fu(t.envName),emptySingleRow:!0,colSeparationType:a,maxNumCols:i?2:void 0,leqno:t.parser.settings.leqno},"display"),o=0,l=0,d={type:"ordgroup",mode:t.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var h="",m=0;m<r[0].body.length;m++){var v=ee(r[0].body[m],"textord");h+=v.text}o=Number(h),l=o*2}var x=!l;s.body.forEach(function(w){for(var y=1;y<w.length;y+=2){var b=ee(w[y],"styling"),N=ee(b.body[0],"ordgroup");N.body.unshift(d)}if(x)l<w.length&&(l=w.length);else{var M=w.length/2;if(o<M)throw new D("Too many math in a row: "+("expected "+o+", but got "+M),w[0])}});for(var T=0;T<l;++T){var C="r",A=0;T%2===1?C="l":T>0&&x&&(A=1),n[T]={type:"align",align:C,pregap:A,postgap:0}}return s.colSeparationType=x?"align":"alignat",s};Wt({type:"array",names:["array","darray"],props:{numArgs:1},handler(e,t){var r=oo(t[0]),n=r?[t[0]]:ee(t[0],"ordgroup").body,a=n.map(function(s){var o=so(s),l=o.text;if("lcr".includes(l))return{type:"align",align:l};if(l==="|")return{type:"separator",separator:"|"};if(l===":")return{type:"separator",separator:":"};throw new D("Unknown column alignment: "+l,s)}),i={cols:a,hskipBeforeAndAfter:!0,maxNumCols:a.length};return Xr(e.parser,i,Du(e.envName))},htmlBuilder:Vt,mathmlBuilder:Xt});Wt({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(e){var t={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[e.envName.replace("*","")],r="c",n={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(e.envName.charAt(e.envName.length-1)==="*"){var a=e.parser;if(a.consumeSpaces(),a.fetch().text==="["){if(a.consume(),a.consumeSpaces(),r=a.fetch().text,!"lcr".includes(r))throw new D("Expected l or c or r",a.nextToken);a.consume(),a.consumeSpaces(),a.expect("]"),a.consume(),n.cols=[{type:"align",align:r}]}}var i=Xr(e.parser,n,Du(e.envName)),s=Math.max(0,...i.body.map(o=>o.length));return i.cols=new Array(s).fill({type:"align",align:r}),t?{type:"leftright",mode:e.mode,body:[i],left:t[0],right:t[1],rightColor:void 0}:i},htmlBuilder:Vt,mathmlBuilder:Xt});Wt({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(e){var t={arraystretch:.5},r=Xr(e.parser,t,"script");return r.colSeparationType="small",r},htmlBuilder:Vt,mathmlBuilder:Xt});Wt({type:"array",names:["subarray"],props:{numArgs:1},handler(e,t){var r=oo(t[0]),n=r?[t[0]]:ee(t[0],"ordgroup").body,a=n.map(function(o){var l=so(o),d=l.text;if("lc".includes(d))return{type:"align",align:d};throw new D("Unknown column alignment: "+d,o)});if(a.length>1)throw new D("{subarray} can contain only one column");var i={cols:a,hskipBeforeAndAfter:!1,arraystretch:.5},s=Xr(e.parser,i,"script");if(s.body.length>0&&s.body[0].length>1)throw new D("{subarray} can contain only one column");return s},htmlBuilder:Vt,mathmlBuilder:Xt});Wt({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(e){var t={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=Xr(e.parser,t,Du(e.envName));return{type:"leftright",mode:e.mode,body:[r],left:e.envName.includes("r")?".":"\\{",right:e.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:Vt,mathmlBuilder:Xt});Wt({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:Op,htmlBuilder:Vt,mathmlBuilder:Xt});Wt({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(e){py.has(e.envName)&&ho(e);var t={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:Fu(e.envName),emptySingleRow:!0,leqno:e.parser.settings.leqno};return Xr(e.parser,t,"display")},htmlBuilder:Vt,mathmlBuilder:Xt});Wt({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:Op,htmlBuilder:Vt,mathmlBuilder:Xt});Wt({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(e){ho(e);var t={autoTag:Fu(e.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:e.parser.settings.leqno};return Xr(e.parser,t,"display")},htmlBuilder:Vt,mathmlBuilder:Xt});Wt({type:"array",names:["CD"],props:{numArgs:0},handler(e){return ho(e),ry(e.parser)},htmlBuilder:Vt,mathmlBuilder:Xt});f("\\nonumber","\\gdef\\@eqnsw{0}");f("\\notag","\\nonumber");H({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(e,t){throw new D(e.funcName+" valid only within array environment")}});var Wd=_p;H({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(e,t){var{parser:r,funcName:n}=e,a=t[0];if(a.type!=="ordgroup")throw new D("Invalid environment name",a);for(var i="",s=0;s<a.body.length;++s)i+=ee(a.body[s],"textord").text;if(n==="\\begin"){if(!Wd.hasOwnProperty(i))throw new D("No such environment: "+i,a);var o=Wd[i],{args:l,optArgs:d}=r.parseArguments("\\begin{"+i+"}",o),h={mode:r.mode,envName:i,parser:r},m=o.handler(h,l,d);r.expect("\\end",!1);var v=r.nextToken,x=ee(r.parseFunction(),"environment");if(x.name!==i)throw new D("Mismatch: \\begin{"+i+"} matched by \\end{"+x.name+"}",v);return m}return{type:"environment",mode:r.mode,name:i,nameGroup:a}}});var Pp=(e,t)=>{var r=e.font,n=t.withFont(r);return oe(e.body,n)},zp=(e,t)=>{var r=e.font,n=t.withFont(r);return ce(e.body,n)},Vd={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak"};H({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=Ls(t[0]),i=n;return i in Vd&&(i=Vd[i]),{type:"font",mode:r.mode,font:i.slice(1),body:a}},htmlBuilder:Pp,mathmlBuilder:zp});H({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(e,t)=>{var{parser:r}=e,n=t[0];return{type:"mclass",mode:r.mode,mclass:lo(n),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:n}],isCharacterBox:hr(n)}}});H({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{parser:r,funcName:n,breakOnTokenText:a}=e,{mode:i}=r,s=r.parseExpression(!0,a);return{type:"font",mode:i,font:"math"+n.slice(1),body:{type:"ordgroup",mode:r.mode,body:s}}},htmlBuilder:Pp,mathmlBuilder:zp});var gy=(e,t)=>{var r=t.style,n=r.fracNum(),a=r.fracDen(),i;i=t.havingStyle(n);var s=oe(e.numer,i,t);if(e.continued){var o=8.5/t.fontMetrics().ptPerEm,l=3.5/t.fontMetrics().ptPerEm;s.height=s.height<o?o:s.height,s.depth=s.depth<l?l:s.depth}i=t.havingStyle(a);var d=oe(e.denom,i,t),h,m,v;e.hasBarLine?(e.barSize?(m=xe(e.barSize,t),h=Yn("frac-line",t,m)):h=Yn("frac-line",t),m=h.height,v=h.height):(h=null,m=0,v=t.fontMetrics().defaultRuleThickness);var x,T,C;r.size===Z.DISPLAY.size?(x=t.fontMetrics().num1,m>0?T=3*v:T=7*v,C=t.fontMetrics().denom1):(m>0?(x=t.fontMetrics().num2,T=v):(x=t.fontMetrics().num3,T=3*v),C=t.fontMetrics().denom2);var A;if(h){var y=t.fontMetrics().axisHeight;x-s.depth-(y+.5*m)<T&&(x+=T-(x-s.depth-(y+.5*m))),y-.5*m-(d.height-C)<T&&(C+=T-(y-.5*m-(d.height-C)));var b=-(y-.5*m);A=se({positionType:"individualShift",children:[{type:"elem",elem:d,shift:C},{type:"elem",elem:h,shift:b},{type:"elem",elem:s,shift:-x}]})}else{var w=x-s.depth-(d.height-C);w<T&&(x+=.5*(T-w),C+=.5*(T-w)),A=se({positionType:"individualShift",children:[{type:"elem",elem:d,shift:C},{type:"elem",elem:s,shift:-x}]})}i=t.havingStyle(r),A.height*=i.sizeMultiplier/t.sizeMultiplier,A.depth*=i.sizeMultiplier/t.sizeMultiplier;var N;r.size===Z.DISPLAY.size?N=t.fontMetrics().delim1:r.size===Z.SCRIPTSCRIPT.size?N=t.havingStyle(Z.SCRIPT).fontMetrics().delim2:N=t.fontMetrics().delim2;var M,I;return e.leftDelim==null?M=ti(t,["mopen"]):M=S0(e.leftDelim,N,!0,t.havingStyle(r),e.mode,["mopen"]),e.continued?I=z([]):e.rightDelim==null?I=ti(t,["mclose"]):I=S0(e.rightDelim,N,!0,t.havingStyle(r),e.mode,["mclose"]),z(["mord"].concat(i.sizingClasses(t)),[M,z(["mfrac"],[A]),I],t)},vy=(e,t)=>{var r=new B("mfrac",[ce(e.numer,t),ce(e.denom,t)]);if(!e.hasBarLine)r.setAttribute("linethickness","0px");else if(e.barSize){var n=xe(e.barSize,t);r.setAttribute("linethickness",$(n))}if(e.leftDelim!=null||e.rightDelim!=null){var a=[];if(e.leftDelim!=null){var i=new B("mo",[new Ie(e.leftDelim.replace("\\",""))]);i.setAttribute("fence","true"),a.push(i)}if(a.push(r),e.rightDelim!=null){var s=new B("mo",[new Ie(e.rightDelim.replace("\\",""))]);s.setAttribute("fence","true"),a.push(s)}return Lu(a)}return r},Fp=(e,t)=>{if(!t)return e;var r={type:"styling",mode:e.mode,style:t,body:[e]};return r};H({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0],i=t[1],s,o=null,l=null;switch(n){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":s=!0;break;case"\\\\atopfrac":s=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":s=!1,o="(",l=")";break;case"\\\\bracefrac":s=!1,o="\\{",l="\\}";break;case"\\\\brackfrac":s=!1,o="[",l="]";break;default:throw new Error("Unrecognized genfrac command")}var d=n==="\\cfrac",h=null;return d||n.startsWith("\\d")?h="display":n.startsWith("\\t")&&(h="text"),Fp({type:"genfrac",mode:r.mode,numer:a,denom:i,continued:d,hasBarLine:s,leftDelim:o,rightDelim:l,barSize:null},h)},htmlBuilder:gy,mathmlBuilder:vy});H({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(e){var{parser:t,funcName:r,token:n}=e,a;switch(r){case"\\over":a="\\frac";break;case"\\choose":a="\\binom";break;case"\\atop":a="\\\\atopfrac";break;case"\\brace":a="\\\\bracefrac";break;case"\\brack":a="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:t.mode,replaceWith:a,token:n}}});var Xd=["display","text","script","scriptscript"],Kd=function(t){var r=null;return t.length>0&&(r=t,r=r==="."?null:r),r};H({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(e,t){var{parser:r}=e,n=t[4],a=t[5],i=Ls(t[0]),s=i.type==="atom"&&i.family==="open"?Kd(i.text):null,o=Ls(t[1]),l=o.type==="atom"&&o.family==="close"?Kd(o.text):null,d=ee(t[2],"size"),h,m=null;d.isBlank?h=!0:(m=d.value,h=m.number>0);var v=null,x=t[3];if(x.type==="ordgroup"){if(x.body.length>0){var T=ee(x.body[0],"textord");v=Xd[Number(T.text)]}}else x=ee(x,"textord"),v=Xd[Number(x.text)];return Fp({type:"genfrac",mode:r.mode,numer:n,denom:a,continued:!1,hasBarLine:h,barSize:m,leftDelim:s,rightDelim:l},v)}});H({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(e,t){var{parser:r,funcName:n,token:a}=e;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:ee(t[0],"size").value,token:a}}});H({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0],i=ee(t[1],"infix").size;if(!i)throw new Error("\\\\abovefrac expected size, but got "+String(i));var s=t[2],o=i.number>0;return{type:"genfrac",mode:r.mode,numer:a,denom:s,continued:!1,hasBarLine:o,barSize:i,leftDelim:null,rightDelim:null}}});var Dp=(e,t)=>{var r=t.style,n,a;e.type==="supsub"?(n=e.sup?oe(e.sup,t.havingStyle(r.sup()),t):oe(e.sub,t.havingStyle(r.sub()),t),a=ee(e.base,"horizBrace")):a=ee(e,"horizBrace");var i=oe(a.base,t.havingBaseStyle(Z.DISPLAY)),s=io(a,t),o;if(a.isOver?o=se({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"kern",size:.1},{type:"elem",elem:s,wrapperClasses:["svg-align"]}]}):o=se({positionType:"bottom",positionData:i.depth+.1+s.height,children:[{type:"elem",elem:s,wrapperClasses:["svg-align"]},{type:"kern",size:.1},{type:"elem",elem:i}]}),n){var l=z(["minner",a.isOver?"mover":"munder"],[o],t);a.isOver?o=se({positionType:"firstBaseline",children:[{type:"elem",elem:l},{type:"kern",size:.2},{type:"elem",elem:n}]}):o=se({positionType:"bottom",positionData:l.depth+.2+n.height+n.depth,children:[{type:"elem",elem:n},{type:"kern",size:.2},{type:"elem",elem:l}]})}return z(["minner",a.isOver?"mover":"munder"],[o],t)},yy=(e,t)=>{var r=ao(e.label);return new B(e.isOver?"mover":"munder",[ce(e.base,t),r])};H({type:"horizBrace",names:["\\overbrace","\\underbrace","\\overbracket","\\underbracket"],props:{numArgs:1},handler(e,t){var{parser:r,funcName:n}=e;return{type:"horizBrace",mode:r.mode,label:n,isOver:n.includes("\\over"),base:t[0]}},htmlBuilder:Dp,mathmlBuilder:yy});H({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=t[1],a=ee(t[0],"url").url;return r.settings.isTrusted({command:"\\href",url:a})?{type:"href",mode:r.mode,href:a,body:Me(n)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(e,t)=>{var r=Fe(e.body,t,!1);return I3(e.href,[],r,t)},mathmlBuilder:(e,t)=>{var r=qr(e.body,t);return r instanceof B||(r=new B("mrow",[r])),r.setAttribute("href",e.href),r}});H({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=ee(t[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:n}))return r.formatUnsupportedCmd("\\url");for(var a=[],i=0;i<n.length;i++){var s=n[i];s==="~"&&(s="\\textasciitilde"),a.push({type:"textord",mode:"text",text:s})}var o={type:"text",mode:r.mode,font:"\\texttt",body:a};return{type:"href",mode:r.mode,href:n,body:Me(o)}}});H({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(e,t){var{parser:r}=e;return{type:"hbox",mode:r.mode,body:Me(t[0])}},htmlBuilder(e,t){var r=Fe(e.body,t.withFont(""),!1);return fr(r)},mathmlBuilder(e,t){return new B("mrow",xt(e.body,t.withFont("")))}});H({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(e,t)=>{var{parser:r,funcName:n,token:a}=e,i=ee(t[0],"raw").string,s=t[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var o,l={};switch(n){case"\\htmlClass":l.class=i,o={command:"\\htmlClass",class:i};break;case"\\htmlId":l.id=i,o={command:"\\htmlId",id:i};break;case"\\htmlStyle":l.style=i,o={command:"\\htmlStyle",style:i};break;case"\\htmlData":{for(var d=i.split(","),h=0;h<d.length;h++){var m=d[h],v=m.indexOf("=");if(v<0)throw new D("\\htmlData key/value '"+m+"' missing equals sign");var x=m.slice(0,v),T=m.slice(v+1);l["data-"+x.trim()]=T}o={command:"\\htmlData",attributes:l};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(o)?{type:"html",mode:r.mode,attributes:l,body:Me(s)}:r.formatUnsupportedCmd(n)},htmlBuilder:(e,t)=>{var r=Fe(e.body,t,!1),n=["enclosing"];e.attributes.class&&n.push(...e.attributes.class.trim().split(/\s+/));var a=z(n,r,t);for(var i in e.attributes)i!=="class"&&e.attributes.hasOwnProperty(i)&&a.setAttribute(i,e.attributes[i]);return a},mathmlBuilder:(e,t)=>qr(e.body,t)});H({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(e,t)=>{var{parser:r}=e;return{type:"htmlmathml",mode:r.mode,html:Me(t[0]),mathml:Me(t[1])}},htmlBuilder:(e,t)=>{var r=Fe(e.html,t,!1);return fr(r)},mathmlBuilder:(e,t)=>qr(e.mathml,t)});var al=function(t){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))return{number:+t,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);if(!r)throw new D("Invalid size: '"+t+"' in \\includegraphics");var n={number:+(r[1]+r[2]),unit:r[3]};if(!tp(n))throw new D("Invalid unit: '"+n.unit+"' in \\includegraphics.");return n};H({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(e,t,r)=>{var{parser:n}=e,a={number:0,unit:"em"},i={number:.9,unit:"em"},s={number:0,unit:"em"},o="";if(r[0])for(var l=ee(r[0],"raw").string,d=l.split(","),h=0;h<d.length;h++){var m=d[h].split("=");if(m.length===2){var v=m[1].trim();switch(m[0].trim()){case"alt":o=v;break;case"width":a=al(v);break;case"height":i=al(v);break;case"totalheight":s=al(v);break;default:throw new D("Invalid key: '"+m[0]+"' in \\includegraphics.")}}}var x=ee(t[0],"url").url;return o===""&&(o=x,o=o.replace(/^.*[\\/]/,""),o=o.substring(0,o.lastIndexOf("."))),n.settings.isTrusted({command:"\\includegraphics",url:x})?{type:"includegraphics",mode:n.mode,alt:o,width:a,height:i,totalheight:s,src:x}:n.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(e,t)=>{var r=xe(e.height,t),n=0;e.totalheight.number>0&&(n=xe(e.totalheight,t)-r);var a=0;e.width.number>0&&(a=xe(e.width,t));var i={height:$(r+n)};a>0&&(i.width=$(a)),n>0&&(i.verticalAlign=$(-n));var s=new w3(e.src,e.alt,i);return s.height=r,s.depth=n,s},mathmlBuilder:(e,t)=>{var r=new B("mglyph",[]);r.setAttribute("alt",e.alt);var n=xe(e.height,t),a=0;if(e.totalheight.number>0&&(a=xe(e.totalheight,t)-n,r.setAttribute("valign",$(-a))),r.setAttribute("height",$(n+a)),e.width.number>0){var i=xe(e.width,t);r.setAttribute("width",$(i))}return r.setAttribute("src",e.src),r}});H({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(e,t){var{parser:r,funcName:n}=e,a=ee(t[0],"size");if(r.settings.strict){var i=n[1]==="m",s=a.value.unit==="mu";i?(s||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" supports only mu units, "+("not "+a.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" works only in math mode")):s&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:a.value}},htmlBuilder(e,t){return op(e.dimension,t)},mathmlBuilder(e,t){var r=xe(e.dimension,t);return new hp(r)}});H({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0];return{type:"lap",mode:r.mode,alignment:n.slice(5),body:a}},htmlBuilder:(e,t)=>{var r;e.alignment==="clap"?(r=z([],[oe(e.body,t)]),r=z(["inner"],[r],t)):r=z(["inner"],[oe(e.body,t)]);var n=z(["fix"],[]),a=z([e.alignment],[r,n],t),i=z(["strut"]);return i.style.height=$(a.height+a.depth),a.depth&&(i.style.verticalAlign=$(-a.depth)),a.children.unshift(i),a=z(["thinbox"],[a],t),z(["mord","vbox"],[a],t)},mathmlBuilder:(e,t)=>{var r=new B("mpadded",[ce(e.body,t)]);if(e.alignment!=="rlap"){var n=e.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",n+"width")}return r.setAttribute("width","0px"),r}});H({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){var{funcName:r,parser:n}=e,a=n.mode;n.switchMode("math");var i=r==="\\("?"\\)":"$",s=n.parseExpression(!1,i);return n.expect(i),n.switchMode(a),{type:"styling",mode:n.mode,style:"text",resetFont:!0,body:s}}});H({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){throw new D("Mismatched "+e.funcName)}});var Yd=(e,t)=>{switch(t.style.size){case Z.DISPLAY.size:return e.display;case Z.TEXT.size:return e.text;case Z.SCRIPT.size:return e.script;case Z.SCRIPTSCRIPT.size:return e.scriptscript;default:return e.text}};H({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(e,t)=>{var{parser:r}=e;return{type:"mathchoice",mode:r.mode,display:Me(t[0]),text:Me(t[1]),script:Me(t[2]),scriptscript:Me(t[3])}},htmlBuilder:(e,t)=>{var r=Yd(e,t),n=Fe(r,t,!1);return fr(n)},mathmlBuilder:(e,t)=>{var r=Yd(e,t);return qr(r,t)}});var Bp=(e,t,r,n,a,i,s)=>{e=z([],[e]);var o=r&&hr(r),l,d;if(t){var h=oe(t,n.havingStyle(a.sup()),n);d={elem:h,kern:Math.max(n.fontMetrics().bigOpSpacing1,n.fontMetrics().bigOpSpacing3-h.depth)}}if(r){var m=oe(r,n.havingStyle(a.sub()),n);l={elem:m,kern:Math.max(n.fontMetrics().bigOpSpacing2,n.fontMetrics().bigOpSpacing4-m.height)}}var v;if(d&&l){var x=n.fontMetrics().bigOpSpacing5+l.elem.height+l.elem.depth+l.kern+e.depth+s;v=se({positionType:"bottom",positionData:x,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:$(-i)},{type:"kern",size:l.kern},{type:"elem",elem:e},{type:"kern",size:d.kern},{type:"elem",elem:d.elem,marginLeft:$(i)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]})}else if(l){var T=e.height-s;v=se({positionType:"top",positionData:T,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:$(-i)},{type:"kern",size:l.kern},{type:"elem",elem:e}]})}else if(d){var C=e.depth+s;v=se({positionType:"bottom",positionData:C,children:[{type:"elem",elem:e},{type:"kern",size:d.kern},{type:"elem",elem:d.elem,marginLeft:$(i)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]})}else return e;var A=[v];if(l&&i!==0&&!o){var w=z(["mspace"],[],n);w.style.marginRight=$(i),A.unshift(w)}return z(["mop","op-limits"],A,n)},$p=new Set(["\\smallint"]),la=(e,t)=>{var r,n,a=!1,i;e.type==="supsub"?(r=e.sup,n=e.sub,i=ee(e.base,"op"),a=!0):i=ee(e,"op");var s=t.style,o=!1;s.size===Z.DISPLAY.size&&i.symbol&&!$p.has(i.name)&&(o=!0);var l,d;if(i.symbol){var h=o?"Size2-Regular":"Size1-Regular",m="";if((i.name==="\\oiint"||i.name==="\\oiiint")&&(m=i.name.slice(1),i.name=m==="oiint"?"\\iint":"\\iiint"),l=Qe(i.name,h,"math",t,["mop","op-symbol",o?"large-op":"small-op"]),d=l.italic,m.length>0){var v=up(m+"Size"+(o?"2":"1"),t);l=se({positionType:"individualShift",children:[{type:"elem",elem:l,shift:0},{type:"elem",elem:v,shift:o?.08:0}]}),i.name="\\"+m,l.classes.unshift("mop"),l.italic=d}}else if(i.body){var x=Fe(i.body,t,!0);x.length===1&&x[0]instanceof gt?(l=x[0],l.classes[0]="mop"):l=z(["mop"],x,t)}else{for(var T=[],C=1;C<i.name.length;C++)T.push(Iu(i.name[C],i.mode,t));l=z(["mop"],T,t)}var A=0,w=0;if((l instanceof gt||i.name==="\\oiint"||i.name==="\\oiiint")&&!i.suppressBaseShift){var y;A=(l.height-l.depth)/2-t.fontMetrics().axisHeight,w=(y=l.italic)!=null?y:0}return a?Bp(l,r,n,t,s,w,A):(A&&(l.style.position="relative",l.style.top=$(A)),l)},ui=(e,t)=>{var r;if(e.symbol)r=new B("mo",[At(e.name,e.mode)]),$p.has(e.name)&&r.setAttribute("largeop","false");else if(e.body)r=new B("mo",xt(e.body,t));else{r=new B("mi",[new Ie(e.name.slice(1))]);var n=new B("mo",[At("⁡","text")]);e.parentIsSupSub?r=new B("mrow",[r,n]):r=mp([r,n])}return r},wy={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};H({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=n;return a.length===1&&(a=wy[a]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:a}},htmlBuilder:la,mathmlBuilder:ui});H({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var{parser:r}=e,n=t[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Me(n)}},htmlBuilder:la,mathmlBuilder:ui});var xy={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};H({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(e){var{parser:t,funcName:r}=e;return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:la,mathmlBuilder:ui});H({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(e){var{parser:t,funcName:r}=e;return{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:la,mathmlBuilder:ui});H({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(e){var{parser:t,funcName:r}=e,n=r;return n.length===1&&(n=xy[n]),{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:n}},htmlBuilder:la,mathmlBuilder:ui});var jp=(e,t)=>{var r,n,a=!1,i;e.type==="supsub"?(r=e.sup,n=e.sub,i=ee(e.base,"operatorname"),a=!0):i=ee(e,"operatorname");var s;if(i.body.length>0){for(var o=i.body.map(m=>{var v="text"in m?m.text:void 0;return typeof v=="string"?{type:"textord",mode:m.mode,text:v}:m}),l=Fe(o,t.withFont("mathrm"),!0),d=0;d<l.length;d++){var h=l[d];h instanceof gt&&(h.text=h.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}s=z(["mop"],l,t)}else s=z(["mop"],[],t);return a?Bp(s,r,n,t,t.style,0,0):s},by=(e,t)=>{for(var r=xt(e.body,t.withFont("mathrm")),n=!0,a=0;a<r.length;a++){var i=r[a];if(!(i instanceof hp))if(i instanceof B)switch(i.type){case"mi":case"mn":case"mspace":case"mtext":break;case"mo":{var s=i.children[0];i.children.length===1&&s instanceof Ie?s.text=s.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):n=!1;break}default:n=!1}else n=!1}if(n){var o=r.map(h=>h.toText()).join("");r=[new Ie(o)]}var l=new B("mi",r);l.setAttribute("mathvariant","normal");var d=new B("mo",[At("⁡","text")]);return e.parentIsSupSub?new B("mrow",[l,d]):mp([l,d])};H({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0];return{type:"operatorname",mode:r.mode,body:Me(a),alwaysHandleSupSub:n==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:jp,mathmlBuilder:by});f("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");gn({type:"ordgroup",htmlBuilder(e,t){return e.semisimple?fr(Fe(e.body,t,!1)):z(["mord"],Fe(e.body,t,!0),t)},mathmlBuilder(e,t){return qr(e.body,t,!0)}});H({type:"overline",names:["\\overline"],props:{numArgs:1},handler(e,t){var{parser:r}=e,n=t[0];return{type:"overline",mode:r.mode,body:n}},htmlBuilder(e,t){var r=oe(e.body,t.havingCrampedStyle()),n=Yn("overline-line",t),a=t.fontMetrics().defaultRuleThickness,i=se({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*a},{type:"elem",elem:n},{type:"kern",size:a}]});return z(["mord","overline"],[i],t)},mathmlBuilder(e,t){var r=new B("mo",[new Ie("‾")]);r.setAttribute("stretchy","true");var n=new B("mover",[ce(e.body,t),r]);return n.setAttribute("accent","true"),n}});H({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=t[0];return{type:"phantom",mode:r.mode,body:Me(n)}},htmlBuilder:(e,t)=>{var r=Fe(e.body,t.withPhantom(),!1);return fr(r)},mathmlBuilder:(e,t)=>{var r=xt(e.body,t);return new B("mphantom",r)}});f("\\hphantom","\\smash{\\phantom{#1}}");H({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=t[0];return{type:"vphantom",mode:r.mode,body:n}},htmlBuilder:(e,t)=>{var r=z(["inner"],[oe(e.body,t.withPhantom())]),n=z(["fix"],[]);return z(["mord","rlap"],[r,n],t)},mathmlBuilder:(e,t)=>{var r=xt(Me(e.body),t),n=new B("mphantom",r),a=new B("mpadded",[n]);return a.setAttribute("width","0px"),a}});H({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(e,t){var{parser:r}=e,n=ee(t[0],"size").value,a=t[1];return{type:"raisebox",mode:r.mode,dy:n,body:a}},htmlBuilder(e,t){var r=oe(e.body,t),n=xe(e.dy,t);return se({positionType:"shift",positionData:-n,children:[{type:"elem",elem:r}]})},mathmlBuilder(e,t){var r=new B("mpadded",[ce(e.body,t)]),n=e.dy.number+e.dy.unit;return r.setAttribute("voffset",n),r}});H({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(e){var{parser:t}=e;return{type:"internal",mode:t.mode}}});H({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(e,t,r){var{parser:n}=e,a=r[0],i=ee(t[0],"size"),s=ee(t[1],"size");return{type:"rule",mode:n.mode,shift:a&&ee(a,"size").value,width:i.value,height:s.value}},htmlBuilder(e,t){var r=z(["mord","rule"],[],t),n=xe(e.width,t),a=xe(e.height,t),i=e.shift?xe(e.shift,t):0;return r.style.borderRightWidth=$(n),r.style.borderTopWidth=$(a),r.style.bottom=$(i),r.width=n,r.height=a+i,r.depth=-i,r.maxFontSize=a*1.125*t.sizeMultiplier,r},mathmlBuilder(e,t){var r=xe(e.width,t),n=xe(e.height,t),a=e.shift?xe(e.shift,t):0,i=t.color&&t.getColor()||"black",s=new B("mspace");s.setAttribute("mathbackground",i),s.setAttribute("width",$(r)),s.setAttribute("height",$(n));var o=new B("mpadded",[s]);return a>=0?o.setAttribute("height",$(a)):(o.setAttribute("height",$(a)),o.setAttribute("depth",$(-a))),o.setAttribute("voffset",$(a)),o}});function Up(e,t,r){for(var n=Fe(e,t,!1),a=t.sizeMultiplier/r.sizeMultiplier,i=0;i<n.length;i++){var s=n[i].classes.indexOf("sizing");s<0?Array.prototype.push.apply(n[i].classes,t.sizingClasses(r)):n[i].classes[s+1]==="reset-size"+t.size&&(n[i].classes[s+1]="reset-size"+r.size),n[i].height*=a,n[i].depth*=a}return fr(n)}var Qd=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],Sy=(e,t)=>{var r=t.havingSize(e.size);return Up(e.body,r,t)};H({type:"sizing",names:Qd,props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{breakOnTokenText:r,funcName:n,parser:a}=e,i=a.parseExpression(!1,r);return{type:"sizing",mode:a.mode,size:Qd.indexOf(n)+1,body:i}},htmlBuilder:Sy,mathmlBuilder:(e,t)=>{var r=t.havingSize(e.size),n=xt(e.body,r),a=new B("mstyle",n);return a.setAttribute("mathsize",$(r.sizeMultiplier)),a}});H({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(e,t,r)=>{var{parser:n}=e,a=!1,i=!1,s=r[0]&&ee(r[0],"ordgroup");if(s)for(var o,l=0;l<s.body.length;++l){var d=s.body[l];if(o=so(d).text,o==="t")a=!0;else if(o==="b")i=!0;else{a=!1,i=!1;break}}else a=!0,i=!0;var h=t[0];return{type:"smash",mode:n.mode,body:h,smashHeight:a,smashDepth:i}},htmlBuilder:(e,t)=>{var r=z([],[oe(e.body,t)]);if(!e.smashHeight&&!e.smashDepth)return r;if(e.smashHeight&&(r.height=0),e.smashDepth&&(r.depth=0),e.smashHeight&&e.smashDepth)return z(["mord","smash"],[r],t);if(r.children)for(var n=0;n<r.children.length;n++)e.smashHeight&&(r.children[n].height=0),e.smashDepth&&(r.children[n].depth=0);var a=se({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return z(["mord"],[a],t)},mathmlBuilder:(e,t)=>{var r=new B("mpadded",[ce(e.body,t)]);return e.smashHeight&&r.setAttribute("height","0px"),e.smashDepth&&r.setAttribute("depth","0px"),r}});H({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(e,t,r){var{parser:n}=e,a=r[0],i=t[0];return{type:"sqrt",mode:n.mode,body:i,index:a}},htmlBuilder(e,t){var r=oe(e.body,t.havingCrampedStyle());r.height===0&&(r.height=t.fontMetrics().xHeight),r=Qn(r,t);var n=t.fontMetrics(),a=n.defaultRuleThickness,i=a;t.style.id<Z.TEXT.id&&(i=t.fontMetrics().xHeight);var s=a+i/4,o=r.height+r.depth+s+a,{span:l,ruleWidth:d,advanceWidth:h}=ly(o,t),m=l.height-d;m>r.height+r.depth+s&&(s=(s+m-r.height-r.depth)/2);var v=l.height-r.height-s-d;r.style.paddingLeft=$(h);var x=se({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+v)},{type:"elem",elem:l},{type:"kern",size:d}]});if(e.index){var T=t.havingStyle(Z.SCRIPTSCRIPT),C=oe(e.index,T,t),A=.6*(x.height-x.depth),w=se({positionType:"shift",positionData:-A,children:[{type:"elem",elem:C}]}),y=z(["root"],[w]);return z(["mord","sqrt"],[y,x],t)}else return z(["mord","sqrt"],[x],t)},mathmlBuilder(e,t){var{body:r,index:n}=e;return n?new B("mroot",[ce(r,t),ce(n,t)]):new B("msqrt",[ce(r,t)])}});var k0={display:Z.DISPLAY,text:Z.TEXT,script:Z.SCRIPT,scriptscript:Z.SCRIPTSCRIPT};function ky(e){return e in k0}H({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e,t){var{breakOnTokenText:r,funcName:n,parser:a}=e,i=a.parseExpression(!0,r),s=n.slice(1,n.length-5);if(!ky(s))throw new Error("Unknown style: "+s);return{type:"styling",mode:a.mode,style:s,body:i}},htmlBuilder(e,t){var r=k0[e.style],n=t.havingStyle(r);return e.resetFont&&(n=n.withFont("")),Up(e.body,n,t)},mathmlBuilder(e,t){var r=k0[e.style],n=t.havingStyle(r);e.resetFont&&(n=n.withFont(""));var a=xt(e.body,n),i=new B("mstyle",a),s={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},o=s[e.style];return i.setAttribute("scriptlevel",o[0]),i.setAttribute("displaystyle",o[1]),i}});var Ty=function(t,r){var n=t.base;if(n)if(n.type==="op"){var a=n.limits&&(r.style.size===Z.DISPLAY.size||n.alwaysHandleSupSub);return a?la:null}else if(n.type==="operatorname"){var i=n.alwaysHandleSupSub&&(r.style.size===Z.DISPLAY.size||n.limits);return i?jp:null}else{if(n.type==="accent")return hr(n.base)?Pu:null;if(n.type==="horizBrace"){var s=!t.sub;return s===n.isOver?Dp:null}else return null}else return null};gn({type:"supsub",htmlBuilder(e,t){var r=Ty(e,t);if(r)return r(e,t);var{base:n,sup:a,sub:i}=e,s=oe(n,t),o,l,d=t.fontMetrics(),h=0,m=0,v=n&&hr(n);if(a){var x=t.havingStyle(t.style.sup());o=oe(a,x,t),v||(h=s.height-x.fontMetrics().supDrop*x.sizeMultiplier/t.sizeMultiplier)}if(i){var T=t.havingStyle(t.style.sub());l=oe(i,T,t),v||(m=s.depth+T.fontMetrics().subDrop*T.sizeMultiplier/t.sizeMultiplier)}var C;t.style===Z.DISPLAY?C=d.sup1:t.style.cramped?C=d.sup3:C=d.sup2;var A=t.sizeMultiplier,w=$(.5/d.ptPerEm/A),y=null;if(l){var b=e.base&&e.base.type==="op"&&e.base.name&&(e.base.name==="\\oiint"||e.base.name==="\\oiiint");if(s instanceof gt||b){var N;y=$(-((N=s.italic)!=null?N:0))}}var M;if(o&&l){h=Math.max(h,C,o.depth+.25*d.xHeight),m=Math.max(m,d.sub2);var I=d.defaultRuleThickness,_=4*I;if(h-o.depth-(l.height-m)<_){m=_-(h-o.depth)+l.height;var P=.8*d.xHeight-(h-o.depth);P>0&&(h+=P,m-=P)}var U=[{type:"elem",elem:l,shift:m,marginRight:w,marginLeft:y},{type:"elem",elem:o,shift:-h,marginRight:w}];M=se({positionType:"individualShift",children:U})}else if(l){m=Math.max(m,d.sub1,l.height-.8*d.xHeight);var O=[{type:"elem",elem:l,marginLeft:y,marginRight:w}];M=se({positionType:"shift",positionData:m,children:O})}else if(o)h=Math.max(h,C,o.depth+.25*d.xHeight),M=se({positionType:"shift",positionData:-h,children:[{type:"elem",elem:o,marginRight:w}]});else throw new Error("supsub must have either sup or sub.");var re=y0(s,"right")||"mord";return z([re],[s,z(["msupsub"],[M])],t)},mathmlBuilder(e,t){var r=!1,n,a;e.base&&e.base.type==="horizBrace"&&(a=!!e.sup,a===e.base.isOver&&(r=!0,n=e.base.isOver)),e.base&&(e.base.type==="op"||e.base.type==="operatorname")&&(e.base.parentIsSupSub=!0);var i=[ce(e.base,t)];e.sub&&i.push(ce(e.sub,t)),e.sup&&i.push(ce(e.sup,t));var s;if(r)s=n?"mover":"munder";else if(e.sub)if(e.sup){var d=e.base;d&&d.type==="op"&&d.limits&&t.style===Z.DISPLAY||d&&d.type==="operatorname"&&d.alwaysHandleSupSub&&(t.style===Z.DISPLAY||d.limits)?s="munderover":s="msubsup"}else{var l=e.base;l&&l.type==="op"&&l.limits&&(t.style===Z.DISPLAY||l.alwaysHandleSupSub)||l&&l.type==="operatorname"&&l.alwaysHandleSupSub&&(l.limits||t.style===Z.DISPLAY)?s="munder":s="msub"}else{var o=e.base;o&&o.type==="op"&&o.limits&&(t.style===Z.DISPLAY||o.alwaysHandleSupSub)||o&&o.type==="operatorname"&&o.alwaysHandleSupSub&&(o.limits||t.style===Z.DISPLAY)?s="mover":s="msup"}return new B(s,i)}});gn({type:"atom",htmlBuilder(e,t){return Iu(e.text,e.mode,t,["m"+e.family])},mathmlBuilder(e,t){var r=new B("mo",[At(e.text,e.mode)]);if(e.family==="bin"){var n=Ou(e,t);n==="bold-italic"&&r.setAttribute("mathvariant",n)}else e.family==="punct"?r.setAttribute("separator","true"):(e.family==="open"||e.family==="close")&&r.setAttribute("stretchy","false");return r}});var Hp={mi:"italic",mn:"normal",mtext:"normal"};gn({type:"mathord",htmlBuilder(e,t){return no(e,t,"mathord")},mathmlBuilder(e,t){var r=new B("mi",[At(e.text,e.mode,t)]),n=Ou(e,t)||"italic";return n!==Hp[r.type]&&r.setAttribute("mathvariant",n),r}});gn({type:"textord",htmlBuilder(e,t){return no(e,t,"textord")},mathmlBuilder(e,t){var r=At(e.text,e.mode,t),n=Ou(e,t)||"normal",a;return e.mode==="text"?a=new B("mtext",[r]):/[0-9]/.test(e.text)?a=new B("mn",[r]):e.text==="\\prime"?a=new B("mo",[r]):a=new B("mi",[r]),n!==Hp[a.type]&&a.setAttribute("mathvariant",n),a}});var il={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},sl={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};gn({type:"spacing",htmlBuilder(e,t){if(sl.hasOwnProperty(e.text)){var r=sl[e.text].className||"";if(e.mode==="text"){var n=no(e,t,"textord");return n.classes.push(r),n}else return z(["mspace",r],[Iu(e.text,e.mode,t)],t)}else{if(il.hasOwnProperty(e.text))return z(["mspace",il[e.text]],[],t);throw new D('Unknown type of space "'+e.text+'"')}},mathmlBuilder(e,t){var r;if(sl.hasOwnProperty(e.text))r=new B("mtext",[new Ie(" ")]);else{if(il.hasOwnProperty(e.text))return new B("mspace");throw new D('Unknown type of space "'+e.text+'"')}return r}});var Jd=()=>{var e=new B("mtd",[]);return e.setAttribute("width","50%"),e};gn({type:"tag",mathmlBuilder(e,t){var r=new B("mtable",[new B("mtr",[Jd(),new B("mtd",[qr(e.body,t)]),Jd(),new B("mtd",[qr(e.tag,t)])])]);return r.setAttribute("width","100%"),r}});var Zd={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},em={"\\textbf":"textbf","\\textmd":"textmd"},Cy={"\\textit":"textit","\\textup":"textup"},tm=(e,t)=>{var r=e.font;if(r){if(Zd[r])return t.withTextFontFamily(Zd[r]);if(em[r])return t.withTextFontWeight(em[r]);if(r==="\\emph")return t.fontShape==="textit"?t.withTextFontShape("textup"):t.withTextFontShape("textit")}else return t;return t.withTextFontShape(Cy[r])};H({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(e,t){var{parser:r,funcName:n}=e,a=t[0];return{type:"text",mode:r.mode,body:Me(a),font:n}},htmlBuilder(e,t){var r=tm(e,t),n=Fe(e.body,r,!0);return z(["mord","text"],n,r)},mathmlBuilder(e,t){var r=tm(e,t);return qr(e.body,r)}});H({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:r}=e;return{type:"underline",mode:r.mode,body:t[0]}},htmlBuilder(e,t){var r=oe(e.body,t),n=Yn("underline-line",t),a=t.fontMetrics().defaultRuleThickness,i=se({positionType:"top",positionData:r.height,children:[{type:"kern",size:a},{type:"elem",elem:n},{type:"kern",size:3*a},{type:"elem",elem:r}]});return z(["mord","underline"],[i],t)},mathmlBuilder(e,t){var r=new B("mo",[new Ie("‾")]);r.setAttribute("stretchy","true");var n=new B("munder",[ce(e.body,t),r]);return n.setAttribute("accentunder","true"),n}});H({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(e,t){var{parser:r}=e;return{type:"vcenter",mode:r.mode,body:t[0]}},htmlBuilder(e,t){var r=oe(e.body,t),n=t.fontMetrics().axisHeight,a=.5*(r.height-n-(r.depth+n));return se({positionType:"shift",positionData:a,children:[{type:"elem",elem:r}]})},mathmlBuilder(e,t){var r=new B("mpadded",[ce(e.body,t)],["vcenter"]);return new B("mrow",[r])}});H({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(e,t,r){throw new D("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(e,t){for(var r=rm(e),n=[],a=t.havingStyle(t.style.text()),i=0;i<r.length;i++){var s=r[i];s==="~"&&(s="\\textasciitilde"),n.push(Qe(s,"Typewriter-Regular",e.mode,a,["mord","texttt"]))}return z(["mord","text"].concat(a.sizingClasses(t)),sp(n),a)},mathmlBuilder(e,t){var r=new Ie(rm(e)),n=new B("mtext",[r]);return n.setAttribute("mathvariant","monospace"),n}});var rm=e=>e.body.replace(/ /g,e.star?"␣":" "),Nr=cp,qp=`[ \r
	]`,Ey="\\\\[a-zA-Z@]+",Ny="\\\\[^\uD800-\uDFFF]",Ay="("+Ey+")"+qp+"*",Ry=`\\\\(
|[ \r	]+
?)[ \r	]*`,T0="[̀-ͯ]",My=new RegExp(T0+"+$"),Iy="("+qp+"+)|"+(Ry+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(T0+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(T0+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+Ay)+("|"+Ny+")");class nm{constructor(t,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=t,this.settings=r,this.tokenRegex=new RegExp(Iy,"g"),this.catcodes={"%":14,"~":13}}setCatcode(t,r){this.catcodes[t]=r}lex(){var t=this.input,r=this.tokenRegex.lastIndex;if(r===t.length)return new pt("EOF",new nt(this,r,r));var n=this.tokenRegex.exec(t);if(n===null||n.index!==r)throw new D("Unexpected character: '"+t[r]+"'",new pt(t[r],new nt(this,r,r+1)));var a=n[6]||n[3]||(n[2]?"\\ ":" ");if(this.catcodes[a]===14){var i=t.indexOf(`
`,this.tokenRegex.lastIndex);return i===-1?(this.tokenRegex.lastIndex=t.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=i+1,this.lex()}return new pt(a,new nt(this,r,this.tokenRegex.lastIndex))}}class _y{constructor(t,r){t===void 0&&(t={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=t,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new D("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var t=this.undefStack.pop();for(var r in t)t.hasOwnProperty(r)&&(t[r]==null?delete this.current[r]:this.current[r]=t[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(t){return this.current.hasOwnProperty(t)||this.builtins.hasOwnProperty(t)}get(t){return this.current.hasOwnProperty(t)?this.current[t]:this.builtins[t]}set(t,r,n){if(n===void 0&&(n=!1),n){for(var a=0;a<this.undefStack.length;a++)delete this.undefStack[a][t];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][t]=r)}else{var i=this.undefStack[this.undefStack.length-1];i&&!i.hasOwnProperty(t)&&(i[t]=this.current[t])}r==null?delete this.current[t]:this.current[t]=r}}var Ly=Lp;f("\\noexpand",function(e){var t=e.popToken();return e.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}});f("\\expandafter",function(e){var t=e.popToken();return e.expandOnce(!0),{tokens:[t],numArgs:0}});f("\\@firstoftwo",function(e){var t=e.consumeArgs(2);return{tokens:t[0],numArgs:0}});f("\\@secondoftwo",function(e){var t=e.consumeArgs(2);return{tokens:t[1],numArgs:0}});f("\\@ifnextchar",function(e){var t=e.consumeArgs(3);e.consumeSpaces();var r=e.future();return t[0].length===1&&t[0][0].text===r.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}});f("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");f("\\TextOrMath",function(e){var t=e.consumeArgs(2);return e.mode==="text"?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var am={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};f("\\char",function(e){var t=e.popToken(),r,n=0;if(t.text==="'")r=8,t=e.popToken();else if(t.text==='"')r=16,t=e.popToken();else if(t.text==="`")if(t=e.popToken(),t.text[0]==="\\")n=t.text.charCodeAt(1);else{if(t.text==="EOF")throw new D("\\char` missing argument");n=t.text.charCodeAt(0)}else r=10;if(r){if(n=am[t.text],n==null||n>=r)throw new D("Invalid base-"+r+" digit "+t.text);for(var a;(a=am[e.future().text])!=null&&a<r;)n*=r,n+=a,e.popToken()}return"\\@char{"+n+"}"});var Bu=(e,t,r,n)=>{var a=e.consumeArg().tokens;if(a.length!==1)throw new D("\\newcommand's first argument must be a macro name");var i=a[0].text,s=e.isDefined(i);if(s&&!t)throw new D("\\newcommand{"+i+"} attempting to redefine "+(i+"; use \\renewcommand"));if(!s&&!r)throw new D("\\renewcommand{"+i+"} when command "+i+" does not yet exist; use \\newcommand");var o=0;if(a=e.consumeArg().tokens,a.length===1&&a[0].text==="["){for(var l="",d=e.expandNextToken();d.text!=="]"&&d.text!=="EOF";)l+=d.text,d=e.expandNextToken();if(!l.match(/^\s*[0-9]+\s*$/))throw new D("Invalid number of arguments: "+l);o=parseInt(l),a=e.consumeArg().tokens}return s&&n||e.macros.set(i,{tokens:a,numArgs:o}),""};f("\\newcommand",e=>Bu(e,!1,!0,!1));f("\\renewcommand",e=>Bu(e,!0,!1,!1));f("\\providecommand",e=>Bu(e,!0,!0,!0));f("\\message",e=>{var t=e.consumeArgs(1)[0];return console.log(t.reverse().map(r=>r.text).join("")),""});f("\\errmessage",e=>{var t=e.consumeArgs(1)[0];return console.error(t.reverse().map(r=>r.text).join("")),""});f("\\show",e=>{var t=e.popToken(),r=t.text;return console.log(t,e.macros.get(r),Nr[r],fe.math[r],fe.text[r]),""});f("\\bgroup","{");f("\\egroup","}");f("~","\\nobreakspace");f("\\lq","`");f("\\rq","'");f("\\aa","\\r a");f("\\AA","\\r A");f("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");f("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");f("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");f("ℬ","\\mathscr{B}");f("ℰ","\\mathscr{E}");f("ℱ","\\mathscr{F}");f("ℋ","\\mathscr{H}");f("ℐ","\\mathscr{I}");f("ℒ","\\mathscr{L}");f("ℳ","\\mathscr{M}");f("ℛ","\\mathscr{R}");f("ℭ","\\mathfrak{C}");f("ℌ","\\mathfrak{H}");f("ℨ","\\mathfrak{Z}");f("\\Bbbk","\\Bbb{k}");f("\\llap","\\mathllap{\\textrm{#1}}");f("\\rlap","\\mathrlap{\\textrm{#1}}");f("\\clap","\\mathclap{\\textrm{#1}}");f("\\mathstrut","\\vphantom{(}");f("\\underbar","\\underline{\\text{#1}}");f("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');f("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");f("\\ne","\\neq");f("≠","\\neq");f("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");f("∉","\\notin");f("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");f("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");f("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");f("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");f("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");f("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");f("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");f("⟂","\\perp");f("‼","\\mathclose{!\\mkern-0.8mu!}");f("∌","\\notni");f("⌜","\\ulcorner");f("⌝","\\urcorner");f("⌞","\\llcorner");f("⌟","\\lrcorner");f("©","\\copyright");f("®","\\textregistered");f("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');f("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');f("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');f("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');f("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");f("⋮","\\vdots");f("\\varGamma","\\mathit{\\Gamma}");f("\\varDelta","\\mathit{\\Delta}");f("\\varTheta","\\mathit{\\Theta}");f("\\varLambda","\\mathit{\\Lambda}");f("\\varXi","\\mathit{\\Xi}");f("\\varPi","\\mathit{\\Pi}");f("\\varSigma","\\mathit{\\Sigma}");f("\\varUpsilon","\\mathit{\\Upsilon}");f("\\varPhi","\\mathit{\\Phi}");f("\\varPsi","\\mathit{\\Psi}");f("\\varOmega","\\mathit{\\Omega}");f("\\substack","\\begin{subarray}{c}#1\\end{subarray}");f("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");f("\\boxed","\\fbox{$\\displaystyle{#1}$}");f("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");f("\\implies","\\DOTSB\\;\\Longrightarrow\\;");f("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");f("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");f("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var im={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},Oy=new Set(["bin","rel"]);f("\\dots",function(e){var t="\\dotso",r=e.expandAfterFuture().text;return r in im?t=im[r]:(r.slice(0,4)==="\\not"||r in fe.math&&Oy.has(fe.math[r].group))&&(t="\\dotsb"),t});var $u={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};f("\\dotso",function(e){var t=e.future().text;return t in $u?"\\ldots\\,":"\\ldots"});f("\\dotsc",function(e){var t=e.future().text;return t in $u&&t!==","?"\\ldots\\,":"\\ldots"});f("\\cdots",function(e){var t=e.future().text;return t in $u?"\\@cdots\\,":"\\@cdots"});f("\\dotsb","\\cdots");f("\\dotsm","\\cdots");f("\\dotsi","\\!\\cdots");f("\\dotsx","\\ldots\\,");f("\\DOTSI","\\relax");f("\\DOTSB","\\relax");f("\\DOTSX","\\relax");f("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");f("\\,","\\tmspace+{3mu}{.1667em}");f("\\thinspace","\\,");f("\\>","\\mskip{4mu}");f("\\:","\\tmspace+{4mu}{.2222em}");f("\\medspace","\\:");f("\\;","\\tmspace+{5mu}{.2777em}");f("\\thickspace","\\;");f("\\!","\\tmspace-{3mu}{.1667em}");f("\\negthinspace","\\!");f("\\negmedspace","\\tmspace-{4mu}{.2222em}");f("\\negthickspace","\\tmspace-{5mu}{.277em}");f("\\enspace","\\kern.5em ");f("\\enskip","\\hskip.5em\\relax");f("\\quad","\\hskip1em\\relax");f("\\qquad","\\hskip2em\\relax");f("\\tag","\\@ifstar\\tag@literal\\tag@paren");f("\\tag@paren","\\tag@literal{({#1})}");f("\\tag@literal",e=>{if(e.macros.get("\\df@tag"))throw new D("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});f("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");f("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");f("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");f("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");f("\\newline","\\\\\\relax");f("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Gp=$(Ut["Main-Regular"][84][1]-.7*Ut["Main-Regular"][65][1]);f("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Gp+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");f("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Gp+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");f("\\hspace","\\@ifstar\\@hspacer\\@hspace");f("\\@hspace","\\hskip #1\\relax");f("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");f("\\ordinarycolon",":");f("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");f("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');f("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');f("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');f("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');f("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');f("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');f("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');f("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');f("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');f("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');f("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');f("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');f("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');f("∷","\\dblcolon");f("∹","\\eqcolon");f("≔","\\coloneqq");f("≕","\\eqqcolon");f("⩴","\\Coloneqq");f("\\ratio","\\vcentcolon");f("\\coloncolon","\\dblcolon");f("\\colonequals","\\coloneqq");f("\\coloncolonequals","\\Coloneqq");f("\\equalscolon","\\eqqcolon");f("\\equalscoloncolon","\\Eqqcolon");f("\\colonminus","\\coloneq");f("\\coloncolonminus","\\Coloneq");f("\\minuscolon","\\eqcolon");f("\\minuscoloncolon","\\Eqcolon");f("\\coloncolonapprox","\\Colonapprox");f("\\coloncolonsim","\\Colonsim");f("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");f("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");f("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");f("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");f("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");f("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");f("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");f("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");f("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");f("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");f("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");f("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");f("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");f("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");f("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");f("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");f("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");f("\\nleqq","\\html@mathml{\\@nleqq}{≰}");f("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");f("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");f("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");f("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");f("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");f("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");f("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");f("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");f("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");f("\\imath","\\html@mathml{\\@imath}{ı}");f("\\jmath","\\html@mathml{\\@jmath}{ȷ}");f("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");f("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");f("⟦","\\llbracket");f("⟧","\\rrbracket");f("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");f("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");f("⦃","\\lBrace");f("⦄","\\rBrace");f("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");f("⦵","\\minuso");f("\\darr","\\downarrow");f("\\dArr","\\Downarrow");f("\\Darr","\\Downarrow");f("\\lang","\\langle");f("\\rang","\\rangle");f("\\uarr","\\uparrow");f("\\uArr","\\Uparrow");f("\\Uarr","\\Uparrow");f("\\N","\\mathbb{N}");f("\\R","\\mathbb{R}");f("\\Z","\\mathbb{Z}");f("\\alef","\\aleph");f("\\alefsym","\\aleph");f("\\Alpha","\\mathrm{A}");f("\\Beta","\\mathrm{B}");f("\\bull","\\bullet");f("\\Chi","\\mathrm{X}");f("\\clubs","\\clubsuit");f("\\cnums","\\mathbb{C}");f("\\Complex","\\mathbb{C}");f("\\Dagger","\\ddagger");f("\\diamonds","\\diamondsuit");f("\\empty","\\emptyset");f("\\Epsilon","\\mathrm{E}");f("\\Eta","\\mathrm{H}");f("\\exist","\\exists");f("\\harr","\\leftrightarrow");f("\\hArr","\\Leftrightarrow");f("\\Harr","\\Leftrightarrow");f("\\hearts","\\heartsuit");f("\\image","\\Im");f("\\infin","\\infty");f("\\Iota","\\mathrm{I}");f("\\isin","\\in");f("\\Kappa","\\mathrm{K}");f("\\larr","\\leftarrow");f("\\lArr","\\Leftarrow");f("\\Larr","\\Leftarrow");f("\\lrarr","\\leftrightarrow");f("\\lrArr","\\Leftrightarrow");f("\\Lrarr","\\Leftrightarrow");f("\\Mu","\\mathrm{M}");f("\\natnums","\\mathbb{N}");f("\\Nu","\\mathrm{N}");f("\\Omicron","\\mathrm{O}");f("\\plusmn","\\pm");f("\\rarr","\\rightarrow");f("\\rArr","\\Rightarrow");f("\\Rarr","\\Rightarrow");f("\\real","\\Re");f("\\reals","\\mathbb{R}");f("\\Reals","\\mathbb{R}");f("\\Rho","\\mathrm{P}");f("\\sdot","\\cdot");f("\\sect","\\S");f("\\spades","\\spadesuit");f("\\sub","\\subset");f("\\sube","\\subseteq");f("\\supe","\\supseteq");f("\\Tau","\\mathrm{T}");f("\\thetasym","\\vartheta");f("\\weierp","\\wp");f("\\Zeta","\\mathrm{Z}");f("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");f("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");f("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");f("\\bra","\\mathinner{\\langle{#1}|}");f("\\ket","\\mathinner{|{#1}\\rangle}");f("\\braket","\\mathinner{\\langle{#1}\\rangle}");f("\\Bra","\\left\\langle#1\\right|");f("\\Ket","\\left|#1\\right\\rangle");var Wp=e=>t=>{var r=t.consumeArg().tokens,n=t.consumeArg().tokens,a=t.consumeArg().tokens,i=t.consumeArg().tokens,s=t.macros.get("|"),o=t.macros.get("\\|");t.macros.beginGroup();var l=m=>v=>{e&&(v.macros.set("|",s),a.length&&v.macros.set("\\|",o));var x=m;if(!m&&a.length){var T=v.future();T.text==="|"&&(v.popToken(),x=!0)}return{tokens:x?a:n,numArgs:0}};t.macros.set("|",l(!1)),a.length&&t.macros.set("\\|",l(!0));var d=t.consumeArg().tokens,h=t.expandTokens([...i,...d,...r]);return t.macros.endGroup(),{tokens:h.reverse(),numArgs:0}};f("\\bra@ket",Wp(!1));f("\\bra@set",Wp(!0));f("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");f("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");f("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");f("\\angln","{\\angl n}");f("\\blue","\\textcolor{##6495ed}{#1}");f("\\orange","\\textcolor{##ffa500}{#1}");f("\\pink","\\textcolor{##ff00af}{#1}");f("\\red","\\textcolor{##df0030}{#1}");f("\\green","\\textcolor{##28ae7b}{#1}");f("\\gray","\\textcolor{gray}{#1}");f("\\purple","\\textcolor{##9d38bd}{#1}");f("\\blueA","\\textcolor{##ccfaff}{#1}");f("\\blueB","\\textcolor{##80f6ff}{#1}");f("\\blueC","\\textcolor{##63d9ea}{#1}");f("\\blueD","\\textcolor{##11accd}{#1}");f("\\blueE","\\textcolor{##0c7f99}{#1}");f("\\tealA","\\textcolor{##94fff5}{#1}");f("\\tealB","\\textcolor{##26edd5}{#1}");f("\\tealC","\\textcolor{##01d1c1}{#1}");f("\\tealD","\\textcolor{##01a995}{#1}");f("\\tealE","\\textcolor{##208170}{#1}");f("\\greenA","\\textcolor{##b6ffb0}{#1}");f("\\greenB","\\textcolor{##8af281}{#1}");f("\\greenC","\\textcolor{##74cf70}{#1}");f("\\greenD","\\textcolor{##1fab54}{#1}");f("\\greenE","\\textcolor{##0d923f}{#1}");f("\\goldA","\\textcolor{##ffd0a9}{#1}");f("\\goldB","\\textcolor{##ffbb71}{#1}");f("\\goldC","\\textcolor{##ff9c39}{#1}");f("\\goldD","\\textcolor{##e07d10}{#1}");f("\\goldE","\\textcolor{##a75a05}{#1}");f("\\redA","\\textcolor{##fca9a9}{#1}");f("\\redB","\\textcolor{##ff8482}{#1}");f("\\redC","\\textcolor{##f9685d}{#1}");f("\\redD","\\textcolor{##e84d39}{#1}");f("\\redE","\\textcolor{##bc2612}{#1}");f("\\maroonA","\\textcolor{##ffbde0}{#1}");f("\\maroonB","\\textcolor{##ff92c6}{#1}");f("\\maroonC","\\textcolor{##ed5fa6}{#1}");f("\\maroonD","\\textcolor{##ca337c}{#1}");f("\\maroonE","\\textcolor{##9e034e}{#1}");f("\\purpleA","\\textcolor{##ddd7ff}{#1}");f("\\purpleB","\\textcolor{##c6b9fc}{#1}");f("\\purpleC","\\textcolor{##aa87ff}{#1}");f("\\purpleD","\\textcolor{##7854ab}{#1}");f("\\purpleE","\\textcolor{##543b78}{#1}");f("\\mintA","\\textcolor{##f5f9e8}{#1}");f("\\mintB","\\textcolor{##edf2df}{#1}");f("\\mintC","\\textcolor{##e0e5cc}{#1}");f("\\grayA","\\textcolor{##f6f7f7}{#1}");f("\\grayB","\\textcolor{##f0f1f2}{#1}");f("\\grayC","\\textcolor{##e3e5e6}{#1}");f("\\grayD","\\textcolor{##d6d8da}{#1}");f("\\grayE","\\textcolor{##babec2}{#1}");f("\\grayF","\\textcolor{##888d93}{#1}");f("\\grayG","\\textcolor{##626569}{#1}");f("\\grayH","\\textcolor{##3b3e40}{#1}");f("\\grayI","\\textcolor{##21242c}{#1}");f("\\kaBlue","\\textcolor{##314453}{#1}");f("\\kaGreen","\\textcolor{##71B307}{#1}");var Vp={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class Py{constructor(t,r,n){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(t),this.macros=new _y(Ly,r.macros),this.mode=n,this.stack=[]}feed(t){this.lexer=new nm(t,this.settings)}switchMode(t){this.mode=t}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(t){this.stack.push(t)}pushTokens(t){this.stack.push(...t)}scanArgument(t){var r,n,a;if(t){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:a,end:n}=this.consumeArg(["]"])}else({tokens:a,start:r,end:n}=this.consumeArg());return this.pushToken(new pt("EOF",n.loc)),this.pushTokens(a),new pt("",nt.range(r,n))}consumeSpaces(){for(;;){var t=this.future();if(t.text===" ")this.stack.pop();else break}}consumeArg(t){var r=[],n=t&&t.length>0;n||this.consumeSpaces();var a=this.future(),i,s=0,o=0;do{if(i=this.popToken(),r.push(i),i.text==="{")++s;else if(i.text==="}"){if(--s,s===-1)throw new D("Extra }",i)}else if(i.text==="EOF")throw new D("Unexpected end of input in a macro argument, expected '"+(t&&n?t[o]:"}")+"'",i);if(t&&n)if((s===0||s===1&&t[o]==="{")&&i.text===t[o]){if(++o,o===t.length){r.splice(-o,o);break}}else o=0}while(s!==0||n);return a.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:a,end:i}}consumeArgs(t,r){if(r){if(r.length!==t+1)throw new D("The length of delimiters doesn't match the number of args!");for(var n=r[0],a=0;a<n.length;a++){var i=this.popToken();if(n[a]!==i.text)throw new D("Use of the macro doesn't match its definition",i)}}for(var s=[],o=0;o<t;o++)s.push(this.consumeArg(r&&r[o+1]).tokens);return s}countExpansion(t){if(this.expansionCount+=t,this.expansionCount>this.settings.maxExpand)throw new D("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(t){var r=this.popToken(),n=r.text,a=r.noexpand?null:this._getExpansion(n);if(a==null||t&&a.unexpandable){if(t&&a==null&&n[0]==="\\"&&!this.isDefined(n))throw new D("Undefined control sequence: "+n);return this.pushToken(r),!1}this.countExpansion(1);var i=a.tokens,s=this.consumeArgs(a.numArgs,a.delimiters);if(a.numArgs){i=i.slice();for(var o=i.length-1;o>=0;--o){var l=i[o];if(l.text==="#"){if(o===0)throw new D("Incomplete placeholder at end of macro body",l);if(l=i[--o],l.text==="#")i.splice(o+1,1);else if(/^[1-9]$/.test(l.text))i.splice(o,2,...s[+l.text-1]);else throw new D("Not a valid argument number",l)}}}return this.pushTokens(i),i.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var t=this.stack.pop();return t.treatAsRelax&&(t.text="\\relax"),t}}expandMacro(t){return this.macros.has(t)?this.expandTokens([new pt(t)]):void 0}expandTokens(t){var r=[],n=this.stack.length;for(this.pushTokens(t);this.stack.length>n;)if(this.expandOnce(!0)===!1){var a=this.stack.pop();a.treatAsRelax&&(a.noexpand=!1,a.treatAsRelax=!1),r.push(a)}return this.countExpansion(r.length),r}expandMacroAsText(t){var r=this.expandMacro(t);return r&&r.map(n=>n.text).join("")}_getExpansion(t){var r=this.macros.get(t);if(r==null)return r;if(t.length===1){var n=this.lexer.catcodes[t];if(n!=null&&n!==13)return}var a=typeof r=="function"?r(this):r;if(typeof a=="string"){var i=0;if(a.includes("#"))for(var s=a.replace(/##/g,"");s.includes("#"+(i+1));)++i;for(var o=new nm(a,this.settings),l=[],d=o.lex();d.text!=="EOF";)l.push(d),d=o.lex();l.reverse();var h={tokens:l,numArgs:i};return h}return a}isDefined(t){return this.macros.has(t)||Nr.hasOwnProperty(t)||fe.math.hasOwnProperty(t)||fe.text.hasOwnProperty(t)||Vp.hasOwnProperty(t)}isExpandable(t){var r=this.macros.get(t);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:Nr.hasOwnProperty(t)&&!Nr[t].primitive}}var sm=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,ji=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),ol={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},om={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class po{constructor(t,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new Py(t,r,this.mode),this.settings=r,this.leftrightDepth=0,this.nextToken=null}expect(t,r){if(r===void 0&&(r=!0),this.fetch().text!==t)throw new D("Expected '"+t+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(t){this.mode=t,this.gullet.switchMode(t)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var t=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),t}finally{this.gullet.endGroups()}}subparse(t){var r=this.nextToken;this.consume(),this.gullet.pushToken(new pt("}")),this.gullet.pushTokens(t);var n=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,n}parseExpression(t,r){for(var n=[];;){this.mode==="math"&&this.consumeSpaces();var a=this.fetch();if(po.endOfExpression.has(a.text)||r&&a.text===r||t&&Nr[a.text]&&Nr[a.text].infix)break;var i=this.parseAtom(r);if(i){if(i.type==="internal")continue}else break;n.push(i)}return this.mode==="text"&&this.formLigatures(n),this.handleInfixNodes(n)}handleInfixNodes(t){for(var r=-1,n,a=0;a<t.length;a++){var i=t[a];if(i.type==="infix"){if(r!==-1)throw new D("only one infix operator per group",i.token);r=a,n=i.replaceWith}}if(r!==-1&&n){var s,o,l=t.slice(0,r),d=t.slice(r+1);l.length===1&&l[0].type==="ordgroup"?s=l[0]:s={type:"ordgroup",mode:this.mode,body:l},d.length===1&&d[0].type==="ordgroup"?o=d[0]:o={type:"ordgroup",mode:this.mode,body:d};var h;return n==="\\\\abovefrac"?h=this.callFunction(n,[s,t[r],o],[]):h=this.callFunction(n,[s,o],[]),[h]}else return t}handleSupSubscript(t){var r=this.fetch(),n=r.text;this.consume(),this.consumeSpaces();var a;do{var i;a=this.parseGroup(t)}while(((i=a)==null?void 0:i.type)==="internal");if(!a)throw new D("Expected group after '"+n+"'",r);return a}formatUnsupportedCmd(t){for(var r=[],n=0;n<t.length;n++)r.push({type:"textord",mode:"text",text:t[n]});var a={type:"text",mode:this.mode,body:r},i={type:"color",mode:this.mode,color:this.settings.errorColor,body:[a]};return i}parseAtom(t){var r=this.parseGroup("atom",t);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var n,a;;){this.consumeSpaces();var i=this.fetch();if(i.text==="\\limits"||i.text==="\\nolimits"){if(r&&r.type==="op"){var s=i.text==="\\limits";r.limits=s,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=i.text==="\\limits");else throw new D("Limit controls must follow a math operator",i);this.consume()}else if(i.text==="^"){if(n)throw new D("Double superscript",i);n=this.handleSupSubscript("superscript")}else if(i.text==="_"){if(a)throw new D("Double subscript",i);a=this.handleSupSubscript("subscript")}else if(i.text==="'"){if(n)throw new D("Double superscript",i);var o={type:"textord",mode:this.mode,text:"\\prime"},l=[o];for(this.consume();this.fetch().text==="'";)l.push(o),this.consume();this.fetch().text==="^"&&l.push(this.handleSupSubscript("superscript")),n={type:"ordgroup",mode:this.mode,body:l}}else if(ji[i.text]){var d=sm.test(i.text),h=[];for(h.push(new pt(ji[i.text])),this.consume();;){var m=this.fetch().text;if(!ji[m]||sm.test(m)!==d)break;h.unshift(new pt(ji[m])),this.consume()}var v=this.subparse(h);d?a={type:"ordgroup",mode:"math",body:v}:n={type:"ordgroup",mode:"math",body:v}}else break}return n||a?{type:"supsub",mode:this.mode,base:r,sup:n,sub:a}:r}parseFunction(t,r){var n=this.fetch(),a=n.text,i=Nr[a];if(!i)return null;if(this.consume(),r&&r!=="atom"&&!i.allowedInArgument)throw new D("Got function '"+a+"' with no arguments"+(r?" as "+r:""),n);if(this.mode==="text"&&!i.allowedInText)throw new D("Can't use function '"+a+"' in text mode",n);if(this.mode==="math"&&i.allowedInMath===!1)throw new D("Can't use function '"+a+"' in math mode",n);var{args:s,optArgs:o}=this.parseArguments(a,i);return this.callFunction(a,s,o,n,t)}callFunction(t,r,n,a,i){var s={funcName:t,parser:this,token:a,breakOnTokenText:i},o=Nr[t];if(o&&o.handler)return o.handler(s,r,n);throw new D("No function handler for "+t)}parseArguments(t,r){var n=r.numArgs+r.numOptionalArgs;if(n===0)return{args:[],optArgs:[]};for(var a=[],i=[],s=0;s<n;s++){var o=r.argTypes&&r.argTypes[s],l=s<r.numOptionalArgs;("primitive"in r&&r.primitive&&o==null||r.type==="sqrt"&&s===1&&i[0]==null)&&(o="primitive");var d=this.parseGroupOfType("argument to '"+t+"'",o,l);if(l)i.push(d);else if(d!=null)a.push(d);else throw new D("Null argument, please report this as a bug")}return{args:a,optArgs:i}}parseGroupOfType(t,r,n){switch(r){case"color":return this.parseColorGroup(n);case"size":return this.parseSizeGroup(n);case"url":return this.parseUrlGroup(n);case"math":case"text":return this.parseArgumentGroup(n,r);case"hbox":{var a=this.parseArgumentGroup(n,"text");return a!=null?{type:"styling",mode:a.mode,body:[a],style:"text",resetFont:!0}:null}case"raw":{var i=this.parseStringGroup("raw",n);return i!=null?{type:"raw",mode:"text",string:i.text}:null}case"primitive":{if(n)throw new D("A primitive argument cannot be optional");var s=this.parseGroup(t);if(s==null)throw new D("Expected group as "+t,this.fetch());return s}case"original":case null:case void 0:return this.parseArgumentGroup(n);default:throw new D("Unknown group type as "+t,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(t,r){var n=this.gullet.scanArgument(r);if(n==null)return null;for(var a="",i;(i=this.fetch()).text!=="EOF";)a+=i.text,this.consume();return this.consume(),n.text=a,n}parseRegexGroup(t,r){for(var n=this.fetch(),a=n,i="",s;(s=this.fetch()).text!=="EOF"&&t.test(i+s.text);)a=s,i+=a.text,this.consume();if(i==="")throw new D("Invalid "+r+": '"+n.text+"'",n);return n.range(a,i)}parseColorGroup(t){var r=this.parseStringGroup("color",t);if(r==null)return null;var n=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!n)throw new D("Invalid color: '"+r.text+"'",r);var a=n[0];return/^[0-9a-f]{6}$/i.test(a)&&(a="#"+a),{type:"color-token",mode:this.mode,color:a}}parseSizeGroup(t){var r,n=!1;if(this.gullet.consumeSpaces(),!t&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",t),!r)return null;!t&&r.text.length===0&&(r.text="0pt",n=!0);var a=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!a)throw new D("Invalid size: '"+r.text+"'",r);var i={number:+(a[1]+a[2]),unit:a[3]};if(!tp(i))throw new D("Invalid unit: '"+i.unit+"'",r);return{type:"size",mode:this.mode,value:i,isBlank:n}}parseUrlGroup(t){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",t);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var n=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:n}}parseArgumentGroup(t,r){var n=this.gullet.scanArgument(t);if(n==null)return null;var a=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var i=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var s={type:"ordgroup",mode:this.mode,loc:n.loc,body:i};return r&&this.switchMode(a),s}parseGroup(t,r){var n=this.fetch(),a=n.text,i;if(a==="{"||a==="\\begingroup"){this.consume();var s=a==="{"?"}":"\\endgroup";this.gullet.beginGroup();var o=this.parseExpression(!1,s),l=this.fetch();this.expect(s),this.gullet.endGroup(),i={type:"ordgroup",mode:this.mode,loc:nt.range(n,l),body:o,semisimple:a==="\\begingroup"||void 0}}else if(i=this.parseFunction(r,t)||this.parseSymbol(),i==null&&a[0]==="\\"&&!Vp.hasOwnProperty(a)){if(this.settings.throwOnError)throw new D("Undefined control sequence: "+a,n);i=this.formatUnsupportedCmd(a),this.consume()}return i}formLigatures(t){for(var r=t.length-1,n=0;n<r;++n){var a=t[n];if(a.type==="textord"){var i=a.text,s=t[n+1];if(!(!s||s.type!=="textord")){if(i==="-"&&s.text==="-"){var o=t[n+2];n+1<r&&o&&o.type==="textord"&&o.text==="-"?(t.splice(n,3,{type:"textord",mode:"text",loc:nt.range(a,o),text:"---"}),r-=2):(t.splice(n,2,{type:"textord",mode:"text",loc:nt.range(a,s),text:"--"}),r-=1)}(i==="'"||i==="`")&&s.text===i&&(t.splice(n,2,{type:"textord",mode:"text",loc:nt.range(a,s),text:i+i}),r-=1)}}}}parseSymbol(){var t=this.fetch(),r=t.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var n=r.slice(5),a=n.charAt(0)==="*";if(a&&(n=n.slice(1)),n.length<2||n.charAt(0)!==n.slice(-1))throw new D(`\\verb assertion failed --
                    please report what input caused this bug`);return n=n.slice(1,-1),{type:"verb",mode:"text",body:n,star:a}}om.hasOwnProperty(r[0])&&!fe[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',t),r=om[r[0]]+r.slice(1));var i=My.exec(r);i&&(r=r.substring(0,i.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var s;if(fe[this.mode][r]){this.settings.strict&&this.mode==="math"&&c0.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',t);var o=fe[this.mode][r].group,l=nt.range(t),d;Q3(o)?d={type:"atom",mode:this.mode,family:o,loc:l,text:r}:d={type:o,mode:this.mode,loc:l,text:r},s=d}else if(r.charCodeAt(0)>=128)this.settings.strict&&(ep(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',t):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),t)),s={type:"textord",mode:"text",loc:nt.range(t),text:r};else return null;if(this.consume(),i)for(var h=0;h<i[0].length;h++){var m=i[0][h];if(!ol[m])throw new D("Unknown accent ' "+m+"'",t);var v=ol[m][this.mode]||ol[m].text;if(!v)throw new D("Accent "+m+" unsupported in "+this.mode+" mode",t);s={type:"accent",mode:this.mode,loc:nt.range(t),label:v,isStretchy:!1,isShifty:!0,base:s}}return s}}po.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var ju=function(t,r){if(!(typeof t=="string"||t instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var n=new po(t,r);delete n.gullet.macros.current["\\df@tag"];var a=n.parse();if(delete n.gullet.macros.current["\\current@color"],delete n.gullet.macros.current["\\color"],n.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new D("\\tag works only in display equations");a=[{type:"tag",mode:"text",body:a,tag:n.subparse([new pt("\\df@tag")])}]}return a},Xp=function(t,r,n){r.textContent="";var a=Uu(t,n).toNode();r.appendChild(a)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),Xp=function(){throw new D("KaTeX doesn't work in quirks mode.")});var zy=function(t,r){var n=Uu(t,r).toMarkup();return n},Fy=function(t,r){var n=new Nu(r);return ju(t,n)},Kp=function(t,r,n){if(n.throwOnError||!(t instanceof D))throw t;var a=z(["katex-error"],[new gt(r)]);return a.setAttribute("title",t.toString()),a.setAttribute("style","color:"+n.errorColor),a},Uu=function(t,r){var n=new Nu(r);try{var a=ju(t,n);return H3(a,t,n)}catch(i){return Kp(i,t,n)}},Dy=function(t,r){var n=new Nu(r);try{var a=ju(t,n);return q3(a,t,n)}catch(i){return Kp(i,t,n)}},By="0.16.47",$y={Span:sa,Anchor:to,SymbolNode:gt,SvgNode:cr,PathNode:Ur,LineNode:u0},C0={version:By,render:Xp,renderToString:zy,ParseError:D,SETTINGS_SCHEMA:s0,__parse:Fy,__renderToDomTree:Uu,__renderToHTMLTree:Dy,__setFontMetrics:T3,__defineSymbol:u,__defineFunction:H,__defineMacro:f,__domTree:$y};function Yp({topic:e,isCompleted:t,onMarkComplete:r,allTopics:n,currentTopicIndex:a,onNavigate:i,onToggleMobileMenu:s,isMobile:o}){const l=R.useRef(null),d=a>0?n[a-1]:null,h=a<n.length-1?n[a+1]:null;R.useEffect(()=>{var v;l.current&&(()=>{const T=document.createTreeWalker(l.current,NodeFilter.SHOW_TEXT,null,!1),C=[];let A;for(;A=T.nextNode();)C.push(A);C.forEach(w=>{const y=w.textContent;if(y.includes("$$")){const b=y.split(/(\$\$[\s\S]*?\$\$)/);if(b.length>1){const N=document.createDocumentFragment();b.forEach(M=>{if(M.startsWith("$$")&&M.endsWith("$$")){const I=M.slice(2,-2).trim(),_=document.createElement("span");_.className="katex-display-wrapper";try{C0.render(I,_,{throwOnError:!1,displayMode:!0})}catch{_.textContent=I}N.appendChild(_)}else N.appendChild(document.createTextNode(M))}),w.parentNode.replaceChild(N,w)}}})})(),(v=l.current)==null||v.scrollTo(0,0)},[e.slug]);const m=v=>v?v.replace(/\$\$([\s\S]*?)\$\$/g,(C,A)=>{try{return C0.renderToString(A.trim(),{throwOnError:!1,displayMode:!0})}catch{return`<code>${A}</code>`}}).split(/(?=^## )/gm).filter(C=>C.trim()).map(C=>{const A=C.split(`
`);let w="",y=!1,b=[],N=[],M=!1,I="",_=[];for(let P=0;P<A.length;P++){const U=A[P],O=U.trim();if(O.startsWith("```")){M?(w+=qy(I,_.join(`
`)),M=!1,I="",_=[]):(M=!0,I=O.slice(3).trim(),_=[]);continue}if(M){_.push(U);continue}if(O===""){y&&b.length>0&&(w+=ll(N,b),b=[],N=[],y=!1);continue}if(O.startsWith("|")&&O.endsWith("|")){if(O.includes("---"))continue;const Te=O.split("|").slice(1,-1).map(Ne=>Ne.trim());y?b.push(Te):(N=Te,y=!0);continue}else y&&(w+=ll(N,b),b=[],N=[],y=!1);if(O.startsWith("## ")){const te=O.slice(3);w+=`<div class="ml-section-header"><span class="ml-section-icon">${jy(te)}</span><h2>${br(te)}</h2></div>`;continue}if(O.startsWith("### ")){w+=`<h3 class="ml-subsection-header">${br(O.slice(4))}</h3>`;continue}if(O==="---"){w+='<hr class="ml-divider" />';continue}if(O.startsWith("> ")){const te=O.slice(2),Te=Uy(te);w+=`<div class="ml-callout ml-callout-${Te}">
            <div class="ml-callout-icon">${Hy(Te)}</div>
            <div class="ml-callout-content">${br(te)}</div>
          </div>`;continue}if(O.startsWith("- ")){w+=`<div class="ml-list-item">
            <span class="ml-bullet">•</span>
            <span>${br(O.slice(2))}</span>
          </div>`;continue}const re=O.match(/^(\d+)\.\s+(.+)/);if(re){w+=`<div class="ml-numbered-item">
            <span class="ml-number">${re[1]}</span>
            <span>${br(re[2])}</span>
          </div>`;continue}w+=`<p class="ml-paragraph">${br(O)}</p>`}return y&&b.length>0&&(w+=ll(N,b)),w}).join(""):"";return g.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-10",children:[g.jsxs("div",{className:"flex items-start justify-between mb-10",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[s&&o&&g.jsx("button",{onClick:s,className:"p-2 -ml-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors",children:g.jsx(D1,{className:"w-5 h-5"})}),g.jsxs("div",{children:[g.jsxs("span",{className:"text-xs font-mono text-purple-500 dark:text-purple-400 mb-2 block tracking-wider uppercase",children:["Topic ",a+1," of ",n.length]}),g.jsxs("h1",{className:"text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3",children:[g.jsx(P1,{className:"w-6 h-6 sm:w-8 sm:h-8 text-purple-500"}),g.jsx("span",{className:"truncate",children:e.title})]})]})]}),g.jsx("button",{onClick:r,className:`
            flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 shadow-sm
            ${t?"bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800":"bg-white dark:bg-slate-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-600 border border-gray-200 dark:border-slate-600"}
          `,children:t?g.jsxs(g.Fragment,{children:[g.jsx(na,{className:"w-4 h-4"}),"Completed"]}):g.jsxs(g.Fragment,{children:[g.jsx(V2,{className:"w-4 h-4"}),"Mark as Read"]})})]}),g.jsx("div",{ref:l,className:"ml-content",dangerouslySetInnerHTML:{__html:m(e.content)}}),g.jsxs("div",{className:"flex items-center justify-between mt-16 pt-8 border-t border-gray-200 dark:border-slate-600",children:[d?g.jsxs("button",{onClick:()=>i(d.slug),className:"flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors border border-gray-200 dark:border-slate-600",children:[g.jsx(ku,{className:"w-4 h-4"}),g.jsxs("div",{className:"text-left",children:[g.jsx("div",{className:"text-xs text-gray-400 dark:text-gray-500",children:"Previous"}),g.jsx("div",{children:d.title})]})]}):g.jsx("div",{}),h?g.jsxs("button",{onClick:()=>i(h.slug),className:"flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-medium text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/20 transition-colors border border-purple-200 dark:border-purple-800",children:[g.jsxs("div",{className:"text-right",children:[g.jsx("div",{className:"text-xs text-purple-400 dark:text-purple-500",children:"Next"}),g.jsx("div",{children:h.title})]}),g.jsx(Tu,{className:"w-4 h-4"})]}):g.jsx("div",{})]})]})}function br(e){return e.replace(/\*\*(.+?)\*\*/g,'<strong class="ml-bold">$1</strong>').replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`(.+?)`/g,'<code class="ml-inline-code">$1</code>').replace(/\$(.+?)\$/g,(t,r)=>{try{return C0.renderToString(r,{throwOnError:!1,displayMode:!1})}catch{return`<span class="ml-formula-inline">${r}</span>`}})}function jy(e){const t=e.toLowerCase();return t.includes("example")||t.includes("when to")?"💡":t.includes("advantage")||t.includes("disadvantage")?"⚖️":t.includes("interview")||t.includes("tip")?"🎯":t.includes("algorithm")||t.includes("how")?"⚙️":t.includes("metric")||t.includes("evaluation")||t.includes("score")?"📊":t.includes("cost")||t.includes("loss")||t.includes("error")?"📉":t.includes("curve")||t.includes("roc")||t.includes("pr ")?"📈":t.includes("confusion")||t.includes("matrix")?"🔢":t.includes("precision")||t.includes("recall")||t.includes("f1")?"🎯":t.includes("regularization")?"🔧":t.includes("split")||t.includes("pruning")?"🌳":t.includes("boost")||t.includes("ensemble")||t.includes("random forest")?"🌲":t.includes("distance")||t.includes("cluster")?"📍":t.includes("pca")||t.includes("dimension")?"📐":t.includes("cross-validation")||t.includes("tuning")?"🔄":t.includes("feature")||t.includes("scaling")?"🛠️":t.includes("summary")||t.includes("which")?"📋":t.includes("threshold")?"🎚️":t.includes("log-loss")||t.includes("logloss")?"📝":t.includes("kappa")||t.includes("mcc")?"✅":"📌"}function Uy(e){return e.includes("💡")||e.toLowerCase().includes("tip")||e.toLowerCase().includes("interview")?"tip":e.includes("⚠️")||e.toLowerCase().includes("common mistake")||e.toLowerCase().includes("pitfall")||e.toLowerCase().includes("never")?"warning":e.includes("🎯")||e.toLowerCase().includes("gold")?"gold":"info"}function Hy(e){switch(e){case"tip":return"💡";case"warning":return"⚠️";case"gold":return"🎯";default:return"ℹ️"}}function ll(e,t){if(!e.length||!t.length)return"";const r=e.length,n=t.map(a=>{const i=[...a];for(;i.length<r;)i.push("");return i.slice(0,r)});return`
    <div class="ml-table-wrapper">
      <table class="ml-table">
        <colgroup>
          ${e.map(()=>"<col />").join("")}
        </colgroup>
        <thead>
          <tr>
            ${e.map(a=>`<th>${br(a)}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${n.map(a=>`
            <tr>
              ${a.map(i=>`<td>${br(i)}</td>`).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function qy(e,t){const r=t.replace(/\x26/g,"&amp;").replace(/\x3c/g,"&lt;").replace(/\x3e/g,"&gt;"),n=e==="python"||e==="py"?Gy(r):r;return`
    <div class="ml-code-block-wrapper">
      <div class="ml-code-block-header">
        <div class="ml-code-block-dots">
          <span></span><span></span><span></span>
        </div>
        <span class="ml-code-block-lang">${e||"code"}</span>
      </div>
      <pre class="ml-code-block"><code>${n}</code></pre>
    </div>
  `}function Gy(e){const t="\0>",r="\0SPO\0",n="\0SPC\0";let a=e.replace(/<span class="([^"]+)">/g,(d,h)=>`${r}${h}${t}`);a=a.replace(/<\/span>/g,n),a=a.replace(/(#.*)$/gm,`${r}py-cm${t}$1${n}`),a=a.replace(/("""[\s\S]*?"""|'''[\s\S]*?''')/g,`${r}py-str${t}$1${n}`),a=a.replace(/((?:f|r|b|fr|rf|br|rb)?"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g,`${r}py-str${t}$1${n}`),a=a.replace(/(@[\w.]+)/g,`${r}py-dec${t}$1${n}`);const i=["def","class","return","if","elif","else","for","while","in","import","from","as","with","try","except","finally","raise","pass","break","continue","and","or","not","is","None","True","False","lambda","yield","global","nonlocal","assert","del","print"],s=new RegExp(`\\b(${i.join("|")})\\b`,"g");a=a.replace(s,`${r}py-kw${t}$1${n}`);const o=["range","len","int","float","str","list","dict","set","tuple","type","isinstance","sorted","enumerate","zip","map","filter","min","max","sum","abs","round","open","input","super","property"],l=new RegExp(`\\b(${o.join("|")})\\b(?=\\()`,"g");return a=a.replace(l,`${r}py-bi${t}$1${n}`),a=a.replace(/\b(def\s+)(\w+)/g,`$1${r}py-fn${t}$2${n}`),a=a.replace(new RegExp("(?<![.\\w\\x00])(\\w+)(?=\\()","g"),d=>i.includes(d)||o.includes(d)?d:`${r}py-fn${t}${d}${n}`),a=a.replace(/\b(\d+\.?\d*)\b/g,`${r}py-num${t}$1${n}`),a=a.replace(/\x00SPO\x00([^\x00]+?)\x00>/g,'<span class="$1">'),a=a.replace(/\x00SPC\x00/g,"</span>"),a}function lm(){const{topicSlug:e}=Js(),t=fn(),{mlCompleted:r,markMLCompleted:n}=aa(),a=R.useMemo(()=>e?Kr.find(i=>i.slug===e):Kr[0],[e]);return R.useEffect(()=>{Kr.length>0&&!e&&t(`/ml/${Kr[0].slug}`,{replace:!0})},[]),a?g.jsxs("div",{className:"h-full flex min-h-0",children:[g.jsx("div",{className:"w-[280px] border-r border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shrink-0",children:g.jsx(Z1,{topics:Kr,currentSlug:a.slug,completedSlugs:r})}),g.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-thin",children:g.jsx(Yp,{topic:a,isCompleted:r.has(a.slug),onMarkComplete:()=>n(a.slug),allTopics:Kr,currentTopicIndex:Kr.findIndex(i=>i.slug===a.slug),onNavigate:i=>t(`/ml/${i}`)})})]}):g.jsx("div",{className:"flex items-center justify-center h-full",children:g.jsx("p",{className:"text-gray-500",children:"No topics found."})})}const Wy="modulepreload",Vy=function(e){return"/datacrack/"+e},um={},Xy=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=Promise.allSettled(r.map(l=>{if(l=Vy(l),l in um)return;um[l]=!0;const d=l.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":Wy,d||(m.as="script"),m.crossOrigin="",m.href=l,o&&m.setAttribute("nonce",o),document.head.appendChild(m),d)return new Promise((v,x)=>{m.addEventListener("load",v),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return a.then(s=>{for(const o of s||[])o.status==="rejected"&&i(o.reason);return t().catch(i)})},Ky=R.lazy(()=>Xy(()=>import("./DecisionTreeDiagram-Cb0zZp0t.js"),[])),cm={"decision-trees":Ky};function dm(){const{topicSlug:e}=Js(),t=fn(),{conceptCompleted:r,markConceptCompleted:n}=aa(),[a,i]=R.useState(!1),[s,o]=R.useState(!1);R.useEffect(()=>{const d=()=>o(window.innerWidth<768);return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]);const l=R.useMemo(()=>e?Zt.find(d=>d.slug===e):Zt[0]||null,[e]);return R.useEffect(()=>{Zt.length>0&&!e&&t(`/Concepts/${Zt[0].slug}`,{replace:!0})},[e,t]),l?g.jsxs("div",{className:"h-full flex min-h-0 relative",children:[a&&s&&g.jsx("div",{className:"fixed inset-0 bg-black/50 z-30 md:hidden",onClick:()=>i(!1)}),g.jsx("div",{className:`
          w-[280px] border-r border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shrink-0
          fixed md:relative left-0 top-0 h-full z-40
          transition-transform duration-300 ease-in-out
          md:translate-x-0
          ${a?"translate-x-0":"-translate-x-full"}
        `,children:g.jsx(Z1,{topics:Zt,currentSlug:l.slug,completedSlugs:r,routePrefix:"/Concepts",onCloseMobile:()=>i(!1)})}),g.jsxs("div",{className:"flex-1 overflow-y-auto scrollbar-thin min-w-0",children:[cm[l.slug]&&g.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 md:px-10 pt-6 sm:pt-10",children:g.jsx(R.Suspense,{fallback:null,children:(()=>{const d=cm[l.slug];return g.jsx(d,{})})()})}),g.jsx(Yp,{topic:l,isCompleted:r.has(l.slug),onMarkComplete:()=>n(l.slug),allTopics:Zt,currentTopicIndex:Zt.findIndex(d=>d.slug===l.slug),onNavigate:d=>{t(`/Concepts/${d}`),s&&i(!1)},onToggleMobileMenu:()=>i(!a),isMobile:s})]})]}):g.jsx("div",{className:"flex items-center justify-center h-full",children:g.jsx("p",{className:"text-gray-500",children:"No concept topics found. Add .jsx files to src/pages/Concepts/."})})}function Yy(){return g.jsx(N2,{children:g.jsxs(It,{path:"/",element:g.jsx(k5,{}),children:[g.jsx(It,{index:!0,element:g.jsx(T2,{to:"/python",replace:!0})}),g.jsx(It,{path:"python",element:g.jsx(Sd,{})}),g.jsx(It,{path:"python/:questionId",element:g.jsx(Sd,{})}),g.jsx(It,{path:"sql",element:g.jsx(kd,{})}),g.jsx(It,{path:"sql/:questionId",element:g.jsx(kd,{})}),g.jsx(It,{path:"ml",element:g.jsx(lm,{})}),g.jsx(It,{path:"ml/:topicSlug",element:g.jsx(lm,{})}),g.jsx(It,{path:"Concepts",element:g.jsx(dm,{})}),g.jsx(It,{path:"Concepts/:topicSlug",element:g.jsx(dm,{})})]})})}ul.createRoot(document.getElementById("root")).render(g.jsx(Ar.StrictMode,{children:g.jsx(P2,{basename:"/datacrack",children:g.jsx(b5,{children:g.jsx(s5,{children:g.jsx(Yy,{})})})})}));export{g as j};
