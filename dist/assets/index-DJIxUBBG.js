(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();function Ad(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fo={exports:{}},gr={},go={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cs=Symbol.for("react.element"),Fd=Symbol.for("react.portal"),Dd=Symbol.for("react.fragment"),Ld=Symbol.for("react.strict_mode"),Md=Symbol.for("react.profiler"),Rd=Symbol.for("react.provider"),Id=Symbol.for("react.context"),Wd=Symbol.for("react.forward_ref"),Od=Symbol.for("react.suspense"),Hd=Symbol.for("react.memo"),Ud=Symbol.for("react.lazy"),tl=Symbol.iterator;function Vd(e){return e===null||typeof e!="object"?null:(e=tl&&e[tl]||e["@@iterator"],typeof e=="function"?e:null)}var xo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yo=Object.assign,vo={};function vn(e,t,s){this.props=e,this.context=t,this.refs=vo,this.updater=s||xo}vn.prototype.isReactComponent={};vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function jo(){}jo.prototype=vn.prototype;function si(e,t,s){this.props=e,this.context=t,this.refs=vo,this.updater=s||xo}var ri=si.prototype=new jo;ri.constructor=si;yo(ri,vn.prototype);ri.isPureReactComponent=!0;var nl=Array.isArray,ko=Object.prototype.hasOwnProperty,ai={current:null},bo={key:!0,ref:!0,__self:!0,__source:!0};function wo(e,t,s){var r,a={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)ko.call(t,r)&&!bo.hasOwnProperty(r)&&(a[r]=t[r]);var o=arguments.length-2;if(o===1)a.children=s;else if(1<o){for(var c=Array(o),d=0;d<o;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)a[r]===void 0&&(a[r]=o[r]);return{$$typeof:cs,type:e,key:i,ref:l,props:a,_owner:ai.current}}function $d(e,t){return{$$typeof:cs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ii(e){return typeof e=="object"&&e!==null&&e.$$typeof===cs}function Kd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(s){return t[s]})}var sl=/\/+/g;function Mr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kd(""+e.key):t.toString(36)}function Fs(e,t,s,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case cs:case Fd:l=!0}}if(l)return l=e,a=a(l),e=r===""?"."+Mr(l,0):r,nl(a)?(s="",e!=null&&(s=e.replace(sl,"$&/")+"/"),Fs(a,t,s,"",function(d){return d})):a!=null&&(ii(a)&&(a=$d(a,s+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(sl,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=r===""?".":r+":",nl(e))for(var o=0;o<e.length;o++){i=e[o];var c=r+Mr(i,o);l+=Fs(i,t,s,c,a)}else if(c=Vd(e),typeof c=="function")for(e=c.call(e),o=0;!(i=e.next()).done;)i=i.value,c=r+Mr(i,o++),l+=Fs(i,t,s,c,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function xs(e,t,s){if(e==null)return e;var r=[],a=0;return Fs(e,r,"","",function(i){return t.call(s,i,a++)}),r}function Gd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(s){(e._status===0||e._status===-1)&&(e._status=1,e._result=s)},function(s){(e._status===0||e._status===-1)&&(e._status=2,e._result=s)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Ds={transition:null},qd={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Ds,ReactCurrentOwner:ai};function No(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:xs,forEach:function(e,t,s){xs(e,function(){t.apply(this,arguments)},s)},count:function(e){var t=0;return xs(e,function(){t++}),t},toArray:function(e){return xs(e,function(t){return t})||[]},only:function(e){if(!ii(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=vn;D.Fragment=Dd;D.Profiler=Md;D.PureComponent=si;D.StrictMode=Ld;D.Suspense=Od;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qd;D.act=No;D.cloneElement=function(e,t,s){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=yo({},e.props),a=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ai.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)ko.call(t,c)&&!bo.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=s;else if(1<c){o=Array(c);for(var d=0;d<c;d++)o[d]=arguments[d+2];r.children=o}return{$$typeof:cs,type:e.type,key:a,ref:i,props:r,_owner:l}};D.createContext=function(e){return e={$$typeof:Id,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rd,_context:e},e.Consumer=e};D.createElement=wo;D.createFactory=function(e){var t=wo.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Wd,render:e}};D.isValidElement=ii;D.lazy=function(e){return{$$typeof:Ud,_payload:{_status:-1,_result:e},_init:Gd}};D.memo=function(e,t){return{$$typeof:Hd,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Ds.transition;Ds.transition={};try{e()}finally{Ds.transition=t}};D.unstable_act=No;D.useCallback=function(e,t){return me.current.useCallback(e,t)};D.useContext=function(e){return me.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return me.current.useDeferredValue(e)};D.useEffect=function(e,t){return me.current.useEffect(e,t)};D.useId=function(){return me.current.useId()};D.useImperativeHandle=function(e,t,s){return me.current.useImperativeHandle(e,t,s)};D.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return me.current.useMemo(e,t)};D.useReducer=function(e,t,s){return me.current.useReducer(e,t,s)};D.useRef=function(e){return me.current.useRef(e)};D.useState=function(e){return me.current.useState(e)};D.useSyncExternalStore=function(e,t,s){return me.current.useSyncExternalStore(e,t,s)};D.useTransition=function(){return me.current.useTransition()};D.version="18.3.1";go.exports=D;var C=go.exports;const Qd=Ad(C);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd=C,Xd=Symbol.for("react.element"),Zd=Symbol.for("react.fragment"),Jd=Object.prototype.hasOwnProperty,eu=Yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tu={key:!0,ref:!0,__self:!0,__source:!0};function So(e,t,s){var r,a={},i=null,l=null;s!==void 0&&(i=""+s),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Jd.call(t,r)&&!tu.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Xd,type:e,key:i,ref:l,props:a,_owner:eu.current}}gr.Fragment=Zd;gr.jsx=So;gr.jsxs=So;fo.exports=gr;var n=fo.exports,ca={},Co={exports:{}},Ce={},_o={exports:{}},Po={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,A){var F=T.length;T.push(A);e:for(;0<F;){var K=F-1>>>1,ee=T[K];if(0<a(ee,A))T[K]=A,T[F]=ee,F=K;else break e}}function s(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var A=T[0],F=T.pop();if(F!==A){T[0]=F;e:for(var K=0,ee=T.length,fs=ee>>>1;K<fs;){var _t=2*(K+1)-1,Lr=T[_t],Pt=_t+1,gs=T[Pt];if(0>a(Lr,F))Pt<ee&&0>a(gs,Lr)?(T[K]=gs,T[Pt]=F,K=Pt):(T[K]=Lr,T[_t]=F,K=_t);else if(Pt<ee&&0>a(gs,F))T[K]=gs,T[Pt]=F,K=Pt;else break e}}return A}function a(T,A){var F=T.sortIndex-A.sortIndex;return F!==0?F:T.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var c=[],d=[],m=1,h=null,p=3,j=!1,x=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var A=s(d);A!==null;){if(A.callback===null)r(d);else if(A.startTime<=T)r(d),A.sortIndex=A.expirationTime,t(c,A);else break;A=s(d)}}function b(T){if(y=!1,g(T),!x)if(s(c)!==null)x=!0,Fr(k);else{var A=s(d);A!==null&&Dr(b,A.startTime-T)}}function k(T,A){x=!1,y&&(y=!1,f(E),E=-1),j=!0;var F=p;try{for(g(A),h=s(c);h!==null&&(!(h.expirationTime>A)||T&&!J());){var K=h.callback;if(typeof K=="function"){h.callback=null,p=h.priorityLevel;var ee=K(h.expirationTime<=A);A=e.unstable_now(),typeof ee=="function"?h.callback=ee:h===s(c)&&r(c),g(A)}else r(c);h=s(c)}if(h!==null)var fs=!0;else{var _t=s(d);_t!==null&&Dr(b,_t.startTime-A),fs=!1}return fs}finally{h=null,p=F,j=!1}}var v=!1,S=null,E=-1,w=5,B=-1;function J(){return!(e.unstable_now()-B<w)}function Ct(){if(S!==null){var T=e.unstable_now();B=T;var A=!0;try{A=S(!0,T)}finally{A?wn():(v=!1,S=null)}}else v=!1}var wn;if(typeof u=="function")wn=function(){u(Ct)};else if(typeof MessageChannel<"u"){var el=new MessageChannel,Ed=el.port2;el.port1.onmessage=Ct,wn=function(){Ed.postMessage(null)}}else wn=function(){_(Ct,0)};function Fr(T){S=T,v||(v=!0,wn())}function Dr(T,A){E=_(function(){T(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){x||j||(x=!0,Fr(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return s(c)},e.unstable_next=function(T){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var F=p;p=A;try{return T()}finally{p=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,A){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var F=p;p=T;try{return A()}finally{p=F}},e.unstable_scheduleCallback=function(T,A,F){var K=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?K+F:K):F=K,T){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=F+ee,T={id:m++,callback:A,priorityLevel:T,startTime:F,expirationTime:ee,sortIndex:-1},F>K?(T.sortIndex=F,t(d,T),s(c)===null&&T===s(d)&&(y?(f(E),E=-1):y=!0,Dr(b,F-K))):(T.sortIndex=ee,t(c,T),x||j||(x=!0,Fr(k))),T},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(T){var A=p;return function(){var F=p;p=A;try{return T.apply(this,arguments)}finally{p=F}}}})(Po);_o.exports=Po;var nu=_o.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var su=C,Se=nu;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var To=new Set,$n={};function Ot(e,t){pn(e,t),pn(e+"Capture",t)}function pn(e,t){for($n[e]=t,e=0;e<t.length;e++)To.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),da=Object.prototype.hasOwnProperty,ru=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rl={},al={};function au(e){return da.call(al,e)?!0:da.call(rl,e)?!1:ru.test(e)?al[e]=!0:(rl[e]=!0,!1)}function iu(e,t,s,r){if(s!==null&&s.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function lu(e,t,s,r){if(t===null||typeof t>"u"||iu(e,t,s,r))return!0;if(r)return!1;if(s!==null)switch(s.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,s,r,a,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=s,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var li=/[\-:]([a-z])/g;function oi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(li,oi);ae[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(li,oi);ae[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(li,oi);ae[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ci(e,t,s,r){var a=ae.hasOwnProperty(t)?ae[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(lu(t,s,a,r)&&(s=null),r||a===null?au(t)&&(s===null?e.removeAttribute(t):e.setAttribute(t,""+s)):a.mustUseProperty?e[a.propertyName]=s===null?a.type===3?!1:"":s:(t=a.attributeName,r=a.attributeNamespace,s===null?e.removeAttribute(t):(a=a.type,s=a===3||a===4&&s===!0?"":""+s,r?e.setAttributeNS(r,t,s):e.setAttribute(t,s))))}var tt=su.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ys=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),qt=Symbol.for("react.fragment"),di=Symbol.for("react.strict_mode"),ua=Symbol.for("react.profiler"),Bo=Symbol.for("react.provider"),zo=Symbol.for("react.context"),ui=Symbol.for("react.forward_ref"),pa=Symbol.for("react.suspense"),ha=Symbol.for("react.suspense_list"),pi=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),Eo=Symbol.for("react.offscreen"),il=Symbol.iterator;function Nn(e){return e===null||typeof e!="object"?null:(e=il&&e[il]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Rr;function En(e){if(Rr===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);Rr=t&&t[1]||""}return`
`+Rr+e}var Ir=!1;function Wr(e,t){if(!e||Ir)return"";Ir=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),i=r.stack.split(`
`),l=a.length-1,o=i.length-1;1<=l&&0<=o&&a[l]!==i[o];)o--;for(;1<=l&&0<=o;l--,o--)if(a[l]!==i[o]){if(l!==1||o!==1)do if(l--,o--,0>o||a[l]!==i[o]){var c=`
`+a[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=o);break}}}finally{Ir=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?En(e):""}function ou(e){switch(e.tag){case 5:return En(e.type);case 16:return En("Lazy");case 13:return En("Suspense");case 19:return En("SuspenseList");case 0:case 2:case 15:return e=Wr(e.type,!1),e;case 11:return e=Wr(e.type.render,!1),e;case 1:return e=Wr(e.type,!0),e;default:return""}}function ma(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qt:return"Fragment";case Gt:return"Portal";case ua:return"Profiler";case di:return"StrictMode";case pa:return"Suspense";case ha:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zo:return(e.displayName||"Context")+".Consumer";case Bo:return(e._context.displayName||"Context")+".Provider";case ui:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pi:return t=e.displayName||null,t!==null?t:ma(e.type)||"Memo";case st:t=e._payload,e=e._init;try{return ma(e(t))}catch{}}return null}function cu(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ma(t);case 8:return t===di?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ao(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function du(e){var t=Ao(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var a=s.get,i=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vs(e){e._valueTracker||(e._valueTracker=du(e))}function Fo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),r="";return e&&(r=Ao(e)?e.checked?"true":"false":e.value),e=r,e!==s?(t.setValue(e),!0):!1}function Ks(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fa(e,t){var s=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function ll(e,t){var s=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;s=yt(t.value!=null?t.value:s),e._wrapperState={initialChecked:r,initialValue:s,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Do(e,t){t=t.checked,t!=null&&ci(e,"checked",t,!1)}function ga(e,t){Do(e,t);var s=yt(t.value),r=t.type;if(s!=null)r==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xa(e,t.type,s):t.hasOwnProperty("defaultValue")&&xa(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ol(e,t,s){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,s||t===e.value||(e.value=t),e.defaultValue=t}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function xa(e,t,s){(t!=="number"||Ks(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var An=Array.isArray;function an(e,t,s,r){if(e=e.options,t){t={};for(var a=0;a<s.length;a++)t["$"+s[a]]=!0;for(s=0;s<e.length;s++)a=t.hasOwnProperty("$"+e[s].value),e[s].selected!==a&&(e[s].selected=a),a&&r&&(e[s].defaultSelected=!0)}else{for(s=""+yt(s),t=null,a=0;a<e.length;a++){if(e[a].value===s){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ya(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cl(e,t){var s=t.value;if(s==null){if(s=t.children,t=t.defaultValue,s!=null){if(t!=null)throw Error(N(92));if(An(s)){if(1<s.length)throw Error(N(93));s=s[0]}t=s}t==null&&(t=""),s=t}e._wrapperState={initialValue:yt(s)}}function Lo(e,t){var s=yt(t.value),r=yt(t.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),t.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),r!=null&&(e.defaultValue=""+r)}function dl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function va(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var js,Ro=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,s,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,s,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(js=js||document.createElement("div"),js.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=js.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kn(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uu=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){uu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function Io(e,t,s){return t==null||typeof t=="boolean"||t===""?"":s||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function Wo(e,t){e=e.style;for(var s in t)if(t.hasOwnProperty(s)){var r=s.indexOf("--")===0,a=Io(s,t[s],r);s==="float"&&(s="cssFloat"),r?e.setProperty(s,a):e[s]=a}}var pu=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ja(e,t){if(t){if(pu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function ka(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ba=null;function hi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wa=null,ln=null,on=null;function ul(e){if(e=ps(e)){if(typeof wa!="function")throw Error(N(280));var t=e.stateNode;t&&(t=kr(t),wa(e.stateNode,e.type,t))}}function Oo(e){ln?on?on.push(e):on=[e]:ln=e}function Ho(){if(ln){var e=ln,t=on;if(on=ln=null,ul(e),t)for(e=0;e<t.length;e++)ul(t[e])}}function Uo(e,t){return e(t)}function Vo(){}var Or=!1;function $o(e,t,s){if(Or)return e(t,s);Or=!0;try{return Uo(e,t,s)}finally{Or=!1,(ln!==null||on!==null)&&(Vo(),Ho())}}function Gn(e,t){var s=e.stateNode;if(s===null)return null;var r=kr(s);if(r===null)return null;s=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(N(231,t,typeof s));return s}var Na=!1;if(Xe)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){Na=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{Na=!1}function hu(e,t,s,r,a,i,l,o,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(s,d)}catch(m){this.onError(m)}}var Mn=!1,Gs=null,qs=!1,Sa=null,mu={onError:function(e){Mn=!0,Gs=e}};function fu(e,t,s,r,a,i,l,o,c){Mn=!1,Gs=null,hu.apply(mu,arguments)}function gu(e,t,s,r,a,i,l,o,c){if(fu.apply(this,arguments),Mn){if(Mn){var d=Gs;Mn=!1,Gs=null}else throw Error(N(198));qs||(qs=!0,Sa=d)}}function Ht(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function Ko(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pl(e){if(Ht(e)!==e)throw Error(N(188))}function xu(e){var t=e.alternate;if(!t){if(t=Ht(e),t===null)throw Error(N(188));return t!==e?null:e}for(var s=e,r=t;;){var a=s.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){s=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===s)return pl(a),e;if(i===r)return pl(a),t;i=i.sibling}throw Error(N(188))}if(s.return!==r.return)s=a,r=i;else{for(var l=!1,o=a.child;o;){if(o===s){l=!0,s=a,r=i;break}if(o===r){l=!0,r=a,s=i;break}o=o.sibling}if(!l){for(o=i.child;o;){if(o===s){l=!0,s=i,r=a;break}if(o===r){l=!0,r=i,s=a;break}o=o.sibling}if(!l)throw Error(N(189))}}if(s.alternate!==r)throw Error(N(190))}if(s.tag!==3)throw Error(N(188));return s.stateNode.current===s?e:t}function Go(e){return e=xu(e),e!==null?qo(e):null}function qo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qo(e);if(t!==null)return t;e=e.sibling}return null}var Qo=Se.unstable_scheduleCallback,hl=Se.unstable_cancelCallback,yu=Se.unstable_shouldYield,vu=Se.unstable_requestPaint,G=Se.unstable_now,ju=Se.unstable_getCurrentPriorityLevel,mi=Se.unstable_ImmediatePriority,Yo=Se.unstable_UserBlockingPriority,Qs=Se.unstable_NormalPriority,ku=Se.unstable_LowPriority,Xo=Se.unstable_IdlePriority,xr=null,Ve=null;function bu(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(xr,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:Su,wu=Math.log,Nu=Math.LN2;function Su(e){return e>>>=0,e===0?32:31-(wu(e)/Nu|0)|0}var ks=64,bs=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ys(e,t){var s=e.pendingLanes;if(s===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,l=s&268435455;if(l!==0){var o=l&~a;o!==0?r=Fn(o):(i&=l,i!==0&&(r=Fn(i)))}else l=s&~a,l!==0?r=Fn(l):i!==0&&(r=Fn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=s&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)s=31-Re(t),a=1<<s,r|=e[s],t&=~a;return r}function Cu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _u(e,t){for(var s=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Re(i),o=1<<l,c=a[l];c===-1?(!(o&s)||o&r)&&(a[l]=Cu(o,t)):c<=t&&(e.expiredLanes|=o),i&=~o}}function Ca(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zo(){var e=ks;return ks<<=1,!(ks&4194240)&&(ks=64),e}function Hr(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function ds(e,t,s){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Re(t),e[t]=s}function Pu(e,t){var s=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<s;){var a=31-Re(s),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,s&=~i}}function fi(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var r=31-Re(s),a=1<<r;a&t|e[r]&t&&(e[r]|=t),s&=~a}}var M=0;function Jo(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ec,gi,tc,nc,sc,_a=!1,ws=[],ct=null,dt=null,ut=null,qn=new Map,Qn=new Map,at=[],Tu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ml(e,t){switch(e){case"focusin":case"focusout":ct=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(t.pointerId)}}function Cn(e,t,s,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:s,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=ps(t),t!==null&&gi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Bu(e,t,s,r,a){switch(t){case"focusin":return ct=Cn(ct,e,t,s,r,a),!0;case"dragenter":return dt=Cn(dt,e,t,s,r,a),!0;case"mouseover":return ut=Cn(ut,e,t,s,r,a),!0;case"pointerover":var i=a.pointerId;return qn.set(i,Cn(qn.get(i)||null,e,t,s,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Qn.set(i,Cn(Qn.get(i)||null,e,t,s,r,a)),!0}return!1}function rc(e){var t=zt(e.target);if(t!==null){var s=Ht(t);if(s!==null){if(t=s.tag,t===13){if(t=Ko(s),t!==null){e.blockedOn=t,sc(e.priority,function(){tc(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ls(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=Pa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var r=new s.constructor(s.type,s);ba=r,s.target.dispatchEvent(r),ba=null}else return t=ps(s),t!==null&&gi(t),e.blockedOn=s,!1;t.shift()}return!0}function fl(e,t,s){Ls(e)&&s.delete(t)}function zu(){_a=!1,ct!==null&&Ls(ct)&&(ct=null),dt!==null&&Ls(dt)&&(dt=null),ut!==null&&Ls(ut)&&(ut=null),qn.forEach(fl),Qn.forEach(fl)}function _n(e,t){e.blockedOn===t&&(e.blockedOn=null,_a||(_a=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,zu)))}function Yn(e){function t(a){return _n(a,e)}if(0<ws.length){_n(ws[0],e);for(var s=1;s<ws.length;s++){var r=ws[s];r.blockedOn===e&&(r.blockedOn=null)}}for(ct!==null&&_n(ct,e),dt!==null&&_n(dt,e),ut!==null&&_n(ut,e),qn.forEach(t),Qn.forEach(t),s=0;s<at.length;s++)r=at[s],r.blockedOn===e&&(r.blockedOn=null);for(;0<at.length&&(s=at[0],s.blockedOn===null);)rc(s),s.blockedOn===null&&at.shift()}var cn=tt.ReactCurrentBatchConfig,Xs=!0;function Eu(e,t,s,r){var a=M,i=cn.transition;cn.transition=null;try{M=1,xi(e,t,s,r)}finally{M=a,cn.transition=i}}function Au(e,t,s,r){var a=M,i=cn.transition;cn.transition=null;try{M=4,xi(e,t,s,r)}finally{M=a,cn.transition=i}}function xi(e,t,s,r){if(Xs){var a=Pa(e,t,s,r);if(a===null)Zr(e,t,r,Zs,s),ml(e,r);else if(Bu(a,e,t,s,r))r.stopPropagation();else if(ml(e,r),t&4&&-1<Tu.indexOf(e)){for(;a!==null;){var i=ps(a);if(i!==null&&ec(i),i=Pa(e,t,s,r),i===null&&Zr(e,t,r,Zs,s),i===a)break;a=i}a!==null&&r.stopPropagation()}else Zr(e,t,r,null,s)}}var Zs=null;function Pa(e,t,s,r){if(Zs=null,e=hi(r),e=zt(e),e!==null)if(t=Ht(e),t===null)e=null;else if(s=t.tag,s===13){if(e=Ko(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zs=e,null}function ac(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ju()){case mi:return 1;case Yo:return 4;case Qs:case ku:return 16;case Xo:return 536870912;default:return 16}default:return 16}}var lt=null,yi=null,Ms=null;function ic(){if(Ms)return Ms;var e,t=yi,s=t.length,r,a="value"in lt?lt.value:lt.textContent,i=a.length;for(e=0;e<s&&t[e]===a[e];e++);var l=s-e;for(r=1;r<=l&&t[s-r]===a[i-r];r++);return Ms=a.slice(e,1<r?1-r:void 0)}function Rs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ns(){return!0}function gl(){return!1}function _e(e){function t(s,r,a,i,l){this._reactName=s,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(s=e[o],this[o]=s?s(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ns:gl,this.isPropagationStopped=gl,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ns)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ns)},persist:function(){},isPersistent:Ns}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vi=_e(jn),us=V({},jn,{view:0,detail:0}),Fu=_e(us),Ur,Vr,Pn,yr=V({},us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ji,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Ur=e.screenX-Pn.screenX,Vr=e.screenY-Pn.screenY):Vr=Ur=0,Pn=e),Ur)},movementY:function(e){return"movementY"in e?e.movementY:Vr}}),xl=_e(yr),Du=V({},yr,{dataTransfer:0}),Lu=_e(Du),Mu=V({},us,{relatedTarget:0}),$r=_e(Mu),Ru=V({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Iu=_e(Ru),Wu=V({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ou=_e(Wu),Hu=V({},jn,{data:0}),yl=_e(Hu),Uu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$u={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ku(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$u[e])?!!t[e]:!1}function ji(){return Ku}var Gu=V({},us,{key:function(e){if(e.key){var t=Uu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ji,charCode:function(e){return e.type==="keypress"?Rs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qu=_e(Gu),Qu=V({},yr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vl=_e(Qu),Yu=V({},us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ji}),Xu=_e(Yu),Zu=V({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ju=_e(Zu),ep=V({},yr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tp=_e(ep),np=[9,13,27,32],ki=Xe&&"CompositionEvent"in window,Rn=null;Xe&&"documentMode"in document&&(Rn=document.documentMode);var sp=Xe&&"TextEvent"in window&&!Rn,lc=Xe&&(!ki||Rn&&8<Rn&&11>=Rn),jl=" ",kl=!1;function oc(e,t){switch(e){case"keyup":return np.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function rp(e,t){switch(e){case"compositionend":return cc(t);case"keypress":return t.which!==32?null:(kl=!0,jl);case"textInput":return e=t.data,e===jl&&kl?null:e;default:return null}}function ap(e,t){if(Qt)return e==="compositionend"||!ki&&oc(e,t)?(e=ic(),Ms=yi=lt=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lc&&t.locale!=="ko"?null:t.data;default:return null}}var ip={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ip[e.type]:t==="textarea"}function dc(e,t,s,r){Oo(r),t=Js(t,"onChange"),0<t.length&&(s=new vi("onChange","change",null,s,r),e.push({event:s,listeners:t}))}var In=null,Xn=null;function lp(e){kc(e,0)}function vr(e){var t=Zt(e);if(Fo(t))return e}function op(e,t){if(e==="change")return t}var uc=!1;if(Xe){var Kr;if(Xe){var Gr="oninput"in document;if(!Gr){var wl=document.createElement("div");wl.setAttribute("oninput","return;"),Gr=typeof wl.oninput=="function"}Kr=Gr}else Kr=!1;uc=Kr&&(!document.documentMode||9<document.documentMode)}function Nl(){In&&(In.detachEvent("onpropertychange",pc),Xn=In=null)}function pc(e){if(e.propertyName==="value"&&vr(Xn)){var t=[];dc(t,Xn,e,hi(e)),$o(lp,t)}}function cp(e,t,s){e==="focusin"?(Nl(),In=t,Xn=s,In.attachEvent("onpropertychange",pc)):e==="focusout"&&Nl()}function dp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vr(Xn)}function up(e,t){if(e==="click")return vr(t)}function pp(e,t){if(e==="input"||e==="change")return vr(t)}function hp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:hp;function Zn(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),r=Object.keys(t);if(s.length!==r.length)return!1;for(r=0;r<s.length;r++){var a=s[r];if(!da.call(t,a)||!We(e[a],t[a]))return!1}return!0}function Sl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cl(e,t){var s=Sl(e);e=0;for(var r;s;){if(s.nodeType===3){if(r=e+s.textContent.length,e<=t&&r>=t)return{node:s,offset:t-e};e=r}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Sl(s)}}function hc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function mc(){for(var e=window,t=Ks();t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=Ks(e.document)}return t}function bi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function mp(e){var t=mc(),s=e.focusedElem,r=e.selectionRange;if(t!==s&&s&&s.ownerDocument&&hc(s.ownerDocument.documentElement,s)){if(r!==null&&bi(s)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in s)s.selectionStart=t,s.selectionEnd=Math.min(e,s.value.length);else if(e=(t=s.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=s.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Cl(s,i);var l=Cl(s,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=s;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<t.length;s++)e=t[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fp=Xe&&"documentMode"in document&&11>=document.documentMode,Yt=null,Ta=null,Wn=null,Ba=!1;function _l(e,t,s){var r=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ba||Yt==null||Yt!==Ks(r)||(r=Yt,"selectionStart"in r&&bi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wn&&Zn(Wn,r)||(Wn=r,r=Js(Ta,"onSelect"),0<r.length&&(t=new vi("onSelect","select",null,t,s),e.push({event:t,listeners:r}),t.target=Yt)))}function Ss(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var Xt={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionend:Ss("Transition","TransitionEnd")},qr={},fc={};Xe&&(fc=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function jr(e){if(qr[e])return qr[e];if(!Xt[e])return e;var t=Xt[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in fc)return qr[e]=t[s];return e}var gc=jr("animationend"),xc=jr("animationiteration"),yc=jr("animationstart"),vc=jr("transitionend"),jc=new Map,Pl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kt(e,t){jc.set(e,t),Ot(t,[e])}for(var Qr=0;Qr<Pl.length;Qr++){var Yr=Pl[Qr],gp=Yr.toLowerCase(),xp=Yr[0].toUpperCase()+Yr.slice(1);kt(gp,"on"+xp)}kt(gc,"onAnimationEnd");kt(xc,"onAnimationIteration");kt(yc,"onAnimationStart");kt("dblclick","onDoubleClick");kt("focusin","onFocus");kt("focusout","onBlur");kt(vc,"onTransitionEnd");pn("onMouseEnter",["mouseout","mouseover"]);pn("onMouseLeave",["mouseout","mouseover"]);pn("onPointerEnter",["pointerout","pointerover"]);pn("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));function Tl(e,t,s){var r=e.type||"unknown-event";e.currentTarget=s,gu(r,t,void 0,e),e.currentTarget=null}function kc(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var r=e[s],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var o=r[l],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==i&&a.isPropagationStopped())break e;Tl(a,o,d),i=c}else for(l=0;l<r.length;l++){if(o=r[l],c=o.instance,d=o.currentTarget,o=o.listener,c!==i&&a.isPropagationStopped())break e;Tl(a,o,d),i=c}}}if(qs)throw e=Sa,qs=!1,Sa=null,e}function I(e,t){var s=t[Da];s===void 0&&(s=t[Da]=new Set);var r=e+"__bubble";s.has(r)||(bc(t,e,2,!1),s.add(r))}function Xr(e,t,s){var r=0;t&&(r|=4),bc(s,e,r,t)}var Cs="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[Cs]){e[Cs]=!0,To.forEach(function(s){s!=="selectionchange"&&(yp.has(s)||Xr(s,!1,e),Xr(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cs]||(t[Cs]=!0,Xr("selectionchange",!1,t))}}function bc(e,t,s,r){switch(ac(t)){case 1:var a=Eu;break;case 4:a=Au;break;default:a=xi}s=a.bind(null,t,s,e),a=void 0,!Na||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,s,{capture:!0,passive:a}):e.addEventListener(t,s,!0):a!==void 0?e.addEventListener(t,s,{passive:a}):e.addEventListener(t,s,!1)}function Zr(e,t,s,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var o=r.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;l=l.return}for(;o!==null;){if(l=zt(o),l===null)return;if(c=l.tag,c===5||c===6){r=i=l;continue e}o=o.parentNode}}r=r.return}$o(function(){var d=i,m=hi(s),h=[];e:{var p=jc.get(e);if(p!==void 0){var j=vi,x=e;switch(e){case"keypress":if(Rs(s)===0)break e;case"keydown":case"keyup":j=qu;break;case"focusin":x="focus",j=$r;break;case"focusout":x="blur",j=$r;break;case"beforeblur":case"afterblur":j=$r;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=xl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Lu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Xu;break;case gc:case xc:case yc:j=Iu;break;case vc:j=Ju;break;case"scroll":j=Fu;break;case"wheel":j=tp;break;case"copy":case"cut":case"paste":j=Ou;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=vl}var y=(t&4)!==0,_=!y&&e==="scroll",f=y?p!==null?p+"Capture":null:p;y=[];for(var u=d,g;u!==null;){g=u;var b=g.stateNode;if(g.tag===5&&b!==null&&(g=b,f!==null&&(b=Gn(u,f),b!=null&&y.push(es(u,b,g)))),_)break;u=u.return}0<y.length&&(p=new j(p,x,null,s,m),h.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",p&&s!==ba&&(x=s.relatedTarget||s.fromElement)&&(zt(x)||x[Ze]))break e;if((j||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,j?(x=s.relatedTarget||s.toElement,j=d,x=x?zt(x):null,x!==null&&(_=Ht(x),x!==_||x.tag!==5&&x.tag!==6)&&(x=null)):(j=null,x=d),j!==x)){if(y=xl,b="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=vl,b="onPointerLeave",f="onPointerEnter",u="pointer"),_=j==null?p:Zt(j),g=x==null?p:Zt(x),p=new y(b,u+"leave",j,s,m),p.target=_,p.relatedTarget=g,b=null,zt(m)===d&&(y=new y(f,u+"enter",x,s,m),y.target=g,y.relatedTarget=_,b=y),_=b,j&&x)t:{for(y=j,f=x,u=0,g=y;g;g=Kt(g))u++;for(g=0,b=f;b;b=Kt(b))g++;for(;0<u-g;)y=Kt(y),u--;for(;0<g-u;)f=Kt(f),g--;for(;u--;){if(y===f||f!==null&&y===f.alternate)break t;y=Kt(y),f=Kt(f)}y=null}else y=null;j!==null&&Bl(h,p,j,y,!1),x!==null&&_!==null&&Bl(h,_,x,y,!0)}}e:{if(p=d?Zt(d):window,j=p.nodeName&&p.nodeName.toLowerCase(),j==="select"||j==="input"&&p.type==="file")var k=op;else if(bl(p))if(uc)k=pp;else{k=dp;var v=cp}else(j=p.nodeName)&&j.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=up);if(k&&(k=k(e,d))){dc(h,k,s,m);break e}v&&v(e,p,d),e==="focusout"&&(v=p._wrapperState)&&v.controlled&&p.type==="number"&&xa(p,"number",p.value)}switch(v=d?Zt(d):window,e){case"focusin":(bl(v)||v.contentEditable==="true")&&(Yt=v,Ta=d,Wn=null);break;case"focusout":Wn=Ta=Yt=null;break;case"mousedown":Ba=!0;break;case"contextmenu":case"mouseup":case"dragend":Ba=!1,_l(h,s,m);break;case"selectionchange":if(fp)break;case"keydown":case"keyup":_l(h,s,m)}var S;if(ki)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Qt?oc(e,s)&&(E="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(E="onCompositionStart");E&&(lc&&s.locale!=="ko"&&(Qt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Qt&&(S=ic()):(lt=m,yi="value"in lt?lt.value:lt.textContent,Qt=!0)),v=Js(d,E),0<v.length&&(E=new yl(E,e,null,s,m),h.push({event:E,listeners:v}),S?E.data=S:(S=cc(s),S!==null&&(E.data=S)))),(S=sp?rp(e,s):ap(e,s))&&(d=Js(d,"onBeforeInput"),0<d.length&&(m=new yl("onBeforeInput","beforeinput",null,s,m),h.push({event:m,listeners:d}),m.data=S))}kc(h,t)})}function es(e,t,s){return{instance:e,listener:t,currentTarget:s}}function Js(e,t){for(var s=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Gn(e,s),i!=null&&r.unshift(es(e,i,a)),i=Gn(e,t),i!=null&&r.push(es(e,i,a))),e=e.return}return r}function Kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bl(e,t,s,r,a){for(var i=t._reactName,l=[];s!==null&&s!==r;){var o=s,c=o.alternate,d=o.stateNode;if(c!==null&&c===r)break;o.tag===5&&d!==null&&(o=d,a?(c=Gn(s,i),c!=null&&l.unshift(es(s,c,o))):a||(c=Gn(s,i),c!=null&&l.push(es(s,c,o)))),s=s.return}l.length!==0&&e.push({event:t,listeners:l})}var vp=/\r\n?/g,jp=/\u0000|\uFFFD/g;function zl(e){return(typeof e=="string"?e:""+e).replace(vp,`
`).replace(jp,"")}function _s(e,t,s){if(t=zl(t),zl(e)!==t&&s)throw Error(N(425))}function er(){}var za=null,Ea=null;function Aa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fa=typeof setTimeout=="function"?setTimeout:void 0,kp=typeof clearTimeout=="function"?clearTimeout:void 0,El=typeof Promise=="function"?Promise:void 0,bp=typeof queueMicrotask=="function"?queueMicrotask:typeof El<"u"?function(e){return El.resolve(null).then(e).catch(wp)}:Fa;function wp(e){setTimeout(function(){throw e})}function Jr(e,t){var s=t,r=0;do{var a=s.nextSibling;if(e.removeChild(s),a&&a.nodeType===8)if(s=a.data,s==="/$"){if(r===0){e.removeChild(a),Yn(t);return}r--}else s!=="$"&&s!=="$?"&&s!=="$!"||r++;s=a}while(s);Yn(t)}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Al(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(t===0)return e;t--}else s==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+kn,ts="__reactProps$"+kn,Ze="__reactContainer$"+kn,Da="__reactEvents$"+kn,Np="__reactListeners$"+kn,Sp="__reactHandles$"+kn;function zt(e){var t=e[Ue];if(t)return t;for(var s=e.parentNode;s;){if(t=s[Ze]||s[Ue]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=Al(e);e!==null;){if(s=e[Ue])return s;e=Al(e)}return t}e=s,s=e.parentNode}return null}function ps(e){return e=e[Ue]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function kr(e){return e[ts]||null}var La=[],Jt=-1;function bt(e){return{current:e}}function W(e){0>Jt||(e.current=La[Jt],La[Jt]=null,Jt--)}function R(e,t){Jt++,La[Jt]=e.current,e.current=t}var vt={},de=bt(vt),ve=bt(!1),Lt=vt;function hn(e,t){var s=e.type.contextTypes;if(!s)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in s)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function je(e){return e=e.childContextTypes,e!=null}function tr(){W(ve),W(de)}function Fl(e,t,s){if(de.current!==vt)throw Error(N(168));R(de,t),R(ve,s)}function wc(e,t,s){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return s;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(N(108,cu(e)||"Unknown",a));return V({},s,r)}function nr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,Lt=de.current,R(de,e),R(ve,ve.current),!0}function Dl(e,t,s){var r=e.stateNode;if(!r)throw Error(N(169));s?(e=wc(e,t,Lt),r.__reactInternalMemoizedMergedChildContext=e,W(ve),W(de),R(de,e)):W(ve),R(ve,s)}var Ge=null,br=!1,ea=!1;function Nc(e){Ge===null?Ge=[e]:Ge.push(e)}function Cp(e){br=!0,Nc(e)}function wt(){if(!ea&&Ge!==null){ea=!0;var e=0,t=M;try{var s=Ge;for(M=1;e<s.length;e++){var r=s[e];do r=r(!0);while(r!==null)}Ge=null,br=!1}catch(a){throw Ge!==null&&(Ge=Ge.slice(e+1)),Qo(mi,wt),a}finally{M=t,ea=!1}}return null}var en=[],tn=0,sr=null,rr=0,Pe=[],Te=0,Mt=null,qe=1,Qe="";function Tt(e,t){en[tn++]=rr,en[tn++]=sr,sr=e,rr=t}function Sc(e,t,s){Pe[Te++]=qe,Pe[Te++]=Qe,Pe[Te++]=Mt,Mt=e;var r=qe;e=Qe;var a=32-Re(r)-1;r&=~(1<<a),s+=1;var i=32-Re(t)+a;if(30<i){var l=a-a%5;i=(r&(1<<l)-1).toString(32),r>>=l,a-=l,qe=1<<32-Re(t)+a|s<<a|r,Qe=i+e}else qe=1<<i|s<<a|r,Qe=e}function wi(e){e.return!==null&&(Tt(e,1),Sc(e,1,0))}function Ni(e){for(;e===sr;)sr=en[--tn],en[tn]=null,rr=en[--tn],en[tn]=null;for(;e===Mt;)Mt=Pe[--Te],Pe[Te]=null,Qe=Pe[--Te],Pe[Te]=null,qe=Pe[--Te],Pe[Te]=null}var Ne=null,we=null,O=!1,Me=null;function Cc(e,t){var s=Be(5,null,null,0);s.elementType="DELETED",s.stateNode=t,s.return=e,t=e.deletions,t===null?(e.deletions=[s],e.flags|=16):t.push(s)}function Ll(e,t){switch(e.tag){case 5:var s=e.type;return t=t.nodeType!==1||s.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,we=pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(s=Mt!==null?{id:qe,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:s,retryLane:1073741824},s=Be(18,null,null,0),s.stateNode=t,s.return=e,e.child=s,Ne=e,we=null,!0):!1;default:return!1}}function Ma(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ra(e){if(O){var t=we;if(t){var s=t;if(!Ll(e,t)){if(Ma(e))throw Error(N(418));t=pt(s.nextSibling);var r=Ne;t&&Ll(e,t)?Cc(r,s):(e.flags=e.flags&-4097|2,O=!1,Ne=e)}}else{if(Ma(e))throw Error(N(418));e.flags=e.flags&-4097|2,O=!1,Ne=e}}}function Ml(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Ps(e){if(e!==Ne)return!1;if(!O)return Ml(e),O=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Aa(e.type,e.memoizedProps)),t&&(t=we)){if(Ma(e))throw _c(),Error(N(418));for(;t;)Cc(e,t),t=pt(t.nextSibling)}if(Ml(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(t===0){we=pt(e.nextSibling);break e}t--}else s!=="$"&&s!=="$!"&&s!=="$?"||t++}e=e.nextSibling}we=null}}else we=Ne?pt(e.stateNode.nextSibling):null;return!0}function _c(){for(var e=we;e;)e=pt(e.nextSibling)}function mn(){we=Ne=null,O=!1}function Si(e){Me===null?Me=[e]:Me.push(e)}var _p=tt.ReactCurrentBatchConfig;function Tn(e,t,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(N(309));var r=s.stateNode}if(!r)throw Error(N(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var o=a.refs;l===null?delete o[i]:o[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!s._owner)throw Error(N(290,e))}return e}function Ts(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Rl(e){var t=e._init;return t(e._payload)}function Pc(e){function t(f,u){if(e){var g=f.deletions;g===null?(f.deletions=[u],f.flags|=16):g.push(u)}}function s(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function a(f,u){return f=gt(f,u),f.index=0,f.sibling=null,f}function i(f,u,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<u?(f.flags|=2,u):g):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function o(f,u,g,b){return u===null||u.tag!==6?(u=la(g,f.mode,b),u.return=f,u):(u=a(u,g),u.return=f,u)}function c(f,u,g,b){var k=g.type;return k===qt?m(f,u,g.props.children,b,g.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===st&&Rl(k)===u.type)?(b=a(u,g.props),b.ref=Tn(f,u,g),b.return=f,b):(b=$s(g.type,g.key,g.props,null,f.mode,b),b.ref=Tn(f,u,g),b.return=f,b)}function d(f,u,g,b){return u===null||u.tag!==4||u.stateNode.containerInfo!==g.containerInfo||u.stateNode.implementation!==g.implementation?(u=oa(g,f.mode,b),u.return=f,u):(u=a(u,g.children||[]),u.return=f,u)}function m(f,u,g,b,k){return u===null||u.tag!==7?(u=Dt(g,f.mode,b,k),u.return=f,u):(u=a(u,g),u.return=f,u)}function h(f,u,g){if(typeof u=="string"&&u!==""||typeof u=="number")return u=la(""+u,f.mode,g),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ys:return g=$s(u.type,u.key,u.props,null,f.mode,g),g.ref=Tn(f,null,u),g.return=f,g;case Gt:return u=oa(u,f.mode,g),u.return=f,u;case st:var b=u._init;return h(f,b(u._payload),g)}if(An(u)||Nn(u))return u=Dt(u,f.mode,g,null),u.return=f,u;Ts(f,u)}return null}function p(f,u,g,b){var k=u!==null?u.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:o(f,u,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ys:return g.key===k?c(f,u,g,b):null;case Gt:return g.key===k?d(f,u,g,b):null;case st:return k=g._init,p(f,u,k(g._payload),b)}if(An(g)||Nn(g))return k!==null?null:m(f,u,g,b,null);Ts(f,g)}return null}function j(f,u,g,b,k){if(typeof b=="string"&&b!==""||typeof b=="number")return f=f.get(g)||null,o(u,f,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ys:return f=f.get(b.key===null?g:b.key)||null,c(u,f,b,k);case Gt:return f=f.get(b.key===null?g:b.key)||null,d(u,f,b,k);case st:var v=b._init;return j(f,u,g,v(b._payload),k)}if(An(b)||Nn(b))return f=f.get(g)||null,m(u,f,b,k,null);Ts(u,b)}return null}function x(f,u,g,b){for(var k=null,v=null,S=u,E=u=0,w=null;S!==null&&E<g.length;E++){S.index>E?(w=S,S=null):w=S.sibling;var B=p(f,S,g[E],b);if(B===null){S===null&&(S=w);break}e&&S&&B.alternate===null&&t(f,S),u=i(B,u,E),v===null?k=B:v.sibling=B,v=B,S=w}if(E===g.length)return s(f,S),O&&Tt(f,E),k;if(S===null){for(;E<g.length;E++)S=h(f,g[E],b),S!==null&&(u=i(S,u,E),v===null?k=S:v.sibling=S,v=S);return O&&Tt(f,E),k}for(S=r(f,S);E<g.length;E++)w=j(S,f,E,g[E],b),w!==null&&(e&&w.alternate!==null&&S.delete(w.key===null?E:w.key),u=i(w,u,E),v===null?k=w:v.sibling=w,v=w);return e&&S.forEach(function(J){return t(f,J)}),O&&Tt(f,E),k}function y(f,u,g,b){var k=Nn(g);if(typeof k!="function")throw Error(N(150));if(g=k.call(g),g==null)throw Error(N(151));for(var v=k=null,S=u,E=u=0,w=null,B=g.next();S!==null&&!B.done;E++,B=g.next()){S.index>E?(w=S,S=null):w=S.sibling;var J=p(f,S,B.value,b);if(J===null){S===null&&(S=w);break}e&&S&&J.alternate===null&&t(f,S),u=i(J,u,E),v===null?k=J:v.sibling=J,v=J,S=w}if(B.done)return s(f,S),O&&Tt(f,E),k;if(S===null){for(;!B.done;E++,B=g.next())B=h(f,B.value,b),B!==null&&(u=i(B,u,E),v===null?k=B:v.sibling=B,v=B);return O&&Tt(f,E),k}for(S=r(f,S);!B.done;E++,B=g.next())B=j(S,f,E,B.value,b),B!==null&&(e&&B.alternate!==null&&S.delete(B.key===null?E:B.key),u=i(B,u,E),v===null?k=B:v.sibling=B,v=B);return e&&S.forEach(function(Ct){return t(f,Ct)}),O&&Tt(f,E),k}function _(f,u,g,b){if(typeof g=="object"&&g!==null&&g.type===qt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ys:e:{for(var k=g.key,v=u;v!==null;){if(v.key===k){if(k=g.type,k===qt){if(v.tag===7){s(f,v.sibling),u=a(v,g.props.children),u.return=f,f=u;break e}}else if(v.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===st&&Rl(k)===v.type){s(f,v.sibling),u=a(v,g.props),u.ref=Tn(f,v,g),u.return=f,f=u;break e}s(f,v);break}else t(f,v);v=v.sibling}g.type===qt?(u=Dt(g.props.children,f.mode,b,g.key),u.return=f,f=u):(b=$s(g.type,g.key,g.props,null,f.mode,b),b.ref=Tn(f,u,g),b.return=f,f=b)}return l(f);case Gt:e:{for(v=g.key;u!==null;){if(u.key===v)if(u.tag===4&&u.stateNode.containerInfo===g.containerInfo&&u.stateNode.implementation===g.implementation){s(f,u.sibling),u=a(u,g.children||[]),u.return=f,f=u;break e}else{s(f,u);break}else t(f,u);u=u.sibling}u=oa(g,f.mode,b),u.return=f,f=u}return l(f);case st:return v=g._init,_(f,u,v(g._payload),b)}if(An(g))return x(f,u,g,b);if(Nn(g))return y(f,u,g,b);Ts(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,u!==null&&u.tag===6?(s(f,u.sibling),u=a(u,g),u.return=f,f=u):(s(f,u),u=la(g,f.mode,b),u.return=f,f=u),l(f)):s(f,u)}return _}var fn=Pc(!0),Tc=Pc(!1),ar=bt(null),ir=null,nn=null,Ci=null;function _i(){Ci=nn=ir=null}function Pi(e){var t=ar.current;W(ar),e._currentValue=t}function Ia(e,t,s){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===s)break;e=e.return}}function dn(e,t){ir=e,Ci=nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(Ci!==e)if(e={context:e,memoizedValue:t,next:null},nn===null){if(ir===null)throw Error(N(308));nn=e,ir.dependencies={lanes:0,firstContext:e}}else nn=nn.next=e;return t}var Et=null;function Ti(e){Et===null?Et=[e]:Et.push(e)}function Bc(e,t,s,r){var a=t.interleaved;return a===null?(s.next=s,Ti(t)):(s.next=a.next,a.next=s),t.interleaved=s,Je(e,r)}function Je(e,t){e.lanes|=t;var s=e.alternate;for(s!==null&&(s.lanes|=t),s=e,e=e.return;e!==null;)e.childLanes|=t,s=e.alternate,s!==null&&(s.childLanes|=t),s=e,e=e.return;return s.tag===3?s.stateNode:null}var rt=!1;function Bi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ht(e,t,s){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Je(e,s)}return a=r.interleaved,a===null?(t.next=t,Ti(r)):(t.next=a.next,a.next=t),r.interleaved=t,Je(e,s)}function Is(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,s|=r,t.lanes=s,fi(e,s)}}function Il(e,t){var s=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,s===r)){var a=null,i=null;if(s=s.firstBaseUpdate,s!==null){do{var l={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};i===null?a=i=l:i=i.next=l,s=s.next}while(s!==null);i===null?a=i=t:i=i.next=t}else a=i=t;s={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}function lr(e,t,s,r){var a=e.updateQueue;rt=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var c=o,d=c.next;c.next=null,l===null?i=d:l.next=d,l=c;var m=e.alternate;m!==null&&(m=m.updateQueue,o=m.lastBaseUpdate,o!==l&&(o===null?m.firstBaseUpdate=d:o.next=d,m.lastBaseUpdate=c))}if(i!==null){var h=a.baseState;l=0,m=d=c=null,o=i;do{var p=o.lane,j=o.eventTime;if((r&p)===p){m!==null&&(m=m.next={eventTime:j,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=e,y=o;switch(p=t,j=s,y.tag){case 1:if(x=y.payload,typeof x=="function"){h=x.call(j,h,p);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,p=typeof x=="function"?x.call(j,h,p):x,p==null)break e;h=V({},h,p);break e;case 2:rt=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=a.effects,p===null?a.effects=[o]:p.push(o))}else j={eventTime:j,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},m===null?(d=m=j,c=h):m=m.next=j,l|=p;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);if(m===null&&(c=h),a.baseState=c,a.firstBaseUpdate=d,a.lastBaseUpdate=m,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);It|=l,e.lanes=l,e.memoizedState=h}}function Wl(e,t,s){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=s,typeof a!="function")throw Error(N(191,a));a.call(r)}}}var hs={},$e=bt(hs),ns=bt(hs),ss=bt(hs);function At(e){if(e===hs)throw Error(N(174));return e}function zi(e,t){switch(R(ss,t),R(ns,e),R($e,hs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:va(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=va(t,e)}W($e),R($e,t)}function gn(){W($e),W(ns),W(ss)}function Ec(e){At(ss.current);var t=At($e.current),s=va(t,e.type);t!==s&&(R(ns,e),R($e,s))}function Ei(e){ns.current===e&&(W($e),W(ns))}var H=bt(0);function or(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ta=[];function Ai(){for(var e=0;e<ta.length;e++)ta[e]._workInProgressVersionPrimary=null;ta.length=0}var Ws=tt.ReactCurrentDispatcher,na=tt.ReactCurrentBatchConfig,Rt=0,U=null,Y=null,te=null,cr=!1,On=!1,rs=0,Pp=0;function le(){throw Error(N(321))}function Fi(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!We(e[s],t[s]))return!1;return!0}function Di(e,t,s,r,a,i){if(Rt=i,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ws.current=e===null||e.memoizedState===null?Ep:Ap,e=s(r,a),On){i=0;do{if(On=!1,rs=0,25<=i)throw Error(N(301));i+=1,te=Y=null,t.updateQueue=null,Ws.current=Fp,e=s(r,a)}while(On)}if(Ws.current=dr,t=Y!==null&&Y.next!==null,Rt=0,te=Y=U=null,cr=!1,t)throw Error(N(300));return e}function Li(){var e=rs!==0;return rs=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?U.memoizedState=te=e:te=te.next=e,te}function Ae(){if(Y===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=te===null?U.memoizedState:te.next;if(t!==null)te=t,Y=e;else{if(e===null)throw Error(N(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},te===null?U.memoizedState=te=e:te=te.next=e}return te}function as(e,t){return typeof t=="function"?t(e):t}function sa(e){var t=Ae(),s=t.queue;if(s===null)throw Error(N(311));s.lastRenderedReducer=e;var r=Y,a=r.baseQueue,i=s.pending;if(i!==null){if(a!==null){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,s.pending=null}if(a!==null){i=a.next,r=r.baseState;var o=l=null,c=null,d=i;do{var m=d.lane;if((Rt&m)===m)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(o=c=h,l=r):c=c.next=h,U.lanes|=m,It|=m}d=d.next}while(d!==null&&d!==i);c===null?l=r:c.next=o,We(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,s.lastRenderedState=r}if(e=s.interleaved,e!==null){a=e;do i=a.lane,U.lanes|=i,It|=i,a=a.next;while(a!==e)}else a===null&&(s.lanes=0);return[t.memoizedState,s.dispatch]}function ra(e){var t=Ae(),s=t.queue;if(s===null)throw Error(N(311));s.lastRenderedReducer=e;var r=s.dispatch,a=s.pending,i=t.memoizedState;if(a!==null){s.pending=null;var l=a=a.next;do i=e(i,l.action),l=l.next;while(l!==a);We(i,t.memoizedState)||(ye=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),s.lastRenderedState=i}return[i,r]}function Ac(){}function Fc(e,t){var s=U,r=Ae(),a=t(),i=!We(r.memoizedState,a);if(i&&(r.memoizedState=a,ye=!0),r=r.queue,Mi(Mc.bind(null,s,r,e),[e]),r.getSnapshot!==t||i||te!==null&&te.memoizedState.tag&1){if(s.flags|=2048,is(9,Lc.bind(null,s,r,a,t),void 0,null),ne===null)throw Error(N(349));Rt&30||Dc(s,t,a)}return a}function Dc(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function Lc(e,t,s,r){t.value=s,t.getSnapshot=r,Rc(t)&&Ic(e)}function Mc(e,t,s){return s(function(){Rc(t)&&Ic(e)})}function Rc(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!We(e,s)}catch{return!0}}function Ic(e){var t=Je(e,1);t!==null&&Ie(t,e,1,-1)}function Ol(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:e},t.queue=e,e=e.dispatch=zp.bind(null,U,e),[t.memoizedState,e]}function is(e,t,s,r){return e={tag:e,create:t,destroy:s,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(s=t.lastEffect,s===null?t.lastEffect=e.next=e:(r=s.next,s.next=e,e.next=r,t.lastEffect=e)),e}function Wc(){return Ae().memoizedState}function Os(e,t,s,r){var a=He();U.flags|=e,a.memoizedState=is(1|t,s,void 0,r===void 0?null:r)}function wr(e,t,s,r){var a=Ae();r=r===void 0?null:r;var i=void 0;if(Y!==null){var l=Y.memoizedState;if(i=l.destroy,r!==null&&Fi(r,l.deps)){a.memoizedState=is(t,s,i,r);return}}U.flags|=e,a.memoizedState=is(1|t,s,i,r)}function Hl(e,t){return Os(8390656,8,e,t)}function Mi(e,t){return wr(2048,8,e,t)}function Oc(e,t){return wr(4,2,e,t)}function Hc(e,t){return wr(4,4,e,t)}function Uc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vc(e,t,s){return s=s!=null?s.concat([e]):null,wr(4,4,Uc.bind(null,t,e),s)}function Ri(){}function $c(e,t){var s=Ae();t=t===void 0?null:t;var r=s.memoizedState;return r!==null&&t!==null&&Fi(t,r[1])?r[0]:(s.memoizedState=[e,t],e)}function Kc(e,t){var s=Ae();t=t===void 0?null:t;var r=s.memoizedState;return r!==null&&t!==null&&Fi(t,r[1])?r[0]:(e=e(),s.memoizedState=[e,t],e)}function Gc(e,t,s){return Rt&21?(We(s,t)||(s=Zo(),U.lanes|=s,It|=s,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=s)}function Tp(e,t){var s=M;M=s!==0&&4>s?s:4,e(!0);var r=na.transition;na.transition={};try{e(!1),t()}finally{M=s,na.transition=r}}function qc(){return Ae().memoizedState}function Bp(e,t,s){var r=ft(e);if(s={lane:r,action:s,hasEagerState:!1,eagerState:null,next:null},Qc(e))Yc(t,s);else if(s=Bc(e,t,s,r),s!==null){var a=he();Ie(s,e,r,a),Xc(s,t,r)}}function zp(e,t,s){var r=ft(e),a={lane:r,action:s,hasEagerState:!1,eagerState:null,next:null};if(Qc(e))Yc(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,o=i(l,s);if(a.hasEagerState=!0,a.eagerState=o,We(o,l)){var c=t.interleaved;c===null?(a.next=a,Ti(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}s=Bc(e,t,a,r),s!==null&&(a=he(),Ie(s,e,r,a),Xc(s,t,r))}}function Qc(e){var t=e.alternate;return e===U||t!==null&&t===U}function Yc(e,t){On=cr=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function Xc(e,t,s){if(s&4194240){var r=t.lanes;r&=e.pendingLanes,s|=r,t.lanes=s,fi(e,s)}}var dr={readContext:Ee,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},Ep={readContext:Ee,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Hl,useImperativeHandle:function(e,t,s){return s=s!=null?s.concat([e]):null,Os(4194308,4,Uc.bind(null,t,e),s)},useLayoutEffect:function(e,t){return Os(4194308,4,e,t)},useInsertionEffect:function(e,t){return Os(4,2,e,t)},useMemo:function(e,t){var s=He();return t=t===void 0?null:t,e=e(),s.memoizedState=[e,t],e},useReducer:function(e,t,s){var r=He();return t=s!==void 0?s(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Bp.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:Ol,useDebugValue:Ri,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Ol(!1),t=e[0];return e=Tp.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,s){var r=U,a=He();if(O){if(s===void 0)throw Error(N(407));s=s()}else{if(s=t(),ne===null)throw Error(N(349));Rt&30||Dc(r,t,s)}a.memoizedState=s;var i={value:s,getSnapshot:t};return a.queue=i,Hl(Mc.bind(null,r,i,e),[e]),r.flags|=2048,is(9,Lc.bind(null,r,i,s,t),void 0,null),s},useId:function(){var e=He(),t=ne.identifierPrefix;if(O){var s=Qe,r=qe;s=(r&~(1<<32-Re(r)-1)).toString(32)+s,t=":"+t+"R"+s,s=rs++,0<s&&(t+="H"+s.toString(32)),t+=":"}else s=Pp++,t=":"+t+"r"+s.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ap={readContext:Ee,useCallback:$c,useContext:Ee,useEffect:Mi,useImperativeHandle:Vc,useInsertionEffect:Oc,useLayoutEffect:Hc,useMemo:Kc,useReducer:sa,useRef:Wc,useState:function(){return sa(as)},useDebugValue:Ri,useDeferredValue:function(e){var t=Ae();return Gc(t,Y.memoizedState,e)},useTransition:function(){var e=sa(as)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Ac,useSyncExternalStore:Fc,useId:qc,unstable_isNewReconciler:!1},Fp={readContext:Ee,useCallback:$c,useContext:Ee,useEffect:Mi,useImperativeHandle:Vc,useInsertionEffect:Oc,useLayoutEffect:Hc,useMemo:Kc,useReducer:ra,useRef:Wc,useState:function(){return ra(as)},useDebugValue:Ri,useDeferredValue:function(e){var t=Ae();return Y===null?t.memoizedState=e:Gc(t,Y.memoizedState,e)},useTransition:function(){var e=ra(as)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Ac,useSyncExternalStore:Fc,useId:qc,unstable_isNewReconciler:!1};function De(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var s in e)t[s]===void 0&&(t[s]=e[s]);return t}return t}function Wa(e,t,s,r){t=e.memoizedState,s=s(r,t),s=s==null?t:V({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Nr={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,t,s){e=e._reactInternals;var r=he(),a=ft(e),i=Ye(r,a);i.payload=t,s!=null&&(i.callback=s),t=ht(e,i,a),t!==null&&(Ie(t,e,a,r),Is(t,e,a))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var r=he(),a=ft(e),i=Ye(r,a);i.tag=1,i.payload=t,s!=null&&(i.callback=s),t=ht(e,i,a),t!==null&&(Ie(t,e,a,r),Is(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=he(),r=ft(e),a=Ye(s,r);a.tag=2,t!=null&&(a.callback=t),t=ht(e,a,r),t!==null&&(Ie(t,e,r,s),Is(t,e,r))}};function Ul(e,t,s,r,a,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Zn(s,r)||!Zn(a,i):!0}function Zc(e,t,s){var r=!1,a=vt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ee(i):(a=je(t)?Lt:de.current,r=t.contextTypes,i=(r=r!=null)?hn(e,a):vt),t=new t(s,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Nr,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Vl(e,t,s,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,r),t.state!==e&&Nr.enqueueReplaceState(t,t.state,null)}function Oa(e,t,s,r){var a=e.stateNode;a.props=s,a.state=e.memoizedState,a.refs={},Bi(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Ee(i):(i=je(t)?Lt:de.current,a.context=hn(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Wa(e,t,i,s),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Nr.enqueueReplaceState(a,a.state,null),lr(e,s,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function xn(e,t){try{var s="",r=t;do s+=ou(r),r=r.return;while(r);var a=s}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function aa(e,t,s){return{value:e,source:null,stack:s??null,digest:t??null}}function Ha(e,t){try{console.error(t.value)}catch(s){setTimeout(function(){throw s})}}var Dp=typeof WeakMap=="function"?WeakMap:Map;function Jc(e,t,s){s=Ye(-1,s),s.tag=3,s.payload={element:null};var r=t.value;return s.callback=function(){pr||(pr=!0,Za=r),Ha(e,t)},s}function ed(e,t,s){s=Ye(-1,s),s.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;s.payload=function(){return r(a)},s.callback=function(){Ha(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(s.callback=function(){Ha(e,t),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),s}function $l(e,t,s){var r=e.pingCache;if(r===null){r=e.pingCache=new Dp;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(s)||(a.add(s),e=Qp.bind(null,e,t,s),t.then(e,e))}function Kl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gl(e,t,s,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(t=Ye(-1,1),t.tag=2,ht(s,t,1))),s.lanes|=1),e)}var Lp=tt.ReactCurrentOwner,ye=!1;function ue(e,t,s,r){t.child=e===null?Tc(t,null,s,r):fn(t,e.child,s,r)}function ql(e,t,s,r,a){s=s.render;var i=t.ref;return dn(t,a),r=Di(e,t,s,r,i,a),s=Li(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,et(e,t,a)):(O&&s&&wi(t),t.flags|=1,ue(e,t,r,a),t.child)}function Ql(e,t,s,r,a){if(e===null){var i=s.type;return typeof i=="function"&&!Ki(i)&&i.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(t.tag=15,t.type=i,td(e,t,i,r,a)):(e=$s(s.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var l=i.memoizedProps;if(s=s.compare,s=s!==null?s:Zn,s(l,r)&&e.ref===t.ref)return et(e,t,a)}return t.flags|=1,e=gt(i,r),e.ref=t.ref,e.return=t,t.child=e}function td(e,t,s,r,a){if(e!==null){var i=e.memoizedProps;if(Zn(i,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,et(e,t,a)}return Ua(e,t,s,r,a)}function nd(e,t,s){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(rn,be),be|=s;else{if(!(s&1073741824))return e=i!==null?i.baseLanes|s:s,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,R(rn,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:s,R(rn,be),be|=r}else i!==null?(r=i.baseLanes|s,t.memoizedState=null):r=s,R(rn,be),be|=r;return ue(e,t,a,s),t.child}function sd(e,t){var s=t.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(t.flags|=512,t.flags|=2097152)}function Ua(e,t,s,r,a){var i=je(s)?Lt:de.current;return i=hn(t,i),dn(t,a),s=Di(e,t,s,r,i,a),r=Li(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,et(e,t,a)):(O&&r&&wi(t),t.flags|=1,ue(e,t,s,a),t.child)}function Yl(e,t,s,r,a){if(je(s)){var i=!0;nr(t)}else i=!1;if(dn(t,a),t.stateNode===null)Hs(e,t),Zc(t,s,r),Oa(t,s,r,a),r=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var c=l.context,d=s.contextType;typeof d=="object"&&d!==null?d=Ee(d):(d=je(s)?Lt:de.current,d=hn(t,d));var m=s.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==r||c!==d)&&Vl(t,l,r,d),rt=!1;var p=t.memoizedState;l.state=p,lr(t,r,l,a),c=t.memoizedState,o!==r||p!==c||ve.current||rt?(typeof m=="function"&&(Wa(t,s,m,r),c=t.memoizedState),(o=rt||Ul(t,s,o,r,p,c,d))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=d,r=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,zc(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:De(t.type,o),l.props=d,h=t.pendingProps,p=l.context,c=s.contextType,typeof c=="object"&&c!==null?c=Ee(c):(c=je(s)?Lt:de.current,c=hn(t,c));var j=s.getDerivedStateFromProps;(m=typeof j=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==h||p!==c)&&Vl(t,l,r,c),rt=!1,p=t.memoizedState,l.state=p,lr(t,r,l,a);var x=t.memoizedState;o!==h||p!==x||ve.current||rt?(typeof j=="function"&&(Wa(t,s,j,r),x=t.memoizedState),(d=rt||Ul(t,s,d,r,p,x,c)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=c,r=d):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Va(e,t,s,r,i,a)}function Va(e,t,s,r,a,i){sd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return a&&Dl(t,s,!1),et(e,t,i);r=t.stateNode,Lp.current=t;var o=l&&typeof s.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=fn(t,e.child,null,i),t.child=fn(t,null,o,i)):ue(e,t,o,i),t.memoizedState=r.state,a&&Dl(t,s,!0),t.child}function rd(e){var t=e.stateNode;t.pendingContext?Fl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fl(e,t.context,!1),zi(e,t.containerInfo)}function Xl(e,t,s,r,a){return mn(),Si(a),t.flags|=256,ue(e,t,s,r),t.child}var $a={dehydrated:null,treeContext:null,retryLane:0};function Ka(e){return{baseLanes:e,cachePool:null,transitions:null}}function ad(e,t,s){var r=t.pendingProps,a=H.current,i=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(a&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),R(H,a&1),e===null)return Ra(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=_r(l,r,0,null),e=Dt(e,r,s,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ka(s),t.memoizedState=$a,e):Ii(t,l));if(a=e.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return Mp(e,t,l,r,o,a,s);if(i){i=r.fallback,l=t.mode,a=e.child,o=a.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=gt(a,c),r.subtreeFlags=a.subtreeFlags&14680064),o!==null?i=gt(o,i):(i=Dt(i,l,s,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ka(s):{baseLanes:l.baseLanes|s,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~s,t.memoizedState=$a,r}return i=e.child,e=i.sibling,r=gt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=s),r.return=t,r.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=r,t.memoizedState=null,r}function Ii(e,t){return t=_r({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Bs(e,t,s,r){return r!==null&&Si(r),fn(t,e.child,null,s),e=Ii(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mp(e,t,s,r,a,i,l){if(s)return t.flags&256?(t.flags&=-257,r=aa(Error(N(422))),Bs(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=_r({mode:"visible",children:r.children},a,0,null),i=Dt(i,a,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&fn(t,e.child,null,l),t.child.memoizedState=Ka(l),t.memoizedState=$a,i);if(!(t.mode&1))return Bs(e,t,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var o=r.dgst;return r=o,i=Error(N(419)),r=aa(i,r,void 0),Bs(e,t,l,r)}if(o=(l&e.childLanes)!==0,ye||o){if(r=ne,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|l)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Je(e,a),Ie(r,e,a,-1))}return $i(),r=aa(Error(N(421))),Bs(e,t,l,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Yp.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,we=pt(a.nextSibling),Ne=t,O=!0,Me=null,e!==null&&(Pe[Te++]=qe,Pe[Te++]=Qe,Pe[Te++]=Mt,qe=e.id,Qe=e.overflow,Mt=t),t=Ii(t,r.children),t.flags|=4096,t)}function Zl(e,t,s){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ia(e.return,t,s)}function ia(e,t,s,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:s,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=s,i.tailMode=a)}function id(e,t,s){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(ue(e,t,r.children,s),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zl(e,s,t);else if(e.tag===19)Zl(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(H,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(s=t.child,a=null;s!==null;)e=s.alternate,e!==null&&or(e)===null&&(a=s),s=s.sibling;s=a,s===null?(a=t.child,t.child=null):(a=s.sibling,s.sibling=null),ia(t,!1,a,s,i);break;case"backwards":for(s=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&or(e)===null){t.child=a;break}e=a.sibling,a.sibling=s,s=a,a=e}ia(t,!0,s,null,i);break;case"together":ia(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function et(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),It|=t.lanes,!(s&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,s=gt(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=gt(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function Rp(e,t,s){switch(t.tag){case 3:rd(t),mn();break;case 5:Ec(t);break;case 1:je(t.type)&&nr(t);break;case 4:zi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;R(ar,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(R(H,H.current&1),t.flags|=128,null):s&t.child.childLanes?ad(e,t,s):(R(H,H.current&1),e=et(e,t,s),e!==null?e.sibling:null);R(H,H.current&1);break;case 19:if(r=(s&t.childLanes)!==0,e.flags&128){if(r)return id(e,t,s);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),R(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,nd(e,t,s)}return et(e,t,s)}var ld,Ga,od,cd;ld=function(e,t){for(var s=t.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return;s=s.return}s.sibling.return=s.return,s=s.sibling}};Ga=function(){};od=function(e,t,s,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,At($e.current);var i=null;switch(s){case"input":a=fa(e,a),r=fa(e,r),i=[];break;case"select":a=V({},a,{value:void 0}),r=V({},r,{value:void 0}),i=[];break;case"textarea":a=ya(e,a),r=ya(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=er)}ja(s,r);var l;s=null;for(d in a)if(!r.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var o=a[d];for(l in o)o.hasOwnProperty(l)&&(s||(s={}),s[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&($n.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var c=r[d];if(o=a!=null?a[d]:void 0,r.hasOwnProperty(d)&&c!==o&&(c!=null||o!=null))if(d==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(s||(s={}),s[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(s||(s={}),s[l]=c[l])}else s||(i||(i=[]),i.push(d,s)),s=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&($n.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&I("scroll",e),i||o===c||(i=[])):(i=i||[]).push(d,c))}s&&(i=i||[]).push("style",s);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};cd=function(e,t,s,r){s!==r&&(t.flags|=4)};function Bn(e,t){if(!O)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var r=null;s!==null;)s.alternate!==null&&(r=s),s=s.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,r=0;if(t)for(var a=e.child;a!==null;)s|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)s|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=s,t}function Ip(e,t,s){var r=t.pendingProps;switch(Ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return je(t.type)&&tr(),oe(t),null;case 3:return r=t.stateNode,gn(),W(ve),W(de),Ai(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ps(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(ti(Me),Me=null))),Ga(e,t),oe(t),null;case 5:Ei(t);var a=At(ss.current);if(s=t.type,e!==null&&t.stateNode!=null)od(e,t,s,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return oe(t),null}if(e=At($e.current),Ps(t)){r=t.stateNode,s=t.type;var i=t.memoizedProps;switch(r[Ue]=t,r[ts]=i,e=(t.mode&1)!==0,s){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(a=0;a<Dn.length;a++)I(Dn[a],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":ll(r,i),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},I("invalid",r);break;case"textarea":cl(r,i),I("invalid",r)}ja(s,i),a=null;for(var l in i)if(i.hasOwnProperty(l)){var o=i[l];l==="children"?typeof o=="string"?r.textContent!==o&&(i.suppressHydrationWarning!==!0&&_s(r.textContent,o,e),a=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&_s(r.textContent,o,e),a=["children",""+o]):$n.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&I("scroll",r)}switch(s){case"input":vs(r),ol(r,i,!0);break;case"textarea":vs(r),dl(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=er)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mo(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(s,{is:r.is}):(e=l.createElement(s),s==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,s),e[Ue]=t,e[ts]=r,ld(e,t,!1,!1),t.stateNode=e;e:{switch(l=ka(s,r),s){case"dialog":I("cancel",e),I("close",e),a=r;break;case"iframe":case"object":case"embed":I("load",e),a=r;break;case"video":case"audio":for(a=0;a<Dn.length;a++)I(Dn[a],e);a=r;break;case"source":I("error",e),a=r;break;case"img":case"image":case"link":I("error",e),I("load",e),a=r;break;case"details":I("toggle",e),a=r;break;case"input":ll(e,r),a=fa(e,r),I("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=V({},r,{value:void 0}),I("invalid",e);break;case"textarea":cl(e,r),a=ya(e,r),I("invalid",e);break;default:a=r}ja(s,a),o=a;for(i in o)if(o.hasOwnProperty(i)){var c=o[i];i==="style"?Wo(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ro(e,c)):i==="children"?typeof c=="string"?(s!=="textarea"||c!=="")&&Kn(e,c):typeof c=="number"&&Kn(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&($n.hasOwnProperty(i)?c!=null&&i==="onScroll"&&I("scroll",e):c!=null&&ci(e,i,c,l))}switch(s){case"input":vs(e),ol(e,r,!1);break;case"textarea":vs(e),dl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?an(e,!!r.multiple,i,!1):r.defaultValue!=null&&an(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=er)}switch(s){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)cd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(s=At(ss.current),At($e.current),Ps(t)){if(r=t.stateNode,s=t.memoizedProps,r[Ue]=t,(i=r.nodeValue!==s)&&(e=Ne,e!==null))switch(e.tag){case 3:_s(r.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_s(r.nodeValue,s,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(s.nodeType===9?s:s.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return oe(t),null;case 13:if(W(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(O&&we!==null&&t.mode&1&&!(t.flags&128))_c(),mn(),t.flags|=98560,i=!1;else if(i=Ps(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[Ue]=t}else mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),i=!1}else Me!==null&&(ti(Me),Me=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=s,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?Z===0&&(Z=3):$i())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return gn(),Ga(e,t),e===null&&Jn(t.stateNode.containerInfo),oe(t),null;case 10:return Pi(t.type._context),oe(t),null;case 17:return je(t.type)&&tr(),oe(t),null;case 19:if(W(H),i=t.memoizedState,i===null)return oe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Bn(i,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=or(e),l!==null){for(t.flags|=128,Bn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=s,s=t.child;s!==null;)i=s,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return R(H,H.current&1|2),t.child}e=e.sibling}i.tail!==null&&G()>yn&&(t.flags|=128,r=!0,Bn(i,!1),t.lanes=4194304)}else{if(!r)if(e=or(l),e!==null){if(t.flags|=128,r=!0,s=e.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),Bn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!O)return oe(t),null}else 2*G()-i.renderingStartTime>yn&&s!==1073741824&&(t.flags|=128,r=!0,Bn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(s=i.last,s!==null?s.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=G(),t.sibling=null,s=H.current,R(H,r?s&1|2:s&1),t):(oe(t),null);case 22:case 23:return Vi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Wp(e,t){switch(Ni(t),t.tag){case 1:return je(t.type)&&tr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),W(ve),W(de),Ai(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ei(t),null;case 13:if(W(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(H),null;case 4:return gn(),null;case 10:return Pi(t.type._context),null;case 22:case 23:return Vi(),null;case 24:return null;default:return null}}var zs=!1,ce=!1,Op=typeof WeakSet=="function"?WeakSet:Set,P=null;function sn(e,t){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(r){$(e,t,r)}else s.current=null}function qa(e,t,s){try{s()}catch(r){$(e,t,r)}}var Jl=!1;function Hp(e,t){if(za=Xs,e=mc(),bi(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var r=s.getSelection&&s.getSelection();if(r&&r.rangeCount!==0){s=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{s.nodeType,i.nodeType}catch{s=null;break e}var l=0,o=-1,c=-1,d=0,m=0,h=e,p=null;t:for(;;){for(var j;h!==s||a!==0&&h.nodeType!==3||(o=l+a),h!==i||r!==0&&h.nodeType!==3||(c=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(j=h.firstChild)!==null;)p=h,h=j;for(;;){if(h===e)break t;if(p===s&&++d===a&&(o=l),p===i&&++m===r&&(c=l),(j=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=j}s=o===-1||c===-1?null:{start:o,end:c}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ea={focusedElem:e,selectionRange:s},Xs=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,_=x.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:De(t.type,y),_);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(b){$(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return x=Jl,Jl=!1,x}function Hn(e,t,s){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&qa(t,s,i)}a=a.next}while(a!==r)}}function Sr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var s=t=t.next;do{if((s.tag&e)===e){var r=s.create;s.destroy=r()}s=s.next}while(s!==t)}}function Qa(e){var t=e.ref;if(t!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof t=="function"?t(e):t.current=e}}function dd(e){var t=e.alternate;t!==null&&(e.alternate=null,dd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[ts],delete t[Da],delete t[Np],delete t[Sp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ud(e){return e.tag===5||e.tag===3||e.tag===4}function eo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ud(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ya(e,t,s){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?s.nodeType===8?s.parentNode.insertBefore(e,t):s.insertBefore(e,t):(s.nodeType===8?(t=s.parentNode,t.insertBefore(e,s)):(t=s,t.appendChild(e)),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=er));else if(r!==4&&(e=e.child,e!==null))for(Ya(e,t,s),e=e.sibling;e!==null;)Ya(e,t,s),e=e.sibling}function Xa(e,t,s){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xa(e,t,s),e=e.sibling;e!==null;)Xa(e,t,s),e=e.sibling}var se=null,Le=!1;function nt(e,t,s){for(s=s.child;s!==null;)pd(e,t,s),s=s.sibling}function pd(e,t,s){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(xr,s)}catch{}switch(s.tag){case 5:ce||sn(s,t);case 6:var r=se,a=Le;se=null,nt(e,t,s),se=r,Le=a,se!==null&&(Le?(e=se,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):se.removeChild(s.stateNode));break;case 18:se!==null&&(Le?(e=se,s=s.stateNode,e.nodeType===8?Jr(e.parentNode,s):e.nodeType===1&&Jr(e,s),Yn(e)):Jr(se,s.stateNode));break;case 4:r=se,a=Le,se=s.stateNode.containerInfo,Le=!0,nt(e,t,s),se=r,Le=a;break;case 0:case 11:case 14:case 15:if(!ce&&(r=s.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&qa(s,t,l),a=a.next}while(a!==r)}nt(e,t,s);break;case 1:if(!ce&&(sn(s,t),r=s.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=s.memoizedProps,r.state=s.memoizedState,r.componentWillUnmount()}catch(o){$(s,t,o)}nt(e,t,s);break;case 21:nt(e,t,s);break;case 22:s.mode&1?(ce=(r=ce)||s.memoizedState!==null,nt(e,t,s),ce=r):nt(e,t,s);break;default:nt(e,t,s)}}function to(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new Op),t.forEach(function(r){var a=Xp.bind(null,e,r);s.has(r)||(s.add(r),r.then(a,a))})}}function Fe(e,t){var s=t.deletions;if(s!==null)for(var r=0;r<s.length;r++){var a=s[r];try{var i=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:se=o.stateNode,Le=!1;break e;case 3:se=o.stateNode.containerInfo,Le=!0;break e;case 4:se=o.stateNode.containerInfo,Le=!0;break e}o=o.return}if(se===null)throw Error(N(160));pd(i,l,a),se=null,Le=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(d){$(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hd(t,e),t=t.sibling}function hd(e,t){var s=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(t,e),Oe(e),r&4){try{Hn(3,e,e.return),Sr(3,e)}catch(y){$(e,e.return,y)}try{Hn(5,e,e.return)}catch(y){$(e,e.return,y)}}break;case 1:Fe(t,e),Oe(e),r&512&&s!==null&&sn(s,s.return);break;case 5:if(Fe(t,e),Oe(e),r&512&&s!==null&&sn(s,s.return),e.flags&32){var a=e.stateNode;try{Kn(a,"")}catch(y){$(e,e.return,y)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,l=s!==null?s.memoizedProps:i,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&Do(a,i),ka(o,l);var d=ka(o,i);for(l=0;l<c.length;l+=2){var m=c[l],h=c[l+1];m==="style"?Wo(a,h):m==="dangerouslySetInnerHTML"?Ro(a,h):m==="children"?Kn(a,h):ci(a,m,h,d)}switch(o){case"input":ga(a,i);break;case"textarea":Lo(a,i);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var j=i.value;j!=null?an(a,!!i.multiple,j,!1):p!==!!i.multiple&&(i.defaultValue!=null?an(a,!!i.multiple,i.defaultValue,!0):an(a,!!i.multiple,i.multiple?[]:"",!1))}a[ts]=i}catch(y){$(e,e.return,y)}}break;case 6:if(Fe(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(N(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(y){$(e,e.return,y)}}break;case 3:if(Fe(t,e),Oe(e),r&4&&s!==null&&s.memoizedState.isDehydrated)try{Yn(t.containerInfo)}catch(y){$(e,e.return,y)}break;case 4:Fe(t,e),Oe(e);break;case 13:Fe(t,e),Oe(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Hi=G())),r&4&&to(e);break;case 22:if(m=s!==null&&s.memoizedState!==null,e.mode&1?(ce=(d=ce)||m,Fe(t,e),ce=d):Fe(t,e),Oe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(P=e,m=e.child;m!==null;){for(h=P=m;P!==null;){switch(p=P,j=p.child,p.tag){case 0:case 11:case 14:case 15:Hn(4,p,p.return);break;case 1:sn(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,s=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){$(r,s,y)}}break;case 5:sn(p,p.return);break;case 22:if(p.memoizedState!==null){so(h);continue}}j!==null?(j.return=p,P=j):so(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{a=h.stateNode,d?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Io("display",l))}catch(y){$(e,e.return,y)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(y){$(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Fe(t,e),Oe(e),r&4&&to(e);break;case 21:break;default:Fe(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var s=e.return;s!==null;){if(ud(s)){var r=s;break e}s=s.return}throw Error(N(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Kn(a,""),r.flags&=-33);var i=eo(e);Xa(e,i,a);break;case 3:case 4:var l=r.stateNode.containerInfo,o=eo(e);Ya(e,o,l);break;default:throw Error(N(161))}}catch(c){$(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Up(e,t,s){P=e,md(e)}function md(e,t,s){for(var r=(e.mode&1)!==0;P!==null;){var a=P,i=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||zs;if(!l){var o=a.alternate,c=o!==null&&o.memoizedState!==null||ce;o=zs;var d=ce;if(zs=l,(ce=c)&&!d)for(P=a;P!==null;)l=P,c=l.child,l.tag===22&&l.memoizedState!==null?ro(a):c!==null?(c.return=l,P=c):ro(a);for(;i!==null;)P=i,md(i),i=i.sibling;P=a,zs=o,ce=d}no(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,P=i):no(e)}}function no(e){for(;P!==null;){var t=P;if(t.flags&8772){var s=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||Sr(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(s===null)r.componentDidMount();else{var a=t.elementType===t.type?s.memoizedProps:De(t.type,s.memoizedProps);r.componentDidUpdate(a,s.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Wl(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(s=null,t.child!==null)switch(t.child.tag){case 5:s=t.child.stateNode;break;case 1:s=t.child.stateNode}Wl(t,l,s)}break;case 5:var o=t.stateNode;if(s===null&&t.flags&4){s=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&s.focus();break;case"img":c.src&&(s.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Yn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ce||t.flags&512&&Qa(t)}catch(p){$(t,t.return,p)}}if(t===e){P=null;break}if(s=t.sibling,s!==null){s.return=t.return,P=s;break}P=t.return}}function so(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}function ro(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var s=t.return;try{Sr(4,t)}catch(c){$(t,s,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(c){$(t,a,c)}}var i=t.return;try{Qa(t)}catch(c){$(t,i,c)}break;case 5:var l=t.return;try{Qa(t)}catch(c){$(t,l,c)}}}catch(c){$(t,t.return,c)}if(t===e){P=null;break}var o=t.sibling;if(o!==null){o.return=t.return,P=o;break}P=t.return}}var Vp=Math.ceil,ur=tt.ReactCurrentDispatcher,Wi=tt.ReactCurrentOwner,ze=tt.ReactCurrentBatchConfig,L=0,ne=null,q=null,re=0,be=0,rn=bt(0),Z=0,ls=null,It=0,Cr=0,Oi=0,Un=null,xe=null,Hi=0,yn=1/0,Ke=null,pr=!1,Za=null,mt=null,Es=!1,ot=null,hr=0,Vn=0,Ja=null,Us=-1,Vs=0;function he(){return L&6?G():Us!==-1?Us:Us=G()}function ft(e){return e.mode&1?L&2&&re!==0?re&-re:_p.transition!==null?(Vs===0&&(Vs=Zo()),Vs):(e=M,e!==0||(e=window.event,e=e===void 0?16:ac(e.type)),e):1}function Ie(e,t,s,r){if(50<Vn)throw Vn=0,Ja=null,Error(N(185));ds(e,s,r),(!(L&2)||e!==ne)&&(e===ne&&(!(L&2)&&(Cr|=s),Z===4&&it(e,re)),ke(e,r),s===1&&L===0&&!(t.mode&1)&&(yn=G()+500,br&&wt()))}function ke(e,t){var s=e.callbackNode;_u(e,t);var r=Ys(e,e===ne?re:0);if(r===0)s!==null&&hl(s),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(s!=null&&hl(s),t===1)e.tag===0?Cp(ao.bind(null,e)):Nc(ao.bind(null,e)),bp(function(){!(L&6)&&wt()}),s=null;else{switch(Jo(r)){case 1:s=mi;break;case 4:s=Yo;break;case 16:s=Qs;break;case 536870912:s=Xo;break;default:s=Qs}s=bd(s,fd.bind(null,e))}e.callbackPriority=t,e.callbackNode=s}}function fd(e,t){if(Us=-1,Vs=0,L&6)throw Error(N(327));var s=e.callbackNode;if(un()&&e.callbackNode!==s)return null;var r=Ys(e,e===ne?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=mr(e,r);else{t=r;var a=L;L|=2;var i=xd();(ne!==e||re!==t)&&(Ke=null,yn=G()+500,Ft(e,t));do try{Gp();break}catch(o){gd(e,o)}while(!0);_i(),ur.current=i,L=a,q!==null?t=0:(ne=null,re=0,t=Z)}if(t!==0){if(t===2&&(a=Ca(e),a!==0&&(r=a,t=ei(e,a))),t===1)throw s=ls,Ft(e,0),it(e,r),ke(e,G()),s;if(t===6)it(e,r);else{if(a=e.current.alternate,!(r&30)&&!$p(a)&&(t=mr(e,r),t===2&&(i=Ca(e),i!==0&&(r=i,t=ei(e,i))),t===1))throw s=ls,Ft(e,0),it(e,r),ke(e,G()),s;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Bt(e,xe,Ke);break;case 3:if(it(e,r),(r&130023424)===r&&(t=Hi+500-G(),10<t)){if(Ys(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Fa(Bt.bind(null,e,xe,Ke),t);break}Bt(e,xe,Ke);break;case 4:if(it(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-Re(r);i=1<<l,l=t[l],l>a&&(a=l),r&=~i}if(r=a,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vp(r/1960))-r,10<r){e.timeoutHandle=Fa(Bt.bind(null,e,xe,Ke),r);break}Bt(e,xe,Ke);break;case 5:Bt(e,xe,Ke);break;default:throw Error(N(329))}}}return ke(e,G()),e.callbackNode===s?fd.bind(null,e):null}function ei(e,t){var s=Un;return e.current.memoizedState.isDehydrated&&(Ft(e,t).flags|=256),e=mr(e,t),e!==2&&(t=xe,xe=s,t!==null&&ti(t)),e}function ti(e){xe===null?xe=e:xe.push.apply(xe,e)}function $p(e){for(var t=e;;){if(t.flags&16384){var s=t.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var r=0;r<s.length;r++){var a=s[r],i=a.getSnapshot;a=a.value;try{if(!We(i(),a))return!1}catch{return!1}}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function it(e,t){for(t&=~Oi,t&=~Cr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var s=31-Re(t),r=1<<s;e[s]=-1,t&=~r}}function ao(e){if(L&6)throw Error(N(327));un();var t=Ys(e,0);if(!(t&1))return ke(e,G()),null;var s=mr(e,t);if(e.tag!==0&&s===2){var r=Ca(e);r!==0&&(t=r,s=ei(e,r))}if(s===1)throw s=ls,Ft(e,0),it(e,t),ke(e,G()),s;if(s===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bt(e,xe,Ke),ke(e,G()),null}function Ui(e,t){var s=L;L|=1;try{return e(t)}finally{L=s,L===0&&(yn=G()+500,br&&wt())}}function Wt(e){ot!==null&&ot.tag===0&&!(L&6)&&un();var t=L;L|=1;var s=ze.transition,r=M;try{if(ze.transition=null,M=1,e)return e()}finally{M=r,ze.transition=s,L=t,!(L&6)&&wt()}}function Vi(){be=rn.current,W(rn)}function Ft(e,t){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,kp(s)),q!==null)for(s=q.return;s!==null;){var r=s;switch(Ni(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&tr();break;case 3:gn(),W(ve),W(de),Ai();break;case 5:Ei(r);break;case 4:gn();break;case 13:W(H);break;case 19:W(H);break;case 10:Pi(r.type._context);break;case 22:case 23:Vi()}s=s.return}if(ne=e,q=e=gt(e.current,null),re=be=t,Z=0,ls=null,Oi=Cr=It=0,xe=Un=null,Et!==null){for(t=0;t<Et.length;t++)if(s=Et[t],r=s.interleaved,r!==null){s.interleaved=null;var a=r.next,i=s.pending;if(i!==null){var l=i.next;i.next=a,r.next=l}s.pending=r}Et=null}return e}function gd(e,t){do{var s=q;try{if(_i(),Ws.current=dr,cr){for(var r=U.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}cr=!1}if(Rt=0,te=Y=U=null,On=!1,rs=0,Wi.current=null,s===null||s.return===null){Z=1,ls=t,q=null;break}e:{var i=e,l=s.return,o=s,c=t;if(t=re,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,m=o,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var j=Kl(l);if(j!==null){j.flags&=-257,Gl(j,l,o,i,t),j.mode&1&&$l(i,d,t),t=j,c=d;var x=t.updateQueue;if(x===null){var y=new Set;y.add(c),t.updateQueue=y}else x.add(c);break e}else{if(!(t&1)){$l(i,d,t),$i();break e}c=Error(N(426))}}else if(O&&o.mode&1){var _=Kl(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Gl(_,l,o,i,t),Si(xn(c,o));break e}}i=c=xn(c,o),Z!==4&&(Z=2),Un===null?Un=[i]:Un.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Jc(i,c,t);Il(i,f);break e;case 1:o=c;var u=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(mt===null||!mt.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var b=ed(i,o,t);Il(i,b);break e}}i=i.return}while(i!==null)}vd(s)}catch(k){t=k,q===s&&s!==null&&(q=s=s.return);continue}break}while(!0)}function xd(){var e=ur.current;return ur.current=dr,e===null?dr:e}function $i(){(Z===0||Z===3||Z===2)&&(Z=4),ne===null||!(It&268435455)&&!(Cr&268435455)||it(ne,re)}function mr(e,t){var s=L;L|=2;var r=xd();(ne!==e||re!==t)&&(Ke=null,Ft(e,t));do try{Kp();break}catch(a){gd(e,a)}while(!0);if(_i(),L=s,ur.current=r,q!==null)throw Error(N(261));return ne=null,re=0,Z}function Kp(){for(;q!==null;)yd(q)}function Gp(){for(;q!==null&&!yu();)yd(q)}function yd(e){var t=kd(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?vd(e):q=t,Wi.current=null}function vd(e){var t=e;do{var s=t.alternate;if(e=t.return,t.flags&32768){if(s=Wp(s,t),s!==null){s.flags&=32767,q=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,q=null;return}}else if(s=Ip(s,t,be),s!==null){q=s;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);Z===0&&(Z=5)}function Bt(e,t,s){var r=M,a=ze.transition;try{ze.transition=null,M=1,qp(e,t,s,r)}finally{ze.transition=a,M=r}return null}function qp(e,t,s,r){do un();while(ot!==null);if(L&6)throw Error(N(327));s=e.finishedWork;var a=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=s.lanes|s.childLanes;if(Pu(e,i),e===ne&&(q=ne=null,re=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||Es||(Es=!0,bd(Qs,function(){return un(),null})),i=(s.flags&15990)!==0,s.subtreeFlags&15990||i){i=ze.transition,ze.transition=null;var l=M;M=1;var o=L;L|=4,Wi.current=null,Hp(e,s),hd(s,e),mp(Ea),Xs=!!za,Ea=za=null,e.current=s,Up(s),vu(),L=o,M=l,ze.transition=i}else e.current=s;if(Es&&(Es=!1,ot=e,hr=a),i=e.pendingLanes,i===0&&(mt=null),bu(s.stateNode),ke(e,G()),t!==null)for(r=e.onRecoverableError,s=0;s<t.length;s++)a=t[s],r(a.value,{componentStack:a.stack,digest:a.digest});if(pr)throw pr=!1,e=Za,Za=null,e;return hr&1&&e.tag!==0&&un(),i=e.pendingLanes,i&1?e===Ja?Vn++:(Vn=0,Ja=e):Vn=0,wt(),null}function un(){if(ot!==null){var e=Jo(hr),t=ze.transition,s=M;try{if(ze.transition=null,M=16>e?16:e,ot===null)var r=!1;else{if(e=ot,ot=null,hr=0,L&6)throw Error(N(331));var a=L;for(L|=4,P=e.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var o=i.deletions;if(o!==null){for(var c=0;c<o.length;c++){var d=o[c];for(P=d;P!==null;){var m=P;switch(m.tag){case 0:case 11:case 15:Hn(8,m,i)}var h=m.child;if(h!==null)h.return=m,P=h;else for(;P!==null;){m=P;var p=m.sibling,j=m.return;if(dd(m),m===d){P=null;break}if(p!==null){p.return=j,P=p;break}P=j}}}var x=i.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Hn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,P=f;break e}P=i.return}}var u=e.current;for(P=u;P!==null;){l=P;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,P=g;else e:for(l=u;P!==null;){if(o=P,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Sr(9,o)}}catch(k){$(o,o.return,k)}if(o===l){P=null;break e}var b=o.sibling;if(b!==null){b.return=o.return,P=b;break e}P=o.return}}if(L=a,wt(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(xr,e)}catch{}r=!0}return r}finally{M=s,ze.transition=t}}return!1}function io(e,t,s){t=xn(s,t),t=Jc(e,t,1),e=ht(e,t,1),t=he(),e!==null&&(ds(e,1,t),ke(e,t))}function $(e,t,s){if(e.tag===3)io(e,e,s);else for(;t!==null;){if(t.tag===3){io(t,e,s);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=xn(s,e),e=ed(t,e,1),t=ht(t,e,1),e=he(),t!==null&&(ds(t,1,e),ke(t,e));break}}t=t.return}}function Qp(e,t,s){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&s,ne===e&&(re&s)===s&&(Z===4||Z===3&&(re&130023424)===re&&500>G()-Hi?Ft(e,0):Oi|=s),ke(e,t)}function jd(e,t){t===0&&(e.mode&1?(t=bs,bs<<=1,!(bs&130023424)&&(bs=4194304)):t=1);var s=he();e=Je(e,t),e!==null&&(ds(e,t,s),ke(e,s))}function Yp(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),jd(e,s)}function Xp(e,t){var s=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(s=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),jd(e,s)}var kd;kd=function(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ye=!0;else{if(!(e.lanes&s)&&!(t.flags&128))return ye=!1,Rp(e,t,s);ye=!!(e.flags&131072)}else ye=!1,O&&t.flags&1048576&&Sc(t,rr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hs(e,t),e=t.pendingProps;var a=hn(t,de.current);dn(t,s),a=Di(null,t,r,e,a,s);var i=Li();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(i=!0,nr(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Bi(t),a.updater=Nr,t.stateNode=a,a._reactInternals=t,Oa(t,r,e,s),t=Va(null,t,r,!0,i,s)):(t.tag=0,O&&i&&wi(t),ue(null,t,a,s),t=t.child),t;case 16:r=t.elementType;e:{switch(Hs(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Jp(r),e=De(r,e),a){case 0:t=Ua(null,t,r,e,s);break e;case 1:t=Yl(null,t,r,e,s);break e;case 11:t=ql(null,t,r,e,s);break e;case 14:t=Ql(null,t,r,De(r.type,e),s);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:De(r,a),Ua(e,t,r,a,s);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:De(r,a),Yl(e,t,r,a,s);case 3:e:{if(rd(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,a=i.element,zc(e,t),lr(t,r,null,s);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=xn(Error(N(423)),t),t=Xl(e,t,r,s,a);break e}else if(r!==a){a=xn(Error(N(424)),t),t=Xl(e,t,r,s,a);break e}else for(we=pt(t.stateNode.containerInfo.firstChild),Ne=t,O=!0,Me=null,s=Tc(t,null,r,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(mn(),r===a){t=et(e,t,s);break e}ue(e,t,r,s)}t=t.child}return t;case 5:return Ec(t),e===null&&Ra(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,Aa(r,a)?l=null:i!==null&&Aa(r,i)&&(t.flags|=32),sd(e,t),ue(e,t,l,s),t.child;case 6:return e===null&&Ra(t),null;case 13:return ad(e,t,s);case 4:return zi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fn(t,null,r,s):ue(e,t,r,s),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:De(r,a),ql(e,t,r,a,s);case 7:return ue(e,t,t.pendingProps,s),t.child;case 8:return ue(e,t,t.pendingProps.children,s),t.child;case 12:return ue(e,t,t.pendingProps.children,s),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,R(ar,r._currentValue),r._currentValue=l,i!==null)if(We(i.value,l)){if(i.children===a.children&&!ve.current){t=et(e,t,s);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){l=i.child;for(var c=o.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Ye(-1,s&-s),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?c.next=c:(c.next=m.next,m.next=c),d.pending=c}}i.lanes|=s,c=i.alternate,c!==null&&(c.lanes|=s),Ia(i.return,s,t),o.lanes|=s;break}c=c.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(N(341));l.lanes|=s,o=l.alternate,o!==null&&(o.lanes|=s),Ia(l,s,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ue(e,t,a.children,s),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,dn(t,s),a=Ee(a),r=r(a),t.flags|=1,ue(e,t,r,s),t.child;case 14:return r=t.type,a=De(r,t.pendingProps),a=De(r.type,a),Ql(e,t,r,a,s);case 15:return td(e,t,t.type,t.pendingProps,s);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:De(r,a),Hs(e,t),t.tag=1,je(r)?(e=!0,nr(t)):e=!1,dn(t,s),Zc(t,r,a),Oa(t,r,a,s),Va(null,t,r,!0,e,s);case 19:return id(e,t,s);case 22:return nd(e,t,s)}throw Error(N(156,t.tag))};function bd(e,t){return Qo(e,t)}function Zp(e,t,s,r){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(e,t,s,r){return new Zp(e,t,s,r)}function Ki(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jp(e){if(typeof e=="function")return Ki(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ui)return 11;if(e===pi)return 14}return 2}function gt(e,t){var s=e.alternate;return s===null?(s=Be(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function $s(e,t,s,r,a,i){var l=2;if(r=e,typeof e=="function")Ki(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case qt:return Dt(s.children,a,i,t);case di:l=8,a|=8;break;case ua:return e=Be(12,s,t,a|2),e.elementType=ua,e.lanes=i,e;case pa:return e=Be(13,s,t,a),e.elementType=pa,e.lanes=i,e;case ha:return e=Be(19,s,t,a),e.elementType=ha,e.lanes=i,e;case Eo:return _r(s,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bo:l=10;break e;case zo:l=9;break e;case ui:l=11;break e;case pi:l=14;break e;case st:l=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Be(l,s,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function Dt(e,t,s,r){return e=Be(7,e,r,t),e.lanes=s,e}function _r(e,t,s,r){return e=Be(22,e,r,t),e.elementType=Eo,e.lanes=s,e.stateNode={isHidden:!1},e}function la(e,t,s){return e=Be(6,e,null,t),e.lanes=s,e}function oa(e,t,s){return t=Be(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function eh(e,t,s,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hr(0),this.expirationTimes=Hr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hr(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Gi(e,t,s,r,a,i,l,o,c){return e=new eh(e,t,s,o,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Be(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bi(i),e}function th(e,t,s){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:s}}function wd(e){if(!e)return vt;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var s=e.type;if(je(s))return wc(e,s,t)}return t}function Nd(e,t,s,r,a,i,l,o,c){return e=Gi(s,r,!0,e,a,i,l,o,c),e.context=wd(null),s=e.current,r=he(),a=ft(s),i=Ye(r,a),i.callback=t??null,ht(s,i,a),e.current.lanes=a,ds(e,a,r),ke(e,r),e}function Pr(e,t,s,r){var a=t.current,i=he(),l=ft(a);return s=wd(s),t.context===null?t.context=s:t.pendingContext=s,t=Ye(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ht(a,t,l),e!==null&&(Ie(e,a,l,i),Is(e,a,l)),l}function fr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lo(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function qi(e,t){lo(e,t),(e=e.alternate)&&lo(e,t)}function nh(){return null}var Sd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qi(e){this._internalRoot=e}Tr.prototype.render=Qi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Pr(e,t,null,null)};Tr.prototype.unmount=Qi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){Pr(null,e,null,null)}),t[Ze]=null}};function Tr(e){this._internalRoot=e}Tr.prototype.unstable_scheduleHydration=function(e){if(e){var t=nc();e={blockedOn:null,target:e,priority:t};for(var s=0;s<at.length&&t!==0&&t<at[s].priority;s++);at.splice(s,0,e),s===0&&rc(e)}};function Yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Br(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function oo(){}function sh(e,t,s,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var d=fr(l);i.call(d)}}var l=Nd(t,r,e,0,null,!1,!1,"",oo);return e._reactRootContainer=l,e[Ze]=l.current,Jn(e.nodeType===8?e.parentNode:e),Wt(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var o=r;r=function(){var d=fr(c);o.call(d)}}var c=Gi(e,0,!1,null,null,!1,!1,"",oo);return e._reactRootContainer=c,e[Ze]=c.current,Jn(e.nodeType===8?e.parentNode:e),Wt(function(){Pr(t,c,s,r)}),c}function zr(e,t,s,r,a){var i=s._reactRootContainer;if(i){var l=i;if(typeof a=="function"){var o=a;a=function(){var c=fr(l);o.call(c)}}Pr(t,l,e,a)}else l=sh(s,t,e,a,r);return fr(l)}ec=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var s=Fn(t.pendingLanes);s!==0&&(fi(t,s|1),ke(t,G()),!(L&6)&&(yn=G()+500,wt()))}break;case 13:Wt(function(){var r=Je(e,1);if(r!==null){var a=he();Ie(r,e,1,a)}}),qi(e,1)}};gi=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var s=he();Ie(t,e,134217728,s)}qi(e,134217728)}};tc=function(e){if(e.tag===13){var t=ft(e),s=Je(e,t);if(s!==null){var r=he();Ie(s,e,t,r)}qi(e,t)}};nc=function(){return M};sc=function(e,t){var s=M;try{return M=e,t()}finally{M=s}};wa=function(e,t,s){switch(t){case"input":if(ga(e,s),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<s.length;t++){var r=s[t];if(r!==e&&r.form===e.form){var a=kr(r);if(!a)throw Error(N(90));Fo(r),ga(r,a)}}}break;case"textarea":Lo(e,s);break;case"select":t=s.value,t!=null&&an(e,!!s.multiple,t,!1)}};Uo=Ui;Vo=Wt;var rh={usingClientEntryPoint:!1,Events:[ps,Zt,kr,Oo,Ho,Ui]},zn={findFiberByHostInstance:zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ah={bundleType:zn.bundleType,version:zn.version,rendererPackageName:zn.rendererPackageName,rendererConfig:zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Go(e),e===null?null:e.stateNode},findFiberByHostInstance:zn.findFiberByHostInstance||nh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var As=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!As.isDisabled&&As.supportsFiber)try{xr=As.inject(ah),Ve=As}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rh;Ce.createPortal=function(e,t){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yi(t))throw Error(N(200));return th(e,t,null,s)};Ce.createRoot=function(e,t){if(!Yi(e))throw Error(N(299));var s=!1,r="",a=Sd;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Gi(e,1,!1,null,null,s,!1,r,a),e[Ze]=t.current,Jn(e.nodeType===8?e.parentNode:e),new Qi(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Go(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Wt(e)};Ce.hydrate=function(e,t,s){if(!Br(t))throw Error(N(200));return zr(null,e,t,!0,s)};Ce.hydrateRoot=function(e,t,s){if(!Yi(e))throw Error(N(405));var r=s!=null&&s.hydratedSources||null,a=!1,i="",l=Sd;if(s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(i=s.identifierPrefix),s.onRecoverableError!==void 0&&(l=s.onRecoverableError)),t=Nd(t,null,e,1,s??null,a,!1,i,l),e[Ze]=t.current,Jn(e),r)for(e=0;e<r.length;e++)s=r[e],a=s._getVersion,a=a(s._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[s,a]:t.mutableSourceEagerHydrationData.push(s,a);return new Tr(t)};Ce.render=function(e,t,s){if(!Br(t))throw Error(N(200));return zr(null,e,t,!1,s)};Ce.unmountComponentAtNode=function(e){if(!Br(e))throw Error(N(40));return e._reactRootContainer?(Wt(function(){zr(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};Ce.unstable_batchedUpdates=Ui;Ce.unstable_renderSubtreeIntoContainer=function(e,t,s,r){if(!Br(s))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return zr(e,t,s,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function Cd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cd)}catch(e){console.error(e)}}Cd(),Co.exports=Ce;var ih=Co.exports,co=ih;ca.createRoot=co.createRoot,ca.hydrateRoot=co.hydrateRoot;const uo={en:{languageName:"English",getStarted:"Get Started",headline:"Connect. Collect. Recycle.",subheadline:"A smart way to sell e-waste, earn better and build a cleaner future.",betterPrices:"Better Prices",betterPricesDesc:"Know fair rates in real-time",easyPickups:"Easy Pickups",easyPickupsDesc:"Schedule pickups at your convenience",safeTrusted:"Safe & Trusted",safeTrustedDesc:"Verified partners and secure deals",chooseLanguage:"Choose a Language",continue:"Continue",skip:"Skip",enterMobile:"Enter your mobile number",otpSubtitle:"We'll send you an OTP to verify your number",mobilePlaceholder:"Enter mobile number",termsText:"By continuing, you accept the",termsOfService:"Terms of Service",privacyPolicy:"Privacy Policy",contentPolicy:"Content Policy",verifyOtpTitle:"Enter 4-Digit OTP",verifyOtpSubtitle:"OTP sent to +91 ",verify:"Verify & Proceed",resendOtp:"Resend OTP in 30s",whatsYourLocation:"What's your location?",locationSubtitle:"Sharing location permission helps us locate a Partner near you",findNearbyPartners:"Find nearby partners",findNearbyPartnersDesc:"We'll show partners closest to you",fasterPickups:"Faster pickups",fasterPickupsDesc:"Help us reduce travel time & reach you faster",securePrivate:"Secure & private",securePrivateDesc:"Your location is safe and never shared publicly",useCurrentLocation:"Use Current Location",searchLocationManually:"Search Location Manually",allowNotificationsTitle:"Allow Notifications and Pickup alerts",realtimePartnerUpdates:"Real-time Partner Updates",realtimePartnerUpdatesDesc:"Get notified about partner allocation, arrival and more",offersAndNews:"Offers and news",offersAndNewsDesc:"Be the first to know about our offers and new features",allowPermission:"Allow Permission",maybeLater:"Maybe Later",setupComplete:"Setup Complete!",setupCompleteDesc:"You have completed the onboarding flow.",restartFlow:"Restart Prototype Flow",tagline:"Cleaner today, greener tomorrow",hiGreeting:"Hi",readyToday:"Ready to make a difference today?",syncPending:"Sync",slide0Title:`Hassle-free
Scrap Collection`,slide0Subtitle:`Schedule your
pickup in seconds.`,slide0Btn:"Request Pickup",slide0Tag:"Verified Fleet",slide1Title:`Instant AI
Rate Discovery`,slide1Subtitle:`Scan circuit boards &
get fair market cash.`,slide1Btn:"Scan Now",slide1Tag:"AI Powered",slide2Title:`Highest Payout
Guaranteed`,slide2Subtitle:`CPCB authorized partners
with zero middlemen.`,slide2Btn:"View Rates",slide2Tag:"Best Rates",sellScrap:"Sell Scrap",sellScrapDesc:"Get the best price",eWasteCollection:`E-Waste
Collection`,eWasteDesc:"Pickup at your doorstep",myEarnings:"My Earnings",myEarningsDesc:"Track your income",viewHistory:"View History",viewHistoryDesc:"Track your activity",marketTrends:"Market Trends",marketTrendsDesc:"See what's in demand today",tabHome:"Home",tabBookings:"Bookings",tabScan:"Scan",tabRates:"Rates",tabProfile:"Profile",tabCamera:"Camera",bookingsTitle:"Book a Pickup",bookingActive:"Active",bookingAll:"All",bookingCompleted:"Completed",noBookings:"No bookings yet",noBookingsDesc:"Start your first pickup request today",bookPickup:"Book a Pickup",driverArriving:"Driver Arriving",mins:"mins",estPayout:"Est. Payout",trackDriver:"Track Driver",viewReceipt:"View Receipt",selectPickupDate:"Select Pickup Date",availableKabadiwalas:"Available Kabadiwalas",nearbyBadge:"nearby",verifiedBadge:"Verified",buysLabel:"Buys:",fullyBooked:"Fully Booked",bookPickupBtn:"Book Pickup →",selectTimeSlot:"Select Time Slot",scrapMaterialsForPickup:"Scrap Materials for Pickup",pickupLocation:"Pickup Location",defaultSavedAddress:"Default Saved Address",confirmDoorstepPickup:"Confirm Doorstep Pickup",selectServiceZone:"Select Service Zone",nextScheduledPickup:"Next Scheduled Pickup",confirmedStatus:"Confirmed",todayLabel:"Today",tomorrowLabel:"Tomorrow",todayRates:"Today's Rates",ratePerKg:"Rate / kg",scrapCategories:"Scrap Categories",currentRatesNearYou:"Current scrap rates near you",updatedToday:"Updated today • Based on recent local transactions",basedOnLocalTx:"Based on the last 42 local transactions",pricesMayVary:"Prices may vary by condition, quantity and buyer.",marketTrend7Day:"7-Day Market Trend",currentPrice:"Current",sellNowPrefix:"Sell",sellNowSuffix:"Now →",allCategories:"All",ewaste:"E-Waste",metals:"Metals",batteries:"Batteries",highValue:"High Value",itemPcb:"PCB",itemPcbSub:"Circuit Board",itemCables:"Cables & Wires",itemBattery:"Car Battery",itemCrtTv:"CRT TV",itemLcd:"LCD Display",itemMotor:"Motor & Magnet",itemPlastic:"Mixed Plastic",itemOther:"Other Items",motherboards:"Motherboards (Grade A)",copperWiring:"Copper Wiring (Clean)",lithiumBatteries:"Lithium-Ion Batteries",telecomPCBs:"Telecom & Server PCBs",mixedMobile:"Mixed Mobile Scrap",aluminium:"Aluminium Heatsinks",trackEarningsDesc:"Track what you've earned from your scrap",thisWeek:"This Week",comparedToLastWeek:"compared to last week",recentTransactions:"Recent Transactions",viewAll:"View all",viewAllTransactions:"View all transactions",weightCollected:"Weight Collected:",settledPayout:"Settled Payout:",receivedStatus:"Received",pendingStatus:"Pending",profileTitle:"My Profile",profileDetails:"Profile Details",profileDetailsDesc:"View and update your personal details",address:"Address",addressDesc:"Manage your delivery and pickup address",language:"Language",languageDesc:"Choose your preferred language",syncDetails:"Sync Details",syncDetailsDesc:"Sync your data across devices",safetyHazards:"Safety & Hazards",safetyHazardsDesc:"Learn about safety guidelines for e-waste",appSettings:"App Settings",appSettingsDesc:"Notifications, sound effects and privacy",helpSupport:"Help & Support",helpSupportDesc:"Get help for your queries and pickups",logout:"Log Out",logoutDesc:"Sign out from Kabadiwala Connect",totalEarned:"Total Earned",lotsCompleted:"Lots Completed",kgRecycled:"kg Recycled",editProfile:"Edit Profile",save:"Save",cancel:"Cancel",name:"Full Name",phone:"Phone Number",addressLine1:"Address Line 1",area:"Area / Locality",pincode:"Pincode",notifications:"Push Notifications",audioGuidance:"Audio Guidance",autoSync:"Auto-sync on Wi-Fi",smsAlerts:"SMS Alerts",profileSaved:"Profile details updated!",addressSaved:"Pickup address saved successfully!",historyTitle:"My Lots",historyAll:"All",historyActive:"Active",historyCompleted:"Completed",filterBy:"Filter",lotDetails:"Lot Details",buyer:"Buyer",paymentMode:"Payment Mode",weight:"Weight",rate:"Rate",totalAmount:"Total Amount",status:"Status",notes:"Inspector Notes",downloadReceipt:"Download Receipt",raiseDispute:"Raise Dispute",statusCompleted:"Completed",statusHandedOver:"Handed Over",statusListed:"Listed",statusDisputed:"Disputed",statusCancelled:"Cancelled",takePhotoTitle:"Take a photo of your scrap",takePhotoSub:"Make sure the item is clearly visible",stepPhoto:"Photo",stepCategory:"Category",stepWeight:"Weight",stepValue:"Value",stepBuyer:"Buyer",positionScrapHint:"Position your scrap within the frame",flashLabel:"Flash",flashOn:"On",flashOff:"Off",galleryLabel:"Gallery",gallerySub:"Choose from photos",tipClearPhotoTitle:"Take a clear photo",tipClearPhotoDesc:"Good lighting and a clear view helps get a better price.",hazardDetectedTitle:"Hazardous item detected",hazardDetectedDesc:"A battery has been detected in your image. Please follow the safety guidelines below.",detectedItemTag:"Detected item",lithiumIonBattery:"Lithium-ion Battery",lithiumBatteryDesc:"Common in laptops, phones and other electronics.",safetyGuidelinesTitle:"Safety guidelines",keepAwayHeatTitle:"Keep away from heat and fire",keepAwayHeatDesc:"Do not expose batteries to high temperatures.",handleCareTitle:"Handle with care",handleCareDesc:"Avoid handling damaged or leaking batteries directly.",disposeSafelyTitle:"Dispose safely",disposeSafelyDesc:"Keep in a dry place and hand over to a verified collector or recycler.",batteryDetectedBanner:"Battery detected",gotItBtn:"Got it",selectCategoryTitle:"Select Scrap Category",capturedPhotoTitle:"Captured Photo",capturedPhotoSub:"Tap to retake or change",changeBtn:"Change",whatTypeOfScrap:"What type of scrap is this?",chooseClosestCategory:"Choose the closest category.",nextBtn:"Next",enterWeightTitle:"Enter Weight",selectedCategoryLabel:"Selected Category",howMuchWeigh:"How much does it weigh?",enterWeightSub:"Enter the weight of your scrap",inStepsHint:"in 0.5 kg steps",orDivider:"OR",connectScaleTitle:"Connect Scale",connectScaleSub:"Pair your Bluetooth weighing scale",searchingScale:"Searching for scale...",scalePairedTitle:"Smart Scale Connected",scalePairedLive:"Live auto-synced: 4.8 kg",pairingBluetooth:"Pairing via Bluetooth...",quickSelectTitle:"Quick Select",quickSelectSub:"Choose an approximate weight",lightlyFilled:"Lightly filled",halfFilled:"Half filled",fullyFilled:"Fully filled",continueBtn:"Continue",estimatedValueTitle:"Estimated Value",yourEstimatedValue:"YOUR ESTIMATED VALUE",basedOnWeightScrap:"Based on",listenToValue:"Listen to value",playingAudio:"Playing audio...",viewBreakdown:"View breakdown",baseMarketRate:"Base Market Rate",highGradeBonus:"High Grade E-Waste Bonus",effectiveRate:"Effective Verified Rate",aboveStreetRateTitle:"above street rate",gettingBetterPrice:"You're getting a better price!",findABuyerBtn:"Find a Buyer",compareOffersSub:"Compare offers from verified buyers near you.",chooseBuyerTitle:"Choose a Buyer",bestBuyersTitle:"Best buyers for you",bestBuyersSub:"Compared by price, distance and reliability.",bestMatchBadge:"BEST MATCH",bestPriceLabel:"Best price",cpcbVerified:"CPCB Verified",verifiedRecyclersNotice:"All listed buyers are verified recyclers.",selectedLabel:"Selected:",selectAndSellBtn:"Select & Sell",paymentTitle:"Payment",amountToReceive:"Amount to receive",fullPaymentSub:"Full payment",howReceivedPayment:"How did you receive the payment?",cashMethod:"Cash",upiMethod:"UPI",scanToPay:"Scan to pay",useAnyUpi:"Use any UPI app",sharePaymentRequest:"Share payment request",linkCopiedToast:"Link Copied!",cashReceivedTitle:"Cash received",markAfterCash:"Mark this after receiving the cash.",paymentAmountLabel:"Payment amount",editBtn:"Edit",confirmPaymentBtn:"Confirm Payment",confirmWarning:"Confirm only after receiving the payment.",receiptTitle:"Receipt",transactionReceipt:"Transaction Receipt",recycleTagline:"Recycle Today, Better Tomorrow",paidToSection:"Paid To",govtAuthorisedPill:"Government Authorised",authIdPrefix:"Authorization ID:",itemDetailsSection:"Item Details",itemDetailsSub:"Cables, chargers, circuit board etc.",totalWeightStat:"Total Weight",ratePerKgStat:"Rate (per kg)",totalAmountStat:"Total Amount",paymentDetailsSection:"Payment Details",paymentMethodLabel:"Payment Method",transactionIdLabel:"Transaction ID",paymentStatusLabel:"Payment Status",paymentReceivedStatus:"Payment Received",thankYouRecyclingTitle:"Thank you for recycling!",cleanerIndiaSub:"You're helping build a cleaner, greener India.",keepRecyclingMotto:"KEEP RECYCLING, KEEP MAKING A DIFFERENCE",downloadBillBtn:"Download Bill",downloadedBtn:"Downloaded!",generatingBtn:"Generating...",shareBillBtn:"Share Bill",copiedLinkBtn:"Copied Link!",doneBtn:"Done",safetyTitle:"Safety Tips",safetySubtitle:"Important guidelines before you proceed",safetyTipsHeading:"A quick safety tip",beforeHandoverSub:"Before handing over your battery",keepAwayHeatHeading:"Keep batteries away from heat",keepAwayHeatBody:"Store them in a cool, dry place until pickup. Never expose lithium or lead-acid batteries to direct sunlight or open fire.",coolDryArea:"Cool & dry indoor area",directHeatFlames:"Direct heat & flames",leakPreventionTitle:"Prevent acid contact",leakPreventionSub:"Keep terminals upright and dry",checkTerminalHeading:"Check for terminal leaks or cracks",checkTerminalBody:"Place battery in an upright position. If liquid is present on casing, avoid skin contact and keep away from paper scrap.",uprightOrientation:"Upright orientation",tiltedUpsideDown:"Tilted or upside down",certifiedRecyclingTitle:"Certified Recycling",govtAuthHandlerSub:"Government authorized handler pickup",handOverVerifiedHeading:"Hand over only to verified recyclers",handOverVerifiedBody:"Your assigned buyer GreenCycle has CPCB certified battery handling protocol and calibrated weight scales.",cpcbBuyer:"CPCB Certified Buyer",informalBurning:"Informal burning or dumping",listenBtn:"Listen",nextTipBtn:"Next Tip",gotItSafetyBtn:"Got it",remindMeLaterBtn:"Remind me later",syncTitle:"Sync Status",syncSubtitle:"Offline storage & automatic cloud sync",onlineSynced:"Online • Synced",lotsWaitingSync:"Lots Waiting",allLotsSyncedTitle:"All Lots Synced",allLotsSyncedDesc:"Great news! All your saved scrap lots have been safely synced to the cloud server.",offlineNoticeDesc:"You're offline, but everything is saved. We'll sync automatically when you're back online.",recentlySyncedLots:"Recently Synced Lots",lotsWaitingToSync:"Lots Waiting to Sync",dataSafeTitle:"Your data is safe",dataSafeDesc:"All photos, GPS tags, scale readings and buyer settlements are securely cached on this device with end-to-end cryptographic integrity.",syncingWithServer:"Syncing with Server...",syncAgainBtn:"Sync Again",trySyncingAgainBtn:"Try syncing again",syncedBadge:"Synced",waitingBadge:"Waiting",cachedWeightLabel:"Cached Weight:",calculatedRateLabel:"Calculated Rate:",assignedRecyclerLabel:"Assigned Recycler:",pendingPayoutLabel:"Pending Payout:",syncStatusLabel:"Sync Status:",cloudVerifiedText:"● Cloud Verified",queuedInCacheText:"🕒 Queued in Local Cache",closeBtn:"Close",close:"Close",confirm:"Confirm",edit:"Edit",delete:"Delete",search:"Search",loading:"Loading...",error:"Something went wrong",retry:"Retry",noData:"No data available",back:"Back",done:"Done"},hi:{languageName:"हिंदी",getStarted:"शुरू करें",headline:"जोड़ें. एकत्र करें. रीसायकल करें.",subheadline:"ई-कचरा बेचने, बेहतर कमाने और स्वच्छ भविष्य बनाने का स्मार्ट तरीका।",betterPrices:"बेहतर दरें",betterPricesDesc:"वास्तविक समय में उचित दरें जानें",easyPickups:"आसान पिकअप",easyPickupsDesc:"अपनी सुविधा अनुसार पिकअप शेड्यूल करें",safeTrusted:"सुरक्षित और विश्वसनीय",safeTrustedDesc:"सत्यापित भागीदार और सुरक्षित सौदे",chooseLanguage:"भाषा चुनें",continue:"आगे बढ़ें",skip:"छोड़ें",enterMobile:"अपना मोबाइल नंबर दर्ज करें",otpSubtitle:"हम आपका नंबर सत्यापित करने के लिए एक ओटीपी भेजेंगे",mobilePlaceholder:"मोबाइल नंबर दर्ज करें",termsText:"जारी रखकर, आप स्वीकार करते हैं",termsOfService:"सेवा की शर्तें",privacyPolicy:"गोपनीयता नीति",contentPolicy:"सामग्री नीति",verifyOtpTitle:"4-अंकों का ओटीपी दर्ज करें",verifyOtpSubtitle:"ओटीपी +91 पर भेजा गया ",verify:"सत्यापित करें और आगे बढ़ें",resendOtp:"30 सेकंड में पुनः ओटीपी भेजें",whatsYourLocation:"आपका स्थान क्या है?",locationSubtitle:"स्थान की अनुमति साझा करने से हमें आपके निकटतम भागीदार को खोजने में मदद मिलती है",findNearbyPartners:"पास के भागीदार खोजें",findNearbyPartnersDesc:"हम आपके निकटतम भागीदार दिखाएंगे",fasterPickups:"तेज़ पिकअप",fasterPickupsDesc:"यात्रा समय कम करने और आप तक तेज़ी से पहुँचने में मदद करता है",securePrivate:"सुरक्षित और निजी",securePrivateDesc:"आपका स्थान सुरक्षित है और कभी सार्वजनिक रूप से साझा नहीं किया जाता है",useCurrentLocation:"वर्तमान स्थान का उपयोग करें",searchLocationManually:"स्थान मैन्युअल रूप से खोजें",allowNotificationsTitle:"सूचनाएं और पिकअप अलर्ट की अनुमति दें",realtimePartnerUpdates:"रियल-टाइम पार्टनर अपडेट",realtimePartnerUpdatesDesc:"पार्टनर आवंटन, आगमन और अधिक के बारे में सूचित रहें",offersAndNews:"ऑफ़र और समाचार",offersAndNewsDesc:"हमारे ऑफ़र और नई सुविधाओं के बारे में सबसे पहले जानें",allowPermission:"अनुमति दें",maybeLater:"शायद बाद में",setupComplete:"सेटअप पूरा हुआ!",setupCompleteDesc:"आपने ऑनबोर्डिंग प्रक्रिया पूरी कर ली है।",restartFlow:"प्रोटोटाइप प्रवाह पुनः शुरू करें",tagline:"आज स्वच्छ, कल हरा-भरा",hiGreeting:"नमस्ते",readyToday:"आज कुछ बदलाव करने के लिए तैयार हैं?",syncPending:"सिंक",slide0Title:`झंझट-मुक्त
कबाड़ संग्रह`,slide0Subtitle:`सेकंडों में अपना
पिकअप शेड्यूल करें।`,slide0Btn:"पिकअप बुक करें",slide0Tag:"सत्यापित फ्लीट",slide1Title:`तत्काल AI
दर खोज`,slide1Subtitle:`सर्किट बोर्ड स्कैन करें
और उचित बाजार दर पाएं।`,slide1Btn:"अभी स्कैन करें",slide1Tag:"AI संचालित",slide2Title:`सर्वाधिक भुगतान
गारंटीकृत`,slide2Subtitle:`CPCB अधिकृत भागीदार
बिना बिचौलिए के।`,slide2Btn:"दरें देखें",slide2Tag:"सबसे अच्छी दरें",sellScrap:"कबाड़ बेचें",sellScrapDesc:"सबसे अच्छी कीमत पाएं",eWasteCollection:`ई-कचरा
संग्रह`,eWasteDesc:"आपके दरवाजे पर पिकअप",myEarnings:"मेरी कमाई",myEarningsDesc:"अपनी आय ट्रैक करें",viewHistory:"इतिहास देखें",viewHistoryDesc:"अपनी गतिविधि ट्रैक करें",marketTrends:"बाजार के रुझान",marketTrendsDesc:"देखें आज क्या मांग में है",tabHome:"होम",tabBookings:"बुकिंग",tabScan:"स्कैन",tabRates:"दरें",tabProfile:"प्रोफ़ाइल",tabCamera:"कैमरा",bookingsTitle:"पिकअप बुक करें",bookingActive:"सक्रिय",bookingAll:"सभी",bookingCompleted:"पूर्ण",noBookings:"अभी तक कोई बुकिंग नहीं",noBookingsDesc:"आज अपना पहला पिकअप अनुरोध शुरू करें",bookPickup:"पिकअप बुक करें",driverArriving:"ड्राइवर आ रहा है",mins:"मिनट",estPayout:"अनुमानित भुगतान",trackDriver:"ड्राइवर ट्रैक करें",viewReceipt:"रसीद देखें",selectPickupDate:"पिकअप तिथि चुनें",availableKabadiwalas:"उपलब्ध कबाड़ीवाले",nearbyBadge:"पास में",verifiedBadge:"सत्यापित",buysLabel:"खरीदते हैं:",fullyBooked:"पूरी तरह बुक",bookPickupBtn:"पिकअप बुक करें →",selectTimeSlot:"समय स्लॉट चुनें",scrapMaterialsForPickup:"पिकअप के लिए कबाड़ सामग्री",pickupLocation:"पिकअप स्थान",defaultSavedAddress:"डिफ़ॉल्ट सहेजा गया पता",confirmDoorstepPickup:"डोरस्टेप पिकअप की पुष्टि करें",selectServiceZone:"सेवा क्षेत्र चुनें",nextScheduledPickup:"अगला निर्धारित पिकअप",confirmedStatus:"पुष्टीकृत",todayLabel:"आज",tomorrowLabel:"कल",todayRates:"आज की दरें",ratePerKg:"दर / किलो",scrapCategories:"कबाड़ श्रेणियां",currentRatesNearYou:"आपके पास वर्तमान कबाड़ दरें",updatedToday:"आज अपडेट किया गया • हाल के स्थानीय लेनदेन पर आधारित",basedOnLocalTx:"पिछले 42 स्थानीय सौदों पर आधारित",pricesMayVary:"मूल्य स्थिति, मात्रा और खरीदार के अनुसार भिन्न हो सकते हैं।",marketTrend7Day:"7-दिवसीय बाजार रुझान",currentPrice:"वर्तमान",sellNowPrefix:"अभी",sellNowSuffix:"बेचें →",allCategories:"सभी",ewaste:"ई-कचरा",metals:"धातु",batteries:"बैटरी",highValue:"उच्च मूल्य",itemPcb:"PCB",itemPcbSub:"सर्किट बोर्ड",itemCables:"केबल्स और तार",itemBattery:"कार बैटरी",itemCrtTv:"CRT टीवी",itemLcd:"LCD डिस्प्ले",itemMotor:"मोटर और चुंबक",itemPlastic:"मिश्रित प्लास्टिक",itemOther:"अन्य वस्तुएं",motherboards:"मदरबोर्ड (ग्रेड A)",copperWiring:"कॉपर वायरिंग (स्वच्छ)",lithiumBatteries:"लिथियम-आयन बैटरी",telecomPCBs:"टेलीकॉम और सर्वर PCB",mixedMobile:"मिश्रित मोबाइल स्क्रैप",aluminium:"एल्युमीनियम हीटसिंक",trackEarningsDesc:"अपने कबाड़ से हुई कमाई को ट्रैक करें",thisWeek:"इस सप्ताह",comparedToLastWeek:"पिछले सप्ताह की तुलना में",recentTransactions:"हाल के लेनदेन",viewAll:"सभी देखें",viewAllTransactions:"सभी लेनदेन देखें",weightCollected:"एकत्रित वजन:",settledPayout:"भुगतान राशि:",receivedStatus:"प्राप्त",pendingStatus:"लंबित",profileTitle:"मेरी प्रोफ़ाइल",profileDetails:"प्रोफ़ाइल विवरण",profileDetailsDesc:"अपना व्यक्तिगत विवरण देखें और अपडेट करें",address:"पता",addressDesc:"अपना डिलीवरी और पिकअप पता प्रबंधित करें",language:"भाषा",languageDesc:"अपनी पसंदीदा भाषा चुनें",syncDetails:"सिंक विवरण",syncDetailsDesc:"सभी उपकरणों पर अपना डेटा सिंक करें",safetyHazards:"सुरक्षा और खतरे",safetyHazardsDesc:"ई-कचरे के लिए सुरक्षा दिशानिर्देश जानें",appSettings:"ऐप सेटिंग",appSettingsDesc:"सूचनाएं, ध्वनि प्रभाव और गोपनीयता",helpSupport:"सहायता और समर्थन",helpSupportDesc:"अपने प्रश्नों और पिकअप के लिए सहायता प्राप्त करें",logout:"लॉग आउट",logoutDesc:"Kabadiwala Connect से साइन आउट करें",totalEarned:"कुल कमाई",lotsCompleted:"लॉट पूर्ण",kgRecycled:"किलो रीसायकल",editProfile:"प्रोफ़ाइल संपादित करें",save:"सहेजें",cancel:"रद्द करें",name:"पूरा नाम",phone:"फ़ोन नंबर",addressLine1:"पता पंक्ति 1",area:"क्षेत्र / इलाका",pincode:"पिनकोड",notifications:"पुश सूचनाएं",audioGuidance:"ऑडियो मार्गदर्शन",autoSync:"Wi-Fi पर स्वतः-सिंक",smsAlerts:"SMS अलर्ट",profileSaved:"प्रोफ़ाइल विवरण अपडेट किया गया!",addressSaved:"पिकअप पता सफलतापूर्वक सहेजा गया!",historyTitle:"मेरे लॉट",historyAll:"सभी",historyActive:"सक्रिय",historyCompleted:"पूर्ण",filterBy:"फ़िल्टर",lotDetails:"लॉट विवरण",buyer:"खरीदार",paymentMode:"भुगतान मोड",weight:"वजन",rate:"दर",totalAmount:"कुल राशि",status:"स्थिति",notes:"निरीक्षक नोट्स",downloadReceipt:"रसीद डाउनलोड करें",raiseDispute:"विवाद उठाएं",statusCompleted:"पूर्ण",statusHandedOver:"सौंप दिया",statusListed:"सूचीबद्ध",statusDisputed:"विवादित",statusCancelled:"रद्द",takePhotoTitle:"अपने कबाड़ की फोटो लें",takePhotoSub:"सुनिश्चित करें कि वस्तु स्पष्ट रूप से दिखाई दे",stepPhoto:"फोटो",stepCategory:"श्रेणी",stepWeight:"वजन",stepValue:"मूल्य",stepBuyer:"खरीदार",positionScrapHint:"कबाड़ को फ्रेम के अंदर रखें",flashLabel:"फ्लैश",flashOn:"चालू",flashOff:"बंद",galleryLabel:"गैलरी",gallerySub:"फोटो से चुनें",tipClearPhotoTitle:"स्पष्ट फोटो लें",tipClearPhotoDesc:"अच्छी रोशनी और स्पष्ट दृश्य से बेहतर कीमत मिलती है।",hazardDetectedTitle:"खतरनाक वस्तु पाई गई",hazardDetectedDesc:"आपकी छवि में एक बैटरी पाई गई है। कृपया नीचे दिए गए सुरक्षा दिशानिर्देशों का पालन करें।",detectedItemTag:"पहचानी गई वस्तु",lithiumIonBattery:"लिथियम-आयन बैटरी",lithiumBatteryDesc:"लैपटॉप, फोन और अन्य इलेक्ट्रॉनिक्स में सामान्य।",safetyGuidelinesTitle:"सुरक्षा दिशानिर्देश",keepAwayHeatTitle:"गर्मी और आग से दूर रखें",keepAwayHeatDesc:"बैटरियों को उच्च तापमान के संपर्क में न लाएं।",handleCareTitle:"सावधानी से संभालें",handleCareDesc:"क्षतिग्रस्त या लीक हो रही बैटरियों को सीधे छूने से बचें।",disposeSafelyTitle:"सुरक्षित निपटान करें",disposeSafelyDesc:"सूखी जगह पर रखें और सत्यापित रीसाइक्लर को सौंपें।",batteryDetectedBanner:"बैटरी पहचानी गई",gotItBtn:"समझ गया",selectCategoryTitle:"कबाड़ श्रेणी चुनें",capturedPhotoTitle:"ली गई फोटो",capturedPhotoSub:"फिर से लेने या बदलने के लिए टैप करें",changeBtn:"बदलें",whatTypeOfScrap:"यह किस प्रकार का कबाड़ है?",chooseClosestCategory:"निकटतम श्रेणी चुनें।",nextBtn:"आगे बढ़ें",enterWeightTitle:"वजन दर्ज करें",selectedCategoryLabel:"चयनित श्रेणी",howMuchWeigh:"इसका वजन कितना है?",enterWeightSub:"अपने कबाड़ का वजन दर्ज करें",inStepsHint:"0.5 किलो के चरणों में",orDivider:"या",connectScaleTitle:"वजन कांटा जोड़ें",connectScaleSub:"अपना ब्लूटूथ वेइंग स्केल पेयर करें",searchingScale:"कांटा खोजा जा रहा है...",scalePairedTitle:"स्मार्ट कांटा जुड़ा हुआ है",scalePairedLive:"लाइव सिंक: 4.8 किलो",pairingBluetooth:"ब्लूटूथ से कनेक्ट हो रहा है...",quickSelectTitle:"त्वरित चयन",quickSelectSub:"अनुमानित वजन चुनें",lightlyFilled:"हल्का भरा हुआ",halfFilled:"आधा भरा हुआ",fullyFilled:"पूरा भरा हुआ",continueBtn:"जारी रखें",estimatedValueTitle:"अनुमानित मूल्य",yourEstimatedValue:"आपका अनुमानित मूल्य",basedOnWeightScrap:"आधारित",listenToValue:"मूल्य सुनें",playingAudio:"ऑडियो बज रहा है...",viewBreakdown:"विवरण देखें",baseMarketRate:"मूल बाजार दर",highGradeBonus:"उच्च ग्रेड ई-कचरा बोनस",effectiveRate:"प्रभावी सत्यापित दर",aboveStreetRateTitle:"बाजार भाव से अधिक",gettingBetterPrice:"आपको बेहतर कीमत मिल रही है!",findABuyerBtn:"खरीदार खोजें",compareOffersSub:"अपने पास के सत्यापित खरीदारों के ऑफ़र की तुलना करें।",chooseBuyerTitle:"खरीदार चुनें",bestBuyersTitle:"आपके लिए सर्वश्रेष्ठ खरीदार",bestBuyersSub:"कीमत, दूरी और विश्वसनीयता के आधार पर तुलना।",bestMatchBadge:"सर्वश्रेष्ठ मैच",bestPriceLabel:"सर्वोत्तम मूल्य",cpcbVerified:"CPCB सत्यापित",verifiedRecyclersNotice:"सभी सूचीबद्ध खरीदार सत्यापित रीसाइक्लर हैं।",selectedLabel:"चयनित:",selectAndSellBtn:"चुनें और बेचें",paymentTitle:"भुगतान",amountToReceive:"प्राप्त करने योग्य राशि",fullPaymentSub:"पूर्ण भुगतान",howReceivedPayment:"आपको भुगतान कैसे प्राप्त हुआ?",cashMethod:"नकद",upiMethod:"UPI",scanToPay:"भुगतान के लिए स्कैन करें",useAnyUpi:"किसी भी UPI ऐप का उपयोग करें",sharePaymentRequest:"भुगतान अनुरोध साझा करें",linkCopiedToast:"लिंक कॉपी किया गया!",cashReceivedTitle:"नकद प्राप्त हुआ",markAfterCash:"नकद प्राप्त होने के बाद इसे चिह्नित करें।",paymentAmountLabel:"भुगतान राशि",editBtn:"संपादित करें",confirmPaymentBtn:"भुगतान की पुष्टि करें",confirmWarning:"भुगतान प्राप्त होने के बाद ही पुष्टि करें।",receiptTitle:"रसीद",transactionReceipt:"लेनदेन रसीद",recycleTagline:"आज रीसायकल करें, बेहतर कल बनाएं",paidToSection:"भुगतान प्राप्तकर्ता",govtAuthorisedPill:"सरकार द्वारा अधिकृत",authIdPrefix:"प्राधिकरण आईडी:",itemDetailsSection:"वस्तु विवरण",itemDetailsSub:"केबल्स, चार्जर, सर्किट बोर्ड आदि",totalWeightStat:"कुल वजन",ratePerKgStat:"दर (प्रति किलो)",totalAmountStat:"कुल राशि",paymentDetailsSection:"भुगतान विवरण",paymentMethodLabel:"भुगतान विधि",transactionIdLabel:"लेनदेन आईडी",paymentStatusLabel:"भुगतान स्थिति",paymentReceivedStatus:"भुगतान प्राप्त",thankYouRecyclingTitle:"रीसाइक्लिंग के लिए धन्यवाद!",cleanerIndiaSub:"आप स्वच्छ और हरित भारत बनाने में मदद कर रहे हैं।",keepRecyclingMotto:"रीसायकल करते रहें, बदलाव लाते रहें",downloadBillBtn:"बिल डाउनलोड करें",downloadedBtn:"डाउनलोड हो गया!",generatingBtn:"तैयार हो रहा है...",shareBillBtn:"बिल साझा करें",copiedLinkBtn:"लिंक कॉपी किया!",doneBtn:"हो गया",safetyTitle:"सुरक्षा सुझाव",safetySubtitle:"आगे बढ़ने से पहले महत्वपूर्ण दिशानिर्देश",safetyTipsHeading:"एक त्वरित सुरक्षा सुझाव",beforeHandoverSub:"अपनी बैटरी सौंपने से पहले",keepAwayHeatHeading:"बैटरियों को गर्मी से दूर रखें",keepAwayHeatBody:"पिकअप तक उन्हें ठंडी, सूखी जगह पर रखें। लिथियम या लेड-एसिड बैटरी को कभी भी सीधी धूप या खुली आग में न रखें।",coolDryArea:"ठंडा और सूखा इनडोर क्षेत्र",directHeatFlames:"सीधी गर्मी और लपटें",leakPreventionTitle:"एसिड संपर्क से बचें",leakPreventionSub:"टर्मिनलों को सीधा और सूखा रखें",checkTerminalHeading:"टर्मिनल लीक या दरारें जांचें",checkTerminalBody:"बैटरी को सीधी स्थिति में रखें। यदि आवरण पर तरल मौजूद है, तो त्वचा के संपर्क से बचें।",uprightOrientation:"सीधी स्थिति",tiltedUpsideDown:"झुकी या उल्टी",certifiedRecyclingTitle:"प्रमाणित रीसाइक्लिंग",govtAuthHandlerSub:"सरकारी अधिकृत हैंडलर पिकअप",handOverVerifiedHeading:"केवल सत्यापित रीसाइक्लर्स को सौंपें",handOverVerifiedBody:"आपके सौंपे गए खरीदार GreenCycle के पास CPCB प्रमाणित बैटरी हैंडलिंग प्रोटोकॉल है।",cpcbBuyer:"CPCB प्रमाणित खरीदार",informalBurning:"अनौपचारिक रूप से जलाना या फेंकना",listenBtn:"सुनें",nextTipBtn:"अगला सुझाव",gotItSafetyBtn:"समझ गया",remindMeLaterBtn:"बाद में याद दिलाएं",syncTitle:"सिंक स्थिति",syncSubtitle:"ऑफलाइन स्टोरेज और स्वतः क्लाउड सिंक",onlineSynced:"ऑनलाइन • सिंक किया गया",lotsWaitingSync:"लॉट प्रतीक्षारत",allLotsSyncedTitle:"सभी लॉट सिंक हो गए",allLotsSyncedDesc:"बढ़िया खबर! आपके सभी सहेजे गए कबाड़ लॉट सुरक्षित रूप से क्लाउड सर्वर पर सिंक हो गए हैं।",offlineNoticeDesc:"आप ऑफलाइन हैं, लेकिन सब कुछ सहेजा गया है। ऑनलाइन होने पर हम स्वतः सिंक करेंगे।",recentlySyncedLots:"हाल ही में सिंक किए गए लॉट",lotsWaitingToSync:"सिंक होने की प्रतीक्षा में लॉट",dataSafeTitle:"आपका डेटा सुरक्षित है",dataSafeDesc:"सभी फोटो, जीपीएस टैग और वजन माप इस उपकरण पर सुरक्षित रूप से संग्रहीत हैं।",syncingWithServer:"सर्वर के साथ सिंक हो रहा है...",syncAgainBtn:"पुनः सिंक करें",trySyncingAgainBtn:"फिर से सिंक करने का प्रयास करें",syncedBadge:"सिंक हुआ",waitingBadge:"प्रतीक्षारत",cachedWeightLabel:"कैश्ड वजन:",calculatedRateLabel:"परिकलित दर:",assignedRecyclerLabel:"सौंपा गया रीसाइक्लर:",pendingPayoutLabel:"लंबित भुगतान:",syncStatusLabel:"सिंक स्थिति:",cloudVerifiedText:"● क्लाउड सत्यापित",queuedInCacheText:"🕒 स्थानीय कैश में प्रतीक्षारत",closeBtn:"बंद करें",close:"बंद करें",confirm:"पुष्टि करें",edit:"संपादित करें",delete:"हटाएं",search:"खोजें",loading:"लोड हो रहा है...",error:"कुछ गलत हो गया",retry:"पुनः प्रयास करें",noData:"कोई डेटा उपलब्ध नहीं",back:"वापस",done:"हो गया"},mr:{languageName:"मराठी",getStarted:"सुरू करा",headline:"जोडा. गोळा करा. रीसायकल करा.",subheadline:"ई-कचरा विकण्याचा, अधिक कमाई करण्याचा आणि स्वच्छ भविष्य घडवण्याचा स्मार्ट मार्ग.",betterPrices:"उत्तम दर",betterPricesDesc:"रिअल-टाइममध्ये रास्त दर जाणून घ्या",easyPickups:"सोपे पिकअप",easyPickupsDesc:"तुमच्या सोयीनुसार पिकअप शेड्यूल करा",safeTrusted:"सुरक्षित आणि विश्वासार्ह",safeTrustedDesc:"सत्यापित भागीदार आणि सुरक्षित व्यवहार",chooseLanguage:"भाषा निवडा",continue:"पुढे चला",skip:"वगळा",enterMobile:"तुमचा मोबाईल नंबर प्रविष्ट करा",otpSubtitle:"आम्ही तुमचा नंबर पडताळण्यासाठी एक OTP पाठवू",mobilePlaceholder:"मोबाईल नंबर प्रविष्ट करा",termsText:"सुरू ठेवून, तुम्ही स्वीकारता",termsOfService:"सेवा अटी",privacyPolicy:"गोपनीयता धोरण",contentPolicy:"सामग्री धोरण",verifyOtpTitle:"4-अंकी OTP प्रविष्ट करा",verifyOtpSubtitle:"OTP पाठवला +91 ",verify:"पडताळणी करा आणि पुढे जा",resendOtp:"30 सेकंदात पुन्हा पाठवा",whatsYourLocation:"तुमचे स्थान काय आहे?",locationSubtitle:"स्थान परवानगी सामायिक केल्याने आम्हाला तुमच्या जवळील भागीदार शोधण्यात मदत होते",findNearbyPartners:"जवळील भागीदार शोधा",findNearbyPartnersDesc:"आम्ही तुमच्या सर्वात जवळचे भागीदार दाखवू",fasterPickups:"जलद पिकअप",fasterPickupsDesc:"प्रवास वेळ कमी करण्यात आणि तुमच्यापर्यंत जलद पोहोचण्यास मदत करते",securePrivate:"सुरक्षित आणि खाजगी",securePrivateDesc:"तुमचे स्थान सुरक्षित आहे आणि कधीही सार्वजनिकपणे सामायिक केले जात नाही",useCurrentLocation:"सध्याचे स्थान वापरा",searchLocationManually:"स्थान मॅन्युअली शोधा",allowNotificationsTitle:"सूचना आणि पिकअप अ‍ॅलर्टला अनुमती द्या",realtimePartnerUpdates:"रिअल-टाइम पार्टनर अ‍ॅपडेट्स",realtimePartnerUpdatesDesc:"भागीदार वाटप, आगमन आणि अधिक बद्दल सूचना मिळवा",offersAndNews:"ऑफर आणि बातम्या",offersAndNewsDesc:"आमच्या ऑफर आणि नवीन वैशिष्ट्यांबद्दल जाणून घेणारे पहिले व्हा",allowPermission:"परवानगी द्या",maybeLater:"नंतर करूया",setupComplete:"सेटअप पूर्ण झाला!",setupCompleteDesc:"तुम्ही ऑनबोर्डिंग प्रक्रिया पूर्ण केली आहे.",restartFlow:"प्रोटोटाइप प्रवाह पुन्हा सुरू करा",tagline:"आज स्वच्छ, उद्या हिरवे",hiGreeting:"नमस्कार",readyToday:"आज बदल घडवण्यासाठी तयार आहात?",syncPending:"सिंक",slide0Title:`त्रासमुक्त
भंगार संग्रह`,slide0Subtitle:`सेकंदांत तुमचा
पिकअप शेड्यूल करा.`,slide0Btn:"पिकअप बुक करा",slide0Tag:"सत्यापित ताफा",slide1Title:`तत्काळ AI
दर शोध`,slide1Subtitle:`सर्किट बोर्ड स्कॅन करा
आणि बाजारभाव मिळवा.`,slide1Btn:"आत्ता स्कॅन करा",slide1Tag:"AI संचालित",slide2Title:`सर्वाधिक पेमेंट
हमी`,slide2Subtitle:`CPCB अधिकृत भागीदार
दलाल नाही.`,slide2Btn:"दर पाहा",slide2Tag:"सर्वोत्तम दर",sellScrap:"भंगार विका",sellScrapDesc:"सर्वोत्तम किंमत मिळवा",eWasteCollection:`ई-कचरा
संग्रह`,eWasteDesc:"दारावर पिकअप",myEarnings:"माझी कमाई",myEarningsDesc:"तुमचे उत्पन्न ट्रॅक करा",viewHistory:"इतिहास पाहा",viewHistoryDesc:"तुमची क्रिया ट्रॅक करा",marketTrends:"बाजाराचे कल",marketTrendsDesc:"आज काय मागणीत आहे ते पाहा",tabHome:"होम",tabBookings:"बुकिंग",tabScan:"स्कॅन",tabRates:"दर",tabProfile:"प्रोफाइल",tabCamera:"कॅमेरा",bookingsTitle:"पिकअप बुक करा",bookingActive:"सक्रिय",bookingAll:"सर्व",bookingCompleted:"पूर्ण",noBookings:"अजून कोणतीही बुकिंग नाही",noBookingsDesc:"आज तुमची पहिली पिकअप विनंती सुरू करा",bookPickup:"पिकअप बुक करा",driverArriving:"ड्रायव्हर येत आहे",mins:"मिनिटे",estPayout:"अंदाजे पेमेंट",trackDriver:"ड्रायव्हर ट्रॅक करा",viewReceipt:"पावती पाहा",selectPickupDate:"पिकअप तारीख निवडा",availableKabadiwalas:"उपलब्ध भंगारवाले",nearbyBadge:"जवळ",verifiedBadge:"सत्यापित",buysLabel:"खरेदी करतात:",fullyBooked:"पूर्ण बुक",bookPickupBtn:"पिकअप बुक करा →",selectTimeSlot:"वेळ स्लॉट निवडा",scrapMaterialsForPickup:"पिकअपसाठी भंगार साहित्य",pickupLocation:"पिकअप स्थान",defaultSavedAddress:"डीफॉल्ट जतन केलेला पत्ता",confirmDoorstepPickup:"डोअरस्टेप पिकअप निश्चित करा",selectServiceZone:"सेवा क्षेत्र निवडा",nextScheduledPickup:"पुढील नियोजित पिकअप",confirmedStatus:"निश्चित",todayLabel:"आज",tomorrowLabel:"उद्या",todayRates:"आजचे दर",ratePerKg:"दर / किलो",scrapCategories:"भंगार श्रेणी",currentRatesNearYou:"तुमच्या जवळील सध्याचे भंगार दर",updatedToday:"आज अपडेट केले • अलीकडील स्थानिक व्यवहारांवर आधारित",basedOnLocalTx:"मागील 42 स्थानिक व्यवहारांवर आधारित",pricesMayVary:"किंमत स्थिती, प्रमाण आणि खरेदीदारांनुसार बदलू शकतात.",marketTrend7Day:"7-दिवसीय बाजाराचा कल",currentPrice:"सध्याचे",sellNowPrefix:"आता",sellNowSuffix:"विका →",allCategories:"सर्व",ewaste:"ई-कचरा",metals:"धातू",batteries:"बॅटरी",highValue:"उच्च मूल्य",itemPcb:"PCB",itemPcbSub:"सर्किट बोर्ड",itemCables:"केबल्स आणि वायर्स",itemBattery:"कार बॅटरी",itemCrtTv:"CRT टीव्ही",itemLcd:"LCD डिस्प्ले",itemMotor:"मोटार आणि चुंबक",itemPlastic:"मिश्रित प्लास्टिक",itemOther:"इतर वस्तू",motherboards:"मदरबोर्ड (ग्रेड A)",copperWiring:"कॉपर वायरिंग (स्वच्छ)",lithiumBatteries:"लिथियम-आयन बॅटरी",telecomPCBs:"टेलिकॉम आणि सर्व्हर PCB",mixedMobile:"मिश्रित मोबाईल स्क्रॅप",aluminium:"अॅल्युमिनियम हीटसिंक",trackEarningsDesc:"भंगारातून मिळालेली तुमची कमाई ट्रॅक करा",thisWeek:"या आठवड्यात",comparedToLastWeek:"मागील आठवड्याच्या तुलनेत",recentTransactions:"अलीकडील व्यवहार",viewAll:"सर्व पाहा",viewAllTransactions:"सर्व व्यवहार पाहा",weightCollected:"गोळा केलेले वजन:",settledPayout:"मिळालेले पेमेंट:",receivedStatus:"मिळाले",pendingStatus:"प्रलंबित",profileTitle:"माझे प्रोफाइल",profileDetails:"प्रोफाइल तपशील",profileDetailsDesc:"तुमचे वैयक्तिक तपशील पाहा आणि अपडेट करा",address:"पत्ता",addressDesc:"तुमचे डिलिव्हरी आणि पिकअप पत्ता व्यवस्थापित करा",language:"भाषा",languageDesc:"तुमची पसंतीची भाषा निवडा",syncDetails:"सिंक तपशील",syncDetailsDesc:"सर्व उपकरणांवर तुमचा डेटा सिंक करा",safetyHazards:"सुरक्षा आणि धोके",safetyHazardsDesc:"ई-कचऱ्यासाठी सुरक्षा मार्गदर्शक तत्त्वे जाणून घ्या",appSettings:"अ‍ॅप सेटिंग्ज",appSettingsDesc:"सूचना, ध्वनी प्रभाव आणि गोपनीयता",helpSupport:"मदत आणि समर्थन",helpSupportDesc:"तुमच्या प्रश्न आणि पिकअपसाठी मदत मिळवा",logout:"लॉग आउट",logoutDesc:"Kabadiwala Connect मधून साइन आउट करा",totalEarned:"एकूण कमाई",lotsCompleted:"लॉट पूर्ण",kgRecycled:"किलो रीसायकल",editProfile:"प्रोफाइल संपादित करा",save:"जतन करा",cancel:"रद्द करा",name:"पूर्ण नाव",phone:"फोन नंबर",addressLine1:"पत्ता ओळ 1",area:"क्षेत्र / परिसर",pincode:"पिनकोड",notifications:"पुश सूचना",audioGuidance:"ऑडिओ मार्गदर्शन",autoSync:"Wi-Fi वर स्वयं-सिंक",smsAlerts:"SMS अलर्ट",profileSaved:"प्रोफाइल तपशील अपडेट केले!",addressSaved:"पिकअप पत्ता यशस्वीपणे जतन केला!",historyTitle:"माझे लॉट",historyAll:"सर्व",historyActive:"सक्रिय",historyCompleted:"पूर्ण",filterBy:"फिल्टर",lotDetails:"लॉट तपशील",buyer:"खरेदीदार",paymentMode:"पेमेंट मोड",weight:"वजन",rate:"दर",totalAmount:"एकूण रक्कम",status:"स्थिती",notes:"तपासक नोट्स",downloadReceipt:"पावती डाउनलोड करा",raiseDispute:"विवाद उठवा",statusCompleted:"पूर्ण",statusHandedOver:"सोपवले",statusListed:"सूचीबद्ध",statusDisputed:"विवादित",statusCancelled:"रद्द",takePhotoTitle:"तुमच्या भंगाराचा फोटो काढा",takePhotoSub:"वस्तू स्पष्टपणे दिसत असल्याची खात्री करा",stepPhoto:"फोटो",stepCategory:"श्रेणी",stepWeight:"वजन",stepValue:"मूल्य",stepBuyer:"खरेदीदार",positionScrapHint:"भंगार फ्रेमच्या आत ठेवा",flashLabel:"फ्लॅश",flashOn:"चालू",flashOff:"बंद",galleryLabel:"गॅलरी",gallerySub:"फोटोमधून निवडा",tipClearPhotoTitle:"स्पष्ट फोटो काढा",tipClearPhotoDesc:"चांगल्या प्रकाशात स्पष्ट फोटो काढल्याने उत्तम दर मिळतो.",hazardDetectedTitle:"धोकादायक वस्तू आढळली",hazardDetectedDesc:"तुमच्या फोटोमध्ये बॅटरी आढळली आहे. कृपया खालील सुरक्षा मार्गदर्शक तत्त्वांचे पालन करा.",detectedItemTag:"आढळलेली वस्तू",lithiumIonBattery:"लिथियम-आयन बॅटरी",lithiumBatteryDesc:"लॅपटॉप, फोन आणि इतर इलेक्ट्रॉनिक्समध्ये सामान्य.",safetyGuidelinesTitle:"सुरक्षा मार्गदर्शक तत्त्वे",keepAwayHeatTitle:"उष्णता आणि आगीपासून दूर ठेवा",keepAwayHeatDesc:"बॅटऱ्यांना उच्च तापमानात ठेवू नका.",handleCareTitle:"काळजीपूर्वक हाताळा",handleCareDesc:"खराब झालेल्या किंवा गळणाऱ्या बॅटऱ्यांना थेट स्पर्श करणे टाळा.",disposeSafelyTitle:"सुरक्षितपणे विल्हेवाट लावा",disposeSafelyDesc:"कोरड्या जागी ठेवा आणि सत्यापित रीसायकलर्सना सोपवा.",batteryDetectedBanner:"बॅटरी आढळली",gotItBtn:"समजले",selectCategoryTitle:"भंगार श्रेणी निवडा",capturedPhotoTitle:"काढलेला फोटो",capturedPhotoSub:"पुन्हा काढण्यासाठी किंवा बदलण्यासाठी टॅप करा",changeBtn:"बदला",whatTypeOfScrap:"हा कोणत्या प्रकारचा भंगार आहे?",chooseClosestCategory:"जवळची श्रेणी निवडा.",nextBtn:"पुढे",enterWeightTitle:"वजन प्रविष्ट करा",selectedCategoryLabel:"निवडलेली श्रेणी",howMuchWeigh:"याचे वजन किती आहे?",enterWeightSub:"तुमच्या भंगाराचे वजन प्रविष्ट करा",inStepsHint:"0.5 किलोच्या टप्प्यांत",orDivider:"किंवा",connectScaleTitle:"वजन काटा जोडा",connectScaleSub:"तुमचा ब्लूटूथ वेइंग स्केल पेअर करा",searchingScale:"काटा शोधत आहे...",scalePairedTitle:"स्मार्ट काटा जोडला गेला",scalePairedLive:"थेट सिंक: 4.8 किलो",pairingBluetooth:"ब्लूटूथद्वारे जोडत आहे...",quickSelectTitle:"जलद निवड",quickSelectSub:"अंदाजे वजन निवडा",lightlyFilled:"किंचित भरलेले",halfFilled:"अर्धे भरलेले",fullyFilled:"पूर्ण भरलेले",continueBtn:"सुरू ठेवा",estimatedValueTitle:"अंदाजे मूल्य",yourEstimatedValue:"तुमचे अंदाजे मूल्य",basedOnWeightScrap:"आधारित",listenToValue:"मूल्य ऐका",playingAudio:"ऑडिओ वाजत आहे...",viewBreakdown:"तपशील पाहा",baseMarketRate:"मूळ बाजारभाव",highGradeBonus:"उच्च दर्जा ई-कचरा बोनस",effectiveRate:"प्रभावी सत्यापित दर",aboveStreetRateTitle:"बाजारभावापेक्षा अधिक",gettingBetterPrice:"तुम्हाला उत्तम किंमत मिळत आहे!",findABuyerBtn:"खरेदीदार शोधा",compareOffersSub:"तुमच्या जवळील सत्यापित खरेदीदारांच्या ऑफर्सची तुलना करा.",chooseBuyerTitle:"खरेदीदार निवडा",bestBuyersTitle:"तुमच्यासाठी सर्वोत्तम खरेदीदार",bestBuyersSub:"किंमत, अंतर आणि विश्वासार्हतेनुसार तुलना.",bestMatchBadge:"सर्वोत्तम सामना",bestPriceLabel:"सर्वोत्तम किंमत",cpcbVerified:"CPCB सत्यापित",verifiedRecyclersNotice:"सर्व सूचीबद्ध खरेदीदार सत्यापित रीसायकलर आहेत.",selectedLabel:"निवडलेले:",selectAndSellBtn:"निवडा आणि विका",paymentTitle:"पेमेंट",amountToReceive:"मिळणारी रक्कम",fullPaymentSub:"पूर्ण पेमेंट",howReceivedPayment:"तुम्हाला पेमेंट कसे मिळाले?",cashMethod:"रोख",upiMethod:"UPI",scanToPay:"पेमेंटसाठी स्कॅन करा",useAnyUpi:"कोणतेही UPI अ‍ॅप वापरा",sharePaymentRequest:"पेमेंट विनंती शेअर करा",linkCopiedToast:"लिंक कॉपी केली!",cashReceivedTitle:"रोख मिळाले",markAfterCash:"रोख रक्कम मिळाल्यानंतर ही खूण करा.",paymentAmountLabel:"पेमेंट रक्कम",editBtn:"संपादित करा",confirmPaymentBtn:"पेमेंट निश्चित करा",confirmWarning:"पेमेंट मिळाल्यावरच पुष्टी करा.",receiptTitle:"पावती",transactionReceipt:"व्यवहार पावती",recycleTagline:"आज रीसायकल करा, उद्या चांगले घडवा",paidToSection:"पेमेंट प्राप्तकर्ता",govtAuthorisedPill:"शासकीय अधिकृत",authIdPrefix:"प्राधिकरण आयडी:",itemDetailsSection:"वस्तू तपशील",itemDetailsSub:"केबल्स, चार्जर, सर्किट बोर्ड इ.",totalWeightStat:"एकूण वजन",ratePerKgStat:"दर (प्रति किलो)",totalAmountStat:"एकूण रक्कम",paymentDetailsSection:"पेमेंट तपशील",paymentMethodLabel:"पेमेंट पद्धत",transactionIdLabel:"व्यवहार आयडी",paymentStatusLabel:"पेमेंट स्थिती",paymentReceivedStatus:"पेमेंट मिळाले",thankYouRecyclingTitle:"रीसायकल केल्याबद्दल धन्यवाद!",cleanerIndiaSub:"तुम्ही स्वच्छ आणि हरित भारत घडवण्यास मदत करत आहात.",keepRecyclingMotto:"रीसायकल करत राहा, बदल घडवत राहा",downloadBillBtn:"बिल डाउनलोड करा",downloadedBtn:"डाउनलोड झाले!",generatingBtn:"तयार होत आहे...",shareBillBtn:"बिल शेअर करा",copiedLinkBtn:"लिंक कॉपी केली!",doneBtn:"झाले",safetyTitle:"सुरक्षा टिपा",safetySubtitle:"पुढे जाण्यापूर्वी महत्त्वाच्या सूचना",safetyTipsHeading:"एक जलद सुरक्षा टीप",beforeHandoverSub:"तुमची बॅटरी सोपवण्यापूर्वी",keepAwayHeatHeading:"बॅटरी उष्णतेपासून दूर ठेवा",keepAwayHeatBody:"पिकअप होईपर्यंत त्यांना थंड, कोरड्या जागी ठेवा. लिथियम किंवा लेड-ऍसिड बॅटरी थेट सूर्यप्रकाशात किंवा उघड्या आगीत ठेवू नका.",coolDryArea:"थंड आणि कोरडी अंतर्गत जागा",directHeatFlames:"थेट उष्णता आणि ज्वाला",leakPreventionTitle:"ऍसिड संपर्कापासून दूर राहा",leakPreventionSub:"टर्मिनल्स सरळ आणि कोरडे ठेवा",checkTerminalHeading:"टर्मिनल गळती किंवा भेगा तपासा",checkTerminalBody:"बॅटरी सरळ स्थितीत ठेवा. आवरणामध्ये द्रव असल्यास, त्वचेचा संपर्क टाळा.",uprightOrientation:"सरळ स्थिती",tiltedUpsideDown:"कललेली किंवा उलटी",certifiedRecyclingTitle:"प्रमाणित रीसायकलिंग",govtAuthHandlerSub:"शासकीय अधिकृत हँडलर पिकअप",handOverVerifiedHeading:"फक्त सत्यापित रीसायकलरना द्या",handOverVerifiedBody:"तुमच्या वाटप केलेल्या खरेदीदार GreenCycle कडे CPCB प्रमाणित बॅटरी हाताळणी प्रोटोकॉल आहे.",cpcbBuyer:"CPCB प्रमाणित खरेदीदार",informalBurning:"अनौपचारिक जाळणे किंवा फेकणे",listenBtn:"ऐका",nextTipBtn:"पुढील टीप",gotItSafetyBtn:"समजले",remindMeLaterBtn:"नंतर आठवण करा",syncTitle:"सिंक स्थिती",syncSubtitle:"ऑफलाइन स्टोरेज आणि स्वयंचलित क्लाउड सिंक",onlineSynced:"ऑनलाइन • सिंक झाले",lotsWaitingSync:"लॉट प्रतीक्षेत",allLotsSyncedTitle:"सर्व लॉट सिंक झाले",allLotsSyncedDesc:"छान बातमी! तुमचे सर्व सेव्ह केलेले भंगार लॉट सुरक्षितपणे क्लाउड सर्व्हरवर सिंक झाले आहेत.",offlineNoticeDesc:"तुम्ही ऑफलाइन आहात, पण सर्व काही सुरक्षित आहे. तुम्ही ऑनलाइन आल्यावर आम्ही आपोआप सिंक करू.",recentlySyncedLots:"नुकतेच सिंक केलेले लॉट",lotsWaitingToSync:"सिंक होण्याची वाट पाहत असलेले लॉट",dataSafeTitle:"तुमचा डेटा सुरक्षित आहे",dataSafeDesc:"सर्व फोटो, जीपीएस टॅग आणि वजन या डिव्हाइसवर सुरक्षितपणे कॅश केले आहेत.",syncingWithServer:"सर्व्हरसह सिंक होत आहे...",syncAgainBtn:"पुन्हा सिंक करा",trySyncingAgainBtn:"पुन्हा प्रयत्न करा",syncedBadge:"सिंक झाले",waitingBadge:"प्रतीक्षेत",cachedWeightLabel:"कॅश केलेले वजन:",calculatedRateLabel:"गणना केलेला दर:",assignedRecyclerLabel:"नियुक्त रीसायकलर:",pendingPayoutLabel:"प्रलंबित पेमेंट:",syncStatusLabel:"सिंक स्थिती:",cloudVerifiedText:"● क्लाउड सत्यापित",queuedInCacheText:"🕒 स्थानिक कॅशमध्ये प्रतीक्षेत",closeBtn:"बंद करा",close:"बंद करा",confirm:"निश्चित करा",edit:"संपादित करा",delete:"हटवा",search:"शोधा",loading:"लोड होत आहे...",error:"काहीतरी चूक झाली",retry:"पुन्हा प्रयत्न करा",noData:"कोणताही डेटा उपलब्ध नाही",back:"मागे",done:"झाले"}};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),z=(e,t)=>{const s=C.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:o="",children:c,...d},m)=>C.createElement("svg",{ref:m,...lh,width:a,height:a,stroke:r,strokeWidth:l?Number(i)*24/Number(a):i,className:["lucide",`lucide-${oh(e)}`,o].join(" "),...d},[...t.map(([h,p])=>C.createElement(h,p)),...Array.isArray(c)?c:[c]]));return s.displayName=`${e}`,s};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=z("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=z("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=z("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=z("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=z("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=z("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=z("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=z("BatteryCharging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=z("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=z("Bluetooth",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=z("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=z("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=z("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=z("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=z("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=z("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=z("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=z("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=z("Delete",[["path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z",key:"1oy587"}],["line",{x1:"18",x2:"12",y1:"9",y2:"15",key:"1olkx5"}],["line",{x1:"12",x2:"18",y1:"9",y2:"15",key:"1n50pc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=z("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=z("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=z("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=z("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=z("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"aigmz7"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"1n6bmn"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8",key:"a9iiix"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=z("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=z("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=z("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=z("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=z("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=z("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=z("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=z("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=z("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=z("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=z("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=z("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=z("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=z("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=z("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=z("Recycle",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=z("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=z("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=z("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=z("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=z("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=z("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=z("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=z("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=z("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=z("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=z("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=z("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=z("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=z("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=z("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=z("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=z("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=z("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=z("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=z("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=z("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=z("ZapOff",[["polyline",{points:"12.41 6.75 13 2 10.57 4.92",key:"122m05"}],["polyline",{points:"18.57 12.91 21 10 15.66 10",key:"16r43o"}],["polyline",{points:"8 8 3 14 12 14 11 22 16 16",key:"tmh4bc"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=z("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);class $h{constructor(){this.audioCtx=null}getAudioContext(){if(!this.audioCtx&&typeof window<"u"){const t=window.AudioContext||window.webkitAudioContext;t&&(this.audioCtx=new t)}return this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume(),this.audioCtx}vibrate(t=10){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate(t)}catch{}}tapTick(){this.vibrate(8);const t=this.getAudioContext();if(t)try{const s=t.createOscillator(),r=t.createGain();s.type="sine",s.frequency.setValueAtTime(600,t.currentTime),s.frequency.exponentialRampToValueAtTime(200,t.currentTime+.03),r.gain.setValueAtTime(.04,t.currentTime),r.gain.exponentialRampToValueAtTime(.001,t.currentTime+.03),s.connect(r),r.connect(t.destination),s.start(),s.stop(t.currentTime+.03)}catch{}}cameraShutter(){this.vibrate([20,30,20]);const t=this.getAudioContext();if(t)try{const s=t.sampleRate*.05,r=t.createBuffer(1,s,t.sampleRate),a=r.getChannelData(0);for(let c=0;c<s;c++)a[c]=Math.random()*2-1;const i=t.createBufferSource();i.buffer=r;const l=t.createBiquadFilter();l.type="bandpass",l.frequency.value=1200;const o=t.createGain();o.gain.setValueAtTime(.12,t.currentTime),o.gain.exponentialRampToValueAtTime(.001,t.currentTime+.05),i.connect(l),l.connect(o),o.connect(t.destination),i.start()}catch{}}successChime(){this.vibrate([30,50,40]);const t=this.getAudioContext();if(t)try{const s=t.currentTime;[523.25,659.25,783.99,1046.5].forEach((a,i)=>{const l=t.createOscillator(),o=t.createGain();l.type="triangle",l.frequency.setValueAtTime(a,s+i*.06),o.gain.setValueAtTime(.08,s+i*.06),o.gain.exponentialRampToValueAtTime(.001,s+i*.06+.25),l.connect(o),o.connect(t.destination),l.start(s+i*.06),l.stop(s+i*.06+.25)})}catch{}}warningTone(){this.vibrate([60,40,60]);const t=this.getAudioContext();if(t)try{const s=t.currentTime,r=t.createOscillator(),a=t.createGain();r.type="sawtooth",r.frequency.setValueAtTime(320,s),r.frequency.setValueAtTime(280,s+.1),a.gain.setValueAtTime(.06,s),a.gain.exponentialRampToValueAtTime(.001,s+.25),r.connect(a),a.connect(t.destination),r.start(s),r.stop(s+.25)}catch{}}speak(t,s="en",r,a){if(typeof window>"u"||!("speechSynthesis"in window)){a&&a();return}try{window.speechSynthesis.cancel();const i=new SpeechSynthesisUtterance(t);i.rate=.92,i.pitch=1.05;const l=window.speechSynthesis.getVoices();if(s==="hi"){i.lang="hi-IN";const o=l.find(c=>c.lang.includes("hi")||c.name.includes("Hindi"));o&&(i.voice=o)}else if(s==="mr"){i.lang="mr-IN";const o=l.find(c=>c.lang.includes("mr")||c.name.includes("Marathi"));o&&(i.voice=o)}else{i.lang="en-IN";const o=l.find(c=>c.lang.includes("en-IN")||c.name.includes("India"));o&&(i.voice=o)}r&&(i.onstart=r),i.onend=()=>{a&&a()},i.onerror=()=>{a&&a()},window.speechSynthesis.speak(i)}catch{a&&a()}}stopSpeaking(){typeof window<"u"&&"speechSynthesis"in window&&window.speechSynthesis.cancel()}}const X=new $h,mo=["splash","language","auth","location","notification","home","book_pickup","step1_photo","step1_hazardous_battery_detected","step2_category","safety_tips","step3_weight","step4_value","step5_buyer","payment","receipt","todays_prices","my_earnings","history","sync_status","profile"];function Kh({light:e,background:t}){const[s,r]=C.useState(()=>a(new Date));C.useEffect(()=>{const l=setInterval(()=>r(a(new Date)),15e3);return()=>clearInterval(l)},[]);function a(l){let o=l.getHours();const c=l.getMinutes();return o=o%12,o===0&&(o=12),`${o}:${c.toString().padStart(2,"0")}`}const i=e?"#FFFFFF":"#101A24";return n.jsxs("div",{className:`status-bar ${e?"status-bar-light":"status-bar-dark"}`,style:{background:t},children:[n.jsxs("div",{className:"status-bar-left",children:[n.jsx("span",{className:"time-display",children:s}),n.jsx("span",{className:"carrier-badge",children:"Jio 5G"})]}),n.jsx("div",{className:"dynamic-island",children:n.jsx("div",{className:"island-camera-dot"})}),n.jsxs("div",{className:"status-bar-icons",children:[n.jsxs("svg",{width:"17",height:"11",viewBox:"0 0 17 11",fill:"none",children:[n.jsx("rect",{x:"0",y:"7",width:"2.8",height:"4",rx:"0.8",fill:i}),n.jsx("rect",{x:"4.5",y:"5",width:"2.8",height:"6",rx:"0.8",fill:i}),n.jsx("rect",{x:"9",y:"2.5",width:"2.8",height:"8.5",rx:"0.8",fill:i}),n.jsx("rect",{x:"13.5",y:"0",width:"2.8",height:"11",rx:"0.8",fill:i})]}),n.jsx(Hh,{size:13,color:i,strokeWidth:2.6}),n.jsxs("div",{className:"battery-level-wrap",children:[n.jsx("span",{className:"battery-pct-text",children:"92%"}),n.jsxs("svg",{width:"24",height:"12",viewBox:"0 0 24 12",fill:"none",children:[n.jsx("rect",{x:"0.75",y:"0.75",width:"19",height:"10.5",rx:"3",stroke:i,strokeOpacity:"0.4",strokeWidth:"1"}),n.jsx("rect",{x:"2",y:"2",width:"15",height:"8",rx:"2",fill:e?"#4ADE80":"#0B6B4A"}),n.jsx("path",{d:"M21.5 4V8C22.2 7.6 22.6 6.8 22.6 6C22.6 5.2 22.2 4.4 21.5 4Z",fill:i,fillOpacity:"0.4"})]})]})]})]})}function Gh({currentScreen:e,setCurrentScreen:t,currentLang:s,setLanguage:r,children:a}){const[i,l]=C.useState(()=>typeof window>"u"?!1:window.innerWidth<=768||window.matchMedia("(max-width: 768px)").matches),[o,c]=C.useState(null),d=o!==null?o:i,[m,h]=C.useState("forward"),p=C.useRef(e);C.useEffect(()=>{if(typeof window>"u")return;const y=window.matchMedia("(max-width: 768px)"),_=f=>{const u=f.matches!==void 0?f.matches:window.innerWidth<=768;l(u),u&&c(null)};return y.addEventListener?y.addEventListener("change",_):y.addListener(_),window.addEventListener("resize",_),window.addEventListener("orientationchange",_),()=>{y.removeEventListener?y.removeEventListener("change",_):y.removeListener(_),window.removeEventListener("resize",_),window.removeEventListener("orientationchange",_)}},[]),C.useEffect(()=>{const y=mo.indexOf(p.current),_=mo.indexOf(e);h(_>=y?"forward":"backward"),p.current=e},[e]);const j=[{id:"splash",label:"1. Splash"},{id:"language",label:"2. Language"},{id:"auth",label:"3. Mobile & OTP"},{id:"location",label:"4. Location"},{id:"notification",label:"5. Notifications"},{id:"home",label:"6. Home"},{id:"book_pickup",label:"7. Book Pickup"},{id:"step1_photo",label:"8. Step 1: Photo"},{id:"step1_hazardous_battery_detected",label:"9. AI Hazard Alert"},{id:"step2_category",label:"10. Step 2: Category"},{id:"safety_tips",label:"11. Safety Tips"},{id:"step3_weight",label:"12. Step 3: Weight"},{id:"step4_value",label:"13. Step 4: Value"},{id:"step5_buyer",label:"14. Step 5: Buyer"},{id:"payment",label:"15. Payment"},{id:"receipt",label:"16. Receipt"},{id:"todays_prices",label:"17. Today's Prices"},{id:"my_earnings",label:"18. My Earnings"},{id:"history",label:"19. History"},{id:"sync_status",label:"20. Sync Status"},{id:"profile",label:"21. Profile"}],x=e==="home";return n.jsxs("div",{className:`app-viewport-wrapper ${d?"fullscreen-active":""}`,children:[n.jsxs("div",{className:"control-toolbar",children:[n.jsxs("div",{className:"toolbar-brand",children:[n.jsx(Sh,{size:18,color:"#CAE0B8"}),n.jsx("span",{children:"Kabadiwala Connect Prototype"})]}),n.jsxs("div",{className:"toolbar-controls",children:[n.jsxs("button",{className:`btn-icon-toggle ${d?"":"active"}`,onClick:()=>c(!1),title:"Mobile Frame View",children:[n.jsx(po,{size:14}),n.jsx("span",{children:"Phone"})]}),n.jsxs("button",{className:`btn-icon-toggle ${d?"active":""}`,onClick:()=>c(!0),title:"Full Screen View",children:[n.jsx(_h,{size:14}),n.jsx("span",{children:"Full"})]}),n.jsx("div",{className:"lang-quick-group",children:["en","hi","mr"].map(y=>n.jsx("button",{className:`lang-chip ${s===y?"active":""}`,onClick:()=>r(y),children:y.toUpperCase()},y))})]})]}),n.jsx("div",{className:"stepper-nav-bar",children:j.map(y=>n.jsx("button",{className:`stepper-btn ${e===y.id?"active":""}`,onClick:()=>t(y.id),children:y.label},y.id))}),n.jsxs("div",{className:`phone-frame ${d?"full-screen-mode":""}`,children:[n.jsx(Kh,{light:x,background:x?"linear-gradient(180deg, #174826 0%, #1C522D 100%)":"transparent"}),n.jsx("div",{className:"screen-container","data-direction":m,children:a},e),n.jsx("div",{className:"phone-home-indicator"})]}),d&&!i&&n.jsx("button",{className:"exit-fullscreen-btn",onClick:()=>c(!1),title:"Exit Full Screen","aria-label":"Exit Full Screen",children:n.jsx(po,{size:14})}),n.jsx("style",{children:`
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
      `})]})}function qh({t:e,onNext:t}){return n.jsxs("div",{className:"splash-screen page-fade-enter",children:[n.jsx("div",{className:"splash-header",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/brand/kc_logo_lockup_transparent.png",alt:"Kabadiwala Connect Logo",className:"brand-logo-img"})}),n.jsx("div",{className:"splash-hero-container",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/splash_hero_illustration_transparent.png",alt:"E-waste Collection Illustration",className:"hero-illustration-img"})}),n.jsxs("div",{className:"splash-content-section",children:[n.jsx("h1",{className:"splash-headline",children:e.headline||"Connect. Collect. Recycle."}),n.jsx("p",{className:"splash-subheadline",children:e.subheadline||"A smart way to sell e-waste, earn better and build a cleaner future."}),n.jsxs("button",{className:"primary-button splash-cta-btn",onClick:t,children:[n.jsx("span",{children:e.getStarted}),n.jsx(Nt,{size:22,color:"#FFFFFF",strokeWidth:2.5})]}),n.jsxs("div",{className:"feature-badges-grid",children:[n.jsxs("div",{className:"feature-badge-item",children:[n.jsx("div",{className:"feature-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/badge_better_prices.png",alt:"Better Prices"})}),n.jsxs("div",{className:"feature-badge-text",children:[n.jsx("div",{className:"feature-title",children:e.betterPrices}),n.jsx("div",{className:"feature-desc",children:e.betterPricesDesc})]})]}),n.jsxs("div",{className:"feature-badge-item",children:[n.jsx("div",{className:"feature-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/badge_easy_pickups.png",alt:"Easy Pickups"})}),n.jsxs("div",{className:"feature-badge-text",children:[n.jsx("div",{className:"feature-title",children:e.easyPickups}),n.jsx("div",{className:"feature-desc",children:e.easyPickupsDesc})]})]}),n.jsxs("div",{className:"feature-badge-item",children:[n.jsx("div",{className:"feature-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/badge_safe_trusted.png",alt:"Safe & Trusted"})}),n.jsxs("div",{className:"feature-badge-text",children:[n.jsx("div",{className:"feature-title",children:e.safeTrusted}),n.jsx("div",{className:"feature-desc",children:e.safeTrustedDesc})]})]})]})]}),n.jsx("style",{children:`
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
      `})]})}function Qh({t:e,currentLang:t,setLanguage:s,onNext:r,onBack:a}){const i=[{code:"en",name:"English",icon:"Aa"},{code:"hi",name:"हिंदी",icon:"आ"},{code:"mr",name:"मराठी",icon:"म"}];return n.jsxs("div",{className:"language-screen page-fade-enter",children:[n.jsx("div",{className:"top-nav-bar",children:a&&n.jsx("button",{className:"back-arrow-btn",onClick:a,"aria-label":"Go Back",children:n.jsx(ie,{size:20,color:"#1C522D"})})}),n.jsxs("div",{className:"language-container",children:[n.jsx("h1",{className:"language-title",children:e.chooseLanguage}),n.jsx("div",{className:"language-list",children:i.map(l=>{const o=t===l.code;return n.jsxs("div",{className:`language-card ${o?"selected":""}`,onClick:()=>s(l.code),children:[n.jsxs("div",{className:"language-card-left",children:[n.jsx("div",{className:"lang-icon-badge",children:l.icon}),n.jsx("span",{className:"lang-name",children:l.name})]}),n.jsx("div",{className:`radio-circle ${o?"active":""}`,children:o&&n.jsx("div",{className:"radio-inner-dot"})})]},l.code)})})]}),n.jsx("div",{className:"language-footer",children:n.jsx("button",{className:"primary-button continue-btn",onClick:r,children:e.continue})}),n.jsx("style",{children:`
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
      `})]})}function Yh({t:e,onSkip:t,onAuthenticated:s,onBack:r}){const[a,i]=C.useState(""),[l,o]=C.useState("phone"),[c,d]=C.useState(["","","",""]),m=()=>{l==="otp"?o("phone"):r&&r()},h=x=>{if(l==="phone")x==="backspace"?i(y=>y.slice(0,-1)):a.length<10&&i(y=>y+x);else if(x==="backspace"){const y=[...c];for(let _=3;_>=0;_--)if(y[_]!==""){y[_]="";break}d(y)}else{const y=[...c];for(let _=0;_<4;_++)if(y[_]===""){y[_]=x;break}d(y)}},p=()=>{l==="phone"?(a.length<10&&i("9876543210"),o("otp")):s({phone:a||"9876543210"})},j=[{num:"1",sub:""},{num:"2",sub:"ABC"},{num:"3",sub:"DEF"},{num:"4",sub:"GHI"},{num:"5",sub:"JKL"},{num:"6",sub:"MNO"},{num:"7",sub:"PQRS"},{num:"8",sub:"TUV"},{num:"9",sub:"WXYZ"},{num:"",sub:""},{num:"0",sub:""},{num:"backspace",sub:""}];return n.jsxs("div",{className:"auth-screen page-fade-enter",children:[n.jsxs("div",{className:"auth-header",children:[n.jsx("button",{className:"back-arrow-btn",onClick:m,"aria-label":"Go Back",children:n.jsx(ie,{size:20,color:"#1C522D"})}),n.jsx("button",{className:"skip-pill",onClick:t,children:e.skip})]}),n.jsx("div",{className:"auth-body",children:l==="phone"?n.jsxs(n.Fragment,{children:[n.jsx("h1",{className:"auth-title",children:e.enterMobile}),n.jsx("p",{className:"auth-subtitle",children:e.otpSubtitle}),n.jsxs("div",{className:`phone-input-box ${a?"has-value":""}`,children:[n.jsxs("div",{className:"country-code",children:[n.jsx("span",{children:"+91"}),n.jsx(bn,{size:16,color:"#538A46"})]}),n.jsx("div",{className:"input-divider"}),n.jsx("div",{className:"phone-display-value",children:a||n.jsx("span",{className:"placeholder",children:e.mobilePlaceholder})})]}),n.jsx("button",{className:"primary-button continue-btn",onClick:p,children:e.continue}),n.jsxs("p",{className:"terms-disclaimer",children:[e.termsText," ",n.jsx("a",{href:"#terms",children:e.termsOfService}),","," ",n.jsx("a",{href:"#privacy",children:e.privacyPolicy})," and ",n.jsx("a",{href:"#content",children:e.contentPolicy}),"."]})]}):n.jsxs(n.Fragment,{children:[n.jsx("h1",{className:"auth-title",children:e.verifyOtpTitle}),n.jsxs("p",{className:"auth-subtitle",children:[e.verifyOtpSubtitle," ",n.jsxs("strong",{children:["+91 ",a||"9876543210"]})]}),n.jsx("div",{className:"otp-input-container",children:[0,1,2,3].map(x=>n.jsx("div",{className:`otp-box ${c[x]?"filled":""}`,children:c[x]||(x===c.findIndex(y=>y==="")?"|":"")},x))}),n.jsx("button",{className:"primary-button continue-btn",onClick:p,children:e.verify}),n.jsxs("div",{className:"resend-otp-link",onClick:()=>d(["1","2","3","4"]),children:[e.resendOtp," (Tap to Auto-Fill 1234)"]})]})}),n.jsx("div",{className:"custom-keypad",children:j.map((x,y)=>x.num===""?n.jsx("div",{className:"keypad-cell empty"},y):x.num==="backspace"?n.jsx("div",{className:"keypad-cell backspace-cell",onClick:()=>h("backspace"),children:n.jsx(xh,{size:22,color:"#1B1B1B"})},y):n.jsxs("div",{className:"keypad-cell",onClick:()=>h(x.num),children:[n.jsx("div",{className:"key-num",children:x.num}),x.sub&&n.jsx("div",{className:"key-sub",children:x.sub})]},y))}),n.jsx("style",{children:`
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
      `})]})}function Xh({t:e,onNext:t,onBack:s}){return n.jsxs("div",{className:"location-screen page-fade-enter",children:[n.jsx("div",{className:"top-nav-bar",children:s&&n.jsx("button",{className:"back-arrow-btn",onClick:s,"aria-label":"Go Back",children:n.jsx(ie,{size:20,color:"#1C522D"})})}),n.jsx("div",{className:"location-hero-container",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/illustrations/location_hero_transparent_clean.png",alt:"Map Location Hero",className:"location-hero-img"})}),n.jsxs("div",{className:"location-content",children:[n.jsx("h1",{className:"location-title",children:e.whatsYourLocation}),n.jsx("p",{className:"location-subtitle",children:e.locationSubtitle}),n.jsxs("div",{className:"location-bullets-list",children:[n.jsxs("div",{className:"bullet-item",children:[n.jsx("div",{className:"bullet-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/bullet_nearby_badge.png",alt:"Find Nearby"})}),n.jsxs("div",{className:"bullet-text",children:[n.jsx("div",{className:"bullet-title",children:e.findNearbyPartners}),n.jsx("div",{className:"bullet-desc",children:e.findNearbyPartnersDesc})]})]}),n.jsxs("div",{className:"bullet-item",children:[n.jsx("div",{className:"bullet-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/bullet_faster_badge.png",alt:"Faster Pickups"})}),n.jsxs("div",{className:"bullet-text",children:[n.jsx("div",{className:"bullet-title",children:e.fasterPickups}),n.jsx("div",{className:"bullet-desc",children:e.fasterPickupsDesc})]})]}),n.jsxs("div",{className:"bullet-item",children:[n.jsx("div",{className:"bullet-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/bullet_secure_badge.png",alt:"Secure & Private"})}),n.jsxs("div",{className:"bullet-text",children:[n.jsx("div",{className:"bullet-title",children:e.securePrivate}),n.jsx("div",{className:"bullet-desc",children:e.securePrivateDesc})]})]})]})]}),n.jsxs("div",{className:"location-actions",children:[n.jsxs("button",{className:"primary-button loc-primary-btn",onClick:t,children:[n.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/current_location_clean.png",alt:"Current Location",className:"btn-icon-img"}),n.jsx("span",{children:e.useCurrentLocation})]}),n.jsxs("button",{className:"secondary-button loc-secondary-btn",onClick:t,children:[n.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/search_location_clean.png",alt:"Search Location",className:"btn-icon-img"}),n.jsx("span",{children:e.searchLocationManually})]})]}),n.jsx("style",{children:`
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
      `})]})}function Zh({t:e,onNext:t,onBack:s}){return n.jsxs("div",{className:"notification-screen page-fade-enter",children:[n.jsx("div",{className:"top-nav-bar",children:s&&n.jsx("button",{className:"back-arrow-btn",onClick:s,"aria-label":"Go Back",children:n.jsx(ie,{size:20,color:"#1C522D"})})}),n.jsx("div",{className:"notification-hero-container",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Notification_UI_Asset_Pack/illustrations/notification_permission_hero_transparent.png",alt:"Notification Permission Hero",className:"notification-hero-img"})}),n.jsxs("div",{className:"notification-content",children:[n.jsx("h1",{className:"notification-title",children:e.allowNotificationsTitle}),n.jsxs("div",{className:"notification-bullets-list",children:[n.jsxs("div",{className:"bullet-item",children:[n.jsx("div",{className:"bullet-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Notification_UI_Asset_Pack/icons/notif_partner_badge.png",alt:"Partner Updates"})}),n.jsxs("div",{className:"bullet-text",children:[n.jsx("div",{className:"bullet-title",children:e.realtimePartnerUpdates}),n.jsx("div",{className:"bullet-desc",children:e.realtimePartnerUpdatesDesc})]})]}),n.jsxs("div",{className:"bullet-item",children:[n.jsx("div",{className:"bullet-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Notification_UI_Asset_Pack/icons/notif_offers_badge.png",alt:"Offers & News"})}),n.jsxs("div",{className:"bullet-text",children:[n.jsx("div",{className:"bullet-title",children:e.offersAndNews}),n.jsx("div",{className:"bullet-desc",children:e.offersAndNewsDesc})]})]})]})]}),n.jsxs("div",{className:"notification-actions",children:[n.jsx("button",{className:"primary-button notif-primary-btn",onClick:t,children:n.jsx("span",{children:e.allowPermission})}),n.jsx("button",{className:"secondary-button notif-secondary-btn",onClick:t,children:n.jsx("span",{children:e.maybeLater})})]}),n.jsx("style",{children:`
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
      `})]})}function Jh({t:e,user:t,currentLang:s,onNavigate:r}){const[a,i]=C.useState("home"),[l,o]=C.useState("Rohini, Delhi"),[c,d]=C.useState(!1),[m,h]=C.useState(null),[p,j]=C.useState(!1),[x,y]=C.useState(!0),[_,f]=C.useState(null),[u,g]=C.useState(0),b=[{id:0,title:e.slide0Title||`Hassle-free
Scrap Collection`,subtitle:e.slide0Subtitle||`Schedule your
pickup in seconds.`,btnText:e.slide0Btn||"Request Pickup",image:"/assets/home/truck_hero.png",tag:e.slide0Tag||"Verified Fleet"},{id:1,title:e.slide1Title||`Instant AI
Rate Discovery`,subtitle:e.slide1Subtitle||`Scan circuit boards &
get fair market cash.`,btnText:e.slide1Btn||"Scan Now",image:"/assets/home/icon_ewaste.png",tag:e.slide1Tag||"AI Powered"},{id:2,title:e.slide2Title||`Highest Payout
Guaranteed`,subtitle:e.slide2Subtitle||`CPCB authorized partners
with zero middlemen.`,btnText:e.slide2Btn||"View Rates",image:"/assets/home/icon_sell_scrap.png",tag:e.slide2Tag||"Best Rates"}],k=[{name:e.motherboards||"Motherboards (Grade A)",category:e.ewaste||"E-Waste",rate:"₹340 / kg",trend:"+4.5%",icon:"💻"},{name:e.copperWiring||"Copper Wiring (Clean)",category:e.metals||"Metals",rate:"₹420 / kg",trend:"+2.1%",icon:"🔌"},{name:e.lithiumBatteries||"Lithium-Ion Batteries",category:e.batteries||"Batteries",rate:"₹185 / kg",trend:"+1.2%",icon:"🔋"},{name:e.telecomPCBs||"Telecom & Server PCBs",category:e.highValue||"High Value",rate:"₹520 / kg",trend:"+6.8%",icon:"📡"},{name:e.mixedMobile||"Mixed Mobile Scrap",category:e.ewaste||"E-Waste",rate:"₹290 / kg",trend:"+0.5%",icon:"📱"},{name:e.aluminium||"Aluminium Heatsinks",category:e.metals||"Metals",rate:"₹145 / kg",trend:"-1.0%",icon:"⚙️"}],v=[{id:"BK-8821",partner:"EcoMet Recycling India",status:"Driver Arriving in 12 mins",material:"PCB & Electronic Scrap (14.5 kg)",estPayout:"₹4,640",time:"Today, 4:30 PM",active:!0},{id:"BK-8790",partner:"GreenTech Urban Processors",status:"Completed & Paid via UPI",material:"Copper Cable & Adapters (8.2 kg)",estPayout:"₹2,870",time:"Yesterday, 2:15 PM",active:!1}],S=["Rohini, Delhi","Andheri West, Mumbai","Koramangala, Bengaluru","Kothrud, Pune","Connaught Place, Delhi"];C.useEffect(()=>{const w=setInterval(()=>{g(B=>(B+1)%b.length)},4500);return()=>clearInterval(w)},[b.length]);const E=()=>{j(!0),y(!0),f(null),setTimeout(()=>{y(!1),f({detected:"Printed Circuit Board (Grade A) + Copper Core",confidence:"96.4%",weight:"12.8 kg",rate:"₹340 / kg",payout:"₹4,352"})},2200)};return n.jsxs("div",{className:"home-screen page-fade-enter",children:[n.jsxs("div",{className:"home-scroll-container",children:[n.jsxs("div",{className:"home-header",children:[n.jsxs("div",{className:"header-top-row",children:[n.jsxs("div",{className:"brand-header-group",children:[n.jsx("div",{className:"logo-badge",children:n.jsx("img",{src:"/assets/home/logo_kc.png",alt:"KC Mark"})}),n.jsxs("div",{className:"brand-text-group",children:[n.jsxs("div",{className:"brand-title",children:[n.jsx("strong",{className:"bold-white",children:"Kabadiwala"}),n.jsx("span",{className:"light-green",children:" Connect"})]}),n.jsx("div",{className:"brand-tagline",children:e.tagline||"Cleaner today, greener tomorrow"})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[n.jsxs("button",{className:"header-sync-pill",onClick:()=>r?r("sync_status"):null,title:"Offline Sync Status",children:[n.jsx("span",{className:"pulsing-dot amber",style:{width:"6px",height:"6px"}}),n.jsx("span",{children:"Sync (3)"})]}),n.jsxs("button",{className:"notif-btn ring-animation",onClick:()=>h("notifications"),"aria-label":"Notifications",children:[n.jsx(mh,{size:19,color:"#FFFFFF"}),n.jsx("span",{className:"notif-dot pulse-dot"})]})]})]}),n.jsxs("div",{className:"greeting-row",children:[n.jsxs("div",{className:"user-greeting",children:[n.jsxs("h1",{children:[e.hiGreeting||"Hi",", ",(t==null?void 0:t.name)||"Rakesh","!"]}),n.jsx("p",{children:e.readyToday||"Ready to make a difference today?"})]}),n.jsxs("div",{className:"location-pill interactive-chip",onClick:()=>d(!c),children:[n.jsx(xt,{size:13,color:"#FFFFFF"}),n.jsx("span",{children:l}),n.jsx(bn,{size:13,color:"#FFFFFF"})]})]}),c&&n.jsx("div",{className:"location-dropdown slide-down-enter",children:S.map(w=>n.jsxs("div",{className:`loc-item ${l===w?"active":""}`,onClick:()=>{o(w),d(!1)},children:[n.jsx(xt,{size:14}),n.jsx("span",{children:w})]},w))})]}),a==="home"&&n.jsxs("div",{className:"home-body tab-content-fade",children:[n.jsxs("div",{className:"carousel-wrapper",children:[n.jsxs("div",{className:"hero-pickup-card animated-card",children:[n.jsx("span",{className:"card-top-tag",children:b[u].tag}),n.jsxs("div",{className:"hero-card-left",children:[n.jsx("h2",{className:"slide-title",children:b[u].title}),n.jsx("p",{className:"slide-sub",children:b[u].subtitle}),n.jsxs("button",{className:"request-pickup-btn elastic-button",onClick:()=>{u===1?E():u===2?i("rates"):h("pickup")},children:[n.jsx("span",{children:b[u].btnText}),n.jsx(Nt,{size:16,color:"#1C522D",strokeWidth:2.5})]})]}),n.jsx("div",{className:"hero-card-right",children:n.jsx("img",{src:b[u].image,alt:"Feature Graphic",className:"truck-illustration float-animation"},u)})]}),n.jsx("div",{className:"carousel-dots",children:b.map((w,B)=>n.jsx("span",{className:`dot ${u===B?"active":""}`,onClick:()=>g(B)},w.id))})]}),n.jsxs("div",{className:"hub-grid",children:[n.jsxs("div",{className:"grid-card card-mint hover-lift",onClick:()=>r?r("step1_photo"):h("pickup"),children:[n.jsx("div",{className:"card-header-icon",children:n.jsx("img",{src:"/assets/home/icon_sell_scrap.png",alt:"Sell Scrap",className:"hub-icon-img"})}),n.jsxs("div",{className:"card-info",children:[n.jsx("h3",{children:e.sellScrap||"Sell Scrap"}),n.jsx("p",{children:e.sellScrapDesc||"Get the best price"})]}),n.jsx("div",{className:"arrow-badge",children:n.jsx(ge,{size:15,color:"#1C522D"})})]}),n.jsxs("div",{className:"grid-card card-warm hover-lift",onClick:()=>E(),children:[n.jsx("div",{className:"card-header-icon",children:n.jsx("img",{src:"/assets/home/icon_ewaste.png",alt:"E-Waste Collection",className:"hub-icon-img"})}),n.jsxs("div",{className:"card-info",children:[n.jsx("h3",{children:e.eWasteCollection?e.eWasteCollection.split(`
`).map((w,B)=>B===0?w:n.jsxs(n.Fragment,{children:[n.jsx("br",{},B),w]})):n.jsxs(n.Fragment,{children:["E-Waste",n.jsx("br",{}),"Collection"]})}),n.jsx("p",{children:e.eWasteDesc||"Pickup at your doorstep"})]}),n.jsx("div",{className:"arrow-badge",children:n.jsx(ge,{size:15,color:"#1C522D"})})]}),n.jsxs("div",{className:"grid-card card-warm hover-lift",onClick:()=>r?r("my_earnings"):h("earnings"),children:[n.jsx("div",{className:"card-header-icon",children:n.jsx("img",{src:"/assets/home/icon_earnings.png",alt:"My Earnings",className:"hub-icon-img"})}),n.jsxs("div",{className:"card-info",children:[n.jsx("h3",{children:e.myEarnings||"My Earnings"}),n.jsx("p",{children:e.myEarningsDesc||"Track your income"})]}),n.jsx("div",{className:"arrow-badge",children:n.jsx(ge,{size:15,color:"#1C522D"})})]}),n.jsxs("div",{className:"grid-card card-mint hover-lift",onClick:()=>r?r("history"):h("history"),children:[n.jsx("div",{className:"card-header-icon",children:n.jsx("img",{src:"/assets/home/icon_history.png",alt:"View History",className:"hub-icon-img"})}),n.jsxs("div",{className:"card-info",children:[n.jsx("h3",{children:e.viewHistory||"View History"}),n.jsx("p",{children:e.viewHistoryDesc||"Track your activity"})]}),n.jsx("div",{className:"arrow-badge",children:n.jsx(ge,{size:15,color:"#1C522D"})})]})]}),n.jsxs("div",{className:"market-trends-card hover-lift",onClick:()=>r?r("todays_prices"):i("rates"),children:[n.jsxs("div",{className:"mt-left",children:[n.jsx("div",{className:"mt-icon-wrapper pulse-soft",children:n.jsx("img",{src:"/assets/home/icon_trends.png",alt:"Market Trends",className:"trends-icon-img"})}),n.jsxs("div",{className:"mt-text",children:[n.jsx("h3",{children:e.marketTrends||"Market Trends"}),n.jsx("p",{children:e.marketTrendsDesc||"See what's in demand today"})]})]}),n.jsx("div",{className:"arrow-badge",children:n.jsx(ge,{size:15,color:"#1C522D"})})]})]}),a==="bookings"&&n.jsxs("div",{className:"home-body tab-content-fade",children:[n.jsxs("div",{className:"section-title-row",children:[n.jsx("h2",{children:"Active Bookings"}),n.jsx("span",{className:"count-pill",children:"2 Total"})]}),n.jsx("div",{className:"bookings-list",children:v.map(w=>n.jsxs("div",{className:`booking-card ${w.active?"active-bk":""}`,children:[n.jsxs("div",{className:"bk-header",children:[n.jsxs("div",{children:[n.jsx("span",{className:"bk-id",children:w.id}),n.jsx("h3",{className:"bk-partner",children:w.partner})]}),n.jsx("span",{className:`bk-status-tag ${w.active?"tag-live":"tag-done"}`,children:w.active?"● Driver En Route":"✓ Completed"})]}),n.jsxs("div",{className:"bk-body",children:[n.jsxs("div",{className:"bk-mat",children:["📦 ",w.material]}),n.jsxs("div",{className:"bk-time",children:["🕒 ",w.time]})]}),n.jsxs("div",{className:"bk-footer",children:[n.jsxs("div",{className:"bk-payout",children:[n.jsx("span",{children:"Estimated Payout:"}),n.jsx("strong",{children:w.estPayout})]}),w.active&&n.jsxs("button",{className:"call-driver-btn",onClick:()=>alert("Calling driver..."),children:[n.jsx(Bh,{size:14}),n.jsx("span",{children:"Call Driver"})]})]})]},w.id))})]}),a==="rates"&&n.jsxs("div",{className:"home-body tab-content-fade",children:[n.jsxs("div",{className:"rates-header-box",children:[n.jsx("h2",{children:"Live Scrap Rates"}),n.jsxs("p",{children:["Verified real-time CPCB market quotes for ",l]})]}),n.jsx("div",{className:"rates-table-list",children:k.map((w,B)=>n.jsxs("div",{className:"rate-table-row hover-lift",children:[n.jsxs("div",{className:"rate-left",children:[n.jsx("span",{className:"rate-emoji",children:w.icon}),n.jsxs("div",{children:[n.jsx("h4",{children:w.name}),n.jsx("span",{className:"rate-cat-tag",children:w.category})]})]}),n.jsxs("div",{className:"rate-right",children:[n.jsx("div",{className:"rate-val",children:w.rate}),n.jsx("span",{className:`rate-trend ${w.trend.startsWith("+")?"up":"down"}`,children:w.trend})]})]},B))})]}),a==="profile"&&n.jsxs("div",{className:"home-body tab-content-fade",children:[n.jsxs("div",{className:"profile-card",children:[n.jsxs("div",{className:"profile-top",children:[n.jsx("div",{className:"prof-avatar",children:n.jsx("span",{children:"RK"})}),n.jsxs("div",{className:"prof-info",children:[n.jsx("h3",{children:(t==null?void 0:t.name)||"Rakesh Kumar"}),n.jsxs("p",{children:["📱 +91 ",(t==null?void 0:t.phone)||"9876543210"]}),n.jsxs("span",{className:"cpcb-verified-badge",children:[n.jsx(os,{size:13,color:"#1C522D"}),n.jsx("span",{children:"CPCB Level-1 Collector"})]})]})]}),n.jsxs("div",{className:"profile-stats-grid",children:[n.jsxs("div",{className:"p-stat",children:[n.jsx("span",{children:"Total Recycled"}),n.jsx("strong",{children:"148.5 kg"})]}),n.jsxs("div",{className:"p-stat",children:[n.jsx("span",{children:"Lifetime Earnings"}),n.jsx("strong",{children:"₹42,850"})]})]})]}),n.jsxs("div",{className:"profile-actions-list",children:[n.jsxs("div",{className:"p-action-row",onClick:()=>h("earnings"),children:[n.jsx("span",{children:"💰 Payment Ledger & Bank Accounts"}),n.jsx(ge,{size:16,color:"#8C938E"})]}),n.jsxs("div",{className:"p-action-row",onClick:()=>h("history"),children:[n.jsx("span",{children:"📄 Handover Certificates (Form-2)"}),n.jsx(ge,{size:16,color:"#8C938E"})]}),n.jsxs("div",{className:"p-action-row",onClick:()=>d(!0),children:[n.jsx("span",{children:"📍 Preferred Service Zone"}),n.jsx(ge,{size:16,color:"#8C938E"})]})]})]})]}),p&&n.jsxs("div",{className:"camera-overlay page-fade-enter",children:[n.jsxs("div",{className:"camera-header",children:[n.jsxs("div",{className:"cam-title-group",children:[n.jsx(ho,{size:18,color:"#FFC837"}),n.jsx("span",{children:"AI Material Valuation Scan"})]}),n.jsx("button",{className:"close-cam-btn",onClick:()=>j(!1),children:n.jsx(pe,{size:20,color:"#FFFFFF"})})]}),n.jsxs("div",{className:"cam-viewfinder",children:[n.jsxs("div",{className:"scanner-target-box",children:[n.jsx("div",{className:"corner top-left"}),n.jsx("div",{className:"corner top-right"}),n.jsx("div",{className:"corner bottom-left"}),n.jsx("div",{className:"corner bottom-right"}),x&&n.jsx("div",{className:"cam-laser-line"}),n.jsx("img",{src:"/assets/home/truck_hero.png",alt:"Scanning E-Waste",className:"cam-feed-preview"}),_&&n.jsx("div",{className:"detection-bounding-box page-fade-enter",children:n.jsx("span",{className:"det-tag",children:"PCB Grade A • 96.4% Match"})})]}),x?n.jsxs("div",{className:"cam-status-pill",children:[n.jsx(Xi,{size:14,className:"spin-fast"}),n.jsx("span",{children:"Analyzing precious metal composition..."})]}):_&&n.jsxs("div",{className:"scan-summary-drawer slide-up-enter",children:[n.jsx("div",{className:"drawer-handle"}),n.jsxs("div",{className:"drawer-header",children:[n.jsx(Vt,{size:24,color:"#538A46"}),n.jsxs("div",{children:[n.jsx("h3",{children:"AI Valuation Confirmed"}),n.jsx("p",{children:_.detected})]})]}),n.jsxs("div",{className:"drawer-stats",children:[n.jsxs("div",{className:"d-box",children:[n.jsx("span",{children:"Estimated Weight"}),n.jsx("strong",{children:_.weight})]}),n.jsxs("div",{className:"d-box",children:[n.jsx("span",{children:"Market Rate"}),n.jsx("strong",{children:_.rate})]})]}),n.jsxs("div",{className:"d-total-banner",children:[n.jsxs("div",{children:[n.jsx("span",{children:"Total Payout Guarantee"}),n.jsx("h2",{children:_.payout})]}),n.jsx("button",{className:"confirm-deal-btn",onClick:()=>{j(!1),h("pickup")},children:"Schedule Pickup"})]})]})]})]}),m&&n.jsx("div",{className:"modal-backdrop",onClick:()=>h(null),children:n.jsxs("div",{className:"modal-card slide-up-enter",onClick:w=>w.stopPropagation(),children:[n.jsx("div",{className:"drawer-handle"}),n.jsxs("div",{className:"modal-header",children:[n.jsxs("h3",{children:[m==="pickup"&&"Schedule Scrap Pickup",m==="earnings"&&"My Earnings Ledger",m==="history"&&"Pickup & Transaction History",m==="trends"&&"Today's Market Rates",m==="notifications"&&"Notifications"]}),n.jsx("button",{className:"close-modal-btn",onClick:()=>h(null),children:n.jsx(pe,{size:18,color:"#1C522D"})})]}),n.jsxs("div",{className:"modal-body",children:[m==="pickup"&&n.jsxs("div",{className:"pickup-form-demo",children:[n.jsxs("p",{className:"modal-sub",children:["Select e-waste category & schedule doorstep pickup in ",n.jsx("strong",{children:l}),":"]}),n.jsxs("div",{className:"cat-pills",children:[n.jsx("span",{className:"cat-pill active",children:"Computer PCBs"}),n.jsx("span",{className:"cat-pill",children:"Mobile Phones"}),n.jsx("span",{className:"cat-pill",children:"Batteries"}),n.jsx("span",{className:"cat-pill",children:"Copper Cable"})]}),n.jsxs("div",{className:"rate-estimate-box",children:[n.jsx("span",{children:"Estimated Instant Payout:"}),n.jsx("strong",{children:"₹320 / kg (Direct UPI / Cash)"})]}),n.jsx("button",{className:"primary-button",onClick:()=>{alert(`Doorstep pickup scheduled successfully for ${l}!`),h(null)},children:"Confirm Doorstep Pickup"})]}),m==="earnings"&&n.jsxs("div",{className:"earnings-demo",children:[n.jsxs("div",{className:"total-earnings-box",children:[n.jsx("span",{children:"Total Earnings This Month"}),n.jsx("h2",{children:"₹18,450"}),n.jsx("span",{className:"sub-stat",children:"100% Verified CPCB Handover Credits"})]}),n.jsxs("div",{className:"history-item",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"PCB Scrap Lot #982"}),n.jsx("div",{className:"h-date",children:"Today • Rohini Hub"})]}),n.jsx("span",{className:"h-amt",children:"+₹4,640"})]}),n.jsxs("div",{className:"history-item",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Copper Scrap Lot #971"}),n.jsx("div",{className:"h-date",children:"2 days ago • UPI Credit"})]}),n.jsx("span",{className:"h-amt",children:"+₹3,810"})]})]}),m==="history"&&n.jsxs("div",{className:"history-demo",children:[n.jsxs("div",{className:"history-item",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"EcoMet Recycling Pvt Ltd"}),n.jsx("div",{className:"h-date",children:"Lot #KC-8842 • 14.5 kg"})]}),n.jsx("span",{className:"h-amt",children:"✓ Handed Over"})]}),n.jsxs("div",{className:"history-item",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"JNARDDC Verified Facility"}),n.jsx("div",{className:"h-date",children:"Lot #KC-8710 • 22.0 kg"})]}),n.jsx("span",{className:"h-amt",children:"✓ Handed Over"})]})]}),m==="notifications"&&n.jsxs("div",{className:"notif-demo",children:[n.jsxs("div",{className:"notif-card",children:[n.jsx(Ji,{size:20,color:"#538A46"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Driver On The Way!"}),n.jsx("p",{children:"EcoMet Pickup partner is 1.2 km away from your location."}),n.jsx("span",{className:"notif-time",children:"Just now"})]})]}),n.jsxs("div",{className:"notif-card",children:[n.jsx(ho,{size:20,color:"#FFC837"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Rate Increase Alert"}),n.jsx("p",{children:"Copper wiring rate jumped +₹15/kg today."}),n.jsx("span",{className:"notif-time",children:"2h ago"})]})]})]})]})]})}),n.jsxs("div",{className:"home-nav-bar",children:[n.jsxs("button",{className:`nav-tab ${a==="home"?"active":""}`,onClick:()=>i("home"),children:[n.jsx($t,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabHome||"Home"})]}),n.jsxs("button",{className:`nav-tab ${a==="bookings"?"active":""}`,onClick:()=>r?r("book_pickup"):i("bookings"),children:[n.jsx(Ut,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabBookings||"Bookings"})]}),n.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:()=>r?r("step1_photo"):E(),"aria-label":"Camera Scan",children:[n.jsx(St,{size:26,color:"#FFFFFF"}),n.jsx("span",{className:"fab-label",children:e.tabScan||"Scan"})]}),n.jsxs("button",{className:`nav-tab ${a==="rates"?"active":""}`,onClick:()=>r?r("todays_prices"):i("rates"),children:[n.jsx(ms,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabRates||"Rates"})]}),n.jsxs("button",{className:`nav-tab ${a==="profile"?"active":""}`,onClick:()=>r?r("profile"):i("profile"),children:[n.jsx(jt,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabProfile||"Profile"})]})]}),n.jsx("style",{children:`
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
      `})]})}function em({t:e,onNext:t,onBack:s}){const[r,a]=C.useState(!1),[i,l]=C.useState(!1),[o,c]=C.useState(null),d=C.useRef(null),m=[{num:1,label:e.stepPhoto||"Photo",active:!0},{num:2,label:e.stepCategory||"Category",active:!1},{num:3,label:e.stepWeight||"Weight",active:!1},{num:4,label:e.stepValue||"Value",active:!1},{num:5,label:e.stepBuyer||"Buyer",active:!1}],h=()=>{X.cameraShutter(),l(!0),setTimeout(()=>{l(!1),t&&t({photoUrl:o||"/assets/Kabadiwala_Connect_Hazardous_Battery_Detected_UI_Asset_Pack/02_app_assets/camera_preview_reference.png",flashUsed:r})},450)},p=()=>{X.tapTick(),d.current&&d.current.click()},j=x=>{var _;const y=(_=x.target.files)==null?void 0:_[0];if(y){const f=new FileReader;f.onload=u=>{c(u.target.result),t&&t({photoUrl:u.target.result,flashUsed:r})},f.readAsDataURL(y)}};return n.jsxs("div",{className:"step1-photo-screen page-fade-enter",children:[n.jsx("input",{type:"file",ref:d,onChange:j,accept:"image/*",style:{display:"none"}}),n.jsxs("div",{className:"step-header",children:[n.jsx("button",{className:"step-back-btn",onClick:s,"aria-label":"Go Back",children:n.jsx(ie,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsxs("div",{className:"step-header-text",children:[n.jsx("h1",{className:"step-title",children:e.takePhotoTitle||"Take a photo of your scrap"}),n.jsx("p",{className:"step-subtitle",children:e.takePhotoSub||"Make sure the item is clearly visible"})]})]}),n.jsxs("div",{className:"stepper-container",children:[n.jsx("div",{className:"stepper-line"}),n.jsx("div",{className:"stepper-steps",children:m.map(x=>n.jsxs("div",{className:`stepper-item ${x.active?"active":""}`,children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:x.num})}),n.jsx("span",{className:"stepper-label",children:x.label})]},x.num))})]}),n.jsx("div",{className:"camera-viewfinder-container",children:n.jsxs("div",{className:`camera-viewfinder ${i?"shutter-flash":""}`,children:[n.jsx("img",{src:o||"/assets/Kabadiwala_Connect_Step1_TakePhoto_UI_Asset_Pack/01_camera_illustration/scrap_photo_reference.jpg",alt:"Scrap Camera Feed",className:"camera-feed-img"}),r&&n.jsx("div",{className:"flash-active-indicator",title:"Flash Enabled"}),n.jsx("div",{className:"corner-bracket top-left"}),n.jsx("div",{className:"corner-bracket top-right"}),n.jsx("div",{className:"corner-bracket bottom-left"}),n.jsx("div",{className:"corner-bracket bottom-right"}),n.jsxs("div",{className:"viewfinder-pill-overlay",children:[n.jsx(St,{size:16,color:"#FFFFFF",strokeWidth:2.2}),n.jsx("span",{children:e.positionScrapHint||"Position your scrap within the frame"})]}),i&&n.jsx("div",{className:"shutter-flash-overlay"})]})}),n.jsxs("div",{className:"camera-controls-bar",children:[n.jsxs("button",{className:"control-action-btn",onClick:()=>a(!r),"aria-label":"Toggle Flash",children:[n.jsx("div",{className:`control-icon-circle ${r?"active-flash":""}`,children:r?n.jsx(Ji,{size:22,color:"#D89B2B",strokeWidth:2.2}):n.jsx(Vh,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("span",{className:"control-label-title",children:e.flashLabel||"Flash"}),n.jsx("span",{className:"control-label-sub",children:r?e.flashOn||"On":e.flashOff||"Off"})]}),n.jsx("button",{className:"shutter-btn-outer",onClick:h,"aria-label":"Capture Photo",children:n.jsx("div",{className:"shutter-btn-inner"})}),n.jsxs("button",{className:"control-action-btn",onClick:p,"aria-label":"Choose from Gallery",children:[n.jsx("div",{className:"control-icon-circle",children:n.jsx(Pd,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("span",{className:"control-label-title",children:e.galleryLabel||"Gallery"}),n.jsx("span",{className:"control-label-sub",children:e.gallerySub||"Choose from photos"})]})]}),n.jsxs("div",{className:"step1-tip-card",children:[n.jsx("div",{className:"tip-icon-circle",children:n.jsx(Ch,{size:20,color:"#FFFFFF",strokeWidth:2.2})}),n.jsxs("div",{className:"tip-text-content",children:[n.jsx("h4",{className:"tip-heading",children:e.tipClearPhotoTitle||"Take a clear photo"}),n.jsx("p",{className:"tip-body",children:e.tipClearPhotoDesc||"Good lighting and a clear view helps get a better price."})]})]})]})}function tm({t:e,photoUrl:t,initialCategory:s="pcb",onNext:r,onBack:a,onRetake:i}){const[l,o]=C.useState(s||"pcb"),c=[{id:"crt_tv",title:e.itemCrtTv||"CRT TV",sub:null,image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/crt_tv_reference.jpg"},{id:"lcd_display",title:e.itemLcd||"LCD Display",sub:null,image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/lcd_display_reference.jpg"},{id:"pcb",title:e.itemPcb||"PCB",sub:e.itemPcbSub?`(${e.itemPcbSub})`:"(Circuit Board)",image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/pcb_circuit_board_reference.jpg"},{id:"cables_wires",title:e.itemCables||"Cables & Wires",sub:null,image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/cables_wires_reference.jpg"},{id:"car_battery",title:e.itemBattery||"Car Battery",sub:null,image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/car_battery_reference.jpg"},{id:"motor_magnet",title:e.itemMotor||"Motor & Magnet",sub:null,image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/motor_magnet_reference.jpg"},{id:"mixed_plastic",title:e.itemPlastic||"Mixed Plastic",sub:null,image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/mixed_plastic_reference.jpg"},{id:"other_items",title:e.itemOther||"Other Items",sub:null,image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/other_items_reference.jpg"}],d=()=>{const h=c.find(p=>p.id===l);r&&r({categoryId:l,categoryName:h?h.title:e.itemPcb||"PCB",categorySub:(h==null?void 0:h.sub)||"",categoryImage:h==null?void 0:h.image})},m=t||"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/captured_photo_thumbnail.jpg";return n.jsxs("div",{className:"step2-category-screen page-fade-enter",children:[n.jsxs("div",{className:"step-header",children:[n.jsx("button",{className:"step-back-btn",onClick:a,"aria-label":"Go Back",children:n.jsx(ie,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("div",{className:"step-header-text",children:n.jsx("h1",{className:"step-title",children:e.selectCategoryTitle||"Select Scrap Category"})})]}),n.jsxs("div",{className:"stepper-container",children:[n.jsx("div",{className:"stepper-line"}),n.jsx("div",{className:"stepper-line-progress",style:{width:"25%"}}),n.jsxs("div",{className:"stepper-steps",children:[n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(Q,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepPhoto||"Photo"})]}),n.jsxs("div",{className:"stepper-item active",children:[n.jsx("div",{className:"stepper-circle active",children:n.jsx("span",{children:"2"})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepCategory||"Category"})]}),n.jsxs("div",{className:"stepper-item",children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:"3"})}),n.jsx("span",{className:"stepper-label",children:e.stepWeight||"Weight"})]}),n.jsxs("div",{className:"stepper-item",children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:"4"})}),n.jsx("span",{className:"stepper-label",children:e.stepValue||"Value"})]}),n.jsxs("div",{className:"stepper-item",children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:"5"})}),n.jsx("span",{className:"stepper-label",children:e.stepBuyer||"Buyer"})]})]})]}),n.jsxs("div",{className:"captured-photo-card",children:[n.jsx("img",{src:m,alt:"Captured scrap preview",className:"captured-thumbnail-img"}),n.jsxs("div",{className:"captured-info",children:[n.jsx("h4",{className:"captured-title",children:e.capturedPhotoTitle||"Captured Photo"}),n.jsx("p",{className:"captured-subtitle",children:e.capturedPhotoSub||"Tap to retake or change"})]}),n.jsx("button",{className:"change-photo-btn",onClick:i||a,"aria-label":"Change Photo",children:e.changeBtn||"Change"})]}),n.jsxs("div",{className:"category-section-header",children:[n.jsx("h2",{className:"category-heading",children:e.whatTypeOfScrap||"What type of scrap is this?"}),n.jsx("p",{className:"category-subheading",children:e.chooseClosestCategory||"Choose the closest category."})]}),n.jsx("div",{className:"category-grid",children:c.map(h=>{const p=l===h.id;return n.jsxs("div",{className:`category-card ${p?"selected":""}`,onClick:()=>o(h.id),children:[p&&n.jsx("div",{className:"category-check-badge",children:n.jsx(Q,{size:12,color:"#FFFFFF",strokeWidth:3})}),n.jsx("div",{className:"category-img-wrapper",children:n.jsx("img",{src:h.image,alt:h.title,className:"category-img"})}),n.jsxs("div",{className:"category-name-block",children:[n.jsx("span",{className:"category-name",children:h.title}),h.sub&&n.jsx("span",{className:"category-subname",children:h.sub})]})]},h.id)})}),n.jsx("div",{className:"step-bottom-cta",children:n.jsxs("button",{className:"step-primary-cta-btn",onClick:d,children:[n.jsx("span",{children:e.nextBtn||"Next"}),n.jsx(Nt,{size:18,strokeWidth:2.5})]})})]})}function nm({t:e,categoryData:t,initialWeight:s=2.5,onNext:r,onBack:a,onChangeCategory:i}){const[l,o]=C.useState(s||2.5),[c,d]=C.useState(null),[m,h]=C.useState(!1),[p,j]=C.useState(!1),x=(t==null?void 0:t.categoryName)||"PCB (Circuit Board)",y=(t==null?void 0:t.categoryImage)||"/assets/Kabadiwala_Connect_Step3_Weight_UI_Asset_Pack/app/illustrations/pcb_selected_category_reference.png",_=()=>{X.tapTick(),o(v=>Math.max(.5,parseFloat((v-.5).toFixed(1)))),d(null)},f=()=>{X.tapTick(),o(v=>parseFloat((v+.5).toFixed(1))),d(null)},u=v=>{X.tapTick(),o(v),d(v)},g=()=>{p||(X.tapTick(),h(!0),setTimeout(()=>{h(!1),j(!0),o(4.8),d(null),X.successChime()},1200))},b=()=>{r&&r({weight:l,scalePaired:p})},k=[{val:5,label:"~ 5 kg",sub:e.lightlyFilled||"Lightly filled",image:"/assets/Kabadiwala_Connect_Step3_Weight_UI_Asset_Pack/app/illustrations/quick_select_5kg_illustration_derived_transparent.png"},{val:10,label:"~ 10 kg",sub:e.halfFilled||"Half filled",image:"/assets/Kabadiwala_Connect_Step3_Weight_UI_Asset_Pack/app/illustrations/quick_select_10kg_illustration_derived_transparent.png"},{val:15,label:"~ 15 kg",sub:e.fullyFilled||"Fully filled",image:"/assets/Kabadiwala_Connect_Step3_Weight_UI_Asset_Pack/app/illustrations/quick_select_15kg_illustration_derived_transparent.png"}];return n.jsxs("div",{className:"step3-weight-screen page-fade-enter",children:[n.jsxs("div",{className:"step-header",children:[n.jsx("button",{className:"step-back-btn",onClick:a,"aria-label":"Go Back",children:n.jsx(ie,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("div",{className:"step-header-text",children:n.jsx("h1",{className:"step-title",children:e.enterWeightTitle||"Enter Weight"})})]}),n.jsxs("div",{className:"stepper-container",children:[n.jsx("div",{className:"stepper-line"}),n.jsx("div",{className:"stepper-line-progress",style:{width:"50%"}}),n.jsxs("div",{className:"stepper-steps",children:[n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(Q,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepPhoto||"Photo"})]}),n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(Q,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepCategory||"Category"})]}),n.jsxs("div",{className:"stepper-item active",children:[n.jsx("div",{className:"stepper-circle active",children:n.jsx("span",{children:"3"})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepWeight||"Weight"})]}),n.jsxs("div",{className:"stepper-item",children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:"4"})}),n.jsx("span",{className:"stepper-label",children:e.stepValue||"Value"})]}),n.jsxs("div",{className:"stepper-item",children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:"5"})}),n.jsx("span",{className:"stepper-label",children:e.stepBuyer||"Buyer"})]})]})]}),n.jsxs("div",{className:"selected-category-card",children:[n.jsx("div",{className:"selected-category-thumb-wrapper",children:n.jsx("img",{src:y,alt:x,className:"selected-category-thumb-img"})}),n.jsxs("div",{className:"selected-category-info",children:[n.jsx("span",{className:"selected-category-label",children:e.selectedCategoryLabel||"Selected Category"}),n.jsx("h4",{className:"selected-category-title",children:x})]}),n.jsx("button",{className:"change-category-btn",onClick:i||a,"aria-label":"Change Category",children:e.changeBtn||"Change"})]}),n.jsxs("div",{className:"weight-section-header",children:[n.jsx("h2",{className:"weight-heading",children:e.howMuchWeigh||"How much does it weigh?"}),n.jsx("p",{className:"weight-subheading",children:e.enterWeightSub||"Enter the weight of your scrap"})]}),n.jsxs("div",{className:"weight-stepper-panel",children:[n.jsxs("div",{className:"weight-controls-row",children:[n.jsx("button",{className:"weight-adjust-btn minus",onClick:_,"aria-label":"Decrease weight",children:n.jsx(Bd,{size:22,color:"#FFFFFF",strokeWidth:3})}),n.jsxs("div",{className:"weight-value-container",children:[n.jsx("span",{className:"weight-num",children:l.toFixed(1)}),n.jsx("span",{className:"weight-unit",children:"kg"})]}),n.jsx("button",{className:"weight-adjust-btn plus",onClick:f,"aria-label":"Increase weight",children:n.jsx(Eh,{size:22,color:"#FFFFFF",strokeWidth:3})})]}),n.jsx("span",{className:"weight-step-hint",children:e.inStepsHint||"in 0.5 kg steps"})]}),n.jsxs("div",{className:"or-divider-container",children:[n.jsx("div",{className:"or-line"}),n.jsx("span",{className:"or-pill",children:e.orDivider||"OR"}),n.jsx("div",{className:"or-line"})]}),n.jsxs("div",{className:`connect-scale-card ${p?"scale-connected":""}`,onClick:g,children:[n.jsx("div",{className:"scale-icon-wrapper",children:m?n.jsx(Xi,{size:20,color:"#0B6B4A",className:"spin-slow"}):p?n.jsx(Vt,{size:20,color:"#0B6B4A"}):n.jsx(fh,{size:20,color:"#0B6B4A",strokeWidth:2.4})}),n.jsxs("div",{className:"scale-info",children:[n.jsx("h4",{className:"scale-title",children:m?e.searchingScale||"Searching for scale...":p?e.scalePairedTitle||"Smart Scale Connected":e.connectScaleTitle||"Connect Scale"}),n.jsx("p",{className:"scale-subtitle",children:m?e.pairingBluetooth||"Pairing via Bluetooth...":p?e.scalePairedLive||"Live auto-synced: 4.8 kg":e.connectScaleSub||"Pair your Bluetooth weighing scale"})]}),n.jsx(ge,{size:18,color:"#6E7782"})]}),n.jsxs("div",{className:"quick-select-header",children:[n.jsx("h3",{className:"quick-select-title",children:e.quickSelectTitle||"Quick Select"}),n.jsx("span",{className:"quick-select-hint",children:e.quickSelectSub||"Choose an approximate weight"})]}),n.jsx("div",{className:"quick-select-grid",children:k.map(v=>{const S=c===v.val||l===v.val;return n.jsxs("div",{className:`quick-select-card ${S?"selected":""}`,onClick:()=>u(v.val),children:[n.jsx("div",{className:"quick-img-wrapper",children:n.jsx("img",{src:v.image,alt:v.label,className:"quick-sack-img"})}),n.jsx("span",{className:"quick-label",children:v.label}),n.jsx("span",{className:"quick-sub",children:v.sub})]},v.val)})}),n.jsx("div",{className:"step-bottom-cta",children:n.jsxs("button",{className:"step-primary-cta-btn",onClick:b,children:[n.jsx("span",{children:e.continueBtn||"Continue"}),n.jsx(Nt,{size:18,strokeWidth:2.5})]})})]})}function sm({t:e={},currentLang:t="en",sellFlowData:s,onNext:r,onBack:a}){const[i,l]=C.useState(!1),[o,c]=C.useState(!1),d=(s==null?void 0:s.weight)||2.5,m=(s==null?void 0:s.categoryName)||"PCB / Circuit Board",h=125,p=Math.round(d*h),j=18,x=()=>{X.tapTick(),c(!0);let _=`Estimated value is ₹${p}, based on ${d} kg of ${m}. You are getting ₹${j} above regular street rate.`;t==="hi"?_=`अनुमानित मूल्य ${p} रुपये है, ${d} किलोग्राम ${m} के आधार पर। आपको नियमित बाजार दर से ${j} रुपये अधिक मिल रहे हैं।`:t==="mr"&&(_=`अंदाजे मूल्य ${p} रुपये आहे, ${d} किलोग्रॅम ${m} च्या आधारे. तुम्हाला नियमित बाजारभावापेक्षा ${j} रुपये जास्त मिळत आहेत.`),X.speak(_,t,()=>c(!0),()=>c(!1))},y=()=>{X.tapTick(),r&&r({estimatedTotal:p,ratePerKg:h,streetBonus:j})};return n.jsxs("div",{className:"step4-value-screen page-fade-enter",children:[n.jsxs("div",{className:"step-header",children:[n.jsx("button",{className:"step-back-btn",onClick:a,"aria-label":"Go Back",children:n.jsx(ie,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("div",{className:"step-header-text",children:n.jsx("h1",{className:"step-title",children:e.estimatedValueTitle||"Estimated Value"})})]}),n.jsxs("div",{className:"stepper-container",children:[n.jsx("div",{className:"stepper-line"}),n.jsx("div",{className:"stepper-line-progress",style:{width:"75%"}}),n.jsxs("div",{className:"stepper-steps",children:[n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(Q,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepPhoto||"Photo"})]}),n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(Q,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepCategory||"Category"})]}),n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(Q,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepWeight||"Weight"})]}),n.jsxs("div",{className:"stepper-item active",children:[n.jsx("div",{className:"stepper-circle active",children:n.jsx("span",{children:"4"})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepValue||"Value"})]}),n.jsxs("div",{className:"stepper-item",children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:"5"})}),n.jsx("span",{className:"stepper-label",children:e.stepBuyer||"Buyer"})]})]})]}),n.jsxs("div",{className:"value-hero-card",children:[n.jsxs("div",{className:"value-category-chip",children:[n.jsx("div",{className:"value-category-icon-box",children:n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#FFFFFF",strokeWidth:"2.2",children:[n.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"4"}),n.jsx("path",{d:"M6 6h4v4H6z",fill:"#FFFFFF"}),n.jsx("path",{d:"M14 6h4v4h-4z",fill:"#FFFFFF"}),n.jsx("path",{d:"M6 14h4v4H6z",fill:"#FFFFFF"}),n.jsx("path",{d:"M10 8h4M8 10v4M16 10v4M10 16h4"})]})}),n.jsx("span",{className:"value-category-name",children:m})]}),n.jsx("span",{className:"value-caption-label",children:e.yourEstimatedValue||"YOUR ESTIMATED VALUE"}),n.jsxs("div",{className:"value-price-wrapper",children:[n.jsxs("div",{className:"sparkle-cluster left",children:[n.jsx("span",{className:"sparkle-line sp-1"}),n.jsx("span",{className:"sparkle-line sp-2"}),n.jsx("span",{className:"sparkle-line sp-3"})]}),n.jsxs("div",{className:"value-amount-display",children:[n.jsx("span",{className:"rupee-symbol",children:"₹"}),n.jsx("span",{className:"rupee-number",children:p})]}),n.jsxs("div",{className:"sparkle-cluster right",children:[n.jsx("span",{className:"sparkle-line sp-1"}),n.jsx("span",{className:"sparkle-line sp-2"}),n.jsx("span",{className:"sparkle-line sp-3"})]})]}),n.jsxs("span",{className:"value-basis-text",children:[e.basedOnWeightScrap||"Based on"," ",d," kg • ",m]}),n.jsxs("button",{className:`listen-value-btn ${o?"playing":""}`,onClick:x,"aria-label":"Listen to estimated value voice announcement",children:[n.jsx(Ar,{size:18,color:"#0B6B4A",strokeWidth:2.4,className:o?"pulse-audio":""}),n.jsx("span",{children:o?e.playingAudio||"Playing audio...":e.listenToValue||"Listen to value"})]})]}),n.jsxs("div",{className:"value-breakdown-card",onClick:()=>l(!i),children:[n.jsxs("div",{className:"breakdown-header-row",children:[n.jsxs("div",{children:[n.jsx("h3",{className:"breakdown-title",children:e.viewBreakdown||"View breakdown"}),n.jsxs("p",{className:"breakdown-formula",children:[d," kg × ₹",h,"/kg = ₹",p]})]}),n.jsx("button",{className:"breakdown-toggle-btn","aria-label":"Toggle breakdown",children:i?n.jsx(gh,{size:20,color:"#101A24"}):n.jsx(bn,{size:20,color:"#101A24"})})]}),i&&n.jsxs("div",{className:"breakdown-details-drawer",children:[n.jsxs("div",{className:"drawer-item",children:[n.jsx("span",{className:"item-name",children:e.baseMarketRate||"Base Market Rate"}),n.jsx("span",{className:"item-val",children:"₹110 / kg"})]}),n.jsxs("div",{className:"drawer-item",children:[n.jsx("span",{className:"item-name",children:e.highGradeBonus||"High Grade E-Waste Bonus"}),n.jsx("span",{className:"item-val bonus",children:"+₹15 / kg"})]}),n.jsxs("div",{className:"drawer-item total",children:[n.jsx("span",{className:"item-name",children:e.effectiveRate||"Effective Verified Rate"}),n.jsx("span",{className:"item-val",children:"₹125 / kg"})]})]})]}),n.jsxs("div",{className:"above-street-rate-banner",children:[n.jsx("div",{className:"above-rate-arrow-circle",children:n.jsx(ph,{size:20,color:"#0B6B4A",strokeWidth:3})}),n.jsxs("div",{className:"above-rate-text-block",children:[n.jsxs("h4",{className:"above-rate-title",children:["₹",j," ",e.aboveStreetRateTitle||"above street rate"]}),n.jsx("p",{className:"above-rate-subtitle",children:e.gettingBetterPrice||"You're getting a better price!"})]})]}),n.jsxs("div",{className:"step-bottom-cta value-cta-wrap",children:[n.jsxs("button",{className:"step-primary-cta-btn",onClick:y,children:[n.jsx("span",{children:e.findABuyerBtn||"Find a Buyer"}),n.jsx(Nt,{size:18,strokeWidth:2.5})]}),n.jsx("p",{className:"bottom-buyer-help-text",children:e.compareOffersSub||"Compare offers from verified buyers near you."})]})]})}function rm({t:e,sellFlowData:t,onNext:s,onBack:r}){const[a,i]=C.useState("buyer_1"),l=(t==null?void 0:t.categoryName)||"PCB (Circuit Board)",o=(t==null?void 0:t.weight)||2.5,c=[{id:"buyer_1",name:"GreenCycle Recycling",rate:128,isBestMatch:!0,distance:"2.1 km away",verified:"CPCB Verified",rating:4.8},{id:"buyer_2",name:"EcoScrap Solutions",rate:124,isBestMatch:!1,distance:"3.4 km away",verified:"CPCB Verified",rating:4.6},{id:"buyer_3",name:"ReNew E-Waste",rate:121,isBestMatch:!1,distance:"5.2 km away",verified:"CPCB Verified",rating:4.7}],d=c.find(h=>h.id===a)||c[0],m=()=>{s&&s({buyer:d,totalPayout:Math.round(o*d.rate)})};return n.jsxs("div",{className:"step5-buyer-screen page-fade-enter",children:[n.jsxs("div",{className:"step-header",children:[n.jsx("button",{className:"step-back-btn",onClick:r,"aria-label":"Go Back",children:n.jsx(ie,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("div",{className:"step-header-text",children:n.jsx("h1",{className:"step-title",children:e.chooseBuyerTitle||"Choose a Buyer"})})]}),n.jsxs("div",{className:"stepper-container",children:[n.jsx("div",{className:"stepper-line"}),n.jsx("div",{className:"stepper-line-progress",style:{width:"100%"}}),n.jsxs("div",{className:"stepper-steps",children:[n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(Q,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepPhoto||"Photo"})]}),n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(Q,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepCategory||"Category"})]}),n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(Q,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepWeight||"Weight"})]}),n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(Q,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepValue||"Value"})]}),n.jsxs("div",{className:"stepper-item active",children:[n.jsx("div",{className:"stepper-circle active",children:n.jsx("span",{children:"5"})}),n.jsx("span",{className:"stepper-label active-text",children:e.stepBuyer||"Buyer"})]})]})]}),n.jsxs("div",{className:"buyer-intro-header",children:[n.jsx("h2",{className:"buyer-intro-title",children:e.bestBuyersTitle||"Best buyers for you"}),n.jsx("p",{className:"buyer-intro-sub",children:e.bestBuyersSub||"Compared by price, distance and reliability."})]}),n.jsxs("div",{className:"lot-summary-pill",children:[n.jsx("div",{className:"lot-pcb-icon",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Step5_Choose_Buyer_UI_Asset_Pack/app/crops/lot_material_pcb_thumbnail.png",alt:"PCB scrap",className:"lot-icon-img"})}),n.jsxs("span",{className:"lot-summary-text",children:[l," • ",o," kg"]})]}),n.jsx("div",{className:"buyers-list",children:c.map(h=>{const p=a===h.id;return n.jsxs("div",{className:`buyer-card ${p?"selected":""}`,onClick:()=>i(h.id),children:[h.isBestMatch&&n.jsxs("div",{className:"best-match-badge",children:[n.jsx(ni,{size:12,fill:"#101A24",color:"#101A24"}),n.jsx("span",{children:e.bestMatchBadge||"BEST MATCH"})]}),n.jsxs("div",{className:"buyer-card-top-row",children:[n.jsx("div",{className:"buyer-name-col",children:n.jsx("h3",{className:"buyer-company-name",children:h.name})}),n.jsxs("div",{className:"buyer-price-radio-wrap",children:[n.jsxs("div",{className:"buyer-rate-box",children:[n.jsxs("span",{className:"buyer-rate-price",children:["₹",h.rate,"/kg"]}),h.isBestMatch&&n.jsx("span",{className:"buyer-rate-best-label",children:e.bestPriceLabel||"Best price"})]}),n.jsx("div",{className:`buyer-radio-circle ${p?"checked":""}`,children:p&&n.jsx("div",{className:"buyer-radio-inner-dot"})})]})]}),n.jsxs("div",{className:"buyer-meta-row",children:[n.jsxs("div",{className:"meta-item",children:[n.jsx(xt,{size:13,color:"#6E7782"}),n.jsx("span",{children:h.distance})]}),n.jsx("span",{className:"meta-divider",children:"|"}),n.jsxs("div",{className:"meta-item",children:[n.jsx(os,{size:13,color:"#0B6B4A",strokeWidth:2.4}),n.jsx("span",{className:"verified-text",children:e.cpcbVerified||h.verified})]}),n.jsx("span",{className:"meta-divider",children:"|"}),n.jsxs("div",{className:"meta-item",children:[n.jsx(ni,{size:13,fill:"#F5B82E",color:"#F5B82E"}),n.jsx("span",{className:"rating-score",children:h.rating})]})]})]},h.id)})}),n.jsxs("div",{className:"verified-recyclers-trust-banner",children:[n.jsx(os,{size:16,color:"#0B6B4A",strokeWidth:2.4}),n.jsx("span",{children:e.verifiedRecyclersNotice||"All listed buyers are verified recyclers."})]}),n.jsxs("div",{className:"step-bottom-cta buyer-cta-wrap",children:[n.jsxs("div",{className:"selected-buyer-indicator",children:[n.jsxs("span",{children:[e.selectedLabel||"Selected:"," "]}),n.jsx("strong",{children:d.name})]}),n.jsxs("button",{className:"step-primary-cta-btn",onClick:m,children:[n.jsx("span",{children:e.selectAndSellBtn||"Select & Sell"}),n.jsx(Nt,{size:18,strokeWidth:2.5})]})]})]})}function am({t:e,sellFlowData:t,onNext:s,onBack:r}){var _;const[a,i]=C.useState("upi"),[l,o]=C.useState(!1),[c,d]=C.useState(!1),[m,h]=C.useState((t==null?void 0:t.totalPayout)||(t==null?void 0:t.estimatedTotal)||312),p=m,j=((_=t==null?void 0:t.buyer)==null?void 0:_.name)||"GreenCycle Recycling",x=()=>{X.tapTick(),navigator.share?navigator.share({title:"Kabadiwala Connect Payment Request",text:`Payment request for ₹${p} from ${j} for scrap lot.`,url:window.location.href}).catch(()=>{}):(o(!0),setTimeout(()=>o(!1),1800))},y=()=>{X.successChime(),s&&s({paymentMode:a,amountPaid:p,buyerName:j,paidAt:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})};return n.jsxs("div",{className:"payment-screen page-fade-enter",children:[n.jsxs("div",{className:"step-header",children:[n.jsx("button",{className:"step-back-btn",onClick:r,"aria-label":"Go Back",children:n.jsx(ie,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("div",{className:"step-header-text",children:n.jsx("h1",{className:"step-title",children:e.paymentTitle||"Payment"})})]}),n.jsxs("div",{className:"payment-hero-card",children:[n.jsx("span",{className:"payment-hero-caption",children:e.amountToReceive||"Amount to receive"}),n.jsxs("div",{className:"payment-hero-amount",children:[n.jsx("span",{className:"payment-rupee",children:"₹"}),n.jsx("span",{className:"payment-number",children:p})]}),n.jsx("span",{className:"payment-hero-sub",children:e.fullPaymentSub||"Full payment"})]}),n.jsxs("div",{className:"payment-methods-section",children:[n.jsx("h2",{className:"payment-methods-heading",children:e.howReceivedPayment||"How did you receive the payment?"}),n.jsxs("div",{className:"payment-methods-grid",children:[n.jsxs("div",{className:`payment-method-card ${a==="cash"?"selected":""}`,onClick:()=>i("cash"),children:[n.jsx("div",{className:"method-badge-top-right",children:a==="cash"?n.jsx("div",{className:"method-check-circle",children:n.jsx(Q,{size:12,color:"#FFFFFF",strokeWidth:3})}):n.jsx("div",{className:"method-unselected-circle"})}),n.jsx("div",{className:"method-artwork-wrap",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Payment_UI_Asset_Pack/02_payment_icons/cash_money_illustration.jpg",alt:"Cash Payment",className:"method-artwork-img"})}),n.jsx("span",{className:"method-title",children:e.cashMethod||"Cash"})]}),n.jsxs("div",{className:`payment-method-card ${a==="upi"?"selected":""}`,onClick:()=>i("upi"),children:[n.jsx("div",{className:"method-badge-top-right",children:a==="upi"?n.jsx("div",{className:"method-check-circle",children:n.jsx(Q,{size:12,color:"#FFFFFF",strokeWidth:3})}):n.jsx("div",{className:"method-unselected-circle"})}),n.jsx("div",{className:"method-artwork-wrap",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Payment_UI_Asset_Pack/02_payment_icons/upi_qr_illustration.jpg",alt:"UPI Payment",className:"method-artwork-img"})}),n.jsx("span",{className:"method-title",children:e.upiMethod||"UPI"})]})]})]}),a==="upi"?n.jsxs("div",{className:"upi-qr-card",children:[n.jsx("h3",{className:"upi-qr-title",children:e.scanToPay||"Scan to pay"}),n.jsx("p",{className:"upi-qr-sub",children:e.useAnyUpi||"Use any UPI app"}),n.jsx("div",{className:"qr-image-container",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Payment_UPI_UI_Asset_Pack/02_qr_assets/qr_reference.jpg",alt:"UPI QR Code",className:"upi-qr-code-img"})}),n.jsxs("div",{className:"qr-payee-info",children:[n.jsxs("span",{className:"qr-amount-text",children:["₹",p]}),n.jsx("span",{className:"qr-buyer-name",children:j})]}),n.jsxs("button",{className:"share-payment-btn",onClick:x,"aria-label":"Share payment request",children:[n.jsx(zd,{size:16,color:"#0B6B4A",strokeWidth:2.2}),n.jsx("span",{children:l?e.linkCopiedToast||"Link Copied!":e.sharePaymentRequest||"Share payment request"})]})]}):n.jsxs("div",{className:"cash-received-banner",children:[n.jsx("div",{className:"cash-check-icon-circle",children:n.jsx(Q,{size:20,color:"#FFFFFF",strokeWidth:3})}),n.jsxs("div",{className:"cash-banner-text",children:[n.jsx("h4",{className:"cash-banner-title",children:e.cashReceivedTitle||"Cash received"}),n.jsx("p",{className:"cash-banner-sub",children:e.markAfterCash||"Mark this after receiving the cash."})]})]}),n.jsxs("div",{className:"payment-amount-row",children:[n.jsx("span",{className:"amount-row-label",children:e.paymentAmountLabel||"Payment amount"}),n.jsx("div",{className:"amount-row-right",children:c?n.jsx("input",{type:"number",className:"amount-edit-input",value:m,onChange:f=>h(Number(f.target.value)||0),onBlur:()=>d(!1),autoFocus:!0}):n.jsxs(n.Fragment,{children:[n.jsxs("span",{className:"amount-row-val",children:["₹",p]}),n.jsx("button",{className:"amount-edit-btn",onClick:()=>d(!0),children:e.editBtn||"Edit"})]})})]}),n.jsxs("div",{className:"step-bottom-cta payment-cta-wrap",children:[n.jsxs("button",{className:"step-primary-cta-btn",onClick:y,children:[n.jsx("span",{children:e.confirmPaymentBtn||"Confirm Payment"}),n.jsx(Nt,{size:18,strokeWidth:2.5})]}),n.jsx("p",{className:"payment-warning-text",children:e.confirmWarning||"Confirm only after receiving the payment."})]})]})}function im({t:e={},currentLang:t="en",currentLocation:s="Rohini, Delhi",onBack:r,onSelectCategory:a,onNavigateTab:i}){const[l,o]=C.useState(!1),[c,d]=C.useState(null),m=[{id:"pcb",title:e.itemPcb||"PCB",sub:e.itemPcbSub||"Circuit Board",price:128,trend:"up",change:"12%",image:"/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/pcb_thumbnail_reference.png",history:[110,114,118,120,122,125,128]},{id:"cables_wires",title:e.itemCables||"Cables & Wires",sub:null,price:72,trend:"down",change:"8%",image:"/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/cables_wires_thumbnail_reference.png",history:[80,78,79,76,75,74,72]},{id:"car_battery",title:e.itemBattery||"Car Battery",sub:null,price:62,trend:"up",change:"5%",image:"/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/car_battery_thumbnail_reference.png",history:[58,59,59,60,61,61,62]},{id:"crt_tv",title:e.itemCrtTv||"CRT TV",sub:null,price:18,trend:"down",change:"6%",image:"/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/crt_tv_thumbnail_reference.png",history:[22,21,20,20,19,19,18]},{id:"lcd_display",title:e.itemLcd||"LCD Display",sub:null,price:42,trend:"stable",change:"Stable",image:"/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/lcd_display_thumbnail_reference.png",history:[42,42,41,42,43,42,42]},{id:"motor_magnet",title:e.itemMotor||"Motor & Magnet",sub:null,price:95,trend:"up",change:"9%",image:"/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/motor_magnet_thumbnail_reference.png",history:[86,88,89,90,92,93,95]}],h=()=>{X.tapTick(),o(!0);let p=`Today's scrap rates in ${s}: PCB is 128 rupees per kg, Cables are 72 rupees, Car Battery is 62 rupees, LCD Display is 42 rupees, and Motor magnet is 95 rupees per kg.`;t==="hi"?p=`${s} में आज के कबाड़ के भाव: PCB 128 रुपये प्रति किलो, केबल्स 72 रुपये, कार बैटरी 62 रुपये, LCD डिस्प्ले 42 रुपये, और मोटर 95 रुपये प्रति किलो है।`:t==="mr"&&(p=`${s} मध्ये आजचे भंगार दर: PCB 128 रुपये प्रति किलो, केबल्स 72 रुपये, कार बॅटरी 62 रुपये, LCD डिस्प्ले 42 रुपये, आणि मोटर 95 रुपये प्रति किलो आहे.`),X.speak(p,t,()=>o(!0),()=>o(!1))};return n.jsxs("div",{className:"todays-prices-screen page-fade-enter",children:[n.jsxs("div",{className:"prices-scroll-content",children:[r&&n.jsx("div",{className:"prices-top-nav",children:n.jsx("button",{className:"step-back-btn",onClick:r,"aria-label":"Go Back",children:n.jsx(ie,{size:22,color:"#101A24",strokeWidth:2.2})})}),n.jsxs("div",{className:"prices-header-row",children:[n.jsxs("div",{className:"prices-title-block",children:[n.jsx("h1",{className:"prices-main-title",children:e.todayRates||"Today’s Prices"}),n.jsx("p",{className:"prices-main-sub",children:e.currentRatesNearYou||"Current scrap rates near you"})]}),n.jsx("button",{className:`prices-audio-btn ${l?"playing":""}`,onClick:h,"aria-label":"Listen to prices aloud",children:n.jsx(Ar,{size:22,color:"#0F52BA",strokeWidth:2.4})})]}),n.jsxs("div",{className:"prices-location-pill",children:[n.jsx(xt,{size:15,color:"#0B6B4A"}),n.jsx("span",{className:"prices-location-name",children:s}),n.jsx(bn,{size:14,color:"#101A24"})]}),n.jsxs("div",{className:"prices-updated-meta",children:[n.jsx(Er,{size:14,color:"#6E7782"}),n.jsx("span",{children:e.updatedToday||"Updated today • Based on recent local transactions"})]}),n.jsx("div",{className:"prices-list-card",children:m.map(p=>n.jsxs("div",{className:"price-list-row",onClick:()=>d(p),children:[n.jsx("div",{className:"price-item-thumb-wrap",children:n.jsx("img",{src:p.image,alt:p.title,className:"price-item-thumb-img"})}),n.jsxs("div",{className:"price-item-name-col",children:[n.jsx("h3",{className:"price-item-title",children:p.title}),p.sub&&n.jsx("span",{className:"price-item-sub",children:p.sub})]}),n.jsxs("div",{className:"price-item-rate-col",children:[n.jsxs("span",{className:"price-item-value",children:["₹",p.price,"/kg"]}),n.jsxs("div",{className:`price-trend-tag ${p.trend}`,children:[p.trend==="up"&&n.jsx(_d,{size:13,color:"#0B6B4A",strokeWidth:2.5}),p.trend==="down"&&n.jsx(uh,{size:13,color:"#C94C4C",strokeWidth:2.5}),p.trend==="stable"&&n.jsx(Bd,{size:13,color:"#6E7782",strokeWidth:2.5}),n.jsx("span",{children:p.change})]})]}),n.jsx(ge,{size:18,color:"#CBD5E1",className:"price-row-arrow"})]},p.id))}),n.jsxs("div",{className:"prices-info-banner",children:[n.jsx(Nh,{size:18,color:"#0B6B4A",className:"info-banner-icon"}),n.jsxs("div",{className:"info-banner-text",children:[n.jsx("h4",{className:"info-banner-title",children:e.basedOnLocalTx||"Based on the last 42 local transactions"}),n.jsx("p",{className:"info-banner-desc",children:e.pricesMayVary||"Prices may vary by condition, quantity and buyer."})]})]})]}),c&&n.jsx("div",{className:"price-modal-backdrop",onClick:()=>d(null),children:n.jsxs("div",{className:"price-modal-sheet",onClick:p=>p.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsxs("div",{className:"sheet-item-info",children:[n.jsx("img",{src:c.image,alt:c.title,className:"modal-thumb"}),n.jsxs("div",{children:[n.jsx("h3",{children:c.title}),n.jsxs("p",{children:[e.marketTrend7Day||"7-Day Market Trend"," • ",e.currentPrice||"Current",": ₹",c.price,"/kg"]})]})]}),n.jsx("button",{className:"modal-close-btn",onClick:()=>d(null),children:n.jsx(pe,{size:18,color:"#101A24"})})]}),n.jsx("div",{className:"sparkline-container",children:n.jsx("div",{className:"sparkline-bars",children:c.history.map((p,j)=>n.jsxs("div",{className:"sparkline-col",children:[n.jsx("div",{className:"sparkline-bar",style:{height:`${p/135*100}%`}}),n.jsxs("span",{className:"sparkline-day",children:["D",j+1]}),n.jsxs("span",{className:"sparkline-val",children:["₹",p]})]},j))})}),n.jsx("button",{className:"step-primary-cta-btn",onClick:()=>{const p=c;d(null),a&&a(p.id)},children:n.jsxs("span",{children:[e.sellNowPrefix||"Sell"," ",c.title," ",e.sellNowSuffix||"Now →"]})})]})}),n.jsxs("div",{className:"home-nav-bar",children:[n.jsxs("button",{className:"nav-tab",onClick:()=>i?i("home"):r&&r(),children:[n.jsx($t,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabHome||"Home"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>i?i("history"):r&&r(),children:[n.jsx(Ut,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabBookings||"Bookings"})]}),n.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:()=>i?i("step1_photo"):r&&r(),"aria-label":"Camera Scan",children:[n.jsx(St,{size:26,color:"#FFFFFF"}),n.jsx("span",{className:"fab-label",children:e.tabCamera||"Camera"})]}),n.jsxs("button",{className:"nav-tab active",children:[n.jsx(ms,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabRates||"Rates"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>i?i("profile"):r&&r(),children:[n.jsx(jt,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabProfile||"Profile"})]})]})]})}function lm({t:e={},currentLang:t="en",onBack:s,onNavigateTab:r}){const[a,i]=C.useState(!1),[l,o]=C.useState("This Week"),[c,d]=C.useState(5),[m,h]=C.useState(null),p=[{day:"Mon",amount:120,height:28},{day:"Tue",amount:160,height:38},{day:"Wed",amount:240,height:58},{day:"Thu",amount:310,height:75},{day:"Fri",amount:200,height:48},{day:"Sat",amount:420,height:95,isMax:!0},{day:"Sun",amount:140,height:32}],j=[{id:"tx_1",title:"PCB",date:"12 Aug 2026",amount:312,status:"Received",image:"/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/pcb_thumbnail_reference.png",buyer:"GreenCycle Recycling",weight:"2.5 kg"},{id:"tx_2",title:"Cables & Wires",date:"10 Aug 2026",amount:180,status:"Received",image:"/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/cables_wires_thumbnail_reference.png",buyer:"EcoScrap Solutions",weight:"2.5 kg"},{id:"tx_3",title:"Car Battery",date:"08 Aug 2026",amount:220,status:"Pending",image:"/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/car_battery_thumbnail_reference.png",buyer:"ReNew E-Waste",weight:"3.5 kg"},{id:"tx_4",title:"CRT TV",date:"05 Aug 2026",amount:85,status:"Received",image:"/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/crt_tv_thumbnail_reference.png",buyer:"GreenCycle Recycling",weight:"4.7 kg"},{id:"tx_5",title:"LCD Display",date:"02 Aug 2026",amount:160,status:"Received",image:"/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/lcd_display_thumbnail_reference.png",buyer:"EcoScrap Solutions",weight:"3.8 kg"}],x=()=>{X.tapTick(),i(!0);let y="Your total earnings this week are ₹1,240, up 18 percent compared to last week. Your peak earning day was Saturday with ₹420.";t==="hi"?y="इस सप्ताह आपकी कुल कमाई 1,240 रुपये है, जो पिछले सप्ताह की तुलना में 18 प्रतिशत अधिक है। शनिवार को आपकी सर्वाधिक कमाई 420 रुपये हुई।":t==="mr"&&(y="या आठवड्यात तुमची एकूण कमाई 1,240 रुपये आहे, जी मागील आठवड्याच्या तुलनेत 18 टक्के अधिक आहे. शनिवारी तुमची सर्वाधिक कमाई 420 रुपये झाली."),X.speak(y,t,()=>i(!0),()=>i(!1))};return n.jsxs("div",{className:"my-earnings-screen page-fade-enter",children:[n.jsxs("div",{className:"earnings-scroll-content",children:[s&&n.jsx("div",{className:"earnings-top-nav",children:n.jsx("button",{className:"step-back-btn",onClick:s,"aria-label":"Go Back",children:n.jsx(ie,{size:22,color:"#101A24",strokeWidth:2.2})})}),n.jsxs("div",{className:"earnings-header-row",children:[n.jsxs("div",{className:"earnings-title-block",children:[n.jsx("h1",{className:"earnings-main-title",children:e.myEarnings||"My Earnings"}),n.jsx("p",{className:"earnings-main-sub",children:e.trackEarningsDesc||"Track what you’ve earned from your scrap"})]}),n.jsx("button",{className:`earnings-audio-btn ${a?"playing":""}`,onClick:x,"aria-label":"Listen to earnings summary",children:n.jsx(Ar,{size:22,color:"#0B6B4A",strokeWidth:2.4})})]}),n.jsxs("div",{className:"earnings-hero-card",children:[n.jsxs("div",{className:"earnings-hero-top-row",children:[n.jsxs("div",{className:"earnings-hero-left",children:[n.jsxs("div",{className:"timeframe-selector",children:[n.jsx("span",{children:l==="This Week"?e.thisWeek||"This Week":l}),n.jsx(bn,{size:14,color:"#0B6B4A"})]}),n.jsxs("div",{className:"earnings-hero-amount",children:[n.jsx("span",{className:"hero-rupee",children:"₹"}),n.jsx("span",{className:"hero-num",children:"1,240"})]}),n.jsxs("div",{className:"earnings-growth-tag",children:[n.jsx(_d,{size:14,color:"#0B6B4A",strokeWidth:2.5}),n.jsxs("span",{children:[n.jsx("strong",{children:"+18%"})," ",e.comparedToLastWeek||"compared to last week"]})]})]}),n.jsx("div",{className:"earnings-hero-right",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/earnings_growth_plant_transparent_reference.png",alt:"Green impact sprout",className:"earnings-plant-img"})})]}),n.jsx("div",{className:"earnings-chart-container",children:n.jsx("div",{className:"earnings-chart-bars",children:p.map((y,_)=>{const f=c===_;return n.jsxs("div",{className:"earnings-bar-col",onClick:()=>d(_),children:[f&&n.jsxs("div",{className:"bar-tooltip-pill",children:["₹",y.amount]}),n.jsx("div",{className:`earnings-bar ${y.isMax?"max-bar":""} ${f?"active-bar":""}`,style:{height:`${y.height}%`}}),n.jsx("span",{className:`bar-day-label ${f?"active-day":""}`,children:y.day})]},y.day)})})})]}),n.jsxs("div",{className:"recent-tx-header",children:[n.jsx("h2",{className:"recent-tx-title",children:e.recentTransactions||"Recent Transactions"}),n.jsxs("button",{className:"view-all-tx-link",children:[n.jsx("span",{children:e.viewAll||"View all"}),n.jsx(ge,{size:14,color:"#0B6B4A"})]})]}),n.jsx("div",{className:"transactions-list-card",children:j.map(y=>n.jsxs("div",{className:"tx-item-row",onClick:()=>h(y),children:[n.jsx("div",{className:"tx-thumb-wrap",children:n.jsx("img",{src:y.image,alt:y.title,className:"tx-thumb-img"})}),n.jsxs("div",{className:"tx-info-col",children:[n.jsx("h3",{className:"tx-item-title",children:y.title}),n.jsx("span",{className:"tx-item-date",children:y.date})]}),n.jsxs("div",{className:"tx-amount-col",children:[n.jsxs("span",{className:"tx-amount-val",children:["+₹",y.amount]}),n.jsx("span",{className:`tx-status-badge ${y.status.toLowerCase()}`,children:y.status==="Received"?e.receivedStatus||"Received":y.status==="Pending"?e.pendingStatus||"Pending":y.status})]})]},y.id))}),n.jsxs("div",{className:"view-all-transactions-banner",children:[n.jsxs("div",{className:"vat-left",children:[n.jsx(vh,{size:18,color:"#0B6B4A"}),n.jsx("span",{className:"vat-text",children:e.viewAllTransactions||"View all transactions"})]}),n.jsx(ge,{size:18,color:"#6E7782"})]})]}),m&&n.jsx("div",{className:"price-modal-backdrop",onClick:()=>h(null),children:n.jsxs("div",{className:"price-modal-sheet",onClick:y=>y.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsxs("div",{className:"sheet-item-info",children:[n.jsx("img",{src:m.image,alt:m.title,className:"modal-thumb"}),n.jsxs("div",{children:[n.jsxs("h3",{children:[m.title," Settlement"]}),n.jsxs("p",{children:[m.date," • ",m.buyer]})]})]}),n.jsx("button",{className:"modal-close-btn",onClick:()=>h(null),children:n.jsx(pe,{size:18,color:"#101A24"})})]}),n.jsxs("div",{className:"sparkline-container",style:{textAlign:"left",padding:"14px 16px"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[n.jsx("span",{style:{fontSize:"13px",color:"#6E7782"},children:e.weightCollected||"Weight Collected:"}),n.jsx("strong",{style:{color:"#101A24"},children:m.weight})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[n.jsx("span",{style:{fontSize:"13px",color:"#6E7782"},children:e.settledPayout||"Settled Payout:"}),n.jsxs("strong",{style:{color:"#0B6B4A",fontSize:"16px"},children:["₹",m.amount]})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[n.jsxs("span",{style:{fontSize:"13px",color:"#6E7782"},children:[e.status||"Status",":"]}),n.jsx("span",{className:`tx-status-badge ${m.status.toLowerCase()}`,children:m.status==="Received"?e.receivedStatus||"Received":e.pendingStatus||"Pending"})]})]}),n.jsx("button",{className:"step-primary-cta-btn",onClick:()=>h(null),children:n.jsx("span",{children:e.done||"Done"})})]})}),n.jsxs("div",{className:"home-nav-bar",children:[n.jsxs("button",{className:"nav-tab",onClick:()=>r?r("home"):s&&s(),children:[n.jsx($t,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabHome||"Home"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>r?r("history"):s&&s(),children:[n.jsx(Ut,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabBookings||"Bookings"})]}),n.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:()=>r?r("step1_photo"):s&&s(),"aria-label":"Camera Scan",children:[n.jsx(St,{size:26,color:"#FFFFFF"}),n.jsx("span",{className:"fab-label",children:e.tabCamera||"Camera"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>r?r("todays_prices"):s&&s(),children:[n.jsx(ms,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabRates||"Rates"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>r?r("profile"):s&&s(),children:[n.jsx(jt,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabProfile||"Profile"})]})]})]})}function om({t:e,onBack:t,onNavigateTab:s}){const[r,a]=C.useState("all"),[i,l]=C.useState(null),[o,c]=C.useState(!1),[d,m]=C.useState("All"),h=[{id:"lot_1",lotNumber:"Lot #A7F2K9",title:"PCB / Circuit Board",category:"E-Waste",date:"3 Sep 2026",weight:"2.5 kg",rate:"₹125/kg",amount:312,status:"Completed",statusType:"completed",statusCode:"completed",image:"/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/pcb_thumbnail.png",buyer:"GreenCycle Recycling",settlementMode:"UPI QR Transfer",notes:"Inspected Grade A circuit boards with full copper recovery trace."},{id:"lot_2",lotNumber:"Lot #B3D9L1",title:"Cables & Wires",category:"Metals",date:"1 Sep 2026",weight:"4.0 kg",rate:"₹70/kg",amount:280,status:"Handed Over",statusType:"active",statusCode:"handed_over",image:"/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/cables_thumbnail.png",buyer:"EcoScrap Solutions",settlementMode:"Cash on Delivery",notes:"Driver picked up from Rohini Sector 7. Awaiting final recycler depot weigh-in."},{id:"lot_3",lotNumber:"Lot #C6H4P0",title:"Car Battery",category:"Batteries",date:"29 Aug 2026",weight:"8.2 kg",rate:"₹62/kg",amount:510,status:"Listed",statusType:"active",statusCode:"listed",image:"/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/battery_thumbnail.png",buyer:"Awaiting Buyer Match",settlementMode:"Direct Settlement",notes:"Listed on buyer exchange with verified dry-cell certificate."},{id:"lot_4",lotNumber:"Lot #E9V2M8",title:"LCD Display",category:"E-Waste",date:"24 Aug 2026",weight:"3.1 kg",rate:"₹61/kg",amount:190,status:"Disputed",statusType:"disputed",statusCode:"disputed",image:"/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/lcd_thumbnail.png",buyer:"TechRecycle Delhi",settlementMode:"Review Pending",notes:"Minor tare weight variation recorded at hub scale (-0.4 kg). Dispute under review."}],p=h.filter(x=>!(r==="active"&&x.statusType!=="active"||r==="completed"&&x.statusType!=="completed"||d!=="All"&&x.category!==d)),j=x=>{switch(x){case"completed":return n.jsx(Vt,{size:12,color:"#0B6B4A",strokeWidth:2.5});case"handed_over":return n.jsx(Ph,{size:12,color:"#0A4D9B",strokeWidth:2.5});case"listed":return n.jsx(Er,{size:12,color:"#D97706",strokeWidth:2.5});case"disputed":return n.jsx(ch,{size:12,color:"#DC2626",strokeWidth:2.5});default:return null}};return n.jsxs("div",{className:"history-screen page-fade-enter",children:[n.jsxs("div",{className:"history-scroll-content",children:[t&&n.jsx("div",{className:"history-top-nav",children:n.jsx("button",{className:"step-back-btn",onClick:t,"aria-label":"Go Back",children:n.jsx(ie,{size:22,color:"#101A24",strokeWidth:2.2})})}),n.jsxs("div",{className:"history-header-row",children:[n.jsxs("div",{className:"history-title-block",children:[n.jsx("h1",{className:"history-main-title",children:e.historyTitle||"History"}),n.jsx("p",{className:"history-main-sub",children:"Track all your scrap collection lots"})]}),n.jsx("button",{className:"history-filter-btn",onClick:()=>c(!0),"aria-label":"Filter transactions",children:n.jsx(Rh,{size:20,color:"#101A24",strokeWidth:2.2})})]}),n.jsxs("div",{className:"history-segments-bar",children:[n.jsxs("button",{className:`history-segment-pill ${r==="all"?"active":""}`,onClick:()=>a("all"),children:[n.jsx("span",{children:e.historyAll||"All"}),n.jsx("span",{className:"segment-count",children:h.length})]}),n.jsxs("button",{className:`history-segment-pill ${r==="active"?"active":""}`,onClick:()=>a("active"),children:[n.jsx("span",{children:e.historyActive||"Active"}),n.jsx("span",{className:"segment-count",children:h.filter(x=>x.statusType==="active").length})]}),n.jsxs("button",{className:`history-segment-pill ${r==="completed"?"active":""}`,onClick:()=>a("completed"),children:[n.jsx("span",{children:e.historyCompleted||"Completed"}),n.jsx("span",{className:"segment-count",children:h.filter(x=>x.statusType==="completed").length})]})]}),n.jsx("div",{className:"history-lots-list",children:p.length===0?n.jsx("div",{className:"history-empty-state",children:n.jsx("p",{children:"No transactions found for this filter."})}):p.map(x=>n.jsxs("div",{className:"history-lot-card hover-lift",onClick:()=>l(x),children:[n.jsxs("div",{className:"lot-card-left",children:[n.jsx("div",{className:"lot-thumb-wrap",children:n.jsx("img",{src:x.image,alt:x.title,className:"lot-thumb-img"})}),n.jsxs("div",{className:"lot-info-col",children:[n.jsx("h3",{className:"lot-item-title",children:x.title}),n.jsxs("span",{className:"lot-meta-text",children:[x.weight," • ",x.date," • ",n.jsx("strong",{className:"lot-id-tag",children:x.lotNumber})]})]})]}),n.jsxs("div",{className:"lot-card-right",children:[n.jsxs("span",{className:"lot-amount-val",children:["₹",x.amount]}),n.jsxs("div",{className:`lot-status-pill ${x.statusCode}`,children:[j(x.statusCode),n.jsx("span",{children:x.status})]})]})]},x.id))}),n.jsxs("div",{className:"earnings-summary-banner hover-lift",onClick:()=>s?s("my_earnings"):null,children:[n.jsxs("div",{className:"es-banner-left",children:[n.jsx("div",{className:"es-banner-icon-wrap",children:n.jsx(Zi,{size:22,color:"#0B6B4A",strokeWidth:2.4})}),n.jsxs("div",{className:"es-banner-text-col",children:[n.jsx("h4",{className:"es-banner-title",children:"View Earnings Summary"}),n.jsx("p",{className:"es-banner-sub",children:"See total earnings and analytics from all your lots"})]})]}),n.jsx(ge,{size:20,color:"#0B6B4A"})]})]}),i&&n.jsx("div",{className:"price-modal-backdrop",onClick:()=>l(null),children:n.jsxs("div",{className:"price-modal-sheet history-detail-sheet",onClick:x=>x.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsxs("div",{className:"sheet-item-info",children:[n.jsx("img",{src:i.image,alt:i.title,className:"modal-thumb"}),n.jsxs("div",{children:[n.jsx("h3",{children:i.title}),n.jsxs("p",{children:[i.lotNumber," • ",i.date]})]})]}),n.jsx("button",{className:"modal-close-btn",onClick:()=>l(null),children:n.jsx(pe,{size:18,color:"#101A24"})})]}),n.jsxs("div",{className:"history-receipt-box",children:[n.jsxs("div",{className:"receipt-row",children:[n.jsxs("span",{children:[e.scrapCategories||"Category",":"]}),n.jsx("strong",{children:i.category})]}),n.jsxs("div",{className:"receipt-row",children:[n.jsxs("span",{children:[e.weight||"Weight Collected",":"]}),n.jsx("strong",{children:i.weight})]}),n.jsxs("div",{className:"receipt-row",children:[n.jsxs("span",{children:[e.rate||"Unit Rate",":"]}),n.jsx("strong",{children:i.rate})]}),n.jsxs("div",{className:"receipt-row",children:[n.jsxs("span",{children:[e.buyer||"Assigned Recycler",":"]}),n.jsx("strong",{children:i.buyer})]}),n.jsxs("div",{className:"receipt-row",children:[n.jsxs("span",{children:[e.paymentMode||"Payment Mode",":"]}),n.jsx("strong",{children:i.settlementMode})]}),n.jsxs("div",{className:"receipt-row highlight-row",children:[n.jsxs("span",{children:[e.totalAmount||"Total Payout",":"]}),n.jsxs("strong",{className:"receipt-payout-amount",children:["₹",i.amount]})]}),n.jsxs("div",{className:"receipt-status-row",children:[n.jsxs("span",{children:[e.status||"Current Status",":"]}),n.jsxs("div",{className:`lot-status-pill ${i.statusCode}`,children:[j(i.statusCode),n.jsx("span",{children:i.status})]})]})]}),n.jsx("div",{className:"lot-notes-box",children:n.jsxs("p",{className:"lot-notes-text",children:[n.jsx("strong",{children:"Lot Note:"})," ",i.notes]})}),n.jsx("div",{className:"history-modal-cta-row",children:n.jsx("button",{className:"step-primary-cta-btn",onClick:()=>l(null),children:n.jsx("span",{children:"Close Details"})})})]})}),o&&n.jsx("div",{className:"price-modal-backdrop",onClick:()=>c(!1),children:n.jsxs("div",{className:"price-modal-sheet",onClick:x=>x.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsx("h3",{style:{margin:0,fontSize:"18px",fontWeight:800},children:"Filter History"}),n.jsx("button",{className:"modal-close-btn",onClick:()=>c(!1),children:n.jsx(pe,{size:18,color:"#101A24"})})]}),n.jsxs("div",{style:{padding:"8px 0 16px"},children:[n.jsx("span",{style:{fontSize:"13px",fontWeight:700,color:"#101A24",display:"block",marginBottom:"10px"},children:"Material Category:"}),n.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:["All","E-Waste","Metals","Batteries"].map(x=>n.jsx("button",{className:`history-filter-chip ${d===x?"active":""}`,onClick:()=>m(x),children:x},x))})]}),n.jsx("button",{className:"step-primary-cta-btn",onClick:()=>c(!1),children:n.jsx("span",{children:"Apply Filters"})})]})}),n.jsxs("div",{className:"home-nav-bar",children:[n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("home"):t&&t(),children:[n.jsx($t,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Home"})]}),n.jsxs("button",{className:"nav-tab active",onClick:()=>null,children:[n.jsx(Ut,{size:22,className:"tab-icon"}),n.jsx("span",{children:"History"})]}),n.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:()=>s?s("step1_photo"):t&&t(),"aria-label":"Camera Scan",children:[n.jsx(St,{size:26,color:"#FFFFFF"}),n.jsx("span",{className:"fab-label",children:"Camera"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("todays_prices"):t&&t(),children:[n.jsx(ms,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Rates"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("profile"):t&&t(),children:[n.jsx(jt,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Profile"})]})]})]})}function cm({t:e,onBack:t,onNavigateTab:s}){const[r,a]=C.useState(!1),[i,l]=C.useState(!1),[o,c]=C.useState(null),[d,m]=C.useState([{id:"sync_1",lotNumber:"Lot #A7F2K9",title:"PCB (Circuit Board)",category:"E-Waste",time:"Today, 11:24 AM",weight:"2.5 kg",rate:"₹125/kg",amount:312,synced:!1,image:"/assets/Kabadiwala_Connect_Sync_Status_UI_Asset_Pack/app/crops/pcb_lot_thumbnail.png",buyer:"GreenCycle Recycling"},{id:"sync_2",lotNumber:"Lot #B3D9L1",title:"Cables & Wires",category:"Metals",time:"Today, 10:42 AM",weight:"4.0 kg",rate:"₹70/kg",amount:280,synced:!1,image:"/assets/Kabadiwala_Connect_Sync_Status_UI_Asset_Pack/app/crops/cables_lot_thumbnail.png",buyer:"EcoScrap Solutions"},{id:"sync_3",lotNumber:"Lot #C6H4P0",title:"Car Battery",category:"Batteries",time:"Yesterday, 5:16 PM",weight:"8.2 kg",rate:"₹62/kg",amount:510,synced:!1,image:"/assets/Kabadiwala_Connect_Sync_Status_UI_Asset_Pack/app/crops/battery_lot_thumbnail.png",buyer:"Awaiting Buyer Match"}]),h=()=>{r||(a(!0),l(!1),setTimeout(()=>{m(j=>j.map(x=>({...x,synced:!0}))),a(!1),l(!0)},2e3))},p=d.filter(j=>!j.synced).length;return n.jsxs("div",{className:"sync-status-screen page-fade-enter",children:[n.jsxs("div",{className:"sync-scroll-content",children:[t&&n.jsx("div",{className:"sync-top-nav",children:n.jsx("button",{className:"step-back-btn",onClick:t,"aria-label":"Go Back",children:n.jsx(ie,{size:22,color:"#101A24",strokeWidth:2.2})})}),n.jsxs("div",{className:"sync-header-row",children:[n.jsxs("div",{className:"sync-title-block",children:[n.jsx("h1",{className:"sync-main-title",children:e.syncTitle||"Sync Status"}),n.jsx("p",{className:"sync-main-sub",children:e.syncSubtitle||"Offline storage & automatic cloud sync"})]}),n.jsxs("div",{className:`sync-status-indicator-badge ${i?"synced":"offline"}`,children:[i?n.jsx(Vt,{size:16,color:"#0B6B4A",strokeWidth:2.5}):n.jsx(Oh,{size:16,color:"#D97706",strokeWidth:2.5}),n.jsx("span",{children:i?e.onlineSynced||"Online • Synced":`${p} ${e.lotsWaitingSync||"Lots Waiting"}`})]})]}),n.jsxs("div",{className:`offline-notice-banner ${i?"success":""}`,children:[n.jsx("div",{className:"onb-header-row",children:n.jsxs("div",{className:"onb-pill",children:[n.jsx("span",{className:`pulsing-dot ${i?"green":"amber"}`}),n.jsx("strong",{children:i?e.allLotsSyncedTitle||"All Lots Synced":`Offline • ${p} ${e.lotsWaitingSync||"lots waiting to sync"}`})]})}),n.jsx("p",{className:"onb-description",children:i?e.allLotsSyncedDesc||"Great news! All your saved scrap lots have been safely synced to the cloud server.":e.offlineNoticeDesc||"You're offline, but everything is saved. We'll sync automatically when you're back online."})]}),n.jsxs("div",{className:"sync-queue-card",children:[n.jsx("div",{className:"queue-card-header",children:n.jsx("h3",{className:"queue-header-title",children:i?e.recentlySyncedLots||"Recently Synced Lots":`${e.lotsWaitingToSync||"Lots Waiting to Sync"} (${p})`})}),n.jsx("div",{className:"queue-items-list",children:d.map(j=>n.jsxs("div",{className:"queue-lot-row hover-lift",onClick:()=>c(j),children:[n.jsx("div",{className:"queue-thumb-wrap",children:n.jsx("img",{src:j.image,alt:j.title,className:"queue-thumb-img"})}),n.jsxs("div",{className:"queue-info-col",children:[n.jsx("h4",{className:"queue-item-title",children:j.title}),n.jsxs("span",{className:"queue-meta-text",children:[j.weight," • ",j.time," • ",n.jsx("strong",{className:"lot-id-tag",children:j.lotNumber})]})]}),n.jsxs("div",{className:"queue-right-col",children:[n.jsxs("span",{className:"queue-amount-val",children:["₹",j.amount]}),j.synced?n.jsxs("div",{className:"queue-status-badge synced",children:[n.jsx(Q,{size:11,color:"#0B6B4A",strokeWidth:3}),n.jsx("span",{children:e.syncedBadge||"Synced"})]}):n.jsxs("div",{className:"queue-status-badge waiting",children:[n.jsx(Er,{size:11,color:"#D97706",strokeWidth:2.5}),n.jsx("span",{children:e.waitingBadge||"Waiting"})]})]})]},j.id))})]}),n.jsxs("div",{className:"sync-safety-card",children:[n.jsxs("div",{className:"safety-card-left",children:[n.jsxs("div",{className:"safety-badge-title",children:[n.jsx(os,{size:16,color:"#0B6B4A",strokeWidth:2.5}),n.jsx("span",{children:e.dataSafeTitle||"Your data is safe"})]}),n.jsx("p",{className:"safety-desc",children:e.dataSafeDesc||"All photos, GPS tags, scale readings and buyer settlements are securely cached on this device with end-to-end cryptographic integrity."})]}),n.jsx("div",{className:"safety-card-right",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Sync_Status_UI_Asset_Pack/app/illustrations/sync_safety_illustration_reference.png",alt:"Safe sync lock illustration",className:"sync-safety-illustration"})})]}),n.jsx("div",{className:"sync-cta-wrap",children:n.jsxs("button",{className:`step-primary-cta-btn ${r?"loading":""}`,onClick:h,disabled:r,children:[n.jsx(Fh,{size:18,className:r?"spin-anim":""}),n.jsx("span",{children:r?e.syncingWithServer||"Syncing with Server...":i?e.syncAgainBtn||"Sync Again":e.trySyncingAgainBtn||"Try syncing again"})]})})]}),o&&n.jsx("div",{className:"price-modal-backdrop",onClick:()=>c(null),children:n.jsxs("div",{className:"price-modal-sheet",onClick:j=>j.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsxs("div",{className:"sheet-item-info",children:[n.jsx("img",{src:o.image,alt:o.title,className:"modal-thumb"}),n.jsxs("div",{children:[n.jsx("h3",{children:o.title}),n.jsxs("p",{children:[o.lotNumber," • ",o.time]})]})]}),n.jsx("button",{className:"modal-close-btn",onClick:()=>c(null),children:n.jsx(pe,{size:18,color:"#101A24"})})]}),n.jsxs("div",{className:"history-receipt-box",children:[n.jsxs("div",{className:"receipt-row",children:[n.jsxs("span",{children:[e.scrapCategories||"Category",":"]}),n.jsx("strong",{children:o.category})]}),n.jsxs("div",{className:"receipt-row",children:[n.jsx("span",{children:e.cachedWeightLabel||"Cached Weight:"}),n.jsx("strong",{children:o.weight})]}),n.jsxs("div",{className:"receipt-row",children:[n.jsx("span",{children:e.calculatedRateLabel||"Calculated Rate:"}),n.jsx("strong",{children:o.rate})]}),n.jsxs("div",{className:"receipt-row",children:[n.jsx("span",{children:e.assignedRecyclerLabel||"Assigned Recycler:"}),n.jsx("strong",{children:o.buyer})]}),n.jsxs("div",{className:"receipt-row highlight-row",children:[n.jsx("span",{children:e.pendingPayoutLabel||"Pending Payout:"}),n.jsxs("strong",{className:"receipt-payout-amount",children:["₹",o.amount]})]}),n.jsxs("div",{className:"receipt-status-row",children:[n.jsx("span",{children:e.syncStatusLabel||"Sync Status:"}),n.jsx("span",{style:{fontWeight:700,color:o.synced?"#0B6B4A":"#D97706"},children:o.synced?e.cloudVerifiedText||"● Cloud Verified":e.queuedInCacheText||"🕒 Queued in Local Cache"})]})]}),n.jsx("button",{className:"step-primary-cta-btn",onClick:()=>c(null),children:n.jsx("span",{children:e.closeBtn||"Close"})})]})}),n.jsxs("div",{className:"home-nav-bar",children:[n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("home"):t&&t(),children:[n.jsx($t,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabHome||"Home"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("history"):t&&t(),children:[n.jsx(Ut,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabBookings||"Bookings"})]}),n.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:()=>s?s("step1_photo"):t&&t(),"aria-label":"Camera Scan",children:[n.jsx(St,{size:26,color:"#FFFFFF"}),n.jsx("span",{className:"fab-label",children:e.tabCamera||"Camera"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("todays_prices"):t&&t(),children:[n.jsx(ms,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabRates||"Rates"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("profile"):t&&t(),children:[n.jsx(jt,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabProfile||"Profile"})]})]})]})}function dm({t:e={},currentLang:t="en",onClose:s,onProceed:r,onBack:a}){const[i,l]=C.useState(0),[o,c]=C.useState(!1),d=x=>x===1?t==="hi"?"सुरक्षा सुझाव। बैटरियों को गर्मी से दूर रखें। पिकअप तक उन्हें ठंडी और सूखी जगह पर रखें।":t==="mr"?"सुरक्षा टीप। बॅटरी उष्णतेपासून दूर ठेवा. पिकअप होईपर्यंत त्यांना थंड आणि कोरड्या जागी ठेवा.":"A quick safety tip. Please keep batteries away from heat. Store them in a cool, dry place until pickup.":x===2?t==="hi"?"एसिड संपर्क से बचें। बैटरी टर्मिनल को सीधा और सूखा रखें और किसी भी लीक को छूने से बचें।":t==="mr"?"अ‍ॅसिड संपर्कापासून बचाव करा. बॅटरी टर्मिनल्स सरळ आणि कोरडे ठेवा.":"Prevent acid contact. Keep battery terminals upright and avoid touching any leaked fluids.":x===3?t==="hi"?"सुरक्षित रीसाइक्लिंग सुनिश्चित करें। बैटरियां केवल CPCB अधिकृत रीसाइक्लर को सौंपें।":t==="mr"?"सुरक्षित पुनर्वापर सुनिश्चित करा. बॅटरी केवळ अधिकृत रीसायकलिंग भागीदारांनाच द्या.":"Ensure safe handover. Only give batteries to verified certified recycling partners.":"",m=[{id:1,badge:e.batteryDetectedBanner||"Battery Detected",title:e.safetyTipsHeading||"A quick safety tip",subtitle:e.beforeHandoverSub||"Before handing over your battery",tipHeading:e.keepAwayHeatHeading||"Keep batteries away from heat",tipBody:e.keepAwayHeatBody||"Store them in a cool, dry place until pickup. Never expose lithium or lead-acid batteries to direct sunlight or open fire.",dos:e.coolDryArea||"Cool & dry indoor area",donts:e.directHeatFlames||"Direct heat & flames",audioText:d(1)},{id:2,badge:e.leakPreventionTitle||"Leakage Prevention",title:e.leakPreventionTitle||"Prevent acid contact",subtitle:e.leakPreventionSub||"Keep terminals upright and dry",tipHeading:e.checkTerminalHeading||"Check for terminal leaks or cracks",tipBody:e.checkTerminalBody||"Place battery in an upright position. If liquid is present on casing, avoid skin contact and keep away from paper scrap.",dos:e.uprightOrientation||"Upright orientation",donts:e.tiltedUpsideDown||"Tilted or upside down",audioText:d(2)},{id:3,badge:e.certifiedRecyclingTitle||"Safe Handover",title:e.certifiedRecyclingTitle||"Certified Recycling",subtitle:e.govtAuthHandlerSub||"Government authorized handler pickup",tipHeading:e.handOverVerifiedHeading||"Hand over only to verified recyclers",tipBody:e.handOverVerifiedBody||"Your assigned buyer GreenCycle has CPCB certified battery handling protocol and calibrated weight scales.",dos:e.cpcbBuyer||"CPCB Certified Buyer",donts:e.informalBurning||"Informal burning or dumping",audioText:d(3)}],h=m[i],p=()=>{X.tapTick(),c(!0),X.speak(h.audioText,t,()=>c(!0),()=>c(!1))},j=()=>{X.tapTick(),i<m.length-1?l(i+1):r?r():s&&s()};return n.jsxs("div",{className:"safety-screen-wrapper page-fade-enter",children:[n.jsxs("div",{className:"safety-top-nav",children:[a?n.jsx("button",{className:"step-back-btn",onClick:a,"aria-label":"Back",children:n.jsx(ie,{size:22,color:"#101A24",strokeWidth:2.2})}):n.jsx("div",{}),n.jsx("button",{className:"safety-close-btn",onClick:s||a,"aria-label":"Close Safety Tips",children:n.jsx(pe,{size:20,color:"#101A24",strokeWidth:2.4})})]}),n.jsxs("div",{className:"safety-card-container",children:[n.jsxs("div",{className:"battery-pill-badge",children:[n.jsx(hh,{size:15,color:"#D97706",strokeWidth:2.5}),n.jsx("span",{children:h.badge})]}),n.jsxs("div",{className:"safety-header-text",children:[n.jsx("h1",{className:"safety-title",children:h.title}),n.jsx("p",{className:"safety-subtitle",children:h.subtitle})]}),n.jsx("div",{className:"safety-illustration-box",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Safety_Tips_UI_Asset_Pack/01_safety_illustrations/battery_safety_hero.jpg",alt:"Battery safety handling",className:"safety-hero-img"})}),n.jsxs("div",{className:"safety-instruction-card",children:[n.jsxs("div",{className:"safety-instruction-top",children:[n.jsx("h3",{className:"safety-tip-heading",children:h.tipHeading}),n.jsxs("button",{className:`safety-audio-pill-btn ${o?"playing":""}`,onClick:p,"aria-label":"Listen to safety advice",children:[n.jsx(Ar,{size:16,color:"#D97706",strokeWidth:2.4}),n.jsx("span",{children:e.listenBtn||"Listen"})]})]}),n.jsx("p",{className:"safety-tip-body",children:h.tipBody}),n.jsxs("div",{className:"safety-comparison-row",children:[n.jsxs("div",{className:"safety-compare-item dos",children:[n.jsx(Vt,{size:16,color:"#0B6B4A",strokeWidth:2.5}),n.jsx("span",{children:h.dos})]}),n.jsxs("div",{className:"safety-compare-item donts",children:[n.jsx(Uh,{size:16,color:"#DC2626",strokeWidth:2.5}),n.jsx("span",{children:h.donts})]})]})]}),n.jsx("div",{className:"safety-pagination-row",children:m.map((x,y)=>n.jsx("span",{className:`safety-dot ${i===y?"active":""}`,onClick:()=>l(y)},y))}),n.jsxs("div",{className:"safety-actions-wrap",children:[n.jsxs("button",{className:"safety-primary-btn",onClick:j,children:[n.jsx("span",{children:i===m.length-1?e.gotItSafetyBtn||"Got it":e.nextTipBtn||"Next Tip"}),n.jsx(Nt,{size:18,color:"#FFFFFF",strokeWidth:2.4})]}),n.jsx("button",{className:"safety-secondary-btn",onClick:s||a,children:n.jsx("span",{children:e.remindMeLaterBtn||"Remind me later"})})]})]})]})}function um({t:e={},onClose:t,onGotIt:s}){return n.jsx("div",{className:"hazard-modal-backdrop",onClick:t,children:n.jsxs("div",{className:"hazard-bottom-sheet page-slide-up",onClick:r=>r.stopPropagation(),children:[n.jsx("div",{className:"sheet-drag-handle"}),n.jsx("button",{className:"hazard-close-btn",onClick:t,"aria-label":"Close hazard alert",children:n.jsx(pe,{size:18,color:"#101A24",strokeWidth:2.4})}),n.jsxs("div",{className:"hazard-header-block",children:[n.jsx("div",{className:"hazard-icon-circle",children:n.jsx(dh,{size:28,color:"#EA580C",strokeWidth:2.4})}),n.jsx("h2",{className:"hazard-title",children:e.hazardDetectedTitle||"Hazardous item detected"}),n.jsx("p",{className:"hazard-sub",children:e.hazardDetectedDesc||"A battery has been detected in your image. Please follow the safety guidelines below."})]}),n.jsxs("div",{className:"detected-item-card",children:[n.jsx("div",{className:"detected-item-thumb-wrap",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Hazardous_Battery_Detected_UI_Asset_Pack/02_app_assets/battery_thumbnail_reference.png",alt:"Detected Lithium-ion Battery",className:"detected-item-img"})}),n.jsxs("div",{className:"detected-item-info",children:[n.jsx("span",{className:"detected-item-tag",children:e.detectedItemTag||"Detected item"}),n.jsx("h3",{className:"detected-item-name",children:e.lithiumIonBattery||"Lithium-ion Battery"}),n.jsx("p",{className:"detected-item-desc",children:e.lithiumBatteryDesc||"Common in laptops, phones and other electronics."})]})]}),n.jsxs("div",{className:"safety-guidelines-box",children:[n.jsxs("div",{className:"guidelines-card-header",children:[n.jsx("div",{className:"shield-icon-circle",children:n.jsx(Mh,{size:14,color:"#EA580C",strokeWidth:2.5})}),n.jsx("h4",{className:"guidelines-heading",children:e.safetyGuidelinesTitle||"Safety guidelines"})]}),n.jsxs("div",{className:"guidelines-list",children:[n.jsxs("div",{className:"guideline-row",children:[n.jsx("div",{className:"guideline-icon-wrap flame",children:n.jsx(jh,{size:16,color:"#EA580C",strokeWidth:2.4})}),n.jsxs("div",{className:"guideline-text",children:[n.jsx("strong",{children:e.keepAwayHeatTitle||"Keep away from heat and fire"}),n.jsx("p",{children:e.keepAwayHeatDesc||"Do not expose batteries to high temperatures."})]})]}),n.jsxs("div",{className:"guideline-row",children:[n.jsx("div",{className:"guideline-icon-wrap hand",children:n.jsx(bh,{size:16,color:"#D97706",strokeWidth:2.4})}),n.jsxs("div",{className:"guideline-text",children:[n.jsx("strong",{children:e.handleCareTitle||"Handle with care"}),n.jsx("p",{children:e.handleCareDesc||"Avoid handling damaged or leaking batteries directly."})]})]}),n.jsxs("div",{className:"guideline-row",children:[n.jsx("div",{className:"guideline-icon-wrap recycle",children:n.jsx(Ah,{size:16,color:"#0B6B4A",strokeWidth:2.4})}),n.jsxs("div",{className:"guideline-text",children:[n.jsx("strong",{children:e.disposeSafelyTitle||"Dispose safely"}),n.jsx("p",{children:e.disposeSafelyDesc||"Keep in a dry place and hand over to a verified collector or recycler."})]})]})]})]}),n.jsx("button",{className:"hazard-primary-cta",onClick:s||t,children:n.jsx("span",{children:e.gotItBtn||"Got it"})})]})})}function pm({t:e,onNext:t,onBack:s}){const[r,a]=C.useState(!0),i=[{num:1,label:e.stepPhoto||"Photo",active:!0},{num:2,label:e.stepCategory||"Category",active:!1},{num:3,label:e.stepWeight||"Weight",active:!1},{num:4,label:e.stepValue||"Value",active:!1},{num:5,label:e.stepBuyer||"Buyer",active:!1}],l=()=>{a(!1),t&&t({photoUrl:"/assets/Kabadiwala_Connect_Hazardous_Battery_Detected_UI_Asset_Pack/02_app_assets/camera_preview_reference.png",hazardDetected:!0,detectedType:"Lithium-ion Battery",categoryId:"car_battery",categoryName:e.itemBattery||"Car Battery"})};return n.jsxs("div",{className:"step1-photo-screen page-fade-enter",children:[n.jsxs("div",{className:"step-header",children:[n.jsx("button",{className:"step-back-btn",onClick:s,"aria-label":"Go Back",children:n.jsx(ie,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsxs("div",{className:"step-header-text",children:[n.jsx("h1",{className:"step-title",children:e.takePhotoTitle||"Take a photo of your scrap"}),n.jsx("p",{className:"step-subtitle",children:e.takePhotoSub||"Make sure the item is clearly visible"})]})]}),n.jsxs("div",{className:"stepper-container",children:[n.jsx("div",{className:"stepper-line"}),n.jsx("div",{className:"stepper-steps",children:i.map(o=>n.jsxs("div",{className:`stepper-item ${o.active?"active":""}`,children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:o.num})}),n.jsx("span",{className:"stepper-label",children:o.label})]},o.num))})]}),n.jsx("div",{className:"camera-viewfinder-container",children:n.jsxs("div",{className:"camera-viewfinder",children:[n.jsx("img",{src:"/assets/Kabadiwala_Connect_Hazardous_Battery_Detected_UI_Asset_Pack/02_app_assets/camera_preview_reference.png",alt:"Scrap Camera Feed with Battery",className:"camera-feed-img"}),n.jsx("div",{className:"corner-bracket top-left"}),n.jsx("div",{className:"corner-bracket top-right"}),n.jsx("div",{className:"corner-bracket bottom-left"}),n.jsx("div",{className:"corner-bracket bottom-right"}),n.jsx("div",{className:"ai-detected-bounding-box",children:n.jsxs("div",{className:"ai-battery-detected-badge",children:[n.jsx("span",{className:"battery-icon-dot",children:"🔋"}),n.jsx("span",{children:e.batteryDetectedBanner||"Battery detected"})]})})]})}),n.jsxs("div",{className:"camera-controls-bar",children:[n.jsxs("button",{className:"control-action-btn","aria-label":"Flash",children:[n.jsx("div",{className:"control-icon-circle",children:n.jsx(Ji,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("span",{className:"control-label-title",children:e.flashLabel||"Flash"}),n.jsx("span",{className:"control-label-sub",children:e.flashOff||"Off"})]}),n.jsx("button",{className:"shutter-btn-outer",onClick:()=>a(!0),"aria-label":"Capture Photo",children:n.jsx("div",{className:"shutter-btn-inner"})}),n.jsxs("button",{className:"control-action-btn","aria-label":"Gallery",children:[n.jsx("div",{className:"control-icon-circle",children:n.jsx(Pd,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("span",{className:"control-label-title",children:e.galleryLabel||"Gallery"}),n.jsx("span",{className:"control-label-sub",children:e.gallerySub||"Choose from photos"})]})]}),r&&n.jsx(um,{t:e,onClose:()=>a(!1),onGotIt:l})]})}function hm({t:e={},sellFlowData:t,onDone:s,onBack:r}){var u;const[a,i]=C.useState(!1),[l,o]=C.useState(!1),[c,d]=C.useState(!1),m=(t==null?void 0:t.weight)||2.5,h=(t==null?void 0:t.ratePerKg)||125,p=(t==null?void 0:t.estimatedTotal)||Math.round(m*h),j=(t==null?void 0:t.paymentMethod)==="cash"?e.cashMethod?`${e.cashMethod}`:"Cash Settlement":e.upiMethod?`${e.upiMethod} (Google Pay)`:"UPI (Google Pay)",x=(t==null?void 0:t.categoryName)||e.itemPcb||"PCB / Circuit Board",y=((u=t==null?void 0:t.buyer)==null?void 0:u.name)||"Rohini Recycling Centre",_=()=>{i(!0),setTimeout(()=>{i(!1),d(!0),setTimeout(()=>d(!1),2500)},800)},f=()=>{navigator.share?navigator.share({title:`Kabadiwala Connect Receipt - ₹${p}`,text:`Sold ${m}kg of ${x} for ₹${p} via Kabadiwala Connect.`,url:window.location.href}).catch(()=>{}):(o(!0),setTimeout(()=>o(!1),2e3))};return n.jsxs("div",{className:"receipt-screen-wrapper page-fade-enter",children:[n.jsxs("div",{className:"receipt-top-header",children:[n.jsx("button",{className:"receipt-back-btn",onClick:r||s,"aria-label":"Go Back",children:n.jsx(ie,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("h1",{className:"receipt-screen-title",children:e.receiptTitle||"Receipt"}),n.jsx("div",{style:{width:36}})]}),n.jsxs("div",{className:"receipt-scroll-container",children:[n.jsxs("div",{className:"receipt-paper-ticket",children:[n.jsxs("div",{className:"receipt-brand-row",children:[n.jsxs("div",{className:"receipt-logo-lockup",children:[n.jsx("img",{src:"/assets/Kabadiwala_Connect_Transaction_Receipt_UI_Asset_Pack/02_app_assets/kc2_logo_lockup_transparent_reference.png",alt:"K2 Kabadiwala Connect",className:"receipt-k2-logo"}),n.jsxs("div",{className:"receipt-brand-text",children:[n.jsx("strong",{className:"receipt-k2-title",children:"K2"}),n.jsx("span",{className:"receipt-k2-name",children:"Kabadiwala Connect"}),n.jsx("span",{className:"receipt-k2-tagline",children:e.recycleTagline||"Recycle Today, Better Tomorrow"})]})]}),n.jsxs("div",{className:"receipt-meta-box",children:[n.jsx("span",{className:"receipt-type-label",children:e.transactionReceipt||"Transaction Receipt"}),n.jsx("span",{className:"receipt-txn-num",children:"#TXN7843291"}),n.jsx("span",{className:"receipt-txn-date",children:"12 Mar 2025, 10:24 AM"})]})]}),n.jsx("div",{className:"receipt-ticket-divider"}),n.jsxs("div",{className:"receipt-section",children:[n.jsx("span",{className:"receipt-section-label",children:e.paidToSection||"Paid To"}),n.jsxs("div",{className:"receipt-buyer-card",children:[n.jsx("div",{className:"buyer-store-icon",children:n.jsx(Ih,{size:20,color:"#0B6B4A",strokeWidth:2.2})}),n.jsxs("div",{className:"buyer-details-col",children:[n.jsxs("div",{className:"buyer-title-row",children:[n.jsx("h3",{className:"buyer-store-name",children:y}),n.jsx("div",{className:"verified-check-mark",children:n.jsx(Q,{size:11,color:"#FFFFFF",strokeWidth:3.5})})]}),n.jsx("span",{className:"buyer-loc-text",children:"Kabadiwala • Rohini, Delhi"}),n.jsxs("span",{className:"buyer-auth-code",children:[e.authIdPrefix||"Authorization ID:"," K2-DL-0891"]})]}),n.jsxs("div",{className:"govt-auth-pill",children:[n.jsx("span",{className:"govt-icon",children:"🏛️"}),n.jsx("span",{children:e.govtAuthorisedPill||"Government Authorised"})]})]})]}),n.jsx("div",{className:"receipt-ticket-divider"}),n.jsxs("div",{className:"receipt-section",children:[n.jsx("span",{className:"receipt-section-label",children:e.itemDetailsSection||"Item Details"}),n.jsxs("div",{className:"receipt-item-row",children:[n.jsx("div",{className:"receipt-item-thumb-box",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Transaction_Receipt_UI_Asset_Pack/02_app_assets/pcb_photo_reference.png",alt:x,className:"receipt-item-img"})}),n.jsxs("div",{className:"receipt-item-info-col",children:[n.jsx("h4",{className:"receipt-item-heading",children:x}),n.jsx("p",{className:"receipt-item-sub",children:e.itemDetailsSub||"Cables, chargers, circuit board etc."})]})]}),n.jsxs("div",{className:"receipt-stats-grid",children:[n.jsxs("div",{className:"receipt-stat-col",children:[n.jsx("span",{className:"stat-label",children:e.totalWeightStat||"Total Weight"}),n.jsxs("span",{className:"stat-value",children:[n.jsx("span",{className:"weight-bag-icon",children:"⚖️"})," ",m," kg"]})]}),n.jsxs("div",{className:"receipt-stat-col",children:[n.jsx("span",{className:"stat-label",children:e.ratePerKgStat||"Rate (per kg)"}),n.jsxs("span",{className:"stat-value",children:["₹ ",h]})]}),n.jsxs("div",{className:"receipt-stat-col total-col",children:[n.jsx("span",{className:"stat-label",children:e.totalAmountStat||"Total Amount"}),n.jsxs("span",{className:"stat-value total-highlight",children:["₹ ",p]})]})]})]}),n.jsx("div",{className:"receipt-ticket-divider"}),n.jsxs("div",{className:"receipt-section",children:[n.jsx("span",{className:"receipt-section-label",children:e.paymentDetailsSection||"Payment Details"}),n.jsxs("div",{className:"payment-specs-list",children:[n.jsxs("div",{className:"payment-spec-row",children:[n.jsx("span",{className:"ps-label",children:e.paymentMethodLabel||"Payment Method"}),n.jsx("strong",{className:"ps-val",children:j})]}),n.jsxs("div",{className:"payment-spec-row",children:[n.jsx("span",{className:"ps-label",children:e.transactionIdLabel||"Transaction ID"}),n.jsx("strong",{className:"ps-val",children:"TXN7843291"})]}),n.jsxs("div",{className:"payment-spec-row",children:[n.jsx("span",{className:"ps-label",children:e.paymentStatusLabel||"Payment Status"}),n.jsxs("div",{className:"payment-received-tag",children:[n.jsx("span",{className:"received-dot"}),n.jsx("span",{children:e.paymentReceivedStatus||"Payment Received"})]})]})]})]}),n.jsxs("div",{className:"receipt-impact-banner",children:[n.jsx("div",{className:"impact-leaf-circle",children:n.jsx(Td,{size:18,color:"#FFFFFF",strokeWidth:2.4})}),n.jsxs("div",{className:"impact-banner-text",children:[n.jsx("h4",{className:"impact-title",children:e.thankYouRecyclingTitle||"Thank you for recycling!"}),n.jsx("p",{className:"impact-sub",children:e.cleanerIndiaSub||"You're helping build a cleaner, greener India."})]})]}),n.jsx("div",{className:"receipt-footer-motto",children:n.jsx("span",{children:e.keepRecyclingMotto||"KEEP RECYCLING, KEEP MAKING A DIFFERENCE"})})]}),n.jsxs("div",{className:"receipt-actions-row",children:[n.jsxs("button",{className:"receipt-action-btn",onClick:_,disabled:a,children:[n.jsx(yh,{size:18,color:"#0B6B4A",strokeWidth:2.2}),n.jsx("span",{children:c?e.downloadedBtn||"Downloaded!":a?e.generatingBtn||"Generating...":e.downloadBillBtn||"Download Bill"})]}),n.jsxs("button",{className:"receipt-action-btn",onClick:f,children:[n.jsx(zd,{size:18,color:"#0B6B4A",strokeWidth:2.2}),n.jsx("span",{children:l?e.copiedLinkBtn||"Copied Link!":e.shareBillBtn||"Share Bill"})]})]}),n.jsx("button",{className:"receipt-done-primary-btn",onClick:s,children:n.jsx("span",{children:e.doneBtn||e.done||"Done"})})]})]})}function mm({t:e,user:t={name:"Rakesh",phone:"7015363695"},onUpdateUser:s,onNavigateTab:r,onBack:a}){const[i,l]=C.useState(null),[o,c]=C.useState(t.name||"Rakesh"),[d,m]=C.useState(t.phone||"7015363695"),[h,p]=C.useState(null),[j,x]=C.useState({line1:"Shop #14, Sector 7 Scrap Market",area:"Rohini, Delhi",pincode:"110085"}),[y,_]=C.useState({notifications:!0,audioGuidance:!0,autoSyncWifi:!0,smsAlerts:!0}),f=k=>{k==null||k.preventDefault(),s&&s({name:o,phone:d}),l(null),g(e.profileSaved||"Profile details updated!")},u=k=>{k==null||k.preventDefault(),l(null),g(e.addressSaved||"Pickup address saved successfully!")},g=k=>{p(k),setTimeout(()=>p(null),2500)},b=[{id:"profile_details",icon:jt,title:e.profileDetails||"Profile Details",subtitle:e.profileDetailsDesc||"View and update your personal details",action:()=>l("edit_profile")},{id:"address",icon:xt,title:e.address||"Address",subtitle:e.addressDesc||"Manage your delivery and pickup address",action:()=>l("address")},{id:"language",icon:kh,title:e.language||"Language",subtitle:e.languageDesc||"Choose your preferred language",action:()=>r?r("language"):null},{id:"sync_details",icon:Xi,title:e.syncDetails||"Sync Details",subtitle:e.syncDetailsDesc||"Sync your data across devices",action:()=>r?r("sync_status"):null},{id:"safety_hazards",icon:Lh,title:e.safetyHazards||"Safety & Hazards",subtitle:e.safetyHazardsDesc||"Learn about safety guidelines for e-waste",action:()=>r?r("safety_tips"):null},{id:"app_settings",icon:Dh,title:e.appSettings||"App Settings",subtitle:e.appSettingsDesc||"Notifications, sound effects and privacy",action:()=>l("settings")},{id:"help_support",icon:wh,title:e.helpSupport||"Help & Support",subtitle:e.helpSupportDesc||"Get help or contact our 24/7 team",action:()=>l("help")}];return n.jsxs("div",{className:"profile-screen-wrapper page-fade-enter",children:[n.jsxs("div",{className:"profile-scroll-container",children:[n.jsxs("div",{className:"profile-header-card",children:[n.jsx("div",{className:"profile-avatar-circle",children:n.jsx("span",{className:"profile-avatar-letter",children:t.name?t.name.charAt(0).toUpperCase():"R"})}),n.jsxs("div",{className:"profile-info-col",children:[n.jsxs("div",{className:"profile-name-row",children:[n.jsx("h2",{className:"profile-user-name",children:t.name||"Rakesh"}),n.jsxs("button",{className:"profile-edit-btn",onClick:()=>l("edit_profile"),"aria-label":"Edit Profile",children:[n.jsx(Th,{size:13,color:"#0B6B4A",strokeWidth:2.4}),n.jsx("span",{children:"Edit"})]})]}),n.jsxs("span",{className:"profile-user-phone",children:["+91 ",t.phone||"7015363695"]}),n.jsxs("div",{className:"profile-verified-badge",children:[n.jsx("div",{className:"verified-dot-inner",children:n.jsx(Q,{size:9,color:"#FFFFFF",strokeWidth:3.5})}),n.jsx("span",{children:"Verified Member"})]})]})]}),n.jsxs("div",{className:"profile-motivation-banner",children:[n.jsx("div",{className:"motivation-leaf-icon-circle",children:n.jsx(Td,{size:18,color:"#0B6B4A",strokeWidth:2.4})}),n.jsxs("div",{className:"motivation-text-wrap",children:[n.jsx("h4",{className:"motivation-title",children:"Keep recycling, keep making a difference!"}),n.jsx("p",{className:"motivation-sub",children:"Small actions lead to a cleaner, greener tomorrow."})]})]}),n.jsx("div",{className:"profile-menu-card",children:b.map((k,v)=>{const S=k.icon;return n.jsxs("div",{className:"profile-menu-row",onClick:k.action,role:"button",tabIndex:0,children:[n.jsx("div",{className:"menu-icon-circle",children:n.jsx(S,{size:19,color:"#0B6B4A",strokeWidth:2.2})}),n.jsxs("div",{className:"menu-text-col",children:[n.jsx("h4",{className:"menu-item-title",children:k.title}),n.jsx("p",{className:"menu-item-sub",children:k.subtitle})]}),n.jsx(ge,{size:18,color:"#9CA3AF",strokeWidth:2.2,className:"menu-chevron"})]},k.id)})}),n.jsx("div",{className:"profile-app-version-footer",children:n.jsx("span",{children:"Kabadiwala Connect v1.4.2 • CPCB Certified Partner"})})]}),h&&n.jsxs("div",{className:"profile-toast-banner",children:[n.jsx(Vt,{size:16,color:"#FFFFFF"}),n.jsx("span",{children:h})]}),i==="edit_profile"&&n.jsx("div",{className:"profile-modal-backdrop",onClick:()=>l(null),children:n.jsxs("div",{className:"profile-modal-sheet",onClick:k=>k.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsx("h3",{children:e.editProfile||"Edit Profile"}),n.jsx("button",{className:"modal-close-btn",onClick:()=>l(null),children:n.jsx(pe,{size:18,color:"#6B7280"})})]}),n.jsxs("form",{onSubmit:f,className:"profile-form",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:e.name||"Full Name"}),n.jsx("input",{type:"text",value:o,onChange:k=>c(k.target.value),placeholder:e.name||"Enter your name",className:"profile-input",required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:e.phone||"Mobile Number"}),n.jsx("input",{type:"tel",value:d,onChange:k=>m(k.target.value),placeholder:"10-digit mobile number",className:"profile-input",maxLength:10,required:!0})]}),n.jsx("button",{type:"submit",className:"profile-save-btn",children:e.save||"Save Changes"})]})]})}),i==="address"&&n.jsx("div",{className:"profile-modal-backdrop",onClick:()=>l(null),children:n.jsxs("div",{className:"profile-modal-sheet",onClick:k=>k.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsx("h3",{children:e.address||"Manage Pickup Address"}),n.jsx("button",{className:"modal-close-btn",onClick:()=>l(null),children:n.jsx(pe,{size:18,color:"#6B7280"})})]}),n.jsxs("form",{onSubmit:u,className:"profile-form",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:e.addressLine1||"Shop / House & Street"}),n.jsx("input",{type:"text",value:j.line1,onChange:k=>x({...j,line1:k.target.value}),placeholder:"Street / Shop details",className:"profile-input",required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:e.area||"Area / Locality & City"}),n.jsx("input",{type:"text",value:j.area,onChange:k=>x({...j,area:k.target.value}),placeholder:"e.g. Rohini, Delhi",className:"profile-input",required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:e.pincode||"Pincode"}),n.jsx("input",{type:"text",value:j.pincode,onChange:k=>x({...j,pincode:k.target.value}),placeholder:"6-digit pincode",className:"profile-input",maxLength:6,required:!0})]}),n.jsx("button",{type:"submit",className:"profile-save-btn",children:e.save||"Save Address"})]})]})}),i==="settings"&&n.jsx("div",{className:"profile-modal-backdrop",onClick:()=>l(null),children:n.jsxs("div",{className:"profile-modal-sheet",onClick:k=>k.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsx("h3",{children:e.appSettings||"App Settings"}),n.jsx("button",{className:"modal-close-btn",onClick:()=>l(null),children:n.jsx(pe,{size:18,color:"#6B7280"})})]}),n.jsxs("div",{className:"settings-toggles-list",children:[n.jsxs("div",{className:"setting-toggle-row",children:[n.jsxs("div",{className:"st-info",children:[n.jsx("strong",{children:e.notifications||"Push Notifications"}),n.jsx("span",{children:"Get real-time pickup & rate alerts"})]}),n.jsx("input",{type:"checkbox",checked:y.notifications,onChange:k=>_({...y,notifications:k.target.checked}),className:"toggle-switch-checkbox"})]}),n.jsxs("div",{className:"setting-toggle-row",children:[n.jsxs("div",{className:"st-info",children:[n.jsx("strong",{children:e.audioGuidance||"Audio Voice Guidance"}),n.jsx("span",{children:"Read aloud scrap valuations and safety tips"})]}),n.jsx("input",{type:"checkbox",checked:y.audioGuidance,onChange:k=>_({...y,audioGuidance:k.target.checked}),className:"toggle-switch-checkbox"})]}),n.jsxs("div",{className:"setting-toggle-row",children:[n.jsxs("div",{className:"st-info",children:[n.jsx("strong",{children:e.autoSync||"Auto-Sync on Wi-Fi"}),n.jsx("span",{children:"Sync offline lots automatically"})]}),n.jsx("input",{type:"checkbox",checked:y.autoSyncWifi,onChange:k=>_({...y,autoSyncWifi:k.target.checked}),className:"toggle-switch-checkbox"})]}),n.jsxs("div",{className:"setting-toggle-row",children:[n.jsxs("div",{className:"st-info",children:[n.jsx("strong",{children:e.smsAlerts||"SMS Transaction Receipts"}),n.jsx("span",{children:"Receive bill receipts via SMS link"})]}),n.jsx("input",{type:"checkbox",checked:y.smsAlerts,onChange:k=>_({...y,smsAlerts:k.target.checked}),className:"toggle-switch-checkbox"})]})]}),n.jsx("button",{type:"button",className:"profile-save-btn",onClick:()=>{l(null),g("Settings saved")},children:"Done"})]})}),i==="help"&&n.jsx("div",{className:"profile-modal-backdrop",onClick:()=>l(null),children:n.jsxs("div",{className:"profile-modal-sheet",onClick:k=>k.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsx("h3",{children:"Help & Support"}),n.jsx("button",{className:"modal-close-btn",onClick:()=>l(null),children:n.jsx(pe,{size:18,color:"#6B7280"})})]}),n.jsxs("div",{className:"help-support-content",children:[n.jsxs("div",{className:"support-contact-card",children:[n.jsx(zh,{size:20,color:"#0B6B4A"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Toll-Free Helpline"}),n.jsx("p",{children:"1800-267-9000 (9 AM - 8 PM)"})]})]}),n.jsxs("div",{className:"support-contact-card",children:[n.jsx(os,{size:20,color:"#0B6B4A"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Recycler Grievance Redressal"}),n.jsx("p",{children:"support@kabadiwalaconnect.org"})]})]}),n.jsx("p",{className:"help-subtext",children:"Our team is committed to ensuring fair prices and safe disposal of e-waste across India."})]}),n.jsx("button",{type:"button",className:"profile-save-btn",onClick:()=>l(null),children:"Close"})]})}),n.jsxs("div",{className:"home-nav-bar",children:[n.jsxs("button",{className:"nav-tab",onClick:()=>r?r("home"):null,children:[n.jsx($t,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Home"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>r?r("history"):null,children:[n.jsx(Ut,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Bookings"})]}),n.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:()=>r?r("step1_photo"):null,children:[n.jsx(St,{size:26,color:"white"}),n.jsx("span",{className:"fab-label",children:"Scan"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>r?r("todays_prices"):null,children:[n.jsx(Zi,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Rates"})]}),n.jsxs("button",{className:"nav-tab active",children:[n.jsx(jt,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Profile"})]})]})]})}function fm({t:e,currentLocation:t="Rohini, Delhi",onNavigateTab:s,onBack:r}){const[a,i]=C.useState(0),[l,o]=C.useState(t),[c,d]=C.useState(!1),[m,h]=C.useState(null),[p,j]=C.useState("4:00 PM - 6:00 PM"),[x,y]=C.useState(["E-waste","Electronics"]),[_,f]=C.useState(null),u=[{label:e.todayLabel||"Today",date:"07 Sep",isAvailable:!0},{label:e.tomorrowLabel||"Tomorrow",date:"08 Sep",isAvailable:!0},{label:"Wed",date:"09 Sep",isAvailable:!0},{label:"Thu",date:"10 Sep",isAvailable:!0},{label:"Fri",date:"11 Sep",isAvailable:!0}],g=["Rohini, Delhi","Andheri West, Mumbai","Koramangala, Bengaluru","Kothrud, Pune","Connaught Place, Delhi"],b=[{id:"k1",name:"Rakesh Kumar",initials:"R",rating:4.8,reviews:124,distance:"1.8 km",status:"Available Today",statusType:"available",verified:!0,materials:["E-waste","Electronics","Cables","Plastic"],phone:"+91 98765 43210"},{id:"k2",name:"Suresh Kumar",initials:"SK",rating:4.6,reviews:98,distance:"2.4 km",status:"Few slots left",statusType:"limited",verified:!0,materials:["Paper","Plastic","Metal","Electronic"],phone:"+91 98111 22334"},{id:"k3",name:"Amit Sharma",initials:"AM",rating:4.4,reviews:76,distance:"3.2 km",status:"Fully booked",statusType:"booked",verified:!1,materials:["Metal","Plastic","Paper"],phone:"+91 98222 33445"}],k=["10:00 AM - 12:00 PM","12:00 PM - 2:00 PM","2:00 PM - 4:00 PM","4:00 PM - 6:00 PM"],v=["E-waste","Electronics","Cables","Plastic","Paper","Metal","Batteries"],S=w=>{x.includes(w)?x.length>1&&y(x.filter(B=>B!==w)):y([...x,w])},E=w=>{w.preventDefault();const B=m;h(null),f(`Pickup booked with ${B.name} for ${u[a].label} (${p})!`),setTimeout(()=>f(null),3500)};return n.jsxs("div",{className:"book-pickup-screen page-fade-enter",children:[n.jsxs("div",{className:"book-pickup-top-bar",children:[n.jsx("h1",{className:"book-pickup-title",children:e.bookingsTitle||"Book a Pickup"}),n.jsxs("button",{className:"location-pill-btn",onClick:()=>d(!0),"aria-label":"Select Location",children:[n.jsx(xt,{size:13,color:"#0B6B4A"}),n.jsx("span",{children:l}),n.jsx(bn,{size:13,color:"#0B6B4A"})]})]}),n.jsxs("div",{className:"book-pickup-scroll-container",children:[n.jsxs("div",{className:"next-pickup-banner",children:[n.jsx("div",{className:"next-pickup-icon-circle",children:n.jsx(Wh,{size:20,color:"#0B6B4A",strokeWidth:2.4})}),n.jsxs("div",{className:"next-pickup-info",children:[n.jsx("span",{className:"np-label",children:e.nextScheduledPickup||"Next Scheduled Pickup"}),n.jsx("strong",{className:"np-name",children:"Rakesh Kumar • Today, 4:00 PM"})]}),n.jsx("div",{className:"np-live-tag",children:n.jsxs("span",{children:["● ",e.confirmedStatus||"Confirmed"]})})]}),n.jsxs("div",{className:"date-selector-section",children:[n.jsx("span",{className:"section-sublabel",children:e.selectPickupDate||"Select Pickup Date"}),n.jsx("div",{className:"date-chips-row",children:u.map((w,B)=>{const J=B===a;return n.jsxs("button",{className:`date-chip ${J?"active":""}`,onClick:()=>i(B),children:[n.jsx("span",{className:"date-chip-label",children:w.label}),n.jsx("strong",{className:"date-chip-day",children:w.date})]},B)})})]}),n.jsxs("div",{className:"kabadiwalas-section",children:[n.jsxs("div",{className:"section-header-row",children:[n.jsx("h2",{className:"section-heading",children:e.availableKabadiwalas||"Available Kabadiwalas"}),n.jsxs("span",{className:"partners-count-badge",children:["3 ",e.nearbyBadge||"nearby"]})]}),n.jsx("div",{className:"kabadiwalas-list",children:b.map(w=>{const B=w.statusType==="booked";return n.jsxs("div",{className:"kabadiwala-card",children:[n.jsxs("div",{className:"kabadiwala-card-top",children:[n.jsx("div",{className:"k-avatar-circle",children:n.jsx("span",{children:w.initials})}),n.jsxs("div",{className:"k-info-col",children:[n.jsxs("div",{className:"k-name-row",children:[n.jsx("h3",{className:"k-name",children:w.name}),w.verified&&n.jsxs("div",{className:"k-verified-pill",title:"Verified Recycler",children:[n.jsx(Q,{size:10,color:"#FFFFFF",strokeWidth:3.5}),n.jsx("span",{children:e.verifiedBadge||"Verified"})]})]}),n.jsxs("div",{className:"k-meta-row",children:[n.jsxs("div",{className:"k-rating-pill",children:[n.jsx(ni,{size:11,color:"#F59E0B",fill:"#F59E0B"}),n.jsx("span",{children:w.rating}),n.jsxs("span",{className:"k-reviews-count",children:["(",w.reviews,")"]})]}),n.jsx("span",{className:"k-dot-separator",children:"•"}),n.jsx("span",{className:"k-distance-text",children:w.distance})]})]}),n.jsxs("div",{className:`k-status-badge ${w.statusType}`,children:[n.jsx("span",{className:"status-dot"}),n.jsx("span",{children:w.status})]})]}),n.jsxs("div",{className:"k-materials-wrap",children:[n.jsx("span",{className:"materials-label",children:e.buysLabel||"Buys:"}),n.jsx("div",{className:"material-tags-row",children:w.materials.map((J,Ct)=>n.jsx("span",{className:"k-mat-chip",children:J},Ct))})]}),n.jsx("div",{className:"k-card-action-row",children:n.jsx("button",{className:`k-book-btn ${B?"disabled":""}`,disabled:B,onClick:()=>h(w),children:B?e.fullyBooked||"Fully Booked":e.bookPickupBtn||"Book Pickup →"})})]},w.id)})})]})]}),m&&n.jsx("div",{className:"profile-modal-backdrop",onClick:()=>h(null),children:n.jsxs("div",{className:"profile-modal-sheet",onClick:w=>w.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsxs("div",{className:"sheet-item-info",children:[n.jsx("div",{className:"k-avatar-circle",style:{width:42,height:42,fontSize:16},children:n.jsx("span",{children:m.initials})}),n.jsxs("div",{children:[n.jsxs("h3",{style:{margin:0,fontSize:16,fontWeight:800,color:"#101A24"},children:["Book ",m.name]}),n.jsxs("p",{style:{margin:"2px 0 0",fontSize:12,color:"#6E7782"},children:[u[a].label," (",u[a].date,") • ",l]})]})]}),n.jsx("button",{className:"modal-close-btn",onClick:()=>h(null),children:n.jsx(pe,{size:18,color:"#6B7280"})})]}),n.jsxs("form",{onSubmit:E,className:"profile-form",style:{marginTop:12},children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:e.selectTimeSlot||"Select Time Slot"}),n.jsx("div",{className:"time-slots-grid",children:k.map((w,B)=>n.jsxs("button",{type:"button",className:`time-slot-chip ${p===w?"active":""}`,onClick:()=>j(w),children:[n.jsx(Er,{size:12}),n.jsx("span",{children:w})]},B))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:e.scrapMaterialsForPickup||"Scrap Materials for Pickup"}),n.jsx("div",{className:"material-selection-grid",children:v.map((w,B)=>{const J=x.includes(w);return n.jsxs("button",{type:"button",className:`mat-select-chip ${J?"selected":""}`,onClick:()=>S(w),children:[J&&n.jsx(Q,{size:11,strokeWidth:3}),n.jsx("span",{children:w})]},B)})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:e.pickupLocation||"Pickup Location"}),n.jsxs("div",{className:"pickup-loc-preview",children:[n.jsx(xt,{size:15,color:"#0B6B4A"}),n.jsxs("span",{children:[l," (",e.defaultSavedAddress||"Default Saved Address",")"]})]})]}),n.jsx("button",{type:"submit",className:"profile-save-btn",style:{marginTop:10},children:e.confirmDoorstepPickup||"Confirm Doorstep Pickup"})]})]})}),c&&n.jsx("div",{className:"profile-modal-backdrop",onClick:()=>d(!1),children:n.jsxs("div",{className:"profile-modal-sheet",onClick:w=>w.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsx("h3",{children:e.selectServiceZone||"Select Service Zone"}),n.jsx("button",{className:"modal-close-btn",onClick:()=>d(!1),children:n.jsx(pe,{size:18,color:"#6B7280"})})]}),n.jsx("div",{className:"locations-list-group",children:g.map((w,B)=>n.jsxs("div",{className:`loc-choice-row ${l===w?"active":""}`,onClick:()=>{o(w),d(!1)},children:[n.jsx(xt,{size:16,color:l===w?"#0B6B4A":"#6E7782"}),n.jsx("span",{children:w}),l===w&&n.jsx(Q,{size:16,color:"#0B6B4A"})]},B))})]})}),_&&n.jsxs("div",{className:"profile-toast-banner",children:[n.jsx(Vt,{size:16,color:"#FFFFFF"}),n.jsx("span",{children:_})]}),n.jsxs("div",{className:"home-nav-bar",children:[n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("home"):r&&r(),children:[n.jsx($t,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabHome||"Home"})]}),n.jsxs("button",{className:"nav-tab active",children:[n.jsx(Ut,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabBookings||"Bookings"})]}),n.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:()=>s?s("step1_photo"):r&&r(),"aria-label":"Camera Scan",children:[n.jsx(St,{size:26,color:"#FFFFFF"}),n.jsx("span",{className:"fab-label",children:e.tabCamera||"Camera"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("todays_prices"):r&&r(),children:[n.jsx(Zi,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabRates||"Rates"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("profile"):r&&r(),children:[n.jsx(jt,{size:22,className:"tab-icon"}),n.jsx("span",{children:e.tabProfile||"Profile"})]})]})]})}function gm(){const[e,t]=C.useState("splash"),[s,r]=C.useState("splash"),[a,i]=C.useState("en"),[l,o]=C.useState({name:"Rakesh",phone:"7015363695"}),[c,d]=C.useState({photoUrl:"/assets/Kabadiwala_Connect_Step1_TakePhoto_UI_Asset_Pack/01_camera_illustration/scrap_photo_reference.jpg",categoryId:"pcb",categoryName:"PCB (Circuit Board)",weight:2.5,estimatedTotal:312,ratePerKg:125,streetBonus:18,buyer:{id:"buyer_1",name:"GreenCycle Recycling",rate:128}}),m=uo[a]||uo.en,h=()=>t("language"),p=()=>{t(s==="profile"?"profile":"auth")},j=v=>{o(S=>({...S,...v})),t("location")},x=()=>t("notification"),y=()=>t("home"),_=v=>{d(S=>({...S,...v})),t("step1_hazardous_battery_detected")},f=v=>{d(S=>({...S,...v})),v.categoryId==="car_battery"?t("safety_tips"):t("step3_weight")},u=v=>{d(S=>({...S,...v})),t("step4_value")},g=v=>{d(S=>({...S,...v})),t("step5_buyer")},b=v=>{d(S=>({...S,...v})),t("payment")},k=v=>{d(S=>({...S,...v})),t("receipt")};return n.jsxs(Gh,{currentScreen:e,setCurrentScreen:t,currentLang:a,setLanguage:i,children:[e==="splash"&&n.jsx(qh,{t:m,onNext:h}),e==="language"&&n.jsx(Qh,{t:m,currentLang:a,setLanguage:i,onNext:p,onBack:()=>t(s==="profile"?"profile":"splash")}),e==="auth"&&n.jsx(Yh,{t:m,onSkip:()=>t("location"),onAuthenticated:j,onBack:()=>t("language")}),e==="location"&&n.jsx(Xh,{t:m,onNext:x,onBack:()=>t("auth")}),e==="notification"&&n.jsx(Zh,{t:m,onNext:y,onBack:()=>t("location")}),e==="home"&&n.jsx(Jh,{t:m,user:l,currentLang:a,onNavigate:v=>t(v)}),e==="step1_photo"&&n.jsx(em,{t:m,onNext:_,onBack:()=>t("home")}),e==="step1_hazardous_battery_detected"&&n.jsx(pm,{t:m,onNext:v=>{d(S=>({...S,...v})),t("step2_category")},onBack:()=>t("step1_photo")}),e==="step2_category"&&n.jsx(tm,{t:m,photoUrl:c.photoUrl,initialCategory:c.categoryId,onNext:f,onBack:()=>t("step1_photo"),onRetake:()=>t("step1_photo")}),e==="step3_weight"&&n.jsx(nm,{t:m,categoryData:c,initialWeight:c.weight,onNext:u,onBack:()=>t("step2_category"),onChangeCategory:()=>t("step2_category")}),e==="step4_value"&&n.jsx(sm,{t:m,currentLang:a,sellFlowData:c,onNext:g,onBack:()=>t("step3_weight")}),e==="step5_buyer"&&n.jsx(rm,{t:m,sellFlowData:c,onNext:b,onBack:()=>t("step4_value")}),e==="payment"&&n.jsx(am,{t:m,sellFlowData:c,onNext:k,onBack:()=>t("step5_buyer")}),e==="receipt"&&n.jsx(hm,{t:m,sellFlowData:c,onDone:()=>t("home"),onBack:()=>t("payment")}),e==="book_pickup"&&n.jsx(fm,{t:m,currentLocation:"Rohini, Delhi",onNavigateTab:v=>{v==="home"&&t("home"),v==="step1_photo"&&t("step1_photo"),v==="todays_prices"&&t("todays_prices"),v==="history"&&t("history"),v==="my_earnings"&&t("my_earnings"),v==="profile"&&t("profile")},onBack:()=>t("home")}),e==="todays_prices"&&n.jsx(im,{t:m,currentLang:a,currentLocation:"Rohini, Delhi",onBack:()=>t("home"),onSelectCategory:v=>{d(S=>({...S,categoryId:v})),t("step1_photo")},onNavigateTab:v=>{v==="home"&&t("home"),v==="step1_photo"&&t("step1_photo"),(v==="history"||v==="bookings"||v==="book_pickup")&&t("book_pickup"),v==="my_earnings"&&t("my_earnings"),v==="profile"&&t("profile")}}),e==="my_earnings"&&n.jsx(lm,{t:m,currentLang:a,onBack:()=>t("home"),onNavigateTab:v=>{v==="home"&&t("home"),v==="step1_photo"&&t("step1_photo"),v==="todays_prices"&&t("todays_prices"),(v==="history"||v==="bookings"||v==="book_pickup")&&t("book_pickup"),v==="profile"&&t("profile")}}),e==="history"&&n.jsx(om,{t:m,onBack:()=>t("home"),onNavigateTab:v=>{v==="home"&&t("home"),v==="step1_photo"&&t("step1_photo"),v==="todays_prices"&&t("todays_prices"),v==="my_earnings"&&t("my_earnings"),v==="profile"&&t("profile")}}),e==="sync_status"&&n.jsx(cm,{t:m,onBack:()=>t("home"),onNavigateTab:v=>{v==="home"&&t("home"),v==="step1_photo"&&t("step1_photo"),v==="todays_prices"&&t("todays_prices"),(v==="history"||v==="bookings"||v==="book_pickup")&&t("book_pickup"),v==="my_earnings"&&t("my_earnings"),v==="profile"&&t("profile")}}),e==="profile"&&n.jsx(mm,{t:m,user:l,onUpdateUser:v=>o(S=>({...S,...v})),onNavigateTab:v=>{v==="home"&&t("home"),v==="step1_photo"&&t("step1_photo"),v==="todays_prices"&&t("todays_prices"),(v==="history"||v==="bookings"||v==="book_pickup")&&t("book_pickup"),v==="my_earnings"&&t("my_earnings"),v==="sync_status"&&t("sync_status"),v==="safety_tips"&&t("safety_tips"),v==="language"&&(r("profile"),t("language"))},onBack:()=>t("home")}),e==="safety_tips"&&n.jsx(dm,{t:m,currentLang:a,onClose:()=>t("step2_category"),onProceed:()=>t("step3_weight"),onBack:()=>t("step2_category")})]})}ca.createRoot(document.getElementById("root")).render(n.jsx(Qd.StrictMode,{children:n.jsx(gm,{})}));
