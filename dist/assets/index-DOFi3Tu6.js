(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function dc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qs={exports:{}},tl={},bs={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=Symbol.for("react.element"),fc=Symbol.for("react.portal"),pc=Symbol.for("react.fragment"),hc=Symbol.for("react.strict_mode"),mc=Symbol.for("react.profiler"),gc=Symbol.for("react.provider"),vc=Symbol.for("react.context"),yc=Symbol.for("react.forward_ref"),xc=Symbol.for("react.suspense"),wc=Symbol.for("react.memo"),kc=Symbol.for("react.lazy"),Fo=Symbol.iterator;function Sc(e){return e===null||typeof e!="object"?null:(e=Fo&&e[Fo]||e["@@iterator"],typeof e=="function"?e:null)}var ea={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ta=Object.assign,na={};function on(e,t,n){this.props=e,this.context=t,this.refs=na,this.updater=n||ea}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ra(){}ra.prototype=on.prototype;function Bi(e,t,n){this.props=e,this.context=t,this.refs=na,this.updater=n||ea}var Vi=Bi.prototype=new ra;Vi.constructor=Bi;ta(Vi,on.prototype);Vi.isPureReactComponent=!0;var Ao=Array.isArray,la=Object.prototype.hasOwnProperty,$i={current:null},ia={key:!0,ref:!0,__self:!0,__source:!0};function oa(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)la.call(t,r)&&!ia.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),d=0;d<s;d++)a[d]=arguments[d+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Xn,type:e,key:i,ref:o,props:l,_owner:$i.current}}function Cc(e,t){return{$$typeof:Xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xn}function Nc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Uo=/\/+/g;function wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Nc(""+e.key):t.toString(36)}function xr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Xn:case fc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+wl(o,0):r,Ao(l)?(n="",e!=null&&(n=e.replace(Uo,"$&/")+"/"),xr(l,t,n,"",function(d){return d})):l!=null&&(Hi(l)&&(l=Cc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Uo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Ao(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+wl(i,s);o+=xr(i,t,n,a,l)}else if(a=Sc(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+wl(i,s++),o+=xr(i,t,n,a,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function nr(e,t,n){if(e==null)return e;var r=[],l=0;return xr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function jc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},wr={transition:null},Ec={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:wr,ReactCurrentOwner:$i};function sa(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!Hi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=on;L.Fragment=pc;L.Profiler=mc;L.PureComponent=Bi;L.StrictMode=hc;L.Suspense=xc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ec;L.act=sa;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ta({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=$i.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)la.call(t,a)&&!ia.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var d=0;d<a;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Xn,type:e.type,key:l,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:vc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gc,_context:e},e.Consumer=e};L.createElement=oa;L.createFactory=function(e){var t=oa.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:yc,render:e}};L.isValidElement=Hi;L.lazy=function(e){return{$$typeof:kc,_payload:{_status:-1,_result:e},_init:jc}};L.memo=function(e,t){return{$$typeof:wc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};L.unstable_act=sa;L.useCallback=function(e,t){return ue.current.useCallback(e,t)};L.useContext=function(e){return ue.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};L.useEffect=function(e,t){return ue.current.useEffect(e,t)};L.useId=function(){return ue.current.useId()};L.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ue.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};L.useRef=function(e){return ue.current.useRef(e)};L.useState=function(e){return ue.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ue.current.useTransition()};L.version="18.3.1";bs.exports=L;var q=bs.exports;const _c=dc(q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pc=q,zc=Symbol.for("react.element"),Lc=Symbol.for("react.fragment"),Tc=Object.prototype.hasOwnProperty,Rc=Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mc={key:!0,ref:!0,__self:!0,__source:!0};function aa(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Tc.call(t,r)&&!Mc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:zc,type:e,key:i,ref:o,props:l,_owner:Rc.current}}tl.Fragment=Lc;tl.jsx=aa;tl.jsxs=aa;qs.exports=tl;var u=qs.exports,Kl={},ua={exports:{}},we={},ca={exports:{}},da={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,P){var z=N.length;N.push(P);e:for(;0<z;){var W=z-1>>>1,Z=N[W];if(0<l(Z,P))N[W]=P,N[z]=Z,z=W;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var P=N[0],z=N.pop();if(z!==P){N[0]=z;e:for(var W=0,Z=N.length,er=Z>>>1;W<er;){var vt=2*(W+1)-1,xl=N[vt],yt=vt+1,tr=N[yt];if(0>l(xl,z))yt<Z&&0>l(tr,xl)?(N[W]=tr,N[yt]=z,W=yt):(N[W]=xl,N[vt]=z,W=vt);else if(yt<Z&&0>l(tr,z))N[W]=tr,N[yt]=z,W=yt;else break e}}return P}function l(N,P){var z=N.sortIndex-P.sortIndex;return z!==0?z:N.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],d=[],g=1,m=null,h=3,k=!1,x=!1,w=!1,T=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var P=n(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=N)r(d),P.sortIndex=P.expirationTime,t(a,P);else break;P=n(d)}}function v(N){if(w=!1,p(N),!x)if(n(a)!==null)x=!0,vl(C);else{var P=n(d);P!==null&&yl(v,P.startTime-N)}}function C(N,P){x=!1,w&&(w=!1,f(_),_=-1),k=!0;var z=h;try{for(p(P),m=n(a);m!==null&&(!(m.expirationTime>P)||N&&!Pe());){var W=m.callback;if(typeof W=="function"){m.callback=null,h=m.priorityLevel;var Z=W(m.expirationTime<=P);P=e.unstable_now(),typeof Z=="function"?m.callback=Z:m===n(a)&&r(a),p(P)}else r(a);m=n(a)}if(m!==null)var er=!0;else{var vt=n(d);vt!==null&&yl(v,vt.startTime-P),er=!1}return er}finally{m=null,h=z,k=!1}}var j=!1,E=null,_=-1,H=5,R=-1;function Pe(){return!(e.unstable_now()-R<H)}function un(){if(E!==null){var N=e.unstable_now();R=N;var P=!0;try{P=E(!0,N)}finally{P?cn():(j=!1,E=null)}}else j=!1}var cn;if(typeof c=="function")cn=function(){c(un)};else if(typeof MessageChannel<"u"){var Io=new MessageChannel,cc=Io.port2;Io.port1.onmessage=un,cn=function(){cc.postMessage(null)}}else cn=function(){T(un,0)};function vl(N){E=N,j||(j=!0,cn())}function yl(N,P){_=T(function(){N(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){x||k||(x=!0,vl(C))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var z=h;h=P;try{return N()}finally{h=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,P){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=h;h=N;try{return P()}finally{h=z}},e.unstable_scheduleCallback=function(N,P,z){var W=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?W+z:W):z=W,N){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=z+Z,N={id:g++,callback:P,priorityLevel:N,startTime:z,expirationTime:Z,sortIndex:-1},z>W?(N.sortIndex=z,t(d,N),n(a)===null&&N===n(d)&&(w?(f(_),_=-1):w=!0,yl(v,z-W))):(N.sortIndex=Z,t(a,N),x||k||(x=!0,vl(C))),N},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(N){var P=h;return function(){var z=h;h=P;try{return N.apply(this,arguments)}finally{h=z}}}})(da);ca.exports=da;var Dc=ca.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oc=q,xe=Dc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fa=new Set,Rn={};function Tt(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){for(Rn[e]=t,e=0;e<t.length;e++)fa.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,Ic=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bo={},Vo={};function Fc(e){return Gl.call(Vo,e)?!0:Gl.call(Bo,e)?!1:Ic.test(e)?Vo[e]=!0:(Bo[e]=!0,!1)}function Ac(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Uc(e,t,n,r){if(t===null||typeof t>"u"||Ac(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wi=/[\-:]([a-z])/g;function Qi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wi,Qi);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wi,Qi);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wi,Qi);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ki(e,t,n,r){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Uc(t,n,l,r)&&(n=null),r||l===null?Fc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=Oc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Dt=Symbol.for("react.portal"),Ot=Symbol.for("react.fragment"),Gi=Symbol.for("react.strict_mode"),Yl=Symbol.for("react.profiler"),pa=Symbol.for("react.provider"),ha=Symbol.for("react.context"),Yi=Symbol.for("react.forward_ref"),Xl=Symbol.for("react.suspense"),Zl=Symbol.for("react.suspense_list"),Xi=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),ma=Symbol.for("react.offscreen"),$o=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=$o&&e[$o]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,kl;function xn(e){if(kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kl=t&&t[1]||""}return`
`+kl+e}var Sl=!1;function Cl(e,t){if(!e||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xn(e):""}function Bc(e){switch(e.tag){case 5:return xn(e.type);case 16:return xn("Lazy");case 13:return xn("Suspense");case 19:return xn("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function Jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ot:return"Fragment";case Dt:return"Portal";case Yl:return"Profiler";case Gi:return"StrictMode";case Xl:return"Suspense";case Zl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ha:return(e.displayName||"Context")+".Consumer";case pa:return(e._context.displayName||"Context")+".Provider";case Yi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xi:return t=e.displayName||null,t!==null?t:Jl(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return Jl(e(t))}catch{}}return null}function Vc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jl(t);case 8:return t===Gi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ga(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $c(e){var t=ga(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lr(e){e._valueTracker||(e._valueTracker=$c(e))}function va(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ga(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ql(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ho(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ya(e,t){t=t.checked,t!=null&&Ki(e,"checked",t,!1)}function bl(e,t){ya(e,t);var n=ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ei(e,t.type,n):t.hasOwnProperty("defaultValue")&&ei(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ei(e,t,n){(t!=="number"||Tr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Kt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ti(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(wn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ft(n)}}function xa(e,t){var n=ft(t.value),r=ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ko(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ni(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,ka=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hc=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){Hc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cn[t]=Cn[e]})});function Sa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+t).trim():t+"px"}function Ca(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Sa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Wc=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ri(e,t){if(t){if(Wc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function li(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ii=null;function Zi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oi=null,Gt=null,Yt=null;function Go(e){if(e=qn(e)){if(typeof oi!="function")throw Error(y(280));var t=e.stateNode;t&&(t=ol(t),oi(e.stateNode,e.type,t))}}function Na(e){Gt?Yt?Yt.push(e):Yt=[e]:Gt=e}function ja(){if(Gt){var e=Gt,t=Yt;if(Yt=Gt=null,Go(e),t)for(e=0;e<t.length;e++)Go(t[e])}}function Ea(e,t){return e(t)}function _a(){}var Nl=!1;function Pa(e,t,n){if(Nl)return e(t,n);Nl=!0;try{return Ea(e,t,n)}finally{Nl=!1,(Gt!==null||Yt!==null)&&(_a(),ja())}}function Dn(e,t){var n=e.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var si=!1;if(Ke)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){si=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{si=!1}function Qc(e,t,n,r,l,i,o,s,a){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var Nn=!1,Rr=null,Mr=!1,ai=null,Kc={onError:function(e){Nn=!0,Rr=e}};function Gc(e,t,n,r,l,i,o,s,a){Nn=!1,Rr=null,Qc.apply(Kc,arguments)}function Yc(e,t,n,r,l,i,o,s,a){if(Gc.apply(this,arguments),Nn){if(Nn){var d=Rr;Nn=!1,Rr=null}else throw Error(y(198));Mr||(Mr=!0,ai=d)}}function Rt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function za(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yo(e){if(Rt(e)!==e)throw Error(y(188))}function Xc(e){var t=e.alternate;if(!t){if(t=Rt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Yo(l),e;if(i===r)return Yo(l),t;i=i.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function La(e){return e=Xc(e),e!==null?Ta(e):null}function Ta(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ta(e);if(t!==null)return t;e=e.sibling}return null}var Ra=xe.unstable_scheduleCallback,Xo=xe.unstable_cancelCallback,Zc=xe.unstable_shouldYield,Jc=xe.unstable_requestPaint,Q=xe.unstable_now,qc=xe.unstable_getCurrentPriorityLevel,Ji=xe.unstable_ImmediatePriority,Ma=xe.unstable_UserBlockingPriority,Dr=xe.unstable_NormalPriority,bc=xe.unstable_LowPriority,Da=xe.unstable_IdlePriority,nl=null,Ue=null;function ed(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:rd,td=Math.log,nd=Math.LN2;function rd(e){return e>>>=0,e===0?32:31-(td(e)/nd|0)|0}var or=64,sr=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Or(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=kn(s):(i&=o,i!==0&&(r=kn(i)))}else o=n&~l,o!==0?r=kn(o):i!==0&&(r=kn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Me(t),l=1<<n,r|=e[n],t&=~l;return r}function ld(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function id(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Me(i),s=1<<o,a=l[o];a===-1?(!(s&n)||s&r)&&(l[o]=ld(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Oa(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function jl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function od(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Me(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function qi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var D=0;function Ia(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fa,bi,Aa,Ua,Ba,ci=!1,ar=[],lt=null,it=null,ot=null,On=new Map,In=new Map,et=[],sd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zo(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":it=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(t.pointerId)}}function pn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=qn(t),t!==null&&bi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function ad(e,t,n,r,l){switch(t){case"focusin":return lt=pn(lt,e,t,n,r,l),!0;case"dragenter":return it=pn(it,e,t,n,r,l),!0;case"mouseover":return ot=pn(ot,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return On.set(i,pn(On.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,In.set(i,pn(In.get(i)||null,e,t,n,r,l)),!0}return!1}function Va(e){var t=kt(e.target);if(t!==null){var n=Rt(t);if(n!==null){if(t=n.tag,t===13){if(t=za(n),t!==null){e.blockedOn=t,Ba(e.priority,function(){Aa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=di(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ii=r,n.target.dispatchEvent(r),ii=null}else return t=qn(n),t!==null&&bi(t),e.blockedOn=n,!1;t.shift()}return!0}function Jo(e,t,n){kr(e)&&n.delete(t)}function ud(){ci=!1,lt!==null&&kr(lt)&&(lt=null),it!==null&&kr(it)&&(it=null),ot!==null&&kr(ot)&&(ot=null),On.forEach(Jo),In.forEach(Jo)}function hn(e,t){e.blockedOn===t&&(e.blockedOn=null,ci||(ci=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,ud)))}function Fn(e){function t(l){return hn(l,e)}if(0<ar.length){hn(ar[0],e);for(var n=1;n<ar.length;n++){var r=ar[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&hn(lt,e),it!==null&&hn(it,e),ot!==null&&hn(ot,e),On.forEach(t),In.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Va(n),n.blockedOn===null&&et.shift()}var Xt=Ze.ReactCurrentBatchConfig,Ir=!0;function cd(e,t,n,r){var l=D,i=Xt.transition;Xt.transition=null;try{D=1,eo(e,t,n,r)}finally{D=l,Xt.transition=i}}function dd(e,t,n,r){var l=D,i=Xt.transition;Xt.transition=null;try{D=4,eo(e,t,n,r)}finally{D=l,Xt.transition=i}}function eo(e,t,n,r){if(Ir){var l=di(e,t,n,r);if(l===null)Ol(e,t,r,Fr,n),Zo(e,r);else if(ad(l,e,t,n,r))r.stopPropagation();else if(Zo(e,r),t&4&&-1<sd.indexOf(e)){for(;l!==null;){var i=qn(l);if(i!==null&&Fa(i),i=di(e,t,n,r),i===null&&Ol(e,t,r,Fr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ol(e,t,r,null,n)}}var Fr=null;function di(e,t,n,r){if(Fr=null,e=Zi(r),e=kt(e),e!==null)if(t=Rt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=za(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fr=e,null}function $a(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qc()){case Ji:return 1;case Ma:return 4;case Dr:case bc:return 16;case Da:return 536870912;default:return 16}default:return 16}}var nt=null,to=null,Sr=null;function Ha(){if(Sr)return Sr;var e,t=to,n=t.length,r,l="value"in nt?nt.value:nt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Sr=l.slice(e,1<r?1-r:void 0)}function Cr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function qo(){return!1}function ke(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ur:qo,this.isPropagationStopped=qo,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},no=ke(sn),Jn=V({},sn,{view:0,detail:0}),fd=ke(Jn),El,_l,mn,rl=V({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(El=e.screenX-mn.screenX,_l=e.screenY-mn.screenY):_l=El=0,mn=e),El)},movementY:function(e){return"movementY"in e?e.movementY:_l}}),bo=ke(rl),pd=V({},rl,{dataTransfer:0}),hd=ke(pd),md=V({},Jn,{relatedTarget:0}),Pl=ke(md),gd=V({},sn,{animationName:0,elapsedTime:0,pseudoElement:0}),vd=ke(gd),yd=V({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xd=ke(yd),wd=V({},sn,{data:0}),es=ke(wd),kd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cd[e])?!!t[e]:!1}function ro(){return Nd}var jd=V({},Jn,{key:function(e){if(e.key){var t=kd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ro,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ed=ke(jd),_d=V({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ts=ke(_d),Pd=V({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ro}),zd=ke(Pd),Ld=V({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Td=ke(Ld),Rd=V({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Md=ke(Rd),Dd=[9,13,27,32],lo=Ke&&"CompositionEvent"in window,jn=null;Ke&&"documentMode"in document&&(jn=document.documentMode);var Od=Ke&&"TextEvent"in window&&!jn,Wa=Ke&&(!lo||jn&&8<jn&&11>=jn),ns=" ",rs=!1;function Qa(e,t){switch(e){case"keyup":return Dd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ka(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var It=!1;function Id(e,t){switch(e){case"compositionend":return Ka(t);case"keypress":return t.which!==32?null:(rs=!0,ns);case"textInput":return e=t.data,e===ns&&rs?null:e;default:return null}}function Fd(e,t){if(It)return e==="compositionend"||!lo&&Qa(e,t)?(e=Ha(),Sr=to=nt=null,It=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wa&&t.locale!=="ko"?null:t.data;default:return null}}var Ad={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ad[e.type]:t==="textarea"}function Ga(e,t,n,r){Na(r),t=Ar(t,"onChange"),0<t.length&&(n=new no("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var En=null,An=null;function Ud(e){lu(e,0)}function ll(e){var t=Ut(e);if(va(t))return e}function Bd(e,t){if(e==="change")return t}var Ya=!1;if(Ke){var zl;if(Ke){var Ll="oninput"in document;if(!Ll){var is=document.createElement("div");is.setAttribute("oninput","return;"),Ll=typeof is.oninput=="function"}zl=Ll}else zl=!1;Ya=zl&&(!document.documentMode||9<document.documentMode)}function os(){En&&(En.detachEvent("onpropertychange",Xa),An=En=null)}function Xa(e){if(e.propertyName==="value"&&ll(An)){var t=[];Ga(t,An,e,Zi(e)),Pa(Ud,t)}}function Vd(e,t,n){e==="focusin"?(os(),En=t,An=n,En.attachEvent("onpropertychange",Xa)):e==="focusout"&&os()}function $d(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(An)}function Hd(e,t){if(e==="click")return ll(t)}function Wd(e,t){if(e==="input"||e==="change")return ll(t)}function Qd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:Qd;function Un(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Gl.call(t,l)||!Oe(e[l],t[l]))return!1}return!0}function ss(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function as(e,t){var n=ss(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ss(n)}}function Za(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Za(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ja(){for(var e=window,t=Tr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tr(e.document)}return t}function io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kd(e){var t=Ja(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Za(n.ownerDocument.documentElement,n)){if(r!==null&&io(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=as(n,i);var o=as(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gd=Ke&&"documentMode"in document&&11>=document.documentMode,Ft=null,fi=null,_n=null,pi=!1;function us(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pi||Ft==null||Ft!==Tr(r)||(r=Ft,"selectionStart"in r&&io(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_n&&Un(_n,r)||(_n=r,r=Ar(fi,"onSelect"),0<r.length&&(t=new no("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ft)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var At={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Tl={},qa={};Ke&&(qa=document.createElement("div").style,"AnimationEvent"in window||(delete At.animationend.animation,delete At.animationiteration.animation,delete At.animationstart.animation),"TransitionEvent"in window||delete At.transitionend.transition);function il(e){if(Tl[e])return Tl[e];if(!At[e])return e;var t=At[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qa)return Tl[e]=t[n];return e}var ba=il("animationend"),eu=il("animationiteration"),tu=il("animationstart"),nu=il("transitionend"),ru=new Map,cs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){ru.set(e,t),Tt(t,[e])}for(var Rl=0;Rl<cs.length;Rl++){var Ml=cs[Rl],Yd=Ml.toLowerCase(),Xd=Ml[0].toUpperCase()+Ml.slice(1);ht(Yd,"on"+Xd)}ht(ba,"onAnimationEnd");ht(eu,"onAnimationIteration");ht(tu,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(nu,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function ds(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yc(r,t,void 0,e),e.currentTarget=null}function lu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,d=s.currentTarget;if(s=s.listener,a!==i&&l.isPropagationStopped())break e;ds(l,s,d),i=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,d=s.currentTarget,s=s.listener,a!==i&&l.isPropagationStopped())break e;ds(l,s,d),i=a}}}if(Mr)throw e=ai,Mr=!1,ai=null,e}function I(e,t){var n=t[yi];n===void 0&&(n=t[yi]=new Set);var r=e+"__bubble";n.has(r)||(iu(t,e,2,!1),n.add(r))}function Dl(e,t,n){var r=0;t&&(r|=4),iu(n,e,r,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[dr]){e[dr]=!0,fa.forEach(function(n){n!=="selectionchange"&&(Zd.has(n)||Dl(n,!1,e),Dl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,Dl("selectionchange",!1,t))}}function iu(e,t,n,r){switch($a(t)){case 1:var l=cd;break;case 4:l=dd;break;default:l=eo}n=l.bind(null,t,n,e),l=void 0,!si||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ol(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;s!==null;){if(o=kt(s),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Pa(function(){var d=i,g=Zi(n),m=[];e:{var h=ru.get(e);if(h!==void 0){var k=no,x=e;switch(e){case"keypress":if(Cr(n)===0)break e;case"keydown":case"keyup":k=Ed;break;case"focusin":x="focus",k=Pl;break;case"focusout":x="blur",k=Pl;break;case"beforeblur":case"afterblur":k=Pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=bo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=hd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=zd;break;case ba:case eu:case tu:k=vd;break;case nu:k=Td;break;case"scroll":k=fd;break;case"wheel":k=Md;break;case"copy":case"cut":case"paste":k=xd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ts}var w=(t&4)!==0,T=!w&&e==="scroll",f=w?h!==null?h+"Capture":null:h;w=[];for(var c=d,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Dn(c,f),v!=null&&w.push(Vn(c,v,p)))),T)break;c=c.return}0<w.length&&(h=new k(h,x,null,n,g),m.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==ii&&(x=n.relatedTarget||n.fromElement)&&(kt(x)||x[Ge]))break e;if((k||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,k?(x=n.relatedTarget||n.toElement,k=d,x=x?kt(x):null,x!==null&&(T=Rt(x),x!==T||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=d),k!==x)){if(w=bo,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=ts,v="onPointerLeave",f="onPointerEnter",c="pointer"),T=k==null?h:Ut(k),p=x==null?h:Ut(x),h=new w(v,c+"leave",k,n,g),h.target=T,h.relatedTarget=p,v=null,kt(g)===d&&(w=new w(f,c+"enter",x,n,g),w.target=p,w.relatedTarget=T,v=w),T=v,k&&x)t:{for(w=k,f=x,c=0,p=w;p;p=Mt(p))c++;for(p=0,v=f;v;v=Mt(v))p++;for(;0<c-p;)w=Mt(w),c--;for(;0<p-c;)f=Mt(f),p--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break t;w=Mt(w),f=Mt(f)}w=null}else w=null;k!==null&&fs(m,h,k,w,!1),x!==null&&T!==null&&fs(m,T,x,w,!0)}}e:{if(h=d?Ut(d):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var C=Bd;else if(ls(h))if(Ya)C=Wd;else{C=$d;var j=Vd}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Hd);if(C&&(C=C(e,d))){Ga(m,C,n,g);break e}j&&j(e,h,d),e==="focusout"&&(j=h._wrapperState)&&j.controlled&&h.type==="number"&&ei(h,"number",h.value)}switch(j=d?Ut(d):window,e){case"focusin":(ls(j)||j.contentEditable==="true")&&(Ft=j,fi=d,_n=null);break;case"focusout":_n=fi=Ft=null;break;case"mousedown":pi=!0;break;case"contextmenu":case"mouseup":case"dragend":pi=!1,us(m,n,g);break;case"selectionchange":if(Gd)break;case"keydown":case"keyup":us(m,n,g)}var E;if(lo)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else It?Qa(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Wa&&n.locale!=="ko"&&(It||_!=="onCompositionStart"?_==="onCompositionEnd"&&It&&(E=Ha()):(nt=g,to="value"in nt?nt.value:nt.textContent,It=!0)),j=Ar(d,_),0<j.length&&(_=new es(_,e,null,n,g),m.push({event:_,listeners:j}),E?_.data=E:(E=Ka(n),E!==null&&(_.data=E)))),(E=Od?Id(e,n):Fd(e,n))&&(d=Ar(d,"onBeforeInput"),0<d.length&&(g=new es("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:d}),g.data=E))}lu(m,t)})}function Vn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ar(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Dn(e,n),i!=null&&r.unshift(Vn(e,i,l)),i=Dn(e,t),i!=null&&r.push(Vn(e,i,l))),e=e.return}return r}function Mt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fs(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,d=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&d!==null&&(s=d,l?(a=Dn(n,i),a!=null&&o.unshift(Vn(n,a,s))):l||(a=Dn(n,i),a!=null&&o.push(Vn(n,a,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Jd=/\r\n?/g,qd=/\u0000|\uFFFD/g;function ps(e){return(typeof e=="string"?e:""+e).replace(Jd,`
`).replace(qd,"")}function fr(e,t,n){if(t=ps(t),ps(e)!==t&&n)throw Error(y(425))}function Ur(){}var hi=null,mi=null;function gi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vi=typeof setTimeout=="function"?setTimeout:void 0,bd=typeof clearTimeout=="function"?clearTimeout:void 0,hs=typeof Promise=="function"?Promise:void 0,ef=typeof queueMicrotask=="function"?queueMicrotask:typeof hs<"u"?function(e){return hs.resolve(null).then(e).catch(tf)}:vi;function tf(e){setTimeout(function(){throw e})}function Il(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Fn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Fn(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ms(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),Ae="__reactFiber$"+an,$n="__reactProps$"+an,Ge="__reactContainer$"+an,yi="__reactEvents$"+an,nf="__reactListeners$"+an,rf="__reactHandles$"+an;function kt(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ge]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ms(e);e!==null;){if(n=e[Ae])return n;e=ms(e)}return t}e=n,n=e.parentNode}return null}function qn(e){return e=e[Ae]||e[Ge],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function ol(e){return e[$n]||null}var xi=[],Bt=-1;function mt(e){return{current:e}}function F(e){0>Bt||(e.current=xi[Bt],xi[Bt]=null,Bt--)}function O(e,t){Bt++,xi[Bt]=e.current,e.current=t}var pt={},oe=mt(pt),pe=mt(!1),Et=pt;function bt(e,t){var n=e.type.contextTypes;if(!n)return pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function Br(){F(pe),F(oe)}function gs(e,t,n){if(oe.current!==pt)throw Error(y(168));O(oe,t),O(pe,n)}function ou(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Vc(e)||"Unknown",l));return V({},n,r)}function Vr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,Et=oe.current,O(oe,e),O(pe,pe.current),!0}function vs(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=ou(e,t,Et),r.__reactInternalMemoizedMergedChildContext=e,F(pe),F(oe),O(oe,e)):F(pe),O(pe,n)}var $e=null,sl=!1,Fl=!1;function su(e){$e===null?$e=[e]:$e.push(e)}function lf(e){sl=!0,su(e)}function gt(){if(!Fl&&$e!==null){Fl=!0;var e=0,t=D;try{var n=$e;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$e=null,sl=!1}catch(l){throw $e!==null&&($e=$e.slice(e+1)),Ra(Ji,gt),l}finally{D=t,Fl=!1}}return null}var Vt=[],$t=0,$r=null,Hr=0,Se=[],Ce=0,_t=null,He=1,We="";function xt(e,t){Vt[$t++]=Hr,Vt[$t++]=$r,$r=e,Hr=t}function au(e,t,n){Se[Ce++]=He,Se[Ce++]=We,Se[Ce++]=_t,_t=e;var r=He;e=We;var l=32-Me(r)-1;r&=~(1<<l),n+=1;var i=32-Me(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,He=1<<32-Me(t)+l|n<<l|r,We=i+e}else He=1<<i|n<<l|r,We=e}function oo(e){e.return!==null&&(xt(e,1),au(e,1,0))}function so(e){for(;e===$r;)$r=Vt[--$t],Vt[$t]=null,Hr=Vt[--$t],Vt[$t]=null;for(;e===_t;)_t=Se[--Ce],Se[Ce]=null,We=Se[--Ce],Se[Ce]=null,He=Se[--Ce],Se[Ce]=null}var ye=null,ve=null,A=!1,Re=null;function uu(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ys(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,ve=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_t!==null?{id:He,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,ve=null,!0):!1;default:return!1}}function wi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ki(e){if(A){var t=ve;if(t){var n=t;if(!ys(e,t)){if(wi(e))throw Error(y(418));t=st(n.nextSibling);var r=ye;t&&ys(e,t)?uu(r,n):(e.flags=e.flags&-4097|2,A=!1,ye=e)}}else{if(wi(e))throw Error(y(418));e.flags=e.flags&-4097|2,A=!1,ye=e}}}function xs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function pr(e){if(e!==ye)return!1;if(!A)return xs(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gi(e.type,e.memoizedProps)),t&&(t=ve)){if(wi(e))throw cu(),Error(y(418));for(;t;)uu(e,t),t=st(t.nextSibling)}if(xs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=st(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ye?st(e.stateNode.nextSibling):null;return!0}function cu(){for(var e=ve;e;)e=st(e.nextSibling)}function en(){ve=ye=null,A=!1}function ao(e){Re===null?Re=[e]:Re.push(e)}var of=Ze.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function hr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ws(e){var t=e._init;return t(e._payload)}function du(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=dt(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,v){return c===null||c.tag!==6?(c=Wl(p,f.mode,v),c.return=f,c):(c=l(c,p),c.return=f,c)}function a(f,c,p,v){var C=p.type;return C===Ot?g(f,c,p.props.children,v,p.key):c!==null&&(c.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===qe&&ws(C)===c.type)?(v=l(c,p.props),v.ref=gn(f,c,p),v.return=f,v):(v=Lr(p.type,p.key,p.props,null,f.mode,v),v.ref=gn(f,c,p),v.return=f,v)}function d(f,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Ql(p,f.mode,v),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function g(f,c,p,v,C){return c===null||c.tag!==7?(c=jt(p,f.mode,v,C),c.return=f,c):(c=l(c,p),c.return=f,c)}function m(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Wl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case rr:return p=Lr(c.type,c.key,c.props,null,f.mode,p),p.ref=gn(f,null,c),p.return=f,p;case Dt:return c=Ql(c,f.mode,p),c.return=f,c;case qe:var v=c._init;return m(f,v(c._payload),p)}if(wn(c)||dn(c))return c=jt(c,f.mode,p,null),c.return=f,c;hr(f,c)}return null}function h(f,c,p,v){var C=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:s(f,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:return p.key===C?a(f,c,p,v):null;case Dt:return p.key===C?d(f,c,p,v):null;case qe:return C=p._init,h(f,c,C(p._payload),v)}if(wn(p)||dn(p))return C!==null?null:g(f,c,p,v,null);hr(f,p)}return null}function k(f,c,p,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,s(c,f,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case rr:return f=f.get(v.key===null?p:v.key)||null,a(c,f,v,C);case Dt:return f=f.get(v.key===null?p:v.key)||null,d(c,f,v,C);case qe:var j=v._init;return k(f,c,p,j(v._payload),C)}if(wn(v)||dn(v))return f=f.get(p)||null,g(c,f,v,C,null);hr(c,v)}return null}function x(f,c,p,v){for(var C=null,j=null,E=c,_=c=0,H=null;E!==null&&_<p.length;_++){E.index>_?(H=E,E=null):H=E.sibling;var R=h(f,E,p[_],v);if(R===null){E===null&&(E=H);break}e&&E&&R.alternate===null&&t(f,E),c=i(R,c,_),j===null?C=R:j.sibling=R,j=R,E=H}if(_===p.length)return n(f,E),A&&xt(f,_),C;if(E===null){for(;_<p.length;_++)E=m(f,p[_],v),E!==null&&(c=i(E,c,_),j===null?C=E:j.sibling=E,j=E);return A&&xt(f,_),C}for(E=r(f,E);_<p.length;_++)H=k(E,f,_,p[_],v),H!==null&&(e&&H.alternate!==null&&E.delete(H.key===null?_:H.key),c=i(H,c,_),j===null?C=H:j.sibling=H,j=H);return e&&E.forEach(function(Pe){return t(f,Pe)}),A&&xt(f,_),C}function w(f,c,p,v){var C=dn(p);if(typeof C!="function")throw Error(y(150));if(p=C.call(p),p==null)throw Error(y(151));for(var j=C=null,E=c,_=c=0,H=null,R=p.next();E!==null&&!R.done;_++,R=p.next()){E.index>_?(H=E,E=null):H=E.sibling;var Pe=h(f,E,R.value,v);if(Pe===null){E===null&&(E=H);break}e&&E&&Pe.alternate===null&&t(f,E),c=i(Pe,c,_),j===null?C=Pe:j.sibling=Pe,j=Pe,E=H}if(R.done)return n(f,E),A&&xt(f,_),C;if(E===null){for(;!R.done;_++,R=p.next())R=m(f,R.value,v),R!==null&&(c=i(R,c,_),j===null?C=R:j.sibling=R,j=R);return A&&xt(f,_),C}for(E=r(f,E);!R.done;_++,R=p.next())R=k(E,f,_,R.value,v),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?_:R.key),c=i(R,c,_),j===null?C=R:j.sibling=R,j=R);return e&&E.forEach(function(un){return t(f,un)}),A&&xt(f,_),C}function T(f,c,p,v){if(typeof p=="object"&&p!==null&&p.type===Ot&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:e:{for(var C=p.key,j=c;j!==null;){if(j.key===C){if(C=p.type,C===Ot){if(j.tag===7){n(f,j.sibling),c=l(j,p.props.children),c.return=f,f=c;break e}}else if(j.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===qe&&ws(C)===j.type){n(f,j.sibling),c=l(j,p.props),c.ref=gn(f,j,p),c.return=f,f=c;break e}n(f,j);break}else t(f,j);j=j.sibling}p.type===Ot?(c=jt(p.props.children,f.mode,v,p.key),c.return=f,f=c):(v=Lr(p.type,p.key,p.props,null,f.mode,v),v.ref=gn(f,c,p),v.return=f,f=v)}return o(f);case Dt:e:{for(j=p.key;c!==null;){if(c.key===j)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Ql(p,f.mode,v),c.return=f,f=c}return o(f);case qe:return j=p._init,T(f,c,j(p._payload),v)}if(wn(p))return x(f,c,p,v);if(dn(p))return w(f,c,p,v);hr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=Wl(p,f.mode,v),c.return=f,f=c),o(f)):n(f,c)}return T}var tn=du(!0),fu=du(!1),Wr=mt(null),Qr=null,Ht=null,uo=null;function co(){uo=Ht=Qr=null}function fo(e){var t=Wr.current;F(Wr),e._currentValue=t}function Si(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zt(e,t){Qr=e,uo=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(uo!==e)if(e={context:e,memoizedValue:t,next:null},Ht===null){if(Qr===null)throw Error(y(308));Ht=e,Qr.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return t}var St=null;function po(e){St===null?St=[e]:St.push(e)}function pu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,po(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var be=!1;function ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ye(e,n)}return l=r.interleaved,l===null?(t.next=t,po(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ye(e,n)}function Nr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qi(e,n)}}function ks(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Kr(e,t,n,r){var l=e.updateQueue;be=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,d=a.next;a.next=null,o===null?i=d:o.next=d,o=a;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==o&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=a))}if(i!==null){var m=l.baseState;o=0,g=d=a=null,s=i;do{var h=s.lane,k=s.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,w=s;switch(h=t,k=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){m=x.call(k,m,h);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,h=typeof x=="function"?x.call(k,m,h):x,h==null)break e;m=V({},m,h);break e;case 2:be=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else k={eventTime:k,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=k,a=m):g=g.next=k,o|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(g===null&&(a=m),l.baseState=a,l.firstBaseUpdate=d,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);zt|=o,e.lanes=o,e.memoizedState=m}}function Ss(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var bn={},Be=mt(bn),Hn=mt(bn),Wn=mt(bn);function Ct(e){if(e===bn)throw Error(y(174));return e}function mo(e,t){switch(O(Wn,t),O(Hn,e),O(Be,bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ni(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ni(t,e)}F(Be),O(Be,t)}function nn(){F(Be),F(Hn),F(Wn)}function mu(e){Ct(Wn.current);var t=Ct(Be.current),n=ni(t,e.type);t!==n&&(O(Hn,e),O(Be,n))}function go(e){Hn.current===e&&(F(Be),F(Hn))}var U=mt(0);function Gr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Al=[];function vo(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var jr=Ze.ReactCurrentDispatcher,Ul=Ze.ReactCurrentBatchConfig,Pt=0,B=null,G=null,J=null,Yr=!1,Pn=!1,Qn=0,sf=0;function re(){throw Error(y(321))}function yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function xo(e,t,n,r,l,i){if(Pt=i,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,jr.current=e===null||e.memoizedState===null?df:ff,e=n(r,l),Pn){i=0;do{if(Pn=!1,Qn=0,25<=i)throw Error(y(301));i+=1,J=G=null,t.updateQueue=null,jr.current=pf,e=n(r,l)}while(Pn)}if(jr.current=Xr,t=G!==null&&G.next!==null,Pt=0,J=G=B=null,Yr=!1,t)throw Error(y(300));return e}function wo(){var e=Qn!==0;return Qn=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?B.memoizedState=J=e:J=J.next=e,J}function _e(){if(G===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=J===null?B.memoizedState:J.next;if(t!==null)J=t,G=e;else{if(e===null)throw Error(y(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},J===null?B.memoizedState=J=e:J=J.next=e}return J}function Kn(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=_e(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=G,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,a=null,d=i;do{var g=d.lane;if((Pt&g)===g)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(s=a=m,o=r):a=a.next=m,B.lanes|=g,zt|=g}d=d.next}while(d!==null&&d!==i);a===null?o=r:a.next=s,Oe(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,B.lanes|=i,zt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vl(e){var t=_e(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Oe(i,t.memoizedState)||(fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function gu(){}function vu(e,t){var n=B,r=_e(),l=t(),i=!Oe(r.memoizedState,l);if(i&&(r.memoizedState=l,fe=!0),r=r.queue,ko(wu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Gn(9,xu.bind(null,n,r,l,t),void 0,null),b===null)throw Error(y(349));Pt&30||yu(n,t,l)}return l}function yu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xu(e,t,n,r){t.value=n,t.getSnapshot=r,ku(t)&&Su(e)}function wu(e,t,n){return n(function(){ku(t)&&Su(e)})}function ku(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function Su(e){var t=Ye(e,1);t!==null&&De(t,e,1,-1)}function Cs(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:e},t.queue=e,e=e.dispatch=cf.bind(null,B,e),[t.memoizedState,e]}function Gn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Cu(){return _e().memoizedState}function Er(e,t,n,r){var l=Fe();B.flags|=e,l.memoizedState=Gn(1|t,n,void 0,r===void 0?null:r)}function al(e,t,n,r){var l=_e();r=r===void 0?null:r;var i=void 0;if(G!==null){var o=G.memoizedState;if(i=o.destroy,r!==null&&yo(r,o.deps)){l.memoizedState=Gn(t,n,i,r);return}}B.flags|=e,l.memoizedState=Gn(1|t,n,i,r)}function Ns(e,t){return Er(8390656,8,e,t)}function ko(e,t){return al(2048,8,e,t)}function Nu(e,t){return al(4,2,e,t)}function ju(e,t){return al(4,4,e,t)}function Eu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _u(e,t,n){return n=n!=null?n.concat([e]):null,al(4,4,Eu.bind(null,t,e),n)}function So(){}function Pu(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zu(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Lu(e,t,n){return Pt&21?(Oe(n,t)||(n=Oa(),B.lanes|=n,zt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function af(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{D=n,Ul.transition=r}}function Tu(){return _e().memoizedState}function uf(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ru(e))Mu(t,n);else if(n=pu(e,t,n,r),n!==null){var l=ae();De(n,e,r,l),Du(n,t,r)}}function cf(e,t,n){var r=ct(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ru(e))Mu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Oe(s,o)){var a=t.interleaved;a===null?(l.next=l,po(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=pu(e,t,l,r),n!==null&&(l=ae(),De(n,e,r,l),Du(n,t,r))}}function Ru(e){var t=e.alternate;return e===B||t!==null&&t===B}function Mu(e,t){Pn=Yr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Du(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qi(e,n)}}var Xr={readContext:Ee,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},df={readContext:Ee,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Ns,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Er(4194308,4,Eu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Er(4194308,4,e,t)},useInsertionEffect:function(e,t){return Er(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=uf.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:Cs,useDebugValue:So,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Cs(!1),t=e[0];return e=af.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,l=Fe();if(A){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),b===null)throw Error(y(349));Pt&30||yu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ns(wu.bind(null,r,i,e),[e]),r.flags|=2048,Gn(9,xu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Fe(),t=b.identifierPrefix;if(A){var n=We,r=He;n=(r&~(1<<32-Me(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ff={readContext:Ee,useCallback:Pu,useContext:Ee,useEffect:ko,useImperativeHandle:_u,useInsertionEffect:Nu,useLayoutEffect:ju,useMemo:zu,useReducer:Bl,useRef:Cu,useState:function(){return Bl(Kn)},useDebugValue:So,useDeferredValue:function(e){var t=_e();return Lu(t,G.memoizedState,e)},useTransition:function(){var e=Bl(Kn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:gu,useSyncExternalStore:vu,useId:Tu,unstable_isNewReconciler:!1},pf={readContext:Ee,useCallback:Pu,useContext:Ee,useEffect:ko,useImperativeHandle:_u,useInsertionEffect:Nu,useLayoutEffect:ju,useMemo:zu,useReducer:Vl,useRef:Cu,useState:function(){return Vl(Kn)},useDebugValue:So,useDeferredValue:function(e){var t=_e();return G===null?t.memoizedState=e:Lu(t,G.memoizedState,e)},useTransition:function(){var e=Vl(Kn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:gu,useSyncExternalStore:vu,useId:Tu,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ci(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ul={isMounted:function(e){return(e=e._reactInternals)?Rt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ct(e),i=Qe(r,l);i.payload=t,n!=null&&(i.callback=n),t=at(e,i,l),t!==null&&(De(t,e,l,r),Nr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ct(e),i=Qe(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=at(e,i,l),t!==null&&(De(t,e,l,r),Nr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=ct(e),l=Qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=at(e,l,r),t!==null&&(De(t,e,r,n),Nr(t,e,r))}};function js(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(l,i):!0}function Ou(e,t,n){var r=!1,l=pt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ee(i):(l=he(t)?Et:oe.current,r=t.contextTypes,i=(r=r!=null)?bt(e,l):pt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ul,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Es(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ul.enqueueReplaceState(t,t.state,null)}function Ni(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ho(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ee(i):(i=he(t)?Et:oe.current,l.context=bt(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ci(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ul.enqueueReplaceState(l,l.state,null),Kr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=Bc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function $l(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ji(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hf=typeof WeakMap=="function"?WeakMap:Map;function Iu(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jr||(Jr=!0,Oi=r),ji(e,t)},n}function Fu(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){ji(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ji(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function _s(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Pf.bind(null,e,t,n),t.then(e,e))}function Ps(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zs(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,at(n,t,1))),n.lanes|=1),e)}var mf=Ze.ReactCurrentOwner,fe=!1;function se(e,t,n,r){t.child=e===null?fu(t,null,n,r):tn(t,e.child,n,r)}function Ls(e,t,n,r,l){n=n.render;var i=t.ref;return Zt(t,l),r=xo(e,t,n,r,i,l),n=wo(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(A&&n&&oo(t),t.flags|=1,se(e,t,r,l),t.child)}function Ts(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Lo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Au(e,t,i,r,l)):(e=Lr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(o,r)&&e.ref===t.ref)return Xe(e,t,l)}return t.flags|=1,e=dt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Au(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Un(i,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Xe(e,t,l)}return Ei(e,t,n,r,l)}function Uu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Qt,ge),ge|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(Qt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,O(Qt,ge),ge|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,O(Qt,ge),ge|=r;return se(e,t,l,n),t.child}function Bu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ei(e,t,n,r,l){var i=he(n)?Et:oe.current;return i=bt(t,i),Zt(t,l),n=xo(e,t,n,r,i,l),r=wo(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(A&&r&&oo(t),t.flags|=1,se(e,t,n,l),t.child)}function Rs(e,t,n,r,l){if(he(n)){var i=!0;Vr(t)}else i=!1;if(Zt(t,l),t.stateNode===null)_r(e,t),Ou(t,n,r),Ni(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var a=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ee(d):(d=he(n)?Et:oe.current,d=bt(t,d));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==d)&&Es(t,o,r,d),be=!1;var h=t.memoizedState;o.state=h,Kr(t,r,o,l),a=t.memoizedState,s!==r||h!==a||pe.current||be?(typeof g=="function"&&(Ci(t,n,g,r),a=t.memoizedState),(s=be||js(t,n,s,r,h,a,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,hu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Le(t.type,s),o.props=d,m=t.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ee(a):(a=he(n)?Et:oe.current,a=bt(t,a));var k=n.getDerivedStateFromProps;(g=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==m||h!==a)&&Es(t,o,r,a),be=!1,h=t.memoizedState,o.state=h,Kr(t,r,o,l);var x=t.memoizedState;s!==m||h!==x||pe.current||be?(typeof k=="function"&&(Ci(t,n,k,r),x=t.memoizedState),(d=be||js(t,n,d,r,h,x,a)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=a,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return _i(e,t,n,r,i,l)}function _i(e,t,n,r,l,i){Bu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&vs(t,n,!1),Xe(e,t,i);r=t.stateNode,mf.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=tn(t,e.child,null,i),t.child=tn(t,null,s,i)):se(e,t,s,i),t.memoizedState=r.state,l&&vs(t,n,!0),t.child}function Vu(e){var t=e.stateNode;t.pendingContext?gs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gs(e,t.context,!1),mo(e,t.containerInfo)}function Ms(e,t,n,r,l){return en(),ao(l),t.flags|=256,se(e,t,n,r),t.child}var Pi={dehydrated:null,treeContext:null,retryLane:0};function zi(e){return{baseLanes:e,cachePool:null,transitions:null}}function $u(e,t,n){var r=t.pendingProps,l=U.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O(U,l&1),e===null)return ki(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=fl(o,r,0,null),e=jt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=zi(n),t.memoizedState=Pi,e):Co(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return gf(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=dt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=dt(s,i):(i=jt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?zi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Pi,r}return i=e.child,e=i.sibling,r=dt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Co(e,t){return t=fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mr(e,t,n,r){return r!==null&&ao(r),tn(t,e.child,null,n),e=Co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=$l(Error(y(422))),mr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=fl({mode:"visible",children:r.children},l,0,null),i=jt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&tn(t,e.child,null,o),t.child.memoizedState=zi(o),t.memoizedState=Pi,i);if(!(t.mode&1))return mr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(y(419)),r=$l(i,r,void 0),mr(e,t,o,r)}if(s=(o&e.childLanes)!==0,fe||s){if(r=b,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ye(e,l),De(r,e,l,-1))}return zo(),r=$l(Error(y(421))),mr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=zf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ve=st(l.nextSibling),ye=t,A=!0,Re=null,e!==null&&(Se[Ce++]=He,Se[Ce++]=We,Se[Ce++]=_t,He=e.id,We=e.overflow,_t=t),t=Co(t,r.children),t.flags|=4096,t)}function Ds(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Si(e.return,t,n)}function Hl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Hu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(se(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ds(e,n,t);else if(e.tag===19)Ds(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Gr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Hl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Gr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Hl(t,!0,n,null,i);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _r(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vf(e,t,n){switch(t.tag){case 3:Vu(t),en();break;case 5:mu(t);break;case 1:he(t.type)&&Vr(t);break;case 4:mo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;O(Wr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?$u(e,t,n):(O(U,U.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);O(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Hu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Uu(e,t,n)}return Xe(e,t,n)}var Wu,Li,Qu,Ku;Wu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Li=function(){};Qu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ct(Be.current);var i=null;switch(n){case"input":l=ql(e,l),r=ql(e,r),i=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),i=[];break;case"textarea":l=ti(e,l),r=ti(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}ri(n,r);var o;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Rn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var a=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&a!==s&&(a!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(d,n)),n=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Rn.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&I("scroll",e),i||s===a||(i=[])):(i=i||[]).push(d,a))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Ku=function(e,t,n,r){n!==r&&(t.flags|=4)};function vn(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yf(e,t,n){var r=t.pendingProps;switch(so(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return he(t.type)&&Br(),le(t),null;case 3:return r=t.stateNode,nn(),F(pe),F(oe),vo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(Ai(Re),Re=null))),Li(e,t),le(t),null;case 5:go(t);var l=Ct(Wn.current);if(n=t.type,e!==null&&t.stateNode!=null)Qu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return le(t),null}if(e=Ct(Be.current),pr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ae]=t,r[$n]=i,e=(t.mode&1)!==0,n){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(l=0;l<Sn.length;l++)I(Sn[l],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":Ho(r,i),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},I("invalid",r);break;case"textarea":Qo(r,i),I("invalid",r)}ri(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),l=["children",""+s]):Rn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&I("scroll",r)}switch(n){case"input":lr(r),Wo(r,i,!0);break;case"textarea":lr(r),Ko(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ur)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ae]=t,e[$n]=r,Wu(e,t,!1,!1),t.stateNode=e;e:{switch(o=li(n,r),n){case"dialog":I("cancel",e),I("close",e),l=r;break;case"iframe":case"object":case"embed":I("load",e),l=r;break;case"video":case"audio":for(l=0;l<Sn.length;l++)I(Sn[l],e);l=r;break;case"source":I("error",e),l=r;break;case"img":case"image":case"link":I("error",e),I("load",e),l=r;break;case"details":I("toggle",e),l=r;break;case"input":Ho(e,r),l=ql(e,r),I("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),I("invalid",e);break;case"textarea":Qo(e,r),l=ti(e,r),I("invalid",e);break;default:l=r}ri(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Ca(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ka(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Mn(e,a):typeof a=="number"&&Mn(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Rn.hasOwnProperty(i)?a!=null&&i==="onScroll"&&I("scroll",e):a!=null&&Ki(e,i,a,o))}switch(n){case"input":lr(e),Wo(e,r,!1);break;case"textarea":lr(e),Ko(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Kt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)Ku(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Ct(Wn.current),Ct(Be.current),pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ae]=t,(i=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ae]=t,t.stateNode=r}return le(t),null;case 13:if(F(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&ve!==null&&t.mode&1&&!(t.flags&128))cu(),en(),t.flags|=98560,i=!1;else if(i=pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[Ae]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),i=!1}else Re!==null&&(Ai(Re),Re=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?Y===0&&(Y=3):zo())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return nn(),Li(e,t),e===null&&Bn(t.stateNode.containerInfo),le(t),null;case 10:return fo(t.type._context),le(t),null;case 17:return he(t.type)&&Br(),le(t),null;case 19:if(F(U),i=t.memoizedState,i===null)return le(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)vn(i,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Gr(e),o!==null){for(t.flags|=128,vn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(U,U.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>ln&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Gr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!A)return le(t),null}else 2*Q()-i.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=U.current,O(U,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Po(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function xf(e,t){switch(so(t),t.tag){case 1:return he(t.type)&&Br(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),F(pe),F(oe),vo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return go(t),null;case 13:if(F(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(U),null;case 4:return nn(),null;case 10:return fo(t.type._context),null;case 22:case 23:return Po(),null;case 24:return null;default:return null}}var gr=!1,ie=!1,wf=typeof WeakSet=="function"?WeakSet:Set,S=null;function Wt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$(e,t,r)}else n.current=null}function Ti(e,t,n){try{n()}catch(r){$(e,t,r)}}var Os=!1;function kf(e,t){if(hi=Ir,e=Ja(),io(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,d=0,g=0,m=e,h=null;t:for(;;){for(var k;m!==n||l!==0&&m.nodeType!==3||(s=o+l),m!==i||r!==0&&m.nodeType!==3||(a=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(k=m.firstChild)!==null;)h=m,m=k;for(;;){if(m===e)break t;if(h===n&&++d===l&&(s=o),h===i&&++g===r&&(a=o),(k=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=k}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(mi={focusedElem:e,selectionRange:n},Ir=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,T=x.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Le(t.type,w),T);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){$(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return x=Os,Os=!1,x}function zn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ti(t,n,i)}l=l.next}while(l!==r)}}function cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ri(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Gu(e){var t=e.alternate;t!==null&&(e.alternate=null,Gu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[$n],delete t[yi],delete t[nf],delete t[rf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yu(e){return e.tag===5||e.tag===3||e.tag===4}function Is(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Mi(e,t,n),e=e.sibling;e!==null;)Mi(e,t,n),e=e.sibling}function Di(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Di(e,t,n),e=e.sibling;e!==null;)Di(e,t,n),e=e.sibling}var ee=null,Te=!1;function Je(e,t,n){for(n=n.child;n!==null;)Xu(e,t,n),n=n.sibling}function Xu(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:ie||Wt(n,t);case 6:var r=ee,l=Te;ee=null,Je(e,t,n),ee=r,Te=l,ee!==null&&(Te?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Te?(e=ee,n=n.stateNode,e.nodeType===8?Il(e.parentNode,n):e.nodeType===1&&Il(e,n),Fn(e)):Il(ee,n.stateNode));break;case 4:r=ee,l=Te,ee=n.stateNode.containerInfo,Te=!0,Je(e,t,n),ee=r,Te=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ti(n,t,o),l=l.next}while(l!==r)}Je(e,t,n);break;case 1:if(!ie&&(Wt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){$(n,t,s)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,Je(e,t,n),ie=r):Je(e,t,n);break;default:Je(e,t,n)}}function Fs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wf),t.forEach(function(r){var l=Lf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,Te=!1;break e;case 3:ee=s.stateNode.containerInfo,Te=!0;break e;case 4:ee=s.stateNode.containerInfo,Te=!0;break e}s=s.return}if(ee===null)throw Error(y(160));Xu(i,o,l),ee=null,Te=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(d){$(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zu(t,e),t=t.sibling}function Zu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Ie(e),r&4){try{zn(3,e,e.return),cl(3,e)}catch(w){$(e,e.return,w)}try{zn(5,e,e.return)}catch(w){$(e,e.return,w)}}break;case 1:ze(t,e),Ie(e),r&512&&n!==null&&Wt(n,n.return);break;case 5:if(ze(t,e),Ie(e),r&512&&n!==null&&Wt(n,n.return),e.flags&32){var l=e.stateNode;try{Mn(l,"")}catch(w){$(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&ya(l,i),li(s,o);var d=li(s,i);for(o=0;o<a.length;o+=2){var g=a[o],m=a[o+1];g==="style"?Ca(l,m):g==="dangerouslySetInnerHTML"?ka(l,m):g==="children"?Mn(l,m):Ki(l,g,m,d)}switch(s){case"input":bl(l,i);break;case"textarea":xa(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?Kt(l,!!i.multiple,k,!1):h!==!!i.multiple&&(i.defaultValue!=null?Kt(l,!!i.multiple,i.defaultValue,!0):Kt(l,!!i.multiple,i.multiple?[]:"",!1))}l[$n]=i}catch(w){$(e,e.return,w)}}break;case 6:if(ze(t,e),Ie(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){$(e,e.return,w)}}break;case 3:if(ze(t,e),Ie(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fn(t.containerInfo)}catch(w){$(e,e.return,w)}break;case 4:ze(t,e),Ie(e);break;case 13:ze(t,e),Ie(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Eo=Q())),r&4&&Fs(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(d=ie)||g,ze(t,e),ie=d):ze(t,e),Ie(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(S=e,g=e.child;g!==null;){for(m=S=g;S!==null;){switch(h=S,k=h.child,h.tag){case 0:case 11:case 14:case 15:zn(4,h,h.return);break;case 1:Wt(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){$(r,n,w)}}break;case 5:Wt(h,h.return);break;case 22:if(h.memoizedState!==null){Us(m);continue}}k!==null?(k.return=h,S=k):Us(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{l=m.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,a=m.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Sa("display",o))}catch(w){$(e,e.return,w)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(w){$(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ze(t,e),Ie(e),r&4&&Fs(e);break;case 21:break;default:ze(t,e),Ie(e)}}function Ie(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yu(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Mn(l,""),r.flags&=-33);var i=Is(e);Di(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Is(e);Mi(e,s,o);break;default:throw Error(y(161))}}catch(a){$(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sf(e,t,n){S=e,Ju(e)}function Ju(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||gr;if(!o){var s=l.alternate,a=s!==null&&s.memoizedState!==null||ie;s=gr;var d=ie;if(gr=o,(ie=a)&&!d)for(S=l;S!==null;)o=S,a=o.child,o.tag===22&&o.memoizedState!==null?Bs(l):a!==null?(a.return=o,S=a):Bs(l);for(;i!==null;)S=i,Ju(i),i=i.sibling;S=l,gr=s,ie=d}As(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):As(e)}}function As(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||cl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ss(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ss(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&Fn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ie||t.flags&512&&Ri(t)}catch(h){$(t,t.return,h)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Us(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Bs(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cl(4,t)}catch(a){$(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){$(t,l,a)}}var i=t.return;try{Ri(t)}catch(a){$(t,i,a)}break;case 5:var o=t.return;try{Ri(t)}catch(a){$(t,o,a)}}}catch(a){$(t,t.return,a)}if(t===e){S=null;break}var s=t.sibling;if(s!==null){s.return=t.return,S=s;break}S=t.return}}var Cf=Math.ceil,Zr=Ze.ReactCurrentDispatcher,No=Ze.ReactCurrentOwner,je=Ze.ReactCurrentBatchConfig,M=0,b=null,K=null,te=0,ge=0,Qt=mt(0),Y=0,Yn=null,zt=0,dl=0,jo=0,Ln=null,de=null,Eo=0,ln=1/0,Ve=null,Jr=!1,Oi=null,ut=null,vr=!1,rt=null,qr=0,Tn=0,Ii=null,Pr=-1,zr=0;function ae(){return M&6?Q():Pr!==-1?Pr:Pr=Q()}function ct(e){return e.mode&1?M&2&&te!==0?te&-te:of.transition!==null?(zr===0&&(zr=Oa()),zr):(e=D,e!==0||(e=window.event,e=e===void 0?16:$a(e.type)),e):1}function De(e,t,n,r){if(50<Tn)throw Tn=0,Ii=null,Error(y(185));Zn(e,n,r),(!(M&2)||e!==b)&&(e===b&&(!(M&2)&&(dl|=n),Y===4&&tt(e,te)),me(e,r),n===1&&M===0&&!(t.mode&1)&&(ln=Q()+500,sl&&gt()))}function me(e,t){var n=e.callbackNode;id(e,t);var r=Or(e,e===b?te:0);if(r===0)n!==null&&Xo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xo(n),t===1)e.tag===0?lf(Vs.bind(null,e)):su(Vs.bind(null,e)),ef(function(){!(M&6)&&gt()}),n=null;else{switch(Ia(r)){case 1:n=Ji;break;case 4:n=Ma;break;case 16:n=Dr;break;case 536870912:n=Da;break;default:n=Dr}n=ic(n,qu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qu(e,t){if(Pr=-1,zr=0,M&6)throw Error(y(327));var n=e.callbackNode;if(Jt()&&e.callbackNode!==n)return null;var r=Or(e,e===b?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=br(e,r);else{t=r;var l=M;M|=2;var i=ec();(b!==e||te!==t)&&(Ve=null,ln=Q()+500,Nt(e,t));do try{Ef();break}catch(s){bu(e,s)}while(!0);co(),Zr.current=i,M=l,K!==null?t=0:(b=null,te=0,t=Y)}if(t!==0){if(t===2&&(l=ui(e),l!==0&&(r=l,t=Fi(e,l))),t===1)throw n=Yn,Nt(e,0),tt(e,r),me(e,Q()),n;if(t===6)tt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Nf(l)&&(t=br(e,r),t===2&&(i=ui(e),i!==0&&(r=i,t=Fi(e,i))),t===1))throw n=Yn,Nt(e,0),tt(e,r),me(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:wt(e,de,Ve);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=Eo+500-Q(),10<t)){if(Or(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=vi(wt.bind(null,e,de,Ve),t);break}wt(e,de,Ve);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Me(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cf(r/1960))-r,10<r){e.timeoutHandle=vi(wt.bind(null,e,de,Ve),r);break}wt(e,de,Ve);break;case 5:wt(e,de,Ve);break;default:throw Error(y(329))}}}return me(e,Q()),e.callbackNode===n?qu.bind(null,e):null}function Fi(e,t){var n=Ln;return e.current.memoizedState.isDehydrated&&(Nt(e,t).flags|=256),e=br(e,t),e!==2&&(t=de,de=n,t!==null&&Ai(t)),e}function Ai(e){de===null?de=e:de.push.apply(de,e)}function Nf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Oe(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~jo,t&=~dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Me(t),r=1<<n;e[n]=-1,t&=~r}}function Vs(e){if(M&6)throw Error(y(327));Jt();var t=Or(e,0);if(!(t&1))return me(e,Q()),null;var n=br(e,t);if(e.tag!==0&&n===2){var r=ui(e);r!==0&&(t=r,n=Fi(e,r))}if(n===1)throw n=Yn,Nt(e,0),tt(e,t),me(e,Q()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,de,Ve),me(e,Q()),null}function _o(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(ln=Q()+500,sl&&gt())}}function Lt(e){rt!==null&&rt.tag===0&&!(M&6)&&Jt();var t=M;M|=1;var n=je.transition,r=D;try{if(je.transition=null,D=1,e)return e()}finally{D=r,je.transition=n,M=t,!(M&6)&&gt()}}function Po(){ge=Qt.current,F(Qt)}function Nt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bd(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(so(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Br();break;case 3:nn(),F(pe),F(oe),vo();break;case 5:go(r);break;case 4:nn();break;case 13:F(U);break;case 19:F(U);break;case 10:fo(r.type._context);break;case 22:case 23:Po()}n=n.return}if(b=e,K=e=dt(e.current,null),te=ge=t,Y=0,Yn=null,jo=dl=zt=0,de=Ln=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}St=null}return e}function bu(e,t){do{var n=K;try{if(co(),jr.current=Xr,Yr){for(var r=B.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Yr=!1}if(Pt=0,J=G=B=null,Pn=!1,Qn=0,No.current=null,n===null||n.return===null){Y=1,Yn=t,K=null;break}e:{var i=e,o=n.return,s=n,a=t;if(t=te,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,g=s,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var k=Ps(o);if(k!==null){k.flags&=-257,zs(k,o,s,i,t),k.mode&1&&_s(i,d,t),t=k,a=d;var x=t.updateQueue;if(x===null){var w=new Set;w.add(a),t.updateQueue=w}else x.add(a);break e}else{if(!(t&1)){_s(i,d,t),zo();break e}a=Error(y(426))}}else if(A&&s.mode&1){var T=Ps(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),zs(T,o,s,i,t),ao(rn(a,s));break e}}i=a=rn(a,s),Y!==4&&(Y=2),Ln===null?Ln=[i]:Ln.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Iu(i,a,t);ks(i,f);break e;case 1:s=a;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ut===null||!ut.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Fu(i,s,t);ks(i,v);break e}}i=i.return}while(i!==null)}nc(n)}catch(C){t=C,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function ec(){var e=Zr.current;return Zr.current=Xr,e===null?Xr:e}function zo(){(Y===0||Y===3||Y===2)&&(Y=4),b===null||!(zt&268435455)&&!(dl&268435455)||tt(b,te)}function br(e,t){var n=M;M|=2;var r=ec();(b!==e||te!==t)&&(Ve=null,Nt(e,t));do try{jf();break}catch(l){bu(e,l)}while(!0);if(co(),M=n,Zr.current=r,K!==null)throw Error(y(261));return b=null,te=0,Y}function jf(){for(;K!==null;)tc(K)}function Ef(){for(;K!==null&&!Zc();)tc(K)}function tc(e){var t=lc(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?nc(e):K=t,No.current=null}function nc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xf(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,K=null;return}}else if(n=yf(n,t,ge),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function wt(e,t,n){var r=D,l=je.transition;try{je.transition=null,D=1,_f(e,t,n,r)}finally{je.transition=l,D=r}return null}function _f(e,t,n,r){do Jt();while(rt!==null);if(M&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(od(e,i),e===b&&(K=b=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vr||(vr=!0,ic(Dr,function(){return Jt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=je.transition,je.transition=null;var o=D;D=1;var s=M;M|=4,No.current=null,kf(e,n),Zu(n,e),Kd(mi),Ir=!!hi,mi=hi=null,e.current=n,Sf(n),Jc(),M=s,D=o,je.transition=i}else e.current=n;if(vr&&(vr=!1,rt=e,qr=l),i=e.pendingLanes,i===0&&(ut=null),ed(n.stateNode),me(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Jr)throw Jr=!1,e=Oi,Oi=null,e;return qr&1&&e.tag!==0&&Jt(),i=e.pendingLanes,i&1?e===Ii?Tn++:(Tn=0,Ii=e):Tn=0,gt(),null}function Jt(){if(rt!==null){var e=Ia(qr),t=je.transition,n=D;try{if(je.transition=null,D=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,qr=0,M&6)throw Error(y(331));var l=M;for(M|=4,S=e.current;S!==null;){var i=S,o=i.child;if(S.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var d=s[a];for(S=d;S!==null;){var g=S;switch(g.tag){case 0:case 11:case 15:zn(8,g,i)}var m=g.child;if(m!==null)m.return=g,S=m;else for(;S!==null;){g=S;var h=g.sibling,k=g.return;if(Gu(g),g===d){S=null;break}if(h!==null){h.return=k,S=h;break}S=k}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var T=w.sibling;w.sibling=null,w=T}while(w!==null)}}S=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,S=o;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:zn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,S=f;break e}S=i.return}}var c=e.current;for(S=c;S!==null;){o=S;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,S=p;else e:for(o=c;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:cl(9,s)}}catch(C){$(s,s.return,C)}if(s===o){S=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,S=v;break e}S=s.return}}if(M=l,gt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{D=n,je.transition=t}}return!1}function $s(e,t,n){t=rn(n,t),t=Iu(e,t,1),e=at(e,t,1),t=ae(),e!==null&&(Zn(e,1,t),me(e,t))}function $(e,t,n){if(e.tag===3)$s(e,e,n);else for(;t!==null;){if(t.tag===3){$s(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=rn(n,e),e=Fu(t,e,1),t=at(t,e,1),e=ae(),t!==null&&(Zn(t,1,e),me(t,e));break}}t=t.return}}function Pf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,b===e&&(te&n)===n&&(Y===4||Y===3&&(te&130023424)===te&&500>Q()-Eo?Nt(e,0):jo|=n),me(e,t)}function rc(e,t){t===0&&(e.mode&1?(t=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):t=1);var n=ae();e=Ye(e,t),e!==null&&(Zn(e,t,n),me(e,n))}function zf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rc(e,n)}function Lf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),rc(e,n)}var lc;lc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,vf(e,t,n);fe=!!(e.flags&131072)}else fe=!1,A&&t.flags&1048576&&au(t,Hr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_r(e,t),e=t.pendingProps;var l=bt(t,oe.current);Zt(t,n),l=xo(null,t,r,e,l,n);var i=wo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(i=!0,Vr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ho(t),l.updater=ul,t.stateNode=l,l._reactInternals=t,Ni(t,r,e,n),t=_i(null,t,r,!0,i,n)):(t.tag=0,A&&i&&oo(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_r(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Rf(r),e=Le(r,e),l){case 0:t=Ei(null,t,r,e,n);break e;case 1:t=Rs(null,t,r,e,n);break e;case 11:t=Ls(null,t,r,e,n);break e;case 14:t=Ts(null,t,r,Le(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Ei(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Rs(e,t,r,l,n);case 3:e:{if(Vu(t),e===null)throw Error(y(387));r=t.pendingProps,i=t.memoizedState,l=i.element,hu(e,t),Kr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=rn(Error(y(423)),t),t=Ms(e,t,r,n,l);break e}else if(r!==l){l=rn(Error(y(424)),t),t=Ms(e,t,r,n,l);break e}else for(ve=st(t.stateNode.containerInfo.firstChild),ye=t,A=!0,Re=null,n=fu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===l){t=Xe(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return mu(t),e===null&&ki(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,gi(r,l)?o=null:i!==null&&gi(r,i)&&(t.flags|=32),Bu(e,t),se(e,t,o,n),t.child;case 6:return e===null&&ki(t),null;case 13:return $u(e,t,n);case 4:return mo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Ls(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,O(Wr,r._currentValue),r._currentValue=o,i!==null)if(Oe(i.value,o)){if(i.children===l.children&&!pe.current){t=Xe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Qe(-1,n&-n),a.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?a.next=a:(a.next=g.next,g.next=a),d.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Si(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(y(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Si(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Zt(t,n),l=Ee(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),Ts(e,t,r,l,n);case 15:return Au(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),_r(e,t),t.tag=1,he(r)?(e=!0,Vr(t)):e=!1,Zt(t,n),Ou(t,r,l),Ni(t,r,l,n),_i(null,t,r,!0,e,n);case 19:return Hu(e,t,n);case 22:return Uu(e,t,n)}throw Error(y(156,t.tag))};function ic(e,t){return Ra(e,t)}function Tf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Tf(e,t,n,r)}function Lo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rf(e){if(typeof e=="function")return Lo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yi)return 11;if(e===Xi)return 14}return 2}function dt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Lo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ot:return jt(n.children,l,i,t);case Gi:o=8,l|=8;break;case Yl:return e=Ne(12,n,t,l|2),e.elementType=Yl,e.lanes=i,e;case Xl:return e=Ne(13,n,t,l),e.elementType=Xl,e.lanes=i,e;case Zl:return e=Ne(19,n,t,l),e.elementType=Zl,e.lanes=i,e;case ma:return fl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pa:o=10;break e;case ha:o=9;break e;case Yi:o=11;break e;case Xi:o=14;break e;case qe:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ne(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function jt(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function fl(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=ma,e.lanes=n,e.stateNode={isHidden:!1},e}function Wl(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Ql(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jl(0),this.expirationTimes=jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function To(e,t,n,r,l,i,o,s,a){return e=new Mf(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ne(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ho(i),e}function Df(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function oc(e){if(!e)return pt;e=e._reactInternals;e:{if(Rt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(he(n))return ou(e,n,t)}return t}function sc(e,t,n,r,l,i,o,s,a){return e=To(n,r,!0,e,l,i,o,s,a),e.context=oc(null),n=e.current,r=ae(),l=ct(n),i=Qe(r,l),i.callback=t??null,at(n,i,l),e.current.lanes=l,Zn(e,l,r),me(e,r),e}function pl(e,t,n,r){var l=t.current,i=ae(),o=ct(l);return n=oc(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=at(l,t,o),e!==null&&(De(e,l,o,i),Nr(e,l,o)),o}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ro(e,t){Hs(e,t),(e=e.alternate)&&Hs(e,t)}function Of(){return null}var ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mo(e){this._internalRoot=e}hl.prototype.render=Mo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));pl(e,t,null,null)};hl.prototype.unmount=Mo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){pl(null,e,null,null)}),t[Ge]=null}};function hl(e){this._internalRoot=e}hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ua();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&Va(e)}};function Do(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ws(){}function If(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=el(o);i.call(d)}}var o=sc(t,r,e,0,null,!1,!1,"",Ws);return e._reactRootContainer=o,e[Ge]=o.current,Bn(e.nodeType===8?e.parentNode:e),Lt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=el(a);s.call(d)}}var a=To(e,0,!1,null,null,!1,!1,"",Ws);return e._reactRootContainer=a,e[Ge]=a.current,Bn(e.nodeType===8?e.parentNode:e),Lt(function(){pl(t,a,n,r)}),a}function gl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var a=el(o);s.call(a)}}pl(t,o,e,l)}else o=If(n,t,e,l,r);return el(o)}Fa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(qi(t,n|1),me(t,Q()),!(M&6)&&(ln=Q()+500,gt()))}break;case 13:Lt(function(){var r=Ye(e,1);if(r!==null){var l=ae();De(r,e,1,l)}}),Ro(e,1)}};bi=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ae();De(t,e,134217728,n)}Ro(e,134217728)}};Aa=function(e){if(e.tag===13){var t=ct(e),n=Ye(e,t);if(n!==null){var r=ae();De(n,e,t,r)}Ro(e,t)}};Ua=function(){return D};Ba=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};oi=function(e,t,n){switch(t){case"input":if(bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ol(r);if(!l)throw Error(y(90));va(r),bl(r,l)}}}break;case"textarea":xa(e,n);break;case"select":t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}};Ea=_o;_a=Lt;var Ff={usingClientEntryPoint:!1,Events:[qn,Ut,ol,Na,ja,_o]},yn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Af={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=La(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Of,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{nl=yr.inject(Af),Ue=yr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ff;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Do(t))throw Error(y(200));return Df(e,t,null,n)};we.createRoot=function(e,t){if(!Do(e))throw Error(y(299));var n=!1,r="",l=ac;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=To(e,1,!1,null,null,n,!1,r,l),e[Ge]=t.current,Bn(e.nodeType===8?e.parentNode:e),new Mo(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=La(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Lt(e)};we.hydrate=function(e,t,n){if(!ml(t))throw Error(y(200));return gl(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Do(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=ac;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=sc(t,null,e,1,n??null,l,!1,i,o),e[Ge]=t.current,Bn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new hl(t)};we.render=function(e,t,n){if(!ml(t))throw Error(y(200));return gl(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!ml(e))throw Error(y(40));return e._reactRootContainer?(Lt(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ge]=null})}),!0):!1};we.unstable_batchedUpdates=_o;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ml(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return gl(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function uc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uc)}catch(e){console.error(e)}}uc(),ua.exports=we;var Uf=ua.exports,Qs=Uf;Kl.createRoot=Qs.createRoot,Kl.hydrateRoot=Qs.hydrateRoot;const Ks={en:{languageName:"English",getStarted:"Get Started",headline:"Connect. Collect. Recycle.",subheadline:"A smart way to sell e-waste, earn better and build a cleaner future.",betterPrices:"Better Prices",betterPricesDesc:"Know fair rates in real-time",easyPickups:"Easy Pickups",easyPickupsDesc:"Schedule pickups at your convenience",safeTrusted:"Safe & Trusted",safeTrustedDesc:"Verified partners and secure deals",chooseLanguage:"Choose a Language",continue:"Continue",skip:"Skip",enterMobile:"Enter your mobile number",otpSubtitle:"We'll send you an OTP to verify your number",mobilePlaceholder:"Enter mobile number",termsText:"By continuing, you accept the",termsOfService:"Terms of Service",privacyPolicy:"Privacy Policy",contentPolicy:"Content Policy",verifyOtpTitle:"Enter 4-Digit OTP",verifyOtpSubtitle:"OTP sent to +91 ",verify:"Verify & Proceed",resendOtp:"Resend OTP in 30s",greeting:"Namaste, Kabadiwala Partner",activeLot:"Active Material Lot",lotStatus:"Lot #KC-8842 • PCB & Battery Scrap",estimatedVal:"Estimated Fair Value",weight:"Weight",scanLot:"Scan E-Waste Lot",lotValuation:"AI Lot Valuation Engine",uploadPhoto:"Take / Upload Photo of Waste Lot",detectingItems:"Analyzing PCBs, Copper Wires & Lithium Scrap...",scanResult:"Scan Analysis Result",materialDetected:"Printed Circuit Board (Grade A) + Copper Wiring",confidence:"AI Confidence: 94.2%",recRate:"Fair Market Rate: ₹320 / kg",findRecyclers:"Find Certified Recyclers",nearbyRecyclers:"Nearby Authorized Recyclers (CPCB Certified)",handoverReceipt:"Digital Handover Receipt",confirmHandover:"Complete & Confirm Handover",handoverSuccess:"Handover Verified! Payout Initiated",earningsLedger:"Earnings & Payment Ledger",todayEarnings:"Today's Earnings",totalCollected:"Total Recycled",recentTransactions:"Recent Handover History"},hi:{languageName:"हिंदी",getStarted:"शुरू करें",headline:"जोड़ें. एकत्र करें. रीसायकल करें.",subheadline:"ई-कचरा बेचने, बेहतर कमाने और स्वच्छ भविष्य बनाने का स्मार्ट तरीका।",betterPrices:"बेहतर दरें",betterPricesDesc:"वास्तविक समय में उचित दरें जानें",easyPickups:"आसान पिकअप",easyPickupsDesc:"अपनी सुविधा अनुसार पिकअप शेड्यूल करें",safeTrusted:"सुरक्षित और विश्वसनीय",safeTrustedDesc:"सत्यापित भागीदार और सुरक्षित सौदे",chooseLanguage:"भाषा चुनें",continue:"आगे बढ़ें",skip:"छोड़ें",enterMobile:"अपना मोबाइल नंबर दर्ज करें",otpSubtitle:"हम आपका नंबर सत्यापित करने के लिए एक ओटीपी भेजेंगे",mobilePlaceholder:"मोबाइल नंबर दर्ज करें",termsText:"जारी रखकर, आप स्वीकार करते हैं",termsOfService:"सेवा की शर्तें",privacyPolicy:"गोपनीयता नीति",contentPolicy:"सामग्री नीति",verifyOtpTitle:"4-अंकों का ओटीपी दर्ज करें",verifyOtpSubtitle:"ओटीपी +91 पर भेजा गया ",verify:"सत्यापित करें और आगे बढ़ें",resendOtp:"30 सेकंड में पुन: ओटीपी भेजें",greeting:"नमस्ते, कबाड़ीवाला पार्टनर",activeLot:"सक्रिय सामग्री लॉट",lotStatus:"लॉट #KC-8842 • पीसीबी और बैटरी स्क्रैप",estimatedVal:"अनुमानित उचित मूल्य",weight:"वजन",scanLot:"ई-कचरा लॉट स्कैन करें",lotValuation:"एआई लॉट मूल्यांकन इंजन",uploadPhoto:"कचरे के लॉट की फोटो लें या अपलोड करें",detectingItems:"पीसीबी, तांबे के तार और लिथियम स्क्रैप का विश्लेषण...",scanResult:"स्कैन विश्लेषण परिणाम",materialDetected:"प्रिंटेड सर्किट बोर्ड (ग्रेड ए) + तांबे की वायरिंग",confidence:"एआई सटीकता: 94.2%",recRate:"उचित बाजार दर: ₹320 / किग्रा",findRecyclers:"प्रमाणित रीसाइकलर्स खोजें",nearbyRecyclers:"पास के अधिकृत रीसाइकलर्स (CPCB प्रमाणित)",handoverReceipt:"डिजिटल हैंडओवर रसीद",confirmHandover:"हैंडओवर पूरा करें और पुष्टि करें",handoverSuccess:"हैंडओवर सत्यापित! भुगतान शुरू किया गया",earningsLedger:"कमाई और भुगतान लेजर",todayEarnings:"आज की कमाई",totalCollected:"कुल पुनर्चक्रित",recentTransactions:"हाल का लेनदेन इतिहास"},mr:{languageName:"मराठी",getStarted:"सुरू करा",headline:"जोडा. गोळा करा. रीसायकल करा.",subheadline:"ई-कचरा विकण्याचा, अधिक कमाई करण्याचा आणि स्वच्छ भविष्य घडवण्याचा स्मार्ट मार्ग.",betterPrices:"उत्तम दर",betterPricesDesc:"रिअल-टाइममध्ये रास्त दर जाणून घ्या",easyPickups:"सोपे पिकअप",easyPickupsDesc:"तुमच्या सोयीनुसार पिकअप शेड्यूल करा",safeTrusted:"सुरक्षित आणि विश्वासार्ह",safeTrustedDesc:"सत्यापित भागीदार आणि सुरक्षित व्यवहार",chooseLanguage:"भाषा निवडा",continue:"पुढे चला",skip:"वगळा",enterMobile:"तुमचा मोबाईल नंबर प्रविष्ट करा",otpSubtitle:"आम्ही तुमचा नंबर पडताळण्यासाठी एक OTP पाठवू",mobilePlaceholder:"मोबाईल नंबर प्रविष्ट करा",termsText:"सुरू ठेवून, तुम्ही स्वीकारता",termsOfService:"सेवा अटी",privacyPolicy:"गोपनीयता धोरण",contentPolicy:"सामग्री धोरण",verifyOtpTitle:"4-अंकी OTP प्रविष्ट करा",verifyOtpSubtitle:"OTP पाठवला +91 ",verify:"पडताळणी करा आणि पुढे जा",resendOtp:"30 सेकंदात पुन्हा पाठवा",greeting:"नमस्ते, कबाडीवाला पार्टनर",activeLot:"सक्रिय साहित्य लॉट",lotStatus:"लॉट #KC-8842 • PCB आणि बॅटरी स्क्रॅप",estimatedVal:"अंदाजे रास्त मूल्य",weight:"वजन",scanLot:"ई-कचरा लॉट स्कॅन करा",lotValuation:"AI लॉट मूल्यांकन इंजिन",uploadPhoto:"कचऱ्याच्या लॉटचा फोटो घ्या / अपलोड करा",detectingItems:"PCB, तांब्याची तार आणि लिथियम स्क्रॅपचे विश्लेषण...",scanResult:"स्कॅन विश्लेषण निकाल",materialDetected:"प्रिंटेड सर्किट बोर्ड (ग्रेड A) + तांब्याची वायरिंग",confidence:"AI अचूकता: 94.2%",recRate:"रास्त बाजार दर: ₹320 / किलो",findRecyclers:"प्रमाणित रीसायकलर्स शोधा",nearbyRecyclers:"जवळचे अधिकृत रीसायकलर्स (CPCB प्रमाणित)",handoverReceipt:"डिजिटल हँडओव्हर पावती",confirmHandover:"हँडओव्हर पूर्ण करा आणि पुष्टी करा",handoverSuccess:"हँडओव्हर पडताळले! पेमेंट सुरू केले",earningsLedger:"कमाई आणि पेमेंट खातेवही",todayEarnings:"आजची कमाई",totalCollected:"एकूण रीसायकल केलेले",recentTransactions:"अलीकडील हँडओव्हर इतिहास"}};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),X=(e,t)=>{const n=q.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:s="",children:a,...d},g)=>q.createElement("svg",{ref:g,...Bf,width:l,height:l,stroke:r,strokeWidth:o?Number(i)*24/Number(l):i,className:["lucide",`lucide-${Vf(e)}`,s].join(" "),...d},[...t.map(([m,h])=>q.createElement(m,h)),...Array.isArray(a)?a:[a]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=X("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=X("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=X("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=X("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=X("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=X("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=X("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=X("Delete",[["path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z",key:"1oy587"}],["line",{x1:"18",x2:"12",y1:"9",y2:"15",key:"1olkx5"}],["line",{x1:"12",x2:"18",y1:"9",y2:"15",key:"1n50pc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=X("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=X("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=X("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=X("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=X("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=X("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=X("Signal",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=X("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=X("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=X("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=X("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);function ep({currentScreen:e,setCurrentScreen:t,currentLang:n,setLanguage:r,children:l}){const[i,o]=q.useState(!1),s=[{id:"splash",label:"1. Splash"},{id:"language",label:"2. Language"},{id:"auth",label:"3. Auth & Keypad"},{id:"portal",label:"4. Collector App"}];return u.jsxs("div",{className:"app-viewport-wrapper",children:[u.jsxs("div",{className:"control-toolbar",children:[u.jsxs("div",{className:"toolbar-brand",children:[u.jsx(Qf,{size:18,color:"#CAE0B8"}),u.jsx("span",{children:"Kabadiwala Connect Prototype"})]}),u.jsxs("div",{className:"toolbar-controls",children:[u.jsxs("button",{className:`btn-icon-toggle ${i?"":"active"}`,onClick:()=>o(!1),title:"Mobile Frame View",children:[u.jsx(Zf,{size:14}),u.jsx("span",{children:"Phone"})]}),u.jsxs("button",{className:`btn-icon-toggle ${i?"active":""}`,onClick:()=>o(!0),title:"Full Screen View",children:[u.jsx(Kf,{size:14}),u.jsx("span",{children:"Full"})]}),u.jsx("div",{className:"lang-quick-group",children:["en","hi","mr"].map(a=>u.jsx("button",{className:`lang-chip ${n===a?"active":""}`,onClick:()=>r(a),children:a.toUpperCase()},a))})]})]}),u.jsx("div",{className:"stepper-nav-bar",children:s.map(a=>u.jsx("button",{className:`stepper-btn ${e===a.id?"active":""}`,onClick:()=>t(a.id),children:a.label},a.id))}),u.jsxs("div",{className:`phone-frame ${i?"full-screen-mode":""}`,children:[u.jsxs("div",{className:"status-bar",children:[u.jsx("span",{className:"time-display",children:"9:41"}),u.jsxs("div",{className:"status-bar-icons",children:[u.jsx(Xf,{size:14}),u.jsx(bf,{size:14}),u.jsx($f,{size:16})]})]}),u.jsx("div",{className:"screen-container",children:l}),!i&&u.jsx("div",{className:"phone-home-indicator"})]}),u.jsx("style",{children:`
        .stepper-nav-bar {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
          background: rgba(0, 0, 0, 0.4);
          padding: 6px 12px;
          border-radius: 20px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
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
      `})]})}function tp({t:e,onNext:t}){return u.jsxs("div",{className:"splash-screen page-fade-enter",children:[u.jsx("div",{className:"splash-header",children:u.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/brand/kc_logo_lockup_transparent.png",alt:"Kabadiwala Connect Logo",className:"brand-logo-img"})}),u.jsx("div",{className:"splash-hero-container",children:u.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/splash_hero_illustration_transparent.png",alt:"E-waste Collection & Delivery Illustration",className:"hero-illustration-img"})}),u.jsxs("div",{className:"splash-content-section",children:[u.jsx("h1",{className:"splash-headline",children:e.headline}),u.jsx("p",{className:"splash-subheadline",children:e.subheadline}),u.jsxs("button",{className:"primary-button splash-cta-btn",onClick:t,children:[u.jsx("span",{children:e.getStarted}),u.jsx(Ui,{size:20})]}),u.jsxs("div",{className:"feature-badges-grid",children:[u.jsxs("div",{className:"feature-badge-item",children:[u.jsx("div",{className:"feature-icon-wrapper",children:u.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/icon_better_prices_transparent.png",alt:"Better Prices"})}),u.jsxs("div",{className:"feature-badge-text",children:[u.jsx("div",{className:"feature-title",children:e.betterPrices}),u.jsx("div",{className:"feature-desc",children:e.betterPricesDesc})]})]}),u.jsxs("div",{className:"feature-badge-item",children:[u.jsx("div",{className:"feature-icon-wrapper",children:u.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/icon_easy_pickups_transparent.png",alt:"Easy Pickups"})}),u.jsxs("div",{className:"feature-badge-text",children:[u.jsx("div",{className:"feature-title",children:e.easyPickups}),u.jsx("div",{className:"feature-desc",children:e.easyPickupsDesc})]})]}),u.jsxs("div",{className:"feature-badge-item",children:[u.jsx("div",{className:"feature-icon-wrapper",children:u.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/icon_safe_trusted_transparent.png",alt:"Safe & Trusted"})}),u.jsxs("div",{className:"feature-badge-text",children:[u.jsx("div",{className:"feature-title",children:e.safeTrusted}),u.jsx("div",{className:"feature-desc",children:e.safeTrustedDesc})]})]})]})]}),u.jsx("style",{children:`
        .splash-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px 20px 24px 20px;
          min-height: 100%;
          justify-content: space-between;
          background-color: var(--surface-warm);
        }

        .splash-header {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 4px;
          margin-bottom: 12px;
        }

        .brand-logo-img {
          height: 64px;
          object-fit: contain;
        }

        .splash-hero-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 16px;
        }

        .hero-illustration-img {
          max-width: 92%;
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
          font-size: 26px;
          font-weight: 800;
          color: var(--brand-deep-green);
          margin-bottom: 8px;
          letter-spacing: -0.3px;
        }

        .splash-subheadline {
          font-size: 14px;
          color: var(--text-secondary);
          max-width: 320px;
          line-height: 1.45;
          margin-bottom: 24px;
        }

        .splash-cta-btn {
          margin-bottom: 24px;
        }

        .feature-badges-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-top: 4px;
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
          background: #E1E5CE;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }

        .feature-icon-wrapper img {
          width: 28px;
          height: 28px;
          object-fit: contain;
        }

        .feature-title {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .feature-desc {
          font-size: 11px;
          color: var(--text-secondary);
          line-height: 1.25;
        }
      `})]})}function np({t:e,currentLang:t,setLanguage:n,onNext:r,onBack:l}){const i=[{code:"en",name:"English",icon:"Aa"},{code:"hi",name:"हिंदी",icon:"आ"},{code:"mr",name:"मराठी",icon:"म"}];return u.jsxs("div",{className:"language-screen page-fade-enter",children:[u.jsx("div",{className:"top-nav-bar",children:l&&u.jsx("button",{className:"back-arrow-btn",onClick:l,"aria-label":"Go Back",children:u.jsx(Oo,{size:20,color:"#1C522D"})})}),u.jsxs("div",{className:"language-container",children:[u.jsx("h1",{className:"language-title",children:e.chooseLanguage}),u.jsx("div",{className:"language-list",children:i.map(o=>{const s=t===o.code;return u.jsxs("div",{className:`language-card ${s?"selected":""}`,onClick:()=>n(o.code),children:[u.jsxs("div",{className:"language-card-left",children:[u.jsx("div",{className:"lang-icon-badge",children:o.icon}),u.jsx("span",{className:"lang-name",children:o.name})]}),u.jsx("div",{className:`radio-circle ${s?"active":""}`,children:s&&u.jsx("div",{className:"radio-inner-dot"})})]},o.code)})})]}),u.jsx("div",{className:"language-footer",children:u.jsx("button",{className:"primary-button",onClick:r,children:e.continue})}),u.jsx("style",{children:`
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

        .back-arrow-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #E1E5CE;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .back-arrow-btn:active {
          transform: scale(0.92);
          background: var(--accent-soft);
        }

        .language-title {
          font-size: 26px;
          font-weight: 800;
          color: var(--brand-dark-text);
          margin-bottom: 28px;
          text-align: center;
          margin-top: 10px;
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
      `})]})}function rp({t:e,onSkip:t,onAuthenticated:n,onBack:r}){const[l,i]=q.useState(""),[o,s]=q.useState("phone"),[a,d]=q.useState(["","","",""]),g=()=>{o==="otp"?s("phone"):r&&r()},m=x=>{if(o==="phone")x==="backspace"?i(w=>w.slice(0,-1)):l.length<10&&i(w=>w+x);else if(x==="backspace"){const w=[...a];for(let T=3;T>=0;T--)if(w[T]!==""){w[T]="";break}d(w)}else{const w=[...a];for(let T=0;T<4;T++)if(w[T]===""){w[T]=x;break}d(w)}},h=()=>{o==="phone"?(l.length<10&&i("9876543210"),s("otp")):n({phone:l||"9876543210"})},k=[{num:"1",sub:""},{num:"2",sub:"ABC"},{num:"3",sub:"DEF"},{num:"4",sub:"GHI"},{num:"5",sub:"JKL"},{num:"6",sub:"MNO"},{num:"7",sub:"PQRS"},{num:"8",sub:"TUV"},{num:"9",sub:"WXYZ"},{num:"",sub:""},{num:"0",sub:""},{num:"backspace",sub:""}];return u.jsxs("div",{className:"auth-screen page-fade-enter",children:[u.jsxs("div",{className:"auth-header",children:[u.jsx("button",{className:"back-arrow-btn",onClick:g,"aria-label":"Go Back",children:u.jsx(Oo,{size:20,color:"#1C522D"})}),u.jsx("button",{className:"skip-pill",onClick:t,children:e.skip})]}),u.jsx("div",{className:"auth-body",children:o==="phone"?u.jsxs(u.Fragment,{children:[u.jsx("h1",{className:"auth-title",children:e.enterMobile}),u.jsx("p",{className:"auth-subtitle",children:e.otpSubtitle}),u.jsxs("div",{className:`phone-input-box ${l?"has-value":""}`,children:[u.jsxs("div",{className:"country-code",children:[u.jsx("span",{children:"+91"}),u.jsx(Hf,{size:16,color:"#538A46"})]}),u.jsx("div",{className:"input-divider"}),u.jsx("div",{className:"phone-display-value",children:l||u.jsx("span",{className:"placeholder",children:e.mobilePlaceholder})})]}),u.jsx("button",{className:"primary-button continue-btn",onClick:h,children:e.continue}),u.jsxs("p",{className:"terms-disclaimer",children:[e.termsText," ",u.jsx("a",{href:"#terms",children:e.termsOfService}),","," ",u.jsx("a",{href:"#privacy",children:e.privacyPolicy})," and ",u.jsx("a",{href:"#content",children:e.contentPolicy}),"."]})]}):u.jsxs(u.Fragment,{children:[u.jsx("h1",{className:"auth-title",children:e.verifyOtpTitle}),u.jsxs("p",{className:"auth-subtitle",children:[e.verifyOtpSubtitle," ",u.jsxs("strong",{children:["+91 ",l||"9876543210"]})]}),u.jsx("div",{className:"otp-input-container",children:[0,1,2,3].map(x=>u.jsx("div",{className:`otp-box ${a[x]?"filled":""}`,children:a[x]||(x===a.findIndex(w=>w==="")?"|":"")},x))}),u.jsx("button",{className:"primary-button continue-btn",onClick:h,children:e.verify}),u.jsxs("div",{className:"resend-otp-link",onClick:()=>d(["1","2","3","4"]),children:[e.resendOtp," (Tap to Auto-Fill 1234)"]})]})}),u.jsx("div",{className:"custom-keypad",children:k.map((x,w)=>x.num===""?u.jsx("div",{className:"keypad-cell empty"},w):x.num==="backspace"?u.jsx("div",{className:"keypad-cell backspace-cell",onClick:()=>m("backspace"),children:u.jsx(Wf,{size:22,color:"#1B1B1B"})},w):u.jsxs("div",{className:"keypad-cell",onClick:()=>m(x.num),children:[u.jsx("div",{className:"key-num",children:x.num}),x.sub&&u.jsx("div",{className:"key-sub",children:x.sub})]},w))}),u.jsx("style",{children:`
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
          margin-bottom: 28px;
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
          margin-bottom: 16px;
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
      `})]})}function lp({t:e,user:t,currentLang:n,setLanguage:r,onBack:l}){const[i,o]=q.useState("scan"),[s,a]=q.useState(!1),[d,g]=q.useState(!1),[m,h]=q.useState({category:"High-Grade E-Waste (PCB & Batteries)",weightKg:14.5,estimatedPricePerKg:320,totalValuation:4640,confidence:"94.8%"}),[k,x]=q.useState(!1),w=[{id:1,name:"EcoMet Recycling Pvt Ltd",cpcbReg:"CPCB/EW-REG/2024/0981",distance:"2.4 km away",rating:4.9,buyingPriceKg:"₹340 / kg",badge:"Highest Quote",address:"Industrial Area Phase II, Site B"},{id:2,name:"GreenTech Urban Metals",cpcbReg:"CPCB/EW-REG/2023/0412",distance:"4.8 km away",rating:4.7,buyingPriceKg:"₹325 / kg",badge:"Instant Cash Pick-up",address:"MIDC Sector 4"},{id:3,name:"JNARDDC Verified Processors",cpcbReg:"GOV/MINES/CRITICAL-MIN/88",distance:"6.1 km away",rating:5,buyingPriceKg:"₹355 / kg",badge:"Critical Mineral Partner",address:"CleanTech E-Park"}],T=()=>{a(!0),g(!1),setTimeout(()=>{a(!1),g(!0)},1800)};return u.jsxs("div",{className:"main-portal page-fade-enter",children:[u.jsxs("div",{className:"portal-header",children:[u.jsxs("div",{className:"portal-profile",children:[l&&u.jsx("button",{className:"back-arrow-btn portal-back-btn",onClick:l,"aria-label":"Go Back",children:u.jsx(Oo,{size:18,color:"#1C522D"})}),u.jsx("div",{className:"avatar-circle",children:u.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/brand/kc_logo_mark.png",alt:"Logo Mark"})}),u.jsxs("div",{children:[u.jsx("div",{className:"portal-greeting",children:e.greeting}),u.jsxs("div",{className:"portal-user-meta",children:["📱 +91 ",(t==null?void 0:t.phone)||"9876543210"," • Level-1 Aggregator"]})]})]}),u.jsxs("button",{className:"lang-switcher-btn",onClick:()=>{r(n==="en"?"hi":n==="hi"?"mr":"en")},children:["🌐 ",n.toUpperCase()]})]}),u.jsxs("div",{className:"portal-tab-bar",children:[u.jsxs("button",{className:`tab-item ${i==="scan"?"active":""}`,onClick:()=>o("scan"),children:[u.jsx(Ys,{size:18}),u.jsx("span",{children:e.scanLot})]}),u.jsxs("button",{className:`tab-item ${i==="recyclers"?"active":""}`,onClick:()=>o("recyclers"),children:[u.jsx(Zs,{size:18}),u.jsx("span",{children:e.findRecyclers})]}),u.jsxs("button",{className:`tab-item ${i==="ledger"?"active":""}`,onClick:()=>o("ledger"),children:[u.jsx(qf,{size:18}),u.jsx("span",{children:e.earningsLedger})]})]}),i==="scan"&&u.jsx("div",{className:"tab-pane",children:u.jsxs("div",{className:"card-box ai-scan-card",children:[u.jsxs("div",{className:"card-badge",children:[u.jsx(Jf,{size:14}),u.jsx("span",{children:"AI Price Discovery Engine"})]}),u.jsx("h2",{className:"card-title",children:e.lotValuation}),u.jsx("p",{className:"card-subtitle",children:e.uploadPhoto}),u.jsx("div",{className:"scanner-viewfinder",onClick:T,children:s?u.jsxs("div",{className:"scanning-state",children:[u.jsx(Yf,{size:36,className:"spin-icon",color:"#538A46"}),u.jsx("p",{children:e.detectingItems})]}):d?u.jsxs("div",{className:"scanned-preview",children:[u.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/web/hero_illustration_wide.png",alt:"E-waste Lot",className:"scanned-img"}),u.jsxs("div",{className:"scan-success-badge",children:[u.jsx(Xs,{size:16,color:"#1C522D"}),u.jsx("span",{children:"AI Detection Verified"})]})]}):u.jsxs("div",{className:"scan-placeholder",children:[u.jsx("div",{className:"camera-circle",children:u.jsx(Ys,{size:32,color:"#1C522D"})}),u.jsx("p",{children:"Tap to Simulate Camera Scan of Scrap Lot"}),u.jsx("span",{className:"sub-hint",children:"Instant Fair Price Guarantee"})]})}),d&&u.jsxs("div",{className:"valuation-results page-fade-enter",children:[u.jsxs("div",{className:"result-row highlight-box",children:[u.jsx("div",{className:"res-label",children:e.materialDetected}),u.jsx("div",{className:"res-confidence",children:e.confidence})]}),u.jsxs("div",{className:"valuation-grid",children:[u.jsxs("div",{className:"val-box",children:[u.jsx("div",{className:"val-title",children:e.weight}),u.jsxs("div",{className:"val-number",children:[m.weightKg," kg"]})]}),u.jsxs("div",{className:"val-box",children:[u.jsx("div",{className:"val-title",children:"Rate / kg"}),u.jsxs("div",{className:"val-number",children:["₹",m.estimatedPricePerKg]})]})]}),u.jsxs("div",{className:"total-valuation-banner",children:[u.jsxs("div",{children:[u.jsx("div",{className:"tot-label",children:e.estimatedVal}),u.jsxs("div",{className:"tot-amount",children:["₹",m.totalValuation.toLocaleString("en-IN")]})]}),u.jsxs("button",{className:"primary-button find-buyers-btn",onClick:()=>o("recyclers"),children:[u.jsx("span",{children:e.findRecyclers}),u.jsx(Ui,{size:18})]})]})]})]})}),i==="recyclers"&&u.jsxs("div",{className:"tab-pane",children:[u.jsxs("div",{className:"pane-header",children:[u.jsx("h2",{className:"pane-title",children:e.nearbyRecyclers}),u.jsx("span",{className:"cp-count",children:"3 CPCB Certified Active"})]}),u.jsx("div",{className:"recyclers-list",children:w.map(f=>u.jsxs("div",{className:"recycler-card",children:[u.jsxs("div",{className:"rec-top-row",children:[u.jsxs("div",{className:"rec-name-group",children:[u.jsx("div",{className:"rec-name",children:f.name}),u.jsxs("div",{className:"rec-cpcb",children:[u.jsx(Js,{size:14,color:"#538A46"}),u.jsx("span",{children:f.cpcbReg})]})]}),u.jsx("span",{className:"rec-badge",children:f.badge})]}),u.jsxs("div",{className:"rec-mid-row",children:[u.jsxs("div",{className:"rec-meta",children:[u.jsx(Zs,{size:14,color:"#5F6361"}),u.jsxs("span",{children:[f.distance," • ",f.address]})]}),u.jsx("div",{className:"rec-quote",children:f.buyingPriceKg})]}),u.jsxs("div",{className:"rec-action-row",children:[u.jsxs("button",{className:"secondary-button call-btn",onClick:()=>alert(`Initiating direct voice connection with ${f.name}`),children:[u.jsx(Gf,{size:16}),u.jsx("span",{children:"Call Recycler"})]}),u.jsx("button",{className:"primary-button confirm-pickup-btn",onClick:()=>{x(!0),o("receipt")},children:u.jsx("span",{children:"Initiate Handover"})})]})]},f.id))})]}),i==="receipt"&&u.jsx("div",{className:"tab-pane",children:u.jsxs("div",{className:"card-box handover-card page-fade-enter",children:[u.jsxs("div",{className:"receipt-status-header",children:[u.jsx(Xs,{size:44,color:"#538A46"}),u.jsx("h2",{children:e.handoverSuccess}),u.jsx("span",{className:"txn-id",children:"Handover Lot ID: #KC-2026-9812"})]}),u.jsxs("div",{className:"receipt-details-list",children:[u.jsxs("div",{className:"r-item",children:[u.jsx("span",{children:"Material Lot"}),u.jsx("strong",{children:"PCB Circuit Boards & Batteries (14.5 kg)"})]}),u.jsxs("div",{className:"r-item",children:[u.jsx("span",{children:"Authorized Recycler"}),u.jsx("strong",{children:"EcoMet Recycling Pvt Ltd"})]}),u.jsxs("div",{className:"r-item",children:[u.jsx("span",{children:"GPS Location Tag"}),u.jsx("strong",{children:"MIDC Sector 4, Mumbai (Lat 19.076, Lon 72.877)"})]}),u.jsxs("div",{className:"r-item",children:[u.jsx("span",{children:"Verified Payout Amount"}),u.jsx("strong",{className:"payout-sum",children:"₹4,640 (Instant UPI Credit)"})]})]}),u.jsxs("div",{className:"compliance-stamp",children:[u.jsx(Js,{size:20,color:"#1C522D"}),u.jsx("span",{children:"CPCB Form-2 E-Waste Digital Compliance Chain Recorded"})]}),u.jsxs("button",{className:"primary-button",onClick:()=>o("ledger"),children:[u.jsx("span",{children:"View Earnings Ledger"}),u.jsx(Ui,{size:18})]})]})}),i==="ledger"&&u.jsxs("div",{className:"tab-pane page-fade-enter",children:[u.jsxs("div",{className:"earnings-summary-card",children:[u.jsx("div",{className:"es-label",children:e.todayEarnings}),u.jsx("div",{className:"es-amount",children:"₹4,640"}),u.jsxs("div",{className:"es-stats-grid",children:[u.jsxs("div",{className:"stat-pill",children:[u.jsx("span",{children:"This Month"}),u.jsx("strong",{children:"₹28,450"})]}),u.jsxs("div",{className:"stat-pill",children:[u.jsx("span",{children:"Total Recycled"}),u.jsx("strong",{children:"142.5 kg"})]})]})]}),u.jsx("h3",{className:"section-subtitle",children:e.recentTransactions}),u.jsxs("div",{className:"txn-history-list",children:[u.jsxs("div",{className:"txn-card",children:[u.jsxs("div",{className:"txn-left",children:[u.jsx("div",{className:"txn-icon-circle",children:u.jsx(Gs,{size:20,color:"#1C522D"})}),u.jsxs("div",{children:[u.jsx("div",{className:"txn-title",children:"EcoMet Recycling"}),u.jsx("div",{className:"txn-sub",children:"Lot #KC-9812 • Today, 2:15 PM"})]})]}),u.jsxs("div",{className:"txn-right",children:[u.jsx("div",{className:"txn-plus",children:"+₹4,640"}),u.jsx("span",{className:"txn-status",children:"Verified UPI"})]})]}),u.jsxs("div",{className:"txn-card",children:[u.jsxs("div",{className:"txn-left",children:[u.jsx("div",{className:"txn-icon-circle",children:u.jsx(Gs,{size:20,color:"#1C522D"})}),u.jsxs("div",{children:[u.jsx("div",{className:"txn-title",children:"JNARDDC Metals"}),u.jsx("div",{className:"txn-sub",children:"Lot #KC-9740 • Yesterday"})]})]}),u.jsxs("div",{className:"txn-right",children:[u.jsx("div",{className:"txn-plus",children:"+₹7,200"}),u.jsx("span",{className:"txn-status",children:"Cash Ledger"})]})]})]})]}),u.jsx("style",{children:`
        .main-portal {
          display: flex;
          flex-direction: column;
          padding: 14px 16px 24px 16px;
          min-height: 100%;
          background-color: var(--surface-warm);
        }

        .portal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-soft);
          margin-bottom: 14px;
        }

        .portal-profile {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .avatar-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #E1E5CE;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
        }

        .avatar-circle img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .portal-greeting {
          font-size: 15px;
          font-weight: 700;
          color: var(--brand-deep-green);
        }

        .portal-user-meta {
          font-size: 11px;
          color: var(--text-secondary);
        }

        .lang-switcher-btn {
          background: var(--white);
          border: 1px solid var(--border-soft);
          border-radius: var(--radius-pill);
          padding: 4px 10px;
          font-size: 11px;
          font-weight: 700;
          color: var(--brand-deep-green);
          cursor: pointer;
        }

        /* Tab Navigation */
        .portal-tab-bar {
          display: flex;
          background: var(--white);
          border-radius: 14px;
          padding: 4px;
          border: 1px solid var(--border-soft);
          margin-bottom: 16px;
          gap: 4px;
        }

        .tab-item {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 4px;
          border: none;
          background: transparent;
          border-radius: 10px;
          font-size: 11px;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tab-item.active {
          background-color: var(--brand-deep-green);
          color: var(--white);
        }

        .tab-pane {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        /* Cards & Panes */
        .card-box {
          background: var(--white);
          border-radius: var(--radius-card);
          padding: 16px;
          border: 1px solid var(--border-soft);
          box-shadow: var(--elevation-card);
        }

        .card-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--surface-green-tint);
          color: var(--brand-deep-green);
          padding: 4px 10px;
          border-radius: var(--radius-pill);
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .card-title {
          font-size: 20px;
          font-weight: 800;
          color: var(--brand-dark-text);
          margin-bottom: 4px;
        }

        .card-subtitle {
          font-size: 13px;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .scanner-viewfinder {
          width: 100%;
          height: 180px;
          background: #F4F7F2;
          border: 2px dashed var(--brand-green);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
          position: relative;
          margin-bottom: 16px;
        }

        .scan-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 10px;
        }

        .camera-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #E1E5CE;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }

        .scan-placeholder p {
          font-size: 13px;
          font-weight: 700;
          color: var(--brand-deep-green);
        }

        .sub-hint {
          font-size: 11px;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        .scanning-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 600;
          color: var(--brand-deep-green);
        }

        .spin-icon {
          animation: spin 1.2s linear infinite;
        }

        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        .scanned-preview {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .scanned-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .scan-success-badge {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(4px);
          padding: 6px 12px;
          border-radius: var(--radius-pill);
          font-size: 12px;
          font-weight: 700;
          color: var(--brand-deep-green);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .result-row {
          padding: 10px 12px;
          background: var(--surface-green-light);
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .res-label {
          font-size: 12px;
          font-weight: 700;
          color: var(--brand-dark-text);
        }

        .res-confidence {
          font-size: 11px;
          font-weight: 700;
          color: var(--brand-green);
        }

        .valuation-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 14px;
        }

        .val-box {
          background: #F9FBF8;
          border: 1px solid var(--border-soft);
          border-radius: 10px;
          padding: 10px;
        }

        .val-title {
          font-size: 11px;
          color: var(--text-secondary);
        }

        .val-number {
          font-size: 16px;
          font-weight: 800;
          color: var(--brand-deep-green);
          margin-top: 2px;
        }

        .total-valuation-banner {
          background: var(--brand-deep-green);
          color: white;
          border-radius: 14px;
          padding: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .tot-label {
          font-size: 11px;
          opacity: 0.85;
        }

        .tot-amount {
          font-size: 22px;
          font-weight: 800;
        }

        .find-buyers-btn {
          width: auto;
          height: 40px;
          padding: 0 14px;
          font-size: 13px;
          background-color: var(--brand-green);
        }

        /* Recyclers View */
        .pane-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .pane-title {
          font-size: 16px;
          font-weight: 800;
          color: var(--brand-dark-text);
        }

        .cp-count {
          font-size: 11px;
          font-weight: 700;
          color: var(--brand-green);
        }

        .recyclers-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .recycler-card {
          background: white;
          border: 1px solid var(--border-soft);
          border-radius: var(--radius-card);
          padding: 14px;
        }

        .rec-top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
        }

        .rec-name {
          font-size: 15px;
          font-weight: 700;
          color: var(--brand-dark-text);
        }

        .rec-cpcb {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          color: var(--brand-green);
          font-weight: 600;
          margin-top: 2px;
        }

        .rec-badge {
          background: var(--surface-green-tint);
          color: var(--brand-deep-green);
          font-size: 10px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: var(--radius-pill);
        }

        .rec-mid-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          font-size: 12px;
        }

        .rec-meta {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--text-secondary);

          font-size: 11px;
        }

        .rec-quote {
          font-size: 15px;
          font-weight: 800;
          color: var(--brand-deep-green);
        }

        .rec-action-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .call-btn, .confirm-pickup-btn {
          height: 40px;
          font-size: 12px;
        }

        /* Handover Card */
        .handover-card {
          text-align: center;
          padding: 24px 16px;
        }

        .receipt-status-header h2 {
          font-size: 18px;
          font-weight: 800;
          color: var(--brand-deep-green);
          margin-top: 8px;
        }

        .txn-id {
          font-size: 11px;
          color: var(--text-secondary);
          display: block;
          margin-bottom: 16px;
        }

        .receipt-details-list {
          text-align: left;
          background: #F9FAF8;
          border-radius: 12px;
          padding: 12px;
          margin-bottom: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .r-item {
          display: flex;
          flex-direction: column;
          font-size: 12px;
        }

        .r-item span {
          color: var(--text-secondary);
          font-size: 10px;
        }

        .payout-sum {
          color: var(--brand-green);
          font-size: 14px;
        }

        .compliance-stamp {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          color: var(--brand-deep-green);
          font-weight: 700;
          background: var(--surface-green-tint);
          padding: 8px 12px;
          border-radius: 8px;
          margin-bottom: 16px;
        }

        /* Ledger View */
        .earnings-summary-card {
          background: linear-gradient(135deg, var(--brand-deep-green) 0%, #2A6E3F 100%);
          color: white;
          border-radius: var(--radius-card);
          padding: 20px;
          margin-bottom: 16px;
        }

        .es-label {
          font-size: 12px;
          opacity: 0.85;
        }

        .es-amount {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .es-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .stat-pill {
          background: rgba(255, 255, 255, 0.12);
          border-radius: 10px;
          padding: 8px 12px;
          display: flex;
          flex-direction: column;
        }

        .stat-pill span {
          font-size: 10px;
          opacity: 0.8;
        }

        .stat-pill strong {
          font-size: 14px;
          font-weight: 700;
        }

        .section-subtitle {
          font-size: 15px;
          font-weight: 700;
          color: var(--brand-dark-text);
          margin-bottom: 10px;
        }

        .txn-history-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .txn-card {
          background: white;
          border-radius: 12px;
          padding: 12px;
          border: 1px solid var(--border-soft);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .txn-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .txn-icon-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--surface-green-tint);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .txn-title {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .txn-sub {
          font-size: 10px;
          color: var(--text-secondary);
        }

        .txn-plus {
          font-size: 14px;
          font-weight: 800;
          color: var(--brand-green);
          text-align: right;
        }

        .txn-status {
          font-size: 9px;
          font-weight: 700;
          color: var(--brand-deep-green);
          display: block;
          text-align: right;
        }
      `})]})}function ip(){const[e,t]=q.useState("splash"),[n,r]=q.useState("en"),[l,i]=q.useState({phone:"9876543210"}),o=Ks[n]||Ks.en,s=()=>t("language"),a=()=>t("auth"),d=g=>{i(g),t("portal")};return u.jsxs(ep,{currentScreen:e,setCurrentScreen:t,currentLang:n,setLanguage:r,children:[e==="splash"&&u.jsx(tp,{t:o,onNext:s}),e==="language"&&u.jsx(np,{t:o,currentLang:n,setLanguage:r,onNext:a,onBack:()=>t("splash")}),e==="auth"&&u.jsx(rp,{t:o,onSkip:()=>t("portal"),onAuthenticated:d,onBack:()=>t("language")}),e==="portal"&&u.jsx(lp,{t:o,user:l,currentLang:n,setLanguage:r,onBack:()=>t("auth")})]})}Kl.createRoot(document.getElementById("root")).render(u.jsx(_c.StrictMode,{children:u.jsx(ip,{})}));
