(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function pc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ja={exports:{}},nl={},qa={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=Symbol.for("react.element"),hc=Symbol.for("react.portal"),mc=Symbol.for("react.fragment"),gc=Symbol.for("react.strict_mode"),xc=Symbol.for("react.profiler"),vc=Symbol.for("react.provider"),yc=Symbol.for("react.context"),wc=Symbol.for("react.forward_ref"),kc=Symbol.for("react.suspense"),jc=Symbol.for("react.memo"),Sc=Symbol.for("react.lazy"),Oo=Symbol.iterator;function Nc(e){return e===null||typeof e!="object"?null:(e=Oo&&e[Oo]||e["@@iterator"],typeof e=="function"?e:null)}var es={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ts=Object.assign,ns={};function sn(e,t,n){this.props=e,this.context=t,this.refs=ns,this.updater=n||es}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rs(){}rs.prototype=sn.prototype;function Ui(e,t,n){this.props=e,this.context=t,this.refs=ns,this.updater=n||es}var $i=Ui.prototype=new rs;$i.constructor=Ui;ts($i,sn.prototype);$i.isPureReactComponent=!0;var Io=Array.isArray,ls=Object.prototype.hasOwnProperty,Vi={current:null},is={key:!0,ref:!0,__self:!0,__source:!0};function os(e,t,n){var r,l={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)ls.call(t,r)&&!is.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Xn,type:e,key:i,ref:a,props:l,_owner:Vi.current}}function Cc(e,t){return{$$typeof:Xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xn}function Ec(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ao=/\/+/g;function jl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ec(""+e.key):t.toString(36)}function wr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Xn:case hc:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+jl(a,0):r,Io(l)?(n="",e!=null&&(n=e.replace(Ao,"$&/")+"/"),wr(l,t,n,"",function(d){return d})):l!=null&&(Hi(l)&&(l=Cc(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(Ao,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",Io(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+jl(i,s);a+=wr(i,t,n,u,l)}else if(u=Nc(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+jl(i,s++),a+=wr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function rr(e,t,n){if(e==null)return e;var r=[],l=0;return wr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function _c(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},kr={transition:null},bc={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:kr,ReactCurrentOwner:Vi};function as(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:rr,forEach:function(e,t,n){rr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return rr(e,function(){t++}),t},toArray:function(e){return rr(e,function(t){return t})||[]},only:function(e){if(!Hi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=sn;D.Fragment=mc;D.Profiler=xc;D.PureComponent=Ui;D.StrictMode=gc;D.Suspense=kc;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bc;D.act=as;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ts({},e.props),l=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Vi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ls.call(t,u)&&!is.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Xn,type:e.type,key:l,ref:i,props:r,_owner:a}};D.createContext=function(e){return e={$$typeof:yc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vc,_context:e},e.Consumer=e};D.createElement=os;D.createFactory=function(e){var t=os.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:wc,render:e}};D.isValidElement=Hi;D.lazy=function(e){return{$$typeof:Sc,_payload:{_status:-1,_result:e},_init:_c}};D.memo=function(e,t){return{$$typeof:jc,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=kr.transition;kr.transition={};try{e()}finally{kr.transition=t}};D.unstable_act=as;D.useCallback=function(e,t){return ce.current.useCallback(e,t)};D.useContext=function(e){return ce.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};D.useEffect=function(e,t){return ce.current.useEffect(e,t)};D.useId=function(){return ce.current.useId()};D.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return ce.current.useMemo(e,t)};D.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};D.useRef=function(e){return ce.current.useRef(e)};D.useState=function(e){return ce.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return ce.current.useTransition()};D.version="18.3.1";qa.exports=D;var M=qa.exports;const Pc=pc(M);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=M,Fc=Symbol.for("react.element"),Lc=Symbol.for("react.fragment"),Dc=Object.prototype.hasOwnProperty,Tc=zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mc={key:!0,ref:!0,__self:!0,__source:!0};function ss(e,t,n){var r,l={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Dc.call(t,r)&&!Mc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Fc,type:e,key:i,ref:a,props:l,_owner:Tc.current}}nl.Fragment=Lc;nl.jsx=ss;nl.jsxs=ss;Ja.exports=nl;var o=Ja.exports,Yl={},us={exports:{}},je={},cs={exports:{}},ds={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,P){var L=N.length;N.push(P);e:for(;0<L;){var K=L-1>>>1,J=N[K];if(0<l(J,P))N[K]=P,N[L]=J,L=K;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var P=N[0],L=N.pop();if(L!==P){N[0]=L;e:for(var K=0,J=N.length,tr=J>>>1;K<tr;){var yt=2*(K+1)-1,kl=N[yt],wt=yt+1,nr=N[wt];if(0>l(kl,L))wt<J&&0>l(nr,kl)?(N[K]=nr,N[wt]=L,K=wt):(N[K]=kl,N[yt]=L,K=yt);else if(wt<J&&0>l(nr,L))N[K]=nr,N[wt]=L,K=wt;else break e}}return P}function l(N,P){var L=N.sortIndex-P.sortIndex;return L!==0?L:N.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],d=[],m=1,g=null,h=3,k=!1,v=!1,x=!1,z=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var P=n(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=N)r(d),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(d)}}function y(N){if(x=!1,p(N),!v)if(n(u)!==null)v=!0,yl(j);else{var P=n(d);P!==null&&wl(y,P.startTime-N)}}function j(N,P){v=!1,x&&(x=!1,f(_),_=-1),k=!0;var L=h;try{for(p(P),g=n(u);g!==null&&(!(g.expirationTime>P)||N&&!b());){var K=g.callback;if(typeof K=="function"){g.callback=null,h=g.priorityLevel;var J=K(g.expirationTime<=P);P=e.unstable_now(),typeof J=="function"?g.callback=J:g===n(u)&&r(u),p(P)}else r(u);g=n(u)}if(g!==null)var tr=!0;else{var yt=n(d);yt!==null&&wl(y,yt.startTime-P),tr=!1}return tr}finally{g=null,h=L,k=!1}}var C=!1,E=null,_=-1,U=5,F=-1;function b(){return!(e.unstable_now()-F<U)}function fe(){if(E!==null){var N=e.unstable_now();F=N;var P=!0;try{P=E(!0,N)}finally{P?dn():(C=!1,E=null)}}else C=!1}var dn;if(typeof c=="function")dn=function(){c(fe)};else if(typeof MessageChannel<"u"){var Ro=new MessageChannel,fc=Ro.port2;Ro.port1.onmessage=fe,dn=function(){fc.postMessage(null)}}else dn=function(){z(fe,0)};function yl(N){E=N,C||(C=!0,dn())}function wl(N,P){_=z(function(){N(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||k||(v=!0,yl(j))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var L=h;h=P;try{return N()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,P){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=h;h=N;try{return P()}finally{h=L}},e.unstable_scheduleCallback=function(N,P,L){var K=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?K+L:K):L=K,N){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=L+J,N={id:m++,callback:P,priorityLevel:N,startTime:L,expirationTime:J,sortIndex:-1},L>K?(N.sortIndex=L,t(d,N),n(u)===null&&N===n(d)&&(x?(f(_),_=-1):x=!0,wl(y,L-K))):(N.sortIndex=J,t(u,N),v||k||(v=!0,yl(j))),N},e.unstable_shouldYield=b,e.unstable_wrapCallback=function(N){var P=h;return function(){var L=h;h=P;try{return N.apply(this,arguments)}finally{h=L}}}})(ds);cs.exports=ds;var Rc=cs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oc=M,ke=Rc;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fs=new Set,Dn={};function Dt(e,t){en(e,t),en(e+"Capture",t)}function en(e,t){for(Dn[e]=t,e=0;e<t.length;e++)fs.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,Ic=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bo={},Uo={};function Ac(e){return Gl.call(Uo,e)?!0:Gl.call(Bo,e)?!1:Ic.test(e)?Uo[e]=!0:(Bo[e]=!0,!1)}function Bc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Uc(e,t,n,r){if(t===null||typeof t>"u"||Bc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wi=/[\-:]([a-z])/g;function Qi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wi,Qi);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wi,Qi);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wi,Qi);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ki(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Uc(t,n,l,r)&&(n=null),r||l===null?Ac(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=Oc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lr=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),Ot=Symbol.for("react.fragment"),Yi=Symbol.for("react.strict_mode"),Xl=Symbol.for("react.profiler"),ps=Symbol.for("react.provider"),hs=Symbol.for("react.context"),Gi=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),Jl=Symbol.for("react.suspense_list"),Xi=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),ms=Symbol.for("react.offscreen"),$o=Symbol.iterator;function fn(e){return e===null||typeof e!="object"?null:(e=$o&&e[$o]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Sl;function wn(e){if(Sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sl=t&&t[1]||""}return`
`+Sl+e}var Nl=!1;function Cl(e,t){if(!e||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,s=i.length-1;1<=a&&0<=s&&l[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(l[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||l[a]!==i[s]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wn(e):""}function $c(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ot:return"Fragment";case Rt:return"Portal";case Xl:return"Profiler";case Yi:return"StrictMode";case Zl:return"Suspense";case Jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hs:return(e.displayName||"Context")+".Consumer";case ps:return(e._context.displayName||"Context")+".Provider";case Gi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xi:return t=e.displayName||null,t!==null?t:ql(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return ql(e(t))}catch{}}return null}function Vc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ql(t);case 8:return t===Yi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hc(e){var t=gs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ir(e){e._valueTracker||(e._valueTracker=Hc(e))}function xs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ei(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vs(e,t){t=t.checked,t!=null&&Ki(e,"checked",t,!1)}function ti(e,t){vs(e,t);var n=ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ni(e,t.type,n):t.hasOwnProperty("defaultValue")&&ni(e,t.type,ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ho(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ni(e,t,n){(t!=="number"||Lr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function Yt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ht(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ri(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(kn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ht(n)}}function ys(e,t){var n=ht(t.value),r=ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ws(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function li(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ws(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,ks=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wc=["Webkit","ms","Moz","O"];Object.keys(Nn).forEach(function(e){Wc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nn[t]=Nn[e]})});function js(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nn.hasOwnProperty(e)&&Nn[e]?(""+t).trim():t+"px"}function Ss(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=js(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Qc=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ii(e,t){if(t){if(Qc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function oi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ai=null;function Zi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var si=null,Gt=null,Xt=null;function Ko(e){if(e=qn(e)){if(typeof si!="function")throw Error(w(280));var t=e.stateNode;t&&(t=al(t),si(e.stateNode,e.type,t))}}function Ns(e){Gt?Xt?Xt.push(e):Xt=[e]:Gt=e}function Cs(){if(Gt){var e=Gt,t=Xt;if(Xt=Gt=null,Ko(e),t)for(e=0;e<t.length;e++)Ko(t[e])}}function Es(e,t){return e(t)}function _s(){}var El=!1;function bs(e,t,n){if(El)return e(t,n);El=!0;try{return Es(e,t,n)}finally{El=!1,(Gt!==null||Xt!==null)&&(_s(),Cs())}}function Mn(e,t){var n=e.stateNode;if(n===null)return null;var r=al(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var ui=!1;if(Ke)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){ui=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{ui=!1}function Kc(e,t,n,r,l,i,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var Cn=!1,Dr=null,Tr=!1,ci=null,Yc={onError:function(e){Cn=!0,Dr=e}};function Gc(e,t,n,r,l,i,a,s,u){Cn=!1,Dr=null,Kc.apply(Yc,arguments)}function Xc(e,t,n,r,l,i,a,s,u){if(Gc.apply(this,arguments),Cn){if(Cn){var d=Dr;Cn=!1,Dr=null}else throw Error(w(198));Tr||(Tr=!0,ci=d)}}function Tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ps(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yo(e){if(Tt(e)!==e)throw Error(w(188))}function Zc(e){var t=e.alternate;if(!t){if(t=Tt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Yo(l),e;if(i===r)return Yo(l),t;i=i.sibling}throw Error(w(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,s=l.child;s;){if(s===n){a=!0,n=l,r=i;break}if(s===r){a=!0,r=l,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=l;break}if(s===r){a=!0,r=i,n=l;break}s=s.sibling}if(!a)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function zs(e){return e=Zc(e),e!==null?Fs(e):null}function Fs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fs(e);if(t!==null)return t;e=e.sibling}return null}var Ls=ke.unstable_scheduleCallback,Go=ke.unstable_cancelCallback,Jc=ke.unstable_shouldYield,qc=ke.unstable_requestPaint,Y=ke.unstable_now,ed=ke.unstable_getCurrentPriorityLevel,Ji=ke.unstable_ImmediatePriority,Ds=ke.unstable_UserBlockingPriority,Mr=ke.unstable_NormalPriority,td=ke.unstable_LowPriority,Ts=ke.unstable_IdlePriority,rl=null,Be=null;function nd(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(rl,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:id,rd=Math.log,ld=Math.LN2;function id(e){return e>>>=0,e===0?32:31-(rd(e)/ld|0)|0}var ar=64,sr=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Rr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~l;s!==0?r=jn(s):(i&=a,i!==0&&(r=jn(i)))}else a=n&~l,a!==0?r=jn(a):i!==0&&(r=jn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Te(t),l=1<<n,r|=e[n],t&=~l;return r}function od(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ad(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Te(i),s=1<<a,u=l[a];u===-1?(!(s&n)||s&r)&&(l[a]=od(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function di(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ms(){var e=ar;return ar<<=1,!(ar&4194240)&&(ar=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Te(t),e[t]=n}function sd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Te(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function qi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Te(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var R=0;function Rs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Os,eo,Is,As,Bs,fi=!1,ur=[],ot=null,at=null,st=null,Rn=new Map,On=new Map,nt=[],ud="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xo(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":Rn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function hn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=qn(t),t!==null&&eo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function cd(e,t,n,r,l){switch(t){case"focusin":return ot=hn(ot,e,t,n,r,l),!0;case"dragenter":return at=hn(at,e,t,n,r,l),!0;case"mouseover":return st=hn(st,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Rn.set(i,hn(Rn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,On.set(i,hn(On.get(i)||null,e,t,n,r,l)),!0}return!1}function Us(e){var t=St(e.target);if(t!==null){var n=Tt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ps(n),t!==null){e.blockedOn=t,Bs(e.priority,function(){Is(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ai=r,n.target.dispatchEvent(r),ai=null}else return t=qn(n),t!==null&&eo(t),e.blockedOn=n,!1;t.shift()}return!0}function Zo(e,t,n){jr(e)&&n.delete(t)}function dd(){fi=!1,ot!==null&&jr(ot)&&(ot=null),at!==null&&jr(at)&&(at=null),st!==null&&jr(st)&&(st=null),Rn.forEach(Zo),On.forEach(Zo)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,fi||(fi=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,dd)))}function In(e){function t(l){return mn(l,e)}if(0<ur.length){mn(ur[0],e);for(var n=1;n<ur.length;n++){var r=ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ot!==null&&mn(ot,e),at!==null&&mn(at,e),st!==null&&mn(st,e),Rn.forEach(t),On.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)Us(n),n.blockedOn===null&&nt.shift()}var Zt=Ze.ReactCurrentBatchConfig,Or=!0;function fd(e,t,n,r){var l=R,i=Zt.transition;Zt.transition=null;try{R=1,to(e,t,n,r)}finally{R=l,Zt.transition=i}}function pd(e,t,n,r){var l=R,i=Zt.transition;Zt.transition=null;try{R=4,to(e,t,n,r)}finally{R=l,Zt.transition=i}}function to(e,t,n,r){if(Or){var l=pi(e,t,n,r);if(l===null)Ol(e,t,r,Ir,n),Xo(e,r);else if(cd(l,e,t,n,r))r.stopPropagation();else if(Xo(e,r),t&4&&-1<ud.indexOf(e)){for(;l!==null;){var i=qn(l);if(i!==null&&Os(i),i=pi(e,t,n,r),i===null&&Ol(e,t,r,Ir,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ol(e,t,r,null,n)}}var Ir=null;function pi(e,t,n,r){if(Ir=null,e=Zi(r),e=St(e),e!==null)if(t=Tt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ps(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ir=e,null}function $s(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ed()){case Ji:return 1;case Ds:return 4;case Mr:case td:return 16;case Ts:return 536870912;default:return 16}default:return 16}}var lt=null,no=null,Sr=null;function Vs(){if(Sr)return Sr;var e,t=no,n=t.length,r,l="value"in lt?lt.value:lt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return Sr=l.slice(e,1<r?1-r:void 0)}function Nr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cr(){return!0}function Jo(){return!1}function Se(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?cr:Jo,this.isPropagationStopped=Jo,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ro=Se(un),Jn=H({},un,{view:0,detail:0}),hd=Se(Jn),bl,Pl,gn,ll=H({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gn&&(gn&&e.type==="mousemove"?(bl=e.screenX-gn.screenX,Pl=e.screenY-gn.screenY):Pl=bl=0,gn=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),qo=Se(ll),md=H({},ll,{dataTransfer:0}),gd=Se(md),xd=H({},Jn,{relatedTarget:0}),zl=Se(xd),vd=H({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),yd=Se(vd),wd=H({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kd=Se(wd),jd=H({},un,{data:0}),ea=Se(jd),Sd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ed(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cd[e])?!!t[e]:!1}function lo(){return Ed}var _d=H({},Jn,{key:function(e){if(e.key){var t=Sd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lo,charCode:function(e){return e.type==="keypress"?Nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bd=Se(_d),Pd=H({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ta=Se(Pd),zd=H({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lo}),Fd=Se(zd),Ld=H({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dd=Se(Ld),Td=H({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Md=Se(Td),Rd=[9,13,27,32],io=Ke&&"CompositionEvent"in window,En=null;Ke&&"documentMode"in document&&(En=document.documentMode);var Od=Ke&&"TextEvent"in window&&!En,Hs=Ke&&(!io||En&&8<En&&11>=En),na=" ",ra=!1;function Ws(e,t){switch(e){case"keyup":return Rd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var It=!1;function Id(e,t){switch(e){case"compositionend":return Qs(t);case"keypress":return t.which!==32?null:(ra=!0,na);case"textInput":return e=t.data,e===na&&ra?null:e;default:return null}}function Ad(e,t){if(It)return e==="compositionend"||!io&&Ws(e,t)?(e=Vs(),Sr=no=lt=null,It=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hs&&t.locale!=="ko"?null:t.data;default:return null}}var Bd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function la(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bd[e.type]:t==="textarea"}function Ks(e,t,n,r){Ns(r),t=Ar(t,"onChange"),0<t.length&&(n=new ro("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _n=null,An=null;function Ud(e){lu(e,0)}function il(e){var t=Ut(e);if(xs(t))return e}function $d(e,t){if(e==="change")return t}var Ys=!1;if(Ke){var Fl;if(Ke){var Ll="oninput"in document;if(!Ll){var ia=document.createElement("div");ia.setAttribute("oninput","return;"),Ll=typeof ia.oninput=="function"}Fl=Ll}else Fl=!1;Ys=Fl&&(!document.documentMode||9<document.documentMode)}function oa(){_n&&(_n.detachEvent("onpropertychange",Gs),An=_n=null)}function Gs(e){if(e.propertyName==="value"&&il(An)){var t=[];Ks(t,An,e,Zi(e)),bs(Ud,t)}}function Vd(e,t,n){e==="focusin"?(oa(),_n=t,An=n,_n.attachEvent("onpropertychange",Gs)):e==="focusout"&&oa()}function Hd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(An)}function Wd(e,t){if(e==="click")return il(t)}function Qd(e,t){if(e==="input"||e==="change")return il(t)}function Kd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:Kd;function Bn(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Gl.call(t,l)||!Re(e[l],t[l]))return!1}return!0}function aa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sa(e,t){var n=aa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=aa(n)}}function Xs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zs(){for(var e=window,t=Lr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lr(e.document)}return t}function oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yd(e){var t=Zs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Xs(n.ownerDocument.documentElement,n)){if(r!==null&&oo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=sa(n,i);var a=sa(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gd=Ke&&"documentMode"in document&&11>=document.documentMode,At=null,hi=null,bn=null,mi=!1;function ua(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mi||At==null||At!==Lr(r)||(r=At,"selectionStart"in r&&oo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bn&&Bn(bn,r)||(bn=r,r=Ar(hi,"onSelect"),0<r.length&&(t=new ro("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=At)))}function dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bt={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionend:dr("Transition","TransitionEnd")},Dl={},Js={};Ke&&(Js=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function ol(e){if(Dl[e])return Dl[e];if(!Bt[e])return e;var t=Bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Js)return Dl[e]=t[n];return e}var qs=ol("animationend"),eu=ol("animationiteration"),tu=ol("animationstart"),nu=ol("transitionend"),ru=new Map,ca="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gt(e,t){ru.set(e,t),Dt(t,[e])}for(var Tl=0;Tl<ca.length;Tl++){var Ml=ca[Tl],Xd=Ml.toLowerCase(),Zd=Ml[0].toUpperCase()+Ml.slice(1);gt(Xd,"on"+Zd)}gt(qs,"onAnimationEnd");gt(eu,"onAnimationIteration");gt(tu,"onAnimationStart");gt("dblclick","onDoubleClick");gt("focusin","onFocus");gt("focusout","onBlur");gt(nu,"onTransitionEnd");en("onMouseEnter",["mouseout","mouseover"]);en("onMouseLeave",["mouseout","mouseover"]);en("onPointerEnter",["pointerout","pointerover"]);en("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function da(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xc(r,t,void 0,e),e.currentTarget=null}function lu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;da(l,s,d),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;da(l,s,d),i=u}}}if(Tr)throw e=ci,Tr=!1,ci=null,e}function I(e,t){var n=t[wi];n===void 0&&(n=t[wi]=new Set);var r=e+"__bubble";n.has(r)||(iu(t,e,2,!1),n.add(r))}function Rl(e,t,n){var r=0;t&&(r|=4),iu(n,e,r,t)}var fr="_reactListening"+Math.random().toString(36).slice(2);function Un(e){if(!e[fr]){e[fr]=!0,fs.forEach(function(n){n!=="selectionchange"&&(Jd.has(n)||Rl(n,!1,e),Rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fr]||(t[fr]=!0,Rl("selectionchange",!1,t))}}function iu(e,t,n,r){switch($s(t)){case 1:var l=fd;break;case 4:l=pd;break;default:l=to}n=l.bind(null,t,n,e),l=void 0,!ui||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ol(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;s!==null;){if(a=St(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}bs(function(){var d=i,m=Zi(n),g=[];e:{var h=ru.get(e);if(h!==void 0){var k=ro,v=e;switch(e){case"keypress":if(Nr(n)===0)break e;case"keydown":case"keyup":k=bd;break;case"focusin":v="focus",k=zl;break;case"focusout":v="blur",k=zl;break;case"beforeblur":case"afterblur":k=zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=gd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Fd;break;case qs:case eu:case tu:k=yd;break;case nu:k=Dd;break;case"scroll":k=hd;break;case"wheel":k=Md;break;case"copy":case"cut":case"paste":k=kd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ta}var x=(t&4)!==0,z=!x&&e==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var c=d,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Mn(c,f),y!=null&&x.push($n(c,y,p)))),z)break;c=c.return}0<x.length&&(h=new k(h,v,null,n,m),g.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==ai&&(v=n.relatedTarget||n.fromElement)&&(St(v)||v[Ye]))break e;if((k||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,k?(v=n.relatedTarget||n.toElement,k=d,v=v?St(v):null,v!==null&&(z=Tt(v),v!==z||v.tag!==5&&v.tag!==6)&&(v=null)):(k=null,v=d),k!==v)){if(x=qo,y="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=ta,y="onPointerLeave",f="onPointerEnter",c="pointer"),z=k==null?h:Ut(k),p=v==null?h:Ut(v),h=new x(y,c+"leave",k,n,m),h.target=z,h.relatedTarget=p,y=null,St(m)===d&&(x=new x(f,c+"enter",v,n,m),x.target=p,x.relatedTarget=z,y=x),z=y,k&&v)t:{for(x=k,f=v,c=0,p=x;p;p=Mt(p))c++;for(p=0,y=f;y;y=Mt(y))p++;for(;0<c-p;)x=Mt(x),c--;for(;0<p-c;)f=Mt(f),p--;for(;c--;){if(x===f||f!==null&&x===f.alternate)break t;x=Mt(x),f=Mt(f)}x=null}else x=null;k!==null&&fa(g,h,k,x,!1),v!==null&&z!==null&&fa(g,z,v,x,!0)}}e:{if(h=d?Ut(d):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var j=$d;else if(la(h))if(Ys)j=Qd;else{j=Hd;var C=Vd}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=Wd);if(j&&(j=j(e,d))){Ks(g,j,n,m);break e}C&&C(e,h,d),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&ni(h,"number",h.value)}switch(C=d?Ut(d):window,e){case"focusin":(la(C)||C.contentEditable==="true")&&(At=C,hi=d,bn=null);break;case"focusout":bn=hi=At=null;break;case"mousedown":mi=!0;break;case"contextmenu":case"mouseup":case"dragend":mi=!1,ua(g,n,m);break;case"selectionchange":if(Gd)break;case"keydown":case"keyup":ua(g,n,m)}var E;if(io)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else It?Ws(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Hs&&n.locale!=="ko"&&(It||_!=="onCompositionStart"?_==="onCompositionEnd"&&It&&(E=Vs()):(lt=m,no="value"in lt?lt.value:lt.textContent,It=!0)),C=Ar(d,_),0<C.length&&(_=new ea(_,e,null,n,m),g.push({event:_,listeners:C}),E?_.data=E:(E=Qs(n),E!==null&&(_.data=E)))),(E=Od?Id(e,n):Ad(e,n))&&(d=Ar(d,"onBeforeInput"),0<d.length&&(m=new ea("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:d}),m.data=E))}lu(g,t)})}function $n(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ar(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Mn(e,n),i!=null&&r.unshift($n(e,i,l)),i=Mn(e,t),i!=null&&r.push($n(e,i,l))),e=e.return}return r}function Mt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fa(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=Mn(n,i),u!=null&&a.unshift($n(n,u,s))):l||(u=Mn(n,i),u!=null&&a.push($n(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var qd=/\r\n?/g,ef=/\u0000|\uFFFD/g;function pa(e){return(typeof e=="string"?e:""+e).replace(qd,`
`).replace(ef,"")}function pr(e,t,n){if(t=pa(t),pa(e)!==t&&n)throw Error(w(425))}function Br(){}var gi=null,xi=null;function vi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yi=typeof setTimeout=="function"?setTimeout:void 0,tf=typeof clearTimeout=="function"?clearTimeout:void 0,ha=typeof Promise=="function"?Promise:void 0,nf=typeof queueMicrotask=="function"?queueMicrotask:typeof ha<"u"?function(e){return ha.resolve(null).then(e).catch(rf)}:yi;function rf(e){setTimeout(function(){throw e})}function Il(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),In(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);In(t)}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ma(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cn=Math.random().toString(36).slice(2),Ae="__reactFiber$"+cn,Vn="__reactProps$"+cn,Ye="__reactContainer$"+cn,wi="__reactEvents$"+cn,lf="__reactListeners$"+cn,of="__reactHandles$"+cn;function St(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ma(e);e!==null;){if(n=e[Ae])return n;e=ma(e)}return t}e=n,n=e.parentNode}return null}function qn(e){return e=e[Ae]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function al(e){return e[Vn]||null}var ki=[],$t=-1;function xt(e){return{current:e}}function A(e){0>$t||(e.current=ki[$t],ki[$t]=null,$t--)}function O(e,t){$t++,ki[$t]=e.current,e.current=t}var mt={},ae=xt(mt),me=xt(!1),bt=mt;function tn(e,t){var n=e.type.contextTypes;if(!n)return mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ge(e){return e=e.childContextTypes,e!=null}function Ur(){A(me),A(ae)}function ga(e,t,n){if(ae.current!==mt)throw Error(w(168));O(ae,t),O(me,n)}function ou(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(w(108,Vc(e)||"Unknown",l));return H({},n,r)}function $r(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,bt=ae.current,O(ae,e),O(me,me.current),!0}function xa(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=ou(e,t,bt),r.__reactInternalMemoizedMergedChildContext=e,A(me),A(ae),O(ae,e)):A(me),O(me,n)}var Ve=null,sl=!1,Al=!1;function au(e){Ve===null?Ve=[e]:Ve.push(e)}function af(e){sl=!0,au(e)}function vt(){if(!Al&&Ve!==null){Al=!0;var e=0,t=R;try{var n=Ve;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,sl=!1}catch(l){throw Ve!==null&&(Ve=Ve.slice(e+1)),Ls(Ji,vt),l}finally{R=t,Al=!1}}return null}var Vt=[],Ht=0,Vr=null,Hr=0,Ne=[],Ce=0,Pt=null,He=1,We="";function kt(e,t){Vt[Ht++]=Hr,Vt[Ht++]=Vr,Vr=e,Hr=t}function su(e,t,n){Ne[Ce++]=He,Ne[Ce++]=We,Ne[Ce++]=Pt,Pt=e;var r=He;e=We;var l=32-Te(r)-1;r&=~(1<<l),n+=1;var i=32-Te(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,He=1<<32-Te(t)+l|n<<l|r,We=i+e}else He=1<<i|n<<l|r,We=e}function ao(e){e.return!==null&&(kt(e,1),su(e,1,0))}function so(e){for(;e===Vr;)Vr=Vt[--Ht],Vt[Ht]=null,Hr=Vt[--Ht],Vt[Ht]=null;for(;e===Pt;)Pt=Ne[--Ce],Ne[Ce]=null,We=Ne[--Ce],Ne[Ce]=null,He=Ne[--Ce],Ne[Ce]=null}var we=null,ye=null,B=!1,De=null;function uu(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function va(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,ye=ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pt!==null?{id:He,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,ye=null,!0):!1;default:return!1}}function ji(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Si(e){if(B){var t=ye;if(t){var n=t;if(!va(e,t)){if(ji(e))throw Error(w(418));t=ut(n.nextSibling);var r=we;t&&va(e,t)?uu(r,n):(e.flags=e.flags&-4097|2,B=!1,we=e)}}else{if(ji(e))throw Error(w(418));e.flags=e.flags&-4097|2,B=!1,we=e}}}function ya(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function hr(e){if(e!==we)return!1;if(!B)return ya(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vi(e.type,e.memoizedProps)),t&&(t=ye)){if(ji(e))throw cu(),Error(w(418));for(;t;)uu(e,t),t=ut(t.nextSibling)}if(ya(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=we?ut(e.stateNode.nextSibling):null;return!0}function cu(){for(var e=ye;e;)e=ut(e.nextSibling)}function nn(){ye=we=null,B=!1}function uo(e){De===null?De=[e]:De.push(e)}var sf=Ze.ReactCurrentBatchConfig;function xn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=l.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function mr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wa(e){var t=e._init;return t(e._payload)}function du(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=pt(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,y){return c===null||c.tag!==6?(c=Ql(p,f.mode,y),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,y){var j=p.type;return j===Ot?m(f,c,p.props.children,y,p.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===et&&wa(j)===c.type)?(y=l(c,p.props),y.ref=xn(f,c,p),y.return=f,y):(y=Fr(p.type,p.key,p.props,null,f.mode,y),y.ref=xn(f,c,p),y.return=f,y)}function d(f,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Kl(p,f.mode,y),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function m(f,c,p,y,j){return c===null||c.tag!==7?(c=_t(p,f.mode,y,j),c.return=f,c):(c=l(c,p),c.return=f,c)}function g(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ql(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case lr:return p=Fr(c.type,c.key,c.props,null,f.mode,p),p.ref=xn(f,null,c),p.return=f,p;case Rt:return c=Kl(c,f.mode,p),c.return=f,c;case et:var y=c._init;return g(f,y(c._payload),p)}if(kn(c)||fn(c))return c=_t(c,f.mode,p,null),c.return=f,c;mr(f,c)}return null}function h(f,c,p,y){var j=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:s(f,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case lr:return p.key===j?u(f,c,p,y):null;case Rt:return p.key===j?d(f,c,p,y):null;case et:return j=p._init,h(f,c,j(p._payload),y)}if(kn(p)||fn(p))return j!==null?null:m(f,c,p,y,null);mr(f,p)}return null}function k(f,c,p,y,j){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,s(c,f,""+y,j);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case lr:return f=f.get(y.key===null?p:y.key)||null,u(c,f,y,j);case Rt:return f=f.get(y.key===null?p:y.key)||null,d(c,f,y,j);case et:var C=y._init;return k(f,c,p,C(y._payload),j)}if(kn(y)||fn(y))return f=f.get(p)||null,m(c,f,y,j,null);mr(c,y)}return null}function v(f,c,p,y){for(var j=null,C=null,E=c,_=c=0,U=null;E!==null&&_<p.length;_++){E.index>_?(U=E,E=null):U=E.sibling;var F=h(f,E,p[_],y);if(F===null){E===null&&(E=U);break}e&&E&&F.alternate===null&&t(f,E),c=i(F,c,_),C===null?j=F:C.sibling=F,C=F,E=U}if(_===p.length)return n(f,E),B&&kt(f,_),j;if(E===null){for(;_<p.length;_++)E=g(f,p[_],y),E!==null&&(c=i(E,c,_),C===null?j=E:C.sibling=E,C=E);return B&&kt(f,_),j}for(E=r(f,E);_<p.length;_++)U=k(E,f,_,p[_],y),U!==null&&(e&&U.alternate!==null&&E.delete(U.key===null?_:U.key),c=i(U,c,_),C===null?j=U:C.sibling=U,C=U);return e&&E.forEach(function(b){return t(f,b)}),B&&kt(f,_),j}function x(f,c,p,y){var j=fn(p);if(typeof j!="function")throw Error(w(150));if(p=j.call(p),p==null)throw Error(w(151));for(var C=j=null,E=c,_=c=0,U=null,F=p.next();E!==null&&!F.done;_++,F=p.next()){E.index>_?(U=E,E=null):U=E.sibling;var b=h(f,E,F.value,y);if(b===null){E===null&&(E=U);break}e&&E&&b.alternate===null&&t(f,E),c=i(b,c,_),C===null?j=b:C.sibling=b,C=b,E=U}if(F.done)return n(f,E),B&&kt(f,_),j;if(E===null){for(;!F.done;_++,F=p.next())F=g(f,F.value,y),F!==null&&(c=i(F,c,_),C===null?j=F:C.sibling=F,C=F);return B&&kt(f,_),j}for(E=r(f,E);!F.done;_++,F=p.next())F=k(E,f,_,F.value,y),F!==null&&(e&&F.alternate!==null&&E.delete(F.key===null?_:F.key),c=i(F,c,_),C===null?j=F:C.sibling=F,C=F);return e&&E.forEach(function(fe){return t(f,fe)}),B&&kt(f,_),j}function z(f,c,p,y){if(typeof p=="object"&&p!==null&&p.type===Ot&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case lr:e:{for(var j=p.key,C=c;C!==null;){if(C.key===j){if(j=p.type,j===Ot){if(C.tag===7){n(f,C.sibling),c=l(C,p.props.children),c.return=f,f=c;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===et&&wa(j)===C.type){n(f,C.sibling),c=l(C,p.props),c.ref=xn(f,C,p),c.return=f,f=c;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===Ot?(c=_t(p.props.children,f.mode,y,p.key),c.return=f,f=c):(y=Fr(p.type,p.key,p.props,null,f.mode,y),y.ref=xn(f,c,p),y.return=f,f=y)}return a(f);case Rt:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Kl(p,f.mode,y),c.return=f,f=c}return a(f);case et:return C=p._init,z(f,c,C(p._payload),y)}if(kn(p))return v(f,c,p,y);if(fn(p))return x(f,c,p,y);mr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=Ql(p,f.mode,y),c.return=f,f=c),a(f)):n(f,c)}return z}var rn=du(!0),fu=du(!1),Wr=xt(null),Qr=null,Wt=null,co=null;function fo(){co=Wt=Qr=null}function po(e){var t=Wr.current;A(Wr),e._currentValue=t}function Ni(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jt(e,t){Qr=e,co=Wt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function be(e){var t=e._currentValue;if(co!==e)if(e={context:e,memoizedValue:t,next:null},Wt===null){if(Qr===null)throw Error(w(308));Wt=e,Qr.dependencies={lanes:0,firstContext:e}}else Wt=Wt.next=e;return t}var Nt=null;function ho(e){Nt===null?Nt=[e]:Nt.push(e)}function pu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,ho(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ge(e,r)}function Ge(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function mo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ct(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,T&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ge(e,n)}return l=r.interleaved,l===null?(t.next=t,ho(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ge(e,n)}function Cr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qi(e,n)}}function ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Kr(e,t,n,r){var l=e.updateQueue;tt=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?i=d:a.next=d,a=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==a&&(s===null?m.firstBaseUpdate=d:s.next=d,m.lastBaseUpdate=u))}if(i!==null){var g=l.baseState;a=0,m=d=u=null,s=i;do{var h=s.lane,k=s.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,x=s;switch(h=t,k=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){g=v.call(k,g,h);break e}g=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(k,g,h):v,h==null)break e;g=H({},g,h);break e;case 2:tt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else k={eventTime:k,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(d=m=k,u=g):m=m.next=k,a|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(m===null&&(u=g),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Ft|=a,e.lanes=a,e.memoizedState=g}}function ja(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var er={},Ue=xt(er),Hn=xt(er),Wn=xt(er);function Ct(e){if(e===er)throw Error(w(174));return e}function go(e,t){switch(O(Wn,t),O(Hn,e),O(Ue,er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:li(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=li(t,e)}A(Ue),O(Ue,t)}function ln(){A(Ue),A(Hn),A(Wn)}function mu(e){Ct(Wn.current);var t=Ct(Ue.current),n=li(t,e.type);t!==n&&(O(Hn,e),O(Ue,n))}function xo(e){Hn.current===e&&(A(Ue),A(Hn))}var $=xt(0);function Yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bl=[];function vo(){for(var e=0;e<Bl.length;e++)Bl[e]._workInProgressVersionPrimary=null;Bl.length=0}var Er=Ze.ReactCurrentDispatcher,Ul=Ze.ReactCurrentBatchConfig,zt=0,V=null,X=null,q=null,Gr=!1,Pn=!1,Qn=0,uf=0;function le(){throw Error(w(321))}function yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,l,i){if(zt=i,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Er.current=e===null||e.memoizedState===null?pf:hf,e=n(r,l),Pn){i=0;do{if(Pn=!1,Qn=0,25<=i)throw Error(w(301));i+=1,q=X=null,t.updateQueue=null,Er.current=mf,e=n(r,l)}while(Pn)}if(Er.current=Xr,t=X!==null&&X.next!==null,zt=0,q=X=V=null,Gr=!1,t)throw Error(w(300));return e}function ko(){var e=Qn!==0;return Qn=0,e}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?V.memoizedState=q=e:q=q.next=e,q}function Pe(){if(X===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=q===null?V.memoizedState:q.next;if(t!==null)q=t,X=e;else{if(e===null)throw Error(w(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},q===null?V.memoizedState=q=e:q=q.next=e}return q}function Kn(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=Pe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=X,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=a=null,u=null,d=i;do{var m=d.lane;if((zt&m)===m)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=g,a=r):u=u.next=g,V.lanes|=m,Ft|=m}d=d.next}while(d!==null&&d!==i);u===null?a=r:u.next=s,Re(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,V.lanes|=i,Ft|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vl(e){var t=Pe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);Re(i,t.memoizedState)||(he=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function gu(){}function xu(e,t){var n=V,r=Pe(),l=t(),i=!Re(r.memoizedState,l);if(i&&(r.memoizedState=l,he=!0),r=r.queue,jo(wu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,Yn(9,yu.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(w(349));zt&30||vu(n,t,l)}return l}function vu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yu(e,t,n,r){t.value=n,t.getSnapshot=r,ku(t)&&ju(e)}function wu(e,t,n){return n(function(){ku(t)&&ju(e)})}function ku(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Re(e,n)}catch{return!0}}function ju(e){var t=Ge(e,1);t!==null&&Me(t,e,1,-1)}function Sa(e){var t=Ie();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:e},t.queue=e,e=e.dispatch=ff.bind(null,V,e),[t.memoizedState,e]}function Yn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Su(){return Pe().memoizedState}function _r(e,t,n,r){var l=Ie();V.flags|=e,l.memoizedState=Yn(1|t,n,void 0,r===void 0?null:r)}function ul(e,t,n,r){var l=Pe();r=r===void 0?null:r;var i=void 0;if(X!==null){var a=X.memoizedState;if(i=a.destroy,r!==null&&yo(r,a.deps)){l.memoizedState=Yn(t,n,i,r);return}}V.flags|=e,l.memoizedState=Yn(1|t,n,i,r)}function Na(e,t){return _r(8390656,8,e,t)}function jo(e,t){return ul(2048,8,e,t)}function Nu(e,t){return ul(4,2,e,t)}function Cu(e,t){return ul(4,4,e,t)}function Eu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _u(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,Eu.bind(null,t,e),n)}function So(){}function bu(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Pu(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zu(e,t,n){return zt&21?(Re(n,t)||(n=Ms(),V.lanes|=n,Ft|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function cf(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{R=n,Ul.transition=r}}function Fu(){return Pe().memoizedState}function df(e,t,n){var r=ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lu(e))Du(t,n);else if(n=pu(e,t,n,r),n!==null){var l=ue();Me(n,e,r,l),Tu(n,t,r)}}function ff(e,t,n){var r=ft(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lu(e))Du(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(l.hasEagerState=!0,l.eagerState=s,Re(s,a)){var u=t.interleaved;u===null?(l.next=l,ho(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=pu(e,t,l,r),n!==null&&(l=ue(),Me(n,e,r,l),Tu(n,t,r))}}function Lu(e){var t=e.alternate;return e===V||t!==null&&t===V}function Du(e,t){Pn=Gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qi(e,n)}}var Xr={readContext:be,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},pf={readContext:be,useCallback:function(e,t){return Ie().memoizedState=[e,t===void 0?null:t],e},useContext:be,useEffect:Na,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_r(4194308,4,Eu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _r(4194308,4,e,t)},useInsertionEffect:function(e,t){return _r(4,2,e,t)},useMemo:function(e,t){var n=Ie();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ie();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=df.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Ie();return e={current:e},t.memoizedState=e},useState:Sa,useDebugValue:So,useDeferredValue:function(e){return Ie().memoizedState=e},useTransition:function(){var e=Sa(!1),t=e[0];return e=cf.bind(null,e[1]),Ie().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,l=Ie();if(B){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),ee===null)throw Error(w(349));zt&30||vu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Na(wu.bind(null,r,i,e),[e]),r.flags|=2048,Yn(9,yu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ie(),t=ee.identifierPrefix;if(B){var n=We,r=He;n=(r&~(1<<32-Te(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=uf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hf={readContext:be,useCallback:bu,useContext:be,useEffect:jo,useImperativeHandle:_u,useInsertionEffect:Nu,useLayoutEffect:Cu,useMemo:Pu,useReducer:$l,useRef:Su,useState:function(){return $l(Kn)},useDebugValue:So,useDeferredValue:function(e){var t=Pe();return zu(t,X.memoizedState,e)},useTransition:function(){var e=$l(Kn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:gu,useSyncExternalStore:xu,useId:Fu,unstable_isNewReconciler:!1},mf={readContext:be,useCallback:bu,useContext:be,useEffect:jo,useImperativeHandle:_u,useInsertionEffect:Nu,useLayoutEffect:Cu,useMemo:Pu,useReducer:Vl,useRef:Su,useState:function(){return Vl(Kn)},useDebugValue:So,useDeferredValue:function(e){var t=Pe();return X===null?t.memoizedState=e:zu(t,X.memoizedState,e)},useTransition:function(){var e=Vl(Kn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:gu,useSyncExternalStore:xu,useId:Fu,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ci(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cl={isMounted:function(e){return(e=e._reactInternals)?Tt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=ft(e),i=Qe(r,l);i.payload=t,n!=null&&(i.callback=n),t=ct(e,i,l),t!==null&&(Me(t,e,l,r),Cr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=ft(e),i=Qe(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ct(e,i,l),t!==null&&(Me(t,e,l,r),Cr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=ft(e),l=Qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=ct(e,l,r),t!==null&&(Me(t,e,r,n),Cr(t,e,r))}};function Ca(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Bn(n,r)||!Bn(l,i):!0}function Mu(e,t,n){var r=!1,l=mt,i=t.contextType;return typeof i=="object"&&i!==null?i=be(i):(l=ge(t)?bt:ae.current,r=t.contextTypes,i=(r=r!=null)?tn(e,l):mt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ea(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}function Ei(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},mo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=be(i):(i=ge(t)?bt:ae.current,l.context=tn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ci(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&cl.enqueueReplaceState(l,l.state,null),Kr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function on(e,t){try{var n="",r=t;do n+=$c(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Hl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _i(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gf=typeof WeakMap=="function"?WeakMap:Map;function Ru(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jr||(Jr=!0,Oi=r),_i(e,t)},n}function Ou(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){_i(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){_i(e,t),typeof r!="function"&&(dt===null?dt=new Set([this]):dt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function _a(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=zf.bind(null,e,t,n),t.then(e,e))}function ba(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pa(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,ct(n,t,1))),n.lanes|=1),e)}var xf=Ze.ReactCurrentOwner,he=!1;function se(e,t,n,r){t.child=e===null?fu(t,null,n,r):rn(t,e.child,n,r)}function za(e,t,n,r,l){n=n.render;var i=t.ref;return Jt(t,l),r=wo(e,t,n,r,i,l),n=ko(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(B&&n&&ao(t),t.flags|=1,se(e,t,r,l),t.child)}function Fa(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Fo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Iu(e,t,i,r,l)):(e=Fr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Bn,n(a,r)&&e.ref===t.ref)return Xe(e,t,l)}return t.flags|=1,e=pt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Iu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Bn(i,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,Xe(e,t,l)}return bi(e,t,n,r,l)}function Au(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Kt,ve),ve|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(Kt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,O(Kt,ve),ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,O(Kt,ve),ve|=r;return se(e,t,l,n),t.child}function Bu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bi(e,t,n,r,l){var i=ge(n)?bt:ae.current;return i=tn(t,i),Jt(t,l),n=wo(e,t,n,r,i,l),r=ko(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(B&&r&&ao(t),t.flags|=1,se(e,t,n,l),t.child)}function La(e,t,n,r,l){if(ge(n)){var i=!0;$r(t)}else i=!1;if(Jt(t,l),t.stateNode===null)br(e,t),Mu(t,n,r),Ei(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=be(d):(d=ge(n)?bt:ae.current,d=tn(t,d));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Ea(t,a,r,d),tt=!1;var h=t.memoizedState;a.state=h,Kr(t,r,a,l),u=t.memoizedState,s!==r||h!==u||me.current||tt?(typeof m=="function"&&(Ci(t,n,m,r),u=t.memoizedState),(s=tt||Ca(t,n,s,r,h,u,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,hu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Fe(t.type,s),a.props=d,g=t.pendingProps,h=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=be(u):(u=ge(n)?bt:ae.current,u=tn(t,u));var k=n.getDerivedStateFromProps;(m=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==g||h!==u)&&Ea(t,a,r,u),tt=!1,h=t.memoizedState,a.state=h,Kr(t,r,a,l);var v=t.memoizedState;s!==g||h!==v||me.current||tt?(typeof k=="function"&&(Ci(t,n,k,r),v=t.memoizedState),(d=tt||Ca(t,n,d,r,h,v,u)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Pi(e,t,n,r,i,l)}function Pi(e,t,n,r,l,i){Bu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&xa(t,n,!1),Xe(e,t,i);r=t.stateNode,xf.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=rn(t,e.child,null,i),t.child=rn(t,null,s,i)):se(e,t,s,i),t.memoizedState=r.state,l&&xa(t,n,!0),t.child}function Uu(e){var t=e.stateNode;t.pendingContext?ga(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ga(e,t.context,!1),go(e,t.containerInfo)}function Da(e,t,n,r,l){return nn(),uo(l),t.flags|=256,se(e,t,n,r),t.child}var zi={dehydrated:null,treeContext:null,retryLane:0};function Fi(e){return{baseLanes:e,cachePool:null,transitions:null}}function $u(e,t,n){var r=t.pendingProps,l=$.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O($,l&1),e===null)return Si(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=pl(a,r,0,null),e=_t(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Fi(n),t.memoizedState=zi,e):No(t,a));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return vf(e,t,a,r,s,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=pt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=pt(s,i):(i=_t(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Fi(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=zi,r}return i=e.child,e=i.sibling,r=pt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function No(e,t){return t=pl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gr(e,t,n,r){return r!==null&&uo(r),rn(t,e.child,null,n),e=No(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vf(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Hl(Error(w(422))),gr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=pl({mode:"visible",children:r.children},l,0,null),i=_t(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&rn(t,e.child,null,a),t.child.memoizedState=Fi(a),t.memoizedState=zi,i);if(!(t.mode&1))return gr(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(w(419)),r=Hl(i,r,void 0),gr(e,t,a,r)}if(s=(a&e.childLanes)!==0,he||s){if(r=ee,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ge(e,l),Me(r,e,l,-1))}return zo(),r=Hl(Error(w(421))),gr(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Ff.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ye=ut(l.nextSibling),we=t,B=!0,De=null,e!==null&&(Ne[Ce++]=He,Ne[Ce++]=We,Ne[Ce++]=Pt,He=e.id,We=e.overflow,Pt=t),t=No(t,r.children),t.flags|=4096,t)}function Ta(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ni(e.return,t,n)}function Wl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Vu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(se(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ta(e,n,t);else if(e.tag===19)Ta(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O($,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Yr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Wl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Yr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Wl(t,!0,n,null,i);break;case"together":Wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ft|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yf(e,t,n){switch(t.tag){case 3:Uu(t),nn();break;case 5:mu(t);break;case 1:ge(t.type)&&$r(t);break;case 4:go(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;O(Wr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O($,$.current&1),t.flags|=128,null):n&t.child.childLanes?$u(e,t,n):(O($,$.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);O($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,Au(e,t,n)}return Xe(e,t,n)}var Hu,Li,Wu,Qu;Hu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Li=function(){};Wu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ct(Ue.current);var i=null;switch(n){case"input":l=ei(e,l),r=ei(e,r),i=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":l=ri(e,l),r=ri(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Br)}ii(n,r);var a;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Dn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Dn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&I("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Qu=function(e,t,n,r){n!==r&&(t.flags|=4)};function vn(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wf(e,t,n){var r=t.pendingProps;switch(so(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return ge(t.type)&&Ur(),ie(t),null;case 3:return r=t.stateNode,ln(),A(me),A(ae),vo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(Bi(De),De=null))),Li(e,t),ie(t),null;case 5:xo(t);var l=Ct(Wn.current);if(n=t.type,e!==null&&t.stateNode!=null)Wu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return ie(t),null}if(e=Ct(Ue.current),hr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ae]=t,r[Vn]=i,e=(t.mode&1)!==0,n){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(l=0;l<Sn.length;l++)I(Sn[l],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":Vo(r,i),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},I("invalid",r);break;case"textarea":Wo(r,i),I("invalid",r)}ii(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&pr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&pr(r.textContent,s,e),l=["children",""+s]):Dn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&I("scroll",r)}switch(n){case"input":ir(r),Ho(r,i,!0);break;case"textarea":ir(r),Qo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Br)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ws(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ae]=t,e[Vn]=r,Hu(e,t,!1,!1),t.stateNode=e;e:{switch(a=oi(n,r),n){case"dialog":I("cancel",e),I("close",e),l=r;break;case"iframe":case"object":case"embed":I("load",e),l=r;break;case"video":case"audio":for(l=0;l<Sn.length;l++)I(Sn[l],e);l=r;break;case"source":I("error",e),l=r;break;case"img":case"image":case"link":I("error",e),I("load",e),l=r;break;case"details":I("toggle",e),l=r;break;case"input":Vo(e,r),l=ei(e,r),I("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),I("invalid",e);break;case"textarea":Wo(e,r),l=ri(e,r),I("invalid",e);break;default:l=r}ii(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Ss(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ks(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Tn(e,u):typeof u=="number"&&Tn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Dn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&I("scroll",e):u!=null&&Ki(e,i,u,a))}switch(n){case"input":ir(e),Ho(e,r,!1);break;case"textarea":ir(e),Qo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ht(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Yt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Yt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Br)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Qu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Ct(Wn.current),Ct(Ue.current),hr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ae]=t,(i=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ae]=t,t.stateNode=r}return ie(t),null;case 13:if(A($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&ye!==null&&t.mode&1&&!(t.flags&128))cu(),nn(),t.flags|=98560,i=!1;else if(i=hr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[Ae]=t}else nn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),i=!1}else De!==null&&(Bi(De),De=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?Z===0&&(Z=3):zo())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return ln(),Li(e,t),e===null&&Un(t.stateNode.containerInfo),ie(t),null;case 10:return po(t.type._context),ie(t),null;case 17:return ge(t.type)&&Ur(),ie(t),null;case 19:if(A($),i=t.memoizedState,i===null)return ie(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)vn(i,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Yr(e),a!==null){for(t.flags|=128,vn(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O($,$.current&1|2),t.child}e=e.sibling}i.tail!==null&&Y()>an&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Yr(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!B)return ie(t),null}else 2*Y()-i.renderingStartTime>an&&n!==1073741824&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Y(),t.sibling=null,n=$.current,O($,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return Po(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function kf(e,t){switch(so(t),t.tag){case 1:return ge(t.type)&&Ur(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ln(),A(me),A(ae),vo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xo(t),null;case 13:if(A($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A($),null;case 4:return ln(),null;case 10:return po(t.type._context),null;case 22:case 23:return Po(),null;case 24:return null;default:return null}}var xr=!1,oe=!1,jf=typeof WeakSet=="function"?WeakSet:Set,S=null;function Qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Di(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Ma=!1;function Sf(e,t){if(gi=Or,e=Zs(),oo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,d=0,m=0,g=e,h=null;t:for(;;){for(var k;g!==n||l!==0&&g.nodeType!==3||(s=a+l),g!==i||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(k=g.firstChild)!==null;)h=g,g=k;for(;;){if(g===e)break t;if(h===n&&++d===l&&(s=a),h===i&&++m===r&&(u=a),(k=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=k}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(xi={focusedElem:e,selectionRange:n},Or=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,z=v.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:Fe(t.type,x),z);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){Q(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return v=Ma,Ma=!1,v}function zn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Di(t,n,i)}l=l.next}while(l!==r)}}function dl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ti(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ku(e){var t=e.alternate;t!==null&&(e.alternate=null,Ku(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[Vn],delete t[wi],delete t[lf],delete t[of])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yu(e){return e.tag===5||e.tag===3||e.tag===4}function Ra(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Br));else if(r!==4&&(e=e.child,e!==null))for(Mi(e,t,n),e=e.sibling;e!==null;)Mi(e,t,n),e=e.sibling}function Ri(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ri(e,t,n),e=e.sibling;e!==null;)Ri(e,t,n),e=e.sibling}var te=null,Le=!1;function Je(e,t,n){for(n=n.child;n!==null;)Gu(e,t,n),n=n.sibling}function Gu(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 5:oe||Qt(n,t);case 6:var r=te,l=Le;te=null,Je(e,t,n),te=r,Le=l,te!==null&&(Le?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Le?(e=te,n=n.stateNode,e.nodeType===8?Il(e.parentNode,n):e.nodeType===1&&Il(e,n),In(e)):Il(te,n.stateNode));break;case 4:r=te,l=Le,te=n.stateNode.containerInfo,Le=!0,Je(e,t,n),te=r,Le=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Di(n,t,a),l=l.next}while(l!==r)}Je(e,t,n);break;case 1:if(!oe&&(Qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Q(n,t,s)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,Je(e,t,n),oe=r):Je(e,t,n);break;default:Je(e,t,n)}}function Oa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jf),t.forEach(function(r){var l=Lf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:te=s.stateNode,Le=!1;break e;case 3:te=s.stateNode.containerInfo,Le=!0;break e;case 4:te=s.stateNode.containerInfo,Le=!0;break e}s=s.return}if(te===null)throw Error(w(160));Gu(i,a,l),te=null,Le=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){Q(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xu(t,e),t=t.sibling}function Xu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Oe(e),r&4){try{zn(3,e,e.return),dl(3,e)}catch(x){Q(e,e.return,x)}try{zn(5,e,e.return)}catch(x){Q(e,e.return,x)}}break;case 1:ze(t,e),Oe(e),r&512&&n!==null&&Qt(n,n.return);break;case 5:if(ze(t,e),Oe(e),r&512&&n!==null&&Qt(n,n.return),e.flags&32){var l=e.stateNode;try{Tn(l,"")}catch(x){Q(e,e.return,x)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&vs(l,i),oi(s,a);var d=oi(s,i);for(a=0;a<u.length;a+=2){var m=u[a],g=u[a+1];m==="style"?Ss(l,g):m==="dangerouslySetInnerHTML"?ks(l,g):m==="children"?Tn(l,g):Ki(l,m,g,d)}switch(s){case"input":ti(l,i);break;case"textarea":ys(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?Yt(l,!!i.multiple,k,!1):h!==!!i.multiple&&(i.defaultValue!=null?Yt(l,!!i.multiple,i.defaultValue,!0):Yt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Vn]=i}catch(x){Q(e,e.return,x)}}break;case 6:if(ze(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(x){Q(e,e.return,x)}}break;case 3:if(ze(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{In(t.containerInfo)}catch(x){Q(e,e.return,x)}break;case 4:ze(t,e),Oe(e);break;case 13:ze(t,e),Oe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(_o=Y())),r&4&&Oa(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(d=oe)||m,ze(t,e),oe=d):ze(t,e),Oe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(S=e,m=e.child;m!==null;){for(g=S=m;S!==null;){switch(h=S,k=h.child,h.tag){case 0:case 11:case 14:case 15:zn(4,h,h.return);break;case 1:Qt(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){Q(r,n,x)}}break;case 5:Qt(h,h.return);break;case 22:if(h.memoizedState!==null){Aa(g);continue}}k!==null?(k.return=h,S=k):Aa(g)}m=m.sibling}e:for(m=null,g=e;;){if(g.tag===5){if(m===null){m=g;try{l=g.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=js("display",a))}catch(x){Q(e,e.return,x)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(x){Q(e,e.return,x)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:ze(t,e),Oe(e),r&4&&Oa(e);break;case 21:break;default:ze(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yu(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Tn(l,""),r.flags&=-33);var i=Ra(e);Ri(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Ra(e);Mi(e,s,a);break;default:throw Error(w(161))}}catch(u){Q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nf(e,t,n){S=e,Zu(e)}function Zu(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||xr;if(!a){var s=l.alternate,u=s!==null&&s.memoizedState!==null||oe;s=xr;var d=oe;if(xr=a,(oe=u)&&!d)for(S=l;S!==null;)a=S,u=a.child,a.tag===22&&a.memoizedState!==null?Ba(l):u!==null?(u.return=a,S=u):Ba(l);for(;i!==null;)S=i,Zu(i),i=i.sibling;S=l,xr=s,oe=d}Ia(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):Ia(e)}}function Ia(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||dl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ja(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ja(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&In(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}oe||t.flags&512&&Ti(t)}catch(h){Q(t,t.return,h)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Aa(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Ba(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{dl(4,t)}catch(u){Q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){Q(t,l,u)}}var i=t.return;try{Ti(t)}catch(u){Q(t,i,u)}break;case 5:var a=t.return;try{Ti(t)}catch(u){Q(t,a,u)}}}catch(u){Q(t,t.return,u)}if(t===e){S=null;break}var s=t.sibling;if(s!==null){s.return=t.return,S=s;break}S=t.return}}var Cf=Math.ceil,Zr=Ze.ReactCurrentDispatcher,Co=Ze.ReactCurrentOwner,_e=Ze.ReactCurrentBatchConfig,T=0,ee=null,G=null,ne=0,ve=0,Kt=xt(0),Z=0,Gn=null,Ft=0,fl=0,Eo=0,Fn=null,pe=null,_o=0,an=1/0,$e=null,Jr=!1,Oi=null,dt=null,vr=!1,it=null,qr=0,Ln=0,Ii=null,Pr=-1,zr=0;function ue(){return T&6?Y():Pr!==-1?Pr:Pr=Y()}function ft(e){return e.mode&1?T&2&&ne!==0?ne&-ne:sf.transition!==null?(zr===0&&(zr=Ms()),zr):(e=R,e!==0||(e=window.event,e=e===void 0?16:$s(e.type)),e):1}function Me(e,t,n,r){if(50<Ln)throw Ln=0,Ii=null,Error(w(185));Zn(e,n,r),(!(T&2)||e!==ee)&&(e===ee&&(!(T&2)&&(fl|=n),Z===4&&rt(e,ne)),xe(e,r),n===1&&T===0&&!(t.mode&1)&&(an=Y()+500,sl&&vt()))}function xe(e,t){var n=e.callbackNode;ad(e,t);var r=Rr(e,e===ee?ne:0);if(r===0)n!==null&&Go(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Go(n),t===1)e.tag===0?af(Ua.bind(null,e)):au(Ua.bind(null,e)),nf(function(){!(T&6)&&vt()}),n=null;else{switch(Rs(r)){case 1:n=Ji;break;case 4:n=Ds;break;case 16:n=Mr;break;case 536870912:n=Ts;break;default:n=Mr}n=ic(n,Ju.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ju(e,t){if(Pr=-1,zr=0,T&6)throw Error(w(327));var n=e.callbackNode;if(qt()&&e.callbackNode!==n)return null;var r=Rr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=el(e,r);else{t=r;var l=T;T|=2;var i=ec();(ee!==e||ne!==t)&&($e=null,an=Y()+500,Et(e,t));do try{bf();break}catch(s){qu(e,s)}while(!0);fo(),Zr.current=i,T=l,G!==null?t=0:(ee=null,ne=0,t=Z)}if(t!==0){if(t===2&&(l=di(e),l!==0&&(r=l,t=Ai(e,l))),t===1)throw n=Gn,Et(e,0),rt(e,r),xe(e,Y()),n;if(t===6)rt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Ef(l)&&(t=el(e,r),t===2&&(i=di(e),i!==0&&(r=i,t=Ai(e,i))),t===1))throw n=Gn,Et(e,0),rt(e,r),xe(e,Y()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:jt(e,pe,$e);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=_o+500-Y(),10<t)){if(Rr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=yi(jt.bind(null,e,pe,$e),t);break}jt(e,pe,$e);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Te(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cf(r/1960))-r,10<r){e.timeoutHandle=yi(jt.bind(null,e,pe,$e),r);break}jt(e,pe,$e);break;case 5:jt(e,pe,$e);break;default:throw Error(w(329))}}}return xe(e,Y()),e.callbackNode===n?Ju.bind(null,e):null}function Ai(e,t){var n=Fn;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=el(e,t),e!==2&&(t=pe,pe=n,t!==null&&Bi(t)),e}function Bi(e){pe===null?pe=e:pe.push.apply(pe,e)}function Ef(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Re(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~Eo,t&=~fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Te(t),r=1<<n;e[n]=-1,t&=~r}}function Ua(e){if(T&6)throw Error(w(327));qt();var t=Rr(e,0);if(!(t&1))return xe(e,Y()),null;var n=el(e,t);if(e.tag!==0&&n===2){var r=di(e);r!==0&&(t=r,n=Ai(e,r))}if(n===1)throw n=Gn,Et(e,0),rt(e,t),xe(e,Y()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jt(e,pe,$e),xe(e,Y()),null}function bo(e,t){var n=T;T|=1;try{return e(t)}finally{T=n,T===0&&(an=Y()+500,sl&&vt())}}function Lt(e){it!==null&&it.tag===0&&!(T&6)&&qt();var t=T;T|=1;var n=_e.transition,r=R;try{if(_e.transition=null,R=1,e)return e()}finally{R=r,_e.transition=n,T=t,!(T&6)&&vt()}}function Po(){ve=Kt.current,A(Kt)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tf(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(so(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ur();break;case 3:ln(),A(me),A(ae),vo();break;case 5:xo(r);break;case 4:ln();break;case 13:A($);break;case 19:A($);break;case 10:po(r.type._context);break;case 22:case 23:Po()}n=n.return}if(ee=e,G=e=pt(e.current,null),ne=ve=t,Z=0,Gn=null,Eo=fl=Ft=0,pe=Fn=null,Nt!==null){for(t=0;t<Nt.length;t++)if(n=Nt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}Nt=null}return e}function qu(e,t){do{var n=G;try{if(fo(),Er.current=Xr,Gr){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Gr=!1}if(zt=0,q=X=V=null,Pn=!1,Qn=0,Co.current=null,n===null||n.return===null){Z=1,Gn=t,G=null;break}e:{var i=e,a=n.return,s=n,u=t;if(t=ne,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,m=s,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var k=ba(a);if(k!==null){k.flags&=-257,Pa(k,a,s,i,t),k.mode&1&&_a(i,d,t),t=k,u=d;var v=t.updateQueue;if(v===null){var x=new Set;x.add(u),t.updateQueue=x}else v.add(u);break e}else{if(!(t&1)){_a(i,d,t),zo();break e}u=Error(w(426))}}else if(B&&s.mode&1){var z=ba(a);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Pa(z,a,s,i,t),uo(on(u,s));break e}}i=u=on(u,s),Z!==4&&(Z=2),Fn===null?Fn=[i]:Fn.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Ru(i,u,t);ka(i,f);break e;case 1:s=u;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(dt===null||!dt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Ou(i,s,t);ka(i,y);break e}}i=i.return}while(i!==null)}nc(n)}catch(j){t=j,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function ec(){var e=Zr.current;return Zr.current=Xr,e===null?Xr:e}function zo(){(Z===0||Z===3||Z===2)&&(Z=4),ee===null||!(Ft&268435455)&&!(fl&268435455)||rt(ee,ne)}function el(e,t){var n=T;T|=2;var r=ec();(ee!==e||ne!==t)&&($e=null,Et(e,t));do try{_f();break}catch(l){qu(e,l)}while(!0);if(fo(),T=n,Zr.current=r,G!==null)throw Error(w(261));return ee=null,ne=0,Z}function _f(){for(;G!==null;)tc(G)}function bf(){for(;G!==null&&!Jc();)tc(G)}function tc(e){var t=lc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?nc(e):G=t,Co.current=null}function nc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=kf(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,G=null;return}}else if(n=wf(n,t,ve),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);Z===0&&(Z=5)}function jt(e,t,n){var r=R,l=_e.transition;try{_e.transition=null,R=1,Pf(e,t,n,r)}finally{_e.transition=l,R=r}return null}function Pf(e,t,n,r){do qt();while(it!==null);if(T&6)throw Error(w(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(sd(e,i),e===ee&&(G=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vr||(vr=!0,ic(Mr,function(){return qt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=_e.transition,_e.transition=null;var a=R;R=1;var s=T;T|=4,Co.current=null,Sf(e,n),Xu(n,e),Yd(xi),Or=!!gi,xi=gi=null,e.current=n,Nf(n),qc(),T=s,R=a,_e.transition=i}else e.current=n;if(vr&&(vr=!1,it=e,qr=l),i=e.pendingLanes,i===0&&(dt=null),nd(n.stateNode),xe(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Jr)throw Jr=!1,e=Oi,Oi=null,e;return qr&1&&e.tag!==0&&qt(),i=e.pendingLanes,i&1?e===Ii?Ln++:(Ln=0,Ii=e):Ln=0,vt(),null}function qt(){if(it!==null){var e=Rs(qr),t=_e.transition,n=R;try{if(_e.transition=null,R=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,qr=0,T&6)throw Error(w(331));var l=T;for(T|=4,S=e.current;S!==null;){var i=S,a=i.child;if(S.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(S=d;S!==null;){var m=S;switch(m.tag){case 0:case 11:case 15:zn(8,m,i)}var g=m.child;if(g!==null)g.return=m,S=g;else for(;S!==null;){m=S;var h=m.sibling,k=m.return;if(Ku(m),m===d){S=null;break}if(h!==null){h.return=k,S=h;break}S=k}}}var v=i.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var z=x.sibling;x.sibling=null,x=z}while(x!==null)}}S=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,S=a;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:zn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,S=f;break e}S=i.return}}var c=e.current;for(S=c;S!==null;){a=S;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,S=p;else e:for(a=c;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:dl(9,s)}}catch(j){Q(s,s.return,j)}if(s===a){S=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,S=y;break e}S=s.return}}if(T=l,vt(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(rl,e)}catch{}r=!0}return r}finally{R=n,_e.transition=t}}return!1}function $a(e,t,n){t=on(n,t),t=Ru(e,t,1),e=ct(e,t,1),t=ue(),e!==null&&(Zn(e,1,t),xe(e,t))}function Q(e,t,n){if(e.tag===3)$a(e,e,n);else for(;t!==null;){if(t.tag===3){$a(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dt===null||!dt.has(r))){e=on(n,e),e=Ou(t,e,1),t=ct(t,e,1),e=ue(),t!==null&&(Zn(t,1,e),xe(t,e));break}}t=t.return}}function zf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(Z===4||Z===3&&(ne&130023424)===ne&&500>Y()-_o?Et(e,0):Eo|=n),xe(e,t)}function rc(e,t){t===0&&(e.mode&1?(t=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):t=1);var n=ue();e=Ge(e,t),e!==null&&(Zn(e,t,n),xe(e,n))}function Ff(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rc(e,n)}function Lf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),rc(e,n)}var lc;lc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,yf(e,t,n);he=!!(e.flags&131072)}else he=!1,B&&t.flags&1048576&&su(t,Hr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;br(e,t),e=t.pendingProps;var l=tn(t,ae.current);Jt(t,n),l=wo(null,t,r,e,l,n);var i=ko();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(i=!0,$r(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,mo(t),l.updater=cl,t.stateNode=l,l._reactInternals=t,Ei(t,r,e,n),t=Pi(null,t,r,!0,i,n)):(t.tag=0,B&&i&&ao(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(br(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Tf(r),e=Fe(r,e),l){case 0:t=bi(null,t,r,e,n);break e;case 1:t=La(null,t,r,e,n);break e;case 11:t=za(null,t,r,e,n);break e;case 14:t=Fa(null,t,r,Fe(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),bi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),La(e,t,r,l,n);case 3:e:{if(Uu(t),e===null)throw Error(w(387));r=t.pendingProps,i=t.memoizedState,l=i.element,hu(e,t),Kr(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=on(Error(w(423)),t),t=Da(e,t,r,n,l);break e}else if(r!==l){l=on(Error(w(424)),t),t=Da(e,t,r,n,l);break e}else for(ye=ut(t.stateNode.containerInfo.firstChild),we=t,B=!0,De=null,n=fu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nn(),r===l){t=Xe(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return mu(t),e===null&&Si(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,vi(r,l)?a=null:i!==null&&vi(r,i)&&(t.flags|=32),Bu(e,t),se(e,t,a,n),t.child;case 6:return e===null&&Si(t),null;case 13:return $u(e,t,n);case 4:return go(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),za(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,O(Wr,r._currentValue),r._currentValue=a,i!==null)if(Re(i.value,a)){if(i.children===l.children&&!me.current){t=Xe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Qe(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?u.next=u:(u.next=m.next,m.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ni(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(w(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ni(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Jt(t,n),l=be(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=Fe(r,t.pendingProps),l=Fe(r.type,l),Fa(e,t,r,l,n);case 15:return Iu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),br(e,t),t.tag=1,ge(r)?(e=!0,$r(t)):e=!1,Jt(t,n),Mu(t,r,l),Ei(t,r,l,n),Pi(null,t,r,!0,e,n);case 19:return Vu(e,t,n);case 22:return Au(e,t,n)}throw Error(w(156,t.tag))};function ic(e,t){return Ls(e,t)}function Df(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Df(e,t,n,r)}function Fo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tf(e){if(typeof e=="function")return Fo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gi)return 11;if(e===Xi)return 14}return 2}function pt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fr(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")Fo(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ot:return _t(n.children,l,i,t);case Yi:a=8,l|=8;break;case Xl:return e=Ee(12,n,t,l|2),e.elementType=Xl,e.lanes=i,e;case Zl:return e=Ee(13,n,t,l),e.elementType=Zl,e.lanes=i,e;case Jl:return e=Ee(19,n,t,l),e.elementType=Jl,e.lanes=i,e;case ms:return pl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ps:a=10;break e;case hs:a=9;break e;case Gi:a=11;break e;case Xi:a=14;break e;case et:a=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ee(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function _t(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function pl(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=ms,e.lanes=n,e.stateNode={isHidden:!1},e}function Ql(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function Kl(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Lo(e,t,n,r,l,i,a,s,u){return e=new Mf(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ee(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mo(i),e}function Rf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function oc(e){if(!e)return mt;e=e._reactInternals;e:{if(Tt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ge(n))return ou(e,n,t)}return t}function ac(e,t,n,r,l,i,a,s,u){return e=Lo(n,r,!0,e,l,i,a,s,u),e.context=oc(null),n=e.current,r=ue(),l=ft(n),i=Qe(r,l),i.callback=t??null,ct(n,i,l),e.current.lanes=l,Zn(e,l,r),xe(e,r),e}function hl(e,t,n,r){var l=t.current,i=ue(),a=ft(l);return n=oc(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ct(l,t,a),e!==null&&(Me(e,l,a,i),Cr(e,l,a)),a}function tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Va(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Do(e,t){Va(e,t),(e=e.alternate)&&Va(e,t)}function Of(){return null}var sc=typeof reportError=="function"?reportError:function(e){console.error(e)};function To(e){this._internalRoot=e}ml.prototype.render=To.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));hl(e,t,null,null)};ml.prototype.unmount=To.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){hl(null,e,null,null)}),t[Ye]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=As();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&Us(e)}};function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ha(){}function If(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=tl(a);i.call(d)}}var a=ac(t,r,e,0,null,!1,!1,"",Ha);return e._reactRootContainer=a,e[Ye]=a.current,Un(e.nodeType===8?e.parentNode:e),Lt(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=tl(u);s.call(d)}}var u=Lo(e,0,!1,null,null,!1,!1,"",Ha);return e._reactRootContainer=u,e[Ye]=u.current,Un(e.nodeType===8?e.parentNode:e),Lt(function(){hl(t,u,n,r)}),u}function xl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var s=l;l=function(){var u=tl(a);s.call(u)}}hl(t,a,e,l)}else a=If(n,t,e,l,r);return tl(a)}Os=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jn(t.pendingLanes);n!==0&&(qi(t,n|1),xe(t,Y()),!(T&6)&&(an=Y()+500,vt()))}break;case 13:Lt(function(){var r=Ge(e,1);if(r!==null){var l=ue();Me(r,e,1,l)}}),Do(e,1)}};eo=function(e){if(e.tag===13){var t=Ge(e,134217728);if(t!==null){var n=ue();Me(t,e,134217728,n)}Do(e,134217728)}};Is=function(e){if(e.tag===13){var t=ft(e),n=Ge(e,t);if(n!==null){var r=ue();Me(n,e,t,r)}Do(e,t)}};As=function(){return R};Bs=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};si=function(e,t,n){switch(t){case"input":if(ti(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=al(r);if(!l)throw Error(w(90));xs(r),ti(r,l)}}}break;case"textarea":ys(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}};Es=bo;_s=Lt;var Af={usingClientEntryPoint:!1,Events:[qn,Ut,al,Ns,Cs,bo]},yn={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bf={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zs(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Of,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{rl=yr.inject(Bf),Be=yr}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Af;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mo(t))throw Error(w(200));return Rf(e,t,null,n)};je.createRoot=function(e,t){if(!Mo(e))throw Error(w(299));var n=!1,r="",l=sc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Lo(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,Un(e.nodeType===8?e.parentNode:e),new To(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=zs(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return Lt(e)};je.hydrate=function(e,t,n){if(!gl(t))throw Error(w(200));return xl(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!Mo(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=sc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ac(t,null,e,1,n??null,l,!1,i,a),e[Ye]=t.current,Un(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ml(t)};je.render=function(e,t,n){if(!gl(t))throw Error(w(200));return xl(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!gl(e))throw Error(w(40));return e._reactRootContainer?(Lt(function(){xl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};je.unstable_batchedUpdates=bo;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gl(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return xl(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function uc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uc)}catch(e){console.error(e)}}uc(),us.exports=je;var Uf=us.exports,Wa=Uf;Yl.createRoot=Wa.createRoot,Yl.hydrateRoot=Wa.hydrateRoot;const Qa={en:{languageName:"English",getStarted:"Get Started",headline:"Connect. Collect. Recycle.",subheadline:"A smart way to sell e-waste, earn better and build a cleaner future.",betterPrices:"Better Prices",betterPricesDesc:"Know fair rates in real-time",easyPickups:"Easy Pickups",easyPickupsDesc:"Schedule pickups at your convenience",safeTrusted:"Safe & Trusted",safeTrustedDesc:"Verified partners and secure deals",chooseLanguage:"Choose a Language",continue:"Continue",skip:"Skip",enterMobile:"Enter your mobile number",otpSubtitle:"We'll send you an OTP to verify your number",mobilePlaceholder:"Enter mobile number",termsText:"By continuing, you accept the",termsOfService:"Terms of Service",privacyPolicy:"Privacy Policy",contentPolicy:"Content Policy",verifyOtpTitle:"Enter 4-Digit OTP",verifyOtpSubtitle:"OTP sent to +91 ",verify:"Verify & Proceed",resendOtp:"Resend OTP in 30s",whatsYourLocation:"What's your location?",locationSubtitle:"Sharing location permission helps us locate a Partner near you",findNearbyPartners:"Find nearby partners",findNearbyPartnersDesc:"We'll show partners closest to you",fasterPickups:"Faster pickups",fasterPickupsDesc:"Help us reduce travel time & reach you faster",securePrivate:"Secure & private",securePrivateDesc:"Your location is safe and never shared publicly",useCurrentLocation:"Use Current Location",searchLocationManually:"Search Location Manually",allowNotificationsTitle:"Allow Notifications and Pickup alerts",realtimePartnerUpdates:"Real-time Partner Updates",realtimePartnerUpdatesDesc:"Get notified about partner allocation, arrival and more",offersAndNews:"Offers and news",offersAndNewsDesc:"Be the first to know about our offers and new features",allowPermission:"Allow Permission",maybeLater:"Maybe Later",setupComplete:"Setup Complete!",setupCompleteDesc:"You have completed the onboarding flow.",restartFlow:"Restart Prototype Flow"},hi:{languageName:"हिंदी",getStarted:"शुरू करें",headline:"जोड़ें. एकत्र करें. रीसायकल करें.",subheadline:"ई-कचरा बेचने, बेहतर कमाने और स्वच्छ भविष्य बनाने का स्मार्ट तरीका।",betterPrices:"बेहतर दरें",betterPricesDesc:"वास्तविक समय में उचित दरें जानें",easyPickups:"आसान पिकअप",easyPickupsDesc:"अपनी सुविधा अनुसार पिकअप शेड्यूल करें",safeTrusted:"सुरक्षित और विश्वसनीय",safeTrustedDesc:"सत्यापित भागीदार और सुरक्षित सौदे",chooseLanguage:"भाषा चुनें",continue:"आगे बढ़ें",skip:"छोड़ें",enterMobile:"अपना मोबाइल नंबर दर्ज करें",otpSubtitle:"हम आपका नंबर सत्यापित करने के लिए एक ओटीपी भेजेंगे",mobilePlaceholder:"मोबाइल नंबर दर्ज करें",termsText:"जारी रखकर, आप स्वीकार करते हैं",termsOfService:"सेवा की शर्तें",privacyPolicy:"गोपनीयता नीति",contentPolicy:"सामग्री नीति",verifyOtpTitle:"4-अंकों का ओटीपी दर्ज करें",verifyOtpSubtitle:"ओटीपी +91 पर भेजा गया ",verify:"सत्यापित करें और आगे बढ़ें",resendOtp:"30 सेकंड में पुन: ओटीपी भेजें",whatsYourLocation:"आपका स्थान क्या है?",locationSubtitle:"स्थान की अनुमति साझा करने से हमें आपके निकटतम भागीदार को खोजने में मदद मिलती है",findNearbyPartners:"पास के भागीदार खोजें",findNearbyPartnersDesc:"हम आपके निकटतम भागीदार दिखाएंगे",fasterPickups:"तेज़ पिकअप",fasterPickupsDesc:"यात्रा समय कम करने और आप तक तेज़ी से पहुँचने में मदद करता है",securePrivate:"सुरक्षित और निजी",securePrivateDesc:"आपका स्थान सुरक्षित है और कभी सार्वजनिक रूप से साझा नहीं किया जाता है",useCurrentLocation:"वर्तमान स्थान का उपयोग करें",searchLocationManually:"स्थान मैन्युअल रूप से खोजें",allowNotificationsTitle:"सूचनाएं और पिकअप अलर्ट की अनुमति दें",realtimePartnerUpdates:"रियल-टाइम पार्टनर अपडेट",realtimePartnerUpdatesDesc:"पार्टनर आवंटन, आगमन और अधिक के बारे में सूचित रहें",offersAndNews:"ऑफ़र और समाचार",offersAndNewsDesc:"हमारे ऑफ़र और नई सुविधाओं के बारे में सबसे पहले जानें",allowPermission:"अनुमति दें",maybeLater:"शायद बाद में",setupComplete:"सेटअप पूरा हुआ!",setupCompleteDesc:"आपने ऑनबोर्डिंग प्रक्रिया पूरी कर ली है।",restartFlow:"प्रोटोटाइप प्रवाह पुनः शुरू करें"},mr:{languageName:"मराठी",getStarted:"सुरू करा",headline:"जोडा. गोळा करा. रीसायकल करा.",subheadline:"ई-कचरा विकण्याचा, अधिक कमाई करण्याचा आणि स्वच्छ भविष्य घडवण्याचा स्मार्ट मार्ग.",betterPrices:"उत्तम दर",betterPricesDesc:"रिअल-टाइममध्ये रास्त दर जाणून घ्या",easyPickups:"सोपे पिकअप",easyPickupsDesc:"तुमच्या सोयीनुसार पिकअप शेड्यूल करा",safeTrusted:"सुरक्षित आणि विश्वासार्ह",safeTrustedDesc:"सत्यापित भागीदार आणि सुरक्षित व्यवहार",chooseLanguage:"भाषा निवडा",continue:"पुढे चला",skip:"वगळा",enterMobile:"तुमचा मोबाईल नंबर प्रविष्ट करा",otpSubtitle:"आम्ही तुमचा नंबर पडताळण्यासाठी एक OTP पाठवू",mobilePlaceholder:"मोबाईल नंबर प्रविष्ट करा",termsText:"सुरू ठेवून, तुम्ही स्वीकारता",termsOfService:"सेवा अटी",privacyPolicy:"गोपनीयता धोरण",contentPolicy:"सामग्री धोरण",verifyOtpTitle:"4-अंकी OTP प्रविष्ट करा",verifyOtpSubtitle:"OTP पाठवला +91 ",verify:"पडताळणी करा आणि पुढे जा",resendOtp:"30 सेकंदात पुन्हा पाठवा",whatsYourLocation:"तुमचे स्थान काय आहे?",locationSubtitle:"स्थान परवानगी सामायिक केल्याने आम्हाला तुमच्या जवळील भागीदार शोधण्यात मदत होते",findNearbyPartners:"जवळील भागीदार शोधा",findNearbyPartnersDesc:"आम्ही तुमच्या सर्वात जवळचे भागीदार दाखवू",fasterPickups:"जलद पिकअप",fasterPickupsDesc:"प्रवास वेळ कमी करण्यात आणि तुमच्यापर्यंत जलद पोहोचण्यास मदत करते",securePrivate:"सुरक्षित आणि खाजगी",securePrivateDesc:"तुमचे स्थान सुरक्षित आहे आणि कधीही सार्वजनिकपणे सामायिक केले जात नाही",useCurrentLocation:"सध्याचे स्थान वापरा",searchLocationManually:"स्थान मॅन्युअली शोधा",allowNotificationsTitle:"सूचना आणि पिकअप अ‍ॅलर्टला अनुमती द्या",realtimePartnerUpdates:"रिअल-टाइम पार्टनर अ‍ॅपडेट्स",realtimePartnerUpdatesDesc:"भागीदार वाटप, आगमन आणि अधिक बद्दल सूचना मिळवा",offersAndNews:"ऑफर आणि बातम्या",offersAndNewsDesc:"आमच्या ऑफर आणि नवीन वैशिष्ट्यांबद्दल जाणून घेणारे पहिले व्हा",allowPermission:"परवानगी द्या",maybeLater:"नंतर करूया",setupComplete:"सेटअप पूर्ण झाला!",setupCompleteDesc:"तुम्ही ऑनबोर्डिंग प्रक्रिया पूर्ण केली आहे.",restartFlow:"प्रोटोटाइप प्रवाह पुन्हा सुरू करा"}};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $f={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),W=(e,t)=>{const n=M.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:s="",children:u,...d},m)=>M.createElement("svg",{ref:m,...$f,width:l,height:l,stroke:r,strokeWidth:a?Number(i)*24/Number(l):i,className:["lucide",`lucide-${Vf(e)}`,s].join(" "),...d},[...t.map(([g,h])=>M.createElement(g,h)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=W("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=W("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=W("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=W("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=W("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=W("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=W("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=W("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=W("Delete",[["path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z",key:"1oy587"}],["line",{x1:"18",x2:"12",y1:"9",y2:"15",key:"1olkx5"}],["line",{x1:"12",x2:"18",y1:"9",y2:"15",key:"1n50pc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=W("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=W("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=W("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=W("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=W("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=W("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=W("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=W("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=W("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=W("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=W("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=W("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=W("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=W("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Za=["splash","language","auth","location","notification","home"];function ip({light:e,background:t}){const[n,r]=M.useState(()=>l(new Date));M.useEffect(()=>{const a=setInterval(()=>r(l(new Date)),15e3);return()=>clearInterval(a)},[]);function l(a){let s=a.getHours();const u=a.getMinutes();return s=s%12,s===0&&(s=12),`${s}:${u.toString().padStart(2,"0")}`}const i=e?"#FFFFFF":"var(--brand-dark-text)";return o.jsxs("div",{className:`status-bar ${e?"status-bar-light":"status-bar-dark"}`,style:{background:t},children:[o.jsx("span",{className:"time-display",children:n}),o.jsx("div",{className:"dynamic-island"}),o.jsxs("div",{className:"status-bar-icons",children:[o.jsxs("svg",{width:"18",height:"12",viewBox:"0 0 18 12",fill:"none",children:[o.jsx("rect",{x:"0",y:"7",width:"3",height:"5",rx:"0.8",fill:i}),o.jsx("rect",{x:"5",y:"5",width:"3",height:"7",rx:"0.8",fill:i}),o.jsx("rect",{x:"10",y:"3",width:"3",height:"9",rx:"0.8",fill:i}),o.jsx("rect",{x:"15",y:"0",width:"3",height:"12",rx:"0.8",fill:i})]}),o.jsx(rp,{size:14,color:i,strokeWidth:2.5}),o.jsxs("svg",{width:"25",height:"13",viewBox:"0 0 25 13",fill:"none",children:[o.jsx("rect",{x:"0.75",y:"0.75",width:"20",height:"11.5",rx:"3.25",stroke:i,strokeOpacity:"0.4",strokeWidth:"1"}),o.jsx("rect",{x:"2.25",y:"2.25",width:"16",height:"8.5",rx:"2",fill:i}),o.jsx("path",{d:"M22.5 4.5V8.5C23.3 8.1 23.8 7.3 23.8 6.5C23.8 5.7 23.3 4.9 22.5 4.5Z",fill:i,fillOpacity:"0.4"})]})]})]})}function op({currentScreen:e,setCurrentScreen:t,currentLang:n,setLanguage:r,children:l}){const[i,a]=M.useState(()=>typeof window<"u"&&window.innerWidth<=520),[s,u]=M.useState(null),d=s!==null?s:i,[m,g]=M.useState("forward"),h=M.useRef(e);M.useEffect(()=>{const x=()=>a(window.innerWidth<=520);return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]),M.useEffect(()=>{const x=Za.indexOf(h.current),z=Za.indexOf(e);g(z>=x?"forward":"backward"),h.current=e},[e]);const k=[{id:"splash",label:"1. Splash"},{id:"language",label:"2. Language"},{id:"auth",label:"3. Mobile & OTP"},{id:"location",label:"4. Location"},{id:"notification",label:"5. Notifications"},{id:"home",label:"6. Home"}],v=e==="home";return o.jsxs("div",{className:`app-viewport-wrapper ${d?"fullscreen-active":""}`,children:[o.jsxs("div",{className:"control-toolbar",children:[o.jsxs("div",{className:"toolbar-brand",children:[o.jsx(Xf,{size:18,color:"#CAE0B8"}),o.jsx("span",{children:"Kabadiwala Connect Prototype"})]}),o.jsxs("div",{className:"toolbar-controls",children:[o.jsxs("button",{className:`btn-icon-toggle ${d?"":"active"}`,onClick:()=>u(!1),title:"Mobile Frame View",children:[o.jsx(Ya,{size:14}),o.jsx("span",{children:"Phone"})]}),o.jsxs("button",{className:`btn-icon-toggle ${d?"active":""}`,onClick:()=>u(!0),title:"Full Screen View",children:[o.jsx(Zf,{size:14}),o.jsx("span",{children:"Full"})]}),o.jsx("div",{className:"lang-quick-group",children:["en","hi","mr"].map(x=>o.jsx("button",{className:`lang-chip ${n===x?"active":""}`,onClick:()=>r(x),children:x.toUpperCase()},x))})]})]}),o.jsx("div",{className:"stepper-nav-bar",children:k.map(x=>o.jsx("button",{className:`stepper-btn ${e===x.id?"active":""}`,onClick:()=>t(x.id),children:x.label},x.id))}),o.jsxs("div",{className:`phone-frame ${d?"full-screen-mode":""}`,children:[o.jsx(ip,{light:v,background:v?"linear-gradient(180deg, #174826 0%, #1C522D 100%)":"transparent"}),o.jsx("div",{className:"screen-container","data-direction":m,children:l},e),o.jsx("div",{className:"phone-home-indicator"})]}),d&&!i&&o.jsx("button",{className:"exit-fullscreen-btn",onClick:()=>u(!1),title:"Exit Full Screen","aria-label":"Exit Full Screen",children:o.jsx(Ya,{size:14})}),o.jsx("style",{children:`
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

        .dynamic-island {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 26px;
          background: #000000;
          border-radius: 16px;
          z-index: 60;
          pointer-events: none;
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

        /* Fullscreen mode: hide prototype chrome, let the app fill the real viewport */
        .fullscreen-active .control-toolbar,
        .fullscreen-active .stepper-nav-bar {
          display: none;
        }

        .fullscreen-active {
          padding: 0;
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
      `})]})}function ap({t:e,onNext:t}){return o.jsxs("div",{className:"splash-screen page-fade-enter",children:[o.jsx("div",{className:"splash-header",children:o.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/brand/kc_logo_lockup_transparent.png",alt:"Kabadiwala Connect Logo",className:"brand-logo-img"})}),o.jsx("div",{className:"splash-hero-container",children:o.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/splash_hero_illustration_transparent.png",alt:"E-waste Collection Illustration",className:"hero-illustration-img"})}),o.jsxs("div",{className:"splash-content-section",children:[o.jsx("h1",{className:"splash-headline",children:e.headline}),o.jsxs("p",{className:"splash-subheadline",children:["A smart way to sell e-waste,",o.jsx("br",{}),"earn better and build a cleaner future."]}),o.jsxs("button",{className:"primary-button splash-cta-btn",onClick:t,children:[o.jsx("span",{children:e.getStarted}),o.jsx(cc,{size:22,color:"#FFFFFF",strokeWidth:2.5})]}),o.jsxs("div",{className:"feature-badges-grid",children:[o.jsxs("div",{className:"feature-badge-item",children:[o.jsx("div",{className:"feature-icon-wrapper",children:o.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/badge_better_prices.png",alt:"Better Prices"})}),o.jsxs("div",{className:"feature-badge-text",children:[o.jsx("div",{className:"feature-title",children:e.betterPrices}),o.jsx("div",{className:"feature-desc",children:e.betterPricesDesc})]})]}),o.jsxs("div",{className:"feature-badge-item",children:[o.jsx("div",{className:"feature-icon-wrapper",children:o.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/badge_easy_pickups.png",alt:"Easy Pickups"})}),o.jsxs("div",{className:"feature-badge-text",children:[o.jsx("div",{className:"feature-title",children:e.easyPickups}),o.jsx("div",{className:"feature-desc",children:e.easyPickupsDesc})]})]}),o.jsxs("div",{className:"feature-badge-item",children:[o.jsx("div",{className:"feature-icon-wrapper",children:o.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/badge_safe_trusted.png",alt:"Safe & Trusted"})}),o.jsxs("div",{className:"feature-badge-text",children:[o.jsx("div",{className:"feature-title",children:e.safeTrusted}),o.jsx("div",{className:"feature-desc",children:e.safeTrustedDesc})]})]})]})]}),o.jsx("style",{children:`
        .splash-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8px 24px 28px 24px;
          height: 100%;
          justify-content: space-between;
          background-color: var(--surface-warm);
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
          height: 90px;
          max-width: 85%;
          object-fit: contain;
        }

        .splash-hero-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 8px;
        }

        .hero-illustration-img {
          width: 100%;
          max-width: 320px;
          height: auto;
          max-height: 220px;
          object-fit: contain;
        }

        .splash-content-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .splash-headline {
          font-size: 24px;
          font-weight: 800;
          color: var(--brand-deep-green);
          margin-bottom: 6px;
          letter-spacing: -0.3px;
          white-space: nowrap;
        }

        .splash-subheadline {
          font-size: 13.5px;
          color: var(--text-secondary);
          max-width: 320px;
          line-height: 1.45;
          margin-bottom: 20px;
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
          margin-bottom: 22px;
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
      `})]})}function sp({t:e,currentLang:t,setLanguage:n,onNext:r,onBack:l}){const i=[{code:"en",name:"English",icon:"Aa"},{code:"hi",name:"हिंदी",icon:"आ"},{code:"mr",name:"मराठी",icon:"म"}];return o.jsxs("div",{className:"language-screen page-fade-enter",children:[o.jsx("div",{className:"top-nav-bar",children:l&&o.jsx("button",{className:"back-arrow-btn",onClick:l,"aria-label":"Go Back",children:o.jsx(vl,{size:20,color:"#1C522D"})})}),o.jsxs("div",{className:"language-container",children:[o.jsx("h1",{className:"language-title",children:e.chooseLanguage}),o.jsx("div",{className:"language-list",children:i.map(a=>{const s=t===a.code;return o.jsxs("div",{className:`language-card ${s?"selected":""}`,onClick:()=>n(a.code),children:[o.jsxs("div",{className:"language-card-left",children:[o.jsx("div",{className:"lang-icon-badge",children:a.icon}),o.jsx("span",{className:"lang-name",children:a.name})]}),o.jsx("div",{className:`radio-circle ${s?"active":""}`,children:s&&o.jsx("div",{className:"radio-inner-dot"})})]},a.code)})})]}),o.jsx("div",{className:"language-footer",children:o.jsx("button",{className:"primary-button continue-btn",onClick:r,children:e.continue})}),o.jsx("style",{children:`
        .language-screen {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px 24px 32px 24px;
          height: 100%;
          background-color: var(--surface-warm);
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
      `})]})}function up({t:e,onSkip:t,onAuthenticated:n,onBack:r}){const[l,i]=M.useState(""),[a,s]=M.useState("phone"),[u,d]=M.useState(["","","",""]),m=()=>{a==="otp"?s("phone"):r&&r()},g=v=>{if(a==="phone")v==="backspace"?i(x=>x.slice(0,-1)):l.length<10&&i(x=>x+v);else if(v==="backspace"){const x=[...u];for(let z=3;z>=0;z--)if(x[z]!==""){x[z]="";break}d(x)}else{const x=[...u];for(let z=0;z<4;z++)if(x[z]===""){x[z]=v;break}d(x)}},h=()=>{a==="phone"?(l.length<10&&i("9876543210"),s("otp")):n({phone:l||"9876543210"})},k=[{num:"1",sub:""},{num:"2",sub:"ABC"},{num:"3",sub:"DEF"},{num:"4",sub:"GHI"},{num:"5",sub:"JKL"},{num:"6",sub:"MNO"},{num:"7",sub:"PQRS"},{num:"8",sub:"TUV"},{num:"9",sub:"WXYZ"},{num:"",sub:""},{num:"0",sub:""},{num:"backspace",sub:""}];return o.jsxs("div",{className:"auth-screen page-fade-enter",children:[o.jsxs("div",{className:"auth-header",children:[o.jsx("button",{className:"back-arrow-btn",onClick:m,"aria-label":"Go Back",children:o.jsx(vl,{size:20,color:"#1C522D"})}),o.jsx("button",{className:"skip-pill",onClick:t,children:e.skip})]}),o.jsx("div",{className:"auth-body",children:a==="phone"?o.jsxs(o.Fragment,{children:[o.jsx("h1",{className:"auth-title",children:e.enterMobile}),o.jsx("p",{className:"auth-subtitle",children:e.otpSubtitle}),o.jsxs("div",{className:`phone-input-box ${l?"has-value":""}`,children:[o.jsxs("div",{className:"country-code",children:[o.jsx("span",{children:"+91"}),o.jsx(dc,{size:16,color:"#538A46"})]}),o.jsx("div",{className:"input-divider"}),o.jsx("div",{className:"phone-display-value",children:l||o.jsx("span",{className:"placeholder",children:e.mobilePlaceholder})})]}),o.jsx("button",{className:"primary-button continue-btn",onClick:h,children:e.continue}),o.jsxs("p",{className:"terms-disclaimer",children:[e.termsText," ",o.jsx("a",{href:"#terms",children:e.termsOfService}),","," ",o.jsx("a",{href:"#privacy",children:e.privacyPolicy})," and ",o.jsx("a",{href:"#content",children:e.contentPolicy}),"."]})]}):o.jsxs(o.Fragment,{children:[o.jsx("h1",{className:"auth-title",children:e.verifyOtpTitle}),o.jsxs("p",{className:"auth-subtitle",children:[e.verifyOtpSubtitle," ",o.jsxs("strong",{children:["+91 ",l||"9876543210"]})]}),o.jsx("div",{className:"otp-input-container",children:[0,1,2,3].map(v=>o.jsx("div",{className:`otp-box ${u[v]?"filled":""}`,children:u[v]||(v===u.findIndex(x=>x==="")?"|":"")},v))}),o.jsx("button",{className:"primary-button continue-btn",onClick:h,children:e.verify}),o.jsxs("div",{className:"resend-otp-link",onClick:()=>d(["1","2","3","4"]),children:[e.resendOtp," (Tap to Auto-Fill 1234)"]})]})}),o.jsx("div",{className:"custom-keypad",children:k.map((v,x)=>v.num===""?o.jsx("div",{className:"keypad-cell empty"},x):v.num==="backspace"?o.jsx("div",{className:"keypad-cell backspace-cell",onClick:()=>g("backspace"),children:o.jsx(Yf,{size:22,color:"#1B1B1B"})},x):o.jsxs("div",{className:"keypad-cell",onClick:()=>g(v.num),children:[o.jsx("div",{className:"key-num",children:v.num}),v.sub&&o.jsx("div",{className:"key-sub",children:v.sub})]},x))}),o.jsx("style",{children:`
        .auth-screen {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px 20px 20px 20px;
          height: 100%;
          background-color: var(--surface-warm);
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
      `})]})}function cp({t:e,onNext:t,onBack:n}){return o.jsxs("div",{className:"location-screen page-fade-enter",children:[o.jsx("div",{className:"top-nav-bar",children:n&&o.jsx("button",{className:"back-arrow-btn",onClick:n,"aria-label":"Go Back",children:o.jsx(vl,{size:20,color:"#1C522D"})})}),o.jsx("div",{className:"location-hero-container",children:o.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/illustrations/location_hero_transparent_clean.png",alt:"Map Location Hero",className:"location-hero-img"})}),o.jsxs("div",{className:"location-content",children:[o.jsx("h1",{className:"location-title",children:e.whatsYourLocation}),o.jsx("p",{className:"location-subtitle",children:e.locationSubtitle}),o.jsxs("div",{className:"location-bullets-list",children:[o.jsxs("div",{className:"bullet-item",children:[o.jsx("div",{className:"bullet-icon-wrapper",children:o.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/bullet_nearby_badge.png",alt:"Find Nearby"})}),o.jsxs("div",{className:"bullet-text",children:[o.jsx("div",{className:"bullet-title",children:e.findNearbyPartners}),o.jsx("div",{className:"bullet-desc",children:e.findNearbyPartnersDesc})]})]}),o.jsxs("div",{className:"bullet-item",children:[o.jsx("div",{className:"bullet-icon-wrapper",children:o.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/bullet_faster_badge.png",alt:"Faster Pickups"})}),o.jsxs("div",{className:"bullet-text",children:[o.jsx("div",{className:"bullet-title",children:e.fasterPickups}),o.jsx("div",{className:"bullet-desc",children:e.fasterPickupsDesc})]})]}),o.jsxs("div",{className:"bullet-item",children:[o.jsx("div",{className:"bullet-icon-wrapper",children:o.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/bullet_secure_badge.png",alt:"Secure & Private"})}),o.jsxs("div",{className:"bullet-text",children:[o.jsx("div",{className:"bullet-title",children:e.securePrivate}),o.jsx("div",{className:"bullet-desc",children:e.securePrivateDesc})]})]})]})]}),o.jsxs("div",{className:"location-actions",children:[o.jsxs("button",{className:"primary-button loc-primary-btn",onClick:t,children:[o.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/current_location_clean.png",alt:"Current Location",className:"btn-icon-img"}),o.jsx("span",{children:e.useCurrentLocation})]}),o.jsxs("button",{className:"secondary-button loc-secondary-btn",onClick:t,children:[o.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/search_location_clean.png",alt:"Search Location",className:"btn-icon-img"}),o.jsx("span",{children:e.searchLocationManually})]})]}),o.jsx("style",{children:`
        .location-screen {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px 20px 24px 20px;
          height: 100%;
          background-color: var(--surface-warm);
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
      `})]})}function dp({t:e,onNext:t,onBack:n}){return o.jsxs("div",{className:"notification-screen page-fade-enter",children:[o.jsx("div",{className:"top-nav-bar",children:n&&o.jsx("button",{className:"back-arrow-btn",onClick:n,"aria-label":"Go Back",children:o.jsx(vl,{size:20,color:"#1C522D"})})}),o.jsx("div",{className:"notification-hero-container",children:o.jsx("img",{src:"/assets/Kabadiwala_Connect_Notification_UI_Asset_Pack/illustrations/notification_permission_hero_transparent.png",alt:"Notification Permission Hero",className:"notification-hero-img"})}),o.jsxs("div",{className:"notification-content",children:[o.jsx("h1",{className:"notification-title",children:e.allowNotificationsTitle}),o.jsxs("div",{className:"notification-bullets-list",children:[o.jsxs("div",{className:"bullet-item",children:[o.jsx("div",{className:"bullet-icon-wrapper",children:o.jsx("img",{src:"/assets/Kabadiwala_Connect_Notification_UI_Asset_Pack/icons/notif_partner_badge.png",alt:"Partner Updates"})}),o.jsxs("div",{className:"bullet-text",children:[o.jsx("div",{className:"bullet-title",children:e.realtimePartnerUpdates}),o.jsx("div",{className:"bullet-desc",children:e.realtimePartnerUpdatesDesc})]})]}),o.jsxs("div",{className:"bullet-item",children:[o.jsx("div",{className:"bullet-icon-wrapper",children:o.jsx("img",{src:"/assets/Kabadiwala_Connect_Notification_UI_Asset_Pack/icons/notif_offers_badge.png",alt:"Offers & News"})}),o.jsxs("div",{className:"bullet-text",children:[o.jsx("div",{className:"bullet-title",children:e.offersAndNews}),o.jsx("div",{className:"bullet-desc",children:e.offersAndNewsDesc})]})]})]})]}),o.jsxs("div",{className:"notification-actions",children:[o.jsx("button",{className:"primary-button notif-primary-btn",onClick:t,children:o.jsx("span",{children:e.allowPermission})}),o.jsx("button",{className:"secondary-button notif-secondary-btn",onClick:t,children:o.jsx("span",{children:e.maybeLater})})]}),o.jsx("style",{children:`
        .notification-screen {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px 20px 24px 20px;
          height: 100%;
          background-color: var(--surface-warm);
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
      `})]})}function fp({t:e,user:t,currentLang:n}){const[r,l]=M.useState("home"),[i,a]=M.useState("Rohini, Delhi"),[s,u]=M.useState(!1),[d,m]=M.useState(null),[g,h]=M.useState(!1),[k,v]=M.useState(!0),[x,z]=M.useState(null),[f,c]=M.useState(0),[p,y]=M.useState(0),j=[{id:0,title:`Hassle-free
Scrap Collection`,subtitle:`Schedule your
pickup in seconds.`,btnText:"Request Pickup",image:"/assets/home/truck_hero.png",tag:"Verified Fleet"},{id:1,title:`Instant AI
Rate Discovery`,subtitle:`Scan circuit boards &
get fair market cash.`,btnText:"Scan Now",image:"/assets/home/icon_ewaste.png",tag:"AI Powered"},{id:2,title:`Highest Payout
Guaranteed`,subtitle:`CPCB authorized partners
with zero middlemen.`,btnText:"View Rates",image:"/assets/home/icon_sell_scrap.png",tag:"Best Rates"}],C=["🔥 Copper Wire surged to ₹420/kg in Delhi NCR","📈 PCB Motherboard Grade A buying at ₹340/kg","⚡ Lithium-Ion Battery scrap steady at ₹185/kg","✨ 14.5 kg e-waste recycled by Suresh today"],E=[{name:"Motherboards (Grade A)",category:"E-Waste",rate:"₹340 / kg",trend:"+4.5%",icon:"💻"},{name:"Copper Wiring (Clean)",category:"Metals",rate:"₹420 / kg",trend:"+2.1%",icon:"🔌"},{name:"Lithium-Ion Batteries",category:"Batteries",rate:"₹185 / kg",trend:"+1.2%",icon:"🔋"},{name:"Telecom & Server PCBs",category:"High Value",rate:"₹520 / kg",trend:"+6.8%",icon:"📡"},{name:"Mixed Mobile Scrap",category:"E-Waste",rate:"₹290 / kg",trend:"+0.5%",icon:"📱"},{name:"Aluminium Heatsinks",category:"Metals",rate:"₹145 / kg",trend:"-1.0%",icon:"⚙️"}],_=[{id:"BK-8821",partner:"EcoMet Recycling India",status:"Driver Arriving in 12 mins",material:"PCB & Electronic Scrap (14.5 kg)",estPayout:"₹4,640",time:"Today, 4:30 PM",active:!0},{id:"BK-8790",partner:"GreenTech Urban Processors",status:"Completed & Paid via UPI",material:"Copper Cable & Adapters (8.2 kg)",estPayout:"₹2,870",time:"Yesterday, 2:15 PM",active:!1}],U=["Rohini, Delhi","Andheri West, Mumbai","Koramangala, Bengaluru","Kothrud, Pune","Connaught Place, Delhi"];M.useEffect(()=>{const b=setInterval(()=>{c(fe=>(fe+1)%j.length)},4500);return()=>clearInterval(b)},[j.length]),M.useEffect(()=>{const b=setInterval(()=>{y(fe=>(fe+1)%C.length)},4e3);return()=>clearInterval(b)},[C.length]);const F=()=>{h(!0),v(!0),z(null),setTimeout(()=>{v(!1),z({detected:"Printed Circuit Board (Grade A) + Copper Core",confidence:"96.4%",weight:"12.8 kg",rate:"₹340 / kg",payout:"₹4,352"})},2200)};return o.jsxs("div",{className:"home-screen page-fade-enter",children:[o.jsxs("div",{className:"home-scroll-container",children:[o.jsxs("div",{className:"live-ticker-bar",children:[o.jsx("span",{className:"live-badge",children:"LIVE"}),o.jsx("div",{className:"ticker-text page-fade-enter",children:C[p]},p)]}),o.jsxs("div",{className:"home-header",children:[o.jsxs("div",{className:"header-top-row",children:[o.jsxs("div",{className:"brand-header-group",children:[o.jsx("div",{className:"logo-badge",children:o.jsx("img",{src:"/assets/home/logo_kc.png",alt:"KC Mark"})}),o.jsxs("div",{className:"brand-text-group",children:[o.jsxs("div",{className:"brand-title",children:[o.jsx("strong",{className:"bold-white",children:"Kabadiwala"}),o.jsx("span",{className:"light-green",children:" Connect"})]}),o.jsx("div",{className:"brand-tagline",children:"Cleaner today, greener tomorrow"})]})]}),o.jsxs("button",{className:"notif-btn ring-animation",onClick:()=>m("notifications"),"aria-label":"Notifications",children:[o.jsx(Hf,{size:19,color:"#FFFFFF"}),o.jsx("span",{className:"notif-dot pulse-dot"})]})]}),o.jsxs("div",{className:"greeting-row",children:[o.jsxs("div",{className:"user-greeting",children:[o.jsxs("h1",{children:["Hi, ",(t==null?void 0:t.name)||"Rakesh","!"]}),o.jsx("p",{children:"Ready to make a difference today?"})]}),o.jsxs("div",{className:"location-pill interactive-chip",onClick:()=>u(!s),children:[o.jsx(Ka,{size:13,color:"#FFFFFF"}),o.jsx("span",{children:i}),o.jsx(dc,{size:13,color:"#FFFFFF"})]})]}),s&&o.jsx("div",{className:"location-dropdown slide-down-enter",children:U.map(b=>o.jsxs("div",{className:`loc-item ${i===b?"active":""}`,onClick:()=>{a(b),u(!1)},children:[o.jsx(Ka,{size:14}),o.jsx("span",{children:b})]},b))})]}),r==="home"&&o.jsxs("div",{className:"home-body tab-content-fade",children:[o.jsxs("div",{className:"carousel-wrapper",children:[o.jsxs("div",{className:"hero-pickup-card animated-card",children:[o.jsx("span",{className:"card-top-tag",children:j[f].tag}),o.jsxs("div",{className:"hero-card-left",children:[o.jsx("h2",{className:"slide-title",children:j[f].title}),o.jsx("p",{className:"slide-sub",children:j[f].subtitle}),o.jsxs("button",{className:"request-pickup-btn elastic-button",onClick:()=>{f===1?F():f===2?l("rates"):m("pickup")},children:[o.jsx("span",{children:j[f].btnText}),o.jsx(cc,{size:16,color:"#1C522D",strokeWidth:2.5})]})]}),o.jsx("div",{className:"hero-card-right",children:o.jsx("img",{src:j[f].image,alt:"Feature Graphic",className:"truck-illustration float-animation"},f)})]}),o.jsx("div",{className:"carousel-dots",children:j.map((b,fe)=>o.jsx("span",{className:`dot ${f===fe?"active":""}`,onClick:()=>c(fe)},b.id))})]}),o.jsxs("div",{className:"hub-grid",children:[o.jsxs("div",{className:"grid-card card-mint hover-lift",onClick:()=>m("pickup"),children:[o.jsx("div",{className:"card-header-icon",children:o.jsx("img",{src:"/assets/home/icon_sell_scrap.png",alt:"Sell Scrap",className:"hub-icon-img"})}),o.jsxs("div",{className:"card-info",children:[o.jsx("h3",{children:"Sell Scrap"}),o.jsx("p",{children:"Get the best price"})]}),o.jsx("div",{className:"arrow-badge",children:o.jsx(qe,{size:15,color:"#1C522D"})})]}),o.jsxs("div",{className:"grid-card card-warm hover-lift",onClick:()=>F(),children:[o.jsx("div",{className:"card-header-icon",children:o.jsx("img",{src:"/assets/home/icon_ewaste.png",alt:"E-Waste Collection",className:"hub-icon-img"})}),o.jsxs("div",{className:"card-info",children:[o.jsxs("h3",{children:["E-Waste",o.jsx("br",{}),"Collection"]}),o.jsx("p",{children:"Pickup at your doorstep"})]}),o.jsx("div",{className:"arrow-badge",children:o.jsx(qe,{size:15,color:"#1C522D"})})]}),o.jsxs("div",{className:"grid-card card-warm hover-lift",onClick:()=>m("earnings"),children:[o.jsx("div",{className:"card-header-icon",children:o.jsx("img",{src:"/assets/home/icon_earnings.png",alt:"My Earnings",className:"hub-icon-img"})}),o.jsxs("div",{className:"card-info",children:[o.jsx("h3",{children:"My Earnings"}),o.jsx("p",{children:"Track your income"})]}),o.jsx("div",{className:"arrow-badge",children:o.jsx(qe,{size:15,color:"#1C522D"})})]}),o.jsxs("div",{className:"grid-card card-mint hover-lift",onClick:()=>m("history"),children:[o.jsx("div",{className:"card-header-icon",children:o.jsx("img",{src:"/assets/home/icon_history.png",alt:"View History",className:"hub-icon-img"})}),o.jsxs("div",{className:"card-info",children:[o.jsx("h3",{children:"View History"}),o.jsx("p",{children:"Track your activity"})]}),o.jsx("div",{className:"arrow-badge",children:o.jsx(qe,{size:15,color:"#1C522D"})})]})]}),o.jsxs("div",{className:"market-trends-card hover-lift",onClick:()=>l("rates"),children:[o.jsxs("div",{className:"mt-left",children:[o.jsx("div",{className:"mt-icon-wrapper pulse-soft",children:o.jsx("img",{src:"/assets/home/icon_trends.png",alt:"Market Trends",className:"trends-icon-img"})}),o.jsxs("div",{className:"mt-text",children:[o.jsx("h3",{children:"Market Trends"}),o.jsx("p",{children:"See what's in demand today"})]})]}),o.jsx("div",{className:"arrow-badge",children:o.jsx(qe,{size:15,color:"#1C522D"})})]})]}),r==="bookings"&&o.jsxs("div",{className:"home-body tab-content-fade",children:[o.jsxs("div",{className:"section-title-row",children:[o.jsx("h2",{children:"Active Bookings"}),o.jsx("span",{className:"count-pill",children:"2 Total"})]}),o.jsx("div",{className:"bookings-list",children:_.map(b=>o.jsxs("div",{className:`booking-card ${b.active?"active-bk":""}`,children:[o.jsxs("div",{className:"bk-header",children:[o.jsxs("div",{children:[o.jsx("span",{className:"bk-id",children:b.id}),o.jsx("h3",{className:"bk-partner",children:b.partner})]}),o.jsx("span",{className:`bk-status-tag ${b.active?"tag-live":"tag-done"}`,children:b.active?"● Driver En Route":"✓ Completed"})]}),o.jsxs("div",{className:"bk-body",children:[o.jsxs("div",{className:"bk-mat",children:["📦 ",b.material]}),o.jsxs("div",{className:"bk-time",children:["🕒 ",b.time]})]}),o.jsxs("div",{className:"bk-footer",children:[o.jsxs("div",{className:"bk-payout",children:[o.jsx("span",{children:"Estimated Payout:"}),o.jsx("strong",{children:b.estPayout})]}),b.active&&o.jsxs("button",{className:"call-driver-btn",onClick:()=>alert("Calling driver..."),children:[o.jsx(Jf,{size:14}),o.jsx("span",{children:"Call Driver"})]})]})]},b.id))})]}),r==="rates"&&o.jsxs("div",{className:"home-body tab-content-fade",children:[o.jsxs("div",{className:"rates-header-box",children:[o.jsx("h2",{children:"Live Scrap Rates"}),o.jsxs("p",{children:["Verified real-time CPCB market quotes for ",i]})]}),o.jsx("div",{className:"rates-table-list",children:E.map((b,fe)=>o.jsxs("div",{className:"rate-table-row hover-lift",children:[o.jsxs("div",{className:"rate-left",children:[o.jsx("span",{className:"rate-emoji",children:b.icon}),o.jsxs("div",{children:[o.jsx("h4",{children:b.name}),o.jsx("span",{className:"rate-cat-tag",children:b.category})]})]}),o.jsxs("div",{className:"rate-right",children:[o.jsx("div",{className:"rate-val",children:b.rate}),o.jsx("span",{className:`rate-trend ${b.trend.startsWith("+")?"up":"down"}`,children:b.trend})]})]},fe))})]}),r==="profile"&&o.jsxs("div",{className:"home-body tab-content-fade",children:[o.jsxs("div",{className:"profile-card",children:[o.jsxs("div",{className:"profile-top",children:[o.jsx("div",{className:"prof-avatar",children:o.jsx("span",{children:"RK"})}),o.jsxs("div",{className:"prof-info",children:[o.jsx("h3",{children:(t==null?void 0:t.name)||"Rakesh Kumar"}),o.jsxs("p",{children:["📱 +91 ",(t==null?void 0:t.phone)||"9876543210"]}),o.jsxs("span",{className:"cpcb-verified-badge",children:[o.jsx(ep,{size:13,color:"#1C522D"}),o.jsx("span",{children:"CPCB Level-1 Collector"})]})]})]}),o.jsxs("div",{className:"profile-stats-grid",children:[o.jsxs("div",{className:"p-stat",children:[o.jsx("span",{children:"Total Recycled"}),o.jsx("strong",{children:"148.5 kg"})]}),o.jsxs("div",{className:"p-stat",children:[o.jsx("span",{children:"Lifetime Earnings"}),o.jsx("strong",{children:"₹42,850"})]})]})]}),o.jsxs("div",{className:"profile-actions-list",children:[o.jsxs("div",{className:"p-action-row",onClick:()=>m("earnings"),children:[o.jsx("span",{children:"💰 Payment Ledger & Bank Accounts"}),o.jsx(qe,{size:16,color:"#8C938E"})]}),o.jsxs("div",{className:"p-action-row",onClick:()=>m("history"),children:[o.jsx("span",{children:"📄 Handover Certificates (Form-2)"}),o.jsx(qe,{size:16,color:"#8C938E"})]}),o.jsxs("div",{className:"p-action-row",onClick:()=>u(!0),children:[o.jsx("span",{children:"📍 Preferred Service Zone"}),o.jsx(qe,{size:16,color:"#8C938E"})]})]})]})]}),g&&o.jsxs("div",{className:"camera-overlay page-fade-enter",children:[o.jsxs("div",{className:"camera-header",children:[o.jsxs("div",{className:"cam-title-group",children:[o.jsx(Ga,{size:18,color:"#FFC837"}),o.jsx("span",{children:"AI Material Valuation Scan"})]}),o.jsx("button",{className:"close-cam-btn",onClick:()=>h(!1),children:o.jsx(Xa,{size:20,color:"#FFFFFF"})})]}),o.jsxs("div",{className:"cam-viewfinder",children:[o.jsxs("div",{className:"scanner-target-box",children:[o.jsx("div",{className:"corner top-left"}),o.jsx("div",{className:"corner top-right"}),o.jsx("div",{className:"corner bottom-left"}),o.jsx("div",{className:"corner bottom-right"}),k&&o.jsx("div",{className:"cam-laser-line"}),o.jsx("img",{src:"/assets/home/truck_hero.png",alt:"Scanning E-Waste",className:"cam-feed-preview"}),x&&o.jsx("div",{className:"detection-bounding-box page-fade-enter",children:o.jsx("span",{className:"det-tag",children:"PCB Grade A • 96.4% Match"})})]}),k?o.jsxs("div",{className:"cam-status-pill",children:[o.jsx(qf,{size:14,className:"spin-fast"}),o.jsx("span",{children:"Analyzing precious metal composition..."})]}):x&&o.jsxs("div",{className:"scan-summary-drawer slide-up-enter",children:[o.jsx("div",{className:"drawer-handle"}),o.jsxs("div",{className:"drawer-header",children:[o.jsx(Kf,{size:24,color:"#538A46"}),o.jsxs("div",{children:[o.jsx("h3",{children:"AI Valuation Confirmed"}),o.jsx("p",{children:x.detected})]})]}),o.jsxs("div",{className:"drawer-stats",children:[o.jsxs("div",{className:"d-box",children:[o.jsx("span",{children:"Estimated Weight"}),o.jsx("strong",{children:x.weight})]}),o.jsxs("div",{className:"d-box",children:[o.jsx("span",{children:"Market Rate"}),o.jsx("strong",{children:x.rate})]})]}),o.jsxs("div",{className:"d-total-banner",children:[o.jsxs("div",{children:[o.jsx("span",{children:"Total Payout Guarantee"}),o.jsx("h2",{children:x.payout})]}),o.jsx("button",{className:"confirm-deal-btn",onClick:()=>{h(!1),m("pickup")},children:"Schedule Pickup"})]})]})]})]}),d&&o.jsx("div",{className:"modal-backdrop",onClick:()=>m(null),children:o.jsxs("div",{className:"modal-card slide-up-enter",onClick:b=>b.stopPropagation(),children:[o.jsx("div",{className:"drawer-handle"}),o.jsxs("div",{className:"modal-header",children:[o.jsxs("h3",{children:[d==="pickup"&&"Schedule Scrap Pickup",d==="earnings"&&"My Earnings Ledger",d==="history"&&"Pickup & Transaction History",d==="trends"&&"Today's Market Rates",d==="notifications"&&"Notifications"]}),o.jsx("button",{className:"close-modal-btn",onClick:()=>m(null),children:o.jsx(Xa,{size:18,color:"#1C522D"})})]}),o.jsxs("div",{className:"modal-body",children:[d==="pickup"&&o.jsxs("div",{className:"pickup-form-demo",children:[o.jsxs("p",{className:"modal-sub",children:["Select e-waste category & schedule doorstep pickup in ",o.jsx("strong",{children:i}),":"]}),o.jsxs("div",{className:"cat-pills",children:[o.jsx("span",{className:"cat-pill active",children:"Computer PCBs"}),o.jsx("span",{className:"cat-pill",children:"Mobile Phones"}),o.jsx("span",{className:"cat-pill",children:"Batteries"}),o.jsx("span",{className:"cat-pill",children:"Copper Cable"})]}),o.jsxs("div",{className:"rate-estimate-box",children:[o.jsx("span",{children:"Estimated Instant Payout:"}),o.jsx("strong",{children:"₹320 / kg (Direct UPI / Cash)"})]}),o.jsx("button",{className:"primary-button",onClick:()=>{alert(`Doorstep pickup scheduled successfully for ${i}!`),m(null)},children:"Confirm Doorstep Pickup"})]}),d==="earnings"&&o.jsxs("div",{className:"earnings-demo",children:[o.jsxs("div",{className:"total-earnings-box",children:[o.jsx("span",{children:"Total Earnings This Month"}),o.jsx("h2",{children:"₹18,450"}),o.jsx("span",{className:"sub-stat",children:"100% Verified CPCB Handover Credits"})]}),o.jsxs("div",{className:"history-item",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"PCB Scrap Lot #982"}),o.jsx("div",{className:"h-date",children:"Today • Rohini Hub"})]}),o.jsx("span",{className:"h-amt",children:"+₹4,640"})]}),o.jsxs("div",{className:"history-item",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Copper Scrap Lot #971"}),o.jsx("div",{className:"h-date",children:"2 days ago • UPI Credit"})]}),o.jsx("span",{className:"h-amt",children:"+₹3,810"})]})]}),d==="history"&&o.jsxs("div",{className:"history-demo",children:[o.jsxs("div",{className:"history-item",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"EcoMet Recycling Pvt Ltd"}),o.jsx("div",{className:"h-date",children:"Lot #KC-8842 • 14.5 kg"})]}),o.jsx("span",{className:"h-amt",children:"✓ Handed Over"})]}),o.jsxs("div",{className:"history-item",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"JNARDDC Verified Facility"}),o.jsx("div",{className:"h-date",children:"Lot #KC-8710 • 22.0 kg"})]}),o.jsx("span",{className:"h-amt",children:"✓ Handed Over"})]})]}),d==="notifications"&&o.jsxs("div",{className:"notif-demo",children:[o.jsxs("div",{className:"notif-card",children:[o.jsx(lp,{size:20,color:"#538A46"}),o.jsxs("div",{children:[o.jsx("strong",{children:"Driver On The Way!"}),o.jsx("p",{children:"EcoMet Pickup partner is 1.2 km away from your location."}),o.jsx("span",{className:"notif-time",children:"Just now"})]})]}),o.jsxs("div",{className:"notif-card",children:[o.jsx(Ga,{size:20,color:"#FFC837"}),o.jsxs("div",{children:[o.jsx("strong",{children:"Rate Increase Alert"}),o.jsx("p",{children:"Copper wiring rate jumped +₹15/kg today."}),o.jsx("span",{className:"notif-time",children:"2h ago"})]})]})]})]})]})}),o.jsxs("div",{className:"home-nav-bar",children:[o.jsxs("button",{className:`nav-tab ${r==="home"?"active":""}`,onClick:()=>l("home"),children:[o.jsx(Gf,{size:22,className:"tab-icon"}),o.jsx("span",{children:"Home"})]}),o.jsxs("button",{className:`nav-tab ${r==="bookings"?"active":""}`,onClick:()=>l("bookings"),children:[o.jsx(Wf,{size:22,className:"tab-icon"}),o.jsx("span",{children:"Bookings"})]}),o.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:F,"aria-label":"Camera Scan",children:[o.jsx(Qf,{size:26,color:"#FFFFFF"}),o.jsx("span",{className:"fab-label",children:"Camera"})]}),o.jsxs("button",{className:`nav-tab ${r==="rates"?"active":""}`,onClick:()=>l("rates"),children:[o.jsx(tp,{size:22,className:"tab-icon"}),o.jsx("span",{children:"Rates"})]}),o.jsxs("button",{className:`nav-tab ${r==="profile"?"active":""}`,onClick:()=>l("profile"),children:[o.jsx(np,{size:22,className:"tab-icon"}),o.jsx("span",{children:"Profile"})]})]}),o.jsx("style",{children:`
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
      `})]})}function pp(){const[e,t]=M.useState("splash"),[n,r]=M.useState("en"),[l,i]=M.useState({name:"Rakesh",phone:"9876543210"}),a=Qa[n]||Qa.en,s=()=>t("language"),u=()=>t("auth"),d=h=>{i(k=>({...k,...h})),t("location")},m=()=>t("notification"),g=()=>t("home");return o.jsxs(op,{currentScreen:e,setCurrentScreen:t,currentLang:n,setLanguage:r,children:[e==="splash"&&o.jsx(ap,{t:a,onNext:s}),e==="language"&&o.jsx(sp,{t:a,currentLang:n,setLanguage:r,onNext:u,onBack:()=>t("splash")}),e==="auth"&&o.jsx(up,{t:a,onSkip:()=>t("location"),onAuthenticated:d,onBack:()=>t("language")}),e==="location"&&o.jsx(cp,{t:a,onNext:m,onBack:()=>t("auth")}),e==="notification"&&o.jsx(dp,{t:a,onNext:g,onBack:()=>t("location")}),e==="home"&&o.jsx(fp,{t:a,user:l,currentLang:n})]})}Yl.createRoot(document.getElementById("root")).render(o.jsx(Pc.StrictMode,{children:o.jsx(pp,{})}));
