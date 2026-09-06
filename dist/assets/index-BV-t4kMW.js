(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();function Md(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mo={exports:{}},xr={},xo={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cs=Symbol.for("react.element"),Td=Symbol.for("react.portal"),Ld=Symbol.for("react.fragment"),Bd=Symbol.for("react.strict_mode"),Rd=Symbol.for("react.profiler"),Dd=Symbol.for("react.provider"),Id=Symbol.for("react.context"),Wd=Symbol.for("react.forward_ref"),Ud=Symbol.for("react.suspense"),Od=Symbol.for("react.memo"),Vd=Symbol.for("react.lazy"),tl=Symbol.iterator;function $d(e){return e===null||typeof e!="object"?null:(e=tl&&e[tl]||e["@@iterator"],typeof e=="function"?e:null)}var go={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yo=Object.assign,vo={};function vn(e,t,s){this.props=e,this.context=t,this.refs=vo,this.updater=s||go}vn.prototype.isReactComponent={};vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function jo(){}jo.prototype=vn.prototype;function sa(e,t,s){this.props=e,this.context=t,this.refs=vo,this.updater=s||go}var ra=sa.prototype=new jo;ra.constructor=sa;yo(ra,vn.prototype);ra.isPureReactComponent=!0;var nl=Array.isArray,ko=Object.prototype.hasOwnProperty,ia={current:null},No={key:!0,ref:!0,__self:!0,__source:!0};function wo(e,t,s){var r,i={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)ko.call(t,r)&&!No.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=s;else if(1<o){for(var c=Array(o),d=0;d<o;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:cs,type:e,key:a,ref:l,props:i,_owner:ia.current}}function Hd(e,t){return{$$typeof:cs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function aa(e){return typeof e=="object"&&e!==null&&e.$$typeof===cs}function Kd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(s){return t[s]})}var sl=/\/+/g;function Rr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kd(""+e.key):t.toString(36)}function Ts(e,t,s,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case cs:case Td:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Rr(l,0):r,nl(i)?(s="",e!=null&&(s=e.replace(sl,"$&/")+"/"),Ts(i,t,s,"",function(d){return d})):i!=null&&(aa(i)&&(i=Hd(i,s+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(sl,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",nl(e))for(var o=0;o<e.length;o++){a=e[o];var c=r+Rr(a,o);l+=Ts(a,t,s,c,i)}else if(c=$d(e),typeof c=="function")for(e=c.call(e),o=0;!(a=e.next()).done;)a=a.value,c=r+Rr(a,o++),l+=Ts(a,t,s,c,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function gs(e,t,s){if(e==null)return e;var r=[],i=0;return Ts(e,r,"","",function(a){return t.call(s,a,i++)}),r}function Gd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(s){(e._status===0||e._status===-1)&&(e._status=1,e._result=s)},function(s){(e._status===0||e._status===-1)&&(e._status=2,e._result=s)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Ls={transition:null},Qd={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Ls,ReactCurrentOwner:ia};function bo(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:gs,forEach:function(e,t,s){gs(e,function(){t.apply(this,arguments)},s)},count:function(e){var t=0;return gs(e,function(){t++}),t},toArray:function(e){return gs(e,function(t){return t})||[]},only:function(e){if(!aa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=vn;L.Fragment=Ld;L.Profiler=Rd;L.PureComponent=sa;L.StrictMode=Bd;L.Suspense=Ud;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qd;L.act=bo;L.cloneElement=function(e,t,s){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=yo({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=ia.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)ko.call(t,c)&&!No.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=s;else if(1<c){o=Array(c);for(var d=0;d<c;d++)o[d]=arguments[d+2];r.children=o}return{$$typeof:cs,type:e.type,key:i,ref:a,props:r,_owner:l}};L.createContext=function(e){return e={$$typeof:Id,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Dd,_context:e},e.Consumer=e};L.createElement=wo;L.createFactory=function(e){var t=wo.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Wd,render:e}};L.isValidElement=aa;L.lazy=function(e){return{$$typeof:Vd,_payload:{_status:-1,_result:e},_init:Gd}};L.memo=function(e,t){return{$$typeof:Od,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Ls.transition;Ls.transition={};try{e()}finally{Ls.transition=t}};L.unstable_act=bo;L.useCallback=function(e,t){return fe.current.useCallback(e,t)};L.useContext=function(e){return fe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};L.useEffect=function(e,t){return fe.current.useEffect(e,t)};L.useId=function(){return fe.current.useId()};L.useImperativeHandle=function(e,t,s){return fe.current.useImperativeHandle(e,t,s)};L.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return fe.current.useMemo(e,t)};L.useReducer=function(e,t,s){return fe.current.useReducer(e,t,s)};L.useRef=function(e){return fe.current.useRef(e)};L.useState=function(e){return fe.current.useState(e)};L.useSyncExternalStore=function(e,t,s){return fe.current.useSyncExternalStore(e,t,s)};L.useTransition=function(){return fe.current.useTransition()};L.version="18.3.1";xo.exports=L;var b=xo.exports;const qd=Md(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd=b,Xd=Symbol.for("react.element"),Zd=Symbol.for("react.fragment"),Jd=Object.prototype.hasOwnProperty,eu=Yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tu={key:!0,ref:!0,__self:!0,__source:!0};function _o(e,t,s){var r,i={},a=null,l=null;s!==void 0&&(a=""+s),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Jd.call(t,r)&&!tu.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Xd,type:e,key:a,ref:l,props:i,_owner:eu.current}}xr.Fragment=Zd;xr.jsx=_o;xr.jsxs=_o;mo.exports=xr;var n=mo.exports,ci={},Co={exports:{}},Ce={},So={exports:{}},Po={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,M){var T=z.length;z.push(M);e:for(;0<T;){var K=T-1>>>1,ee=z[K];if(0<i(ee,M))z[K]=M,z[T]=ee,T=K;else break e}}function s(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var M=z[0],T=z.pop();if(T!==M){z[0]=T;e:for(var K=0,ee=z.length,ms=ee>>>1;K<ms;){var St=2*(K+1)-1,Br=z[St],Pt=St+1,xs=z[Pt];if(0>i(Br,T))Pt<ee&&0>i(xs,Br)?(z[K]=xs,z[Pt]=T,K=Pt):(z[K]=Br,z[St]=T,K=St);else if(Pt<ee&&0>i(xs,T))z[K]=xs,z[Pt]=T,K=Pt;else break e}}return M}function i(z,M){var T=z.sortIndex-M.sortIndex;return T!==0?T:z.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var c=[],d=[],y=1,p=null,f=3,j=!1,x=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(z){for(var M=s(d);M!==null;){if(M.callback===null)r(d);else if(M.startTime<=z)r(d),M.sortIndex=M.expirationTime,t(c,M);else break;M=s(d)}}function m(z){if(v=!1,g(z),!x)if(s(c)!==null)x=!0,Tr(k);else{var M=s(d);M!==null&&Lr(m,M.startTime-z)}}function k(z,M){x=!1,v&&(v=!1,h(A),A=-1),j=!0;var T=f;try{for(g(M),p=s(c);p!==null&&(!(p.expirationTime>M)||z&&!J());){var K=p.callback;if(typeof K=="function"){p.callback=null,f=p.priorityLevel;var ee=K(p.expirationTime<=M);M=e.unstable_now(),typeof ee=="function"?p.callback=ee:p===s(c)&&r(c),g(M)}else r(c);p=s(c)}if(p!==null)var ms=!0;else{var St=s(d);St!==null&&Lr(m,St.startTime-M),ms=!1}return ms}finally{p=null,f=T,j=!1}}var _=!1,P=null,A=-1,w=5,F=-1;function J(){return!(e.unstable_now()-F<w)}function Ct(){if(P!==null){var z=e.unstable_now();F=z;var M=!0;try{M=P(!0,z)}finally{M?wn():(_=!1,P=null)}}else _=!1}var wn;if(typeof u=="function")wn=function(){u(Ct)};else if(typeof MessageChannel<"u"){var el=new MessageChannel,Ad=el.port2;el.port1.onmessage=Ct,wn=function(){Ad.postMessage(null)}}else wn=function(){C(Ct,0)};function Tr(z){P=z,_||(_=!0,wn())}function Lr(z,M){A=C(function(){z(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){x||j||(x=!0,Tr(k))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return s(c)},e.unstable_next=function(z){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var T=f;f=M;try{return z()}finally{f=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,M){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var T=f;f=z;try{return M()}finally{f=T}},e.unstable_scheduleCallback=function(z,M,T){var K=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?K+T:K):T=K,z){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=T+ee,z={id:y++,callback:M,priorityLevel:z,startTime:T,expirationTime:ee,sortIndex:-1},T>K?(z.sortIndex=T,t(d,z),s(c)===null&&z===s(d)&&(v?(h(A),A=-1):v=!0,Lr(m,T-K))):(z.sortIndex=ee,t(c,z),x||j||(x=!0,Tr(k))),z},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(z){var M=f;return function(){var T=f;f=M;try{return z.apply(this,arguments)}finally{f=T}}}})(Po);So.exports=Po;var nu=So.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var su=b,_e=nu;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zo=new Set,Hn={};function Ut(e,t){pn(e,t),pn(e+"Capture",t)}function pn(e,t){for(Hn[e]=t,e=0;e<t.length;e++)zo.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),di=Object.prototype.hasOwnProperty,ru=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rl={},il={};function iu(e){return di.call(il,e)?!0:di.call(rl,e)?!1:ru.test(e)?il[e]=!0:(rl[e]=!0,!1)}function au(e,t,s,r){if(s!==null&&s.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function lu(e,t,s,r){if(t===null||typeof t>"u"||au(e,t,s,r))return!0;if(r)return!1;if(s!==null)switch(s.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,s,r,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=s,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var la=/[\-:]([a-z])/g;function oa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(la,oa);ie[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(la,oa);ie[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(la,oa);ie[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function ca(e,t,s,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(lu(t,s,i,r)&&(s=null),r||i===null?iu(t)&&(s===null?e.removeAttribute(t):e.setAttribute(t,""+s)):i.mustUseProperty?e[i.propertyName]=s===null?i.type===3?!1:"":s:(t=i.attributeName,r=i.attributeNamespace,s===null?e.removeAttribute(t):(i=i.type,s=i===3||i===4&&s===!0?"":""+s,r?e.setAttributeNS(r,t,s):e.setAttribute(t,s))))}var tt=su.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ys=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),Qt=Symbol.for("react.fragment"),da=Symbol.for("react.strict_mode"),ui=Symbol.for("react.profiler"),Eo=Symbol.for("react.provider"),Fo=Symbol.for("react.context"),ua=Symbol.for("react.forward_ref"),pi=Symbol.for("react.suspense"),hi=Symbol.for("react.suspense_list"),pa=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),Ao=Symbol.for("react.offscreen"),al=Symbol.iterator;function bn(e){return e===null||typeof e!="object"?null:(e=al&&e[al]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,Dr;function An(e){if(Dr===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);Dr=t&&t[1]||""}return`
`+Dr+e}var Ir=!1;function Wr(e,t){if(!e||Ir)return"";Ir=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=r.stack.split(`
`),l=i.length-1,o=a.length-1;1<=l&&0<=o&&i[l]!==a[o];)o--;for(;1<=l&&0<=o;l--,o--)if(i[l]!==a[o]){if(l!==1||o!==1)do if(l--,o--,0>o||i[l]!==a[o]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=o);break}}}finally{Ir=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?An(e):""}function ou(e){switch(e.tag){case 5:return An(e.type);case 16:return An("Lazy");case 13:return An("Suspense");case 19:return An("SuspenseList");case 0:case 2:case 15:return e=Wr(e.type,!1),e;case 11:return e=Wr(e.type.render,!1),e;case 1:return e=Wr(e.type,!0),e;default:return""}}function fi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qt:return"Fragment";case Gt:return"Portal";case ui:return"Profiler";case da:return"StrictMode";case pi:return"Suspense";case hi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fo:return(e.displayName||"Context")+".Consumer";case Eo:return(e._context.displayName||"Context")+".Provider";case ua:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pa:return t=e.displayName||null,t!==null?t:fi(e.type)||"Memo";case st:t=e._payload,e=e._init;try{return fi(e(t))}catch{}}return null}function cu(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fi(t);case 8:return t===da?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function du(e){var t=Mo(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var i=s.get,a=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vs(e){e._valueTracker||(e._valueTracker=du(e))}function To(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),r="";return e&&(r=Mo(e)?e.checked?"true":"false":e.value),e=r,e!==s?(t.setValue(e),!0):!1}function Ks(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function mi(e,t){var s=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function ll(e,t){var s=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;s=yt(t.value!=null?t.value:s),e._wrapperState={initialChecked:r,initialValue:s,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lo(e,t){t=t.checked,t!=null&&ca(e,"checked",t,!1)}function xi(e,t){Lo(e,t);var s=yt(t.value),r=t.type;if(s!=null)r==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gi(e,t.type,s):t.hasOwnProperty("defaultValue")&&gi(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ol(e,t,s){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,s||t===e.value||(e.value=t),e.defaultValue=t}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function gi(e,t,s){(t!=="number"||Ks(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var Mn=Array.isArray;function an(e,t,s,r){if(e=e.options,t){t={};for(var i=0;i<s.length;i++)t["$"+s[i]]=!0;for(s=0;s<e.length;s++)i=t.hasOwnProperty("$"+e[s].value),e[s].selected!==i&&(e[s].selected=i),i&&r&&(e[s].defaultSelected=!0)}else{for(s=""+yt(s),t=null,i=0;i<e.length;i++){if(e[i].value===s){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function yi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cl(e,t){var s=t.value;if(s==null){if(s=t.children,t=t.defaultValue,s!=null){if(t!=null)throw Error(N(92));if(Mn(s)){if(1<s.length)throw Error(N(93));s=s[0]}t=s}t==null&&(t=""),s=t}e._wrapperState={initialValue:yt(s)}}function Bo(e,t){var s=yt(t.value),r=yt(t.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),t.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),r!=null&&(e.defaultValue=""+r)}function dl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ro(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ro(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var js,Do=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,s,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,s,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(js=js||document.createElement("div"),js.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=js.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kn(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var Bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uu=["Webkit","ms","Moz","O"];Object.keys(Bn).forEach(function(e){uu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bn[t]=Bn[e]})});function Io(e,t,s){return t==null||typeof t=="boolean"||t===""?"":s||typeof t!="number"||t===0||Bn.hasOwnProperty(e)&&Bn[e]?(""+t).trim():t+"px"}function Wo(e,t){e=e.style;for(var s in t)if(t.hasOwnProperty(s)){var r=s.indexOf("--")===0,i=Io(s,t[s],r);s==="float"&&(s="cssFloat"),r?e.setProperty(s,i):e[s]=i}}var pu=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ji(e,t){if(t){if(pu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function ki(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ni=null;function ha(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wi=null,ln=null,on=null;function ul(e){if(e=ps(e)){if(typeof wi!="function")throw Error(N(280));var t=e.stateNode;t&&(t=kr(t),wi(e.stateNode,e.type,t))}}function Uo(e){ln?on?on.push(e):on=[e]:ln=e}function Oo(){if(ln){var e=ln,t=on;if(on=ln=null,ul(e),t)for(e=0;e<t.length;e++)ul(t[e])}}function Vo(e,t){return e(t)}function $o(){}var Ur=!1;function Ho(e,t,s){if(Ur)return e(t,s);Ur=!0;try{return Vo(e,t,s)}finally{Ur=!1,(ln!==null||on!==null)&&($o(),Oo())}}function Gn(e,t){var s=e.stateNode;if(s===null)return null;var r=kr(s);if(r===null)return null;s=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(N(231,t,typeof s));return s}var bi=!1;if(Xe)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){bi=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{bi=!1}function hu(e,t,s,r,i,a,l,o,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(s,d)}catch(y){this.onError(y)}}var Rn=!1,Gs=null,Qs=!1,_i=null,fu={onError:function(e){Rn=!0,Gs=e}};function mu(e,t,s,r,i,a,l,o,c){Rn=!1,Gs=null,hu.apply(fu,arguments)}function xu(e,t,s,r,i,a,l,o,c){if(mu.apply(this,arguments),Rn){if(Rn){var d=Gs;Rn=!1,Gs=null}else throw Error(N(198));Qs||(Qs=!0,_i=d)}}function Ot(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function Ko(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pl(e){if(Ot(e)!==e)throw Error(N(188))}function gu(e){var t=e.alternate;if(!t){if(t=Ot(e),t===null)throw Error(N(188));return t!==e?null:e}for(var s=e,r=t;;){var i=s.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){s=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===s)return pl(i),e;if(a===r)return pl(i),t;a=a.sibling}throw Error(N(188))}if(s.return!==r.return)s=i,r=a;else{for(var l=!1,o=i.child;o;){if(o===s){l=!0,s=i,r=a;break}if(o===r){l=!0,r=i,s=a;break}o=o.sibling}if(!l){for(o=a.child;o;){if(o===s){l=!0,s=a,r=i;break}if(o===r){l=!0,r=a,s=i;break}o=o.sibling}if(!l)throw Error(N(189))}}if(s.alternate!==r)throw Error(N(190))}if(s.tag!==3)throw Error(N(188));return s.stateNode.current===s?e:t}function Go(e){return e=gu(e),e!==null?Qo(e):null}function Qo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qo(e);if(t!==null)return t;e=e.sibling}return null}var qo=_e.unstable_scheduleCallback,hl=_e.unstable_cancelCallback,yu=_e.unstable_shouldYield,vu=_e.unstable_requestPaint,G=_e.unstable_now,ju=_e.unstable_getCurrentPriorityLevel,fa=_e.unstable_ImmediatePriority,Yo=_e.unstable_UserBlockingPriority,qs=_e.unstable_NormalPriority,ku=_e.unstable_LowPriority,Xo=_e.unstable_IdlePriority,gr=null,$e=null;function Nu(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(gr,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:_u,wu=Math.log,bu=Math.LN2;function _u(e){return e>>>=0,e===0?32:31-(wu(e)/bu|0)|0}var ks=64,Ns=4194304;function Tn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ys(e,t){var s=e.pendingLanes;if(s===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,l=s&268435455;if(l!==0){var o=l&~i;o!==0?r=Tn(o):(a&=l,a!==0&&(r=Tn(a)))}else l=s&~i,l!==0?r=Tn(l):a!==0&&(r=Tn(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=s&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)s=31-De(t),i=1<<s,r|=e[s],t&=~i;return r}function Cu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Su(e,t){for(var s=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-De(a),o=1<<l,c=i[l];c===-1?(!(o&s)||o&r)&&(i[l]=Cu(o,t)):c<=t&&(e.expiredLanes|=o),a&=~o}}function Ci(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zo(){var e=ks;return ks<<=1,!(ks&4194240)&&(ks=64),e}function Or(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function ds(e,t,s){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=s}function Pu(e,t){var s=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<s;){var i=31-De(s),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,s&=~a}}function ma(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var r=31-De(s),i=1<<r;i&t|e[r]&t&&(e[r]|=t),s&=~i}}var R=0;function Jo(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ec,xa,tc,nc,sc,Si=!1,ws=[],ct=null,dt=null,ut=null,Qn=new Map,qn=new Map,it=[],zu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fl(e,t){switch(e){case"focusin":case"focusout":ct=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":Qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qn.delete(t.pointerId)}}function Cn(e,t,s,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:s,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ps(t),t!==null&&xa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Eu(e,t,s,r,i){switch(t){case"focusin":return ct=Cn(ct,e,t,s,r,i),!0;case"dragenter":return dt=Cn(dt,e,t,s,r,i),!0;case"mouseover":return ut=Cn(ut,e,t,s,r,i),!0;case"pointerover":var a=i.pointerId;return Qn.set(a,Cn(Qn.get(a)||null,e,t,s,r,i)),!0;case"gotpointercapture":return a=i.pointerId,qn.set(a,Cn(qn.get(a)||null,e,t,s,r,i)),!0}return!1}function rc(e){var t=Ft(e.target);if(t!==null){var s=Ot(t);if(s!==null){if(t=s.tag,t===13){if(t=Ko(s),t!==null){e.blockedOn=t,sc(e.priority,function(){tc(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=Pi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var r=new s.constructor(s.type,s);Ni=r,s.target.dispatchEvent(r),Ni=null}else return t=ps(s),t!==null&&xa(t),e.blockedOn=s,!1;t.shift()}return!0}function ml(e,t,s){Bs(e)&&s.delete(t)}function Fu(){Si=!1,ct!==null&&Bs(ct)&&(ct=null),dt!==null&&Bs(dt)&&(dt=null),ut!==null&&Bs(ut)&&(ut=null),Qn.forEach(ml),qn.forEach(ml)}function Sn(e,t){e.blockedOn===t&&(e.blockedOn=null,Si||(Si=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,Fu)))}function Yn(e){function t(i){return Sn(i,e)}if(0<ws.length){Sn(ws[0],e);for(var s=1;s<ws.length;s++){var r=ws[s];r.blockedOn===e&&(r.blockedOn=null)}}for(ct!==null&&Sn(ct,e),dt!==null&&Sn(dt,e),ut!==null&&Sn(ut,e),Qn.forEach(t),qn.forEach(t),s=0;s<it.length;s++)r=it[s],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(s=it[0],s.blockedOn===null);)rc(s),s.blockedOn===null&&it.shift()}var cn=tt.ReactCurrentBatchConfig,Xs=!0;function Au(e,t,s,r){var i=R,a=cn.transition;cn.transition=null;try{R=1,ga(e,t,s,r)}finally{R=i,cn.transition=a}}function Mu(e,t,s,r){var i=R,a=cn.transition;cn.transition=null;try{R=4,ga(e,t,s,r)}finally{R=i,cn.transition=a}}function ga(e,t,s,r){if(Xs){var i=Pi(e,t,s,r);if(i===null)Zr(e,t,r,Zs,s),fl(e,r);else if(Eu(i,e,t,s,r))r.stopPropagation();else if(fl(e,r),t&4&&-1<zu.indexOf(e)){for(;i!==null;){var a=ps(i);if(a!==null&&ec(a),a=Pi(e,t,s,r),a===null&&Zr(e,t,r,Zs,s),a===i)break;i=a}i!==null&&r.stopPropagation()}else Zr(e,t,r,null,s)}}var Zs=null;function Pi(e,t,s,r){if(Zs=null,e=ha(r),e=Ft(e),e!==null)if(t=Ot(e),t===null)e=null;else if(s=t.tag,s===13){if(e=Ko(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zs=e,null}function ic(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ju()){case fa:return 1;case Yo:return 4;case qs:case ku:return 16;case Xo:return 536870912;default:return 16}default:return 16}}var lt=null,ya=null,Rs=null;function ac(){if(Rs)return Rs;var e,t=ya,s=t.length,r,i="value"in lt?lt.value:lt.textContent,a=i.length;for(e=0;e<s&&t[e]===i[e];e++);var l=s-e;for(r=1;r<=l&&t[s-r]===i[a-r];r++);return Rs=i.slice(e,1<r?1-r:void 0)}function Ds(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bs(){return!0}function xl(){return!1}function Se(e){function t(s,r,i,a,l){this._reactName=s,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(s=e[o],this[o]=s?s(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?bs:xl,this.isPropagationStopped=xl,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=bs)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=bs)},persist:function(){},isPersistent:bs}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},va=Se(jn),us=$({},jn,{view:0,detail:0}),Tu=Se(us),Vr,$r,Pn,yr=$({},us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ja,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Vr=e.screenX-Pn.screenX,$r=e.screenY-Pn.screenY):$r=Vr=0,Pn=e),Vr)},movementY:function(e){return"movementY"in e?e.movementY:$r}}),gl=Se(yr),Lu=$({},yr,{dataTransfer:0}),Bu=Se(Lu),Ru=$({},us,{relatedTarget:0}),Hr=Se(Ru),Du=$({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Iu=Se(Du),Wu=$({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Uu=Se(Wu),Ou=$({},jn,{data:0}),yl=Se(Ou),Vu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$u={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ku(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hu[e])?!!t[e]:!1}function ja(){return Ku}var Gu=$({},us,{key:function(e){if(e.key){var t=Vu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ds(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$u[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ja,charCode:function(e){return e.type==="keypress"?Ds(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ds(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qu=Se(Gu),qu=$({},yr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vl=Se(qu),Yu=$({},us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ja}),Xu=Se(Yu),Zu=$({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ju=Se(Zu),ep=$({},yr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tp=Se(ep),np=[9,13,27,32],ka=Xe&&"CompositionEvent"in window,Dn=null;Xe&&"documentMode"in document&&(Dn=document.documentMode);var sp=Xe&&"TextEvent"in window&&!Dn,lc=Xe&&(!ka||Dn&&8<Dn&&11>=Dn),jl=" ",kl=!1;function oc(e,t){switch(e){case"keyup":return np.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qt=!1;function rp(e,t){switch(e){case"compositionend":return cc(t);case"keypress":return t.which!==32?null:(kl=!0,jl);case"textInput":return e=t.data,e===jl&&kl?null:e;default:return null}}function ip(e,t){if(qt)return e==="compositionend"||!ka&&oc(e,t)?(e=ac(),Rs=ya=lt=null,qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lc&&t.locale!=="ko"?null:t.data;default:return null}}var ap={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ap[e.type]:t==="textarea"}function dc(e,t,s,r){Uo(r),t=Js(t,"onChange"),0<t.length&&(s=new va("onChange","change",null,s,r),e.push({event:s,listeners:t}))}var In=null,Xn=null;function lp(e){kc(e,0)}function vr(e){var t=Zt(e);if(To(t))return e}function op(e,t){if(e==="change")return t}var uc=!1;if(Xe){var Kr;if(Xe){var Gr="oninput"in document;if(!Gr){var wl=document.createElement("div");wl.setAttribute("oninput","return;"),Gr=typeof wl.oninput=="function"}Kr=Gr}else Kr=!1;uc=Kr&&(!document.documentMode||9<document.documentMode)}function bl(){In&&(In.detachEvent("onpropertychange",pc),Xn=In=null)}function pc(e){if(e.propertyName==="value"&&vr(Xn)){var t=[];dc(t,Xn,e,ha(e)),Ho(lp,t)}}function cp(e,t,s){e==="focusin"?(bl(),In=t,Xn=s,In.attachEvent("onpropertychange",pc)):e==="focusout"&&bl()}function dp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vr(Xn)}function up(e,t){if(e==="click")return vr(t)}function pp(e,t){if(e==="input"||e==="change")return vr(t)}function hp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:hp;function Zn(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),r=Object.keys(t);if(s.length!==r.length)return!1;for(r=0;r<s.length;r++){var i=s[r];if(!di.call(t,i)||!We(e[i],t[i]))return!1}return!0}function _l(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cl(e,t){var s=_l(e);e=0;for(var r;s;){if(s.nodeType===3){if(r=e+s.textContent.length,e<=t&&r>=t)return{node:s,offset:t-e};e=r}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=_l(s)}}function hc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fc(){for(var e=window,t=Ks();t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=Ks(e.document)}return t}function Na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fp(e){var t=fc(),s=e.focusedElem,r=e.selectionRange;if(t!==s&&s&&s.ownerDocument&&hc(s.ownerDocument.documentElement,s)){if(r!==null&&Na(s)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in s)s.selectionStart=t,s.selectionEnd=Math.min(e,s.value.length);else if(e=(t=s.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=s.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Cl(s,a);var l=Cl(s,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=s;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<t.length;s++)e=t[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mp=Xe&&"documentMode"in document&&11>=document.documentMode,Yt=null,zi=null,Wn=null,Ei=!1;function Sl(e,t,s){var r=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ei||Yt==null||Yt!==Ks(r)||(r=Yt,"selectionStart"in r&&Na(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wn&&Zn(Wn,r)||(Wn=r,r=Js(zi,"onSelect"),0<r.length&&(t=new va("onSelect","select",null,t,s),e.push({event:t,listeners:r}),t.target=Yt)))}function _s(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var Xt={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionend:_s("Transition","TransitionEnd")},Qr={},mc={};Xe&&(mc=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function jr(e){if(Qr[e])return Qr[e];if(!Xt[e])return e;var t=Xt[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in mc)return Qr[e]=t[s];return e}var xc=jr("animationend"),gc=jr("animationiteration"),yc=jr("animationstart"),vc=jr("transitionend"),jc=new Map,Pl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kt(e,t){jc.set(e,t),Ut(t,[e])}for(var qr=0;qr<Pl.length;qr++){var Yr=Pl[qr],xp=Yr.toLowerCase(),gp=Yr[0].toUpperCase()+Yr.slice(1);kt(xp,"on"+gp)}kt(xc,"onAnimationEnd");kt(gc,"onAnimationIteration");kt(yc,"onAnimationStart");kt("dblclick","onDoubleClick");kt("focusin","onFocus");kt("focusout","onBlur");kt(vc,"onTransitionEnd");pn("onMouseEnter",["mouseout","mouseover"]);pn("onMouseLeave",["mouseout","mouseover"]);pn("onPointerEnter",["pointerout","pointerover"]);pn("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));function zl(e,t,s){var r=e.type||"unknown-event";e.currentTarget=s,xu(r,t,void 0,e),e.currentTarget=null}function kc(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var r=e[s],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var o=r[l],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==a&&i.isPropagationStopped())break e;zl(i,o,d),a=c}else for(l=0;l<r.length;l++){if(o=r[l],c=o.instance,d=o.currentTarget,o=o.listener,c!==a&&i.isPropagationStopped())break e;zl(i,o,d),a=c}}}if(Qs)throw e=_i,Qs=!1,_i=null,e}function I(e,t){var s=t[Li];s===void 0&&(s=t[Li]=new Set);var r=e+"__bubble";s.has(r)||(Nc(t,e,2,!1),s.add(r))}function Xr(e,t,s){var r=0;t&&(r|=4),Nc(s,e,r,t)}var Cs="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[Cs]){e[Cs]=!0,zo.forEach(function(s){s!=="selectionchange"&&(yp.has(s)||Xr(s,!1,e),Xr(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cs]||(t[Cs]=!0,Xr("selectionchange",!1,t))}}function Nc(e,t,s,r){switch(ic(t)){case 1:var i=Au;break;case 4:i=Mu;break;default:i=ga}s=i.bind(null,t,s,e),i=void 0,!bi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,s,{capture:!0,passive:i}):e.addEventListener(t,s,!0):i!==void 0?e.addEventListener(t,s,{passive:i}):e.addEventListener(t,s,!1)}function Zr(e,t,s,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;o!==null;){if(l=Ft(o),l===null)return;if(c=l.tag,c===5||c===6){r=a=l;continue e}o=o.parentNode}}r=r.return}Ho(function(){var d=a,y=ha(s),p=[];e:{var f=jc.get(e);if(f!==void 0){var j=va,x=e;switch(e){case"keypress":if(Ds(s)===0)break e;case"keydown":case"keyup":j=Qu;break;case"focusin":x="focus",j=Hr;break;case"focusout":x="blur",j=Hr;break;case"beforeblur":case"afterblur":j=Hr;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=gl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Bu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Xu;break;case xc:case gc:case yc:j=Iu;break;case vc:j=Ju;break;case"scroll":j=Tu;break;case"wheel":j=tp;break;case"copy":case"cut":case"paste":j=Uu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=vl}var v=(t&4)!==0,C=!v&&e==="scroll",h=v?f!==null?f+"Capture":null:f;v=[];for(var u=d,g;u!==null;){g=u;var m=g.stateNode;if(g.tag===5&&m!==null&&(g=m,h!==null&&(m=Gn(u,h),m!=null&&v.push(es(u,m,g)))),C)break;u=u.return}0<v.length&&(f=new j(f,x,null,s,y),p.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",f&&s!==Ni&&(x=s.relatedTarget||s.fromElement)&&(Ft(x)||x[Ze]))break e;if((j||f)&&(f=y.window===y?y:(f=y.ownerDocument)?f.defaultView||f.parentWindow:window,j?(x=s.relatedTarget||s.toElement,j=d,x=x?Ft(x):null,x!==null&&(C=Ot(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(j=null,x=d),j!==x)){if(v=gl,m="onMouseLeave",h="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(v=vl,m="onPointerLeave",h="onPointerEnter",u="pointer"),C=j==null?f:Zt(j),g=x==null?f:Zt(x),f=new v(m,u+"leave",j,s,y),f.target=C,f.relatedTarget=g,m=null,Ft(y)===d&&(v=new v(h,u+"enter",x,s,y),v.target=g,v.relatedTarget=C,m=v),C=m,j&&x)t:{for(v=j,h=x,u=0,g=v;g;g=Kt(g))u++;for(g=0,m=h;m;m=Kt(m))g++;for(;0<u-g;)v=Kt(v),u--;for(;0<g-u;)h=Kt(h),g--;for(;u--;){if(v===h||h!==null&&v===h.alternate)break t;v=Kt(v),h=Kt(h)}v=null}else v=null;j!==null&&El(p,f,j,v,!1),x!==null&&C!==null&&El(p,C,x,v,!0)}}e:{if(f=d?Zt(d):window,j=f.nodeName&&f.nodeName.toLowerCase(),j==="select"||j==="input"&&f.type==="file")var k=op;else if(Nl(f))if(uc)k=pp;else{k=dp;var _=cp}else(j=f.nodeName)&&j.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=up);if(k&&(k=k(e,d))){dc(p,k,s,y);break e}_&&_(e,f,d),e==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&gi(f,"number",f.value)}switch(_=d?Zt(d):window,e){case"focusin":(Nl(_)||_.contentEditable==="true")&&(Yt=_,zi=d,Wn=null);break;case"focusout":Wn=zi=Yt=null;break;case"mousedown":Ei=!0;break;case"contextmenu":case"mouseup":case"dragend":Ei=!1,Sl(p,s,y);break;case"selectionchange":if(mp)break;case"keydown":case"keyup":Sl(p,s,y)}var P;if(ka)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else qt?oc(e,s)&&(A="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(A="onCompositionStart");A&&(lc&&s.locale!=="ko"&&(qt||A!=="onCompositionStart"?A==="onCompositionEnd"&&qt&&(P=ac()):(lt=y,ya="value"in lt?lt.value:lt.textContent,qt=!0)),_=Js(d,A),0<_.length&&(A=new yl(A,e,null,s,y),p.push({event:A,listeners:_}),P?A.data=P:(P=cc(s),P!==null&&(A.data=P)))),(P=sp?rp(e,s):ip(e,s))&&(d=Js(d,"onBeforeInput"),0<d.length&&(y=new yl("onBeforeInput","beforeinput",null,s,y),p.push({event:y,listeners:d}),y.data=P))}kc(p,t)})}function es(e,t,s){return{instance:e,listener:t,currentTarget:s}}function Js(e,t){for(var s=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Gn(e,s),a!=null&&r.unshift(es(e,a,i)),a=Gn(e,t),a!=null&&r.push(es(e,a,i))),e=e.return}return r}function Kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function El(e,t,s,r,i){for(var a=t._reactName,l=[];s!==null&&s!==r;){var o=s,c=o.alternate,d=o.stateNode;if(c!==null&&c===r)break;o.tag===5&&d!==null&&(o=d,i?(c=Gn(s,a),c!=null&&l.unshift(es(s,c,o))):i||(c=Gn(s,a),c!=null&&l.push(es(s,c,o)))),s=s.return}l.length!==0&&e.push({event:t,listeners:l})}var vp=/\r\n?/g,jp=/\u0000|\uFFFD/g;function Fl(e){return(typeof e=="string"?e:""+e).replace(vp,`
`).replace(jp,"")}function Ss(e,t,s){if(t=Fl(t),Fl(e)!==t&&s)throw Error(N(425))}function er(){}var Fi=null,Ai=null;function Mi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ti=typeof setTimeout=="function"?setTimeout:void 0,kp=typeof clearTimeout=="function"?clearTimeout:void 0,Al=typeof Promise=="function"?Promise:void 0,Np=typeof queueMicrotask=="function"?queueMicrotask:typeof Al<"u"?function(e){return Al.resolve(null).then(e).catch(wp)}:Ti;function wp(e){setTimeout(function(){throw e})}function Jr(e,t){var s=t,r=0;do{var i=s.nextSibling;if(e.removeChild(s),i&&i.nodeType===8)if(s=i.data,s==="/$"){if(r===0){e.removeChild(i),Yn(t);return}r--}else s!=="$"&&s!=="$?"&&s!=="$!"||r++;s=i}while(s);Yn(t)}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ml(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(t===0)return e;t--}else s==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+kn,ts="__reactProps$"+kn,Ze="__reactContainer$"+kn,Li="__reactEvents$"+kn,bp="__reactListeners$"+kn,_p="__reactHandles$"+kn;function Ft(e){var t=e[Ve];if(t)return t;for(var s=e.parentNode;s;){if(t=s[Ze]||s[Ve]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=Ml(e);e!==null;){if(s=e[Ve])return s;e=Ml(e)}return t}e=s,s=e.parentNode}return null}function ps(e){return e=e[Ve]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function kr(e){return e[ts]||null}var Bi=[],Jt=-1;function Nt(e){return{current:e}}function W(e){0>Jt||(e.current=Bi[Jt],Bi[Jt]=null,Jt--)}function D(e,t){Jt++,Bi[Jt]=e.current,e.current=t}var vt={},de=Nt(vt),ve=Nt(!1),Bt=vt;function hn(e,t){var s=e.type.contextTypes;if(!s)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in s)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function je(e){return e=e.childContextTypes,e!=null}function tr(){W(ve),W(de)}function Tl(e,t,s){if(de.current!==vt)throw Error(N(168));D(de,t),D(ve,s)}function wc(e,t,s){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return s;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,cu(e)||"Unknown",i));return $({},s,r)}function nr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,Bt=de.current,D(de,e),D(ve,ve.current),!0}function Ll(e,t,s){var r=e.stateNode;if(!r)throw Error(N(169));s?(e=wc(e,t,Bt),r.__reactInternalMemoizedMergedChildContext=e,W(ve),W(de),D(de,e)):W(ve),D(ve,s)}var Ge=null,Nr=!1,ei=!1;function bc(e){Ge===null?Ge=[e]:Ge.push(e)}function Cp(e){Nr=!0,bc(e)}function wt(){if(!ei&&Ge!==null){ei=!0;var e=0,t=R;try{var s=Ge;for(R=1;e<s.length;e++){var r=s[e];do r=r(!0);while(r!==null)}Ge=null,Nr=!1}catch(i){throw Ge!==null&&(Ge=Ge.slice(e+1)),qo(fa,wt),i}finally{R=t,ei=!1}}return null}var en=[],tn=0,sr=null,rr=0,Pe=[],ze=0,Rt=null,Qe=1,qe="";function zt(e,t){en[tn++]=rr,en[tn++]=sr,sr=e,rr=t}function _c(e,t,s){Pe[ze++]=Qe,Pe[ze++]=qe,Pe[ze++]=Rt,Rt=e;var r=Qe;e=qe;var i=32-De(r)-1;r&=~(1<<i),s+=1;var a=32-De(t)+i;if(30<a){var l=i-i%5;a=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Qe=1<<32-De(t)+i|s<<i|r,qe=a+e}else Qe=1<<a|s<<i|r,qe=e}function wa(e){e.return!==null&&(zt(e,1),_c(e,1,0))}function ba(e){for(;e===sr;)sr=en[--tn],en[tn]=null,rr=en[--tn],en[tn]=null;for(;e===Rt;)Rt=Pe[--ze],Pe[ze]=null,qe=Pe[--ze],Pe[ze]=null,Qe=Pe[--ze],Pe[ze]=null}var be=null,we=null,U=!1,Re=null;function Cc(e,t){var s=Ee(5,null,null,0);s.elementType="DELETED",s.stateNode=t,s.return=e,t=e.deletions,t===null?(e.deletions=[s],e.flags|=16):t.push(s)}function Bl(e,t){switch(e.tag){case 5:var s=e.type;return t=t.nodeType!==1||s.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,we=pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(s=Rt!==null?{id:Qe,overflow:qe}:null,e.memoizedState={dehydrated:t,treeContext:s,retryLane:1073741824},s=Ee(18,null,null,0),s.stateNode=t,s.return=e,e.child=s,be=e,we=null,!0):!1;default:return!1}}function Ri(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Di(e){if(U){var t=we;if(t){var s=t;if(!Bl(e,t)){if(Ri(e))throw Error(N(418));t=pt(s.nextSibling);var r=be;t&&Bl(e,t)?Cc(r,s):(e.flags=e.flags&-4097|2,U=!1,be=e)}}else{if(Ri(e))throw Error(N(418));e.flags=e.flags&-4097|2,U=!1,be=e}}}function Rl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function Ps(e){if(e!==be)return!1;if(!U)return Rl(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Mi(e.type,e.memoizedProps)),t&&(t=we)){if(Ri(e))throw Sc(),Error(N(418));for(;t;)Cc(e,t),t=pt(t.nextSibling)}if(Rl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(t===0){we=pt(e.nextSibling);break e}t--}else s!=="$"&&s!=="$!"&&s!=="$?"||t++}e=e.nextSibling}we=null}}else we=be?pt(e.stateNode.nextSibling):null;return!0}function Sc(){for(var e=we;e;)e=pt(e.nextSibling)}function fn(){we=be=null,U=!1}function _a(e){Re===null?Re=[e]:Re.push(e)}var Sp=tt.ReactCurrentBatchConfig;function zn(e,t,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(N(309));var r=s.stateNode}if(!r)throw Error(N(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var o=i.refs;l===null?delete o[a]:o[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(N(284));if(!s._owner)throw Error(N(290,e))}return e}function zs(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Dl(e){var t=e._init;return t(e._payload)}function Pc(e){function t(h,u){if(e){var g=h.deletions;g===null?(h.deletions=[u],h.flags|=16):g.push(u)}}function s(h,u){if(!e)return null;for(;u!==null;)t(h,u),u=u.sibling;return null}function r(h,u){for(h=new Map;u!==null;)u.key!==null?h.set(u.key,u):h.set(u.index,u),u=u.sibling;return h}function i(h,u){return h=xt(h,u),h.index=0,h.sibling=null,h}function a(h,u,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<u?(h.flags|=2,u):g):(h.flags|=2,u)):(h.flags|=1048576,u)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function o(h,u,g,m){return u===null||u.tag!==6?(u=li(g,h.mode,m),u.return=h,u):(u=i(u,g),u.return=h,u)}function c(h,u,g,m){var k=g.type;return k===Qt?y(h,u,g.props.children,m,g.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===st&&Dl(k)===u.type)?(m=i(u,g.props),m.ref=zn(h,u,g),m.return=h,m):(m=Hs(g.type,g.key,g.props,null,h.mode,m),m.ref=zn(h,u,g),m.return=h,m)}function d(h,u,g,m){return u===null||u.tag!==4||u.stateNode.containerInfo!==g.containerInfo||u.stateNode.implementation!==g.implementation?(u=oi(g,h.mode,m),u.return=h,u):(u=i(u,g.children||[]),u.return=h,u)}function y(h,u,g,m,k){return u===null||u.tag!==7?(u=Lt(g,h.mode,m,k),u.return=h,u):(u=i(u,g),u.return=h,u)}function p(h,u,g){if(typeof u=="string"&&u!==""||typeof u=="number")return u=li(""+u,h.mode,g),u.return=h,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ys:return g=Hs(u.type,u.key,u.props,null,h.mode,g),g.ref=zn(h,null,u),g.return=h,g;case Gt:return u=oi(u,h.mode,g),u.return=h,u;case st:var m=u._init;return p(h,m(u._payload),g)}if(Mn(u)||bn(u))return u=Lt(u,h.mode,g,null),u.return=h,u;zs(h,u)}return null}function f(h,u,g,m){var k=u!==null?u.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:o(h,u,""+g,m);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ys:return g.key===k?c(h,u,g,m):null;case Gt:return g.key===k?d(h,u,g,m):null;case st:return k=g._init,f(h,u,k(g._payload),m)}if(Mn(g)||bn(g))return k!==null?null:y(h,u,g,m,null);zs(h,g)}return null}function j(h,u,g,m,k){if(typeof m=="string"&&m!==""||typeof m=="number")return h=h.get(g)||null,o(u,h,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ys:return h=h.get(m.key===null?g:m.key)||null,c(u,h,m,k);case Gt:return h=h.get(m.key===null?g:m.key)||null,d(u,h,m,k);case st:var _=m._init;return j(h,u,g,_(m._payload),k)}if(Mn(m)||bn(m))return h=h.get(g)||null,y(u,h,m,k,null);zs(u,m)}return null}function x(h,u,g,m){for(var k=null,_=null,P=u,A=u=0,w=null;P!==null&&A<g.length;A++){P.index>A?(w=P,P=null):w=P.sibling;var F=f(h,P,g[A],m);if(F===null){P===null&&(P=w);break}e&&P&&F.alternate===null&&t(h,P),u=a(F,u,A),_===null?k=F:_.sibling=F,_=F,P=w}if(A===g.length)return s(h,P),U&&zt(h,A),k;if(P===null){for(;A<g.length;A++)P=p(h,g[A],m),P!==null&&(u=a(P,u,A),_===null?k=P:_.sibling=P,_=P);return U&&zt(h,A),k}for(P=r(h,P);A<g.length;A++)w=j(P,h,A,g[A],m),w!==null&&(e&&w.alternate!==null&&P.delete(w.key===null?A:w.key),u=a(w,u,A),_===null?k=w:_.sibling=w,_=w);return e&&P.forEach(function(J){return t(h,J)}),U&&zt(h,A),k}function v(h,u,g,m){var k=bn(g);if(typeof k!="function")throw Error(N(150));if(g=k.call(g),g==null)throw Error(N(151));for(var _=k=null,P=u,A=u=0,w=null,F=g.next();P!==null&&!F.done;A++,F=g.next()){P.index>A?(w=P,P=null):w=P.sibling;var J=f(h,P,F.value,m);if(J===null){P===null&&(P=w);break}e&&P&&J.alternate===null&&t(h,P),u=a(J,u,A),_===null?k=J:_.sibling=J,_=J,P=w}if(F.done)return s(h,P),U&&zt(h,A),k;if(P===null){for(;!F.done;A++,F=g.next())F=p(h,F.value,m),F!==null&&(u=a(F,u,A),_===null?k=F:_.sibling=F,_=F);return U&&zt(h,A),k}for(P=r(h,P);!F.done;A++,F=g.next())F=j(P,h,A,F.value,m),F!==null&&(e&&F.alternate!==null&&P.delete(F.key===null?A:F.key),u=a(F,u,A),_===null?k=F:_.sibling=F,_=F);return e&&P.forEach(function(Ct){return t(h,Ct)}),U&&zt(h,A),k}function C(h,u,g,m){if(typeof g=="object"&&g!==null&&g.type===Qt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ys:e:{for(var k=g.key,_=u;_!==null;){if(_.key===k){if(k=g.type,k===Qt){if(_.tag===7){s(h,_.sibling),u=i(_,g.props.children),u.return=h,h=u;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===st&&Dl(k)===_.type){s(h,_.sibling),u=i(_,g.props),u.ref=zn(h,_,g),u.return=h,h=u;break e}s(h,_);break}else t(h,_);_=_.sibling}g.type===Qt?(u=Lt(g.props.children,h.mode,m,g.key),u.return=h,h=u):(m=Hs(g.type,g.key,g.props,null,h.mode,m),m.ref=zn(h,u,g),m.return=h,h=m)}return l(h);case Gt:e:{for(_=g.key;u!==null;){if(u.key===_)if(u.tag===4&&u.stateNode.containerInfo===g.containerInfo&&u.stateNode.implementation===g.implementation){s(h,u.sibling),u=i(u,g.children||[]),u.return=h,h=u;break e}else{s(h,u);break}else t(h,u);u=u.sibling}u=oi(g,h.mode,m),u.return=h,h=u}return l(h);case st:return _=g._init,C(h,u,_(g._payload),m)}if(Mn(g))return x(h,u,g,m);if(bn(g))return v(h,u,g,m);zs(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,u!==null&&u.tag===6?(s(h,u.sibling),u=i(u,g),u.return=h,h=u):(s(h,u),u=li(g,h.mode,m),u.return=h,h=u),l(h)):s(h,u)}return C}var mn=Pc(!0),zc=Pc(!1),ir=Nt(null),ar=null,nn=null,Ca=null;function Sa(){Ca=nn=ar=null}function Pa(e){var t=ir.current;W(ir),e._currentValue=t}function Ii(e,t,s){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===s)break;e=e.return}}function dn(e,t){ar=e,Ca=nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(Ca!==e)if(e={context:e,memoizedValue:t,next:null},nn===null){if(ar===null)throw Error(N(308));nn=e,ar.dependencies={lanes:0,firstContext:e}}else nn=nn.next=e;return t}var At=null;function za(e){At===null?At=[e]:At.push(e)}function Ec(e,t,s,r){var i=t.interleaved;return i===null?(s.next=s,za(t)):(s.next=i.next,i.next=s),t.interleaved=s,Je(e,r)}function Je(e,t){e.lanes|=t;var s=e.alternate;for(s!==null&&(s.lanes|=t),s=e,e=e.return;e!==null;)e.childLanes|=t,s=e.alternate,s!==null&&(s.childLanes|=t),s=e,e=e.return;return s.tag===3?s.stateNode:null}var rt=!1;function Ea(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ht(e,t,s){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Je(e,s)}return i=r.interleaved,i===null?(t.next=t,za(r)):(t.next=i.next,i.next=t),r.interleaved=t,Je(e,s)}function Is(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,s|=r,t.lanes=s,ma(e,s)}}function Il(e,t){var s=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,s===r)){var i=null,a=null;if(s=s.firstBaseUpdate,s!==null){do{var l={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};a===null?i=a=l:a=a.next=l,s=s.next}while(s!==null);a===null?i=a=t:a=a.next=t}else i=a=t;s={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}function lr(e,t,s,r){var i=e.updateQueue;rt=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,d=c.next;c.next=null,l===null?a=d:l.next=d,l=c;var y=e.alternate;y!==null&&(y=y.updateQueue,o=y.lastBaseUpdate,o!==l&&(o===null?y.firstBaseUpdate=d:o.next=d,y.lastBaseUpdate=c))}if(a!==null){var p=i.baseState;l=0,y=d=c=null,o=a;do{var f=o.lane,j=o.eventTime;if((r&f)===f){y!==null&&(y=y.next={eventTime:j,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=e,v=o;switch(f=t,j=s,v.tag){case 1:if(x=v.payload,typeof x=="function"){p=x.call(j,p,f);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,f=typeof x=="function"?x.call(j,p,f):x,f==null)break e;p=$({},p,f);break e;case 2:rt=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[o]:f.push(o))}else j={eventTime:j,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},y===null?(d=y=j,c=p):y=y.next=j,l|=f;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;f=o,o=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(y===null&&(c=p),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=y,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);It|=l,e.lanes=l,e.memoizedState=p}}function Wl(e,t,s){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=s,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var hs={},He=Nt(hs),ns=Nt(hs),ss=Nt(hs);function Mt(e){if(e===hs)throw Error(N(174));return e}function Fa(e,t){switch(D(ss,t),D(ns,e),D(He,hs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vi(t,e)}W(He),D(He,t)}function xn(){W(He),W(ns),W(ss)}function Ac(e){Mt(ss.current);var t=Mt(He.current),s=vi(t,e.type);t!==s&&(D(ns,e),D(He,s))}function Aa(e){ns.current===e&&(W(He),W(ns))}var O=Nt(0);function or(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ti=[];function Ma(){for(var e=0;e<ti.length;e++)ti[e]._workInProgressVersionPrimary=null;ti.length=0}var Ws=tt.ReactCurrentDispatcher,ni=tt.ReactCurrentBatchConfig,Dt=0,V=null,Y=null,te=null,cr=!1,Un=!1,rs=0,Pp=0;function le(){throw Error(N(321))}function Ta(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!We(e[s],t[s]))return!1;return!0}function La(e,t,s,r,i,a){if(Dt=a,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ws.current=e===null||e.memoizedState===null?Ap:Mp,e=s(r,i),Un){a=0;do{if(Un=!1,rs=0,25<=a)throw Error(N(301));a+=1,te=Y=null,t.updateQueue=null,Ws.current=Tp,e=s(r,i)}while(Un)}if(Ws.current=dr,t=Y!==null&&Y.next!==null,Dt=0,te=Y=V=null,cr=!1,t)throw Error(N(300));return e}function Ba(){var e=rs!==0;return rs=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?V.memoizedState=te=e:te=te.next=e,te}function Me(){if(Y===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=te===null?V.memoizedState:te.next;if(t!==null)te=t,Y=e;else{if(e===null)throw Error(N(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},te===null?V.memoizedState=te=e:te=te.next=e}return te}function is(e,t){return typeof t=="function"?t(e):t}function si(e){var t=Me(),s=t.queue;if(s===null)throw Error(N(311));s.lastRenderedReducer=e;var r=Y,i=r.baseQueue,a=s.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}r.baseQueue=i=a,s.pending=null}if(i!==null){a=i.next,r=r.baseState;var o=l=null,c=null,d=a;do{var y=d.lane;if((Dt&y)===y)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(o=c=p,l=r):c=c.next=p,V.lanes|=y,It|=y}d=d.next}while(d!==null&&d!==a);c===null?l=r:c.next=o,We(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,s.lastRenderedState=r}if(e=s.interleaved,e!==null){i=e;do a=i.lane,V.lanes|=a,It|=a,i=i.next;while(i!==e)}else i===null&&(s.lanes=0);return[t.memoizedState,s.dispatch]}function ri(e){var t=Me(),s=t.queue;if(s===null)throw Error(N(311));s.lastRenderedReducer=e;var r=s.dispatch,i=s.pending,a=t.memoizedState;if(i!==null){s.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);We(a,t.memoizedState)||(ye=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),s.lastRenderedState=a}return[a,r]}function Mc(){}function Tc(e,t){var s=V,r=Me(),i=t(),a=!We(r.memoizedState,i);if(a&&(r.memoizedState=i,ye=!0),r=r.queue,Ra(Rc.bind(null,s,r,e),[e]),r.getSnapshot!==t||a||te!==null&&te.memoizedState.tag&1){if(s.flags|=2048,as(9,Bc.bind(null,s,r,i,t),void 0,null),ne===null)throw Error(N(349));Dt&30||Lc(s,t,i)}return i}function Lc(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function Bc(e,t,s,r){t.value=s,t.getSnapshot=r,Dc(t)&&Ic(e)}function Rc(e,t,s){return s(function(){Dc(t)&&Ic(e)})}function Dc(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!We(e,s)}catch{return!0}}function Ic(e){var t=Je(e,1);t!==null&&Ie(t,e,1,-1)}function Ul(e){var t=Oe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:e},t.queue=e,e=e.dispatch=Fp.bind(null,V,e),[t.memoizedState,e]}function as(e,t,s,r){return e={tag:e,create:t,destroy:s,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(s=t.lastEffect,s===null?t.lastEffect=e.next=e:(r=s.next,s.next=e,e.next=r,t.lastEffect=e)),e}function Wc(){return Me().memoizedState}function Us(e,t,s,r){var i=Oe();V.flags|=e,i.memoizedState=as(1|t,s,void 0,r===void 0?null:r)}function wr(e,t,s,r){var i=Me();r=r===void 0?null:r;var a=void 0;if(Y!==null){var l=Y.memoizedState;if(a=l.destroy,r!==null&&Ta(r,l.deps)){i.memoizedState=as(t,s,a,r);return}}V.flags|=e,i.memoizedState=as(1|t,s,a,r)}function Ol(e,t){return Us(8390656,8,e,t)}function Ra(e,t){return wr(2048,8,e,t)}function Uc(e,t){return wr(4,2,e,t)}function Oc(e,t){return wr(4,4,e,t)}function Vc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $c(e,t,s){return s=s!=null?s.concat([e]):null,wr(4,4,Vc.bind(null,t,e),s)}function Da(){}function Hc(e,t){var s=Me();t=t===void 0?null:t;var r=s.memoizedState;return r!==null&&t!==null&&Ta(t,r[1])?r[0]:(s.memoizedState=[e,t],e)}function Kc(e,t){var s=Me();t=t===void 0?null:t;var r=s.memoizedState;return r!==null&&t!==null&&Ta(t,r[1])?r[0]:(e=e(),s.memoizedState=[e,t],e)}function Gc(e,t,s){return Dt&21?(We(s,t)||(s=Zo(),V.lanes|=s,It|=s,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=s)}function zp(e,t){var s=R;R=s!==0&&4>s?s:4,e(!0);var r=ni.transition;ni.transition={};try{e(!1),t()}finally{R=s,ni.transition=r}}function Qc(){return Me().memoizedState}function Ep(e,t,s){var r=mt(e);if(s={lane:r,action:s,hasEagerState:!1,eagerState:null,next:null},qc(e))Yc(t,s);else if(s=Ec(e,t,s,r),s!==null){var i=he();Ie(s,e,r,i),Xc(s,t,r)}}function Fp(e,t,s){var r=mt(e),i={lane:r,action:s,hasEagerState:!1,eagerState:null,next:null};if(qc(e))Yc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,o=a(l,s);if(i.hasEagerState=!0,i.eagerState=o,We(o,l)){var c=t.interleaved;c===null?(i.next=i,za(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}s=Ec(e,t,i,r),s!==null&&(i=he(),Ie(s,e,r,i),Xc(s,t,r))}}function qc(e){var t=e.alternate;return e===V||t!==null&&t===V}function Yc(e,t){Un=cr=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function Xc(e,t,s){if(s&4194240){var r=t.lanes;r&=e.pendingLanes,s|=r,t.lanes=s,ma(e,s)}}var dr={readContext:Ae,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},Ap={readContext:Ae,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Ol,useImperativeHandle:function(e,t,s){return s=s!=null?s.concat([e]):null,Us(4194308,4,Vc.bind(null,t,e),s)},useLayoutEffect:function(e,t){return Us(4194308,4,e,t)},useInsertionEffect:function(e,t){return Us(4,2,e,t)},useMemo:function(e,t){var s=Oe();return t=t===void 0?null:t,e=e(),s.memoizedState=[e,t],e},useReducer:function(e,t,s){var r=Oe();return t=s!==void 0?s(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ep.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:Ul,useDebugValue:Da,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=Ul(!1),t=e[0];return e=zp.bind(null,e[1]),Oe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,s){var r=V,i=Oe();if(U){if(s===void 0)throw Error(N(407));s=s()}else{if(s=t(),ne===null)throw Error(N(349));Dt&30||Lc(r,t,s)}i.memoizedState=s;var a={value:s,getSnapshot:t};return i.queue=a,Ol(Rc.bind(null,r,a,e),[e]),r.flags|=2048,as(9,Bc.bind(null,r,a,s,t),void 0,null),s},useId:function(){var e=Oe(),t=ne.identifierPrefix;if(U){var s=qe,r=Qe;s=(r&~(1<<32-De(r)-1)).toString(32)+s,t=":"+t+"R"+s,s=rs++,0<s&&(t+="H"+s.toString(32)),t+=":"}else s=Pp++,t=":"+t+"r"+s.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mp={readContext:Ae,useCallback:Hc,useContext:Ae,useEffect:Ra,useImperativeHandle:$c,useInsertionEffect:Uc,useLayoutEffect:Oc,useMemo:Kc,useReducer:si,useRef:Wc,useState:function(){return si(is)},useDebugValue:Da,useDeferredValue:function(e){var t=Me();return Gc(t,Y.memoizedState,e)},useTransition:function(){var e=si(is)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Mc,useSyncExternalStore:Tc,useId:Qc,unstable_isNewReconciler:!1},Tp={readContext:Ae,useCallback:Hc,useContext:Ae,useEffect:Ra,useImperativeHandle:$c,useInsertionEffect:Uc,useLayoutEffect:Oc,useMemo:Kc,useReducer:ri,useRef:Wc,useState:function(){return ri(is)},useDebugValue:Da,useDeferredValue:function(e){var t=Me();return Y===null?t.memoizedState=e:Gc(t,Y.memoizedState,e)},useTransition:function(){var e=ri(is)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Mc,useSyncExternalStore:Tc,useId:Qc,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var s in e)t[s]===void 0&&(t[s]=e[s]);return t}return t}function Wi(e,t,s,r){t=e.memoizedState,s=s(r,t),s=s==null?t:$({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var br={isMounted:function(e){return(e=e._reactInternals)?Ot(e)===e:!1},enqueueSetState:function(e,t,s){e=e._reactInternals;var r=he(),i=mt(e),a=Ye(r,i);a.payload=t,s!=null&&(a.callback=s),t=ht(e,a,i),t!==null&&(Ie(t,e,i,r),Is(t,e,i))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var r=he(),i=mt(e),a=Ye(r,i);a.tag=1,a.payload=t,s!=null&&(a.callback=s),t=ht(e,a,i),t!==null&&(Ie(t,e,i,r),Is(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=he(),r=mt(e),i=Ye(s,r);i.tag=2,t!=null&&(i.callback=t),t=ht(e,i,r),t!==null&&(Ie(t,e,r,s),Is(t,e,r))}};function Vl(e,t,s,r,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!Zn(s,r)||!Zn(i,a):!0}function Zc(e,t,s){var r=!1,i=vt,a=t.contextType;return typeof a=="object"&&a!==null?a=Ae(a):(i=je(t)?Bt:de.current,r=t.contextTypes,a=(r=r!=null)?hn(e,i):vt),t=new t(s,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=br,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function $l(e,t,s,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,r),t.state!==e&&br.enqueueReplaceState(t,t.state,null)}function Ui(e,t,s,r){var i=e.stateNode;i.props=s,i.state=e.memoizedState,i.refs={},Ea(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Ae(a):(a=je(t)?Bt:de.current,i.context=hn(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Wi(e,t,a,s),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&br.enqueueReplaceState(i,i.state,null),lr(e,s,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gn(e,t){try{var s="",r=t;do s+=ou(r),r=r.return;while(r);var i=s}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function ii(e,t,s){return{value:e,source:null,stack:s??null,digest:t??null}}function Oi(e,t){try{console.error(t.value)}catch(s){setTimeout(function(){throw s})}}var Lp=typeof WeakMap=="function"?WeakMap:Map;function Jc(e,t,s){s=Ye(-1,s),s.tag=3,s.payload={element:null};var r=t.value;return s.callback=function(){pr||(pr=!0,Zi=r),Oi(e,t)},s}function ed(e,t,s){s=Ye(-1,s),s.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;s.payload=function(){return r(i)},s.callback=function(){Oi(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(s.callback=function(){Oi(e,t),typeof r!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),s}function Hl(e,t,s){var r=e.pingCache;if(r===null){r=e.pingCache=new Lp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(s)||(i.add(s),e=qp.bind(null,e,t,s),t.then(e,e))}function Kl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gl(e,t,s,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(t=Ye(-1,1),t.tag=2,ht(s,t,1))),s.lanes|=1),e)}var Bp=tt.ReactCurrentOwner,ye=!1;function ue(e,t,s,r){t.child=e===null?zc(t,null,s,r):mn(t,e.child,s,r)}function Ql(e,t,s,r,i){s=s.render;var a=t.ref;return dn(t,i),r=La(e,t,s,r,a,i),s=Ba(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,et(e,t,i)):(U&&s&&wa(t),t.flags|=1,ue(e,t,r,i),t.child)}function ql(e,t,s,r,i){if(e===null){var a=s.type;return typeof a=="function"&&!Ka(a)&&a.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(t.tag=15,t.type=a,td(e,t,a,r,i)):(e=Hs(s.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(s=s.compare,s=s!==null?s:Zn,s(l,r)&&e.ref===t.ref)return et(e,t,i)}return t.flags|=1,e=xt(a,r),e.ref=t.ref,e.return=t,t.child=e}function td(e,t,s,r,i){if(e!==null){var a=e.memoizedProps;if(Zn(a,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,et(e,t,i)}return Vi(e,t,s,r,i)}function nd(e,t,s){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(rn,Ne),Ne|=s;else{if(!(s&1073741824))return e=a!==null?a.baseLanes|s:s,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(rn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:s,D(rn,Ne),Ne|=r}else a!==null?(r=a.baseLanes|s,t.memoizedState=null):r=s,D(rn,Ne),Ne|=r;return ue(e,t,i,s),t.child}function sd(e,t){var s=t.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(t.flags|=512,t.flags|=2097152)}function Vi(e,t,s,r,i){var a=je(s)?Bt:de.current;return a=hn(t,a),dn(t,i),s=La(e,t,s,r,a,i),r=Ba(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,et(e,t,i)):(U&&r&&wa(t),t.flags|=1,ue(e,t,s,i),t.child)}function Yl(e,t,s,r,i){if(je(s)){var a=!0;nr(t)}else a=!1;if(dn(t,i),t.stateNode===null)Os(e,t),Zc(t,s,r),Ui(t,s,r,i),r=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var c=l.context,d=s.contextType;typeof d=="object"&&d!==null?d=Ae(d):(d=je(s)?Bt:de.current,d=hn(t,d));var y=s.getDerivedStateFromProps,p=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==r||c!==d)&&$l(t,l,r,d),rt=!1;var f=t.memoizedState;l.state=f,lr(t,r,l,i),c=t.memoizedState,o!==r||f!==c||ve.current||rt?(typeof y=="function"&&(Wi(t,s,y,r),c=t.memoizedState),(o=rt||Vl(t,s,o,r,f,c,d))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=d,r=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Fc(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:Le(t.type,o),l.props=d,p=t.pendingProps,f=l.context,c=s.contextType,typeof c=="object"&&c!==null?c=Ae(c):(c=je(s)?Bt:de.current,c=hn(t,c));var j=s.getDerivedStateFromProps;(y=typeof j=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==p||f!==c)&&$l(t,l,r,c),rt=!1,f=t.memoizedState,l.state=f,lr(t,r,l,i);var x=t.memoizedState;o!==p||f!==x||ve.current||rt?(typeof j=="function"&&(Wi(t,s,j,r),x=t.memoizedState),(d=rt||Vl(t,s,d,r,f,x,c)||!1)?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=c,r=d):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return $i(e,t,s,r,a,i)}function $i(e,t,s,r,i,a){sd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Ll(t,s,!1),et(e,t,a);r=t.stateNode,Bp.current=t;var o=l&&typeof s.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=mn(t,e.child,null,a),t.child=mn(t,null,o,a)):ue(e,t,o,a),t.memoizedState=r.state,i&&Ll(t,s,!0),t.child}function rd(e){var t=e.stateNode;t.pendingContext?Tl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tl(e,t.context,!1),Fa(e,t.containerInfo)}function Xl(e,t,s,r,i){return fn(),_a(i),t.flags|=256,ue(e,t,s,r),t.child}var Hi={dehydrated:null,treeContext:null,retryLane:0};function Ki(e){return{baseLanes:e,cachePool:null,transitions:null}}function id(e,t,s){var r=t.pendingProps,i=O.current,a=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),D(O,i&1),e===null)return Di(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Sr(l,r,0,null),e=Lt(e,r,s,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ki(s),t.memoizedState=Hi,e):Ia(t,l));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return Rp(e,t,l,r,o,i,s);if(a){a=r.fallback,l=t.mode,i=e.child,o=i.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=xt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?a=xt(o,a):(a=Lt(a,l,s,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?Ki(s):{baseLanes:l.baseLanes|s,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~s,t.memoizedState=Hi,r}return a=e.child,e=a.sibling,r=xt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=s),r.return=t,r.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=r,t.memoizedState=null,r}function Ia(e,t){return t=Sr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Es(e,t,s,r){return r!==null&&_a(r),mn(t,e.child,null,s),e=Ia(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rp(e,t,s,r,i,a,l){if(s)return t.flags&256?(t.flags&=-257,r=ii(Error(N(422))),Es(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Sr({mode:"visible",children:r.children},i,0,null),a=Lt(a,i,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&mn(t,e.child,null,l),t.child.memoizedState=Ki(l),t.memoizedState=Hi,a);if(!(t.mode&1))return Es(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,a=Error(N(419)),r=ii(a,r,void 0),Es(e,t,l,r)}if(o=(l&e.childLanes)!==0,ye||o){if(r=ne,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Je(e,i),Ie(r,e,i,-1))}return Ha(),r=ii(Error(N(421))),Es(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Yp.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,we=pt(i.nextSibling),be=t,U=!0,Re=null,e!==null&&(Pe[ze++]=Qe,Pe[ze++]=qe,Pe[ze++]=Rt,Qe=e.id,qe=e.overflow,Rt=t),t=Ia(t,r.children),t.flags|=4096,t)}function Zl(e,t,s){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ii(e.return,t,s)}function ai(e,t,s,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:s,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=s,a.tailMode=i)}function ad(e,t,s){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ue(e,t,r.children,s),r=O.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zl(e,s,t);else if(e.tag===19)Zl(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(O,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(s=t.child,i=null;s!==null;)e=s.alternate,e!==null&&or(e)===null&&(i=s),s=s.sibling;s=i,s===null?(i=t.child,t.child=null):(i=s.sibling,s.sibling=null),ai(t,!1,i,s,a);break;case"backwards":for(s=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&or(e)===null){t.child=i;break}e=i.sibling,i.sibling=s,s=i,i=e}ai(t,!0,s,null,a);break;case"together":ai(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Os(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function et(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),It|=t.lanes,!(s&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,s=xt(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=xt(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function Dp(e,t,s){switch(t.tag){case 3:rd(t),fn();break;case 5:Ac(t);break;case 1:je(t.type)&&nr(t);break;case 4:Fa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;D(ir,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(O,O.current&1),t.flags|=128,null):s&t.child.childLanes?id(e,t,s):(D(O,O.current&1),e=et(e,t,s),e!==null?e.sibling:null);D(O,O.current&1);break;case 19:if(r=(s&t.childLanes)!==0,e.flags&128){if(r)return ad(e,t,s);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(O,O.current),r)break;return null;case 22:case 23:return t.lanes=0,nd(e,t,s)}return et(e,t,s)}var ld,Gi,od,cd;ld=function(e,t){for(var s=t.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return;s=s.return}s.sibling.return=s.return,s=s.sibling}};Gi=function(){};od=function(e,t,s,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Mt(He.current);var a=null;switch(s){case"input":i=mi(e,i),r=mi(e,r),a=[];break;case"select":i=$({},i,{value:void 0}),r=$({},r,{value:void 0}),a=[];break;case"textarea":i=yi(e,i),r=yi(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=er)}ji(s,r);var l;s=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var o=i[d];for(l in o)o.hasOwnProperty(l)&&(s||(s={}),s[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Hn.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var c=r[d];if(o=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==o&&(c!=null||o!=null))if(d==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(s||(s={}),s[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(s||(s={}),s[l]=c[l])}else s||(a||(a=[]),a.push(d,s)),s=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Hn.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&I("scroll",e),a||o===c||(a=[])):(a=a||[]).push(d,c))}s&&(a=a||[]).push("style",s);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};cd=function(e,t,s,r){s!==r&&(t.flags|=4)};function En(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var r=null;s!==null;)s.alternate!==null&&(r=s),s=s.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,r=0;if(t)for(var i=e.child;i!==null;)s|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)s|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=s,t}function Ip(e,t,s){var r=t.pendingProps;switch(ba(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return je(t.type)&&tr(),oe(t),null;case 3:return r=t.stateNode,xn(),W(ve),W(de),Ma(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ps(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(ta(Re),Re=null))),Gi(e,t),oe(t),null;case 5:Aa(t);var i=Mt(ss.current);if(s=t.type,e!==null&&t.stateNode!=null)od(e,t,s,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return oe(t),null}if(e=Mt(He.current),Ps(t)){r=t.stateNode,s=t.type;var a=t.memoizedProps;switch(r[Ve]=t,r[ts]=a,e=(t.mode&1)!==0,s){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(i=0;i<Ln.length;i++)I(Ln[i],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":ll(r,a),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},I("invalid",r);break;case"textarea":cl(r,a),I("invalid",r)}ji(s,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var o=a[l];l==="children"?typeof o=="string"?r.textContent!==o&&(a.suppressHydrationWarning!==!0&&Ss(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&Ss(r.textContent,o,e),i=["children",""+o]):Hn.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&I("scroll",r)}switch(s){case"input":vs(r),ol(r,a,!0);break;case"textarea":vs(r),dl(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=er)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ro(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(s,{is:r.is}):(e=l.createElement(s),s==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,s),e[Ve]=t,e[ts]=r,ld(e,t,!1,!1),t.stateNode=e;e:{switch(l=ki(s,r),s){case"dialog":I("cancel",e),I("close",e),i=r;break;case"iframe":case"object":case"embed":I("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ln.length;i++)I(Ln[i],e);i=r;break;case"source":I("error",e),i=r;break;case"img":case"image":case"link":I("error",e),I("load",e),i=r;break;case"details":I("toggle",e),i=r;break;case"input":ll(e,r),i=mi(e,r),I("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=$({},r,{value:void 0}),I("invalid",e);break;case"textarea":cl(e,r),i=yi(e,r),I("invalid",e);break;default:i=r}ji(s,i),o=i;for(a in o)if(o.hasOwnProperty(a)){var c=o[a];a==="style"?Wo(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Do(e,c)):a==="children"?typeof c=="string"?(s!=="textarea"||c!=="")&&Kn(e,c):typeof c=="number"&&Kn(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Hn.hasOwnProperty(a)?c!=null&&a==="onScroll"&&I("scroll",e):c!=null&&ca(e,a,c,l))}switch(s){case"input":vs(e),ol(e,r,!1);break;case"textarea":vs(e),dl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?an(e,!!r.multiple,a,!1):r.defaultValue!=null&&an(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=er)}switch(s){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)cd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(s=Mt(ss.current),Mt(He.current),Ps(t)){if(r=t.stateNode,s=t.memoizedProps,r[Ve]=t,(a=r.nodeValue!==s)&&(e=be,e!==null))switch(e.tag){case 3:Ss(r.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ss(r.nodeValue,s,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(s.nodeType===9?s:s.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return oe(t),null;case 13:if(W(O),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&we!==null&&t.mode&1&&!(t.flags&128))Sc(),fn(),t.flags|=98560,a=!1;else if(a=Ps(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(N(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(N(317));a[Ve]=t}else fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),a=!1}else Re!==null&&(ta(Re),Re=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=s,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||O.current&1?Z===0&&(Z=3):Ha())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return xn(),Gi(e,t),e===null&&Jn(t.stateNode.containerInfo),oe(t),null;case 10:return Pa(t.type._context),oe(t),null;case 17:return je(t.type)&&tr(),oe(t),null;case 19:if(W(O),a=t.memoizedState,a===null)return oe(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)En(a,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=or(e),l!==null){for(t.flags|=128,En(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=s,s=t.child;s!==null;)a=s,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return D(O,O.current&1|2),t.child}e=e.sibling}a.tail!==null&&G()>yn&&(t.flags|=128,r=!0,En(a,!1),t.lanes=4194304)}else{if(!r)if(e=or(l),e!==null){if(t.flags|=128,r=!0,s=e.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),En(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!U)return oe(t),null}else 2*G()-a.renderingStartTime>yn&&s!==1073741824&&(t.flags|=128,r=!0,En(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(s=a.last,s!==null?s.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=G(),t.sibling=null,s=O.current,D(O,r?s&1|2:s&1),t):(oe(t),null);case 22:case 23:return $a(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Wp(e,t){switch(ba(t),t.tag){case 1:return je(t.type)&&tr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),W(ve),W(de),Ma(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Aa(t),null;case 13:if(W(O),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(O),null;case 4:return xn(),null;case 10:return Pa(t.type._context),null;case 22:case 23:return $a(),null;case 24:return null;default:return null}}var Fs=!1,ce=!1,Up=typeof WeakSet=="function"?WeakSet:Set,S=null;function sn(e,t){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(r){H(e,t,r)}else s.current=null}function Qi(e,t,s){try{s()}catch(r){H(e,t,r)}}var Jl=!1;function Op(e,t){if(Fi=Xs,e=fc(),Na(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var r=s.getSelection&&s.getSelection();if(r&&r.rangeCount!==0){s=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{s.nodeType,a.nodeType}catch{s=null;break e}var l=0,o=-1,c=-1,d=0,y=0,p=e,f=null;t:for(;;){for(var j;p!==s||i!==0&&p.nodeType!==3||(o=l+i),p!==a||r!==0&&p.nodeType!==3||(c=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(j=p.firstChild)!==null;)f=p,p=j;for(;;){if(p===e)break t;if(f===s&&++d===i&&(o=l),f===a&&++y===r&&(c=l),(j=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=j}s=o===-1||c===-1?null:{start:o,end:c}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ai={focusedElem:e,selectionRange:s},Xs=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,C=x.memoizedState,h=t.stateNode,u=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:Le(t.type,v),C);h.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(m){H(t,t.return,m)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return x=Jl,Jl=!1,x}function On(e,t,s){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Qi(t,s,a)}i=i.next}while(i!==r)}}function _r(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var s=t=t.next;do{if((s.tag&e)===e){var r=s.create;s.destroy=r()}s=s.next}while(s!==t)}}function qi(e){var t=e.ref;if(t!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof t=="function"?t(e):t.current=e}}function dd(e){var t=e.alternate;t!==null&&(e.alternate=null,dd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[ts],delete t[Li],delete t[bp],delete t[_p])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ud(e){return e.tag===5||e.tag===3||e.tag===4}function eo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ud(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yi(e,t,s){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?s.nodeType===8?s.parentNode.insertBefore(e,t):s.insertBefore(e,t):(s.nodeType===8?(t=s.parentNode,t.insertBefore(e,s)):(t=s,t.appendChild(e)),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=er));else if(r!==4&&(e=e.child,e!==null))for(Yi(e,t,s),e=e.sibling;e!==null;)Yi(e,t,s),e=e.sibling}function Xi(e,t,s){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xi(e,t,s),e=e.sibling;e!==null;)Xi(e,t,s),e=e.sibling}var se=null,Be=!1;function nt(e,t,s){for(s=s.child;s!==null;)pd(e,t,s),s=s.sibling}function pd(e,t,s){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(gr,s)}catch{}switch(s.tag){case 5:ce||sn(s,t);case 6:var r=se,i=Be;se=null,nt(e,t,s),se=r,Be=i,se!==null&&(Be?(e=se,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):se.removeChild(s.stateNode));break;case 18:se!==null&&(Be?(e=se,s=s.stateNode,e.nodeType===8?Jr(e.parentNode,s):e.nodeType===1&&Jr(e,s),Yn(e)):Jr(se,s.stateNode));break;case 4:r=se,i=Be,se=s.stateNode.containerInfo,Be=!0,nt(e,t,s),se=r,Be=i;break;case 0:case 11:case 14:case 15:if(!ce&&(r=s.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Qi(s,t,l),i=i.next}while(i!==r)}nt(e,t,s);break;case 1:if(!ce&&(sn(s,t),r=s.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=s.memoizedProps,r.state=s.memoizedState,r.componentWillUnmount()}catch(o){H(s,t,o)}nt(e,t,s);break;case 21:nt(e,t,s);break;case 22:s.mode&1?(ce=(r=ce)||s.memoizedState!==null,nt(e,t,s),ce=r):nt(e,t,s);break;default:nt(e,t,s)}}function to(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new Up),t.forEach(function(r){var i=Xp.bind(null,e,r);s.has(r)||(s.add(r),r.then(i,i))})}}function Te(e,t){var s=t.deletions;if(s!==null)for(var r=0;r<s.length;r++){var i=s[r];try{var a=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:se=o.stateNode,Be=!1;break e;case 3:se=o.stateNode.containerInfo,Be=!0;break e;case 4:se=o.stateNode.containerInfo,Be=!0;break e}o=o.return}if(se===null)throw Error(N(160));pd(a,l,i),se=null,Be=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){H(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hd(t,e),t=t.sibling}function hd(e,t){var s=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(t,e),Ue(e),r&4){try{On(3,e,e.return),_r(3,e)}catch(v){H(e,e.return,v)}try{On(5,e,e.return)}catch(v){H(e,e.return,v)}}break;case 1:Te(t,e),Ue(e),r&512&&s!==null&&sn(s,s.return);break;case 5:if(Te(t,e),Ue(e),r&512&&s!==null&&sn(s,s.return),e.flags&32){var i=e.stateNode;try{Kn(i,"")}catch(v){H(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=s!==null?s.memoizedProps:a,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&Lo(i,a),ki(o,l);var d=ki(o,a);for(l=0;l<c.length;l+=2){var y=c[l],p=c[l+1];y==="style"?Wo(i,p):y==="dangerouslySetInnerHTML"?Do(i,p):y==="children"?Kn(i,p):ca(i,y,p,d)}switch(o){case"input":xi(i,a);break;case"textarea":Bo(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var j=a.value;j!=null?an(i,!!a.multiple,j,!1):f!==!!a.multiple&&(a.defaultValue!=null?an(i,!!a.multiple,a.defaultValue,!0):an(i,!!a.multiple,a.multiple?[]:"",!1))}i[ts]=a}catch(v){H(e,e.return,v)}}break;case 6:if(Te(t,e),Ue(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(v){H(e,e.return,v)}}break;case 3:if(Te(t,e),Ue(e),r&4&&s!==null&&s.memoizedState.isDehydrated)try{Yn(t.containerInfo)}catch(v){H(e,e.return,v)}break;case 4:Te(t,e),Ue(e);break;case 13:Te(t,e),Ue(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Oa=G())),r&4&&to(e);break;case 22:if(y=s!==null&&s.memoizedState!==null,e.mode&1?(ce=(d=ce)||y,Te(t,e),ce=d):Te(t,e),Ue(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(S=e,y=e.child;y!==null;){for(p=S=y;S!==null;){switch(f=S,j=f.child,f.tag){case 0:case 11:case 14:case 15:On(4,f,f.return);break;case 1:sn(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){r=f,s=f.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){H(r,s,v)}}break;case 5:sn(f,f.return);break;case 22:if(f.memoizedState!==null){so(p);continue}}j!==null?(j.return=f,S=j):so(p)}y=y.sibling}e:for(y=null,p=e;;){if(p.tag===5){if(y===null){y=p;try{i=p.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Io("display",l))}catch(v){H(e,e.return,v)}}}else if(p.tag===6){if(y===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(v){H(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;y===p&&(y=null),p=p.return}y===p&&(y=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Te(t,e),Ue(e),r&4&&to(e);break;case 21:break;default:Te(t,e),Ue(e)}}function Ue(e){var t=e.flags;if(t&2){try{e:{for(var s=e.return;s!==null;){if(ud(s)){var r=s;break e}s=s.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Kn(i,""),r.flags&=-33);var a=eo(e);Xi(e,a,i);break;case 3:case 4:var l=r.stateNode.containerInfo,o=eo(e);Yi(e,o,l);break;default:throw Error(N(161))}}catch(c){H(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vp(e,t,s){S=e,fd(e)}function fd(e,t,s){for(var r=(e.mode&1)!==0;S!==null;){var i=S,a=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Fs;if(!l){var o=i.alternate,c=o!==null&&o.memoizedState!==null||ce;o=Fs;var d=ce;if(Fs=l,(ce=c)&&!d)for(S=i;S!==null;)l=S,c=l.child,l.tag===22&&l.memoizedState!==null?ro(i):c!==null?(c.return=l,S=c):ro(i);for(;a!==null;)S=a,fd(a),a=a.sibling;S=i,Fs=o,ce=d}no(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,S=a):no(e)}}function no(e){for(;S!==null;){var t=S;if(t.flags&8772){var s=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||_r(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(s===null)r.componentDidMount();else{var i=t.elementType===t.type?s.memoizedProps:Le(t.type,s.memoizedProps);r.componentDidUpdate(i,s.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Wl(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(s=null,t.child!==null)switch(t.child.tag){case 5:s=t.child.stateNode;break;case 1:s=t.child.stateNode}Wl(t,l,s)}break;case 5:var o=t.stateNode;if(s===null&&t.flags&4){s=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&s.focus();break;case"img":c.src&&(s.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var p=y.dehydrated;p!==null&&Yn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ce||t.flags&512&&qi(t)}catch(f){H(t,t.return,f)}}if(t===e){S=null;break}if(s=t.sibling,s!==null){s.return=t.return,S=s;break}S=t.return}}function so(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var s=t.sibling;if(s!==null){s.return=t.return,S=s;break}S=t.return}}function ro(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var s=t.return;try{_r(4,t)}catch(c){H(t,s,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){H(t,i,c)}}var a=t.return;try{qi(t)}catch(c){H(t,a,c)}break;case 5:var l=t.return;try{qi(t)}catch(c){H(t,l,c)}}}catch(c){H(t,t.return,c)}if(t===e){S=null;break}var o=t.sibling;if(o!==null){o.return=t.return,S=o;break}S=t.return}}var $p=Math.ceil,ur=tt.ReactCurrentDispatcher,Wa=tt.ReactCurrentOwner,Fe=tt.ReactCurrentBatchConfig,B=0,ne=null,Q=null,re=0,Ne=0,rn=Nt(0),Z=0,ls=null,It=0,Cr=0,Ua=0,Vn=null,ge=null,Oa=0,yn=1/0,Ke=null,pr=!1,Zi=null,ft=null,As=!1,ot=null,hr=0,$n=0,Ji=null,Vs=-1,$s=0;function he(){return B&6?G():Vs!==-1?Vs:Vs=G()}function mt(e){return e.mode&1?B&2&&re!==0?re&-re:Sp.transition!==null?($s===0&&($s=Zo()),$s):(e=R,e!==0||(e=window.event,e=e===void 0?16:ic(e.type)),e):1}function Ie(e,t,s,r){if(50<$n)throw $n=0,Ji=null,Error(N(185));ds(e,s,r),(!(B&2)||e!==ne)&&(e===ne&&(!(B&2)&&(Cr|=s),Z===4&&at(e,re)),ke(e,r),s===1&&B===0&&!(t.mode&1)&&(yn=G()+500,Nr&&wt()))}function ke(e,t){var s=e.callbackNode;Su(e,t);var r=Ys(e,e===ne?re:0);if(r===0)s!==null&&hl(s),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(s!=null&&hl(s),t===1)e.tag===0?Cp(io.bind(null,e)):bc(io.bind(null,e)),Np(function(){!(B&6)&&wt()}),s=null;else{switch(Jo(r)){case 1:s=fa;break;case 4:s=Yo;break;case 16:s=qs;break;case 536870912:s=Xo;break;default:s=qs}s=Nd(s,md.bind(null,e))}e.callbackPriority=t,e.callbackNode=s}}function md(e,t){if(Vs=-1,$s=0,B&6)throw Error(N(327));var s=e.callbackNode;if(un()&&e.callbackNode!==s)return null;var r=Ys(e,e===ne?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fr(e,r);else{t=r;var i=B;B|=2;var a=gd();(ne!==e||re!==t)&&(Ke=null,yn=G()+500,Tt(e,t));do try{Gp();break}catch(o){xd(e,o)}while(!0);Sa(),ur.current=a,B=i,Q!==null?t=0:(ne=null,re=0,t=Z)}if(t!==0){if(t===2&&(i=Ci(e),i!==0&&(r=i,t=ea(e,i))),t===1)throw s=ls,Tt(e,0),at(e,r),ke(e,G()),s;if(t===6)at(e,r);else{if(i=e.current.alternate,!(r&30)&&!Hp(i)&&(t=fr(e,r),t===2&&(a=Ci(e),a!==0&&(r=a,t=ea(e,a))),t===1))throw s=ls,Tt(e,0),at(e,r),ke(e,G()),s;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Et(e,ge,Ke);break;case 3:if(at(e,r),(r&130023424)===r&&(t=Oa+500-G(),10<t)){if(Ys(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ti(Et.bind(null,e,ge,Ke),t);break}Et(e,ge,Ke);break;case 4:if(at(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-De(r);a=1<<l,l=t[l],l>i&&(i=l),r&=~a}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$p(r/1960))-r,10<r){e.timeoutHandle=Ti(Et.bind(null,e,ge,Ke),r);break}Et(e,ge,Ke);break;case 5:Et(e,ge,Ke);break;default:throw Error(N(329))}}}return ke(e,G()),e.callbackNode===s?md.bind(null,e):null}function ea(e,t){var s=Vn;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=fr(e,t),e!==2&&(t=ge,ge=s,t!==null&&ta(t)),e}function ta(e){ge===null?ge=e:ge.push.apply(ge,e)}function Hp(e){for(var t=e;;){if(t.flags&16384){var s=t.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var r=0;r<s.length;r++){var i=s[r],a=i.getSnapshot;i=i.value;try{if(!We(a(),i))return!1}catch{return!1}}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function at(e,t){for(t&=~Ua,t&=~Cr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var s=31-De(t),r=1<<s;e[s]=-1,t&=~r}}function io(e){if(B&6)throw Error(N(327));un();var t=Ys(e,0);if(!(t&1))return ke(e,G()),null;var s=fr(e,t);if(e.tag!==0&&s===2){var r=Ci(e);r!==0&&(t=r,s=ea(e,r))}if(s===1)throw s=ls,Tt(e,0),at(e,t),ke(e,G()),s;if(s===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Et(e,ge,Ke),ke(e,G()),null}function Va(e,t){var s=B;B|=1;try{return e(t)}finally{B=s,B===0&&(yn=G()+500,Nr&&wt())}}function Wt(e){ot!==null&&ot.tag===0&&!(B&6)&&un();var t=B;B|=1;var s=Fe.transition,r=R;try{if(Fe.transition=null,R=1,e)return e()}finally{R=r,Fe.transition=s,B=t,!(B&6)&&wt()}}function $a(){Ne=rn.current,W(rn)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,kp(s)),Q!==null)for(s=Q.return;s!==null;){var r=s;switch(ba(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&tr();break;case 3:xn(),W(ve),W(de),Ma();break;case 5:Aa(r);break;case 4:xn();break;case 13:W(O);break;case 19:W(O);break;case 10:Pa(r.type._context);break;case 22:case 23:$a()}s=s.return}if(ne=e,Q=e=xt(e.current,null),re=Ne=t,Z=0,ls=null,Ua=Cr=It=0,ge=Vn=null,At!==null){for(t=0;t<At.length;t++)if(s=At[t],r=s.interleaved,r!==null){s.interleaved=null;var i=r.next,a=s.pending;if(a!==null){var l=a.next;a.next=i,r.next=l}s.pending=r}At=null}return e}function xd(e,t){do{var s=Q;try{if(Sa(),Ws.current=dr,cr){for(var r=V.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}cr=!1}if(Dt=0,te=Y=V=null,Un=!1,rs=0,Wa.current=null,s===null||s.return===null){Z=1,ls=t,Q=null;break}e:{var a=e,l=s.return,o=s,c=t;if(t=re,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,y=o,p=y.tag;if(!(y.mode&1)&&(p===0||p===11||p===15)){var f=y.alternate;f?(y.updateQueue=f.updateQueue,y.memoizedState=f.memoizedState,y.lanes=f.lanes):(y.updateQueue=null,y.memoizedState=null)}var j=Kl(l);if(j!==null){j.flags&=-257,Gl(j,l,o,a,t),j.mode&1&&Hl(a,d,t),t=j,c=d;var x=t.updateQueue;if(x===null){var v=new Set;v.add(c),t.updateQueue=v}else x.add(c);break e}else{if(!(t&1)){Hl(a,d,t),Ha();break e}c=Error(N(426))}}else if(U&&o.mode&1){var C=Kl(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Gl(C,l,o,a,t),_a(gn(c,o));break e}}a=c=gn(c,o),Z!==4&&(Z=2),Vn===null?Vn=[a]:Vn.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=Jc(a,c,t);Il(a,h);break e;case 1:o=c;var u=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof u.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ft===null||!ft.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var m=ed(a,o,t);Il(a,m);break e}}a=a.return}while(a!==null)}vd(s)}catch(k){t=k,Q===s&&s!==null&&(Q=s=s.return);continue}break}while(!0)}function gd(){var e=ur.current;return ur.current=dr,e===null?dr:e}function Ha(){(Z===0||Z===3||Z===2)&&(Z=4),ne===null||!(It&268435455)&&!(Cr&268435455)||at(ne,re)}function fr(e,t){var s=B;B|=2;var r=gd();(ne!==e||re!==t)&&(Ke=null,Tt(e,t));do try{Kp();break}catch(i){xd(e,i)}while(!0);if(Sa(),B=s,ur.current=r,Q!==null)throw Error(N(261));return ne=null,re=0,Z}function Kp(){for(;Q!==null;)yd(Q)}function Gp(){for(;Q!==null&&!yu();)yd(Q)}function yd(e){var t=kd(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?vd(e):Q=t,Wa.current=null}function vd(e){var t=e;do{var s=t.alternate;if(e=t.return,t.flags&32768){if(s=Wp(s,t),s!==null){s.flags&=32767,Q=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,Q=null;return}}else if(s=Ip(s,t,Ne),s!==null){Q=s;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);Z===0&&(Z=5)}function Et(e,t,s){var r=R,i=Fe.transition;try{Fe.transition=null,R=1,Qp(e,t,s,r)}finally{Fe.transition=i,R=r}return null}function Qp(e,t,s,r){do un();while(ot!==null);if(B&6)throw Error(N(327));s=e.finishedWork;var i=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var a=s.lanes|s.childLanes;if(Pu(e,a),e===ne&&(Q=ne=null,re=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||As||(As=!0,Nd(qs,function(){return un(),null})),a=(s.flags&15990)!==0,s.subtreeFlags&15990||a){a=Fe.transition,Fe.transition=null;var l=R;R=1;var o=B;B|=4,Wa.current=null,Op(e,s),hd(s,e),fp(Ai),Xs=!!Fi,Ai=Fi=null,e.current=s,Vp(s),vu(),B=o,R=l,Fe.transition=a}else e.current=s;if(As&&(As=!1,ot=e,hr=i),a=e.pendingLanes,a===0&&(ft=null),Nu(s.stateNode),ke(e,G()),t!==null)for(r=e.onRecoverableError,s=0;s<t.length;s++)i=t[s],r(i.value,{componentStack:i.stack,digest:i.digest});if(pr)throw pr=!1,e=Zi,Zi=null,e;return hr&1&&e.tag!==0&&un(),a=e.pendingLanes,a&1?e===Ji?$n++:($n=0,Ji=e):$n=0,wt(),null}function un(){if(ot!==null){var e=Jo(hr),t=Fe.transition,s=R;try{if(Fe.transition=null,R=16>e?16:e,ot===null)var r=!1;else{if(e=ot,ot=null,hr=0,B&6)throw Error(N(331));var i=B;for(B|=4,S=e.current;S!==null;){var a=S,l=a.child;if(S.flags&16){var o=a.deletions;if(o!==null){for(var c=0;c<o.length;c++){var d=o[c];for(S=d;S!==null;){var y=S;switch(y.tag){case 0:case 11:case 15:On(8,y,a)}var p=y.child;if(p!==null)p.return=y,S=p;else for(;S!==null;){y=S;var f=y.sibling,j=y.return;if(dd(y),y===d){S=null;break}if(f!==null){f.return=j,S=f;break}S=j}}}var x=a.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}S=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,S=l;else e:for(;S!==null;){if(a=S,a.flags&2048)switch(a.tag){case 0:case 11:case 15:On(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,S=h;break e}S=a.return}}var u=e.current;for(S=u;S!==null;){l=S;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,S=g;else e:for(l=u;S!==null;){if(o=S,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:_r(9,o)}}catch(k){H(o,o.return,k)}if(o===l){S=null;break e}var m=o.sibling;if(m!==null){m.return=o.return,S=m;break e}S=o.return}}if(B=i,wt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(gr,e)}catch{}r=!0}return r}finally{R=s,Fe.transition=t}}return!1}function ao(e,t,s){t=gn(s,t),t=Jc(e,t,1),e=ht(e,t,1),t=he(),e!==null&&(ds(e,1,t),ke(e,t))}function H(e,t,s){if(e.tag===3)ao(e,e,s);else for(;t!==null;){if(t.tag===3){ao(t,e,s);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ft===null||!ft.has(r))){e=gn(s,e),e=ed(t,e,1),t=ht(t,e,1),e=he(),t!==null&&(ds(t,1,e),ke(t,e));break}}t=t.return}}function qp(e,t,s){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&s,ne===e&&(re&s)===s&&(Z===4||Z===3&&(re&130023424)===re&&500>G()-Oa?Tt(e,0):Ua|=s),ke(e,t)}function jd(e,t){t===0&&(e.mode&1?(t=Ns,Ns<<=1,!(Ns&130023424)&&(Ns=4194304)):t=1);var s=he();e=Je(e,t),e!==null&&(ds(e,t,s),ke(e,s))}function Yp(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),jd(e,s)}function Xp(e,t){var s=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(s=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),jd(e,s)}var kd;kd=function(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ye=!0;else{if(!(e.lanes&s)&&!(t.flags&128))return ye=!1,Dp(e,t,s);ye=!!(e.flags&131072)}else ye=!1,U&&t.flags&1048576&&_c(t,rr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Os(e,t),e=t.pendingProps;var i=hn(t,de.current);dn(t,s),i=La(null,t,r,e,i,s);var a=Ba();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(a=!0,nr(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ea(t),i.updater=br,t.stateNode=i,i._reactInternals=t,Ui(t,r,e,s),t=$i(null,t,r,!0,a,s)):(t.tag=0,U&&a&&wa(t),ue(null,t,i,s),t=t.child),t;case 16:r=t.elementType;e:{switch(Os(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Jp(r),e=Le(r,e),i){case 0:t=Vi(null,t,r,e,s);break e;case 1:t=Yl(null,t,r,e,s);break e;case 11:t=Ql(null,t,r,e,s);break e;case 14:t=ql(null,t,r,Le(r.type,e),s);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),Vi(e,t,r,i,s);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),Yl(e,t,r,i,s);case 3:e:{if(rd(t),e===null)throw Error(N(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Fc(e,t),lr(t,r,null,s);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=gn(Error(N(423)),t),t=Xl(e,t,r,s,i);break e}else if(r!==i){i=gn(Error(N(424)),t),t=Xl(e,t,r,s,i);break e}else for(we=pt(t.stateNode.containerInfo.firstChild),be=t,U=!0,Re=null,s=zc(t,null,r,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(fn(),r===i){t=et(e,t,s);break e}ue(e,t,r,s)}t=t.child}return t;case 5:return Ac(t),e===null&&Di(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,Mi(r,i)?l=null:a!==null&&Mi(r,a)&&(t.flags|=32),sd(e,t),ue(e,t,l,s),t.child;case 6:return e===null&&Di(t),null;case 13:return id(e,t,s);case 4:return Fa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mn(t,null,r,s):ue(e,t,r,s),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),Ql(e,t,r,i,s);case 7:return ue(e,t,t.pendingProps,s),t.child;case 8:return ue(e,t,t.pendingProps.children,s),t.child;case 12:return ue(e,t,t.pendingProps.children,s),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,D(ir,r._currentValue),r._currentValue=l,a!==null)if(We(a.value,l)){if(a.children===i.children&&!ve.current){t=et(e,t,s);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){l=a.child;for(var c=o.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=Ye(-1,s&-s),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?c.next=c:(c.next=y.next,y.next=c),d.pending=c}}a.lanes|=s,c=a.alternate,c!==null&&(c.lanes|=s),Ii(a.return,s,t),o.lanes|=s;break}c=c.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(N(341));l.lanes|=s,o=l.alternate,o!==null&&(o.lanes|=s),Ii(l,s,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}ue(e,t,i.children,s),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,dn(t,s),i=Ae(i),r=r(i),t.flags|=1,ue(e,t,r,s),t.child;case 14:return r=t.type,i=Le(r,t.pendingProps),i=Le(r.type,i),ql(e,t,r,i,s);case 15:return td(e,t,t.type,t.pendingProps,s);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),Os(e,t),t.tag=1,je(r)?(e=!0,nr(t)):e=!1,dn(t,s),Zc(t,r,i),Ui(t,r,i,s),$i(null,t,r,!0,e,s);case 19:return ad(e,t,s);case 22:return nd(e,t,s)}throw Error(N(156,t.tag))};function Nd(e,t){return qo(e,t)}function Zp(e,t,s,r){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,s,r){return new Zp(e,t,s,r)}function Ka(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jp(e){if(typeof e=="function")return Ka(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ua)return 11;if(e===pa)return 14}return 2}function xt(e,t){var s=e.alternate;return s===null?(s=Ee(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function Hs(e,t,s,r,i,a){var l=2;if(r=e,typeof e=="function")Ka(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Qt:return Lt(s.children,i,a,t);case da:l=8,i|=8;break;case ui:return e=Ee(12,s,t,i|2),e.elementType=ui,e.lanes=a,e;case pi:return e=Ee(13,s,t,i),e.elementType=pi,e.lanes=a,e;case hi:return e=Ee(19,s,t,i),e.elementType=hi,e.lanes=a,e;case Ao:return Sr(s,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Eo:l=10;break e;case Fo:l=9;break e;case ua:l=11;break e;case pa:l=14;break e;case st:l=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Ee(l,s,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Lt(e,t,s,r){return e=Ee(7,e,r,t),e.lanes=s,e}function Sr(e,t,s,r){return e=Ee(22,e,r,t),e.elementType=Ao,e.lanes=s,e.stateNode={isHidden:!1},e}function li(e,t,s){return e=Ee(6,e,null,t),e.lanes=s,e}function oi(e,t,s){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function eh(e,t,s,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Or(0),this.expirationTimes=Or(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Or(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ga(e,t,s,r,i,a,l,o,c){return e=new eh(e,t,s,o,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ee(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ea(a),e}function th(e,t,s){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:s}}function wd(e){if(!e)return vt;e=e._reactInternals;e:{if(Ot(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var s=e.type;if(je(s))return wc(e,s,t)}return t}function bd(e,t,s,r,i,a,l,o,c){return e=Ga(s,r,!0,e,i,a,l,o,c),e.context=wd(null),s=e.current,r=he(),i=mt(s),a=Ye(r,i),a.callback=t??null,ht(s,a,i),e.current.lanes=i,ds(e,i,r),ke(e,r),e}function Pr(e,t,s,r){var i=t.current,a=he(),l=mt(i);return s=wd(s),t.context===null?t.context=s:t.pendingContext=s,t=Ye(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ht(i,t,l),e!==null&&(Ie(e,i,l,a),Is(e,i,l)),l}function mr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lo(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function Qa(e,t){lo(e,t),(e=e.alternate)&&lo(e,t)}function nh(){return null}var _d=typeof reportError=="function"?reportError:function(e){console.error(e)};function qa(e){this._internalRoot=e}zr.prototype.render=qa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Pr(e,t,null,null)};zr.prototype.unmount=qa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){Pr(null,e,null,null)}),t[Ze]=null}};function zr(e){this._internalRoot=e}zr.prototype.unstable_scheduleHydration=function(e){if(e){var t=nc();e={blockedOn:null,target:e,priority:t};for(var s=0;s<it.length&&t!==0&&t<it[s].priority;s++);it.splice(s,0,e),s===0&&rc(e)}};function Ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Er(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function oo(){}function sh(e,t,s,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var d=mr(l);a.call(d)}}var l=bd(t,r,e,0,null,!1,!1,"",oo);return e._reactRootContainer=l,e[Ze]=l.current,Jn(e.nodeType===8?e.parentNode:e),Wt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var d=mr(c);o.call(d)}}var c=Ga(e,0,!1,null,null,!1,!1,"",oo);return e._reactRootContainer=c,e[Ze]=c.current,Jn(e.nodeType===8?e.parentNode:e),Wt(function(){Pr(t,c,s,r)}),c}function Fr(e,t,s,r,i){var a=s._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var o=i;i=function(){var c=mr(l);o.call(c)}}Pr(t,l,e,i)}else l=sh(s,t,e,i,r);return mr(l)}ec=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var s=Tn(t.pendingLanes);s!==0&&(ma(t,s|1),ke(t,G()),!(B&6)&&(yn=G()+500,wt()))}break;case 13:Wt(function(){var r=Je(e,1);if(r!==null){var i=he();Ie(r,e,1,i)}}),Qa(e,1)}};xa=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var s=he();Ie(t,e,134217728,s)}Qa(e,134217728)}};tc=function(e){if(e.tag===13){var t=mt(e),s=Je(e,t);if(s!==null){var r=he();Ie(s,e,t,r)}Qa(e,t)}};nc=function(){return R};sc=function(e,t){var s=R;try{return R=e,t()}finally{R=s}};wi=function(e,t,s){switch(t){case"input":if(xi(e,s),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<s.length;t++){var r=s[t];if(r!==e&&r.form===e.form){var i=kr(r);if(!i)throw Error(N(90));To(r),xi(r,i)}}}break;case"textarea":Bo(e,s);break;case"select":t=s.value,t!=null&&an(e,!!s.multiple,t,!1)}};Vo=Va;$o=Wt;var rh={usingClientEntryPoint:!1,Events:[ps,Zt,kr,Uo,Oo,Va]},Fn={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ih={bundleType:Fn.bundleType,version:Fn.version,rendererPackageName:Fn.rendererPackageName,rendererConfig:Fn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Go(e),e===null?null:e.stateNode},findFiberByHostInstance:Fn.findFiberByHostInstance||nh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ms.isDisabled&&Ms.supportsFiber)try{gr=Ms.inject(ih),$e=Ms}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rh;Ce.createPortal=function(e,t){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ya(t))throw Error(N(200));return th(e,t,null,s)};Ce.createRoot=function(e,t){if(!Ya(e))throw Error(N(299));var s=!1,r="",i=_d;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ga(e,1,!1,null,null,s,!1,r,i),e[Ze]=t.current,Jn(e.nodeType===8?e.parentNode:e),new qa(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Go(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Wt(e)};Ce.hydrate=function(e,t,s){if(!Er(t))throw Error(N(200));return Fr(null,e,t,!0,s)};Ce.hydrateRoot=function(e,t,s){if(!Ya(e))throw Error(N(405));var r=s!=null&&s.hydratedSources||null,i=!1,a="",l=_d;if(s!=null&&(s.unstable_strictMode===!0&&(i=!0),s.identifierPrefix!==void 0&&(a=s.identifierPrefix),s.onRecoverableError!==void 0&&(l=s.onRecoverableError)),t=bd(t,null,e,1,s??null,i,!1,a,l),e[Ze]=t.current,Jn(e),r)for(e=0;e<r.length;e++)s=r[e],i=s._getVersion,i=i(s._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[s,i]:t.mutableSourceEagerHydrationData.push(s,i);return new zr(t)};Ce.render=function(e,t,s){if(!Er(t))throw Error(N(200));return Fr(null,e,t,!1,s)};Ce.unmountComponentAtNode=function(e){if(!Er(e))throw Error(N(40));return e._reactRootContainer?(Wt(function(){Fr(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};Ce.unstable_batchedUpdates=Va;Ce.unstable_renderSubtreeIntoContainer=function(e,t,s,r){if(!Er(s))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Fr(e,t,s,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function Cd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cd)}catch(e){console.error(e)}}Cd(),Co.exports=Ce;var ah=Co.exports,co=ah;ci.createRoot=co.createRoot,ci.hydrateRoot=co.hydrateRoot;const uo={en:{languageName:"English",getStarted:"Get Started",headline:"Connect. Collect. Recycle.",subheadline:"A smart way to sell e-waste, earn better and build a cleaner future.",betterPrices:"Better Prices",betterPricesDesc:"Know fair rates in real-time",easyPickups:"Easy Pickups",easyPickupsDesc:"Schedule pickups at your convenience",safeTrusted:"Safe & Trusted",safeTrustedDesc:"Verified partners and secure deals",chooseLanguage:"Choose a Language",continue:"Continue",skip:"Skip",enterMobile:"Enter your mobile number",otpSubtitle:"We'll send you an OTP to verify your number",mobilePlaceholder:"Enter mobile number",termsText:"By continuing, you accept the",termsOfService:"Terms of Service",privacyPolicy:"Privacy Policy",contentPolicy:"Content Policy",verifyOtpTitle:"Enter 4-Digit OTP",verifyOtpSubtitle:"OTP sent to +91 ",verify:"Verify & Proceed",resendOtp:"Resend OTP in 30s",whatsYourLocation:"What's your location?",locationSubtitle:"Sharing location permission helps us locate a Partner near you",findNearbyPartners:"Find nearby partners",findNearbyPartnersDesc:"We'll show partners closest to you",fasterPickups:"Faster pickups",fasterPickupsDesc:"Help us reduce travel time & reach you faster",securePrivate:"Secure & private",securePrivateDesc:"Your location is safe and never shared publicly",useCurrentLocation:"Use Current Location",searchLocationManually:"Search Location Manually",allowNotificationsTitle:"Allow Notifications and Pickup alerts",realtimePartnerUpdates:"Real-time Partner Updates",realtimePartnerUpdatesDesc:"Get notified about partner allocation, arrival and more",offersAndNews:"Offers and news",offersAndNewsDesc:"Be the first to know about our offers and new features",allowPermission:"Allow Permission",maybeLater:"Maybe Later",setupComplete:"Setup Complete!",setupCompleteDesc:"You have completed the onboarding flow.",restartFlow:"Restart Prototype Flow"},hi:{languageName:"हिंदी",getStarted:"शुरू करें",headline:"जोड़ें. एकत्र करें. रीसायकल करें.",subheadline:"ई-कचरा बेचने, बेहतर कमाने और स्वच्छ भविष्य बनाने का स्मार्ट तरीका।",betterPrices:"बेहतर दरें",betterPricesDesc:"वास्तविक समय में उचित दरें जानें",easyPickups:"आसान पिकअप",easyPickupsDesc:"अपनी सुविधा अनुसार पिकअप शेड्यूल करें",safeTrusted:"सुरक्षित और विश्वसनीय",safeTrustedDesc:"सत्यापित भागीदार और सुरक्षित सौदे",chooseLanguage:"भाषा चुनें",continue:"आगे बढ़ें",skip:"छोड़ें",enterMobile:"अपना मोबाइल नंबर दर्ज करें",otpSubtitle:"हम आपका नंबर सत्यापित करने के लिए एक ओटीपी भेजेंगे",mobilePlaceholder:"मोबाइल नंबर दर्ज करें",termsText:"जारी रखकर, आप स्वीकार करते हैं",termsOfService:"सेवा की शर्तें",privacyPolicy:"गोपनीयता नीति",contentPolicy:"सामग्री नीति",verifyOtpTitle:"4-अंकों का ओटीपी दर्ज करें",verifyOtpSubtitle:"ओटीपी +91 पर भेजा गया ",verify:"सत्यापित करें और आगे बढ़ें",resendOtp:"30 सेकंड में पुन: ओटीपी भेजें",whatsYourLocation:"आपका स्थान क्या है?",locationSubtitle:"स्थान की अनुमति साझा करने से हमें आपके निकटतम भागीदार को खोजने में मदद मिलती है",findNearbyPartners:"पास के भागीदार खोजें",findNearbyPartnersDesc:"हम आपके निकटतम भागीदार दिखाएंगे",fasterPickups:"तेज़ पिकअप",fasterPickupsDesc:"यात्रा समय कम करने और आप तक तेज़ी से पहुँचने में मदद करता है",securePrivate:"सुरक्षित और निजी",securePrivateDesc:"आपका स्थान सुरक्षित है और कभी सार्वजनिक रूप से साझा नहीं किया जाता है",useCurrentLocation:"वर्तमान स्थान का उपयोग करें",searchLocationManually:"स्थान मैन्युअल रूप से खोजें",allowNotificationsTitle:"सूचनाएं और पिकअप अलर्ट की अनुमति दें",realtimePartnerUpdates:"रियल-टाइम पार्टनर अपडेट",realtimePartnerUpdatesDesc:"पार्टनर आवंटन, आगमन और अधिक के बारे में सूचित रहें",offersAndNews:"ऑफ़र और समाचार",offersAndNewsDesc:"हमारे ऑफ़र और नई सुविधाओं के बारे में सबसे पहले जानें",allowPermission:"अनुमति दें",maybeLater:"शायद बाद में",setupComplete:"सेटअप पूरा हुआ!",setupCompleteDesc:"आपने ऑनबोर्डिंग प्रक्रिया पूरी कर ली है।",restartFlow:"प्रोटोटाइप प्रवाह पुनः शुरू करें"},mr:{languageName:"मराठी",getStarted:"सुरू करा",headline:"जोडा. गोळा करा. रीसायकल करा.",subheadline:"ई-कचरा विकण्याचा, अधिक कमाई करण्याचा आणि स्वच्छ भविष्य घडवण्याचा स्मार्ट मार्ग.",betterPrices:"उत्तम दर",betterPricesDesc:"रिअल-टाइममध्ये रास्त दर जाणून घ्या",easyPickups:"सोपे पिकअप",easyPickupsDesc:"तुमच्या सोयीनुसार पिकअप शेड्यूल करा",safeTrusted:"सुरक्षित आणि विश्वासार्ह",safeTrustedDesc:"सत्यापित भागीदार आणि सुरक्षित व्यवहार",chooseLanguage:"भाषा निवडा",continue:"पुढे चला",skip:"वगळा",enterMobile:"तुमचा मोबाईल नंबर प्रविष्ट करा",otpSubtitle:"आम्ही तुमचा नंबर पडताळण्यासाठी एक OTP पाठवू",mobilePlaceholder:"मोबाईल नंबर प्रविष्ट करा",termsText:"सुरू ठेवून, तुम्ही स्वीकारता",termsOfService:"सेवा अटी",privacyPolicy:"गोपनीयता धोरण",contentPolicy:"सामग्री धोरण",verifyOtpTitle:"4-अंकी OTP प्रविष्ट करा",verifyOtpSubtitle:"OTP पाठवला +91 ",verify:"पडताळणी करा आणि पुढे जा",resendOtp:"30 सेकंदात पुन्हा पाठवा",whatsYourLocation:"तुमचे स्थान काय आहे?",locationSubtitle:"स्थान परवानगी सामायिक केल्याने आम्हाला तुमच्या जवळील भागीदार शोधण्यात मदत होते",findNearbyPartners:"जवळील भागीदार शोधा",findNearbyPartnersDesc:"आम्ही तुमच्या सर्वात जवळचे भागीदार दाखवू",fasterPickups:"जलद पिकअप",fasterPickupsDesc:"प्रवास वेळ कमी करण्यात आणि तुमच्यापर्यंत जलद पोहोचण्यास मदत करते",securePrivate:"सुरक्षित आणि खाजगी",securePrivateDesc:"तुमचे स्थान सुरक्षित आहे आणि कधीही सार्वजनिकपणे सामायिक केले जात नाही",useCurrentLocation:"सध्याचे स्थान वापरा",searchLocationManually:"स्थान मॅन्युअली शोधा",allowNotificationsTitle:"सूचना आणि पिकअप अ‍ॅलर्टला अनुमती द्या",realtimePartnerUpdates:"रिअल-टाइम पार्टनर अ‍ॅपडेट्स",realtimePartnerUpdatesDesc:"भागीदार वाटप, आगमन आणि अधिक बद्दल सूचना मिळवा",offersAndNews:"ऑफर आणि बातम्या",offersAndNewsDesc:"आमच्या ऑफर आणि नवीन वैशिष्ट्यांबद्दल जाणून घेणारे पहिले व्हा",allowPermission:"परवानगी द्या",maybeLater:"नंतर करूया",setupComplete:"सेटअप पूर्ण झाला!",setupCompleteDesc:"तुम्ही ऑनबोर्डिंग प्रक्रिया पूर्ण केली आहे.",restartFlow:"प्रोटोटाइप प्रवाह पुन्हा सुरू करा"}};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),E=(e,t)=>{const s=b.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:o="",children:c,...d},y)=>b.createElement("svg",{ref:y,...lh,width:i,height:i,stroke:r,strokeWidth:l?Number(a)*24/Number(i):a,className:["lucide",`lucide-${oh(e)}`,o].join(" "),...d},[...t.map(([p,f])=>b.createElement(p,f)),...Array.isArray(c)?c:[c]]));return s.displayName=`${e}`,s};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=E("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=E("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=E("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=E("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=E("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=E("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=E("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=E("BatteryCharging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=E("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=E("Bluetooth",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=E("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=E("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=E("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=E("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=E("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=E("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=E("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=E("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=E("Delete",[["path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z",key:"1oy587"}],["line",{x1:"18",x2:"12",y1:"9",y2:"15",key:"1olkx5"}],["line",{x1:"12",x2:"18",y1:"9",y2:"15",key:"1n50pc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=E("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=E("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=E("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=E("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=E("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"aigmz7"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"1n6bmn"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8",key:"a9iiix"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=E("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=E("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=E("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=E("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=E("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=E("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=E("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=E("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=E("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=E("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=E("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=E("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=E("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=E("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=E("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=E("Recycle",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=E("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=E("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=E("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=E("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=E("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=E("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=E("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=E("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=E("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=E("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=E("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=E("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=E("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=E("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=E("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=E("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=E("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=E("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=E("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=E("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=E("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=E("ZapOff",[["polyline",{points:"12.41 6.75 13 2 10.57 4.92",key:"122m05"}],["polyline",{points:"18.57 12.91 21 10 15.66 10",key:"16r43o"}],["polyline",{points:"8 8 3 14 12 14 11 22 16 16",key:"tmh4bc"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=E("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);class Hh{constructor(){this.audioCtx=null}getAudioContext(){if(!this.audioCtx&&typeof window<"u"){const t=window.AudioContext||window.webkitAudioContext;t&&(this.audioCtx=new t)}return this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume(),this.audioCtx}vibrate(t=10){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate(t)}catch{}}tapTick(){this.vibrate(8);const t=this.getAudioContext();if(t)try{const s=t.createOscillator(),r=t.createGain();s.type="sine",s.frequency.setValueAtTime(600,t.currentTime),s.frequency.exponentialRampToValueAtTime(200,t.currentTime+.03),r.gain.setValueAtTime(.04,t.currentTime),r.gain.exponentialRampToValueAtTime(.001,t.currentTime+.03),s.connect(r),r.connect(t.destination),s.start(),s.stop(t.currentTime+.03)}catch{}}cameraShutter(){this.vibrate([20,30,20]);const t=this.getAudioContext();if(t)try{const s=t.sampleRate*.05,r=t.createBuffer(1,s,t.sampleRate),i=r.getChannelData(0);for(let c=0;c<s;c++)i[c]=Math.random()*2-1;const a=t.createBufferSource();a.buffer=r;const l=t.createBiquadFilter();l.type="bandpass",l.frequency.value=1200;const o=t.createGain();o.gain.setValueAtTime(.12,t.currentTime),o.gain.exponentialRampToValueAtTime(.001,t.currentTime+.05),a.connect(l),l.connect(o),o.connect(t.destination),a.start()}catch{}}successChime(){this.vibrate([30,50,40]);const t=this.getAudioContext();if(t)try{const s=t.currentTime;[523.25,659.25,783.99,1046.5].forEach((i,a)=>{const l=t.createOscillator(),o=t.createGain();l.type="triangle",l.frequency.setValueAtTime(i,s+a*.06),o.gain.setValueAtTime(.08,s+a*.06),o.gain.exponentialRampToValueAtTime(.001,s+a*.06+.25),l.connect(o),o.connect(t.destination),l.start(s+a*.06),l.stop(s+a*.06+.25)})}catch{}}warningTone(){this.vibrate([60,40,60]);const t=this.getAudioContext();if(t)try{const s=t.currentTime,r=t.createOscillator(),i=t.createGain();r.type="sawtooth",r.frequency.setValueAtTime(320,s),r.frequency.setValueAtTime(280,s+.1),i.gain.setValueAtTime(.06,s),i.gain.exponentialRampToValueAtTime(.001,s+.25),r.connect(i),i.connect(t.destination),r.start(s),r.stop(s+.25)}catch{}}speak(t,s="en",r,i){if(typeof window>"u"||!("speechSynthesis"in window)){i&&i();return}try{window.speechSynthesis.cancel();const a=new SpeechSynthesisUtterance(t);a.rate=.92,a.pitch=1.05;const l=window.speechSynthesis.getVoices();if(s==="hi"){a.lang="hi-IN";const o=l.find(c=>c.lang.includes("hi")||c.name.includes("Hindi"));o&&(a.voice=o)}else if(s==="mr"){a.lang="mr-IN";const o=l.find(c=>c.lang.includes("mr")||c.name.includes("Marathi"));o&&(a.voice=o)}else{a.lang="en-IN";const o=l.find(c=>c.lang.includes("en-IN")||c.name.includes("India"));o&&(a.voice=o)}r&&(a.onstart=r),a.onend=()=>{i&&i()},a.onerror=()=>{i&&i()},window.speechSynthesis.speak(a)}catch{i&&i()}}stopSpeaking(){typeof window<"u"&&"speechSynthesis"in window&&window.speechSynthesis.cancel()}}const X=new Hh,fo=["splash","language","auth","location","notification","home","book_pickup","step1_photo","step1_hazardous_battery_detected","step2_category","safety_tips","step3_weight","step4_value","step5_buyer","payment","receipt","todays_prices","my_earnings","history","sync_status","profile"];function Kh({light:e,background:t}){const[s,r]=b.useState(()=>i(new Date));b.useEffect(()=>{const l=setInterval(()=>r(i(new Date)),15e3);return()=>clearInterval(l)},[]);function i(l){let o=l.getHours();const c=l.getMinutes();return o=o%12,o===0&&(o=12),`${o}:${c.toString().padStart(2,"0")}`}const a=e?"#FFFFFF":"#101A24";return n.jsxs("div",{className:`status-bar ${e?"status-bar-light":"status-bar-dark"}`,style:{background:t},children:[n.jsxs("div",{className:"status-bar-left",children:[n.jsx("span",{className:"time-display",children:s}),n.jsx("span",{className:"carrier-badge",children:"Jio 5G"})]}),n.jsx("div",{className:"dynamic-island",children:n.jsx("div",{className:"island-camera-dot"})}),n.jsxs("div",{className:"status-bar-icons",children:[n.jsxs("svg",{width:"17",height:"11",viewBox:"0 0 17 11",fill:"none",children:[n.jsx("rect",{x:"0",y:"7",width:"2.8",height:"4",rx:"0.8",fill:a}),n.jsx("rect",{x:"4.5",y:"5",width:"2.8",height:"6",rx:"0.8",fill:a}),n.jsx("rect",{x:"9",y:"2.5",width:"2.8",height:"8.5",rx:"0.8",fill:a}),n.jsx("rect",{x:"13.5",y:"0",width:"2.8",height:"11",rx:"0.8",fill:a})]}),n.jsx(Oh,{size:13,color:a,strokeWidth:2.6}),n.jsxs("div",{className:"battery-level-wrap",children:[n.jsx("span",{className:"battery-pct-text",children:"92%"}),n.jsxs("svg",{width:"24",height:"12",viewBox:"0 0 24 12",fill:"none",children:[n.jsx("rect",{x:"0.75",y:"0.75",width:"19",height:"10.5",rx:"3",stroke:a,strokeOpacity:"0.4",strokeWidth:"1"}),n.jsx("rect",{x:"2",y:"2",width:"15",height:"8",rx:"2",fill:e?"#4ADE80":"#0B6B4A"}),n.jsx("path",{d:"M21.5 4V8C22.2 7.6 22.6 6.8 22.6 6C22.6 5.2 22.2 4.4 21.5 4Z",fill:a,fillOpacity:"0.4"})]})]})]})]})}function Gh({currentScreen:e,setCurrentScreen:t,currentLang:s,setLanguage:r,children:i}){const[a,l]=b.useState(()=>typeof window>"u"?!1:window.innerWidth<=768||window.matchMedia("(max-width: 768px)").matches),[o,c]=b.useState(null),d=o!==null?o:a,[y,p]=b.useState("forward"),f=b.useRef(e);b.useEffect(()=>{if(typeof window>"u")return;const v=window.matchMedia("(max-width: 768px)"),C=h=>{const u=h.matches!==void 0?h.matches:window.innerWidth<=768;l(u),u&&c(null)};return v.addEventListener?v.addEventListener("change",C):v.addListener(C),window.addEventListener("resize",C),window.addEventListener("orientationchange",C),()=>{v.removeEventListener?v.removeEventListener("change",C):v.removeListener(C),window.removeEventListener("resize",C),window.removeEventListener("orientationchange",C)}},[]),b.useEffect(()=>{const v=fo.indexOf(f.current),C=fo.indexOf(e);p(C>=v?"forward":"backward"),f.current=e},[e]);const j=[{id:"splash",label:"1. Splash"},{id:"language",label:"2. Language"},{id:"auth",label:"3. Mobile & OTP"},{id:"location",label:"4. Location"},{id:"notification",label:"5. Notifications"},{id:"home",label:"6. Home"},{id:"book_pickup",label:"7. Book Pickup"},{id:"step1_photo",label:"8. Step 1: Photo"},{id:"step1_hazardous_battery_detected",label:"9. AI Hazard Alert"},{id:"step2_category",label:"10. Step 2: Category"},{id:"safety_tips",label:"11. Safety Tips"},{id:"step3_weight",label:"12. Step 3: Weight"},{id:"step4_value",label:"13. Step 4: Value"},{id:"step5_buyer",label:"14. Step 5: Buyer"},{id:"payment",label:"15. Payment"},{id:"receipt",label:"16. Receipt"},{id:"todays_prices",label:"17. Today's Prices"},{id:"my_earnings",label:"18. My Earnings"},{id:"history",label:"19. History"},{id:"sync_status",label:"20. Sync Status"},{id:"profile",label:"21. Profile"}],x=e==="home";return n.jsxs("div",{className:`app-viewport-wrapper ${d?"fullscreen-active":""}`,children:[n.jsxs("div",{className:"control-toolbar",children:[n.jsxs("div",{className:"toolbar-brand",children:[n.jsx(_h,{size:18,color:"#CAE0B8"}),n.jsx("span",{children:"Kabadiwala Connect Prototype"})]}),n.jsxs("div",{className:"toolbar-controls",children:[n.jsxs("button",{className:`btn-icon-toggle ${d?"":"active"}`,onClick:()=>c(!1),title:"Mobile Frame View",children:[n.jsx(po,{size:14}),n.jsx("span",{children:"Phone"})]}),n.jsxs("button",{className:`btn-icon-toggle ${d?"active":""}`,onClick:()=>c(!0),title:"Full Screen View",children:[n.jsx(Sh,{size:14}),n.jsx("span",{children:"Full"})]}),n.jsx("div",{className:"lang-quick-group",children:["en","hi","mr"].map(v=>n.jsx("button",{className:`lang-chip ${s===v?"active":""}`,onClick:()=>r(v),children:v.toUpperCase()},v))})]})]}),n.jsx("div",{className:"stepper-nav-bar",children:j.map(v=>n.jsx("button",{className:`stepper-btn ${e===v.id?"active":""}`,onClick:()=>t(v.id),children:v.label},v.id))}),n.jsxs("div",{className:`phone-frame ${d?"full-screen-mode":""}`,children:[n.jsx(Kh,{light:x,background:x?"linear-gradient(180deg, #174826 0%, #1C522D 100%)":"transparent"}),n.jsx("div",{className:"screen-container","data-direction":y,children:i},e),n.jsx("div",{className:"phone-home-indicator"})]}),d&&!a&&n.jsx("button",{className:"exit-fullscreen-btn",onClick:()=>c(!1),title:"Exit Full Screen","aria-label":"Exit Full Screen",children:n.jsx(po,{size:14})}),n.jsx("style",{children:`
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
      `})]})}function Qh({t:e,onNext:t}){return n.jsxs("div",{className:"splash-screen page-fade-enter",children:[n.jsx("div",{className:"splash-header",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/brand/kc_logo_lockup_transparent.png",alt:"Kabadiwala Connect Logo",className:"brand-logo-img"})}),n.jsx("div",{className:"splash-hero-container",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/splash_hero_illustration_transparent.png",alt:"E-waste Collection Illustration",className:"hero-illustration-img"})}),n.jsxs("div",{className:"splash-content-section",children:[n.jsx("h1",{className:"splash-headline",children:e.headline}),n.jsxs("p",{className:"splash-subheadline",children:["A smart way to sell e-waste,",n.jsx("br",{}),"earn better and build a cleaner future."]}),n.jsxs("button",{className:"primary-button splash-cta-btn",onClick:t,children:[n.jsx("span",{children:e.getStarted}),n.jsx(bt,{size:22,color:"#FFFFFF",strokeWidth:2.5})]}),n.jsxs("div",{className:"feature-badges-grid",children:[n.jsxs("div",{className:"feature-badge-item",children:[n.jsx("div",{className:"feature-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/badge_better_prices.png",alt:"Better Prices"})}),n.jsxs("div",{className:"feature-badge-text",children:[n.jsx("div",{className:"feature-title",children:e.betterPrices}),n.jsx("div",{className:"feature-desc",children:e.betterPricesDesc})]})]}),n.jsxs("div",{className:"feature-badge-item",children:[n.jsx("div",{className:"feature-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/badge_easy_pickups.png",alt:"Easy Pickups"})}),n.jsxs("div",{className:"feature-badge-text",children:[n.jsx("div",{className:"feature-title",children:e.easyPickups}),n.jsx("div",{className:"feature-desc",children:e.easyPickupsDesc})]})]}),n.jsxs("div",{className:"feature-badge-item",children:[n.jsx("div",{className:"feature-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/badge_safe_trusted.png",alt:"Safe & Trusted"})}),n.jsxs("div",{className:"feature-badge-text",children:[n.jsx("div",{className:"feature-title",children:e.safeTrusted}),n.jsx("div",{className:"feature-desc",children:e.safeTrustedDesc})]})]})]})]}),n.jsx("style",{children:`
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
      `})]})}function qh({t:e,currentLang:t,setLanguage:s,onNext:r,onBack:i}){const a=[{code:"en",name:"English",icon:"Aa"},{code:"hi",name:"हिंदी",icon:"आ"},{code:"mr",name:"मराठी",icon:"म"}];return n.jsxs("div",{className:"language-screen page-fade-enter",children:[n.jsx("div",{className:"top-nav-bar",children:i&&n.jsx("button",{className:"back-arrow-btn",onClick:i,"aria-label":"Go Back",children:n.jsx(ae,{size:20,color:"#1C522D"})})}),n.jsxs("div",{className:"language-container",children:[n.jsx("h1",{className:"language-title",children:e.chooseLanguage}),n.jsx("div",{className:"language-list",children:a.map(l=>{const o=t===l.code;return n.jsxs("div",{className:`language-card ${o?"selected":""}`,onClick:()=>s(l.code),children:[n.jsxs("div",{className:"language-card-left",children:[n.jsx("div",{className:"lang-icon-badge",children:l.icon}),n.jsx("span",{className:"lang-name",children:l.name})]}),n.jsx("div",{className:`radio-circle ${o?"active":""}`,children:o&&n.jsx("div",{className:"radio-inner-dot"})})]},l.code)})})]}),n.jsx("div",{className:"language-footer",children:n.jsx("button",{className:"primary-button continue-btn",onClick:r,children:e.continue})}),n.jsx("style",{children:`
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
      `})]})}function Yh({t:e,onSkip:t,onAuthenticated:s,onBack:r}){const[i,a]=b.useState(""),[l,o]=b.useState("phone"),[c,d]=b.useState(["","","",""]),y=()=>{l==="otp"?o("phone"):r&&r()},p=x=>{if(l==="phone")x==="backspace"?a(v=>v.slice(0,-1)):i.length<10&&a(v=>v+x);else if(x==="backspace"){const v=[...c];for(let C=3;C>=0;C--)if(v[C]!==""){v[C]="";break}d(v)}else{const v=[...c];for(let C=0;C<4;C++)if(v[C]===""){v[C]=x;break}d(v)}},f=()=>{l==="phone"?(i.length<10&&a("9876543210"),o("otp")):s({phone:i||"9876543210"})},j=[{num:"1",sub:""},{num:"2",sub:"ABC"},{num:"3",sub:"DEF"},{num:"4",sub:"GHI"},{num:"5",sub:"JKL"},{num:"6",sub:"MNO"},{num:"7",sub:"PQRS"},{num:"8",sub:"TUV"},{num:"9",sub:"WXYZ"},{num:"",sub:""},{num:"0",sub:""},{num:"backspace",sub:""}];return n.jsxs("div",{className:"auth-screen page-fade-enter",children:[n.jsxs("div",{className:"auth-header",children:[n.jsx("button",{className:"back-arrow-btn",onClick:y,"aria-label":"Go Back",children:n.jsx(ae,{size:20,color:"#1C522D"})}),n.jsx("button",{className:"skip-pill",onClick:t,children:e.skip})]}),n.jsx("div",{className:"auth-body",children:l==="phone"?n.jsxs(n.Fragment,{children:[n.jsx("h1",{className:"auth-title",children:e.enterMobile}),n.jsx("p",{className:"auth-subtitle",children:e.otpSubtitle}),n.jsxs("div",{className:`phone-input-box ${i?"has-value":""}`,children:[n.jsxs("div",{className:"country-code",children:[n.jsx("span",{children:"+91"}),n.jsx(Nn,{size:16,color:"#538A46"})]}),n.jsx("div",{className:"input-divider"}),n.jsx("div",{className:"phone-display-value",children:i||n.jsx("span",{className:"placeholder",children:e.mobilePlaceholder})})]}),n.jsx("button",{className:"primary-button continue-btn",onClick:f,children:e.continue}),n.jsxs("p",{className:"terms-disclaimer",children:[e.termsText," ",n.jsx("a",{href:"#terms",children:e.termsOfService}),","," ",n.jsx("a",{href:"#privacy",children:e.privacyPolicy})," and ",n.jsx("a",{href:"#content",children:e.contentPolicy}),"."]})]}):n.jsxs(n.Fragment,{children:[n.jsx("h1",{className:"auth-title",children:e.verifyOtpTitle}),n.jsxs("p",{className:"auth-subtitle",children:[e.verifyOtpSubtitle," ",n.jsxs("strong",{children:["+91 ",i||"9876543210"]})]}),n.jsx("div",{className:"otp-input-container",children:[0,1,2,3].map(x=>n.jsx("div",{className:`otp-box ${c[x]?"filled":""}`,children:c[x]||(x===c.findIndex(v=>v==="")?"|":"")},x))}),n.jsx("button",{className:"primary-button continue-btn",onClick:f,children:e.verify}),n.jsxs("div",{className:"resend-otp-link",onClick:()=>d(["1","2","3","4"]),children:[e.resendOtp," (Tap to Auto-Fill 1234)"]})]})}),n.jsx("div",{className:"custom-keypad",children:j.map((x,v)=>x.num===""?n.jsx("div",{className:"keypad-cell empty"},v):x.num==="backspace"?n.jsx("div",{className:"keypad-cell backspace-cell",onClick:()=>p("backspace"),children:n.jsx(gh,{size:22,color:"#1B1B1B"})},v):n.jsxs("div",{className:"keypad-cell",onClick:()=>p(x.num),children:[n.jsx("div",{className:"key-num",children:x.num}),x.sub&&n.jsx("div",{className:"key-sub",children:x.sub})]},v))}),n.jsx("style",{children:`
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
      `})]})}function Xh({t:e,onNext:t,onBack:s}){return n.jsxs("div",{className:"location-screen page-fade-enter",children:[n.jsx("div",{className:"top-nav-bar",children:s&&n.jsx("button",{className:"back-arrow-btn",onClick:s,"aria-label":"Go Back",children:n.jsx(ae,{size:20,color:"#1C522D"})})}),n.jsx("div",{className:"location-hero-container",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/illustrations/location_hero_transparent_clean.png",alt:"Map Location Hero",className:"location-hero-img"})}),n.jsxs("div",{className:"location-content",children:[n.jsx("h1",{className:"location-title",children:e.whatsYourLocation}),n.jsx("p",{className:"location-subtitle",children:e.locationSubtitle}),n.jsxs("div",{className:"location-bullets-list",children:[n.jsxs("div",{className:"bullet-item",children:[n.jsx("div",{className:"bullet-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/bullet_nearby_badge.png",alt:"Find Nearby"})}),n.jsxs("div",{className:"bullet-text",children:[n.jsx("div",{className:"bullet-title",children:e.findNearbyPartners}),n.jsx("div",{className:"bullet-desc",children:e.findNearbyPartnersDesc})]})]}),n.jsxs("div",{className:"bullet-item",children:[n.jsx("div",{className:"bullet-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/bullet_faster_badge.png",alt:"Faster Pickups"})}),n.jsxs("div",{className:"bullet-text",children:[n.jsx("div",{className:"bullet-title",children:e.fasterPickups}),n.jsx("div",{className:"bullet-desc",children:e.fasterPickupsDesc})]})]}),n.jsxs("div",{className:"bullet-item",children:[n.jsx("div",{className:"bullet-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/bullet_secure_badge.png",alt:"Secure & Private"})}),n.jsxs("div",{className:"bullet-text",children:[n.jsx("div",{className:"bullet-title",children:e.securePrivate}),n.jsx("div",{className:"bullet-desc",children:e.securePrivateDesc})]})]})]})]}),n.jsxs("div",{className:"location-actions",children:[n.jsxs("button",{className:"primary-button loc-primary-btn",onClick:t,children:[n.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/current_location_clean.png",alt:"Current Location",className:"btn-icon-img"}),n.jsx("span",{children:e.useCurrentLocation})]}),n.jsxs("button",{className:"secondary-button loc-secondary-btn",onClick:t,children:[n.jsx("img",{src:"/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/search_location_clean.png",alt:"Search Location",className:"btn-icon-img"}),n.jsx("span",{children:e.searchLocationManually})]})]}),n.jsx("style",{children:`
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
      `})]})}function Zh({t:e,onNext:t,onBack:s}){return n.jsxs("div",{className:"notification-screen page-fade-enter",children:[n.jsx("div",{className:"top-nav-bar",children:s&&n.jsx("button",{className:"back-arrow-btn",onClick:s,"aria-label":"Go Back",children:n.jsx(ae,{size:20,color:"#1C522D"})})}),n.jsx("div",{className:"notification-hero-container",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Notification_UI_Asset_Pack/illustrations/notification_permission_hero_transparent.png",alt:"Notification Permission Hero",className:"notification-hero-img"})}),n.jsxs("div",{className:"notification-content",children:[n.jsx("h1",{className:"notification-title",children:e.allowNotificationsTitle}),n.jsxs("div",{className:"notification-bullets-list",children:[n.jsxs("div",{className:"bullet-item",children:[n.jsx("div",{className:"bullet-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Notification_UI_Asset_Pack/icons/notif_partner_badge.png",alt:"Partner Updates"})}),n.jsxs("div",{className:"bullet-text",children:[n.jsx("div",{className:"bullet-title",children:e.realtimePartnerUpdates}),n.jsx("div",{className:"bullet-desc",children:e.realtimePartnerUpdatesDesc})]})]}),n.jsxs("div",{className:"bullet-item",children:[n.jsx("div",{className:"bullet-icon-wrapper",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Notification_UI_Asset_Pack/icons/notif_offers_badge.png",alt:"Offers & News"})}),n.jsxs("div",{className:"bullet-text",children:[n.jsx("div",{className:"bullet-title",children:e.offersAndNews}),n.jsx("div",{className:"bullet-desc",children:e.offersAndNewsDesc})]})]})]})]}),n.jsxs("div",{className:"notification-actions",children:[n.jsx("button",{className:"primary-button notif-primary-btn",onClick:t,children:n.jsx("span",{children:e.allowPermission})}),n.jsx("button",{className:"secondary-button notif-secondary-btn",onClick:t,children:n.jsx("span",{children:e.maybeLater})})]}),n.jsx("style",{children:`
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
      `})]})}function Jh({t:e,user:t,currentLang:s,onNavigate:r}){const[i,a]=b.useState("home"),[l,o]=b.useState("Rohini, Delhi"),[c,d]=b.useState(!1),[y,p]=b.useState(null),[f,j]=b.useState(!1),[x,v]=b.useState(!0),[C,h]=b.useState(null),[u,g]=b.useState(0),m=[{id:0,title:`Hassle-free
Scrap Collection`,subtitle:`Schedule your
pickup in seconds.`,btnText:"Request Pickup",image:"/assets/home/truck_hero.png",tag:"Verified Fleet"},{id:1,title:`Instant AI
Rate Discovery`,subtitle:`Scan circuit boards &
get fair market cash.`,btnText:"Scan Now",image:"/assets/home/icon_ewaste.png",tag:"AI Powered"},{id:2,title:`Highest Payout
Guaranteed`,subtitle:`CPCB authorized partners
with zero middlemen.`,btnText:"View Rates",image:"/assets/home/icon_sell_scrap.png",tag:"Best Rates"}],k=[{name:"Motherboards (Grade A)",category:"E-Waste",rate:"₹340 / kg",trend:"+4.5%",icon:"💻"},{name:"Copper Wiring (Clean)",category:"Metals",rate:"₹420 / kg",trend:"+2.1%",icon:"🔌"},{name:"Lithium-Ion Batteries",category:"Batteries",rate:"₹185 / kg",trend:"+1.2%",icon:"🔋"},{name:"Telecom & Server PCBs",category:"High Value",rate:"₹520 / kg",trend:"+6.8%",icon:"📡"},{name:"Mixed Mobile Scrap",category:"E-Waste",rate:"₹290 / kg",trend:"+0.5%",icon:"📱"},{name:"Aluminium Heatsinks",category:"Metals",rate:"₹145 / kg",trend:"-1.0%",icon:"⚙️"}],_=[{id:"BK-8821",partner:"EcoMet Recycling India",status:"Driver Arriving in 12 mins",material:"PCB & Electronic Scrap (14.5 kg)",estPayout:"₹4,640",time:"Today, 4:30 PM",active:!0},{id:"BK-8790",partner:"GreenTech Urban Processors",status:"Completed & Paid via UPI",material:"Copper Cable & Adapters (8.2 kg)",estPayout:"₹2,870",time:"Yesterday, 2:15 PM",active:!1}],P=["Rohini, Delhi","Andheri West, Mumbai","Koramangala, Bengaluru","Kothrud, Pune","Connaught Place, Delhi"];b.useEffect(()=>{const w=setInterval(()=>{g(F=>(F+1)%m.length)},4500);return()=>clearInterval(w)},[m.length]);const A=()=>{j(!0),v(!0),h(null),setTimeout(()=>{v(!1),h({detected:"Printed Circuit Board (Grade A) + Copper Core",confidence:"96.4%",weight:"12.8 kg",rate:"₹340 / kg",payout:"₹4,352"})},2200)};return n.jsxs("div",{className:"home-screen page-fade-enter",children:[n.jsxs("div",{className:"home-scroll-container",children:[n.jsxs("div",{className:"home-header",children:[n.jsxs("div",{className:"header-top-row",children:[n.jsxs("div",{className:"brand-header-group",children:[n.jsx("div",{className:"logo-badge",children:n.jsx("img",{src:"/assets/home/logo_kc.png",alt:"KC Mark"})}),n.jsxs("div",{className:"brand-text-group",children:[n.jsxs("div",{className:"brand-title",children:[n.jsx("strong",{className:"bold-white",children:"Kabadiwala"}),n.jsx("span",{className:"light-green",children:" Connect"})]}),n.jsx("div",{className:"brand-tagline",children:"Cleaner today, greener tomorrow"})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[n.jsxs("button",{className:"header-sync-pill",onClick:()=>r?r("sync_status"):null,title:"Offline Sync Status",children:[n.jsx("span",{className:"pulsing-dot amber",style:{width:"6px",height:"6px"}}),n.jsx("span",{children:"Sync (3)"})]}),n.jsxs("button",{className:"notif-btn ring-animation",onClick:()=>p("notifications"),"aria-label":"Notifications",children:[n.jsx(fh,{size:19,color:"#FFFFFF"}),n.jsx("span",{className:"notif-dot pulse-dot"})]})]})]}),n.jsxs("div",{className:"greeting-row",children:[n.jsxs("div",{className:"user-greeting",children:[n.jsxs("h1",{children:["Hi, ",(t==null?void 0:t.name)||"Rakesh","!"]}),n.jsx("p",{children:"Ready to make a difference today?"})]}),n.jsxs("div",{className:"location-pill interactive-chip",onClick:()=>d(!c),children:[n.jsx(gt,{size:13,color:"#FFFFFF"}),n.jsx("span",{children:l}),n.jsx(Nn,{size:13,color:"#FFFFFF"})]})]}),c&&n.jsx("div",{className:"location-dropdown slide-down-enter",children:P.map(w=>n.jsxs("div",{className:`loc-item ${l===w?"active":""}`,onClick:()=>{o(w),d(!1)},children:[n.jsx(gt,{size:14}),n.jsx("span",{children:w})]},w))})]}),i==="home"&&n.jsxs("div",{className:"home-body tab-content-fade",children:[n.jsxs("div",{className:"carousel-wrapper",children:[n.jsxs("div",{className:"hero-pickup-card animated-card",children:[n.jsx("span",{className:"card-top-tag",children:m[u].tag}),n.jsxs("div",{className:"hero-card-left",children:[n.jsx("h2",{className:"slide-title",children:m[u].title}),n.jsx("p",{className:"slide-sub",children:m[u].subtitle}),n.jsxs("button",{className:"request-pickup-btn elastic-button",onClick:()=>{u===1?A():u===2?a("rates"):p("pickup")},children:[n.jsx("span",{children:m[u].btnText}),n.jsx(bt,{size:16,color:"#1C522D",strokeWidth:2.5})]})]}),n.jsx("div",{className:"hero-card-right",children:n.jsx("img",{src:m[u].image,alt:"Feature Graphic",className:"truck-illustration float-animation"},u)})]}),n.jsx("div",{className:"carousel-dots",children:m.map((w,F)=>n.jsx("span",{className:`dot ${u===F?"active":""}`,onClick:()=>g(F)},w.id))})]}),n.jsxs("div",{className:"hub-grid",children:[n.jsxs("div",{className:"grid-card card-mint hover-lift",onClick:()=>r?r("step1_photo"):p("pickup"),children:[n.jsx("div",{className:"card-header-icon",children:n.jsx("img",{src:"/assets/home/icon_sell_scrap.png",alt:"Sell Scrap",className:"hub-icon-img"})}),n.jsxs("div",{className:"card-info",children:[n.jsx("h3",{children:"Sell Scrap"}),n.jsx("p",{children:"Get the best price"})]}),n.jsx("div",{className:"arrow-badge",children:n.jsx(xe,{size:15,color:"#1C522D"})})]}),n.jsxs("div",{className:"grid-card card-warm hover-lift",onClick:()=>A(),children:[n.jsx("div",{className:"card-header-icon",children:n.jsx("img",{src:"/assets/home/icon_ewaste.png",alt:"E-Waste Collection",className:"hub-icon-img"})}),n.jsxs("div",{className:"card-info",children:[n.jsxs("h3",{children:["E-Waste",n.jsx("br",{}),"Collection"]}),n.jsx("p",{children:"Pickup at your doorstep"})]}),n.jsx("div",{className:"arrow-badge",children:n.jsx(xe,{size:15,color:"#1C522D"})})]}),n.jsxs("div",{className:"grid-card card-warm hover-lift",onClick:()=>r?r("my_earnings"):p("earnings"),children:[n.jsx("div",{className:"card-header-icon",children:n.jsx("img",{src:"/assets/home/icon_earnings.png",alt:"My Earnings",className:"hub-icon-img"})}),n.jsxs("div",{className:"card-info",children:[n.jsx("h3",{children:"My Earnings"}),n.jsx("p",{children:"Track your income"})]}),n.jsx("div",{className:"arrow-badge",children:n.jsx(xe,{size:15,color:"#1C522D"})})]}),n.jsxs("div",{className:"grid-card card-mint hover-lift",onClick:()=>r?r("history"):p("history"),children:[n.jsx("div",{className:"card-header-icon",children:n.jsx("img",{src:"/assets/home/icon_history.png",alt:"View History",className:"hub-icon-img"})}),n.jsxs("div",{className:"card-info",children:[n.jsx("h3",{children:"View History"}),n.jsx("p",{children:"Track your activity"})]}),n.jsx("div",{className:"arrow-badge",children:n.jsx(xe,{size:15,color:"#1C522D"})})]})]}),n.jsxs("div",{className:"market-trends-card hover-lift",onClick:()=>r?r("todays_prices"):a("rates"),children:[n.jsxs("div",{className:"mt-left",children:[n.jsx("div",{className:"mt-icon-wrapper pulse-soft",children:n.jsx("img",{src:"/assets/home/icon_trends.png",alt:"Market Trends",className:"trends-icon-img"})}),n.jsxs("div",{className:"mt-text",children:[n.jsx("h3",{children:"Market Trends"}),n.jsx("p",{children:"See what's in demand today"})]})]}),n.jsx("div",{className:"arrow-badge",children:n.jsx(xe,{size:15,color:"#1C522D"})})]})]}),i==="bookings"&&n.jsxs("div",{className:"home-body tab-content-fade",children:[n.jsxs("div",{className:"section-title-row",children:[n.jsx("h2",{children:"Active Bookings"}),n.jsx("span",{className:"count-pill",children:"2 Total"})]}),n.jsx("div",{className:"bookings-list",children:_.map(w=>n.jsxs("div",{className:`booking-card ${w.active?"active-bk":""}`,children:[n.jsxs("div",{className:"bk-header",children:[n.jsxs("div",{children:[n.jsx("span",{className:"bk-id",children:w.id}),n.jsx("h3",{className:"bk-partner",children:w.partner})]}),n.jsx("span",{className:`bk-status-tag ${w.active?"tag-live":"tag-done"}`,children:w.active?"● Driver En Route":"✓ Completed"})]}),n.jsxs("div",{className:"bk-body",children:[n.jsxs("div",{className:"bk-mat",children:["📦 ",w.material]}),n.jsxs("div",{className:"bk-time",children:["🕒 ",w.time]})]}),n.jsxs("div",{className:"bk-footer",children:[n.jsxs("div",{className:"bk-payout",children:[n.jsx("span",{children:"Estimated Payout:"}),n.jsx("strong",{children:w.estPayout})]}),w.active&&n.jsxs("button",{className:"call-driver-btn",onClick:()=>alert("Calling driver..."),children:[n.jsx(Eh,{size:14}),n.jsx("span",{children:"Call Driver"})]})]})]},w.id))})]}),i==="rates"&&n.jsxs("div",{className:"home-body tab-content-fade",children:[n.jsxs("div",{className:"rates-header-box",children:[n.jsx("h2",{children:"Live Scrap Rates"}),n.jsxs("p",{children:["Verified real-time CPCB market quotes for ",l]})]}),n.jsx("div",{className:"rates-table-list",children:k.map((w,F)=>n.jsxs("div",{className:"rate-table-row hover-lift",children:[n.jsxs("div",{className:"rate-left",children:[n.jsx("span",{className:"rate-emoji",children:w.icon}),n.jsxs("div",{children:[n.jsx("h4",{children:w.name}),n.jsx("span",{className:"rate-cat-tag",children:w.category})]})]}),n.jsxs("div",{className:"rate-right",children:[n.jsx("div",{className:"rate-val",children:w.rate}),n.jsx("span",{className:`rate-trend ${w.trend.startsWith("+")?"up":"down"}`,children:w.trend})]})]},F))})]}),i==="profile"&&n.jsxs("div",{className:"home-body tab-content-fade",children:[n.jsxs("div",{className:"profile-card",children:[n.jsxs("div",{className:"profile-top",children:[n.jsx("div",{className:"prof-avatar",children:n.jsx("span",{children:"RK"})}),n.jsxs("div",{className:"prof-info",children:[n.jsx("h3",{children:(t==null?void 0:t.name)||"Rakesh Kumar"}),n.jsxs("p",{children:["📱 +91 ",(t==null?void 0:t.phone)||"9876543210"]}),n.jsxs("span",{className:"cpcb-verified-badge",children:[n.jsx(os,{size:13,color:"#1C522D"}),n.jsx("span",{children:"CPCB Level-1 Collector"})]})]})]}),n.jsxs("div",{className:"profile-stats-grid",children:[n.jsxs("div",{className:"p-stat",children:[n.jsx("span",{children:"Total Recycled"}),n.jsx("strong",{children:"148.5 kg"})]}),n.jsxs("div",{className:"p-stat",children:[n.jsx("span",{children:"Lifetime Earnings"}),n.jsx("strong",{children:"₹42,850"})]})]})]}),n.jsxs("div",{className:"profile-actions-list",children:[n.jsxs("div",{className:"p-action-row",onClick:()=>p("earnings"),children:[n.jsx("span",{children:"💰 Payment Ledger & Bank Accounts"}),n.jsx(xe,{size:16,color:"#8C938E"})]}),n.jsxs("div",{className:"p-action-row",onClick:()=>p("history"),children:[n.jsx("span",{children:"📄 Handover Certificates (Form-2)"}),n.jsx(xe,{size:16,color:"#8C938E"})]}),n.jsxs("div",{className:"p-action-row",onClick:()=>d(!0),children:[n.jsx("span",{children:"📍 Preferred Service Zone"}),n.jsx(xe,{size:16,color:"#8C938E"})]})]})]})]}),f&&n.jsxs("div",{className:"camera-overlay page-fade-enter",children:[n.jsxs("div",{className:"camera-header",children:[n.jsxs("div",{className:"cam-title-group",children:[n.jsx(ho,{size:18,color:"#FFC837"}),n.jsx("span",{children:"AI Material Valuation Scan"})]}),n.jsx("button",{className:"close-cam-btn",onClick:()=>j(!1),children:n.jsx(pe,{size:20,color:"#FFFFFF"})})]}),n.jsxs("div",{className:"cam-viewfinder",children:[n.jsxs("div",{className:"scanner-target-box",children:[n.jsx("div",{className:"corner top-left"}),n.jsx("div",{className:"corner top-right"}),n.jsx("div",{className:"corner bottom-left"}),n.jsx("div",{className:"corner bottom-right"}),x&&n.jsx("div",{className:"cam-laser-line"}),n.jsx("img",{src:"/assets/home/truck_hero.png",alt:"Scanning E-Waste",className:"cam-feed-preview"}),C&&n.jsx("div",{className:"detection-bounding-box page-fade-enter",children:n.jsx("span",{className:"det-tag",children:"PCB Grade A • 96.4% Match"})})]}),x?n.jsxs("div",{className:"cam-status-pill",children:[n.jsx(Xa,{size:14,className:"spin-fast"}),n.jsx("span",{children:"Analyzing precious metal composition..."})]}):C&&n.jsxs("div",{className:"scan-summary-drawer slide-up-enter",children:[n.jsx("div",{className:"drawer-handle"}),n.jsxs("div",{className:"drawer-header",children:[n.jsx($t,{size:24,color:"#538A46"}),n.jsxs("div",{children:[n.jsx("h3",{children:"AI Valuation Confirmed"}),n.jsx("p",{children:C.detected})]})]}),n.jsxs("div",{className:"drawer-stats",children:[n.jsxs("div",{className:"d-box",children:[n.jsx("span",{children:"Estimated Weight"}),n.jsx("strong",{children:C.weight})]}),n.jsxs("div",{className:"d-box",children:[n.jsx("span",{children:"Market Rate"}),n.jsx("strong",{children:C.rate})]})]}),n.jsxs("div",{className:"d-total-banner",children:[n.jsxs("div",{children:[n.jsx("span",{children:"Total Payout Guarantee"}),n.jsx("h2",{children:C.payout})]}),n.jsx("button",{className:"confirm-deal-btn",onClick:()=>{j(!1),p("pickup")},children:"Schedule Pickup"})]})]})]})]}),y&&n.jsx("div",{className:"modal-backdrop",onClick:()=>p(null),children:n.jsxs("div",{className:"modal-card slide-up-enter",onClick:w=>w.stopPropagation(),children:[n.jsx("div",{className:"drawer-handle"}),n.jsxs("div",{className:"modal-header",children:[n.jsxs("h3",{children:[y==="pickup"&&"Schedule Scrap Pickup",y==="earnings"&&"My Earnings Ledger",y==="history"&&"Pickup & Transaction History",y==="trends"&&"Today's Market Rates",y==="notifications"&&"Notifications"]}),n.jsx("button",{className:"close-modal-btn",onClick:()=>p(null),children:n.jsx(pe,{size:18,color:"#1C522D"})})]}),n.jsxs("div",{className:"modal-body",children:[y==="pickup"&&n.jsxs("div",{className:"pickup-form-demo",children:[n.jsxs("p",{className:"modal-sub",children:["Select e-waste category & schedule doorstep pickup in ",n.jsx("strong",{children:l}),":"]}),n.jsxs("div",{className:"cat-pills",children:[n.jsx("span",{className:"cat-pill active",children:"Computer PCBs"}),n.jsx("span",{className:"cat-pill",children:"Mobile Phones"}),n.jsx("span",{className:"cat-pill",children:"Batteries"}),n.jsx("span",{className:"cat-pill",children:"Copper Cable"})]}),n.jsxs("div",{className:"rate-estimate-box",children:[n.jsx("span",{children:"Estimated Instant Payout:"}),n.jsx("strong",{children:"₹320 / kg (Direct UPI / Cash)"})]}),n.jsx("button",{className:"primary-button",onClick:()=>{alert(`Doorstep pickup scheduled successfully for ${l}!`),p(null)},children:"Confirm Doorstep Pickup"})]}),y==="earnings"&&n.jsxs("div",{className:"earnings-demo",children:[n.jsxs("div",{className:"total-earnings-box",children:[n.jsx("span",{children:"Total Earnings This Month"}),n.jsx("h2",{children:"₹18,450"}),n.jsx("span",{className:"sub-stat",children:"100% Verified CPCB Handover Credits"})]}),n.jsxs("div",{className:"history-item",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"PCB Scrap Lot #982"}),n.jsx("div",{className:"h-date",children:"Today • Rohini Hub"})]}),n.jsx("span",{className:"h-amt",children:"+₹4,640"})]}),n.jsxs("div",{className:"history-item",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Copper Scrap Lot #971"}),n.jsx("div",{className:"h-date",children:"2 days ago • UPI Credit"})]}),n.jsx("span",{className:"h-amt",children:"+₹3,810"})]})]}),y==="history"&&n.jsxs("div",{className:"history-demo",children:[n.jsxs("div",{className:"history-item",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"EcoMet Recycling Pvt Ltd"}),n.jsx("div",{className:"h-date",children:"Lot #KC-8842 • 14.5 kg"})]}),n.jsx("span",{className:"h-amt",children:"✓ Handed Over"})]}),n.jsxs("div",{className:"history-item",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"JNARDDC Verified Facility"}),n.jsx("div",{className:"h-date",children:"Lot #KC-8710 • 22.0 kg"})]}),n.jsx("span",{className:"h-amt",children:"✓ Handed Over"})]})]}),y==="notifications"&&n.jsxs("div",{className:"notif-demo",children:[n.jsxs("div",{className:"notif-card",children:[n.jsx(Ja,{size:20,color:"#538A46"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Driver On The Way!"}),n.jsx("p",{children:"EcoMet Pickup partner is 1.2 km away from your location."}),n.jsx("span",{className:"notif-time",children:"Just now"})]})]}),n.jsxs("div",{className:"notif-card",children:[n.jsx(ho,{size:20,color:"#FFC837"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Rate Increase Alert"}),n.jsx("p",{children:"Copper wiring rate jumped +₹15/kg today."}),n.jsx("span",{className:"notif-time",children:"2h ago"})]})]})]})]})]})}),n.jsxs("div",{className:"home-nav-bar",children:[n.jsxs("button",{className:`nav-tab ${i==="home"?"active":""}`,onClick:()=>a("home"),children:[n.jsx(Ht,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Home"})]}),n.jsxs("button",{className:`nav-tab ${i==="bookings"?"active":""}`,onClick:()=>r?r("book_pickup"):a("bookings"),children:[n.jsx(Vt,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Bookings"})]}),n.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:()=>r?r("step1_photo"):A(),"aria-label":"Camera Scan",children:[n.jsx(_t,{size:26,color:"#FFFFFF"}),n.jsx("span",{className:"fab-label",children:"Camera"})]}),n.jsxs("button",{className:`nav-tab ${i==="rates"?"active":""}`,onClick:()=>r?r("todays_prices"):a("rates"),children:[n.jsx(fs,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Rates"})]}),n.jsxs("button",{className:`nav-tab ${i==="profile"?"active":""}`,onClick:()=>r?r("profile"):a("profile"),children:[n.jsx(jt,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Profile"})]})]}),n.jsx("style",{children:`
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
      `})]})}function ef({t:e,onNext:t,onBack:s}){const[r,i]=b.useState(!1),[a,l]=b.useState(!1),[o,c]=b.useState(null),d=b.useRef(null),y=[{num:1,label:"Photo",active:!0},{num:2,label:"Category",active:!1},{num:3,label:"Weight",active:!1},{num:4,label:"Value",active:!1},{num:5,label:"Buyer",active:!1}],p=()=>{X.cameraShutter(),l(!0),setTimeout(()=>{l(!1),t&&t({photoUrl:o||"/assets/Kabadiwala_Connect_Hazardous_Battery_Detected_UI_Asset_Pack/02_app_assets/camera_preview_reference.png",flashUsed:r})},450)},f=()=>{X.tapTick(),d.current&&d.current.click()},j=x=>{var C;const v=(C=x.target.files)==null?void 0:C[0];if(v){const h=new FileReader;h.onload=u=>{c(u.target.result),t&&t({photoUrl:u.target.result,flashUsed:r})},h.readAsDataURL(v)}};return n.jsxs("div",{className:"step1-photo-screen page-fade-enter",children:[n.jsx("input",{type:"file",ref:d,onChange:j,accept:"image/*",style:{display:"none"}}),n.jsxs("div",{className:"step-header",children:[n.jsx("button",{className:"step-back-btn",onClick:s,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsxs("div",{className:"step-header-text",children:[n.jsx("h1",{className:"step-title",children:"Take a photo of your scrap"}),n.jsx("p",{className:"step-subtitle",children:"Make sure the item is clearly visible"})]})]}),n.jsxs("div",{className:"stepper-container",children:[n.jsx("div",{className:"stepper-line"}),n.jsx("div",{className:"stepper-steps",children:y.map(x=>n.jsxs("div",{className:`stepper-item ${x.active?"active":""}`,children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:x.num})}),n.jsx("span",{className:"stepper-label",children:x.label})]},x.num))})]}),n.jsx("div",{className:"camera-viewfinder-container",children:n.jsxs("div",{className:`camera-viewfinder ${a?"shutter-flash":""}`,children:[n.jsx("img",{src:o||"/assets/Kabadiwala_Connect_Step1_TakePhoto_UI_Asset_Pack/01_camera_illustration/scrap_photo_reference.jpg",alt:"Scrap Camera Feed",className:"camera-feed-img"}),r&&n.jsx("div",{className:"flash-active-indicator",title:"Flash Enabled"}),n.jsx("div",{className:"corner-bracket top-left"}),n.jsx("div",{className:"corner-bracket top-right"}),n.jsx("div",{className:"corner-bracket bottom-left"}),n.jsx("div",{className:"corner-bracket bottom-right"}),n.jsxs("div",{className:"viewfinder-pill-overlay",children:[n.jsx(_t,{size:16,color:"#FFFFFF",strokeWidth:2.2}),n.jsx("span",{children:"Position your scrap within the frame"})]}),a&&n.jsx("div",{className:"shutter-flash-overlay"})]})}),n.jsxs("div",{className:"camera-controls-bar",children:[n.jsxs("button",{className:"control-action-btn",onClick:()=>i(!r),"aria-label":"Toggle Flash",children:[n.jsx("div",{className:`control-icon-circle ${r?"active-flash":""}`,children:r?n.jsx(Ja,{size:22,color:"#D89B2B",strokeWidth:2.2}):n.jsx($h,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("span",{className:"control-label-title",children:"Flash"}),n.jsx("span",{className:"control-label-sub",children:r?"On":"Off"})]}),n.jsx("button",{className:"shutter-btn-outer",onClick:p,"aria-label":"Capture Photo",children:n.jsx("div",{className:"shutter-btn-inner"})}),n.jsxs("button",{className:"control-action-btn",onClick:f,"aria-label":"Choose from Gallery",children:[n.jsx("div",{className:"control-icon-circle",children:n.jsx(Pd,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("span",{className:"control-label-title",children:"Gallery"}),n.jsx("span",{className:"control-label-sub",children:"Choose from photos"})]})]}),n.jsxs("div",{className:"step1-tip-card",children:[n.jsx("div",{className:"tip-icon-circle",children:n.jsx(Ch,{size:20,color:"#FFFFFF",strokeWidth:2.2})}),n.jsxs("div",{className:"tip-text-content",children:[n.jsx("h4",{className:"tip-heading",children:"Take a clear photo"}),n.jsx("p",{className:"tip-body",children:"Good lighting and a clear view helps get a better price."})]})]})]})}function tf({t:e,photoUrl:t,initialCategory:s="pcb",onNext:r,onBack:i,onRetake:a}){const[l,o]=b.useState(s||"pcb"),c=[{id:"crt_tv",title:"CRT TV",sub:null,image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/crt_tv_reference.jpg"},{id:"lcd_display",title:"LCD Display",sub:null,image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/lcd_display_reference.jpg"},{id:"pcb",title:"PCB",sub:"(Circuit Board)",image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/pcb_circuit_board_reference.jpg"},{id:"cables_wires",title:"Cables & Wires",sub:null,image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/cables_wires_reference.jpg"},{id:"car_battery",title:"Car Battery",sub:null,image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/car_battery_reference.jpg"},{id:"motor_magnet",title:"Motor & Magnet",sub:null,image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/motor_magnet_reference.jpg"},{id:"mixed_plastic",title:"Mixed Plastic",sub:null,image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/mixed_plastic_reference.jpg"},{id:"other_items",title:"Other Items",sub:null,image:"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/other_items_reference.jpg"}],d=()=>{const p=c.find(f=>f.id===l);r&&r({categoryId:l,categoryName:p?p.title:"PCB",categorySub:(p==null?void 0:p.sub)||"",categoryImage:p==null?void 0:p.image})},y=t||"/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/captured_photo_thumbnail.jpg";return n.jsxs("div",{className:"step2-category-screen page-fade-enter",children:[n.jsxs("div",{className:"step-header",children:[n.jsx("button",{className:"step-back-btn",onClick:i,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("div",{className:"step-header-text",children:n.jsx("h1",{className:"step-title",children:"Select Scrap Category"})})]}),n.jsxs("div",{className:"stepper-container",children:[n.jsx("div",{className:"stepper-line"}),n.jsx("div",{className:"stepper-line-progress",style:{width:"25%"}}),n.jsxs("div",{className:"stepper-steps",children:[n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(q,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:"Photo"})]}),n.jsxs("div",{className:"stepper-item active",children:[n.jsx("div",{className:"stepper-circle active",children:n.jsx("span",{children:"2"})}),n.jsx("span",{className:"stepper-label active-text",children:"Category"})]}),n.jsxs("div",{className:"stepper-item",children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:"3"})}),n.jsx("span",{className:"stepper-label",children:"Weight"})]}),n.jsxs("div",{className:"stepper-item",children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:"4"})}),n.jsx("span",{className:"stepper-label",children:"Value"})]}),n.jsxs("div",{className:"stepper-item",children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:"5"})}),n.jsx("span",{className:"stepper-label",children:"Buyer"})]})]})]}),n.jsxs("div",{className:"captured-photo-card",children:[n.jsx("img",{src:y,alt:"Captured scrap preview",className:"captured-thumbnail-img"}),n.jsxs("div",{className:"captured-info",children:[n.jsx("h4",{className:"captured-title",children:"Captured Photo"}),n.jsx("p",{className:"captured-subtitle",children:"Tap to retake or change"})]}),n.jsx("button",{className:"change-photo-btn",onClick:a||i,"aria-label":"Change Photo",children:"Change"})]}),n.jsxs("div",{className:"category-section-header",children:[n.jsx("h2",{className:"category-heading",children:"What type of scrap is this?"}),n.jsx("p",{className:"category-subheading",children:"Choose the closest category."})]}),n.jsx("div",{className:"category-grid",children:c.map(p=>{const f=l===p.id;return n.jsxs("div",{className:`category-card ${f?"selected":""}`,onClick:()=>o(p.id),children:[f&&n.jsx("div",{className:"category-check-badge",children:n.jsx(q,{size:12,color:"#FFFFFF",strokeWidth:3})}),n.jsx("div",{className:"category-img-wrapper",children:n.jsx("img",{src:p.image,alt:p.title,className:"category-img"})}),n.jsxs("div",{className:"category-name-block",children:[n.jsx("span",{className:"category-name",children:p.title}),p.sub&&n.jsx("span",{className:"category-subname",children:p.sub})]})]},p.id)})}),n.jsx("div",{className:"step-bottom-cta",children:n.jsxs("button",{className:"step-primary-cta-btn",onClick:d,children:[n.jsx("span",{children:"Next"}),n.jsx(bt,{size:18,strokeWidth:2.5})]})})]})}function nf({t:e,categoryData:t,initialWeight:s=2.5,onNext:r,onBack:i,onChangeCategory:a}){const[l,o]=b.useState(s||2.5),[c,d]=b.useState(null),[y,p]=b.useState(!1),[f,j]=b.useState(!1),x=(t==null?void 0:t.categoryName)||"PCB (Circuit Board)",v=(t==null?void 0:t.categoryImage)||"/assets/Kabadiwala_Connect_Step3_Weight_UI_Asset_Pack/app/illustrations/pcb_selected_category_reference.png",C=()=>{X.tapTick(),o(_=>Math.max(.5,parseFloat((_-.5).toFixed(1)))),d(null)},h=()=>{X.tapTick(),o(_=>parseFloat((_+.5).toFixed(1))),d(null)},u=_=>{X.tapTick(),o(_),d(_)},g=()=>{f||(X.tapTick(),p(!0),setTimeout(()=>{p(!1),j(!0),o(4.8),d(null),X.successChime()},1200))},m=()=>{r&&r({weight:l,scalePaired:f})},k=[{val:5,label:"~ 5 kg",sub:"Lightly filled",image:"/assets/Kabadiwala_Connect_Step3_Weight_UI_Asset_Pack/app/illustrations/quick_select_5kg_illustration_derived_transparent.png"},{val:10,label:"~ 10 kg",sub:"Half filled",image:"/assets/Kabadiwala_Connect_Step3_Weight_UI_Asset_Pack/app/illustrations/quick_select_10kg_illustration_derived_transparent.png"},{val:15,label:"~ 15 kg",sub:"Fully filled",image:"/assets/Kabadiwala_Connect_Step3_Weight_UI_Asset_Pack/app/illustrations/quick_select_15kg_illustration_derived_transparent.png"}];return n.jsxs("div",{className:"step3-weight-screen page-fade-enter",children:[n.jsxs("div",{className:"step-header",children:[n.jsx("button",{className:"step-back-btn",onClick:i,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("div",{className:"step-header-text",children:n.jsx("h1",{className:"step-title",children:"Enter Weight"})})]}),n.jsxs("div",{className:"stepper-container",children:[n.jsx("div",{className:"stepper-line"}),n.jsx("div",{className:"stepper-line-progress",style:{width:"50%"}}),n.jsxs("div",{className:"stepper-steps",children:[n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(q,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:"Photo"})]}),n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(q,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:"Category"})]}),n.jsxs("div",{className:"stepper-item active",children:[n.jsx("div",{className:"stepper-circle active",children:n.jsx("span",{children:"3"})}),n.jsx("span",{className:"stepper-label active-text",children:"Weight"})]}),n.jsxs("div",{className:"stepper-item",children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:"4"})}),n.jsx("span",{className:"stepper-label",children:"Value"})]}),n.jsxs("div",{className:"stepper-item",children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:"5"})}),n.jsx("span",{className:"stepper-label",children:"Buyer"})]})]})]}),n.jsxs("div",{className:"selected-category-card",children:[n.jsx("div",{className:"selected-category-thumb-wrapper",children:n.jsx("img",{src:v,alt:x,className:"selected-category-thumb-img"})}),n.jsxs("div",{className:"selected-category-info",children:[n.jsx("span",{className:"selected-category-label",children:"Selected Category"}),n.jsx("h4",{className:"selected-category-title",children:x})]}),n.jsx("button",{className:"change-category-btn",onClick:a||i,"aria-label":"Change Category",children:"Change"})]}),n.jsxs("div",{className:"weight-section-header",children:[n.jsx("h2",{className:"weight-heading",children:"How much does it weigh?"}),n.jsx("p",{className:"weight-subheading",children:"Enter the weight of your scrap"})]}),n.jsxs("div",{className:"weight-stepper-panel",children:[n.jsxs("div",{className:"weight-controls-row",children:[n.jsx("button",{className:"weight-adjust-btn minus",onClick:C,"aria-label":"Decrease weight",children:n.jsx(Ed,{size:22,color:"#FFFFFF",strokeWidth:3})}),n.jsxs("div",{className:"weight-value-container",children:[n.jsx("span",{className:"weight-num",children:l.toFixed(1)}),n.jsx("span",{className:"weight-unit",children:"kg"})]}),n.jsx("button",{className:"weight-adjust-btn plus",onClick:h,"aria-label":"Increase weight",children:n.jsx(Ah,{size:22,color:"#FFFFFF",strokeWidth:3})})]}),n.jsx("span",{className:"weight-step-hint",children:"in 0.5 kg steps"})]}),n.jsxs("div",{className:"or-divider-container",children:[n.jsx("div",{className:"or-line"}),n.jsx("span",{className:"or-pill",children:"OR"}),n.jsx("div",{className:"or-line"})]}),n.jsxs("div",{className:`connect-scale-card ${f?"scale-connected":""}`,onClick:g,children:[n.jsx("div",{className:"scale-icon-wrapper",children:y?n.jsx(Xa,{size:20,color:"#0B6B4A",className:"spin-slow"}):f?n.jsx($t,{size:20,color:"#0B6B4A"}):n.jsx(mh,{size:20,color:"#0B6B4A",strokeWidth:2.4})}),n.jsxs("div",{className:"scale-info",children:[n.jsx("h4",{className:"scale-title",children:y?"Searching for scale...":f?"Smart Scale Connected":"Connect Scale"}),n.jsx("p",{className:"scale-subtitle",children:y?"Pairing via Bluetooth...":f?"Live auto-synced: 4.8 kg":"Pair your Bluetooth weighing scale"})]}),n.jsx(xe,{size:18,color:"#6E7782"})]}),n.jsxs("div",{className:"quick-select-header",children:[n.jsx("h3",{className:"quick-select-title",children:"Quick Select"}),n.jsx("span",{className:"quick-select-hint",children:"Choose an approximate weight"})]}),n.jsx("div",{className:"quick-select-grid",children:k.map(_=>{const P=c===_.val||l===_.val;return n.jsxs("div",{className:`quick-select-card ${P?"selected":""}`,onClick:()=>u(_.val),children:[n.jsx("div",{className:"quick-img-wrapper",children:n.jsx("img",{src:_.image,alt:_.label,className:"quick-sack-img"})}),n.jsx("span",{className:"quick-label",children:_.label}),n.jsx("span",{className:"quick-sub",children:_.sub})]},_.val)})}),n.jsx("div",{className:"step-bottom-cta",children:n.jsxs("button",{className:"step-primary-cta-btn",onClick:m,children:[n.jsx("span",{children:"Continue"}),n.jsx(bt,{size:18,strokeWidth:2.5})]})})]})}function sf({t:e,sellFlowData:t,onNext:s,onBack:r}){const[i,a]=b.useState(!1),[l,o]=b.useState(!1),c=(t==null?void 0:t.weight)||2.5,d=(t==null?void 0:t.categoryName)||"PCB / Circuit Board",y=125,p=Math.round(c*y),f=18,j=()=>{X.tapTick(),o(!0);const v=`Estimated value is ₹${p}, based on ${c} kg of ${d}. You are getting ₹${f} above regular street rate.`;X.speak(v,"en",()=>o(!0),()=>o(!1))},x=()=>{X.tapTick(),s&&s({estimatedTotal:p,ratePerKg:y,streetBonus:f})};return n.jsxs("div",{className:"step4-value-screen page-fade-enter",children:[n.jsxs("div",{className:"step-header",children:[n.jsx("button",{className:"step-back-btn",onClick:r,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("div",{className:"step-header-text",children:n.jsx("h1",{className:"step-title",children:"Estimated Value"})})]}),n.jsxs("div",{className:"stepper-container",children:[n.jsx("div",{className:"stepper-line"}),n.jsx("div",{className:"stepper-line-progress",style:{width:"75%"}}),n.jsxs("div",{className:"stepper-steps",children:[n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(q,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:"Photo"})]}),n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(q,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:"Category"})]}),n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(q,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:"Weight"})]}),n.jsxs("div",{className:"stepper-item active",children:[n.jsx("div",{className:"stepper-circle active",children:n.jsx("span",{children:"4"})}),n.jsx("span",{className:"stepper-label active-text",children:"Value"})]}),n.jsxs("div",{className:"stepper-item",children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:"5"})}),n.jsx("span",{className:"stepper-label",children:"Buyer"})]})]})]}),n.jsxs("div",{className:"value-hero-card",children:[n.jsxs("div",{className:"value-category-chip",children:[n.jsx("div",{className:"value-category-icon-box",children:n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#FFFFFF",strokeWidth:"2.2",children:[n.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"4"}),n.jsx("path",{d:"M6 6h4v4H6z",fill:"#FFFFFF"}),n.jsx("path",{d:"M14 6h4v4h-4z",fill:"#FFFFFF"}),n.jsx("path",{d:"M6 14h4v4H6z",fill:"#FFFFFF"}),n.jsx("path",{d:"M10 8h4M8 10v4M16 10v4M10 16h4"})]})}),n.jsx("span",{className:"value-category-name",children:d})]}),n.jsx("span",{className:"value-caption-label",children:"YOUR ESTIMATED VALUE"}),n.jsxs("div",{className:"value-price-wrapper",children:[n.jsxs("div",{className:"sparkle-cluster left",children:[n.jsx("span",{className:"sparkle-line sp-1"}),n.jsx("span",{className:"sparkle-line sp-2"}),n.jsx("span",{className:"sparkle-line sp-3"})]}),n.jsxs("div",{className:"value-amount-display",children:[n.jsx("span",{className:"rupee-symbol",children:"₹"}),n.jsx("span",{className:"rupee-number",children:p})]}),n.jsxs("div",{className:"sparkle-cluster right",children:[n.jsx("span",{className:"sparkle-line sp-1"}),n.jsx("span",{className:"sparkle-line sp-2"}),n.jsx("span",{className:"sparkle-line sp-3"})]})]}),n.jsxs("span",{className:"value-basis-text",children:["Based on ",c," kg of PCB"]}),n.jsxs("button",{className:`listen-value-btn ${l?"playing":""}`,onClick:j,"aria-label":"Listen to estimated value voice announcement",children:[n.jsx(Mr,{size:18,color:"#0B6B4A",strokeWidth:2.4,className:l?"pulse-audio":""}),n.jsx("span",{children:l?"Playing audio...":"Listen to value"})]})]}),n.jsxs("div",{className:"value-breakdown-card",onClick:()=>a(!i),children:[n.jsxs("div",{className:"breakdown-header-row",children:[n.jsxs("div",{children:[n.jsx("h3",{className:"breakdown-title",children:"View breakdown"}),n.jsxs("p",{className:"breakdown-formula",children:[c," kg × ₹",y,"/kg = ₹",p]})]}),n.jsx("button",{className:"breakdown-toggle-btn","aria-label":"Toggle breakdown",children:i?n.jsx(xh,{size:20,color:"#101A24"}):n.jsx(Nn,{size:20,color:"#101A24"})})]}),i&&n.jsxs("div",{className:"breakdown-details-drawer",children:[n.jsxs("div",{className:"drawer-item",children:[n.jsx("span",{className:"item-name",children:"Base Market Rate"}),n.jsx("span",{className:"item-val",children:"₹110 / kg"})]}),n.jsxs("div",{className:"drawer-item",children:[n.jsx("span",{className:"item-name",children:"High Grade E-Waste Bonus"}),n.jsx("span",{className:"item-val bonus",children:"+₹15 / kg"})]}),n.jsxs("div",{className:"drawer-item total",children:[n.jsx("span",{className:"item-name",children:"Effective Verified Rate"}),n.jsx("span",{className:"item-val",children:"₹125 / kg"})]})]})]}),n.jsxs("div",{className:"above-street-rate-banner",children:[n.jsx("div",{className:"above-rate-arrow-circle",children:n.jsx(ph,{size:20,color:"#0B6B4A",strokeWidth:3})}),n.jsxs("div",{className:"above-rate-text-block",children:[n.jsxs("h4",{className:"above-rate-title",children:["₹",f," above street rate"]}),n.jsx("p",{className:"above-rate-subtitle",children:"You're getting a better price!"})]})]}),n.jsxs("div",{className:"step-bottom-cta value-cta-wrap",children:[n.jsxs("button",{className:"step-primary-cta-btn",onClick:x,children:[n.jsx("span",{children:"Find a Buyer"}),n.jsx(bt,{size:18,strokeWidth:2.5})]}),n.jsx("p",{className:"bottom-buyer-help-text",children:"Compare offers from verified buyers near you."})]})]})}function rf({t:e,sellFlowData:t,onNext:s,onBack:r}){const[i,a]=b.useState("buyer_1"),l=(t==null?void 0:t.categoryName)||"PCB (Circuit Board)",o=(t==null?void 0:t.weight)||2.5,c=[{id:"buyer_1",name:"GreenCycle Recycling",rate:128,isBestMatch:!0,distance:"2.1 km away",verified:"CPCB Verified",rating:4.8},{id:"buyer_2",name:"EcoScrap Solutions",rate:124,isBestMatch:!1,distance:"3.4 km away",verified:"CPCB Verified",rating:4.6},{id:"buyer_3",name:"ReNew E-Waste",rate:121,isBestMatch:!1,distance:"5.2 km away",verified:"CPCB Verified",rating:4.7}],d=c.find(p=>p.id===i)||c[0],y=()=>{s&&s({buyer:d,totalPayout:Math.round(o*d.rate)})};return n.jsxs("div",{className:"step5-buyer-screen page-fade-enter",children:[n.jsxs("div",{className:"step-header",children:[n.jsx("button",{className:"step-back-btn",onClick:r,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("div",{className:"step-header-text",children:n.jsx("h1",{className:"step-title",children:"Choose a Buyer"})})]}),n.jsxs("div",{className:"stepper-container",children:[n.jsx("div",{className:"stepper-line"}),n.jsx("div",{className:"stepper-line-progress",style:{width:"100%"}}),n.jsxs("div",{className:"stepper-steps",children:[n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(q,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:"Photo"})]}),n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(q,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:"Category"})]}),n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(q,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:"Weight"})]}),n.jsxs("div",{className:"stepper-item completed",children:[n.jsx("div",{className:"stepper-circle completed",children:n.jsx(q,{size:14,color:"#FFFFFF",strokeWidth:3})}),n.jsx("span",{className:"stepper-label active-text",children:"Value"})]}),n.jsxs("div",{className:"stepper-item active",children:[n.jsx("div",{className:"stepper-circle active",children:n.jsx("span",{children:"5"})}),n.jsx("span",{className:"stepper-label active-text",children:"Buyer"})]})]})]}),n.jsxs("div",{className:"buyer-intro-header",children:[n.jsx("h2",{className:"buyer-intro-title",children:"Best buyers for you"}),n.jsx("p",{className:"buyer-intro-sub",children:"Compared by price, distance and reliability."})]}),n.jsxs("div",{className:"lot-summary-pill",children:[n.jsx("div",{className:"lot-pcb-icon",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Step5_Choose_Buyer_UI_Asset_Pack/app/crops/lot_material_pcb_thumbnail.png",alt:"PCB scrap",className:"lot-icon-img"})}),n.jsxs("span",{className:"lot-summary-text",children:[l," • ",o," kg"]})]}),n.jsx("div",{className:"buyers-list",children:c.map(p=>{const f=i===p.id;return n.jsxs("div",{className:`buyer-card ${f?"selected":""}`,onClick:()=>a(p.id),children:[p.isBestMatch&&n.jsxs("div",{className:"best-match-badge",children:[n.jsx(na,{size:12,fill:"#101A24",color:"#101A24"}),n.jsx("span",{children:"BEST MATCH"})]}),n.jsxs("div",{className:"buyer-card-top-row",children:[n.jsx("div",{className:"buyer-name-col",children:n.jsx("h3",{className:"buyer-company-name",children:p.name})}),n.jsxs("div",{className:"buyer-price-radio-wrap",children:[n.jsxs("div",{className:"buyer-rate-box",children:[n.jsxs("span",{className:"buyer-rate-price",children:["₹",p.rate,"/kg"]}),p.isBestMatch&&n.jsx("span",{className:"buyer-rate-best-label",children:"Best price"})]}),n.jsx("div",{className:`buyer-radio-circle ${f?"checked":""}`,children:f&&n.jsx("div",{className:"buyer-radio-inner-dot"})})]})]}),n.jsxs("div",{className:"buyer-meta-row",children:[n.jsxs("div",{className:"meta-item",children:[n.jsx(gt,{size:13,color:"#6E7782"}),n.jsx("span",{children:p.distance})]}),n.jsx("span",{className:"meta-divider",children:"|"}),n.jsxs("div",{className:"meta-item",children:[n.jsx(os,{size:13,color:"#0B6B4A",strokeWidth:2.4}),n.jsx("span",{className:"verified-text",children:p.verified})]}),n.jsx("span",{className:"meta-divider",children:"|"}),n.jsxs("div",{className:"meta-item",children:[n.jsx(na,{size:13,fill:"#F5B82E",color:"#F5B82E"}),n.jsx("span",{className:"rating-score",children:p.rating})]})]})]},p.id)})}),n.jsxs("div",{className:"verified-recyclers-trust-banner",children:[n.jsx(os,{size:16,color:"#0B6B4A",strokeWidth:2.4}),n.jsx("span",{children:"All listed buyers are verified recyclers."})]}),n.jsxs("div",{className:"step-bottom-cta buyer-cta-wrap",children:[n.jsxs("div",{className:"selected-buyer-indicator",children:[n.jsx("span",{children:"Selected: "}),n.jsx("strong",{children:d.name})]}),n.jsxs("button",{className:"step-primary-cta-btn",onClick:y,children:[n.jsx("span",{children:"Select & Sell"}),n.jsx(bt,{size:18,strokeWidth:2.5})]})]})]})}function af({t:e,sellFlowData:t,onNext:s,onBack:r}){var C;const[i,a]=b.useState("upi"),[l,o]=b.useState(!1),[c,d]=b.useState(!1),[y,p]=b.useState((t==null?void 0:t.totalPayout)||(t==null?void 0:t.estimatedTotal)||312),f=y,j=((C=t==null?void 0:t.buyer)==null?void 0:C.name)||"GreenCycle Recycling",x=()=>{X.tapTick(),navigator.share?navigator.share({title:"Kabadiwala Connect Payment Request",text:`Payment request for ₹${f} from ${j} for scrap lot.`,url:window.location.href}).catch(()=>{}):(o(!0),setTimeout(()=>o(!1),1800))},v=()=>{X.successChime(),s&&s({paymentMode:i,amountPaid:f,buyerName:j,paidAt:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})};return n.jsxs("div",{className:"payment-screen page-fade-enter",children:[n.jsxs("div",{className:"step-header",children:[n.jsx("button",{className:"step-back-btn",onClick:r,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("div",{className:"step-header-text",children:n.jsx("h1",{className:"step-title",children:"Payment"})})]}),n.jsxs("div",{className:"payment-hero-card",children:[n.jsx("span",{className:"payment-hero-caption",children:"Amount to receive"}),n.jsxs("div",{className:"payment-hero-amount",children:[n.jsx("span",{className:"payment-rupee",children:"₹"}),n.jsx("span",{className:"payment-number",children:f})]}),n.jsx("span",{className:"payment-hero-sub",children:"Full payment"})]}),n.jsxs("div",{className:"payment-methods-section",children:[n.jsx("h2",{className:"payment-methods-heading",children:"How did you receive the payment?"}),n.jsxs("div",{className:"payment-methods-grid",children:[n.jsxs("div",{className:`payment-method-card ${i==="cash"?"selected":""}`,onClick:()=>a("cash"),children:[n.jsx("div",{className:"method-badge-top-right",children:i==="cash"?n.jsx("div",{className:"method-check-circle",children:n.jsx(q,{size:12,color:"#FFFFFF",strokeWidth:3})}):n.jsx("div",{className:"method-unselected-circle"})}),n.jsx("div",{className:"method-artwork-wrap",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Payment_UI_Asset_Pack/02_payment_icons/cash_money_illustration.jpg",alt:"Cash Payment",className:"method-artwork-img"})}),n.jsx("span",{className:"method-title",children:"Cash"})]}),n.jsxs("div",{className:`payment-method-card ${i==="upi"?"selected":""}`,onClick:()=>a("upi"),children:[n.jsx("div",{className:"method-badge-top-right",children:i==="upi"?n.jsx("div",{className:"method-check-circle",children:n.jsx(q,{size:12,color:"#FFFFFF",strokeWidth:3})}):n.jsx("div",{className:"method-unselected-circle"})}),n.jsx("div",{className:"method-artwork-wrap",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Payment_UI_Asset_Pack/02_payment_icons/upi_qr_illustration.jpg",alt:"UPI Payment",className:"method-artwork-img"})}),n.jsx("span",{className:"method-title",children:"UPI"})]})]})]}),i==="upi"?n.jsxs("div",{className:"upi-qr-card",children:[n.jsx("h3",{className:"upi-qr-title",children:"Scan to pay"}),n.jsx("p",{className:"upi-qr-sub",children:"Use any UPI app"}),n.jsx("div",{className:"qr-image-container",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Payment_UPI_UI_Asset_Pack/02_qr_assets/qr_reference.jpg",alt:"UPI QR Code",className:"upi-qr-code-img"})}),n.jsxs("div",{className:"qr-payee-info",children:[n.jsxs("span",{className:"qr-amount-text",children:["₹",f]}),n.jsx("span",{className:"qr-buyer-name",children:j})]}),n.jsxs("button",{className:"share-payment-btn",onClick:x,"aria-label":"Share payment request",children:[n.jsx(Fd,{size:16,color:"#0B6B4A",strokeWidth:2.2}),n.jsx("span",{children:l?"Link Copied!":"Share payment request"})]})]}):n.jsxs("div",{className:"cash-received-banner",children:[n.jsx("div",{className:"cash-check-icon-circle",children:n.jsx(q,{size:20,color:"#FFFFFF",strokeWidth:3})}),n.jsxs("div",{className:"cash-banner-text",children:[n.jsx("h4",{className:"cash-banner-title",children:"Cash received"}),n.jsx("p",{className:"cash-banner-sub",children:"Mark this after receiving the cash."})]})]}),n.jsxs("div",{className:"payment-amount-row",children:[n.jsx("span",{className:"amount-row-label",children:"Payment amount"}),n.jsx("div",{className:"amount-row-right",children:c?n.jsx("input",{type:"number",className:"amount-edit-input",value:y,onChange:h=>p(Number(h.target.value)||0),onBlur:()=>d(!1),autoFocus:!0}):n.jsxs(n.Fragment,{children:[n.jsxs("span",{className:"amount-row-val",children:["₹",f]}),n.jsx("button",{className:"amount-edit-btn",onClick:()=>d(!0),children:"Edit"})]})})]}),n.jsxs("div",{className:"step-bottom-cta payment-cta-wrap",children:[n.jsxs("button",{className:"step-primary-cta-btn",onClick:v,children:[n.jsx("span",{children:"Confirm Payment"}),n.jsx(bt,{size:18,strokeWidth:2.5})]}),n.jsx("p",{className:"payment-warning-text",children:"Confirm only after receiving the payment."})]})]})}function lf({t:e,currentLocation:t="Rohini, Delhi",onBack:s,onSelectCategory:r,onNavigateTab:i}){const[a,l]=b.useState(!1),[o,c]=b.useState(null),d=[{id:"pcb",title:"PCB",sub:"Circuit Board",price:128,trend:"up",change:"12%",image:"/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/pcb_thumbnail_reference.png",history:[110,114,118,120,122,125,128]},{id:"cables_wires",title:"Cables & Wires",sub:null,price:72,trend:"down",change:"8%",image:"/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/cables_wires_thumbnail_reference.png",history:[80,78,79,76,75,74,72]},{id:"car_battery",title:"Car Battery",sub:null,price:62,trend:"up",change:"5%",image:"/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/car_battery_thumbnail_reference.png",history:[58,59,59,60,61,61,62]},{id:"crt_tv",title:"CRT TV",sub:null,price:18,trend:"down",change:"6%",image:"/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/crt_tv_thumbnail_reference.png",history:[22,21,20,20,19,19,18]},{id:"lcd_display",title:"LCD Display",sub:null,price:42,trend:"stable",change:"Stable",image:"/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/lcd_display_thumbnail_reference.png",history:[42,42,41,42,43,42,42]},{id:"motor_magnet",title:"Motor & Magnet",sub:null,price:95,trend:"up",change:"9%",image:"/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/motor_magnet_thumbnail_reference.png",history:[86,88,89,90,92,93,95]}],y=()=>{X.tapTick(),l(!0);const p=`Today's scrap rates in ${t}: PCB is 128 rupees per kg, Cables are 72 rupees, Car Battery is 62 rupees, LCD Display is 42 rupees, and Motor magnet is 95 rupees per kg.`;X.speak(p,"en",()=>l(!0),()=>l(!1))};return n.jsxs("div",{className:"todays-prices-screen page-fade-enter",children:[n.jsxs("div",{className:"prices-scroll-content",children:[s&&n.jsx("div",{className:"prices-top-nav",children:n.jsx("button",{className:"step-back-btn",onClick:s,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})})}),n.jsxs("div",{className:"prices-header-row",children:[n.jsxs("div",{className:"prices-title-block",children:[n.jsx("h1",{className:"prices-main-title",children:"Today’s Prices"}),n.jsx("p",{className:"prices-main-sub",children:"Current scrap rates near you"})]}),n.jsx("button",{className:`prices-audio-btn ${a?"playing":""}`,onClick:y,"aria-label":"Listen to prices aloud",children:n.jsx(Mr,{size:22,color:"#0F52BA",strokeWidth:2.4})})]}),n.jsxs("div",{className:"prices-location-pill",children:[n.jsx(gt,{size:15,color:"#0B6B4A"}),n.jsx("span",{className:"prices-location-name",children:t}),n.jsx(Nn,{size:14,color:"#101A24"})]}),n.jsxs("div",{className:"prices-updated-meta",children:[n.jsx(Ar,{size:14,color:"#6E7782"}),n.jsx("span",{children:"Updated today • Based on recent local transactions"})]}),n.jsx("div",{className:"prices-list-card",children:d.map(p=>n.jsxs("div",{className:"price-list-row",onClick:()=>c(p),children:[n.jsx("div",{className:"price-item-thumb-wrap",children:n.jsx("img",{src:p.image,alt:p.title,className:"price-item-thumb-img"})}),n.jsxs("div",{className:"price-item-name-col",children:[n.jsx("h3",{className:"price-item-title",children:p.title}),p.sub&&n.jsx("span",{className:"price-item-sub",children:p.sub})]}),n.jsxs("div",{className:"price-item-rate-col",children:[n.jsxs("span",{className:"price-item-value",children:["₹",p.price,"/kg"]}),n.jsxs("div",{className:`price-trend-tag ${p.trend}`,children:[p.trend==="up"&&n.jsx(Sd,{size:13,color:"#0B6B4A",strokeWidth:2.5}),p.trend==="down"&&n.jsx(uh,{size:13,color:"#C94C4C",strokeWidth:2.5}),p.trend==="stable"&&n.jsx(Ed,{size:13,color:"#6E7782",strokeWidth:2.5}),n.jsx("span",{children:p.change})]})]}),n.jsx(xe,{size:18,color:"#CBD5E1",className:"price-row-arrow"})]},p.id))}),n.jsxs("div",{className:"prices-info-banner",children:[n.jsx(bh,{size:18,color:"#0B6B4A",className:"info-banner-icon"}),n.jsxs("div",{className:"info-banner-text",children:[n.jsx("h4",{className:"info-banner-title",children:"Based on the last 42 local transactions"}),n.jsx("p",{className:"info-banner-desc",children:"Prices may vary by condition, quantity and buyer."})]})]})]}),o&&n.jsx("div",{className:"price-modal-backdrop",onClick:()=>c(null),children:n.jsxs("div",{className:"price-modal-sheet",onClick:p=>p.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsxs("div",{className:"sheet-item-info",children:[n.jsx("img",{src:o.image,alt:o.title,className:"modal-thumb"}),n.jsxs("div",{children:[n.jsx("h3",{children:o.title}),n.jsxs("p",{children:["7-Day Market Trend • Current: ₹",o.price,"/kg"]})]})]}),n.jsx("button",{className:"modal-close-btn",onClick:()=>c(null),children:n.jsx(pe,{size:18,color:"#101A24"})})]}),n.jsx("div",{className:"sparkline-container",children:n.jsx("div",{className:"sparkline-bars",children:o.history.map((p,f)=>n.jsxs("div",{className:"sparkline-col",children:[n.jsx("div",{className:"sparkline-bar",style:{height:`${p/135*100}%`}}),n.jsxs("span",{className:"sparkline-day",children:["D",f+1]}),n.jsxs("span",{className:"sparkline-val",children:["₹",p]})]},f))})}),n.jsx("button",{className:"step-primary-cta-btn",onClick:()=>{const p=o;c(null),r&&r(p.id)},children:n.jsxs("span",{children:["Sell ",o.title," Now →"]})})]})}),n.jsxs("div",{className:"home-nav-bar",children:[n.jsxs("button",{className:"nav-tab",onClick:()=>i?i("home"):s&&s(),children:[n.jsx(Ht,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Home"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>i?i("history"):s&&s(),children:[n.jsx(Vt,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Bookings"})]}),n.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:()=>i?i("step1_photo"):s&&s(),"aria-label":"Camera Scan",children:[n.jsx(_t,{size:26,color:"#FFFFFF"}),n.jsx("span",{className:"fab-label",children:"Camera"})]}),n.jsxs("button",{className:"nav-tab active",children:[n.jsx(fs,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Rates"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>i?i("profile"):s&&s(),children:[n.jsx(jt,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Profile"})]})]})]})}function of({t:e,onBack:t,onNavigateTab:s}){const[r,i]=b.useState(!1),[a,l]=b.useState("This Week"),[o,c]=b.useState(5),[d,y]=b.useState(null),p=[{day:"Mon",amount:120,height:28},{day:"Tue",amount:160,height:38},{day:"Wed",amount:240,height:58},{day:"Thu",amount:310,height:75},{day:"Fri",amount:200,height:48},{day:"Sat",amount:420,height:95,isMax:!0},{day:"Sun",amount:140,height:32}],f=[{id:"tx_1",title:"PCB",date:"12 Aug 2026",amount:312,status:"Received",image:"/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/pcb_thumbnail_reference.png",buyer:"GreenCycle Recycling",weight:"2.5 kg"},{id:"tx_2",title:"Cables & Wires",date:"10 Aug 2026",amount:180,status:"Received",image:"/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/cables_wires_thumbnail_reference.png",buyer:"EcoScrap Solutions",weight:"2.5 kg"},{id:"tx_3",title:"Car Battery",date:"08 Aug 2026",amount:220,status:"Pending",image:"/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/car_battery_thumbnail_reference.png",buyer:"ReNew E-Waste",weight:"3.5 kg"},{id:"tx_4",title:"CRT TV",date:"05 Aug 2026",amount:85,status:"Received",image:"/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/crt_tv_thumbnail_reference.png",buyer:"GreenCycle Recycling",weight:"4.7 kg"},{id:"tx_5",title:"LCD Display",date:"02 Aug 2026",amount:160,status:"Received",image:"/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/lcd_display_thumbnail_reference.png",buyer:"EcoScrap Solutions",weight:"3.8 kg"}],j=()=>{X.tapTick(),i(!0),X.speak("Your total earnings this week are ₹1,240, up 18 percent compared to last week. Your peak earning day was Saturday with ₹420.","en",()=>i(!0),()=>i(!1))};return n.jsxs("div",{className:"my-earnings-screen page-fade-enter",children:[n.jsxs("div",{className:"earnings-scroll-content",children:[t&&n.jsx("div",{className:"earnings-top-nav",children:n.jsx("button",{className:"step-back-btn",onClick:t,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})})}),n.jsxs("div",{className:"earnings-header-row",children:[n.jsxs("div",{className:"earnings-title-block",children:[n.jsx("h1",{className:"earnings-main-title",children:"My Earnings"}),n.jsx("p",{className:"earnings-main-sub",children:"Track what you’ve earned from your scrap"})]}),n.jsx("button",{className:`earnings-audio-btn ${r?"playing":""}`,onClick:j,"aria-label":"Listen to earnings summary",children:n.jsx(Mr,{size:22,color:"#0B6B4A",strokeWidth:2.4})})]}),n.jsxs("div",{className:"earnings-hero-card",children:[n.jsxs("div",{className:"earnings-hero-top-row",children:[n.jsxs("div",{className:"earnings-hero-left",children:[n.jsxs("div",{className:"timeframe-selector",children:[n.jsx("span",{children:a}),n.jsx(Nn,{size:14,color:"#0B6B4A"})]}),n.jsxs("div",{className:"earnings-hero-amount",children:[n.jsx("span",{className:"hero-rupee",children:"₹"}),n.jsx("span",{className:"hero-num",children:"1,240"})]}),n.jsxs("div",{className:"earnings-growth-tag",children:[n.jsx(Sd,{size:14,color:"#0B6B4A",strokeWidth:2.5}),n.jsxs("span",{children:[n.jsx("strong",{children:"+18%"})," compared to last week"]})]})]}),n.jsx("div",{className:"earnings-hero-right",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/earnings_growth_plant_transparent_reference.png",alt:"Green impact sprout",className:"earnings-plant-img"})})]}),n.jsx("div",{className:"earnings-chart-container",children:n.jsx("div",{className:"earnings-chart-bars",children:p.map((x,v)=>{const C=o===v;return n.jsxs("div",{className:"earnings-bar-col",onClick:()=>c(v),children:[C&&n.jsxs("div",{className:"bar-tooltip-pill",children:["₹",x.amount]}),n.jsx("div",{className:`earnings-bar ${x.isMax?"max-bar":""} ${C?"active-bar":""}`,style:{height:`${x.height}%`}}),n.jsx("span",{className:`bar-day-label ${C?"active-day":""}`,children:x.day})]},x.day)})})})]}),n.jsxs("div",{className:"recent-tx-header",children:[n.jsx("h2",{className:"recent-tx-title",children:"Recent Transactions"}),n.jsxs("button",{className:"view-all-tx-link",children:[n.jsx("span",{children:"View all"}),n.jsx(xe,{size:14,color:"#0B6B4A"})]})]}),n.jsx("div",{className:"transactions-list-card",children:f.map(x=>n.jsxs("div",{className:"tx-item-row",onClick:()=>y(x),children:[n.jsx("div",{className:"tx-thumb-wrap",children:n.jsx("img",{src:x.image,alt:x.title,className:"tx-thumb-img"})}),n.jsxs("div",{className:"tx-info-col",children:[n.jsx("h3",{className:"tx-item-title",children:x.title}),n.jsx("span",{className:"tx-item-date",children:x.date})]}),n.jsxs("div",{className:"tx-amount-col",children:[n.jsxs("span",{className:"tx-amount-val",children:["+₹",x.amount]}),n.jsx("span",{className:`tx-status-badge ${x.status.toLowerCase()}`,children:x.status})]})]},x.id))}),n.jsxs("div",{className:"view-all-transactions-banner",children:[n.jsxs("div",{className:"vat-left",children:[n.jsx(vh,{size:18,color:"#0B6B4A"}),n.jsx("span",{className:"vat-text",children:"View all transactions"})]}),n.jsx(xe,{size:18,color:"#6E7782"})]})]}),d&&n.jsx("div",{className:"price-modal-backdrop",onClick:()=>y(null),children:n.jsxs("div",{className:"price-modal-sheet",onClick:x=>x.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsxs("div",{className:"sheet-item-info",children:[n.jsx("img",{src:d.image,alt:d.title,className:"modal-thumb"}),n.jsxs("div",{children:[n.jsxs("h3",{children:[d.title," Settlement"]}),n.jsxs("p",{children:[d.date," • ",d.buyer]})]})]}),n.jsx("button",{className:"modal-close-btn",onClick:()=>y(null),children:n.jsx(pe,{size:18,color:"#101A24"})})]}),n.jsxs("div",{className:"sparkline-container",style:{textAlign:"left",padding:"14px 16px"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[n.jsx("span",{style:{fontSize:"13px",color:"#6E7782"},children:"Weight Collected:"}),n.jsx("strong",{style:{color:"#101A24"},children:d.weight})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[n.jsx("span",{style:{fontSize:"13px",color:"#6E7782"},children:"Settled Payout:"}),n.jsxs("strong",{style:{color:"#0B6B4A",fontSize:"16px"},children:["₹",d.amount]})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[n.jsx("span",{style:{fontSize:"13px",color:"#6E7782"},children:"Status:"}),n.jsx("span",{className:`tx-status-badge ${d.status.toLowerCase()}`,children:d.status})]})]}),n.jsx("button",{className:"step-primary-cta-btn",onClick:()=>y(null),children:n.jsx("span",{children:"Done"})})]})}),n.jsxs("div",{className:"home-nav-bar",children:[n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("home"):t&&t(),children:[n.jsx(Ht,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Home"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("history"):t&&t(),children:[n.jsx(Vt,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Bookings"})]}),n.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:()=>s?s("step1_photo"):t&&t(),"aria-label":"Camera Scan",children:[n.jsx(_t,{size:26,color:"#FFFFFF"}),n.jsx("span",{className:"fab-label",children:"Camera"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("todays_prices"):t&&t(),children:[n.jsx(fs,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Rates"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("profile"):t&&t(),children:[n.jsx(jt,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Profile"})]})]})]})}function cf({t:e,onBack:t,onNavigateTab:s}){const[r,i]=b.useState("all"),[a,l]=b.useState(null),[o,c]=b.useState(!1),[d,y]=b.useState("All"),p=[{id:"lot_1",lotNumber:"Lot #A7F2K9",title:"PCB / Circuit Board",category:"E-Waste",date:"3 Sep 2026",weight:"2.5 kg",rate:"₹125/kg",amount:312,status:"Completed",statusType:"completed",statusCode:"completed",image:"/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/pcb_thumbnail.png",buyer:"GreenCycle Recycling",settlementMode:"UPI QR Transfer",notes:"Inspected Grade A circuit boards with full copper recovery trace."},{id:"lot_2",lotNumber:"Lot #B3D9L1",title:"Cables & Wires",category:"Metals",date:"1 Sep 2026",weight:"4.0 kg",rate:"₹70/kg",amount:280,status:"Handed Over",statusType:"active",statusCode:"handed_over",image:"/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/cables_thumbnail.png",buyer:"EcoScrap Solutions",settlementMode:"Cash on Delivery",notes:"Driver picked up from Rohini Sector 7. Awaiting final recycler depot weigh-in."},{id:"lot_3",lotNumber:"Lot #C6H4P0",title:"Car Battery",category:"Batteries",date:"29 Aug 2026",weight:"8.2 kg",rate:"₹62/kg",amount:510,status:"Listed",statusType:"active",statusCode:"listed",image:"/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/battery_thumbnail.png",buyer:"Awaiting Buyer Match",settlementMode:"Direct Settlement",notes:"Listed on buyer exchange with verified dry-cell certificate."},{id:"lot_4",lotNumber:"Lot #E9V2M8",title:"LCD Display",category:"E-Waste",date:"24 Aug 2026",weight:"3.1 kg",rate:"₹61/kg",amount:190,status:"Disputed",statusType:"disputed",statusCode:"disputed",image:"/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/lcd_thumbnail.png",buyer:"TechRecycle Delhi",settlementMode:"Review Pending",notes:"Minor tare weight variation recorded at hub scale (-0.4 kg). Dispute under review."}],f=p.filter(x=>!(r==="active"&&x.statusType!=="active"||r==="completed"&&x.statusType!=="completed"||d!=="All"&&x.category!==d)),j=x=>{switch(x){case"completed":return n.jsx($t,{size:12,color:"#0B6B4A",strokeWidth:2.5});case"handed_over":return n.jsx(Ph,{size:12,color:"#0A4D9B",strokeWidth:2.5});case"listed":return n.jsx(Ar,{size:12,color:"#D97706",strokeWidth:2.5});case"disputed":return n.jsx(ch,{size:12,color:"#DC2626",strokeWidth:2.5});default:return null}};return n.jsxs("div",{className:"history-screen page-fade-enter",children:[n.jsxs("div",{className:"history-scroll-content",children:[t&&n.jsx("div",{className:"history-top-nav",children:n.jsx("button",{className:"step-back-btn",onClick:t,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})})}),n.jsxs("div",{className:"history-header-row",children:[n.jsxs("div",{className:"history-title-block",children:[n.jsx("h1",{className:"history-main-title",children:"History"}),n.jsx("p",{className:"history-main-sub",children:"Track all your scrap collection lots"})]}),n.jsx("button",{className:"history-filter-btn",onClick:()=>c(!0),"aria-label":"Filter transactions",children:n.jsx(Dh,{size:20,color:"#101A24",strokeWidth:2.2})})]}),n.jsxs("div",{className:"history-segments-bar",children:[n.jsxs("button",{className:`history-segment-pill ${r==="all"?"active":""}`,onClick:()=>i("all"),children:[n.jsx("span",{children:"All"}),n.jsx("span",{className:"segment-count",children:p.length})]}),n.jsxs("button",{className:`history-segment-pill ${r==="active"?"active":""}`,onClick:()=>i("active"),children:[n.jsx("span",{children:"Active"}),n.jsx("span",{className:"segment-count",children:p.filter(x=>x.statusType==="active").length})]}),n.jsxs("button",{className:`history-segment-pill ${r==="completed"?"active":""}`,onClick:()=>i("completed"),children:[n.jsx("span",{children:"Completed"}),n.jsx("span",{className:"segment-count",children:p.filter(x=>x.statusType==="completed").length})]})]}),n.jsx("div",{className:"history-lots-list",children:f.length===0?n.jsx("div",{className:"history-empty-state",children:n.jsx("p",{children:"No transactions found for this filter."})}):f.map(x=>n.jsxs("div",{className:"history-lot-card hover-lift",onClick:()=>l(x),children:[n.jsxs("div",{className:"lot-card-left",children:[n.jsx("div",{className:"lot-thumb-wrap",children:n.jsx("img",{src:x.image,alt:x.title,className:"lot-thumb-img"})}),n.jsxs("div",{className:"lot-info-col",children:[n.jsx("h3",{className:"lot-item-title",children:x.title}),n.jsxs("span",{className:"lot-meta-text",children:[x.weight," • ",x.date," • ",n.jsx("strong",{className:"lot-id-tag",children:x.lotNumber})]})]})]}),n.jsxs("div",{className:"lot-card-right",children:[n.jsxs("span",{className:"lot-amount-val",children:["₹",x.amount]}),n.jsxs("div",{className:`lot-status-pill ${x.statusCode}`,children:[j(x.statusCode),n.jsx("span",{children:x.status})]})]})]},x.id))}),n.jsxs("div",{className:"earnings-summary-banner hover-lift",onClick:()=>s?s("my_earnings"):null,children:[n.jsxs("div",{className:"es-banner-left",children:[n.jsx("div",{className:"es-banner-icon-wrap",children:n.jsx(Za,{size:22,color:"#0B6B4A",strokeWidth:2.4})}),n.jsxs("div",{className:"es-banner-text-col",children:[n.jsx("h4",{className:"es-banner-title",children:"View Earnings Summary"}),n.jsx("p",{className:"es-banner-sub",children:"See total earnings and analytics from all your lots"})]})]}),n.jsx(xe,{size:20,color:"#0B6B4A"})]})]}),a&&n.jsx("div",{className:"price-modal-backdrop",onClick:()=>l(null),children:n.jsxs("div",{className:"price-modal-sheet history-detail-sheet",onClick:x=>x.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsxs("div",{className:"sheet-item-info",children:[n.jsx("img",{src:a.image,alt:a.title,className:"modal-thumb"}),n.jsxs("div",{children:[n.jsx("h3",{children:a.title}),n.jsxs("p",{children:[a.lotNumber," • ",a.date]})]})]}),n.jsx("button",{className:"modal-close-btn",onClick:()=>l(null),children:n.jsx(pe,{size:18,color:"#101A24"})})]}),n.jsxs("div",{className:"history-receipt-box",children:[n.jsxs("div",{className:"receipt-row",children:[n.jsx("span",{children:"Category:"}),n.jsx("strong",{children:a.category})]}),n.jsxs("div",{className:"receipt-row",children:[n.jsx("span",{children:"Weight Collected:"}),n.jsx("strong",{children:a.weight})]}),n.jsxs("div",{className:"receipt-row",children:[n.jsx("span",{children:"Unit Rate:"}),n.jsx("strong",{children:a.rate})]}),n.jsxs("div",{className:"receipt-row",children:[n.jsx("span",{children:"Assigned Recycler:"}),n.jsx("strong",{children:a.buyer})]}),n.jsxs("div",{className:"receipt-row",children:[n.jsx("span",{children:"Payment Mode:"}),n.jsx("strong",{children:a.settlementMode})]}),n.jsxs("div",{className:"receipt-row highlight-row",children:[n.jsx("span",{children:"Total Payout:"}),n.jsxs("strong",{className:"receipt-payout-amount",children:["₹",a.amount]})]}),n.jsxs("div",{className:"receipt-status-row",children:[n.jsx("span",{children:"Current Status:"}),n.jsxs("div",{className:`lot-status-pill ${a.statusCode}`,children:[j(a.statusCode),n.jsx("span",{children:a.status})]})]})]}),n.jsx("div",{className:"lot-notes-box",children:n.jsxs("p",{className:"lot-notes-text",children:[n.jsx("strong",{children:"Lot Note:"})," ",a.notes]})}),n.jsx("div",{className:"history-modal-cta-row",children:n.jsx("button",{className:"step-primary-cta-btn",onClick:()=>l(null),children:n.jsx("span",{children:"Close Details"})})})]})}),o&&n.jsx("div",{className:"price-modal-backdrop",onClick:()=>c(!1),children:n.jsxs("div",{className:"price-modal-sheet",onClick:x=>x.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsx("h3",{style:{margin:0,fontSize:"18px",fontWeight:800},children:"Filter History"}),n.jsx("button",{className:"modal-close-btn",onClick:()=>c(!1),children:n.jsx(pe,{size:18,color:"#101A24"})})]}),n.jsxs("div",{style:{padding:"8px 0 16px"},children:[n.jsx("span",{style:{fontSize:"13px",fontWeight:700,color:"#101A24",display:"block",marginBottom:"10px"},children:"Material Category:"}),n.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:["All","E-Waste","Metals","Batteries"].map(x=>n.jsx("button",{className:`history-filter-chip ${d===x?"active":""}`,onClick:()=>y(x),children:x},x))})]}),n.jsx("button",{className:"step-primary-cta-btn",onClick:()=>c(!1),children:n.jsx("span",{children:"Apply Filters"})})]})}),n.jsxs("div",{className:"home-nav-bar",children:[n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("home"):t&&t(),children:[n.jsx(Ht,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Home"})]}),n.jsxs("button",{className:"nav-tab active",onClick:()=>null,children:[n.jsx(Vt,{size:22,className:"tab-icon"}),n.jsx("span",{children:"History"})]}),n.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:()=>s?s("step1_photo"):t&&t(),"aria-label":"Camera Scan",children:[n.jsx(_t,{size:26,color:"#FFFFFF"}),n.jsx("span",{className:"fab-label",children:"Camera"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("todays_prices"):t&&t(),children:[n.jsx(fs,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Rates"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("profile"):t&&t(),children:[n.jsx(jt,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Profile"})]})]})]})}function df({t:e,onBack:t,onNavigateTab:s}){const[r,i]=b.useState(!1),[a,l]=b.useState(!1),[o,c]=b.useState(null),[d,y]=b.useState([{id:"sync_1",lotNumber:"Lot #A7F2K9",title:"PCB (Circuit Board)",category:"E-Waste",time:"Today, 11:24 AM",weight:"2.5 kg",rate:"₹125/kg",amount:312,synced:!1,image:"/assets/Kabadiwala_Connect_Sync_Status_UI_Asset_Pack/app/crops/pcb_lot_thumbnail.png",buyer:"GreenCycle Recycling"},{id:"sync_2",lotNumber:"Lot #B3D9L1",title:"Cables & Wires",category:"Metals",time:"Today, 10:42 AM",weight:"4.0 kg",rate:"₹70/kg",amount:280,synced:!1,image:"/assets/Kabadiwala_Connect_Sync_Status_UI_Asset_Pack/app/crops/cables_lot_thumbnail.png",buyer:"EcoScrap Solutions"},{id:"sync_3",lotNumber:"Lot #C6H4P0",title:"Car Battery",category:"Batteries",time:"Yesterday, 5:16 PM",weight:"8.2 kg",rate:"₹62/kg",amount:510,synced:!1,image:"/assets/Kabadiwala_Connect_Sync_Status_UI_Asset_Pack/app/crops/battery_lot_thumbnail.png",buyer:"Awaiting Buyer Match"}]),p=()=>{r||(i(!0),l(!1),setTimeout(()=>{y(j=>j.map(x=>({...x,synced:!0}))),i(!1),l(!0)},2e3))},f=d.filter(j=>!j.synced).length;return n.jsxs("div",{className:"sync-status-screen page-fade-enter",children:[n.jsxs("div",{className:"sync-scroll-content",children:[t&&n.jsx("div",{className:"sync-top-nav",children:n.jsx("button",{className:"step-back-btn",onClick:t,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})})}),n.jsxs("div",{className:"sync-header-row",children:[n.jsxs("div",{className:"sync-title-block",children:[n.jsx("h1",{className:"sync-main-title",children:"Sync Status"}),n.jsx("p",{className:"sync-main-sub",children:"Offline storage & automatic cloud sync"})]}),n.jsxs("div",{className:`sync-status-indicator-badge ${a?"synced":"offline"}`,children:[a?n.jsx($t,{size:16,color:"#0B6B4A",strokeWidth:2.5}):n.jsx(Uh,{size:16,color:"#D97706",strokeWidth:2.5}),n.jsx("span",{children:a?"Online • Synced":`${f} Lots Waiting`})]})]}),n.jsxs("div",{className:`offline-notice-banner ${a?"success":""}`,children:[n.jsx("div",{className:"onb-header-row",children:n.jsxs("div",{className:"onb-pill",children:[n.jsx("span",{className:`pulsing-dot ${a?"green":"amber"}`}),n.jsx("strong",{children:a?"All Lots Synced":`Offline • ${f} lots waiting to sync`})]})}),n.jsx("p",{className:"onb-description",children:a?"Great news! All your saved scrap lots have been safely synced to the cloud server.":"You're offline, but everything is saved. We'll sync automatically when you're back online."})]}),n.jsxs("div",{className:"sync-queue-card",children:[n.jsx("div",{className:"queue-card-header",children:n.jsx("h3",{className:"queue-header-title",children:a?"Recently Synced Lots":`Lots Waiting to Sync (${f})`})}),n.jsx("div",{className:"queue-items-list",children:d.map(j=>n.jsxs("div",{className:"queue-lot-row hover-lift",onClick:()=>c(j),children:[n.jsx("div",{className:"queue-thumb-wrap",children:n.jsx("img",{src:j.image,alt:j.title,className:"queue-thumb-img"})}),n.jsxs("div",{className:"queue-info-col",children:[n.jsx("h4",{className:"queue-item-title",children:j.title}),n.jsxs("span",{className:"queue-meta-text",children:[j.weight," • ",j.time," • ",n.jsx("strong",{className:"lot-id-tag",children:j.lotNumber})]})]}),n.jsxs("div",{className:"queue-right-col",children:[n.jsxs("span",{className:"queue-amount-val",children:["₹",j.amount]}),j.synced?n.jsxs("div",{className:"queue-status-badge synced",children:[n.jsx(q,{size:11,color:"#0B6B4A",strokeWidth:3}),n.jsx("span",{children:"Synced"})]}):n.jsxs("div",{className:"queue-status-badge waiting",children:[n.jsx(Ar,{size:11,color:"#D97706",strokeWidth:2.5}),n.jsx("span",{children:"Waiting"})]})]})]},j.id))})]}),n.jsxs("div",{className:"sync-safety-card",children:[n.jsxs("div",{className:"safety-card-left",children:[n.jsxs("div",{className:"safety-badge-title",children:[n.jsx(os,{size:16,color:"#0B6B4A",strokeWidth:2.5}),n.jsx("span",{children:"Your data is safe"})]}),n.jsx("p",{className:"safety-desc",children:"All photos, GPS tags, scale readings and buyer settlements are securely cached on this device with end-to-end cryptographic integrity."})]}),n.jsx("div",{className:"safety-card-right",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Sync_Status_UI_Asset_Pack/app/illustrations/sync_safety_illustration_reference.png",alt:"Safe sync lock illustration",className:"sync-safety-illustration"})})]}),n.jsx("div",{className:"sync-cta-wrap",children:n.jsxs("button",{className:`step-primary-cta-btn ${r?"loading":""}`,onClick:p,disabled:r,children:[n.jsx(Th,{size:18,className:r?"spin-anim":""}),n.jsx("span",{children:r?"Syncing with Server...":a?"Sync Again":"Try syncing again"})]})})]}),o&&n.jsx("div",{className:"price-modal-backdrop",onClick:()=>c(null),children:n.jsxs("div",{className:"price-modal-sheet",onClick:j=>j.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsxs("div",{className:"sheet-item-info",children:[n.jsx("img",{src:o.image,alt:o.title,className:"modal-thumb"}),n.jsxs("div",{children:[n.jsx("h3",{children:o.title}),n.jsxs("p",{children:[o.lotNumber," • ",o.time]})]})]}),n.jsx("button",{className:"modal-close-btn",onClick:()=>c(null),children:n.jsx(pe,{size:18,color:"#101A24"})})]}),n.jsxs("div",{className:"history-receipt-box",children:[n.jsxs("div",{className:"receipt-row",children:[n.jsx("span",{children:"Category:"}),n.jsx("strong",{children:o.category})]}),n.jsxs("div",{className:"receipt-row",children:[n.jsx("span",{children:"Cached Weight:"}),n.jsx("strong",{children:o.weight})]}),n.jsxs("div",{className:"receipt-row",children:[n.jsx("span",{children:"Calculated Rate:"}),n.jsx("strong",{children:o.rate})]}),n.jsxs("div",{className:"receipt-row",children:[n.jsx("span",{children:"Assigned Recycler:"}),n.jsx("strong",{children:o.buyer})]}),n.jsxs("div",{className:"receipt-row highlight-row",children:[n.jsx("span",{children:"Pending Payout:"}),n.jsxs("strong",{className:"receipt-payout-amount",children:["₹",o.amount]})]}),n.jsxs("div",{className:"receipt-status-row",children:[n.jsx("span",{children:"Sync Status:"}),n.jsx("span",{style:{fontWeight:700,color:o.synced?"#0B6B4A":"#D97706"},children:o.synced?"● Cloud Verified":"🕒 Queued in Local Cache"})]})]}),n.jsx("button",{className:"step-primary-cta-btn",onClick:()=>c(null),children:n.jsx("span",{children:"Close"})})]})}),n.jsxs("div",{className:"home-nav-bar",children:[n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("home"):t&&t(),children:[n.jsx(Ht,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Home"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("history"):t&&t(),children:[n.jsx(Vt,{size:22,className:"tab-icon"}),n.jsx("span",{children:"History"})]}),n.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:()=>s?s("step1_photo"):t&&t(),"aria-label":"Camera Scan",children:[n.jsx(_t,{size:26,color:"#FFFFFF"}),n.jsx("span",{className:"fab-label",children:"Camera"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("todays_prices"):t&&t(),children:[n.jsx(fs,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Rates"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("profile"):t&&t(),children:[n.jsx(jt,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Profile"})]})]})]})}function uf({t:e,onClose:t,onProceed:s,onBack:r}){const[i,a]=b.useState(0),[l,o]=b.useState(!1),c=[{id:1,badge:"Battery Detected",title:"A quick safety tip",subtitle:"Before handing over your battery",tipHeading:"Keep batteries away from heat",tipBody:"Store them in a cool, dry place until pickup. Never expose lithium or lead-acid batteries to direct sunlight or open fire.",dos:"Cool & dry indoor area",donts:"Direct heat & flames",audioText:"A quick safety tip. Please keep batteries away from heat. Store them in a cool, dry place until pickup."},{id:2,badge:"Leakage Prevention",title:"Prevent acid contact",subtitle:"Keep terminals upright and dry",tipHeading:"Check for terminal leaks or cracks",tipBody:"Place battery in an upright position. If liquid is present on casing, avoid skin contact and keep away from paper scrap.",dos:"Upright orientation",donts:"Tilted or upside down",audioText:"Prevent acid contact. Keep battery terminals upright and avoid touching any leaked fluids."},{id:3,badge:"Safe Handover",title:"Certified Recycling",subtitle:"Government authorized handler pickup",tipHeading:"Hand over only to verified recyclers",tipBody:"Your assigned buyer GreenCycle has CPCB certified battery handling protocol and calibrated weight scales.",dos:"CPCB Certified Buyer",donts:"Informal burning or dumping",audioText:"Ensure safe handover. Only give batteries to verified certified recycling partners."}],d=c[i],y=()=>{X.tapTick(),o(!0),X.speak(d.audioText,"en",()=>o(!0),()=>o(!1))},p=()=>{X.tapTick(),i<c.length-1?a(i+1):s?s():t&&t()};return n.jsxs("div",{className:"safety-screen-wrapper page-fade-enter",children:[n.jsxs("div",{className:"safety-top-nav",children:[r?n.jsx("button",{className:"step-back-btn",onClick:r,"aria-label":"Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})}):n.jsx("div",{}),n.jsx("button",{className:"safety-close-btn",onClick:t||r,"aria-label":"Close Safety Tips",children:n.jsx(pe,{size:20,color:"#101A24",strokeWidth:2.4})})]}),n.jsxs("div",{className:"safety-card-container",children:[n.jsxs("div",{className:"battery-pill-badge",children:[n.jsx(hh,{size:15,color:"#D97706",strokeWidth:2.5}),n.jsx("span",{children:d.badge})]}),n.jsxs("div",{className:"safety-header-text",children:[n.jsx("h1",{className:"safety-title",children:d.title}),n.jsx("p",{className:"safety-subtitle",children:d.subtitle})]}),n.jsx("div",{className:"safety-illustration-box",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Safety_Tips_UI_Asset_Pack/01_safety_illustrations/battery_safety_hero.jpg",alt:"Battery safety handling",className:"safety-hero-img"})}),n.jsxs("div",{className:"safety-instruction-card",children:[n.jsxs("div",{className:"safety-instruction-top",children:[n.jsx("h3",{className:"safety-tip-heading",children:d.tipHeading}),n.jsxs("button",{className:`safety-audio-pill-btn ${l?"playing":""}`,onClick:y,"aria-label":"Listen to safety advice",children:[n.jsx(Mr,{size:16,color:"#D97706",strokeWidth:2.4}),n.jsx("span",{children:"Listen"})]})]}),n.jsx("p",{className:"safety-tip-body",children:d.tipBody}),n.jsxs("div",{className:"safety-comparison-row",children:[n.jsxs("div",{className:"safety-compare-item dos",children:[n.jsx($t,{size:16,color:"#0B6B4A",strokeWidth:2.5}),n.jsx("span",{children:d.dos})]}),n.jsxs("div",{className:"safety-compare-item donts",children:[n.jsx(Vh,{size:16,color:"#DC2626",strokeWidth:2.5}),n.jsx("span",{children:d.donts})]})]})]}),n.jsx("div",{className:"safety-pagination-row",children:c.map((f,j)=>n.jsx("span",{className:`safety-dot ${i===j?"active":""}`,onClick:()=>a(j)},j))}),n.jsxs("div",{className:"safety-actions-wrap",children:[n.jsxs("button",{className:"safety-primary-btn",onClick:p,children:[n.jsx("span",{children:i===c.length-1?"Got it":"Next Tip"}),n.jsx(bt,{size:18,color:"#FFFFFF",strokeWidth:2.4})]}),n.jsx("button",{className:"safety-secondary-btn",onClick:t||r,children:n.jsx("span",{children:"Remind me later"})})]})]})]})}function pf({onClose:e,onGotIt:t}){return n.jsx("div",{className:"hazard-modal-backdrop",onClick:e,children:n.jsxs("div",{className:"hazard-bottom-sheet page-slide-up",onClick:s=>s.stopPropagation(),children:[n.jsx("div",{className:"sheet-drag-handle"}),n.jsx("button",{className:"hazard-close-btn",onClick:e,"aria-label":"Close hazard alert",children:n.jsx(pe,{size:18,color:"#101A24",strokeWidth:2.4})}),n.jsxs("div",{className:"hazard-header-block",children:[n.jsx("div",{className:"hazard-icon-circle",children:n.jsx(dh,{size:28,color:"#EA580C",strokeWidth:2.4})}),n.jsx("h2",{className:"hazard-title",children:"Hazardous item detected"}),n.jsx("p",{className:"hazard-sub",children:"A battery has been detected in your image. Please follow the safety guidelines below."})]}),n.jsxs("div",{className:"detected-item-card",children:[n.jsx("div",{className:"detected-item-thumb-wrap",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Hazardous_Battery_Detected_UI_Asset_Pack/02_app_assets/battery_thumbnail_reference.png",alt:"Detected Lithium-ion Battery",className:"detected-item-img"})}),n.jsxs("div",{className:"detected-item-info",children:[n.jsx("span",{className:"detected-item-tag",children:"Detected item"}),n.jsx("h3",{className:"detected-item-name",children:"Lithium-ion Battery"}),n.jsx("p",{className:"detected-item-desc",children:"Common in laptops, phones and other electronics."})]})]}),n.jsxs("div",{className:"safety-guidelines-box",children:[n.jsxs("div",{className:"guidelines-card-header",children:[n.jsx("div",{className:"shield-icon-circle",children:n.jsx(Rh,{size:14,color:"#EA580C",strokeWidth:2.5})}),n.jsx("h4",{className:"guidelines-heading",children:"Safety guidelines"})]}),n.jsxs("div",{className:"guidelines-list",children:[n.jsxs("div",{className:"guideline-row",children:[n.jsx("div",{className:"guideline-icon-wrap flame",children:n.jsx(jh,{size:16,color:"#EA580C",strokeWidth:2.4})}),n.jsxs("div",{className:"guideline-text",children:[n.jsx("strong",{children:"Keep away from heat and fire"}),n.jsx("p",{children:"Do not expose batteries to high temperatures."})]})]}),n.jsxs("div",{className:"guideline-row",children:[n.jsx("div",{className:"guideline-icon-wrap hand",children:n.jsx(Nh,{size:16,color:"#D97706",strokeWidth:2.4})}),n.jsxs("div",{className:"guideline-text",children:[n.jsx("strong",{children:"Handle with care"}),n.jsx("p",{children:"Avoid handling damaged or leaking batteries directly."})]})]}),n.jsxs("div",{className:"guideline-row",children:[n.jsx("div",{className:"guideline-icon-wrap recycle",children:n.jsx(Mh,{size:16,color:"#0B6B4A",strokeWidth:2.4})}),n.jsxs("div",{className:"guideline-text",children:[n.jsx("strong",{children:"Dispose safely"}),n.jsx("p",{children:"Keep in a dry place and hand over to a verified collector or recycler."})]})]})]})]}),n.jsx("button",{className:"hazard-primary-cta",onClick:t||e,children:n.jsx("span",{children:"Got it"})})]})})}function hf({t:e,onNext:t,onBack:s}){const[r,i]=b.useState(!0),a=[{num:1,label:"Photo",active:!0},{num:2,label:"Category",active:!1},{num:3,label:"Weight",active:!1},{num:4,label:"Value",active:!1},{num:5,label:"Buyer",active:!1}],l=()=>{i(!1),t&&t({photoUrl:"/assets/Kabadiwala_Connect_Hazardous_Battery_Detected_UI_Asset_Pack/02_app_assets/camera_preview_reference.png",hazardDetected:!0,detectedType:"Lithium-ion Battery",categoryId:"car_battery",categoryName:"Car Battery"})};return n.jsxs("div",{className:"step1-photo-screen page-fade-enter",children:[n.jsxs("div",{className:"step-header",children:[n.jsx("button",{className:"step-back-btn",onClick:s,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsxs("div",{className:"step-header-text",children:[n.jsx("h1",{className:"step-title",children:"Take a photo of your scrap"}),n.jsx("p",{className:"step-subtitle",children:"Make sure the item is clearly visible"})]})]}),n.jsxs("div",{className:"stepper-container",children:[n.jsx("div",{className:"stepper-line"}),n.jsx("div",{className:"stepper-steps",children:a.map(o=>n.jsxs("div",{className:`stepper-item ${o.active?"active":""}`,children:[n.jsx("div",{className:"stepper-circle",children:n.jsx("span",{children:o.num})}),n.jsx("span",{className:"stepper-label",children:o.label})]},o.num))})]}),n.jsx("div",{className:"camera-viewfinder-container",children:n.jsxs("div",{className:"camera-viewfinder",children:[n.jsx("img",{src:"/assets/Kabadiwala_Connect_Hazardous_Battery_Detected_UI_Asset_Pack/02_app_assets/camera_preview_reference.png",alt:"Scrap Camera Feed with Battery",className:"camera-feed-img"}),n.jsx("div",{className:"corner-bracket top-left"}),n.jsx("div",{className:"corner-bracket top-right"}),n.jsx("div",{className:"corner-bracket bottom-left"}),n.jsx("div",{className:"corner-bracket bottom-right"}),n.jsx("div",{className:"ai-detected-bounding-box",children:n.jsxs("div",{className:"ai-battery-detected-badge",children:[n.jsx("span",{className:"battery-icon-dot",children:"🔋"}),n.jsx("span",{children:"Battery detected"})]})})]})}),n.jsxs("div",{className:"camera-controls-bar",children:[n.jsxs("button",{className:"control-action-btn","aria-label":"Flash",children:[n.jsx("div",{className:"control-icon-circle",children:n.jsx(Ja,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("span",{className:"control-label-title",children:"Flash"}),n.jsx("span",{className:"control-label-sub",children:"Off"})]}),n.jsx("button",{className:"shutter-btn-outer",onClick:()=>i(!0),"aria-label":"Capture Photo",children:n.jsx("div",{className:"shutter-btn-inner"})}),n.jsxs("button",{className:"control-action-btn","aria-label":"Gallery",children:[n.jsx("div",{className:"control-icon-circle",children:n.jsx(Pd,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("span",{className:"control-label-title",children:"Gallery"}),n.jsx("span",{className:"control-label-sub",children:"Choose from photos"})]})]}),r&&n.jsx(pf,{onClose:()=>i(!1),onGotIt:l})]})}function ff({t:e,sellFlowData:t,onDone:s,onBack:r}){var u;const[i,a]=b.useState(!1),[l,o]=b.useState(!1),[c,d]=b.useState(!1),y=(t==null?void 0:t.weight)||2.5,p=(t==null?void 0:t.ratePerKg)||125,f=(t==null?void 0:t.estimatedTotal)||Math.round(y*p),j=(t==null?void 0:t.paymentMethod)==="cash"?"Cash Settlement":"UPI (Google Pay)",x=(t==null?void 0:t.categoryName)||"PCB / Circuit Board",v=((u=t==null?void 0:t.buyer)==null?void 0:u.name)||"Rohini Recycling Centre",C=()=>{a(!0),setTimeout(()=>{a(!1),d(!0),setTimeout(()=>d(!1),2500)},800)},h=()=>{navigator.share?navigator.share({title:`Kabadiwala Connect Receipt - ₹${f}`,text:`Sold ${y}kg of ${x} for ₹${f} via Kabadiwala Connect.`,url:window.location.href}).catch(()=>{}):(o(!0),setTimeout(()=>o(!1),2e3))};return n.jsxs("div",{className:"receipt-screen-wrapper page-fade-enter",children:[n.jsxs("div",{className:"receipt-top-header",children:[n.jsx("button",{className:"receipt-back-btn",onClick:r||s,"aria-label":"Go Back",children:n.jsx(ae,{size:22,color:"#101A24",strokeWidth:2.2})}),n.jsx("h1",{className:"receipt-screen-title",children:"Receipt"}),n.jsx("div",{style:{width:36}})]}),n.jsxs("div",{className:"receipt-scroll-container",children:[n.jsxs("div",{className:"receipt-paper-ticket",children:[n.jsxs("div",{className:"receipt-brand-row",children:[n.jsxs("div",{className:"receipt-logo-lockup",children:[n.jsx("img",{src:"/assets/Kabadiwala_Connect_Transaction_Receipt_UI_Asset_Pack/02_app_assets/kc2_logo_lockup_transparent_reference.png",alt:"K2 Kabadiwala Connect",className:"receipt-k2-logo"}),n.jsxs("div",{className:"receipt-brand-text",children:[n.jsx("strong",{className:"receipt-k2-title",children:"K2"}),n.jsx("span",{className:"receipt-k2-name",children:"Kabadiwala Connect"}),n.jsx("span",{className:"receipt-k2-tagline",children:"Recycle Today, Better Tomorrow"})]})]}),n.jsxs("div",{className:"receipt-meta-box",children:[n.jsx("span",{className:"receipt-type-label",children:"Transaction Receipt"}),n.jsx("span",{className:"receipt-txn-num",children:"#TXN7843291"}),n.jsx("span",{className:"receipt-txn-date",children:"12 Mar 2025, 10:24 AM"})]})]}),n.jsx("div",{className:"receipt-ticket-divider"}),n.jsxs("div",{className:"receipt-section",children:[n.jsx("span",{className:"receipt-section-label",children:"Paid To"}),n.jsxs("div",{className:"receipt-buyer-card",children:[n.jsx("div",{className:"buyer-store-icon",children:n.jsx(Ih,{size:20,color:"#0B6B4A",strokeWidth:2.2})}),n.jsxs("div",{className:"buyer-details-col",children:[n.jsxs("div",{className:"buyer-title-row",children:[n.jsx("h3",{className:"buyer-store-name",children:v}),n.jsx("div",{className:"verified-check-mark",children:n.jsx(q,{size:11,color:"#FFFFFF",strokeWidth:3.5})})]}),n.jsx("span",{className:"buyer-loc-text",children:"Kabadiwala • Rohini, Delhi"}),n.jsx("span",{className:"buyer-auth-code",children:"Authorization ID: K2-DL-0891"})]}),n.jsxs("div",{className:"govt-auth-pill",children:[n.jsx("span",{className:"govt-icon",children:"🏛️"}),n.jsx("span",{children:"Government Authorised"})]})]})]}),n.jsx("div",{className:"receipt-ticket-divider"}),n.jsxs("div",{className:"receipt-section",children:[n.jsx("span",{className:"receipt-section-label",children:"Item Details"}),n.jsxs("div",{className:"receipt-item-row",children:[n.jsx("div",{className:"receipt-item-thumb-box",children:n.jsx("img",{src:"/assets/Kabadiwala_Connect_Transaction_Receipt_UI_Asset_Pack/02_app_assets/pcb_photo_reference.png",alt:x,className:"receipt-item-img"})}),n.jsxs("div",{className:"receipt-item-info-col",children:[n.jsx("h4",{className:"receipt-item-heading",children:x}),n.jsx("p",{className:"receipt-item-sub",children:"Cables, chargers, circuit board etc."})]})]}),n.jsxs("div",{className:"receipt-stats-grid",children:[n.jsxs("div",{className:"receipt-stat-col",children:[n.jsx("span",{className:"stat-label",children:"Total Weight"}),n.jsxs("span",{className:"stat-value",children:[n.jsx("span",{className:"weight-bag-icon",children:"⚖️"})," ",y," kg"]})]}),n.jsxs("div",{className:"receipt-stat-col",children:[n.jsx("span",{className:"stat-label",children:"Rate (per kg)"}),n.jsxs("span",{className:"stat-value",children:["₹ ",p]})]}),n.jsxs("div",{className:"receipt-stat-col total-col",children:[n.jsx("span",{className:"stat-label",children:"Total Amount"}),n.jsxs("span",{className:"stat-value total-highlight",children:["₹ ",f]})]})]})]}),n.jsx("div",{className:"receipt-ticket-divider"}),n.jsxs("div",{className:"receipt-section",children:[n.jsx("span",{className:"receipt-section-label",children:"Payment Details"}),n.jsxs("div",{className:"payment-specs-list",children:[n.jsxs("div",{className:"payment-spec-row",children:[n.jsx("span",{className:"ps-label",children:"Payment Method"}),n.jsx("strong",{className:"ps-val",children:j})]}),n.jsxs("div",{className:"payment-spec-row",children:[n.jsx("span",{className:"ps-label",children:"Transaction ID"}),n.jsx("strong",{className:"ps-val",children:"TXN7843291"})]}),n.jsxs("div",{className:"payment-spec-row",children:[n.jsx("span",{className:"ps-label",children:"Payment Status"}),n.jsxs("div",{className:"payment-received-tag",children:[n.jsx("span",{className:"received-dot"}),n.jsx("span",{children:"Payment Received"})]})]})]})]}),n.jsxs("div",{className:"receipt-impact-banner",children:[n.jsx("div",{className:"impact-leaf-circle",children:n.jsx(zd,{size:18,color:"#FFFFFF",strokeWidth:2.4})}),n.jsxs("div",{className:"impact-banner-text",children:[n.jsx("h4",{className:"impact-title",children:"Thank you for recycling!"}),n.jsx("p",{className:"impact-sub",children:"You're helping build a cleaner, greener India."})]})]}),n.jsx("div",{className:"receipt-footer-motto",children:n.jsx("span",{children:"KEEP RECYCLING, KEEP MAKING A DIFFERENCE"})})]}),n.jsxs("div",{className:"receipt-actions-row",children:[n.jsxs("button",{className:"receipt-action-btn",onClick:C,disabled:i,children:[n.jsx(yh,{size:18,color:"#0B6B4A",strokeWidth:2.2}),n.jsx("span",{children:c?"Downloaded!":i?"Generating...":"Download Bill"})]}),n.jsxs("button",{className:"receipt-action-btn",onClick:h,children:[n.jsx(Fd,{size:18,color:"#0B6B4A",strokeWidth:2.2}),n.jsx("span",{children:l?"Copied Link!":"Share Bill"})]})]}),n.jsx("button",{className:"receipt-done-primary-btn",onClick:s,children:n.jsx("span",{children:"Done"})})]})]})}function mf({t:e,user:t={name:"Rakesh",phone:"7015363695"},onUpdateUser:s,onNavigateTab:r,onBack:i}){const[a,l]=b.useState(null),[o,c]=b.useState(t.name||"Rakesh"),[d,y]=b.useState(t.phone||"7015363695"),[p,f]=b.useState(null),[j,x]=b.useState({line1:"Shop #14, Sector 7 Scrap Market",area:"Rohini, Delhi",pincode:"110085"}),[v,C]=b.useState({notifications:!0,audioGuidance:!0,autoSyncWifi:!0,smsAlerts:!0}),h=k=>{k==null||k.preventDefault(),s&&s({name:o,phone:d}),l(null),g("Profile details updated!")},u=k=>{k==null||k.preventDefault(),l(null),g("Pickup address saved successfully!")},g=k=>{f(k),setTimeout(()=>f(null),2500)},m=[{id:"profile_details",icon:jt,title:"Profile Details",subtitle:"View and update your personal details",action:()=>l("edit_profile")},{id:"address",icon:gt,title:"Address",subtitle:"Manage your delivery and pickup address",action:()=>l("address")},{id:"language",icon:kh,title:"Language",subtitle:"Choose your preferred language (English / हिंदी)",action:()=>r?r("language"):null},{id:"sync_details",icon:Xa,title:"Sync Details",subtitle:"Sync your data across devices",action:()=>r?r("sync_status"):null},{id:"safety_hazards",icon:Bh,title:"Safety & Hazards",subtitle:"Learn about safety guidelines for e-waste",action:()=>r?r("safety_tips"):null},{id:"app_settings",icon:Lh,title:"App Settings",subtitle:"Notifications, sound effects and privacy",action:()=>l("settings")},{id:"help_support",icon:wh,title:"Help & Support",subtitle:"Get help or contact our 24/7 team",action:()=>l("help")}];return n.jsxs("div",{className:"profile-screen-wrapper page-fade-enter",children:[n.jsxs("div",{className:"profile-scroll-container",children:[n.jsxs("div",{className:"profile-header-card",children:[n.jsx("div",{className:"profile-avatar-circle",children:n.jsx("span",{className:"profile-avatar-letter",children:t.name?t.name.charAt(0).toUpperCase():"R"})}),n.jsxs("div",{className:"profile-info-col",children:[n.jsxs("div",{className:"profile-name-row",children:[n.jsx("h2",{className:"profile-user-name",children:t.name||"Rakesh"}),n.jsxs("button",{className:"profile-edit-btn",onClick:()=>l("edit_profile"),"aria-label":"Edit Profile",children:[n.jsx(zh,{size:13,color:"#0B6B4A",strokeWidth:2.4}),n.jsx("span",{children:"Edit"})]})]}),n.jsxs("span",{className:"profile-user-phone",children:["+91 ",t.phone||"7015363695"]}),n.jsxs("div",{className:"profile-verified-badge",children:[n.jsx("div",{className:"verified-dot-inner",children:n.jsx(q,{size:9,color:"#FFFFFF",strokeWidth:3.5})}),n.jsx("span",{children:"Verified Member"})]})]})]}),n.jsxs("div",{className:"profile-motivation-banner",children:[n.jsx("div",{className:"motivation-leaf-icon-circle",children:n.jsx(zd,{size:18,color:"#0B6B4A",strokeWidth:2.4})}),n.jsxs("div",{className:"motivation-text-wrap",children:[n.jsx("h4",{className:"motivation-title",children:"Keep recycling, keep making a difference!"}),n.jsx("p",{className:"motivation-sub",children:"Small actions lead to a cleaner, greener tomorrow."})]})]}),n.jsx("div",{className:"profile-menu-card",children:m.map((k,_)=>{const P=k.icon;return n.jsxs("div",{className:"profile-menu-row",onClick:k.action,role:"button",tabIndex:0,children:[n.jsx("div",{className:"menu-icon-circle",children:n.jsx(P,{size:19,color:"#0B6B4A",strokeWidth:2.2})}),n.jsxs("div",{className:"menu-text-col",children:[n.jsx("h4",{className:"menu-item-title",children:k.title}),n.jsx("p",{className:"menu-item-sub",children:k.subtitle})]}),n.jsx(xe,{size:18,color:"#9CA3AF",strokeWidth:2.2,className:"menu-chevron"})]},k.id)})}),n.jsx("div",{className:"profile-app-version-footer",children:n.jsx("span",{children:"Kabadiwala Connect v1.4.2 • CPCB Certified Partner"})})]}),p&&n.jsxs("div",{className:"profile-toast-banner",children:[n.jsx($t,{size:16,color:"#FFFFFF"}),n.jsx("span",{children:p})]}),a==="edit_profile"&&n.jsx("div",{className:"profile-modal-backdrop",onClick:()=>l(null),children:n.jsxs("div",{className:"profile-modal-sheet",onClick:k=>k.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsx("h3",{children:"Edit Profile"}),n.jsx("button",{className:"modal-close-btn",onClick:()=>l(null),children:n.jsx(pe,{size:18,color:"#6B7280"})})]}),n.jsxs("form",{onSubmit:h,className:"profile-form",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Full Name"}),n.jsx("input",{type:"text",value:o,onChange:k=>c(k.target.value),placeholder:"Enter your name",className:"profile-input",required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Mobile Number"}),n.jsx("input",{type:"tel",value:d,onChange:k=>y(k.target.value),placeholder:"10-digit mobile number",className:"profile-input",maxLength:10,required:!0})]}),n.jsx("button",{type:"submit",className:"profile-save-btn",children:"Save Changes"})]})]})}),a==="address"&&n.jsx("div",{className:"profile-modal-backdrop",onClick:()=>l(null),children:n.jsxs("div",{className:"profile-modal-sheet",onClick:k=>k.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsx("h3",{children:"Manage Pickup Address"}),n.jsx("button",{className:"modal-close-btn",onClick:()=>l(null),children:n.jsx(pe,{size:18,color:"#6B7280"})})]}),n.jsxs("form",{onSubmit:u,className:"profile-form",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Shop / House & Street"}),n.jsx("input",{type:"text",value:j.line1,onChange:k=>x({...j,line1:k.target.value}),placeholder:"Street / Shop details",className:"profile-input",required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Area / Locality & City"}),n.jsx("input",{type:"text",value:j.area,onChange:k=>x({...j,area:k.target.value}),placeholder:"e.g. Rohini, Delhi",className:"profile-input",required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Pincode"}),n.jsx("input",{type:"text",value:j.pincode,onChange:k=>x({...j,pincode:k.target.value}),placeholder:"6-digit pincode",className:"profile-input",maxLength:6,required:!0})]}),n.jsx("button",{type:"submit",className:"profile-save-btn",children:"Save Address"})]})]})}),a==="settings"&&n.jsx("div",{className:"profile-modal-backdrop",onClick:()=>l(null),children:n.jsxs("div",{className:"profile-modal-sheet",onClick:k=>k.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsx("h3",{children:"App Settings"}),n.jsx("button",{className:"modal-close-btn",onClick:()=>l(null),children:n.jsx(pe,{size:18,color:"#6B7280"})})]}),n.jsxs("div",{className:"settings-toggles-list",children:[n.jsxs("div",{className:"setting-toggle-row",children:[n.jsxs("div",{className:"st-info",children:[n.jsx("strong",{children:"Push Notifications"}),n.jsx("span",{children:"Get real-time pickup & rate alerts"})]}),n.jsx("input",{type:"checkbox",checked:v.notifications,onChange:k=>C({...v,notifications:k.target.checked}),className:"toggle-switch-checkbox"})]}),n.jsxs("div",{className:"setting-toggle-row",children:[n.jsxs("div",{className:"st-info",children:[n.jsx("strong",{children:"Audio Voice Guidance"}),n.jsx("span",{children:"Read aloud scrap valuations and safety tips"})]}),n.jsx("input",{type:"checkbox",checked:v.audioGuidance,onChange:k=>C({...v,audioGuidance:k.target.checked}),className:"toggle-switch-checkbox"})]}),n.jsxs("div",{className:"setting-toggle-row",children:[n.jsxs("div",{className:"st-info",children:[n.jsx("strong",{children:"Auto-Sync on Wi-Fi"}),n.jsx("span",{children:"Sync offline lots automatically"})]}),n.jsx("input",{type:"checkbox",checked:v.autoSyncWifi,onChange:k=>C({...v,autoSyncWifi:k.target.checked}),className:"toggle-switch-checkbox"})]}),n.jsxs("div",{className:"setting-toggle-row",children:[n.jsxs("div",{className:"st-info",children:[n.jsx("strong",{children:"SMS Transaction Receipts"}),n.jsx("span",{children:"Receive bill receipts via SMS link"})]}),n.jsx("input",{type:"checkbox",checked:v.smsAlerts,onChange:k=>C({...v,smsAlerts:k.target.checked}),className:"toggle-switch-checkbox"})]})]}),n.jsx("button",{type:"button",className:"profile-save-btn",onClick:()=>{l(null),g("Settings saved")},children:"Done"})]})}),a==="help"&&n.jsx("div",{className:"profile-modal-backdrop",onClick:()=>l(null),children:n.jsxs("div",{className:"profile-modal-sheet",onClick:k=>k.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsx("h3",{children:"Help & Support"}),n.jsx("button",{className:"modal-close-btn",onClick:()=>l(null),children:n.jsx(pe,{size:18,color:"#6B7280"})})]}),n.jsxs("div",{className:"help-support-content",children:[n.jsxs("div",{className:"support-contact-card",children:[n.jsx(Fh,{size:20,color:"#0B6B4A"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Toll-Free Helpline"}),n.jsx("p",{children:"1800-267-9000 (9 AM - 8 PM)"})]})]}),n.jsxs("div",{className:"support-contact-card",children:[n.jsx(os,{size:20,color:"#0B6B4A"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Recycler Grievance Redressal"}),n.jsx("p",{children:"support@kabadiwalaconnect.org"})]})]}),n.jsx("p",{className:"help-subtext",children:"Our team is committed to ensuring fair prices and safe disposal of e-waste across India."})]}),n.jsx("button",{type:"button",className:"profile-save-btn",onClick:()=>l(null),children:"Close"})]})}),n.jsxs("div",{className:"home-nav-bar",children:[n.jsxs("button",{className:"nav-tab",onClick:()=>r?r("home"):null,children:[n.jsx(Ht,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Home"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>r?r("history"):null,children:[n.jsx(Vt,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Bookings"})]}),n.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:()=>r?r("step1_photo"):null,children:[n.jsx(_t,{size:26,color:"white"}),n.jsx("span",{className:"fab-label",children:"Scan"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>r?r("todays_prices"):null,children:[n.jsx(Za,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Rates"})]}),n.jsxs("button",{className:"nav-tab active",children:[n.jsx(jt,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Profile"})]})]})]})}function xf({t:e,currentLocation:t="Rohini, Delhi",onNavigateTab:s,onBack:r}){const[i,a]=b.useState(0),[l,o]=b.useState(t),[c,d]=b.useState(!1),[y,p]=b.useState(null),[f,j]=b.useState("4:00 PM - 6:00 PM"),[x,v]=b.useState(["E-waste","Electronics"]),[C,h]=b.useState(null),u=[{label:"Today",date:"07 Sep",isAvailable:!0},{label:"Tomorrow",date:"08 Sep",isAvailable:!0},{label:"Wed",date:"09 Sep",isAvailable:!0},{label:"Thu",date:"10 Sep",isAvailable:!0},{label:"Fri",date:"11 Sep",isAvailable:!0}],g=["Rohini, Delhi","Andheri West, Mumbai","Koramangala, Bengaluru","Kothrud, Pune","Connaught Place, Delhi"],m=[{id:"k1",name:"Rakesh Kumar",initials:"R",rating:4.8,reviews:124,distance:"1.8 km",status:"Available Today",statusType:"available",verified:!0,materials:["E-waste","Electronics","Cables","Plastic"],phone:"+91 98765 43210"},{id:"k2",name:"Suresh Kumar",initials:"SK",rating:4.6,reviews:98,distance:"2.4 km",status:"Few slots left",statusType:"limited",verified:!0,materials:["Paper","Plastic","Metal","Electronic"],phone:"+91 98111 22334"},{id:"k3",name:"Amit Sharma",initials:"AM",rating:4.4,reviews:76,distance:"3.2 km",status:"Fully booked",statusType:"booked",verified:!1,materials:["Metal","Plastic","Paper"],phone:"+91 98222 33445"}],k=["10:00 AM - 12:00 PM","12:00 PM - 2:00 PM","2:00 PM - 4:00 PM","4:00 PM - 6:00 PM"],_=["E-waste","Electronics","Cables","Plastic","Paper","Metal","Batteries"],P=w=>{x.includes(w)?x.length>1&&v(x.filter(F=>F!==w)):v([...x,w])},A=w=>{w.preventDefault();const F=y;p(null),h(`Pickup booked with ${F.name} for ${u[i].label} (${f})!`),setTimeout(()=>h(null),3500)};return n.jsxs("div",{className:"book-pickup-screen page-fade-enter",children:[n.jsxs("div",{className:"book-pickup-top-bar",children:[n.jsx("h1",{className:"book-pickup-title",children:"Book a Pickup"}),n.jsxs("button",{className:"location-pill-btn",onClick:()=>d(!0),"aria-label":"Select Location",children:[n.jsx(gt,{size:13,color:"#0B6B4A"}),n.jsx("span",{children:l}),n.jsx(Nn,{size:13,color:"#0B6B4A"})]})]}),n.jsxs("div",{className:"book-pickup-scroll-container",children:[n.jsxs("div",{className:"next-pickup-banner",children:[n.jsx("div",{className:"next-pickup-icon-circle",children:n.jsx(Wh,{size:20,color:"#0B6B4A",strokeWidth:2.4})}),n.jsxs("div",{className:"next-pickup-info",children:[n.jsx("span",{className:"np-label",children:"Next Scheduled Pickup"}),n.jsx("strong",{className:"np-name",children:"Rakesh Kumar • Today, 4:00 PM"})]}),n.jsx("div",{className:"np-live-tag",children:n.jsx("span",{children:"● Confirmed"})})]}),n.jsxs("div",{className:"date-selector-section",children:[n.jsx("span",{className:"section-sublabel",children:"Select Pickup Date"}),n.jsx("div",{className:"date-chips-row",children:u.map((w,F)=>{const J=F===i;return n.jsxs("button",{className:`date-chip ${J?"active":""}`,onClick:()=>a(F),children:[n.jsx("span",{className:"date-chip-label",children:w.label}),n.jsx("strong",{className:"date-chip-day",children:w.date})]},F)})})]}),n.jsxs("div",{className:"kabadiwalas-section",children:[n.jsxs("div",{className:"section-header-row",children:[n.jsx("h2",{className:"section-heading",children:"Available Kabadiwalas"}),n.jsx("span",{className:"partners-count-badge",children:"3 nearby"})]}),n.jsx("div",{className:"kabadiwalas-list",children:m.map(w=>{const F=w.statusType==="booked";return n.jsxs("div",{className:"kabadiwala-card",children:[n.jsxs("div",{className:"kabadiwala-card-top",children:[n.jsx("div",{className:"k-avatar-circle",children:n.jsx("span",{children:w.initials})}),n.jsxs("div",{className:"k-info-col",children:[n.jsxs("div",{className:"k-name-row",children:[n.jsx("h3",{className:"k-name",children:w.name}),w.verified&&n.jsxs("div",{className:"k-verified-pill",title:"Verified Recycler",children:[n.jsx(q,{size:10,color:"#FFFFFF",strokeWidth:3.5}),n.jsx("span",{children:"Verified"})]})]}),n.jsxs("div",{className:"k-meta-row",children:[n.jsxs("div",{className:"k-rating-pill",children:[n.jsx(na,{size:11,color:"#F59E0B",fill:"#F59E0B"}),n.jsx("span",{children:w.rating}),n.jsxs("span",{className:"k-reviews-count",children:["(",w.reviews,")"]})]}),n.jsx("span",{className:"k-dot-separator",children:"•"}),n.jsx("span",{className:"k-distance-text",children:w.distance})]})]}),n.jsxs("div",{className:`k-status-badge ${w.statusType}`,children:[n.jsx("span",{className:"status-dot"}),n.jsx("span",{children:w.status})]})]}),n.jsxs("div",{className:"k-materials-wrap",children:[n.jsx("span",{className:"materials-label",children:"Buys:"}),n.jsx("div",{className:"material-tags-row",children:w.materials.map((J,Ct)=>n.jsx("span",{className:"k-mat-chip",children:J},Ct))})]}),n.jsx("div",{className:"k-card-action-row",children:n.jsx("button",{className:`k-book-btn ${F?"disabled":""}`,disabled:F,onClick:()=>p(w),children:F?"Fully Booked":"Book Pickup →"})})]},w.id)})})]})]}),y&&n.jsx("div",{className:"profile-modal-backdrop",onClick:()=>p(null),children:n.jsxs("div",{className:"profile-modal-sheet",onClick:w=>w.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsxs("div",{className:"sheet-item-info",children:[n.jsx("div",{className:"k-avatar-circle",style:{width:42,height:42,fontSize:16},children:n.jsx("span",{children:y.initials})}),n.jsxs("div",{children:[n.jsxs("h3",{style:{margin:0,fontSize:16,fontWeight:800,color:"#101A24"},children:["Book ",y.name]}),n.jsxs("p",{style:{margin:"2px 0 0",fontSize:12,color:"#6E7782"},children:[u[i].label," (",u[i].date,") • ",l]})]})]}),n.jsx("button",{className:"modal-close-btn",onClick:()=>p(null),children:n.jsx(pe,{size:18,color:"#6B7280"})})]}),n.jsxs("form",{onSubmit:A,className:"profile-form",style:{marginTop:12},children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Select Time Slot"}),n.jsx("div",{className:"time-slots-grid",children:k.map((w,F)=>n.jsxs("button",{type:"button",className:`time-slot-chip ${f===w?"active":""}`,onClick:()=>j(w),children:[n.jsx(Ar,{size:12}),n.jsx("span",{children:w})]},F))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Scrap Materials for Pickup"}),n.jsx("div",{className:"material-selection-grid",children:_.map((w,F)=>{const J=x.includes(w);return n.jsxs("button",{type:"button",className:`mat-select-chip ${J?"selected":""}`,onClick:()=>P(w),children:[J&&n.jsx(q,{size:11,strokeWidth:3}),n.jsx("span",{children:w})]},F)})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Pickup Location"}),n.jsxs("div",{className:"pickup-loc-preview",children:[n.jsx(gt,{size:15,color:"#0B6B4A"}),n.jsxs("span",{children:[l," (Default Saved Address)"]})]})]}),n.jsx("button",{type:"submit",className:"profile-save-btn",style:{marginTop:10},children:"Confirm Doorstep Pickup"})]})]})}),c&&n.jsx("div",{className:"profile-modal-backdrop",onClick:()=>d(!1),children:n.jsxs("div",{className:"profile-modal-sheet",onClick:w=>w.stopPropagation(),children:[n.jsxs("div",{className:"modal-sheet-header",children:[n.jsx("h3",{children:"Select Service Zone"}),n.jsx("button",{className:"modal-close-btn",onClick:()=>d(!1),children:n.jsx(pe,{size:18,color:"#6B7280"})})]}),n.jsx("div",{className:"locations-list-group",children:g.map((w,F)=>n.jsxs("div",{className:`loc-choice-row ${l===w?"active":""}`,onClick:()=>{o(w),d(!1)},children:[n.jsx(gt,{size:16,color:l===w?"#0B6B4A":"#6E7782"}),n.jsx("span",{children:w}),l===w&&n.jsx(q,{size:16,color:"#0B6B4A"})]},F))})]})}),C&&n.jsxs("div",{className:"profile-toast-banner",children:[n.jsx($t,{size:16,color:"#FFFFFF"}),n.jsx("span",{children:C})]}),n.jsxs("div",{className:"home-nav-bar",children:[n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("home"):r&&r(),children:[n.jsx(Ht,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Home"})]}),n.jsxs("button",{className:"nav-tab active",children:[n.jsx(Vt,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Bookings"})]}),n.jsxs("button",{className:"nav-fab-camera camera-glow-btn",onClick:()=>s?s("step1_photo"):r&&r(),"aria-label":"Camera Scan",children:[n.jsx(_t,{size:26,color:"#FFFFFF"}),n.jsx("span",{className:"fab-label",children:"Camera"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("todays_prices"):r&&r(),children:[n.jsx(Za,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Rates"})]}),n.jsxs("button",{className:"nav-tab",onClick:()=>s?s("profile"):r&&r(),children:[n.jsx(jt,{size:22,className:"tab-icon"}),n.jsx("span",{children:"Profile"})]})]})]})}function gf(){const[e,t]=b.useState("splash"),[s,r]=b.useState("en"),[i,a]=b.useState({name:"Rakesh",phone:"7015363695"}),[l,o]=b.useState({photoUrl:"/assets/Kabadiwala_Connect_Step1_TakePhoto_UI_Asset_Pack/01_camera_illustration/scrap_photo_reference.jpg",categoryId:"pcb",categoryName:"PCB (Circuit Board)",weight:2.5,estimatedTotal:312,ratePerKg:125,streetBonus:18,buyer:{id:"buyer_1",name:"GreenCycle Recycling",rate:128}}),c=uo[s]||uo.en,d=()=>t("language"),y=()=>t("auth"),p=m=>{a(k=>({...k,...m})),t("location")},f=()=>t("notification"),j=()=>t("home"),x=m=>{o(k=>({...k,...m})),t("step1_hazardous_battery_detected")},v=m=>{o(k=>({...k,...m})),m.categoryId==="car_battery"?t("safety_tips"):t("step3_weight")},C=m=>{o(k=>({...k,...m})),t("step4_value")},h=m=>{o(k=>({...k,...m})),t("step5_buyer")},u=m=>{o(k=>({...k,...m})),t("payment")},g=m=>{o(k=>({...k,...m})),t("receipt")};return n.jsxs(Gh,{currentScreen:e,setCurrentScreen:t,currentLang:s,setLanguage:r,children:[e==="splash"&&n.jsx(Qh,{t:c,onNext:d}),e==="language"&&n.jsx(qh,{t:c,currentLang:s,setLanguage:r,onNext:y,onBack:()=>t("splash")}),e==="auth"&&n.jsx(Yh,{t:c,onSkip:()=>t("location"),onAuthenticated:p,onBack:()=>t("language")}),e==="location"&&n.jsx(Xh,{t:c,onNext:f,onBack:()=>t("auth")}),e==="notification"&&n.jsx(Zh,{t:c,onNext:j,onBack:()=>t("location")}),e==="home"&&n.jsx(Jh,{t:c,user:i,currentLang:s,onNavigate:m=>t(m)}),e==="step1_photo"&&n.jsx(ef,{t:c,onNext:x,onBack:()=>t("home")}),e==="step1_hazardous_battery_detected"&&n.jsx(hf,{t:c,onNext:m=>{o(k=>({...k,...m})),t("step2_category")},onBack:()=>t("step1_photo")}),e==="step2_category"&&n.jsx(tf,{t:c,photoUrl:l.photoUrl,initialCategory:l.categoryId,onNext:v,onBack:()=>t("step1_photo"),onRetake:()=>t("step1_photo")}),e==="step3_weight"&&n.jsx(nf,{t:c,categoryData:l,initialWeight:l.weight,onNext:C,onBack:()=>t("step2_category"),onChangeCategory:()=>t("step2_category")}),e==="step4_value"&&n.jsx(sf,{t:c,sellFlowData:l,onNext:h,onBack:()=>t("step3_weight")}),e==="step5_buyer"&&n.jsx(rf,{t:c,sellFlowData:l,onNext:u,onBack:()=>t("step4_value")}),e==="payment"&&n.jsx(af,{t:c,sellFlowData:l,onNext:g,onBack:()=>t("step5_buyer")}),e==="receipt"&&n.jsx(ff,{t:c,sellFlowData:l,onDone:()=>t("home"),onBack:()=>t("payment")}),e==="book_pickup"&&n.jsx(xf,{t:c,currentLocation:"Rohini, Delhi",onNavigateTab:m=>{m==="home"&&t("home"),m==="step1_photo"&&t("step1_photo"),m==="todays_prices"&&t("todays_prices"),m==="history"&&t("history"),m==="my_earnings"&&t("my_earnings"),m==="profile"&&t("profile")},onBack:()=>t("home")}),e==="todays_prices"&&n.jsx(lf,{t:c,currentLocation:"Rohini, Delhi",onBack:()=>t("home"),onSelectCategory:m=>{o(k=>({...k,categoryId:m})),t("step1_photo")},onNavigateTab:m=>{m==="home"&&t("home"),m==="step1_photo"&&t("step1_photo"),(m==="history"||m==="bookings"||m==="book_pickup")&&t("book_pickup"),m==="my_earnings"&&t("my_earnings"),m==="profile"&&t("profile")}}),e==="my_earnings"&&n.jsx(of,{t:c,onBack:()=>t("home"),onNavigateTab:m=>{m==="home"&&t("home"),m==="step1_photo"&&t("step1_photo"),m==="todays_prices"&&t("todays_prices"),(m==="history"||m==="bookings"||m==="book_pickup")&&t("book_pickup"),m==="profile"&&t("profile")}}),e==="history"&&n.jsx(cf,{t:c,onBack:()=>t("home"),onNavigateTab:m=>{m==="home"&&t("home"),m==="step1_photo"&&t("step1_photo"),m==="todays_prices"&&t("todays_prices"),m==="my_earnings"&&t("my_earnings"),m==="profile"&&t("profile")}}),e==="sync_status"&&n.jsx(df,{t:c,onBack:()=>t("home"),onNavigateTab:m=>{m==="home"&&t("home"),m==="step1_photo"&&t("step1_photo"),m==="todays_prices"&&t("todays_prices"),(m==="history"||m==="bookings"||m==="book_pickup")&&t("book_pickup"),m==="my_earnings"&&t("my_earnings"),m==="profile"&&t("profile")}}),e==="profile"&&n.jsx(mf,{t:c,user:i,onUpdateUser:m=>a(k=>({...k,...m})),onNavigateTab:m=>{m==="home"&&t("home"),m==="step1_photo"&&t("step1_photo"),m==="todays_prices"&&t("todays_prices"),(m==="history"||m==="bookings"||m==="book_pickup")&&t("book_pickup"),m==="my_earnings"&&t("my_earnings"),m==="sync_status"&&t("sync_status"),m==="safety_tips"&&t("safety_tips"),m==="language"&&t("language")},onBack:()=>t("home")}),e==="safety_tips"&&n.jsx(uf,{t:c,onClose:()=>t("step2_category"),onProceed:()=>t("step3_weight"),onBack:()=>t("step2_category")})]})}ci.createRoot(document.getElementById("root")).render(n.jsx(qd.StrictMode,{children:n.jsx(gf,{})}));
