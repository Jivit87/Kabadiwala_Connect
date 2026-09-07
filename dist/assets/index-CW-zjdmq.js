(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();function Dd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var go={exports:{}},yr={},xo={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ds=Symbol.for("react.element"),Md=Symbol.for("react.portal"),Rd=Symbol.for("react.fragment"),Id=Symbol.for("react.strict_mode"),Wd=Symbol.for("react.profiler"),Od=Symbol.for("react.provider"),Hd=Symbol.for("react.context"),Ud=Symbol.for("react.forward_ref"),Vd=Symbol.for("react.suspense"),$d=Symbol.for("react.memo"),Kd=Symbol.for("react.lazy"),sl=Symbol.iterator;function Gd(e){return e===null||typeof e!="object"?null:(e=sl&&e[sl]||e["@@iterator"],typeof e=="function"?e:null)}var yo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vo=Object.assign,jo={};function bn(e,t,s){this.props=e,this.context=t,this.refs=jo,this.updater=s||yo}bn.prototype.isReactComponent={};bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ko(){}ko.prototype=bn.prototype;function ai(e,t,s){this.props=e,this.context=t,this.refs=jo,this.updater=s||yo}var ii=ai.prototype=new ko;ii.constructor=ai;vo(ii,bn.prototype);ii.isPureReactComponent=!0;var rl=Array.isArray,bo=Object.prototype.hasOwnProperty,li={current:null},wo={key:!0,ref:!0,__self:!0,__source:!0};function No(e,t,s){var r,a={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)bo.call(t,r)&&!wo.hasOwnProperty(r)&&(a[r]=t[r]);var o=arguments.length-2;if(o===1)a.children=s;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)a[r]===void 0&&(a[r]=o[r]);return{$$typeof:ds,type:e,key:i,ref:l,props:a,_owner:li.current}}function qd(e,t){return{$$typeof:ds,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function oi(e){return typeof e=="object"&&e!==null&&e.$$typeof===ds}function Qd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(s){return t[s]})}var al=/\/+/g;function Rr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qd(""+e.key):t.toString(36)}function Ls(e,t,s,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ds:case Md:l=!0}}if(l)return l=e,a=a(l),e=r===""?"."+Rr(l,0):r,rl(a)?(s="",e!=null&&(s=e.replace(al,"$&/")+"/"),Ls(a,t,s,"",function(u){return u})):a!=null&&(oi(a)&&(a=qd(a,s+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(al,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=r===""?".":r+":",rl(e))for(var o=0;o<e.length;o++){i=e[o];var c=r+Rr(i,o);l+=Ls(i,t,s,c,a)}else if(c=Gd(e),typeof c=="function")for(e=c.call(e),o=0;!(i=e.next()).done;)i=i.value,c=r+Rr(i,o++),l+=Ls(i,t,s,c,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ys(e,t,s){if(e==null)return e;var r=[],a=0;return Ls(e,r,"","",function(i){return t.call(s,i,a++)}),r}function Yd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(s){(e._status===0||e._status===-1)&&(e._status=1,e._result=s)},function(s){(e._status===0||e._status===-1)&&(e._status=2,e._result=s)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Ds={transition:null},Xd={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Ds,ReactCurrentOwner:li};function So(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:ys,forEach:function(e,t,s){ys(e,function(){t.apply(this,arguments)},s)},count:function(e){var t=0;return ys(e,function(){t++}),t},toArray:function(e){return ys(e,function(t){return t})||[]},only:function(e){if(!oi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=bn;D.Fragment=Rd;D.Profiler=Wd;D.PureComponent=ai;D.StrictMode=Id;D.Suspense=Vd;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xd;D.act=So;D.cloneElement=function(e,t,s){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vo({},e.props),a=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=li.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)bo.call(t,c)&&!wo.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=s;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:ds,type:e.type,key:a,ref:i,props:r,_owner:l}};D.createContext=function(e){return e={$$typeof:Hd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Od,_context:e},e.Consumer=e};D.createElement=No;D.createFactory=function(e){var t=No.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Ud,render:e}};D.isValidElement=oi;D.lazy=function(e){return{$$typeof:Kd,_payload:{_status:-1,_result:e},_init:Yd}};D.memo=function(e,t){return{$$typeof:$d,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Ds.transition;Ds.transition={};try{e()}finally{Ds.transition=t}};D.unstable_act=So;D.useCallback=function(e,t){return ge.current.useCallback(e,t)};D.useContext=function(e){return ge.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};D.useEffect=function(e,t){return ge.current.useEffect(e,t)};D.useId=function(){return ge.current.useId()};D.useImperativeHandle=function(e,t,s){return ge.current.useImperativeHandle(e,t,s)};D.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return ge.current.useMemo(e,t)};D.useReducer=function(e,t,s){return ge.current.useReducer(e,t,s)};D.useRef=function(e){return ge.current.useRef(e)};D.useState=function(e){return ge.current.useState(e)};D.useSyncExternalStore=function(e,t,s){return ge.current.useSyncExternalStore(e,t,s)};D.useTransition=function(){return ge.current.useTransition()};D.version="18.3.1";xo.exports=D;var S=xo.exports;const Zd=Dd(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd=S,eu=Symbol.for("react.element"),tu=Symbol.for("react.fragment"),nu=Object.prototype.hasOwnProperty,su=Jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ru={key:!0,ref:!0,__self:!0,__source:!0};function Co(e,t,s){var r,a={},i=null,l=null;s!==void 0&&(i=""+s),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)nu.call(t,r)&&!ru.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:eu,type:e,key:i,ref:l,props:a,_owner:su.current}}yr.Fragment=tu;yr.jsx=Co;yr.jsxs=Co;go.exports=yr;var n=go.exports,da={},_o={exports:{}},Pe={},Po={exports:{}},Bo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,F){var L=E.length;E.push(F);e:for(;0<L;){var Y=L-1>>>1,ne=E[Y];if(0<a(ne,F))E[Y]=F,E[L]=ne,L=Y;else break e}}function s(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var F=E[0],L=E.pop();if(L!==F){E[0]=L;e:for(var Y=0,ne=E.length,gs=ne>>>1;Y<gs;){var Pt=2*(Y+1)-1,Mr=E[Pt],Bt=Pt+1,xs=E[Bt];if(0>a(Mr,L))Bt<ne&&0>a(xs,Mr)?(E[Y]=xs,E[Bt]=L,Y=Bt):(E[Y]=Mr,E[Pt]=L,Y=Pt);else if(Bt<ne&&0>a(xs,L))E[Y]=xs,E[Bt]=L,Y=Bt;else break e}}return F}function a(E,F){var L=E.sortIndex-F.sortIndex;return L!==0?L:E.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var c=[],u=[],g=1,h=null,m=3,v=!1,y=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var F=s(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=E)r(u),F.sortIndex=F.expirationTime,t(c,F);else break;F=s(u)}}function k(E){if(x=!1,f(E),!y)if(s(c)!==null)y=!0,Lr(_);else{var F=s(u);F!==null&&Dr(k,F.startTime-E)}}function _(E,F){y=!1,x&&(x=!1,p(B),B=-1),v=!0;var L=m;try{for(f(F),h=s(c);h!==null&&(!(h.expirationTime>F)||E&&!Z());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,m=h.priorityLevel;var ne=Y(h.expirationTime<=F);F=e.unstable_now(),typeof ne=="function"?h.callback=ne:h===s(c)&&r(c),f(F)}else r(c);h=s(c)}if(h!==null)var gs=!0;else{var Pt=s(u);Pt!==null&&Dr(k,Pt.startTime-F),gs=!1}return gs}finally{h=null,m=L,v=!1}}var j=!1,P=null,B=-1,b=5,A=-1;function Z(){return!(e.unstable_now()-A<b)}function C(){if(P!==null){var E=e.unstable_now();A=E;var F=!0;try{F=P(!0,E)}finally{F?R():(j=!1,P=null)}}else j=!1}var R;if(typeof d=="function")R=function(){d(C)};else if(typeof MessageChannel<"u"){var nl=new MessageChannel,Ld=nl.port2;nl.port1.onmessage=C,R=function(){Ld.postMessage(null)}}else R=function(){w(C,0)};function Lr(E){P=E,j||(j=!0,R())}function Dr(E,F){B=w(function(){E(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Lr(_))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return s(c)},e.unstable_next=function(E){switch(m){case 1:case 2:case 3:var F=3;break;default:F=m}var L=m;m=F;try{return E()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,F){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var L=m;m=E;try{return F()}finally{m=L}},e.unstable_scheduleCallback=function(E,F,L){var Y=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Y+L:Y):L=Y,E){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=L+ne,E={id:g++,callback:F,priorityLevel:E,startTime:L,expirationTime:ne,sortIndex:-1},L>Y?(E.sortIndex=L,t(u,E),s(c)===null&&E===s(u)&&(x?(p(B),B=-1):x=!0,Dr(k,L-Y))):(E.sortIndex=ne,t(c,E),y||v||(y=!0,Lr(_))),E},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(E){var F=m;return function(){var L=m;m=F;try{return E.apply(this,arguments)}finally{m=L}}}})(Bo);Po.exports=Bo;var au=Po.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iu=S,_e=au;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var To=new Set,Gn={};function Ut(e,t){mn(e,t),mn(e+"Capture",t)}function mn(e,t){for(Gn[e]=t,e=0;e<t.length;e++)To.add(t[e])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ua=Object.prototype.hasOwnProperty,lu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,il={},ll={};function ou(e){return ua.call(ll,e)?!0:ua.call(il,e)?!1:lu.test(e)?ll[e]=!0:(il[e]=!0,!1)}function cu(e,t,s,r){if(s!==null&&s.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function du(e,t,s,r){if(t===null||typeof t>"u"||cu(e,t,s,r))return!0;if(r)return!1;if(s!==null)switch(s.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,s,r,a,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=s,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ci=/[\-:]([a-z])/g;function di(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ci,di);ce[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ci,di);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ci,di);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ui(e,t,s,r){var a=ce.hasOwnProperty(t)?ce[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(du(t,s,a,r)&&(s=null),r||a===null?ou(t)&&(s===null?e.removeAttribute(t):e.setAttribute(t,""+s)):a.mustUseProperty?e[a.propertyName]=s===null?a.type===3?!1:"":s:(t=a.attributeName,r=a.attributeNamespace,s===null?e.removeAttribute(t):(a=a.type,s=a===3||a===4&&s===!0?"":""+s,r?e.setAttributeNS(r,t,s):e.setAttribute(t,s))))}var rt=iu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vs=Symbol.for("react.element"),Qt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),pi=Symbol.for("react.strict_mode"),pa=Symbol.for("react.profiler"),zo=Symbol.for("react.provider"),Ao=Symbol.for("react.context"),hi=Symbol.for("react.forward_ref"),ha=Symbol.for("react.suspense"),ma=Symbol.for("react.suspense_list"),mi=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),Eo=Symbol.for("react.offscreen"),ol=Symbol.iterator;function Cn(e){return e===null||typeof e!="object"?null:(e=ol&&e[ol]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Ir;function Fn(e){if(Ir===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);Ir=t&&t[1]||""}return`
`+Ir+e}var Wr=!1;function Or(e,t){if(!e||Wr)return"";Wr=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),l=a.length-1,o=i.length-1;1<=l&&0<=o&&a[l]!==i[o];)o--;for(;1<=l&&0<=o;l--,o--)if(a[l]!==i[o]){if(l!==1||o!==1)do if(l--,o--,0>o||a[l]!==i[o]){var c=`
`+a[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=o);break}}}finally{Wr=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?Fn(e):""}function uu(e){switch(e.tag){case 5:return Fn(e.type);case 16:return Fn("Lazy");case 13:return Fn("Suspense");case 19:return Fn("SuspenseList");case 0:case 2:case 15:return e=Or(e.type,!1),e;case 11:return e=Or(e.type.render,!1),e;case 1:return e=Or(e.type,!0),e;default:return""}}function fa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Qt:return"Portal";case pa:return"Profiler";case pi:return"StrictMode";case ha:return"Suspense";case ma:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ao:return(e.displayName||"Context")+".Consumer";case zo:return(e._context.displayName||"Context")+".Provider";case hi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mi:return t=e.displayName||null,t!==null?t:fa(e.type)||"Memo";case it:t=e._payload,e=e._init;try{return fa(e(t))}catch{}}return null}function pu(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fa(t);case 8:return t===pi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hu(e){var t=Fo(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var a=s.get,i=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function js(e){e._valueTracker||(e._valueTracker=hu(e))}function Lo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),r="";return e&&(r=Fo(e)?e.checked?"true":"false":e.value),e=r,e!==s?(t.setValue(e),!0):!1}function Gs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ga(e,t){var s=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function cl(e,t){var s=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;s=jt(t.value!=null?t.value:s),e._wrapperState={initialChecked:r,initialValue:s,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Do(e,t){t=t.checked,t!=null&&ui(e,"checked",t,!1)}function xa(e,t){Do(e,t);var s=jt(t.value),r=t.type;if(s!=null)r==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ya(e,t.type,s):t.hasOwnProperty("defaultValue")&&ya(e,t.type,jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function dl(e,t,s){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,s||t===e.value||(e.value=t),e.defaultValue=t}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function ya(e,t,s){(t!=="number"||Gs(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var Ln=Array.isArray;function on(e,t,s,r){if(e=e.options,t){t={};for(var a=0;a<s.length;a++)t["$"+s[a]]=!0;for(s=0;s<e.length;s++)a=t.hasOwnProperty("$"+e[s].value),e[s].selected!==a&&(e[s].selected=a),a&&r&&(e[s].defaultSelected=!0)}else{for(s=""+jt(s),t=null,a=0;a<e.length;a++){if(e[a].value===s){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function va(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ul(e,t){var s=t.value;if(s==null){if(s=t.children,t=t.defaultValue,s!=null){if(t!=null)throw Error(N(92));if(Ln(s)){if(1<s.length)throw Error(N(93));s=s[0]}t=s}t==null&&(t=""),s=t}e._wrapperState={initialValue:jt(s)}}function Mo(e,t){var s=jt(t.value),r=jt(t.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),t.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),r!=null&&(e.defaultValue=""+r)}function pl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ro(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ja(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ro(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ks,Io=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,s,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,s,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ks=ks||document.createElement("div"),ks.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ks.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qn(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var Rn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mu=["Webkit","ms","Moz","O"];Object.keys(Rn).forEach(function(e){mu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rn[t]=Rn[e]})});function Wo(e,t,s){return t==null||typeof t=="boolean"||t===""?"":s||typeof t!="number"||t===0||Rn.hasOwnProperty(e)&&Rn[e]?(""+t).trim():t+"px"}function Oo(e,t){e=e.style;for(var s in t)if(t.hasOwnProperty(s)){var r=s.indexOf("--")===0,a=Wo(s,t[s],r);s==="float"&&(s="cssFloat"),r?e.setProperty(s,a):e[s]=a}}var fu=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ka(e,t){if(t){if(fu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function ba(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wa=null;function fi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Na=null,cn=null,dn=null;function hl(e){if(e=hs(e)){if(typeof Na!="function")throw Error(N(280));var t=e.stateNode;t&&(t=wr(t),Na(e.stateNode,e.type,t))}}function Ho(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Uo(){if(cn){var e=cn,t=dn;if(dn=cn=null,hl(e),t)for(e=0;e<t.length;e++)hl(t[e])}}function Vo(e,t){return e(t)}function $o(){}var Hr=!1;function Ko(e,t,s){if(Hr)return e(t,s);Hr=!0;try{return Vo(e,t,s)}finally{Hr=!1,(cn!==null||dn!==null)&&($o(),Uo())}}function Qn(e,t){var s=e.stateNode;if(s===null)return null;var r=wr(s);if(r===null)return null;s=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(N(231,t,typeof s));return s}var Sa=!1;if(et)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){Sa=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{Sa=!1}function gu(e,t,s,r,a,i,l,o,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(s,u)}catch(g){this.onError(g)}}var In=!1,qs=null,Qs=!1,Ca=null,xu={onError:function(e){In=!0,qs=e}};function yu(e,t,s,r,a,i,l,o,c){In=!1,qs=null,gu.apply(xu,arguments)}function vu(e,t,s,r,a,i,l,o,c){if(yu.apply(this,arguments),In){if(In){var u=qs;In=!1,qs=null}else throw Error(N(198));Qs||(Qs=!0,Ca=u)}}function Vt(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function Go(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ml(e){if(Vt(e)!==e)throw Error(N(188))}function ju(e){var t=e.alternate;if(!t){if(t=Vt(e),t===null)throw Error(N(188));return t!==e?null:e}for(var s=e,r=t;;){var a=s.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){s=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===s)return ml(a),e;if(i===r)return ml(a),t;i=i.sibling}throw Error(N(188))}if(s.return!==r.return)s=a,r=i;else{for(var l=!1,o=a.child;o;){if(o===s){l=!0,s=a,r=i;break}if(o===r){l=!0,r=a,s=i;break}o=o.sibling}if(!l){for(o=i.child;o;){if(o===s){l=!0,s=i,r=a;break}if(o===r){l=!0,r=i,s=a;break}o=o.sibling}if(!l)throw Error(N(189))}}if(s.alternate!==r)throw Error(N(190))}if(s.tag!==3)throw Error(N(188));return s.stateNode.current===s?e:t}function qo(e){return e=ju(e),e!==null?Qo(e):null}function Qo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qo(e);if(t!==null)return t;e=e.sibling}return null}var Yo=_e.unstable_scheduleCallback,fl=_e.unstable_cancelCallback,ku=_e.unstable_shouldYield,bu=_e.unstable_requestPaint,X=_e.unstable_now,wu=_e.unstable_getCurrentPriorityLevel,gi=_e.unstable_ImmediatePriority,Xo=_e.unstable_UserBlockingPriority,Ys=_e.unstable_NormalPriority,Nu=_e.unstable_LowPriority,Zo=_e.unstable_IdlePriority,vr=null,Ke=null;function Su(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(vr,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:Pu,Cu=Math.log,_u=Math.LN2;function Pu(e){return e>>>=0,e===0?32:31-(Cu(e)/_u|0)|0}var bs=64,ws=4194304;function Dn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xs(e,t){var s=e.pendingLanes;if(s===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,l=s&268435455;if(l!==0){var o=l&~a;o!==0?r=Dn(o):(i&=l,i!==0&&(r=Dn(i)))}else l=s&~a,l!==0?r=Dn(l):i!==0&&(r=Dn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=s&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)s=31-We(t),a=1<<s,r|=e[s],t&=~a;return r}function Bu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tu(e,t){for(var s=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-We(i),o=1<<l,c=a[l];c===-1?(!(o&s)||o&r)&&(a[l]=Bu(o,t)):c<=t&&(e.expiredLanes|=o),i&=~o}}function _a(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jo(){var e=bs;return bs<<=1,!(bs&4194240)&&(bs=64),e}function Ur(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function us(e,t,s){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=s}function zu(e,t){var s=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<s;){var a=31-We(s),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,s&=~i}}function xi(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var r=31-We(s),a=1<<r;a&t|e[r]&t&&(e[r]|=t),s&=~a}}var I=0;function ec(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var tc,yi,nc,sc,rc,Pa=!1,Ns=[],pt=null,ht=null,mt=null,Yn=new Map,Xn=new Map,ot=[],Au="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gl(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":ht=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":Yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function Pn(e,t,s,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:s,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=hs(t),t!==null&&yi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Eu(e,t,s,r,a){switch(t){case"focusin":return pt=Pn(pt,e,t,s,r,a),!0;case"dragenter":return ht=Pn(ht,e,t,s,r,a),!0;case"mouseover":return mt=Pn(mt,e,t,s,r,a),!0;case"pointerover":var i=a.pointerId;return Yn.set(i,Pn(Yn.get(i)||null,e,t,s,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Xn.set(i,Pn(Xn.get(i)||null,e,t,s,r,a)),!0}return!1}function ac(e){var t=At(e.target);if(t!==null){var s=Vt(t);if(s!==null){if(t=s.tag,t===13){if(t=Go(s),t!==null){e.blockedOn=t,rc(e.priority,function(){nc(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ms(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=Ba(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var r=new s.constructor(s.type,s);wa=r,s.target.dispatchEvent(r),wa=null}else return t=hs(s),t!==null&&yi(t),e.blockedOn=s,!1;t.shift()}return!0}function xl(e,t,s){Ms(e)&&s.delete(t)}function Fu(){Pa=!1,pt!==null&&Ms(pt)&&(pt=null),ht!==null&&Ms(ht)&&(ht=null),mt!==null&&Ms(mt)&&(mt=null),Yn.forEach(xl),Xn.forEach(xl)}function Bn(e,t){e.blockedOn===t&&(e.blockedOn=null,Pa||(Pa=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,Fu)))}function Zn(e){function t(a){return Bn(a,e)}if(0<Ns.length){Bn(Ns[0],e);for(var s=1;s<Ns.length;s++){var r=Ns[s];r.blockedOn===e&&(r.blockedOn=null)}}for(pt!==null&&Bn(pt,e),ht!==null&&Bn(ht,e),mt!==null&&Bn(mt,e),Yn.forEach(t),Xn.forEach(t),s=0;s<ot.length;s++)r=ot[s],r.blockedOn===e&&(r.blockedOn=null);for(;0<ot.length&&(s=ot[0],s.blockedOn===null);)ac(s),s.blockedOn===null&&ot.shift()}var un=rt.ReactCurrentBatchConfig,Zs=!0;function Lu(e,t,s,r){var a=I,i=un.transition;un.transition=null;try{I=1,vi(e,t,s,r)}finally{I=a,un.transition=i}}function Du(e,t,s,r){var a=I,i=un.transition;un.transition=null;try{I=4,vi(e,t,s,r)}finally{I=a,un.transition=i}}function vi(e,t,s,r){if(Zs){var a=Ba(e,t,s,r);if(a===null)Jr(e,t,r,Js,s),gl(e,r);else if(Eu(a,e,t,s,r))r.stopPropagation();else if(gl(e,r),t&4&&-1<Au.indexOf(e)){for(;a!==null;){var i=hs(a);if(i!==null&&tc(i),i=Ba(e,t,s,r),i===null&&Jr(e,t,r,Js,s),i===a)break;a=i}a!==null&&r.stopPropagation()}else Jr(e,t,r,null,s)}}var Js=null;function Ba(e,t,s,r){if(Js=null,e=fi(r),e=At(e),e!==null)if(t=Vt(e),t===null)e=null;else if(s=t.tag,s===13){if(e=Go(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Js=e,null}function ic(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wu()){case gi:return 1;case Xo:return 4;case Ys:case Nu:return 16;case Zo:return 536870912;default:return 16}default:return 16}}var dt=null,ji=null,Rs=null;function lc(){if(Rs)return Rs;var e,t=ji,s=t.length,r,a="value"in dt?dt.value:dt.textContent,i=a.length;for(e=0;e<s&&t[e]===a[e];e++);var l=s-e;for(r=1;r<=l&&t[s-r]===a[i-r];r++);return Rs=a.slice(e,1<r?1-r:void 0)}function Is(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ss(){return!0}function yl(){return!1}function Be(e){function t(s,r,a,i,l){this._reactName=s,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(s=e[o],this[o]=s?s(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ss:yl,this.isPropagationStopped=yl,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ss)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ss)},persist:function(){},isPersistent:Ss}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ki=Be(wn),ps=q({},wn,{view:0,detail:0}),Mu=Be(ps),Vr,$r,Tn,jr=q({},ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tn&&(Tn&&e.type==="mousemove"?(Vr=e.screenX-Tn.screenX,$r=e.screenY-Tn.screenY):$r=Vr=0,Tn=e),Vr)},movementY:function(e){return"movementY"in e?e.movementY:$r}}),vl=Be(jr),Ru=q({},jr,{dataTransfer:0}),Iu=Be(Ru),Wu=q({},ps,{relatedTarget:0}),Kr=Be(Wu),Ou=q({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Hu=Be(Ou),Uu=q({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vu=Be(Uu),$u=q({},wn,{data:0}),jl=Be($u),Ku={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qu[e])?!!t[e]:!1}function bi(){return Qu}var Yu=q({},ps,{key:function(e){if(e.key){var t=Ku[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Is(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bi,charCode:function(e){return e.type==="keypress"?Is(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Is(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xu=Be(Yu),Zu=q({},jr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kl=Be(Zu),Ju=q({},ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bi}),ep=Be(Ju),tp=q({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),np=Be(tp),sp=q({},jr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rp=Be(sp),ap=[9,13,27,32],wi=et&&"CompositionEvent"in window,Wn=null;et&&"documentMode"in document&&(Wn=document.documentMode);var ip=et&&"TextEvent"in window&&!Wn,oc=et&&(!wi||Wn&&8<Wn&&11>=Wn),bl=" ",wl=!1;function cc(e,t){switch(e){case"keyup":return ap.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function lp(e,t){switch(e){case"compositionend":return dc(t);case"keypress":return t.which!==32?null:(wl=!0,bl);case"textInput":return e=t.data,e===bl&&wl?null:e;default:return null}}function op(e,t){if(Xt)return e==="compositionend"||!wi&&cc(e,t)?(e=lc(),Rs=ji=dt=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oc&&t.locale!=="ko"?null:t.data;default:return null}}var cp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cp[e.type]:t==="textarea"}function uc(e,t,s,r){Ho(r),t=er(t,"onChange"),0<t.length&&(s=new ki("onChange","change",null,s,r),e.push({event:s,listeners:t}))}var On=null,Jn=null;function dp(e){bc(e,0)}function kr(e){var t=en(e);if(Lo(t))return e}function up(e,t){if(e==="change")return t}var pc=!1;if(et){var Gr;if(et){var qr="oninput"in document;if(!qr){var Sl=document.createElement("div");Sl.setAttribute("oninput","return;"),qr=typeof Sl.oninput=="function"}Gr=qr}else Gr=!1;pc=Gr&&(!document.documentMode||9<document.documentMode)}function Cl(){On&&(On.detachEvent("onpropertychange",hc),Jn=On=null)}function hc(e){if(e.propertyName==="value"&&kr(Jn)){var t=[];uc(t,Jn,e,fi(e)),Ko(dp,t)}}function pp(e,t,s){e==="focusin"?(Cl(),On=t,Jn=s,On.attachEvent("onpropertychange",hc)):e==="focusout"&&Cl()}function hp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kr(Jn)}function mp(e,t){if(e==="click")return kr(t)}function fp(e,t){if(e==="input"||e==="change")return kr(t)}function gp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var He=typeof Object.is=="function"?Object.is:gp;function es(e,t){if(He(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),r=Object.keys(t);if(s.length!==r.length)return!1;for(r=0;r<s.length;r++){var a=s[r];if(!ua.call(t,a)||!He(e[a],t[a]))return!1}return!0}function _l(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pl(e,t){var s=_l(e);e=0;for(var r;s;){if(s.nodeType===3){if(r=e+s.textContent.length,e<=t&&r>=t)return{node:s,offset:t-e};e=r}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=_l(s)}}function mc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?mc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fc(){for(var e=window,t=Gs();t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=Gs(e.document)}return t}function Ni(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xp(e){var t=fc(),s=e.focusedElem,r=e.selectionRange;if(t!==s&&s&&s.ownerDocument&&mc(s.ownerDocument.documentElement,s)){if(r!==null&&Ni(s)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in s)s.selectionStart=t,s.selectionEnd=Math.min(e,s.value.length);else if(e=(t=s.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=s.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Pl(s,i);var l=Pl(s,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=s;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<t.length;s++)e=t[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yp=et&&"documentMode"in document&&11>=document.documentMode,Zt=null,Ta=null,Hn=null,za=!1;function Bl(e,t,s){var r=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;za||Zt==null||Zt!==Gs(r)||(r=Zt,"selectionStart"in r&&Ni(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hn&&es(Hn,r)||(Hn=r,r=er(Ta,"onSelect"),0<r.length&&(t=new ki("onSelect","select",null,t,s),e.push({event:t,listeners:r}),t.target=Zt)))}function Cs(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var Jt={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionend:Cs("Transition","TransitionEnd")},Qr={},gc={};et&&(gc=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function br(e){if(Qr[e])return Qr[e];if(!Jt[e])return e;var t=Jt[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in gc)return Qr[e]=t[s];return e}var xc=br("animationend"),yc=br("animationiteration"),vc=br("animationstart"),jc=br("transitionend"),kc=new Map,Tl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wt(e,t){kc.set(e,t),Ut(t,[e])}for(var Yr=0;Yr<Tl.length;Yr++){var Xr=Tl[Yr],vp=Xr.toLowerCase(),jp=Xr[0].toUpperCase()+Xr.slice(1);wt(vp,"on"+jp)}wt(xc,"onAnimationEnd");wt(yc,"onAnimationIteration");wt(vc,"onAnimationStart");wt("dblclick","onDoubleClick");wt("focusin","onFocus");wt("focusout","onBlur");wt(jc,"onTransitionEnd");mn("onMouseEnter",["mouseout","mouseover"]);mn("onMouseLeave",["mouseout","mouseover"]);mn("onPointerEnter",["pointerout","pointerover"]);mn("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));function zl(e,t,s){var r=e.type||"unknown-event";e.currentTarget=s,vu(r,t,void 0,e),e.currentTarget=null}function bc(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var r=e[s],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var o=r[l],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==i&&a.isPropagationStopped())break e;zl(a,o,u),i=c}else for(l=0;l<r.length;l++){if(o=r[l],c=o.instance,u=o.currentTarget,o=o.listener,c!==i&&a.isPropagationStopped())break e;zl(a,o,u),i=c}}}if(Qs)throw e=Ca,Qs=!1,Ca=null,e}function H(e,t){var s=t[Da];s===void 0&&(s=t[Da]=new Set);var r=e+"__bubble";s.has(r)||(wc(t,e,2,!1),s.add(r))}function Zr(e,t,s){var r=0;t&&(r|=4),wc(s,e,r,t)}var _s="_reactListening"+Math.random().toString(36).slice(2);function ts(e){if(!e[_s]){e[_s]=!0,To.forEach(function(s){s!=="selectionchange"&&(kp.has(s)||Zr(s,!1,e),Zr(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_s]||(t[_s]=!0,Zr("selectionchange",!1,t))}}function wc(e,t,s,r){switch(ic(t)){case 1:var a=Lu;break;case 4:a=Du;break;default:a=vi}s=a.bind(null,t,s,e),a=void 0,!Sa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,s,{capture:!0,passive:a}):e.addEventListener(t,s,!0):a!==void 0?e.addEventListener(t,s,{passive:a}):e.addEventListener(t,s,!1)}function Jr(e,t,s,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var o=r.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;l=l.return}for(;o!==null;){if(l=At(o),l===null)return;if(c=l.tag,c===5||c===6){r=i=l;continue e}o=o.parentNode}}r=r.return}Ko(function(){var u=i,g=fi(s),h=[];e:{var m=kc.get(e);if(m!==void 0){var v=ki,y=e;switch(e){case"keypress":if(Is(s)===0)break e;case"keydown":case"keyup":v=Xu;break;case"focusin":y="focus",v=Kr;break;case"focusout":y="blur",v=Kr;break;case"beforeblur":case"afterblur":v=Kr;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=vl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Iu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ep;break;case xc:case yc:case vc:v=Hu;break;case jc:v=np;break;case"scroll":v=Mu;break;case"wheel":v=rp;break;case"copy":case"cut":case"paste":v=Vu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=kl}var x=(t&4)!==0,w=!x&&e==="scroll",p=x?m!==null?m+"Capture":null:m;x=[];for(var d=u,f;d!==null;){f=d;var k=f.stateNode;if(f.tag===5&&k!==null&&(f=k,p!==null&&(k=Qn(d,p),k!=null&&x.push(ns(d,k,f)))),w)break;d=d.return}0<x.length&&(m=new v(m,y,null,s,g),h.push({event:m,listeners:x}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&s!==wa&&(y=s.relatedTarget||s.fromElement)&&(At(y)||y[tt]))break e;if((v||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=s.relatedTarget||s.toElement,v=u,y=y?At(y):null,y!==null&&(w=Vt(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(x=vl,k="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=kl,k="onPointerLeave",p="onPointerEnter",d="pointer"),w=v==null?m:en(v),f=y==null?m:en(y),m=new x(k,d+"leave",v,s,g),m.target=w,m.relatedTarget=f,k=null,At(g)===u&&(x=new x(p,d+"enter",y,s,g),x.target=f,x.relatedTarget=w,k=x),w=k,v&&y)t:{for(x=v,p=y,d=0,f=x;f;f=qt(f))d++;for(f=0,k=p;k;k=qt(k))f++;for(;0<d-f;)x=qt(x),d--;for(;0<f-d;)p=qt(p),f--;for(;d--;){if(x===p||p!==null&&x===p.alternate)break t;x=qt(x),p=qt(p)}x=null}else x=null;v!==null&&Al(h,m,v,x,!1),y!==null&&w!==null&&Al(h,w,y,x,!0)}}e:{if(m=u?en(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var _=up;else if(Nl(m))if(pc)_=fp;else{_=hp;var j=pp}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(_=mp);if(_&&(_=_(e,u))){uc(h,_,s,g);break e}j&&j(e,m,u),e==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&ya(m,"number",m.value)}switch(j=u?en(u):window,e){case"focusin":(Nl(j)||j.contentEditable==="true")&&(Zt=j,Ta=u,Hn=null);break;case"focusout":Hn=Ta=Zt=null;break;case"mousedown":za=!0;break;case"contextmenu":case"mouseup":case"dragend":za=!1,Bl(h,s,g);break;case"selectionchange":if(yp)break;case"keydown":case"keyup":Bl(h,s,g)}var P;if(wi)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else Xt?cc(e,s)&&(B="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(B="onCompositionStart");B&&(oc&&s.locale!=="ko"&&(Xt||B!=="onCompositionStart"?B==="onCompositionEnd"&&Xt&&(P=lc()):(dt=g,ji="value"in dt?dt.value:dt.textContent,Xt=!0)),j=er(u,B),0<j.length&&(B=new jl(B,e,null,s,g),h.push({event:B,listeners:j}),P?B.data=P:(P=dc(s),P!==null&&(B.data=P)))),(P=ip?lp(e,s):op(e,s))&&(u=er(u,"onBeforeInput"),0<u.length&&(g=new jl("onBeforeInput","beforeinput",null,s,g),h.push({event:g,listeners:u}),g.data=P))}bc(h,t)})}function ns(e,t,s){return{instance:e,listener:t,currentTarget:s}}function er(e,t){for(var s=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Qn(e,s),i!=null&&r.unshift(ns(e,i,a)),i=Qn(e,t),i!=null&&r.push(ns(e,i,a))),e=e.return}return r}function qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Al(e,t,s,r,a){for(var i=t._reactName,l=[];s!==null&&s!==r;){var o=s,c=o.alternate,u=o.stateNode;if(c!==null&&c===r)break;o.tag===5&&u!==null&&(o=u,a?(c=Qn(s,i),c!=null&&l.unshift(ns(s,c,o))):a||(c=Qn(s,i),c!=null&&l.push(ns(s,c,o)))),s=s.return}l.length!==0&&e.push({event:t,listeners:l})}var bp=/\r\n?/g,wp=/\u0000|\uFFFD/g;function El(e){return(typeof e=="string"?e:""+e).replace(bp,`
`).replace(wp,"")}function Ps(e,t,s){if(t=El(t),El(e)!==t&&s)throw Error(N(425))}function tr(){}var Aa=null,Ea=null;function Fa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var La=typeof setTimeout=="function"?setTimeout:void 0,Np=typeof clearTimeout=="function"?clearTimeout:void 0,Fl=typeof Promise=="function"?Promise:void 0,Sp=typeof queueMicrotask=="function"?queueMicrotask:typeof Fl<"u"?function(e){return Fl.resolve(null).then(e).catch(Cp)}:La;function Cp(e){setTimeout(function(){throw e})}function ea(e,t){var s=t,r=0;do{var a=s.nextSibling;if(e.removeChild(s),a&&a.nodeType===8)if(s=a.data,s==="/$"){if(r===0){e.removeChild(a),Zn(t);return}r--}else s!=="$"&&s!=="$?"&&s!=="$!"||r++;s=a}while(s);Zn(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ll(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(t===0)return e;t--}else s==="/$"&&t++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),$e="__reactFiber$"+Nn,ss="__reactProps$"+Nn,tt="__reactContainer$"+Nn,Da="__reactEvents$"+Nn,_p="__reactListeners$"+Nn,Pp="__reactHandles$"+Nn;function At(e){var t=e[$e];if(t)return t;for(var s=e.parentNode;s;){if(t=s[tt]||s[$e]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=Ll(e);e!==null;){if(s=e[$e])return s;e=Ll(e)}return t}e=s,s=e.parentNode}return null}function hs(e){return e=e[$e]||e[tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function wr(e){return e[ss]||null}var Ma=[],tn=-1;function Nt(e){return{current:e}}function U(e){0>tn||(e.current=Ma[tn],Ma[tn]=null,tn--)}function O(e,t){tn++,Ma[tn]=e.current,e.current=t}var kt={},he=Nt(kt),ke=Nt(!1),Mt=kt;function fn(e,t){var s=e.type.contextTypes;if(!s)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in s)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function be(e){return e=e.childContextTypes,e!=null}function nr(){U(ke),U(he)}function Dl(e,t,s){if(he.current!==kt)throw Error(N(168));O(he,t),O(ke,s)}function Nc(e,t,s){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return s;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(N(108,pu(e)||"Unknown",a));return q({},s,r)}function sr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Mt=he.current,O(he,e),O(ke,ke.current),!0}function Ml(e,t,s){var r=e.stateNode;if(!r)throw Error(N(169));s?(e=Nc(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,U(ke),U(he),O(he,e)):U(ke),O(ke,s)}var Qe=null,Nr=!1,ta=!1;function Sc(e){Qe===null?Qe=[e]:Qe.push(e)}function Bp(e){Nr=!0,Sc(e)}function St(){if(!ta&&Qe!==null){ta=!0;var e=0,t=I;try{var s=Qe;for(I=1;e<s.length;e++){var r=s[e];do r=r(!0);while(r!==null)}Qe=null,Nr=!1}catch(a){throw Qe!==null&&(Qe=Qe.slice(e+1)),Yo(gi,St),a}finally{I=t,ta=!1}}return null}var nn=[],sn=0,rr=null,ar=0,Te=[],ze=0,Rt=null,Ye=1,Xe="";function Tt(e,t){nn[sn++]=ar,nn[sn++]=rr,rr=e,ar=t}function Cc(e,t,s){Te[ze++]=Ye,Te[ze++]=Xe,Te[ze++]=Rt,Rt=e;var r=Ye;e=Xe;var a=32-We(r)-1;r&=~(1<<a),s+=1;var i=32-We(t)+a;if(30<i){var l=a-a%5;i=(r&(1<<l)-1).toString(32),r>>=l,a-=l,Ye=1<<32-We(t)+a|s<<a|r,Xe=i+e}else Ye=1<<i|s<<a|r,Xe=e}function Si(e){e.return!==null&&(Tt(e,1),Cc(e,1,0))}function Ci(e){for(;e===rr;)rr=nn[--sn],nn[sn]=null,ar=nn[--sn],nn[sn]=null;for(;e===Rt;)Rt=Te[--ze],Te[ze]=null,Xe=Te[--ze],Te[ze]=null,Ye=Te[--ze],Te[ze]=null}var Ce=null,Se=null,$=!1,Ie=null;function _c(e,t){var s=Ae(5,null,null,0);s.elementType="DELETED",s.stateNode=t,s.return=e,t=e.deletions,t===null?(e.deletions=[s],e.flags|=16):t.push(s)}function Rl(e,t){switch(e.tag){case 5:var s=e.type;return t=t.nodeType!==1||s.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,Se=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(s=Rt!==null?{id:Ye,overflow:Xe}:null,e.memoizedState={dehydrated:t,treeContext:s,retryLane:1073741824},s=Ae(18,null,null,0),s.stateNode=t,s.return=e,e.child=s,Ce=e,Se=null,!0):!1;default:return!1}}function Ra(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ia(e){if($){var t=Se;if(t){var s=t;if(!Rl(e,t)){if(Ra(e))throw Error(N(418));t=ft(s.nextSibling);var r=Ce;t&&Rl(e,t)?_c(r,s):(e.flags=e.flags&-4097|2,$=!1,Ce=e)}}else{if(Ra(e))throw Error(N(418));e.flags=e.flags&-4097|2,$=!1,Ce=e}}}function Il(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Bs(e){if(e!==Ce)return!1;if(!$)return Il(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fa(e.type,e.memoizedProps)),t&&(t=Se)){if(Ra(e))throw Pc(),Error(N(418));for(;t;)_c(e,t),t=ft(t.nextSibling)}if(Il(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(t===0){Se=ft(e.nextSibling);break e}t--}else s!=="$"&&s!=="$!"&&s!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=Ce?ft(e.stateNode.nextSibling):null;return!0}function Pc(){for(var e=Se;e;)e=ft(e.nextSibling)}function gn(){Se=Ce=null,$=!1}function _i(e){Ie===null?Ie=[e]:Ie.push(e)}var Tp=rt.ReactCurrentBatchConfig;function zn(e,t,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(N(309));var r=s.stateNode}if(!r)throw Error(N(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var o=a.refs;l===null?delete o[i]:o[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!s._owner)throw Error(N(290,e))}return e}function Ts(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Wl(e){var t=e._init;return t(e._payload)}function Bc(e){function t(p,d){if(e){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function s(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function a(p,d){return p=vt(p,d),p.index=0,p.sibling=null,p}function i(p,d,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,d,f,k){return d===null||d.tag!==6?(d=oa(f,p.mode,k),d.return=p,d):(d=a(d,f),d.return=p,d)}function c(p,d,f,k){var _=f.type;return _===Yt?g(p,d,f.props.children,k,f.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===it&&Wl(_)===d.type)?(k=a(d,f.props),k.ref=zn(p,d,f),k.return=p,k):(k=Ks(f.type,f.key,f.props,null,p.mode,k),k.ref=zn(p,d,f),k.return=p,k)}function u(p,d,f,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=ca(f,p.mode,k),d.return=p,d):(d=a(d,f.children||[]),d.return=p,d)}function g(p,d,f,k,_){return d===null||d.tag!==7?(d=Dt(f,p.mode,k,_),d.return=p,d):(d=a(d,f),d.return=p,d)}function h(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=oa(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case vs:return f=Ks(d.type,d.key,d.props,null,p.mode,f),f.ref=zn(p,null,d),f.return=p,f;case Qt:return d=ca(d,p.mode,f),d.return=p,d;case it:var k=d._init;return h(p,k(d._payload),f)}if(Ln(d)||Cn(d))return d=Dt(d,p.mode,f,null),d.return=p,d;Ts(p,d)}return null}function m(p,d,f,k){var _=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return _!==null?null:o(p,d,""+f,k);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case vs:return f.key===_?c(p,d,f,k):null;case Qt:return f.key===_?u(p,d,f,k):null;case it:return _=f._init,m(p,d,_(f._payload),k)}if(Ln(f)||Cn(f))return _!==null?null:g(p,d,f,k,null);Ts(p,f)}return null}function v(p,d,f,k,_){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(f)||null,o(d,p,""+k,_);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case vs:return p=p.get(k.key===null?f:k.key)||null,c(d,p,k,_);case Qt:return p=p.get(k.key===null?f:k.key)||null,u(d,p,k,_);case it:var j=k._init;return v(p,d,f,j(k._payload),_)}if(Ln(k)||Cn(k))return p=p.get(f)||null,g(d,p,k,_,null);Ts(d,k)}return null}function y(p,d,f,k){for(var _=null,j=null,P=d,B=d=0,b=null;P!==null&&B<f.length;B++){P.index>B?(b=P,P=null):b=P.sibling;var A=m(p,P,f[B],k);if(A===null){P===null&&(P=b);break}e&&P&&A.alternate===null&&t(p,P),d=i(A,d,B),j===null?_=A:j.sibling=A,j=A,P=b}if(B===f.length)return s(p,P),$&&Tt(p,B),_;if(P===null){for(;B<f.length;B++)P=h(p,f[B],k),P!==null&&(d=i(P,d,B),j===null?_=P:j.sibling=P,j=P);return $&&Tt(p,B),_}for(P=r(p,P);B<f.length;B++)b=v(P,p,B,f[B],k),b!==null&&(e&&b.alternate!==null&&P.delete(b.key===null?B:b.key),d=i(b,d,B),j===null?_=b:j.sibling=b,j=b);return e&&P.forEach(function(Z){return t(p,Z)}),$&&Tt(p,B),_}function x(p,d,f,k){var _=Cn(f);if(typeof _!="function")throw Error(N(150));if(f=_.call(f),f==null)throw Error(N(151));for(var j=_=null,P=d,B=d=0,b=null,A=f.next();P!==null&&!A.done;B++,A=f.next()){P.index>B?(b=P,P=null):b=P.sibling;var Z=m(p,P,A.value,k);if(Z===null){P===null&&(P=b);break}e&&P&&Z.alternate===null&&t(p,P),d=i(Z,d,B),j===null?_=Z:j.sibling=Z,j=Z,P=b}if(A.done)return s(p,P),$&&Tt(p,B),_;if(P===null){for(;!A.done;B++,A=f.next())A=h(p,A.value,k),A!==null&&(d=i(A,d,B),j===null?_=A:j.sibling=A,j=A);return $&&Tt(p,B),_}for(P=r(p,P);!A.done;B++,A=f.next())A=v(P,p,B,A.value,k),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?B:A.key),d=i(A,d,B),j===null?_=A:j.sibling=A,j=A);return e&&P.forEach(function(C){return t(p,C)}),$&&Tt(p,B),_}function w(p,d,f,k){if(typeof f=="object"&&f!==null&&f.type===Yt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case vs:e:{for(var _=f.key,j=d;j!==null;){if(j.key===_){if(_=f.type,_===Yt){if(j.tag===7){s(p,j.sibling),d=a(j,f.props.children),d.return=p,p=d;break e}}else if(j.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===it&&Wl(_)===j.type){s(p,j.sibling),d=a(j,f.props),d.ref=zn(p,j,f),d.return=p,p=d;break e}s(p,j);break}else t(p,j);j=j.sibling}f.type===Yt?(d=Dt(f.props.children,p.mode,k,f.key),d.return=p,p=d):(k=Ks(f.type,f.key,f.props,null,p.mode,k),k.ref=zn(p,d,f),k.return=p,p=k)}return l(p);case Qt:e:{for(j=f.key;d!==null;){if(d.key===j)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){s(p,d.sibling),d=a(d,f.children||[]),d.return=p,p=d;break e}else{s(p,d);break}else t(p,d);d=d.sibling}d=ca(f,p.mode,k),d.return=p,p=d}return l(p);case it:return j=f._init,w(p,d,j(f._payload),k)}if(Ln(f))return y(p,d,f,k);if(Cn(f))return x(p,d,f,k);Ts(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(s(p,d.sibling),d=a(d,f),d.return=p,p=d):(s(p,d),d=oa(f,p.mode,k),d.return=p,p=d),l(p)):s(p,d)}return w}var xn=Bc(!0),Tc=Bc(!1),ir=Nt(null),lr=null,rn=null,Pi=null;function Bi(){Pi=rn=lr=null}function Ti(e){var t=ir.current;U(ir),e._currentValue=t}function Wa(e,t,s){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===s)break;e=e.return}}function pn(e,t){lr=e,Pi=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(Pi!==e)if(e={context:e,memoizedValue:t,next:null},rn===null){if(lr===null)throw Error(N(308));rn=e,lr.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return t}var Et=null;function zi(e){Et===null?Et=[e]:Et.push(e)}function zc(e,t,s,r){var a=t.interleaved;return a===null?(s.next=s,zi(t)):(s.next=a.next,a.next=s),t.interleaved=s,nt(e,r)}function nt(e,t){e.lanes|=t;var s=e.alternate;for(s!==null&&(s.lanes|=t),s=e,e=e.return;e!==null;)e.childLanes|=t,s=e.alternate,s!==null&&(s.childLanes|=t),s=e,e=e.return;return s.tag===3?s.stateNode:null}var lt=!1;function Ai(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ac(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t,s){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,nt(e,s)}return a=r.interleaved,a===null?(t.next=t,zi(r)):(t.next=a.next,a.next=t),r.interleaved=t,nt(e,s)}function Ws(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,s|=r,t.lanes=s,xi(e,s)}}function Ol(e,t){var s=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,s===r)){var a=null,i=null;if(s=s.firstBaseUpdate,s!==null){do{var l={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};i===null?a=i=l:i=i.next=l,s=s.next}while(s!==null);i===null?a=i=t:i=i.next=t}else a=i=t;s={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}function or(e,t,s,r){var a=e.updateQueue;lt=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var c=o,u=c.next;c.next=null,l===null?i=u:l.next=u,l=c;var g=e.alternate;g!==null&&(g=g.updateQueue,o=g.lastBaseUpdate,o!==l&&(o===null?g.firstBaseUpdate=u:o.next=u,g.lastBaseUpdate=c))}if(i!==null){var h=a.baseState;l=0,g=u=c=null,o=i;do{var m=o.lane,v=o.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:v,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=e,x=o;switch(m=t,v=s,x.tag){case 1:if(y=x.payload,typeof y=="function"){h=y.call(v,h,m);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,m=typeof y=="function"?y.call(v,h,m):y,m==null)break e;h=q({},h,m);break e;case 2:lt=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[o]:m.push(o))}else v={eventTime:v,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},g===null?(u=g=v,c=h):g=g.next=v,l|=m;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;m=o,o=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(g===null&&(c=h),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=g,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);Wt|=l,e.lanes=l,e.memoizedState=h}}function Hl(e,t,s){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=s,typeof a!="function")throw Error(N(191,a));a.call(r)}}}var ms={},Ge=Nt(ms),rs=Nt(ms),as=Nt(ms);function Ft(e){if(e===ms)throw Error(N(174));return e}function Ei(e,t){switch(O(as,t),O(rs,e),O(Ge,ms),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ja(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ja(t,e)}U(Ge),O(Ge,t)}function yn(){U(Ge),U(rs),U(as)}function Ec(e){Ft(as.current);var t=Ft(Ge.current),s=ja(t,e.type);t!==s&&(O(rs,e),O(Ge,s))}function Fi(e){rs.current===e&&(U(Ge),U(rs))}var K=Nt(0);function cr(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function Li(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var Os=rt.ReactCurrentDispatcher,sa=rt.ReactCurrentBatchConfig,It=0,G=null,ee=null,se=null,dr=!1,Un=!1,is=0,zp=0;function de(){throw Error(N(321))}function Di(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!He(e[s],t[s]))return!1;return!0}function Mi(e,t,s,r,a,i){if(It=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Os.current=e===null||e.memoizedState===null?Lp:Dp,e=s(r,a),Un){i=0;do{if(Un=!1,is=0,25<=i)throw Error(N(301));i+=1,se=ee=null,t.updateQueue=null,Os.current=Mp,e=s(r,a)}while(Un)}if(Os.current=ur,t=ee!==null&&ee.next!==null,It=0,se=ee=G=null,dr=!1,t)throw Error(N(300));return e}function Ri(){var e=is!==0;return is=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?G.memoizedState=se=e:se=se.next=e,se}function Le(){if(ee===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=se===null?G.memoizedState:se.next;if(t!==null)se=t,ee=e;else{if(e===null)throw Error(N(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},se===null?G.memoizedState=se=e:se=se.next=e}return se}function ls(e,t){return typeof t=="function"?t(e):t}function ra(e){var t=Le(),s=t.queue;if(s===null)throw Error(N(311));s.lastRenderedReducer=e;var r=ee,a=r.baseQueue,i=s.pending;if(i!==null){if(a!==null){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,s.pending=null}if(a!==null){i=a.next,r=r.baseState;var o=l=null,c=null,u=i;do{var g=u.lane;if((It&g)===g)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=h,l=r):c=c.next=h,G.lanes|=g,Wt|=g}u=u.next}while(u!==null&&u!==i);c===null?l=r:c.next=o,He(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,s.lastRenderedState=r}if(e=s.interleaved,e!==null){a=e;do i=a.lane,G.lanes|=i,Wt|=i,a=a.next;while(a!==e)}else a===null&&(s.lanes=0);return[t.memoizedState,s.dispatch]}function aa(e){var t=Le(),s=t.queue;if(s===null)throw Error(N(311));s.lastRenderedReducer=e;var r=s.dispatch,a=s.pending,i=t.memoizedState;if(a!==null){s.pending=null;var l=a=a.next;do i=e(i,l.action),l=l.next;while(l!==a);He(i,t.memoizedState)||(je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),s.lastRenderedState=i}return[i,r]}function Fc(){}function Lc(e,t){var s=G,r=Le(),a=t(),i=!He(r.memoizedState,a);if(i&&(r.memoizedState=a,je=!0),r=r.queue,Ii(Rc.bind(null,s,r,e),[e]),r.getSnapshot!==t||i||se!==null&&se.memoizedState.tag&1){if(s.flags|=2048,os(9,Mc.bind(null,s,r,a,t),void 0,null),re===null)throw Error(N(349));It&30||Dc(s,t,a)}return a}function Dc(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function Mc(e,t,s,r){t.value=s,t.getSnapshot=r,Ic(t)&&Wc(e)}function Rc(e,t,s){return s(function(){Ic(t)&&Wc(e)})}function Ic(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!He(e,s)}catch{return!0}}function Wc(e){var t=nt(e,1);t!==null&&Oe(t,e,1,-1)}function Ul(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:e},t.queue=e,e=e.dispatch=Fp.bind(null,G,e),[t.memoizedState,e]}function os(e,t,s,r){return e={tag:e,create:t,destroy:s,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(s=t.lastEffect,s===null?t.lastEffect=e.next=e:(r=s.next,s.next=e,e.next=r,t.lastEffect=e)),e}function Oc(){return Le().memoizedState}function Hs(e,t,s,r){var a=Ve();G.flags|=e,a.memoizedState=os(1|t,s,void 0,r===void 0?null:r)}function Sr(e,t,s,r){var a=Le();r=r===void 0?null:r;var i=void 0;if(ee!==null){var l=ee.memoizedState;if(i=l.destroy,r!==null&&Di(r,l.deps)){a.memoizedState=os(t,s,i,r);return}}G.flags|=e,a.memoizedState=os(1|t,s,i,r)}function Vl(e,t){return Hs(8390656,8,e,t)}function Ii(e,t){return Sr(2048,8,e,t)}function Hc(e,t){return Sr(4,2,e,t)}function Uc(e,t){return Sr(4,4,e,t)}function Vc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $c(e,t,s){return s=s!=null?s.concat([e]):null,Sr(4,4,Vc.bind(null,t,e),s)}function Wi(){}function Kc(e,t){var s=Le();t=t===void 0?null:t;var r=s.memoizedState;return r!==null&&t!==null&&Di(t,r[1])?r[0]:(s.memoizedState=[e,t],e)}function Gc(e,t){var s=Le();t=t===void 0?null:t;var r=s.memoizedState;return r!==null&&t!==null&&Di(t,r[1])?r[0]:(e=e(),s.memoizedState=[e,t],e)}function qc(e,t,s){return It&21?(He(s,t)||(s=Jo(),G.lanes|=s,Wt|=s,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=s)}function Ap(e,t){var s=I;I=s!==0&&4>s?s:4,e(!0);var r=sa.transition;sa.transition={};try{e(!1),t()}finally{I=s,sa.transition=r}}function Qc(){return Le().memoizedState}function Ep(e,t,s){var r=yt(e);if(s={lane:r,action:s,hasEagerState:!1,eagerState:null,next:null},Yc(e))Xc(t,s);else if(s=zc(e,t,s,r),s!==null){var a=fe();Oe(s,e,r,a),Zc(s,t,r)}}function Fp(e,t,s){var r=yt(e),a={lane:r,action:s,hasEagerState:!1,eagerState:null,next:null};if(Yc(e))Xc(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,o=i(l,s);if(a.hasEagerState=!0,a.eagerState=o,He(o,l)){var c=t.interleaved;c===null?(a.next=a,zi(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}s=zc(e,t,a,r),s!==null&&(a=fe(),Oe(s,e,r,a),Zc(s,t,r))}}function Yc(e){var t=e.alternate;return e===G||t!==null&&t===G}function Xc(e,t){Un=dr=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function Zc(e,t,s){if(s&4194240){var r=t.lanes;r&=e.pendingLanes,s|=r,t.lanes=s,xi(e,s)}}var ur={readContext:Fe,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},Lp={readContext:Fe,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:Vl,useImperativeHandle:function(e,t,s){return s=s!=null?s.concat([e]):null,Hs(4194308,4,Vc.bind(null,t,e),s)},useLayoutEffect:function(e,t){return Hs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hs(4,2,e,t)},useMemo:function(e,t){var s=Ve();return t=t===void 0?null:t,e=e(),s.memoizedState=[e,t],e},useReducer:function(e,t,s){var r=Ve();return t=s!==void 0?s(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ep.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:Ul,useDebugValue:Wi,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=Ul(!1),t=e[0];return e=Ap.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,s){var r=G,a=Ve();if($){if(s===void 0)throw Error(N(407));s=s()}else{if(s=t(),re===null)throw Error(N(349));It&30||Dc(r,t,s)}a.memoizedState=s;var i={value:s,getSnapshot:t};return a.queue=i,Vl(Rc.bind(null,r,i,e),[e]),r.flags|=2048,os(9,Mc.bind(null,r,i,s,t),void 0,null),s},useId:function(){var e=Ve(),t=re.identifierPrefix;if($){var s=Xe,r=Ye;s=(r&~(1<<32-We(r)-1)).toString(32)+s,t=":"+t+"R"+s,s=is++,0<s&&(t+="H"+s.toString(32)),t+=":"}else s=zp++,t=":"+t+"r"+s.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Dp={readContext:Fe,useCallback:Kc,useContext:Fe,useEffect:Ii,useImperativeHandle:$c,useInsertionEffect:Hc,useLayoutEffect:Uc,useMemo:Gc,useReducer:ra,useRef:Oc,useState:function(){return ra(ls)},useDebugValue:Wi,useDeferredValue:function(e){var t=Le();return qc(t,ee.memoizedState,e)},useTransition:function(){var e=ra(ls)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:Lc,useId:Qc,unstable_isNewReconciler:!1},Mp={readContext:Fe,useCallback:Kc,useContext:Fe,useEffect:Ii,useImperativeHandle:$c,useInsertionEffect:Hc,useLayoutEffect:Uc,useMemo:Gc,useReducer:aa,useRef:Oc,useState:function(){return aa(ls)},useDebugValue:Wi,useDeferredValue:function(e){var t=Le();return ee===null?t.memoizedState=e:qc(t,ee.memoizedState,e)},useTransition:function(){var e=aa(ls)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:Lc,useId:Qc,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var s in e)t[s]===void 0&&(t[s]=e[s]);return t}return t}function Oa(e,t,s,r){t=e.memoizedState,s=s(r,t),s=s==null?t:q({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Cr={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,t,s){e=e._reactInternals;var r=fe(),a=yt(e),i=Ze(r,a);i.payload=t,s!=null&&(i.callback=s),t=gt(e,i,a),t!==null&&(Oe(t,e,a,r),Ws(t,e,a))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var r=fe(),a=yt(e),i=Ze(r,a);i.tag=1,i.payload=t,s!=null&&(i.callback=s),t=gt(e,i,a),t!==null&&(Oe(t,e,a,r),Ws(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=fe(),r=yt(e),a=Ze(s,r);a.tag=2,t!=null&&(a.callback=t),t=gt(e,a,r),t!==null&&(Oe(t,e,r,s),Ws(t,e,r))}};function $l(e,t,s,r,a,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!es(s,r)||!es(a,i):!0}function Jc(e,t,s){var r=!1,a=kt,i=t.contextType;return typeof i=="object"&&i!==null?i=Fe(i):(a=be(t)?Mt:he.current,r=t.contextTypes,i=(r=r!=null)?fn(e,a):kt),t=new t(s,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Cr,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Kl(e,t,s,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,r),t.state!==e&&Cr.enqueueReplaceState(t,t.state,null)}function Ha(e,t,s,r){var a=e.stateNode;a.props=s,a.state=e.memoizedState,a.refs={},Ai(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Fe(i):(i=be(t)?Mt:he.current,a.context=fn(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Oa(e,t,i,s),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Cr.enqueueReplaceState(a,a.state,null),or(e,s,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,t){try{var s="",r=t;do s+=uu(r),r=r.return;while(r);var a=s}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function ia(e,t,s){return{value:e,source:null,stack:s??null,digest:t??null}}function Ua(e,t){try{console.error(t.value)}catch(s){setTimeout(function(){throw s})}}var Rp=typeof WeakMap=="function"?WeakMap:Map;function ed(e,t,s){s=Ze(-1,s),s.tag=3,s.payload={element:null};var r=t.value;return s.callback=function(){hr||(hr=!0,Ja=r),Ua(e,t)},s}function td(e,t,s){s=Ze(-1,s),s.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;s.payload=function(){return r(a)},s.callback=function(){Ua(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(s.callback=function(){Ua(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),s}function Gl(e,t,s){var r=e.pingCache;if(r===null){r=e.pingCache=new Rp;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(s)||(a.add(s),e=Zp.bind(null,e,t,s),t.then(e,e))}function ql(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ql(e,t,s,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(t=Ze(-1,1),t.tag=2,gt(s,t,1))),s.lanes|=1),e)}var Ip=rt.ReactCurrentOwner,je=!1;function me(e,t,s,r){t.child=e===null?Tc(t,null,s,r):xn(t,e.child,s,r)}function Yl(e,t,s,r,a){s=s.render;var i=t.ref;return pn(t,a),r=Mi(e,t,s,r,i,a),s=Ri(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,st(e,t,a)):($&&s&&Si(t),t.flags|=1,me(e,t,r,a),t.child)}function Xl(e,t,s,r,a){if(e===null){var i=s.type;return typeof i=="function"&&!qi(i)&&i.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(t.tag=15,t.type=i,nd(e,t,i,r,a)):(e=Ks(s.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var l=i.memoizedProps;if(s=s.compare,s=s!==null?s:es,s(l,r)&&e.ref===t.ref)return st(e,t,a)}return t.flags|=1,e=vt(i,r),e.ref=t.ref,e.return=t,t.child=e}function nd(e,t,s,r,a){if(e!==null){var i=e.memoizedProps;if(es(i,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,st(e,t,a)}return Va(e,t,s,r,a)}function sd(e,t,s){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(ln,Ne),Ne|=s;else{if(!(s&1073741824))return e=i!==null?i.baseLanes|s:s,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(ln,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:s,O(ln,Ne),Ne|=r}else i!==null?(r=i.baseLanes|s,t.memoizedState=null):r=s,O(ln,Ne),Ne|=r;return me(e,t,a,s),t.child}function rd(e,t){var s=t.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(t.flags|=512,t.flags|=2097152)}function Va(e,t,s,r,a){var i=be(s)?Mt:he.current;return i=fn(t,i),pn(t,a),s=Mi(e,t,s,r,i,a),r=Ri(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,st(e,t,a)):($&&r&&Si(t),t.flags|=1,me(e,t,s,a),t.child)}function Zl(e,t,s,r,a){if(be(s)){var i=!0;sr(t)}else i=!1;if(pn(t,a),t.stateNode===null)Us(e,t),Jc(t,s,r),Ha(t,s,r,a),r=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var c=l.context,u=s.contextType;typeof u=="object"&&u!==null?u=Fe(u):(u=be(s)?Mt:he.current,u=fn(t,u));var g=s.getDerivedStateFromProps,h=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==r||c!==u)&&Kl(t,l,r,u),lt=!1;var m=t.memoizedState;l.state=m,or(t,r,l,a),c=t.memoizedState,o!==r||m!==c||ke.current||lt?(typeof g=="function"&&(Oa(t,s,g,r),c=t.memoizedState),(o=lt||$l(t,s,o,r,m,c,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=u,r=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Ac(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:Me(t.type,o),l.props=u,h=t.pendingProps,m=l.context,c=s.contextType,typeof c=="object"&&c!==null?c=Fe(c):(c=be(s)?Mt:he.current,c=fn(t,c));var v=s.getDerivedStateFromProps;(g=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==h||m!==c)&&Kl(t,l,r,c),lt=!1,m=t.memoizedState,l.state=m,or(t,r,l,a);var y=t.memoizedState;o!==h||m!==y||ke.current||lt?(typeof v=="function"&&(Oa(t,s,v,r),y=t.memoizedState),(u=lt||$l(t,s,u,r,m,y,c)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=c,r=u):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return $a(e,t,s,r,i,a)}function $a(e,t,s,r,a,i){rd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return a&&Ml(t,s,!1),st(e,t,i);r=t.stateNode,Ip.current=t;var o=l&&typeof s.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=xn(t,e.child,null,i),t.child=xn(t,null,o,i)):me(e,t,o,i),t.memoizedState=r.state,a&&Ml(t,s,!0),t.child}function ad(e){var t=e.stateNode;t.pendingContext?Dl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Dl(e,t.context,!1),Ei(e,t.containerInfo)}function Jl(e,t,s,r,a){return gn(),_i(a),t.flags|=256,me(e,t,s,r),t.child}var Ka={dehydrated:null,treeContext:null,retryLane:0};function Ga(e){return{baseLanes:e,cachePool:null,transitions:null}}function id(e,t,s){var r=t.pendingProps,a=K.current,i=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(a&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),O(K,a&1),e===null)return Ia(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Br(l,r,0,null),e=Dt(e,r,s,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ga(s),t.memoizedState=Ka,e):Oi(t,l));if(a=e.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return Wp(e,t,l,r,o,a,s);if(i){i=r.fallback,l=t.mode,a=e.child,o=a.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=vt(a,c),r.subtreeFlags=a.subtreeFlags&14680064),o!==null?i=vt(o,i):(i=Dt(i,l,s,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ga(s):{baseLanes:l.baseLanes|s,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~s,t.memoizedState=Ka,r}return i=e.child,e=i.sibling,r=vt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=s),r.return=t,r.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=r,t.memoizedState=null,r}function Oi(e,t){return t=Br({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zs(e,t,s,r){return r!==null&&_i(r),xn(t,e.child,null,s),e=Oi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wp(e,t,s,r,a,i,l){if(s)return t.flags&256?(t.flags&=-257,r=ia(Error(N(422))),zs(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Br({mode:"visible",children:r.children},a,0,null),i=Dt(i,a,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&xn(t,e.child,null,l),t.child.memoizedState=Ga(l),t.memoizedState=Ka,i);if(!(t.mode&1))return zs(e,t,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var o=r.dgst;return r=o,i=Error(N(419)),r=ia(i,r,void 0),zs(e,t,l,r)}if(o=(l&e.childLanes)!==0,je||o){if(r=re,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|l)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,nt(e,a),Oe(r,e,a,-1))}return Gi(),r=ia(Error(N(421))),zs(e,t,l,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Jp.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Se=ft(a.nextSibling),Ce=t,$=!0,Ie=null,e!==null&&(Te[ze++]=Ye,Te[ze++]=Xe,Te[ze++]=Rt,Ye=e.id,Xe=e.overflow,Rt=t),t=Oi(t,r.children),t.flags|=4096,t)}function eo(e,t,s){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Wa(e.return,t,s)}function la(e,t,s,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:s,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=s,i.tailMode=a)}function ld(e,t,s){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(me(e,t,r.children,s),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eo(e,s,t);else if(e.tag===19)eo(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(K,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(s=t.child,a=null;s!==null;)e=s.alternate,e!==null&&cr(e)===null&&(a=s),s=s.sibling;s=a,s===null?(a=t.child,t.child=null):(a=s.sibling,s.sibling=null),la(t,!1,a,s,i);break;case"backwards":for(s=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&cr(e)===null){t.child=a;break}e=a.sibling,a.sibling=s,s=a,a=e}la(t,!0,s,null,i);break;case"together":la(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Us(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function st(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(s&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,s=vt(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=vt(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function Op(e,t,s){switch(t.tag){case 3:ad(t),gn();break;case 5:Ec(t);break;case 1:be(t.type)&&sr(t);break;case 4:Ei(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;O(ir,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(K,K.current&1),t.flags|=128,null):s&t.child.childLanes?id(e,t,s):(O(K,K.current&1),e=st(e,t,s),e!==null?e.sibling:null);O(K,K.current&1);break;case 19:if(r=(s&t.childLanes)!==0,e.flags&128){if(r)return ld(e,t,s);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),O(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,sd(e,t,s)}return st(e,t,s)}var od,qa,cd,dd;od=function(e,t){for(var s=t.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return;s=s.return}s.sibling.return=s.return,s=s.sibling}};qa=function(){};cd=function(e,t,s,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Ft(Ge.current);var i=null;switch(s){case"input":a=ga(e,a),r=ga(e,r),i=[];break;case"select":a=q({},a,{value:void 0}),r=q({},r,{value:void 0}),i=[];break;case"textarea":a=va(e,a),r=va(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=tr)}ka(s,r);var l;s=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var o=a[u];for(l in o)o.hasOwnProperty(l)&&(s||(s={}),s[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Gn.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(o=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(s||(s={}),s[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(s||(s={}),s[l]=c[l])}else s||(i||(i=[]),i.push(u,s)),s=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Gn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&H("scroll",e),i||o===c||(i=[])):(i=i||[]).push(u,c))}s&&(i=i||[]).push("style",s);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};dd=function(e,t,s,r){s!==r&&(t.flags|=4)};function An(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var r=null;s!==null;)s.alternate!==null&&(r=s),s=s.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,r=0;if(t)for(var a=e.child;a!==null;)s|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)s|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=s,t}function Hp(e,t,s){var r=t.pendingProps;switch(Ci(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return be(t.type)&&nr(),ue(t),null;case 3:return r=t.stateNode,yn(),U(ke),U(he),Li(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Bs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(ni(Ie),Ie=null))),qa(e,t),ue(t),null;case 5:Fi(t);var a=Ft(as.current);if(s=t.type,e!==null&&t.stateNode!=null)cd(e,t,s,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return ue(t),null}if(e=Ft(Ge.current),Bs(t)){r=t.stateNode,s=t.type;var i=t.memoizedProps;switch(r[$e]=t,r[ss]=i,e=(t.mode&1)!==0,s){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(a=0;a<Mn.length;a++)H(Mn[a],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":cl(r,i),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":ul(r,i),H("invalid",r)}ka(s,i),a=null;for(var l in i)if(i.hasOwnProperty(l)){var o=i[l];l==="children"?typeof o=="string"?r.textContent!==o&&(i.suppressHydrationWarning!==!0&&Ps(r.textContent,o,e),a=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&Ps(r.textContent,o,e),a=["children",""+o]):Gn.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&H("scroll",r)}switch(s){case"input":js(r),dl(r,i,!0);break;case"textarea":js(r),pl(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=tr)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ro(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(s,{is:r.is}):(e=l.createElement(s),s==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,s),e[$e]=t,e[ss]=r,od(e,t,!1,!1),t.stateNode=e;e:{switch(l=ba(s,r),s){case"dialog":H("cancel",e),H("close",e),a=r;break;case"iframe":case"object":case"embed":H("load",e),a=r;break;case"video":case"audio":for(a=0;a<Mn.length;a++)H(Mn[a],e);a=r;break;case"source":H("error",e),a=r;break;case"img":case"image":case"link":H("error",e),H("load",e),a=r;break;case"details":H("toggle",e),a=r;break;case"input":cl(e,r),a=ga(e,r),H("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=q({},r,{value:void 0}),H("invalid",e);break;case"textarea":ul(e,r),a=va(e,r),H("invalid",e);break;default:a=r}ka(s,a),o=a;for(i in o)if(o.hasOwnProperty(i)){var c=o[i];i==="style"?Oo(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Io(e,c)):i==="children"?typeof c=="string"?(s!=="textarea"||c!=="")&&qn(e,c):typeof c=="number"&&qn(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Gn.hasOwnProperty(i)?c!=null&&i==="onScroll"&&H("scroll",e):c!=null&&ui(e,i,c,l))}switch(s){case"input":js(e),dl(e,r,!1);break;case"textarea":js(e),pl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?on(e,!!r.multiple,i,!1):r.defaultValue!=null&&on(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=tr)}switch(s){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)dd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(s=Ft(as.current),Ft(Ge.current),Bs(t)){if(r=t.stateNode,s=t.memoizedProps,r[$e]=t,(i=r.nodeValue!==s)&&(e=Ce,e!==null))switch(e.tag){case 3:Ps(r.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ps(r.nodeValue,s,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(s.nodeType===9?s:s.ownerDocument).createTextNode(r),r[$e]=t,t.stateNode=r}return ue(t),null;case 13:if(U(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&Se!==null&&t.mode&1&&!(t.flags&128))Pc(),gn(),t.flags|=98560,i=!1;else if(i=Bs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[$e]=t}else gn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),i=!1}else Ie!==null&&(ni(Ie),Ie=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=s,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?te===0&&(te=3):Gi())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return yn(),qa(e,t),e===null&&ts(t.stateNode.containerInfo),ue(t),null;case 10:return Ti(t.type._context),ue(t),null;case 17:return be(t.type)&&nr(),ue(t),null;case 19:if(U(K),i=t.memoizedState,i===null)return ue(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)An(i,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=cr(e),l!==null){for(t.flags|=128,An(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=s,s=t.child;s!==null;)i=s,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return O(K,K.current&1|2),t.child}e=e.sibling}i.tail!==null&&X()>jn&&(t.flags|=128,r=!0,An(i,!1),t.lanes=4194304)}else{if(!r)if(e=cr(l),e!==null){if(t.flags|=128,r=!0,s=e.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),An(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!$)return ue(t),null}else 2*X()-i.renderingStartTime>jn&&s!==1073741824&&(t.flags|=128,r=!0,An(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(s=i.last,s!==null?s.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=X(),t.sibling=null,s=K.current,O(K,r?s&1|2:s&1),t):(ue(t),null);case 22:case 23:return Ki(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Up(e,t){switch(Ci(t),t.tag){case 1:return be(t.type)&&nr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(),U(ke),U(he),Li(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fi(t),null;case 13:if(U(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(K),null;case 4:return yn(),null;case 10:return Ti(t.type._context),null;case 22:case 23:return Ki(),null;case 24:return null;default:return null}}var As=!1,pe=!1,Vp=typeof WeakSet=="function"?WeakSet:Set,z=null;function an(e,t){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(r){Q(e,t,r)}else s.current=null}function Qa(e,t,s){try{s()}catch(r){Q(e,t,r)}}var to=!1;function $p(e,t){if(Aa=Zs,e=fc(),Ni(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var r=s.getSelection&&s.getSelection();if(r&&r.rangeCount!==0){s=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{s.nodeType,i.nodeType}catch{s=null;break e}var l=0,o=-1,c=-1,u=0,g=0,h=e,m=null;t:for(;;){for(var v;h!==s||a!==0&&h.nodeType!==3||(o=l+a),h!==i||r!==0&&h.nodeType!==3||(c=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(v=h.firstChild)!==null;)m=h,h=v;for(;;){if(h===e)break t;if(m===s&&++u===a&&(o=l),m===i&&++g===r&&(c=l),(v=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=v}s=o===-1||c===-1?null:{start:o,end:c}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ea={focusedElem:e,selectionRange:s},Zs=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,w=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:Me(t.type,x),w);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(k){Q(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return y=to,to=!1,y}function Vn(e,t,s){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Qa(t,s,i)}a=a.next}while(a!==r)}}function _r(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var s=t=t.next;do{if((s.tag&e)===e){var r=s.create;s.destroy=r()}s=s.next}while(s!==t)}}function Ya(e){var t=e.ref;if(t!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof t=="function"?t(e):t.current=e}}function ud(e){var t=e.alternate;t!==null&&(e.alternate=null,ud(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$e],delete t[ss],delete t[Da],delete t[_p],delete t[Pp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pd(e){return e.tag===5||e.tag===3||e.tag===4}function no(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xa(e,t,s){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?s.nodeType===8?s.parentNode.insertBefore(e,t):s.insertBefore(e,t):(s.nodeType===8?(t=s.parentNode,t.insertBefore(e,s)):(t=s,t.appendChild(e)),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=tr));else if(r!==4&&(e=e.child,e!==null))for(Xa(e,t,s),e=e.sibling;e!==null;)Xa(e,t,s),e=e.sibling}function Za(e,t,s){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Za(e,t,s),e=e.sibling;e!==null;)Za(e,t,s),e=e.sibling}var ie=null,Re=!1;function at(e,t,s){for(s=s.child;s!==null;)hd(e,t,s),s=s.sibling}function hd(e,t,s){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(vr,s)}catch{}switch(s.tag){case 5:pe||an(s,t);case 6:var r=ie,a=Re;ie=null,at(e,t,s),ie=r,Re=a,ie!==null&&(Re?(e=ie,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):ie.removeChild(s.stateNode));break;case 18:ie!==null&&(Re?(e=ie,s=s.stateNode,e.nodeType===8?ea(e.parentNode,s):e.nodeType===1&&ea(e,s),Zn(e)):ea(ie,s.stateNode));break;case 4:r=ie,a=Re,ie=s.stateNode.containerInfo,Re=!0,at(e,t,s),ie=r,Re=a;break;case 0:case 11:case 14:case 15:if(!pe&&(r=s.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Qa(s,t,l),a=a.next}while(a!==r)}at(e,t,s);break;case 1:if(!pe&&(an(s,t),r=s.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=s.memoizedProps,r.state=s.memoizedState,r.componentWillUnmount()}catch(o){Q(s,t,o)}at(e,t,s);break;case 21:at(e,t,s);break;case 22:s.mode&1?(pe=(r=pe)||s.memoizedState!==null,at(e,t,s),pe=r):at(e,t,s);break;default:at(e,t,s)}}function so(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new Vp),t.forEach(function(r){var a=eh.bind(null,e,r);s.has(r)||(s.add(r),r.then(a,a))})}}function De(e,t){var s=t.deletions;if(s!==null)for(var r=0;r<s.length;r++){var a=s[r];try{var i=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:ie=o.stateNode,Re=!1;break e;case 3:ie=o.stateNode.containerInfo,Re=!0;break e;case 4:ie=o.stateNode.containerInfo,Re=!0;break e}o=o.return}if(ie===null)throw Error(N(160));hd(i,l,a),ie=null,Re=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){Q(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)md(t,e),t=t.sibling}function md(e,t){var s=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),Ue(e),r&4){try{Vn(3,e,e.return),_r(3,e)}catch(x){Q(e,e.return,x)}try{Vn(5,e,e.return)}catch(x){Q(e,e.return,x)}}break;case 1:De(t,e),Ue(e),r&512&&s!==null&&an(s,s.return);break;case 5:if(De(t,e),Ue(e),r&512&&s!==null&&an(s,s.return),e.flags&32){var a=e.stateNode;try{qn(a,"")}catch(x){Q(e,e.return,x)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,l=s!==null?s.memoizedProps:i,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&Do(a,i),ba(o,l);var u=ba(o,i);for(l=0;l<c.length;l+=2){var g=c[l],h=c[l+1];g==="style"?Oo(a,h):g==="dangerouslySetInnerHTML"?Io(a,h):g==="children"?qn(a,h):ui(a,g,h,u)}switch(o){case"input":xa(a,i);break;case"textarea":Mo(a,i);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?on(a,!!i.multiple,v,!1):m!==!!i.multiple&&(i.defaultValue!=null?on(a,!!i.multiple,i.defaultValue,!0):on(a,!!i.multiple,i.multiple?[]:"",!1))}a[ss]=i}catch(x){Q(e,e.return,x)}}break;case 6:if(De(t,e),Ue(e),r&4){if(e.stateNode===null)throw Error(N(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(x){Q(e,e.return,x)}}break;case 3:if(De(t,e),Ue(e),r&4&&s!==null&&s.memoizedState.isDehydrated)try{Zn(t.containerInfo)}catch(x){Q(e,e.return,x)}break;case 4:De(t,e),Ue(e);break;case 13:De(t,e),Ue(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Vi=X())),r&4&&so(e);break;case 22:if(g=s!==null&&s.memoizedState!==null,e.mode&1?(pe=(u=pe)||g,De(t,e),pe=u):De(t,e),Ue(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(z=e,g=e.child;g!==null;){for(h=z=g;z!==null;){switch(m=z,v=m.child,m.tag){case 0:case 11:case 14:case 15:Vn(4,m,m.return);break;case 1:an(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,s=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){Q(r,s,x)}}break;case 5:an(m,m.return);break;case 22:if(m.memoizedState!==null){ao(h);continue}}v!==null?(v.return=m,z=v):ao(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{a=h.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Wo("display",l))}catch(x){Q(e,e.return,x)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){Q(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:De(t,e),Ue(e),r&4&&so(e);break;case 21:break;default:De(t,e),Ue(e)}}function Ue(e){var t=e.flags;if(t&2){try{e:{for(var s=e.return;s!==null;){if(pd(s)){var r=s;break e}s=s.return}throw Error(N(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(qn(a,""),r.flags&=-33);var i=no(e);Za(e,i,a);break;case 3:case 4:var l=r.stateNode.containerInfo,o=no(e);Xa(e,o,l);break;default:throw Error(N(161))}}catch(c){Q(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kp(e,t,s){z=e,fd(e)}function fd(e,t,s){for(var r=(e.mode&1)!==0;z!==null;){var a=z,i=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||As;if(!l){var o=a.alternate,c=o!==null&&o.memoizedState!==null||pe;o=As;var u=pe;if(As=l,(pe=c)&&!u)for(z=a;z!==null;)l=z,c=l.child,l.tag===22&&l.memoizedState!==null?io(a):c!==null?(c.return=l,z=c):io(a);for(;i!==null;)z=i,fd(i),i=i.sibling;z=a,As=o,pe=u}ro(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,z=i):ro(e)}}function ro(e){for(;z!==null;){var t=z;if(t.flags&8772){var s=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||_r(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(s===null)r.componentDidMount();else{var a=t.elementType===t.type?s.memoizedProps:Me(t.type,s.memoizedProps);r.componentDidUpdate(a,s.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Hl(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(s=null,t.child!==null)switch(t.child.tag){case 5:s=t.child.stateNode;break;case 1:s=t.child.stateNode}Hl(t,l,s)}break;case 5:var o=t.stateNode;if(s===null&&t.flags&4){s=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&s.focus();break;case"img":c.src&&(s.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&Zn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}pe||t.flags&512&&Ya(t)}catch(m){Q(t,t.return,m)}}if(t===e){z=null;break}if(s=t.sibling,s!==null){s.return=t.return,z=s;break}z=t.return}}function ao(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}function io(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var s=t.return;try{_r(4,t)}catch(c){Q(t,s,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(c){Q(t,a,c)}}var i=t.return;try{Ya(t)}catch(c){Q(t,i,c)}break;case 5:var l=t.return;try{Ya(t)}catch(c){Q(t,l,c)}}}catch(c){Q(t,t.return,c)}if(t===e){z=null;break}var o=t.sibling;if(o!==null){o.return=t.return,z=o;break}z=t.return}}var Gp=Math.ceil,pr=rt.ReactCurrentDispatcher,Hi=rt.ReactCurrentOwner,Ee=rt.ReactCurrentBatchConfig,M=0,re=null,J=null,oe=0,Ne=0,ln=Nt(0),te=0,cs=null,Wt=0,Pr=0,Ui=0,$n=null,ve=null,Vi=0,jn=1/0,qe=null,hr=!1,Ja=null,xt=null,Es=!1,ut=null,mr=0,Kn=0,ei=null,Vs=-1,$s=0;function fe(){return M&6?X():Vs!==-1?Vs:Vs=X()}function yt(e){return e.mode&1?M&2&&oe!==0?oe&-oe:Tp.transition!==null?($s===0&&($s=Jo()),$s):(e=I,e!==0||(e=window.event,e=e===void 0?16:ic(e.type)),e):1}function Oe(e,t,s,r){if(50<Kn)throw Kn=0,ei=null,Error(N(185));us(e,s,r),(!(M&2)||e!==re)&&(e===re&&(!(M&2)&&(Pr|=s),te===4&&ct(e,oe)),we(e,r),s===1&&M===0&&!(t.mode&1)&&(jn=X()+500,Nr&&St()))}function we(e,t){var s=e.callbackNode;Tu(e,t);var r=Xs(e,e===re?oe:0);if(r===0)s!==null&&fl(s),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(s!=null&&fl(s),t===1)e.tag===0?Bp(lo.bind(null,e)):Sc(lo.bind(null,e)),Sp(function(){!(M&6)&&St()}),s=null;else{switch(ec(r)){case 1:s=gi;break;case 4:s=Xo;break;case 16:s=Ys;break;case 536870912:s=Zo;break;default:s=Ys}s=wd(s,gd.bind(null,e))}e.callbackPriority=t,e.callbackNode=s}}function gd(e,t){if(Vs=-1,$s=0,M&6)throw Error(N(327));var s=e.callbackNode;if(hn()&&e.callbackNode!==s)return null;var r=Xs(e,e===re?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fr(e,r);else{t=r;var a=M;M|=2;var i=yd();(re!==e||oe!==t)&&(qe=null,jn=X()+500,Lt(e,t));do try{Yp();break}catch(o){xd(e,o)}while(!0);Bi(),pr.current=i,M=a,J!==null?t=0:(re=null,oe=0,t=te)}if(t!==0){if(t===2&&(a=_a(e),a!==0&&(r=a,t=ti(e,a))),t===1)throw s=cs,Lt(e,0),ct(e,r),we(e,X()),s;if(t===6)ct(e,r);else{if(a=e.current.alternate,!(r&30)&&!qp(a)&&(t=fr(e,r),t===2&&(i=_a(e),i!==0&&(r=i,t=ti(e,i))),t===1))throw s=cs,Lt(e,0),ct(e,r),we(e,X()),s;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:zt(e,ve,qe);break;case 3:if(ct(e,r),(r&130023424)===r&&(t=Vi+500-X(),10<t)){if(Xs(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=La(zt.bind(null,e,ve,qe),t);break}zt(e,ve,qe);break;case 4:if(ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-We(r);i=1<<l,l=t[l],l>a&&(a=l),r&=~i}if(r=a,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gp(r/1960))-r,10<r){e.timeoutHandle=La(zt.bind(null,e,ve,qe),r);break}zt(e,ve,qe);break;case 5:zt(e,ve,qe);break;default:throw Error(N(329))}}}return we(e,X()),e.callbackNode===s?gd.bind(null,e):null}function ti(e,t){var s=$n;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=fr(e,t),e!==2&&(t=ve,ve=s,t!==null&&ni(t)),e}function ni(e){ve===null?ve=e:ve.push.apply(ve,e)}function qp(e){for(var t=e;;){if(t.flags&16384){var s=t.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var r=0;r<s.length;r++){var a=s[r],i=a.getSnapshot;a=a.value;try{if(!He(i(),a))return!1}catch{return!1}}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ct(e,t){for(t&=~Ui,t&=~Pr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var s=31-We(t),r=1<<s;e[s]=-1,t&=~r}}function lo(e){if(M&6)throw Error(N(327));hn();var t=Xs(e,0);if(!(t&1))return we(e,X()),null;var s=fr(e,t);if(e.tag!==0&&s===2){var r=_a(e);r!==0&&(t=r,s=ti(e,r))}if(s===1)throw s=cs,Lt(e,0),ct(e,t),we(e,X()),s;if(s===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zt(e,ve,qe),we(e,X()),null}function $i(e,t){var s=M;M|=1;try{return e(t)}finally{M=s,M===0&&(jn=X()+500,Nr&&St())}}function Ot(e){ut!==null&&ut.tag===0&&!(M&6)&&hn();var t=M;M|=1;var s=Ee.transition,r=I;try{if(Ee.transition=null,I=1,e)return e()}finally{I=r,Ee.transition=s,M=t,!(M&6)&&St()}}function Ki(){Ne=ln.current,U(ln)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,Np(s)),J!==null)for(s=J.return;s!==null;){var r=s;switch(Ci(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nr();break;case 3:yn(),U(ke),U(he),Li();break;case 5:Fi(r);break;case 4:yn();break;case 13:U(K);break;case 19:U(K);break;case 10:Ti(r.type._context);break;case 22:case 23:Ki()}s=s.return}if(re=e,J=e=vt(e.current,null),oe=Ne=t,te=0,cs=null,Ui=Pr=Wt=0,ve=$n=null,Et!==null){for(t=0;t<Et.length;t++)if(s=Et[t],r=s.interleaved,r!==null){s.interleaved=null;var a=r.next,i=s.pending;if(i!==null){var l=i.next;i.next=a,r.next=l}s.pending=r}Et=null}return e}function xd(e,t){do{var s=J;try{if(Bi(),Os.current=ur,dr){for(var r=G.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}dr=!1}if(It=0,se=ee=G=null,Un=!1,is=0,Hi.current=null,s===null||s.return===null){te=1,cs=t,J=null;break}e:{var i=e,l=s.return,o=s,c=t;if(t=oe,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,g=o,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=ql(l);if(v!==null){v.flags&=-257,Ql(v,l,o,i,t),v.mode&1&&Gl(i,u,t),t=v,c=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(c),t.updateQueue=x}else y.add(c);break e}else{if(!(t&1)){Gl(i,u,t),Gi();break e}c=Error(N(426))}}else if($&&o.mode&1){var w=ql(l);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Ql(w,l,o,i,t),_i(vn(c,o));break e}}i=c=vn(c,o),te!==4&&(te=2),$n===null?$n=[i]:$n.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=ed(i,c,t);Ol(i,p);break e;case 1:o=c;var d=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(xt===null||!xt.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=td(i,o,t);Ol(i,k);break e}}i=i.return}while(i!==null)}jd(s)}catch(_){t=_,J===s&&s!==null&&(J=s=s.return);continue}break}while(!0)}function yd(){var e=pr.current;return pr.current=ur,e===null?ur:e}function Gi(){(te===0||te===3||te===2)&&(te=4),re===null||!(Wt&268435455)&&!(Pr&268435455)||ct(re,oe)}function fr(e,t){var s=M;M|=2;var r=yd();(re!==e||oe!==t)&&(qe=null,Lt(e,t));do try{Qp();break}catch(a){xd(e,a)}while(!0);if(Bi(),M=s,pr.current=r,J!==null)throw Error(N(261));return re=null,oe=0,te}function Qp(){for(;J!==null;)vd(J)}function Yp(){for(;J!==null&&!ku();)vd(J)}function vd(e){var t=bd(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?jd(e):J=t,Hi.current=null}function jd(e){var t=e;do{var s=t.alternate;if(e=t.return,t.flags&32768){if(s=Up(s,t),s!==null){s.flags&=32767,J=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,J=null;return}}else if(s=Hp(s,t,Ne),s!==null){J=s;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);te===0&&(te=5)}function zt(e,t,s){var r=I,a=Ee.transition;try{Ee.transition=null,I=1,Xp(e,t,s,r)}finally{Ee.transition=a,I=r}return null}function Xp(e,t,s,r){do hn();while(ut!==null);if(M&6)throw Error(N(327));s=e.finishedWork;var a=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=s.lanes|s.childLanes;if(zu(e,i),e===re&&(J=re=null,oe=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||Es||(Es=!0,wd(Ys,function(){return hn(),null})),i=(s.flags&15990)!==0,s.subtreeFlags&15990||i){i=Ee.transition,Ee.transition=null;var l=I;I=1;var o=M;M|=4,Hi.current=null,$p(e,s),md(s,e),xp(Ea),Zs=!!Aa,Ea=Aa=null,e.current=s,Kp(s),bu(),M=o,I=l,Ee.transition=i}else e.current=s;if(Es&&(Es=!1,ut=e,mr=a),i=e.pendingLanes,i===0&&(xt=null),Su(s.stateNode),we(e,X()),t!==null)for(r=e.onRecoverableError,s=0;s<t.length;s++)a=t[s],r(a.value,{componentStack:a.stack,digest:a.digest});if(hr)throw hr=!1,e=Ja,Ja=null,e;return mr&1&&e.tag!==0&&hn(),i=e.pendingLanes,i&1?e===ei?Kn++:(Kn=0,ei=e):Kn=0,St(),null}function hn(){if(ut!==null){var e=ec(mr),t=Ee.transition,s=I;try{if(Ee.transition=null,I=16>e?16:e,ut===null)var r=!1;else{if(e=ut,ut=null,mr=0,M&6)throw Error(N(331));var a=M;for(M|=4,z=e.current;z!==null;){var i=z,l=i.child;if(z.flags&16){var o=i.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(z=u;z!==null;){var g=z;switch(g.tag){case 0:case 11:case 15:Vn(8,g,i)}var h=g.child;if(h!==null)h.return=g,z=h;else for(;z!==null;){g=z;var m=g.sibling,v=g.return;if(ud(g),g===u){z=null;break}if(m!==null){m.return=v,z=m;break}z=v}}}var y=i.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}z=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,z=l;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Vn(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,z=p;break e}z=i.return}}var d=e.current;for(z=d;z!==null;){l=z;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,z=f;else e:for(l=d;z!==null;){if(o=z,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:_r(9,o)}}catch(_){Q(o,o.return,_)}if(o===l){z=null;break e}var k=o.sibling;if(k!==null){k.return=o.return,z=k;break e}z=o.return}}if(M=a,St(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(vr,e)}catch{}r=!0}return r}finally{I=s,Ee.transition=t}}return!1}function oo(e,t,s){t=vn(s,t),t=ed(e,t,1),e=gt(e,t,1),t=fe(),e!==null&&(us(e,1,t),we(e,t))}function Q(e,t,s){if(e.tag===3)oo(e,e,s);else for(;t!==null;){if(t.tag===3){oo(t,e,s);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=vn(s,e),e=td(t,e,1),t=gt(t,e,1),e=fe(),t!==null&&(us(t,1,e),we(t,e));break}}t=t.return}}function Zp(e,t,s){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&s,re===e&&(oe&s)===s&&(te===4||te===3&&(oe&130023424)===oe&&500>X()-Vi?Lt(e,0):Ui|=s),we(e,t)}function kd(e,t){t===0&&(e.mode&1?(t=ws,ws<<=1,!(ws&130023424)&&(ws=4194304)):t=1);var s=fe();e=nt(e,t),e!==null&&(us(e,t,s),we(e,s))}function Jp(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),kd(e,s)}function eh(e,t){var s=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(s=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),kd(e,s)}var bd;bd=function(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)je=!0;else{if(!(e.lanes&s)&&!(t.flags&128))return je=!1,Op(e,t,s);je=!!(e.flags&131072)}else je=!1,$&&t.flags&1048576&&Cc(t,ar,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Us(e,t),e=t.pendingProps;var a=fn(t,he.current);pn(t,s),a=Mi(null,t,r,e,a,s);var i=Ri();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,be(r)?(i=!0,sr(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ai(t),a.updater=Cr,t.stateNode=a,a._reactInternals=t,Ha(t,r,e,s),t=$a(null,t,r,!0,i,s)):(t.tag=0,$&&i&&Si(t),me(null,t,a,s),t=t.child),t;case 16:r=t.elementType;e:{switch(Us(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=nh(r),e=Me(r,e),a){case 0:t=Va(null,t,r,e,s);break e;case 1:t=Zl(null,t,r,e,s);break e;case 11:t=Yl(null,t,r,e,s);break e;case 14:t=Xl(null,t,r,Me(r.type,e),s);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Me(r,a),Va(e,t,r,a,s);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Me(r,a),Zl(e,t,r,a,s);case 3:e:{if(ad(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,a=i.element,Ac(e,t),or(t,r,null,s);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=vn(Error(N(423)),t),t=Jl(e,t,r,s,a);break e}else if(r!==a){a=vn(Error(N(424)),t),t=Jl(e,t,r,s,a);break e}else for(Se=ft(t.stateNode.containerInfo.firstChild),Ce=t,$=!0,Ie=null,s=Tc(t,null,r,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(gn(),r===a){t=st(e,t,s);break e}me(e,t,r,s)}t=t.child}return t;case 5:return Ec(t),e===null&&Ia(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,Fa(r,a)?l=null:i!==null&&Fa(r,i)&&(t.flags|=32),rd(e,t),me(e,t,l,s),t.child;case 6:return e===null&&Ia(t),null;case 13:return id(e,t,s);case 4:return Ei(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xn(t,null,r,s):me(e,t,r,s),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Me(r,a),Yl(e,t,r,a,s);case 7:return me(e,t,t.pendingProps,s),t.child;case 8:return me(e,t,t.pendingProps.children,s),t.child;case 12:return me(e,t,t.pendingProps.children,s),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,O(ir,r._currentValue),r._currentValue=l,i!==null)if(He(i.value,l)){if(i.children===a.children&&!ke.current){t=st(e,t,s);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){l=i.child;for(var c=o.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Ze(-1,s&-s),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?c.next=c:(c.next=g.next,g.next=c),u.pending=c}}i.lanes|=s,c=i.alternate,c!==null&&(c.lanes|=s),Wa(i.return,s,t),o.lanes|=s;break}c=c.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(N(341));l.lanes|=s,o=l.alternate,o!==null&&(o.lanes|=s),Wa(l,s,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}me(e,t,a.children,s),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,pn(t,s),a=Fe(a),r=r(a),t.flags|=1,me(e,t,r,s),t.child;case 14:return r=t.type,a=Me(r,t.pendingProps),a=Me(r.type,a),Xl(e,t,r,a,s);case 15:return nd(e,t,t.type,t.pendingProps,s);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Me(r,a),Us(e,t),t.tag=1,be(r)?(e=!0,sr(t)):e=!1,pn(t,s),Jc(t,r,a),Ha(t,r,a,s),$a(null,t,r,!0,e,s);case 19:return ld(e,t,s);case 22:return sd(e,t,s)}throw Error(N(156,t.tag))};function wd(e,t){return Yo(e,t)}function th(e,t,s,r){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,t,s,r){return new th(e,t,s,r)}function qi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nh(e){if(typeof e=="function")return qi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hi)return 11;if(e===mi)return 14}return 2}function vt(e,t){var s=e.alternate;return s===null?(s=Ae(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function Ks(e,t,s,r,a,i){var l=2;if(r=e,typeof e=="function")qi(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Yt:return Dt(s.children,a,i,t);case pi:l=8,a|=8;break;case pa:return e=Ae(12,s,t,a|2),e.elementType=pa,e.lanes=i,e;case ha:return e=Ae(13,s,t,a),e.elementType=ha,e.lanes=i,e;case ma:return e=Ae(19,s,t,a),e.elementType=ma,e.lanes=i,e;case Eo:return Br(s,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zo:l=10;break e;case Ao:l=9;break e;case hi:l=11;break e;case mi:l=14;break e;case it:l=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Ae(l,s,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function Dt(e,t,s,r){return e=Ae(7,e,r,t),e.lanes=s,e}function Br(e,t,s,r){return e=Ae(22,e,r,t),e.elementType=Eo,e.lanes=s,e.stateNode={isHidden:!1},e}function oa(e,t,s){return e=Ae(6,e,null,t),e.lanes=s,e}function ca(e,t,s){return t=Ae(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sh(e,t,s,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ur(0),this.expirationTimes=Ur(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ur(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Qi(e,t,s,r,a,i,l,o,c){return e=new sh(e,t,s,o,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ae(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ai(i),e}function rh(e,t,s){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:s}}function Nd(e){if(!e)return kt;e=e._reactInternals;e:{if(Vt(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var s=e.type;if(be(s))return Nc(e,s,t)}return t}function Sd(e,t,s,r,a,i,l,o,c){return e=Qi(s,r,!0,e,a,i,l,o,c),e.context=Nd(null),s=e.current,r=fe(),a=yt(s),i=Ze(r,a),i.callback=t??null,gt(s,i,a),e.current.lanes=a,us(e,a,r),we(e,r),e}function Tr(e,t,s,r){var a=t.current,i=fe(),l=yt(a);return s=Nd(s),t.context===null?t.context=s:t.pendingContext=s,t=Ze(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gt(a,t,l),e!==null&&(Oe(e,a,l,i),Ws(e,a,l)),l}function gr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function co(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function Yi(e,t){co(e,t),(e=e.alternate)&&co(e,t)}function ah(){return null}var Cd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xi(e){this._internalRoot=e}zr.prototype.render=Xi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Tr(e,t,null,null)};zr.prototype.unmount=Xi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ot(function(){Tr(null,e,null,null)}),t[tt]=null}};function zr(e){this._internalRoot=e}zr.prototype.unstable_scheduleHydration=function(e){if(e){var t=sc();e={blockedOn:null,target:e,priority:t};for(var s=0;s<ot.length&&t!==0&&t<ot[s].priority;s++);ot.splice(s,0,e),s===0&&ac(e)}};function Zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ar(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uo(){}function ih(e,t,s,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=gr(l);i.call(u)}}var l=Sd(t,r,e,0,null,!1,!1,"",uo);return e._reactRootContainer=l,e[tt]=l.current,ts(e.nodeType===8?e.parentNode:e),Ot(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var o=r;r=function(){var u=gr(c);o.call(u)}}var c=Qi(e,0,!1,null,null,!1,!1,"",uo);return e._reactRootContainer=c,e[tt]=c.current,ts(e.nodeType===8?e.parentNode:e),Ot(function(){Tr(t,c,s,r)}),c}function Er(e,t,s,r,a){var i=s._reactRootContainer;if(i){var l=i;if(typeof a=="function"){var o=a;a=function(){var c=gr(l);o.call(c)}}Tr(t,l,e,a)}else l=ih(s,t,e,a,r);return gr(l)}tc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var s=Dn(t.pendingLanes);s!==0&&(xi(t,s|1),we(t,X()),!(M&6)&&(jn=X()+500,St()))}break;case 13:Ot(function(){var r=nt(e,1);if(r!==null){var a=fe();Oe(r,e,1,a)}}),Yi(e,1)}};yi=function(e){if(e.tag===13){var t=nt(e,134217728);if(t!==null){var s=fe();Oe(t,e,134217728,s)}Yi(e,134217728)}};nc=function(e){if(e.tag===13){var t=yt(e),s=nt(e,t);if(s!==null){var r=fe();Oe(s,e,t,r)}Yi(e,t)}};sc=function(){return I};rc=function(e,t){var s=I;try{return I=e,t()}finally{I=s}};Na=function(e,t,s){switch(t){case"input":if(xa(e,s),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<s.length;t++){var r=s[t];if(r!==e&&r.form===e.form){var a=wr(r);if(!a)throw Error(N(90));Lo(r),xa(r,a)}}}break;case"textarea":Mo(e,s);break;case"select":t=s.value,t!=null&&on(e,!!s.multiple,t,!1)}};Vo=$i;$o=Ot;var lh={usingClientEntryPoint:!1,Events:[hs,en,wr,Ho,Uo,$i]},En={findFiberByHostInstance:At,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oh={bundleType:En.bundleType,version:En.version,rendererPackageName:En.rendererPackageName,rendererConfig:En.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qo(e),e===null?null:e.stateNode},findFiberByHostInstance:En.findFiberByHostInstance||ah,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fs.isDisabled&&Fs.supportsFiber)try{vr=Fs.inject(oh),Ke=Fs}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lh;Pe.createPortal=function(e,t){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zi(t))throw Error(N(200));return rh(e,t,null,s)};Pe.createRoot=function(e,t){if(!Zi(e))throw Error(N(299));var s=!1,r="",a=Cd;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Qi(e,1,!1,null,null,s,!1,r,a),e[tt]=t.current,ts(e.nodeType===8?e.parentNode:e),new Xi(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=qo(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return Ot(e)};Pe.hydrate=function(e,t,s){if(!Ar(t))throw Error(N(200));return Er(null,e,t,!0,s)};Pe.hydrateRoot=function(e,t,s){if(!Zi(e))throw Error(N(405));var r=s!=null&&s.hydratedSources||null,a=!1,i="",l=Cd;if(s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(i=s.identifierPrefix),s.onRecoverableError!==void 0&&(l=s.onRecoverableError)),t=Sd(t,null,e,1,s??null,a,!1,i,l),e[tt]=t.current,ts(e),r)for(e=0;e<r.length;e++)s=r[e],a=s._getVersion,a=a(s._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[s,a]:t.mutableSourceEagerHydrationData.push(s,a);return new zr(t)};Pe.render=function(e,t,s){if(!Ar(t))throw Error(N(200));return Er(null,e,t,!1,s)};Pe.unmountComponentAtNode=function(e){if(!Ar(e))throw Error(N(40));return e._reactRootContainer?(Ot(function(){Er(null,null,e,!1,function(){e._reactRootContainer=null,e[tt]=null})}),!0):!1};Pe.unstable_batchedUpdates=$i;Pe.unstable_renderSubtreeIntoContainer=function(e,t,s,r){if(!Ar(s))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Er(e,t,s,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function _d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_d)}catch(e){console.error(e)}}_d(),_o.exports=Pe;var ch=_o.exports,po=ch;da.createRoot=po.createRoot,da.hydrateRoot=po.hydrateRoot;const ho={en:{languageName:"English",getStarted:"Get Started",headline:"Connect. Collect. Recycle.",subheadline:"A smart way to sell e-waste, earn better and build a cleaner future.",betterPrices:"Better Prices",betterPricesDesc:"Know fair rates in real-time",easyPickups:"Easy Pickups",easyPickupsDesc:"Schedule pickups at your convenience",safeTrusted:"Safe & Trusted",safeTrustedDesc:"Verified partners and secure deals",chooseLanguage:"Choose a Language",continue:"Continue",skip:"Skip",enterMobile:"Enter your mobile number",otpSubtitle:"We'll send you an OTP to verify your number",mobilePlaceholder:"Enter mobile number",termsText:"By continuing, you accept the",termsOfService:"Terms of Service",privacyPolicy:"Privacy Policy",contentPolicy:"Content Policy",verifyOtpTitle:"Enter 4-Digit OTP",verifyOtpSubtitle:"OTP sent to +91 ",verify:"Verify & Proceed",resendOtp:"Resend OTP in 30s",whatsYourLocation:"What's your location?",locationSubtitle:"Sharing location permission helps us locate a Partner near you",findNearbyPartners:"Find nearby partners",findNearbyPartnersDesc:"We'll show partners closest to you",fasterPickups:"Faster pickups",fasterPickupsDesc:"Help us reduce travel time & reach you faster",securePrivate:"Secure & private",securePrivateDesc:"Your location is safe and never shared publicly",useCurrentLocation:"Use Current Location",searchLocationManually:"Search Location Manually",allowNotificationsTitle:"Allow Notifications and Pickup alerts",realtimePartnerUpdates:"Real-time Partner Updates",realtimePartnerUpdatesDesc:"Get notified about partner allocation, arrival and more",offersAndNews:"Offers and news",offersAndNewsDesc:"Be the first to know about our offers and new features",allowPermission:"Allow Permission",maybeLater:"Maybe Later",setupComplete:"Setup Complete!",setupCompleteDesc:"You have completed the onboarding flow.",restartFlow:"Restart Prototype Flow",tagline:"Cleaner today, greener tomorrow",hiGreeting:"Hi",readyToday:"Ready to make a difference today?",syncPending:"Sync",slide0Title:`Hassle-free
Scrap Collection`,slide0Subtitle:`Schedule your
pickup in seconds.`,slide0Btn:"Request Pickup",slide0Tag:"Verified Fleet",slide1Title:`Instant AI
Rate Discovery`,slide1Subtitle:`Scan circuit boards &
get fair market cash.`,slide1Btn:"Scan Now",slide1Tag:"AI Powered",slide2Title:`Highest Payout
Guaranteed`,slide2Subtitle:`CPCB authorized partners
with zero middlemen.`,slide2Btn:"View Rates",slide2Tag:"Best Rates",sellScrap:"Sell Scrap",sellScrapDesc:"Get the best price",eWasteCollection:`E-Waste
Collection`,eWasteDesc:"Pickup at your doorstep",myEarnings:"My Earnings",myEarningsDesc:"Track your income",viewHistory:"View History",viewHistoryDesc:"Track your activity",marketTrends:"Market Trends",marketTrendsDesc:"See what's in demand today",tabHome:"Home",tabBookings:"Bookings",tabScan:"Scan",tabRates:"Rates",tabProfile:"Profile",tabCamera:"Camera",bookingsTitle:"Book a Pickup",bookingActive:"Active",bookingAll:"All",bookingCompleted:"Completed",noBookings:"No bookings yet",noBookingsDesc:"Start your first pickup request today",bookPickup:"Book a Pickup",driverArriving:"Driver Arriving",mins:"mins",estPayout:"Est. Payout",trackDriver:"Track Driver",viewReceipt:"View Receipt",selectPickupDate:"Select Pickup Date",availableKabadiwalas:"Available Kabadiwalas",nearbyBadge:"nearby",verifiedBadge:"Verified",buysLabel:"Buys:",fullyBooked:"Fully Booked",bookPickupBtn:"Book Pickup →",selectTimeSlot:"Select Time Slot",scrapMaterialsForPickup:"Scrap Materials for Pickup",pickupLocation:"Pickup Location",defaultSavedAddress:"Default Saved Address",confirmDoorstepPickup:"Confirm Doorstep Pickup",selectServiceZone:"Select Service Zone",nextScheduledPickup:"Next Scheduled Pickup",confirmedStatus:"Confirmed",todayLabel:"Today",tomorrowLabel:"Tomorrow",todayRates:"Today's Rates",ratePerKg:"Rate / kg",scrapCategories:"Scrap Categories",currentRatesNearYou:"Current scrap rates near you",updatedToday:"Updated today • Based on recent local transactions",basedOnLocalTx:"Based on the last 42 local transactions",pricesMayVary:"Prices may vary by condition, quantity and buyer.",marketTrend7Day:"7-Day Market Trend",currentPrice:"Current",sellNowPrefix:"Sell",sellNowSuffix:"Now →",allCategories:"All",ewaste:"E-Waste",metals:"Metals",batteries:"Batteries",highValue:"High Value",itemPcb:"PCB",itemPcbSub:"Circuit Board",itemCables:"Cables & Wires",itemBattery:"Car Battery",itemCrtTv:"CRT TV",itemLcd:"LCD Display",itemMotor:"Motor & Magnet",itemPlastic:"Mixed Plastic",itemOther:"Other Items",motherboards:"Motherboards (Grade A)",copperWiring:"Copper Wiring (Clean)",lithiumBatteries:"Lithium-Ion Batteries",telecomPCBs:"Telecom & Server PCBs",mixedMobile:"Mixed Mobile Scrap",aluminium:"Aluminium Heatsinks",trackEarningsDesc:"Track what you've earned from your scrap",thisWeek:"This Week",comparedToLastWeek:"compared to last week",recentTransactions:"Recent Transactions",viewAll:"View all",viewAllTransactions:"View all transactions",weightCollected:"Weight Collected:",settledPayout:"Settled Payout:",receivedStatus:"Received",pendingStatus:"Pending",profileTitle:"My Profile",profileDetails:"Profile Details",profileDetailsDesc:"View and update your personal details",address:"Address",addressDesc:"Manage your delivery and pickup address",language:"Language",languageDesc:"Choose your preferred language",syncDetails:"Sync Details",syncDetailsDesc:"Sync your data across devices",safetyHazards:"Safety & Hazards",safetyHazardsDesc:"Learn about safety guidelines for e-waste",appSettings:"App Settings",appSettingsDesc:"Notifications, sound effects and privacy",helpSupport:"Help & Support",helpSupportDesc:"Get help for your queries and pickups",logout:"Log Out",logoutDesc:"Sign out from Kabadiwala Connect",totalEarned:"Total Earned",lotsCompleted:"Lots Completed",kgRecycled:"kg Recycled",editProfile:"Edit Profile",save:"Save",cancel:"Cancel",name:"Full Name",phone:"Phone Number",addressLine1:"Address Line 1",area:"Area / Locality",pincode:"Pincode",notifications:"Push Notifications",audioGuidance:"Audio Guidance",autoSync:"Auto-sync on Wi-Fi",smsAlerts:"SMS Alerts",profileSaved:"Profile details updated!",addressSaved:"Pickup address saved successfully!",historyTitle:"My Lots",historyAll:"All",historyActive:"Active",historyCompleted:"Completed",filterBy:"Filter",lotDetails:"Lot Details",buyer:"Buyer",paymentMode:"Payment Mode",weight:"Weight",rate:"Rate",totalAmount:"Total Amount",status:"Status",notes:"Inspector Notes",downloadReceipt:"Download Receipt",raiseDispute:"Raise Dispute",statusCompleted:"Completed",statusHandedOver:"Handed Over",statusListed:"Listed",statusDisputed:"Disputed",statusCancelled:"Cancelled",takePhotoTitle:"Take a photo of your scrap",takePhotoSub:"Make sure the item is clearly visible",stepPhoto:"Photo",stepCategory:"Category",stepWeight:"Weight",stepValue:"Value",stepBuyer:"Buyer",positionScrapHint:"Position your scrap within the frame",flashLabel:"Flash",flashOn:"On",flashOff:"Off",galleryLabel:"Gallery",gallerySub:"Choose from photos",tipClearPhotoTitle:"Take a clear photo",tipClearPhotoDesc:"Good lighting and a clear view help our AI determine exact value.",chooseSamplePhoto:"Or choose a sample scrap item:",analyzingAi:"AI scanning & analyzing scrap...",searchScrapPlaceholder:"Search scrap category or metal...",searchHistoryPlaceholder:"Search by lot # or buyer...",hazardDetectedTitle:"Hazardous item detected",hazardDetectedDesc:"A battery has been detected in your image. Please follow the safety guidelines below.",detectedItemTag:"Detected item",lithiumIonBattery:"Lithium-ion Battery",lithiumBatteryDesc:"Common in laptops, phones and other electronics.",safetyGuidelinesTitle:"Safety guidelines",keepAwayHeatTitle:"Keep away from heat and fire",keepAwayHeatDesc:"Do not expose batteries to high temperatures.",handleCareTitle:"Handle with care",handleCareDesc:"Avoid handling damaged or leaking batteries directly.",disposeSafelyTitle:"Dispose safely",disposeSafelyDesc:"Keep in a dry place and hand over to a verified collector or recycler.",batteryDetectedBanner:"Battery detected",gotItBtn:"Got it",selectCategoryTitle:"Select Scrap Category",capturedPhotoTitle:"Captured Photo",capturedPhotoSub:"Tap to retake or change",changeBtn:"Change",whatTypeOfScrap:"What type of scrap is this?",chooseClosestCategory:"Choose the closest category.",nextBtn:"Next",enterWeightTitle:"Enter Weight",selectedCategoryLabel:"Selected Category",howMuchWeigh:"How much does it weigh?",enterWeightSub:"Enter the weight of your scrap",inStepsHint:"in 0.5 kg steps",orDivider:"OR",connectScaleTitle:"Connect Scale",connectScaleSub:"Pair your Bluetooth weighing scale",searchingScale:"Searching for scale...",scalePairedTitle:"Smart Scale Connected",scalePairedLive:"Live auto-synced: 4.8 kg",pairingBluetooth:"Pairing via Bluetooth...",quickSelectTitle:"Quick Select",quickSelectSub:"Choose an approximate weight",lightlyFilled:"Lightly filled",halfFilled:"Half filled",fullyFilled:"Fully filled",continueBtn:"Continue",estimatedValueTitle:"Estimated Value",yourEstimatedValue:"YOUR ESTIMATED VALUE",basedOnWeightScrap:"Based on",listenToValue:"Listen to value",playingAudio:"Playing audio...",viewBreakdown:"View breakdown",baseMarketRate:"Base Market Rate",highGradeBonus:"High Grade E-Waste Bonus",effectiveRate:"Effective Verified Rate",aboveStreetRateTitle:"above street rate",gettingBetterPrice:"You're getting a better price!",findABuyerBtn:"Find a Buyer",compareOffersSub:"Compare offers from verified buyers near you.",chooseBuyerTitle:"Choose a Buyer",bestBuyersTitle:"Best buyers for you",bestBuyersSub:"Compared by price, distance and reliability.",bestMatchBadge:"BEST MATCH",bestPriceLabel:"Best price",cpcbVerified:"CPCB Verified",verifiedRecyclersNotice:"All listed buyers are verified recyclers.",selectedLabel:"Selected:",selectAndSellBtn:"Select & Sell",pickupConfirmedTitle:"Pickup Scheduled",pickupConfirmedSub:"Collector assigned & en route to your location",driverEnRouteStatus:"Driver on the way",arrivingInMins:"Arriving in 14 mins",orderPlacedStep:"Booked",driverAssignedStep:"Assigned",enRouteStep:"En Route",arrivedStep:"Arrived",assignedCollectorTitle:"Assigned Collector",callCollectorBtn:"Call Collector",chatWhatsAppBtn:"WhatsApp Chat",callingToast:"Connecting call to collector...",chatSentToast:"WhatsApp message opened with location!",pickupAddressLabel:"Pickup Address",scheduledSlotLabel:"Scheduled Slot",securityPinTitle:"Handover Security PIN",securityPinDesc:"Share this 4-digit code with the driver upon arrival to verify handover.",scrapSummaryTitle:"Scrap Lot Details",expectedPayoutLabel:"Expected Payout:",proceedToPaymentBtn:"Scrap Inspected • Settle Payment →",cancelBookingBtn:"Cancel Pickup",paymentTitle:"Payment",amountToReceive:"Amount to receive",fullPaymentSub:"Full payment",howReceivedPayment:"How did you receive the payment?",cashMethod:"Cash",upiMethod:"UPI",scanToPay:"Scan to pay",useAnyUpi:"Use any UPI app",sharePaymentRequest:"Share payment request",linkCopiedToast:"Link Copied!",cashReceivedTitle:"Cash received",markAfterCash:"Mark this after receiving the cash.",paymentAmountLabel:"Payment amount",editBtn:"Edit",confirmPaymentBtn:"Confirm Payment",confirmWarning:"Confirm only after receiving the payment.",receiptTitle:"Receipt",transactionReceipt:"Transaction Receipt",recycleTagline:"Recycle Today, Better Tomorrow",paidToSection:"Paid To",govtAuthorisedPill:"Government Authorised",authIdPrefix:"Authorization ID:",itemDetailsSection:"Item Details",itemDetailsSub:"Cables, chargers, circuit board etc.",totalWeightStat:"Total Weight",ratePerKgStat:"Rate (per kg)",totalAmountStat:"Total Amount",paymentDetailsSection:"Payment Details",paymentMethodLabel:"Payment Method",transactionIdLabel:"Transaction ID",paymentStatusLabel:"Payment Status",paymentReceivedStatus:"Payment Received",thankYouRecyclingTitle:"Thank you for recycling!",cleanerIndiaSub:"You're helping build a cleaner, greener India.",keepRecyclingMotto:"KEEP RECYCLING, KEEP MAKING A DIFFERENCE",downloadBillBtn:"Download Bill",downloadedBtn:"Downloaded!",generatingBtn:"Generating...",shareBillBtn:"Share Bill",copiedLinkBtn:"Copied Link!",doneBtn:"Done",safetyTitle:"Safety Tips",safetySubtitle:"Important guidelines before you proceed",safetyTipsHeading:"A quick safety tip",beforeHandoverSub:"Before handing over your battery",keepAwayHeatHeading:"Keep batteries away from heat",keepAwayHeatBody:"Store them in a cool, dry place until pickup. Never expose lithium or lead-acid batteries to direct sunlight or open fire.",coolDryArea:"Cool & dry indoor area",directHeatFlames:"Direct heat & flames",leakPreventionTitle:"Prevent acid contact",leakPreventionSub:"Keep terminals upright and dry",checkTerminalHeading:"Check for terminal leaks or cracks",checkTerminalBody:"Place battery in an upright position. If liquid is present on casing, avoid skin contact and keep away from paper scrap.",uprightOrientation:"Upright orientation",tiltedUpsideDown:"Tilted or upside down",certifiedRecyclingTitle:"Certified Recycling",govtAuthHandlerSub:"Government authorized handler pickup",handOverVerifiedHeading:"Hand over only to verified recyclers",handOverVerifiedBody:"Your assigned buyer GreenCycle has CPCB certified battery handling protocol and calibrated weight scales.",cpcbBuyer:"CPCB Certified Buyer",informalBurning:"Informal burning or dumping",listenBtn:"Listen",nextTipBtn:"Next Tip",gotItSafetyBtn:"Got it",remindMeLaterBtn:"Remind me later",syncTitle:"Sync Status",syncSubtitle:"Offline storage & automatic cloud sync",onlineSynced:"Online • Synced",lotsWaitingSync:"Lots Waiting",allLotsSyncedTitle:"All Lots Synced",allLotsSyncedDesc:"Great news! All your saved scrap lots have been safely synced to the cloud server.",offlineNoticeDesc:"You're offline, but everything is saved. We'll sync automatically when you're back online.",recentlySyncedLots:"Recently Synced Lots",lotsWaitingToSync:"Lots Waiting to Sync",dataSafeTitle:"Your data is safe",dataSafeDesc:"All photos, GPS tags, scale readings and buyer settlements are securely cached on this device with end-to-end cryptographic integrity.",syncingWithServer:"Syncing with Server...",syncAgainBtn:"Sync Again",trySyncingAgainBtn:"Try syncing again",syncedBadge:"Synced",waitingBadge:"Waiting",cachedWeightLabel:"Cached Weight:",calculatedRateLabel:"Calculated Rate:",assignedRecyclerLabel:"Assigned Recycler:",pendingPayoutLabel:"Pending Payout:",syncStatusLabel:"Sync Status:",cloudVerifiedText:"● Cloud Verified",queuedInCacheText:"🕒 Queued in Local Cache",closeBtn:"Close",close:"Close",confirm:"Confirm",edit:"Edit",delete:"Delete",search:"Search",loading:"Loading...",error:"Something went wrong",retry:"Retry",noData:"No data available",back:"Back",done:"Done"},hi:{languageName:"हिंदी",getStarted:"शुरू करें",headline:"जोड़ें. एकत्र करें. रीसायकल करें.",subheadline:"ई-कचरा बेचने, बेहतर कमाने और स्वच्छ भविष्य बनाने का स्मार्ट तरीका।",betterPrices:"बेहतर दरें",betterPricesDesc:"वास्तविक समय में उचित दरें जानें",easyPickups:"आसान पिकअप",easyPickupsDesc:"अपनी सुविधा अनुसार पिकअप शेड्यूल करें",safeTrusted:"सुरक्षित और विश्वसनीय",safeTrustedDesc:"सत्यापित भागीदार और सुरक्षित सौदे",chooseLanguage:"भाषा चुनें",continue:"आगे बढ़ें",skip:"छोड़ें",enterMobile:"अपना मोबाइल नंबर दर्ज करें",otpSubtitle:"हम आपका नंबर सत्यापित करने के लिए एक ओटीपी भेजेंगे",mobilePlaceholder:"मोबाइल नंबर दर्ज करें",termsText:"जारी रखकर, आप स्वीकार करते हैं",termsOfService:"सेवा की शर्तें",privacyPolicy:"गोपनीयता नीति",contentPolicy:"सामग्री नीति",verifyOtpTitle:"4-अंकों का ओटीपी दर्ज करें",verifyOtpSubtitle:"ओटीपी +91 पर भेजा गया ",verify:"सत्यापित करें और आगे बढ़ें",resendOtp:"30 सेकंड में पुनः ओटीपी भेजें",whatsYourLocation:"आपका स्थान क्या है?",locationSubtitle:"स्थान की अनुमति साझा करने से हमें आपके निकटतम भागीदार को खोजने में मदद मिलती है",findNearbyPartners:"पास के भागीदार खोजें",findNearbyPartnersDesc:"हम आपके निकटतम भागीदार दिखाएंगे",fasterPickups:"तेज़ पिकअप",fasterPickupsDesc:"यात्रा समय कम करने और आप तक तेज़ी से पहुँचने में मदद करता है",securePrivate:"सुरक्षित और निजी",securePrivateDesc:"आपका स्थान सुरक्षित है और कभी सार्वजनिक रूप से साझा नहीं किया जाता है",useCurrentLocation:"वर्तमान स्थान का उपयोग करें",searchLocationManually:"स्थान मैन्युअल रूप से खोजें",allowNotificationsTitle:"सूचनाएं और पिकअप अलर्ट की अनुमति दें",realtimePartnerUpdates:"रियल-टाइम पार्टनर अपडेट",realtimePartnerUpdatesDesc:"पार्टनर आवंटन, आगमन और अधिक के बारे में सूचित रहें",offersAndNews:"ऑफ़र और समाचार",offersAndNewsDesc:"हमारे ऑफ़र और नई सुविधाओं के बारे में सबसे पहले जानें",allowPermission:"अनुमति दें",maybeLater:"शायद बाद में",setupComplete:"सेटअप पूरा हुआ!",setupCompleteDesc:"आपने ऑनबोर्डिंग प्रक्रिया पूरी कर ली है।",restartFlow:"प्रोटोटाइप प्रवाह पुनः शुरू करें",tagline:"आज स्वच्छ, कल हरा-भरा",hiGreeting:"नमस्ते",readyToday:"आज कुछ बदलाव करने के लिए तैयार हैं?",syncPending:"सिंक",slide0Title:`झंझट-मुक्त
कबाड़ संग्रह`,slide0Subtitle:`सेकंडों में अपना
पिकअप शेड्यूल करें।`,slide0Btn:"पिकअप बुक करें",slide0Tag:"सत्यापित फ्लीट",slide1Title:`तत्काल AI
दर खोज`,slide1Subtitle:`सर्किट बोर्ड स्कैन करें
और उचित बाजार दर पाएं।`,slide1Btn:"अभी स्कैन करें",slide1Tag:"AI संचालित",slide2Title:`सर्वाधिक भुगतान
गारंटीकृत`,slide2Subtitle:`CPCB अधिकृत भागीदार
बिना बिचौलिए के।`,slide2Btn:"दरें देखें",slide2Tag:"सबसे अच्छी दरें",sellScrap:"कबाड़ बेचें",sellScrapDesc:"सबसे अच्छी कीमत पाएं",eWasteCollection:`ई-कचरा
संग्रह`,eWasteDesc:"आपके दरवाजे पर पिकअप",myEarnings:"मेरी कमाई",myEarningsDesc:"अपनी आय ट्रैक करें",viewHistory:"इतिहास देखें",viewHistoryDesc:"अपनी गतिविधि ट्रैक करें",marketTrends:"बाजार के रुझान",marketTrendsDesc:"देखें आज क्या मांग में है",tabHome:"होम",tabBookings:"बुकिंग",tabScan:"स्कैन",tabRates:"दरें",tabProfile:"प्रोफ़ाइल",tabCamera:"कैमरा",bookingsTitle:"पिकअप बुक करें",bookingActive:"सक्रिय",bookingAll:"सभी",bookingCompleted:"पूर्ण",noBookings:"अभी तक कोई बुकिंग नहीं",noBookingsDesc:"आज अपना पहला पिकअप अनुरोध शुरू करें",bookPickup:"पिकअप बुक करें",driverArriving:"ड्राइवर आ रहा है",mins:"मिनट",estPayout:"अनुमानित भुगतान",trackDriver:"ड्राइवर ट्रैक करें",viewReceipt:"रसीद देखें",selectPickupDate:"पिकअप तिथि चुनें",availableKabadiwalas:"उपलब्ध कबाड़ीवाले",nearbyBadge:"पास में",verifiedBadge:"सत्यापित",buysLabel:"खरीदते हैं:",fullyBooked:"पूरी तरह बुक",bookPickupBtn:"पिकअप बुक करें →",selectTimeSlot:"समय स्लॉट चुनें",scrapMaterialsForPickup:"पिकअप के लिए कबाड़ सामग्री",pickupLocation:"पिकअप स्थान",defaultSavedAddress:"डिफ़ॉल्ट सहेजा गया पता",confirmDoorstepPickup:"डोरस्टेप पिकअप की पुष्टि करें",selectServiceZone:"सेवा क्षेत्र चुनें",nextScheduledPickup:"अगला निर्धारित पिकअप",confirmedStatus:"पुष्टीकृत",todayLabel:"आज",tomorrowLabel:"कल",todayRates:"आज की दरें",ratePerKg:"दर / किलो",scrapCategories:"कबाड़ श्रेणियां",currentRatesNearYou:"आपके पास वर्तमान कबाड़ दरें",updatedToday:"आज अपडेट किया गया • हाल के स्थानीय लेनदेन पर आधारित",basedOnLocalTx:"पिछले 42 स्थानीय सौदों पर आधारित",pricesMayVary:"मूल्य स्थिति, मात्रा और खरीदार के अनुसार भिन्न हो सकते हैं।",marketTrend7Day:"7-दिवसीय बाजार रुझान",currentPrice:"वर्तमान",sellNowPrefix:"अभी",sellNowSuffix:"बेचें →",allCategories:"सभी",ewaste:"ई-कचरा",metals:"धातु",batteries:"बैटरी",highValue:"उच्च मूल्य",itemPcb:"PCB",itemPcbSub:"सर्किट बोर्ड",itemCables:"केबल्स और तार",itemBattery:"कार बैटरी",itemCrtTv:"CRT टीवी",itemLcd:"LCD डिस्प्ले",itemMotor:"मोटर और चुंबक",itemPlastic:"मिश्रित प्लास्टिक",itemOther:"अन्य वस्तुएं",motherboards:"मदरबोर्ड (ग्रेड A)",copperWiring:"कॉपर वायरिंग (स्वच्छ)",lithiumBatteries:"लिथियम-आयन बैटरी",telecomPCBs:"टेलीकॉम और सर्वर PCB",mixedMobile:"मिश्रित मोबाइल स्क्रैप",aluminium:"एल्युमीनियम हीटसिंक",trackEarningsDesc:"अपने कबाड़ से हुई कमाई को ट्रैक करें",thisWeek:"इस सप्ताह",comparedToLastWeek:"पिछले सप्ताह की तुलना में",recentTransactions:"हाल के लेनदेन",viewAll:"सभी देखें",viewAllTransactions:"सभी लेनदेन देखें",weightCollected:"एकत्रित वजन:",settledPayout:"भुगतान राशि:",receivedStatus:"प्राप्त",pendingStatus:"लंबित",profileTitle:"मेरी प्रोफ़ाइल",profileDetails:"प्रोफ़ाइल विवरण",profileDetailsDesc:"अपना व्यक्तिगत विवरण देखें और अपडेट करें",address:"पता",addressDesc:"अपना डिलीवरी और पिकअप पता प्रबंधित करें",language:"भाषा",languageDesc:"अपनी पसंदीदा भाषा चुनें",syncDetails:"सिंक विवरण",syncDetailsDesc:"सभी उपकरणों पर अपना डेटा सिंक करें",safetyHazards:"सुरक्षा और खतरे",safetyHazardsDesc:"ई-कचरे के लिए सुरक्षा दिशानिर्देश जानें",appSettings:"ऐप सेटिंग",appSettingsDesc:"सूचनाएं, ध्वनि प्रभाव और गोपनीयता",helpSupport:"सहायता और समर्थन",helpSupportDesc:"अपने प्रश्नों और पिकअप के लिए सहायता प्राप्त करें",logout:"लॉग आउट",logoutDesc:"Kabadiwala Connect से साइन आउट करें",totalEarned:"कुल कमाई",lotsCompleted:"लॉट पूर्ण",kgRecycled:"किलो रीसायकल",editProfile:"प्रोफ़ाइल संपादित करें",save:"सहेजें",cancel:"रद्द करें",name:"पूरा नाम",phone:"फ़ोन नंबर",addressLine1:"पता पंक्ति 1",area:"क्षेत्र / इलाका",pincode:"पिनकोड",notifications:"पुश सूचनाएं",audioGuidance:"ऑडियो मार्गदर्शन",autoSync:"Wi-Fi पर स्वतः-सिंक",smsAlerts:"SMS अलर्ट",profileSaved:"प्रोफ़ाइल विवरण अपडेट किया गया!",addressSaved:"पिकअप पता सफलतापूर्वक सहेजा गया!",historyTitle:"मेरे लॉट",historyAll:"सभी",historyActive:"सक्रिय",historyCompleted:"पूर्ण",filterBy:"फ़िल्टर",lotDetails:"लॉट विवरण",buyer:"खरीदार",paymentMode:"भुगतान मोड",weight:"वजन",rate:"दर",totalAmount:"कुल राशि",status:"स्थिति",notes:"निरीक्षक नोट्स",downloadReceipt:"रसीद डाउनलोड करें",raiseDispute:"विवाद उठाएं",statusCompleted:"पूर्ण",statusHandedOver:"सौंप दिया",statusListed:"सूचीबद्ध",statusDisputed:"विवादित",statusCancelled:"रद्द",takePhotoTitle:"अपने कबाड़ की फोटो लें",takePhotoSub:"सुनिश्चित करें कि वस्तु स्पष्ट रूप से दिखाई दे",stepPhoto:"फोटो",stepCategory:"श्रेणी",stepWeight:"वजन",stepValue:"मूल्य",stepBuyer:"खरीदार",positionScrapHint:"कबाड़ को फ्रेम के अंदर रखें",flashLabel:"फ्लैश",flashOn:"चालू",flashOff:"बंद",galleryLabel:"गैलरी",gallerySub:"फोटो से चुनें",tipClearPhotoTitle:"स्पष्ट फोटो लें",tipClearPhotoDesc:"अच्छी रोशनी और स्पष्ट दृश्य से बेहतर कीमत मिलती है।",chooseSamplePhoto:"या नमूना कबाड़ चुनें:",analyzingAi:"AI कबाड़ को स्कैन कर रहा है...",searchScrapPlaceholder:"कबाड़ श्रेणी या धातु खोजें...",searchHistoryPlaceholder:"लॉट # या खरीदार से खोजें...",hazardDetectedTitle:"खतरनाक वस्तु पाई गई",hazardDetectedDesc:"आपकी छवि में एक बैटरी पाई गई है। कृपया नीचे दिए गए सुरक्षा दिशानिर्देशों का पालन करें।",detectedItemTag:"पहचानी गई वस्तु",lithiumIonBattery:"लिथियम-आयन बैटरी",lithiumBatteryDesc:"लैपटॉप, फोन और अन्य इलेक्ट्रॉनिक्स में सामान्य।",safetyGuidelinesTitle:"सुरक्षा दिशानिर्देश",keepAwayHeatTitle:"गर्मी और आग से दूर रखें",keepAwayHeatDesc:"बैटरियों को उच्च तापमान के संपर्क में न लाएं।",handleCareTitle:"सावधानी से संभालें",handleCareDesc:"क्षतिग्रस्त या लीक हो रही बैटरियों को सीधे छूने से बचें।",disposeSafelyTitle:"सुरक्षित निपटान करें",disposeSafelyDesc:"सूखी जगह पर रखें और सत्यापित रीसाइक्लर को सौंपें।",batteryDetectedBanner:"बैटरी पहचानी गई",gotItBtn:"समझ गया",selectCategoryTitle:"कबाड़ श्रेणी चुनें",capturedPhotoTitle:"ली गई फोटो",capturedPhotoSub:"फिर से लेने या बदलने के लिए टैप करें",changeBtn:"बदलें",whatTypeOfScrap:"यह किस प्रकार का कबाड़ है?",chooseClosestCategory:"निकटतम श्रेणी चुनें।",nextBtn:"आगे बढ़ें",enterWeightTitle:"वजन दर्ज करें",selectedCategoryLabel:"चयनित श्रेणी",howMuchWeigh:"इसका वजन कितना है?",enterWeightSub:"अपने कबाड़ का वजन दर्ज करें",inStepsHint:"0.5 किलो के चरणों में",orDivider:"या",connectScaleTitle:"वजन कांटा जोड़ें",connectScaleSub:"अपना ब्लूटूथ वेइंग स्केल पेयर करें",searchingScale:"कांटा खोजा जा रहा है...",scalePairedTitle:"स्मार्ट कांटा जुड़ा हुआ है",scalePairedLive:"लाइव सिंक: 4.8 किलो",pairingBluetooth:"ब्लूटूथ से कनेक्ट हो रहा है...",quickSelectTitle:"त्वरित चयन",quickSelectSub:"अनुमानित वजन चुनें",lightlyFilled:"हल्का भरा हुआ",halfFilled:"आधा भरा हुआ",fullyFilled:"पूरा भरा हुआ",continueBtn:"जारी रखें",estimatedValueTitle:"अनुमानित मूल्य",yourEstimatedValue:"आपका अनुमानित मूल्य",basedOnWeightScrap:"आधारित",listenToValue:"मूल्य सुनें",playingAudio:"ऑडियो बज रहा है...",viewBreakdown:"विवरण देखें",baseMarketRate:"मूल बाजार दर",highGradeBonus:"उच्च ग्रेड ई-कचरा बोनस",effectiveRate:"प्रभावी सत्यापित दर",aboveStreetRateTitle:"बाजार भाव से अधिक",gettingBetterPrice:"आपको बेहतर कीमत मिल रही है!",findABuyerBtn:"खरीदार खोजें",compareOffersSub:"अपने पास के सत्यापित खरीदारों के ऑफ़र की तुलना करें।",chooseBuyerTitle:"खरीदार चुनें",bestBuyersTitle:"आपके लिए सर्वश्रेष्ठ खरीदार",bestBuyersSub:"कीमत, दूरी और विश्वसनीयता के आधार पर तुलना।",bestMatchBadge:"सर्वश्रेष्ठ मैच",bestPriceLabel:"सर्वोत्तम मूल्य",cpcbVerified:"CPCB सत्यापित",verifiedRecyclersNotice:"सभी सूचीबद्ध खरीदार सत्यापित रीसाइक्लर हैं।",selectedLabel:"चयनित:",selectAndSellBtn:"चुनें और बेचें",pickupConfirmedTitle:"पिकअप निर्धारित",pickupConfirmedSub:"कलेक्टर आवंटित और आपके स्थान के लिए रवाना",driverEnRouteStatus:"ड्राइवर रास्ते में है",arrivingInMins:"14 मिनट में आगमन",orderPlacedStep:"बुक किया",driverAssignedStep:"आवंटित",enRouteStep:"रास्ते में",arrivedStep:"पहुँचा",assignedCollectorTitle:"सौंपा गया कलेक्टर",callCollectorBtn:"कलेक्टर को कॉल करें",chatWhatsAppBtn:"व्हाट्सएप चैट",callingToast:"कलेक्टर से कॉल कनेक्ट की जा रही है...",chatSentToast:"स्थान के साथ व्हाट्सएप संदेश खोला गया!",pickupAddressLabel:"पिकअप का पता",scheduledSlotLabel:"निर्धारित स्लॉट",securityPinTitle:"हस्तांतरण सुरक्षा पिन",securityPinDesc:"हस्तांतरण सत्यापित करने के लिए आगमन पर ड्राइवर के साथ यह 4-अंकों का कोड साझा करें।",scrapSummaryTitle:"कबाड़ लॉट विवरण",expectedPayoutLabel:"अपेक्षित भुगतान:",proceedToPaymentBtn:"कबाड़ जांचा गया • भुगतान करें →",cancelBookingBtn:"पिकअप रद्द करें",paymentTitle:"भुगतान",amountToReceive:"प्राप्त करने योग्य राशि",fullPaymentSub:"पूर्ण भुगतान",howReceivedPayment:"आपको भुगतान कैसे प्राप्त हुआ?",cashMethod:"नकद",upiMethod:"UPI",scanToPay:"भुगतान के लिए स्कैन करें",useAnyUpi:"किसी भी UPI ऐप का उपयोग करें",sharePaymentRequest:"भुगतान अनुरोध साझा करें",linkCopiedToast:"लिंक कॉपी किया गया!",cashReceivedTitle:"नकद प्राप्त हुआ",markAfterCash:"नकद प्राप्त होने के बाद इसे चिह्नित करें।",paymentAmountLabel:"भुगतान राशि",editBtn:"संपादित करें",confirmPaymentBtn:"भुगतान की पुष्टि करें",confirmWarning:"भुगतान प्राप्त होने के बाद ही पुष्टि करें।",receiptTitle:"रसीद",transactionReceipt:"लेनदेन रसीद",recycleTagline:"आज रीसायकल करें, बेहतर कल बनाएं",paidToSection:"भुगतान प्राप्तकर्ता",govtAuthorisedPill:"सरकार द्वारा अधिकृत",authIdPrefix:"प्राधिकरण आईडी:",itemDetailsSection:"वस्तु विवरण",itemDetailsSub:"केबल्स, चार्जर, सर्किट बोर्ड आदि",totalWeightStat:"कुल वजन",ratePerKgStat:"दर (प्रति किलो)",totalAmountStat:"कुल राशि",paymentDetailsSection:"भुगतान विवरण",paymentMethodLabel:"भुगतान विधि",transactionIdLabel:"लेनदेन आईडी",paymentStatusLabel:"भुगतान स्थिति",paymentReceivedStatus:"भुगतान प्राप्त",thankYouRecyclingTitle:"रीसाइक्लिंग के लिए धन्यवाद!",cleanerIndiaSub:"आप स्वच्छ और हरित भारत बनाने में मदद कर रहे हैं।",keepRecyclingMotto:"रीसायकल करते रहें, बदलाव लाते रहें",downloadBillBtn:"बिल डाउनलोड करें",downloadedBtn:"डाउनलोड हो गया!",generatingBtn:"तैयार हो रहा है...",shareBillBtn:"बिल साझा करें",copiedLinkBtn:"लिंक कॉपी किया!",doneBtn:"हो गया",safetyTitle:"सुरक्षा सुझाव",safetySubtitle:"आगे बढ़ने से पहले महत्वपूर्ण दिशानिर्देश",safetyTipsHeading:"एक त्वरित सुरक्षा सुझाव",beforeHandoverSub:"अपनी बैटरी सौंपने से पहले",keepAwayHeatHeading:"बैटरियों को गर्मी से दूर रखें",keepAwayHeatBody:"पिकअप तक उन्हें ठंडी, सूखी जगह पर रखें। लिथियम या लेड-एसिड बैटरी को कभी भी सीधी धूप या खुली आग में न रखें।",coolDryArea:"ठंडा और सूखा इनडोर क्षेत्र",directHeatFlames:"सीधी गर्मी और लपटें",leakPreventionTitle:"एसिड संपर्क से बचें",leakPreventionSub:"टर्मिनलों को सीधा और सूखा रखें",checkTerminalHeading:"टर्मिनल लीक या दरारें जांचें",checkTerminalBody:"बैटरी को सीधी स्थिति में रखें। यदि आवरण पर तरल मौजूद है, तो त्वचा के संपर्क से बचें।",uprightOrientation:"सीधी स्थिति",tiltedUpsideDown:"झुकी या उल्टी",certifiedRecyclingTitle:"प्रमाणित रीसाइक्लिंग",govtAuthHandlerSub:"सरकारी अधिकृत हैंडलर पिकअप",handOverVerifiedHeading:"केवल सत्यापित रीसाइक्लर्स को सौंपें",handOverVerifiedBody:"आपके सौंपे गए खरीदार GreenCycle के पास CPCB प्रमाणित बैटरी हैंडलिंग प्रोटोकॉल है।",cpcbBuyer:"CPCB प्रमाणित खरीदार",informalBurning:"अनौपचारिक रूप से जलाना या फेंकना",listenBtn:"सुनें",nextTipBtn:"अगला सुझाव",gotItSafetyBtn:"समझ गया",remindMeLaterBtn:"बाद में याद दिलाएं",syncTitle:"सिंक स्थिति",syncSubtitle:"ऑफलाइन स्टोरेज और स्वतः क्लाउड सिंक",onlineSynced:"ऑनलाइन • सिंक किया गया",lotsWaitingSync:"लॉट प्रतीक्षारत",allLotsSyncedTitle:"सभी लॉट सिंक हो गए",allLotsSyncedDesc:"बढ़िया खबर! आपके सभी सहेजे गए कबाड़ लॉट सुरक्षित रूप से क्लाउड सर्वर पर सिंक हो गए हैं।",offlineNoticeDesc:"आप ऑफलाइन हैं, लेकिन सब कुछ सहेजा गया है। ऑनलाइन होने पर हम स्वतः सिंक करेंगे।",recentlySyncedLots:"हाल ही में सिंक किए गए लॉट",lotsWaitingToSync:"सिंक होने की प्रतीक्षा में लॉट",dataSafeTitle:"आपका डेटा सुरक्षित है",dataSafeDesc:"सभी फोटो, जीपीएस टैग और वजन माप इस उपकरण पर सुरक्षित रूप से संग्रहीत हैं।",syncingWithServer:"सर्वर के साथ सिंक हो रहा है...",syncAgainBtn:"पुनः सिंक करें",trySyncingAgainBtn:"फिर से सिंक करने का प्रयास करें",syncedBadge:"सिंक हुआ",waitingBadge:"प्रतीक्षारत",cachedWeightLabel:"कैश्ड वजन:",calculatedRateLabel:"परिकलित दर:",assignedRecyclerLabel:"सौंपा गया रीसाइक्लर:",pendingPayoutLabel:"लंबित भुगतान:",syncStatusLabel:"सिंक स्थिति:",cloudVerifiedText:"● क्लाउड सत्यापित",queuedInCacheText:"🕒 स्थानीय कैश में प्रतीक्षारत",closeBtn:"बंद करें",close:"बंद करें",confirm:"पुष्टि करें",edit:"संपादित करें",delete:"हटाएं",search:"खोजें",loading:"लोड हो रहा है...",error:"कुछ गलत हो गया",retry:"पुनः प्रयास करें",noData:"कोई डेटा उपलब्ध नहीं",back:"वापस",done:"हो गया"},mr:{languageName:"मराठी",getStarted:"सुरू करा",headline:"जोडा. गोळा करा. रीसायकल करा.",subheadline:"ई-कचरा विकण्याचा, अधिक कमाई करण्याचा आणि स्वच्छ भविष्य घडवण्याचा स्मार्ट मार्ग.",betterPrices:"उत्तम दर",betterPricesDesc:"रिअल-टाइममध्ये रास्त दर जाणून घ्या",easyPickups:"सोपे पिकअप",easyPickupsDesc:"तुमच्या सोयीनुसार पिकअप शेड्यूल करा",safeTrusted:"सुरक्षित आणि विश्वासार्ह",safeTrustedDesc:"सत्यापित भागीदार आणि सुरक्षित व्यवहार",chooseLanguage:"भाषा निवडा",continue:"पुढे चला",skip:"वगळा",enterMobile:"तुमचा मोबाईल नंबर प्रविष्ट करा",otpSubtitle:"आम्ही तुमचा नंबर पडताळण्यासाठी एक OTP पाठवू",mobilePlaceholder:"मोबाईल नंबर प्रविष्ट करा",termsText:"सुरू ठेवून, तुम्ही स्वीकारता",termsOfService:"सेवा अटी",privacyPolicy:"गोपनीयता धोरण",contentPolicy:"सामग्री धोरण",verifyOtpTitle:"4-अंकी OTP प्रविष्ट करा",verifyOtpSubtitle:"OTP पाठवला +91 ",verify:"पडताळणी करा आणि पुढे जा",resendOtp:"30 सेकंदात पुन्हा पाठवा",whatsYourLocation:"तुमचे स्थान काय आहे?",locationSubtitle:"स्थान परवानगी सामायिक केल्याने आम्हाला तुमच्या जवळील भागीदार शोधण्यात मदत होते",findNearbyPartners:"जवळील भागीदार शोधा",findNearbyPartnersDesc:"आम्ही तुमच्या सर्वात जवळचे भागीदार दाखवू",fasterPickups:"जलद पिकअप",fasterPickupsDesc:"प्रवास वेळ कमी करण्यात आणि तुमच्यापर्यंत जलद पोहोचण्यास मदत करते",securePrivate:"सुरक्षित आणि खाजगी",securePrivateDesc:"तुमचे स्थान सुरक्षित आहे आणि कधीही सार्वजनिकपणे सामायिक केले जात नाही",useCurrentLocation:"सध्याचे स्थान वापरा",searchLocationManually:"स्थान मॅन्युअली शोधा",allowNotificationsTitle:"सूचना आणि पिकअप अ‍ॅलर्टला अनुमती द्या",realtimePartnerUpdates:"रिअल-टाइम पार्टनर अ‍ॅपडेट्स",realtimePartnerUpdatesDesc:"भागीदार वाटप, आगमन आणि अधिक बद्दल सूचना मिळवा",offersAndNews:"ऑफर आणि बातम्या",offersAndNewsDesc:"आमच्या ऑफर आणि नवीन वैशिष्ट्यांबद्दल जाणून घेणारे पहिले व्हा",allowPermission:"परवानगी द्या",maybeLater:"नंतर करूया",setupComplete:"सेटअप पूर्ण झाला!",setupCompleteDesc:"तुम्ही ऑनबोर्डिंग प्रक्रिया पूर्ण केली आहे.",restartFlow:"प्रोटोटाइप प्रवाह पुन्हा सुरू करा",tagline:"आज स्वच्छ, उद्या हिरवे",hiGreeting:"नमस्कार",readyToday:"आज बदल घडवण्यासाठी तयार आहात?",syncPending:"सिंक",slide0Title:`त्रासमुक्त
भंगार संग्रह`,slide0Subtitle:`सेकंदांत तुमचा
पिकअप शेड्यूल करा.`,slide0Btn:"पिकअप बुक करा",slide0Tag:"सत्यापित ताफा",slide1Title:`तत्काळ AI
दर शोध`,slide1Subtitle:`सर्किट बोर्ड स्कॅन करा
आणि बाजारभाव मिळवा.`,slide1Btn:"आत्ता स्कॅन करा",slide1Tag:"AI संचालित",slide2Title:`सर्वाधिक पेमेंट
हमी`,slide2Subtitle:`CPCB अधिकृत भागीदार
दलाल नाही.`,slide2Btn:"दर पाहा",slide2Tag:"सर्वोत्तम दर",sellScrap:"भंगार विका",sellScrapDesc:"सर्वोत्तम किंमत मिळवा",eWasteCollection:`ई-कचरा
संग्रह`,eWasteDesc:"दारावर पिकअप",myEarnings:"माझी कमाई",myEarningsDesc:"तुमचे उत्पन्न ट्रॅक करा",viewHistory:"इतिहास पाहा",viewHistoryDesc:"तुमची क्रिया ट्रॅक करा",marketTrends:"बाजाराचे कल",marketTrendsDesc:"आज काय मागणीत आहे ते पाहा",tabHome:"होम",tabBookings:"बुकिंग",tabScan:"स्कॅन",tabRates:"दर",tabProfile:"प्रोफाइल",tabCamera:"कॅमेरा",bookingsTitle:"पिकअप बुक करा",bookingActive:"सक्रिय",bookingAll:"सर्व",bookingCompleted:"पूर्ण",noBookings:"अजून कोणतीही बुकिंग नाही",noBookingsDesc:"आज तुमची पहिली पिकअप विनंती सुरू करा",bookPickup:"पिकअप बुक करा",driverArriving:"ड्रायव्हर येत आहे",mins:"मिनिटे",estPayout:"अंदाजे पेमेंट",trackDriver:"ड्रायव्हर ट्रॅक करा",viewReceipt:"पावती पाहा",selectPickupDate:"पिकअप तारीख निवडा",availableKabadiwalas:"उपलब्ध भंगारवाले",nearbyBadge:"जवळ",verifiedBadge:"सत्यापित",buysLabel:"खरेदी करतात:",fullyBooked:"पूर्ण बुक",bookPickupBtn:"पिकअप बुक करा →",selectTimeSlot:"वेळ स्लॉट निवडा",scrapMaterialsForPickup:"पिकअपसाठी भंगार साहित्य",pickupLocation:"पिकअप स्थान",defaultSavedAddress:"डीफॉल्ट जतन केलेला पत्ता",confirmDoorstepPickup:"डोअरस्टेप पिकअप निश्चित करा",selectServiceZone:"सेवा क्षेत्र निवडा",nextScheduledPickup:"पुढील नियोजित पिकअप",confirmedStatus:"निश्चित",todayLabel:"आज",tomorrowLabel:"उद्या",todayRates:"आजचे दर",ratePerKg:"दर / किलो",scrapCategories:"भंगार श्रेणी",currentRatesNearYou:"तुमच्या जवळील सध्याचे भंगार दर",updatedToday:"आज अपडेट केले • अलीकडील स्थानिक व्यवहारांवर आधारित",basedOnLocalTx:"मागील 42 स्थानिक व्यवहारांवर आधारित",pricesMayVary:"किंमत स्थिती, प्रमाण आणि खरेदीदारांनुसार बदलू शकतात.",marketTrend7Day:"7-दिवसीय बाजाराचा कल",currentPrice:"सध्याचे",sellNowPrefix:"आता",sellNowSuffix:"विका →",allCategories:"सर्व",ewaste:"ई-कचरा",metals:"धातू",batteries:"बॅटरी",highValue:"उच्च मूल्य",itemPcb:"PCB",itemPcbSub:"सर्किट बोर्ड",itemCables:"केबल्स आणि वायर्स",itemBattery:"कार बॅटरी",itemCrtTv:"CRT टीव्ही",itemLcd:"LCD डिस्प्ले",itemMotor:"मोटार आणि चुंबक",itemPlastic:"मिश्रित प्लास्टिक",itemOther:"इतर वस्तू",motherboards:"मदरबोर्ड (ग्रेड A)",copperWiring:"कॉपर वायरिंग (स्वच्छ)",lithiumBatteries:"लिथियम-आयन बॅटरी",telecomPCBs:"टेलिकॉम आणि सर्व्हर PCB",mixedMobile:"मिश्रित मोबाईल स्क्रॅप",aluminium:"अॅल्युमिनियम हीटसिंक",trackEarningsDesc:"भंगारातून मिळालेली तुमची कमाई ट्रॅक करा",thisWeek:"या आठवड्यात",comparedToLastWeek:"मागील आठवड्याच्या तुलनेत",recentTransactions:"अलीकडील व्यवहार",viewAll:"सर्व पाहा",viewAllTransactions:"सर्व व्यवहार पाहा",weightCollected:"गोळा केलेले वजन:",settledPayout:"मिळालेले पेमेंट:",receivedStatus:"मिळाले",pendingStatus:"प्रलंबित",profileTitle:"माझे प्रोफाइल",profileDetails:"प्रोफाइल तपशील",profileDetailsDesc:"तुमचे वैयक्तिक तपशील पाहा आणि अपडेट करा",address:"पत्ता",addressDesc:"तुमचे डिलिव्हरी आणि पिकअप पत्ता व्यवस्थापित करा",language:"भाषा",languageDesc:"तुमची पसंतीची भाषा निवडा",syncDetails:"सिंक तपशील",syncDetailsDesc:"सर्व उपकरणांवर तुमचा डेटा सिंक करा",safetyHazards:"सुरक्षा आणि धोके",safetyHazardsDesc:"ई-कचऱ्यासाठी सुरक्षा मार्गदर्शक तत्त्वे जाणून घ्या",appSettings:"अ‍ॅप सेटिंग्ज",appSettingsDesc:"सूचना, ध्वनी प्रभाव आणि गोपनीयता",helpSupport:"मदत आणि समर्थन",helpSupportDesc:"तुमच्या प्रश्न आणि पिकअपसाठी मदत मिळवा",logout:"लॉग आउट",logoutDesc:"Kabadiwala Connect मधून साइन आउट करा",totalEarned:"एकूण कमाई",lotsCompleted:"लॉट पूर्ण",kgRecycled:"किलो रीसायकल",editProfile:"प्रोफाइल संपादित करा",save:"जतन करा",cancel:"रद्द करा",name:"पूर्ण नाव",phone:"फोन नंबर",addressLine1:"पत्ता ओळ 1",area:"क्षेत्र / परिसर",pincode:"पिनकोड",notifications:"पुश सूचना",audioGuidance:"ऑडिओ मार्गदर्शन",autoSync:"Wi-Fi वर स्वयं-सिंक",smsAlerts:"SMS अलर्ट",profileSaved:"प्रोफाइल तपशील अपडेट केले!",addressSaved:"पिकअप पत्ता यशस्वीपणे जतन केला!",historyTitle:"माझे लॉट",historyAll:"सर्व",historyActive:"सक्रिय",historyCompleted:"पूर्ण",filterBy:"फिल्टर",lotDetails:"लॉट तपशील",buyer:"खरेदीदार",paymentMode:"पेमेंट मोड",weight:"वजन",rate:"दर",totalAmount:"एकूण रक्कम",status:"स्थिती",notes:"तपासक नोट्स",downloadReceipt:"पावती डाउनलोड करा",raiseDispute:"विवाद उठवा",statusCompleted:"पूर्ण",statusHandedOver:"सोपवले",statusListed:"सूचीबद्ध",statusDisputed:"विवादित",statusCancelled:"रद्द",takePhotoTitle:"तुमच्या भंगाराचा फोटो काढा",takePhotoSub:"वस्तू स्पष्टपणे दिसत असल्याची खात्री करा",stepPhoto:"फोटो",stepCategory:"श्रेणी",stepWeight:"वजन",stepValue:"मूल्य",stepBuyer:"खरेदीदार",positionScrapHint:"भंगार फ्रेमच्या आत ठेवा",flashLabel:"फ्लॅश",flashOn:"चालू",flashOff:"बंद",galleryLabel:"गॅलरी",gallerySub:"फोटोमधून निवडा",tipClearPhotoTitle:"स्पष्ट फोटो काढा",tipClearPhotoDesc:"चांगल्या प्रकाशात स्पष्ट फोटो काढल्याने उत्तम दर मिळतो.",hazardDetectedTitle:"धोकादायक वस्तू आढळली",hazardDetectedDesc:"तुमच्या फोटोमध्ये बॅटरी आढळली आहे. कृपया खालील सुरक्षा मार्गदर्शक तत्त्वांचे पालन करा.",detectedItemTag:"आढळलेली वस्तू",lithiumIonBattery:"लिथियम-आयन बॅटरी",lithiumBatteryDesc:"लॅपटॉप, फोन आणि इतर इलेक्ट्रॉनिक्समध्ये सामान्य.",safetyGuidelinesTitle:"सुरक्षा मार्गदर्शक तत्त्वे",keepAwayHeatTitle:"उष्णता आणि आगीपासून दूर ठेवा",keepAwayHeatDesc:"बॅटऱ्यांना उच्च तापमानात ठेवू नका.",handleCareTitle:"काळजीपूर्वक हाताळा",handleCareDesc:"खराब झालेल्या किंवा गळणाऱ्या बॅटऱ्यांना थेट स्पर्श करणे टाळा.",disposeSafelyTitle:"सुरक्षितपणे विल्हेवाट लावा",disposeSafelyDesc:"कोरड्या जागी ठेवा आणि सत्यापित रीसायकलर्सना सोपवा.",batteryDetectedBanner:"बॅटरी आढळली",gotItBtn:"समजले",selectCategoryTitle:"भंगार श्रेणी निवडा",capturedPhotoTitle:"काढलेला फोटो",capturedPhotoSub:"पुन्हा काढण्यासाठी किंवा बदलण्यासाठी टॅप करा",changeBtn:"बदला",whatTypeOfScrap:"हा कोणत्या प्रकारचा भंगार आहे?",chooseClosestCategory:"जवळची श्रेणी निवडा.",nextBtn:"पुढे",enterWeightTitle:"वजन प्रविष्ट करा",selectedCategoryLabel:"निवडलेली श्रेणी",howMuchWeigh:"याचे वजन किती आहे?",enterWeightSub:"तुमच्या भंगाराचे वजन प्रविष्ट करा",inStepsHint:"0.5 किलोच्या टप्प्यांत",orDivider:"किंवा",connectScaleTitle:"वजन काटा जोडा",connectScaleSub:"तुमचा ब्लूटूथ वेइंग स्केल पेअर करा",searchingScale:"काटा शोधत आहे...",scalePairedTitle:"स्मार्ट काटा जोडला गेला",scalePairedLive:"थेट सिंक: 4.8 किलो",pairingBluetooth:"ब्लूटूथद्वारे जोडत आहे...",quickSelectTitle:"जलद निवड",quickSelectSub:"अंदाजे वजन निवडा",lightlyFilled:"किंचित भरलेले",halfFilled:"अर्धे भरलेले",fullyFilled:"पूर्ण भरलेले",continueBtn:"सुरू ठेवा",estimatedValueTitle:"अंदाजे मूल्य",yourEstimatedValue:"तुमचे अंदाजे मूल्य",basedOnWeightScrap:"आधारित",listenToValue:"मूल्य ऐका",playingAudio:"ऑडिओ वाजत आहे...",viewBreakdown:"तपशील पाहा",baseMarketRate:"मूळ बाजारभाव",highGradeBonus:"उच्च दर्जा ई-कचरा बोनस",effectiveRate:"प्रभावी सत्यापित दर",aboveStreetRateTitle:"बाजारभावापेक्षा अधिक",gettingBetterPrice:"तुम्हाला उत्तम किंमत मिळत आहे!",findABuyerBtn:"खरेदीदार शोधा",compareOffersSub:"तुमच्या जवळील सत्यापित खरेदीदारांच्या ऑफर्सची तुलना करा.",chooseBuyerTitle:"खरेदीदार निवडा",bestBuyersTitle:"तुमच्यासाठी सर्वोत्तम खरेदीदार",bestBuyersSub:"किंमत, अंतर आणि विश्वासार्हतेनुसार तुलना.",bestMatchBadge:"सर्वोत्तम सामना",bestPriceLabel:"सर्वोत्तम किंमत",cpcbVerified:"CPCB सत्यापित",verifiedRecyclersNotice:"सर्व सूचीबद्ध खरेदीदार सत्यापित रीसायकलर आहेत.",selectedLabel:"निवडलेले:",selectAndSellBtn:"निवडा आणि विका",pickupConfirmedTitle:"पिकअप नियोजित",pickupConfirmedSub:"कलेक्टर नियुक्त आणि तुमच्या पत्त्यावर येत आहे",driverEnRouteStatus:"ड्रायव्हर मार्गावर आहे",arrivingInMins:"14 मिनिटांत पोहोचेल",orderPlacedStep:"बुक केले",driverAssignedStep:"नियुक्त",enRouteStep:"मार्गावर",arrivedStep:"पोहोचले",assignedCollectorTitle:"नियुक्त केलेला कलेक्टर",callCollectorBtn:"कलेक्टरला कॉल करा",chatWhatsAppBtn:"व्हॉट्सअ‍ॅप चॅट",callingToast:"कलेक्टरशी कॉल जोडला जात आहे...",chatSentToast:"स्थानासह व्हॉट्सअ‍ॅप संदेश उघडला!",pickupAddressLabel:"पिकअप पत्ता",scheduledSlotLabel:"नियोजित वेळ",securityPinTitle:"हस्तांतरण सुरक्षा पिन",securityPinDesc:"हस्तांतरण पडताळण्यासाठी ड्रायव्हर आल्यावर हा 4-अंकी कोड शेअर करा.",scrapSummaryTitle:"भंगार लॉट तपशील",expectedPayoutLabel:"अपेक्षित पेमेंट:",proceedToPaymentBtn:"भंगार तपासले • पेमेंट करा →",cancelBookingBtn:"पिकअप रद्द करा",paymentTitle:"पेमेंट",amountToReceive:"मिळणारी रक्कम",fullPaymentSub:"पूर्ण पेमेंट",howReceivedPayment:"तुम्हाला पेमेंट कसे मिळाले?",cashMethod:"रोख",upiMethod:"UPI",scanToPay:"पेमेंटसाठी स्कॅन करा",useAnyUpi:"कोणतेही UPI अ‍ॅप वापरा",sharePaymentRequest:"पेमेंट विनंती शेअर करा",linkCopiedToast:"लिंक कॉपी केली!",cashReceivedTitle:"रोख मिळाले",markAfterCash:"रोख रक्कम मिळाल्यानंतर ही खूण करा.",paymentAmountLabel:"पेमेंट रक्कम",editBtn:"संपादित करा",confirmPaymentBtn:"पेमेंट निश्चित करा",confirmWarning:"पेमेंट मिळाल्यावरच पुष्टी करा.",receiptTitle:"पावती",transactionReceipt:"व्यवहार पावती",recycleTagline:"आज रीसायकल करा, उद्या चांगले घडवा",paidToSection:"पेमेंट प्राप्तकर्ता",govtAuthorisedPill:"शासकीय अधिकृत",authIdPrefix:"प्राधिकरण आयडी:",itemDetailsSection:"वस्तू तपशील",itemDetailsSub:"केबल्स, चार्जर, सर्किट बोर्ड इ.",totalWeightStat:"एकूण वजन",ratePerKgStat:"दर (प्रति किलो)",totalAmountStat:"एकूण रक्कम",paymentDetailsSection:"पेमेंट तपशील",paymentMethodLabel:"पेमेंट पद्धत",transactionIdLabel:"व्यवहार आयडी",paymentStatusLabel:"पेमेंट स्थिती",paymentReceivedStatus:"पेमेंट मिळाले",thankYouRecyclingTitle:"रीसायकल केल्याबद्दल धन्यवाद!",cleanerIndiaSub:"तुम्ही स्वच्छ आणि हरित भारत घडवण्यास मदत करत आहात.",keepRecyclingMotto:"रीसायकल करत राहा, बदल घडवत राहा",downloadBillBtn:"बिल डाउनलोड करा",downloadedBtn:"डाउनलोड झाले!",generatingBtn:"तयार होत आहे...",shareBillBtn:"बिल शेअर करा",copiedLinkBtn:"लिंक कॉपी केली!",doneBtn:"झाले",safetyTitle:"सुरक्षा टिपा",safetySubtitle:"पुढे जाण्यापूर्वी महत्त्वाच्या सूचना",safetyTipsHeading:"एक जलद सुरक्षा टीप",beforeHandoverSub:"तुमची बॅटरी सोपवण्यापूर्वी",keepAwayHeatHeading:"बॅटरी उष्णतेपासून दूर ठेवा",keepAwayHeatBody:"पिकअप होईपर्यंत त्यांना थंड, कोरड्या जागी ठेवा. लिथियम किंवा लेड-ऍसिड बॅटरी थेट सूर्यप्रकाशात किंवा उघड्या आगीत ठेवू नका.",coolDryArea:"थंड आणि कोरडी अंतर्गत जागा",directHeatFlames:"थेट उष्णता आणि ज्वाला",leakPreventionTitle:"ऍसिड संपर्कापासून दूर राहा",leakPreventionSub:"टर्मिनल्स सरळ आणि कोरडे ठेवा",checkTerminalHeading:"टर्मिनल गळती किंवा भेगा तपासा",checkTerminalBody:"बॅटरी सरळ स्थितीत ठेवा. आवरणामध्ये द्रव असल्यास, त्वचेचा संपर्क टाळा.",uprightOrientation:"सरळ स्थिती",tiltedUpsideDown:"कललेली किंवा उलटी",certifiedRecyclingTitle:"प्रमाणित रीसायकलिंग",govtAuthHandlerSub:"शासकीय अधिकृत हँडलर पिकअप",handOverVerifiedHeading:"फक्त सत्यापित रीसायकलरना द्या",handOverVerifiedBody:"तुमच्या वाटप केलेल्या खरेदीदार GreenCycle कडे CPCB प्रमाणित बॅटरी हाताळणी प्रोटोकॉल आहे.",cpcbBuyer:"CPCB प्रमाणित खरेदीदार",informalBurning:"अनौपचारिक जाळणे किंवा फेकणे",listenBtn:"ऐका",nextTipBtn:"पुढील टीप",gotItSafetyBtn:"समजले",remindMeLaterBtn:"नंतर आठवण करा",syncTitle:"सिंक स्थिती",syncSubtitle:"ऑफलाइन स्टोरेज आणि स्वयंचलित क्लाउड सिंक",onlineSynced:"ऑनलाइन • सिंक झाले",lotsWaitingSync:"लॉट प्रतीक्षेत",allLotsSyncedTitle:"सर्व लॉट सिंक झाले",allLotsSyncedDesc:"छान बातमी! तुमचे सर्व सेव्ह केलेले भंगार लॉट सुरक्षितपणे क्लाउड सर्व्हरवर सिंक झाले आहेत.",offlineNoticeDesc:"तुम्ही ऑफलाइन आहात, पण सर्व काही सुरक्षित आहे. तुम्ही ऑनलाइन आल्यावर आम्ही आपोआप सिंक करू.",recentlySyncedLots:"नुकतेच सिंक केलेले लॉट",lotsWaitingToSync:"सिंक होण्याची वाट पाहत असलेले लॉट",dataSafeTitle:"तुमचा डेटा सुरक्षित आहे",dataSafeDesc:"सर्व फोटो, जीपीएस टॅग आणि वजन या डिव्हाइसवर सुरक्षितपणे कॅश केले आहेत.",syncingWithServer:"सर्व्हरसह सिंक होत आहे...",syncAgainBtn:"पुन्हा सिंक करा",trySyncingAgainBtn:"पुन्हा प्रयत्न करा",syncedBadge:"सिंक झाले",waitingBadge:"प्रतीक्षेत",cachedWeightLabel:"कॅश केलेले वजन:",calculatedRateLabel:"गणना केलेला दर:",assignedRecyclerLabel:"नियुक्त रीसायकलर:",pendingPayoutLabel:"प्रलंबित पेमेंट:",syncStatusLabel:"सिंक स्थिती:",cloudVerifiedText:"● क्लाउड सत्यापित",queuedInCacheText:"🕒 स्थानिक कॅशमध्ये प्रतीक्षेत",closeBtn:"बंद करा",close:"बंद करा",confirm:"निश्चित करा",edit:"संपादित करा",delete:"हटवा",search:"शोधा",loading:"लोड होत आहे...",error:"काहीतरी चूक झाली",retry:"पुन्हा प्रयत्न करा",noData:"कोणताही डेटा उपलब्ध नाही",back:"मागे",done:"झाले"}};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),T=(e,t)=>{const s=S.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:o="",children:c,...u},g)=>S.createElement("svg",{ref:g,...dh,width:a,height:a,stroke:r,strokeWidth:l?Number(i)*24/Number(a):i,className:["lucide",`lucide-${uh(e)}`,o].join(" "),...u},[...t.map(([h,m])=>S.createElement(h,m)),...Array.isArray(c)?c:[c]]));return s.displayName=`${e}`,s};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=T("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=T("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=T("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=T("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=T("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=T("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=T("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=T("BatteryCharging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=T("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=T("Bluetooth",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=T("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=T("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=T("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=T("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=T("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=T("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=T("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=T("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=T("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=T("Delete",[["path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z",key:"1oy587"}],["line",{x1:"18",x2:"12",y1:"9",y2:"15",key:"1olkx5"}],["line",{x1:"12",x2:"18",y1:"9",y2:"15",key:"1n50pc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=T("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=T("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=T("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=T("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=T("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"aigmz7"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"1n6bmn"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8",key:"a9iiix"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=T("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=T("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=T("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=T("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=T("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=T("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=T("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=T("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=T("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=T("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=T("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=T("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=T("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=T("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=T("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=T("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=T("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=T("Recycle",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=T("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=T("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=T("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=T("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=T("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=T("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=T("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=T("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=T("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=T("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=T("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=T("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=T("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=T("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=T("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=T("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=T("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=T("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=T("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=T("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=T("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=T("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=T("ZapOff",[["polyline",{points:"12.41 6.75 13 2 10.57 4.92",key:"122m05"}],["polyline",{points:"18.57 12.91 21 10 15.66 10",key:"16r43o"}],["polyline",{points:"8 8 3 14 12 14 11 22 16 16",key:"tmh4bc"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=T("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);class Qh{constructor(){this.audioCtx=null}getAudioContext(){if(!this.audioCtx&&typeof window<"u"){const t=window.AudioContext||window.webkitAudioContext;t&&(this.audioCtx=new t)}return this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume(),this.audioCtx}vibrate(t=10){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate(t)}catch{}}tapTick(){this.vibrate(8);const t=this.getAudioContext();if(t)try{const s=t.createOscillator(),r=t.createGain();s.type="sine",s.frequency.setValueAtTime(600,t.currentTime),s.frequency.exponentialRampToValueAtTime(200,t.currentTime+.03),r.gain.setValueAtTime(.04,t.currentTime),r.gain.exponentialRampToValueAtTime(.001,t.currentTime+.03),s.connect(r),r.connect(t.destination),s.start(),s.stop(t.currentTime+.03)}catch{}}cameraShutter(){this.vibrate([20,30,20]);const t=this.getAudioContext();if(t)try{const s=t.sampleRate*.05,r=t.createBuffer(1,s,t.sampleRate),a=r.getChannelData(0);for(let c=0;c<s;c++)a[c]=Math.random()*2-1;const i=t.createBufferSource();i.buffer=r;const l=t.createBiquadFilter();l.type="bandpass",l.frequency.value=1200;const o=t.createGain();o.gain.setValueAtTime(.12,t.currentTime),o.gain.exponentialRampToValueAtTime(.001,t.currentTime+.05),i.connect(l),l.connect(o),o.connect(t.destination),i.start()}catch{}}successChime(){this.vibrate([30,50,40]);const t=this.getAudioContext();if(t)try{const s=t.currentTime;[523.25,659.25,783.99,1046.5].forEach((a,i)=>{const l=t.createOscillator(),o=t.createGain();l.type="triangle",l.frequency.setValueAtTime(a,s+i*.06),o.gain.setValueAtTime(.08,s+i*.06),o.gain.exponentialRampToValueAtTime(.001,s+i*.06+.25),l.connect(o),o.connect(t.destination),l.start(s+i*.06),l.stop(s+i*.06+.25)})}catch{}}warningTone(){this.vibrate([60,40,60]);const t=this.getAudioContext();if(t)try{const s=t.currentTime,r=t.createOscillator(),a=t.createGain();r.type="sawtooth",r.frequency.setValueAtTime(320,s),r.frequency.setValueAtTime(280,s+.1),a.gain.setValueAtTime(.06,s),a.gain.exponentialRampToValueAtTime(.001,s+.25),r.connect(a),a.connect(t.destination),r.start(s),r.stop(s+.25)}catch{}}speak(t,s="en",r,a){if(typeof window>"u"||!("speechSynthesis"in window)){a&&a();return}try{window.speechSynthesis.cancel();const i=new SpeechSynthesisUtterance(t);i.rate=.92,i.pitch=1.05;const l=window.speechSynthesis.getVoices();if(s==="hi"){i.lang="hi-IN";const o=l.find(c=>c.lang.includes("hi")||c.name.includes("Hindi"));o&&(i.voice=o)}else if(s==="mr"){i.lang="mr-IN";const o=l.find(c=>c.lang.includes("mr")||c.name.includes("Marathi"));o&&(i.voice=o)}else{i.lang="en-IN";const o=l.find(c=>c.lang.includes("en-IN")||c.name.includes("India"));o&&(i.voice=o)}r&&(i.onstart=r),i.onend=()=>{a&&a()},i.onerror=()=>{a&&a()},window.speechSynthesis.speak(i)}catch{a&&a()}}stopSpeaking(){typeof window<"u"&&"speechSynthesis"in window&&window.speechSynthesis.cancel()}}const W=new Qh,fo=["splash","language","auth","location","notification","home","book_pickup","step1_photo","step1_hazardous_battery_detected","step2_category","safety_tips","step3_weight","step4_value","step5_buyer","pickup_confirmation","payment","receipt","todays_prices","my_earnings","history","sync_status","profile"];function Yh({light:e,background:t}){const[s,r]=S.useState(()=>a(new Date));S.useEffect(()=>{const l=setInterval(()=>r(a(new Date)),15e3);return()=>clearInterval(l)},[]);function a(l){let o=l.getHours();const c=l.getMinutes();return o=o%12,o===0&&(o=12),`${o}:${c.toString().padStart(2,"0")}`}const i=e?"#FFFFFF":"#101A24";return n.jsxs("div",{className:`status-bar ${e?"status-bar-light":"status-bar-dark"}`,style:{background:t},children:[n.jsxs("div",{className:"status-bar-left",children:[n.jsx("span",{className:"time-display",children:s}),n.jsx("span",{className:"carrier-badge",children:"Jio 5G"})]}),n.jsx("div",{className:"dynamic-island",children:n.jsx("div",{className:"island-camera-dot"})}),n.jsxs("div",{className:"status-bar-icons",children:[n.jsxs("svg",{width:"17",height:"11",viewBox:"0 0 17 11",fill:"none",children:[n.jsx("rect",{x:"0",y:"7",width:"2.8",height:"4",rx:"0.8",fill:i}),n.jsx("rect",{x:"4.5",y:"5",width:"2.8",height:"6",rx:"0.8",fill:i}),n.jsx("rect",{x:"9",y:"2.5",width:"2.8",height:"8.5",rx:"0.8",fill:i}),n.jsx("rect",{x:"13.5",y:"0",width:"2.8",height:"11",rx:"0.8",fill:i})]}),n.jsx(Kh,{size:13,color:i,strokeWidth:2.6}),n.jsxs("div",{className:"battery-level-wrap",children:[n.jsx("span",{className:"battery-pct-text",children:"92%"}),n.jsxs("svg",{width:"24",height:"12",viewBox:"0 0 24 12",fill:"none",children:[n.jsx("rect",{x:"0.75",y:"0.75",width:"19",height:"10.5",rx:"3",stroke:i,strokeOpacity:"0.4",strokeWidth:"1"}),n.jsx("rect",{x:"2",y:"2",width:"15",height:"8",rx:"2",fill:e?"#4ADE80":"#0B6B4A"}),n.jsx("path",{d:"M21.5 4V8C22.2 7.6 22.6 6.8 22.6 6C22.6 5.2 22.2 4.4 21.5 4Z",fill:i,fillOpacity:"0.4"})]})]})]})]})}function Xh({currentScreen:e,setCurrentScreen:t,currentLang:s,setLanguage:r,children:a}){const[i,l]=S.useState(()=>typeof window>"u"?!1:window.innerWidth<=768||window.matchMedia("(max-width: 768px)").matches),[o,c]=S.useState(null),u=o!==null?o:i,[g,h]=S.useState("forward"),m=S.useRef(e);S.useEffect(()=>{if(typeof window>"u")return;const x=window.matchMedia("(max-width: 768px)"),w=p=>{const d=p.matches!==void 0?p.matches:window.innerWidth<=768;l(d),d&&c(null)};return x.addEventListener?x.addEventListener("change",w):x.addListener(w),window.addEventListener("resize",w),window.addEventListener("orientationchange",w),()=>{x.removeEventListener?x.removeEventListener("change",w):x.removeListener(w),window.removeEventListener("resize",w),window.removeEventListener("orientationchange",w)}},[]),S.useEffect(()=>{const x=fo.indexOf(m.current),w=fo.indexOf(e);h(w>=x?"forward":"backward"),m.current=e},[e]);const v=[{id:"splash",label:"1. Splash"},{id:"language",label:"2. Language"},{id:"auth",label:"3. Mobile & OTP"},{id:"location",label:"4. Location"},{id:"notification",label:"5. Notifications"},{id:"home",label:"6. Home"},{id:"book_pickup",label:"7. Book Pickup"},{id:"step1_photo",label:"8. Step 1: Photo"},{id:"step1_hazardous_battery_detected",label:"9. AI Hazard Alert"},{id:"step2_category",label:"10. Step 2: Category"},{id:"safety_tips",label:"11. Safety Tips"},{id:"step3_weight",label:"12. Step 3: Weight"},{id:"step4_value",label:"13. Step 4: Value"},{id:"step5_buyer",label:"14. Step 5: Buyer"},{id:"pickup_confirmation",label:"15. Pickup Scheduled"},{id:"payment",label:"16. Payment"},{id:"receipt",label:"17. Receipt"},{id:"todays_prices",label:"18. Today's Prices"},{id:"my_earnings",label:"19. My Earnings"},{id:"history",label:"20. History"},{id:"sync_status",label:"21. Sync Status"},{id:"profile",label:"22. Profile"}],y=e==="home";return n.jsxs("div",{className:`app-viewport-wrapper ${u?"fullscreen-active":""}`,children:[n.jsxs("div",{className:"control-toolbar",children:[n.jsxs("div",{className:"toolbar-brand",children:[n.jsx(Bh,{size:18,color:"#CAE0B8"}),n.jsx("span",{children:"Kabadiwala Connect Prototype"})]}),n.jsxs("div",{className:"toolbar-controls",children:[n.jsxs("button",{className:`btn-icon-toggle ${u?"":"active"}`,onClick:()=>c(!1),title:"Mobile Frame View",children:[n.jsx(mo,{size:14}),n.jsx("span",{children:"Phone"})]}),n.jsxs("button",{className:`btn-icon-toggle ${u?"active":""}`,onClick:()=>c(!0),title:"Full Screen View",children:[n.jsx(Ah,{size:14}),n.jsx("span",{children:"Full"})]}),n.jsx("div",{className:"lang-quick-group",children:["en","hi","mr"].map(x=>n.jsx("button",{className:`lang-chip ${s===x?"active":""}`,onClick:()=>r(x),children:x.toUpperCase()},x))})]})]}),n.jsx("div",{className:"stepper-nav-bar",children:v.map(x=>n.jsx("button",{className:`stepper-btn ${e===x.id?"active":""}`,onClick:()=>t(x.id),children:x.label},x.id))}),n.jsxs("div",{className:`phone-frame ${u?"full-screen-mode":""}`,children:[n.jsx(Yh,{light:y,background:y?"linear-gradient(180deg, #174826 0%, #1C522D 100%)":"transparent"}),n.jsx("div",{className:"screen-container","data-direction":g,children:a},e),n.jsx("div",{className:"phone-home-indicator"})]}),u&&!i&&n.jsx("button",{className:"exit-fullscreen-btn",onClick:()=>c(!1),title:"Exit Full Screen","aria-label":"Exit Full Screen",children:n.jsx(mo,{size:14})}),n.jsx("style",{children:`
        .stepper-nav-bar {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
          background: rgba(0, 0, 0, 0.4);
          padding: 6px 12px;
          border-radius: 20px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          flex-wrap: wrap;
          justify-content: center;
        }

        .stepper-btn {
          background: transparent;
          border: none;
          color: #A0AAB2;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .stepper-btn.active, .stepper-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          color: white;
        }

        .stepper-btn.active {
          color: #CAE0B8;
          font-weight: 700;
        }

        .lang-quick-group {
          display: flex;
          background: rgba(0, 0, 0, 0.25);
          border-radius: 14px;
          padding: 2px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .lang-chip {
          background: transparent;
          border: none;
          color: #A0AAB2;
          font-size: 10px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 10px;
          cursor: pointer;
        }

        .lang-chip.active {
          background: var(--brand-green);
          color: white;
        }

        /* Status Bar */
        .status-bar {
          width: 100%;
          height: 48px;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: -0.2px;
          z-index: 55;
          flex-shrink: 0;
          background: transparent;
          position: relative;
          transition: color 0.3s ease, background 0.3s ease;
        }

        .status-bar-dark {
          color: var(--brand-dark-text);
        }

        .status-bar-light {
          color: #FFFFFF;
        }

        .status-bar-icons {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .status-bar-left {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .carrier-badge {
          font-size: 10px;
          font-weight: 700;
          opacity: 0.75;
          letter-spacing: 0.1px;
        }

        .battery-level-wrap {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .battery-pct-text {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: -0.2px;
        }

        .dynamic-island {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 105px;
          height: 26px;
          background: #000000;
          border-radius: 16px;
          z-index: 60;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 12px;
        }

        .island-camera-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #1A1A1A;
          border: 1.5px solid #0D0D0D;
        }

        .full-screen-mode .dynamic-island {
          top: max(10px, env(safe-area-inset-top, 10px));
        }

        /* Mobile Phone Shell */
        .phone-frame {
          width: 100%;
          max-width: 390px;
          height: 844px;
          background: var(--surface-warm);
          border-radius: 44px;
          box-shadow: var(--elevation-device);
          border: 10px solid #2B332E;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: max-width 0.3s ease, height 0.3s ease, border-radius 0.3s ease;
        }

        .phone-frame.full-screen-mode {
          max-width: 100%;
          height: 100vh;
          height: 100dvh;
          border-radius: 0;
          border: none;
          box-shadow: none;
        }

        .full-screen-mode .status-bar {
          padding-top: env(safe-area-inset-top, 0px);
          height: calc(48px + env(safe-area-inset-top, 0px));
        }

        /* Dynamic Screen Viewport Area */
        .screen-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          background-color: var(--surface-warm);
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .screen-container::-webkit-scrollbar {
          display: none;
        }

        .screen-container[data-direction="forward"] {
          animation: slideInFromRight 0.32s cubic-bezier(0.32, 0.72, 0, 1) both;
        }

        .screen-container[data-direction="backward"] {
          animation: slideInFromLeft 0.32s cubic-bezier(0.32, 0.72, 0, 1) both;
        }

        @keyframes slideInFromRight {
          from { transform: translateX(28%); opacity: 0.4; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInFromLeft {
          from { transform: translateX(-28%); opacity: 0.4; }
          to { transform: translateX(0); opacity: 1; }
        }

        /* Bottom Bar Indicator */
        .phone-home-indicator {
          width: 134px;
          height: 5px;
          background-color: #1B1B1B;
          border-radius: 100px;
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 60;
          transition: background-color 0.3s ease;
        }

        .full-screen-mode .phone-home-indicator {
          bottom: max(8px, env(safe-area-inset-bottom, 8px));
        }

        /* Fullscreen mode & Mobile Media Query */
        .fullscreen-active .control-toolbar,
        .fullscreen-active .stepper-nav-bar {
          display: none !important;
        }

        .fullscreen-active {
          padding: 0 !important;
        }

        .exit-fullscreen-btn {
          position: fixed;
          top: max(14px, env(safe-area-inset-top, 14px));
          right: 14px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 200;
          opacity: 0.55;
          transition: opacity 0.2s ease;
        }

        .exit-fullscreen-btn:hover,
        .exit-fullscreen-btn:active {
          opacity: 1;
        }

        /* Pure Native Mobile Viewport (<= 768px) */
        @media (max-width: 768px) {
          .control-toolbar,
          .stepper-nav-bar,
          .exit-fullscreen-btn {
            display: none !important;
          }

          .app-viewport-wrapper {
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            height: 100% !important;
            min-height: 100dvh !important;
            background-color: var(--surface-warm) !important;
            justify-content: flex-start !important;
          }

          .phone-frame {
            width: 100% !important;
            max-width: 100% !important;
            height: 100dvh !important;
            min-height: 100dvh !important;
            border-radius: 0 !important;
            border: none !important;
            box-shadow: none !important;
            margin: 0 !important;
            background: var(--surface-warm) !important;
          }

          .dynamic-island {
            display: none !important;
          }

          .phone-home-indicator {
            display: none !important;
          }

          .status-bar {
            padding-top: env(safe-area-inset-top, 0px) !important;
            height: calc(44px + env(safe-area-inset-top, 0px)) !important;
            padding-left: max(16px, env(safe-area-inset-left, 16px)) !important;
            padding-right: max(16px, env(safe-area-inset-right, 16px)) !important;
          }

          .screen-container {
            width: 100% !important;
            height: 100% !important;
            flex: 1 !important;
          }
        }
      `})]})}function Zh({t:e,onNext:t}){return n.jsxs("div",{className:"splash-screen page-fade-enter",children:[n.jsx("div",{className:"splash-header",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/brand/kc_logo_lockup_transparent.png",alt:"Kabadiwala Connect Logo",className:"brand-logo-img"})}),n.jsx("div",{className:"splash-hero-container",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/splash_hero_illustration_transparent.png",alt:"E-waste Collection Illustration",className:"hero-illustration-img"})}),n.jsxs("div",{className:"splash-content-section",children:[n.jsx("h1",{className:"splash-headline",children:e.headline||"Connect. Collect. Recycle."}),n.jsx("p",{className:"splash-subheadline",children:e.subheadline||"A smart way to sell e-waste, earn better and build a cleaner future."}),n.jsxs("button",{className:"primary-button splash-cta-btn",onClick:t,children:[n.jsx("span",{children:e.getStarted}),n.jsx(Ct,{size:22,color:"#FFFFFF",strokeWidth:2.5})]}),n.jsxs("div",{className:"feature-badges-grid",children:[n.jsxs("div",{className:"feature-badge-item",children:[n.jsx("div",{className:"feature-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/badge_better_prices.png",alt:"Better Prices"})}),n.jsxs("div",{className:"feature-badge-text",children:[n.jsx("div",{className:"feature-title",children:e.betterPrices}),n.jsx("div",{className:"feature-desc",children:e.betterPricesDesc})]})]}),n.jsxs("div",{className:"feature-badge-item",children:[n.jsx("div",{className:"feature-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/badge_easy_pickups.png",alt:"Easy Pickups"})}),n.jsxs("div",{className:"feature-badge-text",children:[n.jsx("div",{className:"feature-title",children:e.easyPickups}),n.jsx("div",{className:"feature-desc",children:e.easyPickupsDesc})]})]}),n.jsxs("div",{className:"feature-badge-item",children:[n.jsx("div",{className:"feature-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/badge_safe_trusted.png",alt:"Safe & Trusted"})}),n.jsxs("div",{className:"feature-badge-text",children:[n.jsx("div",{className:"feature-title",children:e.safeTrusted}),n.jsx("div",{className:"feature-desc",children:e.safeTrustedDesc})]})]})]})]}),n.jsx("style",{children:`
        .splash-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8px 24px 28px 24px;
          height: 100%;
          justify-content: space-between;
          background-color: var(--surface-warm);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .splash-header {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 4px;
          margin-bottom: 6px;
          width: 100%;
        }

        .brand-logo-img {
          height: clamp(60px, 12vh, 90px);
          max-width: 85%;
          object-fit: contain;
        }

        .splash-hero-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 8px;
          flex: 1 1 auto;
          min-height: 0;
        }

        .hero-illustration-img {
          width: 100%;
          max-width: 320px;
          height: auto;
          max-height: clamp(140px, 28vh, 220px);
          object-fit: contain;
        }

        .splash-content-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex-shrink: 0;
        }

        .splash-headline {
          font-size: clamp(20px, 5.5vw, 24px);
          font-weight: 800;
          color: var(--brand-deep-green);
          margin-bottom: 6px;
          letter-spacing: -0.3px;
          line-height: 1.25;
        }

        .splash-subheadline {
          font-size: clamp(12px, 3.5vw, 13.5px);
          color: var(--text-secondary);
          max-width: 320px;
          line-height: 1.45;
          margin-bottom: 16px;
        }

        .splash-cta-btn {
          height: 56px;
          width: 100%;
          border-radius: 22px;
          background-color: var(--brand-deep-green);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 17px;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 18px;
          box-shadow: 0 6px 16px rgba(28, 82, 45, 0.25);
        }

        .feature-badges-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 2px;
        }

        .feature-badge-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .feature-icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }

        .feature-icon-wrapper img {
          width: 52px;
          height: 52px;
          object-fit: contain;
        }

        .feature-title {
          font-size: 12.5px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 3px;
        }

        .feature-desc {
          font-size: 10.5px;
          color: var(--text-secondary);
          line-height: 1.3;
          white-space: pre-line;
        }
      `})]})}function Jh({t:e,currentLang:t,setLanguage:s,onNext:r,onBack:a}){const i=[{code:"en",name:"English",icon:"Aa"},{code:"hi",name:"हिंदी",icon:"आ"},{code:"mr",name:"मराठी",icon:"म"}];return n.jsxs("div",{className:"language-screen page-fade-enter",children:[n.jsx("div",{className:"top-nav-bar",children:a&&n.jsx("button",{className:"back-arrow-btn",onClick:a,"aria-label":"Go Back",children:n.jsx(ae,{size:20,color:"#1C522D"})})}),n.jsxs("div",{className:"language-container",children:[n.jsx("h1",{className:"language-title",children:e.chooseLanguage}),n.jsx("div",{className:"language-list",children:i.map(l=>{const o=t===l.code;return n.jsxs("div",{className:`language-card ${o?"selected":""}`,onClick:()=>s(l.code),children:[n.jsxs("div",{className:"language-card-left",children:[n.jsx("div",{className:"lang-icon-badge",children:l.icon}),n.jsx("span",{className:"lang-name",children:l.name})]}),n.jsx("div",{className:`radio-circle ${o?"active":""}`,children:o&&n.jsx("div",{className:"radio-inner-dot"})})]},l.code)})})]}),n.jsx("div",{className:"language-footer",children:n.jsx("button",{className:"primary-button continue-btn",onClick:r,children:e.continue})}),n.jsx("style",{children:`
        .language-screen {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px 24px 32px 24px;
          height: 100%;
          background-color: var(--surface-warm);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .top-nav-bar {
          width: 100%;
          display: flex;
          align-items: center;
          height: 40px;
        }

        .language-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-top: 16px;
        }

        .language-title {
          font-size: 28px;
          font-weight: 800;
          color: var(--brand-dark-text);
          margin-bottom: 32px;
          text-align: center;
        }

        .language-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
        }

        .language-card {
          width: 100%;
          height: 72px;
          background: var(--white);
          border: 1.5px solid var(--border-soft);
          border-radius: var(--radius-card);
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .language-card:hover {
          border-color: var(--brand-green);
        }

        .language-card.selected {
          background-color: #EEF4EA;
          border: 2px solid var(--brand-green);
          box-shadow: 0 2px 10px rgba(83, 138, 70, 0.12);
        }

        .language-card-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .lang-icon-badge {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #E1E5CE;
          color: var(--brand-deep-green);
          font-size: 18px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .language-card.selected .lang-icon-badge {
          background: var(--brand-green);
          color: white;
        }

        .lang-name {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .radio-circle {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 2px solid #C4C9C2;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .radio-circle.active {
          border-color: var(--brand-green);
        }

        .radio-inner-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: var(--brand-green);
        }

        .language-footer {
          width: 100%;
          margin-top: auto;
        }

        .continue-btn {
          height: 56px;
          border-radius: 22px;
          background-color: var(--brand-deep-green);
          box-shadow: 0 6px 16px rgba(28, 82, 45, 0.25);
        }
      `})]})}function em({t:e,onSkip:t,onAuthenticated:s,onBack:r}){const[a,i]=S.useState(""),[l,o]=S.useState("phone"),[c,u]=S.useState(["","","",""]),g=()=>{l==="otp"?o("phone"):r&&r()},h=y=>{if(l==="phone")y==="backspace"?i(x=>x.slice(0,-1)):a.length<10&&i(x=>x+y);else if(y==="backspace"){const x=[...c];for(let w=3;w>=0;w--)if(x[w]!==""){x[w]="";break}u(x)}else{const x=[...c];for(let w=0;w<4;w++)if(x[w]===""){x[w]=y;break}u(x)}},m=()=>{l==="phone"?(a.length<10&&i("9876543210"),o("otp")):s({phone:a||"9876543210"})},v=[{num:"1",sub:""},{num:"2",sub:"ABC"},{num:"3",sub:"DEF"},{num:"4",sub:"GHI"},{num:"5",sub:"JKL"},{num:"6",sub:"MNO"},{num:"7",sub:"PQRS"},{num:"8",sub:"TUV"},{num:"9",sub:"WXYZ"},{num:"",sub:""},{num:"0",sub:""},{num:"backspace",sub:""}];return n.jsxs("div",{className:"auth-screen page-fade-enter",children:[n.jsxs("div",{className:"auth-header",children:[n.jsx("button",{className:"back-arrow-btn",onClick:g,"aria-label":"Go Back",children:n.jsx(ae,{size:20,color:"#1C522D"})}),n.jsx("button",{className:"skip-pill",onClick:t,children:e.skip})]}),n.jsx("div",{className:"auth-body",children:l==="phone"?n.jsxs(n.Fragment,{children:[n.jsx("h1",{className:"auth-title",children:e.enterMobile}),n.jsx("p",{className:"auth-subtitle",children:e.otpSubtitle}),n.jsxs("div",{className:`phone-input-box ${a?"has-value":""}`,children:[n.jsxs("div",{className:"country-code",children:[n.jsx("span",{children:"+91"}),n.jsx(Sn,{size:16,color:"#538A46"})]}),n.jsx("div",{className:"input-divider"}),n.jsx("div",{className:"phone-display-value",children:a||n.jsx("span",{className:"placeholder",children:e.mobilePlaceholder})})]}),n.jsx("button",{className:"primary-button continue-btn",onClick:m,children:e.continue}),n.jsxs("p",{className:"terms-disclaimer",children:[e.termsText," ",n.jsx("a",{href:"#terms",children:e.termsOfService}),","," ",n.jsx("a",{href:"#privacy",children:e.privacyPolicy})," and ",n.jsx("a",{href:"#content",children:e.contentPolicy}),"."]})]}):n.jsxs(n.Fragment,{children:[n.jsx("h1",{className:"auth-title",children:e.verifyOtpTitle}),n.jsxs("p",{className:"auth-subtitle",children:[e.verifyOtpSubtitle," ",n.jsxs("strong",{children:["+91 ",a||"9876543210"]})]}),n.jsx("div",{className:"otp-input-container",children:[0,1,2,3].map(y=>n.jsx("div",{className:`otp-box ${c[y]?"filled":""}`,children:c[y]||(y===c.findIndex(x=>x==="")?"|":"")},y))}),n.jsx("button",{className:"primary-button continue-btn",onClick:m,children:e.verify}),n.jsxs("div",{className:"resend-otp-link",onClick:()=>u(["1","2","3","4"]),children:[e.resendOtp," (Tap to Auto-Fill 1234)"]})]})}),n.jsx("div",{className:"custom-keypad",children:v.map((y,x)=>y.num===""?n.jsx("div",{className:"keypad-cell empty"},x):y.num==="backspace"?n.jsx("div",{className:"keypad-cell backspace-cell",onClick:()=>h("backspace"),children:n.jsx(kh,{size:22,color:"#1B1B1B"})},x):n.jsxs("div",{className:"keypad-cell",onClick:()=>h(y.num),children:[n.jsx("div",{className:"key-num",children:y.num}),y.sub&&n.jsx("div",{className:"key-sub",children:y.sub})]},x))}),n.jsx("style",{children:`
        .auth-screen {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px 20px 20px 20px;
          height: 100%;
          background-color: var(--surface-warm);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .auth-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .auth-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-top: 24px;
        }

        .auth-title {
          font-size: 26px;
          font-weight: 800;
          color: var(--brand-deep-green);
          margin-bottom: 8px;
          line-height: 1.2;
        }

        .auth-subtitle {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 24px;
          line-height: 1.4;
        }

        .phone-input-box {
          width: 100%;
          height: 58px;
          background: var(--white);
          border: 1.5px solid var(--border-soft);
          border-radius: var(--radius-card);
          display: flex;
          align-items: center;
          padding: 0 16px;
          margin-bottom: 20px;
          transition: all 0.2s ease;
        }

        .phone-input-box.has-value {
          border: 2px solid var(--brand-green);
          background-color: #FAFCF8;
        }

        .country-code {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 16px;
          font-weight: 700;
          color: var(--brand-deep-green);
        }

        .input-divider {
          width: 1px;
          height: 24px;
          background-color: #DDE2D7;
          margin: 0 14px;
        }

        .phone-display-value {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: 1px;
        }

        .placeholder {
          color: #9EA39F;
          font-weight: 400;
          letter-spacing: normal;
        }

        .continue-btn {
          height: 56px;
          border-radius: 22px;
          background-color: var(--brand-deep-green);
          margin-bottom: 16px;
          box-shadow: 0 6px 16px rgba(28, 82, 45, 0.25);
        }

        .terms-disclaimer {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.5;
          text-align: left;
        }

        .terms-disclaimer a {
          color: var(--brand-green);
          text-decoration: underline;
          font-weight: 600;
        }

        /* OTP Specific */
        .otp-input-container {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 24px;
        }

        .otp-box {
          flex: 1;
          height: 60px;
          background: white;
          border: 1.5px solid var(--border-soft);
          border-radius: var(--radius-card);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 800;
          color: var(--brand-deep-green);
        }

        .otp-box.filled {
          border-color: var(--brand-green);
          background-color: #F4F8F1;
        }

        .resend-otp-link {
          text-align: center;
          font-size: 13px;
          font-weight: 600;
          color: var(--brand-green);
          cursor: pointer;
          margin-top: 4px;
        }

        /* Keypad Styling matching iOS/Android raster in UI_THEME */
        .custom-keypad {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          width: 100%;
          margin-top: auto;
          padding-top: 10px;
        }

        .keypad-cell {
          height: 52px;
          background: var(--white);
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 1px 3px rgba(0,0,0,0.08);
          cursor: pointer;
          user-select: none;
          transition: background-color 0.1s ease;
        }

        .keypad-cell:active {
          background-color: #E2E6DE;
        }

        .keypad-cell.empty {
          background: transparent;
          box-shadow: none;
          cursor: default;
        }

        .key-num {
          font-size: 22px;
          font-weight: 600;
          color: #1B1B1B;
          line-height: 1;
        }

        .key-sub {
          font-size: 9px;
          font-weight: 700;
          color: #8E9390;
          margin-top: 2px;
          letter-spacing: 0.5px;
        }

        .backspace-cell {
          background: transparent;
          box-shadow: none;
        }
      `})]})}function tm({t:e,onNext:t,onBack:s}){return n.jsxs("div",{className:"location-screen page-fade-enter",children:[n.jsx("div",{className:"top-nav-bar",children:s&&n.jsx("button",{className:"back-arrow-btn",onClick:s,"aria-label":"Go Back",children:n.jsx(ae,{size:20,color:"#1C522D"})})}),n.jsx("div",{className:"location-hero-container",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/illustrations/location_hero_transparent_clean.png",alt:"Map Location Hero",className:"location-hero-img"})}),n.jsxs("div",{className:"location-content",children:[n.jsx("h1",{className:"location-title",children:e.whatsYourLocation}),n.jsx("p",{className:"location-subtitle",children:e.locationSubtitle}),n.jsxs("div",{className:"location-bullets-list",children:[n.jsxs("div",{className:"bullet-item",children:[n.jsx("div",{className:"bullet-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/bullet_nearby_badge.png",alt:"Find Nearby"})}),n.jsxs("div",{className:"bullet-text",children:[n.jsx("div",{className:"bullet-title",children:e.findNearbyPartners}),n.jsx("div",{className:"bullet-desc",children:e.findNearbyPartnersDesc})]})]}),n.jsxs("div",{className:"bullet-item",children:[n.jsx("div",{className:"bullet-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/bullet_faster_badge.png",alt:"Faster Pickups"})}),n.jsxs("div",{className:"bullet-text",children:[n.jsx("div",{className:"bullet-title",children:e.fasterPickups}),n.jsx("div",{className:"bullet-desc",children:e.fasterPickupsDesc})]})]}),n.jsxs("div",{className:"bullet-item",children:[n.jsx("div",{className:"bullet-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/bullet_secure_badge.png",alt:"Secure & Private"})}),n.jsxs("div",{className:"bullet-text",children:[n.jsx("div",{className:"bullet-title",children:e.securePrivate}),n.jsx("div",{className:"bullet-desc",children:e.securePrivateDesc})]})]})]})]}),n.jsxs("div",{className:"location-actions",children:[n.jsxs("button",{className:"primary-button loc-primary-btn",onClick:t,children:[n.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/current_location_clean.png",alt:"Current Location",className:"btn-icon-img"}),n.jsx("span",{children:e.useCurrentLocation})]}),n.jsxs("button",{className:"secondary-button loc-secondary-btn",onClick:t,children:[n.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/search_location_clean.png",alt:"Search Location",className:"btn-icon-img"}),n.jsx("span",{children:e.searchLocationManually})]})]}),n.jsx("style",{children:`
        .location-screen {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px 20px 24px 20px;
          height: 100%;
          background-color: var(--surface-warm);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .top-nav-bar {
          width: 100%;
          display: flex;
          align-items: center;
          height: 40px;
        }

        .location-hero-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 4px;
          margin-bottom: 12px;
        }

        .location-hero-img {
          max-width: 90%;
          height: auto;
          max-height: 210px;
          object-fit: contain;
        }

        .location-content {
          width: 100%;
        }

        .location-title {
          font-size: 26px;
          font-weight: 800;
          color: var(--brand-dark-text);
          margin-bottom: 6px;
          line-height: 1.25;
        }

        .location-subtitle {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.45;
          margin-bottom: 24px;
        }

        .location-bullets-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .bullet-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .bullet-icon-wrapper img {
          width: 44px;
          height: 44px;
          object-fit: contain;
        }

        .bullet-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .bullet-desc {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.35;
        }

        .location-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: auto;
          padding-top: 16px;
        }

        .btn-icon-img {
          width: 22px;
          height: 22px;
          object-fit: contain;
          flex-shrink: 0;
        }

        .loc-primary-btn {
          height: 56px;
          border-radius: 22px;
          background-color: var(--brand-deep-green);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 16px;
          font-weight: 700;
          color: #FFFFFF;
          box-shadow: 0 6px 16px rgba(28, 82, 45, 0.25);
        }

        .loc-secondary-btn {
          height: 56px;
          border-radius: 22px;
          background-color: var(--white);
          border: 1.5px solid var(--brand-green);
          color: var(--brand-deep-green);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 16px;
          font-weight: 700;
        }
      `})]})}function nm({t:e,onNext:t,onBack:s}){return n.jsxs("div",{className:"notification-screen page-fade-enter",children:[n.jsx("div",{className:"top-nav-bar",children:s&&n.jsx("button",{className:"back-arrow-btn",onClick:s,"aria-label":"Go Back",children:n.jsx(ae,{size:20,color:"#1C522D"})})}),n.jsx("div",{className:"notification-hero-container",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Notification_UI_Asset_Pack/illustrations/notification_permission_hero_transparent.png",alt:"Notification Permission Hero",className:"notification-hero-img"})}),n.jsxs("div",{className:"notification-content",children:[n.jsx("h1",{className:"notification-title",children:e.allowNotificationsTitle}),n.jsxs("div",{className:"notification-bullets-list",children:[n.jsxs("div",{className:"bullet-item",children:[n.jsx("div",{className:"bullet-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Notification_UI_Asset_Pack/icons/notif_partner_badge.png",alt:"Partner Updates"})}),n.jsxs("div",{className:"bullet-text",children:[n.jsx("div",{className:"bullet-title",children:e.realtimePartnerUpdates}),n.jsx("div",{className:"bullet-desc",children:e.realtimePartnerUpdatesDesc})]})]}),n.jsxs("div",{className:"bullet-item",children:[n.jsx("div",{className:"bullet-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Notification_UI_Asset_Pack/icons/notif_offers_badge.png",alt:"Offers & News"})}),n.jsxs("div",{className:"bullet-text",children:[n.jsx("div",{className:"bullet-title",children:e.offersAndNews}),n.jsx("div",{className:"bullet-desc",children:e.offersAndNewsDesc})]})]})]})]}),n.jsxs("div",{className:"notification-actions",children:[n.jsx("button",{className:"primary-button notif-primary-btn",onClick:t,children:n.jsx("span",{children:e.allowPermission})}),n.jsx("button",{className:"secondary-button notif-secondary-btn",onClick:t,children:n.jsx("span",{children:e.maybeLater})})]}),n.jsx("style",{children:`
        .notification-screen {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px 20px 24px 20px;
          height: 100%;
          background-color: var(--surface-warm);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .top-nav-bar {
          width: 100%;
          display: flex;
          align-items: center;
          height: 40px;
        }

        .notification-hero-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 4px;
          margin-bottom: 16px;
        }

        .notification-hero-img {
          max-width: 90%;
          height: auto;
          max-height: 220px;
          object-fit: contain;
        }

        .notification-content {
          width: 100%;
        }

        .notification-title {
          font-size: 26px;
          font-weight: 800;
          color: var(--brand-dark-text);
          margin-bottom: 24px;
          line-height: 1.25;
        }

        .notification-bullets-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .bullet-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .bullet-icon-wrapper img {
          width: 44px;
          height: 44px;
          object-fit: contain;
        }

        .bullet-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .bullet-desc {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.35;
        }

        .notification-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: auto;
          padding-top: 16px;
        }

        .notif-primary-btn {
          height: 56px;
          border-radius: 22px;
          background-color: var(--brand-deep-green);
          box-shadow: 0 6px 16px rgba(28, 82, 45, 0.25);
        }

        .notif-secondary-btn {
          height: 56px;
          border-radius: 22px;
          background-color: var(--white);
          border: 1.5px solid var(--brand-green);
          color: var(--brand-deep-green);
        }
      `})]})}function sm({t:e,user:t,currentLang:s,onNavigate:r}){const[a,i]=S.useState("home"),[l,o]=S.useState("Rohini, Delhi"),[c,u]=S.useState(!1),[g,h]=S.useState(null),[m,v]=S.useState(!1),[y,x]=S.useState(!0),[w,p]=S.useState(null),[d,f]=S.useState(0),k=[{id:0,title:e.slide0Title||`Hassle-free
Scrap Collection`,subtitle:e.slide0Subtitle||`Schedule your
pickup in seconds.`,btnText:e.slide0Btn||"Request Pickup",image:"/assets/home/truck_hero.png",tag:e.slide0Tag||"Verified Fleet"},{id:1,title:e.slide1Title||`Instant AI
Rate Discovery`,subtitle:e.slide1Subtitle||`Scan circuit boards &
get fair market cash.`,btnText:e.slide1Btn||"Scan Now",image:"/assets/home/icon_ewaste.png",tag:e.slide1Tag||"AI Powered"},{id:2,title:e.slide2Title||`Highest Payout
Guaranteed`,subtitle:e.slide2Subtitle||`CPCB authorized partners
with zero middlemen.`,btnText:e.slide2Btn||"View Rates",image:"/assets/home/icon_sell_scrap.png",tag:e.slide2Tag||"Best Rates"}],_=[{name:e.motherboards||"Motherboards (Grade A)",category:e.ewaste||"E-Waste",rate:"₹340 / kg",trend:"+4.5%",icon:"💻"},{name:e.copperWiring||"Copper Wiring (Clean)",category:e.metals||"Metals",rate:"₹420 / kg",trend:"+2.1%",icon:"🔌"},{name:e.lithiumBatteries||"Lithium-Ion Batteries",category:e.batteries||"Batteries",rate:"₹185 / kg",trend:"+1.2%",icon:"🔋"},{name:e.telecomPCBs||"Telecom & Server PCBs",category:e.highValue||"High Value",rate:"₹520 / kg",trend:"+6.8%",icon:"📡"},{name:e.mixedMobile||"Mixed Mobile Scrap",category:e.ewaste||"E-Waste",rate:"₹290 / kg",trend:"+0.5%",icon:"📱"},{name:e.aluminium||"Aluminium Heatsinks",category:e.metals||"Metals",rate:"₹145 / kg",trend:"-1.0%",icon:"⚙️"}],j=[{id:"BK-8821",partner:"EcoMet Recycling India",status:"Driver Arriving in 12 mins",material:"PCB & Electronic Scrap (14.5 kg)",estPayout:"₹4,640",time:"Today, 4:30 PM",active:!0},{id:"BK-8790",partner:"GreenTech Urban Processors",status:"Completed & Paid via UPI",material:"Copper Cable & Adapters (8.2 kg)",estPayout:"₹2,870",time:"Yesterday, 2:15 PM",active:!1}],P=["Rohini, Delhi","Andheri West, Mumbai","Koramangala, Bengaluru","Kothrud, Pune","Connaught Place, Delhi"];S.useEffect(()=>{const b=setInterval(()=>{f(A=>(A+1)%k.length)},4500);return()=>clearInterval(b)},[k.length]);const B=()=>{v(!0),x(!0),p(null),setTimeout(()=>{x(!1),p({detected:"Printed Circuit Board (Grade A) + Copper Core",confidence:"96.4%",weight:"12.8 kg",rate:"₹340 / kg",payout:"₹4,352"})},2200)};return n.jsxs("div",{className:"home-screen page-fade-enter",children:[n.jsxs("div",{className:"home-scroll-container",children:[n.jsxs("div",{className:"home-header",children:[n.jsxs("div",{className:"header-top-row",children:[n.jsxs("div",{className:"brand-header-group",children:[n.jsx("div",{className:"logo-badge",children:n.jsx("img",{src:"/assets/home/logo_kc.png",alt:"KC Mark"})}),n.jsxs("div",{className:"brand-text-group",children:[n.jsxs("div",{className:"brand-title",children:[n.jsx("strong",{className:"bold-white",children:"Kabadiwala"}),n.jsx("span",{className:"light-green",children:" Connect"})]}),n.jsx("div",{className:"brand-tagline",children:e.tagline||"Cleaner today, greener tomorrow"})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[n.jsxs("button",{className:"header-sync-pill",onClick:()=>r?r("sync_status"):null,title:"Offline Sync Status",children:[n.jsx("span",{className:"pulsing-dot amber",style:{width:"6px",height:"6px"}}),n.jsx("span",{children:"Sync (3)"})]}),n.jsxs("button",{className:"notif-btn ring-animation",onClick:()=>h("notifications"),"aria-label":"Notifications",children:[n.jsx(xh,{size:19,color:"#FFFFFF"}),n.jsx("span",{className:"notif-dot pulse-dot"})]})]})]}),n.jsxs("div",{className:"greeting-row",children:[n.jsxs("div",{className:"user-greeting",children:[n.jsxs("h1",{children:[e.hiGreeting||"Hi",", ",(t==null?void 0:t.name)||"Rakesh","!"]}),n.jsx("p",{children:e.readyToday||"Ready to make a difference today?"})]}),n.jsxs("div",{className:"location-pill interactive-chip",onClick:()=>u(!c),children:[n.jsx(Je,{size:13,color:"#FFFFFF"}),n.jsx("span",{children:l}),n.jsx(Sn,{size:13,color:"#FFFFFF"})]})]}),c&&n.jsx("div",{className:"location-dropdown slide-down-enter",children:P.map(b=>n.jsxs("div",{className:`loc-item ${l===b?"active":""}`,onClick:()=>{o(b),u(!1)},children:[n.jsx(Je,{size:14}),n.jsx("span",{children:b})]},b))})]}),a==="home"&&n.jsxs("div",{className:"home-body tab-content-fade",children:[n.jsxs("div",{className:"carousel-wrapper",children:[n.jsxs("div",{className:"hero-pickup-card animated-card",children:[n.jsx("span",{className:"card-top-tag",children:k[d].tag}),n.jsxs("div",{className:"hero-card-left",children:[n.jsx("h2",{className:"slide-title",children:k[d].title}),n.jsx("p",{className:"slide-sub",children:k[d].subtitle}),n.jsxs("button",{className:"request-pickup-btn elastic-button",onClick:()=>{d===1?B():d===2?i("rates"):h("pickup")},children:[n.jsx("span",{children:k[d].btnText}),n.jsx(Ct,{size:16,color:"#1C522D",strokeWidth:2.5})]})]}),n.jsx("div",{className:"hero-card-right",children:n.jsx("img",{src:k[d].image,alt:"Feature Graphic",className:"truck-illustration float-animation"},d)})]}),n.jsx("div",{className:"carousel-dots",children:k.map((b,A)=>n.jsx("span",{className:`dot ${d===A?"active":""}`,onClick:()=>f(A)},b.id))})]}),n.jsxs("div",{className:"hub-grid",children:[n.jsxs("div",{className:"grid-card card-mint hover-lift",onClick:()=>r?r("step1_photo"):h("pickup"),children:[n.jsx("div",{className:"card-header-icon",children:n.jsx("img",{src:"/assets/home/icon_sell_scrap.png",alt:"Sell Scrap",className:"hub-icon-img"})}),n.jsxs("div",{className:"card-info",children:[n.jsx("h3",{children:e.sellScrap||"Sell Scrap"}),n.jsx("p",{children:e.sellScrapDesc||"Get the best price"})]}),n.jsx("div",{className:"arrow-badge",children:n.jsx(ye,{size:15,color:"#1C522D"})})]}),n.jsxs("div",{className:"grid-card card-warm hover-lift",onClick:()=>B(),children:[n.jsx("div",{className:"card-header-icon",children:n.jsx("img",{src:"/assets/home/icon_ewaste.png",alt:"E-Waste Collection",className:"hub-icon-img"})}),n.jsxs("div",{className:"card-info",children:[n.jsx("h3",{children:e.eWasteCollection?e.eWasteCollection.split(`
`).map((b,A)=>A===0?b:n.jsxs(n.Fragment,{children:[n.jsx("br",{},A),b]})):n.jsxs(n.Fragment,{children:["E-Waste",n.jsx("br",{}),"Collection"]})}),n.jsx("p",{children:e.eWasteDesc||"Pickup at your doorstep"})]}),n.jsx("div",{className:"arrow-badge",children:n.jsx(ye,{size:15,color:"#1C522D"})})]}),n.jsxs("div",{className:"grid-card card-warm hover-lift",onClick:()=>r?r("my_earnings"):h("earnings"),children:[n.jsx("div",{className:"card-header-icon",children:n.jsx("img",{src:"/assets/home/icon_earnings.png",alt:"My Earnings",className:"hub-icon-img"})}),n.jsxs("div",{className:"card-info",children:[n.jsx("h3",{children:e.myEarnings||"My Earnings"}),n.jsx("p",{children:e.myEarningsDesc||"Track your income"})]}),n.jsx("div",{className:"arrow-badge",children:n.jsx(ye,{size:15,color:"#1C522D"})})]}),n.jsxs("div",{className:"grid-card card-mint hover-lift",onClick:()=>r?r("history"):h("history"),children:[n.jsx("div",{className:"card-header-icon",children:n.jsx("img",{src:"/assets/home/icon_history.png",alt:"View History",className:"hub-icon-img"})}),n.jsxs("div",{className:"card-info",children:[n.jsx("h3",{children:e.viewHistory||"View History"}),n.jsx("p",{children:e.viewHistoryDesc||"Track your activity"})]}),n.jsx("div",{className:"arrow-badge",children:n.jsx(ye,{size:15,color:"#1C522D"})})]})]}),n.jsxs("div",{className:"market-trends-card hover-lift",onClick:()=>r?r("todays_prices"):i("rates"),children:[n.jsxs("div",{className:"mt-left",children:[n.jsx("div",{className:"mt-icon-wrapper pulse-soft",children:n.jsx("img",{src:"/assets/home/icon_trends.png",alt:"Market Trends",className:"trends-icon-img"})}),n.jsxs("div",{className:"mt-text",children:[n.jsx("h3",{children:e.marketTrends||"Market Trends"}),n.jsx("p",{children:e.marketTrendsDesc||"See what's in demand today"})]})]}),n.jsx("div",{className:"arrow-badge",children:n.jsx(ye,{size:15,color:"#1C522D"})})]})]}),a==="bookings"&&n.jsxs("div",{className:"home-body tab-content-fade",children:[n.jsxs("div",{className:"section-title-row",children:[n.jsx("h2",{children:"Active Bookings"}),n.jsx("span",{className:"count-pill",children:"2 Total"})]}),n.jsx("div",{className:"bookings-list",children:j.map(b=>n.jsxs("div",{className:`booking-card ${b.active?"active-bk":""}`,children:[n.jsxs("div",{className:"bk-header",children:[n.jsxs("div",{children:[n.jsx("span",{className:"bk-id",children:b.id}),n.jsx("h3",{className:"bk-partner",children:b.partner})]}),n.jsx("span",{className:`bk-status-tag ${b.active?"tag-live":"tag-done"}`,children:b.active?"● Driver En Route":"✓ Completed"})]}),n.jsxs("div",{className:"bk-body",children:[n.jsxs("div",{className:"bk-mat",children:["📦 ",b.material]}),n.jsxs("div",{className:"bk-time",children:["🕒 ",b.time]})]}),n.jsxs("div",{className:"bk-footer",children:[n.jsxs("div",{className:"bk-payout",children:[n.jsx("span",{children:"Estimated Payout:"}),n.jsx("strong",{children:b.estPayout})]}),b.active&&n.jsxs("button",{className:"call-driver-btn",onClick:()=>alert("Calling driver..."),children:[n.jsx(Dh,{size:14}),n.jsx("span",{children:"Call Driver"})]})]})]},b.id))})]}),a==="rates"&&n.jsxs("div",{className:"home-body tab-content-fade",children:[n.jsxs("div",{className:"rates-header-box",children:[n.jsx("h2",{children:"Live Scrap Rates"}),n.jsxs("p",{children:["Verified real-time CPCB market quotes for ",l]})]}),n.jsx("div",{className:"rates-table-list",children:_.map((b,A)=>n.jsxs("div",{className:"rate-table-row hover-lift",children:[n.jsxs("div",{className:"rate-left",children:[n.jsx("span",{className:"rate-emoji",children:b.icon}),n.jsxs("div",{children:[n.jsx("h4",{children:b.name}),n.jsx("span",{className:"rate-cat-tag",children:b.category})]})]}),n.jsxs("div",{className:"rate-right",children:[n.jsx("div",{className:"rate-val",children:b.rate}),n.jsx("span",{className:`rate-trend ${b.trend.startsWith("+")?"up":"down"}`,children:b.trend})]})]},A))})]}),a==="profile"&&n.jsxs("div",{className:"home-body tab-content-fade",children:[n.jsxs("div",{className:"profile-card",children:[n.jsxs("div",{className:"profile-top",children:[n.jsx("div",{className:"prof-avatar",children:n.jsx("span",{children:"RK"})}),n.jsxs("div",{className:"prof-info",children:[n.jsx("h3",{children:(t==null?void 0:t.name)||"Rakesh Kumar"}),n.jsxs("p",{children:["📱 +91 ",(t==null?void 0:t.phone)||"9876543210"]}),n.jsxs("span",{className:"cpcb-verified-badge",children:[n.jsx(kn,{size:13,color:"#1C522D"}),n.jsx("span",{children:"CPCB Level-1 Collector"})]})]})]}),n.jsxs("div",{className:"profile-stats-grid",children:[n.jsxs("div",{className:"p-stat",children:[n.jsx("span",{children:"Total Recycled"}),n.jsx("strong",{children:"148.5 kg"})]}),n.jsxs("div",{className:"p-stat",children:[n.jsx("span",{children:"Lifetime Earnings"}),n.jsx("strong",{children:"₹42,850"})]})]})]}),n.jsxs("div",{className:"profile-actions-list",children:[n.jsxs("div",{className:"p-action-row",onClick:()=>h("earnings"),children:[n.jsx("span",{children:"💰 Payment Ledger & Bank Accounts"}),n.jsx(ye,{size:16,color:"#8C938E"})]}),n.jsxs("div",{className:"p-action-row",onClick:()=>h("history"),children:[n.jsx("span",{children:"📄 Handover Certificates (Form-2)"}),n.jsx(ye,{size:16,color:"#8C938E"})]}),n.jsxs("div",{className:"p-action-row",onClick:()=>u(!0),children:[n.jsx("span",{children:"📍 Preferred Service Zone"}),n.jsx(ye,{size:16,color:"#8C938E"})]})]})]})]}),m&&n.jsxs("div",{className:"camera-overlay page-fade-enter",children:[n.jsxs("div",{className:"camera-header",children:[n.jsxs("div",{className:"cam-title-group",children:[n.jsx(si,{size:18,color:"#FFC837"}),n.jsx("span",{children:"AI Material Valuation Scan"})]}),n.jsx("button",{className:"close-cam-btn",onClick:()=>v(!1),children:n.jsx(le,{size:20,color:"#FFFFFF"})})]}),n.jsxs("div",{className:"cam-viewfinder",children:[n.jsxs("div",{className:"scanner-target-box",children:[n.jsx("div",{className:"corner top-left"}),n.jsx("div",{className:"corner top-right"}),n.jsx("div",{className:"corner bottom-left"}),n.jsx("div",{className:"corner bottom-right"}),y&&n.jsx("div",{className:"cam-laser-line"}),n.jsx("img",{src:"/assets/home/truck_hero.png",alt:"Scanning E-Waste",className:"cam-feed-preview"}),w&&n.jsx("div",{className:"detection-bounding-box page-fade-enter",children:n.jsx("span",{className:"det-tag",children:"PCB Grade A • 96.4% Match"})})]}),y?n.jsxs("div",{className:"cam-status-pill",children:[n.jsx(Ji,{size:14,className:"spin-fast"}),n.jsx("span",{children:"Analyzing precious metal composition..."})]}):w&&n.jsxs("div",{className:"scan-summary-drawer slide-up-enter",children:[n.jsx("div",{className:"drawer-handle"}),n.jsxs("div",{className:"drawer-header",children:[n.jsx(Kt,{size:24,color:"#538A46"}),n.jsxs("div",{children:[n.jsx("h3",{children:"AI Valuation Confirmed"}),n.jsx("p",{children:w.detected})]})]}),n.jsxs("div",{className:"drawer-stats",children:[n.jsxs("div",{className:"d-box",children:[n.jsx("span",{children:"Estimated Weight"}),n.jsx("strong",{children:w.weight})]}),n.jsxs("div",{className:"d-box",children:[n.jsx("span",{children:"Market Rate"}),n.jsx("strong",{children:w.rate})]})]}),n.jsxs("div",{className:"d-total-banner",children:[n.jsxs("div",{children:[n.jsx("span",{children:"Total Payout Guarantee"}),n.jsx("h2",{children:w.payout})]}),n.jsx("button",{className:"confirm-deal-btn",onClick:()=>{v(!1),h("pickup")},children:"Schedule Pickup"})]})]})]})]}),g&&n.jsx("div",{className:"modal-backdrop",onClick:()=>h(null),children:n.jsxs("div",{className:"modal-card slide-up-enter",onClick:b=>b.stopPropagation(),children:[n.jsx("div",{className:"drawer-handle"}),n.jsxs("div",{className:"modal-header",children:[n.jsxs("h3",{children:[g==="pickup"&&"Schedule Scrap Pickup",g==="earnings"&&"My Earnings Ledger",g==="history"&&"Pickup & Transaction History",g==="trends"&&"Today's Market Rates",g==="notifications"&&"Notifications"]}),n.jsx("button",{className:"close-modal-btn",onClick:()=>h(null),children:n.jsx(le,{size:18,color:"#1C522D"})})]}),n.jsxs("div",{className:"modal-body",children:[g==="pickup"&&n.jsxs("div",{className:"pickup-form-demo",children:[n.jsxs("p",{className:"modal-sub",children:["Select e-waste category & schedule doorstep pickup in ",n.jsx("strong",{children:l}),":"]}),n.jsxs("div",{className:"cat-pills",children:[n.jsx("span",{className:"cat-pill active",children:"Computer PCBs"}),n.jsx("span",{className:"cat-pill",children:"Mobile Phones"}),n.jsx("span",{className:"cat-pill",children:"Batteries"}),n.jsx("span",{className:"cat-pill",children:"Copper Cable"})]}),n.jsxs("div",{className:"rate-estimate-box",children:[n.jsx("span",{children:"Estimated Instant Payout:"}),n.jsx("strong",{children:"₹320 / kg (Direct UPI / Cash)"})]}),n.jsx("button",{className:"primary-button",onClick:()=>{alert(`Doorstep pickup scheduled successfully for ${l}!`),h(null)},children:"Confirm Doorstep Pickup"})]}),g==="earnings"&&n.jsxs("div",{className:"earnings-demo",children:[n.jsxs("div",{className:"total-earnings-box",children:[n.jsx("span",{children:"Total Earnings This Month"}),n.jsx("h2",{children:"₹18,450"}),n.jsx("span",{className:"sub-stat",children:"100% Verified CPCB Handover Credits"})]}),n.jsxs("div",{className:"history-item",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"PCB Scrap Lot #982"}),n.jsx("div",{className:"h-date",children:"Today • Rohini Hub"})]}),n.jsx("span",{className:"h-amt",children:"+₹4,640"})]}),n.jsxs("div",{className:"history-item",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Copper Scrap Lot #971"}),n.jsx("div",{className:"h-date",children:"2 days ago • UPI Credit"})]}),n.jsx("span",{className:"h-amt",children:"+₹3,810"})]})]}),g==="history"&&n.jsxs("div",{className:"history-demo",children:[n.jsxs("div",{className:"history-item",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"EcoMet Recycling Pvt Ltd"}),n.jsx("div",{className:"h-date",children:"Lot #KC-8842 • 14.5 kg"})]}),n.jsx("span",{className:"h-amt",children:"✓ Handed Over"})]}),n.jsxs("div",{className:"history-item",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"JNARDDC Verified Facility"}),n.jsx("div",{className:"h-date",children:"Lot #KC-8710 • 22.0 kg"})]}),n.jsx("span",{className:"h-amt",children:"✓ Handed Over"})]})]}),g==="notifications"&&n.jsxs("div",{className:"notif-demo",children:[n.jsxs("div",{className:"notif-card",children:[n.jsx(tl,{size:20,color:"#538A46"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Driver On The Way!"}),n.jsx("p",{children:"EcoMet Pickup partner is 1.2 km away from your location."}),n.jsx("span",{className:"notif-time",children:"Just now"})]})]}),n.jsxs("div",{className:"notif-card",children:[n.jsx(si,{size:20,color:"#FFC837"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Rate Increase Alert"}),n.jsx("p",{children:"Copper wiring rate jumped +₹15/kg today."}),n.jsx("span",{className:"notif-time",children:"2h ago"})]})]})]})]})]})}),n.jsxs("div",{className:"home-nav-bar",children:[n.jsxs("button",{className:`nav-tab ${a==="home"?"active":""}`,onClick:()=>i("home"),children:[n.jsx(Gt,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabHome||"Home"})]}),n.jsxs("button",{className:`nav-tab ${a==="bookings"?"active":""}`,onClick:()=>r?r("book_pickup"):i("bookings"),children:[n.jsx($t,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabBookings||"Bookings"})]}),n.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:()=>r?r("step1_photo"):B(),"aria-label":"Camera Scan",children:[n.jsx(_t,{size:26,color:"#FFFFFF"}),n.jsx("span",{className:"fab-label",children:e.tabScan||"Scan"})]}),n.jsxs("button",{className:`nav-tab ${a==="rates"?"active":""}`,onClick:()=>r?r("todays_prices"):i("rates"),children:[n.jsx(fs,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabRates||"Rates"})]}),n.jsxs("button",{className:`nav-tab ${a==="profile"?"active":""}`,onClick:()=>r?r("profile"):i("profile"),children:[n.jsx(bt,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabProfile||"Profile"})]})]}),n.jsx("style",{children:`
        .home-screen {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          background-color: #F8FAF6;
          position: relative;
          overflow: hidden;
        }

        /* Single Unified Smooth Scroll Container */
        .home-scroll-container {
          flex: 1;
          width: 100%;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-y: contain;
          scrollbar-width: none;
          -ms-overflow-style: none;
          display: flex;
          flex-direction: column;
        }

        .home-scroll-container::-webkit-scrollbar {
          display: none;
        }

        /* Live Market Marquee */
        .live-ticker-bar {
          background: #0E2916;
          color: white;
          padding: 6px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 600;
          z-index: 15;
          flex-shrink: 0;
        }

        .live-badge {
          background: #E84D4D;
          color: white;
          font-size: 9px;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 4px;
          letter-spacing: 0.5px;
        }

        .ticker-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #CAE0B8;
        }

        /* Top Deep Green Header */
        .home-header {
          background: linear-gradient(180deg, #164624 0%, #1C522D 100%);
          color: white;
          padding: 12px 20px 22px 20px;
          border-bottom-left-radius: 26px;
          border-bottom-right-radius: 26px;
          position: relative;
          z-index: 10;
          box-shadow: 0 4px 20px rgba(22, 70, 36, 0.18);
          flex-shrink: 0;
        }

        .header-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        .brand-header-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-badge {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: transform 0.2s ease;
        }

        .logo-badge:hover {
          transform: rotate(10deg) scale(1.05);
        }

        .logo-badge img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .brand-title {
          font-size: 16px;
          line-height: 1.1;
        }

        .bold-white {
          font-weight: 800;
          color: #FFFFFF;
        }

        .light-green {
          font-weight: 500;
          color: #CAE0B8;
        }

        .brand-tagline {
          font-size: 10px;
          color: #CAE0B8;
          opacity: 0.9;
          margin-top: 1px;
        }

        .notif-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          transition: transform 0.15s ease;
        }

        .notif-btn:active {
          transform: scale(0.9);
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #FFC837;
          position: absolute;
          top: 8px;
          right: 8px;
          box-shadow: 0 0 8px #FFC837;
          animation: pulse 1.6s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 200, 55, 0.7); }
          70% { transform: scale(1.15); box-shadow: 0 0 0 6px rgba(255, 200, 55, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 200, 55, 0); }
        }

        .greeting-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .user-greeting h1 {
          font-size: 22px;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 2px;
        }

        .user-greeting p {
          font-size: 12px;
          color: #CAE0B8;
          opacity: 0.9;
        }

        .location-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(8px);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          color: #FFFFFF;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .location-pill:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        .location-dropdown {
          position: absolute;
          top: 100%;
          right: 20px;
          background: white;
          border-radius: 14px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
          width: 210px;
          overflow: hidden;
          z-index: 60;
          margin-top: 8px;
        }

        .loc-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 14px;
          font-size: 13px;
          color: #1B1B1B;
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .loc-item:hover, .loc-item.active {
          background: #F0F6EC;
          color: #1C522D;
          font-weight: 700;
        }

        /* Scrollable Body Content */
        .home-body {
          flex: 1;
          padding: 16px 16px 110px 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        /* Hero Carousel Card */
        .carousel-wrapper {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .hero-pickup-card {
          background: #EBF4E8;
          border-radius: 22px;
          padding: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          box-shadow: 0 4px 14px rgba(28, 82, 45, 0.06);
          border: 1px solid #D6E4CF;
          overflow: hidden;
        }

        .card-top-tag {
          position: absolute;
          top: 12px;
          left: 18px;
          font-size: 10px;
          font-weight: 800;
          color: #1C522D;
          background: #DCEBD6;
          padding: 2px 8px;
          border-radius: 10px;
          letter-spacing: 0.3px;
        }

        .slide-title {
          font-size: 18px;
          font-weight: 800;
          color: #1C522D;
          line-height: 1.25;
          margin-top: 18px;
          margin-bottom: 4px;
          white-space: pre-line;
        }

        .slide-sub {
          font-size: 12px;
          color: #5F6361;
          margin-bottom: 14px;
          line-height: 1.3;
          white-space: pre-line;
        }

        .request-pickup-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #F5B82E;
          color: #1C522D;
          font-weight: 800;
          font-size: 13px;
          padding: 10px 16px;
          border-radius: 18px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(245, 184, 46, 0.35);
          transition: transform 0.15s ease;
        }

        .request-pickup-btn:active {
          transform: scale(0.95);
        }

        .hero-card-right {
          width: 135px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .truck-illustration {
          width: 100%;
          height: auto;
          max-height: 110px;
          object-fit: contain;
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }

        /* Carousel Dots */
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 6px;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #D5DDD0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          width: 18px;
          border-radius: 10px;
          background: #1C522D;
        }

        /* 2x2 Hub Grid */
        .hub-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .grid-card {
          border-radius: 20px;
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 148px;
          position: relative;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(0,0,0,0.04);
        }

        .hover-lift:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 18px rgba(28, 82, 45, 0.1);
        }

        .hover-lift:active {
          transform: scale(0.96);
        }

        .card-mint {
          background: #E8F4E6;
        }

        .card-warm {
          background: #FAF4EB;
        }

        .card-header-icon {
          height: 52px;
          display: flex;
          align-items: flex-start;
          margin-bottom: 8px;
        }

        .hub-icon-img {
          height: 50px;
          max-width: 100%;
          object-fit: contain;
          transition: transform 0.2s ease;
        }

        .grid-card:hover .hub-icon-img {
          transform: scale(1.06);
        }

        .card-info h3 {
          font-size: 15px;
          font-weight: 800;
          color: #1B1B1B;
          line-height: 1.2;
          margin-bottom: 3px;
        }

        .card-info p {
          font-size: 11px;
          color: #5F6361;
        }

        .arrow-badge {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(28, 82, 45, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          right: 14px;
          bottom: 14px;
          transition: transform 0.2s ease;
        }

        .grid-card:hover .arrow-badge, .market-trends-card:hover .arrow-badge {
          transform: translateX(2px);
          background: #1C522D;
          color: white;
        }

        .grid-card:hover .arrow-badge svg, .market-trends-card:hover .arrow-badge svg {
          stroke: white;
        }

        /* Market Trends Row Card */
        .market-trends-card {
          background: #E8F3EB;
          border-radius: 20px;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          border: 1px solid #D2E4D8;
          position: relative;
          transition: all 0.2s ease;
        }

        .mt-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .mt-icon-wrapper {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .trends-icon-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .mt-text h3 {
          font-size: 15px;
          font-weight: 800;
          color: #1B1B1B;
        }

        .mt-text p {
          font-size: 11px;
          color: #5F6361;
        }

        /* Bookings View */
        .section-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
        }

        .section-title-row h2 {
          font-size: 18px;
          font-weight: 800;
          color: #1C522D;
        }

        .count-pill {
          font-size: 11px;
          font-weight: 700;
          color: #538A46;
          background: #EAF3E7;
          padding: 3px 8px;
          border-radius: 12px;
        }

        .bookings-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .booking-card {
          background: white;
          border: 1px solid #E2E8DE;
          border-radius: 18px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .booking-card.active-bk {
          border: 1.5px solid #538A46;
          box-shadow: 0 4px 16px rgba(83, 138, 70, 0.12);
        }

        .bk-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .bk-id {
          font-size: 10px;
          font-weight: 800;
          color: #5F6361;
        }

        .bk-partner {
          font-size: 15px;
          font-weight: 800;
          color: #1B1B1B;
        }

        .bk-status-tag {
          font-size: 10px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 10px;
        }

        .tag-live {
          background: #E2F5E0;
          color: #16701E;
        }

        .tag-done {
          background: #F0F2EF;
          color: #5F6361;
        }

        .bk-mat {
          font-size: 12px;
          font-weight: 600;
          color: #1B1B1B;
        }

        .bk-time {
          font-size: 11px;
          color: #5F6361;
        }

        .bk-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 8px;
          border-top: 1px solid #F0F4EC;
        }

        .bk-payout span {
          font-size: 10px;
          color: #5F6361;
          display: block;
        }

        .bk-payout strong {
          font-size: 15px;
          color: #1C522D;
        }

        .call-driver-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #1C522D;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
        }

        /* Rates View */
        .rates-header-box {
          background: #1C522D;
          color: white;
          padding: 16px;
          border-radius: 18px;
          margin-bottom: 6px;
        }

        .rates-header-box h2 {
          font-size: 18px;
          font-weight: 800;
        }

        .rates-header-box p {
          font-size: 11px;
          color: #CAE0B8;
          margin-top: 2px;
        }

        .rates-table-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .rate-table-row {
          background: white;
          border: 1px solid #E4EAE0;
          border-radius: 14px;
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .rate-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .rate-emoji {
          font-size: 22px;
        }

        .rate-left h4 {
          font-size: 13px;
          font-weight: 700;
          color: #1B1B1B;
        }

        .rate-cat-tag {
          font-size: 10px;
          color: #5F6361;
          background: #F0F4EC;
          padding: 2px 6px;
          border-radius: 6px;
        }

        .rate-right {
          text-align: right;
        }

        .rate-val {
          font-size: 14px;
          font-weight: 800;
          color: #1C522D;
        }

        .rate-trend {
          font-size: 10px;
          font-weight: 700;
        }

        .rate-trend.up {
          color: #16701E;
        }

        .rate-trend.down {
          color: #C94C4C;
        }

        /* Profile View */
        .profile-card {
          background: white;
          border-radius: 20px;
          padding: 18px;
          border: 1px solid #E2E8DE;
          box-shadow: 0 4px 14px rgba(0,0,0,0.04);
        }

        .profile-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }

        .prof-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #1C522D;
          color: white;
          font-size: 18px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .prof-info h3 {
          font-size: 16px;
          font-weight: 800;
          color: #1B1B1B;
        }

        .prof-info p {
          font-size: 11px;
          color: #5F6361;
        }

        .cpcb-verified-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: #E8F4E6;
          color: #1C522D;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 10px;
          margin-top: 4px;
        }

        .profile-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          padding-top: 12px;
          border-top: 1px solid #F0F4EC;
        }

        .p-stat {
          background: #F8FAF6;
          padding: 10px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
        }

        .p-stat span {
          font-size: 10px;
          color: #5F6361;
        }

        .p-stat strong {
          font-size: 15px;
          color: #1C522D;
        }

        .profile-actions-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 12px;
        }

        .p-action-row {
          background: white;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid #E4EAE0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          font-weight: 600;
          color: #1B1B1B;
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .p-action-row:hover {
          background: #F0F6EC;
        }

        /* Camera Scanner Fullscreen Overlay */
        .camera-overlay {
          position: absolute;
          inset: 0;
          background: #000000;
          z-index: 100;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .camera-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 20px;
          color: white;
          background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%);
          z-index: 110;
        }

        .cam-title-group {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 700;
          color: white;
        }

        .close-cam-btn {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .cam-viewfinder {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 20px;
        }

        .scanner-target-box {
          width: 260px;
          height: 260px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .corner {
          position: absolute;
          width: 24px;
          height: 24px;
          border-color: #538A46;
          border-style: solid;
        }

        .top-left { top: 0; left: 0; border-width: 3px 0 0 3px; border-top-left-radius: 12px; }
        .top-right { top: 0; right: 0; border-width: 3px 3px 0 0; border-top-right-radius: 12px; }
        .bottom-left { bottom: 0; left: 0; border-width: 0 0 3px 3px; border-bottom-left-radius: 12px; }
        .bottom-right { bottom: 0; right: 0; border-width: 0 3px 3px 0; border-bottom-right-radius: 12px; }

        .cam-laser-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 3px;
          background: #538A46;
          box-shadow: 0 0 16px #538A46, 0 0 30px #538A46;
          animation: laserScan 2s infinite ease-in-out;
          z-index: 10;
        }

        @keyframes laserScan {
          0% { top: 10%; }
          50% { top: 85%; }
          100% { top: 10%; }
        }

        .cam-feed-preview {
          width: 80%;
          height: 80%;
          object-fit: contain;
          opacity: 0.85;
        }

        .detection-bounding-box {
          position: absolute;
          inset: 20px;
          border: 2px solid #538A46;
          border-radius: 12px;
          background: rgba(83, 138, 70, 0.15);
          display: flex;
          align-items: flex-start;
          padding: 6px;
        }

        .det-tag {
          background: #1C522D;
          color: white;
          font-size: 10px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .cam-status-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(28, 82, 45, 0.85);
          color: white;
          font-size: 12px;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 20px;
          margin-top: 24px;
        }

        .spin-fast {
          animation: spin 1s linear infinite;
        }

        /* Scan Summary Bottom Drawer */
        .scan-summary-drawer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          border-top-left-radius: 26px;
          border-top-right-radius: 26px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .drawer-handle {
          width: 40px;
          height: 4px;
          background: #D8DFD5;
          border-radius: 10px;
          margin: -8px auto 6px auto;
        }

        .drawer-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .drawer-header h3 {
          font-size: 16px;
          font-weight: 800;
          color: #1C522D;
        }

        .drawer-header p {
          font-size: 12px;
          color: #5F6361;
        }

        .drawer-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .d-box {
          background: #F4F8F1;
          padding: 10px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
        }

        .d-box span {
          font-size: 10px;
          color: #5F6361;
        }

        .d-box strong {
          font-size: 14px;
          color: #1C522D;
        }

        .d-total-banner {
          background: #1C522D;
          color: white;
          border-radius: 16px;
          padding: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .d-total-banner span {
          font-size: 11px;
          opacity: 0.85;
          display: block;
        }

        .d-total-banner h2 {
          font-size: 22px;
          font-weight: 800;
        }

        .confirm-deal-btn {
          background: #F5B82E;
          color: #1C522D;
          border: none;
          font-size: 12px;
          font-weight: 800;
          padding: 8px 14px;
          border-radius: 12px;
          cursor: pointer;
        }

        /* Bottom Fixed 5-Tab Bar */
        .home-nav-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 76px;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 0 10px 10px 10px;
          z-index: 50;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.06);
        }

        .nav-tab {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          background: transparent;
          border: none;
          color: #8C938E;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          flex: 1;
          transition: color 0.15s ease, transform 0.15s ease;
        }

        .nav-tab:active {
          transform: scale(0.92);
        }

        .nav-tab.active {
          color: #1C522D;
          font-weight: 800;
        }

        .nav-tab.active .tab-icon {
          transform: translateY(-2px);
          transition: transform 0.2s ease;
        }

        .nav-fab-camera {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #1C522D;
          border: 4px solid #FFFFFF;
          box-shadow: 0 6px 16px rgba(28, 82, 45, 0.35);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-top: -24px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .nav-fab-camera:active {
          transform: scale(0.92);
        }

        .camera-glow-btn:hover {
          box-shadow: 0 8px 24px rgba(28, 82, 45, 0.5);
        }

        .fab-label {
          font-size: 9px;
          color: white;
          font-weight: 700;
          margin-top: 1px;
        }

        /* Modal Dialogs */
        .modal-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(5px);
          z-index: 90;
          display: flex;
          align-items: flex-end;
        }

        .modal-card {
          width: 100%;
          background: white;
          border-top-left-radius: 26px;
          border-top-right-radius: 26px;
          padding: 20px;
          max-height: 80%;
          overflow-y: auto;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        .modal-header h3 {
          font-size: 17px;
          font-weight: 800;
          color: #1C522D;
        }

        .close-modal-btn {
          background: #EBF2E8;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .modal-sub {
          font-size: 13px;
          color: #5F6361;
          margin-bottom: 14px;
        }

        .cat-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }

        .cat-pill {
          padding: 7px 14px;
          border-radius: 20px;
          background: #F0F4EC;
          font-size: 12px;
          font-weight: 600;
          color: #1B1B1B;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .cat-pill:hover, .cat-pill.active {
          background: #1C522D;
          color: white;
        }

        .rate-estimate-box {
          background: #FAF5EB;
          border: 1px solid #EAE0CE;
          padding: 12px;
          border-radius: 12px;
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          margin-bottom: 16px;
        }

        .total-earnings-box {
          background: linear-gradient(135deg, #1C522D 0%, #2A6E3F 100%);
          color: white;
          padding: 18px;
          border-radius: 16px;
          text-align: center;
          margin-bottom: 16px;
        }

        .total-earnings-box h2 {
          font-size: 32px;
          font-weight: 800;
          margin-top: 4px;
        }

        .sub-stat {
          font-size: 11px;
          opacity: 0.85;
          margin-top: 4px;
          display: block;
        }

        .history-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background: #F8FAF6;
          border-radius: 12px;
          margin-bottom: 8px;
        }

        .h-date {
          font-size: 11px;
          color: #5F6361;
        }

        .h-amt {
          font-weight: 800;
          color: #538A46;
        }

        .notif-card {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          background: #EFF6EC;
          padding: 14px;
          border-radius: 14px;
          margin-bottom: 10px;
        }

        .notif-card p {
          font-size: 12px;
          color: #5F6361;
          margin-top: 2px;
        }

        .notif-time {
          font-size: 10px;
          color: #8C938E;
          margin-top: 4px;
          display: block;
        }

        /* Fluid Entrance Animations */
        .tab-content-fade {
          animation: tabFade 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes tabFade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .slide-up-enter {
          animation: slideUp 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .slide-down-enter {
          animation: slideDown 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `})]})}function rm({t:e={},onNext:t,onBack:s}){const[r,a]=S.useState(!1),[i,l]=S.useState(!1),[o,c]=S.useState("/assets/Kabadiwala_Connect_Step1_TakePhoto_UI_Asset_Pack/01_camera_illustration/scrap_photo_reference.jpg"),[u,g]=S.useState("pcb"),h=S.useRef(null),m=[{num:1,label:e.stepPhoto||"Photo",active:!0},{num:2,label:e.stepCategory||"Category",active:!1},{num:3,label:e.stepWeight||"Weight",active:!1},{num:4,label:e.stepValue||"Value",active:!1},{num:5,label:e.stepBuyer||"Buyer",active:!1}],v=[{id:"pcb",name:e.itemPcb||"PCB Board",isBattery:!1,categoryName:"PCB (Circuit Board)",image:"/assets/Kabadiwala_Connect_Step1_TakePhoto_UI_Asset_Pack/01_camera_illustration/scrap_photo_reference.jpg"},{id:"battery",name:e.itemBattery||"Car Battery",isBattery:!0,categoryName:"Car Battery",image:"/assets/Kabadiwala_Connect_Hazardous_Battery_Detected_UI_Asset_Pack/02_app_assets/camera_preview_reference.png"},{id:"cables",name:e.itemCables||"Copper Cables",isBattery:!1,categoryName:"Cables & Wires",image:"/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/cables_wires_thumbnail_reference.png"},{id:"lcd",name:e.itemLcd||"LCD Display",isBattery:!1,categoryName:"LCD Display",image:"/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/lcd_display_thumbnail_reference.png"}],y=d=>{W.tapTick(),g(d.id),c(d.image)},x=()=>{W.cameraShutter(),l(!0),setTimeout(()=>{l(!1);const d=u==="battery";t&&t({photoUrl:o,flashUsed:r,isHazardous:d,categoryId:d?"car_battery":u,categoryName:d?"Car Battery":u==="cables"?"Cables & Wires":u==="lcd"?"LCD Display":"PCB (Circuit Board)"})},450)},w=()=>{W.tapTick(),h.current&&h.current.click()},p=d=>{var k;const f=(k=d.target.files)==null?void 0:k[0];if(f){const _=new FileReader;_.onload=j=>{c(j.target.result),g("custom")},_.readAsDataURL(f)}};return n.jsxs("div",{className:"step1-photo-screen page-fade-enter",children:[n.jsx("input",{type:"file",ref:h,onChange:p,accept:"image/*",style:{display:"none"}}),n.jsxs("div",{className:"step-header",children:[n.jsx("button",{className:"step-back-btn",onClick:s,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsxs("div",{className:"step-header-text",children:[n.jsx("h1",{className:"step-title",children:e.takePhotoTitle||"Take a photo of your scrap"}),n.jsx("p",{className:"step-subtitle",children:e.takePhotoSub||"Make sure the item is clearly visible"})]})]}),n.jsxs("div",{className:"stepper-container",children:[n.jsx("div",{className:"stepper-line"}),n.jsx("div",{className:"stepper-steps",children:m.map(d=>n.jsxs("div",{className:`stepper-item ${d.active?"active":""}`,children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:d.num})}),n.jsx("span",{className:"stepper-label",children:d.label})]},d.num))})]}),n.jsx("div",{className:"camera-viewfinder-container",children:n.jsxs("div",{className:`camera-viewfinder ${i?"shutter-flash":""}`,children:[n.jsx("img",{src:o,alt:"Scrap Camera Feed",className:"camera-feed-img"}),r&&n.jsx("div",{className:"flash-active-indicator",title:"Flash Enabled"}),n.jsx("div",{className:"corner-bracket top-left"}),n.jsx("div",{className:"corner-bracket top-right"}),n.jsx("div",{className:"corner-bracket bottom-left"}),n.jsx("div",{className:"corner-bracket bottom-right"}),n.jsxs("div",{className:"viewfinder-pill-overlay",children:[n.jsx(_t,{size:16,color:"#FFFFFF",strokeWidth:2.2}),n.jsx("span",{children:e.positionScrapHint||"Position your scrap within the frame"})]}),i&&n.jsx("div",{className:"shutter-flash-overlay"})]})}),n.jsxs("div",{className:"camera-controls-bar",children:[n.jsxs("button",{className:"control-action-btn",onClick:()=>a(!r),"aria-label":"Toggle Flash",children:[n.jsx("div",{className:`control-icon-circle ${r?"active-flash":""}`,children:r?n.jsx(tl,{size:22,color:"#D89B2B",strokeWidth:2.2}):n.jsx(qh,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("span",{className:"control-label-title",children:e.flashLabel||"Flash"}),n.jsx("span",{className:"control-label-sub",children:r?e.flashOn||"On":e.flashOff||"Off"})]}),n.jsx("button",{className:"shutter-btn-outer",onClick:x,"aria-label":"Capture Photo",children:n.jsx("div",{className:"shutter-btn-inner"})}),n.jsxs("button",{className:"control-action-btn",onClick:w,"aria-label":"Choose from Gallery",children:[n.jsx("div",{className:"control-icon-circle",children:n.jsx(Bd,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("span",{className:"control-label-title",children:e.galleryLabel||"Gallery"}),n.jsx("span",{className:"control-label-sub",children:e.gallerySub||"Choose from photos"})]})]}),n.jsxs("div",{className:"sample-picker-section",children:[n.jsx("span",{className:"sample-picker-title",children:e.chooseSamplePhoto||"Or choose a sample scrap item:"}),n.jsx("div",{className:"sample-tiles-row",children:v.map(d=>{const f=u===d.id;return n.jsxs("button",{className:`sample-tile-btn ${f?"selected":""}`,onClick:()=>y(d),children:[n.jsx("img",{src:d.image,alt:d.name,className:"sample-thumb"}),n.jsx("span",{className:"sample-name",children:d.name}),f&&n.jsx("div",{className:"sample-checked-dot",children:n.jsx(V,{size:10,color:"#FFFFFF",strokeWidth:3.5})})]},d.id)})})]}),n.jsxs("div",{className:"step1-tip-card",children:[n.jsx("div",{className:"tip-icon-circle",children:n.jsx(Th,{size:20,color:"#FFFFFF",strokeWidth:2.2})}),n.jsxs("div",{className:"tip-text-content",children:[n.jsx("h4",{className:"tip-heading",children:e.tipClearPhotoTitle||"Take a clear photo"}),n.jsx("p",{className:"tip-body",children:e.tipClearPhotoDesc||"Good lighting and a clear view help our AI determine exact value."})]})]}),n.jsx("style",{children:`
        .sample-picker-section {
          margin: 10px 16px 4px 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sample-picker-title {
          font-size: 11px;
          font-weight: 700;
          color: #6B7280;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .sample-tiles-row {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 4px;
          scrollbar-width: none;
        }

        .sample-tiles-row::-webkit-scrollbar {
          display: none;
        }

        .sample-tile-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #FFFFFF;
          border: 1.5px solid #E2E8DC;
          border-radius: 12px;
          padding: 4px 8px;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          position: relative;
          transition: all 0.15s ease;
        }

        .sample-tile-btn:hover {
          border-color: #0B6B4A;
        }

        .sample-tile-btn.selected {
          border-color: #0B6B4A;
          background: #EEF6ED;
        }

        .sample-thumb {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          object-fit: cover;
        }

        .sample-name {
          font-size: 12px;
          font-weight: 600;
          color: #101A24;
        }

        .sample-checked-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #0B6B4A;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 2px;
        }
      `})]})}function am({t:e,photoUrl:t,initialCategory:s="pcb",onNext:r,onBack:a,onRetake:i}){const[l,o]=S.useState(s||"pcb"),c=[{id:"crt_tv",title:e.itemCrtTv||"CRT TV",sub:null,image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/crt_tv_reference.jpg"},{id:"lcd_display",title:e.itemLcd||"LCD Display",sub:null,image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/lcd_display_reference.jpg"},{id:"pcb",title:e.itemPcb||"PCB",sub:e.itemPcbSub?`(${e.itemPcbSub})`:"(Circuit Board)",image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/pcb_circuit_board_reference.jpg"},{id:"cables_wires",title:e.itemCables||"Cables & Wires",sub:null,image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/cables_wires_reference.jpg"},{id:"car_battery",title:e.itemBattery||"Car Battery",sub:null,image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/car_battery_reference.jpg"},{id:"motor_magnet",title:e.itemMotor||"Motor & Magnet",sub:null,image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/motor_magnet_reference.jpg"},{id:"mixed_plastic",title:e.itemPlastic||"Mixed Plastic",sub:null,image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/mixed_plastic_reference.jpg"},{id:"other_items",title:e.itemOther||"Other Items",sub:null,image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/other_items_reference.jpg"}],u=()=>{const h=c.find(m=>m.id===l);r&&r({categoryId:l,categoryName:h?h.title:e.itemPcb||"PCB",categorySub:(h==null?void 0:h.sub)||"",categoryImage:h==null?void 0:h.image})},g=t||"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/captured_photo_thumbnail.jpg";return n.jsxs("div",{className:"step2-category-screen page-fade-enter",children:[n.jsxs("div",{className:"step-header",children:[n.jsx("button",{className:"step-back-btn",onClick:a,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("div",{className:"step-header-text",children:n.jsx("h1",{className:"step-title",children:e.selectCategoryTitle||"Select Scrap Category"})})]}),n.jsxs("div",{className:"stepper-container",children:[n.jsx("div",{className:"stepper-line"}),n.jsx("div",{className:"stepper-line-progress",style:{width:"25%"}}),n.jsxs("div",{className:"stepper-steps",children:[n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(V,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepPhoto||"Photo"})]}),n.jsxs("div",{className:"stepper-item active",children:[n.jsx("div",{className:"stepper-circle active",children:n.jsx("span",{children:"2"})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepCategory||"Category"})]}),n.jsxs("div",{className:"stepper-item",children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:"3"})}),n.jsx("span",{className:"stepper-label",children:e.stepWeight||"Weight"})]}),n.jsxs("div",{className:"stepper-item",children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:"4"})}),n.jsx("span",{className:"stepper-label",children:e.stepValue||"Value"})]}),n.jsxs("div",{className:"stepper-item",children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:"5"})}),n.jsx("span",{className:"stepper-label",children:e.stepBuyer||"Buyer"})]})]})]}),n.jsxs("div",{className:"captured-photo-card",children:[n.jsx("img",{src:g,alt:"Captured scrap preview",className:"captured-thumbnail-img"}),n.jsxs("div",{className:"captured-info",children:[n.jsx("h4",{className:"captured-title",children:e.capturedPhotoTitle||"Captured Photo"}),n.jsx("p",{className:"captured-subtitle",children:e.capturedPhotoSub||"Tap to retake or change"})]}),n.jsx("button",{className:"change-photo-btn",onClick:i||a,"aria-label":"Change Photo",children:e.changeBtn||"Change"})]}),n.jsxs("div",{className:"category-section-header",children:[n.jsx("h2",{className:"category-heading",children:e.whatTypeOfScrap||"What type of scrap is this?"}),n.jsx("p",{className:"category-subheading",children:e.chooseClosestCategory||"Choose the closest category."})]}),n.jsx("div",{className:"category-grid",children:c.map(h=>{const m=l===h.id;return n.jsxs("div",{className:`category-card ${m?"selected":""}`,onClick:()=>o(h.id),children:[m&&n.jsx("div",{className:"category-check-badge",children:n.jsx(V,{size:12,color:"#FFFFFF",strokeWidth:3})}),n.jsx("div",{className:"category-img-wrapper",children:n.jsx("img",{src:h.image,alt:h.title,className:"category-img"})}),n.jsxs("div",{className:"category-name-block",children:[n.jsx("span",{className:"category-name",children:h.title}),h.sub&&n.jsx("span",{className:"category-subname",children:h.sub})]})]},h.id)})}),n.jsx("div",{className:"step-bottom-cta",children:n.jsxs("button",{className:"step-primary-cta-btn",onClick:u,children:[n.jsx("span",{children:e.nextBtn||"Next"}),n.jsx(Ct,{size:18,strokeWidth:2.5})]})})]})}function im({t:e,categoryData:t,initialWeight:s=2.5,onNext:r,onBack:a,onChangeCategory:i}){const[l,o]=S.useState(s||2.5),[c,u]=S.useState(null),[g,h]=S.useState(!1),[m,v]=S.useState(!1),y=(t==null?void 0:t.categoryName)||"PCB (Circuit Board)",x=(t==null?void 0:t.categoryImage)||"/assets/Kabadiwala_Connect_Step3_Weight_UI_Asset_Pack/app/illustrations/pcb_selected_category_reference.png",w=()=>{W.tapTick(),o(j=>Math.max(.5,parseFloat((j-.5).toFixed(1)))),u(null)},p=()=>{W.tapTick(),o(j=>parseFloat((j+.5).toFixed(1))),u(null)},d=j=>{W.tapTick(),o(j),u(j)},f=()=>{if(m)return;W.tapTick(),h(!0);let j=.5;const P=setInterval(()=>{j+=.8,j>=4.8?(clearInterval(P),o(4.8),h(!1),v(!0),u(null),W.successChime()):(o(parseFloat(j.toFixed(1))),W.tapTick())},180)},k=()=>{r&&r({weight:l,scalePaired:m})},_=[{val:5,label:"~ 5 kg",sub:e.lightlyFilled||"Lightly filled",image:"/assets/Kabadiwala_Connect_Step3_Weight_UI_Asset_Pack/app/illustrations/quick_select_5kg_illustration_derived_transparent.png"},{val:10,label:"~ 10 kg",sub:e.halfFilled||"Half filled",image:"/assets/Kabadiwala_Connect_Step3_Weight_UI_Asset_Pack/app/illustrations/quick_select_10kg_illustration_derived_transparent.png"},{val:15,label:"~ 15 kg",sub:e.fullyFilled||"Fully filled",image:"/assets/Kabadiwala_Connect_Step3_Weight_UI_Asset_Pack/app/illustrations/quick_select_15kg_illustration_derived_transparent.png"}];return n.jsxs("div",{className:"step3-weight-screen page-fade-enter",children:[n.jsxs("div",{className:"step-header",children:[n.jsx("button",{className:"step-back-btn",onClick:a,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("div",{className:"step-header-text",children:n.jsx("h1",{className:"step-title",children:e.enterWeightTitle||"Enter Weight"})})]}),n.jsxs("div",{className:"stepper-container",children:[n.jsx("div",{className:"stepper-line"}),n.jsx("div",{className:"stepper-line-progress",style:{width:"50%"}}),n.jsxs("div",{className:"stepper-steps",children:[n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(V,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepPhoto||"Photo"})]}),n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(V,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepCategory||"Category"})]}),n.jsxs("div",{className:"stepper-item active",children:[n.jsx("div",{className:"stepper-circle active",children:n.jsx("span",{children:"3"})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepWeight||"Weight"})]}),n.jsxs("div",{className:"stepper-item",children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:"4"})}),n.jsx("span",{className:"stepper-label",children:e.stepValue||"Value"})]}),n.jsxs("div",{className:"stepper-item",children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:"5"})}),n.jsx("span",{className:"stepper-label",children:e.stepBuyer||"Buyer"})]})]})]}),n.jsxs("div",{className:"selected-category-card",children:[n.jsx("div",{className:"selected-category-thumb-wrapper",children:n.jsx("img",{src:x,alt:y,className:"selected-category-thumb-img"})}),n.jsxs("div",{className:"selected-category-info",children:[n.jsx("span",{className:"selected-category-label",children:e.selectedCategoryLabel||"Selected Category"}),n.jsx("h4",{className:"selected-category-title",children:y})]}),n.jsx("button",{className:"change-category-btn",onClick:i||a,"aria-label":"Change Category",children:e.changeBtn||"Change"})]}),n.jsxs("div",{className:"weight-section-header",children:[n.jsx("h2",{className:"weight-heading",children:e.howMuchWeigh||"How much does it weigh?"}),n.jsx("p",{className:"weight-subheading",children:e.enterWeightSub||"Enter the weight of your scrap"})]}),n.jsxs("div",{className:"weight-stepper-panel",children:[n.jsxs("div",{className:"weight-controls-row",children:[n.jsx("button",{className:"weight-adjust-btn minus",onClick:w,"aria-label":"Decrease weight",children:n.jsx(zd,{size:22,color:"#FFFFFF",strokeWidth:3})}),n.jsxs("div",{className:"weight-value-container",children:[n.jsx("span",{className:"weight-num",children:l.toFixed(1)}),n.jsx("span",{className:"weight-unit",children:"kg"})]}),n.jsx("button",{className:"weight-adjust-btn plus",onClick:p,"aria-label":"Increase weight",children:n.jsx(Mh,{size:22,color:"#FFFFFF",strokeWidth:3})})]}),n.jsx("span",{className:"weight-step-hint",children:e.inStepsHint||"in 0.5 kg steps"})]}),n.jsxs("div",{className:"or-divider-container",children:[n.jsx("div",{className:"or-line"}),n.jsx("span",{className:"or-pill",children:e.orDivider||"OR"}),n.jsx("div",{className:"or-line"})]}),n.jsxs("div",{className:`connect-scale-card ${m?"scale-connected":""}`,onClick:f,children:[n.jsx("div",{className:"scale-icon-wrapper",children:g?n.jsx(Ji,{size:20,color:"#0B6B4A",className:"spin-slow"}):m?n.jsx(Kt,{size:20,color:"#0B6B4A"}):n.jsx(yh,{size:20,color:"#0B6B4A",strokeWidth:2.4})}),n.jsxs("div",{className:"scale-info",children:[n.jsx("h4",{className:"scale-title",children:g?e.searchingScale||"Searching for scale...":m?e.scalePairedTitle||"Smart Scale Connected":e.connectScaleTitle||"Connect Scale"}),n.jsx("p",{className:"scale-subtitle",children:g?e.pairingBluetooth||"Pairing via Bluetooth...":m?e.scalePairedLive||"Live auto-synced: 4.8 kg":e.connectScaleSub||"Pair your Bluetooth weighing scale"})]}),n.jsx(ye,{size:18,color:"#6E7782"})]}),n.jsxs("div",{className:"quick-select-header",children:[n.jsx("h3",{className:"quick-select-title",children:e.quickSelectTitle||"Quick Select"}),n.jsx("span",{className:"quick-select-hint",children:e.quickSelectSub||"Choose an approximate weight"})]}),n.jsx("div",{className:"quick-select-grid",children:_.map(j=>{const P=c===j.val||l===j.val;return n.jsxs("div",{className:`quick-select-card ${P?"selected":""}`,onClick:()=>d(j.val),children:[n.jsx("div",{className:"quick-img-wrapper",children:n.jsx("img",{src:j.image,alt:j.label,className:"quick-sack-img"})}),n.jsx("span",{className:"quick-label",children:j.label}),n.jsx("span",{className:"quick-sub",children:j.sub})]},j.val)})}),n.jsx("div",{className:"step-bottom-cta",children:n.jsxs("button",{className:"step-primary-cta-btn",onClick:k,children:[n.jsx("span",{children:e.continueBtn||"Continue"}),n.jsx(Ct,{size:18,strokeWidth:2.5})]})})]})}function lm({t:e={},currentLang:t="en",sellFlowData:s,onNext:r,onBack:a}){const[i,l]=S.useState(!1),[o,c]=S.useState(!1),u=(s==null?void 0:s.weight)||2.5,g=(s==null?void 0:s.categoryName)||"PCB / Circuit Board",h=125,m=Math.round(u*h),v=18,y=()=>{W.tapTick(),c(!0);let w=`Estimated value is ₹${m}, based on ${u} kg of ${g}. You are getting ₹${v} above regular street rate.`;t==="hi"?w=`अनुमानित मूल्य ${m} रुपये है, ${u} किलोग्राम ${g} के आधार पर। आपको नियमित बाजार दर से ${v} रुपये अधिक मिल रहे हैं।`:t==="mr"&&(w=`अंदाजे मूल्य ${m} रुपये आहे, ${u} किलोग्रॅम ${g} च्या आधारे. तुम्हाला नियमित बाजारभावापेक्षा ${v} रुपये जास्त मिळत आहेत.`),W.speak(w,t,()=>c(!0),()=>c(!1))},x=()=>{W.tapTick(),r&&r({estimatedTotal:m,ratePerKg:h,streetBonus:v})};return n.jsxs("div",{className:"step4-value-screen page-fade-enter",children:[n.jsxs("div",{className:"step-header",children:[n.jsx("button",{className:"step-back-btn",onClick:a,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("div",{className:"step-header-text",children:n.jsx("h1",{className:"step-title",children:e.estimatedValueTitle||"Estimated Value"})})]}),n.jsxs("div",{className:"stepper-container",children:[n.jsx("div",{className:"stepper-line"}),n.jsx("div",{className:"stepper-line-progress",style:{width:"75%"}}),n.jsxs("div",{className:"stepper-steps",children:[n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(V,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepPhoto||"Photo"})]}),n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(V,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepCategory||"Category"})]}),n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(V,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepWeight||"Weight"})]}),n.jsxs("div",{className:"stepper-item active",children:[n.jsx("div",{className:"stepper-circle active",children:n.jsx("span",{children:"4"})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepValue||"Value"})]}),n.jsxs("div",{className:"stepper-item",children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:"5"})}),n.jsx("span",{className:"stepper-label",children:e.stepBuyer||"Buyer"})]})]})]}),n.jsxs("div",{className:"value-hero-card",children:[n.jsxs("div",{className:"value-category-chip",children:[n.jsx("div",{className:"value-category-icon-box",children:n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#FFFFFF",strokeWidth:"2.2",children:[n.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"4"}),n.jsx("path",{d:"M6 6h4v4H6z",fill:"#FFFFFF"}),n.jsx("path",{d:"M14 6h4v4h-4z",fill:"#FFFFFF"}),n.jsx("path",{d:"M6 14h4v4H6z",fill:"#FFFFFF"}),n.jsx("path",{d:"M10 8h4M8 10v4M16 10v4M10 16h4"})]})}),n.jsx("span",{className:"value-category-name",children:g})]}),n.jsx("span",{className:"value-caption-label",children:e.yourEstimatedValue||"YOUR ESTIMATED VALUE"}),n.jsxs("div",{className:"value-price-wrapper",children:[n.jsxs("div",{className:"sparkle-cluster left",children:[n.jsx("span",{className:"sparkle-line sp-1"}),n.jsx("span",{className:"sparkle-line sp-2"}),n.jsx("span",{className:"sparkle-line sp-3"})]}),n.jsxs("div",{className:"value-amount-display",children:[n.jsx("span",{className:"rupee-symbol",children:"₹"}),n.jsx("span",{className:"rupee-number",children:m})]}),n.jsxs("div",{className:"sparkle-cluster right",children:[n.jsx("span",{className:"sparkle-line sp-1"}),n.jsx("span",{className:"sparkle-line sp-2"}),n.jsx("span",{className:"sparkle-line sp-3"})]})]}),n.jsxs("span",{className:"value-basis-text",children:[e.basedOnWeightScrap||"Based on"," ",u," kg • ",g]}),n.jsxs("button",{className:`listen-value-btn ${o?"playing":""}`,onClick:y,"aria-label":"Listen to estimated value voice announcement",children:[n.jsx(Fr,{size:18,color:"#0B6B4A",strokeWidth:2.4,className:o?"pulse-audio":""}),n.jsx("span",{children:o?e.playingAudio||"Playing audio...":e.listenToValue||"Listen to value"})]})]}),n.jsxs("div",{className:"value-breakdown-card",onClick:()=>l(!i),children:[n.jsxs("div",{className:"breakdown-header-row",children:[n.jsxs("div",{children:[n.jsx("h3",{className:"breakdown-title",children:e.viewBreakdown||"View breakdown"}),n.jsxs("p",{className:"breakdown-formula",children:[u," kg × ₹",h,"/kg = ₹",m]})]}),n.jsx("button",{className:"breakdown-toggle-btn","aria-label":"Toggle breakdown",children:i?n.jsx(vh,{size:20,color:"#101A24"}):n.jsx(Sn,{size:20,color:"#101A24"})})]}),i&&n.jsxs("div",{className:"breakdown-details-drawer",children:[n.jsxs("div",{className:"drawer-item",children:[n.jsx("span",{className:"item-name",children:e.baseMarketRate||"Base Market Rate"}),n.jsx("span",{className:"item-val",children:"₹110 / kg"})]}),n.jsxs("div",{className:"drawer-item",children:[n.jsx("span",{className:"item-name",children:e.highGradeBonus||"High Grade E-Waste Bonus"}),n.jsx("span",{className:"item-val bonus",children:"+₹15 / kg"})]}),n.jsxs("div",{className:"drawer-item total",children:[n.jsx("span",{className:"item-name",children:e.effectiveRate||"Effective Verified Rate"}),n.jsx("span",{className:"item-val",children:"₹125 / kg"})]})]})]}),n.jsxs("div",{className:"above-street-rate-banner",children:[n.jsx("div",{className:"above-rate-arrow-circle",children:n.jsx(fh,{size:20,color:"#0B6B4A",strokeWidth:3})}),n.jsxs("div",{className:"above-rate-text-block",children:[n.jsxs("h4",{className:"above-rate-title",children:["₹",v," ",e.aboveStreetRateTitle||"above street rate"]}),n.jsx("p",{className:"above-rate-subtitle",children:e.gettingBetterPrice||"You're getting a better price!"})]})]}),n.jsxs("div",{className:"step-bottom-cta value-cta-wrap",children:[n.jsxs("button",{className:"step-primary-cta-btn",onClick:x,children:[n.jsx("span",{children:e.findABuyerBtn||"Find a Buyer"}),n.jsx(Ct,{size:18,strokeWidth:2.5})]}),n.jsx("p",{className:"bottom-buyer-help-text",children:e.compareOffersSub||"Compare offers from verified buyers near you."})]})]})}function om({t:e,sellFlowData:t,onNext:s,onBack:r}){const[a,i]=S.useState("buyer_1"),l=(t==null?void 0:t.categoryName)||"PCB (Circuit Board)",o=(t==null?void 0:t.weight)||2.5,c=[{id:"buyer_1",name:"GreenCycle Recycling",rate:128,isBestMatch:!0,distance:"2.1 km away",verified:"CPCB Verified",rating:4.8},{id:"buyer_2",name:"EcoScrap Solutions",rate:124,isBestMatch:!1,distance:"3.4 km away",verified:"CPCB Verified",rating:4.6},{id:"buyer_3",name:"ReNew E-Waste",rate:121,isBestMatch:!1,distance:"5.2 km away",verified:"CPCB Verified",rating:4.7}],u=c.find(h=>h.id===a)||c[0],g=()=>{s&&s({buyer:u,totalPayout:Math.round(o*u.rate)})};return n.jsxs("div",{className:"step5-buyer-screen page-fade-enter",children:[n.jsxs("div",{className:"step-header",children:[n.jsx("button",{className:"step-back-btn",onClick:r,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("div",{className:"step-header-text",children:n.jsx("h1",{className:"step-title",children:e.chooseBuyerTitle||"Choose a Buyer"})})]}),n.jsxs("div",{className:"stepper-container",children:[n.jsx("div",{className:"stepper-line"}),n.jsx("div",{className:"stepper-line-progress",style:{width:"100%"}}),n.jsxs("div",{className:"stepper-steps",children:[n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(V,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepPhoto||"Photo"})]}),n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(V,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepCategory||"Category"})]}),n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(V,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepWeight||"Weight"})]}),n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(V,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepValue||"Value"})]}),n.jsxs("div",{className:"stepper-item active",children:[n.jsx("div",{className:"stepper-circle active",children:n.jsx("span",{children:"5"})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepBuyer||"Buyer"})]})]})]}),n.jsxs("div",{className:"buyer-intro-header",children:[n.jsx("h2",{className:"buyer-intro-title",children:e.bestBuyersTitle||"Best buyers for you"}),n.jsx("p",{className:"buyer-intro-sub",children:e.bestBuyersSub||"Compared by price, distance and reliability."})]}),n.jsxs("div",{className:"lot-summary-pill",children:[n.jsx("div",{className:"lot-pcb-icon",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Step5_Choose_Buyer_UI_Asset_Pack/app/crops/lot_material_pcb_thumbnail.png",alt:"PCB scrap",className:"lot-icon-img"})}),n.jsxs("span",{className:"lot-summary-text",children:[l," • ",o," kg"]})]}),n.jsx("div",{className:"buyers-list",children:c.map(h=>{const m=a===h.id;return n.jsxs("div",{className:`buyer-card ${m?"selected":""}`,onClick:()=>i(h.id),children:[h.isBestMatch&&n.jsxs("div",{className:"best-match-badge",children:[n.jsx(xr,{size:12,fill:"#101A24",color:"#101A24"}),n.jsx("span",{children:e.bestMatchBadge||"BEST MATCH"})]}),n.jsxs("div",{className:"buyer-card-top-row",children:[n.jsx("div",{className:"buyer-name-col",children:n.jsx("h3",{className:"buyer-company-name",children:h.name})}),n.jsxs("div",{className:"buyer-price-radio-wrap",children:[n.jsxs("div",{className:"buyer-rate-box",children:[n.jsxs("span",{className:"buyer-rate-price",children:["₹",h.rate,"/kg"]}),h.isBestMatch&&n.jsx("span",{className:"buyer-rate-best-label",children:e.bestPriceLabel||"Best price"})]}),n.jsx("div",{className:`buyer-radio-circle ${m?"checked":""}`,children:m&&n.jsx("div",{className:"buyer-radio-inner-dot"})})]})]}),n.jsxs("div",{className:"buyer-meta-row",children:[n.jsxs("div",{className:"meta-item",children:[n.jsx(Je,{size:13,color:"#6E7782"}),n.jsx("span",{children:h.distance})]}),n.jsx("span",{className:"meta-divider",children:"|"}),n.jsxs("div",{className:"meta-item",children:[n.jsx(kn,{size:13,color:"#0B6B4A",strokeWidth:2.4}),n.jsx("span",{className:"verified-text",children:e.cpcbVerified||h.verified})]}),n.jsx("span",{className:"meta-divider",children:"|"}),n.jsxs("div",{className:"meta-item",children:[n.jsx(xr,{size:13,fill:"#F5B82E",color:"#F5B82E"}),n.jsx("span",{className:"rating-score",children:h.rating})]})]})]},h.id)})}),n.jsxs("div",{className:"verified-recyclers-trust-banner",children:[n.jsx(kn,{size:16,color:"#0B6B4A",strokeWidth:2.4}),n.jsx("span",{children:e.verifiedRecyclersNotice||"All listed buyers are verified recyclers."})]}),n.jsxs("div",{className:"step-bottom-cta buyer-cta-wrap",children:[n.jsxs("div",{className:"selected-buyer-indicator",children:[n.jsxs("span",{children:[e.selectedLabel||"Selected:"," "]}),n.jsx("strong",{children:u.name})]}),n.jsxs("button",{className:"step-primary-cta-btn",onClick:g,children:[n.jsx("span",{children:e.selectAndSellBtn||"Select & Sell"}),n.jsx(Ct,{size:18,strokeWidth:2.5})]})]})]})}function cm({t:e={},sellFlowData:t={},onProceedToPayment:s,onBack:r,onCancel:a}){const[i,l]=S.useState(!1),[o,c]=S.useState(null),[u,g]=S.useState(14),[h,m]=S.useState(2),v=(t==null?void 0:t.buyer)||{name:"GreenCycle Recycling",rate:128,rating:4.8,collectorName:"Rakesh Sharma"},y=(t==null?void 0:t.weight)||2.5,x=(t==null?void 0:t.ratePerKg)||(v==null?void 0:v.rate)||125,w=(t==null?void 0:t.estimatedTotal)||Math.round(y*x),p=(t==null?void 0:t.categoryName)||"PCB (Circuit Board)",d=(t==null?void 0:t.securityPin)||"4829";S.useEffect(()=>{const B=setInterval(()=>{g(b=>b>1?b-1:1)},45e3);return()=>clearInterval(B)},[]);const f=B=>{c(B),W.tapTick(),setTimeout(()=>{c(null)},2800)},k=()=>{W.tapTick(),f(e.callingToast||`Calling ${v.collectorName||v.name} (+91 98765 43210)...`)},_=()=>{W.tapTick(),f(e.chatSentToast||"WhatsApp message opened with live pickup coordinates!")},j=()=>{W.tapTick(),l(!0),navigator.clipboard&&navigator.clipboard.writeText(d).catch(()=>{}),setTimeout(()=>l(!1),2e3)},P=()=>{W.successChime(),s&&s()};return n.jsxs("div",{className:"pickup-confirm-screen page-fade-enter",children:[n.jsxs("div",{className:"pickup-top-header",children:[n.jsx("button",{className:"pickup-back-btn",onClick:r,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsxs("div",{className:"pickup-header-center",children:[n.jsx("h1",{className:"pickup-screen-title",children:e.pickupConfirmedTitle||"Pickup Scheduled"}),n.jsxs("span",{className:"pickup-sub-badge",children:[n.jsx("span",{className:"live-pulse-dot"}),e.driverEnRouteStatus||"Driver on the way"]})]}),n.jsx("div",{style:{width:36}})]}),o&&n.jsxs("div",{className:"pickup-toast-banner",children:[n.jsx(si,{size:16,color:"#4ADE80"}),n.jsx("span",{children:o})]}),n.jsxs("div",{className:"pickup-scroll-container",children:[n.jsxs("div",{className:"eta-hero-card",children:[n.jsxs("div",{className:"eta-top-row",children:[n.jsxs("div",{className:"eta-left-col",children:[n.jsx("span",{className:"eta-caption",children:"ESTIMATED ARRIVAL"}),n.jsxs("div",{className:"eta-time-row",children:[n.jsx(Ht,{size:20,color:"#0B6B4A"}),n.jsxs("h2",{className:"eta-digits",children:[u," mins"]})]})]}),n.jsxs("div",{className:"eta-vehicle-badge",children:[n.jsx(ri,{size:22,color:"#0B6B4A"}),n.jsx("span",{className:"eta-dist-text",children:"1.4 km away"})]})]}),n.jsxs("div",{className:"tracking-timeline",children:[n.jsx("div",{className:"timeline-track",children:n.jsx("div",{className:"timeline-progress-bar",style:{width:h===0?"12%":h===1?"40%":h===2?"72%":"100%"}})}),n.jsxs("div",{className:"timeline-nodes",children:[n.jsxs("div",{className:"timeline-node active",children:[n.jsx("div",{className:"node-circle done",children:n.jsx(V,{size:10,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"node-label",children:e.orderPlacedStep||"Booked"})]}),n.jsxs("div",{className:"timeline-node active",children:[n.jsx("div",{className:"node-circle done",children:n.jsx(V,{size:10,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"node-label",children:e.driverAssignedStep||"Assigned"})]}),n.jsxs("div",{className:"timeline-node current",children:[n.jsx("div",{className:"node-circle pulse",children:n.jsx(ri,{size:12,color:"#FFFFFF"})}),n.jsx("span",{className:"node-label highlight",children:e.enRouteStep||"En Route"})]}),n.jsxs("div",{className:"timeline-node",children:[n.jsx("div",{className:"node-circle upcoming",children:n.jsx("span",{children:"4"})}),n.jsx("span",{className:"node-label",children:e.arrivedStep||"Arrived"})]})]})]})]}),n.jsxs("div",{className:"collector-profile-card",children:[n.jsxs("div",{className:"collector-header-row",children:[n.jsxs("div",{className:"collector-avatar-wrap",children:[n.jsx("div",{className:"collector-avatar-initials",children:v.name?v.name.charAt(0):"G"}),n.jsx("div",{className:"verified-mini-badge",children:n.jsx(V,{size:10,color:"#FFFFFF",strokeWidth:3.5})})]}),n.jsxs("div",{className:"collector-info-col",children:[n.jsxs("div",{className:"collector-name-row",children:[n.jsx("h3",{className:"collector-name",children:v.collectorName||"Rakesh Sharma"}),n.jsxs("div",{className:"rating-pill",children:[n.jsx(xr,{size:12,fill:"#F59E0B",color:"#F59E0B"}),n.jsx("span",{children:v.rating||4.8})]})]}),n.jsx("span",{className:"collector-org-text",children:v.name||"GreenCycle Recycling"}),n.jsxs("div",{className:"cpcb-tag",children:[n.jsx(kn,{size:13,color:"#0B6B4A"}),n.jsx("span",{children:"CPCB Authorized Fleet"})]})]})]}),n.jsxs("div",{className:"collector-actions-row",children:[n.jsxs("button",{className:"collector-action-btn call-btn",onClick:k,children:[n.jsx(Ad,{size:16,color:"#0B6B4A"}),n.jsx("span",{children:e.callCollectorBtn||"Call Collector"})]}),n.jsxs("button",{className:"collector-action-btn chat-btn",onClick:_,children:[n.jsx(zh,{size:16,color:"#0B6B4A"}),n.jsx("span",{children:e.chatWhatsAppBtn||"WhatsApp Chat"})]})]})]}),n.jsxs("div",{className:"security-pin-card",children:[n.jsxs("div",{className:"pin-left-info",children:[n.jsx("span",{className:"pin-card-tag",children:e.securityPinTitle||"Handover Security PIN"}),n.jsx("p",{className:"pin-helper-desc",children:e.securityPinDesc||"Share this 4-digit code with the driver upon arrival to verify handover."})]}),n.jsxs("div",{className:"pin-display-box",onClick:j,title:"Tap to copy PIN",children:[n.jsx("div",{className:"pin-digits-group",children:d.split("").map((B,b)=>n.jsx("span",{className:"pin-digit-box",children:B},b))}),n.jsx("button",{className:"pin-copy-btn","aria-label":"Copy PIN",children:i?n.jsx(V,{size:14,color:"#0B6B4A"}):n.jsx(jh,{size:14,color:"#6B7280"})})]})]}),n.jsxs("div",{className:"pickup-details-card",children:[n.jsxs("div",{className:"detail-item-row",children:[n.jsx("div",{className:"detail-icon-circle",children:n.jsx(Je,{size:16,color:"#0B6B4A"})}),n.jsxs("div",{className:"detail-text-col",children:[n.jsx("span",{className:"detail-label",children:e.pickupAddressLabel||"Pickup Address"}),n.jsx("p",{className:"detail-val",children:"Flat 402, Block C, Sector 14, Rohini, Delhi - 110085"})]})]}),n.jsx("div",{className:"card-inner-divider"}),n.jsxs("div",{className:"detail-item-row",children:[n.jsx("div",{className:"detail-icon-circle",children:n.jsx(Ht,{size:16,color:"#0B6B4A"})}),n.jsxs("div",{className:"detail-text-col",children:[n.jsx("span",{className:"detail-label",children:e.scheduledSlotLabel||"Scheduled Slot"}),n.jsxs("p",{className:"detail-val",children:[e.todayLabel||"Today",", 4:00 PM - 5:00 PM"]})]})]})]}),n.jsxs("div",{className:"lot-summary-card",children:[n.jsxs("div",{className:"lot-summary-header",children:[n.jsx("div",{className:"lot-icon-badge",children:n.jsx(Fh,{size:16,color:"#0B6B4A"})}),n.jsx("h4",{className:"lot-card-title",children:e.scrapSummaryTitle||"Scrap Lot Details"})]}),n.jsxs("div",{className:"lot-specs-grid",children:[n.jsxs("div",{className:"lot-spec-item",children:[n.jsx("span",{className:"lot-spec-lbl",children:e.stepCategory||"Category"}),n.jsx("strong",{className:"lot-spec-val",children:p})]}),n.jsxs("div",{className:"lot-spec-item",children:[n.jsx("span",{className:"lot-spec-lbl",children:e.totalWeightStat||"Weight"}),n.jsxs("strong",{className:"lot-spec-val",children:[y," kg"]})]}),n.jsxs("div",{className:"lot-spec-item",children:[n.jsx("span",{className:"lot-spec-lbl",children:e.ratePerKgStat||"Agreed Rate"}),n.jsxs("strong",{className:"lot-spec-val",children:["₹ ",x,"/kg"]})]}),n.jsxs("div",{className:"lot-spec-item highlight",children:[n.jsx("span",{className:"lot-spec-lbl",children:e.expectedPayoutLabel||"Expected Payout:"}),n.jsxs("strong",{className:"lot-spec-val total-green",children:["₹ ",w]})]})]})]}),n.jsxs("div",{className:"pickup-actions-footer",children:[n.jsx("button",{className:"pickup-primary-confirm-btn",onClick:P,children:n.jsx("span",{children:e.proceedToPaymentBtn||"Scrap Inspected • Settle Payment →"})}),a&&n.jsx("button",{className:"pickup-cancel-btn",onClick:a,children:n.jsx("span",{children:e.cancelBookingBtn||"Cancel Pickup"})})]})]}),n.jsx("style",{children:`
        .pickup-confirm-screen {
          display: flex;
          flex-direction: column;
          height: 100%;
          background-color: var(--surface-warm, #F4F6F0);
          position: relative;
          overflow: hidden;
        }

        .pickup-top-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: #FFFFFF;
          border-bottom: 1px solid var(--border-soft, #E5E9E2);
          z-index: 10;
        }

        .pickup-back-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: #F1F4EB;
          cursor: pointer;
        }

        .pickup-header-center {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .pickup-screen-title {
          font-size: 17px;
          font-weight: 700;
          color: #101A24;
          margin: 0;
        }

        .pickup-sub-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          color: #0B6B4A;
          margin-top: 2px;
        }

        .live-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.25);
          animation: pulseGreen 1.6s infinite ease-in-out;
        }

        @keyframes pulseGreen {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }

        .pickup-toast-banner {
          position: absolute;
          top: 64px;
          left: 16px;
          right: 16px;
          background: #1C522D;
          color: #FFFFFF;
          font-size: 12px;
          font-weight: 600;
          padding: 10px 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 8px 20px rgba(28, 82, 45, 0.35);
          z-index: 50;
          animation: slideDownToast 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideDownToast {
          from { transform: translateY(-16px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .pickup-scroll-container {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          -webkit-overflow-scrolling: touch;
        }

        /* ETA Card */
        .eta-hero-card {
          background: #FFFFFF;
          border-radius: 18px;
          padding: 16px;
          border: 1.5px solid #E2E8DC;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .eta-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .eta-caption {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.5px;
          color: #6B7280;
        }

        .eta-time-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 4px;
        }

        .eta-digits {
          font-size: 22px;
          font-weight: 800;
          color: #101A24;
          margin: 0;
        }

        .eta-vehicle-badge {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          background: #EEF6ED;
          padding: 6px 12px;
          border-radius: 12px;
          border: 1px solid #D5E7D2;
        }

        .eta-dist-text {
          font-size: 11px;
          font-weight: 700;
          color: #0B6B4A;
          margin-top: 2px;
        }

        /* Tracking Timeline */
        .tracking-timeline {
          position: relative;
          padding: 8px 4px 0 4px;
        }

        .timeline-track {
          position: absolute;
          top: 19px;
          left: 20px;
          right: 20px;
          height: 3px;
          background: #E5E9E2;
          z-index: 1;
        }

        .timeline-progress-bar {
          height: 100%;
          background: #0B6B4A;
          border-radius: 2px;
          transition: width 0.4s ease;
        }

        .timeline-nodes {
          position: relative;
          display: flex;
          justify-content: space-between;
          z-index: 2;
        }

        .timeline-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .node-circle {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
        }

        .node-circle.done {
          background: #0B6B4A;
          color: white;
        }

        .node-circle.pulse {
          background: #10B981;
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.25);
        }

        .node-circle.upcoming {
          background: #FFFFFF;
          border: 2px solid #D1D5DB;
          color: #9CA3AF;
        }

        .node-label {
          font-size: 10px;
          font-weight: 600;
          color: #6B7280;
        }

        .node-label.highlight {
          color: #0B6B4A;
          font-weight: 700;
        }

        /* Collector Card */
        .collector-profile-card {
          background: #FFFFFF;
          border-radius: 18px;
          padding: 16px;
          border: 1.5px solid #E2E8DC;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .collector-header-row {
          display: flex;
          gap: 14px;
          align-items: center;
          margin-bottom: 14px;
        }

        .collector-avatar-wrap {
          position: relative;
        }

        .collector-avatar-initials {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1C522D, #0B6B4A);
          color: white;
          font-size: 20px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .verified-mini-badge {
          position: absolute;
          bottom: -2px;
          right: -2px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #10B981;
          border: 2px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .collector-info-col {
          flex: 1;
        }

        .collector-name-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .collector-name {
          font-size: 16px;
          font-weight: 700;
          color: #101A24;
          margin: 0;
        }

        .rating-pill {
          display: flex;
          align-items: center;
          gap: 3px;
          background: #FFFBEB;
          padding: 2px 6px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 700;
          color: #B45309;
        }

        .collector-org-text {
          font-size: 12px;
          color: #4B5563;
          margin-top: 2px;
          display: block;
        }

        .cpcb-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          font-weight: 600;
          color: #0B6B4A;
          margin-top: 4px;
        }

        .collector-actions-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          padding-top: 12px;
          border-top: 1px solid #F1F4EB;
        }

        .collector-action-btn {
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          border: 1.5px solid #D1E5CD;
          background: #F7FAF6;
          color: #0B6B4A;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .collector-action-btn:hover {
          background: #EEF6ED;
          border-color: #0B6B4A;
        }

        /* Security PIN Card */
        .security-pin-card {
          background: linear-gradient(135deg, #1C522D, #0B6B4A);
          color: white;
          border-radius: 18px;
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 14px rgba(28, 82, 45, 0.25);
        }

        .pin-left-info {
          flex: 1;
          padding-right: 12px;
        }

        .pin-card-tag {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.4px;
          color: #CAE0B8;
          text-transform: uppercase;
        }

        .pin-helper-desc {
          font-size: 11px;
          color: #E2E8DC;
          margin: 4px 0 0 0;
          line-height: 1.4;
        }

        .pin-display-box {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 14px;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .pin-digits-group {
          display: flex;
          gap: 4px;
        }

        .pin-digit-box {
          width: 22px;
          height: 28px;
          background: #FFFFFF;
          color: #0B6B4A;
          font-size: 16px;
          font-weight: 800;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pin-copy-btn {
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 2px;
        }

        /* Details Card */
        .pickup-details-card {
          background: #FFFFFF;
          border-radius: 18px;
          padding: 16px;
          border: 1.5px solid #E2E8DC;
        }

        .detail-item-row {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .detail-icon-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #EEF6ED;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .detail-text-col {
          flex: 1;
        }

        .detail-label {
          font-size: 11px;
          font-weight: 600;
          color: #6B7280;
        }

        .detail-val {
          font-size: 13px;
          font-weight: 600;
          color: #101A24;
          margin: 2px 0 0 0;
          line-height: 1.4;
        }

        .card-inner-divider {
          height: 1px;
          background: #F1F4EB;
          margin: 12px 0;
        }

        /* Lot Summary Card */
        .lot-summary-card {
          background: #FFFFFF;
          border-radius: 18px;
          padding: 16px;
          border: 1.5px solid #E2E8DC;
        }

        .lot-summary-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .lot-icon-badge {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: #EEF6ED;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lot-card-title {
          font-size: 14px;
          font-weight: 700;
          color: #101A24;
          margin: 0;
        }

        .lot-specs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          background: #F9FBF7;
          border-radius: 12px;
          padding: 12px;
          border: 1px solid #E8ECE2;
        }

        .lot-spec-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .lot-spec-lbl {
          font-size: 10px;
          font-weight: 600;
          color: #6B7280;
        }

        .lot-spec-val {
          font-size: 13px;
          font-weight: 700;
          color: #101A24;
        }

        .lot-spec-item.highlight .total-green {
          font-size: 15px;
          color: #0B6B4A;
        }

        /* Footer CTA */
        .pickup-actions-footer {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 4px;
          padding-bottom: 24px;
        }

        .pickup-primary-confirm-btn {
          width: 100%;
          height: 54px;
          border-radius: 18px;
          background: #0B6B4A;
          color: white;
          font-size: 15px;
          font-weight: 700;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 16px rgba(11, 107, 74, 0.35);
          cursor: pointer;
          transition: transform 0.15s ease, background 0.15s ease;
        }

        .pickup-primary-confirm-btn:hover {
          background: #09573B;
          transform: translateY(-1px);
        }

        .pickup-primary-confirm-btn:active {
          transform: translateY(0);
        }

        .pickup-cancel-btn {
          width: 100%;
          background: transparent;
          border: none;
          color: #EF4444;
          font-size: 13px;
          font-weight: 600;
          padding: 8px;
          cursor: pointer;
          text-align: center;
        }
      `})]})}function dm({t:e,sellFlowData:t,onNext:s,onBack:r}){var w;const[a,i]=S.useState("upi"),[l,o]=S.useState(!1),[c,u]=S.useState(!1),[g,h]=S.useState((t==null?void 0:t.totalPayout)||(t==null?void 0:t.estimatedTotal)||312),m=g,v=((w=t==null?void 0:t.buyer)==null?void 0:w.name)||"GreenCycle Recycling",y=()=>{W.tapTick(),navigator.share?navigator.share({title:"Kabadiwala Connect Payment Request",text:`Payment request for ₹${m} from ${v} for scrap lot.`,url:window.location.href}).catch(()=>{}):(o(!0),setTimeout(()=>o(!1),1800))},x=()=>{W.successChime(),s&&s({paymentMode:a,amountPaid:m,buyerName:v,paidAt:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})};return n.jsxs("div",{className:"payment-screen page-fade-enter",children:[n.jsxs("div",{className:"step-header",children:[n.jsx("button",{className:"step-back-btn",onClick:r,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("div",{className:"step-header-text",children:n.jsx("h1",{className:"step-title",children:e.paymentTitle||"Payment"})})]}),n.jsxs("div",{className:"payment-hero-card",children:[n.jsx("span",{className:"payment-hero-caption",children:e.amountToReceive||"Amount to receive"}),n.jsxs("div",{className:"payment-hero-amount",children:[n.jsx("span",{className:"payment-rupee",children:"₹"}),n.jsx("span",{className:"payment-number",children:m})]}),n.jsx("span",{className:"payment-hero-sub",children:e.fullPaymentSub||"Full payment"})]}),n.jsxs("div",{className:"payment-methods-section",children:[n.jsx("h2",{className:"payment-methods-heading",children:e.howReceivedPayment||"How did you receive the payment?"}),n.jsxs("div",{className:"payment-methods-grid",children:[n.jsxs("div",{className:`payment-method-card ${a==="cash"?"selected":""}`,onClick:()=>i("cash"),children:[n.jsx("div",{className:"method-badge-top-right",children:a==="cash"?n.jsx("div",{className:"method-check-circle",children:n.jsx(V,{size:12,color:"#FFFFFF",strokeWidth:3})}):n.jsx("div",{className:"method-unselected-circle"})}),n.jsx("div",{className:"method-artwork-wrap",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Payment_UI_Asset_Pack/02_payment_icons/cash_money_illustration.jpg",alt:"Cash Payment",className:"method-artwork-img"})}),n.jsx("span",{className:"method-title",children:e.cashMethod||"Cash"})]}),n.jsxs("div",{className:`payment-method-card ${a==="upi"?"selected":""}`,onClick:()=>i("upi"),children:[n.jsx("div",{className:"method-badge-top-right",children:a==="upi"?n.jsx("div",{className:"method-check-circle",children:n.jsx(V,{size:12,color:"#FFFFFF",strokeWidth:3})}):n.jsx("div",{className:"method-unselected-circle"})}),n.jsx("div",{className:"method-artwork-wrap",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Payment_UI_Asset_Pack/02_payment_icons/upi_qr_illustration.jpg",alt:"UPI Payment",className:"method-artwork-img"})}),n.jsx("span",{className:"method-title",children:e.upiMethod||"UPI"})]})]})]}),a==="upi"?n.jsxs("div",{className:"upi-qr-card",children:[n.jsx("h3",{className:"upi-qr-title",children:e.scanToPay||"Scan to pay"}),n.jsx("p",{className:"upi-qr-sub",children:e.useAnyUpi||"Use any UPI app"}),n.jsx("div",{className:"qr-image-container",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Payment_UPI_UI_Asset_Pack/02_qr_assets/qr_reference.jpg",alt:"UPI QR Code",className:"upi-qr-code-img"})}),n.jsxs("div",{className:"qr-payee-info",children:[n.jsxs("span",{className:"qr-amount-text",children:["₹",m]}),n.jsx("span",{className:"qr-buyer-name",children:v})]}),n.jsxs("button",{className:"share-payment-btn",onClick:y,"aria-label":"Share payment request",children:[n.jsx(Fd,{size:16,color:"#0B6B4A",strokeWidth:2.2}),n.jsx("span",{children:l?e.linkCopiedToast||"Link Copied!":e.sharePaymentRequest||"Share payment request"})]})]}):n.jsxs("div",{className:"cash-received-banner",children:[n.jsx("div",{className:"cash-check-icon-circle",children:n.jsx(V,{size:20,color:"#FFFFFF",strokeWidth:3})}),n.jsxs("div",{className:"cash-banner-text",children:[n.jsx("h4",{className:"cash-banner-title",children:e.cashReceivedTitle||"Cash received"}),n.jsx("p",{className:"cash-banner-sub",children:e.markAfterCash||"Mark this after receiving the cash."})]})]}),n.jsxs("div",{className:"payment-amount-row",children:[n.jsx("span",{className:"amount-row-label",children:e.paymentAmountLabel||"Payment amount"}),n.jsx("div",{className:"amount-row-right",children:c?n.jsx("input",{type:"number",className:"amount-edit-input",value:g,onChange:p=>h(Number(p.target.value)||0),onBlur:()=>u(!1),autoFocus:!0}):n.jsxs(n.Fragment,{children:[n.jsxs("span",{className:"amount-row-val",children:["₹",m]}),n.jsx("button",{className:"amount-edit-btn",onClick:()=>u(!0),children:e.editBtn||"Edit"})]})})]}),n.jsxs("div",{className:"step-bottom-cta payment-cta-wrap",children:[n.jsxs("button",{className:"step-primary-cta-btn",onClick:x,children:[n.jsx("span",{children:e.confirmPaymentBtn||"Confirm Payment"}),n.jsx(Ct,{size:18,strokeWidth:2.5})]}),n.jsx("p",{className:"payment-warning-text",children:e.confirmWarning||"Confirm only after receiving the payment."})]})]})}function um({t:e={},currentLang:t="en",currentLocation:s="Rohini, Delhi",onBack:r,onSelectCategory:a,onNavigateTab:i}){const[l,o]=S.useState(!1),[c,u]=S.useState(null),[g,h]=S.useState(""),v=[{id:"pcb",title:e.itemPcb||"PCB",sub:e.itemPcbSub||"Circuit Board",price:128,trend:"up",change:"12%",image:"/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/pcb_thumbnail_reference.png",history:[110,114,118,120,122,125,128]},{id:"cables_wires",title:e.itemCables||"Cables & Wires",sub:null,price:72,trend:"down",change:"8%",image:"/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/cables_wires_thumbnail_reference.png",history:[80,78,79,76,75,74,72]},{id:"car_battery",title:e.itemBattery||"Car Battery",sub:null,price:62,trend:"up",change:"5%",image:"/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/car_battery_thumbnail_reference.png",history:[58,59,59,60,61,61,62]},{id:"crt_tv",title:e.itemCrtTv||"CRT TV",sub:null,price:18,trend:"down",change:"6%",image:"/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/crt_tv_thumbnail_reference.png",history:[22,21,20,20,19,19,18]},{id:"lcd_display",title:e.itemLcd||"LCD Display",sub:null,price:42,trend:"stable",change:"Stable",image:"/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/lcd_display_thumbnail_reference.png",history:[42,42,41,42,43,42,42]},{id:"motor_magnet",title:e.itemMotor||"Motor & Magnet",sub:null,price:95,trend:"up",change:"9%",image:"/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/motor_magnet_thumbnail_reference.png",history:[86,88,89,90,92,93,95]}].filter(x=>{const w=g.toLowerCase().trim();return w?x.title.toLowerCase().includes(w)||x.sub&&x.sub.toLowerCase().includes(w):!0}),y=()=>{W.tapTick(),o(!0);let x=`Today's scrap rates in ${s}: PCB is 128 rupees per kg, Cables are 72 rupees, Car Battery is 62 rupees, LCD Display is 42 rupees, and Motor magnet is 95 rupees per kg.`;t==="hi"?x=`${s} में आज के कबाड़ के भाव: PCB 128 रुपये प्रति किलो, केबल्स 72 रुपये, कार बैटरी 62 रुपये, LCD डिस्प्ले 42 रुपये, और मोटर 95 रुपये प्रति किलो है।`:t==="mr"&&(x=`${s} मध्ये आजचे भंगार दर: PCB 128 रुपये प्रति किलो, केबल्स 72 रुपये, कार बॅटरी 62 रुपये, LCD डिस्प्ले 42 रुपये, आणि मोटर 95 रुपये प्रति किलो आहे.`),W.speak(x,t,()=>o(!0),()=>o(!1))};return n.jsxs("div",{className:"todays-prices-screen page-fade-enter",children:[n.jsxs("div",{className:"prices-scroll-content",children:[r&&n.jsx("div",{className:"prices-top-nav",children:n.jsx("button",{className:"step-back-btn",onClick:r,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})})}),n.jsxs("div",{className:"prices-header-row",children:[n.jsxs("div",{className:"prices-title-block",children:[n.jsx("h1",{className:"prices-main-title",children:e.todayRates||"Today’s Prices"}),n.jsx("p",{className:"prices-main-sub",children:e.currentRatesNearYou||"Current scrap rates near you"})]}),n.jsx("button",{className:`prices-audio-btn ${l?"playing":""}`,onClick:y,"aria-label":"Listen to prices aloud",children:n.jsx(Fr,{size:22,color:"#0F52BA",strokeWidth:2.4})})]}),n.jsxs("div",{className:"prices-location-pill",children:[n.jsx(Je,{size:15,color:"#0B6B4A"}),n.jsx("span",{className:"prices-location-name",children:s}),n.jsx(Sn,{size:14,color:"#101A24"})]}),n.jsxs("div",{className:"prices-search-box",children:[n.jsx(Ed,{size:16,color:"#6B7280"}),n.jsx("input",{type:"text",className:"prices-search-input",placeholder:e.searchScrapPlaceholder||"Search scrap category or metal...",value:g,onChange:x=>h(x.target.value)}),g&&n.jsx("button",{className:"search-clear-btn",onClick:()=>h(""),children:n.jsx(le,{size:14,color:"#6B7280"})})]}),n.jsxs("div",{className:"prices-updated-meta",children:[n.jsx(Ht,{size:14,color:"#6E7782"}),n.jsx("span",{children:e.updatedToday||"Updated today • Based on recent local transactions"})]}),n.jsxs("div",{className:"prices-list-card",children:[v.map(x=>n.jsxs("div",{className:"price-list-row",onClick:()=>u(x),children:[n.jsx("div",{className:"price-item-thumb-wrap",children:n.jsx("img",{src:x.image,alt:x.title,className:"price-item-thumb-img"})}),n.jsxs("div",{className:"price-item-name-col",children:[n.jsx("h3",{className:"price-item-title",children:x.title}),x.sub&&n.jsx("span",{className:"price-item-sub",children:x.sub})]}),n.jsxs("div",{className:"price-item-rate-col",children:[n.jsxs("span",{className:"price-item-value",children:["₹",x.price,"/kg"]}),n.jsxs("div",{className:`price-trend-tag ${x.trend}`,children:[x.trend==="up"&&n.jsx(Pd,{size:13,color:"#0B6B4A",strokeWidth:2.5}),x.trend==="down"&&n.jsx(mh,{size:13,color:"#C94C4C",strokeWidth:2.5}),x.trend==="stable"&&n.jsx(zd,{size:13,color:"#6E7782",strokeWidth:2.5}),n.jsx("span",{children:x.change})]})]}),n.jsx(ye,{size:18,color:"#CBD5E1",className:"price-row-arrow"})]},x.id)),v.length===0&&n.jsxs("div",{style:{padding:"24px 16px",textAlign:"center",color:"#6E7782",fontSize:"13px"},children:['No scrap items match "',g,'"']})]}),n.jsxs("div",{className:"prices-info-banner",children:[n.jsx(Ph,{size:18,color:"#0B6B4A",className:"info-banner-icon"}),n.jsxs("div",{className:"info-banner-text",children:[n.jsx("h4",{className:"info-banner-title",children:e.basedOnLocalTx||"Based on the last 42 local transactions"}),n.jsx("p",{className:"info-banner-desc",children:e.pricesMayVary||"Prices may vary by condition, quantity and buyer."})]})]})]}),c&&n.jsx("div",{className:"price-modal-backdrop",onClick:()=>u(null),children:n.jsxs("div",{className:"price-modal-sheet",onClick:x=>x.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsxs("div",{className:"sheet-item-info",children:[n.jsx("img",{src:c.image,alt:c.title,className:"modal-thumb"}),n.jsxs("div",{children:[n.jsx("h3",{children:c.title}),n.jsxs("p",{children:[e.marketTrend7Day||"7-Day Market Trend"," • ",e.currentPrice||"Current",": ₹",c.price,"/kg"]})]})]}),n.jsx("button",{className:"modal-close-btn",onClick:()=>u(null),children:n.jsx(le,{size:18,color:"#101A24"})})]}),n.jsx("div",{className:"sparkline-container",children:n.jsx("div",{className:"sparkline-bars",children:c.history.map((x,w)=>n.jsxs("div",{className:"sparkline-col",children:[n.jsx("div",{className:"sparkline-bar",style:{height:`${x/135*100}%`}}),n.jsxs("span",{className:"sparkline-day",children:["D",w+1]}),n.jsxs("span",{className:"sparkline-val",children:["₹",x]})]},w))})}),n.jsx("button",{className:"step-primary-cta-btn",onClick:()=>{const x=c;u(null),a&&a(x.id)},children:n.jsxs("span",{children:[e.sellNowPrefix||"Sell"," ",c.title," ",e.sellNowSuffix||"Now →"]})})]})}),n.jsxs("div",{className:"home-nav-bar",children:[n.jsxs("button",{className:"nav-tab",onClick:()=>i?i("home"):r&&r(),children:[n.jsx(Gt,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabHome||"Home"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>i?i("history"):r&&r(),children:[n.jsx($t,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabBookings||"Bookings"})]}),n.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:()=>i?i("step1_photo"):r&&r(),"aria-label":"Camera Scan",children:[n.jsx(_t,{size:26,color:"#FFFFFF"}),n.jsx("span",{className:"fab-label",children:e.tabCamera||"Camera"})]}),n.jsxs("button",{className:"nav-tab active",children:[n.jsx(fs,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabRates||"Rates"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>i?i("profile"):r&&r(),children:[n.jsx(bt,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabProfile||"Profile"})]})]})]})}function pm({t:e={},currentLang:t="en",transactionsList:s=null,onBack:r,onNavigateTab:a}){const[i,l]=S.useState(!1),[o,c]=S.useState("This Week"),[u,g]=S.useState(5),[h,m]=S.useState(null),v=[{day:"Mon",amount:120,height:28},{day:"Tue",amount:160,height:38},{day:"Wed",amount:240,height:58},{day:"Thu",amount:310,height:75},{day:"Fri",amount:200,height:48},{day:"Sat",amount:420,height:95,isMax:!0},{day:"Sun",amount:140,height:32}],x=s||[{id:"tx_1",title:"PCB",date:"12 Aug 2026",amount:312,status:"Received",image:"/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/pcb_thumbnail_reference.png",buyer:"GreenCycle Recycling",weight:"2.5 kg"},{id:"tx_2",title:"Cables & Wires",date:"10 Aug 2026",amount:180,status:"Received",image:"/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/cables_wires_thumbnail_reference.png",buyer:"EcoScrap Solutions",weight:"2.5 kg"},{id:"tx_3",title:"Car Battery",date:"08 Aug 2026",amount:220,status:"Pending",image:"/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/car_battery_thumbnail_reference.png",buyer:"ReNew E-Waste",weight:"3.5 kg"},{id:"tx_4",title:"CRT TV",date:"05 Aug 2026",amount:85,status:"Received",image:"/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/crt_tv_thumbnail_reference.png",buyer:"GreenCycle Recycling",weight:"4.7 kg"},{id:"tx_5",title:"LCD Display",date:"02 Aug 2026",amount:160,status:"Received",image:"/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/lcd_display_thumbnail_reference.png",buyer:"EcoScrap Solutions",weight:"3.8 kg"}],w=()=>{W.tapTick(),l(!0);let p="Your total earnings this week are ₹1,240, up 18 percent compared to last week. Your peak earning day was Saturday with ₹420.";t==="hi"?p="इस सप्ताह आपकी कुल कमाई 1,240 रुपये है, जो पिछले सप्ताह की तुलना में 18 प्रतिशत अधिक है। शनिवार को आपकी सर्वाधिक कमाई 420 रुपये हुई।":t==="mr"&&(p="या आठवड्यात तुमची एकूण कमाई 1,240 रुपये आहे, जी मागील आठवड्याच्या तुलनेत 18 टक्के अधिक आहे. शनिवारी तुमची सर्वाधिक कमाई 420 रुपये झाली."),W.speak(p,t,()=>l(!0),()=>l(!1))};return n.jsxs("div",{className:"my-earnings-screen page-fade-enter",children:[n.jsxs("div",{className:"earnings-scroll-content",children:[r&&n.jsx("div",{className:"earnings-top-nav",children:n.jsx("button",{className:"step-back-btn",onClick:r,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})})}),n.jsxs("div",{className:"earnings-header-row",children:[n.jsxs("div",{className:"earnings-title-block",children:[n.jsx("h1",{className:"earnings-main-title",children:e.myEarnings||"My Earnings"}),n.jsx("p",{className:"earnings-main-sub",children:e.trackEarningsDesc||"Track what you’ve earned from your scrap"})]}),n.jsx("button",{className:`earnings-audio-btn ${i?"playing":""}`,onClick:w,"aria-label":"Listen to earnings summary",children:n.jsx(Fr,{size:22,color:"#0B6B4A",strokeWidth:2.4})})]}),n.jsxs("div",{className:"earnings-hero-card",children:[n.jsxs("div",{className:"earnings-hero-top-row",children:[n.jsxs("div",{className:"earnings-hero-left",children:[n.jsxs("div",{className:"timeframe-selector",children:[n.jsx("span",{children:o==="This Week"?e.thisWeek||"This Week":o}),n.jsx(Sn,{size:14,color:"#0B6B4A"})]}),n.jsxs("div",{className:"earnings-hero-amount",children:[n.jsx("span",{className:"hero-rupee",children:"₹"}),n.jsx("span",{className:"hero-num",children:"1,240"})]}),n.jsxs("div",{className:"earnings-growth-tag",children:[n.jsx(Pd,{size:14,color:"#0B6B4A",strokeWidth:2.5}),n.jsxs("span",{children:[n.jsx("strong",{children:"+18%"})," ",e.comparedToLastWeek||"compared to last week"]})]})]}),n.jsx("div",{className:"earnings-hero-right",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/earnings_growth_plant_transparent_reference.png",alt:"Green impact sprout",className:"earnings-plant-img"})})]}),n.jsx("div",{className:"earnings-chart-container",children:n.jsx("div",{className:"earnings-chart-bars",children:v.map((p,d)=>{const f=u===d;return n.jsxs("div",{className:"earnings-bar-col",onClick:()=>g(d),children:[f&&n.jsxs("div",{className:"bar-tooltip-pill",children:["₹",p.amount]}),n.jsx("div",{className:`earnings-bar ${p.isMax?"max-bar":""} ${f?"active-bar":""}`,style:{height:`${p.height}%`}}),n.jsx("span",{className:`bar-day-label ${f?"active-day":""}`,children:p.day})]},p.day)})})})]}),n.jsxs("div",{className:"recent-tx-header",children:[n.jsx("h2",{className:"recent-tx-title",children:e.recentTransactions||"Recent Transactions"}),n.jsxs("button",{className:"view-all-tx-link",children:[n.jsx("span",{children:e.viewAll||"View all"}),n.jsx(ye,{size:14,color:"#0B6B4A"})]})]}),n.jsx("div",{className:"transactions-list-card",children:x.map(p=>n.jsxs("div",{className:"tx-item-row",onClick:()=>m(p),children:[n.jsx("div",{className:"tx-thumb-wrap",children:n.jsx("img",{src:p.image,alt:p.title,className:"tx-thumb-img"})}),n.jsxs("div",{className:"tx-info-col",children:[n.jsx("h3",{className:"tx-item-title",children:p.title}),n.jsx("span",{className:"tx-item-date",children:p.date})]}),n.jsxs("div",{className:"tx-amount-col",children:[n.jsxs("span",{className:"tx-amount-val",children:["+₹",p.amount]}),n.jsx("span",{className:`tx-status-badge ${p.status.toLowerCase()}`,children:p.status==="Received"?e.receivedStatus||"Received":p.status==="Pending"?e.pendingStatus||"Pending":p.status})]})]},p.id))}),n.jsxs("div",{className:"view-all-transactions-banner",children:[n.jsxs("div",{className:"vat-left",children:[n.jsx(wh,{size:18,color:"#0B6B4A"}),n.jsx("span",{className:"vat-text",children:e.viewAllTransactions||"View all transactions"})]}),n.jsx(ye,{size:18,color:"#6E7782"})]})]}),h&&n.jsx("div",{className:"price-modal-backdrop",onClick:()=>m(null),children:n.jsxs("div",{className:"price-modal-sheet",onClick:p=>p.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsxs("div",{className:"sheet-item-info",children:[n.jsx("img",{src:h.image,alt:h.title,className:"modal-thumb"}),n.jsxs("div",{children:[n.jsxs("h3",{children:[h.title," Settlement"]}),n.jsxs("p",{children:[h.date," • ",h.buyer]})]})]}),n.jsx("button",{className:"modal-close-btn",onClick:()=>m(null),children:n.jsx(le,{size:18,color:"#101A24"})})]}),n.jsxs("div",{className:"sparkline-container",style:{textAlign:"left",padding:"14px 16px"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[n.jsx("span",{style:{fontSize:"13px",color:"#6E7782"},children:e.weightCollected||"Weight Collected:"}),n.jsx("strong",{style:{color:"#101A24"},children:h.weight})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[n.jsx("span",{style:{fontSize:"13px",color:"#6E7782"},children:e.settledPayout||"Settled Payout:"}),n.jsxs("strong",{style:{color:"#0B6B4A",fontSize:"16px"},children:["₹",h.amount]})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[n.jsxs("span",{style:{fontSize:"13px",color:"#6E7782"},children:[e.status||"Status",":"]}),n.jsx("span",{className:`tx-status-badge ${h.status.toLowerCase()}`,children:h.status==="Received"?e.receivedStatus||"Received":e.pendingStatus||"Pending"})]})]}),n.jsx("button",{className:"step-primary-cta-btn",onClick:()=>m(null),children:n.jsx("span",{children:e.done||"Done"})})]})}),n.jsxs("div",{className:"home-nav-bar",children:[n.jsxs("button",{className:"nav-tab",onClick:()=>a?a("home"):r&&r(),children:[n.jsx(Gt,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabHome||"Home"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>a?a("history"):r&&r(),children:[n.jsx($t,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabBookings||"Bookings"})]}),n.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:()=>a?a("step1_photo"):r&&r(),"aria-label":"Camera Scan",children:[n.jsx(_t,{size:26,color:"#FFFFFF"}),n.jsx("span",{className:"fab-label",children:e.tabCamera||"Camera"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>a?a("todays_prices"):r&&r(),children:[n.jsx(fs,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabRates||"Rates"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>a?a("profile"):r&&r(),children:[n.jsx(bt,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabProfile||"Profile"})]})]})]})}function hm({t:e={},lots:t=null,onBack:s,onNavigateTab:r}){const[a,i]=S.useState("all"),[l,o]=S.useState(null),[c,u]=S.useState(!1),[g,h]=S.useState("All"),[m,v]=S.useState(""),x=t||[{id:"lot_1",lotNumber:"Lot #A7F2K9",title:"PCB / Circuit Board",category:"E-Waste",date:"3 Sep 2026",weight:"2.5 kg",rate:"₹125/kg",amount:312,status:"Completed",statusType:"completed",statusCode:"completed",image:"/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/pcb_thumbnail.png",buyer:"GreenCycle Recycling",settlementMode:"UPI QR Transfer",notes:"Inspected Grade A circuit boards with full copper recovery trace."},{id:"lot_2",lotNumber:"Lot #B3D9L1",title:"Cables & Wires",category:"Metals",date:"1 Sep 2026",weight:"4.0 kg",rate:"₹70/kg",amount:280,status:"Handed Over",statusType:"active",statusCode:"handed_over",image:"/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/cables_thumbnail.png",buyer:"EcoScrap Solutions",settlementMode:"Cash on Delivery",notes:"Driver picked up from Rohini Sector 7. Awaiting final recycler depot weigh-in."},{id:"lot_3",lotNumber:"Lot #C6H4P0",title:"Car Battery",category:"Batteries",date:"29 Aug 2026",weight:"8.2 kg",rate:"₹62/kg",amount:510,status:"Listed",statusType:"active",statusCode:"listed",image:"/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/battery_thumbnail.png",buyer:"Awaiting Buyer Match",settlementMode:"Direct Settlement",notes:"Listed on buyer exchange with verified dry-cell certificate."},{id:"lot_4",lotNumber:"Lot #E9V2M8",title:"LCD Display",category:"E-Waste",date:"24 Aug 2026",weight:"3.1 kg",rate:"₹61/kg",amount:190,status:"Disputed",statusType:"disputed",statusCode:"disputed",image:"/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/lcd_thumbnail.png",buyer:"TechRecycle Delhi",settlementMode:"Review Pending",notes:"Minor tare weight variation recorded at hub scale (-0.4 kg). Dispute under review."}],w=x.filter(d=>{if(a==="active"&&d.statusType!=="active"||a==="completed"&&d.statusType!=="completed"||g!=="All"&&d.category!==g)return!1;if(m.trim()){const f=m.toLowerCase().trim(),k=d.title.toLowerCase().includes(f),_=d.lotNumber.toLowerCase().includes(f),j=d.buyer.toLowerCase().includes(f);if(!k&&!_&&!j)return!1}return!0}),p=d=>{switch(d){case"completed":return n.jsx(Kt,{size:12,color:"#0B6B4A",strokeWidth:2.5});case"handed_over":return n.jsx(Ht,{size:12,color:"#D97706",strokeWidth:2.5});case"listed":return n.jsx(Eh,{size:12,color:"#0B6B4A",strokeWidth:2.5});case"disputed":return n.jsx(ph,{size:12,color:"#DC2626",strokeWidth:2.5});default:return n.jsx(Ht,{size:12,color:"#6E7782",strokeWidth:2.5})}};return n.jsxs("div",{className:"history-screen page-fade-enter",children:[n.jsxs("div",{className:"history-scroll-content",children:[s&&n.jsx("div",{className:"history-top-nav",children:n.jsx("button",{className:"step-back-btn",onClick:s,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})})}),n.jsxs("div",{className:"history-header-row",children:[n.jsxs("div",{className:"history-title-block",children:[n.jsx("h1",{className:"history-main-title",children:e.historyTitle||"History"}),n.jsx("p",{className:"history-main-sub",children:"Track all your scrap collection lots"})]}),n.jsx("button",{className:"history-filter-btn",onClick:()=>u(!0),"aria-label":"Filter transactions",children:n.jsx(Uh,{size:20,color:"#101A24",strokeWidth:2.2})})]}),n.jsxs("div",{className:"prices-search-box",style:{margin:"0 0 12px 0"},children:[n.jsx(Ed,{size:16,color:"#6B7280"}),n.jsx("input",{type:"text",className:"prices-search-input",placeholder:e.searchHistoryPlaceholder||"Search by lot # or buyer...",value:m,onChange:d=>v(d.target.value)}),m&&n.jsx("button",{className:"search-clear-btn",onClick:()=>v(""),children:n.jsx(le,{size:14,color:"#6B7280"})})]}),n.jsxs("div",{className:"history-segments-bar",children:[n.jsxs("button",{className:`history-segment-pill ${a==="all"?"active":""}`,onClick:()=>i("all"),children:[n.jsx("span",{children:e.historyAll||"All"}),n.jsx("span",{className:"segment-count",children:x.length})]}),n.jsxs("button",{className:`history-segment-pill ${a==="active"?"active":""}`,onClick:()=>i("active"),children:[n.jsx("span",{children:e.historyActive||"Active"}),n.jsx("span",{className:"segment-count",children:x.filter(d=>d.statusType==="active").length})]}),n.jsxs("button",{className:`history-segment-pill ${a==="completed"?"active":""}`,onClick:()=>i("completed"),children:[n.jsx("span",{children:e.historyCompleted||"Completed"}),n.jsx("span",{className:"segment-count",children:x.filter(d=>d.statusType==="completed").length})]})]}),n.jsx("div",{className:"history-lots-list",children:w.length===0?n.jsx("div",{className:"history-empty-state",children:n.jsx("p",{children:"No transactions found for this filter."})}):w.map(d=>n.jsxs("div",{className:"history-lot-card hover-lift",onClick:()=>o(d),children:[n.jsxs("div",{className:"lot-card-left",children:[n.jsx("div",{className:"lot-thumb-wrap",children:n.jsx("img",{src:d.image,alt:d.title,className:"lot-thumb-img"})}),n.jsxs("div",{className:"lot-info-col",children:[n.jsx("h3",{className:"lot-item-title",children:d.title}),n.jsxs("span",{className:"lot-meta-text",children:[d.weight," • ",d.date," • ",n.jsx("strong",{className:"lot-id-tag",children:d.lotNumber})]})]})]}),n.jsxs("div",{className:"lot-card-right",children:[n.jsxs("span",{className:"lot-amount-val",children:["₹",d.amount]}),n.jsxs("div",{className:`lot-status-pill ${d.statusCode}`,children:[p(d.statusCode),n.jsx("span",{children:d.status})]})]})]},d.id))}),n.jsxs("div",{className:"earnings-summary-banner hover-lift",onClick:()=>r?r("my_earnings"):null,children:[n.jsxs("div",{className:"es-banner-left",children:[n.jsx("div",{className:"es-banner-icon-wrap",children:n.jsx(el,{size:22,color:"#0B6B4A",strokeWidth:2.4})}),n.jsxs("div",{className:"es-banner-text-col",children:[n.jsx("h4",{className:"es-banner-title",children:"View Earnings Summary"}),n.jsx("p",{className:"es-banner-sub",children:"See total earnings and analytics from all your lots"})]})]}),n.jsx(ye,{size:20,color:"#0B6B4A"})]})]}),l&&n.jsx("div",{className:"price-modal-backdrop",onClick:()=>o(null),children:n.jsxs("div",{className:"price-modal-sheet history-detail-sheet",onClick:d=>d.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsxs("div",{className:"sheet-item-info",children:[n.jsx("img",{src:l.image,alt:l.title,className:"modal-thumb"}),n.jsxs("div",{children:[n.jsx("h3",{children:l.title}),n.jsxs("p",{children:[l.lotNumber," • ",l.date]})]})]}),n.jsx("button",{className:"modal-close-btn",onClick:()=>o(null),children:n.jsx(le,{size:18,color:"#101A24"})})]}),n.jsxs("div",{className:"history-receipt-box",children:[n.jsxs("div",{className:"receipt-row",children:[n.jsxs("span",{children:[e.scrapCategories||"Category",":"]}),n.jsx("strong",{children:l.category})]}),n.jsxs("div",{className:"receipt-row",children:[n.jsxs("span",{children:[e.weight||"Weight Collected",":"]}),n.jsx("strong",{children:l.weight})]}),n.jsxs("div",{className:"receipt-row",children:[n.jsxs("span",{children:[e.rate||"Unit Rate",":"]}),n.jsx("strong",{children:l.rate})]}),n.jsxs("div",{className:"receipt-row",children:[n.jsxs("span",{children:[e.buyer||"Assigned Recycler",":"]}),n.jsx("strong",{children:l.buyer})]}),n.jsxs("div",{className:"receipt-row",children:[n.jsxs("span",{children:[e.paymentMode||"Payment Mode",":"]}),n.jsx("strong",{children:l.settlementMode})]}),n.jsxs("div",{className:"receipt-row highlight-row",children:[n.jsxs("span",{children:[e.totalAmount||"Total Payout",":"]}),n.jsxs("strong",{className:"receipt-payout-amount",children:["₹",l.amount]})]}),n.jsxs("div",{className:"receipt-status-row",children:[n.jsxs("span",{children:[e.status||"Current Status",":"]}),n.jsxs("div",{className:`lot-status-pill ${l.statusCode}`,children:[p(l.statusCode),n.jsx("span",{children:l.status})]})]})]}),n.jsx("div",{className:"lot-notes-box",children:n.jsxs("p",{className:"lot-notes-text",children:[n.jsx("strong",{children:"Lot Note:"})," ",l.notes]})}),n.jsx("div",{className:"history-modal-cta-row",children:n.jsx("button",{className:"step-primary-cta-btn",onClick:()=>o(null),children:n.jsx("span",{children:"Close Details"})})})]})}),c&&n.jsx("div",{className:"price-modal-backdrop",onClick:()=>u(!1),children:n.jsxs("div",{className:"price-modal-sheet",onClick:d=>d.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsx("h3",{style:{margin:0,fontSize:"18px",fontWeight:800},children:"Filter History"}),n.jsx("button",{className:"modal-close-btn",onClick:()=>u(!1),children:n.jsx(le,{size:18,color:"#101A24"})})]}),n.jsxs("div",{style:{padding:"8px 0 16px"},children:[n.jsx("span",{style:{fontSize:"13px",fontWeight:700,color:"#101A24",display:"block",marginBottom:"10px"},children:"Material Category:"}),n.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:["All","E-Waste","Metals","Batteries"].map(d=>n.jsx("button",{className:`history-filter-chip ${g===d?"active":""}`,onClick:()=>h(d),children:d},d))})]}),n.jsx("button",{className:"step-primary-cta-btn",onClick:()=>u(!1),children:n.jsx("span",{children:"Apply Filters"})})]})}),n.jsxs("div",{className:"home-nav-bar",children:[n.jsxs("button",{className:"nav-tab",onClick:()=>r?r("home"):s&&s(),children:[n.jsx(Gt,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Home"})]}),n.jsxs("button",{className:"nav-tab active",onClick:()=>null,children:[n.jsx($t,{size:22,className:"tab-icon"}),n.jsx("span",{children:"History"})]}),n.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:()=>r?r("step1_photo"):s&&s(),"aria-label":"Camera Scan",children:[n.jsx(_t,{size:26,color:"#FFFFFF"}),n.jsx("span",{className:"fab-label",children:"Camera"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>r?r("todays_prices"):s&&s(),children:[n.jsx(fs,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Rates"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>r?r("profile"):s&&s(),children:[n.jsx(bt,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Profile"})]})]})]})}function mm({t:e,onBack:t,onNavigateTab:s}){const[r,a]=S.useState(!1),[i,l]=S.useState(!1),[o,c]=S.useState(null),[u,g]=S.useState([{id:"sync_1",lotNumber:"Lot #A7F2K9",title:"PCB (Circuit Board)",category:"E-Waste",time:"Today, 11:24 AM",weight:"2.5 kg",rate:"₹125/kg",amount:312,synced:!1,image:"/assets/Kabadiwala_Connect_Sync_Status_UI_Asset_Pack/app/crops/pcb_lot_thumbnail.png",buyer:"GreenCycle Recycling"},{id:"sync_2",lotNumber:"Lot #B3D9L1",title:"Cables & Wires",category:"Metals",time:"Today, 10:42 AM",weight:"4.0 kg",rate:"₹70/kg",amount:280,synced:!1,image:"/assets/Kabadiwala_Connect_Sync_Status_UI_Asset_Pack/app/crops/cables_lot_thumbnail.png",buyer:"EcoScrap Solutions"},{id:"sync_3",lotNumber:"Lot #C6H4P0",title:"Car Battery",category:"Batteries",time:"Yesterday, 5:16 PM",weight:"8.2 kg",rate:"₹62/kg",amount:510,synced:!1,image:"/assets/Kabadiwala_Connect_Sync_Status_UI_Asset_Pack/app/crops/battery_lot_thumbnail.png",buyer:"Awaiting Buyer Match"}]),h=()=>{r||(a(!0),l(!1),setTimeout(()=>{g(v=>v.map(y=>({...y,synced:!0}))),a(!1),l(!0)},2e3))},m=u.filter(v=>!v.synced).length;return n.jsxs("div",{className:"sync-status-screen page-fade-enter",children:[n.jsxs("div",{className:"sync-scroll-content",children:[t&&n.jsx("div",{className:"sync-top-nav",children:n.jsx("button",{className:"step-back-btn",onClick:t,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})})}),n.jsxs("div",{className:"sync-header-row",children:[n.jsxs("div",{className:"sync-title-block",children:[n.jsx("h1",{className:"sync-main-title",children:e.syncTitle||"Sync Status"}),n.jsx("p",{className:"sync-main-sub",children:e.syncSubtitle||"Offline storage & automatic cloud sync"})]}),n.jsxs("div",{className:`sync-status-indicator-badge ${i?"synced":"offline"}`,children:[i?n.jsx(Kt,{size:16,color:"#0B6B4A",strokeWidth:2.5}):n.jsx($h,{size:16,color:"#D97706",strokeWidth:2.5}),n.jsx("span",{children:i?e.onlineSynced||"Online • Synced":`${m} ${e.lotsWaitingSync||"Lots Waiting"}`})]})]}),n.jsxs("div",{className:`offline-notice-banner ${i?"success":""}`,children:[n.jsx("div",{className:"onb-header-row",children:n.jsxs("div",{className:"onb-pill",children:[n.jsx("span",{className:`pulsing-dot ${i?"green":"amber"}`}),n.jsx("strong",{children:i?e.allLotsSyncedTitle||"All Lots Synced":`Offline • ${m} ${e.lotsWaitingSync||"lots waiting to sync"}`})]})}),n.jsx("p",{className:"onb-description",children:i?e.allLotsSyncedDesc||"Great news! All your saved scrap lots have been safely synced to the cloud server.":e.offlineNoticeDesc||"You're offline, but everything is saved. We'll sync automatically when you're back online."})]}),n.jsxs("div",{className:"sync-queue-card",children:[n.jsx("div",{className:"queue-card-header",children:n.jsx("h3",{className:"queue-header-title",children:i?e.recentlySyncedLots||"Recently Synced Lots":`${e.lotsWaitingToSync||"Lots Waiting to Sync"} (${m})`})}),n.jsx("div",{className:"queue-items-list",children:u.map(v=>n.jsxs("div",{className:"queue-lot-row hover-lift",onClick:()=>c(v),children:[n.jsx("div",{className:"queue-thumb-wrap",children:n.jsx("img",{src:v.image,alt:v.title,className:"queue-thumb-img"})}),n.jsxs("div",{className:"queue-info-col",children:[n.jsx("h4",{className:"queue-item-title",children:v.title}),n.jsxs("span",{className:"queue-meta-text",children:[v.weight," • ",v.time," • ",n.jsx("strong",{className:"lot-id-tag",children:v.lotNumber})]})]}),n.jsxs("div",{className:"queue-right-col",children:[n.jsxs("span",{className:"queue-amount-val",children:["₹",v.amount]}),v.synced?n.jsxs("div",{className:"queue-status-badge synced",children:[n.jsx(V,{size:11,color:"#0B6B4A",strokeWidth:3}),n.jsx("span",{children:e.syncedBadge||"Synced"})]}):n.jsxs("div",{className:"queue-status-badge waiting",children:[n.jsx(Ht,{size:11,color:"#D97706",strokeWidth:2.5}),n.jsx("span",{children:e.waitingBadge||"Waiting"})]})]})]},v.id))})]}),n.jsxs("div",{className:"sync-safety-card",children:[n.jsxs("div",{className:"safety-card-left",children:[n.jsxs("div",{className:"safety-badge-title",children:[n.jsx(kn,{size:16,color:"#0B6B4A",strokeWidth:2.5}),n.jsx("span",{children:e.dataSafeTitle||"Your data is safe"})]}),n.jsx("p",{className:"safety-desc",children:e.dataSafeDesc||"All photos, GPS tags, scale readings and buyer settlements are securely cached on this device with end-to-end cryptographic integrity."})]}),n.jsx("div",{className:"safety-card-right",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Sync_Status_UI_Asset_Pack/app/illustrations/sync_safety_illustration_reference.png",alt:"Safe sync lock illustration",className:"sync-safety-illustration"})})]}),n.jsx("div",{className:"sync-cta-wrap",children:n.jsxs("button",{className:`step-primary-cta-btn ${r?"loading":""}`,onClick:h,disabled:r,children:[n.jsx(Ih,{size:18,className:r?"spin-anim":""}),n.jsx("span",{children:r?e.syncingWithServer||"Syncing with Server...":i?e.syncAgainBtn||"Sync Again":e.trySyncingAgainBtn||"Try syncing again"})]})})]}),o&&n.jsx("div",{className:"price-modal-backdrop",onClick:()=>c(null),children:n.jsxs("div",{className:"price-modal-sheet",onClick:v=>v.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsxs("div",{className:"sheet-item-info",children:[n.jsx("img",{src:o.image,alt:o.title,className:"modal-thumb"}),n.jsxs("div",{children:[n.jsx("h3",{children:o.title}),n.jsxs("p",{children:[o.lotNumber," • ",o.time]})]})]}),n.jsx("button",{className:"modal-close-btn",onClick:()=>c(null),children:n.jsx(le,{size:18,color:"#101A24"})})]}),n.jsxs("div",{className:"history-receipt-box",children:[n.jsxs("div",{className:"receipt-row",children:[n.jsxs("span",{children:[e.scrapCategories||"Category",":"]}),n.jsx("strong",{children:o.category})]}),n.jsxs("div",{className:"receipt-row",children:[n.jsx("span",{children:e.cachedWeightLabel||"Cached Weight:"}),n.jsx("strong",{children:o.weight})]}),n.jsxs("div",{className:"receipt-row",children:[n.jsx("span",{children:e.calculatedRateLabel||"Calculated Rate:"}),n.jsx("strong",{children:o.rate})]}),n.jsxs("div",{className:"receipt-row",children:[n.jsx("span",{children:e.assignedRecyclerLabel||"Assigned Recycler:"}),n.jsx("strong",{children:o.buyer})]}),n.jsxs("div",{className:"receipt-row highlight-row",children:[n.jsx("span",{children:e.pendingPayoutLabel||"Pending Payout:"}),n.jsxs("strong",{className:"receipt-payout-amount",children:["₹",o.amount]})]}),n.jsxs("div",{className:"receipt-status-row",children:[n.jsx("span",{children:e.syncStatusLabel||"Sync Status:"}),n.jsx("span",{style:{fontWeight:700,color:o.synced?"#0B6B4A":"#D97706"},children:o.synced?e.cloudVerifiedText||"● Cloud Verified":e.queuedInCacheText||"🕒 Queued in Local Cache"})]})]}),n.jsx("button",{className:"step-primary-cta-btn",onClick:()=>c(null),children:n.jsx("span",{children:e.closeBtn||"Close"})})]})}),n.jsxs("div",{className:"home-nav-bar",children:[n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("home"):t&&t(),children:[n.jsx(Gt,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabHome||"Home"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("history"):t&&t(),children:[n.jsx($t,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabBookings||"Bookings"})]}),n.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:()=>s?s("step1_photo"):t&&t(),"aria-label":"Camera Scan",children:[n.jsx(_t,{size:26,color:"#FFFFFF"}),n.jsx("span",{className:"fab-label",children:e.tabCamera||"Camera"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("todays_prices"):t&&t(),children:[n.jsx(fs,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabRates||"Rates"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("profile"):t&&t(),children:[n.jsx(bt,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabProfile||"Profile"})]})]})]})}function fm({t:e={},currentLang:t="en",onClose:s,onProceed:r,onBack:a}){const[i,l]=S.useState(0),[o,c]=S.useState(!1),u=y=>y===1?t==="hi"?"सुरक्षा सुझाव। बैटरियों को गर्मी से दूर रखें। पिकअप तक उन्हें ठंडी और सूखी जगह पर रखें।":t==="mr"?"सुरक्षा टीप। बॅटरी उष्णतेपासून दूर ठेवा. पिकअप होईपर्यंत त्यांना थंड आणि कोरड्या जागी ठेवा.":"A quick safety tip. Please keep batteries away from heat. Store them in a cool, dry place until pickup.":y===2?t==="hi"?"एसिड संपर्क से बचें। बैटरी टर्मिनल को सीधा और सूखा रखें और किसी भी लीक को छूने से बचें।":t==="mr"?"अ‍ॅसिड संपर्कापासून बचाव करा. बॅटरी टर्मिनल्स सरळ आणि कोरडे ठेवा.":"Prevent acid contact. Keep battery terminals upright and avoid touching any leaked fluids.":y===3?t==="hi"?"सुरक्षित रीसाइक्लिंग सुनिश्चित करें। बैटरियां केवल CPCB अधिकृत रीसाइक्लर को सौंपें।":t==="mr"?"सुरक्षित पुनर्वापर सुनिश्चित करा. बॅटरी केवळ अधिकृत रीसायकलिंग भागीदारांनाच द्या.":"Ensure safe handover. Only give batteries to verified certified recycling partners.":"",g=[{id:1,badge:e.batteryDetectedBanner||"Battery Detected",title:e.safetyTipsHeading||"A quick safety tip",subtitle:e.beforeHandoverSub||"Before handing over your battery",tipHeading:e.keepAwayHeatHeading||"Keep batteries away from heat",tipBody:e.keepAwayHeatBody||"Store them in a cool, dry place until pickup. Never expose lithium or lead-acid batteries to direct sunlight or open fire.",dos:e.coolDryArea||"Cool & dry indoor area",donts:e.directHeatFlames||"Direct heat & flames",audioText:u(1)},{id:2,badge:e.leakPreventionTitle||"Leakage Prevention",title:e.leakPreventionTitle||"Prevent acid contact",subtitle:e.leakPreventionSub||"Keep terminals upright and dry",tipHeading:e.checkTerminalHeading||"Check for terminal leaks or cracks",tipBody:e.checkTerminalBody||"Place battery in an upright position. If liquid is present on casing, avoid skin contact and keep away from paper scrap.",dos:e.uprightOrientation||"Upright orientation",donts:e.tiltedUpsideDown||"Tilted or upside down",audioText:u(2)},{id:3,badge:e.certifiedRecyclingTitle||"Safe Handover",title:e.certifiedRecyclingTitle||"Certified Recycling",subtitle:e.govtAuthHandlerSub||"Government authorized handler pickup",tipHeading:e.handOverVerifiedHeading||"Hand over only to verified recyclers",tipBody:e.handOverVerifiedBody||"Your assigned buyer GreenCycle has CPCB certified battery handling protocol and calibrated weight scales.",dos:e.cpcbBuyer||"CPCB Certified Buyer",donts:e.informalBurning||"Informal burning or dumping",audioText:u(3)}],h=g[i],m=()=>{W.tapTick(),c(!0),W.speak(h.audioText,t,()=>c(!0),()=>c(!1))},v=()=>{W.tapTick(),i<g.length-1?l(i+1):r?r():s&&s()};return n.jsxs("div",{className:"safety-screen-wrapper page-fade-enter",children:[n.jsxs("div",{className:"safety-top-nav",children:[a?n.jsx("button",{className:"step-back-btn",onClick:a,"aria-label":"Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})}):n.jsx("div",{}),n.jsx("button",{className:"safety-close-btn",onClick:s||a,"aria-label":"Close Safety Tips",children:n.jsx(le,{size:20,color:"#101A24",strokeWidth:2.4})})]}),n.jsxs("div",{className:"safety-card-container",children:[n.jsxs("div",{className:"battery-pill-badge",children:[n.jsx(gh,{size:15,color:"#D97706",strokeWidth:2.5}),n.jsx("span",{children:h.badge})]}),n.jsxs("div",{className:"safety-header-text",children:[n.jsx("h1",{className:"safety-title",children:h.title}),n.jsx("p",{className:"safety-subtitle",children:h.subtitle})]}),n.jsx("div",{className:"safety-illustration-box",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Safety_Tips_UI_Asset_Pack/01_safety_illustrations/battery_safety_hero.jpg",alt:"Battery safety handling",className:"safety-hero-img"})}),n.jsxs("div",{className:"safety-instruction-card",children:[n.jsxs("div",{className:"safety-instruction-top",children:[n.jsx("h3",{className:"safety-tip-heading",children:h.tipHeading}),n.jsxs("button",{className:`safety-audio-pill-btn ${o?"playing":""}`,onClick:m,"aria-label":"Listen to safety advice",children:[n.jsx(Fr,{size:16,color:"#D97706",strokeWidth:2.4}),n.jsx("span",{children:e.listenBtn||"Listen"})]})]}),n.jsx("p",{className:"safety-tip-body",children:h.tipBody}),n.jsxs("div",{className:"safety-comparison-row",children:[n.jsxs("div",{className:"safety-compare-item dos",children:[n.jsx(Kt,{size:16,color:"#0B6B4A",strokeWidth:2.5}),n.jsx("span",{children:h.dos})]}),n.jsxs("div",{className:"safety-compare-item donts",children:[n.jsx(Gh,{size:16,color:"#DC2626",strokeWidth:2.5}),n.jsx("span",{children:h.donts})]})]})]}),n.jsx("div",{className:"safety-pagination-row",children:g.map((y,x)=>n.jsx("span",{className:`safety-dot ${i===x?"active":""}`,onClick:()=>l(x)},x))}),n.jsxs("div",{className:"safety-actions-wrap",children:[n.jsxs("button",{className:"safety-primary-btn",onClick:v,children:[n.jsx("span",{children:i===g.length-1?e.gotItSafetyBtn||"Got it":e.nextTipBtn||"Next Tip"}),n.jsx(Ct,{size:18,color:"#FFFFFF",strokeWidth:2.4})]}),n.jsx("button",{className:"safety-secondary-btn",onClick:s||a,children:n.jsx("span",{children:e.remindMeLaterBtn||"Remind me later"})})]})]})]})}function gm({t:e={},onClose:t,onGotIt:s}){return n.jsx("div",{className:"hazard-modal-backdrop",onClick:t,children:n.jsxs("div",{className:"hazard-bottom-sheet page-slide-up",onClick:r=>r.stopPropagation(),children:[n.jsx("div",{className:"sheet-drag-handle"}),n.jsx("button",{className:"hazard-close-btn",onClick:t,"aria-label":"Close hazard alert",children:n.jsx(le,{size:18,color:"#101A24",strokeWidth:2.4})}),n.jsxs("div",{className:"hazard-header-block",children:[n.jsx("div",{className:"hazard-icon-circle",children:n.jsx(hh,{size:28,color:"#EA580C",strokeWidth:2.4})}),n.jsx("h2",{className:"hazard-title",children:e.hazardDetectedTitle||"Hazardous item detected"}),n.jsx("p",{className:"hazard-sub",children:e.hazardDetectedDesc||"A battery has been detected in your image. Please follow the safety guidelines below."})]}),n.jsxs("div",{className:"detected-item-card",children:[n.jsx("div",{className:"detected-item-thumb-wrap",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Hazardous_Battery_Detected_UI_Asset_Pack/02_app_assets/battery_thumbnail_reference.png",alt:"Detected Lithium-ion Battery",className:"detected-item-img"})}),n.jsxs("div",{className:"detected-item-info",children:[n.jsx("span",{className:"detected-item-tag",children:e.detectedItemTag||"Detected item"}),n.jsx("h3",{className:"detected-item-name",children:e.lithiumIonBattery||"Lithium-ion Battery"}),n.jsx("p",{className:"detected-item-desc",children:e.lithiumBatteryDesc||"Common in laptops, phones and other electronics."})]})]}),n.jsxs("div",{className:"safety-guidelines-box",children:[n.jsxs("div",{className:"guidelines-card-header",children:[n.jsx("div",{className:"shield-icon-circle",children:n.jsx(Hh,{size:14,color:"#EA580C",strokeWidth:2.5})}),n.jsx("h4",{className:"guidelines-heading",children:e.safetyGuidelinesTitle||"Safety guidelines"})]}),n.jsxs("div",{className:"guidelines-list",children:[n.jsxs("div",{className:"guideline-row",children:[n.jsx("div",{className:"guideline-icon-wrap flame",children:n.jsx(Nh,{size:16,color:"#EA580C",strokeWidth:2.4})}),n.jsxs("div",{className:"guideline-text",children:[n.jsx("strong",{children:e.keepAwayHeatTitle||"Keep away from heat and fire"}),n.jsx("p",{children:e.keepAwayHeatDesc||"Do not expose batteries to high temperatures."})]})]}),n.jsxs("div",{className:"guideline-row",children:[n.jsx("div",{className:"guideline-icon-wrap hand",children:n.jsx(Ch,{size:16,color:"#D97706",strokeWidth:2.4})}),n.jsxs("div",{className:"guideline-text",children:[n.jsx("strong",{children:e.handleCareTitle||"Handle with care"}),n.jsx("p",{children:e.handleCareDesc||"Avoid handling damaged or leaking batteries directly."})]})]}),n.jsxs("div",{className:"guideline-row",children:[n.jsx("div",{className:"guideline-icon-wrap recycle",children:n.jsx(Rh,{size:16,color:"#0B6B4A",strokeWidth:2.4})}),n.jsxs("div",{className:"guideline-text",children:[n.jsx("strong",{children:e.disposeSafelyTitle||"Dispose safely"}),n.jsx("p",{children:e.disposeSafelyDesc||"Keep in a dry place and hand over to a verified collector or recycler."})]})]})]})]}),n.jsx("button",{className:"hazard-primary-cta",onClick:s||t,children:n.jsx("span",{children:e.gotItBtn||"Got it"})})]})})}function xm({t:e,onNext:t,onBack:s}){const[r,a]=S.useState(!0),i=[{num:1,label:e.stepPhoto||"Photo",active:!0},{num:2,label:e.stepCategory||"Category",active:!1},{num:3,label:e.stepWeight||"Weight",active:!1},{num:4,label:e.stepValue||"Value",active:!1},{num:5,label:e.stepBuyer||"Buyer",active:!1}],l=()=>{a(!1),t&&t({photoUrl:"/assets/Kabadiwala_Connect_Hazardous_Battery_Detected_UI_Asset_Pack/02_app_assets/camera_preview_reference.png",hazardDetected:!0,detectedType:"Lithium-ion Battery",categoryId:"car_battery",categoryName:e.itemBattery||"Car Battery"})};return n.jsxs("div",{className:"step1-photo-screen page-fade-enter",children:[n.jsxs("div",{className:"step-header",children:[n.jsx("button",{className:"step-back-btn",onClick:s,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsxs("div",{className:"step-header-text",children:[n.jsx("h1",{className:"step-title",children:e.takePhotoTitle||"Take a photo of your scrap"}),n.jsx("p",{className:"step-subtitle",children:e.takePhotoSub||"Make sure the item is clearly visible"})]})]}),n.jsxs("div",{className:"stepper-container",children:[n.jsx("div",{className:"stepper-line"}),n.jsx("div",{className:"stepper-steps",children:i.map(o=>n.jsxs("div",{className:`stepper-item ${o.active?"active":""}`,children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:o.num})}),n.jsx("span",{className:"stepper-label",children:o.label})]},o.num))})]}),n.jsx("div",{className:"camera-viewfinder-container",children:n.jsxs("div",{className:"camera-viewfinder",children:[n.jsx("img",{src:"/assets/Kabadiwala_Connect_Hazardous_Battery_Detected_UI_Asset_Pack/02_app_assets/camera_preview_reference.png",alt:"Scrap Camera Feed with Battery",className:"camera-feed-img"}),n.jsx("div",{className:"corner-bracket top-left"}),n.jsx("div",{className:"corner-bracket top-right"}),n.jsx("div",{className:"corner-bracket bottom-left"}),n.jsx("div",{className:"corner-bracket bottom-right"}),n.jsx("div",{className:"ai-detected-bounding-box",children:n.jsxs("div",{className:"ai-battery-detected-badge",children:[n.jsx("span",{className:"battery-icon-dot",children:"🔋"}),n.jsx("span",{children:e.batteryDetectedBanner||"Battery detected"})]})})]})}),n.jsxs("div",{className:"camera-controls-bar",children:[n.jsxs("button",{className:"control-action-btn","aria-label":"Flash",children:[n.jsx("div",{className:"control-icon-circle",children:n.jsx(tl,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("span",{className:"control-label-title",children:e.flashLabel||"Flash"}),n.jsx("span",{className:"control-label-sub",children:e.flashOff||"Off"})]}),n.jsx("button",{className:"shutter-btn-outer",onClick:()=>a(!0),"aria-label":"Capture Photo",children:n.jsx("div",{className:"shutter-btn-inner"})}),n.jsxs("button",{className:"control-action-btn","aria-label":"Gallery",children:[n.jsx("div",{className:"control-icon-circle",children:n.jsx(Bd,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("span",{className:"control-label-title",children:e.galleryLabel||"Gallery"}),n.jsx("span",{className:"control-label-sub",children:e.gallerySub||"Choose from photos"})]})]}),r&&n.jsx(gm,{t:e,onClose:()=>a(!1),onGotIt:l})]})}function ym({t:e={},sellFlowData:t,onDone:s,onBack:r}){var f;const[a,i]=S.useState(!1),[l,o]=S.useState(!1),[c,u]=S.useState(!1),g=(t==null?void 0:t.weight)||2.5,h=(t==null?void 0:t.ratePerKg)||125,m=(t==null?void 0:t.estimatedTotal)||Math.round(g*h),v=(t==null?void 0:t.paymentMethod)==="cash"?e.cashMethod?`${e.cashMethod}`:"Cash Settlement":e.upiMethod?`${e.upiMethod} (Google Pay)`:"UPI (Google Pay)",y=(t==null?void 0:t.categoryName)||e.itemPcb||"PCB / Circuit Board",x=((f=t==null?void 0:t.buyer)==null?void 0:f.name)||"Rohini Recycling Centre",w=()=>{i(!0),setTimeout(()=>{i(!1),u(!0),setTimeout(()=>u(!1),2500)},800)},p=()=>{navigator.share?navigator.share({title:`Kabadiwala Connect Receipt - ₹${m}`,text:`Sold ${g}kg of ${y} for ₹${m} via Kabadiwala Connect.`,url:window.location.href}).catch(()=>{}):(o(!0),setTimeout(()=>o(!1),2e3))},d=()=>{s&&s({id:`tx_${Date.now()}`,lotNumber:`Lot #TXN${Math.floor(1e5+Math.random()*9e5)}`,title:y,category:y.includes("PCB")?"E-Waste":y.includes("Battery")?"Batteries":"Metals",date:"Today",weight:`${g} kg`,weightNum:Number(g)||2.5,rate:`₹${h}/kg`,amount:m,status:"Completed",statusType:"completed",statusCode:"completed",image:(t==null?void 0:t.photoUrl)||"/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/pcb_thumbnail.png",buyer:x,settlementMode:v,notes:"Handed over and verified at doorstep with CPCB partner."})};return n.jsxs("div",{className:"receipt-screen-wrapper page-fade-enter",children:[n.jsxs("div",{className:"receipt-top-header",children:[n.jsx("button",{className:"receipt-back-btn",onClick:r||d,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("h1",{className:"receipt-screen-title",children:e.receiptTitle||"Receipt"}),n.jsx("div",{style:{width:36}})]}),n.jsxs("div",{className:"receipt-scroll-container",children:[n.jsxs("div",{className:"receipt-paper-ticket",children:[n.jsxs("div",{className:"receipt-brand-row",children:[n.jsxs("div",{className:"receipt-logo-lockup",children:[n.jsx("img",{src:"/assets/Kabadiwala_Connect_Transaction_Receipt_UI_Asset_Pack/02_app_assets/kc2_logo_lockup_transparent_reference.png",alt:"K2 Kabadiwala Connect",className:"receipt-k2-logo"}),n.jsxs("div",{className:"receipt-brand-text",children:[n.jsx("strong",{className:"receipt-k2-title",children:"K2"}),n.jsx("span",{className:"receipt-k2-name",children:"Kabadiwala Connect"}),n.jsx("span",{className:"receipt-k2-tagline",children:e.recycleTagline||"Recycle Today, Better Tomorrow"})]})]}),n.jsxs("div",{className:"receipt-meta-box",children:[n.jsx("span",{className:"receipt-type-label",children:e.transactionReceipt||"Transaction Receipt"}),n.jsx("span",{className:"receipt-txn-num",children:"#TXN7843291"}),n.jsx("span",{className:"receipt-txn-date",children:"12 Mar 2025, 10:24 AM"})]})]}),n.jsx("div",{className:"receipt-ticket-divider"}),n.jsxs("div",{className:"receipt-section",children:[n.jsx("span",{className:"receipt-section-label",children:e.paidToSection||"Paid To"}),n.jsxs("div",{className:"receipt-buyer-card",children:[n.jsx("div",{className:"buyer-store-icon",children:n.jsx(Vh,{size:20,color:"#0B6B4A",strokeWidth:2.2})}),n.jsxs("div",{className:"buyer-details-col",children:[n.jsxs("div",{className:"buyer-title-row",children:[n.jsx("h3",{className:"buyer-store-name",children:x}),n.jsx("div",{className:"verified-check-mark",children:n.jsx(V,{size:11,color:"#FFFFFF",strokeWidth:3.5})})]}),n.jsx("span",{className:"buyer-loc-text",children:"Kabadiwala • Rohini, Delhi"}),n.jsxs("span",{className:"buyer-auth-code",children:[e.authIdPrefix||"Authorization ID:"," K2-DL-0891"]})]}),n.jsxs("div",{className:"govt-auth-pill",children:[n.jsx("span",{className:"govt-icon",children:"🏛️"}),n.jsx("span",{children:e.govtAuthorisedPill||"Government Authorised"})]})]})]}),n.jsx("div",{className:"receipt-ticket-divider"}),n.jsxs("div",{className:"receipt-section",children:[n.jsx("span",{className:"receipt-section-label",children:e.itemDetailsSection||"Item Details"}),n.jsxs("div",{className:"receipt-item-row",children:[n.jsx("div",{className:"receipt-item-thumb-box",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Transaction_Receipt_UI_Asset_Pack/02_app_assets/pcb_photo_reference.png",alt:y,className:"receipt-item-img"})}),n.jsxs("div",{className:"receipt-item-info-col",children:[n.jsx("h4",{className:"receipt-item-heading",children:y}),n.jsx("p",{className:"receipt-item-sub",children:e.itemDetailsSub||"Cables, chargers, circuit board etc."})]})]}),n.jsxs("div",{className:"receipt-stats-grid",children:[n.jsxs("div",{className:"receipt-stat-col",children:[n.jsx("span",{className:"stat-label",children:e.totalWeightStat||"Total Weight"}),n.jsxs("span",{className:"stat-value",children:[n.jsx("span",{className:"weight-bag-icon",children:"⚖️"})," ",g," kg"]})]}),n.jsxs("div",{className:"receipt-stat-col",children:[n.jsx("span",{className:"stat-label",children:e.ratePerKgStat||"Rate (per kg)"}),n.jsxs("span",{className:"stat-value",children:["₹ ",h]})]}),n.jsxs("div",{className:"receipt-stat-col total-col",children:[n.jsx("span",{className:"stat-label",children:e.totalAmountStat||"Total Amount"}),n.jsxs("span",{className:"stat-value total-highlight",children:["₹ ",m]})]})]})]}),n.jsx("div",{className:"receipt-ticket-divider"}),n.jsxs("div",{className:"receipt-section",children:[n.jsx("span",{className:"receipt-section-label",children:e.paymentDetailsSection||"Payment Details"}),n.jsxs("div",{className:"payment-specs-list",children:[n.jsxs("div",{className:"payment-spec-row",children:[n.jsx("span",{className:"ps-label",children:e.paymentMethodLabel||"Payment Method"}),n.jsx("strong",{className:"ps-val",children:v})]}),n.jsxs("div",{className:"payment-spec-row",children:[n.jsx("span",{className:"ps-label",children:e.transactionIdLabel||"Transaction ID"}),n.jsx("strong",{className:"ps-val",children:"TXN7843291"})]}),n.jsxs("div",{className:"payment-spec-row",children:[n.jsx("span",{className:"ps-label",children:e.paymentStatusLabel||"Payment Status"}),n.jsxs("div",{className:"payment-received-tag",children:[n.jsx("span",{className:"received-dot"}),n.jsx("span",{children:e.paymentReceivedStatus||"Payment Received"})]})]})]})]}),n.jsxs("div",{className:"receipt-impact-banner",children:[n.jsx("div",{className:"impact-leaf-circle",children:n.jsx(Td,{size:18,color:"#FFFFFF",strokeWidth:2.4})}),n.jsxs("div",{className:"impact-banner-text",children:[n.jsx("h4",{className:"impact-title",children:e.thankYouRecyclingTitle||"Thank you for recycling!"}),n.jsx("p",{className:"impact-sub",children:e.cleanerIndiaSub||"You're helping build a cleaner, greener India."})]})]}),n.jsx("div",{className:"receipt-footer-motto",children:n.jsx("span",{children:e.keepRecyclingMotto||"KEEP RECYCLING, KEEP MAKING A DIFFERENCE"})})]}),n.jsxs("div",{className:"receipt-actions-row",children:[n.jsxs("button",{className:"receipt-action-btn",onClick:w,disabled:a,children:[n.jsx(bh,{size:18,color:"#0B6B4A",strokeWidth:2.2}),n.jsx("span",{children:c?e.downloadedBtn||"Downloaded!":a?e.generatingBtn||"Generating...":e.downloadBillBtn||"Download Bill"})]}),n.jsxs("button",{className:"receipt-action-btn",onClick:p,children:[n.jsx(Fd,{size:18,color:"#0B6B4A",strokeWidth:2.2}),n.jsx("span",{children:l?e.copiedLinkBtn||"Copied Link!":e.shareBillBtn||"Share Bill"})]})]}),n.jsx("button",{className:"receipt-done-primary-btn",onClick:d,children:n.jsx("span",{children:e.doneBtn||e.done||"Done"})})]})]})}function vm({t:e={},user:t={name:"Rakesh",phone:"7015363695"},stats:s={totalEarned:1240,lotsCompleted:4,kgRecycled:18.3},onUpdateUser:r,onNavigateTab:a,onBack:i}){const[l,o]=S.useState(null),[c,u]=S.useState(t.name||"Rakesh"),[g,h]=S.useState(t.phone||"7015363695"),[m,v]=S.useState(null),[y,x]=S.useState({line1:"Shop #14, Sector 7 Scrap Market",area:"Rohini, Delhi",pincode:"110085"}),[w,p]=S.useState({notifications:!0,audioGuidance:!0,autoSyncWifi:!0,smsAlerts:!0}),d=j=>{j==null||j.preventDefault(),r&&r({name:c,phone:g}),o(null),k(e.profileSaved||"Profile details updated!")},f=j=>{j==null||j.preventDefault(),o(null),k(e.addressSaved||"Pickup address saved successfully!")},k=j=>{v(j),setTimeout(()=>v(null),2500)},_=[{id:"profile_details",icon:bt,title:e.profileDetails||"Profile Details",subtitle:e.profileDetailsDesc||"View and update your personal details",action:()=>o("edit_profile")},{id:"address",icon:Je,title:e.address||"Address",subtitle:e.addressDesc||"Manage your delivery and pickup address",action:()=>o("address")},{id:"language",icon:Sh,title:e.language||"Language",subtitle:e.languageDesc||"Choose your preferred language",action:()=>a?a("language"):null},{id:"sync_details",icon:Ji,title:e.syncDetails||"Sync Details",subtitle:e.syncDetailsDesc||"Sync your data across devices",action:()=>a?a("sync_status"):null},{id:"safety_hazards",icon:Oh,title:e.safetyHazards||"Safety & Hazards",subtitle:e.safetyHazardsDesc||"Learn about safety guidelines for e-waste",action:()=>a?a("safety_tips"):null},{id:"app_settings",icon:Wh,title:e.appSettings||"App Settings",subtitle:e.appSettingsDesc||"Notifications, sound effects and privacy",action:()=>o("settings")},{id:"help_support",icon:_h,title:e.helpSupport||"Help & Support",subtitle:e.helpSupportDesc||"Get help or contact our 24/7 team",action:()=>o("help")}];return n.jsxs("div",{className:"profile-screen-wrapper page-fade-enter",children:[n.jsxs("div",{className:"profile-scroll-container",children:[n.jsxs("div",{className:"profile-header-card",children:[n.jsx("div",{className:"profile-avatar-circle",children:n.jsx("span",{className:"profile-avatar-letter",children:t.name?t.name.charAt(0).toUpperCase():"R"})}),n.jsxs("div",{className:"profile-info-col",children:[n.jsxs("div",{className:"profile-name-row",children:[n.jsx("h2",{className:"profile-user-name",children:t.name||"Rakesh"}),n.jsxs("button",{className:"profile-edit-btn",onClick:()=>o("edit_profile"),"aria-label":"Edit Profile",children:[n.jsx(Lh,{size:13,color:"#0B6B4A",strokeWidth:2.4}),n.jsx("span",{children:"Edit"})]})]}),n.jsxs("span",{className:"profile-user-phone",children:["+91 ",t.phone||"7015363695"]}),n.jsxs("div",{className:"profile-verified-badge",children:[n.jsx("div",{className:"verified-dot-inner",children:n.jsx(V,{size:9,color:"#FFFFFF",strokeWidth:3.5})}),n.jsx("span",{children:"Verified Member"})]})]})]}),n.jsxs("div",{className:"profile-stats-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"8px",marginBottom:"14px"},children:[n.jsxs("div",{className:"p-stat-card",style:{background:"#FFFFFF",padding:"10px 8px",borderRadius:"14px",textAlign:"center",border:"1.5px solid #E2E8DC"},children:[n.jsx("span",{style:{fontSize:"10px",color:"#6B7280",fontWeight:600,display:"block"},children:e.totalEarned||"Total Earned"}),n.jsxs("strong",{style:{fontSize:"15px",color:"#0B6B4A",fontWeight:800},children:["₹",(s==null?void 0:s.totalEarned)||1240]})]}),n.jsxs("div",{className:"p-stat-card",style:{background:"#FFFFFF",padding:"10px 8px",borderRadius:"14px",textAlign:"center",border:"1.5px solid #E2E8DC"},children:[n.jsx("span",{style:{fontSize:"10px",color:"#6B7280",fontWeight:600,display:"block"},children:e.lotsCompleted||"Lots Done"}),n.jsx("strong",{style:{fontSize:"15px",color:"#101A24",fontWeight:800},children:(s==null?void 0:s.lotsCompleted)||4})]}),n.jsxs("div",{className:"p-stat-card",style:{background:"#FFFFFF",padding:"10px 8px",borderRadius:"14px",textAlign:"center",border:"1.5px solid #E2E8DC"},children:[n.jsx("span",{style:{fontSize:"10px",color:"#6B7280",fontWeight:600,display:"block"},children:e.kgRecycled||"Recycled"}),n.jsxs("strong",{style:{fontSize:"15px",color:"#101A24",fontWeight:800},children:[(s==null?void 0:s.kgRecycled)||18.3," kg"]})]})]}),n.jsxs("div",{className:"profile-motivation-banner",children:[n.jsx("div",{className:"motivation-leaf-icon-circle",children:n.jsx(Td,{size:18,color:"#0B6B4A",strokeWidth:2.4})}),n.jsxs("div",{className:"motivation-text-wrap",children:[n.jsx("h4",{className:"motivation-title",children:"Keep recycling, keep making a difference!"}),n.jsx("p",{className:"motivation-sub",children:"Small actions lead to a cleaner, greener tomorrow."})]})]}),n.jsx("div",{className:"profile-menu-card",children:_.map((j,P)=>{const B=j.icon;return n.jsxs("div",{className:"profile-menu-row",onClick:j.action,role:"button",tabIndex:0,children:[n.jsx("div",{className:"menu-icon-circle",children:n.jsx(B,{size:19,color:"#0B6B4A",strokeWidth:2.2})}),n.jsxs("div",{className:"menu-text-col",children:[n.jsx("h4",{className:"menu-item-title",children:j.title}),n.jsx("p",{className:"menu-item-sub",children:j.subtitle})]}),n.jsx(ye,{size:18,color:"#9CA3AF",strokeWidth:2.2,className:"menu-chevron"})]},j.id)})}),n.jsx("div",{className:"profile-app-version-footer",children:n.jsx("span",{children:"Kabadiwala Connect v1.4.2 • CPCB Certified Partner"})})]}),m&&n.jsxs("div",{className:"profile-toast-banner",children:[n.jsx(Kt,{size:16,color:"#FFFFFF"}),n.jsx("span",{children:m})]}),l==="edit_profile"&&n.jsx("div",{className:"profile-modal-backdrop",onClick:()=>o(null),children:n.jsxs("div",{className:"profile-modal-sheet",onClick:j=>j.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsx("h3",{children:e.editProfile||"Edit Profile"}),n.jsx("button",{className:"modal-close-btn",onClick:()=>o(null),children:n.jsx(le,{size:18,color:"#6B7280"})})]}),n.jsxs("form",{onSubmit:d,className:"profile-form",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:e.name||"Full Name"}),n.jsx("input",{type:"text",value:c,onChange:j=>u(j.target.value),placeholder:e.name||"Enter your name",className:"profile-input",required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:e.phone||"Mobile Number"}),n.jsx("input",{type:"tel",value:g,onChange:j=>h(j.target.value),placeholder:"10-digit mobile number",className:"profile-input",maxLength:10,required:!0})]}),n.jsx("button",{type:"submit",className:"profile-save-btn",children:e.save||"Save Changes"})]})]})}),l==="address"&&n.jsx("div",{className:"profile-modal-backdrop",onClick:()=>o(null),children:n.jsxs("div",{className:"profile-modal-sheet",onClick:j=>j.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsx("h3",{children:e.address||"Manage Pickup Address"}),n.jsx("button",{className:"modal-close-btn",onClick:()=>o(null),children:n.jsx(le,{size:18,color:"#6B7280"})})]}),n.jsxs("form",{onSubmit:f,className:"profile-form",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:e.addressLine1||"Shop / House & Street"}),n.jsx("input",{type:"text",value:y.line1,onChange:j=>x({...y,line1:j.target.value}),placeholder:"Street / Shop details",className:"profile-input",required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:e.area||"Area / Locality & City"}),n.jsx("input",{type:"text",value:y.area,onChange:j=>x({...y,area:j.target.value}),placeholder:"e.g. Rohini, Delhi",className:"profile-input",required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:e.pincode||"Pincode"}),n.jsx("input",{type:"text",value:y.pincode,onChange:j=>x({...y,pincode:j.target.value}),placeholder:"6-digit pincode",className:"profile-input",maxLength:6,required:!0})]}),n.jsx("button",{type:"submit",className:"profile-save-btn",children:e.save||"Save Address"})]})]})}),l==="settings"&&n.jsx("div",{className:"profile-modal-backdrop",onClick:()=>o(null),children:n.jsxs("div",{className:"profile-modal-sheet",onClick:j=>j.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsx("h3",{children:e.appSettings||"App Settings"}),n.jsx("button",{className:"modal-close-btn",onClick:()=>o(null),children:n.jsx(le,{size:18,color:"#6B7280"})})]}),n.jsxs("div",{className:"settings-toggles-list",children:[n.jsxs("div",{className:"setting-toggle-row",children:[n.jsxs("div",{className:"st-info",children:[n.jsx("strong",{children:e.notifications||"Push Notifications"}),n.jsx("span",{children:"Get real-time pickup & rate alerts"})]}),n.jsx("input",{type:"checkbox",checked:w.notifications,onChange:j=>p({...w,notifications:j.target.checked}),className:"toggle-switch-checkbox"})]}),n.jsxs("div",{className:"setting-toggle-row",children:[n.jsxs("div",{className:"st-info",children:[n.jsx("strong",{children:e.audioGuidance||"Audio Voice Guidance"}),n.jsx("span",{children:"Read aloud scrap valuations and safety tips"})]}),n.jsx("input",{type:"checkbox",checked:w.audioGuidance,onChange:j=>p({...w,audioGuidance:j.target.checked}),className:"toggle-switch-checkbox"})]}),n.jsxs("div",{className:"setting-toggle-row",children:[n.jsxs("div",{className:"st-info",children:[n.jsx("strong",{children:e.autoSync||"Auto-Sync on Wi-Fi"}),n.jsx("span",{children:"Sync offline lots automatically"})]}),n.jsx("input",{type:"checkbox",checked:w.autoSyncWifi,onChange:j=>p({...w,autoSyncWifi:j.target.checked}),className:"toggle-switch-checkbox"})]}),n.jsxs("div",{className:"setting-toggle-row",children:[n.jsxs("div",{className:"st-info",children:[n.jsx("strong",{children:e.smsAlerts||"SMS Transaction Receipts"}),n.jsx("span",{children:"Receive bill receipts via SMS link"})]}),n.jsx("input",{type:"checkbox",checked:w.smsAlerts,onChange:j=>p({...w,smsAlerts:j.target.checked}),className:"toggle-switch-checkbox"})]})]}),n.jsx("button",{type:"button",className:"profile-save-btn",onClick:()=>{o(null),k("Settings saved")},children:"Done"})]})}),l==="help"&&n.jsx("div",{className:"profile-modal-backdrop",onClick:()=>o(null),children:n.jsxs("div",{className:"profile-modal-sheet",onClick:j=>j.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsx("h3",{children:"Help & Support"}),n.jsx("button",{className:"modal-close-btn",onClick:()=>o(null),children:n.jsx(le,{size:18,color:"#6B7280"})})]}),n.jsxs("div",{className:"help-support-content",children:[n.jsxs("div",{className:"support-contact-card",children:[n.jsx(Ad,{size:20,color:"#0B6B4A"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Toll-Free Helpline"}),n.jsx("p",{children:"1800-267-9000 (9 AM - 8 PM)"})]})]}),n.jsxs("div",{className:"support-contact-card",children:[n.jsx(kn,{size:20,color:"#0B6B4A"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Recycler Grievance Redressal"}),n.jsx("p",{children:"support@kabadiwalaconnect.org"})]})]}),n.jsx("p",{className:"help-subtext",children:"Our team is committed to ensuring fair prices and safe disposal of e-waste across India."})]}),n.jsx("button",{type:"button",className:"profile-save-btn",onClick:()=>o(null),children:"Close"})]})}),n.jsxs("div",{className:"home-nav-bar",children:[n.jsxs("button",{className:"nav-tab",onClick:()=>a?a("home"):null,children:[n.jsx(Gt,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Home"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>a?a("history"):null,children:[n.jsx($t,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Bookings"})]}),n.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:()=>a?a("step1_photo"):null,children:[n.jsx(_t,{size:26,color:"white"}),n.jsx("span",{className:"fab-label",children:"Scan"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>a?a("todays_prices"):null,children:[n.jsx(el,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Rates"})]}),n.jsxs("button",{className:"nav-tab active",children:[n.jsx(bt,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Profile"})]})]})]})}function jm({t:e,currentLocation:t="Rohini, Delhi",onNavigateTab:s,onBack:r}){const[a,i]=S.useState(0),[l,o]=S.useState(t),[c,u]=S.useState(!1),[g,h]=S.useState(null),[m,v]=S.useState("4:00 PM - 6:00 PM"),[y,x]=S.useState(["E-waste","Electronics"]),[w,p]=S.useState(null),d=[{label:e.todayLabel||"Today",date:"07 Sep",isAvailable:!0},{label:e.tomorrowLabel||"Tomorrow",date:"08 Sep",isAvailable:!0},{label:"Wed",date:"09 Sep",isAvailable:!0},{label:"Thu",date:"10 Sep",isAvailable:!0},{label:"Fri",date:"11 Sep",isAvailable:!0}],f=["Rohini, Delhi","Andheri West, Mumbai","Koramangala, Bengaluru","Kothrud, Pune","Connaught Place, Delhi"],k=[{id:"k1",name:"Rakesh Kumar",initials:"R",rating:4.8,reviews:124,distance:"1.8 km",status:"Available Today",statusType:"available",verified:!0,materials:["E-waste","Electronics","Cables","Plastic"],phone:"+91 98765 43210"},{id:"k2",name:"Suresh Kumar",initials:"SK",rating:4.6,reviews:98,distance:"2.4 km",status:"Few slots left",statusType:"limited",verified:!0,materials:["Paper","Plastic","Metal","Electronic"],phone:"+91 98111 22334"},{id:"k3",name:"Amit Sharma",initials:"AM",rating:4.4,reviews:76,distance:"3.2 km",status:"Fully booked",statusType:"booked",verified:!1,materials:["Metal","Plastic","Paper"],phone:"+91 98222 33445"}],_=["10:00 AM - 12:00 PM","12:00 PM - 2:00 PM","2:00 PM - 4:00 PM","4:00 PM - 6:00 PM"],j=["E-waste","Electronics","Cables","Plastic","Paper","Metal","Batteries"],P=b=>{y.includes(b)?y.length>1&&x(y.filter(A=>A!==b)):x([...y,b])},B=b=>{b.preventDefault();const A=g;h(null),p(`Pickup booked with ${A.name} for ${d[a].label} (${m})!`),setTimeout(()=>p(null),3500)};return n.jsxs("div",{className:"book-pickup-screen page-fade-enter",children:[n.jsxs("div",{className:"book-pickup-top-bar",children:[n.jsx("h1",{className:"book-pickup-title",children:e.bookingsTitle||"Book a Pickup"}),n.jsxs("button",{className:"location-pill-btn",onClick:()=>u(!0),"aria-label":"Select Location",children:[n.jsx(Je,{size:13,color:"#0B6B4A"}),n.jsx("span",{children:l}),n.jsx(Sn,{size:13,color:"#0B6B4A"})]})]}),n.jsxs("div",{className:"book-pickup-scroll-container",children:[n.jsxs("div",{className:"next-pickup-banner",children:[n.jsx("div",{className:"next-pickup-icon-circle",children:n.jsx(ri,{size:20,color:"#0B6B4A",strokeWidth:2.4})}),n.jsxs("div",{className:"next-pickup-info",children:[n.jsx("span",{className:"np-label",children:e.nextScheduledPickup||"Next Scheduled Pickup"}),n.jsx("strong",{className:"np-name",children:"Rakesh Kumar • Today, 4:00 PM"})]}),n.jsx("div",{className:"np-live-tag",children:n.jsxs("span",{children:["● ",e.confirmedStatus||"Confirmed"]})})]}),n.jsxs("div",{className:"date-selector-section",children:[n.jsx("span",{className:"section-sublabel",children:e.selectPickupDate||"Select Pickup Date"}),n.jsx("div",{className:"date-chips-row",children:d.map((b,A)=>{const Z=A===a;return n.jsxs("button",{className:`date-chip ${Z?"active":""}`,onClick:()=>i(A),children:[n.jsx("span",{className:"date-chip-label",children:b.label}),n.jsx("strong",{className:"date-chip-day",children:b.date})]},A)})})]}),n.jsxs("div",{className:"kabadiwalas-section",children:[n.jsxs("div",{className:"section-header-row",children:[n.jsx("h2",{className:"section-heading",children:e.availableKabadiwalas||"Available Kabadiwalas"}),n.jsxs("span",{className:"partners-count-badge",children:["3 ",e.nearbyBadge||"nearby"]})]}),n.jsx("div",{className:"kabadiwalas-list",children:k.map(b=>{const A=b.statusType==="booked";return n.jsxs("div",{className:"kabadiwala-card",children:[n.jsxs("div",{className:"kabadiwala-card-top",children:[n.jsx("div",{className:"k-avatar-circle",children:n.jsx("span",{children:b.initials})}),n.jsxs("div",{className:"k-info-col",children:[n.jsxs("div",{className:"k-name-row",children:[n.jsx("h3",{className:"k-name",children:b.name}),b.verified&&n.jsxs("div",{className:"k-verified-pill",title:"Verified Recycler",children:[n.jsx(V,{size:10,color:"#FFFFFF",strokeWidth:3.5}),n.jsx("span",{children:e.verifiedBadge||"Verified"})]})]}),n.jsxs("div",{className:"k-meta-row",children:[n.jsxs("div",{className:"k-rating-pill",children:[n.jsx(xr,{size:11,color:"#F59E0B",fill:"#F59E0B"}),n.jsx("span",{children:b.rating}),n.jsxs("span",{className:"k-reviews-count",children:["(",b.reviews,")"]})]}),n.jsx("span",{className:"k-dot-separator",children:"•"}),n.jsx("span",{className:"k-distance-text",children:b.distance})]})]}),n.jsxs("div",{className:`k-status-badge ${b.statusType}`,children:[n.jsx("span",{className:"status-dot"}),n.jsx("span",{children:b.status})]})]}),n.jsxs("div",{className:"k-materials-wrap",children:[n.jsx("span",{className:"materials-label",children:e.buysLabel||"Buys:"}),n.jsx("div",{className:"material-tags-row",children:b.materials.map((Z,C)=>n.jsx("span",{className:"k-mat-chip",children:Z},C))})]}),n.jsx("div",{className:"k-card-action-row",children:n.jsx("button",{className:`k-book-btn ${A?"disabled":""}`,disabled:A,onClick:()=>h(b),children:A?e.fullyBooked||"Fully Booked":e.bookPickupBtn||"Book Pickup →"})})]},b.id)})})]})]}),g&&n.jsx("div",{className:"profile-modal-backdrop",onClick:()=>h(null),children:n.jsxs("div",{className:"profile-modal-sheet",onClick:b=>b.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsxs("div",{className:"sheet-item-info",children:[n.jsx("div",{className:"k-avatar-circle",style:{width:42,height:42,fontSize:16},children:n.jsx("span",{children:g.initials})}),n.jsxs("div",{children:[n.jsxs("h3",{style:{margin:0,fontSize:16,fontWeight:800,color:"#101A24"},children:["Book ",g.name]}),n.jsxs("p",{style:{margin:"2px 0 0",fontSize:12,color:"#6E7782"},children:[d[a].label," (",d[a].date,") • ",l]})]})]}),n.jsx("button",{className:"modal-close-btn",onClick:()=>h(null),children:n.jsx(le,{size:18,color:"#6B7280"})})]}),n.jsxs("form",{onSubmit:B,className:"profile-form",style:{marginTop:12},children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:e.selectTimeSlot||"Select Time Slot"}),n.jsx("div",{className:"time-slots-grid",children:_.map((b,A)=>n.jsxs("button",{type:"button",className:`time-slot-chip ${m===b?"active":""}`,onClick:()=>v(b),children:[n.jsx(Ht,{size:12}),n.jsx("span",{children:b})]},A))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:e.scrapMaterialsForPickup||"Scrap Materials for Pickup"}),n.jsx("div",{className:"material-selection-grid",children:j.map((b,A)=>{const Z=y.includes(b);return n.jsxs("button",{type:"button",className:`mat-select-chip ${Z?"selected":""}`,onClick:()=>P(b),children:[Z&&n.jsx(V,{size:11,strokeWidth:3}),n.jsx("span",{children:b})]},A)})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:e.pickupLocation||"Pickup Location"}),n.jsxs("div",{className:"pickup-loc-preview",children:[n.jsx(Je,{size:15,color:"#0B6B4A"}),n.jsxs("span",{children:[l," (",e.defaultSavedAddress||"Default Saved Address",")"]})]})]}),n.jsx("button",{type:"submit",className:"profile-save-btn",style:{marginTop:10},children:e.confirmDoorstepPickup||"Confirm Doorstep Pickup"})]})]})}),c&&n.jsx("div",{className:"profile-modal-backdrop",onClick:()=>u(!1),children:n.jsxs("div",{className:"profile-modal-sheet",onClick:b=>b.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsx("h3",{children:e.selectServiceZone||"Select Service Zone"}),n.jsx("button",{className:"modal-close-btn",onClick:()=>u(!1),children:n.jsx(le,{size:18,color:"#6B7280"})})]}),n.jsx("div",{className:"locations-list-group",children:f.map((b,A)=>n.jsxs("div",{className:`loc-choice-row ${l===b?"active":""}`,onClick:()=>{o(b),u(!1)},children:[n.jsx(Je,{size:16,color:l===b?"#0B6B4A":"#6E7782"}),n.jsx("span",{children:b}),l===b&&n.jsx(V,{size:16,color:"#0B6B4A"})]},A))})]})}),w&&n.jsxs("div",{className:"profile-toast-banner",children:[n.jsx(Kt,{size:16,color:"#FFFFFF"}),n.jsx("span",{children:w})]}),n.jsxs("div",{className:"home-nav-bar",children:[n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("home"):r&&r(),children:[n.jsx(Gt,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabHome||"Home"})]}),n.jsxs("button",{className:"nav-tab active",children:[n.jsx($t,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabBookings||"Bookings"})]}),n.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:()=>s?s("step1_photo"):r&&r(),"aria-label":"Camera Scan",children:[n.jsx(_t,{size:26,color:"#FFFFFF"}),n.jsx("span",{className:"fab-label",children:e.tabCamera||"Camera"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("todays_prices"):r&&r(),children:[n.jsx(el,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabRates||"Rates"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("profile"):r&&r(),children:[n.jsx(bt,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabProfile||"Profile"})]})]})]})}function km(){const[e,t]=S.useState("splash"),[s,r]=S.useState("splash"),[a,i]=S.useState("en"),[l,o]=S.useState({name:"Rakesh",phone:"7015363695"}),[c,u]=S.useState({totalEarned:1240,lotsCompleted:4,kgRecycled:18.3}),[g,h]=S.useState([{id:"tx_1",lotNumber:"Lot #A7F2K9",title:"PCB / Circuit Board",category:"E-Waste",date:"3 Sep 2026",weight:"2.5 kg",weightNum:2.5,rate:"₹125/kg",amount:312,status:"Completed",statusType:"completed",statusCode:"completed",image:"/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/pcb_thumbnail.png",buyer:"GreenCycle Recycling",settlementMode:"UPI (Google Pay)",notes:"Inspected Grade A circuit boards with full copper recovery trace."},{id:"tx_2",lotNumber:"Lot #B3D9L1",title:"Cables & Wires",category:"Metals",date:"1 Sep 2026",weight:"4.0 kg",weightNum:4,rate:"₹70/kg",amount:280,status:"Handed Over",statusType:"active",statusCode:"handed_over",image:"/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/cables_thumbnail.png",buyer:"EcoScrap Solutions",settlementMode:"Cash Settlement",notes:"Driver picked up from Rohini Sector 7. Awaiting final recycler depot weigh-in."},{id:"tx_3",lotNumber:"Lot #C6H4P0",title:"Car Battery",category:"Batteries",date:"29 Aug 2026",weight:"8.2 kg",weightNum:8.2,rate:"₹62/kg",amount:510,status:"Listed",statusType:"active",statusCode:"listed",image:"/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/battery_thumbnail.png",buyer:"Awaiting Buyer Match",settlementMode:"Direct Settlement",notes:"Listed on buyer exchange with verified dry-cell certificate."},{id:"tx_4",lotNumber:"Lot #E9V2M8",title:"LCD Display",category:"E-Waste",date:"24 Aug 2026",weight:"3.1 kg",weightNum:3.1,rate:"₹61/kg",amount:190,status:"Disputed",statusType:"disputed",statusCode:"disputed",image:"/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/lcd_thumbnail.png",buyer:"TechRecycle Delhi",settlementMode:"Review Pending",notes:"Minor tare weight variation recorded at hub scale (-0.4 kg). Dispute under review."}]),[m,v]=S.useState({photoUrl:"/assets/Kabadiwala_Connect_Step1_TakePhoto_UI_Asset_Pack/01_camera_illustration/scrap_photo_reference.jpg",categoryId:"pcb",categoryName:"PCB (Circuit Board)",weight:2.5,estimatedTotal:312,ratePerKg:125,streetBonus:18,buyer:{id:"buyer_1",name:"GreenCycle Recycling",rate:128}}),y=ho[a]||ho.en,x=()=>t("language"),w=()=>{t(s==="profile"?"profile":"auth")},p=C=>{o(R=>({...R,...C})),t("location")},d=()=>t("notification"),f=()=>t("home"),k=C=>{v(R=>({...R,...C})),t("step1_hazardous_battery_detected")},_=C=>{v(R=>({...R,...C})),C.categoryId==="car_battery"?t("safety_tips"):t("step3_weight")},j=C=>{v(R=>({...R,...C})),t("step4_value")},P=C=>{v(R=>({...R,...C})),t("step5_buyer")},B=C=>{v(R=>({...R,...C})),t("pickup_confirmation")},b=()=>{t("payment")},A=C=>{v(R=>({...R,...C})),t("receipt")},Z=C=>{C&&(h(R=>[C,...R]),u(R=>({totalEarned:R.totalEarned+(C.amount||0),lotsCompleted:R.lotsCompleted+1,kgRecycled:parseFloat((R.kgRecycled+(C.weightNum||0)).toFixed(1))}))),t("home")};return n.jsxs(Xh,{currentScreen:e,setCurrentScreen:t,currentLang:a,setLanguage:i,children:[e==="splash"&&n.jsx(Zh,{t:y,onNext:x}),e==="language"&&n.jsx(Jh,{t:y,currentLang:a,setLanguage:i,onNext:w,onBack:()=>t(s==="profile"?"profile":"splash")}),e==="auth"&&n.jsx(em,{t:y,onSkip:()=>t("location"),onAuthenticated:p,onBack:()=>t("language")}),e==="location"&&n.jsx(tm,{t:y,onNext:d,onBack:()=>t("auth")}),e==="notification"&&n.jsx(nm,{t:y,onNext:f,onBack:()=>t("location")}),e==="home"&&n.jsx(sm,{t:y,user:l,stats:c,currentLang:a,onNavigate:C=>t(C)}),e==="step1_photo"&&n.jsx(rm,{t:y,onNext:k,onBack:()=>t("home")}),e==="step1_hazardous_battery_detected"&&n.jsx(xm,{t:y,onNext:C=>{v(R=>({...R,...C})),t("step2_category")},onBack:()=>t("step1_photo")}),e==="step2_category"&&n.jsx(am,{t:y,photoUrl:m.photoUrl,initialCategory:m.categoryId,onNext:_,onBack:()=>t("step1_photo"),onRetake:()=>t("step1_photo")}),e==="step3_weight"&&n.jsx(im,{t:y,categoryData:m,initialWeight:m.weight,onNext:j,onBack:()=>t("step2_category"),onChangeCategory:()=>t("step2_category")}),e==="step4_value"&&n.jsx(lm,{t:y,currentLang:a,sellFlowData:m,onNext:P,onBack:()=>t("step3_weight")}),e==="step5_buyer"&&n.jsx(om,{t:y,sellFlowData:m,onNext:B,onBack:()=>t("step4_value")}),e==="pickup_confirmation"&&n.jsx(cm,{t:y,sellFlowData:m,onProceedToPayment:b,onBack:()=>t("step5_buyer"),onCancel:()=>t("home")}),e==="payment"&&n.jsx(dm,{t:y,sellFlowData:m,onNext:A,onBack:()=>t("pickup_confirmation")}),e==="receipt"&&n.jsx(ym,{t:y,sellFlowData:m,onDone:Z,onBack:()=>t("payment")}),e==="book_pickup"&&n.jsx(jm,{t:y,currentLocation:"Rohini, Delhi",onNavigateTab:C=>{C==="home"&&t("home"),C==="step1_photo"&&t("step1_photo"),C==="todays_prices"&&t("todays_prices"),C==="history"&&t("history"),C==="my_earnings"&&t("my_earnings"),C==="profile"&&t("profile")},onBack:()=>t("home")}),e==="todays_prices"&&n.jsx(um,{t:y,currentLang:a,currentLocation:"Rohini, Delhi",onBack:()=>t("home"),onSelectCategory:C=>{v(R=>({...R,categoryId:C})),t("step1_photo")},onNavigateTab:C=>{C==="home"&&t("home"),C==="step1_photo"&&t("step1_photo"),(C==="history"||C==="bookings"||C==="book_pickup")&&t("book_pickup"),C==="my_earnings"&&t("my_earnings"),C==="profile"&&t("profile")}}),e==="my_earnings"&&n.jsx(pm,{t:y,currentLang:a,transactionsList:g,onBack:()=>t("home"),onNavigateTab:C=>{C==="home"&&t("home"),C==="step1_photo"&&t("step1_photo"),C==="todays_prices"&&t("todays_prices"),(C==="history"||C==="bookings"||C==="book_pickup")&&t("book_pickup"),C==="profile"&&t("profile")}}),e==="history"&&n.jsx(hm,{t:y,lots:g,onBack:()=>t("home"),onNavigateTab:C=>{C==="home"&&t("home"),C==="step1_photo"&&t("step1_photo"),C==="todays_prices"&&t("todays_prices"),C==="my_earnings"&&t("my_earnings"),C==="profile"&&t("profile")}}),e==="sync_status"&&n.jsx(mm,{t:y,onBack:()=>t("home"),onNavigateTab:C=>{C==="home"&&t("home"),C==="step1_photo"&&t("step1_photo"),C==="todays_prices"&&t("todays_prices"),(C==="history"||C==="bookings"||C==="book_pickup")&&t("book_pickup"),C==="my_earnings"&&t("my_earnings"),C==="profile"&&t("profile")}}),e==="profile"&&n.jsx(vm,{t:y,user:l,stats:c,onUpdateUser:C=>o(R=>({...R,...C})),onNavigateTab:C=>{C==="home"&&t("home"),C==="step1_photo"&&t("step1_photo"),C==="todays_prices"&&t("todays_prices"),(C==="history"||C==="bookings"||C==="book_pickup")&&t("book_pickup"),C==="my_earnings"&&t("my_earnings"),C==="sync_status"&&t("sync_status"),C==="safety_tips"&&t("safety_tips"),C==="language"&&(r("profile"),t("language"))},onBack:()=>t("home")}),e==="safety_tips"&&n.jsx(fm,{t:y,currentLang:a,onClose:()=>t("step2_category"),onProceed:()=>t("step3_weight"),onBack:()=>t("step2_category")})]})}da.createRoot(document.getElementById("root")).render(n.jsx(Zd.StrictMode,{children:n.jsx(km,{})}));
