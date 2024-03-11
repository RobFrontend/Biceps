function Ry(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Xr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mm={exports:{}},$a={},gm={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lo=Symbol.for("react.element"),by=Symbol.for("react.portal"),Iy=Symbol.for("react.fragment"),zy=Symbol.for("react.strict_mode"),$y=Symbol.for("react.profiler"),Ny=Symbol.for("react.provider"),My=Symbol.for("react.context"),Ay=Symbol.for("react.forward_ref"),Ly=Symbol.for("react.suspense"),Dy=Symbol.for("react.memo"),Fy=Symbol.for("react.lazy"),Yd=Symbol.iterator;function By(e){return e===null||typeof e!="object"?null:(e=Yd&&e[Yd]||e["@@iterator"],typeof e=="function"?e:null)}var ym={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vm=Object.assign,wm={};function di(e,t,n){this.props=e,this.context=t,this.refs=wm,this.updater=n||ym}di.prototype.isReactComponent={};di.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};di.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sm(){}Sm.prototype=di.prototype;function nf(e,t,n){this.props=e,this.context=t,this.refs=wm,this.updater=n||ym}var rf=nf.prototype=new Sm;rf.constructor=nf;vm(rf,di.prototype);rf.isPureReactComponent=!0;var Qd=Array.isArray,xm=Object.prototype.hasOwnProperty,of={current:null},km={key:!0,ref:!0,__self:!0,__source:!0};function Cm(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)xm.call(t,r)&&!km.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Lo,type:e,key:o,ref:s,props:i,_owner:of.current}}function Uy(e,t){return{$$typeof:Lo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function sf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lo}function Vy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gd=/\/+/g;function Bl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vy(""+e.key):t.toString(36)}function Os(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Lo:case by:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Bl(s,0):r,Qd(i)?(n="",e!=null&&(n=e.replace(Gd,"$&/")+"/"),Os(i,t,n,"",function(u){return u})):i!=null&&(sf(i)&&(i=Uy(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Gd,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Qd(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Bl(o,a);s+=Os(o,t,n,l,i)}else if(l=By(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Bl(o,a++),s+=Os(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function qo(e,t,n){if(e==null)return e;var r=[],i=0;return Os(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Wy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},Rs={transition:null},Hy={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Rs,ReactCurrentOwner:of};V.Children={map:qo,forEach:function(e,t,n){qo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qo(e,function(){t++}),t},toArray:function(e){return qo(e,function(t){return t})||[]},only:function(e){if(!sf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=di;V.Fragment=Iy;V.Profiler=$y;V.PureComponent=nf;V.StrictMode=zy;V.Suspense=Ly;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hy;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vm({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=of.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)xm.call(t,l)&&!km.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Lo,type:e.type,key:i,ref:o,props:r,_owner:s}};V.createContext=function(e){return e={$$typeof:My,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ny,_context:e},e.Consumer=e};V.createElement=Cm;V.createFactory=function(e){var t=Cm.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Ay,render:e}};V.isValidElement=sf;V.lazy=function(e){return{$$typeof:Fy,_payload:{_status:-1,_result:e},_init:Wy}};V.memo=function(e,t){return{$$typeof:Dy,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=Rs.transition;Rs.transition={};try{e()}finally{Rs.transition=t}};V.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};V.useCallback=function(e,t){return Ge.current.useCallback(e,t)};V.useContext=function(e){return Ge.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};V.useEffect=function(e,t){return Ge.current.useEffect(e,t)};V.useId=function(){return Ge.current.useId()};V.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Ge.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};V.useRef=function(e){return Ge.current.useRef(e)};V.useState=function(e){return Ge.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Ge.current.useTransition()};V.version="18.2.0";gm.exports=V;var E=gm.exports;const at=hm(E),bu=Ry({__proto__:null,default:at},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yy=E,Qy=Symbol.for("react.element"),Gy=Symbol.for("react.fragment"),Ky=Object.prototype.hasOwnProperty,Xy=Yy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qy={key:!0,ref:!0,__self:!0,__source:!0};function Em(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Ky.call(t,r)&&!qy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Qy,type:e,key:o,ref:s,props:i,_owner:Xy.current}}$a.Fragment=Gy;$a.jsx=Em;$a.jsxs=Em;mm.exports=$a;var g=mm.exports,Iu={},_m={exports:{}},pt={},Tm={exports:{}},Pm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,I){var z=O.length;O.push(I);e:for(;0<z;){var X=z-1>>>1,W=O[X];if(0<i(W,I))O[X]=I,O[z]=W,z=X;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var I=O[0],z=O.pop();if(z!==I){O[0]=z;e:for(var X=0,W=O.length,Xt=W>>>1;X<Xt;){var Xe=2*(X+1)-1,me=O[Xe],xe=Xe+1,Ee=O[xe];if(0>i(me,z))xe<W&&0>i(Ee,me)?(O[X]=Ee,O[xe]=z,X=xe):(O[X]=me,O[Xe]=z,X=Xe);else if(xe<W&&0>i(Ee,z))O[X]=Ee,O[xe]=z,X=xe;else break e}}return I}function i(O,I){var z=O.sortIndex-I.sortIndex;return z!==0?z:O.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,c=null,p=3,w=!1,y=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(O){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=O)r(u),I.sortIndex=I.expirationTime,t(l,I);else break;I=n(u)}}function S(O){if(v=!1,m(O),!y)if(n(l)!==null)y=!0,de(C);else{var I=n(u);I!==null&&se(S,I.startTime-O)}}function C(O,I){y=!1,v&&(v=!1,h(R),R=-1),w=!0;var z=p;try{for(m(I),c=n(l);c!==null&&(!(c.expirationTime>I)||O&&!K());){var X=c.callback;if(typeof X=="function"){c.callback=null,p=c.priorityLevel;var W=X(c.expirationTime<=I);I=e.unstable_now(),typeof W=="function"?c.callback=W:c===n(l)&&r(l),m(I)}else r(l);c=n(l)}if(c!==null)var Xt=!0;else{var Xe=n(u);Xe!==null&&se(S,Xe.startTime-I),Xt=!1}return Xt}finally{c=null,p=z,w=!1}}var _=!1,k=null,R=-1,N=5,$=-1;function K(){return!(e.unstable_now()-$<N)}function Re(){if(k!==null){var O=e.unstable_now();$=O;var I=!0;try{I=k(!0,O)}finally{I?be():(_=!1,k=null)}}else _=!1}var be;if(typeof d=="function")be=function(){d(Re)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,B=M.port2;M.port1.onmessage=Re,be=function(){B.postMessage(null)}}else be=function(){x(Re,0)};function de(O){k=O,_||(_=!0,be())}function se(O,I){R=x(function(){O(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,de(C))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(O){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var z=p;p=I;try{return O()}finally{p=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,I){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var z=p;p=O;try{return I()}finally{p=z}},e.unstable_scheduleCallback=function(O,I,z){var X=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?X+z:X):z=X,O){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=z+W,O={id:f++,callback:I,priorityLevel:O,startTime:z,expirationTime:W,sortIndex:-1},z>X?(O.sortIndex=z,t(u,O),n(l)===null&&O===n(u)&&(v?(h(R),R=-1):v=!0,se(S,z-X))):(O.sortIndex=W,t(l,O),y||w||(y=!0,de(C))),O},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(O){var I=p;return function(){var z=p;p=I;try{return O.apply(this,arguments)}finally{p=z}}}})(Pm);Tm.exports=Pm;var Jy=Tm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm=E,dt=Jy;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Om=new Set,no={};function mr(e,t){qr(e,t),qr(e+"Capture",t)}function qr(e,t){for(no[e]=t,e=0;e<t.length;e++)Om.add(t[e])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zu=Object.prototype.hasOwnProperty,Zy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kd={},Xd={};function ev(e){return zu.call(Xd,e)?!0:zu.call(Kd,e)?!1:Zy.test(e)?Xd[e]=!0:(Kd[e]=!0,!1)}function tv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nv(e,t,n,r){if(t===null||typeof t>"u"||tv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ke(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new Ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new Ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new Ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new Ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new Ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new Ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new Ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new Ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new Ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var af=/[\-:]([a-z])/g;function lf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(af,lf);Me[t]=new Ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(af,lf);Me[t]=new Ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(af,lf);Me[t]=new Ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new Ke(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new Ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function uf(e,t,n,r){var i=Me.hasOwnProperty(t)?Me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(nv(t,n,i,r)&&(n=null),r||i===null?ev(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var hn=jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jo=Symbol.for("react.element"),Er=Symbol.for("react.portal"),_r=Symbol.for("react.fragment"),cf=Symbol.for("react.strict_mode"),$u=Symbol.for("react.profiler"),Rm=Symbol.for("react.provider"),bm=Symbol.for("react.context"),ff=Symbol.for("react.forward_ref"),Nu=Symbol.for("react.suspense"),Mu=Symbol.for("react.suspense_list"),df=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),Im=Symbol.for("react.offscreen"),qd=Symbol.iterator;function Si(e){return e===null||typeof e!="object"?null:(e=qd&&e[qd]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,Ul;function Ni(e){if(Ul===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ul=t&&t[1]||""}return`
`+Ul+e}var Vl=!1;function Wl(e,t){if(!e||Vl)return"";Vl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Vl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ni(e):""}function rv(e){switch(e.tag){case 5:return Ni(e.type);case 16:return Ni("Lazy");case 13:return Ni("Suspense");case 19:return Ni("SuspenseList");case 0:case 2:case 15:return e=Wl(e.type,!1),e;case 11:return e=Wl(e.type.render,!1),e;case 1:return e=Wl(e.type,!0),e;default:return""}}function Au(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _r:return"Fragment";case Er:return"Portal";case $u:return"Profiler";case cf:return"StrictMode";case Nu:return"Suspense";case Mu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bm:return(e.displayName||"Context")+".Consumer";case Rm:return(e._context.displayName||"Context")+".Provider";case ff:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case df:return t=e.displayName||null,t!==null?t:Au(e.type)||"Memo";case xn:t=e._payload,e=e._init;try{return Au(e(t))}catch{}}return null}function iv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Au(t);case 8:return t===cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ov(e){var t=zm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zo(e){e._valueTracker||(e._valueTracker=ov(e))}function $m(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=zm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function qs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Lu(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Jd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Nm(e,t){t=t.checked,t!=null&&uf(e,"checked",t,!1)}function Du(e,t){Nm(e,t);var n=Bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fu(e,t.type,Bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fu(e,t,n){(t!=="number"||qs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mi=Array.isArray;function Dr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ep(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Mi(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bn(n)}}function Mm(e,t){var n=Bn(t.value),r=Bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function tp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Am(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Am(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var es,Lm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(es=es||document.createElement("div"),es.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=es.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ro(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sv=["Webkit","ms","Moz","O"];Object.keys(Ui).forEach(function(e){sv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ui[t]=Ui[e]})});function Dm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ui.hasOwnProperty(e)&&Ui[e]?(""+t).trim():t+"px"}function Fm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Dm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var av=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vu(e,t){if(t){if(av[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Wu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hu=null;function pf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yu=null,Fr=null,Br=null;function np(e){if(e=Bo(e)){if(typeof Yu!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Da(t),Yu(e.stateNode,e.type,t))}}function Bm(e){Fr?Br?Br.push(e):Br=[e]:Fr=e}function Um(){if(Fr){var e=Fr,t=Br;if(Br=Fr=null,np(e),t)for(e=0;e<t.length;e++)np(t[e])}}function Vm(e,t){return e(t)}function Wm(){}var Hl=!1;function Hm(e,t,n){if(Hl)return e(t,n);Hl=!0;try{return Vm(e,t,n)}finally{Hl=!1,(Fr!==null||Br!==null)&&(Wm(),Um())}}function io(e,t){var n=e.stateNode;if(n===null)return null;var r=Da(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Qu=!1;if(cn)try{var xi={};Object.defineProperty(xi,"passive",{get:function(){Qu=!0}}),window.addEventListener("test",xi,xi),window.removeEventListener("test",xi,xi)}catch{Qu=!1}function lv(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Vi=!1,Js=null,Zs=!1,Gu=null,uv={onError:function(e){Vi=!0,Js=e}};function cv(e,t,n,r,i,o,s,a,l){Vi=!1,Js=null,lv.apply(uv,arguments)}function fv(e,t,n,r,i,o,s,a,l){if(cv.apply(this,arguments),Vi){if(Vi){var u=Js;Vi=!1,Js=null}else throw Error(P(198));Zs||(Zs=!0,Gu=u)}}function gr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ym(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rp(e){if(gr(e)!==e)throw Error(P(188))}function dv(e){var t=e.alternate;if(!t){if(t=gr(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return rp(i),e;if(o===r)return rp(i),t;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Qm(e){return e=dv(e),e!==null?Gm(e):null}function Gm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gm(e);if(t!==null)return t;e=e.sibling}return null}var Km=dt.unstable_scheduleCallback,ip=dt.unstable_cancelCallback,pv=dt.unstable_shouldYield,hv=dt.unstable_requestPaint,he=dt.unstable_now,mv=dt.unstable_getCurrentPriorityLevel,hf=dt.unstable_ImmediatePriority,Xm=dt.unstable_UserBlockingPriority,ea=dt.unstable_NormalPriority,gv=dt.unstable_LowPriority,qm=dt.unstable_IdlePriority,Na=null,Yt=null;function yv(e){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Na,e,void 0,(e.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:Sv,vv=Math.log,wv=Math.LN2;function Sv(e){return e>>>=0,e===0?32:31-(vv(e)/wv|0)|0}var ts=64,ns=4194304;function Ai(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ta(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Ai(a):(o&=s,o!==0&&(r=Ai(o)))}else s=n&~i,s!==0?r=Ai(s):o!==0&&(r=Ai(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-It(t),i=1<<n,r|=e[n],t&=~i;return r}function xv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-It(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=xv(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Ku(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jm(){var e=ts;return ts<<=1,!(ts&4194240)&&(ts=64),e}function Yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Do(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-It(t),e[t]=n}function Cv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-It(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function mf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-It(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function Zm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var e0,gf,t0,n0,r0,Xu=!1,rs=[],Rn=null,bn=null,In=null,oo=new Map,so=new Map,Cn=[],Ev="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function op(e,t){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":oo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(t.pointerId)}}function ki(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Bo(t),t!==null&&gf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function _v(e,t,n,r,i){switch(t){case"focusin":return Rn=ki(Rn,e,t,n,r,i),!0;case"dragenter":return bn=ki(bn,e,t,n,r,i),!0;case"mouseover":return In=ki(In,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return oo.set(o,ki(oo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,so.set(o,ki(so.get(o)||null,e,t,n,r,i)),!0}return!1}function i0(e){var t=tr(e.target);if(t!==null){var n=gr(t);if(n!==null){if(t=n.tag,t===13){if(t=Ym(n),t!==null){e.blockedOn=t,r0(e.priority,function(){t0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Hu=r,n.target.dispatchEvent(r),Hu=null}else return t=Bo(n),t!==null&&gf(t),e.blockedOn=n,!1;t.shift()}return!0}function sp(e,t,n){bs(e)&&n.delete(t)}function Tv(){Xu=!1,Rn!==null&&bs(Rn)&&(Rn=null),bn!==null&&bs(bn)&&(bn=null),In!==null&&bs(In)&&(In=null),oo.forEach(sp),so.forEach(sp)}function Ci(e,t){e.blockedOn===t&&(e.blockedOn=null,Xu||(Xu=!0,dt.unstable_scheduleCallback(dt.unstable_NormalPriority,Tv)))}function ao(e){function t(i){return Ci(i,e)}if(0<rs.length){Ci(rs[0],e);for(var n=1;n<rs.length;n++){var r=rs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rn!==null&&Ci(Rn,e),bn!==null&&Ci(bn,e),In!==null&&Ci(In,e),oo.forEach(t),so.forEach(t),n=0;n<Cn.length;n++)r=Cn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)i0(n),n.blockedOn===null&&Cn.shift()}var Ur=hn.ReactCurrentBatchConfig,na=!0;function Pv(e,t,n,r){var i=q,o=Ur.transition;Ur.transition=null;try{q=1,yf(e,t,n,r)}finally{q=i,Ur.transition=o}}function jv(e,t,n,r){var i=q,o=Ur.transition;Ur.transition=null;try{q=4,yf(e,t,n,r)}finally{q=i,Ur.transition=o}}function yf(e,t,n,r){if(na){var i=qu(e,t,n,r);if(i===null)nu(e,t,r,ra,n),op(e,r);else if(_v(i,e,t,n,r))r.stopPropagation();else if(op(e,r),t&4&&-1<Ev.indexOf(e)){for(;i!==null;){var o=Bo(i);if(o!==null&&e0(o),o=qu(e,t,n,r),o===null&&nu(e,t,r,ra,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else nu(e,t,r,null,n)}}var ra=null;function qu(e,t,n,r){if(ra=null,e=pf(r),e=tr(e),e!==null)if(t=gr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ym(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ra=e,null}function o0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mv()){case hf:return 1;case Xm:return 4;case ea:case gv:return 16;case qm:return 536870912;default:return 16}default:return 16}}var _n=null,vf=null,Is=null;function s0(){if(Is)return Is;var e,t=vf,n=t.length,r,i="value"in _n?_n.value:_n.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Is=i.slice(e,1<r?1-r:void 0)}function zs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function is(){return!0}function ap(){return!1}function ht(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?is:ap,this.isPropagationStopped=ap,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=is)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=is)},persist:function(){},isPersistent:is}),t}var pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wf=ht(pi),Fo=ce({},pi,{view:0,detail:0}),Ov=ht(Fo),Ql,Gl,Ei,Ma=ce({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ei&&(Ei&&e.type==="mousemove"?(Ql=e.screenX-Ei.screenX,Gl=e.screenY-Ei.screenY):Gl=Ql=0,Ei=e),Ql)},movementY:function(e){return"movementY"in e?e.movementY:Gl}}),lp=ht(Ma),Rv=ce({},Ma,{dataTransfer:0}),bv=ht(Rv),Iv=ce({},Fo,{relatedTarget:0}),Kl=ht(Iv),zv=ce({},pi,{animationName:0,elapsedTime:0,pseudoElement:0}),$v=ht(zv),Nv=ce({},pi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mv=ht(Nv),Av=ce({},pi,{data:0}),up=ht(Av),Lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fv[e])?!!t[e]:!1}function Sf(){return Bv}var Uv=ce({},Fo,{key:function(e){if(e.key){var t=Lv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sf,charCode:function(e){return e.type==="keypress"?zs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vv=ht(Uv),Wv=ce({},Ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cp=ht(Wv),Hv=ce({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sf}),Yv=ht(Hv),Qv=ce({},pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gv=ht(Qv),Kv=ce({},Ma,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xv=ht(Kv),qv=[9,13,27,32],xf=cn&&"CompositionEvent"in window,Wi=null;cn&&"documentMode"in document&&(Wi=document.documentMode);var Jv=cn&&"TextEvent"in window&&!Wi,a0=cn&&(!xf||Wi&&8<Wi&&11>=Wi),fp=" ",dp=!1;function l0(e,t){switch(e){case"keyup":return qv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function u0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function Zv(e,t){switch(e){case"compositionend":return u0(t);case"keypress":return t.which!==32?null:(dp=!0,fp);case"textInput":return e=t.data,e===fp&&dp?null:e;default:return null}}function ew(e,t){if(Tr)return e==="compositionend"||!xf&&l0(e,t)?(e=s0(),Is=vf=_n=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return a0&&t.locale!=="ko"?null:t.data;default:return null}}var tw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tw[e.type]:t==="textarea"}function c0(e,t,n,r){Bm(r),t=ia(t,"onChange"),0<t.length&&(n=new wf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hi=null,lo=null;function nw(e){x0(e,0)}function Aa(e){var t=Or(e);if($m(t))return e}function rw(e,t){if(e==="change")return t}var f0=!1;if(cn){var Xl;if(cn){var ql="oninput"in document;if(!ql){var hp=document.createElement("div");hp.setAttribute("oninput","return;"),ql=typeof hp.oninput=="function"}Xl=ql}else Xl=!1;f0=Xl&&(!document.documentMode||9<document.documentMode)}function mp(){Hi&&(Hi.detachEvent("onpropertychange",d0),lo=Hi=null)}function d0(e){if(e.propertyName==="value"&&Aa(lo)){var t=[];c0(t,lo,e,pf(e)),Hm(nw,t)}}function iw(e,t,n){e==="focusin"?(mp(),Hi=t,lo=n,Hi.attachEvent("onpropertychange",d0)):e==="focusout"&&mp()}function ow(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Aa(lo)}function sw(e,t){if(e==="click")return Aa(t)}function aw(e,t){if(e==="input"||e==="change")return Aa(t)}function lw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:lw;function uo(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zu.call(t,i)||!Nt(e[i],t[i]))return!1}return!0}function gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yp(e,t){var n=gp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gp(n)}}function p0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?p0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function h0(){for(var e=window,t=qs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qs(e.document)}return t}function kf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function uw(e){var t=h0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&p0(n.ownerDocument.documentElement,n)){if(r!==null&&kf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=yp(n,o);var s=yp(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cw=cn&&"documentMode"in document&&11>=document.documentMode,Pr=null,Ju=null,Yi=null,Zu=!1;function vp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zu||Pr==null||Pr!==qs(r)||(r=Pr,"selectionStart"in r&&kf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yi&&uo(Yi,r)||(Yi=r,r=ia(Ju,"onSelect"),0<r.length&&(t=new wf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pr)))}function os(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jr={animationend:os("Animation","AnimationEnd"),animationiteration:os("Animation","AnimationIteration"),animationstart:os("Animation","AnimationStart"),transitionend:os("Transition","TransitionEnd")},Jl={},m0={};cn&&(m0=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function La(e){if(Jl[e])return Jl[e];if(!jr[e])return e;var t=jr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in m0)return Jl[e]=t[n];return e}var g0=La("animationend"),y0=La("animationiteration"),v0=La("animationstart"),w0=La("transitionend"),S0=new Map,wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(e,t){S0.set(e,t),mr(t,[e])}for(var Zl=0;Zl<wp.length;Zl++){var eu=wp[Zl],fw=eu.toLowerCase(),dw=eu[0].toUpperCase()+eu.slice(1);Vn(fw,"on"+dw)}Vn(g0,"onAnimationEnd");Vn(y0,"onAnimationIteration");Vn(v0,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(w0,"onTransitionEnd");qr("onMouseEnter",["mouseout","mouseover"]);qr("onMouseLeave",["mouseout","mouseover"]);qr("onPointerEnter",["pointerout","pointerover"]);qr("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Li));function Sp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,fv(r,t,void 0,e),e.currentTarget=null}function x0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Sp(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Sp(i,a,u),o=l}}}if(Zs)throw e=Gu,Zs=!1,Gu=null,e}function te(e,t){var n=t[ic];n===void 0&&(n=t[ic]=new Set);var r=e+"__bubble";n.has(r)||(k0(t,e,2,!1),n.add(r))}function tu(e,t,n){var r=0;t&&(r|=4),k0(n,e,r,t)}var ss="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[ss]){e[ss]=!0,Om.forEach(function(n){n!=="selectionchange"&&(pw.has(n)||tu(n,!1,e),tu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ss]||(t[ss]=!0,tu("selectionchange",!1,t))}}function k0(e,t,n,r){switch(o0(t)){case 1:var i=Pv;break;case 4:i=jv;break;default:i=yf}n=i.bind(null,t,n,e),i=void 0,!Qu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function nu(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=tr(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Hm(function(){var u=o,f=pf(n),c=[];e:{var p=S0.get(e);if(p!==void 0){var w=wf,y=e;switch(e){case"keypress":if(zs(n)===0)break e;case"keydown":case"keyup":w=Vv;break;case"focusin":y="focus",w=Kl;break;case"focusout":y="blur",w=Kl;break;case"beforeblur":case"afterblur":w=Kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Yv;break;case g0:case y0:case v0:w=$v;break;case w0:w=Gv;break;case"scroll":w=Ov;break;case"wheel":w=Xv;break;case"copy":case"cut":case"paste":w=Mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=cp}var v=(t&4)!==0,x=!v&&e==="scroll",h=v?p!==null?p+"Capture":null:p;v=[];for(var d=u,m;d!==null;){m=d;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,h!==null&&(S=io(d,h),S!=null&&v.push(fo(d,S,m)))),x)break;d=d.return}0<v.length&&(p=new w(p,y,null,n,f),c.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==Hu&&(y=n.relatedTarget||n.fromElement)&&(tr(y)||y[fn]))break e;if((w||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=u,y=y?tr(y):null,y!==null&&(x=gr(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(v=lp,S="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=cp,S="onPointerLeave",h="onPointerEnter",d="pointer"),x=w==null?p:Or(w),m=y==null?p:Or(y),p=new v(S,d+"leave",w,n,f),p.target=x,p.relatedTarget=m,S=null,tr(f)===u&&(v=new v(h,d+"enter",y,n,f),v.target=m,v.relatedTarget=x,S=v),x=S,w&&y)t:{for(v=w,h=y,d=0,m=v;m;m=wr(m))d++;for(m=0,S=h;S;S=wr(S))m++;for(;0<d-m;)v=wr(v),d--;for(;0<m-d;)h=wr(h),m--;for(;d--;){if(v===h||h!==null&&v===h.alternate)break t;v=wr(v),h=wr(h)}v=null}else v=null;w!==null&&xp(c,p,w,v,!1),y!==null&&x!==null&&xp(c,x,y,v,!0)}}e:{if(p=u?Or(u):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var C=rw;else if(pp(p))if(f0)C=aw;else{C=ow;var _=iw}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=sw);if(C&&(C=C(e,u))){c0(c,C,n,f);break e}_&&_(e,p,u),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&Fu(p,"number",p.value)}switch(_=u?Or(u):window,e){case"focusin":(pp(_)||_.contentEditable==="true")&&(Pr=_,Ju=u,Yi=null);break;case"focusout":Yi=Ju=Pr=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,vp(c,n,f);break;case"selectionchange":if(cw)break;case"keydown":case"keyup":vp(c,n,f)}var k;if(xf)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Tr?l0(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(a0&&n.locale!=="ko"&&(Tr||R!=="onCompositionStart"?R==="onCompositionEnd"&&Tr&&(k=s0()):(_n=f,vf="value"in _n?_n.value:_n.textContent,Tr=!0)),_=ia(u,R),0<_.length&&(R=new up(R,e,null,n,f),c.push({event:R,listeners:_}),k?R.data=k:(k=u0(n),k!==null&&(R.data=k)))),(k=Jv?Zv(e,n):ew(e,n))&&(u=ia(u,"onBeforeInput"),0<u.length&&(f=new up("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=k))}x0(c,t)})}function fo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ia(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=io(e,n),o!=null&&r.unshift(fo(e,o,i)),o=io(e,t),o!=null&&r.push(fo(e,o,i))),e=e.return}return r}function wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xp(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=io(n,o),l!=null&&s.unshift(fo(n,l,a))):i||(l=io(n,o),l!=null&&s.push(fo(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var hw=/\r\n?/g,mw=/\u0000|\uFFFD/g;function kp(e){return(typeof e=="string"?e:""+e).replace(hw,`
`).replace(mw,"")}function as(e,t,n){if(t=kp(t),kp(e)!==t&&n)throw Error(P(425))}function oa(){}var ec=null,tc=null;function nc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rc=typeof setTimeout=="function"?setTimeout:void 0,gw=typeof clearTimeout=="function"?clearTimeout:void 0,Cp=typeof Promise=="function"?Promise:void 0,yw=typeof queueMicrotask=="function"?queueMicrotask:typeof Cp<"u"?function(e){return Cp.resolve(null).then(e).catch(vw)}:rc;function vw(e){setTimeout(function(){throw e})}function ru(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ao(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ao(t)}function zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ep(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hi=Math.random().toString(36).slice(2),Ht="__reactFiber$"+hi,po="__reactProps$"+hi,fn="__reactContainer$"+hi,ic="__reactEvents$"+hi,ww="__reactListeners$"+hi,Sw="__reactHandles$"+hi;function tr(e){var t=e[Ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fn]||n[Ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ep(e);e!==null;){if(n=e[Ht])return n;e=Ep(e)}return t}e=n,n=e.parentNode}return null}function Bo(e){return e=e[Ht]||e[fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Da(e){return e[po]||null}var oc=[],Rr=-1;function Wn(e){return{current:e}}function re(e){0>Rr||(e.current=oc[Rr],oc[Rr]=null,Rr--)}function ee(e,t){Rr++,oc[Rr]=e.current,e.current=t}var Un={},Ve=Wn(Un),tt=Wn(!1),ur=Un;function Jr(e,t){var n=e.type.contextTypes;if(!n)return Un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function nt(e){return e=e.childContextTypes,e!=null}function sa(){re(tt),re(Ve)}function _p(e,t,n){if(Ve.current!==Un)throw Error(P(168));ee(Ve,t),ee(tt,n)}function C0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,iv(e)||"Unknown",i));return ce({},n,r)}function aa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Un,ur=Ve.current,ee(Ve,e),ee(tt,tt.current),!0}function Tp(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=C0(e,t,ur),r.__reactInternalMemoizedMergedChildContext=e,re(tt),re(Ve),ee(Ve,e)):re(tt),ee(tt,n)}var on=null,Fa=!1,iu=!1;function E0(e){on===null?on=[e]:on.push(e)}function xw(e){Fa=!0,E0(e)}function Hn(){if(!iu&&on!==null){iu=!0;var e=0,t=q;try{var n=on;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}on=null,Fa=!1}catch(i){throw on!==null&&(on=on.slice(e+1)),Km(hf,Hn),i}finally{q=t,iu=!1}}return null}var br=[],Ir=0,la=null,ua=0,gt=[],yt=0,cr=null,sn=1,an="";function Zn(e,t){br[Ir++]=ua,br[Ir++]=la,la=e,ua=t}function _0(e,t,n){gt[yt++]=sn,gt[yt++]=an,gt[yt++]=cr,cr=e;var r=sn;e=an;var i=32-It(r)-1;r&=~(1<<i),n+=1;var o=32-It(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,sn=1<<32-It(t)+i|n<<i|r,an=o+e}else sn=1<<o|n<<i|r,an=e}function Cf(e){e.return!==null&&(Zn(e,1),_0(e,1,0))}function Ef(e){for(;e===la;)la=br[--Ir],br[Ir]=null,ua=br[--Ir],br[Ir]=null;for(;e===cr;)cr=gt[--yt],gt[yt]=null,an=gt[--yt],gt[yt]=null,sn=gt[--yt],gt[yt]=null}var ut=null,lt=null,oe=!1,Ot=null;function T0(e,t){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,lt=zn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cr!==null?{id:sn,overflow:an}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ut=e,lt=null,!0):!1;default:return!1}}function sc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ac(e){if(oe){var t=lt;if(t){var n=t;if(!Pp(e,t)){if(sc(e))throw Error(P(418));t=zn(n.nextSibling);var r=ut;t&&Pp(e,t)?T0(r,n):(e.flags=e.flags&-4097|2,oe=!1,ut=e)}}else{if(sc(e))throw Error(P(418));e.flags=e.flags&-4097|2,oe=!1,ut=e}}}function jp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function ls(e){if(e!==ut)return!1;if(!oe)return jp(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!nc(e.type,e.memoizedProps)),t&&(t=lt)){if(sc(e))throw P0(),Error(P(418));for(;t;)T0(e,t),t=zn(t.nextSibling)}if(jp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=zn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=ut?zn(e.stateNode.nextSibling):null;return!0}function P0(){for(var e=lt;e;)e=zn(e.nextSibling)}function Zr(){lt=ut=null,oe=!1}function _f(e){Ot===null?Ot=[e]:Ot.push(e)}var kw=hn.ReactCurrentBatchConfig;function Pt(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ca=Wn(null),fa=null,zr=null,Tf=null;function Pf(){Tf=zr=fa=null}function jf(e){var t=ca.current;re(ca),e._currentValue=t}function lc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Vr(e,t){fa=e,Tf=zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(et=!0),e.firstContext=null)}function kt(e){var t=e._currentValue;if(Tf!==e)if(e={context:e,memoizedValue:t,next:null},zr===null){if(fa===null)throw Error(P(308));zr=e,fa.dependencies={lanes:0,firstContext:e}}else zr=zr.next=e;return t}var nr=null;function Of(e){nr===null?nr=[e]:nr.push(e)}function j0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Of(t)):(n.next=i.next,i.next=n),t.interleaved=n,dn(e,r)}function dn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var kn=!1;function Rf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function O0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ln(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $n(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,dn(e,n)}return i=r.interleaved,i===null?(t.next=t,Of(r)):(t.next=i.next,i.next=t),r.interleaved=t,dn(e,n)}function $s(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mf(e,n)}}function Op(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function da(e,t,n,r){var i=e.updateQueue;kn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var c=i.baseState;s=0,f=u=l=null,a=o;do{var p=a.lane,w=a.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(p=t,w=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){c=y.call(w,c,p);break e}c=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,p=typeof y=="function"?y.call(w,c,p):y,p==null)break e;c=ce({},c,p);break e;case 2:kn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else w={eventTime:w,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=w,l=c):f=f.next=w,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(f===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);dr|=s,e.lanes=s,e.memoizedState=c}}function Rp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var R0=new jm.Component().refs;function uc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ba={isMounted:function(e){return(e=e._reactInternals)?gr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),i=Mn(e),o=ln(r,i);o.payload=t,n!=null&&(o.callback=n),t=$n(e,o,i),t!==null&&(zt(t,e,i,r),$s(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),i=Mn(e),o=ln(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=$n(e,o,i),t!==null&&(zt(t,e,i,r),$s(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=Mn(e),i=ln(n,r);i.tag=2,t!=null&&(i.callback=t),t=$n(e,i,r),t!==null&&(zt(t,e,r,n),$s(t,e,r))}};function bp(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!uo(n,r)||!uo(i,o):!0}function b0(e,t,n){var r=!1,i=Un,o=t.contextType;return typeof o=="object"&&o!==null?o=kt(o):(i=nt(t)?ur:Ve.current,r=t.contextTypes,o=(r=r!=null)?Jr(e,i):Un),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ba,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ip(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ba.enqueueReplaceState(t,t.state,null)}function cc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=R0,Rf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=kt(o):(o=nt(t)?ur:Ve.current,i.context=Jr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(uc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ba.enqueueReplaceState(i,i.state,null),da(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function _i(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===R0&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function us(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zp(e){var t=e._init;return t(e._payload)}function I0(e){function t(h,d){if(e){var m=h.deletions;m===null?(h.deletions=[d],h.flags|=16):m.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=An(h,d),h.index=0,h.sibling=null,h}function o(h,d,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<d?(h.flags|=2,d):m):(h.flags|=2,d)):(h.flags|=1048576,d)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,d,m,S){return d===null||d.tag!==6?(d=fu(m,h.mode,S),d.return=h,d):(d=i(d,m),d.return=h,d)}function l(h,d,m,S){var C=m.type;return C===_r?f(h,d,m.props.children,S,m.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===xn&&zp(C)===d.type)?(S=i(d,m.props),S.ref=_i(h,d,m),S.return=h,S):(S=Fs(m.type,m.key,m.props,null,h.mode,S),S.ref=_i(h,d,m),S.return=h,S)}function u(h,d,m,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=du(m,h.mode,S),d.return=h,d):(d=i(d,m.children||[]),d.return=h,d)}function f(h,d,m,S,C){return d===null||d.tag!==7?(d=ar(m,h.mode,S,C),d.return=h,d):(d=i(d,m),d.return=h,d)}function c(h,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=fu(""+d,h.mode,m),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Jo:return m=Fs(d.type,d.key,d.props,null,h.mode,m),m.ref=_i(h,null,d),m.return=h,m;case Er:return d=du(d,h.mode,m),d.return=h,d;case xn:var S=d._init;return c(h,S(d._payload),m)}if(Mi(d)||Si(d))return d=ar(d,h.mode,m,null),d.return=h,d;us(h,d)}return null}function p(h,d,m,S){var C=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(h,d,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Jo:return m.key===C?l(h,d,m,S):null;case Er:return m.key===C?u(h,d,m,S):null;case xn:return C=m._init,p(h,d,C(m._payload),S)}if(Mi(m)||Si(m))return C!==null?null:f(h,d,m,S,null);us(h,m)}return null}function w(h,d,m,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(m)||null,a(d,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Jo:return h=h.get(S.key===null?m:S.key)||null,l(d,h,S,C);case Er:return h=h.get(S.key===null?m:S.key)||null,u(d,h,S,C);case xn:var _=S._init;return w(h,d,m,_(S._payload),C)}if(Mi(S)||Si(S))return h=h.get(m)||null,f(d,h,S,C,null);us(d,S)}return null}function y(h,d,m,S){for(var C=null,_=null,k=d,R=d=0,N=null;k!==null&&R<m.length;R++){k.index>R?(N=k,k=null):N=k.sibling;var $=p(h,k,m[R],S);if($===null){k===null&&(k=N);break}e&&k&&$.alternate===null&&t(h,k),d=o($,d,R),_===null?C=$:_.sibling=$,_=$,k=N}if(R===m.length)return n(h,k),oe&&Zn(h,R),C;if(k===null){for(;R<m.length;R++)k=c(h,m[R],S),k!==null&&(d=o(k,d,R),_===null?C=k:_.sibling=k,_=k);return oe&&Zn(h,R),C}for(k=r(h,k);R<m.length;R++)N=w(k,h,R,m[R],S),N!==null&&(e&&N.alternate!==null&&k.delete(N.key===null?R:N.key),d=o(N,d,R),_===null?C=N:_.sibling=N,_=N);return e&&k.forEach(function(K){return t(h,K)}),oe&&Zn(h,R),C}function v(h,d,m,S){var C=Si(m);if(typeof C!="function")throw Error(P(150));if(m=C.call(m),m==null)throw Error(P(151));for(var _=C=null,k=d,R=d=0,N=null,$=m.next();k!==null&&!$.done;R++,$=m.next()){k.index>R?(N=k,k=null):N=k.sibling;var K=p(h,k,$.value,S);if(K===null){k===null&&(k=N);break}e&&k&&K.alternate===null&&t(h,k),d=o(K,d,R),_===null?C=K:_.sibling=K,_=K,k=N}if($.done)return n(h,k),oe&&Zn(h,R),C;if(k===null){for(;!$.done;R++,$=m.next())$=c(h,$.value,S),$!==null&&(d=o($,d,R),_===null?C=$:_.sibling=$,_=$);return oe&&Zn(h,R),C}for(k=r(h,k);!$.done;R++,$=m.next())$=w(k,h,R,$.value,S),$!==null&&(e&&$.alternate!==null&&k.delete($.key===null?R:$.key),d=o($,d,R),_===null?C=$:_.sibling=$,_=$);return e&&k.forEach(function(Re){return t(h,Re)}),oe&&Zn(h,R),C}function x(h,d,m,S){if(typeof m=="object"&&m!==null&&m.type===_r&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Jo:e:{for(var C=m.key,_=d;_!==null;){if(_.key===C){if(C=m.type,C===_r){if(_.tag===7){n(h,_.sibling),d=i(_,m.props.children),d.return=h,h=d;break e}}else if(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===xn&&zp(C)===_.type){n(h,_.sibling),d=i(_,m.props),d.ref=_i(h,_,m),d.return=h,h=d;break e}n(h,_);break}else t(h,_);_=_.sibling}m.type===_r?(d=ar(m.props.children,h.mode,S,m.key),d.return=h,h=d):(S=Fs(m.type,m.key,m.props,null,h.mode,S),S.ref=_i(h,d,m),S.return=h,h=S)}return s(h);case Er:e:{for(_=m.key;d!==null;){if(d.key===_)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(h,d.sibling),d=i(d,m.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=du(m,h.mode,S),d.return=h,h=d}return s(h);case xn:return _=m._init,x(h,d,_(m._payload),S)}if(Mi(m))return y(h,d,m,S);if(Si(m))return v(h,d,m,S);us(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,m),d.return=h,h=d):(n(h,d),d=fu(m,h.mode,S),d.return=h,h=d),s(h)):n(h,d)}return x}var ei=I0(!0),z0=I0(!1),Uo={},Qt=Wn(Uo),ho=Wn(Uo),mo=Wn(Uo);function rr(e){if(e===Uo)throw Error(P(174));return e}function bf(e,t){switch(ee(mo,t),ee(ho,e),ee(Qt,Uo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Uu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Uu(t,e)}re(Qt),ee(Qt,t)}function ti(){re(Qt),re(ho),re(mo)}function $0(e){rr(mo.current);var t=rr(Qt.current),n=Uu(t,e.type);t!==n&&(ee(ho,e),ee(Qt,n))}function If(e){ho.current===e&&(re(Qt),re(ho))}var ae=Wn(0);function pa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ou=[];function zf(){for(var e=0;e<ou.length;e++)ou[e]._workInProgressVersionPrimary=null;ou.length=0}var Ns=hn.ReactCurrentDispatcher,su=hn.ReactCurrentBatchConfig,fr=0,ue=null,ke=null,Te=null,ha=!1,Qi=!1,go=0,Cw=0;function Ae(){throw Error(P(321))}function $f(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nt(e[n],t[n]))return!1;return!0}function Nf(e,t,n,r,i,o){if(fr=o,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ns.current=e===null||e.memoizedState===null?Pw:jw,e=n(r,i),Qi){o=0;do{if(Qi=!1,go=0,25<=o)throw Error(P(301));o+=1,Te=ke=null,t.updateQueue=null,Ns.current=Ow,e=n(r,i)}while(Qi)}if(Ns.current=ma,t=ke!==null&&ke.next!==null,fr=0,Te=ke=ue=null,ha=!1,t)throw Error(P(300));return e}function Mf(){var e=go!==0;return go=0,e}function Ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?ue.memoizedState=Te=e:Te=Te.next=e,Te}function Ct(){if(ke===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Te===null?ue.memoizedState:Te.next;if(t!==null)Te=t,ke=e;else{if(e===null)throw Error(P(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Te===null?ue.memoizedState=Te=e:Te=Te.next=e}return Te}function yo(e,t){return typeof t=="function"?t(e):t}function au(e){var t=Ct(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ke,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((fr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,s=r):l=l.next=c,ue.lanes|=f,dr|=f}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Nt(r,t.memoizedState)||(et=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ue.lanes|=o,dr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function lu(e){var t=Ct(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Nt(o,t.memoizedState)||(et=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function N0(){}function M0(e,t){var n=ue,r=Ct(),i=t(),o=!Nt(r.memoizedState,i);if(o&&(r.memoizedState=i,et=!0),r=r.queue,Af(D0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,vo(9,L0.bind(null,n,r,i,t),void 0,null),je===null)throw Error(P(349));fr&30||A0(n,t,i)}return i}function A0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function L0(e,t,n,r){t.value=n,t.getSnapshot=r,F0(t)&&B0(e)}function D0(e,t,n){return n(function(){F0(t)&&B0(e)})}function F0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nt(e,n)}catch{return!0}}function B0(e){var t=dn(e,1);t!==null&&zt(t,e,1,-1)}function $p(e){var t=Ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:e},t.queue=e,e=e.dispatch=Tw.bind(null,ue,e),[t.memoizedState,e]}function vo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function U0(){return Ct().memoizedState}function Ms(e,t,n,r){var i=Ft();ue.flags|=e,i.memoizedState=vo(1|t,n,void 0,r===void 0?null:r)}function Ua(e,t,n,r){var i=Ct();r=r===void 0?null:r;var o=void 0;if(ke!==null){var s=ke.memoizedState;if(o=s.destroy,r!==null&&$f(r,s.deps)){i.memoizedState=vo(t,n,o,r);return}}ue.flags|=e,i.memoizedState=vo(1|t,n,o,r)}function Np(e,t){return Ms(8390656,8,e,t)}function Af(e,t){return Ua(2048,8,e,t)}function V0(e,t){return Ua(4,2,e,t)}function W0(e,t){return Ua(4,4,e,t)}function H0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Y0(e,t,n){return n=n!=null?n.concat([e]):null,Ua(4,4,H0.bind(null,t,e),n)}function Lf(){}function Q0(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$f(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function G0(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$f(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function K0(e,t,n){return fr&21?(Nt(n,t)||(n=Jm(),ue.lanes|=n,dr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,et=!0),e.memoizedState=n)}function Ew(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=su.transition;su.transition={};try{e(!1),t()}finally{q=n,su.transition=r}}function X0(){return Ct().memoizedState}function _w(e,t,n){var r=Mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},q0(e))J0(t,n);else if(n=j0(e,t,n,r),n!==null){var i=Qe();zt(n,e,r,i),Z0(n,t,r)}}function Tw(e,t,n){var r=Mn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(q0(e))J0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Nt(a,s)){var l=t.interleaved;l===null?(i.next=i,Of(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=j0(e,t,i,r),n!==null&&(i=Qe(),zt(n,e,r,i),Z0(n,t,r))}}function q0(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function J0(e,t){Qi=ha=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Z0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mf(e,n)}}var ma={readContext:kt,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},Pw={readContext:kt,useCallback:function(e,t){return Ft().memoizedState=[e,t===void 0?null:t],e},useContext:kt,useEffect:Np,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ms(4194308,4,H0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ms(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ms(4,2,e,t)},useMemo:function(e,t){var n=Ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_w.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var t=Ft();return e={current:e},t.memoizedState=e},useState:$p,useDebugValue:Lf,useDeferredValue:function(e){return Ft().memoizedState=e},useTransition:function(){var e=$p(!1),t=e[0];return e=Ew.bind(null,e[1]),Ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ue,i=Ft();if(oe){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),je===null)throw Error(P(349));fr&30||A0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Np(D0.bind(null,r,o,e),[e]),r.flags|=2048,vo(9,L0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ft(),t=je.identifierPrefix;if(oe){var n=an,r=sn;n=(r&~(1<<32-It(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=go++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Cw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jw={readContext:kt,useCallback:Q0,useContext:kt,useEffect:Af,useImperativeHandle:Y0,useInsertionEffect:V0,useLayoutEffect:W0,useMemo:G0,useReducer:au,useRef:U0,useState:function(){return au(yo)},useDebugValue:Lf,useDeferredValue:function(e){var t=Ct();return K0(t,ke.memoizedState,e)},useTransition:function(){var e=au(yo)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:N0,useSyncExternalStore:M0,useId:X0,unstable_isNewReconciler:!1},Ow={readContext:kt,useCallback:Q0,useContext:kt,useEffect:Af,useImperativeHandle:Y0,useInsertionEffect:V0,useLayoutEffect:W0,useMemo:G0,useReducer:lu,useRef:U0,useState:function(){return lu(yo)},useDebugValue:Lf,useDeferredValue:function(e){var t=Ct();return ke===null?t.memoizedState=e:K0(t,ke.memoizedState,e)},useTransition:function(){var e=lu(yo)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:N0,useSyncExternalStore:M0,useId:X0,unstable_isNewReconciler:!1};function ni(e,t){try{var n="",r=t;do n+=rv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function uu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rw=typeof WeakMap=="function"?WeakMap:Map;function eg(e,t,n){n=ln(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ya||(ya=!0,xc=r),fc(e,t)},n}function tg(e,t,n){n=ln(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){fc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){fc(e,t),typeof r!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Mp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ww.bind(null,e,t,n),t.then(e,e))}function Ap(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ln(-1,1),t.tag=2,$n(n,t,1))),n.lanes|=1),e)}var bw=hn.ReactCurrentOwner,et=!1;function He(e,t,n,r){t.child=e===null?z0(t,null,n,r):ei(t,e.child,n,r)}function Dp(e,t,n,r,i){n=n.render;var o=t.ref;return Vr(t,i),r=Nf(e,t,n,r,o,i),n=Mf(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pn(e,t,i)):(oe&&n&&Cf(t),t.flags|=1,He(e,t,r,i),t.child)}function Fp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Yf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ng(e,t,o,r,i)):(e=Fs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(s,r)&&e.ref===t.ref)return pn(e,t,i)}return t.flags|=1,e=An(o,r),e.ref=t.ref,e.return=t,t.child=e}function ng(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(uo(o,r)&&e.ref===t.ref)if(et=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(et=!0);else return t.lanes=e.lanes,pn(e,t,i)}return dc(e,t,n,r,i)}function rg(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Nr,st),st|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Nr,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ee(Nr,st),st|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ee(Nr,st),st|=r;return He(e,t,i,n),t.child}function ig(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function dc(e,t,n,r,i){var o=nt(n)?ur:Ve.current;return o=Jr(t,o),Vr(t,i),n=Nf(e,t,n,r,o,i),r=Mf(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pn(e,t,i)):(oe&&r&&Cf(t),t.flags|=1,He(e,t,n,i),t.child)}function Bp(e,t,n,r,i){if(nt(n)){var o=!0;aa(t)}else o=!1;if(Vr(t,i),t.stateNode===null)As(e,t),b0(t,n,r),cc(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=kt(u):(u=nt(n)?ur:Ve.current,u=Jr(t,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ip(t,s,r,u),kn=!1;var p=t.memoizedState;s.state=p,da(t,r,s,i),l=t.memoizedState,a!==r||p!==l||tt.current||kn?(typeof f=="function"&&(uc(t,n,f,r),l=t.memoizedState),(a=kn||bp(t,n,a,r,p,l,u))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,O0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Pt(t.type,a),s.props=u,c=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=kt(l):(l=nt(n)?ur:Ve.current,l=Jr(t,l));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==c||p!==l)&&Ip(t,s,r,l),kn=!1,p=t.memoizedState,s.state=p,da(t,r,s,i);var y=t.memoizedState;a!==c||p!==y||tt.current||kn?(typeof w=="function"&&(uc(t,n,w,r),y=t.memoizedState),(u=kn||bp(t,n,u,r,p,y,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return pc(e,t,n,r,o,i)}function pc(e,t,n,r,i,o){ig(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Tp(t,n,!1),pn(e,t,o);r=t.stateNode,bw.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=ei(t,e.child,null,o),t.child=ei(t,null,a,o)):He(e,t,a,o),t.memoizedState=r.state,i&&Tp(t,n,!0),t.child}function og(e){var t=e.stateNode;t.pendingContext?_p(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_p(e,t.context,!1),bf(e,t.containerInfo)}function Up(e,t,n,r,i){return Zr(),_f(i),t.flags|=256,He(e,t,n,r),t.child}var hc={dehydrated:null,treeContext:null,retryLane:0};function mc(e){return{baseLanes:e,cachePool:null,transitions:null}}function sg(e,t,n){var r=t.pendingProps,i=ae.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(ae,i&1),e===null)return ac(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ha(s,r,0,null),e=ar(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=mc(n),t.memoizedState=hc,e):Df(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Iw(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=An(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=An(a,o):(o=ar(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?mc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=hc,r}return o=e.child,e=o.sibling,r=An(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Df(e,t){return t=Ha({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function cs(e,t,n,r){return r!==null&&_f(r),ei(t,e.child,null,n),e=Df(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Iw(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=uu(Error(P(422))),cs(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ha({mode:"visible",children:r.children},i,0,null),o=ar(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ei(t,e.child,null,s),t.child.memoizedState=mc(s),t.memoizedState=hc,o);if(!(t.mode&1))return cs(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(P(419)),r=uu(o,r,void 0),cs(e,t,s,r)}if(a=(s&e.childLanes)!==0,et||a){if(r=je,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,dn(e,i),zt(r,e,i,-1))}return Hf(),r=uu(Error(P(421))),cs(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Hw.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,lt=zn(i.nextSibling),ut=t,oe=!0,Ot=null,e!==null&&(gt[yt++]=sn,gt[yt++]=an,gt[yt++]=cr,sn=e.id,an=e.overflow,cr=t),t=Df(t,r.children),t.flags|=4096,t)}function Vp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),lc(e.return,t,n)}function cu(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function ag(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(He(e,t,r.children,n),r=ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vp(e,n,t);else if(e.tag===19)Vp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(ae,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&pa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),cu(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&pa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}cu(t,!0,n,null,o);break;case"together":cu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function As(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=An(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=An(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zw(e,t,n){switch(t.tag){case 3:og(t),Zr();break;case 5:$0(t);break;case 1:nt(t.type)&&aa(t);break;case 4:bf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(ca,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(ae,ae.current&1),t.flags|=128,null):n&t.child.childLanes?sg(e,t,n):(ee(ae,ae.current&1),e=pn(e,t,n),e!==null?e.sibling:null);ee(ae,ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ag(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,rg(e,t,n)}return pn(e,t,n)}var lg,gc,ug,cg;lg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gc=function(){};ug=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,rr(Qt.current);var o=null;switch(n){case"input":i=Lu(e,i),r=Lu(e,r),o=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),o=[];break;case"textarea":i=Bu(e,i),r=Bu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oa)}Vu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(no.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(no.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&te("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};cg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ti(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $w(e,t,n){var r=t.pendingProps;switch(Ef(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return nt(t.type)&&sa(),Le(t),null;case 3:return r=t.stateNode,ti(),re(tt),re(Ve),zf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ls(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ot!==null&&(Ec(Ot),Ot=null))),gc(e,t),Le(t),null;case 5:If(t);var i=rr(mo.current);if(n=t.type,e!==null&&t.stateNode!=null)ug(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Le(t),null}if(e=rr(Qt.current),ls(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ht]=t,r[po]=o,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Li.length;i++)te(Li[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Jd(r,o),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},te("invalid",r);break;case"textarea":ep(r,o),te("invalid",r)}Vu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&as(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&as(r.textContent,a,e),i=["children",""+a]):no.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&te("scroll",r)}switch(n){case"input":Zo(r),Zd(r,o,!0);break;case"textarea":Zo(r),tp(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=oa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Am(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ht]=t,e[po]=r,lg(e,t,!1,!1),t.stateNode=e;e:{switch(s=Wu(n,r),n){case"dialog":te("cancel",e),te("close",e),i=r;break;case"iframe":case"object":case"embed":te("load",e),i=r;break;case"video":case"audio":for(i=0;i<Li.length;i++)te(Li[i],e);i=r;break;case"source":te("error",e),i=r;break;case"img":case"image":case"link":te("error",e),te("load",e),i=r;break;case"details":te("toggle",e),i=r;break;case"input":Jd(e,r),i=Lu(e,r),te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),te("invalid",e);break;case"textarea":ep(e,r),i=Bu(e,r),te("invalid",e);break;default:i=r}Vu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Fm(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lm(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ro(e,l):typeof l=="number"&&ro(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(no.hasOwnProperty(o)?l!=null&&o==="onScroll"&&te("scroll",e):l!=null&&uf(e,o,l,s))}switch(n){case"input":Zo(e),Zd(e,r,!1);break;case"textarea":Zo(e),tp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Dr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Dr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=oa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)cg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=rr(mo.current),rr(Qt.current),ls(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ht]=t,(o=r.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:as(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&as(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ht]=t,t.stateNode=r}return Le(t),null;case 13:if(re(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&lt!==null&&t.mode&1&&!(t.flags&128))P0(),Zr(),t.flags|=98560,o=!1;else if(o=ls(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[Ht]=t}else Zr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Le(t),o=!1}else Ot!==null&&(Ec(Ot),Ot=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?Ce===0&&(Ce=3):Hf())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return ti(),gc(e,t),e===null&&co(t.stateNode.containerInfo),Le(t),null;case 10:return jf(t.type._context),Le(t),null;case 17:return nt(t.type)&&sa(),Le(t),null;case 19:if(re(ae),o=t.memoizedState,o===null)return Le(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Ti(o,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=pa(e),s!==null){for(t.flags|=128,Ti(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(ae,ae.current&1|2),t.child}e=e.sibling}o.tail!==null&&he()>ri&&(t.flags|=128,r=!0,Ti(o,!1),t.lanes=4194304)}else{if(!r)if(e=pa(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ti(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!oe)return Le(t),null}else 2*he()-o.renderingStartTime>ri&&n!==1073741824&&(t.flags|=128,r=!0,Ti(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=he(),t.sibling=null,n=ae.current,ee(ae,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return Wf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?st&1073741824&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Nw(e,t){switch(Ef(t),t.tag){case 1:return nt(t.type)&&sa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ti(),re(tt),re(Ve),zf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return If(t),null;case 13:if(re(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Zr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(ae),null;case 4:return ti(),null;case 10:return jf(t.type._context),null;case 22:case 23:return Wf(),null;case 24:return null;default:return null}}var fs=!1,Be=!1,Mw=typeof WeakSet=="function"?WeakSet:Set,b=null;function $r(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function yc(e,t,n){try{n()}catch(r){fe(e,t,r)}}var Wp=!1;function Aw(e,t){if(ec=na,e=h0(),kf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,c=e,p=null;t:for(;;){for(var w;c!==n||i!==0&&c.nodeType!==3||(a=s+i),c!==o||r!==0&&c.nodeType!==3||(l=s+r),c.nodeType===3&&(s+=c.nodeValue.length),(w=c.firstChild)!==null;)p=c,c=w;for(;;){if(c===e)break t;if(p===n&&++u===i&&(a=s),p===o&&++f===r&&(l=s),(w=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=w}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(tc={focusedElem:e,selectionRange:n},na=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,x=y.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:Pt(t.type,v),x);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(S){fe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return y=Wp,Wp=!1,y}function Gi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&yc(t,n,o)}i=i.next}while(i!==r)}}function Va(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function fg(e){var t=e.alternate;t!==null&&(e.alternate=null,fg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ht],delete t[po],delete t[ic],delete t[ww],delete t[Sw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dg(e){return e.tag===5||e.tag===3||e.tag===4}function Hp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oa));else if(r!==4&&(e=e.child,e!==null))for(wc(e,t,n),e=e.sibling;e!==null;)wc(e,t,n),e=e.sibling}function Sc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Sc(e,t,n),e=e.sibling;e!==null;)Sc(e,t,n),e=e.sibling}var ze=null,jt=!1;function gn(e,t,n){for(n=n.child;n!==null;)pg(e,t,n),n=n.sibling}function pg(e,t,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Na,n)}catch{}switch(n.tag){case 5:Be||$r(n,t);case 6:var r=ze,i=jt;ze=null,gn(e,t,n),ze=r,jt=i,ze!==null&&(jt?(e=ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(jt?(e=ze,n=n.stateNode,e.nodeType===8?ru(e.parentNode,n):e.nodeType===1&&ru(e,n),ao(e)):ru(ze,n.stateNode));break;case 4:r=ze,i=jt,ze=n.stateNode.containerInfo,jt=!0,gn(e,t,n),ze=r,jt=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&yc(n,t,s),i=i.next}while(i!==r)}gn(e,t,n);break;case 1:if(!Be&&($r(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,t,a)}gn(e,t,n);break;case 21:gn(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,gn(e,t,n),Be=r):gn(e,t,n);break;default:gn(e,t,n)}}function Yp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Mw),t.forEach(function(r){var i=Yw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ze=a.stateNode,jt=!1;break e;case 3:ze=a.stateNode.containerInfo,jt=!0;break e;case 4:ze=a.stateNode.containerInfo,jt=!0;break e}a=a.return}if(ze===null)throw Error(P(160));pg(o,s,i),ze=null,jt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){fe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hg(t,e),t=t.sibling}function hg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),Lt(e),r&4){try{Gi(3,e,e.return),Va(3,e)}catch(v){fe(e,e.return,v)}try{Gi(5,e,e.return)}catch(v){fe(e,e.return,v)}}break;case 1:Tt(t,e),Lt(e),r&512&&n!==null&&$r(n,n.return);break;case 5:if(Tt(t,e),Lt(e),r&512&&n!==null&&$r(n,n.return),e.flags&32){var i=e.stateNode;try{ro(i,"")}catch(v){fe(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Nm(i,o),Wu(a,s);var u=Wu(a,o);for(s=0;s<l.length;s+=2){var f=l[s],c=l[s+1];f==="style"?Fm(i,c):f==="dangerouslySetInnerHTML"?Lm(i,c):f==="children"?ro(i,c):uf(i,f,c,u)}switch(a){case"input":Du(i,o);break;case"textarea":Mm(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Dr(i,!!o.multiple,w,!1):p!==!!o.multiple&&(o.defaultValue!=null?Dr(i,!!o.multiple,o.defaultValue,!0):Dr(i,!!o.multiple,o.multiple?[]:"",!1))}i[po]=o}catch(v){fe(e,e.return,v)}}break;case 6:if(Tt(t,e),Lt(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){fe(e,e.return,v)}}break;case 3:if(Tt(t,e),Lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ao(t.containerInfo)}catch(v){fe(e,e.return,v)}break;case 4:Tt(t,e),Lt(e);break;case 13:Tt(t,e),Lt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Uf=he())),r&4&&Yp(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(u=Be)||f,Tt(t,e),Be=u):Tt(t,e),Lt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(b=e,f=e.child;f!==null;){for(c=b=f;b!==null;){switch(p=b,w=p.child,p.tag){case 0:case 11:case 14:case 15:Gi(4,p,p.return);break;case 1:$r(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){fe(r,n,v)}}break;case 5:$r(p,p.return);break;case 22:if(p.memoizedState!==null){Gp(c);continue}}w!==null?(w.return=p,b=w):Gp(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,l=c.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Dm("display",s))}catch(v){fe(e,e.return,v)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){fe(e,e.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Tt(t,e),Lt(e),r&4&&Yp(e);break;case 21:break;default:Tt(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(dg(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ro(i,""),r.flags&=-33);var o=Hp(e);Sc(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Hp(e);wc(e,a,s);break;default:throw Error(P(161))}}catch(l){fe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lw(e,t,n){b=e,mg(e)}function mg(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var i=b,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||fs;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Be;a=fs;var u=Be;if(fs=s,(Be=l)&&!u)for(b=i;b!==null;)s=b,l=s.child,s.tag===22&&s.memoizedState!==null?Kp(i):l!==null?(l.return=s,b=l):Kp(i);for(;o!==null;)b=o,mg(o),o=o.sibling;b=i,fs=a,Be=u}Qp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,b=o):Qp(e)}}function Qp(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||Va(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Rp(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Rp(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&ao(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Be||t.flags&512&&vc(t)}catch(p){fe(t,t.return,p)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function Gp(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function Kp(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Va(4,t)}catch(l){fe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){fe(t,i,l)}}var o=t.return;try{vc(t)}catch(l){fe(t,o,l)}break;case 5:var s=t.return;try{vc(t)}catch(l){fe(t,s,l)}}}catch(l){fe(t,t.return,l)}if(t===e){b=null;break}var a=t.sibling;if(a!==null){a.return=t.return,b=a;break}b=t.return}}var Dw=Math.ceil,ga=hn.ReactCurrentDispatcher,Ff=hn.ReactCurrentOwner,xt=hn.ReactCurrentBatchConfig,H=0,je=null,we=null,Ne=0,st=0,Nr=Wn(0),Ce=0,wo=null,dr=0,Wa=0,Bf=0,Ki=null,Ze=null,Uf=0,ri=1/0,tn=null,ya=!1,xc=null,Nn=null,ds=!1,Tn=null,va=0,Xi=0,kc=null,Ls=-1,Ds=0;function Qe(){return H&6?he():Ls!==-1?Ls:Ls=he()}function Mn(e){return e.mode&1?H&2&&Ne!==0?Ne&-Ne:kw.transition!==null?(Ds===0&&(Ds=Jm()),Ds):(e=q,e!==0||(e=window.event,e=e===void 0?16:o0(e.type)),e):1}function zt(e,t,n,r){if(50<Xi)throw Xi=0,kc=null,Error(P(185));Do(e,n,r),(!(H&2)||e!==je)&&(e===je&&(!(H&2)&&(Wa|=n),Ce===4&&En(e,Ne)),rt(e,r),n===1&&H===0&&!(t.mode&1)&&(ri=he()+500,Fa&&Hn()))}function rt(e,t){var n=e.callbackNode;kv(e,t);var r=ta(e,e===je?Ne:0);if(r===0)n!==null&&ip(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ip(n),t===1)e.tag===0?xw(Xp.bind(null,e)):E0(Xp.bind(null,e)),yw(function(){!(H&6)&&Hn()}),n=null;else{switch(Zm(r)){case 1:n=hf;break;case 4:n=Xm;break;case 16:n=ea;break;case 536870912:n=qm;break;default:n=ea}n=Cg(n,gg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gg(e,t){if(Ls=-1,Ds=0,H&6)throw Error(P(327));var n=e.callbackNode;if(Wr()&&e.callbackNode!==n)return null;var r=ta(e,e===je?Ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wa(e,r);else{t=r;var i=H;H|=2;var o=vg();(je!==e||Ne!==t)&&(tn=null,ri=he()+500,sr(e,t));do try{Uw();break}catch(a){yg(e,a)}while(!0);Pf(),ga.current=o,H=i,we!==null?t=0:(je=null,Ne=0,t=Ce)}if(t!==0){if(t===2&&(i=Ku(e),i!==0&&(r=i,t=Cc(e,i))),t===1)throw n=wo,sr(e,0),En(e,r),rt(e,he()),n;if(t===6)En(e,r);else{if(i=e.current.alternate,!(r&30)&&!Fw(i)&&(t=wa(e,r),t===2&&(o=Ku(e),o!==0&&(r=o,t=Cc(e,o))),t===1))throw n=wo,sr(e,0),En(e,r),rt(e,he()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:er(e,Ze,tn);break;case 3:if(En(e,r),(r&130023424)===r&&(t=Uf+500-he(),10<t)){if(ta(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=rc(er.bind(null,e,Ze,tn),t);break}er(e,Ze,tn);break;case 4:if(En(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-It(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Dw(r/1960))-r,10<r){e.timeoutHandle=rc(er.bind(null,e,Ze,tn),r);break}er(e,Ze,tn);break;case 5:er(e,Ze,tn);break;default:throw Error(P(329))}}}return rt(e,he()),e.callbackNode===n?gg.bind(null,e):null}function Cc(e,t){var n=Ki;return e.current.memoizedState.isDehydrated&&(sr(e,t).flags|=256),e=wa(e,t),e!==2&&(t=Ze,Ze=n,t!==null&&Ec(t)),e}function Ec(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function Fw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Nt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function En(e,t){for(t&=~Bf,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-It(t),r=1<<n;e[n]=-1,t&=~r}}function Xp(e){if(H&6)throw Error(P(327));Wr();var t=ta(e,0);if(!(t&1))return rt(e,he()),null;var n=wa(e,t);if(e.tag!==0&&n===2){var r=Ku(e);r!==0&&(t=r,n=Cc(e,r))}if(n===1)throw n=wo,sr(e,0),En(e,t),rt(e,he()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,er(e,Ze,tn),rt(e,he()),null}function Vf(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(ri=he()+500,Fa&&Hn())}}function pr(e){Tn!==null&&Tn.tag===0&&!(H&6)&&Wr();var t=H;H|=1;var n=xt.transition,r=q;try{if(xt.transition=null,q=1,e)return e()}finally{q=r,xt.transition=n,H=t,!(H&6)&&Hn()}}function Wf(){st=Nr.current,re(Nr)}function sr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gw(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(Ef(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sa();break;case 3:ti(),re(tt),re(Ve),zf();break;case 5:If(r);break;case 4:ti();break;case 13:re(ae);break;case 19:re(ae);break;case 10:jf(r.type._context);break;case 22:case 23:Wf()}n=n.return}if(je=e,we=e=An(e.current,null),Ne=st=t,Ce=0,wo=null,Bf=Wa=dr=0,Ze=Ki=null,nr!==null){for(t=0;t<nr.length;t++)if(n=nr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}nr=null}return e}function yg(e,t){do{var n=we;try{if(Pf(),Ns.current=ma,ha){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ha=!1}if(fr=0,Te=ke=ue=null,Qi=!1,go=0,Ff.current=null,n===null||n.return===null){Ce=1,wo=t,we=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Ne,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=Ap(s);if(w!==null){w.flags&=-257,Lp(w,s,a,o,t),w.mode&1&&Mp(o,u,t),t=w,l=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(l),t.updateQueue=v}else y.add(l);break e}else{if(!(t&1)){Mp(o,u,t),Hf();break e}l=Error(P(426))}}else if(oe&&a.mode&1){var x=Ap(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Lp(x,s,a,o,t),_f(ni(l,a));break e}}o=l=ni(l,a),Ce!==4&&(Ce=2),Ki===null?Ki=[o]:Ki.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=eg(o,l,t);Op(o,h);break e;case 1:a=l;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Nn===null||!Nn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=tg(o,a,t);Op(o,S);break e}}o=o.return}while(o!==null)}Sg(n)}catch(C){t=C,we===n&&n!==null&&(we=n=n.return);continue}break}while(!0)}function vg(){var e=ga.current;return ga.current=ma,e===null?ma:e}function Hf(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),je===null||!(dr&268435455)&&!(Wa&268435455)||En(je,Ne)}function wa(e,t){var n=H;H|=2;var r=vg();(je!==e||Ne!==t)&&(tn=null,sr(e,t));do try{Bw();break}catch(i){yg(e,i)}while(!0);if(Pf(),H=n,ga.current=r,we!==null)throw Error(P(261));return je=null,Ne=0,Ce}function Bw(){for(;we!==null;)wg(we)}function Uw(){for(;we!==null&&!pv();)wg(we)}function wg(e){var t=kg(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?Sg(e):we=t,Ff.current=null}function Sg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Nw(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,we=null;return}}else if(n=$w(n,t,st),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);Ce===0&&(Ce=5)}function er(e,t,n){var r=q,i=xt.transition;try{xt.transition=null,q=1,Vw(e,t,n,r)}finally{xt.transition=i,q=r}return null}function Vw(e,t,n,r){do Wr();while(Tn!==null);if(H&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Cv(e,o),e===je&&(we=je=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ds||(ds=!0,Cg(ea,function(){return Wr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=xt.transition,xt.transition=null;var s=q;q=1;var a=H;H|=4,Ff.current=null,Aw(e,n),hg(n,e),uw(tc),na=!!ec,tc=ec=null,e.current=n,Lw(n),hv(),H=a,q=s,xt.transition=o}else e.current=n;if(ds&&(ds=!1,Tn=e,va=i),o=e.pendingLanes,o===0&&(Nn=null),yv(n.stateNode),rt(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ya)throw ya=!1,e=xc,xc=null,e;return va&1&&e.tag!==0&&Wr(),o=e.pendingLanes,o&1?e===kc?Xi++:(Xi=0,kc=e):Xi=0,Hn(),null}function Wr(){if(Tn!==null){var e=Zm(va),t=xt.transition,n=q;try{if(xt.transition=null,q=16>e?16:e,Tn===null)var r=!1;else{if(e=Tn,Tn=null,va=0,H&6)throw Error(P(331));var i=H;for(H|=4,b=e.current;b!==null;){var o=b,s=o.child;if(b.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(b=u;b!==null;){var f=b;switch(f.tag){case 0:case 11:case 15:Gi(8,f,o)}var c=f.child;if(c!==null)c.return=f,b=c;else for(;b!==null;){f=b;var p=f.sibling,w=f.return;if(fg(f),f===u){b=null;break}if(p!==null){p.return=w,b=p;break}b=w}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}b=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,b=s;else e:for(;b!==null;){if(o=b,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Gi(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,b=h;break e}b=o.return}}var d=e.current;for(b=d;b!==null;){s=b;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,b=m;else e:for(s=d;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Va(9,a)}}catch(C){fe(a,a.return,C)}if(a===s){b=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,b=S;break e}b=a.return}}if(H=i,Hn(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Na,e)}catch{}r=!0}return r}finally{q=n,xt.transition=t}}return!1}function qp(e,t,n){t=ni(n,t),t=eg(e,t,1),e=$n(e,t,1),t=Qe(),e!==null&&(Do(e,1,t),rt(e,t))}function fe(e,t,n){if(e.tag===3)qp(e,e,n);else for(;t!==null;){if(t.tag===3){qp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nn===null||!Nn.has(r))){e=ni(n,e),e=tg(t,e,1),t=$n(t,e,1),e=Qe(),t!==null&&(Do(t,1,e),rt(t,e));break}}t=t.return}}function Ww(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Ne&n)===n&&(Ce===4||Ce===3&&(Ne&130023424)===Ne&&500>he()-Uf?sr(e,0):Bf|=n),rt(e,t)}function xg(e,t){t===0&&(e.mode&1?(t=ns,ns<<=1,!(ns&130023424)&&(ns=4194304)):t=1);var n=Qe();e=dn(e,t),e!==null&&(Do(e,t,n),rt(e,n))}function Hw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xg(e,n)}function Yw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),xg(e,n)}var kg;kg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return et=!1,zw(e,t,n);et=!!(e.flags&131072)}else et=!1,oe&&t.flags&1048576&&_0(t,ua,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;As(e,t),e=t.pendingProps;var i=Jr(t,Ve.current);Vr(t,n),i=Nf(null,t,r,e,i,n);var o=Mf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nt(r)?(o=!0,aa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rf(t),i.updater=Ba,t.stateNode=i,i._reactInternals=t,cc(t,r,e,n),t=pc(null,t,r,!0,o,n)):(t.tag=0,oe&&o&&Cf(t),He(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(As(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Gw(r),e=Pt(r,e),i){case 0:t=dc(null,t,r,e,n);break e;case 1:t=Bp(null,t,r,e,n);break e;case 11:t=Dp(null,t,r,e,n);break e;case 14:t=Fp(null,t,r,Pt(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),dc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),Bp(e,t,r,i,n);case 3:e:{if(og(t),e===null)throw Error(P(387));r=t.pendingProps,o=t.memoizedState,i=o.element,O0(e,t),da(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ni(Error(P(423)),t),t=Up(e,t,r,n,i);break e}else if(r!==i){i=ni(Error(P(424)),t),t=Up(e,t,r,n,i);break e}else for(lt=zn(t.stateNode.containerInfo.firstChild),ut=t,oe=!0,Ot=null,n=z0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zr(),r===i){t=pn(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return $0(t),e===null&&ac(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,nc(r,i)?s=null:o!==null&&nc(r,o)&&(t.flags|=32),ig(e,t),He(e,t,s,n),t.child;case 6:return e===null&&ac(t),null;case 13:return sg(e,t,n);case 4:return bf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ei(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),Dp(e,t,r,i,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,ee(ca,r._currentValue),r._currentValue=s,o!==null)if(Nt(o.value,s)){if(o.children===i.children&&!tt.current){t=pn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=ln(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),lc(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(P(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),lc(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}He(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Vr(t,n),i=kt(i),r=r(i),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,i=Pt(r,t.pendingProps),i=Pt(r.type,i),Fp(e,t,r,i,n);case 15:return ng(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),As(e,t),t.tag=1,nt(r)?(e=!0,aa(t)):e=!1,Vr(t,n),b0(t,r,i),cc(t,r,i,n),pc(null,t,r,!0,e,n);case 19:return ag(e,t,n);case 22:return rg(e,t,n)}throw Error(P(156,t.tag))};function Cg(e,t){return Km(e,t)}function Qw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,r){return new Qw(e,t,n,r)}function Yf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gw(e){if(typeof e=="function")return Yf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ff)return 11;if(e===df)return 14}return 2}function An(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fs(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Yf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case _r:return ar(n.children,i,o,t);case cf:s=8,i|=8;break;case $u:return e=St(12,n,t,i|2),e.elementType=$u,e.lanes=o,e;case Nu:return e=St(13,n,t,i),e.elementType=Nu,e.lanes=o,e;case Mu:return e=St(19,n,t,i),e.elementType=Mu,e.lanes=o,e;case Im:return Ha(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rm:s=10;break e;case bm:s=9;break e;case ff:s=11;break e;case df:s=14;break e;case xn:s=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=St(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ar(e,t,n,r){return e=St(7,e,r,t),e.lanes=n,e}function Ha(e,t,n,r){return e=St(22,e,r,t),e.elementType=Im,e.lanes=n,e.stateNode={isHidden:!1},e}function fu(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function du(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qf(e,t,n,r,i,o,s,a,l){return e=new Kw(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=St(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rf(o),e}function Xw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Eg(e){if(!e)return Un;e=e._reactInternals;e:{if(gr(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(nt(n))return C0(e,n,t)}return t}function _g(e,t,n,r,i,o,s,a,l){return e=Qf(n,r,!0,e,i,o,s,a,l),e.context=Eg(null),n=e.current,r=Qe(),i=Mn(n),o=ln(r,i),o.callback=t??null,$n(n,o,i),e.current.lanes=i,Do(e,i,r),rt(e,r),e}function Ya(e,t,n,r){var i=t.current,o=Qe(),s=Mn(i);return n=Eg(n),t.context===null?t.context=n:t.pendingContext=n,t=ln(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$n(i,t,s),e!==null&&(zt(e,i,s,o),$s(e,i,s)),s}function Sa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gf(e,t){Jp(e,t),(e=e.alternate)&&Jp(e,t)}function qw(){return null}var Tg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kf(e){this._internalRoot=e}Qa.prototype.render=Kf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Ya(e,t,null,null)};Qa.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pr(function(){Ya(null,e,null,null)}),t[fn]=null}};function Qa(e){this._internalRoot=e}Qa.prototype.unstable_scheduleHydration=function(e){if(e){var t=n0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cn.length&&t!==0&&t<Cn[n].priority;n++);Cn.splice(n,0,e),n===0&&i0(e)}};function Xf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zp(){}function Jw(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Sa(s);o.call(u)}}var s=_g(t,r,e,0,null,!1,!1,"",Zp);return e._reactRootContainer=s,e[fn]=s.current,co(e.nodeType===8?e.parentNode:e),pr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Sa(l);a.call(u)}}var l=Qf(e,0,!1,null,null,!1,!1,"",Zp);return e._reactRootContainer=l,e[fn]=l.current,co(e.nodeType===8?e.parentNode:e),pr(function(){Ya(t,l,n,r)}),l}function Ka(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Sa(s);a.call(l)}}Ya(t,s,e,i)}else s=Jw(n,t,e,i,r);return Sa(s)}e0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ai(t.pendingLanes);n!==0&&(mf(t,n|1),rt(t,he()),!(H&6)&&(ri=he()+500,Hn()))}break;case 13:pr(function(){var r=dn(e,1);if(r!==null){var i=Qe();zt(r,e,1,i)}}),Gf(e,1)}};gf=function(e){if(e.tag===13){var t=dn(e,134217728);if(t!==null){var n=Qe();zt(t,e,134217728,n)}Gf(e,134217728)}};t0=function(e){if(e.tag===13){var t=Mn(e),n=dn(e,t);if(n!==null){var r=Qe();zt(n,e,t,r)}Gf(e,t)}};n0=function(){return q};r0=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Yu=function(e,t,n){switch(t){case"input":if(Du(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Da(r);if(!i)throw Error(P(90));$m(r),Du(r,i)}}}break;case"textarea":Mm(e,n);break;case"select":t=n.value,t!=null&&Dr(e,!!n.multiple,t,!1)}};Vm=Vf;Wm=pr;var Zw={usingClientEntryPoint:!1,Events:[Bo,Or,Da,Bm,Um,Vf]},Pi={findFiberByHostInstance:tr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},eS={bundleType:Pi.bundleType,version:Pi.version,rendererPackageName:Pi.rendererPackageName,rendererConfig:Pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qm(e),e===null?null:e.stateNode},findFiberByHostInstance:Pi.findFiberByHostInstance||qw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ps=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ps.isDisabled&&ps.supportsFiber)try{Na=ps.inject(eS),Yt=ps}catch{}}pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zw;pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xf(t))throw Error(P(200));return Xw(e,t,null,n)};pt.createRoot=function(e,t){if(!Xf(e))throw Error(P(299));var n=!1,r="",i=Tg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Qf(e,1,!1,null,null,n,!1,r,i),e[fn]=t.current,co(e.nodeType===8?e.parentNode:e),new Kf(t)};pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Qm(t),e=e===null?null:e.stateNode,e};pt.flushSync=function(e){return pr(e)};pt.hydrate=function(e,t,n){if(!Ga(t))throw Error(P(200));return Ka(null,e,t,!0,n)};pt.hydrateRoot=function(e,t,n){if(!Xf(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Tg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=_g(t,null,e,1,n??null,i,!1,o,s),e[fn]=t.current,co(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Qa(t)};pt.render=function(e,t,n){if(!Ga(t))throw Error(P(200));return Ka(null,e,t,!1,n)};pt.unmountComponentAtNode=function(e){if(!Ga(e))throw Error(P(40));return e._reactRootContainer?(pr(function(){Ka(null,null,e,!1,function(){e._reactRootContainer=null,e[fn]=null})}),!0):!1};pt.unstable_batchedUpdates=Vf;pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ga(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Ka(e,t,n,!1,r)};pt.version="18.2.0-next-9e3b772b8-20220608";function Pg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pg)}catch(e){console.error(e)}}Pg(),_m.exports=pt;var jg=_m.exports,eh=jg;Iu.createRoot=eh.createRoot,Iu.hydrateRoot=eh.hydrateRoot;/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function So(){return So=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},So.apply(this,arguments)}var Pn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pn||(Pn={}));const th="popstate";function tS(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return _c("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:xa(i)}return rS(t,n,null,e)}function Se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Og(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function nS(){return Math.random().toString(36).substr(2,8)}function nh(e,t){return{usr:e.state,key:e.key,idx:t}}function _c(e,t,n,r){return n===void 0&&(n=null),So({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?mi(t):t,{state:n,key:t&&t.key||r||nS()})}function xa(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function mi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function rS(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Pn.Pop,l=null,u=f();u==null&&(u=0,s.replaceState(So({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function c(){a=Pn.Pop;let x=f(),h=x==null?null:x-u;u=x,l&&l({action:a,location:v.location,delta:h})}function p(x,h){a=Pn.Push;let d=_c(v.location,x,h);n&&n(d,x),u=f()+1;let m=nh(d,u),S=v.createHref(d);try{s.pushState(m,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(S)}o&&l&&l({action:a,location:v.location,delta:1})}function w(x,h){a=Pn.Replace;let d=_c(v.location,x,h);n&&n(d,x),u=f();let m=nh(d,u),S=v.createHref(d);s.replaceState(m,"",S),o&&l&&l({action:a,location:v.location,delta:0})}function y(x){let h=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof x=="string"?x:xa(x);return d=d.replace(/ $/,"%20"),Se(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let v={get action(){return a},get location(){return e(i,s)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(th,c),l=x,()=>{i.removeEventListener(th,c),l=null}},createHref(x){return t(i,x)},createURL:y,encodeLocation(x){let h=y(x);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:w,go(x){return s.go(x)}};return v}var rh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(rh||(rh={}));function iS(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?mi(t):t,i=qf(r.pathname||"/",n);if(i==null)return null;let o=Rg(e);oS(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let l=yS(i);s=hS(o[a],l)}return s}function Rg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ln([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(Se(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Rg(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:dS(u,o.index),routesMeta:f})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of bg(o.path))i(o,s,l)}),t}function bg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=bg(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function oS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:pS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const sS=/^:[\w-]+$/,aS=3,lS=2,uS=1,cS=10,fS=-2,ih=e=>e==="*";function dS(e,t){let n=e.split("/"),r=n.length;return n.some(ih)&&(r+=fS),t&&(r+=lS),n.filter(i=>!ih(i)).reduce((i,o)=>i+(sS.test(o)?aS:o===""?uS:cS),r)}function pS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function hS(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=mS({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let c=a.route;o.push({params:r,pathname:Ln([i,f.pathname]),pathnameBase:xS(Ln([i,f.pathnameBase])),route:c}),f.pathnameBase!=="/"&&(i=Ln([i,f.pathnameBase]))}return o}function mS(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=gS(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,c)=>{let{paramName:p,isOptional:w}=f;if(p==="*"){let v=a[c]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[c];return w&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function gS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Og(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function yS(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Og(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function qf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function vS(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?mi(e):e;return{pathname:n?n.startsWith("/")?n:wS(n,t):t,search:kS(r),hash:CS(i)}}function wS(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function pu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function SS(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ig(e,t){let n=SS(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function zg(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=mi(e):(i=So({},e),Se(!i.pathname||!i.pathname.includes("?"),pu("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),pu("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),pu("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let c=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),c-=1;i.pathname=p.join("/")}a=c>=0?t[c]:"/"}let l=vS(i,a),u=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const Ln=e=>e.join("/").replace(/\/\/+/g,"/"),xS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),kS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,CS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ES(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const $g=["post","put","patch","delete"];new Set($g);const _S=["get",...$g];new Set(_S);/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xo(){return xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xo.apply(this,arguments)}const Jf=E.createContext(null),TS=E.createContext(null),yr=E.createContext(null),Xa=E.createContext(null),vr=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Ng=E.createContext(null);function PS(e,t){let{relative:n}=t===void 0?{}:t;Vo()||Se(!1);let{basename:r,navigator:i}=E.useContext(yr),{hash:o,pathname:s,search:a}=Ag(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Ln([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Vo(){return E.useContext(Xa)!=null}function qa(){return Vo()||Se(!1),E.useContext(Xa).location}function Mg(e){E.useContext(yr).static||E.useLayoutEffect(e)}function jS(){let{isDataRoute:e}=E.useContext(vr);return e?BS():OS()}function OS(){Vo()||Se(!1);let e=E.useContext(Jf),{basename:t,future:n,navigator:r}=E.useContext(yr),{matches:i}=E.useContext(vr),{pathname:o}=qa(),s=JSON.stringify(Ig(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return Mg(()=>{a.current=!0}),E.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=zg(u,JSON.parse(s),o,f.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Ln([t,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[t,r,s,o,e])}function Ag(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(yr),{matches:i}=E.useContext(vr),{pathname:o}=qa(),s=JSON.stringify(Ig(i,r.v7_relativeSplatPath));return E.useMemo(()=>zg(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function RS(e,t){return bS(e,t)}function bS(e,t,n,r){Vo()||Se(!1);let{navigator:i}=E.useContext(yr),{matches:o}=E.useContext(vr),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=qa(),f;if(t){var c;let x=typeof t=="string"?mi(t):t;l==="/"||(c=x.pathname)!=null&&c.startsWith(l)||Se(!1),f=x}else f=u;let p=f.pathname||"/",w=p;if(l!=="/"){let x=l.replace(/^\//,"").split("/");w="/"+p.replace(/^\//,"").split("/").slice(x.length).join("/")}let y=iS(e,{pathname:w}),v=MS(y&&y.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:Ln([l,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Ln([l,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,n,r);return t&&v?E.createElement(Xa.Provider,{value:{location:xo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Pn.Pop}},v):v}function IS(){let e=FS(),t=ES(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,null)}const zS=E.createElement(IS,null);class $S extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(vr.Provider,{value:this.props.routeContext},E.createElement(Ng.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function NS(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(Jf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(vr.Provider,{value:t},r)}function MS(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=s.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));f>=0||Se(!1),s=s.slice(0,Math.min(s.length,f+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let c=s[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.id){let{loaderData:p,errors:w}=n,y=c.route.loader&&p[c.route.id]===void 0&&(!w||w[c.route.id]===void 0);if(c.route.lazy||y){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((f,c,p)=>{let w,y=!1,v=null,x=null;n&&(w=a&&c.route.id?a[c.route.id]:void 0,v=c.route.errorElement||zS,l&&(u<0&&p===0?(US("route-fallback",!1),y=!0,x=null):u===p&&(y=!0,x=c.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,p+1)),d=()=>{let m;return w?m=v:y?m=x:c.route.Component?m=E.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=f,E.createElement(NS,{match:c,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||p===0)?E.createElement($S,{location:n.location,revalidation:n.revalidation,component:v,error:w,children:d(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):d()},null)}var Lg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Lg||{}),ka=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ka||{});function AS(e){let t=E.useContext(Jf);return t||Se(!1),t}function LS(e){let t=E.useContext(TS);return t||Se(!1),t}function DS(e){let t=E.useContext(vr);return t||Se(!1),t}function Dg(e){let t=DS(),n=t.matches[t.matches.length-1];return n.route.id||Se(!1),n.route.id}function FS(){var e;let t=E.useContext(Ng),n=LS(ka.UseRouteError),r=Dg(ka.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function BS(){let{router:e}=AS(Lg.UseNavigateStable),t=Dg(ka.UseNavigateStable),n=E.useRef(!1);return Mg(()=>{n.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,xo({fromRouteId:t},o)))},[e,t])}const oh={};function US(e,t,n){!t&&!oh[e]&&(oh[e]=!0)}function Fg(e){Se(!1)}function VS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Pn.Pop,navigator:o,static:s=!1,future:a}=e;Vo()&&Se(!1);let l=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:l,navigator:o,static:s,future:xo({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=mi(r));let{pathname:f="/",search:c="",hash:p="",state:w=null,key:y="default"}=r,v=E.useMemo(()=>{let x=qf(f,l);return x==null?null:{location:{pathname:x,search:c,hash:p,state:w,key:y},navigationType:i}},[l,f,c,p,w,y,i]);return v==null?null:E.createElement(yr.Provider,{value:u},E.createElement(Xa.Provider,{children:n,value:v}))}function WS(e){let{children:t,location:n}=e;return RS(Tc(t),n)}new Promise(()=>{});function Tc(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let o=[...t,i];if(r.type===E.Fragment){n.push.apply(n,Tc(r.props.children,o));return}r.type!==Fg&&Se(!1),!r.props.index||!r.props.children||Se(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Tc(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pc(){return Pc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pc.apply(this,arguments)}function HS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function YS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function QS(e,t){return e.button===0&&(!t||t==="_self")&&!YS(e)}const GS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],KS="6";try{window.__reactRouterVersion=KS}catch{}const XS="startTransition",sh=bu[XS];function qS(e){let{basename:t,children:n,future:r,window:i}=e,o=E.useRef();o.current==null&&(o.current=tS({window:i,v5Compat:!0}));let s=o.current,[a,l]=E.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},f=E.useCallback(c=>{u&&sh?sh(()=>l(c)):l(c)},[l,u]);return E.useLayoutEffect(()=>s.listen(f),[s,f]),E.createElement(VS,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const JS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bg=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:f,unstable_viewTransition:c}=t,p=HS(t,GS),{basename:w}=E.useContext(yr),y,v=!1;if(typeof u=="string"&&ZS.test(u)&&(y=u,JS))try{let m=new URL(window.location.href),S=u.startsWith("//")?new URL(m.protocol+u):new URL(u),C=qf(S.pathname,w);S.origin===m.origin&&C!=null?u=C+S.search+S.hash:v=!0}catch{}let x=PS(u,{relative:i}),h=ex(u,{replace:s,state:a,target:l,preventScrollReset:f,relative:i,unstable_viewTransition:c});function d(m){r&&r(m),m.defaultPrevented||h(m)}return E.createElement("a",Pc({},p,{href:y||x,onClick:v||o?r:d,ref:n,target:l}))});var ah;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ah||(ah={}));var lh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(lh||(lh={}));function ex(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=jS(),u=qa(),f=Ag(e,{relative:s});return E.useCallback(c=>{if(QS(c,n)){c.preventDefault();let p=r!==void 0?r:xa(u)===xa(f);l(e,{replace:p,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[u,l,f,r,i,n,e,o,s,a])}var Ue=function(){return Ue=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ue.apply(this,arguments)};function ko(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function tx(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var nx=function(t,n,r,i){var o=r?r.call(i,t,n):void 0;if(o!==void 0)return!!o;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var s=Object.keys(t),a=Object.keys(n);if(s.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),u=0;u<s.length;u++){var f=s[u];if(!l(f))return!1;var c=t[f],p=n[f];if(o=r?r.call(i,c,p,f):void 0,o===!1||o===void 0&&c!==p)return!1}return!0},ne="-ms-",qi="-moz-",G="-webkit-",Ug="comm",Ja="rule",Zf="decl",rx="@import",Vg="@keyframes",ix="@layer",Wg=Math.abs,ed=String.fromCharCode,jc=Object.assign;function ox(e,t){return Pe(e,0)^45?(((t<<2^Pe(e,0))<<2^Pe(e,1))<<2^Pe(e,2))<<2^Pe(e,3):0}function Hg(e){return e.trim()}function nn(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function Bs(e,t,n){return e.indexOf(t,n)}function Pe(e,t){return e.charCodeAt(t)|0}function ii(e,t,n){return e.slice(t,n)}function Ut(e){return e.length}function Yg(e){return e.length}function Di(e,t){return t.push(e),e}function sx(e,t){return e.map(t).join("")}function uh(e,t){return e.filter(function(n){return!nn(n,t)})}var Za=1,oi=1,Qg=0,Et=0,ye=0,gi="";function el(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Za,column:oi,length:s,return:"",siblings:a}}function Sn(e,t){return jc(el("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Sr(e){for(;e.root;)e=Sn(e.root,{children:[e]});Di(e,e.siblings)}function ax(){return ye}function lx(){return ye=Et>0?Pe(gi,--Et):0,oi--,ye===10&&(oi=1,Za--),ye}function $t(){return ye=Et<Qg?Pe(gi,Et++):0,oi++,ye===10&&(oi=1,Za++),ye}function lr(){return Pe(gi,Et)}function Us(){return Et}function tl(e,t){return ii(gi,e,t)}function Oc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ux(e){return Za=oi=1,Qg=Ut(gi=e),Et=0,[]}function cx(e){return gi="",e}function hu(e){return Hg(tl(Et-1,Rc(e===91?e+2:e===40?e+1:e)))}function fx(e){for(;(ye=lr())&&ye<33;)$t();return Oc(e)>2||Oc(ye)>3?"":" "}function dx(e,t){for(;--t&&$t()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return tl(e,Us()+(t<6&&lr()==32&&$t()==32))}function Rc(e){for(;$t();)switch(ye){case e:return Et;case 34:case 39:e!==34&&e!==39&&Rc(ye);break;case 40:e===41&&Rc(e);break;case 92:$t();break}return Et}function px(e,t){for(;$t()&&e+ye!==57;)if(e+ye===84&&lr()===47)break;return"/*"+tl(t,Et-1)+"*"+ed(e===47?e:$t())}function hx(e){for(;!Oc(lr());)$t();return tl(e,Et)}function mx(e){return cx(Vs("",null,null,null,[""],e=ux(e),0,[0],e))}function Vs(e,t,n,r,i,o,s,a,l){for(var u=0,f=0,c=s,p=0,w=0,y=0,v=1,x=1,h=1,d=0,m="",S=i,C=o,_=r,k=m;x;)switch(y=d,d=$t()){case 40:if(y!=108&&Pe(k,c-1)==58){Bs(k+=F(hu(d),"&","&\f"),"&\f",Wg(u?a[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:k+=hu(d);break;case 9:case 10:case 13:case 32:k+=fx(y);break;case 92:k+=dx(Us()-1,7);continue;case 47:switch(lr()){case 42:case 47:Di(gx(px($t(),Us()),t,n,l),l);break;default:k+="/"}break;case 123*v:a[u++]=Ut(k)*h;case 125*v:case 59:case 0:switch(d){case 0:case 125:x=0;case 59+f:h==-1&&(k=F(k,/\f/g,"")),w>0&&Ut(k)-c&&Di(w>32?fh(k+";",r,n,c-1,l):fh(F(k," ","")+";",r,n,c-2,l),l);break;case 59:k+=";";default:if(Di(_=ch(k,t,n,u,f,i,a,m,S=[],C=[],c,o),o),d===123)if(f===0)Vs(k,t,_,_,S,o,c,a,C);else switch(p===99&&Pe(k,3)===110?100:p){case 100:case 108:case 109:case 115:Vs(e,_,_,r&&Di(ch(e,_,_,0,0,i,a,m,i,S=[],c,C),C),i,C,c,a,r?S:C);break;default:Vs(k,_,_,_,[""],C,0,a,C)}}u=f=w=0,v=h=1,m=k="",c=s;break;case 58:c=1+Ut(k),w=y;default:if(v<1){if(d==123)--v;else if(d==125&&v++==0&&lx()==125)continue}switch(k+=ed(d),d*v){case 38:h=f>0?1:(k+="\f",-1);break;case 44:a[u++]=(Ut(k)-1)*h,h=1;break;case 64:lr()===45&&(k+=hu($t())),p=lr(),f=c=Ut(m=k+=hx(Us())),d++;break;case 45:y===45&&Ut(k)==2&&(v=0)}}return o}function ch(e,t,n,r,i,o,s,a,l,u,f,c){for(var p=i-1,w=i===0?o:[""],y=Yg(w),v=0,x=0,h=0;v<r;++v)for(var d=0,m=ii(e,p+1,p=Wg(x=s[v])),S=e;d<y;++d)(S=Hg(x>0?w[d]+" "+m:F(m,/&\f/g,w[d])))&&(l[h++]=S);return el(e,t,n,i===0?Ja:a,l,u,f,c)}function gx(e,t,n,r){return el(e,t,n,Ug,ed(ax()),ii(e,2,-2),0,r)}function fh(e,t,n,r,i){return el(e,t,n,Zf,ii(e,0,r),ii(e,r+1,-1),r,i)}function Gg(e,t,n){switch(ox(e,t)){case 5103:return G+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return G+e+e;case 4789:return qi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return G+e+qi+e+ne+e+e;case 5936:switch(Pe(e,t+11)){case 114:return G+e+ne+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return G+e+ne+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return G+e+ne+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return G+e+ne+e+e;case 6165:return G+e+ne+"flex-"+e+e;case 5187:return G+e+F(e,/(\w+).+(:[^]+)/,G+"box-$1$2"+ne+"flex-$1$2")+e;case 5443:return G+e+ne+"flex-item-"+F(e,/flex-|-self/g,"")+(nn(e,/flex-|baseline/)?"":ne+"grid-row-"+F(e,/flex-|-self/g,""))+e;case 4675:return G+e+ne+"flex-line-pack"+F(e,/align-content|flex-|-self/g,"")+e;case 5548:return G+e+ne+F(e,"shrink","negative")+e;case 5292:return G+e+ne+F(e,"basis","preferred-size")+e;case 6060:return G+"box-"+F(e,"-grow","")+G+e+ne+F(e,"grow","positive")+e;case 4554:return G+F(e,/([^-])(transform)/g,"$1"+G+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,G+"$1"),/(image-set)/,G+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,G+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,G+"box-pack:$3"+ne+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+G+e+e;case 4200:if(!nn(e,/flex-|baseline/))return ne+"grid-column-align"+ii(e,t)+e;break;case 2592:case 3360:return ne+F(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,nn(r.props,/grid-\w+-end/)})?~Bs(e+(n=n[t].value),"span",0)?e:ne+F(e,"-start","")+e+ne+"grid-row-span:"+(~Bs(n,"span",0)?nn(n,/\d+/):+nn(n,/\d+/)-+nn(e,/\d+/))+";":ne+F(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return nn(r.props,/grid-\w+-start/)})?e:ne+F(F(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,G+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ut(e)-1-t>6)switch(Pe(e,t+1)){case 109:if(Pe(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+G+"$2-$3$1"+qi+(Pe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Bs(e,"stretch",0)?Gg(F(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return F(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return ne+i+":"+o+u+(s?ne+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(Pe(e,t+6)===121)return F(e,":",":"+G)+e;break;case 6444:switch(Pe(e,Pe(e,14)===45?18:11)){case 120:return F(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+G+(Pe(e,14)===45?"inline-":"")+"box$3$1"+G+"$2$3$1"+ne+"$2box$3")+e;case 100:return F(e,":",":"+ne)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return F(e,"scroll-","scroll-snap-")+e}return e}function Ca(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function yx(e,t,n,r){switch(e.type){case ix:if(e.children.length)break;case rx:case Zf:return e.return=e.return||e.value;case Ug:return"";case Vg:return e.return=e.value+"{"+Ca(e.children,r)+"}";case Ja:if(!Ut(e.value=e.props.join(",")))return""}return Ut(n=Ca(e.children,r))?e.return=e.value+"{"+n+"}":""}function vx(e){var t=Yg(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function wx(e){return function(t){t.root||(t=t.return)&&e(t)}}function Sx(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Zf:e.return=Gg(e.value,e.length,n);return;case Vg:return Ca([Sn(e,{value:F(e.value,"@","@"+G)})],r);case Ja:if(e.length)return sx(n=e.props,function(i){switch(nn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Sr(Sn(e,{props:[F(i,/:(read-\w+)/,":"+qi+"$1")]})),Sr(Sn(e,{props:[i]})),jc(e,{props:uh(n,r)});break;case"::placeholder":Sr(Sn(e,{props:[F(i,/:(plac\w+)/,":"+G+"input-$1")]})),Sr(Sn(e,{props:[F(i,/:(plac\w+)/,":"+qi+"$1")]})),Sr(Sn(e,{props:[F(i,/:(plac\w+)/,ne+"input-$1")]})),Sr(Sn(e,{props:[i]})),jc(e,{props:uh(n,r)});break}return""})}}var xx={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ot={},si=typeof process<"u"&&ot!==void 0&&(ot.REACT_APP_SC_ATTR||ot.SC_ATTR)||"data-styled",Kg="active",Xg="data-styled-version",nl="6.1.8",td=`/*!sc*/
`,nd=typeof window<"u"&&"HTMLElement"in window,kx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ot!==void 0&&ot.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ot.REACT_APP_SC_DISABLE_SPEEDY!==""?ot.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ot.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ot!==void 0&&ot.SC_DISABLE_SPEEDY!==void 0&&ot.SC_DISABLE_SPEEDY!==""&&ot.SC_DISABLE_SPEEDY!=="false"&&ot.SC_DISABLE_SPEEDY),Cx={},rl=Object.freeze([]),ai=Object.freeze({});function qg(e,t,n){return n===void 0&&(n=ai),e.theme!==n.theme&&e.theme||t||n.theme}var Jg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ex=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_x=/(^-|-$)/g;function dh(e){return e.replace(Ex,"-").replace(_x,"")}var Tx=/(a)(d)/gi,hs=52,ph=function(e){return String.fromCharCode(e+(e>25?39:97))};function bc(e){var t,n="";for(t=Math.abs(e);t>hs;t=t/hs|0)n=ph(t%hs)+n;return(ph(t%hs)+n).replace(Tx,"$1-$2")}var mu,Zg=5381,Mr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},e1=function(e){return Mr(Zg,e)};function t1(e){return bc(e1(e)>>>0)}function Px(e){return e.displayName||e.name||"Component"}function gu(e){return typeof e=="string"&&!0}var n1=typeof Symbol=="function"&&Symbol.for,r1=n1?Symbol.for("react.memo"):60115,jx=n1?Symbol.for("react.forward_ref"):60112,Ox={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Rx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},bx=((mu={})[jx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mu[r1]=i1,mu);function hh(e){return("type"in(t=e)&&t.type.$$typeof)===r1?i1:"$$typeof"in e?bx[e.$$typeof]:Ox;var t}var Ix=Object.defineProperty,zx=Object.getOwnPropertyNames,mh=Object.getOwnPropertySymbols,$x=Object.getOwnPropertyDescriptor,Nx=Object.getPrototypeOf,gh=Object.prototype;function o1(e,t,n){if(typeof t!="string"){if(gh){var r=Nx(t);r&&r!==gh&&o1(e,r,n)}var i=zx(t);mh&&(i=i.concat(mh(t)));for(var o=hh(e),s=hh(t),a=0;a<i.length;++a){var l=i[a];if(!(l in Rx||n&&n[l]||s&&l in s||o&&l in o)){var u=$x(t,l);try{Ix(e,l,u)}catch{}}}}return e}function li(e){return typeof e=="function"}function rd(e){return typeof e=="object"&&"styledComponentId"in e}function ir(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ic(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Co(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function zc(e,t,n){if(n===void 0&&(n=!1),!n&&!Co(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=zc(e[r],t[r]);else if(Co(t))for(var r in t)e[r]=zc(e[r],t[r]);return e}function id(e,t){Object.defineProperty(e,"toString",{value:t})}function Wo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Mx=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Wo(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(td);return n},e}(),Ws=new Map,Ea=new Map,Hs=1,ms=function(e){if(Ws.has(e))return Ws.get(e);for(;Ea.has(Hs);)Hs++;var t=Hs++;return Ws.set(e,t),Ea.set(t,e),t},Ax=function(e,t){Hs=t+1,Ws.set(e,t),Ea.set(t,e)},Lx="style[".concat(si,"][").concat(Xg,'="').concat(nl,'"]'),Dx=new RegExp("^".concat(si,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Fx=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},Bx=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(td),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(Dx);if(l){var u=0|parseInt(l[1],10),f=l[2];u!==0&&(Ax(f,u),Fx(e,f,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function Ux(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var s1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(si,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(si,Kg),r.setAttribute(Xg,nl);var s=Ux();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},Vx=function(){function e(t){this.element=s1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Wo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Wx=function(){function e(t){this.element=s1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Hx=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),yh=nd,Yx={isServer:!nd,useCSSOMInjection:!kx},_a=function(){function e(t,n,r){t===void 0&&(t=ai),n===void 0&&(n={});var i=this;this.options=Ue(Ue({},Yx),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&nd&&yh&&(yh=!1,function(o){for(var s=document.querySelectorAll(Lx),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(si)!==Kg&&(Bx(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),id(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(c){var p=function(h){return Ea.get(h)}(c);if(p===void 0)return"continue";var w=o.names.get(p),y=s.getGroup(c);if(w===void 0||y.length===0)return"continue";var v="".concat(si,".g").concat(c,'[id="').concat(p,'"]'),x="";w!==void 0&&w.forEach(function(h){h.length>0&&(x+="".concat(h,","))}),l+="".concat(y).concat(v,'{content:"').concat(x,'"}').concat(td)},f=0;f<a;f++)u(f);return l}(i)})}return e.registerId=function(t){return ms(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ue(Ue({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Hx(i):r?new Vx(i):new Wx(i)}(this.options),new Mx(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ms(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ms(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ms(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Qx=/&/g,Gx=/^\s*\/\/.*$/gm;function a1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=a1(n.children,t)),n})}function Kx(e){var t,n,r,i=e===void 0?ai:e,o=i.options,s=o===void 0?ai:o,a=i.plugins,l=a===void 0?rl:a,u=function(p,w,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):p},f=l.slice();f.push(function(p){p.type===Ja&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(Qx,n).replace(r,u))}),s.prefix&&f.push(Sx),f.push(yx);var c=function(p,w,y,v){w===void 0&&(w=""),y===void 0&&(y=""),v===void 0&&(v="&"),t=v,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var x=p.replace(Gx,""),h=mx(y||w?"".concat(y," ").concat(w," { ").concat(x," }"):x);s.namespace&&(h=a1(h,s.namespace));var d=[];return Ca(h,vx(f.concat(wx(function(m){return d.push(m)})))),d};return c.hash=l.length?l.reduce(function(p,w){return w.name||Wo(15),Mr(p,w.name)},Zg).toString():"",c}var Xx=new _a,$c=Kx(),l1=at.createContext({shouldForwardProp:void 0,styleSheet:Xx,stylis:$c});l1.Consumer;at.createContext(void 0);function Nc(){return E.useContext(l1)}var qx=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=$c);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,id(this,function(){throw Wo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=$c),this.name+t.hash},e}(),Jx=function(e){return e>="A"&&e<="Z"};function vh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Jx(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var u1=function(e){return e==null||e===!1||e===""},c1=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!u1(o)&&(Array.isArray(o)&&o.isCss||li(o)?r.push("".concat(vh(i),":"),o,";"):Co(o)?r.push.apply(r,ko(ko(["".concat(i," {")],c1(o),!1),["}"],!1)):r.push("".concat(vh(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in xx||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Dn(e,t,n,r){if(u1(e))return[];if(rd(e))return[".".concat(e.styledComponentId)];if(li(e)){if(!li(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Dn(i,t,n,r)}var o;return e instanceof qx?n?(e.inject(n,r),[e.getName(r)]):[e]:Co(e)?c1(e):Array.isArray(e)?Array.prototype.concat.apply(rl,e.map(function(s){return Dn(s,t,n,r)})):[e.toString()]}function f1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(li(n)&&!rd(n))return!1}return!0}var Zx=e1(nl),e3=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&f1(t),this.componentId=n,this.baseHash=Mr(Zx,n),this.baseStyle=r,_a.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ir(i,this.staticRulesId);else{var o=Ic(Dn(this.rules,t,n,r)),s=bc(Mr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=ir(i,s),this.staticRulesId=s}else{for(var l=Mr(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var c=this.rules[f];if(typeof c=="string")u+=c;else if(c){var p=Ic(Dn(c,t,n,r));l=Mr(l,p+f),u+=p}}if(u){var w=bc(l>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(u,".".concat(w),void 0,this.componentId)),i=ir(i,w)}}return i},e}(),od=at.createContext(void 0);od.Consumer;var yu={};function t3(e,t,n){var r=rd(e),i=e,o=!gu(e),s=t.attrs,a=s===void 0?rl:s,l=t.componentId,u=l===void 0?function(S,C){var _=typeof S!="string"?"sc":dh(S);yu[_]=(yu[_]||0)+1;var k="".concat(_,"-").concat(t1(nl+_+yu[_]));return C?"".concat(C,"-").concat(k):k}(t.displayName,t.parentComponentId):l,f=t.displayName,c=f===void 0?function(S){return gu(S)?"styled.".concat(S):"Styled(".concat(Px(S),")")}(e):f,p=t.displayName&&t.componentId?"".concat(dh(t.displayName),"-").concat(t.componentId):t.componentId||u,w=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;y=function(S,C){return v(S,C)&&x(S,C)}}else y=v}var h=new e3(n,p,r?i.componentStyle:void 0);function d(S,C){return function(_,k,R){var N=_.attrs,$=_.componentStyle,K=_.defaultProps,Re=_.foldedComponentIds,be=_.styledComponentId,M=_.target,B=at.useContext(od),de=Nc(),se=_.shouldForwardProp||de.shouldForwardProp,O=qg(k,B,K)||ai,I=function(me,xe,Ee){for(var At,We=Ue(Ue({},xe),{className:void 0,theme:Ee}),Yn=0;Yn<me.length;Yn+=1){var Xo=li(At=me[Yn])?At(We):At;for(var mn in Xo)We[mn]=mn==="className"?ir(We[mn],Xo[mn]):mn==="style"?Ue(Ue({},We[mn]),Xo[mn]):Xo[mn]}return xe.className&&(We.className=ir(We.className,xe.className)),We}(N,k,O),z=I.as||M,X={};for(var W in I)I[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&I.theme===O||(W==="forwardedAs"?X.as=I.forwardedAs:se&&!se(W,z)||(X[W]=I[W]));var Xt=function(me,xe){var Ee=Nc(),At=me.generateAndInjectStyles(xe,Ee.styleSheet,Ee.stylis);return At}($,I),Xe=ir(Re,be);return Xt&&(Xe+=" "+Xt),I.className&&(Xe+=" "+I.className),X[gu(z)&&!Jg.has(z)?"class":"className"]=Xe,X.ref=R,E.createElement(z,X)}(m,S,C)}d.displayName=c;var m=at.forwardRef(d);return m.attrs=w,m.componentStyle=h,m.displayName=c,m.shouldForwardProp=y,m.foldedComponentIds=r?ir(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=p,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(C){for(var _=[],k=1;k<arguments.length;k++)_[k-1]=arguments[k];for(var R=0,N=_;R<N.length;R++)zc(C,N[R],!0);return C}({},i.defaultProps,S):S}}),id(m,function(){return".".concat(m.styledComponentId)}),o&&o1(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function wh(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Sh=function(e){return Object.assign(e,{isCss:!0})};function Ar(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(li(e)||Co(e))return Sh(Dn(wh(rl,ko([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Dn(r):Sh(Dn(wh(r,t)))}function Mc(e,t,n){if(n===void 0&&(n=ai),!t)throw Wo(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Ar.apply(void 0,ko([i],o,!1)))};return r.attrs=function(i){return Mc(e,t,Ue(Ue({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Mc(e,t,Ue(Ue({},n),i))},r}var d1=function(e){return Mc(t3,e)},A=d1;Jg.forEach(function(e){A[e]=d1(e)});var n3=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=f1(t),_a.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Ic(Dn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&_a.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function r3(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ar.apply(void 0,ko([e],t,!1)),i="sc-global-".concat(t1(JSON.stringify(r))),o=new n3(r,i),s=function(l){var u=Nc(),f=at.useContext(od),c=at.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(c,l,u.styleSheet,f,u.stylis),at.useLayoutEffect(function(){if(!u.styleSheet.server)return a(c,l,u.styleSheet,f,u.stylis),function(){return o.removeStyles(c,u.styleSheet)}},[c,l,u.styleSheet,f,u.stylis]),null};function a(l,u,f,c,p){if(o.isStatic)o.renderStyles(l,Cx,f,p);else{var w=Ue(Ue({},u),{theme:qg(u,c,s.defaultProps)});o.renderStyles(l,w,f,p)}}return at.memo(s)}const i3=r3`

:root {
  /* Colors */

  /* Fonts */
  --font-light-white: #fbfbfa;
  --font-medium-white: #f6f6f6;
  --font-dark-white: #f2f2f1;
  
  --font-dark-dark: #0d1717;
  --font-medium-dark: #252e2e;
  --font-light-dark: #3d4545;
  --font-verylight-dark: #565d5d;

  --color-dark-green: #333c30;
  --color-medium-green: #5c6c64;
  --color-light-green: #a6a77b;
  --color-light-slaten: #d3d3d1;
  --color-medium-slate: #9ca4ac;
  --color-dark-slate: #3c4454;
  --color-dark-brown: #4c4442;

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}

*,
*::before,
*::after{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  transition: background-color 0.5s, box-shadow 0.5s, color 0.5s, border-radius .5s, opacity 0.5s, border 0.5s
}

html{
  font-size: 62.5%;
  scroll-behavior: smooth;
}

@media (max-width:64em) {
  html{
    font-size: 56.25%;
  }
}
@media (max-width:50em) {
  html{
    font-size: 52.5%;
  }
}

body {
  font-family: "Roboto", sans-serif;
  background-color: #f2f2f1;
  overflow-x: hidden;
}

a { 
  text-decoration: none;
  color: inherit;
  font-family: inherit;
}

ul {
  list-style: none;
}

p{
  font-size: 1.8rem;
  margin-bottom: 1.8rem;
  color: var(--font-dark-dark);
}

p,
h1,
h2,
h3,
h4 {
  overflow-wrap: break-word;
  hyphens: auto;
}

iframe {
  border: none;
  opacity: 0.8;
  width: 100%;
  height: 40rem;
}
/* FIREFOX */
/* * {
    scrollbar-width: thin;
    scrollbar-color: var(--color-hover) var(--color-body-background);;
  } */

  /* Chrome, Edge, and Safari */
  /* *::-webkit-scrollbar {
    width: 5px;
    height: 5px;

  }
  *::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}

  *::-webkit-scrollbar-track {
    background: var(--color-body-background);
    border-radius: 100px;
  }

  *::-webkit-scrollbar-thumb {
    background-color:var(--color-hover);
    border-radius: 100px;
    border: 3px none var(--color-body-background);
  }
  *::-webkit-scrollbar-corner {
  background: transparent;
} */


`;var p1={},h1={exports:{}},o3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",s3=o3,a3=s3;function m1(){}function g1(){}g1.resetWarningCache=m1;var l3=function(){function e(r,i,o,s,a,l){if(l!==a3){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:g1,resetWarningCache:m1};return n.PropTypes=n,n};h1.exports=l3();var u3=h1.exports,il={exports:{}},Fi={exports:{}};(function(){var e,t,n,r,i,o;typeof performance<"u"&&performance!==null&&performance.now?Fi.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(Fi.exports=function(){return(e()-i)/1e6},t=process.hrtime,e=function(){var s;return s=t(),s[0]*1e9+s[1]},r=e(),o=process.uptime()*1e9,i=r-o):Date.now?(Fi.exports=function(){return Date.now()-n},n=Date.now()):(Fi.exports=function(){return new Date().getTime()-n},n=new Date().getTime())}).call(Xr);var c3=Fi.exports,f3=c3,un=typeof window>"u"?Xr:window,gs=["moz","webkit"],Hr="AnimationFrame",ui=un["request"+Hr],Eo=un["cancel"+Hr]||un["cancelRequest"+Hr];for(var ji=0;!ui&&ji<gs.length;ji++)ui=un[gs[ji]+"Request"+Hr],Eo=un[gs[ji]+"Cancel"+Hr]||un[gs[ji]+"CancelRequest"+Hr];if(!ui||!Eo){var vu=0,xh=0,Qn=[],d3=1e3/60;ui=function(e){if(Qn.length===0){var t=f3(),n=Math.max(0,d3-(t-vu));vu=n+t,setTimeout(function(){var r=Qn.slice(0);Qn.length=0;for(var i=0;i<r.length;i++)if(!r[i].cancelled)try{r[i].callback(vu)}catch(o){setTimeout(function(){throw o},0)}},Math.round(n))}return Qn.push({handle:++xh,callback:e,cancelled:!1}),xh},Eo=function(e){for(var t=0;t<Qn.length;t++)Qn[t].handle===e&&(Qn[t].cancelled=!0)}}il.exports=function(e){return ui.call(un,e)};il.exports.cancel=function(){Eo.apply(un,arguments)};il.exports.polyfill=function(e){e||(e=un),e.requestAnimationFrame=ui,e.cancelAnimationFrame=Eo};var p3=il.exports,sd={};Object.defineProperty(sd,"__esModule",{value:!0});sd.default=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=t>=e?"down":"up",o=Math.abs(t-e);return n.disable?{action:"none",scrollDirection:i,distanceScrolled:o}:n.pin?{action:r.state!=="pinned"?"pin":"none",scrollDirection:i,distanceScrolled:o}:t<=n.pinStart&&r.state!=="unfixed"?{action:"unfix",scrollDirection:i,distanceScrolled:o}:t<=r.height&&i==="down"&&r.state==="unfixed"?{action:"none",scrollDirection:i,distanceScrolled:o}:t>r.height+n.pinStart&&i==="down"&&r.state==="unfixed"?{action:"unpin-snap",scrollDirection:i,distanceScrolled:o}:i==="down"&&["pinned","unfixed"].indexOf(r.state)>=0&&t>r.height+n.pinStart&&o>n.downTolerance?{action:"unpin",scrollDirection:i,distanceScrolled:o}:i==="up"&&o>n.upTolerance&&["pinned","unfixed"].indexOf(r.state)<0?{action:"pin",scrollDirection:i,distanceScrolled:o}:i==="up"&&t<=r.height&&["pinned","unfixed"].indexOf(r.state)<0?{action:"pin",scrollDirection:i,distanceScrolled:o}:{action:"none",scrollDirection:i,distanceScrolled:o}};var ad={};Object.defineProperty(ad,"__esModule",{value:!0});ad.default=h3;function h3(){var e=!1;try{var t={get passive(){return e=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{e=!1}return e}Object.defineProperty(p1,"__esModule",{value:!0});var ys=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kh=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y1=E,Ch=yi(y1),m3=u3,De=yi(m3),g3=nx,Eh=yi(g3),y3=p3,_h=yi(y3),v3=sd,w3=yi(v3),S3=ad,x3=yi(S3);function yi(e){return e&&e.__esModule?e:{default:e}}function Th(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function k3(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C3(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function E3(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var wu=function(){},ld=function(e){E3(t,e),kh(t,null,[{key:"getDerivedStateFromProps",value:function(r,i){return r.disable&&i.state!=="unfixed"?{translateY:0,className:"headroom headroom--unfixed headroom-disable-animation",animation:!1,state:"unfixed"}:null}}]);function t(n){k3(this,t);var r=C3(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return r.setRef=function(i){return r.inner=i},r.setHeightOffset=function(){r.setState({height:r.inner?r.inner.offsetHeight:""}),r.resizeTicking=!1},r.getScrollY=function(){return r.props.parent().pageYOffset!==void 0?r.props.parent().pageYOffset:r.props.parent().scrollTop!==void 0?r.props.parent().scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},r.getViewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},r.getDocumentHeight=function(){var i=document.body,o=document.documentElement;return Math.max(i.scrollHeight,o.scrollHeight,i.offsetHeight,o.offsetHeight,i.clientHeight,o.clientHeight)},r.getElementPhysicalHeight=function(i){return Math.max(i.offsetHeight,i.clientHeight)},r.getElementHeight=function(i){return Math.max(i.scrollHeight,i.offsetHeight,i.clientHeight)},r.getScrollerPhysicalHeight=function(){var i=r.props.parent();return i===window||i===document.body?r.getViewportHeight():r.getElementPhysicalHeight(i)},r.getScrollerHeight=function(){var i=r.props.parent();return i===window||i===document.body?r.getDocumentHeight():r.getElementHeight(i)},r.isOutOfBound=function(i){var o=i<0,s=r.getScrollerPhysicalHeight(),a=r.getScrollerHeight(),l=i+s>a;return o||l},r.handleScroll=function(){r.scrollTicking||(r.scrollTicking=!0,(0,_h.default)(r.update))},r.handleResize=function(){r.resizeTicking||(r.resizeTicking=!0,(0,_h.default)(r.setHeightOffset))},r.unpin=function(){r.props.onUnpin(),r.setState({translateY:"-100%",className:"headroom headroom--unpinned",animation:!0,state:"unpinned"})},r.unpinSnap=function(){r.props.onUnpin(),r.setState({translateY:"-100%",className:"headroom headroom--unpinned headroom-disable-animation",animation:!1,state:"unpinned"})},r.pin=function(){r.props.onPin(),r.setState({translateY:0,className:"headroom headroom--pinned",animation:!0,state:"pinned"})},r.unfix=function(){r.props.onUnfix(),r.setState({translateY:0,className:"headroom headroom--unfixed headroom-disable-animation",animation:!1},function(){setTimeout(function(){r.setState({state:"unfixed"})},0)})},r.update=function(){if(r.currentScrollY=r.getScrollY(),!r.isOutOfBound(r.currentScrollY)){var i=(0,w3.default)(r.lastKnownScrollY,r.currentScrollY,r.props,r.state),o=i.action;o==="pin"?r.pin():o==="unpin"?r.unpin():o==="unpin-snap"?r.unpinSnap():o==="unfix"&&r.unfix()}r.lastKnownScrollY=r.currentScrollY,r.scrollTicking=!1},r.currentScrollY=0,r.lastKnownScrollY=0,r.scrollTicking=!1,r.resizeTicking=!1,r.eventListenerOptions=!1,r.state={state:"unfixed",translateY:0,className:"headroom headroom--unfixed"},r}return kh(t,[{key:"componentDidMount",value:function(){this.setHeightOffset(),this.eventListenerOptions=(0,x3.default)()?{passive:!0,capture:!1}:!1,this.props.disable||(this.props.parent().addEventListener("scroll",this.handleScroll,this.eventListenerOptions),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize,this.eventListenerOptions))}},{key:"shouldComponentUpdate",value:function(r,i){return!(0,Eh.default)(this.props,r)||!(0,Eh.default)(this.state,i)}},{key:"componentDidUpdate",value:function(r,i){r.children!==this.props.children&&this.setHeightOffset(),!r.disable&&this.props.disable?(this.props.parent().removeEventListener("scroll",this.handleScroll,this.eventListenerOptions),this.props.parent().removeEventListener("resize",this.handleResize,this.eventListenerOptions),i.state!=="unfixed"&&this.state.state==="unfixed"&&this.props.onUnfix()):r.disable&&!this.props.disable&&(this.props.parent().addEventListener("scroll",this.handleScroll,this.eventListenerOptions),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize,this.eventListenerOptions)),r.pin!==this.props.pin&&this.handleScroll()}},{key:"componentWillUnmount",value:function(){this.props.parent()&&(this.props.parent().removeEventListener("scroll",this.handleScroll,this.eventListenerOptions),this.props.parent().removeEventListener("resize",this.handleResize,this.eventListenerOptions)),window.removeEventListener("scroll",this.handleScroll,this.eventListenerOptions)}},{key:"render",value:function(){var r=this.props,i=r.className,o=r.tag,s=Th(r,["className","tag"]);delete s.onUnpin,delete s.onPin,delete s.onUnfix,delete s.disableInlineStyles,delete s.disable,delete s.pin,delete s.parent,delete s.children,delete s.upTolerance,delete s.downTolerance,delete s.pinStart,delete s.calcHeightOnResize;var a=s.style,l=s.wrapperStyle,u=Th(s,["style","wrapperStyle"]),f={position:this.props.disable||this.state.state==="unfixed"?"relative":"fixed",top:0,left:0,right:0,zIndex:1,WebkitTransform:"translate3D(0, "+this.state.translateY+", 0)",MsTransform:"translate3D(0, "+this.state.translateY+", 0)",transform:"translate3D(0, "+this.state.translateY+", 0)"},c=this.state.className;this.state.animation&&(f=ys({},f,{WebkitTransition:"all .2s ease-in-out",MozTransition:"all .2s ease-in-out",OTransition:"all .2s ease-in-out",transition:"all .2s ease-in-out"}),c+=" headroom--scrolled"),this.props.disableInlineStyles?f=a:f=ys({},f,a);var p=ys({},l,{height:this.state.height?this.state.height:null}),w=i?i+" headroom-wrapper":"headroom-wrapper";return Ch.default.createElement(o,{style:p,className:w},Ch.default.createElement("div",ys({ref:this.setRef},u,{style:f,className:c}),this.props.children))}}]),t}(y1.Component);ld.propTypes={className:De.default.string,parent:De.default.func,children:De.default.any.isRequired,disableInlineStyles:De.default.bool,disable:De.default.bool,pin:De.default.bool,upTolerance:De.default.number,downTolerance:De.default.number,onPin:De.default.func,onUnpin:De.default.func,onUnfix:De.default.func,wrapperStyle:De.default.object,pinStart:De.default.number,style:De.default.object,calcHeightOnResize:De.default.bool,tag:De.default.string};ld.defaultProps={parent:function(){return window},disableInlineStyles:!1,disable:!1,pin:!1,upTolerance:5,downTolerance:0,onPin:wu,onUnpin:wu,onUnfix:wu,wrapperStyle:{},pinStart:0,calcHeightOnResize:!0,tag:"div"};var _3=p1.default=ld;const U=A.h1`
  ${e=>e.as==="h1"&&Ar`
      font-size: 9.6rem;
      text-transform: uppercase;

      color: var(--font-dark-white);
    `}
  ${e=>e.as==="h2"&&Ar`
      font-size: 5.2rem;
      color: var(--font-light-dark);
      margin-bottom: 4.2rem;
      margin-top: 6.4rem;
    `}
  ${e=>e.as==="h3"&&Ar`
      font-size: 3.2rem;
      color: var(--font-light-dark);
      margin-bottom: 2.4rem;
    `}
  ${e=>e.as==="h4"&&Ar`
      font-size: 2.4rem;
      color: var(--font-medium-dark);
    `}
`;var T3=Object.defineProperty,P3=(e,t)=>{for(var n in t)T3(e,n,{get:t[n],enumerable:!0})},Mt={};P3(Mt,{assign:()=>R3,colors:()=>Fn,createStringInterpolator:()=>md,skipAnimation:()=>E1,to:()=>C1,willAdvance:()=>gd});var ud=Yo(),D=e=>Ho(e,ud),cd=Yo();D.write=e=>Ho(e,cd);var ol=Yo();D.onStart=e=>Ho(e,ol);var fd=Yo();D.onFrame=e=>Ho(e,fd);var dd=Yo();D.onFinish=e=>Ho(e,dd);var Yr=[];D.setTimeout=(e,t)=>{const n=D.now()+t,r=()=>{const o=Yr.findIndex(s=>s.cancel==r);~o&&Yr.splice(o,1),On-=~o?1:0},i={time:n,handler:e,cancel:r};return Yr.splice(v1(n),0,i),On+=1,w1(),i};var v1=e=>~(~Yr.findIndex(t=>t.time>e)||~Yr.length);D.cancel=e=>{ol.delete(e),fd.delete(e),dd.delete(e),ud.delete(e),cd.delete(e)};D.sync=e=>{Ac=!0,D.batchedUpdates(e),Ac=!1};D.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...i){t=i,D.onStart(n)}return r.handler=e,r.cancel=()=>{ol.delete(n),t=null},r};var pd=typeof window<"u"?window.requestAnimationFrame:()=>{};D.use=e=>pd=e;D.now=typeof performance<"u"?()=>performance.now():Date.now;D.batchedUpdates=e=>e();D.catch=console.error;D.frameLoop="always";D.advance=()=>{D.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):x1()};var jn=-1,On=0,Ac=!1;function Ho(e,t){Ac?(t.delete(e),e(0)):(t.add(e),w1())}function w1(){jn<0&&(jn=0,D.frameLoop!=="demand"&&pd(S1))}function j3(){jn=-1}function S1(){~jn&&(pd(S1),D.batchedUpdates(x1))}function x1(){const e=jn;jn=D.now();const t=v1(jn);if(t&&(k1(Yr.splice(0,t),n=>n.handler()),On-=t),!On){j3();return}ol.flush(),ud.flush(e?Math.min(64,jn-e):16.667),fd.flush(),cd.flush(),dd.flush()}function Yo(){let e=new Set,t=e;return{add(n){On+=t==e&&!e.has(n)?1:0,e.add(n)},delete(n){return On-=t==e&&e.has(n)?1:0,e.delete(n)},flush(n){t.size&&(e=new Set,On-=t.size,k1(t,r=>r(n)&&e.add(r)),On+=e.size,t=e)}}}function k1(e,t){e.forEach(n=>{try{t(n)}catch(r){D.catch(r)}})}function Lc(){}var O3=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),T={arr:Array.isArray,obj:e=>!!e&&e.constructor.name==="Object",fun:e=>typeof e=="function",str:e=>typeof e=="string",num:e=>typeof e=="number",und:e=>e===void 0};function rn(e,t){if(T.arr(e)){if(!T.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var L=(e,t)=>e.forEach(t);function Kt(e,t,n){if(T.arr(e)){for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);return}for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var Ye=e=>T.und(e)?[]:T.arr(e)?e:[e];function Ji(e,t){if(e.size){const n=Array.from(e);e.clear(),L(n,t)}}var Bi=(e,...t)=>Ji(e,n=>n(...t)),hd=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),md,C1,Fn=null,E1=!1,gd=Lc,R3=e=>{e.to&&(C1=e.to),e.now&&(D.now=e.now),e.colors!==void 0&&(Fn=e.colors),e.skipAnimation!=null&&(E1=e.skipAnimation),e.createStringInterpolator&&(md=e.createStringInterpolator),e.requestAnimationFrame&&D.use(e.requestAnimationFrame),e.batchedUpdates&&(D.batchedUpdates=e.batchedUpdates),e.willAdvance&&(gd=e.willAdvance),e.frameLoop&&(D.frameLoop=e.frameLoop)},Zi=new Set,wt=[],Su=[],Ta=0,sl={get idle(){return!Zi.size&&!wt.length},start(e){Ta>e.priority?(Zi.add(e),D.onStart(b3)):(_1(e),D(Dc))},advance:Dc,sort(e){if(Ta)D.onFrame(()=>sl.sort(e));else{const t=wt.indexOf(e);~t&&(wt.splice(t,1),T1(e))}},clear(){wt=[],Zi.clear()}};function b3(){Zi.forEach(_1),Zi.clear(),D(Dc)}function _1(e){wt.includes(e)||T1(e)}function T1(e){wt.splice(I3(wt,t=>t.priority>e.priority),0,e)}function Dc(e){const t=Su;for(let n=0;n<wt.length;n++){const r=wt[n];Ta=r.priority,r.idle||(gd(r),r.advance(e),r.idle||t.push(r))}return Ta=0,Su=wt,Su.length=0,wt=t,wt.length>0}function I3(e,t){const n=e.findIndex(t);return n<0?e.length:n}var z3=(e,t,n)=>Math.min(Math.max(n,e),t),$3={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},bt="[-+]?\\d*\\.?\\d+",Pa=bt+"%";function al(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var N3=new RegExp("rgb"+al(bt,bt,bt)),M3=new RegExp("rgba"+al(bt,bt,bt,bt)),A3=new RegExp("hsl"+al(bt,Pa,Pa)),L3=new RegExp("hsla"+al(bt,Pa,Pa,bt)),D3=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,F3=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,B3=/^#([0-9a-fA-F]{6})$/,U3=/^#([0-9a-fA-F]{8})$/;function V3(e){let t;return typeof e=="number"?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=B3.exec(e))?parseInt(t[1]+"ff",16)>>>0:Fn&&Fn[e]!==void 0?Fn[e]:(t=N3.exec(e))?(xr(t[1])<<24|xr(t[2])<<16|xr(t[3])<<8|255)>>>0:(t=M3.exec(e))?(xr(t[1])<<24|xr(t[2])<<16|xr(t[3])<<8|Oh(t[4]))>>>0:(t=D3.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=U3.exec(e))?parseInt(t[1],16)>>>0:(t=F3.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=A3.exec(e))?(Ph(jh(t[1]),vs(t[2]),vs(t[3]))|255)>>>0:(t=L3.exec(e))?(Ph(jh(t[1]),vs(t[2]),vs(t[3]))|Oh(t[4]))>>>0:null}function xu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ph(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=xu(i,r,e+1/3),s=xu(i,r,e),a=xu(i,r,e-1/3);return Math.round(o*255)<<24|Math.round(s*255)<<16|Math.round(a*255)<<8}function xr(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function jh(e){return(parseFloat(e)%360+360)%360/360}function Oh(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(t*255)}function vs(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Rh(e){let t=V3(e);if(t===null)return e;t=t||0;const n=(t&4278190080)>>>24,r=(t&16711680)>>>16,i=(t&65280)>>>8,o=(t&255)/255;return`rgba(${n}, ${r}, ${i}, ${o})`}var _o=(e,t,n)=>{if(T.fun(e))return e;if(T.arr(e))return _o({range:e,output:t,extrapolate:n});if(T.str(e.output[0]))return md(e);const r=e,i=r.output,o=r.range||[0,1],s=r.extrapolateLeft||r.extrapolate||"extend",a=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(u=>u);return u=>{const f=H3(u,o);return W3(u,o[f],o[f+1],i[f],i[f+1],l,s,a,r.map)}};function W3(e,t,n,r,i,o,s,a,l){let u=l?l(e):e;if(u<t){if(s==="identity")return u;s==="clamp"&&(u=t)}if(u>n){if(a==="identity")return u;a==="clamp"&&(u=n)}return r===i?r:t===n?e<=t?r:i:(t===-1/0?u=-u:n===1/0?u=u-t:u=(u-t)/(n-t),u=o(u),r===-1/0?u=-u:i===1/0?u=u+r:u=u*(i-r)+r,u)}function H3(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}var Y3=(e,t="end")=>n=>{n=t==="end"?Math.min(n,.999):Math.max(n,.001);const r=n*e,i=t==="end"?Math.floor(r):Math.ceil(r);return z3(0,1,i/e)},ja=1.70158,ws=ja*1.525,bh=ja+1,Ih=2*Math.PI/3,zh=2*Math.PI/4.5,Ss=e=>e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375,Q3={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>e===0?0:Math.pow(2,10*e-10),easeOutExpo:e=>e===1?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>e===0?0:e===1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>bh*e*e*e-ja*e*e,easeOutBack:e=>1+bh*Math.pow(e-1,3)+ja*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*((ws+1)*2*e-ws)/2:(Math.pow(2*e-2,2)*((ws+1)*(e*2-2)+ws)+2)/2,easeInElastic:e=>e===0?0:e===1?1:-Math.pow(2,10*e-10)*Math.sin((e*10-10.75)*Ih),easeOutElastic:e=>e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e*10-.75)*Ih)+1,easeInOutElastic:e=>e===0?0:e===1?1:e<.5?-(Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*zh))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*zh)/2+1,easeInBounce:e=>1-Ss(1-e),easeOutBounce:Ss,easeInOutBounce:e=>e<.5?(1-Ss(1-2*e))/2:(1+Ss(2*e-1))/2,steps:Y3},To=Symbol.for("FluidValue.get"),ci=Symbol.for("FluidValue.observers"),vt=e=>!!(e&&e[To]),qe=e=>e&&e[To]?e[To]():e,$h=e=>e[ci]||null;function G3(e,t){e.eventObserved?e.eventObserved(t):e(t)}function Po(e,t){const n=e[ci];n&&n.forEach(r=>{G3(r,t)})}var P1=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");K3(this,e)}},K3=(e,t)=>j1(e,To,t);function vi(e,t){if(e[To]){let n=e[ci];n||j1(e,ci,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function jo(e,t){const n=e[ci];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[ci]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var j1=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Ys=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,X3=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Nh=new RegExp(`(${Ys.source})(%|[a-z]+)`,"i"),q3=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,ll=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,O1=e=>{const[t,n]=J3(e);if(!t||hd())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const i=window.getComputedStyle(document.documentElement).getPropertyValue(n);return i||e}else{if(n&&ll.test(n))return O1(n);if(n)return n}return e},J3=e=>{const t=ll.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},ku,Z3=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,R1=e=>{ku||(ku=Fn?new RegExp(`(${Object.keys(Fn).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map(o=>qe(o).replace(ll,O1).replace(X3,Rh).replace(ku,Rh)),n=t.map(o=>o.match(Ys).map(Number)),i=n[0].map((o,s)=>n.map(a=>{if(!(s in a))throw Error('The arity of each "output" value must be equal');return a[s]})).map(o=>_o({...e,output:o}));return o=>{var l;const s=!Nh.test(t[0])&&((l=t.find(u=>Nh.test(u)))==null?void 0:l.replace(Ys,""));let a=0;return t[0].replace(Ys,()=>`${i[a++](o)}${s||""}`).replace(q3,Z3)}},yd="react-spring: ",b1=e=>{const t=e;let n=!1;if(typeof t!="function")throw new TypeError(`${yd}once requires a function parameter`);return(...r)=>{n||(t(...r),n=!0)}},ek=b1(console.warn);function tk(){ek(`${yd}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var nk=b1(console.warn);function rk(){nk(`${yd}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function ul(e){return T.str(e)&&(e[0]=="#"||/\d/.test(e)||!hd()&&ll.test(e)||e in(Fn||{}))}var or=hd()?E.useEffect:E.useLayoutEffect,ik=()=>{const e=E.useRef(!1);return or(()=>(e.current=!0,()=>{e.current=!1}),[]),e};function vd(){const e=E.useState()[1],t=ik();return()=>{t.current&&e(Math.random())}}function ok(e,t){const[n]=E.useState(()=>({inputs:t,result:e()})),r=E.useRef(),i=r.current;let o=i;return o?t&&o.inputs&&sk(t,o.inputs)||(o={inputs:t,result:e()}):o=n,E.useEffect(()=>{r.current=o,i==n&&(n.inputs=n.result=void 0)},[o]),o.result}function sk(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var wd=e=>E.useEffect(e,ak),ak=[];function Fc(e){const t=E.useRef();return E.useEffect(()=>{t.current=e}),t.current}var Oo=Symbol.for("Animated:node"),lk=e=>!!e&&e[Oo]===e,Bt=e=>e&&e[Oo],Sd=(e,t)=>O3(e,Oo,t),cl=e=>e&&e[Oo]&&e[Oo].getPayload(),I1=class{constructor(){Sd(this,this)}getPayload(){return this.payload||[]}},Qo=class extends I1{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,T.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Qo(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return T.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value===e?!1:(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,T.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Ro=class extends Qo{constructor(e){super(0),this._string=null,this._toString=_o({output:[e,e]})}static create(e){return new Ro(e)}getValue(){const e=this._string;return e??(this._string=this._toString(this._value))}setValue(e){if(T.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else if(super.setValue(e))this._string=null;else return!1;return!0}reset(e){e&&(this._toString=_o({output:[this.getValue(),e]})),this._value=0,super.reset()}},Oa={dependencies:null},fl=class extends I1{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Kt(this.source,(n,r)=>{lk(n)?t[r]=n.getValue(e):vt(n)?t[r]=qe(n):e||(t[r]=n)}),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&L(this.payload,e=>e.reset())}_makePayload(e){if(e){const t=new Set;return Kt(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Oa.dependencies&&vt(e)&&Oa.dependencies.add(e);const t=cl(e);t&&L(t,n=>this.add(n))}},z1=class extends fl{constructor(e){super(e)}static create(e){return new z1(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){const t=this.getPayload();return e.length==t.length?t.map((n,r)=>n.setValue(e[r])).some(Boolean):(super.setValue(e.map(uk)),!0)}};function uk(e){return(ul(e)?Ro:Qo).create(e)}function Bc(e){const t=Bt(e);return t?t.constructor:T.arr(e)?z1:ul(e)?Ro:Qo}var Mh=(e,t)=>{const n=!T.fun(e)||e.prototype&&e.prototype.isReactComponent;return E.forwardRef((r,i)=>{const o=E.useRef(null),s=n&&E.useCallback(y=>{o.current=dk(i,y)},[i]),[a,l]=fk(r,t),u=vd(),f=()=>{const y=o.current;if(n&&!y)return;(y?t.applyAnimatedValues(y,a.getValue(!0)):!1)===!1&&u()},c=new ck(f,l),p=E.useRef();or(()=>(p.current=c,L(l,y=>vi(y,c)),()=>{p.current&&(L(p.current.deps,y=>jo(y,p.current)),D.cancel(p.current.update))})),E.useEffect(f,[]),wd(()=>()=>{const y=p.current;L(y.deps,v=>jo(v,y))});const w=t.getComponentProps(a.getValue());return E.createElement(e,{...w,ref:s})})},ck=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){e.type=="change"&&D.write(this.update)}};function fk(e,t){const n=new Set;return Oa.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)}),e=new fl(e),Oa.dependencies=null,[e,n]}function dk(e,t){return e&&(T.fun(e)?e(t):e.current=t),t}var Ah=Symbol.for("AnimatedComponent"),pk=(e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:n=i=>new fl(i),getComponentProps:r=i=>i}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=s=>{const a=Lh(s)||"Anonymous";return T.str(s)?s=o[s]||(o[s]=Mh(s,i)):s=s[Ah]||(s[Ah]=Mh(s,i)),s.displayName=`Animated(${a})`,s};return Kt(e,(s,a)=>{T.arr(e)&&(a=Lh(s)),o[a]=o(s)}),{animated:o}},Lh=e=>T.str(e)?e:e&&T.str(e.displayName)?e.displayName:T.fun(e)&&e.name||null;function Je(e,...t){return T.fun(e)?e(...t):e}var eo=(e,t)=>e===!0||!!(t&&e&&(T.fun(e)?e(t):Ye(e).includes(t))),$1=(e,t)=>T.obj(e)?t&&e[t]:e,N1=(e,t)=>e.default===!0?e[t]:e.default?e.default[t]:void 0,hk=e=>e,dl=(e,t=hk)=>{let n=mk;e.default&&e.default!==!0&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const o=t(e[i],i);T.und(o)||(r[i]=o)}return r},mk=["config","onProps","onStart","onChange","onPause","onResume","onRest"],gk={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function yk(e){const t={};let n=0;if(Kt(e,(r,i)=>{gk[i]||(t[i]=r,n++)}),n)return t}function xd(e){const t=yk(e);if(t){const n={to:t};return Kt(e,(r,i)=>i in t||(n[i]=r)),n}return{...e}}function bo(e){return e=qe(e),T.arr(e)?e.map(bo):ul(e)?Mt.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function M1(e){for(const t in e)return!0;return!1}function Uc(e){return T.fun(e)||T.arr(e)&&T.obj(e[0])}function Vc(e,t){var n;(n=e.ref)==null||n.delete(e),t==null||t.delete(e)}function A1(e,t){var n;t&&e.ref!==t&&((n=e.ref)==null||n.delete(e),t.add(e),e.ref=t)}var kd={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},Wc={...kd.default,mass:1,damping:1,easing:Q3.linear,clamp:!1},vk=class{constructor(){this.velocity=0,Object.assign(this,Wc)}};function wk(e,t,n){n&&(n={...n},Dh(n,t),t={...n,...t}),Dh(e,t),Object.assign(e,t);for(const s in Wc)e[s]==null&&(e[s]=Wc[s]);let{frequency:r,damping:i}=e;const{mass:o}=e;return T.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*o,e.friction=4*Math.PI*i*o/r),e}function Dh(e,t){if(!T.und(t.decay))e.duration=void 0;else{const n=!T.und(t.tension)||!T.und(t.friction);(n||!T.und(t.frequency)||!T.und(t.damping)||!T.und(t.mass))&&(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}}var Fh=[],Sk=class{constructor(){this.changed=!1,this.values=Fh,this.toValues=null,this.fromValues=Fh,this.config=new vk,this.immediate=!1}};function L1(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise((s,a)=>{let l,u,f=eo(n.cancel??(r==null?void 0:r.cancel),t);if(f)w();else{T.und(n.pause)||(i.paused=eo(n.pause,t));let y=r==null?void 0:r.pause;y!==!0&&(y=i.paused||eo(y,t)),l=Je(n.delay||0,t),y?(i.resumeQueue.add(p),o.pause()):(o.resume(),p())}function c(){i.resumeQueue.add(p),i.timeouts.delete(u),u.cancel(),l=u.time-D.now()}function p(){l>0&&!Mt.skipAnimation?(i.delayed=!0,u=D.setTimeout(w,l),i.pauseQueue.add(c),i.timeouts.add(u)):w()}function w(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(c),i.timeouts.delete(u),e<=(i.cancelId||0)&&(f=!0);try{o.start({...n,callId:e,cancel:f},s)}catch(y){a(y)}}})}var Cd=(e,t)=>t.length==1?t[0]:t.some(n=>n.cancelled)?Qr(e.get()):t.every(n=>n.noop)?D1(e.get()):Rt(e.get(),t.every(n=>n.finished)),D1=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Rt=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Qr=e=>({value:e,cancelled:!0,finished:!1});function F1(e,t,n,r){const{callId:i,parentId:o,onRest:s}=t,{asyncTo:a,promise:l}=n;return!o&&e===a&&!t.reset?l:n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const u=dl(t,(x,h)=>h==="onRest"?void 0:x);let f,c;const p=new Promise((x,h)=>(f=x,c=h)),w=x=>{const h=i<=(n.cancelId||0)&&Qr(r)||i!==n.asyncId&&Rt(r,!1);if(h)throw x.result=h,c(x),x},y=(x,h)=>{const d=new Bh,m=new Uh;return(async()=>{if(Mt.skipAnimation)throw Io(n),m.result=Rt(r,!1),c(m),m;w(d);const S=T.obj(x)?{...x}:{...h,to:x};S.parentId=i,Kt(u,(_,k)=>{T.und(S[k])&&(S[k]=_)});const C=await r.start(S);return w(d),n.paused&&await new Promise(_=>{n.resumeQueue.add(_)}),C})()};let v;if(Mt.skipAnimation)return Io(n),Rt(r,!1);try{let x;T.arr(e)?x=(async h=>{for(const d of h)await y(d)})(e):x=Promise.resolve(e(y,r.stop.bind(r))),await Promise.all([x.then(f),p]),v=Rt(r.get(),!0,!1)}catch(x){if(x instanceof Bh)v=x.result;else if(x instanceof Uh)v=x.result;else throw x}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?a:void 0,n.promise=o?l:void 0)}return T.fun(s)&&D.batchedUpdates(()=>{s(v,r,r.item)}),v})()}function Io(e,t){Ji(e.timeouts,n=>n.cancel()),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Bh=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Uh=class extends Error{constructor(){super("SkipAnimationSignal")}},Hc=e=>e instanceof Ed,xk=1,Ed=class extends P1{constructor(){super(...arguments),this.id=xk++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Bt(this);return e&&e.getValue()}to(...e){return Mt.to(this,e)}interpolate(...e){return tk(),Mt.to(this,e)}toJSON(){return this.get()}observerAdded(e){e==1&&this._attach()}observerRemoved(e){e==0&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Po(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||sl.sort(this),Po(this,{type:"priority",parent:this,priority:e})}},hr=Symbol.for("SpringPhase"),B1=1,Yc=2,Qc=4,Cu=e=>(e[hr]&B1)>0,yn=e=>(e[hr]&Yc)>0,Oi=e=>(e[hr]&Qc)>0,Vh=(e,t)=>t?e[hr]|=Yc|B1:e[hr]&=~Yc,Wh=(e,t)=>t?e[hr]|=Qc:e[hr]&=~Qc,kk=class extends Ed{constructor(e,t){if(super(),this.animation=new Sk,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!T.und(e)||!T.und(t)){const n=T.obj(e)?{...e}:{...t,from:e};T.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(yn(this)||this._state.asyncTo)||Oi(this)}get goal(){return qe(this.animation.to)}get velocity(){const e=Bt(this);return e instanceof Qo?e.lastVelocity||0:e.getPayload().map(t=>t.lastVelocity||0)}get hasAnimated(){return Cu(this)}get isAnimating(){return yn(this)}get isPaused(){return Oi(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:o}=r,s=cl(r.to);!s&&vt(r.to)&&(i=Ye(qe(r.to))),r.values.forEach((u,f)=>{if(u.done)return;const c=u.constructor==Ro?1:s?s[f].lastPosition:i[f];let p=r.immediate,w=c;if(!p){if(w=u.lastPosition,o.tension<=0){u.done=!0;return}let y=u.elapsedTime+=e;const v=r.fromValues[f],x=u.v0!=null?u.v0:u.v0=T.arr(o.velocity)?o.velocity[f]:o.velocity;let h;const d=o.precision||(v==c?.005:Math.min(1,Math.abs(c-v)*.001));if(T.und(o.duration))if(o.decay){const m=o.decay===!0?.998:o.decay,S=Math.exp(-(1-m)*y);w=v+x/(1-m)*(1-S),p=Math.abs(u.lastPosition-w)<=d,h=x*S}else{h=u.lastVelocity==null?x:u.lastVelocity;const m=o.restVelocity||d/10,S=o.clamp?0:o.bounce,C=!T.und(S),_=v==c?u.v0>0:v<c;let k,R=!1;const N=1,$=Math.ceil(e/N);for(let K=0;K<$&&(k=Math.abs(h)>m,!(!k&&(p=Math.abs(c-w)<=d,p)));++K){C&&(R=w==c||w>c==_,R&&(h=-h*S,w=c));const Re=-o.tension*1e-6*(w-c),be=-o.friction*.001*h,M=(Re+be)/o.mass;h=h+M*N,w=w+h*N}}else{let m=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,u.durationProgress>0&&(u.elapsedTime=o.duration*u.durationProgress,y=u.elapsedTime+=e)),m=(o.progress||0)+y/this._memoizedDuration,m=m>1?1:m<0?0:m,u.durationProgress=m),w=v+o.easing(m)*(c-v),h=(w-u.lastPosition)/e,p=m==1}u.lastVelocity=h,Number.isNaN(w)&&(console.warn("Got NaN while animating:",this),p=!0)}s&&!s[f].done&&(p=!1),p?u.done=!0:t=!1,u.setValue(w,o.round)&&(n=!0)});const a=Bt(this),l=a.getValue();if(t){const u=qe(r.to);(l!==u||n)&&!o.decay?(a.setValue(u),this._onChange(u)):n&&o.decay&&this._onChange(l),this._stop()}else n&&this._onChange(l)}set(e){return D.batchedUpdates(()=>{this._stop(),this._focus(e),this._set(e)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(yn(this)){const{to:e,config:t}=this.animation;D.batchedUpdates(()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()})}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return T.und(e)?(n=this.queue||[],this.queue=[]):n=[T.obj(e)?e:{...t,to:e}],Promise.all(n.map(r=>this._update(r))).then(r=>Cd(this,r))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Io(this._state,e&&this._lastCallId),D.batchedUpdates(()=>this._stop(t,e)),this}reset(){this._update({reset:!0})}eventObserved(e){e.type=="change"?this._start():e.type=="priority"&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=T.obj(n)?n[t]:n,(n==null||Uc(n))&&(n=void 0),r=T.obj(r)?r[t]:r,r==null&&(r=void 0);const i={to:n,from:r};return Cu(this)||(e.reverse&&([n,r]=[r,n]),r=qe(r),T.und(r)?Bt(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,dl(e,(s,a)=>/^on/.test(a)?$1(s,n):s)),Yh(this,e,"onProps"),bi(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return L1(++this._lastCallId,{key:n,props:e,defaultProps:r,state:o,actions:{pause:()=>{Oi(this)||(Wh(this,!0),Bi(o.pauseQueue),bi(this,"onPause",Rt(this,Ri(this,this.animation.to)),this))},resume:()=>{Oi(this)&&(Wh(this,!1),yn(this)&&this._resume(),Bi(o.resumeQueue),bi(this,"onResume",Rt(this,Ri(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then(s=>{if(e.loop&&s.finished&&!(t&&s.noop)){const a=U1(e);if(a)return this._update(a,!0)}return s})}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Qr(this));const r=!T.und(e.to),i=!T.und(e.from);if(r||i)if(t.callId>this._lastToId)this._lastToId=t.callId;else return n(Qr(this));const{key:o,defaultProps:s,animation:a}=this,{to:l,from:u}=a;let{to:f=l,from:c=u}=e;i&&!r&&(!t.default||T.und(f))&&(f=c),t.reverse&&([f,c]=[c,f]);const p=!rn(c,u);p&&(a.from=c),c=qe(c);const w=!rn(f,l);w&&this._focus(f);const y=Uc(t.to),{config:v}=a,{decay:x,velocity:h}=v;(r||i)&&(v.velocity=0),t.config&&!y&&wk(v,Je(t.config,o),t.config!==s.config?Je(s.config,o):void 0);let d=Bt(this);if(!d||T.und(f))return n(Rt(this,!0));const m=T.und(t.reset)?i&&!t.default:!T.und(c)&&eo(t.reset,o),S=m?c:this.get(),C=bo(f),_=T.num(C)||T.arr(C)||ul(C),k=!y&&(!_||eo(s.immediate||t.immediate,o));if(w){const K=Bc(f);if(K!==d.constructor)if(k)d=this._set(C);else throw Error(`Cannot animate between ${d.constructor.name} and ${K.name}, as the "to" prop suggests`)}const R=d.constructor;let N=vt(f),$=!1;if(!N){const K=m||!Cu(this)&&p;(w||K)&&($=rn(bo(S),C),N=!$),(!rn(a.immediate,k)&&!k||!rn(v.decay,x)||!rn(v.velocity,h))&&(N=!0)}if($&&yn(this)&&(a.changed&&!m?N=!0:N||this._stop(l)),!y&&((N||vt(l))&&(a.values=d.getPayload(),a.toValues=vt(f)?null:R==Ro?[1]:Ye(C)),a.immediate!=k&&(a.immediate=k,!k&&!m&&this._set(l)),N)){const{onRest:K}=a;L(Ek,be=>Yh(this,t,be));const Re=Rt(this,Ri(this,l));Bi(this._pendingCalls,Re),this._pendingCalls.add(n),a.changed&&D.batchedUpdates(()=>{var be;a.changed=!m,K==null||K(Re,this),m?Je(s.onRest,Re):(be=a.onStart)==null||be.call(a,Re,this)})}m&&this._set(S),y?n(F1(t.to,t,this._state,this)):N?this._start():yn(this)&&!w?this._pendingCalls.add(n):n(D1(S))}_focus(e){const t=this.animation;e!==t.to&&($h(this)&&this._detach(),t.to=e,$h(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;vt(t)&&(vi(t,this),Hc(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;vt(e)&&jo(e,this)}_set(e,t=!0){const n=qe(e);if(!T.und(n)){const r=Bt(this);if(!r||!rn(n,r.getValue())){const i=Bc(n);!r||r.constructor!=i?Sd(this,i.create(n)):r.setValue(n),r&&D.batchedUpdates(()=>{this._onChange(n,t)})}}return Bt(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,bi(this,"onStart",Rt(this,Ri(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Je(this.animation.onChange,e,this)),Je(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Bt(this).reset(qe(e.to)),e.immediate||(e.fromValues=e.values.map(t=>t.lastPosition)),yn(this)||(Vh(this,!0),Oi(this)||this._resume())}_resume(){Mt.skipAnimation?this.finish():sl.start(this)}_stop(e,t){if(yn(this)){Vh(this,!1);const n=this.animation;L(n.values,i=>{i.done=!0}),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Po(this,{type:"idle",parent:this});const r=t?Qr(this.get()):Rt(this.get(),Ri(this,e??n.to));Bi(this._pendingCalls,r),n.changed&&(n.changed=!1,bi(this,"onRest",r,this))}}};function Ri(e,t){const n=bo(t),r=bo(e.get());return rn(r,n)}function U1(e,t=e.loop,n=e.to){const r=Je(t);if(r){const i=r!==!0&&xd(r),o=(i||e).reverse,s=!i||i.reset;return zo({...e,loop:t,default:!1,pause:void 0,to:!o||Uc(n)?n:void 0,from:s?e.from:void 0,reset:s,...i})}}function zo(e){const{to:t,from:n}=e=xd(e),r=new Set;return T.obj(t)&&Hh(t,r),T.obj(n)&&Hh(n,r),e.keys=r.size?Array.from(r):null,e}function Ck(e){const t=zo(e);return T.und(t.default)&&(t.default=dl(t)),t}function Hh(e,t){Kt(e,(n,r)=>n!=null&&t.add(r))}var Ek=["onStart","onRest","onChange","onPause","onResume"];function Yh(e,t,n){e.animation[n]=t[n]!==N1(t,n)?$1(t[n],e.key):void 0}function bi(e,t,...n){var r,i,o,s;(i=(r=e.animation)[t])==null||i.call(r,...n),(s=(o=e.defaultProps)[t])==null||s.call(o,...n)}var _k=["onStart","onChange","onRest"],Tk=1,V1=class{constructor(e,t){this.id=Tk++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(e=>e.idle&&!e.isDelayed&&!e.isPaused)}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each((t,n)=>e[n]=t.get()),e}set(e){for(const t in e){const n=e[t];T.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(zo(e)),this}start(e){let{queue:t}=this;return e?t=Ye(e).map(zo):this.queue=[],this._flush?this._flush(this,t):(G1(this,t),Gc(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;L(Ye(t),r=>n[r].stop(!!e))}else Io(this._state,this._lastAsyncId),this.each(n=>n.stop(!!e));return this}pause(e){if(T.und(e))this.start({pause:!0});else{const t=this.springs;L(Ye(e),n=>t[n].pause())}return this}resume(e){if(T.und(e))this.start({pause:!1});else{const t=this.springs;L(Ye(e),n=>t[n].resume())}return this}each(e){Kt(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Ji(e,([a,l])=>{l.value=this.get(),a(l,this,this._item)}));const o=!r&&this._started,s=i||o&&n.size?this.get():null;i&&t.size&&Ji(t,([a,l])=>{l.value=s,a(l,this,this._item)}),o&&(this._started=!1,Ji(n,([a,l])=>{l.value=s,a(l,this,this._item)}))}eventObserved(e){if(e.type=="change")this._changed.add(e.parent),e.idle||this._active.add(e.parent);else if(e.type=="idle")this._active.delete(e.parent);else return;D.onFrame(this._onFrame)}};function Gc(e,t){return Promise.all(t.map(n=>W1(e,n))).then(n=>Cd(e,n))}async function W1(e,t,n){const{keys:r,to:i,from:o,loop:s,onRest:a,onResolve:l}=t,u=T.obj(t.default)&&t.default;s&&(t.loop=!1),i===!1&&(t.to=null),o===!1&&(t.from=null);const f=T.arr(i)||T.fun(i)?i:void 0;f?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):L(_k,v=>{const x=t[v];if(T.fun(x)){const h=e._events[v];t[v]=({finished:d,cancelled:m})=>{const S=h.get(x);S?(d||(S.finished=!1),m&&(S.cancelled=!0)):h.set(x,{value:null,finished:d||!1,cancelled:m||!1})},u&&(u[v]=t[v])}});const c=e._state;t.pause===!c.paused?(c.paused=t.pause,Bi(t.pause?c.pauseQueue:c.resumeQueue)):c.paused&&(t.pause=!0);const p=(r||Object.keys(e.springs)).map(v=>e.springs[v].start(t)),w=t.cancel===!0||N1(t,"cancel")===!0;(f||w&&c.asyncId)&&p.push(L1(++e._lastAsyncId,{props:t,state:c,actions:{pause:Lc,resume:Lc,start(v,x){w?(Io(c,e._lastAsyncId),x(Qr(e))):(v.onRest=a,x(F1(f,v,c,e)))}}})),c.paused&&await new Promise(v=>{c.resumeQueue.add(v)});const y=Cd(e,await Promise.all(p));if(s&&y.finished&&!(n&&y.noop)){const v=U1(t,s,i);if(v)return G1(e,[v]),W1(e,v,!0)}return l&&D.batchedUpdates(()=>l(y,e,e.item)),y}function Kc(e,t){const n={...e.springs};return t&&L(Ye(t),r=>{T.und(r.keys)&&(r=zo(r)),T.obj(r.to)||(r={...r,to:void 0}),Q1(n,r,i=>Y1(i))}),H1(e,n),n}function H1(e,t){Kt(t,(n,r)=>{e.springs[r]||(e.springs[r]=n,vi(n,e))})}function Y1(e,t){const n=new kk;return n.key=e,t&&vi(n,t),n}function Q1(e,t,n){t.keys&&L(t.keys,r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)})}function G1(e,t){L(t,n=>{Q1(e.springs,n,r=>Y1(r,e))})}var Go=({children:e,...t})=>{const n=E.useContext(Ra),r=t.pause||!!n.pause,i=t.immediate||!!n.immediate;t=ok(()=>({pause:r,immediate:i}),[r,i]);const{Provider:o}=Ra;return E.createElement(o,{value:t},e)},Ra=Pk(Go,{});Go.Provider=Ra.Provider;Go.Consumer=Ra.Consumer;function Pk(e,t){return Object.assign(e,E.createContext(t)),e.Provider._context=e,e.Consumer._context=e,e}var K1=()=>{const e=[],t=function(r){rk();const i=[];return L(e,(o,s)=>{if(T.und(r))i.push(o.start());else{const a=n(r,o,s);a&&i.push(o.start(a))}}),i};t.current=e,t.add=function(r){e.includes(r)||e.push(r)},t.delete=function(r){const i=e.indexOf(r);~i&&e.splice(i,1)},t.pause=function(){return L(e,r=>r.pause(...arguments)),this},t.resume=function(){return L(e,r=>r.resume(...arguments)),this},t.set=function(r){L(e,(i,o)=>{const s=T.fun(r)?r(o,i):r;s&&i.set(s)})},t.start=function(r){const i=[];return L(e,(o,s)=>{if(T.und(r))i.push(o.start());else{const a=this._getProps(r,o,s);a&&i.push(o.start(a))}}),i},t.stop=function(){return L(e,r=>r.stop(...arguments)),this},t.update=function(r){return L(e,(i,o)=>i.update(this._getProps(r,i,o))),this};const n=function(r,i,o){return T.fun(r)?r(o,i):r};return t._getProps=n,t};function jk(e,t,n){const r=T.fun(t)&&t;r&&!n&&(n=[]);const i=E.useMemo(()=>r||arguments.length==3?K1():void 0,[]),o=E.useRef(0),s=vd(),a=E.useMemo(()=>({ctrls:[],queue:[],flush(h,d){const m=Kc(h,d);return o.current>0&&!a.queue.length&&!Object.keys(m).some(C=>!h.springs[C])?Gc(h,d):new Promise(C=>{H1(h,m),a.queue.push(()=>{C(Gc(h,d))}),s()})}}),[]),l=E.useRef([...a.ctrls]),u=[],f=Fc(e)||0;E.useMemo(()=>{L(l.current.slice(e,f),h=>{Vc(h,i),h.stop(!0)}),l.current.length=e,c(f,e)},[e]),E.useMemo(()=>{c(0,Math.min(f,e))},n);function c(h,d){for(let m=h;m<d;m++){const S=l.current[m]||(l.current[m]=new V1(null,a.flush)),C=r?r(m,S):t[m];C&&(u[m]=Ck(C))}}const p=l.current.map((h,d)=>Kc(h,u[d])),w=E.useContext(Go),y=Fc(w),v=w!==y&&M1(w);or(()=>{o.current++,a.ctrls=l.current;const{queue:h}=a;h.length&&(a.queue=[],L(h,d=>d())),L(l.current,(d,m)=>{i==null||i.add(d),v&&d.start({default:w});const S=u[m];S&&(A1(d,S.ref),d.ref?d.queue.push(S):d.start(S))})}),wd(()=>()=>{L(a.ctrls,h=>h.stop(!0))});const x=p.map(h=>({...h}));return i?[x,i]:x}function Ok(e,t){const n=T.fun(e),[[r],i]=jk(1,n?e:[e],n?t||[]:t);return n||arguments.length==2?[r,i]:r}function Rk(e,t,n){const r=T.fun(t)&&t,{reset:i,sort:o,trail:s=0,expires:a=!0,exitBeforeEnter:l=!1,onDestroyed:u,ref:f,config:c}=r?r():t,p=E.useMemo(()=>r||arguments.length==3?K1():void 0,[]),w=Ye(e),y=[],v=E.useRef(null),x=i?null:v.current;or(()=>{v.current=y}),wd(()=>(L(y,M=>{p==null||p.add(M.ctrl),M.ctrl.ref=p}),()=>{L(v.current,M=>{M.expired&&clearTimeout(M.expirationId),Vc(M.ctrl,p),M.ctrl.stop(!0)})}));const h=Ik(w,r?r():t,x),d=i&&v.current||[];or(()=>L(d,({ctrl:M,item:B,key:de})=>{Vc(M,p),Je(u,B,de)}));const m=[];if(x&&L(x,(M,B)=>{M.expired?(clearTimeout(M.expirationId),d.push(M)):(B=m[B]=h.indexOf(M.key),~B&&(y[B]=M))}),L(w,(M,B)=>{y[B]||(y[B]={key:h[B],item:M,phase:"mount",ctrl:new V1},y[B].ctrl.item=M)}),m.length){let M=-1;const{leave:B}=r?r():t;L(m,(de,se)=>{const O=x[se];~de?(M=y.indexOf(O),y[M]={...O,item:w[de]}):B&&y.splice(++M,0,O)})}T.fun(o)&&y.sort((M,B)=>o(M.item,B.item));let S=-s;const C=vd(),_=dl(t),k=new Map,R=E.useRef(new Map),N=E.useRef(!1);L(y,(M,B)=>{const de=M.key,se=M.phase,O=r?r():t;let I,z;const X=Je(O.delay||0,de);if(se=="mount")I=O.enter,z="enter";else{const me=h.indexOf(de)<0;if(se!="leave")if(me)I=O.leave,z="leave";else if(I=O.update)z="update";else return;else if(!me)I=O.enter,z="enter";else return}if(I=Je(I,M.item,B),I=T.obj(I)?xd(I):{to:I},!I.config){const me=c||_.config;I.config=Je(me,M.item,B,z)}S+=s;const W={..._,delay:X+S,ref:f,immediate:O.immediate,reset:!1,...I};if(z=="enter"&&T.und(W.from)){const me=r?r():t,xe=T.und(me.initial)||x?me.from:me.initial;W.from=Je(xe,M.item,B)}const{onResolve:Xt}=W;W.onResolve=me=>{Je(Xt,me);const xe=v.current,Ee=xe.find(At=>At.key===de);if(Ee&&!(me.cancelled&&Ee.phase!="update")&&Ee.ctrl.idle){const At=xe.every(We=>We.ctrl.idle);if(Ee.phase=="leave"){const We=Je(a,Ee.item);if(We!==!1){const Yn=We===!0?0:We;if(Ee.expired=!0,!At&&Yn>0){Yn<=2147483647&&(Ee.expirationId=setTimeout(C,Yn));return}}}At&&xe.some(We=>We.expired)&&(R.current.delete(Ee),l&&(N.current=!0),C())}};const Xe=Kc(M.ctrl,W);z==="leave"&&l?R.current.set(M,{phase:z,springs:Xe,payload:W}):k.set(M,{phase:z,springs:Xe,payload:W})});const $=E.useContext(Go),K=Fc($),Re=$!==K&&M1($);or(()=>{Re&&L(y,M=>{M.ctrl.start({default:$})})},[$]),L(k,(M,B)=>{if(R.current.size){const de=y.findIndex(se=>se.key===B.key);y.splice(de,1)}}),or(()=>{L(R.current.size?R.current:k,({phase:M,payload:B},de)=>{const{ctrl:se}=de;de.phase=M,p==null||p.add(se),Re&&M=="enter"&&se.start({default:$}),B&&(A1(se,B.ref),(se.ref||p)&&!N.current?se.update(B):(se.start(B),N.current&&(N.current=!1)))})},i?void 0:n);const be=M=>E.createElement(E.Fragment,null,y.map((B,de)=>{const{springs:se}=k.get(B)||B.ctrl,O=M({...se},B.item,B,de);return O&&O.type?E.createElement(O.type,{...O.props,key:T.str(B.key)||T.num(B.key)?B.key:B.ctrl.id,ref:O.ref}):O}));return p?[be,p]:be}var bk=1;function Ik(e,{key:t,keys:n=t},r){if(n===null){const i=new Set;return e.map(o=>{const s=r&&r.find(a=>a.item===o&&a.phase!=="leave"&&!i.has(a));return s?(i.add(s),s.key):bk++})}return T.und(n)?e:T.fun(n)?e.map(n):Ye(n)}var zk=class extends Ed{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=_o(...t);const n=this._get(),r=Bc(n);Sd(this,r.create(n))}advance(e){const t=this._get(),n=this.get();rn(t,n)||(Bt(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Qh(this._active)&&Eu(this)}_get(){const e=T.arr(this.source)?this.source.map(qe):Ye(qe(this.source));return this.calc(...e)}_start(){this.idle&&!Qh(this._active)&&(this.idle=!1,L(cl(this),e=>{e.done=!1}),Mt.skipAnimation?(D.batchedUpdates(()=>this.advance()),Eu(this)):sl.start(this))}_attach(){let e=1;L(Ye(this.source),t=>{vt(t)&&vi(t,this),Hc(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))}),this.priority=e,this._start()}_detach(){L(Ye(this.source),e=>{vt(e)&&jo(e,this)}),this._active.clear(),Eu(this)}eventObserved(e){e.type=="change"?e.idle?this.advance():(this._active.add(e.parent),this._start()):e.type=="idle"?this._active.delete(e.parent):e.type=="priority"&&(this.priority=Ye(this.source).reduce((t,n)=>Math.max(t,(Hc(n)?n.priority:0)+1),0))}};function $k(e){return e.idle!==!1}function Qh(e){return!e.size||Array.from(e).every($k)}function Eu(e){e.idle||(e.idle=!0,L(cl(e),t=>{t.done=!0}),Po(e,{type:"idle",parent:e}))}Mt.assign({createStringInterpolator:R1,to:(e,t)=>new zk(e,t)});var X1=/^--/;function Nk(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t=="number"&&t!==0&&!X1.test(e)&&!(to.hasOwnProperty(e)&&to[e])?t+"px":(""+t).trim()}var Gh={};function Mk(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n=e.nodeName==="filter"||e.parentNode&&e.parentNode.nodeName==="filter",{style:r,children:i,scrollTop:o,scrollLeft:s,viewBox:a,...l}=t,u=Object.values(l),f=Object.keys(l).map(c=>n||e.hasAttribute(c)?c:Gh[c]||(Gh[c]=c.replace(/([A-Z])/g,p=>"-"+p.toLowerCase())));i!==void 0&&(e.textContent=i);for(const c in r)if(r.hasOwnProperty(c)){const p=Nk(c,r[c]);X1.test(c)?e.style.setProperty(c,p):e.style[c]=p}f.forEach((c,p)=>{e.setAttribute(c,u[p])}),o!==void 0&&(e.scrollTop=o),s!==void 0&&(e.scrollLeft=s),a!==void 0&&e.setAttribute("viewBox",a)}var to={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ak=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1),Lk=["Webkit","Ms","Moz","O"];to=Object.keys(to).reduce((e,t)=>(Lk.forEach(n=>e[Ak(n,t)]=e[t]),e),to);var Dk=/^(matrix|translate|scale|rotate|skew)/,Fk=/^(translate)/,Bk=/^(rotate|skew)/,_u=(e,t)=>T.num(e)&&e!==0?e+t:e,Qs=(e,t)=>T.arr(e)?e.every(n=>Qs(n,t)):T.num(e)?e===t:parseFloat(e)===t,Uk=class extends fl{constructor({x:e,y:t,z:n,...r}){const i=[],o=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),o.push(s=>[`translate3d(${s.map(a=>_u(a,"px")).join(",")})`,Qs(s,0)])),Kt(r,(s,a)=>{if(a==="transform")i.push([s||""]),o.push(l=>[l,l===""]);else if(Dk.test(a)){if(delete r[a],T.und(s))return;const l=Fk.test(a)?"px":Bk.test(a)?"deg":"";i.push(Ye(s)),o.push(a==="rotate3d"?([u,f,c,p])=>[`rotate3d(${u},${f},${c},${_u(p,l)})`,Qs(p,0)]:u=>[`${a}(${u.map(f=>_u(f,l)).join(",")})`,Qs(u,a.startsWith("scale")?1:0)])}}),i.length&&(r.transform=new Vk(i,o)),super(r)}},Vk=class extends P1{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return L(this.inputs,(n,r)=>{const i=qe(n[0]),[o,s]=this.transforms[r](T.arr(i)?i:n.map(qe));e+=" "+o,t=t&&s}),t?"none":e}observerAdded(e){e==1&&L(this.inputs,t=>L(t,n=>vt(n)&&vi(n,this)))}observerRemoved(e){e==0&&L(this.inputs,t=>L(t,n=>vt(n)&&jo(n,this)))}eventObserved(e){e.type=="change"&&(this._value=null),Po(this,e)}},Wk=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];Mt.assign({batchedUpdates:jg.unstable_batchedUpdates,createStringInterpolator:R1,colors:$3});var Hk=pk(Wk,{applyAnimatedValues:Mk,createAnimatedStyle:e=>new Uk(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),Kh=Hk.animated,Lr=function(){return Lr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Lr.apply(this,arguments)};function Yk(e){var t=e.direction,n=t===void 0?"up":t,r=e.inline,i=r===void 0?!1:r,o=e.springConfig,s=o===void 0?kd.default:o,a=e.delay,l=a===void 0?0:a,u=e.className,f=e.style,c=e.translateValue,p=c===void 0?"100%":c,w=e.children,y=E.useRef(!0),v=n==="down"?"-".concat(p):p,x=n==="down"?p:"-".concat(p),h=Rk([w],{enter:{opacity:1,transform:"translateY(0%)"},from:{opacity:0,transform:"translateY(".concat(v,")")},leave:{opacity:0,transform:"translateY(".concat(x,")"),position:"absolute"},config:s,immediate:y.current,delay:y.current?void 0:l}),d=E.useState(0),m=d[0],S=d[1],C=E.useRef(null),_=E.useRef("auto");E.useEffect(function(){y.current=!1;var R=C.current;if(R){var N=R.getBoundingClientRect(),$=N.width,K=N.height;S($),_.current=K}},[w,S,C]);var k=Ok({to:{width:m},config:s,immediate:y.current,delay:y.current?void 0:l});return at.createElement(Kh.div,{className:"text-transition ".concat(u),style:Lr(Lr(Lr({},i&&!y.current?k:void 0),f),{whiteSpace:i?"nowrap":"normal",display:i?"inline-flex":"flex",height:_.current})},h(function(R,N){return at.createElement(Kh.div,{style:Lr({},R),ref:N===w?C:void 0,children:N})}))}const Xh=["Suplementacja","Witaminy","Preparaty odchudzające","Odżywki","Minerały"];function Qk(){const[e,t]=E.useState(0);return E.useEffect(()=>{const n=setInterval(()=>t(r=>r+1),3e3);return()=>clearTimeout(n)},[]),g.jsx(Yk,{springConfig:kd.stiff,inline:!0,direction:"down",children:Xh[e%Xh.length]})}function Gk(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Kk(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Xk=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Kk(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Gk(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Fe="-ms-",ba="-moz-",Y="-webkit-",q1="comm",_d="rule",Td="decl",qk="@import",J1="@keyframes",Jk="@layer",Zk=Math.abs,pl=String.fromCharCode,e2=Object.assign;function t2(e,t){return $e(e,0)^45?(((t<<2^$e(e,0))<<2^$e(e,1))<<2^$e(e,2))<<2^$e(e,3):0}function Z1(e){return e.trim()}function n2(e,t){return(e=t.exec(e))?e[0]:e}function Q(e,t,n){return e.replace(t,n)}function Xc(e,t){return e.indexOf(t)}function $e(e,t){return e.charCodeAt(t)|0}function $o(e,t,n){return e.slice(t,n)}function Vt(e){return e.length}function Pd(e){return e.length}function xs(e,t){return t.push(e),e}function r2(e,t){return e.map(t).join("")}var hl=1,fi=1,ey=0,it=0,ve=0,wi="";function ml(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:hl,column:fi,length:s,return:""}}function Ii(e,t){return e2(ml("",null,null,"",null,null,0),e,{length:-e.length},t)}function i2(){return ve}function o2(){return ve=it>0?$e(wi,--it):0,fi--,ve===10&&(fi=1,hl--),ve}function ct(){return ve=it<ey?$e(wi,it++):0,fi++,ve===10&&(fi=1,hl++),ve}function Gt(){return $e(wi,it)}function Gs(){return it}function Ko(e,t){return $o(wi,e,t)}function No(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ty(e){return hl=fi=1,ey=Vt(wi=e),it=0,[]}function ny(e){return wi="",e}function Ks(e){return Z1(Ko(it-1,qc(e===91?e+2:e===40?e+1:e)))}function s2(e){for(;(ve=Gt())&&ve<33;)ct();return No(e)>2||No(ve)>3?"":" "}function a2(e,t){for(;--t&&ct()&&!(ve<48||ve>102||ve>57&&ve<65||ve>70&&ve<97););return Ko(e,Gs()+(t<6&&Gt()==32&&ct()==32))}function qc(e){for(;ct();)switch(ve){case e:return it;case 34:case 39:e!==34&&e!==39&&qc(ve);break;case 40:e===41&&qc(e);break;case 92:ct();break}return it}function l2(e,t){for(;ct()&&e+ve!==57;)if(e+ve===84&&Gt()===47)break;return"/*"+Ko(t,it-1)+"*"+pl(e===47?e:ct())}function u2(e){for(;!No(Gt());)ct();return Ko(e,it)}function c2(e){return ny(Xs("",null,null,null,[""],e=ty(e),0,[0],e))}function Xs(e,t,n,r,i,o,s,a,l){for(var u=0,f=0,c=s,p=0,w=0,y=0,v=1,x=1,h=1,d=0,m="",S=i,C=o,_=r,k=m;x;)switch(y=d,d=ct()){case 40:if(y!=108&&$e(k,c-1)==58){Xc(k+=Q(Ks(d),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:k+=Ks(d);break;case 9:case 10:case 13:case 32:k+=s2(y);break;case 92:k+=a2(Gs()-1,7);continue;case 47:switch(Gt()){case 42:case 47:xs(f2(l2(ct(),Gs()),t,n),l);break;default:k+="/"}break;case 123*v:a[u++]=Vt(k)*h;case 125*v:case 59:case 0:switch(d){case 0:case 125:x=0;case 59+f:h==-1&&(k=Q(k,/\f/g,"")),w>0&&Vt(k)-c&&xs(w>32?Jh(k+";",r,n,c-1):Jh(Q(k," ","")+";",r,n,c-2),l);break;case 59:k+=";";default:if(xs(_=qh(k,t,n,u,f,i,a,m,S=[],C=[],c),o),d===123)if(f===0)Xs(k,t,_,_,S,o,c,a,C);else switch(p===99&&$e(k,3)===110?100:p){case 100:case 108:case 109:case 115:Xs(e,_,_,r&&xs(qh(e,_,_,0,0,i,a,m,i,S=[],c),C),i,C,c,a,r?S:C);break;default:Xs(k,_,_,_,[""],C,0,a,C)}}u=f=w=0,v=h=1,m=k="",c=s;break;case 58:c=1+Vt(k),w=y;default:if(v<1){if(d==123)--v;else if(d==125&&v++==0&&o2()==125)continue}switch(k+=pl(d),d*v){case 38:h=f>0?1:(k+="\f",-1);break;case 44:a[u++]=(Vt(k)-1)*h,h=1;break;case 64:Gt()===45&&(k+=Ks(ct())),p=Gt(),f=c=Vt(m=k+=u2(Gs())),d++;break;case 45:y===45&&Vt(k)==2&&(v=0)}}return o}function qh(e,t,n,r,i,o,s,a,l,u,f){for(var c=i-1,p=i===0?o:[""],w=Pd(p),y=0,v=0,x=0;y<r;++y)for(var h=0,d=$o(e,c+1,c=Zk(v=s[y])),m=e;h<w;++h)(m=Z1(v>0?p[h]+" "+d:Q(d,/&\f/g,p[h])))&&(l[x++]=m);return ml(e,t,n,i===0?_d:a,l,u,f)}function f2(e,t,n){return ml(e,t,n,q1,pl(i2()),$o(e,2,-2),0)}function Jh(e,t,n,r){return ml(e,t,n,Td,$o(e,0,r),$o(e,r+1,-1),r)}function Gr(e,t){for(var n="",r=Pd(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function d2(e,t,n,r){switch(e.type){case Jk:if(e.children.length)break;case qk:case Td:return e.return=e.return||e.value;case q1:return"";case J1:return e.return=e.value+"{"+Gr(e.children,r)+"}";case _d:e.value=e.props.join(",")}return Vt(n=Gr(e.children,r))?e.return=e.value+"{"+n+"}":""}function p2(e){var t=Pd(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function h2(e){return function(t){t.root||(t=t.return)&&e(t)}}var m2=function(t,n,r){for(var i=0,o=0;i=o,o=Gt(),i===38&&o===12&&(n[r]=1),!No(o);)ct();return Ko(t,it)},g2=function(t,n){var r=-1,i=44;do switch(No(i)){case 0:i===38&&Gt()===12&&(n[r]=1),t[r]+=m2(it-1,n,r);break;case 2:t[r]+=Ks(i);break;case 4:if(i===44){t[++r]=Gt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=pl(i)}while(i=ct());return t},y2=function(t,n){return ny(g2(ty(t),n))},Zh=new WeakMap,v2=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Zh.get(r))&&!i){Zh.set(t,!0);for(var o=[],s=y2(n,o),a=r.props,l=0,u=0;l<s.length;l++)for(var f=0;f<a.length;f++,u++)t.props[u]=o[l]?s[l].replace(/&\f/g,a[f]):a[f]+" "+s[l]}}},w2=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function ry(e,t){switch(t2(e,t)){case 5103:return Y+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+e+ba+e+Fe+e+e;case 6828:case 4268:return Y+e+Fe+e+e;case 6165:return Y+e+Fe+"flex-"+e+e;case 5187:return Y+e+Q(e,/(\w+).+(:[^]+)/,Y+"box-$1$2"+Fe+"flex-$1$2")+e;case 5443:return Y+e+Fe+"flex-item-"+Q(e,/flex-|-self/,"")+e;case 4675:return Y+e+Fe+"flex-line-pack"+Q(e,/align-content|flex-|-self/,"")+e;case 5548:return Y+e+Fe+Q(e,"shrink","negative")+e;case 5292:return Y+e+Fe+Q(e,"basis","preferred-size")+e;case 6060:return Y+"box-"+Q(e,"-grow","")+Y+e+Fe+Q(e,"grow","positive")+e;case 4554:return Y+Q(e,/([^-])(transform)/g,"$1"+Y+"$2")+e;case 6187:return Q(Q(Q(e,/(zoom-|grab)/,Y+"$1"),/(image-set)/,Y+"$1"),e,"")+e;case 5495:case 3959:return Q(e,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return Q(Q(e,/(.+:)(flex-)?(.*)/,Y+"box-pack:$3"+Fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Y+e+e;case 4095:case 3583:case 4068:case 2532:return Q(e,/(.+)-inline(.+)/,Y+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Vt(e)-1-t>6)switch($e(e,t+1)){case 109:if($e(e,t+4)!==45)break;case 102:return Q(e,/(.+:)(.+)-([^]+)/,"$1"+Y+"$2-$3$1"+ba+($e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Xc(e,"stretch")?ry(Q(e,"stretch","fill-available"),t)+e:e}break;case 4949:if($e(e,t+1)!==115)break;case 6444:switch($e(e,Vt(e)-3-(~Xc(e,"!important")&&10))){case 107:return Q(e,":",":"+Y)+e;case 101:return Q(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Y+($e(e,14)===45?"inline-":"")+"box$3$1"+Y+"$2$3$1"+Fe+"$2box$3")+e}break;case 5936:switch($e(e,t+11)){case 114:return Y+e+Fe+Q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Y+e+Fe+Q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Y+e+Fe+Q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Y+e+Fe+e+e}return e}var S2=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Td:t.return=ry(t.value,t.length);break;case J1:return Gr([Ii(t,{value:Q(t.value,"@","@"+Y)})],i);case _d:if(t.length)return r2(t.props,function(o){switch(n2(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Gr([Ii(t,{props:[Q(o,/:(read-\w+)/,":"+ba+"$1")]})],i);case"::placeholder":return Gr([Ii(t,{props:[Q(o,/:(plac\w+)/,":"+Y+"input-$1")]}),Ii(t,{props:[Q(o,/:(plac\w+)/,":"+ba+"$1")]}),Ii(t,{props:[Q(o,/:(plac\w+)/,Fe+"input-$1")]})],i)}return""})}},x2=[S2],k2=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var x=v.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||x2,o={},s,a=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var x=v.getAttribute("data-emotion").split(" "),h=1;h<x.length;h++)o[x[h]]=!0;a.push(v)});var l,u=[v2,w2];{var f,c=[d2,h2(function(v){f.insert(v)})],p=p2(u.concat(i,c)),w=function(x){return Gr(c2(x),p)};l=function(x,h,d,m){f=d,w(x?x+"{"+h.styles+"}":h.styles),m&&(y.inserted[h.name]=!0)}}var y={key:n,sheet:new Xk({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return y.sheet.hydrate(a),y},iy={exports:{}},J={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe=typeof Symbol=="function"&&Symbol.for,jd=Oe?Symbol.for("react.element"):60103,Od=Oe?Symbol.for("react.portal"):60106,gl=Oe?Symbol.for("react.fragment"):60107,yl=Oe?Symbol.for("react.strict_mode"):60108,vl=Oe?Symbol.for("react.profiler"):60114,wl=Oe?Symbol.for("react.provider"):60109,Sl=Oe?Symbol.for("react.context"):60110,Rd=Oe?Symbol.for("react.async_mode"):60111,xl=Oe?Symbol.for("react.concurrent_mode"):60111,kl=Oe?Symbol.for("react.forward_ref"):60112,Cl=Oe?Symbol.for("react.suspense"):60113,C2=Oe?Symbol.for("react.suspense_list"):60120,El=Oe?Symbol.for("react.memo"):60115,_l=Oe?Symbol.for("react.lazy"):60116,E2=Oe?Symbol.for("react.block"):60121,_2=Oe?Symbol.for("react.fundamental"):60117,T2=Oe?Symbol.for("react.responder"):60118,P2=Oe?Symbol.for("react.scope"):60119;function mt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case jd:switch(e=e.type,e){case Rd:case xl:case gl:case vl:case yl:case Cl:return e;default:switch(e=e&&e.$$typeof,e){case Sl:case kl:case _l:case El:case wl:return e;default:return t}}case Od:return t}}}function oy(e){return mt(e)===xl}J.AsyncMode=Rd;J.ConcurrentMode=xl;J.ContextConsumer=Sl;J.ContextProvider=wl;J.Element=jd;J.ForwardRef=kl;J.Fragment=gl;J.Lazy=_l;J.Memo=El;J.Portal=Od;J.Profiler=vl;J.StrictMode=yl;J.Suspense=Cl;J.isAsyncMode=function(e){return oy(e)||mt(e)===Rd};J.isConcurrentMode=oy;J.isContextConsumer=function(e){return mt(e)===Sl};J.isContextProvider=function(e){return mt(e)===wl};J.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===jd};J.isForwardRef=function(e){return mt(e)===kl};J.isFragment=function(e){return mt(e)===gl};J.isLazy=function(e){return mt(e)===_l};J.isMemo=function(e){return mt(e)===El};J.isPortal=function(e){return mt(e)===Od};J.isProfiler=function(e){return mt(e)===vl};J.isStrictMode=function(e){return mt(e)===yl};J.isSuspense=function(e){return mt(e)===Cl};J.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===gl||e===xl||e===vl||e===yl||e===Cl||e===C2||typeof e=="object"&&e!==null&&(e.$$typeof===_l||e.$$typeof===El||e.$$typeof===wl||e.$$typeof===Sl||e.$$typeof===kl||e.$$typeof===_2||e.$$typeof===T2||e.$$typeof===P2||e.$$typeof===E2)};J.typeOf=mt;iy.exports=J;var j2=iy.exports,sy=j2,O2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},R2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ay={};ay[sy.ForwardRef]=O2;ay[sy.Memo]=R2;var b2=!0;function ly(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var bd=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||b2===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},uy=function(t,n,r){bd(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function I2(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var z2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$2=/[A-Z]|^ms/g,N2=/_EMO_([^_]+?)_([^]*?)_EMO_/g,cy=function(t){return t.charCodeAt(1)===45},em=function(t){return t!=null&&typeof t!="boolean"},Tu=tx(function(e){return cy(e)?e:e.replace($2,"-$&").toLowerCase()}),tm=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(N2,function(r,i,o){return Wt={name:i,styles:o,next:Wt},i})}return z2[t]!==1&&!cy(t)&&typeof n=="number"&&n!==0?n+"px":n};function Mo(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Wt={name:n.name,styles:n.styles,next:Wt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Wt={name:r.name,styles:r.styles,next:Wt},r=r.next;var i=n.styles+";";return i}return M2(e,t,n)}case"function":{if(e!==void 0){var o=Wt,s=n(e);return Wt=o,Mo(e,t,s)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function M2(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Mo(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")t!=null&&t[s]!==void 0?r+=o+"{"+t[s]+"}":em(s)&&(r+=Tu(o)+":"+tm(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var a=0;a<s.length;a++)em(s[a])&&(r+=Tu(o)+":"+tm(o,s[a])+";");else{var l=Mo(e,t,s);switch(o){case"animation":case"animationName":{r+=Tu(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var nm=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Wt,Id=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Wt=void 0;var s=t[0];s==null||s.raw===void 0?(i=!1,o+=Mo(r,n,s)):o+=s[0];for(var a=1;a<t.length;a++)o+=Mo(r,n,t[a]),i&&(o+=s[a]);nm.lastIndex=0;for(var l="",u;(u=nm.exec(o))!==null;)l+="-"+u[1];var f=I2(o)+l;return{name:f,styles:o,next:Wt}},A2=function(t){return t()},L2=bu.useInsertionEffect?bu.useInsertionEffect:!1,fy=L2||A2,zd={}.hasOwnProperty,dy=E.createContext(typeof HTMLElement<"u"?k2({key:"css"}):null);dy.Provider;var py=function(t){return E.forwardRef(function(n,r){var i=E.useContext(dy);return t(n,i,r)})},hy=E.createContext({}),Jc="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",D2=function(t,n){var r={};for(var i in n)zd.call(n,i)&&(r[i]=n[i]);return r[Jc]=t,r},F2=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return bd(n,r,i),fy(function(){return uy(n,r,i)}),null},B2=py(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Jc],o=[r],s="";typeof e.className=="string"?s=ly(t.registered,o,e.className):e.className!=null&&(s=e.className+" ");var a=Id(o,void 0,E.useContext(hy));s+=t.key+"-"+a.name;var l={};for(var u in e)zd.call(e,u)&&u!=="css"&&u!==Jc&&(l[u]=e[u]);return l.ref=n,l.className=s,E.createElement(E.Fragment,null,E.createElement(F2,{cache:t,serialized:a,isStringTag:typeof i=="string"}),E.createElement(i,l))}),U2=B2,V2=g.Fragment;function ge(e,t,n){return zd.call(t,"css")?g.jsx(U2,D2(e,t),n):g.jsx(e,t,n)}function my(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Id(t)}var j=function(){var t=my.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},W2=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var o=t[r];if(o!=null){var s=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))s=e(o);else{s="";for(var a in o)o[a]&&a&&(s&&(s+=" "),s+=a)}break}default:s=o}s&&(i&&(i+=" "),i+=s)}}return i};function H2(e,t,n){var r=[],i=ly(e,r,n);return r.length<2?n:i+t(r)}var Y2=function(t){var n=t.cache,r=t.serializedArr;return fy(function(){for(var i=0;i<r.length;i++)uy(n,r[i],!1)}),null},Pu=py(function(e,t){var n=!1,r=[],i=function(){for(var u=arguments.length,f=new Array(u),c=0;c<u;c++)f[c]=arguments[c];var p=Id(f,t.registered);return r.push(p),bd(t,p,!1),t.key+"-"+p.name},o=function(){for(var u=arguments.length,f=new Array(u),c=0;c<u;c++)f[c]=arguments[c];return H2(t.registered,i,W2(f))},s={css:i,cx:o,theme:E.useContext(hy)},a=e.children(s);return n=!0,E.createElement(E.Fragment,null,E.createElement(Y2,{cache:t,serializedArr:r}),a)}),Q2=Object.defineProperty,G2=(e,t,n)=>t in e?Q2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ks=(e,t,n)=>(G2(e,typeof t!="symbol"?t+"":t,n),n),Zc=new Map,Cs=new WeakMap,rm=0,K2=void 0;function X2(e){return e?(Cs.has(e)||(rm+=1,Cs.set(e,rm.toString())),Cs.get(e)):"0"}function q2(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?X2(e.root):e[t]}`).toString()}function J2(e){const t=q2(e);let n=Zc.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver(s=>{s.forEach(a=>{var l;const u=a.isIntersecting&&i.some(f=>a.intersectionRatio>=f);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(l=r.get(a.target))==null||l.forEach(f=>{f(u,a)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},Zc.set(t,n)}return n}function gy(e,t,n={},r=K2){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const l=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:i,observer:o,elements:s}=J2(n),a=s.get(e)||[];return s.has(e)||s.set(e,a),a.push(t),o.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(s.delete(e),o.unobserve(e)),s.size===0&&(o.disconnect(),Zc.delete(i))}}function Z2(e){return typeof e.children!="function"}var im=class extends E.Component{constructor(e){super(e),ks(this,"node",null),ks(this,"_unobserveCb",null),ks(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),ks(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Z2(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:o}=this.props;this._unobserveCb=gy(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:w,entry:y}=this.state;return e({inView:w,entry:y,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:i,rootMargin:o,onChange:s,skip:a,trackVisibility:l,delay:u,initialInView:f,fallbackInView:c,...p}=this.props;return E.createElement(t||"div",{ref:this.handleNode,...p},e)}};function yy({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:o,skip:s,initialInView:a,fallbackInView:l,onChange:u}={}){var f;const[c,p]=E.useState(null),w=E.useRef(),[y,v]=E.useState({inView:!!a,entry:void 0});w.current=u,E.useEffect(()=>{if(s||!c)return;let m;return m=gy(c,(S,C)=>{v({inView:S,entry:C}),w.current&&w.current(S,C),C.isIntersecting&&o&&m&&(m(),m=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},l),()=>{m&&m()}},[Array.isArray(e)?e.toString():e,c,i,r,o,s,n,l,t]);const x=(f=y.entry)==null?void 0:f.target,h=E.useRef();!c&&x&&!o&&!s&&h.current!==x&&(h.current=x,v({inView:!!a,entry:void 0}));const d=[p,y.inView,y.entry];return d.ref=d[0],d.inView=d[1],d.entry=d[2],d}var vy={exports:{}},Z={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d=Symbol.for("react.element"),Nd=Symbol.for("react.portal"),Tl=Symbol.for("react.fragment"),Pl=Symbol.for("react.strict_mode"),jl=Symbol.for("react.profiler"),Ol=Symbol.for("react.provider"),Rl=Symbol.for("react.context"),e5=Symbol.for("react.server_context"),bl=Symbol.for("react.forward_ref"),Il=Symbol.for("react.suspense"),zl=Symbol.for("react.suspense_list"),$l=Symbol.for("react.memo"),Nl=Symbol.for("react.lazy"),t5=Symbol.for("react.offscreen"),wy;wy=Symbol.for("react.module.reference");function _t(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case $d:switch(e=e.type,e){case Tl:case jl:case Pl:case Il:case zl:return e;default:switch(e=e&&e.$$typeof,e){case e5:case Rl:case bl:case Nl:case $l:case Ol:return e;default:return t}}case Nd:return t}}}Z.ContextConsumer=Rl;Z.ContextProvider=Ol;Z.Element=$d;Z.ForwardRef=bl;Z.Fragment=Tl;Z.Lazy=Nl;Z.Memo=$l;Z.Portal=Nd;Z.Profiler=jl;Z.StrictMode=Pl;Z.Suspense=Il;Z.SuspenseList=zl;Z.isAsyncMode=function(){return!1};Z.isConcurrentMode=function(){return!1};Z.isContextConsumer=function(e){return _t(e)===Rl};Z.isContextProvider=function(e){return _t(e)===Ol};Z.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===$d};Z.isForwardRef=function(e){return _t(e)===bl};Z.isFragment=function(e){return _t(e)===Tl};Z.isLazy=function(e){return _t(e)===Nl};Z.isMemo=function(e){return _t(e)===$l};Z.isPortal=function(e){return _t(e)===Nd};Z.isProfiler=function(e){return _t(e)===jl};Z.isStrictMode=function(e){return _t(e)===Pl};Z.isSuspense=function(e){return _t(e)===Il};Z.isSuspenseList=function(e){return _t(e)===zl};Z.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Tl||e===jl||e===Pl||e===Il||e===zl||e===t5||typeof e=="object"&&e!==null&&(e.$$typeof===Nl||e.$$typeof===$l||e.$$typeof===Ol||e.$$typeof===Rl||e.$$typeof===bl||e.$$typeof===wy||e.getModuleId!==void 0)};Z.typeOf=_t;vy.exports=Z;var n5=vy.exports;const r5=j`
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
`,i5=j`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,o5=j`
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
`,s5=j`
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
`,a5=j`
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
`,l5=j`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,u5=j`
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
`,c5=j`
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
`,f5=j`
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
`,d5=j`
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
`,p5=j`
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
`,h5=j`
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
`,m5=j`
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
`,g5=j`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,y5=j`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,v5=j`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,w5=j`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,S5=j`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Md=j`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,x5=j`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,k5=j`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,C5=j`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,E5=j`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_5=j`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,T5=j`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,P5=j`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function j5({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Md,iterationCount:i=1}){return my`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function O5(e){return e==null}function R5(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Sy(e,t){return n=>n?e():t()}function Ao(e){return Sy(e,()=>null)}function ef(e){return Ao(()=>({opacity:0}))(e)}const Ml=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:o=0,keyframes:s=Md,triggerOnce:a=!1,className:l,style:u,childClassName:f,childStyle:c,children:p,onVisibilityChange:w}=e,y=E.useMemo(()=>j5({keyframes:s,duration:i}),[i,s]);return O5(p)?null:R5(p)?ge(I5,{...e,animationStyles:y,children:String(p)}):n5.isFragment(p)?ge(xy,{...e,animationStyles:y}):ge(V2,{children:E.Children.map(p,(v,x)=>{if(!E.isValidElement(v))return null;const h=r+(t?x*i*n:0);switch(v.type){case"ol":case"ul":return ge(Pu,{children:({cx:d})=>ge(v.type,{...v.props,className:d(l,v.props.className),style:Object.assign({},u,v.props.style),children:ge(Ml,{...e,children:v.props.children})})});case"li":return ge(im,{threshold:o,triggerOnce:a,onChange:w,children:({inView:d,ref:m})=>ge(Pu,{children:({cx:S})=>ge(v.type,{...v.props,ref:m,className:S(f,v.props.className),css:Ao(()=>y)(d),style:Object.assign({},c,v.props.style,ef(!d),{animationDelay:h+"ms"})})})});default:return ge(im,{threshold:o,triggerOnce:a,onChange:w,children:({inView:d,ref:m})=>ge("div",{ref:m,className:l,css:Ao(()=>y)(d),style:Object.assign({},u,ef(!d),{animationDelay:h+"ms"}),children:ge(Pu,{children:({cx:S})=>ge(v.type,{...v.props,className:S(f,v.props.className),style:Object.assign({},c,v.props.style)})})})})}})})},b5={display:"inline-block",whiteSpace:"pre"},I5=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:o=1e3,fraction:s=0,triggerOnce:a=!1,className:l,style:u,children:f,onVisibilityChange:c}=e,{ref:p,inView:w}=yy({triggerOnce:a,threshold:s,onChange:c});return Sy(()=>ge("div",{ref:p,className:l,style:Object.assign({},u,b5),children:f.split("").map((y,v)=>ge("span",{css:Ao(()=>t)(w),style:{animationDelay:i+v*o*r+"ms"},children:y},v))}),()=>ge(xy,{...e,children:f}))(n)},xy=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:o,children:s,onVisibilityChange:a}=e,{ref:l,inView:u}=yy({triggerOnce:r,threshold:n,onChange:a});return ge("div",{ref:l,className:i,css:Ao(()=>t)(u),style:Object.assign({},o,ef(!u)),children:s})};function z5(e){switch(e){case"bounce":return[r5,{transformOrigin:"center bottom"}];case"flash":return[i5];case"headShake":return[o5,{animationTimingFunction:"ease-in-out"}];case"heartBeat":return[s5,{animationTimingFunction:"ease-in-out"}];case"jello":return[a5,{transformOrigin:"center"}];case"pulse":return[l5,{animationTimingFunction:"ease-in-out"}];case"rubberBand":return[u5];case"shake":return[c5];case"shakeX":return[f5];case"shakeY":return[d5];case"swing":return[p5,{transformOrigin:"top center"}];case"tada":return[h5];case"wobble":return[m5]}}const Ia=e=>{const{effect:t="bounce",style:n,...r}=e,[i,o]=E.useMemo(()=>z5(t),[t]);return ge(Ml,{keyframes:i,style:Object.assign({},n,o),...r})};j`
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
`;j`
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
`;j`
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
`;j`
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
`;j`
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
`;j`
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
`;j`
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
`;j`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;j`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;j`
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
`;const $5=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,N5=j`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,M5=j`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,A5=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,L5=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,D5=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,F5=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,B5=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,U5=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,V5=j`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,W5=j`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,H5=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Y5=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Q5(e,t,n){switch(n){case"bottom-left":return t?N5:y5;case"bottom-right":return t?M5:v5;case"down":return e?t?L5:S5:t?A5:w5;case"left":return e?t?F5:x5:t?D5:Md;case"right":return e?t?U5:C5:t?B5:k5;case"top-left":return t?V5:E5;case"top-right":return t?W5:_5;case"up":return e?t?Y5:P5:t?H5:T5;default:return t?$5:g5}}const ft=e=>{const{big:t=!1,direction:n,reverse:r=!1,...i}=e,o=E.useMemo(()=>Q5(t,r,n),[t,n,r]);return ge(Ml,{keyframes:o,...i})};j`
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
`;j`
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
`;j`
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
`;j`
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
`;j`
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
`;j`
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
`;j`
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
`;j`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;j`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;j`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;j`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;j`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;j`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;j`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;j`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;j`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;j`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;j`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const G5=j`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,K5=j`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,X5=j`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,q5=j`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,J5=j`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Z5=j`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,e4=j`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,t4=j`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function n4(e,t){switch(t){case"down":return e?J5:G5;case"right":return e?e4:X5;case"up":return e?t4:q5;case"left":default:return e?Z5:K5}}const om=e=>{const{direction:t,reverse:n=!1,...r}=e,i=E.useMemo(()=>n4(n,t),[t,n]);return ge(Ml,{keyframes:i,...r})};j`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;j`
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
`;j`
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
`;j`
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
`;j`
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
`;j`
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
`;j`
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
`;j`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;j`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;j`
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
`;const Al=A.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 3.2rem;
`,r4=A.section`
  background: linear-gradient(
      to bottom right,
      rgb(0, 0, 0, 0.1),
      rgb(0, 0, 0, 0.4)
    ),
    url("HeroBG1.webp");
  background-position: top;
  background-size: cover;
  min-height: 90vh;
  overflow: hidden;
`,i4=A.div`
  display: grid;
  padding-top: 9.6rem;
  padding-bottom: 9.6rem;
  gap: 4.8rem;
  align-items: center;
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
`,o4=A.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 64em) {
    flex-direction: column;
    gap: 3.2rem;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 35em) {
    display: none;
  }
`,s4=A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;
  padding-top: 6.4rem;
  @media (max-width: 35em) {
    flex-direction: column;
  }
`,sm=A.a`
  font-size: 2.4rem;
  font-weight: 600;
  border: none;
  background-color: var(--font-dark-dark);
  color: var(--font-medium-white);
  padding: 1.2rem 2.4rem;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-md);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    border-radius: var(--border-radius-lg);
  }
`;function a4(){return g.jsx(r4,{children:g.jsx(ft,{triggerOnce:!0,children:g.jsx(Al,{children:g.jsxs(i4,{children:[g.jsxs("div",{style:{textJustify:"auto"},children:[g.jsx(U,{as:"h3",style:{textAlign:"center",color:"var(--font-dark-white)",marginTop:"0",marginBottom:"0rem"},children:"Sklep Kulturystyczny"}),g.jsx(U,{as:"h1",style:{textAlign:"center",marginTop:"0",marginBottom:"0rem"},children:"Biceps"})]}),g.jsxs(o4,{children:[g.jsx(U,{style:{color:"var(--font-dark-white)",marginTop:"0",marginBottom:"0rem"},as:"h2",children:g.jsx(Qk,{})}),g.jsxs("div",{children:[g.jsx(U,{style:{color:"var(--font-dark-white)",marginTop:"0",marginBottom:"0rem"},as:"h2",children:"Gwarancja"}),g.jsx(U,{style:{color:"var(--font-dark-white)",marginTop:"0",marginBottom:"0rem"},as:"h2",children:"Doskonałej"}),g.jsx(U,{style:{color:"var(--font-dark-white)",marginTop:"0",marginBottom:"0rem"},as:"h2",children:"Oferty"})]})]}),g.jsxs(s4,{children:[g.jsx(sm,{href:"#oferta",children:"Sprawdź ofertę"}),g.jsx(sm,{href:"#onas",children:"O Bicepsie"})]})]})})})})}var Ad={},Ld={},le={},Ll={};(function(e){function t(s,a,l){var u=a.slidesToShow,f=a.currentSlide;return l.length>2*u?s+2*u:f>=l.length?l.length+s:s}function n(s,a){if(a.length>2*s){for(var l={},u=a.length-2*s,f=a.length-u,c=u,p=0;p<f;p++)l[p]=c,c++;var w=a.length+f,y=w+a.slice(0,2*s).length,v=0;for(p=w;p<=y;p++)l[p]=v,v++;var x=w,h=0;for(p=f;p<x;p++)l[p]=h,h++;return l}l={};var d=3*a.length,m=0;for(p=0;p<d;p++)l[p]=m,++m===a.length&&(m=0);return l}function r(s,a){return a.length<s?a:a.length>2*s?a.slice(a.length-2*s,a.length).concat(a,a.slice(0,2*s)):a.concat(a,a)}function i(s,a){return a.length>2*s?2*s:a.length}function o(s,a,l){var u,f=s.currentSlide,c=s.slidesToShow,p=s.itemWidth,w=s.totalItems,y=0,v=0,x=f===0,h=a.length-(a.length-2*c);return a.length<c?(v=y=0,x=u=!1):a.length>2*c?((u=f>=h+a.length)&&(v=-p*(y=f-a.length)),x&&(v=-p*(y=h+(a.length-2*c)))):((u=f>=2*a.length)&&(v=-p*(y=f-a.length)),x&&(v=l.showDots?-p*(y=a.length):-p*(y=w/3))),{isReachingTheEnd:u,isReachingTheStart:x,nextSlide:y,nextPosition:v}}Object.defineProperty(e,"__esModule",{value:!0}),e.getOriginalCounterPart=t,e.getOriginalIndexLookupTableByClones=n,e.getClones=r,e.getInitialSlideInInfiniteMode=i,e.checkClonesPosition=o})(Ll);var Kr={};Object.defineProperty(Kr,"__esModule",{value:!0});function l4(e,t,n,r){var i=0,o=r||n;return t&&o&&(i=e[o].partialVisibilityGutter||e[o].paritialVisibilityGutter),i}function u4(e,t){var n;return t[e]&&(n=(100/t[e].items).toFixed(1)),n}function c4(e,t,n){return Math.round(n/(t+(e.centerMode?1:0)))}Kr.getPartialVisibilityGutter=l4,Kr.getWidthFromDeviceType=u4,Kr.getItemClientSideWidth=c4;var _e={};Object.defineProperty(_e,"__esModule",{value:!0});var tf=Kr;function Dd(e){var t=e.slidesToShow;return e.totalItems<t}function f4(e,t){var n,r=e.domLoaded,i=e.slidesToShow,o=e.containerWidth,s=e.itemWidth,a=t.deviceType,l=t.responsive,u=t.ssr,f=t.partialVisbile,c=t.partialVisible,p=!!(r&&i&&o&&s);u&&a&&!p&&(n=tf.getWidthFromDeviceType(a,l));var w=!!(u&&a&&!p&&n);return{shouldRenderOnSSR:w,flexBisis:n,domFullyLoaded:p,partialVisibilityGutter:tf.getPartialVisibilityGutter(l,f||c,a,e.deviceType),shouldRenderAtAll:w||p}}function d4(e,t){var n=t.currentSlide,r=t.slidesToShow;return n<=e&&e<n+r}function ky(e,t,n){var r=n||e.transform;return!t.infinite&&e.currentSlide===0||Dd(e)?r:r+e.itemWidth/2}function p4(e){return!(0<e.currentSlide)}function Cy(e){var t=e.currentSlide,n=e.totalItems;return!(t+e.slidesToShow<n)}function Ey(e,t,n,r){t===void 0&&(t=0);var i=e.currentSlide,o=e.slidesToShow,s=Cy(e),a=!n.infinite&&s,l=r||e.transform;if(Dd(e))return l;var u=l+i*t;return a?u+(e.containerWidth-(e.itemWidth-t)*o):u}function _y(e,t){return e.rtl?-1*t:t}function h4(e,t,n){var r=t.partialVisbile,i=t.partialVisible,o=t.responsive,s=t.deviceType,a=t.centerMode,l=n||e.transform,u=tf.getPartialVisibilityGutter(o,r||i,s,e.deviceType);return _y(t,i||r?Ey(e,u,t,n):a?ky(e,t,n):l)}function m4(e,t){var n=e.domLoaded,r=e.slidesToShow,i=e.containerWidth,o=e.itemWidth,s=t.deviceType,a=t.responsive,l=t.slidesToSlide||1,u=!!(n&&r&&i&&o);return t.ssr&&t.deviceType&&!u&&Object.keys(a).forEach(function(f){var c=a[f].slidesToSlide;s===f&&c&&(l=c)}),u&&Object.keys(a).forEach(function(f){var c=a[f],p=c.breakpoint,w=c.slidesToSlide,y=p.max,v=p.min;w&&window.innerWidth>=v&&window.innerWidth<=y&&(l=w)}),l}_e.notEnoughChildren=Dd,_e.getInitialState=f4,_e.getIfSlideIsVisbile=d4,_e.getTransformForCenterMode=ky,_e.isInLeftEnd=p4,_e.isInRightEnd=Cy,_e.getTransformForPartialVsibile=Ey,_e.parsePosition=_y,_e.getTransform=h4,_e.getSlidesToSlide=m4;var Fd={};Object.defineProperty(Fd,"__esModule",{value:!0});var g4=function(e,t,n){var r;return function(){var i=arguments;r||(e.apply(this,i),r=!0,typeof n=="function"&&n(!0),setTimeout(function(){r=!1,typeof n=="function"&&n(!1)},t))}};Fd.default=g4;var Ty={};(function(e){function t(n,r){var i=r.partialVisbile,o=r.partialVisible,s=r.centerMode,a=r.ssr,l=r.responsive;if((i||o)&&s)throw new Error("center mode can not be used at the same time with partialVisible");if(!l)throw a?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(l&&typeof l!="object")throw new Error("responsive prop must be an object")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=t})(Ty);var Bd={};Object.defineProperty(Bd,"__esModule",{value:!0});var y4=_e;function v4(e,t,n){n===void 0&&(n=0);var r,i,o=e.slidesToShow,s=e.currentSlide,a=e.itemWidth,l=e.totalItems,u=y4.getSlidesToSlide(e,t),f=s+1+n+o+(0<n?0:u);return i=f<=l?-a*(r=s+n+(0<n?0:u)):l<f&&s!==l-o?-a*(r=l-o):r=void 0,{nextSlides:r,nextPosition:i}}Bd.populateNextSlides=v4;var Ud={};Object.defineProperty(Ud,"__esModule",{value:!0});var w4=E,S4=_e,x4=_e;function k4(e,t,n){n===void 0&&(n=0);var r,i,o=e.currentSlide,s=e.itemWidth,a=e.slidesToShow,l=t.children,u=t.showDots,f=t.infinite,c=S4.getSlidesToSlide(e,t),p=o-n-(0<n?0:c),w=(w4.Children.toArray(l).length-a)%c;return i=0<=p?(r=p,u&&!f&&0<w&&x4.isInRightEnd(e)&&(r=o-w),-s*r):r=p<0&&o!==0?0:void 0,{nextSlides:r,nextPosition:i}}Ud.populatePreviousSlides=k4;var Py={};(function(e){function t(n,r,i,o,s,a){var l,u,f=n.itemWidth,c=n.slidesToShow,p=n.totalItems,w=n.currentSlide,y=r.infinite,v=!1,x=Math.round((i-o)/f),h=Math.round((o-i)/f),d=i<s;if(s<i&&x<=c){l="right";var m=Math.abs(-f*(p-c)),S=a-(o-s),C=w===p-c;(Math.abs(S)<=m||C&&y)&&(u=S,v=!0)}return d&&h<=c&&(l="left",((S=a+(s-o))<=0||w===0&&y)&&(v=!0,u=S)),{direction:l,nextPosition:u,canContinue:v}}Object.defineProperty(e,"__esModule",{value:!0}),e.populateSlidesOnMouseTouchMove=t})(Py);Object.defineProperty(le,"__esModule",{value:!0});var Es=Ll;le.getOriginalCounterPart=Es.getOriginalCounterPart,le.getClones=Es.getClones,le.checkClonesPosition=Es.checkClonesPosition,le.getInitialSlideInInfiniteMode=Es.getInitialSlideInInfiniteMode;var ju=Kr;le.getWidthFromDeviceType=ju.getWidthFromDeviceType,le.getPartialVisibilityGutter=ju.getPartialVisibilityGutter,le.getItemClientSideWidth=ju.getItemClientSideWidth;var vn=_e;le.getInitialState=vn.getInitialState,le.getIfSlideIsVisbile=vn.getIfSlideIsVisbile,le.getTransformForCenterMode=vn.getTransformForCenterMode,le.getTransformForPartialVsibile=vn.getTransformForPartialVsibile,le.isInLeftEnd=vn.isInLeftEnd,le.isInRightEnd=vn.isInRightEnd,le.notEnoughChildren=vn.notEnoughChildren,le.getSlidesToSlide=vn.getSlidesToSlide;var C4=Fd;le.throttle=C4.default;var E4=Ty;le.throwError=E4.default;var _4=Bd;le.populateNextSlides=_4.populateNextSlides;var T4=Ud;le.populatePreviousSlides=T4.populatePreviousSlides;var P4=Py;le.populateSlidesOnMouseTouchMove=P4.populateSlidesOnMouseTouchMove;var Dl={},j4=Xr&&Xr.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)i.hasOwnProperty(o)&&(r[o]=i[o])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(Dl,"__esModule",{value:!0});var O4=E;function R4(e){return"clientY"in e}Dl.isMouseMoveEvent=R4;var b4=function(e){function t(){return e!==null&&e.apply(this,arguments)||this}return j4(t,e),t}(O4.Component);Dl.default=b4;var Vd={},Wd={};Object.defineProperty(Wd,"__esModule",{value:!0});var I4=Ll,z4=_e;function $4(e,t,n,r){var i={},o=z4.getSlidesToSlide(t,n);return Array(e).fill(0).forEach(function(s,a){var l=I4.getOriginalCounterPart(a,t,r);if(a===0)i[0]=l;else{var u=i[a-1]+o;i[a]=u}}),i}Wd.getLookupTableForNextSlides=$4;Object.defineProperty(Vd,"__esModule",{value:!0});var zi=E,N4=Ll,M4=Wd,am=_e,A4=function(e){var t=e.props,n=e.state,r=e.goToSlide,i=e.getState,o=t.showDots,s=t.customDot,a=t.dotListClass,l=t.infinite,u=t.children;if(!o||am.notEnoughChildren(n))return null;var f,c=n.currentSlide,p=n.slidesToShow,w=am.getSlidesToSlide(n,t),y=zi.Children.toArray(u);f=l?Math.ceil(y.length/w):Math.ceil((y.length-p)/w)+1;var v=M4.getLookupTableForNextSlides(f,n,t,y),x=N4.getOriginalIndexLookupTableByClones(p,y),h=x[c];return zi.createElement("ul",{className:"react-multi-carousel-dot-list "+a},Array(f).fill(0).map(function(d,m){var S,C;if(l){C=v[m];var _=x[C];S=h===_||_<=h&&h<_+w}else{var k=y.length-p,R=m*w;S=(C=k<R?k:R)===c||C<c&&c<C+w&&c<y.length-p}return s?zi.cloneElement(s,{index:m,active:S,key:m,onClick:function(){return r(C)},carouselState:i()}):zi.createElement("li",{"data-index":m,key:m,className:"react-multi-carousel-dot "+(S?"react-multi-carousel-dot--active":"")},zi.createElement("button",{"aria-label":"Go to slide "+(m+1),onClick:function(){return r(C)}}))}))};Vd.default=A4;var Fl={};Object.defineProperty(Fl,"__esModule",{value:!0});var za=E,L4=function(e){var t=e.customLeftArrow,n=e.getState,r=e.previous,i=e.disabled,o=e.rtl;if(t)return za.cloneElement(t,{onClick:function(){return r()},carouselState:n(),disabled:i,rtl:o});var s=o?"rtl":"";return za.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+s,onClick:function(){return r()},type:"button",disabled:i})};Fl.LeftArrow=L4;var D4=function(e){var t=e.customRightArrow,n=e.getState,r=e.next,i=e.disabled,o=e.rtl;if(t)return za.cloneElement(t,{onClick:function(){return r()},carouselState:n(),disabled:i,rtl:o});var s=o?"rtl":"";return za.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+s,onClick:function(){return r()},type:"button",disabled:i})};Fl.RightArrow=D4;var Hd={};Object.defineProperty(Hd,"__esModule",{value:!0});var _s=E,Ou=le,F4=function(e){var t=e.props,n=e.state,r=e.goToSlide,i=e.clones,o=e.notEnoughChildren,s=n.itemWidth,a=t.children,l=t.infinite,u=t.itemClass,f=t.itemAriaLabel,c=t.partialVisbile,p=t.partialVisible,w=Ou.getInitialState(n,t),y=w.flexBisis,v=w.shouldRenderOnSSR,x=w.domFullyLoaded,h=w.partialVisibilityGutter;return w.shouldRenderAtAll?(c&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),_s.createElement(_s.Fragment,null,(l?i:_s.Children.toArray(a)).map(function(d,m){return _s.createElement("li",{key:m,"data-index":m,onClick:function(){t.focusOnSelect&&r(m)},"aria-hidden":Ou.getIfSlideIsVisbile(m,n)?"false":"true","aria-label":f||(d.props.ariaLabel?d.props.ariaLabel:null),style:{flex:v?"1 0 "+y+"%":"auto",position:"relative",width:x?((c||p)&&h&&!o?s-h:s)+"px":"auto"},className:"react-multi-carousel-item "+(Ou.getIfSlideIsVisbile(m,n)?"react-multi-carousel-item--active":"")+" "+u},d)}))):null};Hd.default=F4;var B4=Xr&&Xr.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)i.hasOwnProperty(o)&&(r[o]=i[o])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(Ld,"__esModule",{value:!0});var Ie=E,pe=le,Gn=Dl,U4=Vd,lm=Fl,V4=Hd,Ts=_e,Dt=400,um="transform 400ms ease-in-out",W4=function(e){function t(n){var r=e.call(this,n)||this;return r.containerRef=Ie.createRef(),r.listRef=Ie.createRef(),r.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:Ie.Children.count(n.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},r.onResize=r.onResize.bind(r),r.handleDown=r.handleDown.bind(r),r.handleMove=r.handleMove.bind(r),r.handleOut=r.handleOut.bind(r),r.onKeyUp=r.onKeyUp.bind(r),r.handleEnter=r.handleEnter.bind(r),r.setIsInThrottle=r.setIsInThrottle.bind(r),r.next=pe.throttle(r.next.bind(r),n.transitionDuration||Dt,r.setIsInThrottle),r.previous=pe.throttle(r.previous.bind(r),n.transitionDuration||Dt,r.setIsInThrottle),r.goToSlide=pe.throttle(r.goToSlide.bind(r),n.transitionDuration||Dt,r.setIsInThrottle),r.onMove=!1,r.initialX=0,r.lastX=0,r.isAnimationAllowed=!1,r.direction="",r.initialY=0,r.isInThrottle=!1,r.transformPlaceHolder=0,r}return B4(t,e),t.prototype.resetTotalItems=function(){var n=this,r=Ie.Children.count(this.props.children),i=pe.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,r));this.setState({totalItems:r,currentSlide:i},function(){n.setContainerAndItemWidth(n.state.slidesToShow,!0)})},t.prototype.setIsInThrottle=function(n){n===void 0&&(n=!1),this.isInThrottle=n},t.prototype.setTransformDirectly=function(n,r){var i=this.props.additionalTransfrom;this.transformPlaceHolder=n;var o=Ts.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(r),this.listRef.current.style.transform="translate3d("+(o+i)+"px,0,0)")},t.prototype.setAnimationDirectly=function(n){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=n?this.props.customTransition||um:"none")},t.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},t.prototype.setClones=function(n,r,i,o){var s=this;o===void 0&&(o=!1),this.isAnimationAllowed=!1;var a=Ie.Children.toArray(this.props.children),l=pe.getInitialSlideInInfiniteMode(n||this.state.slidesToShow,a),u=pe.getClones(this.state.slidesToShow,a),f=a.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:u.length,currentSlide:i&&!o?f:l},function(){s.correctItemsPosition(r||s.state.itemWidth)})},t.prototype.setItemsToShow=function(n,r){var i=this,o=this.props.responsive;Object.keys(o).forEach(function(s){var a=o[s],l=a.breakpoint,u=a.items,f=l.max,c=l.min,p=[window.innerWidth];window.screen&&window.screen.width&&p.push(window.screen.width);var w=Math.min.apply(Math,p);c<=w&&w<=f&&(i.setState({slidesToShow:u,deviceType:s}),i.setContainerAndItemWidth(u,n,r))})},t.prototype.setContainerAndItemWidth=function(n,r,i){var o=this;if(this.containerRef&&this.containerRef.current){var s=this.containerRef.current.offsetWidth,a=pe.getItemClientSideWidth(this.props,n,s);this.setState({containerWidth:s,itemWidth:a},function(){o.props.infinite&&o.setClones(n,a,r,i)}),r&&this.correctItemsPosition(a)}},t.prototype.correctItemsPosition=function(n,r,i){r&&(this.isAnimationAllowed=!0),!r&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var o=this.state.totalItems<this.state.slidesToShow?0:-n*this.state.currentSlide;i&&this.setTransformDirectly(o,!0),this.setState({transform:o})},t.prototype.onResize=function(n){var r;r=!!this.props.infinite&&(typeof n!="boolean"||!n),this.setItemsToShow(r)},t.prototype.componentDidUpdate=function(n,r){var i=this,o=n.keyBoardControl,s=n.autoPlay,a=n.children,l=r.containerWidth,u=r.domLoaded,f=r.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==l&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){i.setItemsToShow(!0)},this.props.transitionDuration||Dt)),o&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!o&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),s&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),s||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),a.length!==this.props.children.length?t.clonesTimeout=setTimeout(function(){i.props.infinite?i.setClones(i.state.slidesToShow,i.state.itemWidth,!0,!0):i.resetTotalItems()},this.props.transitionDuration||Dt):this.props.infinite&&this.state.currentSlide!==f&&this.correctClonesPosition({domLoaded:u}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&pe.isInRightEnd(this.state)){var c=this.props.transitionDuration||Dt;t.isInThrottleTimeout=setTimeout(function(){i.setIsInThrottle(!1),i.resetAutoplayInterval(),i.goToSlide(0,void 0,!!i.props.rewindWithAnimation)},c+this.props.autoPlaySpeed)}},t.prototype.correctClonesPosition=function(n){var r=this,i=n.domLoaded,o=Ie.Children.toArray(this.props.children),s=pe.checkClonesPosition(this.state,o,this.props),a=s.isReachingTheEnd,l=s.isReachingTheStart,u=s.nextSlide,f=s.nextPosition;this.state.domLoaded&&i&&(a||l)&&(this.isAnimationAllowed=!1,t.transformTimeout=setTimeout(function(){r.setState({transform:f,currentSlide:u})},this.props.transitionDuration||Dt))},t.prototype.next=function(n){var r=this;n===void 0&&(n=0);var i=this.props,o=i.afterChange,s=i.beforeChange;if(!pe.notEnoughChildren(this.state)){var a=pe.populateNextSlides(this.state,this.props,n),l=a.nextSlides,u=a.nextPosition,f=this.state.currentSlide;l!==void 0&&u!==void 0&&(typeof s=="function"&&s(l,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:u,currentSlide:l},function(){typeof o=="function"&&(t.afterChangeTimeout=setTimeout(function(){o(f,r.getState())},r.props.transitionDuration||Dt))}))}},t.prototype.previous=function(n){var r=this;n===void 0&&(n=0);var i=this.props,o=i.afterChange,s=i.beforeChange;if(!pe.notEnoughChildren(this.state)){var a=pe.populatePreviousSlides(this.state,this.props,n),l=a.nextSlides,u=a.nextPosition;if(l!==void 0&&u!==void 0){var f=this.state.currentSlide;typeof s=="function"&&s(l,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:u,currentSlide:l},function(){typeof o=="function"&&(t.afterChangeTimeout2=setTimeout(function(){o(f,r.getState())},r.props.transitionDuration||Dt))})}}},t.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),t.clonesTimeout&&clearTimeout(t.clonesTimeout),t.isInThrottleTimeout&&clearTimeout(t.isInThrottleTimeout),t.transformTimeout&&clearTimeout(t.transformTimeout),t.afterChangeTimeout&&clearTimeout(t.afterChangeTimeout),t.afterChangeTimeout2&&clearTimeout(t.afterChangeTimeout2),t.afterChangeTimeout3&&clearTimeout(t.afterChangeTimeout3)},t.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},t.prototype.getCords=function(n){var r=n.clientX,i=n.clientY;return{clientX:Ts.parsePosition(this.props,r),clientY:Ts.parsePosition(this.props,i)}},t.prototype.handleDown=function(n){if(!(!Gn.isMouseMoveEvent(n)&&!this.props.swipeable||Gn.isMouseMoveEvent(n)&&!this.props.draggable||this.isInThrottle)){var r=this.getCords(Gn.isMouseMoveEvent(n)?n:n.touches[0]),i=r.clientX,o=r.clientY;this.onMove=!0,this.initialX=i,this.initialY=o,this.lastX=i,this.isAnimationAllowed=!1}},t.prototype.handleMove=function(n){if(!(!Gn.isMouseMoveEvent(n)&&!this.props.swipeable||Gn.isMouseMoveEvent(n)&&!this.props.draggable||pe.notEnoughChildren(this.state))){var r=this.getCords(Gn.isMouseMoveEvent(n)?n:n.touches[0]),i=r.clientX,o=r.clientY,s=this.initialX-i,a=this.initialY-o;if(this.onMove){if(!(Math.abs(s)>Math.abs(a)))return;var l=pe.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,i,this.transformPlaceHolder),u=l.direction,f=l.nextPosition,c=l.canContinue;u&&(this.direction=u,c&&f!==void 0&&this.setTransformDirectly(f)),this.lastX=i}}},t.prototype.handleOut=function(n){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var r=n.type==="touchend"&&!this.props.swipeable,i=(n.type==="mouseleave"||n.type==="mouseup")&&!this.props.draggable;if(!r&&!i&&this.onMove){if(this.setAnimationDirectly(!0),this.direction==="right")if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var o=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(o)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.direction==="left"&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(o=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(o)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},t.prototype.isInViewport=function(n){var r=n.getBoundingClientRect(),i=r.top,o=i===void 0?0:i,s=r.left,a=s===void 0?0:s,l=r.bottom,u=l===void 0?0:l,f=r.right,c=f===void 0?0:f;return 0<=o&&0<=a&&u<=(window.innerHeight||document.documentElement.clientHeight)&&c<=(window.innerWidth||document.documentElement.clientWidth)},t.prototype.isChildOfCarousel=function(n){return!!(n instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(n)},t.prototype.onKeyUp=function(n){var r=n.target;switch(n.keyCode){case 37:if(this.isChildOfCarousel(r))return this.previous();break;case 39:if(this.isChildOfCarousel(r))return this.next();break;case 9:if(this.isChildOfCarousel(r)&&r instanceof HTMLInputElement&&this.isInViewport(r))return this.next()}},t.prototype.handleEnter=function(n){Gn.isMouseMoveEvent(n)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},t.prototype.goToSlide=function(n,r,i){var o=this;if(i===void 0&&(i=!0),!this.isInThrottle){var s=this.state.itemWidth,a=this.props,l=a.afterChange,u=a.beforeChange,f=this.state.currentSlide;typeof u!="function"||r&&(typeof r!="object"||r.skipBeforeChange)||u(n,this.getState()),this.isAnimationAllowed=i,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:n,transform:-s*n},function(){o.props.infinite&&o.correctClonesPosition({domLoaded:!0}),typeof l!="function"||r&&(typeof r!="object"||r.skipAfterChange)||(t.afterChangeTimeout3=setTimeout(function(){l(f,o.getState())},o.props.transitionDuration||Dt))})}},t.prototype.getState=function(){return this.state},t.prototype.renderLeftArrow=function(n){var r=this,i=this.props,o=i.customLeftArrow,s=i.rtl;return Ie.createElement(lm.LeftArrow,{customLeftArrow:o,getState:function(){return r.getState()},previous:this.previous,disabled:n,rtl:s})},t.prototype.renderRightArrow=function(n){var r=this,i=this.props,o=i.customRightArrow,s=i.rtl;return Ie.createElement(lm.RightArrow,{customRightArrow:o,getState:function(){return r.getState()},next:this.next,disabled:n,rtl:s})},t.prototype.renderButtonGroups=function(){var n=this,r=this.props.customButtonGroup;return r?Ie.cloneElement(r,{previous:function(){return n.previous()},next:function(){return n.next()},goToSlide:function(i,o){return n.goToSlide(i,o)},carouselState:this.getState()}):null},t.prototype.renderDotsList=function(){var n=this;return Ie.createElement(U4.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return n.getState()}})},t.prototype.renderCarouselItems=function(){var n=[];if(this.props.infinite){var r=Ie.Children.toArray(this.props.children);n=pe.getClones(this.state.slidesToShow,r)}return Ie.createElement(V4.default,{clones:n,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:pe.notEnoughChildren(this.state),props:this.props})},t.prototype.render=function(){var n=this.props,r=n.deviceType,i=n.arrows,o=n.renderArrowsWhenDisabled,s=n.removeArrowOnDeviceType,a=n.infinite,l=n.containerClass,u=n.sliderClass,f=n.customTransition,c=n.additionalTransfrom,p=n.renderDotsOutside,w=n.renderButtonGroupOutside,y=n.className,v=n.rtl,x=pe.getInitialState(this.state,this.props),h=x.shouldRenderOnSSR,d=x.shouldRenderAtAll,m=pe.isInLeftEnd(this.state),S=pe.isInRightEnd(this.state),C=i&&!(s&&(r&&-1<s.indexOf(r)||this.state.deviceType&&-1<s.indexOf(this.state.deviceType)))&&!pe.notEnoughChildren(this.state)&&d,_=!a&&m,k=!a&&S,R=Ts.getTransform(this.state,this.props);return Ie.createElement(Ie.Fragment,null,Ie.createElement("div",{className:"react-multi-carousel-list "+l+" "+y,dir:v?"rtl":"ltr",ref:this.containerRef},Ie.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+u,style:{transition:this.isAnimationAllowed?f||um:"none",overflow:h?"hidden":"unset",transform:"translate3d("+(R+c)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),C&&(!_||o)&&this.renderLeftArrow(_),C&&(!k||o)&&this.renderRightArrow(k),d&&!w&&this.renderButtonGroups(),d&&!p&&this.renderDotsList()),d&&p&&this.renderDotsList(),d&&w&&this.renderButtonGroups())},t.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},t}(Ie.Component);Ld.default=W4;Object.defineProperty(Ad,"__esModule",{value:!0});var H4=Ld;Ad.default=H4.default;var Y4=Ad;const jy=hm(Y4),Q4=A.section`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    background: url("OnasBG.webp");
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    width: 100%;
    height: 100%;
  }
`,G4=A.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
  margin-bottom: 3.2rem;

  justify-content: center;
  @media (max-width: 35em) {
    grid-template-columns: 1fr;
  }
`,$i=A.div`
  padding: 1.2rem;

  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    rgb(242, 242, 241, 0.6),
    rgba(242, 242, 241, 0.2)
  );
`,cm=A.img`
  width: 100%;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  filter: brightness(0.9) grayscale(0.1) opacity(0.9);
`;function K4(){return g.jsx(Q4,{style:{marginTop:"6.4rem"},children:g.jsxs(ft,{triggerOnce:!0,children:[g.jsxs(Al,{children:[g.jsx(U,{as:"h2",id:"kontakt",style:{marginTop:"3.2rem"},children:"Kontakt"}),g.jsx(ft,{delay:500,children:g.jsxs(G4,{children:[g.jsxs($i,{children:[g.jsx(U,{as:"h3",children:"Telefon"}),g.jsx(U,{as:"h4",children:"663 216 132"})]}),g.jsxs($i,{children:[g.jsx(U,{as:"h3",children:"Email"}),g.jsx(U,{as:"h4",children:"biceps.legionowo@wp.pl"})]}),g.jsxs($i,{children:[g.jsx(U,{as:"h3",children:"Adres"}),g.jsx(U,{as:"h4",children:"Stefana Batorego 11, 05-120 Legionowo"})]}),g.jsxs($i,{children:[g.jsx(U,{as:"h3",children:"Facebook"}),g.jsx(Ia,{effect:"pulse",delay:500,triggerOnce:!0,children:g.jsx(U,{as:"h4",children:g.jsx("a",{href:"https://www.facebook.com/p/Sklep-kulturystyczny-biceps-100063014632640/",target:"_blank",rel:"noreferrer",children:"Sklep-kulturystyczny-biceps"})})})]}),g.jsxs($i,{children:[g.jsx(U,{as:"h3",children:"Konsultacje"}),g.jsx("p",{children:"Nie ważne czy jesteś początkującym leszczem czy hardkorowym koksiarzem - zapraszamy na konsultacje suplementacyjne"}),g.jsx(U,{as:"h3",children:"Zamów i odbierz"}),g.jsx("p",{children:"Zamów odżywki przez telefon i odbierz osobiście. Dostaniesz rabat!"}),g.jsx(cm,{src:"Lokal1.webp",alt:"fotografia lokalu"})]}),g.jsx(cm,{src:"Kasa.webp",alt:"kasa sklepu Biceps"})]})})]}),g.jsx(ft,{children:g.jsx("iframe",{title:"mapa biceps",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608.6018243594581!2d20.93587066969159!3d52.39929411653354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eb816f895b93f%3A0x7ebd23a3f4b32fd8!2sStefana%20Batorego%2011%2C%2005-120%20Legionowo!5e0!3m2!1spl!2spl!4v1709817944225!5m2!1spl!2spl"})})]})})}const X4={desktop:{breakpoint:{max:3e3,min:1024},items:2,slidesToSlide:1},tablet:{breakpoint:{max:1024,min:464},items:1,slidesToSlide:1},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1}},kr=A.img`
  width: 100%;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
`,Cr=A.div`
  padding: 2.4rem;
`;function q4(){return g.jsxs(jy,{responsive:X4,infinite:!0,autoPlay:!0,autoPlaySpeed:4e3,keyBoardControl:!0,customTransition:"all .5s",transitionDuration:500,containerClass:"carousel-container",removeArrowOnDeviceType:["tablet","mobile"],children:[g.jsx(Cr,{children:g.jsx(kr,{src:"Sklep1.webp",alt:"wnętrze sklepu"})}),g.jsx(Cr,{children:g.jsx(kr,{src:"Sklep2.webp",alt:"wnętrze sklepu"})}),g.jsx(Cr,{children:g.jsx(kr,{src:"Sklep3.webp",alt:"wnętrze sklepu"})}),g.jsx(Cr,{children:g.jsx(kr,{src:"Sklep4.webp",alt:"wnętrze sklepu"})}),g.jsx(Cr,{children:g.jsx(kr,{src:"Sklep5.webp",alt:"wnętrze sklepu"})}),g.jsx(Cr,{children:g.jsx(kr,{src:"Sklep6.webp",alt:"wnętrze sklepu"})})]})}const J4=A.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
`,ie=A.span`
  color: var(--font-medium-dark);
  font-size: 2rem;
  border: solid 1px var(--font-medium-dark);
  padding: 0.3rem 0.6rem;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-sm);
  background: linear-gradient(
    to bottom,
    rgb(242, 242, 241, 0.7),
    rgba(242, 242, 241, 0.4)
  );
`,Z4=A.div`
  background: linear-gradient(
      to bottom,
      rgb(242, 242, 241, 0.6),
      rgba(242, 242, 241, 0.2)
    ),
    url("OnasBG.webp");
  border-radius: var(--border-radius-lg);
  padding: 1.8rem;
  margin-bottom: 4.8rem;
  background-position: center;
  background-size: cover;
  box-shadow: var(--shadow-md);
`,eC=A.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  /* align-items: center; */
  justify-content: center;
`,Ru=A.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border: 2px solid var(--font-light-dark);
  padding: 1.2rem;
  border-radius: var(--border-radius-lg);
  width: fit-content;
  box-shadow: var(--shadow-md);
  transition: transform 0.5s;
  &:hover {
    transform: translateY(-0.6rem);
  }
`,qt=A.span`
  font-size: 1.8rem;
  color: var(--font-dark-dark);
`,Ps=A.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  gap: 1.2rem;
`,tC=A(Bg)`
  font-size: 1.8rem;
  color: var(--font-light-dark);
  font-weight: 600;
`;function nC(){return g.jsx(ft,{triggerOnce:!0,children:g.jsx("section",{children:g.jsxs(Al,{children:[g.jsx(U,{as:"h2",id:"onas",children:"O Bicepsie"}),g.jsx(ft,{triggerOnce:!0,children:g.jsxs(Z4,{children:[g.jsx(U,{as:"h3",children:"Wiele lat doswiadczenia w suplementacji profesjonalnych kulturystów i zawodników MMA."}),g.jsx("p",{style:{textAlign:"center",fontStyle:"italic"},children:'"W sporcie nie ma rzeczy niemożliwych..."'}),g.jsx("p",{style:{marginBottom:"3.2rem"},children:"Wyniki uzyskiwane w sporcie zawodowym zależą od dobrej suplementacji. Wyczynowy, profesjonalny sport wymaga profesjonalnych odżywek po to by być na siłowni i zawodach lepszym od innych!"}),g.jsx(U,{as:"h3",children:"Odżywki najlepszych producentów:"}),g.jsx(Ia,{effect:"pulse",delay:500,triggerOnce:!0,children:g.jsxs(J4,{children:[g.jsx(ie,{children:"Activlab"}),g.jsx(ie,{children:"Trec"}),g.jsx(ie,{children:"Gear"}),g.jsx(ie,{children:"Hi-tec"}),g.jsx(ie,{children:" Olimp (cały asortyment)"}),g.jsx(ie,{children:"Real-Pharm (cały asortyment)"}),g.jsx(ie,{children:"UNS"}),g.jsx(ie,{children:"Fitness Authority"}),g.jsx(ie,{children:"Scitec"}),g.jsx(ie,{children:"Rx-Gold"}),g.jsx(ie,{children:"Sport Definition"}),g.jsx(ie,{children:"Biotech (cały asortyment)"}),g.jsx(ie,{children:"Arnold Series"}),g.jsx(ie,{children:"Muscle Pharm"}),g.jsx(ie,{children:"PVL Mutant"}),g.jsx(ie,{children:"SAN"}),g.jsx(ie,{children:"Nutrend"}),g.jsx(ie,{children:"Multipower"}),g.jsx(ie,{children:"Dymatize"}),g.jsx(ie,{children:"Syntrax"}),g.jsx(ie,{children:"Premium Nutrition"}),g.jsx(ie,{children:"Probody"}),g.jsx(ie,{children:"Extrifit USA"}),g.jsx(ie,{children:"Inne marki dostępne pod zamówienie"})]})}),g.jsx(U,{as:"h3",style:{marginTop:"1.8rem"},children:"Negocjujemy ceny!"}),g.jsx("p",{style:{textAlign:"center",fontStyle:"italic",marginTop:"1.8rem"},children:'"Jeśli chcesz kupić u nas odżywkę lub suplement przyjdź a my postaramy się zbić tak cenę aby była równa lub niższa od aukcji na Allegro."'})]})}),g.jsx(U,{as:"h3",children:"Odzwiedź Biceps, napisz lub zadzwoń:"}),g.jsx(Ia,{effect:"pulse",triggerOnce:!0,children:g.jsxs(eC,{children:[g.jsxs(Ru,{children:[g.jsx(U,{as:"h4",children:"Godziny otwarca"}),g.jsxs(Ps,{children:[g.jsx(qt,{children:"Poniedziałek - piątek:"}),g.jsx(qt,{children:"10:00 - 18:00"})]}),g.jsxs(Ps,{children:[g.jsx(qt,{children:"Sobota:"}),g.jsx(qt,{children:"10:00 - 14:00"})]}),g.jsxs(Ps,{children:[g.jsx(qt,{children:"Niedziela:"}),g.jsx(qt,{children:"Na telefon"})]}),g.jsx(Ps,{children:g.jsx(qt,{children:"Stefana Batorego 11, 05-120 Legionowo"})})]}),g.jsxs(Ru,{children:[g.jsx(U,{as:"h4",children:"Telefon:"}),g.jsx(qt,{children:"663 216 132"}),g.jsx(U,{as:"h4",children:"E-mail:"}),g.jsx(qt,{children:"biceps.legionowo@wp.pl"})]}),g.jsxs(Ru,{children:[g.jsx(U,{as:"h4",children:"Facebook:"}),g.jsx(tC,{to:"https://www.facebook.com/p/Sklep-kulturystyczny-biceps-100063014632640/",target:"_blank",children:"Sklep-kulturystyczny-biceps"})]})]})}),g.jsx(q4,{})]})})})}const rC=A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.2rem;
  gap: 1.8rem;
  box-shadow: var(--shadow-sm);
`,js=A.img`
  max-height: 6rem;
  filter: brightness(0) grayscale(1)
    drop-shadow(15px 10px 10px rgba(0, 0, 0, 0.2));
  opacity: 0.8;
  @media (max-width: 35em) {
    max-height: 3rem;
  }
`;function iC(){return g.jsx(rC,{children:g.jsxs(ft,{direction:"down",triggerOnce:!0,children:[g.jsx(js,{src:"LogoOlimp.png",alt:"logo marki Olimp"}),g.jsx(js,{src:"LogoActivelab.png",alt:"logo marki ActiveLab"}),g.jsx(js,{src:"LogoTrec.png",alt:"logo marki Trec"}),g.jsx(js,{src:"LogoHitec.png",alt:"logo marki Hi-Tec"})]})})}const oC={desktop:{breakpoint:{max:3e3,min:1024},items:3,slidesToSlide:3},tablet:{breakpoint:{max:1024,min:464},items:2,slidesToSlide:2},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1}},Kn=A.div`
  display: flex;
  gap: 1.2rem;
`,Xn=A.img`
  max-width: 10rem;
  max-height: 10rem;
  border-radius: 100px;
`,qn=A.span`
  font-size: 1.4rem;
`,Jn=A.div``,sC=A.div`
  margin-top: 4.8rem;
  margin-bottom: 4.8rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.2rem;
  justify-content: center;
  justify-items: center;

  @media (max-width: 64em) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 35em) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Jt=A.div`
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
  overflow: hidden;
  transition: transform 0.5s;
  &:hover {
    transform: translateY(-0.6rem);
  }
`,Zt=A.img`
  width: 100%;
  filter: brightness(0.95) grayscale(0.05) opacity(0.95);
`,en=A.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`,aC=A.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.4rem;
  @media (max-width: 35em) {
    grid-template-columns: 1fr;
  }
`,fm=A.div`
  border: 2px solid var(--font-light-dark);
  padding: 1.2rem;
  border-radius: var(--border-radius-lg);
  width: fit-content;
  box-shadow: var(--shadow-md);
`;function lC(){return g.jsx("section",{children:g.jsx(ft,{triggerOnce:!0,children:g.jsxs(Al,{children:[g.jsx(U,{as:"h2",id:"oferta",children:"Oferta"}),g.jsxs(jy,{responsive:oC,infinite:!0,autoPlay:!0,autoPlaySpeed:4e3,keyBoardControl:!0,customTransition:"all .5s",transitionDuration:500,containerClass:"carousel-container",removeArrowOnDeviceType:["tablet","mobile"],children:[g.jsxs(Kn,{children:[g.jsx(Xn,{src:"Bieganie.webp",alt:"biegnąca osoba"}),g.jsxs(Jn,{children:[g.jsx("p",{children:"Bieganie"}),g.jsx(qn,{children:"Suplementy dla biegaczy, witaminy, dodatki izotoniczne, stroje"})]})]}),g.jsxs(Kn,{children:[g.jsx(Xn,{src:"Kulturystyka.webp",alt:"napięty kulturysta"}),g.jsxs(Jn,{children:[g.jsx("p",{children:"Kulturystyka"}),g.jsx(qn,{children:"Pełny zakres odżywek i suplementów najlepszych producentów"})]})]}),g.jsxs(Kn,{children:[g.jsx(Xn,{src:"Stretching.webp",alt:"rozciągająca się osoba"}),g.jsxs(Jn,{children:[g.jsx("p",{children:"Stretching"}),g.jsx(qn,{children:"Suplementacja, stroje, akcesoria na stanie oraz na zamówienia indywidualne"})]})]}),g.jsxs(Kn,{children:[g.jsx(Xn,{src:"Box.webp",alt:"osoba uprawiająca boks"}),g.jsxs(Jn,{children:[g.jsx("p",{children:"Boks"}),g.jsx(qn,{children:"Ochraniacze, rękawice, odżywki witaminowe, na rzeżbę i izotoniczne"})]})]}),g.jsxs(Kn,{children:[g.jsx(Xn,{src:"Taniec.webp",alt:"tancerka"}),g.jsxs(Jn,{children:[g.jsx("p",{children:"Taniec"}),g.jsx(qn,{children:"Suplementy i odżywki przygotowujące do zawodów, odwadniające"})]})]}),g.jsxs(Kn,{children:[g.jsx(Xn,{src:"Plywanie.webp",alt:"pływająca osoba"}),g.jsxs(Jn,{children:[g.jsx("p",{children:"Pływanie"}),g.jsx(qn,{children:"Wspomaganie suplementacyjne pod kątem wydajnościowym, dotlenianie"})]})]}),g.jsxs(Kn,{children:[g.jsx(Xn,{src:"Tenis.webp",alt:"osoba grająca w tenisa"}),g.jsxs(Jn,{children:[g.jsx("p",{children:"Tenis"}),g.jsx(qn,{children:"Profesjonalne środki wspomagające wydajność fizyczną i umysłową"})]})]})]}),g.jsx(ft,{delay:500,triggerOnce:!0,children:g.jsx(Ia,{effect:"pulse",triggerOnce:!0,children:g.jsxs(sC,{children:[g.jsxs(Jt,{children:[g.jsx(Zt,{src:"OfertaSpalacze.webp",alt:"zdjęcie suplementów spalaczy tłuszczu"}),g.jsxs(en,{children:[g.jsx(U,{as:"h4",style:{textAlign:"center"},children:"Spalacze tłuszczu"}),g.jsx("p",{style:{textJustify:"auto"},children:"Specjalna kombinacja substancji przyspieszających redukcję tkanki tłuszczowej"})]})]}),g.jsxs(Jt,{children:[g.jsx(Zt,{src:"OfertaIzotoniki.webp",alt:"zdjęcie suplementów napoje izotoniczne"}),g.jsxs(en,{children:[g.jsx(U,{as:"h4",style:{textAlign:"center"},children:"Napoje izotoniczne"}),g.jsx("p",{style:{textJustify:"auto"},children:"Zwiększają efektywność treningu, pomagają wprowadzić organizm w stan anabolizmu"})]})]}),g.jsxs(Jt,{children:[g.jsx(Zt,{src:"OfertaWitaminy.webp",alt:"zdjęcie suplementów witamin"}),g.jsxs(en,{children:[g.jsx(U,{as:"h4",style:{textAlign:"center"},children:"Witaminy, mikroelementy"}),g.jsx("p",{style:{textJustify:"auto"},children:"To związki niezbędne w naszym organizmie, które muszą być dostarczane do ustroju z żywnością"})]})]}),g.jsxs(Jt,{children:[g.jsx(Zt,{src:"OfertaMatrixy.webp",alt:"zdjęcie suplementów białka"}),g.jsxs(en,{children:[g.jsx(U,{as:"h4",style:{textAlign:"center"},children:"Matrixy, kazeiny, białka"}),g.jsx("p",{style:{textJustify:"auto"},children:"Najlepszym rozwiązaniem jest spożycie mieszanki białek, czyli tzw. matrixu białkowego"})]})]}),g.jsxs(Jt,{children:[g.jsx(Zt,{src:"OfertaKreatyny.webp",alt:"zdjęcie suplementów kreatyna i przedtreningówka"}),g.jsxs(en,{children:[g.jsx(U,{as:"h4",style:{textAlign:"center"},children:"Kreatyny i pre-workout'y"}),g.jsx("p",{style:{textJustify:"auto"},children:"Dodają energii, zwiększa motywację i wytrzymałość podczas treningu, aby utrzymać Cię w formie"})]})]}),g.jsxs(Jt,{children:[g.jsx(Zt,{src:"OfertaBcaa.webp",alt:"zdjęcie suplementów bcaa"}),g.jsxs(en,{children:[g.jsx(U,{as:"h4",style:{textAlign:"center"},children:"BCAA i Glutaminy"}),g.jsx("p",{style:{textJustify:"auto"},children:"Rozgałęzione aminokwasy - leucyna, izoleucyna i walina - są niezbędne dla wzrostu mięśni."})]})]}),g.jsxs(Jt,{children:[g.jsx(Zt,{src:"OfertaIzolaty.webp",alt:"zdjęcie suplementów  izolat białka"}),g.jsxs(en,{children:[g.jsx(U,{as:"h4",style:{textAlign:"center"},children:"Izolaty białkowe"}),g.jsx("p",{style:{textJustify:"auto"},children:"Izolaty białek serwatki są jednymi z najszybszych białek dostępnych na rynku (obok hydrolizatów)"})]})]}),g.jsxs(Jt,{children:[g.jsx(Zt,{src:"OfertaMasa.webp",alt:"zdjęcie suplementów na masę"}),g.jsxs(en,{children:[g.jsx(U,{as:"h4",style:{textAlign:"center"},children:"Odżywki na masę"}),g.jsx("p",{style:{textJustify:"auto"},children:"Nie ma prostszego sposobu na podbicie kalorii w diecie niż spożycie odżywki typu gainier"})]})]}),g.jsxs(Jt,{children:[g.jsx(Zt,{src:"OfertaGainer.webp",alt:"zdjęcie suplementów gainery"}),g.jsxs(en,{children:[g.jsx(U,{as:"h4",style:{textAlign:"center"},children:"Odżywki węglowodanowe"}),g.jsx("p",{style:{textJustify:"auto"},children:"Odżywki węglowodanowe produkty przeznaczone głównie do zahamowania katabolizmu po treningu"})]})]})]})})}),g.jsx(U,{as:"h3",children:"Dodatkowe usługi"}),g.jsxs(aC,{children:[g.jsxs(fm,{children:[g.jsx(U,{as:"h4",style:{marginBottom:"1.8rem"},children:"Porady i cykle"}),g.jsx("p",{children:"Porady żywieniowe i suplementacyjne"}),g.jsx("p",{children:"Rozpiski cykli i treningów"}),g.jsx("p",{children:"Programy trenigowe dla początkujących, średniozaawansowanych i profesjonalistów"})]}),g.jsxs(fm,{children:[g.jsx(U,{as:"h4",style:{marginBottom:"1.8rem"},children:"Wpadnij do naszego sklepu"}),g.jsx("p",{children:"Ustalimy co Ci jest potrzebne i jakie ilości"}),g.jsx("p",{children:"Wynegocjujesz lepsze ceny niż na Allegro"}),g.jsx("p",{children:"Oferujemy spcecjalne zniżki przy pakietach i zakupach hurtowych!"})]})]})]})})})}const uC=A.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--font-dark-dark);
  background: linear-gradient(to bottom, rgb(0, 0, 0, 0.4), rgb(0, 0, 0, 0.3));
  color: var(--font-dark-white);
  font-size: 1.4rem;
  padding: 15px;
  text-align: center;
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
  gap: 1.2rem;
  z-index: 2;
`,cC=A.button`
  background-color: var(--font-dark-white);
  color: var(--font-dark-dark);
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: fit-content;
  font-family: inherit;
  font-weight: 600;
`;function fC(){const[e,t]=E.useState(!1),n=()=>{localStorage.setItem("cookiesAccepted","true"),t(!0)};return E.useEffect(()=>{localStorage.getItem("cookiesAccepted")&&t(!0)},[]),e?null:g.jsxs(uC,{children:[g.jsx("span",{children:"Ta witryna używa plików cookies, aby zapewnić najlepszą jakość korzystania z naszej strony."}),g.jsx(cC,{onClick:n,children:"Akceptuj"})]})}function dC(){return g.jsxs(g.Fragment,{children:[g.jsx(fC,{}),g.jsx(a4,{}),g.jsx(iC,{}),g.jsx(nC,{}),g.jsx(lC,{}),g.jsx(K4,{})]})}const pC=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},hC=A.button`
  border: none;
  background: none;
  cursor: pointer;
`,mC=A.img`
  background: none;
  /* padding: 0.6rem; */
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.2));
  transition: all 0.5s;
  &:hover {
    opacity: 0.8;
    filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.3));
  }
`;function Oy(){return g.jsx(hC,{onClick:pC,children:g.jsx(mC,{src:"LogoBiceps.png",alt:"logo sklepu biceps"})})}const gC=A.footer`
  position: relative;
  overflow: hidden;

  /* &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;

    background-image: url("OnasBG.webp");
    background-size: cover;
    background-position: center;

    width: 100%;
    height: 100%;
    opacity: 0.4;
    z-index: -1;
  } */
`,yC=A.div`
  margin: 0 auto;
  padding: 6.4rem 3.2rem 1.8rem;
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;
`,vC=A.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(2, 1fr);
  font-size: 1.6rem;
  justify-content: center;
  justify-items: center;
  color: var(--font-medium-dark);
  font-weight: 400;
`,wn=A.p`
  margin-bottom: 0.6rem;
`,dm=A.p`
  font-size: 1.2rem;
  opacity: 0.5;
  font-weight: 600;
  text-align: center;
  color: var(--font-verylight-dark);
`,wC=A(Bg)`
  color: var(--font-medium-dark);
`;function SC(){return g.jsx(gC,{children:g.jsx(ft,{triggerOnce:!0,children:g.jsxs(yC,{children:[g.jsx(ft,{direction:"down",children:g.jsx(Oy,{})}),g.jsx(ft,{delay:500,triggerOnce:!0,children:g.jsxs(vC,{children:[g.jsxs("div",{children:[g.jsx(wn,{children:g.jsx("a",{href:"#",children:"Strona główna"})}),g.jsx(wn,{children:g.jsx("a",{href:"#onas",children:"O Bicepsie"})}),g.jsx(wn,{children:g.jsx("a",{href:"#oferta",children:"Oferta"})}),g.jsx(wn,{children:g.jsx("a",{href:"#kontakt",children:"Kontakt"})})]}),g.jsxs("div",{children:[g.jsx(wn,{children:"Telefon: 663 216 132 "}),g.jsx(wn,{children:"E-mail: biceps.legionowo@wp.pl"}),g.jsxs(wn,{children:["Facebook:",g.jsxs(wC,{to:"https://www.facebook.com/p/Sklep-kulturystyczny-biceps-100063014632640/",target:"_blank",children:[" ","Sklep-kulturystyczny-biceps"]})]}),g.jsx(wn,{children:"Adres: Stefana Batorego 11, 05-120 Legionowo"})]})]})}),g.jsxs("div",{children:[g.jsxs(dm,{children:["© ",new Date().getFullYear()," Sklep Kulturystyczny Biceps"]}),g.jsx(dm,{children:g.jsx("span",{style:{fontSize:"1rem"},children:"By RobFrontend"})})]})]})})})}const xC=A.header`
  display: flex;
  padding: 1.8rem 3.2rem;
  align-items: center;
  justify-content: space-between;

  background: linear-gradient(
    to bottom,
    rgb(242, 242, 241),
    rgba(242, 242, 241, 0.8)
  );
  background-position: top;
  background-size: cover;
  overflow: hidden;
  height: 8rem;
`,kC=A.nav`
  display: flex;
  gap: 3.2rem;
`,pm=A.a`
  font-size: 1.8rem;
  padding: 0.4rem 1rem;
  background: none;
  border: none;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: var(--border-radius-sm);
  border: solid 2px var(--font-verylight-dark);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    box-shadow: var(--shadow-md);
    border-radius: var(--border-radius-lg);
    border: solid 2px var(--font-dark-dark);
  }
`;function CC(){return g.jsx(xC,{children:g.jsxs(ft,{triggerOnce:!0,children:[g.jsx(om,{triggerOnce:!0,children:g.jsx(Oy,{})}),g.jsx(kC,{children:g.jsxs(om,{direction:"right",triggerOnce:!0,children:[g.jsx(pm,{href:"#oferta",children:"Oferta"}),g.jsx(pm,{href:"#kontakt",children:"Kontakt"})]})})]})})}function EC(){return g.jsxs(g.Fragment,{children:[g.jsx(_3,{children:g.jsx(CC,{})}),g.jsx(dC,{}),g.jsx(SC,{})]})}function _C(){return g.jsxs(g.Fragment,{children:[g.jsx(i3,{}),g.jsx(qS,{children:g.jsx(WS,{children:g.jsx(Fg,{index:!0,element:g.jsx(EC,{})})})})]})}Iu.createRoot(document.getElementById("root")).render(g.jsx(at.StrictMode,{children:g.jsx(_C,{})}));
